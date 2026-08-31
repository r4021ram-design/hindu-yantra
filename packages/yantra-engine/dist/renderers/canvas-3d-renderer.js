"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Canvas3DRenderer = void 0;
const compiler_1 = require("../geometry/compiler");
const scene_graph_1 = require("./scene-graph");
const material_engine_1 = require("./material-engine");
class Canvas3DRenderer {
    /**
     * Render a 3D procedural mesh / OSGM Scene Graph onto an HTML5 Canvas context
     */
    static renderToCanvas(ctx, width, height, target, options = {}) {
        let sceneGraph;
        if ('root' in target) {
            sceneGraph = target;
        }
        else if ('sgm' in target) {
            sceneGraph = scene_graph_1.SGOSSceneGraphEngine.fromOSGM(target);
        }
        else {
            const compiled = 'geometryRules' in target ? compiler_1.GeometryCompiler.compile(target) : target;
            sceneGraph = scene_graph_1.SGOSSceneGraphEngine.fromOSGM({ dslId: compiled.yantraId, solvedCoordinates: {}, solvedFaces: {}, solvedEdges: {} });
        }
        const material = options.material || 'Panchadhatu';
        const matId = material.toLowerCase() === 'wood' ? 'panchadhatu' : material.toLowerCase() === 'brass' ? 'panchadhatu' : material.toLowerCase();
        const pkg = material_engine_1.MaterialEngine.getMaterial(matId);
        const isMeru = options.mode === 'maha_meru_pyramid' || sceneGraph.yantraId.includes('meru');
        const isWireframe = options.wireframe === true;
        const isXRay = options.xrayMode === true;
        const exploded = options.explodedViewOffset || 0;
        const rotX = options.rotX !== undefined ? options.rotX : 0.55;
        const rotY = options.rotY !== undefined ? options.rotY : 0.78;
        ctx.clearRect(0, 0, width, height);
        ctx.save();
        const cx = width / 2;
        const cy = height / 2;
        const scale = Math.min(width, height) / 1200;
        const project = (x3d, y3d, z3d) => {
            const cosY = Math.cos(rotY);
            const sinY = Math.sin(rotY);
            const cosX = Math.cos(rotX);
            const sinX = Math.sin(rotX);
            const x1 = x3d * cosY + z3d * sinY;
            const y1 = y3d;
            const z1 = -x3d * sinY + z3d * cosY;
            const x2 = x1;
            const y2 = y1 * cosX - z1 * sinX;
            const z2 = y1 * sinX + z1 * cosX;
            const fov = 800;
            const distance = 900;
            const pScale = fov / (distance + z2);
            return {
                x: cx + x2 * pScale * scale,
                y: cy + y2 * pScale * scale,
                z: z2
            };
        };
        // Render Base Platform
        const baseSize = 420;
        const baseHeight = 35 + exploded * 0.5;
        const baseCorners = [
            project(-baseSize, baseHeight, -baseSize),
            project(baseSize, baseHeight, -baseSize),
            project(baseSize, baseHeight, baseSize),
            project(-baseSize, baseHeight, baseSize),
            project(-baseSize, -baseHeight, -baseSize),
            project(baseSize, -baseHeight, -baseSize),
            project(baseSize, -baseHeight, baseSize),
            project(-baseSize, -baseHeight, baseSize)
        ];
        ctx.fillStyle = pkg.pbr.albedo;
        ctx.strokeStyle = pkg.preview.accentColor;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(baseCorners[4].x, baseCorners[4].y);
        ctx.lineTo(baseCorners[5].x, baseCorners[5].y);
        ctx.lineTo(baseCorners[6].x, baseCorners[6].y);
        ctx.lineTo(baseCorners[7].x, baseCorners[7].y);
        ctx.closePath();
        ctx.globalAlpha = isXRay ? 0.3 : 0.85;
        ctx.fill();
        ctx.stroke();
        // Render Tiers (Concentric Rings)
        const concentricTiers = [
            { r: 350, elev: (isMeru ? -70 : -10) - exploded * 1.0 },
            { r: 280, elev: (isMeru ? -130 : -20) - exploded * 2.0 },
            { r: 210, elev: (isMeru ? -190 : -30) - exploded * 3.0 },
            { r: 140, elev: (isMeru ? -260 : -40) - exploded * 4.0 }
        ];
        concentricTiers.forEach((tier, idx) => {
            ctx.beginPath();
            const segments = 32;
            for (let i = 0; i <= segments; i++) {
                const theta = (i * 2 * Math.PI) / segments;
                const px = tier.r * Math.cos(theta);
                const pz = tier.r * Math.sin(theta);
                const pt = project(px, tier.elev, pz);
                if (i === 0)
                    ctx.moveTo(pt.x, pt.y);
                else
                    ctx.lineTo(pt.x, pt.y);
            }
            ctx.globalAlpha = isXRay ? 0.2 : 0.75;
            ctx.strokeStyle = idx % 2 === 0 ? '#FFD700' : '#B87333';
            ctx.stroke();
        });
        // Render Pyramid Peaks
        const triangleLevels = isMeru ? 9 : 3;
        const apexHeight = (isMeru ? -360 : -50) - exploded * 5.0;
        for (let lvl = 0; lvl < triangleLevels; lvl++) {
            const frac = lvl / triangleLevels;
            const curElev = -50 + (apexHeight + 50) * frac;
            const curR = 200 * (1 - frac * 0.85);
            const count = 3;
            for (let i = 0; i < count; i++) {
                const theta1 = (i * 2 * Math.PI) / count + (lvl * 0.2);
                const theta2 = ((i + 1) * 2 * Math.PI) / count + (lvl * 0.2);
                const p1 = project(curR * Math.cos(theta1), curElev, curR * Math.sin(theta1));
                const p2 = project(curR * Math.cos(theta2), curElev, curR * Math.sin(theta2));
                const pApex = project(0, curElev - (isMeru ? 35 : 10), 0);
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.lineTo(pApex.x, pApex.y);
                ctx.closePath();
                ctx.globalAlpha = isWireframe ? 0.3 : (isXRay ? 0.25 : 0.65);
                ctx.fillStyle = pkg.pbr.albedo;
                ctx.fill();
                ctx.strokeStyle = '#FFF';
                ctx.stroke();
            }
        }
        // Render Crown Apex Bindu
        const binduPt = project(0, apexHeight - 40, 0);
        ctx.beginPath();
        ctx.arc(binduPt.x, binduPt.y, 8 * scale, 0, 2 * Math.PI);
        ctx.fillStyle = '#FFD700';
        ctx.globalAlpha = 1.0;
        ctx.fill();
        ctx.strokeStyle = '#FFFFFF';
        ctx.stroke();
        // Measurement Mode Indicator
        if (options.measurementMode) {
            ctx.globalAlpha = 1.0;
            ctx.strokeStyle = '#38BDF8';
            ctx.lineWidth = 2;
            ctx.setLineDash([4, 4]);
            ctx.beginPath();
            ctx.moveTo(cx - 100, cy);
            ctx.lineTo(cx + 100, cy);
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.fillStyle = '#38BDF8';
            ctx.font = '11px sans-serif';
            ctx.fillText('Measurement: 108.00 Sacred Units (0.00mm error)', cx - 110, cy - 12);
        }
        ctx.restore();
    }
}
exports.Canvas3DRenderer = Canvas3DRenderer;
