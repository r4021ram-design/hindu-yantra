import { Point2D } from './point';
import { Vector2D } from './vector';
import { Line2D } from './line';

export class AffineTransform2D {
  // 3x3 matrix representing 2D affine transformation:
  // | m00 m01 m02 |
  // | m10 m11 m12 |
  // |  0   0   1  |
  constructor(
    public readonly m00: number = 1,
    public readonly m01: number = 0,
    public readonly m02: number = 0,
    public readonly m10: number = 0,
    public readonly m11: number = 1,
    public readonly m12: number = 0
  ) {}

  public static identity(): AffineTransform2D {
    return new AffineTransform2D(1, 0, 0, 0, 1, 0);
  }

  public static translation(tx: number, ty: number): AffineTransform2D {
    return new AffineTransform2D(1, 0, tx, 0, 1, ty);
  }

  public static rotation(angleRad: number): AffineTransform2D {
    const cos = Math.cos(angleRad);
    const sin = Math.sin(angleRad);
    return new AffineTransform2D(cos, -sin, 0, sin, cos, 0);
  }

  public static scaling(sx: number, sy: number): AffineTransform2D {
    return new AffineTransform2D(sx, 0, 0, 0, sy, 0);
  }

  public static reflectionAcrossLine(line: Line2D): AffineTransform2D {
    // Reflect point (x, y) across Ax + By + C = 0 where A^2 + B^2 = 1
    const a = line.a;
    const b = line.b;
    const c = line.c;

    const m00 = 1 - 2 * a * a;
    const m01 = -2 * a * b;
    const m02 = -2 * a * c;
    const m10 = -2 * a * b;
    const m11 = 1 - 2 * b * b;
    const m12 = -2 * b * c;

    return new AffineTransform2D(m00, m01, m02, m10, m11, m12);
  }

  public transformPoint(p: Point2D): Point2D {
    const x = this.m00 * p.x + this.m01 * p.y + this.m02;
    const y = this.m10 * p.x + this.m11 * p.y + this.m12;
    return new Point2D(x, y);
  }

  public transformVector(v: Vector2D): Vector2D {
    const x = this.m00 * v.x + this.m01 * v.y;
    const y = this.m10 * v.x + this.m11 * v.y;
    return new Vector2D(x, y);
  }

  public multiply(other: AffineTransform2D): AffineTransform2D {
    const m00 = this.m00 * other.m00 + this.m01 * other.m10;
    const m01 = this.m00 * other.m01 + this.m01 * other.m11;
    const m02 = this.m00 * other.m02 + this.m01 * other.m12 + this.m02;

    const m10 = this.m10 * other.m00 + this.m11 * other.m10;
    const m11 = this.m10 * other.m01 + this.m11 * other.m11;
    const m12 = this.m10 * other.m02 + this.m11 * other.m12 + this.m12;

    return new AffineTransform2D(m00, m01, m02, m10, m11, m12);
  }
}
