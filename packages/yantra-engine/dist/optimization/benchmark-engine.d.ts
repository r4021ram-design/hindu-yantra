import { BenchmarkMetrics } from './types';
import { SolvedGeometryModel } from '../solver/types';
export declare class SGOSBenchmarkEngine {
    /**
     * Evaluates pipeline execution timings and graph complexity metrics.
     */
    static measure(params: {
        compilationTimeMs: number;
        constraintValidationTimeMs: number;
        solverTimeMs: number;
        optimizationTimeMs: number;
        sgm: SolvedGeometryModel;
    }): BenchmarkMetrics;
}
