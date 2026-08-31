import { describe, it, expect } from 'vitest';
import * as RootEngine from '../src/index';
import * as SdkEntry from '../src/sdk/index';
import * as VerificationEntry from '../src/verification/index';
import * as RenderingEntry from '../src/renderers/index';
import * as ExportEntry from '../src/export/index';
import * as CliEntry from '../src/cli/index';

describe('SGOS Public API Compatibility & Governance Invariants', () => {

  it('should export all primary public SDK facades from root index', () => {
    expect(RootEngine.SGOS).toBeDefined();
    expect(RootEngine.SGOSVerification).toBeDefined();
    expect(RootEngine.MASTER_YANTRA_DATASET).toBeDefined();
    expect(RootEngine.GOLDEN_YANTRA_DATASETS).toBeDefined();
    expect(RootEngine.SVGRenderer).toBeDefined();
    expect(RootEngine.Canvas3DRenderer).toBeDefined();
    expect(RootEngine.Mesh3DGenerator).toBeDefined();
    expect(RootEngine.ExporterEngine).toBeDefined();
    expect(RootEngine.MantraEngine).toBeDefined();
    expect(RootEngine.PlacementEngine).toBeDefined();
    expect(RootEngine.AIKnowledgeEngine).toBeDefined();
    expect(RootEngine.ModernInterpretationLibrary).toBeDefined();
    expect(RootEngine.SGOSCLI).toBeDefined();
  });

  it('should NOT re-export internal engine classes from public surface', () => {
    expect((RootEngine as any).EvidenceEngine).toBeUndefined();
    expect((RootEngine as any).TempleEngine).toBeUndefined();
    expect((RootEngine as any).IntersectionEngine).toBeUndefined();
  });

  it('should export dedicated modular entry points correctly', () => {
    // @yantra/engine/sdk
    expect(SdkEntry.SGOS).toBeDefined();
    expect(SdkEntry.SGOSSDK).toBeDefined();
    expect(SdkEntry.GOLDEN_YANTRA_DATASETS).toBeDefined();

    // @yantra/engine/verification
    expect(VerificationEntry.SGOSVerification).toBeDefined();
    expect(VerificationEntry.SGOSVerificationEngine).toBeDefined();

    // @yantra/engine/rendering
    expect(RenderingEntry.SVGRenderer).toBeDefined();
    expect(RenderingEntry.Canvas3DRenderer).toBeDefined();
    expect(RenderingEntry.Mesh3DGenerator).toBeDefined();

    // @yantra/engine/export
    expect(ExportEntry.ExporterEngine).toBeDefined();

    // @yantra/engine/cli
    expect(CliEntry.SGOSCLI).toBeDefined();
  });

  it('should maintain stable method contracts on SGOS SDK singleton', () => {
    const sgos = RootEngine.SGOS;

    expect(typeof sgos.validate).toBe('function');
    expect(typeof sgos.compile).toBe('function');
    expect(typeof sgos.solve).toBe('function');
    expect(typeof sgos.optimize).toBe('function');
    expect(typeof sgos.inspect).toBe('function');
    expect(typeof sgos.benchmark).toBe('function');
    expect(typeof sgos.runPipeline).toBe('function');

    // Test runPipeline contract
    const dsl = RootEngine.MASTER_YANTRA_DATASET[0];
    const res = sgos.runPipeline(dsl);
    expect(res.dsl).toBeDefined();
    expect(res.igr).toBeDefined();
    expect(res.graph).toBeDefined();
    expect(res.sgm).toBeDefined();
    expect(res.osgm).toBeDefined();
    expect(res.benchmark).toBeDefined();
  });

  it('should maintain stable method contracts on SGOSVerification facade', () => {
    const dsl = RootEngine.MASTER_YANTRA_DATASET[0];
    const report = RootEngine.SGOSVerification.verifyGeometry(dsl);

    expect(typeof report.isVerified).toBe('boolean');
    expect(report.totalChecksCount).toBeGreaterThan(0);
    expect(report.passedChecksCount).toBeGreaterThan(0);
    expect(report.checks.length).toBe(report.totalChecksCount);
  });
});
