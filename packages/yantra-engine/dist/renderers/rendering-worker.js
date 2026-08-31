"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SGOSRenderingWorker = void 0;
const scene_graph_1 = require("./scene-graph");
class SGOSRenderingWorker {
    /**
     * Process OSGM mesh generation asynchronously off the main UI thread
     */
    static async processTaskAsync(task) {
        const start = Date.now();
        const sceneGraph = scene_graph_1.SGOSSceneGraphEngine.fromOSGM(task.osgm);
        const durationMs = Date.now() - start;
        return {
            taskId: task.taskId,
            success: true,
            sceneGraph,
            durationMs
        };
    }
}
exports.SGOSRenderingWorker = SGOSRenderingWorker;
