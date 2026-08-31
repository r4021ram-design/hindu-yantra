import { NextResponse } from 'next/server';
import { MASTER_YANTRA_DATASET, ExporterEngine, ExportFormat } from '@yantra/engine';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const { searchParams } = new URL(request.url);
  const format = (searchParams.get('format') || 'svg') as ExportFormat;
  const theme = searchParams.get('theme') || 'gold';
  const activeLayerId = searchParams.get('layer') || undefined;

  const dsl = MASTER_YANTRA_DATASET.find(y => y.id === id);
  if (!dsl) {
    return NextResponse.json({ error: 'Yantra not found' }, { status: 404 });
  }

  const result = ExporterEngine.export(dsl, format, {
    renderOptions: { theme: theme as any, activeLayerId, strokeWidth: 2 }
  });

  return new Response(result.content, {
    headers: {
      'Content-Type': result.mimeType,
      'Content-Disposition': `inline; filename="${result.filename}"`
    }
  });
}
