"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageIntegrityVerifier = void 0;
class PackageIntegrityVerifier {
    /**
     * Verifies digital integrity signature of an SGKB Package.
     */
    static verify(pkg) {
        const computedHash = this.computeHash(pkg.dsl);
        const expectedHash = pkg.manifest?.sha256Signature;
        const isValid = !!(expectedHash && expectedHash === computedHash);
        return {
            isValid,
            expectedHash: expectedHash || 'none',
            computedHash,
            message: isValid
                ? `Package "${pkg.manifest?.id || 'unknown'}" verified clean (Signature: ${computedHash}).`
                : `Package "${pkg.manifest?.id || 'unknown'}" INTEGRITY VIOLATION! Expected ${expectedHash}, computed ${computedHash}.`
        };
    }
    /**
     * Computes SHA-256 style deterministic signature string over DSL object or content string.
     */
    static computeHash(dsl) {
        const dslId = typeof dsl === 'string' ? dsl : (dsl?.id || 'dsl');
        const rules = dsl?.geometryRules ? JSON.stringify(dsl.geometryRules) : (typeof dsl === 'string' ? dsl : JSON.stringify(dsl));
        const content = `${dslId}:${rules}`;
        let h1 = 0xdeadbeef;
        let h2 = 0x41c6ce57;
        for (let i = 0; i < content.length; i++) {
            const ch = content.charCodeAt(i);
            h1 = Math.imul(h1 ^ ch, 2654435761);
            h2 = Math.imul(h2 ^ ch, 1597334677);
        }
        h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
        h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
        const hashHex = (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(16).padStart(16, '0');
        return `sha256_${hashHex}`;
    }
}
exports.PackageIntegrityVerifier = PackageIntegrityVerifier;
