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
    <radialGradient id="ganeshaGoldGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#D97706" stop-opacity="0.9" />
      <stop offset="50%" stop-color="#B45309" stop-opacity="0.6" />
      <stop offset="100%" stop-color="#78350F" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="haridraGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#EAB308" stop-opacity="0.9" />
      <stop offset="50%" stop-color="#CA8A04" stop-opacity="0.5" />
      <stop offset="100%" stop-color="#854D0E" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="tantricCrimsonGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#DC2626" stop-opacity="0.85" />
      <stop offset="50%" stop-color="#991B1B" stop-opacity="0.5" />
      <stop offset="100%" stop-color="#450A0A" stop-opacity="0" />
    </radialGradient>
    <filter id="sacredShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#1A0E05" flood-opacity="0.25" />
    </filter>
  </defs>`;
}

// 1. MAHA GANAPATI YANTRA
function generateMahaGanapatiYantra() {
  const petals16 = generateOgeePetals(16, 280, 385);
  const petals8 = generateOgeePetals(8, 175, 275);
  const toRad = deg => deg * Math.PI / 180;

  // 16 Petal Seeds: 16 Syllable Maha Ganapati Mantra elements & Shaktis
  const seeds16 = ['ॐ', 'श्रीं', 'ह्रीं', 'क्लीं', 'ग्लौं', 'गं', 'गण', 'पतये', 'वर', 'वरद', 'सर्व', 'जनं', 'मे', 'वशम्', 'आनय', 'स्वाहा'];
  const seeds8 = ['ग्लौं', 'गं', 'श्रीं', 'ह्रीं', 'क्लीं', 'ॐ', 'वं', 'हुं'];

  // Hexagram geometry
  const rHex = 170;
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

  <!-- 3. Shodasha-Dala Ogee Lotus Petals (षोडशदल पद्म - महागणपति षोडश शक्ति मण्डल) -->
  <g id="shodasha_dala" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none">
    ${petals16.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals16.map(p => `<path d="${p.spineD}" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.6" />`).join('\n    ')}
  </g>

  <!-- 16 Petal Beejaksharas -->
  <g id="petal_16_seeds" font-family="'Noto Sans Devanagari', serif" font-weight="700" font-size="14" fill="#1A0E05" text-anchor="middle" dominant-baseline="central">
    ${petals16.map((p, idx) => {
      const rM = 335;
      const x = 500 + rM * Math.sin(toRad(p.midDeg));
      const y = 500 - rM * Math.cos(toRad(p.midDeg));
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}">${seeds16[idx]}</text>`;
    }).join('\n    ')}
  </g>

  <!-- Intermediate Girdles -->
  <circle cx="500" cy="500" r="280" stroke="url(#bronzeMain)" stroke-width="2.2" fill="none" />
  <circle cx="500" cy="500" r="274" stroke="url(#bronzeMain)" stroke-width="1.6" fill="none" />

  <!-- 4. Ashta-Dala Ogee Lotus Petals (अष्टदल पद्म - अष्टसिद्धि व अष्टविनायक) -->
  <g id="ashta_dala" stroke="url(#bronzeMain)" stroke-width="2.5" fill="none">
    ${petals8.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals8.map(p => `<path d="${p.spineD}" stroke-width="1.2" opacity="0.7" />`).join('\n    ')}
  </g>

  <!-- 8 Petal Beejaksharas -->
  <g id="petal_8_seeds" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="18" fill="#1A0E05" text-anchor="middle" dominant-baseline="central">
    ${petals8.map((p, idx) => {
      const rM = 225;
      const x = 500 + rM * Math.sin(toRad(p.midDeg));
      const y = 500 - rM * Math.cos(toRad(p.midDeg));
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}">${seeds8[idx]}</text>`;
    }).join('\n    ')}
  </g>

  <!-- Hexagram Ring Girdle -->
  <circle cx="500" cy="500" r="174" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />

  <!-- 5. Central Maha Ganapati Shatkona (षट्कोण - शिव-शक्ति-गणपति सामरस्य) -->
  <g id="shatkona" stroke="url(#bronzeMain)" stroke-width="2.8" fill="none">
    <polygon points="${hexUp.map(pt => pt[0].toFixed(1) + ',' + pt[1].toFixed(1)).join(' ')}" />
    <polygon points="${hexDown.map(pt => pt[0].toFixed(1) + ',' + pt[1].toFixed(1)).join(' ')}" />
  </g>

  <!-- Inner Concentric Circle -->
  <circle cx="500" cy="500" r="95" stroke="url(#bronzeMain)" stroke-width="2.2" fill="none" />

  <!-- Upward Central Triangle (त्रिकोण) -->
  <polygon points="500,425 435,538 565,538" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none" />

  <!-- 6. Bindu with Golden Ganapati Radiance (महाबिन्दु) -->
  <g id="bindu_zone" filter="url(#sacredShadow)">
    <circle cx="500" cy="500" r="42" fill="url(#ganeshaGoldGlow)" />
    <circle cx="500" cy="500" r="8" fill="#1A0E05" />
    <circle cx="500" cy="500" r="3.5" fill="#F4EEE0" />
    <text x="500" y="482" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="18" fill="#1A0E05" text-anchor="middle">ग्लौं</text>
    <text x="500" y="528" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="20" fill="#1A0E05" text-anchor="middle">गं</text>
  </g>
