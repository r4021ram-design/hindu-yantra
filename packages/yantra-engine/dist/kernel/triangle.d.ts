import { Point2D } from './point';
import { Segment2D } from './line';
import { Circle2D } from './circle';
export declare class Triangle2D {
    readonly p1: Point2D;
    readonly p2: Point2D;
    readonly p3: Point2D;
    constructor(p1: Point2D, p2: Point2D, p3: Point2D);
    area(): number;
    segments(): [Segment2D, Segment2D, Segment2D];
    circumcircle(): Circle2D | null;
    centroid(): Point2D;
    containsPoint(p: Point2D): boolean;
}
export declare class Polygon2D {
    readonly vertices: Point2D[];
    constructor(vertices: Point2D[]);
    area(): number;
    segments(): Segment2D[];
}
