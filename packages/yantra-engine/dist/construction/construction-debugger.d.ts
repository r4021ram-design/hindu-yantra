import { ChiodoConstructionEngine } from './chiodo-construction-engine';
export interface ConstructionStepTrace {
    stepNumber: number;
    stepId: string;
    name: string;
    theorem: string;
    equation: string;
    newPoints: {
        id: string;
        x: number;
        y: number;
        label: string;
    }[];
    newLines: {
        id: string;
        d: string;
        stroke: string;
        equation: string;
    }[];
    newCircles: {
        id: string;
        cx: number;
        cy: number;
        r: number;
    }[];
    dependencyNodes: string[];
    activeTriangles: string[];
}
export interface TriangleCoordinatesExport {
    id: string;
    direction: 'downward' | 'upward';
    leftBase: {
        x: number;
        y: number;
    };
    rightBase: {
        x: number;
        y: number;
    };
    apex: {
        x: number;
        y: number;
    };
    baseMidpoint: {
        x: number;
        y: number;
    };
    baseHeightY: number;
    baseWidth: number;
}
export declare class ConstructionDebugger {
    private traces;
    private construction;
    constructor(inputParams?: Partial<Parameters<typeof ChiodoConstructionEngine.construct>[0]>);
    /**
     * Builds step-by-step traces for all 80 Chiodo construction nodes
     */
    private buildAll80StepTraces;
    /** Get step trace by step number (1 to 80) */
    getStep(stepNumber: number): ConstructionStepTrace;
    /** Return total step count */
    getTotalSteps(): number;
    /**
     * Export exact coordinates of every apex and base vertex for t1..t9
     */
    getTriangleCoordinates(): TriangleCoordinatesExport[];
    /**
     * Render SVG for a specific construction step with interactive toggles
     */
    renderStepSVG(stepNumber: number, options?: {
        visibleTriangles?: Set<string>;
        showDependencies?: boolean;
        width?: number | string;
        height?: number | string;
    }): string;
    /**
     * Find the exact first construction step number where generated geometry diverges from reference dataset
     */
    findFirstDivergenceStep(referenceVertices: {
        id: string;
        x: number;
        y: number;
    }[]): {
        firstDivergenceStep: number | null;
        maxDeviation: number;
        details: string;
    };
}
