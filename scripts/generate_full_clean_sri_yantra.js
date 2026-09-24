const fs = require('fs');
const path = require('path');

const cx = 500;
const cy = 500;

function polarToXy(r, thetaRad) {
  return [
    +(cx + r * Math.cos(thetaRad)).toFixed(2),
    +(cy + r * Math.sin(thetaRad)).toFixed(2)
  ];
}

function generateLotusPath(petalCount, rInner, rOuter) {
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

function generateStarCircuit(count, rApex, rBase, angleOffset = 0, fill = 'rgba(245,158,11,0.22)', idPrefix = 'tri') {
  const dAngle = (2 * Math.PI) / count;
  let polys = '';
  for (let i = 0; i < count; i++) {
    const aMid = angleOffset - Math.PI / 2 + i * dAngle;
    const aL = aMid - dAngle / 2;
    const aR = aMid + dAngle / 2;

    const [ax, ay] = polarToXy(rApex, aMid);
    const [lx, ly] = polarToXy(rBase, aL);
    const [rx, ry] = polarToXy(rBase, aR);

    polys += `    <polygon id="${idPrefix}_${i}" points="${ax},${ay} ${rx},${ry} ${lx},${ly}" fill="${fill}" stroke="url(#sriGoldMain)" stroke-width="1.8" stroke-linejoin="round" />\n`;
  }
  return polys;
}

const shodashaPath = generateLotusPath(16, 286, 356);
const ashtadalaPath = generateLotusPath(8, 220, 286);

const fullSvg = `<?xml version="1.0" encoding="UTF-8"?>
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
  <g id="avarana_1_bhupura" stroke="url(#sriGoldMain)" stroke-width="2.4" fill="none" stroke-linejoin="round">
    <path id="bhupura_outer_quad" d="M 60 60 L 420.8 60 L 420.8 24.8 L 579.2 24.8 L 579.2 60 L 940 60 L 940 420.8 L 975.2 420.8 L 975.2 579.2 L 940 579.2 L 940 940 L 579.2 940 L 579.2 975.2 L 420.8 975.2 L 420.8 940 L 60 940 L 60 579.2 L 24.8 579.2 L 24.8 420.8 L 60 420.8 Z M 79.8 79.8 L 440.6 79.8 L 440.6 44.6 L 559.4 44.6 L 559.4 79.8 L 920.2 79.8 L 920.2 440.6 L 955.4 440.6 L 955.4 559.4 L 920.2 559.4 L 920.2 920.2 L 559.4 920.2 L 559.4 955.4 L 440.6 955.4 L 440.6 920.2 L 79.8 920.2 L 79.8 559.4 L 44.6 559.4 L 44.6 440.6 L 79.8 440.6 Z M 99.6 99.6 L 460.4 99.6 L 460.4 64.4 L 539.6 64.4 L 539.6 99.6 L 900.4 99.6 L 900.4 460.4 L 935.6 460.4 L 935.6 539.6 L 900.4 539.6 L 900.4 900.4 L 539.6 900.4 L 539.6 935.6 L 460.4 935.6 L 460.4 900.4 L 99.6 900.4 L 99.6 539.6 L 64.4 539.6 L 64.4 460.4 L 99.6 460.4 Z" />
  </g>

  <!-- 2. OUTER CONCENTRIC CIRCLE RINGS -->
  <g id="transition_outer_circles" stroke="url(#sriGoldAccent)" stroke-width="1.8" fill="none">
    <circle cx="500" cy="500" r="356" />
    <circle cx="500" cy="500" r="348" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.6" />
  </g>

  <!-- 3. SHODASHA DALA (16 LOTUS PETALS) -->
  <g id="avarana_2_shodashadala" stroke="url(#sriGoldMain)" stroke-width="2.2" fill="rgba(212,175,55,0.08)" stroke-linejoin="round">
    <path id="lotus_16_petals" d="${shodashaPath}" />
  </g>

  <!-- 4. MIDDLE CONCENTRIC CIRCLE RINGS -->
  <g id="transition_middle_circles" stroke="url(#sriGoldAccent)" stroke-width="1.8" fill="none">
    <circle cx="500" cy="500" r="286" />
    <circle cx="500" cy="500" r="278" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.6" />
  </g>

  <!-- 5. ASHTA DALA (8 LOTUS PETALS) -->
  <g id="avarana_3_ashtadala" stroke="url(#sriGoldMain)" stroke-width="2.4" fill="rgba(217,119,6,0.12)" stroke-linejoin="round">
    <path id="lotus_8_petals" d="${ashtadalaPath}" />
  </g>

  <!-- 6. INNER CONCENTRIC CIRCLE RINGS -->
  <g id="transition_inner_circles" stroke="url(#sriGoldAccent)" stroke-width="2" fill="none">
    <circle cx="500" cy="500" r="220" />
    <circle cx="500" cy="500" r="214" stroke-width="1.2" stroke-dasharray="4 2" opacity="0.7" />
  </g>

  <!-- 7. CHATURDASHARAM (14 OUTER TRIANGLES) -->
  <g id="avarana_4_chaturdasharam">
${generateStarCircuit(14, 218, 160, 0, 'rgba(245,158,11,0.22)', 'face_chaturdasharam_tri')}  </g>

  <!-- 8. BAHIR DASHARAM (10 OUTER-MIDDLE TRIANGLES) -->
  <g id="avarana_5_bahir_dasharam">
${generateStarCircuit(10, 160, 116, 0, 'rgba(217,119,6,0.26)', 'face_bahir_dasharam_tri')}  </g>

  <!-- 9. ANTAR DASHARAM (10 INNER-MIDDLE TRIANGLES) -->
  <g id="avarana_6_antar_dasharam">
${generateStarCircuit(10, 116, 78, Math.PI / 10, 'rgba(245,158,11,0.28)', 'face_antar_dasharam_tri')}  </g>

  <!-- 10. ASHTARAGON (8 INNERMOST TRIANGLES) -->
  <g id="avarana_7_ashtaragon">
${generateStarCircuit(8, 78, 44, 0, 'rgba(217,119,6,0.32)', 'face_ashtaragon_tri')}  </g>

  <!-- 11. CENTRAL TRIANGLE (MULA KAMAKALA DOWNWARD TRIANGLE) -->
  <g id="avarana_8_central_trikona">
    <polygon id="face_central_kama_kala_trikona" points="462,478 538,478 500,544" fill="rgba(255,215,0,0.38)" stroke="#FFE066" stroke-width="2.6" stroke-linejoin="round" />
  </g>

  <!-- 12. BINDU (CENTRAL SINGULARITY) -->
  <g id="avarana_9_bindu">
    <circle cx="500" cy="500" r="24" fill="rgba(255,215,0,0.15)" stroke="#FFE066" stroke-width="1.4" stroke-dasharray="3 2" />
    <circle cx="500" cy="500" r="14" fill="none" stroke="#FFD700" stroke-width="1.8" />
    <circle cx="500" cy="500" r="7.5" fill="url(#binduRadiance)" stroke="#FFFFFF" stroke-width="1.6" />
  </g>
</svg>
`;

const dir = path.join(__dirname, '../public/yantras');
fs.writeFileSync(path.join(dir, 'sri_yantra.svg'), fullSvg, 'utf8');
fs.writeFileSync(path.join(dir, 'SriYantra.svg'), fullSvg, 'utf8');
fs.writeFileSync(path.join(dir, 'Shriyantra.svg'), fullSvg, 'utf8');
console.log('Successfully updated all 3 Sri Yantra SVG files in public/yantras!');
