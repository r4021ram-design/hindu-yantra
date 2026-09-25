const fs = require('fs');
const path = require('path');

// Canonical Ogee Petal Algorithm
function generateOgeePetals(n, rBase, rTip, cx = 500, cy = 500) {
  const step = 360 / n;
  const halfStep = step / 2;
  const toRad = (deg) => (deg * Math.PI) / 180;
  const petals = [];

  for (let i = 0; i < n; i++) {
    const midDeg = i * step; // North-centered
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
function renderTrivalaya(r1 = 410, r2 = 396, r3 = 382, strokeId = 'bronzeMain') {
  return `
  <!-- 2. Concentric Girdles (Trivalaya) -->
  <g id="trivalaya" stroke="url(#${strokeId})" fill="none">
    <circle cx="500" cy="500" r="${r1}" stroke-width="2.8" />
    <circle cx="500" cy="500" r="${r2}" stroke-width="1.8" />
    <circle cx="500" cy="500" r="${r3}" stroke-width="2.4" />
  </g>`;
}

// Canonical Shared Defs for Dark Consecrated Antique Bronze Aesthetics
function renderDefs() {
  return `
  <defs>
    <!-- Deep Consecrated Antique Bronze Gradients -->
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
    <filter id="sacredShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#1A0E05" flood-opacity="0.25" />
    </filter>
  </defs>`;
}

// 1. SARASWATI YANTRA
function generateSaraswatiYantra() {
  const petals8 = generateOgeePetals(8, 250, 380);
  const petalSeeds = ['ऐं', 'ह्रीं', 'श्रीं', 'क्लीं', 'सौः', 'ऐं', 'क्लीं', 'सौः'];

  // Hexagram geometry
  const rHex = 230;
  const toRad = deg => deg * Math.PI / 180;
  const hexUp = [
    [500 + rHex * Math.sin(toRad(0)), 500 - rHex * Math.cos(toRad(0))],
    [500 + rHex * Math.sin(toRad(120)), 500 - rHex * Math.cos(toRad(120))],
    [500 + rHex * Math.sin(toRad(240)), 500 - rHex * Math.cos(toRad(240))]
  ];
  const hexDown = [
    [500 + rHex * Math.sin(toRad(180)), 500 - rHex * Math.cos(toRad(180))],
    [500 + rHex * Math.sin(toRad(300)), 500 - rHex * Math.cos(toRad(300))],
    [500 + rHex * Math.sin(toRad(60)), 500 - rHex * Math.cos(toRad(60))]
  ];

  // 6 Triangles text
  const shatkonaSeeds = ['ह्रीं', 'श्रीं', 'क्लीं', 'ऐं', 'सौः', 'ॐ'];
  const shatkonaSeedCoords = [
    { x: 500, y: 320 },
    { x: 650, y: 410 },
    { x: 650, y: 590 },
    { x: 500, y: 680 },
    { x: 350, y: 590 },
    { x: 350, y: 410 }
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%">
  ${renderDefs()}
  <rect width="1000" height="1000" fill="url(#sacredBg)" />
  ${renderBhupura()}
  ${renderTrivalaya(415, 400, 385)}

  <!-- 3. Ashta-Dala Ogee Lotus Petals (अष्टदल पद्म - वाग्देवी आवरण) -->
  <g id="ashtadala_lotus" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none">
    ${petals8.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals8.map(p => `<path d="${p.spineD}" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.7" />`).join('\n    ')}
  </g>

  <!-- Petal Beejaksharas -->
  <g id="petal_mantras" font-family="'Noto Sans Devanagari', 'Cinzel', serif" font-weight="700" font-size="24" fill="#1A0E05" text-anchor="middle" dominant-baseline="central">
    ${petals8.map((p, idx) => {
      const rM = 320;
      const x = 500 + rM * Math.sin(toRad(p.midDeg));
      const y = 500 - rM * Math.cos(toRad(p.midDeg));
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}">${petalSeeds[idx]}</text>`;
    }).join('\n    ')}
  </g>

  <!-- Intermediate Ring -->
  <circle cx="500" cy="500" r="248" stroke="url(#bronzeMain)" stroke-width="2.2" fill="none" />
  <circle cx="500" cy="500" r="236" stroke="url(#bronzeMain)" stroke-width="1.6" fill="none" />

  <!-- 4. Central Vedic Shatkona (षट्कोण - वाग्भव एवं मेधा ज्ञान चक्र) -->
  <g id="shatkona" stroke="url(#bronzeMain)" stroke-width="2.8" fill="none">
    <!-- Upward Triangle (Shiva / Divine Intellect) -->
    <polygon points="${hexUp.map(pt => pt[0].toFixed(1) + ',' + pt[1].toFixed(1)).join(' ')}" />
    <!-- Downward Triangle (Shakti / Intuitive Wisdom) -->
    <polygon points="${hexDown.map(pt => pt[0].toFixed(1) + ',' + pt[1].toFixed(1)).join(' ')}" />
  </g>

  <!-- Shatkona Kona Beejaksharas -->
  <g id="shatkona_seeds" font-family="'Noto Sans Devanagari', serif" font-weight="700" font-size="20" fill="#2E1605" text-anchor="middle" dominant-baseline="central">
    ${shatkonaSeedCoords.map((coord, i) => `<text x="${coord.x}" y="${coord.y}">${shatkonaSeeds[i]}</text>`).join('\n    ')}
  </g>

  <!-- Inner Concentric Circle -->
  <circle cx="500" cy="500" r="110" stroke="url(#bronzeMain)" stroke-width="2.2" fill="none" />
  <circle cx="500" cy="500" r="98" stroke="url(#bronzeMain)" stroke-width="1.4" stroke-dasharray="4,3" fill="none" />

  <!-- Inner Downward Triangle -->
  <polygon points="500,580 430,460 570,460" stroke="url(#bronzeMain)" stroke-width="2.2" fill="none" />

  <!-- 5. Bindu with Vagbhava Mahabeeja (ऐं) -->
  <g id="bindu_zone" filter="url(#sacredShadow)">
    <circle cx="500" cy="500" r="42" fill="url(#binduGoldGlow)" />
    <circle cx="500" cy="500" r="9" fill="#1A0E05" />
    <circle cx="500" cy="500" r="4" fill="#F4EEE0" />
    <text x="500" y="496" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="34" fill="#1A0E05" text-anchor="middle" dominant-baseline="central">ऐं</text>
  </g>
</svg>`;
}

// 2. GAYATRI YANTRA
function generateGayatriYantra() {
  const petals24 = generateOgeePetals(24, 280, 385);
  const petals8 = generateOgeePetals(8, 170, 275);
  const toRad = deg => deg * Math.PI / 180;

  // 24 Gayatri syllables
  const gayatriAksharas = [
    'तत्', 'स', 'वि', 'तुर्', 'व', 'रे', 'ण्यं', 'भर्',
    'गो', 'दे', 'व', 'स्य', 'धी', 'म', 'हि', 'धि',
    'यो', 'यो', 'नः', 'प्र', 'चो', 'द', 'यात्', 'ॐ'
  ];

  const ashtaVasuSeeds = ['ह्रीं', 'श्रीं', 'क्लीं', 'ऐं', 'सौः', 'ॐ', 'ह्रीं', 'श्रीं'];

  // Hexagram geometry
  const rHex = 160;
  const hexUp = [
    [500 + rHex * Math.sin(toRad(0)), 500 - rHex * Math.cos(toRad(0))],
    [500 + rHex * Math.sin(toRad(120)), 500 - rHex * Math.cos(toRad(120))],
    [500 + rHex * Math.sin(toRad(240)), 500 - rHex * Math.cos(toRad(240))]
  ];
  const hexDown = [
    [500 + rHex * Math.sin(toRad(180)), 500 - rHex * Math.cos(toRad(180))],
    [500 + rHex * Math.sin(toRad(300)), 500 - rHex * Math.cos(toRad(300))],
    [500 + rHex * Math.sin(toRad(60)), 500 - rHex * Math.cos(toRad(60))]
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%">
  ${renderDefs()}
  <rect width="1000" height="1000" fill="url(#sacredBg)" />
  ${renderBhupura()}
  ${renderTrivalaya(415, 400, 385)}

  <!-- 3. 24-Dala Ogee Lotus (चतुर्विंशति दल पद्म - २४ गायत्री अक्षर मण्डल) -->
  <g id="dalas_24" stroke="url(#bronzeMain)" stroke-width="2.2" fill="none">
    ${petals24.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals24.map(p => `<path d="${p.spineD}" stroke-width="1.0" stroke-dasharray="2,2" opacity="0.6" />`).join('\n    ')}
  </g>

  <!-- 24 Akshara Inscriptions -->
  <g id="gayatri_aksharas" font-family="'Noto Sans Devanagari', serif" font-weight="700" font-size="14" fill="#1A0E05" text-anchor="middle" dominant-baseline="central">
    ${petals24.map((p, idx) => {
      const rM = 335;
      const x = 500 + rM * Math.sin(toRad(p.midDeg));
      const y = 500 - rM * Math.cos(toRad(p.midDeg));
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}">${gayatriAksharas[idx]}</text>`;
    }).join('\n    ')}
  </g>

  <!-- Intermediate Girdles -->
  <circle cx="500" cy="500" r="280" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />
  <circle cx="500" cy="500" r="270" stroke="url(#bronzeMain)" stroke-width="1.6" fill="none" />

  <!-- 4. Inner Ashta-Dala Lotus (अष्टदल पद्म - अष्टवसु मण्डल) -->
  <g id="ashtadala_lotus" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none">
    ${petals8.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals8.map(p => `<path d="${p.spineD}" stroke-width="1.2" opacity="0.7" />`).join('\n    ')}
  </g>

  <!-- Ashta Dala Seeds -->
  <g id="ashta_vasu_seeds" font-family="'Noto Sans Devanagari', serif" font-weight="700" font-size="18" fill="#2E1605" text-anchor="middle" dominant-baseline="central">
    ${petals8.map((p, idx) => {
      const rM = 225;
      const x = 500 + rM * Math.sin(toRad(p.midDeg));
      const y = 500 - rM * Math.cos(toRad(p.midDeg));
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}">${ashtaVasuSeeds[idx]}</text>`;
    }).join('\n    ')}
  </g>

  <!-- Shatkona Girdle -->
  <circle cx="500" cy="500" r="168" stroke="url(#bronzeMain)" stroke-width="2.2" fill="none" />

  <!-- 5. Central Solar Hexagram (सविता षट्कोण) -->
  <g id="gayatri_shatkona" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none">
    <polygon points="${hexUp.map(pt => pt[0].toFixed(1) + ',' + pt[1].toFixed(1)).join(' ')}" />
    <polygon points="${hexDown.map(pt => pt[0].toFixed(1) + ',' + pt[1].toFixed(1)).join(' ')}" />
  </g>

  <!-- Central Solar Inverted Triangle -->
  <polygon points="500,555 450,470 550,470" stroke="url(#bronzeMain)" stroke-width="2.2" fill="none" />

  <!-- 6. Bindu with Savita Vyahriti (भूर्भुवः स्वः) -->
  <g id="bindu_zone" filter="url(#sacredShadow)">
    <circle cx="500" cy="500" r="45" fill="url(#binduGoldGlow)" />
    <circle cx="500" cy="500" r="8" fill="#1A0E05" />
    <text x="500" y="475" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="20" fill="#1A0E05" text-anchor="middle">ॐ</text>
    <text x="500" y="525" font-family="'Noto Sans Devanagari', serif" font-weight="800" font-size="14" fill="#1A0E05" text-anchor="middle">भूर्भुवः स्वः</text>
  </g>
