import { ISGOSConstraint, ValidatedIGR } from './types';
import { IntermediateGeometryRepresentation } from '../compiler/types';
export declare class SGOSConstraintEngine {
    private constraints;
    private incrementalValidator;
    constructor();
    /** Register canonical default sacred geometry constraints */
    private registerCanonicalDefaults;
    /** Register a custom geometric or sacred constraint */
    registerConstraint(constraint: ISGOSConstraint): void;
    /** Unregister constraint by ID */
    unregisterConstraint(constraintId: string): void;
    /** Get all registered constraints */
    getRegisteredConstraints(): readonly ISGOSConstraint[];
    /**
     * Main Validation Pipeline: Validates IGR against all constraints.
     * Returns a ValidatedIGR containing the validated document and ConstraintReport.
     */
    validate(igr: IntermediateGeometryRepresentation): ValidatedIGR;
    /**
     * Incremental Validation Pipeline: Only re-evaluates constraints targeting dirty nodes.
     */
    validateIncremental(igr: IntermediateGeometryRepresentation, dirtyNodeIds: Iterable<string>): ValidatedIGR;
}
