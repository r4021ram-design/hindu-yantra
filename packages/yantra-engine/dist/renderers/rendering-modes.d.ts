import { CompiledGeometryModel } from '../types/dsl';
export type YantraRenderingMode = 'construction' | 'primary_triangles' | 'final_canonical' | 'topology';
export interface SplitScreenComparisonResult {
    leftReferenceSVG: string;
    rightEngineSVG: string;
    combinedSplitScreenSVG: string;
    metrics: {
        rmsError: number;
        maxVertexDeviation: number;
        differenceHeatmapData: {
            id: string;
            deviation: number;
            colorHex: string;
        }[];
    };
}
export declare class YantraModeRenderer {
    static readonly PRIMARY_TRIANGLE_COLORS: Record<string, string>;
    /**
     * Renders the Shri Yantra in one of the 4 strict distinct rendering modes:
     * 1. 'construction'
     * 2. 'primary_triangles'
     * 3. 'final_canonical'
     * 4. 'topology'
     */
    static renderMode(compiled: CompiledGeometryModel, mode: YantraRenderingMode, options?: {
        width?: number | string;
        height?: number | string;
    }): string;
    /**
     * Generates a complete split-screen visual & mathematical comparison:
     * Left: Chiodo Figure 11 Reference
     * Right: Engine Output
     * Overlay: Difference heatmap, Max vertex deviation, RMS error
     */
    static generateSplitScreenComparison(compiled: CompiledGeometryModel): SplitScreenComparisonResult;
}
