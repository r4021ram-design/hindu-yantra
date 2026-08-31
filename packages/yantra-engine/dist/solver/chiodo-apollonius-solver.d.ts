import { SolvedPoint2D } from './types';
export interface ChiodoBaseParameters {
    P: number;
    Q: number;
    R: number;
    S: number;
}
export interface PrimaryTriangle2D {
    id: string;
    index: number;
    direction: 'downward' | 'upward';
    color: string;
    apex: SolvedPoint2D;
    leftBase: SolvedPoint2D;
    rightBase: SolvedPoint2D;
    baseMidpoint: SolvedPoint2D;
}
export interface ApolloniusCLPState {
    pointPhi: SolvedPoint2D;
    lineDeltaX: number;
    circlePi: {
        center: SolvedPoint2D;
        radius: number;
    };
    circleXi: {
        center: SolvedPoint2D;
        radius: number;
    };
    pointA: SolvedPoint2D;
}
export interface ChiodoSolutionResult {
    isConstructible: boolean;
    baseParameters: ChiodoBaseParameters;
    triangles: PrimaryTriangle2D[];
    apolloniusState: ApolloniusCLPState;
    outerCircumcircle: {
        center: SolvedPoint2D;
        radius: number;
    };
    concurrencyErrors: {
        outerCircleDiscrepancy: number;
        apexBaseMaxError: number;
        tripleIntersectionMaxError: number;
    };
    singleStrokeEulerianPath: {
        isValidEulerianPath: boolean;
        switchPointCount: number;
    };
}
export declare class ChiodoApolloniusSolver {
    static readonly DEFAULT_PARAMETERS: ChiodoBaseParameters;
    /**
     * Solves the exact straightedge-and-compass Śrī Yantra construction using Alessandro Chiodo's (2021)
     * reduction to the Circle-Line-Point (CLP) Apollonius problem.
     */
    static solve(params?: Partial<ChiodoBaseParameters>): ChiodoSolutionResult;
}
