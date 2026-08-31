import { z } from 'zod';

export const PBRMaterialParametersSchema = z.object({
  albedo: z.string(),
  roughness: z.number().min(0).max(1),
  metalness: z.number().min(0).max(1),
  transmission: z.number().min(0).max(1).optional().default(0),
  ior: z.number().min(1).max(3).optional().default(1.5),
  clearcoat: z.number().min(0).max(1).optional().default(0),
  clearcoatRoughness: z.number().min(0).max(1).optional().default(0),
  emissive: z.string().optional().default('#000000'),
  opacity: z.number().min(0).max(1).optional().default(1.0)
});

export const MaterialPackageSchema = z.object({
  name: z.string(),
  id: z.string(),
  version: z.string(),
  category: z.enum(['Metals', 'Crystals', 'Stones', 'Glasses', 'Custom']),
  description: z.string(),
  pbr: PBRMaterialParametersSchema,
  shaderParameters: z.object({
    vertexShader: z.string().optional(),
    fragmentShader: z.string().optional(),
    uniforms: z.record(z.string(), z.any()).optional()
  }).optional(),
  preview: z.object({
    thumbnailUrl: z.string().optional(),
    accentColor: z.string()
  }),
  units: z.string().default('SI/Metric'),
  isCustom: z.boolean().default(false)
});

export type PBRMaterialParameters = z.infer<typeof PBRMaterialParametersSchema>;
export type MaterialPackage = z.infer<typeof MaterialPackageSchema>;
