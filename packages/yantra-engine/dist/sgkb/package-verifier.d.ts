import { SGKBPackage, PackageVerificationResult } from './types';
export declare class PackageIntegrityVerifier {
    /**
     * Verifies digital integrity signature of an SGKB Package.
     */
    static verify(pkg: SGKBPackage): PackageVerificationResult;
    /**
     * Computes SHA-256 style deterministic signature string over DSL object or content string.
     */
    static computeHash(dsl: any): string;
}
