/* eslint-disable react/forbid-dom-props */
/* eslint-disable react/forbid-component-props */
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useSpring, animated, to } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import { useLanguage } from '@/context/LanguageContext';
import { TRANSLATIONS } from '@/lib/i18n';

interface AltarShrineProps {
    deityName: string;
    deityImage: string | null;
    activeAnimation: string | null;
    activeAlignment?: { x: number, y: number };
    isLoading: boolean;
    persistentLayers?: Record<string, boolean>;
    activeMantra?: { text: string, meaning: string } | null;
}

export default function AltarShrine({
    deityName,
    deityImage,
    activeAnimation,
    activeAlignment,
    isLoading,
    persistentLayers = {},
    activeMantra
}: AltarShrineProps) {
    const { language } = useLanguage();
    const t = TRANSLATIONS[language];

    // State to track image loading error
    const [imageError, setImageError] = React.useState(false);

    // Reset error state when deity changes
    React.useEffect(() => {
        setImageError(false);
    }, [deityName, deityImage]);

    // Gesture binding for the Aarti Thali
    const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));
    const bind = useDrag(({ offset: [ox, oy], down }) => {
        api.start({ x: ox, y: oy, immediate: down, config: { mass: 1, tension: 200, friction: 15 } });
    });

    return (
        <div className="absolute inset-0 w-full h-full group/altar">
            {/* Mantra Overlay (Top Center) */}
            {activeMantra && (
                <div className="absolute -top-16 left-0 right-0 z-50 flex flex-col items-center animate-in fade-in slide-in-from-top-4">
                    <div className="bg-amber-900/90 text-white px-6 py-3 rounded-full shadow-2xl border border-amber-500/50 backdrop-blur-md text-center max-w-sm">
                        <p className="font-serif font-bold text-lg italic text-amber-100">"{activeMantra.text}"</p>
                        <p className="text-[10px] text-amber-200/80 mt-1 uppercase tracking-widest leading-tight">{activeMantra.meaning}</p>
                    </div>
                </div>
            )}

            {/* Aspect Ratio locked Altar Structure */}
            <div className="relative aspect-[4/5] h-[80vh] md:h-[85vh] max-h-[900px] mx-auto pointer-events-none flex items-center justify-center">

                {/* Mandir Frame Image (Background) */}
                <Image
                    src="/images/mandir-image1.webp"
                    alt="Mandir Frame"
                    fill
                    className="object-contain z-0 pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] scale-110 origin-bottom"
                    priority
                />

                {/* Deity Display Area (On Top of Frame) */}
                <div className="absolute top-[25%] bottom-[20%] left-[15%] right-[15%] z-10 flex flex-col items-center justify-center">
                    {isLoading ? (
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 border-4 border-amber-300 border-t-amber-600 rounded-full animate-spin"></div>
                            <p className="text-amber-100 font-medium animate-pulse drop-shadow-md">
                                {t.puja.invoking.replace('{deity}', deityName)}
                            </p>
                        </div>
                    ) : deityImage && !imageError ? (
                        <div className="relative w-full h-full transition-all duration-700 flex flex-col items-center justify-center">

                            {/* Deity Image blending into the transparent frame */}
                            <div className="relative mx-auto w-full h-full flex justify-center items-end drop-shadow-2xl">
                                <img
                                    src={deityImage}
                                    alt={deityName}
                                    className="max-w-[70%] max-h-[70%] object-contain relative z-0 opacity-95 transition-opacity hover:opacity-100 mix-blend-multiply"
                                    onError={() => setImageError(true)}
                                />
                            </div>

                            {/* --- Persistent Ritual Layers (Above Deity, Behind Frame) --- */}

                            {/* Layer 1: Vastra (Royal Garments Overlay) */}
                            {persistentLayers['vastra'] && (
                                <div className="absolute inset-0 bg-gradient-to-b from-orange-600/20 via-orange-400/10 to-transparent z-10 animate-in fade-in duration-1000 mix-blend-color-burn pointer-events-none border-t-8 border-orange-500/30"></div>
                            )}

                            {/* Layer 2: Kumkum/Gandha (Forehead Sanckrit Tilak) */}
                            {persistentLayers['kumkum'] && (
                                <div className="absolute top-[22%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-5 bg-red-700 rounded-full blur-[0.5px] shadow-[0_0_8px_red] z-20 animate-in zoom-in-50 duration-500 pointer-events-none">
                                    <div className="absolute inset-0 border-l-2 border-amber-300/40 rounded-full"></div>
                                </div>
                            )}

                            {/* Layer 3: Alankara (Royal Ornaments Glow points) */}
                            {persistentLayers['alankara'] && (
                                <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden">
                                    {/* Sparkle Points Aligned with common ornament locations */}
                                    <div className="absolute top-[35%] left-[25%] text-amber-200 animate-pulse text-xl drop-shadow-md">✨</div>
                                    <div className="absolute top-[35%] right-[25%] text-amber-200 animate-pulse delay-300 text-xl drop-shadow-md">✨</div>
                                    <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 text-[#ffd700] animate-pulse delay-150 text-3xl drop-shadow-[0_0_10px_gold]">👑</div>
                                    <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 text-amber-400 animate-pulse delay-500 text-4xl opacity-40">🔱</div>
                                </div>
                            )}

                            {/* Layer 4: Pushpa (Flower Heap at Pedestal) */}
                            {persistentLayers['pushpa'] && (
                                <div className="absolute bottom-[-10px] left-[-20%] right-[-20%] h-32 z-30 flex items-end justify-center pointer-events-none">
                                    <div className="relative w-full h-full flex items-end justify-center gap-[-10px] pb-4">
                                        {[...Array(12)].map((_, i) => (
                                            <span
                                                key={i}
                                                className="text-3xl drop-shadow-lg"
                                                // eslint-disable-next-line
                                                style={{
                                                    '--anim-delay': `${i * 0.15}s`,
                                                    '--anim-dur': `${2 + (i % 3)}s`,
                                                    '--rot': `${(i - 6) * 10}deg`,
                                                    '--trans-y': `${Math.abs(i - 6) * 4}px`,
                                                    zIndex: 10 - Math.abs(i - 6)
                                                } as React.CSSProperties}
                                            >
                                                {['🌺', '🌼', '🌹', '🌻'][i % 4]}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Layer 5: Royal Umbrella (Persistent for Rajopachara) */}
                            {persistentLayers['base'] && activeAnimation === null && (
                                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 animate-in slide-in-from-top-10 duration-1000">
                                    <div className="text-6xl drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">⛱️</div>
                                </div>
                            )}

                            {/* --- High-Fidelity Transient Animations --- */}

                            {/* Animation Container - Targeted by alignment metadata */}
                            <div
                                className="absolute inset-0 z-50 pointer-events-none perspective-[1000px]"
                            >
                                {/* Water Rituals */}
                                {(activeAnimation?.startsWith('water')) && (
                                    <motion.div
                                        className="absolute w-48 h-full z-50 pointer-events-none"
                                        initial={false}
                                        animate={{
                                            top: `${activeAlignment?.y ?? 0}%`,
                                            x: "-50%",
                                            left: `${50 + (activeAlignment?.x ?? 0) / 4}%`
                                        }}
                                        transition={{ type: "spring", stiffness: 80, damping: 20 }}
                                    >
                                        {/* Kalash Source Assets */}
                                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-5xl origin-bottom animate-pour-kalash">🏺</div>
                                        <div className="w-full h-full flex flex-col items-center overflow-hidden">
                                            {[...Array(20)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className="w-1.5 h-6 bg-blue-300/60 rounded-full animate-water-drip mb-1"
                                                    // eslint-disable-next-line
                                                    style={{ '--anim-delay': `${i * 0.1}s`, animationDelay: 'var(--anim-delay)' } as React.CSSProperties}
                                                ></div>
                                            ))}
                                            <div className="mt-[-10px] w-12 h-4 bg-blue-400/20 blur-md rounded-full animate-pulse"></div>
                                        </div>
                                    </motion.div>
                                )}

                                {/* Incense (Smoke) Ritual */}
                                {activeAnimation === 'smoke' && (
                                    <motion.div
                                        className="absolute flex flex-col items-center pointer-events-none"
                                        initial={false}
                                        animate={{
                                            bottom: `${150 - (activeAlignment?.y ?? 80)}px`,
                                            left: `${50 + (activeAlignment?.x ?? -60) / 2}%`
                                        }}
                                        transition={{ type: "spring", stiffness: 60, damping: 15 }}
                                    >
                                        <div className="text-3xl">🕯️</div>
                                        <div className="flex gap-2">
                                            {[...Array(3)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className="w-12 h-20 bg-gradient-to-t from-gray-200/40 to-transparent blur-xl rounded-t-full animate-smoke"
                                                    // eslint-disable-next-line
                                                    style={{ '--anim-delay': `${i * 0.8}s`, animationDelay: 'var(--anim-delay)' } as React.CSSProperties}
                                                ></div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {/* Lamp (Flame) Ritual */}
                                {activeAnimation === 'flame' && (
                                    <motion.div
                                        className="absolute flex flex-col items-center justify-center pointer-events-none"
                                        initial={false}
                                        animate={{
                                            bottom: `${150 - (activeAlignment?.y ?? 100)}px`,
                                            left: `${50 + (activeAlignment?.x ?? 0) / 2}%`
                                        }}
                                        transition={{ type: "spring", stiffness: 40, damping: 12 }}
                                    >
                                        <div className="text-6xl animate-pulse">🪔</div>
                                        <div className="w-32 h-32 bg-orange-400/20 rounded-full blur-3xl animate-pulse absolute -z-10"></div>
                                    </motion.div>
                                )}

                                {/* Lamp (Aarti) Ritual - Draggable */}
                                {activeAnimation === 'aarti' && (
                                    <animated.div
                                        {...bind()}
                                        className="absolute flex flex-col items-center justify-center cursor-grab active:cursor-grabbing touch-none z-[100]"
                                        style={{
                                            bottom: "50px",
                                            left: "50%",
                                            transform: to([x, y], (xVal, yVal) => `translate3d(calc(-50% + ${xVal}px), ${yVal}px, 0)`),
                                        }}
                                    >
                                        <div className="text-6xl animate-aarti origin-bottom drop-shadow-2xl">🕯️</div>
                                        <div className="w-32 h-32 bg-orange-400/20 rounded-full blur-3xl animate-pulse absolute -z-10"></div>
                                    </animated.div>
                                )}

                                {/* Royal Whisk (Chamar) */}
                                {activeAnimation === 'chamar' && (
                                    <motion.div
                                        className="absolute text-6xl origin-bottom-right pointer-events-none"
                                        initial={false}
                                        animate={{
                                            top: `${50 + (activeAlignment?.y ?? 0) / 2}%`,
                                            right: `${5 - (activeAlignment?.x ?? 140) / 10}%`,
                                            rotate: [-15, 15, -15]
                                        }}
                                        transition={{
                                            top: { type: "spring", stiffness: 90, damping: 18 },
                                            right: { type: "spring", stiffness: 90, damping: 18 },
                                            rotate: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                                        }}
                                    >
                                        🪶
                                    </motion.div>
                                )}

                                {/* Floating Petals */}
                                {activeAnimation === 'petals' && (
                                    <div className="absolute inset-0 overflow-hidden">
                                        {[...Array(15)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="absolute text-2xl animate-petals"
                                                // eslint-disable-next-line
                                                style={{
                                                    '--left-pos': `${Math.random() * 100}%`,
                                                    '--anim-delay': `${Math.random() * 2}s`,
                                                    '--anim-dur': `${3 + Math.random() * 2}s`,
                                                    left: 'var(--left-pos)',
                                                    top: '-20px',
                                                    animationDelay: 'var(--anim-delay)',
                                                    animationDuration: 'var(--anim-dur)'
                                                } as React.CSSProperties}
                                            >
                                                {['🌸', '🌹', '🌼', '🌺'][i % 4]}
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Sparkle Invocations */}
                                {(activeAnimation === 'sparkle' || activeAnimation === 'shine') && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        {[...Array(12)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="absolute text-amber-300 text-2xl animate-ping"
                                                // eslint-disable-next-line
                                                style={{
                                                    '--left-pos': `${50 + Math.cos(i * (Math.PI / 6)) * 40}%`,
                                                    '--top-pos': `${50 + Math.sin(i * (Math.PI / 6)) * 40}%`,
                                                    '--anim-delay': `${i * 0.1}s`,
                                                    left: 'var(--left-pos)',
                                                    top: 'var(--top-pos)',
                                                    animationDelay: 'var(--anim-delay)'
                                                } as React.CSSProperties}
                                            >✨</div>
                                        ))}
                                    </div>
                                )}

                                {/* Musical Notes */}
                                {activeAnimation === 'notes' && (
                                    <div className="absolute bottom-[20%] left-[-10%] w-full h-1/2 flex items-center justify-center gap-8">
                                        {['🎵', '🎶', '🎼', '🎹'].map((note, i) => (
                                            <div
                                                key={i}
                                                className="text-4xl animate-float-music"
                                                // eslint-disable-next-line
                                                style={{ '--anim-delay': `${i * 0.5}s`, animationDelay: 'var(--anim-delay)' } as React.CSSProperties}
                                            >
                                                {note}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        // Fallback UI (Empty State or Error State)
                        <div className="text-center mt-10 relative z-20">
                            {imageError ? (
                                <div className="flex flex-col items-center">
                                    <div className="w-48 h-64 mx-auto rounded-3xl bg-black/40 border-4 border-amber-600 flex flex-col items-center justify-center p-8 shadow-[0_0_30px_red]">
                                        <span className="text-6xl mb-4">🕉️</span>
                                        <h3 className="text-xl font-serif font-bold text-amber-200">{deityName}</h3>
                                        <p className="text-xs text-amber-100 mt-2 font-medium">{t.puja.confirmed}</p>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <div className="w-24 h-24 mx-auto mb-6 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center border-4 border-dashed border-amber-500">
                                        <span className="text-6xl opacity-70 drop-shadow-[0_0_10px_gold]">🙏</span>
                                    </div>
                                    <p className="text-amber-100 bg-black/50 px-4 py-2 rounded-full font-serif text-lg font-bold drop-shadow-md">{t.puja.selectDeity}</p>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Lamp decorations */}
            <div className="absolute -left-8 bottom-10 text-3xl animate-flame z-30">🪔</div>
            {/* eslint-disable-next-line */}
            <div className="absolute -right-8 bottom-10 text-3xl animate-flame z-30" style={{ '--anim-delay': '0.5s', animationDelay: 'var(--anim-delay)' } as React.CSSProperties}>🪔</div>
        </div>
    );
}
