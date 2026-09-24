/**
 * Sri Yantra Sacred Geometric Coordinates Engine
 * Maps every Avarana and constituent (Petals, Triangles, Gates, Bindu)
 * to its exact mathematical position on the 1000x1000 canonical canvas.
 */

export interface ConstituentCoord {
  id: string | number;
  x: number;
  y: number;
  angleDeg?: number;
  labelSide: 'top' | 'bottom' | 'left' | 'right';
  cardX: number;
  cardY: number;
}

/**
 * Compute the exact (x, y) canvas coordinates on the 1000x1000 canvas
 * for a given constituent within an Avarana.
 */
export function getConstituentCanvasCoords(
  avaranaIdx: number,
  constituentId: string | number,
  constituentIdx: number,
  totalConstituents: number = 1
): ConstituentCoord {
  const cx = 500;
  const cy = 500;

  let x = cx;
  let y = cy;
  let angleDeg = 0;
  let labelSide: 'top' | 'bottom' | 'left' | 'right' = 'top';

  switch (avaranaIdx) {
    case 9: {
      // 9: Bindu (Singularity) - Sri Lalita Maha Tripurasundari
      x = cx;
      y = cy;
      labelSide = 'top';
      break;
    }

    case 8: {
      // 8: Kamakhya / Mula Trikona (Central Inverted Triangle D5)
      // D5 Vertices:
      // South apex pointing down: (500, 560.62) -> Kameshvari
      // North-East vertex: (563.47, 486.99) -> Vajreshvari
      // North-West vertex: (436.53, 486.99) -> Bhagamalini
      if (constituentId === 1 || constituentIdx === 0) {
        x = 500;
        y = 560.62;
        labelSide = 'bottom';
      } else if (constituentId === 2 || constituentIdx === 1) {
        x = 563.47;
        y = 486.99;
        labelSide = 'right';
      } else {
        x = 436.53;
        y = 486.99;
        labelSide = 'left';
      }
      break;
    }

    case 7: {
      // 7: Ashtara (8 Inner Triangles / 8 Vagdevatas)
      // Radius r = 105 around center.
      // Symmetrical 8 directions starting North (-90 deg)
      const r = 105;
      angleDeg = -90 + constituentIdx * (360 / 8);
      const rad = (angleDeg * Math.PI) / 180;
      x = Math.round((cx + r * Math.cos(rad)) * 100) / 100;
      y = Math.round((cy + r * Math.sin(rad)) * 100) / 100;
      labelSide = y < 500 ? 'top' : 'bottom';
      break;
    }

    case 6: {
      // 6: Antardashara (10 Inner Middle Triangles / 10 Agnis)
      // Radius r = 158
      const r = 158;
      angleDeg = -90 + constituentIdx * (360 / 10);
      const rad = (angleDeg * Math.PI) / 180;
      x = Math.round((cx + r * Math.cos(rad)) * 100) / 100;
      y = Math.round((cy + r * Math.sin(rad)) * 100) / 100;
      labelSide = y < 500 ? 'top' : 'bottom';
      break;
    }

    case 5: {
      // 5: Bahirdashara (10 Outer Middle Triangles / 10 Pranas)
      // Radius r = 205, interleaved between Antardashara (+18 deg offset)
      const r = 205;
      angleDeg = -90 + constituentIdx * (360 / 10) + 18;
      const rad = (angleDeg * Math.PI) / 180;
      x = Math.round((cx + r * Math.cos(rad)) * 100) / 100;
      y = Math.round((cy + r * Math.sin(rad)) * 100) / 100;
      labelSide = y < 500 ? 'top' : 'bottom';
      break;
    }

    case 4: {
      // 4: Chaturdashara (14 Outer Triangles / 14 Nadis)
      // Radius r = 240 (apexes touch inner ring r=250)
      const r = 240;
      angleDeg = -90 + constituentIdx * (360 / 14);
      const rad = (angleDeg * Math.PI) / 180;
      x = Math.round((cx + r * Math.cos(rad)) * 100) / 100;
      y = Math.round((cy + r * Math.sin(rad)) * 100) / 100;
      labelSide = y < 500 ? 'top' : 'bottom';
      break;
    }

    case 3: {
      // 3: Ashtadala (8 Lotus Petals / 8 Ananga Shaktis)
      // Exact quadratic petal peak radius r = 320
      const r = 320;
      angleDeg = -90 + constituentIdx * (360 / 8);
      const rad = (angleDeg * Math.PI) / 180;
      x = Math.round((cx + r * Math.cos(rad)) * 100) / 100;
      y = Math.round((cy + r * Math.sin(rad)) * 100) / 100;
      labelSide = y < 500 ? 'top' : 'bottom';
      break;
    }

    case 2: {
      // 2: Shodashadala (16 Lotus Petals / 16 Kamakarshini Shaktis)
      // Exact quadratic petal peak radius r = 392
      const r = 392;
      angleDeg = -90 + constituentIdx * (360 / 16);
      const rad = (angleDeg * Math.PI) / 180;
      x = Math.round((cx + r * Math.cos(rad)) * 100) / 100;
      y = Math.round((cy + r * Math.sin(rad)) * 100) / 100;
      labelSide = y < 500 ? 'top' : 'bottom';
      break;
    }

    case 1:
    default: {
      // 1: Bhupura (10 Siddhis on outer line, 8 Matrikas on middle line)
      if (constituentIdx < 10) {
        // 10 Siddhis on outer quad perimeter (r ≈ 458)
        const r = 458;
        angleDeg = -90 + constituentIdx * (360 / 10);
        const rad = (angleDeg * Math.PI) / 180;
        x = Math.round((cx + r * Math.cos(rad)) * 100) / 100;
        y = Math.round((cy + r * Math.sin(rad)) * 100) / 100;
      } else {
        // 8 Matrikas on middle quad perimeter (r ≈ 425)
        const matrikaIdx = constituentIdx - 10;
        const r = 425;
        angleDeg = -90 + matrikaIdx * (360 / 8);
        const rad = (angleDeg * Math.PI) / 180;
        x = Math.round((cx + r * Math.cos(rad)) * 100) / 100;
        y = Math.round((cy + r * Math.sin(rad)) * 100) / 100;
      }
      labelSide = y < 500 ? 'top' : 'bottom';
      break;
    }
  }

  // Calculate safe card placement within 1000x1000 bounds
  const cardW = 220;
  const cardH = 68;

  let cardX = x - cardW / 2;
  if (cardX < 15) cardX = 15;
  if (cardX + cardW > 985) cardX = 985 - cardW;

  let cardY = y < 450 ? y + 24 : y - cardH - 24;
  if (cardY < 15) cardY = y + 24;
  if (cardY + cardH > 985) cardY = y - cardH - 24;

  return {
    id: constituentId,
    x,
    y,
    angleDeg,
    labelSide,
    cardX,
    cardY,
  };
}

/**
 * Retrieve all constituent coordinates for an entire Avarana
 */
export function getAllConstituentCoords(
  avaranaIdx: number,
  constituents: Array<{ id: string | number }>
): ConstituentCoord[] {
  return constituents.map((item, idx) =>
    getConstituentCanvasCoords(avaranaIdx, item.id, idx, constituents.length)
  );
}
