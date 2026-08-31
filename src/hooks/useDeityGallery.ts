import { useState, useEffect } from 'react';

export interface CustomDeity {
    id: string;
    name: string;
    image: string; // Base64 Data URL
    date: number;
}

const STORAGE_KEY = 'panchang_my_deities';

export function useDeityGallery() {
    const [customDeities, setCustomDeities] = useState<CustomDeity[]>([]);

    // Load from storage on mount
    useEffect(() => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                setCustomDeities(JSON.parse(stored));
            }
        } catch (e) {
            console.error('Failed to load custom deities', e);
        }
    }, []);

    const addDeity = (name: string, image: string) => {
        const newDeity: CustomDeity = {
            id: crypto.randomUUID(),
            name: name.trim() || 'My Deity',
            image,
            date: Date.now()
        };

        const updated = [newDeity, ...customDeities];
        setCustomDeities(updated);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        return newDeity;
    };

    const removeDeity = (id: string) => {
        const updated = customDeities.filter(d => d.id !== id);
        setCustomDeities(updated);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    };

    return {
        customDeities,
        addDeity,
        removeDeity
    };
}
