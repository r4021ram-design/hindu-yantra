import { SGOSSceneGraph } from './scene-graph';
import { MaterialPackage } from './materials/package-schema';

export interface CachedMeshEntry {
  readonly hash: string;
  readonly sceneGraph: SGOSSceneGraph;
  readonly timestamp: number;
  readonly sizeBytes: number;
}

export interface CachedGPUBuffer {
  readonly bufferId: string;
  readonly vertexCount: number;
  readonly indexCount: number;
  readonly isUploaded: boolean;
}

export class SGOSMeshCache {
  private static geometryCache = new Map<string, CachedMeshEntry>();
  private static materialCache = new Map<string, MaterialPackage>();
  private static gpuBufferCache = new Map<string, CachedGPUBuffer>();

  private static maxCacheEntries = 50;

  /**
   * Get cached scene graph by OSGM deterministic hash
   */
  public static getGeometry(hash: string): SGOSSceneGraph | null {
    const entry = this.geometryCache.get(hash);
    return entry ? entry.sceneGraph : null;
  }

  /**
   * Put scene graph into cache keyed by OSGM hash
   */
  public static putGeometry(hash: string, sceneGraph: SGOSSceneGraph): void {
    if (this.geometryCache.size >= this.maxCacheEntries) {
      // Evict oldest entry (LRU)
      const oldestKey = this.geometryCache.keys().next().value;
      if (oldestKey) this.geometryCache.delete(oldestKey);
    }

    this.geometryCache.set(hash, {
      hash,
      sceneGraph,
      timestamp: Date.now(),
      sizeBytes: sceneGraph.totalVertices * 32
    });
  }

  /**
   * Check if OSGM geometry is cached
   */
  public static hasGeometry(hash: string): boolean {
    return this.geometryCache.has(hash);
  }

  /**
   * GPU Buffer Cache
   */
  public static getGPUBuffer(hash: string): CachedGPUBuffer | null {
    return this.gpuBufferCache.get(hash) || null;
  }

  public static putGPUBuffer(hash: string, buffer: CachedGPUBuffer): void {
    this.gpuBufferCache.set(hash, buffer);
  }

  /**
   * Clear all caches
   */
  public static clear(): void {
    this.geometryCache.clear();
    this.materialCache.clear();
    this.gpuBufferCache.clear();
  }

  /**
   * Cache inspection metrics
   */
  public static getCacheStats() {
    return {
      cachedGeometriesCount: this.geometryCache.size,
      cachedMaterialsCount: this.materialCache.size,
      cachedGPUBuffersCount: this.gpuBufferCache.size
    };
  }
}
