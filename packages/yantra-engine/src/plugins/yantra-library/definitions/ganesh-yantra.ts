import { YantraPluginDefinition } from '../types';

export const GANESH_YANTRA_DEFINITION: YantraPluginDefinition = {
  id: 'ganesh_yantra_canonical',
  names: {
    sanskrit: 'गणेश यन्त्र',
    english: 'Ganesh Yantra'
  },
  dsl: {
    id: 'ganesh_yantra_canonical',
    names: {
      sanskrit: 'गणेश यन्त्र',
      english: 'Ganesh Yantra'
    },
    tradition: 'Ganapatya',
    metadata: {
      category: 'Obstacle Removal',
      deity: 'Lord Ganesha',
      scripturalReference: 'Ganesh Atharvashirsha'
    },
    geometryRules: {
      symmetryGroupOrder: 8,
      lotusPetalRings: [{ count: 8, radiusRatio: 0.65 }],
      bhupura: { enabled: true, steps: 3, gates: ['NORTH', 'EAST', 'SOUTH', 'WEST'] }
    }
  },
  variants: [
    {
      variantId: 'ganesh_shatkon',
      traditionName: 'Shatkona Ganapatya',
      description: 'Central hexagram star representing union of Shiva & Shakti.',
      dslOverride: { tradition: 'Ganapatya Shatkona' }
    }
  ],
  evidence: {
    primaryScripture: 'Ganesh Atharvashirsha',
    citations: [
      {
        id: 'ga_v1',
        scripture: 'Ganesh Atharvashirsha',
        chapterVerse: 'Upanishad Verse 1',
        sanskritText: 'त्वं प्रत्यक्षं तत्त्वमसि',
        translationEnglish: 'You are the direct manifestation of Brahman...',
        tradition: 'Srividya',
        evidenceLevel: 'Scripture Verified'
      }
    ],
    shastricAuthenticityScore: 100
  },
  research: {
    academicPapersCount: 8,
    geometricSymmetryOrder: 8,
    researchNotes: ['Employs 8 lotus petals symbolizing the 8 Ashta Siddhis.']
  }
};
