'use client';

import React from 'react';
import {
  Compass, BookOpen, Star, Flame, CheckCircle2, RotateCcw
} from 'lucide-react';
import { YantraShastricEntry } from '@/lib/yantras/shastric-jyotish-database';
import { HoveredAvaranaInfo } from './types';

export interface YantraKnowledgeTabsProps {
  activeTab: 'geometry' | 'shastric' | 'jyotish' | 'upasana';
  setActiveTab: (tab: 'geometry' | 'shastric' | 'jyotish' | 'upasana') => void;
  currentYantra: YantraShastricEntry;
  hoveredAvarana: HoveredAvaranaInfo | null;
  pinnedAvaranaIndex: number | null;
  setPinnedAvaranaIndex: React.Dispatch<React.SetStateAction<number | null>>;
  japaCount: number;
  setJapaCount: React.Dispatch<React.SetStateAction<number>>;
}

export function YantraKnowledgeTabs({
  activeTab,
  setActiveTab,
  currentYantra,
  hoveredAvarana,
  pinnedAvaranaIndex,
  setPinnedAvaranaIndex,
  japaCount,
  setJapaCount
}: YantraKnowledgeTabsProps) {
  return (
    <div className="bg-[#FDFBF7] border-2 border-[#D1C4B0] rounded-3xl p-6 lg:p-8 space-y-6 shadow-md">
      {/* Tabs Header */}
      <div className="flex items-center gap-2 border-b border-[#D1C4B0] pb-4 flex-wrap">
        <button
          onClick={() => setActiveTab('geometry')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'geometry'
              ? 'bg-[#824707] text-white shadow-xs'
              : 'text-[#0F0C08] hover:bg-[#F2ECE1]'
          }`}
        >
          <Compass className="w-4 h-4" />
          <span>९ आवरण व ज्यामिति (9 Avaranas)</span>
        </button>

        <button
          onClick={() => setActiveTab('shastric')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'shastric'
              ? 'bg-[#824707] text-white shadow-xs'
              : 'text-[#0F0C08] hover:bg-[#F2ECE1]'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>शास्त्रीय प्रमाण व स्तोत्र (Scriptural Citations)</span>
        </button>

        <button
          onClick={() => setActiveTab('jyotish')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'jyotish'
              ? 'bg-[#824707] text-white shadow-xs'
              : 'text-[#0F0C08] hover:bg-[#F2ECE1]'
          }`}
        >
          <Star className="w-4 h-4" />
          <span>ज्योतिष, ग्रह दोष व उपाय (Astrological Remedies)</span>
        </button>

        <button
          onClick={() => setActiveTab('upasana')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'upasana'
              ? 'bg-[#824707] text-white shadow-xs'
              : 'text-[#0F0C08] hover:bg-[#F2ECE1]'
          }`}
        >
          <Flame className="w-4 h-4" />
          <span>उपासना, मन्त्र व स्थापना विधि (Upasana Protocol)</span>
        </button>
      </div>

      {/* TAB 1: 9 AVARANAS & SACRED GEOMETRY */}
      {activeTab === 'geometry' && (
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-rozha font-bold text-[#0F0C08] flex items-center gap-2">
              <span className="text-[#824707]">नवावरण रहस्य:</span>
              <span>{currentYantra.nameSanskrit} के आवरण व ज्यामितीय विन्यास</span>
            </h3>
            <p className="text-xs text-[#2E2218] font-medium leading-relaxed">
              प्रत्येक आवरण एक विशिष्ट योगिनी वर्ग, मुद्रा शक्ति, और चक्र देवता द्वारा अधिष्ठित है जो साधक की चेतना को भौतिक स्तर से पराचेतना की ओर ले जाता है।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(currentYantra.avaranas || []).map(av => {
              const isHovered = (hoveredAvarana?.index === av.index) || (pinnedAvaranaIndex === av.index);
              return (
                <div
                  key={av.index}
                  onMouseEnter={() => setPinnedAvaranaIndex(av.index)}
                  onMouseLeave={() => setPinnedAvaranaIndex(null)}
                  className={`p-4 rounded-2xl border transition-all space-y-2.5 cursor-pointer ${
                    isHovered
                      ? 'bg-[#F0E4D0] border-[#824707] ring-2 ring-[#824707]/50 shadow-md scale-[1.01]'
                      : 'bg-[#FAF7F0] border-[#D1C4B0] hover:border-[#824707]/60 hover:bg-[#FDFBF7]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold font-mono px-2 py-0.5 rounded-md bg-[#824707]/15 text-[#0F0C08]">
                        आवरण {av.index}
                      </span>
                      {isHovered && (
                        <span className="text-[10px] font-mono text-[#8C2300] font-bold animate-pulse">
                          ● सक्रिय कर्सर स्थान
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] font-mono text-[#8C2300] font-bold">{av.presidingDeity}</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0F0C08]">{av.nameSanskrit}</h4>
                    <p className="text-xs text-[#824707] font-semibold">{av.chakraTitle}</p>
                  </div>
                  <p className="text-xs text-[#2E2218] leading-relaxed font-medium">{av.significance}</p>
                  <div className="pt-2 border-t border-[#D1C4B0] flex items-center justify-between text-[10px] font-mono text-[#3D2C1C]">
                    <span>मुद्रा: <strong className="text-[#0F0C08] font-bold">{av.mudraShakti}</strong></span>
                    <span>योगिनी: <strong className="text-[#0F0C08] font-bold">{av.yoginiClass}</strong></span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: SHASTRIC CITATIONS & CLASSICAL SCRIPTURES */}
      {activeTab === 'shastric' && (
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-rozha font-bold text-[#0F0C08] flex items-center gap-2">
              <span className="text-[#824707]">प्रमाणिक ग्रन्थ साक्ष्य:</span>
              <span>शास्त्रीय स्तोत्र व तन्त्र संहिताएं</span>
            </h3>
            <p className="text-xs text-[#2E2218] font-medium">
              हमारे प्राचीन आचार्यों और ऋषियों द्वारा विरचित मूल ग्रन्थों से अक्षुण्ण श्लोक एवं उनका गूढ़ार्थ।
            </p>
          </div>

          <div className="space-y-4">
            {currentYantra.citations.map((cite, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FAF7F0] border-2 border-[#D1C4B0] space-y-4 shadow-xs"
              >
                <div className="flex items-center justify-between border-b border-[#D1C4B0] pb-3">
                  <span className="text-xs font-mono font-bold text-[#8C2300]">
                    {cite.sourceScripture}
                  </span>
                  <span className="text-xs font-mono text-[#3D2C1C] font-semibold">{cite.chapterOrVerse}</span>
                </div>

                <div className="p-4 rounded-xl bg-[#F5EFE4] border border-[#824707]/30 text-center font-rozha text-sm lg:text-base text-[#1C0D03] leading-relaxed whitespace-pre-line shadow-xs font-bold">
                  {cite.sanskritSloka}
                </div>

                <div className="space-y-2 text-xs leading-relaxed">
                  <p className="text-[#0F0C08] font-medium">
                    <strong className="text-[#8C2300] font-bold">हिन्दी भावार्थ:</strong> {cite.hindiMeaning}
                  </p>
                  <p className="text-[#2E2218] font-medium">
                    <strong className="text-[#824707] font-bold">English Translation:</strong> {cite.englishMeaning}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: JYOTISH, PLANETARY ALIGNMENT & REMEDIES */}
      {activeTab === 'jyotish' && (
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-rozha font-bold text-[#0F0C08] flex items-center gap-2">
              <span className="text-[#824707]">ज्योतिषीय फलश्रुति:</span>
              <span>ग्रह शांति, दोष निवारण व जीवनोपयोगी अनुभूत उपाय</span>
            </h3>
            <p className="text-xs text-[#2E2218] font-medium">
              वैदिक ज्योतिष के अनुसार ग्रहीय प्रतिकूलता को अनुकूलता में परिवर्तित करने का दिव्य साधन।
            </p>
          </div>

          {/* Key Jyotish Metas */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-[#FAF7F0] border border-[#D1C4B0]">
              <span className="text-[10px] font-mono text-[#3D2C1C] font-bold uppercase">Ruling Planet (स्वामी ग्रह)</span>
              <p className="font-bold text-[#8C2300] mt-0.5 text-sm">{currentYantra.jyotish.rulingPlanet}</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAF7F0] border border-[#D1C4B0]">
              <span className="text-[10px] font-mono text-[#3D2C1C] font-bold uppercase">Favorable Day (शुभ वार)</span>
              <p className="font-bold text-[#824707] mt-0.5 text-sm">{currentYantra.jyotish.favorableDay}</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAF7F0] border border-[#D1C4B0]">
              <span className="text-[10px] font-mono text-[#3D2C1C] font-bold uppercase">Direction (शुभ दिशा)</span>
              <p className="font-bold text-[#0F0C08] mt-0.5 text-sm">{currentYantra.jyotish.wearOrInstallDirection}</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAF7F0] border border-[#D1C4B0]">
              <span className="text-[10px] font-mono text-[#3D2C1C] font-bold uppercase">Metal (शुभ धातु)</span>
              <p className="font-bold text-[#824707] mt-0.5 text-sm">{currentYantra.jyotish.metalPreference}</p>
            </div>
          </div>

          {/* Specific Dosha Remedies */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-mono font-bold text-[#824707] uppercase tracking-wider">
              प्रमुख कुण्डली दोष निवारण (Specific Astrological Remedies)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentYantra.jyotish.doshaRemedies.map((dr, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#FAF7F0] border border-[#D1C4B0] space-y-2 shadow-xs"
                >
                  <h5 className="text-sm font-bold text-[#8C2300]">{dr.doshaName}</h5>
                  <p className="text-xs text-[#2E2218] font-medium">{dr.description}</p>
                  <div className="p-2.5 rounded-xl bg-[#F5EFE4] border border-[#824707]/30 text-xs text-[#0F0C08]">
                    <strong className="text-[#8C2300]">उपाय प्रक्रिया:</strong> {dr.reliefMechanism}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Practical Life Problem Remedies */}
          {currentYantra.practicalRemedies && currentYantra.practicalRemedies.length > 0 && (
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono font-bold text-[#824707] uppercase tracking-wider">
                व्यावहारिक समस्या व समाधान (Practical Life Solutions)
              </h4>
              <div className="space-y-3">
                {currentYantra.practicalRemedies.map((pr, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#FAF7F0] border border-[#D1C4B0] flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs shadow-xs"
                  >
                    <div className="space-y-1 max-w-xl">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-[#FDECE5] text-[#8C2300] border border-[#D9531E]/30">
                        {pr.category}
                      </span>
                      <p className="text-[#0F0C08] font-bold text-sm">{pr.problem}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-[#F5EFE4] border border-[#824707]/30 text-[#0F0C08] md:max-w-md font-medium">
                      {pr.remedyProtocol}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 4: UPASANA, STHAPANA & MANTRAS */}
      {activeTab === 'upasana' && (
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-rozha font-bold text-[#0F0C08] flex items-center gap-2">
              <span className="text-[#824707]">उपासना व प्राण-प्रतिष्ठा:</span>
              <span>विधि, जप अनुष्ठान व नित्य पूजा विधान</span>
            </h3>
            <p className="text-xs text-[#2E2218] font-medium">
              यन्त्र केवल धातु या चित्र नहीं, जाग्रत देव विग्रह है। शुद्ध विधि से की गई प्रतिष्ठा शत-प्रतिशत फलदायी होती है।
            </p>
          </div>

          {/* Beej Mantra & Gayatri Display */}
          <div className="p-6 rounded-2xl bg-[#FAF7F0] border-2 border-[#D1C4B0] space-y-4 shadow-xs">
            <div>
              <span className="text-xs font-mono text-[#3D2C1C] font-bold uppercase">मूल बीज मन्त्र (Core Beej Mantra)</span>
              <p className="text-base lg:text-lg font-rozha font-bold text-[#8C2300] mt-1 tracking-wide leading-relaxed">
                {currentYantra.jyotish.beejMantra}
              </p>
            </div>

            <div className="pt-3 border-t border-[#D1C4B0]">
              <span className="text-xs font-mono text-[#3D2C1C] font-bold uppercase">गायत्री मन्त्र (Gayatri Mantra)</span>
              <p className="text-sm font-rozha font-bold text-[#824707] mt-1">
                {currentYantra.jyotish.gayatriMantra}
              </p>
            </div>
          </div>

          {/* Interactive 108 Japa Counter */}
          <div className="p-6 rounded-2xl bg-linear-to-r from-[#FAF2E6] via-[#FDFBF7] to-[#F5EFE4] border-2 border-[#D1C4B0] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-[#8C2300] uppercase">Mantra Japa Counter (१०८ माला गणना)</span>
              <h4 className="text-xl font-rozha font-bold text-[#0F0C08]">दैनिक मंत्र साधना</h4>
              <p className="text-xs text-[#2E2218] font-semibold">माला: {currentYantra.jyotish.malaType}</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-center">
                <span className="text-4xl font-mono font-black text-[#824707]">{japaCount}</span>
                <span className="text-xs text-[#3D2C1C] font-bold block">/ 108</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setJapaCount(prev => (prev < 108 ? prev + 1 : 108))}
                  className="px-5 py-3 rounded-2xl bg-linear-to-r from-[#824707] to-[#8C2300] text-white font-bold text-sm shadow-md hover:brightness-105 cursor-pointer transition-all"
                >
                  + 1 जप
                </button>
                <button
                  onClick={() => setJapaCount(0)}
                  className="p-3 rounded-2xl bg-[#FAF7F0] hover:bg-[#F2ECE1] border border-[#D1C4B0] text-[#0F0C08] hover:text-[#8C2300] cursor-pointer font-bold"
                  title="Reset Counter"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Prana Pratishtha Step-by-Step */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-[#824707] uppercase tracking-wider">
              प्रतिष्ठा व नित्य पूजा के ५ चरण (Sthapana Vidhi Steps)
            </h4>
            <div className="space-y-2">
              {currentYantra.jyotish.pratishthaVidhiSummary.map((step, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#FAF7F0] border border-[#D1C4B0] text-xs text-[#0F0C08] flex items-center gap-3 font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
