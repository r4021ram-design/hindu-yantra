import { Point2D } from './point';

export class Vector2D {
  public static readonly EPSILON = 1e-12;

  constructor(
    public readonly x: number,
    public readonly y: number
  ) {}

  public static fromPoints(from: Point2D, to: Point2D): Vector2D {
    return new Vector2D(to.x - from.x, to.y - from.y);
  }

  public magnitude(): number {
    return Math.hypot(this.x, this.y);
  }

  public squaredMagnitude(): number {
    return this.x * this.x + this.y * this.y;
  }

  public normalize(): Vector2D {
    const mag = this.magnitude();
    if (mag <= Vector2D.EPSILON) {
      return new Vector2D(0, 0);
    }
    return new Vector2D(this.x / mag, this.y / mag);
  }

  public perpendicular(): Vector2D {
    return new Vector2D(-this.y, this.x);
  }

  public dot(other: Vector2D): number {
    return this.x * other.x + this.y * other.y;
  }

  public cross(other: Vector2D): number {
    return this.x * other.y - this.y * other.x;
  }

  public add(other: Vector2D): Vector2D {
    return new Vector2D(this.x + other.x, this.y + other.y);
  }

  public subtract(other: Vector2D): Vector2D {
    return new Vector2D(this.x - other.x, this.y - other.y);
  }

  public scale(factor: number): Vector2D {
    return new Vector2D(this.x * factor, this.y * factor);
  }

  public angle(): number {
    return Math.atan2(this.y, this.x);
  }

  public angleTo(other: Vector2D): number {
    const dot = this.dot(other);
    const det = this.cross(other);
    return Math.atan2(det, dot);
  }
}
