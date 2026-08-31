# SGKB Package Validation Suite Guide

**Package Scope**: `@yantra/engine` / Hindu Panchang Application  
**Specification Version**: 1.0.0-sgkb.package-validation-suite  

---

## 1. 5-Stage Automated Validation Pipeline

Before any dataset package is approved for snapshot publishing, it MUST pass all 5 validation checks:

```text
[ Citation Check ] -> [ Translation Check ] -> [ Metadata Check ] -> [ URI Format Check ] -> [ Snapshot Conformance ]
```

1. **Citation Check**: Verifies non-empty scripture name, verse locator, Sanskrit text, and translation.
2. **Translation Check**: Validates 100% complete coverage across `sa`, `iast`, `hi`, `en`, and `gu`.
3. **Metadata Check**: Validates non-empty deity, mantra, traditional usage, evidence tier, and confidence level.
4. **URI Format Check**: Ensures unique, space-free slug identifier string.
5. **Snapshot Conformance**: Verifies layer counts and boolean geometry flags.
