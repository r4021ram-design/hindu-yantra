'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Languages } from 'lucide-react';

export default function LanguageSwitch({ compact = false }: { compact?: boolean }) {
    const { language, setLanguage } = useLanguage();

    const languages = [
        { code: 'en', label: 'English', short: 'EN' },
        { code: 'hi', label: 'हिंदी', short: 'हिं' },
        { code: 'gu', label: 'ગુજરાતી', short: 'ગુ' },
        { code: 'sa', label: 'संस्कृतम्', short: 'सं' }
    ];

    const [isOpen, setIsOpen] = React.useState(false);
    const dropdownRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSelect = (code: string) => {
        setLanguage(code as any);
        setIsOpen(false);
    };

    const activeLang = languages.find(l => l.code === language) || languages[0];

    return (
        <div className="relative z-50" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Select Language"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                title={compact ? `Language: ${activeLang.label}` : undefined}
                className={
                    compact
                        ? "w-9 h-9 rounded-full bg-orange-50 border border-orange-200 hover:bg-orange-100 flex items-center justify-center text-orange-800 font-bold text-xs shadow-xs transition-all"
                        : "flex items-center gap-2 px-3 py-1.5 bg-orange-50 border border-orange-200 rounded-full hover:bg-orange-100 active:bg-orange-200 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-1"
                }
            >
                <Languages className="w-4 h-4 text-orange-600" />
                {!compact && (
                    <span className="text-xs font-bold uppercase tracking-wide text-orange-800">
                        {activeLang.label}
                    </span>
                )}
            </button>

            {/* Dropdown / Bottom Sheet */}
            {isOpen && (
                <>
                    {/* Mobile Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-90 sm:hidden animate-in fade-in duration-200"
                        onClick={() => setIsOpen(false)}
                    ></div>

                    <div 
                        role="listbox"
                        aria-label="Languages"
                        className={`
                            z-100 animate-in duration-200
                            fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-2xl rounded-t-[32px] border-t border-orange-100 shadow-2xl p-6 slide-in-from-bottom
                            sm:absolute sm:bottom-auto sm:left-auto sm:right-0 sm:top-full sm:mt-2 sm:w-32 sm:rounded-xl sm:border sm:p-0 sm:zoom-in-95 sm:overflow-hidden
                        `}
                    >
                        {/* Mobile Handle */}
                        <div className="w-12 h-1 bg-gray-200 rounded-full mx-auto mb-6 sm:hidden"></div>

                        <div className="flex flex-col">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    role="option"
                                    aria-selected={language === lang.code}
                                    onClick={() => handleSelect(lang.code)}
                                    className={`w-full text-left px-4 py-4 sm:py-3 text-sm font-bold sm:font-medium hover:bg-orange-50 transition-colors border-b border-orange-50 last:border-0 ${language === lang.code ? 'text-orange-700 bg-orange-50/50' : 'text-gray-600'
                                        }`}
                                >
                                    {lang.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
