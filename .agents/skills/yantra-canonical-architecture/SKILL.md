---
name: yantra-canonical-architecture
description: Comprehensive architectural blueprint, canonical geometry guidelines, SVG design system tokens, and strict 6-phase protocol for researching, creating, validating, and integrating authentic Vedic Yantras into the Hindu Yantra application.
---

# Yantra Canonical Architecture & Integration Protocol

This skill serves as the authoritative, institutional guide for researching, architecting, geometrically calculating, rendering, and integrating authentic **Vedic Yantras** into the **Hindu Yantra App (Yantra Darshan)**.

---

## 1. System Topology & Directory Structure

All application code and assets reside within `hindu-yantra-app/`:

```
hindu-yantra-app/
├── public/
│   └── yantras/                         # Canonical 1000x1000 SVGs & Visual Assets
│       ├── sri_yantra.svg               # Supreme Sri Yantra (43 Triangles, 24 Petals, 3 Bhupuras)
│       ├── kuber_yantra.svg             # Yaksharaja Kuber Yantra (3x3 Magic Square / Ashtadala)
│       ├── mahalakshmi_yantra.svg       # Mahalakshmi Yantra (Ashtalakshmi, Shatkona, Padma)
│       ├── ganesh_yantra.svg            # Vighnaharta Ganesh Yantra (Chatushkona, Ashtadala, Trikona)
│       ├── mahamrityunjaya_yantra.svg   # Shiva Mahamrityunjaya Yantra (8 Petals, Shatkona, Amrita Bindu)
│       ├── durga_yantra.svg             # Mahishasuramardini Durga Yantra (Navadurgas, 9 Triangles)
│       └── vastu_yantra.svg             # Vastu Dosha Nivarana Yantra (Purusha Mandala, 8 Digpalas)
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                   # Site shell & metadata ("Yantra Darshan")
│   │   ├── globals.css                  # Vedic design tokens (Dark Bronze #1A0E05, Parchment #FAF6EE)
│   │   ├── page.tsx                     # Home Portal: "वैदिक यन्त्र दर्शन"
│   │   ├── yantras/
│   │   │   └── page.tsx                 # Main Yantra Darshan Studio & Altar Stage
│   │   └── puja/
│   │       └── page.tsx                 # Virtual Upasana & Puja Vidhi Altar
│   │
│   ├── components/
│   │   ├── Navbar.tsx                   # Navigation Header (Yantra Darshan, Upasana & Puja)
│   │   └── yantras/                     # Modular Yantra Studio Components
│   │       ├── YantraAltarStage.tsx     # Altar Canvas Stage (Zoom, Pan, Full Altar Mode)
│   │       ├── YantraLibrarySidebar.tsx # Collapsible 25+ Yantra Registry Drawer
│   │       ├── ShastricInspectorHUD.tsx # Right Panel: Avarana details, Deities, Yoginis, Mudras
│   │       └── YantraKnowledgeTabs.tsx  # 4 Deep Tabs: Geometry, Shastra, Jyotish, Upasana
│   │
│   ├── lib/
│   │   └── yantras/
│   │       ├── shastric-jyotish-database.ts    # Single Source of Truth for Shastric Knowledge
│   │       ├── canonical-svg-templates.ts      # Sacred Color Palettes & Bronze Themes
│   │       ├── sri-yantra-coordinates.ts       # Coordinate Nodes for Ray-casting & Inspection
│   │       ├── sri-yantra-vector-dissections.ts# 9 Avarana Pure Vector Geometry Dissections
│   │       └── export-bundle.ts                # SVG / PNG / CAD Export Utility
│   │
│   └── context/
│       └── LanguageContext.tsx          # Hindi / English Bilingual Context
│
├── packages/
│   └── yantra-engine/                   # Computational Geometry Platform (@yantra/engine)
│       ├── src/
│       │   ├── compiler.ts              # Mathematical Triangle Intersection Solver
│       │   ├── validator.ts             # Golden Ratio (Phi) & Geometric Accuracy Auditor
│       │   └── renderers/               # Multi-format (2D SVG, 3D WebGL Canvas)
│       └── py/                          # FastAPI CAD/CAM Math Microservice
│
└── Docs/
    └── shri vidya/                      # Classical Source Scriptures (Shri Vidyarnava Tantram PDFs)
```

---

## 2. Core Shastric Principles & Aesthetic Standards

