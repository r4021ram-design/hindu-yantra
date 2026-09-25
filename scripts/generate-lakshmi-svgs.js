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
    <radialGradient id="goldCoinFill" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FEF08A" />
      <stop offset="40%" stop-color="#F59E0B" />
      <stop offset="100%" stop-color="#B45309" />
    </radialGradient>
    <filter id="sacredShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#1A0E05" flood-opacity="0.25" />
    </filter>
  </defs>`;
}

// 1. ASHTA LAKSHMI YANTRA
function generateAshtaLakshmiYantra() {
  const petals8 = generateOgeePetals(8, 250, 380);
  const toRad = deg => deg * Math.PI / 180;

  // 8 Names of Ashta Lakshmi
  const ashtaLakshmiNames = ['आदि', 'धान्य', 'धैर्य', 'गज', 'सन्तान', 'विजय', 'विद्या', 'धन'];
  const ashtaLakshmiSeeds = ['श्रीं', 'ह्रीं', 'क्लीं', 'श्रीं', 'ह्रीं', 'क्लीं', 'ऐं', 'श्रीं'];

  // Hexagram geometry
  const rHex = 230;
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

  <!-- 3. Ashta-Dala Ogee Lotus Petals (अष्टदल पद्म - अष्टलक्ष्मी स्वरूप) -->
  <g id="ashtadala_lotus" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none">
    ${petals8.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals8.map(p => `<path d="${p.spineD}" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.7" />`).join('\n    ')}
  </g>

  <!-- Petal Inscriptions: Name & Beeja -->
  <g id="petal_inscriptions" font-family="'Noto Sans Devanagari', serif" text-anchor="middle" dominant-baseline="central">
    ${petals8.map((p, idx) => {
      const rName = 340;
      const rSeed = 300;
      const nx = 500 + rName * Math.sin(toRad(p.midDeg));
      const ny = 500 - rName * Math.cos(toRad(p.midDeg));
      const sx = 500 + rSeed * Math.sin(toRad(p.midDeg));
      const sy = 500 - rSeed * Math.cos(toRad(p.midDeg));
      return `
        <text x="${nx.toFixed(1)}" y="${ny.toFixed(1)}" font-weight="700" font-size="16" fill="#1A0E05">${ashtaLakshmiNames[idx]}</text>
        <text x="${sx.toFixed(1)}" y="${sy.toFixed(1)}" font-weight="900" font-size="20" fill="#3E1E07">${ashtaLakshmiSeeds[idx]}</text>
      `;
    }).join('\n    ')}
  </g>

  <!-- Intermediate Girdles -->
  <circle cx="500" cy="500" r="248" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />
  <circle cx="500" cy="500" r="236" stroke="url(#bronzeMain)" stroke-width="1.6" fill="none" />

  <!-- 4. Central Vaishnava Hexagram (षट्कोण - महालक्ष्मी एवं नारायण संयोग) -->
  <g id="shatkona" stroke="url(#bronzeMain)" stroke-width="2.8" fill="none">
    <polygon points="${hexUp.map(pt => pt[0].toFixed(1) + ',' + pt[1].toFixed(1)).join(' ')}" />
    <polygon points="${hexDown.map(pt => pt[0].toFixed(1) + ',' + pt[1].toFixed(1)).join(' ')}" />
  </g>

  <!-- Inner Concentric Circle -->
  <circle cx="500" cy="500" r="115" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />
  <circle cx="500" cy="500" r="102" stroke="url(#bronzeMain)" stroke-width="1.4" stroke-dasharray="4,3" fill="none" />

  <!-- Inner Downward Primary Triangle -->
  <polygon points="500,590 420,455 580,455" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none" />

  <!-- 5. Bindu with Shreem Mahabeeja (श्रीं) -->
  <g id="bindu_zone" filter="url(#sacredShadow)">
    <circle cx="500" cy="500" r="45" fill="url(#binduGoldGlow)" />
    <circle cx="500" cy="500" r="9" fill="#1A0E05" />
    <circle cx="500" cy="500" r="4" fill="#F4EEE0" />
    <text x="500" y="496" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="34" fill="#1A0E05" text-anchor="middle" dominant-baseline="central">श्रीं</text>
  </g>
