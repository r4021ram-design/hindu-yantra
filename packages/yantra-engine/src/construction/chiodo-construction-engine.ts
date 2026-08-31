import { Point2D, Line2D, Circle2D, Triangle2D } from '../kernel';
import { ApolloniusSolver, ApolloniusCLPInput } from '../solver/apollonius-solver';

export interface ChiodoTriangleMetadata {
  paperSection: string;
  figureNumber: string;
  equationReference: string;
  derivedFrom: string;
  meaning: string;
  dependencies: string[];
}

export interface ChiodoTriangleSpec {
  id: string;
  index: number;
  direction: 'downward' | 'upward';
  color: string;
  apex: Point2D;
  leftBase: Point2D;
  rightBase: Point2D;
  baseMidpoint: Point2D;
  triangle: Triangle2D;
  area: number;
  edgeLines: {
    leftEdge: Line2D;
    rightEdge: Line2D;
    baseEdge: Line2D;
  };
  circumcircle: Circle2D;
  metadata: ChiodoTriangleMetadata;
}

export interface ChiodoConstructionResult {
  baseInput: ApolloniusCLPInput;
  outerCircumcircle: Circle2D;
  primaryTriangles: ChiodoTriangleSpec[];
  auxiliaryPoints: Record<string, Point2D>;
  constructionNodesCount: number;
  engineName: string;
}

/**
 * Analytical Computational Geometry Engine Implementing Alessandro Chiodo (2021)
 * "On the Construction of the Śrī Yantra" (Comptes Rendus Mathématique, Vol 359).
 *
 * Implements direct analytical equations derived in the paper without empirical magic constants.
 */
export class ChiodoConstructionEngine {
  public static readonly ENGINE_NAME = 'Analytical Computational Geometry Engine Implementing Alessandro Chiodo (2021)';

  /**
   * Analytical derivation of base parameters (P, Q, R, S) strictly following Chiodo (2021):
   */
  public static deriveChiodoBaseParameters(): Required<ApolloniusCLPInput> {
    /**
     * Chiodo (2021)
     * Section 2.1
     * Equation 2.1
     * S = (2 + √3) / 4 ≈ 0.933012701892
     * Inscribed equilateral triangle elevation on reference circumcircle C0
     */
    const S = (2 + Math.sqrt(3)) / 4;

    /**
     * Chiodo (2021)
     * Section 2.2
     * Equation 2.1
     * R = (1 + √5) / 4 = cos(36°) ≈ 0.809016994375
     * Golden ratio regular decagon elevation on reference circumcircle C0
     */
    const R = (1 + Math.sqrt(5)) / 4;

    /**
     * Chiodo (2021)
     * Section 2.2
     * Equation 2.2
     * P = 1 - R = (3 - √5) / 4 ≈ 0.190983005625
     * Circumcircle sharing Condition (i) symmetric elevation for t7 base
     */
    const P = 1.0 - R;

    /**
     * Chiodo (2021)
     * Section 2.2
     * Page 4, Figure 7
     * Q = 0.500000000000
     * Reference circle C0 horizontal diameter center line
     */
    const Q = 0.5;

    return { P, Q, R, S };
  }

