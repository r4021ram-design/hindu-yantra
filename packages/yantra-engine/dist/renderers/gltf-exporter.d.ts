import { OptimizedSolvedGeometryModel } from '../optimization/types';
import { SolvedGeometryModel } from '../solver/types';
export interface GLTFExportResult {
    readonly filename: string;
    readonly gltfJsonStr: string;
    readonly mimeType: string;
}
export declare class GLTFExporter {
    /**
     * Export OSGM or SGM into valid GLTF 2.0 JSON format string
     */
    static generateGLTF(target: OptimizedSolvedGeometryModel | SolvedGeometryModel, options?: {
        materialId?: string;
    }): GLTFExportResult;
    private static hexToRgba;
}
