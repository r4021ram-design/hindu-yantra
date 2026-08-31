"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfflineCache = exports.LocalRegistry = void 0;
const sgkb_loader_1 = require("../sgkb/sgkb-loader");
class LocalRegistry {
    id = 'local_registry';
    name = 'SGOS Local Master Registry';
    packageStore = new Map();
    constructor() {
        this.seedFromSGKB();
    }
    seedFromSGKB() {
        const uris = sgkb_loader_1.SGKBLoader.listAllURIs();
        uris.forEach(uri => {
            const sgkbPkg = sgkb_loader_1.SGKBLoader.loadByURI(uri);
            const resource = {
                manifest: {
                    name: sgkbPkg.manifest.names.english,
                    uri: sgkbPkg.manifest.uri,
                    version: sgkbPkg.manifest.versions.geometryVersion,
                    geometryVersion: sgkbPkg.manifest.versions.geometryVersion,
                    researchVersion: sgkbPkg.manifest.versions.researchVersion,
                    translationVersion: sgkbPkg.manifest.versions.translationVersion,
                    signature: sgkbPkg.manifest.sha256Signature,
                    publisher: 'SGOS Architecture Council',
                    license: 'MIT / Shastric Open License',
                    dependencies: {},
                    supportedLanguages: ['sanskrit', 'iast', 'hindi', 'english', 'gujarati'],
                    tradition: sgkbPkg.dsl.tradition || 'Vedic',
                    keywords: [sgkbPkg.dsl.id, 'yantra', 'sacred_geometry'],
                    deity: sgkbPkg.dsl.metadata?.deity,
                    geometryType: 'Yantra',
                    trustLevel: 'Official'
                },
                packageData: sgkbPkg
            };
            this.packageStore.set(uri, resource);
        });
    }
    getPackage(uri) {
        return this.packageStore.get(uri);
    }
    listManifests() {
        return Array.from(this.packageStore.values()).map(r => r.manifest);
    }
    publish(resource) {
        this.packageStore.set(resource.manifest.uri, resource);
    }
}
exports.LocalRegistry = LocalRegistry;
class OfflineCache {
    cache = new Map();
    get(uri) {
        return this.cache.get(uri);
    }
    set(uri, resource) {
        this.cache.set(uri, resource);
    }
    has(uri) {
        return this.cache.has(uri);
    }
    delete(uri) {
        this.cache.delete(uri);
    }
    listCachedURIs() {
        return Array.from(this.cache.keys());
    }
}
exports.OfflineCache = OfflineCache;
