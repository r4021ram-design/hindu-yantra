"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector2D = void 0;
class Vector2D {
    x;
    y;
    static EPSILON = 1e-12;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static fromPoints(from, to) {
        return new Vector2D(to.x - from.x, to.y - from.y);
    }
    magnitude() {
        return Math.hypot(this.x, this.y);
    }
    squaredMagnitude() {
        return this.x * this.x + this.y * this.y;
    }
    normalize() {
        const mag = this.magnitude();
        if (mag <= Vector2D.EPSILON) {
            return new Vector2D(0, 0);
        }
        return new Vector2D(this.x / mag, this.y / mag);
    }
    perpendicular() {
        return new Vector2D(-this.y, this.x);
    }
    dot(other) {
        return this.x * other.x + this.y * other.y;
    }
    cross(other) {
        return this.x * other.y - this.y * other.x;
    }
    add(other) {
        return new Vector2D(this.x + other.x, this.y + other.y);
    }
    subtract(other) {
        return new Vector2D(this.x - other.x, this.y - other.y);
    }
    scale(factor) {
        return new Vector2D(this.x * factor, this.y * factor);
    }
    angle() {
        return Math.atan2(this.y, this.x);
    }
    angleTo(other) {
        const dot = this.dot(other);
        const det = this.cross(other);
        return Math.atan2(det, dot);
    }
}
exports.Vector2D = Vector2D;
