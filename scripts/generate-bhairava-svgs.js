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

// Canonical 3-Tier Bhupura
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

// Common SVG Header & Defs
function getSvgHeader(title) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%">
  <!-- ${title} - Pure Consecrated Dark Antique Bronze Vector Matrix -->
  <defs>
    <linearGradient id="bronzeMain" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1A0E05" />
      <stop offset="45%" stop-color="#3E1E07" />
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
    <radialGradient id="binduGoldGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#B45309" stop-opacity="0.9" />
      <stop offset="50%" stop-color="#D97706" stop-opacity="0.6" />
      <stop offset="100%" stop-color="#78350F" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="fieryBhairavaGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#991B1B" stop-opacity="0.85" />
      <stop offset="40%" stop-color="#C2410C" stop-opacity="0.5" />
      <stop offset="100%" stop-color="#1A0E05" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="amritaGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#D97706" stop-opacity="0.8" />
      <stop offset="60%" stop-color="#F59E0B" stop-opacity="0.4" />
      <stop offset="100%" stop-color="#B45309" stop-opacity="0" />
    </radialGradient>
    <filter id="sacredShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#1A0E05" flood-opacity="0.25" />
    </filter>
  </defs>
  <rect width="1000" height="1000" fill="url(#sacredBg)" />
`;
}

// -------------------------------------------------------------
// 1. BATUKA BHAIRAVA YANTRA (श्री आपदुद्धारक बटुक भैरव यन्त्र)
// -------------------------------------------------------------
function generateBatukaBhairavaSvg() {
  const petals = generateOgeePetals(8, 285, 380, 500, 500);

  let petalPaths = '';
  let petalSpines = '';
  let petalTexts = '';

  const bhairavaNames = ['हेतुराज', 'त्रिपुरान्तक', 'अग्निवेत', 'यमजिह्व', 'काल', 'कराल', 'एकदंष्ट्र', 'भीम'];

  petals.forEach((p, idx) => {
    petalPaths += `    <path d="${p.pathD}" />\n`;
    petalSpines += `    <path d="${p.spineD}" stroke-width="1.6" stroke-dasharray="3,3" />\n`;
    const labelRad = 330;
    const toRad = (deg) => (deg * Math.PI) / 180;
    const lx = 500 + labelRad * Math.sin(toRad(p.midDeg));
    const ly = 500 - labelRad * Math.cos(toRad(p.midDeg)) + 4;
    petalTexts += `    <text x="${lx.toFixed(1)}" y="${ly.toFixed(1)}" font-family="'Noto Sans Devanagari', 'Sanskrit Text', serif" font-size="15" font-weight="bold" fill="#1A0E05" text-anchor="middle">${bhairavaNames[idx]}</text>\n`;
  });

  // Dynamic Hexagram (षट्कोण) - Radii 230
  // Upward Triangle (Shiva Chaitanya)
  const upTri = `M 500 ${500 - 230} L ${500 + 230 * Math.sin(Math.PI*2/3)} ${500 - 230 * Math.cos(Math.PI*2/3)} L ${500 + 230 * Math.sin(Math.PI*4/3)} ${500 - 230 * Math.cos(Math.PI*4/3)} Z`;
  // Downward Triangle (Bhairavi Shakti)
  const downTri = `M 500 ${500 + 230} L ${500 + 230 * Math.sin(Math.PI/3)} ${500 - 230 * Math.cos(Math.PI/3)} L ${500 + 230 * Math.sin(Math.PI*5/3)} ${500 - 230 * Math.cos(Math.PI*5/3)} Z`;

  // Inner Inverted Triangle (त्रिकोण) - Radii 125
  const inTri = `M 500 ${500 + 125} L ${500 + 125 * Math.sin(Math.PI/3)} ${500 - 125 * Math.cos(Math.PI/3)} L ${500 + 125 * Math.sin(Math.PI*5/3)} ${500 - 125 * Math.cos(Math.PI*5/3)} Z`;

  return `${getSvgHeader('Apaduddharaka Batuka Bhairava Yantra')}
  ${renderBhupura()}
  ${renderTrivalaya(415, 400, 385)}

  <!-- 3. Ashtadala Padma (8-Petal Ogee Lotus of the 8 Bhairavas) -->
  <g id="ashtadala_petals" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none" stroke-linejoin="round">
