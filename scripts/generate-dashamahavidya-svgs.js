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

    petals.push({ i, midDeg, pathD, spineD });
  }
  return petals;
}

// Canonical Bhupura Generator
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
    <circle cx="500" cy="500" r="${r3}" stroke-width="2.6" />
  </g>`;
}

// Canonical Lotus Petals Group
function renderLotusGroup(petals, id, strokeId = 'bronzeMain', strokeW = '2.6', spineW = '1.6') {
  const paths = petals.map(p => `    <path d="${p.pathD}" stroke-width="${strokeW}" />\n    <path d="${p.spineD}" stroke-width="${spineW}" opacity="0.75" />`).join('\n');
  return `
  <!-- Lotus Petals (${id}) -->
  <g id="${id}" stroke="url(#${strokeId})" fill="none" stroke-linejoin="round" stroke-linecap="round">
${paths}
  </g>`;
}

// Standard SVG Wrapper
function wrapSvg(content, customGradients = '') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%">
  <defs>
    <!-- Deep Consecrated Antique Bronze Gradients -->
    <linearGradient id="bronzeMain" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1A0E05" />
      <stop offset="35%" stop-color="#3E1E07" />
      <stop offset="70%" stop-color="#542608" />
      <stop offset="100%" stop-color="#1C0D04" />
    </linearGradient>
    <radialGradient id="sacredAura" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#B38226" stop-opacity="0.12" />
      <stop offset="100%" stop-color="#B38226" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="binduGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FF3300" stop-opacity="0.35" />
      <stop offset="100%" stop-color="#800000" stop-opacity="0" />
    </radialGradient>
${customGradients}
  </defs>

  <!-- Ambient Radiant Aura -->
  <circle cx="500" cy="500" r="485" fill="url(#sacredAura)" />

${content}
</svg>`;
}

// 1. Kali Yantra
function buildKaliYantra() {
  const petals8 = generateOgeePetals(8, 295, 382);
  const content = `
${renderBhupura('bronzeMain')}
${renderTrivalaya(410, 396, 382, 'bronzeMain')}
${renderLotusGroup(petals8, 'ashtadala-padma')}

  <!-- Intermediate Circle -->
  <circle cx="500" cy="500" r="295" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none" />

  <!-- 4. Five Concentric Downward-Pointing Shakti Triangles (पञ्चकोण) -->
  <g id="kali-shakti-triangles" stroke="url(#bronzeMain)" fill="none" stroke-linejoin="round">
    <!-- Triangle 1 (Outermost Downward Triangle) -->
    <polygon points="500,740 260,325 740,325" stroke-width="2.8" />
    <!-- Triangle 2 -->
    <polygon points="500,690 305,355 695,355" stroke-width="2.6" />
    <!-- Triangle 3 -->
    <polygon points="500,640 350,385 650,385" stroke-width="2.4" />
    <!-- Triangle 4 -->
    <polygon points="500,590 395,415 605,415" stroke-width="2.4" />
    <!-- Triangle 5 (Innermost Downward Triangle) -->
    <polygon points="500,540 440,445 560,445" stroke-width="2.6" />
  </g>

  <!-- 5. Parama Bindu & Mahakali Beejakshara 'क्रीं' -->
  <circle cx="500" cy="495" r="30" fill="url(#binduGlow)" />
  <circle id="parama-bindu" cx="500" cy="495" r="9" fill="#4D0E00" stroke="#1A0E05" stroke-width="2.5" />
  <text x="500" y="525" text-anchor="middle" font-family="'Cinzel Decorative', 'Noto Sans Devanagari', serif" font-size="24" font-weight="900" fill="#1A0E05" letter-spacing="1">क्रीं</text>
`;
  return wrapSvg(content);
}

