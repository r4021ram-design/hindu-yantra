import { YantraDSL } from '../types/dsl';
export interface AIExplanationResult {
    query: string;
    yantraId: string;
    yantraName: string;
    explanationText: string;
    highlightedLayerIds: string[];
    mathematicalProof: string;
    scripturalCitations: {
        text: string;
        chapterVerse: string;
        translation: string;
    }[];
}
export declare class AIKnowledgeEngine {
    /**
     * Explain a specific geometric or philosophical question about a Yantra
     */
    static explainQuery(dsl: YantraDSL, query: string): AIExplanationResult;
}
