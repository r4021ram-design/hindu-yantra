import { GeometryDSL, CompilationResult } from '../compiler/types';
import { GeometryGraph, GraphInspectionReport } from '../graph/types';
import { SolvedGeometryModel, SolverOptions } from '../solver/types';
import { OptimizedSolvedGeometryModel, BenchmarkMetrics } from '../optimization/types';
import { PipelineResult } from './types';

import { SGOSASTParser } from '../ast/parser';
import { SGOSGeometryCompiler } from '../compiler/sgos-compiler';
import { SGOSGeometryGraphEngine } from '../graph/sgos-graph-engine';
import { SGOSComputationalSolverKernel } from '../solver/sgos-solver-kernel';
import { SGOSOptimizationEngine } from '../optimization/sgos-optimization-engine';
import { SGOSPluginManager } from './plugin-manager';
import { GOLDEN_YANTRA_DATASET } from '../data/yantras-dsl';
import { GOLDEN_YANTRA_DATASETS } from './golden-datasets';
import { SGOSPhysicsAnalogyEngine, YantraPhysicsAnalogy } from '../modules/physics-analogy-engine';
import { SGOSAvaranaCalloutEngine, AvaranaCalloutGroup } from '../modules/avarana-callout-engine';

export class SGOSSDK {
  public static readonly KERNEL_VERSION = '1.0.0-sgos.phase7';
  public static readonly IS_KERNEL_LOCKED = true;

  private pluginManager: SGOSPluginManager = new SGOSPluginManager();
  private optEngine: SGOSOptimizationEngine = new SGOSOptimizationEngine();

  public getPluginManager(): SGOSPluginManager {
    return this.pluginManager;
  }

  public getGoldenDatasets(): readonly GeometryDSL[] {
    return GOLDEN_YANTRA_DATASETS;
  }

  /**
   * Public SDK API: Validates Geometry DSL schema and expression syntax.
   */
  public validate(dsl: GeometryDSL): boolean {
    const parseRes = SGOSASTParser.parse(dsl);
    return parseRes.errors.length === 0;
  }

  /**
   * Public SDK API: Compiles Geometry DSL into Intermediate Geometry Representation (IGR).
   */
  public compile(dsl: GeometryDSL): CompilationResult {
    return SGOSGeometryCompiler.compile(dsl);
  }

  /**
   * Public SDK API: Solves a GeometryGraph topology into a SolvedGeometryModel (SGM).
   */
  public solve(graph: GeometryGraph, options?: SolverOptions): SolvedGeometryModel {
    return SGOSComputationalSolverKernel.solve(graph, options);
  }

  /**
   * Public SDK API: Optimizes Solved Geometry Model into an OSGM with spatial index bounds.
   */
  public optimize(sgm: SolvedGeometryModel): OptimizedSolvedGeometryModel {
    const { osgm } = this.optEngine.optimize(sgm);
    return osgm;
  }

  /**
   * Public SDK API: Generates developer-oriented graph inspection report.
   */
  public inspect(graph: GeometryGraph): GraphInspectionReport {
    return SGOSGeometryGraphEngine.inspectGraph(graph);
  }

  /**
   * Public SDK API: Evaluates performance benchmarks for a Solved Geometry Model.
   */
  public benchmark(sgm: SolvedGeometryModel): BenchmarkMetrics {
    const { osgm } = this.optEngine.optimize(sgm);
    return osgm.benchmarkMetrics;
  }

  /**
   * Public SDK API: Full end-to-end pipeline execution (DSL -> AST -> IGR -> Graph -> SGM -> OSGM)
   */
  public runPipeline(dsl: GeometryDSL, solverOptions?: SolverOptions): PipelineResult {
    const startComp = Date.now();
    const compileRes = this.compile(dsl);
    if (!compileRes.igr) {
      throw new Error(`Compilation failed for ${dsl.id}: ${compileRes.diagnostics.errors.map((e: any) => e.message).join('; ')}`);
    }
    const compilationTimeMs = Math.max(1, Date.now() - startComp);

    const graph = SGOSGeometryGraphEngine.buildGraph(compileRes.igr);

    const startSolve = Date.now();
    const sgm = this.solve(graph, solverOptions);
    const solverTimeMs = Math.max(1, Date.now() - startSolve);

    const startOpt = Date.now();
    const { osgm } = this.optEngine.optimize(sgm, {
      compilationTimeMs,
      constraintTimeMs: 2,
      solverTimeMs
    });

    return {
      dsl,
      igr: compileRes.igr,
      graph,
      sgm,
      osgm,
      benchmark: osgm.benchmarkMetrics
    };
  }

  /**
   * Public SDK API: Retrieves fundamental physics & quantum forces analogy breakdown for a Yantra.
   */
  public getPhysicsAnalogy(yantraId: string): YantraPhysicsAnalogy {
    return SGOSPhysicsAnalogyEngine.getAnalogy(yantraId);
  }

  /**
   * Public SDK API: Retrieves 9 Avaranas callout annotations (Sanskrit deity names, Ten Pranas, Siddhis).
   */
  public getAvaranaCalloutGroup(avaranaIndex: number): AvaranaCalloutGroup {
    return SGOSAvaranaCalloutEngine.getAvaranaGroup(avaranaIndex);
  }
}

// Global Singleton Export
export const SGOS = new SGOSSDK();
