const fs = require('fs');
const path = require('path');

// Ensure output directories exist
const publicKundasDir = path.join(__dirname, '..', 'public', 'kundas');
const yantrasKundasDir = path.join(__dirname, '..', 'public', 'yantras', 'kundas');

[publicKundasDir, yantrasKundasDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const toRad = deg => (deg * Math.PI) / 180;

// Shared SVG Header with Vedic Terracotta, Sandstone & Sacred Fire Gradients
function getKundaSvgHeader(title, subtitle) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%">
  <!-- ${title} - Classical Shastric Yagya Kunda Vector Matrix -->
  <defs>
    <!-- Terracotta / Sacred Brick Gradients -->
    <linearGradient id="brickOuter" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F2E6D0" />
      <stop offset="40%" stop-color="#E2CCA6" />
      <stop offset="100%" stop-color="#CBB184" />
    </linearGradient>

    <!-- 3 Mekhala Gradients (White, Red, Black/Navy) -->
    <!-- Mekhala 1: White (Sattva / Brahma) -->
    <linearGradient id="mekhalaWhite" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="60%" stop-color="#F9F6EE" />
      <stop offset="100%" stop-color="#EFE8D8" />
    </linearGradient>

    <!-- Mekhala 2: Red (Rajas / Vishnu) -->
    <linearGradient id="mekhalaRed" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D9531E" />
      <stop offset="45%" stop-color="#B23812" />
      <stop offset="100%" stop-color="#802008" />
    </linearGradient>

    <!-- Mekhala 3: Dark / Blue-Black (Tamas / Shiva) -->
    <linearGradient id="mekhalaDark" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#37474F" />
      <stop offset="50%" stop-color="#263238" />
      <stop offset="100%" stop-color="#182024" />
    </linearGradient>

    <!-- Sacred Fire Pit Glow (अग्नि कुण्ड गर्त) -->
    <radialGradient id="agniGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFF9C4" />
      <stop offset="25%" stop-color="#FFD54F" />
      <stop offset="55%" stop-color="#FF9800" />
      <stop offset="85%" stop-color="#E64A19" />
      <stop offset="100%" stop-color="#BF360C" />
    </radialGradient>

    <!-- Antique Bronze Contour -->
    <linearGradient id="bronzeMain" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2D1505" />
      <stop offset="50%" stop-color="#4E270A" />
      <stop offset="100%" stop-color="#1A0D03" />
    </linearGradient>

    <!-- Gold Accent -->
    <linearGradient id="goldAccent" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFE082" />
      <stop offset="50%" stop-color="#D4AF37" />
      <stop offset="100%" stop-color="#8C6500" />
    </linearGradient>

    <!-- Sacred Sandstone Background -->
    <radialGradient id="sacredBg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FBF8F1" />
      <stop offset="60%" stop-color="#F4EEE0" />
      <stop offset="90%" stop-color="#E9DFCB" />
      <stop offset="100%" stop-color="#DDCFBA" />
    </radialGradient>

    <!-- Soft Glow Filter -->
    <filter id="sacredGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3.5" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Sacred Backdrop Platform -->
  <circle cx="500" cy="500" r="490" fill="url(#sacredBg)" stroke="url(#bronzeMain)" stroke-width="3" />
  <circle cx="500" cy="500" r="482" fill="none" stroke="url(#goldAccent)" stroke-width="1.5" stroke-dasharray="5 3" opacity="0.7" />

  <!-- Directional Cardinal Marks -->
  <g font-family="'Noto Sans Devanagari', 'Mangal', serif" font-size="16" font-weight="bold" fill="#6B4B03" text-anchor="middle" dominant-baseline="central">
    <text x="500" y="32">पूर्व (East)</text>
    <text x="500" y="970">पश्चिम (West)</text>
    <text x="965" y="500">दक्षिण (South)</text>
    <text x="35" y="500">उत्तर (North)</text>
  </g>
`;
}

// 8-Petal Central Lotus Nabhi (पद्मनाभि) Helper
function renderLotusNabhi(cx = 500, cy = 500, r = 40) {
  const petals = [];
  for (let i = 0; i < 8; i++) {
    const angle = (i * 360) / 8;
    const x1 = cx + (r * 0.4) * Math.sin(toRad(angle - 22.5));
    const y1 = cy - (r * 0.4) * Math.cos(toRad(angle - 22.5));
    const x2 = cx + (r * 0.4) * Math.sin(toRad(angle + 22.5));
    const y2 = cy - (r * 0.4) * Math.cos(toRad(angle + 22.5));
    const tx = cx + r * Math.sin(toRad(angle));
    const ty = cy - r * Math.cos(toRad(angle));
    petals.push(`M ${x1.toFixed(1)} ${y1.toFixed(1)} Q ${tx.toFixed(1)} ${ty.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)} Z`);
  }

  return `
  <!-- Central Lotus Nabhi (पद्मनाभि) -->
  <g id="lotusNabhi" fill="url(#goldAccent)" stroke="url(#bronzeMain)" stroke-width="1.4">
    ${petals.map(d => `<path d="${d}" opacity="0.9" />`).join('')}
    <circle cx="${cx}" cy="${cy}" r="${(r * 0.35).toFixed(1)}" fill="#FFE082" stroke="url(#bronzeMain)" stroke-width="1.2" />
    <circle cx="${cx}" cy="${cy}" r="3.5" fill="#8C6500" />
  </g>`;
}

// 1. CHATURASRA KUNDA (Square / 1:1) - सर्वसिद्धि
function generateChaturasraSvg() {
  return `${getKundaSvgHeader('Chaturasra Yagya Kunda', 'समचतुरस्र कुण्ड')}
  <!-- 1. Outer Platform (वेदी प्राकार) -->
  <rect x="150" y="150" width="700" height="700" rx="8" fill="url(#brickOuter)" stroke="url(#bronzeMain)" stroke-width="3" />
  <rect x="160" y="160" width="680" height="680" rx="6" fill="none" stroke="url(#goldAccent)" stroke-width="1.2" stroke-dasharray="6 3" />

  <!-- 2. Mekhala 1 (Upper Terrace - White / Sattva / Brahma) -->
  <rect x="200" y="200" width="600" height="600" fill="url(#mekhalaWhite)" stroke="url(#bronzeMain)" stroke-width="2.6" />
  <rect x="210" y="210" width="580" height="580" fill="none" stroke="#C5A059" stroke-width="1" stroke-dasharray="4 2" />

  <!-- 3. Mekhala 2 (Middle Terrace - Red / Rajas / Vishnu) -->
  <rect x="260" y="260" width="480" height="480" fill="url(#mekhalaRed)" stroke="url(#bronzeMain)" stroke-width="2.4" />
  <rect x="270" y="270" width="460" height="460" fill="none" stroke="#FFE082" stroke-width="1" opacity="0.6" />

  <!-- 4. Mekhala 3 (Lower Terrace - Black/Navy / Tamas / Shiva) -->
  <rect x="320" y="320" width="360" height="360" fill="url(#mekhalaDark)" stroke="url(#bronzeMain)" stroke-width="2.2" />

  <!-- 5. Kantha & Kunda Pit (कुण्ड गर्त / हव्यवाहन अग्नि) -->
  <rect x="370" y="370" width="260" height="260" fill="url(#agniGlow)" stroke="url(#bronzeMain)" stroke-width="3" />
  <rect x="385" y="385" width="230" height="230" fill="none" stroke="#BF360C" stroke-width="1.5" stroke-dasharray="4 3" />

  <!-- Sacred Western Yoni Spout (योनि / जलनिर्गम प्रणाली) -->
  <!-- Peepal Leaf / Spout projecting towards West (bottom) -->
  <g id="yoniSpout" transform="translate(500, 850)">
    <path d="M -30 -150 C -45 -120, -50 -50, 0 0 C 50 -50, 45 -120, 30 -150 Z" fill="url(#mekhalaWhite)" stroke="url(#bronzeMain)" stroke-width="2.2" />
    <path d="M -15 -140 C -25 -110, -25 -60, 0 -20 C 25 -60, 25 -110, 15 -140 Z" fill="url(#mekhalaRed)" stroke="url(#bronzeMain)" stroke-width="1.4" />
    <circle cx="0" cy="-25" r="5" fill="#BF360C" />
  </g>

  <!-- Central Lotus Nabhi -->
  ${renderLotusNabhi(500, 500, 55)}

  <!-- Labels -->
  <text x="500" y="115" font-family="'Noto Sans Devanagari', 'Mangal', serif" font-size="22" font-weight="bold" fill="url(#bronzeMain)" text-anchor="middle">चतुरस्र कुण्ड (समचतुर्भुज)</text>
  <text x="500" y="140" font-family="'Noto Sans Devanagari', 'Mangal', serif" font-size="14" fill="#6B4B03" text-anchor="middle">दिशा: पूर्व/मध्य • देवता: ब्रह्मा • फल: सर्वसिद्धि व शान्ति</text>
