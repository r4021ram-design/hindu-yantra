"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntersectionEngine = void 0;
class IntersectionEngine {
    /**
     * Find exact intersection point of two infinite line segments (p1-p2) and (p3-p4)
     */
    static lineLineIntersection(p1, p2, p3, p4) {
        const denom = (p1.x - p2.x) * (p3.y - p4.y) - (p1.y - p2.y) * (p3.x - p4.x);
        if (Math.abs(denom) < 1e-9)
            return null; // Parallel or coincident lines
        const t = ((p1.x - p3.x) * (p3.y - p4.y) - (p1.y - p3.y) * (p3.x - p4.x)) / denom;
        const u = ((p1.x - p3.x) * (p1.y - p2.y) - (p1.y - p3.y) * (p1.x - p2.x)) / denom;
        if (t >= -0.01 && t <= 1.01 && u >= -0.01 && u <= 1.01) {
            return {
                x: p1.x + t * (p2.x - p1.x),
                y: p1.y + t * (p2.y - p1.y)
            };
        }
        return null;
    }
    /**
     * Calculate distance between two 2D points
     */
    static distance(p1, p2) {
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
    /**
     * Compute midpoint between two points
     */
    static midpoint(p1, p2) {
        return {
            x: (p1.x + p2.x) / 2,
            y: (p1.y + p2.y) / 2
        };
    }
}
exports.IntersectionEngine = IntersectionEngine;
