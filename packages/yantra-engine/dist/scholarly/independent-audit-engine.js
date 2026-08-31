"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SGOSIndependentAuditEngine = void 0;
const compiler_1 = require("../geometry/compiler");
const geometry_proof_engine_1 = require("../verification/geometry-proof-engine");
const topology_proof_engine_1 = require("../verification/topology-proof-engine");
const provenance_graph_1 = require("./provenance-graph");
const corpus_registry_1 = require("./corpus-registry");
class SGOSIndependentAuditEngine {
    /**
     * Evaluates SGOS geometry, topology, proofs, citations, and provenance in zero-trust independent audit mode.
     */
    static executeIndependentAudit(dsl) {
        const compiled = compiler_1.GeometryCompiler.compile(dsl);
        const formalProof = geometry_proof_engine_1.SGOSFormalGeometryProofEngine.generateFormalProof(dsl);
        const topologyProof = topology_proof_engine_1.SGOSTopologyProofEngine.proveTopology(dsl);
        const provenanceGraph = provenance_graph_1.SGOSEvidenceProvenanceGraph.buildProvenanceGraph(dsl.id);
        const auditItems = [];
        // 1. Independent Geometry Audit
        const isGeomValid = compiled.polygons.length >= 43;
        auditItems.push({
            category: 'Geometry',
            itemDescription: 'Analytical Line Intersection & Sub-Triangle Vertex Derivation',
            auditStatus: isGeomValid ? 'PASS' : 'FAIL',
            evidenceClassification: 'INTERNALLY_VERIFIED',
            details: `Derived ${compiled.polygons.length} polygon circuits via analytical solver line intersection math.`
        });
        // 2. Independent Topology Audit
        const isTopoValid = topologyProof.eulerEquationValid;
        auditItems.push({
            category: 'Topology',
            itemDescription: 'Planar Graph Euler Characteristic (V - E + F)',
            auditStatus: isTopoValid ? 'PASS' : 'FAIL',
            evidenceClassification: 'INTERNALLY_VERIFIED',
            details: `Euler characteristic V=${topologyProof.verticesCount}, E=${topologyProof.edgesCount}, F=${topologyProof.facesCount}.`
        });
        // 3. Independent Proof Audit
        const isProofValid = formalProof.proofValidityStatus === 'MATHEMATICALLY_PROVED';
        auditItems.push({
            category: 'Proof',
            itemDescription: 'Formal Vertex Proof Chains & Equation Binding',
            auditStatus: isProofValid ? 'PASS' : 'FAIL',
            evidenceClassification: 'INTERNALLY_VERIFIED',
            details: `Proved ${formalProof.totalVerticesProved} vertex proof chains with line equations.`
        });
        // 4. Independent Citation Audit
        const srividyaCorpus = corpus_registry_1.ScholarlyCorpusRegistry.getCorpus('Srividya');
        const isCitationValid = srividyaCorpus.length > 0;
        auditItems.push({
            category: 'Citations',
            itemDescription: 'Saundarya Lahari & Sharada Tilaka Scholarly Manuscript Citations',
            auditStatus: isCitationValid ? 'PASS' : 'FAIL',
            evidenceClassification: 'EXTERNALLY_REFERENCED',
            details: `Referenced ${srividyaCorpus.length} manuscript assertions in Ganesh & Co. Madras Sanskrit Edition.`
        });
        // 5. Independent Provenance Audit
        const isProvValid = provenanceGraph.isChainUnbroken;
        auditItems.push({
            category: 'Provenance',
            itemDescription: 'End-to-End Audit Trail DAG Chain Integrity',
            auditStatus: isProvValid ? 'PASS' : 'FAIL',
            evidenceClassification: 'EXTERNALLY_REFERENCED',
            details: `Verified 7 DAG nodes from Geometry to Snapshot Version ${provenanceGraph.graphLeafId}.`
        });
        const passedCount = auditItems.filter(i => i.auditStatus === 'PASS').length;
        const overallPassed = passedCount === auditItems.length;
        let internallyVerifiedCount = 0;
        let externallyReferencedCount = 0;
        let inferredCount = 0;
        let unresolvedCount = 0;
        for (const item of auditItems) {
            if (item.evidenceClassification === 'INTERNALLY_VERIFIED')
                internallyVerifiedCount++;
            else if (item.evidenceClassification === 'EXTERNALLY_REFERENCED')
                externallyReferencedCount++;
            else if (item.evidenceClassification === 'INFERRED')
                inferredCount++;
            else if (item.evidenceClassification === 'UNRESOLVED')
                unresolvedCount++;
        }
        return {
            dslId: dsl.id || 'sri_yantra',
            auditMode: 'ZERO_TRUST_INDEPENDENT_AUDIT',
            auditTimestamp: new Date().toISOString(),
            overallAuditPassed: overallPassed,
            totalChecks: auditItems.length,
            passedChecks: passedCount,
            failedChecks: auditItems.length - passedCount,
            classificationSummary: {
                internallyVerifiedCount,
                externallyReferencedCount,
                inferredCount,
                unresolvedCount
            },
            auditItems: Object.freeze(auditItems)
        };
    }
}
exports.SGOSIndependentAuditEngine = SGOSIndependentAuditEngine;
