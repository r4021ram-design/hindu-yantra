# SGOS Phase 1 - Geometry Compiler Architecture Specification

**Module**: `packages/yantra-engine/src/compiler`  
**Status**: Implemented & Verified  
**Version**: 1.0.0-sgos.phase1  
**Author**: SGOS Architecture Council  

---

## 1. Executive Summary

The **SGOS Geometry Compiler** transforms raw declarative Geometry DSL (JSON/YAML) into an **Intermediate Geometry Representation (IGR)** and a Directed Acyclic Graph (**Construction Graph**). 

The compiler strictly adheres to the platform mandate:
> **The Geometry Compiler must NOT generate visual graphics (SVG, Canvas, or Meshes). Its sole responsibility is to compile, validate, resolve constraints, build the construction graph, and produce a deterministic IGR ready for consumption by the Computational Solver.**

---

## 2. Compiler Pipeline Topology

```
                  Geometry DSL (JSON/YAML)
                             │
                             ▼
                 Stage 1: Syntax Validation
                  (Schema & Required Fields)
                             │
                             ▼
                Stage 2: Semantic Validation
               (Boundary & Proportions Audit)
                             │
                             ▼
               Stage 3: Constraint Resolution
           (Golden Ratio Phi, Marma Confluences)
                             │
                             ▼
          Stage 4: Construction Graph Generation
            (Step-by-Step DAG Dependency Building)
                             │
                             ▼
               Stage 5: Topology Validation
                 (Cycle Detection via DFS)
                             │
                             ▼
                 Stage 6: IGR Generation
              (Abstract Topology & Metadata)
                             │
                             ▼
           Stage 7: Final Diagnostic Packaging
                (Errors, Warnings, Stats)
                             │
                             ▼
        Intermediate Geometry Representation (IGR)
                 (Ready for Solver)
```

---

## 3. Pipeline Stages & Responsibilities

### Stage 1: Syntax Validation (`SyntaxValidator`)
- Audits root object validity, required string `id`, and structural type correctness of `geometryRules`.
- Emits diagnostic error codes `SGOS_E001` through `SGOS_E008` if syntax bounds are violated.

### Stage 2: Semantic Validation (`SemanticValidator`)
- Verifies geometric ratios (e.g. radius ratios $0 < r \le 2.0$), concentric circle sequence monotonicity, and lotus ring petal bounds.
- Emits warnings (`SGOS_W010`, `SGOS_W011`) for non-monotonic radii or unusual Bhupura steps.
- Emits suggestions (`SGOS_S001`) recommending canonical traditional lotus petal counts (8, 16, 24, 32, 64, 108).

### Stage 3: Constraint Resolution (`ConstraintResolver`)
- Resolves proportional constraints:
  - Golden Ratio ($\Phi = 1.618033988749895$).
  - Marma point triple-confluence intersection constraints (42 nodes).
  - Cyclic symmetry group order ($C_n$).

### Stage 4 & 5: Construction Graph Generation & Topology Validation (`ConstructionGraphBuilder`)
- Builds the step-by-step procedural construction graph (Krama sequence: `Bindu` $\rightarrow$ `Primary Triangles` $\rightarrow$ `43 Sub-Triangles` $\rightarrow$ `Inner Lotus` $\rightarrow$ `Outer Lotus` $\rightarrow$ `Mekhalas` $\rightarrow$ `Bhupura`).
- Executes Depth-First Search (DFS) recursion to detect cyclic dependencies, guaranteeing the graph is an acyclic DAG.

### Stage 6: IGR Generation (`IGRGenerator`)
- Generates the immutable, deterministic **Intermediate Geometry Representation (IGR)** object containing abstract nodes, edges, layers, constraints, bounding boxes, and an FNV-1a deterministic hash.

### Stage 7: Diagnostic Packaging (`CompilerDiagnosticsBuilder`)
- Packages structured diagnostic reports containing errors, warnings, suggestions, compilation execution timing (ms), geometry statistics, and layer statistics.

---

## 4. Intermediate Geometry Representation (IGR) Schema

```typescript
export interface IntermediateGeometryRepresentation {
  readonly schemaVersion: string;         // e.g. "1.0.0"
  readonly dslId: string;                 // e.g. "sri_yantra"
  readonly titleSanskrit: string;
  readonly titleEnglish: string;
  readonly tradition: string;             // e.g. "Srividya Kaula"
  readonly symmetryGroup: string;         // e.g. "C_8"
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
```

---

## 5. Compiler API & Usage

```typescript
import { SGOSGeometryCompiler } from '@yantra/engine';

const rawDsl = {
  id: 'sri_yantra',
  geometryRules: {
    shriYantraCore: { shivaTriangles: 4, shaktiTriangles: 5 },
    lotusRings: [
      { id: 'l1', petals: 8, radiusRatio: 0.5 },
      { id: 'l2', petals: 16, radiusRatio: 0.7 }
    ],
    concentricCircles: [{ id: 'c1', radiusRatio: 0.8 }],
    bhupura: { enabled: true, steps: 3 }
  }
};

// Execute compilation pipeline
const result = SGOSGeometryCompiler.compile(rawDsl, { strictValidation: true });

if (result.diagnostics.isValid && result.igr) {
  console.log('Compilation Succeeded!');
  console.log('Deterministic Hash:', result.igr.metadata.deterministicHash);
  console.log('Total Triangles:', result.diagnostics.statistics.subTriangleCount);
} else {
  console.error('Compilation Errors:', result.diagnostics.errors);
}
```
