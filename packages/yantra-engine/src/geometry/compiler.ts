import { YantraDSL, CompiledGeometryModel, Point2D, Polygon2D } from '../types/dsl';
import { AnalyticalSolver } from '../solver/analytical-solver';
import { ChiodoConstructionEngine } from '../construction/chiodo-construction-engine';
import { ChiodoApolloniusSolver } from '../solver/chiodo-apollonius-solver';
import { TopologyEngine } from '../topology/topology-engine';
import { GeometryValidator } from './validator';

export class GeometryCompiler {
  private static readonly VIEWPORT_SIZE = 1000;
  private static readonly CENTER = 500;

  public static readonly PRIMARY_TRIANGLE_COLORS: Record<string, string> = {
    t7: '#FF7F00', // Orange (Top Shiva Apex)
    t3: '#00AEEF', // Cyan / Light Blue (Bottom Shakti Apex)
    t1: '#555555', // Grey (Lower Shakti)
    t2: '#800080', // Purple / Violet (Lower Inner Shakti)
    t6: '#FF0000', // Red (Upper Shiva)
    t8: '#8B4513', // Brown (Mid Shiva)
    t9: '#FF69B4', // Pink (Inner Shiva)
    t4: '#006400', // Dark Green (Mid Inner Shakti)
    t5: '#FFD700'  // Yellow (Innermost Shakti enclosing Bindu)
  };

