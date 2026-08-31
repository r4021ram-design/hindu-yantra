import { GeometryGraph, GraphFace, GraphRegion, GraphEdge, GraphNode, GraphLayer } from './types';
export declare class GraphQueryEngine {
    private graph;
    constructor(graph: GeometryGraph);
    /** Find all sub-triangle faces in graph (e.g., 43 sub-triangles of Shri Yantra) */
    findAllTriangles(): readonly GraphFace[];
    /** Find all lotus petal faces in graph */
    findAllPetals(): readonly GraphFace[];
    /** Find all sacred enclosure regions (Navavarana Chakras) */
    findAllRegions(): readonly GraphRegion[];
    /** Find all faces sharing common edges, vertex nodes, or centroids with a given face */
    findNeighboringFaces(faceId: string): readonly GraphFace[];
    /** Find outer boundary edges */
    findOuterBoundary(): readonly GraphEdge[];
    /** Find full layer hierarchy ordered from Bindu outward */
    findLayerHierarchy(): readonly GraphLayer[];
    /** Find all nodes belonging to a specific layer */
    findNodesByLayer(layerId: string): readonly GraphNode[];
    /** Find all faces belonging to a specific layer */
    findFacesByLayer(layerId: string): readonly GraphFace[];
}
