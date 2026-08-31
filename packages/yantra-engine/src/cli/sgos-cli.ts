import { SGOS } from '../sdk/sgos-sdk';
import { SGOSVerification } from '../verification/sgos-verification-facade';
import { SacredGeometryLibrary } from '../plugins/yantra-library/sacred-geometry-library';
import { GOLDEN_YANTRA_DATASETS } from '../sdk/golden-datasets';
import { SGOSPackageManager } from '../package-manager/package-manager';

export class SGOSCLI {
  private static pm = new SGOSPackageManager();

  public static runCommand(args: readonly string[]): string {
    return this.run(args);
  }

  public static run(args: readonly string[]): string {
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

  private static handleCompile(yantraId?: string): string {
    const dsl = this.resolveDSL(yantraId);
    const igr = SGOS.compile(dsl);
    const count = Object.keys(igr.igr?.nodes || {}).length || 1;
    return JSON.stringify({ status: 'SUCCESS', stage: 'COMPILER_IGR', yantraId: dsl.id, entityCount: count }, null, 2);
  }

  private static handleSolve(yantraId?: string): string {
    const dsl = this.resolveDSL(yantraId);
    const pipeline = SGOS.runPipeline(dsl);
    const count = Object.keys(pipeline.sgm?.solvedCoordinates || {}).length || 1;
    return JSON.stringify({ status: 'SOLVED', stage: 'SOLVER_SGM', yantraId: dsl.id, solvedCount: count, isSolved: pipeline.sgm.solverReport.isSolved }, null, 2);
  }

  private static handleBenchmark(yantraId?: string): string {
    const dsl = this.resolveDSL(yantraId);
    const pipeline = SGOS.runPipeline(dsl);
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

  private static handleRunPipeline(yantraId?: string): string {
    const dsl = this.resolveDSL(yantraId);
    const pipeline = SGOS.runPipeline(dsl);
    const verification = SGOSVerification.verifyGeometry(dsl);
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

  private static handlePackageManager(subArgs: readonly string[]): string {
    const subCmd = subArgs[0]?.toLowerCase();
    const uri = subArgs[1];

    switch (subCmd) {
      case 'install':
        if (!uri) return 'Usage: sgos pkg install <uri>';
        const instRes = this.pm.install(uri);
        return JSON.stringify(instRes, null, 2);
      case 'list':
        const installed = this.pm.list();
        return JSON.stringify({ count: installed.length, packages: installed }, null, 2);
      case 'search':
        const results = this.pm.search({ text: uri });
        return JSON.stringify({ count: results.length, results }, null, 2);
      case 'verify':
        if (!uri) return 'Usage: sgos pkg verify <uri>';
        const verRes = this.pm.verify(uri);
        return JSON.stringify(verRes, null, 2);
      default:
        return 'Usage: sgos pkg [install|list|search|verify] <uri>';
    }
  }

  private static resolveDSL(yantraId?: string) {
    const id = yantraId || 'shri_yantra_canonical';
    const golden = GOLDEN_YANTRA_DATASETS.find(g => g.id === id);
    if (golden) return golden;
    return SacredGeometryLibrary.getGeometryDSL(id) || GOLDEN_YANTRA_DATASETS[0];
  }

  private static getHelpText(): string {
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
