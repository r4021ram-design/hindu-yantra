import { GeometryGraph } from './types';
import { IntermediateGeometryRepresentation } from '../compiler/types';
export declare class GeometryGraphBuilder {
    /**
     * Pipeline Stage: Converts IGR into a fully connected topological GeometryGraph.
     */
    static build(igr: IntermediateGeometryRepresentation): GeometryGraph;
}
