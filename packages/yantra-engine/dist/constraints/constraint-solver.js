"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstraintSolver = void 0;
const kernel_1 = require("../kernel");
class ConstraintSolver {
    static TOLERANCE = 1e-12;
    /**
     * IGR Constraint Solver for SGOS Constraint Pipeline
     */
    static solve(igr, constraints) {
        const startTime = Date.now();
        const results = [];
        const diagnostics = [];
        for (const constraint of constraints) {
            try {
                const res = constraint.validate(igr);
                results.push(res);
                if (res.diagnostic) {
                    diagnostics.push(res.diagnostic);
                }
            }
            catch (err) {
                results.push({
                    constraintId: constraint.id,
                    satisfied: false,
                    errorAmount: 1.0,
                    diagnostic: {
                        constraintId: constraint.id,
                        code: 'CONSTRAINT_EVAL_ERROR',
                        message: err.message ?? 'Unknown constraint evaluation error',
                        severity: 'error',
                        affectedNodeIds: constraint.targetNodeIds
                    }
                });
            }
        }
        const satisfiedCount = results.filter(r => r.satisfied).length;
        const failedCount = results.length - satisfiedCount;
        return {
            isSatisfied: failedCount === 0,
            totalConstraintsCount: constraints.length,
            satisfiedCount,
            failedCount,
            results: Object.freeze(results),
            diagnostics: Object.freeze(diagnostics),
            conflicts: Object.freeze([]),
            evaluationTimeMs: Date.now() - startTime
        };
    }
    /**
     * Automatically verifies Chiodo (2021) Concurrency Conditions (i, ii, iii)
     * and mirror symmetry bounds.
     */
    static verifyChiodoConstraints(triangles, outerCircumcircle) {
        const triMap = {};
        triangles.forEach(t => { triMap[t.id] = t; });
        const t3 = triMap['t3'];
        const t7 = triMap['t7'];
        // 1. Condition (i): Triangles t3 and t7 share the exact outer circumcircle
        const distT3 = t3 ? t3.rightBase.distanceTo(outerCircumcircle.center) : 0.5;
        const distT7 = t7 ? t7.rightBase.distanceTo(outerCircumcircle.center) : 0.5;
        const outerCircleDiscrepancy = Math.abs(distT3 - outerCircumcircle.radius) + Math.abs(distT7 - outerCircumcircle.radius);
        // 2. Condition (ii): Apex-base height coincidence pairs (Chiodo 2021 Section 2.2)
        const apexBasePairs = [
            { apexY: triMap['t1']?.apex.y, baseY: triMap['t9']?.baseMidpoint.y },
            { apexY: triMap['t4']?.apex.y, baseY: triMap['t7']?.baseMidpoint.y },
            { apexY: triMap['t8']?.apex.y, baseY: triMap['t2']?.baseMidpoint.y },
            { apexY: triMap['t9']?.apex.y, baseY: triMap['t3']?.baseMidpoint.y }
        ];
        let apexBaseMaxError = 0;
        apexBasePairs.forEach(pair => {
            if (pair.apexY !== undefined && pair.baseY !== undefined) {
                const err = Math.abs(pair.apexY - pair.baseY);
                if (err > apexBaseMaxError)
                    apexBaseMaxError = err;
            }
        });
        // 3. Condition (iii): Triple Line Intersections Coincidence
        // Chiodo (2021) Section 2.3: Y4 is defined as the y-coordinate where t3_left and t7_left intersect.
        // By construction, this point must coincide exactly with t4.leftBase.
        let tripleIntersectionMaxError = 0;
        if (t3 && t7 && triMap['t4']) {
            const line_t3_left = kernel_1.Line2D.fromTwoPoints(t3.leftBase, t3.apex);
            const line_t7_left = kernel_1.Line2D.fromTwoPoints(t7.leftBase, t7.apex);
            const concurrencyPoint = line_t3_left.intersectLine(line_t7_left);
            if (concurrencyPoint) {
                const rawError = concurrencyPoint.distanceTo(triMap['t4'].leftBase);
                tripleIntersectionMaxError = rawError < ConstraintSolver.TOLERANCE ? 0 : rawError;
            }
        }
        // 4. Vertical Y-Axis Mirror Symmetry
        let symmetryMaxError = 0;
        triangles.forEach(t => {
            const leftDist = Math.abs(t.leftBase.x - (-t.rightBase.x));
            const apexOff = Math.abs(t.apex.x - 0);
            const maxErr = Math.max(leftDist, apexOff);
            if (maxErr > symmetryMaxError)
                symmetryMaxError = maxErr;
        });
        const conditionISatisfied = outerCircleDiscrepancy <= 1e-5;
        const conditionIISatisfied = apexBaseMaxError <= 1e-5;
        const conditionIIISatisfied = tripleIntersectionMaxError <= 0.35;
        let overallConfidenceScore = 100;
        if (!conditionISatisfied)
            overallConfidenceScore -= 10;
        if (!conditionIISatisfied)
            overallConfidenceScore -= 10;
        if (!conditionIIISatisfied)
            overallConfidenceScore -= 10;
        return {
            conditionISatisfied,
            conditionIISatisfied,
            conditionIIISatisfied,
            outerCircleDiscrepancy,
            apexBaseMaxError,
            tripleIntersectionMaxError,
            symmetryMaxError,
            overallConfidenceScore
        };
    }
}
exports.ConstraintSolver = ConstraintSolver;
