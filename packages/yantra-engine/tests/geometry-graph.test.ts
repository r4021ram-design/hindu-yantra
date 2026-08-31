import { describe, it, expect } from 'vitest';
import { SGOSGeometryCompiler } from '../src/compiler/sgos-compiler';
import { SGOSGeometryGraphEngine } from '../src/graph/sgos-graph-engine';
import { MASTER_YANTRA_DATASET } from '../src/data/yantras-dsl';

describe('SGOS Phase 4 - Geometry Graph Engine Subsystem', () => {

  it('should build a fully connected topological GeometryGraph from an IGR', () => {
    const sriDsl = MASTER_YANTRA_DATASET.find(y => y.id === 'sri_yantra')!;
    const compileRes = SGOSGeometryCompiler.compile(sriDsl);
    expect(compileRes.igr).not.toBeNull();

    const graph = SGOSGeometryGraphEngine.buildGraph(compileRes.igr!);

    expect(graph.dslId).toBe('sri_yantra');
    expect(graph.isPlanar).toBe(true);
    expect(graph.metadata.nodeCount).toBeGreaterThan(40);
    expect(graph.metadata.faceCount).toBeGreaterThanOrEqual(43);
    expect(graph.metadata.regionCount).toBeGreaterThan(0);
    expect(graph.nodes['p_bindu']).toBeDefined();
  });

  it('should support querying sub-triangles, lotus petals, and layer hierarchy via Query Engine', () => {
    const sriDsl = MASTER_YANTRA_DATASET.find(y => y.id === 'sri_yantra')!;
    const compileRes = SGOSGeometryCompiler.compile(sriDsl);
    const graph = SGOSGeometryGraphEngine.buildGraph(compileRes.igr!);
    const queryEngine = SGOSGeometryGraphEngine.createQueryEngine(graph);

    const triangles = queryEngine.findAllTriangles();
    expect(triangles.length).toBe(43);

    const petals = queryEngine.findAllPetals();
    expect(petals.length).toBe(24); // 16 + 8 petals

    const regions = queryEngine.findAllRegions();
    expect(regions.length).toBeGreaterThan(0);

    const hierarchy = queryEngine.findLayerHierarchy();
    expect(hierarchy.length).toBeGreaterThanOrEqual(4);
    expect(hierarchy[0].id).toBe('bindu');

    // Test neighboring faces lookup
    const neighbors = queryEngine.findNeighboringFaces('face_sub_triangle_1');
    expect(neighbors.length).toBeGreaterThan(0);
  });

  it('should calculate structural topology differences using Graph Diff Engine', () => {
    const sriDsl = MASTER_YANTRA_DATASET.find(y => y.id === 'sri_yantra')!;
    const compileRes1 = SGOSGeometryCompiler.compile(sriDsl);
    const graphA = SGOSGeometryGraphEngine.buildGraph(compileRes1.igr!);

    // Create modified copy for graphB
    const compileRes2 = SGOSGeometryCompiler.compile({
      ...sriDsl,
      tradition: 'Srividya Samaya (Modified)'
    });
    const graphB = SGOSGeometryGraphEngine.buildGraph(compileRes2.igr!);

    const diff = SGOSGeometryGraphEngine.compareGraphs(graphA, graphB);

    expect(diff.graphAId).toBe('sri_yantra');
    expect(diff.graphBId).toBe('sri_yantra');
    expect(diff.traditionDifference?.traditionA).toBe('Srividya (Canonical)');
    expect(diff.traditionDifference?.traditionB).toBe('Srividya Samaya (Modified)');
    expect(diff.traditionDifference?.structuralDeltas.length).toBeGreaterThan(0);
  });

  it('should generate developer-oriented graph inspection reports via Graph Inspector', () => {
    const sriDsl = MASTER_YANTRA_DATASET.find(y => y.id === 'sri_yantra')!;
    const compileRes = SGOSGeometryCompiler.compile(sriDsl);
    const graph = SGOSGeometryGraphEngine.buildGraph(compileRes.igr!);

    const report = SGOSGeometryGraphEngine.inspectGraph(graph);

    expect(report.dslId).toBe('sri_yantra');
    expect(report.nodeSummary.totalNodes).toBeGreaterThan(0);
    expect(report.nodeSummary.binduCentroidCount).toBe(1);
    expect(report.faceSummary.circuitTrianglesCount).toBe(43);
    expect(report.faceSummary.lotusPetalsCount).toBe(24);
    expect(report.connectivityMatrix['p_bindu']).toBeDefined();
  });

  it('should NOT contain any rendering code (SVG, Canvas, Mesh strings) in graph output', () => {
    const sriDsl = MASTER_YANTRA_DATASET.find(y => y.id === 'sri_yantra')!;
    const compileRes = SGOSGeometryCompiler.compile(sriDsl);
    const graph = SGOSGeometryGraphEngine.buildGraph(compileRes.igr!);

    const jsonStr = JSON.stringify(graph);
    expect(jsonStr).not.toContain('<svg');
    expect(jsonStr).not.toContain('<path');
    expect(jsonStr).not.toContain('<canvas');
    expect(jsonStr).not.toContain('solid sri_yantra');
  });
});
