import { YantraDSL } from './types';
export declare class YantraDSLRegistry {
    private static registry;
    static register(dsl: YantraDSL): void;
    static registerAll(dataset: YantraDSL[]): void;
    static getById(id: string): YantraDSL | undefined;
    static getAll(): YantraDSL[];
    static has(id: string): boolean;
}
