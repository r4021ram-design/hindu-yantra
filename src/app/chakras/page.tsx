'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  KUNDALINI_CHAKRAS_DATABASE,
  SHASTRI_GRANTHIS_METADATA,
  KundaliniChakraEntry,
  getChakraById
} from '@/lib/yantras/kundalini-chakras-database';
import {
  Sparkles,
  Zap,
  Flame,
  Volume2,
  BookOpen,
  Eye,
  Maximize2,
  ChevronRight,
  Shield,
  Activity,
  Layers,
  Compass
} from 'lucide-react';

export default function KundaliniChakrasPage() {
  const [selectedChakraId, setSelectedChakraId] = useState<string>('muladhara');
  const [activeTab, setActiveTab] = useState<'darshan' | 'shastra' | 'sadhana' | 'matrix'>('darshan');
  const [japaCount, setJapaCount] = useState<number>(0);

  const selectedChakra: KundaliniChakraEntry =
    getChakraById(selectedChakraId) || KUNDALINI_CHAKRAS_DATABASE[0];

  // Granthi status for current chakra
  const activeGranthi = selectedChakra.granthi;

  return (
    <div className="min-h-screen bg-[#F7F3EB] text-[#1E1711] pb-24 selection:bg-[#B38226] selection:text-[#FFFFFF]">
      {/* Hero Banner */}
      <div className="bg-linear-to-b from-[#EDE4D3] via-[#F4EDE0] to-[#F7F3EB] border-b border-[#DDD1BE] px-4 py-8 lg:py-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs uppercase tracking-widest font-mono font-bold text-[#805713] bg-[#E8DCBF] px-3 py-1 rounded-full border border-[#C5A059]/40 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#D9531E]" />
                  षट्चक्रनिरूपणम् • कुण्डलिनी योग विज्ञान
                </span>
                <span className="text-xs font-serif text-[#7D6B57]">
                  Authoritative Shastric Research
                </span>
              </div>
              <h1 className="text-2xl lg:text-4xl font-black font-cinzel text-[#1E1711] tracking-wide">
                कुण्डलिनी षट्चक्र एवं सहस्रार दर्शन
              </h1>
              <p className="text-sm lg:text-base text-[#5C4D3C] mt-2 max-w-3xl leading-relaxed">
                स्वामी पूर्णानन्द परमहंस कृत <strong className="text-[#805713]">"षट्चक्रनिरूपणम्"</strong> एवं गोरक्षपद्धति के मूल संस्कृत श्लोकों पर आधारित ७ सूक्ष्म प्राण-केन्द्रों, तत्त्व मण्डलों, मातृका अक्षरों, योगिनियों एवं ग्रन्थियों का प्रामाणिक दिग्दर्शन।
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-3">
              <Link
                href={`/yantras?id=${selectedChakra.id}_chakra`}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-linear-to-r from-[#B38226] via-[#D9531E] to-[#B38226] text-white font-bold text-xs shadow-md hover:brightness-105 transition-all"
              >
                <Eye className="w-4 h-4" />
                <span>३D वेदी में दर्शन करें</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Interactive Sushumna Spinal Axis (4 cols) */}
          <div className="lg:col-span-4 bg-[#FDFBF7] rounded-3xl p-6 border border-[#DDD1BE] shadow-[0_4px_24px_rgba(140,90,32,0.06)] flex flex-col items-center">
            <div className="w-full flex items-center justify-between border-b border-[#E8D9BF] pb-4 mb-4">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-[#805713] font-cinzel">
                  मेरुदण्ड सुषुम्ना मार्ग
                </h2>
                <p className="text-[11px] text-[#7D6B57]">
                  इड़ा • पिंगला • सुषुम्ना प्राण प्रवाह
                </p>
              </div>
              <span className="text-xs font-mono font-bold bg-[#F4EAD8] text-[#805713] px-2 py-0.5 rounded border border-[#C5A059]/40">
                ७ चक्र
              </span>
            </div>

            {/* Ascending Spinal Column with Glowing Nodes */}
            <div className="relative w-full max-w-xs py-4 flex flex-col gap-3">
              {/* Central Sushumna Line */}
              <div className="absolute left-1/2 top-4 bottom-4 w-1 bg-linear-to-b from-[#FFA000] via-[#455A64] to-[#8C6500] -translate-x-1/2 rounded-full opacity-40 pointer-events-none" />

              {[...KUNDALINI_CHAKRAS_DATABASE].reverse().map((chakra) => {
                const isSelected = selectedChakraId === chakra.id;
                return (
                  <button
                    key={chakra.id}
                    onClick={() => {
                      setSelectedChakraId(chakra.id);
                      setJapaCount(0);
                    }}
                    className={`relative z-10 w-full flex items-center justify-between p-3.5 rounded-2xl transition-all border ${
                      isSelected
                        ? 'bg-[#FFF9EB] border-[#B38226] shadow-md scale-[1.02]'
                        : 'bg-[#F9F5EC] border-[#E8D9BF] hover:bg-[#F2ECE0] opacity-85 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shadow-inner transition-transform"
                        style={{
                          backgroundColor: `${chakra.tattwa.color}25`,
                          border: `1.5px solid ${chakra.tattwa.color}`,
                          color: '#1E1711'
                        }}
                      >
                        {chakra.bijaMantra}
                      </div>
                      <div className="text-left">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-[#1E1711]">
                            {chakra.nameHindi}
                          </span>
                          <span className="text-[10px] text-[#805713] font-mono">
                            ({chakra.petalsCount} दल)
                          </span>
                        </div>
                        <p className="text-[10px] text-[#7D6B57] line-clamp-1">
                          {chakra.tattwa.nameSanskrit}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] font-mono font-bold text-[#805713] block">
                        #{chakra.order}
                      </span>
                      {chakra.granthi && (
                        <span className="text-[9px] bg-[#E8DCBF] text-[#8B1A24] px-1.5 py-0.5 rounded font-medium">
                          {chakra.granthi.nameSanskrit}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Granthis Info Banner */}
            <div className="w-full mt-6 pt-4 border-t border-[#E8D9BF]">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#805713] mb-2 flex items-center gap-1.5 font-cinzel">
                <Shield className="w-3.5 h-3.5 text-[#8B1A24]" />
                तीन महाग्रन्थियाँ (Granthi Knots)
              </h3>
              <div className="space-y-1.5">
                {SHASTRI_GRANTHIS_METADATA.map((g, idx) => (
                  <div
                    key={idx}
                    className="p-2 rounded-xl bg-[#F5EFE4] border border-[#E0D4C0] text-[11px]"
                  >
                    <div className="flex justify-between items-center font-bold text-[#1E1711]">
                      <span>{g.nameSanskrit}</span>
                      <span className="text-[10px] text-[#805713]">{g.location.split(' ')[0]}</span>
                    </div>
                    <p className="text-[10px] text-[#7D6B57] mt-0.5 leading-tight">
                      {g.obstacle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Deep Shastric Inspector & High-Res SVG Altar (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* Top Interactive Display Stage */}
            <div className="bg-[#FDFBF7] rounded-3xl p-6 border border-[#DDD1BE] shadow-[0_4px_24px_rgba(140,90,32,0.06)]">
              {/* Header with Title and Mode Tabs */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E8D9BF] gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold bg-[#E8DCBF] text-[#805713] px-2 py-0.5 rounded">
                      चक्र #{selectedChakra.order}
                    </span>
                    <span className="text-xs text-[#7D6B57]">
                      {selectedChakra.spinalLevel}
                    </span>
                  </div>
                  <h2 className="text-2xl font-black font-cinzel text-[#1E1711]">
                    {selectedChakra.nameSanskrit}
                  </h2>
                  <p className="text-xs text-[#5C4D3C] mt-0.5">
                    {selectedChakra.nameEnglish} • {selectedChakra.anatomicalLocationSanskrit}
                  </p>
                </div>

                {/* Sub-tabs */}
                <div className="flex items-center gap-1 bg-[#F5EFE4] p-1 rounded-2xl border border-[#DDD1BE]">
                  <button
                    onClick={() => setActiveTab('darshan')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      activeTab === 'darshan'
                        ? 'bg-[#FDFBF7] text-[#805713] border border-[#C5A059] shadow-sm'
                        : 'text-[#5C4D3C] hover:text-[#1E1711]'
                    }`}
                  >
                    मण्डल दर्शन
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
                    onClick={() => setActiveTab('sadhana')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      activeTab === 'sadhana'
                        ? 'bg-[#FDFBF7] text-[#805713] border border-[#C5A059] shadow-sm'
                        : 'text-[#5C4D3C] hover:text-[#1E1711]'
                    }`}
                  >
                    साधना विधान
                  </button>
                </div>
              </div>

              {/* TAB 1: MANDALA DARSHAN */}
              {activeTab === 'darshan' && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-6">
                  {/* High-Res Vector SVG Stage */}
                  <div className="md:col-span-6 flex flex-col items-center">
                    <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl bg-radial from-[#FFFDF8] to-[#EFE7DA] p-3 border-2 border-[#C5A059]/50 shadow-xl flex items-center justify-center group overflow-hidden">
                      <Image
                        src={selectedChakra.svgPath}
                        alt={selectedChakra.nameHindi}
                        width={320}
                        height={320}
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                        priority
                      />
                      <div className="absolute bottom-2 right-2 flex items-center gap-1.5">
                        <Link
                          href={selectedChakra.svgPath}
                          target="_blank"
                          className="p-1.5 rounded-lg bg-[#FDFBF7]/90 text-[#805713] hover:bg-[#FDFBF7] shadow border border-[#DDD1BE]"
                          title="Open Pure High-Res SVG"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                    {/* Bija Chanting Bar */}
                    <div className="w-full mt-4 flex items-center justify-between p-3 rounded-2xl bg-[#F5EFE4] border border-[#DDD1BE]">
                      <div className="flex items-center gap-2">
                        <Volume2 className="w-4 h-4 text-[#D9531E]" />
                        <span className="text-xs font-bold text-[#1E1711]">
                          बीज मन्त्र:
                        </span>
                        <span className="text-base font-bold text-[#805713] font-serif">
                          {selectedChakra.bijaMantra}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setJapaCount(prev => prev + 1)}
                          className="px-3 py-1 rounded-xl bg-linear-to-r from-[#B38226] to-[#D9531E] text-white text-xs font-bold shadow hover:brightness-105"
                        >
                          जप संख्या: {japaCount}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* 14-Parameter Matrix Panel */}
                  <div className="md:col-span-6 flex flex-col gap-3">
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {/* Tattwa */}
                      <div className="p-3 rounded-xl bg-[#F7F3EB] border border-[#E8D9BF]">
                        <span className="text-[10px] text-[#7D6B57] block">तत्त्व (Element)</span>
                        <span className="font-bold text-[#1E1711] text-xs">
                          {selectedChakra.tattwa.nameSanskrit}
                        </span>
                      </div>

                      {/* Shape */}
                      <div className="p-3 rounded-xl bg-[#F7F3EB] border border-[#E8D9BF]">
                        <span className="text-[10px] text-[#7D6B57] block">मण्डल रूप (Shape)</span>
                        <span className="font-bold text-[#1E1711] text-xs">
                          {selectedChakra.tattwa.shapeSanskrit}
                        </span>
                      </div>

                      {/* Petals */}
                      <div className="p-3 rounded-xl bg-[#F7F3EB] border border-[#E8D9BF]">
                        <span className="text-[10px] text-[#7D6B57] block">दलों की संख्या व वर्ण</span>
                        <span className="font-bold text-[#1E1711] text-xs">
                          {selectedChakra.petalsCount} दल • {selectedChakra.petalColor.split(' ')[0]}
                        </span>
                      </div>

                      {/* Vahana */}
                      <div className="p-3 rounded-xl bg-[#F7F3EB] border border-[#E8D9BF]">
                        <span className="text-[10px] text-[#7D6B57] block">वाहन (Vehicle)</span>
                        <span className="font-bold text-[#1E1711] text-xs">
                          {selectedChakra.bijaVahanaSanskrit}
                        </span>
                      </div>

                      {/* Shiva */}
                      <div className="p-3 rounded-xl bg-[#F7F3EB] border border-[#E8D9BF]">
                        <span className="text-[10px] text-[#7D6B57] block">अधिष्ठातृ देव (Shiva)</span>
                        <span className="font-bold text-[#1E1711] text-xs">
                          {selectedChakra.presidingShiva.nameSanskrit}
                        </span>
                      </div>

                      {/* Yogini */}
                      <div className="p-3 rounded-xl bg-[#F7F3EB] border border-[#E8D9BF]">
                        <span className="text-[10px] text-[#7D6B57] block">योगिनी शक्ति</span>
                        <span className="font-bold text-[#1E1711] text-xs">
                          {selectedChakra.presidingYogini.nameSanskrit}
                        </span>
                      </div>

                      {/* Dhatu */}
                      <div className="p-3 rounded-xl bg-[#F7F3EB] border border-[#E8D9BF]">
                        <span className="text-[10px] text-[#7D6B57] block">शासित धातु (Bodily Tissue)</span>
                        <span className="font-bold text-[#1E1711] text-xs">
                          {selectedChakra.dhatuSanskrit} धातु
                        </span>
                      </div>

                      {/* Planet */}
                      <div className="p-3 rounded-xl bg-[#F7F3EB] border border-[#E8D9BF]">
                        <span className="text-[10px] text-[#7D6B57] block">ज्योतिष ग्रह (Planet)</span>
                        <span className="font-bold text-[#1E1711] text-xs">
                          {selectedChakra.rulingPlanetSanskrit}
                        </span>
                      </div>
                    </div>

                    {/* Petal Syllables (Matrika Varnas) */}
                    <div className="p-3 rounded-xl bg-[#F5EFE4] border border-[#DDD1BE]">
                      <span className="text-[10px] text-[#7D6B57] block mb-1">
                        दलों पर मातृका वर्ण (Matrika Syllables):
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedChakra.petalSyllables.map((syl, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 rounded-md bg-[#FDFBF7] text-[#1E1711] border border-[#C5A059]/40 font-serif font-bold text-xs"
                          >
                            {syl}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Granthi note */}
                    {activeGranthi && (
                      <div className="p-3 rounded-xl bg-[#FFF5F5] border border-[#FFCDD2] text-xs">
                        <span className="font-bold text-[#B71C1C] flex items-center gap-1.5 mb-1">
                          <Shield className="w-3.5 h-3.5" />
                          {activeGranthi.nameSanskrit} भेदन (Spiritual Knot)
                        </span>
                        <p className="text-[11px] text-[#5C4D3C]">
                          {activeGranthi.spiritualHurdle}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* TAB 2: SHASTRA (ORIGINAL SANSKRIT VERSES) */}
              {activeTab === 'shastra' && (
                <div className="pt-6 space-y-6">
                  {selectedChakra.shastricVerses.map((verse, vIdx) => (
                    <div
                      key={vIdx}
                      className="p-5 rounded-2xl bg-[#F7F3EB] border border-[#E8D9BF] space-y-3"
                    >
                      <div className="flex items-center justify-between border-b border-[#E0D4C0] pb-2">
                        <span className="text-xs font-bold text-[#805713] font-cinzel">
                          {verse.sourceScripture} ({verse.verseNumber})
                        </span>
                        <span className="text-[10px] text-[#7D6B57]">
                          मूल ग्रन्थ प्रमाण
                        </span>
                      </div>

                      {/* Sanskrit Sloka */}
                      <pre className="font-serif text-sm md:text-base font-bold text-[#8B1A24] leading-relaxed whitespace-pre-wrap bg-[#FFFDF8] p-4 rounded-xl border border-[#E8D9BF]">
                        {verse.sanskritSloka}
                      </pre>

                      {/* Transliteration */}
                      <p className="font-mono text-xs text-[#5C4D3C] italic leading-relaxed">
                        {verse.transliteration}
                      </p>

                      {/* Hindi Translation */}
                      <div className="pt-2 border-t border-[#E8D9BF]/60">
                        <span className="text-[11px] font-bold text-[#805713] block mb-0.5">
                          हिन्दी भावार्थ:
                        </span>
                        <p className="text-xs text-[#1E1711] leading-relaxed">
                          {verse.hindiMeaning}
                        </p>
                      </div>

                      {/* English Meaning */}
                      <div className="pt-2">
                        <span className="text-[11px] font-bold text-[#7D6B57] block mb-0.5">
                          English Translation:
                        </span>
                        <p className="text-xs text-[#5C4D3C] leading-relaxed">
                          {verse.englishMeaning}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* TAB 3: SADHANA PROTOCOL */}
              {activeTab === 'sadhana' && (
                <div className="pt-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-[#F7F3EB] border border-[#E8D9BF]">
                      <span className="text-xs font-bold text-[#805713] block mb-1">
                        मुद्रा एवं बन्ध (Mudra & Bandha)
                      </span>
                      <p className="text-xs text-[#1E1711] leading-relaxed">
                        {selectedChakra.sadhanaProtocol.mudraAndBandha}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#F7F3EB] border border-[#E8D9BF]">
                      <span className="text-xs font-bold text-[#805713] block mb-1">
                        प्राणायाम लय (Pranayama Ratio)
                      </span>
                      <p className="text-xs text-[#1E1711] leading-relaxed">
                        {selectedChakra.sadhanaProtocol.pranayamaRatio}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F7F3EB] border border-[#E8D9BF]">
                    <span className="text-xs font-bold text-[#805713] block mb-1">
                      ध्यान बिन्दु (Dhyana Focus)
                    </span>
                    <p className="text-xs text-[#1E1711] leading-relaxed">
                      {selectedChakra.sadhanaProtocol.dhyanaFocus}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FFF9EB] border border-[#C5A059] shadow-sm">
                    <span className="text-xs font-bold text-[#805713] block mb-1">
                      फल एवं सिद्धि (Fruit of Awakening)
                    </span>
                    <p className="text-xs text-[#1E1711] font-medium leading-relaxed">
                      {selectedChakra.sadhanaProtocol.phalaSiddhi}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Section: Complete 7-Chakra Shastric Comparative Table */}
            <div className="bg-[#FDFBF7] rounded-3xl p-6 border border-[#DDD1BE] shadow-[0_4px_24px_rgba(140,90,32,0.06)] overflow-x-auto">
              <div className="flex items-center justify-between border-b border-[#E8D9BF] pb-4 mb-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#805713] font-cinzel">
                  सप्तचक्र तुलनात्मक शास्त्रीय सारणी (14-Parameter Matrix)
                </h3>
                <span className="text-xs font-mono text-[#7D6B57]">
                  Ṣaṭ-Cakra-Nirūpaṇa
                </span>
              </div>

              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-[#E0D4C0] text-[#7D6B57] font-serif">
                    <th className="py-2.5 px-3">चक्र</th>
                    <th className="py-2.5 px-3">दल</th>
                    <th className="py-2.5 px-3">तत्त्व</th>
                    <th className="py-2.5 px-3">बीज</th>
                    <th className="py-2.5 px-3">वाहन</th>
                    <th className="py-2.5 px-3">शिव</th>
                    <th className="py-2.5 px-3">योगिनी</th>
                    <th className="py-2.5 px-3">धातु</th>
                    <th className="py-2.5 px-3">ग्रन्थि</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8D9BF]/60">
                  {KUNDALINI_CHAKRAS_DATABASE.map(c => {
                    const isRowSelected = c.id === selectedChakraId;
                    return (
                      <tr
                        key={c.id}
                        onClick={() => setSelectedChakraId(c.id)}
                        className={`cursor-pointer transition-colors ${
                          isRowSelected
                            ? 'bg-[#FFF9EB] font-bold text-[#805713]'
                            : 'hover:bg-[#F5EFE4] text-[#1E1711]'
                        }`}
                      >
                        <td className="py-2.5 px-3 font-bold">{c.nameHindi}</td>
                        <td className="py-2.5 px-3">{c.petalsCount}</td>
                        <td className="py-2.5 px-3">{c.tattwa.nameSanskrit.split(' ')[0]}</td>
                        <td className="py-2.5 px-3 font-serif font-bold text-[#8B1A24]">{c.bijaMantra}</td>
                        <td className="py-2.5 px-3">{c.bijaVahanaSanskrit.split(' ')[0]}</td>
                        <td className="py-2.5 px-3">{c.presidingShiva.nameSanskrit.split(' ')[0]}</td>
                        <td className="py-2.5 px-3">{c.presidingYogini.nameSanskrit.split(' ')[0]}</td>
                        <td className="py-2.5 px-3">{c.dhatuSanskrit}</td>
                        <td className="py-2.5 px-3">{c.granthi ? c.granthi.nameSanskrit : '—'}</td>
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
