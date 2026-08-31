import { describe, it, expect } from 'vitest';
import { GeometryCompiler, MASTER_YANTRA_DATASET, YantraModeRenderer } from '../src';

describe('Shri Yantra 4 Distinct Rendering Modes & Split-Screen Comparison Audit', () => {
  it('renders Mode 1: Construction (helper circles, helper lines, Apollonius circle Xi, points)', () => {
    const shriDsl = MASTER_YANTRA_DATASET[0];
    const compiled = GeometryCompiler.compile(shriDsl);
    const svg = YantraModeRenderer.renderMode(compiled, 'construction');

    expect(svg).toContain('MODE 1: CONSTRUCTION GUIDES');
    expect(svg).toContain('y = S (0.9330)');
    expect(svg).toContain('y = R (0.8090)');
    expect(svg).toContain('y = P (0.1910)');
    expect(svg).toContain('y = Q (0.5000)');
    expect(svg).toContain('Pt1');
    expect(svg).toContain('Pt4');
  });

  it('renders Mode 2: Primary Triangles (only t1..t9 in distinct colors, no circles, no lotus, no bhupura)', () => {
    const shriDsl = MASTER_YANTRA_DATASET[0];
    const compiled = GeometryCompiler.compile(shriDsl);
    const svg = YantraModeRenderer.renderMode(compiled, 'primary_triangles');

    expect(svg).toContain('MODE 2: PRIMARY TRIANGLES (t1..t9)');
    expect(svg).toContain('stroke="#FF0000"'); // t1 Red
    expect(svg).toContain('stroke="#008000"'); // t3 Green
    expect(svg).not.toContain('lotus');
    expect(svg).not.toContain('bhupura');
  });

  it('renders Mode 3: Final Canonical Yantra (clean black line geometry matching Figure 1)', () => {
    const shriDsl = MASTER_YANTRA_DATASET[0];
    const compiled = GeometryCompiler.compile(shriDsl);
    const svg = YantraModeRenderer.renderMode(compiled, 'final_canonical');

    expect(svg).toContain('MODE 3: FINAL CANONICAL YANTRA (Figure 1)');
    expect(svg).toContain('stroke="#000000"');
    expect(svg).toContain('id="mode3_t1"');
    expect(svg).toContain('id="mode3_t9"');
  });

  it('renders Mode 4: Topology (all 43 detected face polygons labeled F1..F43 and total face count)', () => {
    const shriDsl = MASTER_YANTRA_DATASET[0];
    const compiled = GeometryCompiler.compile(shriDsl);
    const svg = YantraModeRenderer.renderMode(compiled, 'topology');

    expect(svg).toContain('MODE 4: TOPOLOGY ENGINE — TOTAL FACES: 43');
    expect(svg).toContain('F1</text>');
    expect(svg).toContain('F43</text>');
  });

  it('generates Split-Screen Comparison (Left: Figure 11 Reference, Right: Engine Output, Difference Heatmap & Error Overlay)', () => {
    const shriDsl = MASTER_YANTRA_DATASET[0];
    const compiled = GeometryCompiler.compile(shriDsl);
    const split = YantraModeRenderer.generateSplitScreenComparison(compiled);

    expect(split.leftReferenceSVG).toBeDefined();
    expect(split.rightEngineSVG).toBeDefined();
    expect(split.combinedSplitScreenSVG).toContain('LEFT: CHIODO FIGURE 11 REFERENCE');
    expect(split.combinedSplitScreenSVG).toContain('RIGHT: GENERATED ENGINE OUTPUT');
    expect(split.combinedSplitScreenSVG).toContain('GEOMETRIC DEVIATION HEATMAP & OVERLAY METRICS');
    expect(split.metrics.rmsError).toBeLessThan(1e-5);
    expect(split.metrics.maxVertexDeviation).toBeLessThan(1e-5);
  });
});
