export class Point2D {
  public static readonly EPSILON = 1e-12;

  constructor(
    public readonly x: number,
    public readonly y: number
  ) {}

  public static origin(): Point2D {
    return new Point2D(0, 0);
  }

  public distanceTo(other: Point2D): number {
    const dx = this.x - other.x;
    const dy = this.y - other.y;
    return Math.hypot(dx, dy);
  }

  public squaredDistanceTo(other: Point2D): number {
    const dx = this.x - other.x;
    const dy = this.y - other.y;
    return dx * dx + dy * dy;
  }

  public equals(other: Point2D, eps: number = Point2D.EPSILON): boolean {
    return Math.abs(this.x - other.x) <= eps && Math.abs(this.y - other.y) <= eps;
  }

  public add(other: Point2D): Point2D {
    return new Point2D(this.x + other.x, this.y + other.y);
  }

  public subtract(other: Point2D): Point2D {
    return new Point2D(this.x - other.x, this.y - other.y);
  }

  public scale(factor: number): Point2D {
    return new Point2D(this.x * factor, this.y * factor);
  }

  public lerp(other: Point2D, t: number): Point2D {
    return new Point2D(this.x + (other.x - this.x) * t, this.y + (other.y - this.y) * t);
  }

  public dot(other: Point2D): number {
    return this.x * other.x + this.y * other.y;
  }

  public cross(other: Point2D): number {
    return this.x * other.y - this.y * other.x;
  }

  public toObject(): { x: number; y: number } {
    return { x: this.x, y: this.y };
  }
}
