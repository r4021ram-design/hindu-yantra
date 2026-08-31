# SGOS Digital Yantra Museum Architecture Specification

**Package Scope**: `@yantra/engine` / Hindu Panchang Application  
**Specification Version**: 1.0.0-sgos.museum-architecture  

---

## 1. Overview & Objectives

The **Digital Yantra Museum Platform** provides an interactive, research-oriented, and educational interface for exploring canonical sacred geometry. It decouples computational geometry execution from user experience presentation, leveraging SGOS SDK facades (`SGOS`, `SGOSVerification`) and rendering entry points (`@yantra/engine/rendering`).

---

## 2. Multi-Faceted Registry Filtering Engine

The Museum Subsystem indexes Yantras by seven independent classification axes:

| Filter Axis | Search Parameters | Example Value |
| :--- | :--- | :--- |
| **Search Query** | Sanskrit name, English name, Deity name, Tags | `"shri_yantra"`, `"kuber"` |
| **Category** | Major functional classification | `Shri Chakra`, `Mahavidya`, `Planetary`, `Vastu`, `Protective` |
| **Planet (Graha)** | Navagraha astrological alignment | `Surya`, `Chandra`, `Mangal`, `Budh`, `Guru`, `Shukra`, `Shani`, `Rahu`, `Ketu` |
| **Deity** | Presiding divine aspect | `Lalita Tripurasundari`, `Vishnu`, `Shiva`, `Ganesha`, `Durga`, `Kuber` |
| **Chakra** | Kundalini energy center alignment | `Muladhara`, `Svadhisthana`, `Manipura`, `Anahata`, `Vishuddha`, `Ajna`, `Sahasrara` |
| **Purpose** | Intended spiritual application | `Wealth`, `Health`, `Wisdom`, `Protection`, `Vastu`, `Meditation` |
| **Tradition** | Sampradaya lineage variation | `Srividya`, `Kaula`, `Samaya` |

---

## 3. Integrated Subsystem View Modes

The platform UI supports four main operating modes:

```text
🏛️ Digital Museum & Viewer -> 📜 Explainability Engine -> ⚖️ Comparison Diff Mode -> 🔬 Research Mode
```

1. **Digital Museum & Viewer**: 2D vector SVG, 3D WebGL Canvas, Navavarana layer inspection, and multi-format export (SVG, STL, OBJ, DXF, PDF).
2. **Explainability Engine**: 6-tab evidence inspector detailing construction sequence, mathematical geometry proofs, Navavarana chakras, symbolism, and scriptural citations.
3. **Comparison Diff Mode**: Side-by-side comparative inspection highlighting documented differences only.
4. **Research Mode**: Read-only scientific inspector rendering raw DSL, AST symbol tables, topology graphs, solver residuals, and OSGM spatial bounds.
