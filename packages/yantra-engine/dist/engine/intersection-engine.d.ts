import { Point2D } from '../dsl/types';
export declare class IntersectionEngine {
    /**
     * Find exact intersection point of two infinite line segments (p1-p2) and (p3-p4)
     */
    static lineLineIntersection(p1: Point2D, p2: Point2D, p3: Point2D, p4: Point2D): Point2D | null;
    /**
     * Calculate distance between two 2D points
     */
    static distance(p1: Point2D, p2: Point2D): number;
    /**
     * Compute midpoint between two points
     */
    static midpoint(p1: Point2D, p2: Point2D): Point2D;
}
