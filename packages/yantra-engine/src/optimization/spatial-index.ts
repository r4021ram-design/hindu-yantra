import { SolvedGeometryModel, SolvedPoint2D, SolvedFaceCoordinates } from '../solver/types';
import { SpatialBounds, SpatialQueryResult } from './types';

export class SGOSSpatialIndexEngine {
  private sgm: SolvedGeometryModel;
  private bounds: SpatialBounds;

  constructor(sgm: SolvedGeometryModel) {
    this.sgm = sgm || {} as any;
    this.bounds = this.computeBounds();
  }

  public getBounds(): SpatialBounds {
    return this.bounds;
  }

  private computeBounds(): SpatialBounds {
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;

    const coords = (this.sgm && this.sgm.solvedCoordinates) || {};

    for (const pt of Object.values(coords)) {
      if (pt.x < minX) minX = pt.x;
      if (pt.y < minY) minY = pt.y;
      if (pt.x > maxX) maxX = pt.x;
      if (pt.y > maxY) maxY = pt.y;
    }

    return {
      minX: isFinite(minX) ? minX : 0,
      minY: isFinite(minY) ? minY : 0,
      maxX: isFinite(maxX) ? maxX : 1000,
      maxY: isFinite(maxY) ? maxY : 1000
    };
  }

  /** Nearest neighbor search */
  public nearestNeighbor(pt: SolvedPoint2D): { id: string; point: SolvedPoint2D; distance: number } | null {
    let bestId: string | null = null;
    let minDist = Infinity;

    const coords = (this.sgm && this.sgm.solvedCoordinates) || {};

    for (const [id, nodePt] of Object.entries(coords)) {
      const dx = nodePt.x - pt.x;
      const dy = nodePt.y - pt.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < minDist) {
        minDist = dist;
        bestId = id;
      }
    }

    if (!bestId) return null;
    return { id: bestId, point: coords[bestId], distance: minDist };
  }

  /** Region lookup within bounding box (centroid or vertex intersection) */
  public regionLookup(queryBounds: SpatialBounds): SpatialQueryResult {
    const facesInBounds: SolvedFaceCoordinates[] = [];
    const faces = (this.sgm && this.sgm.solvedFaces) || {};

    for (const face of Object.values(faces)) {
      const centroidInBounds =
        face.centroid.x >= queryBounds.minX &&
        face.centroid.x <= queryBounds.maxX &&
        face.centroid.y >= queryBounds.minY &&
        face.centroid.y <= queryBounds.maxY;

      const vertexInBounds = face.vertices.some(
        v => v.x >= queryBounds.minX && v.x <= queryBounds.maxX && v.y >= queryBounds.minY && v.y <= queryBounds.maxY
      );

      if (centroidInBounds || vertexInBounds) {
        facesInBounds.push(face);
      }
    }

    const nearest = this.nearestNeighbor({
      x: (queryBounds.minX + queryBounds.maxX) / 2,
      y: (queryBounds.minY + queryBounds.maxX) / 2
    });

    return {
      nearestPoint: nearest || undefined,
      facesInBounds: Object.freeze(facesInBounds),
      intersectingEdgeIds: Object.freeze([])
    };
  }

  /** Point in polygon face lookup */
  public faceLookup(pt: SolvedPoint2D): SolvedFaceCoordinates | null {
    const faces = (this.sgm && this.sgm.solvedFaces) || {};
    for (const face of Object.values(faces)) {
      if (this.isPointInPolygon(pt, face.vertices)) {
        return face;
      }
    }
    return null;
  }

  private isPointInPolygon(pt: SolvedPoint2D, vertices: readonly SolvedPoint2D[]): boolean {
    let inside = false;
    for (let i = 0, j = vertices.length - 1; i < vertices.length; j = i++) {
      const xi = vertices[i].x, yi = vertices[i].y;
      const xj = vertices[j].x, yj = vertices[j].y;

      const intersect = ((yi > pt.y) !== (yj > pt.y)) &&
        (pt.x < ((xj - xi) * (pt.y - yi)) / (yj - yi) + xi);
      if (intersect) inside = !inside;
    }
    return inside;
  }
}
