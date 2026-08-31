import { SGOSCompilerOptions, SGOSCompilationResult } from './types';
import { GeometryRootNode } from '../ast/types';
export declare class SGOSGeometryCompiler {
    /**
     * Main Compilation Pipeline: Geometry DSL -> AST -> Intermediate Geometry Representation (IGR)
     * Pure TypeScript, zero UI dependency, zero graphics generation.
     */
    static compile(rawDsl: any, options?: SGOSCompilerOptions): SGOSCompilationResult;
    /**
     * AST-based Compilation Entry Point: Compiles from a pre-parsed GeometryRootNode AST.
     */
    static compileAST(astRoot: GeometryRootNode, options?: SGOSCompilerOptions): SGOSCompilationResult;
}
