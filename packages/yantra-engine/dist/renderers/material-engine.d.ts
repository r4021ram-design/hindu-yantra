import { MaterialPackage, PBRMaterialParameters } from './materials/package-schema';
export declare class MaterialEngine {
    private static registry;
    private static registerBuiltInMaterials;
    /**
     * Get material package by ID
     */
    static getMaterial(id: string): MaterialPackage;
    /**
     * Get PBR parameters for a material ID
     */
    static getPBRParameters(id: string): PBRMaterialParameters;
    /**
     * Register custom material package
     */
    static registerMaterial(materialPkg: MaterialPackage): boolean;
    /**
     * List all available registered material packages
     */
    static listMaterials(): readonly MaterialPackage[];
}
