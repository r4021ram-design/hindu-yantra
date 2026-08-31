import { Point2D } from './point';
import { Line2D } from './line';
export declare class Circle2D {
    readonly center: Point2D;
    readonly radius: number;
    static readonly EPSILON = 1e-12;
    constructor(center: Point2D, radius: number);
    static unitAtOrigin(): Circle2D;
    static fromThreePoints(p1: Point2D, p2: Point2D, p3: Point2D): Circle2D | null;
    containsPoint(p: Point2D, eps?: number): boolean;
    intersectLine(line: Line2D): Point2D[];
    intersectCircle(other: Circle2D): Point2D[];
}
