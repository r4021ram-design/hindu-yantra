import { SVGRenderOptions } from './svg-renderer';
export interface VectorPDFExportResult {
    readonly filename: string;
    readonly pdfContent: string;
    readonly mimeType: string;
    readonly pagesCount: number;
}
export declare class VectorPDFExporter {
    /**
     * Generate vector PDF document format string from OSGM or SGM
     */
    static generateVectorPDF(target: any, options?: SVGRenderOptions): VectorPDFExportResult;
}
