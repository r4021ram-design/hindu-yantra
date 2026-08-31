"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressionLexer = void 0;
class ExpressionLexer {
    /**
     * Tokenizes mathematical expression strings into Token sequence.
     * e.g. "baseRadius * phi + 20" -> [IDENTIFIER(baseRadius), OPERATOR(*), IDENTIFIER(phi), OPERATOR(+), NUMBER(20)]
     */
    static tokenize(input) {
        const tokens = [];
        let i = 0;
        while (i < input.length) {
            const char = input[i];
            // Skip whitespace
            if (/\s/.test(char)) {
                i++;
                continue;
            }
            // Numbers (integers or decimals)
            if (/[0-9]/.test(char) || (char === '.' && i + 1 < input.length && /[0-9]/.test(input[i + 1]))) {
                let numStr = '';
                const startPos = i;
                while (i < input.length && (/[0-9]/.test(input[i]) || input[i] === '.')) {
                    numStr += input[i];
                    i++;
                }
                tokens.push({ type: 'NUMBER', value: numStr, position: startPos });
                continue;
            }
            // Identifiers (variables, constants, functions)
            if (/[a-zA-Z_]/.test(char)) {
                let idStr = '';
                const startPos = i;
                while (i < input.length && /[a-zA-Z0-9_]/.test(input[i])) {
                    idStr += input[i];
                    i++;
                }
                tokens.push({ type: 'IDENTIFIER', value: idStr, position: startPos });
                continue;
            }
            // Operators (+ - * / ^ %)
            if (['+', '-', '*', '/', '^', '%'].includes(char)) {
                tokens.push({ type: 'OPERATOR', value: char, position: i });
                i++;
                continue;
            }
            // Parentheses & Commas
            if (char === '(') {
                tokens.push({ type: 'LPAREN', value: '(', position: i });
                i++;
                continue;
            }
            if (char === ')') {
                tokens.push({ type: 'RPAREN', value: ')', position: i });
                i++;
                continue;
            }
            if (char === ',') {
                tokens.push({ type: 'COMMA', value: ',', position: i });
                i++;
                continue;
            }
            // Unknown character
            i++;
        }
        tokens.push({ type: 'EOF', value: '', position: input.length });
        return tokens;
    }
}
exports.ExpressionLexer = ExpressionLexer;
