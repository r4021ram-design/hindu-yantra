import { ISGOSConstraint, ConstraintResult, ConstraintCategory, SacredConstraintType } from './types';
import { IntermediateGeometryRepresentation } from '../compiler/types';
export declare abstract class BaseSacredConstraint implements ISGOSConstraint {
    abstract readonly id: string;
    abstract readonly name: string;
    abstract readonly type: SacredConstraintType;
    readonly category: ConstraintCategory;
    abstract readonly priority: number;
    abstract readonly targetNodeIds: readonly string[];
    readonly parameters?: Record<string, any>;
    constructor(parameters?: Record<string, any>);
    abstract validate(igr: IntermediateGeometryRepresentation): ConstraintResult;
}
/** 1. Bindu at Origin Constraint */
export declare class BinduAtOriginConstraint extends BaseSacredConstraint {
    readonly id = "c_sacred_bindu_origin";
    readonly name = "Bindu Centroid at Origin Constraint";
    readonly type: SacredConstraintType;
    readonly priority = 10;
    readonly targetNodeIds: string[];
    validate(igr: IntermediateGeometryRepresentation): ConstraintResult;
}
/** 2. Lotus Concentricity Constraint */
export declare class LotusConcentricityConstraint extends BaseSacredConstraint {
    readonly id = "c_sacred_lotus_concentricity";
    readonly name = "Lotus Ring Concentricity Constraint";
    readonly type: SacredConstraintType;
    readonly priority = 9;
    readonly targetNodeIds: readonly string[];
    constructor(targetNodeIds: readonly string[]);
    validate(igr: IntermediateGeometryRepresentation): ConstraintResult;
}
/** 3. Bhupura Squareness & Gate Symmetry Constraint */
export declare class BhupuraSquarenessConstraint extends BaseSacredConstraint {
    readonly id = "c_sacred_bhupura_squareness";
    readonly name = "Bhupura Citadel Squareness & Gate Symmetry";
    readonly type: SacredConstraintType;
    readonly priority = 9;
    readonly targetNodeIds: string[];
    validate(igr: IntermediateGeometryRepresentation): ConstraintResult;
}
/** 4. Triangle Orientation Constraint (Shiva Up / Shakti Down) */
export declare class TriangleOrientationConstraint extends BaseSacredConstraint {
    readonly id = "c_sacred_triangle_orientation";
    readonly name = "Primary Triangle Shiva/Shakti Orientation Constraint";
    readonly type: SacredConstraintType;
    readonly priority = 8;
    readonly targetNodeIds: string[];
    validate(igr: IntermediateGeometryRepresentation): ConstraintResult;
}
/** 5. Navavarana Layer Ordering Constraint */
export declare class NavavaranaOrderingConstraint extends BaseSacredConstraint {
    readonly id = "c_sacred_navavarana_ordering";
    readonly name = "Navavarana Enclosure Layer Ordering Constraint";
    readonly type: SacredConstraintType;
    readonly priority = 10;
    readonly targetNodeIds: readonly string[];
    constructor(targetNodeIds: readonly string[]);
    validate(igr: IntermediateGeometryRepresentation): ConstraintResult;
}
/** 6. Layer Containment Constraint */
export declare class LayerContainmentConstraint extends BaseSacredConstraint {
    readonly id = "c_sacred_layer_containment";
    readonly name = "Sacred Layer Spatial Containment Constraint";
    readonly type: SacredConstraintType;
    readonly priority = 7;
    readonly targetNodeIds: readonly string[];
    constructor(targetNodeIds: readonly string[]);
    validate(igr: IntermediateGeometryRepresentation): ConstraintResult;
}
/** 7. Radial Symmetry Group Constraint */
export declare class RadialSymmetryConstraint extends BaseSacredConstraint {
    readonly id = "c_sacred_radial_symmetry";
    readonly name = "Radial Symmetry Group Constraint";
    readonly type: SacredConstraintType;
    readonly priority = 8;
    readonly targetNodeIds: readonly string[];
    constructor(targetNodeIds: readonly string[]);
    validate(igr: IntermediateGeometryRepresentation): ConstraintResult;
}
/** 8. Tradition-Specific Rules Constraint */
export declare class TraditionRulesConstraint extends BaseSacredConstraint {
    readonly id = "c_sacred_tradition_rules";
    readonly name = "Lineage Tradition Specific Rules Constraint";
    readonly type: SacredConstraintType;
    readonly priority = 9;
    readonly targetNodeIds: readonly string[];
    constructor(targetNodeIds: readonly string[], parameters?: Record<string, any>);
    validate(igr: IntermediateGeometryRepresentation): ConstraintResult;
}
