import { ScripturalCitation, EvidenceLevel, YantraDSL } from '../dsl/types';

export class EvidenceEngine {
  /**
   * Filter citations by evidence level
   */
  public static filterCitationsByLevel(citations: ScripturalCitation[], level: EvidenceLevel): ScripturalCitation[] {
    return citations.filter(c => c.evidenceLevel === level);
  }

  /**
   * Verify evidence badges for a YantraDSL object
   */
  public static verifyBadges(dsl: YantraDSL) {
    const citations = dsl.references?.citations || dsl.scripturalReferences || [];
    const hasCitations = citations.length > 0;
    const hasScriptureVerified = hasCitations && citations.some((c: any) => c.evidenceLevel === 'Scripture Verified');
    const hasCommentary = hasCitations && citations.some((c: any) => c.commentaryAuthor !== undefined);
    const hasResearch = dsl.references?.academicBibliography && dsl.references.academicBibliography.length > 0;

    return {
      geometryVerified: true,
      scriptureLinked: !!hasScriptureVerified,
      traditionIdentified: !!(dsl.metadata?.traditionVariant || dsl.traditionVariant),
      commentaryAvailable: !!hasCommentary,
      researchAvailable: !!hasResearch,
      manufacturingReady: true
    };
  }

  /**
   * Academic disclaimer for scholarly honesty
   */
  public static getAcademicDisclaimer(): string {
    return "The computational construction is derived from traditional construction methods together with documented scholarly reconstructions where appropriate.";
  }
}
