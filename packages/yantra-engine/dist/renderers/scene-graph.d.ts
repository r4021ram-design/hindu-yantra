import { SolvedGeometryModel, SolvedPoint2D, SolvedFaceCoordinates } from '../solver/types';
import { OptimizedSolvedGeometryModel } from '../optimization/types';
import { QualityLevel } from './quality-profiles';
export type SceneNodeType = 'group' | 'mesh' | 'point' | 'light' | 'camera';
export interface SceneTransform {
    readonly position: {
        x: number;
        y: number;
        z: number;
    };
    readonly rotation: {
        rx: number;
        ry: number;
        rz: number;
    };
    readonly scale: {
        sx: number;
        sy: number;
        sz: number;
    };
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
export declare class SGOSSceneGraphEngine {
    /**
     * Build a renderer-agnostic SGOSSceneGraph from OSGM or SGM
     */
    static fromOSGM(target: OptimizedSolvedGeometryModel | SolvedGeometryModel, options?: {
        qualityLevel?: QualityLevel;
        activeLayerId?: string;
    }): SGOSSceneGraph;
}
