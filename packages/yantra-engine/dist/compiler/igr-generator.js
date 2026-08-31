"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IGRGenerator = void 0;
class IGRGenerator {
    static COMPILER_VERSION = '1.0.0-sgos.phase1';
    static SCHEMA_VERSION = '1.0.0';
    /**
     * Pipeline Stage 6: Generate Intermediate Geometry Representation (IGR)
     * Must NOT generate SVG, Canvas, or Meshes. Output is pure abstract geometry data.
     */
    static generate(dsl, constraints, graph, diagnostics) {
        const nodes = {};
        const edges = [];
        const layers = [];
        let primaryTriangleCount = 0;
        let subTriangleCount = 0;
        let circleCount = 0;
        let lotusRingCount = 0;
        let totalPetalCount = 0;
        let bhupuraGateCount = 0;
        // 1. Bindu Node (Center)
        nodes['p_bindu'] = {
            id: 'p_bindu',
            type: 'point',
            layerId: 'bindu',
            relativeX: 0.0,
            relativeY: 0.0,
            label: 'Bindu',
            role: 'bindu',
            constraints: ['c_bindu_center']
        };
        layers.push({
            id: 'bindu',
            sanskritName: 'Bindu',
            englishName: 'Central Point',
            orderIndex: 0,
            nodeIds: ['p_bindu'],
            isSacredEnclosure: true
        });
        diagnostics.recordLayerStat({
            layerId: 'bindu',
            sanskritName: 'Bindu',
            englishName: 'Central Point',
            primitiveCount: 1,
            dependencyCount: 0,
            executionOrderIndex: 0
        });
        // 2. Core Triangles
        const isShriCore = dsl.geometryRules?.shriYantraCore || dsl.geometryRules?.triangleSets?.length || dsl.id === 'sri_yantra';
        if (isShriCore) {
            const core = dsl.geometryRules?.shriYantraCore || {};
            primaryTriangleCount = (core.shivaTriangles || 4) + (core.shaktiTriangles || 5);
            subTriangleCount = 43; // Canonical 43 sub-triangles
            nodes['shri_core_polygons'] = {
                id: 'shri_core_polygons',
                type: 'polygon',
                layerId: 'core_triangles',
                vertexPointIds: ['p_bindu'],
                edgeIds: [],
                centroidPointId: 'p_bindu',
                isCircuitTriangle: true,
                circuitGroupIndex: 1
            };
            edges.push({
                id: 'e_bindu_core',
                sourceNodeId: 'p_bindu',
                targetNodeId: 'shri_core_polygons',
                relationType: 'bounds'
            });
            layers.push({
                id: 'core_triangles',
                sanskritName: 'Trikona & Chakra Network',
                englishName: 'Primary & Sub-Triangle Network',
                orderIndex: 1,
                nodeIds: ['shri_core_polygons'],
                isSacredEnclosure: true
            });
            diagnostics.recordLayerStat({
                layerId: 'core_triangles',
                sanskritName: 'Trikona Network',
                englishName: 'Triangle Network',
                primitiveCount: subTriangleCount,
                dependencyCount: 1,
                executionOrderIndex: 1
            });
        }
        // 3. Lotus Rings
        if (Array.isArray(dsl.geometryRules?.lotusRings)) {
            dsl.geometryRules.lotusRings.forEach((lotus, idx) => {
                lotusRingCount++;
                const petals = lotus.petals ?? lotus.petalCount ?? 8;
                totalPetalCount += petals;
                const lotusNodeId = lotus.id || `lotus_ring_${idx}`;
                nodes[lotusNodeId] = {
                    id: lotusNodeId,
                    type: 'lotus_petal_group',
                    layerId: lotusNodeId,
                    centerPointId: 'p_bindu',
                    petalCount: petals,
                    innerRadiusRatio: lotus.innerRadiusRatio ?? (lotus.radiusRatio ? lotus.radiusRatio * 0.75 : 0.4),
                    outerRadiusRatio: lotus.outerRadiusRatio ?? (lotus.radiusRatio || 0.5),
                    petalShape: lotus.shape || 'pointed',
                    sanskritName: lotus.sanskritName
                };
                edges.push({
                    id: `e_bindu_${lotusNodeId}`,
                    sourceNodeId: 'p_bindu',
                    targetNodeId: lotusNodeId,
                    relationType: 'concentric_to'
                });
                layers.push({
                    id: lotusNodeId,
                    sanskritName: lotus.sanskritName || `Lotus Ring ${idx + 1}`,
                    englishName: lotus.englishName || `${petals}-Petal Lotus`,
                    orderIndex: layers.length,
                    nodeIds: [lotusNodeId],
                    isSacredEnclosure: true
                });
                diagnostics.recordLayerStat({
                    layerId: lotusNodeId,
                    sanskritName: lotus.sanskritName || `Lotus Ring ${idx + 1}`,
                    englishName: lotus.englishName || `${petals}-Petal Lotus`,
                    primitiveCount: petals,
                    dependencyCount: 1,
                    executionOrderIndex: layers.length - 1
                });
            });
        }
        // 4. Concentric Circles
        if (Array.isArray(dsl.geometryRules?.concentricCircles)) {
            dsl.geometryRules.concentricCircles.forEach((circle, idx) => {
                circleCount++;
                const circleNodeId = circle.id || `circle_${idx}`;
                nodes[circleNodeId] = {
                    id: circleNodeId,
                    type: 'circle',
                    layerId: circleNodeId,
                    centerPointId: 'p_bindu',
                    radiusRatio: circle.radiusRatio,
                    sanskritName: circle.sanskritName,
                    mekhalaIndex: idx + 1
                };
                layers.push({
                    id: circleNodeId,
                    sanskritName: circle.sanskritName || `Mekhala ${idx + 1}`,
                    englishName: `Concentric Circle ${idx + 1}`,
                    orderIndex: layers.length,
                    nodeIds: [circleNodeId],
                    isSacredEnclosure: false
                });
                diagnostics.recordLayerStat({
                    layerId: circleNodeId,
                    sanskritName: circle.sanskritName || `Mekhala ${idx + 1}`,
                    englishName: `Concentric Circle ${idx + 1}`,
                    primitiveCount: 1,
                    dependencyCount: 1,
                    executionOrderIndex: layers.length - 1
                });
            });
        }
        // 5. Bhupura Citadel
        if (dsl.geometryRules?.bhupura?.enabled) {
            bhupuraGateCount = 4;
            const bNodeId = 'bhupura_outer_contour';
            nodes[bNodeId] = {
                id: bNodeId,
                type: 'bhupura_contour',
                layerId: 'bhupura',
                gateCount: 4,
                stepLayers: dsl.geometryRules.bhupura.steps || 3,
                baseRadiusRatio: 0.88,
                wallThicknessRatio: 0.05
            };
            layers.push({
                id: 'bhupura',
                sanskritName: 'Trailokya Mohana Chakra (Bhupura)',
                englishName: 'Earth Citadel & 4 Cardinal Gates',
                orderIndex: layers.length,
                nodeIds: [bNodeId],
                isSacredEnclosure: true
            });
            diagnostics.recordLayerStat({
                layerId: 'bhupura',
                sanskritName: 'Bhupura',
                englishName: 'Earth Citadel',
                primitiveCount: 1,
                dependencyCount: 1,
                executionOrderIndex: layers.length - 1
            });
        }
        // Compute Deterministic Hash
        const rawContent = JSON.stringify({ dslId: dsl.id, nodeKeys: Object.keys(nodes).sort(), constraints });
        const deterministicHash = this.computeHash(rawContent);
        // Record Geometry Stats
        diagnostics.recordGeometryStats({
            totalNodes: Object.keys(nodes).length,
            totalEdges: edges.length,
            totalLayers: layers.length,
            totalPrimitives: primaryTriangleCount + subTriangleCount + circleCount + totalPetalCount + 1,
            primaryTriangleCount,
            subTriangleCount,
            circleCount,
            lotusRingCount,
            totalPetalCount,
            bhupuraGateCount,
            symmetryGroupOrder: dsl.geometryRules?.symmetryGroupOrder || 8,
            depthOfConstructionGraph: graph.topologicalDepth
        });
        return {
            schemaVersion: this.SCHEMA_VERSION,
            dslId: dsl.id || 'custom_geometry',
            titleSanskrit: dsl.names?.sanskrit || dsl.metadata?.titleSanskrit || 'Sacred Geometry',
            titleEnglish: dsl.names?.english || dsl.metadata?.titleEnglish || 'Sacred Geometry',
            tradition: dsl.tradition || dsl.metadata?.tradition || dsl.traditionVariant || 'Srividya Kaula',
            symmetryGroup: `C_${dsl.geometryRules?.symmetryGroupOrder || 8}`,
            boundingBox: {
                minX: -1.0,
                minY: -1.0,
                maxX: 1.0,
                maxY: 1.0,
                aspectRatio: 1.0
            },
            nodes: Object.freeze(nodes),
            edges: Object.freeze(edges),
            layers: Object.freeze(layers),
            constraints: Object.freeze([...constraints]),
            constructionGraph: graph,
            metadata: {
                compiledTimestamp: new Date().toISOString(),
                compilerVersion: this.COMPILER_VERSION,
                deterministicHash,
                isAuthenticShastric: true
            }
        };
    }
    static computeHash(str) {
        let hash = 5381;
        for (let i = 0; i < str.length; i++) {
            hash = (hash * 33) ^ str.charCodeAt(i);
        }
        return `hash_fnv1a_${(hash >>> 0).toString(16)}`;
    }
}
exports.IGRGenerator = IGRGenerator;
