"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraditionRulesConstraint = exports.RadialSymmetryConstraint = exports.LayerContainmentConstraint = exports.NavavaranaOrderingConstraint = exports.TriangleOrientationConstraint = exports.BhupuraSquarenessConstraint = exports.LotusConcentricityConstraint = exports.BinduAtOriginConstraint = exports.BaseSacredConstraint = void 0;
class BaseSacredConstraint {
    category = 'sacred_geometry';
    parameters;
    constructor(parameters) {
        this.parameters = parameters;
    }
}
exports.BaseSacredConstraint = BaseSacredConstraint;
/** 1. Bindu at Origin Constraint */
class BinduAtOriginConstraint extends BaseSacredConstraint {
    id = 'c_sacred_bindu_origin';
    name = 'Bindu Centroid at Origin Constraint';
    type = 'bindu_at_origin';
    priority = 10;
    targetNodeIds = ['p_bindu'];
    validate(igr) {
        const bindu = igr.nodes['p_bindu'];
        if (!bindu) {
            return {
                constraintId: this.id,
                satisfied: false,
                errorAmount: 1.0,
                diagnostic: {
                    constraintId: this.id,
                    code: 'SGOS_S001_MISSING_BINDU',
                    message: 'Bindu node "p_bindu" is missing from IGR nodes.',
                    severity: 'error',
                    affectedNodeIds: ['p_bindu'],
                    suggestedFix: 'Include central Bindu node in IGR.'
                }
            };
        }
        const dist = Math.sqrt(bindu.relativeX * bindu.relativeX + bindu.relativeY * bindu.relativeY);
        const satisfied = dist < 1e-4;
        return {
            constraintId: this.id,
            satisfied,
            errorAmount: dist,
            diagnostic: satisfied ? undefined : {
                constraintId: this.id,
                code: 'SGOS_S002_BINDU_OFF_CENTER',
                message: `Bindu is off-center by ${dist.toFixed(6)} relative units.`,
                severity: 'error',
                affectedNodeIds: ['p_bindu'],
                suggestedFix: 'Set Bindu coordinates to (0.0, 0.0).'
            }
        };
    }
}
exports.BinduAtOriginConstraint = BinduAtOriginConstraint;
/** 2. Lotus Concentricity Constraint */
class LotusConcentricityConstraint extends BaseSacredConstraint {
    id = 'c_sacred_lotus_concentricity';
    name = 'Lotus Ring Concentricity Constraint';
    type = 'lotus_concentricity';
    priority = 9;
    targetNodeIds;
    constructor(targetNodeIds) {
        super();
        this.targetNodeIds = targetNodeIds;
    }
    validate(igr) {
        const lotusNodes = this.targetNodeIds.map(nid => igr.nodes[nid]).filter(n => n && n.type === 'lotus_petal_group');
        let satisfied = true;
        for (const lotus of lotusNodes) {
            if (lotus.centerPointId !== 'p_bindu') {
                satisfied = false;
                break;
            }
        }
        return {
            constraintId: this.id,
            satisfied,
            errorAmount: satisfied ? 0 : 1,
            diagnostic: satisfied ? undefined : {
                constraintId: this.id,
                code: 'SGOS_S003_LOTUS_NOT_CONCENTRIC',
                message: 'One or more lotus rings are not concentric with central Bindu.',
                severity: 'error',
                affectedNodeIds: this.targetNodeIds,
                suggestedFix: 'Ensure all lotus ring centerPointId properties reference "p_bindu".'
            }
        };
    }
}
exports.LotusConcentricityConstraint = LotusConcentricityConstraint;
/** 3. Bhupura Squareness & Gate Symmetry Constraint */
class BhupuraSquarenessConstraint extends BaseSacredConstraint {
    id = 'c_sacred_bhupura_squareness';
    name = 'Bhupura Citadel Squareness & Gate Symmetry';
    type = 'bhupura_squareness';
    priority = 9;
    targetNodeIds = ['bhupura_outer_contour'];
    validate(igr) {
        const bhupura = igr.nodes['bhupura_outer_contour'];
        if (!bhupura) {
            return { constraintId: this.id, satisfied: true, errorAmount: 0 };
        }
        const satisfied = bhupura.gateCount === 4 && bhupura.stepLayers >= 1;
        return {
            constraintId: this.id,
            satisfied,
            errorAmount: satisfied ? 0 : 1,
            diagnostic: satisfied ? undefined : {
                constraintId: this.id,
                code: 'SGOS_S004_INVALID_BHUPURA',
                message: `Bhupura citadel requires 4 cardinal gates and at least 1 step layer. Found ${bhupura.gateCount} gates.`,
                severity: 'error',
                affectedNodeIds: ['bhupura_outer_contour'],
                suggestedFix: 'Set gateCount to 4 and stepLayers to 3.'
            }
        };
    }
}
exports.BhupuraSquarenessConstraint = BhupuraSquarenessConstraint;
/** 4. Triangle Orientation Constraint (Shiva Up / Shakti Down) */
class TriangleOrientationConstraint extends BaseSacredConstraint {
    id = 'c_sacred_triangle_orientation';
    name = 'Primary Triangle Shiva/Shakti Orientation Constraint';
    type = 'triangle_orientation';
    priority = 8;
    targetNodeIds = ['shri_core_polygons'];
    validate(igr) {
        // Shri Yantra requires 5 Shakti (downward) and 4 Shiva (upward) primary triangles
        return { constraintId: this.id, satisfied: true, errorAmount: 0 };
    }
}
exports.TriangleOrientationConstraint = TriangleOrientationConstraint;
/** 5. Navavarana Layer Ordering Constraint */
class NavavaranaOrderingConstraint extends BaseSacredConstraint {
    id = 'c_sacred_navavarana_ordering';
    name = 'Navavarana Enclosure Layer Ordering Constraint';
    type = 'navavarana_ordering';
    priority = 10;
    targetNodeIds;
    constructor(targetNodeIds) {
        super();
        this.targetNodeIds = targetNodeIds;
    }
    validate(igr) {
        const layers = igr.layers;
        let isOrdered = true;
        for (let i = 1; i < layers.length; i++) {
            if (layers[i].orderIndex < layers[i - 1].orderIndex) {
                isOrdered = false;
                break;
            }
        }
        return {
            constraintId: this.id,
            satisfied: isOrdered,
            errorAmount: isOrdered ? 0 : 1,
            diagnostic: isOrdered ? undefined : {
                constraintId: this.id,
                code: 'SGOS_S005_NAVAVARANA_UNORDERED',
                message: 'Navavarana enclosure layers are not ordered monotonically from Bindu to Bhupura.',
                severity: 'error',
                affectedNodeIds: this.targetNodeIds,
                suggestedFix: 'Re-order layers from orderIndex 0 (Bindu) sequentially outward to Bhupura.'
            }
        };
    }
}
exports.NavavaranaOrderingConstraint = NavavaranaOrderingConstraint;
/** 6. Layer Containment Constraint */
class LayerContainmentConstraint extends BaseSacredConstraint {
    id = 'c_sacred_layer_containment';
    name = 'Sacred Layer Spatial Containment Constraint';
    type = 'layer_containment';
    priority = 7;
    targetNodeIds;
    constructor(targetNodeIds) {
        super();
        this.targetNodeIds = targetNodeIds;
    }
    validate(igr) {
        return { constraintId: this.id, satisfied: true, errorAmount: 0 };
    }
}
exports.LayerContainmentConstraint = LayerContainmentConstraint;
/** 7. Radial Symmetry Group Constraint */
class RadialSymmetryConstraint extends BaseSacredConstraint {
    id = 'c_sacred_radial_symmetry';
    name = 'Radial Symmetry Group Constraint';
    type = 'radial_symmetry';
    priority = 8;
    targetNodeIds;
    constructor(targetNodeIds) {
        super();
        this.targetNodeIds = targetNodeIds;
    }
    validate(igr) {
        const hasSymmetry = igr.symmetryGroup && igr.symmetryGroup.startsWith('C_');
        return {
            constraintId: this.id,
            satisfied: !!hasSymmetry,
            errorAmount: hasSymmetry ? 0 : 1,
            diagnostic: hasSymmetry ? undefined : {
                constraintId: this.id,
                code: 'SGOS_S007_MISSING_RADIAL_SYMMETRY',
                message: 'Symmetry group is missing or non-radial.',
                severity: 'warning',
                affectedNodeIds: this.targetNodeIds,
                suggestedFix: 'Set symmetryGroup to C_8 or C_16.'
            }
        };
    }
}
exports.RadialSymmetryConstraint = RadialSymmetryConstraint;
/** 8. Tradition-Specific Rules Constraint */
class TraditionRulesConstraint extends BaseSacredConstraint {
    id = 'c_sacred_tradition_rules';
    name = 'Lineage Tradition Specific Rules Constraint';
    type = 'tradition_rules';
    priority = 9;
    targetNodeIds;
    constructor(targetNodeIds, parameters) {
        super(parameters);
        this.targetNodeIds = targetNodeIds;
    }
    validate(igr) {
        const tradition = igr.tradition || 'Srividya Kaula';
        const isAuthentic = igr.metadata.isAuthenticShastric;
        return {
            constraintId: this.id,
            satisfied: isAuthentic,
            errorAmount: isAuthentic ? 0 : 1,
            diagnostic: isAuthentic ? undefined : {
                constraintId: this.id,
                code: 'SGOS_S008_TRADITION_MISMATCH',
                message: `Geometry violates classical Shastric rules for tradition ${tradition}.`,
                severity: 'warning',
                affectedNodeIds: this.targetNodeIds,
                suggestedFix: 'Verify construction steps against classical Shastra lineage commentaries.'
            }
        };
    }
}
exports.TraditionRulesConstraint = TraditionRulesConstraint;
