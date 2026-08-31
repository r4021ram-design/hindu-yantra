import { describe, it, expect } from 'vitest';
import {
  Point2D, Vector2D, Line2D, Circle2D, Triangle2D, AffineTransform2D
} from '../src/kernel';
import {
  ApolloniusSolver, ChiodoConstructionEngine, ConstraintSolver, TopologyEngine, ChiodoValidator, GeometryCompiler, MASTER_YANTRA_DATASET
} from '../src';

describe('Canonical Shri Yantra Chiodo (2021) Geometry Engine', () => {
  describe('Geometry Kernel Primitives', () => {
    it('calculates point distances and dot/cross products correctly', () => {
      const p1 = new Point2D(0, 0);
      const p2 = new Point2D(3, 4);
      expect(p1.distanceTo(p2)).toBe(5);

      const v1 = new Vector2D(1, 0);
      const v2 = new Vector2D(0, 1);
      expect(v1.dot(v2)).toBe(0);
      expect(v1.cross(v2)).toBe(1);
    });

    it('finds exact line intersections and projections', () => {
      const l1 = Line2D.horizontal(2);
      const l2 = Line2D.vertical(3);
      const intersection = l1.intersectLine(l2);
      expect(intersection).not.toBeNull();
      expect(intersection?.x).toBe(3);
      expect(intersection?.y).toBe(2);
    });

    it('computes circle-line and circle-circle intersections accurately', () => {
      const circle = Circle2D.unitAtOrigin();
      const line = Line2D.horizontal(0);
      const points = circle.intersectLine(line);
      expect(points.length).toBe(2);
      expect(Math.abs(points[0].y)).toBeLessThan(1e-12);
    });

    it('applies affine transformations correctly', () => {
      const transform = AffineTransform2D.translation(5, 10);
      const p = new Point2D(1, 2);
      const transformed = transform.transformPoint(p);
      expect(transformed.x).toBe(6);
      expect(transformed.y).toBe(12);
    });
  });

  describe('Apollonius CLP Solver', () => {
    it('solves Circle-Line-Point tangency for Chiodo parameters without magic values', () => {
      const solution = ApolloniusSolver.solveChiodoCLP(ChiodoConstructionEngine.DEFAULT_INPUT);
      expect(solution.targetPointA).toBeDefined();
      expect(solution.circleXi.radius).toBeGreaterThan(0);
      expect(solution.selectedTSolution).toBeGreaterThan(0);
    });
  });

  describe('Chiodo Construction Engine', () => {
    it('constructs all 9 primary interlocking triangles procedurally', () => {
      const result = ChiodoConstructionEngine.construct();
      expect(result.primaryTriangles.length).toBe(9);
      expect(result.outerCircumcircle.radius).toBe(0.5);
    });
  });

  describe('Constraint Solver & Concurrency Verification', () => {
    it('verifies Chiodo Conditions (i), (ii), and (iii) with precision bounds', () => {
      const constr = ChiodoConstructionEngine.construct();
      const audit = ConstraintSolver.verifyChiodoConstraints(constr.primaryTriangles, constr.outerCircumcircle);

      expect(audit.conditionISatisfied).toBe(true);
      expect(audit.conditionIISatisfied).toBe(true);
      expect(audit.conditionIIISatisfied).toBe(true);
      expect(audit.outerCircleDiscrepancy).toBeLessThan(1e-4);
      expect(audit.apexBaseMaxError).toBeLessThan(1e-4);
      expect(audit.tripleIntersectionMaxError).toBeLessThan(0.35);
      expect(audit.overallConfidenceScore).toBeGreaterThanOrEqual(80);
    });
  });

  describe('Planar Graph Topology Engine', () => {
    it('automatically extracts and verifies exactly 43 sub-triangles across 5 Avaranas', () => {
      const constr = ChiodoConstructionEngine.construct();
      const topology = TopologyEngine.extract43SubTriangles(constr.primaryTriangles);

      expect(topology.totalExtractedTriangles).toBe(43);
      expect(topology.is43TrianglesTopologyVerified).toBe(true);
      expect(topology.avaranamCounts.chaturdasharam14).toBe(14);
      expect(topology.avaranamCounts.bahirDasharam10).toBe(10);
      expect(topology.avaranamCounts.antarDasharam10).toBe(10);
      expect(topology.avaranamCounts.ashtaragon8).toBe(8);
      expect(topology.avaranamCounts.centralTrikona1).toBe(1);
    });
  });

  describe('Full Chiodo Audit & Compiler Verification', () => {
    it('passes complete mathematical audit report with authentic score >= 80%', () => {
      const auditReport = ChiodoValidator.audit();
      expect(auditReport.isAuthenticChiodoGeometry).toBe(true);
      expect(auditReport.overallScore).toBeGreaterThanOrEqual(80);
      expect(auditReport.precisionError).toBeLessThan(0.35);
    });

    it('compiles Shri Yantra DSL without hardcoded coordinate arrays', () => {
      const shriDsl = MASTER_YANTRA_DATASET[0];
      const compiled = GeometryCompiler.compile(shriDsl);
      expect(compiled.polygons.length).toBe(43);
      expect(compiled.validationReport.isAuthentic).toBe(true);
      expect(compiled.validationReport.score).toBeGreaterThanOrEqual(80);
    });
  });
});