${petalPaths}
  </g>
  <g id="ashtadala_spines" stroke="url(#bronzeLight)" fill="none">
${petalSpines}
  </g>
  <g id="ashtadala_names">
${petalTexts}
  </g>

  <!-- 4. Inner Concentric Girdle -->
  <g id="inner_girdle" stroke="url(#bronzeMain)" fill="none">
    <circle cx="500" cy="500" r="285" stroke-width="2.6" />
    <circle cx="500" cy="500" r="270" stroke-width="1.8" />
    <circle cx="500" cy="500" r="250" stroke-width="2.2" />
  </g>

  <!-- 5. Dynamic Hexagram (Apad-Nivarana Shatkona) -->
  <g id="shatkona" stroke="url(#bronzeMain)" stroke-width="2.8" fill="none" stroke-linejoin="round">
    <path d="${upTri}" />
    <path d="${downTri}" />
  </g>

  <!-- Hexagram Vertex Protective Seed Characters -->
  <g font-family="'Noto Sans Devanagari', 'Sanskrit Text', serif" font-size="18" font-weight="bold" fill="#1A0E05" text-anchor="middle">
    <text x="500" y="305">ॐ</text>
    <text x="665" y="405">ह्रीं</text>
    <text x="665" y="595">बं</text>
    <text x="500" y="700">बटुकाय</text>
    <text x="335" y="595">आपदुद्धारणाय</text>
    <text x="335" y="405">स्वाहा</text>
  </g>

  <!-- 6. Inner Sacred Inverted Triangle (त्रिकोण) -->
  <g id="inner_trikona" stroke="url(#bronzeMain)" stroke-width="2.6" fill="rgba(180,83,9,0.04)" stroke-linejoin="round">
    <path d="${inTri}" />
  </g>

  <!-- Inner Triangle Vertex Seeds -->
  <g font-family="'Noto Sans Devanagari', 'Sanskrit Text', serif" font-size="16" font-weight="bold" fill="#1A0E05" text-anchor="middle">
    <text x="430" y="465">ह्रीं</text>
    <text x="570" y="465">क्लीं</text>
    <text x="500" y="585">ह्रूं</text>
  </g>

  <!-- 7. Central Fiery Aura & Bindu -->
  <circle cx="500" cy="500" r="45" fill="url(#fieryBhairavaGlow)" />
  <circle cx="500" cy="500" r="16" fill="url(#binduGoldGlow)" stroke="url(#bronzeMain)" stroke-width="2" />
  <circle cx="500" cy="500" r="4.5" fill="#1A0E05" />

  <!-- Center Mahabeeja & Title -->
  <text x="500" y="506" font-family="'Noto Sans Devanagari', 'Sanskrit Text', serif" font-size="17" font-weight="bold" fill="#1A0E05" text-anchor="middle">ह्रीं</text>

  <text x="500" y="875" font-family="'Noto Sans Devanagari', 'Sanskrit Text', serif" font-size="18" font-weight="bold" fill="#1A0E05" text-anchor="middle" letter-spacing="1">॥ श्री आपदुद्धारक बटुक भैरव यन्त्रम् ॥</text>
  <text x="500" y="902" font-family="'Cinzel', serif" font-size="12" font-weight="bold" fill="#3E1E07" text-anchor="middle" letter-spacing="2">OM HREEM BATUKAYA APADUDDHARANAYA SWAHA</text>
