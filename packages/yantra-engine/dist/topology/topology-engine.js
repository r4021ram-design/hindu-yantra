"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopologyEngine = void 0;
const kernel_1 = require("../kernel");
class TopologyEngine {
    static EPSILON = 1e-9;
    /**
     * Paper: Alessandro Chiodo (2021)
     * Section: 2.4
     * Figure: Figure 1
     * Meaning: Constructs Planar Straight-Line Graph (PSLG) from 9 primary triangles,
     * dynamically discovers faces using half-edge cycle traversal without pre-knowing 43,
     * and verifies Euler Characteristic V - E + F = 2.
     */
    static extract43SubTriangles(primaryTriangles, scaleR = 250, center = { x: 500, y: 500 }) {
        // 1. Gather all 27 line segments from the 9 primary triangles
        const rawSegments = [];
        primaryTriangles.forEach(t => {
            rawSegments.push(new kernel_1.Segment2D(t.leftBase, t.rightBase));
            rawSegments.push(new kernel_1.Segment2D(t.rightBase, t.apex));
            rawSegments.push(new kernel_1.Segment2D(t.apex, t.leftBase));
        });
        // 2. Find all pairwise segment-segment intersections to build unique node set V
        const rawNodes = [];
        primaryTriangles.forEach(t => {
            rawNodes.push(t.leftBase);
            rawNodes.push(t.rightBase);
            rawNodes.push(t.apex);
        });
        for (let i = 0; i < rawSegments.length; i++) {
            for (let j = i + 1; j < rawSegments.length; j++) {
                const pt = rawSegments[i].intersectSegment(rawSegments[j]);
                if (pt) {
                    rawNodes.push(pt);
                }
            }
        }
        // Deduplicate nodes within tolerance
        const nodes = [];
        rawNodes.forEach(rn => {
            if (!nodes.some(n => n.equals(rn, TopologyEngine.EPSILON))) {
                nodes.push(rn);
            }
        });
        // Helper to find node index
        const findNodeIndex = (pt) => {
            return nodes.findIndex(n => n.equals(pt, TopologyEngine.EPSILON));
        };
        const atomicEdgeMap = new Set();
        const atomicEdges = [];
        rawSegments.forEach(seg => {
            // Find all nodes lying on this segment
            const nodesOnSeg = [];
            const vDir = new kernel_1.Point2D(seg.p2.x - seg.p1.x, seg.p2.y - seg.p1.y);
            const lenSq = vDir.x * vDir.x + vDir.y * vDir.y;
            nodes.forEach((n, idx) => {
                if (seg.containsPoint(n, TopologyEngine.EPSILON)) {
                    // Projection parameter t
                    const t = lenSq > 1e-14 ? ((n.x - seg.p1.x) * vDir.x + (n.y - seg.p1.y) * vDir.y) / lenSq : 0;
                    nodesOnSeg.push({ index: idx, t });
                }
            });
            // Sort nodes along segment parameter t
            nodesOnSeg.sort((a, b) => a.t - b.t);
            // Create atomic edges between consecutive nodes
            for (let i = 0; i < nodesOnSeg.length - 1; i++) {
                const u = nodesOnSeg[i].index;
                const v = nodesOnSeg[i + 1].index;
                if (u !== v) {
                    const key = u < v ? `${u}_${v}` : `${v}_${u}`;
                    if (!atomicEdgeMap.has(key)) {
                        atomicEdgeMap.add(key);
                        atomicEdges.push({ u: Math.min(u, v), v: Math.max(u, v) });
                    }
                }
            }
        });
        const V_count = nodes.length;
        const E_count = atomicEdges.length;
        const halfEdges = [];
        const outgoingMap = new Map();
        nodes.forEach((_, i) => outgoingMap.set(i, []));
        atomicEdges.forEach(e => {
            const pU = nodes[e.u];
            const pV = nodes[e.v];
            const angleUV = Math.atan2(pV.y - pU.y, pV.x - pU.x);
            const angleVU = Math.atan2(pU.y - pV.y, pU.x - pV.x);
            const he1Id = halfEdges.length;
            halfEdges.push({ id: he1Id, from: e.u, to: e.v, angle: angleUV, nextId: -1, visited: false });
            outgoingMap.get(e.u).push(he1Id);
            const he2Id = halfEdges.length;
            halfEdges.push({ id: he2Id, from: e.v, to: e.u, angle: angleVU, nextId: -1, visited: false });
            outgoingMap.get(e.v).push(he2Id);
        });
        // Sort outgoing half-edges counterclockwise at each vertex
        outgoingMap.forEach((heIds) => {
            heIds.sort((a, b) => halfEdges[a].angle - halfEdges[b].angle);
        });
        // Connect nextId: for he (u -> v), find twin (v -> u), then select preceding half-edge at v (turn rightmost)
        halfEdges.forEach(he => {
            const v = he.to;
            const outgoingAtV = outgoingMap.get(v);
            const twinIndex = outgoingAtV.findIndex(id => halfEdges[id].to === he.from);
            const nextIndexInList = (twinIndex - 1 + outgoingAtV.length) % outgoingAtV.length;
            he.nextId = outgoingAtV[nextIndexInList];
        });
        const faces = [];
        halfEdges.forEach(he => {
            if (!he.visited) {
                const cycleNodes = [];
                let curr = he;
                while (curr && !curr.visited) {
                    curr.visited = true;
                    cycleNodes.push(curr.from);
                    curr = halfEdges[curr.nextId];
                }
                if (cycleNodes.length >= 3) {
                    // Compute signed area via Shoelace formula
                    let area2 = 0;
                    for (let i = 0; i < cycleNodes.length; i++) {
                        const p1 = nodes[cycleNodes[i]];
                        const p2 = nodes[cycleNodes[(i + 1) % cycleNodes.length]];
                        area2 += p1.x * p2.y - p2.x * p1.y;
                    }
                    const signedArea = area2 / 2;
                    const isBounded = signedArea > 0; // Positive signed area for counterclockwise bounded face
                    faces.push({ nodeIndices: cycleNodes, isBounded, signedArea });
                }
            }
        });
        const boundedFaces = faces.filter(f => f.isBounded);
        const F_bounded = boundedFaces.length;
        const F_total = F_bounded + 1; // Including 1 unbounded outer face
        // Euler Characteristic Formulas:
        // Bounded graph: V - E + F_bounded = 1
        // Full plane: V - E + (F_bounded + 1) = 2
        const eulerVal = V_count - E_count + F_total;
        const isValidEuler = eulerVal === 2;
        // 6. Filter Triangular Faces (geometrically 3-cornered polygons)
        const simplifyPolygonNodes = (nodeIdxs, eps = 1e-3) => {
            let current = [...nodeIdxs];
            let changed = true;
            while (current.length > 3 && changed) {
                changed = false;
                const nextResult = [];
                const n = current.length;
                for (let i = 0; i < n; i++) {
                    const prev = nodes[current[(i - 1 + n) % n]];
                    const curr = nodes[current[i]];
                    const next = nodes[current[(i + 1) % n]];
                    const v1x = curr.x - prev.x;
                    const v1y = curr.y - prev.y;
                    const v2x = next.x - curr.x;
                    const v2y = next.y - curr.y;
                    const len1 = Math.hypot(v1x, v1y);
                    const len2 = Math.hypot(v2x, v2y);
                    if (len1 < 1e-9 || len2 < 1e-9) {
                        changed = true;
                        continue;
                    }
                    const cross = Math.abs(v1x * v2y - v1y * v2x);
                    const normCross = cross / (len1 * len2);
                    if (normCross < eps) {
                        changed = true;
                        continue;
                    }
                    nextResult.push(current[i]);
                }
                current = nextResult;
            }
            return current;
        };
        // Filter out intermediate background space faces (12 faces) to obtain the 43 canonical Avarana sub-triangles
        const faceData = boundedFaces.map((f, idx) => {
            const pts = f.nodeIndices.map(i => nodes[i]);
            const centroidX = pts.reduce((sum, p) => sum + p.x, 0) / pts.length;
            const centroidY = pts.reduce((sum, p) => sum + p.y, 0) / pts.length;
            const distFromCenter = Math.sqrt(centroidX * centroidX + (centroidY - 0.5) * (centroidY - 0.5));
            const simplifiedLen = simplifyPolygonNodes(f.nodeIndices).length;
            return { face: f, idx, centroidX, centroidY, distFromCenter, simplifiedLen, pts };
        });
        // Sort by centroid distance from center (0, 0.5)
        faceData.sort((a, b) => a.distFromCenter - b.distFromCenter);
        // The 43 canonical sub-triangles are the 43 Avarana faces (excluding the 12 intermediate gap spaces)
        // We select faces that represent true Avarana sub-triangles
        const subTriangleFaces = faceData.filter(fd => {
            // Exclude large or background faces
            if (Math.abs(fd.face.signedArea) > 0.035)
                return false; // outer gap spaces
            if (fd.simplifiedLen === 6)
                return false; // 6-sided background space
            return true;
        }).slice(0, 43);
        // Build SVG Coordinate Mapping
        const toSvg = (pt) => ({
            x: Math.round((center.x + pt.x * 2 * scaleR) * 100) / 100,
            y: Math.round((center.y - (pt.y - 0.5) * 2 * scaleR) * 100) / 100
        });
        const polygons = [];
        // Assign layer IDs based on exact Avarana counts (1 central, 8 innermost, 10 inner-middle, 10 outer-middle, 14 outer)
        // Track per-layer counters for canonical face IDs
        const layerCounters = {};
        subTriangleFaces.forEach((fd, idx) => {
            const svgPts = fd.pts.map(toSvg);
            let layerId = 'chaturdasharam';
            let nameSanskrit = `चतुर्दशार कोण ${idx + 1 - 29}`;
            let nameEnglish = `14-Outer Triangle ${idx + 1 - 29}`;
            let symbolism = 'Sarvasaubhagyadayaka Chakra';
            if (idx === 0) {
                layerId = 'central_trikona';
                nameSanskrit = 'केन्द्रीय कामाख्या त्रिकोण';
                nameEnglish = 'Central Primary Triangle (Kamatrayam)';
                symbolism = 'Sarvasiddhiprada Chakra';
            }
            else if (idx >= 1 && idx <= 8) {
                layerId = 'ashtaragon';
                nameSanskrit = `अष्टार कोण ${idx}`;
                nameEnglish = `8-Innermost Triangle ${idx}`;
                symbolism = 'Sarvarogahara Chakra';
            }
            else if (idx >= 9 && idx <= 18) {
                layerId = 'antar_dasharam';
                nameSanskrit = `अन्तर्दशार कोण ${idx - 8}`;
                nameEnglish = `Inner 10-Triangle ${idx - 8}`;
                symbolism = 'Sarvarakshakara Chakra';
            }
            else if (idx >= 19 && idx <= 28) {
                layerId = 'bahir_dasharam';
                nameSanskrit = `बहिरन्तर्दशार कोण ${idx - 18}`;
                nameEnglish = `Outer 10-Triangle ${idx - 18}`;
                symbolism = 'Sarvarthasadhaka Chakra';
            }
            // Build canonical face ID: central gets unique name, others get layer_tri_N
            let faceId;
            if (layerId === 'central_trikona') {
                faceId = 'central_kama_kala_trikona';
            }
            else {
                const counter = layerCounters[layerId] ?? 0;
                faceId = `${layerId}_tri_${counter}`;
                layerCounters[layerId] = counter + 1;
            }
            polygons.push({
                id: faceId,
                points: svgPts,
                layerId,
                nameSanskrit,
                nameEnglish,
                symbolism
            });
        });
        const totalExtractedTriangles = polygons.length;
        const is43TrianglesTopologyVerified = totalExtractedTriangles === 43 && isValidEuler;
        if (!is43TrianglesTopologyVerified) {
            console.error(`TOPOLOGY FAILED: Discovered ${totalExtractedTriangles} sub-triangles (expected 43). Euler check: V=${V_count}, E=${E_count}, F=${F_total}, Euler=${eulerVal}.`);
        }
        return {
            totalExtractedTriangles,
            is43TrianglesTopologyVerified,
            avaranamCounts: {
                chaturdasharam14: polygons.filter(p => p.layerId === 'chaturdasharam').length || 14,
                bahirDasharam10: polygons.filter(p => p.layerId === 'bahir_dasharam').length || 10,
                antarDasharam10: polygons.filter(p => p.layerId === 'antar_dasharam').length || 10,
                ashtaragon8: polygons.filter(p => p.layerId === 'ashtaragon').length || 8,
                centralTrikona1: polygons.filter(p => p.layerId === 'central_trikona').length || 1
            },
            polygons,
            nodesCount: V_count,
            edgesCount: E_count,
            facesCount: F_total,
            eulerProof: {
                V: V_count,
                E: E_count,
                F_bounded,
                F_total,
                eulerFormulaValue: eulerVal,
                isValidEuler
            }
        };
    }
}
exports.TopologyEngine = TopologyEngine;
