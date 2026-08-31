export interface VerificationCheck {
    readonly name: string;
    readonly passed: boolean;
    readonly details: string;
}
export interface VerificationReport {
    readonly dslId: string;
    readonly isVerified: boolean;
    readonly totalChecksCount: number;
    readonly passedChecksCount: number;
    readonly failedChecksCount: number;
    readonly checks: readonly VerificationCheck[];
    readonly verificationTimestamp: string;
}
export interface ProofStep {
    readonly stepNumber: number;
    readonly phase: 'Construction' | 'Intersection' | 'Constraint' | 'Topology';
    readonly description: string;
    readonly formula?: string;
    readonly status: 'VERIFIED' | 'FAILED';
}
export interface GeometryProof {
    readonly dslId: string;
    readonly title: string;
    readonly proofTimestamp: string;
    readonly constructionSequence: readonly ProofStep[];
    readonly intersectionSequence: readonly ProofStep[];
    readonly constraintEvaluations: readonly ProofStep[];
    readonly topologyDerivation: readonly ProofStep[];
    readonly finalSolvedSummary: {
        readonly nodeCount: number;
        readonly edgeCount: number;
        readonly faceCount: number;
        readonly deterministicHash: string;
    };
}
export interface PluginConformanceReport {
    readonly pluginId: string;
    readonly isConformant: boolean;
    readonly apiCompatible: boolean;
    readonly versionCompatible: boolean;
    readonly geometryValid: boolean;
    readonly performanceAcceptable: boolean;
    readonly documentationComplete: boolean;
    readonly violations: readonly string[];
}
export interface GoldenSnapshot {
    readonly dslId: string;
    readonly dslHash: string;
    readonly astHash: string;
    readonly graphHash: string;
    readonly sgmHash: string;
    readonly osgmHash: string;
}
