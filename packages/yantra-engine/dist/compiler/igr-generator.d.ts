import { IntermediateGeometryRepresentation, IGRConstraint, ConstructionGraph } from './types';
import { CompilerDiagnosticsBuilder } from './diagnostics';
export declare class IGRGenerator {
    static readonly COMPILER_VERSION = "1.0.0-sgos.phase1";
    static readonly SCHEMA_VERSION = "1.0.0";
    /**
     * Pipeline Stage 6: Generate Intermediate Geometry Representation (IGR)
     * Must NOT generate SVG, Canvas, or Meshes. Output is pure abstract geometry data.
     */
    static generate(dsl: any, constraints: readonly IGRConstraint[], graph: ConstructionGraph, diagnostics: CompilerDiagnosticsBuilder): IntermediateGeometryRepresentation;
    private static computeHash;
}
