import { CompilerDiagnosticsBuilder } from './diagnostics';
export declare class SyntaxValidator {
    /**
     * Pipeline Stage 1: Validate Geometry DSL Syntax & Structural Integrity
     */
    static validate(rawDsl: any, diagnostics: CompilerDiagnosticsBuilder): boolean;
    private static validateGeometryRulesSyntax;
}
