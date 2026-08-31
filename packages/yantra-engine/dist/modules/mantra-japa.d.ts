import { YantraDSL } from '../types/dsl';
export interface JapaState {
    currentCount: number;
    targetCount: number;
    completedMalas: number;
    isCompleted: boolean;
}
export declare class MantraEngine {
    static createJapaCounter(target?: number): JapaState;
    static stepJapa(state: JapaState): JapaState;
    static getAudioFrequencyHz(dsl: YantraDSL): number;
}
