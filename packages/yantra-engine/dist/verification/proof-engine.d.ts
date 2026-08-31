import { GeometryDSL } from '../compiler/types';
import { GeometryProof } from './types';
export declare class SGOSGeometryProofEngine {
    /**
     * Generates a step-by-step mathematical proof for a solved geometry.
     */
    static generateProof(dsl: GeometryDSL): GeometryProof;
}
