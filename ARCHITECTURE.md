# Hindu Yantra App (Yantra Darshan) — System Architecture Blueprint

> **Platform Version:** 2.0 (Canonical Shastric Edition)  
> **Framework:** Next.js 16 (React 19, TypeScript 5, TailwindCSS v4)  
> **Design Philosophy:** Vedic Classical Aesthetics, High-Contrast Dark Bronze Vectors (`#1A0E05`), Parchment Altar (`#FAF6EE`), Sacred Geometry Authenticity.

---

## 1. System Vision & Foundational Tenets

The **Hindu Yantra App (Yantra Darshan)** is a computational sacred geometry and Vedic Upasana platform built to preserve, visualize, audit, and elucidate classical Hindu Yantras in strict accordance with authentic Shastric Agamas.

### Core Tenets:
1. **Shastric Inviolability (शास्त्रीय प्रामाणिकता):** No procedural approximations, distorted AI imagery, or third-party watermarked assets. Geometry adheres to *Shri Vidyarnava Tantram*, *Saundarya Lahari*, *Sharada Tilaka*, and *Mantra Mahodadhi*.
2. **Deep Consecrated Visual Contrast (कांस्य व ताम्र रेखांकन):** Faint yellow lines are replaced with deep consecrated antique bronze/copper (`#1A0E05` / `#3E1E07`, stroke width 2.6–2.8px) for razor-sharp visual contemplation.
3. **Full Altar Stage Immersion (पूर्ण वेदी दर्शन):** The central Yantra altar canvas commands primary visual real estate with expandable/collapsible library sidebars and full-stage mode (`max-w-4xl`, 820px min-height).
4. **Bilingual Shastric-Jyotish Integration:** Every Yantra is accompanied by original Sanskrit slokas, Hindi translations, English meanings, Avarana deity hierarchies, and planetary astrological remedy profiles.

---

## 2. Monorepo & Directory Structure

```
hindu-yantra-app/
├── public/
│   └── yantras/                         # Canonical 1000x1000 SVGs & High-Res Assets
│       ├── sri_yantra.svg               # Shri Yantra (Supreme 43-Triangle Matrix)
│       ├── kuber_yantra.svg             # Kuber Yantra (3x3 Magic Square & Ashtadala)
│       ├── mahalakshmi_yantra.svg       # Mahalakshmi Yantra (Shatkona & Ashtalakshmi)
│       ├── ganesh_yantra.svg            # Ganesh Yantra (Chatushkona, Ashtadala, Trikona)
│       ├── mahamrityunjaya_yantra.svg   # Mahamrityunjaya Yantra (8 Petals, Shatkona, Bindu)
│       ├── durga_yantra.svg             # Durga Yantra (Navadurgas & 9 Triangles)
│       └── vastu_yantra.svg             # Vastu Dosha Nivarana Yantra (Purusha Mandala)
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                   # Site Metadata & Global Theme Shell
│   │   ├── globals.css                  # Design Tokens, Parchment & Bronze CSS Variables
│   │   ├── page.tsx                     # Home Portal ("वैदिक यन्त्र दर्शन")
│   │   ├── yantras/
│   │   │   └── page.tsx                 # Core Yantra Darshan Studio & Stage
│   │   └── puja/
│   │       └── page.tsx                 # Virtual Upasana & Puja Vidhi Altar
│   │
│   ├── components/
│   │   ├── Navbar.tsx                   # Top Navigation (Yantra Darshan, Upasana & Puja)
│   │   └── yantras/                     # Modular Stage Components
│   │       ├── YantraAltarStage.tsx     # Consecrated Canvas Stage (Zoom, Pan, Full Altar)
│   │       ├── YantraLibrarySidebar.tsx # Collapsible 25+ Yantra Registry Drawer
│   │       ├── ShastricInspectorHUD.tsx # Right Panel: 9 Avaranas, Deities, Yoginis, Mudras
│   │       └── YantraKnowledgeTabs.tsx  # 4 Knowledge Tabs: Geometry, Shastra, Jyotish, Upasana
│   │
│   ├── lib/
│   │   └── yantras/
│   │       ├── shastric-jyotish-database.ts    # Single Source of Truth for Shastric Knowledge
│   │       ├── canonical-svg-templates.ts      # Sacred Color Palettes & Bronze Themes
│   │       ├── sri-yantra-coordinates.ts       # Coordinate Nodes for Ray-casting & Inspection
│   │       ├── sri-yantra-vector-dissections.ts# 9 Avarana Pure Vector Geometry Dissections
│   │       └── export-bundle.ts                # SVG / PNG / CAD Export Engine
│   │
│   └── context/
│       └── LanguageContext.tsx          # Bilingual Hindi / English Provider
│
├── packages/
│   └── yantra-engine/                   # Computational Geometry Platform (@yantra/engine)
│       ├── src/
│       │   ├── compiler.ts              # Mathematical Triangle Intersection Solver
│       │   ├── validator.ts             # Golden Ratio (Phi) & Geometric Accuracy Auditor
│       │   └── renderers/               # Multi-format (2D SVG, 3D WebGL Canvas)
│       └── py/                          # FastAPI CAD/CAM Math Microservice
│
├── .agents/
│   └── skills/
│       └── yantra-canonical-architecture/ # Antigravity Skill for Adding New Yantras
│           └── SKILL.md
│
└── Docs/
    └── shri vidya/                      # Classical Source Scriptures (Shri Vidyarnava Tantram PDFs)
```

