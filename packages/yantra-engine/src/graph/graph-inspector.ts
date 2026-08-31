import { GeometryGraph, GraphInspectionReport } from './types';

export class GraphInspector {
  /**
   * Generates a developer-oriented inspection report for a GeometryGraph topology.
   */
  public static inspect(graph: GeometryGraph): GraphInspectionReport {
    const nodes = Object.values(graph.nodes);
    const edges = Object.values(graph.edges);
    const faces = Object.values(graph.faces);

    const marmaPointsCount = nodes.filter(n => n.type === 'marma').length;
    const binduCentroidCount = nodes.filter(n => n.type === 'centroid').length;

    const boundaryEdgesCount = edges.filter(e => e.type === 'boundary').length;

    const circuitTrianglesCount = faces.filter(f => f.type === 'sub_triangle' || f.isCircuitPolygon).length;
    const lotusPetalsCount = faces.filter(f => f.type === 'lotus_petal').length;

    const connectivityMatrix: Record<string, string[]> = {};
    nodes.forEach(n => {
      connectivityMatrix[n.id] = [...n.adjacentNodeIds];
    });

    return {
      dslId: graph.dslId,
      nodeSummary: {
        totalNodes: nodes.length,
        marmaPointsCount,
        binduCentroidCount
      },
      edgeSummary: {
        totalEdges: edges.length,
        boundaryEdgesCount
      },
      faceSummary: {
        totalFaces: faces.length,
        circuitTrianglesCount,
        lotusPetalsCount
      },
      connectivityMatrix: Object.freeze(connectivityMatrix),
      constraintBindingsCount: graph.regions.length * 2 + 5
    };
  }
}
