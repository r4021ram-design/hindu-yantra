const fs = require('fs');
const path = require('path');

// Canonical Ogee Petal Algorithm
function generateOgeePetals(n, rBase, rTip, cx = 500, cy = 500) {
  const step = 360 / n;
  const halfStep = step / 2;
  const toRad = (deg) => (deg * Math.PI) / 180;
  const petals = [];

  for (let i = 0; i < n; i++) {
    const midDeg = i * step; // North-centered (0, 45, 90...)
    const startDeg = midDeg - halfStep;
    const endDeg = midDeg + halfStep;

    const v1x = cx + rBase * Math.sin(toRad(startDeg));
    const v1y = cy - rBase * Math.cos(toRad(startDeg));
    const v2x = cx + rBase * Math.sin(toRad(endDeg));
    const v2y = cy - rBase * Math.cos(toRad(endDeg));

    const tx = cx + rTip * Math.sin(toRad(midDeg));
    const ty = cy - rTip * Math.cos(toRad(midDeg));

    const rCp1 = rBase + (rTip - rBase) * 0.45;
    const cp1x = cx + rCp1 * Math.sin(toRad(midDeg - halfStep * 0.92));
    const cp1y = cy - rCp1 * Math.cos(toRad(midDeg - halfStep * 0.92));

    const rCp2 = rTip - (rTip - rBase) * 0.30;
    const cp2x = cx + rCp2 * Math.sin(toRad(midDeg - halfStep * 0.25));
    const cp2y = cy - rCp2 * Math.cos(toRad(midDeg - halfStep * 0.25));

    const cp3x = cx + rCp2 * Math.sin(toRad(midDeg + halfStep * 0.25));
    const cp3y = cy - rCp2 * Math.cos(toRad(midDeg + halfStep * 0.25));

    const cp4x = cx + rCp1 * Math.sin(toRad(midDeg + halfStep * 0.92));
    const cp4y = cy - rCp1 * Math.cos(toRad(midDeg + halfStep * 0.92));

    const pathD = `M ${v1x.toFixed(2)} ${v1y.toFixed(2)} C ${cp1x.toFixed(2)} ${cp1y.toFixed(2)}, ${cp2x.toFixed(2)} ${cp2y.toFixed(2)}, ${tx.toFixed(2)} ${ty.toFixed(2)} C ${cp3x.toFixed(2)} ${cp3y.toFixed(2)}, ${cp4x.toFixed(2)} ${cp4y.toFixed(2)}, ${v2x.toFixed(2)} ${v2y.toFixed(2)}`;

    const baseSpineX = cx + rBase * Math.sin(toRad(midDeg));
    const baseSpineY = cy - rBase * Math.cos(toRad(midDeg));
    const spineD = `M ${baseSpineX.toFixed(2)} ${baseSpineY.toFixed(2)} L ${tx.toFixed(2)} ${ty.toFixed(2)}`;

    petals.push({ i, midDeg, pathD, spineD, tx, ty, midX: (baseSpineX + tx) / 2, midY: (baseSpineY + ty) / 2 });
  }
  return petals;
}

