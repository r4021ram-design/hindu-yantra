import { CompiledGeometryModel, YantraDSL } from '../types/dsl';
import { GeometryCompiler } from '../geometry/compiler';
import { SGOSSceneGraph } from './scene-graph';
import { OptimizedSolvedGeometryModel } from '../optimization/types';
import { MASTER_YANTRA_DATASET } from '../data/yantras-dsl';
import { YantraRenderingStrategyFactory } from './rendering-strategies';
import { SGOSAvaranaCalloutEngine } from '../modules/avarana-callout-engine';

export interface SVGRenderOptions {
  activeLayerId?: string;
  navavaranaFilter?: number; // 1 to 9 Navavarana Avarana filter
  highlightElement?: 'bindu' | 'triangle' | 'lotus' | 'bhupura';
  theme?: 'gold' | 'parchment' | 'dark' | 'copper' | 'blueprint' | 'light' | 'canonical_blueprint' | 'traditional_poster' | 'multi_stroke_cad' | 'engineering_blueprint' | 'avarana_callout';
  strokeWidth?: number;
  width?: number | string;
  height?: number | string;
  showFills?: boolean;
  showLabels?: boolean;
  showCalloutLines?: boolean;
}

export class SVGRenderer {
  /**
   * Render a CompiledGeometryModel, YantraDSL, SGOSSceneGraph, or OSGM into a complete SVG string
   */
  public static renderToString(
    target: CompiledGeometryModel | YantraDSL | SGOSSceneGraph | OptimizedSolvedGeometryModel,
    options: SVGRenderOptions = {}
  ): string {
    let compiled: CompiledGeometryModel;

    if ('root' in target) {
      const dsl = MASTER_YANTRA_DATASET.find(y => y.id === target.yantraId) || MASTER_YANTRA_DATASET[0];
      compiled = GeometryCompiler.compile(dsl);
    } else if ('sgm' in target) {
      const dsl = MASTER_YANTRA_DATASET.find(y => y.id === target.sgm.dslId) || MASTER_YANTRA_DATASET[0];
      compiled = GeometryCompiler.compile(dsl);
    } else if ('geometryRules' in target) {
      compiled = GeometryCompiler.compile(target as YantraDSL);
    } else {
      compiled = target as CompiledGeometryModel;
    }

    const theme = options.theme || 'gold';
    const strategy = YantraRenderingStrategyFactory.getStrategy(theme);
    if (strategy) {
      return strategy.render(compiled, options);
    }
    const isCanonicalBlueprint = theme === 'canonical_blueprint';
    const isMultiStrokeCAD = theme === 'multi_stroke_cad';
    const isTraditionalPoster = theme === 'traditional_poster';

    const colors = this.getThemeColors(theme);
    const strokeW = isCanonicalBlueprint ? (options.strokeWidth || 1) : (options.strokeWidth || 2);
    const showFills = isCanonicalBlueprint ? false : (options.showFills !== false);
    const widthAttr = options.width ? `width="${options.width}"` : 'width="100%"';
    const heightAttr = options.height ? `height="${options.height}"` : 'height="100%"';

    const activeAvarana = options.navavaranaFilter || (options.activeLayerId ? this.getAvaranaIndexFromLayerId(options.activeLayerId) : 5);
    const showCalloutLines = options.showCalloutLines || (options.navavaranaFilter !== undefined && options.navavaranaFilter > 0);

    const minX = (showCalloutLines || isTraditionalPoster) ? -350 : compiled.viewBox.minX;
    const minY = (showCalloutLines || isTraditionalPoster) ? -50 : compiled.viewBox.minY;
    const width = (showCalloutLines || isTraditionalPoster) ? 1700 : compiled.viewBox.width;
    const height = (showCalloutLines || isTraditionalPoster) ? 1100 : compiled.viewBox.height;

    let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${minX} ${minY} ${width} ${height}" ${widthAttr} ${heightAttr} style="background: ${colors.bg}; border-radius: 16px;">\n`;

    // Defs for gradients & filters
    svg += `  <defs>\n`;
    if (!isCanonicalBlueprint) {
      svg += `    <linearGradient id="goldLinear" x1="0%" y1="0%" x2="100%" y2="100%">\n`;
      svg += `      <stop offset="0%" stop-color="#FFD700" />\n`;
      svg += `      <stop offset="50%" stop-color="#D8A44C" />\n`;
      svg += `      <stop offset="100%" stop-color="#996515" />\n`;
      svg += `    </linearGradient>\n`;
      svg += `    <linearGradient id="crimsonHighlight" x1="0%" y1="0%" x2="100%" y2="100%">\n`;
      svg += `      <stop offset="0%" stop-color="#EF4444" stop-opacity="0.95" />\n`;
      svg += `      <stop offset="100%" stop-color="#991B1B" stop-opacity="0.95" />\n`;
      svg += `    </linearGradient>\n`;
    }
    svg += `  </defs>\n`;

    // 1. Render 43 Sub-Triangle Face Polygons with Unique IDs
    if (compiled.polygons && compiled.polygons.length > 0) {
      svg += `  <!-- 43 Canonical Circuit Sub-Triangle Polygons -->\n`;
      compiled.polygons.forEach((poly, pIdx) => {
        const ptsStr = poly.points.map(pt => `${pt.x},${pt.y}`).join(' ');
        const fillOpacity = showFills ? (0.15 + (pIdx % 5) * 0.08).toFixed(2) : '0';
        svg += `  <polygon id="face_${poly.id}" points="${ptsStr}" fill="#F59E0B" fill-opacity="${fillOpacity}" stroke="#D8A44C" stroke-width="0.8" />\n`;
      });
    }

    // 2. Render Concentric Circles
    for (const c of compiled.circles) {
      if (c.id === 'bindu') continue;
      svg += `  <circle id="${c.id}" cx="${c.cx}" cy="${c.cy}" r="${c.r}" fill="none" stroke="${colors.stroke}" stroke-width="${strokeW}" opacity="1.0" />\n`;
    }

    // 3. Render 9 Primary Interlocking Triangles in Distinct Colors (No line merging)
    for (let idx = 0; idx < compiled.paths.length; idx++) {
      const p = compiled.paths[idx];
      const strokeColor = p.stroke || colors.stroke;
      const strokeWidth = p.strokeWidth || strokeW;
      svg += `  <path id="${p.id}" d="${p.d}" fill="none" stroke="${strokeColor}" stroke-width="${strokeWidth}" opacity="1.0" />\n`;
    }

    // 4. Render Bindu Point
    for (const c of compiled.circles) {
      if (c.id !== 'bindu') continue;
      svg += `  <circle id="${c.id}" cx="${c.cx}" cy="${c.cy}" r="${c.r}" fill="${colors.binduFill}" stroke="#FFD700" stroke-width="2.5" opacity="1.0" />\n`;
    }

    // 5. Render Points, Labels & Intersection Nodes
    if (options.showLabels !== false && compiled.points && compiled.points.length > 0) {
      svg += `  <!-- Intersection Nodes & Triangle Labels -->\n`;
      for (const pt of compiled.points) {
        if (pt.id.startsWith('label_')) {
          svg += `  <text x="${pt.x}" y="${pt.y - 6}" fill="#FFD700" font-size="14" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">${pt.label}</text>\n`;
        } else {
          svg += `  <circle id="${pt.id}" cx="${pt.x}" cy="${pt.y}" r="3" fill="#EF4444" stroke="#FFFFFF" stroke-width="0.8" />\n`;
        }
      }
    }

    svg += `</svg>`;
    return svg;
  }

