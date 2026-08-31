"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SGOS = exports.SGOSSDK = void 0;
const parser_1 = require("../ast/parser");
const sgos_compiler_1 = require("../compiler/sgos-compiler");
const sgos_graph_engine_1 = require("../graph/sgos-graph-engine");
const sgos_solver_kernel_1 = require("../solver/sgos-solver-kernel");
const sgos_optimization_engine_1 = require("../optimization/sgos-optimization-engine");
const plugin_manager_1 = require("./plugin-manager");
const golden_datasets_1 = require("./golden-datasets");
const physics_analogy_engine_1 = require("../modules/physics-analogy-engine");
const avarana_callout_engine_1 = require("../modules/avarana-callout-engine");
class SGOSSDK {
    static KERNEL_VERSION = '1.0.0-sgos.phase7';
    static IS_KERNEL_LOCKED = true;
    pluginManager = new plugin_manager_1.SGOSPluginManager();
    optEngine = new sgos_optimization_engine_1.SGOSOptimizationEngine();
    getPluginManager() {
        return this.pluginManager;
    }
    getGoldenDatasets() {
        return golden_datasets_1.GOLDEN_YANTRA_DATASETS;
    }
    /**
     * Public SDK API: Validates Geometry DSL schema and expression syntax.
     */
    validate(dsl) {
        const parseRes = parser_1.SGOSASTParser.parse(dsl);
        return parseRes.errors.length === 0;
    }
    /**
     * Public SDK API: Compiles Geometry DSL into Intermediate Geometry Representation (IGR).
     */
    compile(dsl) {
        return sgos_compiler_1.SGOSGeometryCompiler.compile(dsl);
    }
    /**
     * Public SDK API: Solves a GeometryGraph topology into a SolvedGeometryModel (SGM).
     */
    solve(graph, options) {
        return sgos_solver_kernel_1.SGOSComputationalSolverKernel.solve(graph, options);
    }
    /**
     * Public SDK API: Optimizes Solved Geometry Model into an OSGM with spatial index bounds.
     */
    optimize(sgm) {
        const { osgm } = this.optEngine.optimize(sgm);
        return osgm;
    }
    /**
     * Public SDK API: Generates developer-oriented graph inspection report.
     */
    inspect(graph) {
        return sgos_graph_engine_1.SGOSGeometryGraphEngine.inspectGraph(graph);
    }
    /**
     * Public SDK API: Evaluates performance benchmarks for a Solved Geometry Model.
     */
    benchmark(sgm) {
        const { osgm } = this.optEngine.optimize(sgm);
        return osgm.benchmarkMetrics;
    }
    /**
     * Public SDK API: Full end-to-end pipeline execution (DSL -> AST -> IGR -> Graph -> SGM -> OSGM)
     */
    runPipeline(dsl, solverOptions) {
        const startComp = Date.now();
        const compileRes = this.compile(dsl);
        if (!compileRes.igr) {
            throw new Error(`Compilation failed for ${dsl.id}: ${compileRes.diagnostics.errors.map((e) => e.message).join('; ')}`);
        }
        const compilationTimeMs = Math.max(1, Date.now() - startComp);
        const graph = sgos_graph_engine_1.SGOSGeometryGraphEngine.buildGraph(compileRes.igr);
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
    getPhysicsAnalogy(yantraId) {
        return physics_analogy_engine_1.SGOSPhysicsAnalogyEngine.getAnalogy(yantraId);
    }
    /**
     * Public SDK API: Retrieves 9 Avaranas callout annotations (Sanskrit deity names, Ten Pranas, Siddhis).
     */
    getAvaranaCalloutGroup(avaranaIndex) {
        return avarana_callout_engine_1.SGOSAvaranaCalloutEngine.getAvaranaGroup(avaranaIndex);
    }
}
exports.SGOSSDK = SGOSSDK;
// Global Singleton Export
exports.SGOS = new SGOSSDK();
