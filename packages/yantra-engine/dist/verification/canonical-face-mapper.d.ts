import { GeometryDSL } from '../compiler/types';
export interface CanonicalFaceMapping {
    canonicalIndex: number;
    faceId: string;
    navavaranaNumber: number;
    sanskritName: string;
    englishName: string;
    avaranaName: string;
    traditionalSymbolism: string;
    centroid: {
        x: number;
        y: number;
    };
}
export interface CanonicalFaceMappingReport {
    dslId: string;
    totalFacesMapped: number;
    mappings: CanonicalFaceMapping[];
    navavaranaDistribution: Record<number, number>;
    isCanonicalMappingVerified: boolean;
}
export declare class SGOSCanonicalFaceMapper {
    /**
     * Maps all generated faces to their canonical 43 indices, 9 Navavaranas, and Shastric classifications.
     */
    static mapFaces(dsl: GeometryDSL): CanonicalFaceMappingReport;
}
