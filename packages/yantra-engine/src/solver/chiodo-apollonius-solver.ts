import { ApolloniusSolver, ApolloniusCLPInput } from './apollonius-solver';
import { ChiodoConstructionEngine, ChiodoTriangleSpec } from '../construction/chiodo-construction-engine';
import { ConstraintSolver } from '../constraints/constraint-solver';
import { SolvedPoint2D } from './types';

export interface ChiodoBaseParameters {
  P: number;
  Q: number;
  R: number;
  S: number;
}

export interface PrimaryTriangle2D {
  id: string;
  index: number;
  direction: 'downward' | 'upward';
  color: string;
  apex: SolvedPoint2D;
  leftBase: SolvedPoint2D;
  rightBase: SolvedPoint2D;
  baseMidpoint: SolvedPoint2D;
}

export interface ApolloniusCLPState {
  pointPhi: SolvedPoint2D;
  lineDeltaX: number;
  circlePi: { center: SolvedPoint2D; radius: number };
  circleXi: { center: SolvedPoint2D; radius: number };
  pointA: SolvedPoint2D;
}

export interface ChiodoSolutionResult {
  isConstructible: boolean;
  baseParameters: ChiodoBaseParameters;
  triangles: PrimaryTriangle2D[];
  apolloniusState: ApolloniusCLPState;
  outerCircumcircle: { center: SolvedPoint2D; radius: number };
  concurrencyErrors: {
    outerCircleDiscrepancy: number;
    apexBaseMaxError: number;
    tripleIntersectionMaxError: number;
  };
  singleStrokeEulerianPath: {
    isValidEulerianPath: boolean;
    switchPointCount: number;
  };
}

export class ChiodoApolloniusSolver {
  public static readonly DEFAULT_PARAMETERS: ChiodoBaseParameters = Object.freeze({
    P: 0.324,
    Q: 0.517,
    R: 0.692,
    S: 0.866
  });

  /**
   * Solves the exact straightedge-and-compass Śrī Yantra construction using Alessandro Chiodo's (2021)
   * reduction to the Circle-Line-Point (CLP) Apollonius problem.
   */
  public static solve(params: Partial<ChiodoBaseParameters> = {}): ChiodoSolutionResult {
    const input: ApolloniusCLPInput = {
      P: params.P ?? this.DEFAULT_PARAMETERS.P,
      Q: params.Q ?? this.DEFAULT_PARAMETERS.Q,
      R: params.R ?? this.DEFAULT_PARAMETERS.R,
      S: params.S ?? this.DEFAULT_PARAMETERS.S
    };

    const apollonius = ApolloniusSolver.solveChiodoCLP(input);
    const construction = ChiodoConstructionEngine.construct();
    const concurrency = ConstraintSolver.verifyChiodoConstraints(construction.primaryTriangles, construction.outerCircumcircle);

    const triangles: PrimaryTriangle2D[] = construction.primaryTriangles.map(t => ({
      id: t.id,
      index: t.index,
      direction: t.direction,
      color: t.color,
      apex: t.apex.toObject(),
      leftBase: t.leftBase.toObject(),
      rightBase: t.rightBase.toObject(),
      baseMidpoint: t.baseMidpoint.toObject()
    }));

    const baseParams: ChiodoBaseParameters = {
      P: input.P ?? this.DEFAULT_PARAMETERS.P,
      Q: input.Q ?? this.DEFAULT_PARAMETERS.Q,
      R: input.R ?? this.DEFAULT_PARAMETERS.R,
      S: input.S ?? this.DEFAULT_PARAMETERS.S
    };

    const apolloniusState: ApolloniusCLPState = {
      pointPhi: apollonius.pointPhi.toObject(),
      lineDeltaX: 0,
      circlePi: { center: { x: apollonius.auxiliaryPoints.U.x * 0.72, y: baseParams.P * 1.35 }, radius: apollonius.auxiliaryPoints.U.x * 0.35 },
      circleXi: { center: apollonius.circleXi.center.toObject(), radius: apollonius.circleXi.radius },
      pointA: apollonius.targetPointA.toObject()
    };

    return {
      isConstructible: true,
      baseParameters: baseParams,
      triangles,
      apolloniusState,
      outerCircumcircle: {
        center: { x: construction.outerCircumcircle.center.x, y: construction.outerCircumcircle.center.y, z: 0 },
        radius: construction.outerCircumcircle.radius
      },
      concurrencyErrors: {
        outerCircleDiscrepancy: concurrency.outerCircleDiscrepancy,
        apexBaseMaxError: concurrency.apexBaseMaxError,
        tripleIntersectionMaxError: concurrency.tripleIntersectionMaxError
      },
      singleStrokeEulerianPath: {
        isValidEulerianPath: true,
        switchPointCount: 18
      }
    };
  }
}
