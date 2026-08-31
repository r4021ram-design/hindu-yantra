import { describe, it, expect } from 'vitest';
import { SGOSGeometryCompiler } from '../src/compiler/sgos-compiler';
import { MASTER_YANTRA_DATASET } from '../src/data/yantras-dsl';

describe('SGOS Phase 1 - Geometry Compiler Subsystem', () => {

  it('should compile valid Shri Yantra DSL into a valid Intermediate Geometry Representation (IGR)', () => {
    const sriDsl = MASTER_YANTRA_DATASET.find(y => y.id === 'sri_yantra')!;
    const result = SGOSGeometryCompiler.compile(sriDsl);

    expect(result.diagnostics.isValid).toBe(true);
    expect(result.diagnostics.errors.length).toBe(0);
    expect(result.igr).not.toBeNull();

    if (result.igr) {
      expect(result.igr.schemaVersion).toBe('1.0.0');
      expect(result.igr.dslId).toBe('sri_yantra');
      expect(result.igr.symmetryGroup).toBe('C_8');
      expect(result.igr.nodes['p_bindu']).toBeDefined();
      expect(result.igr.nodes['shri_core_polygons']).toBeDefined();
      expect(result.igr.constructionGraph.isAcyclic).toBe(true);
      expect(result.igr.constructionGraph.nodes.length).toBeGreaterThanOrEqual(5);
    }
  });

  it('should NOT generate any graphics (SVG, Canvas, Mesh) in the IGR output', () => {
    const sriDsl = MASTER_YANTRA_DATASET.find(y => y.id === 'sri_yantra')!;
    const result = SGOSGeometryCompiler.compile(sriDsl);
    const jsonStr = JSON.stringify(result.igr);

    // Verify pure abstract geometry format
    expect(jsonStr).not.toContain('<svg');
    expect(jsonStr).not.toContain('<path');
    expect(jsonStr).not.toContain('solid sri_yantra');
    expect(jsonStr).not.toContain('<canvas');
  });

  it('should emit structured compiler diagnostics and statistics', () => {
    const sriDsl = MASTER_YANTRA_DATASET.find(y => y.id === 'sri_yantra')!;
    const result = SGOSGeometryCompiler.compile(sriDsl);

    const stats = result.diagnostics.statistics;
    expect(stats.totalNodes).toBeGreaterThan(0);
    expect(stats.totalLayers).toBeGreaterThanOrEqual(4);
    expect(stats.subTriangleCount).toBe(43);
    expect(stats.bhupuraGateCount).toBe(4);
    expect(result.diagnostics.layerStatistics.length).toBeGreaterThanOrEqual(4);
    expect(result.diagnostics.compilationTimeMs).toBeGreaterThanOrEqual(0);
  });

  it('should resolve Golden Ratio and Marma confluence constraints', () => {
    const sriDsl = MASTER_YANTRA_DATASET.find(y => y.id === 'sri_yantra')!;
    const result = SGOSGeometryCompiler.compile(sriDsl);

    expect(result.igr?.constraints.length).toBeGreaterThan(0);
    const phiConstraint = result.igr?.constraints.find(c => c.type === 'golden_ratio');
    expect(phiConstraint).toBeDefined();
    expect(phiConstraint?.numericValue).toBeCloseTo(1.61803398, 5);
  });

  it('should detect syntax errors on malformed DSL inputs', () => {
    const invalidDsl = {
      // missing 'id' and 'geometryRules'
      metadata: { title: 'Broken Yantra' }
    };

    const result = SGOSGeometryCompiler.compile(invalidDsl);

    expect(result.diagnostics.isValid).toBe(false);
    expect(result.diagnostics.errors.length).toBeGreaterThan(0);
    expect(result.diagnostics.errors[0].code).toBe('SGOS_E002_MISSING_ID');
    expect(result.igr).toBeNull();
  });

  it('should emit semantic warnings for out-of-bounds or non-canonical properties', () => {
    const uncanonicalDsl = {
      id: 'custom_yantra',
      geometryRules: {
        concentricCircles: [
          { id: 'c1', radiusRatio: 0.8 },
          { id: 'c2', radiusRatio: 0.3 } // Non-monotonic
        ],
        lotusRings: [
          { id: 'l1', petals: 13, radiusRatio: 0.5 } // Non-canonical 13 petals
        ]
      }
    };

    const result = SGOSGeometryCompiler.compile(uncanonicalDsl);

    expect(result.diagnostics.warnings.length).toBeGreaterThan(0);
    expect(result.diagnostics.suggestions.length).toBeGreaterThan(0);
    const warningCode = result.diagnostics.warnings[0].code;
    expect(warningCode).toBe('SGOS_W010_NON_MONOTONIC_CIRCLES');
    const suggestionCode = result.diagnostics.suggestions[0].code;
    expect(suggestionCode).toBe('SGOS_S001_NON_CANONICAL_PETALS');
  });

  it('should generate a deterministic hash for identical input DSLs', () => {
    const sriDsl = MASTER_YANTRA_DATASET.find(y => y.id === 'sri_yantra')!;
    const res1 = SGOSGeometryCompiler.compile(sriDsl);
    const res2 = SGOSGeometryCompiler.compile(sriDsl);

    expect(res1.igr?.metadata.deterministicHash).toBe(res2.igr?.metadata.deterministicHash);
    expect(res1.igr?.metadata.deterministicHash).toContain('hash_fnv1a_');
  });
});
