# SGOS Phase 11 - Package Manager & Registry Ecosystem Specification

**Module**: `packages/yantra-engine/src/package-manager`  
**Status**: Implemented & Verified  
**Kernel State**: 100% Frozen & Decoupled  
**Author**: SGOS Architecture Council  

---

## 1. Executive Summary

The **SGOS Package Manager & Registry Ecosystem** turns SGOS into a modular, extensible platform where Sacred Geometry knowledge packages can be independently installed, published, searched, versioned, updated, and verified without modifying the frozen computational kernel.

---

## 2. Package Manifest Specification (`manifest.json`)

Every installable SGOS package contains a `manifest.json` defining metadata, dependencies, trust levels, and digital signatures:

```json
{
  "name": "Shri Yantra Canonical Package",
  "uri": "sgos://yantra/shri",
  "version": "1.0.0",
  "geometryVersion": "1.0.0",
  "researchVersion": "2.1.0",
  "translationVersion": "1.0.0",
  "signature": "sha256_0019f5f753b809b4",
  "publisher": "SGOS Architecture Council",
  "license": "MIT / Shastric Open License",
  "dependencies": {},
  "supportedLanguages": ["sanskrit", "iast", "hindi", "english", "gujarati"],
  "tradition": "Srividya (Canonical)",
  "keywords": ["shri_yantra", "yantra", "mahavidya"],
  "deity": "Lalita Tripura Sundari",
  "geometryType": "Yantra",
  "trustLevel": "Official"
}
```

---

## 3. Trust Model & Security Engine (`SGOSTrustEngine`)

Packages are categorized into 5 security trust levels:

1. **Official**: Signed by official SGOS Architecture Council key. Fully trusted.
2. **Community**: Peer-reviewed community package with valid digital signature.
3. **Experimental**: Experimental geometry subject to API changes.
4. **Deprecated**: Outdated package flagged for deprecation.
5. **Unsigned**: Missing security signature. **Rejected automatically upon installation**.

---

## 4. Dependency Resolution & Cycle Detection (`SGOSDependencyResolver`)

The Dependency Resolver builds a recursive dependency DAG:

- **Topological Sorting**: Determines exact installation order for multi-package dependency chains.
- **Cycle Detection**: Identifies circular dependency graphs (`A -> B -> A`) and aborts installation safely.
- **Missing Dependency Detection**: Prevents installing incomplete package graphs.

---

## 5. Multi-Criteria Package Search Engine (`SGOSPackageSearchEngine`)

Supports multi-attribute search across package registries:

- **By Text Query**: Title, URI, or keyword matches.
- **By Sacred Metadata**: Deity, Planet, Chakra, Tradition, Geometry Type, Evidence Level, Language, or Trust Level.

Example search query:
```typescript
const matches = pm.search({ deity: 'Lalita Tripura Sundari', trustLevel: 'Official' });
```

---

## 6. Registry Abstraction (`SGOSRegistry`)

The Package Manager decouples from individual registry storage mechanisms:

- `LocalRegistry`: Local master registry seeded from embedded SGKB packages.
- `OfflineCache`: Local persistent cache for offline execution.

---

## 7. Developer CLI Guide (`SGOSCLI`)

Exposes package management commands via `SGOSCLI`:

```bash
# Install package from registry
sgos pkg install sgos://yantra/shri

# List all installed packages
sgos pkg list

# Search registry
sgos pkg search Lalita

# Verify package signature & digital integrity
sgos pkg verify sgos://yantra/shri
```
