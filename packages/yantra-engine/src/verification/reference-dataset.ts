export interface CanonicalReferenceDataset {
  version: string;
  sourceText: string;
  tradition: string;
  expectedGeometry: {
    primaryTrianglesCount: number; // 9
    shivaTrianglesCount: number; // 4
    shaktiTrianglesCount: number; // 5
    subTrianglesCount: number; // 43
    lotus8PetalsCount: number; // 8
    lotus16PetalsCount: number; // 16
    concentricCirclesCount: number; // 3
    bhupuraStepsCount: number; // 3
    bhupuraGatesCount: number; // 4
    binduCoordinates: { x: number; y: number }; // (500, 500)
    goldenRatioRatio: number; // 1.6180339887
  };
  tolerances: {
    vertexCoordinateTolerance: number; // 1e-6
    angleToleranceDegrees: number; // 1e-6
    symmetryErrorTolerance: number; // 1e-6
  };
}

export const CANONICAL_SRI_CHAKRA_REFERENCE_DATASET: Readonly<CanonicalReferenceDataset> = Object.freeze({
  version: '1.0.0-canonical.srividya',
  sourceText: 'Saundarya Lahari Verse 11, Sharada Tilaka Patala 7, Kularnava Tantra Patala 5',
  tradition: 'Srividya (Canonical)',
  expectedGeometry: Object.freeze({
    primaryTrianglesCount: 9,
    shivaTrianglesCount: 4,
    shaktiTrianglesCount: 5,
    subTrianglesCount: 43,
    lotus8PetalsCount: 8,
    lotus16PetalsCount: 16,
    concentricCirclesCount: 3,
    bhupuraStepsCount: 3,
    bhupuraGatesCount: 4,
    binduCoordinates: Object.freeze({ x: 500, y: 500 }),
    goldenRatioRatio: 1.6180339887
  }),
  tolerances: Object.freeze({
    vertexCoordinateTolerance: 1e-6,
    angleToleranceDegrees: 1e-6,
    symmetryErrorTolerance: 1e-6
  })
});
