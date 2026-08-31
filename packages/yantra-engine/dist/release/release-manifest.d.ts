export interface ReleaseManifest {
    packageName: string;
    version: string;
    releaseTag: string;
    kernelVersion: string;
    buildTimestamp: string;
    gitCommitHash: string;
    checksums: {
        distMinJsSha256: string;
        typesDtsSha256: string;
        packageJsonSha256: string;
    };
    license: string;
    status: 'RELEASE_CANDIDATE' | 'PRODUCTION_RELEASE';
}
export declare class SGOSReleaseManifestEngine {
    /**
     * Generates production release manifest and reproducible build checksums.
     */
    static generateManifest(): ReleaseManifest;
}
