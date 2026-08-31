import { SGOSSceneGraph } from './scene-graph';
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
export declare class SGOSMeshCache {
    private static geometryCache;
    private static materialCache;
    private static gpuBufferCache;
    private static maxCacheEntries;
    /**
     * Get cached scene graph by OSGM deterministic hash
     */
    static getGeometry(hash: string): SGOSSceneGraph | null;
    /**
     * Put scene graph into cache keyed by OSGM hash
     */
    static putGeometry(hash: string, sceneGraph: SGOSSceneGraph): void;
    /**
     * Check if OSGM geometry is cached
     */
    static hasGeometry(hash: string): boolean;
    /**
     * GPU Buffer Cache
     */
    static getGPUBuffer(hash: string): CachedGPUBuffer | null;
    static putGPUBuffer(hash: string, buffer: CachedGPUBuffer): void;
    /**
     * Clear all caches
     */
    static clear(): void;
    /**
     * Cache inspection metrics
     */
    static getCacheStats(): {
        cachedGeometriesCount: number;
        cachedMaterialsCount: number;
        cachedGPUBuffersCount: number;
    };
}
