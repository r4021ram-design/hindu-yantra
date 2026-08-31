import { GeometryGraph, GraphTopologyDiff } from './types';
export declare class GraphDiffEngine {
    /**
     * Compares two GeometryGraph instances and computes structured topology differences.
     */
    static compare(graphA: GeometryGraph, graphB: GeometryGraph): GraphTopologyDiff;
}
