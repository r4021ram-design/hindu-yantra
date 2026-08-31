"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DSLParser = void 0;
class DSLParser {
    /**
     * Parse a JSON object or string into a validated YantraDSL
     */
    static parse(input) {
        const rawObj = typeof input === 'string' ? JSON.parse(input) : input;
        // Validate core mandatory fields
        if (!rawObj.id || typeof rawObj.id !== 'string') {
            throw new Error('DSL Parse Error: Missing or invalid "id" field.');
        }
        if (!rawObj.names || !rawObj.names.sanskrit || !rawObj.names.english) {
            throw new Error('DSL Parse Error: Yantra must specify Sanskrit and English names.');
        }
        if (!rawObj.geometryRules) {
            throw new Error('DSL Parse Error: Yantra must specify "geometryRules".');
        }
        const dsl = {
            id: rawObj.id,
            version: rawObj.version || '1.0.0',
            traditionVariant: rawObj.traditionVariant || 'Traditional',
            names: {
                sanskrit: rawObj.names.sanskrit,
                hindi: rawObj.names.hindi || rawObj.names.sanskrit,
                english: rawObj.names.english,
                alternateNames: rawObj.names.alternateNames || [],
            },
            attributes: {
                deity: rawObj.attributes?.deity || 'Universal Divine',
                planet: rawObj.attributes?.planet || 'Cosmic',
                element: rawObj.attributes?.element || 'Akasha',
                chakra: rawObj.attributes?.chakra || 'Anahata',
                metal: rawObj.attributes?.metal || ['Copper', 'Gold'],
                color: rawObj.attributes?.color || 'Gold',
                purpose: rawObj.attributes?.purpose || ['Spiritual Growth', 'Harmonization'],
                benefits: rawObj.attributes?.benefits || [],
                precautions: rawObj.attributes?.precautions || [],
                tags: rawObj.attributes?.tags || [],
            },
            geometryRules: {
                bhupura: rawObj.geometryRules.bhupura,
                lotusRings: rawObj.geometryRules.lotusRings || [],
                concentricCircles: rawObj.geometryRules.concentricCircles || [],
                starPolygons: rawObj.geometryRules.starPolygons,
                triangleSets: rawObj.geometryRules.triangleSets,
                bindu: rawObj.geometryRules.bindu || {
                    radiusRatio: 0.02,
                    sanskritName: 'Bindu',
                    englishName: 'Central Point',
                    symbolism: 'Cosmic origin and source of divine consciousness'
                },
            },
            layers: rawObj.layers || [],
            scripturalReferences: rawObj.scripturalReferences || [],
            mantra: rawObj.mantra || {
                beejMantra: '',
                mainMantra: '',
                sanskrit: '',
                transliteration: '',
                meaningHindi: '',
                meaningEnglish: '',
                japaModes: [108]
            },
            ritualPlacement: rawObj.ritualPlacement || {
                direction: 'East',
                metal: ['Copper', 'Panchadhatu'],
                element: 'Fire',
                planet: 'Sun',
                deity: rawObj.attributes?.deity || 'Deity',
                chakra: 'Anahata',
                dayOfWeek: 'Sunday',
                nakshatra: 'Pushya',
                purificationSteps: ['Wash with Gangajal and Panchamrit', 'Wipe dry with clean cloth'],
                pranaPratishthaSteps: ['Chant Beej Mantra 108 times', 'Offer red flowers and akshat'],
                dailyWorship: 'Offer incense and light a ghee lamp daily.',
                placementLocation: 'Pooja room facing East or North-East'
            },
            research: rawObj.research || {
                history: 'Canonical sacred geometry passed down through Vedic/Tantric lineages.',
                origin: 'Ancient Agamas and Tantric treatises.',
                mathematicalAnalysis: 'Exhibits exact radial symmetry and golden ratio proportions.',
                philosophicalMeaning: 'Visual representation of macrocosmic and microcosmic principles.',
                scientificPerspective: 'Harmonic resonance geometry facilitating mental focus and meditation.',
                bibliography: ['Saundarya Lahari', 'Sharada Tilaka', 'Mantra Mahodadhi']
            },
            i18n: rawObj.i18n || {}
        };
        return dsl;
    }
}
exports.DSLParser = DSLParser;
