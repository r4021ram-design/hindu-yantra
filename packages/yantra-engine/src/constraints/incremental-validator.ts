import {
  ISGOSConstraint,
  ConstraintReport,
  IncrementalValidationState
} from './types';
import { IntermediateGeometryRepresentation } from '../compiler/types';
import { ConstraintSolver } from './constraint-solver';

export class IncrementalValidator {
  private dirtyNodeIds: Set<string> = new Set();
  private dirtyConstraintIds: Set<string> = new Set();
  private cachedReport: ConstraintReport | null = null;

  /** Mark node as modified (dirty) */
  public markNodeDirty(nodeId: string): void {
    this.dirtyNodeIds.add(nodeId);
  }

  /** Mark multiple nodes as modified */
  public markNodesDirty(nodeIds: Iterable<string>): void {
    for (const nid of nodeIds) {
      this.dirtyNodeIds.add(nid);
    }
  }

  /** Clear all dirty flags */
  public clearDirtyFlags(): void {
    this.dirtyNodeIds.clear();
    this.dirtyConstraintIds.clear();
  }

  /** Run Full Validation & Cache Report */
  public validateFull(
    igr: IntermediateGeometryRepresentation,
    allConstraints: readonly ISGOSConstraint[]
  ): ConstraintReport {
    this.cachedReport = ConstraintSolver.solve(igr, allConstraints);
    this.clearDirtyFlags();
    return this.cachedReport;
  }

  /**
   * Run Incremental Validation: Only re-evaluates constraints targeting dirty nodes.
   */
  public validateIncremental(
    igr: IntermediateGeometryRepresentation,
    allConstraints: readonly ISGOSConstraint[]
  ): ConstraintReport {
    if (!this.cachedReport) {
      const fullReport = this.validateFull(igr, allConstraints);
      return {
        ...fullReport,
        isIncrementallyEvaluated: true
      };
    }

    // Filter constraints targeting dirty nodes
    const affectedConstraints = allConstraints.filter(c =>
      c.targetNodeIds.some(nid => this.dirtyNodeIds.has(nid))
    );

    // Evaluate affected subset
    const partialReport = ConstraintSolver.solve(igr, affectedConstraints.length > 0 ? affectedConstraints : allConstraints);

    // Merge partial results with cached report
    const mergedResultsMap = new Map(this.cachedReport.results.map(r => [r.constraintId, r]));
    partialReport.results.forEach(r => mergedResultsMap.set(r.constraintId, r));

    const updatedResults = Array.from(mergedResultsMap.values());
    const updatedDiagnostics = updatedResults.filter(r => r.diagnostic).map(r => r.diagnostic!);
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

  public getState(): IncrementalValidationState {
    return {
      dirtyNodeIds: new Set(this.dirtyNodeIds),
      dirtyConstraintIds: new Set(this.dirtyConstraintIds),
      lastEvaluatedTimestamp: Date.now()
    };
  }
}
