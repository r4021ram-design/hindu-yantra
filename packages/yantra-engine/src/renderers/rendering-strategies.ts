import { CompiledGeometryModel } from '../types/dsl';
import { SVGRenderOptions } from './svg-renderer';

export interface IRenderingStrategy {
  render(compiled: CompiledGeometryModel, options: SVGRenderOptions): string;
}

export class CanonicalBlueprintRendererStrategy implements IRenderingStrategy {
  public render(compiled: CompiledGeometryModel, options: SVGRenderOptions): string {
    const strokeW = options.strokeWidth || 1;
    const widthAttr = options.width ? `width="${options.width}"` : 'width="100%"';
    const heightAttr = options.height ? `height="${options.height}"` : 'height="100%"';
    const { minX, minY, width, height } = compiled.viewBox;

    let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${minX} ${minY} ${width} ${height}" ${widthAttr} ${heightAttr} style="background: #FFFFFF; border-radius: 16px;">\n`;
    svg += `  <defs>\n`;
    svg += `    <clipPath id="yoniInnerCircleClip">\n`;
    svg += `      <circle cx="500" cy="500" r="220" />\n`;
    svg += `    </clipPath>\n`;
    svg += `  </defs>\n`;

    // Render 43 Sub-Triangle Polygons (clean black outlines matching Chiodo Figure 1)
    if (compiled.polygons && compiled.polygons.length > 0) {
      for (const poly of compiled.polygons) {
        const ptsStr = poly.points.map(pt => `${pt.x},${pt.y}`).join(' ');
        svg += `  <polygon id="face_${poly.id}" points="${ptsStr}" fill="none" stroke="#000000" stroke-width="${strokeW}" />\n`;
      }
    }

    // Render Concentric Circles (no fill, uniform black stroke)
    for (const c of compiled.circles) {
      if (c.id === 'bindu') continue;
      svg += `  <circle id="${c.id}" cx="${c.cx}" cy="${c.cy}" r="${c.r}" fill="none" stroke="#000000" stroke-width="${strokeW}" opacity="1.0" />\n`;
    }

    // Render Paths (Lotus rings - no fill, uniform black stroke; skip untrimmed primary triangle overlays)
    for (const p of compiled.paths) {
      if (p.id.startsWith('shri_primary_')) continue;
      svg += `  <path id="${p.id}" d="${p.d}" fill="none" stroke="#000000" stroke-width="${strokeW}" opacity="1.0" />\n`;
    }

    // Render Bindu Point (solid black center point)
    for (const c of compiled.circles) {
      if (c.id !== 'bindu') continue;
      svg += `  <circle id="${c.id}" cx="${c.cx}" cy="${c.cy}" r="${c.r}" fill="#000000" stroke="#000000" stroke-width="${strokeW}" opacity="1.0" />\n`;
    }

    // Render Points & Labels
    if (options.showLabels) {
      for (const pt of compiled.points) {
        svg += `  <circle cx="${pt.x}" cy="${pt.y}" r="3" fill="#000000" />\n`;
        if (pt.label) {
          svg += `  <text x="${pt.x + 8}" y="${pt.y - 8}" fill="#000000" font-size="12" font-family="Outfit, monospace">${pt.label}</text>\n`;
        }
      }
    }

    svg += `</svg>`;
    return svg;
  }
}

export class EngineeringBlueprintRendererStrategy implements IRenderingStrategy {
  public render(compiled: CompiledGeometryModel, options: SVGRenderOptions): string {
    const strokeW = options.strokeWidth || 1.5;
    const widthAttr = options.width ? `width="${options.width}"` : 'width="100%"';
    const heightAttr = options.height ? `height="${options.height}"` : 'height="100%"';
    const { minX, minY, width, height } = compiled.viewBox;

    let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${minX} ${minY} ${width} ${height}" ${widthAttr} ${heightAttr} style="background: #0F172A; border-radius: 16px;">\n`;

    for (const c of compiled.circles) {
      if (c.id === 'bindu') continue;
      svg += `  <circle id="${c.id}" cx="${c.cx}" cy="${c.cy}" r="${c.r}" fill="none" stroke="#38BDF8" stroke-width="${strokeW}" opacity="0.9" />\n`;
    }

    for (const p of compiled.paths) {
      svg += `  <path id="${p.id}" d="${p.d}" fill="none" stroke="#38BDF8" stroke-width="${strokeW}" opacity="0.9" />\n`;
    }

    for (const c of compiled.circles) {
      if (c.id !== 'bindu') continue;
      svg += `  <circle id="${c.id}" cx="${c.cx}" cy="${c.cy}" r="${c.r}" fill="#F43F5E" stroke="#F43F5E" stroke-width="2" />\n`;
    }

    svg += `</svg>`;
    return svg;
  }
}

export class PrimaryTrianglesOnlyStrategy implements IRenderingStrategy {
  public render(compiled: CompiledGeometryModel, options: SVGRenderOptions): string {
    const { YantraModeRenderer } = require('./rendering-modes');
    return YantraModeRenderer.renderMode(compiled, 'primary_triangles', options);
  }
}

export class YantraRenderingStrategyFactory {
  public static getStrategy(theme?: string): IRenderingStrategy | null {
    if (theme === 'canonical_blueprint') {
      return new CanonicalBlueprintRendererStrategy();
    }
    if (theme === 'engineering_blueprint') {
      return new EngineeringBlueprintRendererStrategy();
    }
    if (theme === 'primary_triangles') {
      return new PrimaryTrianglesOnlyStrategy();
    }
    return null; // Fallback to default SVG renderer
  }
}
