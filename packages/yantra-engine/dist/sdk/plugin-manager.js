"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SGOSPluginManager = void 0;
class SGOSPluginManager {
    geometries = new Map();
    constraints = new Map();
    solvers = new Map();
    renderers = new Map();
    exporters = new Map();
    inspectors = new Map();
    transformations = new Map();
    loadedPlugins = new Map();
    registerPlugin(plugin) {
        if (this.loadedPlugins.has(plugin.manifest.id)) {
            throw new Error(`Plugin "${plugin.manifest.id}" is already registered.`);
        }
        this.loadedPlugins.set(plugin.manifest.id, plugin);
        if (plugin.register) {
            plugin.register(this);
        }
    }
    registerGeometry(id, definition) {
        this.geometries.set(id, definition);
    }
    registerConstraint(id, constraintClass) {
        this.constraints.set(id, constraintClass);
    }
    registerSolver(id, solverClass) {
        this.solvers.set(id, solverClass);
    }
    registerRenderer(id, rendererClass) {
        this.renderers.set(id, rendererClass);
    }
    registerExporter(id, exporterClass) {
        this.exporters.set(id, exporterClass);
    }
    registerInspector(id, inspectorClass) {
        this.inspectors.set(id, inspectorClass);
    }
    registerTransformation(id, transformFn) {
        this.transformations.set(id, transformFn);
    }
    getGeometry(id) {
        return this.geometries.get(id);
    }
    getLoadedPlugins() {
        return Array.from(this.loadedPlugins.values());
    }
}
exports.SGOSPluginManager = SGOSPluginManager;
