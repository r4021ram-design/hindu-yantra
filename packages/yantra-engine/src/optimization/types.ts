import { SolvedGeometryModel, SolvedPoint2D, SolvedFaceCoordinates } from '../solver/types';

export interface OptimizationReport {
  readonly originalNodeCount: number;
  readonly optimizedNodeCount: number;
  readonly originalEdgeCount: number;
  readonly optimizedEdgeCount: number;
  readonly originalFaceCount: number;
  readonly optimizedFaceCount: number;
  readonly duplicateVerticesEliminated: number;
  readonly degenerateEdgesRemoved: number;
  readonly zeroAreaFacesRemoved: number;
  readonly optimizationTimeMs: number;
}

export interface BenchmarkMetrics {
  readonly compilationTimeMs: number;
  readonly constraintValidationTimeMs: number;
  readonly solverTimeMs: number;
  readonly optimizationTimeMs: number;
  readonly totalPipelineTimeMs: number;
  readonly estimatedMemoryBytes: number;
  readonly graphComplexityScore: number;
  readonly queryThroughputPerSec: number;
}

export interface SpatialBounds {
  readonly minX: number;
  readonly minY: number;
  readonly maxX: number;
  readonly maxY: number;
}

export interface SpatialQueryResult {
  readonly nearestPoint?: { id: string; point: SolvedPoint2D; distance: number };
  readonly facesInBounds: readonly SolvedFaceCoordinates[];
  readonly intersectingEdgeIds: readonly string[];
}

export type SGOSEventType =
  | 'GeometrySolved'
  | 'OptimizationCompleted'
  | 'ConstraintViolation'
  | 'RegionUpdated'
  | 'LayerChanged'
  | 'BenchmarkCompleted';

export interface SGOSEvent<T = any> {
  readonly type: SGOSEventType;
  readonly timestamp: string;
  readonly payload: T;
}

export type SGOSEventListener<T = any> = (event: SGOSEvent<T>) => void;

export interface TransactionSnapshot {
  readonly snapshotId: string;
  readonly timestamp: string;
  readonly label: string;
  readonly sgm: SolvedGeometryModel;
}

export interface OptimizedSolvedGeometryModel {
  readonly sgm: SolvedGeometryModel;
  readonly optimizationReport: OptimizationReport;
  readonly benchmarkMetrics: BenchmarkMetrics;
  readonly spatialBounds: SpatialBounds;
  readonly isOptimized: boolean;
  readonly provenance: {
    readonly optimizerVersion: string;
    readonly deterministicHash: string;
  };
}
