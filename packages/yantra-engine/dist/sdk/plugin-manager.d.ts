import { SGOSPluginContainer, SGOSPlugin } from './types';
import { GeometryDSL } from '../compiler/types';
export declare class SGOSPluginManager implements SGOSPluginContainer {
    private geometries;
    private constraints;
    private solvers;
    private renderers;
    private exporters;
    private inspectors;
    private transformations;
    private loadedPlugins;
    registerPlugin(plugin: SGOSPlugin): void;
    registerGeometry(id: string, definition: GeometryDSL): void;
    registerConstraint(id: string, constraintClass: any): void;
    registerSolver(id: string, solverClass: any): void;
    registerRenderer(id: string, rendererClass: any): void;
    registerExporter(id: string, exporterClass: any): void;
    registerInspector(id: string, inspectorClass: any): void;
    registerTransformation(id: string, transformFn: (geometry: any) => any): void;
    getGeometry(id: string): GeometryDSL | undefined;
    getLoadedPlugins(): readonly SGOSPlugin[];
}
