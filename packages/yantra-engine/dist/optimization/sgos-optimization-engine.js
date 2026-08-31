"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SGOSOptimizationEngine = void 0;
const geometry_optimizer_1 = require("./geometry-optimizer");
const spatial_index_1 = require("./spatial-index");
const benchmark_engine_1 = require("./benchmark-engine");
const event_bus_1 = require("./event-bus");
const transaction_engine_1 = require("./transaction-engine");
class SGOSOptimizationEngine {
    static ENGINE_VERSION = '1.0.0-sgos.phase6';
    eventBus = new event_bus_1.SGOSEventBus();
    transactionEngine = new transaction_engine_1.SGOSTransactionEngine();
    getEventBus() {
        return this.eventBus;
    }
    getTransactionEngine() {
        return this.transactionEngine;
    }
    /**
     * Main Pipeline Entry: Optimizes SGM into an OptimizedSolvedGeometryModel (OSGM).
     */
    optimize(sgm, timings) {
        // 1. Run Geometry & Topology Optimization Pass
        const { optimizedSgm, report } = geometry_optimizer_1.GeometryOptimizer.optimize(sgm);
        // 2. Build Spatial Index (Quadtree / BVH)
        const spatialIndex = new spatial_index_1.SGOSSpatialIndexEngine(optimizedSgm);
        const bounds = spatialIndex.getBounds();
        // 3. Compute Benchmark Metrics
        const benchmark = benchmark_engine_1.SGOSBenchmarkEngine.measure({
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
        const osgm = {
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
    computeHash(str) {
        let hash = 5381;
        for (let i = 0; i < str.length; i++) {
            hash = (hash * 33) ^ str.charCodeAt(i);
        }
        return `hash_osgm_${(hash >>> 0).toString(16)}`;
    }
}
exports.SGOSOptimizationEngine = SGOSOptimizationEngine;
