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
    <radialGradient id="prithviAura" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#15803D" stop-opacity="0.25" />
      <stop offset="50%" stop-color="#A16207" stop-opacity="0.20" />
      <stop offset="100%" stop-color="#78350F" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="jalaAmritaAura" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#0284C7" stop-opacity="0.30" />
      <stop offset="55%" stop-color="#0369A1" stop-opacity="0.15" />
      <stop offset="100%" stop-color="#075985" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="digpalaAura" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#B45309" stop-opacity="0.30" />
      <stop offset="60%" stop-color="#78350F" stop-opacity="0.15" />
      <stop offset="100%" stop-color="#1A0E05" stop-opacity="0" />
    </radialGradient>
    <filter id="sacredShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#1A0E05" flood-opacity="0.25" />
    </filter>
  </defs>`;
}

// 1. VASTU DOSHA NIVARANA YANTRA
function generateVastuDoshaNivaranaYantra() {
  const petals8 = generateOgeePetals(8, 255, 385);
  const toRad = deg => deg * Math.PI / 180;

  // 8 Sacred Directions & Elements
  const directions8 = ['ईशान (जल)', 'पूर्व (इन्द्र)', 'आग्नेय (अग्नि)', 'दक्षिण (यम)', 'नैर्ऋत्य (पृथ्वी)', 'पश्चिम (वरुण)', 'वायव्य (वायु)', 'उत्तर (कुबेर)'];

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%">
  ${renderDefs()}
  <rect width="1000" height="1000" fill="url(#sacredBg)" />
  <circle cx="500" cy="500" r="480" fill="url(#prithviAura)" />
  ${renderBhupura()}
  ${renderTrivalaya(415, 400, 385)}

  <!-- 3. Ashta-Dala Ogee Lotus Petals (अष्टदल पद्म - अष्टदिशा मण्डल) -->
  <g id="ashta_dala" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none">
    ${petals8.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals8.map(p => `<path d="${p.spineD}" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.7" />`).join('\n    ')}
  </g>

  <!-- 8 Petal Directional Inscriptions -->
  <g id="petal_directions" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="14.5" fill="#1A0E05" text-anchor="middle" dominant-baseline="central">
    ${petals8.map((p, idx) => {
      const rM = 320;
      const x = 500 + rM * Math.sin(toRad(p.midDeg));
      const y = 500 - rM * Math.cos(toRad(p.midDeg));
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}">${directions8[idx]}</text>`;
    }).join('\n    ')}
  </g>

  <!-- Intermediate Girdles -->
  <circle cx="500" cy="500" r="255" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />
  <circle cx="500" cy="500" r="245" stroke="url(#bronzeMain)" stroke-width="1.6" fill="none" />

  <!-- 4. Vastu Purusha Mandala Grid (9 Sacred Padas / Central Brahma Sthana) -->
  <g id="vastu_purusha_grid" stroke="url(#bronzeMain)">
    <!-- Outer Square of Vastu Peetha -->
    <rect x="340" y="340" width="320" height="320" fill="none" stroke-width="2.8" />
    <rect x="330" y="330" width="340" height="340" fill="none" stroke-width="1.4" stroke-dasharray="4,4" />

    <!-- Grid Lines for 9 Padas -->
    <line x1="340" y1="446" x2="660" y2="446" stroke-width="2.0" />
    <line x1="340" y1="554" x2="660" y2="554" stroke-width="2.0" />
    <line x1="446" y1="340" x2="446" y2="660" stroke-width="2.0" />
    <line x1="554" y1="340" x2="554" y2="660" stroke-width="2.0" />

    <!-- 8 Directional Regents & Brahma Sthana -->
    <g font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="16" fill="#1A0E05" text-anchor="middle" dominant-baseline="central">
      <!-- NW: Vayu -->
      <text x="393" y="393">वायु</text>
      <!-- North: Kubera -->
      <text x="500" y="393">कुबेर</text>
      <!-- NE: Ishana -->
      <text x="607" y="393">ईशान</text>

      <!-- West: Varuna -->
      <text x="393" y="500">वरुण</text>
      <!-- Center: Brahma Sthana -->
      <text x="500" y="500" font-size="19" fill="#78350F">ब्रह्म</text>
      <!-- East: Indra -->
      <text x="607" y="500">इन्द्र</text>

      <!-- SW: Nirriti -->
      <text x="393" y="607">नैर्ऋत्य</text>
      <!-- South: Yama -->
      <text x="500" y="607">यम</text>
      <!-- SE: Agni -->
      <text x="607" y="607">अग्नि</text>
    </g>
  </g>

  <!-- 5. Concentric Central Sanctuary & Bindu -->
  <circle cx="500" cy="500" r="32" stroke="url(#bronzeMain)" stroke-width="1.8" fill="none" />
  <g id="bindu_zone" filter="url(#sacredShadow)">
    <circle cx="500" cy="500" r="8" fill="#1A0E05" />
    <circle cx="500" cy="500" r="3.5" fill="#F4EEE0" />
  </g>
