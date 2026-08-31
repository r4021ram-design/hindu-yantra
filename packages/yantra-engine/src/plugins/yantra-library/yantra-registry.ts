import { YantraPluginDefinition, YantraVariant, YantraEvidenceMetadata } from './types';
import { GeometryDSL } from '../../compiler/types';
import { SacredGeometryLibrary } from './sacred-geometry-library';
import { SGOS } from '../../sdk/sgos-sdk';

export class YantraPluginRegistry {
  private registry: Map<string, YantraPluginDefinition> = new Map();

  constructor() {
    // Register default canonical library definitions
    SacredGeometryLibrary.listAll().forEach(def => {
      this.registerYantra(def);
    });
  }

  /** Register new Yantra definition plugin */
  public registerYantra(definition: YantraPluginDefinition): void {
    this.registry.set(definition.id, definition);
    // Also register with SGOS SDK Plugin Container
    SGOS.getPluginManager().registerGeometry(definition.id, definition.dsl);
  }

  /** Load Yantra definition by ID */
  public loadYantra(id: string): YantraPluginDefinition | undefined {
    return this.registry.get(id);
  }

  /** Validate Yantra Geometry DSL schema using SGOS SDK */
  public validateYantra(id: string): boolean {
    const def = this.loadYantra(id);
    if (!def) return false;
    return SGOS.validate(def.dsl);
  }

  /** List traditional variants for a Yantra */
  public listVariants(id: string): readonly YantraVariant[] {
    return this.loadYantra(id)?.variants || [];
  }

  /** List scriptural evidence for a Yantra */
  public listEvidence(id: string): YantraEvidenceMetadata | undefined {
    return this.loadYantra(id)?.evidence;
  }

  /** List all registered Yantras */
  public listAllYantras(): readonly YantraPluginDefinition[] {
    return Array.from(this.registry.values());
  }
}

export const YantraRegistry = new YantraPluginRegistry();
