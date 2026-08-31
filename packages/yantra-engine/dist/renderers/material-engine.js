"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialEngine = void 0;
const package_schema_1 = require("./materials/package-schema");
const copper_json_1 = __importDefault(require("./materials/copper.json"));
const panchadhatu_json_1 = __importDefault(require("./materials/panchadhatu.json"));
const gold_json_1 = __importDefault(require("./materials/gold.json"));
const silver_json_1 = __importDefault(require("./materials/silver.json"));
const crystal_json_1 = __importDefault(require("./materials/crystal.json"));
const marble_json_1 = __importDefault(require("./materials/marble.json"));
const glass_json_1 = __importDefault(require("./materials/glass.json"));
class MaterialEngine {
    static registry = new Map();
    static {
        this.registerBuiltInMaterials();
    }
    static registerBuiltInMaterials() {
        const defaultMaterials = [
            copper_json_1.default,
            panchadhatu_json_1.default,
            gold_json_1.default,
            silver_json_1.default,
            crystal_json_1.default,
            marble_json_1.default,
            glass_json_1.default
        ];
        defaultMaterials.forEach(json => {
            const parsed = package_schema_1.MaterialPackageSchema.parse(json);
            this.registry.set(parsed.id, parsed);
        });
    }
    /**
     * Get material package by ID
     */
    static getMaterial(id) {
        return this.registry.get(id) || this.registry.get('panchadhatu');
    }
    /**
     * Get PBR parameters for a material ID
     */
    static getPBRParameters(id) {
        return this.getMaterial(id).pbr;
    }
    /**
     * Register custom material package
     */
    static registerMaterial(materialPkg) {
        const validated = package_schema_1.MaterialPackageSchema.parse(materialPkg);
        this.registry.set(validated.id, { ...validated, isCustom: true });
        return true;
    }
    /**
     * List all available registered material packages
     */
    static listMaterials() {
        return Object.freeze(Array.from(this.registry.values()));
    }
}
exports.MaterialEngine = MaterialEngine;
