import { SolvedGeometryModel } from '../solver/types';
import { OptimizationReport } from './types';
export declare class GeometryOptimizer {
    /**
     * Optimizes Solved Geometry Model (SGM).
     */
    static optimize(sgm: SolvedGeometryModel, mergeTolerance?: number): {
        optimizedSgm: SolvedGeometryModel;
        report: OptimizationReport;
    };
}
