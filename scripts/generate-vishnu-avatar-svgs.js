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
    <radialGradient id="vaishnavaAura" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#D97706" stop-opacity="0.25" />
      <stop offset="50%" stop-color="#2563EB" stop-opacity="0.12" />
      <stop offset="100%" stop-color="#1A0E05" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="narasimhaFireAura" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#DC2626" stop-opacity="0.35" />
      <stop offset="50%" stop-color="#EA580C" stop-opacity="0.20" />
      <stop offset="100%" stop-color="#7F1D1D" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="varahaEarthAura" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#059669" stop-opacity="0.25" />
      <stop offset="50%" stop-color="#B45309" stop-opacity="0.18" />
      <stop offset="100%" stop-color="#1A0E05" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="ramaSolarAura" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#F59E0B" stop-opacity="0.30" />
      <stop offset="50%" stop-color="#D97706" stop-opacity="0.15" />
      <stop offset="100%" stop-color="#78350F" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="goldBinduGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FBBF24" stop-opacity="0.8" />
      <stop offset="50%" stop-color="#D97706" stop-opacity="0.4" />
      <stop offset="100%" stop-color="#B45309" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="rubyBinduGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#EF4444" stop-opacity="0.8" />
      <stop offset="50%" stop-color="#B91C1C" stop-opacity="0.4" />
      <stop offset="100%" stop-color="#7F1D1D" stop-opacity="0" />
    </radialGradient>
    <filter id="sacredShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#1A0E05" flood-opacity="0.25" />
    </filter>
  </defs>`;
}

// 1. SRI VISHNU YANTRA (NARAYANA YANTRA)
function generateVishnuYantra() {
  const toRad = deg => (deg * Math.PI) / 180;
  const petals12 = generateOgeePetals(12, 265, 385);
  const petals8 = generateOgeePetals(8, 155, 255);

  // 12 Dvadasakshara Syllables: ॐ नमो भगवते वासुदेवाय
  const syllables12 = ['ॐ', 'न', 'मो', 'भ', 'ग', 'व', 'ते', 'वा', 'सु', 'दे', 'वा', 'य'];
  // 8 Ashtakshara Syllables: ॐ नमो नारायणाय
  const syllables8 = ['ॐ', 'न', 'मो', 'ना', 'रा', 'य', 'णा', 'य'];

  // Hexagram coordinates inscribed in circle radius 148
  const rHex = 148;
  const tri1Points = [0, 120, 240].map(deg => {
    const x = 500 + rHex * Math.sin(toRad(deg));
    const y = 500 - rHex * Math.cos(toRad(deg));
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');

  const tri2Points = [180, 300, 60].map(deg => {
    const x = 500 + rHex * Math.sin(toRad(deg));
    const y = 500 - rHex * Math.cos(toRad(deg));
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');

  // 8 Sudarshana Wheel Spokes
  const spokes8 = [0, 45, 90, 135, 180, 225, 270, 315].map(deg => {
    const x1 = 500 + 46 * Math.sin(toRad(deg));
    const y1 = 500 - 46 * Math.cos(toRad(deg));
    const x2 = 500 + 82 * Math.sin(toRad(deg));
    const y2 = 500 - 82 * Math.cos(toRad(deg));
    return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke-width="2.2" />`;
  }).join('\n    ');

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%">
  ${renderDefs()}
  <rect width="1000" height="1000" fill="url(#sacredBg)" />
  <circle cx="500" cy="500" r="480" fill="url(#vaishnavaAura)" />
  ${renderBhupura()}
  ${renderTrivalaya(415, 400, 385)}

  <!-- 3. Dvadasadala Ogee Lotus Petals (द्वादशदल पद्म - द्वादशाक्षर वासुदेव मण्डल) -->
  <g id="dvadasadala_petals" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none">
    ${petals12.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals12.map(p => `<path d="${p.spineD}" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.75" />`).join('\n    ')}
  </g>

  <!-- 12 Dvadasakshara Inscriptions (ॐ नमो भगवते वासुदेवाय) -->
  <g id="dvadasakshara_mantra" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="19" fill="#1A0E05" text-anchor="middle" dominant-baseline="central">
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

  <!-- 4. Ashtadala Ogee Lotus Petals (अष्टदल पद्म - अष्टाक्षर नारायण मण्डल) -->
  <g id="ashtadala_petals" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none">
    ${petals8.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals8.map(p => `<path d="${p.spineD}" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.75" />`).join('\n    ')}
  </g>

  <!-- 8 Ashtakshara Inscriptions (ॐ नमो नारायणाय) -->
  <g id="ashtakshara_mantra" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="20" fill="#2E1405" text-anchor="middle" dominant-baseline="central">
    ${petals8.map((p, idx) => {
      const rM = 205;
      const x = 500 + rM * Math.sin(toRad(p.midDeg));
      const y = 500 - rM * Math.cos(toRad(p.midDeg));
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}">${syllables8[idx]}</text>`;
    }).join('\n    ')}
  </g>

  <!-- Inner Boundary Rings -->
  <circle cx="500" cy="500" r="155" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />
  <circle cx="500" cy="500" r="148" stroke="url(#bronzeMain)" stroke-width="1.5" fill="none" />

  <!-- 5. Vaishnava Hexagram (वैष्णव षट्कोण - पुरुष-प्रकृति सङ्गम) -->
  <g id="vaishnava_shatkona" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none" stroke-linejoin="round">
    <polygon points="${tri1Points}" />
    <polygon points="${tri2Points}" />
  </g>

  <!-- Hexagram Vertex Vaishnava Beejaksharas -->
  <g id="shatkona_beejas" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="15" fill="#78350F" text-anchor="middle" dominant-baseline="central">
    <text x="500" y="380">ॐ</text>
    <text x="605" y="440">क्लीं</text>
    <text x="605" y="560">श्रीं</text>
    <text x="500" y="620">ह्रीं</text>
    <text x="395" y="560">विष्णवे</text>
    <text x="395" y="440">नमः</text>
  </g>

  <!-- 6. Sudarshana Whirling Wheel & Inner Rings -->
  <g id="sudarshana_wheel" stroke="url(#bronzeMain)" fill="none">
    <circle cx="500" cy="500" r="82" stroke-width="2.2" />
    <circle cx="500" cy="500" r="46" stroke-width="2.0" />
    ${spokes8}
  </g>

  <!-- 7. Central Radiant Narayana Parama Bindu Sanctuary -->
  <circle cx="500" cy="500" r="46" fill="url(#goldBinduGlow)" />
  <circle cx="500" cy="500" r="38" fill="#FDFBF7" stroke="url(#bronzeMain)" stroke-width="2.4" />
  <text x="500" y="492" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="13" fill="#78350F" text-anchor="middle" dominant-baseline="central">ॐ विष्णवे</text>
  <text x="500" y="509" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="13" fill="#78350F" text-anchor="middle" dominant-baseline="central">नमः</text>
  <circle cx="500" cy="500" r="4" fill="#B45309" />
