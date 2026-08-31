import { SGOSURI, SGOSDomain } from './types';
export declare class SGOSURIResolver {
    /**
     * Parses string URI into structured SGOSURI object.
     * Example: "sgos://yantra/shri" -> { domain: "yantra", entityId: "shri" }
     */
    static parse(uriString: string): SGOSURI;
    /**
     * Formats domain and entityId into canonical SGOS URI string.
     */
    static format(domain: SGOSDomain, entityId: string): string;
}
