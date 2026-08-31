import fs from 'fs';
import path from 'path';
import { ChiodoConstructionEngine } from '../src/construction/chiodo-construction-engine';
import { ConstructionDebugger } from '../src/construction/construction-debugger';
import { TopologyEngine } from '../src/topology/topology-engine';
import { ConstraintSolver } from '../src/constraints/constraint-solver';
import { ChiodoValidator } from '../src/verification/chiodo-validator';
import { ReferenceComparator } from '../src/comparison/reference-comparator';
import { YantraModeRenderer } from '../src/renderers/rendering-modes';
import { GeometryCompiler } from '../src/geometry/compiler';
import { MASTER_YANTRA_DATASET } from '../src/data/yantras-dsl';

async function generateFullProofPackage() {
  console.log('========================================================================');
  console.log('CHIODO (2021) ANALYTICAL COMPUTATIONAL GEOMETRY ENGINE PROOF GENERATOR');
  console.log('========================================================================\n');

  const constr = ChiodoConstructionEngine.construct();
  const dbg = new ConstructionDebugger();
  const dsl = MASTER_YANTRA_DATASET[0];
  const compiled = GeometryCompiler.compile(dsl);
  const topology = TopologyEngine.extract43SubTriangles(constr.primaryTriangles);
  const constraints = ConstraintSolver.verifyChiodoConstraints(constr.primaryTriangles, constr.outerCircumcircle);
  const refReport = ReferenceComparator.compareToReference(constr.primaryTriangles);
  const auditReport = ChiodoValidator.audit(constr);

  if (!auditReport.isAuthenticChiodoGeometry || !refReport.isMatchingFigure11) {
    console.error('CANONICAL FAILED');
    console.error(auditReport.statusMessage);
    if (auditReport.firstIncorrectObject || refReport.firstIncorrectObject) {
      console.error('FIRST INCORRECT OBJECT:', JSON.stringify(auditReport.firstIncorrectObject ?? refReport.firstIncorrectObject, null, 2));
    }
  } else {
    console.log('CANONICAL PASSED: 100% Mathematically Correct Alessandro Chiodo (2021) Geometry.');
  }

  // Ensure output reports directories exist
  const reportsDir = path.join(__dirname, '..', 'reports');
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }

  // Copy paper_mapping.md to reports/
  const paperMappingPath = path.join(__dirname, '..', 'docs', 'paper_mapping.md');
  if (fs.existsSync(paperMappingPath)) {
    fs.copyFileSync(paperMappingPath, path.join(reportsDir, 'paper_mapping.md'));
  }

  // 1. Export SVG files for strict rendering modes and reference comparison overlays
  const canonicalSVG = YantraModeRenderer.renderMode(compiled, 'final_canonical');
  const constructionSVG = YantraModeRenderer.renderMode(compiled, 'construction');
  const trianglesSVG = YantraModeRenderer.renderMode(compiled, 'primary_triangles');
  const topologySVG = YantraModeRenderer.renderMode(compiled, 'topology');

  fs.writeFileSync(path.join(reportsDir, 'canonical.svg'), canonicalSVG);
  fs.writeFileSync(path.join(reportsDir, 'construction.svg'), constructionSVG);
  fs.writeFileSync(path.join(reportsDir, 'triangles.svg'), trianglesSVG);
  fs.writeFileSync(path.join(reportsDir, 'topology.svg'), topologySVG);

  fs.writeFileSync(path.join(reportsDir, 'reference_overlay.svg'), refReport.overlaySvg);
  fs.writeFileSync(path.join(reportsDir, 'difference_heatmap.svg'), refReport.diffHeatmapSvg);

  // 2. Export CSV Tables (vertex_table.csv, intersection_table.csv, face_table.csv)
  let vertexCSV = 'id,direction,left_base_x,left_base_y,right_base_x,right_base_y,apex_x,apex_y,base_width,height,area\n';
  constr.primaryTriangles.forEach(t => {
    const w = Math.abs(t.rightBase.x - t.leftBase.x);
    const h = Math.abs(t.apex.y - t.leftBase.y);
    vertexCSV += `${t.id},${t.direction},${t.leftBase.x.toFixed(6)},${t.leftBase.y.toFixed(6)},${t.rightBase.x.toFixed(6)},${t.rightBase.y.toFixed(6)},${t.apex.x.toFixed(6)},${t.apex.y.toFixed(6)},${w.toFixed(6)},${h.toFixed(6)},${t.area.toFixed(6)}\n`;
  });
  fs.writeFileSync(path.join(reportsDir, 'vertex_table.csv'), vertexCSV);

  let intersectionCSV = 'node_id,x,y,derivation_method,step_origin\n';
  dbg.getStep(80).newPoints.forEach(pt => {
    intersectionCSV += `${pt.id},${pt.x.toFixed(6)},${pt.y.toFixed(6)},Analytical Line Intersection,Step80\n`;
  });
  fs.writeFileSync(path.join(reportsDir, 'intersection_table.csv'), intersectionCSV);

  let faceCSV = 'face_id,face_number,layer_id,sanskrit_name,vertices_count\n';
  topology.polygons.forEach((p, idx) => {
    faceCSV += `${p.id},${idx + 1},${p.layerId},"${p.nameSanskrit}",${p.points.length}\n`;
  });
  fs.writeFileSync(path.join(reportsDir, 'face_table.csv'), faceCSV);

  // 3. Export JSON Reports
  fs.writeFileSync(path.join(reportsDir, 'euler_proof.json'), JSON.stringify(topology.eulerProof, null, 2));

  fs.writeFileSync(path.join(reportsDir, 'topology_report.json'), JSON.stringify({
    totalExtractedFaces: topology.totalExtractedTriangles,
    is43TrianglesDiscovered: topology.is43TrianglesTopologyVerified,
    avaranamBreakdown: topology.avaranamCounts,
    nodesCount: topology.nodesCount,
    edgesCount: topology.edgesCount,
    facesCount: topology.facesCount
  }, null, 2));

  fs.writeFileSync(path.join(reportsDir, 'constraint_report.json'), JSON.stringify(constraints, null, 2));

  fs.writeFileSync(path.join(reportsDir, 'overlay_metrics.json'), JSON.stringify({
    isMatchingFigure1: refReport.isMatchingFigure1,
    isMatchingFigure11: refReport.isMatchingFigure11,
    maxError: refReport.maxError,
    meanError: refReport.meanError,
    rmsError: refReport.rmsError,
    hausdorffDistance: refReport.hausdorffDistance,
    chamferDistance: refReport.chamferDistance,
    firstIncorrectObject: refReport.firstIncorrectObject ?? null
  }, null, 2));

  const stepsList = [];
  for (let i = 1; i <= dbg.getTotalSteps(); i++) {
    stepsList.push(dbg.getStep(i));
  }
  fs.writeFileSync(path.join(reportsDir, 'construction_steps.json'), JSON.stringify(stepsList, null, 2));

  const dependencyGraph = {
    totalNodes: dbg.getTotalSteps(),
    nodes: stepsList.map(s => ({
      stepId: s.stepId,
      theorem: s.theorem,
      equation: s.equation,
      dependencies: s.dependencyNodes
    }))
  };
  fs.writeFileSync(path.join(reportsDir, 'dependency_graph.json'), JSON.stringify(dependencyGraph, null, 2));

  fs.writeFileSync(path.join(reportsDir, 'geometry_proof.json'), JSON.stringify({
    engineName: 'Analytical Computational Geometry Engine Implementing Alessandro Chiodo (2021)',
    specification: 'Alessandro Chiodo (2021) Comptes Rendus Mathématique, Vol. 359',
    derivationMethod: 'Direct Analytical Equations & PSLG Face Discovery',
    trianglesCount: 9,
    subTrianglesCount: topology.totalExtractedTriangles,
    isAuthenticChiodoGeometry: auditReport.isAuthenticChiodoGeometry,
    overallScore: auditReport.overallScore,
    status: auditReport.isAuthenticChiodoGeometry && refReport.isMatchingFigure11 ? 'CANONICAL PASSED' : 'CANONICAL FAILED'
  }, null, 2));

  console.log('\nGenerated all Proof Package Artifacts in reports/:');
  console.log('1.  paper_mapping.md');
  console.log('2.  geometry_proof.json');
  console.log('3.  construction_steps.json');
  console.log('4.  dependency_graph.json');
  console.log('5.  constraint_report.json');
  console.log('6.  topology_report.json');
  console.log('7.  euler_proof.json');
  console.log('8.  overlay_metrics.json');
  console.log('9.  vertex_table.csv');
  console.log('10. intersection_table.csv');
  console.log('11. face_table.csv');
  console.log('12. canonical.svg');
  console.log('13. construction.svg');
  console.log('14. triangles.svg');
  console.log('15. topology.svg');
  console.log('16. reference_overlay.svg');
  console.log('17. difference_heatmap.svg');
}

generateFullProofPackage().catch(err => {
  console.error('Error generating proof package:', err);
});