  /**
   * Procedurally compile a YantraDSL object into an authentic Shastric vector geometry model
   */
  public static compile(dsl: YantraDSL): CompiledGeometryModel {
    const polygons: Polygon2D[] = [];
    const circles: { id: string; cx: number; cy: number; r: number; layerId: string }[] = [];
    const paths: { id: string; d: string; layerId: string; fill?: string; stroke?: string; strokeWidth?: number }[] = [];
    const points: { id: string; x: number; y: number; label?: string; layerId: string }[] = [];
    const layerNames: string[] = [];

    let totalTriangles = 0;
    let totalCircles = 0;
    let totalPetals = 0;
    let totalSquares = 0;

    const baseRadius = (this.VIEWPORT_SIZE / 2) * 0.88;

    // 1. Compile Bhupura (Outer Gates)
    if (dsl.geometryRules.bhupura?.enabled) {
      const bhupuraLayerId = 'bhupura';
      layerNames.push('Bhupura');
      totalSquares += dsl.geometryRules.bhupura.steps;

      const bhPath = this.compileBhupuraPath(dsl.geometryRules.bhupura.steps, baseRadius);
      paths.push({
        id: 'bhupura_outer',
        d: bhPath,
        layerId: bhupuraLayerId,
        stroke: '#D8A44C',
        fill: 'none'
      });
    }

    // 2. Compile Concentric Circles
    for (const cSpec of dsl.geometryRules.concentricCircles) {
      const radius = baseRadius * cSpec.radiusRatio;
      circles.push({
        id: cSpec.id,
        cx: this.CENTER,
        cy: this.CENTER,
        r: radius,
        layerId: cSpec.id
      });
      if (!layerNames.includes(cSpec.sanskritName)) {
        layerNames.push(cSpec.sanskritName);
      }
      totalCircles++;
    }

    // 3. Compile Lotus Rings
    for (const lotus of dsl.geometryRules.lotusRings) {
      const layerId = lotus.id;
      if (!layerNames.includes(lotus.sanskritName)) {
        layerNames.push(lotus.sanskritName);
      }
      totalPetals += lotus.petalCount;

      const innerR = baseRadius * lotus.innerRadiusRatio;
      const outerR = baseRadius * lotus.outerRadiusRatio;
      const petalPath = this.compileLotusRingPath(lotus.petalCount, innerR, outerR, lotus.shape);

      paths.push({
        id: `lotus_${lotus.id}`,
        d: petalPath,
        layerId: layerId,
        stroke: '#F28C28',
        fill: 'none'
      });
    }

    // 4. Compile Star Polygons (e.g. Shatkona 6-Point Star)
    if (dsl.geometryRules.starPolygons && dsl.geometryRules.starPolygons.length > 0) {
      for (const star of dsl.geometryRules.starPolygons) {
        const starLayerId = star.id;
        if (!layerNames.includes(star.sanskritName)) {
          layerNames.push(star.sanskritName);
        }
        const r = baseRadius * star.radiusRatio;
        const starPaths = this.compileStarPolygon(star.points, r);
        starPaths.forEach((sp, idx) => {
          paths.push({
            id: `star_${star.id}_${idx}`,
            d: sp,
            layerId: starLayerId,
            stroke: '#FFD700',
            fill: 'none'
          });
        });
        totalTriangles += star.points;
      }
    }

    // 5. Compile Triangle Sets
    if (dsl.geometryRules.triangleSets && dsl.geometryRules.triangleSets.length > 0) {
      for (const tSet of dsl.geometryRules.triangleSets) {
        const tLayerId = tSet.id;

        if (tSet.interlocking && (dsl.id.includes('sri') || dsl.id.includes('meru'))) {
          // AUTHENTIC SHASTRIC SHRI YANTRA: Construct via Chiodo Engine & Topology Engine
          // Scale to inner reference circle radius (0.50 * baseRadius) so all 9 triangles are strictly bounded inside the inner circle
          const sriScaleR = baseRadius * 0.50;
          const construction = ChiodoConstructionEngine.construct(ChiodoApolloniusSolver.DEFAULT_PARAMETERS);
          const topology = TopologyEngine.extract43SubTriangles(construction.primaryTriangles, sriScaleR, { x: this.CENTER, y: this.CENTER });

          // Layer names for 5 Shastric Chakras
          const chakraNames = [
            'चतुर्दशार (१४ त्रिकोण - सर्वसौभाग्यदायक चक्र)',
            'बहिरन्तर्दशार (१० त्रिकोण - सर्वार्थसाधक चक्र)',
            'अन्तर्दशार (१० त्रिकोण - सर्वरक्षाकर चक्र)',
            'अष्टार (८ त्रिकोण - सर्वरोगहर चक्र)',
            'केन्द्रीय त्रिकोण (सर्वसिद्धिप्रद चक्र)'
          ];
          chakraNames.forEach(cn => {
            if (!layerNames.includes(cn)) layerNames.push(cn);
          });

          // Store all 43 canonical sub-triangle polygons with unique IDs
          topology.polygons.forEach((st) => {
            polygons.push(st);
          });

          // Render 9 primary interlocking triangles in distinct colors without merging lines
          const primaryLines = this.compileShriPrimaryLinesWithDistinctColors(construction, sriScaleR);
          primaryLines.forEach((pl) => {
            paths.push({
              id: `shri_primary_${pl.id}`,
              d: pl.d,
              layerId: tLayerId,
              stroke: pl.color,
              fill: 'none',
              strokeWidth: 2
            });

            // Add text labels for every primary triangle t1..t9
            points.push({
              id: `label_${pl.id}`,
              x: pl.labelPos.x,
              y: pl.labelPos.y,
              label: pl.id.toUpperCase(),
              layerId: tLayerId
            });
          });

          // Render all intersection nodes as distinct points
          const scaleR = sriScaleR;
          construction.primaryTriangles.forEach(t => {
            const lx = Math.round((this.CENTER + t.leftBase.x * 2 * scaleR) * 100) / 100;
            const ly = Math.round((this.CENTER - (t.leftBase.y - 0.5) * 2 * scaleR) * 100) / 100;
            const rx = Math.round((this.CENTER + t.rightBase.x * 2 * scaleR) * 100) / 100;
            const ry = Math.round((this.CENTER - (t.rightBase.y - 0.5) * 2 * scaleR) * 100) / 100;
            const ax = Math.round((this.CENTER + t.apex.x * 2 * scaleR) * 100) / 100;
            const ay = Math.round((this.CENTER - (t.apex.y - 0.5) * 2 * scaleR) * 100) / 100;

            points.push({ id: `node_${t.id}_left`, x: lx, y: ly, label: `${t.id}_L`, layerId: tLayerId });
            points.push({ id: `node_${t.id}_right`, x: rx, y: ry, label: `${t.id}_R`, layerId: tLayerId });
            points.push({ id: `node_${t.id}_apex`, x: ax, y: ay, label: `${t.id}_A`, layerId: tLayerId });
          });

          totalTriangles += topology.totalExtractedTriangles;
        } else {
          // Generic Triangle Set
          const baseR = baseRadius * tSet.baseRadiusRatio;
          const apexR = baseRadius * tSet.apexRadiusRatio;
          const genericTriangles = this.compileGenericTriangles(tSet.count, baseR, apexR, tSet.direction);
          genericTriangles.forEach((gt, idx) => {
            paths.push({
              id: `tri_${tSet.id}_${idx}`,
              d: gt.d,
              layerId: tLayerId,
              stroke: '#FFD700',
              fill: 'none'
            });
            polygons.push(gt.polygon);
          });
          totalTriangles += tSet.count;
        }
      }
    }

    // 6. Special Shastric Yantra Generators (Kuber, Navagraha, Vastu)
    if (dsl.id.includes('kuber')) {
      const kuberGrid = this.compileKuberMagicSquareGrid(baseRadius * 0.45);
      paths.push(...kuberGrid.paths);
      points.push(...kuberGrid.points);
      layerNames.push('कुबेर ९ अंक यन्त्र ग्रिड (योग ७२)');
    }

    if (dsl.id.includes('navagraha')) {
      const grahaSpheres = this.compileNavagrahaOrbitalSpheres(baseRadius * 0.55);
      circles.push(...grahaSpheres.circles);
      points.push(...grahaSpheres.points);
      layerNames.push('९ ग्रह मण्डल');
    }

    if (dsl.id.includes('vastu')) {
      const vastuGrid = this.compileVastuPurusha81Grid(baseRadius * 0.5);
      paths.push(...vastuGrid.paths);
      layerNames.push('८१ पद वास्तु पुरुष मण्डल');
    }

    // 7. Compile Central Bindu
    if (dsl.geometryRules?.bindu) {
      const binduR = baseRadius * dsl.geometryRules.bindu.radiusRatio;
      circles.push({
        id: 'bindu',
        cx: this.CENTER,
        cy: this.CENTER,
        r: binduR,
        layerId: 'bindu'
      });
      points.push({
        id: 'bindu_point',
        x: this.CENTER,
        y: this.CENTER,
        label: dsl.geometryRules.bindu.sanskritName,
        layerId: 'bindu'
      });
      if (dsl.geometryRules.bindu.sanskritName && !layerNames.includes(dsl.geometryRules.bindu.sanskritName)) {
        layerNames.push(dsl.geometryRules.bindu.sanskritName);
      }
    }

    const model: CompiledGeometryModel = {
      yantraId: dsl.id,
      viewBox: { minX: 0, minY: 0, width: this.VIEWPORT_SIZE, height: this.VIEWPORT_SIZE },
      polygons,
      circles,
      paths,
      points,
      layerNames,
      metrics: {
        totalTriangles,
        totalCircles,
        totalPetals,
        totalSquares,
        goldenRatioRatio: 1.6180339887,
        symmetryAxes: dsl.geometryRules?.bhupura?.enabled ? 4 : 8,
        areaCoverage: 0.785
      },
      validationReport: {
        isAuthentic: true,
        score: 100,
        trianglesValidated: totalTriangles,
        circlesValidated: totalCircles,
        petalsValidated: totalPetals,
        symmetryVerified: true,
        binduCentered: true,
        selfIntersectionErrors: [],
        evidenceBadges: {
          geometryVerified: true,
          scriptureLinked: true,
          traditionIdentified: true,
          commentaryAvailable: true,
          researchAvailable: true,
          manufacturingReady: true
        }
      }
    };

    model.validationReport = GeometryValidator.validate(dsl, model);
    return model;
  }

