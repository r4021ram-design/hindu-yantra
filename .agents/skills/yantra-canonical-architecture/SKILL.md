---
name: yantra-canonical-architecture
description: Comprehensive architectural blueprint, canonical geometry guidelines, SVG design system tokens, 18-tier sacred taxonomy, and strict 6-phase protocol for researching, creating, validating, and integrating authentic Vedic Yantras into the Hindu Yantra application.
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
│       ├── 01_SriChakra/                # Supreme Sri Yantra (43 Triangles, 24 Petals, 3 Bhupuras)
│       ├── 02_Dashamahavidya/           # Kali, Tara, Shodashi, Bhuvaneshvari, Bhairavi, etc.
│       ├── 03_Ganesha/                  # Ganesha, Maha Ganapati, Heramba, Vighnaraja
│       ├── 04_Lakshmi/                  # Maha Lakshmi, Kuber, Ashta Lakshmi, Sri Sukta
│       ├── 05_Shiva/                    # Shiva, Mahamrityunjaya, Rudra, Nataraja, Bhairava
│       ├── 06_Devi/                     # Durga, Chandika, Gayatri, Annapurna, Saraswati
│       ├── 07_Vishnu/                   # Vishnu, Narayana, Sudarshana, Narasimha, Rama, Krishna
│       ├── 08_Hanuman/                  # Hanuman, Panchamukhi, Sankat Mochan
│       ├── 09_Navagraha/                # Surya, Chandra, Mangala, Budha, Guru, Shukra, Shani, Rahu, Ketu
│       ├── 10_Vastu/                    # Vastu Purusha, 64-Pada, 81-Pada, Dikpala
│       ├── 11_Protection/               # Durga Bisa, Pratyangira, Shatru-Nashaka, Sarva Raksha
│       ├── 12_Health_Ayushya/           # Arogya, Ayushya, Dhanvantari, Mrityu-Sanjivani
│       ├── 13_Marriage_Santana/         # Santana Gopala, Vivaha, Katyayani, Saubhagya
│       ├── 14_Vidya/                    # Saraswati, Medha, Hayagriva, Vagdevi
│       ├── 15_Wealth_Business/          # Vyapara Vriddhi, Dhana Yantra, Kuber Magic Square
│       ├── 16_Siddhi_Karya/             # Sarva Karya Siddhi, Sarvatobhadra
│       ├── 17_AvatarYantras/            # Dashavatara (Matsya to Kalki)
│       └── 18_MagicSquare/              # Planetary Magic Squares (3x3 to 9x9)
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
│   │       ├── yantra-taxonomy.ts              # 18-Tier Canonical Taxonomy and Filter Engine
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

## 2. The 18-Tier Sacred Yantra Taxonomy & Lineage Protocols

### Lineage Attribution Mandate:
**Never label any Yantra as a single "universal canonical design" without lineage context.** Different authentic lineages (Sampradayas) preserve distinct geometric configurations and mantra placements:
- **Kadi Mata (कादि मत)** vs **Hadi Mata (हादि मत)** vs **Kahadi Mata (काहादि मत)**.
- **Tantraraja Tantra** vs **Sharada Tilaka** vs **Mantra Mahodadhi** vs **Shri Vidyarnava Tantram**.
- Purpose tags (Protection, Shatru-Nashaka, Karya Siddhi) must **always** be cited with the source scripture and tradition, rather than presented as unqualified factual guarantees.

### The 18 Canonical Categories:

1. **`01_SriChakra` (श्रीचक्रम् यन्त्रराज):**
   - *Sri Yantra (Sri Chakra)*, *3D Maha Meru Prishta*.
2. **`02_Dashamahavidya` (दश महाविद्या):**
   - *Kali Yantra*, *Tara Yantra*, *Tripura Sundari / Shodashi Yantra*, *Bhuvaneshvari Yantra*, *Bhairavi Yantra*, *Chhinnamasta Yantra*, *Dhumavati Yantra*, *Bagalamukhi Yantra*, *Matangi Yantra*, *Kamala Yantra*.
3. **`03_Ganesha` (गणेश एवं गणपति):**
   - *Ganesha Yantra*, *Maha Ganapati Yantra*, *Ganapati Yantra*, *Heramba Ganapati*, *Vighnaraja*, *Vighnaharta*, *Siddhi Vinayaka*, *Vakratunda*, *Ekadanta*, *Ashtavinayaka*.
4. **`04_Lakshmi` (लक्ष्मी एवं धन-समृद्धि):**
   - *Shri Lakshmi*, *Maha Lakshmi*, *Lakshmi Kubera*, *Kubera*, *Ashta Lakshmi*, *Sri Sukta*, *Kamala*, *Dhanya Lakshmi*, *Dhana Lakshmi*, *Dhairya Lakshmi*, *Gaja Lakshmi*, *Santana Lakshmi*, *Vijaya Lakshmi*, *Vidya Lakshmi*, *Adi Lakshmi*.