</svg>`;
}

// 2. YONI KUNDA (Leaf / Pubic Crescent) - सन्तान एवं कुलवृद्धि
function generateYoniSvg() {
  return `${getKundaSvgHeader('Yoni Yagya Kunda', 'योनि कुण्ड (अश्वत्थ पत्र)')}
  <!-- 1. Outer Platform -->
  <rect x="150" y="150" width="700" height="700" rx="8" fill="url(#brickOuter)" stroke="url(#bronzeMain)" stroke-width="3" />

  <!-- 2. Mekhala 1 (White / Peepal Leaf Contours) -->
  <!-- Base arch at top, pointed leaf apex pointing towards East (top) or South -->
  <path d="M 500 190 C 720 280, 820 540, 680 760 C 590 850, 410 850, 320 760 C 180 540, 280 280, 500 190 Z" fill="url(#mekhalaWhite)" stroke="url(#bronzeMain)" stroke-width="2.6" />

  <!-- 3. Mekhala 2 (Red) -->
  <path d="M 500 250 C 670 330, 750 530, 630 700 C 560 770, 440 770, 370 700 C 250 530, 330 330, 500 250 Z" fill="url(#mekhalaRed)" stroke="url(#bronzeMain)" stroke-width="2.4" />

  <!-- 4. Mekhala 3 (Dark) -->
  <path d="M 500 310 C 620 380, 670 520, 580 640 C 530 690, 470 690, 420 640 C 330 520, 380 380, 500 310 Z" fill="url(#mekhalaDark)" stroke="url(#bronzeMain)" stroke-width="2.2" />

  <!-- 5. Pit (Garta) with Fire -->
  <path d="M 500 370 C 580 430, 610 520, 550 590 C 520 620, 480 620, 450 590 C 390 520, 420 430, 500 370 Z" fill="url(#agniGlow)" stroke="url(#bronzeMain)" stroke-width="3" />

  <!-- Western Spout -->
  <g id="yoniSpout" transform="translate(500, 860)">
    <path d="M -25 -60 C -35 -40, -35 -20, 0 0 C 35 -20, 35 -40, 25 -60 Z" fill="url(#mekhalaWhite)" stroke="url(#bronzeMain)" stroke-width="2" />
  </g>

  <!-- Central Lotus Nabhi -->
  ${renderLotusNabhi(500, 500, 45)}

  <!-- Labels -->
  <text x="500" y="115" font-family="'Noto Sans Devanagari', 'Mangal', serif" font-size="22" font-weight="bold" fill="url(#bronzeMain)" text-anchor="middle">योनि कुण्ड (अश्वत्थ पत्र स्वरूप)</text>
  <text x="500" y="140" font-family="'Noto Sans Devanagari', 'Mangal', serif" font-size="14" fill="#6B4B03" text-anchor="middle">दिशा: पूर्व/आग्नेय • देवता: भगवती जगदम्बा • फल: सन्तान एवं कुलवृद्धि</text>
