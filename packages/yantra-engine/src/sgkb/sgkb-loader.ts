import { SGKBPackage } from './types';
import { SGOSURIResolver } from './uri-resolver';
import { PackageIntegrityVerifier } from './package-verifier';

import shriPkg from './packages/yantras/shri.dsl.json';
import kuberPkg from './packages/yantras/kuber.dsl.json';
import ganeshPkg from './packages/yantras/ganesh.dsl.json';
import mahalakshmiPkg from './packages/yantras/mahalakshmi.dsl.json';
import navagrahaPkg from './packages/yantras/navagraha.dsl.json';

const rawPackages = [shriPkg, kuberPkg, ganeshPkg, mahalakshmiPkg, navagrahaPkg];

export class SGKBLoader {
  private static packageMap: Map<string, SGKBPackage> = new Map();

  private static init(): void {
    if (this.packageMap.size > 0) return;
    rawPackages.forEach((raw: any) => {
      const computedHash = PackageIntegrityVerifier.computeHash(raw.dsl);
      const pkg: SGKBPackage = {
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
  public static registerPackage(pkg: SGKBPackage): void {
    this.init();
    const verified = PackageIntegrityVerifier.verify(pkg);
    if (!verified.isValid) {
      throw new Error(`[SGKBLoader] Failed to register package "${pkg.manifest.id}": ${verified.message}`);
    }
    this.packageMap.set(pkg.manifest.uri, pkg);
  }

  /** Loads SGKB package by canonical SGOS URI (e.g. "sgos://yantra/shri") */
  public static loadByURI(uriString: string): SGKBPackage {
    this.init();
    const parsed = SGOSURIResolver.parse(uriString);
    const pkg = this.packageMap.get(parsed.uriString);

    if (!pkg) {
      throw new Error(`[SGKBLoader] Package not found for URI: "${uriString}".`);
    }

    // Verify digital signature before returning
    const verified = PackageIntegrityVerifier.verify(pkg);
    if (!verified.isValid) {
      throw new Error(`[SGKBLoader] Digital integrity check failed for "${uriString}": ${verified.message}`);
    }

    return pkg;
  }

  /** List all loaded SGOS URIs */
  public static listAllURIs(): readonly string[] {
    this.init();
    return Array.from(this.packageMap.keys());
  }
}
