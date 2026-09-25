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
    <radialGradient id="durgaCrimsonAura" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#DC2626" stop-opacity="0.30" />
      <stop offset="50%" stop-color="#B91C1C" stop-opacity="0.18" />
      <stop offset="100%" stop-color="#1A0E05" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="chandiFireAura" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#EA580C" stop-opacity="0.35" />
      <stop offset="50%" stop-color="#DC2626" stop-opacity="0.20" />
      <stop offset="100%" stop-color="#7F1D1D" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="annapurnaGoldAura" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#F59E0B" stop-opacity="0.32" />
      <stop offset="50%" stop-color="#D97706" stop-opacity="0.18" />
      <stop offset="100%" stop-color="#78350F" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="lalitaRoseAura" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#E11D48" stop-opacity="0.35" />
      <stop offset="50%" stop-color="#BE123C" stop-opacity="0.20" />
      <stop offset="100%" stop-color="#4C0519" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="rubyBinduGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#EF4444" stop-opacity="0.85" />
      <stop offset="50%" stop-color="#B91C1C" stop-opacity="0.45" />
      <stop offset="100%" stop-color="#7F1D1D" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="goldBinduGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FBBF24" stop-opacity="0.85" />
      <stop offset="50%" stop-color="#D97706" stop-opacity="0.45" />
      <stop offset="100%" stop-color="#B45309" stop-opacity="0" />
    </radialGradient>
    <filter id="sacredShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#1A0E05" flood-opacity="0.25" />
    </filter>
  </defs>`;
}

// 1. MAHA DURGA YANTRA
function generateDurgaYantra() {
  const toRad = deg => (deg * Math.PI) / 180;
  const petals8 = generateOgeePetals(8, 255, 385);

  // 8 Ashta-Durga Manifestations
  const navadurga8 = [
    'शैलपुत्री', 'ब्रह्मचारिणी', 'चन्द्रघण्टा', 'कूष्माण्डा',
    'स्कन्दमाता', 'कात्यायनी', 'कालरात्रि', 'महागौरी'
  ];

  // 4 Trishula spear-heads at 4 cardinal directions (North, East, South, West)
  // Each Trishula has central prong and 2 curved outer tines
  const trishulas = [0, 90, 180, 270].map(deg => {
    return `<g transform="rotate(${deg} 500 500)">
      <line x1="500" y1="240" x2="500" y2="165" stroke-width="2.4" />
      <!-- Central spear tip -->
      <polygon points="500,150 493,168 507,168" fill="url(#bronzeMain)" />
      <!-- Left tine -->
      <path d="M 495 180 Q 480 170 482 155 Q 492 165 497 172" stroke-width="1.8" fill="none" />
      <!-- Right tine -->
      <path d="M 505 180 Q 520 170 518 155 Q 508 165 503 172" stroke-width="1.8" fill="none" />
    </g>`;
  }).join('\n    ');

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

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%">
  ${renderDefs()}
  <rect width="1000" height="1000" fill="url(#sacredBg)" />
  <circle cx="500" cy="500" r="480" fill="url(#durgaCrimsonAura)" />
  ${renderBhupura()}
  ${renderTrivalaya(415, 400, 385)}

  <!-- 3. Ashtadala Ogee Lotus (अष्टदल पद्म - अष्टदुर्गा मण्डल) -->
  <g id="ashtadala_petals" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none">
    ${petals8.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals8.map(p => `<path d="${p.spineD}" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.75" />`).join('\n    ')}
  </g>

  <!-- 8 Navadurga Names Inscriptions -->
  <g id="navadurga_names" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="18" fill="#1A0E05" text-anchor="middle" dominant-baseline="central">
    ${petals8.map((p, idx) => {
      const rM = 320;
      const x = 500 + rM * Math.sin(toRad(p.midDeg));
      const y = 500 - rM * Math.cos(toRad(p.midDeg));
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}">${navadurga8[idx]}</text>`;
    }).join('\n    ')}
  </g>

  <!-- Middle Girdle -->
  <circle cx="500" cy="500" r="255" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />
  <circle cx="500" cy="500" r="245" stroke="url(#bronzeMain)" stroke-width="1.6" fill="none" />

  <!-- 4. 4 Cardinal Trishula Astra Guard (चतुर्दिक् त्रिशूल अस्त्र मण्डल) -->
  <g id="cardinal_trishulas" stroke="url(#bronzeMain)">
    ${trishulas}
  </g>

  <!-- Inner Protective Rings -->
  <circle cx="500" cy="500" r="160" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />
  <circle cx="500" cy="500" r="150" stroke="url(#bronzeMain)" stroke-width="1.5" fill="none" />

  <!-- 5. Durga Shatkona (दुर्गा षट्कोण व अधोमुख त्रिकोण) -->
  <g id="durga_shatkona" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none" stroke-linejoin="round">
    <polygon points="${triUp}" />
    <polygon points="${triDown}" />
    <polygon points="500,565 440,465 560,465" stroke-width="2.2" stroke-dasharray="4,3" />
  </g>

  <!-- Hexagram Vertex Inscriptions: ॐ दुं दुर्गायै नमः -->
  <g id="durga_shatkona_texts" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="15" fill="#991B1B" text-anchor="middle" dominant-baseline="central">
    <text x="500" y="380">ॐ</text>
    <text x="605" y="440">दुं</text>
    <text x="605" y="560">दुर्गायै</text>
    <text x="500" y="620">नमः</text>
    <text x="395" y="560">सर्व</text>
    <text x="395" y="440">बाधाहरे</text>
  </g>

  <!-- 6. Central Maha Durga Parama Bindu Sanctuary (दुं महाबीज) -->
  <circle cx="500" cy="500" r="46" fill="url(#rubyBinduGlow)" />
  <circle cx="500" cy="500" r="38" fill="#FDF8F6" stroke="url(#bronzeMain)" stroke-width="2.6" />
  <text x="500" y="503" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="30" fill="#991B1B" text-anchor="middle" dominant-baseline="central">दुं</text>
  <circle cx="500" cy="500" r="4.5" fill="#7F1D1D" />
