import { GeometryGraph } from '../graph/types';
import { ConstraintReport } from '../constraints/types';

export interface SolvedPoint2D {
  readonly x: number;
  readonly y: number;
  readonly z?: number;
}

export interface SolvedEdgeCoordinates {
  readonly id: string;
  readonly start: SolvedPoint2D;
  readonly end: SolvedPoint2D;
  readonly length: number;
}

export interface SolvedFaceCoordinates {
  readonly id: string;
  readonly type: string;
  readonly vertices: readonly SolvedPoint2D[];
  readonly centroid: SolvedPoint2D;
  readonly area: number;
  readonly windingOrder: 'CCW' | 'CW';
}

export interface SolvedRegionCoordinates {
  readonly id: string;
  readonly sanskritName: string;
  readonly englishName: string;
  readonly faces: readonly SolvedFaceCoordinates[];
}

export interface IterationStats {
  readonly iterationsCount: number;
  readonly converged: boolean;
  readonly finalResidualError: number;
  readonly maxResidualError: number;
}

export interface NumericalStabilityReport {
  readonly isStable: boolean;
  readonly conditionNumber?: number;
  readonly floatingPointDrift: number;
}

export interface SolverReport {
  readonly isSolved: boolean;
  readonly executionTimeMs: number;
  readonly analyticalSolutionsCount: number;
  readonly numericalRefinementsCount: number;
  readonly iterationStats: IterationStats;
  readonly constraintReport: ConstraintReport;
  readonly stabilityReport: NumericalStabilityReport;
}

export interface SolvedGeometryModel {
  readonly dslId: string;
  readonly tradition: string;
  readonly symmetryGroup: string;
  readonly viewportSize: number; // e.g. 1000
  readonly solvedCoordinates: Record<string, SolvedPoint2D>;
  readonly solvedEdges: Record<string, SolvedEdgeCoordinates>;
  readonly solvedFaces: Record<string, SolvedFaceCoordinates>;
  readonly solvedRegions: readonly SolvedRegionCoordinates[];
  readonly solverReport: SolverReport;
  readonly provenance: {
    readonly solverVersion: string;
    readonly algorithmVersion: string;
    readonly generatedTimestamp: string;
    readonly deterministicHash: string;
  };
}

export interface SolverOptions {
  readonly viewportSize?: number; // Default: 1000
  readonly convergenceTolerance?: number; // Default: 1e-10
  readonly maxIterations?: number; // Default: 100
  readonly enableNumericalRefinement?: boolean; // Default: true
  readonly enforceWindingOrder?: 'CCW' | 'CW'; // Default: 'CCW'
}