  /**
   * Primary 9 triangles rendered in unique distinct colors:
   * t1 = Red (#FF0000)
   * t2 = Blue (#0000FF)
   * t3 = Green (#008000)
   * t4 = Orange (#FFA500)
   * t5 = Purple (#800080)
   * t6 = Cyan (#00FFFF)
   * t7 = Brown (#A52A2A)
   * t8 = Pink (#FFC0CB)
   * t9 = Black (#000000)
   */
  private static compileShriPrimaryLinesWithDistinctColors(
    construction: ReturnType<typeof ChiodoConstructionEngine.construct>,
    scaleR: number
  ): { id: string; d: string; color: string; labelPos: { x: number; y: number } }[] {
    const cx = this.CENTER;
    const cy = this.CENTER;

    return construction.primaryTriangles.map(t => {
      const lx = Math.round((cx + t.leftBase.x * 2 * scaleR) * 100) / 100;
      const ly = Math.round((cy - (t.leftBase.y - 0.5) * 2 * scaleR) * 100) / 100;

      const rx = Math.round((cx + t.rightBase.x * 2 * scaleR) * 100) / 100;
      const ry = Math.round((cy - (t.rightBase.y - 0.5) * 2 * scaleR) * 100) / 100;

      const ax = Math.round((cx + t.apex.x * 2 * scaleR) * 100) / 100;
      const ay = Math.round((cy - (t.apex.y - 0.5) * 2 * scaleR) * 100) / 100;

      const color = this.PRIMARY_TRIANGLE_COLORS[t.id] ?? '#D8A44C';

      return {
        id: t.id,
        d: `M ${lx} ${ly} L ${rx} ${ry} L ${ax} ${ay} Z`,
        color,
        labelPos: { x: Math.round((lx + rx) / 2), y: ly }
      };
    });
  }

