"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileShriYantra = compileShriYantra;
exports.validateShriYantra = validateShriYantra;
exports.compareWithReference = compareWithReference;
exports.generateProofPackage = generateProofPackage;
exports.exportCanonicalSVG = exportCanonicalSVG;
exports.exportMeruMesh = exportMeruMesh;
const chiodo_construction_engine_1 = require("./construction/chiodo-construction-engine");
const chiodo_validator_1 = require("./verification/chiodo-validator");
const reference_comparator_1 = require("./comparison/reference-comparator");
const topology_engine_1 = require("./topology/topology-engine");
const compiler_1 = require("./geometry/compiler");
const rendering_modes_1 = require("./renderers/rendering-modes");
const mesh_3d_generator_1 = require("./renderers/mesh-3d-generator");
const yantras_dsl_1 = require("./data/yantras-dsl");
/**
 * SGOS Public API Facade for Alessandro Chiodo (2021) Śrī Yantra Analytical Computational Geometry Engine
 */
function compileShriYantra() {
    const construction = chiodo_construction_engine_1.ChiodoConstructionEngine.construct();
    const topology = topology_engine_1.TopologyEngine.extract43SubTriangles(construction.primaryTriangles);
    return {
        ...construction,
        topology
    };
}
function validateShriYantra() {
    const construction = chiodo_construction_engine_1.ChiodoConstructionEngine.construct();
    return chiodo_validator_1.ChiodoValidator.audit(construction);
}
function compareWithReference() {
    const construction = chiodo_construction_engine_1.ChiodoConstructionEngine.construct();
    return reference_comparator_1.ReferenceComparator.compareToReference(construction.primaryTriangles);
}
function generateProofPackage() {
    const construction = chiodo_construction_engine_1.ChiodoConstructionEngine.construct();
    const topology = topology_engine_1.TopologyEngine.extract43SubTriangles(construction.primaryTriangles);
    const validation = chiodo_validator_1.ChiodoValidator.audit(construction);
    const comparison = reference_comparator_1.ReferenceComparator.compareToReference(construction.primaryTriangles);
    return {
        engineName: 'Analytical Computational Geometry Engine Implementing Alessandro Chiodo (2021)',
        construction,
        topology,
        validation,
        comparison
    };
}
function exportCanonicalSVG() {
    const dsl = yantras_dsl_1.MASTER_YANTRA_DATASET[0];
    const compiled = compiler_1.GeometryCompiler.compile(dsl);
    return rendering_modes_1.YantraModeRenderer.renderMode(compiled, 'final_canonical');
}
function exportMeruMesh() {
    const dsl = yantras_dsl_1.MASTER_YANTRA_DATASET[0];
    const compiled = compiler_1.GeometryCompiler.compile(dsl);
    return mesh_3d_generator_1.Mesh3DGenerator.generateSTL(compiled, { mode: 'maha_meru_pyramid' });
}
