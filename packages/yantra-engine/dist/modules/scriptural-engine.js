"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScripturalEngine = void 0;
class ScripturalEngine {
    static getCitations(dsl) {
        return dsl.references?.citations || dsl.scripturalReferences || [];
    }
}
exports.ScripturalEngine = ScripturalEngine;
