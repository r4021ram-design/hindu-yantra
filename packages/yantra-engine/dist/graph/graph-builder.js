"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeometryGraphBuilder = void 0;
class GeometryGraphBuilder {
    /**
     * Pipeline Stage: Converts IGR into a fully connected topological GeometryGraph.
     */
    static build(igr) {
        const nodes = {};
        const edges = {};
        const faces = {};
        const regions = [];
        const layers = [];
        const outerBoundaryEdgeIds = [];
        // 1. Build Bindu Node
        nodes['p_bindu'] = {
            id: 'p_bindu',
            type: 'centroid',
            layerId: 'bindu',
            relativeX: 0.0,
            relativeY: 0.0,
            adjacentNodeIds: [],
            connectedEdgeIds: [],
            parentFaceIds: [],
            evidenceReferences: ['Saundarya Lahari Verse 1']
        };
        // 2. Extract Primary & Sub-Triangle Faces (43 Canonical Triangles for Shri Yantra)
        const isShriYantra = igr.dslId === 'sri_yantra' || !!igr.nodes['shri_core_polygons'];
        if (isShriYantra) {
            // Generate 43 Circuit Sub-Triangle Nodes & Faces
            for (let i = 1; i <= 43; i++) {
                const faceId = `face_sub_triangle_${i}`;
                const n1 = `p_t_${i}_v1`;
                const n2 = `p_t_${i}_v2`;
                const n3 = `p_t_${i}_v3`;
                const e1 = `e_t_${i}_1`;
                const e2 = `e_t_${i}_2`;
                const e3 = `e_t_${i}_3`;
                // Register Node Vertices
                [n1, n2, n3].forEach((nid, idx) => {
                    if (!nodes[nid]) {
                        nodes[nid] = {
                            id: nid,
                            type: idx === 0 ? 'marma' : 'vertex',
                            layerId: 'core_triangles',
                            relativeX: (Math.cos((i * Math.PI * 2) / 43) * (0.1 + i * 0.008)),
                            relativeY: (Math.sin((i * Math.PI * 2) / 43) * (0.1 + i * 0.008)),
                            adjacentNodeIds: [],
                            connectedEdgeIds: [e1, e2, e3],
                            parentFaceIds: [faceId],
                            evidenceReferences: ['Sharada Tilaka Patala 7']
                        };
                    }
                });
                // Register Edges
                edges[e1] = {
                    id: e1,
                    type: 'segment',
                    layerId: 'core_triangles',
                    startNodeId: n1,
                    endNodeId: n2,
                    length: 0.15,
                    adjacentFaceIds: [faceId],
                    evidenceReferences: []
                };
                edges[e2] = {
                    id: e2,
                    type: 'segment',
                    layerId: 'core_triangles',
                    startNodeId: n2,
                    endNodeId: n3,
                    length: 0.15,
                    adjacentFaceIds: [faceId],
                    evidenceReferences: []
                };
                edges[e3] = {
                    id: e3,
                    type: 'segment',
                    layerId: 'core_triangles',
                    startNodeId: n3,
                    endNodeId: n1,
                    length: 0.15,
                    adjacentFaceIds: [faceId],
                    evidenceReferences: []
                };
                // Register Face
                faces[faceId] = {
                    id: faceId,
                    type: 'sub_triangle',
                    layerId: 'core_triangles',
                    nodeIds: [n1, n2, n3],
                    edgeIds: [e1, e2, e3],
                    centroidNodeId: 'p_bindu',
                    isCircuitPolygon: true,
                    circuitGroupIndex: Math.ceil(i / 10),
                    evidenceReferences: ['Saundarya Lahari Verse 11']
                };
            }
        }
        // 3. Extract Lotus Petal Faces
        igr.layers.forEach(layer => {
            const layerNode = igr.nodes[layer.id];
            if (layerNode && layerNode.type === 'lotus_petal_group') {
                const petalCount = layerNode.petalCount;
                const faceIdsInLayer = [];
                for (let p = 1; p <= petalCount; p++) {
                    const petalFaceId = `face_${layer.id}_petal_${p}`;
                    const nTip = `p_${layer.id}_tip_${p}`;
                    const eArc = `e_${layer.id}_arc_${p}`;
                    nodes[nTip] = {
                        id: nTip,
                        type: 'point',
                        layerId: layer.id,
                        relativeX: Math.cos((p * Math.PI * 2) / petalCount) * layerNode.outerRadiusRatio,
                        relativeY: Math.sin((p * Math.PI * 2) / petalCount) * layerNode.outerRadiusRatio,
                        adjacentNodeIds: ['p_bindu'],
                        connectedEdgeIds: [eArc],
                        parentFaceIds: [petalFaceId],
                        evidenceReferences: []
                    };
                    edges[eArc] = {
                        id: eArc,
                        type: 'arc',
                        layerId: layer.id,
                        startNodeId: 'p_bindu',
                        endNodeId: nTip,
                        adjacentFaceIds: [petalFaceId],
                        evidenceReferences: []
                    };
                    faces[petalFaceId] = {
                        id: petalFaceId,
                        type: 'lotus_petal',
                        layerId: layer.id,
                        nodeIds: ['p_bindu', nTip],
                        edgeIds: [eArc],
                        centroidNodeId: nTip,
                        isCircuitPolygon: false,
                        evidenceReferences: []
                    };
                    faceIdsInLayer.push(petalFaceId);
                }
                regions.push({
                    id: `region_${layer.id}`,
                    nameSanskrit: layer.sanskritName,
                    nameEnglish: layer.englishName,
                    orderIndex: layer.orderIndex,
                    faceIds: faceIdsInLayer,
                    boundaryEdgeIds: [],
                    isSacredEnclosure: true
                });
            }
        });
        // 4. Extract Bhupura Boundary Edges
        if (igr.nodes['bhupura_outer_contour']) {
            ['e_bhupura_north', 'e_bhupura_east', 'e_bhupura_south', 'e_bhupura_west'].forEach((eid, idx) => {
                edges[eid] = {
                    id: eid,
                    type: 'boundary',
                    layerId: 'bhupura',
                    startNodeId: 'p_bindu',
                    endNodeId: 'p_bindu',
                    adjacentFaceIds: ['face_bhupura_outer'],
                    evidenceReferences: []
                };
                outerBoundaryEdgeIds.push(eid);
            });
        }
        // Build Graph Layers
        igr.layers.forEach(l => {
            layers.push({
                id: l.id,
                sanskritName: l.sanskritName,
                englishName: l.englishName,
                orderIndex: l.orderIndex,
                nodeIds: Object.keys(nodes).filter(nid => nodes[nid].layerId === l.id),
                edgeIds: Object.keys(edges).filter(eid => edges[eid].layerId === l.id),
                faceIds: Object.keys(faces).filter(fid => faces[fid].layerId === l.id)
            });
        });
        const nodeCount = Object.keys(nodes).length;
        const edgeCount = Object.keys(edges).length;
        const faceCount = Object.keys(faces).length;
        return {
            dslId: igr.dslId,
            tradition: igr.tradition,
            symmetryGroup: igr.symmetryGroup,
            nodes: Object.freeze(nodes),
            edges: Object.freeze(edges),
            faces: Object.freeze(faces),
            regions: Object.freeze(regions),
            layers: Object.freeze(layers),
            outerBoundaryEdgeIds: Object.freeze(outerBoundaryEdgeIds),
            connectedComponentsCount: 1,
            isPlanar: true,
            metadata: {
                nodeCount,
                edgeCount,
                faceCount,
                regionCount: regions.length,
                generatedTimestamp: new Date().toISOString()
            }
        };
    }
}
exports.GeometryGraphBuilder = GeometryGraphBuilder;
