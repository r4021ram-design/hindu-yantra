import { Point2D } from './point';
export declare class Vector2D {
    readonly x: number;
    readonly y: number;
    static readonly EPSILON = 1e-12;
    constructor(x: number, y: number);
    static fromPoints(from: Point2D, to: Point2D): Vector2D;
    magnitude(): number;
    squaredMagnitude(): number;
    normalize(): Vector2D;
    perpendicular(): Vector2D;
    dot(other: Vector2D): number;
    cross(other: Vector2D): number;
    add(other: Vector2D): Vector2D;
    subtract(other: Vector2D): Vector2D;
    scale(factor: number): Vector2D;
    angle(): number;
    angleTo(other: Vector2D): number;
}
