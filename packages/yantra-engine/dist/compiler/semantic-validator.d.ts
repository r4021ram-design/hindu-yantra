import { CompilerDiagnosticsBuilder } from './diagnostics';
export declare class SemanticValidator {
    /**
     * Pipeline Stage 2: Validate Semantic Geometry Rules & Boundary Bounds
     */
    static validate(dsl: any, diagnostics: CompilerDiagnosticsBuilder): boolean;
}
