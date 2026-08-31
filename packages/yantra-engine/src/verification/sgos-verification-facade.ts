import { GeometryDSL } from '../compiler/types';
import { SGOSPlugin } from '../sdk/types';
import { VerificationReport, GeometryProof, PluginConformanceReport } from './types';
import { SGOSVerificationEngine } from './verification-engine';
import { SGOSGeometryProofEngine } from './proof-engine';
import { SGOSPluginConformanceSuite } from './conformance-suite';

export class SGOSVerification {
  /**
   * Runs end-to-end 8-stage verification check over a GeometryDSL.
   */
  public static verifyGeometry(dsl: GeometryDSL): VerificationReport {
    return SGOSVerificationEngine.verify(dsl);
  }

  /**
   * Generates step-by-step mathematical proof object for a GeometryDSL.
   */
  public static proveGeometry(dsl: GeometryDSL): GeometryProof {
    return SGOSGeometryProofEngine.generateProof(dsl);
  }

  /**
   * Validates third-party plugin against SGOS platform conformance rules.
   */
  public static testPluginConformance(plugin: SGOSPlugin): PluginConformanceReport {
    return SGOSPluginConformanceSuite.testPlugin(plugin);
  }
}
