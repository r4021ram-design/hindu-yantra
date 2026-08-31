import { ChiodoConstructionEngine, ChiodoConstructionResult } from '../construction/chiodo-construction-engine';
import { ConstraintSolver, ConcurrencyAuditReport } from '../constraints/constraint-solver';
import { TopologyEngine, TopologyExtractionResult } from '../topology/topology-engine';
import { ReferenceComparator, ReferenceComparisonReport, GeometricFailureDetail } from './reference-comparator';

export interface ChiodoFullAuditReport {
  isAuthenticChiodoGeometry: boolean;
  concurrencyAudit: ConcurrencyAuditReport;
  topologyExtraction: TopologyExtractionResult;
  referenceComparison: ReferenceComparisonReport;
  precisionError: number;
  overallScore: number;
  checks: { rule: string; passed: boolean; details: string }[];
  firstIncorrectObject?: GeometricFailureDetail;
  statusMessage: string;
}

export class ChiodoValidator {
  /**
   * Paper: Alessandro Chiodo (2021)
   * Section: 2.4
   * Figure: Figure 1 & Figure 11
   * Meaning: Generates full mathematical, topological, Euler, and reference comparison audit.
   * If ANY check fails, logs CANONICAL FAILED and identifies the FIRST incorrect geometric object.
   */
  public static audit(construction?: ChiodoConstructionResult): ChiodoFullAuditReport {
    const constr = construction ?? ChiodoConstructionEngine.construct();
    const concurrency = ConstraintSolver.verifyChiodoConstraints(constr.primaryTriangles, constr.outerCircumcircle);
    const topology = TopologyEngine.extract43SubTriangles(constr.primaryTriangles);
    const reference = ReferenceComparator.compareToReference(constr.primaryTriangles);

    const precisionError = Math.max(
      concurrency.outerCircleDiscrepancy,
      concurrency.apexBaseMaxError,
      concurrency.tripleIntersectionMaxError,
      concurrency.symmetryMaxError,
      reference.maxError
    );

    const checks: { rule: string; passed: boolean; details: string }[] = [
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
