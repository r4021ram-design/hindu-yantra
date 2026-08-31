import { CanonicalYantraEntry } from './canonical-library-dataset';

export interface GraphNode {
  id: string;
  label: string;
  type: 'yantra' | 'deity' | 'mantra' | 'scripture' | 'timeline' | 'glossary';
}

export interface GraphEdge {
  source: string;
  target: string;
  relationship: string;
}

export interface VersionedKnowledgeGraph {
  snapshotVersion: string;
  generatedAt: string;
  nodes: GraphNode[];
  edges: GraphEdge[];
}

export class KnowledgeGraphEngine {
  /**
   * Build a versioned Knowledge Graph from canonical dataset
   */
  public static buildVersionedGraph(dataset: CanonicalYantraEntry[], snapshotVersion: string = 'v1.0.0'): VersionedKnowledgeGraph {
    const nodes: GraphNode[] = [];
    const edges: GraphEdge[] = [];

    dataset.forEach(yantra => {
      // Yantra Node
      const yNodeId = `yantra:${yantra.id}`;
      nodes.push({ id: yNodeId, label: yantra.names.en, type: 'yantra' });

      // Deity Node
      const dNodeId = `deity:${yantra.deity.toLowerCase().replace(/\s+/g, '_')}`;
      if (!nodes.some(n => n.id === dNodeId)) {
        nodes.push({ id: dNodeId, label: yantra.deity, type: 'deity' });
      }
      edges.push({ source: yNodeId, target: dNodeId, relationship: 'presided_by_deity' });

      // Scripture Node
      const sNodeId = `scripture:${yantra.scripturalCitation.scripture.toLowerCase().replace(/\s+/g, '_')}`;
      if (!nodes.some(n => n.id === sNodeId)) {
        nodes.push({ id: sNodeId, label: yantra.scripturalCitation.scripture, type: 'scripture' });
      }
      edges.push({ source: yNodeId, target: sNodeId, relationship: 'cited_in_scripture' });
    });

    return {
      snapshotVersion,
      generatedAt: new Date().toISOString(),
      nodes,
      edges
    };
  }

  /**
   * Export Knowledge Graph to JSON-LD Format
   */
  public static exportJsonLd(graph: VersionedKnowledgeGraph): string {
    return JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'KnowledgeGraph',
      'version': graph.snapshotVersion,
      'nodes': graph.nodes.map(n => ({ '@id': n.id, 'name': n.label, 'type': n.type })),
      'edges': graph.edges.map(e => ({ 'source': e.source, 'target': e.target, 'relationship': e.relationship }))
    }, null, 2);
  }

  /**
   * Export Knowledge Graph to RDF/XML Format
   */
  public static exportRdfXml(graph: VersionedKnowledgeGraph): string {
    return `<?xml version="1.0"?>
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:sgkb="http://sgkb.org/schema#">
  <!-- SGKB Versioned Knowledge Graph ${graph.snapshotVersion} -->
  ${graph.nodes.map(n => `<rdf:Description rdf:about="${n.id}"><sgkb:label>${n.label}</sgkb:label><sgkb:type>${n.type}</sgkb:type></rdf:Description>`).join('\n  ')}
  ${graph.edges.map(e => `<rdf:Description rdf:about="${e.source}"><sgkb:${e.relationship} rdf:resource="${e.target}"/></rdf:Description>`).join('\n  ')}
</rdf:RDF>`;
  }

  /**
   * Export Knowledge Graph to GraphML Format (for Gephi / Cytoscape academic tools)
   */
  public static exportGraphML(graph: VersionedKnowledgeGraph): string {
    return `<?xml version="1.0" encoding="UTF-8"?>
<graphml xmlns="http://graphml.graphdrawing.org/xmlns">
  <graph id="SGKB_Graph_${graph.snapshotVersion}" edgedefault="directed">
    ${graph.nodes.map(n => `<node id="${n.id}"><data key="label">${n.label}</data><data key="type">${n.type}</data></node>`).join('\n    ')}
    ${graph.edges.map((e, idx) => `<edge id="e${idx}" source="${e.source}" target="${e.target}"><data key="rel">${e.relationship}</data></edge>`).join('\n    ')}
  </graph>
</graphml>`;
  }
}
