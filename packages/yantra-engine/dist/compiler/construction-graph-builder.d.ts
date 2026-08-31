import { ConstructionGraph } from './types';
import { CompilerDiagnosticsBuilder } from './diagnostics';
export declare class ConstructionGraphBuilder {
    /**
     * Pipeline Stage 4 & 5: Build Construction Graph DAG & Validate Topology (Detect Cycles)
     */
    static build(dsl: any, diagnostics: CompilerDiagnosticsBuilder): ConstructionGraph;
    private static detectCycles;
}
