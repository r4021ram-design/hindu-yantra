import { Token } from './types';
export declare class ExpressionLexer {
    /**
     * Tokenizes mathematical expression strings into Token sequence.
     * e.g. "baseRadius * phi + 20" -> [IDENTIFIER(baseRadius), OPERATOR(*), IDENTIFIER(phi), OPERATOR(+), NUMBER(20)]
     */
    static tokenize(input: string): Token[];
}
