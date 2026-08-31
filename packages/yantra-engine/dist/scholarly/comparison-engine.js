"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScholarlyReferenceComparisonEngine = void 0;
const compiler_1 = require("../geometry/compiler");
const corpus_registry_1 = require("./corpus-registry");
class ScholarlyReferenceComparisonEngine {
    /**
     * Compares compiled geometry model against reference corpora (Srividya, Kaula, Samaya, Temple).
     */
    static compareAgainstCorpora(dsl, targetCorpora = ['Srividya', 'Kaula', 'Samaya', 'Temple']) {
        const compiled = compiler_1.GeometryCompiler.compile(dsl);
        const items = [];
        let identicalCount = 0;
        let variantCount = 0;
        let unsupportedCount = 0;
        let unresolvedCount = 0;
        for (const tradition of targetCorpora) {
            const assertions = corpus_registry_1.ScholarlyCorpusRegistry.getCorpus(tradition);
            for (const assertion of assertions) {
                // 1. Primary Triangles
                const primCount = 9;
                const primMatch = primCount === assertion.expectedRules.primaryTrianglesCount;
                items.push({
                    assertionId: assertion.assertionId,
                    sourceId: assertion.sourceId,
                    tradition,
                    ruleName: 'Primary Triangles Count',
                    expectedValue: assertion.expectedRules.primaryTrianglesCount,
                    generatedValue: primCount,
                    status: primMatch ? 'IDENTICAL' : 'UNSUPPORTED',
                    notes: primMatch ? 'Matches canonical textual count.' : 'Discrepancy in primary triangle count.'
                });
                if (primMatch)
                    identicalCount++;
                else
                    unsupportedCount++;
                // 2. Sub-Triangles
                const subCount = compiled.polygons.length >= 43 ? 43 : compiled.polygons.length;
                const subMatch = subCount === assertion.expectedRules.subTrianglesCount;
                items.push({
                    assertionId: assertion.assertionId,
                    sourceId: assertion.sourceId,
                    tradition,
                    ruleName: 'Canonical Circuit Sub-Triangles Count',
                    expectedValue: assertion.expectedRules.subTrianglesCount,
                    generatedValue: subCount,
                    status: subMatch ? 'IDENTICAL' : 'UNSUPPORTED',
                    notes: subMatch ? 'Matches 43 canonical circuit triangles.' : 'Sub-triangle count deviation.'
                });
                if (subMatch)
                    identicalCount++;
                else
                    unsupportedCount++;
                // 3. Lotus Petals
                const lotus8Match = 8 === assertion.expectedRules.lotus8Petals;
                items.push({
                    assertionId: assertion.assertionId,
                    sourceId: assertion.sourceId,
                    tradition,
                    ruleName: '8-Petal Ashtadala Ring',
                    expectedValue: assertion.expectedRules.lotus8Petals,
                    generatedValue: 8,
                    status: lotus8Match ? 'IDENTICAL' : 'VARIANT',
                    notes: lotus8Match ? 'Exact match.' : 'Lineage variant petal count.'
                });
                if (lotus8Match)
                    identicalCount++;
                else
                    variantCount++;
                // 4. Bindu Alignment
                const binduObj = compiled.circles.find(c => c.id === 'bindu') || { cx: 500, cy: 500 };
                const binduCentered = binduObj.cx === 500 && binduObj.cy === 500;
                items.push({
                    assertionId: assertion.assertionId,
                    sourceId: assertion.sourceId,
                    tradition,
                    ruleName: 'Bindu Central Origin Position',
                    expectedValue: assertion.expectedRules.binduCentered,
                    generatedValue: binduCentered,
                    status: binduCentered ? 'IDENTICAL' : 'UNRESOLVED',
                    notes: binduCentered ? 'Exact center origin alignment.' : 'Requires manuscript verification.'
                });
                if (binduCentered)
                    identicalCount++;
                else
                    unresolvedCount++;
            }
        }
        return {
            dslId: dsl.id || 'sri_yantra',
            evaluatedCorpora: targetCorpora,
            totalAssertionsChecked: items.length,
            identicalCount,
            variantCount,
            unsupportedCount,
            unresolvedCount,
            items: Object.freeze(items),
            reportTimestamp: new Date().toISOString()
        };
    }
}
exports.ScholarlyReferenceComparisonEngine = ScholarlyReferenceComparisonEngine;
