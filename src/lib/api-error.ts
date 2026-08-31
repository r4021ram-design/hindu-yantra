import { NextResponse } from 'next/server';
import { logger } from '@/lib/logger';

export type ApiErrorCode =
    | 'VALIDATION_ERROR'
    | 'RATE_LIMITED'
    | 'MISSING_CONFIG'
    | 'UPSTREAM_RATE_LIMITED'
    | 'UPSTREAM_ERROR'
    | 'INTERNAL_ERROR';

export type ApiErrorMonitorMode = 'off' | 'monitor';

export interface ApiErrorOptions {
    route: string;
    status: number;
    code: ApiErrorCode;
    message: string;
    details?: unknown;
    headers?: Record<string, string>;
    includeSuccessFlag?: boolean;
    cause?: unknown;
    monitorMeta?: Record<string, unknown>;
}

function parseMonitorMode(value?: string): ApiErrorMonitorMode | null {
    if (!value) return null;
    const normalized = value.toLowerCase();
    if (normalized === 'off' || normalized === 'monitor') {
        return normalized;
    }
    return null;
}

export function getApiErrorMonitorMode(): ApiErrorMonitorMode {
    const fromEnv = parseMonitorMode(process.env.API_ERROR_MONITOR_MODE);
    if (fromEnv) return fromEnv;
    return process.env.NODE_ENV === 'production' ? 'monitor' : 'off';
}

export function apiError({
    route,
    status,
    code,
    message,
    details,
    headers,
    includeSuccessFlag = true,
    cause,
    monitorMeta
}: ApiErrorOptions): NextResponse {
    if (getApiErrorMonitorMode() === 'monitor') {
        const meta = {
            route,
            status,
            code,
            details,
            ...monitorMeta
        };

        if (status >= 500) {
            logger.error(`[API_ERROR] ${route} ${code}`, cause ?? meta);
        } else {
            logger.warn(`[API_ERROR] ${route} ${code}`, meta);
        }
    }

    const body: Record<string, unknown> = includeSuccessFlag
        ? { success: false, error: message, code }
        : { error: message, code };

    if (details !== undefined) {
        body.details = details;
    }

    return NextResponse.json(body, { status, headers });
}
