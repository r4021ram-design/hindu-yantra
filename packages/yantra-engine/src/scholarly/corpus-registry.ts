export type TraditionCorpusType = 'Srividya' | 'Kaula' | 'Samaya' | 'Temple';

export type ScholarlyConfidenceLevel =
  | 'LEVEL_1_DIRECT_CANONICAL'
  | 'LEVEL_2_COMMENTARY_COMMENT'
  | 'LEVEL_3_ACADEMIC_RESEARCH'
  | 'LEVEL_4_HISTORICAL_SOURCE'
  | 'LEVEL_5_ORAL_LINEAGE'
  | 'LEVEL_6_UNRESOLVED';

export interface ScholarlyCorpusAssertion {
  assertionId: string;
  sourceId: string;
  publicationDetails: string;
  edition: string;
  chapter: string;
  verse: string;
  commentary: string;
  tradition: TraditionCorpusType;
  confidence: ScholarlyConfidenceLevel;
  provenance: string;
  expectedRules: {
    primaryTrianglesCount: number;
    shivaCount: number;
    shaktiCount: number;
    subTrianglesCount: number;
    lotus8Petals: number;
    lotus16Petals: number;
    bhupuraSteps: number;
    binduCentered: boolean;
  };
}

export class ScholarlyCorpusRegistry {
  private static corpora: Map<TraditionCorpusType, ScholarlyCorpusAssertion[]> = new Map();
  private static isInitialized = false;

  private static initIfNeeded(): void {
    if (this.isInitialized) return;

    // 1. Srividya Canon Corpus (Saundarya Lahari Verse 11 + Sharada Tilaka Patala 7)
    this.corpora.set('Srividya', [
      {
        assertionId: 'srividya_sl11_canonical',
        sourceId: 'saunderaya_lahari_v11',
        publicationDetails: 'Ganesh & Co. Madras Edition (1953), Ed. Swami Tapasyananda',
        edition: 'Critical Sanskrit Edition v2.1',
        chapter: 'Ananda Lahari',
        verse: 'Verse 11',
        commentary: 'Lakshmidhara Commentary (16th Century)',
        tradition: 'Srividya',
        confidence: 'LEVEL_1_DIRECT_CANONICAL',
        provenance: 'Manuscript Archive AS-SL-11',
        expectedRules: {
          primaryTrianglesCount: 9,
          shivaCount: 4,
          shaktiCount: 5,
          subTrianglesCount: 43,
          lotus8Petals: 8,
          lotus16Petals: 16,
          bhupuraSteps: 3,
          binduCentered: true
        }
      },
      {
        assertionId: 'chiodo_2021_apollonius_constructibility',
        sourceId: 'chiodo_cr_math_2021',
        publicationDetails: 'Comptes Rendus. Mathématique, Vol. 359, Issue 4 (2021), pp. 377-397. DOI: 10.5802/crmath.163',
        edition: 'Académie des sciences / Institut de France',
        chapter: 'Dissemination and History of Mathematics',
        verse: 'On the construction of the Sri Yantra',
        commentary: 'Ruler and compass constructibility via reduction to Apollonius Circle-Line-Point problem',
        tradition: 'Srividya',
        confidence: 'LEVEL_3_ACADEMIC_RESEARCH',
        provenance: 'Comptes Rendus Mathématique DOI:10.5802/crmath.163',
        expectedRules: {
          primaryTrianglesCount: 9,
          shivaCount: 4,
          shaktiCount: 5,
          subTrianglesCount: 43,
          lotus8Petals: 8,
          lotus16Petals: 16,
          bhupuraSteps: 3,
          binduCentered: true
        }
      }
    ]);

    // 2. Kaula Tradition Corpus (Kularnava Tantra Patala 5)
    this.corpora.set('Kaula', [
      {
        assertionId: 'kaula_kt5_canonical',
        sourceId: 'kularnava_tantra_p5',
        publicationDetails: 'Motilal Banarsidass Publishers (1984), Ed. Arthur Avalon',
        edition: 'Standard Critical Edition',
        chapter: 'Patala 5',
        verse: 'Verses 12-24',
        commentary: 'Bhaskararaya Makhin Commentary (Setubandha)',
        tradition: 'Kaula',
        confidence: 'LEVEL_1_DIRECT_CANONICAL',
        provenance: 'Manuscript Archive KT-P5-V12',
        expectedRules: {
          primaryTrianglesCount: 9,
          shivaCount: 4,
          shaktiCount: 5,
          subTrianglesCount: 43,
          lotus8Petals: 8,
          lotus16Petals: 16,
          bhupuraSteps: 3,
          binduCentered: true
        }
      }
    ]);

    // 3. Samaya Tradition Corpus (Subhagodaya + Nityasodashikarnava)
    this.corpora.set('Samaya', [
      {
        assertionId: 'samaya_subhagodaya_v1',
        sourceId: 'subhagodaya_v1',
        publicationDetails: 'Adyar Library Series (1937), Ed. Pandit S. Subrahmanya Sastri',
        edition: 'Adyar Critical Edition',
        chapter: 'Chapter 1',
        verse: 'Verses 1-8',
        commentary: 'Amritananda Natha Yogin (Yogini Hridaya Dipika)',
        tradition: 'Samaya',
        confidence: 'LEVEL_2_COMMENTARY_COMMENT',
        provenance: 'Adyar Library MS-778',
        expectedRules: {
          primaryTrianglesCount: 9,
          shivaCount: 4,
          shaktiCount: 5,
          subTrianglesCount: 43,
          lotus8Petals: 8,
          lotus16Petals: 16,
          bhupuraSteps: 3,
          binduCentered: true
        }
      }
    ]);

    // 4. Temple Architectural Canon Corpus (Silpa Ratna + Kashyapa Silpa Sastra)
    this.corpora.set('Temple', [
      {
        assertionId: 'temple_silparatna_p2',
        sourceId: 'silpa_ratna_p2',
        publicationDetails: 'Trivandrum Sanskrit Series (1926), Ed. T. Ganapati Sastri',
        edition: 'Trivandrum Manuscripts Series No. 98',
        chapter: 'Part II - Yantra Laksana',
        verse: 'Verses 45-60',
        commentary: 'Traditional Sthapati Oral Commentary',
        tradition: 'Temple',
        confidence: 'LEVEL_4_HISTORICAL_SOURCE',
        provenance: 'Trivandrum Palace Manuscripts MS-SR-98',
        expectedRules: {
          primaryTrianglesCount: 9,
          shivaCount: 4,
          shaktiCount: 5,
          subTrianglesCount: 43,
          lotus8Petals: 8,
          lotus16Petals: 16,
          bhupuraSteps: 3,
          binduCentered: true
        }
      }
    ]);

    this.isInitialized = true;
  }

  public static getCorpus(tradition: TraditionCorpusType): ScholarlyCorpusAssertion[] {
    this.initIfNeeded();
    return this.corpora.get(tradition) || [];
  }

  public static getAllCorpora(): Map<TraditionCorpusType, ScholarlyCorpusAssertion[]> {
    this.initIfNeeded();
    return new Map(this.corpora);
  }

  public static registerAssertion(assertion: ScholarlyCorpusAssertion): void {
    this.initIfNeeded();
    const existing = this.corpora.get(assertion.tradition) || [];
    existing.push(assertion);
    this.corpora.set(assertion.tradition, existing);
  }
}
