"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SGOSGeometryCompiler = void 0;
const diagnostics_1 = require("./diagnostics");
const syntax_validator_1 = require("./syntax-validator");
const semantic_validator_1 = require("./semantic-validator");
const constraint_solver_1 = require("./constraint-solver");
const construction_graph_builder_1 = require("./construction-graph-builder");
const igr_generator_1 = require("./igr-generator");
const parser_1 = require("../ast/parser");
class SGOSGeometryCompiler {
    /**
     * Main Compilation Pipeline: Geometry DSL -> AST -> Intermediate Geometry Representation (IGR)
     * Pure TypeScript, zero UI dependency, zero graphics generation.
     */
    static compile(rawDsl, options = {}) {
        const diagnosticsBuilder = new diagnostics_1.CompilerDiagnosticsBuilder();
        // Stage 1: Syntax Validation
        const isSyntaxValid = syntax_validator_1.SyntaxValidator.validate(rawDsl, diagnosticsBuilder);
        if (!isSyntaxValid) {
            return {
                igr: null,
                diagnostics: diagnosticsBuilder.buildDiagnostics()
            };
        }
        // Stage 1.5: Parse Geometry AST & Symbol Table
        const astResult = parser_1.SGOSASTParser.parse(rawDsl);
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
        const isSemanticValid = semantic_validator_1.SemanticValidator.validate(rawDsl, diagnosticsBuilder);
        if (!isSemanticValid && options.strictValidation) {
            return {
                igr: null,
                diagnostics: diagnosticsBuilder.buildDiagnostics()
            };
        }
        // Stage 3: Constraint Resolution
        const constraints = constraint_solver_1.ConstraintResolver.resolve(rawDsl, diagnosticsBuilder);
        // Stage 4 & 5: Construction Graph Generation & Topology Validation (Detect Cycles)
        const constructionGraph = construction_graph_builder_1.ConstructionGraphBuilder.build(rawDsl, diagnosticsBuilder);
        if (!constructionGraph.isAcyclic) {
            return {
                igr: null,
                diagnostics: diagnosticsBuilder.buildDiagnostics()
            };
        }
        // Stage 6: Intermediate Geometry Representation (IGR) Generation (using AST root)
        const igr = igr_generator_1.IGRGenerator.generate(rawDsl, constraints, constructionGraph, diagnosticsBuilder);
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
    static compileAST(astRoot, options = {}) {
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
exports.SGOSGeometryCompiler = SGOSGeometryCompiler;
