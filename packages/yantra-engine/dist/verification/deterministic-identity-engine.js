"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SGOSDeterministicIdentityEngine = void 0;
const compiler_1 = require("../geometry/compiler");
const sgos_sdk_1 = require("../sdk/sgos-sdk");
const svg_renderer_1 = require("../renderers/svg-renderer");
const scene_graph_1 = require("../renderers/scene-graph");
class SGOSDeterministicIdentityEngine {
    /**
     * Generates stable, reproducible identity hashes for Geometry, Graph, Solver, SVG, and SceneGraph.
     */
    static generateIdentityHashes(dsl) {
        const compiled = compiler_1.GeometryCompiler.compile(dsl);
        const pipeline = sgos_sdk_1.SGOS.runPipeline(dsl);
        const osgm = pipeline.osgm;
        const sceneGraph = scene_graph_1.SGOSSceneGraphEngine.fromOSGM(osgm);
        const svgStr = svg_renderer_1.SVGRenderer.renderToString(compiled, { theme: 'canonical_blueprint' });
        const geometryHash = this.computeHash(JSON.stringify(compiled.polygons));
        const graphHash = this.computeHash(JSON.stringify(pipeline.graph.nodes));
        const solverHash = pipeline.sgm.provenance.deterministicHash || this.computeHash(JSON.stringify(pipeline.sgm.solvedCoordinates));
        const svgHash = this.computeHash(svgStr);
        const sceneGraphHash = this.computeHash(JSON.stringify({ yantraId: sceneGraph.yantraId, nodeCount: sceneGraph.nodeCount }));
        return {
            dslId: dsl.id,
            geometryHash,
            graphHash,
            solverHash,
            svgHash,
            sceneGraphHash,
            isDeterministic: true
        };
    }
    static computeHash(str) {
        let hash = 5381;
        for (let i = 0; i < str.length; i++) {
            hash = (hash * 33) ^ str.charCodeAt(i);
        }
        return `hash_sgos_${(hash >>> 0).toString(16)}`;
    }
}
exports.SGOSDeterministicIdentityEngine = SGOSDeterministicIdentityEngine;
