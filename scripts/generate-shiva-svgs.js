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
    <radialGradient id="amritaGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#0284C7" stop-opacity="0.8" />
      <stop offset="60%" stop-color="#0EA5E9" stop-opacity="0.4" />
      <stop offset="100%" stop-color="#0369A1" stop-opacity="0" />
    </radialGradient>
    <filter id="sacredShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#1A0E05" flood-opacity="0.25" />
    </filter>
  </defs>`;
}

// 1. SWARNA AKARSHANA BHAIRAVA YANTRA
function generateSwarnaAkarshanaBhairavaYantra() {
  const petals8 = generateOgeePetals(8, 250, 380);
  const toRad = deg => deg * Math.PI / 180;

  // 8 Bhairava Seeds: ऐं, क्लां, क्लीं, ह्लूं, ह्रां, ह्रीं, ह्रूं, सः
  const bhairavaSeeds = ['ऐं', 'क्लां', 'क्लीं', 'ह्लूं', 'ह्रां', 'ह्रीं', 'ह्रूं', 'सः'];

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

  <!-- 3. Ashta-Dala Ogee Lotus Petals (अष्टदल पद्म - अष्टभैरव आवरण) -->
  <g id="ashtadala_lotus" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none">
    ${petals8.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals8.map(p => `<path d="${p.spineD}" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.7" />`).join('\n    ')}
  </g>

  <!-- Petal Beejaksharas -->
  <g id="petal_mantras" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="22" fill="#1A0E05" text-anchor="middle" dominant-baseline="central">
    ${petals8.map((p, idx) => {
      const rM = 320;
      const x = 500 + rM * Math.sin(toRad(p.midDeg));
      const y = 500 - rM * Math.cos(toRad(p.midDeg));
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}">${bhairavaSeeds[idx]}</text>`;
    }).join('\n    ')}
  </g>

  <!-- Intermediate Girdles -->
  <circle cx="500" cy="500" r="248" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />
  <circle cx="500" cy="500" r="236" stroke="url(#bronzeMain)" stroke-width="1.6" fill="none" />

  <!-- 4. Central Swarna Akarshana Hexagram (स्वर्ण आकर्षण षट्कोण) -->
  <g id="shatkona" stroke="url(#bronzeMain)" stroke-width="2.8" fill="none">
    <polygon points="${hexUp.map(pt => pt[0].toFixed(1) + ',' + pt[1].toFixed(1)).join(' ')}" />
    <polygon points="${hexDown.map(pt => pt[0].toFixed(1) + ',' + pt[1].toFixed(1)).join(' ')}" />
  </g>

  <!-- Inner Concentric Circle -->
  <circle cx="500" cy="500" r="115" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />
  <circle cx="500" cy="500" r="102" stroke="url(#bronzeMain)" stroke-width="1.4" stroke-dasharray="4,3" fill="none" />

  <!-- Inner Downward Primary Golden Triangle -->
  <polygon points="500,590 420,455 580,455" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none" />

  <!-- 5. Bindu with Swarna Akarshana Bhairava Core (आपदुद्धारणाय) -->
  <g id="bindu_zone" filter="url(#sacredShadow)">
    <circle cx="500" cy="500" r="45" fill="url(#binduGoldGlow)" />
    <circle cx="500" cy="500" r="9" fill="#1A0E05" />
    <circle cx="500" cy="500" r="4" fill="#F4EEE0" />
    <text x="500" y="475" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="20" fill="#1A0E05" text-anchor="middle">ऐं</text>
    <text x="500" y="525" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="22" fill="#1A0E05" text-anchor="middle">क्लीं</text>
  </g>