</svg>`;
}

// 3. ARDHA CHANDRA KUNDA (Semi-Circle) - शान्ति एवं रोगमुक्ति
function generateArdhaChandraSvg() {
  return `${getKundaSvgHeader('Ardha Chandra Yagya Kunda', 'अर्धचन्द्र कुण्ड')}
  <!-- Outer Platform -->
  <rect x="150" y="150" width="700" height="700" rx="8" fill="url(#brickOuter)" stroke="url(#bronzeMain)" stroke-width="3" />

  <!-- 1. Mekhala 1 (White Semi-Circle) -->
  <path d="M 180 400 L 820 400 A 320 320 0 0 1 180 400 Z" fill="url(#mekhalaWhite)" stroke="url(#bronzeMain)" stroke-width="2.6" />

  <!-- 2. Mekhala 2 (Red Semi-Circle) -->
  <path d="M 230 430 L 770 430 A 270 270 0 0 1 230 430 Z" fill="url(#mekhalaRed)" stroke="url(#bronzeMain)" stroke-width="2.4" />

  <!-- 3. Mekhala 3 (Dark Semi-Circle) -->
  <path d="M 290 460 L 710 460 A 210 210 0 0 1 290 460 Z" fill="url(#mekhalaDark)" stroke="url(#bronzeMain)" stroke-width="2.2" />

  <!-- 4. Inner Pit (Garta) -->
  <path d="M 350 490 L 650 490 A 150 150 0 0 1 350 490 Z" fill="url(#agniGlow)" stroke="url(#bronzeMain)" stroke-width="3" />

  <!-- Spout -->
  <g id="yoniSpout" transform="translate(500, 395)">
    <path d="M -25 5 L 0 -50 L 25 5 Z" fill="url(#mekhalaWhite)" stroke="url(#bronzeMain)" stroke-width="2" />
  </g>

  <!-- Central Lotus Nabhi -->
  ${renderLotusNabhi(500, 550, 45)}

  <!-- Labels -->
  <text x="500" y="115" font-family="'Noto Sans Devanagari', 'Mangal', serif" font-size="22" font-weight="bold" fill="url(#bronzeMain)" text-anchor="middle">अर्धचन्द्र कुण्ड (धनुषाकार)</text>
  <text x="500" y="140" font-family="'Noto Sans Devanagari', 'Mangal', serif" font-size="14" fill="#6B4B03" text-anchor="middle">दिशा: दक्षिण • देवता: सोम/वरुण • फल: शान्ति एवं रोगमुक्ति</text>
