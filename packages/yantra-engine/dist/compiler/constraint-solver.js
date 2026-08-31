"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstraintResolver = void 0;
class ConstraintResolver {
    static GOLDEN_RATIO = 1.618033988749895;
    /**
     * Pipeline Stage 3: Resolve Proportional Constraints & Symmetry Groups
     */
    static resolve(dsl, diagnostics) {
        const resolvedConstraints = [];
        const isShriYantra = dsl.id === 'sri_yantra' || !!dsl.geometryRules?.shriYantraCore || !!dsl.geometryRules?.triangleSets;
        // 1. Resolve Golden Ratio Constraint ($\Phi$)
        if (dsl.geometryRules?.goldenRatioProportions || isShriYantra) {
            resolvedConstraints.push({
                id: 'c_golden_ratio_phi',
                type: 'golden_ratio',
                targetNodeIds: ['layer_core_triangles', 'layer_concentric_circles'],
                numericValue: this.GOLDEN_RATIO,
                formula: 'Phi = (1 + sqrt(5)) / 2'
            });
        }
        // 2. Resolve Confluence Marma Nodes Constraint
        if (isShriYantra) {
            resolvedConstraints.push({
                id: 'c_marma_confluence_42',
                type: 'confluence_marma',
                targetNodeIds: ['shiva_triangles', 'shakti_triangles'],
                numericValue: 42,
                formula: 'MarmaCount = 42 Intersections'
            });
        }
        // 3. Resolve Symmetry Group
        const symmetryOrder = dsl.geometryRules?.symmetryGroupOrder || 8;
        resolvedConstraints.push({
            id: 'c_symmetry_group',
            type: 'symmetry_group',
            targetNodeIds: ['lotus_rings', 'bhupura_gates'],
            numericValue: symmetryOrder,
            formula: `C_${symmetryOrder}`
        });
        return resolvedConstraints;
    }
}
exports.ConstraintResolver = ConstraintResolver;
