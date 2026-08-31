import { YantraDSL } from './types';

export class YantraDSLRegistry {
  private static registry: Map<string, YantraDSL> = new Map();

  public static register(dsl: YantraDSL): void {
    this.registry.set(dsl.id, dsl);
  }

  public static registerAll(dataset: YantraDSL[]): void {
    dataset.forEach(dsl => this.registry.set(dsl.id, dsl));
  }

  public static getById(id: string): YantraDSL | undefined {
    return this.registry.get(id);
  }

  public static getAll(): YantraDSL[] {
    return Array.from(this.registry.values());
  }

  public static has(id: string): boolean {
    return this.registry.has(id);
  }
}
