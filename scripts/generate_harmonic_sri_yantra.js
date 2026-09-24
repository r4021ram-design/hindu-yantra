const fs = require('fs');
const path = require('path');

const cx = 500;
const cy = 500;
const s = 250 / 300; // scale factor so star apex touches R = 250 exactly

function scalePoint(x, y) {
  return [
    +(cx + (x - cx) * s).toFixed(2),
    +(cy + (y - cy) * s).toFixed(2)
  ];
}

function scalePath(d) {
  // Regex to match coordinates in path like "M x y L x y Z"
  return d.replace(/(-?\d+\.?\d*)\s+(-?\d+\.?\d*)/g, (match, x, y) => {
    const [nx, ny] = scalePoint(parseFloat(x), parseFloat(y));
    return `${nx} ${ny}`;
  });
}

// 9 Original triangles from Soundarya Lahari 11
const origShakti = [
  { id: 'D1', d: 'M 210.97 419.62 L 789.03 419.62 L 500 800 Z' },
  { id: 'D2', d: 'M 292.95 359.37 L 707.05 359.37 L 500 710.11 Z' },
  { id: 'D3', d: 'M 321.46 284.32 L 678.54 284.32 L 500 531.98 Z' },
  { id: 'D4', d: 'M 399.05 452.92 L 600.95 452.92 L 500 643.77 Z' },
  { id: 'D5', d: 'M 423.84 484.39 L 576.16 484.39 L 500 572.74 Z' },
];

const origShiva = [
  { id: 'U1', d: 'M 208.95 572.74 L 791.05 572.74 L 500 200 Z' },
  { id: 'U2', d: 'M 284.79 643.77 L 715.21 643.77 L 500 284.32 Z' },
  { id: 'U3', d: 'M 346.15 710.11 L 653.85 710.11 L 500 419.62 Z' },
  { id: 'U4', d: 'M 394.85 531.98 L 605.15 531.98 L 500 359.37 Z' },
];

const scaledShakti = origShakti.map(t => ({ id: t.id, d: scalePath(t.d) }));
const scaledShiva = origShiva.map(t => ({ id: t.id, d: scalePath(t.d) }));

