import { SolvedPoint2D } from './types';
export declare class AnalyticalSolver {
    /**
     * Exact Line-Line Intersection Solver (Closed-form Analytical Solution)
     */
    static intersectLines(p1: SolvedPoint2D, p2: SolvedPoint2D, p3: SolvedPoint2D, p4: SolvedPoint2D): SolvedPoint2D | null;
    /**
     * Exact Line-Circle Intersection Solver
     */
    static intersectLineCircle(p1: SolvedPoint2D, p2: SolvedPoint2D, center: SolvedPoint2D, radius: number): SolvedPoint2D[];
    /**
     * Exact Circle-Circle Intersection Solver
     */
    static intersectCircles(c1: SolvedPoint2D, r1: number, c2: SolvedPoint2D, r2: number): SolvedPoint2D[];
    /**
     * Computes exact centroid of a polygon vertex array
     */
    static computeCentroid(vertices: readonly SolvedPoint2D[]): SolvedPoint2D;
    /**
     * Computes exact area of a 2D planar polygon using Shoelace formula
     */
    static computePolygonArea(vertices: readonly SolvedPoint2D[]): number;
}
