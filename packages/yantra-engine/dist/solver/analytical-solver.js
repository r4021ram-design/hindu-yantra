"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticalSolver = void 0;
class AnalyticalSolver {
    /**
     * Exact Line-Line Intersection Solver (Closed-form Analytical Solution)
     */
    static intersectLines(p1, p2, p3, p4) {
        const denom = (p1.x - p2.x) * (p3.y - p4.y) - (p1.y - p2.y) * (p3.x - p4.x);
        if (Math.abs(denom) < 1e-12) {
            return null; // Parallel or coincident lines
        }
        const t = ((p1.x - p3.x) * (p3.y - p4.y) - (p1.y - p3.y) * (p3.x - p4.x)) / denom;
        const x = p1.x + t * (p2.x - p1.x);
        const y = p1.y + t * (p2.y - p1.y);
        return { x, y };
    }
    /**
     * Exact Line-Circle Intersection Solver
     */
    static intersectLineCircle(p1, p2, center, radius) {
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const fx = p1.x - center.x;
        const fy = p1.y - center.y;
        const a = dx * dx + dy * dy;
        const b = 2 * (fx * dx + fy * dy);
        const c = fx * fx + fy * fy - radius * radius;
        const discriminant = b * b - 4 * a * c;
        if (discriminant < 0) {
            return []; // No intersection
        }
        const sqrtDisc = Math.sqrt(discriminant);
        const t1 = (-b - sqrtDisc) / (2 * a);
        const t2 = (-b + sqrtDisc) / (2 * a);
        const intersections = [
            { x: p1.x + t1 * dx, y: p1.y + t1 * dy }
        ];
        if (discriminant > 1e-12) {
            intersections.push({ x: p1.x + t2 * dx, y: p1.y + t2 * dy });
        }
        return intersections;
    }
    /**
     * Exact Circle-Circle Intersection Solver
     */
    static intersectCircles(c1, r1, c2, r2) {
        const dx = c2.x - c1.x;
        const dy = c2.y - c1.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d > r1 + r2 || d < Math.abs(r1 - r2) || d === 0) {
            return []; // No intersection or concentric
        }
        const a = (r1 * r1 - r2 * r2 + d * d) / (2 * d);
        const h = Math.sqrt(Math.max(0, r1 * r1 - a * a));
        const x2 = c1.x + (a * dx) / d;
        const y2 = c1.y + (a * dy) / d;
        const p1 = {
            x: x2 + (h * dy) / d,
            y: y2 - (h * dx) / d
        };
        const p2 = {
            x: x2 - (h * dy) / d,
            y: y2 + (h * dx) / d
        };
        return h === 0 ? [p1] : [p1, p2];
    }
    /**
     * Computes exact centroid of a polygon vertex array
     */
    static computeCentroid(vertices) {
        if (vertices.length === 0)
            return { x: 0, y: 0 };
        let sumX = 0;
        let sumY = 0;
        vertices.forEach(v => {
            sumX += v.x;
            sumY += v.y;
        });
        return {
            x: sumX / vertices.length,
            y: sumY / vertices.length
        };
    }
    /**
     * Computes exact area of a 2D planar polygon using Shoelace formula
     */
    static computePolygonArea(vertices) {
        if (vertices.length < 3)
            return 0;
        let area = 0;
        const n = vertices.length;
        for (let i = 0; i < n; i++) {
            const j = (i + 1) % n;
            area += vertices[i].x * vertices[j].y;
            area -= vertices[j].x * vertices[i].y;
        }
        return Math.abs(area) / 2.0;
    }
}
exports.AnalyticalSolver = AnalyticalSolver;
