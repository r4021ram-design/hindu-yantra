import { ISGOSConstraint, ConstraintReport, IncrementalValidationState } from './types';
import { IntermediateGeometryRepresentation } from '../compiler/types';
export declare class IncrementalValidator {
    private dirtyNodeIds;
    private dirtyConstraintIds;
    private cachedReport;
    /** Mark node as modified (dirty) */
    markNodeDirty(nodeId: string): void;
    /** Mark multiple nodes as modified */
    markNodesDirty(nodeIds: Iterable<string>): void;
    /** Clear all dirty flags */
    clearDirtyFlags(): void;
    /** Run Full Validation & Cache Report */
    validateFull(igr: IntermediateGeometryRepresentation, allConstraints: readonly ISGOSConstraint[]): ConstraintReport;
    /**
     * Run Incremental Validation: Only re-evaluates constraints targeting dirty nodes.
     */
    validateIncremental(igr: IntermediateGeometryRepresentation, allConstraints: readonly ISGOSConstraint[]): ConstraintReport;
    getState(): IncrementalValidationState;
}
