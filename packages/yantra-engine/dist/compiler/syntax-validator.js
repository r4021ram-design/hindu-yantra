"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntaxValidator = void 0;
class SyntaxValidator {
    /**
     * Pipeline Stage 1: Validate Geometry DSL Syntax & Structural Integrity
     */
    static validate(rawDsl, diagnostics) {
        if (!rawDsl || typeof rawDsl !== 'object') {
            diagnostics.addError('SGOS_E001_INVALID_ROOT', 'Geometry DSL input must be a non-null JSON/YAML object.', { path: '$' }, 'Provide a valid JSON/YAML object matching the YantraDSL specification.');
            return false;
        }
        // Required top-level fields
        if (!rawDsl.id || typeof rawDsl.id !== 'string') {
            diagnostics.addError('SGOS_E002_MISSING_ID', 'Geometry DSL missing valid string property "id".', { path: 'id' }, 'Add a unique string identifier (e.g. "id": "sri_yantra").');
        }
        if (!rawDsl.geometryRules || typeof rawDsl.geometryRules !== 'object') {
            diagnostics.addError('SGOS_E003_MISSING_GEOMETRY_RULES', 'Geometry DSL missing "geometryRules" object section.', { path: 'geometryRules' }, 'Add a "geometryRules" section defining concentric circles, lotus rings, and primary triangles.');
        }
        else {
            this.validateGeometryRulesSyntax(rawDsl.geometryRules, diagnostics);
        }
        // Check optional metadata syntax
        if (rawDsl.metadata && typeof rawDsl.metadata !== 'object') {
            diagnostics.addWarning('SGOS_W001_MALFORMED_METADATA', 'Property "metadata" should be an object.', { path: 'metadata' }, 'Ensure metadata is structured as an object with title, tradition, and author.');
        }
        return diagnostics.buildDiagnostics().isValid;
    }
    static validateGeometryRulesSyntax(rules, diagnostics) {
        if (rules.concentricCircles !== undefined && !Array.isArray(rules.concentricCircles)) {
            diagnostics.addError('SGOS_E004_INVALID_CONCENTRIC_CIRCLES', '"geometryRules.concentricCircles" must be an array of circle specifications.', { path: 'geometryRules.concentricCircles' }, 'Convert concentricCircles into an array.');
        }
        if (rules.lotusRings !== undefined && !Array.isArray(rules.lotusRings)) {
            diagnostics.addError('SGOS_E005_INVALID_LOTUS_RINGS', '"geometryRules.lotusRings" must be an array of lotus ring specifications.', { path: 'geometryRules.lotusRings' }, 'Convert lotusRings into an array.');
        }
        if (rules.shriYantraCore !== undefined) {
            if (typeof rules.shriYantraCore !== 'object') {
                diagnostics.addError('SGOS_E006_INVALID_SHRI_CORE', '"geometryRules.shriYantraCore" must be an object.', { path: 'geometryRules.shriYantraCore' });
            }
            else {
                const core = rules.shriYantraCore;
                if (typeof core.shivaTriangles !== 'number' || core.shivaTriangles <= 0) {
                    diagnostics.addError('SGOS_E007_INVALID_SHIVA_COUNT', '"shriYantraCore.shivaTriangles" must be a positive integer.', { path: 'geometryRules.shriYantraCore.shivaTriangles' });
                }
                if (typeof core.shaktiTriangles !== 'number' || core.shaktiTriangles <= 0) {
                    diagnostics.addError('SGOS_E008_INVALID_SHAKTI_COUNT', '"shriYantraCore.shaktiTriangles" must be a positive integer.', { path: 'geometryRules.shriYantraCore.shaktiTriangles' });
                }
            }
        }
    }
}
exports.SyntaxValidator = SyntaxValidator;
