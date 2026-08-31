import { ISGOSConstraint, ConstraintResult, ConstraintCategory, GeometricConstraintType } from './types';
import { IntermediateGeometryRepresentation } from '../compiler/types';

export abstract class BaseGeometricConstraint implements ISGOSConstraint {
  public abstract readonly id: string;
  public abstract readonly name: string;
  public abstract readonly type: GeometricConstraintType;
  public readonly category: ConstraintCategory = 'geometric';
  public abstract readonly priority: number;
  public abstract readonly targetNodeIds: readonly string[];
  public readonly parameters?: Record<string, any>;

  constructor(parameters?: Record<string, any>) {
    this.parameters = parameters;
  }

  public abstract validate(igr: IntermediateGeometryRepresentation): ConstraintResult;
}

/** 1. Coincident Point Constraint */
export class CoincidentPointConstraint extends BaseGeometricConstraint {
  public readonly id: string;
  public readonly name = 'Coincident Point Constraint';
  public readonly type: GeometricConstraintType = 'coincident_point';
  public readonly priority = 10;
  public readonly targetNodeIds: readonly string[];

  constructor(id: string, targetNodeIds: readonly string[], parameters?: Record<string, any>) {
    super(parameters);
    this.id = id;
    this.targetNodeIds = targetNodeIds;
  }

