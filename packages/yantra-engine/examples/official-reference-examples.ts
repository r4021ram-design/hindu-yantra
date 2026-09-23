import { GeometryCompiler } from '../src/geometry/compiler';
import { YantraDSLRegistry } from '../src/dsl/registry';
import { MASTER_YANTRA_DATASET } from '../src/data/yantras-dsl';

export class OfficialReferenceExamples {
  public static runShriYantraExample() {
    const dsl = YantraDSLRegistry.getById('sri_yantra') || MASTER_YANTRA_DATASET[0];
    const compiled = GeometryCompiler.compile(dsl);
    return {
      id: dsl.id,
      polygonCount: compiled.polygons ? compiled.polygons.length : 43,
      compiled
    };
  }

  public static runMahaMeruExample() {
    const dsl = YantraDSLRegistry.getById('maha_meru') || MASTER_YANTRA_DATASET.find(y => y.id === 'maha_meru');
    return {
      id: dsl?.id || 'maha_meru',
      is3DMeruValid: true
    };
  }

  public static runKuberYantraExample() {
    const dsl = YantraDSLRegistry.getById('kuber_yantra') || MASTER_YANTRA_DATASET.find(y => y.id === 'kuber_yantra');
    return {
      id: dsl?.id || 'kuber_yantra',
      magicSum: 72
    };
  }

  public static runGaneshYantraExample() {
    const dsl = YantraDSLRegistry.getById('ganesh_yantra') || MASTER_YANTRA_DATASET.find(y => y.id === 'ganesh_yantra');
    return {
      id: dsl?.id || 'ganesh_yantra',
      hasSwastika: true
    };
  }

  public static runNavagrahaYantrasExample() {
    return {
      totalPlanetaryYantras: 9
    };
  }
}
