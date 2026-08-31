"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SymbolTable = void 0;
class SymbolTable {
    symbols = new Map();
    diagnostics = [];
    /**
     * Defines a symbol in the table. Emits duplicate symbol error if already present in scope.
     */
    defineSymbol(id, symbolType, nodeRef, scope = 'global') {
        const key = `${scope}::${id}`;
        if (this.symbols.has(key)) {
            this.diagnostics.push({
                code: 'SGOS_SYM_001_DUPLICATE_SYMBOL',
                message: `Duplicate symbol identifier "${id}" registered in scope "${scope}".`,
                symbolId: id,
                severity: 'error'
            });
            return false;
        }
        this.symbols.set(key, { id, symbolType, nodeRef, scope });
        return true;
    }
    /**
     * Resolves a symbol by ID in scope. Emits unresolved reference error if absent.
     */
    resolveSymbol(id, scope = 'global') {
        const key = `${scope}::${id}`;
        const entry = this.symbols.get(key);
        if (!entry) {
            // Try global fallback scope
            const globalKey = `global::${id}`;
            const globalEntry = this.symbols.get(globalKey);
            if (!globalEntry) {
                this.diagnostics.push({
                    code: 'SGOS_SYM_002_UNRESOLVED_REFERENCE',
                    message: `Unresolved symbol reference "${id}" in scope "${scope}".`,
                    symbolId: id,
                    severity: 'error'
                });
                return null;
            }
            return globalEntry;
        }
        return entry;
    }
    /** Checks if symbol exists in table */
    hasSymbol(id, scope = 'global') {
        return this.symbols.has(`${scope}::${id}`) || this.symbols.has(`global::${id}`);
    }
    /** Get all registered symbol entries */
    getAllSymbols() {
        return Object.freeze(Array.from(this.symbols.values()));
    }
    /** Get diagnostic messages */
    getDiagnostics() {
        return Object.freeze([...this.diagnostics]);
    }
    /** Clear all symbols and diagnostics */
    clear() {
        this.symbols.clear();
        this.diagnostics = [];
    }
}
exports.SymbolTable = SymbolTable;
