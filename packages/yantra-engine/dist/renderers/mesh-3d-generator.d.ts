import { CompiledGeometryModel, YantraDSL } from '../types/dsl';
import { OptimizedSolvedGeometryModel } from '../optimization/types';
import { SolvedGeometryModel } from '../solver/types';
import { GLTFExportResult } from './gltf-exporter';
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
export declare class Mesh3DGenerator {
    /**
     * Get PBR material definitions for 3D rendering from MaterialEngine
     */
    static getMaterialSpec(material: YantraMaterialType): MaterialPBRSpec;
    /**
     * Generate STL ASCII format string for 3D Printing from OSGM or Compiled Model
     */
    static generateSTL(target: YantraDSL | CompiledGeometryModel | OptimizedSolvedGeometryModel | SolvedGeometryModel, options?: Mesh3DOptions): string;
    /**
     * Generate Wavefront OBJ format string for 3D viewers
     */
    static generateOBJ(target: YantraDSL | CompiledGeometryModel | OptimizedSolvedGeometryModel | SolvedGeometryModel, options?: Mesh3DOptions): string;
    /**
     * Generate GLTF 2.0 format via GLTFExporter
     */
    static generateGLTF(target: OptimizedSolvedGeometryModel | SolvedGeometryModel, options?: Mesh3DOptions): GLTFExportResult;
    /**
     * Generate 3D Mesh vertices and indices data structure
     */
    static generateMesh(target: any, options?: {
        heightScale?: number;
        bevelRadius?: number;
    }): {
        vertices: number[];
        indices: number[];
        normal: number[];
    };
}
