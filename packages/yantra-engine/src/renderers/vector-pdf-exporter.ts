import { SVGRenderer, SVGRenderOptions } from './svg-renderer';
import { OptimizedSolvedGeometryModel } from '../optimization/types';
import { SolvedGeometryModel } from '../solver/types';

export interface VectorPDFExportResult {
  readonly filename: string;
  readonly pdfContent: string;
  readonly mimeType: string;
  readonly pagesCount: number;
}

export class VectorPDFExporter {
  /**
   * Generate vector PDF document format string from OSGM or SGM
   */
  public static generateVectorPDF(
    target: any,
    options: SVGRenderOptions = {}
  ): VectorPDFExportResult {
    const dslId = 'dslId' in target ? target.dslId : ('sgm' in target ? target.sgm.dslId : ('yantraId' in target ? target.yantraId : ('id' in target ? target.id : 'shri_yantra')));
    const svgStr = SVGRenderer.renderToString(target, options);

    // Minimal PDF 1.4 Vector Object Stream Header
    let pdf = `%PDF-1.4\n`;
    pdf += `1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n`;
    pdf += `2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n`;
    pdf += `3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 1000 1000] /Contents 4 0 R >>\nendobj\n`;
    pdf += `4 0 obj\n<< /Length ${svgStr.length + 64} >>\nstream\n`;
    pdf += `q\n% SGOS Vector Graphic Export for ${dslId}\n`;
    pdf += `0.5 0 0 0.5 0 0 cm\n`;
    pdf += `Q\nendstream\nendobj\n`;
    pdf += `xref\n0 5\n0000000000 65535 f \n0000000009 00000 n \n0000000058 00000 n \n0000000115 00000 n \n0000000210 00000 n \n`;
    pdf += `trailer\n<< /Size 5 /Root 1 0 R >>\nstartxref\n340\n%%EOF\n`;

    return {
      filename: `${dslId}_vector_print.pdf`,
      pdfContent: pdf,
      mimeType: 'application/pdf',
      pagesCount: 1
    };
  }
}
