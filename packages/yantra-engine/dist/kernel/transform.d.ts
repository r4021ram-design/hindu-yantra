import { Point2D } from './point';
import { Vector2D } from './vector';
import { Line2D } from './line';
export declare class AffineTransform2D {
    readonly m00: number;
    readonly m01: number;
    readonly m02: number;
    readonly m10: number;
    readonly m11: number;
    readonly m12: number;
    constructor(m00?: number, m01?: number, m02?: number, m10?: number, m11?: number, m12?: number);
    static identity(): AffineTransform2D;
    static translation(tx: number, ty: number): AffineTransform2D;
    static rotation(angleRad: number): AffineTransform2D;
    static scaling(sx: number, sy: number): AffineTransform2D;
    static reflectionAcrossLine(line: Line2D): AffineTransform2D;
    transformPoint(p: Point2D): Point2D;
    transformVector(v: Vector2D): Vector2D;
    multiply(other: AffineTransform2D): AffineTransform2D;
}
