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
    <path d="
      M 160 50 L 430 50 L 430 20 L 570 20 L 570 50 L 840 50 L 840 160 L 950 160 L 950 430 L 980 430 L 980 570 L 950 570 L 950 840 L 840 840 L 840 950 L 570 950 L 570 980 L 430 980 L 430 950 L 160 950 L 160 840 L 50 840 L 50 570 L 20 570 L 20 430 L 50 430 L 50 160 L 160 160 Z
    " />
    <path d="
      M 175 65 L 435 65 L 435 40 L 565 40 L 565 65 L 825 65 L 825 175 L 935 175 L 935 435 L 960 435 L 960 565 L 935 565 L 935 825 L 825 825 L 825 935 L 565 935 L 565 960 L 435 960 L 435 935 L 175 935 L 175 825 L 65 825 L 65 565 L 40 565 L 40 435 L 65 435 L 65 175 L 175 175 Z
    " stroke-width="2.2" />
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

// Render 3x3 Magic Square Matrix
function renderMagicSquare3x3(matrix, devMatrix, magicSum, beej = '', strokeId = 'bronzeMain') {
  const startX = 355;
  const startY = 355;
  const size = 290;
  const cellSize = size / 3;

  let gridLines = '';
  // Horizontal interior lines
  gridLines += `<line x1="${startX}" y1="${startY + cellSize}" x2="${startX + size}" y2="${startY + cellSize}" stroke-width="2.4" />\n`;
  gridLines += `<line x1="${startX}" y1="${startY + cellSize * 2}" x2="${startX + size}" y2="${startY + cellSize * 2}" stroke-width="2.4" />\n`;
  // Vertical interior lines
  gridLines += `<line x1="${startX + cellSize}" y1="${startY}" x2="${startX + cellSize}" y2="${startY + size}" stroke-width="2.4" />\n`;
  gridLines += `<line x1="${startX + cellSize * 2}" y1="${startY}" x2="${startX + cellSize * 2}" x2="${startX + cellSize * 2}" y2="${startY + size}" stroke-width="2.4" />\n`;

  let cellTexts = '';
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      const cx = startX + c * cellSize + cellSize / 2;
      const cy = startY + r * cellSize + cellSize / 2;
      const val = matrix[r][c];
      const devVal = devMatrix[r][c];

      cellTexts += `
      <!-- Cell [${r},${c}] -->
      <text x="${cx}" y="${cy - 3}" text-anchor="middle" font-family="'Cinzel Decorative', 'Noto Sans Devanagari', serif" font-size="28" font-weight="900" fill="#1A0E05">${devVal}</text>
      <text x="${cx}" y="${cy + 22}" text-anchor="middle" font-family="'Cinzel', sans-serif" font-size="13" font-weight="700" fill="#6B3A0A" opacity="0.85">${val}</text>`;
    }
  }

  return `
  <!-- Outer Square Perimeter -->
  <rect x="${startX - 10}" y="${startY - 10}" width="${size + 20}" height="${size + 20}" rx="12" stroke="url(#${strokeId})" stroke-width="2.6" fill="none" />
  <rect x="${startX}" y="${startY}" width="${size}" height="${size}" rx="4" stroke="url(#${strokeId})" stroke-width="2.8" fill="#FDFBF7" fill-opacity="0.4" />

  <!-- 3x3 Magic Square Grid Matrix (Sum = ${magicSum}) -->
  <g id="magic-grid-3x3" stroke="url(#${strokeId})">
${gridLines}
  </g>

  <!-- Numerals Inscribed (Devanagari & International) -->
  <g id="magic-numerals">
${cellTexts}
  </g>

  <!-- Sacred Magic Sum Badge Below Matrix -->
  <g id="magic-sum-badge">
    <rect x="420" y="660" width="160" height="26" rx="13" fill="#F4EAD8" stroke="url(#${strokeId})" stroke-width="1.8" />
    <text x="500" y="677" text-anchor="middle" font-family="'Cinzel', monospace" font-size="12" font-weight="bold" fill="#4D0E00">योग (SUM): ${magicSum}</text>
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
      <stop offset="0%" stop-color="#B38226" stop-opacity="0.14" />
      <stop offset="100%" stop-color="#B38226" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="binduGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FF3300" stop-opacity="0.30" />
      <stop offset="100%" stop-color="#800000" stop-opacity="0" />
    </radialGradient>
${customGradients}
  </defs>

  <!-- Ambient Radiant Aura -->
  <circle cx="500" cy="500" r="485" fill="url(#sacredAura)" />

${content}
</svg>`;
}