</svg>`;
}

// 2. MAHA CHANDIKA YANTRA
function generateChandikaYantra() {
  const toRad = deg => (deg * Math.PI) / 180;
  const petals8 = generateOgeePetals(8, 205, 325);

  // 9 Navarna Fire Flames (षोडश/नवार्ण ज्वाला मण्डल - ९ संहार अग्निशिखा)
  const flames9 = [];
  for (let i = 0; i < 9; i++) {
    const midDeg = i * 40;
    const startDeg = midDeg - 20;
    const endDeg = midDeg + 20;

    const rBase = 345;
    const rTip = 388;
    const x1 = 500 + rBase * Math.sin(toRad(startDeg));
    const y1 = 500 - rBase * Math.cos(toRad(startDeg));
    const x2 = 500 + rBase * Math.sin(toRad(endDeg));
    const y2 = 500 - rBase * Math.cos(toRad(endDeg));
    const tx = 500 + rTip * Math.sin(toRad(midDeg));
    const ty = 500 - rTip * Math.cos(toRad(midDeg));

    flames9.push(`M ${x1.toFixed(1)} ${y1.toFixed(1)} Q ${500 + 365 * Math.sin(toRad(midDeg - 8))} ${500 - 365 * Math.cos(toRad(midDeg - 8))} ${tx.toFixed(1)} ${ty.toFixed(1)} Q ${500 + 365 * Math.sin(toRad(midDeg + 8))} ${500 - 365 * Math.cos(toRad(midDeg + 8))} ${x2.toFixed(1)} ${y2.toFixed(1)}`);
  }

  // 9 Navarna Syllables: ऐं ह्रीं क्लीं चा मु ण्डा यै वि च्चे
  const navarnaSyllables = ['ऐं', 'ह्रीं', 'क्लीं', 'चा', 'मु', 'ण्डा', 'यै', 'वि', 'च्चे'];

  // 8 Ashta Matrikas
  const matrikas8 = ['ब्राह्मी', 'माहेश्वरी', 'कौमारी', 'वैष्णवी', 'वाराही', 'नारसिंही', 'ऐन्द्री', 'चामुण्डा'];

  // Tri-Shakti Mahapeetha (Inverted Equilateral Triangle radius 155)
  const triInverted = [180, 300, 60].map(deg => {
    const x = 500 + 155 * Math.sin(toRad(deg));
    const y = 500 - 155 * Math.cos(toRad(deg));
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%">
  ${renderDefs()}
  <rect width="1000" height="1000" fill="url(#sacredBg)" />
  <circle cx="500" cy="500" r="480" fill="url(#chandiFireAura)" />
  ${renderBhupura()}

  <!-- 2. Navarna Fire Corona (९ संहार अग्निशिखा मण्डल - ९ नवार्ण महाबीज) -->
  <g id="navarna_flames" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" stroke-linejoin="round">
    ${flames9.map(d => `<path d="${d}" />`).join('\n    ')}
  </g>

  <!-- 9 Navarna Aksharas Inscriptions on Flames -->
  <g id="navarna_aksharas" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="18" fill="#1A0E05" text-anchor="middle" dominant-baseline="central">
    ${navarnaSyllables.map((s, idx) => {
      const deg = idx * 40;
      const rM = 360;
      const x = 500 + rM * Math.sin(toRad(deg));
      const y = 500 - rM * Math.cos(toRad(deg));
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}">${s}</text>`;
    }).join('\n    ')}
  </g>

  ${renderTrivalaya(345, 335, 325)}

  <!-- 3. Ashtadala Matrika Lotus (अष्टदल पद्म - अष्टमातृका मण्डल) -->
  <g id="matrika_petals" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none">
    ${petals8.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals8.map(p => `<path d="${p.spineD}" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.75" />`).join('\n    ')}
  </g>

  <!-- 8 Matrika Names Inscriptions -->
  <g id="matrika_names" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="17" fill="#2E1405" text-anchor="middle" dominant-baseline="central">
    ${petals8.map((p, idx) => {
      const rM = 265;
      const x = 500 + rM * Math.sin(toRad(p.midDeg));
      const y = 500 - rM * Math.cos(toRad(p.midDeg));
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}">${matrikas8[idx]}</text>`;
    }).join('\n    ')}
  </g>

  <!-- Intermediate Girdles -->
  <circle cx="500" cy="500" r="205" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />
  <circle cx="500" cy="500" r="190" stroke="url(#bronzeMain)" stroke-width="1.6" fill="none" />

  <!-- 4. Tri-Shakti Mahapeetha (त्रिशक्ति महापीठ - महाकाली, महालक्ष्मी, महासरस्वती) -->
  <g id="trishakti_peetha" stroke="url(#bronzeMain)" stroke-width="2.8" fill="none" stroke-linejoin="round">
    <polygon points="${triInverted}" />
    <!-- Inner Concentric Triangle -->
    <polygon points="500,600 410,445 590,445" stroke-width="1.8" stroke-dasharray="4,4" />
  </g>

  <!-- Tri-Shakti Vertex Seed Inscriptions: ऐं ह्रीं क्लीं -->
  <g id="tri_shakti_seeds" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="18" fill="#B91C1C" text-anchor="middle" dominant-baseline="central">
    <!-- Top Left (Mahakali): ऐं -->
    <text x="430" y="420">ऐं</text>
    <!-- Top Right (Mahasaraswati): क्लीं -->
    <text x="570" y="420">क्लीं</text>
    <!-- Bottom Vertex (Mahalakshmi): ह्रीं -->
    <text x="500" y="625">ह्रीं</text>
  </g>

  <!-- 5. Central Maha Chandika Parama Bindu Sanctuary (क्लीं चामुण्डायै) -->
  <circle cx="500" cy="500" r="46" fill="url(#rubyBinduGlow)" />
  <circle cx="500" cy="500" r="38" fill="#FDF8F6" stroke="url(#bronzeMain)" stroke-width="2.6" />
  <text x="500" y="492" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="12" fill="#7F1D1D" text-anchor="middle" dominant-baseline="central">चामुण्डायै</text>
  <text x="500" y="509" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="13" fill="#7F1D1D" text-anchor="middle" dominant-baseline="central">विच्चे</text>
  <circle cx="500" cy="500" r="4.5" fill="#991B1B" />
