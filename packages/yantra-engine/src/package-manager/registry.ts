import { SGOSPackageResource, SGOSPackageManifest } from './types';
import { SGKBLoader } from '../sgkb/sgkb-loader';

export interface SGOSRegistry {
  readonly id: string;
  readonly name: string;
  getPackage(uri: string): SGOSPackageResource | undefined;
  listManifests(): readonly SGOSPackageManifest[];
  publish(resource: SGOSPackageResource): void;
}

export class LocalRegistry implements SGOSRegistry {
  public readonly id = 'local_registry';
  public readonly name = 'SGOS Local Master Registry';
  private packageStore: Map<string, SGOSPackageResource> = new Map();

  constructor() {
    this.seedFromSGKB();
  }

  private seedFromSGKB(): void {
    const uris = SGKBLoader.listAllURIs();
    uris.forEach(uri => {
      const sgkbPkg = SGKBLoader.loadByURI(uri);
      const resource: SGOSPackageResource = {
        manifest: {
          name: sgkbPkg.manifest.names.english,
          uri: sgkbPkg.manifest.uri,
          version: sgkbPkg.manifest.versions.geometryVersion,
          geometryVersion: sgkbPkg.manifest.versions.geometryVersion,
          researchVersion: sgkbPkg.manifest.versions.researchVersion,
          translationVersion: sgkbPkg.manifest.versions.translationVersion,
          signature: sgkbPkg.manifest.sha256Signature,
          publisher: 'SGOS Architecture Council',
          license: 'MIT / Shastric Open License',
          dependencies: {},
          supportedLanguages: ['sanskrit', 'iast', 'hindi', 'english', 'gujarati'],
          tradition: sgkbPkg.dsl.tradition || 'Vedic',
          keywords: [sgkbPkg.dsl.id, 'yantra', 'sacred_geometry'],
          deity: sgkbPkg.dsl.metadata?.deity,
          geometryType: 'Yantra',
          trustLevel: 'Official'
        },
        packageData: sgkbPkg
      };
      this.packageStore.set(uri, resource);
    });
  }

  public getPackage(uri: string): SGOSPackageResource | undefined {
    return this.packageStore.get(uri);
  }

  public listManifests(): readonly SGOSPackageManifest[] {
    return Array.from(this.packageStore.values()).map(r => r.manifest);
  }

  public publish(resource: SGOSPackageResource): void {
    this.packageStore.set(resource.manifest.uri, resource);
  }
}

export class OfflineCache {
  private cache: Map<string, SGOSPackageResource> = new Map();

  public get(uri: string): SGOSPackageResource | undefined {
    return this.cache.get(uri);
  }

  public set(uri: string, resource: SGOSPackageResource): void {
    this.cache.set(uri, resource);
  }

  public has(uri: string): boolean {
    return this.cache.has(uri);
  }

  public delete(uri: string): void {
    this.cache.delete(uri);
  }

  public listCachedURIs(): readonly string[] {
    return Array.from(this.cache.keys());
  }
}
