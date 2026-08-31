"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SGOSVerification = void 0;
const verification_engine_1 = require("./verification-engine");
const proof_engine_1 = require("./proof-engine");
const conformance_suite_1 = require("./conformance-suite");
class SGOSVerification {
    /**
     * Runs end-to-end 8-stage verification check over a GeometryDSL.
     */
    static verifyGeometry(dsl) {
        return verification_engine_1.SGOSVerificationEngine.verify(dsl);
    }
    /**
     * Generates step-by-step mathematical proof object for a GeometryDSL.
     */
    static proveGeometry(dsl) {
        return proof_engine_1.SGOSGeometryProofEngine.generateProof(dsl);
    }
    /**
     * Validates third-party plugin against SGOS platform conformance rules.
     */
    static testPluginConformance(plugin) {
        return conformance_suite_1.SGOSPluginConformanceSuite.testPlugin(plugin);
    }
}
exports.SGOSVerification = SGOSVerification;
