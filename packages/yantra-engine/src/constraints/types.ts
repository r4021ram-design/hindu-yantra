import { IntermediateGeometryRepresentation } from '../compiler/types';

export type ConstraintCategory = 'geometric' | 'sacred_geometry' | 'tradition';

export type GeometricConstraintType =
  | 'coincident_point'
  | 'collinear'
  | 'concentric'
  | 'parallel'
  | 'perpendicular'
  | 'equal_length'
  | 'equal_radius'
  | 'fixed_angle'
  | 'symmetry'
  | 'tangency';

export type SacredConstraintType =
  | 'bindu_at_origin'
  | 'lotus_concentricity'
  | 'bhupura_squareness'
  | 'triangle_orientation'
  | 'navavarana_ordering'
  | 'layer_containment'
  | 'radial_symmetry'
  | 'tradition_rules';

export type ConstraintType = GeometricConstraintType | SacredConstraintType;

export type ConstraintSeverity = 'error' | 'warning' | 'suggestion';

export interface ConstraintDiagnostic {
  readonly constraintId: string;
  readonly code: string;
  readonly message: string;
  readonly severity: ConstraintSeverity;
  readonly affectedNodeIds: readonly string[];
  readonly suggestedFix?: string;
  readonly relatedConstraintIds?: readonly string[];
}

export interface ConstraintResult {
  readonly constraintId: string;
  readonly satisfied: boolean;
  readonly errorAmount?: number; // Residual mathematical error (e.g. 0.0001)
  readonly diagnostic?: ConstraintDiagnostic;
}

export interface ISGOSConstraint {
  readonly id: string;
  readonly name: string;
  readonly type: ConstraintType;
  readonly category: ConstraintCategory;
  readonly priority: number; // Higher number = higher priority
  readonly targetNodeIds: readonly string[];
  readonly parameters?: Record<string, any>;
  
  validate(igr: IntermediateGeometryRepresentation): ConstraintResult;
}

export interface ConflictDiagnostic {
  readonly conflictId: string;
  readonly conflictingConstraintIds: readonly string[];
  readonly reason: string;
  readonly priorityWinnerId?: string;
}

export interface ConstraintReport {
  readonly isSatisfied: boolean;
  readonly totalConstraintsCount: number;
  readonly satisfiedCount: number;
  readonly failedCount: number;
  readonly results: readonly ConstraintResult[];
  readonly diagnostics: readonly ConstraintDiagnostic[];
  readonly conflicts: readonly ConflictDiagnostic[];
  readonly evaluationTimeMs: number;
  readonly isIncrementallyEvaluated?: boolean;
}

export interface ValidatedIGR {
  readonly igr: IntermediateGeometryRepresentation;
  readonly constraintReport: ConstraintReport;
  readonly isValidated: boolean;
  readonly validatedTimestamp: string;
}

export interface IncrementalValidationState {
  readonly dirtyNodeIds: ReadonlySet<string>;
  readonly dirtyConstraintIds: ReadonlySet<string>;
  readonly lastEvaluatedTimestamp: number;
}
