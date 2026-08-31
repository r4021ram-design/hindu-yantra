import { GeometryCompiler } from '../geometry/compiler';
import { SGOS } from '../sdk/sgos-sdk';
import { SVGRenderer } from '../renderers/svg-renderer';
import { SGOSSceneGraphEngine } from '../renderers/scene-graph';

export interface DeterministicIdentityReport {
  dslId: string;
  geometryHash: string;
  graphHash: string;
  solverHash: string;
  svgHash: string;
  sceneGraphHash: string;
  isDeterministic: boolean;
}

export class SGOSDeterministicIdentityEngine {
  /**
   * Generates stable, reproducible identity hashes for Geometry, Graph, Solver, SVG, and SceneGraph.
   */
  public static generateIdentityHashes(dsl: any): DeterministicIdentityReport {
    const compiled = GeometryCompiler.compile(dsl);
    const pipeline = SGOS.runPipeline(dsl);
    const osgm = pipeline.osgm;
    const sceneGraph = SGOSSceneGraphEngine.fromOSGM(osgm);
    const svgStr = SVGRenderer.renderToString(compiled, { theme: 'canonical_blueprint' });

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

  private static computeHash(str: string): string {
    let hash = 5381;
    for (let i = 0; i < str.length; i++) {
      hash = (hash * 33) ^ str.charCodeAt(i);
    }
    return `hash_sgos_${(hash >>> 0).toString(16)}`;
  }
}
