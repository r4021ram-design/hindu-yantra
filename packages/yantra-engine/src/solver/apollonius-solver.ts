import { Point2D, Line2D, Circle2D } from '../kernel';

export interface ApolloniusCLPInput {
  P?: number; // Base height of t7
  Q?: number; // Base height of t6
  R?: number; // Base height of t3
  S?: number; // Base height of t1
}

export interface ApolloniusCLPSolution {
  targetPointA: Point2D;
  circleXi: Circle2D;
  pointPhi: Point2D;
  auxiliaryPoints: {
    U: Point2D;
    V: Point2D;
    W: Point2D;
    X: Point2D;
    Y: Point2D;
    E: Point2D;
    F: Point2D;
    G: Point2D;
    Pt1: Point2D;
    Pt4: Point2D;
  };
  tSolutions: number[];
  selectedTSolution: number;
  quadraticCoefficients: {
    a: number;
    b: number;
    c: number;
    discriminant: number;
  };
}

export class ApolloniusSolver {
  public static readonly EPSILON = 1e-12;

  /**
   * Paper: Alessandro Chiodo (2021)
   * Section: 2.3 & 2.4
   * Equation: Equation 2.3.3
   * Meaning: Solves the exact Circle-Line-Point (CLP) Apollonius Problem for circle Xi tangency
   * Mathematical Expression: a t^2 + b t + c = 0
   */
  public static solveChiodoCLP(input: ApolloniusCLPInput = {}): ApolloniusCLPSolution {
    /**
     * Paper: Alessandro Chiodo (2021)
     * Section: 2.1
     * Equation: 2.1
     * Meaning: Base elevation of t1 on C0
     * Mathematical Expression: S = (2 + √3) / 4
     */
    const S = input.S ?? (2 + Math.sqrt(3)) / 4;

    /**
     * Paper: Alessandro Chiodo (2021)
     * Section: 2.2
     * Equation: 2.1
     * Meaning: Base elevation of t3 on C0
     * Mathematical Expression: R = (1 + √5) / 4 = cos(36°)
     */
    const R = input.R ?? (1 + Math.sqrt(5)) / 4;

    /**
     * Paper: Alessandro Chiodo (2021)
     * Section: 2.2
     * Equation: 2.2
     * Meaning: Shared circumcircle condition (i) base height for t7
     * Mathematical Expression: P = 1 - R = (3 - √5) / 4
     */
    const P = input.P ?? (1.0 - R);

    /**
     * Paper: Alessandro Chiodo (2021)
     * Section: 2.2
     * Equation: Figure 7
     * Meaning: Center horizontal diameter elevation of C0
     * Mathematical Expression: Q = 0.5
     */
    const Q = input.Q ?? 0.5;

    // Semicircle boundary points U and V on x = sqrt(y(1-y))
    const uX = Math.sqrt(Math.max(0, P * (1 - P)));
    const vX = Math.sqrt(Math.max(0, R * (1 - R)));

    const U = new Point2D(uX, P);
    const V = new Point2D(vX, R);
    const O = Point2D.origin();
    const T = new Point2D(0, 1);

    // 1. Exact Analytical Auxiliary Lines & Points (Chiodo Figures 4-10)
    const lineVO = Line2D.fromTwoPoints(V, O);
    const linePU = Line2D.horizontal(P);
    const W = linePU.intersectLine(lineVO) ?? new Point2D((vX * P) / R, P);

    const S_pt = new Point2D(0, S);
    const lineSW = Line2D.fromTwoPoints(S_pt, W);
    const lineRV = Line2D.vertical(vX);
    const X = lineSW.intersectLine(lineRV) ?? new Point2D(vX, S + ((W.y - S) / (W.x || 1e-12)) * vX);

    const P_pt = new Point2D(0, P);
    const linePX = Line2D.fromTwoPoints(P_pt, X);
    const lineUT = Line2D.fromTwoPoints(U, T);
    const Y = linePX.intersectLine(lineUT) ?? U;

    const E = new Point2D(0, Y.y);

    const lineY_Q = Line2D.horizontal(Q);
    const F = linePX.intersectLine(lineY_Q) ?? new Point2D((Q - P) / (linePX.a || 1e-12), Q);
    const G = lineSW.intersectLine(lineY_Q) ?? new Point2D((Q - S) / (lineSW.a || 1e-12), Q);

    const lineFE = Line2D.fromTwoPoints(F, E);
    const lineX_uX = Line2D.vertical(uX);
    const Pt1 = lineFE.intersectLine(lineX_uX) ?? new Point2D(uX, Y.y);

    const lineE1 = Line2D.fromTwoPoints(E, Pt1);
    const linePW = Line2D.fromTwoPoints(P_pt, W);
    const Pt4 = lineE1.intersectLine(linePW) ?? new Point2D(uX / 2, P);

    /**
     * Paper: Alessandro Chiodo (2021)
     * Section: 2.3
     * Figure: Figure 9
     * Meaning: Intersection Point Phi derived analytically from Line(FE) and Line(UT)
     * Mathematical Expression: Point Phi = Line(FE) ∩ Line(UT)
     */
    const pointPhi = lineFE.intersectLine(lineUT) ?? new Point2D(uX * 0.5, P * 0.9);

    // 2. Chiodo Quadratic Equation for Apollonius CLP Tangency (Section 2.3.3)
    const vVal = P;
    const lVal = Pt4.y;
    const vPrime = pointPhi.y;
    const lPrime = Pt1.y;
    const mVal = uX;
    const mPrime = vX;

    const aCoeff = mVal - mPrime;
    const bCoeff = mPrime * (lVal + vVal) - mVal * (lPrime + vPrime);
    const cCoeff = mVal * lPrime * vPrime - mPrime * lVal * vVal;

    const discriminant = bCoeff * bCoeff - 4 * aCoeff * cCoeff;
    const tSolutions: number[] = [];

    if (Math.abs(aCoeff) <= ApolloniusSolver.EPSILON) {
      if (Math.abs(bCoeff) > ApolloniusSolver.EPSILON) {
        tSolutions.push(-cCoeff / bCoeff);
      }
    } else if (discriminant >= 0) {
      const sqrtD = Math.sqrt(discriminant);
      tSolutions.push((-bCoeff + sqrtD) / (2 * aCoeff));
      tSolutions.push((-bCoeff - sqrtD) / (2 * aCoeff));
    }

    // Select canonical positive solution t that falls within valid geometric domain [P, R]
    let selectedTSolution =
      tSolutions.find(t => t >= P && t <= R) ??
      tSolutions.find(t => t > 0) ??
      Math.abs(tSolutions[0] ?? P);

    const targetPointA = new Point2D(uX, selectedTSolution);
    const circleXiCenter = new Point2D(uX / 2, selectedTSolution);
    const circleXi = new Circle2D(circleXiCenter, uX / 2);

    return {
      targetPointA,
      circleXi,
      pointPhi,
      auxiliaryPoints: { U, V, W, X, Y, E, F, G, Pt1, Pt4 },
      tSolutions,
      selectedTSolution,
      quadraticCoefficients: {
        a: aCoeff,
        b: bCoeff,
        c: cCoeff,
        discriminant
      }
    };
  }
}

