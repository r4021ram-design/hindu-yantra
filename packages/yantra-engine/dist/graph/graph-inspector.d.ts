import { GeometryGraph, GraphInspectionReport } from './types';
export declare class GraphInspector {
    /**
     * Generates a developer-oriented inspection report for a GeometryGraph topology.
     */
    static inspect(graph: GeometryGraph): GraphInspectionReport;
}
