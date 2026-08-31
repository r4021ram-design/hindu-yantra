import { GeometryDSL } from '../compiler/types';
import { CanonicalReferenceDataset } from './reference-dataset';
export interface ConformanceItemResult {
    component: string;
    expected: string | number;
    generated: string | number;
    deviation: number;
    tolerance: number;
    passed: boolean;
}
export interface CanonicalConformanceReport {
    dslId: string;
    referenceDatasetVersion: string;
    conformanceScore: number;
    isCanonicalConformant: boolean;
    totalChecks: number;
    passedChecks: number;
    failedChecks: number;
    itemResults: ConformanceItemResult[];
    reportTimestamp: string;
}
export declare class SGOSCanonicalConformanceEngine {
    /**
     * Evaluates compiled geometry against the immutable CANONICAL_SRI_CHAKRA_REFERENCE_DATASET benchmark.
     */
    static auditConformance(dsl: GeometryDSL, reference?: CanonicalReferenceDataset): CanonicalConformanceReport;
}
