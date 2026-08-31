import { GeometryGraph, GraphTopologyDiff, GraphInspectionReport } from './types';
import { IntermediateGeometryRepresentation } from '../compiler/types';
import { GraphQueryEngine } from './query-engine';
export declare class SGOSGeometryGraphEngine {
    /**
     * Main Pipeline Entry: Builds a GeometryGraph topology from an IGR.
     */
    static buildGraph(igr: IntermediateGeometryRepresentation): GeometryGraph;
    /**
     * Creates a QueryEngine instance for a GeometryGraph topology.
     */
    static createQueryEngine(graph: GeometryGraph): GraphQueryEngine;
    /**
     * Compares two GeometryGraph topologies and computes structural deltas.
     */
    static compareGraphs(graphA: GeometryGraph, graphB: GeometryGraph): GraphTopologyDiff;
    /**
     * Generates a developer-oriented inspection report for a GeometryGraph.
     */
    static inspectGraph(graph: GeometryGraph): GraphInspectionReport;
}
