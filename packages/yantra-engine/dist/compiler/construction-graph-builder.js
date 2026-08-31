"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstructionGraphBuilder = void 0;
class ConstructionGraphBuilder {
    /**
     * Pipeline Stage 4 & 5: Build Construction Graph DAG & Validate Topology (Detect Cycles)
     */
    static build(dsl, diagnostics) {
        const rawNodes = [];
        // Define canonical construction steps (Krama)
        // Step 0: Bindu Centroid
        rawNodes.push({
            id: 'step_0_bindu',
            stepIndex: 0,
            stepName: 'Bindu Centroid Placement',
            layerId: 'bindu',
            primitiveIds: ['p_bindu'],
            dependsOnStepIds: [],
            description: 'Mark central focal point (Brahma Sthan P_0)'
        });
        // Step 1: Primary Triangles
        if (dsl.geometryRules?.shriYantraCore) {
            rawNodes.push({
                id: 'step_1_primary_triangles',
                stepIndex: 1,
                stepName: 'Primary Shiva & Shakti Triangles',
                layerId: 'core_triangles',
                primitiveIds: ['shiva_t_group', 'shakti_t_group'],
                dependsOnStepIds: ['step_0_bindu'],
                description: 'Place 5 downward Shakti and 4 upward Shiva primary triangles'
            });
            // Step 2: 43 Sub-Triangles Circuit Network
            rawNodes.push({
                id: 'step_2_sub_triangles',
                stepIndex: 2,
                stepName: '43 Sub-Triangle Circuit Network',
                layerId: 'circuit_triangles',
                primitiveIds: ['circuit_43_group'],
                dependsOnStepIds: ['step_1_primary_triangles'],
                description: 'Derive 43 canonical sub-triangle circuit polygons from Marma intersections'
            });
        }
        // Step 3: Inner Lotus Ring (8-Petal)
        let prevStepId = rawNodes[rawNodes.length - 1].id;
        if (dsl.geometryRules?.lotusRings?.[0]) {
            rawNodes.push({
                id: 'step_3_inner_lotus',
                stepIndex: rawNodes.length,
                stepName: 'Inner Lotus Ring (Ashtadala)',
                layerId: dsl.geometryRules.lotusRings[0].id || 'ashtadala',
                primitiveIds: ['lotus_8_ring'],
                dependsOnStepIds: [prevStepId],
                description: 'Construct 8-petal inner lotus ring'
            });
            prevStepId = 'step_3_inner_lotus';
        }
        // Step 4: Outer Lotus Ring (16-Petal)
        if (dsl.geometryRules?.lotusRings?.[1]) {
            rawNodes.push({
                id: 'step_4_outer_lotus',
                stepIndex: rawNodes.length,
                stepName: 'Outer Lotus Ring (Shodashadala)',
                layerId: dsl.geometryRules.lotusRings[1].id || 'shodashadala',
                primitiveIds: ['lotus_16_ring'],
                dependsOnStepIds: [prevStepId],
                description: 'Construct 16-petal outer lotus ring'
            });
            prevStepId = 'step_4_outer_lotus';
        }
        // Step 5: Concentric Circles (Mekhala)
        if (dsl.geometryRules?.concentricCircles?.length) {
            rawNodes.push({
                id: 'step_5_concentric_circles',
                stepIndex: rawNodes.length,
                stepName: 'Concentric Circle Boundaries (Mekhala)',
                layerId: 'mekhala',
                primitiveIds: dsl.geometryRules.concentricCircles.map((c) => c.id),
                dependsOnStepIds: [prevStepId],
                description: 'Draw concentric boundary circles'
            });
            prevStepId = 'step_5_concentric_circles';
        }
        // Step 6: Bhupura Earth Citadel
        if (dsl.geometryRules?.bhupura?.enabled) {
            rawNodes.push({
                id: 'step_6_bhupura',
                stepIndex: rawNodes.length,
                stepName: 'Bhupura Earth Citadel & Quadruple Gates',
                layerId: 'bhupura',
                primitiveIds: ['bhupura_outer_contour'],
                dependsOnStepIds: [prevStepId],
                description: 'Construct 3-tier square earth citadel with 4 cardinal gates'
            });
        }
        // Detect Cycle References using DFS
        const cycleDetected = this.detectCycles(rawNodes, diagnostics);
        const executionOrder = cycleDetected ? [] : rawNodes.map(n => n.id);
        return {
            nodes: Object.freeze(rawNodes),
            executionOrder: Object.freeze(executionOrder),
            isAcyclic: !cycleDetected,
            topologicalDepth: rawNodes.length
        };
    }
    static detectCycles(nodes, diagnostics) {
        const nodeMap = new Map();
        nodes.forEach(n => nodeMap.set(n.id, n));
        const visited = new Set();
        const recStack = new Set();
        const dfs = (nodeId) => {
            visited.add(nodeId);
            recStack.add(nodeId);
            const node = nodeMap.get(nodeId);
            if (node) {
                for (const depId of node.dependsOnStepIds) {
                    if (!visited.has(depId)) {
                        if (dfs(depId))
                            return true;
                    }
                    else if (recStack.has(depId)) {
                        return true; // Cycle detected!
                    }
                }
            }
            recStack.delete(nodeId);
            return false;
        };
        for (const node of nodes) {
            if (!visited.has(node.id)) {
                if (dfs(node.id)) {
                    diagnostics.addError('SGOS_E020_CYCLIC_DEPENDENCY', `Cyclic dependency detected in construction graph step "${node.id}".`, { path: 'constructionGraph' }, 'Ensure construction step dependencies form a Directed Acyclic Graph (DAG).');
                    return true;
                }
            }
        }
        return false;
    }
}
exports.ConstructionGraphBuilder = ConstructionGraphBuilder;
