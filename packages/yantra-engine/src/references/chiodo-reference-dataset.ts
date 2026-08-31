import { Point2D, Line2D } from '../kernel';
import { ApolloniusSolver } from '../solver/apollonius-solver';

export interface AnalyticalReferenceTriangle {
  id: string;
  name: string;
  orientation: 'up' | 'down';
  apex: Point2D;
  leftBase: Point2D;
  rightBase: Point2D;
  metadata: {
    paperSection: string;
    figureCitation: string;
    equationCitation: string;
    meaning: string;
  };
}

/**
 * Paper: Alessandro Chiodo (2021)
 * Section: 2.1 - 2.4
 * Figure: Figures 1 & 11
 * Meaning: Independent analytical reference dataset containing exact symbolic closed-form values
 * for Chiodo (2021) canonical geometry on reference circle C0 (center (0, 0.5), radius 0.5).
 */
export class ChiodoReferenceDataset {
  // Analytical Base Constants on C0 (y in [0, 1])
  public static readonly S = (2 + Math.sqrt(3)) / 4; // ~0.9330127018922193 (Eq 2.1.1)
  public static readonly R = (1 + Math.sqrt(5)) / 4; // ~0.8090169943749475 (Eq 2.2.1)
  public static readonly P = (3 - Math.sqrt(5)) / 4; // ~0.19098300562505255 (Eq 2.2.2)
  public static readonly Q = 0.5; // ~0.5000000000000000 (Center Line)

