"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SGOSMeshCache = void 0;
class SGOSMeshCache {
    static geometryCache = new Map();
    static materialCache = new Map();
    static gpuBufferCache = new Map();
    static maxCacheEntries = 50;
    /**
     * Get cached scene graph by OSGM deterministic hash
     */
    static getGeometry(hash) {
        const entry = this.geometryCache.get(hash);
        return entry ? entry.sceneGraph : null;
    }
    /**
     * Put scene graph into cache keyed by OSGM hash
     */
    static putGeometry(hash, sceneGraph) {
        if (this.geometryCache.size >= this.maxCacheEntries) {
            // Evict oldest entry (LRU)
            const oldestKey = this.geometryCache.keys().next().value;
            if (oldestKey)
                this.geometryCache.delete(oldestKey);
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
    static hasGeometry(hash) {
        return this.geometryCache.has(hash);
    }
    /**
     * GPU Buffer Cache
     */
    static getGPUBuffer(hash) {
        return this.gpuBufferCache.get(hash) || null;
    }
    static putGPUBuffer(hash, buffer) {
        this.gpuBufferCache.set(hash, buffer);
    }
    /**
     * Clear all caches
     */
    static clear() {
        this.geometryCache.clear();
        this.materialCache.clear();
        this.gpuBufferCache.clear();
    }
    /**
     * Cache inspection metrics
     */
    static getCacheStats() {
        return {
            cachedGeometriesCount: this.geometryCache.size,
            cachedMaterialsCount: this.materialCache.size,
            cachedGPUBuffersCount: this.gpuBufferCache.size
        };
    }
}
exports.SGOSMeshCache = SGOSMeshCache;