// Canonical Bhupura
function renderBhupura(strokeId = 'bronzeMain') {
  return `
  <!-- 1. Canonical 3-Tier Bhupura (Sacred Earth Citadel with 4 Portals) -->
  <g id="bhupura" stroke="url(#${strokeId})" stroke-width="2.8" fill="none" stroke-linejoin="round" stroke-linecap="round">
    <!-- Outer Step (Line 1) -->
    <path d="
      M 160 50 L 430 50 L 430 20 L 570 20 L 570 50 L 840 50 L 840 160 L 950 160 L 950 430 L 980 430 L 980 570 L 950 570 L 950 840 L 840 840 L 840 950 L 570 950 L 570 980 L 430 980 L 430 950 L 160 950 L 160 840 L 50 840 L 50 570 L 20 570 L 20 430 L 50 430 L 50 160 L 160 160 Z
    " />
    <!-- Middle Step (Line 2) -->
    <path d="
      M 175 65 L 435 65 L 435 40 L 565 40 L 565 65 L 825 65 L 825 175 L 935 175 L 935 435 L 960 435 L 960 565 L 935 565 L 935 825 L 825 825 L 825 935 L 565 935 L 565 960 L 435 960 L 435 935 L 175 935 L 175 825 L 65 825 L 65 565 L 40 565 L 40 435 L 65 435 L 65 175 L 175 175 Z
    " stroke-width="2.2" />
    <!-- Inner Step (Line 3) -->
    <path d="
      M 190 80 L 440 80 L 440 60 L 560 60 L 560 80 L 810 80 L 810 190 L 920 190 L 920 440 L 940 440 L 940 560 L 920 560 L 920 810 L 810 810 L 810 920 L 560 920 L 560 940 L 440 940 L 440 920 L 190 920 L 190 810 L 80 810 L 80 560 L 60 560 L 60 440 L 80 440 L 80 190 L 190 190 Z
    " stroke-width="2.6" />
  </g>`;
}

// Canonical Trivalaya
function renderTrivalaya(r1 = 415, r2 = 400, r3 = 385, strokeId = 'bronzeMain') {
  return `
  <!-- 2. Concentric Girdles (Trivalaya) -->
  <g id="trivalaya" stroke="url(#${strokeId})" fill="none">
    <circle cx="500" cy="500" r="${r1}" stroke-width="2.8" />
    <circle cx="500" cy="500" r="${r2}" stroke-width="1.8" />
    <circle cx="500" cy="500" r="${r3}" stroke-width="2.4" />
  </g>`;
}

// Canonical Shared Defs
function renderDefs() {
  return `
  <defs>
    <!-- Deep Consecrated Antique Bronze Gradients -->
    <linearGradient id="bronzeMain" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1A0E05" />
      <stop offset="35%" stop-color="#3E1E07" />
      <stop offset="70%" stop-color="#2A1406" />
      <stop offset="100%" stop-color="#120803" />
    </linearGradient>
    <linearGradient id="bronzeLight" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#4A2508" />
      <stop offset="50%" stop-color="#2D1505" />
      <stop offset="100%" stop-color="#5B2E0B" />
    </linearGradient>
    <radialGradient id="sacredBg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FBF8F1" />
      <stop offset="60%" stop-color="#F4EEE0" />
      <stop offset="85%" stop-color="#E9DFCB" />
      <stop offset="100%" stop-color="#DDCDB3" />
    </radialGradient>
    <radialGradient id="hanumanAura" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#EA580C" stop-opacity="0.35" />
      <stop offset="50%" stop-color="#C2410C" stop-opacity="0.18" />
      <stop offset="100%" stop-color="#1A0E05" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="siddhiAura" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#F59E0B" stop-opacity="0.35" />
      <stop offset="50%" stop-color="#D97706" stop-opacity="0.18" />
      <stop offset="100%" stop-color="#78350F" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="gopalaAura" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#0284C7" stop-opacity="0.25" />
      <stop offset="50%" stop-color="#F59E0B" stop-opacity="0.18" />
      <stop offset="100%" stop-color="#1A0E05" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="dhanvantariAura" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#10B981" stop-opacity="0.30" />
      <stop offset="50%" stop-color="#059669" stop-opacity="0.18" />
      <stop offset="100%" stop-color="#064E3B" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="goldBinduGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FBBF24" stop-opacity="0.85" />
      <stop offset="50%" stop-color="#D97706" stop-opacity="0.45" />
      <stop offset="100%" stop-color="#B45309" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="sindoorBinduGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#F97316" stop-opacity="0.85" />
      <stop offset="50%" stop-color="#EA580C" stop-opacity="0.45" />
      <stop offset="100%" stop-color="#9A3412" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="amritaBinduGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#34D399" stop-opacity="0.85" />
      <stop offset="50%" stop-color="#059669" stop-opacity="0.45" />
      <stop offset="100%" stop-color="#064E3B" stop-opacity="0" />
    </radialGradient>
    <filter id="sacredShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#1A0E05" flood-opacity="0.25" />
    </filter>
  </defs>`;
}

