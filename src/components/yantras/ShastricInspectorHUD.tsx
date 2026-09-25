'use client';

import React from 'react';
import { RotateCcw, Target, Sparkles } from 'lucide-react';
import {
  YantraShastricEntry,
  ShastricAvaranaDetail
} from '@/lib/yantras/shastric-jyotish-database';
import { HoveredAvaranaInfo } from './types';

export interface ShastricInspectorHUDProps {
  isCanvasExpanded: boolean;
  isSidebarOpen: boolean;
  pinnedAvaranaIndex: number | null;
  setPinnedAvaranaIndex: React.Dispatch<React.SetStateAction<number | null>>;
  hoveredAvarana: HoveredAvaranaInfo | null;
  currentYantra: YantraShastricEntry;
  activeDisplayAvarana: any;
  setSelectedDissectionAvarana: (idx: number) => void;
  currentAvaranaFullDetail: ShastricAvaranaDetail | null | undefined;
  selectedConstituentId: string | number | null;
  setSelectedConstituentId: (id: string | number | null) => void;
  hoveredConstituentId: string | number | null;
  setHoveredConstituentId: (id: string | number | null) => void;
  japaCount: number;
  setJapaCount: React.Dispatch<React.SetStateAction<number>>;
}

export function ShastricInspectorHUD({
  isCanvasExpanded,
  isSidebarOpen,
  pinnedAvaranaIndex,
  setPinnedAvaranaIndex,
  hoveredAvarana,
  currentYantra,
  activeDisplayAvarana,
  setSelectedDissectionAvarana,
  currentAvaranaFullDetail,
  selectedConstituentId,
  setSelectedConstituentId,
  hoveredConstituentId,
  setHoveredConstituentId,
  japaCount,
  setJapaCount
}: ShastricInspectorHUDProps) {
  return (
    <div className={`${isCanvasExpanded ? 'w-full' : isSidebarOpen ? 'xl:col-span-5' : 'xl:col-span-4'} bg-[#FDFBF7] border-2 border-[#824707]/30 rounded-[32px] p-5 sm:p-6 shadow-xl space-y-4`}>
      {/* Header with Live Status & Pin Toggle */}
      <div className="flex items-center justify-between border-b border-[#D1C4B0] pb-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#F0E4D0] border border-[#824707]/40 flex items-center justify-center text-xs text-[#0F0C08] font-bold">
            🕉️
          </div>
          <div>
            <h3 className="text-xs font-mono font-bold text-[#0F0C08] uppercase tracking-wider">
              नवावरण शास्त्रीय विश्लेषक
            </h3>
            <p className="text-[10px] text-[#3D2C1C] font-semibold">Live Shastric Geometry & Deity HUD</p>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center gap-1.5">
          {pinnedAvaranaIndex ? (
            <button
              onClick={() => setPinnedAvaranaIndex(null)}
              className="px-2.5 py-1 rounded-full bg-[#FDECE5] border border-[#D9531E]/50 text-[#8C2300] text-[10px] font-mono font-bold flex items-center gap-1 hover:bg-[#FCE8E0] transition-all cursor-pointer"
              title="Click to unlock live tracking"
            >
              <span>📌 आवरण {pinnedAvaranaIndex} लॉक</span>
              <RotateCcw className="w-2.5 h-2.5" />
            </button>
          ) : hoveredAvarana ? (
            <span className="px-2.5 py-1 rounded-full bg-emerald-100 border border-emerald-500 text-emerald-800 text-[10px] font-mono font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-ping" />
              <span>लाइव ट्रैकिंग</span>
            </span>
          ) : (
            <span className="px-2.5 py-1 rounded-full bg-[#F0E4D0] border border-[#824707]/40 text-[#0F0C08] text-[10px] font-mono font-bold">
              ✨ केन्द्र बिन्दु
            </span>
          )}
        </div>
      </div>

      {/* Quick Avarana Strip Selector (1 to N) */}
      {currentYantra.avaranas && currentYantra.avaranas.length > 0 && (
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[10px] font-mono text-[#2E2218] font-bold">
            <span>आवरण चयन (Quick Selector):</span>
            <span className="text-[#8C2300]">{currentYantra.avaranas.length} आवरण</span>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5">
            {currentYantra.avaranas.map(av => {
              const isSelected = activeDisplayAvarana?.index === av.index;
              return (
                <button
                  key={av.index}
                  onClick={() => {
                    const newIdx = av.index === pinnedAvaranaIndex ? null : av.index;
                    setPinnedAvaranaIndex(newIdx);
                    if (newIdx) setSelectedDissectionAvarana(newIdx);
                  }}
                  className={`px-2 py-1.5 rounded-xl text-[10px] font-mono font-bold transition-all cursor-pointer flex flex-col items-center justify-center ${
                    isSelected
                      ? 'bg-linear-to-r from-[#824707] to-[#8C2300] text-white shadow-md scale-105'
                      : 'bg-[#FAF7F0] hover:bg-[#F2EAE0] text-[#0F0C08] border border-[#D1C4B0]'
                  }`}
                >
                  <span className="text-[11px] font-bold leading-none">{av.index}</span>
                  <span className="text-[9px] truncate max-w-[50px] opacity-90 font-semibold">{av.nameSanskrit.slice(0, 4)}..</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Active Avarana Detail Card */}
      {activeDisplayAvarana && (
        <div className="rounded-2xl bg-[#FAF7F0] border-2 border-[#D1C4B0] p-4 space-y-3.5 shadow-xs">
          
          {/* Title & Placement */}
          <div className="space-y-1 border-b border-[#D1C4B0] pb-3">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#F0E4D0] text-[#0F0C08] border border-[#824707]/40 font-bold">
                आवरण {activeDisplayAvarana.index} of {(currentYantra.avaranas || []).length}
              </span>
              <span className="text-[10px] font-mono text-[#8C2300] font-bold truncate">
                {activeDisplayAvarana.nameEnglish}
              </span>
            </div>

            <h4 className="text-base sm:text-lg font-rozha font-bold text-[#0F0C08] pt-1">
              {activeDisplayAvarana.nameSanskrit}
            </h4>

            <p className="text-[11px] font-mono text-[#2E2218] flex items-center gap-1 font-semibold">
              <span className="text-[#8C2300]">📍 स्थान:</span>
              <span className="text-[#0F0C08]">{activeDisplayAvarana.spotTitle || activeDisplayAvarana.chakraTitle}</span>
            </p>
          </div>

          {/* 2x2 Key Attributes Grid */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            {/* Presiding Deity */}
            <div className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#D1C4B0] space-y-0.5">
              <span className="text-[10px] font-mono text-[#3D2C1C] font-bold flex items-center gap-1">
                <span>👑</span>
                <span>अधिष्ठात्री देवी:</span>
              </span>
              <p className="text-xs font-serif font-bold text-[#0F0C08] truncate">
                {activeDisplayAvarana.presidingDeity}
              </p>
            </div>

            {/* Yogini Class */}
            <div className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#D1C4B0] space-y-0.5">
              <span className="text-[10px] font-mono text-[#3D2C1C] font-bold flex items-center gap-1">
                <span>🧘‍♀️</span>
                <span>योगिनी सम्प्रदाय:</span>
              </span>
              <p className="text-xs font-mono font-bold text-[#8C2300] truncate">
                {activeDisplayAvarana.yoginiClass?.split('(')[0]}
              </p>
            </div>

            {/* Mudra Shakti */}
            <div className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#D1C4B0] space-y-0.5">
              <span className="text-[10px] font-mono text-[#3D2C1C] font-bold flex items-center gap-1">
                <span>✋</span>
                <span>मुद्रा शक्ति:</span>
              </span>
              <p className="text-xs font-serif font-bold text-[#8C2300] truncate">
                {activeDisplayAvarana.mudraShakti}
              </p>
            </div>

            {/* Sacred Geometry */}
            <div className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#D1C4B0] space-y-0.5">
              <span className="text-[10px] font-mono text-[#3D2C1C] font-bold flex items-center gap-1">
                <span>📐</span>
                <span>पवित्र ज्यामिति:</span>
              </span>
              <p className="text-xs font-mono text-[#0F0C08] truncate font-bold">
                {activeDisplayAvarana.geometryType}
              </p>
            </div>
          </div>

          {/* Significance & Spiritual Phala */}
          <div className="p-3 rounded-xl bg-[#F5EFE4] border border-[#824707]/30 space-y-1">
            <p className="text-[10px] font-mono text-[#8C2300] font-bold flex items-center gap-1">
              <span>📜 शास्त्रीय माहात्म्य व फल:</span>
            </p>
            <p className="text-xs text-[#1C1209] leading-relaxed font-semibold italic">
              "{activeDisplayAvarana.significance}"
            </p>
          </div>

          {/* Detailed Constituents: All Petals & Triangles */}
          {currentAvaranaFullDetail?.constituents && currentAvaranaFullDetail.constituents.length > 0 && (
            <div className="p-3.5 rounded-2xl bg-[#FAF7F0] border-2 border-[#824707]/30 space-y-2.5 shadow-xs">
              <div className="flex items-center justify-between border-b border-[#D1C4B0] pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm">🌸</span>
                  <div>
                    <h5 className="text-xs font-serif font-bold text-[#0F0C08]">
                      {currentAvaranaFullDetail.constituentsLabel || `सकल दल एवं त्रिकोण (${currentAvaranaFullDetail.constituents.length} देवियाँ)`}
                    </h5>
                    <p className="text-[10px] text-[#3D2C1C] font-semibold">प्रत्येक दल व त्रिकोण की अधिष्ठात्री शक्ति एवं फल</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#FDECE5] text-[#8C2300] border border-[#D9531E]/30 font-bold shrink-0">
                  {currentAvaranaFullDetail.constituents.length} शक्तियाँ
                </span>
              </div>

              {/* Synchronized Right-Panel-to-Canvas Guidance Bar */}
              <div className="flex items-center justify-between text-[10px] text-[#2E2218] bg-[#F5EFE4] px-2.5 py-1.5 rounded-lg border border-[#D1C4B0]">
                <span className="flex items-center gap-1.5 text-[#0F0C08] font-bold">
                  <Target className="w-3.5 h-3.5 text-[#8C2300] animate-pulse" />
                  <span>कैनवास सिंक: किसी भी शक्ति पर क्लिक करें</span>
                </span>
                {selectedConstituentId && (
                  <button
                    onClick={() => setSelectedConstituentId(null)}
                    className="text-[9px] font-mono text-[#8C2300] hover:text-[#0F0C08] underline cursor-pointer font-bold"
                  >
                    पिन हटाएं ✕
                  </button>
                )}
              </div>

              {/* Interactive Scrollable Grid of All Petals / Triangles */}
              <div className="max-h-[300px] overflow-y-auto pr-1 space-y-1.5">
                {currentAvaranaFullDetail.constituents.map((item, idx) => {
                  const isSelected = selectedConstituentId === item.id;
                  const isHovered = hoveredConstituentId === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setSelectedConstituentId(isSelected ? null : item.id)}
                      onMouseEnter={() => setHoveredConstituentId(item.id)}
                      onMouseLeave={() => setHoveredConstituentId(null)}
                      className={`p-2.5 rounded-xl border transition-all cursor-pointer text-left ${
                        isSelected
                          ? 'bg-[#F0E4D0] border-[#824707] ring-2 ring-[#824707]/60 shadow-md scale-[1.01]'
                          : isHovered
                          ? 'bg-[#F5EFE4] border-[#824707]/60 shadow-xs'
                          : 'bg-[#FFFFFF] hover:bg-[#FAF7F0] border-[#D1C4B0]'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1.5">
                        <div className="flex items-center gap-2">
                          <span className={`w-5 h-5 rounded-md border text-[10px] font-mono flex items-center justify-center font-bold shrink-0 ${
                            isSelected
                              ? 'bg-[#824707] text-white border-[#824707]'
                              : 'bg-[#F0E4D0] border-[#824707]/40 text-[#0F0C08]'
                          }`}>
                            {typeof item.id === 'number' ? item.id : idx + 1}
                          </span>
                          <span className="text-xs font-serif font-bold text-[#0F0C08] flex items-center gap-1.5">
                            <span>{item.nameSanskrit}</span>
                            {isSelected && (
                              <span className="text-[9px] font-sans px-1.5 py-0.2 rounded-full bg-[#824707] text-white font-bold shrink-0">
                                कैनवास पर इंगित 🎯
                              </span>
                            )}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-[#8C2300] bg-[#FDECE5] px-2 py-0.5 rounded-md border border-[#D9531E]/25 truncate max-w-[140px] font-bold">
                          {item.facultyOrNadi}
                        </span>
                      </div>

                      <p className="text-[11px] text-[#2E2218] pt-1.5 pl-7 leading-relaxed font-sans font-medium">
                        {item.significance}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Mantra & Interactive Japa Integration */}
          <div className="p-3 rounded-xl bg-[#FAF7F0] border border-[#D1C4B0] space-y-2">
            <div className="flex items-center justify-between text-[10px] font-mono">
              <span className="text-[#3D2C1C] font-semibold">संबद्ध मन्त्र स्पन्दन:</span>
              <span className="text-[#8C2300] font-bold">{currentYantra.jyotish?.malaType?.split('(')[0]}</span>
            </div>
            <p className="text-xs font-serif font-bold text-[#0F0C08] break-words">
              {currentYantra.jyotish?.beejMantra?.slice(0, 75)}...
            </p>
            <div className="flex items-center justify-between pt-1">
              <button
                onClick={() => setJapaCount(c => c + 1)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-linear-to-r from-[#824707] to-[#8C2300] text-white font-bold text-xs shadow-xs hover:brightness-105 transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>+१ जाप समर्पित करें ({japaCount})</span>
              </button>
              {japaCount > 0 && (
                <button
                  onClick={() => setJapaCount(0)}
                  className="text-[10px] font-mono text-[#8C2300] hover:text-red-700 cursor-pointer font-bold"
                >
                  रीसेट
                </button>
              )}
            </div>
          </div>

        </div>
      )}

      {/* Philosophical Footnote */}
      <p className="text-[11px] text-[#3D2C1C] font-semibold italic text-center pt-1">
        {currentYantra.corePhilosophy}
      </p>
    </div>
  );
}