// 2. Tara Yantra
function buildTaraYantra() {
  const petals8 = generateOgeePetals(8, 290, 382);
  const content = `
${renderBhupura('bronzeMain')}
${renderTrivalaya(410, 396, 382, 'bronzeMain')}
${renderLotusGroup(petals8, 'tara-ashtadala')}

  <!-- Intermediate Circle -->
  <circle cx="500" cy="500" r="290" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none" />
  <circle cx="500" cy="500" r="275" stroke="url(#bronzeMain)" stroke-width="1.8" fill="none" />

  <!-- 4. Sacred Downward Tara Shakti Triangle -->
  <g id="tara-shakti-matrix" stroke="url(#bronzeMain)" fill="none" stroke-linejoin="round">
    <!-- Outer Inverted Equilateral Triangle -->
    <polygon points="500,725 270,325 730,325" stroke-width="2.8" />
    <!-- Inner Concentric Triangle -->
    <polygon points="500,665 315,345 685,345" stroke-width="2.2" />
  </g>

  <!-- 5. Parama Bindu & Ugra Tara Beejakshara 'स्त्रीं' -->
  <circle cx="500" cy="495" r="32" fill="url(#binduGlow)" />
  <circle id="parama-bindu" cx="500" cy="495" r="9" fill="#4D0E00" stroke="#1A0E05" stroke-width="2.5" />
  <text x="500" y="528" text-anchor="middle" font-family="'Cinzel Decorative', 'Noto Sans Devanagari', serif" font-size="24" font-weight="900" fill="#1A0E05" letter-spacing="1">स्त्रीं</text>
`;
  return wrapSvg(content);
}

// 3. Tripura Sundari / Shodashi Yantra
function buildTripuraSundariYantra() {
  const outerPetals16 = generateOgeePetals(16, 310, 390);
  const innerPetals8 = generateOgeePetals(8, 225, 310);
  const content = `
${renderBhupura('bronzeMain')}
${renderTrivalaya(420, 405, 390, 'bronzeMain')}
${renderLotusGroup(outerPetals16, 'outer-lotus-16', 'bronzeMain', '2.4', '1.4')}

  <!-- Ring between lotuses -->
  <circle cx="500" cy="500" r="310" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none" />

${renderLotusGroup(innerPetals8, 'inner-lotus-8', 'bronzeMain', '2.6', '1.6')}

  <!-- Circle enclosing Mula Trikona -->
  <circle cx="500" cy="500" r="225" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none" />
  <circle cx="500" cy="500" r="215" stroke="url(#bronzeMain)" stroke-width="1.8" fill="none" />

  <!-- 4. Sacred Mula Trikona (Root Triangle) -->
  <g id="shodashi-trikona" stroke="url(#bronzeMain)" stroke-width="2.8" fill="none" stroke-linejoin="round">
    <polygon points="500,670 325,365 675,365" />
  </g>

  <!-- 5. Kamakala Bindu Triad & Parama Bindu -->
  <!-- Top Left Bindu (Prakasha) -->
  <circle cx="430" cy="435" r="7" fill="#4D0E00" stroke="#1A0E05" stroke-width="2" />
  <!-- Top Right Bindu (Vimarsha) -->
  <circle cx="570" cy="435" r="7" fill="#4D0E00" stroke="#1A0E05" stroke-width="2" />
  <!-- Lower Center Bindu (Mishra Phala) -->
  <circle cx="500" cy="555" r="7" fill="#4D0E00" stroke="#1A0E05" stroke-width="2" />

  <!-- Parama Bindu -->
  <circle cx="500" cy="490" r="35" fill="url(#binduGlow)" />
  <circle id="parama-bindu" cx="500" cy="490" r="9" fill="#4D0E00" stroke="#1A0E05" stroke-width="2.5" />
  <text x="500" y="522" text-anchor="middle" font-family="'Cinzel Decorative', 'Noto Sans Devanagari', serif" font-size="22" font-weight="900" fill="#1A0E05" letter-spacing="1">ह्रीं</text>
`;
  return wrapSvg(content);
}

// 4. Bhuvaneshvari Yantra
function buildBhuvaneshvariYantra() {
  const petals8 = generateOgeePetals(8, 290, 382);
  const content = `
${renderBhupura('bronzeMain')}
${renderTrivalaya(410, 396, 382, 'bronzeMain')}
${renderLotusGroup(petals8, 'bhuvaneshvari-ashtadala')}

  <!-- Ring enclosing Shatkona -->
  <circle cx="500" cy="500" r="290" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none" />

  <!-- 4. Sacred Cosmic Shatkona (Hexagram of All Universes) -->
  <g id="bhuvaneshvari-shatkona" stroke="url(#bronzeMain)" stroke-width="2.8" fill="none" stroke-linejoin="round">
    <!-- Upward Shiva Triangle -->
    <polygon points="500,285 315,605 685,605" />
    <!-- Downward Shakti Triangle -->
    <polygon points="500,715 315,395 685,395" />
  </g>

  <!-- Inner Circle (Hritpadma Sphere) -->
  <circle cx="500" cy="500" r="115" stroke="url(#bronzeMain)" stroke-width="2.2" fill="none" />

  <!-- 5. Parama Bindu & Maya Beej 'ह्रीं' -->
  <circle cx="500" cy="500" r="32" fill="url(#binduGlow)" />
  <circle id="parama-bindu" cx="500" cy="500" r="9" fill="#4D0E00" stroke="#1A0E05" stroke-width="2.5" />
  <text x="500" y="532" text-anchor="middle" font-family="'Cinzel Decorative', 'Noto Sans Devanagari', serif" font-size="24" font-weight="900" fill="#1A0E05" letter-spacing="1">ह्रीं</text>
`;
  return wrapSvg(content);
}

