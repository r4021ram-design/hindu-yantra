import { GeometryDSL, CompilationResult } from '../compiler/types';
import { GeometryGraph, GraphInspectionReport } from '../graph/types';
import { SolvedGeometryModel, SolverOptions } from '../solver/types';
import { OptimizedSolvedGeometryModel, BenchmarkMetrics } from '../optimization/types';
import { PipelineResult } from './types';
import { SGOSPluginManager } from './plugin-manager';
import { YantraPhysicsAnalogy } from '../modules/physics-analogy-engine';
import { AvaranaCalloutGroup } from '../modules/avarana-callout-engine';
export declare class SGOSSDK {
    static readonly KERNEL_VERSION = "1.0.0-sgos.phase7";
    static readonly IS_KERNEL_LOCKED = true;
    private pluginManager;
    private optEngine;
    getPluginManager(): SGOSPluginManager;
    getGoldenDatasets(): readonly GeometryDSL[];
    /**
     * Public SDK API: Validates Geometry DSL schema and expression syntax.
     */
    validate(dsl: GeometryDSL): boolean;
    /**
     * Public SDK API: Compiles Geometry DSL into Intermediate Geometry Representation (IGR).
     */
    compile(dsl: GeometryDSL): CompilationResult;
    /**
     * Public SDK API: Solves a GeometryGraph topology into a SolvedGeometryModel (SGM).
     */
    solve(graph: GeometryGraph, options?: SolverOptions): SolvedGeometryModel;
    /**
     * Public SDK API: Optimizes Solved Geometry Model into an OSGM with spatial index bounds.
     */
    optimize(sgm: SolvedGeometryModel): OptimizedSolvedGeometryModel;
    /**
     * Public SDK API: Generates developer-oriented graph inspection report.
     */
    inspect(graph: GeometryGraph): GraphInspectionReport;
    /**
     * Public SDK API: Evaluates performance benchmarks for a Solved Geometry Model.
     */
    benchmark(sgm: SolvedGeometryModel): BenchmarkMetrics;
    /**
     * Public SDK API: Full end-to-end pipeline execution (DSL -> AST -> IGR -> Graph -> SGM -> OSGM)
     */
    runPipeline(dsl: GeometryDSL, solverOptions?: SolverOptions): PipelineResult;
    /**
     * Public SDK API: Retrieves fundamental physics & quantum forces analogy breakdown for a Yantra.
     */
    getPhysicsAnalogy(yantraId: string): YantraPhysicsAnalogy;
    /**
     * Public SDK API: Retrieves 9 Avaranas callout annotations (Sanskrit deity names, Ten Pranas, Siddhis).
     */
    getAvaranaCalloutGroup(avaranaIndex: number): AvaranaCalloutGroup;
}
export declare const SGOS: SGOSSDK;