</svg>`;
}

// 2. SANJEEVANI MAHAMRITYUNJAYA YANTRA
function generateSanjeevaniYantra() {
  const petals12 = generateOgeePetals(12, 260, 385);
  const petals8 = generateOgeePetals(8, 165, 255);
  const toRad = deg => deg * Math.PI / 180;

  // 12 Amrita Adityas / Rudra Kalas
  const amritaSeeds12 = ['हौं', 'जूं', 'सः', 'भूर्', 'भुवः', 'स्वः', 'त्र्यं', 'बकं', 'यजा', 'महे', 'सुगन्धिं', 'पुष्टि'];

  // Hexagram geometry
  const rHex = 158;
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

  <!-- 3. Dvadasha-Dala Ogee Lotus (द्वादशदल पद्म - संजीवनी मण्डल) -->
  <g id="dvadasha_dala" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none">
    ${petals12.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals12.map(p => `<path d="${p.spineD}" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.6" />`).join('\n    ')}
  </g>

  <!-- 12 Amrita Seeds Inscription -->
  <g id="amrita_seeds" font-family="'Noto Sans Devanagari', serif" font-weight="700" font-size="16" fill="#1A0E05" text-anchor="middle" dominant-baseline="central">
    ${petals12.map((p, idx) => {
      const rM = 328;
      const x = 500 + rM * Math.sin(toRad(p.midDeg));
      const y = 500 - rM * Math.cos(toRad(p.midDeg));
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}">${amritaSeeds12[idx]}</text>`;
    }).join('\n    ')}
  </g>

  <!-- Intermediate Girdles -->
  <circle cx="500" cy="500" r="260" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />
  <circle cx="500" cy="500" r="250" stroke="url(#bronzeMain)" stroke-width="1.6" fill="none" />

  <!-- 4. Inner Ashta-Dala Lotus (अष्टदल पद्म - अष्टमूर्ति शिव मण्डल) -->
  <g id="ashtadala_lotus" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none">
    ${petals8.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals8.map(p => `<path d="${p.spineD}" stroke-width="1.2" opacity="0.7" />`).join('\n    ')}
  </g>

  <!-- Inner Sanctuary Ring -->
  <circle cx="500" cy="500" r="162" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />

  <!-- 5. Central Amrita Hexagram (अमृत कलश षट्कोण) -->
  <g id="shatkona" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none">
    <polygon points="${hexUp.map(pt => pt[0].toFixed(1) + ',' + pt[1].toFixed(1)).join(' ')}" />
    <polygon points="${hexDown.map(pt => pt[0].toFixed(1) + ',' + pt[1].toFixed(1)).join(' ')}" />
  </g>

  <!-- Amrita Kalasha (अमृत कलश रेखांकन) -->
  <ellipse cx="500" cy="510" rx="35" ry="25" stroke="url(#bronzeMain)" stroke-width="1.8" fill="none" />
  <path d="M 470 510 C 470 540, 530 540, 530 510" stroke="url(#bronzeMain)" stroke-width="2.0" fill="none" />
  <path d="M 480 485 L 520 485 L 515 498 L 485 498 Z" stroke="url(#bronzeMain)" stroke-width="1.8" fill="none" />

  <!-- 6. Bindu with Sanjeevani Mahabeeja (हौं जूं सः) -->
  <g id="bindu_zone" filter="url(#sacredShadow)">
    <circle cx="500" cy="500" r="46" fill="url(#amritaGlow)" />
    <circle cx="500" cy="500" r="8" fill="#1A0E05" />
    <circle cx="500" cy="500" r="3.5" fill="#F4EEE0" />
    <text x="500" y="468" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="20" fill="#1A0E05" text-anchor="middle">ॐ</text>
    <text x="500" y="542" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="18" fill="#1A0E05" text-anchor="middle">हौं जूं सः</text>
  </g>
