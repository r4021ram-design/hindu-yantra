"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Segment2D = exports.Line2D = void 0;
const point_1 = require("./point");
class Line2D {
    static EPSILON = 1e-12;
    // Implicit form: Ax + By + C = 0
    a;
    b;
    c;
    constructor(a, b, c) {
        const norm = Math.hypot(a, b);
        if (norm <= Line2D.EPSILON) {
            throw new Error('Line2D degenerate coefficients (A and B cannot both be 0)');
        }
        this.a = a / norm;
        this.b = b / norm;
        this.c = c / norm;
    }
    static fromTwoPoints(p1, p2) {
        const a = p2.y - p1.y;
        const b = p1.x - p2.x;
        const c = p2.x * p1.y - p1.x * p2.y;
        return new Line2D(a, b, c);
    }
    static fromPointAndVector(p, v) {
        const a = -v.y;
        const b = v.x;
        const c = v.y * p.x - v.x * p.y;
        return new Line2D(a, b, c);
    }
    static horizontal(y) {
        return new Line2D(0, 1, -y);
    }
    static vertical(x) {
        return new Line2D(1, 0, -x);
    }
    distanceToPoint(p) {
        return Math.abs(this.a * p.x + this.b * p.y + this.c);
    }
    signedDistanceToPoint(p) {
        return this.a * p.x + this.b * p.y + this.c;
    }
    projectPoint(p) {
        const d = this.signedDistanceToPoint(p);
        return new point_1.Point2D(p.x - this.a * d, p.y - this.b * d);
    }
    reflectPoint(p) {
        const d = this.signedDistanceToPoint(p);
        return new point_1.Point2D(p.x - 2 * this.a * d, p.y - 2 * this.b * d);
    }
    intersectLine(other) {
        const det = this.a * other.b - other.a * this.b;
        if (Math.abs(det) <= Line2D.EPSILON) {
            return null; // Parallel or coincident
        }
        const x = (this.b * other.c - other.b * this.c) / det;
        const y = (other.a * this.c - this.a * other.c) / det;
        return new point_1.Point2D(x, y);
    }
    perpendicularThrough(p) {
        return new Line2D(-this.b, this.a, this.b * p.x - this.a * p.y);
    }
    parallelThrough(p) {
        return new Line2D(this.a, this.b, -(this.a * p.x + this.b * p.y));
    }
}
exports.Line2D = Line2D;
class Segment2D {
    p1;
    p2;
    constructor(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
    }
    length() {
        return this.p1.distanceTo(this.p2);
    }
    midpoint() {
        return this.p1.lerp(this.p2, 0.5);
    }
    toLine() {
        return Line2D.fromTwoPoints(this.p1, this.p2);
    }
    perpendicularBisector() {
        const mid = this.midpoint();
        const line = this.toLine();
        return line.perpendicularThrough(mid);
    }
    intersectSegment(other) {
        const line1 = this.toLine();
        const line2 = other.toLine();
        const pt = line1.intersectLine(line2);
        if (!pt)
            return null;
        if (this.containsPoint(pt) && other.containsPoint(pt)) {
            return pt;
        }
        return null;
    }
    containsPoint(p, eps = 1e-9) {
        const lineDist = this.toLine().distanceToPoint(p);
        if (lineDist > eps)
            return false;
        const minX = Math.min(this.p1.x, this.p2.x) - eps;
        const maxX = Math.max(this.p1.x, this.p2.x) + eps;
        const minY = Math.min(this.p1.y, this.p2.y) - eps;
        const maxY = Math.max(this.p1.y, this.p2.y) + eps;
        return p.x >= minX && p.x <= maxX && p.y >= minY && p.y <= maxY;
    }
}
exports.Segment2D = Segment2D;
