import { YantraPluginDefinition } from '../types';

export const SHRI_YANTRA_DEFINITION: YantraPluginDefinition = {
  id: 'shri_yantra_canonical',
  names: {
    sanskrit: 'श्री चक्र',
    english: 'Shri Chakra / Shri Yantra'
  },
  dsl: {
    id: 'shri_yantra_canonical',
    names: {
      sanskrit: 'श्री चक्र',
      english: 'Shri Chakra / Shri Yantra'
    },
    tradition: 'Srividya (Canonical)',
    metadata: {
      category: 'Mahavidya',
      deity: 'Lalita Tripura Sundari',
      scripturalReference: 'Saundarya Lahari Verse 11, Sharada Tilaka Patala 7'
    },
    geometryRules: {
      symmetryGroupOrder: 8,
      shriYantraCore: { shivaTriangles: 4, shaktiTriangles: 5 },
      lotusPetalRings: [
        { count: 8, radiusRatio: 0.55, petalShape: 'DOUBLE_CURVED_BEZIER' },
        { count: 16, radiusRatio: 0.75, petalShape: 'DOUBLE_CURVED_BEZIER' }
      ],
      bhupura: { enabled: true, steps: 3, gateWidthRatio: 0.25, gates: ['NORTH', 'EAST', 'SOUTH', 'WEST'] }
    }
  },
  variants: [
    {
      variantId: 'shri_srividya_kaula',
      traditionName: 'Kaula Sampradaya',
      description: 'Downward-facing primary triangle alignment emphasizing Shakti aspect.',
      dslOverride: { tradition: 'Kaula' }
    },
    {
      variantId: 'shri_samaya',
      traditionName: 'Samaya Sampradaya',
      description: 'Internalized meditative geometry with subtle Bindu centering.',
      dslOverride: { tradition: 'Samaya' }
    }
  ],
  evidence: {
    primaryScripture: 'Saundarya Lahari',
    citations: [
      {
        id: 'sl_v11',
        scripture: 'Saundarya Lahari',
        chapterVerse: 'Verse 11',
        sanskritText: 'चतुर्भिः श्रीकण्ठैः शिवयुवतिभिः पञ्चभिरपि',
        translationEnglish: 'With four Shiva triangles and five Shakti triangles...',
        tradition: 'Srividya',
        evidenceLevel: 'Scripture Verified'
      }
    ],
    shastricAuthenticityScore: 100
  },
  research: {
    academicPapersCount: 14,
    geometricSymmetryOrder: 8,
    researchNotes: [
      'Identified as a self-similar non-trivial 2D geometric configuration (Kula & Kula-Chakra).',
      'Contains 43 canonical circuit sub-triangles in 5 concentric enclosure groups.'
    ]
  }
};