</svg>`;
}

// 4. TRIKONA KUNDA (Triangle) - शत्रुशमन एवं विजय
function generateTrikonaSvg() {
  return `${getKundaSvgHeader('Trikona Yagya Kunda', 'त्रिकोण कुण्ड')}
  <!-- Outer Platform -->
  <rect x="150" y="150" width="700" height="700" rx="8" fill="url(#brickOuter)" stroke="url(#bronzeMain)" stroke-width="3" />

  <!-- 1. Mekhala 1 (White Triangle - Apex pointing South/down) -->
  <polygon points="500,790 200,270 800,270" fill="url(#mekhalaWhite)" stroke="url(#bronzeMain)" stroke-width="2.6" />

  <!-- 2. Mekhala 2 (Red Triangle) -->
  <polygon points="500,720 260,305 740,305" fill="url(#mekhalaRed)" stroke="url(#bronzeMain)" stroke-width="2.4" />

  <!-- 3. Mekhala 3 (Dark Triangle) -->
  <polygon points="500,650 320,345 680,345" fill="url(#mekhalaDark)" stroke="url(#bronzeMain)" stroke-width="2.2" />

  <!-- 4. Inner Pit (Garta) -->
  <polygon points="500,570 380,385 620,385" fill="url(#agniGlow)" stroke="url(#bronzeMain)" stroke-width="3" />

  <!-- Spout -->
  <g id="yoniSpout" transform="translate(500, 265)">
    <path d="M -25 5 L 0 -50 L 25 5 Z" fill="url(#mekhalaWhite)" stroke="url(#bronzeMain)" stroke-width="2" />
  </g>

  <!-- Central Lotus Nabhi -->
  ${renderLotusNabhi(500, 465, 45)}

  <!-- Labels -->
  <text x="500" y="115" font-family="'Noto Sans Devanagari', 'Mangal', serif" font-size="22" font-weight="bold" fill="url(#bronzeMain)" text-anchor="middle">त्रिकोण कुण्ड (अग्नि ज्वाला स्वरूप)</text>
  <text x="500" y="140" font-family="'Noto Sans Devanagari', 'Mangal', serif" font-size="14" fill="#6B4B03" text-anchor="middle">दिशा: नैर्ऋत्य • देवता: महाकाली/नृसिंह • फल: शत्रुशमन व स्तम्भन</text>
</svg>`;
}

// 5. VRITTA KUNDA (Circle) - पापनाशन व जनशान्ति
function generateVrittaSvg() {
  return `${getKundaSvgHeader('Vritta Yagya Kunda', 'वृत्त कुण्ड')}
  <!-- Outer Platform -->
  <rect x="150" y="150" width="700" height="700" rx="8" fill="url(#brickOuter)" stroke="url(#bronzeMain)" stroke-width="3" />

  <!-- 1. Mekhala 1 (White Circle) -->
  <circle cx="500" cy="500" r="320" fill="url(#mekhalaWhite)" stroke="url(#bronzeMain)" stroke-width="2.6" />

  <!-- 2. Mekhala 2 (Red Circle) -->
  <circle cx="500" cy="500" r="260" fill="url(#mekhalaRed)" stroke="url(#bronzeMain)" stroke-width="2.4" />

  <!-- 3. Mekhala 3 (Dark Circle) -->
  <circle cx="500" cy="500" r="200" fill="url(#mekhalaDark)" stroke="url(#bronzeMain)" stroke-width="2.2" />

  <!-- 4. Inner Pit (Garta) -->
  <circle cx="500" cy="500" r="140" fill="url(#agniGlow)" stroke="url(#bronzeMain)" stroke-width="3" />

  <!-- Western Spout -->
  <g id="yoniSpout" transform="translate(500, 820)">
    <path d="M -25 -10 L 0 50 L 25 -10 Z" fill="url(#mekhalaWhite)" stroke="url(#bronzeMain)" stroke-width="2" />
  </g>

  <!-- Central Lotus Nabhi -->
  ${renderLotusNabhi(500, 500, 55)}

  <!-- Labels -->
  <text x="500" y="115" font-family="'Noto Sans Devanagari', 'Mangal', serif" font-size="22" font-weight="bold" fill="url(#bronzeMain)" text-anchor="middle">वृत्त कुण्ड (मण्डलाकार)</text>
  <text x="500" y="140" font-family="'Noto Sans Devanagari', 'Mangal', serif" font-size="14" fill="#6B4B03" text-anchor="middle">दिशा: पश्चिम • देवता: वायु/वरुण • फल: पापनाशन व सार्वजनिक शान्ति</text>
