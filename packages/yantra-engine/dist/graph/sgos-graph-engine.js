"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SGOSGeometryGraphEngine = void 0;
const graph_builder_1 = require("./graph-builder");
const query_engine_1 = require("./query-engine");
const graph_diff_1 = require("./graph-diff");
const graph_inspector_1 = require("./graph-inspector");
class SGOSGeometryGraphEngine {
    /**
     * Main Pipeline Entry: Builds a GeometryGraph topology from an IGR.
     */
    static buildGraph(igr) {
        return graph_builder_1.GeometryGraphBuilder.build(igr);
    }
    /**
     * Creates a QueryEngine instance for a GeometryGraph topology.
     */
    static createQueryEngine(graph) {
        return new query_engine_1.GraphQueryEngine(graph);
    }
    /**
     * Compares two GeometryGraph topologies and computes structural deltas.
     */
    static compareGraphs(graphA, graphB) {
        return graph_diff_1.GraphDiffEngine.compare(graphA, graphB);
    }
    /**
     * Generates a developer-oriented inspection report for a GeometryGraph.
     */
    static inspectGraph(graph) {
        return graph_inspector_1.GraphInspector.inspect(graph);
    }
}
exports.SGOSGeometryGraphEngine = SGOSGeometryGraphEngine;
