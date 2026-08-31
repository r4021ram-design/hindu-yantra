import { SymbolEntry, ASTNode } from './types';
export interface SymbolDiagnostic {
    readonly code: string;
    readonly message: string;
    readonly symbolId: string;
    readonly severity: 'error' | 'warning';
}
export declare class SymbolTable {
    private symbols;
    private diagnostics;
    /**
     * Defines a symbol in the table. Emits duplicate symbol error if already present in scope.
     */
    defineSymbol(id: string, symbolType: SymbolEntry['symbolType'], nodeRef: ASTNode, scope?: string): boolean;
    /**
     * Resolves a symbol by ID in scope. Emits unresolved reference error if absent.
     */
    resolveSymbol(id: string, scope?: string): SymbolEntry | null;
    /** Checks if symbol exists in table */
    hasSymbol(id: string, scope?: string): boolean;
    /** Get all registered symbol entries */
    getAllSymbols(): readonly SymbolEntry[];
    /** Get diagnostic messages */
    getDiagnostics(): readonly SymbolDiagnostic[];
    /** Clear all symbols and diagnostics */
    clear(): void;
}
