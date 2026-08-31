import { Circle2D } from '../kernel';
import { ChiodoTriangleSpec } from '../construction/chiodo-construction-engine';
import { IntermediateGeometryRepresentation } from '../compiler/types';
import { ISGOSConstraint, ConstraintReport } from './types';
export interface ConcurrencyAuditReport {
    conditionISatisfied: boolean;
    conditionIISatisfied: boolean;
    conditionIIISatisfied: boolean;
    outerCircleDiscrepancy: number;
    apexBaseMaxError: number;
    tripleIntersectionMaxError: number;
    symmetryMaxError: number;
    overallConfidenceScore: number;
}
export declare class ConstraintSolver {
    static readonly TOLERANCE = 1e-12;
    /**
     * IGR Constraint Solver for SGOS Constraint Pipeline
     */
    static solve(igr: IntermediateGeometryRepresentation, constraints: readonly ISGOSConstraint[]): ConstraintReport;
    /**
     * Automatically verifies Chiodo (2021) Concurrency Conditions (i, ii, iii)
     * and mirror symmetry bounds.
     */
    static verifyChiodoConstraints(triangles: ChiodoTriangleSpec[], outerCircumcircle: Circle2D): ConcurrencyAuditReport;
}
