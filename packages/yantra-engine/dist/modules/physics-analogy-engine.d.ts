export interface AnalogyPrincipleItem {
    index: number;
    nameSanskrit: string;
    nameEnglish: string;
    physicsAnalogy: string;
    physicsDomain: string;
    description: string;
}
export interface YantraPhysicsAnalogy {
    yantraId: string;
    title: string;
    formula: string;
    shivaPrinciplesTitle: string;
    shivaPrinciplesSubtitle: string;
    shivaPrinciples: AnalogyPrincipleItem[];
    shaktiPrinciplesTitle: string;
    shaktiPrinciplesSubtitle: string;
    shaktiPrinciples: AnalogyPrincipleItem[];
    cosmologicalSynthesis: string;
    physicsDomains: string[];
}
export declare class SGOSPhysicsAnalogyEngine {
    private static analogies;
    private static isInitialized;
    private static initIfNeeded;
    static getAnalogy(yantraId: string): YantraPhysicsAnalogy;
}
