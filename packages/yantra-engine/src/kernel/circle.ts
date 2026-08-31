import { Point2D } from './point';
import { Line2D } from './line';

export class Circle2D {
  public static readonly EPSILON = 1e-12;

  constructor(
    public readonly center: Point2D,
    public readonly radius: number
  ) {
    if (radius < 0) {
      throw new Error('Circle2D radius cannot be negative');
    }
  }

  public static unitAtOrigin(): Circle2D {
    return new Circle2D(Point2D.origin(), 1.0);
  }

  public static fromThreePoints(p1: Point2D, p2: Point2D, p3: Point2D): Circle2D | null {
    const l1 = Line2D.fromTwoPoints(p1, p2).perpendicularThrough(p1.lerp(p2, 0.5));
    const l2 = Line2D.fromTwoPoints(p2, p3).perpendicularThrough(p2.lerp(p3, 0.5));
    const center = l1.intersectLine(l2);
    if (!center) return null;
    const radius = center.distanceTo(p1);
    return new Circle2D(center, radius);
  }

  public containsPoint(p: Point2D, eps: number = Circle2D.EPSILON): boolean {
    return Math.abs(this.center.distanceTo(p) - this.radius) <= eps;
  }

  public intersectLine(line: Line2D): Point2D[] {
    const d = line.signedDistanceToPoint(this.center);
    const r = this.radius;

    if (Math.abs(d) > r + Circle2D.EPSILON) {
      return []; // No intersection
    }

    const proj = line.projectPoint(this.center);
    if (Math.abs(Math.abs(d) - r) <= Circle2D.EPSILON) {
      return [proj]; // Tangent
    }

    const h = Math.sqrt(Math.max(0, r * r - d * d));
    const dirX = -line.b;
    const dirY = line.a;

    const p1 = new Point2D(proj.x + dirX * h, proj.y + dirY * h);
    const p2 = new Point2D(proj.x - dirX * h, proj.y - dirY * h);
    return [p1, p2];
  }

  public intersectCircle(other: Circle2D): Point2D[] {
    const d = this.center.distanceTo(other.center);
    const r1 = this.radius;
    const r2 = other.radius;

    if (d > r1 + r2 + Circle2D.EPSILON || d < Math.abs(r1 - r2) - Circle2D.EPSILON || d <= Circle2D.EPSILON) {
      return []; // Separate, nested, or concentric
    }

    const a = (r1 * r1 - r2 * r2 + d * d) / (2 * d);
    const h = Math.sqrt(Math.max(0, r1 * r1 - a * a));

    const p2X = this.center.x + (a * (other.center.x - this.center.x)) / d;
    const p2Y = this.center.y + (a * (other.center.y - this.center.y)) / d;

    if (Math.abs(h) <= Circle2D.EPSILON) {
      return [new Point2D(p2X, p2Y)];
    }

    const offX = (-h * (other.center.y - this.center.y)) / d;
    const offY = (h * (other.center.x - this.center.x)) / d;

    return [
      new Point2D(p2X + offX, p2Y + offY),
      new Point2D(p2X - offX, p2Y - offY)
    ];
  }
}
