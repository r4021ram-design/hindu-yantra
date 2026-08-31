"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialPackageSchema = exports.PBRMaterialParametersSchema = void 0;
const zod_1 = require("zod");
exports.PBRMaterialParametersSchema = zod_1.z.object({
    albedo: zod_1.z.string(),
    roughness: zod_1.z.number().min(0).max(1),
    metalness: zod_1.z.number().min(0).max(1),
    transmission: zod_1.z.number().min(0).max(1).optional().default(0),
    ior: zod_1.z.number().min(1).max(3).optional().default(1.5),
    clearcoat: zod_1.z.number().min(0).max(1).optional().default(0),
    clearcoatRoughness: zod_1.z.number().min(0).max(1).optional().default(0),
    emissive: zod_1.z.string().optional().default('#000000'),
    opacity: zod_1.z.number().min(0).max(1).optional().default(1.0)
});
exports.MaterialPackageSchema = zod_1.z.object({
    name: zod_1.z.string(),
    id: zod_1.z.string(),
    version: zod_1.z.string(),
    category: zod_1.z.enum(['Metals', 'Crystals', 'Stones', 'Glasses', 'Custom']),
    description: zod_1.z.string(),
    pbr: exports.PBRMaterialParametersSchema,
    shaderParameters: zod_1.z.object({
        vertexShader: zod_1.z.string().optional(),
        fragmentShader: zod_1.z.string().optional(),
        uniforms: zod_1.z.record(zod_1.z.string(), zod_1.z.any()).optional()
    }).optional(),
    preview: zod_1.z.object({
        thumbnailUrl: zod_1.z.string().optional(),
        accentColor: zod_1.z.string()
    }),
    units: zod_1.z.string().default('SI/Metric'),
    isCustom: zod_1.z.boolean().default(false)
});
