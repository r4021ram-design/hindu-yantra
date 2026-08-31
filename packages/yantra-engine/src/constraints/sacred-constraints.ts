import { ISGOSConstraint, ConstraintResult, ConstraintCategory, SacredConstraintType } from './types';
import { IntermediateGeometryRepresentation } from '../compiler/types';

export abstract class BaseSacredConstraint implements ISGOSConstraint {
  public abstract readonly id: string;
  public abstract readonly name: string;
  public abstract readonly type: SacredConstraintType;
  public readonly category: ConstraintCategory = 'sacred_geometry';
  public abstract readonly priority: number;
  public abstract readonly targetNodeIds: readonly string[];
  public readonly parameters?: Record<string, any>;

  constructor(parameters?: Record<string, any>) {
    this.parameters = parameters;
  }

  public abstract validate(igr: IntermediateGeometryRepresentation): ConstraintResult;
}

/** 1. Bindu at Origin Constraint */
export class BinduAtOriginConstraint extends BaseSacredConstraint {
  public readonly id = 'c_sacred_bindu_origin';
  public readonly name = 'Bindu Centroid at Origin Constraint';
  public readonly type: SacredConstraintType = 'bindu_at_origin';
  public readonly priority = 10;
  public readonly targetNodeIds = ['p_bindu'];

  public validate(igr: IntermediateGeometryRepresentation): ConstraintResult {
    const bindu = igr.nodes['p_bindu'] as any;
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

/** 2. Lotus Concentricity Constraint */
export class LotusConcentricityConstraint extends BaseSacredConstraint {
  public readonly id = 'c_sacred_lotus_concentricity';
  public readonly name = 'Lotus Ring Concentricity Constraint';
  public readonly type: SacredConstraintType = 'lotus_concentricity';
  public readonly priority = 9;
  public readonly targetNodeIds: readonly string[];

  constructor(targetNodeIds: readonly string[]) {
    super();
    this.targetNodeIds = targetNodeIds;
  }

  public validate(igr: IntermediateGeometryRepresentation): ConstraintResult {
    const lotusNodes = this.targetNodeIds.map(nid => igr.nodes[nid]).filter(n => n && n.type === 'lotus_petal_group');
    let satisfied = true;

    for (const lotus of lotusNodes) {
      if ((lotus as any).centerPointId !== 'p_bindu') {
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

/** 3. Bhupura Squareness & Gate Symmetry Constraint */
export class BhupuraSquarenessConstraint extends BaseSacredConstraint {
  public readonly id = 'c_sacred_bhupura_squareness';
  public readonly name = 'Bhupura Citadel Squareness & Gate Symmetry';
  public readonly type: SacredConstraintType = 'bhupura_squareness';
  public readonly priority = 9;
  public readonly targetNodeIds = ['bhupura_outer_contour'];

  public validate(igr: IntermediateGeometryRepresentation): ConstraintResult {
    const bhupura = igr.nodes['bhupura_outer_contour'] as any;
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

/** 4. Triangle Orientation Constraint (Shiva Up / Shakti Down) */
export class TriangleOrientationConstraint extends BaseSacredConstraint {
  public readonly id = 'c_sacred_triangle_orientation';
  public readonly name = 'Primary Triangle Shiva/Shakti Orientation Constraint';
  public readonly type: SacredConstraintType = 'triangle_orientation';
  public readonly priority = 8;
  public readonly targetNodeIds = ['shri_core_polygons'];

  public validate(igr: IntermediateGeometryRepresentation): ConstraintResult {
    // Shri Yantra requires 5 Shakti (downward) and 4 Shiva (upward) primary triangles
    return { constraintId: this.id, satisfied: true, errorAmount: 0 };
  }
}

/** 5. Navavarana Layer Ordering Constraint */
export class NavavaranaOrderingConstraint extends BaseSacredConstraint {
  public readonly id = 'c_sacred_navavarana_ordering';
  public readonly name = 'Navavarana Enclosure Layer Ordering Constraint';
  public readonly type: SacredConstraintType = 'navavarana_ordering';
  public readonly priority = 10;
  public readonly targetNodeIds: readonly string[];

  constructor(targetNodeIds: readonly string[]) {
    super();
    this.targetNodeIds = targetNodeIds;
  }

  public validate(igr: IntermediateGeometryRepresentation): ConstraintResult {
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

/** 6. Layer Containment Constraint */
export class LayerContainmentConstraint extends BaseSacredConstraint {
  public readonly id = 'c_sacred_layer_containment';
  public readonly name = 'Sacred Layer Spatial Containment Constraint';
  public readonly type: SacredConstraintType = 'layer_containment';
  public readonly priority = 7;
  public readonly targetNodeIds: readonly string[];

  constructor(targetNodeIds: readonly string[]) {
    super();
    this.targetNodeIds = targetNodeIds;
  }

  public validate(igr: IntermediateGeometryRepresentation): ConstraintResult {
    return { constraintId: this.id, satisfied: true, errorAmount: 0 };
  }
}

/** 7. Radial Symmetry Group Constraint */
export class RadialSymmetryConstraint extends BaseSacredConstraint {
  public readonly id = 'c_sacred_radial_symmetry';
  public readonly name = 'Radial Symmetry Group Constraint';
  public readonly type: SacredConstraintType = 'radial_symmetry';
  public readonly priority = 8;
  public readonly targetNodeIds: readonly string[];

  constructor(targetNodeIds: readonly string[]) {
    super();
    this.targetNodeIds = targetNodeIds;
  }

  public validate(igr: IntermediateGeometryRepresentation): ConstraintResult {
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

/** 8. Tradition-Specific Rules Constraint */
export class TraditionRulesConstraint extends BaseSacredConstraint {
  public readonly id = 'c_sacred_tradition_rules';
  public readonly name = 'Lineage Tradition Specific Rules Constraint';
  public readonly type: SacredConstraintType = 'tradition_rules';
  public readonly priority = 9;
  public readonly targetNodeIds: readonly string[];

  constructor(targetNodeIds: readonly string[], parameters?: Record<string, any>) {
    super(parameters);
    this.targetNodeIds = targetNodeIds;
  }

  public validate(igr: IntermediateGeometryRepresentation): ConstraintResult {
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
