"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point2D = void 0;
class Point2D {
    x;
    y;
    static EPSILON = 1e-12;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static origin() {
        return new Point2D(0, 0);
    }
    distanceTo(other) {
        const dx = this.x - other.x;
        const dy = this.y - other.y;
        return Math.hypot(dx, dy);
    }
    squaredDistanceTo(other) {
        const dx = this.x - other.x;
        const dy = this.y - other.y;
        return dx * dx + dy * dy;
    }
    equals(other, eps = Point2D.EPSILON) {
        return Math.abs(this.x - other.x) <= eps && Math.abs(this.y - other.y) <= eps;
    }
    add(other) {
        return new Point2D(this.x + other.x, this.y + other.y);
    }
    subtract(other) {
        return new Point2D(this.x - other.x, this.y - other.y);
    }
    scale(factor) {
        return new Point2D(this.x * factor, this.y * factor);
    }
    lerp(other, t) {
        return new Point2D(this.x + (other.x - this.x) * t, this.y + (other.y - this.y) * t);
    }
    dot(other) {
        return this.x * other.x + this.y * other.y;
    }
    cross(other) {
        return this.x * other.y - this.y * other.x;
    }
    toObject() {
        return { x: this.x, y: this.y };
    }
}
exports.Point2D = Point2D;
