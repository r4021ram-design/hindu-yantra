import { SolvedGeometryModel, SolvedPoint2D, SolvedFaceCoordinates } from '../solver/types';
import { OptimizedSolvedGeometryModel } from '../optimization/types';
import { QualityLevel, QualityProfileRegistry } from './quality-profiles';

export type SceneNodeType = 'group' | 'mesh' | 'point' | 'light' | 'camera';

export interface SceneTransform {
  readonly position: { x: number; y: number; z: number };
  readonly rotation: { rx: number; ry: number; rz: number };
  readonly scale: { sx: number; sy: number; sz: number };
}

export interface SGOSBaseSceneNode {
  readonly id: string;
  readonly type: SceneNodeType;
  readonly layerId: string;
  readonly sanskritName?: string;
  readonly englishName?: string;
  readonly transform: SceneTransform;
  readonly visible: boolean;
  readonly metadata?: Record<string, any>;
}

export interface SGOSMeshNode extends SGOSBaseSceneNode {
  readonly type: 'mesh';
  readonly vertices: readonly SolvedPoint2D[];
  readonly faceIndices: readonly number[][];
  readonly faces: readonly SolvedFaceCoordinates[];
  readonly materialId: string;
  readonly isSacredEnclosure: boolean;
}

export interface SGOSPointNode extends SGOSBaseSceneNode {
  readonly type: 'point';
  readonly position2D: SolvedPoint2D;
  readonly role?: 'bindu' | 'marma' | 'vertex' | 'center';
  readonly isBindu: boolean;
}

export interface SGOSGroupNode extends SGOSBaseSceneNode {
  readonly type: 'group';
  readonly children: readonly (SGOSGroupNode | SGOSMeshNode | SGOSPointNode)[];
}

export interface SGOSSceneGraph {
  readonly schemaVersion: string;
  readonly yantraId: string;
  readonly deterministicHash: string;
  readonly root: SGOSGroupNode;
  readonly nodeCount: number;
  readonly totalVertices: number;
  readonly totalFaces: number;
  readonly bounds: {
    readonly minX: number;
    readonly minY: number;
    readonly maxX: number;
    readonly maxY: number;
    readonly width: number;
    readonly height: number;
  };
}

export class SGOSSceneGraphEngine {
  /**
   * Build a renderer-agnostic SGOSSceneGraph from OSGM or SGM
   */
  public static fromOSGM(
    target: OptimizedSolvedGeometryModel | SolvedGeometryModel,
    options: { qualityLevel?: QualityLevel; activeLayerId?: string } = {}
  ): SGOSSceneGraph {
    const sgm = 'sgm' in target ? target.sgm : target;
    const hash = 'provenance' in target && target.provenance.deterministicHash
      ? target.provenance.deterministicHash
      : `hash_${sgm.dslId}`;

    const profile = QualityProfileRegistry.getProfile(options.qualityLevel || 'High');
    const nodesMap = new Map<string, SGOSMeshNode | SGOSPointNode>();

    let totalVertices = 0;
    let totalFaces = 0;

    // Group faces by layer
    const layerFaceMap = new Map<string, SolvedFaceCoordinates[]>();
    Object.values(sgm.solvedFaces).forEach(face => {
      const layerId = (face as any).layerId || face.id.split('_')[0] || 'default';
      if (!layerFaceMap.has(layerId)) {
        layerFaceMap.set(layerId, []);
      }
      layerFaceMap.get(layerId)!.push(face);
    });

    const groupChildren: (SGOSGroupNode | SGOSMeshNode | SGOSPointNode)[] = [];

    // Create Mesh Nodes for each layer
    layerFaceMap.forEach((faces, layerId) => {
      const isVisible = options.activeLayerId ? layerId === options.activeLayerId : true;
      const meshNodeId = `mesh_group_${layerId}`;

      const verticesSet: SolvedPoint2D[] = [];
      const faceIndices: number[][] = [];

      faces.forEach(face => {
        const currentFaceIndices: number[] = [];
        face.vertices.forEach(v => {
          let idx = verticesSet.findIndex(existing => Math.abs(existing.x - v.x) < 1e-4 && Math.abs(existing.y - v.y) < 1e-4);
          if (idx === -1) {
            verticesSet.push(v);
            idx = verticesSet.length - 1;
          }
          currentFaceIndices.push(idx);
        });
        faceIndices.push(currentFaceIndices);
      });

      totalVertices += verticesSet.length;
      totalFaces += faces.length;

      const meshNode: SGOSMeshNode = {
        id: meshNodeId,
        type: 'mesh',
        layerId,
        sanskritName: `मण्डल स्तर ${layerId}`,
        englishName: `Layer ${layerId}`,
        transform: {
          position: { x: 0, y: 0, z: 0 },
          rotation: { rx: 0, ry: 0, rz: 0 },
          scale: { sx: 1, sy: 1, sz: 1 }
        },
        visible: isVisible,
        vertices: Object.freeze(verticesSet),
        faceIndices: Object.freeze(faceIndices),
        faces: Object.freeze(faces),
        materialId: layerId === 'central_trikona' ? 'gold' : 'panchadhatu',
        isSacredEnclosure: layerId.includes('bhupura') || layerId.includes('chaturdasharam')
      };

      groupChildren.push(meshNode);
    });

    // Create Bindu Point Node if present
    const binduPoint = Object.values(sgm.solvedCoordinates).find(p => p.x === 500 && p.y === 500) || sgm.solvedCoordinates['p_bindu'];
    if (binduPoint) {
      const binduNode: SGOSPointNode = {
        id: 'node_bindu_apex',
        type: 'point',
        layerId: 'bindu',
        sanskritName: 'केन्द्रीय सर्वआनन्दमय बिन्दु',
        englishName: 'Central Bindu Singularity',
        transform: {
          position: { x: binduPoint.x, y: binduPoint.y, z: 0 },
          rotation: { rx: 0, ry: 0, rz: 0 },
          scale: { sx: 1, sy: 1, sz: 1 }
        },
        visible: true,
        position2D: binduPoint,
        role: 'bindu',
        isBindu: true
      };
      groupChildren.push(binduNode);
    }

    const rootGroup: SGOSGroupNode = {
      id: `scene_root_${sgm.dslId}`,
      type: 'group',
      layerId: 'root',
      sanskritName: 'सम्पूर्ण यन्त्र मण्डल',
      englishName: 'Full Yantra Mandala Scene',
      transform: {
        position: { x: 0, y: 0, z: 0 },
        rotation: { rx: 0, ry: 0, rz: 0 },
        scale: { sx: 1, sy: 1, sz: 1 }
      },
      visible: true,
      children: Object.freeze(groupChildren)
    };

    return {
      schemaVersion: '1.0.0-sgos.scene-graph',
      yantraId: sgm.dslId,
      deterministicHash: hash,
      root: rootGroup,
      nodeCount: groupChildren.length + 1,
      totalVertices,
      totalFaces,
      bounds: {
        minX: 0,
        minY: 0,
        maxX: sgm.viewportSize || 1000,
        maxY: sgm.viewportSize || 1000,
        width: sgm.viewportSize || 1000,
        height: sgm.viewportSize || 1000
      }
    };
  }
}
