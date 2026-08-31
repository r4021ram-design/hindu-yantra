import { ChiodoConstructionResult } from './construction/chiodo-construction-engine';
import { ChiodoFullAuditReport } from './verification/chiodo-validator';
import { ReferenceComparisonReport } from './comparison/reference-comparator';
import { TopologyExtractionResult } from './topology/topology-engine';
/**
 * SGOS Public API Facade for Alessandro Chiodo (2021) Śrī Yantra Analytical Computational Geometry Engine
 */
export declare function compileShriYantra(): ChiodoConstructionResult & {
    topology: TopologyExtractionResult;
};
export declare function validateShriYantra(): ChiodoFullAuditReport;
export declare function compareWithReference(): ReferenceComparisonReport;
export declare function generateProofPackage(): {
    engineName: string;
    construction: ChiodoConstructionResult;
    topology: TopologyExtractionResult;
    validation: ChiodoFullAuditReport;
    comparison: ReferenceComparisonReport;
};
export declare function exportCanonicalSVG(): string;
export declare function exportMeruMesh(): string;
