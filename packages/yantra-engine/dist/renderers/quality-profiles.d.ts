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
export declare class QualityProfileRegistry {
    private static readonly PROFILES;
    static getProfile(level?: QualityLevel): RenderingQualityProfile;
}
