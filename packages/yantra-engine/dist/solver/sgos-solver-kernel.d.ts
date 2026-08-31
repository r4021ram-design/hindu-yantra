import { SolvedGeometryModel, SolverOptions } from './types';
import { GeometryGraph } from '../graph/types';
export declare class SGOSComputationalSolverKernel {
    static readonly SOLVER_VERSION = "1.0.0-sgos.phase5";
    static readonly ALGORITHM_VERSION = "2.1.0";
    /**
     * Main Execution Pipeline: GeometryGraph -> Solved Geometry Model (SGM)
     * Pure TypeScript, zero rendering code, zero mesh generation.
     */
    static solve(graph: GeometryGraph, options?: SolverOptions): SolvedGeometryModel;
    private static computeHash;
}