</svg>`;
}

// 2. SANKATA NASHANA GANESHA YANTRA
function generateSankataNashanaGaneshaYantra() {
  const petals12 = generateOgeePetals(12, 265, 385);
  const petals8 = generateOgeePetals(8, 170, 260);
  const toRad = deg => deg * Math.PI / 180;

  // 12 Canonical Scriptural Names from Sankata Nashana Stotra
  const names12 = [
    'वक्रतुण्ड', 'एकदन्त', 'कृष्णपिङ्गाक्ष', 'गजवक्त्र',
    'लम्बोदर', 'विकट', 'विघ्नराज', 'धूम्रवर्ण',
    'भालचन्द्र', 'विनायक', 'गणपति', 'गजानन'
  ];

  const ashtaSeeds = ['ॐ', 'गं', 'विघ्न', 'हर्त्रे', 'नमः', 'सिद्धि', 'बुद्धि', 'प्रदाय'];

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%">
  ${renderDefs()}
  <rect width="1000" height="1000" fill="url(#sacredBg)" />
  ${renderBhupura()}
  ${renderTrivalaya(415, 400, 385)}

  <!-- 3. Dvadasha-Dala Ogee Lotus (द्वादशदल पद्म - १२ संकटनाशन नामावली मण्डल) -->
  <g id="dvadasha_dala" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none">
    ${petals12.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals12.map(p => `<path d="${p.spineD}" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.6" />`).join('\n    ')}
  </g>

  <!-- 12 Sacred Names of Sankata Nashana Ganesha -->
  <g id="sankata_names_12" font-family="'Noto Sans Devanagari', serif" font-weight="800" font-size="13.5" fill="#1A0E05" text-anchor="middle" dominant-baseline="central">
    ${petals12.map((p, idx) => {
      const rM = 328;
      const x = 500 + rM * Math.sin(toRad(p.midDeg));
      const y = 500 - rM * Math.cos(toRad(p.midDeg));
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}">${names12[idx]}</text>`;
    }).join('\n    ')}
  </g>

  <!-- Intermediate Girdles -->
  <circle cx="500" cy="500" r="265" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />
  <circle cx="500" cy="500" r="255" stroke="url(#bronzeMain)" stroke-width="1.6" fill="none" />

  <!-- 4. Ashta-Dala Lotus (अष्टदल पद्म - अष्टदिशा विघ्नशमन चक्र) -->
  <g id="ashta_dala" stroke="url(#bronzeMain)" stroke-width="2.5" fill="none">
    ${petals8.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals8.map(p => `<path d="${p.spineD}" stroke-width="1.2" opacity="0.7" />`).join('\n    ')}
  </g>

  <!-- 8 Petal Mantras -->
  <g id="ashta_seeds" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="16" fill="#1A0E05" text-anchor="middle" dominant-baseline="central">
    ${petals8.map((p, idx) => {
      const rM = 212;
      const x = 500 + rM * Math.sin(toRad(p.midDeg));
      const y = 500 - rM * Math.cos(toRad(p.midDeg));
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}">${ashtaSeeds[idx]}</text>`;
    }).join('\n    ')}
  </g>

  <!-- Inner Sanctuary Girdle -->
  <circle cx="500" cy="500" r="168" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />
  <circle cx="500" cy="500" r="158" stroke="url(#bronzeMain)" stroke-width="1.5" stroke-dasharray="3,3" fill="none" />

  <!-- 5. Protective Sun Ray Radiance (सूर्य सदृश १२ किरण चक्र) -->
  <g id="surya_kiran" stroke="url(#bronzeMain)" stroke-width="1.8" opacity="0.85">
    ${Array.from({ length: 12 }).map((_, i) => {
      const deg = i * 30;
      const x1 = 500 + 105 * Math.sin(toRad(deg));
      const y1 = 500 - 105 * Math.cos(toRad(deg));
      const x2 = 500 + 155 * Math.sin(toRad(deg));
      const y2 = 500 - 155 * Math.cos(toRad(deg));
      return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" />`;
    }).join('\n    ')}
  </g>

  <!-- Central Inverted Protective Triangle (अधोमुख त्रिकोण) -->
  <polygon points="500,580 430,460 570,460" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none" />

  <!-- 6. Bindu with Vighnaharta Core (विघ्नहर्ता महाबिन्दु) -->
  <g id="bindu_zone" filter="url(#sacredShadow)">
    <circle cx="500" cy="500" r="44" fill="url(#ganeshaGoldGlow)" />
    <circle cx="500" cy="500" r="8.5" fill="#1A0E05" />
    <circle cx="500" cy="500" r="3.5" fill="#F4EEE0" />
    <text x="500" y="478" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="20" fill="#1A0E05" text-anchor="middle">ॐ</text>
    <text x="500" y="528" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="22" fill="#1A0E05" text-anchor="middle">गं</text>
  </g>