// 1. VEER MARUTI HANUMAN YANTRA
function generateHanumanYantra() {
  const toRad = deg => (deg * Math.PI) / 180;
  const petals12 = generateOgeePetals(12, 265, 385);
  const petals8 = generateOgeePetals(8, 155, 255);

  // 12 Sacred Names of Hanuman
  const names12 = [
    'हनुमान्', 'अञ्जनीसुतः', 'वायुपुत्रः', 'महाबलः',
    'रामेष्टः', 'फाल्गुनसखः', 'पिङ्गाक्षः', 'अमितविक्रमः',
    'उदधिक्रमणः', 'सीताशोकहरः', 'लक्ष्मणप्राणदः', 'दशग्रीवदर्पहा'
  ];

  // 8 Beejaksharas: ह्रां ह्रीं ह्रूं ह्रैं ह्रौं ह्रः हुं फट्
  const beejas8 = ['ह्रां', 'ह्रीं', 'ह्रूं', 'ह्रैं', 'ह्रौं', 'ह्रः', 'हुं', 'फट्'];

  // Hexagram coordinates radius 148
  const rHex = 148;
  const triUp = [0, 120, 240].map(deg => {
    const x = 500 + rHex * Math.sin(toRad(deg));
    const y = 500 - rHex * Math.cos(toRad(deg));
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');

  const triDown = [180, 300, 60].map(deg => {
    const x = 500 + rHex * Math.sin(toRad(deg));
    const y = 500 - rHex * Math.cos(toRad(deg));
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');

  // Gada (Mace) motif accents
  const gadaSpines = `
    <line x1="500" y1="360" x2="500" y2="640" stroke-width="2.6" />
    <circle cx="500" cy="370" r="14" fill="none" stroke-width="2.0" />
    <circle cx="500" cy="630" r="8" fill="none" stroke-width="2.0" />
    <line x1="475" y1="370" x2="525" y2="370" stroke-width="2.0" />
  `;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%">
  ${renderDefs()}
  <rect width="1000" height="1000" fill="url(#sacredBg)" />
  <circle cx="500" cy="500" r="480" fill="url(#hanumanAura)" />
  ${renderBhupura()}
  ${renderTrivalaya(415, 400, 385)}

  <!-- 3. Dvadasadala Lotus (द्वादशदल पद्म - १२ द्वादश दिव्य नाम मण्डल) -->
  <g id="dvadasadala_petals" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none">
    ${petals12.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals12.map(p => `<path d="${p.spineD}" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.75" />`).join('\n    ')}
  </g>

  <!-- 12 Sacred Names of Hanuman Inscriptions -->
  <g id="dvadasa_names" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="16" fill="#1A0E05" text-anchor="middle" dominant-baseline="central">
    ${petals12.map((p, idx) => {
      const rM = 325;
      const x = 500 + rM * Math.sin(toRad(p.midDeg));
      const y = 500 - rM * Math.cos(toRad(p.midDeg));
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}">${names12[idx]}</text>`;
    }).join('\n    ')}
  </g>

  <!-- Middle Girdle -->
  <circle cx="500" cy="500" r="265" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />
  <circle cx="500" cy="500" r="255" stroke="url(#bronzeMain)" stroke-width="1.6" fill="none" />

  <!-- 4. Ashtadala Maruti Lotus (अष्टदल पद्म - ८ हनुमद् महाबीज मण्डल) -->
  <g id="ashtadala_petals" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none">
    ${petals8.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals8.map(p => `<path d="${p.spineD}" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.75" />`).join('\n    ')}
  </g>

  <!-- 8 Beejakshara Inscriptions (ह्रां ह्रीं ह्रूं...) -->
  <g id="ashta_beejas" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="20" fill="#2E1405" text-anchor="middle" dominant-baseline="central">
    ${petals8.map((p, idx) => {
      const rM = 205;
      const x = 500 + rM * Math.sin(toRad(p.midDeg));
      const y = 500 - rM * Math.cos(toRad(p.midDeg));
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}">${beejas8[idx]}</text>`;
    }).join('\n    ')}
  </g>

  <!-- Inner Rings -->
  <circle cx="500" cy="500" r="155" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />
  <circle cx="500" cy="500" r="148" stroke="url(#bronzeMain)" stroke-width="1.5" fill="none" />

  <!-- 5. Veer Kesarinandana Hexagram & Gada Matrix (वीर षट्कोण व गदा मण्डल) -->
  <g id="veer_shatkona" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none" stroke-linejoin="round">
    <polygon points="${triUp}" />
    <polygon points="${triDown}" />
    ${gadaSpines}
  </g>

  <!-- Hexagram Vertex Inscriptions: ॐ हं हनुमते नमः -->
  <g id="shatkona_maruti_texts" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="14.5" fill="#7C2D12" text-anchor="middle" dominant-baseline="central">
    <text x="500" y="395">ॐ</text>
    <text x="595" y="440">हं</text>
    <text x="595" y="560">हनुमते</text>
    <text x="500" y="605">रुद्राय</text>
    <text x="405" y="560">हुं</text>
    <text x="405" y="440">फट्</text>
  </g>

  <!-- 6. Central Maruti Sindoor Parama Bindu Sanctuary -->
  <circle cx="500" cy="500" r="46" fill="url(#sindoorBinduGlow)" />
  <circle cx="500" cy="500" r="38" fill="#FDF8F6" stroke="url(#bronzeMain)" stroke-width="2.6" />
  <text x="500" y="503" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="30" fill="#C2410C" text-anchor="middle" dominant-baseline="central">हं</text>
  <circle cx="500" cy="500" r="4.5" fill="#9A3412" />
</svg>`;
}

// 2. SARVA KARYA SIDDHI YANTRA
function generateSarvaKaryaSiddhiYantra() {
  const toRad = deg => (deg * Math.PI) / 180;
  const petals8 = generateOgeePetals(8, 255, 385);

  // 8 Sacred Siddhis: अणिमा महिमा गरिमा लघिमा प्राप्ति प्राकाम्य ईशित्व वशित्व
  const siddhis8 = ['अणिमा', 'महिमा', 'गरिमा', 'लघिमा', 'प्राप्ति', 'प्राकाम्य', 'ईशित्व', 'वशित्व'];

  // Navakhanda 3x3 Grid: 9 Cells from (340,340) to (660,660)
  // Grid Lines:
  // vertical: 340, 446, 554, 660
  // horizontal: 340, 446, 554, 660
  const gridCells = [
    { x: 393, y: 393, text: 'ह्रीं' },
    { x: 500, y: 393, text: 'श्रीं' },
    { x: 607, y: 393, text: 'क्लीं' },
    { x: 393, y: 500, text: 'ऐं' },
    { x: 500, y: 500, text: 'ॐ' },
    { x: 607, y: 500, text: 'सौः' },
    { x: 393, y: 607, text: 'गं' },
    { x: 500, y: 607, text: 'दूँ' },
    { x: 607, y: 607, text: 'स्वाहा' }
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%">
  ${renderDefs()}
  <rect width="1000" height="1000" fill="url(#sacredBg)" />
  <circle cx="500" cy="500" r="480" fill="url(#siddhiAura)" />
  ${renderBhupura()}
  ${renderTrivalaya(415, 400, 385)}

  <!-- 3. Ashta-Dala Lotus (अष्टदल पद्म - अष्टसिद्धि मण्डल) -->
  <g id="ashtadala_petals" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none">
    ${petals8.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals8.map(p => `<path d="${p.spineD}" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.75" />`).join('\n    ')}
  </g>

  <!-- 8 Siddhi Inscriptions (अणिमा, महिमा, गरिमा...) -->
  <g id="ashta_siddhis" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="19" fill="#1A0E05" text-anchor="middle" dominant-baseline="central">
    ${petals8.map((p, idx) => {
      const rM = 320;
      const x = 500 + rM * Math.sin(toRad(p.midDeg));
      const y = 500 - rM * Math.cos(toRad(p.midDeg));
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}">${siddhis8[idx]}</text>`;
    }).join('\n    ')}
  </g>

  <!-- Middle Girdle -->
  <circle cx="500" cy="500" r="255" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />
  <circle cx="500" cy="500" r="245" stroke="url(#bronzeMain)" stroke-width="1.6" fill="none" />

  <!-- 4. Navakhanda 3x3 Grid Matrix (नवखण्डात्मक सर्वसिद्धि चक्र) -->
  <g id="navakhanda_grid" stroke="url(#bronzeMain)">
    <!-- Outer Square of Matrix -->
    <rect x="340" y="340" width="320" height="320" fill="none" stroke-width="2.8" />
    <rect x="330" y="330" width="340" height="340" fill="none" stroke-width="1.4" stroke-dasharray="4,4" />

    <!-- Grid Divisors -->
    <line x1="340" y1="446" x2="660" y2="446" stroke-width="2.2" />
    <line x1="340" y1="554" x2="660" y2="554" stroke-width="2.2" />
    <line x1="446" y1="340" x2="446" y2="660" stroke-width="2.2" />
    <line x1="554" y1="340" x2="554" y2="660" stroke-width="2.2" />

    <!-- 9 Cells Inscriptions -->
    <g font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="20" fill="#1A0E05" text-anchor="middle" dominant-baseline="central">
      ${gridCells.filter(c => !(c.x === 500 && c.y === 500)).map(c => `<text x="${c.x}" y="${c.y}">${c.text}</text>`).join('\n      ')}
    </g>
  </g>

  <!-- 5. Central Sanctuary & Bindu Zone -->
  <circle cx="500" cy="500" r="46" fill="url(#goldBinduGlow)" />
  <circle cx="500" cy="500" r="38" fill="#FDFBF7" stroke="url(#bronzeMain)" stroke-width="2.4" />
  <text x="500" y="492" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="12" fill="#78350F" text-anchor="middle" dominant-baseline="central">सर्वसिद्धिं</text>
  <text x="500" y="508" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="12" fill="#78350F" text-anchor="middle" dominant-baseline="central">कुरु कुरु</text>
  <circle cx="500" cy="500" r="4" fill="#B45309" />
</svg>`;
}

// 3. SANTANA GOPALA YANTRA
function generateSantanaGopalaYantra() {
  const toRad = deg => (deg * Math.PI) / 180;
  const petals16 = generateOgeePetals(16, 275, 385);
  const petals8 = generateOgeePetals(8, 165, 265);

  // 16 Santana Gopala Mantra Syllables: ॐ क्लीं गोपालवेषधारिणे पुत्रं देहि मे स्वाहा
  const syllables16 = ['ॐ', 'क्लीं', 'गो', 'पा', 'ल', 'वे', 'ष', 'धा', 'रि', 'णे', 'पु', 'त्रं', 'दे', 'हि', 'मे', 'स्वाहा'];
  // 8 Ashta Krishna Protective Names
  const names8 = ['दामोदर', 'माधव', 'गोविन्द', 'मुकुन्द', 'अनन्त', 'अच्युत', 'केशव', 'वासुदेव'];

  // Hexagram coordinates radius 155
  const rHex = 155;
  const triUp = [0, 120, 240].map(deg => {
    const x = 500 + rHex * Math.sin(toRad(deg));
    const y = 500 - rHex * Math.cos(toRad(deg));
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');

  const triDown = [180, 300, 60].map(deg => {
    const x = 500 + rHex * Math.sin(toRad(deg));
    const y = 500 - rHex * Math.cos(toRad(deg));
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');

  // Flute (Venu/Murali) diagonal motif with 7 finger holes
  const fluteLine = `
    <line x1="420" y1="420" x2="580" y2="580" stroke-width="3.2" stroke-linecap="round" />
    <circle cx="445" cy="445" r="3" fill="#1A0E05" />
    <circle cx="465" cy="465" r="3" fill="#1A0E05" />
    <circle cx="485" cy="485" r="3" fill="#1A0E05" />
    <circle cx="515" cy="515" r="3" fill="#1A0E05" />
    <circle cx="535" cy="535" r="3" fill="#1A0E05" />
    <circle cx="555" cy="555" r="3" fill="#1A0E05" />
    <!-- Peacock Feather Crest Curves -->
    <path d="M 420 420 Q 390 400 400 370 Q 420 375 425 405" stroke-width="2.2" fill="none" />
    <path d="M 410 395 Q 400 380 408 375" stroke-width="1.5" fill="none" />
  `;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%">
  ${renderDefs()}
  <rect width="1000" height="1000" fill="url(#sacredBg)" />
  <circle cx="500" cy="500" r="480" fill="url(#gopalaAura)" />
  ${renderBhupura()}
  ${renderTrivalaya(415, 400, 385)}

  <!-- 3. Shodashadala Lotus (षोडशदल पद्म - १६ सन्तान गोपाल मन्त्र मण्डल) -->
  <g id="shodashadala_petals" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none">
    ${petals16.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals16.map(p => `<path d="${p.spineD}" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.75" />`).join('\n    ')}
  </g>

  <!-- 16 Syllables Inscriptions (ॐ क्लीं गोपालवेषधारिणे...) -->
  <g id="shodasha_syllables" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="17" fill="#1A0E05" text-anchor="middle" dominant-baseline="central">
    ${petals16.map((p, idx) => {
      const rM = 330;
      const x = 500 + rM * Math.sin(toRad(p.midDeg));
      const y = 500 - rM * Math.cos(toRad(p.midDeg));
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}">${syllables16[idx]}</text>`;
    }).join('\n    ')}
  </g>

  <!-- Middle Girdle -->
  <circle cx="500" cy="500" r="275" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />
  <circle cx="500" cy="500" r="265" stroke="url(#bronzeMain)" stroke-width="1.6" fill="none" />

  <!-- 4. Ashtadala Gopala Lotus (अष्टदल पद्म - ८ बालमुकुन्द रक्षक नाम) -->
  <g id="ashtadala_petals" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none">
    ${petals8.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals8.map(p => `<path d="${p.spineD}" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.75" />`).join('\n    ')}
  </g>

  <!-- 8 Protective Krishna Names Inscriptions -->
  <g id="ashta_names" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="16" fill="#2E1405" text-anchor="middle" dominant-baseline="central">
    ${petals8.map((p, idx) => {
      const rM = 215;
      const x = 500 + rM * Math.sin(toRad(p.midDeg));
      const y = 500 - rM * Math.cos(toRad(p.midDeg));
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}">${names8[idx]}</text>`;
    }).join('\n    ')}
  </g>

  <!-- Inner Rings -->
  <circle cx="500" cy="500" r="165" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />
  <circle cx="500" cy="500" r="155" stroke="url(#bronzeMain)" stroke-width="1.5" fill="none" />

  <!-- 5. Venugopala Shatkona & Flute Matrix (वेणुगोपाल षट्कोण व मुरली मण्डल) -->
  <g id="venugopala_matrix" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none" stroke-linejoin="round">
    <polygon points="${triUp}" />
    <polygon points="${triDown}" />
    ${fluteLine}
  </g>

  <!-- Hexagram Vertex Inscriptions: देवकीसुत गोविन्द -->
  <g id="shatkona_texts" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="14.5" fill="#0369A1" text-anchor="middle" dominant-baseline="central">
    <text x="500" y="380">देवकीसुतं</text>
    <text x="610" y="440">गोविन्दं</text>
    <text x="610" y="560">वासुदेवं</text>
    <text x="500" y="620">जगत्पतिम्</text>
    <text x="390" y="560">देहि मे</text>
    <text x="390" y="440">तनयं</text>
  </g>

  <!-- 6. Central Bala Gopala Parama Bindu Sanctuary (क्लीं कामबीज) -->
  <circle cx="500" cy="500" r="46" fill="url(#goldBinduGlow)" />
  <circle cx="500" cy="500" r="38" fill="#FDFBF7" stroke="url(#bronzeMain)" stroke-width="2.6" />
  <text x="500" y="503" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="30" fill="#0369A1" text-anchor="middle" dominant-baseline="central">क्लीं</text>
  <circle cx="500" cy="500" r="4.5" fill="#0284C7" />
