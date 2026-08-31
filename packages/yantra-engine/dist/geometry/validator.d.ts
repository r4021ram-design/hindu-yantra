import { CompiledGeometryModel, GeometryValidationReport, YantraDSL } from '../types/dsl';
export declare class GeometryValidator {
    /**
     * Run automated geometry verification and audit checks for Shri Chakra & Yantras
     */
    static validate(dsl: YantraDSL, compiled: CompiledGeometryModel): GeometryValidationReport;
}