</svg>`;
}

// 3. UCCHISHTA GANAPATI YANTRA
function generateUcchishtaGanapatiYantra() {
  const petals8 = generateOgeePetals(8, 240, 385);
  const toRad = deg => deg * Math.PI / 180;

  // Tantric Hastipishachi Seeds
  // मन्त्र: 'हस्तिपिशाचिलिखे स्वाहा'
  const tantricSeeds8 = ['हस्ति', 'पिशाचि', 'लिखे', 'स्वाहा', 'गूं', 'ग्लौं', 'क्लीं', 'हुं'];

  // Hexagram geometry
  const rHex = 225;
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

  <!-- 3. Ashta-Dala Ogee Lotus Petals (अष्टदल पद्म - गुह्य तान्त्रिक शक्ति मण्डल) -->
  <g id="ashta_dala" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none">
    ${petals8.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals8.map(p => `<path d="${p.spineD}" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.7" />`).join('\n    ')}
  </g>

  <!-- 8 Petal Tantric Inscriptions -->
  <g id="petal_tantric_seeds" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="18" fill="#1A0E05" text-anchor="middle" dominant-baseline="central">
    ${petals8.map((p, idx) => {
      const rM = 315;
      const x = 500 + rM * Math.sin(toRad(p.midDeg));
      const y = 500 - rM * Math.cos(toRad(p.midDeg));
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}">${tantricSeeds8[idx]}</text>`;
    }).join('\n    ')}
  </g>

  <!-- Intermediate Girdles -->
  <circle cx="500" cy="500" r="238" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />
  <circle cx="500" cy="500" r="226" stroke="url(#bronzeMain)" stroke-width="1.6" fill="none" />

  <!-- 4. Central Tantric Hexagram (उच्छिष्ट गुह्य षट्कोण) -->
  <g id="shatkona" stroke="url(#bronzeMain)" stroke-width="2.8" fill="none">
    <polygon points="${hexUp.map(pt => pt[0].toFixed(1) + ',' + pt[1].toFixed(1)).join(' ')}" />
    <polygon points="${hexDown.map(pt => pt[0].toFixed(1) + ',' + pt[1].toFixed(1)).join(' ')}" />
  </g>

  <!-- Concentric Inner Circle -->
  <circle cx="500" cy="500" r="115" stroke="url(#bronzeMain)" stroke-width="2.2" fill="none" />
  <circle cx="500" cy="500" r="102" stroke="url(#bronzeMain)" stroke-width="1.4" stroke-dasharray="4,3" fill="none" />

  <!-- Central Inverted Tantric Triangle (अधोमुख त्रिकोण - इच्छा, ज्ञान, क्रिया व शीघ्र सिद्धि) -->
  <polygon points="500,588 422,456 578,456" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none" />

  <!-- Guhya Mantra Inscription surrounding Bindu -->
  <g font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="13" fill="#1A0E05" text-anchor="middle">
    <text x="500" y="445">हस्तिपिशाचिलिखे</text>
    <text x="430" y="525">स्वाहा</text>
    <text x="570" y="525">सिद्धये</text>
  </g>

  <!-- 5. Bindu with Crimson & Golden Tantric Aura (गुह्य महाबिन्दु) -->
  <g id="bindu_zone" filter="url(#sacredShadow)">
    <circle cx="500" cy="500" r="44" fill="url(#tantricCrimsonGlow)" />
    <circle cx="500" cy="500" r="8.5" fill="#1A0E05" />
    <circle cx="500" cy="500" r="3.5" fill="#FBF8F1" />
    <text x="500" y="492" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="19" fill="#FBF8F1" text-anchor="middle">गूं</text>
    <text x="500" y="534" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="20" fill="#1A0E05" text-anchor="middle">गं</text>
  </g>