// 1. Surya Yantra (Sun - Magic Sum 15)
function buildSuryaYantra() {
  const petals8 = generateOgeePetals(8, 290, 382);
  const matrix = [[6, 1, 8], [7, 5, 3], [2, 9, 4]];
  const devMatrix = [['६', '१', '८'], ['७', '५', '३'], ['२', '९', '४']];
  const content = `
${renderBhupura('bronzeMain')}
${renderTrivalaya(410, 396, 382, 'bronzeMain')}
${renderLotusGroup(petals8, 'surya-ashtadala')}

  <!-- Ring Enclosing Magic Square -->
  <circle cx="500" cy="500" r="285" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none" />

${renderMagicSquare3x3(matrix, devMatrix, 15, 'ह्रां')}

  <!-- Presiding Beeja at Apex -->
  <text x="500" y="338" text-anchor="middle" font-family="'Cinzel Decorative', 'Noto Sans Devanagari', serif" font-size="24" font-weight="900" fill="#8C2300">ॐ ह्रां ह्रीं ह्रौं सः सूर्याय नमः</text>
`;
  return wrapSvg(content);
}

// 2. Chandra Yantra (Moon - Magic Sum 18)
function buildChandraYantra() {
  const petals8 = generateOgeePetals(8, 290, 382);
  const matrix = [[7, 2, 9], [8, 6, 4], [3, 10, 5]];
  const devMatrix = [['७', '२', '९'], ['८', '६', '४'], ['३', '१०', '५']];
  const content = `
${renderBhupura('bronzeMain')}
${renderTrivalaya(410, 396, 382, 'bronzeMain')}
${renderLotusGroup(petals8, 'chandra-ashtadala')}

  <!-- Ring Enclosing Magic Square -->
  <circle cx="500" cy="500" r="285" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none" />

${renderMagicSquare3x3(matrix, devMatrix, 18, 'श्रां')}

  <!-- Presiding Beeja at Apex -->
  <text x="500" y="338" text-anchor="middle" font-family="'Cinzel Decorative', 'Noto Sans Devanagari', serif" font-size="23" font-weight="900" fill="#8C2300">ॐ श्रां श्रीं श्रौं सः चन्द्रमसे नमः</text>
`;
  return wrapSvg(content);
}

// 3. Mangala Yantra (Mars - Magic Sum 21)
function buildMangalaYantra() {
  const petals8 = generateOgeePetals(8, 290, 382);
  const matrix = [[8, 3, 10], [9, 7, 5], [4, 11, 6]];
  const devMatrix = [['८', '३', '१०'], ['९', '७', '५'], ['४', '११', '६']];
  const content = `
${renderBhupura('bronzeMain')}
${renderTrivalaya(410, 396, 382, 'bronzeMain')}
${renderLotusGroup(petals8, 'mangala-ashtadala')}

  <!-- Ring Enclosing Magic Square -->
  <circle cx="500" cy="500" r="285" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none" />

${renderMagicSquare3x3(matrix, devMatrix, 21, 'क्रां')}

  <!-- Presiding Beeja at Apex -->
  <text x="500" y="338" text-anchor="middle" font-family="'Cinzel Decorative', 'Noto Sans Devanagari', serif" font-size="23" font-weight="900" fill="#8C2300">ॐ क्रां क्रीं क्रौं सः भौमाय नमः</text>
`;
  return wrapSvg(content);
}

