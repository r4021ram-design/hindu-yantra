# SGOS Phase 4 - Geometry Graph Engine Architecture Specification

**Module**: `packages/yantra-engine/src/graph`  
**Status**: Implemented & Verified  
**Version**: 1.0.0-sgos.phase4  
**Author**: SGOS Architecture Council  

---

## 1. Executive Summary

The **SGOS Geometry Graph Engine** transforms an Intermediate Geometry Representation (IGR) into a fully connected, topological **Geometry Graph** (`GeometryGraph`).

The engine enforces the platform mandate:
> **The Geometry Graph Engine contains zero rendering logic. It provides canonical topological data structures, planar face extractions, boundary traversals, query APIs, graph diffing, and developer inspection reports consumed by the Computational Solver, AI Knowledge Engine, and downstream platform engines.**

---

## 2. Pipeline Topology

```
                  Geometry DSL (JSON/YAML)
                             │
                             ▼
                    Geometry AST & Symbols
                             │
                             ▼
                    SGOS Geometry Compiler
                             │
                             ▼
        Intermediate Geometry Representation (IGR)
                             │
                             ▼
                 Geometry Graph Builder
         (Extracts Nodes, Edges, Faces, Regions)
                             │
                             ▼
                 Topology Geometry Graph (`GeometryGraph`)
                             │
            ┌────────────────┼────────────────┐
            ▼                ▼                ▼
     Graph Query Engine   Graph Diff Engine  Graph Inspector
   (`findAllTriangles`)  (`compareGraphs`)  (`inspectGraph`)
            │                │                │
            └────────────────┼────────────────┘
                             │
                             ▼
                 SGOS Constraint Engine
                             │
                             ▼
                   Computational Solver
```

---

## 3. Graph Model Specification

### Elements
1. **GraphNode**: Points, Intersections, Marma Confluence Points, Bindu Centroid, Vertices. Includes `adjacentNodeIds`, `connectedEdgeIds`, `parentFaceIds`.
2. **GraphEdge**: Segments, Arcs, Boundary Lines, Rays. Includes `startNodeId`, `endNodeId`, `adjacentFaceIds`.
3. **GraphFace**: Sub-triangles (43 canonical circuit triangles for Shri Yantra), Lotus Petals, Circle Enclosures, Bhupura Gates.
4. **GraphRegion**: Sacred Enclosure Regions (Navavarana Enclosures 1 through 9).
5. **GraphLayer**: Layer groupings ordering nodes, edges, and faces from Bindu outward to Bhupura.

---

## 4. Graph Algorithms & Subsystems

### A. Topology Graph Builder (`GeometryGraphBuilder`)
Constructs the connected graph topology, extracts 43 circuit sub-triangles, radial lotus petal faces, concentric boundary edges, and computes planarity and connected component counts.

### B. Graph Query Engine (`GraphQueryEngine`)
Provides high-level topological queries reusable by AI, Solver, and plugins:
- `findAllTriangles()`: Returns all 43 circuit sub-triangles.
- `findAllPetals()`: Returns all 24 lotus petal faces.
- `findAllRegions()`: Returns sacred enclosure regions.
- `findNeighboringFaces(faceId)`: Returns adjacent faces sharing edges or vertices.
- `findOuterBoundary()`: Returns outer Bhupura boundary edges.
- `findLayerHierarchy()`: Returns layers ordered from Bindu outward.

### C. Graph Diff Engine (`GraphDiffEngine`)
Compares two `GeometryGraph` topologies across versions, traditions (Srividya vs. Kaula vs. Samaya), or solver outputs, generating structured `GraphTopologyDiff` reports detailing added/removed nodes, edges, faces, and tradition deltas.

### D. Graph Inspector (`GraphInspector`)
Produces developer-oriented inspection reports (`GraphInspectionReport`) summarizing node counts, marma points, boundary edges, face types, connectivity matrices, and constraint bindings.

---

## 5. API Usage Example

```typescript
import {
  SGOSGeometryCompiler,
  SGOSGeometryGraphEngine
} from '@yantra/engine';

// 1. Compile DSL to IGR
const compileRes = SGOSGeometryCompiler.compile(sriDsl);

// 2. Build Topological Geometry Graph
const graph = SGOSGeometryGraphEngine.buildGraph(compileRes.igr!);

// 3. Instantiate Query Engine
const queryEngine = SGOSGeometryGraphEngine.createQueryEngine(graph);

const subTriangles = queryEngine.findAllTriangles();
console.log('Total Circuit Sub-Triangles:', subTriangles.length); // 43

const neighbors = queryEngine.findNeighboringFaces('face_sub_triangle_1');
console.log('Adjacent Faces:', neighbors.length);

// 4. Inspect Graph Topology
const report = SGOSGeometryGraphEngine.inspectGraph(graph);
console.log('Total Marma Nodes:', report.nodeSummary.marmaPointsCount);
```
