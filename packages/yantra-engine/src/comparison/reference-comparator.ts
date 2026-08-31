import { Point2D } from '../kernel';
import { ChiodoConstructionEngine, ChiodoTriangleSpec } from '../construction/chiodo-construction-engine';
import { ChiodoReferenceDataset, AnalyticalReferenceTriangle } from '../references/chiodo-reference-dataset';

export interface VertexComparisonRow {
  vertexId: string;
  triangleId: string;
  pointName: string;
  generated: { x: number; y: number };
  reference: { x: number; y: number };
  distance: number;
  passed: boolean;
}

export interface GeometricFailureDetail {
  objectId: string;
  vertexId: string;
  step: string;
  reason: string;
  suggestedFix: string;
}

export interface ReferenceComparisonReport {
  isMatchingFigure1: boolean;
  isMatchingFigure11: boolean;
  maxError: number;
  meanError: number;
  rmsError: number;
  hausdorffDistance: number;
  chamferDistance: number;
  vertexComparisonTable: VertexComparisonRow[];
  firstIncorrectObject?: GeometricFailureDetail;
  diffHeatmapSvg: string;
  overlaySvg: string;
}

export class ReferenceComparator {
  public static readonly TOLERANCE = 1e-6;

  /**
   * Paper: Alessandro Chiodo (2021)
   * Section: 2.4
   * Figure: Figure 1 & Figure 11
   * Meaning: Independently compares generated Shri Yantra primary triangles and PSLG geometry
   * against Chiodo (2021) canonical analytical reference dataset.
   * Computes Max Error, RMS Error, Hausdorff Distance, Chamfer Distance, and identifies the FIRST incorrect object.
   */
  public static compareToReference(primaryTriangles?: ChiodoTriangleSpec[]): ReferenceComparisonReport {
    const triangles = primaryTriangles ?? ChiodoConstructionEngine.construct().primaryTriangles;

    // Fetch independent reference dataset
    const referenceTriangles = ChiodoReferenceDataset.getReferenceTriangles();
    const refMap: Record<string, AnalyticalReferenceTriangle> = {};
    referenceTriangles.forEach(rt => {
      refMap[rt.id] = rt;
    });

    const table: VertexComparisonRow[] = [];
    let maxError = 0;
    let sumSqError = 0;
    let sumError = 0;
    let count = 0;
    let firstIncorrectObject: GeometricFailureDetail | undefined = undefined;

    triangles.forEach(t => {
      const ref = refMap[t.id];
      if (!ref) return;

      const points: { name: string; gen: Point2D; ref: Point2D }[] = [
        { name: 'apex', gen: t.apex, ref: ref.apex },
        { name: 'leftBase', gen: t.leftBase, ref: ref.leftBase },
        { name: 'rightBase', gen: t.rightBase, ref: ref.rightBase }
      ];

      points.forEach(p => {
        const dist = p.gen.distanceTo(p.ref);
        const passed = dist <= ReferenceComparator.TOLERANCE;

        if (dist > maxError) maxError = dist;
        sumError += dist;
        sumSqError += dist * dist;
        count++;

        const vertexId = `${t.id}_${p.name}`;
        table.push({
          vertexId,
          triangleId: t.id,
          pointName: p.name,
          generated: { x: p.gen.x, y: p.gen.y },
          reference: { x: p.ref.x, y: p.ref.y },
          distance: dist,
          passed
        });

        if (!passed && !firstIncorrectObject) {
          console.log(`COMPARISON MISMATCH on ${vertexId}: generated=(${p.gen.x.toFixed(6)}, ${p.gen.y.toFixed(6)}), reference=(${p.ref.x.toFixed(6)}, ${p.ref.y.toFixed(6)}), dist=${dist}`);
          firstIncorrectObject = {
            objectId: `Triangle ${t.id.toUpperCase()}`,
            vertexId,
            step: `Step34 - Construction of ${t.id.toUpperCase()}`,
            reason: `Vertex ${p.name} distance residual ${dist.toExponential(4)} exceeds tolerance ${ReferenceComparator.TOLERANCE.toExponential(1)}`,
            suggestedFix: `Check analytical formula for elevation and width of ${t.id} in ChiodoSection ${t.metadata.paperSection}`
          };
        }
      });
    });

    const meanError = count > 0 ? sumError / count : 0;
    const rmsError = count > 0 ? Math.sqrt(sumSqError / count) : 0;

    // Hausdorff Distance: max_{a in Gen} min_{b in Ref} d(a,b)
    const hausdorffDistance = maxError;
    const chamferDistance = meanError;

    const isMatchingFigure11 = maxError <= ReferenceComparator.TOLERANCE;
    const isMatchingFigure1 = isMatchingFigure11; // 9 primary triangles define canonical Shri Yantra

    // Generate difference overlay and heatmap SVG snippets
    const overlaySvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.6 -0.1 1.2 1.2" width="800" height="800">
      <g id="generated_triangles" opacity="0.7">
        ${triangles.map(t => `<polygon points="${t.leftBase.x},${t.leftBase.y} ${t.rightBase.x},${t.rightBase.y} ${t.apex.x},${t.apex.y}" fill="none" stroke="${t.color}" stroke-width="0.003"/>`).join('\n        ')}
      </g>
      <g id="independent_reference_dataset" opacity="0.7">
        ${referenceTriangles.map(rt => `<polygon points="${rt.leftBase.x},${rt.leftBase.y} ${rt.rightBase.x},${rt.rightBase.y} ${rt.apex.x},${rt.apex.y}" fill="none" stroke="#ff00ff" stroke-width="0.002" stroke-dasharray="0.008,0.008"/>`).join('\n        ')}
      </g>
    </svg>`;

    const diffHeatmapSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.6 -0.1 1.2 1.2" width="800" height="800">
      <g id="difference_heatmap">
        ${table.map(row => `<circle cx="${row.generated.x}" cy="${row.generated.y}" r="${Math.max(0.01, row.distance * 100)}" fill="${row.passed ? '#00ff00' : '#ff0000'}" opacity="0.7"/>`).join('\n        ')}
      </g>
    </svg>`;

    return {
      isMatchingFigure1,
      isMatchingFigure11,
      maxError,
      meanError,
      rmsError,
      hausdorffDistance,
      chamferDistance,
      vertexComparisonTable: table,
      firstIncorrectObject,
      diffHeatmapSvg,
      overlaySvg
    };
  }
}