</svg>`;
}

// 3. ANNAPURNA YANTRA
function generateAnnapurnaYantra() {
  const toRad = deg => (deg * Math.PI) / 180;
  const petals16 = generateOgeePetals(16, 275, 385);
  const petals8 = generateOgeePetals(8, 165, 265);

  // 16 Syllables of Annapurna Mantra: ॐ ह्रीं श्रीं क्लीं नमो भगवति माहेश्वरि अन्नपूर्णे
  const syllables16 = ['ॐ', 'ह्रीं', 'श्रीं', 'क्लीं', 'न', 'मो', 'भ', 'ग', 'व', 'ति', 'मा', 'हे', 'श्व', 'रि', 'अ', 'न्नपूर्णे'];
  // 8 Sacred Nectar Herbs & Grains: धान्य, सुवर्ण, पुष्टि, तुष्टि, मेधा, शान्ति, कान्ति, सिद्धि
  const grains8 = ['धान्यं', 'सुवर्णं', 'पुष्टिं', 'तुष्टिं', 'मेधां', 'शान्तिं', 'कान्तिं', 'सिद्धिं'];

  // Golden Ladle (Swarna-Darvi) and Akshata Pot (अक्षत पात्र) Motif
  const darviAndPot = `
    <!-- Akshata Bowl Profile -->
    <path d="M 450 515 C 445 555, 555 555, 550 515 Z" stroke-width="2.6" fill="none" />
    <ellipse cx="500" cy="515" rx="50" ry="12" stroke-width="2.2" fill="none" />
    <!-- Golden Ladle (कलछी) Stem & Scoop -->
    <line x1="435" y1="440" x2="520" y2="525" stroke-width="3.0" stroke-linecap="round" />
    <circle cx="430" cy="435" r="14" stroke-width="2.2" fill="none" />
    <path d="M 420 435 Q 430 420 440 435" stroke-width="1.8" fill="none" />
  `;

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

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%">
  ${renderDefs()}
  <rect width="1000" height="1000" fill="url(#sacredBg)" />
  <circle cx="500" cy="500" r="480" fill="url(#annapurnaGoldAura)" />
  ${renderBhupura()}
  ${renderTrivalaya(415, 400, 385)}

  <!-- 3. Shodashadala Lotus (षोडशदल पद्म - १६ अमृत अन्न धारा मण्डल) -->
  <g id="shodashadala_petals" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none">
    ${petals16.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals16.map(p => `<path d="${p.spineD}" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.75" />`).join('\n    ')}
  </g>

  <!-- 16 Annapurna Syllables Inscriptions -->
  <g id="shodasha_annapurna_syllables" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="16" fill="#1A0E05" text-anchor="middle" dominant-baseline="central">
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

  <!-- 4. Ashtadala Dhanya Lotus (अष्टदल पद्म - ८ धान्य व समृद्धि शक्तियाँ) -->
  <g id="ashtadala_petals" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none">
    ${petals8.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals8.map(p => `<path d="${p.spineD}" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.75" />`).join('\n    ')}
  </g>

  <!-- 8 Dhanya Blessing Inscriptions -->
  <g id="ashta_dhanya_names" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="16" fill="#2E1405" text-anchor="middle" dominant-baseline="central">
    ${petals8.map((p, idx) => {
      const rM = 215;
      const x = 500 + rM * Math.sin(toRad(p.midDeg));
      const y = 500 - rM * Math.cos(toRad(p.midDeg));
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}">${grains8[idx]}</text>`;
    }).join('\n    ')}
  </g>

  <!-- Inner Rings -->
  <circle cx="500" cy="500" r="165" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />
  <circle cx="500" cy="500" r="155" stroke="url(#bronzeMain)" stroke-width="1.5" fill="none" />

  <!-- 5. Annapurna Shatkona & Swarna-Darvi Matrix (अन्नपूर्णा षट्कोण व स्वर्ण दर्वी) -->
  <g id="annapurna_shatkona" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none" stroke-linejoin="round">
    <polygon points="${triUp}" />
    <polygon points="${triDown}" />
    ${darviAndPot}
  </g>

  <!-- Hexagram Vertex Inscriptions: ॐ ह्रीं श्रीं क्लीं -->
  <g id="annapurna_shatkona_texts" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="15" fill="#78350F" text-anchor="middle" dominant-baseline="central">
    <text x="500" y="380">ॐ</text>
    <text x="610" y="440">ह्रीं</text>
    <text x="610" y="560">श्रीं</text>
    <text x="500" y="620">क्लीं</text>
    <text x="390" y="560">अन्नं</text>
    <text x="390" y="440">देहि</text>
  </g>

  <!-- 6. Central Annapurna Parama Bindu Sanctuary (ह्रीं महाबीज) -->
  <circle cx="500" cy="500" r="46" fill="url(#goldBinduGlow)" />
  <circle cx="500" cy="500" r="38" fill="#FDFBF7" stroke="url(#bronzeMain)" stroke-width="2.6" />
  <text x="500" y="503" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="30" fill="#B45309" text-anchor="middle" dominant-baseline="central">ह्रीं</text>
  <circle cx="500" cy="500" r="4.5" fill="#78350F" />