</svg>`;
}

// 2. SRI NARASIMHA KAVACHA YANTRA
function generateNarasimhaYantra() {
  const toRad = deg => (deg * Math.PI) / 180;
  const petals8 = generateOgeePetals(8, 200, 320);

  // 16 Blazing Solar Fire Spikes (षोडश ज्वाला मण्डल)
  const flames16 = [];
  for (let i = 0; i < 16; i++) {
    const midDeg = i * 22.5;
    const startDeg = midDeg - 11.25;
    const endDeg = midDeg + 11.25;

    const rBase = 345;
    const rTip = 388;
    const x1 = 500 + rBase * Math.sin(toRad(startDeg));
    const y1 = 500 - rBase * Math.cos(toRad(startDeg));
    const x2 = 500 + rBase * Math.sin(toRad(endDeg));
    const y2 = 500 - rBase * Math.cos(toRad(endDeg));
    const tx = 500 + rTip * Math.sin(toRad(midDeg));
    const ty = 500 - rTip * Math.cos(toRad(midDeg));

    // Flame curve
    flames16.push(`M ${x1.toFixed(1)} ${y1.toFixed(1)} Q ${500 + 360 * Math.sin(toRad(midDeg - 5))} ${500 - 360 * Math.cos(toRad(midDeg - 5))} ${tx.toFixed(1)} ${ty.toFixed(1)} Q ${500 + 360 * Math.sin(toRad(midDeg + 5))} ${500 - 360 * Math.cos(toRad(midDeg + 5))} ${x2.toFixed(1)} ${y2.toFixed(1)}`);
  }

  // 8 Anushtup Maha Mantra Words
  const anushtupWords = ['उग्रं', 'वीरं', 'महाविष्णुं', 'ज्वलन्तं', 'सर्वतोमुखम्', 'नृसिंहं', 'भीषणं', 'भद्रम्'];

  // Hexagram coordinates radius 180
  const rHex = 180;
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

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%">
  ${renderDefs()}
  <rect width="1000" height="1000" fill="url(#sacredBg)" />
  <circle cx="500" cy="500" r="480" fill="url(#narasimhaFireAura)" />
  ${renderBhupura()}

  <!-- 2. Shodasha Jwala Mandala (षोडश ज्वाला मण्डल - १६ रौद्र अग्निशिखा) -->
  <g id="shodasha_jwala" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" stroke-linejoin="round">
    ${flames16.map(d => `<path d="${d}" />`).join('\n    ')}
  </g>

  ${renderTrivalaya(345, 335, 325)}

  <!-- 3. Ashtadala Narasimha Lotus (अष्टदल नृसिंह पद्म - अनुष्टुप् महामन्त्र मण्डल) -->
  <g id="ashtadala_petals" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none">
    ${petals8.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals8.map(p => `<path d="${p.spineD}" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.75" />`).join('\n    ')}
  </g>

  <!-- 8 Anushtup Mantra Inscriptions (उग्रं वीरं महाविष्णुं...) -->
  <g id="anushtup_inscriptions" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="18" fill="#1A0E05" text-anchor="middle" dominant-baseline="central">
    ${petals8.map((p, idx) => {
      const rM = 260;
      const x = 500 + rM * Math.sin(toRad(p.midDeg));
      const y = 500 - rM * Math.cos(toRad(p.midDeg));
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}">${anushtupWords[idx]}</text>`;
    }).join('\n    ')}
  </g>

  <!-- Intermediate Girdles -->
  <circle cx="500" cy="500" r="200" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />
  <circle cx="500" cy="500" r="185" stroke="url(#bronzeMain)" stroke-width="1.5" fill="none" />

  <!-- 4. Ugra Narasimha Hexagram (उग्र षट्कोण - नख-दंष्ट्रा रक्षक मण्डल) -->
  <g id="ugra_shatkona" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none" stroke-linejoin="round">
    <polygon points="${triUp}" />
    <polygon points="${triDown}" />
  </g>

  <!-- Hexagram Inscriptions: मृत्युर्मृत्युं नमाम्यहम् -->
  <g id="shatkona_texts" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="14.5" fill="#7F1D1D" text-anchor="middle" dominant-baseline="central">
    <text x="500" y="345">मृत्युर्मृत्युं</text>
    <text x="635" y="420">वज्रनखाय</text>
    <text x="635" y="580">विद्महे</text>
    <text x="500" y="655">नमाम्यहम्</text>
    <text x="365" y="580">धीमहि</text>
    <text x="365" y="420">तीक्ष्णदंष्ट्राय</text>
  </g>

  <!-- Inner Protective Ring & Inverted Triangle -->
  <circle cx="500" cy="500" r="88" stroke="url(#bronzeMain)" stroke-width="2.2" fill="none" />
  <polygon points="500,580 430,460 570,460" stroke="url(#bronzeMain)" stroke-width="2.0" fill="none" />

  <!-- 5. Fierce Blazing Narasimha Maha Bindu (क्ष्रौं महाबीज) -->
  <circle cx="500" cy="500" r="46" fill="url(#rubyBinduGlow)" />
  <circle cx="500" cy="500" r="38" fill="#FDF8F6" stroke="url(#bronzeMain)" stroke-width="2.6" />
  <text x="500" y="502" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="28" fill="#991B1B" text-anchor="middle" dominant-baseline="central">क्ष्रौं</text>
  <circle cx="500" cy="500" r="4.5" fill="#7F1D1D" />
