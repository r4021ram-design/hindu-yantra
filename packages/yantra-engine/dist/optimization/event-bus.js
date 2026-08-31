"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SGOSEventBus = void 0;
class SGOSEventBus {
    listeners = new Map();
    /** Subscribe to an event */
    subscribe(eventType, listener) {
        let set = this.listeners.get(eventType);
        if (!set) {
            set = new Set();
            this.listeners.set(eventType, set);
        }
        set.add(listener);
        // Unsubscribe handle
        return () => {
            set?.delete(listener);
        };
    }
    /** Emit event to subscribers */
    emit(type, payload) {
        const event = {
            type,
            timestamp: new Date().toISOString(),
            payload
        };
        const set = this.listeners.get(type);
        if (set) {
            set.forEach(listener => {
                try {
                    listener(event);
                }
                catch (err) {
                    console.error(`[SGOSEventBus] Error in listener for ${type}:`, err);
                }
            });
        }
        return event;
    }
    /** Clear all subscribers */
    clear() {
        this.listeners.clear();
    }
}
exports.SGOSEventBus = SGOSEventBus;
