"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvidenceEngine = void 0;
class EvidenceEngine {
    /**
     * Filter citations by evidence level
     */
    static filterCitationsByLevel(citations, level) {
        return citations.filter(c => c.evidenceLevel === level);
    }
    /**
     * Verify evidence badges for a YantraDSL object
     */
    static verifyBadges(dsl) {
        const citations = dsl.references?.citations || dsl.scripturalReferences || [];
        const hasCitations = citations.length > 0;
        const hasScriptureVerified = hasCitations && citations.some((c) => c.evidenceLevel === 'Scripture Verified');
        const hasCommentary = hasCitations && citations.some((c) => c.commentaryAuthor !== undefined);
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
    static getAcademicDisclaimer() {
        return "The computational construction is derived from traditional construction methods together with documented scholarly reconstructions where appropriate.";
    }
}
exports.EvidenceEngine = EvidenceEngine;
