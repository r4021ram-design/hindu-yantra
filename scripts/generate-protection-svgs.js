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

// Generate Ray Flames for Sudarshana & Pratyangira
function generateFlames(count, rInner, rOuter, cx = 500, cy = 500) {
  const step = 360 / count;
  const toRad = deg => (deg * Math.PI) / 180;
  const flames = [];

  for (let i = 0; i < count; i++) {
    const deg = i * step;
    const leftDeg = deg - step / 2;
    const rightDeg = deg + step / 2;

    const x1 = cx + rInner * Math.sin(toRad(leftDeg));
    const y1 = cy - rInner * Math.cos(toRad(leftDeg));
    const x2 = cx + rOuter * Math.sin(toRad(deg));
    const y2 = cy - rOuter * Math.cos(toRad(deg));
    const x3 = cx + rInner * Math.sin(toRad(rightDeg));
    const y3 = cy - rInner * Math.cos(toRad(rightDeg));

    // Curved flame tip
    const cp1x = cx + (rInner + (rOuter - rInner) * 0.6) * Math.sin(toRad(deg - step * 0.25));
    const cp1y = cy - (rInner + (rOuter - rInner) * 0.6) * Math.cos(toRad(deg - step * 0.25));
    const cp2x = cx + (rInner + (rOuter - rInner) * 0.6) * Math.sin(toRad(deg + step * 0.25));
    const cp2y = cy - (rInner + (rOuter - rInner) * 0.6) * Math.cos(toRad(deg + step * 0.25));

    const pathD = `M ${x1.toFixed(2)} ${y1.toFixed(2)} Q ${cp1x.toFixed(2)} ${cp1y.toFixed(2)} ${x2.toFixed(2)} ${y2.toFixed(2)} Q ${cp2x.toFixed(2)} ${cp2y.toFixed(2)} ${x3.toFixed(2)} ${y3.toFixed(2)}`;
    flames.push(pathD);
  }
  return flames;
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
      <stop offset="0%" stop-color="#B38226" stop-opacity="0.14" />
      <stop offset="100%" stop-color="#B38226" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="binduGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FF3300" stop-opacity="0.35" />
      <stop offset="100%" stop-color="#800000" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="fierceRubyGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#D92600" stop-opacity="0.4" />
      <stop offset="60%" stop-color="#800A00" stop-opacity="0.15" />
      <stop offset="100%" stop-color="#1A0E05" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="goldSolarGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFD700" stop-opacity="0.3" />
      <stop offset="70%" stop-color="#B8860B" stop-opacity="0.1" />
      <stop offset="100%" stop-color="#1A0E05" stop-opacity="0" />
    </radialGradient>
${customGradients}
  </defs>

  <!-- Ambient Radiant Aura -->
  <circle cx="500" cy="500" r="485" fill="url(#sacredAura)" />

${content}
</svg>`;
}

// 1. दुर्गा बीसा यन्त्र (Durga Bisa Yantra)
function buildDurgaBisaYantra() {
  const petals = generateOgeePetals(8, 255, 380);
  const petalLetters = ['ऐं', 'ह्रीं', 'क्लीं', 'चा', 'मुं', 'डा', 'यै', 'विच्चे'];
  const petalLabelsSvg = petals.map((p, idx) => {
    // Letter position slightly inwards from tip
    const lx = 500 + 315 * Math.sin((p.midDeg * Math.PI) / 180);
    const ly = 500 - 315 * Math.cos((p.midDeg * Math.PI) / 180);
    return `    <text x="${lx.toFixed(2)}" y="${(ly + 7).toFixed(2)}" font-family="'Noto Sans Devanagari', 'Cinzel', serif" font-size="24" font-weight="900" fill="#2E1606" text-anchor="middle">${petalLetters[idx]}</text>`;
  }).join('\n');

  // Great Inverted Shakti Triangle
  // Top horizontal base from (300, 360) to (700, 360), Tip at (500, 710)
  const p1 = { x: 300, y: 365 };
  const p2 = { x: 700, y: 365 };
  const p3 = { x: 500, y: 710 };

  // Inner sub-triangles / 9-chamber Bisa numerical matrix:
  // We partition into an inverted Delta grid of 9 triangular chambers:
  // Tier 1 (top): 5 inverted/upright triangles
  // Tier 2 (middle): 3 triangles
  // Tier 3 (bottom): 1 triangle
  // Along vertices and nodes we place the consecrated Bisa numbers totaling 20!
  // In the center chamber: Consecrated 'दुं' Durga Beeja with radiant Bindu.
  
  return wrapSvg(`
  ${renderBhupura()}
  ${renderTrivalaya(410, 396, 382)}
  ${renderLotusGroup(petals, 'ashtadala-petals')}

  <!-- Petal Navarna Aksharas -->
  <g id="petal-mantras">
${petalLabelsSvg}
  </g>

  <!-- Inner Protective Circles -->
  <g id="inner-circles" stroke="url(#bronzeMain)" fill="none">
    <circle cx="500" cy="500" r="255" stroke-width="2.8" />
    <circle cx="500" cy="500" r="245" stroke-width="1.8" />
  </g>

  <!-- Sacred Durga Bisa Inverted Triangle Matrix -->
  <g id="bisa-triangle-matrix" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none" stroke-linejoin="round">
    <!-- Outer Inverted Master Triangle -->
    <polygon points="${p1.x},${p1.y} ${p2.x},${p2.y} ${p3.x},${p3.y}" stroke-width="3.2" fill="#3D1807" fill-opacity="0.04" />
    
    <!-- Concentric Inner Inverted Triangle -->
    <polygon points="325,380 675,380 500,680" stroke-width="1.8" />

    <!-- 9-Chamber Bisa Grid Division Lines -->
    <!-- Horizontal Level 1 (y = 480) -->
    <line x1="383" y1="480" x2="617" y2="480" stroke-width="2.2" />
    <!-- Horizontal Level 2 (y = 580) -->
    <line x1="442" y1="580" x2="558" y2="580" stroke-width="2.2" />

    <!-- Upright Interstitial Triangles for the 9-fold chamber division -->
    <polygon points="500,480 442,380 558,380" stroke-width="2.0" />
    <polygon points="500,580 442,480 558,480" stroke-width="2.0" />
    
    <!-- Diagonal partition rays -->
    <line x1="442" y1="380" x2="500" y2="480" stroke-width="1.6" />
    <line x1="558" y1="380" x2="500" y2="480" stroke-width="1.6" />
    <line x1="442" y1="480" x2="500" y2="580" stroke-width="1.6" />
    <line x1="558" y1="480" x2="500" y2="580" stroke-width="1.6" />
  </g>

  <!-- Consecrated Bisa Digits & Shakti Syllables (Sum = 20) -->
  <g id="bisa-numbers" font-family="'Noto Sans Devanagari', 'Cinzel', serif" font-weight="900" fill="#2E1606" text-anchor="middle">
    <!-- Top Row Chambers: ७, २, ११ (Sum = २०) -->
    <text x="390" y="445" font-size="26">७</text>
    <text x="500" y="440" font-size="28">२</text>
    <text x="610" y="445" font-size="26">११</text>

    <!-- Corner Tri-Shakti Guardians of the Master Triangle -->
    <text x="315" y="350" font-size="22" fill="#7A1D00">ह्रीं</text>
    <text x="685" y="350" font-size="22" fill="#7A1D00">श्रीं</text>
    <text x="500" y="740" font-size="22" fill="#7A1D00">क्लीं</text>

    <!-- Middle Tier Chambers: १२, ६, २ (Sum = २०) -->
    <text x="445" y="540" font-size="24">१२</text>
    <text x="555" y="540" font-size="24">२</text>

    <!-- Bottom Chambers: १, १३, ६ (Sum = २०) -->
    <text x="500" y="635" font-size="24">१</text>
    <text x="500" y="665" font-size="22">१३</text>
  </g>

  <!-- Central Consecrated Durga Dum Bindu -->
  <g id="central-durga-sanctum">
    <circle cx="500" cy="510" r="32" fill="url(#fierceRubyGlow)" />
    <circle cx="500" cy="510" r="24" fill="#FAF6EE" stroke="url(#bronzeMain)" stroke-width="2.2" />
    <text x="500" y="519" font-family="'Noto Sans Devanagari', serif" font-size="26" font-weight="900" fill="#7A1500" text-anchor="middle">दुं</text>
    <circle cx="500" cy="510" r="5" fill="#7A1500" />
  </g>`);
}

// 2. सुदर्शन चक्र यन्त्र (Sudarshana Chakra Yantra)
function buildSudarshanaChakraYantra() {
  const flames = generateFlames(24, 382, 422);
  const petals = generateOgeePetals(12, 260, 360);
  
  // Sudarshana 12 Petal Beejaksharas (Dvadasakshara: ॐ नमो भगवते महासुदर्शनाय)
  const petalAksharas = ['ॐ', 'न', 'मो', 'भ', 'ग', 'व', 'ते', 'सु', 'द', 'र्श', 'ना', 'य'];
  const petalLabelsSvg = petals.map((p, idx) => {
    const lx = 500 + 305 * Math.sin((p.midDeg * Math.PI) / 180);
    const ly = 500 - 305 * Math.cos((p.midDeg * Math.PI) / 180);
    return `    <text x="${lx.toFixed(2)}" y="${(ly + 6).toFixed(2)}" font-family="'Noto Sans Devanagari', 'Cinzel', serif" font-size="20" font-weight="900" fill="#2E1606" text-anchor="middle">${petalAksharas[idx]}</text>`;
  }).join('\n');

  // Vaishnava Shatkona (Hexagram): Two interlocking equilateral triangles
  // Triangle 1: Upright (Shiva/Purusha) - vertex at top (500, 265)
  // Triangle 2: Inverted (Shakti/Prakriti) - vertex at bottom (500, 735)
  const rTri = 235;
  const hex1 = [
    [500, 500 - rTri],
    [500 + rTri * Math.cos(Math.PI / 6), 500 + rTri * Math.sin(Math.PI / 6)],
    [500 - rTri * Math.cos(Math.PI / 6), 500 + rTri * Math.sin(Math.PI / 6)]
  ].map(pt => pt.map(n => n.toFixed(2)).join(',')).join(' ');

  const hex2 = [
    [500, 500 + rTri],
    [500 + rTri * Math.cos(Math.PI / 6), 500 - rTri * Math.sin(Math.PI / 6)],
    [500 - rTri * Math.cos(Math.PI / 6), 500 - rTri * Math.sin(Math.PI / 6)]
  ].map(pt => pt.map(n => n.toFixed(2)).join(',')).join(' ');

  // 8-Spoke Rotating Sudarshana Wheel Rays in inner core
  const rHub = 45;
  const rRim = 125;
  const spokesSvg = [];
  for (let s = 0; s < 8; s++) {
    const deg = s * 45;
    const rad = (deg * Math.PI) / 180;
    const x1 = 500 + rHub * Math.sin(rad);
    const y1 = 500 - rHub * Math.cos(rad);
    const x2 = 500 + rRim * Math.sin(rad);
    const y2 = 500 - rRim * Math.cos(rad);
    // Curved dynamic vortex spoke
    const cpX = 500 + (rRim * 0.7) * Math.sin(rad + 0.35);
    const cpY = 500 - (rRim * 0.7) * Math.cos(rad + 0.35);
    spokesSvg.push(`    <path d="M ${x1.toFixed(2)} ${y1.toFixed(2)} Q ${cpX.toFixed(2)} ${cpY.toFixed(2)} ${x2.toFixed(2)} ${y2.toFixed(2)}" stroke-width="2.6" />`);
  }

  // Corner Sudarshana Mantras in the 6 Outer Points of Shatkona
  const shatkonaBeejas = ['ॐ', 'क्लीं', 'कृष्णाय', 'गोविन्दाय', 'हुं', 'फट्'];
  const shatkonaLabels = [
    { x: 500, y: 295 },
    { x: 675, y: 395 },
    { x: 675, y: 615 },
    { x: 500, y: 715 },
    { x: 325, y: 615 },
    { x: 325, y: 395 }
  ].map((pt, i) => `    <text x="${pt.x}" y="${pt.y}" font-family="'Noto Sans Devanagari', 'Cinzel', serif" font-size="20" font-weight="900" fill="#6A1800" text-anchor="middle">${shatkonaBeejas[i]}</text>`).join('\n');

  return wrapSvg(`
  ${renderBhupura()}
  
  <!-- Outer Solar Fire Nimbus (Sahasradhara 24 Flames) -->
  <g id="sudarshana-flames" stroke="url(#bronzeMain)" fill="#FF9900" fill-opacity="0.06" stroke-width="2.2" stroke-linejoin="round">
${flames.map(d => `    <path d="${d}" />`).join('\n')}
  </g>

  ${renderTrivalaya(382, 370, 358)}
  ${renderLotusGroup(petals, 'dwadashadala-petals')}

  <!-- Petal Aksharas -->
  <g id="petal-mantras">
${petalLabelsSvg}
  </g>

  <!-- Inner Boundary Rings -->
  <g id="inner-boundary" stroke="url(#bronzeMain)" fill="none">
    <circle cx="500" cy="500" r="260" stroke-width="2.8" />
    <circle cx="500" cy="500" r="248" stroke-width="1.8" />
  </g>

  <!-- Vaishnava Hexagram (Shatkona) -->
  <g id="vaishnava-shatkona" stroke="url(#bronzeMain)" stroke-width="2.8" fill="none" stroke-linejoin="round">
    <polygon points="${hex1}" />
    <polygon points="${hex2}" />
  </g>

  <!-- Hexagram Corner Beejaksharas -->
  <g id="shatkona-beejas">
${shatkonaLabels}
  </g>

  <!-- Sudarshana Whirling Wheel (8-Spoke Dynamic Disc) -->
  <g id="sudarshana-wheel" stroke="url(#bronzeMain)" fill="none">
    <circle cx="500" cy="500" r="${rRim}" stroke-width="2.8" />
    <circle cx="500" cy="500" r="${rRim - 8}" stroke-width="1.5" />
${spokesSvg.join('\n')}
  </g>

  <!-- Central Invincible Sahasrara Sanctum -->
  <g id="sahasrara-bindu">
    <circle cx="500" cy="500" r="45" fill="url(#fierceRubyGlow)" />
    <circle cx="500" cy="500" r="38" fill="#FAF6EE" stroke="url(#bronzeMain)" stroke-width="2.5" />
    <text x="500" y="497" font-family="'Noto Sans Devanagari', serif" font-size="14" font-weight="900" fill="#7A1500" text-anchor="middle">सहस्रार</text>
    <text x="500" y="518" font-family="'Noto Sans Devanagari', serif" font-size="18" font-weight="900" fill="#7A1500" text-anchor="middle">हुं फट्</text>
    <circle cx="500" cy="500" r="4" fill="#7A1500" />
  </g>`);
}

// 3. पंचमुखी हनुमान यन्त्र (Panchamukhi Hanuman Yantra)
function buildPanchamukhiHanumanYantra() {
  const petals = generateOgeePetals(10, 260, 380);
  
  // 10 Petal Protection Mantras
  const petalMantras = ['ॐ', 'ह्रां', 'ह्रीं', 'ह्रूं', 'ह्रैं', 'ह्रौं', 'ह्रः', 'हुं', 'फट्', 'स्वाहा'];
  const petalLabelsSvg = petals.map((p, idx) => {
    const lx = 500 + 315 * Math.sin((p.midDeg * Math.PI) / 180);
    const ly = 500 - 305 * Math.cos((p.midDeg * Math.PI) / 180);
    return `    <text x="${lx.toFixed(2)}" y="${(ly + 6).toFixed(2)}" font-family="'Noto Sans Devanagari', 'Cinzel', serif" font-size="20" font-weight="900" fill="#2E1606" text-anchor="middle">${petalMantras[idx]}</text>`;
  }).join('\n');

  // Sacred 5-Pointed Star / Pentagram (पञ्चमुख मण्डल)
  // 5 vertices at 0 deg, 72 deg, 144 deg, 216 deg, 288 deg
  const rPenta = 230;
  const pentaPoints = [];
  for (let i = 0; i < 5; i++) {
    const deg = i * 72; // Top vertex at 0 deg (North)
    const rad = (deg * Math.PI) / 180;
    pentaPoints.push({
      x: 500 + rPenta * Math.sin(rad),
      y: 500 - rPenta * Math.cos(rad),
      deg
    });
  }

  // Interlocking 5-point star lines (connect 0 -> 2 -> 4 -> 1 -> 3 -> 0)
  const starPath = `M ${pentaPoints[0].x.toFixed(2)} ${pentaPoints[0].y.toFixed(2)} ` +
    `L ${pentaPoints[2].x.toFixed(2)} ${pentaPoints[2].y.toFixed(2)} ` +
    `L ${pentaPoints[4].x.toFixed(2)} ${pentaPoints[4].y.toFixed(2)} ` +
    `L ${pentaPoints[1].x.toFixed(2)} ${pentaPoints[1].y.toFixed(2)} ` +
    `L ${pentaPoints[3].x.toFixed(2)} ${pentaPoints[3].y.toFixed(2)} Z`;

  // Outer Pentagon ring
  const pentaPolygon = pentaPoints.map(p => `${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(' ');

  // 5 Holy Face Inscriptions in the 5 triangular crests:
  // 1. East/Top: वानर (Hanuman) - ह्रां
  // 2. South/Right: नृसिंह (Narasimha) - ह्रीं
  // 3. West/Bottom-Right: गरुड़ (Garuda) - ह्रूं
  // 4. North/Bottom-Left: वराह (Varaha) - ह्रैं
  // 5. Sky/Top-Left: हयग्रीव (Hayagriva) - ह्रौं
  const faceInfo = [
    { title: 'वानर', beej: 'ह्रां', x: 500, y: 310 },
    { title: 'नारसिंह', beej: 'ह्रीं', x: 670, y: 440 },
    { title: 'गरुड़', beej: 'ह्रूं', x: 605, y: 640 },
    { title: 'वराह', beej: 'ह्रैं', x: 395, y: 640 },
    { title: 'हयग्रीव', beej: 'ह्रौं', x: 330, y: 440 }
  ];

  const facesSvg = faceInfo.map(f => `
    <g id="face-${f.title}" font-family="'Noto Sans Devanagari', serif" text-anchor="middle" font-weight="900">
      <text x="${f.x}" y="${f.y}" font-size="16" fill="#7A1D00">${f.title}</text>
      <text x="${f.x}" y="${f.y + 20}" font-size="20" fill="#2E1606">${f.beej}</text>
    </g>`).join('\n');

  return wrapSvg(`
  ${renderBhupura()}
  ${renderTrivalaya(410, 396, 382)}
  ${renderLotusGroup(petals, 'dashadala-petals')}

  <!-- Petal Protection Mantras -->
  <g id="petal-mantras">
${petalLabelsSvg}
  </g>

  <!-- Inner Rings -->
  <g id="inner-rings" stroke="url(#bronzeMain)" fill="none">
    <circle cx="500" cy="500" r="260" stroke-width="2.8" />
    <circle cx="500" cy="500" r="248" stroke-width="1.8" />
  </g>

  <!-- Sacred Panchamukhi Star Matrix -->
  <g id="panchamukhi-star-matrix" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none" stroke-linejoin="round">
    <polygon points="${pentaPolygon}" stroke-width="2.0" fill="#542608" fill-opacity="0.04" />
    <path d="${starPath}" stroke-width="2.8" />
  </g>

  <!-- 5 Holy Face Inscriptions -->
${facesSvg}

  <!-- Central Pavana-Tanaya Maruti Core -->
  <g id="maruti-core-sanctum">
    <circle cx="500" cy="500" r="50" fill="url(#goldSolarGlow)" />
    <circle cx="500" cy="500" r="42" fill="#FAF6EE" stroke="url(#bronzeMain)" stroke-width="2.6" />
    <text x="500" y="490" font-family="'Noto Sans Devanagari', serif" font-size="15" font-weight="900" fill="#7A1500" text-anchor="middle">ॐ हं</text>
    <text x="500" y="515" font-family="'Noto Sans Devanagari', serif" font-size="24" font-weight="900" fill="#7A1500" text-anchor="middle">हनुमते</text>
    <text x="500" y="534" font-family="'Noto Sans Devanagari', serif" font-size="14" font-weight="900" fill="#7A1500" text-anchor="middle">रुद्रात्मकाय</text>
    <circle cx="500" cy="500" r="4" fill="#7A1500" />
  </g>`);
}

// 4. प्रत्यङ्गिरा यन्त्र (Pratyangira Yantra / Maha Viparita Pratyangira)
function buildPratyangiraYantra() {
  const flames = generateFlames(16, 385, 420);
  const outerPetals = generateOgeePetals(16, 280, 375);
  const innerPetals = generateOgeePetals(8, 205, 275);

  // 16 Vowels / Kalas on Outer Petals
  const kalas = ['अं', 'आं', 'इं', 'ईं', 'उं', 'ऊं', 'ऋं', 'ॠं', 'ऌं', 'ॡं', 'एं', 'ऐं', 'ओं', 'औं', 'अं', 'अः'];
  const outerPetalLabels = outerPetals.map((p, idx) => {
    const lx = 500 + 325 * Math.sin((p.midDeg * Math.PI) / 180);
    const ly = 500 - 325 * Math.cos((p.midDeg * Math.PI) / 180);
    return `    <text x="${lx.toFixed(2)}" y="${(ly + 5).toFixed(2)}" font-family="'Noto Sans Devanagari', 'Cinzel', serif" font-size="16" font-weight="900" fill="#2E1606" text-anchor="middle">${kalas[idx]}</text>`;
  }).join('\n');

  // Ashta Bhairava Beejas on Inner 8 Petals
  const bhairavaBeejas = ['असिताङ्ग', 'रुरु', 'चण्ड', 'क्रोध', 'उन्मत्त', 'कपाल', 'भीषण', 'संहार'];
  const innerPetalLabels = innerPetals.map((p, idx) => {
    const lx = 500 + 238 * Math.sin((p.midDeg * Math.PI) / 180);
    const ly = 500 - 238 * Math.cos((p.midDeg * Math.PI) / 180);
    return `    <text x="${lx.toFixed(2)}" y="${(ly + 4).toFixed(2)}" font-family="'Noto Sans Devanagari', 'Cinzel', serif" font-size="12" font-weight="900" fill="#6A1800" text-anchor="middle">${bhairavaBeejas[idx]}</text>`;
  }).join('\n');

  // Central Inverted Shatkona with Trishula Accents
  const rTri = 190;
  const hex1 = [
    [500, 500 - rTri],
    [500 + rTri * Math.cos(Math.PI / 6), 500 + rTri * Math.sin(Math.PI / 6)],
    [500 - rTri * Math.cos(Math.PI / 6), 500 + rTri * Math.sin(Math.PI / 6)]
  ].map(pt => pt.map(n => n.toFixed(2)).join(',')).join(' ');

  const hex2 = [
    [500, 500 + rTri],
    [500 + rTri * Math.cos(Math.PI / 6), 500 - rTri * Math.sin(Math.PI / 6)],
    [500 - rTri * Math.cos(Math.PI / 6), 500 - rTri * Math.sin(Math.PI / 6)]
  ].map(pt => pt.map(n => n.toFixed(2)).join(',')).join(' ');

  // Innermost Fierce Inverted Shakti Yoni Triangle
  // Top horizontal line: (410, 440) to (590, 440), Apex at bottom (500, 580)
  const innerTri = "410,440 590,440 500,580";

  return wrapSvg(`
  ${renderBhupura()}
  
  <!-- Outer Fierce Protection Flames (16 Agni-Shikhas) -->
  <g id="pratyangira-flames" stroke="url(#bronzeMain)" fill="#D92600" fill-opacity="0.08" stroke-width="2.2" stroke-linejoin="round">
${flames.map(d => `    <path d="${d}" />`).join('\n')}
  </g>

  ${renderTrivalaya(385, 375, 365)}
  ${renderLotusGroup(outerPetals, 'shodashadala-petals', 'bronzeMain', '2.4', '1.4')}

  <!-- 16 Kalas on Outer Petals -->
  <g id="outer-kalas">
${outerPetalLabels}
  </g>

  <!-- Middle Girdle -->
  <circle cx="500" cy="500" r="280" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none" />
  <circle cx="500" cy="500" r="275" stroke="url(#bronzeMain)" stroke-width="1.6" fill="none" />

  ${renderLotusGroup(innerPetals, 'ashtadala-inner-petals', 'bronzeMain', '2.6', '1.6')}

  <!-- Ashta Bhairavas on Inner Petals -->
  <g id="inner-bhairavas">
${innerPetalLabels}
  </g>

  <!-- Inner Sanctum Ring -->
  <circle cx="500" cy="500" r="205" stroke="url(#bronzeMain)" stroke-width="2.8" fill="none" />
  <circle cx="500" cy="500" r="195" stroke="url(#bronzeMain)" stroke-width="1.8" fill="none" />

  <!-- Fierce Shatkona (Interlocking Triangles of Sharabha-Pratyangira) -->
  <g id="sharabha-shatkona" stroke="url(#bronzeMain)" stroke-width="2.8" fill="none" stroke-linejoin="round">
    <polygon points="${hex1}" />
    <polygon points="${hex2}" fill="#800A00" fill-opacity="0.05" />
  </g>

  <!-- Innermost Inverted Yoni Triangle -->
  <g id="innermost-yoni-triangle" stroke="url(#bronzeMain)" stroke-width="3.2" fill="#800A00" fill-opacity="0.08" stroke-linejoin="round">
    <polygon points="${innerTri}" />
  </g>

  <!-- Surrounding Seed Mantras inside Shatkona Triangles -->
  <g id="shatkona-seeds" font-family="'Noto Sans Devanagari', serif" font-size="16" font-weight="900" fill="#7A1500" text-anchor="middle">
    <text x="500" y="340">ॐ</text>
    <text x="640" y="420">ह्रीं</text>
    <text x="640" y="590">क्लीं</text>
    <text x="500" y="670">हुं</text>
    <text x="360" y="590">फट्</text>
    <text x="360" y="420">स्वाहा</text>
  </g>

  <!-- Central Supreme Maha Viparita Pratyangira Kshraum Sanctum -->
  <g id="pratyangira-bindu-sanctum">
    <circle cx="500" cy="495" r="45" fill="url(#fierceRubyGlow)" />
    <circle cx="500" cy="495" r="34" fill="#FAF6EE" stroke="url(#bronzeMain)" stroke-width="2.6" />
    <text x="500" y="504" font-family="'Noto Sans Devanagari', serif" font-size="28" font-weight="900" fill="#7A1500" text-anchor="middle">क्षौं</text>
    <circle cx="500" cy="495" r="4.5" fill="#7A1500" />
  </g>`);
}

// Write out all 4 SVGs to both locations
const yantras = [
  { id: 'durga_bisa_yantra', svg: buildDurgaBisaYantra() },
  { id: 'sudarshana_chakra_yantra', svg: buildSudarshanaChakraYantra() },
  { id: 'panchamukhi_hanuman_yantra', svg: buildPanchamukhiHanumanYantra() },
  { id: 'pratyangira_yantra', svg: buildPratyangiraYantra() }
];

const dirRoot = path.join(__dirname, '../public/yantras');
const dirProtection = path.join(__dirname, '../public/yantras/07_Protection');

if (!fs.existsSync(dirProtection)) {
  fs.mkdirSync(dirProtection, { recursive: true });
}

yantras.forEach(y => {
  const p1 = path.join(dirProtection, `${y.id}.svg`);
  const p2 = path.join(dirRoot, `${y.id}.svg`);
  fs.writeFileSync(p1, y.svg, 'utf8');
  fs.writeFileSync(p2, y.svg, 'utf8');
  console.log(`Generated: ${y.id}.svg (${y.svg.length} bytes)`);
});
console.log('Successfully generated all 4 Protection Yantras!');