</svg>`;
}

// 2. DIKPALA ASHTADIGBANDHANA YANTRA
function generateDikpalaYantra() {
  const petals8 = generateOgeePetals(8, 250, 385);
  const toRad = deg => deg * Math.PI / 180;

  // 8 Digpala Weapons & Mantras
  // पूर्व: लां (इन्द्र/वज्र), आग्नेय: रां (अग्नि/शक्ति), दक्षिण: टां (यम/दण्ड), नैर्ऋत्य: क्षां (निरृति/खड्ग)
  // पश्चिम: वां (वरुण/पाश), वायव्य: यां (वायु/ध्वज), उत्तर: सां (कुबेर/गदा), ईशान: हां (शिव/त्रिशूल)
  const digpalaSeeds = ['लां', 'रां', 'टां', 'क्षां', 'वां', 'यां', 'सां', 'हां'];
  const digpalaNames = ['इन्द्र', 'अग्नि', 'यम', 'निरृति', 'वरुण', 'वायु', 'कुबेर', 'ईशान'];

  // Octagram / 8-pointed protective star coordinates
  const rOuter = 230;
  const rInner = 145;
  const starPoints = [];
  for (let i = 0; i < 16; i++) {
    const r = i % 2 === 0 ? rOuter : rInner;
    const deg = i * (360 / 16);
    const x = 500 + r * Math.sin(toRad(deg));
    const y = 500 - r * Math.cos(toRad(deg));
    starPoints.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%">
  ${renderDefs()}
  <rect width="1000" height="1000" fill="url(#sacredBg)" />
  <circle cx="500" cy="500" r="480" fill="url(#digpalaAura)" />
  ${renderBhupura()}
  ${renderTrivalaya(415, 400, 385)}

  <!-- 3. Ashta-Dala Lotus Petals (अष्टदल पद्म - अष्टदिक्पाल शक्ति आवरण) -->
  <g id="ashta_dala" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none">
    ${petals8.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals8.map(p => `<path d="${p.spineD}" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.7" />`).join('\n    ')}
  </g>

  <!-- 8 Digpala Inscriptions -->
  <g id="digpala_texts" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="16" fill="#1A0E05" text-anchor="middle" dominant-baseline="central">
    ${petals8.map((p, idx) => {
      const rM = 320;
      const x = 500 + rM * Math.sin(toRad(p.midDeg));
      const y = 500 - rM * Math.cos(toRad(p.midDeg));
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}">${digpalaNames[idx]} ${digpalaSeeds[idx]}</text>`;
    }).join('\n    ')}
  </g>

  <!-- Intermediate Girdles -->
  <circle cx="500" cy="500" r="248" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />
  <circle cx="500" cy="500" r="236" stroke="url(#bronzeMain)" stroke-width="1.6" fill="none" />

  <!-- 4. Canonical Ashtakona / Octagram of Unbreakable Directional Shield (अष्टकोण दिग्बन्धन कवच) -->
  <polygon points="${starPoints.join(' ')}" stroke="url(#bronzeMain)" stroke-width="2.8" fill="none" />

  <!-- Inner Concentric Circle -->
  <circle cx="500" cy="500" r="120" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />
  <circle cx="500" cy="500" r="105" stroke="url(#bronzeMain)" stroke-width="1.5" stroke-dasharray="4,3" fill="none" />

  <!-- 8 Radial Protection Tridents (दिशारक्षा शूल) -->
  <g id="trishula_rays" stroke="url(#bronzeMain)" stroke-width="2.0">
    ${Array.from({ length: 8 }).map((_, i) => {
      const deg = i * 45;
      const x1 = 500 + 45 * Math.sin(toRad(deg));
      const y1 = 500 - 45 * Math.cos(toRad(deg));
      const x2 = 500 + 105 * Math.sin(toRad(deg));
      const y2 = 500 - 105 * Math.cos(toRad(deg));
      return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" />`;
    }).join('\n    ')}
  </g>

  <!-- 5. Central Digbandhana Core & Mahabindu -->
  <g id="bindu_zone" filter="url(#sacredShadow)">
    <circle cx="500" cy="500" r="38" fill="url(#digpalaAura)" />
    <circle cx="500" cy="500" r="8.5" fill="#1A0E05" />
    <circle cx="500" cy="500" r="3.5" fill="#F4EEE0" />
    <text x="500" y="482" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="18" fill="#1A0E05" text-anchor="middle">ॐ</text>
    <text x="500" y="525" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="18" fill="#1A0E05" text-anchor="middle">रक्ष</text>
  </g>
