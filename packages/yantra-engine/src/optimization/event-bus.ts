import { SGOSEvent, SGOSEventType, SGOSEventListener } from './types';

export class SGOSEventBus {
  private listeners: Map<SGOSEventType, Set<SGOSEventListener>> = new Map();

  /** Subscribe to an event */
  public subscribe<T = any>(eventType: SGOSEventType, listener: SGOSEventListener<T>): () => void {
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
  public emit<T = any>(type: SGOSEventType, payload: T): SGOSEvent<T> {
    const event: SGOSEvent<T> = {
      type,
      timestamp: new Date().toISOString(),
      payload
    };

    const set = this.listeners.get(type);
    if (set) {
      set.forEach(listener => {
        try {
          listener(event);
        } catch (err) {
          console.error(`[SGOSEventBus] Error in listener for ${type}:`, err);
        }
      });
    }

    return event;
  }

  /** Clear all subscribers */
  public clear(): void {
    this.listeners.clear();
  }
}
