import { Point2D } from './point';
import { Vector2D } from './vector';

export class Line2D {
  public static readonly EPSILON = 1e-12;

  // Implicit form: Ax + By + C = 0
  public readonly a: number;
  public readonly b: number;
  public readonly c: number;

  constructor(a: number, b: number, c: number) {
    const norm = Math.hypot(a, b);
    if (norm <= Line2D.EPSILON) {
      throw new Error('Line2D degenerate coefficients (A and B cannot both be 0)');
    }
    this.a = a / norm;
    this.b = b / norm;
    this.c = c / norm;
  }

  public static fromTwoPoints(p1: Point2D, p2: Point2D): Line2D {
    const a = p2.y - p1.y;
    const b = p1.x - p2.x;
    const c = p2.x * p1.y - p1.x * p2.y;
    return new Line2D(a, b, c);
  }

  public static fromPointAndVector(p: Point2D, v: Vector2D): Line2D {
    const a = -v.y;
    const b = v.x;
    const c = v.y * p.x - v.x * p.y;
    return new Line2D(a, b, c);
  }

  public static horizontal(y: number): Line2D {
    return new Line2D(0, 1, -y);
  }

  public static vertical(x: number): Line2D {
    return new Line2D(1, 0, -x);
  }

  public distanceToPoint(p: Point2D): number {
    return Math.abs(this.a * p.x + this.b * p.y + this.c);
  }

  public signedDistanceToPoint(p: Point2D): number {
    return this.a * p.x + this.b * p.y + this.c;
  }

  public projectPoint(p: Point2D): Point2D {
    const d = this.signedDistanceToPoint(p);
    return new Point2D(p.x - this.a * d, p.y - this.b * d);
  }

  public reflectPoint(p: Point2D): Point2D {
    const d = this.signedDistanceToPoint(p);
    return new Point2D(p.x - 2 * this.a * d, p.y - 2 * this.b * d);
  }

  public intersectLine(other: Line2D): Point2D | null {
    const det = this.a * other.b - other.a * this.b;
    if (Math.abs(det) <= Line2D.EPSILON) {
      return null; // Parallel or coincident
    }
    const x = (this.b * other.c - other.b * this.c) / det;
    const y = (other.a * this.c - this.a * other.c) / det;
    return new Point2D(x, y);
  }

  public perpendicularThrough(p: Point2D): Line2D {
    return new Line2D(-this.b, this.a, this.b * p.x - this.a * p.y);
  }

  public parallelThrough(p: Point2D): Line2D {
    return new Line2D(this.a, this.b, -(this.a * p.x + this.b * p.y));
  }
}

export class Segment2D {
  constructor(
    public readonly p1: Point2D,
    public readonly p2: Point2D
  ) {}

  public length(): number {
    return this.p1.distanceTo(this.p2);
  }

  public midpoint(): Point2D {
    return this.p1.lerp(this.p2, 0.5);
  }

  public toLine(): Line2D {
    return Line2D.fromTwoPoints(this.p1, this.p2);
  }

  public perpendicularBisector(): Line2D {
    const mid = this.midpoint();
    const line = this.toLine();
    return line.perpendicularThrough(mid);
  }

  public intersectSegment(other: Segment2D): Point2D | null {
    const line1 = this.toLine();
    const line2 = other.toLine();
    const pt = line1.intersectLine(line2);
    if (!pt) return null;

    if (this.containsPoint(pt) && other.containsPoint(pt)) {
      return pt;
    }
    return null;
  }

  public containsPoint(p: Point2D, eps: number = 1e-9): boolean {
    const lineDist = this.toLine().distanceToPoint(p);
    if (lineDist > eps) return false;

    const minX = Math.min(this.p1.x, this.p2.x) - eps;
    const maxX = Math.max(this.p1.x, this.p2.x) + eps;
    const minY = Math.min(this.p1.y, this.p2.y) - eps;
    const maxY = Math.max(this.p1.y, this.p2.y) + eps;

    return p.x >= minX && p.x <= maxX && p.y >= minY && p.y <= maxY;
  }
}
