export declare class Point2D {
    readonly x: number;
    readonly y: number;
    static readonly EPSILON = 1e-12;
    constructor(x: number, y: number);
    static origin(): Point2D;
    distanceTo(other: Point2D): number;
    squaredDistanceTo(other: Point2D): number;
    equals(other: Point2D, eps?: number): boolean;
    add(other: Point2D): Point2D;
    subtract(other: Point2D): Point2D;
    scale(factor: number): Point2D;
    lerp(other: Point2D, t: number): Point2D;
    dot(other: Point2D): number;
    cross(other: Point2D): number;
    toObject(): {
        x: number;
        y: number;
    };
}