</svg>`;
}

// 4. LALITA PARAMESHVARI YANTRA
function generateLalitaYantra() {
  const toRad = deg => (deg * Math.PI) / 180;
  const petals16 = generateOgeePetals(16, 275, 385);
  const petals8 = generateOgeePetals(8, 165, 265);

  // 16 Nitya Syllables / Devis
  const nityas16 = ['कामेश्वरी', 'भगमालिनी', 'नित्यक्लिन्ना', 'भेरुण्डा', 'वह्निवासिनी', 'महावज्रेश्वरी', 'शिवदूती', 'त्वरिता', 'कुलसुन्दरी', 'नित्या', 'नीलपताका', 'विजया', 'सर्वमङ्गला', 'ज्वालामालिनी', 'चित्रा', 'महानित्या'];
  // 8 Vagdevis: वशिनी, कामेश्वरी, मोदिनी, विमला, अरुणा, जयिनी, सर्वेश्वरी, कौलिनी
  const vagdevis8 = ['वशिनी', 'कामिनी', 'मोहिनी', 'विमला', 'अरुणा', 'जयिनी', 'सर्वेशा', 'कौलिनी'];

  // Five Floral Arrows (पञ्च पुष्पबाण: द्रां द्रीं क्लीं ब्लूं सः) radiating from center
  const floralArrows = [
    `<line x1="500" y1="440" x2="500" y2="390" stroke-width="2.4" />`,
    `<polygon points="500,380 495,395 505,395" fill="url(#bronzeMain)" />`,
    `<line x1="540" y1="480" x2="590" y2="465" stroke-width="2.4" />`,
    `<polygon points="600,462 588,460 592,472" fill="url(#bronzeMain)" />`,
    `<line x1="530" y1="530" x2="570" y2="570" stroke-width="2.4" />`,
    `<polygon points="578,578 565,572 572,565" fill="url(#bronzeMain)" />`,
    `<line x1="470" y1="530" x2="430" y2="570" stroke-width="2.4" />`,
    `<polygon points="422,578 428,565 435,572" fill="url(#bronzeMain)" />`,
    `<line x1="460" y1="480" x2="410" y2="465" stroke-width="2.4" />`,
    `<polygon points="400,462 408,472 412,460" fill="url(#bronzeMain)" />`
  ].join('\n    ');

  // Sugarcane Bow (इक्षुकोदण्ड) arcs on flanks
  const sugarcaneBow = `
    <!-- Left Bow Arc -->
    <path d="M 430 420 Q 395 500 430 580" stroke-width="2.8" stroke-linecap="round" fill="none" />
    <line x1="430" y1="420" x2="430" y2="580" stroke-width="1.2" stroke-dasharray="3,3" />
    <!-- Right Bow Arc -->
    <path d="M 570 420 Q 605 500 570 580" stroke-width="2.8" stroke-linecap="round" fill="none" />
    <line x1="570" y1="420" x2="570" y2="580" stroke-width="1.2" stroke-dasharray="3,3" />
  `;

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

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%">
  ${renderDefs()}
  <rect width="1000" height="1000" fill="url(#sacredBg)" />
  <circle cx="500" cy="500" r="480" fill="url(#lalitaRoseAura)" />
  ${renderBhupura()}
  ${renderTrivalaya(415, 400, 385)}

  <!-- 3. Shodashadala Nitya Lotus (षोडशदल पद्म - १६ नित्या मण्डल) -->
  <g id="shodashadala_petals" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none">
    ${petals16.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals16.map(p => `<path d="${p.spineD}" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.75" />`).join('\n    ')}
  </g>

  <!-- 16 Nitya Inscriptions -->
  <g id="shodasha_nitya_names" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="14.5" fill="#1A0E05" text-anchor="middle" dominant-baseline="central">
    ${petals16.map((p, idx) => {
      const rM = 330;
      const x = 500 + rM * Math.sin(toRad(p.midDeg));
      const y = 500 - rM * Math.cos(toRad(p.midDeg));
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}">${nityas16[idx]}</text>`;
    }).join('\n    ')}
  </g>

  <!-- Middle Girdle -->
  <circle cx="500" cy="500" r="275" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />
  <circle cx="500" cy="500" r="265" stroke="url(#bronzeMain)" stroke-width="1.6" fill="none" />

  <!-- 4. Ashtadala Vagdevi Lotus (अष्टदल पद्म - ८ वशिनी आदि वाग्देवता मण्डल) -->
  <g id="ashtadala_petals" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none">
    ${petals8.map(p => `<path d="${p.pathD}" />`).join('\n    ')}
    ${petals8.map(p => `<path d="${p.spineD}" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.75" />`).join('\n    ')}
  </g>

  <!-- 8 Vagdevi Names Inscriptions -->
  <g id="ashta_vagdevi_names" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="16" fill="#2E1405" text-anchor="middle" dominant-baseline="central">
    ${petals8.map((p, idx) => {
      const rM = 215;
      const x = 500 + rM * Math.sin(toRad(p.midDeg));
      const y = 500 - rM * Math.cos(toRad(p.midDeg));
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}">${vagdevis8[idx]}</text>`;
    }).join('\n    ')}
  </g>

  <!-- Inner Rings -->
  <circle cx="500" cy="500" r="165" stroke="url(#bronzeMain)" stroke-width="2.4" fill="none" />
  <circle cx="500" cy="500" r="155" stroke="url(#bronzeMain)" stroke-width="1.5" fill="none" />

  <!-- 5. Kamakala Shatkona, Panchabana & Ikshukodanda Matrix (कामकला षट्कोण, पञ्चबाण व इक्षुकोदण्ड) -->
  <g id="kamakala_matrix" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none" stroke-linejoin="round">
    <polygon points="${triUp}" />
    <polygon points="${triDown}" />
    ${sugarcaneBow}
  </g>

  <!-- 5 Floral Arrows (पञ्चबाण) -->
  <g id="floral_arrows" stroke="url(#bronzeMain)">
    ${floralArrows}
  </g>

  <!-- Central Inverted Kamakala Trikona -->
  <polygon points="500,560 440,460 560,460" stroke="url(#bronzeMain)" stroke-width="2.2" fill="none" />

  <!-- 6. Central Lalita Kamakala Parama Bindu Sanctuary (श्रीं ह्रीं कामकला) -->
  <circle cx="500" cy="500" r="46" fill="url(#rubyBinduGlow)" />
  <circle cx="500" cy="500" r="38" fill="#FDF8F6" stroke="url(#bronzeMain)" stroke-width="2.6" />
  <text x="500" y="492" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="14" fill="#9F1239" text-anchor="middle" dominant-baseline="central">श्रीं</text>
  <text x="500" y="510" font-family="'Noto Sans Devanagari', serif" font-weight="900" font-size="14" fill="#9F1239" text-anchor="middle" dominant-baseline="central">ह्रीं</text>
  <circle cx="500" cy="500" r="4.5" fill="#BE123C" />
</svg>`;
}

// Targets and directories
const targets = [
  {
    id: 'durga_yantra',
    generator: generateDurgaYantra,
    dirs: [
      'public/yantras',
      'public/yantras/06_Devi',
      'public/yantras/07_Protection'
    ]
  },
  {
    id: 'chandika_yantra',
    generator: generateChandikaYantra,
    dirs: [
      'public/yantras',
      'public/yantras/06_Devi'
    ]
  },
  {
    id: 'annapurna_yantra',
    generator: generateAnnapurnaYantra,
    dirs: [
      'public/yantras',
      'public/yantras/06_Devi',
      'public/yantras/04_Lakshmi'
    ]
  },
  {
    id: 'lalita_parameshvari_yantra',
    generator: generateLalitaYantra,
    dirs: [
      'public/yantras',
      'public/yantras/06_Devi'
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