</svg>`;
}

// 3. MEDHA DAKSHINAMURTI YANTRA
function generateDakshinamurtiYantra() {
  const petals16 = generateOgeePetals(16, 260, 385);
  const petals8 = generateOgeePetals(8, 160, 255);
  const toRad = deg => deg * Math.PI / 180;

  // 16 Kalas of Medha & Jnana
  const kalas16 = [
    'मेधा', 'प्रज्ञा', 'धी', 'धारणा', 'स्मृति', 'मति', 'शान्ति', 'विद्या',
    'तुष्टि', 'पुष्टि', 'सत्य', 'ऋत', 'ज्योति', 'अमृत', 'बोध', 'कैवल्य'
  ];

  const ashtaGuruSeeds = ['ॐ', 'नमो', 'भगवते', 'दक्षिणा', 'मूर्तये', 'मह्यं', 'मेधां', 'प्रयच्छ'];

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%">
  ${renderDefs()}
  <rect width="1000" height="1000" fill="url(#sacredBg)" />
  ${renderBhupura()}
  ${renderTrivalaya(415, 400, 385)}

  <!-- 3. Shodasha-Dala Ogee Lotus (षोडशदल पद्म - षोडश ज्ञान कला आवरण) -->
  <g id="shodasha_dala" stroke="url(#bronzeMain)" stroke-width="2.2" fill="none">
    ${petals16.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals16.map(p => `<path d="${p.spineD}" stroke-width="1.0" stroke-dasharray="3,3" opacity="0.6" />`).join('\n    ')}
  </g>

  <!-- 16 Kala Inscriptions -->
  <g id="medha_kalas" font-family="'Noto Sans Devanagari', serif" font-weight="700" font-size="13" fill="#1A0E05" text-anchor="middle" dominant-baseline="central">
    ${petals16.map((p, idx) => {
      const rM = 328;
      const x = 500 + rM * Math.sin(toRad(p.midDeg));
      const y = 500 - rM * Math.cos(toRad(p.midDeg));
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}">${kalas16[idx]}</text>`;
    }).join('\n    ')}
  </g>

  <!-- Intermediate Girdles -->
  <circle cx="500" cy="500" r="260" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />
  <circle cx="500" cy="500" r="250" stroke="url(#bronzeMain)" stroke-width="1.6" fill="none" />

  <!-- 4. Inner Ashta-Dala Lotus (अष्टदल पद्म - अष्टमूर्त्ति गुरु मण्डल) -->
  <g id="ashtadala_lotus" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none">
    ${petals8.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals8.map(p => `<path d="${p.spineD}" stroke-width="1.2" opacity="0.7" />`).join('\n    ')}
  </g>

  <!-- Ashta Dala Seeds -->
  <g id="ashta_guru_seeds" font-family="'Noto Sans Devanagari', serif" font-weight="700" font-size="16" fill="#2E1605" text-anchor="middle" dominant-baseline="central">
    ${petals8.map((p, idx) => {
      const rM = 205;
      const x = 500 + rM * Math.sin(toRad(p.midDeg));
      const y = 500 - rM * Math.cos(toRad(p.midDeg));
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}">${ashtaGuruSeeds[idx]}</text>`;
    }).join('\n    ')}
  </g>

  <!-- Inner Guru Circle -->
  <circle cx="500" cy="500" r="158" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />
  <circle cx="500" cy="500" r="148" stroke="url(#bronzeMain)" stroke-width="1.4" stroke-dasharray="4,3" fill="none" />

  <!-- 5. Central Inverted Triangle of Divine Silence (मौनव्याख्यान त्रिकोण) -->
  <polygon points="500,610 405,445 595,445" stroke="url(#bronzeMain)" stroke-width="2.8" fill="none" />
  <polygon points="500,590 425,460 575,460" stroke="url(#bronzeMain)" stroke-width="1.4" stroke-dasharray="3,3" fill="none" />

  <!-- 6. Bindu with Dakshinamurti Mahabeeja (ह्सौं) -->
  <g id="bindu_zone" filter="url(#sacredShadow)">
    <circle cx="500" cy="500" r="45" fill="url(#binduGoldGlow)" />
    <circle cx="500" cy="500" r="8" fill="#1A0E05" />
    <circle cx="500" cy="500" r="3.5" fill="#F4EEE0" />
    <text x="500" y="475" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="28" fill="#1A0E05" text-anchor="middle">ॐ</text>
    <text x="500" y="528" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="22" fill="#1A0E05" text-anchor="middle">ह्सौं</text>
  </g>
