import { GeometryDSL } from '../compiler/types';
import { SGOSPlugin } from '../sdk/types';
import { VerificationReport, GeometryProof, PluginConformanceReport } from './types';
export declare class SGOSVerification {
    /**
     * Runs end-to-end 8-stage verification check over a GeometryDSL.
     */
    static verifyGeometry(dsl: GeometryDSL): VerificationReport;
    /**
     * Generates step-by-step mathematical proof object for a GeometryDSL.
     */
    static proveGeometry(dsl: GeometryDSL): GeometryProof;
    /**
     * Validates third-party plugin against SGOS platform conformance rules.
     */
    static testPluginConformance(plugin: SGOSPlugin): PluginConformanceReport;
}
