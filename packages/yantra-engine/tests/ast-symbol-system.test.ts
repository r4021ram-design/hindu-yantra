import { describe, it, expect } from 'vitest';
import { ExpressionLexer } from '../src/ast/lexer';
import { ExpressionEngine } from '../src/ast/expression-engine';
import { ASTNodeFactory } from '../src/ast/ast-nodes';
import { SymbolTable } from '../src/ast/symbol-table';
import { SGOSASTParser } from '../src/ast/parser';
import { SGOSGeometryCompiler } from '../src/compiler/sgos-compiler';
import { MASTER_YANTRA_DATASET } from '../src/data/yantras-dsl';

describe('SGOS Phase 3 - Geometry AST & Symbol System', () => {

  it('should tokenize mathematical expression strings into lexer tokens', () => {
    const tokens = ExpressionLexer.tokenize('baseRadius * phi + 20 / sqrt(4)');
    expect(tokens.length).toBeGreaterThan(5);
    expect(tokens[0]).toEqual({ type: 'IDENTIFIER', value: 'baseRadius', position: 0 });
    expect(tokens[1]).toEqual({ type: 'OPERATOR', value: '*', position: 11 });
    expect(tokens[2]).toEqual({ type: 'IDENTIFIER', value: 'phi', position: 13 });
  });

  it('should evaluate mathematical expressions with variables, constants (phi, pi), and functions', () => {
    const val1 = ExpressionEngine.evaluate('baseRadius * phi', { baseRadius: 10 });
    expect(val1).toBeCloseTo(16.18033988, 5);

    const val2 = ExpressionEngine.evaluate('sqrt(16) + min(10, 5)');
    expect(val2).toBe(9);

    const val3 = ExpressionEngine.evaluate('100 * pi');
    expect(val3).toBeCloseTo(314.159265, 4);
  });

  it('should create strongly-typed AST nodes with required attributes and metadata', () => {
    const root = ASTNodeFactory.createRootNode({
      dslId: 'sri_yantra',
      tradition: 'Srividya Kaula',
      symmetryGroupOrder: 8
    });

    expect(root.nodeType).toBe('GeometryRoot');
    expect(root.dslId).toBe('sri_yantra');
    expect(root.version).toBe('1.0.0');
    expect(root.evidenceReferences.length).toBeGreaterThan(0);
  });

  it('should manage Symbol Table registrations, resolve symbols, and report duplicate errors', () => {
    const symTable = new SymbolTable();
    const node = ASTNodeFactory.createBinduNode();

    const ok = symTable.defineSymbol('bindu_node', 'geometry', node, 'bindu_scope');
    expect(ok).toBe(true);

    const resolved = symTable.resolveSymbol('bindu_node', 'bindu_scope');
    expect(resolved).not.toBeNull();
    expect(resolved?.id).toBe('bindu_node');

    // Duplicate registration error test
    const dup = symTable.defineSymbol('bindu_node', 'geometry', node, 'bindu_scope');
    expect(dup).toBe(false);
    expect(symTable.getDiagnostics().some(d => d.code === 'SGOS_SYM_001_DUPLICATE_SYMBOL')).toBe(true);

    // Unresolved reference test
    const missing = symTable.resolveSymbol('non_existent_node', 'bindu_scope');
    expect(missing).toBeNull();
    expect(symTable.getDiagnostics().some(d => d.code === 'SGOS_SYM_002_UNRESOLVED_REFERENCE')).toBe(true);
  });

  it('should parse raw Geometry DSL into a valid AST Root and Symbol Table', () => {
    const sriDsl = MASTER_YANTRA_DATASET.find(y => y.id === 'sri_yantra')!;
    const parseRes = SGOSASTParser.parse(sriDsl);

    expect(parseRes.isValid).toBe(true);
    expect(parseRes.root).not.toBeNull();
    expect(parseRes.symbolTable.getAllSymbols().length).toBeGreaterThan(0);

    if (parseRes.root) {
      expect(parseRes.root.dslId).toBe('sri_yantra');
      expect(parseRes.root.children.length).toBeGreaterThanOrEqual(4);
    }
  });

  it('should compile pre-parsed AST Root into an IGR using SGOSGeometryCompiler', () => {
    const sriDsl = MASTER_YANTRA_DATASET.find(y => y.id === 'sri_yantra')!;
    const parseRes = SGOSASTParser.parse(sriDsl);
    expect(parseRes.root).not.toBeNull();

    const compileRes = SGOSGeometryCompiler.compileAST(parseRes.root!);
    expect(compileRes.diagnostics.isValid).toBe(true);
    expect(compileRes.igr).not.toBeNull();
    expect(compileRes.igr?.dslId).toBe('sri_yantra');
  });
});
