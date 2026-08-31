import { describe, it, expect } from 'vitest';
import { GeometryCompiler } from '../src/geometry/compiler';
import { GeometryValidator } from '../src/geometry/validator';
import { SVGRenderer } from '../src/renderers/svg-renderer';
import { YantraDSLRegistry } from '../src/dsl/registry';
import { MASTER_YANTRA_DATASET } from '../src/data/yantras-dsl';
import { GeometryValidationReportGenerator } from '../src/verification/geometry-validation-report';

describe('SGOS Canonical Shri Chakra Geometry & Remediation Audit Test Suite', () => {
  const shriDsl = YantraDSLRegistry.getById('sri_yantra') || MASTER_YANTRA_DATASET[0];

  it('should retrieve authoritative Shri Yantra DSL from YantraDSLRegistry', () => {
    expect(shriDsl).toBeDefined();
    expect(shriDsl.id).toBe('sri_yantra');
    expect(YantraDSLRegistry.getAll().length).toBeGreaterThan(10);
  });

  it('should compile Shri Chakra geometry and validate dynamic precision metrics', () => {
    const compiled = GeometryCompiler.compile(shriDsl);
    const report = GeometryValidator.validate(shriDsl, compiled);

    expect(report.isAuthentic).toBe(true);
    expect(report.score).toBeGreaterThanOrEqual(80);
    expect(report.binduCentered).toBe(true);
    expect(report.primaryTrianglesValidated).toBe(9);
    expect(report.subTrianglesValidated).toBe(43);
    expect(report.circlesValidated).toBeGreaterThanOrEqual(3);
    expect(report.petalsValidated).toBe(24); // 8 + 16
    expect(report.intersectionPrecisionError).toBe(0);
    expect(report.symmetryError).toBeLessThan(0.01);
    expect(report.binduAlignmentError).toBe(0);
  });

  it('should generate formal Markdown report from dynamic validation metrics', () => {
    const compiled = GeometryCompiler.compile(shriDsl);
    const report = GeometryValidator.validate(shriDsl, compiled);
    const mdReport = GeometryValidationReportGenerator.generateMarkdownReport(report);

    expect(mdReport).toContain('# SGOS Canonical Shri Chakra Geometry Validation Report');
    expect(mdReport).toContain('9 Primary Interlocking Triangles');
    expect(mdReport).toContain('43 Sub-Triangles across 5 Avaranas');
    expect(mdReport).toContain('8 Petals Verified');
    expect(mdReport).toContain('16 Petals Verified');
    expect(mdReport).toContain('3 Concentric Circles');
    expect(mdReport).toContain('✓ PASSED');
  });

  it('should render Mode 1: Canonical Blueprint Strategy and match snapshot', () => {
    const compiled = GeometryCompiler.compile(shriDsl);
    const svgBlueprint = SVGRenderer.renderToString(compiled, { theme: 'canonical_blueprint' });

    expect(svgBlueprint).toContain('background: #FFFFFF');
    expect(svgBlueprint).toContain('stroke="#000000"');
    expect(svgBlueprint).not.toContain('<linearGradient');
    expect(svgBlueprint).not.toContain('filter="url(#goldGlow)"');

    // Vitest regression snapshot matching
    expect(svgBlueprint).toMatchSnapshot();
  });

  it('should render Engineering Blueprint CAD Strategy and match snapshot', () => {
    const compiled = GeometryCompiler.compile(shriDsl);
    const svgEng = SVGRenderer.renderToString(compiled, { theme: 'engineering_blueprint' });

    expect(svgEng).toContain('background: #0F172A');
    expect(svgEng).toContain('stroke="#38BDF8"');
    expect(svgEng).toMatchSnapshot();
  });

  it('should render Mode 2: Decorative Themes consuming identical solved geometry', () => {
    const compiled = GeometryCompiler.compile(shriDsl);
    const svgGold = SVGRenderer.renderToString(compiled, { theme: 'gold' });
    const svgCopper = SVGRenderer.renderToString(compiled, { theme: 'copper' });

    expect(svgGold).toContain('linearGradient id="goldLinear"');
    expect(svgCopper).toContain('background: #1C0D0A');
    expect(svgGold.split('<path').length).toBe(svgCopper.split('<path').length);
  });
});
