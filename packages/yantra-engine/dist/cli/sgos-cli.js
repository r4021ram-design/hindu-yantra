"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SGOSCLI = void 0;
const sgos_sdk_1 = require("../sdk/sgos-sdk");
const sgos_verification_facade_1 = require("../verification/sgos-verification-facade");
const sacred_geometry_library_1 = require("../plugins/yantra-library/sacred-geometry-library");
const golden_datasets_1 = require("../sdk/golden-datasets");
const package_manager_1 = require("../package-manager/package-manager");
class SGOSCLI {
    static pm = new package_manager_1.SGOSPackageManager();
    static runCommand(args) {
        return this.run(args);
    }
    static run(args) {
        const command = args[0]?.toLowerCase();
        const target = args[1];
        switch (command) {
            case 'compile':
                return this.handleCompile(target);
            case 'solve':
                return this.handleSolve(target);
            case 'benchmark':
                return this.handleBenchmark(target);
            case 'run':
                return this.handleRunPipeline(target);
            case 'pkg':
                return this.handlePackageManager(args.slice(1));
            default:
                return this.getHelpText();
        }
    }
    static handleCompile(yantraId) {
        const dsl = this.resolveDSL(yantraId);
        const igr = sgos_sdk_1.SGOS.compile(dsl);
        const count = Object.keys(igr.igr?.nodes || {}).length || 1;
        return JSON.stringify({ status: 'SUCCESS', stage: 'COMPILER_IGR', yantraId: dsl.id, entityCount: count }, null, 2);
    }
    static handleSolve(yantraId) {
        const dsl = this.resolveDSL(yantraId);
        const pipeline = sgos_sdk_1.SGOS.runPipeline(dsl);
        const count = Object.keys(pipeline.sgm?.solvedCoordinates || {}).length || 1;
        return JSON.stringify({ status: 'SOLVED', stage: 'SOLVER_SGM', yantraId: dsl.id, solvedCount: count, isSolved: pipeline.sgm.solverReport.isSolved }, null, 2);
    }
    static handleBenchmark(yantraId) {
        const dsl = this.resolveDSL(yantraId);
        const pipeline = sgos_sdk_1.SGOS.runPipeline(dsl);
        const benchmark = pipeline.benchmark;
        return JSON.stringify({
            status: 'BENCHMARK_COMPLETE',
            yantraId: dsl.id,
            totalPipelineTimeMs: benchmark.totalPipelineTimeMs,
            solverTimeMs: benchmark.solverTimeMs,
            compilationTimeMs: benchmark.compilationTimeMs,
            optimizationTimeMs: benchmark.optimizationTimeMs
        }, null, 2);
    }
    static handleRunPipeline(yantraId) {
        const dsl = this.resolveDSL(yantraId);
        const pipeline = sgos_sdk_1.SGOS.runPipeline(dsl);
        const verification = sgos_verification_facade_1.SGOSVerification.verifyGeometry(dsl);
        return JSON.stringify({
            status: 'PIPELINE_COMPLETE',
            pipeline: {
                dslId: pipeline.dsl.id,
                igrEntities: Object.keys(pipeline.igr?.nodes || {}).length,
                solvedEntities: Object.keys(pipeline.sgm?.solvedCoordinates || {}).length,
                optimizedEntities: Object.keys(pipeline.osgm?.sgm?.solvedCoordinates || {}).length,
                isSolved: pipeline.sgm.solverReport.isSolved,
                verificationPassed: verification.isVerified
            }
        }, null, 2);
    }
    static handlePackageManager(subArgs) {
        const subCmd = subArgs[0]?.toLowerCase();
        const uri = subArgs[1];
        switch (subCmd) {
            case 'install':
                if (!uri)
                    return 'Usage: sgos pkg install <uri>';
                const instRes = this.pm.install(uri);
                return JSON.stringify(instRes, null, 2);
            case 'list':
                const installed = this.pm.list();
                return JSON.stringify({ count: installed.length, packages: installed }, null, 2);
            case 'search':
                const results = this.pm.search({ text: uri });
                return JSON.stringify({ count: results.length, results }, null, 2);
            case 'verify':
                if (!uri)
                    return 'Usage: sgos pkg verify <uri>';
                const verRes = this.pm.verify(uri);
                return JSON.stringify(verRes, null, 2);
            default:
                return 'Usage: sgos pkg [install|list|search|verify] <uri>';
        }
    }
    static resolveDSL(yantraId) {
        const id = yantraId || 'shri_yantra_canonical';
        const golden = golden_datasets_1.GOLDEN_YANTRA_DATASETS.find(g => g.id === id);
        if (golden)
            return golden;
        return sacred_geometry_library_1.SacredGeometryLibrary.getGeometryDSL(id) || golden_datasets_1.GOLDEN_YANTRA_DATASETS[0];
    }
    static getHelpText() {
        return [
            'SGOS Developer Preview CLI v1.0.0',
            'Usage:',
            '  sgos compile [yantraId]       - Compiles DSL to IGR',
            '  sgos solve [yantraId]         - Solves Geometry to SGM',
            '  sgos benchmark [yantraId]     - Runs performance benchmarks',
            '  sgos run [yantraId]           - Executes full 6-stage computational pipeline',
            '  sgos pkg install <uri>        - Installs SGOS package from registry',
            '  sgos pkg list                 - Lists all installed SGOS packages',
            '  sgos pkg search <query>       - Searches package registry',
            '  sgos pkg verify <uri>         - Verifies package signature & digital integrity'
        ].join('\n');
    }
}
exports.SGOSCLI = SGOSCLI;
