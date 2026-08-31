import { ChiodoTriangleSpec } from '../construction/chiodo-construction-engine';
export interface VertexComparisonRow {
    vertexId: string;
    triangleId: string;
    pointName: string;
    generated: {
        x: number;
        y: number;
    };
    reference: {
        x: number;
        y: number;
    };
    distance: number;
    passed: boolean;
}
export interface GeometricFailureDetail {
    objectId: string;
    vertexId: string;
    step: string;
    reason: string;
    suggestedFix: string;
}
export interface ReferenceComparisonReport {
    isMatchingFigure1: boolean;
    isMatchingFigure11: boolean;
    maxError: number;
    meanError: number;
    rmsError: number;
    hausdorffDistance: number;
    chamferDistance: number;
    vertexComparisonTable: VertexComparisonRow[];
    firstIncorrectObject?: GeometricFailureDetail;
    diffHeatmapSvg: string;
    overlaySvg: string;
}
export declare class ReferenceComparator {
    static readonly TOLERANCE = 0.000001;
    /**
     * Paper: Alessandro Chiodo (2021)
     * Section: 2.4
     * Figure: Figure 1 & Figure 11
     * Meaning: Independently compares generated Shri Yantra primary triangles and PSLG geometry
     * against Chiodo (2021) canonical analytical reference dataset.
     * Computes Max Error, RMS Error, Hausdorff Distance, Chamfer Distance, and identifies the FIRST incorrect object.
     */
    static compareToReference(primaryTriangles?: ChiodoTriangleSpec[]): ReferenceComparisonReport;
}
