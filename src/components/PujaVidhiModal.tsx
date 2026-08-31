'use client';

import React, { useEffect, useState } from 'react';
import { X, BookOpen, Clock, List, Flame, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface PujaVidhiModalProps {
    festivalName: string;
    isOpen: boolean;
    onClose: () => void;
}

export default function PujaVidhiModal({ festivalName, isOpen, onClose }: PujaVidhiModalProps) {
    const { language } = useLanguage();
    const [vidhi, setVidhi] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (isOpen && festivalName) {
            const fetchVidhi = async () => {
                setLoading(true);
                try {
                    const res = await fetch('/api/puja-vidhi', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ festivalName, language }),
                    });
                    const json = await res.json();
                    if (json.success) {
                        setVidhi(json.data.vidhi);
                    }
                } catch (error) {
                    console.error('Failed to fetch Puja Vidhi:', error);
                } finally {
                    setLoading(false);
                }
            };
            fetchVidhi();
        }
    }, [isOpen, festivalName, language]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-primary/40 backdrop-blur-md animate-in fade-in duration-300"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative glass-amber w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-[40px] shadow-2xl border border-white/20 animate-in zoom-in-95 slide-in-from-bottom-10 duration-500">
                {/* Header */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary"></div>
                    <div className="absolute inset-0 opacity-20 transition-transform duration-1000 transform hover:scale-110">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/40 via-transparent to-transparent"></div>
                    </div>

                    <div className="relative h-full flex flex-col justify-end p-8">
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="flex items-center gap-3 mb-2">
                            <div className="px-3 py-1 bg-accent text-primary text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg"> Ritual Guide </div>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif font-black text-white italic">
                            {festivalName} <span className="text-accent underline decoration-accent/30 underline-offset-8">Puja Vidhi</span>
                        </h2>
                    </div>
                </div>

                {/* Content */}
                <div className="overflow-y-auto p-8 max-h-[calc(90vh-14rem)] custom-scrollbar">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-20 gap-6">
                            <div className="relative">
                                <div className="w-16 h-16 border-4 border-accent/20 border-t-accent rounded-full animate-spin"></div>
                                <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-accent animate-pulse" />
                            </div>
                            <p className="text-primary font-serif font-bold italic animate-pulse">Preparing the Sacred Ritual Guide...</p>
                        </div>
                    ) : vidhi ? (
                        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            {/* Significance Section */}
                            <section className="relative group">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-secondary/10 rounded-xl">
                                        <BookOpen className="w-5 h-5 text-secondary" />
                                    </div>
                                    <h3 className="text-xl font-serif font-bold text-primary">Significance</h3>
                                </div>
                                <div className="p-6 bg-white/40 rounded-3xl border border-white text-gray-700 leading-relaxed shadow-sm">
                                    {vidhi.significance}
                                </div>
                            </section>

                            {/* Items Needed */}
                            <section>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-accent/10 rounded-xl">
                                        <List className="w-5 h-5 text-accent" />
                                    </div>
                                    <h3 className="text-xl font-serif font-bold text-primary">Sacred Items (Samagri)</h3>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {vidhi.items?.map((item: string, i: number) => (
                                        <div key={i} className="flex items-center gap-2 p-3 bg-white/60 rounded-2xl border border-white/50 text-xs font-bold text-primary/70 shadow-sm transition-transform hover:scale-105">
                                            <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Steps Section */}
                            <section>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-primary/5 rounded-xl">
                                        <Flame className="w-5 h-5 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-serif font-bold text-primary">Ritual Process (Vidhi)</h3>
                                </div>
                                <div className="space-y-6">
                                    {vidhi.steps?.map((step: any, i: number) => (
                                        <div key={i} className="flex gap-6 relative group">
                                            <div className="flex flex-col items-center gap-2">
                                                <div className="w-10 h-10 rounded-2xl bg-primary text-white flex items-center justify-center font-bold font-serif shadow-lg ring-4 ring-primary/5 shrink-0 z-10">
                                                    {i + 1}
                                                </div>
                                                {i < (vidhi.steps.length - 1) && (
                                                    <div className="w-0.5 flex-1 bg-gradient-to-b from-primary/20 to-transparent my-2" />
                                                )}
                                            </div>
                                            <div className="pt-1 pb-4 group-hover:translate-x-1 transition-transform">
                                                <h4 className="text-lg font-serif font-bold text-primary mb-2 italic">{step.title}</h4>
                                                <p className="text-sm text-gray-600 leading-relaxed bg-white/30 p-4 rounded-2xl border border-white/40">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Timing Note */}
                            <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100 flex items-center gap-3 text-orange-800 text-[10px] font-black uppercase tracking-widest">
                                <Clock className="w-4 h-4 shrink-0" />
                                <span>Perform rituals during Shubh Muhurat for best results</span>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-gray-400">Ritual information unavailable.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
