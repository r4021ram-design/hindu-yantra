import { GeometryDSL } from '../compiler/types';
import { GeometryGraph } from '../graph/types';
import { SolvedGeometryModel } from '../solver/types';
import { OptimizedSolvedGeometryModel, BenchmarkMetrics } from '../optimization/types';

export interface PipelineResult {
  readonly dsl: GeometryDSL;
  readonly igr: any;
  readonly graph: GeometryGraph;
  readonly sgm: SolvedGeometryModel;
  readonly osgm: OptimizedSolvedGeometryModel;
  readonly benchmark: BenchmarkMetrics;
}

export interface SGOSPluginManifest {
  readonly id: string;
  readonly name: string;
  readonly version: string;
  readonly author: string;
  readonly description: string;
}

export interface SGOSPlugin {
  readonly manifest: SGOSPluginManifest;
  register?: (sdk: SGOSPluginContainer) => void;
}

export interface SGOSPluginContainer {
  registerGeometry(id: string, definition: GeometryDSL): void;
  registerConstraint(id: string, constraintClass: any): void;
  registerSolver(id: string, solverClass: any): void;
  registerRenderer(id: string, rendererClass: any): void;
  registerExporter(id: string, exporterClass: any): void;
  registerInspector(id: string, inspectorClass: any): void;
  registerTransformation(id: string, transformFn: (geometry: any) => any): void;
}
