# SGOS Phase 5 - Computational Solver Kernel Architecture Specification

**Module**: `packages/yantra-engine/src/solver`  
**Status**: Implemented & Verified  
**Version**: 1.0.0-sgos.phase5  
**Author**: SGOS Architecture Council  

---

## 1. Executive Summary

The **SGOS Computational Solver Kernel** is the mathematical execution engine of the Sacred Geometry Operating System. It transforms a validated `GeometryGraph` into a solved, immutable **Solved Geometry Model (SGM)** (`SolvedGeometryModel`).

The solver strictly adheres to the platform mandate:
> **The Computational Solver computes geometry. It does NOT generate visual graphics (SVG or Canvas) and does NOT generate 3D meshes. It produces exact solved coordinates, solved topology, constraint reports, and solver diagnostics consumed downstream by the Mesh Engine and Renderers.**

---

## 2. Solver Pipeline Topology

```
                   Geometry Graph (`GeometryGraph`)
                                 │
                                 ▼
                     Stage 1: Constraint Validation
                  (Runs SGOSConstraintEngine Audit)
                                 │
                                 ▼
                     Stage 2: Analytical Solver
                (Closed-form Line/Circle Intersections)
                                 │
                                 ▼
                     Stage 3: Numerical Solver
             (Newton-Raphson Gradient Refinement < 1e-10)
                                 │
                                 ▼
                     Stage 4: Topology Solver
           (Enforces Counter-Clockwise CCW Winding & Faces)
                                 │
                                 ▼
                    Solved Geometry Model (SGM)
                  (Immutable Math Source of Truth)
                                 │
                                 ▼
                   Mesh Engine & Export Renderers
```

---

## 3. Solver Layers & Responsibilities

### Layer 1: Constraint Validation Stage (`SGOSConstraintEngine`)
Evaluates coincident, concentric, symmetry, tangency, equal length, equal radius, fixed angles, and sacred constraints before solving.

### Layer 2: Analytical Solver (`AnalyticalSolver`)
Solves exact closed-form geometric relationships:
- `intersectLines(p1, p2, p3, p4)`: Solves line-line intersection.
- `intersectLineCircle(p1, p2, center, r)`: Solves line-circle intersection points.
- `intersectCircles(c1, r1, c2, r2)`: Solves circle-circle intersection points.
- `computeCentroid(vertices)`: Solves exact 2D planar polygon centroid $(x, y)$.
- `computePolygonArea(vertices)`: Solves exact polygon surface area using the Shoelace algorithm.

### Layer 3: Numerical Solver (`NumericalSolver`)
Iterative refinement engine for complex node systems lacking closed-form analytical solutions:
- **Newton-Raphson & Gradient Refinement**: Iteratively minimizes residual constraint errors.
- **Configurable Convergence Tolerance**: Defaults to $10^{-10}$ ($0.0000000001$).
- **Maximum Iteration Bound**: Defaults to 100 iterations.
- Emits structured `IterationStats` and `NumericalStabilityReport`.

### Layer 4: Topology Solver (`TopologySolver`)
Maintains planar face consistency and polygon winding order:
- `getWindingOrder(vertices)`: Calculates signed surface area to determine `CCW` vs `CW`.
- `enforceCCW(vertices)`: Guarantees Counter-Clockwise (`CCW`) vertex ordering for all solved polygon faces.

---

## 4. Solved Geometry Model (SGM) Schema

```typescript
export interface SolvedGeometryModel {
  readonly dslId: string;
  readonly tradition: string;
  readonly symmetryGroup: string;
  readonly viewportSize: number;           // e.g. 1000
  readonly solvedCoordinates: Record<string, SolvedPoint2D>;
  readonly solvedEdges: Record<string, SolvedEdgeCoordinates>;
  readonly solvedFaces: Record<string, SolvedFaceCoordinates>;
  readonly solvedRegions: readonly SolvedRegionCoordinates[];
  readonly solverReport: SolverReport;
  readonly provenance: {
    readonly solverVersion: string;
    readonly algorithmVersion: string;
    readonly generatedTimestamp: string;
    readonly deterministicHash: string;
  };
}
```

---

## 5. API Usage Example

```typescript
import {
  SGOSGeometryCompiler,
  SGOSGeometryGraphEngine,
  SGOSComputationalSolverKernel
} from '@yantra/engine';

// 1. Compile DSL -> IGR
const compileRes = SGOSGeometryCompiler.compile(sriDsl);

// 2. Build Geometry Graph
const graph = SGOSGeometryGraphEngine.buildGraph(compileRes.igr!);

// 3. Solve Geometry -> Solved Geometry Model (SGM)
const sgm = SGOSComputationalSolverKernel.solve(graph, {
  viewportSize: 1000,
  convergenceTolerance: 1e-10,
  maxIterations: 100
});

console.log('SGM Solved Coordinates:', Object.keys(sgm.solvedCoordinates).length);
console.log('SGM Solved Circuit Faces:', Object.keys(sgm.solvedFaces).length);
console.log('Deterministic Hash:', sgm.provenance.deterministicHash);
```
