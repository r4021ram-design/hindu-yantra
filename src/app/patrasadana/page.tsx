'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  PATRASADANA_DATABASE,
  PatraEntry,
  getPatraById,
  getAllPatras,
  getPatrasByRow
} from '@/lib/patrasadana/patrasadana-database';
import {
  Flame,
  Sparkles,
  Layers,
  Compass,
  Maximize2,
  ChevronRight,
  BookOpen,
  Shield,
  Activity,
  Trees,
  CheckCircle2,
  Boxes,
  RotateCw,
  Info,
  Droplets,
  Eye,
  Check,
  ArrowRight
} from 'lucide-react';

export default function PatrasadanaPage() {
  const [selectedPatraId, setSelectedPatraId] = useState<string>('pranita_patra');
  const [vesselState, setVesselState] = useState<'uttana' | 'nyancha'>('uttana');
  const [selectedTradition, setSelectedTradition] = useState<
    'paraskaraVajaseneyi' | 'ashvalayanaRigveda' | 'apastambaKrishnaYajurveda' | 'tantricSharadaTilakam'
  >('paraskaraVajaseneyi');
  const [activeTab, setActiveTab] = useState<'altar' | 'inspector' | 'samskara' | 'wood_science' | 'traditions'>('altar');
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
                  Vedic Patrasadana & Sacred Implements
                </span>
              </div>
              <h1 className="text-2xl lg:text-4xl font-black font-cinzel text-[#1E1711] tracking-wide">
                वैदिक एवं तान्त्रिक पात्रसादन महाविधान
              </h1>
              <p className="text-sm lg:text-base text-[#5C4D3C] mt-2 max-w-3xl leading-relaxed">
                यज्ञकुण्ड के उत्तर (उदीची) भाग में दर्भ-वेदी पर यज्ञ-पात्रों का द्वन्द्व विन्यास, काष्ठ-विज्ञान (पलाश, खदिर, वारण, शमी), न्यञ्च्-उत्तान अवस्था, एवं षड्विध सम्मार्जन का प्रामाणिक पोर्टल।
              </p>
            </div>

            {/* Quick Actions & Links */}
            <div className="flex items-center gap-3">
              <Link
                href="/kundas"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#F5EFE4] text-[#805713] border border-[#C5A059] font-bold text-xs hover:bg-[#EFE7DA] transition-all shadow-sm"
              >
                <Flame className="w-4 h-4 text-[#D9531E]" />
                <span>दशविध कुण्ड दर्शन</span>
              </Link>
              <button
                onClick={() => setActiveTab('samskara')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-linear-to-r from-[#B38226] via-[#D9531E] to-[#B38226] text-white font-bold text-xs shadow-md hover:brightness-105 transition-all"
              >
                <RotateCw className="w-4 h-4" />
                <span>षड्विध संस्कार सिमुलेटर</span>
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
            {/* Altar Control Bar: State Switcher & Tradition Selector */}
            <div className="p-4 rounded-2xl bg-[#FFFDF8] border border-[#DDD1BE] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Vessel State: Nyancha vs Uttana */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-[#805713] flex items-center gap-1.5 font-cinzel">
                  <RotateCw className="w-4 h-4 text-[#D9531E]" />
                  पात्र अवस्था (State):
                </span>
                <div className="flex p-1 rounded-xl bg-[#F5EFE4] border border-[#DDD1BE]">
                  <button
                    onClick={() => setVesselState('uttana')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                      vesselState === 'uttana'
                        ? 'bg-[#B38226] text-white shadow-sm'
                        : 'text-[#5C4D3C] hover:text-[#1E1711]'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>उत्तान (सीधा / पवित्र)</span>
                  </button>
                  <button
                    onClick={() => setVesselState('nyancha')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                      vesselState === 'nyancha'
                        ? 'bg-[#805713] text-white shadow-sm'
                        : 'text-[#5C4D3C] hover:text-[#1E1711]'
                    }`}
                  >
                    <span>न्यञ्च् (औंधा / आरम्भ)</span>
                  </button>
                </div>
              </div>

              {/* Tradition Selector */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#7D6B57]">शाखा पद्धति:</span>
                <select
                  value={selectedTradition}
                  onChange={(e) => setSelectedTradition(e.target.value as any)}
                  className="px-3 py-1.5 rounded-xl border border-[#C5A059] bg-[#FFF] text-xs font-bold text-[#1E1711] shadow-xs"
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

              {/* State Notice Banner */}
              <div
                className={`p-3 rounded-xl border text-xs flex items-center gap-2 transition-all ${
                  vesselState === 'uttana'
                    ? 'bg-[#EBF7EE] border-[#86EFAC] text-[#14532D]'
                    : 'bg-[#FFF9EB] border-[#FDE68A] text-[#854D0E]'
                }`}
              >
                <Info className="w-4 h-4 shrink-0" />
                <span>
                  {vesselState === 'uttana'
                    ? 'वर्तमान अवस्था: **उत्तान (सीधा/ऊर्ध्वमुख)** — सभी पात्र प्रोक्षित, प्रतप्त एवं दर्भ से सम्मार्जित होकर दिव्य हविष्य ग्रहण करने हेतु सिद्ध हैं।'
                    : 'वर्तमान अवस्था: **न्यञ्च् (औंधा/अधोमुख)** — प्रारम्भ में वेदी पर पात्रों को औंधा रखा जाता है ताकि उन पर कोई धूलि, कीट अथवा अशुद्धि न पड़े।'}
                </span>
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
                              : 'bg-[#FDFBF7] border-[#E8D9BF] hover:bg-[#F7F3EB] shadow-xs'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-mono font-bold bg-[#F4EAD8] text-[#805713] px-2 py-0.5 rounded">
                              #{patra.order}
                            </span>
                            <span className="text-[10px] text-[#7D6B57]">
                              {patra.woodMaterialHindi.split(' ')[0]}
                            </span>
                          </div>

                          <div className="w-full h-24 relative mb-2 flex items-center justify-center bg-[#F9F5EC] rounded-xl overflow-hidden border border-[#E8D9BF]">
                            <Image
                              src={patra.svgPath}
                              alt={patra.nameHindi}
                              width={90}
                              height={90}
                              className={`object-contain transition-transform ${
                                vesselState === 'nyancha' ? 'rotate-180 opacity-75' : ''
                              }`}
                            />
                          </div>

                          <span className="text-xs font-bold text-[#1E1711] block line-clamp-1">
                            {patra.nameHindi}
                          </span>
                          <span className="text-[10px] text-[#805713] font-semibold block">
                            {patra.dimensions.hastasOrPradesha.split('•')[0]}
                          </span>
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
                              : 'bg-[#FDFBF7] border-[#E8D9BF] hover:bg-[#F7F3EB] shadow-xs'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-mono font-bold bg-[#F4EAD8] text-[#805713] px-2 py-0.5 rounded">
                              #{patra.order}
                            </span>
                            <span className="text-[10px] text-[#7D6B57]">
                              {patra.woodMaterialHindi.split(' ')[0]}
                            </span>
                          </div>

                          <div className="w-full h-24 relative mb-2 flex items-center justify-center bg-[#F9F5EC] rounded-xl overflow-hidden border border-[#E8D9BF]">
                            <Image
                              src={patra.svgPath}
                              alt={patra.nameHindi}
                              width={90}
                              height={90}
                              className={`object-contain transition-transform ${
                                vesselState === 'nyancha' ? 'rotate-180 opacity-75' : ''
                              }`}
                            />
                          </div>

                          <span className="text-xs font-bold text-[#1E1711] block line-clamp-1">
                            {patra.nameHindi}
                          </span>
                          <span className="text-[10px] text-[#805713] font-semibold block">
                            {patra.dimensions.hastasOrPradesha.split('•')[0]}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* ROW 3: SAMIDHA, KUSHA & BOUNDARIES */}
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
                              : 'bg-[#FDFBF7] border-[#E8D9BF] hover:bg-[#F7F3EB] shadow-xs'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-mono font-bold bg-[#F4EAD8] text-[#805713] px-2 py-0.5 rounded">
                              #{patra.order}
                            </span>
                            <span className="text-[10px] text-[#7D6B57]">
                              {patra.woodMaterialHindi.split(' ')[0]}
                            </span>
                          </div>

                          <div className="w-full h-24 relative mb-2 flex items-center justify-center bg-[#F9F5EC] rounded-xl overflow-hidden border border-[#E8D9BF]">
                            <Image
                              src={patra.svgPath}
                              alt={patra.nameHindi}
                              width={90}
                              height={90}
                              className={`object-contain transition-transform ${
                                vesselState === 'nyancha' ? 'rotate-180 opacity-75' : ''
                              }`}
                            />
                          </div>

                          <span className="text-xs font-bold text-[#1E1711] block line-clamp-1">
                            {patra.nameHindi}
                          </span>
                          <span className="text-[10px] text-[#805713] font-semibold block">
                            {patra.dimensions.hastasOrPradesha.split('•')[0]}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Simulated Kunda Alignment at Bottom */}
              <div className="pt-4 border-t border-[#E8D9BF] text-center">
                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-2xl bg-[#FFF9EB] border border-[#E0D4C0] shadow-sm">
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
                          ? 'bg-[#FFF9EB] border-[#B38226] shadow-sm font-bold scale-[1.02]'
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
                            {patra.woodMaterialHindi.split(' ')[0]}
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
                  <div className="w-full max-w-[340px] aspect-square relative flex items-center justify-center">
                    <Image
                      src={selectedPatra.svgPath}
                      alt={selectedPatra.nameHindi}
                      width={320}
                      height={320}
                      className="object-contain drop-shadow-md"
                    />
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

        {/* TAB 3: STEP-BY-STEP CLEANSING SIMULATOR */}
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

              {/* Active Step Details */}
              {(() => {
                const cur = cleansingSteps.find((s) => s.step === activeStep) || cleansingSteps[0];
                return (
                  <div className="p-6 rounded-2xl bg-[#FFF9EB] border border-[#C5A059] space-y-4 shadow-inner">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold text-[#805713] font-cinzel">
                        {cur.name}
                      </h4>
                      <span className="text-xs font-bold font-mono text-[#D9531E] bg-[#FDE68A] px-2.5 py-0.5 rounded-full">
                        अग्निहोत्र संस्कार
                      </span>
                    </div>

                    <p className="text-sm text-[#1E1711] leading-relaxed">
                      {cur.desc}
                    </p>

                    <div className="p-4 rounded-xl bg-[#FFFDF8] border border-[#E8D9BF]">
                      <span className="text-[11px] font-bold text-[#805713] block mb-1">
                        वैदिक विनियोग एवं मन्त्र:
                      </span>
                      <p className="font-serif text-sm font-bold text-[#4A140F]">
                        {cur.mantra}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <button
                        disabled={activeStep <= 1}
                        onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                        className="px-4 py-2 rounded-xl border border-[#C5A059] text-xs font-bold text-[#805713] disabled:opacity-40"
                      >
                        ◄ पूर्व चरण
                      </button>
                      <button
                        disabled={activeStep >= 6}
                        onClick={() => setActiveStep((prev) => Math.min(6, prev + 1))}
                        className="px-4 py-2 rounded-xl bg-[#B38226] text-white text-xs font-bold disabled:opacity-40 shadow-sm"
                      >
                        अगला चरण ►
                      </button>
                    </div>
                  </div>
                );
              })()}

            </div>
          </div>
        )}

        {/* TAB 4: SACRED WOOD & MATERIAL SCIENCE */}
        {activeTab === 'wood_science' && (
          <div className="mt-6 space-y-6">
            <div className="p-6 rounded-3xl bg-[#FDFBF7] border border-[#DDD1BE] shadow-[0_4px_24px_rgba(140,90,32,0.06)] space-y-6">
              
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#805713] font-cinzel block mb-1">
                  वैदिक काष्ठ-विज्ञान (Sacred Botany & Metallurgy)
                </span>
                <h3 className="text-xl font-bold font-cinzel text-[#1E1711]">
                  यज्ञ-पात्रों हेतु विशिष्ट काष्ठ एवं धातुओं का चयन रहस्य
                </h3>
                <p className="text-xs text-[#7D6B57] mt-1">
                  शतपथ ब्राह्मण एवं आयुर्वेद सम्मत ऊर्जा-संचरण एवं अग्नि-सहिष्णुता
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Palasha */}
                <div className="p-4 rounded-2xl bg-[#FFF9EB] border border-[#E0D4C0] space-y-2">
                  <div className="flex items-center gap-2">
                    <Trees className="w-5 h-5 text-[#C2410C]" />
                    <h4 className="text-sm font-bold text-[#1E1711]">
                      १. पलाश (ढाक / Butea monosperma) — स्रुक् व उपवेष
                    </h4>
                  </div>
                  <p className="text-xs text-[#5C4D3C] leading-relaxed">
                    <strong>शास्त्र वचन:</strong> *"पलाशो वा अर्कः"* (शतपथ १.३.२)। पलाश को वेदों में ब्रह्मवृक्ष कहा गया है। यह सूर्य और चन्द्र के सन्तुलन का प्रतीक है। इसके काष्ठ से बनी स्रुक् से आहुति देने पर यजमान को ब्रह्मवर्चस् और आत्मबल की प्राप्ति होती है।
                  </p>
                </div>

                {/* Khadira */}
                <div className="p-4 rounded-2xl bg-[#FFF9EB] border border-[#E0D4C0] space-y-2">
                  <div className="flex items-center gap-2">
                    <Trees className="w-5 h-5 text-[#991B1B]" />
                    <h4 className="text-sm font-bold text-[#1E1711]">
                      २. खदिर (खैर / Acacia catechu) — स्रुवा व स्फ्य
                    </h4>
                  </div>
                  <p className="text-xs text-[#5C4D3C] leading-relaxed">
                    <strong>शास्त्र वचन:</strong> *"खदिरो वै वीर्यम्"* (शतपथ १.३.२)। खदिर अत्यन्त कठोर, अग्नि-सहिष्णु और मङ्गल/इन्द्र का तेज समाहित करने वाला काष्ठ है। नित्य सहस्रों आहुतियों की तीव्र ज्वाला में भी यह नहीं जलता और स्फ्य रूप में विघ्नों का उच्छेदन करता है।
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

        {/* TAB 5: TRADITIONS COMPARISON */}
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
