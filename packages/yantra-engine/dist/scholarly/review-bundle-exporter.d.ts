export interface ScholarlyReviewBundle {
    bundleId: string;
    exportTimestamp: string;
    dslId: string;
    formalProof: any;
    topologyProof: any;
    identityHashes: any;
    referenceComparisons: any;
    provenanceGraph: any;
    bundleVersion: string;
}
export declare class ScholarlyReviewBundleExporter {
    /**
     * Generates a complete self-contained Scholarly Review Bundle for institutional review.
     */
    static exportBundle(dsl: any): ScholarlyReviewBundle;
    static exportBundleMarkdown(bundle: ScholarlyReviewBundle): string;
}
