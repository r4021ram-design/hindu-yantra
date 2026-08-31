import { SolvedPoint2D } from './types';
export declare class TopologySolver {
    /**
     * Calculates signed area to determine winding order: CCW (> 0) vs CW (< 0)
     */
    static getWindingOrder(vertices: readonly SolvedPoint2D[]): 'CCW' | 'CW';
    /**
     * Enforces Counter-Clockwise (CCW) winding order on a vertex array
     */
    static enforceCCW(vertices: readonly SolvedPoint2D[]): SolvedPoint2D[];
}
