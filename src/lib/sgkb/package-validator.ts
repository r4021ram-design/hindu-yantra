import { CanonicalYantraEntry } from './canonical-library-dataset';

export interface ValidationReport {
  yantraId: string;
  isAllValid: boolean;
  citationValid: boolean;
  translationValid: boolean;
  metadataValid: boolean;
  uriValid: boolean;
  snapshotValid: boolean;
  errors: string[];
}

export class PackageValidatorEngine {
  /**
   * Run 5-Stage Validation on a single Yantra Entry
   */
  public static validateEntry(entry: CanonicalYantraEntry): ValidationReport {
    const errors: string[] = [];

    // Stage 1: Citation Validation
    const citationValid = !!(
      entry.scripturalCitation &&
      entry.scripturalCitation.scripture &&
      entry.scripturalCitation.verse &&
      entry.scripturalCitation.sanskritText &&
      entry.scripturalCitation.translation
    );
    if (!citationValid) errors.push(`Citation incomplete for ${entry.id}`);

    // Stage 2: Translation Validation across 5 languages
    const translationValid = !!(
      entry.names.sa &&
      entry.names.iast &&
      entry.names.hi &&
      entry.names.en &&
      entry.names.gu
    );
    if (!translationValid) errors.push(`Missing 5-language translation for ${entry.id}`);

    // Stage 3: Metadata Validation
    const metadataValid = !!(
      entry.deity &&
      entry.mantra &&
      entry.traditionalUsage &&
      entry.evidenceTier &&
      entry.confidenceLevel
    );
    if (!metadataValid) errors.push(`Metadata incomplete for ${entry.id}`);

    // Stage 4: URI & Schema Validation
    const uriValid = typeof entry.id === 'string' && entry.id.length > 0 && !entry.id.includes(' ');
    if (!uriValid) errors.push(`Invalid URI/ID format for ${entry.id}`);

    // Stage 5: Snapshot Conformance Validation
    const snapshotValid = entry.geometrySpec.layersCount > 0 && typeof entry.geometrySpec.hasNavavaranas === 'boolean';
    if (!snapshotValid) errors.push(`Snapshot geometry spec invalid for ${entry.id}`);

    const isAllValid = citationValid && translationValid && metadataValid && uriValid && snapshotValid;

    return {
      yantraId: entry.id,
      isAllValid,
      citationValid,
      translationValid,
      metadataValid,
      uriValid,
      snapshotValid,
      errors
    };
  }

  /**
   * Run Validation Suite across entire SGKB dataset
   */
  public static validateDataset(dataset: CanonicalYantraEntry[]): { totalValidated: number; passedCount: number; reports: ValidationReport[] } {
    const reports = dataset.map(entry => this.validateEntry(entry));
    const passedCount = reports.filter(r => r.isAllValid).length;

    return {
      totalValidated: dataset.length,
      passedCount,
      reports
    };
  }
}
