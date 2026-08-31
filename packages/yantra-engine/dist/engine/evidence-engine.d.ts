import { ScripturalCitation, EvidenceLevel, YantraDSL } from '../dsl/types';
export declare class EvidenceEngine {
    /**
     * Filter citations by evidence level
     */
    static filterCitationsByLevel(citations: ScripturalCitation[], level: EvidenceLevel): ScripturalCitation[];
    /**
     * Verify evidence badges for a YantraDSL object
     */
    static verifyBadges(dsl: YantraDSL): {
        geometryVerified: boolean;
        scriptureLinked: boolean;
        traditionIdentified: boolean;
        commentaryAvailable: boolean;
        researchAvailable: boolean;
        manufacturingReady: boolean;
    };
    /**
     * Academic disclaimer for scholarly honesty
     */
    static getAcademicDisclaimer(): string;
}
