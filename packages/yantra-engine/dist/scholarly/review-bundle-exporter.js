"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScholarlyReviewBundleExporter = void 0;
const geometry_proof_engine_1 = require("../verification/geometry-proof-engine");
const topology_proof_engine_1 = require("../verification/topology-proof-engine");
const deterministic_identity_engine_1 = require("../verification/deterministic-identity-engine");
const comparison_engine_1 = require("./comparison-engine");
const provenance_graph_1 = require("./provenance-graph");
class ScholarlyReviewBundleExporter {
    /**
     * Generates a complete self-contained Scholarly Review Bundle for institutional review.
     */
    static exportBundle(dsl) {
        const dslId = dsl.id || 'sri_yantra';
        const formalProof = geometry_proof_engine_1.SGOSFormalGeometryProofEngine.generateFormalProof(dsl);
        const topologyProof = topology_proof_engine_1.SGOSTopologyProofEngine.proveTopology(dsl);
        const identityHashes = deterministic_identity_engine_1.SGOSDeterministicIdentityEngine.generateIdentityHashes(dsl);
        const referenceComparisons = comparison_engine_1.ScholarlyReferenceComparisonEngine.compareAgainstCorpora(dsl);
        const provenanceGraph = provenance_graph_1.SGOSEvidenceProvenanceGraph.buildProvenanceGraph(dslId);
        return {
            bundleId: `bundle_${dslId}_${Date.now()}`,
            exportTimestamp: new Date().toISOString(),
            dslId,
            formalProof,
            topologyProof,
            identityHashes,
            referenceComparisons,
            provenanceGraph,
            bundleVersion: '1.0.0-scholarly.review'
        };
    }
    static exportBundleMarkdown(bundle) {
        return `# SGOS Institutional Scholarly Review Bundle

**Bundle ID**: \`${bundle.bundleId}\`  
**DSL Identifier**: \`${bundle.dslId}\`  
**Export Timestamp**: ${bundle.exportTimestamp}  
**Version**: ${bundle.bundleVersion}  

---

## 1. Geometry & Formal Proof Summary
- **Proof Status**: ${bundle.formalProof.proofValidityStatus}
- **Vertices Proved**: ${bundle.formalProof.totalVerticesProved}
- **Primary Triangle Equations**: ${bundle.formalProof.primaryTriangleEquations.length}

## 2. Planar Topology Proof Summary
- **Topology Status**: ${bundle.topologyProof.topologyStatus}
- **Is Planar Graph**: ${bundle.topologyProof.isPlanarGraph}
- **Vertices (V)**: ${bundle.topologyProof.verticesCount}
- **Edges (E)**: ${bundle.topologyProof.edgesCount}
- **Faces (F)**: ${bundle.topologyProof.facesCount}
- **Euler Characteristic (V - E + F)**: ${bundle.topologyProof.eulerCharacteristic}
- **Winding Order**: ${bundle.topologyProof.windingOrderEnforced}

## 3. Multi-Corpus Reference Comparison Summary
- **Evaluated Corpora**: ${bundle.referenceComparisons.evaluatedCorpora.join(', ')}
- **Total Assertions Checked**: ${bundle.referenceComparisons.totalAssertionsChecked}
- **Identical**: ${bundle.referenceComparisons.identicalCount}
- **Variant**: ${bundle.referenceComparisons.variantCount}
- **Unsupported**: ${bundle.referenceComparisons.unsupportedCount}
- **Unresolved**: ${bundle.referenceComparisons.unresolvedCount}

## 4. Deterministic Identity Hashes
- **Geometry Hash**: \`${bundle.identityHashes.geometryHash}\`
- **Graph Hash**: \`${bundle.identityHashes.graphHash}\`
- **Solver Hash**: \`${bundle.identityHashes.solverHash}\`
- **SVG Hash**: \`${bundle.identityHashes.svgHash}\`
- **Scene Graph Hash**: \`${bundle.identityHashes.sceneGraphHash}\`

## 5. Evidence Provenance Graph
- **Graph Nodes**: ${bundle.provenanceGraph.totalNodes}
- **Graph Edges**: ${bundle.provenanceGraph.totalEdges}
- **Chain Integrity**: ${bundle.provenanceGraph.isChainUnbroken ? 'UNBROKEN ✓' : 'BROKEN ✕'}
`;
    }
}
exports.ScholarlyReviewBundleExporter = ScholarlyReviewBundleExporter;
