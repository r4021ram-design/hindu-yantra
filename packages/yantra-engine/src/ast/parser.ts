import { GeometryRootNode, ASTNode } from './types';
import { ASTNodeFactory } from './ast-nodes';
import { SymbolTable } from './symbol-table';

export interface ASTParserResult {
  readonly root: GeometryRootNode | null;
  readonly symbolTable: SymbolTable;
  readonly isValid: boolean;
  readonly errors: readonly string[];
}

export class SGOSASTParser {
  /**
   * Parses raw Geometry DSL (JSON/YAML object) into a deterministic Geometry AST & Symbol Table.
   */
  public static parse(rawDsl: any): ASTParserResult {
    const errors: string[] = [];
    const symbolTable = new SymbolTable();

    if (!rawDsl || typeof rawDsl !== 'object') {
      errors.push('DSL input must be a non-null object.');
      return { root: null, symbolTable, isValid: false, errors };
    }

    const dslId = rawDsl.id || 'custom_geometry';
    const tradition = rawDsl.tradition || rawDsl.metadata?.tradition || 'Srividya Kaula';
    const symmetryOrder = rawDsl.geometryRules?.symmetryGroupOrder || 8;

    const childrenNodes: ASTNode[] = [];

    // 1. Metadata Node
    const metaNode = ASTNodeFactory.createMetadataNode({
      titleSanskrit: rawDsl.names?.sanskrit || rawDsl.metadata?.titleSanskrit || 'Sacred Geometry',
      titleEnglish: rawDsl.names?.english || rawDsl.metadata?.titleEnglish || 'Sacred Geometry',
      author: rawDsl.metadata?.author
    });
    childrenNodes.push(metaNode);
    symbolTable.defineSymbol(metaNode.id, 'metadata', metaNode);

    // 2. Bindu Node
    const binduNode = ASTNodeFactory.createBinduNode();
    const binduLayer = ASTNodeFactory.createLayerNode({
      layerId: 'bindu',
      sanskritName: 'Bindu',
      englishName: 'Central Point',
      orderIndex: 0,
      isSacredEnclosure: true,
      children: [binduNode]
    });
    childrenNodes.push(binduLayer);
    symbolTable.defineSymbol(binduNode.id, 'geometry', binduNode, 'bindu');
    symbolTable.defineSymbol(binduLayer.id, 'layer', binduLayer);

    const rules = rawDsl.geometryRules || {};

    // 3. Core Triangles Layer
    if (rules.shriYantraCore || rules.triangleSets || dslId === 'sri_yantra') {
      const shivaNode = ASTNodeFactory.createTriangleNode({
        triangleId: 'shiva_primary_group',
        orientation: 'upward',
        isPrimary: true
      });
      const shaktiNode = ASTNodeFactory.createTriangleNode({
        triangleId: 'shakti_primary_group',
        orientation: 'downward',
        isPrimary: true
      });

      const coreLayer = ASTNodeFactory.createLayerNode({
        layerId: 'core_triangles',
        sanskritName: 'Trikona Network',
        englishName: 'Primary & Sub-Triangles',
        orderIndex: 1,
        isSacredEnclosure: true,
        children: [shivaNode, shaktiNode]
      });
      childrenNodes.push(coreLayer);

      symbolTable.defineSymbol(shivaNode.id, 'geometry', shivaNode, 'core_triangles');
      symbolTable.defineSymbol(shaktiNode.id, 'geometry', shaktiNode, 'core_triangles');
      symbolTable.defineSymbol(coreLayer.id, 'layer', coreLayer);
    }

    // 4. Lotus Rings Layers
    if (Array.isArray(rules.lotusRings)) {
      rules.lotusRings.forEach((lotus: any, idx: number) => {
        const lotusId = lotus.id || `lotus_${idx}`;
        const lotusNode = ASTNodeFactory.createLotusNode({
          lotusId,
          petalCount: lotus.petals ?? lotus.petalCount ?? 8,
          innerRadiusRatio: lotus.innerRadiusRatio ?? (lotus.radiusRatio ? lotus.radiusRatio * 0.75 : 0.4),
          outerRadiusRatio: lotus.outerRadiusRatio ?? (lotus.radiusRatio || 0.5),
          petalShape: lotus.shape || 'pointed',
          sanskritName: lotus.sanskritName
        });

        const lotusLayer = ASTNodeFactory.createLayerNode({
          layerId: lotusId,
          sanskritName: lotus.sanskritName || `Lotus Ring ${idx + 1}`,
          englishName: lotus.englishName || `${lotus.petals || 8}-Petal Lotus`,
          orderIndex: childrenNodes.length,
          isSacredEnclosure: true,
          children: [lotusNode]
        });
        childrenNodes.push(lotusLayer);

        symbolTable.defineSymbol(lotusNode.id, 'geometry', lotusNode, lotusId);
        symbolTable.defineSymbol(lotusLayer.id, 'layer', lotusLayer);
      });
    }

    // 5. Concentric Circles Layer
    if (Array.isArray(rules.concentricCircles)) {
      rules.concentricCircles.forEach((circle: any, idx: number) => {
        const circleId = circle.id || `circle_${idx}`;
        const circleNode = ASTNodeFactory.createCircleNode({
          circleId,
          radiusRatio: circle.radiusRatio ?? 0.8,
          sanskritName: circle.sanskritName
        });

        const circleLayer = ASTNodeFactory.createLayerNode({
          layerId: circleId,
          sanskritName: circle.sanskritName || `Mekhala ${idx + 1}`,
          englishName: `Concentric Circle ${idx + 1}`,
          orderIndex: childrenNodes.length,
          isSacredEnclosure: false,
          children: [circleNode]
        });
        childrenNodes.push(circleLayer);

        symbolTable.defineSymbol(circleNode.id, 'geometry', circleNode, circleId);
        symbolTable.defineSymbol(circleLayer.id, 'layer', circleLayer);
      });
    }

    // 6. Bhupura Citadel Layer
    if (rules.bhupura?.enabled) {
      const bhupuraNode = ASTNodeFactory.createBhupuraNode({
        enabled: true,
        steps: rules.bhupura.steps || 3,
        gateCount: 4
      });

      const bhupuraLayer = ASTNodeFactory.createLayerNode({
        layerId: 'bhupura',
        sanskritName: 'Bhupura',
        englishName: 'Earth Citadel',
        orderIndex: childrenNodes.length,
        isSacredEnclosure: true,
        children: [bhupuraNode]
      });
      childrenNodes.push(bhupuraLayer);

      symbolTable.defineSymbol(bhupuraNode.id, 'geometry', bhupuraNode, 'bhupura');
      symbolTable.defineSymbol(bhupuraLayer.id, 'layer', bhupuraLayer);
    }

    // Construct Root Node
    const rootNode = ASTNodeFactory.createRootNode({
      dslId,
      tradition,
      symmetryGroupOrder: symmetryOrder,
      children: childrenNodes
    });
    symbolTable.defineSymbol(rootNode.id, 'geometry', rootNode, 'global');

    // Collect Symbol Table Diagnostics
    const symDiags = symbolTable.getDiagnostics();
    symDiags.forEach(sd => {
      if (sd.severity === 'error') {
        errors.push(sd.message);
      }
    });

    return {
      root: rootNode,
      symbolTable,
      isValid: errors.length === 0,
      errors: Object.freeze(errors)
    };
  }
}
