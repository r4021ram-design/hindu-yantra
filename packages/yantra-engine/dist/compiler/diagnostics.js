"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompilerDiagnosticsBuilder = void 0;
class CompilerDiagnosticsBuilder {
    errors = [];
    warnings = [];
    suggestions = [];
    layerStatsMap = new Map();
    startTime = Date.now();
    totalNodes = 0;
    totalEdges = 0;
    totalPrimitives = 0;
    primaryTriangleCount = 0;
    subTriangleCount = 0;
    circleCount = 0;
    lotusRingCount = 0;
    totalPetalCount = 0;
    bhupuraGateCount = 0;
    symmetryGroupOrder = 1;
    depthOfConstructionGraph = 0;
    addDiagnostic(code, message, severity, location, fixSuggestion) {
        const diag = {
            code,
            message,
            severity,
            location,
            fixSuggestion
        };
        if (severity === 'error') {
            this.errors.push(diag);
        }
        else if (severity === 'warning') {
            this.warnings.push(diag);
        }
        else {
            this.suggestions.push(diag);
        }
    }
    addError(code, message, location, fixSuggestion) {
        this.addDiagnostic(code, message, 'error', location, fixSuggestion);
    }
    addWarning(code, message, location, fixSuggestion) {
        this.addDiagnostic(code, message, 'warning', location, fixSuggestion);
    }
    addSuggestion(code, message, location, fixSuggestion) {
        this.addDiagnostic(code, message, 'suggestion', location, fixSuggestion);
    }
    recordGeometryStats(stats) {
        if (stats.totalNodes !== undefined)
            this.totalNodes = stats.totalNodes;
        if (stats.totalEdges !== undefined)
            this.totalEdges = stats.totalEdges;
        if (stats.totalPrimitives !== undefined)
            this.totalPrimitives = stats.totalPrimitives;
        if (stats.primaryTriangleCount !== undefined)
            this.primaryTriangleCount = stats.primaryTriangleCount;
        if (stats.subTriangleCount !== undefined)
            this.subTriangleCount = stats.subTriangleCount;
        if (stats.circleCount !== undefined)
            this.circleCount = stats.circleCount;
        if (stats.lotusRingCount !== undefined)
            this.lotusRingCount = stats.lotusRingCount;
        if (stats.totalPetalCount !== undefined)
            this.totalPetalCount = stats.totalPetalCount;
        if (stats.bhupuraGateCount !== undefined)
            this.bhupuraGateCount = stats.bhupuraGateCount;
        if (stats.symmetryGroupOrder !== undefined)
            this.symmetryGroupOrder = stats.symmetryGroupOrder;
        if (stats.depthOfConstructionGraph !== undefined)
            this.depthOfConstructionGraph = stats.depthOfConstructionGraph;
    }
    recordLayerStat(stat) {
        this.layerStatsMap.set(stat.layerId, stat);
    }
    buildDiagnostics() {
        const compilationTimeMs = Math.max(0, Date.now() - this.startTime);
        const stats = {
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
exports.CompilerDiagnosticsBuilder = CompilerDiagnosticsBuilder;
