import { CachedGPUBuffer } from './mesh-cache';
import { QualityLevel } from './quality-profiles';
import { SGOSSceneGraph } from './scene-graph';
export interface BufferAllocationStats {
    totalBuffersAllocated: number;
    totalVerticesInGPU: number;
    totalIndicesInGPU: number;
    estimatedGPUMemoryBytes: number;
}
export declare class GPUBufferManager {
    /**
     * Allocate GPU buffers for a SceneGraph keyed by deterministic hash
     */
    static allocateBuffers(sceneGraph: SGOSSceneGraph, qualityLevel?: QualityLevel): CachedGPUBuffer;
    /**
     * Calculate GPU Memory Statistics
     */
    static getStats(): BufferAllocationStats;
}