</svg>`;
}

// 3. BHOOMI KURMA YANTRA
function generateBhoomiKurmaYantra() {
  const petals8 = generateOgeePetals(8, 255, 385);
  const toRad = deg => deg * Math.PI / 180;

  // Prithvi Beejas & Attributes
  const prithviSeeds = ['लं', 'धरां', 'भूः', 'स्थिरा', 'अचला', 'क्षिति', 'वसुधा', 'धरा'];

  // Hexagon geometry representing Kurma carapace plates
  const rCarapace = 230;
  const hexPoints = [];
  for (let i = 0; i < 6; i++) {
    const deg = i * 60;
    const x = 500 + rCarapace * Math.sin(toRad(deg));
    const y = 500 - rCarapace * Math.cos(toRad(deg));
    hexPoints.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }

  // Inner Tortoise Hexagonal segments
  const rInnerHex = 135;
  const innerHexPoints = [];
  for (let i = 0; i < 6; i++) {
    const deg = i * 60 + 30;
    const x = 500 + rInnerHex * Math.sin(toRad(deg));
    const y = 500 - rInnerHex * Math.cos(toRad(deg));
    innerHexPoints.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%">
  ${renderDefs()}
  <rect width="1000" height="1000" fill="url(#sacredBg)" />
  <circle cx="500" cy="500" r="480" fill="url(#prithviAura)" />
  ${renderBhupura()}
  ${renderTrivalaya(415, 400, 385)}

  <!-- 3. Ashta-Dala Lotus Petals (अष्टदल पद्म - अष्ट वसुन्धरा मण्डल) -->
  <g id="ashta_dala" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none">
    ${petals8.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals8.map(p => `<path d="${p.spineD}" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.7" />`).join('\n    ')}
  </g>

  <!-- 8 Prithvi Beejaksharas -->
  <g id="prithvi_seeds" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="18" fill="#1A0E05" text-anchor="middle" dominant-baseline="central">
    ${petals8.map((p, idx) => {
      const rM = 320;
      const x = 500 + rM * Math.sin(toRad(p.midDeg));
      const y = 500 - rM * Math.cos(toRad(p.midDeg));
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}">${prithviSeeds[idx]}</text>`;
    }).join('\n    ')}
  </g>

  <!-- Intermediate Girdles -->
  <circle cx="500" cy="500" r="255" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />
  <circle cx="500" cy="500" r="245" stroke="url(#bronzeMain)" stroke-width="1.6" fill="none" />

  <!-- 4. Kurma Carapace Hexagonal Shield (कूर्म पृष्ठ मण्डल - पृथ्वी आधार) -->
  <polygon points="${hexPoints.join(' ')}" stroke="url(#bronzeMain)" stroke-width="2.8" fill="none" />
  <polygon points="${innerHexPoints.join(' ')}" stroke="url(#bronzeMain)" stroke-width="2.2" stroke-dasharray="5,3" fill="none" />

  <!-- Connecting Radials for Carapace Segments -->
  <g stroke="url(#bronzeMain)" stroke-width="1.8" opacity="0.75">
    ${Array.from({ length: 6 }).map((_, i) => {
      const deg = i * 60;
      const x1 = 500 + rInnerHex * Math.sin(toRad(deg + 30));
      const y1 = 500 - rInnerHex * Math.cos(toRad(deg + 30));
      const x2 = 500 + rCarapace * Math.sin(toRad(deg));
      const y2 = 500 - rCarapace * Math.cos(toRad(deg));
      return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" />`;
    }).join('\n    ')}
  </g>

  <!-- Central Prithvi Yantra Square (पृथ्वी तत्व चतुष्कोण) -->
  <rect x="430" y="430" width="140" height="140" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none" />

  <!-- 5. Bindu with Golden Earth Aura (महान् कूर्म महाबिन्दु) -->
  <g id="bindu_zone" filter="url(#sacredShadow)">
    <circle cx="500" cy="500" r="42" fill="url(#prithviAura)" />
    <circle cx="500" cy="500" r="8.5" fill="#1A0E05" />
    <circle cx="500" cy="500" r="3.5" fill="#F4EEE0" />
    <text x="500" y="478" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="20" fill="#1A0E05" text-anchor="middle">लं</text>
    <text x="500" y="528" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="16" fill="#1A0E05" text-anchor="middle">कूर्माय</text>
  </g>
