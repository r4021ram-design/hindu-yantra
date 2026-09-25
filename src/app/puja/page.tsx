'use client';

import React, { useState, useCallback } from 'react';
import { ArrowLeft, Search, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { TRANSLATIONS } from '@/lib/i18n';
import LanguageSwitch from '@/components/LanguageSwitch';
import PujaModeSelector, { PujaMode } from '@/components/puja/PujaModeSelector';
import AltarShrine from '@/components/puja/AltarShrine';
import PujaToolbar from '@/components/puja/PujaToolbar';
import { Offering } from '@/lib/puja/offerings';
import { useDeityGallery, CustomDeity } from '@/hooks/useDeityGallery';
import RitualPlayer from '@/components/puja/RitualPlayer';
import { Upload, Trash2 } from 'lucide-react';

// Curated deity image mapping (expects local images in /public/images/deities/)
const DEITY_IMAGES: Record<string, string> = {
    // ... items
    'ganesha': '/images/deities/ganesha.webp',
    'ganesh': '/images/deities/ganesha.webp',
    'ganpati': '/images/deities/ganesha.webp',

    // Shiva
    'shiva': '/images/deities/shiva.webp',
    'shiv': '/images/deities/shiva.webp',
    'mahadev': '/images/deities/shiva.webp',
    'shankar': '/images/deities/shiva.webp',

    // Krishna
    'krishna': '/images/deities/krishna.webp',
    'kanha': '/images/deities/krishna.webp',
    'gopal': '/images/deities/krishna.webp',

    // Durga / Devi
    'durga': '/images/deities/durga.webp',
    'devi': '/images/deities/durga.webp',
    'kali': '/images/deities/durga.webp',

    // Lakshmi
    'lakshmi': '/images/deities/lakshmi.webp',
    'laxmi': '/images/deities/lakshmi.webp',
    'mahalakshmi': '/images/deities/lakshmi.webp',

    // Hanuman
    'hanuman': '/images/deities/hanuman.webp',
    'bajrangbali': '/images/deities/hanuman.webp',

    // Saraswati
    'saraswati': '/images/deities/sarswati.webp',

    // Vishnu
    'vishnu': '/images/deities/vishnu.webp',
    'narayan': '/images/deities/vishnu.webp',

    // Rama
    'rama': '/images/deities/rama.webp',
    'ram': '/images/deities/rama.webp',
    'sriram': '/images/deities/rama.webp',

    // Sacred Canonical Yantras
    'sri yantra': '/yantras/sri_yantra.svg',
    'shri yantra': '/yantras/sri_yantra.svg',
    'sri_yantra': '/yantras/sri_yantra.svg',
    'kuber yantra': '/yantras/04_Lakshmi/kuber_yantra.svg',
    'mahamrityunjaya yantra': '/yantras/05_Shiva/mahamrityunjaya_yantra.svg',
    'durga yantra': '/yantras/durga_yantra.svg',
    'durga bisa': '/yantras/durga_yantra.svg',
    'sudarshana chakra yantra': '/yantras/07_Protection/sudarshana_chakra_yantra.svg',
    'kaal bhairava yantra': '/yantras/kaal_bhairava_yantra.svg',
    'batuka bhairava yantra': '/yantras/batuka_bhairava_yantra.svg',
    'swarna akarshana bhairava yantra': '/yantras/swarna_akarshana_bhairava_yantra.svg',
    'dhanvantari yantra': '/yantras/dhanvantari_yantra.svg',
    'annapurna yantra': '/yantras/annapurna_yantra.svg',
    'saraswati yantra': '/yantras/12_Vidya/saraswati_yantra.svg',
    'gayatri yantra': '/yantras/12_Vidya/gayatri_yantra.svg',
    'navagraha yantra': '/yantras/08_Navagraha/navagraha_yantra.svg',
    'santana gopala yantra': '/yantras/santana_gopala_yantra.svg'
};

const DEFAULT_IMAGE = '/images/deities/ganesha.webp';

export default function PujaPage() {
    const { language } = useLanguage();
    const t = TRANSLATIONS[language];

    const [selectedMode, setSelectedMode] = useState<PujaMode | null>(null);
    const [selectedDeity, setSelectedDeity] = useState<string | null>(null);
    const [isStarted, setIsStarted] = useState(false);

    // Legacy/Helper states
    const [deityName, setDeityName] = useState('');
    const [deityImage, setDeityImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [activeAnimation, setActiveAnimation] = useState<string | null>(null);
    const [activeAlignment, setActiveAlignment] = useState<{ x: number, y: number } | undefined>(undefined);
    const [completedOfferings, setCompletedOfferings] = useState<string[]>([]);
    const [showPujaArea, setShowPujaArea] = useState(false);

    // Gallery Hook
    const { customDeities, addDeity, removeDeity } = useDeityGallery();
    const fileInputRef = React.useRef<HTMLInputElement>(null);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const base64 = event.target?.result as string;
                // Default name based on file name or generic
                const name = file.name.split('.')[0] || 'My Deity';
                addDeity(name, base64);
            };
            reader.readAsDataURL(file);
        }
    };

    const selectCustomDeity = (deity: CustomDeity) => {
        setDeityName(deity.name);
        setDeityImage(deity.image);
        // Start puja flow
        setIsLoading(true);
        setShowPujaArea(true);
        setCompletedOfferings([]);
        setTimeout(() => setIsLoading(false), 1000);
    };

    const summonDeity = useCallback(async (overrideImage?: string) => {
        if (!deityName.trim()) return;

        setIsLoading(true);
        setShowPujaArea(true);
        setCompletedOfferings([]);

        // Simulate loading delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Use override image if provided, otherwise find in presets
        if (overrideImage) {
            setDeityImage(overrideImage);
        } else if (deityImage) {
            // Keep already selected yantra or uploaded image
        } else {
            const normalizedName = deityName.toLowerCase().trim();
            const image = DEITY_IMAGES[normalizedName] || DEFAULT_IMAGE;
            setDeityImage(image);
        }

        setIsLoading(false);
    }, [deityName]);

    // State for Realistic Puja
    const [persistentLayers, setPersistentLayers] = useState<Record<string, boolean>>({});
    const [activeMantra, setActiveMantra] = useState<{ text: string, meaning: string } | null>(null);

    const handleOfferingClick = useCallback((offering: Offering) => {
        // 1. Play Mantra
        setActiveMantra({ text: offering.mantra, meaning: offering.meaning });
        // Auto-hide mantra after 4s
        setTimeout(() => setActiveMantra(null), 4000);

        // 2. Handle Visuals
        if (offering.type === 'persistent' && offering.layer) {
            setPersistentLayers(prev => ({ ...prev, [offering.layer!]: true }));
            // Also set alignment for persistent visual entry if any
            if (offering.alignment) {
                setActiveAlignment(offering.alignment);
                setActiveAnimation(offering.animation);
                setTimeout(() => {
                    setActiveAnimation(null);
                    setActiveAlignment(undefined);
                }, 3000);
            }
        } else {
            // Transient animation
            setActiveAnimation(offering.animation);
            setActiveAlignment(offering.alignment);
            setTimeout(() => {
                setActiveAnimation(null);
                setActiveAlignment(undefined);
            }, 3000);
        }

        // 3. Mark Completed
        if (!completedOfferings.includes(offering.id)) {
            setCompletedOfferings(prev => [...prev, offering.id]);
        }
    }, [completedOfferings]);

    const getPujaModeLabel = (pujaMode: PujaMode) => {
        switch (pujaMode) {
            case 'panchopachar': return t.puja.panchopachar;
            case 'shodashopachar': return t.puja.shodashopachar;
            case 'rajopachar': return t.puja.rajopachar;
            default: return pujaMode;
        }
    };

    return (
        <div className="min-h-screen bg-linear-to-b from-amber-50 via-orange-50 to-amber-100 pb-32">
            {/* Fixed Header */}
            <header className="fixed top-0 left-0 right-0 z-50 glass-panel px-6 py-4 animate-reveal">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="p-2 bg-amber-100 rounded-xl hover:bg-amber-200 transition-colors">
                            <ArrowLeft className="w-5 h-5 text-amber-700" />
                        </Link>
                        <div>
                            <h1 className="text-xl font-serif font-bold text-amber-900">{t.puja.virtualMandir}</h1>
                            <p className="text-xs text-amber-600">{t.puja.interactivePujaExp}</p>
                        </div>
                    </div>
                    <div className="lg:hidden">
                        <LanguageSwitch />
                    </div>
                </div>
            </header>

            <main className="pt-24 px-6 max-w-4xl mx-auto">
                {!isStarted ? (
                    <>
                        {/* Hero Section */}
                        <div className="text-center mb-10 animate-reveal">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-200/50 rounded-full mb-4 shubh-glow">
                                <Sparkles className="w-4 h-4 text-amber-600" />
                                <span className="text-xs font-bold uppercase tracking-widest text-amber-700">{t.puja.digitalDevotion}</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif font-black text-amber-900 mb-3">
                                {t.puja.performSacredPuja}
                            </h2>
                            <p className="text-sm text-amber-700 max-w-md mx-auto">
                                {t.puja.performSacredPujaDesc}
                            </p>
                        </div>

                        {/* Mode Selector */}
                        <div className="mb-10">
                            <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-4 text-center">{t.puja.selectPujaType}</h3>
                            <PujaModeSelector selectedMode={selectedMode} onSelectMode={setSelectedMode} />
                        </div>

                        {/* Deity Input */}
                        <div className="space-y-6 animate-reveal delay-1">
                            {/* Standard Search */}
                            <div className="glass-panel rounded-3xl p-8 shadow-xl">
                                <h3 className="text-lg font-serif font-bold text-amber-800 mb-4 text-center">{t.puja.summonYourDeity}</h3>

                                <div className="flex gap-3">
                                    <div className="flex-1 relative">
                                        <input
                                            type="text"
                                            value={deityName}
                                            onChange={(e) => {
                                                setDeityName(e.target.value);
                                                setSelectedDeity(e.target.value);
                                            }}
                                            placeholder={t.puja.enterDeityName}
                                            className="w-full px-5 py-4 bg-amber-50 border-2 border-amber-200 rounded-2xl text-amber-900 placeholder:text-amber-400 focus:outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="mt-6 flex flex-wrap gap-3 justify-center">
                                    {['Ganesha', 'Shiva', 'Krishna', 'Durga', 'Lakshmi', 'Hanuman'].map(deity => (
                                        <button
                                            key={deity}
                                            onClick={() => {
                                                setDeityName(deity);
                                                setSelectedDeity(deity);
                                                setDeityImage(null);
                                            }}
                                            className={`
                                                px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all haptic-feedback
                                                ${selectedDeity === deity
                                                    ? 'bg-orange-500 text-white shadow-lg scale-105 shubh-glow'
                                                    : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                                                }
                                            `}
                                        >
                                            {deity}
                                        </button>
                                    ))}
                                </div>

                                {/* Canonical Yantra Quick-Pick Altar Options */}
                                <div className="mt-6 pt-5 border-t border-amber-200/60">
                                    <p className="text-xs font-serif font-bold text-amber-900/90 mb-3 text-center uppercase tracking-wider">
                                        🕉️ पवित्र यन्त्र उपासना (Sacred Yantra Worship Altar)
                                    </p>
                                    <div className="flex flex-wrap gap-2.5 justify-center">
                                        {[
                                            { name: 'श्री यन्त्र', key: 'sri yantra', img: '/yantras/sri_yantra.svg' },
                                            { name: 'महामृत्युंजय यन्त्र', key: 'mahamrityunjaya yantra', img: '/yantras/05_Shiva/mahamrityunjaya_yantra.svg' },
                                            { name: 'कुबेर यन्त्र', key: 'kuber yantra', img: '/yantras/04_Lakshmi/kuber_yantra.svg' },
                                            { name: 'दुर्गा बीसा यन्त्र', key: 'durga yantra', img: '/yantras/durga_yantra.svg' },
                                            { name: 'काल भैरव यन्त्र', key: 'kaal bhairava yantra', img: '/yantras/kaal_bhairava_yantra.svg' },
                                            { name: 'बटुक भैरव यन्त्र', key: 'batuka bhairava yantra', img: '/yantras/batuka_bhairava_yantra.svg' },
                                            { name: 'सुदर्शन चक्र यन्त्र', key: 'sudarshana chakra yantra', img: '/yantras/07_Protection/sudarshana_chakra_yantra.svg' },
                                            { name: 'धनवन्तरि आरोग्य यन्त्र', key: 'dhanvantari yantra', img: '/yantras/dhanvantari_yantra.svg' },
                                        ].map(y => (
                                            <button
                                                key={y.key}
                                                onClick={() => {
                                                    setDeityName(y.name);
                                                    setSelectedDeity(y.name);
                                                    setDeityImage(y.img);
                                                }}
                                                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all haptic-feedback border ${
                                                    selectedDeity === y.name
                                                        ? 'bg-[#824707] text-white border-[#824707] shadow-md scale-105'
                                                        : 'bg-[#FBF5EB] text-[#542608] border-[#C9A46E]/50 hover:bg-[#F3E6D0]'
                                                }`}
                                            >
                                                ✨ {y.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Start Button - CTA */}
                        <div className="sticky bottom-8 mt-12 flex justify-center z-40">
                            <button
                                onClick={() => {
                                    summonDeity();
                                    setIsStarted(true);
                                }}
                                disabled={!selectedMode || !selectedDeity}
                                className={`
                                    px-10 py-5 rounded-full font-serif font-bold text-lg shadow-2xl transition-all duration-500
                                    flex items-center gap-3
                                    ${(!selectedMode || !selectedDeity)
                                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-50'
                                        : 'bg-linear-to-r from-orange-600 to-red-600 text-white hover:scale-105 hover:shadow-orange-500/30'
                                    }
                                `}
                            >
                                <Sparkles className="w-5 h-5" />
                                {language === 'sa' ? 'पूजां प्रारभत' : language === 'gu' ? 'પૂજા શરૂ કરો' : (language === 'hi' ? 'पूजा प्रारंभ करें' : 'Start Worship')}
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="relative min-h-[80dvh] md:min-h-[85vh] w-full flex flex-col justify-end pb-12 md:pb-8 animate-in fade-in duration-700">
                        {/* Visual Altar Shrine (Absolute Background) */}
                        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
                            <AltarShrine
                                deityName={selectedDeity || deityName}
                                deityImage={deityImage}
                                activeAnimation={activeAnimation}
                                activeAlignment={activeAlignment}
                                isLoading={isLoading}
                                persistentLayers={persistentLayers}
                                activeMantra={activeMantra}
                            />
                        </div>

                        {/* Status Bar */}
                        <div className="absolute top-0 w-full z-30 flex justify-between items-center glass-panel px-6 py-4 rounded-3xl shadow-sm mt-4 animate-reveal">
                            <span className="px-4 py-2 bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-widest rounded-full shadow-sm shubh-glow">
                                {getPujaModeLabel(selectedMode!)} {t.puja.pujaWord}
                            </span>
                            <button
                                onClick={() => setIsStarted(false)}
                                className="px-4 py-2 text-xs font-bold text-amber-600 hover:text-orange-600 uppercase tracking-wider transition-colors flex items-center gap-2 hover:bg-amber-100/80 rounded-full bg-white/80 haptic-feedback"
                            >
                                <ArrowLeft className="w-4 h-4" /> {t.puja.changeDeityOrMode}
                            </button>
                        </div>

                        {/* Interactive Ritual Script Player (Overlaying at the bottom) */}
                        <div className="relative z-10 w-full mt-auto pt-[40vh] md:pt-[50vh]">
                            <RitualPlayer
                                mode={selectedMode!}
                                deity={selectedDeity || deityName}
                                onExit={() => setIsStarted(false)}
                            />
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
