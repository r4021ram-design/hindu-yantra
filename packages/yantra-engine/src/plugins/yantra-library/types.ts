import { GeometryDSL } from '../../compiler/types';
import { ScripturalCitation } from '../../dsl/types';

export interface YantraVariant {
  readonly variantId: string;
  readonly traditionName: string;
  readonly description: string;
  readonly dslOverride: Partial<GeometryDSL>;
}

export interface YantraEvidenceMetadata {
  readonly primaryScripture: string;
  readonly citations: readonly ScripturalCitation[];
  readonly shastricAuthenticityScore: number; // e.g. 100
}

export interface YantraResearchMetadata {
  readonly academicPapersCount: number;
  readonly geometricSymmetryOrder: number;
  readonly researchNotes: readonly string[];
}

export interface YantraPluginDefinition {
  readonly id: string;
  readonly names: {
    readonly sanskrit: string;
    readonly english: string;
  };
  readonly dsl: GeometryDSL;
  readonly variants: readonly YantraVariant[];
  readonly evidence: YantraEvidenceMetadata;
  readonly research: YantraResearchMetadata;
}
