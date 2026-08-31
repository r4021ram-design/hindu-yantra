export type ProvenanceNodeType = 'Geometry' | 'DSL' | 'Citation' | 'Source' | 'Edition' | 'Reviewer' | 'SnapshotVersion';
export interface ProvenanceNode {
    id: string;
    type: ProvenanceNodeType;
    label: string;
    metadata: Record<string, any>;
}
export interface ProvenanceEdge {
    from: string;
    to: string;
    relationship: string;
}
export interface EvidenceProvenanceGraphReport {
    dslId: string;
    totalNodes: number;
    totalEdges: number;
    nodes: ProvenanceNode[];
    edges: ProvenanceEdge[];
    isChainUnbroken: boolean;
    graphRootId: string;
    graphLeafId: string;
}
export declare class SGOSEvidenceProvenanceGraph {
    /**
     * Constructs an auditable Evidence Provenance DAG: Geometry -> DSL -> Citation -> Source -> Edition -> Reviewer -> SnapshotVersion
     */
    static buildProvenanceGraph(dslId?: string): EvidenceProvenanceGraphReport;
}
