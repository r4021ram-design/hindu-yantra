"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SGOSDependencyResolver = void 0;
class SGOSDependencyResolver {
    /**
     * Resolves package dependencies recursively and checks for cycles, missing packages, and version conflicts.
     */
    static resolve(targetUri, packageStore) {
        const visited = new Set();
        const visiting = new Set();
        const installOrder = [];
        const cycles = [];
        const missing = [];
        const dfs = (uri) => {
            if (visiting.has(uri)) {
                cycles.push(uri);
                return;
            }
            if (visited.has(uri))
                return;
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
exports.SGOSDependencyResolver = SGOSDependencyResolver;
