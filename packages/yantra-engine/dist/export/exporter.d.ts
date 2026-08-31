import { CompiledGeometryModel, YantraDSL } from '../types/dsl';
import { SVGRenderOptions } from '../renderers/svg-renderer';
import { Mesh3DOptions } from '../renderers/mesh-3d-generator';
export type ExportFormat = 'svg' | 'stl' | 'obj' | 'dxf' | 'json';
export type PrintSize = '2x2' | '3x3' | '4x4' | 'A4' | 'A3' | 'Temple';
export interface ExportResult {
    filename: string;
    format: ExportFormat;
    content: string;
    mimeType: string;
}
export declare class ExporterEngine {
    /**
     * Export Yantra in specified format (SVG, STL, OBJ, DXF, JSON)
     */
    static export(target: YantraDSL | CompiledGeometryModel, format: ExportFormat, options?: {
        renderOptions?: SVGRenderOptions;
        meshOptions?: Mesh3DOptions;
        printSize?: PrintSize;
    }): ExportResult;
}
