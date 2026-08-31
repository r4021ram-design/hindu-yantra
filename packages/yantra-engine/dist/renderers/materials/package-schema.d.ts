import { z } from 'zod';
export declare const PBRMaterialParametersSchema: z.ZodObject<{
    albedo: z.ZodString;
    roughness: z.ZodNumber;
    metalness: z.ZodNumber;
    transmission: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    ior: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    clearcoat: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    clearcoatRoughness: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    emissive: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    opacity: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
}, z.core.$strip>;
export declare const MaterialPackageSchema: z.ZodObject<{
    name: z.ZodString;
    id: z.ZodString;
    version: z.ZodString;
    category: z.ZodEnum<{
        Metals: "Metals";
        Crystals: "Crystals";
        Stones: "Stones";
        Glasses: "Glasses";
        Custom: "Custom";
    }>;
    description: z.ZodString;
    pbr: z.ZodObject<{
        albedo: z.ZodString;
        roughness: z.ZodNumber;
        metalness: z.ZodNumber;
        transmission: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
        ior: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
        clearcoat: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
        clearcoatRoughness: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
        emissive: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        opacity: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    }, z.core.$strip>;
    shaderParameters: z.ZodOptional<z.ZodObject<{
        vertexShader: z.ZodOptional<z.ZodString>;
        fragmentShader: z.ZodOptional<z.ZodString>;
        uniforms: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>>;
    preview: z.ZodObject<{
        thumbnailUrl: z.ZodOptional<z.ZodString>;
        accentColor: z.ZodString;
    }, z.core.$strip>;
    units: z.ZodDefault<z.ZodString>;
    isCustom: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type PBRMaterialParameters = z.infer<typeof PBRMaterialParametersSchema>;
export type MaterialPackage = z.infer<typeof MaterialPackageSchema>;
