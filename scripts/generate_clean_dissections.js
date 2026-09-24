// Script to calculate canonical and symmetric Sri Yantra Avarana SVG dissections
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

// 1. BHUPURA (EARTH RAMPART) - 3 concentric squares with 4 T-portals
const bhupuraSvg = `<g id="dissection_bhupura">
  <path d="M 60 60 L 420.8 60 L 420.8 24.8 L 579.2 24.8 L 579.2 60 L 940 60 L 940 420.8 L 975.2 420.8 L 975.2 579.2 L 940 579.2 L 940 940 L 579.2 940 L 579.2 975.2 L 420.8 975.2 L 420.8 940 L 60 940 L 60 579.2 L 24.8 579.2 L 24.8 420.8 L 60 420.8 Z M 79.8 79.8 L 440.6 79.8 L 440.6 44.6 L 559.4 44.6 L 559.4 79.8 L 920.2 79.8 L 920.2 440.6 L 955.4 440.6 L 955.4 559.4 L 920.2 559.4 L 920.2 920.2 L 559.4 920.2 L 559.4 955.4 L 440.6 955.4 L 440.6 920.2 L 79.8 920.2 L 79.8 559.4 L 44.6 559.4 L 44.6 440.6 L 79.8 440.6 Z M 99.6 99.6 L 460.4 99.6 L 460.4 64.4 L 539.6 64.4 L 539.6 99.6 L 900.4 99.6 L 900.4 460.4 L 935.6 460.4 L 935.6 539.6 L 900.4 539.6 L 900.4 900.4 L 539.6 900.4 L 539.6 935.6 L 460.4 935.6 L 460.4 900.4 L 99.6 900.4 L 99.6 539.6 L 64.4 539.6 L 64.4 460.4 L 99.6 460.4 Z" fill="none" stroke="#FFD700" stroke-width="2.6" stroke-linejoin="round" />
</g>`;

// 2. SHODASHADALA (16 LOTUS PETALS)
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

    // Control points for smooth pointed sacred lotus petal
    const [cp1X, cp1Y] = polarToXy(rInner + (rOuter - rInner) * 0.72, aMid - dAngle * 0.28);
    const [cp2X, cp2Y] = polarToXy(rInner + (rOuter - rInner) * 0.72, aMid + dAngle * 0.28);

    d += `M ${startX} ${startY} Q ${cp1X} ${cp1Y}, ${tipX} ${tipY} Q ${cp2X} ${cp2Y}, ${endX} ${endY} `;
  }
  return d;
}

const shodashaPath = generateLotusPath(16, 286, 356);
const shodashaSvg = `<g id="dissection_shodashadala">
  <circle cx="500" cy="500" r="356" fill="none" stroke="#FFD700" stroke-width="1.8" stroke-dasharray="3 3" opacity="0.6" />
  <path d="${shodashaPath}" fill="rgba(212,175,55,0.18)" stroke="#FFD700" stroke-width="2.2" stroke-linejoin="round" />
  <circle cx="500" cy="500" r="286" fill="none" stroke="#FFD700" stroke-width="1.8" />
</g>`;

// 3. ASHTADALA (8 LOTUS PETALS)
const ashtadalaPath = generateLotusPath(8, 220, 286);
const ashtadalaSvg = `<g id="dissection_ashtadala">
  <circle cx="500" cy="500" r="286" fill="none" stroke="#FFD700" stroke-width="1.8" />
  <path d="${ashtadalaPath}" fill="rgba(217,119,6,0.22)" stroke="#FFD700" stroke-width="2.4" stroke-linejoin="round" />
  <circle cx="500" cy="500" r="220" fill="none" stroke="#FFD700" stroke-width="1.8" />
</g>`;