// 5. Bhairavi Yantra
function buildBhairaviYantra() {
  const petals8 = generateOgeePetals(8, 290, 382);
  const content = `
${renderBhupura('bronzeMain')}
${renderTrivalaya(410, 396, 382, 'bronzeMain')}
${renderLotusGroup(petals8, 'bhairavi-ashtadala')}

  <!-- Intermediate Ring -->
  <circle cx="500" cy="500" r="290" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none" />

  <!-- 4. Sacred Shatkona & Inner Triangle -->
  <g id="bhairavi-matrix" stroke="url(#bronzeMain)" fill="none" stroke-linejoin="round">
    <!-- Outer Hexagram -->
    <polygon points="500,290 320,600 680,600" stroke-width="2.8" />
    <polygon points="500,710 320,400 680,400" stroke-width="2.8" />

    <!-- Inner Central Downward Shakti Triangle -->
    <polygon points="500,610 395,430 605,430" stroke-width="2.6" />
  </g>

  <!-- 5. Parama Bindu & Chaitanya Beej 'ह्स्रैं' -->
  <circle cx="500" cy="495" r="30" fill="url(#binduGlow)" />
  <circle id="parama-bindu" cx="500" cy="495" r="9" fill="#4D0E00" stroke="#1A0E05" stroke-width="2.5" />
  <text x="500" y="525" text-anchor="middle" font-family="'Cinzel Decorative', 'Noto Sans Devanagari', serif" font-size="22" font-weight="900" fill="#1A0E05" letter-spacing="1">ह्स्रैं</text>
`;
  return wrapSvg(content);
}

// 6. Chhinnamasta Yantra
function buildChhinnamastaYantra() {
  const petals8 = generateOgeePetals(8, 290, 382);
  const content = `
${renderBhupura('bronzeMain')}
${renderTrivalaya(410, 396, 382, 'bronzeMain')}
${renderLotusGroup(petals8, 'chhinnamasta-ashtadala')}

  <!-- Intermediate Ring -->
  <circle cx="500" cy="500" r="290" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none" />

  <!-- 4. Dynamic Shatkona & Inverted Primal Yoni Triangle -->
  <g id="chhinnamasta-matrix" stroke="url(#bronzeMain)" fill="none" stroke-linejoin="round">
    <!-- Shatkona -->
    <polygon points="500,300 325,600 675,600" stroke-width="2.8" />
    <polygon points="500,700 325,400 675,400" stroke-width="2.8" />

    <!-- Inner Circle -->
    <circle cx="500" cy="500" r="140" stroke-width="2.2" />

    <!-- Innermost Downward Yoni Triangle -->
    <polygon points="500,620 390,430 610,430" stroke-width="2.8" />
  </g>

  <!-- 5. Parama Bindu & Vajra Vairochani Beej 'हूं' -->
  <circle cx="500" cy="495" r="32" fill="url(#binduGlow)" />
  <circle id="parama-bindu" cx="500" cy="495" r="9" fill="#4D0E00" stroke="#1A0E05" stroke-width="2.5" />
  <text x="500" y="527" text-anchor="middle" font-family="'Cinzel Decorative', 'Noto Sans Devanagari', serif" font-size="24" font-weight="900" fill="#1A0E05" letter-spacing="1">हूं</text>
`;
  return wrapSvg(content);
}

