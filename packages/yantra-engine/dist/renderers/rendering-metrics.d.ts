import { SGOSSceneGraph } from './scene-graph';
export interface RenderingTelemetry {
    readonly frameTimeMs: number;
    readonly fps: number;
    readonly gpuMemoryBytes: number;
    readonly drawCallsCount: number;
    readonly triangleCount: number;
    readonly vertexCount: number;
    readonly meshSizeBytes: number;
    readonly timestamp: string;
}
export declare class RenderingMetricsCollector {
    private static telemetryHistory;
    /**
     * Record telemetry sample for a rendered Scene Graph
     */
    static recordMetrics(sceneGraph: SGOSSceneGraph, frameTimeMs?: number): RenderingTelemetry;
    /**
     * Get latest telemetry snapshot
     */
    static getLatestTelemetry(): RenderingTelemetry | null;
    /**
     * Generate Markdown Telemetry Summary
     */
    static generateMetricsReport(sceneGraph: SGOSSceneGraph): string;
}
