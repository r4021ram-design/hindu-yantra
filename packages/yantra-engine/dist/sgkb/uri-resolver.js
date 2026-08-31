"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SGOSURIResolver = void 0;
class SGOSURIResolver {
    /**
     * Parses string URI into structured SGOSURI object.
     * Example: "sgos://yantra/shri" -> { domain: "yantra", entityId: "shri" }
     */
    static parse(uriString) {
        if (!uriString.startsWith('sgos://')) {
            throw new Error(`Invalid SGOS URI schema: "${uriString}". Must start with "sgos://"`);
        }
        const path = uriString.slice(7);
        const parts = path.split('/');
        if (parts.length < 2) {
            throw new Error(`Invalid SGOS URI format: "${uriString}". Expected "sgos://<domain>/<entityId>"`);
        }
        const domain = parts[0];
        const entityId = parts[1];
        const subPath = parts.slice(2).join('/') || undefined;
        return {
            uriString,
            domain,
            entityId,
            subPath
        };
    }
    /**
     * Formats domain and entityId into canonical SGOS URI string.
     */
    static format(domain, entityId) {
        return `sgos://${domain}/${entityId}`;
    }
}
exports.SGOSURIResolver = SGOSURIResolver;
