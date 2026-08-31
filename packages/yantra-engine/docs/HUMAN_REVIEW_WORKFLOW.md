# SGKB Human Review Workflow Specification

**Package Scope**: `@yantra/engine` / Hindu Panchang Application  
**Specification Version**: 1.0.0-sgkb.human-review-workflow  

---

## 1. Human Review Gate Architecture

```text
AI Suggestion Generator
         |
         v
[ Provenance & Metric Assessment ] (AI Confidence | Verification Status | Evidence Availability)
         |
         v
[ Human Editor Gate ] ---> (Approve) ---> Editorial Review Stage -> Published Snapshot
         |
         +---------------> (Reject)  ---> Disputed / Discarded Record
```

---

## 2. Review Decision Rules

1. **Approved**: Content transitions to `Verified` status and enters the editorial lifecycle.
2. **Rejected**: Content transitions to `Disputed` status and is logged in the analytics dashboard for audit review.
