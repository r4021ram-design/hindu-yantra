import { OptimizedSolvedGeometryModel } from '../optimization/types';
export interface RenderingWorkerTask {
    readonly taskId: string;
    readonly osgm: OptimizedSolvedGeometryModel;
    readonly qualityLevel?: string;
}
export declare class SGOSRenderingWorker {
    /**
     * Process OSGM mesh generation asynchronously off the main UI thread
     */
    static processTaskAsync(task: RenderingWorkerTask): Promise<{
        taskId: string;
        success: boolean;
        sceneGraph: import("./scene-graph").SGOSSceneGraph;
        durationMs: number;
    }>;
}