</svg>`;
}

// 4. DHANVANTARI AROGYA YANTRA
function generateDhanvantariYantra() {
  const toRad = deg => (deg * Math.PI) / 180;
  const petals12 = generateOgeePetals(12, 265, 385);
  const petals8 = generateOgeePetals(8, 160, 255);

  // 12 Dhanvantari Syllables: ॐ नमो भगवते धन्वन्तरये
  const syllables12 = ['ॐ', 'न', 'मो', 'भ', 'ग', 'व', 'ते', 'ध', 'न्व', 'न्त', 'र', 'ये'];
  // 8 Healing Emblems / Syllables: अमृताय शङ्खाय चक्राय जलौकाय कुम्भाय ओषधये आरोग्याय स्वाहा
  const emblems8 = ['अमृताय', 'शङ्खाय', 'चक्राय', 'जलौकाय', 'कुम्भाय', 'ओषधये', 'आरोग्याय', 'स्वाहा'];

  // Amrita Kalasha (Sacred Nectar Urn) Geometric Profile
  const kalashaPath = `
    <!-- Urn Body -->
    <path d="M 460 540 C 440 520, 440 480, 470 460 L 530 460 C 560 480, 560 520, 540 540 Z" stroke-width="2.6" fill="none" />
    <!-- Urn Base -->
    <line x1="470" y1="540" x2="530" y2="540" stroke-width="2.8" />
    <!-- Urn Neck & Rim -->
    <rect x="475" y="445" width="50" height="15" rx="3" stroke-width="2.2" fill="none" />
    <!-- Coconut & Mango Leaves Finial -->
    <path d="M 480 445 Q 460 415 475 390 Q 500 415 500 445" stroke-width="2.0" fill="none" />
    <path d="M 520 445 Q 540 415 525 390 Q 500 415 500 445" stroke-width="2.0" fill="none" />
    <circle cx="500" cy="415" r="16" fill="none" stroke-width="2.2" />
  `;

  // 8 Sudarshana Healing Sunbeams radiating outwards from r=80 to r=140
  const healingRays = [0, 45, 90, 135, 180, 225, 270, 315].map(deg => {
    const x1 = 500 + 80 * Math.sin(toRad(deg));
    const y1 = 500 - 80 * Math.cos(toRad(deg));
    const x2 = 500 + 140 * Math.sin(toRad(deg));
    const y2 = 500 - 140 * Math.cos(toRad(deg));
    return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke-width="2.0" stroke-dasharray="4,3" />`;
  }).join('\n    ');

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%">
  ${renderDefs()}
  <rect width="1000" height="1000" fill="url(#sacredBg)" />
  <circle cx="500" cy="500" r="480" fill="url(#dhanvantariAura)" />
  ${renderBhupura()}
  ${renderTrivalaya(415, 400, 385)}

  <!-- 3. Dvadasadala Lotus (द्वादशदल पद्म - १२ आरोग्य सूर्य-अमृत किरणें) -->
  <g id="dvadasadala_petals" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none">
    ${petals12.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals12.map(p => `<path d="${p.spineD}" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.75" />`).join('\n    ')}
  </g>

  <!-- 12 Dhanvantari Syllables Inscriptions (ॐ नमो भगवते धन्वन्तरये) -->
  <g id="dvadasa_syllables" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="18" fill="#1A0E05" text-anchor="middle" dominant-baseline="central">
    ${petals12.map((p, idx) => {
      const rM = 325;
      const x = 500 + rM * Math.sin(toRad(p.midDeg));
      const y = 500 - rM * Math.cos(toRad(p.midDeg));
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}">${syllables12[idx]}</text>`;
    }).join('\n    ')}
  </g>

  <!-- Middle Girdle -->
  <circle cx="500" cy="500" r="265" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />
  <circle cx="500" cy="500" r="255" stroke="url(#bronzeMain)" stroke-width="1.6" fill="none" />

  <!-- 4. Ashtadala Healing Lotus (अष्टदल पद्म - ८ अमृत ओषधि मण्डल) -->
  <g id="ashtadala_petals" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none">
    ${petals8.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals8.map(p => `<path d="${p.spineD}" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.75" />`).join('\n    ')}
  </g>

  <!-- 8 Healing Emblems Inscriptions (अमृताय, शङ्खाय, चक्राय...) -->
  <g id="ashta_emblems" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="16" fill="#064E3B" text-anchor="middle" dominant-baseline="central">
    ${petals8.map((p, idx) => {
      const rM = 205;
      const x = 500 + rM * Math.sin(toRad(p.midDeg));
      const y = 500 - rM * Math.cos(toRad(p.midDeg));
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}">${emblems8[idx]}</text>`;
    }).join('\n    ')}
  </g>

  <!-- Inner Rings -->
  <circle cx="500" cy="500" r="160" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />
  <circle cx="500" cy="500" r="150" stroke="url(#bronzeMain)" stroke-width="1.5" fill="none" />

  <!-- 5. Amrita Kalasha & Healing Rays Matrix (अमृत कलश व सुदर्शन किरण मण्डल) -->
  <g id="amrita_kalasha_matrix" stroke="url(#bronzeMain)">
    ${healingRays}
    ${kalashaPath}
  </g>

  <!-- 6. Central Amrita Sanjeevani Parama Bindu Sanctuary -->
  <circle cx="500" cy="500" r="46" fill="url(#amritaBinduGlow)" />
  <circle cx="500" cy="500" r="38" fill="#FDFBF7" stroke="url(#bronzeMain)" stroke-width="2.6" />
  <text x="500" y="492" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="13" fill="#064E3B" text-anchor="middle" dominant-baseline="central">ॐ धं</text>
  <text x="500" y="509" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="13" fill="#064E3B" text-anchor="middle" dominant-baseline="central">धन्वन्तरये</text>
  <circle cx="500" cy="500" r="4" fill="#059669" />
