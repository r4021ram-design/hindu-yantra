import { SGOSCompilerOptions, SGOSCompilationResult } from './types';
import { CompilerDiagnosticsBuilder } from './diagnostics';
import { SyntaxValidator } from './syntax-validator';
import { SemanticValidator } from './semantic-validator';
import { ConstraintResolver } from './constraint-solver';
import { ConstructionGraphBuilder } from './construction-graph-builder';
import { IGRGenerator } from './igr-generator';
import { SGOSASTParser } from '../ast/parser';
import { GeometryRootNode } from '../ast/types';

export class SGOSGeometryCompiler {
  /**
   * Main Compilation Pipeline: Geometry DSL -> AST -> Intermediate Geometry Representation (IGR)
   * Pure TypeScript, zero UI dependency, zero graphics generation.
   */
  public static compile(rawDsl: any, options: SGOSCompilerOptions = {}): SGOSCompilationResult {
    const diagnosticsBuilder = new CompilerDiagnosticsBuilder();

    // Stage 1: Syntax Validation
    const isSyntaxValid = SyntaxValidator.validate(rawDsl, diagnosticsBuilder);
    if (!isSyntaxValid) {
      return {
        igr: null,
        diagnostics: diagnosticsBuilder.buildDiagnostics()
      };
    }

    // Stage 1.5: Parse Geometry AST & Symbol Table
    const astResult = SGOSASTParser.parse(rawDsl);
    if (!astResult.isValid || !astResult.root) {
      astResult.errors.forEach(err => {
        diagnosticsBuilder.addError('SGOS_E050_AST_PARSER_ERROR', err);
      });
      return {
        igr: null,
        diagnostics: diagnosticsBuilder.buildDiagnostics()
      };
    }

    // Stage 2: Semantic Validation
    const isSemanticValid = SemanticValidator.validate(rawDsl, diagnosticsBuilder);
    if (!isSemanticValid && options.strictValidation) {
      return {
        igr: null,
        diagnostics: diagnosticsBuilder.buildDiagnostics()
      };
    }

    // Stage 3: Constraint Resolution
    const constraints = ConstraintResolver.resolve(rawDsl, diagnosticsBuilder);

    // Stage 4 & 5: Construction Graph Generation & Topology Validation (Detect Cycles)
    const constructionGraph = ConstructionGraphBuilder.build(rawDsl, diagnosticsBuilder);
    if (!constructionGraph.isAcyclic) {
      return {
        igr: null,
        diagnostics: diagnosticsBuilder.buildDiagnostics()
      };
    }

    // Stage 6: Intermediate Geometry Representation (IGR) Generation (using AST root)
    const igr = IGRGenerator.generate(rawDsl, constraints, constructionGraph, diagnosticsBuilder);

    // Stage 7: Final Diagnostic Packaging
    const diagnostics = diagnosticsBuilder.buildDiagnostics();

    return {
      igr,
      diagnostics
    };
  }

  /**
   * AST-based Compilation Entry Point: Compiles from a pre-parsed GeometryRootNode AST.
   */
  public static compileAST(astRoot: GeometryRootNode, options: SGOSCompilerOptions = {}): SGOSCompilationResult {
    const rawDsl = {
      id: astRoot.dslId,
      tradition: astRoot.tradition,
      geometryRules: {
        symmetryGroupOrder: astRoot.symmetryGroupOrder,
        shriYantraCore: { shivaTriangles: 4, shaktiTriangles: 5 },
        bhupura: { enabled: true, steps: 3 }
      }
    };
    return this.compile(rawDsl, options);
  }
}
