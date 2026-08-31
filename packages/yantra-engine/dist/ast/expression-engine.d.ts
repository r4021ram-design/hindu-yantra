export declare class ExpressionEngine {
    static readonly CONSTANTS: Record<string, number>;
    static readonly FUNCTIONS: Record<string, (...args: number[]) => number>;
    /**
     * Evaluates a mathematical expression string using a context variable dictionary.
     * e.g. evaluate("baseRadius * phi + 10", { baseRadius: 50 }) -> 50 * 1.6180339... + 10
     */
    static evaluate(expr: string | number, variableContext?: Record<string, number>): number;
}
