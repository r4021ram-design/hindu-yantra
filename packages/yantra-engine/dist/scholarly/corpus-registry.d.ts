export type TraditionCorpusType = 'Srividya' | 'Kaula' | 'Samaya' | 'Temple';
export type ScholarlyConfidenceLevel = 'LEVEL_1_DIRECT_CANONICAL' | 'LEVEL_2_COMMENTARY_COMMENT' | 'LEVEL_3_ACADEMIC_RESEARCH' | 'LEVEL_4_HISTORICAL_SOURCE' | 'LEVEL_5_ORAL_LINEAGE' | 'LEVEL_6_UNRESOLVED';
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
export declare class ScholarlyCorpusRegistry {
    private static corpora;
    private static isInitialized;
    private static initIfNeeded;
    static getCorpus(tradition: TraditionCorpusType): ScholarlyCorpusAssertion[];
    static getAllCorpora(): Map<TraditionCorpusType, ScholarlyCorpusAssertion[]>;
    static registerAssertion(assertion: ScholarlyCorpusAssertion): void;
}
