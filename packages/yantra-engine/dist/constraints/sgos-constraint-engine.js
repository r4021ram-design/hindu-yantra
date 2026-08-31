"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SGOSConstraintEngine = void 0;
const incremental_validator_1 = require("./incremental-validator");
const geometric_constraints_1 = require("./geometric-constraints");
const sacred_constraints_1 = require("./sacred-constraints");
class SGOSConstraintEngine {
    constraints = [];
    incrementalValidator = new incremental_validator_1.IncrementalValidator();
    constructor() {
        this.registerCanonicalDefaults();
    }
    /** Register canonical default sacred geometry constraints */
    registerCanonicalDefaults() {
        this.registerConstraint(new sacred_constraints_1.BinduAtOriginConstraint());
        this.registerConstraint(new sacred_constraints_1.BhupuraSquarenessConstraint());
        this.registerConstraint(new geometric_constraints_1.ConcentricConstraint('c_default_concentric', ['p_bindu', 'circle_outer']));
        this.registerConstraint(new geometric_constraints_1.SymmetryConstraint('c_default_symmetry', ['lotus_rings'], { order: 8 }));
        this.registerConstraint(new sacred_constraints_1.LotusConcentricityConstraint(['lotus_16', 'lotus_8']));
        this.registerConstraint(new sacred_constraints_1.NavavaranaOrderingConstraint(['bindu', 'core_triangles', 'lotus_8', 'lotus_16', 'bhupura']));
        this.registerConstraint(new sacred_constraints_1.RadialSymmetryConstraint(['lotus_rings']));
        this.registerConstraint(new sacred_constraints_1.TraditionRulesConstraint(['core_triangles']));
    }
    /** Register a custom geometric or sacred constraint */
    registerConstraint(constraint) {
        this.constraints = this.constraints.filter(c => c.id !== constraint.id);
        this.constraints.push(constraint);
    }
    /** Unregister constraint by ID */
    unregisterConstraint(constraintId) {
        this.constraints = this.constraints.filter(c => c.id !== constraintId);
    }
    /** Get all registered constraints */
    getRegisteredConstraints() {
        return Object.freeze([...this.constraints]);
    }
    /**
     * Main Validation Pipeline: Validates IGR against all constraints.
     * Returns a ValidatedIGR containing the validated document and ConstraintReport.
     */
    validate(igr) {
        const report = this.incrementalValidator.validateFull(igr, this.constraints);
        return {
            igr,
            constraintReport: report,
            isValidated: report.isSatisfied,
            validatedTimestamp: new Date().toISOString()
        };
    }
    /**
     * Incremental Validation Pipeline: Only re-evaluates constraints targeting dirty nodes.
     */
    validateIncremental(igr, dirtyNodeIds) {
        this.incrementalValidator.markNodesDirty(dirtyNodeIds);
        const report = this.incrementalValidator.validateIncremental(igr, this.constraints);
        return {
            igr,
            constraintReport: report,
            isValidated: report.isSatisfied,
            validatedTimestamp: new Date().toISOString()
        };
    }
}
exports.SGOSConstraintEngine = SGOSConstraintEngine;
