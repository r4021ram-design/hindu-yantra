"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YantraDSLRegistry = void 0;
class YantraDSLRegistry {
    static registry = new Map();
    static register(dsl) {
        this.registry.set(dsl.id, dsl);
    }
    static registerAll(dataset) {
        dataset.forEach(dsl => this.registry.set(dsl.id, dsl));
    }
    static getById(id) {
        return this.registry.get(id);
    }
    static getAll() {
        return Array.from(this.registry.values());
    }
    static has(id) {
        return this.registry.has(id);
    }
}
exports.YantraDSLRegistry = YantraDSLRegistry;
