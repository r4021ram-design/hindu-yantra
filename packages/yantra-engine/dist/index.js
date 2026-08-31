"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffineTransform2D = exports.Triangle2D = exports.Circle2D = exports.Segment2D = exports.Line2D = exports.Vector2D = exports.KernelPolygon2D = exports.KernelPoint2D = void 0;
// SGOS Core Public API Facade & Knowledge Exports
__exportStar(require("./public-api"), exports);
__exportStar(require("./references/chiodo-reference-dataset"), exports);
__exportStar(require("./comparison/reference-comparator"), exports);
__exportStar(require("./dsl/types"), exports);
var kernel_1 = require("./kernel");
Object.defineProperty(exports, "KernelPoint2D", { enumerable: true, get: function () { return kernel_1.Point2D; } });
Object.defineProperty(exports, "KernelPolygon2D", { enumerable: true, get: function () { return kernel_1.Polygon2D; } });
Object.defineProperty(exports, "Vector2D", { enumerable: true, get: function () { return kernel_1.Vector2D; } });
Object.defineProperty(exports, "Line2D", { enumerable: true, get: function () { return kernel_1.Line2D; } });
Object.defineProperty(exports, "Segment2D", { enumerable: true, get: function () { return kernel_1.Segment2D; } });
Object.defineProperty(exports, "Circle2D", { enumerable: true, get: function () { return kernel_1.Circle2D; } });
Object.defineProperty(exports, "Triangle2D", { enumerable: true, get: function () { return kernel_1.Triangle2D; } });
Object.defineProperty(exports, "AffineTransform2D", { enumerable: true, get: function () { return kernel_1.AffineTransform2D; } });
__exportStar(require("./compiler"), exports);
__exportStar(require("./construction/chiodo-construction-engine"), exports);
__exportStar(require("./construction/construction-debugger"), exports);
__exportStar(require("./topology/topology-engine"), exports);
__exportStar(require("./constraints"), exports);
__exportStar(require("./ast"), exports);
__exportStar(require("./graph"), exports);
__exportStar(require("./solver"), exports);
__exportStar(require("./optimization"), exports);
__exportStar(require("./sdk"), exports);
__exportStar(require("./verification"), exports);
__exportStar(require("./scholarly"), exports);
__exportStar(require("./sgkb"), exports);
__exportStar(require("./plugins/yantra-library"), exports);
__exportStar(require("./package-manager"), exports);
__exportStar(require("./cli/sgos-cli"), exports);
// Next.js App Interface & Legacy Compatibility Exports
__exportStar(require("./data/yantras-dsl"), exports);
__exportStar(require("./geometry/compiler"), exports);
__exportStar(require("./geometry/validator"), exports);
__exportStar(require("./renderers/svg-renderer"), exports);
__exportStar(require("./renderers/rendering-modes"), exports);
__exportStar(require("./renderers/canvas-3d-renderer"), exports);
__exportStar(require("./renderers/mesh-3d-generator"), exports);
__exportStar(require("./export/exporter"), exports);
__exportStar(require("./modules/ai-knowledge"), exports);
__exportStar(require("./modules/mantra-japa"), exports);
__exportStar(require("./modules/placement-engine"), exports);
__exportStar(require("./modules/scriptural-engine"), exports);
__exportStar(require("./modules/modern-interpretations"), exports);
__exportStar(require("./modules/physics-analogy-engine"), exports);
__exportStar(require("./modules/avarana-callout-engine"), exports);
