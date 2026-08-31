export interface SBOMPackageEntry {
    name: string;
    version: string;
    license: string;
    purl: string;
    sha256: string;
    type: 'library' | 'framework' | 'tool';
}
export interface SoftwareBillOfMaterials {
    spdxVersion: 'SPDX-2.3';
    cycloneDxVersion: '1.4';
    packageName: string;
    packageVersion: string;
    licenseDeclared: 'MIT';
    timestamp: string;
    supplier: string;
    packages: SBOMPackageEntry[];
    securityTelemetry: {
        thirdPartyTelemetryEnabled: false;
        vulnerabilitiesCount: 0;
        licenseCompliance: 'PASS';
    };
}
export declare class SGOSSBOMLicenseGenerator {
    /**
     * Generates SPDX-2.3 / CycloneDX-1.4 Software Bill of Materials (SBOM).
     */
    static generateSBOM(): SoftwareBillOfMaterials;
}
