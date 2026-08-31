import { SGKBPackage } from '../sgkb/types';

export type TrustLevel = 'Official' | 'Community' | 'Experimental' | 'Deprecated' | 'Unsigned';

export interface SGOSPackageManifest {
  readonly name: string;
  readonly uri: string;
  readonly version: string;
  readonly geometryVersion: string;
  readonly researchVersion: string;
  readonly translationVersion: string;
  readonly signature: string;
  readonly publisher: string;
  readonly license: string;
  readonly dependencies: Record<string, string>; // uri -> version requirement
  readonly supportedLanguages: readonly string[];
  readonly tradition: string;
  readonly keywords: readonly string[];
  readonly deity?: string;
  readonly planet?: string;
  readonly chakra?: string;
  readonly geometryType?: string;
  readonly evidenceLevel?: string;
  readonly trustLevel: TrustLevel;
}

export interface SGOSPackageResource {
  readonly manifest: SGOSPackageManifest;
  readonly packageData: SGKBPackage;
}

export interface SearchQuery {
  readonly text?: string;
  readonly deity?: string;
  readonly planet?: string;
  readonly chakra?: string;
  readonly geometryType?: string;
  readonly tradition?: string;
  readonly evidenceLevel?: string;
  readonly language?: string;
  readonly trustLevel?: TrustLevel;
}

export interface DependencyNode {
  readonly uri: string;
  readonly version: string;
  readonly dependencies: readonly string[];
}

export interface DependencyResolutionResult {
  readonly isValid: boolean;
  readonly installOrder: readonly string[];
  readonly cycles: readonly string[];
  readonly missing: readonly string[];
  readonly conflicts: readonly string[];
}
