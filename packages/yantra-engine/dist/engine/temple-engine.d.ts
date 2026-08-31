import { SolverOutput, YantraDSL } from '../dsl/types';
export interface TempleArchitectureSpec {
    templeLayout2D: {
        sanctumSanctorumSize: number;
        bhupuraPlatformWalls: number;
        entranceGatesOrientations: string[];
    };
    mahaMeru3DSpec: {
        heightRatio: number;
        baseTierWidth: number;
        tierElevationStep: number;
        materialRecommendation: string;
    };
    manufacturingSpecs: {
        stoneCarvingDepthMM: number;
        copperPlateThicknessMM: number;
        laserEngravingPasses: number;
        cncToolDiameterMM: number;
        dxfLayerNames: string[];
    };
}
export declare class TempleEngine {
    /**
     * Generate Temple Architecture and Manufacturing specs from YantraDSL
     */
    static generateTempleSpec(dsl: YantraDSL): TempleArchitectureSpec;
    /**
     * Export DXF CAD format string for CNC / Laser Engraving machines
     */
    static exportDXF(solverOutput: SolverOutput): string;
}