  public static getReferenceTriangles(): AnalyticalReferenceTriangle[] {
    const S = this.S;
    const R = this.R;
    const P = this.P;
    const Q = this.Q;

    const Y1 = S;
    const Y3 = R;
    const Y7 = P;
    const Y9 = 1.0 - R;
    const Y2 = 1.0 - P; // = R
    const Y6 = Q; // = 0.5

    const w1 = Math.sqrt(Math.max(0, Y1 * (1 - Y1)));
    const w3 = Math.sqrt(Math.max(0, Y3 * (1 - Y3)));
    const w7 = Math.sqrt(Math.max(0, Y7 * (1 - Y7)));
    const w9 = Math.sqrt(Math.max(0, Y9 * (1 - Y9)));

    // Line definitions for t3 and t7
    const line_t3_leftSide = Line2D.fromTwoPoints(new Point2D(-w3, Y3), Point2D.origin());
    const line_t3_rightSide = Line2D.fromTwoPoints(new Point2D(w3, Y3), Point2D.origin());
    const line_t7_leftSide = Line2D.fromTwoPoints(new Point2D(-w7, Y7), new Point2D(0, 1));
    const line_t7_rightSide = Line2D.fromTwoPoints(new Point2D(w7, Y7), new Point2D(0, 1));

    // Concurrency intersections for Y4, Y8, w4, w8, w2, w6
    const inter_t3_t7_left = line_t3_leftSide.intersectLine(line_t7_leftSide);
    const Y4 = inter_t3_t7_left ? inter_t3_t7_left.y : 0.5;
    const Y8 = 1.0 - Y4;

    const pt_w4 = line_t7_rightSide.intersectLine(Line2D.horizontal(Y4));
    const w4 = pt_w4 ? pt_w4.x : w7 * (0.5 / R);

    const pt_w8 = line_t3_rightSide.intersectLine(Line2D.horizontal(Y8));
    const w8 = pt_w8 ? pt_w8.x : w3 * (0.5 / R);

    const pt_w2 = line_t7_rightSide.intersectLine(Line2D.horizontal(Y2));
    const w2 = pt_w2 ? pt_w2.x : w7 * (P / R);

    const line_t8_rightSide = Line2D.fromTwoPoints(new Point2D(w8, Y8), new Point2D(0, Y2));
    const pt_w6 = line_t8_rightSide.intersectLine(Line2D.horizontal(Y6));
    const w6 = pt_w6 ? pt_w6.x : w8;

    // Apollonius CLP solution for t5 apex
    const apollonius = ApolloniusSolver.solveChiodoCLP({ P, Q, R, S });

    return [
      {
        id: 't1',
        name: 'Primary Triangle 1',
        orientation: 'down',
        apex: new Point2D(0, Y7),
        leftBase: new Point2D(-w1, Y1),
        rightBase: new Point2D(w1, Y1),
        metadata: {
          paperSection: '2.1',
          figureCitation: 'Figure 4 & 11',
          equationCitation: 'Eq 2.1.1',
          meaning: 'Outermost downward primary triangle with base at y = S'
        }
      },
      {
        id: 't2',
        name: 'Primary Triangle 2',
        orientation: 'down',
        apex: new Point2D(0, 1.0 - Y1),
        leftBase: new Point2D(-w2, Y2),
        rightBase: new Point2D(w2, Y2),
        metadata: {
          paperSection: '2.2',
          figureCitation: 'Figure 5 & 11',
          equationCitation: 'Eq 2.1.2',
          meaning: 'Outermost upward primary triangle with base at y = 1 - P'
        }
      },
      {
        id: 't3',
        name: 'Primary Triangle 3',
        orientation: 'down',
        apex: Point2D.origin(),
        leftBase: new Point2D(-w3, Y3),
        rightBase: new Point2D(w3, Y3),
        metadata: {
          paperSection: '2.2',
          figureCitation: 'Figure 5 & 11',
          equationCitation: 'Eq 2.2.1',
          meaning: 'Middle downward primary triangle with base at y = R'
        }
      },
      {
        id: 't4',
        name: 'Primary Triangle 4',
        orientation: 'down',
        apex: new Point2D(0, Y7),
        leftBase: new Point2D(-w4, Y4),
        rightBase: new Point2D(w4, Y4),
        metadata: {
          paperSection: '2.3',
          figureCitation: 'Figure 8 & 11',
          equationCitation: 'Eq 2.3.1',
          meaning: 'Middle upward primary triangle with base at y = Y4'
        }
      },
      {
        id: 't5',
        name: 'Primary Triangle 5',
        orientation: 'down',
        apex: new Point2D(0, apollonius.selectedTSolution),
        leftBase: new Point2D(-w6, Y6),
        rightBase: new Point2D(w6, Y6),
        metadata: {
          paperSection: '2.4',
          figureCitation: 'Figure 10 & 11',
          equationCitation: 'Eq 2.3.3 (Apollonius CLP)',
          meaning: 'Inner downward primary triangle with base at y = Q and apex at Apollonius CLP solution'
        }
      },
      {
        id: 't6',
        name: 'Primary Triangle 6',
        orientation: 'up',
        apex: new Point2D(0, Y2),
        leftBase: new Point2D(-w6, Y6),
        rightBase: new Point2D(w6, Y6),
        metadata: {
          paperSection: '2.4',
          figureCitation: 'Figure 10 & 11',
          equationCitation: 'Eq 2.3.4',
          meaning: 'Inner upward primary triangle sharing base y = Q with t5'
        }
      },
      {
        id: 't7',
        name: 'Primary Triangle 7',
        orientation: 'up',
        apex: new Point2D(0, 1.0),
        leftBase: new Point2D(-w7, Y7),
        rightBase: new Point2D(w7, Y7),
        metadata: {
          paperSection: '2.2',
          figureCitation: 'Figure 6 & 11',
          equationCitation: 'Eq 2.3.1',
          meaning: 'Innermost downward primary triangle with base y = P and apex at top circle point (0, 1)'
        }
      },
      {
        id: 't8',
        name: 'Primary Triangle 8',
        orientation: 'up',
        apex: new Point2D(0, Y2),
        leftBase: new Point2D(-w8, Y8),
        rightBase: new Point2D(w8, Y8),
        metadata: {
          paperSection: '2.3',
          figureCitation: 'Figure 9 & 11',
          equationCitation: 'Eq 2.3.2',
          meaning: 'Innermost upward primary triangle with base y = Y8'
        }
      },
      {
        id: 't9',
        name: 'Primary Triangle 9',
        orientation: 'down',
        apex: new Point2D(0, Y3),
        leftBase: new Point2D(-w9, Y9),
        rightBase: new Point2D(w9, Y9),
        metadata: {
          paperSection: '2.4',
          figureCitation: 'Figure 10 & 11',
          equationCitation: 'Eq 2.4.1',
          meaning: 'Central downward primary triangle enclosing the Bindu'
        }
      }
    ];
  }
}
