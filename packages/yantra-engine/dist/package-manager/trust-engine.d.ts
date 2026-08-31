import { SGOSPackageManifest, TrustLevel } from './types';
export interface TrustReport {
    readonly trustLevel: TrustLevel;
    readonly isTrusted: boolean;
    readonly warning?: string;
    readonly publisherAuthenticity: boolean;
}
export declare class SGOSTrustEngine {
    private static officialPublishers;
    /** Evaluates trust status of a package manifest */
    static evaluate(manifest: SGOSPackageManifest): TrustReport;
}