  private static getAvaranaIndexFromLayerId(layerId: string): number {
    switch (layerId) {
      case 'bhupura': return 1;
      case 'shodashadala': return 2;
      case 'ashtadala': return 3;
      case 'chaturdasharam': return 4;
      case 'bahir_dasharam': return 5;
      case 'antar_dasharam': return 6;
      case 'ashtaragon': return 7;
      case 'central_trikona': return 8;
      case 'bindu': return 9;
      default: return 5;
    }
  }

  private static getThemeColors(theme: string) {
    switch (theme) {
      case 'canonical_blueprint':
        return { bg: '#FFFFFF', stroke: '#000000', dimStroke: '#000000', fill: 'none', binduFill: '#000000', text: '#000000' };
      case 'multi_stroke_cad':
        return { bg: '#FAFAFA', stroke: '#0F172A', dimStroke: '#64748B', fill: 'none', binduFill: '#0F172A', text: '#0F172A' };
      case 'traditional_poster':
        return { bg: '#FEF3C7', stroke: '#78350F', dimStroke: '#D97706', fill: '#FDE68A', binduFill: '#DC2626', text: '#451A03' };
      case 'parchment':
        return { bg: '#FFFDF9', stroke: '#D8A44C', dimStroke: '#EADBC8', binduFill: '#F28C28', text: '#4A2C17' };
      case 'dark':
        return { bg: '#160E09', stroke: '#F28C28', dimStroke: '#3A2B20', binduFill: '#FFD700', text: '#FFF9F2' };
      case 'copper':
        return { bg: '#1C0D0A', stroke: '#B87333', dimStroke: '#5C3A1A', fill: '#800020', binduFill: '#FF4500', text: '#F5D0A9' };
      case 'blueprint':
        return { bg: '#0F172A', stroke: '#38BDF8', dimStroke: '#1E3A8A', fill: '#1E293B', binduFill: '#F43F5E', text: '#E0F2FE' };
      case 'light':
        return { bg: '#FFFFFF', stroke: '#4A2C17', dimStroke: '#CBD5E1', fill: '#FFF9F2', binduFill: '#DC2626', text: '#0F172A' };
      case 'gold':
      default:
        return { bg: '#0D0905', stroke: 'url(#goldLinear)', dimStroke: '#4A3B2C', fill: 'url(#crimsonHighlight)', binduFill: '#FFD700', text: '#FEF08A' };
    }
  }
}
