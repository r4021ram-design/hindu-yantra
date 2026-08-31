"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffineTransform2D = void 0;
const point_1 = require("./point");
const vector_1 = require("./vector");
class AffineTransform2D {
    m00;
    m01;
    m02;
    m10;
    m11;
    m12;
    // 3x3 matrix representing 2D affine transformation:
    // | m00 m01 m02 |
    // | m10 m11 m12 |
    // |  0   0   1  |
    constructor(m00 = 1, m01 = 0, m02 = 0, m10 = 0, m11 = 1, m12 = 0) {
        this.m00 = m00;
        this.m01 = m01;
        this.m02 = m02;
        this.m10 = m10;
        this.m11 = m11;
        this.m12 = m12;
    }
    static identity() {
        return new AffineTransform2D(1, 0, 0, 0, 1, 0);
    }
    static translation(tx, ty) {
        return new AffineTransform2D(1, 0, tx, 0, 1, ty);
    }
    static rotation(angleRad) {
        const cos = Math.cos(angleRad);
        const sin = Math.sin(angleRad);
        return new AffineTransform2D(cos, -sin, 0, sin, cos, 0);
    }
    static scaling(sx, sy) {
        return new AffineTransform2D(sx, 0, 0, 0, sy, 0);
    }
    static reflectionAcrossLine(line) {
        // Reflect point (x, y) across Ax + By + C = 0 where A^2 + B^2 = 1
        const a = line.a;
        const b = line.b;
        const c = line.c;
        const m00 = 1 - 2 * a * a;
        const m01 = -2 * a * b;
        const m02 = -2 * a * c;
        const m10 = -2 * a * b;
        const m11 = 1 - 2 * b * b;
        const m12 = -2 * b * c;
        return new AffineTransform2D(m00, m01, m02, m10, m11, m12);
    }
    transformPoint(p) {
        const x = this.m00 * p.x + this.m01 * p.y + this.m02;
        const y = this.m10 * p.x + this.m11 * p.y + this.m12;
        return new point_1.Point2D(x, y);
    }
    transformVector(v) {
        const x = this.m00 * v.x + this.m01 * v.y;
        const y = this.m10 * v.x + this.m11 * v.y;
        return new vector_1.Vector2D(x, y);
    }
    multiply(other) {
        const m00 = this.m00 * other.m00 + this.m01 * other.m10;
        const m01 = this.m00 * other.m01 + this.m01 * other.m11;
        const m02 = this.m00 * other.m02 + this.m01 * other.m12 + this.m02;
        const m10 = this.m10 * other.m00 + this.m11 * other.m10;
        const m11 = this.m10 * other.m01 + this.m11 * other.m11;
        const m12 = this.m10 * other.m02 + this.m11 * other.m12 + this.m12;
        return new AffineTransform2D(m00, m01, m02, m10, m11, m12);
    }
}
exports.AffineTransform2D = AffineTransform2D;