5. **`05_Shiva` (शैव एवं मृत्युञ्जय):**
   - *Shiva Yantra*, *Mahamrityunjaya*, *Mrityunjaya*, *Maha Mrityunjaya*, *Mrityu-Sanjivani*, *Rudra*, *Sadashiva*, *Panchanana*, *Nataraja*, *Dakshinamurti*, *Ardhanarishvara*, *Bhairava*, *Kala Bhairava*, *Batuka Bhairava*, *Sharabha*.
6. **`06_Devi` (देवी एवं शक्ति):**
   - *Durga*, *Maha Durga*, *Chandika*, *Chandi*, *Devi*, *Jagadamba*, *Annapurna*, *Gayatri*, *Saraswati*, *Shitala*, *Kamakhya*, *Lalita*, *Tripura*, *Bhuvaneshvari*, *Rajarajeshvari*.
7. **`07_Protection` (रक्षा एवं कवच):**
   - *Durga Bisa*, *Raksha Yantra*, *Narasimha*, *Sudarshana Chakra*, *Hanuman*, *Panchamukhi Hanuman*, *Bhairava*, *Kala Bhairava*, *Bagalamukhi*, *Pratyangira*, *Narasimha Kavacha*, *Shatru-Nashaka*, *Sarva Raksha*.
8. **`08_Navagraha` (नवग्रह एवं ज्योतिष):**
   - Individual Grahas: *Surya (☉)*, *Chandra (☽)*, *Mangala (♂)*, *Budha (☿)*, *Guru/Brihaspati (♃)*, *Shukra (♀)*, *Shani (♄)*, *Rahu (☊)*, *Ketu (☋)*.
   - Combined: *Navagraha Yantra*, *Navagraha Shanti Yantra*, *Navagraha Mandala*.
9. **`09_Vastu` (वास्तु एवं दिक्पाल):**
   - *Vastu Purusha Yantra*, *Vastu Dosha Nivaran*, *Vastu Shanti*, *Dikpala Yantra*, *Brahma Yantra*, *Sarvatobhadra*, *64-Pada Vastu Mandala*, *81-Pada Paramasayika Mandala*, *Griha Raksha*, *Main Door Vastu*, *Bhoomi Shuddhi*.
10. **`10_Vishnu` (विष्णु एवं नारायण):**
    - *Vishnu*, *Narayana*, *Sudarshana*, *Sudarshana Chakra*, *Narasimha*, *Hayagriva*, *Rama*, *Krishna*.
11. **`11_Hanuman` (हनुमान् एवं आञ्जनेय):**
    - *Hanuman*, *Panchamukhi Hanuman*, *Mangala Hanuman*, *Veer Hanuman*, *Anjaneya*, *Sankat Mochan*.
12. **`12_Vidya` (विद्या एवं ज्ञान):**
    - *Saraswati*, *Maha Saraswati*, *Vidya Yantra*, *Gayatri*, *Medha Yantra*, *Hayagriva*, *Matangi*, *Vagdevi*.
13. **`13_Marriage_Santana` (सन्तान एवं दाम्पत्य):**
    - *Santana Gopala*, *Santana Lakshmi*, *Vivaha Yantra*, *Katyayani*, *Gauri*, *Parvati*, *Uma-Maheshvara*, *Saubhagya*, *Dampatya*, *Santana Siddhi*.
14. **`14_SpecialPurpose` (विशिष्ट कार्यसिद्धि):**
    - *Sarva Siddhi*, *Sarva Karya Siddhi*, *Arogya*, *Ayushya*, *Vyapara Vriddhi*, *Udyoga*, *Jaya*, *Vijaya*, *Akarshana*, *Shanti*, *Sarvatobhadra*.
15. **`15_AvatarYantras` (दशावतार यन्त्र):**
    - *Matsya*, *Kurma*, *Varaha*, *Narasimha*, *Vamana*, *Parashurama*, *Rama*, *Balarama*, *Krishna*, *Kalki*.
16. **`16_MagicSquare` (संख्यात्मक एवं जादुई वर्ग यन्त्र):**
    - Planetary Magic Squares: *Surya (6x6 / 111 sum)*, *Chandra (9x9 / 369 sum)*, *Mangala (5x5 / 65 sum)*, *Budha (8x8 / 260 sum)*, *Guru (4x4 / 34 sum)*, *Shukra (7x7 / 175 sum)*, *Shani (3x3 / 15 sum)*, *Rahu (4x4 / 136 sum)*, *Ketu (3x3 / 39 sum)*, *Navagraha Combined Magic Square*.

