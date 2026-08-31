import { SGOSPackageResource, DependencyResolutionResult } from './types';
export declare class SGOSDependencyResolver {
    /**
     * Resolves package dependencies recursively and checks for cycles, missing packages, and version conflicts.
     */
    static resolve(targetUri: string, packageStore: Map<string, SGOSPackageResource>): DependencyResolutionResult;
}
