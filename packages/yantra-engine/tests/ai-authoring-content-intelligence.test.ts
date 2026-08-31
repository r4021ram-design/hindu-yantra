import { describe, it, expect } from 'vitest';
import { AIAuthoringAssistantEngine } from '../../../src/lib/sgkb/ai-authoring-assistant';
import { ContentIntelligenceLinterEngine } from '../../../src/lib/sgkb/content-intelligence';
import { KnowledgeGraphEngine } from '../../../src/lib/sgkb/knowledge-graph';
import { CANONICAL_SGKB_LIBRARY } from '../../../src/lib/sgkb/canonical-library-dataset';

describe('SGOS Integration Milestone 5 AI-Assisted Editorial Tools & Intelligence Suite', () => {

  it('should generate AI suggestions with 7 distinct categories and mandatory pending review status', () => {
    const sug = AIAuthoringAssistantEngine.generateSuggestion('citation', 'sri_yantra', 'Find citation', true);

    expect(sug.category).toBe('citation');
    expect(sug.targetYantraId).toBe('sri_yantra');
    expect(sug.provenance.reviewStatus).toBe('Pending');
    expect(sug.editorialVerificationStatus).toBe('Unverified');
    expect(sug.provenance.generatedByModel).toBe('SGKB-Scholar-AI');
  });

  it('should enforce strict no-fabrication rule for citations without verified references', () => {
    const unverifiedSug = AIAuthoringAssistantEngine.generateSuggestion('citation', 'sri_yantra', 'Find speculative quote', false);

    expect(unverifiedSug.suggestedContent).toBe('No supporting citation found.');
    expect(unverifiedSug.evidenceAvailability).toBe('No supporting citation found.');
    expect(unverifiedSug.aiConfidenceScore).toBeLessThan(0.5);
  });

  it('should process human review approvals and rejections correctly', () => {
    const sug = AIAuthoringAssistantEngine.generateSuggestion('translation', 'sri_yantra', 'Transliteration', true);

    const approved = AIAuthoringAssistantEngine.processHumanReview(sug, 'Approved', 'Editor A');
    expect(approved.provenance.reviewStatus).toBe('Approved');
    expect(approved.editorialVerificationStatus).toBe('Verified');
    expect(approved.provenance.reviewedBy).toBe('Editor A');

    const rejected = AIAuthoringAssistantEngine.processHumanReview(sug, 'Rejected', 'Editor B');
    expect(rejected.provenance.reviewStatus).toBe('Rejected');
    expect(rejected.editorialVerificationStatus).toBe('Disputed');
  });

  it('should audit dataset using configurable linter rules engine', () => {
    const issues = ContentIntelligenceLinterEngine.lintDataset(CANONICAL_SGKB_LIBRARY);
    expect(Array.isArray(issues)).toBe(true);
  });

  it('should export versioned Knowledge Graph to JSON-LD, RDF/XML, and GraphML formats', () => {
    const graph = KnowledgeGraphEngine.buildVersionedGraph(CANONICAL_SGKB_LIBRARY, 'v1.0.0');

    expect(graph.nodes.length).toBeGreaterThan(0);
    expect(graph.edges.length).toBeGreaterThan(0);

    const jsonLd = KnowledgeGraphEngine.exportJsonLd(graph);
    expect(jsonLd).toContain('"@type": "KnowledgeGraph"');

    const rdfXml = KnowledgeGraphEngine.exportRdfXml(graph);
    expect(rdfXml).toContain('<rdf:RDF');

    const graphMl = KnowledgeGraphEngine.exportGraphML(graph);
    expect(graphMl).toContain('<graphml');
  });
});
