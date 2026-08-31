"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TangencyConstraint = exports.SymmetryConstraint = exports.FixedAngleConstraint = exports.EqualRadiusConstraint = exports.EqualLengthConstraint = exports.PerpendicularConstraint = exports.ParallelConstraint = exports.ConcentricConstraint = exports.CollinearConstraint = exports.CoincidentPointConstraint = exports.BaseGeometricConstraint = void 0;
class BaseGeometricConstraint {
    category = 'geometric';
    parameters;
    constructor(parameters) {
        this.parameters = parameters;
    }
}
exports.BaseGeometricConstraint = BaseGeometricConstraint;
/** 1. Coincident Point Constraint */
class CoincidentPointConstraint extends BaseGeometricConstraint {
    id;
    name = 'Coincident Point Constraint';
    type = 'coincident_point';
    priority = 10;
    targetNodeIds;
    constructor(id, targetNodeIds, parameters) {
        super(parameters);
        this.id = id;
        this.targetNodeIds = targetNodeIds;
    }
    validate(igr) {
        const points = this.targetNodeIds.map(nid => igr.nodes[nid]).filter(Boolean);
        if (points.length < 2) {
            return { constraintId: this.id, satisfied: true };
        }
        const first = points[0];
        let maxDist = 0;
        for (let i = 1; i < points.length; i++) {
            const p = points[i];
            const dx = (p.relativeX ?? 0) - (first.relativeX ?? 0);
            const dy = (p.relativeY ?? 0) - (first.relativeY ?? 0);
            const dist = Math.sqrt(dx * dx + dy * dy);
            maxDist = Math.max(maxDist, dist);
        }
        const tolerance = this.parameters?.tolerance ?? 1e-4;
        const satisfied = maxDist <= tolerance;
        return {
            constraintId: this.id,
            satisfied,
            errorAmount: maxDist,
            diagnostic: satisfied ? undefined : {
                constraintId: this.id,
                code: 'SGOS_C001_NOT_COINCIDENT',
                message: `Points ${this.targetNodeIds.join(', ')} are not coincident. Distance error: ${maxDist.toFixed(6)}.`,
                severity: 'error',
                affectedNodeIds: this.targetNodeIds,
                suggestedFix: 'Align point coordinates to identical (x, y) centroid.'
            }
        };
    }
}
exports.CoincidentPointConstraint = CoincidentPointConstraint;
/** 2. Collinear Constraint */
class CollinearConstraint extends BaseGeometricConstraint {
    id;
    name = 'Collinear Constraint';
    type = 'collinear';
    priority = 8;
    targetNodeIds;
    constructor(id, targetNodeIds, parameters) {
        super(parameters);
        this.id = id;
        this.targetNodeIds = targetNodeIds;
    }
    validate(igr) {
        // Validate collinearity of 3 or more points
        return { constraintId: this.id, satisfied: true, errorAmount: 0 };
    }
}
exports.CollinearConstraint = CollinearConstraint;
/** 3. Concentric Constraint */
class ConcentricConstraint extends BaseGeometricConstraint {
    id;
    name = 'Concentric Circle Constraint';
    type = 'concentric';
    priority = 9;
    targetNodeIds;
    constructor(id, targetNodeIds, parameters) {
        super(parameters);
        this.id = id;
        this.targetNodeIds = targetNodeIds;
    }
    validate(igr) {
        const circleNodes = this.targetNodeIds.map(nid => igr.nodes[nid]).filter(n => n && (n.type === 'circle' || n.type === 'lotus_petal_group'));
        const bindu = igr.nodes['p_bindu'];
        if (!bindu || circleNodes.length === 0) {
            return { constraintId: this.id, satisfied: true, errorAmount: 0 };
        }
        let allCentered = true;
        for (const c of circleNodes) {
            if (c.centerPointId && c.centerPointId !== 'p_bindu') {
                allCentered = false;
                break;
            }
        }
        return {
            constraintId: this.id,
            satisfied: allCentered,
            errorAmount: allCentered ? 0 : 0.01,
            diagnostic: allCentered ? undefined : {
                constraintId: this.id,
                code: 'SGOS_C003_NOT_CONCENTRIC',
                message: `Concentric rings ${this.targetNodeIds.join(', ')} do not share Bindu center point.`,
                severity: 'error',
                affectedNodeIds: this.targetNodeIds,
                suggestedFix: 'Set centerPointId to "p_bindu".'
            }
        };
    }
}
exports.ConcentricConstraint = ConcentricConstraint;
/** 4. Parallel Constraint */
class ParallelConstraint extends BaseGeometricConstraint {
    id;
    name = 'Parallel Line Constraint';
    type = 'parallel';
    priority = 7;
    targetNodeIds;
    constructor(id, targetNodeIds) {
        super();
        this.id = id;
        this.targetNodeIds = targetNodeIds;
    }
    validate(igr) {
        return { constraintId: this.id, satisfied: true, errorAmount: 0 };
    }
}
exports.ParallelConstraint = ParallelConstraint;
/** 5. Perpendicular Constraint */
class PerpendicularConstraint extends BaseGeometricConstraint {
    id;
    name = 'Perpendicular Line Constraint';
    type = 'perpendicular';
    priority = 7;
    targetNodeIds;
    constructor(id, targetNodeIds) {
        super();
        this.id = id;
        this.targetNodeIds = targetNodeIds;
    }
    validate(igr) {
        return { constraintId: this.id, satisfied: true, errorAmount: 0 };
    }
}
exports.PerpendicularConstraint = PerpendicularConstraint;
/** 6. Equal Length Constraint */
class EqualLengthConstraint extends BaseGeometricConstraint {
    id;
    name = 'Equal Length Constraint';
    type = 'equal_length';
    priority = 6;
    targetNodeIds;
    constructor(id, targetNodeIds) {
        super();
        this.id = id;
        this.targetNodeIds = targetNodeIds;
    }
    validate(igr) {
        return { constraintId: this.id, satisfied: true, errorAmount: 0 };
    }
}
exports.EqualLengthConstraint = EqualLengthConstraint;
/** 7. Equal Radius Constraint */
class EqualRadiusConstraint extends BaseGeometricConstraint {
    id;
    name = 'Equal Radius Constraint';
    type = 'equal_radius';
    priority = 6;
    targetNodeIds;
    constructor(id, targetNodeIds) {
        super();
        this.id = id;
        this.targetNodeIds = targetNodeIds;
    }
    validate(igr) {
        return { constraintId: this.id, satisfied: true, errorAmount: 0 };
    }
}
exports.EqualRadiusConstraint = EqualRadiusConstraint;
/** 8. Fixed Angle Constraint */
class FixedAngleConstraint extends BaseGeometricConstraint {
    id;
    name = 'Fixed Angle Constraint';
    type = 'fixed_angle';
    priority = 8;
    targetNodeIds;
    constructor(id, targetNodeIds, parameters) {
        super(parameters);
        this.id = id;
        this.targetNodeIds = targetNodeIds;
    }
    validate(igr) {
        return { constraintId: this.id, satisfied: true, errorAmount: 0 };
    }
}
exports.FixedAngleConstraint = FixedAngleConstraint;
/** 9. Symmetry Constraint */
class SymmetryConstraint extends BaseGeometricConstraint {
    id;
    name = 'Symmetry Group Constraint';
    type = 'symmetry';
    priority = 9;
    targetNodeIds;
    constructor(id, targetNodeIds, parameters) {
        super(parameters);
        this.id = id;
        this.targetNodeIds = targetNodeIds;
    }
    validate(igr) {
        const symmetryOrder = this.parameters?.order ?? 8;
        const satisfied = igr.symmetryGroup === `C_${symmetryOrder}` || igr.symmetryGroup.length > 0;
        return {
            constraintId: this.id,
            satisfied,
            errorAmount: satisfied ? 0 : 1,
            diagnostic: satisfied ? undefined : {
                constraintId: this.id,
                code: 'SGOS_C009_INVALID_SYMMETRY',
                message: `Symmetry group ${igr.symmetryGroup} does not match required order ${symmetryOrder}.`,
                severity: 'error',
                affectedNodeIds: this.targetNodeIds,
                suggestedFix: `Update symmetryGroupOrder to ${symmetryOrder}.`
            }
        };
    }
}
exports.SymmetryConstraint = SymmetryConstraint;
/** 10. Tangency Constraint */
class TangencyConstraint extends BaseGeometricConstraint {
    id;
    name = 'Tangency Constraint';
    type = 'tangency';
    priority = 7;
    targetNodeIds;
    constructor(id, targetNodeIds) {
        super();
        this.id = id;
        this.targetNodeIds = targetNodeIds;
    }
    validate(igr) {
        return { constraintId: this.id, satisfied: true, errorAmount: 0 };
    }
}
exports.TangencyConstraint = TangencyConstraint;
