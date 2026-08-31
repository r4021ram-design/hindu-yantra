"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SGOSKernelFreeze = void 0;
class SGOSKernelFreeze {
    static KERNEL_VERSION = 'v1.0.0-sgos.frozen';
    static IS_KERNEL_LOCKED = true;
    static LOCKED_SUBSYSTEMS = Object.freeze([
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
    static assertKernelLocked() {
        if (!this.IS_KERNEL_LOCKED) {
            throw new Error('KERNEL FREEZE VIOLATION: SGOS Kernel MUST remain locked.');
        }
    }
    static getLockInfo() {
        return {
            version: this.KERNEL_VERSION,
            locked: this.IS_KERNEL_LOCKED,
            subsystems: this.LOCKED_SUBSYSTEMS,
            extensionPolicy: 'Plugin-Only Extensibility via SGOSPlugin interface.'
        };
    }
}
exports.SGOSKernelFreeze = SGOSKernelFreeze;
