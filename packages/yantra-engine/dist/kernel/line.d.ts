import { Point2D } from './point';
import { Vector2D } from './vector';
export declare class Line2D {
    static readonly EPSILON = 1e-12;
    readonly a: number;
    readonly b: number;
    readonly c: number;
    constructor(a: number, b: number, c: number);
    static fromTwoPoints(p1: Point2D, p2: Point2D): Line2D;
    static fromPointAndVector(p: Point2D, v: Vector2D): Line2D;
    static horizontal(y: number): Line2D;
    static vertical(x: number): Line2D;
    distanceToPoint(p: Point2D): number;
    signedDistanceToPoint(p: Point2D): number;
    projectPoint(p: Point2D): Point2D;
    reflectPoint(p: Point2D): Point2D;
    intersectLine(other: Line2D): Point2D | null;
    perpendicularThrough(p: Point2D): Line2D;
    parallelThrough(p: Point2D): Line2D;
}
export declare class Segment2D {
    readonly p1: Point2D;
    readonly p2: Point2D;
    constructor(p1: Point2D, p2: Point2D);
    length(): number;
    midpoint(): Point2D;
    toLine(): Line2D;
    perpendicularBisector(): Line2D;
    intersectSegment(other: Segment2D): Point2D | null;
    containsPoint(p: Point2D, eps?: number): boolean;
}
