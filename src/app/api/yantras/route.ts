import { NextResponse } from 'next/server';
import { MASTER_YANTRA_DATASET } from '@yantra/engine';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q')?.toLowerCase();
  const deity = searchParams.get('deity')?.toLowerCase();
  const planet = searchParams.get('planet')?.toLowerCase();
  const purpose = searchParams.get('purpose')?.toLowerCase();

  let results: any[] = MASTER_YANTRA_DATASET;

  if (q) {
    results = results.filter(
      y =>
        y.id.toLowerCase().includes(q) ||
        y.names?.sanskrit?.toLowerCase().includes(q) ||
        y.metadata?.titleSanskrit?.toLowerCase().includes(q) ||
        y.names?.english?.toLowerCase().includes(q) ||
        y.metadata?.titleEnglish?.toLowerCase().includes(q) ||
        y.attributes?.deity?.toLowerCase().includes(q) ||
        (y.attributes?.tags && y.attributes.tags.some((t: string) => t.toLowerCase().includes(q)))
    );
  }

  if (deity) {
    results = results.filter(y => (y.attributes?.deity || y.metadata?.deity || '').toLowerCase().includes(deity));
  }

  if (planet) {
    results = results.filter(y => (y.attributes?.planet || '').toLowerCase().includes(planet));
  }

  if (purpose) {
    results = results.filter(y => y.attributes?.purpose && y.attributes.purpose.some((p: string) => p.toLowerCase().includes(purpose)));
  }

  return NextResponse.json({
    yantras: results.map(y => ({
      id: y.id,
      version: y.version || '1.0',
      traditionVariant: y.traditionVariant || y.metadata?.traditionVariant || 'Srividya',
      names: y.names || { sanskrit: y.metadata?.titleSanskrit || '', english: y.metadata?.titleEnglish || y.id },
      attributes: y.attributes || { deity: y.metadata?.deity || '', element: 'Ether', tags: [] },
      mantra: { beejMantra: y.mantra?.beejMantra || '', sanskrit: y.mantra?.sanskrit || '' },
      ritualPlacement: y.ritualPlacement || {}
    })),
    count: results.length
  });
}
