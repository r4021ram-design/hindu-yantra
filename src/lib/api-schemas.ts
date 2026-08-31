import { z } from 'zod';

const NonEmptyString = z.string().trim().min(1);
const DateStringSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format. Expected YYYY-MM-DD');
const TimeStringSchema = z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Invalid time format. Expected HH:mm');

const NumericInputSchema = z
    .union([z.number(), z.string().trim().min(1)])
    .transform((value, ctx) => {
        const num = typeof value === 'number' ? value : Number(value);
        if (!Number.isFinite(num)) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Must be a valid number'
            });
            return z.NEVER;
        }
        return num;
    });

const LatitudeSchema = NumericInputSchema.refine((lat) => lat >= -90 && lat <= 90, {
    message: 'Latitude must be between -90 and 90'
});

const LongitudeSchema = NumericInputSchema.refine((lon) => lon >= -180 && lon <= 180, {
    message: 'Longitude must be between -180 and 180'
});

export const LanguageSchema = z.enum(['en', 'hi', 'gu', 'sa']);
export const TargetLanguageSchema = z.enum(['hi', 'gu', 'sa']);

const GenericObjectSchema = z.record(z.string(), z.any());

export const ChatRequestSchema = z.object({
    question: NonEmptyString.max(4000),
    panchang: GenericObjectSchema,
    language: LanguageSchema.optional(),
    userProfile: GenericObjectSchema.nullable().optional()
});

const TranslateItemSchema = z.object({
    key: NonEmptyString.max(120),
    value: NonEmptyString.max(3000)
});

export const TranslateRequestSchema = z
    .object({
        content: z.string().trim().min(1).max(10000).optional(),
        items: z.array(TranslateItemSchema).min(1).max(200).optional(),
        targetLanguage: TargetLanguageSchema,
        context: z.enum(['festival', 'astrology', 'general']).optional()
    })
    .superRefine((data, ctx) => {
        if (!data.content && !data.items) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Provide either content or items',
                path: ['content']
            });
        }
    });

export const TranslateBulkRequestSchema = z.object({
    items: z.array(
        z.object({
            id: NonEmptyString.max(100),
            text: NonEmptyString.max(3000)
        })
    ).min(1).max(200),
    language: TargetLanguageSchema
});

export const IdentifyDeityRequestSchema = z.object({
    image: z.string().min(32).max(8_000_000),
    mimeType: z.string().trim().regex(/^image\//, 'mimeType must be an image type').optional(),
    language: LanguageSchema.optional()
});

export const PujaVidhiRequestSchema = z
    .object({
        festivalName: NonEmptyString.max(160).optional(),
        festival: NonEmptyString.max(160).optional(),
        language: LanguageSchema.optional()
    })
    .superRefine((data, ctx) => {
        if (!data.festivalName && !data.festival) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Festival name is required',
                path: ['festivalName']
            });
        }
    })
    .transform((data) => ({
        festivalName: data.festivalName ?? data.festival ?? '',
        language: data.language
    }));

export const KundliRequestSchema = z.object({
    name: z.string().trim().max(120).optional(),
    date: DateStringSchema,
    time: TimeStringSchema,
    lat: LatitudeSchema,
    lon: LongitudeSchema,
    language: LanguageSchema.optional()
});

export const PrashnaRequestSchema = z.object({
    question: NonEmptyString.max(2000),
    date: DateStringSchema.optional(),
    time: TimeStringSchema.optional(),
    lat: LatitudeSchema,
    lon: LongitudeSchema,
    language: LanguageSchema.optional()
});

export const InsightRequestSchema = z.object({
    panchang: GenericObjectSchema,
    language: LanguageSchema.optional()
});
