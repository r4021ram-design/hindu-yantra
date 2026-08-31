import { GeometryDSL } from '../compiler/types';
import { ScripturalCitation } from '../dsl/types';
export type SGOSDomain = 'yantra' | 'mandala' | 'vastu' | 'temple' | 'homa_kunda' | 'shilpa';
export interface SGOSURI {
    readonly uriString: string;
    readonly domain: SGOSDomain;
    readonly entityId: string;
    readonly subPath?: string;
}
export interface SGKBVersionVector {
    readonly geometryVersion: string;
    readonly researchVersion: string;
    readonly commentaryVersion: string;
    readonly translationVersion: string;
    readonly evidenceVersion: string;
}
export interface SGKBLocalization {
    readonly sanskrit: string;
    readonly iast?: string;
    readonly hindi?: string;
    readonly english: string;
    readonly gujarati?: string;
}
export interface SGKBPackageManifest {
    readonly uri: string;
    readonly id: string;
    readonly domain: SGOSDomain;
    readonly names: SGKBLocalization;
    readonly versions: SGKBVersionVector;
    readonly sha256Signature: string;
    readonly createdTimestamp: string;
}
export interface SGKBPackage {
    readonly manifest: SGKBPackageManifest;
    readonly dsl: GeometryDSL;
    readonly citations: readonly ScripturalCitation[];
    readonly researchNotes: readonly string[];
    readonly localizations: Record<string, SGKBLocalization>;
}
export interface PackageVerificationResult {
    readonly isValid: boolean;
    readonly expectedHash: string;
    readonly computedHash: string;
    readonly message: string;
}
