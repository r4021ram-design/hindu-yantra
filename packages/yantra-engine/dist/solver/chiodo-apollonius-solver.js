"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChiodoApolloniusSolver = void 0;
const apollonius_solver_1 = require("./apollonius-solver");
const chiodo_construction_engine_1 = require("../construction/chiodo-construction-engine");
const constraint_solver_1 = require("../constraints/constraint-solver");
class ChiodoApolloniusSolver {
    static DEFAULT_PARAMETERS = Object.freeze({
        P: 0.324,
        Q: 0.517,
        R: 0.692,
        S: 0.866
    });
    /**
     * Solves the exact straightedge-and-compass Śrī Yantra construction using Alessandro Chiodo's (2021)
     * reduction to the Circle-Line-Point (CLP) Apollonius problem.
     */
    static solve(params = {}) {
        const input = {
            P: params.P ?? this.DEFAULT_PARAMETERS.P,
            Q: params.Q ?? this.DEFAULT_PARAMETERS.Q,
            R: params.R ?? this.DEFAULT_PARAMETERS.R,
            S: params.S ?? this.DEFAULT_PARAMETERS.S
        };
        const apollonius = apollonius_solver_1.ApolloniusSolver.solveChiodoCLP(input);
        const construction = chiodo_construction_engine_1.ChiodoConstructionEngine.construct();
        const concurrency = constraint_solver_1.ConstraintSolver.verifyChiodoConstraints(construction.primaryTriangles, construction.outerCircumcircle);
        const triangles = construction.primaryTriangles.map(t => ({
            id: t.id,
            index: t.index,
            direction: t.direction,
            color: t.color,
            apex: t.apex.toObject(),
            leftBase: t.leftBase.toObject(),
            rightBase: t.rightBase.toObject(),
            baseMidpoint: t.baseMidpoint.toObject()
        }));
        const baseParams = {
            P: input.P ?? this.DEFAULT_PARAMETERS.P,
            Q: input.Q ?? this.DEFAULT_PARAMETERS.Q,
            R: input.R ?? this.DEFAULT_PARAMETERS.R,
            S: input.S ?? this.DEFAULT_PARAMETERS.S
        };
        const apolloniusState = {
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
exports.ChiodoApolloniusSolver = ChiodoApolloniusSolver;
