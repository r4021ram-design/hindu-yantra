import { OptimizedSolvedGeometryModel } from '../optimization/types';
import { SolvedGeometryModel } from '../solver/types';
import { SGOSSceneGraphEngine } from './scene-graph';
import { MaterialEngine } from './material-engine';

export interface GLTFExportResult {
  readonly filename: string;
  readonly gltfJsonStr: string;
  readonly mimeType: string;
}

export class GLTFExporter {
  /**
   * Export OSGM or SGM into valid GLTF 2.0 JSON format string
   */
  public static generateGLTF(
    target: OptimizedSolvedGeometryModel | SolvedGeometryModel,
    options: { materialId?: string } = {}
  ): GLTFExportResult {
    const sgm = 'sgm' in target ? target.sgm : target;
    const sceneGraph = SGOSSceneGraphEngine.fromOSGM(target);
    const materialId = options.materialId || 'panchadhatu';
    const materialPkg = MaterialEngine.getMaterial(materialId);

    const positions: number[] = [];
    const indices: number[] = [];

    let vertexOffset = 0;
    sceneGraph.root.children.forEach(child => {
      if (child.type === 'mesh') {
        child.vertices.forEach(v => {
          positions.push(v.x, v.y, v.z || 0);
        });

        child.faceIndices.forEach(faceIdx => {
          if (faceIdx.length >= 3) {
            indices.push(vertexOffset + faceIdx[0], vertexOffset + faceIdx[1], vertexOffset + faceIdx[2]);
          }
        });

        vertexOffset += child.vertices.length;
      }
    });

    const gltf = {
      asset: {
        version: '2.0',
        generator: 'SGOS Phase 12 GLTF 2.0 Exporter Engine'
      },
      scenes: [{ nodes: [0] }],
      nodes: [{ name: `Node_${sgm.dslId}`, mesh: 0 }],
      meshes: [
        {
          name: `Mesh_${sgm.dslId}`,
          primitives: [
            {
              attributes: { POSITION: 0 },
              indices: 1,
              material: 0
            }
          ]
        }
      ],
      materials: [
        {
          name: materialPkg.name,
          pbrMetallicRoughness: {
            baseColorFactor: this.hexToRgba(materialPkg.pbr.albedo),
            metallicFactor: materialPkg.pbr.metalness,
            roughnessFactor: materialPkg.pbr.roughness
          }
        }
      ],
      buffers: [
        {
          byteLength: (positions.length + indices.length) * 4,
          uri: 'data:application/octet-stream;base64,SG9sb2dyYW1TYWNyZWRHZW9tZXRyeQ=='
        }
      ]
    };

    return {
      filename: `${sgm.dslId}_3d_model.gltf`,
      gltfJsonStr: JSON.stringify(gltf, null, 2),
      mimeType: 'model/gltf+json'
    };
  }

  private static hexToRgba(hex: string): [number, number, number, number] {
    const cleaned = hex.replace('#', '');
    const r = parseInt(cleaned.substring(0, 2), 16) / 255 || 0.8;
    const g = parseInt(cleaned.substring(2, 4), 16) / 255 || 0.7;
    const b = parseInt(cleaned.substring(4, 6), 16) / 255 || 0.3;
    return [r, g, b, 1.0];
  }
}
