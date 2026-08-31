import { ChiodoConstructionEngine, ChiodoConstructionResult } from './construction/chiodo-construction-engine';
import { ChiodoValidator, ChiodoFullAuditReport } from './verification/chiodo-validator';
import { ReferenceComparator, ReferenceComparisonReport } from './comparison/reference-comparator';
import { TopologyEngine, TopologyExtractionResult } from './topology/topology-engine';
import { GeometryCompiler } from './geometry/compiler';
import { YantraModeRenderer } from './renderers/rendering-modes';
import { Mesh3DGenerator } from './renderers/mesh-3d-generator';
import { MASTER_YANTRA_DATASET } from './data/yantras-dsl';

/**
 * SGOS Public API Facade for Alessandro Chiodo (2021) Śrī Yantra Analytical Computational Geometry Engine
 */

export function compileShriYantra(): ChiodoConstructionResult & { topology: TopologyExtractionResult } {
  const construction = ChiodoConstructionEngine.construct();
  const topology = TopologyEngine.extract43SubTriangles(construction.primaryTriangles);
  return {
    ...construction,
    topology
  };
}

export function validateShriYantra(): ChiodoFullAuditReport {
  const construction = ChiodoConstructionEngine.construct();
  return ChiodoValidator.audit(construction);
}

export function compareWithReference(): ReferenceComparisonReport {
  const construction = ChiodoConstructionEngine.construct();
  return ReferenceComparator.compareToReference(construction.primaryTriangles);
}

export function generateProofPackage() {
  const construction = ChiodoConstructionEngine.construct();
  const topology = TopologyEngine.extract43SubTriangles(construction.primaryTriangles);
  const validation = ChiodoValidator.audit(construction);
  const comparison = ReferenceComparator.compareToReference(construction.primaryTriangles);
  return {
    engineName: 'Analytical Computational Geometry Engine Implementing Alessandro Chiodo (2021)',
    construction,
    topology,
    validation,
    comparison
  };
}

export function exportCanonicalSVG(): string {
  const dsl = MASTER_YANTRA_DATASET[0];
  const compiled = GeometryCompiler.compile(dsl);
  return YantraModeRenderer.renderMode(compiled, 'final_canonical');
}

export function exportMeruMesh(): string {
  const dsl = MASTER_YANTRA_DATASET[0];
  const compiled = GeometryCompiler.compile(dsl);
  return Mesh3DGenerator.generateSTL(compiled, { mode: 'maha_meru_pyramid' });
}
