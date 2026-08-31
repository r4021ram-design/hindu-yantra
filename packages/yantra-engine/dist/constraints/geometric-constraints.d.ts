import { ISGOSConstraint, ConstraintResult, ConstraintCategory, GeometricConstraintType } from './types';
import { IntermediateGeometryRepresentation } from '../compiler/types';
export declare abstract class BaseGeometricConstraint implements ISGOSConstraint {
    abstract readonly id: string;
    abstract readonly name: string;
    abstract readonly type: GeometricConstraintType;
    readonly category: ConstraintCategory;
    abstract readonly priority: number;
    abstract readonly targetNodeIds: readonly string[];
    readonly parameters?: Record<string, any>;
    constructor(parameters?: Record<string, any>);
    abstract validate(igr: IntermediateGeometryRepresentation): ConstraintResult;
}
/** 1. Coincident Point Constraint */
export declare class CoincidentPointConstraint extends BaseGeometricConstraint {
    readonly id: string;
    readonly name = "Coincident Point Constraint";
    readonly type: GeometricConstraintType;
    readonly priority = 10;
    readonly targetNodeIds: readonly string[];
    constructor(id: string, targetNodeIds: readonly string[], parameters?: Record<string, any>);
    validate(igr: IntermediateGeometryRepresentation): ConstraintResult;
}
/** 2. Collinear Constraint */
export declare class CollinearConstraint extends BaseGeometricConstraint {
    readonly id: string;
    readonly name = "Collinear Constraint";
    readonly type: GeometricConstraintType;
    readonly priority = 8;
    readonly targetNodeIds: readonly string[];
    constructor(id: string, targetNodeIds: readonly string[], parameters?: Record<string, any>);
    validate(igr: IntermediateGeometryRepresentation): ConstraintResult;
}
/** 3. Concentric Constraint */
export declare class ConcentricConstraint extends BaseGeometricConstraint {
    readonly id: string;
    readonly name = "Concentric Circle Constraint";
    readonly type: GeometricConstraintType;
    readonly priority = 9;
    readonly targetNodeIds: readonly string[];
    constructor(id: string, targetNodeIds: readonly string[], parameters?: Record<string, any>);
    validate(igr: IntermediateGeometryRepresentation): ConstraintResult;
}
/** 4. Parallel Constraint */
export declare class ParallelConstraint extends BaseGeometricConstraint {
    readonly id: string;
    readonly name = "Parallel Line Constraint";
    readonly type: GeometricConstraintType;
    readonly priority = 7;
    readonly targetNodeIds: readonly string[];
    constructor(id: string, targetNodeIds: readonly string[]);
    validate(igr: IntermediateGeometryRepresentation): ConstraintResult;
}
/** 5. Perpendicular Constraint */
export declare class PerpendicularConstraint extends BaseGeometricConstraint {
    readonly id: string;
    readonly name = "Perpendicular Line Constraint";
    readonly type: GeometricConstraintType;
    readonly priority = 7;
    readonly targetNodeIds: readonly string[];
    constructor(id: string, targetNodeIds: readonly string[]);
    validate(igr: IntermediateGeometryRepresentation): ConstraintResult;
}
/** 6. Equal Length Constraint */
export declare class EqualLengthConstraint extends BaseGeometricConstraint {
    readonly id: string;
    readonly name = "Equal Length Constraint";
    readonly type: GeometricConstraintType;
    readonly priority = 6;
    readonly targetNodeIds: readonly string[];
    constructor(id: string, targetNodeIds: readonly string[]);
    validate(igr: IntermediateGeometryRepresentation): ConstraintResult;
}
/** 7. Equal Radius Constraint */
export declare class EqualRadiusConstraint extends BaseGeometricConstraint {
    readonly id: string;
    readonly name = "Equal Radius Constraint";
    readonly type: GeometricConstraintType;
    readonly priority = 6;
    readonly targetNodeIds: readonly string[];
    constructor(id: string, targetNodeIds: readonly string[]);
    validate(igr: IntermediateGeometryRepresentation): ConstraintResult;
}
/** 8. Fixed Angle Constraint */
export declare class FixedAngleConstraint extends BaseGeometricConstraint {
    readonly id: string;
    readonly name = "Fixed Angle Constraint";
    readonly type: GeometricConstraintType;
    readonly priority = 8;
    readonly targetNodeIds: readonly string[];
    constructor(id: string, targetNodeIds: readonly string[], parameters?: Record<string, any>);
    validate(igr: IntermediateGeometryRepresentation): ConstraintResult;
}
/** 9. Symmetry Constraint */
export declare class SymmetryConstraint extends BaseGeometricConstraint {
    readonly id: string;
    readonly name = "Symmetry Group Constraint";
    readonly type: GeometricConstraintType;
    readonly priority = 9;
    readonly targetNodeIds: readonly string[];
    constructor(id: string, targetNodeIds: readonly string[], parameters?: Record<string, any>);
    validate(igr: IntermediateGeometryRepresentation): ConstraintResult;
}
/** 10. Tangency Constraint */
export declare class TangencyConstraint extends BaseGeometricConstraint {
    readonly id: string;
    readonly name = "Tangency Constraint";
    readonly type: GeometricConstraintType;
    readonly priority = 7;
    readonly targetNodeIds: readonly string[];
    constructor(id: string, targetNodeIds: readonly string[]);
    validate(igr: IntermediateGeometryRepresentation): ConstraintResult;
}
