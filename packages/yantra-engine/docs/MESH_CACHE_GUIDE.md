# SGOS Deterministic Mesh Cache Guide

**Package**: `@yantra/engine/rendering`  
**Specification Version**: 1.0.0-sgos.mesh-cache  

---

## 1. Hash-Keyed Cache Architecture

`SGOSMeshCache` prevents redundant 3D mesh tessellation and vertex buffer creation by caching scene graphs and GPU array buffers using the **OSGM Deterministic Hash** (`provenance.deterministicHash`).

```text
OSGM Hash -> Key Lookup -> Hit -> Return Cached SceneGraph & GPU Buffer
                     -> Miss -> Generate SceneGraph -> Store in Cache -> Return
```

---

## 2. API Usage

```typescript
import { SGOSMeshCache, SGOSSceneGraphEngine } from '@yantra/engine/rendering';

const hash = osgm.provenance.deterministicHash;

if (SGOSMeshCache.hasGeometry(hash)) {
  const sceneGraph = SGOSMeshCache.getGeometry(hash)!;
} else {
  const sceneGraph = SGOSSceneGraphEngine.fromOSGM(osgm);
  SGOSMeshCache.putGeometry(hash, sceneGraph);
}
```

---

## 3. LRU Cache Eviction Policy

- Maximum Cache Capacity: **50 Scene Graphs**
- Eviction Algorithm: **Least Recently Used (LRU)**
- Cache Management: `SGOSMeshCache.clear()` clears geometry, material, and GPU memory caches.
