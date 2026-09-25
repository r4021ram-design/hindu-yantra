'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Box, Compass, Flame, Shield, ArrowRight, Download, CheckCircle2, Award, Eye, Layers, Star } from 'lucide-react';
import { SHASTRIC_JYOTISH_DATABASE } from '@/lib/yantras/shastric-jyotish-database';

export default function MuseumHome() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Yantras (सभी यन्त्र)' },
    { id: 'dashamahavidya', label: 'Dasha Mahavidya (दश महाविद्या)' },
    { id: 'navagraha', label: 'Navagraha & Magic Squares (नवग्रह व जादुई वर्ग)' },
    { id: 'shiva', label: 'Shiva & Bhairava (शिव, भैरव व मृत्युंजय)' },
    { id: 'vidya', label: 'Vidya & Wisdom (सरस्वती, गायत्री व विद्या)' },
    { id: 'protection', label: 'Protection & Kavacha (रक्षा एवं कवच)' },
    { id: 'prosperity', label: 'Wealth & Prosperity (धन व समृद्धि)' },
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
      data.taxonomyCategory === 'dashamahavidya'
        ? 'dashamahavidya'
        : data.taxonomyCategory === 'navagraha' || data.id.includes('surya') || data.id.includes('graha')
        ? 'navagraha'
        : data.taxonomyCategory === 'shiva' || data.id.includes('shiva') || data.id.includes('bhairav') || data.id.includes('mrityunjaya') || data.id.includes('sharabha')
        ? 'shiva'
        : data.taxonomyCategory === 'saraswati_vidya' || data.id.includes('saraswati') || data.id.includes('gayatri') || data.id.includes('dakshinamurti') || data.id.includes('hayagriva')
        ? 'vidya'
        : data.taxonomyCategory === 'protection_raksha' || data.id.includes('bisa') || data.id.includes('sudarshana') || data.id.includes('hanuman') || data.id.includes('pratyangira')
        ? 'protection'
        : data.taxonomyCategory === 'lakshmi' || data.id.includes('kuber') || data.id.includes('lakshmi') || data.id.includes('sri') || data.id.includes('kanakadhara') || data.id.includes('vyapar')
        ? 'prosperity'
        : 'vastu'
  }));

  const filteredYantras =
    selectedCategory === 'all' ? yantras : yantras.filter(y => y.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[36px] bg-linear-to-b from-[#FDFBF7] via-[#F8F3EA] to-[#EFE7DA] border border-[#DDD1BE] p-8 lg:p-14 shadow-[0_12px_45px_rgba(140,90,32,0.08)]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A46E]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D9531E]/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4EAD8] border border-[#C5A059]/40 text-[#805713] text-xs font-mono font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B38226]" />
            <span>Sacred Shastric & Jyotish Platform</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-cinzel font-black text-[#1E1711] leading-tight tracking-tight">
            वैदिक <span className="bg-linear-to-r from-[#B38226] via-[#D9531E] to-[#805713] bg-clip-text text-transparent">यन्त्र दर्शन</span>
          </h1>

          <p className="text-base lg:text-lg text-[#5C4D3C] leading-relaxed font-sans">
            Experience authentic canonical Vedic Yantras with traditional Shastric color detailing, classical scriptural citations (Soundarya Lahari, Tantraraja Tantra), astrological planetary remedies, and complete Upasana protocols.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/yantras?id=sri_yantra"
              className="px-6 py-3.5 rounded-2xl bg-linear-to-r from-[#B38226] via-[#D9531E] to-[#B38226] text-white font-bold text-sm shadow-md hover:brightness-105 transition-all flex items-center gap-2 hover:scale-102"
            >
              <Compass className="w-4 h-4" />
              <span>पवित्र यन्त्र दर्शन (Yantra Darshan)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/puja"
              className="px-6 py-3.5 rounded-2xl bg-[#FDFBF7] text-[#1E1711] font-semibold text-sm border border-[#DDD1BE] hover:border-[#B38226] hover:bg-[#F5EFE4] transition-all flex items-center gap-2 shadow-xs"
            >
              <Flame className="w-4 h-4 text-[#D9531E]" />
              <span>Upasana & Digital Altar</span>
            </Link>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#DDD1BE]">
            <div>
              <p className="text-2xl font-bold font-mono text-[#B38226]">100%</p>
              <p className="text-xs text-[#7D6B57] font-medium">Shastric Geometry</p>
            </div>
            <div>
              <p className="text-2xl font-bold font-mono text-[#D9531E]">4 Themes</p>
              <p className="text-xs text-[#7D6B57] font-medium">Sacred Color Fills</p>
            </div>
            <div>
              <p className="text-2xl font-bold font-mono text-[#B38226]">9 Avarana</p>
              <p className="text-xs text-[#7D6B57] font-medium">Deep Chakra Studies</p>
            </div>
            <div>
              <p className="text-2xl font-bold font-mono text-[#D9531E]">Jyotish</p>
              <p className="text-xs text-[#7D6B57] font-medium">Graha Dosha Remedies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Gallery Showcase */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl lg:text-3xl font-cinzel font-black text-[#1E1711]">Canonical Yantra Exhibition</h2>
            <p className="text-sm text-[#7D6B57] mt-1 font-medium">Select a sacred Yantra to explore layer-by-layer detailing, scriptural slokas, and astrological remedies</p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#B38226] text-white shadow-md'
                    : 'bg-[#F5EFE4] text-[#5C4D3C] border border-[#DDD1BE] hover:text-[#1E1711] hover:border-[#C5A059]'
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
              className="bg-[#FDFBF7] rounded-3xl p-6 border border-[#DDD1BE] hover:border-[#B38226] transition-all group flex flex-col justify-between space-y-4 shadow-[0_4px_18px_rgba(140,90,32,0.05)] hover:shadow-[0_12px_32px_rgba(140,90,32,0.12)]"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#F4EAD8] text-[#805713] border border-[#C5A059]/40">
                    {yantra.deity.split('(')[0]}
                  </span>
                  <span className="text-[11px] text-[#7D6B57] flex items-center gap-1 font-mono font-medium">
                    <Star className="w-3.5 h-3.5 text-[#D9531E]" />
                    <span>{yantra.rulingPlanet.split('(')[0]}</span>
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-rozha font-bold text-[#1E1711] group-hover:text-[#805713] transition-colors">
                    {yantra.nameSanskrit}
                  </h3>
                  <p className="text-xs text-[#B38226] font-cinzel font-bold mt-0.5">{yantra.nameEnglish}</p>
                  <p className="text-xs text-[#7D6B57] italic mt-1 font-sans">{yantra.citation}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#EFE7DA] flex items-center justify-between">
                <span className="text-xs text-[#7D6B57] font-mono">{yantra.tradition.split('(')[0]}</span>
                <Link
                  href={`/yantras?id=${yantra.id}`}
                  className="flex items-center gap-1.5 text-xs font-bold text-[#B38226] group-hover:text-[#D9531E] transition-colors"
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
      <section className="rounded-3xl p-8 border border-[#C5A059] bg-linear-to-r from-[#FDFBF7] via-[#F8F1E5] to-[#F1E5D2] flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_8px_30px_rgba(140,90,32,0.08)]">
        <div className="space-y-2 max-w-xl">
          <div className="flex items-center gap-2 text-[#D9531E] text-xs font-bold uppercase tracking-wider">
            <Flame className="w-4 h-4" />
            <span>Digital Temple Shrine</span>
          </div>
          <h3 className="text-2xl font-cinzel font-bold text-[#1E1711]">Interactive Puja Vidhi & Upasana Studio</h3>
          <p className="text-sm text-[#5C4D3C] font-sans leading-relaxed">
            Perform authentic Panchopachara and Shodashopachara rituals with traditional mantras, offering gestures (Deepam, Dhoopam, Pushpam, Naivedyam), and synchronized Aarti recitations.
          </p>
        </div>

        <Link
          href="/puja"
          className="px-6 py-3.5 rounded-2xl bg-linear-to-r from-[#D9531E] to-[#B38226] text-white font-bold text-sm shadow-md hover:brightness-105 transition-all flex items-center gap-2 shrink-0 cursor-pointer"
        >
          <span>Open Digital Altar</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