// 4. Budha Yantra (Mercury - Magic Sum 24)
function buildBudhaYantra() {
  const petals8 = generateOgeePetals(8, 290, 382);
  const matrix = [[9, 4, 11], [10, 8, 6], [5, 12, 7]];
  const devMatrix = [['९', '४', '११'], ['१०', '८', '६'], ['५', '१२', '७']];
  const content = `
${renderBhupura('bronzeMain')}
${renderTrivalaya(410, 396, 382, 'bronzeMain')}
${renderLotusGroup(petals8, 'budha-ashtadala')}

  <!-- Ring Enclosing Magic Square -->
  <circle cx="500" cy="500" r="285" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none" />

${renderMagicSquare3x3(matrix, devMatrix, 24, 'ब्रां')}

  <!-- Presiding Beeja at Apex -->
  <text x="500" y="338" text-anchor="middle" font-family="'Cinzel Decorative', 'Noto Sans Devanagari', serif" font-size="23" font-weight="900" fill="#8C2300">ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः</text>
`;
  return wrapSvg(content);
}

// 5. Guru Yantra (Jupiter - Magic Sum 27)
function buildGuruYantra() {
  const petals8 = generateOgeePetals(8, 290, 382);
  const matrix = [[10, 5, 12], [11, 9, 7], [6, 13, 8]];
  const devMatrix = [['१०', '५', '१२'], ['११', '९', '७'], ['६', '१३', '८']];
  const content = `
${renderBhupura('bronzeMain')}
${renderTrivalaya(410, 396, 382, 'bronzeMain')}
${renderLotusGroup(petals8, 'guru-ashtadala')}

  <!-- Ring Enclosing Magic Square -->
  <circle cx="500" cy="500" r="285" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none" />

${renderMagicSquare3x3(matrix, devMatrix, 27, 'ग्रां')}

  <!-- Presiding Beeja at Apex -->
  <text x="500" y="338" text-anchor="middle" font-family="'Cinzel Decorative', 'Noto Sans Devanagari', serif" font-size="22" font-weight="900" fill="#8C2300">ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः</text>
`;
  return wrapSvg(content);
}

// 6. Shukra Yantra (Venus - Magic Sum 30)
function buildShukraYantra() {
  const petals8 = generateOgeePetals(8, 290, 382);
  const matrix = [[11, 6, 13], [12, 10, 8], [7, 14, 9]];
  const devMatrix = [['११', '६', '१३'], ['१२', '१०', '८'], ['७', '१४', '९']];
  const content = `
${renderBhupura('bronzeMain')}
${renderTrivalaya(410, 396, 382, 'bronzeMain')}
${renderLotusGroup(petals8, 'shukra-ashtadala')}

  <!-- Ring Enclosing Magic Square -->
  <circle cx="500" cy="500" r="285" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none" />

${renderMagicSquare3x3(matrix, devMatrix, 30, 'द्रां')}

  <!-- Presiding Beeja at Apex -->
  <text x="500" y="338" text-anchor="middle" font-family="'Cinzel Decorative', 'Noto Sans Devanagari', serif" font-size="22" font-weight="900" fill="#8C2300">ॐ द्रां द्रीं द्रौं सः शुक्राय नमः</text>
`;
  return wrapSvg(content);
}

// 7. Shani Yantra (Saturn - Magic Sum 33)
function buildShaniYantra() {
  const petals8 = generateOgeePetals(8, 290, 382);
  const matrix = [[12, 7, 14], [13, 11, 9], [8, 15, 10]];
  const devMatrix = [['१२', '७', '१४'], ['१३', '११', '९'], ['८', '१५', '१०']];
  const content = `
${renderBhupura('bronzeMain')}
${renderTrivalaya(410, 396, 382, 'bronzeMain')}
${renderLotusGroup(petals8, 'shani-ashtadala')}

  <!-- Ring Enclosing Magic Square -->
  <circle cx="500" cy="500" r="285" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none" />

${renderMagicSquare3x3(matrix, devMatrix, 33, 'प्रां')}

  <!-- Presiding Beeja at Apex -->
  <text x="500" y="338" text-anchor="middle" font-family="'Cinzel Decorative', 'Noto Sans Devanagari', serif" font-size="22" font-weight="900" fill="#8C2300">ॐ प्रां प्रीं प्रौं सः शनैश्चराय नमः</text>
`;
  return wrapSvg(content);
}

