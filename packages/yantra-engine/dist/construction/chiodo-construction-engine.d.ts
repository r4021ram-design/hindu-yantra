import { Point2D, Line2D, Circle2D, Triangle2D } from '../kernel';
import { ApolloniusCLPInput } from '../solver/apollonius-solver';
export interface ChiodoTriangleMetadata {
    paperSection: string;
    figureNumber: string;
    equationReference: string;
    derivedFrom: string;
    meaning: string;
    dependencies: string[];
}
export interface ChiodoTriangleSpec {
    id: string;
    index: number;
    direction: 'downward' | 'upward';
    color: string;
    apex: Point2D;
    leftBase: Point2D;
    rightBase: Point2D;
    baseMidpoint: Point2D;
    triangle: Triangle2D;
    area: number;
    edgeLines: {
        leftEdge: Line2D;
        rightEdge: Line2D;
        baseEdge: Line2D;
    };
    circumcircle: Circle2D;
    metadata: ChiodoTriangleMetadata;
}
export interface ChiodoConstructionResult {
    baseInput: ApolloniusCLPInput;
    outerCircumcircle: Circle2D;
    primaryTriangles: ChiodoTriangleSpec[];
    auxiliaryPoints: Record<string, Point2D>;
    constructionNodesCount: number;
    engineName: string;
}
/**
 * Analytical Computational Geometry Engine Implementing Alessandro Chiodo (2021)
 * "On the Construction of the Śrī Yantra" (Comptes Rendus Mathématique, Vol 359).
 *
 * Implements direct analytical equations derived in the paper without empirical magic constants.
 */
export declare class ChiodoConstructionEngine {
    static readonly ENGINE_NAME = "Analytical Computational Geometry Engine Implementing Alessandro Chiodo (2021)";
    /**
     * Analytical derivation of base parameters (P, Q, R, S) strictly following Chiodo (2021):
     */
    static deriveChiodoBaseParameters(): Required<ApolloniusCLPInput>;
    /**
     * Executes analytical geometric construction according to Alessandro Chiodo (2021).
     */
    static construct(input?: Partial<ApolloniusCLPInput>): ChiodoConstructionResult;
}
