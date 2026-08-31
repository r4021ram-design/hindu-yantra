import { SGKBLocalization } from './types';

export class SGKBLocalizationEngine {
  /**
   * Resolves localized title for a specified locale string ('sanskrit' | 'iast' | 'hindi' | 'english' | 'gujarati').
   */
  public static getTitle(loc: SGKBLocalization, locale: 'sanskrit' | 'iast' | 'hindi' | 'english' | 'gujarati' = 'english'): string {
    switch (locale) {
      case 'sanskrit':
        return loc.sanskrit;
      case 'iast':
        return loc.iast || loc.sanskrit;
      case 'hindi':
        return loc.hindi || loc.sanskrit;
      case 'gujarati':
        return loc.gujarati || loc.hindi || loc.sanskrit;
      case 'english':
      default:
        return loc.english;
    }
  }
}
