export type ASTNodeType =
  | 'GeometryRoot'
  | 'LayerNode'
  | 'BinduNode'
  | 'CircleNode'
  | 'LotusNode'
  | 'TriangleNode'
  | 'PolygonNode'
  | 'BhupuraNode'
  | 'GroupNode'
  | 'TransformNode'
  | 'ConstraintNode'
  | 'MetadataNode'
  | 'ReferenceNode';

export interface ASTSourceLocation {
  readonly path: string;
  readonly line?: number;
  readonly column?: number;
}

export interface ASTNodeBase {
  readonly id: string;
  readonly nodeType: ASTNodeType;
  readonly parentId?: string;
  readonly children: readonly ASTNode[];
  readonly location?: ASTSourceLocation;
  readonly metadata: Record<string, any>;
  readonly version: string;
  readonly evidenceReferences: readonly string[];
}

export interface ExpressionASTNode {
  readonly rawExpression: string;
  readonly evaluatedValue?: number;
}

export interface GeometryRootNode extends ASTNodeBase {
  readonly nodeType: 'GeometryRoot';
  readonly dslId: string;
  readonly tradition: string;
  readonly symmetryGroupOrder: number;
}

export interface LayerNode extends ASTNodeBase {
  readonly nodeType: 'LayerNode';
  readonly layerId: string;
  readonly sanskritName: string;
  readonly englishName: string;
  readonly orderIndex: number;
  readonly isSacredEnclosure: boolean;
}

export interface BinduNode extends ASTNodeBase {
  readonly nodeType: 'BinduNode';
  readonly relativeX: number;
  readonly relativeY: number;
  readonly radiusExpr?: ExpressionASTNode;
}

export interface CircleNode extends ASTNodeBase {
  readonly nodeType: 'CircleNode';
  readonly circleId: string;
  readonly radiusRatioExpr: ExpressionASTNode;
  readonly sanskritName?: string;
}

export interface LotusNode extends ASTNodeBase {
  readonly nodeType: 'LotusNode';
  readonly lotusId: string;
  readonly petalCountExpr: ExpressionASTNode;
  readonly innerRadiusExpr?: ExpressionASTNode;
  readonly outerRadiusExpr?: ExpressionASTNode;
  readonly petalShape: string;
  readonly sanskritName?: string;
}

export interface TriangleNode extends ASTNodeBase {
  readonly nodeType: 'TriangleNode';
  readonly triangleId: string;
  readonly orientation: 'upward' | 'downward' | 'interlocking';
  readonly isPrimary: boolean;
}

export interface PolygonNode extends ASTNodeBase {
  readonly nodeType: 'PolygonNode';
  readonly polygonId: string;
  readonly vertexCount: number;
  readonly isCircuitPolygon: boolean;
}

export interface BhupuraNode extends ASTNodeBase {
  readonly nodeType: 'BhupuraNode';
  readonly enabled: boolean;
  readonly stepsExpr: ExpressionASTNode;
  readonly gateCount: number;
  readonly gateSizeRatioExpr?: ExpressionASTNode;
}

export interface GroupNode extends ASTNodeBase {
  readonly nodeType: 'GroupNode';
  readonly groupId: string;
}

export interface TransformNode extends ASTNodeBase {
  readonly nodeType: 'TransformNode';
  readonly scaleX: number;
  readonly scaleY: number;
  readonly rotationDegrees: number;
}

export interface ConstraintNode extends ASTNodeBase {
  readonly nodeType: 'ConstraintNode';
  readonly constraintId: string;
  readonly constraintType: string;
  readonly targetNodeIds: readonly string[];
}

export interface MetadataNode extends ASTNodeBase {
  readonly nodeType: 'MetadataNode';
  readonly titleSanskrit: string;
  readonly titleEnglish: string;
  readonly author?: string;
}

export interface ReferenceNode extends ASTNodeBase {
  readonly nodeType: 'ReferenceNode';
  readonly targetId: string;
  readonly referenceType: 'node_ref' | 'layer_ref' | 'citation_ref';
}

export type ASTNode =
  | GeometryRootNode
  | LayerNode
  | BinduNode
  | CircleNode
  | LotusNode
  | TriangleNode
  | PolygonNode
  | BhupuraNode
  | GroupNode
  | TransformNode
  | ConstraintNode
  | MetadataNode
  | ReferenceNode;

export type TokenType =
  | 'NUMBER'
  | 'IDENTIFIER'
  | 'OPERATOR'
  | 'LPAREN'
  | 'RPAREN'
  | 'COMMA'
  | 'EOF';

export interface Token {
  readonly type: TokenType;
  readonly value: string;
  readonly position: number;
}

export interface SymbolEntry {
  readonly id: string;
  readonly symbolType: 'geometry' | 'layer' | 'constraint' | 'metadata' | 'tradition';
  readonly nodeRef: ASTNode;
  readonly scope: string;
}
