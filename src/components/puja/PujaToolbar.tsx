import React from 'react';
import { PujaMode } from './PujaModeSelector';
import { Offering, getOfferingsByMode } from '@/lib/puja/offerings';
import { useLanguage } from '@/context/LanguageContext';
import { TRANSLATIONS } from '@/lib/i18n';

interface PujaToolbarProps {
    mode: PujaMode;
    completedOfferings: string[];
    onOfferingClick: (offering: Offering) => void;
}

export default function PujaToolbar({ mode, completedOfferings, onOfferingClick }: PujaToolbarProps) {
    const { language } = useLanguage();
    const t = TRANSLATIONS[language];
    const offerings = getOfferingsByMode(mode);

    return (
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-4 shadow-xl border border-amber-200">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">{t.puja.toolbar.title}</h3>
                <span className="text-xs text-amber-600 font-medium">
                    {completedOfferings.length}/{offerings.length} {t.puja.toolbar.completed}
                </span>
            </div>

            {/* Progress bar */}
            <div className="h-1.5 bg-gray-200 rounded-full mb-4 overflow-hidden">
                <div
                    className={`h-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-500 w-p-${Math.round((completedOfferings.length / offerings.length) * 100)}`}
                ></div>
            </div>

            {/* Scrollable offering buttons */}
            <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
                {offerings.map((offering, index) => {
                    const Icon = offering.icon;
                    const isCompleted = completedOfferings.includes(offering.id);
                    // Dynamically get localized name. offering.id matches keys in t.puja.offerings
                    // Use 'as any' safely because we know the structure matches
                    const localizedOffering = (t.puja.offerings as any)[offering.id];
                    const displayName = localizedOffering?.name || offering.name;

                    return (
                        <button
                            key={`${offering.id}-${index}`}
                            onClick={() => onOfferingClick(offering)}
                            className={`
                                flex-shrink-0 flex flex-col items-center gap-2 p-3 rounded-2xl 
                                transition-all duration-300 min-w-[80px]
                                ${isCompleted
                                    ? 'bg-green-100 border-2 border-green-300 text-green-700'
                                    : 'bg-amber-50 border-2 border-amber-200 hover:bg-amber-100 hover:border-amber-300 text-amber-700'
                                }
                            `}
                        >
                            <div className={`
                                w-10 h-10 rounded-xl flex items-center justify-center
                                ${isCompleted ? 'bg-green-200' : 'bg-amber-200'}
                            `}>
                                {isCompleted ? (
                                    <span className="text-lg">✓</span>
                                ) : (
                                    <Icon className="w-5 h-5" />
                                )}
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-wide text-center leading-tight">{displayName}</span>
                            <span className="text-[9px] text-gray-500">{offering.sanskrit}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
