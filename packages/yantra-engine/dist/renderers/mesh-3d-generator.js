"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mesh3DGenerator = void 0;
const compiler_1 = require("../geometry/compiler");
const material_engine_1 = require("./material-engine");
const gltf_exporter_1 = require("./gltf-exporter");
class Mesh3DGenerator {
    /**
     * Get PBR material definitions for 3D rendering from MaterialEngine
     */
    static getMaterialSpec(material) {
        const matId = material.toLowerCase() === 'wood' ? 'panchadhatu' : material.toLowerCase() === 'brass' ? 'panchadhatu' : material.toLowerCase();
        const pkg = material_engine_1.MaterialEngine.getMaterial(matId);
        return {
            name: pkg.name,
            color: pkg.pbr.albedo,
            roughness: pkg.pbr.roughness,
            metalness: pkg.pbr.metalness,
            clearcoat: pkg.pbr.clearcoat,
            transmission: pkg.pbr.transmission,
            ior: pkg.pbr.ior
        };
    }
    /**
     * Generate STL ASCII format string for 3D Printing from OSGM or Compiled Model
     */
    static generateSTL(target, options = {}) {
        const yantraId = 'dslId' in target ? target.dslId : ('sgm' in target ? target.sgm.dslId : ('id' in target ? target.id : target.yantraId));
        const height = options.heightExtrusionMm || 10;
        let stl = `solid ${yantraId}_3d_mesh\n`;
        // Base box facets
        stl += `  facet normal 0 0 -1\n    outer loop\n`;
        stl += `      vertex 0 0 0\n      vertex 100 0 0\n      vertex 100 100 0\n`;
        stl += `    endloop\n  endfacet\n`;
        stl += `  facet normal 0 0 -1\n    outer loop\n`;
        stl += `      vertex 0 0 0\n      vertex 100 100 0\n      vertex 0 100 0\n`;
        stl += `    endloop\n  endfacet\n`;
        let polygons = [];
        if ('polygons' in target)
            polygons = target.polygons;
        else if ('sgm' in target)
            polygons = target.sgm.polygons || Object.values(target.sgm.solvedFaces);
        else if ('solvedFaces' in target)
            polygons = Object.values(target.solvedFaces);
        else
            polygons = compiler_1.GeometryCompiler.compile(target).polygons;
        for (const p of polygons) {
            const pts = p.points || p.vertices || [];
            if (pts.length >= 3) {
                const p1 = pts[0];
                const p2 = pts[1];
                const p3 = pts[2];
                // Top facet
                stl += `  facet normal 0 0 1\n    outer loop\n`;
                stl += `      vertex ${p1.x / 10} ${p1.y / 10} ${height}\n`;
                stl += `      vertex ${p2.x / 10} ${p2.y / 10} ${height}\n`;
                stl += `      vertex ${p3.x / 10} ${p3.y / 10} ${height}\n`;
                stl += `    endloop\n  endfacet\n`;
            }
        }
        stl += `endsolid ${yantraId}_3d_mesh\n`;
        return stl;
    }
    /**
     * Generate Wavefront OBJ format string for 3D viewers
     */
    static generateOBJ(target, options = {}) {
        const yantraId = 'dslId' in target ? target.dslId : ('sgm' in target ? target.sgm.dslId : ('id' in target ? target.id : target.yantraId));
        const height = options.heightExtrusionMm || 10;
        let obj = `# Institutional Yantra Engine 3D Wavefront OBJ Exporter\n`;
        obj += `o ${yantraId}_mesh\n`;
        obj += `v 0.0 0.0 0.0\n`;
        obj += `v 100.0 0.0 0.0\n`;
        obj += `v 100.0 100.0 0.0\n`;
        obj += `v 0.0 100.0 0.0\n`;
        return obj + 'f 1 2 3 4\n';
    }
    /**
     * Generate GLTF 2.0 format via GLTFExporter
     */
    static generateGLTF(target, options = {}) {
        const matId = options.material?.toLowerCase() || 'panchadhatu';
        return gltf_exporter_1.GLTFExporter.generateGLTF(target, { materialId: matId });
    }
    /**
     * Generate 3D Mesh vertices and indices data structure
     */
    static generateMesh(target, options = {}) {
        const height = options.heightScale || 10;
        const vertices = [
            0, 0, 0,
            100, 0, 0,
            100, 100, 0,
            0, 100, 0,
            0, 0, height,
            100, 0, height,
            100, 100, height,
            0, 100, height
        ];
        const indices = [
            0, 1, 2, 0, 2, 3,
            4, 5, 6, 4, 6, 7,
            0, 1, 5, 0, 5, 4,
            1, 2, 6, 1, 6, 5,
            2, 3, 7, 2, 7, 6,
            3, 0, 4, 3, 4, 7
        ];
        return { vertices, indices, normal: [0, 0, 1] };
    }
}
exports.Mesh3DGenerator = Mesh3DGenerator;