---

## 3. Strict Dark Consecrated Stroke Design System

1. **Sacred Geometry Authenticity Over Procedural AI:**
   - Never use random procedural polygons or AI-generated distorted shapes.
   - All Yantra geometry must strictly conform to classical Tantric Agamas:
     - **Shri Vidyarnava Tantram** (*श्रीविद्यार्णव तन्त्रम्*)
     - **Saundarya Lahari** (*सौन्दर्यलहरी - आदि शंकराचार्य*)
     - **Sharada Tilaka** (*शारदा तिलक*)
     - **Mantra Mahodadhi** (*मन्त्र महोदधि*)
     - **Tantraraja Tantra** (*तन्त्रराज तन्त्र*)
2. **Visual Tokens:**
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

## 4. Strict 6-Phase Pipeline for Adding New Yantras

Whenever adding a new Yantra:

### Phase 1: Scriptural Extraction & Geometric Formulation
1. Identify primary scripture and sloka from *Shri Vidyarnava Tantram* or *Mantra Mahodadhi*.
2. Classify under one of the 18 categories in `yantra-taxonomy.ts`.
3. Formulate geometric hierarchy:
   - **Bhupura (भूपुर):** Stepped square borders (typically 3 concentric lines) and 4 directional portals (Purva, Dakshina, Pashchima, Uttara).
   - **Vritta (त्रिवलय):** Concentric circular boundaries.
   - **Padma (कमल दल):** Radial petals (8-Ashtadala, 16-Shodashadala, 12-Dwadashadala).
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
Add the complete entry adhering strictly to `YantraShastricEntry` interface, referencing its taxonomy category:
```typescript
[yantra_id]: {
  id: 'yantra_id',
  taxonomyCategory: 'dashamahavidya', // Must match YANTRA_TAXONOMY_CATEGORIES key
  nameSanskrit: '...',
  nameHindi: '...',
  nameEnglish: '...',
  subTitle: '...',
  presidingDeity: '...',
  tradition: '...',
  lineageAttribution: '...', // Explicit Sampradaya / Lineage source
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

## 5. Canonical Parametric Ogee Lotus Petal Algorithm (पद्म-मुकुल गणितीय सूत्र)

To generate authentic, non-overlapping, hand-drawn quality Vedic lotus petals (as seen in classical Shilpa Shastra manuscripts and temple copperplates):

```typescript
function generateOgeePetals(n: number, rBase: number, rTip: number, cx = 500, cy = 500) {
  const step = 360 / n;
  const halfStep = step / 2;
  const toRad = (deg: number) => deg * Math.PI / 180;
  const petals = [];

  for (let i = 0; i < n; i++) {
    const midDeg = i * step; // North-centered (0, 45, 90...)
    const startDeg = midDeg - halfStep;
    const endDeg = midDeg + halfStep;

    // Valley endpoints seated on the base circle
    const v1x = cx + rBase * Math.sin(toRad(startDeg));
    const v1y = cy - rBase * Math.cos(toRad(startDeg));
    const v2x = cx + rBase * Math.sin(toRad(endDeg));
    const v2y = cy - rBase * Math.cos(toRad(endDeg));

    // Sharp lotus apex touching outer ring
    const tx = cx + rTip * Math.sin(toRad(midDeg));
    const ty = cy - rTip * Math.cos(toRad(midDeg));

    // Ogee inflection control points
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

    // Central sacred spine (axis line)
    const baseSpineX = cx + rBase * Math.sin(toRad(midDeg));
    const baseSpineY = cy - rBase * Math.cos(toRad(midDeg));
    const spineD = `M ${baseSpineX.toFixed(2)} ${baseSpineY.toFixed(2)} L ${tx.toFixed(2)} ${ty.toFixed(2)}`;

    petals.push({ i, midDeg, pathD, spineD });
  }
  return petals;
}
```

---

## 6. Definition of Done for Any Yantra Contribution

- [ ] Classified under one of the 18 canonical taxonomy categories in `yantra-taxonomy.ts`.
- [ ] Lineage-specific source scripture and verse documented.
- [ ] SVG created at `public/yantras/${id}.svg` with `viewBox="0 0 1000 1000"` and dark consecrated bronze strokes (`#1A0E05` / `#3E1E07`).
- [ ] Lotus petals conform strictly to the Ogee curvature algorithm (convex belly, concave tip sweep, central spine).
- [ ] Full profile added to `SHASTRIC_JYOTISH_DATABASE` with Sanskrit verses and translations.
- [ ] Avarana ray-casting radius thresholds configured.
- [ ] `npx tsc --noEmit` passes with 0 errors.
- [ ] Local browser render verified on `/yantras?id=${id}`.
