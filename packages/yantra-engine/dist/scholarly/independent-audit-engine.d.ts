export type EvidenceClassification = 'INTERNALLY_VERIFIED' | 'EXTERNALLY_REFERENCED' | 'INFERRED' | 'UNRESOLVED';
export interface IndependentAuditItem {
    category: 'Geometry' | 'Topology' | 'Proof' | 'Citations' | 'Provenance';
    itemDescription: string;
    auditStatus: 'PASS' | 'FAIL';
    evidenceClassification: EvidenceClassification;
    details: string;
}
export interface IndependentAuditReport {
    dslId: string;
    auditMode: 'ZERO_TRUST_INDEPENDENT_AUDIT';
    auditTimestamp: string;
    overallAuditPassed: boolean;
    totalChecks: number;
    passedChecks: number;
    failedChecks: number;
    classificationSummary: {
        internallyVerifiedCount: number;
        externallyReferencedCount: number;
        inferredCount: number;
        unresolvedCount: number;
    };
    auditItems: IndependentAuditItem[];
}
export declare class SGOSIndependentAuditEngine {
    /**
     * Evaluates SGOS geometry, topology, proofs, citations, and provenance in zero-trust independent audit mode.
     */
    static executeIndependentAudit(dsl: any): IndependentAuditReport;
}
