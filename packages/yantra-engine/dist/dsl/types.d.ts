export type EvidenceLevel = 'Scripture Verified' | 'Traditional Commentary' | 'Academic Research' | 'Interpretation' | 'Speculative';
export type KnowledgeCategory = 'Canonical' | 'Traditional Variant' | 'Academic Research' | 'Modern Interpretation' | 'Speculative';
export type TraditionType = 'Srividya' | 'Kaula' | 'Samaya' | 'Meru 3D' | 'Temple Style' | 'Copper Plate Style';
export type TraditionSchool = TraditionType;
export interface ScripturalCitation {
    id: string;
    scripture: string;
    chapterVerse: string;
    sanskritText: string;
    translationEnglish: string;
    commentaryAuthor?: string;
    tradition: TraditionType;
    evidenceLevel: EvidenceLevel;
}
export type ScripturalReference = ScripturalCitation & {
    sourceText?: string;
};
export interface NavavaranaSpec {
    avaranaNumber: number;
    sanskritName: string;
    englishName: string;
    chakraName: string;
    associatedDeity: string;
    associatedYoginiGroup: string;
    associatedMudra: string;
    beejMantra: string;
    circuitType: 'bhupura' | 'lotus16' | 'lotus8' | 'tri14' | 'tri10_outer' | 'tri10_inner' | 'tri8' | 'tri_kama_kala' | 'bindu';
    citations: ScripturalCitation[];
}
export interface ModernInterpretation {
    id: string;
    title: string;
    category: 'Physics Analogy' | 'Psychological Model' | 'Meditation Theory' | 'Scientific Discussion' | 'Internet Concept';
    summary: string;
    detailedAnalysis: string;
    disclaimer: string;
    authorOrSource?: string;
}
export interface Point2D {
    x: number;
    y: number;
    id?: string;
    label?: string;
    layerId?: string;
}
export interface Polygon2D {
    id: string;
    points: Point2D[];
    layerId: string;
    nameSanskrit?: string;
    nameEnglish?: string;
    symbolism?: string;
}
export interface YantraDSL {
    id: string;
    version?: string;
    traditionVariant?: string;
    metadata?: {
        titleSanskrit: string;
        titleEnglish: string;
        deity: string;
        element: string;
        traditionVariant: TraditionType;
        category: KnowledgeCategory;
        academicDisclaimer: string;
        authorshipNote: string;
    };
    names?: {
        sanskrit: string;
        english: string;
        hindi?: string;
        alternateNames?: string[];
    };
    attributes?: {
        deity: string;
        element: string;
        planet?: string;
        purpose?: string[];
        chakra?: string;
        metal?: string | string[];
        color?: string;
        benefits?: string[];
        precautions?: string[];
        tags: string[];
    };
    mantra?: {
        beejMantra: string;
        sanskrit: string;
        english?: string;
        transliteration?: string;
        meaningHindi?: string;
        meaningEnglish?: string;
        count?: number;
        audioFrequencyHz?: number;
        mainMantra?: string;
        japaModes?: any;
    };
    geometry?: {
        baseSize: number;
        hasBhupura: boolean;
        bhupuraSteps: number;
        concentricCircleCount: number;
        lotusRingCounts: number[];
        hasShatkona: boolean;
        hasShriInterlockingTriangles: boolean;
        hasKuberGrid: boolean;
        hasNavagrahaMatrix: boolean;
        hasVastuMatrix: boolean;
        binduRadius: number;
    };
    geometryRules?: any;
    layers?: any;
    construction?: {
        primaryTrianglesCount: number;
        subTrianglesCount: number;
        intersectionMethod: 'canonical_intersections' | 'polar_matrix' | 'grid_matrix';
        shaktiTrianglesCount?: number;
        shivaTrianglesCount?: number;
    };
    navavaranas?: NavavaranaSpec[];
    references?: {
        citations: ScripturalCitation[];
        academicBibliography: string[];
    };
    scripturalReferences?: any[];
    research?: any;
    ritualPlacement?: any;
    i18n?: any;
    rendering?: {
        defaultTheme: 'parchment' | 'gold' | 'dark' | 'copper' | 'blueprint';
        strokeWidth: number;
        goldAccentColor: string;
        crimsonFillColor: string;
        saffronFillColor: string;
    };
}
export interface GeometryValidationReport {
    isAuthentic: boolean;
    isValid?: boolean;
    score: number;
    trianglesValidated: number;
    circlesValidated: number;
    petalsValidated: number;
    symmetryVerified: boolean;
    binduCentered: boolean;
    primaryTrianglesValidated?: number;
    subTrianglesValidated?: number;
    lotus8Validated?: boolean;
    lotus16Validated?: boolean;
    bhupuraValidated?: boolean;
    intersectionPrecisionError?: number;
    symmetryError?: number;
    binduAlignmentError?: number;
    navavaranaOrderValidated?: boolean;
    selfIntersectionErrors: string[];
    checks?: any[];
    evidenceBadges: {
        geometryVerified: boolean;
        scriptureLinked: boolean;
        traditionIdentified: boolean;
        commentaryAvailable: boolean;
        researchAvailable: boolean;
        manufacturingReady: boolean;
    };
}
export type ValidationReport = GeometryValidationReport;
export interface SolverOutput {
    yantraId: string;
    viewBox: {
        minX: number;
        minY: number;
        width: number;
        height: number;
    };
    polygons: Polygon2D[];
    circles: {
        id: string;
        cx: number;
        cy: number;
        r: number;
        layerId: string;
    }[];
    paths: {
        id: string;
        d: string;
        layerId: string;
        fill?: string;
        stroke?: string;
        strokeWidth?: number;
    }[];
    points: (Point2D & {
        id: string;
        layerId: string;
    })[];
    layerNames: string[];
    metrics?: any;
    validationReport: GeometryValidationReport;
}
export type CompiledGeometryModel = SolverOutput;
export type MantraInfo = any;
export type RitualPlacementInfo = any;
export type YantraDirection = any;
