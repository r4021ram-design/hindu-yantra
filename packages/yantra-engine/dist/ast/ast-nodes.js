"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ASTNodeFactory = void 0;
const expression_engine_1 = require("./expression-engine");
class ASTNodeFactory {
    static createExpression(raw, context = {}) {
        const rawStr = String(raw);
        const val = expression_engine_1.ExpressionEngine.evaluate(raw, context);
        return {
            rawExpression: rawStr,
            evaluatedValue: val
        };
    }
    static createRootNode(params) {
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
    static createLayerNode(params) {
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
    static createBinduNode(params) {
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
    static createCircleNode(params) {
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
    static createLotusNode(params) {
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
    static createTriangleNode(params) {
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
    static createBhupuraNode(params) {
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
    static createConstraintNode(params) {
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
    static createMetadataNode(params) {
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
exports.ASTNodeFactory = ASTNodeFactory;
