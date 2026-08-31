import { SolvedPoint2D, IterationStats, NumericalStabilityReport } from './types';
export declare class NumericalSolver {
    /**
     * Refines solved 2D node coordinates using Newton-Raphson gradient minimization
     */
    static refineNodePositions(initialCoords: Record<string, SolvedPoint2D>, tolerance?: number, maxIterations?: number): {
        refinedCoords: Record<string, SolvedPoint2D>;
        stats: IterationStats;
        stability: NumericalStabilityReport;
    };
}
