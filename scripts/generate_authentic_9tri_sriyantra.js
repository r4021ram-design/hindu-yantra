const fs = require('fs');
const path = require('path');

// 1. Primary 9 Interlocking Triangles Coordinates (Soundarya Lahari / Adi Shankaracharya)
// Normalized on 1000x1000 with center at (500, 500)
const shaktiTriangles = [
  // D1: Downward Primary 1
  { id: 'D1', d: 'M 210.97 419.62 L 789.03 419.62 L 500 800 Z', name: 'Shakti 1 (D1)' },
  // D2: Downward Primary 2
  { id: 'D2', d: 'M 292.95 359.37 L 707.05 359.37 L 500 710.11 Z', name: 'Shakti 2 (D2)' },
  // D3: Downward Primary 3
  { id: 'D3', d: 'M 321.46 284.32 L 678.54 284.32 L 500 531.98 Z', name: 'Shakti 3 (D3)' },
  // D4: Downward Primary 4
  { id: 'D4', d: 'M 399.05 452.92 L 600.95 452.92 L 500 643.77 Z', name: 'Shakti 4 (D4)' },
  // D5: Central Kama-Kala Mula Trikona (Innermost downward triangle)
  { id: 'D5', d: 'M 423.84 484.39 L 576.16 484.39 L 500 572.74 Z', name: 'Shakti 5 (Central Trikona)' },
];

const shivaTriangles = [
  // U1: Upward Primary 1
  { id: 'U1', d: 'M 208.95 572.74 L 791.05 572.74 L 500 200 Z', name: 'Shiva 1 (U1)' },
  // U2: Upward Primary 2
  { id: 'U2', d: 'M 284.79 643.77 L 715.21 643.77 L 500 284.32 Z', name: 'Shiva 2 (U2)' },
  // U3: Upward Primary 3
  { id: 'U3', d: 'M 346.15 710.11 L 653.85 710.11 L 500 419.62 Z', name: 'Shiva 3 (U3)' },
  // U4: Upward Primary 4
  { id: 'U4', d: 'M 394.85 531.98 L 605.15 531.98 L 500 359.37 Z', name: 'Shiva 4 (U4)' },
];

// Pristine Bhupura with 3 stepped concentric squares and 4 cardinal T-portals
const bhupuraD = 'M 60 60 L 420.8 60 L 420.8 24.8 L 579.2 24.8 L 579.2 60 L 940 60 L 940 420.8 L 975.2 420.8 L 975.2 579.2 L 940 579.2 L 940 940 L 579.2 940 L 579.2 975.2 L 420.8 975.2 L 420.8 940 L 60 940 L 60 579.2 L 24.8 579.2 L 24.8 420.8 L 60 420.8 Z M 79.8 79.8 L 440.6 79.8 L 440.6 44.6 L 559.4 44.6 L 559.4 79.8 L 920.2 79.8 L 920.2 440.6 L 955.4 440.6 L 955.4 559.4 L 920.2 559.4 L 920.2 920.2 L 559.4 920.2 L 559.4 955.4 L 440.6 955.4 L 440.6 920.2 L 79.8 920.2 L 79.8 559.4 L 44.6 559.4 L 44.6 440.6 L 79.8 440.6 Z M 99.6 99.6 L 460.4 99.6 L 460.4 64.4 L 539.6 64.4 L 539.6 99.6 L 900.4 99.6 L 900.4 460.4 L 935.6 460.4 L 935.6 539.6 L 900.4 539.6 L 900.4 900.4 L 539.6 900.4 L 539.6 935.6 L 460.4 935.6 L 460.4 900.4 L 99.6 900.4 L 99.6 539.6 L 64.4 539.6 L 64.4 460.4 L 99.6 460.4 Z';

// Clean lotus petals generator
function polarToXy(r, thetaRad) {
  return [
    +(500 + r * Math.cos(thetaRad)).toFixed(2),
    +(500 + r * Math.sin(thetaRad)).toFixed(2)
  ];
}

function generateLotusD(petalCount, rInner, rOuter) {
  let d = '';
  const dAngle = (2 * Math.PI) / petalCount;
  for (let i = 0; i < petalCount; i++) {
    const aMid = i * dAngle - Math.PI / 2;
    const aStart = aMid - dAngle / 2;
    const aEnd = aMid + dAngle / 2;

    const [startX, startY] = polarToXy(rInner, aStart);
    const [tipX, tipY] = polarToXy(rOuter, aMid);
    const [endX, endY] = polarToXy(rInner, aEnd);

    const [cp1X, cp1Y] = polarToXy(rInner + (rOuter - rInner) * 0.72, aMid - dAngle * 0.28);
    const [cp2X, cp2Y] = polarToXy(rInner + (rOuter - rInner) * 0.72, aMid + dAngle * 0.28);

    d += `M ${startX} ${startY} Q ${cp1X} ${cp1Y}, ${tipX} ${tipY} Q ${cp2X} ${cp2Y}, ${endX} ${endY} `;
  }
  return d;
}

const shodashaD = generateLotusD(16, 286, 356);
const ashtadalaD = generateLotusD(8, 220, 286);

