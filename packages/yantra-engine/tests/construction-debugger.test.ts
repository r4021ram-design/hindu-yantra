import { describe, it, expect } from 'vitest';
import { ConstructionDebugger } from '../src/construction/construction-debugger';

describe('Construction Debugger Engine (Step01 to Step80 & Divergence Audit)', () => {
  it('initializes and steps forward/backward through all 80 construction steps', () => {
    const dbg = new ConstructionDebugger();
    expect(dbg.getTotalSteps()).toBe(80);

    // Step 01 (Reference Circumcircle C0)
    const step1 = dbg.getStep(1);
    expect(step1.stepId).toBe('Step01');
    expect(step1.name).toContain('Circumcircle C0');
    expect(step1.equation).toBe('x^2 + (y - 0.5)^2 = 0.25');

    // Step 02 (Parameter S)
    const step2 = dbg.getStep(2);
    expect(step2.stepId).toBe('Step02');
    expect(step2.equation).toContain('0.933012701892');

    // Step 03 (Parameter R)
    const step3 = dbg.getStep(3);
    expect(step3.stepId).toBe('Step03');
    expect(step3.equation).toContain('0.809016994375');

    // Step 80 (Final Step)
    const step80 = dbg.getStep(80);
    expect(step80.stepId).toBe('Step80');
    expect(step80.dependencyNodes).toContain('Step79');
  });

  it('renders step SVG with newly created points, lines, theorem, and equation HUD', () => {
    const dbg = new ConstructionDebugger();
    const svg = dbg.renderStepSVG(3, { showDependencies: true });

    expect(svg).toContain('<svg');
    expect(svg).toContain('Step03: Base Height R Derivation (t3 Base)');
    expect(svg).toContain('Theorem: Golden Ratio cos(36°) Inscribed Regular Decagon on C0');
    expect(svg).toContain('Equation: R = (1 + sqrt(5)) / 4 = cos(36°) ≈ 0.809016994375');
    expect(svg).toContain('circle cx=');
  });

  it('supports interactive toggling of individual triangles (t1 only, t2 only, ..., t9 only)', () => {
    const dbg = new ConstructionDebugger();

    // Render t1 only
    const svgT1 = dbg.renderStepSVG(80, { visibleTriangles: new Set(['t1']) });
    expect(svgT1).toContain('id="step_Step80_t1"');
    expect(svgT1).not.toContain('id="step_Step80_t2"');

    // Render t3 only
    const svgT3 = dbg.renderStepSVG(80, { visibleTriangles: new Set(['t3']) });
    expect(svgT3).toContain('id="step_Step80_t3"');
    expect(svgT3).not.toContain('id="step_Step80_t1"');
  });

  it('displays exact coordinates of every apex and base vertex for t1..t9', () => {
    const dbg = new ConstructionDebugger();
    const coords = dbg.getTriangleCoordinates();

    expect(coords.length).toBe(9);
    coords.forEach(t => {
      expect(t.leftBase).toBeDefined();
      expect(t.rightBase).toBeDefined();
      expect(t.apex).toBeDefined();
      expect(t.baseHeightY).toBeDefined();
      expect(t.baseWidth).toBeGreaterThan(0);
    });

    // Check t1 specs
    const t1 = coords.find(c => c.id === 't1');
    expect(t1?.baseHeightY).toBeCloseTo(0.933012701892, 6);
    expect(t1?.baseWidth).toBeCloseTo(0.500000, 6);

    // Check t3 specs
    const t3 = coords.find(c => c.id === 't3');
    expect(t3?.baseHeightY).toBeCloseTo(0.809016994375, 6);
    expect(t3?.baseWidth).toBeCloseTo(0.786151, 6);
  });

  it('runs divergence detection to verify exact geometric alignment against Chiodo reference vertices', () => {
    const dbg = new ConstructionDebugger();

    const referenceVertices = [
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

    const result = dbg.findFirstDivergenceStep(referenceVertices);
    expect(result.firstDivergenceStep).toBeNull(); // 0 divergence
    expect(result.maxDeviation).toBeLessThan(1e-4);
  });
});
