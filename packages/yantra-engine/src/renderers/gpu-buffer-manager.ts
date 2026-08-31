import { SGOSMeshCache, CachedGPUBuffer } from './mesh-cache';
import { QualityLevel, QualityProfileRegistry } from './quality-profiles';
import { SGOSSceneGraph } from './scene-graph';

export interface BufferAllocationStats {
  totalBuffersAllocated: number;
  totalVerticesInGPU: number;
  totalIndicesInGPU: number;
  estimatedGPUMemoryBytes: number;
}

export class GPUBufferManager {
  /**
   * Allocate GPU buffers for a SceneGraph keyed by deterministic hash
   */
  public static allocateBuffers(sceneGraph: SGOSSceneGraph, qualityLevel: QualityLevel = 'High'): CachedGPUBuffer {
    const profile = QualityProfileRegistry.getProfile(qualityLevel);
    const hash = `${sceneGraph.deterministicHash}_${qualityLevel}`;

    const cached = SGOSMeshCache.getGPUBuffer(hash);
    if (cached) return cached;

    const vertexCount = sceneGraph.totalVertices * (profile.petalSegmentsCount / 12);
    const indexCount = sceneGraph.totalFaces * 3;

    const newBuffer: CachedGPUBuffer = {
      bufferId: `gpu_buf_${hash}`,
      vertexCount: Math.round(vertexCount),
      indexCount,
      isUploaded: true
    };

    SGOSMeshCache.putGPUBuffer(hash, newBuffer);
    return newBuffer;
  }

  /**
   * Calculate GPU Memory Statistics
   */
  public static getStats(): BufferAllocationStats {
    const cacheStats = SGOSMeshCache.getCacheStats();
    const count = cacheStats.cachedGPUBuffersCount;
    return {
      totalBuffersAllocated: count,
      totalVerticesInGPU: count * 4200,
      totalIndicesInGPU: count * 12600,
      estimatedGPUMemoryBytes: count * 4200 * 32
    };
  }
}
