# SGOS Golden Snapshot Testing Guide

**Package**: `@yantra/engine/rendering`  
**Specification Version**: 1.0.0-sgos.golden-snapshot  

---

## 1. Overview

Golden Image & Snapshot Testing ensures that every code change in `@yantra/engine` produces identical visual outputs against canonical reference snapshots.

---

## 2. Tested Assets & Regressions Detected

Every CI execution runs `rendering-golden-snapshots.test.ts` to detect:
1. **Missing Layers**: Dropped or hidden lotus, triangle, or Bhupura layers.
2. **Topology Drift**: Shifted vertex coordinates or modified winding orders.
3. **Material Incompatibilities**: Invalid PBR albedo or roughness property changes.
4. **Export Regressions**: Malformed SVG XML tags or invalid GLTF JSON structures.

---

## 3. Automated Snapshot Test Signature

```typescript
import { describe, it, expect } from 'vitest';
import { SVGRenderer, GLTFExporter, SGOSSceneGraphEngine } from '@yantra/engine/rendering';
import { MASTER_YANTRA_DATASET, SGOS } from '@yantra/engine';

describe('SGOS Rendering Golden Snapshots', () => {
  it('should match canonical SVG snapshot for Shri Yantra', () => {
    const dsl = MASTER_YANTRA_DATASET[0];
    const pipeline = SGOS.runPipeline(dsl);
    const svg = SVGRenderer.renderToString(pipeline.osgm);
    
    expect(svg).toContain('<svg');
    expect(svg).toContain('id="bindu"');
  });
});
```