// Build 2D Master Sri Yantra SVG with true 9 Interlocking Triangles
const masterSriYantraSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%">
  <defs>
    <linearGradient id="sriGoldMain" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFE066" />
      <stop offset="35%" stop-color="#D4AF37" />
      <stop offset="70%" stop-color="#B8860B" />
      <stop offset="100%" stop-color="#8B6508" />
    </linearGradient>
    <linearGradient id="sriGoldAccent" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFF2A3" />
      <stop offset="50%" stop-color="#E5C158" />
      <stop offset="100%" stop-color="#C59B27" />
    </linearGradient>
    <radialGradient id="binduRadiance" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="30%" stop-color="#FFE875" />
      <stop offset="70%" stop-color="#FFD700" />
      <stop offset="100%" stop-color="#D4AF37" />
    </radialGradient>
  </defs>

  <!-- 1. BHUPURA (EARTH RAMPART & 4 PORTALS) -->
  <g id="avarana_1_bhupura" stroke="url(#sriGoldMain)" stroke-width="2.2" fill="none" stroke-linejoin="round">
    <path id="bhupura_outer_quad" d="${bhupuraD}" />
  </g>

  <!-- 2. OUTER CONCENTRIC CIRCLE RINGS -->
  <g id="transition_outer_circles" stroke="url(#sriGoldAccent)" stroke-width="1.8" fill="none">
    <circle cx="500" cy="500" r="356" />
    <circle cx="500" cy="500" r="348" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.6" />
  </g>

  <!-- 3. SHODASHA DALA (16 LOTUS PETALS) -->
  <g id="avarana_2_shodashadala" stroke="url(#sriGoldMain)" stroke-width="2.2" fill="rgba(212,175,55,0.08)" stroke-linejoin="round">
    <path id="lotus_16_petals" d="${shodashaD}" />
  </g>

  <!-- 4. MIDDLE CONCENTRIC CIRCLE RINGS -->
  <g id="transition_middle_circles" stroke="url(#sriGoldAccent)" stroke-width="1.8" fill="none">
    <circle cx="500" cy="500" r="286" />
    <circle cx="500" cy="500" r="278" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.6" />
  </g>

  <!-- 5. ASHTA DALA (8 LOTUS PETALS) -->
  <g id="avarana_3_ashtadala" stroke="url(#sriGoldMain)" stroke-width="2.2" fill="rgba(217,119,6,0.12)" stroke-linejoin="round">
    <path id="lotus_8_petals" d="${ashtadalaD}" />
  </g>

  <!-- 6. INNER CONCENTRIC CIRCLE RINGS -->
  <g id="transition_inner_circles" stroke="url(#sriGoldAccent)" stroke-width="2" fill="none">
    <circle cx="500" cy="500" r="220" />
    <circle cx="500" cy="500" r="214" stroke-width="1.2" stroke-dasharray="4 2" opacity="0.7" />
  </g>

  <!-- 7. THE SACRED 9 INTERLOCKING SHIVA-SHAKTI PRIMARY TRIANGLES (NAVAYONI) -->
  <g id="navayoni_interlocking_triangles" stroke="url(#sriGoldMain)" stroke-width="2.2" stroke-linejoin="miter">
    <!-- 4 Upward Shiva Triangles (Purusha) -->
    <path id="primary_tri_U1" d="${shivaTriangles[0].d}" fill="rgba(212,175,55,0.07)" />
    <path id="primary_tri_U2" d="${shivaTriangles[1].d}" fill="rgba(212,175,55,0.07)" />
    <path id="primary_tri_U3" d="${shivaTriangles[2].d}" fill="rgba(212,175,55,0.07)" />
    <path id="primary_tri_U4" d="${shivaTriangles[3].d}" fill="rgba(212,175,55,0.07)" />

    <!-- 5 Downward Shakti Triangles (Prakriti) -->
    <path id="primary_tri_D1" d="${shaktiTriangles[0].d}" fill="rgba(245,158,11,0.09)" />
    <path id="primary_tri_D2" d="${shaktiTriangles[1].d}" fill="rgba(245,158,11,0.09)" />
    <path id="primary_tri_D3" d="${shaktiTriangles[2].d}" fill="rgba(245,158,11,0.09)" />
    <path id="primary_tri_D4" d="${shaktiTriangles[3].d}" fill="rgba(245,158,11,0.09)" />
    
    <!-- Central Innermost Downward Triangle (Kamakala Mula Trikona) -->
    <path id="primary_tri_D5_central" d="${shaktiTriangles[4].d}" fill="rgba(255,215,0,0.32)" stroke="#FFE066" stroke-width="2.6" />
  </g>

  <!-- 8. CENTRAL BINDU (MAHABINDU SINGULARITY) -->
  <g id="avarana_9_bindu">
    <circle cx="500" cy="500" r="22" fill="rgba(255,215,0,0.15)" stroke="#FFE066" stroke-width="1.2" stroke-dasharray="3 2" />
    <circle cx="500" cy="500" r="13" fill="none" stroke="#FFD700" stroke-width="1.8" />
    <circle cx="500" cy="500" r="7" fill="url(#binduRadiance)" stroke="#FFFFFF" stroke-width="1.6" />
  </g>
</svg>
`;

const yantraDir = path.join(__dirname, '../public/yantras');
fs.writeFileSync(path.join(yantraDir, 'sri_yantra.svg'), masterSriYantraSvg, 'utf8');
fs.writeFileSync(path.join(yantraDir, 'SriYantra.svg'), masterSriYantraSvg, 'utf8');
fs.writeFileSync(path.join(yantraDir, 'Shriyantra.svg'), masterSriYantraSvg, 'utf8');
console.log('Successfully written authentic 9-Interlocking Triangles Sri Yantra to public/yantras SVGs!');
