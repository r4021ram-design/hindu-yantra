import { SolverOutput, YantraDSL } from '../dsl/types';

export interface TempleArchitectureSpec {
  templeLayout2D: {
    sanctumSanctorumSize: number; // Garbhagriha dimensions
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

export class TempleEngine {
  /**
   * Generate Temple Architecture and Manufacturing specs from YantraDSL
   */
  public static generateTempleSpec(dsl: YantraDSL): TempleArchitectureSpec {
    const isMeru = dsl.id.includes('meru') || dsl.metadata?.traditionVariant === 'Meru 3D';
    const bhupuraSteps = dsl.geometry?.bhupuraSteps || (dsl as any).geometryRules?.bhupura?.steps || 3;
    const baseSize = dsl.geometry?.baseSize || 1000;

    return {
      templeLayout2D: {
        sanctumSanctorumSize: 108, // 108 sacred units
        bhupuraPlatformWalls: bhupuraSteps,
        entranceGatesOrientations: ['East (Purva)', 'South (Dakshina)', 'West (Paschima)', 'North (Uttara)']
      },
      mahaMeru3DSpec: {
        heightRatio: isMeru ? 0.85 : 0.25,
        baseTierWidth: baseSize,
        tierElevationStep: isMeru ? 45 : 10,
        materialRecommendation: 'Panchadhatu or Makrana White Marble'
      },
      manufacturingSpecs: {
        stoneCarvingDepthMM: 12.5,
        copperPlateThicknessMM: 3.0,
        laserEngravingPasses: 4,
        cncToolDiameterMM: 1.5,
        dxfLayerNames: ['0_BHUPURA', '1_LOTUS_16', '2_LOTUS_8', '3_AVARANAS_43', '4_BINDU']
      }
    };
  }

  /**
   * Export DXF CAD format string for CNC / Laser Engraving machines
   */
  public static exportDXF(solverOutput: SolverOutput): string {
    let dxf = `0\nSECTION\n2\nHEADER\n0\nENDSEC\n0\nSECTION\n2\nENTITIES\n`;

    // Write Polygons to DXF
    if (solverOutput.polygons) {
      solverOutput.polygons.forEach((poly, idx) => {
        dxf += `0\nPOLYLINE\n8\n${poly.layerId.toUpperCase()}\n66\n1\n70\n1\n`;
        poly.points.forEach(pt => {
          dxf += `0\nVERTEX\n8\n${poly.layerId.toUpperCase()}\n10\n${pt.x.toFixed(3)}\n20\n${pt.y.toFixed(3)}\n30\n0.0\n`;
        });
        dxf += `0\nSEQEND\n`;
      });
    }

    // Write Circles to DXF
    if (solverOutput.circles) {
      solverOutput.circles.forEach(c => {
        dxf += `0\nCIRCLE\n8\n${c.layerId.toUpperCase()}\n10\n${c.cx.toFixed(3)}\n20\n${c.cy.toFixed(3)}\n30\n0.0\n40\n${c.r.toFixed(3)}\n`;
      });
    }

    dxf += `0\nENDSEC\n0\nEOF\n`;
    return dxf;
  }
}
