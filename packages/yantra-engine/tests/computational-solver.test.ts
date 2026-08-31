import { describe, it, expect } from 'vitest';
import { AnalyticalSolver } from '../src/solver/analytical-solver';
import { NumericalSolver } from '../src/solver/numerical-solver';
import { TopologySolver } from '../src/solver/topology-solver';
import { SGOSComputationalSolverKernel } from '../src/solver/sgos-solver-kernel';
import { SGOSGeometryCompiler } from '../src/compiler/sgos-compiler';
import { SGOSGeometryGraphEngine } from '../src/graph/sgos-graph-engine';
import { MASTER_YANTRA_DATASET } from '../src/data/yantras-dsl';

describe('SGOS Phase 5 - Computational Solver Kernel Subsystem', () => {

  it('should compute exact closed-form analytical solutions for line and circle intersections', () => {
    // 1. Line-Line Intersection
    const pt = AnalyticalSolver.intersectLines({ x: 0, y: 0 }, { x: 10, y: 10 }, { x: 0, y: 10 }, { x: 10, y: 0 });
    expect(pt).not.toBeNull();
    expect(pt?.x).toBeCloseTo(5.0);
    expect(pt?.y).toBeCloseTo(5.0);

    // 2. Line-Circle Intersection
    const lCircle = AnalyticalSolver.intersectLineCircle({ x: -10, y: 0 }, { x: 10, y: 0 }, { x: 0, y: 0 }, 5);
    expect(lCircle.length).toBe(2);

    // 3. Circle-Circle Intersection
    const cCircle = AnalyticalSolver.intersectCircles({ x: 0, y: 0 }, 5, { x: 6, y: 0 }, 5);
    expect(cCircle.length).toBe(2);
    expect(cCircle[0].x).toBeCloseTo(3.0);
  });

  it('should run Newton-Raphson numerical refinement and converge within tolerance (1e-10)', () => {
    const coords = {
      p1: { x: 10, y: 20 },
      p2: { x: 50, y: 100 }
    };
    const refinement = NumericalSolver.refineNodePositions(coords, 1e-10, 50);

    expect(refinement.stats.converged).toBe(true);
    expect(refinement.stats.finalResidualError).toBeLessThanOrEqual(1e-10);
    expect(refinement.stability.isStable).toBe(true);
  });

  it('should enforce Counter-Clockwise (CCW) winding order on solved polygon faces', () => {
    const cwTriangle = [{ x: 0, y: 0 }, { x: 0, y: 10 }, { x: 10, y: 0 }];
    const initialWinding = TopologySolver.getWindingOrder(cwTriangle);
    expect(initialWinding).toBe('CW');

    const ccwTriangle = TopologySolver.enforceCCW(cwTriangle);
    const updatedWinding = TopologySolver.getWindingOrder(ccwTriangle);
    expect(updatedWinding).toBe('CCW');
  });

  it('should transform a Geometry Graph into a Solved Geometry Model (SGM)', () => {
    const sriDsl = MASTER_YANTRA_DATASET.find(y => y.id === 'sri_yantra')!;
    const compileRes = SGOSGeometryCompiler.compile(sriDsl);
    const graph = SGOSGeometryGraphEngine.buildGraph(compileRes.igr!);

    const sgm = SGOSComputationalSolverKernel.solve(graph);

    expect(sgm.dslId).toBe('sri_yantra');
    expect(sgm.viewportSize).toBe(1000);
    expect(Object.keys(sgm.solvedCoordinates).length).toBeGreaterThan(40);
    expect(Object.keys(sgm.solvedFaces).length).toBeGreaterThanOrEqual(43);
    expect(sgm.solverReport.isSolved).toBe(true);
    expect(sgm.provenance.deterministicHash).toContain('hash_sgm_');
  });

  it('should NOT generate any rendering or mesh code (SVG, Canvas, STL) in the SGM', () => {
    const sriDsl = MASTER_YANTRA_DATASET.find(y => y.id === 'sri_yantra')!;
    const compileRes = SGOSGeometryCompiler.compile(sriDsl);
    const graph = SGOSGeometryGraphEngine.buildGraph(compileRes.igr!);
    const sgm = SGOSComputationalSolverKernel.solve(graph);

    const jsonStr = JSON.stringify(sgm);
    expect(jsonStr).not.toContain('<svg');
    expect(jsonStr).not.toContain('<path');
    expect(jsonStr).not.toContain('<canvas');
    expect(jsonStr).not.toContain('solid sri_yantra');
  });

  it('should generate deterministic SGM provenance hashes for identical graphs', () => {
    const sriDsl = MASTER_YANTRA_DATASET.find(y => y.id === 'sri_yantra')!;
    const compileRes = SGOSGeometryCompiler.compile(sriDsl);
    const graph = SGOSGeometryGraphEngine.buildGraph(compileRes.igr!);

    const sgm1 = SGOSComputationalSolverKernel.solve(graph);
    const sgm2 = SGOSComputationalSolverKernel.solve(graph);

    expect(sgm1.provenance.deterministicHash).toBe(sgm2.provenance.deterministicHash);
  });
});
