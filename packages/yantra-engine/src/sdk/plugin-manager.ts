import { SGOSPluginContainer, SGOSPlugin } from './types';
import { GeometryDSL } from '../compiler/types';

export class SGOSPluginManager implements SGOSPluginContainer {
  private geometries: Map<string, GeometryDSL> = new Map();
  private constraints: Map<string, any> = new Map();
  private solvers: Map<string, any> = new Map();
  private renderers: Map<string, any> = new Map();
  private exporters: Map<string, any> = new Map();
  private inspectors: Map<string, any> = new Map();
  private transformations: Map<string, (g: any) => any> = new Map();

  private loadedPlugins: Map<string, SGOSPlugin> = new Map();

  public registerPlugin(plugin: SGOSPlugin): void {
    if (this.loadedPlugins.has(plugin.manifest.id)) {
      throw new Error(`Plugin "${plugin.manifest.id}" is already registered.`);
    }
    this.loadedPlugins.set(plugin.manifest.id, plugin);
    if (plugin.register) {
      plugin.register(this);
    }
  }

  public registerGeometry(id: string, definition: GeometryDSL): void {
    this.geometries.set(id, definition);
  }

  public registerConstraint(id: string, constraintClass: any): void {
    this.constraints.set(id, constraintClass);
  }

  public registerSolver(id: string, solverClass: any): void {
    this.solvers.set(id, solverClass);
  }

  public registerRenderer(id: string, rendererClass: any): void {
    this.renderers.set(id, rendererClass);
  }

  public registerExporter(id: string, exporterClass: any): void {
    this.exporters.set(id, exporterClass);
  }

  public registerInspector(id: string, inspectorClass: any): void {
    this.inspectors.set(id, inspectorClass);
  }

  public registerTransformation(id: string, transformFn: (geometry: any) => any): void {
    this.transformations.set(id, transformFn);
  }

  public getGeometry(id: string): GeometryDSL | undefined {
    return this.geometries.get(id);
  }

  public getLoadedPlugins(): readonly SGOSPlugin[] {
    return Array.from(this.loadedPlugins.values());
  }
}
