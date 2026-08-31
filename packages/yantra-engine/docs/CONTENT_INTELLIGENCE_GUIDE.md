# SGKB Content Intelligence & Linter Rules Specification

**Package Scope**: `@yantra/engine` / Hindu Panchang Application  
**Specification Version**: 1.0.0-sgkb.content-intelligence-guide  

---

## 1. Configurable Rules Linter Engine

The **Content Intelligence Linter Engine** automatically audits dataset entries against configurable editorial quality rules before snapshot publication.

---

## 2. Linter Rule Contracts

| Rule ID | Severity | Audit Check Criteria |
| :--- | :--- | :--- |
| **Required Translation** | Error | Verifies 100% complete translation coverage across `sa`, `iast`, `hi`, `en`, and `gu`. |
| **Required Citation** | Error | Verifies presence of scripture name, verse locator, Sanskrit text, and translation. |
| **Minimum Evidence Tier** | Warning | Audits whether entry meets specified minimum tier (`canonical` 📜 / `traditional` 📿 / `research` 🔬). |
| **Timeline Required** | Warning | Audits presence of historical period text. |
| **Related Yantra Required** | Warning | Audits presence of related Yantra cross-link IDs. |
| **Terminology Consistency** | Warning | Checks compliance with Canonical Translation Memory dictionary. |
