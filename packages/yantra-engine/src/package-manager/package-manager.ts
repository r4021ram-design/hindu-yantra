import { SGOSPackageResource, SGOSPackageManifest, SearchQuery, DependencyResolutionResult } from './types';
import { LocalRegistry, OfflineCache } from './registry';
import { SGOSDependencyResolver } from './dependency-resolver';
import { SGOSPackageSearchEngine } from './search-engine';
import { SGOSTrustEngine, TrustReport } from './trust-engine';
import { PackageIntegrityVerifier } from '../sgkb/package-verifier';

export class SGOSPackageManager {
  private registry: LocalRegistry = new LocalRegistry();
  private cache: OfflineCache = new OfflineCache();
  private installedPackages: Map<string, SGOSPackageResource> = new Map();

  /** Install package by URI, resolving dependencies and verifying signatures */
  public install(uri: string): { success: boolean; installed: readonly string[]; message: string } {
    const registryResource = this.registry.getPackage(uri);
    if (!registryResource) {
      return { success: false, installed: [], message: `Package "${uri}" not found in registry.` };
    }

    // Trust check
    const trustReport = SGOSTrustEngine.evaluate(registryResource.manifest);
    if (!trustReport.isTrusted) {
      return { success: false, installed: [], message: `Install rejected! ${trustReport.warning}` };
    }

    // Dependency Resolution
    const allKnown = new Map<string, SGOSPackageResource>();
    this.registry.listManifests().forEach(m => {
      const p = this.registry.getPackage(m.uri);
      if (p) allKnown.set(m.uri, p);
    });

    const resolution = SGOSDependencyResolver.resolve(uri, allKnown);
    if (!resolution.isValid) {
      return {
        success: false,
        installed: [],
        message: `Dependency resolution failed! Missing: ${resolution.missing.join(', ')}, Cycles: ${resolution.cycles.join(', ')}`
      };
    }

    // Install in order
    const newlyInstalled: string[] = [];
    for (const depUri of resolution.installOrder) {
      const res = this.registry.getPackage(depUri);
      if (res) {
        // Integrity Verification
        const ver = PackageIntegrityVerifier.verify(res.packageData);
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
  public remove(uri: string): boolean {
    if (!this.installedPackages.has(uri)) return false;
    this.installedPackages.delete(uri);
    this.cache.delete(uri);
    return true;
  }

  /** Update an installed package */
  public update(uri: string): { updated: boolean; message: string } {
    if (!this.installedPackages.has(uri)) {
      return { updated: false, message: `Package "${uri}" is not installed.` };
    }
    this.remove(uri);
    const installRes = this.install(uri);
    return { updated: installRes.success, message: installRes.message };
  }

  /** List all currently installed package manifests */
  public list(): readonly SGOSPackageManifest[] {
    return Array.from(this.installedPackages.values()).map(r => r.manifest);
  }

  /** Search registry for packages matching criteria */
  public search(query: SearchQuery): readonly SGOSPackageManifest[] {
    const allManifests = this.registry.listManifests();
    return SGOSPackageSearchEngine.search(allManifests, query);
  }

  /** Verify signature and digital integrity of an installed package */
  public verify(uri: string): { isValid: boolean; trustReport: TrustReport; message: string } {
    const pkg = this.installedPackages.get(uri) || this.registry.getPackage(uri);
    if (!pkg) {
      return { isValid: false, trustReport: { trustLevel: 'Unsigned', isTrusted: false, publisherAuthenticity: false }, message: `Package "${uri}" not found.` };
    }

    const trustReport = SGOSTrustEngine.evaluate(pkg.manifest);
    const integrity = PackageIntegrityVerifier.verify(pkg.packageData);

    const isValid = trustReport.isTrusted && integrity.isValid;

    return {
      isValid,
      trustReport,
      message: isValid ? `Package "${uri}" verified authentic & untampered.` : `Package verification failed! ${integrity.message}`
    };
  }

  /** Resolve dependency graph for a URI */
  public resolveDependencies(uri: string): DependencyResolutionResult {
    const allKnown = new Map<string, SGOSPackageResource>();
    this.registry.listManifests().forEach(m => {
      const p = this.registry.getPackage(m.uri);
      if (p) allKnown.set(m.uri, p);
    });
    return SGOSDependencyResolver.resolve(uri, allKnown);
  }

  /** Publish new package into registry */
  public publish(resource: SGOSPackageResource): void {
    this.registry.publish(resource);
  }
}
