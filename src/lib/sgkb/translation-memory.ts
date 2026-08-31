export type SupportedLanguage = 'sa' | 'iast' | 'hi' | 'en' | 'gu';

export interface CanonicalTerm {
  key: string;
  sa: string;
  iast: string;
  hi: string;
  en: string;
  gu: string;
  definition: string;
}

export class TranslationMemoryEngine {
  private static canonicalTerms: Record<string, CanonicalTerm> = {
    bindu: {
      key: 'bindu',
      sa: 'बिन्दु',
      iast: 'Bindu',
      hi: 'बिन्दु',
      en: 'Central Singularity Point',
      gu: 'બિંદુ',
      definition: 'Central non-dimensional point representing unmanifest consciousness.'
    },
    trikona: {
      key: 'trikona',
      sa: 'त्रिकोण',
      iast: 'Trikoṇa',
      hi: 'त्रिकोण',
      en: 'Triangle Element',
      gu: 'ત્રિકોણ',
      definition: 'Triangular geometric element (Shiva/Fire or Shakti/Water).'
    },
    bhupura: {
      key: 'bhupura',
      sa: 'भूपुर',
      iast: 'Bhūpura',
      hi: 'भूपुर',
      en: 'Outer Square Gate Enclosure',
      gu: 'ભૂપુર',
      definition: '3-tiered outer square boundary containing 4 cardinal gates.'
    },
    navavarana: {
      key: 'navavarana',
      sa: 'नवावरण',
      iast: 'Navāvaraṇa',
      hi: 'नवावरण',
      en: '9 Concentric Enclosures',
      gu: 'નવાવરણ',
      definition: '9 nested circuit layers forming the sacred geometry topology.'
    },
    lotus: {
      key: 'lotus',
      sa: 'पद्म / दल',
      iast: 'Padma / Dala',
      hi: 'कमल दल',
      en: 'Lotus Petals',
      gu: 'કમળ પાંદડીઓ',
      definition: 'Radial petal rings representing cosmic expansion.'
    },
    marma: {
      key: 'marma',
      sa: 'मर्म',
      iast: 'Marma',
      hi: 'मर्म बिन्दु',
      en: '3-Line Intersection Point',
      gu: 'મર્મ સ્થાનો',
      definition: 'Critical geometric intersection where 3 lines intersect.'
    },
    sandhi: {
      key: 'sandhi',
      sa: 'सन्धि',
      iast: 'Sandhi',
      hi: 'सन्धि',
      en: '2-Line Intersection Point',
      gu: 'સંધિ',
      definition: 'Intersection point where 2 lines cross.'
    }
  };

  /**
   * Get all canonical terms
   */
  public static getCanonicalDictionary(): Record<string, CanonicalTerm> {
    return this.canonicalTerms;
  }

  /**
   * Validate if text complies with canonical terminology for a target language
   */
  public static validateTranslationConsistency(termKey: string, lang: SupportedLanguage, text: string): { isConsistent: boolean; expected: string } {
    const term = this.canonicalTerms[termKey.toLowerCase()];
    if (!term) return { isConsistent: true, expected: '' };

    const expected = term[lang];
    const isConsistent = text.includes(expected) || text.toLowerCase().includes(expected.toLowerCase());
    return { isConsistent, expected };
  }
}
