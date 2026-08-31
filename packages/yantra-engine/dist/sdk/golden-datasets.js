"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GOLDEN_YANTRA_DATASETS = void 0;
exports.GOLDEN_YANTRA_DATASETS = Object.freeze([
    {
        id: 'shri_yantra_canonical',
        names: {
            sanskrit: 'श्री यन्त्र',
            english: 'Shri Yantra (Canonical Golden)'
        },
        tradition: 'Srividya (Canonical)',
        metadata: {
            category: 'Mahavidya',
            deity: 'Lalita Tripura Sundari',
            scripturalReference: 'Saundarya Lahari Verse 11, Sharada Tilaka Patala 7'
        },
        geometryRules: {
            symmetryGroupOrder: 8,
            shriYantraCore: {
                shivaTriangles: 4,
                shaktiTriangles: 5
            },
            lotusPetalRings: [
                { count: 8, radiusRatio: 0.55 },
                { count: 16, radiusRatio: 0.75 }
            ],
            bhupura: {
                enabled: true,
                steps: 3,
                gates: ['NORTH', 'EAST', 'SOUTH', 'WEST']
            }
        }
    },
    {
        id: 'kuber_yantra_canonical',
        names: {
            sanskrit: 'कुबेर यन्त्र',
            english: 'Kuber Yantra (Canonical Golden)'
        },
        tradition: 'Vedic Wealth',
        metadata: {
            category: 'Wealth & Prosperity',
            deity: 'Lord Kuber',
            scripturalReference: 'Rig Veda Kuber Suktam'
        },
        geometryRules: {
            symmetryGroupOrder: 4,
            lotusPetalRings: [
                { count: 8, radiusRatio: 0.6 }
            ],
            bhupura: {
                enabled: true,
                steps: 2,
                gates: ['EAST']
            }
        }
    },
    {
        id: 'ganesh_yantra_canonical',
        names: {
            sanskrit: 'गणेश यन्त्र',
            english: 'Ganesh Yantra (Canonical Golden)'
        },
        tradition: 'Ganapatya',
        metadata: {
            category: 'Obstacle Removal',
            deity: 'Lord Ganesha',
            scripturalReference: 'Ganesh Atharvashirsha'
        },
        geometryRules: {
            symmetryGroupOrder: 8,
            lotusPetalRings: [
                { count: 8, radiusRatio: 0.65 }
            ],
            bhupura: {
                enabled: true,
                steps: 3,
                gates: ['NORTH', 'EAST', 'SOUTH', 'WEST']
            }
        }
    },
    {
        id: 'navagraha_yantra_canonical',
        names: {
            sanskrit: 'नवग्रह यन्त्र',
            english: 'Navagraha Yantra (Canonical Golden)'
        },
        tradition: 'Jyotish Vedic',
        metadata: {
            category: 'Planetary Balance',
            deity: 'Navagraha Devatas',
            scripturalReference: 'Navagraha Stotram'
        },
        geometryRules: {
            symmetryGroupOrder: 9,
            lotusPetalRings: [
                { count: 9, radiusRatio: 0.7 }
            ],
            bhupura: {
                enabled: true,
                steps: 3,
                gates: ['NORTH', 'EAST', 'SOUTH', 'WEST']
            }
        }
    },
    {
        id: 'maha_meru_canonical',
        names: {
            sanskrit: 'महामेरु यन्त्र',
            english: 'Maha Meru 3D Projection (Canonical Golden)'
        },
        tradition: 'Srividya Meru Prasthara',
        metadata: {
            category: '3D Meru Projection',
            deity: 'Lalita Tripura Sundari',
            scripturalReference: 'Kamakalavilasa, Nitya Shodasikarnava'
        },
        geometryRules: {
            symmetryGroupOrder: 8,
            shriYantraCore: {
                shivaTriangles: 4,
                shaktiTriangles: 5
            },
            lotusPetalRings: [
                { count: 8, radiusRatio: 0.55 },
                { count: 16, radiusRatio: 0.75 }
            ],
            bhupura: {
                enabled: true,
                steps: 3,
                gates: ['NORTH', 'EAST', 'SOUTH', 'WEST']
            }
        }
    }
]);
