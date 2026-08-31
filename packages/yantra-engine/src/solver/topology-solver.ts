import { SolvedPoint2D } from './types';

export class TopologySolver {
  /**
   * Calculates signed area to determine winding order: CCW (> 0) vs CW (< 0)
   */
  public static getWindingOrder(vertices: readonly SolvedPoint2D[]): 'CCW' | 'CW' {
    if (vertices.length < 3) return 'CCW';

    let signedArea = 0;
    const n = vertices.length;
    for (let i = 0; i < n; i++) {
      const j = (i + 1) % n;
      signedArea += vertices[i].x * vertices[j].y;
      signedArea -= vertices[j].x * vertices[i].y;
    }

    return signedArea >= 0 ? 'CCW' : 'CW';
  }

  /**
   * Enforces Counter-Clockwise (CCW) winding order on a vertex array
   */
  public static enforceCCW(vertices: readonly SolvedPoint2D[]): SolvedPoint2D[] {
    const winding = this.getWindingOrder(vertices);
    if (winding === 'CW') {
      return [...vertices].reverse();
    }
    return [...vertices];
  }
}
