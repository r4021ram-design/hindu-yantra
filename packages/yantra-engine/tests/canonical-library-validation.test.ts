import { describe, it, expect } from 'vitest';
import { CANONICAL_SGKB_LIBRARY } from '../../../src/lib/sgkb/canonical-library-dataset';
import { PackageValidatorEngine } from '../../../src/lib/sgkb/package-validator';

describe('SGOS Integration Milestone 4 Canonical SGKB Library Suite', () => {

  it('should contain full scholarly records for all 25 supported Yantras', () => {
    expect(CANONICAL_SGKB_LIBRARY.length).toBe(25);

    const expectedIds = [
      'sri_yantra', 'maha_meru', 'kuber_yantra', 'mahalakshmi_yantra', 'ganesh_yantra',
      'saraswati_yantra', 'dhanvantari_yantra', 'mahamrityunjaya_yantra', 'navagraha_yantra',
      'surya_yantra', 'chandra_yantra', 'mangal_yantra', 'budha_yantra', 'brihaspati_yantra',
      'shukra_yantra', 'shani_yantra', 'rahu_yantra', 'ketu_yantra', 'durga_yantra',
      'kali_yantra', 'bagalamukhi_yantra', 'hanuman_yantra', 'sudarshana_yantra',
      'narasimha_yantra', 'vastu_yantra'
    ];

    expectedIds.forEach(id => {
      const found = CANONICAL_SGKB_LIBRARY.find(y => y.id === id);
      expect(found, `Yantra ID ${id} missing from CANONICAL_SGKB_LIBRARY`).toBeDefined();
    });
  });

  it('should provide complete 5-language translations for every Yantra', () => {
    CANONICAL_SGKB_LIBRARY.forEach(entry => {
      expect(entry.names.sa, `Missing Sanskrit name for ${entry.id}`).toBeTruthy();
      expect(entry.names.iast, `Missing IAST name for ${entry.id}`).toBeTruthy();
      expect(entry.names.hi, `Missing Hindi name for ${entry.id}`).toBeTruthy();
      expect(entry.names.en, `Missing English name for ${entry.id}`).toBeTruthy();
      expect(entry.names.gu, `Missing Gujarati name for ${entry.id}`).toBeTruthy();
    });
  });

  it('should pass 5-stage automated package validation for 100% of Yantra records', () => {
    const suiteResult = PackageValidatorEngine.validateDataset(CANONICAL_SGKB_LIBRARY);

    expect(suiteResult.totalValidated).toBe(25);
    expect(suiteResult.passedCount).toBe(25);

    suiteResult.reports.forEach(report => {
      expect(report.isAllValid, `Validation failed for Yantra ${report.yantraId}: ${report.errors.join(', ')}`).toBe(true);
    });
  });

  it('should contain valid scriptural citations and verses for all entries', () => {
    CANONICAL_SGKB_LIBRARY.forEach(entry => {
      expect(entry.scripturalCitation.scripture).toBeTruthy();
      expect(entry.scripturalCitation.verse).toBeTruthy();
      expect(entry.scripturalCitation.sanskritText).toBeTruthy();
      expect(entry.scripturalCitation.translation).toBeTruthy();
    });
  });
});
