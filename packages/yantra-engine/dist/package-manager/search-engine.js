"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SGOSPackageSearchEngine = void 0;
class SGOSPackageSearchEngine {
    /** Search manifests by structured query criteria */
    static search(manifests, query) {
        return manifests.filter(m => {
            if (query.deity && m.deity && !m.deity.toLowerCase().includes(query.deity.toLowerCase()))
                return false;
            if (query.planet && m.planet && !m.planet.toLowerCase().includes(query.planet.toLowerCase()))
                return false;
            if (query.chakra && m.chakra && !m.chakra.toLowerCase().includes(query.chakra.toLowerCase()))
                return false;
            if (query.geometryType && m.geometryType && !m.geometryType.toLowerCase().includes(query.geometryType.toLowerCase()))
                return false;
            if (query.tradition && m.tradition && !m.tradition.toLowerCase().includes(query.tradition.toLowerCase()))
                return false;
            if (query.evidenceLevel && m.evidenceLevel && !m.evidenceLevel.toLowerCase().includes(query.evidenceLevel.toLowerCase()))
                return false;
            if (query.trustLevel && m.trustLevel !== query.trustLevel)
                return false;
            if (query.language && m.supportedLanguages && !m.supportedLanguages.includes(query.language))
                return false;
            if (query.text) {
                const textLower = query.text.toLowerCase();
                const matchesName = m.name.toLowerCase().includes(textLower);
                const matchesUri = m.uri.toLowerCase().includes(textLower);
                const matchesKeyword = m.keywords.some(k => k.toLowerCase().includes(textLower));
                if (!matchesName && !matchesUri && !matchesKeyword)
                    return false;
            }
            return true;
        });
    }
}
exports.SGOSPackageSearchEngine = SGOSPackageSearchEngine;