</svg>`;
}

// 4. HARIDRA GANESHA YANTRA
function generateHaridraGaneshaYantra() {
  const petals8 = generateOgeePetals(8, 250, 385);
  const toRad = deg => deg * Math.PI / 180;

  // Stambhana Beejas from Mantra Mahodadhi
  const haridraSeeds8 = ['ॐ', 'हुं', 'गं', 'ग्लौं', 'हरिद्रा', 'गणपतये', 'वरद', 'स्वाहा'];

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

  <!-- 3. Ashta-Dala Ogee Lotus Petals (अष्टदल पद्म - पीताम्बर स्तम्भन मण्डल) -->
  <g id="ashta_dala" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none">
    ${petals8.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals8.map(p => `<path d="${p.spineD}" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.7" />`).join('\n    ')}
  </g>

  <!-- 8 Petal Stambhana Mantras -->
  <g id="petal_stambhana_seeds" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="18" fill="#1A0E05" text-anchor="middle" dominant-baseline="central">
    ${petals8.map((p, idx) => {
      const rM = 320;
      const x = 500 + rM * Math.sin(toRad(p.midDeg));
      const y = 500 - rM * Math.cos(toRad(p.midDeg));
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}">${haridraSeeds8[idx]}</text>`;
    }).join('\n    ')}
  </g>

  <!-- Intermediate Girdles -->
  <circle cx="500" cy="500" r="248" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />
  <circle cx="500" cy="500" r="236" stroke="url(#bronzeMain)" stroke-width="1.6" fill="none" />

  <!-- 4. Central Haridra Hexagram (पीतवर्ण षट्कोण) -->
  <g id="shatkona" stroke="url(#bronzeMain)" stroke-width="2.8" fill="none">
    <polygon points="${hexUp.map(pt => pt[0].toFixed(1) + ',' + pt[1].toFixed(1)).join(' ')}" />
    <polygon points="${hexDown.map(pt => pt[0].toFixed(1) + ',' + pt[1].toFixed(1)).join(' ')}" />
  </g>

  <!-- Inner Quadrangle Stambhana Square (चतुष्कोण स्तम्भन पीठ) -->
  <rect x="420" y="420" width="160" height="160" stroke="url(#bronzeMain)" stroke-width="2.2" fill="none" />

  <!-- Inner Circle -->
  <circle cx="500" cy="500" r="70" stroke="url(#bronzeMain)" stroke-width="2.0" stroke-dasharray="3,3" fill="none" />

  <!-- 5. Bindu with Intense Golden Turmeric Aura (हरिद्रा महाबिन्दु) -->
  <g id="bindu_zone" filter="url(#sacredShadow)">
    <circle cx="500" cy="500" r="45" fill="url(#haridraGlow)" />
    <circle cx="500" cy="500" r="8.5" fill="#1A0E05" />
    <circle cx="500" cy="500" r="3.5" fill="#F4EEE0" />
    <text x="500" y="475" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="20" fill="#1A0E05" text-anchor="middle">हुं</text>
    <text x="500" y="528" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="20" fill="#1A0E05" text-anchor="middle">ग्लौं</text>
  </g>
</svg>`;
}

// File saving routine
const yantras = [
  { id: 'maha_ganapati_yantra', content: generateMahaGanapatiYantra() },
  { id: 'sankata_nashana_ganesha_yantra', content: generateSankataNashanaGaneshaYantra() },
  { id: 'ucchishta_ganapati_yantra', content: generateUcchishtaGanapatiYantra() },
  { id: 'haridra_ganesha_yantra', content: generateHaridraGaneshaYantra() }
];

const dirSub = path.join(__dirname, '..', 'public', 'yantras', '03_Ganesha');
const dirRoot = path.join(__dirname, '..', 'public', 'yantras');

if (!fs.existsSync(dirSub)) {
  fs.mkdirSync(dirSub, { recursive: true });
}

yantras.forEach(y => {
  const pSub = path.join(dirSub, `${y.id}.svg`);
  const pRoot = path.join(dirRoot, `${y.id}.svg`);
  fs.writeFileSync(pSub, y.content.trim(), 'utf8');
  fs.writeFileSync(pRoot, y.content.trim(), 'utf8');
  console.log(`[SUCCESS] Consecrated ${y.id}.svg to ${pSub} and ${pRoot}`);
});
