"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MantraEngine = void 0;
class MantraEngine {
    static createJapaCounter(target = 108) {
        return {
            currentCount: 0,
            targetCount: target,
            completedMalas: 0,
            isCompleted: false
        };
    }
    static stepJapa(state) {
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
    static getAudioFrequencyHz(dsl) {
        return dsl.mantra?.audioFrequencyHz || 432;
    }
}
exports.MantraEngine = MantraEngine;
