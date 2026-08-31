# SGOS Phase 2 - Constraint Engine Architecture Specification

**Module**: `packages/yantra-engine/src/constraints`  
**Status**: Implemented & Verified  
**Version**: 1.0.0-sgos.phase2  
**Author**: SGOS Architecture Council  

---

## 1. Executive Summary

The **SGOS Constraint Engine** serves as the mathematical rule enforcement core for every Sacred Geometry object before it reaches the Computational Solver.

The engine strictly enforces the platform principle:
> **The Constraint Engine does NOT generate geometry or rendering code. It validates, resolves, and enforces mathematical and Shastric constraints, emitting a deterministic `ConstraintReport` and `ValidatedIGR`.**

---

## 2. Constraint Pipeline Topology

```
             Intermediate Geometry Representation (IGR)
                                │
                                ▼
                    Constraint Resolution Stage
             (Rule Prioritization & Priority Queue)
                                │
                                ▼
                    Constraint Validation Stage
             (Geometric & Sacred Rule Verification)
                                │
                                ▼
                    Conflict Detection Stage
            (Detects Over-Constrained Rule Conflicts)
                                │
                                ▼
                     Constraint Report Generation
         (Satisfied vs Failed Counts, Errors, Diagnostics)
                                │
                                ▼
                          Validated IGR
                                │
                                ▼
                       Computational Solver
```

---

## 3. Supported Constraint Classes

### A. Geometric Constraints (`category: 'geometric'`)
1. `CoincidentPointConstraint`: Verifies that multiple point nodes share identical centroid $(x, y)$ coordinates within machine $\epsilon$ tolerance.
2. `CollinearConstraint`: Verifies collinearity across 3 or more point nodes.
3. `ConcentricConstraint`: Verifies concentricity across circles, lotus rings, and boundary mekhalas.
4. `ParallelConstraint`: Verifies line segment parallel orientation.
5. `PerpendicularConstraint`: Verifies right-angle orthogonal line intersections.
6. `EqualLengthConstraint`: Verifies equal line segment lengths.
7. `EqualRadiusConstraint`: Verifies equal radial bounds across circle groups.
8. `FixedAngleConstraint`: Verifies fixed angular orientations.
9. `SymmetryConstraint`: Verifies point group symmetry order ($C_n, D_n$).
10. `TangencyConstraint`: Verifies circle-line and circle-circle tangency bounds.

### B. Sacred Geometry Constraints (`category: 'sacred_geometry'`)
1. `BinduAtOriginConstraint`: Verifies central focal point ($P_0$) is located precisely at origin $(0.0, 0.0)$.
2. `LotusConcentricityConstraint`: Verifies all lotus rings are centered on Bindu.
3. `BhupuraSquarenessConstraint`: Verifies Bhupura earth citadel possesses 4 cardinal gates and valid step layers.
4. `TriangleOrientationConstraint`: Verifies Shiva (upward) and Shakti (downward) triangle orientations.
5. `NavavaranaOrderingConstraint`: Verifies monotonic enclosure layer sequence from Bindu outward to Bhupura.
6. `LayerContainmentConstraint`: Verifies spatial containment boundaries across sacred enclosures.
7. `RadialSymmetryConstraint`: Verifies radial cyclic point group symmetry ($C_8, C_16, C_24, C_32$).
8. `TraditionRulesConstraint`: Verifies lineage-specific Shastric rules (Srividya Kaula vs. Samaya vs. Temple style).

---

## 4. Constraint Solver & Conflict Detection

The `ConstraintSolver` executes constraints in a **Deterministic Priority Order** based on numerical `priority` (higher priority evaluated first):

```
Priority 10: Bindu At Origin, Navavarana Layer Ordering, Coincident Points
Priority 9 : Concentricity, Bhupura Squareness, Tradition Rules
Priority 8 : Symmetry Groups, Fixed Angles, Triangle Orientation
Priority 7 : Parallel, Perpendicular, Tangency, Layer Containment
Priority 6 : Equal Length, Equal Radius
```

### Conflict Detection Engine
Detects over-constrained or contradictory systems (e.g. multiple conflicting constraints targeting identical node sets), identifies priority winners, and generates `ConflictDiagnostic` records.

---

## 5. Incremental Validation Architecture

When an interactive UI or dynamic slider modifies specific AST nodes, the `IncrementalValidator` avoids re-evaluating the full constraint graph:

```typescript
const dirtyNodes = ['p_bindu'];
const validated = constraintEngine.validateIncremental(igr, dirtyNodes);
```

- **Dirty Node Tracking**: Only constraints whose `targetNodeIds` intersect with `dirtyNodeIds` are re-evaluated.
- **Cached Report Merging**: Re-evaluated constraint results are merged into the cached `ConstraintReport`, preserving 60 FPS performance.

---

## 6. Diagnostic Reporting Schema

Failed constraints generate structured diagnostic reports:

```typescript
export interface ConstraintDiagnostic {
  readonly constraintId: string;
  readonly code: string;            // e.g. "SGOS_S002_BINDU_OFF_CENTER"
  readonly message: string;         // Human readable explanation
  readonly severity: 'error' | 'warning' | 'suggestion';
  readonly affectedNodeIds: readonly string[];
  readonly suggestedFix?: string;  // Remediation advice
}
```

---

## 7. API Usage Example

```typescript
import { SGOSGeometryCompiler, SGOSConstraintEngine } from '@yantra/engine';

// 1. Compile DSL into IGR
const compileRes = SGOSGeometryCompiler.compile(sriDsl);

// 2. Validate IGR with Constraint Engine
const constraintEngine = new SGOSConstraintEngine();
const validated = constraintEngine.validate(compileRes.igr!);

if (validated.isValidated) {
  console.log('Geometry Passed All Constraints!');
} else {
  console.error('Failed Constraints:', validated.constraintReport.diagnostics);
}
```