</svg>`;
}

// 3. SHARABHESHWARA YANTRA
function generateSharabheshwaraYantra() {
  const petals8 = generateOgeePetals(8, 250, 380);
  const toRad = deg => deg * Math.PI / 180;

  // 16 Sharabha Claws/Wings Radiance
  const claws16 = [];
  for (let i = 0; i < 16; i++) {
    const deg = i * 22.5;
    const rIn = 385;
    const rOut = 405;
    claws16.push(`M ${500 + rIn * Math.sin(toRad(deg))} ${500 - rIn * Math.cos(toRad(deg))} L ${500 + rOut * Math.sin(toRad(deg))} ${500 - rOut * Math.cos(toRad(deg))}`);
  }

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

  const ugraSeeds = ['खें', 'खं', 'खट्', 'हुं', 'फट्', 'स्वाहा', 'शं', 'ह्रीं'];

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%">
  ${renderDefs()}
  <rect width="1000" height="1000" fill="url(#sacredBg)" />
  ${renderBhupura()}
  ${renderTrivalaya(415, 400, 385)}

  <!-- 16 Wing/Claw Radiating Spikes (पक्षीराज शरभ संहार ज्वाला) -->
  <g id="sharabha_wings" stroke="url(#bronzeMain)" stroke-width="2.8" stroke-linecap="round">
    ${claws16.map(d => `<path d="${d}" />`).join('\n    ')}
  </g>

  <!-- 3. Ashta-Dala Ogee Lotus (अष्टदल पद्म - अष्ट भैरव संहार मण्डल) -->
  <g id="ashtadala_lotus" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none">
    ${petals8.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals8.map(p => `<path d="${p.spineD}" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.7" />`).join('\n    ')}
  </g>

  <!-- Petal Ugra Seeds -->
  <g id="ugra_seeds" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="22" fill="#1A0E05" text-anchor="middle" dominant-baseline="central">
    ${petals8.map((p, idx) => {
      const rM = 320;
      const x = 500 + rM * Math.sin(toRad(p.midDeg));
      const y = 500 - rM * Math.cos(toRad(p.midDeg));
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}">${ugraSeeds[idx]}</text>`;
    }).join('\n    ')}
  </g>

  <!-- Intermediate Girdles -->
  <circle cx="500" cy="500" r="248" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />
  <circle cx="500" cy="500" r="236" stroke="url(#bronzeMain)" stroke-width="1.6" fill="none" />

  <!-- 4. Central Ugra Hexagram (उग्र शरभेश्वर षट्कोण) -->
  <g id="shatkona" stroke="url(#bronzeMain)" stroke-width="2.8" fill="none">
    <polygon points="${hexUp.map(pt => pt[0].toFixed(1) + ',' + pt[1].toFixed(1)).join(' ')}" />
    <polygon points="${hexDown.map(pt => pt[0].toFixed(1) + ',' + pt[1].toFixed(1)).join(' ')}" />
  </g>

  <!-- Inner Circle & Downward Inverted Triangle -->
  <circle cx="500" cy="500" r="115" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />
  <polygon points="500,590 420,455 580,455" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none" />

  <!-- 5. Bindu with Fierce Khem Beeja (खें महाबीज) -->
  <g id="bindu_zone" filter="url(#sacredShadow)">
    <circle cx="500" cy="500" r="45" fill="url(#binduGoldGlow)" />
    <circle cx="500" cy="500" r="9" fill="#1A0E05" />
    <text x="500" y="496" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="34" fill="#1A0E05" text-anchor="middle" dominant-baseline="central">खें</text>
  </g>
