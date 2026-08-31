import { SGOSURI, SGOSDomain } from './types';

export class SGOSURIResolver {
  /**
   * Parses string URI into structured SGOSURI object.
   * Example: "sgos://yantra/shri" -> { domain: "yantra", entityId: "shri" }
   */
  public static parse(uriString: string): SGOSURI {
    if (!uriString.startsWith('sgos://')) {
      throw new Error(`Invalid SGOS URI schema: "${uriString}". Must start with "sgos://"`);
    }

    const path = uriString.slice(7);
    const parts = path.split('/');
    if (parts.length < 2) {
      throw new Error(`Invalid SGOS URI format: "${uriString}". Expected "sgos://<domain>/<entityId>"`);
    }

    const domain = parts[0] as SGOSDomain;
    const entityId = parts[1];
    const subPath = parts.slice(2).join('/') || undefined;

    return {
      uriString,
      domain,
      entityId,
      subPath
    };
  }

  /**
   * Formats domain and entityId into canonical SGOS URI string.
   */
  public static format(domain: SGOSDomain, entityId: string): string {
    return `sgos://${domain}/${entityId}`;
  }
}
