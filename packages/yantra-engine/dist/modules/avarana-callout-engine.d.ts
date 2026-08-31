export interface AvaranaCalloutItem {
    id: number;
    sanskritName: string;
    englishName: string;
    associatedPranaOrSiddhi: string;
    functionOrMeaning: string;
    side: 'left' | 'right';
    targetYPercentage: number;
}
export interface AvaranaCalloutGroup {
    avaranaIndex: number;
    avaranaNameSanskrit: string;
    avaranaNameEnglish: string;
    chakraCategory: string;
    primaryDeity: string;
    totalSubTrianglesOrPetals: number;
    callouts: AvaranaCalloutItem[];
}
export declare class SGOSAvaranaCalloutEngine {
    private static avaranaGroups;
    private static isInitialized;
    private static initIfNeeded;
    static getAvaranaGroup(avaranaIndex: number): AvaranaCalloutGroup;
}
