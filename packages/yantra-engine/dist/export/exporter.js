"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExporterEngine = void 0;
const svg_renderer_1 = require("../renderers/svg-renderer");
const mesh_3d_generator_1 = require("../renderers/mesh-3d-generator");
const compiler_1 = require("../geometry/compiler");
const temple_engine_1 = require("../engine/temple-engine");
class ExporterEngine {
    /**
     * Export Yantra in specified format (SVG, STL, OBJ, DXF, JSON)
     */
    static export(target, format, options = {}) {
        const yantraId = 'id' in target ? target.id : target.yantraId;
        const printSize = options.printSize || '4x4';
        switch (format) {
            case 'svg': {
                const svgStr = svg_renderer_1.SVGRenderer.renderToString(target, options.renderOptions);
                return {
                    filename: `${yantraId}_${printSize}.svg`,
                    format: 'svg',
                    content: svgStr,
                    mimeType: 'image/svg+xml'
                };
            }
            case 'stl': {
                const stlStr = mesh_3d_generator_1.Mesh3DGenerator.generateSTL(target, options.meshOptions);
                return {
                    filename: `${yantraId}_3d_print_${printSize}.stl`,
                    format: 'stl',
                    content: stlStr,
                    mimeType: 'model/stl'
                };
            }
            case 'obj': {
                const objStr = mesh_3d_generator_1.Mesh3DGenerator.generateOBJ(target, options.meshOptions);
                return {
                    filename: `${yantraId}_3d_${printSize}.obj`,
                    format: 'obj',
                    content: objStr,
                    mimeType: 'model/obj'
                };
            }
            case 'dxf': {
                const compiled = 'geometryRules' in target ? compiler_1.GeometryCompiler.compile(target) : target;
                const dxfStr = temple_engine_1.TempleEngine.exportDXF(compiled);
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
exports.ExporterEngine = ExporterEngine;
