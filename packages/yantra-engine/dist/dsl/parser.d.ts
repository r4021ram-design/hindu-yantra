import { YantraDSL } from '../types/dsl';
export declare class DSLParser {
    /**
     * Parse a JSON object or string into a validated YantraDSL
     */
    static parse(input: string | Record<string, unknown> | YantraDSL | any): YantraDSL;
}
