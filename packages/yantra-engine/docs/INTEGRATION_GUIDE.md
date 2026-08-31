# SGOS Panchang & Kundli Integration Guide

**Package Scope**: `@yantra/engine` / `@jyotish/engine`  
**Specification Version**: 1.0.0-sgos.integration-guide  

---

## 1. Overview & Architectural Connection

This guide specifies how the Jyotish Kundli module connects to the SGOS SGKB Knowledge Layer to present traditional Yantra associations.

---

## 2. Association Principles & Non-Guaranteed Outcomes

- **Evidence-Backed Associations**: Associations map planetary afflictions or Mahadasha periods to relevant SGKB Yantras based on historical texts.
- **Mandatory Disclaimer**: All recommendations MUST include the standard disclaimer:
  > *Traditional spiritual associations for study and reflection; non-guaranteed outcomes.*

---

## 3. Kundli Component Integration API

```typescript
import KundliYantraAssociations from '@/components/kundli/KundliYantraAssociations';

// Embedded inside Kundli Remedies tab
<KundliYantraAssociations
  afflictedPlanets={['Sun', 'Rahu']}
  activeMahadasha="Rahu"
/>
```