</svg>`;
}

// Targets and directories
const targets = [
  {
    id: 'hanuman_yantra',
    generator: generateHanumanYantra,
    dirs: [
      'public/yantras',
      'public/yantras/11_Hanuman',
      'public/yantras/07_Protection'
    ]
  },
  {
    id: 'sarva_karya_siddhi_yantra',
    generator: generateSarvaKaryaSiddhiYantra,
    dirs: [
      'public/yantras',
      'public/yantras/14_SpecialPurpose'
    ]
  },
  {
    id: 'santana_gopala_yantra',
    generator: generateSantanaGopalaYantra,
    dirs: [
      'public/yantras',
      'public/yantras/13_Marriage_Santana'
    ]
  },
  {
    id: 'dhanvantari_yantra',
    generator: generateDhanvantariYantra,
    dirs: [
      'public/yantras',
      'public/yantras/14_SpecialPurpose'
    ]
  }
];

const rootDir = path.resolve(__dirname, '..');

targets.forEach(t => {
  const svgContent = t.generator();
  t.dirs.forEach(d => {
    const dirPath = path.join(rootDir, d);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    const filePath = path.join(dirPath, `${t.id}.svg`);
    fs.writeFileSync(filePath, svgContent, 'utf8');
    console.log(`[OK] Generated: ${filePath}`);
  });
});
