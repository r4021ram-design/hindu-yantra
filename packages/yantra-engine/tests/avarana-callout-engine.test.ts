import { describe, it, expect } from 'vitest';
import { SGOSAvaranaCalloutEngine } from '../src/modules/avarana-callout-engine';
import { SGOS } from '../src/sdk/sgos-sdk';
import { SVGRenderer } from '../src/renderers/svg-renderer';
import { GeometryCompiler } from '../src/geometry/compiler';
import { MASTER_YANTRA_DATASET } from '../src/data/yantras-dsl';

describe('SGOS 3 Advanced Rendering Modes & Avarana Callout Engine Test Suite', () => {
  it('should retrieve 5th Avarana (Sarvarthasadhaka Chakra - Ten Pranas) callouts matching Image 1', () => {
    const avarana5 = SGOSAvaranaCalloutEngine.getAvaranaGroup(5);

    expect(avarana5.avaranaIndex).toBe(5);
    expect(avarana5.avaranaNameSanskrit).toContain('सर्वार्थसाधक');
    expect(avarana5.callouts.length).toBe(10);

    // Verify Ten Pranas
    const pranas = avarana5.callouts.map(c => c.associatedPranaOrSiddhi);
    expect(pranas).toContain('Prana Vayu');
    expect(pranas).toContain('Apana Prana');
    expect(pranas).toContain('Samana Prana');
    expect(pranas).toContain('Vyana Prana');
    expect(pranas).toContain('Udana Prana');
    expect(pranas).toContain('Devadatta Prana');
    expect(pranas).toContain('Kurma Prana');
    expect(pranas).toContain('Krikala Prana');
    expect(pranas).toContain('Naga Prana');
    expect(pranas).toContain('Dhananjaya Prana');
  });

  it('should retrieve callout groups across all 9 Avaranas via public SDK facade', () => {
    for (let i = 1; i <= 9; i++) {
      const group = SGOS.getAvaranaCalloutGroup(i);
      expect(group.avaranaIndex).toBe(i);
      expect(group.callouts.length).toBeGreaterThan(0);
    }
  });

  it('should render Mode 2: Traditional Shastric Color Poster with Devanagari (Image 2 Style)', () => {
    const compiled = GeometryCompiler.compile(MASTER_YANTRA_DATASET[0]);
    const svg = SVGRenderer.renderToString(compiled, { theme: 'traditional_poster' });

    expect(svg).toContain('श्री यन्त्रम्');
    expect(svg).toContain('卐');
    expect(svg).toContain('emeraldLinear');
    expect(svg).toContain('sapphireLinear');
  });

  it('should render Mode 3: Precision Multi-Stroke CAD Vector Line Art (Image 3 Style)', () => {
    const compiled = GeometryCompiler.compile(MASTER_YANTRA_DATASET[0]);
    const svg = SVGRenderer.renderToString(compiled, { theme: 'multi_stroke_cad' });

    expect(svg).toContain('#FAFAFA');
    expect(svg).toContain('stroke-width="1.2"');
  });

  it('should render Mode 1/4: 3D/2D Exploded Avarana & Callout Pointer Lines (Image 1 Style)', () => {
    const compiled = GeometryCompiler.compile(MASTER_YANTRA_DATASET[0]);
    const svg = SVGRenderer.renderToString(compiled, { showCalloutLines: true, navavaranaFilter: 5 });

    expect(svg).toContain('SARVADUKHAVIMOCHINI');
    expect(svg).toContain('SARVASIDDHIPRADA');
    expect(svg).toContain('stroke-dasharray="4 4"');
  });
});
