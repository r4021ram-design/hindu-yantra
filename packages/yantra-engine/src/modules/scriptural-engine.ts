import { YantraDSL } from '../types/dsl';

export class ScripturalEngine {
  public static getCitations(dsl: YantraDSL): any[] {
    return dsl.references?.citations || dsl.scripturalReferences || [];
  }
}
