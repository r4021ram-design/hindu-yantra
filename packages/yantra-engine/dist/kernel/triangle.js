"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Polygon2D = exports.Triangle2D = void 0;
const point_1 = require("./point");
const line_1 = require("./line");
const circle_1 = require("./circle");
class Triangle2D {
    p1;
    p2;
    p3;
    constructor(p1, p2, p3) {
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
    }
    area() {
        return Math.abs((this.p1.x * (this.p2.y - this.p3.y) +
            this.p2.x * (this.p3.y - this.p1.y) +
            this.p3.x * (this.p1.y - this.p2.y)) /
            2);
    }
    segments() {
        return [
            new line_1.Segment2D(this.p1, this.p2),
            new line_1.Segment2D(this.p2, this.p3),
            new line_1.Segment2D(this.p3, this.p1)
        ];
    }
    circumcircle() {
        return circle_1.Circle2D.fromThreePoints(this.p1, this.p2, this.p3);
    }
    centroid() {
        return new point_1.Point2D((this.p1.x + this.p2.x + this.p3.x) / 3, (this.p1.y + this.p2.y + this.p3.y) / 3);
    }
    containsPoint(p) {
        const areaOrig = this.area();
        const area1 = new Triangle2D(p, this.p2, this.p3).area();
        const area2 = new Triangle2D(this.p1, p, this.p3).area();
        const area3 = new Triangle2D(this.p1, this.p2, p).area();
        return Math.abs(areaOrig - (area1 + area2 + area3)) <= 1e-9;
    }
}
exports.Triangle2D = Triangle2D;
class Polygon2D {
    vertices;
    constructor(vertices) {
        this.vertices = vertices;
        if (vertices.length < 3) {
            throw new Error('Polygon2D must have at least 3 vertices');
        }
    }
    area() {
        let area = 0;
        const n = this.vertices.length;
        for (let i = 0; i < n; i++) {
            const j = (i + 1) % n;
            area += this.vertices[i].x * this.vertices[j].y;
            area -= this.vertices[j].x * this.vertices[i].y;
        }
        return Math.abs(area / 2);
    }
    segments() {
        const segs = [];
        const n = this.vertices.length;
        for (let i = 0; i < n; i++) {
            segs.push(new line_1.Segment2D(this.vertices[i], this.vertices[(i + 1) % n]));
        }
        return segs;
    }
}
exports.Polygon2D = Polygon2D;
