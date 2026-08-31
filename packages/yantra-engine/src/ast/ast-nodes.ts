import {
  ASTNode,
  GeometryRootNode,
  LayerNode,
  BinduNode,
  CircleNode,
  LotusNode,
  TriangleNode,
  BhupuraNode,
  ConstraintNode,
  MetadataNode,
  ExpressionASTNode
} from './types';
import { ExpressionEngine } from './expression-engine';

export class ASTNodeFactory {
  public static createExpression(raw: string | number, context: Record<string, number> = {}): ExpressionASTNode {
    const rawStr = String(raw);
    const val = ExpressionEngine.evaluate(raw, context);
    return {
      rawExpression: rawStr,
      evaluatedValue: val
    };
  }

  public static createRootNode(params: {
    dslId: string;
    tradition: string;
    symmetryGroupOrder: number;
    children?: readonly ASTNode[];
  }): GeometryRootNode {
    return {
      id: `root_${params.dslId}`,
      nodeType: 'GeometryRoot',
      dslId: params.dslId,
      tradition: params.tradition,
      symmetryGroupOrder: params.symmetryGroupOrder,
      children: params.children || [],
      metadata: { createdAt: new Date().toISOString() },
      version: '1.0.0',
      evidenceReferences: ['Saundarya Lahari', 'Sharada Tilaka']
    };
  }

  public static createLayerNode(params: {
    layerId: string;
    sanskritName: string;
    englishName: string;
    orderIndex: number;
    isSacredEnclosure: boolean;
    children?: readonly ASTNode[];
  }): LayerNode {
    return {
      id: `layer_${params.layerId}`,
      nodeType: 'LayerNode',
      layerId: params.layerId,
      sanskritName: params.sanskritName,
      englishName: params.englishName,
      orderIndex: params.orderIndex,
      isSacredEnclosure: params.isSacredEnclosure,
      children: params.children || [],
      metadata: {},
      version: '1.0.0',
      evidenceReferences: []
    };
  }

  public static createBinduNode(params?: { relativeX?: number; relativeY?: number }): BinduNode {
    return {
      id: 'bindu_centroid',
      nodeType: 'BinduNode',
      relativeX: params?.relativeX ?? 0.0,
      relativeY: params?.relativeY ?? 0.0,
      radiusExpr: this.createExpression(0.02),
      children: [],
      metadata: { role: 'Brahma Sthan' },
      version: '1.0.0',
      evidenceReferences: ['Saundarya Lahari Verse 1']
    };
  }

  public static createCircleNode(params: {
    circleId: string;
    radiusRatio: number | string;
    sanskritName?: string;
  }): CircleNode {
    return {
      id: `circle_${params.circleId}`,
      nodeType: 'CircleNode',
      circleId: params.circleId,
      radiusRatioExpr: this.createExpression(params.radiusRatio),
      sanskritName: params.sanskritName,
      children: [],
      metadata: {},
      version: '1.0.0',
      evidenceReferences: []
    };
  }

  public static createLotusNode(params: {
    lotusId: string;
    petalCount: number | string;
    innerRadiusRatio?: number | string;
    outerRadiusRatio?: number | string;
    petalShape?: string;
    sanskritName?: string;
  }): LotusNode {
    return {
      id: `lotus_${params.lotusId}`,
      nodeType: 'LotusNode',
      lotusId: params.lotusId,
      petalCountExpr: this.createExpression(params.petalCount),
      innerRadiusExpr: params.innerRadiusRatio ? this.createExpression(params.innerRadiusRatio) : undefined,
      outerRadiusExpr: params.outerRadiusRatio ? this.createExpression(params.outerRadiusRatio) : undefined,
      petalShape: params.petalShape || 'pointed',
      sanskritName: params.sanskritName,
      children: [],
      metadata: {},
      version: '1.0.0',
      evidenceReferences: []
    };
  }

  public static createTriangleNode(params: {
    triangleId: string;
    orientation: 'upward' | 'downward' | 'interlocking';
    isPrimary: boolean;
  }): TriangleNode {
    return {
      id: `triangle_${params.triangleId}`,
      nodeType: 'TriangleNode',
      triangleId: params.triangleId,
      orientation: params.orientation,
      isPrimary: params.isPrimary,
      children: [],
      metadata: {},
      version: '1.0.0',
      evidenceReferences: []
    };
  }

  public static createBhupuraNode(params: {
    enabled: boolean;
    steps: number | string;
    gateCount?: number;
  }): BhupuraNode {
    return {
      id: 'bhupura_citadel',
      nodeType: 'BhupuraNode',
      enabled: params.enabled,
      stepsExpr: this.createExpression(params.steps),
      gateCount: params.gateCount ?? 4,
      children: [],
      metadata: { symbolism: 'Earth Citadel' },
      version: '1.0.0',
      evidenceReferences: []
    };
  }

  public static createConstraintNode(params: {
    constraintId: string;
    constraintType: string;
    targetNodeIds: readonly string[];
  }): ConstraintNode {
    return {
      id: `constraint_${params.constraintId}`,
      nodeType: 'ConstraintNode',
      constraintId: params.constraintId,
      constraintType: params.constraintType,
      targetNodeIds: params.targetNodeIds,
      children: [],
      metadata: {},
      version: '1.0.0',
      evidenceReferences: []
    };
  }

  public static createMetadataNode(params: {
    titleSanskrit: string;
    titleEnglish: string;
    author?: string;
  }): MetadataNode {
    return {
      id: 'metadata_header',
      nodeType: 'MetadataNode',
      titleSanskrit: params.titleSanskrit,
      titleEnglish: params.titleEnglish,
      author: params.author,
      children: [],
      metadata: {},
      version: '1.0.0',
      evidenceReferences: []
    };
  }
}
