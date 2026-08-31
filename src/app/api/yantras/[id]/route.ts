import { NextResponse } from 'next/server';
import { MASTER_YANTRA_DATASET, PlacementEngine } from '@yantra/engine';
import { SGOS } from '@yantra/engine/sdk';
import { SGOSVerification } from '@yantra/engine/verification';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const dsl = MASTER_YANTRA_DATASET.find(y => y.id === id);

  if (!dsl) {
    return NextResponse.json({ error: 'Yantra not found' }, { status: 404 });
  }

  const pipelineRes = SGOS.runPipeline(dsl);
  const verificationReport = SGOSVerification.verifyGeometry(dsl);
  const placementGuide = PlacementEngine.getPlacementGuide(dsl);

  return NextResponse.json({
    dsl,
    compiledGeometry: pipelineRes.sgm,
    pipeline: {
      graphNodesCount: Object.keys(pipelineRes.graph.nodes).length,
      isOptimized: pipelineRes.osgm.isOptimized,
      benchmark: pipelineRes.benchmark
    },
    verificationReport,
    placementGuide
  });
}
