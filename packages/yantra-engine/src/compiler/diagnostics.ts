import {
  CompilerDiagnostic,
  CompilerDiagnostics,
  CompilerDiagnosticSeverity,
  GeometryStatistics,
  LayerStatistic,
  SourceLocation
} from './types';

export class CompilerDiagnosticsBuilder {
  private errors: CompilerDiagnostic[] = [];
  private warnings: CompilerDiagnostic[] = [];
  private suggestions: CompilerDiagnostic[] = [];
  private layerStatsMap: Map<string, LayerStatistic> = new Map();
  private startTime: number = Date.now();

  private totalNodes = 0;
  private totalEdges = 0;
  private totalPrimitives = 0;
  private primaryTriangleCount = 0;
  private subTriangleCount = 0;
  private circleCount = 0;
  private lotusRingCount = 0;
  private totalPetalCount = 0;
  private bhupuraGateCount = 0;
  private symmetryGroupOrder = 1;
  private depthOfConstructionGraph = 0;

  public addDiagnostic(
    code: string,
    message: string,
    severity: CompilerDiagnosticSeverity,
    location?: SourceLocation,
    fixSuggestion?: string
  ): void {
    const diag: CompilerDiagnostic = {
      code,
      message,
      severity,
      location,
      fixSuggestion
    };

    if (severity === 'error') {
      this.errors.push(diag);
    } else if (severity === 'warning') {
      this.warnings.push(diag);
    } else {
      this.suggestions.push(diag);
    }
  }

  public addError(code: string, message: string, location?: SourceLocation, fixSuggestion?: string): void {
    this.addDiagnostic(code, message, 'error', location, fixSuggestion);
  }

  public addWarning(code: string, message: string, location?: SourceLocation, fixSuggestion?: string): void {
    this.addDiagnostic(code, message, 'warning', location, fixSuggestion);
  }

  public addSuggestion(code: string, message: string, location?: SourceLocation, fixSuggestion?: string): void {
    this.addDiagnostic(code, message, 'suggestion', location, fixSuggestion);
  }

  public recordGeometryStats(stats: Partial<GeometryStatistics>): void {
    if (stats.totalNodes !== undefined) this.totalNodes = stats.totalNodes;
    if (stats.totalEdges !== undefined) this.totalEdges = stats.totalEdges;
    if (stats.totalPrimitives !== undefined) this.totalPrimitives = stats.totalPrimitives;
    if (stats.primaryTriangleCount !== undefined) this.primaryTriangleCount = stats.primaryTriangleCount;
    if (stats.subTriangleCount !== undefined) this.subTriangleCount = stats.subTriangleCount;
    if (stats.circleCount !== undefined) this.circleCount = stats.circleCount;
    if (stats.lotusRingCount !== undefined) this.lotusRingCount = stats.lotusRingCount;
    if (stats.totalPetalCount !== undefined) this.totalPetalCount = stats.totalPetalCount;
    if (stats.bhupuraGateCount !== undefined) this.bhupuraGateCount = stats.bhupuraGateCount;
    if (stats.symmetryGroupOrder !== undefined) this.symmetryGroupOrder = stats.symmetryGroupOrder;
    if (stats.depthOfConstructionGraph !== undefined) this.depthOfConstructionGraph = stats.depthOfConstructionGraph;
  }

  public recordLayerStat(stat: LayerStatistic): void {
    this.layerStatsMap.set(stat.layerId, stat);
  }

  public buildDiagnostics(): CompilerDiagnostics {
    const compilationTimeMs = Math.max(0, Date.now() - this.startTime);

    const stats: GeometryStatistics = {
      totalNodes: this.totalNodes,
      totalEdges: this.totalEdges,
      totalLayers: this.layerStatsMap.size,
      totalPrimitives: this.totalPrimitives,
      primaryTriangleCount: this.primaryTriangleCount,
      subTriangleCount: this.subTriangleCount,
      circleCount: this.circleCount,
      lotusRingCount: this.lotusRingCount,
      totalPetalCount: this.totalPetalCount,
      bhupuraGateCount: this.bhupuraGateCount,
      symmetryGroupOrder: this.symmetryGroupOrder,
      depthOfConstructionGraph: this.depthOfConstructionGraph
    };

    return {
      isValid: this.errors.length === 0,
      errors: Object.freeze([...this.errors]),
      warnings: Object.freeze([...this.warnings]),
      suggestions: Object.freeze([...this.suggestions]),
      statistics: Object.freeze(stats),
      layerStatistics: Object.freeze(Array.from(this.layerStatsMap.values())),
      compilationTimeMs
    };
  }
}
