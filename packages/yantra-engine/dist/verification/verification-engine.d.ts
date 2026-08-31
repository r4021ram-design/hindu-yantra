import { GeometryDSL } from '../compiler/types';
import { VerificationReport } from './types';
export declare class SGOSVerificationEngine {
    /**
     * Pipeline Stage: Executes complete 8-stage verification pipeline over a GeometryDSL.
     */
    static verify(dsl: GeometryDSL): VerificationReport;
}
