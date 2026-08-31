'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Check, Sparkles, Home, ChevronDown, ChevronUp } from 'lucide-react';
import { PUJA_SCRIPTS } from '@/data/puja-scripts';
import { useLanguage } from '@/context/LanguageContext';
import { TRANSLATIONS } from '@/lib/i18n';
import styles from './RitualPlayer.module.css';

export interface PujaStep {
    step: number;
    label: string;
    shortMantra: string;
    fullMantra?: string;
    meaning?: string;
    instruction: string;
}

interface RitualPlayerProps {
    mode: 'panchopachar' | 'shodashopachar' | 'rajopachar';
    deity: string;
    onExit: () => void;
}

export default function RitualPlayer({ mode, deity, onExit }: RitualPlayerProps) {
    const { language } = useLanguage();
    const t = TRANSLATIONS[language];
    const [script, setScript] = useState<PujaStep[]>([]);
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isMantraExpanded, setIsMantraExpanded] = useState(false);

    const progressBarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (progressBarRef.current && script && script.length > 0) {
            const progress = ((currentStepIndex + 1) / script.length) * 100;
            progressBarRef.current.style.width = `${progress}%`;
        }
    }, [currentStepIndex, script]);

    useEffect(() => {
        const normalizedDeity = deity?.toLowerCase() || 'ganesha';

        let normalizedMode = 'panch';
        if (mode === 'shodashopachar') normalizedMode = 'shodash';
        if (mode === 'rajopachar') normalizedMode = 'raj';

        // Base scripts
        const deityScripts = PUJA_SCRIPTS[normalizedDeity] || PUJA_SCRIPTS['ganesha'];
        let selectedScript = deityScripts[normalizedMode] || deityScripts['panch'];

        // Logic to merge Shodash steps into Rajopachar
        if (normalizedMode === 'raj') {
            const shodashSteps = deityScripts['shodash'] || [];
            const rajSteps = deityScripts['raj'] || [];

            // Filter out any placeholder step from Raj (often step 1 says "See Shodash")
            const cleanRajSteps = rajSteps.filter((s: PujaStep) => !s.label.includes('See Shodashopachar') && !s.label.includes('Refer to '));

            selectedScript = [...shodashSteps, ...cleanRajSteps];
        }

        if (selectedScript) {
            setScript(selectedScript);
            setLoading(false);
        } else {
            setScript([]);
            setLoading(false);
        }

        setCurrentStepIndex(0);
        setIsCompleted(false);
        setIsMantraExpanded(false);
    }, [deity, mode]);

    const handleNext = () => {
        if (currentStepIndex < script.length - 1) {
            setCurrentStepIndex(prev => prev + 1);
            setIsMantraExpanded(false);
        } else {
            setIsCompleted(true);
        }
    };

    const handlePrev = () => {
        if (currentStepIndex > 0) {
            setCurrentStepIndex(prev => prev - 1);
            setIsMantraExpanded(false);
        }
    };

    if (loading) return null;

    if (!script || script.length === 0) {
        return <div className="p-8 text-center text-red-500">{t.puja.player?.comingSoon || "Mantra data coming soon for this deity."}</div>;
    }

    const currentStep = script[currentStepIndex];

    if (isCompleted) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8 animate-in zoom-in-95 duration-700">
                <div className="p-8 bg-green-100 rounded-full animate-bounce-slow">
                    <Check className="w-16 h-16 text-green-600" />
                </div>

                <div className="space-y-4">
                    <h2 className="text-3xl font-serif font-black text-amber-900">
                        {t.puja.player?.completed || "Puja Completed!"}
                    </h2>
                    <p className="text-lg text-amber-800 font-serif italic">
                        {(t.puja.player?.blessing || "May Lord {deity} bless you with peace and prosperity.").replace('{deity}', deity)}
                    </p>
                </div>

                <div className="glass-panel p-6 rounded-2xl shadow-xl animate-reveal delay-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-amber-500 block mb-2">{t.puja.player?.prasad || "Prasad"}</span>
                    <p className="text-amber-900 font-medium">{t.puja.player?.prasadOffered || "Virtual Prasad has been offered."}</p>
                </div>

                <button
                    onClick={onExit}
                    className="flex items-center gap-2 px-8 py-4 bg-amber-600 text-white font-bold uppercase tracking-wider rounded-2xl shadow-lg hover:bg-amber-700 transition-all hover:scale-105"
                >
                    <Home className="w-5 h-5" />
                    {t.puja.player?.returnToMandir || "Return to Mandir"}
                </button>
            </div>
        );
    }

    if (!currentStep) return null;

    return (
        <div className="max-w-xl mx-auto flex flex-col justify-between animate-in fade-in duration-500">
            {/* Header / Progress */}
            {/* Progress Bar */}
            <div className="w-full h-1 bg-stone-100 rounded-full mb-6 overflow-hidden">
                <div
                    ref={progressBarRef}
                    className="h-full bg-linear-to-r from-orange-500 to-red-600 transition-all duration-500 ease-out"
                ></div>
            </div>

            {/* Main Mantra Card */}
            <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-8 md:p-10 glass-panel vedic-border hover-elevate rounded-3xl relative overflow-hidden group transition-all duration-500 animate-reveal delay-1">
                <div className="relative z-10 space-y-2 w-full">
                    {/* Mantra */}
                    <div className="space-y-2 animate-in fade-in zoom-in-95 duration-500">
                        <h3 className="text-xs md:text-sm lg:text-base leading-relaxed font-serif font-black text-amber-900 drop-shadow-sm whitespace-pre-line">
                            {currentStep.fullMantra || currentStep.shortMantra}
                        </h3>
                        {currentStep.meaning && (
                            <p className="text-[10px] md:text-xs text-amber-800 italic font-serif leading-relaxed px-4 mx-auto max-w-lg mt-2 opacity-80">
                                "{currentStep.meaning}"
                            </p>
                        )}
                    </div>
                </div>
            </div>
            {/* Controls */}
            <div className="mt-6 flex justify-between items-center px-4">
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        handlePrev();
                    }}
                    disabled={currentStepIndex === 0}
                    className="flex items-center gap-2 text-stone-500 font-bold uppercase tracking-wider text-xs hover:text-stone-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors haptic-feedback"
                >
                    <ArrowLeft className="w-4 h-4" />
                    {t.puja.player?.previous || "Previous"}
                </button>

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        handleNext();
                    }}
                    className="flex items-center gap-3 px-6 py-3 bg-linear-to-r from-orange-600 to-red-600 text-white font-bold uppercase tracking-wider rounded-2xl shadow-lg hover:shadow-orange-500/40 hover:scale-105 active:scale-95 transition-all haptic-feedback"
                >
                    {currentStepIndex === script.length - 1 ? (
                        <>{t.puja.player?.finish || "Finish"} <Sparkles className="w-4 h-4" /></>
                    ) : (
                        <>{t.puja.player?.next || "Next"} <ArrowRight className="w-4 h-4" /></>
                    )}
                </button>
            </div>
        </div >
    );
}
