import { Point2D, Circle2D } from '../kernel';
export interface ApolloniusCLPInput {
    P?: number;
    Q?: number;
    R?: number;
    S?: number;
}
export interface ApolloniusCLPSolution {
    targetPointA: Point2D;
    circleXi: Circle2D;
    pointPhi: Point2D;
    auxiliaryPoints: {
        U: Point2D;
        V: Point2D;
        W: Point2D;
        X: Point2D;
        Y: Point2D;
        E: Point2D;
        F: Point2D;
        G: Point2D;
        Pt1: Point2D;
        Pt4: Point2D;
    };
    tSolutions: number[];
    selectedTSolution: number;
    quadraticCoefficients: {
        a: number;
        b: number;
        c: number;
        discriminant: number;
    };
}
export declare class ApolloniusSolver {
    static readonly EPSILON = 1e-12;
    /**
     * Paper: Alessandro Chiodo (2021)
     * Section: 2.3 & 2.4
     * Equation: Equation 2.3.3
     * Meaning: Solves the exact Circle-Line-Point (CLP) Apollonius Problem for circle Xi tangency
     * Mathematical Expression: a t^2 + b t + c = 0
     */
    static solveChiodoCLP(input?: ApolloniusCLPInput): ApolloniusCLPSolution;
}
