import { OptimizedSolvedGeometryModel } from './types';
import { SolvedGeometryModel } from '../solver/types';
import { SGOSSpatialIndexEngine } from './spatial-index';
import { SGOSEventBus } from './event-bus';
import { SGOSTransactionEngine } from './transaction-engine';
export declare class SGOSOptimizationEngine {
    static readonly ENGINE_VERSION = "1.0.0-sgos.phase6";
    private eventBus;
    private transactionEngine;
    getEventBus(): SGOSEventBus;
    getTransactionEngine(): SGOSTransactionEngine;
    /**
     * Main Pipeline Entry: Optimizes SGM into an OptimizedSolvedGeometryModel (OSGM).
     */
    optimize(sgm: SolvedGeometryModel, timings?: {
        compilationTimeMs?: number;
        constraintTimeMs?: number;
        solverTimeMs?: number;
    }): {
        osgm: OptimizedSolvedGeometryModel;
        spatialIndex: SGOSSpatialIndexEngine;
    };
    private computeHash;
}
