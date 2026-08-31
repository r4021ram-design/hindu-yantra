import { GeometryGraph, GraphTopologyDiff, GraphInspectionReport } from './types';
import { IntermediateGeometryRepresentation } from '../compiler/types';
import { GeometryGraphBuilder } from './graph-builder';
import { GraphQueryEngine } from './query-engine';
import { GraphDiffEngine } from './graph-diff';
import { GraphInspector } from './graph-inspector';

export class SGOSGeometryGraphEngine {
  /**
   * Main Pipeline Entry: Builds a GeometryGraph topology from an IGR.
   */
  public static buildGraph(igr: IntermediateGeometryRepresentation): GeometryGraph {
    return GeometryGraphBuilder.build(igr);
  }

  /**
   * Creates a QueryEngine instance for a GeometryGraph topology.
   */
  public static createQueryEngine(graph: GeometryGraph): GraphQueryEngine {
    return new GraphQueryEngine(graph);
  }

  /**
   * Compares two GeometryGraph topologies and computes structural deltas.
   */
  public static compareGraphs(graphA: GeometryGraph, graphB: GeometryGraph): GraphTopologyDiff {
    return GraphDiffEngine.compare(graphA, graphB);
  }

  /**
   * Generates a developer-oriented inspection report for a GeometryGraph.
   */
  public static inspectGraph(graph: GeometryGraph): GraphInspectionReport {
    return GraphInspector.inspect(graph);
  }
}
