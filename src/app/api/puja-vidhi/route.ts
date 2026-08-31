import { NextResponse } from 'next/server';
import { generatePujaVidhi } from '@/lib/gemini';
import { cachedGeminiCall, CACHE_TTL } from '@/lib/gemini-cache';
import { applyApiRateLimit, getRateLimitHeaders, RATE_LIMIT_POLICIES } from '@/lib/rate-limit';
import { PujaVidhiRequestSchema } from '@/lib/api-schemas';
import { getValidationDetails, getValidationMessage } from '@/lib/api-validation';
import { apiError } from '@/lib/api-error';

export async function POST(request: Request) {
    try {
        const rate = await applyApiRateLimit(request, '/api/puja-vidhi', RATE_LIMIT_POLICIES.pujaVidhi);
        if (!rate.allowed) {
            return apiError({
                route: '/api/puja-vidhi',
                status: 429,
                code: 'RATE_LIMITED',
                message: 'Too many requests. Please try again shortly.',
                headers: getRateLimitHeaders(rate),
                monitorMeta: {
                    mode: rate.mode,
                    backend: rate.backend,
                    count: rate.count,
                    limit: rate.limit
                }
            });
        }

        // Check for API key
        if (!process.env.GEMINI_API_KEY) {
            return apiError({
                route: '/api/puja-vidhi',
                status: 500,
                code: 'MISSING_CONFIG',
                message: 'Gemini API key not configured',
                monitorMeta: { missingEnv: 'GEMINI_API_KEY' }
            });
        }

        const parsedBody = PujaVidhiRequestSchema.safeParse(await request.json());
        if (!parsedBody.success) {
            return apiError({
                route: '/api/puja-vidhi',
                status: 400,
                code: 'VALIDATION_ERROR',
                message: getValidationMessage(parsedBody.error),
                details: getValidationDetails(parsedBody.error)
            });
        }
        const { festivalName: festival, language = 'en' } = parsedBody.data;

        // Normalize festival name for consistent cache keys
        const normalizedFestival = festival.toLowerCase().trim().replace(/\s+/g, '-');

        // Generate Puja Vidhi with Redis caching (30-day TTL)
        const { data: responseText, source } = await cachedGeminiCall(
            'puja',
            [normalizedFestival, language],
            CACHE_TTL.PUJA_VIDHI,
            () => generatePujaVidhi(festival, language)
        );

        console.log(`✓ Puja Vidhi for "${festival}" (source: ${source})`);

        return NextResponse.json({
            success: true,
            data: {
                festival,
                language,
                vidhi: responseText,
                source
            }
        });

    } catch (error: any) {
        console.error('Puja Vidhi Error:', error);
        return apiError({
            route: '/api/puja-vidhi',
            status: 500,
            code: 'UPSTREAM_ERROR',
            message: 'Failed to generate Puja Vidhi',
            details: error?.message || String(error),
            cause: error
        });
    }
}
