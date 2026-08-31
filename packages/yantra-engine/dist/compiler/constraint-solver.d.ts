import { IGRConstraint } from './types';
import { CompilerDiagnosticsBuilder } from './diagnostics';
export declare class ConstraintResolver {
    static readonly GOLDEN_RATIO = 1.618033988749895;
    /**
     * Pipeline Stage 3: Resolve Proportional Constraints & Symmetry Groups
     */
    static resolve(dsl: any, diagnostics: CompilerDiagnosticsBuilder): IGRConstraint[];
}
