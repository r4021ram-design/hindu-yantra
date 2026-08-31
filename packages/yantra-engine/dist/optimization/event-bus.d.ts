import { SGOSEvent, SGOSEventType, SGOSEventListener } from './types';
export declare class SGOSEventBus {
    private listeners;
    /** Subscribe to an event */
    subscribe<T = any>(eventType: SGOSEventType, listener: SGOSEventListener<T>): () => void;
    /** Emit event to subscribers */
    emit<T = any>(type: SGOSEventType, payload: T): SGOSEvent<T>;
    /** Clear all subscribers */
    clear(): void;
}
