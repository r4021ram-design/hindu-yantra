import { CompiledGeometryModel, YantraDSL } from '../types/dsl';
import { SVGRenderer, SVGRenderOptions } from '../renderers/svg-renderer';
import { Mesh3DGenerator, Mesh3DOptions } from '../renderers/mesh-3d-generator';
import { GeometryCompiler } from '../geometry/compiler';
import { TempleEngine } from '../engine/temple-engine';

export type ExportFormat = 'svg' | 'stl' | 'obj' | 'dxf' | 'json';
export type PrintSize = '2x2' | '3x3' | '4x4' | 'A4' | 'A3' | 'Temple';

export interface ExportResult {
  filename: string;
  format: ExportFormat;
  content: string;
  mimeType: string;
}

export class ExporterEngine {
  /**
   * Export Yantra in specified format (SVG, STL, OBJ, DXF, JSON)
   */
  public static export(
    target: YantraDSL | CompiledGeometryModel,
    format: ExportFormat,
    options: { renderOptions?: SVGRenderOptions; meshOptions?: Mesh3DOptions; printSize?: PrintSize } = {}
  ): ExportResult {
    const yantraId = 'id' in target ? target.id : target.yantraId;
    const printSize = options.printSize || '4x4';

    switch (format) {
      case 'svg': {
        const svgStr = SVGRenderer.renderToString(target, options.renderOptions);
        return {
          filename: `${yantraId}_${printSize}.svg`,
          format: 'svg',
          content: svgStr,
          mimeType: 'image/svg+xml'
        };
      }
      case 'stl': {
        const stlStr = Mesh3DGenerator.generateSTL(target, options.meshOptions);
        return {
          filename: `${yantraId}_3d_print_${printSize}.stl`,
          format: 'stl',
          content: stlStr,
          mimeType: 'model/stl'
        };
      }
      case 'obj': {
        const objStr = Mesh3DGenerator.generateOBJ(target, options.meshOptions);
        return {
          filename: `${yantraId}_3d_${printSize}.obj`,
          format: 'obj',
          content: objStr,
          mimeType: 'model/obj'
        };
      }
      case 'dxf': {
        const compiled = 'geometryRules' in target ? GeometryCompiler.compile(target as YantraDSL) : (target as any);
        const dxfStr = TempleEngine.exportDXF(compiled);
        return {
          filename: `${yantraId}_cnc_laser_${printSize}.dxf`,
          format: 'dxf',
          content: dxfStr,
          mimeType: 'application/dxf'
        };
      }
      case 'json':
      default: {
        const jsonStr = JSON.stringify(target, null, 2);
        return {
          filename: `${yantraId}_dsl.json`,
          format: 'json',
          content: jsonStr,
          mimeType: 'application/json'
        };
      }
    }
  }
}
