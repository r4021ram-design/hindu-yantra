"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphQueryEngine = void 0;
class GraphQueryEngine {
    graph;
    constructor(graph) {
        this.graph = graph;
    }
    /** Find all sub-triangle faces in graph (e.g., 43 sub-triangles of Shri Yantra) */
    findAllTriangles() {
        return Object.values(this.graph.faces).filter(f => f.type === 'sub_triangle' || f.nodeIds.length === 3);
    }
    /** Find all lotus petal faces in graph */
    findAllPetals() {
        return Object.values(this.graph.faces).filter(f => f.type === 'lotus_petal');
    }
    /** Find all sacred enclosure regions (Navavarana Chakras) */
    findAllRegions() {
        return this.graph.regions;
    }
    /** Find all faces sharing common edges, vertex nodes, or centroids with a given face */
    findNeighboringFaces(faceId) {
        const targetFace = this.graph.faces[faceId];
        if (!targetFace)
            return [];
        const targetEdges = new Set(targetFace.edgeIds);
        const targetNodes = new Set(targetFace.nodeIds);
        if (targetFace.centroidNodeId) {
            targetNodes.add(targetFace.centroidNodeId);
        }
        const neighbors = [];
        for (const f of Object.values(this.graph.faces)) {
            if (f.id === faceId)
                continue;
            const sharesEdge = f.edgeIds.some(eid => targetEdges.has(eid));
            const sharesNode = f.nodeIds.some(nid => targetNodes.has(nid));
            const sharesCentroid = !!(f.centroidNodeId && f.centroidNodeId === targetFace.centroidNodeId && f.type === targetFace.type);
            if (sharesEdge || sharesNode || sharesCentroid) {
                neighbors.push(f);
            }
        }
        return Object.freeze(neighbors);
    }
    /** Find outer boundary edges */
    findOuterBoundary() {
        return this.graph.outerBoundaryEdgeIds
            .map(eid => this.graph.edges[eid])
            .filter(Boolean);
    }
    /** Find full layer hierarchy ordered from Bindu outward */
    findLayerHierarchy() {
        return [...this.graph.layers].sort((a, b) => a.orderIndex - b.orderIndex);
    }
    /** Find all nodes belonging to a specific layer */
    findNodesByLayer(layerId) {
        return Object.values(this.graph.nodes).filter(n => n.layerId === layerId);
    }
    /** Find all faces belonging to a specific layer */
    findFacesByLayer(layerId) {
        return Object.values(this.graph.faces).filter(f => f.layerId === layerId);
    }
}
exports.GraphQueryEngine = GraphQueryEngine;