</svg>`;
}

// 6. SHATKONA KUNDA (Hexagon) - वशीकरण एवं सम्मोहन
function generateShatkonaSvg() {
  const getHexagonPoints = (r, cx = 500, cy = 500) => {
    return Array.from({ length: 6 }).map((_, i) => {
      const angle = (i * 360) / 6;
      return `${(cx + r * Math.sin(toRad(angle))).toFixed(1)},${(cy - r * Math.cos(toRad(angle))).toFixed(1)}`;
    }).join(' ');
  };

  return `${getKundaSvgHeader('Shatkona Yagya Kunda', 'षट्कोण कुण्ड')}
  <!-- Outer Platform -->
  <rect x="150" y="150" width="700" height="700" rx="8" fill="url(#brickOuter)" stroke="url(#bronzeMain)" stroke-width="3" />

  <!-- 1. Mekhala 1 (White Hexagon) -->
  <polygon points="${getHexagonPoints(330)}" fill="url(#mekhalaWhite)" stroke="url(#bronzeMain)" stroke-width="2.6" />

  <!-- 2. Mekhala 2 (Red Hexagon) -->
  <polygon points="${getHexagonPoints(270)}" fill="url(#mekhalaRed)" stroke="url(#bronzeMain)" stroke-width="2.4" />

  <!-- 3. Mekhala 3 (Dark Hexagon) -->
  <polygon points="${getHexagonPoints(210)}" fill="url(#mekhalaDark)" stroke="url(#bronzeMain)" stroke-width="2.2" />

  <!-- 4. Inner Pit (Garta) -->
  <polygon points="${getHexagonPoints(150)}" fill="url(#agniGlow)" stroke="url(#bronzeMain)" stroke-width="3" />

  <!-- Western Spout -->
  <g id="yoniSpout" transform="translate(500, 830)">
    <path d="M -25 -10 L 0 50 L 25 -10 Z" fill="url(#mekhalaWhite)" stroke="url(#bronzeMain)" stroke-width="2" />
  </g>

  <!-- Central Lotus Nabhi -->
  ${renderLotusNabhi(500, 500, 55)}

  <!-- Labels -->
  <text x="500" y="115" font-family="'Noto Sans Devanagari', 'Mangal', serif" font-size="22" font-weight="bold" fill="url(#bronzeMain)" text-anchor="middle">षट्कोण कुण्ड (षटार चक्र)</text>
  <text x="500" y="140" font-family="'Noto Sans Devanagari', 'Mangal', serif" font-size="14" fill="#6B4B03" text-anchor="middle">दिशा: वायव्य • देवता: कार्तिकेय/सुदर्शन • फल: वशीकरण व आकर्षण</text>
