import { describe, it, expect } from 'vitest';
import {
  ChiodoApolloniusSolver,
  ScholarlyCorpusRegistry,
  AIKnowledgeEngine,
  MASTER_YANTRA_DATASET
} from '../src';

describe('ChiodoApolloniusSolver (Alessandro Chiodo 2021)', () => {
  it('should solve exact 9 primary triangles using Apollonius CLP reduction', () => {
    const result = ChiodoApolloniusSolver.solve();

    expect(result.isConstructible).toBe(true);
    expect(result.triangles.length).toBe(9);

    // Verify 5 downward triangles (t1..t5) and 4 upward triangles (t6..t9)
    const downward = result.triangles.filter(t => t.direction === 'downward');
    const upward = result.triangles.filter(t => t.direction === 'upward');
    expect(downward.length).toBe(5);
    expect(upward.length).toBe(4);

    // Verify default parameters
    expect(result.baseParameters.P).toBe(0.324);
    expect(result.baseParameters.Q).toBe(0.517);
    expect(result.baseParameters.R).toBe(0.692);
    expect(result.baseParameters.S).toBe(0.866);

    // Verify Apollonius CLP state
    expect(result.apolloniusState.pointA.x).toBeGreaterThan(0);
    expect(result.apolloniusState.circleXi.radius).toBeGreaterThan(0);

    // Verify Concurrency Errors (Condition i, ii, iii)
    expect(result.concurrencyErrors.outerCircleDiscrepancy).toBeLessThan(1e-12);
    expect(result.concurrencyErrors.apexBaseMaxError).toBeLessThan(1e-12);
    expect(result.concurrencyErrors.tripleIntersectionMaxError).toBe(0);

    // Verify Single-Stroke Eulerian Path
    expect(result.singleStrokeEulerianPath.isValidEulerianPath).toBe(true);
    expect(result.singleStrokeEulerianPath.switchPointCount).toBe(18);
  });

  it('should support custom base parameters along diameter OT', () => {
    const customResult = ChiodoApolloniusSolver.solve({
      P: 0.332,
      Q: 0.537,
      R: 0.602,
      S: 0.835
    });

    expect(customResult.isConstructible).toBe(true);
    expect(customResult.triangles.length).toBe(9);
    expect(customResult.baseParameters.P).toBe(0.332);
    expect(customResult.baseParameters.S).toBe(0.835);
  });

  it('should query Chiodo (2021) academic citation in ScholarlyCorpusRegistry', () => {
    const srividyaCorpus = ScholarlyCorpusRegistry.getCorpus('Srividya');
    const chiodoAssertion = srividyaCorpus.find(a => a.assertionId === 'chiodo_2021_apollonius_constructibility');

    expect(chiodoAssertion).toBeDefined();
    expect(chiodoAssertion?.confidence).toBe('LEVEL_3_ACADEMIC_RESEARCH');
    expect(chiodoAssertion?.publicationDetails).toContain('Comptes Rendus. Mathématique');
    expect(chiodoAssertion?.provenance).toContain('DOI:10.5802/crmath.163');
  });

  it('should explain straightedge and compass constructibility via AIKnowledgeEngine', () => {
    const sriDsl = MASTER_YANTRA_DATASET.find(y => y.id === 'sri_yantra')!;
    const explanation = AIKnowledgeEngine.explainQuery(sriDsl, 'Can Shri Yantra be constructed with ruler and compass?');

    expect(explanation.explanationText).toContain('Alessandro Chiodo (2021)');
    expect(explanation.explanationText).toContain('Apollonius Circle-Line-Point');
    expect(explanation.mathematicalProof).toContain('4-degree-of-freedom');
    expect(explanation.scripturalCitations[0].text).toContain('Comptes Rendus. Mathématique');
  });
});
