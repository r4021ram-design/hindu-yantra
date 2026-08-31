export type GraphNodeType = 'point' | 'intersection' | 'marma' | 'centroid' | 'vertex';
export type GraphEdgeType = 'segment' | 'arc' | 'boundary' | 'ray';
export type GraphFaceType = 'sub_triangle' | 'lotus_petal' | 'circle_enclosure' | 'bhupura_gate';
export interface GraphNode {
    readonly id: string;
    readonly type: GraphNodeType;
    readonly layerId: string;
    readonly relativeX: number;
    readonly relativeY: number;
    readonly adjacentNodeIds: readonly string[];
    readonly connectedEdgeIds: readonly string[];
    readonly parentFaceIds: readonly string[];
    readonly evidenceReferences: readonly string[];
}
export interface GraphEdge {
    readonly id: string;
    readonly type: GraphEdgeType;
    readonly layerId: string;
    readonly startNodeId: string;
    readonly endNodeId: string;
    readonly length?: number;
    readonly adjacentFaceIds: readonly string[];
    readonly evidenceReferences: readonly string[];
}
export interface GraphFace {
    readonly id: string;
    readonly type: GraphFaceType;
    readonly layerId: string;
    readonly nodeIds: readonly string[];
    readonly edgeIds: readonly string[];
    readonly centroidNodeId?: string;
    readonly areaRatio?: number;
    readonly isCircuitPolygon?: boolean;
    readonly circuitGroupIndex?: number;
    readonly evidenceReferences: readonly string[];
}
export interface GraphRegion {
    readonly id: string;
    readonly nameSanskrit: string;
    readonly nameEnglish: string;
    readonly orderIndex: number;
    readonly faceIds: readonly string[];
    readonly boundaryEdgeIds: readonly string[];
    readonly isSacredEnclosure: boolean;
}
export interface GraphLayer {
    readonly id: string;
    readonly sanskritName: string;
    readonly englishName: string;
    readonly orderIndex: number;
    readonly nodeIds: readonly string[];
    readonly edgeIds: readonly string[];
    readonly faceIds: readonly string[];
}
export interface GeometryGraph {
    readonly dslId: string;
    readonly tradition: string;
    readonly symmetryGroup: string;
    readonly nodes: Record<string, GraphNode>;
    readonly edges: Record<string, GraphEdge>;
    readonly faces: Record<string, GraphFace>;
    readonly regions: readonly GraphRegion[];
    readonly layers: readonly GraphLayer[];
    readonly outerBoundaryEdgeIds: readonly string[];
    readonly connectedComponentsCount: number;
    readonly isPlanar: boolean;
    readonly metadata: {
        readonly nodeCount: number;
        readonly edgeCount: number;
        readonly faceCount: number;
        readonly regionCount: number;
        readonly generatedTimestamp: string;
    };
}
export interface GraphTopologyDiff {
    readonly graphAId: string;
    readonly graphBId: string;
    readonly areIdentical: boolean;
    readonly addedNodeIds: readonly string[];
    readonly removedNodeIds: readonly string[];
    readonly addedEdgeIds: readonly string[];
    readonly removedEdgeIds: readonly string[];
    readonly addedFaceIds: readonly string[];
    readonly removedFaceIds: readonly string[];
    readonly modifiedLayers: readonly string[];
    readonly traditionDifference?: {
        readonly traditionA: string;
        readonly traditionB: string;
        readonly structuralDeltas: readonly string[];
    };
}
export interface GraphInspectionReport {
    readonly dslId: string;
    readonly nodeSummary: {
        readonly totalNodes: number;
        readonly marmaPointsCount: number;
        readonly binduCentroidCount: number;
    };
    readonly edgeSummary: {
        readonly totalEdges: number;
        readonly boundaryEdgesCount: number;
    };
    readonly faceSummary: {
        readonly totalFaces: number;
        readonly circuitTrianglesCount: number;
        readonly lotusPetalsCount: number;
    };
    readonly connectivityMatrix: Record<string, readonly string[]>;
    readonly constraintBindingsCount: number;
}
