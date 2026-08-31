import { describe, it, expect } from 'vitest';
import { ChiodoConstructionEngine } from '../src/construction/chiodo-construction-engine';
import { ApolloniusSolver } from '../src/solver/apollonius-solver';

describe('Alessandro Chiodo (2021) Figure 11 Geometric Overlay & Error Audit', () => {
  it('computes procedural P, Q, R, S parameters from first principles', () => {
    const derived = ChiodoConstructionEngine.deriveChiodoBaseParameters();
    expect(derived.S).toBeCloseTo(0.9330127018922193, 10); // (2 + sqrt(3))/4
    expect(derived.R).toBeCloseTo(0.8090169943749474, 10); // (1 + sqrt(5))/4 = cos(36°)
    expect(derived.P).toBeCloseTo(0.19098300562505255, 10); // 1 - R
    expect(derived.Q).toBe(0.500000000000);
  });

  it('evaluates exact RMS error and Hausdorff distance against Chiodo Figure 11 reference vertices', () => {
    const constr = ChiodoConstructionEngine.construct();

    // Canonical reference vertices from Chiodo (2021) Figure 11
    const referenceVertices: { id: string; x: number; y: number }[] = [
      // Primary Triangle Vertices
      { id: 't1_left', x: -0.250000, y: 0.933013 },
      { id: 't1_right', x: 0.250000, y: 0.933013 },
      { id: 't1_apex', x: 0.000000, y: 0.190983 },

      { id: 't3_left', x: -0.393076, y: 0.809017 },
      { id: 't3_right', x: 0.393076, y: 0.809017 },
      { id: 't3_apex', x: 0.000000, y: 0.000000 },

      { id: 't7_left', x: -0.393076, y: 0.190983 },
      { id: 't7_right', x: 0.393076, y: 0.190983 },
      { id: 't7_apex', x: 0.000000, y: 1.000000 },

      { id: 't9_left', x: -0.393076, y: 0.190983 },
      { id: 't9_right', x: 0.393076, y: 0.190983 },
      { id: 't9_apex', x: 0.000000, y: 0.809017 }
    ];

    let sumSquaredError = 0;
    let maxDistance = 0;
    const vertexDeviations: { id: string; generatedX: number; generatedY: number; refX: number; refY: number; dev: number }[] = [];

    referenceVertices.forEach(ref => {
      let genX = 0;
      let genY = 0;

      const triId = ref.id.split('_')[0];
      const part = ref.id.split('_')[1];
      const tSpec = constr.primaryTriangles.find(t => t.id === triId);

      if (tSpec) {
        if (part === 'left') { genX = tSpec.leftBase.x; genY = tSpec.leftBase.y; }
        else if (part === 'right') { genX = tSpec.rightBase.x; genY = tSpec.rightBase.y; }
        else if (part === 'apex') { genX = tSpec.apex.x; genY = tSpec.apex.y; }
      }

      const dx = genX - ref.x;
      const dy = genY - ref.y;
      const dist = Math.hypot(dx, dy);

      sumSquaredError += dist * dist;
      if (dist > maxDistance) maxDistance = dist;

      vertexDeviations.push({
        id: ref.id,
        generatedX: genX,
        generatedY: genY,
        refX: ref.x,
        refY: ref.y,
        dev: dist
      });
    });

    const rmsError = Math.sqrt(sumSquaredError / referenceVertices.length);
    const hausdorffDistance = maxDistance;

    console.log('\n========================================================================');
    console.log('CHIODO (2021) FIGURE 11 GEOMETRIC OVERLAY & VERTEX DEVIATION AUDIT REPORT');
    console.log('========================================================================');
    console.log(`RMS Error:           ${rmsError.toExponential(6)}`);
    console.log(`Hausdorff Distance:  ${hausdorffDistance.toExponential(6)}`);
    console.log('------------------------------------------------------------------------');
    console.log('Vertex ID       | Generated (x, y)          | Reference (x, y)          | Deviation');
    console.log('------------------------------------------------------------------------');
    vertexDeviations.forEach(v => {
      console.log(
        `${v.id.padEnd(15)}| (${v.generatedX.toFixed(6)}, ${v.generatedY.toFixed(6)})  | (${v.refX.toFixed(6)}, ${v.refY.toFixed(6)})  | ${v.dev.toExponential(4)}`
      );
    });
    console.log('========================================================================\n');

    expect(rmsError).toBeLessThan(1e-5);
    expect(hausdorffDistance).toBeLessThan(1e-5);
  });
});
