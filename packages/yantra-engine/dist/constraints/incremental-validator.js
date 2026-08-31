"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncrementalValidator = void 0;
const constraint_solver_1 = require("./constraint-solver");
class IncrementalValidator {
    dirtyNodeIds = new Set();
    dirtyConstraintIds = new Set();
    cachedReport = null;
    /** Mark node as modified (dirty) */
    markNodeDirty(nodeId) {
        this.dirtyNodeIds.add(nodeId);
    }
    /** Mark multiple nodes as modified */
    markNodesDirty(nodeIds) {
        for (const nid of nodeIds) {
            this.dirtyNodeIds.add(nid);
        }
    }
    /** Clear all dirty flags */
    clearDirtyFlags() {
        this.dirtyNodeIds.clear();
        this.dirtyConstraintIds.clear();
    }
    /** Run Full Validation & Cache Report */
    validateFull(igr, allConstraints) {
        this.cachedReport = constraint_solver_1.ConstraintSolver.solve(igr, allConstraints);
        this.clearDirtyFlags();
        return this.cachedReport;
    }
    /**
     * Run Incremental Validation: Only re-evaluates constraints targeting dirty nodes.
     */
    validateIncremental(igr, allConstraints) {
        if (!this.cachedReport) {
            const fullReport = this.validateFull(igr, allConstraints);
            return {
                ...fullReport,
                isIncrementallyEvaluated: true
            };
        }
        // Filter constraints targeting dirty nodes
        const affectedConstraints = allConstraints.filter(c => c.targetNodeIds.some(nid => this.dirtyNodeIds.has(nid)));
        // Evaluate affected subset
        const partialReport = constraint_solver_1.ConstraintSolver.solve(igr, affectedConstraints.length > 0 ? affectedConstraints : allConstraints);
        // Merge partial results with cached report
        const mergedResultsMap = new Map(this.cachedReport.results.map(r => [r.constraintId, r]));
        partialReport.results.forEach(r => mergedResultsMap.set(r.constraintId, r));
        const updatedResults = Array.from(mergedResultsMap.values());
        const updatedDiagnostics = updatedResults.filter(r => r.diagnostic).map(r => r.diagnostic);
        const satisfiedCount = updatedResults.filter(r => r.satisfied).length;
        this.cachedReport = {
            isSatisfied: updatedDiagnostics.filter(d => d.severity === 'error').length === 0,
            totalConstraintsCount: allConstraints.length,
            satisfiedCount,
            failedCount: allConstraints.length - satisfiedCount,
            results: Object.freeze(updatedResults),
            diagnostics: Object.freeze(updatedDiagnostics),
            conflicts: this.cachedReport.conflicts,
            evaluationTimeMs: partialReport.evaluationTimeMs,
            isIncrementallyEvaluated: true
        };
        this.clearDirtyFlags();
        return this.cachedReport;
    }
    getState() {
        return {
            dirtyNodeIds: new Set(this.dirtyNodeIds),
            dirtyConstraintIds: new Set(this.dirtyConstraintIds),
            lastEvaluatedTimestamp: Date.now()
        };
    }
}
exports.IncrementalValidator = IncrementalValidator;