</svg>`;
}

// 7. ASHTAKONA KUNDA (Octagon) - आरोग्य एवं दीर्घायु
function generateAshtakonaSvg() {
  const getOctagonPoints = (r, cx = 500, cy = 500) => {
    return Array.from({ length: 8 }).map((_, i) => {
      const angle = (i * 360) / 8 + 22.5;
      return `${(cx + r * Math.sin(toRad(angle))).toFixed(1)},${(cy - r * Math.cos(toRad(angle))).toFixed(1)}`;
    }).join(' ');
  };

  return `${getKundaSvgHeader('Ashtakona Yagya Kunda', 'अष्टकोण कुण्ड')}
  <!-- Outer Platform -->
  <rect x="150" y="150" width="700" height="700" rx="8" fill="url(#brickOuter)" stroke="url(#bronzeMain)" stroke-width="3" />

  <!-- 1. Mekhala 1 (White Octagon) -->
  <polygon points="${getOctagonPoints(330)}" fill="url(#mekhalaWhite)" stroke="url(#bronzeMain)" stroke-width="2.6" />

  <!-- 2. Mekhala 2 (Red Octagon) -->
  <polygon points="${getOctagonPoints(270)}" fill="url(#mekhalaRed)" stroke="url(#bronzeMain)" stroke-width="2.4" />

  <!-- 3. Mekhala 3 (Dark Octagon) -->
  <polygon points="${getOctagonPoints(210)}" fill="url(#mekhalaDark)" stroke="url(#bronzeMain)" stroke-width="2.2" />

  <!-- 4. Inner Pit (Garta) -->
  <polygon points="${getOctagonPoints(150)}" fill="url(#agniGlow)" stroke="url(#bronzeMain)" stroke-width="3" />

  <!-- Western Spout -->
  <g id="yoniSpout" transform="translate(500, 830)">
    <path d="M -25 -10 L 0 50 L 25 -10 Z" fill="url(#mekhalaWhite)" stroke="url(#bronzeMain)" stroke-width="2" />
  </g>

  <!-- Central Lotus Nabhi -->
  ${renderLotusNabhi(500, 500, 55)}

  <!-- Labels -->
  <text x="500" y="115" font-family="'Noto Sans Devanagari', 'Mangal', serif" font-size="22" font-weight="bold" fill="url(#bronzeMain)" text-anchor="middle">अष्टकोण कुण्ड (अष्टभुज)</text>
  <text x="500" y="140" font-family="'Noto Sans Devanagari', 'Mangal', serif" font-size="14" fill="#6B4B03" text-anchor="middle">दिशा: उत्तर • देवता: धन्वन्तरि/महामृत्युंजय • फल: आरोग्य एवं दीर्घायु</text>
</svg>`;
}

// 8. PADMA KUNDA (Lotus / 8-Petal) - महालक्ष्मी एवं ऐश्वर्य
function generatePadmaSvg() {
  const getLotusOuterPath = (n = 8, rInner = 260, rOuter = 340, cx = 500, cy = 500) => {
    const step = 360 / n;
    let d = '';
    for (let i = 0; i < n; i++) {
      const mid = i * step;
      const start = mid - step / 2;
      const end = mid + step / 2;
      const x1 = cx + rInner * Math.sin(toRad(start));
      const y1 = cy - rInner * Math.cos(toRad(start));
      const x2 = cx + rInner * Math.sin(toRad(end));
      const y2 = cy - rInner * Math.cos(toRad(end));
      const tx = cx + rOuter * Math.sin(toRad(mid));
      const ty = cy - rOuter * Math.cos(toRad(mid));
      if (i === 0) d += `M ${x1.toFixed(1)} ${y1.toFixed(1)} `;
      d += `Q ${tx.toFixed(1)} ${ty.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)} `;
    }
    return d + 'Z';
  };

  return `${getKundaSvgHeader('Padma Yagya Kunda', 'पद्म कुण्ड (अष्टदल)')}
  <!-- Outer Platform -->
  <rect x="150" y="150" width="700" height="700" rx="8" fill="url(#brickOuter)" stroke="url(#bronzeMain)" stroke-width="3" />

  <!-- 1. Mekhala 1 (White Lotus Petals) -->
  <path d="${getLotusOuterPath(8, 270, 340)}" fill="url(#mekhalaWhite)" stroke="url(#bronzeMain)" stroke-width="2.6" />

  <!-- 2. Mekhala 2 (Red Lotus Petals) -->
  <path d="${getLotusOuterPath(8, 210, 270)}" fill="url(#mekhalaRed)" stroke="url(#bronzeMain)" stroke-width="2.4" />

  <!-- 3. Mekhala 3 (Dark Lotus Petals) -->
  <path d="${getLotusOuterPath(8, 155, 210)}" fill="url(#mekhalaDark)" stroke="url(#bronzeMain)" stroke-width="2.2" />

  <!-- 4. Inner Circular Karnika Pit (Garta) -->
  <circle cx="500" cy="500" r="145" fill="url(#agniGlow)" stroke="url(#bronzeMain)" stroke-width="3" />

  <!-- Western Spout -->
  <g id="yoniSpout" transform="translate(500, 840)">
    <path d="M -25 -10 L 0 50 L 25 -10 Z" fill="url(#mekhalaWhite)" stroke="url(#bronzeMain)" stroke-width="2" />
  </g>

  <!-- Central Lotus Nabhi -->
  ${renderLotusNabhi(500, 500, 55)}

  <!-- Labels -->
  <text x="500" y="115" font-family="'Noto Sans Devanagari', 'Mangal', serif" font-size="22" font-weight="bold" fill="url(#bronzeMain)" text-anchor="middle">पद्म कुण्ड (अष्टदल कमल स्वरूप)</text>
  <text x="500" y="140" font-family="'Noto Sans Devanagari', 'Mangal', serif" font-size="14" fill="#6B4B03" text-anchor="middle">दिशा: ईशान • देवता: महालक्ष्मी/श्रीविद्या • फल: अतुल्य धन-धान्य व ऐश्वर्य</text>