</svg>`;
}

// 2. KANAKADHARA YANTRA
function generateKanakadharaYantra() {
  const petals16 = generateOgeePetals(16, 260, 385);
  const petals8 = generateOgeePetals(8, 165, 255);
  const toRad = deg => deg * Math.PI / 180;

  // 16 Golden Stream Seeds
  const kanakaSeeds16 = [
    'श्रीं', 'ह्रीं', 'क्लीं', 'ऐं', 'सौः', 'ॐ', 'श्रीं', 'ह्रीं',
    'क्लीं', 'ऐं', 'सौः', 'ॐ', 'श्रीं', 'ह्रीं', 'क्लीं', 'श्रीं'
  ];

  // 8 Golden Coins coordinates (अष्ट कनक बिन्दु)
  const coinCoords = [];
  for (let i = 0; i < 8; i++) {
    const deg = i * 45 + 22.5;
    const r = 210;
    coinCoords.push({
      x: 500 + r * Math.sin(toRad(deg)),
      y: 500 - r * Math.cos(toRad(deg))
    });
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%">
  ${renderDefs()}
  <rect width="1000" height="1000" fill="url(#sacredBg)" />
  ${renderBhupura()}
  ${renderTrivalaya(415, 400, 385)}

  <!-- 3. Shodasha-Dala Ogee Lotus (षोडशदल पद्म - षोडश कनकधारा मण्डल) -->
  <g id="shodasha_dala" stroke="url(#bronzeMain)" stroke-width="2.2" fill="none">
    ${petals16.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals16.map(p => `<path d="${p.spineD}" stroke-width="1.0" stroke-dasharray="3,3" opacity="0.6" />`).join('\n    ')}
  </g>

  <!-- 16 Golden Stream Inscriptions -->
  <g id="kanaka_seeds" font-family="'Noto Sans Devanagari', serif" font-weight="700" font-size="16" fill="#1A0E05" text-anchor="middle" dominant-baseline="central">
    ${petals16.map((p, idx) => {
      const rM = 330;
      const x = 500 + rM * Math.sin(toRad(p.midDeg));
      const y = 500 - rM * Math.cos(toRad(p.midDeg));
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}">${kanakaSeeds16[idx]}</text>`;
    }).join('\n    ')}
  </g>

  <!-- Intermediate Girdles -->
  <circle cx="500" cy="500" r="260" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />
  <circle cx="500" cy="500" r="250" stroke="url(#bronzeMain)" stroke-width="1.6" fill="none" />

  <!-- 4. Inner Ashta-Dala Lotus (अष्टदल पद्म) -->
  <g id="ashtadala_lotus" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none">
    ${petals8.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals8.map(p => `<path d="${p.spineD}" stroke-width="1.2" opacity="0.7" />`).join('\n    ')}
  </g>

  <!-- 8 Golden Abundance Coins (अष्ट कनक बिन्दु) -->
  <g id="golden_coins">
    ${coinCoords.map(c => `
      <circle cx="${c.x.toFixed(1)}" cy="${c.y.toFixed(1)}" r="14" fill="url(#goldCoinFill)" stroke="#3E1E07" stroke-width="1.5" />
      <circle cx="${c.x.toFixed(1)}" cy="${c.y.toFixed(1)}" r="10" fill="none" stroke="#FEF08A" stroke-width="1" />
      <text x="${c.x.toFixed(1)}" y="${c.y.toFixed(1)}" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="11" fill="#1A0E05" text-anchor="middle" dominant-baseline="central">श्रीं</text>
    `).join('\n    ')}
  </g>

  <!-- Inner Sanctuary Ring -->
  <circle cx="500" cy="500" r="160" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />
  <circle cx="500" cy="500" r="150" stroke="url(#bronzeMain)" stroke-width="1.4" stroke-dasharray="4,3" fill="none" />

  <!-- 5. Central Downward Kanakadhara Triangle (कनकधारा महात्रिकोण) -->
  <polygon points="500,610 405,445 595,445" stroke="url(#bronzeMain)" stroke-width="2.8" fill="none" />
  <polygon points="500,590 425,460 575,460" stroke="url(#bronzeMain)" stroke-width="1.4" stroke-dasharray="3,3" fill="none" />

  <!-- 6. Bindu with Kanakadhara Mahabeeja (ह्रीं श्रीं) -->
  <g id="bindu_zone" filter="url(#sacredShadow)">
    <circle cx="500" cy="500" r="46" fill="url(#binduGoldGlow)" />
    <circle cx="500" cy="500" r="8" fill="#1A0E05" />
    <circle cx="500" cy="500" r="3.5" fill="#F4EEE0" />
    <text x="500" y="475" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="22" fill="#1A0E05" text-anchor="middle">ह्रीं</text>
    <text x="500" y="525" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="28" fill="#1A0E05" text-anchor="middle">श्रीं</text>
  </g>
