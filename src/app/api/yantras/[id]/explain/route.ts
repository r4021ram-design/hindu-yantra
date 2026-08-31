import { NextResponse } from 'next/server';
import { MASTER_YANTRA_DATASET, AIKnowledgeEngine } from '@yantra/engine';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q') || 'Why is this Yantra geometrically structured this way?';

  const dsl = MASTER_YANTRA_DATASET.find(y => y.id === id);
  if (!dsl) {
    return NextResponse.json({ error: 'Yantra not found' }, { status: 404 });
  }

  const explanation = AIKnowledgeEngine.explainQuery(dsl, q);
  return NextResponse.json(explanation);
}
