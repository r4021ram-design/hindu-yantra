const fs = require('fs');
const path = require('path');

// Output directories
const publicYantrasDir = path.join(__dirname, '..', 'public', 'yantras');
const chakrasSubDir = path.join(publicYantrasDir, 'chakras');
const chakrasNumberedDir = path.join(publicYantrasDir, '18_Chakras');

[chakrasSubDir, chakrasNumberedDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Helper for degree to radian
const toRad = (deg) => (deg * Math.PI) / 180;

// Canonical Ogee Petal Algorithm with custom curvature
function generateOgeePetals(n, rBase, rTip, cx = 500, cy = 500, rotateOffset = 0) {
  const step = 360 / n;
  const halfStep = step / 2;
  const petals = [];

  for (let i = 0; i < n; i++) {
    const midDeg = i * step + rotateOffset;
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

    // Text position for Matrika Syllables (centered in petal)
    const rText = rBase + (rTip - rBase) * 0.58;
    const textX = cx + rText * Math.sin(toRad(midDeg));
    const textY = cy - rText * Math.cos(toRad(midDeg));

    petals.push({ i, midDeg, pathD, textX, textY });
  }
  return petals;
}

// Common SVG Header with Rich Sacred Bronze & Element Gradients
function getChakraSvgHeader(title, elementGradientId, elementStops) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%">
  <!-- ${title} - Pure Consecrated Kundalini Chakra Vector Matrix -->
  <defs>
    <!-- Master Dark Antique Bronze Gradients -->
    <linearGradient id="bronzeMain" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1A0E05" />
      <stop offset="45%" stop-color="#3E1E07" />
      <stop offset="70%" stop-color="#2A1406" />
      <stop offset="100%" stop-color="#120803" />
    </linearGradient>
    <linearGradient id="goldAccent" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDF4D4" />
      <stop offset="35%" stop-color="#D4AF37" />
      <stop offset="70%" stop-color="#AA7C11" />
      <stop offset="100%" stop-color="#6B4B03" />
    </linearGradient>

    <!-- Element-Specific Mandala Gradient -->
    <linearGradient id="${elementGradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
      ${elementStops}
    </linearGradient>

    <!-- Sacred Parchment Radial Background -->
    <radialGradient id="sacredBg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FDFBF7" />
      <stop offset="60%" stop-color="#F5EFE1" />
      <stop offset="85%" stop-color="#EBE0CC" />
      <stop offset="100%" stop-color="#DDD0B8" />
    </radialGradient>

    <!-- Subtle Glow Filter -->
    <filter id="sacredGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Sacred Backdrop Disc -->
  <circle cx="500" cy="500" r="490" fill="url(#sacredBg)" stroke="url(#bronzeMain)" stroke-width="4" />
  <circle cx="500" cy="500" r="482" fill="none" stroke="url(#goldAccent)" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.75" />
`;
}

// 1. MULADHARA CHAKRA (४ दल - पृथिवी मण्डल)
function generateMuladharaSvg() {
  const petals = generateOgeePetals(4, 280, 460, 500, 500, 0);
  const syllables = ['वं', 'शं', 'षं', 'सं'];

  return `${getChakraSvgHeader(
    'Mūlādhāra Chakra (मूलाधार चक्र - ४ दल पृथिवी मण्डल)',
    'prithviGrad',
    `<stop offset="0%" stop-color="#FFF2A3" />
     <stop offset="40%" stop-color="#F2C94C" />
     <stop offset="80%" stop-color="#D49E10" />
     <stop offset="100%" stop-color="#8C6500" />`
  )}
  <!-- Concentric Outer Girdles -->
  <g stroke="url(#bronzeMain)" fill="none">
    <circle cx="500" cy="500" r="465" stroke-width="3" />
    <circle cx="500" cy="500" r="280" stroke-width="2.5" />
    <circle cx="500" cy="500" r="268" stroke-width="1.5" stroke-dasharray="3 3" />
  </g>

  <!-- 4 Crimson Lotus Petals (रक्त दल) -->
  <g id="petals" stroke="url(#bronzeMain)" stroke-width="2.8" stroke-linejoin="round">
    ${petals.map(p => `
      <path d="${p.pathD}" fill="#8B1E1E" fill-opacity="0.18" />
      <path d="${p.pathD}" fill="none" />
    `).join('')}
  </g>

  <!-- 4 Matrika Syllables in Devanagari: वं, शं, षं, सं -->
  <g font-family="'Noto Sans Devanagari', 'Mangal', 'Yatra One', 'Sanskrit', serif" font-size="34" font-weight="bold" fill="url(#bronzeMain)" text-anchor="middle" dominant-baseline="central">
    ${petals.map((p, idx) => `
      <circle cx="${p.textX.toFixed(1)}" cy="${p.textY.toFixed(1)}" r="28" fill="#FFF9EB" stroke="url(#goldAccent)" stroke-width="1.8" />
      <text x="${p.textX.toFixed(1)}" y="${(p.textY + 2).toFixed(1)}">${syllables[idx]}</text>
    `).join('')}
  </g>

  <!-- Prithvi Tattva Mandala: Bright Yellow Golden Square with 8 Vajras (अष्टवज्र पीत चतुष्कोण) -->
  <g id="prithviMandala">
    <!-- Outer Square -->
    <rect x="315" y="315" width="370" height="370" fill="url(#prithviGrad)" fill-opacity="0.32" stroke="url(#bronzeMain)" stroke-width="3.5" rx="8" />
    <rect x="325" y="325" width="350" height="350" fill="none" stroke="url(#goldAccent)" stroke-width="1.5" stroke-dasharray="6 4" />
    <rect x="335" y="335" width="330" height="330" fill="none" stroke="url(#bronzeMain)" stroke-width="1.8" />

    <!-- 8 Vajra T-Spears (अष्टवज्र) on Cardinals and Corners -->
    <!-- North Cardinal -->
    <path d="M 485 315 L 485 285 L 475 285 L 500 255 L 525 285 L 515 285 L 515 315 Z" fill="url(#goldAccent)" stroke="url(#bronzeMain)" stroke-width="1.5" />
    <!-- South Cardinal -->
    <path d="M 485 685 L 485 715 L 475 715 L 500 745 L 525 715 L 515 715 L 515 685 Z" fill="url(#goldAccent)" stroke="url(#bronzeMain)" stroke-width="1.5" />
    <!-- East Cardinal -->
    <path d="M 685 485 L 715 485 L 715 475 L 745 500 L 715 525 L 715 515 L 685 515 Z" fill="url(#goldAccent)" stroke="url(#bronzeMain)" stroke-width="1.5" />
    <!-- West Cardinal -->
    <path d="M 315 485 L 285 485 L 285 475 L 255 500 L 285 525 L 285 515 L 315 515 Z" fill="url(#goldAccent)" stroke="url(#bronzeMain)" stroke-width="1.5" />

    <!-- 4 Diagonal Vajra Tridents -->
    <!-- North-East -->
    <g transform="translate(685, 315) rotate(45)">
      <path d="M -10 0 L -10 -25 L -18 -25 L 0 -45 L 18 -25 L 10 -25 L 10 0 Z" fill="url(#goldAccent)" stroke="url(#bronzeMain)" stroke-width="1.5" />
    </g>
    <!-- South-East -->
    <g transform="translate(685, 685) rotate(135)">
      <path d="M -10 0 L -10 -25 L -18 -25 L 0 -45 L 18 -25 L 10 -25 L 10 0 Z" fill="url(#goldAccent)" stroke="url(#bronzeMain)" stroke-width="1.5" />
    </g>
    <!-- South-West -->
    <g transform="translate(315, 685) rotate(225)">
      <path d="M -10 0 L -10 -25 L -18 -25 L 0 -45 L 18 -25 L 10 -25 L 10 0 Z" fill="url(#goldAccent)" stroke="url(#bronzeMain)" stroke-width="1.5" />
    </g>
    <!-- North-West -->
    <g transform="translate(315, 315) rotate(315)">
      <path d="M -10 0 L -10 -25 L -18 -25 L 0 -45 L 18 -25 L 10 -25 L 10 0 Z" fill="url(#goldAccent)" stroke="url(#bronzeMain)" stroke-width="1.5" />
    </g>
  </g>

  <!-- Inverted Traipura Trikona (त्रिकोण - कामरूप योनि मण्डल) -->
  <g id="traipuraTrikona">
    <!-- Golden Inverted Triangle: Apex pointing South -->
    <polygon points="360,390 640,390 500,630" fill="#E86C6C" fill-opacity="0.28" stroke="url(#bronzeMain)" stroke-width="3" />
    <polygon points="378,400 622,400 500,612" fill="none" stroke="url(#goldAccent)" stroke-width="1.8" />
  </g>

  <!-- Svayambhu Linga & Sleeping Golden Kundalini (स्वयम्भू लिङ्ग एवं कुण्डलिनी ३.५ वेष्टन) -->
  <g id="svayambhuLinga">
    <!-- Linga Base & Cylindrical Form -->
    <ellipse cx="500" cy="550" rx="34" ry="12" fill="#2D1505" opacity="0.6" />
    <rect x="474" y="475" width="52" height="65" rx="26" fill="#1C1815" stroke="url(#goldAccent)" stroke-width="2" />
    <!-- Linga Tripundra & Bindu -->
    <path d="M 484 495 Q 500 493 516 495" stroke="#FFF" stroke-width="1.2" fill="none" opacity="0.8" />
    <path d="M 484 499 Q 500 497 516 499" stroke="#FFF" stroke-width="1.2" fill="none" opacity="0.8" />
    <circle cx="500" cy="497" r="2.2" fill="#D32F2F" />

    <!-- 3.5 Coils of Radiant Kundalini (स्वर्ण कुण्डलिनी) -->
    <path d="M 470 540 C 460 520, 540 520, 532 505 C 525 490, 470 490, 475 470 C 480 455, 525 455, 520 440" fill="none" stroke="url(#goldAccent)" stroke-width="3.5" stroke-linecap="round" filter="url(#sacredGlow)" />
  </g>

  <!-- Central Beeja: लं (Prithvi Beeja 'Lam') on Airavata Elephant Base -->
  <g id="centralBeeja">
    <!-- 7-Trunked Airavata Elephant Outline Motif -->
    <path d="M 440 435 C 450 415, 550 415, 560 435 C 570 450, 565 470, 550 475 L 450 475 C 435 470, 430 450, 440 435 Z" fill="#FFF" fill-opacity="0.3" stroke="url(#bronzeMain)" stroke-width="1.2" />
    <circle cx="500" cy="455" r="48" fill="#FFFBF0" stroke="url(#bronzeMain)" stroke-width="2.5" />
    <circle cx="500" cy="455" r="43" fill="none" stroke="url(#goldAccent)" stroke-width="1.2" stroke-dasharray="3 2" />
    <text x="500" y="468" font-family="'Noto Sans Devanagari', 'Mangal', 'Yatra One', serif" font-size="46" font-weight="bold" fill="url(#bronzeMain)" text-anchor="middle">लं</text>
  </g>

  <!-- Inner Shastric Identification -->
  <text x="500" y="775" font-family="'Noto Sans Devanagari', 'Mangal', serif" font-size="20" font-weight="bold" fill="url(#bronzeMain)" text-anchor="middle" letter-spacing="1">मूलाधार चक्र • पृथिवी तत्त्व</text>
  <text x="500" y="800" font-family="'Noto Sans Devanagari', 'Mangal', serif" font-size="14" fill="#6B4B03" text-anchor="middle">ब्रह्मग्रन्थि • डाकिनी शक्ति • स्वयम्भूलिङ्ग</text>
</svg>`;
}

// 2. SVADHISHTHANA CHAKRA (६ दल - अप्/जल मण्डल)
function generateSvadhishthanaSvg() {
  const petals = generateOgeePetals(6, 280, 460, 500, 500, 0);
  const syllables = ['बं', 'भं', 'मं', 'यं', 'रं', 'लं'];

  return `${getChakraSvgHeader(
    'Svādhiṣṭhāna Chakra (स्वाधिष्ठान चक्र - ६ दल अप् मण्डल)',
    'apasGrad',
    `<stop offset="0%" stop-color="#E0F7FA" />
     <stop offset="35%" stop-color="#B2EBF2" />
     <stop offset="70%" stop-color="#80DEEA" />
     <stop offset="100%" stop-color="#26C6DA" />`
  )}
  <!-- Concentric Outer Girdles -->
  <g stroke="url(#bronzeMain)" fill="none">
    <circle cx="500" cy="500" r="465" stroke-width="3" />
    <circle cx="500" cy="500" r="280" stroke-width="2.5" />
    <circle cx="500" cy="500" r="268" stroke-width="1.5" stroke-dasharray="3 3" />
  </g>

  <!-- 6 Vermilion / Coral-Orange Lotus Petals (विद्रुमप्रभ ६ दल) -->
  <g id="petals" stroke="url(#bronzeMain)" stroke-width="2.8" stroke-linejoin="round">
    ${petals.map(p => `
      <path d="${p.pathD}" fill="#FF7043" fill-opacity="0.25" />
      <path d="${p.pathD}" fill="none" />
    `).join('')}
  </g>

  <!-- 6 Matrika Syllables in Devanagari: बं, भं, मं, यं, रं, लं -->
  <g font-family="'Noto Sans Devanagari', 'Mangal', 'Yatra One', 'Sanskrit', serif" font-size="32" font-weight="bold" fill="url(#bronzeMain)" text-anchor="middle" dominant-baseline="central">
    ${petals.map((p, idx) => `
      <circle cx="${p.textX.toFixed(1)}" cy="${p.textY.toFixed(1)}" r="26" fill="#FFF9EB" stroke="url(#goldAccent)" stroke-width="1.8" />
      <text x="${p.textX.toFixed(1)}" y="${(p.textY + 2).toFixed(1)}">${syllables[idx]}</text>
    `).join('')}
  </g>

  <!-- Apas Tattva Mandala: Shining White Crescent Moon (शशिशकल चन्द्र मण्डल) -->
  <g id="apasMandala">
    <!-- Circular Water Enclosure -->
    <circle cx="500" cy="500" r="210" fill="url(#apasGrad)" fill-opacity="0.28" stroke="url(#bronzeMain)" stroke-width="2.8" />
    <circle cx="500" cy="500" r="195" fill="none" stroke="url(#goldAccent)" stroke-width="1.4" stroke-dasharray="5 3" />

    <!-- Luminous Crescent Moon Curve (अर्धचन्द्र) -->
    <path d="M 330 450 A 175 175 0 0 0 670 450 A 135 120 0 0 1 330 450 Z" fill="#FFFFFF" fill-opacity="0.75" stroke="url(#bronzeMain)" stroke-width="2.5" />

    <!-- Water Ripple Consecrations -->
    <path d="M 380 560 Q 440 540 500 560 T 620 560" stroke="#00838F" stroke-width="1.8" fill="none" opacity="0.6" />
    <path d="M 400 585 Q 450 570 500 585 T 600 585" stroke="#00838F" stroke-width="1.5" fill="none" opacity="0.5" />
    <path d="M 430 610 Q 465 600 500 610 T 570 610" stroke="#00838F" stroke-width="1.2" fill="none" opacity="0.4" />
  </g>

  <!-- Makara Vehicle Silhouette (मकर वाहन) Underneath -->
  <g id="makaraVehicle" opacity="0.85">
    <path d="M 420 540 Q 460 520 500 535 Q 540 520 580 540 Q 570 560 540 565 Q 500 570 460 565 Z" fill="#37474F" stroke="url(#goldAccent)" stroke-width="1.5" />
    <!-- Makara curled aquatic tail -->
    <path d="M 420 540 Q 400 535 395 550 Q 395 565 410 560" fill="none" stroke="url(#goldAccent)" stroke-width="2" />
  </g>

  <!-- Central Beeja: वं (Varuna / Apas Beeja 'Vam') -->
  <g id="centralBeeja">
    <circle cx="500" cy="450" r="54" fill="#FFFFFF" stroke="url(#bronzeMain)" stroke-width="2.6" />
    <circle cx="500" cy="450" r="48" fill="none" stroke="url(#goldAccent)" stroke-width="1.4" stroke-dasharray="3 2" />
    <text x="500" y="465" font-family="'Noto Sans Devanagari', 'Mangal', 'Yatra One', serif" font-size="50" font-weight="bold" fill="url(#bronzeMain)" text-anchor="middle">वं</text>
  </g>

  <!-- Inner Shastric Identification -->
  <text x="500" y="775" font-family="'Noto Sans Devanagari', 'Mangal', serif" font-size="20" font-weight="bold" fill="url(#bronzeMain)" text-anchor="middle" letter-spacing="1">स्वाधिष्ठान चक्र • जल (अप्) तत्त्व</text>
  <text x="500" y="800" font-family="'Noto Sans Devanagari', 'Mangal', serif" font-size="14" fill="#6B4B03" text-anchor="middle">राकिणी शक्ति • विष्णु • मकर वाहन</text>
</svg>`;
}

// 3. MANIPURA CHAKRA (१० दल - वह्नि/अग्नि मण्डल)
function generateManipuraSvg() {
  const petals = generateOgeePetals(10, 280, 460, 500, 500, 0);
  const syllables = ['डं', 'ढं', 'णं', 'तं', 'थं', 'दं', 'धं', 'नं', 'पं', 'फं'];

  return `${getChakraSvgHeader(
    'Maṇipūra Chakra (मणिपूर चक्र - १० दल अग्नि मण्डल)',
    'agniGrad',
    `<stop offset="0%" stop-color="#FFEBEE" />
     <stop offset="30%" stop-color="#FF8A80" />
     <stop offset="70%" stop-color="#FF5252" />
     <stop offset="100%" stop-color="#D50000" />`
  )}
  <!-- Concentric Outer Girdles -->
  <g stroke="url(#bronzeMain)" fill="none">
    <circle cx="500" cy="500" r="465" stroke-width="3" />
    <circle cx="500" cy="500" r="280" stroke-width="2.5" />
    <circle cx="500" cy="500" r="268" stroke-width="1.5" stroke-dasharray="3 3" />
  </g>

  <!-- 10 Dark Raincloud Blue Lotus Petals (मेघनील १० दल) -->
  <g id="petals" stroke="url(#bronzeMain)" stroke-width="2.6" stroke-linejoin="round">
    ${petals.map(p => `
      <path d="${p.pathD}" fill="#1A237E" fill-opacity="0.22" />
      <path d="${p.pathD}" fill="none" />
    `).join('')}
  </g>

  <!-- 10 Matrika Syllables in Devanagari: डं to फं -->
  <g font-family="'Noto Sans Devanagari', 'Mangal', 'Yatra One', 'Sanskrit', serif" font-size="28" font-weight="bold" fill="url(#bronzeMain)" text-anchor="middle" dominant-baseline="central">
    ${petals.map((p, idx) => `
      <circle cx="${p.textX.toFixed(1)}" cy="${p.textY.toFixed(1)}" r="24" fill="#FFF9EB" stroke="url(#goldAccent)" stroke-width="1.6" />
      <text x="${p.textX.toFixed(1)}" y="${(p.textY + 2).toFixed(1)}">${syllables[idx]}</text>
    `).join('')}
  </g>

  <!-- Agni Tattva Mandala: Red Inverted / Upright Triangle with 3 Swastikas -->
  <!-- Per Sat-Chakra-Nirupana verse 19: "तस्यान्तस्त्रिकोणं वैश्वानरस्य त्रिक्रोणे तद्वाह्ये त्रिभिः स्वस्तिकैः समलङ्कृतम्" (Inverted/Apex down or Upright with 3 swastikas) -->
  <g id="agniMandala">
    <!-- Glowing Fire Disc -->
    <circle cx="500" cy="500" r="225" fill="url(#agniGrad)" fill-opacity="0.24" stroke="url(#bronzeMain)" stroke-width="2.4" />
    <circle cx="500" cy="500" r="212" fill="none" stroke="url(#goldAccent)" stroke-width="1.4" stroke-dasharray="4 4" />

    <!-- Fiery Upright Agni Triangle -->
    <polygon points="500,290 680,610 320,610" fill="url(#agniGrad)" fill-opacity="0.5" stroke="url(#bronzeMain)" stroke-width="3.5" />
    <polygon points="500,315 658,595 342,595" fill="none" stroke="url(#goldAccent)" stroke-width="1.8" />

    <!-- 3 Auspicious Swastikas (त्रिकोण त्रि-स्वस्तिक) at the 3 vertices -->
    <!-- Top Vertex Swastika -->
    <g transform="translate(500, 270) scale(0.65)" stroke="url(#bronzeMain)" stroke-width="3" fill="none">
      <path d="M 0 -15 L 0 15 M -15 0 L 15 0 M 0 -15 L 12 -15 M 15 0 L 15 12 M 0 15 L -12 15 M -15 0 L -15 -12" />
    </g>
    <!-- Bottom Right Vertex Swastika -->
    <g transform="translate(695, 625) scale(0.65)" stroke="url(#bronzeMain)" stroke-width="3" fill="none">
      <path d="M 0 -15 L 0 15 M -15 0 L 15 0 M 0 -15 L 12 -15 M 15 0 L 15 12 M 0 15 L -12 15 M -15 0 L -15 -12" />
    </g>
    <!-- Bottom Left Vertex Swastika -->
    <g transform="translate(305, 625) scale(0.65)" stroke="url(#bronzeMain)" stroke-width="3" fill="none">
      <path d="M 0 -15 L 0 15 M -15 0 L 15 0 M 0 -15 L 12 -15 M 15 0 L 15 12 M 0 15 L -12 15 M -15 0 L -15 -12" />
    </g>
  </g>

  <!-- Mesha (Ram) Vehicle of Agni Motif -->
  <g id="meshaVehicle" opacity="0.8">
    <ellipse cx="500" cy="565" rx="55" ry="18" fill="#424242" opacity="0.3" />
    <!-- Ram Horns Symbolism -->
    <path d="M 470 540 C 450 515 440 550 460 560" fill="none" stroke="url(#goldAccent)" stroke-width="3" stroke-linecap="round" />
    <path d="M 530 540 C 550 515 560 550 540 560" fill="none" stroke="url(#goldAccent)" stroke-width="3" stroke-linecap="round" />
  </g>

  <!-- Central Beeja: रं (Agni Beeja 'Ram') -->
  <g id="centralBeeja">
    <circle cx="500" cy="475" r="54" fill="#FFF8E7" stroke="url(#bronzeMain)" stroke-width="2.6" />
    <circle cx="500" cy="475" r="48" fill="none" stroke="url(#goldAccent)" stroke-width="1.4" stroke-dasharray="3 2" />
    <text x="500" y="492" font-family="'Noto Sans Devanagari', 'Mangal', 'Yatra One', serif" font-size="52" font-weight="bold" fill="url(#bronzeMain)" text-anchor="middle">रं</text>
  </g>

  <!-- Inner Shastric Identification -->
  <text x="500" y="775" font-family="'Noto Sans Devanagari', 'Mangal', serif" font-size="20" font-weight="bold" fill="url(#bronzeMain)" text-anchor="middle" letter-spacing="1">मणिपूर चक्र • वह्नि (अग्नि) तत्त्व</text>
  <text x="500" y="800" font-family="'Noto Sans Devanagari', 'Mangal', serif" font-size="14" fill="#6B4B03" text-anchor="middle">लाकिणी शक्ति • रुद्र • मेष वाहन • त्रि-स्वस्तिक</text>
</svg>`;
}

// 4. ANAHATA CHAKRA (१२ दल - वायु मण्डल / बाणलिङ्ग)
function generateAnahataSvg() {
  const petals = generateOgeePetals(12, 280, 460, 500, 500, 0);
  const syllables = ['कं', 'खं', 'गं', 'घं', 'ङं', 'चं', 'छं', 'जं', 'झं', 'ञं', 'टं', 'ठं'];

  return `${getChakraSvgHeader(
    'Anāhata Chakra (अनाहत चक्र - १२ दल वायु मण्डल / बाणलिङ्ग)',
    'vayuGrad',
    `<stop offset="0%" stop-color="#ECEFF1" />
     <stop offset="35%" stop-color="#CFD8DC" />
     <stop offset="70%" stop-color="#90A4AE" />
     <stop offset="100%" stop-color="#455A64" />`
  )}
  <!-- Concentric Outer Girdles -->
  <g stroke="url(#bronzeMain)" fill="none">
    <circle cx="500" cy="500" r="465" stroke-width="3" />
    <circle cx="500" cy="500" r="280" stroke-width="2.5" />
    <circle cx="500" cy="500" r="268" stroke-width="1.5" stroke-dasharray="3 3" />
  </g>

  <!-- 12 Bandhuka-Flower Vermilion Red Lotus Petals (बन्धूकप्रभ १२ दल) -->
  <g id="petals" stroke="url(#bronzeMain)" stroke-width="2.5" stroke-linejoin="round">
    ${petals.map(p => `
      <path d="${p.pathD}" fill="#C2185B" fill-opacity="0.22" />
      <path d="${p.pathD}" fill="none" />
    `).join('')}
  </g>

  <!-- 12 Matrika Syllables in Devanagari: कं to ठं -->
  <g font-family="'Noto Sans Devanagari', 'Mangal', 'Yatra One', 'Sanskrit', serif" font-size="26" font-weight="bold" fill="url(#bronzeMain)" text-anchor="middle" dominant-baseline="central">
    ${petals.map((p, idx) => `
      <circle cx="${p.textX.toFixed(1)}" cy="${p.textY.toFixed(1)}" r="22" fill="#FFF9EB" stroke="url(#goldAccent)" stroke-width="1.6" />
      <text x="${p.textX.toFixed(1)}" y="${(p.textY + 2).toFixed(1)}">${syllables[idx]}</text>
    `).join('')}
  </g>

  <!-- Vayu Tattva Mandala: Smoky Hexagram Shatkona (धूम्राकार षट्कोण) -->
  <g id="vayuHexagram">
    <circle cx="500" cy="500" r="220" fill="url(#vayuGrad)" fill-opacity="0.25" stroke="url(#bronzeMain)" stroke-width="2.6" />
    <circle cx="500" cy="500" r="208" fill="none" stroke="url(#goldAccent)" stroke-width="1.4" stroke-dasharray="4 3" />

    <!-- Upward Triangle (Shiva) -->
    <polygon points="500,305 665,595 335,595" fill="none" stroke="url(#bronzeMain)" stroke-width="3" />
    <polygon points="500,320 650,580 350,580" fill="none" stroke="url(#goldAccent)" stroke-width="1.4" opacity="0.7" />

    <!-- Downward Triangle (Shakti) Interlocking -->
    <polygon points="500,695 665,405 335,405" fill="none" stroke="url(#bronzeMain)" stroke-width="3" />
    <polygon points="500,680 650,420 350,420" fill="none" stroke="url(#goldAccent)" stroke-width="1.4" opacity="0.7" />
  </g>

  <!-- Central Golden Traipura Triangle & Baanalinga (कामरूप त्रिकोण एवं सुवर्ण बाणलिङ्ग) -->
  <g id="baanalinga">
    <!-- Golden Triangle -->
    <polygon points="500,430 550,520 450,520" fill="#FFF8E1" fill-opacity="0.6" stroke="url(#goldAccent)" stroke-width="2.2" />

    <!-- Glowing Golden Baanalinga with Unbroken Flame (अखण्ड दीपशिखा / हंस) -->
    <ellipse cx="500" cy="510" rx="20" ry="7" fill="#2E1C0C" opacity="0.5" />
    <rect x="488" y="475" width="24" height="32" rx="12" fill="url(#goldAccent)" stroke="url(#bronzeMain)" stroke-width="1.6" />
    
    <!-- Akhanda Jyoti (Flame of the Jivatman) -->
    <path d="M 500 452 Q 508 468 500 476 Q 492 468 500 452 Z" fill="#FF9800" stroke="#FFD54F" stroke-width="1" filter="url(#sacredGlow)" />
  </g>

  <!-- Black Antelope (कृष्णमृग) Silhouette Base -->
  <g id="krishnaMriga" opacity="0.75">
    <ellipse cx="500" cy="552" rx="38" ry="10" fill="#263238" opacity="0.25" />
    <path d="M 480 545 Q 500 538 520 545" stroke="url(#bronzeMain)" stroke-width="2" fill="none" />
  </g>

  <!-- Central Beeja: यं (Vayu Beeja 'Yam') -->
  <g id="centralBeeja">
    <circle cx="500" cy="390" r="44" fill="#FFFFFF" stroke="url(#bronzeMain)" stroke-width="2.4" />
    <circle cx="500" cy="390" r="39" fill="none" stroke="url(#goldAccent)" stroke-width="1.2" stroke-dasharray="3 2" />
    <text x="500" y="403" font-family="'Noto Sans Devanagari', 'Mangal', 'Yatra One', serif" font-size="42" font-weight="bold" fill="url(#bronzeMain)" text-anchor="middle">यं</text>
  </g>

  <!-- Inner Shastric Identification -->
  <text x="500" y="775" font-family="'Noto Sans Devanagari', 'Mangal', serif" font-size="20" font-weight="bold" fill="url(#bronzeMain)" text-anchor="middle" letter-spacing="1">अनाहत चक्र • वायु तत्त्व (धूम्र षट्कोण)</text>
  <text x="500" y="800" font-family="'Noto Sans Devanagari', 'Mangal', serif" font-size="14" fill="#6B4B03" text-anchor="middle">विष्णुग्रन्थि • काकिणी शक्ति • बाणलिङ्ग • अखण्ड दीप</text>
</svg>`;
}

// 5. VISHUDDHA CHAKRA (१६ दल - आकाश मण्डल)
function generateVishuddhaSvg() {
  const petals = generateOgeePetals(16, 280, 460, 500, 500, 0);
  const syllables = ['अं', 'आं', 'इं', 'ईं', 'उं', 'ऊं', 'ऋं', 'ॠं', 'ऌं', 'ॡं', 'एं', 'ऐं', 'ओं', 'औं', 'अं', 'अः'];

  return `${getChakraSvgHeader(
    'Viśuddha Chakra (विशुद्ध चक्र - १६ दल आकाश मण्डल)',
    'akashaGrad',
    `<stop offset="0%" stop-color="#EDE7F6" />
     <stop offset="35%" stop-color="#D1C4E9" />
     <stop offset="70%" stop-color="#B39DDB" />
     <stop offset="100%" stop-color="#7E57C2" />`
  )}
  <!-- Concentric Outer Girdles -->
  <g stroke="url(#bronzeMain)" fill="none">
    <circle cx="500" cy="500" r="465" stroke-width="3" />
    <circle cx="500" cy="500" r="280" stroke-width="2.5" />
    <circle cx="500" cy="500" r="268" stroke-width="1.5" stroke-dasharray="3 3" />
  </g>

  <!-- 16 Smoky Purple / Lilac Lotus Petals (धूम्र-नील १६ दल) -->
  <g id="petals" stroke="url(#bronzeMain)" stroke-width="2.2" stroke-linejoin="round">
    ${petals.map(p => `
      <path d="${p.pathD}" fill="#5E35B1" fill-opacity="0.20" />
      <path d="${p.pathD}" fill="none" />
    `).join('')}
  </g>

  <!-- 16 Matrika Vowels in Devanagari: अं to अः -->
  <g font-family="'Noto Sans Devanagari', 'Mangal', 'Yatra One', 'Sanskrit', serif" font-size="22" font-weight="bold" fill="url(#bronzeMain)" text-anchor="middle" dominant-baseline="central">
    ${petals.map((p, idx) => `
      <circle cx="${p.textX.toFixed(1)}" cy="${p.textY.toFixed(1)}" r="18" fill="#FFF9EB" stroke="url(#goldAccent)" stroke-width="1.4" />
      <text x="${p.textX.toFixed(1)}" y="${(p.textY + 1).toFixed(1)}">${syllables[idx]}</text>
    `).join('')}
  </g>

  <!-- Akasha Tattva Mandala: Pure Circular Mandala like Full Moon (पूर्णचन्द्र मण्डल / वृत्त) -->
  <g id="akashaMandala">
    <circle cx="500" cy="500" r="225" fill="#FFFFFF" fill-opacity="0.82" stroke="url(#bronzeMain)" stroke-width="3" />
    <circle cx="500" cy="500" r="212" fill="none" stroke="url(#goldAccent)" stroke-width="1.6" stroke-dasharray="5 3" />
    <circle cx="500" cy="500" r="200" fill="none" stroke="url(#bronzeMain)" stroke-width="1.4" />

    <!-- Inverted Triangle / Silver Crescent inside Akasha Circle -->
    <polygon points="500,590 590,440 410,440" fill="none" stroke="url(#bronzeMain)" stroke-width="2.4" />
    <polygon points="500,572 576,450 424,450" fill="none" stroke="url(#goldAccent)" stroke-width="1.2" />

    <!-- Pure Nectar Drop (अमृत बिन्दु) -->
    <circle cx="500" cy="510" r="14" fill="url(#goldAccent)" stroke="url(#bronzeMain)" stroke-width="1.5" />
  </g>

  <!-- White Airavata Elephant (शुक्ल गज) Motif -->
  <g id="whiteElephant" opacity="0.85">
    <ellipse cx="500" cy="565" rx="55" ry="12" fill="#E0E0E0" stroke="url(#bronzeMain)" stroke-width="1.4" />
  </g>

  <!-- Central Beeja: हं (Akasha Beeja 'Ham') -->
  <g id="centralBeeja">
    <circle cx="500" cy="410" r="48" fill="#FFFDF8" stroke="url(#bronzeMain)" stroke-width="2.6" />
    <circle cx="500" cy="410" r="42" fill="none" stroke="url(#goldAccent)" stroke-width="1.4" stroke-dasharray="3 2" />
    <text x="500" y="426" font-family="'Noto Sans Devanagari', 'Mangal', 'Yatra One', serif" font-size="46" font-weight="bold" fill="url(#bronzeMain)" text-anchor="middle">हं</text>
  </g>

  <!-- Inner Shastric Identification -->
  <text x="500" y="775" font-family="'Noto Sans Devanagari', 'Mangal', serif" font-size="20" font-weight="bold" fill="url(#bronzeMain)" text-anchor="middle" letter-spacing="1">विशुद्ध चक्र • आकाश तत्त्व (पूर्णचन्द्र मण्डल)</text>
  <text x="500" y="800" font-family="'Noto Sans Devanagari', 'Mangal', serif" font-size="14" fill="#6B4B03" text-anchor="middle">शाकिणी शक्ति • पञ्चमुख सदाशिव • श्वेत ऐरावत</text>
</svg>`;
}

// 6. AJNA CHAKRA (२ दल - मनस् तत्त्व / इतरलिङ्ग / प्रणव)
function generateAjnaSvg() {
  // 2 Petals: Right (East/Pingala) and Left (West/Ida)
  // East is 90 deg, West is 270 deg
  const petalRight = `M 500 320 C 650 320, 780 400, 880 500 C 780 600, 650 680, 500 680 Z`;
  const petalLeft = `M 500 320 C 350 320, 220 400, 120 500 C 220 600, 350 680, 500 680 Z`;

  return `${getChakraSvgHeader(
    'Ājñā Chakra (आज्ञा चक्र - २ दल मनस् तत्त्व / इतरलिङ्ग)',
    'ajnaGrad',
    `<stop offset="0%" stop-color="#FFFFFF" />
     <stop offset="40%" stop-color="#F5F5F5" />
     <stop offset="75%" stop-color="#E0E0E0" />
     <stop offset="100%" stop-color="#BDBDBD" />`
  )}
  <!-- Concentric Outer Girdles -->
  <g stroke="url(#bronzeMain)" fill="none">
    <circle cx="500" cy="500" r="465" stroke-width="3" />
    <circle cx="500" cy="500" r="280" stroke-width="2.5" />
    <circle cx="500" cy="500" r="268" stroke-width="1.5" stroke-dasharray="3 3" />
  </g>

  <!-- 2 Pure Moon-White Lotus Petals (हिमकर शुभ्र द्विदलि) -->
  <g id="petals" stroke="url(#bronzeMain)" stroke-width="3" stroke-linejoin="round">
    <!-- Right Petal (Ham) -->
    <path d="${petalRight}" fill="#FFFFFF" fill-opacity="0.6" />
    <!-- Left Petal (Ksham) -->
    <path d="${petalLeft}" fill="#FFFFFF" fill-opacity="0.6" />
  </g>

  <!-- Right Petal Syllable: हं (Ha - Sun / Pingala) -->
  <g font-family="'Noto Sans Devanagari', 'Mangal', 'Yatra One', 'Sanskrit', serif" font-size="44" font-weight="bold" fill="url(#bronzeMain)" text-anchor="middle" dominant-baseline="central">
    <circle cx="680" cy="500" r="38" fill="#FFF9EB" stroke="url(#goldAccent)" stroke-width="2" />
    <text x="680" y="503">हं</text>
  </g>

  <!-- Left Petal Syllable: क्षं (Ksha - Moon / Ida) -->
  <g font-family="'Noto Sans Devanagari', 'Mangal', 'Yatra One', 'Sanskrit', serif" font-size="44" font-weight="bold" fill="url(#bronzeMain)" text-anchor="middle" dominant-baseline="central">
    <circle cx="320" cy="500" r="38" fill="#FFF9EB" stroke="url(#goldAccent)" stroke-width="2" />
    <text x="320" y="503">क्षं</text>
  </g>

  <!-- Inner Circle & Inverted Yoni Triangle (योनि त्रिकोण) -->
  <g id="ajnaCore">
    <circle cx="500" cy="500" r="180" fill="url(#ajnaGrad)" fill-opacity="0.5" stroke="url(#bronzeMain)" stroke-width="3" />
    <circle cx="500" cy="500" r="165" fill="none" stroke="url(#goldAccent)" stroke-width="1.5" stroke-dasharray="4 3" />

    <!-- Inverted Yoni Triangle (Apex pointing downward / South) -->
    <polygon points="360,420 640,420 500,640" fill="#FFFFFF" fill-opacity="0.8" stroke="url(#bronzeMain)" stroke-width="3" />
    <polygon points="380,432 620,432 500,620" fill="none" stroke="url(#goldAccent)" stroke-width="1.8" />
  </g>

  <!-- Lightning-like Itara Linga (तडिदाकार इतरलिङ्ग) -->
  <g id="itaraLinga">
    <ellipse cx="500" cy="565" rx="30" ry="10" fill="#2E1C0C" opacity="0.4" />
    <!-- Radiant Linga Body -->
    <rect x="478" y="490" width="44" height="65" rx="22" fill="#FFFFFF" stroke="url(#goldAccent)" stroke-width="2.5" filter="url(#sacredGlow)" />
    <!-- Flash of Lightning Streak -->
    <path d="M 495 500 L 505 515 L 493 525 L 507 545" stroke="#FFD700" stroke-width="2" fill="none" />
  </g>

  <!-- Supreme Pranava Beeja: ॐ (Om) with Glowing Nada-Bindu -->
  <g id="pranavaBeeja">
    <circle cx="500" cy="425" r="54" fill="#FFFDF8" stroke="url(#bronzeMain)" stroke-width="2.6" />
    <circle cx="500" cy="425" r="48" fill="none" stroke="url(#goldAccent)" stroke-width="1.5" stroke-dasharray="4 2" />
    <text x="500" y="442" font-family="'Noto Sans Devanagari', 'Mangal', 'Yatra One', serif" font-size="52" font-weight="bold" fill="url(#bronzeMain)" text-anchor="middle">ॐ</text>
  </g>

  <!-- Inner Shastric Identification -->
  <text x="500" y="775" font-family="'Noto Sans Devanagari', 'Mangal', serif" font-size="20" font-weight="bold" fill="url(#bronzeMain)" text-anchor="middle" letter-spacing="1">आज्ञा चक्र • मनस् / ज्ञान तत्त्व (द्विदलि)</text>
  <text x="500" y="800" font-family="'Noto Sans Devanagari', 'Mangal', serif" font-size="14" fill="#6B4B03" text-anchor="middle">रुद्रग्रन्थि • हाकिणी शक्ति • इतरलिङ्ग • ॐ प्रणव</text>
</svg>`;
}

// 7. SAHASRARA CHAKRA (१००० दल - ब्रह्मरन्ध्र / महाबिन्दु / सोऽहम्)
function generateSahasraraSvg() {
  // Multi-tier petals representing the thousand-fold rays
  // Tier 1 (Outer): 64 radiating petals
  // Tier 2 (Middle): 32 petals
  // Tier 3 (Inner): 16 petals
  const outerPetals = generateOgeePetals(64, 380, 475, 500, 500, 0);
  const midPetals = generateOgeePetals(32, 280, 395, 500, 500, 5.625);
  const innerPetals = generateOgeePetals(16, 190, 290, 500, 500, 0);

  return `${getChakraSvgHeader(
    'Sahasrāra Mahā-Cakra (सहस्रार महाचक्र - सहस्रदल पद्म / महाबिन्दु)',
    'sahasraraGrad',
    `<stop offset="0%" stop-color="#FFFFFF" />
     <stop offset="25%" stop-color="#FFF8E1" />
     <stop offset="60%" stop-color="#FFE082" />
     <stop offset="85%" stop-color="#FFD54F" />
     <stop offset="100%" stop-color="#FFA000" />`
  )}
  <!-- Concentric Outer Girdles -->
  <g stroke="url(#bronzeMain)" fill="none">
    <circle cx="500" cy="500" r="480" stroke-width="3" />
    <circle cx="500" cy="500" r="474" stroke-width="1.2" stroke-dasharray="3 3" />
  </g>

  <!-- Outer Layer (64 Petals) -->
  <g id="outerPetals" stroke="url(#bronzeMain)" stroke-width="1.2" stroke-linejoin="round">
    ${outerPetals.map(p => `
      <path d="${p.pathD}" fill="#FFF8E1" fill-opacity="0.35" />
      <path d="${p.pathD}" fill="none" />
    `).join('')}
  </g>

  <!-- Mid Layer (32 Petals) -->
  <g id="midPetals" stroke="url(#bronzeMain)" stroke-width="1.6" stroke-linejoin="round">
    ${midPetals.map(p => `
      <path d="${p.pathD}" fill="#FFECB3" fill-opacity="0.45" />
      <path d="${p.pathD}" fill="none" />
    `).join('')}
  </g>

  <!-- Inner Layer (16 Petals) -->
  <g id="innerPetals" stroke="url(#bronzeMain)" stroke-width="2.2" stroke-linejoin="round">
    ${innerPetals.map(p => `
      <path d="${p.pathD}" fill="#FFE082" fill-opacity="0.55" />
      <path d="${p.pathD}" fill="none" />
    `).join('')}
  </g>

  <!-- Chandra Mandala: Radiant Full Moon Disk (पूर्ण चन्द्र मण्डल) -->
  <g id="chandraMandala">
    <circle cx="500" cy="500" r="185" fill="#FFFFFF" fill-opacity="0.95" stroke="url(#bronzeMain)" stroke-width="3" />
    <circle cx="500" cy="500" r="172" fill="none" stroke="url(#goldAccent)" stroke-width="1.8" stroke-dasharray="6 3" />
    <circle cx="500" cy="500" r="158" fill="none" stroke="url(#bronzeMain)" stroke-width="1.2" />

    <!-- 16 Kala Nectar Rays radiating outward -->
    ${Array.from({ length: 16 }).map((_, i) => {
      const angle = (i * 360) / 16;
      const x1 = 500 + 158 * Math.sin(toRad(angle));
      const y1 = 500 - 158 * Math.cos(toRad(angle));
      const x2 = 500 + 185 * Math.sin(toRad(angle));
      const y2 = 500 - 185 * Math.cos(toRad(angle));
      return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="url(#goldAccent)" stroke-width="1.8" />`;
    }).join('\n    ')}
  </g>

  <!-- Traipura Trikona & Ama-Kala Crescent (अमाकला एवं निर्वाणकला) -->
  <g id="amakalaMandala">
    <!-- Golden Triangle pointing downward -->
    <polygon points="410,430 590,430 500,575" fill="#FFF9C4" fill-opacity="0.65" stroke="url(#goldAccent)" stroke-width="2.5" />
    <polygon points="425,440 575,440 500,555" fill="none" stroke="url(#bronzeMain)" stroke-width="1.4" />

    <!-- Inverted Crescent dripping Amrita (अमाकला) -->
    <path d="M 440 470 A 60 60 0 0 0 560 470 A 50 42 0 0 1 440 470 Z" fill="url(#goldAccent)" stroke="url(#bronzeMain)" stroke-width="1.5" />
  </g>

  <!-- Supreme Mahabindu (परमबिन्दु - Shiva-Shakti Samarasya) -->
  <g id="mahabindu">
    <circle cx="500" cy="500" r="32" fill="#FFFFFF" stroke="url(#bronzeMain)" stroke-width="2.8" filter="url(#sacredGlow)" />
    <circle cx="500" cy="500" r="26" fill="url(#goldAccent)" stroke="none" />
    <circle cx="500" cy="500" r="9" fill="#1A0E05" />
  </g>

  <!-- Soham & Pranava Inscription -->
  <text x="500" y="410" font-family="'Noto Sans Devanagari', 'Mangal', 'Yatra One', serif" font-size="34" font-weight="bold" fill="url(#bronzeMain)" text-anchor="middle">सोऽहम्</text>

  <!-- Inner Shastric Identification -->
  <text x="500" y="775" font-family="'Noto Sans Devanagari', 'Mangal', serif" font-size="20" font-weight="bold" fill="url(#bronzeMain)" text-anchor="middle" letter-spacing="1">सहस्रार महाचक्र • कैवल्य मुक्ति</text>
  <text x="500" y="800" font-family="'Noto Sans Devanagari', 'Mangal', serif" font-size="14" fill="#6B4B03" text-anchor="middle">परमशिव-पराशक्ति समरसता • अमाकला • महाबिन्दु</text>
</svg>`;
}

// Generate and write all SVGs
const chakras = [
  { id: 'muladhara_chakra', fn: generateMuladharaSvg, aliases: ['muladhara'] },
  { id: 'svadhishthana_chakra', fn: generateSvadhishthanaSvg, aliases: ['svadhishthana'] },
  { id: 'manipura_chakra', fn: generateManipuraSvg, aliases: ['manipura'] },
  { id: 'anahata_chakra', fn: generateAnahataSvg, aliases: ['anahata'] },
  { id: 'vishuddha_chakra', fn: generateVishuddhaSvg, aliases: ['vishuddha'] },
  { id: 'ajna_chakra', fn: generateAjnaSvg, aliases: ['ajna'] },
  { id: 'sahasrara_chakra', fn: generateSahasraraSvg, aliases: ['sahasrara'] }
];

console.log('--- Generating Canonical Kundalini Chakras SVGs ---');

chakras.forEach(c => {
  const svgContent = c.fn();

  // 1. Write to public/yantras/chakras/
  const chakrasPath = path.join(chakrasSubDir, `${c.id}.svg`);
  fs.writeFileSync(chakrasPath, svgContent, 'utf8');
  console.log(`[Generated] ${chakrasPath}`);

  // 2. Write to public/yantras/18_Chakras/
  const numberedPath = path.join(chakrasNumberedDir, `${c.id}.svg`);
  fs.writeFileSync(numberedPath, svgContent, 'utf8');
  console.log(`[Generated] ${numberedPath}`);

  // 3. Write to public/yantras/
  const rootPath = path.join(publicYantrasDir, `${c.id}.svg`);
  fs.writeFileSync(rootPath, svgContent, 'utf8');
  console.log(`[Generated] ${rootPath}`);

  // Also write aliases for convenient linking
  c.aliases.forEach(alias => {
    fs.writeFileSync(path.join(chakrasSubDir, `${alias}.svg`), svgContent, 'utf8');
    fs.writeFileSync(path.join(publicYantrasDir, `${alias}.svg`), svgContent, 'utf8');
  });
});

console.log('✓ All 7 Kundalini Chakra SVGs successfully generated and verified.');
