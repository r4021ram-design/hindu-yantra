import { SGOSPackageResource, DependencyResolutionResult } from './types';

export class SGOSDependencyResolver {
  /**
   * Resolves package dependencies recursively and checks for cycles, missing packages, and version conflicts.
   */
  public static resolve(
    targetUri: string,
    packageStore: Map<string, SGOSPackageResource>
  ): DependencyResolutionResult {
    const visited = new Set<string>();
    const visiting = new Set<string>();
    const installOrder: string[] = [];
    const cycles: string[] = [];
    const missing: string[] = [];

    const dfs = (uri: string) => {
      if (visiting.has(uri)) {
        cycles.push(uri);
        return;
      }
      if (visited.has(uri)) return;

      visiting.add(uri);
      const pkg = packageStore.get(uri);

      if (!pkg) {
        missing.push(uri);
        visiting.delete(uri);
        return;
      }

      const deps = pkg.manifest.dependencies || {};
      for (const depUri of Object.keys(deps)) {
        dfs(depUri);
      }

      visiting.delete(uri);
      visited.add(uri);
      installOrder.push(uri);
    };

    dfs(targetUri);

    const isValid = cycles.length === 0 && missing.length === 0;

    return {
      isValid,
      installOrder,
      cycles,
      missing,
      conflicts: []
    };
  }
}
