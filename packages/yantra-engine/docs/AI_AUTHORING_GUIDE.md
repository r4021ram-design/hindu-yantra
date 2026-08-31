# SGKB AI-Assisted Editorial Tools Guide

**Package Scope**: `@yantra/engine` / Hindu Panchang Application  
**Specification Version**: 1.0.0-sgkb.ai-authoring-guide  

---

## 1. Overview & Mandatory Human Gate

The **AI-Assisted Editorial Copilot** accelerates scholarly content drafting while guaranteeing strict editorial oversight.

```text
AI Suggestion Generator -> Provenance Metadata -> Mandatory Human Gate (Pending -> Approved/Rejected) -> Published
```

### Strict Non-Negotiable Governance Rules:
1. **AI Cannot Publish Directly**: All AI suggestions are flagged `Pending` and require explicit human editor approval.
2. **Strict No-Fabrication Rule**: If no verified citation exists, the copilot explicitly returns `"No supporting citation found."` AI NEVER fabricates verses or quotes.
3. **3-Way Metric UI Separation**:
   - `AI Generation Confidence` (0% to 100%)
   - `Editorial Verification Status` (`Unverified` | `Verified` | `Disputed`)
   - `Evidence Availability` (`Available` | `Partial` | `No supporting citation found.`)

---

## 2. 7 Suggestion Categories

- `Citation Suggestion`
- `Translation Suggestion`
- `Cross-link Suggestion`
- `Metadata Suggestion`
- `Draft Suggestion`
- `Timeline Suggestion`
- `Glossary Suggestion`
