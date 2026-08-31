import { Point2D } from './point';
import { Segment2D } from './line';
import { Circle2D } from './circle';

export class Triangle2D {
  constructor(
    public readonly p1: Point2D,
    public readonly p2: Point2D,
    public readonly p3: Point2D
  ) {}

  public area(): number {
    return Math.abs(
      (this.p1.x * (this.p2.y - this.p3.y) +
        this.p2.x * (this.p3.y - this.p1.y) +
        this.p3.x * (this.p1.y - this.p2.y)) /
        2
    );
  }

  public segments(): [Segment2D, Segment2D, Segment2D] {
    return [
      new Segment2D(this.p1, this.p2),
      new Segment2D(this.p2, this.p3),
      new Segment2D(this.p3, this.p1)
    ];
  }

  public circumcircle(): Circle2D | null {
    return Circle2D.fromThreePoints(this.p1, this.p2, this.p3);
  }

  public centroid(): Point2D {
    return new Point2D((this.p1.x + this.p2.x + this.p3.x) / 3, (this.p1.y + this.p2.y + this.p3.y) / 3);
  }

  public containsPoint(p: Point2D): boolean {
    const areaOrig = this.area();
    const area1 = new Triangle2D(p, this.p2, this.p3).area();
    const area2 = new Triangle2D(this.p1, p, this.p3).area();
    const area3 = new Triangle2D(this.p1, this.p2, p).area();

    return Math.abs(areaOrig - (area1 + area2 + area3)) <= 1e-9;
  }
}

export class Polygon2D {
  constructor(public readonly vertices: Point2D[]) {
    if (vertices.length < 3) {
      throw new Error('Polygon2D must have at least 3 vertices');
    }
  }

  public area(): number {
    let area = 0;
    const n = this.vertices.length;
    for (let i = 0; i < n; i++) {
      const j = (i + 1) % n;
      area += this.vertices[i].x * this.vertices[j].y;
      area -= this.vertices[j].x * this.vertices[i].y;
    }
    return Math.abs(area / 2);
  }

  public segments(): Segment2D[] {
    const segs: Segment2D[] = [];
    const n = this.vertices.length;
    for (let i = 0; i < n; i++) {
      segs.push(new Segment2D(this.vertices[i], this.vertices[(i + 1) % n]));
    }
    return segs;
  }
}
