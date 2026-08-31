"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SGOSTransactionEngine = void 0;
class SGOSTransactionEngine {
    history = [];
    pointer = -1;
    branches = new Map();
    /** Push snapshot to history */
    snapshot(label, sgm) {
        // Truncate redo history if pointer is behind
        if (this.pointer < this.history.length - 1) {
            this.history = this.history.slice(0, this.pointer + 1);
        }
        const snap = {
            snapshotId: `snap_${Date.now()}_${this.history.length}`,
            timestamp: new Date().toISOString(),
            label,
            sgm
        };
        this.history.push(snap);
        this.pointer = this.history.length - 1;
        return snap;
    }
    /** Undo to previous snapshot */
    undo() {
        if (this.pointer > 0) {
            this.pointer--;
            return this.history[this.pointer];
        }
        return null;
    }
    /** Redo to next snapshot */
    redo() {
        if (this.pointer < this.history.length - 1) {
            this.pointer++;
            return this.history[this.pointer];
        }
        return null;
    }
    /** Time travel debugging to specific index */
    timeTravel(index) {
        if (index >= 0 && index < this.history.length) {
            this.pointer = index;
            return this.history[this.pointer];
        }
        return null;
    }
    /** Create named branch */
    branch(branchName) {
        const branchHistory = [...this.history];
        this.branches.set(branchName, branchHistory);
    }
    /** Merge branch */
    merge(branchName) {
        const branchHistory = this.branches.get(branchName);
        if (branchHistory && branchHistory.length > 0) {
            const last = branchHistory[branchHistory.length - 1];
            return this.snapshot(`Merge from ${branchName}`, last.sgm);
        }
        return null;
    }
    /** Current state pointer index */
    getCurrentIndex() {
        return this.pointer;
    }
    /** Full history length */
    getHistoryLength() {
        return this.history.length;
    }
}
exports.SGOSTransactionEngine = SGOSTransactionEngine;
