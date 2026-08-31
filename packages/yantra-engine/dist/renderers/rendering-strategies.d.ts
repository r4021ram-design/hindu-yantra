import { CompiledGeometryModel } from '../types/dsl';
import { SVGRenderOptions } from './svg-renderer';
export interface IRenderingStrategy {
    render(compiled: CompiledGeometryModel, options: SVGRenderOptions): string;
}
export declare class CanonicalBlueprintRendererStrategy implements IRenderingStrategy {
    render(compiled: CompiledGeometryModel, options: SVGRenderOptions): string;
}
export declare class EngineeringBlueprintRendererStrategy implements IRenderingStrategy {
    render(compiled: CompiledGeometryModel, options: SVGRenderOptions): string;
}
export declare class PrimaryTrianglesOnlyStrategy implements IRenderingStrategy {
    render(compiled: CompiledGeometryModel, options: SVGRenderOptions): string;
}
export declare class YantraRenderingStrategyFactory {
    static getStrategy(theme?: string): IRenderingStrategy | null;
}