</svg>`;
}

// -------------------------------------------------------------
// 2. KAAL BHAIRAVA YANTRA (श्री काल भैरव यन्त्रम्)
// -------------------------------------------------------------
function generateKaalBhairavaSvg() {
  const outerPetals = generateOgeePetals(16, 320, 385, 500, 500);
  const innerPetals = generateOgeePetals(8, 220, 310, 500, 500);

  let p16Paths = '';
  outerPetals.forEach(p => {
    p16Paths += `    <path d="${p.pathD}" />\n`;
  });

  let p8Paths = '';
  let p8Spines = '';
  let p8Texts = '';

  const ashtaBhairavas = ['असिताङ्ग', 'रुरु', 'चण्ड', 'क्रोध', 'उन्मत्त', 'कपाली', 'भीषण', 'संहार'];

  innerPetals.forEach((p, idx) => {
    p8Paths += `    <path d="${p.pathD}" />\n`;
    p8Spines += `    <path d="${p.spineD}" stroke-width="1.8" stroke-dasharray="3,3" />\n`;
    const labelRad = 265;
    const toRad = (deg) => (deg * Math.PI) / 180;
    const lx = 500 + labelRad * Math.sin(toRad(p.midDeg));
    const ly = 500 - labelRad * Math.cos(toRad(p.midDeg)) + 4;
    p8Texts += `    <text x="${lx.toFixed(1)}" y="${ly.toFixed(1)}" font-family="'Noto Sans Devanagari', 'Sanskrit Text', serif" font-size="13" font-weight="bold" fill="#1A0E05" text-anchor="middle">${ashtaBhairavas[idx]}</text>\n`;
  });

  // Dynamic Double Hexagram (Ashtakona / Kaalachakra Star of 8 Points) - Radii 190
  const starPoints1 = [];
  const starPoints2 = [];
  for (let k = 0; k < 8; k++) {
    const angle = (k * 45 * Math.PI) / 180;
    const rOuter = 190;
    const rInner = 100;
    const midAngle = ((k * 45 + 22.5) * Math.PI) / 180;
    starPoints1.push(`${(500 + rOuter * Math.sin(angle)).toFixed(1)},${(500 - rOuter * Math.cos(angle)).toFixed(1)}`);
    starPoints1.push(`${(500 + rInner * Math.sin(midAngle)).toFixed(1)},${(500 - rInner * Math.cos(midAngle)).toFixed(1)}`);
  }
  const octagramD = `M ${starPoints1.join(' L ')} Z`;

  // Central Inverted Dissolution Triangle (प्रलय त्रिकोण) - Radii 80
  const inTri = `M 500 ${500 + 80} L ${500 + 80 * Math.sin(Math.PI/3)} ${500 - 80 * Math.cos(Math.PI/3)} L ${500 + 80 * Math.sin(Math.PI*5/3)} ${500 - 80 * Math.cos(Math.PI*5/3)} Z`;

  // Cardinal Tridents on Bhupura
  const tridents = `
    <!-- Cardinal Tridents (अष्टदिक्पाल रक्षक त्रिशूल) -->
    <!-- North -->
    <path d="M 500 20 L 500 45 M 488 28 C 488 38 512 38 512 28 M 488 28 L 488 22 M 512 28 L 512 22" stroke="url(#bronzeMain)" stroke-width="2.2" fill="none" />
    <!-- South -->
    <path d="M 500 980 L 500 955 M 488 972 C 488 962 512 962 512 972 M 488 972 L 488 978 M 512 972 L 512 978" stroke="url(#bronzeMain)" stroke-width="2.2" fill="none" />
    <!-- East -->
    <path d="M 980 500 L 955 500 M 972 488 C 962 488 962 512 972 512 M 972 488 L 978 488 M 972 512 L 978 512" stroke="url(#bronzeMain)" stroke-width="2.2" fill="none" />
    <!-- West -->
    <path d="M 20 500 L 45 500 M 28 488 C 38 488 38 512 28 512 M 28 488 L 22 488 M 28 512 L 22 512" stroke="url(#bronzeMain)" stroke-width="2.2" fill="none" />
  `;

  return `${getSvgHeader('Kaal Bhairava Yantra')}
  ${renderBhupura()}
  ${tridents}
  ${renderTrivalaya(415, 400, 385)}

  <!-- 3. Shodashadala Mandala (16 Lotus Petals of Cosmic Time) -->
  <g id="shodasha_petals" stroke="url(#bronzeMain)" stroke-width="2.2" fill="none" stroke-linejoin="round">
${p16Paths}
  </g>

  <!-- 4. Intermediate Girdle -->
  <circle cx="500" cy="500" r="320" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />
  <circle cx="500" cy="500" r="310" stroke="url(#bronzeMain)" stroke-width="1.8" fill="none" />

  <!-- 5. Ashtadala Padma (8-Petal Ogee Lotus of the Ashta Bhairavas) -->
  <g id="ashtadala_petals" stroke="url(#bronzeMain)" stroke-width="2.6" fill="rgba(153,27,27,0.03)" stroke-linejoin="round">