</svg>`;
}

// 9. PANCHAKONA KUNDA (Pentagon) - भूतबाधा निवारण
function generatePanchakonaSvg() {
  const getPentagonPoints = (r, cx = 500, cy = 500) => {
    return Array.from({ length: 5 }).map((_, i) => {
      const angle = (i * 360) / 5;
      return `${(cx + r * Math.sin(toRad(angle))).toFixed(1)},${(cy - r * Math.cos(toRad(angle))).toFixed(1)}`;
    }).join(' ');
  };

  return `${getKundaSvgHeader('Panchakona Yagya Kunda', 'पञ्चकोण कुण्ड')}
  <!-- Outer Platform -->
  <rect x="150" y="150" width="700" height="700" rx="8" fill="url(#brickOuter)" stroke="url(#bronzeMain)" stroke-width="3" />

  <!-- 1. Mekhala 1 (White Pentagon) -->
  <polygon points="${getPentagonPoints(330)}" fill="url(#mekhalaWhite)" stroke="url(#bronzeMain)" stroke-width="2.6" />

  <!-- 2. Mekhala 2 (Red Pentagon) -->
  <polygon points="${getPentagonPoints(270)}" fill="url(#mekhalaRed)" stroke="url(#bronzeMain)" stroke-width="2.4" />

  <!-- 3. Mekhala 3 (Dark Pentagon) -->
  <polygon points="${getPentagonPoints(210)}" fill="url(#mekhalaDark)" stroke="url(#bronzeMain)" stroke-width="2.2" />

  <!-- 4. Inner Pit (Garta) -->
  <polygon points="${getPentagonPoints(150)}" fill="url(#agniGlow)" stroke="url(#bronzeMain)" stroke-width="3" />

  <!-- Western Spout -->
  <g id="yoniSpout" transform="translate(500, 830)">
    <path d="M -25 -10 L 0 50 L 25 -10 Z" fill="url(#mekhalaWhite)" stroke="url(#bronzeMain)" stroke-width="2" />
  </g>

  <!-- Central Lotus Nabhi -->
  ${renderLotusNabhi(500, 500, 55)}

  <!-- Labels -->
  <text x="500" y="115" font-family="'Noto Sans Devanagari', 'Mangal', serif" font-size="22" font-weight="bold" fill="url(#bronzeMain)" text-anchor="middle">पञ्चकोण कुण्ड (पञ्चभुज)</text>
  <text x="500" y="140" font-family="'Noto Sans Devanagari', 'Mangal', serif" font-size="14" fill="#6B4B03" text-anchor="middle">दिशा: आग्नेय • देवता: भैरव/क्षेत्रपाल • फल: भूतबाधा निवारण व शुद्धि</text>
