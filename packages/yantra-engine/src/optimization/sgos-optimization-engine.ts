import { OptimizedSolvedGeometryModel } from './types';
import { SolvedGeometryModel } from '../solver/types';
import { GeometryOptimizer } from './geometry-optimizer';
import { SGOSSpatialIndexEngine } from './spatial-index';
import { SGOSBenchmarkEngine } from './benchmark-engine';
import { SGOSEventBus } from './event-bus';
import { SGOSTransactionEngine } from './transaction-engine';

export class SGOSOptimizationEngine {
  public static readonly ENGINE_VERSION = '1.0.0-sgos.phase6';
  private eventBus: SGOSEventBus = new SGOSEventBus();
  private transactionEngine: SGOSTransactionEngine = new SGOSTransactionEngine();

  public getEventBus(): SGOSEventBus {
    return this.eventBus;
  }

  public getTransactionEngine(): SGOSTransactionEngine {
    return this.transactionEngine;
  }

  /**
   * Main Pipeline Entry: Optimizes SGM into an OptimizedSolvedGeometryModel (OSGM).
   */
  public optimize(
    sgm: SolvedGeometryModel,
    timings?: { compilationTimeMs?: number; constraintTimeMs?: number; solverTimeMs?: number }
  ): {
    osgm: OptimizedSolvedGeometryModel;
    spatialIndex: SGOSSpatialIndexEngine;
  } {
    // 1. Run Geometry & Topology Optimization Pass
    const { optimizedSgm, report } = GeometryOptimizer.optimize(sgm);

    // 2. Build Spatial Index (Quadtree / BVH)
    const spatialIndex = new SGOSSpatialIndexEngine(optimizedSgm);
    const bounds = spatialIndex.getBounds();

    // 3. Compute Benchmark Metrics
    const benchmark = SGOSBenchmarkEngine.measure({
      compilationTimeMs: timings?.compilationTimeMs || 5,
      constraintValidationTimeMs: timings?.constraintTimeMs || 2,
      solverTimeMs: timings?.solverTimeMs || 8,
      optimizationTimeMs: report.optimizationTimeMs,
      sgm: optimizedSgm
    });

    // 4. Save Transaction Snapshot
    this.transactionEngine.snapshot(`Optimized ${sgm.dslId}`, optimizedSgm);

    // 5. Emit Events
    this.eventBus.emit('GeometrySolved', { dslId: sgm.dslId });
    this.eventBus.emit('OptimizationCompleted', { report });
    this.eventBus.emit('BenchmarkCompleted', { metrics: benchmark });

    const deterministicHash = this.computeHash(JSON.stringify({
      dslId: sgm.dslId,
      nodes: report.optimizedNodeCount,
      edges: report.optimizedEdgeCount,
      faces: report.optimizedFaceCount,
      eliminated: report.duplicateVerticesEliminated
    }));


    const osgm: OptimizedSolvedGeometryModel = {
      sgm: optimizedSgm,
      optimizationReport: report,
      benchmarkMetrics: benchmark,
      spatialBounds: bounds,
      isOptimized: true,
      provenance: {
        optimizerVersion: SGOSOptimizationEngine.ENGINE_VERSION,
        deterministicHash
      }
    };

    return {
      osgm,
      spatialIndex
    };
  }

  private computeHash(str: string): string {
    let hash = 5381;
    for (let i = 0; i < str.length; i++) {
      hash = (hash * 33) ^ str.charCodeAt(i);
    }
    return `hash_osgm_${(hash >>> 0).toString(16)}`;
  }
}
