"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphDiffEngine = void 0;
class GraphDiffEngine {
    /**
     * Compares two GeometryGraph instances and computes structured topology differences.
     */
    static compare(graphA, graphB) {
        const nodesA = new Set(Object.keys(graphA.nodes));
        const nodesB = new Set(Object.keys(graphB.nodes));
        const edgesA = new Set(Object.keys(graphA.edges));
        const edgesB = new Set(Object.keys(graphB.edges));
        const facesA = new Set(Object.keys(graphA.faces));
        const facesB = new Set(Object.keys(graphB.faces));
        const addedNodeIds = Array.from(nodesB).filter(id => !nodesA.has(id));
        const removedNodeIds = Array.from(nodesA).filter(id => !nodesB.has(id));
        const addedEdgeIds = Array.from(edgesB).filter(id => !edgesA.has(id));
        const removedEdgeIds = Array.from(edgesA).filter(id => !edgesB.has(id));
        const addedFaceIds = Array.from(facesB).filter(id => !facesA.has(id));
        const removedFaceIds = Array.from(facesA).filter(id => !facesB.has(id));
        const layersA = new Set(graphA.layers.map(l => l.id));
        const layersB = new Set(graphB.layers.map(l => l.id));
        const modifiedLayers = Array.from(new Set([...layersA, ...layersB])).filter(id => !layersA.has(id) || !layersB.has(id));
        const areIdentical = addedNodeIds.length === 0 &&
            removedNodeIds.length === 0 &&
            addedEdgeIds.length === 0 &&
            removedEdgeIds.length === 0 &&
            addedFaceIds.length === 0 &&
            removedFaceIds.length === 0 &&
            modifiedLayers.length === 0;
        const structuralDeltas = [];
        if (graphA.tradition !== graphB.tradition) {
            structuralDeltas.push(`Tradition changed from "${graphA.tradition}" to "${graphB.tradition}".`);
        }
        if (graphA.symmetryGroup !== graphB.symmetryGroup) {
            structuralDeltas.push(`Symmetry group changed from "${graphA.symmetryGroup}" to "${graphB.symmetryGroup}".`);
        }
        return {
            graphAId: graphA.dslId,
            graphBId: graphB.dslId,
            areIdentical,
            addedNodeIds: Object.freeze(addedNodeIds),
            removedNodeIds: Object.freeze(removedNodeIds),
            addedEdgeIds: Object.freeze(addedEdgeIds),
            removedEdgeIds: Object.freeze(removedEdgeIds),
            addedFaceIds: Object.freeze(addedFaceIds),
            removedFaceIds: Object.freeze(removedFaceIds),
            modifiedLayers: Object.freeze(modifiedLayers),
            traditionDifference: {
                traditionA: graphA.tradition,
                traditionB: graphB.tradition,
                structuralDeltas: Object.freeze(structuralDeltas)
            }
        };
    }
}
exports.GraphDiffEngine = GraphDiffEngine;