${p8Paths}
  </g>
  <g id="ashtadala_spines" stroke="url(#bronzeLight)" fill="none">
${p8Spines}
  </g>
  <g id="ashtadala_names">
${p8Texts}
  </g>

  <!-- 6. Inner Girdle -->
  <circle cx="500" cy="500" r="220" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none" />
  <circle cx="500" cy="500" r="205" stroke="url(#bronzeMain)" stroke-width="1.8" fill="none" />

  <!-- 7. Dynamic Ashta-Kona / Kaalachakra Octagram Star of Dissolution -->
  <g id="kaalachakra_star" stroke="url(#bronzeMain)" stroke-width="2.8" fill="rgba(180,83,9,0.05)" stroke-linejoin="round">
    <path d="${octagramD}" />
  </g>

  <!-- Star Rays Protective Seeds -->
  <g font-family="'Noto Sans Devanagari', 'Sanskrit Text', serif" font-size="14" font-weight="bold" fill="#1A0E05" text-anchor="middle">
    <text x="500" y="335">भ्रं</text>
    <text x="615" y="380">काल</text>
    <text x="665" y="505">भैरवाय</text>
    <text x="615" y="630">नमः</text>
    <text x="500" y="675">हुं</text>
    <text x="385" y="630">फट्</text>
    <text x="335" y="505">स्वाहा</text>
    <text x="385" y="380">ॐ</text>
  </g>

  <!-- 8. Central Dissolution Inverted Triangle -->
  <g id="central_trikona" stroke="url(#bronzeMain)" stroke-width="2.6" fill="rgba(153,27,27,0.08)" stroke-linejoin="round">
    <path d="${inTri}" />
  </g>

  <!-- 9. Central Fierce Singularity & Mahabeeja -->
  <circle cx="500" cy="500" r="48" fill="url(#fieryBhairavaGlow)" />
  <circle cx="500" cy="500" r="16" fill="url(#binduGoldGlow)" stroke="url(#bronzeMain)" stroke-width="2" />
  <circle cx="500" cy="500" r="4.5" fill="#1A0E05" />

  <!-- Center Mahabeeja 'भ्रं' -->
  <text x="500" y="506" font-family="'Noto Sans Devanagari', 'Sanskrit Text', serif" font-size="18" font-weight="bold" fill="#1A0E05" text-anchor="middle">भ्रं</text>

  <text x="500" y="875" font-family="'Noto Sans Devanagari', 'Sanskrit Text', serif" font-size="18" font-weight="bold" fill="#1A0E05" text-anchor="middle" letter-spacing="1">॥ श्री काल भैरव यन्त्रम् ॥</text>
  <text x="500" y="902" font-family="'Cinzel', serif" font-size="12" font-weight="bold" fill="#3E1E07" text-anchor="middle" letter-spacing="2">OM BHRAM KAALABHAIRAVAYA NAMAHA</text>
</svg>`;
}

// Write files
const publicDir = path.join(__dirname, '../public/yantras');
const shivaDir = path.join(publicDir, '05_Shiva');
const tantricDir = path.join(publicDir, '17_Tantric');

if (!fs.existsSync(shivaDir)) fs.mkdirSync(shivaDir, { recursive: true });
if (!fs.existsSync(tantricDir)) fs.mkdirSync(tantricDir, { recursive: true });

const batukaSvg = generateBatukaBhairavaSvg();
fs.writeFileSync(path.join(publicDir, 'batuka_bhairava_yantra.svg'), batukaSvg, 'utf8');
fs.writeFileSync(path.join(shivaDir, 'batuka_bhairava_yantra.svg'), batukaSvg, 'utf8');
fs.writeFileSync(path.join(tantricDir, 'batuka_bhairava_yantra.svg'), batukaSvg, 'utf8');
console.log('Saved batuka_bhairava_yantra.svg');

const kaalSvg = generateKaalBhairavaSvg();
fs.writeFileSync(path.join(publicDir, 'kaal_bhairava_yantra.svg'), kaalSvg, 'utf8');
fs.writeFileSync(path.join(shivaDir, 'kaal_bhairava_yantra.svg'), kaalSvg, 'utf8');
fs.writeFileSync(path.join(tantricDir, 'kaal_bhairava_yantra.svg'), kaalSvg, 'utf8');
console.log('Saved kaal_bhairava_yantra.svg');
