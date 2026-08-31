import { GeometryRootNode } from './types';
import { SymbolTable } from './symbol-table';
export interface ASTParserResult {
    readonly root: GeometryRootNode | null;
    readonly symbolTable: SymbolTable;
    readonly isValid: boolean;
    readonly errors: readonly string[];
}
export declare class SGOSASTParser {
    /**
     * Parses raw Geometry DSL (JSON/YAML object) into a deterministic Geometry AST & Symbol Table.
     */
    static parse(rawDsl: any): ASTParserResult;
}
