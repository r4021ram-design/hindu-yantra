import { TransactionSnapshot } from './types';
import { SolvedGeometryModel } from '../solver/types';
export declare class SGOSTransactionEngine {
    private history;
    private pointer;
    private branches;
    /** Push snapshot to history */
    snapshot(label: string, sgm: SolvedGeometryModel): TransactionSnapshot;
    /** Undo to previous snapshot */
    undo(): TransactionSnapshot | null;
    /** Redo to next snapshot */
    redo(): TransactionSnapshot | null;
    /** Time travel debugging to specific index */
    timeTravel(index: number): TransactionSnapshot | null;
    /** Create named branch */
    branch(branchName: string): void;
    /** Merge branch */
    merge(branchName: string): TransactionSnapshot | null;
    /** Current state pointer index */
    getCurrentIndex(): number;
    /** Full history length */
    getHistoryLength(): number;
}