  /**
   * Kuber 3x3 Magic Square Grid Matrix
   */
  private static compileKuberMagicSquareGrid(size: number): { paths: { id: string; d: string; layerId: string; stroke?: string }[]; points: { id: string; x: number; y: number; label: string; layerId: string }[] } {
    const cx = this.CENTER;
    const cy = this.CENTER;
    const half = size / 2;

    const paths: { id: string; d: string; layerId: string; stroke?: string }[] = [];
    const points: { id: string; x: number; y: number; label: string; layerId: string }[] = [];

    paths.push({
      id: 'kuber_grid_box',
      d: `M ${cx - half} ${cy - half} H ${cx + half} V ${cy + half} H ${cx - half} Z`,
      layerId: 'kuber_grid',
      stroke: '#FFD700'
    });

    const step = size / 3;
    paths.push({ id: 'kuber_v1', d: `M ${cx - half + step} ${cy - half} V ${cy + half}`, layerId: 'kuber_grid', stroke: '#D8A44C' });
    paths.push({ id: 'kuber_v2', d: `M ${cx - half + step * 2} ${cy - half} V ${cy + half}`, layerId: 'kuber_grid', stroke: '#D8A44C' });
    paths.push({ id: 'kuber_h1', d: `M ${cx - half} ${cy - half + step} H ${cx + half}`, layerId: 'kuber_grid', stroke: '#D8A44C' });
    paths.push({ id: 'kuber_h2', d: `M ${cx - half} ${cy - half + step * 2} H ${cx + half}`, layerId: 'kuber_grid', stroke: '#D8A44C' });

    const kuberNumbers = [
      ['20', '27', '25'],
      ['21', '24', '27'],
      ['26', '21', '25']
    ];

    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        const px = cx - half + step * (c + 0.5);
        const py = cy - half + step * (r + 0.5);
        points.push({
          id: `kuber_num_${r}_${c}`,
          x: px,
          y: py,
          label: kuberNumbers[r][c],
          layerId: 'kuber_grid'
        });
      }
    }

    return { paths, points };
  }

  /**
   * Navagraha 9 Planetary Spheres Matrix
   */
  private static compileNavagrahaOrbitalSpheres(orbitR: number): { circles: { id: string; cx: number; cy: number; r: number; layerId: string }[]; points: { id: string; x: number; y: number; label: string; layerId: string }[] } {
    const cx = this.CENTER;
    const cy = this.CENTER;

    const circles: { id: string; cx: number; cy: number; r: number; layerId: string }[] = [];
    const points: { id: string; x: number; y: number; label: string; layerId: string }[] = [];

    circles.push({ id: 'graha_surya', cx, cy, r: 42, layerId: 'navagraha_orbit' });
    points.push({ id: 'lbl_surya', x: cx, y: cy, label: 'सूर्य (Sun)', layerId: 'navagraha_orbit' });

    const planets = [
      { name: 'चन्द्र (Moon)', angle: 0 },
      { name: 'मंगल (Mars)', angle: 45 },
      { name: 'बुध (Mercury)', angle: 90 },
      { name: 'गुरु (Jupiter)', angle: 135 },
      { name: 'शुक्र (Venus)', angle: 180 },
      { name: 'शनि (Saturn)', angle: 225 },
      { name: 'राहु (Rahu)', angle: 270 },
      { name: 'केतु (Ketu)', angle: 315 }
    ];

    planets.forEach((p, idx) => {
      const rad = (p.angle * Math.PI) / 180;
      const px = cx + orbitR * Math.sin(rad);
      const py = cy - orbitR * Math.cos(rad);

      circles.push({ id: `graha_${idx}`, cx: px, cy: py, r: 32, layerId: 'navagraha_orbit' });
      points.push({ id: `lbl_graha_${idx}`, x: px, y: py, label: p.name, layerId: 'navagraha_orbit' });
    });

    return { circles, points };
  }

  /**
   * Vastu Purusha 81-Grid Matrix
   */
  private static compileVastuPurusha81Grid(size: number): { paths: { id: string; d: string; layerId: string; stroke?: string }[] } {
    const cx = this.CENTER;
    const cy = this.CENTER;
    const half = size / 2;
    const step = size / 9;

    const paths: { id: string; d: string; layerId: string; stroke?: string }[] = [];

    paths.push({ id: 'vastu_box', d: `M ${cx - half} ${cy - half} H ${cx + half} V ${cy + half} H ${cx - half} Z`, layerId: 'vastu_81_grid', stroke: '#FFD700' });

    for (let i = 1; i < 9; i++) {
      paths.push({ id: `vastu_v_${i}`, d: `M ${cx - half + step * i} ${cy - half} V ${cy + half}`, layerId: 'vastu_81_grid', stroke: '#D8A44C' });
      paths.push({ id: `vastu_h_${i}`, d: `M ${cx - half} ${cy - half + step * i} H ${cx + half}`, layerId: 'vastu_81_grid', stroke: '#D8A44C' });
    }

    return { paths };
  }

  /**
   * Generate SVG path string for Bhupura gate enclosure
   */
  private static compileBhupuraPath(steps: number, radius: number): string {
    let d = '';
    const cx = this.CENTER;
    const cy = this.CENTER;

    const stepGap = radius * 0.045;
    const basePortalHalf = radius * 0.18;
    const tIndent = radius * 0.08;

    for (let step = 0; step < steps; step++) {
      const r = radius - step * stepGap;
      const halfW = r;
      const portalHalf = basePortalHalf - step * stepGap;

      d += `M ${cx - halfW} ${cy - halfW} `;
      d += `L ${cx - portalHalf} ${cy - halfW} `;
      d += `L ${cx - portalHalf} ${cy - halfW - tIndent} `;
      d += `L ${cx + portalHalf} ${cy - halfW - tIndent} `;
      d += `L ${cx + portalHalf} ${cy - halfW} `;
      d += `L ${cx + halfW} ${cy - halfW} `;

      d += `L ${cx + halfW} ${cy - portalHalf} `;
      d += `L ${cx + halfW + tIndent} ${cy - portalHalf} `;
      d += `L ${cx + halfW + tIndent} ${cy + portalHalf} `;
      d += `L ${cx + halfW} ${cy + portalHalf} `;
      d += `L ${cx + halfW} ${cy + halfW} `;

      d += `L ${cx + portalHalf} ${cy + halfW} `;
      d += `L ${cx + portalHalf} ${cy + halfW + tIndent} `;
      d += `L ${cx - portalHalf} ${cy + halfW + tIndent} `;
      d += `L ${cx - portalHalf} ${cy + halfW} `;
      d += `L ${cx - halfW} ${cy + halfW} `;

      d += `L ${cx - halfW} ${cy + portalHalf} `;
      d += `L ${cx - halfW - tIndent} ${cy + portalHalf} `;
      d += `L ${cx - halfW - tIndent} ${cy - portalHalf} `;
      d += `L ${cx - halfW} ${cy - portalHalf} Z `;
    }

    return d;
  }

  /**
   * Generate SVG path string for a Lotus Petal Ring
   */
  private static compileLotusRingPath(
    petalCount: number,
    innerR: number,
    outerR: number,
    shape: string
  ): string {
    let d = '';
    const cx = this.CENTER;
    const cy = this.CENTER;
    const angleStep = (2 * Math.PI) / petalCount;

    for (let i = 0; i < petalCount; i++) {
      const angleStart = i * angleStep;
      const angleMid = angleStart + angleStep / 2;
      const angleEnd = angleStart + angleStep;

      const p1x = cx + innerR * Math.cos(angleStart);
      const p1y = cy + innerR * Math.sin(angleStart);

      const pTipX = cx + outerR * Math.cos(angleMid);
      const pTipY = cy + outerR * Math.sin(angleMid);

      const p2x = cx + innerR * Math.cos(angleEnd);
      const p2y = cy + innerR * Math.sin(angleEnd);

      const cp1R = innerR + (outerR - innerR) * 0.65;
      const cp1Angle = angleStart + angleStep * 0.20;
      const cp1X = cx + cp1R * Math.cos(cp1Angle);
      const cp1Y = cy + cp1R * Math.sin(cp1Angle);

      const cp2R = innerR + (outerR - innerR) * 1.0;
      const cp2Angle = angleMid - angleStep * 0.05;
      const cp2X = cx + cp2R * Math.cos(cp2Angle);
      const cp2Y = cy + cp2R * Math.sin(cp2Angle);

      const cp3R = innerR + (outerR - innerR) * 1.0;
      const cp3Angle = angleMid + angleStep * 0.05;
      const cp3X = cx + cp3R * Math.cos(cp3Angle);
      const cp3Y = cy + cp3R * Math.sin(cp3Angle);

      const cp4R = innerR + (outerR - innerR) * 0.65;
      const cp4Angle = angleEnd - angleStep * 0.20;
      const cp4X = cx + cp4R * Math.cos(cp4Angle);
      const cp4Y = cy + cp4R * Math.sin(cp4Angle);

      d += `M ${p1x.toFixed(2)} ${p1y.toFixed(2)} C ${cp1X.toFixed(2)} ${cp1Y.toFixed(2)}, ${cp2X.toFixed(2)} ${cp2Y.toFixed(2)}, ${pTipX.toFixed(2)} ${pTipY.toFixed(2)} C ${cp3X.toFixed(2)} ${cp3Y.toFixed(2)}, ${cp4X.toFixed(2)} ${cp4Y.toFixed(2)}, ${p2x.toFixed(2)} ${p2y.toFixed(2)} Z `;
    }

    return d;
  }

  /**
   * Generate Star Polygon
   */
  private static compileStarPolygon(points: number, radius: number): string[] {
    const cx = this.CENTER;
    const cy = this.CENTER;
    const paths: string[] = [];

    if (points === 6) {
      const upP1 = { x: cx, y: cy - radius };
      const upP2 = { x: cx + radius * Math.sin(Math.PI / 3), y: cy + radius * Math.cos(Math.PI / 3) };
      const upP3 = { x: cx - radius * Math.sin(Math.PI / 3), y: cy + radius * Math.cos(Math.PI / 3) };
      paths.push(`M ${upP1.x} ${upP1.y} L ${upP2.x} ${upP2.y} L ${upP3.x} ${upP3.y} Z`);

      const downP1 = { x: cx, y: cy + radius };
      const downP2 = { x: cx + radius * Math.sin(Math.PI / 3), y: cy - radius * Math.cos(Math.PI / 3) };
      const downP3 = { x: cx - radius * Math.sin(Math.PI / 3), y: cy - radius * Math.cos(Math.PI / 3) };
      paths.push(`M ${downP1.x} ${downP1.y} L ${downP2.x} ${downP2.y} L ${downP3.x} ${downP3.y} Z`);
    } else {
      let d = `M `;
      for (let i = 0; i < points * 2; i++) {
        const r = i % 2 === 0 ? radius : radius * 0.5;
        const angle = (i * Math.PI) / points;
        const x = cx + r * Math.sin(angle);
        const y = cy - r * Math.cos(angle);
        d += `${x} ${y} ${i === 0 ? 'L ' : ''}`;
      }
      d += 'Z';
      paths.push(d);
    }

    return paths;
  }

  /**
   * Generic triangle generator
   */
  private static compileGenericTriangles(
    count: number,
    baseR: number,
    apexR: number,
    direction: string
  ): { d: string; polygon: Polygon2D }[] {
    const cx = this.CENTER;
    const cy = this.CENTER;
    const result: { d: string; polygon: Polygon2D }[] = [];

    const angleStep = (2 * Math.PI) / count;

    for (let i = 0; i < count; i++) {
      const angle = i * angleStep;
      const apexX = cx + apexR * Math.sin(angle);
      const apexY = cy - apexR * Math.cos(angle);

      const baseAngle1 = angle - angleStep / 3;
      const baseAngle2 = angle + angleStep / 3;

      const b1x = cx + baseR * Math.sin(baseAngle1);
      const b1y = cy - baseR * Math.cos(baseAngle1);

      const b2x = cx + baseR * Math.sin(baseAngle2);
      const b2y = cy - baseR * Math.cos(baseAngle2);

      const d = `M ${apexX} ${apexY} L ${b1x} ${b1y} L ${b2x} ${b2y} Z`;
      result.push({
        d,
        polygon: {
          id: `tri_${i}`,
          points: [{ x: apexX, y: apexY }, { x: b1x, y: b1y }, { x: b2x, y: b2y }],
          layerId: 'triangle_set',
          nameSanskrit: `त्रिकोण ${i + 1}`,
          nameEnglish: `Triangle ${i + 1}`
        }
      });
    }

    return result;
  }
}
