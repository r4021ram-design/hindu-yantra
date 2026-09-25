'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  YAGYA_KUNDAS_DATABASE,
  YagyaKundaEntry,
  getKundaById,
  calculateKundaDimensions,
  KundaCalculationResult,
  RitualBudgetTier,
  FatMediumType,
  RITUAL_BUDGET_TIERS,
  FAT_MEDIUMS
} from '@/lib/kundas/yagya-kundas-database';
import {
  Flame,
  Sparkles,
  Calculator,
  Compass,
  Maximize2,
  ChevronRight,
  BookOpen,
  Layers,
  Shield,
  Activity,
  Trees,
  CheckCircle2,
  Boxes,
  Coins,
  TrendingDown,
  Info
} from 'lucide-react';

export default function YagyaKundasPage() {
  const [selectedKundaId, setSelectedKundaId] = useState<string>('chaturasra_kunda');
  const [ahutiCount, setAhutiCount] = useState<number>(1000);
  const [selectedTier, setSelectedTier] = useState<RitualBudgetTier>('smarta_grihastha');
  const [selectedFatMedium, setSelectedFatMedium] = useState<FatMediumType>('cow_ghee');
  const [activeTab, setActiveTab] = useState<'darshan' | 'calculator' | 'shastra' | 'samidha' | 'samskara'>('darshan');

  const selectedKunda: YagyaKundaEntry =
    getKundaById(selectedKundaId) || YAGYA_KUNDAS_DATABASE[0];

  const calcResult: KundaCalculationResult = useMemo(() => {
    return calculateKundaDimensions(ahutiCount, selectedKunda.id, selectedTier, selectedFatMedium);
  }, [ahutiCount, selectedKunda.id, selectedTier, selectedFatMedium]);

  const presetAhutis = [108, 1008, 10000, 50000, 100000, 1000000];

  return (
    <div className="min-h-screen bg-[#F7F3EB] text-[#1E1711] pb-24 selection:bg-[#B38226] selection:text-[#FFFFFF]">
      {/* Hero Header */}
      <div className="bg-linear-to-b from-[#EDE4D3] via-[#F4EDE0] to-[#F7F3EB] border-b border-[#DDD1BE] px-4 py-8 lg:py-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs uppercase tracking-widest font-mono font-bold text-[#805713] bg-[#E8DCBF] px-3 py-1 rounded-full border border-[#C5A059]/40 flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-[#D9531E]" />
                  कुण्डमार्तण्डः • शारदातिलकम् • शुल्बसूत्राणि
                </span>
                <span className="text-xs font-serif text-[#7D6B57]">
                  Vedic Geometry & Homa Vidhan
                </span>
              </div>
              <h1 className="text-2xl lg:text-4xl font-black font-cinzel text-[#1E1711] tracking-wide">
                दशविध यज्ञकुण्ड एवं गणितीय निर्माण विन्यास
              </h1>
              <p className="text-sm lg:text-base text-[#5C4D3C] mt-2 max-w-3xl leading-relaxed">
                गोविन्द दैवज्ञ कृत <strong className="text-[#805713]">"कुण्डमार्तण्ड"</strong> एवं <strong className="text-[#805713]">"शारदातिलकम्"</strong> के मूल सूत्रों पर आधारित १० प्रकार के शास्त्रीय यज्ञ कुण्डों, त्रिमेखला, नाभि, योनि एवं आहुति-अनुसार गणितीय माप का प्रामाणिक पोर्टल।
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveTab('calculator')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-linear-to-r from-[#B38226] via-[#D9531E] to-[#B38226] text-white font-bold text-xs shadow-md hover:brightness-105 transition-all"
              >
                <Calculator className="w-4 h-4" />
                <span>आहुति गणितीय कैलकुलेटर</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: 10 Kundas List (4 cols) */}
          <div className="lg:col-span-4 bg-[#FDFBF7] rounded-3xl p-6 border border-[#DDD1BE] shadow-[0_4px_24px_rgba(140,90,32,0.06)] flex flex-col items-center">
            <div className="w-full flex items-center justify-between border-b border-[#E8D9BF] pb-4 mb-4">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-[#805713] font-cinzel">
                  दशविध यज्ञ कुण्ड
                </h2>
                <p className="text-[11px] text-[#7D6B57]">
                  कुण्डमार्तण्ड १० शास्त्रीय आकार
                </p>
              </div>
              <span className="text-xs font-mono font-bold bg-[#F4EAD8] text-[#805713] px-2 py-0.5 rounded border border-[#C5A059]/40">
                १० कुण्ड
              </span>
            </div>

            {/* Kundas List */}
            <div className="w-full space-y-2">
              {YAGYA_KUNDAS_DATABASE.map((kunda) => {
                const isSelected = selectedKunda.id === kunda.id;
                return (
                  <button
                    key={kunda.id}
                    onClick={() => setSelectedKundaId(kunda.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-2xl transition-all border text-left ${
                      isSelected
                        ? 'bg-[#FFF9EB] border-[#B38226] shadow-md scale-[1.02]'
                        : 'bg-[#F9F5EC] border-[#E8D9BF] hover:bg-[#F2ECE0] opacity-85 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs shadow-inner ${
                          isSelected
                            ? 'bg-[#D9531E] text-white'
                            : 'bg-[#EFE7DA] text-[#805713]'
                        }`}
                      >
                        #{kunda.order}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-[#1E1711] block">
                          {kunda.nameHindi}
                        </span>
                        <span className="text-[10px] text-[#7D6B57] line-clamp-1">
                          {kunda.cardinalDirectionSanskrit} • {kunda.presidingDeitySanskrit.split(' ')[0]}
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-[#805713] font-bold">
                      {kunda.shapeGeometry.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Mekhala Overview Card */}
            <div className="w-full mt-6 pt-4 border-t border-[#E8D9BF]">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#805713] mb-2 flex items-center gap-1.5 font-cinzel">
                <Layers className="w-3.5 h-3.5 text-[#805713]" />
                त्रिमेखला विन्यास (3 Sacred Terraces)
              </h3>
              <div className="space-y-1.5 text-[11px]">
                <div className="p-2 rounded-xl bg-[#FFFFFF] border border-[#DDD1BE] flex items-center justify-between">
                  <span className="font-bold text-[#5C4D3C]">प्रथमा मेखला (ऊपरी)</span>
                  <span className="text-[#805713] font-bold">श्वेत (सत्त्व/ब्रह्मा)</span>
                </div>
                <div className="p-2 rounded-xl bg-[#FFF5F2] border border-[#FFCDD2] flex items-center justify-between">
                  <span className="font-bold text-[#B71C1C]">द्वितीया मेखला (मध्य)</span>
                  <span className="text-[#B71C1C] font-bold">रक्त (रज/विष्णु)</span>
                </div>
                <div className="p-2 rounded-xl bg-[#ECEFF1] border border-[#CFD8DC] flex items-center justify-between">
                  <span className="font-bold text-[#263238]">तृतीया मेखला (निचली)</span>
                  <span className="text-[#263238] font-bold">कृष्ण/नील (तम/शिव)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Stage & Calculator (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* Top Container */}
            <div className="bg-[#FDFBF7] rounded-3xl p-6 border border-[#DDD1BE] shadow-[0_4px_24px_rgba(140,90,32,0.06)]">
              {/* Header with Title and Mode Tabs */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E8D9BF] gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold bg-[#E8DCBF] text-[#805713] px-2 py-0.5 rounded">
                      कुण्ड #{selectedKunda.order}
                    </span>
                    <span className="text-xs text-[#7D6B57]">
                      {selectedKunda.cardinalDirectionSanskrit}
                    </span>
                  </div>
                  <h2 className="text-2xl font-black font-cinzel text-[#1E1711]">
                    {selectedKunda.nameSanskrit}
                  </h2>
                  <p className="text-xs text-[#5C4D3C] mt-0.5">
                    {selectedKunda.nameEnglish} • {selectedKunda.shapeGeometrySanskrit}
                  </p>
                </div>

                {/* Sub-tabs */}
                <div className="flex items-center gap-1 bg-[#F5EFE4] p-1 rounded-2xl border border-[#DDD1BE] flex-wrap">
                  <button
                    onClick={() => setActiveTab('darshan')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      activeTab === 'darshan'
                        ? 'bg-[#FDFBF7] text-[#805713] border border-[#C5A059] shadow-sm'
                        : 'text-[#5C4D3C] hover:text-[#1E1711]'
                    }`}
                  >
                    कुण्ड दर्शन
                  </button>
                  <button
                    onClick={() => setActiveTab('calculator')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      activeTab === 'calculator'
                        ? 'bg-[#FDFBF7] text-[#805713] border border-[#C5A059] shadow-sm'
                        : 'text-[#5C4D3C] hover:text-[#1E1711]'
                    }`}
                  >
                    आहुति कैलकुलेटर
                  </button>
                  <button
                    onClick={() => setActiveTab('shastra')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      activeTab === 'shastra'
                        ? 'bg-[#FDFBF7] text-[#805713] border border-[#C5A059] shadow-sm'
                        : 'text-[#5C4D3C] hover:text-[#1E1711]'
                    }`}
                  >
                    संस्कृत श्लोक
                  </button>
                  <button
                    onClick={() => setActiveTab('samidha')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      activeTab === 'samidha'
                        ? 'bg-[#FDFBF7] text-[#805713] border border-[#C5A059] shadow-sm'
                        : 'text-[#5C4D3C] hover:text-[#1E1711]'
                    }`}
                  >
                    समिधा व हविष्य
                  </button>
                </div>
              </div>

              {/* TAB 1: KUNDA DARSHAN */}
              {activeTab === 'darshan' && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-6">
                  {/* SVG Display Stage */}
                  <div className="md:col-span-6 flex flex-col items-center">
                    <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl bg-radial from-[#FFFDF8] to-[#EFE7DA] p-3 border-2 border-[#C5A059]/50 shadow-xl flex items-center justify-center group overflow-hidden">
                      <Image
                        src={selectedKunda.svgPath}
                        alt={selectedKunda.nameHindi}
                        width={320}
                        height={320}
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                        priority
                      />
                      <div className="absolute bottom-2 right-2 flex items-center gap-1.5">
                        <Link
                          href={selectedKunda.svgPath}
                          target="_blank"
                          className="p-1.5 rounded-lg bg-[#FDFBF7]/90 text-[#805713] hover:bg-[#FDFBF7] shadow border border-[#DDD1BE]"
                          title="Open Pure High-Res SVG"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                    <div className="w-full mt-4 p-3 rounded-2xl bg-[#F5EFE4] border border-[#DDD1BE] text-center">
                      <span className="text-[11px] text-[#7D6B57] block font-mono">
                        कुण्ड ज्यामिति • नाभि • योनि (जलनिर्गम)
                      </span>
                      <span className="text-xs font-bold text-[#1E1711]">
                        {selectedKunda.shapeGeometrySanskrit}
                      </span>
                    </div>
                  </div>

                  {/* Kunda Specifications Matrix */}
                  <div className="md:col-span-6 flex flex-col gap-3">
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {/* Direction */}
                      <div className="p-3 rounded-xl bg-[#F7F3EB] border border-[#E8D9BF]">
                        <span className="text-[10px] text-[#7D6B57] block">दिक् स्थिति (Direction)</span>
                        <span className="font-bold text-[#1E1711] text-xs">
                          {selectedKunda.cardinalDirectionSanskrit}
                        </span>
                      </div>

                      {/* Presiding Deity */}
                      <div className="p-3 rounded-xl bg-[#F7F3EB] border border-[#E8D9BF]">
                        <span className="text-[10px] text-[#7D6B57] block">अधिष्ठातृ देवता</span>
                        <span className="font-bold text-[#1E1711] text-xs">
                          {selectedKunda.presidingDeitySanskrit}
                        </span>
                      </div>

                      {/* Fruit Purpose */}
                      <div className="p-3 rounded-xl bg-[#F7F3EB] border border-[#E8D9BF] col-span-2">
                        <span className="text-[10px] text-[#7D6B57] block">अभीष्ट फल (Purpose)</span>
                        <span className="font-bold text-[#805713] text-xs">
                          {selectedKunda.fruitPurposeSanskrit}
                        </span>
                      </div>
                    </div>

                    {/* Suitable Yagyas */}
                    <div className="p-3 rounded-xl bg-[#F5EFE4] border border-[#DDD1BE]">
                      <span className="text-[10px] text-[#7D6B57] block mb-1">
                        उपयुक्त यज्ञ एवं अनुष्ठान (Suitable Rituals):
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedKunda.suitableYagyas.map((yagya, yIdx) => (
                          <span
                            key={yIdx}
                            className="px-2 py-0.5 rounded-md bg-[#FDFBF7] text-[#1E1711] border border-[#C5A059]/40 font-bold text-[11px]"
                          >
                            {yagya}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Mekhala Detailed Specs */}
                    <div className="p-3 rounded-xl bg-[#F7F3EB] border border-[#E8D9BF] text-xs space-y-1">
                      <span className="text-[10px] font-bold text-[#805713] block">
                        मेखला एवं कण्ठ-नाभि विन्यास:
                      </span>
                      <p className="text-[11px] text-[#5C4D3C]">
                        • {selectedKunda.mekhalaSpecs.tier1White}
                      </p>
                      <p className="text-[11px] text-[#5C4D3C]">
                        • {selectedKunda.mekhalaSpecs.tier2Red}
                      </p>
                      <p className="text-[11px] text-[#5C4D3C]">
                        • {selectedKunda.mekhalaSpecs.tier3Dark}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: MATHEMATICAL AHUTI CALCULATOR */}
              {activeTab === 'calculator' && (
                <div className="pt-6 space-y-6">
                  {/* Ahuti Input Bar */}
                  <div className="p-5 rounded-2xl bg-[#FFFDF8] border border-[#C5A059] shadow-sm space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <h3 className="text-sm font-bold text-[#805713] font-cinzel flex items-center gap-1.5">
                          <Calculator className="w-4 h-4 text-[#D9531E]" />
                          आहुति संख्या निर्धारण (Ahuti Count)
                        </h3>
                        <p className="text-xs text-[#7D6B57]">
                          *कुण्डमार्तण्ड* नियम: अयुते त्वेकहस्तं स्याच्चतुर्हस्तं तु लक्षके
                        </p>
                      </div>

                      {/* Number Input */}
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          value={ahutiCount}
                          onChange={(e) => setAhutiCount(Math.max(1, Number(e.target.value)))}
                          className="w-36 px-3 py-1.5 rounded-xl border border-[#C5A059] bg-[#FFF] font-mono font-bold text-sm text-[#1E1711] text-right"
                        />
                        <span className="text-xs font-bold text-[#805713]">आहुति</span>
                      </div>
                    </div>

                    {/* Presets */}
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-[#E8D9BF]">
                      <span className="text-xs text-[#7D6B57] self-center mr-1">मानक अनुष्ठान:</span>
                      {presetAhutis.map((count) => (
                        <button
                          key={count}
                          onClick={() => setAhutiCount(count)}
                          className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition-all ${
                            ahutiCount === count
                              ? 'bg-[#B38226] text-white shadow-sm'
                              : 'bg-[#F5EFE4] text-[#5C4D3C] hover:bg-[#EFE7DA]'
                          }`}
                        >
                          {count.toLocaleString('hi-IN')}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Tier Selector Section */}
                  <div className="p-5 rounded-2xl bg-[#FFFDF8] border border-[#DDD1BE] shadow-sm space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div>
                        <h4 className="text-xs font-bold text-[#805713] uppercase tracking-wider font-cinzel flex items-center gap-1.5">
                          <Coins className="w-4 h-4 text-[#D9531E]" />
                          कलियुग अनुष्ठान एवं बजट विन्यास (Ritual & Budget Tiers)
                        </h4>
                        <p className="text-[11px] text-[#7D6B57]">
                          आधुनिक युग में यजमान के सामर्थ्य सन्तुलन हेतु पराशर स्मृति एवं मीमांसा प्रतिनिधि सिद्धान्त
                        </p>
                      </div>
                      <span className="text-[10px] font-mono text-[#805713] bg-[#F4EAD8] px-2 py-0.5 rounded border border-[#C5A059]/40 self-start sm:self-auto">
                        ३ शास्त्रीय विकल्प
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                      {RITUAL_BUDGET_TIERS.map((tier) => {
                        const isCurrent = selectedTier === tier.id;
                        return (
                          <button
                            key={tier.id}
                            onClick={() => setSelectedTier(tier.id)}
                            className={`p-4 rounded-xl border text-left transition-all relative ${
                              isCurrent
                                ? 'bg-[#FFF9EB] border-[#B38226] shadow-md ring-1 ring-[#B38226]'
                                : 'bg-[#F9F5EC] border-[#E8D9BF] hover:bg-[#F2ECE0] opacity-90'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2 mb-1.5">
                              <span
                                className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                  tier.isRecommended
                                    ? 'bg-[#15803D] text-white'
                                    : isCurrent
                                    ? 'bg-[#B38226] text-white'
                                    : 'bg-[#E5DAC6] text-[#6A5744]'
                                }`}
                              >
                                {tier.badgeHindi}
                              </span>
                              <span className="text-[11px] font-mono font-bold text-[#D9531E]">
                                ~{tier.fatGramsPerAhuti}g घृत/आहुति
                              </span>
                            </div>

                            <h5 className="text-xs font-bold text-[#1E1711] mb-1">
                              {tier.nameHindi}
                            </h5>
                            <p className="text-[10px] text-[#805713] font-semibold mb-1.5">
                              {tier.taglineHindi}
                            </p>
                            <p className="text-[10px] text-[#5C4D3C] line-clamp-2 leading-relaxed">
                              {tier.descriptionHindi}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Fat / Dravya Medium Selector */}
                  <div className="p-4 rounded-2xl bg-[#FFFDF8] border border-[#DDD1BE] space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#805713] flex items-center gap-1.5 font-cinzel">
                        <Flame className="w-3.5 h-3.5 text-[#D9531E]" />
                        हविष्य स्नेह द्रव्य (Fat Medium Option):
                      </span>
                      <span className="text-[11px] text-[#7D6B57]">
                        जैमिनि ६.३ प्रतिनिधि नियम
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {FAT_MEDIUMS.map((med) => {
                        const isChosen = selectedFatMedium === med.id;
                        return (
                          <button
                            key={med.id}
                            onClick={() => setSelectedFatMedium(med.id)}
                            className={`p-3 rounded-xl border text-left transition-all ${
                              isChosen
                                ? 'bg-[#FFF9EB] border-[#D9531E] shadow-sm ring-1 ring-[#D9531E]'
                                : 'bg-[#F9F5EC] border-[#E8D9BF] hover:bg-[#F2ECE0]'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-[#1E1711]">
                                {med.nameHindi}
                              </span>
                              <span className="text-[11px] font-mono font-bold text-[#805713]">
                                ₹{med.pricePerKgINR}/kg
                              </span>
                            </div>
                            <span className="text-[10px] text-[#7D6B57] block mt-1 line-clamp-1">
                              {med.suitableForHindi}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Calculated Dimensions Output Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {/* Hastas */}
                    <div className="p-4 rounded-2xl bg-[#F7F3EB] border border-[#E8D9BF]">
                      <span className="text-[10px] text-[#7D6B57] block">हस्त प्रमाण (Hastas)</span>
                      <span className="text-xl font-bold font-mono text-[#805713]">
                        {calcResult.hastas} हस्त
                      </span>
                      <span className="text-[10px] text-[#7D6B57] block mt-0.5">
                        ({calcResult.angulas} अंगुल)
                      </span>
                    </div>

                    {/* Width & Length */}
                    <div className="p-4 rounded-2xl bg-[#F7F3EB] border border-[#E8D9BF]">
                      <span className="text-[10px] text-[#7D6B57] block">कुण्ड विस्तार (Width × Length)</span>
                      <span className="text-lg font-bold font-mono text-[#1E1711]">
                        {calcResult.widthInches}″ × {calcResult.lengthInches}″
                      </span>
                      <span className="text-[10px] text-[#7D6B57] block mt-0.5">
                        ({calcResult.widthCm} cm)
                      </span>
                    </div>

                    {/* Depth (Khata) */}
                    <div className="p-4 rounded-2xl bg-[#F7F3EB] border border-[#E8D9BF]">
                      <span className="text-[10px] text-[#7D6B57] block">कुण्ड गहराई (समखात नियम)</span>
                      <span className="text-lg font-bold font-mono text-[#1E1711]">
                        {calcResult.depthInches}″
                      </span>
                      <span className="text-[10px] text-[#7D6B57] block mt-0.5">
                        ({calcResult.depthCm} cm)
                      </span>
                    </div>

                    {/* Estimated Bricks */}
                    <div className="p-4 rounded-2xl bg-[#F7F3EB] border border-[#E8D9BF]">
                      <span className="text-[10px] text-[#7D6B57] block">अनुमानित वैदिक ईंटें</span>
                      <span className="text-xl font-bold font-mono text-[#D9531E]">
                        ~{calcResult.estimatedBricks}
                      </span>
                      <span className="text-[10px] text-[#7D6B57] block mt-0.5">
                        (ईष्टिका संख्या)
                      </span>
                    </div>
                  </div>

                  {/* Materials Quantities Row */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Chosen Fat Medium */}
                    <div className="p-4 rounded-2xl bg-[#FFF9EB] border border-[#E0D4C0]">
                      <div className="flex items-center gap-2 mb-1">
                        <Flame className="w-4 h-4 text-[#D9531E]" />
                        <span className="text-xs font-bold text-[#805713]">
                          स्नेह द्रव्य ({calcResult.fatMediumMeta.nameHindi})
                        </span>
                      </div>
                      <span className="text-2xl font-bold font-mono text-[#1E1711]">
                        {calcResult.fatMediumKg} कि.ग्रा.
                      </span>
                      <p className="text-[10px] text-[#7D6B57] mt-1">
                        {selectedTier === 'kalpokta_grand'
                          ? 'औसत ~८ ग्राम प्रति आहुति + वसोर्धारा'
                          : selectedTier === 'smarta_grihastha'
                          ? 'हविष्य-अभिघार सिञ्चन (~२.५ ग्राम प्रति आहुति)'
                          : 'यथाशक्ति न्यूनतम सिञ्चन (~१.२ ग्राम प्रति आहुति)'}
                      </p>
                    </div>

                    {/* Havisya */}
                    <div className="p-4 rounded-2xl bg-[#FFF9EB] border border-[#E0D4C0]">
                      <div className="flex items-center gap-2 mb-1">
                        <Boxes className="w-4 h-4 text-[#B38226]" />
                        <span className="text-xs font-bold text-[#805713]">
                          हविष्य सामग्री (Havisya Grains)
                        </span>
                      </div>
                      <span className="text-2xl font-bold font-mono text-[#1E1711]">
                        {calcResult.estimatedHavisyaKg} कि.ग्रा.
                      </span>
                      <p className="text-[10px] text-[#7D6B57] mt-1">
                        तिल, जौ, अक्षत, गुग्गुल, औषध, पञ्चमेवा
                      </p>
                    </div>

                    {/* Priests */}
                    <div className="p-4 rounded-2xl bg-[#FFF9EB] border border-[#E0D4C0]">
                      <div className="flex items-center gap-2 mb-1">
                        <Shield className="w-4 h-4 text-[#805713]" />
                        <span className="text-xs font-bold text-[#805713]">
                          अनुशंसित ऋत्विक् संख्या
                        </span>
                      </div>
                      <span className="text-2xl font-bold font-mono text-[#1E1711]">
                        {calcResult.recommendedPriests} पुरोहित
                      </span>
                      <p className="text-[10px] text-[#7D6B57] mt-1">
                        होता, अध्वर्यु, उद्गाता, ब्रह्मा
                      </p>
                    </div>
                  </div>

                  {/* COMPREHENSIVE COST & SAVINGS ESTIMATION CARD */}
                  <div className="p-5 rounded-3xl bg-linear-to-br from-[#FFFDF8] via-[#FAF5EB] to-[#F5EFE4] border-2 border-[#C5A059]/60 shadow-lg space-y-5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E8D9BF] pb-4">
                      <div>
                        <span className="text-[10px] uppercase font-mono font-bold text-[#805713] tracking-widest block mb-0.5">
                          REAL-TIME BUDGET ESTIMATE
                        </span>
                        <h4 className="text-base font-bold text-[#1E1711] font-cinzel flex items-center gap-2">
                          <Coins className="w-5 h-5 text-[#B38226]" />
                          लागत एवं सामग्री बचत विन्यास (Cost & Savings Analysis)
                        </h4>
                      </div>

                      {/* Total Cost Display */}
                      <div className="text-left sm:text-right">
                        <span className="text-[11px] text-[#7D6B57] block">
                          कुल अनुमानित सामग्री व्यय:
                        </span>
                        <span className="text-2xl font-black font-mono text-[#805713]">
                          ₹{calcResult.totalEstimatedCostINR.toLocaleString('hi-IN')}
                        </span>
                        <span className="text-[10px] text-[#7D6B57] block">
                          (स्नेह द्रव्य + हविष्य सामग्री)
                        </span>
                      </div>
                    </div>

                    {/* Savings Highlight Banner */}
                    {calcResult.savingsVsGrandINR > 0 ? (
                      <div className="p-4 rounded-2xl bg-[#EBF7EE] border border-[#86EFAC] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-inner">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-[#16A34A] text-white flex items-center justify-center shrink-0">
                            <TrendingDown className="w-6 h-6" />
                          </div>
                          <div>
                            <span className="text-xs font-bold text-[#14532D] block">
                              पारम्परिक कल्पोक्त महामख की तुलना में भारी बचत!
                            </span>
                            <span className="text-lg font-black font-mono text-[#15803D]">
                              ₹{calcResult.savingsVsGrandINR.toLocaleString('hi-IN')} की बचत ({calcResult.savingsPercentage}% Budget Saved)
                            </span>
                          </div>
                        </div>

                        <div className="text-[11px] text-[#166534] bg-[#DCFCE7] px-3 py-1.5 rounded-xl border border-[#86EFAC] font-mono">
                          पारम्परिक मानक व्यय: <strong>₹{calcResult.grandCostBenchmarkINR.toLocaleString('hi-IN')}</strong>
                        </div>
                      </div>
                    ) : (
                      <div className="p-3 rounded-xl bg-[#FFF9EB] border border-[#E0D4C0] text-xs text-[#805713] flex items-center gap-2">
                        <Info className="w-4 h-4 text-[#D9531E] shrink-0" />
                        <span>
                          आप वर्तमान में पारम्परिक <strong>कल्पोक्त महामख (८ ग्राम प्रति आहुति)</strong> मानक देख रहे हैं। गृहस्थों हेतु <strong>गृहस्थ स्मार्त विधान</strong> से ₹{((calcResult.ahutiCount * 0.0055 * 850)).toLocaleString('hi-IN', { maximumFractionDigits: 0 })} तक की बचत सम्भव है।
                        </span>
                      </div>
                    )}

                    {/* Cost Breakdown Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      <div className="p-3.5 rounded-xl bg-[#FDFBF7] border border-[#E8D9BF] space-y-1.5">
                        <div className="flex justify-between items-center text-[#5C4D3C]">
                          <span>{calcResult.fatMediumMeta.nameHindi} ({calcResult.fatMediumKg} kg × ₹{calcResult.fatMediumMeta.pricePerKgINR})</span>
                          <span className="font-mono font-bold text-[#1E1711]">₹{calcResult.fatMediumCostINR.toLocaleString('hi-IN')}</span>
                        </div>
                        <div className="flex justify-between items-center text-[#5C4D3C]">
                          <span>हविष्य सामग्री ({calcResult.estimatedHavisyaKg} kg × ₹200)</span>
                          <span className="font-mono font-bold text-[#1E1711]">₹{calcResult.havisyaCostINR.toLocaleString('hi-IN')}</span>
                        </div>
                        <div className="border-t border-[#E8D9BF] pt-1.5 flex justify-between items-center font-bold text-[#805713]">
                          <span>कुल अनुमानित लागत</span>
                          <span className="font-mono text-sm">₹{calcResult.totalEstimatedCostINR.toLocaleString('hi-IN')}</span>
                        </div>
                      </div>

                      {/* Shastric Rule Summary */}
                      <div className="p-3.5 rounded-xl bg-[#FDFBF7] border border-[#E8D9BF] space-y-1 text-[11px] text-[#5C4D3C]">
                        <span className="font-bold text-[#805713] block">
                          शास्त्रसम्मत विधान सम्पुष्टि:
                        </span>
                        <p className="leading-relaxed">
                          {calcResult.shastricGuidance}
                        </p>
                        <span className="text-[10px] text-[#7D6B57] block pt-1">
                          • {calcResult.fatMediumMeta.shastricRuleHindi}
                        </span>
                      </div>
                    </div>

                    {/* Sacred Shastric Box on Kaliyuga Practice */}
                    <div className="p-4 rounded-2xl bg-[#F5EFE4] border border-[#DDD1BE] text-xs space-y-2">
                      <div className="flex items-center gap-1.5 text-[#805713] font-bold">
                        <BookOpen className="w-4 h-4 text-[#D9531E]" />
                        <span>कलियुग में यजन विधान: शास्त्र क्या कहते हैं?</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px] text-[#5C4D3C] leading-relaxed">
                        <div className="p-2.5 rounded-lg bg-[#FFFDF8] border border-[#E8D9BF]">
                          <strong className="text-[#805713] block mb-1">१. पराशर स्मृति (कलौ पाराशराः स्मृताः):</strong>
                          "कृते तु मानवा धर्मास्त्रेतायां गौतमाः स्मृताः । द्वापरे शङ्खलिखिताः कलौ पाराशराः स्मृताः ॥" कलियुग में द्रव्य-विस्तार के कारण ऋण अथवा आर्थिक कष्ट में पड़ना निषिद्ध है। अपनी शक्ति के अनुसार (यथाशक्ति) भक्ति-भाव से किया गया सूक्ष्म होम भी सहस्र गुना फल देता है।
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#FFFDF8] border border-[#E8D9BF]">
                          <strong className="text-[#805713] block mb-1">२. जैमिनि प्रतिनिधि द्रव्य सिद्धान्त (६.३):</strong>
                          यदि मुख्य द्रव्य (गोघृत) दुर्लभ अथवा अत्यधिक मूल्यवान हो, तो गुण-साम्य रखने वाले प्रतिनिधि द्रव्य (तिल तैल अथवा हविष्य-अभिघार) का प्रयोग पूर्णतः विधिमान्य है। इससे मन्त्र का कोई दोष नहीं होता।
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: SHASTRA (ORIGINAL SANSKRIT SLOKAS) */}
              {activeTab === 'shastra' && (
                <div className="pt-6 space-y-6">
                  {selectedKunda.shastricCitations.map((cit, cIdx) => (
                    <div
                      key={cIdx}
                      className="p-5 rounded-2xl bg-[#F7F3EB] border border-[#E8D9BF] space-y-3"
                    >
                      <div className="flex items-center justify-between border-b border-[#E0D4C0] pb-2">
                        <span className="text-xs font-bold text-[#805713] font-cinzel">
                          {cit.sourceScripture} ({cit.verseRef})
                        </span>
                        <span className="text-[10px] text-[#7D6B57]">
                          मूल ग्रन्थ प्रमाण
                        </span>
                      </div>

                      {/* Sanskrit Sloka */}
                      <pre className="font-serif text-sm md:text-base font-bold text-[#8B1A24] leading-relaxed whitespace-pre-wrap bg-[#FFFDF8] p-4 rounded-xl border border-[#E8D9BF]">
                        {cit.sanskritSloka}
                      </pre>

                      {/* Hindi Translation */}
                      <div className="pt-2 border-t border-[#E8D9BF]/60">
                        <span className="text-[11px] font-bold text-[#805713] block mb-0.5">
                          हिन्दी भावार्थ:
                        </span>
                        <p className="text-xs text-[#1E1711] leading-relaxed">
                          {cit.hindiMeaning}
                        </p>
                      </div>

                      {/* English Meaning */}
                      <div className="pt-2">
                        <span className="text-[11px] font-bold text-[#7D6B57] block mb-0.5">
                          English Translation:
                        </span>
                        <p className="text-xs text-[#5C4D3C] leading-relaxed">
                          {cit.englishMeaning}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* TAB 4: SAMIDHA & HAVISYA */}
              {activeTab === 'samidha' && (
                <div className="pt-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-[#F7F3EB] border border-[#E8D9BF]">
                      <span className="text-xs font-bold text-[#805713] block mb-1">
                        प्रधान अनुशंसित समिधा (Sacred Wood)
                      </span>
                      <p className="text-sm font-bold text-[#1E1711]">
                        {selectedKunda.recommendedSamidha}
                      </p>
                      <p className="text-xs text-[#7D6B57] mt-1">
                        संस्कृत नाम: {selectedKunda.samidhaTreeSanskrit}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#F7F3EB] border border-[#E8D9BF]">
                      <span className="text-xs font-bold text-[#805713] block mb-1">
                        हविष्य द्रव्य घटक (Offerings)
                      </span>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {selectedKunda.havisyaIngredients.map((ing, iIdx) => (
                          <span
                            key={iIdx}
                            className="px-2 py-0.5 rounded-md bg-[#FFFDF8] text-[#1E1711] border border-[#C5A059]/40 text-xs font-medium"
                          >
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Classical 9 Planetary Samidha Table */}
                  <div className="p-4 rounded-2xl bg-[#FFFDF8] border border-[#E8D9BF] overflow-x-auto">
                    <span className="text-xs font-bold text-[#805713] block mb-2 font-cinzel">
                      नवग्रह समिधा चक्र (Nine Planetary Woods)
                    </span>
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-[#E0D4C0] text-[#7D6B57]">
                          <th className="py-1 px-2">ग्रह</th>
                          <th className="py-1 px-2">समिधा वृक्ष</th>
                          <th className="py-1 px-2">प्रभाव / सिद्धि</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E8D9BF]/50">
                        <tr><td className="py-1 px-2 font-bold">सूर्य</td><td className="py-1 px-2">अर्क (मदार)</td><td className="py-1 px-2">तेज व आरोग्य</td></tr>
                        <tr><td className="py-1 px-2 font-bold">चन्द्र</td><td className="py-1 px-2">पलाश (ढाक)</td><td className="py-1 px-2">मनःशान्ति व सन्तान</td></tr>
                        <tr><td className="py-1 px-2 font-bold">मङ्गल</td><td className="py-1 px-2">खदिर (खैर)</td><td className="py-1 px-2">शौर्य व भूमि लाभ</td></tr>
                        <tr><td className="py-1 px-2 font-bold">बुध</td><td className="py-1 px-2">अपामार्ग (चिरचिटा)</td><td className="py-1 px-2">बुद्धि व वाक् सिद्धि</td></tr>
                        <tr><td className="py-1 px-2 font-bold">गुरु</td><td className="py-1 px-2">अश्वत्थ (पीपल)</td><td className="py-1 px-2">ज्ञान, धर्म व मोक्ष</td></tr>
                        <tr><td className="py-1 px-2 font-bold">शुक्र</td><td className="py-1 px-2">औदुम्बर (गूलर)</td><td className="py-1 px-2">धन व ऐश्वर्य</td></tr>
                        <tr><td className="py-1 px-2 font-bold">शनि</td><td className="py-1 px-2">शमी (खेजड़ी)</td><td className="py-1 px-2">संकट मुक्ति व शान्ति</td></tr>
                        <tr><td className="py-1 px-2 font-bold">राहु</td><td className="py-1 px-2">दूर्वा घास</td><td className="py-1 px-2">वंश रक्षा व दीर्घायु</td></tr>
                        <tr><td className="py-1 px-2 font-bold">केतु</td><td className="py-1 px-2">कुश (दर्भ)</td><td className="py-1 px-2">मोक्ष व आध्यात्मिक शुद्धि</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Section: 10 Kundas Comparative Matrix */}
            <div className="bg-[#FDFBF7] rounded-3xl p-6 border border-[#DDD1BE] shadow-[0_4px_24px_rgba(140,90,32,0.06)] overflow-x-auto">
              <div className="flex items-center justify-between border-b border-[#E8D9BF] pb-4 mb-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#805713] font-cinzel">
                  दशविध यज्ञकुण्ड तुलनात्मक शास्त्रीय सारणी (10 Kundas Matrix)
                </h3>
                <span className="text-xs font-mono text-[#7D6B57]">
                  कुण्डमार्तण्ड
                </span>
              </div>

              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-[#E0D4C0] text-[#7D6B57] font-serif">
                    <th className="py-2.5 px-3">क्र.</th>
                    <th className="py-2.5 px-3">कुण्ड नाम</th>
                    <th className="py-2.5 px-3">ज्यामितीय आकार</th>
                    <th className="py-2.5 px-3">दिशा</th>
                    <th className="py-2.5 px-3">प्रधान देवता</th>
                    <th className="py-2.5 px-3">अभीष्ट फल</th>
                    <th className="py-2.5 px-3">समिधा</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8D9BF]/60">
                  {YAGYA_KUNDAS_DATABASE.map(k => {
                    const isRowSelected = k.id === selectedKunda.id;
                    return (
                      <tr
                        key={k.id}
                        onClick={() => setSelectedKundaId(k.id)}
                        className={`cursor-pointer transition-colors ${
                          isRowSelected
                            ? 'bg-[#FFF9EB] font-bold text-[#805713]'
                            : 'hover:bg-[#F5EFE4] text-[#1E1711]'
                        }`}
                      >
                        <td className="py-2.5 px-3 font-mono">#{k.order}</td>
                        <td className="py-2.5 px-3 font-bold">{k.nameHindi}</td>
                        <td className="py-2.5 px-3">{k.shapeGeometrySanskrit.split(' ')[0]}</td>
                        <td className="py-2.5 px-3">{k.cardinalDirectionSanskrit.split(' ')[0]}</td>
                        <td className="py-2.5 px-3">{k.presidingDeitySanskrit.split(' ')[0]}</td>
                        <td className="py-2.5 px-3">{k.fruitPurposeSanskrit.split(' ')[0]}</td>
                        <td className="py-2.5 px-3">{k.samidhaTreeSanskrit.split(' ')[0]}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