</svg>`;
}

// 4. MATSYA YANTRA
function generateMatsyaYantra() {
  const petals12 = generateOgeePetals(12, 265, 385);
  const toRad = deg => deg * Math.PI / 180;

  // 12 Amrita Jala Seeds
  const matsyaSeeds = ['ॐ', 'मत्स्याय', 'नमः', 'क्लीं', 'वरुणाय', 'अमृताय', 'शुद्धये', 'शान्तये', 'पुष्टये', 'तुष्टये', 'स्वाहा', 'ह्रीं'];

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%">
  ${renderDefs()}
  <rect width="1000" height="1000" fill="url(#sacredBg)" />
  <circle cx="500" cy="500" r="480" fill="url(#jalaAmritaAura)" />
  ${renderBhupura()}
  ${renderTrivalaya(415, 400, 385)}

  <!-- 3. Dvadasha-Dala Lotus Petals (द्वादशदल पद्म - अमृत जल मण्डल) -->
  <g id="dvadasha_dala" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none">
    ${petals12.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals12.map(p => `<path d="${p.spineD}" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.6" />`).join('\n    ')}
  </g>

  <!-- 12 Petal Inscriptions -->
  <g id="matsya_seeds" font-family="'Noto Sans Devanagari', serif" font-weight="800" font-size="14.5" fill="#1A0E05" text-anchor="middle" dominant-baseline="central">
    ${petals12.map((p, idx) => {
      const rM = 325;
      const x = 500 + rM * Math.sin(toRad(p.midDeg));
      const y = 500 - rM * Math.cos(toRad(p.midDeg));
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}">${matsyaSeeds[idx]}</text>`;
    }).join('\n    ')}
  </g>

  <!-- Intermediate Girdles -->
  <circle cx="500" cy="500" r="265" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />
  <circle cx="500" cy="500" r="255" stroke="url(#bronzeMain)" stroke-width="1.6" fill="none" />

  <!-- 4. Sacred Twin Interlocking Fish Spirals (पवित्र मत्स्य युगल चक्र) -->
  <g id="twin_fish_currents" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none">
    <!-- Fish 1 (Ascending Northern Current) -->
    <path d="M 400 500 C 400 420, 460 360, 530 370 C 600 380, 620 440, 580 490 C 550 530, 480 520, 470 470" />
    <path d="M 530 370 C 560 340, 580 320, 600 330 C 590 350, 570 370, 550 380" stroke-width="2.0" /> <!-- Tail -->
    <circle cx="430" cy="460" r="3.5" fill="#1A0E05" /> <!-- Eye -->

    <!-- Fish 2 (Descending Southern Current) -->
    <path d="M 600 500 C 600 580, 540 640, 470 630 C 400 620, 380 560, 420 510 C 450 470, 520 480, 530 530" />
    <path d="M 470 630 C 440 660, 420 680, 400 670 C 410 650, 430 630, 450 620" stroke-width="2.0" /> <!-- Tail -->
    <circle cx="570" cy="540" r="3.5" fill="#1A0E05" /> <!-- Eye -->
  </g>

  <!-- Concentric Inner Circle -->
  <circle cx="500" cy="500" r="145" stroke="url(#bronzeMain)" stroke-width="2.2" stroke-dasharray="4,3" fill="none" />
  <circle cx="500" cy="500" r="75" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />

  <!-- 5. Bindu with Oceanic Amrita Radiance (मत्स्य महाबिन्दु) -->
  <g id="bindu_zone" filter="url(#sacredShadow)">
    <circle cx="500" cy="500" r="42" fill="url(#jalaAmritaAura)" />
    <circle cx="500" cy="500" r="8.5" fill="#1A0E05" />
    <circle cx="500" cy="500" r="3.5" fill="#F4EEE0" />
    <text x="500" y="475" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="20" fill="#1A0E05" text-anchor="middle">क्लीं</text>
    <text x="500" y="528" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="18" fill="#1A0E05" text-anchor="middle">मत्स्य</text>
  </g>
</svg>`;
}

// File saving routine
const yantras = [
  { id: 'vastu_dosha_nivarana_yantra', content: generateVastuDoshaNivaranaYantra() },
  { id: 'vastu_yantra', content: generateVastuDoshaNivaranaYantra() }, // Canonical high-res update for existing vastu_yantra
  { id: 'dikpala_ashtadigbandhana_yantra', content: generateDikpalaYantra() },
  { id: 'bhoomi_kurma_yantra', content: generateBhoomiKurmaYantra() },
  { id: 'matsya_yantra', content: generateMatsyaYantra() }
];

const dirSub = path.join(__dirname, '..', 'public', 'yantras', '09_Vastu');
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
