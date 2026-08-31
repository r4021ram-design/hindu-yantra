import { SGKBLocalization } from './types';
export declare class SGKBLocalizationEngine {
    /**
     * Resolves localized title for a specified locale string ('sanskrit' | 'iast' | 'hindi' | 'english' | 'gujarati').
     */
    static getTitle(loc: SGKBLocalization, locale?: 'sanskrit' | 'iast' | 'hindi' | 'english' | 'gujarati'): string;
}
