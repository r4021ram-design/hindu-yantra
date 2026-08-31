import { SolvedGeometryModel, SolvedPoint2D, SolvedFaceCoordinates } from '../solver/types';
import { SpatialBounds, SpatialQueryResult } from './types';
export declare class SGOSSpatialIndexEngine {
    private sgm;
    private bounds;
    constructor(sgm: SolvedGeometryModel);
    getBounds(): SpatialBounds;
    private computeBounds;
    /** Nearest neighbor search */
    nearestNeighbor(pt: SolvedPoint2D): {
        id: string;
        point: SolvedPoint2D;
        distance: number;
    } | null;
    /** Region lookup within bounding box (centroid or vertex intersection) */
    regionLookup(queryBounds: SpatialBounds): SpatialQueryResult;
    /** Point in polygon face lookup */
    faceLookup(pt: SolvedPoint2D): SolvedFaceCoordinates | null;
    private isPointInPolygon;
}
