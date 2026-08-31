export class SGOSKernelFreeze {
  public static readonly KERNEL_VERSION = 'v1.0.0-sgos.frozen';
  public static readonly IS_KERNEL_LOCKED = true;

  public static readonly LOCKED_SUBSYSTEMS: ReadonlyArray<string> = Object.freeze([
    'DSL Parser & Validator',
    'AST Expression Evaluator',
    'Geometry Graph Engine',
    'Computational Solver Kernel',
    'OSGM Optimization Engine',
    'Mathematical Verification Engine',
    'Public SDK Facade'
  ]);

  /**
   * Asserts that the computational kernel is frozen.
   * Direct modifications to locked subsystems are strictly prohibited.
   */
  public static assertKernelLocked(): void {
    if (!this.IS_KERNEL_LOCKED) {
      throw new Error('KERNEL FREEZE VIOLATION: SGOS Kernel MUST remain locked.');
    }
  }

  public static getLockInfo(): {
    version: string;
    locked: boolean;
    subsystems: readonly string[];
    extensionPolicy: string;
  } {
    return {
      version: this.KERNEL_VERSION,
      locked: this.IS_KERNEL_LOCKED,
      subsystems: this.LOCKED_SUBSYSTEMS,
      extensionPolicy: 'Plugin-Only Extensibility via SGOSPlugin interface.'
    };
  }
}
