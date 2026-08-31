import { YantraDSL, CompiledGeometryModel } from '../types/dsl';
export declare class GeometryCompiler {
    private static readonly VIEWPORT_SIZE;
    private static readonly CENTER;
    static readonly PRIMARY_TRIANGLE_COLORS: Record<string, string>;
    /**
     * Procedurally compile a YantraDSL object into an authentic Shastric vector geometry model
     */
    static compile(dsl: YantraDSL): CompiledGeometryModel;
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
    private static compileShriPrimaryLinesWithDistinctColors;
    /**
     * Kuber 3x3 Magic Square Grid Matrix
     */
    private static compileKuberMagicSquareGrid;
    /**
     * Navagraha 9 Planetary Spheres Matrix
     */
    private static compileNavagrahaOrbitalSpheres;
    /**
     * Vastu Purusha 81-Grid Matrix
     */
    private static compileVastuPurusha81Grid;
    /**
     * Generate SVG path string for Bhupura gate enclosure
     */
    private static compileBhupuraPath;
    /**
     * Generate SVG path string for a Lotus Petal Ring
     */
    private static compileLotusRingPath;
    /**
     * Generate Star Polygon
     */
    private static compileStarPolygon;
    /**
     * Generic triangle generator
     */
    private static compileGenericTriangles;
}
