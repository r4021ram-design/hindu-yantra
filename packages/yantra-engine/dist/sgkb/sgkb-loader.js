"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SGKBLoader = void 0;
const uri_resolver_1 = require("./uri-resolver");
const package_verifier_1 = require("./package-verifier");
const shri_dsl_json_1 = __importDefault(require("./packages/yantras/shri.dsl.json"));
const kuber_dsl_json_1 = __importDefault(require("./packages/yantras/kuber.dsl.json"));
const ganesh_dsl_json_1 = __importDefault(require("./packages/yantras/ganesh.dsl.json"));
const mahalakshmi_dsl_json_1 = __importDefault(require("./packages/yantras/mahalakshmi.dsl.json"));
const navagraha_dsl_json_1 = __importDefault(require("./packages/yantras/navagraha.dsl.json"));
const rawPackages = [shri_dsl_json_1.default, kuber_dsl_json_1.default, ganesh_dsl_json_1.default, mahalakshmi_dsl_json_1.default, navagraha_dsl_json_1.default];
class SGKBLoader {
    static packageMap = new Map();
    static init() {
        if (this.packageMap.size > 0)
            return;
        rawPackages.forEach((raw) => {
            const computedHash = package_verifier_1.PackageIntegrityVerifier.computeHash(raw.dsl);
            const pkg = {
                ...raw,
                manifest: {
                    ...raw.manifest,
                    sha256Signature: computedHash
                }
            };
            this.packageMap.set(pkg.manifest.uri, pkg);
        });
    }
    /** Register dynamic SGKB Package into repository */
    static registerPackage(pkg) {
        this.init();
        const verified = package_verifier_1.PackageIntegrityVerifier.verify(pkg);
        if (!verified.isValid) {
            throw new Error(`[SGKBLoader] Failed to register package "${pkg.manifest.id}": ${verified.message}`);
        }
        this.packageMap.set(pkg.manifest.uri, pkg);
    }
    /** Loads SGKB package by canonical SGOS URI (e.g. "sgos://yantra/shri") */
    static loadByURI(uriString) {
        this.init();
        const parsed = uri_resolver_1.SGOSURIResolver.parse(uriString);
        const pkg = this.packageMap.get(parsed.uriString);
        if (!pkg) {
            throw new Error(`[SGKBLoader] Package not found for URI: "${uriString}".`);
        }
        // Verify digital signature before returning
        const verified = package_verifier_1.PackageIntegrityVerifier.verify(pkg);
        if (!verified.isValid) {
            throw new Error(`[SGKBLoader] Digital integrity check failed for "${uriString}": ${verified.message}`);
        }
        return pkg;
    }
    /** List all loaded SGOS URIs */
    static listAllURIs() {
        this.init();
        return Array.from(this.packageMap.keys());
    }
}
exports.SGKBLoader = SGKBLoader;
