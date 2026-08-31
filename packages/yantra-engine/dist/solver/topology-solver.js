"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopologySolver = void 0;
class TopologySolver {
    /**
     * Calculates signed area to determine winding order: CCW (> 0) vs CW (< 0)
     */
    static getWindingOrder(vertices) {
        if (vertices.length < 3)
            return 'CCW';
        let signedArea = 0;
        const n = vertices.length;
        for (let i = 0; i < n; i++) {
            const j = (i + 1) % n;
            signedArea += vertices[i].x * vertices[j].y;
            signedArea -= vertices[j].x * vertices[i].y;
        }
        return signedArea >= 0 ? 'CCW' : 'CW';
    }
    /**
     * Enforces Counter-Clockwise (CCW) winding order on a vertex array
     */
    static enforceCCW(vertices) {
        const winding = this.getWindingOrder(vertices);
        if (winding === 'CW') {
            return [...vertices].reverse();
        }
        return [...vertices];
    }
}
exports.TopologySolver = TopologySolver;
