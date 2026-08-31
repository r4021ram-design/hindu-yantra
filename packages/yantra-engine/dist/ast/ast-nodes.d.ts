import { ASTNode, GeometryRootNode, LayerNode, BinduNode, CircleNode, LotusNode, TriangleNode, BhupuraNode, ConstraintNode, MetadataNode, ExpressionASTNode } from './types';
export declare class ASTNodeFactory {
    static createExpression(raw: string | number, context?: Record<string, number>): ExpressionASTNode;
    static createRootNode(params: {
        dslId: string;
        tradition: string;
        symmetryGroupOrder: number;
        children?: readonly ASTNode[];
    }): GeometryRootNode;
    static createLayerNode(params: {
        layerId: string;
        sanskritName: string;
        englishName: string;
        orderIndex: number;
        isSacredEnclosure: boolean;
        children?: readonly ASTNode[];
    }): LayerNode;
    static createBinduNode(params?: {
        relativeX?: number;
        relativeY?: number;
    }): BinduNode;
    static createCircleNode(params: {
        circleId: string;
        radiusRatio: number | string;
        sanskritName?: string;
    }): CircleNode;
    static createLotusNode(params: {
        lotusId: string;
        petalCount: number | string;
        innerRadiusRatio?: number | string;
        outerRadiusRatio?: number | string;
        petalShape?: string;
        sanskritName?: string;
    }): LotusNode;
    static createTriangleNode(params: {
        triangleId: string;
        orientation: 'upward' | 'downward' | 'interlocking';
        isPrimary: boolean;
    }): TriangleNode;
    static createBhupuraNode(params: {
        enabled: boolean;
        steps: number | string;
        gateCount?: number;
    }): BhupuraNode;
    static createConstraintNode(params: {
        constraintId: string;
        constraintType: string;
        targetNodeIds: readonly string[];
    }): ConstraintNode;
    static createMetadataNode(params: {
        titleSanskrit: string;
        titleEnglish: string;
        author?: string;
    }): MetadataNode;
}
