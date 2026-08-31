import { YantraPluginDefinition, YantraVariant, YantraEvidenceMetadata, YantraResearchMetadata } from './types';
import { GeometryDSL } from '../../compiler/types';
export declare class SacredGeometryLibrary {
    private static uriMap;
    /** List all supported canonical Yantras loaded dynamically from SGKB */
    static listAll(): readonly YantraPluginDefinition[];
    /** Get Yantra definition by ID */
    static getById(id: string): YantraPluginDefinition | undefined;
    /** Get canonical Geometry DSL for a Yantra */
    static getGeometryDSL(id: string): GeometryDSL | undefined;
    /** Get traditional variants for a Yantra */
    static getVariants(id: string): readonly YantraVariant[];
    /** Get scriptural evidence metadata for a Yantra */
    static getEvidence(id: string): YantraEvidenceMetadata | undefined;
    /** Get academic research metadata for a Yantra */
    static getResearch(id: string): YantraResearchMetadata | undefined;
}
