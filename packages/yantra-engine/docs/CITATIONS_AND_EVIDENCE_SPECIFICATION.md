# SGOS Citations & Evidence Specification

**Package Scope**: `@yantra/engine` / Hindu Panchang Application  
**Specification Version**: 1.0.0-sgos.citations-and-evidence  

---

## 1. Overview & 3-Tier Evidence System

The **Citations & Evidence System** provides a rigorous, transparent mechanism to present ancient scriptural citations, traditional lineage manuals, and modern analytical hypotheses with confidence scores.

---

## 2. Evidence Tiers & Confidence Scoring

| Tier Badge | Classification | Description | Confidence Ratings |
| :--- | :--- | :--- | :--- |
| 📜 **Canonical** | Direct Scripture | Verses from primary recognized Tantric scriptures (*Soundarya Lahari*, *Yogini Hridaya*, *Gandharva Tantra*). | High (1.0) |
| 📿 **Traditional** | Lineage Sampradaya | Commentary manuals (*Setubandha*, *Nityotsava*) and unbroken oral lineage instructions. | Moderate (0.8) |
| 🔬 **Research** | Modern Analytical | Mathematical symmetry reconstructions, computer-aided vector analysis, and PHI golden ratio hypotheses. | Speculative (0.5) |

---

## 3. Schema Contract

```typescript
export interface CitationItem {
  id: string;
  scripture: string;
  chapterVerse: string;
  sanskrit: string;
  translation: string;
  commentary: string;
  associatedLayerId: string;
  evidenceTier: 'canonical' | 'traditional' | 'research';
  confidenceLevel: 'High' | 'Moderate' | 'Speculative';
  yantraId: string;
}
```