// 8. Rahu Yantra (North Node - Magic Sum 36)
function buildRahuYantra() {
  const petals8 = generateOgeePetals(8, 290, 382);
  const matrix = [[13, 8, 15], [14, 12, 10], [9, 16, 11]];
  const devMatrix = [['१३', '८', '१५'], ['१४', '१२', '१०'], ['९', '१६', '११']];
  const content = `
${renderBhupura('bronzeMain')}
${renderTrivalaya(410, 396, 382, 'bronzeMain')}
${renderLotusGroup(petals8, 'rahu-ashtadala')}

  <!-- Ring Enclosing Magic Square -->
  <circle cx="500" cy="500" r="285" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none" />

${renderMagicSquare3x3(matrix, devMatrix, 36, 'भ्रां')}

  <!-- Presiding Beeja at Apex -->
  <text x="500" y="338" text-anchor="middle" font-family="'Cinzel Decorative', 'Noto Sans Devanagari', serif" font-size="23" font-weight="900" fill="#8C2300">ॐ भ्रां भ्रीं भ्रौं सः राहवे नमः</text>
`;
  return wrapSvg(content);
}

// 9. Ketu Yantra (South Node - Magic Sum 39)
function buildKetuYantra() {
  const petals8 = generateOgeePetals(8, 290, 382);
  const matrix = [[14, 9, 16], [15, 13, 11], [10, 17, 12]];
  const devMatrix = [['१४', '९', '१६'], ['१५', '१३', '११'], ['१०', '१७', '१२']];
  const content = `
${renderBhupura('bronzeMain')}
${renderTrivalaya(410, 396, 382, 'bronzeMain')}
${renderLotusGroup(petals8, 'ketu-ashtadala')}

  <!-- Ring Enclosing Magic Square -->
  <circle cx="500" cy="500" r="285" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none" />

${renderMagicSquare3x3(matrix, devMatrix, 39, 'स्त्रां')}

  <!-- Presiding Beeja at Apex -->
  <text x="500" y="338" text-anchor="middle" font-family="'Cinzel Decorative', 'Noto Sans Devanagari', serif" font-size="23" font-weight="900" fill="#8C2300">ॐ स्रां स्रीं स्रौं सः केतवे नमः</text>
`;
  return wrapSvg(content);
}

