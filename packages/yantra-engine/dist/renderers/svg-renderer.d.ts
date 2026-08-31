import { CompiledGeometryModel, YantraDSL } from '../types/dsl';
import { SGOSSceneGraph } from './scene-graph';
import { OptimizedSolvedGeometryModel } from '../optimization/types';
export interface SVGRenderOptions {
    activeLayerId?: string;
    navavaranaFilter?: number;
    highlightElement?: 'bindu' | 'triangle' | 'lotus' | 'bhupura';
    theme?: 'gold' | 'parchment' | 'dark' | 'copper' | 'blueprint' | 'light' | 'canonical_blueprint' | 'traditional_poster' | 'multi_stroke_cad' | 'engineering_blueprint' | 'avarana_callout';
    strokeWidth?: number;
    width?: number | string;
    height?: number | string;
    showFills?: boolean;
    showLabels?: boolean;
    showCalloutLines?: boolean;
}
export declare class SVGRenderer {
    /**
     * Render a CompiledGeometryModel, YantraDSL, SGOSSceneGraph, or OSGM into a complete SVG string
     */
    static renderToString(target: CompiledGeometryModel | YantraDSL | SGOSSceneGraph | OptimizedSolvedGeometryModel, options?: SVGRenderOptions): string;
    private static getAvaranaIndexFromLayerId;
    private static getThemeColors;
}
