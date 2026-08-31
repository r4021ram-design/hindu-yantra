import { describe, it, expect } from 'vitest';
import { YantraDSLRegistry } from '../src/dsl/registry';
import { MASTER_YANTRA_DATASET } from '../src/data/yantras-dsl';
import {
  SGOSFormalGeometryProofEngine,
  SGOSTopologyProofEngine,
  SGOSCanonicalFaceMapper,
  SGOSCanonicalConformanceEngine,
  SGOSDeterministicIdentityEngine,
  CANONICAL_SRI_CHAKRA_REFERENCE_DATASET
} from '../src/verification/index';

describe('SGOS Canonical Conformance & Mathematical Proof Suite', () => {
  const shriDsl = YantraDSLRegistry.getById('sri_yantra') || MASTER_YANTRA_DATASET[0];

  it('Part 1: should generate formal geometry proof chain with parent entities and line equations', () => {
    const proof = SGOSFormalGeometryProofEngine.generateFormalProof(shriDsl);

    expect(proof.proofValidityStatus).toBe('MATHEMATICALLY_PROVED');
    expect(proof.totalVerticesProved).toBeGreaterThan(0);
    expect(proof.primaryTriangleEquations.length).toBe(9);
    expect(proof.vertexProofChains.length).toBeGreaterThan(0);

    const firstChain = proof.vertexProofChains[0];
    expect(firstChain.status).toBe('PROOF_VERIFIED');
    expect(firstChain.parentEntities.length).toBe(2);
    expect(firstChain.intersectionEquation).toContain('∩');
  });

  it('Part 2: should prove planar graph topology and Euler characteristic', () => {
    const topo = SGOSTopologyProofEngine.proveTopology(shriDsl);

    expect(topo.topologyStatus).toBe('TOPOLOGICALLY_PROVED');
    expect(topo.isPlanarGraph).toBe(true);
    expect(topo.facesCount).toBeGreaterThanOrEqual(43);
    expect(topo.eulerEquationValid).toBe(true);
    expect(topo.windingOrderEnforced).toBe('CCW');
  });

  it('Part 3: should map all 43 canonical faces across the 9 Navavaranas with Sanskrit names', () => {
    const mapping = SGOSCanonicalFaceMapper.mapFaces(shriDsl);

    expect(mapping.isCanonicalMappingVerified).toBe(true);
    expect(mapping.totalFacesMapped).toBe(43);
    expect(mapping.navavaranaDistribution[4]).toBe(14); // Chaturdasharam
    expect(mapping.navavaranaDistribution[5]).toBe(10); // Bahir Dasharam
    expect(mapping.navavaranaDistribution[6]).toBe(10); // Antar Dasharam
    expect(mapping.navavaranaDistribution[7]).toBe(8);  // Ashtaragon
    expect(mapping.navavaranaDistribution[8]).toBe(1);  // Kama-Kala Trikona
  });

  it('Part 4 & 5: should audit 100% canonical conformance against reference dataset', () => {
    const report = SGOSCanonicalConformanceEngine.auditConformance(shriDsl, CANONICAL_SRI_CHAKRA_REFERENCE_DATASET);

    expect(report.referenceDatasetVersion).toBe('1.0.0-canonical.srividya');
    expect(report.isCanonicalConformant).toBe(true);
    expect(report.conformanceScore).toBe(100);
    expect(report.passedChecks).toBe(report.totalChecks);
    expect(report.failedChecks).toBe(0);
  });

  it('Part 6: should produce deterministic identity hashes stable across multiple executions', () => {
    const hashRun1 = SGOSDeterministicIdentityEngine.generateIdentityHashes(shriDsl);
    const hashRun2 = SGOSDeterministicIdentityEngine.generateIdentityHashes(shriDsl);

    expect(hashRun1.isDeterministic).toBe(true);
    expect(hashRun1.geometryHash).toBe(hashRun2.geometryHash);
    expect(hashRun1.graphHash).toBe(hashRun2.graphHash);
    expect(hashRun1.solverHash).toBe(hashRun2.solverHash);
    expect(hashRun1.svgHash).toBe(hashRun2.svgHash);
    expect(hashRun1.sceneGraphHash).toBe(hashRun2.sceneGraphHash);
  });
});