</svg>`;
}

// 3. SRI VARAHA YANTRA (BHOO-VARAHA YANTRA)
function generateVarahaYantra() {
  const toRad = deg => (deg * Math.PI) / 180;
  const petals12 = generateOgeePetals(12, 265, 385);
  const petals8 = generateOgeePetals(8, 160, 255);

  // 12 Varaha Mantra Syllables: ॐ नमो भगवते वराहाय स्वाहा
  const syllables12 = ['ॐ', 'न', 'मो', 'भ', 'ग', 'व', 'ते', 'व', 'रा', 'हा', 'य', 'स्वाहा'];
  // 8 Prithvi Beejaksharas: लं धरां भूः स्थिरा अचला क्षिति वसुधा धरा
  const syllables8 = ['लं', 'धरां', 'भूः', 'स्थिरा', 'अचला', 'क्षिति', 'वसुधा', 'धरा'];

  // 8 Directional Boar Tusk Curves (दंष्ट्रा - Lifting Earth)
  const tuskCurves = [];
  for (let i = 0; i < 8; i++) {
    const deg = i * 45;
    const x1 = 500 + 70 * Math.sin(toRad(deg));
    const y1 = 500 - 70 * Math.cos(toRad(deg));
    const x2 = 500 + 130 * Math.sin(toRad(deg + 25));
    const y2 = 500 - 130 * Math.cos(toRad(deg + 25));
    tuskCurves.push(`<path d="M ${x1.toFixed(1)} ${y1.toFixed(1)} Q ${500 + 110 * Math.sin(toRad(deg - 10))} ${500 - 110 * Math.cos(toRad(deg - 10))} ${x2.toFixed(1)} ${y2.toFixed(1)}" stroke-width="2.2" />`);
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%">
  ${renderDefs()}
  <rect width="1000" height="1000" fill="url(#sacredBg)" />
  <circle cx="500" cy="500" r="480" fill="url(#varahaEarthAura)" />
  ${renderBhupura()}
  ${renderTrivalaya(415, 400, 385)}

  <!-- 3. Dvadasadala Lotus (द्वादशदल पद्म - भू-उद्धारक वराह मन्त्र मण्डल) -->
  <g id="dvadasadala_petals" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none">
    ${petals12.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals12.map(p => `<path d="${p.spineD}" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.75" />`).join('\n    ')}
  </g>

  <!-- 12 Petal Inscriptions (ॐ नमो भगवते वराहाय स्वाहा) -->
  <g id="dvadasa_inscriptions" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="17" fill="#1A0E05" text-anchor="middle" dominant-baseline="central">
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

  <!-- 4. Ashtadala Prithvi Lotus (अष्टदल पद्म - पृथ्वी स्थिरीकरण मण्डल) -->
  <g id="ashtadala_petals" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none">
    ${petals8.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals8.map(p => `<path d="${p.spineD}" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.75" />`).join('\n    ')}
  </g>

  <!-- 8 Prithvi Seed Inscriptions (लं धरां भूः स्थिरा...) -->
  <g id="ashta_prithvi_beejas" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="19" fill="#1A0E05" text-anchor="middle" dominant-baseline="central">
    ${petals8.map((p, idx) => {
      const rM = 205;
      const x = 500 + rM * Math.sin(toRad(p.midDeg));
      const y = 500 - rM * Math.cos(toRad(p.midDeg));
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}">${syllables8[idx]}</text>`;
    }).join('\n    ')}
  </g>

  <!-- Inner Rings -->
  <circle cx="500" cy="500" r="160" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />
  <circle cx="500" cy="500" r="150" stroke="url(#bronzeMain)" stroke-width="1.5" fill="none" />

  <!-- 5. Prithvi Octagram & Boar Tusk Matrix (यज्ञवराह चक्र एवं पाञ्चजन्य चक्र) -->
  <g id="prithvi_octagram" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none">
    <!-- Square 1 -->
    <rect x="400" y="400" width="200" height="200" />
    <!-- Square 2 (Rotated 45 deg) -->
    <rect x="400" y="400" width="200" height="200" transform="rotate(45 500 500)" />
  </g>

  <!-- Boar Tusks lifting the Earth -->
  <g id="boar_tusks" stroke="url(#bronzeMain)" fill="none">
    ${tuskCurves.join('\n    ')}
  </g>

  <!-- 6. Central Bhudevi-Varaha Parama Bindu Sanctuary -->
  <circle cx="500" cy="500" r="46" fill="url(#goldBinduGlow)" />
  <circle cx="500" cy="500" r="38" fill="#FDFBF7" stroke="url(#bronzeMain)" stroke-width="2.4" />
  <text x="500" y="492" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="13" fill="#78350F" text-anchor="middle" dominant-baseline="central">ॐ वराहाय</text>
  <text x="500" y="509" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="13" fill="#78350F" text-anchor="middle" dominant-baseline="central">ह्रीं भूं</text>
  <circle cx="500" cy="500" r="4" fill="#047857" />
