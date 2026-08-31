import { CanonicalYantraEntry } from './canonical-library-dataset';

export interface LinterRuleConfig {
  requiredLanguages: string[]; // ['sa', 'iast', 'hi', 'en', 'gu']
  requireCitation: boolean;
  minEvidenceTier: 'canonical' | 'traditional' | 'research';
  requireTimeline: boolean;
  requireRelatedYantras: boolean;
  checkTerminologyConsistency: boolean;
}

export interface ContentIssue {
  yantraId: string;
  ruleId: string;
  severity: 'warning' | 'error';
  message: string;
}

export class ContentIntelligenceLinterEngine {
  private static defaultConfig: LinterRuleConfig = {
    requiredLanguages: ['sa', 'iast', 'hi', 'en', 'gu'],
    requireCitation: true,
    minEvidenceTier: 'canonical',
    requireTimeline: true,
    requireRelatedYantras: true,
    checkTerminologyConsistency: true
  };

  /**
   * Run Configurable Rules Linter across dataset
   */
  public static lintDataset(dataset: CanonicalYantraEntry[], config: LinterRuleConfig = this.defaultConfig): ContentIssue[] {
    const issues: ContentIssue[] = [];

    dataset.forEach(yantra => {
      // 1. Required Translation Check
      config.requiredLanguages.forEach(lang => {
        if (!yantra.names[lang as keyof typeof yantra.names]) {
          issues.push({
            yantraId: yantra.id,
            ruleId: 'Required Translation',
            severity: 'error',
            message: `Missing ${lang.toUpperCase()} translation for ${yantra.id}`
          });
        }
      });

      // 2. Required Citation Check
      if (config.requireCitation && (!yantra.scripturalCitation || !yantra.scripturalCitation.scripture)) {
        issues.push({
          yantraId: yantra.id,
          ruleId: 'Required Citation',
          severity: 'error',
          message: `Missing required scriptural citation for ${yantra.id}`
        });
      }

      // 3. Minimum Evidence Tier Check
      if (config.minEvidenceTier === 'canonical' && yantra.evidenceTier !== 'canonical') {
        issues.push({
          yantraId: yantra.id,
          ruleId: 'Minimum Evidence Tier',
          severity: 'warning',
          message: `Yantra ${yantra.id} has evidence tier '${yantra.evidenceTier}', expected 'canonical'`
        });
      }

      // 4. Timeline Required Check
      if (config.requireTimeline && !yantra.historicalPeriod) {
        issues.push({
          yantraId: yantra.id,
          ruleId: 'Timeline Required',
          severity: 'warning',
          message: `Missing historical timeline period for ${yantra.id}`
        });
      }

      // 5. Related Yantra Required Check
      if (config.requireRelatedYantras && (!yantra.relatedYantras || yantra.relatedYantras.length === 0)) {
        issues.push({
          yantraId: yantra.id,
          ruleId: 'Related Yantra Required',
          severity: 'warning',
          message: `Missing related Yantra cross-links for ${yantra.id}`
        });
      }
    });

    return issues;
  }
}
