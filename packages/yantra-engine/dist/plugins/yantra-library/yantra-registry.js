"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YantraRegistry = exports.YantraPluginRegistry = void 0;
const sacred_geometry_library_1 = require("./sacred-geometry-library");
const sgos_sdk_1 = require("../../sdk/sgos-sdk");
class YantraPluginRegistry {
    registry = new Map();
    constructor() {
        // Register default canonical library definitions
        sacred_geometry_library_1.SacredGeometryLibrary.listAll().forEach(def => {
            this.registerYantra(def);
        });
    }
    /** Register new Yantra definition plugin */
    registerYantra(definition) {
        this.registry.set(definition.id, definition);
        // Also register with SGOS SDK Plugin Container
        sgos_sdk_1.SGOS.getPluginManager().registerGeometry(definition.id, definition.dsl);
    }
    /** Load Yantra definition by ID */
    loadYantra(id) {
        return this.registry.get(id);
    }
    /** Validate Yantra Geometry DSL schema using SGOS SDK */
    validateYantra(id) {
        const def = this.loadYantra(id);
        if (!def)
            return false;
        return sgos_sdk_1.SGOS.validate(def.dsl);
    }
    /** List traditional variants for a Yantra */
    listVariants(id) {
        return this.loadYantra(id)?.variants || [];
    }
    /** List scriptural evidence for a Yantra */
    listEvidence(id) {
        return this.loadYantra(id)?.evidence;
    }
    /** List all registered Yantras */
    listAllYantras() {
        return Array.from(this.registry.values());
    }
}
exports.YantraPluginRegistry = YantraPluginRegistry;
exports.YantraRegistry = new YantraPluginRegistry();