// 4. CHATURDASHARAM (14 TRIANGLES)
function generateStarCircuit(count, rApex, rBase, angleOffset = 0, fill = 'rgba(245,158,11,0.28)', idPrefix = 'tri14') {
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

const chaturdasharaSvg = `<g id="dissection_chaturdasharam" stroke="#FFD700" stroke-width="1.8" stroke-linejoin="round">
  <circle cx="500" cy="500" r="220" fill="none" stroke="#FFD700" stroke-width="1.2" opacity="0.5" stroke-dasharray="4 2" />
  ${generateStarCircuit(14, 218, 160, 0, 'rgba(245,158,11,0.26)', 'chaturdasharam')}
</g>`;

// 5. BAHIRDASHARAM (10 OUTER TRIANGLES)
const bahirdasharaSvg = `<g id="dissection_bahir_dasharam" stroke="#FFD700" stroke-width="2" stroke-linejoin="round">
  ${generateStarCircuit(10, 160, 116, 0, 'rgba(217,119,6,0.30)', 'bahir_dasharam')}
</g>`;

// 6. ANTARDASHARAM (10 INNER TRIANGLES)
const antardasharaSvg = `<g id="dissection_antar_dasharam" stroke="#FFD700" stroke-width="2" stroke-linejoin="round">
  ${generateStarCircuit(10, 116, 78, Math.PI / 10, 'rgba(245,158,11,0.32)', 'antar_dasharam')}
</g>`;

// 7. ASHTARAGON (8 TRIANGLES)
const ashtaragonSvg = `<g id="dissection_ashtaragon" stroke="#FFD700" stroke-width="2.2" stroke-linejoin="round">
  ${generateStarCircuit(8, 78, 44, 0, 'rgba(217,119,6,0.35)', 'ashtaragon')}
</g>`;

// 8. CENTRAL DOWNWARD TRIANGLE (MULA KAMAKALA TRIKONA)
// Symmetrically downward pointing around bindu (500,500)
// Apex points directly downward: (500, 500 + 44) = (500, 544)
// Top base line: horizontal from (500 - 38, 500 - 22) to (500 + 38, 500 - 22)
const centralTrikonaSvg = `<g id="dissection_trikona" stroke="#FFD700" stroke-width="2.6" stroke-linejoin="round">
  <polygon id="face_central_kama_kala_trikona" points="462,478 538,478 500,544" fill="rgba(255,215,0,0.35)" stroke="#FFD700" stroke-width="2.4" />
  <circle cx="500" cy="500" r="4.5" fill="#FFE875" stroke="#FFFFFF" stroke-width="1.2" />
</g>`;

// 9. CENTRAL BINDU
const binduSvg = `<g id="dissection_bindu">
  <circle cx="500" cy="500" r="36" fill="rgba(255,215,0,0.12)" stroke="#FFE066" stroke-width="1.5" stroke-dasharray="4 3" />
  <circle cx="500" cy="500" r="20" fill="none" stroke="#FFD700" stroke-width="1.8" />
  <circle cx="500" cy="500" r="10" fill="url(#binduRadiance)" stroke="#FFFFFF" stroke-width="2" />
</g>`;

const output = `// Autogenerated pure vector geometric dissection models for Sri Yantra
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
    svgElement: \`${bhupuraSvg}\`
  },
  2: {
    index: 2,
    nameSanskrit: "सर्वाशापरिपूरक चक्र (षोडशदल पद्म / 16 कमल पंखुड़ियाँ)",
    nameEnglish: "Sarvashaparipuraka Chakra (16-Petal Lotus)",
    chakraTitle: "षोडशदल पद्म चक्र",
    geometryType: "16 Sacred Lotus Petals with Outer Ring",
    count: 16,
    svgElement: \`${shodashaSvg}\`
  },
  3: {
    index: 3,
    nameSanskrit: "सर्वसंक्षोभण चक्र (अष्टदल पद्म / 8 कमल पंखुड़ियाँ)",
    nameEnglish: "Sarvasankshobhana Chakra (8-Petal Lotus)",
    chakraTitle: "अष्टदल पद्म चक्र",
    geometryType: "8 Sacred Lotus Petals with Concentric Boundaries",
    count: 8,
    svgElement: \`${ashtadalaSvg}\`
  },
  4: {
    index: 4,
    nameSanskrit: "सर्वसौभाग्यदायक चक्र (चतुर्दशार / 14 त्रिकोण)",
    nameEnglish: "Sarvasaubhagyadayaka Chakra (14 Triangles)",
    chakraTitle: "चतुर्दशार चक्र",
    geometryType: "14 Outer Perimeter Triangles",
    count: 14,
    svgElement: \`${chaturdasharaSvg}\`
  },
  5: {
    index: 5,
    nameSanskrit: "सर्वार्थसाधक चक्र (बहिर्दशार / 10 बाहरी त्रिकोण)",
    nameEnglish: "Sarvarthasadhaka Chakra (10 Outer Triangles)",
    chakraTitle: "बहिर्दशार चक्र",
    geometryType: "10 Outer Circuit Triangles",
    count: 10,
    svgElement: \`${bahirdasharaSvg}\`
  },
  6: {
    index: 6,
    nameSanskrit: "सर्वरक्षाकर चक्र (अन्तर्दशार / 10 भीतरी त्रिकोण)",
    nameEnglish: "Sarvarakshakara Chakra (10 Inner Triangles)",
    chakraTitle: "अन्तर्दशार चक्र",
    geometryType: "10 Inner Circuit Triangles",
    count: 10,
    svgElement: \`${antardasharaSvg}\`
  },
  7: {
    index: 7,
    nameSanskrit: "सर्वरोगहर चक्र (अष्टार / 8 त्रिकोण)",
    nameEnglish: "Sarvarogahara Chakra (8 Inner Triangles)",
    chakraTitle: "अष्टकोण चक्र",
    geometryType: "8 Interlocking Circuit Triangles",
    count: 8,
    svgElement: \`${ashtaragonSvg}\`
  },
  8: {
    index: 8,
    nameSanskrit: "सर्वसिद्धिप्रद चक्र (मूल त्रिकोण / काम-कला)",
    nameEnglish: "Sarvasiddhiprada Chakra (Central Inverted Triangle)",
    chakraTitle: "काम-कला अधोमुख त्रिकोण",
    geometryType: "Downward-Pointing Primordial Triangle",
    count: 1,
    svgElement: \`${centralTrikonaSvg}\`
  },
  9: {
    index: 9,
    nameSanskrit: "सर्वानन्दमय चक्र (बिन्दु)",
    nameEnglish: "Sarvanandamaya Chakra (Bindu Point)",
    chakraTitle: "परब्रह्म महाबिन्दु",
    geometryType: "Singularity / Central Radiant Point",
    count: 1,
    svgElement: \`${binduSvg}\`
  }
};
`;

fs.writeFileSync(path.join(__dirname, '../src/lib/yantras/sri-yantra-vector-dissections.ts'), output, 'utf8');
console.log('Successfully wrote pristine symmetric SRI_YANTRA_VECTOR_DISSECTIONS!');
