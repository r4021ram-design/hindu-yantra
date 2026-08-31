import { CompilerDiagnosticsBuilder } from './diagnostics';

export class SemanticValidator {
  /**
   * Pipeline Stage 2: Validate Semantic Geometry Rules & Boundary Bounds
   */
  public static validate(dsl: any, diagnostics: CompilerDiagnosticsBuilder): boolean {
    if (!dsl.geometryRules) return false;

    const rules = dsl.geometryRules;

    // Validate Concentric Circle Proportions
    if (Array.isArray(rules.concentricCircles)) {
      let prevRadiusRatio = 0;
      rules.concentricCircles.forEach((circle: any, idx: number) => {
        if (typeof circle.radiusRatio !== 'number' || circle.radiusRatio <= 0 || circle.radiusRatio > 2.0) {
          diagnostics.addError(
            'SGOS_E010_OUT_OF_BOUNDS_RADIUS',
            `Circle "${circle.id || idx}" has radiusRatio ${circle.radiusRatio} out of valid proportional bounds (0, 2.0].`,
            { path: `geometryRules.concentricCircles[${idx}].radiusRatio` },
            'Set radiusRatio between 0.05 and 1.5.'
          );
        }

        if (circle.radiusRatio < prevRadiusRatio) {
          diagnostics.addWarning(
            'SGOS_W010_NON_MONOTONIC_CIRCLES',
            `Concentric circle "${circle.id || idx}" has radiusRatio ${circle.radiusRatio} smaller than preceding circle (${prevRadiusRatio}).`,
            { path: `geometryRules.concentricCircles[${idx}]` },
            'Ensure concentric circles are ordered sequentially from inner to outer.'
          );
        }
        prevRadiusRatio = Math.max(prevRadiusRatio, circle.radiusRatio || 0);
      });
    }

    // Validate Lotus Ring Petals & Proportions
    if (Array.isArray(rules.lotusRings)) {
      rules.lotusRings.forEach((lotus: any, idx: number) => {
        const petals = lotus.petals ?? lotus.petalCount;
        if (typeof petals !== 'number' || petals <= 0 || petals > 1000) {
          diagnostics.addError(
            'SGOS_E011_INVALID_PETAL_COUNT',
            `Lotus ring "${lotus.id || idx}" has invalid petal count: ${petals}.`,
            { path: `geometryRules.lotusRings[${idx}].petals` },
            'Petal count must be a positive integer (e.g. 8, 16, 24, 32, 64, 108).'
          );
        }

        // Suggest traditional petal counts
        const canonicalPetalCounts = [4, 8, 10, 12, 14, 16, 24, 32, 64, 100, 108, 1000];
        if (typeof petals === 'number' && !canonicalPetalCounts.includes(petals)) {
          diagnostics.addSuggestion(
            'SGOS_S001_NON_CANONICAL_PETALS',
            `Lotus ring "${lotus.id || idx}" uses ${petals} petals, which is non-canonical.`,
            { path: `geometryRules.lotusRings[${idx}].petals` },
            `Consider traditional lotus ring petal counts: ${canonicalPetalCounts.join(', ')}.`
          );
        }
      });
    }

    // Validate Bhupura Citadel Limits
    if (rules.bhupura?.enabled) {
      const steps = rules.bhupura.steps;
      if (typeof steps !== 'number' || steps < 1 || steps > 10) {
        diagnostics.addWarning(
          'SGOS_W011_UNUSUAL_BHUPURA_STEPS',
          `Bhupura citadel steps count is ${steps}. Standard traditional Bhupura consists of 3 earth steps (Triloka).`,
          { path: 'geometryRules.bhupura.steps' },
          'Set steps to 3 for authentic Triloka citadel representation.'
        );
      }
    }

    return diagnostics.buildDiagnostics().isValid;
  }
}
