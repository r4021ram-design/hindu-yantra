import { ChiodoConstructionResult } from '../construction/chiodo-construction-engine';
import { ConcurrencyAuditReport } from '../constraints/constraint-solver';
import { TopologyExtractionResult } from '../topology/topology-engine';
import { ReferenceComparisonReport, GeometricFailureDetail } from './reference-comparator';
export interface ChiodoFullAuditReport {
    isAuthenticChiodoGeometry: boolean;
    concurrencyAudit: ConcurrencyAuditReport;
    topologyExtraction: TopologyExtractionResult;
    referenceComparison: ReferenceComparisonReport;
    precisionError: number;
    overallScore: number;
    checks: {
        rule: string;
        passed: boolean;
        details: string;
    }[];
    firstIncorrectObject?: GeometricFailureDetail;
    statusMessage: string;
}
export declare class ChiodoValidator {
    /**
     * Paper: Alessandro Chiodo (2021)
     * Section: 2.4
     * Figure: Figure 1 & Figure 11
     * Meaning: Generates full mathematical, topological, Euler, and reference comparison audit.
     * If ANY check fails, logs CANONICAL FAILED and identifies the FIRST incorrect geometric object.
     */
    static audit(construction?: ChiodoConstructionResult): ChiodoFullAuditReport;
}
