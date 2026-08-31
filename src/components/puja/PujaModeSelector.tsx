'use client';

import React from 'react';
import { Flame, Clock, Crown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { TRANSLATIONS } from '@/lib/i18n';

export type PujaMode = 'panchopachar' | 'shodashopachar' | 'rajopachar';

interface PujaModeSelectorProps {
    selectedMode: PujaMode | null;
    onSelectMode: (mode: PujaMode) => void;
}

export default function PujaModeSelector({ selectedMode, onSelectMode }: PujaModeSelectorProps) {
    const { language } = useLanguage();
    const t = TRANSLATIONS[language];

    const MODES = [
        {
            id: 'panchopachar' as PujaMode,
            name: t.puja.panchopachar,
            // nameHi not needed as name is now localized
            subtitle: t.puja.modes.panchopachar.subtitle,
            description: t.puja.modes.panchopachar.description,
            time: t.puja.modes.panchopachar.time,
            icon: Flame,
            color: 'from-amber-400 to-orange-500',
            bgColor: 'bg-amber-50',
            borderColor: 'border-amber-200',
        },
        {
            id: 'shodashopachar' as PujaMode,
            name: t.puja.shodashopachar,
            subtitle: t.puja.modes.shodashopachar.subtitle,
            description: t.puja.modes.shodashopachar.description,
            time: t.puja.modes.shodashopachar.time,
            icon: Clock,
            color: 'from-orange-500 to-red-600',
            bgColor: 'bg-orange-50',
            borderColor: 'border-orange-200',
        },
        {
            id: 'rajopachar' as PujaMode,
            name: t.puja.rajopachar,
            subtitle: t.puja.modes.rajopachar.subtitle,
            description: t.puja.modes.rajopachar.description,
            time: t.puja.modes.rajopachar.time,
            icon: Crown,
            color: 'from-red-600 to-purple-700',
            bgColor: 'bg-red-50',
            borderColor: 'border-red-200',
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {MODES.map((mode) => {
                const Icon = mode.icon;
                const isSelected = selectedMode === mode.id;

                return (
                    <button
                        key={mode.id}
                        onClick={() => onSelectMode(mode.id)}
                        className={`
                            relative p-6 rounded-3xl border-2 transition-all duration-300 text-left group
                            ${isSelected
                                ? `bg-orange-50 border-orange-500 ring-2 ring-orange-200 shadow-xl scale-[1.02]`
                                : 'bg-white/60 border-gray-200 hover:bg-white hover:shadow-lg'
                            }
                        `}
                    >
                        {/* Selection indicator */}
                        {isSelected && (
                            <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-orange-500 animate-pulse"></div>
                        )}

                        {/* Icon */}
                        <div className={`
                            w-14 h-14 rounded-2xl flex items-center justify-center mb-4
                            bg-gradient-to-br ${mode.color} text-white shadow-lg
                            ${isSelected ? 'scale-110' : 'group-hover:scale-105'} transition-transform
                        `}>
                            <Icon className="w-7 h-7" />
                        </div>

                        {/* Content */}
                        <h3 className="text-lg font-bold text-gray-800 mb-0.5">{mode.name}</h3>

                        {/* Removed nameHi as name is now localized */}

                        <div className="flex items-center justify-between mt-2">
                            <span className="text-sm font-semibold text-gray-600">{mode.subtitle}</span>
                            <span className="text-xs text-gray-400">{mode.time}</span>
                        </div>

                        <p className="text-xs text-gray-500 mt-2">{mode.description}</p>
                    </button>
                );
            })}
        </div>
    );
}
