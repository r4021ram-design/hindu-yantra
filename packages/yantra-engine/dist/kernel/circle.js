"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle2D = void 0;
const point_1 = require("./point");
const line_1 = require("./line");
class Circle2D {
    center;
    radius;
    static EPSILON = 1e-12;
    constructor(center, radius) {
        this.center = center;
        this.radius = radius;
        if (radius < 0) {
            throw new Error('Circle2D radius cannot be negative');
        }
    }
    static unitAtOrigin() {
        return new Circle2D(point_1.Point2D.origin(), 1.0);
    }
    static fromThreePoints(p1, p2, p3) {
        const l1 = line_1.Line2D.fromTwoPoints(p1, p2).perpendicularThrough(p1.lerp(p2, 0.5));
        const l2 = line_1.Line2D.fromTwoPoints(p2, p3).perpendicularThrough(p2.lerp(p3, 0.5));
        const center = l1.intersectLine(l2);
        if (!center)
            return null;
        const radius = center.distanceTo(p1);
        return new Circle2D(center, radius);
    }
    containsPoint(p, eps = Circle2D.EPSILON) {
        return Math.abs(this.center.distanceTo(p) - this.radius) <= eps;
    }
    intersectLine(line) {
        const d = line.signedDistanceToPoint(this.center);
        const r = this.radius;
        if (Math.abs(d) > r + Circle2D.EPSILON) {
            return []; // No intersection
        }
        const proj = line.projectPoint(this.center);
        if (Math.abs(Math.abs(d) - r) <= Circle2D.EPSILON) {
            return [proj]; // Tangent
        }
        const h = Math.sqrt(Math.max(0, r * r - d * d));
        const dirX = -line.b;
        const dirY = line.a;
        const p1 = new point_1.Point2D(proj.x + dirX * h, proj.y + dirY * h);
        const p2 = new point_1.Point2D(proj.x - dirX * h, proj.y - dirY * h);
        return [p1, p2];
    }
    intersectCircle(other) {
        const d = this.center.distanceTo(other.center);
        const r1 = this.radius;
        const r2 = other.radius;
        if (d > r1 + r2 + Circle2D.EPSILON || d < Math.abs(r1 - r2) - Circle2D.EPSILON || d <= Circle2D.EPSILON) {
            return []; // Separate, nested, or concentric
        }
        const a = (r1 * r1 - r2 * r2 + d * d) / (2 * d);
        const h = Math.sqrt(Math.max(0, r1 * r1 - a * a));
        const p2X = this.center.x + (a * (other.center.x - this.center.x)) / d;
        const p2Y = this.center.y + (a * (other.center.y - this.center.y)) / d;
        if (Math.abs(h) <= Circle2D.EPSILON) {
            return [new point_1.Point2D(p2X, p2Y)];
        }
        const offX = (-h * (other.center.y - this.center.y)) / d;
        const offY = (h * (other.center.x - this.center.x)) / d;
        return [
            new point_1.Point2D(p2X + offX, p2Y + offY),
            new point_1.Point2D(p2X - offX, p2Y - offY)
        ];
    }
}
exports.Circle2D = Circle2D;