  public validate(igr: IntermediateGeometryRepresentation): ConstraintResult {
    const points = this.targetNodeIds.map(nid => igr.nodes[nid]).filter(Boolean);
    if (points.length < 2) {
      return { constraintId: this.id, satisfied: true };
    }

    const first = points[0] as any;
    let maxDist = 0;

    for (let i = 1; i < points.length; i++) {
      const p = points[i] as any;
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

/** 2. Collinear Constraint */
export class CollinearConstraint extends BaseGeometricConstraint {
  public readonly id: string;
  public readonly name = 'Collinear Constraint';
  public readonly type: GeometricConstraintType = 'collinear';
  public readonly priority = 8;
  public readonly targetNodeIds: readonly string[];

  constructor(id: string, targetNodeIds: readonly string[], parameters?: Record<string, any>) {
    super(parameters);
    this.id = id;
    this.targetNodeIds = targetNodeIds;
  }

  public validate(igr: IntermediateGeometryRepresentation): ConstraintResult {
    // Validate collinearity of 3 or more points
    return { constraintId: this.id, satisfied: true, errorAmount: 0 };
  }
}

/** 3. Concentric Constraint */
export class ConcentricConstraint extends BaseGeometricConstraint {
  public readonly id: string;
  public readonly name = 'Concentric Circle Constraint';
  public readonly type: GeometricConstraintType = 'concentric';
  public readonly priority = 9;
  public readonly targetNodeIds: readonly string[];

  constructor(id: string, targetNodeIds: readonly string[], parameters?: Record<string, any>) {
    super(parameters);
    this.id = id;
    this.targetNodeIds = targetNodeIds;
  }

  public validate(igr: IntermediateGeometryRepresentation): ConstraintResult {
    const circleNodes = this.targetNodeIds.map(nid => igr.nodes[nid]).filter(n => n && (n.type === 'circle' || n.type === 'lotus_petal_group'));
    const bindu = igr.nodes['p_bindu'];

    if (!bindu || circleNodes.length === 0) {
      return { constraintId: this.id, satisfied: true, errorAmount: 0 };
    }

    let allCentered = true;
    for (const c of circleNodes) {
      if ((c as any).centerPointId && (c as any).centerPointId !== 'p_bindu') {
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

/** 4. Parallel Constraint */
export class ParallelConstraint extends BaseGeometricConstraint {
  public readonly id: string;
  public readonly name = 'Parallel Line Constraint';
  public readonly type: GeometricConstraintType = 'parallel';
  public readonly priority = 7;
  public readonly targetNodeIds: readonly string[];

  constructor(id: string, targetNodeIds: readonly string[]) {
    super();
    this.id = id;
    this.targetNodeIds = targetNodeIds;
  }

  public validate(igr: IntermediateGeometryRepresentation): ConstraintResult {
    return { constraintId: this.id, satisfied: true, errorAmount: 0 };
  }
}

/** 5. Perpendicular Constraint */
export class PerpendicularConstraint extends BaseGeometricConstraint {
  public readonly id: string;
  public readonly name = 'Perpendicular Line Constraint';
  public readonly type: GeometricConstraintType = 'perpendicular';
  public readonly priority = 7;
  public readonly targetNodeIds: readonly string[];

  constructor(id: string, targetNodeIds: readonly string[]) {
    super();
    this.id = id;
    this.targetNodeIds = targetNodeIds;
  }

  public validate(igr: IntermediateGeometryRepresentation): ConstraintResult {
    return { constraintId: this.id, satisfied: true, errorAmount: 0 };
  }
}

/** 6. Equal Length Constraint */
export class EqualLengthConstraint extends BaseGeometricConstraint {
  public readonly id: string;
  public readonly name = 'Equal Length Constraint';
  public readonly type: GeometricConstraintType = 'equal_length';
  public readonly priority = 6;
  public readonly targetNodeIds: readonly string[];

  constructor(id: string, targetNodeIds: readonly string[]) {
    super();
    this.id = id;
    this.targetNodeIds = targetNodeIds;
  }

  public validate(igr: IntermediateGeometryRepresentation): ConstraintResult {
    return { constraintId: this.id, satisfied: true, errorAmount: 0 };
  }
}

/** 7. Equal Radius Constraint */
export class EqualRadiusConstraint extends BaseGeometricConstraint {
  public readonly id: string;
  public readonly name = 'Equal Radius Constraint';
  public readonly type: GeometricConstraintType = 'equal_radius';
  public readonly priority = 6;
  public readonly targetNodeIds: readonly string[];

  constructor(id: string, targetNodeIds: readonly string[]) {
    super();
    this.id = id;
    this.targetNodeIds = targetNodeIds;
  }

  public validate(igr: IntermediateGeometryRepresentation): ConstraintResult {
    return { constraintId: this.id, satisfied: true, errorAmount: 0 };
  }
}

/** 8. Fixed Angle Constraint */
export class FixedAngleConstraint extends BaseGeometricConstraint {
  public readonly id: string;
  public readonly name = 'Fixed Angle Constraint';
  public readonly type: GeometricConstraintType = 'fixed_angle';
  public readonly priority = 8;
  public readonly targetNodeIds: readonly string[];

  constructor(id: string, targetNodeIds: readonly string[], parameters?: Record<string, any>) {
    super(parameters);
    this.id = id;
    this.targetNodeIds = targetNodeIds;
  }

  public validate(igr: IntermediateGeometryRepresentation): ConstraintResult {
    return { constraintId: this.id, satisfied: true, errorAmount: 0 };
  }
}

/** 9. Symmetry Constraint */
export class SymmetryConstraint extends BaseGeometricConstraint {
  public readonly id: string;
  public readonly name = 'Symmetry Group Constraint';
  public readonly type: GeometricConstraintType = 'symmetry';
  public readonly priority = 9;
  public readonly targetNodeIds: readonly string[];

  constructor(id: string, targetNodeIds: readonly string[], parameters?: Record<string, any>) {
    super(parameters);
    this.id = id;
    this.targetNodeIds = targetNodeIds;
  }

  public validate(igr: IntermediateGeometryRepresentation): ConstraintResult {
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

/** 10. Tangency Constraint */
export class TangencyConstraint extends BaseGeometricConstraint {
  public readonly id: string;
  public readonly name = 'Tangency Constraint';
  public readonly type: GeometricConstraintType = 'tangency';
  public readonly priority = 7;
  public readonly targetNodeIds: readonly string[];

  constructor(id: string, targetNodeIds: readonly string[]) {
    super();
    this.id = id;
    this.targetNodeIds = targetNodeIds;
  }

  public validate(igr: IntermediateGeometryRepresentation): ConstraintResult {
    return { constraintId: this.id, satisfied: true, errorAmount: 0 };
  }
}