</svg>`;
}

// 3. VYAPAR VRIDDHI YANTRA
function generateVyaparVriddhiYantra() {
  const petals8 = generateOgeePetals(8, 250, 380);
  const toRad = deg => deg * Math.PI / 180;

  // 8 Commercial Blessings in 8 Directions
  const vyaparBlessings = ['धनं', 'वृद्धिं', 'लाभं', 'सिद्धिं', 'धान्यं', 'शुभं', 'विजयं', 'श्रीं'];

  // Hexagram geometry (Kubera & Lakshmi Interlace)
  const rHex = 230;
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

  <!-- 3. Ashta-Dala Ogee Lotus (अष्टदल पद्म - अष्टदिशा व्यापार विस्तार) -->
  <g id="ashtadala_lotus" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none">
    ${petals8.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals8.map(p => `<path d="${p.spineD}" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.7" />`).join('\n    ')}
  </g>

  <!-- Petal Blessings -->
  <g id="petal_blessings" font-family="'Noto Sans Devanagari', serif" font-weight="800" font-size="20" fill="#1A0E05" text-anchor="middle" dominant-baseline="central">
    ${petals8.map((p, idx) => {
      const rM = 320;
      const x = 500 + rM * Math.sin(toRad(p.midDeg));
      const y = 500 - rM * Math.cos(toRad(p.midDeg));
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}">${vyaparBlessings[idx]}</text>`;
    }).join('\n    ')}
  </g>

  <!-- Intermediate Girdles -->
  <circle cx="500" cy="500" r="248" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />
  <circle cx="500" cy="500" r="236" stroke="url(#bronzeMain)" stroke-width="1.6" fill="none" />

  <!-- 4. Lakshmi-Kubera Shatkona (लक्ष्मी-कुबेर वाणिज्य षट्कोण) -->
  <g id="shatkona" stroke="url(#bronzeMain)" stroke-width="2.8" fill="none">
    <polygon points="${hexUp.map(pt => pt[0].toFixed(1) + ',' + pt[1].toFixed(1)).join(' ')}" />
    <polygon points="${hexDown.map(pt => pt[0].toFixed(1) + ',' + pt[1].toFixed(1)).join(' ')}" />
  </g>

  <!-- Central Commercial Peetha Square -->
  <rect x="420" y="420" width="160" height="160" stroke="url(#bronzeMain)" stroke-width="2.2" fill="none" />
  <rect x="432" y="432" width="136" height="136" stroke="url(#bronzeMain)" stroke-width="1.4" stroke-dasharray="3,3" fill="none" />

  <!-- Corner Wealth Seeds -->
  <g id="corner_seeds" font-family="'Noto Sans Devanagari', serif" font-weight="700" font-size="14" fill="#3E1E07" text-anchor="middle">
    <text x="445" y="442">ॐ</text>
    <text x="555" y="442">श्रीं</text>
    <text x="445" y="575">ह्रीं</text>
    <text x="555" y="575">क्लीं</text>
  </g>

  <!-- 5. Bindu with Kubera-Lakshmi Core (कुबेर-लक्ष्मी युगल बिन्दु) -->
  <g id="bindu_zone" filter="url(#sacredShadow)">
    <circle cx="500" cy="500" r="42" fill="url(#binduGoldGlow)" />
    <circle cx="500" cy="500" r="8" fill="#1A0E05" />
    <text x="500" y="480" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="20" fill="#1A0E05" text-anchor="middle">क्लीं</text>
    <text x="500" y="524" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="22" fill="#1A0E05" text-anchor="middle">श्रीं</text>
  </g>