// 7. Dhumavati Yantra
function buildDhumavatiYantra() {
  const petals8 = generateOgeePetals(8, 290, 382);
  const content = `
${renderBhupura('bronzeMain')}
${renderTrivalaya(410, 396, 382, 'bronzeMain')}
${renderLotusGroup(petals8, 'dhumavati-ashtadala')}

  <!-- Intermediate Ring -->
  <circle cx="500" cy="500" r="290" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none" />

  <!-- 4. Transcendental Shatkona of Void (शून्यता मण्डल) -->
  <g id="dhumavati-matrix" stroke="url(#bronzeMain)" fill="none" stroke-linejoin="round">
    <!-- Hexagram of Primal Void -->
    <polygon points="500,300 330,600 670,600" stroke-width="2.8" />
    <polygon points="500,700 330,400 670,400" stroke-width="2.8" />

    <!-- Inner Triangle -->
    <polygon points="500,620 400,440 600,440" stroke-width="2.6" />
  </g>

  <!-- 5. Parama Bindu & Dhumavati Beej 'धूं' -->
  <circle cx="500" cy="495" r="32" fill="url(#binduGlow)" />
  <circle id="parama-bindu" cx="500" cy="495" r="9" fill="#4D0E00" stroke="#1A0E05" stroke-width="2.5" />
  <text x="500" y="527" text-anchor="middle" font-family="'Cinzel Decorative', 'Noto Sans Devanagari', serif" font-size="24" font-weight="900" fill="#1A0E05" letter-spacing="1">धूं</text>
`;
  return wrapSvg(content);
}

// 8. Bagalamukhi Yantra
function buildBagalamukhiYantra() {
  const petals8 = generateOgeePetals(8, 290, 382);
  const customGrads = `
    <!-- Dedicated Consecrated Pitambari Golden-Bronze Gradient -->
    <linearGradient id="bagalaBronze" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#241505" />
      <stop offset="35%" stop-color="#4A2606" />
      <stop offset="70%" stop-color="#6B3A0A" />
      <stop offset="100%" stop-color="#211204" />
    </linearGradient>
  `;
  const content = `
${renderBhupura('bagalaBronze')}
${renderTrivalaya(410, 396, 382, 'bagalaBronze')}
${renderLotusGroup(petals8, 'bagala-ashtadala', 'bagalaBronze')}

  <!-- Intermediate Ring -->
  <circle cx="500" cy="500" r="290" stroke="url(#bagalaBronze)" stroke-width="2.6" fill="none" />

  <!-- 4. Sacred Stambhana Shatkona & Inner Triangle -->
  <g id="bagala-stambhana-matrix" stroke="url(#bagalaBronze)" fill="none" stroke-linejoin="round">
    <!-- Hexagram of Stambhana Power -->
    <polygon points="500,290 320,600 680,600" stroke-width="2.8" />
    <polygon points="500,710 320,400 680,400" stroke-width="2.8" />

    <!-- Inner Central Downward Stambhana Triangle -->
    <polygon points="500,620 390,430 610,430" stroke-width="2.8" />
  </g>

  <!-- 5. Parama Bindu & Stambhana Beej 'ह्लीं' -->
  <circle cx="500" cy="495" r="32" fill="url(#binduGlow)" />
  <circle id="parama-bindu" cx="500" cy="495" r="9" fill="#5C2600" stroke="#241505" stroke-width="2.5" />
  <text x="500" y="527" text-anchor="middle" font-family="'Cinzel Decorative', 'Noto Sans Devanagari', serif" font-size="24" font-weight="900" fill="#241505" letter-spacing="1">ह्लीं</text>
`;
  return wrapSvg(content, customGrads);
}

