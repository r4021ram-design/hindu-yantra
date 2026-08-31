import { TraditionCorpusType } from './corpus-registry';
export type ComparisonStatus = 'IDENTICAL' | 'VARIANT' | 'UNSUPPORTED' | 'UNRESOLVED';
export interface CorpusComparisonItem {
    assertionId: string;
    sourceId: string;
    tradition: TraditionCorpusType;
    ruleName: string;
    expectedValue: string | number | boolean;
    generatedValue: string | number | boolean;
    status: ComparisonStatus;
    notes: string;
}
export interface MultiCorpusComparisonReport {
    dslId: string;
    evaluatedCorpora: TraditionCorpusType[];
    totalAssertionsChecked: number;
    identicalCount: number;
    variantCount: number;
    unsupportedCount: number;
    unresolvedCount: number;
    items: CorpusComparisonItem[];
    reportTimestamp: string;
}
export declare class ScholarlyReferenceComparisonEngine {
    /**
     * Compares compiled geometry model against reference corpora (Srividya, Kaula, Samaya, Temple).
     */
    static compareAgainstCorpora(dsl: any, targetCorpora?: TraditionCorpusType[]): MultiCorpusComparisonReport;
}
