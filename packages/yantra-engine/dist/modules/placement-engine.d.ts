import { YantraDSL } from '../types/dsl';
export interface PlacementGuide {
    direction: string;
    degreesHeading: number;
    recommendedRoom: string;
}
export declare class PlacementEngine {
    static getPlacementGuide(dsl: YantraDSL): PlacementGuide;
}
