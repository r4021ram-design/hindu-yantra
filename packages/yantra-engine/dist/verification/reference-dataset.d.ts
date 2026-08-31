export interface CanonicalReferenceDataset {
    version: string;
    sourceText: string;
    tradition: string;
    expectedGeometry: {
        primaryTrianglesCount: number;
        shivaTrianglesCount: number;
        shaktiTrianglesCount: number;
        subTrianglesCount: number;
        lotus8PetalsCount: number;
        lotus16PetalsCount: number;
        concentricCirclesCount: number;
        bhupuraStepsCount: number;
        bhupuraGatesCount: number;
        binduCoordinates: {
            x: number;
            y: number;
        };
        goldenRatioRatio: number;
    };
    tolerances: {
        vertexCoordinateTolerance: number;
        angleToleranceDegrees: number;
        symmetryErrorTolerance: number;
    };
}
export declare const CANONICAL_SRI_CHAKRA_REFERENCE_DATASET: Readonly<CanonicalReferenceDataset>;
