import { TransactionSnapshot } from './types';
import { SolvedGeometryModel } from '../solver/types';

export class SGOSTransactionEngine {
  private history: TransactionSnapshot[] = [];
  private pointer: number = -1;
  private branches: Map<string, TransactionSnapshot[]> = new Map();

  /** Push snapshot to history */
  public snapshot(label: string, sgm: SolvedGeometryModel): TransactionSnapshot {
    // Truncate redo history if pointer is behind
    if (this.pointer < this.history.length - 1) {
      this.history = this.history.slice(0, this.pointer + 1);
    }

    const snap: TransactionSnapshot = {
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
  public undo(): TransactionSnapshot | null {
    if (this.pointer > 0) {
      this.pointer--;
      return this.history[this.pointer];
    }
    return null;
  }

  /** Redo to next snapshot */
  public redo(): TransactionSnapshot | null {
    if (this.pointer < this.history.length - 1) {
      this.pointer++;
      return this.history[this.pointer];
    }
    return null;
  }

  /** Time travel debugging to specific index */
  public timeTravel(index: number): TransactionSnapshot | null {
    if (index >= 0 && index < this.history.length) {
      this.pointer = index;
      return this.history[this.pointer];
    }
    return null;
  }

  /** Create named branch */
  public branch(branchName: string): void {
    const branchHistory = [...this.history];
    this.branches.set(branchName, branchHistory);
  }

  /** Merge branch */
  public merge(branchName: string): TransactionSnapshot | null {
    const branchHistory = this.branches.get(branchName);
    if (branchHistory && branchHistory.length > 0) {
      const last = branchHistory[branchHistory.length - 1];
      return this.snapshot(`Merge from ${branchName}`, last.sgm);
    }
    return null;
  }

  /** Current state pointer index */
  public getCurrentIndex(): number {
    return this.pointer;
  }

  /** Full history length */
  public getHistoryLength(): number {
    return this.history.length;
  }
}
