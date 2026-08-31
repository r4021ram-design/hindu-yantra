import { SGOSPackageManifest, TrustLevel } from './types';

export interface TrustReport {
  readonly trustLevel: TrustLevel;
  readonly isTrusted: boolean;
  readonly warning?: string;
  readonly publisherAuthenticity: boolean;
}

export class SGOSTrustEngine {
  private static officialPublishers = new Set(['SGOS Architecture Council', 'Sacred Geometry Foundation']);

  /** Evaluates trust status of a package manifest */
  public static evaluate(manifest: SGOSPackageManifest): TrustReport {
    const isPublisherOfficial = this.officialPublishers.has(manifest.publisher);
    const hasSignature = manifest.signature && manifest.signature.startsWith('sha256_');

    if (manifest.trustLevel === 'Deprecated') {
      return {
        trustLevel: 'Deprecated',
        isTrusted: false,
        warning: `Package "${manifest.name}" is DEPRECATED and should not be used in production.`,
        publisherAuthenticity: isPublisherOfficial
      };
    }

    if (!hasSignature) {
      return {
        trustLevel: 'Unsigned',
        isTrusted: false,
        warning: `Package "${manifest.name}" is UNSIGNED! Security signature missing.`,
        publisherAuthenticity: false
      };
    }

    if (isPublisherOfficial) {
      return {
        trustLevel: 'Official',
        isTrusted: true,
        publisherAuthenticity: true
      };
    }

    if (manifest.trustLevel === 'Experimental') {
      return {
        trustLevel: 'Experimental',
        isTrusted: true,
        warning: `Package "${manifest.name}" is marked as EXPERIMENTAL.`,
        publisherAuthenticity: true
      };
    }

    return {
      trustLevel: manifest.trustLevel || 'Community',
      isTrusted: true,
      publisherAuthenticity: true
    };
  }
}