1. **Sacred Geometry Authenticity Over Procedural AI:**
   - Never use random procedural polygons or AI-generated distorted shapes.
   - All Yantra geometry must strictly conform to classical Tantric Agamas:
     - **Shri Vidyarnava Tantram** (*श्रीविद्यार्णव तन्त्रम्*)
     - **Saundarya Lahari** (*सौन्दर्यलहरी - आदि शंकराचार्य*)
     - **Sharada Tilaka** (*शारदा तिलक*)
     - **Mantra Mahodadhi** (*मन्त्र महोदधि*)
     - **Tantraraja Tantra** (*तन्त्रराज तन्त्र*)
2. **Strict Dark Consecrated Stroke Design System:**
   - **Main Geometry Stroke:** `#1A0E05` (Deep Antique Sacred Bronze).
   - **Secondary Geometry Stroke:** `#2A1405` / `#3E1E07` (Warm Consecrated Copper).
   - **Stroke Width:** `2.6px` to `2.8px` for Bhupura, main circles, and primary polygons; `2.0px` to `2.4px` for internal sub-lines.
   - **Central Bindu:** Radius `8px` to `14px`, fill `#8C2300` / `#4D0E00` with subtle radiant aura.
   - **Typography & Sanskrit Beejaksharas:** `#0F0C08`, `#2E2218`, `#4D0E00` with font-weight `bold` or `900`.
3. **Canvas ViewBox & Origin:**
   - All Yantra SVGs must have `viewBox="0 0 1000 1000"`.
   - Sacred Center (Parama Bindu): Exact coordinates `cx="500" cy="500"`.
   - Symmetry: Absolute bilateral or radial symmetry along the vertical axis ($x = 500$).

---

## 3. Strict 6-Phase Pipeline for Adding New Yantras

Whenever adding a new Yantra (e.g. Kuber, Mahalakshmi, Ganesh, Mahamrityunjaya, Durga, Vastu, Saraswati, Hanuman, Baglamukhi):

### Phase 1: Scriptural Extraction & Geometric Formulation
1. Identify primary scripture and sloka from *Shri Vidyarnava Tantram* or *Mantra Mahodadhi*.
2. Formulate geometric hierarchy from exterior to interior:
   - **Bhupura (भूपुर):** Number of concentric square borders (typically 3 lines) and 4 directional portals (Trikona or Chaturasra gates).
   - **Vritta (त्रिवलय):** Number of concentric circular boundaries.
   - **Padma (कमल दल):** Number of radial petals (e.g. 8-Ashtadala, 16-Shodashadala, 12-Dwadashadala).
   - **Antar Mandala (अन्तः मण्डल):** Central geometric matrix (Shatkona, Interlocking Triangles, 3x3 Magic Square, or Circular Yoni).
   - **Bindu (महाबिन्दु):** Central focal point of divine manifestation.

### Phase 2: Mathematical SVG Vector Construction
1. Create a pure vector SVG file in `public/yantras/${yantra_id}.svg`.
2. Structure the SVG with semantic groups (`<g>`):
   ```xml
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%">
     <defs>
       <!-- Standardized Dark Antique Bronze Gradients -->
       <linearGradient id="bronzeMain" x1="0%" y1="0%" x2="100%" y2="100%">
         <stop offset="0%" stop-color="#1A0E05" />
         <stop offset="50%" stop-color="#3E1E07" />
         <stop offset="100%" stop-color="#1A0E05" />
       </linearGradient>
     </defs>

     <!-- 1. Bhupura (Earth Enclosure) -->
     <g id="bhupura" stroke="url(#bronzeMain)" stroke-width="2.8" fill="none">...</g>

     <!-- 2. Concentric Girdles (Trivalaya) -->
     <g id="concentric-circles" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none">...</g>

     <!-- 3. Lotus Petals (Padma Dalas) -->
     <g id="lotus-petals" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none">...</g>

     <!-- 4. Central Polygons / Triangles / Shatkona -->
     <g id="central-matrix" stroke="url(#bronzeMain)" stroke-width="2.6" fill="none">...</g>

     <!-- 5. Parama Bindu -->
     <circle id="parama-bindu" cx="500" cy="500" r="10" fill="#4D0E00" stroke="#1A0E05" stroke-width="2.5" />
   </svg>
   ```

### Phase 3: Avarana Hierarchy & Coordinate Formulation
1. Define each Avarana level ($1$ to $N$), from outermost Bhupura to innermost Bindu.
2. Determine radius boundaries ($r_{min}$ to $r_{max}$) as fractions of the 1000px canvas for mouse hover ray-casting:
   - Example: Bhupura ($0.400 - 0.500$), Lotus ($0.250 - 0.400$), Inner Triangles ($0.050 - 0.250$), Bindu ($0.000 - 0.050$).
3. Identify the presiding deities, Yogini class, Mudra, and Beej mantras for each layer.

