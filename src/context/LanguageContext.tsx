'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '@/lib/i18n';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>('en');

    useEffect(() => {
        // Load from localStorage if available
        const saved = localStorage.getItem('app-language') as Language;
        if (saved && ['en', 'hi', 'gu', 'sa'].includes(saved)) {
            setLanguage(saved);
        }
    }, []);

    const updateLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem('app-language', lang);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: updateLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
