"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SGOSComputationalSolverKernel = void 0;
const analytical_solver_1 = require("./analytical-solver");
const numerical_solver_1 = require("./numerical-solver");
const topology_solver_1 = require("./topology-solver");
const sgos_constraint_engine_1 = require("../constraints/sgos-constraint-engine");
const sgos_compiler_1 = require("../compiler/sgos-compiler");
class SGOSComputationalSolverKernel {
    static SOLVER_VERSION = '1.0.0-sgos.phase5';
    static ALGORITHM_VERSION = '2.1.0';
    /**
     * Main Execution Pipeline: GeometryGraph -> Solved Geometry Model (SGM)
     * Pure TypeScript, zero rendering code, zero mesh generation.
     */
    static solve(graph, options = {}) {
        const startTime = Date.now();
        const viewportSize = options.viewportSize || 1000;
        const center = viewportSize / 2;
        const baseRadius = center * 0.88;
        // 1. Run Constraint Validation Stage
        const compileRes = sgos_compiler_1.SGOSGeometryCompiler.compile({
            id: graph.dslId,
            tradition: graph.tradition,
            geometryRules: {
                symmetryGroupOrder: parseInt(graph.symmetryGroup.replace('C_', '')) || 8,
                shriYantraCore: { shivaTriangles: 4, shaktiTriangles: 5 },
                bhupura: { enabled: true, steps: 3 }
            }
        });
        const constraintEngine = new sgos_constraint_engine_1.SGOSConstraintEngine();
        const validatedResult = constraintEngine.validate(compileRes.igr);
        // 2. Analytical Solver Stage: Solve exact 2D coordinates
        const solvedCoordsRaw = {};
        Object.values(graph.nodes).forEach(n => {
            const absX = center + n.relativeX * baseRadius;
            const absY = center + n.relativeY * baseRadius;
            solvedCoordsRaw[n.id] = { x: absX, y: absY, z: 0 };
        });
        // 3. Numerical Solver Stage: Iterative refinement
        const refinement = options.enableNumericalRefinement !== false
            ? numerical_solver_1.NumericalSolver.refineNodePositions(solvedCoordsRaw, options.convergenceTolerance, options.maxIterations)
            : {
                refinedCoords: solvedCoordsRaw,
                stats: { iterationsCount: 1, converged: true, finalResidualError: 0, maxResidualError: 0 },
                stability: { isStable: true, floatingPointDrift: 0 }
            };
        const solvedCoords = refinement.refinedCoords;
        // 4. Topology Solver Stage: Solve Edges, Faces & Winding Order
        const solvedEdges = {};
        Object.values(graph.edges).forEach(e => {
            const p1 = solvedCoords[e.startNodeId] || { x: center, y: center };
            const p2 = solvedCoords[e.endNodeId] || { x: center, y: center };
            const dx = p2.x - p1.x;
            const dy = p2.y - p1.y;
            solvedEdges[e.id] = {
                id: e.id,
                start: p1,
                end: p2,
                length: Math.sqrt(dx * dx + dy * dy)
            };
        });
        const solvedFaces = {};
        Object.values(graph.faces).forEach(f => {
            const rawVerts = f.nodeIds.map(nid => solvedCoords[nid]).filter(Boolean);
            const ccwVerts = topology_solver_1.TopologySolver.enforceCCW(rawVerts);
            const centroid = analytical_solver_1.AnalyticalSolver.computeCentroid(ccwVerts);
            const area = analytical_solver_1.AnalyticalSolver.computePolygonArea(ccwVerts);
            solvedFaces[f.id] = {
                id: f.id,
                type: f.type,
                vertices: Object.freeze(ccwVerts),
                centroid,
                area,
                windingOrder: 'CCW'
            };
        });
        const solvedRegions = graph.regions.map(r => {
            const rFaces = r.faceIds.map(fid => solvedFaces[fid]).filter(Boolean);
            return {
                id: r.id,
                sanskritName: r.nameSanskrit,
                englishName: r.nameEnglish,
                faces: Object.freeze(rFaces)
            };
        });
        const executionTimeMs = Math.max(0, Date.now() - startTime);
        const solverReport = {
            isSolved: true,
            executionTimeMs,
            analyticalSolutionsCount: Object.keys(solvedCoords).length,
            numericalRefinementCount: refinement.stats.iterationsCount,
            iterationStats: refinement.stats,
            constraintReport: validatedResult.constraintReport,
            stabilityReport: refinement.stability
        };
        const deterministicHash = this.computeHash(JSON.stringify({ dslId: graph.dslId, solvedCoords }));
        return {
            dslId: graph.dslId,
            tradition: graph.tradition,
            symmetryGroup: graph.symmetryGroup,
            viewportSize,
            solvedCoordinates: Object.freeze(solvedCoords),
            solvedEdges: Object.freeze(solvedEdges),
            solvedFaces: Object.freeze(solvedFaces),
            solvedRegions: Object.freeze(solvedRegions),
            solverReport,
            provenance: {
                solverVersion: this.SOLVER_VERSION,
                algorithmVersion: this.ALGORITHM_VERSION,
                generatedTimestamp: new Date().toISOString(),
                deterministicHash
            }
        };
    }
    static computeHash(str) {
        let hash = 5381;
        for (let i = 0; i < str.length; i++) {
            hash = (hash * 33) ^ str.charCodeAt(i);
        }
        return `hash_sgm_${(hash >>> 0).toString(16)}`;
    }
}
exports.SGOSComputationalSolverKernel = SGOSComputationalSolverKernel;