### Phase 4: Database Registration in `shastric-jyotish-database.ts`
Add the complete entry adhering strictly to `YantraShastricEntry` interface:
```typescript
[yantra_id]: {
  id: 'yantra_id',
  nameSanskrit: '...',
  nameHindi: '...',
  nameEnglish: '...',
  subTitle: '...',
  presidingDeity: '...',
  tradition: '...',
  corePhilosophy: '...',
  citations: [
    {
      sourceScripture: '...',
      chapterOrVerse: '...',
      sanskritSloka: '...',
      hindiMeaning: '...',
      englishMeaning: '...'
    }
  ],
  avaranas: [
    {
      index: 1,
      nameSanskrit: '...',
      nameEnglish: '...',
      chakraTitle: '...',
      presidingDeity: '...',
      mudraShakti: '...',
      yoginiClass: '...',
      geometryType: '...',
      significance: '...'
    }
  ],
  jyotish: {
    rulingPlanet: '...',
    planetSanskrit: '...',
    friendlyRashis: [...],
    friendlyNakshatras: [...],
    doshaRemedies: [...],
    lifeAspects: [...],
    wearOrInstallDirection: '...',
    favorableDay: '...',
    auspiciousTithi: '...',
    metalPreference: '...',
    beejMantra: '...',
    gayatriMantra: '...',
    japaCount: 108,
    malaType: '...',
    dhyanaSloka: '...',
    pratishthaVidhiSummary: [...]
  },
  practicalRemedies: [...]
}
```

### Phase 5: Verification & Quality Assurance
Run the automated verification suite:
```bash
# 1. Verify TypeScript type safety
npx tsc --noEmit

# 2. Check HTTP 200 response on local dev server
curl.exe -s -o /dev/null -w "%{http_code}" "http://127.0.0.1:3001/yantras?id=${yantra_id}"
```

### Phase 6: Interactive Verification in Altar UI
- Confirm that navigating to `/yantras?id=${yantra_id}` loads the new SVG immediately without showing the awaiting placeholder.
- Test that hovering over the yantra triggers the correct Avarana highlighting and updates the right-hand Shastric Inspector HUD.
- Verify stroke crispness and contrast against the parchment background.

---

## 4. Trigonometric Formulas for Reusable Vedic Shapes

### A. Parametric Petal Generator (Lotus दल)
For $N$ petals at radius $R_{inner}$ to $R_{outer}$:
```typescript
function generatePetalPath(cx: number, cy: number, rInner: number, rOuter: number, startAngle: number, endAngle: number): string {
  const midAngle = (startAngle + endAngle) / 2;
  const radStart = (startAngle - 90) * (Math.PI / 180);
  const radMid = (midAngle - 90) * (Math.PI / 180);
  const radEnd = (endAngle - 90) * (Math.PI / 180);

  const x1 = cx + rInner * Math.cos(radStart);
  const y1 = cy + rInner * Math.sin(radStart);
  const xTip = cx + rOuter * Math.cos(radMid);
  const yTip = cy + rOuter * Math.sin(radMid);
  const x2 = cx + rInner * Math.cos(radEnd);
  const y2 = cy + rInner * Math.sin(radEnd);

  // Cubic Bezier curve for sacred curved lotus petal tip
  return `M ${x1} ${y1} Q ${cx + (rOuter * 0.85) * Math.cos(radStart)} ${cy + (rOuter * 0.85) * Math.sin(radStart)}, ${xTip} ${yTip} Q ${cx + (rOuter * 0.85) * Math.cos(radEnd)} ${cy + (rOuter * 0.85) * Math.sin(radEnd)}, ${x2} ${y2}`;
}
```

### B. Classical Shatkona (षट्कोण - Interlocking Shiva-Shakti Triangles)
For a circumscribed circle of radius $R$:
- **Shiva Triangle (Upward):** Vertices at $-90^\circ$, $30^\circ$, $150^\circ$.
- **Shakti Triangle (Downward):** Vertices at $90^\circ$, $210^\circ$, $330^\circ$.

---

## 5. Definition of Done for Any Yantra Contribution

- [ ] Scriptural reference verified in classical Tantra text.
- [ ] SVG created at `public/yantras/${id}.svg` with `viewBox="0 0 1000 1000"` and dark consecrated bronze strokes (`#1A0E05` / `#3E1E07`).
- [ ] Full profile added to `SHASTRIC_JYOTISH_DATABASE` with Sanskrit verses and translations.
- [ ] Avarana ray-casting radius thresholds configured.
- [ ] `npx tsc --noEmit` passes with 0 errors.
- [ ] Local browser render verified on `/yantras?id=${id}`.
