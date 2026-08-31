import { BenchmarkMetrics } from './types';
import { SolvedGeometryModel } from '../solver/types';

export class SGOSBenchmarkEngine {
  /**
   * Evaluates pipeline execution timings and graph complexity metrics.
   */
  public static measure(params: {
    compilationTimeMs: number;
    constraintValidationTimeMs: number;
    solverTimeMs: number;
    optimizationTimeMs: number;
    sgm: SolvedGeometryModel;
  }): BenchmarkMetrics {
    const totalPipelineTimeMs =
      params.compilationTimeMs +
      params.constraintValidationTimeMs +
      params.solverTimeMs +
      params.optimizationTimeMs;

    const nodeCount = Object.keys((params.sgm && params.sgm.solvedCoordinates) || {}).length;
    const edgeCount = Object.keys((params.sgm && params.sgm.solvedEdges) || {}).length;
    const faceCount = Object.keys((params.sgm && params.sgm.solvedFaces) || {}).length;

    // Estimate heap memory allocation (bytes)
    const estimatedMemoryBytes = (nodeCount * 48) + (edgeCount * 64) + (faceCount * 128) + 2048;

    // Graph complexity score
    const graphComplexityScore = nodeCount * 1.5 + edgeCount * 2.0 + faceCount * 3.0;

    // Query throughput simulation
    const queryThroughputPerSec = Math.round(1000000 / Math.max(1, totalPipelineTimeMs));

    return {
      compilationTimeMs: params.compilationTimeMs,
      constraintValidationTimeMs: params.constraintValidationTimeMs,
      solverTimeMs: params.solverTimeMs,
      optimizationTimeMs: params.optimizationTimeMs,
      totalPipelineTimeMs,
      estimatedMemoryBytes,
      graphComplexityScore,
      queryThroughputPerSec
    };
  }
}
