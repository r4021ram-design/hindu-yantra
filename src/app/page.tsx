'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Box, Compass, Flame, Shield, ArrowRight, Download, CheckCircle2, Award, Eye, Layers, Star } from 'lucide-react';
import { SHASTRIC_JYOTISH_DATABASE } from '@/lib/yantras/shastric-jyotish-database';

export default function MuseumHome() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Yantras (सभी यन्त्र)' },
    { id: 'prosperity', label: 'Wealth & Prosperity (धन व समृद्धि)' },
    { id: 'protection', label: 'Protection & Health (सुरक्षा व आरोग्य)' },
    { id: 'vastu', label: 'Vastu & Harmony (वास्तु व शांति)' }
  ];

  const yantras = Object.values(SHASTRIC_JYOTISH_DATABASE).map(data => ({
    id: data.id,
    nameSanskrit: data.nameSanskrit,
    nameEnglish: data.nameEnglish,
    deity: data.presidingDeity,
    tradition: data.tradition,
    citation: data.citations[0]?.sourceScripture || 'Shastric Scripture',
    rulingPlanet: data.jyotish.rulingPlanet,
    category:
      data.id.includes('kuber') || data.id.includes('lakshmi') || data.id.includes('sri')
        ? 'prosperity'
        : data.id.includes('mrityunjaya') || data.id.includes('ganesh') || data.id.includes('durga')
        ? 'protection'
        : 'vastu'
  }));

  const filteredYantras =
    selectedCategory === 'all' ? yantras : yantras.filter(y => y.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[36px] bg-linear-to-b from-[#1A1612] via-[#120F0D] to-[#0A0908] border border-[#D4AF37]/30 p-8 lg:p-14 gold-glow">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF9933]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono font-medium uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sacred Shastric & Jyotish Platform</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-serif font-black text-[#FFF9F2] leading-tight tracking-tight">
            Digital Museum of <span className="bg-linear-to-r from-[#D4AF37] via-[#FF9933] to-[#F3C06B] bg-clip-text text-transparent">Sacred Yantras</span>
          </h1>

          <p className="text-base lg:text-lg text-[#C5BDB0] leading-relaxed">
            Experience authentic canonical Vedic Yantras with traditional Shastric color detailing, classical scriptural citations (Soundarya Lahari, Tantraraja Tantra), astrological planetary remedies, and complete Upasana protocols.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/yantras?id=sri_yantra"
              className="px-6 py-3.5 rounded-2xl bg-linear-to-r from-[#D4AF37] to-[#FF9933] text-[#0A0908] font-bold text-sm shadow-lg hover:brightness-110 transition-all flex items-center gap-2 hover:scale-102"
            >
              <Compass className="w-4 h-4" />
              <span>Explore Sacred Yantra Studio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/puja"
              className="px-6 py-3.5 rounded-2xl museum-glass text-[#FFF9F2] font-semibold text-sm border border-[#D4AF37]/40 hover:bg-[#1E1A16] transition-all flex items-center gap-2"
            >
              <Flame className="w-4 h-4 text-[#FF9933]" />
              <span>Upasana & Digital Altar</span>
            </Link>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#2A241E]">
            <div>
              <p className="text-2xl font-bold font-mono text-[#D4AF37]">100%</p>
              <p className="text-xs text-[#8A8070]">Shastric Geometry</p>
            </div>
            <div>
              <p className="text-2xl font-bold font-mono text-[#FF9933]">4 Themes</p>
              <p className="text-xs text-[#8A8070]">Sacred Color Fills</p>
            </div>
            <div>
              <p className="text-2xl font-bold font-mono text-[#D4AF37]">9 Avarana</p>
              <p className="text-xs text-[#8A8070]">Deep Chakra Studies</p>
            </div>
            <div>
              <p className="text-2xl font-bold font-mono text-[#FF9933]">Jyotish</p>
              <p className="text-xs text-[#8A8070]">Graha Dosha Remedies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Gallery Showcase */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl lg:text-3xl font-serif font-bold text-[#FFF9F2]">Canonical Yantra Exhibition</h2>
            <p className="text-sm text-[#A0988A] mt-1">Select a sacred Yantra to explore layer-by-layer detailing, scriptural slokas, and astrological remedies</p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#D4AF37] text-[#0A0908] font-bold shadow-md'
                    : 'bg-[#141210] text-[#A0988A] border border-[#2A241E] hover:text-[#FFF9F2]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Yantra Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredYantras.map(yantra => (
            <div
              key={yantra.id}
              className="museum-glass rounded-3xl p-6 border border-[#2A241E] hover:border-[#D4AF37]/50 transition-all group flex flex-col justify-between space-y-4 hover:shadow-xl"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30">
                    {yantra.deity.split('(')[0]}
                  </span>
                  <span className="text-[11px] text-[#A0988A] flex items-center gap-1 font-mono">
                    <Star className="w-3.5 h-3.5 text-[#FF9933]" />
                    <span>{yantra.rulingPlanet.split('(')[0]}</span>
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-serif font-bold text-[#FFF9F2] group-hover:text-[#D4AF37] transition-colors">
                    {yantra.nameSanskrit}
                  </h3>
                  <p className="text-xs text-[#D4AF37] mt-0.5">{yantra.nameEnglish}</p>
                  <p className="text-xs text-[#8A8070] italic mt-1">{yantra.citation}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#2A241E] flex items-center justify-between">
                <span className="text-xs text-[#A0988A] font-mono">{yantra.tradition.split('(')[0]}</span>
                <Link
                  href={`/yantras?id=${yantra.id}`}
                  className="flex items-center gap-1.5 text-xs font-bold text-[#D4AF37] group-hover:text-[#FF9933] transition-colors"
                >
                  <span>Explore Shastric Studio</span>
                  <Eye className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upasana & Altar Banner */}
      <section className="museum-glass rounded-3xl p-8 border border-[#FF9933]/30 bg-linear-to-r from-[#1E1712] to-[#141210] flex flex-col md:flex-row items-center justify-between gap-6 saffron-glow">
        <div className="space-y-2 max-w-xl">
          <div className="flex items-center gap-2 text-[#FF9933] text-xs font-bold uppercase tracking-wider">
            <Flame className="w-4 h-4" />
            <span>Digital Temple Shrine</span>
          </div>
          <h3 className="text-2xl font-serif font-bold text-[#FFF9F2]">Interactive Puja Vidhi & Upasana Studio</h3>
          <p className="text-sm text-[#C5BDB0]">
            Perform authentic Panchopachara and Shodashopachara rituals with traditional mantras, offering gestures (Deepam, Dhoopam, Pushpam, Naivedyam), and synchronized Aarti recitations.
          </p>
        </div>

        <Link
          href="/puja"
          className="px-6 py-3 rounded-2xl bg-linear-to-r from-[#FF9933] to-[#D4AF37] text-[#0A0908] font-bold text-sm shadow-md hover:brightness-110 transition-all flex items-center gap-2 shrink-0 cursor-pointer"
        >
          <span>Open Digital Altar</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
