# SGKB Role-Based Access Control (RBAC) Permission Model

**Package Scope**: `@yantra/engine` / Hindu Panchang Application  
**Specification Version**: 1.0.0-sgkb.permission-model  

---

## 1. Role Taxonomy

| User Role | View | Draft | Translate | Review | Publish | Admin |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Viewer** | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Student** | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Researcher** | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Translator** | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **Editor** | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| **Publisher** | ✅ | ❌ | ❌ | ✅ | ✅ | ❌ |
| **Administrator** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
