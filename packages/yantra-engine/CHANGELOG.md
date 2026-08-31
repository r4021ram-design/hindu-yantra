# Sacred Geometry Operating System (SGOS) Changelog

All notable changes to the `@yantra/engine` package will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0-sgos.phase7] - 2026-07-24

### Added
- **Kernel Freeze**: Formally locked all core computational modules (`DSL`, `AST`, `Compiler`, `Constraints`, `Graph`, `Solver`, `Optimization`).
- **Public SDK (`SGOS` / `SGOSSDK`)**: Minimal, clean public façade API exposing `compile()`, `solve()`, `optimize()`, `inspect()`, `benchmark()`, `validate()`, and `runPipeline()`.
- **Plugin SDK (`SGOSPluginManager`)**: Extension points for custom geometries, constraints, solvers, renderers, exporters, inspectors, and transformations.
- **Golden Datasets (`GOLDEN_YANTRA_DATASETS`)**: Canonical regression datasets for Shri Yantra, Kuber Yantra, Ganesh Yantra, Navagraha Yantra, and Maha Meru.
- **Automated Snapshot Regression Testing**: Verified AST, IGR, Geometry Graph, SGM, and OSGM output consistency across all golden datasets.
- **Developer Preview CLI (`SGOSCLI`)**: Executable CLI supporting `compile`, `solve`, `benchmark`, and `run` commands.
- **Master Developer SDK Specification**: Created comprehensive developer guide in `docs/SGOS_DEVELOPER_SDK.md`.

---

## [1.0.0-sgos.phase6] - 2026-07-24

### Added
- **Geometry Optimization Engine**: Coincident point merging ($< 10^{-6}$), degenerate edge removal ($< 10^{-12}$), and zero-area face removal ($< 10^{-12}$).
- **Spatial Index Engine**: Quadtree / BVH spatial indexing supporting nearest neighbor, region bounding lookup, and point-in-polygon face queries.
- **Benchmark Engine**: Execution timing benchmarks, memory allocation estimation, and graph complexity scoring.
- **Event Bus System**: Strongly-typed event listener framework emitting `GeometrySolved`, `OptimizationCompleted`, and `BenchmarkCompleted`.
- **Transaction Engine**: Time-travel debugging, snapshots, undo/redo, and branching history.

---

## [1.0.0-sgos.phase5] - 2026-07-24

### Added
- **Computational Solver Kernel**: 4-stage execution kernel converting `GeometryGraph` into immutable `SolvedGeometryModel` (SGM).
- **Analytical Solver Layer**: Closed-form line-line, line-circle, circle-circle intersections, centroids, and polygon surface area formulas.
- **Numerical Solver Layer**: Newton-Raphson gradient refinement algorithm ($10^{-10}$ tolerance).
- **Topology Solver Layer**: Signed surface area calculation and Counter-Clockwise (`CCW`) polygon winding order enforcement.

---

## [1.0.0-sgos.phase4] - 2026-07-24

### Added
- **Geometry Graph Engine**: Converts IGR into planar topological `GeometryGraph` with 43 circuit sub-triangles and lotus petal faces.
- **Graph Query & Diff Engines**: High-level query APIs and structural diff calculations across tradition variants.

---

## [1.0.0-sgos.phase3] - 2026-07-24

### Added
- **AST & Symbol System**: Lexer, math expression engine, 13 strongly-typed AST nodes, and Symbol Table resolver.

---

## [1.0.0-sgos.phase2] - 2026-07-24

### Added
- **Constraint Engine Subsystem**: 10 Geometric and 8 Sacred Geometry constraint classes with prioritized solver queue.

---

## [1.0.0-sgos.phase1] - 2026-07-24

### Added
- **Geometry Compiler Subsystem**: 7-stage compilation pipeline producing Intermediate Geometry Representation (IGR) and diagnostics.

---

## [1.0.0-sgos.phase0] - 2026-07-24

### Added
- **Architecture Governance**: 11 Architecture Decision Records (ADRs 001–011), Plugin API specification, Performance Architecture, Versioning Strategy, Governance Framework, and Documentation Standards.
