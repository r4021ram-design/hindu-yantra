'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  PATRASADANA_DATABASE,
  PatraEntry,
  getPatraById,
  getPatrasByRow
} from '@/lib/patrasadana/patrasadana-database';
import {
  Flame,
  Sparkles,
  Layers,
  Maximize2,
  ChevronRight,
  BookOpen,
  Shield,
  Trees,
  CheckCircle2,
  RotateCw,
  Info,
  Eye,
  Check,
  Zap,
  Compass
} from 'lucide-react';

export default function PatrasadanaPage() {
  const [selectedPatraId, setSelectedPatraId] = useState<string>('pranita_patra');
  const [vesselState, setVesselState] = useState<'uttana' | 'nyancha'>('uttana');
  const [altarViewMode, setAltarViewMode] = useState<'combined' | 'yantra' | 'patra'>('combined');
  const [selectedTradition, setSelectedTradition] = useState<
    'paraskaraVajaseneyi' | 'ashvalayanaRigveda' | 'apastambaKrishnaYajurveda' | 'tantricSharadaTilakam'
  >('paraskaraVajaseneyi');
  const [activeTab, setActiveTab] = useState<'altar' | 'inspector' | 'underlying_yantras' | 'samskara' | 'wood_science' | 'traditions'>('altar');
  const [activeStep, setActiveStep] = useState<number>(1);

  const selectedPatra: PatraEntry = getPatraById(selectedPatraId) || PATRASADANA_DATABASE[0];

  const traditionNames = {
    paraskaraVajaseneyi: 'शुक्ल यजुर्वेद (वाजसनेयी / पारस्कर)',
    ashvalayanaRigveda: 'ऋग्वेद (आश्वलायन पद्धति)',
    apastambaKrishnaYajurveda: 'कृष्ण यजुर्वेद (आपस्तम्ब / बौधायन)',
    tantricSharadaTilakam: 'तान्त्रिक / शाक्त (शारदातिलकम्)'
  };

  const cleansingSteps = [
    {
      step: 1,
      name: '१. पात्रास्तरण (न्यञ्च् रूप में)',
      short: 'पात्रास्तरण',
      desc: 'कुण्ड के उत्तर में पवित्र दर्भ (कुश) बिछाकर सभी पात्रों को अधोमुख (औंधा) रखना ताकि धूलि-कीट से सुरक्षित रहें।',
      mantra: 'ॐ निरस्तः परावसुः । बर्हिषि पात्राणि सादयति ॥'
    },
    {
      step: 2,
      name: '२. प्रोक्षण संस्कार (जल सिञ्चन)',
      short: 'प्रोक्षण',
      desc: 'प्रोक्षणी पात्र में जल भरकर दो कुश-पवित्रियों द्वारा सभी पात्रों पर पवित्रीकरण हेतु जल छिड़कना।',
      mantra: 'ॐ अपो देवीरुपसृज... देवस्य त्वा सवितुः प्रसवे... प्रोक्षामि ॥'
    },
    {
      step: 3,
      name: '३. उत्तानकरण (सीधा करना)',
      short: 'उत्तानकरण',
      desc: 'प्रत्येक पात्र को मन्त्रोच्चार के साथ सीधा (ऊर्ध्वमुख) करना ताकि वे दिव्य हविष्य ग्रहण करने योग्य बनें।',
      mantra: 'ॐ उत्तानं करोमि । जुहूरसि घृताची नाम्ना... ॥'
    },
    {
      step: 4,
      name: '४. प्रतपन (अग्नि पर तपाना)',
      short: 'प्रतपन',
      desc: 'स्रुक्, स्रुवा और स्फ्य को प्रज्वलित अग्नि की लपटों पर आगे-पीछे तपाकर जीवाणु-रहित और शुष्क करना।',
      mantra: 'ॐ प्रत्युष्टं रक्षः प्रत्युष्टा अरातयो निष्टप्तं रक्षो निष्टप्ता अरातयः ॥'
    },
    {
      step: 5,
      name: '५. सम्मार्जन (दर्भ से शोधन)',
      short: 'सम्माज्जन',
      desc: 'कुश के अग्रभाग से भीतरी भाग और कुश के मूल भाग से बाहरी भाग को पोंछकर पुनः प्रोक्षणी जल से धोना।',
      mantra: 'ॐ सम्मार्ट्मि । अग्रैरन्तरतो मूलैर्बाह्यतः शोधयामि ॥'
    },
    {
      step: 6,
      name: '६. उत्पवन (घृत शोधन)',
      short: 'उत्पवन',
      desc: 'दो कुश-पवित्रियों को अंगूठे व अनामिका से पकड़कर घृतपात्र में डुबोकर तीन बार ऊपर उठाकर शोधन करना।',
      mantra: 'ॐ सविता त्वा पुनातु अच्छिद्रेण पवित्रेण वसोः सूर्यस्य रश्मिभिः स्वाहा ॥'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F7F3EB] text-[#1E1711] pb-24 selection:bg-[#B38226] selection:text-[#FFFFFF]">
      {/* Hero Header */}
      <div className="bg-linear-to-b from-[#EDE4D3] via-[#F4EDE0] to-[#F7F3EB] border-b border-[#DDD1BE] px-4 py-8 lg:py-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="text-xs uppercase tracking-widest font-mono font-bold text-[#805713] bg-[#E8DCBF] px-3 py-1 rounded-full border border-[#C5A059]/40 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#D9531E]" />
                  शतपथ ब्राह्मण • कात्यायन श्रौत • पारस्कर गृह्य • शारदातिलकम्
                </span>
                <span className="text-xs font-serif text-[#7D6B57]">
                  Vedic Patrasadana &amp; Sacred Implements
                </span>
              </div>
              <h1 className="text-2xl lg:text-4xl font-black font-cinzel text-[#1E1711] tracking-wide">
                वैदिक एवं तान्त्रिक पात्रसादन महाविधान
              </h1>
              <p className="text-sm lg:text-base text-[#5C4D3C] mt-2 max-w-3xl leading-relaxed">
                यज्ञकुण्ड के उत्तर (उदीची) भाग में दर्भ-वेदी पर यज्ञ-पात्रों का द्वन्द्व विन्यास, प्रत्येक पात्र के नीचे अङ्कित <strong>अधः-पीठ यन्त्र</strong> (चन्दन, कुङ्कुम, हरिद्रा, अक्षत), काष्ठ-विज्ञान (पलाश, खदिर, वारण, शमी) एवं षड्विध सम्मार्जन का प्रामाणिक पोर्टल।
              </p>
            </div>

            {/* Quick Actions & Links */}
            <div className="flex items-center gap-3">
              <Link
                href="/kundas"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#F5EFE4] text-[#805713] border border-[#C5A059] font-bold text-xs hover:bg-[#EFE7DA] transition-all shadow-xs"
              >
                <Flame className="w-4 h-4 text-[#D9531E]" />
                <span>दशविध कुण्ड दर्शन</span>
              </Link>
              <button
                onClick={() => setActiveTab('underlying_yantras')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-linear-to-r from-[#B38226] via-[#D9531E] to-[#B38226] text-white font-bold text-xs shadow-md hover:brightness-105 transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>अधः-यन्त्र पीठ दर्शन</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-[#DDD1BE] pb-3 overflow-x-auto">
          {[
            { id: 'altar', label: 'वेदी महाविन्यास (Altar Board)', icon: Layers },
            { id: 'inspector', label: 'पात्र लक्षण व काष्ठ-विज्ञान (Inspector)', icon: Eye },
            { id: 'underlying_yantras', label: 'अधः-यन्त्र विन्यास (Underlying Mandalas)', icon: Sparkles },
            { id: 'samskara', label: 'षड्विध सम्मार्जन व शुद्धि (Cleansing)', icon: RotateCw },
            { id: 'wood_science', label: 'काष्ठ व धातु विज्ञान (Sacred Woods)', icon: Trees },
            { id: 'traditions', label: '४ शाखा-पद्धति तुलना (Traditions)', icon: BookOpen }
          ].map((tab) => {
            const Icon = tab.icon;
            const isTabActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs transition-all whitespace-nowrap ${
                  isTabActive
                    ? 'bg-[#B38226] text-white shadow-md'
                    : 'bg-[#FDFBF7] text-[#5C4D3C] hover:bg-[#F2ECE0] border border-[#E8D9BF]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isTabActive ? 'text-white' : 'text-[#805713]'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: INTERACTIVE ALTAR BOARD */}
        {activeTab === 'altar' && (
          <div className="mt-6 space-y-6">
            
            {/* Altar Control Bar: State Switcher, View Mode & Tradition */}
            <div className="p-4 rounded-2xl bg-[#FFFDF8] border border-[#DDD1BE] shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              
              {/* 1. Altar View Mode Switcher (Combined vs Yantras vs Vessels) */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-[#805713] flex items-center gap-1.5 font-cinzel">
                  <Sparkles className="w-4 h-4 text-[#D9531E]" />
                  दर्शन स्वरूप (View):
                </span>
                <div className="flex p-1 rounded-xl bg-[#F5EFE4] border border-[#DDD1BE]">
                  <button
                    onClick={() => setAltarViewMode('combined')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      altarViewMode === 'combined'
                        ? 'bg-[#B38226] text-white shadow-xs'
                        : 'text-[#5C4D3C] hover:text-[#1E1711]'
                    }`}
                  >
                    संयुक्त (पात्र + यन्त्रपीठ)
                  </button>
                  <button
                    onClick={() => setAltarViewMode('yantra')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      altarViewMode === 'yantra'
                        ? 'bg-[#DC2626] text-white shadow-xs'
                        : 'text-[#5C4D3C] hover:text-[#1E1711]'
                    }`}
                  >
                    केवल अधः-यन्त्र मण्डल
                  </button>
                  <button
                    onClick={() => setAltarViewMode('patra')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      altarViewMode === 'patra'
                        ? 'bg-[#805713] text-white shadow-xs'
                        : 'text-[#5C4D3C] hover:text-[#1E1711]'
                    }`}
                  >
                    केवल पात्र
                  </button>
                </div>
              </div>

              {/* 2. Vessel State: Nyancha vs Uttana */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-[#805713] flex items-center gap-1.5 font-cinzel">
                  <RotateCw className="w-4 h-4 text-[#D9531E]" />
                  अवस्था (State):
                </span>
                <div className="flex p-1 rounded-xl bg-[#F5EFE4] border border-[#DDD1BE]">
                  <button
                    onClick={() => setVesselState('uttana')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                      vesselState === 'uttana'
                        ? 'bg-[#B38226] text-white shadow-xs'
                        : 'text-[#5C4D3C] hover:text-[#1E1711]'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>उत्तान (सीधा)</span>
                  </button>
                  <button
                    onClick={() => setVesselState('nyancha')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                      vesselState === 'nyancha'
                        ? 'bg-[#805713] text-white shadow-xs'
                        : 'text-[#5C4D3C] hover:text-[#1E1711]'
                    }`}
                  >
                    <span>न्यञ्च् (औंधा)</span>
                  </button>
                </div>
              </div>

              {/* 3. Tradition Selector */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#7D6B57]">शाखा:</span>
                <select
                  value={selectedTradition}
                  onChange={(e) => setSelectedTradition(e.target.value as any)}
                  className="px-3 py-1.5 rounded-xl border border-[#C5A059] bg-[#FFF] text-xs font-bold text-[#1E1711] shadow-2xs"
                >
                  <option value="paraskaraVajaseneyi">शुक्ल यजुर्वेद (वाजसनेयी / पारस्कर)</option>
                  <option value="ashvalayanaRigveda">ऋग्वेद (आश्वलायन पद्धति)</option>
                  <option value="apastambaKrishnaYajurveda">कृष्ण यजुर्वेद (आपस्तम्ब / बौधायन)</option>
                  <option value="tantricSharadaTilakam">तान्त्रिक / शाक्त (शारदातिलकम्)</option>
                </select>
              </div>

            </div>

            {/* Visual Sacred Altar Grid */}
            <div className="p-6 rounded-3xl bg-linear-to-b from-[#FDFBF7] to-[#F5EFE4] border-2 border-[#C5A059]/60 shadow-lg space-y-6">
              
              {/* Altar Direction Compass Bar */}
              <div className="flex items-center justify-between border-b border-[#E8D9BF] pb-3 text-xs font-bold">
                <span className="text-[#805713] flex items-center gap-1">
                  ◄ पूर्व दिशा (प्राची)
                </span>
                <span className="text-sm font-cinzel text-[#805713] bg-[#F4EAD8] px-4 py-1 rounded-full border border-[#C5A059]/40 flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-[#D9531E]" />
                  उत्तर दिशा (उदीची • सोम-स्थान • दर्भ-वेदी)
                </span>
                <span className="text-[#805713] flex items-center gap-1">
                  पश्चिम दिशा (प्रतीची) ►
                </span>
              </div>

              {/* Mode Notice Banner */}
              <div
                className={`p-3 rounded-xl border text-xs flex items-center justify-between gap-2 transition-all ${
                  altarViewMode === 'yantra'
                    ? 'bg-[#FEF2F2] border-[#FCA5A5] text-[#991B1B]'
                    : vesselState === 'uttana'
                    ? 'bg-[#EBF7EE] border-[#86EFAC] text-[#14532D]'
                    : 'bg-[#FFF9EB] border-[#FDE68A] text-[#854D0E]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Info className="w-4 h-4 shrink-0" />
                  <span>
                    {altarViewMode === 'yantra'
                      ? 'अधः-यन्त्र मण्डल दर्शन: प्रत्येक पात्र के नीचे पवित्र चन्दन, कुङ्कुम, हरिद्रा एवं भस्म द्वारा विरचित शास्त्रोक्त मण्डल एवं बीज मन्त्र।'
                      : vesselState === 'uttana'
                      ? 'वर्तमान अवस्था: **उत्तान (सीधा/ऊर्ध्वमुख)** — सभी पात्र प्रोक्षित, प्रतप्त एवं दर्भ से सम्मार्जित होकर दिव्य हविष्य ग्रहण करने हेतु सिद्ध हैं।'
                      : 'वर्तमान अवस्था: **न्यञ्च् (औंधा/अधोमुख)** — प्रारम्भ में वेदी पर पात्रों को औंधा रखा जाता है ताकि उन पर कोई धूलि, कीट अथवा अशुद्धि न पड़े।'}
                  </span>
                </div>
                <Link
                  href="/patrasadana/patrasadana_altar_board.svg"
                  target="_blank"
                  className="px-2.5 py-1 rounded-lg bg-white/80 border text-[11px] font-bold hover:bg-white shrink-0 flex items-center gap-1"
                >
                  <Maximize2 className="w-3 h-3" />
                  <span>हाई-रेज वेदी SVG</span>
                </Link>
              </div>

              {/* The 3 Rows of Sacred Implements Grid */}
              <div className="space-y-6">
                
                {/* ROW 1: WATER & CHARU POTS */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#805713] uppercase tracking-wider font-cinzel">
                      प्रथम पंक्ति (उत्तरतम): जल एवं हविष्य स्थाली
                    </span>
                    <span className="text-[11px] text-[#7D6B57]">ब्रह्मवारि एवं पक्वान्न</span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {getPatrasByRow(1).map((patra) => {
                      const isSelected = selectedPatra.id === patra.id;
                      return (
                        <button
                          key={patra.id}
                          onClick={() => {
                            setSelectedPatraId(patra.id);
                            setActiveTab('inspector');
                          }}
                          className={`p-4 rounded-2xl border text-left transition-all relative ${
                            isSelected
                              ? 'bg-[#FFF9EB] border-[#B38226] shadow-md ring-2 ring-[#B38226] scale-[1.02]'
                              : 'bg-[#FDFBF7] border-[#E8D9BF] hover:bg-[#F7F3EB] shadow-2xs'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-mono font-bold bg-[#F4EAD8] text-[#805713] px-2 py-0.5 rounded">
                              #{patra.order}
                            </span>
                            <span className="text-[10px] font-bold text-[#D9531E] bg-[#FEF2F2] px-2 py-0.5 rounded border border-[#FECACA]">
                              {patra.underlyingYantra.beejaMantra}
                            </span>
                          </div>

                          <div className="w-full h-28 relative mb-2 flex items-center justify-center bg-[#F9F5EC] rounded-xl overflow-hidden border border-[#E8D9BF]">
                            <Image
                              src={patra.svgPath}
                              alt={patra.nameHindi}
                              width={110}
                              height={110}
                              className={`object-contain transition-transform ${
                                vesselState === 'nyancha' ? 'rotate-180 opacity-75' : ''
                              }`}
                            />
                          </div>

                          <span className="text-xs font-bold text-[#1E1711] block line-clamp-1">
                            {patra.nameHindi}
                          </span>
                          
                          {/* Underlying Yantra Badge */}
                          <div className="mt-1.5 p-1 rounded bg-[#FFFBEB] border border-[#FDE68A] text-[10px] text-[#92400E]">
                            <span className="font-bold block line-clamp-1">
                              अधः: {patra.underlyingYantra.nameHindi.split(' ')[0]}
                            </span>
                            <span className="text-[9px] text-[#78350F] block">
                              द्रव्य: {patra.underlyingYantra.dravyaUsedHindi.split(' ')[0]}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* ROW 2: LADLES & WOODEN SWORD */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#805713] uppercase tracking-wider font-cinzel">
                      द्वितीय पंक्ति (मध्य): स्रुक्, स्रुवा, स्फ्य एवं उपवेष
                    </span>
                    <span className="text-[11px] text-[#7D6B57]">प्रधान आहुति एवं उल्लेखन उपकरण</span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {getPatrasByRow(2).map((patra) => {
                      const isSelected = selectedPatra.id === patra.id;
                      return (
                        <button
                          key={patra.id}
                          onClick={() => {
                            setSelectedPatraId(patra.id);
                            setActiveTab('inspector');
                          }}
                          className={`p-4 rounded-2xl border text-left transition-all relative ${
                            isSelected
                              ? 'bg-[#FFF9EB] border-[#B38226] shadow-md ring-2 ring-[#B38226] scale-[1.02]'
                              : 'bg-[#FDFBF7] border-[#E8D9BF] hover:bg-[#F7F3EB] shadow-2xs'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-mono font-bold bg-[#F4EAD8] text-[#805713] px-2 py-0.5 rounded">
                              #{patra.order}
                            </span>
                            <span className="text-[10px] font-bold text-[#D9531E] bg-[#FEF2F2] px-2 py-0.5 rounded border border-[#FECACA]">
                              {patra.underlyingYantra.beejaMantra}
                            </span>
                          </div>

                          <div className="w-full h-28 relative mb-2 flex items-center justify-center bg-[#F9F5EC] rounded-xl overflow-hidden border border-[#E8D9BF]">
                            <Image
                              src={patra.svgPath}
                              alt={patra.nameHindi}
                              width={110}
                              height={110}
                              className={`object-contain transition-transform ${
                                vesselState === 'nyancha' ? 'rotate-180 opacity-75' : ''
                              }`}
                            />
                          </div>

                          <span className="text-xs font-bold text-[#1E1711] block line-clamp-1">
                            {patra.nameHindi}
                          </span>
                          
                          <div className="mt-1.5 p-1 rounded bg-[#FFFBEB] border border-[#FDE68A] text-[10px] text-[#92400E]">
                            <span className="font-bold block line-clamp-1">
                              अधः: {patra.underlyingYantra.nameHindi.split(' ')[0]}
                            </span>
                            <span className="text-[9px] text-[#78350F] block">
                              द्रव्य: {patra.underlyingYantra.dravyaUsedHindi.split(' ')[0]}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* ROW 3: IDHMA, BARHI, PARIDHI & SANSRAVA */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#805713] uppercase tracking-wider font-cinzel">
                      तृतीय पंक्ति (कुण्ड सान्निध्य): इध्म, बर्हि, परिधि एवं संस्रव
                    </span>
                    <span className="text-[11px] text-[#7D6B57]">समिधा, आसन एवं सुरक्षा सीमा</span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {getPatrasByRow(3).map((patra) => {
                      const isSelected = selectedPatra.id === patra.id;
                      return (
                        <button
                          key={patra.id}
                          onClick={() => {
                            setSelectedPatraId(patra.id);
                            setActiveTab('inspector');
                          }}
                          className={`p-4 rounded-2xl border text-left transition-all relative ${
                            isSelected
                              ? 'bg-[#FFF9EB] border-[#B38226] shadow-md ring-2 ring-[#B38226] scale-[1.02]'
                              : 'bg-[#FDFBF7] border-[#E8D9BF] hover:bg-[#F7F3EB] shadow-2xs'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-mono font-bold bg-[#F4EAD8] text-[#805713] px-2 py-0.5 rounded">
                              #{patra.order}
                            </span>
                            <span className="text-[10px] font-bold text-[#D9531E] bg-[#FEF2F2] px-2 py-0.5 rounded border border-[#FECACA]">
                              {patra.underlyingYantra.beejaMantra}
                            </span>
                          </div>

                          <div className="w-full h-28 relative mb-2 flex items-center justify-center bg-[#F9F5EC] rounded-xl overflow-hidden border border-[#E8D9BF]">
                            <Image
                              src={patra.svgPath}
                              alt={patra.nameHindi}
                              width={110}
                              height={110}
                              className={`object-contain transition-transform ${
                                vesselState === 'nyancha' ? 'rotate-180 opacity-75' : ''
                              }`}
                            />
                          </div>

                          <span className="text-xs font-bold text-[#1E1711] block line-clamp-1">
                            {patra.nameHindi}
                          </span>
                          
                          <div className="mt-1.5 p-1 rounded bg-[#FFFBEB] border border-[#FDE68A] text-[10px] text-[#92400E]">
                            <span className="font-bold block line-clamp-1">
                              अधः: {patra.underlyingYantra.nameHindi.split(' ')[0]}
                            </span>
                            <span className="text-[9px] text-[#78350F] block">
                              द्रव्य: {patra.underlyingYantra.dravyaUsedHindi.split(' ')[0]}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Simulated Kunda Alignment at Bottom */}
              <div className="pt-4 border-t border-[#E8D9BF] text-center">
                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-2xl bg-[#FFF9EB] border border-[#E0D4C0] shadow-xs">
                  <Flame className="w-5 h-5 text-[#D9531E]" />
                  <span className="text-xs font-bold text-[#805713]">
                    ▼ दक्षिण भाग में यज्ञकुण्ड (अग्नि वैश्वानर स्थान • यजमान व होता आसन)
                  </span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: DETAILED PATRA INSPECTOR */}
        {activeTab === 'inspector' && (
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Patra Selector (4 cols) */}
            <div className="lg:col-span-4 bg-[#FDFBF7] rounded-3xl p-6 border border-[#DDD1BE] shadow-[0_4px_24px_rgba(140,90,32,0.06)] space-y-3">
              <div className="border-b border-[#E8D9BF] pb-3 mb-2 flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-wider text-[#805713] font-cinzel">
                  १२ यज्ञ पात्र सूची
                </span>
                <span className="text-[10px] font-mono font-bold bg-[#F4EAD8] text-[#805713] px-2 py-0.5 rounded">
                  {PATRASADANA_DATABASE.length} पात्र
                </span>
              </div>

              <div className="space-y-1.5 max-h-[620px] overflow-y-auto pr-1">
                {PATRASADANA_DATABASE.map((patra) => {
                  const isCur = selectedPatra.id === patra.id;
                  return (
                    <button
                      key={patra.id}
                      onClick={() => setSelectedPatraId(patra.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-2xl border text-left transition-all ${
                        isCur
                          ? 'bg-[#FFF9EB] border-[#B38226] shadow-xs font-bold scale-[1.02]'
                          : 'bg-[#F9F5EC] border-[#E8D9BF] hover:bg-[#F2ECE0] opacity-90'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                            isCur ? 'bg-[#D9531E] text-white' : 'bg-[#E5DAC6] text-[#6A5744]'
                          }`}
                        >
                          #{patra.order}
                        </span>
                        <div>
                          <span className="text-xs text-[#1E1711] block">
                            {patra.nameHindi}
                          </span>
                          <span className="text-[10px] text-[#7D6B57]">
                            अधः: {patra.underlyingYantra.nameHindi.split(' ')[0]} ({patra.underlyingYantra.beejaMantra})
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-[#805713]" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Deep Inspection Details (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Header Box */}
              <div className="p-6 rounded-3xl bg-[#FDFBF7] border border-[#DDD1BE] shadow-[0_4px_24px_rgba(140,90,32,0.06)] space-y-6">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E8D9BF] pb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono font-bold bg-[#E8DCBF] text-[#805713] px-2.5 py-0.5 rounded border border-[#C5A059]/40">
                        #{selectedPatra.order} • {selectedPatra.nameSanskrit}
                      </span>
                      {selectedPatra.pairNameHindi && (
                        <span className="text-[11px] font-bold bg-[#FEF3C7] text-[#92400E] px-2.5 py-0.5 rounded-full border border-[#F59E0B]/30">
                          {selectedPatra.pairNameHindi}
                        </span>
                      )}
                    </div>
                    <h2 className="text-xl lg:text-2xl font-black font-cinzel text-[#1E1711]">
                      {selectedPatra.nameHindi}
                    </h2>
                    <p className="text-xs text-[#7D6B57]">{selectedPatra.nameEnglish}</p>
                  </div>

                  <Link
                    href={selectedPatra.svgPath}
                    target="_blank"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F5EFE4] text-[#805713] border border-[#C5A059] text-xs font-bold hover:bg-[#EFE7DA] transition-all self-start sm:self-auto"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Pure High-Res SVG</span>
                  </Link>
                </div>

                {/* SVG Visual Display */}
                <div className="flex justify-center p-6 bg-[#FAF5EB] rounded-2xl border border-[#E8D9BF]">
                  <div className="w-full max-w-[380px] aspect-square relative flex items-center justify-center">
                    <Image
                      src={selectedPatra.svgPath}
                      alt={selectedPatra.nameHindi}
                      width={360}
                      height={360}
                      className="object-contain drop-shadow-md"
                    />
                  </div>
                </div>

                {/* UNDERLYING YANTRA SPECIFICATION CARD (अधः-स्थापित पीठ यन्त्र अन्वेषक) */}
                <div className="p-5 rounded-2xl bg-linear-to-r from-[#FFF9EB] via-[#FEF3C7]/40 to-[#FFF9EB] border-2 border-[#D97706]/60 space-y-3 shadow-xs">
                  <div className="flex items-center justify-between border-b border-[#E0D4C0] pb-2">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#D9531E]" />
                      <span className="text-xs font-bold text-[#805713] uppercase tracking-wider font-cinzel">
                        अधः-स्थापित यन्त्रपीठ (Underlying Sacred Mandala Pitha)
                      </span>
                    </div>
                    <span className="text-xs font-mono font-bold bg-[#DC2626] text-white px-2.5 py-0.5 rounded-full shadow-2xs">
                      बीज मन्त्र: {selectedPatra.underlyingYantra.beejaMantra}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                    <div className="space-y-1">
                      <span className="text-[10px] text-[#7D6B57] font-bold block uppercase">
                        मण्डल नाम (Sanskrit &amp; Hindi):
                      </span>
                      <span className="font-bold text-[#1E1711] text-xs block">
                        {selectedPatra.underlyingYantra.nameHindi} ({selectedPatra.underlyingYantra.nameSanskrit})
                      </span>
                      <span className="text-[11px] text-[#5C4D3C] block">
                        <strong>आकृति स्वरूप:</strong> {selectedPatra.underlyingYantra.shapeGeometryHindi}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] text-[#7D6B57] font-bold block uppercase">
                        अङ्कन द्रव्य (Sacred Paste Used):
                      </span>
                      <span className="font-bold text-[#B45309] text-xs block">
                        {selectedPatra.underlyingYantra.dravyaUsedHindi}
                      </span>
                      <span className="text-[11px] text-[#5C4D3C] block">
                        <strong>शास्त्रीय प्रयोजन:</strong> {selectedPatra.underlyingYantra.shastricPurposeHindi}
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-[#E0D4C0] pt-2 text-[11px] text-[#7D6B57] italic">
                    *शारदातिलकम्* पटल ४ नियम: "धारको मण्डलं विना स्थापिते नश्यति क्रिया... बीजैर्युक्तं लिखेत्पीठे पात्राणां धारणात्मने"
                  </div>
                </div>

                {/* Technical Specifications Matrix */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  {/* Wood Science */}
                  <div className="p-4 rounded-xl bg-[#F7F3EB] border border-[#E8D9BF] space-y-1">
                    <span className="text-[10px] font-bold text-[#805713] uppercase block font-cinzel">
                      शास्त्रीय काष्ठ / धातु (Material Science):
                    </span>
                    <span className="font-bold text-[#1E1711] text-xs block">
                      {selectedPatra.woodMaterialHindi} ({selectedPatra.woodMaterialScientific})
                    </span>
                    <p className="text-[11px] text-[#5C4D3C] leading-relaxed pt-1">
                      {selectedPatra.whyThisWoodHindi}
                    </p>
                  </div>

                  {/* Dimensions */}
                  <div className="p-4 rounded-xl bg-[#F7F3EB] border border-[#E8D9BF] space-y-1">
                    <span className="text-[10px] font-bold text-[#805713] uppercase block font-cinzel">
                      शास्त्रीय माप एवं प्रमाण (Dimensions):
                    </span>
                    <span className="font-bold text-[#D9531E] font-mono text-sm block">
                      {selectedPatra.dimensions.hastasOrPradesha}
                    </span>
                    <span className="text-[11px] text-[#5C4D3C] block font-mono">
                      {selectedPatra.dimensions.inches} इंच ({selectedPatra.dimensions.cm} cm)
                    </span>
                    <p className="text-[11px] text-[#7D6B57] pt-1">
                      {selectedPatra.dimensions.detailsHindi}
                    </p>
                  </div>
                </div>

                {/* Vedic Mantra & Citations Card */}
                <div className="p-5 rounded-2xl bg-[#FFF9EB] border border-[#C5A059] space-y-2">
                  <div className="flex items-center justify-between border-b border-[#E8D9BF] pb-2">
                    <span className="text-xs font-bold text-[#805713] font-cinzel flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-[#D9531E]" />
                      सादन मन्त्र एवं शास्त्रीय प्रमाण
                    </span>
                    <span className="text-[11px] font-mono text-[#7D6B57]">
                      {selectedPatra.sourceScripture} ({selectedPatra.verseRef})
                    </span>
                  </div>

                  <p className="font-serif text-sm font-bold text-[#4A140F] whitespace-pre-line leading-relaxed pt-1">
                    {selectedPatra.sanskritMantra}
                  </p>

                  <p className="text-xs text-[#5C4D3C] leading-relaxed border-t border-[#E8D9BF] pt-2">
                    <strong>अर्थ:</strong> {selectedPatra.mantraMeaningHindi}
                  </p>
                </div>

                {/* Tradition Specific Variant Note */}
                <div className="p-4 rounded-xl bg-[#F5EFE4] border border-[#DDD1BE] text-xs space-y-1">
                  <span className="font-bold text-[#805713] block">
                    शाखा-भेद विधान ({traditionNames[selectedTradition]}):
                  </span>
                  <p className="text-[#5C4D3C] leading-relaxed">
                    {selectedPatra.traditionVariants[selectedTradition]}
                  </p>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* TAB 3: DEDICATED UNDERLYING YANTRAS GALLERY (अधः-यन्त्र महामण्डल) */}
        {activeTab === 'underlying_yantras' && (
          <div className="mt-6 space-y-6">
            
            {/* Theoretical Intro Box */}
            <div className="p-6 rounded-3xl bg-[#FDFBF7] border border-[#DDD1BE] shadow-[0_4px_24px_rgba(140,90,32,0.06)] space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#D9531E]" />
                <h3 className="text-xl font-bold font-cinzel text-[#1E1711]">
                  पात्र-पीठ यन्त्र विन्यास विज्ञान (Underlying Mandalas Doctrine)
                </h3>
              </div>
              <p className="text-xs lg:text-sm text-[#5C4D3C] leading-relaxed">
                वैदिक एवं तान्त्रिक कर्मकाण्ड में किसी भी यज्ञपात्र को सीधे भूमि अथवा केवल कुशों पर बिना आधार-मण्डल के स्थापित करना वर्जित है। <em>शारदातिलकम्</em> पटल ४ (श्लोक ३१-३४) के अनुसार:
              </p>
              <div className="p-4 rounded-2xl bg-[#FFF9EB] border border-[#C5A059] font-serif text-sm font-bold text-[#6A1B07]">
                "चतुरस्रं त्रिकोणं वा वृत्तं वा मण्डलं लिखेत् ।<br />
                वारुणं वह्निजं सौम्यं बीजैर्युक्तं लिखेत्पीठे पात्राणां धारणात्मने ॥"
              </div>
              <p className="text-xs text-[#7D6B57] leading-relaxed">
                आधार-पीठ के बिना पात्र स्थापित करने से हविष्य की ऊर्जा पृथ्वी में विसर्जित हो जाती है। अतः जलपात्रों (प्रणीता, प्रोक्षणी) के नीचे <strong>वारुण मण्डल (वं)</strong>, आहुति-पात्रों (स्रुक्, स्रुवा, उपवेष) के नीचे <strong>आग्नेय मण्डल (रं)</strong>, घृतपात्र के नीचे <strong>सूर्य मण्डल (ह्रीं)</strong> और अन्नपात्र के नीचे <strong>पार्थिव भूपुर (लं)</strong> बनाया जाता है।
              </p>
            </div>

            {/* 12 Pitha Comparison Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PATRASADANA_DATABASE.map((patra) => (
                <div
                  key={patra.id}
                  className="p-5 rounded-2xl bg-[#FFFDF8] border border-[#E0D4C0] shadow-xs space-y-3 hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between border-b border-[#E8D9BF] pb-2">
                    <span className="text-xs font-mono font-bold bg-[#E8DCBF] text-[#805713] px-2 py-0.5 rounded">
                      #{patra.order} • {patra.nameHindi.split(' ')[0]}
                    </span>
                    <span className="text-sm font-bold font-mono bg-[#DC2626] text-white px-3 py-0.5 rounded-full shadow-2xs">
                      {patra.underlyingYantra.beejaMantra}
                    </span>
                  </div>

                  <div className="w-full h-32 relative bg-[#F9F5EC] rounded-xl overflow-hidden border border-[#E8D9BF] flex items-center justify-center">
                    <Image
                      src={patra.svgPath}
                      alt={patra.nameHindi}
                      width={120}
                      height={120}
                      className="object-contain"
                    />
                  </div>

                  <h4 className="text-sm font-bold text-[#1E1711]">
                    {patra.underlyingYantra.nameHindi}
                  </h4>
                  <p className="text-xs text-[#7D6B57] font-serif">
                    {patra.underlyingYantra.nameSanskrit}
                  </p>

                  <div className="space-y-1 text-xs border-t border-[#E8D9BF] pt-2">
                    <div>
                      <strong className="text-[#805713]">अङ्कन द्रव्य:</strong>{' '}
                      <span className="text-[#1E1711]">{patra.underlyingYantra.dravyaUsedHindi}</span>
                    </div>
                    <div>
                      <strong className="text-[#805713]">आकृति:</strong>{' '}
                      <span className="text-[#5C4D3C]">{patra.underlyingYantra.shapeGeometryHindi}</span>
                    </div>
                    <div>
                      <strong className="text-[#805713]">प्रयोजन:</strong>{' '}
                      <span className="text-[#5C4D3C]">{patra.underlyingYantra.shastricPurposeHindi}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedPatraId(patra.id);
                      setActiveTab('inspector');
                    }}
                    className="w-full mt-2 py-1.5 rounded-xl bg-[#F5EFE4] text-[#805713] border border-[#C5A059] text-xs font-bold hover:bg-[#EFE7DA] transition-all flex items-center justify-center gap-1"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>गहन अन्वेषण</span>
                  </button>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* TAB 4: STEP-BY-STEP CLEANSING SIMULATOR */}
        {activeTab === 'samskara' && (
          <div className="mt-6 space-y-6">
            <div className="p-6 rounded-3xl bg-[#FDFBF7] border border-[#DDD1BE] shadow-[0_4px_24px_rgba(140,90,32,0.06)] space-y-6">
              
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#805713] font-cinzel block mb-1">
                  षड्विध पात्र संस्कार प्रक्रिया (The 6 Cleansing Stages)
                </span>
                <h3 className="text-xl font-bold font-cinzel text-[#1E1711]">
                  यज्ञ-पात्र शुद्धि, प्रतपन, सम्मार्जन एवं उत्पवन विधि
                </h3>
                <p className="text-xs text-[#7D6B57] mt-1">
                  कात्यायन श्रौतसूत्र एवं पारस्कर कुशकण्डिका सम्मत वैदिक प्रक्रिया
                </p>
              </div>

              {/* Step Navigation Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                {cleansingSteps.map((s) => (
                  <button
                    key={s.step}
                    onClick={() => setActiveStep(s.step)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      activeStep === s.step
                        ? 'bg-[#B38226] text-white shadow-md font-bold'
                        : 'bg-[#F9F5EC] border-[#E8D9BF] text-[#5C4D3C] hover:bg-[#F2ECE0]'
                    }`}
                  >
                    <span className="text-[10px] block opacity-80">चरण #{s.step}</span>
                    <span className="text-xs font-bold block mt-0.5">{s.short}</span>
                  </button>
                ))}
              </div>

              {/* Active Step Detailed Card */}
              {(() => {
                const cur = cleansingSteps.find((s) => s.step === activeStep) || cleansingSteps[0];
                return (
                  <div className="p-6 rounded-2xl bg-[#FFF9EB] border border-[#C5A059] space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E0D4C0] pb-3">
                      <div>
                        <span className="text-xs font-mono font-bold bg-[#E8DCBF] text-[#805713] px-2 py-0.5 rounded">
                          संस्कार चरण {cur.step} / ६
                        </span>
                        <h4 className="text-lg font-bold text-[#1E1711] mt-1 font-cinzel">
                          {cur.name}
                        </h4>
                      </div>
                      <div className="flex items-center gap-2">
                        {activeStep > 1 && (
                          <button
                            onClick={() => setActiveStep(activeStep - 1)}
                            className="px-3 py-1.5 rounded-lg bg-white border border-[#C5A059] text-xs font-bold text-[#805713]"
                          >
                            ◄ पूर्व
                          </button>
                        )}
                        {activeStep < 6 && (
                          <button
                            onClick={() => setActiveStep(activeStep + 1)}
                            className="px-3 py-1.5 rounded-lg bg-[#B38226] text-white text-xs font-bold shadow-xs"
                          >
                            अगला ►
                          </button>
                        )}
                      </div>
                    </div>

                    <p className="text-sm text-[#5C4D3C] leading-relaxed">
                      {cur.desc}
                    </p>

                    <div className="p-4 rounded-xl bg-white/80 border border-[#E8D9BF] space-y-1">
                      <span className="text-[11px] font-bold text-[#805713] uppercase block font-cinzel">
                        वैदिक मन्त्र (Vedic Recitation):
                      </span>
                      <p className="font-serif text-sm font-bold text-[#6A1B07]">
                        {cur.mantra}
                      </p>
                    </div>
                  </div>
                );
              })()}

            </div>
          </div>
        )}

        {/* TAB 5: WOOD SCIENCE & MATERIAL PURITY */}
        {activeTab === 'wood_science' && (
          <div className="mt-6 space-y-6">
            <div className="p-6 rounded-3xl bg-[#FDFBF7] border border-[#DDD1BE] shadow-[0_4px_24px_rgba(140,90,32,0.06)] space-y-6">
              
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#805713] font-cinzel block mb-1">
                  यज्ञीय काष्ठ विज्ञान एवं धातु शुद्धि
                </span>
                <h3 className="text-xl font-bold font-cinzel text-[#1E1711]">
                  पलाश, खदिर, वारण एवं शुद्ध कांस्य का आध्यात्मिक व वैज्ञानिक रहस्य
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Palasha */}
                <div className="p-4 rounded-2xl bg-[#FFF9EB] border border-[#E0D4C0] space-y-2">
                  <div className="flex items-center gap-2">
                    <Trees className="w-5 h-5 text-[#D9531E]" />
                    <h4 className="text-sm font-bold text-[#1E1711]">
                      १. पलाश (ढाक / Butea monosperma) — स्रुक् व उपवेष
                    </h4>
                  </div>
                  <p className="text-xs text-[#5C4D3C] leading-relaxed">
                    <strong>शास्त्र वचन:</strong> शतपथ ब्राह्मण (१.३.३.१३) के अनुसार <em>"ब्रह्म वै पलाशः"</em> — पलाश साक्षात् ब्रह्म-वृक्ष है। सोम रस जब स्वर्ग से लाया गया, तब उसका एक पर्ण गिरा जिससे पलाश उत्पन्न हुआ। इसका काष्ठ उष्ण-वीर्य है और आहुति की अग्नि को शान्त नहीं होने देता।
                  </p>
                </div>

                {/* Khadira */}
                <div className="p-4 rounded-2xl bg-[#FFF9EB] border border-[#E0D4C0] space-y-2">
                  <div className="flex items-center gap-2">
                    <Trees className="w-5 h-5 text-[#805713]" />
                    <h4 className="text-sm font-bold text-[#1E1711]">
                      २. खदिर (कत्था / Acacia catechu) — स्रुवा व स्फ्य
                    </h4>
                  </div>
                  <p className="text-xs text-[#5C4D3C] leading-relaxed">
                    <strong>शास्त्र वचन:</strong> खदिर काष्ठ को "वज्र-तुल्य कठोर" कहा गया है (<em>"अस्थि वै खदिरः"</em>)। यह इन्द्र के वज्र का साक्षात् प्रतीक है। स्रुवा में खदिर का प्रयोग करने से यजमान के वीर्य और ओज की वृद्धि होती है। स्फ्य (खड्ग) के तीक्ष्ण उल्लेखन हेतु खदिर सर्वोत्तम है।
                  </p>
                </div>

                {/* Varana */}
                <div className="p-4 rounded-2xl bg-[#FFF9EB] border border-[#E0D4C0] space-y-2">
                  <div className="flex items-center gap-2">
                    <Trees className="w-5 h-5 text-[#0284C7]" />
                    <h4 className="text-sm font-bold text-[#1E1711]">
                      ३. वारण (वरुण / Crataeva nurvala) — प्रणीता व प्रोक्षणी
                    </h4>
                  </div>
                  <p className="text-xs text-[#5C4D3C] leading-relaxed">
                    <strong>शास्त्र वचन:</strong> वारण का अर्थ है "निवारण करने वाला"। यह जल-तत्व से साक्षात् सम्बद्ध है और यज्ञ-वेदी में आसुरी एवं अमङ्गलकारी शक्तियों के प्रवेश का निवारण कर पवित्र जल की शीतलता बनाए रखता है।
                  </p>
                </div>

                {/* Bell Metal */}
                <div className="p-4 rounded-2xl bg-[#FFF9EB] border border-[#E0D4C0] space-y-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#D97706]" />
                    <h4 className="text-sm font-bold text-[#1E1711]">
                      ४. विशुद्ध कांस्य (Bell Metal) — आज्यस्थाली
                    </h4>
                  </div>
                  <p className="text-xs text-[#5C4D3C] leading-relaxed">
                    <strong>शास्त्र वचन:</strong> कांस्य पात्र में गोघृत तपाने से घृत की आणविक संरचना स्थिर रहती है। कांसा नाद-ब्रह्म का संवाहक है। शास्त्रों में अग्निहोत्र में लोहा, सीसा और एल्युमिनियम का प्रयोग घोर पाप और असुर-कारक कहा गया है।
                  </p>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* TAB 6: TRADITIONS COMPARISON */}
        {activeTab === 'traditions' && (
          <div className="mt-6 space-y-6">
            <div className="p-6 rounded-3xl bg-[#FDFBF7] border border-[#DDD1BE] shadow-[0_4px_24px_rgba(140,90,32,0.06)] space-y-6">
              
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#805713] font-cinzel block mb-1">
                  परम्परा समन्वय सारणी (Traditions Matrix)
                </span>
                <h3 className="text-xl font-bold font-cinzel text-[#1E1711]">
                  ४ प्रमुख वैदिक एवं तान्त्रिक शाखाओं में पात्रसादन विधान
                </h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-[#F5EFE4] text-[#805713] border-b border-[#DDD1BE] font-cinzel">
                      <th className="p-3">तुलनात्मक तत्त्व</th>
                      <th className="p-3">१. शुक्ल यजुर्वेद (पारस्कर)</th>
                      <th className="p-3">२. ऋग्वेद (आश्वलायन)</th>
                      <th className="p-3">३. कृष्ण यजुर्वेद (आपस्तम्ब)</th>
                      <th className="p-3">४. तान्त्रिक / शाक्त (शारदातिलकम्)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E8D9BF] text-[#5C4D3C]">
                    <tr>
                      <td className="p-3 font-bold text-[#1E1711]">वेदी की दिशा</td>
                      <td className="p-3">कुण्ड के ठीक उत्तर (उदीची)</td>
                      <td className="p-3">उत्तर-ईशान (ब्रह्म-समीप)</td>
                      <td className="p-3">उत्तर में पश्चिमाग्र बर्हि पर</td>
                      <td className="p-3">ईशान में अष्टदल मण्डल पर</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-[#1E1711]">दर्भ आस्तरण</td>
                      <td className="p-3">उत्तराग्र एवं पूर्वाग्र कुश</td>
                      <td className="p-3">पूर्वाग्र दर्भ श्रेणी</td>
                      <td className="p-3">उत्तराग्र दर्भ श्रेणी</td>
                      <td className="p-3">चतुरस्र यन्त्रवत् आस्तरण</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-[#1E1711]">अधः-पीठ मण्डल</td>
                      <td className="p-3">कुश-आस्तरण पर अक्षत-न्यास</td>
                      <td className="p-3">चन्दन बिन्दु-चतुष्टय</td>
                      <td className="p-3">दर्भ-पवित्री युगल आधार</td>
                      <td className="p-3 font-bold text-[#991B1B]">वारुण, आग्नेय, सौर, पार्थिव यन्त्र विन्यास</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-[#1E1711]">प्रारम्भिक पात्र</td>
                      <td className="p-3">स्फ्य, कपाली, शूर्प, प्रणीता</td>
                      <td className="p-3">प्रणीता, प्रोक्षणी, स्रुक्-स्रुवा</td>
                      <td className="p-3">अग्निहोत्रहवणी, जुहू, उपभृत्</td>
                      <td className="p-3">शङ्ख, विशेषार्घ्य, स्रुक्-स्रुवा</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-[#1E1711]">घृत उत्पवन</td>
                      <td className="p-3">२ कुश पवित्रियों से त्रिवार</td>
                      <td className="p-3">सवितृ मन्त्र द्वारा</td>
                      <td className="p-3">सूर्य रश्मि ध्यान सहित</td>
                      <td className="p-3">वाग्भव एवं कामराज बीज द्वारा</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
