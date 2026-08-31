import { YantraPluginDefinition, YantraVariant, YantraEvidenceMetadata } from './types';
export declare class YantraPluginRegistry {
    private registry;
    constructor();
    /** Register new Yantra definition plugin */
    registerYantra(definition: YantraPluginDefinition): void;
    /** Load Yantra definition by ID */
    loadYantra(id: string): YantraPluginDefinition | undefined;
    /** Validate Yantra Geometry DSL schema using SGOS SDK */
    validateYantra(id: string): boolean;
    /** List traditional variants for a Yantra */
    listVariants(id: string): readonly YantraVariant[];
    /** List scriptural evidence for a Yantra */
    listEvidence(id: string): YantraEvidenceMetadata | undefined;
    /** List all registered Yantras */
    listAllYantras(): readonly YantraPluginDefinition[];
}
export declare const YantraRegistry: YantraPluginRegistry;
