import { Redis } from '@upstash/redis';

export type RateLimitMode = 'off' | 'monitor' | 'strict';
export type RateLimitBackend = 'disabled' | 'redis' | 'memory';
export type RateLimitGroup =
    | 'chat'
    | 'translation'
    | 'vision'
    | 'ritual'
    | 'astrology'
    | 'insight';
export type RateLimitModeSource = 'global' | 'group';

export interface RateLimitPolicy {
    limit: number;
    windowSec: number;
    keyPrefix: string;
    group?: RateLimitGroup;
}

export interface RateLimitResult {
    allowed: boolean;
    exceeded: boolean;
    mode: RateLimitMode;
    modeSource: RateLimitModeSource;
    backend: RateLimitBackend;
    limit: number;
    remaining: number;
    count: number;
    resetAtMs: number;
    retryAfterSec: number;
    group?: RateLimitGroup;
}

type MemoryCounter = { count: number; resetAtMs: number };

const memoryStore = new Map<string, MemoryCounter>();
let redisClient: Redis | null | undefined;

export const RATE_LIMIT_POLICIES = {
    chat: { limit: 20, windowSec: 60, keyPrefix: 'chat', group: 'chat' },
    translate: { limit: 30, windowSec: 60, keyPrefix: 'translate', group: 'translation' },
    translateBulk: { limit: 10, windowSec: 60, keyPrefix: 'translate-bulk', group: 'translation' },
    identifyDeity: { limit: 8, windowSec: 60, keyPrefix: 'identify-deity', group: 'vision' },
    pujaVidhi: { limit: 12, windowSec: 60, keyPrefix: 'puja-vidhi', group: 'ritual' },
    kundli: { limit: 8, windowSec: 60, keyPrefix: 'kundli', group: 'astrology' },
    insight: { limit: 15, windowSec: 60, keyPrefix: 'insight', group: 'insight' },
    prashna: { limit: 20, windowSec: 60, keyPrefix: 'prashna', group: 'astrology' }
} satisfies Record<string, RateLimitPolicy>;

const GROUP_ENV_KEYS: Record<RateLimitGroup, string> = {
    chat: 'API_RATE_LIMIT_MODE_CHAT',
    translation: 'API_RATE_LIMIT_MODE_TRANSLATION',
    vision: 'API_RATE_LIMIT_MODE_VISION',
    ritual: 'API_RATE_LIMIT_MODE_RITUAL',
    astrology: 'API_RATE_LIMIT_MODE_ASTROLOGY',
    insight: 'API_RATE_LIMIT_MODE_INSIGHT'
};

function parseMode(value?: string): RateLimitMode | null {
    if (!value) return null;
    const normalized = value.toLowerCase();
    if (normalized === 'off' || normalized === 'monitor' || normalized === 'strict') return normalized;
    return null;
}

export function getApiRateLimitMode(): RateLimitMode {
    const fromEnv = parseMode(process.env.API_RATE_LIMIT_MODE);
    if (fromEnv) return fromEnv;
    return process.env.NODE_ENV === 'production' ? 'monitor' : 'off';
}

function resolveGroupEnvKey(group: RateLimitGroup): string {
    return GROUP_ENV_KEYS[group] ?? `API_RATE_LIMIT_MODE_${group.toUpperCase()}`;
}

export function getApiRateLimitModeForGroup(group: RateLimitGroup): RateLimitMode | null {
    const envKey = resolveGroupEnvKey(group);
    return parseMode(process.env[envKey]);
}

function resolveRateLimitMode(policy: RateLimitPolicy): { mode: RateLimitMode; source: RateLimitModeSource } {
    if (policy.group) {
        const fromGroup = getApiRateLimitModeForGroup(policy.group);
        if (fromGroup) {
            return { mode: fromGroup, source: 'group' };
        }
    }
    return { mode: getApiRateLimitMode(), source: 'global' };
}

function getRedisClient(): Redis | null {
    if (redisClient !== undefined) return redisClient;

    // Keep tests deterministic and fully local.
    if (process.env.NODE_ENV === 'test') {
        redisClient = null;
        return redisClient;
    }

    if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
        redisClient = Redis.fromEnv();
        return redisClient;
    }

    redisClient = null;
    return redisClient;
}

