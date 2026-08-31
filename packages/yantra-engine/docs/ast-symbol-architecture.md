# SGOS Phase 3 - Geometry AST & Symbol System Architecture Specification

**Module**: `packages/yantra-engine/src/ast`  
**Status**: Implemented & Verified  
**Version**: 1.0.0-sgos.phase3  
**Author**: SGOS Architecture Council  

---

## 1. Executive Summary

The **SGOS Geometry AST & Symbol System** establishes a compiler-grade internal representation for every Sacred Geometry specification.

By separating parsing from compilation, the system guarantees:
- **Pure Abstract Syntax Tree (AST)** representation independent of rendering or specific output formats.
- **Symbol Table & Scoped Identifier Resolution** with duplicate symbol detection and unresolved reference diagnostics.
- **Expression Engine** supporting embedded mathematical expressions with variables, constants ($\Phi, \pi, e, \sqrt{2}$), arithmetic operators, and built-in functions (`sin`, `cos`, `sqrt`, `min`, `max`).
- **Compiler Refactoring**: The `SGOSGeometryCompiler` consumes the AST while maintaining 100% backward compatibility.

---

## 2. Pipeline Topology

```
                  Geometry DSL (JSON/YAML)
                             │
                             ▼
                 Expression Lexer (`tokenize`)
               (Token Stream: IDENT, NUM, OP)
                             │
                             ▼
                 AST Parser (`SGOSASTParser`)
              (Generates Geometry AST Root)
                             │
                             ▼
                    Symbol Table & Resolver
            (Registers Scoped Symbols & Diagnostics)
                             │
                             ▼
                    Expression Engine
         (Evaluates Math Expressions: `baseRadius * phi`)
                             │
                             ▼
               SGOS Geometry Compiler (`compileAST`)
                             │
                             ▼
         Intermediate Geometry Representation (IGR)
```

---

## 3. AST Node Types

All AST nodes inherit from `ASTNodeBase` and include: `id`, `nodeType`, `parentId`, `children`, `location`, `metadata`, `version`, and `evidenceReferences`.

Implemented Node Types:
1. `GeometryRootNode`: Root AST node containing `dslId`, `tradition`, `symmetryGroupOrder`, and child layer nodes.
2. `LayerNode`: Enclosure layer node containing `layerId`, `sanskritName`, `englishName`, `orderIndex`, `isSacredEnclosure`.
3. `BinduNode`: Central focal point node containing `relativeX`, `relativeY`, and optional `radiusExpr`.
4. `CircleNode`: Concentric circle node containing `circleId`, `radiusRatioExpr`, and `sanskritName`.
5. `LotusNode`: Lotus ring node containing `lotusId`, `petalCountExpr`, `innerRadiusExpr`, `outerRadiusExpr`, `petalShape`.
6. `TriangleNode`: Primary or sub-triangle node containing `orientation` (`upward` | `downward` | `interlocking`) and `isPrimary`.
7. `PolygonNode`: Circuit polygon node containing `vertexCount` and `isCircuitPolygon`.
8. `BhupuraNode`: Citadel node containing `enabled`, `stepsExpr`, `gateCount`.
9. `GroupNode`: Container grouping node.
10. `TransformNode`: Geometric transformation node (`scaleX`, `scaleY`, `rotationDegrees`).
11. `ConstraintNode`: Declarative constraint node (`constraintType`, `targetNodeIds`).
12. `MetadataNode`: Metadata header node (`titleSanskrit`, `titleEnglish`, `author`).
13. `ReferenceNode`: Cross-reference node referencing target node IDs or citations.

---

## 4. Symbol Table Architecture

The `SymbolTable` maintains a registry of scoped identifiers:

```typescript
export interface SymbolEntry {
  readonly id: string;
  readonly symbolType: 'geometry' | 'layer' | 'constraint' | 'metadata' | 'tradition';
  readonly nodeRef: ASTNode;
  readonly scope: string;
}
```

Capabilities:
- **Duplicate Symbol Detection**: Emits `SGOS_SYM_001_DUPLICATE_SYMBOL` if identical symbol is defined twice in the same scope.
- **Unresolved Reference Diagnostics**: Emits `SGOS_SYM_002_UNRESOLVED_REFERENCE` if a reference node points to a non-existent identifier.

---

## 5. Expression Engine Architecture

The `ExpressionEngine` parses and evaluates mathematical expression strings preserved in AST nodes (`ExpressionASTNode`).

### Constants Supported
- `phi` = $1.618033988749895$ (Golden Ratio)
- `pi` = $3.141592653589793$
- `e` = $2.718281828459045$
- `sqrt2` = $1.4142135623730951$

### Functions Supported
`sin`, `cos`, `tan`, `sqrt`, `abs`, `min`, `max`, `floor`, `ceil`

### Usage Example
```typescript
import { ExpressionEngine } from '@yantra/engine';

const val = ExpressionEngine.evaluate('baseRadius * phi + 10', { baseRadius: 0.5 });
// Evaluates to: 0.5 * 1.618033988... + 10 = 10.80901699...
```

---

## 6. AST Parser & Compiler API

```typescript
import { SGOSASTParser, SGOSGeometryCompiler } from '@yantra/engine';

// 1. Parse DSL to Geometry AST & Symbol Table
const parseResult = SGOSASTParser.parse(sriDsl);

if (parseResult.isValid && parseResult.root) {
  // 2. Compile pre-parsed AST to IGR
  const compileResult = SGOSGeometryCompiler.compileAST(parseResult.root);
  console.log('Compiled IGR from AST:', compileResult.igr?.dslId);
}
```