---

## 3. Design System & Sacred Tokens

| Token Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| `--background` | `#F7F3EB` | Global Vedic cream background |
| `--card-bg` | `#FDFBF7` | Altar stage and HUD card parchment surface |
| `--foreground` | `#0F0C08` | Deep charcoal / near-black primary text |
| `--foreground-muted`| `#2E2218` | Walnut brown secondary headers & captions |
| `--border-strong` | `#824707` | Consecrated bronze borders and active indicators |
| `--yantra-stroke-main` | `#1A0E05` | Dark sacred antique bronze main SVG geometry lines |
| `--yantra-stroke-accent` | `#3E1E07` | Warm copper inner triangle and petal strokes |
| `--bindu-fill` | `#4D0E00` | Supreme Bindu / Parama Shiva-Shakti focal dot |
| `--gold-glow` | `#C5A059` | Subtle ambient illumination aura |

---

## 4. Architectural Data Flow

```
┌──────────────────────────────────────────────────────────────┐
│             SHASTRIC_JYOTISH_DATABASE (Single Truth)          │
│   • Citations (Sanskrit Sloka, Hindi, English)               │
│   • Avarana Hierarchy (Deity, Yogini, Mudra, Beej)           │
│   • Astrological Remediation (Planet, Rashi, Direction)       │
└──────────────────────────────┬───────────────────────────────┘
                               │
                ┌──────────────┴──────────────┐
                ▼                             ▼
┌───────────────────────────────┐ ┌───────────────────────────────┐
│     CANONICAL SVG ASSETS      │ │   COORDINATE RAY-CAST ENGINE  │
│  `public/yantras/${id}.svg`   │ │  • Mouse dx, dy -> Radius Frac│
│  • ViewBox: 0 0 1000 1000     │ │  • Hovered Avarana Detection  │
│  • Dark Bronze #1A0E05        │ │  • Active Node Crosshairs     │
└───────────────┬───────────────┘ └───────────────┬───────────────┘
                │                                 │
                └──────────────┬──────────────────┘
                               ▼
┌──────────────────────────────────────────────────────────────┐
│                    YANTRA ALTAR STAGE (UI)                   │
│   • Left: Collapsible Library Bar (Hide/Show, Search)        │
│   • Center: Full Altar Canvas (Zoom, Pan, Full Altar Mode)   │
│   • Right: Shastric Inspector HUD (Avaranas, Deities, Mudras)│
│   • Bottom: 4 Deep Tabs (Geometry, Shastra, Jyotish, Upasana)│
└──────────────────────────────────────────────────────────────┘
```

---

## 5. Adding New Yantras: The 6-Phase Pipeline

To add any new Yantra (e.g., Kuber, Mahalakshmi, Ganesh, Mahamrityunjaya, Durga, Vastu):
1. **Scriptural Extraction:** Retrieve the canonical verse from *Shri Vidyarnava Tantram* or *Mantra Mahodadhi*.
2. **SVG Construction:** Write `public/yantras/${id}.svg` with:
   - `viewBox="0 0 1000 1000"`
   - Center at `(500, 500)`
   - Dark bronze strokes `#1A0E05` (width 2.8px)
3. **Avarana Radial Mapping:** Set radial fractional boundaries ($r_{min}$ to $r_{max}$) for hover detection.
4. **Database Registration:** Add complete entry in `src/lib/yantras/shastric-jyotish-database.ts`.
5. **Quality Audit:** Execute `npx tsc --noEmit` and verify HTTP 200 on `/yantras?id=${id}`.
6. **Live Altar Testing:** Verify sharp rendering and inspector sync in browser.

---

## 6. Maintenance & Verification Commands

```bash
# TypeScript strict type checking
npx tsc --noEmit

# Run unit tests across engines
npm run test

# Check local dev server health
curl.exe -s -o /dev/null -w "%{http_code}" "http://127.0.0.1:3001/yantras?id=sri_yantra"

# Production build validation
npm run build
```
