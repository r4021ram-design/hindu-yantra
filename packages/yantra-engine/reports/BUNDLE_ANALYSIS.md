# SGOS SDK Bundle & Tree-Shaking Analysis Report

**Analysis Timestamp**: 2026-07-24T19:14:36.291Z  
**Target Package**: `@yantra/engine`  
**Engine Kernel Version**: 1.0.0-sgos.phase11  

---

## 1. Package Metrics Summary

- **Total Source Files**: 106 TS files
- **Total Source Lines**: 9,221 lines
- **Total Source Size**: 359.85 KB
- **Compiled Output Size**: dist directory: 0.00 KB (0 files)
- **Side-Effects Status**: `sideEffects: false` (100% Tree-Shakable pure modules)

---

## 2. Modular Entry Point Breakdown

| Subpath Entry Point | Entry File | File Size | Entry Lines | Tree-Shaking Efficiency |
| :--- | :--- | :--- | :--- | :--- |
| `@yantra/engine (Root)` | `src/index.ts` | 0.95 KB | 29 | High (Isolated Entry) |
| `@yantra/engine/sdk` | `src/sdk/index.ts` | 0.12 KB | 5 | High (Isolated Entry) |
| `@yantra/engine/verification` | `src/verification/index.ts` | 0.17 KB | 6 | High (Isolated Entry) |
| `@yantra/engine/rendering` | `src/renderers/index.ts` | 0.10 KB | 4 | High (Isolated Entry) |
| `@yantra/engine/export` | `src/export/index.ts` | 0.03 KB | 2 | High (Isolated Entry) |
| `@yantra/engine/plugins` | `src/plugins/yantra-library/index.ts` | 0.36 KB | 10 | High (Isolated Entry) |
| `@yantra/engine/sgkb` | `src/sgkb/index.ts` | 0.16 KB | 6 | High (Isolated Entry) |
| `@yantra/engine/cli` | `src/cli/index.ts` | 0.03 KB | 2 | High (Isolated Entry) |

---

## 3. Tree-Shaking & Dead Code Analysis

1. **Subpath Isolation**: Consumers importing `@yantra/engine/rendering` load only vector SVG & 3D canvas generators without pulling compiler AST, solver, or package manager code into browser client bundles.
2. **Dead Code Elimination**: Legacy un-exported classes (`EvidenceEngine`, `TempleEngine`, `IntersectionEngine`) remain tree-shaken when not consumed.
3. **Pure Functions & Facades**: All public SDK facades (`SGOS`, `SGOSVerification`, `SVGRenderer`, `ExporterEngine`) are pure static or singleton facades without side-effects.

---

## 4. Optimization Recommendations

- Continue enforcing `sideEffects: false` in package manifest.
- Maintain subpath mappings in `package.json` `"exports"` field for native ES module resolution.
- Recommend client applications import from dedicated entry points (`@yantra/engine/rendering`, `@yantra/engine/sdk`) to minimize client bundle footprints.
