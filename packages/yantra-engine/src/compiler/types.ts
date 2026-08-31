import { YantraDSL } from '../dsl/types';
export type GeometryDSL = YantraDSL | any;


export interface SourceLocation {
  readonly path: string; // JSON AST path (e.g. "geometryRules.bhupura")
  readonly line?: number;
  readonly column?: number;
}

export type CompilerDiagnosticSeverity = 'error' | 'warning' | 'suggestion';

export interface CompilerDiagnostic {
  readonly code: string;            // Unique diagnostic code (e.g. "SGOS_E001_INVALID_SCHEMA")
  readonly message: string;         // Human readable explanation
  readonly severity: CompilerDiagnosticSeverity;
  readonly location?: SourceLocation;
  readonly fixSuggestion?: string;  // Recommended remediation
}

export interface GeometryStatistics {
  readonly totalNodes: number;
  readonly totalEdges: number;
  readonly totalLayers: number;
  readonly totalPrimitives: number;
  readonly primaryTriangleCount: number;
  readonly subTriangleCount: number;
  readonly circleCount: number;
  readonly lotusRingCount: number;
  readonly totalPetalCount: number;
  readonly bhupuraGateCount: number;
  readonly symmetryGroupOrder: number;
  readonly depthOfConstructionGraph: number;
}

export interface LayerStatistic {
  readonly layerId: string;
  readonly sanskritName: string;
  readonly englishName: string;
  readonly primitiveCount: number;
  readonly dependencyCount: number;
  readonly executionOrderIndex: number;
}

export interface CompilerDiagnostics {
  readonly isValid: boolean;
  readonly errors: readonly CompilerDiagnostic[];
  readonly warnings: readonly CompilerDiagnostic[];
  readonly suggestions: readonly CompilerDiagnostic[];
  readonly statistics: GeometryStatistics;
  readonly layerStatistics: readonly LayerStatistic[];
  readonly compilationTimeMs: number;
}

// Intermediate Geometry Representation (IGR) Primitives

export type IGRPrimitiveType =
  | 'point'
  | 'line_segment'
  | 'triangle'
  | 'polygon'
  | 'circle'
  | 'arc'
  | 'lotus_petal_group'
  | 'bhupura_contour';

export interface IGRPointNode {
  readonly id: string;
  readonly type: 'point';
  readonly layerId: string;
  readonly relativeX: number; // Normalized -1.0 to 1.0 or ratio
  readonly relativeY: number;
  readonly label?: string;
  readonly role?: 'bindu' | 'marma' | 'vertex' | 'center';
  readonly constraints: readonly string[]; // IDs of constraints attached
}

export interface IGRLineSegmentNode {
  readonly id: string;
  readonly type: 'line_segment';
  readonly layerId: string;
  readonly startPointId: string;
  readonly endPointId: string;
  readonly orientation?: 'upward' | 'downward' | 'horizontal' | 'radial';
  readonly role?: 'shiva_triangle_edge' | 'shakti_triangle_edge' | 'axis' | 'boundary';
}

export interface IGRPolygonNode {
  readonly id: string;
  readonly type: 'triangle' | 'polygon';
  readonly layerId: string;
  readonly vertexPointIds: readonly string[];
  readonly edgeIds: readonly string[];
  readonly centroidPointId?: string;
  readonly areaRatio?: number;
  readonly isCircuitTriangle?: boolean;
  readonly circuitGroupIndex?: number;
}

export interface IGRCircleNode {
  readonly id: string;
  readonly type: 'circle';
  readonly layerId: string;
  readonly centerPointId: string;
  readonly radiusRatio: number; // Proportional base radius ratio
  readonly sanskritName?: string;
  readonly mekhalaIndex?: number;
}

export interface IGRLotusPetalGroupNode {
  readonly id: string;
  readonly type: 'lotus_petal_group';
  readonly layerId: string;
  readonly centerPointId: string;
  readonly petalCount: number;
  readonly innerRadiusRatio: number;
  readonly outerRadiusRatio: number;
  readonly petalShape: 'pointed' | 'rounded' | 'layered';
  readonly sanskritName?: string;
}

export interface IGRBhupuraNode {
  readonly id: string;
  readonly type: 'bhupura_contour';
  readonly layerId: string;
  readonly gateCount: number;
  readonly stepLayers: number;
  readonly baseRadiusRatio: number;
  readonly wallThicknessRatio: number;
}

export type IGRNode =
  | IGRPointNode
  | IGRLineSegmentNode
  | IGRPolygonNode
  | IGRCircleNode
  | IGRLotusPetalGroupNode
  | IGRBhupuraNode;

export interface IGREdge {
  readonly id: string;
  readonly sourceNodeId: string;
  readonly targetNodeId: string;
  readonly relationType: 'parent_of' | 'intersects_with' | 'concentric_to' | 'bounds' | 'derives_from';
}

export interface IGRLayer {
  readonly id: string;
  readonly sanskritName: string;
  readonly englishName: string;
  readonly orderIndex: number;
  readonly nodeIds: readonly string[];
  readonly isSacredEnclosure: boolean;
}

export interface IGRConstraint {
  readonly id: string;
  readonly type: 'golden_ratio' | 'confluence_marma' | 'symmetry_group' | 'tangent' | 'coincident';
  readonly targetNodeIds: readonly string[];
  readonly numericValue?: number;
  readonly formula?: string;
}

export interface ConstructionGraphNode {
  readonly id: string;
  readonly stepIndex: number;
  readonly stepName: string;
  readonly layerId: string;
  readonly primitiveIds: readonly string[];
  readonly dependsOnStepIds: readonly string[];
  readonly description: string;
}

export interface ConstructionGraph {
  readonly nodes: readonly ConstructionGraphNode[];
  readonly executionOrder: readonly string[]; // Step IDs in topological order
  readonly isAcyclic: boolean;
  readonly topologicalDepth: number;
}

/**
 * Intermediate Geometry Representation (IGR)
 * Permanent format-agnostic source of truth for solver input.
 */
export interface IntermediateGeometryRepresentation {
  readonly schemaVersion: string;
  readonly dslId: string;
  readonly titleSanskrit: string;
  readonly titleEnglish: string;
  readonly tradition: string;
  readonly symmetryGroup: string;
  readonly boundingBox: {
    readonly minX: number;
    readonly minY: number;
    readonly maxX: number;
    readonly maxY: number;
    readonly aspectRatio: number;
  };
  readonly nodes: Record<string, IGRNode>;
  readonly edges: readonly IGREdge[];
  readonly layers: readonly IGRLayer[];
  readonly constraints: readonly IGRConstraint[];
  readonly constructionGraph: ConstructionGraph;
  readonly metadata: {
    readonly compiledTimestamp: string;
    readonly compilerVersion: string;
    readonly deterministicHash: string;
    readonly isAuthenticShastric: boolean;
  };
}

export interface SGOSCompilerOptions {
  readonly strictValidation?: boolean;
  readonly maxGraphDepth?: number;
  readonly targetPrecisionDigits?: number;
  readonly traditionProfile?: string;
  readonly allowWarningsAsErrors?: boolean;
}

export interface SGOSCompilationResult {
  readonly igr: IntermediateGeometryRepresentation | null;
  readonly diagnostics: CompilerDiagnostics;
}

export type CompilationResult = SGOSCompilationResult;
