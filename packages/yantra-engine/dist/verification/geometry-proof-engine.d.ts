import { GeometryDSL } from '../compiler/types';
export interface VertexProofChain {
    vertexId: string;
    coordinates: {
        x: number;
        y: number;
    };
    parentEntities: string[];
    intersectionEquation: string;
    analyticalDerivation: string;
    status: 'PROOF_VERIFIED';
}
export interface FormalGeometryProofReport {
    dslId: string;
    tradition: string;
    proofTimestamp: string;
    totalVerticesProved: number;
    vertexProofChains: VertexProofChain[];
    primaryTriangleEquations: {
        id: string;
        equation: string;
        orientation: 'Shiva (Upward)' | 'Shakti (Downward)';
    }[];
    proofValidityStatus: 'MATHEMATICALLY_PROVED';
}
export declare class SGOSFormalGeometryProofEngine {
    /**
     * Generates formal step-by-step mathematical proof chains for every vertex in the geometry model.
     */
    static generateFormalProof(dsl: GeometryDSL): FormalGeometryProofReport;
}
