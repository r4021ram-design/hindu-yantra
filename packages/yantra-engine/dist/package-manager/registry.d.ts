import { SGOSPackageResource, SGOSPackageManifest } from './types';
export interface SGOSRegistry {
    readonly id: string;
    readonly name: string;
    getPackage(uri: string): SGOSPackageResource | undefined;
    listManifests(): readonly SGOSPackageManifest[];
    publish(resource: SGOSPackageResource): void;
}
export declare class LocalRegistry implements SGOSRegistry {
    readonly id = "local_registry";
    readonly name = "SGOS Local Master Registry";
    private packageStore;
    constructor();
    private seedFromSGKB;
    getPackage(uri: string): SGOSPackageResource | undefined;
    listManifests(): readonly SGOSPackageManifest[];
    publish(resource: SGOSPackageResource): void;
}
export declare class OfflineCache {
    private cache;
    get(uri: string): SGOSPackageResource | undefined;
    set(uri: string, resource: SGOSPackageResource): void;
    has(uri: string): boolean;
    delete(uri: string): void;
    listCachedURIs(): readonly string[];
}
