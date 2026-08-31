import { describe, it, expect } from 'vitest';
import { MASTER_YANTRA_DATASET } from '../src/index';
import { ResearchBundleExporterEngine, ResearchBundlePayload } from '../../../src/lib/yantras/export-bundle';

describe('SGOS Integration Milestone 2 Educational & Research Suite', () => {

  it('should format Markdown research report with evidence tiers', () => {
    const payload: ResearchBundlePayload = {
      yantraId: 'sri_yantra',
      yantraName: 'Shri Yantra',
      generatedAt: '2026-07-25T00:00:00.000Z',
      geometryEngineVersion: 'v1.0.0-sgos',
      evidenceVersion: 'v1.0.0-sgkb',
      dsl: MASTER_YANTRA_DATASET[0],
      citations: [
        {
          scripture: 'Soundarya Lahari',
          chapterVerse: 'Verse 11',
          evidenceTier: 'canonical',
          confidenceLevel: 'High',
          translation: 'With 4 Shiva triangles and 5 Shakti triangles...'
        }
      ],
      auditTrail: {
        lastUpdated: '2026-07-25',
        reviewer: 'Shastric Geometry Board',
        shastricBoard: 'Srividya Academic Research Council'
      }
    };

    const report = ResearchBundleExporterEngine.generateMarkdownReport(payload);
    expect(report).toContain('# Academic Research Report: Shri Yantra');
    expect(report).toContain('Soundarya Lahari');
    expect(report).toContain('Tier: **canonical**');
    expect(report).toContain('Confidence: **High**');
  });

  it('should generate valid JSON research bundle payload', () => {
    const payload: ResearchBundlePayload = {
      yantraId: 'sri_yantra',
      yantraName: 'Shri Yantra',
      generatedAt: '2026-07-25T00:00:00.000Z',
      geometryEngineVersion: 'v1.0.0-sgos',
      evidenceVersion: 'v1.0.0-sgkb',
      dsl: MASTER_YANTRA_DATASET[0],
      citations: [],
      auditTrail: {
        lastUpdated: '2026-07-25',
        reviewer: 'Shastric Geometry Board',
        shastricBoard: 'Srividya Academic Research Council'
      }
    };

    const jsonStr = ResearchBundleExporterEngine.generateJsonBundle(payload);
    const parsed = JSON.parse(jsonStr);
    expect(parsed.yantraId).toBe('sri_yantra');
    expect(parsed.geometryEngineVersion).toBe('v1.0.0-sgos');
  });
});
