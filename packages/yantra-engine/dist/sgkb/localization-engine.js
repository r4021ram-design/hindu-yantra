"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SGKBLocalizationEngine = void 0;
class SGKBLocalizationEngine {
    /**
     * Resolves localized title for a specified locale string ('sanskrit' | 'iast' | 'hindi' | 'english' | 'gujarati').
     */
    static getTitle(loc, locale = 'english') {
        switch (locale) {
            case 'sanskrit':
                return loc.sanskrit;
            case 'iast':
                return loc.iast || loc.sanskrit;
            case 'hindi':
                return loc.hindi || loc.sanskrit;
            case 'gujarati':
                return loc.gujarati || loc.hindi || loc.sanskrit;
            case 'english':
            default:
                return loc.english;
        }
    }
}
exports.SGKBLocalizationEngine = SGKBLocalizationEngine;