</svg>`;
}

// 4. HAYAGRIVA YANTRA
function generateHayagrivaYantra() {
  const petals12 = generateOgeePetals(12, 260, 385);
  const petals8 = generateOgeePetals(8, 160, 255);
  const toRad = deg => deg * Math.PI / 180;

  // 12 Adityas / 12 Veda Mantras
  const vedicSeeds12 = ['ह्रौं', 'ऐं', 'क्लीं', 'सौः', 'ह्रीं', 'श्रीं', 'ह्रौं', 'ऐं', 'क्लीं', 'सौः', 'ह्रीं', 'श्रीं'];

  // Hexagram geometry
  const rHex = 155;
  const hexUp = [
    [500 + rHex * Math.sin(toRad(0)), 500 - rHex * Math.cos(toRad(0))],
    [500 + rHex * Math.sin(toRad(120)), 500 - rHex * Math.cos(toRad(120))],
    [500 + rHex * Math.sin(toRad(240)), 500 - rHex * Math.cos(toRad(240))]
  ];
  const hexDown = [
    [500 + rHex * Math.sin(toRad(180)), 500 - rHex * Math.cos(toRad(180))],
    [500 + rHex * Math.sin(toRad(300)), 500 - rHex * Math.cos(toRad(300))],
    [500 + rHex * Math.sin(toRad(60)), 500 - rHex * Math.cos(toRad(60))]
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%">
  ${renderDefs()}
  <rect width="1000" height="1000" fill="url(#sacredBg)" />
  ${renderBhupura()}
  ${renderTrivalaya(415, 400, 385)}

  <!-- 3. Dvadasha-Dala Ogee Lotus (द्वादशदल पद्म - वेद संरक्षण मण्डल) -->
  <g id="dvadasha_dala" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none">
    ${petals12.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals12.map(p => `<path d="${p.spineD}" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.6" />`).join('\n    ')}
  </g>

  <!-- 12 Dala Beejaksharas -->
  <g id="dvadasha_seeds" font-family="'Noto Sans Devanagari', serif" font-weight="700" font-size="18" fill="#1A0E05" text-anchor="middle" dominant-baseline="central">
    ${petals12.map((p, idx) => {
      const rM = 328;
      const x = 500 + rM * Math.sin(toRad(p.midDeg));
      const y = 500 - rM * Math.cos(toRad(p.midDeg));
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}">${vedicSeeds12[idx]}</text>`;
    }).join('\n    ')}
  </g>

  <!-- Intermediate Girdles -->
  <circle cx="500" cy="500" r="260" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />
  <circle cx="500" cy="500" r="250" stroke="url(#bronzeMain)" stroke-width="1.6" fill="none" />

  <!-- 4. Inner Ashta-Dala Lotus (अष्टदल पद्म - अष्टसिद्धि मण्डल) -->
  <g id="ashtadala_lotus" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none">
    ${petals8.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals8.map(p => `<path d="${p.spineD}" stroke-width="1.2" opacity="0.7" />`).join('\n    ')}
  </g>

  <!-- Inner Vaishnava Circle -->
  <circle cx="500" cy="500" r="160" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />

  <!-- 5. Central Vaishnava Hexagram (षट्कोण - विशुद्ध ज्ञान विज्ञान चक्र) -->
  <g id="vaishnava_shatkona" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none">
    <polygon points="${hexUp.map(pt => pt[0].toFixed(1) + ',' + pt[1].toFixed(1)).join(' ')}" />
    <polygon points="${hexDown.map(pt => pt[0].toFixed(1) + ',' + pt[1].toFixed(1)).join(' ')}" />
  </g>

  <!-- Inner Downward Triangle -->
  <polygon points="500,550 455,475 545,475" stroke="url(#bronzeMain)" stroke-width="2.2" fill="none" />

  <!-- 6. Bindu with Hayagriva Mahabeeja (ह्रौं) -->
  <g id="bindu_zone" filter="url(#sacredShadow)">
    <circle cx="500" cy="500" r="45" fill="url(#binduGoldGlow)" />
    <circle cx="500" cy="500" r="8" fill="#1A0E05" />
    <circle cx="500" cy="500" r="3.5" fill="#F4EEE0" />
    <text x="500" y="475" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="22" fill="#1A0E05" text-anchor="middle">ॐ</text>
    <text x="500" y="525" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="24" fill="#1A0E05" text-anchor="middle">ह्रौं</text>
  </g>
</svg>`;
}

// Generate all files
const targets = [
  { id: 'saraswati_yantra', svg: generateSaraswatiYantra() },
  { id: 'gayatri_yantra', svg: generateGayatriYantra() },
  { id: 'medha_dakshinamurti_yantra', svg: generateDakshinamurtiYantra() },
  { id: 'hayagriva_yantra', svg: generateHayagrivaYantra() }
];

const dirCategory = path.join(__dirname, '..', 'public', 'yantras', '12_Vidya');
const dirRoot = path.join(__dirname, '..', 'public', 'yantras');

if (!fs.existsSync(dirCategory)) {
  fs.mkdirSync(dirCategory, { recursive: true });
}

targets.forEach(t => {
  const p1 = path.join(dirCategory, `${t.id}.svg`);
  const p2 = path.join(dirRoot, `${t.id}.svg`);
  fs.writeFileSync(p1, t.svg, 'utf-8');
  fs.writeFileSync(p2, t.svg, 'utf-8');
  console.log(`Generated: ${t.id}.svg -> 12_Vidya/ & root yantras/`);
});

console.log('All 4 Vidya Yantras successfully created!');
