import { Point2D } from '../kernel';
export interface AnalyticalReferenceTriangle {
    id: string;
    name: string;
    orientation: 'up' | 'down';
    apex: Point2D;
    leftBase: Point2D;
    rightBase: Point2D;
    metadata: {
        paperSection: string;
        figureCitation: string;
        equationCitation: string;
        meaning: string;
    };
}
/**
 * Paper: Alessandro Chiodo (2021)
 * Section: 2.1 - 2.4
 * Figure: Figures 1 & 11
 * Meaning: Independent analytical reference dataset containing exact symbolic closed-form values
 * for Chiodo (2021) canonical geometry on reference circle C0 (center (0, 0.5), radius 0.5).
 */
export declare class ChiodoReferenceDataset {
    static readonly S: number;
    static readonly R: number;
    static readonly P: number;
    static readonly Q = 0.5;
    static getReferenceTriangles(): AnalyticalReferenceTriangle[];
}
