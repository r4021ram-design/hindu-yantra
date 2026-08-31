import { describe, it, expect } from 'vitest';
import { SGOSGeometryCompiler } from '../src/compiler/sgos-compiler';
import { SGOSConstraintEngine } from '../src/constraints/sgos-constraint-engine';
import { CoincidentPointConstraint } from '../src/constraints/geometric-constraints';
import { MASTER_YANTRA_DATASET } from '../src/data/yantras-dsl';

describe('SGOS Phase 2 - Constraint Engine Subsystem', () => {

  it('should validate a compiled IGR against all canonical sacred constraints', () => {
    const sriDsl = MASTER_YANTRA_DATASET.find(y => y.id === 'sri_yantra')!;
    const compileRes = SGOSGeometryCompiler.compile(sriDsl);
    expect(compileRes.igr).not.toBeNull();

    const constraintEngine = new SGOSConstraintEngine();
    const validated = constraintEngine.validate(compileRes.igr!);

    expect(validated.isValidated).toBe(true);
    expect(validated.constraintReport.isSatisfied).toBe(true);
    expect(validated.constraintReport.totalConstraintsCount).toBeGreaterThanOrEqual(7);
    expect(validated.constraintReport.satisfiedCount).toBe(validated.constraintReport.totalConstraintsCount);
    expect(validated.constraintReport.failedCount).toBe(0);
    expect(validated.validatedTimestamp).toBeDefined();
  });

  it('should detect off-center Bindu constraint violation and return structured diagnostic fix', () => {
    const sriDsl = MASTER_YANTRA_DATASET.find(y => y.id === 'sri_yantra')!;
    const compileRes = SGOSGeometryCompiler.compile(sriDsl);
    const igr = JSON.parse(JSON.stringify(compileRes.igr!)); // Clone IGR

    // Manually mutate Bindu position (off-center)
    igr.nodes['p_bindu'].relativeX = 0.25;
    igr.nodes['p_bindu'].relativeY = 0.50;

    const constraintEngine = new SGOSConstraintEngine();
    const validated = constraintEngine.validate(igr);

    expect(validated.isValidated).toBe(false);
    expect(validated.constraintReport.failedCount).toBeGreaterThan(0);
    const diag = validated.constraintReport.diagnostics.find(d => d.code === 'SGOS_S002_BINDU_OFF_CENTER');
    expect(diag).toBeDefined();
    expect(diag?.severity).toBe('error');
    expect(diag?.affectedNodeIds).toContain('p_bindu');
    expect(diag?.suggestedFix).toContain('(0.0, 0.0)');
  });

  it('should support registering custom geometric constraints and evaluate them', () => {
    const sriDsl = MASTER_YANTRA_DATASET.find(y => y.id === 'sri_yantra')!;
    const compileRes = SGOSGeometryCompiler.compile(sriDsl);

    const constraintEngine = new SGOSConstraintEngine();
    constraintEngine.registerConstraint(
      new CoincidentPointConstraint('c_custom_coincident', ['p_bindu', 'shri_core_polygons'])
    );

    const validated = constraintEngine.validate(compileRes.igr!);
    expect(validated.constraintReport.results.some(r => r.constraintId === 'c_custom_coincident')).toBe(true);
  });

  it('should execute incremental validation on dirty nodes without re-evaluating unchanged nodes', () => {
    const sriDsl = MASTER_YANTRA_DATASET.find(y => y.id === 'sri_yantra')!;
    const compileRes = SGOSGeometryCompiler.compile(sriDsl);
    const constraintEngine = new SGOSConstraintEngine();

    // Initial full validation
    const val1 = constraintEngine.validate(compileRes.igr!);
    expect(val1.constraintReport.isIncrementallyEvaluated).toBeFalsy();

    // Incremental validation targeting dirty node 'p_bindu'
    const val2 = constraintEngine.validateIncremental(compileRes.igr!, ['p_bindu']);
    expect(val2.constraintReport.isIncrementallyEvaluated).toBe(true);
    expect(val2.isValidated).toBe(true);
  });

  it('should NOT generate rendering code (SVG, Canvas, WebGL, STL)', () => {
    const sriDsl = MASTER_YANTRA_DATASET.find(y => y.id === 'sri_yantra')!;
    const compileRes = SGOSGeometryCompiler.compile(sriDsl);
    const constraintEngine = new SGOSConstraintEngine();
    const validated = constraintEngine.validate(compileRes.igr!);

    const jsonStr = JSON.stringify(validated);
    expect(jsonStr).not.toContain('<svg');
    expect(jsonStr).not.toContain('path d=');
    expect(jsonStr).not.toContain('<canvas');
    expect(jsonStr).not.toContain('solid sri_yantra');
  });

  it('should produce deterministic evaluation reports for identical IGR inputs', () => {
    const sriDsl = MASTER_YANTRA_DATASET.find(y => y.id === 'sri_yantra')!;
    const compileRes = SGOSGeometryCompiler.compile(sriDsl);
    const constraintEngine = new SGOSConstraintEngine();

    const val1 = constraintEngine.validate(compileRes.igr!);
    const val2 = constraintEngine.validate(compileRes.igr!);

    expect(val1.constraintReport.totalConstraintsCount).toBe(val2.constraintReport.totalConstraintsCount);
    expect(val1.constraintReport.satisfiedCount).toBe(val2.constraintReport.satisfiedCount);
    expect(val1.constraintReport.results.length).toBe(val2.constraintReport.results.length);
  });
});