</svg>`;
}

// 10. MAHA KUNDA (Grand Multi-Tier Altar) - विश्वकल्याण व महामख
function generateMahaKundaSvg() {
  return `${getKundaSvgHeader('Maha Yagya Kunda', 'महाकुण्ड (षोडशहस्त/अतिरुद्र वेदी)')}
  <!-- 1. Grand Step Altar (Tier 1 - Ground Platform) -->
  <rect x="100" y="100" width="800" height="800" rx="12" fill="url(#brickOuter)" stroke="url(#bronzeMain)" stroke-width="3.5" />
  <rect x="115" y="115" width="770" height="770" rx="10" fill="none" stroke="url(#goldAccent)" stroke-width="1.6" stroke-dasharray="8 4" />

  <!-- 4 Portals / Gate projections on Cardinals -->
  <!-- North -->
  <rect x="420" y="70" width="160" height="40" fill="url(#mekhalaWhite)" stroke="url(#bronzeMain)" stroke-width="2" />
  <!-- South -->
  <rect x="420" y="890" width="160" height="40" fill="url(#mekhalaWhite)" stroke="url(#bronzeMain)" stroke-width="2" />
  <!-- East -->
  <rect x="70" y="420" width="40" height="160" fill="url(#mekhalaWhite)" stroke="url(#bronzeMain)" stroke-width="2" />
  <!-- West -->
  <rect x="890" y="420" width="40" height="160" fill="url(#mekhalaWhite)" stroke="url(#bronzeMain)" stroke-width="2" />

  <!-- 2. Mekhala 1 (White Grand Step) -->
  <rect x="180" y="180" width="640" height="640" fill="url(#mekhalaWhite)" stroke="url(#bronzeMain)" stroke-width="2.8" />

  <!-- 3. Mekhala 2 (Red Step) -->
  <rect x="250" y="250" width="500" height="500" fill="url(#mekhalaRed)" stroke="url(#bronzeMain)" stroke-width="2.6" />

  <!-- 4. Mekhala 3 (Dark Step) -->
  <rect x="320" y="320" width="360" height="360" fill="url(#mekhalaDark)" stroke="url(#bronzeMain)" stroke-width="2.4" />

  <!-- 5. Inner Grand Fire Pit (महागर्त) -->
  <rect x="380" y="380" width="240" height="240" fill="url(#agniGlow)" stroke="url(#bronzeMain)" stroke-width="3.5" />

  <!-- Dual Western Spout System -->
  <g id="yoniSpout" transform="translate(500, 890)">
    <path d="M -35 -70 C -50 -40, -50 -10, 0 20 C 50 -10, 50 -40, 35 -70 Z" fill="url(#mekhalaWhite)" stroke="url(#bronzeMain)" stroke-width="2.2" />
  </g>

  <!-- Central Lotus Nabhi -->
  ${renderLotusNabhi(500, 500, 65)}

  <!-- Labels -->
  <text x="500" y="55" font-family="'Noto Sans Devanagari', 'Mangal', serif" font-size="22" font-weight="bold" fill="url(#bronzeMain)" text-anchor="middle">महाकुण्ड (लक्षचण्डी / अतिरुद्र महावेदी)</text>
  <text x="500" y="80" font-family="'Noto Sans Devanagari', 'Mangal', serif" font-size="14" fill="#6B4B03" text-anchor="middle">स्थान: महामण्डप मध्य • देवता: साक्षात् वैश्वानर • फल: विश्वशान्ति व मोक्ष</text>
</svg>`;
}

// All 10 Kundas List
const kundas = [
  { id: 'chaturasra_kunda', fn: generateChaturasraSvg, aliases: ['chaturasra', 'square_kunda'] },
  { id: 'yoni_kunda', fn: generateYoniSvg, aliases: ['yoni', 'leaf_kunda'] },
  { id: 'ardha_chandra_kunda', fn: generateArdhaChandraSvg, aliases: ['ardha_chandra', 'semicircle_kunda'] },
  { id: 'trikona_kunda', fn: generateTrikonaSvg, aliases: ['trikona', 'triangle_kunda'] },
  { id: 'vritta_kunda', fn: generateVrittaSvg, aliases: ['vritta', 'circle_kunda'] },
  { id: 'shatkona_kunda', fn: generateShatkonaSvg, aliases: ['shatkona', 'hexagonal_kunda'] },
  { id: 'ashtakona_kunda', fn: generateAshtakonaSvg, aliases: ['ashtakona', 'octagonal_kunda'] },
  { id: 'padma_kunda', fn: generatePadmaSvg, aliases: ['padma', 'lotus_kunda'] },
  { id: 'panchakona_kunda', fn: generatePanchakonaSvg, aliases: ['panchakona', 'pentagonal_kunda'] },
  { id: 'maha_kunda', fn: generateMahaKundaSvg, aliases: ['maha', 'grand_kunda'] }
];

console.log('--- Generating Canonical 10 Sacred Yagya Kunda SVGs ---');

kundas.forEach(k => {
  const content = k.fn();

  // 1. Write to public/kundas/
  const p1 = path.join(publicKundasDir, `${k.id}.svg`);
  fs.writeFileSync(p1, content, 'utf8');
  console.log(`[Generated] ${p1}`);

  // 2. Write to public/yantras/kundas/
  const p2 = path.join(yantrasKundasDir, `${k.id}.svg`);
  fs.writeFileSync(p2, content, 'utf8');
  console.log(`[Generated] ${p2}`);

  // Aliases
  k.aliases.forEach(alias => {
    fs.writeFileSync(path.join(publicKundasDir, `${alias}.svg`), content, 'utf8');
    fs.writeFileSync(path.join(yantrasKundasDir, `${alias}.svg`), content, 'utf8');
  });
});

console.log('✓ All 10 Yagya Kunda SVGs successfully generated and verified.');
