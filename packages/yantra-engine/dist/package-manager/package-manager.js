"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SGOSPackageManager = void 0;
const registry_1 = require("./registry");
const dependency_resolver_1 = require("./dependency-resolver");
const search_engine_1 = require("./search-engine");
const trust_engine_1 = require("./trust-engine");
const package_verifier_1 = require("../sgkb/package-verifier");
class SGOSPackageManager {
    registry = new registry_1.LocalRegistry();
    cache = new registry_1.OfflineCache();
    installedPackages = new Map();
    /** Install package by URI, resolving dependencies and verifying signatures */
    install(uri) {
        const registryResource = this.registry.getPackage(uri);
        if (!registryResource) {
            return { success: false, installed: [], message: `Package "${uri}" not found in registry.` };
        }
        // Trust check
        const trustReport = trust_engine_1.SGOSTrustEngine.evaluate(registryResource.manifest);
        if (!trustReport.isTrusted) {
            return { success: false, installed: [], message: `Install rejected! ${trustReport.warning}` };
        }
        // Dependency Resolution
        const allKnown = new Map();
        this.registry.listManifests().forEach(m => {
            const p = this.registry.getPackage(m.uri);
            if (p)
                allKnown.set(m.uri, p);
        });
        const resolution = dependency_resolver_1.SGOSDependencyResolver.resolve(uri, allKnown);
        if (!resolution.isValid) {
            return {
                success: false,
                installed: [],
                message: `Dependency resolution failed! Missing: ${resolution.missing.join(', ')}, Cycles: ${resolution.cycles.join(', ')}`
            };
        }
        // Install in order
        const newlyInstalled = [];
        for (const depUri of resolution.installOrder) {
            const res = this.registry.getPackage(depUri);
            if (res) {
                // Integrity Verification
                const ver = package_verifier_1.PackageIntegrityVerifier.verify(res.packageData);
                if (!ver.isValid) {
                    return { success: false, installed: newlyInstalled, message: `Integrity check failed for "${depUri}": ${ver.message}` };
                }
                this.cache.set(depUri, res);
                this.installedPackages.set(depUri, res);
                newlyInstalled.push(depUri);
            }
        }
        return {
            success: true,
            installed: newlyInstalled,
            message: `Successfully installed package "${uri}" and ${newlyInstalled.length - 1} dependencies.`
        };
    }
    /** Remove installed package by URI */
    remove(uri) {
        if (!this.installedPackages.has(uri))
            return false;
        this.installedPackages.delete(uri);
        this.cache.delete(uri);
        return true;
    }
    /** Update an installed package */
    update(uri) {
        if (!this.installedPackages.has(uri)) {
            return { updated: false, message: `Package "${uri}" is not installed.` };
        }
        this.remove(uri);
        const installRes = this.install(uri);
        return { updated: installRes.success, message: installRes.message };
    }
    /** List all currently installed package manifests */
    list() {
        return Array.from(this.installedPackages.values()).map(r => r.manifest);
    }
    /** Search registry for packages matching criteria */
    search(query) {
        const allManifests = this.registry.listManifests();
        return search_engine_1.SGOSPackageSearchEngine.search(allManifests, query);
    }
    /** Verify signature and digital integrity of an installed package */
    verify(uri) {
        const pkg = this.installedPackages.get(uri) || this.registry.getPackage(uri);
        if (!pkg) {
            return { isValid: false, trustReport: { trustLevel: 'Unsigned', isTrusted: false, publisherAuthenticity: false }, message: `Package "${uri}" not found.` };
        }
        const trustReport = trust_engine_1.SGOSTrustEngine.evaluate(pkg.manifest);
        const integrity = package_verifier_1.PackageIntegrityVerifier.verify(pkg.packageData);
        const isValid = trustReport.isTrusted && integrity.isValid;
        return {
            isValid,
            trustReport,
            message: isValid ? `Package "${uri}" verified authentic & untampered.` : `Package verification failed! ${integrity.message}`
        };
    }
    /** Resolve dependency graph for a URI */
    resolveDependencies(uri) {
        const allKnown = new Map();
        this.registry.listManifests().forEach(m => {
            const p = this.registry.getPackage(m.uri);
            if (p)
                allKnown.set(m.uri, p);
        });
        return dependency_resolver_1.SGOSDependencyResolver.resolve(uri, allKnown);
    }
    /** Publish new package into registry */
    publish(resource) {
        this.registry.publish(resource);
    }
}
exports.SGOSPackageManager = SGOSPackageManager;
