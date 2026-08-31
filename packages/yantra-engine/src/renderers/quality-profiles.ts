export type QualityLevel = 'Low' | 'Medium' | 'High' | 'Ultra';

export interface RenderingQualityProfile {
  readonly level: QualityLevel;
  readonly curveSubdivisions: number;
  readonly petalSegmentsCount: number;
  readonly normalPrecisionDigits: number;
  readonly shadowMapResolution: number;
  readonly enableAntiAliasing: boolean;
  readonly maxTextureResolution: number;
  readonly enablePBRShading: boolean;
}

export class QualityProfileRegistry {
  private static readonly PROFILES: Record<QualityLevel, RenderingQualityProfile> = {
    Low: {
      level: 'Low',
      curveSubdivisions: 8,
      petalSegmentsCount: 6,
      normalPrecisionDigits: 2,
      shadowMapResolution: 512,
      enableAntiAliasing: false,
      maxTextureResolution: 512,
      enablePBRShading: false
    },
    Medium: {
      level: 'Medium',
      curveSubdivisions: 16,
      petalSegmentsCount: 12,
      normalPrecisionDigits: 3,
      shadowMapResolution: 1024,
      enableAntiAliasing: true,
      maxTextureResolution: 1024,
      enablePBRShading: true
    },
    High: {
      level: 'High',
      curveSubdivisions: 32,
      petalSegmentsCount: 24,
      normalPrecisionDigits: 4,
      shadowMapResolution: 2048,
      enableAntiAliasing: true,
      maxTextureResolution: 2048,
      enablePBRShading: true
    },
    Ultra: {
      level: 'Ultra',
      curveSubdivisions: 64,
      petalSegmentsCount: 48,
      normalPrecisionDigits: 6,
      shadowMapResolution: 4096,
      enableAntiAliasing: true,
      maxTextureResolution: 4096,
      enablePBRShading: true
    }
  };

  public static getProfile(level: QualityLevel = 'High'): RenderingQualityProfile {
    return this.PROFILES[level] || this.PROFILES.High;
  }
}
