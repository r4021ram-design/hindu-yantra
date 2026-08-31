import { SGKBPackage } from './types';
export declare class SGKBLoader {
    private static packageMap;
    private static init;
    /** Register dynamic SGKB Package into repository */
    static registerPackage(pkg: SGKBPackage): void;
    /** Loads SGKB package by canonical SGOS URI (e.g. "sgos://yantra/shri") */
    static loadByURI(uriString: string): SGKBPackage;
    /** List all loaded SGOS URIs */
    static listAllURIs(): readonly string[];
}
