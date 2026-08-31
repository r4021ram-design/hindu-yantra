"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SGOSSceneGraphEngine = void 0;
const quality_profiles_1 = require("./quality-profiles");
class SGOSSceneGraphEngine {
    /**
     * Build a renderer-agnostic SGOSSceneGraph from OSGM or SGM
     */
    static fromOSGM(target, options = {}) {
        const sgm = 'sgm' in target ? target.sgm : target;
        const hash = 'provenance' in target && target.provenance.deterministicHash
            ? target.provenance.deterministicHash
            : `hash_${sgm.dslId}`;
        const profile = quality_profiles_1.QualityProfileRegistry.getProfile(options.qualityLevel || 'High');
        const nodesMap = new Map();
        let totalVertices = 0;
        let totalFaces = 0;
        // Group faces by layer
        const layerFaceMap = new Map();
        Object.values(sgm.solvedFaces).forEach(face => {
            const layerId = face.layerId || face.id.split('_')[0] || 'default';
            if (!layerFaceMap.has(layerId)) {
                layerFaceMap.set(layerId, []);
            }
            layerFaceMap.get(layerId).push(face);
        });
        const groupChildren = [];
        // Create Mesh Nodes for each layer
        layerFaceMap.forEach((faces, layerId) => {
            const isVisible = options.activeLayerId ? layerId === options.activeLayerId : true;
            const meshNodeId = `mesh_group_${layerId}`;
            const verticesSet = [];
            const faceIndices = [];
            faces.forEach(face => {
                const currentFaceIndices = [];
                face.vertices.forEach(v => {
                    let idx = verticesSet.findIndex(existing => Math.abs(existing.x - v.x) < 1e-4 && Math.abs(existing.y - v.y) < 1e-4);
                    if (idx === -1) {
                        verticesSet.push(v);
                        idx = verticesSet.length - 1;
                    }
                    currentFaceIndices.push(idx);
                });
                faceIndices.push(currentFaceIndices);
            });
            totalVertices += verticesSet.length;
            totalFaces += faces.length;
            const meshNode = {
                id: meshNodeId,
                type: 'mesh',
                layerId,
                sanskritName: `मण्डल स्तर ${layerId}`,
                englishName: `Layer ${layerId}`,
                transform: {
                    position: { x: 0, y: 0, z: 0 },
                    rotation: { rx: 0, ry: 0, rz: 0 },
                    scale: { sx: 1, sy: 1, sz: 1 }
                },
                visible: isVisible,
                vertices: Object.freeze(verticesSet),
                faceIndices: Object.freeze(faceIndices),
                faces: Object.freeze(faces),
                materialId: layerId === 'central_trikona' ? 'gold' : 'panchadhatu',
                isSacredEnclosure: layerId.includes('bhupura') || layerId.includes('chaturdasharam')
            };
            groupChildren.push(meshNode);
        });
        // Create Bindu Point Node if present
        const binduPoint = Object.values(sgm.solvedCoordinates).find(p => p.x === 500 && p.y === 500) || sgm.solvedCoordinates['p_bindu'];
        if (binduPoint) {
            const binduNode = {
                id: 'node_bindu_apex',
                type: 'point',
                layerId: 'bindu',
                sanskritName: 'केन्द्रीय सर्वआनन्दमय बिन्दु',
                englishName: 'Central Bindu Singularity',
                transform: {
                    position: { x: binduPoint.x, y: binduPoint.y, z: 0 },
                    rotation: { rx: 0, ry: 0, rz: 0 },
                    scale: { sx: 1, sy: 1, sz: 1 }
                },
                visible: true,
                position2D: binduPoint,
                role: 'bindu',
                isBindu: true
            };
            groupChildren.push(binduNode);
        }
        const rootGroup = {
            id: `scene_root_${sgm.dslId}`,
            type: 'group',
            layerId: 'root',
            sanskritName: 'सम्पूर्ण यन्त्र मण्डल',
            englishName: 'Full Yantra Mandala Scene',
            transform: {
                position: { x: 0, y: 0, z: 0 },
                rotation: { rx: 0, ry: 0, rz: 0 },
                scale: { sx: 1, sy: 1, sz: 1 }
            },
            visible: true,
            children: Object.freeze(groupChildren)
        };
        return {
            schemaVersion: '1.0.0-sgos.scene-graph',
            yantraId: sgm.dslId,
            deterministicHash: hash,
            root: rootGroup,
            nodeCount: groupChildren.length + 1,
            totalVertices,
            totalFaces,
            bounds: {
                minX: 0,
                minY: 0,
                maxX: sgm.viewportSize || 1000,
                maxY: sgm.viewportSize || 1000,
                width: sgm.viewportSize || 1000,
                height: sgm.viewportSize || 1000
            }
        };
    }
}
exports.SGOSSceneGraphEngine = SGOSSceneGraphEngine;
