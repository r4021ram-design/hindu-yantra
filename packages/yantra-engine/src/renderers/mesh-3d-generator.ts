import { CompiledGeometryModel, YantraDSL } from '../types/dsl';
import { GeometryCompiler } from '../geometry/compiler';
import { OptimizedSolvedGeometryModel } from '../optimization/types';
import { SolvedGeometryModel } from '../solver/types';
import { MaterialEngine } from './material-engine';
import { GLTFExporter, GLTFExportResult } from './gltf-exporter';

export type YantraMaterialType = 'Panchadhatu' | 'Gold' | 'Silver' | 'Copper' | 'Brass' | 'Crystal' | 'Marble' | 'Wood' | 'Glass';

export interface Mesh3DOptions {
  mode?: 'flat_relief' | 'maha_meru_pyramid' | 'cnc_engraving' | 'laser_cut';
  material?: YantraMaterialType;
  heightExtrusionMm?: number;
  baseThicknessMm?: number;
}

export interface MaterialPBRSpec {
  name: string;
  color: string;
  roughness: number;
  metalness: number;
  clearcoat?: number;
  transmission?: number;
  ior?: number;
}

export class Mesh3DGenerator {
  /**
   * Get PBR material definitions for 3D rendering from MaterialEngine
   */
  public static getMaterialSpec(material: YantraMaterialType): MaterialPBRSpec {
    const matId = material.toLowerCase() === 'wood' ? 'panchadhatu' : material.toLowerCase() === 'brass' ? 'panchadhatu' : material.toLowerCase();
    const pkg = MaterialEngine.getMaterial(matId);
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
  public static generateSTL(target: YantraDSL | CompiledGeometryModel | OptimizedSolvedGeometryModel | SolvedGeometryModel, options: Mesh3DOptions = {}): string {
    const yantraId = 'dslId' in target ? target.dslId : ('sgm' in target ? target.sgm.dslId : ('id' in target ? target.id : (target as any).yantraId));
    const height = options.heightExtrusionMm || 10;
    
    let stl = `solid ${yantraId}_3d_mesh\n`;

    // Base box facets
    stl += `  facet normal 0 0 -1\n    outer loop\n`;
    stl += `      vertex 0 0 0\n      vertex 100 0 0\n      vertex 100 100 0\n`;
    stl += `    endloop\n  endfacet\n`;
    stl += `  facet normal 0 0 -1\n    outer loop\n`;
    stl += `      vertex 0 0 0\n      vertex 100 100 0\n      vertex 0 100 0\n`;
    stl += `    endloop\n  endfacet\n`;

    let polygons: any[] = [];
    if ('polygons' in target) polygons = (target as any).polygons;
    else if ('sgm' in target) polygons = (target as any).sgm.polygons || Object.values((target as any).sgm.solvedFaces);
    else if ('solvedFaces' in target) polygons = Object.values((target as any).solvedFaces);
    else polygons = GeometryCompiler.compile(target as YantraDSL).polygons;

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
  public static generateOBJ(target: YantraDSL | CompiledGeometryModel | OptimizedSolvedGeometryModel | SolvedGeometryModel, options: Mesh3DOptions = {}): string {
    const yantraId = 'dslId' in target ? target.dslId : ('sgm' in target ? target.sgm.dslId : ('id' in target ? target.id : (target as any).yantraId));
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
  public static generateGLTF(target: OptimizedSolvedGeometryModel | SolvedGeometryModel, options: Mesh3DOptions = {}): GLTFExportResult {
    const matId = options.material?.toLowerCase() || 'panchadhatu';
    return GLTFExporter.generateGLTF(target, { materialId: matId });
  }

  /**
   * Generate 3D Mesh vertices and indices data structure
   */
  public static generateMesh(target: any, options: { heightScale?: number; bevelRadius?: number } = {}): { vertices: number[]; indices: number[]; normal: number[] } {
    const height = options.heightScale || 10;
    const vertices: number[] = [
      0, 0, 0,
      100, 0, 0,
      100, 100, 0,
      0, 100, 0,
      0, 0, height,
      100, 0, height,
      100, 100, height,
      0, 100, height
    ];
    const indices: number[] = [
      0, 1, 2,  0, 2, 3,
      4, 5, 6,  4, 6, 7,
      0, 1, 5,  0, 5, 4,
      1, 2, 6,  1, 6, 5,
      2, 3, 7,  2, 7, 6,
      3, 0, 4,  3, 4, 7
    ];
    return { vertices, indices, normal: [0, 0, 1] };
  }
}
