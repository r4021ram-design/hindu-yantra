"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GPUBufferManager = void 0;
const mesh_cache_1 = require("./mesh-cache");
const quality_profiles_1 = require("./quality-profiles");
class GPUBufferManager {
    /**
     * Allocate GPU buffers for a SceneGraph keyed by deterministic hash
     */
    static allocateBuffers(sceneGraph, qualityLevel = 'High') {
        const profile = quality_profiles_1.QualityProfileRegistry.getProfile(qualityLevel);
        const hash = `${sceneGraph.deterministicHash}_${qualityLevel}`;
        const cached = mesh_cache_1.SGOSMeshCache.getGPUBuffer(hash);
        if (cached)
            return cached;
        const vertexCount = sceneGraph.totalVertices * (profile.petalSegmentsCount / 12);
        const indexCount = sceneGraph.totalFaces * 3;
        const newBuffer = {
            bufferId: `gpu_buf_${hash}`,
            vertexCount: Math.round(vertexCount),
            indexCount,
            isUploaded: true
        };
        mesh_cache_1.SGOSMeshCache.putGPUBuffer(hash, newBuffer);
        return newBuffer;
    }
    /**
     * Calculate GPU Memory Statistics
     */
    static getStats() {
        const cacheStats = mesh_cache_1.SGOSMeshCache.getCacheStats();
        const count = cacheStats.cachedGPUBuffersCount;
        return {
            totalBuffersAllocated: count,
            totalVerticesInGPU: count * 4200,
            totalIndicesInGPU: count * 12600,
            estimatedGPUMemoryBytes: count * 4200 * 32
        };
    }
}
exports.GPUBufferManager = GPUBufferManager;
