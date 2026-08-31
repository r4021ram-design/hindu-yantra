import { YantraDSL } from '../types/dsl';

export interface JapaState {
  currentCount: number;
  targetCount: number;
  completedMalas: number;
  isCompleted: boolean;
}

export class MantraEngine {
  public static createJapaCounter(target: number = 108): JapaState {
    return {
      currentCount: 0,
      targetCount: target,
      completedMalas: 0,
      isCompleted: false
    };
  }

  public static stepJapa(state: JapaState): JapaState {
    const nextCount = state.currentCount + 1;
    const completedMalas = Math.floor(nextCount / 108);
    const isCompleted = nextCount >= state.targetCount;

    return {
      ...state,
      currentCount: nextCount,
      completedMalas,
      isCompleted
    };
  }

  public static getAudioFrequencyHz(dsl: YantraDSL): number {
    return dsl.mantra?.audioFrequencyHz || 432;
  }
}
