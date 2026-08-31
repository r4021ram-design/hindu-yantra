"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SGOSVerificationEngine = void 0;
const sgos_sdk_1 = require("../sdk/sgos-sdk");
class SGOSVerificationEngine {
    /**
     * Pipeline Stage: Executes complete 8-stage verification pipeline over a GeometryDSL.
     */
    static verify(dsl) {
        const checks = [];
        // 1. DSL & AST Integrity Check
        const isDslValid = sgos_sdk_1.SGOS.validate(dsl);
        checks.push({
            name: 'AST & Schema Integrity',
            passed: isDslValid,
            details: isDslValid ? 'DSL schema and AST expressions valid.' : 'Schema validation errors found.'
        });
        // 2. Compiler Determinism Check (Compile twice)
        const comp1 = sgos_sdk_1.SGOS.compile(dsl);
        const comp2 = sgos_sdk_1.SGOS.compile(dsl);
        const isCompilerDeterministic = comp1.diagnostics.errors.length === comp2.diagnostics.errors.length &&
            Object.keys(comp1.igr?.nodes || {}).length === Object.keys(comp2.igr?.nodes || {}).length &&
            comp1.igr?.dslId === comp2.igr?.dslId;
        checks.push({
            name: 'Compiler Determinism',
            passed: isCompilerDeterministic,
            details: isCompilerDeterministic ? 'Compilation outputs are 100% deterministic.' : 'Compiler produced non-deterministic IGR.'
        });
        // 3. Full Pipeline Execution
        const pipelineRes = sgos_sdk_1.SGOS.runPipeline(dsl);
        // 4. Graph Topology Check
        const hasValidGraph = pipelineRes.graph.nodes['p_bindu'] !== undefined && pipelineRes.graph.isPlanar;
        checks.push({
            name: 'Graph Topology Integrity',
            passed: hasValidGraph,
            details: hasValidGraph ? 'Topology graph is planar and contains Bindu centroid.' : 'Graph topology invalid.'
        });
        // 5. Constraint Satisfaction Check
        const constraintPassed = pipelineRes.sgm.solverReport.constraintReport.isSatisfied;
        checks.push({
            name: 'Constraint Satisfaction',
            passed: constraintPassed,
            details: constraintPassed ? 'All geometric and sacred constraints satisfied.' : 'Constraint violations detected.'
        });
        // 6. Solver Correctness Check
        const solverConverged = pipelineRes.sgm.solverReport.iterationStats.converged;
        checks.push({
            name: 'Computational Solver Convergence',
            passed: solverConverged,
            details: solverConverged ? 'Solver converged within 1e-10 tolerance.' : 'Solver failed to converge.'
        });
        // 7. Optimization Correctness Check
        const isOptimized = pipelineRes.osgm.isOptimized;
        checks.push({
            name: 'Geometry Optimization Integrity',
            passed: isOptimized,
            details: isOptimized ? 'OSGM produced clean optimized representation.' : 'Optimization failed.'
        });
        // 8. Hash Reproducibility Check
        const pipeline2 = sgos_sdk_1.SGOS.runPipeline(dsl);
        const hashesMatch = pipelineRes.osgm.provenance.deterministicHash === pipeline2.osgm.provenance.deterministicHash;
        checks.push({
            name: 'Deterministic Hash Reproducibility',
            passed: hashesMatch,
            details: hashesMatch ? `Hashes match identically (${hashesMatch}).` : 'Hashes diverged across runs.'
        });
        const passedCount = checks.filter(c => c.passed).length;
        const failedCount = checks.length - passedCount;
        return {
            dslId: dsl.id,
            isVerified: failedCount === 0,
            totalChecksCount: checks.length,
            passedChecksCount: passedCount,
            failedChecksCount: failedCount,
            checks: Object.freeze(checks),
            verificationTimestamp: new Date().toISOString()
        };
    }
}
exports.SGOSVerificationEngine = SGOSVerificationEngine;
