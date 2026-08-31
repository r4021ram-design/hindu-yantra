import { CompiledGeometryModel, YantraDSL } from '../types/dsl';
import { YantraMaterialType } from './mesh-3d-generator';
import { SGOSSceneGraph } from './scene-graph';
import { OptimizedSolvedGeometryModel } from '../optimization/types';
export interface Canvas3DRenderOptions {
    rotX?: number;
    rotY?: number;
    material?: YantraMaterialType;
    mode?: 'flat_relief' | 'maha_meru_pyramid';
    wireframe?: boolean;
    xrayMode?: boolean;
    explodedViewOffset?: number;
    crossSectionY?: number;
    measurementMode?: boolean;
    selectedVertexIds?: string[];
}
export declare class Canvas3DRenderer {
    /**
     * Render a 3D procedural mesh / OSGM Scene Graph onto an HTML5 Canvas context
     */
    static renderToCanvas(ctx: CanvasRenderingContext2D, width: number, height: number, target: YantraDSL | CompiledGeometryModel | OptimizedSolvedGeometryModel | SGOSSceneGraph, options?: Canvas3DRenderOptions): void;
}
