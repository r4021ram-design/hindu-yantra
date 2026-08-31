"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChiodoValidator = void 0;
const chiodo_construction_engine_1 = require("../construction/chiodo-construction-engine");
const constraint_solver_1 = require("../constraints/constraint-solver");
const topology_engine_1 = require("../topology/topology-engine");
const reference_comparator_1 = require("./reference-comparator");
class ChiodoValidator {
    /**
     * Paper: Alessandro Chiodo (2021)
     * Section: 2.4
     * Figure: Figure 1 & Figure 11
     * Meaning: Generates full mathematical, topological, Euler, and reference comparison audit.
     * If ANY check fails, logs CANONICAL FAILED and identifies the FIRST incorrect geometric object.
     */
    static audit(construction) {
        const constr = construction ?? chiodo_construction_engine_1.ChiodoConstructionEngine.construct();
        const concurrency = constraint_solver_1.ConstraintSolver.verifyChiodoConstraints(constr.primaryTriangles, constr.outerCircumcircle);
        const topology = topology_engine_1.TopologyEngine.extract43SubTriangles(constr.primaryTriangles);
        const reference = reference_comparator_1.ReferenceComparator.compareToReference(constr.primaryTriangles);
        const precisionError = Math.max(concurrency.outerCircleDiscrepancy, concurrency.apexBaseMaxError, concurrency.tripleIntersectionMaxError, concurrency.symmetryMaxError, reference.maxError);
        const checks = [
            {
                rule: 'Chiodo Condition (i): Outer Circumcircle Sharing (t3 & t7)',
                passed: concurrency.conditionISatisfied,
                details: `Discrepancy between t3/t7 circumcircle radii: ${concurrency.outerCircleDiscrepancy.toExponential(4)}.`
            },
            {
                rule: 'Chiodo Condition (ii): 7 Apex-Base Coincidence Pairs',
                passed: concurrency.conditionIISatisfied,
                details: `Max apex-base distance residual: ${concurrency.apexBaseMaxError.toExponential(4)}.`
            },
            {
                rule: 'Chiodo Condition (iii): 12 Triple Intersections Single-Point Coincidence',
                passed: concurrency.conditionIIISatisfied,
                details: `Max triple intersection residual: ${concurrency.tripleIntersectionMaxError.toExponential(4)}.`
            },
            {
                rule: 'Planar Graph PSLG Topology: Exactly 43 Canonical Sub-Triangles',
                passed: topology.is43TrianglesTopologyVerified,
                details: `Extracted ${topology.totalExtractedTriangles} sub-triangles across 5 Avaranas (14+10+10+8+1).`
            },
            {
                rule: 'Euler Characteristic Formula (V - E + F = 2)',
                passed: topology.eulerProof.isValidEuler,
                details: `V=${topology.eulerProof.V}, E=${topology.eulerProof.E}, F=${topology.eulerProof.F_total}, Formula Value=${topology.eulerProof.eulerFormulaValue}.`
            },
            {
                rule: 'Reference Comparison against Chiodo Figure 11 (Primary Triangles)',
                passed: reference.isMatchingFigure11,
                details: `Max vertex distance error: ${reference.maxError.toExponential(4)}.`
            },
            {
                rule: 'Reference Comparison against Chiodo Figure 1 (Canonical Śrī Yantra)',
                passed: reference.isMatchingFigure1,
                details: `RMS error: ${reference.rmsError.toExponential(4)}, Hausdorff distance: ${reference.hausdorffDistance.toExponential(4)}.`
            },
            {
                rule: 'Vertical Mirror Symmetry & Precision Bounds (< 1e-9)',
                passed: concurrency.symmetryMaxError < 1e-9,
                details: `Mirror symmetry error bound: ${concurrency.symmetryMaxError.toExponential(4)}.`
            }
        ];
        const isAuthenticChiodoGeometry = checks.every(c => c.passed);
        const overallScore = isAuthenticChiodoGeometry ? 100 : Math.round((checks.filter(c => c.passed).length / checks.length) * 100);
        let firstIncorrectObject = reference.firstIncorrectObject;
        if (!isAuthenticChiodoGeometry && !firstIncorrectObject) {
            const failedCheck = checks.find(c => !c.passed);
            firstIncorrectObject = {
                objectId: failedCheck?.rule ?? 'Geometry Verification',
                vertexId: 'V_general',
                step: 'Analytical Audit Step',
                reason: failedCheck?.details ?? 'Validation threshold breached',
                suggestedFix: 'Re-check exact analytical equations in Chiodo (2021)'
            };
        }
        let statusMessage = 'CANONICAL PASSED: 100% Mathematically Correct Alessandro Chiodo (2021) Geometry.';
        if (!isAuthenticChiodoGeometry) {
            statusMessage = `CANONICAL FAILED: First incorrect object -> ${firstIncorrectObject?.objectId} (${firstIncorrectObject?.vertexId}). Reason: ${firstIncorrectObject?.reason}`;
            console.error(statusMessage);
        }
        return {
            isAuthenticChiodoGeometry,
            concurrencyAudit: concurrency,
            topologyExtraction: topology,
            referenceComparison: reference,
            precisionError,
            overallScore,
            checks,
            firstIncorrectObject,
            statusMessage
        };
    }
}
exports.ChiodoValidator = ChiodoValidator;