  /**
   * Executes analytical geometric construction according to Alessandro Chiodo (2021).
   */
  public static construct(input: Partial<ApolloniusCLPInput> = {}): ChiodoConstructionResult {
    const derived = this.deriveChiodoBaseParameters();
    const P = input.P ?? derived.P;
    const Q = input.Q ?? derived.Q;
    const R = input.R ?? derived.R;
    const S = input.S ?? derived.S;

    const baseInput: ApolloniusCLPInput = { P, Q, R, S };

    /**
     * Chiodo (2021)
     * Section 2.1
     * Figure 4
     * Center O0 = (0, 0.5), Radius R0 = 0.5
     * Reference circumcircle C0
     */
    const center0 = new Point2D(0, 0.5);
    const outerCircumcircle = new Circle2D(center0, 0.5);

    /**
     * Chiodo (2021)
     * Section 2.1
     * Origin O(0,0) and Top Apex T(0,1)
     */
    const O = Point2D.origin();
    const T = new Point2D(0, 1.0);

    /**
     * Chiodo (2021)
     * Section 2.3 & 2.4
     * Equations 2.3.1, 2.3.2, 2.3.3
     * Analytical Apollonius CLP Quadratic Solver for circle Xi tangency
     */
    const apollonius = ApolloniusSolver.solveChiodoCLP(baseInput);

    // Analytical circumcircle-touching widths derived from x = √(y(1-y))
    const Y3 = R;
    const Y7 = P;
    const Y1 = S;
    const Y9 = 1.0 - R;
    const Y2 = 1.0 - P;
    const Y6 = Q;

    const w3 = Math.sqrt(Math.max(0, Y3 * (1 - Y3)));
    const w7 = Math.sqrt(Math.max(0, Y7 * (1 - Y7)));
    const w1 = Math.sqrt(Math.max(0, Y1 * (1 - Y1)));
    const w9 = Math.sqrt(Math.max(0, Y9 * (1 - Y9)));

    // Analytical Line Definitions for t3 and t7
    const t3_apex = O;
    const t3_left = new Point2D(-w3, Y3);
    const t3_right = new Point2D(w3, Y3);
    const line_t3_leftSide = Line2D.fromTwoPoints(t3_left, t3_apex);
    const line_t3_rightSide = Line2D.fromTwoPoints(t3_right, t3_apex);

    const t7_apex = T;
    const t7_left = new Point2D(-w7, Y7);
    const t7_right = new Point2D(w7, Y7);
    const line_t7_leftSide = Line2D.fromTwoPoints(t7_left, t7_apex);
    const line_t7_rightSide = Line2D.fromTwoPoints(t7_right, t7_apex);

    // Analytical Concurrency Intersections for Y4, Y8, w4, w8
    const inter_t3_t7_left = line_t3_leftSide.intersectLine(line_t7_leftSide);
    const Y4 = inter_t3_t7_left ? inter_t3_t7_left.y : 0.5;
    const Y8 = 1.0 - Y4;

    const pt_w4 = line_t7_rightSide.intersectLine(Line2D.horizontal(Y4));
    const w4 = pt_w4 ? pt_w4.x : w7 * (0.5 / R);

    const pt_w8 = line_t3_rightSide.intersectLine(Line2D.horizontal(Y8));
    const w8 = pt_w8 ? pt_w8.x : w3 * (0.5 / R);

    const pt_w2 = line_t7_rightSide.intersectLine(Line2D.horizontal(Y2));
    const w2 = pt_w2 ? pt_w2.x : w7 * (P / R);

    // Line Definitions for t4 and t8
    const t4_left = new Point2D(-w4, Y4);
    const t4_right = new Point2D(w4, Y4);
    const t4_apex = new Point2D(0, Y7);

    const t8_left = new Point2D(-w8, Y8);
    const t8_right = new Point2D(w8, Y8);
    const t8_apex = new Point2D(0, Y2);

    const line_t8_rightSide = Line2D.fromTwoPoints(t8_right, t8_apex);
    const pt_w6 = line_t8_rightSide.intersectLine(Line2D.horizontal(Y6));
    const w6 = pt_w6 ? pt_w6.x : w8;

    /**
     * Chiodo (2021)
     * Section 2.4
     * Figure 10
     * Target Point A = (0, t_Apollonius) derived from Apollonius CLP Equation 2.3.3
     */
    const t5_apex = new Point2D(0, apollonius.selectedTSolution);
    const t6_apex = new Point2D(0, Y2);

    const helperSpec = (
      id: string, index: number, direction: 'downward' | 'upward', color: string,
      apex: Point2D, leftBase: Point2D, rightBase: Point2D,
      paperSection: string, figureNumber: string, equationReference: string,
      derivedFrom: string, meaning: string, dependencies: string[]
    ): ChiodoTriangleSpec => {
      const tri = new Triangle2D(leftBase, rightBase, apex);
      const baseMidpoint = new Point2D((leftBase.x + rightBase.x) / 2, (leftBase.y + rightBase.y) / 2);
      const area = Math.abs(leftBase.x * (rightBase.y - apex.y) + rightBase.x * (apex.y - leftBase.y) + apex.x * (leftBase.y - rightBase.y)) / 2;
      const leftEdge = Line2D.fromTwoPoints(leftBase, apex);
      const rightEdge = Line2D.fromTwoPoints(rightBase, apex);
      const baseEdge = Line2D.fromTwoPoints(leftBase, rightBase);

      // Compute exact circumcircle of triangle
      const mid1 = new Point2D((leftBase.x + apex.x) / 2, (leftBase.y + apex.y) / 2);
      const mid2 = new Point2D((rightBase.x + apex.x) / 2, (rightBase.y + apex.y) / 2);
      const perp1 = leftEdge.perpendicularThrough(mid1);
      const perp2 = rightEdge.perpendicularThrough(mid2);
      const center = perp1.intersectLine(perp2) ?? new Point2D(0, (leftBase.y + apex.y) / 2);
      const radius = center.distanceTo(apex);

      return {
        id, index, direction, color,
        apex, leftBase, rightBase, baseMidpoint,
        triangle: tri,
        area,
        edgeLines: { leftEdge, rightEdge, baseEdge },
        circumcircle: new Circle2D(center, radius),
        metadata: {
          paperSection, figureNumber, equationReference, derivedFrom, meaning, dependencies
        }
      };
    };

    const t1_spec = helperSpec(
      't1', 1, 'downward', '#FF0000',
      new Point2D(0, Y7), new Point2D(-w1, Y1), new Point2D(w1, Y1),
      'Section 2.1', 'Figure 4', 'S = (2 + √3)/4',
      'Inscribed Equilateral Hexagon on C0', 'Primary Downward Outer Triangle 1',
      ['Circle C0', 'Line y = S', 'Apex T(0,1)']
    );

    const t2_spec = helperSpec(
      't2', 2, 'downward', '#0000FF',
      new Point2D(0, 1.0 - Y1), new Point2D(-w2, Y2), new Point2D(w2, Y2),
      'Section 2.2', 'Figure 5', 'R = (1 + √5)/4',
      'Golden Ratio Decagon Elevation', 'Primary Downward Middle Triangle 2',
      ['Line y = R', 'Line t7_right']
    );

    const t3_spec = helperSpec(
      't3', 3, 'downward', '#008000',
      t3_apex, t3_left, t3_right,
      'Section 2.2', 'Figure 5', 'R = (1 + √5)/4',
      'Inscribed Decagon on C0', 'Primary Downward Main Triangle 3',
      ['Circle C0', 'Origin O(0,0)', 'Line y = R']
    );

    const t4_spec = helperSpec(
      't4', 4, 'downward', '#FFA500',
      t4_apex, t4_left, t4_right,
      'Section 2.3', 'Figure 8', 'Intersection Line t3_left ∩ Line t7_left',
      'Triple Concurrency Intersection Y4 = 0.5', 'Primary Downward Inner Triangle 4',
      ['Line t3_left', 'Line t7_left']
    );

    const t5_spec = helperSpec(
      't5', 5, 'downward', '#800080',
      t5_apex, new Point2D(-w6, Y6), new Point2D(w6, Y6),
      'Section 2.4', 'Figure 10', 'Apollonius Equation 2.3.3',
      'Apollonius Target Point A (0, t_Apollonius)', 'Central Kama-Kala Downward Triangle 5',
      ['Apollonius Circle Xi', 'Point A', 'Line y = Q']
    );

    const t6_spec = helperSpec(
      't6', 6, 'upward', '#00FFFF',
      t6_apex, new Point2D(-w6, Y6), new Point2D(w6, Y6),
      'Section 2.4', 'Figure 10', 'Horizontal Q = 0.5',
      'Horizontal Center Diameter of C0', 'Central Kama-Kala Upward Triangle 6',
      ['Line t8_right', 'Line y = Q']
    );

    const t7_spec = helperSpec(
      't7', 7, 'upward', '#A52A2A',
      t7_apex, t7_left, t7_right,
      'Section 2.2', 'Figure 6', 'P = 1 - R',
      'Circumcircle Sharing Condition (i)', 'Primary Upward Main Triangle 7',
      ['Circle C0', 'Top Apex T(0,1)', 'Line y = P']
    );

    const t8_spec = helperSpec(
      't8', 8, 'upward', '#FFC0CB',
      t8_apex, t8_left, t8_right,
      'Section 2.3', 'Figure 8', 'Y8 = 1 - Y4 = 0.5',
      'Concurrency Mirror Elevation', 'Primary Upward Inner Triangle 8',
      ['Line t3_right', 'Line y = Y8']
    );

    const t9_spec = helperSpec(
      't9', 9, 'upward', '#000000',
      new Point2D(0, Y3), new Point2D(-w9, Y9), new Point2D(w9, Y9),
      'Section 2.2', 'Figure 6', 'P = 1 - R',
      'Circumcircle Sharing Condition (i)', 'Primary Upward Outer Triangle 9',
      ['Circle C0', 'Line y = P', 'Apex (0,R)']
    );

    const primaryTriangles = [
      t1_spec, t2_spec, t3_spec, t4_spec, t5_spec,
      t6_spec, t7_spec, t8_spec, t9_spec
    ];

    return {
      baseInput,
      outerCircumcircle,
      primaryTriangles,
      auxiliaryPoints: apollonius.auxiliaryPoints,
      constructionNodesCount: 80,
      engineName: this.ENGINE_NAME
    };
  }
}
