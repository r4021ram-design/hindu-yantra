// Server-only: Redis caching layer for Gemini API calls

import { Redis } from '@upstash/redis';
import crypto from 'crypto';
import { logger } from './logger';

// ─── Redis Singleton ────────────────────────────────────────────────────────
let redis: Redis | null | undefined;

function getRedis(): Redis | null {
    if (redis !== undefined) return redis;

    if (process.env.NODE_ENV === 'test') {
        redis = null;
        return redis;
    }

    if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
        redis = Redis.fromEnv();
        return redis;
    }

    redis = null;
    return redis;
}

// ─── Cache Key Helpers ──────────────────────────────────────────────────────

/**
 * Generate a short, deterministic hash from any data.
 * Used to create cache keys from large objects (like predictions arrays).
 */
export function hashData(data: unknown): string {
    const str = typeof data === 'string' ? data : JSON.stringify(data);
    return crypto.createHash('sha256').update(str).digest('hex').slice(0, 16);
}

/**
 * Build a namespaced cache key.
 * Example: "gemini:puja:diwali:en" or "gemini:kundli:a1b2c3d4:hi"
 */
export function buildCacheKey(namespace: string, ...segments: string[]): string {
    const safe = segments.map(s => s.replace(/[^a-zA-Z0-9._:-]/g, '_').slice(0, 64));
    return `gemini:${namespace}:${safe.join(':')}`;
}

// ─── TTL Presets (in seconds) ───────────────────────────────────────────────
export const CACHE_TTL = {
    /** Puja Vidhi — same festival, same steps. 30 days. */
    PUJA_VIDHI: 30 * 24 * 60 * 60,

    /** Kundli Remedies — same birth data = same analysis. 24 hours. */
    KUNDLI_REMEDIES: 24 * 60 * 60,

    /** Classical Report — same predictions = same synthesis. 24 hours. */
    CLASSICAL_REPORT: 24 * 60 * 60,

    /** Translation — term translations rarely change. 7 days. */
    TRANSLATION: 7 * 24 * 60 * 60,

    /** Bulk Translation — same as single translation. 7 days. */
    TRANSLATION_BULK: 7 * 24 * 60 * 60,
} as const;

// ─── Core Cache Functions ───────────────────────────────────────────────────

/**
 * Try to GET a cached value from Redis.
 * Returns null if not found, Redis unavailable, or any error.
 */
export async function cacheGet<T>(key: string): Promise<T | null> {
    const client = getRedis();
    if (!client) return null;

    try {
        const cached = await client.get<T>(key);
        if (cached !== null && cached !== undefined) {
            logger.info(`[CACHE HIT] ${key}`);
            return cached;
        }
        logger.info(`[CACHE MISS] ${key}`);
        return null;
    } catch (error) {
        logger.error(`[CACHE GET ERROR] ${key}`, { error });
        return null;
    }
}

/**
 * SET a value in Redis with a TTL.
 * Silently fails if Redis is unavailable.
 */
export async function cacheSet<T>(key: string, value: T, ttlSeconds: number): Promise<void> {
    const client = getRedis();
    if (!client) return;

    try {
        await client.set(key, value, { ex: ttlSeconds });
        logger.info(`[CACHE SET] ${key} (TTL: ${ttlSeconds}s)`);
    } catch (error) {
        logger.error(`[CACHE SET ERROR] ${key}`, { error });
    }
}

/**
 * Wrap a Gemini API call with Redis caching.
 * 
 * Usage:
 * ```ts
 * const result = await cachedGeminiCall(
 *     'puja',                            // namespace
 *     [festivalName, language],           // key segments
 *     CACHE_TTL.PUJA_VIDHI,              // TTL
 *     () => generatePujaVidhi(festivalName, language)  // actual API call
 * );
 * ```
 */
export async function cachedGeminiCall<T>(
    namespace: string,
    keySegments: string[],
    ttlSeconds: number,
    apiFn: () => Promise<T>
): Promise<{ data: T; source: 'cache' | 'live' }> {
    const key = buildCacheKey(namespace, ...keySegments);

    // 1. Try cache first
    const cached = await cacheGet<T>(key);
    if (cached !== null) {
        return { data: cached, source: 'cache' };
    }

    // 2. Call Gemini API
    const data = await apiFn();

    // 3. Store in cache (fire-and-forget)
    cacheSet(key, data, ttlSeconds).catch(() => { /* swallow */ });

    return { data, source: 'live' };
}