function getClientIdentifier(request: Request): string {
    const fromForwarded = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
    const fromRealIp = request.headers.get('x-real-ip')?.trim();
    const fromCf = request.headers.get('cf-connecting-ip')?.trim();

    const raw = fromForwarded || fromRealIp || fromCf || 'anonymous';
    // Redis-safe key segment
    return raw.replace(/[^a-zA-Z0-9:._-]/g, '_').slice(0, 128);
}

function getWindowState(nowMs: number, windowSec: number): { windowBucket: number; resetAtMs: number } {
    const windowMs = windowSec * 1000;
    const windowBucket = Math.floor(nowMs / windowMs);
    const resetAtMs = (windowBucket + 1) * windowMs;
    return { windowBucket, resetAtMs };
}

function incrementInMemory(key: string, nowMs: number, resetAtMs: number): number {
    const existing = memoryStore.get(key);
    if (!existing || existing.resetAtMs <= nowMs) {
        memoryStore.set(key, { count: 1, resetAtMs });
        return 1;
    }

    const nextCount = existing.count + 1;
    memoryStore.set(key, { count: nextCount, resetAtMs: existing.resetAtMs });
    return nextCount;
}

async function incrementCounter(key: string, windowSec: number, resetAtMs: number, nowMs: number): Promise<{ count: number; backend: RateLimitBackend }> {
    const redis = getRedisClient();
    if (redis) {
        try {
            const count = await redis.incr(key);
            if (count === 1) {
                await redis.expire(key, windowSec);
            }
            return { count, backend: 'redis' };
        } catch (error) {
            console.error('[RATE_LIMIT] Redis unavailable. Falling back to memory store.', error);
        }
    }

    const count = incrementInMemory(key, nowMs, resetAtMs);
    return { count, backend: 'memory' };
}

export async function applyApiRateLimit(request: Request, routeName: string, policy: RateLimitPolicy): Promise<RateLimitResult> {
    const { mode, source } = resolveRateLimitMode(policy);
    if (mode === 'off') {
        return {
            allowed: true,
            exceeded: false,
            mode,
            modeSource: source,
            backend: 'disabled',
            limit: policy.limit,
            remaining: policy.limit,
            count: 0,
            resetAtMs: Date.now(),
            retryAfterSec: 0,
            group: policy.group
        };
    }

    const nowMs = Date.now();
    const { windowBucket, resetAtMs } = getWindowState(nowMs, policy.windowSec);
    const clientId = getClientIdentifier(request);
    const key = `rate_limit:v1:${policy.keyPrefix}:${clientId}:${windowBucket}`;

    const { count, backend } = await incrementCounter(key, policy.windowSec, resetAtMs, nowMs);
    const exceeded = count > policy.limit;
    const allowed = mode !== 'strict' || !exceeded;
    const remaining = Math.max(0, policy.limit - count);
    const retryAfterSec = Math.max(1, Math.ceil((resetAtMs - nowMs) / 1000));

    if (exceeded && mode === 'monitor') {
        console.warn(`[RATE_LIMIT][MONITOR] ${routeName} exceeded for client ${clientId}. count=${count}, limit=${policy.limit}`);
    }

    return {
        allowed,
        exceeded,
        mode,
        modeSource: source,
        backend,
        limit: policy.limit,
        remaining,
        count,
        resetAtMs,
        retryAfterSec,
        group: policy.group
    };
}

export function getRateLimitHeaders(result: RateLimitResult): Record<string, string> {
    const headers: Record<string, string> = {
        'X-RateLimit-Limit': String(result.limit),
        'X-RateLimit-Remaining': String(result.remaining),
        'X-RateLimit-Reset': String(Math.floor(result.resetAtMs / 1000)),
        'X-RateLimit-Mode': result.mode,
        'X-RateLimit-Mode-Source': result.modeSource,
        'X-RateLimit-Backend': result.backend
    };

    if (result.group) {
        headers['X-RateLimit-Group'] = result.group;
    }

    if (result.exceeded) {
        headers['Retry-After'] = String(result.retryAfterSec);
    }

    return headers;
}
