# SGKB Knowledge Graph Specification & Export Studio

**Package Scope**: `@yantra/engine` / Hindu Panchang Application  
**Specification Version**: 1.0.0-sgkb.knowledge-graph-specification  

---

## 1. Versioned Knowledge Graph Topology

Knowledge Graphs are versioned synchronously alongside published knowledge snapshots.

```text
Yantras -> Deities -> Mantras -> Scriptures -> Commentaries -> Glossary -> Lessons -> Timeline
```

---

## 2. Multi-Format Export Formats

1. **JSON-LD**: Web standard linked data format for search engine & academic indexing.
2. **RDF/XML**: W3C semantic web ontology format.
3. **GraphML**: Graph visualization format compatible with Gephi and Cytoscape academic research software.