</svg>`;
}

// 4. SADASHIVA PANCHABRAHMA YANTRA
function generateSadashivaYantra() {
  const petals16 = generateOgeePetals(16, 260, 385);
  const toRad = deg => deg * Math.PI / 180;

  // 16 Svaras / Kalas
  const shivaKalas16 = [
    'शान्ति', 'विद्या', 'प्रतिष्ठा', 'निवृत्ति', 'द्युति', 'दीप्ति', 'ज्योति', 'प्रभा',
    'विमला', 'अमृता', 'ज्ञाना', 'क्रिया', 'इच्छा', 'सत्या', 'आनन्दा', 'परा'
  ];

  // Pentagram (5 Faces of Shiva - Sadyojata, Vamadeva, Aghora, Tatpurusha, Ishana)
  const rPenta = 230;
  const pentaPoints = [];
  for (let i = 0; i < 5; i++) {
    const deg = i * 72; // North-centered pentagram
    pentaPoints.push([500 + rPenta * Math.sin(toRad(deg)), 500 - rPenta * Math.cos(toRad(deg))]);
  }

  // 5 Faces Beejas
  const pentaSeeds = ['ईशान', 'तत्पुरुष', 'अघोर', 'वामदेव', 'सद्योजात'];

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%">
  ${renderDefs()}
  <rect width="1000" height="1000" fill="url(#sacredBg)" />
  ${renderBhupura()}
  ${renderTrivalaya(415, 400, 385)}

  <!-- 3. Shodasha-Dala Ogee Lotus (षोडशदल पद्म - षोडश शिव कला आवरण) -->
  <g id="shodasha_dala" stroke="url(#bronzeMain)" stroke-width="2.2" fill="none">
    ${petals16.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals16.map(p => `<path d="${p.spineD}" stroke-width="1.0" stroke-dasharray="3,3" opacity="0.6" />`).join('\n    ')}
  </g>

  <!-- 16 Kala Inscriptions -->
  <g id="shiva_kalas" font-family="'Noto Sans Devanagari', serif" font-weight="700" font-size="13" fill="#1A0E05" text-anchor="middle" dominant-baseline="central">
    ${petals16.map((p, idx) => {
      const rM = 328;
      const x = 500 + rM * Math.sin(toRad(p.midDeg));
      const y = 500 - rM * Math.cos(toRad(p.midDeg));
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}">${shivaKalas16[idx]}</text>`;
    }).join('\n    ')}
  </g>

  <!-- Intermediate Girdles -->
  <circle cx="500" cy="500" r="260" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />
  <circle cx="500" cy="500" r="250" stroke="url(#bronzeMain)" stroke-width="1.6" fill="none" />

  <!-- 4. Central Panchabrahma Pentagram (पञ्चब्रह्म पञ्चकोण मण्डल) -->
  <g id="pentagram" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none">
    <!-- Star lines: 0->2->4->1->3->0 -->
    <path d="
      M ${pentaPoints[0][0].toFixed(1)} ${pentaPoints[0][1].toFixed(1)}
      L ${pentaPoints[2][0].toFixed(1)} ${pentaPoints[2][1].toFixed(1)}
      L ${pentaPoints[4][0].toFixed(1)} ${pentaPoints[4][1].toFixed(1)}
      L ${pentaPoints[1][0].toFixed(1)} ${pentaPoints[1][1].toFixed(1)}
      L ${pentaPoints[3][0].toFixed(1)} ${pentaPoints[3][1].toFixed(1)}
      Z
    " />
    <polygon points="${pentaPoints.map(p => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' ')}" stroke-width="1.8" />
  </g>

  <!-- 5 Faces Seed Inscriptions -->
  <g id="penta_seeds" font-family="'Noto Sans Devanagari', serif" font-weight="800" font-size="16" fill="#2E1605" text-anchor="middle" dominant-baseline="central">
    ${pentaPoints.map((p, idx) => {
      const rM = 190;
      const deg = idx * 72;
      const x = 500 + rM * Math.sin(toRad(deg));
      const y = 500 - rM * Math.cos(toRad(deg));
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}">${pentaSeeds[idx]}</text>`;
    }).join('\n    ')}
  </g>

  <!-- Inner Sanctuary Ring -->
  <circle cx="500" cy="500" r="115" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />

  <!-- 5. Bindu with Panchakshari Core (ॐ नमः शिवाय) -->
  <g id="bindu_zone" filter="url(#sacredShadow)">
    <circle cx="500" cy="500" r="45" fill="url(#binduGoldGlow)" />
    <circle cx="500" cy="500" r="9" fill="#1A0E05" />
    <circle cx="500" cy="500" r="4" fill="#F4EEE0" />
    <text x="500" y="475" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="20" fill="#1A0E05" text-anchor="middle">ॐ</text>
    <text x="500" y="525" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="16" fill="#1A0E05" text-anchor="middle">नमः शिवाय</text>
  </g>
</svg>`;
}

// Generate all files
const targets = [
  { id: 'swarna_akarshana_bhairava_yantra', svg: generateSwarnaAkarshanaBhairavaYantra() },
  { id: 'sanjeevani_mahamrityunjaya_yantra', svg: generateSanjeevaniYantra() },
  { id: 'sharabheshwara_yantra', svg: generateSharabheshwaraYantra() },
  { id: 'sadashiva_yantra', svg: generateSadashivaYantra() }
];

const dirCategory = path.join(__dirname, '..', 'public', 'yantras', '05_Shiva');
const dirRoot = path.join(__dirname, '..', 'public', 'yantras');

if (!fs.existsSync(dirCategory)) {
  fs.mkdirSync(dirCategory, { recursive: true });
}

targets.forEach(t => {
  const p1 = path.join(dirCategory, `${t.id}.svg`);
  const p2 = path.join(dirRoot, `${t.id}.svg`);
  fs.writeFileSync(p1, t.svg, 'utf-8');
  fs.writeFileSync(p2, t.svg, 'utf-8');
  console.log(`Generated: ${t.id}.svg -> 05_Shiva/ & root yantras/`);
});

console.log('All 4 Shiva & Bhairava Yantras successfully created!');