// 9. Matangi Yantra
function buildMatangiYantra() {
  const outerPetals16 = generateOgeePetals(16, 310, 390);
  const innerPetals8 = generateOgeePetals(8, 230, 310);
  const content = `
${renderBhupura('bronzeMain')}
${renderTrivalaya(420, 405, 390, 'bronzeMain')}
${renderLotusGroup(outerPetals16, 'matangi-outer-16', 'bronzeMain', '2.4', '1.4')}

  <!-- Ring between lotuses -->
  <circle cx="500" cy="500" r="310" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none" />

${renderLotusGroup(innerPetals8, 'matangi-inner-8', 'bronzeMain', '2.6', '1.6')}

  <!-- Ring enclosing matrix -->
  <circle cx="500" cy="500" r="230" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none" />

  <!-- 4. Sacred Shatkona & Inner Triangle of Wisdom & Speech -->
  <g id="matangi-matrix" stroke="url(#bronzeMain)" fill="none" stroke-linejoin="round">
    <polygon points="500,320 350,580 650,580" stroke-width="2.8" />
    <polygon points="500,680 350,420 650,420" stroke-width="2.8" />
    <polygon points="500,600 410,450 590,450" stroke-width="2.6" />
  </g>

  <!-- 5. Parama Bindu & Saraswati-Matangi Beej 'ऐं' -->
  <circle cx="500" cy="495" r="32" fill="url(#binduGlow)" />
  <circle id="parama-bindu" cx="500" cy="495" r="9" fill="#4D0E00" stroke="#1A0E05" stroke-width="2.5" />
  <text x="500" y="526" text-anchor="middle" font-family="'Cinzel Decorative', 'Noto Sans Devanagari', serif" font-size="24" font-weight="900" fill="#1A0E05" letter-spacing="1">ऐं</text>
`;
  return wrapSvg(content);
}

// 10. Kamala Yantra
function buildKamalaYantra() {
  const outerPetals16 = generateOgeePetals(16, 310, 390);
  const innerPetals8 = generateOgeePetals(8, 225, 310);
  const content = `
${renderBhupura('bronzeMain')}
${renderTrivalaya(420, 405, 390, 'bronzeMain')}
${renderLotusGroup(outerPetals16, 'kamala-outer-16', 'bronzeMain', '2.4', '1.4')}

  <!-- Ring between lotuses -->
  <circle cx="500" cy="500" r="310" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none" />

${renderLotusGroup(innerPetals8, 'kamala-inner-8', 'bronzeMain', '2.6', '1.6')}

  <!-- Ring enclosing Shatkona -->
  <circle cx="500" cy="500" r="225" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none" />

  <!-- 4. Sacred Golden Shatkona (Hexagram of Absolute Prosperity) -->
  <g id="kamala-shatkona" stroke="url(#bronzeMain)" stroke-width="2.8" fill="none" stroke-linejoin="round">
    <polygon points="500,320 345,590 655,590" />
    <polygon points="500,680 345,410 655,410" />
  </g>

  <!-- 5. Parama Bindu & Maha Kamala Beej 'श्रीं' -->
  <circle cx="500" cy="500" r="34" fill="url(#binduGlow)" />
  <circle id="parama-bindu" cx="500" cy="500" r="9" fill="#4D0E00" stroke="#1A0E05" stroke-width="2.5" />
  <text x="500" y="530" text-anchor="middle" font-family="'Cinzel Decorative', 'Noto Sans Devanagari', serif" font-size="24" font-weight="900" fill="#1A0E05" letter-spacing="1">श्रीं</text>
`;
  return wrapSvg(content);
}

// Generator Map
const YANTRAS = [
  { id: 'kali_yantra', fn: buildKaliYantra },
  { id: 'tara_yantra', fn: buildTaraYantra },
  { id: 'tripura_sundari_yantra', fn: buildTripuraSundariYantra },
  { id: 'bhuvaneshvari_yantra', fn: buildBhuvaneshvariYantra },
  { id: 'bhairavi_yantra', fn: buildBhairaviYantra },
  { id: 'chhinnamasta_yantra', fn: buildChhinnamastaYantra },
  { id: 'dhumavati_yantra', fn: buildDhumavatiYantra },
  { id: 'bagalamukhi_yantra', fn: buildBagalamukhiYantra },
  { id: 'matangi_yantra', fn: buildMatangiYantra },
  { id: 'kamala_yantra', fn: buildKamalaYantra },
];

const publicDir = path.resolve(__dirname, '../public/yantras');
const dashaDir = path.join(publicDir, '02_Dashamahavidya');

if (!fs.existsSync(dashaDir)) {
  fs.mkdirSync(dashaDir, { recursive: true });
}

YANTRAS.forEach(({ id, fn }) => {
  const svg = fn();
  const rootPath = path.join(publicDir, `${id}.svg`);
  const catPath = path.join(dashaDir, `${id}.svg`);
  fs.writeFileSync(rootPath, svg, 'utf8');
  fs.writeFileSync(catPath, svg, 'utf8');
  console.log(`Generated: ${id}.svg -> ${rootPath} and ${catPath}`);
});
