import { CompilerDiagnostics, CompilerDiagnosticSeverity, GeometryStatistics, LayerStatistic, SourceLocation } from './types';
export declare class CompilerDiagnosticsBuilder {
    private errors;
    private warnings;
    private suggestions;
    private layerStatsMap;
    private startTime;
    private totalNodes;
    private totalEdges;
    private totalPrimitives;
    private primaryTriangleCount;
    private subTriangleCount;
    private circleCount;
    private lotusRingCount;
    private totalPetalCount;
    private bhupuraGateCount;
    private symmetryGroupOrder;
    private depthOfConstructionGraph;
    addDiagnostic(code: string, message: string, severity: CompilerDiagnosticSeverity, location?: SourceLocation, fixSuggestion?: string): void;
    addError(code: string, message: string, location?: SourceLocation, fixSuggestion?: string): void;
    addWarning(code: string, message: string, location?: SourceLocation, fixSuggestion?: string): void;
    addSuggestion(code: string, message: string, location?: SourceLocation, fixSuggestion?: string): void;
    recordGeometryStats(stats: Partial<GeometryStatistics>): void;
    recordLayerStat(stat: LayerStatistic): void;
    buildDiagnostics(): CompilerDiagnostics;
}
