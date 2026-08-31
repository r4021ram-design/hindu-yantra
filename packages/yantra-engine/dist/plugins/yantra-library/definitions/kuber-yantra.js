"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KUBER_YANTRA_DEFINITION = void 0;
exports.KUBER_YANTRA_DEFINITION = {
    id: 'kuber_yantra_canonical',
    names: {
        sanskrit: 'कुबेर यन्त्र',
        english: 'Kuber Yantra'
    },
    dsl: {
        id: 'kuber_yantra_canonical',
        names: {
            sanskrit: 'कुबेर यन्त्र',
            english: 'Kuber Yantra'
        },
        tradition: 'Vedic Wealth',
        metadata: {
            category: 'Wealth & Prosperity',
            deity: 'Lord Kuber',
            scripturalReference: 'Rig Veda Kuber Suktam'
        },
        geometryRules: {
            symmetryGroupOrder: 4,
            lotusPetalRings: [{ count: 8, radiusRatio: 0.6 }],
            bhupura: { enabled: true, steps: 2, gates: ['EAST'] }
        }
    },
    variants: [
        {
            variantId: 'kuber_grid_3x3',
            traditionName: 'Magic Grid 3x3',
            description: '3x3 numerical magic square totaling 72 in all directions.',
            dslOverride: { tradition: 'Vedic Numerical' }
        }
    ],
    evidence: {
        primaryScripture: 'Rig Veda',
        citations: [
            {
                id: 'rv_kuber_1',
                scripture: 'Rig Veda',
                chapterVerse: 'Mandala 10',
                sanskritText: 'ॐ कुबेराय नमः',
                translationEnglish: 'Salutations to Lord Kuber, treasurer of the cosmos...',
                tradition: 'Srividya',
                evidenceLevel: 'Scripture Verified'
            }
        ],
        shastricAuthenticityScore: 98
    },
    research: {
        academicPapersCount: 5,
        geometricSymmetryOrder: 4,
        researchNotes: ['Uses 4-fold orthogonal symmetry for directional wealth stability.']
    }
};