</svg>`;
}

// 4. SRI RAMA YANTRA (RAMA RAKSHA YANTRA)
function generateRamaYantra() {
  const toRad = deg => (deg * Math.PI) / 180;
  const petals16 = generateOgeePetals(16, 275, 385);
  const petals8 = generateOgeePetals(8, 165, 265);

  // 16 Syllables of Rama Mahamantra
  const syllables16 = ['ह', 'रे', 'रा', 'म', 'ह', 'रे', 'रा', 'म', 'रा', 'म', 'रा', 'म', 'ह', 'रे', 'ह', 'रे'];
  // 8 Rama Parivara Deities
  const parivara8 = ['सीता', 'लक्ष्मण', 'भरत', 'शत्रुघ्न', 'हनुमान्', 'सुग्रीव', 'विभीषण', 'अङ्गद'];

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

  // 4 Kodanda Bow Arcs at 4 quadrants
  const kodandaArcs = [
    `<path d="M 435 435 Q 410 500 435 565" stroke-width="2.4" />`,
    `<path d="M 565 435 Q 590 500 565 565" stroke-width="2.4" />`,
    `<path d="M 435 435 Q 500 410 565 435" stroke-width="2.4" />`,
    `<path d="M 435 565 Q 500 590 565 565" stroke-width="2.4" />`
  ].join('\n    ');

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%">
  ${renderDefs()}
  <rect width="1000" height="1000" fill="url(#sacredBg)" />
  <circle cx="500" cy="500" r="480" fill="url(#ramaSolarAura)" />
  ${renderBhupura()}
  ${renderTrivalaya(415, 400, 385)}

  <!-- 3. Shodashadala Ogee Lotus Petals (षोडशदल पद्म - १६ तारक महामन्त्र मण्डल) -->
  <g id="shodashadala_petals" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none">
    ${petals16.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals16.map(p => `<path d="${p.spineD}" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.75" />`).join('\n    ')}
  </g>

  <!-- 16 Taraka Aksharas (हरे राम हरे राम राम राम हरे हरे) -->
  <g id="taraka_syllables" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="18" fill="#1A0E05" text-anchor="middle" dominant-baseline="central">
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

  <!-- 4. Ashtadala Rama-Parivara Lotus (अष्टदल पद्म - सीता-लक्ष्मण-हनुमान मण्डल) -->
  <g id="ashtadala_petals" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none">
    ${petals8.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals8.map(p => `<path d="${p.spineD}" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.75" />`).join('\n    ')}
  </g>

  <!-- 8 Parivara Names (सीता लक्ष्मण भरत शत्रुघ्न हनुमान...) -->
  <g id="parivara_names" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="16" fill="#2E1405" text-anchor="middle" dominant-baseline="central">
    ${petals8.map((p, idx) => {
      const rM = 215;
      const x = 500 + rM * Math.sin(toRad(p.midDeg));
      const y = 500 - rM * Math.cos(toRad(p.midDeg));
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}">${parivara8[idx]}</text>`;
    }).join('\n    ')}
  </g>

  <!-- Inner Rings -->
  <circle cx="500" cy="500" r="165" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />
  <circle cx="500" cy="500" r="155" stroke="url(#bronzeMain)" stroke-width="1.5" fill="none" />

  <!-- 5. Kodanda Shatkona & Bow-Matrix (कोदण्ड धनुष-बाण मण्डल व षट्कोण) -->
  <g id="kodanda_shatkona" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none" stroke-linejoin="round">
    <polygon points="${triUp}" />
    <polygon points="${triDown}" />
  </g>

  <!-- Kodanda Bow Elements -->
  <g id="kodanda_bows" stroke="url(#bronzeMain)" fill="none">
    ${kodandaArcs}
  </g>

  <!-- Hexagram Vertex Inscriptions: रां रामाय नमः -->
  <g id="shatkona_rama_texts" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="14.5" fill="#78350F" text-anchor="middle" dominant-baseline="central">
    <text x="500" y="380">रां</text>
    <text x="610" y="440">रामाय</text>
    <text x="610" y="560">नमः</text>
    <text x="500" y="620">रघुनाथाय</text>
    <text x="390" y="560">सीता</text>
    <text x="390" y="440">पतये</text>
  </g>

  <!-- Inner Dharmic Victory Triangle -->
  <polygon points="500,430 440,535 560,535" stroke="url(#bronzeMain)" stroke-width="2.0" fill="none" />

  <!-- 6. Supreme Taraka Parama Bindu (रां महाबीज) -->
  <circle cx="500" cy="500" r="46" fill="url(#goldBinduGlow)" />
  <circle cx="500" cy="500" r="38" fill="#FDFBF7" stroke="url(#bronzeMain)" stroke-width="2.6" />
  <text x="500" y="503" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="30" fill="#9A3412" text-anchor="middle" dominant-baseline="central">रां</text>
  <circle cx="500" cy="500" r="4.5" fill="#C2410C" />
</svg>`;
}

// Generate and write all files
const targets = [
  {
    id: 'vishnu_yantra',
    generator: generateVishnuYantra,
    dirs: [
      'public/yantras',
      'public/yantras/10_Vishnu'
    ]
  },
  {
    id: 'narasimha_yantra',
    generator: generateNarasimhaYantra,
    dirs: [
      'public/yantras',
      'public/yantras/10_Vishnu',
      'public/yantras/15_AvatarYantras'
    ]
  },
  {
    id: 'varaha_yantra',
    generator: generateVarahaYantra,
    dirs: [
      'public/yantras',
      'public/yantras/10_Vishnu',
      'public/yantras/15_AvatarYantras'
    ]
  },
  {
    id: 'rama_yantra',
    generator: generateRamaYantra,
    dirs: [
      'public/yantras',
      'public/yantras/10_Vishnu',
      'public/yantras/15_AvatarYantras'
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
