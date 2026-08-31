export declare class SGOSKernelFreeze {
    static readonly KERNEL_VERSION = "v1.0.0-sgos.frozen";
    static readonly IS_KERNEL_LOCKED = true;
    static readonly LOCKED_SUBSYSTEMS: ReadonlyArray<string>;
    /**
     * Asserts that the computational kernel is frozen.
     * Direct modifications to locked subsystems are strictly prohibited.
     */
    static assertKernelLocked(): void;
    static getLockInfo(): {
        version: string;
        locked: boolean;
        subsystems: readonly string[];
        extensionPolicy: string;
    };
}
