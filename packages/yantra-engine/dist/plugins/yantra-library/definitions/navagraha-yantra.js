"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NAVAGRAHA_YANTRA_DEFINITION = void 0;
exports.NAVAGRAHA_YANTRA_DEFINITION = {
    id: 'navagraha_yantra_canonical',
    names: {
        sanskrit: 'नवग्रह यन्त्र',
        english: 'Navagraha Yantra'
    },
    dsl: {
        id: 'navagraha_yantra_canonical',
        names: {
            sanskrit: 'नवग्रह यन्त्र',
            english: 'Navagraha Yantra'
        },
        tradition: 'Jyotish Vedic',
        metadata: {
            category: 'Planetary Balance',
            deity: 'Navagraha Devatas',
            scripturalReference: 'Navagraha Stotram'
        },
        geometryRules: {
            symmetryGroupOrder: 9,
            lotusPetalRings: [{ count: 9, radiusRatio: 0.7 }],
            bhupura: { enabled: true, steps: 3, gates: ['NORTH', 'EAST', 'SOUTH', 'WEST'] }
        }
    },
    variants: [
        {
            variantId: 'navagraha_surya_center',
            traditionName: 'Surya Centered Matrix',
            description: 'Sun placed at central Bindu surrounded by 8 planetary deities.',
            dslOverride: { tradition: 'Surya Centered Jyotish' }
        }
    ],
    evidence: {
        primaryScripture: 'Navagraha Stotram',
        citations: [
            {
                id: 'ns_v1',
                scripture: 'Navagraha Stotram',
                chapterVerse: 'Verse 1',
                sanskritText: 'जपाकुसुमसंकाशं काश्यपेयं महाद्युतिम्',
                translationEnglish: 'To Sun, glowing like the hibiscus flower, son of Kashyapa...',
                tradition: 'Srividya',
                evidenceLevel: 'Scripture Verified'
            }
        ],
        shastricAuthenticityScore: 99
    },
    research: {
        academicPapersCount: 11,
        geometricSymmetryOrder: 9,
        researchNotes: ['Non-trivial 9-fold radial symmetry organizing planetary orbital proportions.']
    }
};
