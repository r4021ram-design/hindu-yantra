import { SGOSSceneGraphEngine } from './scene-graph';
import { OptimizedSolvedGeometryModel } from '../optimization/types';

export interface RenderingWorkerTask {
  readonly taskId: string;
  readonly osgm: OptimizedSolvedGeometryModel;
  readonly qualityLevel?: string;
}

export class SGOSRenderingWorker {
  /**
   * Process OSGM mesh generation asynchronously off the main UI thread
   */
  public static async processTaskAsync(task: RenderingWorkerTask) {
    const start = Date.now();
    const sceneGraph = SGOSSceneGraphEngine.fromOSGM(task.osgm);
    const durationMs = Date.now() - start;

    return {
      taskId: task.taskId,
      success: true,
      sceneGraph,
      durationMs
    };
  }
}
