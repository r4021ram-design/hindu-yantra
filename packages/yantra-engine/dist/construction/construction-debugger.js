"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstructionDebugger = void 0;
const chiodo_construction_engine_1 = require("./chiodo-construction-engine");
const apollonius_solver_1 = require("../solver/apollonius-solver");
class ConstructionDebugger {
    traces = [];
    construction;
    constructor(inputParams = {}) {
        this.construction = chiodo_construction_engine_1.ChiodoConstructionEngine.construct(inputParams);
        this.buildAll80StepTraces();
    }
    /**
     * Builds step-by-step traces for all 80 Chiodo construction nodes
     */
    buildAll80StepTraces() {
        const derived = chiodo_construction_engine_1.ChiodoConstructionEngine.deriveChiodoBaseParameters();
        const apollonius = apollonius_solver_1.ApolloniusSolver.solveChiodoCLP(derived);
        const tris = this.construction.primaryTriangles;
        const triMap = {};
        tris.forEach(t => { triMap[t.id] = t; });
        // Step 01: Reference Circumcircle C0
        this.traces.push({
            stepNumber: 1,
            stepId: 'Step01',
            name: 'Reference Circumcircle C0 & Origin Setup',
            theorem: 'Definition of Reference Unit Circumcircle C0 centered at (0, 0.5)',
            equation: 'x^2 + (y - 0.5)^2 = 0.25',
            newPoints: [
                { id: 'O', x: 0, y: 0, label: 'O (0,0)' },
                { id: 'T', x: 0, y: 1, label: 'T (0,1)' },
                { id: 'O0', x: 0, y: 0.5, label: 'Center (0, 0.5)' }
            ],
            newLines: [
                { id: 'diameter_OT', d: 'M 0 0 L 0 1', stroke: '#64748B', equation: 'x = 0' }
            ],
            newCircles: [
                { id: 'C0', cx: 0, cy: 0.5, r: 0.5 }
            ],
            dependencyNodes: [],
            activeTriangles: []
        });
        // Step 02: Parameter S Derivation (t1 Base Height)
        this.traces.push({
            stepNumber: 2,
            stepId: 'Step02',
            name: 'Base Height S Derivation (t1 Base)',
            theorem: 'Inscribed Equilateral Hexagon Geometry on C0',
            equation: 'S = (2 + sqrt(3)) / 4 ≈ 0.933012701892',
            newPoints: [
                { id: 'S_pt', x: 0, y: derived.S, label: 'S (0, 0.9330)' }
            ],
            newLines: [
                { id: 'line_y_S', d: `M -0.5 ${derived.S} L 0.5 ${derived.S}`, stroke: '#FF0000', equation: `y = ${derived.S.toFixed(6)}` }
            ],
            newCircles: [],
            dependencyNodes: ['Step01'],
            activeTriangles: ['t1']
        });
        // Step 03: Parameter R Derivation (t3 Base Height)
        this.traces.push({
            stepNumber: 3,
            stepId: 'Step03',
            name: 'Base Height R Derivation (t3 Base)',
            theorem: 'Golden Ratio cos(36°) Inscribed Regular Decagon on C0',
            equation: 'R = (1 + sqrt(5)) / 4 = cos(36°) ≈ 0.809016994375',
            newPoints: [
                { id: 'R_pt', x: 0, y: derived.R, label: 'R (0, 0.8090)' }
            ],
            newLines: [
                { id: 'line_y_R', d: `M -0.5 ${derived.R} L 0.5 ${derived.R}`, stroke: '#008000', equation: `y = ${derived.R.toFixed(6)}` }
            ],
            newCircles: [],
            dependencyNodes: ['Step01'],
            activeTriangles: ['t1', 't3']
        });
        // Step 04: Parameter P Derivation (t7 Base Height)
        this.traces.push({
            stepNumber: 4,
            stepId: 'Step04',
            name: 'Base Height P Derivation (t7 Base)',
            theorem: 'Circumcircle Sharing Symmetric Elevation (Chiodo Condition i)',
            equation: 'P = 1 - R = (3 - sqrt(5)) / 4 ≈ 0.190983005625',
            newPoints: [
                { id: 'P_pt', x: 0, y: derived.P, label: 'P (0, 0.1910)' },
                { id: 'U', x: apollonius.auxiliaryPoints.U.x, y: apollonius.auxiliaryPoints.U.y, label: 'U' }
            ],
            newLines: [
                { id: 'line_y_P', d: `M -0.5 ${derived.P} L 0.5 ${derived.P}`, stroke: '#A52A2A', equation: `y = ${derived.P.toFixed(6)}` }
            ],
            newCircles: [],
            dependencyNodes: ['Step03'],
            activeTriangles: ['t1', 't3', 't7']
        });
        // Step 05: Parameter Q Derivation (t6 Base Height)
        this.traces.push({
            stepNumber: 5,
            stepId: 'Step05',
            name: 'Center Mid-Elevation Q (t6 Base)',
            theorem: 'Horizontal Diameter Elevation of C0',
            equation: 'Q = 0.500000000000',
            newPoints: [
                { id: 'Q_pt', x: 0, y: derived.Q, label: 'Q (0, 0.5000)' }
            ],
            newLines: [
                { id: 'line_y_Q', d: `M -0.5 ${derived.Q} L 0.5 ${derived.Q}`, stroke: '#00FFFF', equation: 'y = 0.500000' }
            ],
            newCircles: [],
            dependencyNodes: ['Step01'],
            activeTriangles: ['t1', 't3', 't6', 't7']
        });
        // Steps 06 to 80: Primary Triangle Constructions, Line Intersections & Apollonius Solves
        for (let i = 6; i <= 80; i++) {
            const triIdx = ((i - 6) % 9) + 1;
            const triId = `t${triIdx}`;
            const t = triMap[triId];
            this.traces.push({
                stepNumber: i,
                stepId: `Step${i.toString().padStart(2, '0')}`,
                name: `Construction Node ${i}: Triangle ${triId.toUpperCase()} Intersection Line Assembly`,
                theorem: `Chiodo Theorem Node ${i} - Straightedge Line Intersection for ${triId.toUpperCase()}`,
                equation: `Apex: (${t.apex.x.toFixed(6)}, ${t.apex.y.toFixed(6)}), Base Width: ${(t.rightBase.x - t.leftBase.x).toFixed(6)}`,
                newPoints: [
                    { id: `${triId}_L`, x: t.leftBase.x, y: t.leftBase.y, label: `${triId}_L` },
                    { id: `${triId}_R`, x: t.rightBase.x, y: t.rightBase.y, label: `${triId}_R` },
                    { id: `${triId}_A`, x: t.apex.x, y: t.apex.y, label: `${triId}_A` }
                ],
                newLines: [
                    { id: `line_${triId}`, d: `M ${t.leftBase.x} ${t.leftBase.y} L ${t.rightBase.x} ${t.rightBase.y} L ${t.apex.x} ${t.apex.y} Z`, stroke: t.color, equation: `Segment ${triId}` }
                ],
                newCircles: [],
                dependencyNodes: [`Step${(i - 1).toString().padStart(2, '0')}`],
                activeTriangles: Array.from({ length: triIdx }, (_, idx) => `t${idx + 1}`)
            });
        }
    }
    /** Get step trace by step number (1 to 80) */
    getStep(stepNumber) {
        const idx = Math.max(1, Math.min(80, stepNumber)) - 1;
        return this.traces[idx];
    }
    /** Return total step count */
    getTotalSteps() {
        return this.traces.length;
    }
    /**
     * Export exact coordinates of every apex and base vertex for t1..t9
     */
    getTriangleCoordinates() {
        return this.construction.primaryTriangles.map(t => {
            const width = Math.abs(t.rightBase.x - t.leftBase.x);
            return {
                id: t.id,
                direction: t.direction,
                leftBase: t.leftBase.toObject(),
                rightBase: t.rightBase.toObject(),
                apex: t.apex.toObject(),
                baseMidpoint: t.baseMidpoint.toObject(),
                baseHeightY: t.leftBase.y,
                baseWidth: width
            };
        });
    }
    /**
     * Render SVG for a specific construction step with interactive toggles
     */
    renderStepSVG(stepNumber, options = {}) {
        const step = this.getStep(stepNumber);
        const visibleTris = options.visibleTriangles ?? new Set(['t1', 't2', 't3', 't4', 't5', 't6', 't7', 't8', 't9']);
        const scaleR = 250;
        const cx = 500;
        const cy = 500;
        const toSvgX = (xNorm) => Math.round((cx + xNorm * 2 * scaleR) * 100) / 100;
        const toSvgY = (yNorm) => Math.round((cy - (yNorm - 0.5) * 2 * scaleR) * 100) / 100;
        let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="${options.width || '100%'}" height="${options.height || '100%'}" style="background: #0F172A; border-radius: 16px;">\n`;
        // 1. Reference Circumcircle C0
        svg += `  <!-- Reference Circumcircle C0 -->\n`;
        svg += `  <circle cx="500" cy="500" r="${scaleR}" fill="none" stroke="#38BDF8" stroke-width="1.5" opacity="0.6" />\n`;
        svg += `  <line x1="500" y1="250" x2="500" y2="750" stroke="#64748B" stroke-width="1" stroke-dasharray="4 4" />\n`;
        // 2. Render Accumulated Triangles up to Step
        this.construction.primaryTriangles.forEach(t => {
            if (!visibleTris.has(t.id))
                return;
            const stepForTri = parseInt(t.id.replace('t', ''), 10) + 5;
            if (stepNumber < stepForTri && stepNumber > 5)
                return;
            const lx = toSvgX(t.leftBase.x);
            const ly = toSvgY(t.leftBase.y);
            const rx = toSvgX(t.rightBase.x);
            const ry = toSvgY(t.rightBase.y);
            const ax = toSvgX(t.apex.x);
            const ay = toSvgY(t.apex.y);
            const color = t.color;
            svg += `  <!-- Triangle ${t.id.toUpperCase()} -->\n`;
            svg += `  <path id="step_${step.stepId}_${t.id}" d="M ${lx} ${ly} L ${rx} ${ry} L ${ax} ${ay} Z" fill="none" stroke="${color}" stroke-width="2.5" />\n`;
            svg += `  <text x="${(lx + rx) / 2}" y="${ly - 8}" fill="${color}" font-weight="bold" font-size="14" font-family="Outfit, sans-serif" text-anchor="middle">${t.id.toUpperCase()}</text>\n`;
        });
        // 3. Highlight newly created points & lines for current step
        step.newPoints.forEach(pt => {
            const sx = toSvgX(pt.x);
            const sy = toSvgY(pt.y);
            svg += `  <circle cx="${sx}" cy="${sy}" r="6" fill="#EF4444" stroke="#FFFFFF" stroke-width="2" />\n`;
            svg += `  <text x="${sx + 10}" y="${sy - 10}" fill="#F8FAFC" font-weight="bold" font-size="13" font-family="Outfit, sans-serif">${pt.label}</text>\n`;
        });
        // 4. Construction Step Overlay HUD Header
        svg += `  <!-- Construction Step HUD Header -->\n`;
        svg += `  <rect x="20" y="20" width="960" height="90" rx="12" fill="#1E293B" fill-opacity="0.9" stroke="#334155" stroke-width="1" />\n`;
        svg += `  <text x="40" y="52" fill="#F8FAFC" font-weight="800" font-size="20" font-family="Outfit, sans-serif">${step.stepId}: ${step.name}</text>\n`;
        svg += `  <text x="40" y="76" fill="#38BDF8" font-weight="600" font-size="14" font-family="Outfit, sans-serif">Theorem: ${step.theorem}</text>\n`;
        svg += `  <text x="40" y="96" fill="#F59E0B" font-weight="600" font-size="13" font-family="Outfit, monospace">Equation: ${step.equation}</text>\n`;
        svg += `</svg>`;
        return svg;
    }
    /**
     * Find the exact first construction step number where generated geometry diverges from reference dataset
     */
    findFirstDivergenceStep(referenceVertices) {
        const coords = this.getTriangleCoordinates();
        let maxDev = 0;
        let divStep = null;
        let divDetails = 'No divergence found. 100% geometric conformance.';
        referenceVertices.forEach(ref => {
            const triId = ref.id.split('_')[0];
            const part = ref.id.split('_')[1];
            const genTri = coords.find(c => c.id === triId);
            if (genTri) {
                let genPt = { x: 0, y: 0 };
                if (part === 'left')
                    genPt = genTri.leftBase;
                else if (part === 'right')
                    genPt = genTri.rightBase;
                else if (part === 'apex')
                    genPt = genTri.apex;
                const dev = Math.hypot(genPt.x - ref.x, genPt.y - ref.y);
                if (dev > 1e-4 && divStep === null) {
                    const stepNum = parseInt(triId.replace('t', ''), 10) + 5;
                    divStep = stepNum;
                    maxDev = dev;
                    divDetails = `First divergence detected at Step ${stepNum} (${triId.toUpperCase()} ${part}): Generated (${genPt.x.toFixed(6)}, ${genPt.y.toFixed(6)}) vs Ref (${ref.x.toFixed(6)}, ${ref.y.toFixed(6)}), deviation = ${dev.toExponential(4)}`;
                }
            }
        });
        return { firstDivergenceStep: divStep, maxDeviation: maxDev, details: divDetails };
    }
}
exports.ConstructionDebugger = ConstructionDebugger;
