"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { logger } from './logger';
import {
    PujaVidhiSchema,
    DeityIdentificationSchema,
    KundliRemediesSchema,
    ClassicalReportSchema,
    TranslationSchema,
    TranslationBatchSchema
} from './validators';

// Initialize Gemini client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

// Model configurations
const MODELS = {
    flash: "gemini-2.0-flash",       // Fast, cheap - for translations & quick answers
    pro: "gemini-2.0-flash",         // Using flash for now as it's highly capable
    vision: "gemini-2.0-flash"       // For image recognition
};

// System prompts for different features
const SYSTEM_PROMPTS = {
    askPandit: `Role: Aap "Hindu Panchang AI Assistant" hain. Aapka kaam users ko Vedic Astrology, Muhurat, Tithi, aur Gun Milan mein help karna hai.
Tone: Helpful, Traditional yet Modern, aur Precise (Shuddh Hindi ya Hinglish ka prayog karein).

Core Directives:
1. Navigation Logic (Internal Redirects): Aapke paas 3 main destinations hain. Jab bhi user niche diye gaye vishayon (topics) par baat kare, unhe in paths par guide karein:
   - Tyohar / Festivals (Path: /calendar): Jab user 'Holi', 'Diwali', 'Upcoming festivals' ya 'Vrat' ke baare mein pooche. (Response: "Is saal ke sabhi bade tyohaar aur vrat ki list hamare /calendar page par available hai. Aap wahan jaakar poora calendar dekh sakte hain.")
   - Prashna Kundli (Path: /kundli): Jab user ka koi specific sawal ho jiska instant jawab chahiye (e.g., "Meri job kab lagegi?"). (Response: "Prashna Kundali vichar ke liye kripya /kundli tab par jayein. Wahan apna 'Current Location' aur vartaman samay (current time) daalkar 'Open Chart' par click karein. Isse aapke vartaman prashna ki kundli ban jayegi.")
   - Gun Milan (Path: /kundli/matching): Jab user 'Marriage matching', 'Ashtakoot score' ya 'Kundli matching' pooche. (Response: "Vivah hetu Gun Milan ke liye kripya /kundli/matching tab par jayein aur Var-Kanya ki janm details bharein.")

2. Contextual Awareness: User se unki Location (City) aur Date/Time zaroor confirm karein kyunki Panchang calculations sthaan (place) ke hisaab se badalti hain.
3. Prashna Kundali Logic: Jab user Prashna pooche, toh current timestamp aur unki location ke aadhar par 'Horary Astrology' (Prashna Shastra) ke basic principles use karke jawab dein.
4. Data Accuracy: Kabhi bhi man-ghadant (hallucinated) dates mat batayein. Agar calculation complex hai, toh user ko site ke specific calculator tab ka link dein.
5. Core Knowledge & Remedies: Aapko samay-samay par Vrat, Tyohar aur Remedies ki custom list di jayegi jo prompt ya context mein aayegi. Aapko is data ko apne 'Core Knowledge' ka sabse mukhya (primary) hissa man-na hai. Jab bhi koi user kisi samasya ke liye upaay (remedy) pooche, toh aapko **diye gaye custom remedies/vrat ko hi sabse jyada priority deni hai**. Agar user ki samasya ke hisaab se koi remedy/data missing hai, toh explicitly mujhe (system/user) batayein taaki main use apne data mein add kar sakoon.

Operational Guidelines:
- Short & Sweet: Chatbot mein lambe paragraphs na likhein. Seedha Point par aayein.
- Tone: Shuddh Hindi ya Hinglish ka prayog karein (e.g., "Shubh Prabhat! Aaj ki Tithi jaanne ke liye hamare Panchang section ka upyog karein.").
- Call to Action: Har jawab ke baad ek action tab/URL ka reference dein.

IMPORTANT: Use ONLY the astronomical data provided in the context.`,

    dailyInsight: `You are generating a daily spiritual insight for a Hindu devotee.
Based on the Panchang data provided, create an engaging, positive daily forecast.
Include: Overall energy, auspicious activities, things to avoid, and a mantra suggestion.
Keep it to 4-5 sentences. Be uplifting and culturally appropriate.`,

    pujaVidhi: `You are an expert in Hindu rituals and Puja Vidhi.
Provide step-by-step instructions for the specified festival/observance.
Include: Preparation, items needed, mantras (in Devanagari with transliteration), and significance.
Be detailed but accessible to modern devotees.`,

    translate: `You are a translator specializing in Hindu religious and astrological terminology.
Translate the given content to the target language while preserving:
- Religious terms with their cultural meaning
- Sanskrit words with transliteration
- Proper nouns like festival names
Return ONLY the translation, no explanations.`,

    deityIdentifier: `You are an expert in Hindu iconography and temple traditions.
Identify the deity in the image and provide:
1. Name of the deity (in English and Sanskrit)
2. Key identifying features
3. Associated festivals and tithis
4. Suggested offerings and mantras
Be respectful and informative.`,

    kundliRemedies: `You are a Vedantic Astrologer (Jyotishi) with deep knowledge of:
    1. "Brihat Parashara Hora Shastra" (BPHS) for Yogas and Dashas.
    2. "Phaladeepika" for Bhava results.
    3. "Predictive Astrology of the Hindus" by Dr. B.V. Raman for practical application.
    4. "Nakshatra Exploration" by P.V.R. Narasimha Rao for Nakshatra analysis.

    Analyze the provided birth chart data (Planets, Aspects, Divisional Charts D1/D9, Vimshottari Dasha, and calculated Yogas).
    
    Provide:
    1. A Deep Analysis of the Soul/Personality based on Lagna & Moon (Nakshatra-based).
    2. Interpret the calculated Yogas/Doshas provided in the data.
    3. Analyze the current Vimshottari Dasha period sequences.
    4. Recommended Remedial Measures (Puja, Gemstones, Rudraksh).
    5. Daan (Charity) suggestions.
    6. Personalized Muhurat advice.

    Keep advice spiritual, ethical, and strictly based on the classical texts mentioned. Answer in the user's language.`,

    classicalSynthesis: `You are a strict Classical Vedic Astrologer. 
    Your job is to SYNTHESIZE the provided list of "Predictions" into a coherent narrative.
    
    RULES:
    1. The "Predictions" provided have a "condition" field (e.g., "Sun in 1st House", "Jupiter in Kendra from Moon"). YOU MUST REFERENCE THIS LOGIC explicitly in your analysis.
       Example: "The presence of Jupiter in a Kendra from the Moon creates a Gajakesari Yoga, indicating..."
    2. The "Predictions" and "Yogas" provided are DETERMINISTIC and FACTUAL. Do NOT recalculate or hallucinate new ones.
    3. Use the provided "Source" (Book, Chapter) to cite your statements. 
    4. Structure the report into: 
       - "Strengths & Auspicious Yogas"
       - "Challenges & Doshas"
       - "Karmic Path" (Synthesis of Dasha and House placements)
    5. If there are conflicting predictions (e.g., one rule says "Wealthy", another says "Losses"), acknowledge the complexity and explain how they might balance each other.
    6. Maintain a scholarly but accessible tone.
    7. Answer in the user's language.
    `
};

