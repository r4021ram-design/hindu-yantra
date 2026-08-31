import { SymbolEntry, ASTNode } from './types';

export interface SymbolDiagnostic {
  readonly code: string;
  readonly message: string;
  readonly symbolId: string;
  readonly severity: 'error' | 'warning';
}

export class SymbolTable {
  private symbols: Map<string, SymbolEntry> = new Map();
  private diagnostics: SymbolDiagnostic[] = [];

  /**
   * Defines a symbol in the table. Emits duplicate symbol error if already present in scope.
   */
  public defineSymbol(id: string, symbolType: SymbolEntry['symbolType'], nodeRef: ASTNode, scope = 'global'): boolean {
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
  public resolveSymbol(id: string, scope = 'global'): SymbolEntry | null {
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
  public hasSymbol(id: string, scope = 'global'): boolean {
    return this.symbols.has(`${scope}::${id}`) || this.symbols.has(`global::${id}`);
  }

  /** Get all registered symbol entries */
  public getAllSymbols(): readonly SymbolEntry[] {
    return Object.freeze(Array.from(this.symbols.values()));
  }

  /** Get diagnostic messages */
  public getDiagnostics(): readonly SymbolDiagnostic[] {
    return Object.freeze([...this.diagnostics]);
  }

  /** Clear all symbols and diagnostics */
  public clear(): void {
    this.symbols.clear();
    this.diagnostics = [];
  }
}
