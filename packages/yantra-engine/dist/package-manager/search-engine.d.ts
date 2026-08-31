import { SGOSPackageManifest, SearchQuery } from './types';
export declare class SGOSPackageSearchEngine {
    /** Search manifests by structured query criteria */
    static search(manifests: readonly SGOSPackageManifest[], query: SearchQuery): readonly SGOSPackageManifest[];
}