// Interface for Panchang context
export interface PanchangContext {
    tithi: string;
    nakshatra: string;
    yoga: string;
    karana: string;
    paksha: string;
    masa: string;
    rashi?: string;
    festivals?: string[];
    recurringVrats?: string[];
    upcomingFestivals?: string[];
}

// Format Panchang data for context injection
function formatPanchangContext(panchang: PanchangContext): string {
    return `
TODAY'S PANCHANG (Use this data exactly - do not recalculate):
- Tithi: ${panchang.tithi}
- Nakshatra: ${panchang.nakshatra}
- Yoga: ${panchang.yoga}
- Karana: ${panchang.karana}
- Paksha: ${panchang.paksha}
- Hindu Month (Masa): ${panchang.masa}
${panchang.rashi ? `- Moon Sign (Rashi): ${panchang.rashi}` : ''}
${panchang.festivals?.length ? `- Today's Festivals: ${panchang.festivals.join(', ')}` : ''}
${panchang.recurringVrats?.length ? `- Today's Observances: ${panchang.recurringVrats.join(', ')}` : ''}
${panchang.upcomingFestivals?.length ? `\nUPCOMING FESTIVALS/EVENTS (Next 30-60 days):\n${panchang.upcomingFestivals.map(f => `- ${f}`).join('\n')}` : ''}
`;
}

// Ask Pandit - Chatbot with RAG
export async function askPandit(
    question: string,
    panchang: PanchangContext,
    language: 'en' | 'hi' | 'gu' | 'sa' = 'en'
): Promise<string> {
    const model = genAI.getGenerativeModel({ model: MODELS.flash });

    const languageInstruction = {
        en: 'Base language preference: English/Hinglish (respond mainly in Hinglish as instructed).',
        hi: 'Base language preference: Hindi/Hinglish (respond mainly in Hinglish as instructed, use Devanagari if appropriate).',
        gu: 'Answer in Gujarati (ગુજરાતીમાં જવાબ આપો).',
        sa: 'Answer in Sanskrit or Hindi using Devanagari script (संस्कृत या हिंदी में उत्तर दें, देवनागरी लिपि का प्रयोग करें).'
    };

    const prompt = `${SYSTEM_PROMPTS.askPandit}
${languageInstruction[language]}

${formatPanchangContext(panchang)}

USER QUESTION: ${question}`;

    try {
        const result = await model.generateContent(prompt);
        return result.response.text();
    } catch (error) {
        console.error("Gemini Generation Error:", error);
        throw error; // Re-throw to be caught by the API route
    }
}

// Generate Daily Insight
export async function generateDailyInsight(
    panchang: PanchangContext,
    language: 'en' | 'hi' | 'gu' | 'sa' = 'en'
): Promise<string> {
    const model = genAI.getGenerativeModel({ model: MODELS.flash });

    const languageInstruction = {
        en: 'Generate in English.',
        hi: 'Generate in Hindi (हिंदी में).',
        gu: 'Generate in Gujarati (ગુજરાતીમાં).',
        sa: 'Generate in Sanskrit or Hindi (संस्कृत या हिंदी में).'
    };

    const prompt = `${SYSTEM_PROMPTS.dailyInsight}
${languageInstruction[language]}

${formatPanchangContext(panchang)}`;

    const result = await model.generateContent(prompt);
    return result.response.text();
}

// Helper to safely parse JSON from AI response
function safeParseJSON<T>(text: string, schema: any, fallback: T): T {
    try {
        // Try to find JSON block if mixed with text
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        const jsonString = jsonMatch ? jsonMatch[0] : text;
        const parsed = JSON.parse(jsonString);

        // Zod Validation
        const result = schema.safeParse(parsed);

        if (result.success) {
            return result.data;
        } else {
            logger.error("Zod Validation Failed", { error: result.error, text });
            return fallback;
        }
    } catch (e) {
        logger.error("JSON Parse Failed", { error: e, text });
        return fallback;
    }
}

// Generate Puja Vidhi
export async function generatePujaVidhi(
    festivalName: string,
    language: 'en' | 'hi' | 'gu' | 'sa' = 'en'
): Promise<any> {
    const model = genAI.getGenerativeModel({
        model: MODELS.pro,
        generationConfig: { responseMimeType: "application/json" }
    });

    const languageInstruction = {
        en: 'Explain in English with Sanskrit mantras.',
        hi: 'हिंदी में समझाइए, संस्कृत मंत्रों के साथ.',
        gu: 'ગુજરાતીમાં સમજાવો, સંસ્કૃત મંત્રો સાથે.',
        sa: 'संस्कृत या हिंदी में समझाइए, संस्कृत मंत्रों के साथ।'
    };

    const prompt = `${SYSTEM_PROMPTS.pujaVidhi}
${languageInstruction[language]}

FESTIVAL/OBSERVANCE: ${festivalName}

Return a JSON object with the following structure:
{
  "significance": "A brief explanation",
  "items": ["Item 1", "Item 2"],
  "steps": [
    { "title": "Step Title", "description": "Step Description" }
  ]
}`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    return safeParseJSON(text, PujaVidhiSchema, {
        significance: "Details currently unavailable.",
        items: [],
        steps: [{ title: "Guidance", description: "Please consult a local Pandit." }]
    });
}

// Translate content
export async function translateContent(
    content: string,
    targetLanguage: 'hi' | 'gu' | 'sa',
    context: 'festival' | 'astrology' | 'general' = 'general'
): Promise<string> {
    const model = genAI.getGenerativeModel({ model: MODELS.flash });

    const languageMap = {
        hi: 'Hindi (हिंदी)',
        gu: 'Gujarati (ગુજરાતી)',
        sa: 'Sanskrit (संस्कृत)'
    };

    const prompt = `${SYSTEM_PROMPTS.translate}

Context: ${context} terminology
Target Language: ${languageMap[targetLanguage]}

Content to translate:
${content}`;

    const result = await model.generateContent(prompt);
    return result.response.text().trim();
}

// Identify deity from image
export async function identifyDeity(
    imageBase64: string,
    mimeType: string = 'image/jpeg',
    language: 'en' | 'hi' | 'gu' | 'sa' = 'en'
): Promise<any> {
    const model = genAI.getGenerativeModel({
        model: MODELS.vision,
        generationConfig: { responseMimeType: "application/json" }
    });

    const languageInstruction = {
        en: 'Respond in English.',
        hi: 'हिंदी में उत्तर दें.',
        gu: 'ગુજરાતીમાં જવાબ આપો.',
        sa: 'संस्कृत या हिंदी में उत्तर दें।'
    };

    const prompt = `${SYSTEM_PROMPTS.deityIdentifier}
${languageInstruction[language]}

Return a JSON object with the following structure:
{
  "name": "Deity Name",
  "description": "Short description",
  "symbols": ["Symbol 1", "Symbol 2"],
  "tradition": "Vedic/Puranic/etc",
  "mantra": {
    "text": "Sanskrit Mantra",
    "meaning": "English/Target Language meaning"
  }
}`;

    const result = await model.generateContent([
        prompt,
        {
            inlineData: {
                mimeType,
                data: imageBase64
            }
        }
    ]);

    const text = result.response.text();

    return safeParseJSON(text, DeityIdentificationSchema, {
        name: "Unknown Deity",
        description: "Could not identify deity with high confidence.",
        symbols: [],
        tradition: "Hindu",
        mantra: { text: "OM", meaning: "Universal Sound" }
    });
}

// Batch translate for static content
export async function batchTranslate(
    items: { key: string; value: string }[],
    targetLanguage: 'hi' | 'gu' | 'sa'
): Promise<Record<string, string>> {
    const model = genAI.getGenerativeModel({ model: MODELS.flash });

    const itemsList = items.map((item, i) => `${i + 1}. ${item.value}`).join('\n');

    const languageMap = {
        hi: 'Hindi',
        gu: 'Gujarati',
        sa: 'Sanskrit'
    };

    const prompt = `Translate these Hindu religious/astrological terms to ${languageMap[targetLanguage]}.
Return ONLY a JSON object with original text as key and translation as value.

Items:
${itemsList}`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    return safeParseJSON(text, TranslationSchema, {});
}

// Batch translate for dynamic arrays (Yogas, Predictions)
export async function batchTranslateDynamic(
    items: { id: string; text: string }[],
    targetLanguage: 'hi' | 'gu' | 'sa'
): Promise<{ id: string; text: string }[]> {
    const model = genAI.getGenerativeModel({
        model: MODELS.flash,
        generationConfig: { responseMimeType: "application/json" }
    });

    const languageMap = {
        hi: 'Hindi',
        gu: 'Gujarati',
        sa: 'Sanskrit'
    };

    const prompt = `Translate the following Hindu astrological descriptions to ${languageMap[targetLanguage]}.
Preserve the tone, technical astrological terms (in localized form), and HTML/Markdown formatting if any.
Do not change the 'id' fields.

Items to translate:
${JSON.stringify(items, null, 2)}

Return a JSON array of objects with 'id' and the translated 'text', matching the input structure exactly.`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    return safeParseJSON(text, TranslationBatchSchema, items);
}

// Generate Kundli Analysis & Remedies
export async function generateKundliRemedies(
    chartData: any,
    language: 'en' | 'hi' | 'gu' | 'sa' = 'en'
): Promise<any> {
    const model = genAI.getGenerativeModel({
        model: MODELS.pro,
        generationConfig: { responseMimeType: "application/json" }
    });

    const languageInstruction = {
        en: 'Explain in English.',
        hi: 'हिंदी में विस्तार से बताएं.',
        gu: 'ગુજરાતીમાં વિગતવાર સમજાવો.',
        sa: 'संस्कृत या हिंदी में विस्तार से बताएं।'
    };

    const prompt = `${SYSTEM_PROMPTS.kundliRemedies}
${languageInstruction[language]}

BIRTH CHART DATA:
${JSON.stringify(chartData, null, 2)}

Return a JSON object with the following structure:
{
  "summary": "Deep analysis of the birth chart",
  "remedies": {
    "puja": { "praise": "Deity to worship", "steps": ["Step 1", "Step 2"] },
    "stones": { "name": "Gemstone name", "instructions": "How to wear" },
    "rudraksh": { "type": "e.g., 5 Mukhi", "benefits": "Why this bead" },
    "daan": ["Item 1", "Item 2"]
  },
  "muhuratAdvice": "How to find their best timings specifically"
}`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    return safeParseJSON(text, KundliRemediesSchema, {
        summary: "Detailed analysis unavailable at this moment.",
        remedies: {
            puja: { praise: "Lord Shiva / Vishnu", steps: ["Daily prayers"] },
            stones: { name: "Consult an expert", instructions: "" },
            rudraksh: { type: "5 Mukhi", benefits: "General well-being" },
            daan: ["Food for needy"]
        },
        muhuratAdvice: "Follow auspicious Choghadiya and Tithis."
    });
}

// Generate Classical Report (Synthesis)
export async function generateClassicalReport(
    predictions: any[],
    language: 'en' | 'hi' | 'gu' | 'sa' = 'en'
): Promise<any> {
    const model = genAI.getGenerativeModel({
        model: MODELS.pro,
        generationConfig: { responseMimeType: "application/json" }
    });

    const languageInstruction = {
        en: 'Write in English.',
        hi: 'हिंदी में लिखें.',
        gu: 'ગુજરાતીમાં લખો.',
        sa: 'संस्कृत या हिंदी में लिखें।'
    };

    const prompt = `${SYSTEM_PROMPTS.classicalSynthesis}
${languageInstruction[language]}

PREDICTIONS TO SYNTHESIZE:
${JSON.stringify(predictions, null, 2)}

Return a JSON object:
{
  "strengths": {
    "title": "Strengths & Yogas",
    "content": "Narrative here..."
  },
  "challenges": {
    "title": "Challenges & Doshas",
    "content": "Narrative here..."
  },
  "karmicPath": {
    "title": "Karmic Direction",
    "content": "Narrative here..."
  }
}`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    return safeParseJSON(text, ClassicalReportSchema, {
        strengths: { title: "Analysis", content: "Complex chart structure detected." },
        challenges: { title: "Note", content: "Please consult a professional astrologer." },
        karmicPath: { title: "Guidance", content: "Focus on Dharma." }
    });
}

