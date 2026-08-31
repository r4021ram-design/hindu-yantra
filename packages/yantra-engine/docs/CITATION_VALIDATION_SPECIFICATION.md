# SGKB Citation Validation Specification

**Package Scope**: `@yantra/engine` / Hindu Panchang Application  
**Specification Version**: 1.0.0-sgkb.citation-validation  

---

## 1. Citation Provenance Requirements

Every Yantra entry in the SGKB library MUST provide verified scriptural citations from recognized root texts.

---

## 2. Citation Schema Contract

```typescript
export interface ScripturalCitation {
  scripture: string;      // e.g. "Soundarya Lahari", "Yogini Hridaya"
  verse: string;          // e.g. "Verse 11", "Chapter 34.12"
  sanskritText: string;   // Devanagari verse text
  translation: string;    // English translation
}
```

---

## 3. Validation Criteria

1. **Scripture Name**: Non-empty recognized Tantric or Puranic text name.
2. **Chapter/Verse**: Explicit chapter, verse, or taranga locator.
3. **Sanskrit Text**: Valid Devanagari script text string.
4. **Translation**: Literal English translation.
