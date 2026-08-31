import { MaterialPackage, MaterialPackageSchema, PBRMaterialParameters } from './materials/package-schema';

import copperJson from './materials/copper.json';
import panchadhatuJson from './materials/panchadhatu.json';
import goldJson from './materials/gold.json';
import silverJson from './materials/silver.json';
import crystalJson from './materials/crystal.json';
import marbleJson from './materials/marble.json';
import glassJson from './materials/glass.json';

export class MaterialEngine {
  private static registry = new Map<string, MaterialPackage>();

  static {
    this.registerBuiltInMaterials();
  }

  private static registerBuiltInMaterials() {
    const defaultMaterials = [
      copperJson,
      panchadhatuJson,
      goldJson,
      silverJson,
      crystalJson,
      marbleJson,
      glassJson
    ];

    defaultMaterials.forEach(json => {
      const parsed = MaterialPackageSchema.parse(json);
      this.registry.set(parsed.id, parsed);
    });
  }

  /**
   * Get material package by ID
   */
  public static getMaterial(id: string): MaterialPackage {
    return this.registry.get(id) || this.registry.get('panchadhatu')!;
  }

  /**
   * Get PBR parameters for a material ID
   */
  public static getPBRParameters(id: string): PBRMaterialParameters {
    return this.getMaterial(id).pbr;
  }

  /**
   * Register custom material package
   */
  public static registerMaterial(materialPkg: MaterialPackage): boolean {
    const validated = MaterialPackageSchema.parse(materialPkg);
    this.registry.set(validated.id, { ...validated, isCustom: true });
    return true;
  }

  /**
   * List all available registered material packages
   */
  public static listMaterials(): readonly MaterialPackage[] {
    return Object.freeze(Array.from(this.registry.values()));
  }
}
