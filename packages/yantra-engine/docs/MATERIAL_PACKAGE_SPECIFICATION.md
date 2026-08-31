# SGOS External Material Package & PBR Specification

**Package**: `@yantra/engine/rendering`  
**Specification Version**: 1.0.0-sgos.material-package  

---

## 1. Material Package JSON Schema

Every material in SGOS is stored as an external JSON package validated against `MaterialPackageSchema` (Zod).

```json
{
  "name": "24K Temple Gold",
  "id": "gold",
  "version": "1.0.0",
  "category": "Metals",
  "description": "High-purity lustrous gold finish for divine consecration.",
  "pbr": {
    "albedo": "#FFD700",
    "roughness": 0.15,
    "metalness": 1.0,
    "transmission": 0.0,
    "ior": 1.5,
    "clearcoat": 0.4,
    "clearcoatRoughness": 0.1,
    "emissive": "#000000",
    "opacity": 1.0
  },
  "preview": {
    "accentColor": "#FFD700"
  },
  "units": "SI/Metric",
  "isCustom": false
}
```

---

## 2. Built-in Material Library

| Material ID | Category | Albedo | Roughness | Metalness | Transmission | IOR |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `copper` | Metals | `#B87333` | 0.25 | 0.95 | 0.00 | 1.50 |
| `panchadhatu` | Metals | `#D4AF37` | 0.30 | 0.90 | 0.00 | 1.60 |
| `gold` | Metals | `#FFD700` | 0.15 | 1.00 | 0.00 | 1.50 |
| `silver` | Metals | `#C0C0C0` | 0.10 | 0.98 | 0.00 | 1.50 |
| `crystal` | Crystals | `#FFFFFF` | 0.05 | 0.00 | 0.90 | 1.54 |
| `marble` | Stones | `#F5F5F0` | 0.40 | 0.00 | 0.00 | 1.50 |
| `glass` | Glasses | `#E0F2FE` | 0.02 | 0.00 | 0.95 | 1.52 |

---

## 3. Registering Custom Materials Programmatically

```typescript
import { MaterialEngine } from '@yantra/engine/rendering';

MaterialEngine.registerMaterial({
  name: 'Ruby Gemstone',
  id: 'ruby',
  version: '1.0.0',
  category: 'Crystals',
  description: 'Deep crimson sacred ruby crystal.',
  pbr: {
    albedo: '#E0115F',
    roughness: 0.08,
    metalness: 0.1,
    transmission: 0.7,
    ior: 1.76,
    clearcoat: 0.9,
    opacity: 0.95
  },
  preview: { accentColor: '#E0115F' },
  units: 'SI/Metric',
  isCustom: true
});
```
