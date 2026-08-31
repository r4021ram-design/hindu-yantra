import { ExpressionLexer } from './lexer';
import { Token } from './types';

export class ExpressionEngine {
  public static readonly CONSTANTS: Record<string, number> = Object.freeze({
    phi: 1.618033988749895,
    pi: 3.141592653589793,
    e: 2.718281828459045,
    sqrt2: 1.4142135623730951,
    goldenRatio: 1.618033988749895
  });

  public static readonly FUNCTIONS: Record<string, (...args: number[]) => number> = Object.freeze({
    sin: (x: number) => Math.sin(x),
    cos: (x: number) => Math.cos(x),
    tan: (x: number) => Math.tan(x),
    sqrt: (x: number) => Math.sqrt(x),
    abs: (x: number) => Math.abs(x),
    min: (...args: number[]) => Math.min(...args),
    max: (...args: number[]) => Math.max(...args),
    floor: (x: number) => Math.floor(x),
    ceil: (x: number) => Math.ceil(x)
  });

  /**
   * Evaluates a mathematical expression string using a context variable dictionary.
   * e.g. evaluate("baseRadius * phi + 10", { baseRadius: 50 }) -> 50 * 1.6180339... + 10
   */
  public static evaluate(expr: string | number, variableContext: Record<string, number> = {}): number {
    if (typeof expr === 'number') {
      return expr;
    }
    if (!expr || typeof expr !== 'string') {
      return 0;
    }

    const trimmed = expr.trim();
    if (!trimmed) return 0;

    // Fast-path for pure numeric string
    if (!isNaN(Number(trimmed))) {
      return Number(trimmed);
    }

    const tokens = ExpressionLexer.tokenize(trimmed);
    let pos = 0;

    const parseExpression = (): number => {
      let result = parseTerm();
      while (pos < tokens.length) {
        const token = tokens[pos];
        if (token.type === 'OPERATOR' && (token.value === '+' || token.value === '-')) {
          pos++;
          const right = parseTerm();
          result = token.value === '+' ? result + right : result - right;
        } else {
          break;
        }
      }
      return result;
    };

    const parseTerm = (): number => {
      let result = parseFactor();
      while (pos < tokens.length) {
        const token = tokens[pos];
        if (token.type === 'OPERATOR' && (token.value === '*' || token.value === '/' || token.value === '%')) {
          pos++;
          const right = parseFactor();
          if (token.value === '*') result *= right;
          else if (token.value === '/') result /= right;
          else if (token.value === '%') result %= right;
        } else {
          break;
        }
      }
      return result;
    };

    const parseFactor = (): number => {
      let result = parsePrimary();
      if (pos < tokens.length && tokens[pos].type === 'OPERATOR' && tokens[pos].value === '^') {
        pos++;
        const exponent = parseFactor();
        result = Math.pow(result, exponent);
      }
      return result;
    };

    const parsePrimary = (): number => {
      if (pos >= tokens.length) return 0;

      const token = tokens[pos];

      // Unary minus
      if (token.type === 'OPERATOR' && token.value === '-') {
        pos++;
        return -parsePrimary();
      }

      // Parentheses
      if (token.type === 'LPAREN') {
        pos++;
        const val = parseExpression();
        if (pos < tokens.length && tokens[pos].type === 'RPAREN') {
          pos++;
        }
        return val;
      }

      // Numbers
      if (token.type === 'NUMBER') {
        pos++;
        return parseFloat(token.value);
      }

      // Identifiers (Variables, Constants, Functions)
      if (token.type === 'IDENTIFIER') {
        const id = token.value;
        pos++;

        // Function call: fn(arg1, arg2)
        if (pos < tokens.length && tokens[pos].type === 'LPAREN') {
          pos++; // Consume '('
          const args: number[] = [];
          if (pos < tokens.length && tokens[pos].type !== 'RPAREN') {
            args.push(parseExpression());
            while (pos < tokens.length && tokens[pos].type === 'COMMA') {
              pos++;
              args.push(parseExpression());
            }
          }
          if (pos < tokens.length && tokens[pos].type === 'RPAREN') {
            pos++;
          }

          const fn = this.FUNCTIONS[id];
          if (fn) {
            return fn(...args);
          }
          return 0;
        }

        // Variable context override
        if (id in variableContext) {
          return variableContext[id];
        }

        // Constants
        if (id in this.CONSTANTS) {
          return this.CONSTANTS[id];
        }
      }

      return 0;
    };

    try {
      return parseExpression();
    } catch {
      return 0;
    }
  }
}
