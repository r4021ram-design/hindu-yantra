import { describe, it, expect } from 'vitest';
import { SGOSGeometryCompiler } from '../src/compiler/sgos-compiler';
import { SGOSGeometryGraphEngine } from '../src/graph/sgos-graph-engine';
import { SGOSComputationalSolverKernel } from '../src/solver/sgos-solver-kernel';
import { SGOSOptimizationEngine } from '../src/optimization/sgos-optimization-engine';
import { GeometryOptimizer } from '../src/optimization/geometry-optimizer';
import { MASTER_YANTRA_DATASET } from '../src/data/yantras-dsl';

describe('SGOS Phase 6 - Geometry Optimization & Performance Engine Subsystem', () => {

  it('should optimize Solved Geometry Model (SGM) and produce an OSGM with optimization reports', () => {
    const sriDsl = MASTER_YANTRA_DATASET.find(y => y.id === 'sri_yantra')!;
    const compileRes = SGOSGeometryCompiler.compile(sriDsl);
    const graph = SGOSGeometryGraphEngine.buildGraph(compileRes.igr!);
    const sgm = SGOSComputationalSolverKernel.solve(graph);

    const optEngine = new SGOSOptimizationEngine();
    const { osgm, spatialIndex } = optEngine.optimize(sgm);

    expect(osgm.isOptimized).toBe(true);
    expect(osgm.optimizationReport.originalNodeCount).toBeGreaterThan(0);
    expect(osgm.benchmarkMetrics.totalPipelineTimeMs).toBeGreaterThanOrEqual(0);
    expect(osgm.benchmarkMetrics.estimatedMemoryBytes).toBeGreaterThan(1000);
    expect(spatialIndex.getBounds()).toBeDefined();
  });

  it('should execute Spatial Index queries: nearestNeighbor, regionLookup, and faceLookup', () => {
    const sriDsl = MASTER_YANTRA_DATASET.find(y => y.id === 'sri_yantra')!;
    const compileRes = SGOSGeometryCompiler.compile(sriDsl);
    const graph = SGOSGeometryGraphEngine.buildGraph(compileRes.igr!);
    const sgm = SGOSComputationalSolverKernel.solve(graph);

    const optEngine = new SGOSOptimizationEngine();
    const { spatialIndex } = optEngine.optimize(sgm);

    // 1. Nearest Neighbor Query
    const nearest = spatialIndex.nearestNeighbor({ x: 500, y: 500 });
    expect(nearest).not.toBeNull();
    expect(nearest?.id).toBe('p_bindu');
    expect(nearest?.distance).toBeCloseTo(0, 1);

    // 2. Region Lookup Query
    const regionResult = spatialIndex.regionLookup({ minX: 400, minY: 400, maxX: 600, maxY: 600 });
    expect(regionResult.facesInBounds.length).toBeGreaterThan(0);
  });

  it('should handle SGOSEventBus subscriptions and emit events upon optimization', () => {
    const sriDsl = MASTER_YANTRA_DATASET.find(y => y.id === 'sri_yantra')!;
    const compileRes = SGOSGeometryCompiler.compile(sriDsl);
    const graph = SGOSGeometryGraphEngine.buildGraph(compileRes.igr!);
    const sgm = SGOSComputationalSolverKernel.solve(graph);

    const optEngine = new SGOSOptimizationEngine();
    const bus = optEngine.getEventBus();

    let solvedEventFired = false;
    let optEventFired = false;

    bus.subscribe('GeometrySolved', () => {
      solvedEventFired = true;
    });
    bus.subscribe('OptimizationCompleted', () => {
      optEventFired = true;
    });

    optEngine.optimize(sgm);

    expect(solvedEventFired).toBe(true);
    expect(optEventFired).toBe(true);
  });

  it('should execute transaction snapshots, undo, redo, and branching in SGOSTransactionEngine', () => {
    const sriDsl = MASTER_YANTRA_DATASET.find(y => y.id === 'sri_yantra')!;
    const compileRes = SGOSGeometryCompiler.compile(sriDsl);
    const graph = SGOSGeometryGraphEngine.buildGraph(compileRes.igr!);
    const sgm = SGOSComputationalSolverKernel.solve(graph);

    const optEngine = new SGOSOptimizationEngine();
    const tx = optEngine.getTransactionEngine();

    const snap1 = tx.snapshot('Initial Snapshot', sgm);
    expect(tx.getCurrentIndex()).toBe(0);

    const snap2 = tx.snapshot('Second Snapshot', sgm);
    expect(tx.getCurrentIndex()).toBe(1);

    const undone = tx.undo();
    expect(undone?.snapshotId).toBe(snap1.snapshotId);
    expect(tx.getCurrentIndex()).toBe(0);

    const redone = tx.redo();
    expect(redone?.snapshotId).toBe(snap2.snapshotId);
    expect(tx.getCurrentIndex()).toBe(1);

    tx.branch('feature_branch');
    const merged = tx.merge('feature_branch');
    expect(merged).not.toBeNull();
  });

  it('should NOT generate rendering or mesh graphics code in the OSGM output', () => {
    const sriDsl = MASTER_YANTRA_DATASET.find(y => y.id === 'sri_yantra')!;
    const compileRes = SGOSGeometryCompiler.compile(sriDsl);
    const graph = SGOSGeometryGraphEngine.buildGraph(compileRes.igr!);
    const sgm = SGOSComputationalSolverKernel.solve(graph);

    const optEngine = new SGOSOptimizationEngine();
    const { osgm } = optEngine.optimize(sgm);

    const jsonStr = JSON.stringify(osgm);
    expect(jsonStr).not.toContain('<svg');
    expect(jsonStr).not.toContain('<path');
    expect(jsonStr).not.toContain('<canvas');
    expect(jsonStr).not.toContain('solid sri_yantra');
  });
});
