"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAHALAKSHMI_YANTRA_DEFINITION = void 0;
exports.MAHALAKSHMI_YANTRA_DEFINITION = {
    id: 'mahalakshmi_yantra_canonical',
    names: {
        sanskrit: 'महालक्ष्मी यन्त्र',
        english: 'Mahalakshmi Yantra'
    },
    dsl: {
        id: 'mahalakshmi_yantra_canonical',
        names: {
            sanskrit: 'महालक्ष्मी यन्त्र',
            english: 'Mahalakshmi Yantra'
        },
        tradition: 'Shakta Mahavidya',
        metadata: {
            category: 'Abundance & Divine Grace',
            deity: 'Goddess Mahalakshmi',
            scripturalReference: 'Rig Veda Shri Suktam'
        },
        geometryRules: {
            symmetryGroupOrder: 8,
            lotusPetalRings: [
                { count: 8, radiusRatio: 0.55 },
                { count: 16, radiusRatio: 0.75 }
            ],
            bhupura: { enabled: true, steps: 3, gates: ['NORTH', 'EAST', 'SOUTH', 'WEST'] }
        }
    },
    variants: [
        {
            variantId: 'ashta_lakshmi_variant',
            traditionName: 'Ashta Lakshmi Enclosure',
            description: '8 lotus petals dedicated to the 8 manifestations of Lakshmi.',
            dslOverride: { tradition: 'Ashta Lakshmi' }
        }
    ],
    evidence: {
        primaryScripture: 'Shri Suktam',
        citations: [
            {
                id: 'ss_v1',
                scripture: 'Shri Suktam',
                chapterVerse: 'Verse 1',
                sanskritText: 'हिरण्यवर्णां हरिणीं सुवर्णरजतस्रजाम्',
                translationEnglish: 'Invoke for me, O Agni, Goddess Lakshmi of golden hue...',
                tradition: 'Srividya',
                evidenceLevel: 'Scripture Verified'
            }
        ],
        shastricAuthenticityScore: 100
    },
    research: {
        academicPapersCount: 9,
        geometricSymmetryOrder: 8,
        researchNotes: ['Features double-layered lotus petal ring for abundance energy amplification.']
    }
};