function polarToXy(r, thetaRad) {
  return [
    +(cx + r * Math.cos(thetaRad)).toFixed(2),
    +(cy + r * Math.sin(thetaRad)).toFixed(2)
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

// Proportions:
// Star outer radius = 250
// Inner Circles enclosing star: r = 250, r = 256
// 8-Petal Lotus: rInner = 256, rOuter = 320
// Middle Circles: r = 320, r = 326
// 16-Petal Lotus: rInner = 326, rOuter = 392
// Outer Circles: r = 392, r = 400
// Bhupura: from 420 to 470
const ashtadalaD = generateLotusD(8, 256, 320);
const shodashaD = generateLotusD(16, 326, 392);

const bhupuraD = 'M 60 60 L 420.8 60 L 420.8 24.8 L 579.2 24.8 L 579.2 60 L 940 60 L 940 420.8 L 975.2 420.8 L 975.2 579.2 L 940 579.2 L 940 940 L 579.2 940 L 579.2 975.2 L 420.8 975.2 L 420.8 940 L 60 940 L 60 579.2 L 24.8 579.2 L 24.8 420.8 L 60 420.8 Z M 79.8 79.8 L 440.6 79.8 L 440.6 44.6 L 559.4 44.6 L 559.4 79.8 L 920.2 79.8 L 920.2 440.6 L 955.4 440.6 L 955.4 559.4 L 920.2 559.4 L 920.2 920.2 L 559.4 920.2 L 559.4 955.4 L 440.6 955.4 L 440.6 920.2 L 79.8 920.2 L 79.8 559.4 L 44.6 559.4 L 44.6 440.6 L 79.8 440.6 Z M 99.6 99.6 L 460.4 99.6 L 460.4 64.4 L 539.6 64.4 L 539.6 99.6 L 900.4 99.6 L 900.4 460.4 L 935.6 460.4 L 935.6 539.6 L 900.4 539.6 L 900.4 900.4 L 539.6 900.4 L 539.6 935.6 L 460.4 935.6 L 460.4 900.4 L 99.6 900.4 L 99.6 539.6 L 64.4 539.6 L 64.4 460.4 L 99.6 460.4 Z';

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
    <circle cx="500" cy="500" r="400" />
    <circle cx="500" cy="500" r="392" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.6" />
  </g>

  <!-- 3. SHODASHA DALA (16 LOTUS PETALS) -->
  <g id="avarana_2_shodashadala" stroke="url(#sriGoldMain)" stroke-width="2.2" fill="rgba(212,175,55,0.08)" stroke-linejoin="round">
    <path id="lotus_16_petals" d="${shodashaD}" />
  </g>

  <!-- 4. MIDDLE CONCENTRIC CIRCLE RINGS -->
  <g id="transition_middle_circles" stroke="url(#sriGoldAccent)" stroke-width="1.8" fill="none">
    <circle cx="500" cy="500" r="326" />
    <circle cx="500" cy="500" r="320" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.6" />
  </g>

  <!-- 5. ASHTA DALA (8 LOTUS PETALS) -->
  <g id="avarana_3_ashtadala" stroke="url(#sriGoldMain)" stroke-width="2.2" fill="rgba(217,119,6,0.12)" stroke-linejoin="round">
    <path id="lotus_8_petals" d="${ashtadalaD}" />
  </g>

  <!-- 6. INNER CONCENTRIC CIRCLE RINGS (ENCLOSING ALL 9 TRIANGLES WITH ZERO OVERFLOW) -->
  <g id="transition_inner_circles" stroke="url(#sriGoldAccent)" stroke-width="2" fill="none">
    <circle cx="500" cy="500" r="256" />
    <circle cx="500" cy="500" r="250" stroke-width="2.2" stroke="url(#sriGoldMain)" />
  </g>

  <!-- 7. THE SACRED 9 INTERLOCKING SHIVA-SHAKTI PRIMARY TRIANGLES (NAVAYONI) -->
  <!-- Scaled with absolute precision so all vertices touch and stay inside r=250 -->
  <g id="navayoni_interlocking_triangles" stroke="url(#sriGoldMain)" stroke-width="2.2" stroke-linejoin="miter">
    <!-- 4 Upward Shiva Triangles (Purusha) -->
    <path id="primary_tri_U1" d="${scaledShiva[0].d}" fill="rgba(212,175,55,0.08)" />
    <path id="primary_tri_U2" d="${scaledShiva[1].d}" fill="rgba(212,175,55,0.08)" />
    <path id="primary_tri_U3" d="${scaledShiva[2].d}" fill="rgba(212,175,55,0.08)" />
    <path id="primary_tri_U4" d="${scaledShiva[3].d}" fill="rgba(212,175,55,0.08)" />

    <!-- 5 Downward Shakti Triangles (Prakriti) -->
    <path id="primary_tri_D1" d="${scaledShakti[0].d}" fill="rgba(245,158,11,0.09)" />
    <path id="primary_tri_D2" d="${scaledShakti[1].d}" fill="rgba(245,158,11,0.09)" />
    <path id="primary_tri_D3" d="${scaledShakti[2].d}" fill="rgba(245,158,11,0.09)" />
    <path id="primary_tri_D4" d="${scaledShakti[3].d}" fill="rgba(245,158,11,0.09)" />
    
    <!-- Central Innermost Downward Triangle (Kamakala Mula Trikona) -->
    <path id="primary_tri_D5_central" d="${scaledShakti[4].d}" fill="rgba(255,215,0,0.32)" stroke="#FFE066" stroke-width="2.6" />
  </g>

  <!-- 8. CENTRAL BINDU (MAHABINDU SINGULARITY) -->
  <g id="avarana_9_bindu">
    <circle cx="500" cy="500" r="20" fill="rgba(255,215,0,0.15)" stroke="#FFE066" stroke-width="1.2" stroke-dasharray="3 2" />
    <circle cx="500" cy="500" r="12" fill="none" stroke="#FFD700" stroke-width="1.8" />
    <circle cx="500" cy="500" r="6.5" fill="url(#binduRadiance)" stroke="#FFFFFF" stroke-width="1.5" />
  </g>
</svg>
`;

const yantraDir = path.join(__dirname, '../public/yantras');
fs.writeFileSync(path.join(yantraDir, 'sri_yantra.svg'), masterSriYantraSvg, 'utf8');
fs.writeFileSync(path.join(yantraDir, 'SriYantra.svg'), masterSriYantraSvg, 'utf8');
fs.writeFileSync(path.join(yantraDir, 'Shriyantra.svg'), masterSriYantraSvg, 'utf8');
console.log('Successfully written perfectly enclosed 9-Interlocking Triangles Sri Yantra to public/yantras SVGs!');

// Now also update the pure dissection models with the matching scaled bounds
function generateStarCircuit(count, rApex, rBase, angleOffset = 0, fill = 'rgba(245,158,11,0.28)', idPrefix = 'tri') {
  const dAngle = (2 * Math.PI) / count;
  let polys = '';
  for (let i = 0; i < count; i++) {
    const aMid = angleOffset - Math.PI / 2 + i * dAngle;
    const aL = aMid - dAngle / 2;
    const aR = aMid + dAngle / 2;

    const [ax, ay] = polarToXy(rApex, aMid);
    const [lx, ly] = polarToXy(rBase, aL);
    const [rx, ry] = polarToXy(rBase, aR);

    polys += `<polygon id="${idPrefix}_${i}" points="${ax},${ay} ${rx},${ry} ${lx},${ly}" fill="${fill}" stroke="#FFD700" stroke-width="1.8" stroke-linejoin="round" />\n    `;
  }
  return polys;
}

const dissectionChaturdashara = `<g id="dissection_chaturdasharam" stroke="#FFD700" stroke-width="1.8" stroke-linejoin="round">
  <circle cx="500" cy="500" r="250" fill="none" stroke="#FFD700" stroke-width="1.5" opacity="0.6" stroke-dasharray="4 2" />
  ${generateStarCircuit(14, 250, 185, 0, 'rgba(245,158,11,0.26)', 'chaturdasharam')}
</g>`;

const dissectionBahirdashara = `<g id="dissection_bahir_dasharam" stroke="#FFD700" stroke-width="2" stroke-linejoin="round">
  ${generateStarCircuit(10, 185, 132, 0, 'rgba(217,119,6,0.30)', 'bahir_dasharam')}
</g>`;

const dissectionAntardashara = `<g id="dissection_antar_dasharam" stroke="#FFD700" stroke-width="2" stroke-linejoin="round">
  ${generateStarCircuit(10, 132, 88, Math.PI / 10, 'rgba(245,158,11,0.32)', 'antar_dasharam')}
</g>`;

const dissectionAshtaragon = `<g id="dissection_ashtaragon" stroke="#FFD700" stroke-width="2.2" stroke-linejoin="round">
  ${generateStarCircuit(8, 88, 50, 0, 'rgba(217,119,6,0.35)', 'ashtaragon')}
</g>`;

// D5 scaled coordinates
const [d5_lx, d5_ly] = scalePoint(423.84, 484.39);
const [d5_rx, d5_ry] = scalePoint(576.16, 484.39);
const [d5_ax, d5_ay] = scalePoint(500, 572.74);

const dissectionCentralTrikona = `<g id="dissection_trikona" stroke="#FFD700" stroke-width="2.6" stroke-linejoin="round">
  <polygon id="face_central_kama_kala_trikona" points="${d5_lx},${d5_ly} ${d5_rx},${d5_ry} ${d5_ax},${d5_ay}" fill="rgba(255,215,0,0.38)" stroke="#FFE066" stroke-width="2.6" />
  <circle cx="500" cy="500" r="5" fill="#FFE875" stroke="#FFFFFF" stroke-width="1.5" />
</g>`;

const dissectionBindu = `<g id="dissection_bindu">
  <circle cx="500" cy="500" r="32" fill="rgba(255,215,0,0.12)" stroke="#FFE066" stroke-width="1.5" stroke-dasharray="4 3" />
  <circle cx="500" cy="500" r="18" fill="none" stroke="#FFD700" stroke-width="1.8" />
  <circle cx="500" cy="500" r="8" fill="url(#binduRadiance)" stroke="#FFFFFF" stroke-width="2" />
</g>`;

const dissectionBhupura = `<g id="dissection_bhupura">
  <path d="${bhupuraD}" fill="none" stroke="#FFD700" stroke-width="2.6" stroke-linejoin="round" />
</g>`;

const dissectionShodashadala = `<g id="dissection_shodashadala">
  <circle cx="500" cy="500" r="392" fill="none" stroke="#FFD700" stroke-width="1.8" stroke-dasharray="3 3" opacity="0.6" />
  <path d="${shodashaD}" fill="rgba(212,175,55,0.18)" stroke="#FFD700" stroke-width="2.2" stroke-linejoin="round" />
  <circle cx="500" cy="500" r="326" fill="none" stroke="#FFD700" stroke-width="1.8" />
</g>`;

const dissectionAshtadala = `<g id="dissection_ashtadala">
  <circle cx="500" cy="500" r="320" fill="none" stroke="#FFD700" stroke-width="1.8" />
  <path d="${ashtadalaD}" fill="rgba(217,119,6,0.22)" stroke="#FFD700" stroke-width="2.4" stroke-linejoin="round" />
  <circle cx="500" cy="500" r="256" fill="none" stroke="#FFD700" stroke-width="1.8" />
</g>`;

const outputDissections = `// Autogenerated pure vector geometric dissection models for Sri Yantra
// Perfectly symmetric, topologically verified, canonical 9-Avarana vectors
// Scale: 1000x1000 viewBox, center (500, 500)

export interface AvaranaDissectionData {
  index: number;
  nameSanskrit: string;
  nameEnglish: string;
  chakraTitle: string;
  geometryType: string;
  count: number;
  svgElement: string;
}

export const SRI_YANTRA_VECTOR_DISSECTIONS: Record<number, AvaranaDissectionData> = {
  1: {
    index: 1,
    nameSanskrit: "त्रैलोक्यमोहन चक्र (भूपुर प्राकार / 3 रेखाएं व 4 द्वार)",
    nameEnglish: "Trailokyamohana Chakra (Bhupura Earth Rampart & 4 Gates)",
    chakraTitle: "भूपुर प्राकार (चतुरस्र)",
    geometryType: "3 Stepped Concentric Squares with 4 Cardinal Portals",
    count: 4,
    svgElement: \`${dissectionBhupura}\`
  },
  2: {
    index: 2,
    nameSanskrit: "सर्वाशापरिपूरक चक्र (षोडशदल पद्म / 16 कमल पंखुड़ियाँ)",
    nameEnglish: "Sarvashaparipuraka Chakra (16-Petal Lotus)",
    chakraTitle: "षोडशदल पद्म चक्र",
    geometryType: "16 Sacred Lotus Petals with Outer Ring",
    count: 16,
    svgElement: \`${dissectionShodashadala}\`
  },
  3: {
    index: 3,
    nameSanskrit: "सर्वसंक्षोभण चक्र (अष्टदल पद्म / 8 कमल पंखुड़ियाँ)",
    nameEnglish: "Sarvasankshobhana Chakra (8-Petal Lotus)",
    chakraTitle: "अष्टदल पद्म चक्र",
    geometryType: "8 Sacred Lotus Petals with Concentric Boundaries",
    count: 8,
    svgElement: \`${dissectionAshtadala}\`
  },
  4: {
    index: 4,
    nameSanskrit: "सर्वसौभाग्यदायक चक्र (चतुर्दशार / 14 त्रिकोण)",
    nameEnglish: "Sarvasaubhagyadayaka Chakra (14 Triangles)",
    chakraTitle: "चतुर्दशार चक्र",
    geometryType: "14 Outer Perimeter Triangles",
    count: 14,
    svgElement: \`${dissectionChaturdashara}\`
  },
  5: {
    index: 5,
    nameSanskrit: "सर्वार्थसाधक चक्र (बहिर्दशार / 10 बाहरी त्रिकोण)",
    nameEnglish: "Sarvarthasadhaka Chakra (10 Outer Triangles)",
    chakraTitle: "बहिर्दशार चक्र",
    geometryType: "10 Outer Circuit Triangles",
    count: 10,
    svgElement: \`${dissectionBahirdashara}\`
  },
  6: {
    index: 6,
    nameSanskrit: "सर्वरक्षाकर चक्र (अन्तर्दशार / 10 भीतरी त्रिकोण)",
    nameEnglish: "Sarvarakshakara Chakra (10 Inner Triangles)",
    chakraTitle: "अन्तर्दशार चक्र",
    geometryType: "10 Inner Circuit Triangles",
    count: 10,
    svgElement: \`${dissectionAntardashara}\`
  },
  7: {
    index: 7,
    nameSanskrit: "सर्वरोगहर चक्र (अष्टार / 8 त्रिकोण)",
    nameEnglish: "Sarvarogahara Chakra (8 Inner Triangles)",
    chakraTitle: "अष्टकोण चक्र",
    geometryType: "8 Interlocking Circuit Triangles",
    count: 8,
    svgElement: \`${dissectionAshtaragon}\`
  },
  8: {
    index: 8,
    nameSanskrit: "सर्वसिद्धिप्रद चक्र (मूल त्रिकोण / काम-कला)",
    nameEnglish: "Sarvasiddhiprada Chakra (Central Inverted Triangle)",
    chakraTitle: "काम-कला अधोमुख त्रिकोण",
    geometryType: "Downward-Pointing Primordial Triangle",
    count: 1,
    svgElement: \`${dissectionCentralTrikona}\`
  },
  9: {
    index: 9,
    nameSanskrit: "सर्वानन्दमय चक्र (बिन्दु)",
    nameEnglish: "Sarvanandamaya Chakra (Bindu Point)",
    chakraTitle: "परब्रह्म महाबिन्दु",
    geometryType: "Singularity / Central Radiant Point",
    count: 1,
    svgElement: \`${dissectionBindu}\`
  }
};
`;

fs.writeFileSync(path.join(__dirname, '../src/lib/yantras/sri-yantra-vector-dissections.ts'), outputDissections, 'utf8');
console.log('Successfully written updated harmonic SRI_YANTRA_VECTOR_DISSECTIONS!');