// 10. Navagraha Combined Peace Mandala (नवग्रह संयुक्त शान्ति मण्डल यन्त्र)
function buildNavagrahaYantra() {
  const petals12 = generateOgeePetals(12, 310, 390);
  const petals8 = generateOgeePetals(8, 235, 310);

  // 9 Sacred Planetary Compartments: Center Sun, 8 Directions
  const planets = [
    { name: 'सूर्य', en: 'Sun', sum: '१५', x: 500, y: 500, r: 48, fill: '#FAF3E8' },
    { name: 'चन्द्र', en: 'Moon', sum: '१८', x: 380, y: 380, r: 38, fill: '#FFFFFF' },
    { name: 'मंगल', en: 'Mars', sum: '२१', x: 620, y: 500, r: 38, fill: '#FFF1ED' },
    { name: 'बुध', en: 'Merc', sum: '२४', x: 500, y: 360, r: 38, fill: '#EDF7EE' },
    { name: 'गुरु', en: 'Jup', sum: '२७', x: 620, y: 380, r: 38, fill: '#FFFDE8' },
    { name: 'शुक्र', en: 'Venus', sum: '३०', x: 500, y: 640, r: 38, fill: '#F8F4FF' },
    { name: 'शनि', en: 'Sat', sum: '३३', x: 380, y: 500, r: 38, fill: '#F2F2F2' },
    { name: 'राहु', en: 'Rahu', sum: '३६', x: 380, y: 620, r: 38, fill: '#EAEAEA' },
    { name: 'केतु', en: 'Ketu', sum: '३९', x: 620, y: 620, r: 38, fill: '#F7EFE5' },
  ];

  const planetNodes = planets.map(p => `
    <!-- ${p.name} (${p.en}) -->
    <circle cx="${p.x}" cy="${p.y}" r="${p.r}" fill="${p.fill}" stroke="url(#bronzeMain)" stroke-width="2.4" />
    <text x="${p.x}" y="${p.y - 4}" text-anchor="middle" font-family="'Cinzel Decorative', 'Noto Sans Devanagari', serif" font-size="${p.r > 40 ? 20 : 16}" font-weight="900" fill="#1A0E05">${p.name}</text>
    <text x="${p.x}" y="${p.y + 16}" text-anchor="middle" font-family="'Cinzel', monospace" font-size="${p.r > 40 ? 11 : 9.5}" font-weight="bold" fill="#8C2300">योग ${p.sum}</text>
  `).join('\n');

  const content = `
${renderBhupura('bronzeMain')}
${renderTrivalaya(420, 405, 390, 'bronzeMain')}
${renderLotusGroup(petals12, 'navagraha-rashi-12', 'bronzeMain', '2.4', '1.4')}

  <!-- Ring between lotuses -->
  <circle cx="500" cy="500" r="310" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none" />

${renderLotusGroup(petals8, 'navagraha-dikpala-8', 'bronzeMain', '2.6', '1.6')}

  <!-- Inner Mandala Ring -->
  <circle cx="500" cy="500" r="235" stroke="url(#bronzeMain)" stroke-width="2.8" fill="none" />

  <!-- Directional Radial Ray Separators -->
  <g id="mandala-rays" stroke="url(#bronzeMain)" stroke-width="1.8" opacity="0.6">
    <line x1="500" y1="265" x2="500" y2="735" />
    <line x1="265" y1="500" x2="735" y2="500" />
    <line x1="334" y1="334" x2="666" y2="666" />
    <line x1="334" y1="666" x2="666" y2="334" />
  </g>

  <!-- 9 Planetary Shrine Nodes (Navagraha Shanti Cells) -->
  <g id="navagraha-sanctums">
${planetNodes}
  </g>

  <!-- Central Solar Aura -->
  <circle cx="500" cy="500" r="14" fill="#8C2300" stroke="#1A0E05" stroke-width="2.5" />
`;
  return wrapSvg(content);
}

// Generator Map
const YANTRAS = [
  { id: 'surya_yantra', fn: buildSuryaYantra },
  { id: 'chandra_yantra', fn: buildChandraYantra },
  { id: 'mangala_yantra', fn: buildMangalaYantra },
  { id: 'budha_yantra', fn: buildBudhaYantra },
  { id: 'guru_yantra', fn: buildGuruYantra },
  { id: 'shukra_yantra', fn: buildShukraYantra },
  { id: 'shani_yantra', fn: buildShaniYantra },
  { id: 'rahu_yantra', fn: buildRahuYantra },
  { id: 'ketu_yantra', fn: buildKetuYantra },
  { id: 'navagraha_yantra', fn: buildNavagrahaYantra },
];

const publicDir = path.resolve(__dirname, '../public/yantras');
const navagrahaDir = path.join(publicDir, '08_Navagraha');
const magicDir = path.join(publicDir, '16_MagicSquare');

if (!fs.existsSync(navagrahaDir)) fs.mkdirSync(navagrahaDir, { recursive: true });
if (!fs.existsSync(magicDir)) fs.mkdirSync(magicDir, { recursive: true });

YANTRAS.forEach(({ id, fn }) => {
  const svg = fn();
  const rootPath = path.join(publicDir, `${id}.svg`);
  const navaPath = path.join(navagrahaDir, `${id}.svg`);
  const magicPath = path.join(magicDir, `${id}.svg`);

  fs.writeFileSync(rootPath, svg, 'utf8');
  fs.writeFileSync(navaPath, svg, 'utf8');
  if (id !== 'navagraha_yantra') {
    fs.writeFileSync(magicPath, svg, 'utf8');
  }
  console.log(`Generated: ${id}.svg -> ${rootPath}`);
});