</svg>`;
}

// 4. VAIBHAV LAKSHMI YANTRA
function generateVaibhavLakshmiYantra() {
  const petals8 = generateOgeePetals(8, 250, 380);
  const toRad = deg => deg * Math.PI / 180;

  // 8 Divine Splendors
  const vaibhavAttributes = ['सौभाग्य', 'कीर्ति', 'आरोग्य', 'ऐश्वर्य', 'कान्ति', 'शान्ति', 'पुष्टि', 'तुष्टि'];

  // Hexagram geometry
  const rHex = 230;
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

  <!-- 3. Ashta-Dala Ogee Lotus (अष्टदल पद्म - अष्ट ऐश्वर्य मण्डल) -->
  <g id="ashtadala_lotus" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none">
    ${petals8.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals8.map(p => `<path d="${p.spineD}" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.7" />`).join('\n    ')}
  </g>

  <!-- Petal Attributes -->
  <g id="petal_attributes" font-family="'Noto Sans Devanagari', serif" font-weight="700" font-size="16" fill="#1A0E05" text-anchor="middle" dominant-baseline="central">
    ${petals8.map((p, idx) => {
      const rM = 320;
      const x = 500 + rM * Math.sin(toRad(p.midDeg));
      const y = 500 - rM * Math.cos(toRad(p.midDeg));
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}">${vaibhavAttributes[idx]}</text>`;
    }).join('\n    ')}
  </g>

  <!-- Intermediate Girdles -->
  <circle cx="500" cy="500" r="248" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />
  <circle cx="500" cy="500" r="236" stroke="url(#bronzeMain)" stroke-width="1.6" fill="none" />

  <!-- 4. Central Hexagram (वैभव लक्ष्मी षट्कोण) -->
  <g id="shatkona" stroke="url(#bronzeMain)" stroke-width="2.8" fill="none">
    <polygon points="${hexUp.map(pt => pt[0].toFixed(1) + ',' + pt[1].toFixed(1)).join(' ')}" />
    <polygon points="${hexDown.map(pt => pt[0].toFixed(1) + ',' + pt[1].toFixed(1)).join(' ')}" />
  </g>

  <!-- Inner Concentric Circle -->
  <circle cx="500" cy="500" r="115" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />
  <circle cx="500" cy="500" r="102" stroke="url(#bronzeMain)" stroke-width="1.4" stroke-dasharray="4,3" fill="none" />

  <!-- Inner Downward Primary Triangle -->
  <polygon points="500,580 430,460 570,460" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />

  <!-- 5. Bindu with Vaibhav Mahabeeja (ॐ श्रीं) -->
  <g id="bindu_zone" filter="url(#sacredShadow)">
    <circle cx="500" cy="500" r="45" fill="url(#binduGoldGlow)" />
    <circle cx="500" cy="500" r="9" fill="#1A0E05" />
    <circle cx="500" cy="500" r="4" fill="#F4EEE0" />
    <text x="500" y="475" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="20" fill="#1A0E05" text-anchor="middle">ॐ</text>
    <text x="500" y="525" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="30" fill="#1A0E05" text-anchor="middle">श्रीं</text>
  </g>
</svg>`;
}

// Generate all files
const targets = [
  { id: 'ashta_lakshmi_yantra', svg: generateAshtaLakshmiYantra() },
  { id: 'kanakadhara_yantra', svg: generateKanakadharaYantra() },
  { id: 'vyapar_vriddhi_yantra', svg: generateVyaparVriddhiYantra() },
  { id: 'vaibhav_lakshmi_yantra', svg: generateVaibhavLakshmiYantra() }
];

const dirCategory = path.join(__dirname, '..', 'public', 'yantras', '04_Lakshmi');
const dirRoot = path.join(__dirname, '..', 'public', 'yantras');

if (!fs.existsSync(dirCategory)) {
  fs.mkdirSync(dirCategory, { recursive: true });
}

targets.forEach(t => {
  const p1 = path.join(dirCategory, `${t.id}.svg`);
  const p2 = path.join(dirRoot, `${t.id}.svg`);
  fs.writeFileSync(p1, t.svg, 'utf-8');
  fs.writeFileSync(p2, t.svg, 'utf-8');
  console.log(`Generated: ${t.id}.svg -> 04_Lakshmi/ & root yantras/`);
});

console.log('All 4 Lakshmi & Wealth Yantras successfully created!');
