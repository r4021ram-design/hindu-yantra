import { SGOSPackageResource, SGOSPackageManifest, SearchQuery, DependencyResolutionResult } from './types';
import { TrustReport } from './trust-engine';
export declare class SGOSPackageManager {
    private registry;
    private cache;
    private installedPackages;
    /** Install package by URI, resolving dependencies and verifying signatures */
    install(uri: string): {
        success: boolean;
        installed: readonly string[];
        message: string;
    };
    /** Remove installed package by URI */
    remove(uri: string): boolean;
    /** Update an installed package */
    update(uri: string): {
        updated: boolean;
        message: string;
    };
    /** List all currently installed package manifests */
    list(): readonly SGOSPackageManifest[];
    /** Search registry for packages matching criteria */
    search(query: SearchQuery): readonly SGOSPackageManifest[];
    /** Verify signature and digital integrity of an installed package */
    verify(uri: string): {
        isValid: boolean;
        trustReport: TrustReport;
        message: string;
    };
    /** Resolve dependency graph for a URI */
    resolveDependencies(uri: string): DependencyResolutionResult;
    /** Publish new package into registry */
    publish(resource: SGOSPackageResource): void;
}
