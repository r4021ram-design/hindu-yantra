export interface DeterministicIdentityReport {
    dslId: string;
    geometryHash: string;
    graphHash: string;
    solverHash: string;
    svgHash: string;
    sceneGraphHash: string;
    isDeterministic: boolean;
}
export declare class SGOSDeterministicIdentityEngine {
    /**
     * Generates stable, reproducible identity hashes for Geometry, Graph, Solver, SVG, and SceneGraph.
     */
    static generateIdentityHashes(dsl: any): DeterministicIdentityReport;
    private static computeHash;
}
