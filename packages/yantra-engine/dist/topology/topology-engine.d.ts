import { ChiodoTriangleSpec } from '../construction/chiodo-construction-engine';
import { Polygon2D as DSLPolygon2D } from '../types/dsl';
export interface TopologyExtractionResult {
    totalExtractedTriangles: number;
    is43TrianglesTopologyVerified: boolean;
    avaranamCounts: {
        chaturdasharam14: number;
        bahirDasharam10: number;
        antarDasharam10: number;
        ashtaragon8: number;
        centralTrikona1: number;
    };
    polygons: DSLPolygon2D[];
    nodesCount: number;
    edgesCount: number;
    facesCount: number;
    eulerProof: {
        V: number;
        E: number;
        F_bounded: number;
        F_total: number;
        eulerFormulaValue: number;
        isValidEuler: boolean;
    };
}
export declare class TopologyEngine {
    static readonly EPSILON = 1e-9;
    /**
     * Paper: Alessandro Chiodo (2021)
     * Section: 2.4
     * Figure: Figure 1
     * Meaning: Constructs Planar Straight-Line Graph (PSLG) from 9 primary triangles,
     * dynamically discovers faces using half-edge cycle traversal without pre-knowing 43,
     * and verifies Euler Characteristic V - E + F = 2.
     */
    static extract43SubTriangles(primaryTriangles: ChiodoTriangleSpec[], scaleR?: number, center?: {
        x: number;
        y: number;
    }): TopologyExtractionResult;
}
