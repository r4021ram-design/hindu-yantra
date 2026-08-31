import { z } from 'zod';

// --- Puja Vidhi Schema ---
export const PujaVidhiSchema = z.object({
    significance: z.string(),
    items: z.array(z.string()),
    steps: z.array(z.object({
        title: z.string(),
        description: z.string()
    }))
});

export type PujaVidhi = z.infer<typeof PujaVidhiSchema>;

// --- Deity Identification Schema ---
export const DeityIdentificationSchema = z.object({
    name: z.string(),
    description: z.string(),
    symbols: z.array(z.string()),
    tradition: z.string(),
    mantra: z.object({
        text: z.string(),
        meaning: z.string()
    })
});

export type DeityIdentification = z.infer<typeof DeityIdentificationSchema>;

// --- Translation Schema ---
export const TranslationSchema = z.record(z.string(), z.string());

export const TranslationBatchSchema = z.array(z.object({
    id: z.string(),
    text: z.string()
}));

export type TranslationBatch = z.infer<typeof TranslationBatchSchema>;

// --- Kundli Remedies Schema ---
export const KundliRemediesSchema = z.object({
    summary: z.string(),
    remedies: z.object({
        puja: z.object({
            praise: z.string().optional(),
            steps: z.array(z.string())
        }),
        stones: z.object({
            name: z.string(),
            instructions: z.string()
        }),
        rudraksh: z.object({
            type: z.string(),
            benefits: z.string()
        }),
        daan: z.array(z.string())
    }),
    muhuratAdvice: z.string()
});

export type KundliRemedies = z.infer<typeof KundliRemediesSchema>;

// --- Classical Report Schema ---
export const ClassicalReportSchema = z.object({
    title: z.string(),
    introduction: z.string(),
    sections: z.array(z.object({
        heading: z.string(),
        content: z.string()
    })),
    conclusion: z.string()
});

export type ClassicalReport = z.infer<typeof ClassicalReportSchema>;
