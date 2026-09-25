'use client';

import React, { useRef } from 'react';
import {
  Compass, Maximize2, Minimize2, Upload, Sparkles,
  Eye, EyeOff, Play, Pause, SkipBack, SkipForward
} from 'lucide-react';
import { YantraShastricEntry } from '@/lib/yantras/shastric-jyotish-database';
import { SRI_YANTRA_VECTOR_DISSECTIONS } from '@/lib/yantras/sri-yantra-vector-dissections';
import { ColorThemeDefinition } from '@/lib/yantras/canonical-svg-templates';
import {
  LoadedAsset,
  HoveredAvaranaInfo,
  getAvaranaRadiusRange
} from './types';

export interface YantraAltarStageProps {
  isCanvasExpanded: boolean;
  setIsCanvasExpanded: (val: boolean) => void;
  isSidebarOpen: boolean;
  currentYantra: YantraShastricEntry;
  selectedYantraId: string;
  currentThemeObj: ColorThemeDefinition;
  displayDimension: '2d_yantra' | '3d_meru' | 'pure_dissection';
  setDisplayDimension: (dim: '2d_yantra' | '3d_meru' | 'pure_dissection') => void;
  isConstructionMode: boolean;
  setIsConstructionMode: (mode: boolean) => void;
  isZoomed: boolean;
  setIsZoomed: (z: boolean) => void;
  currentAsset: LoadedAsset | null;
  canvasAltarMode: 'gold_glow' | 'transparent' | 'temple_white' | 'dark_shrine';
  handleYantraMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleYantraMouseLeave: () => void;
  handleYantraCanvasClick: () => void;
  handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showDissectionWatermark: boolean;
  setShowDissectionWatermark: (val: boolean) => void;
  singleDissectionSvg: string;
  constructionDisplayMode: 'cumulative' | 'isolated';
  setConstructionDisplayMode: (mode: 'cumulative' | 'isolated') => void;
  constructionVectorSvg: string | null;
  hoveredAvarana: HoveredAvaranaInfo | null;
  pinnedAvaranaIndex: number | null;
  setPinnedAvaranaIndex: React.Dispatch<React.SetStateAction<number | null>>;
  showBeejaMantras: boolean;
  currentAvaranaCoords: any[];
  hoveredConstituentId: string | number | null;
  setHoveredConstituentId: (id: string | number | null) => void;
  selectedConstituentId: string | number | null;
  setSelectedConstituentId: (id: string | number | null) => void;
  activeConstituentDisplay: any;
  selectedDissectionAvarana: number;
  setSelectedDissectionAvarana: (idx: number) => void;
  isAutoPlaying: boolean;
  setIsAutoPlaying: (playing: boolean) => void;
  constructionStep: number;
  setConstructionStep: React.Dispatch<React.SetStateAction<number>>;
  constructionDirection: 'srishti' | 'samhara';
  setConstructionDirection: (dir: 'srishti' | 'samhara') => void;
  activeStepsList: any[];
  activeStepData: any;
}

export function YantraAltarStage({
  isCanvasExpanded,
  setIsCanvasExpanded,
  isSidebarOpen,
  currentYantra,
  selectedYantraId,
  currentThemeObj,
  displayDimension,
  setDisplayDimension,
  isConstructionMode,
  setIsConstructionMode,
  isZoomed,
  setIsZoomed,
  currentAsset,
  canvasAltarMode,
  handleYantraMouseMove,
  handleYantraMouseLeave,
  handleYantraCanvasClick,
  handleFileUpload,
  showDissectionWatermark,
  setShowDissectionWatermark,
  singleDissectionSvg,
  constructionDisplayMode,
  setConstructionDisplayMode,
  constructionVectorSvg,
  hoveredAvarana,
  pinnedAvaranaIndex,
  setPinnedAvaranaIndex,
  showBeejaMantras,
  currentAvaranaCoords,
  hoveredConstituentId,
  setHoveredConstituentId,
  selectedConstituentId,
  setSelectedConstituentId,
  activeConstituentDisplay,
  selectedDissectionAvarana,
  setSelectedDissectionAvarana,
  isAutoPlaying,
  setIsAutoPlaying,
  constructionStep,
  setConstructionStep,
  constructionDirection,
  setConstructionDirection,
  activeStepsList,
  activeStepData
}: YantraAltarStageProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className={`${isCanvasExpanded ? 'w-full' : isSidebarOpen ? 'xl:col-span-7' : 'xl:col-span-8'} relative rounded-[32px] p-4 sm:p-7 border-2 border-[#824707]/30 flex flex-col items-center justify-center shadow-xl transition-all`}
      style={{ background: currentThemeObj.background }}
    >
      {/* Top Meta Bar & Altar Enhancement Toolbar */}
      <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#F0E4D0] text-[#0F0C08] border border-[#824707]/40 font-bold">
            {currentYantra.nameEnglish}
          </span>
          <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#FDECE5] text-[#8C2300] border border-[#D9531E]/40 font-bold">
            {currentYantra.presidingDeity}
          </span>
          {currentYantra.lineageAttribution && (
            <span className="text-[10.5px] font-sans px-2.5 py-0.5 rounded-full bg-[#FAF3E8] text-[#542608] border border-[#C9A46E]/60 font-medium">
              📜 {currentYantra.lineageAttribution}
            </span>
          )}
        </div>

        {/* 2D/3D Switcher, Construction Mode, Zoom & Canvas Expand */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* 2D vs 3D Dimension Switcher (Sri Yantra specific) */}
          {selectedYantraId === 'sri_yantra' && (
            <div className="flex items-center gap-1 bg-[#F5EFE4] p-1 rounded-xl border border-[#D1C4B0] text-xs font-mono">
              <button
                onClick={() => { setDisplayDimension('2d_yantra'); setIsConstructionMode(false); }}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  displayDimension === '2d_yantra' && !isConstructionMode
                    ? 'bg-[#824707] text-white shadow-xs'
                    : 'text-[#0F0C08] hover:bg-[#EFE7DA]'
                }`}
              >
                📐 2D यन्त्र
              </button>
              <button
                onClick={() => { setDisplayDimension('3d_meru'); setIsConstructionMode(false); }}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  displayDimension === '3d_meru' && !isConstructionMode
                    ? 'bg-[#824707] text-white shadow-xs'
                    : 'text-[#0F0C08] hover:bg-[#EFE7DA]'
                }`}
                title="3D महामेरु विग्रह (Solid Brass/Gold Pyramid Altar Visage)"
              >
                🏔️ 3D महामेरु
              </button>
              <button
                onClick={() => {
                  const nextState = !isConstructionMode;
                  setIsConstructionMode(nextState);
                  if (nextState) setDisplayDimension('2d_yantra');
                }}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  isConstructionMode
                    ? 'bg-[#8C2300] text-white shadow-xs'
                    : 'text-[#0F0C08] hover:bg-[#EFE7DA]'
                }`}
                title="चरणबद्ध निर्माण स्लाइडर (Step-by-Step Construction Assembly)"
              >
                🏗️ चरणबद्ध निर्माण
              </button>
              <button
                onClick={() => {
                  setDisplayDimension('pure_dissection');
                  setIsConstructionMode(false);
                }}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  displayDimension === 'pure_dissection' && !isConstructionMode
                    ? 'bg-[#824707] text-white shadow-xs'
                    : 'text-[#0F0C08] hover:bg-[#EFE7DA]'
                }`}
                title="शुद्ध ज्यामितीय विच्छेदन (Pure Geometric Vector Dissection)"
              >
                🔬 शुद्ध घटक
              </button>
            </div>
          )}

          {/* Zoom Control */}
          <div className="flex items-center bg-[#F5EFE4] p-1 rounded-xl border border-[#D1C4B0] text-xs font-mono">
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer font-bold ${
                isZoomed
                  ? 'bg-[#8C2300] text-white shadow-xs'
                  : 'text-[#0F0C08] hover:bg-[#EFE7DA]'
              }`}
              title={isZoomed ? "Reset Zoom" : "Zoom into Center Triangles & Bindu"}
            >
              {isZoomed ? '🔍 1x' : '🔍 +ज़ूम'}
            </button>
          </div>

          {/* Canvas Full Stage Toggle */}
          <div className="flex items-center bg-[#F5EFE4] p-1 rounded-xl border border-[#D1C4B0] text-xs font-mono">
            <button
              onClick={() => setIsCanvasExpanded(!isCanvasExpanded)}
              className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer font-bold flex items-center gap-1 ${
                isCanvasExpanded
                  ? 'bg-[#8C2300] text-white shadow-xs'
                  : 'text-[#0F0C08] hover:bg-[#EFE7DA]'
              }`}
              title={isCanvasExpanded ? "सामान्य आकार में वापस आएं" : "यन्त्र वेदी को पूरा स्पेस दें"}
            >
              {isCanvasExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5 text-[#824707]" />}
              <span>{isCanvasExpanded ? 'संकुचित' : '⛶ पूर्ण वेदी'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Display Area with Consecrated Sacred Frame */}
      {currentAsset ? (
        <div
          className={`relative w-full ${isCanvasExpanded ? 'max-w-4xl' : 'max-w-2xl xl:max-w-3xl'} aspect-square flex items-center justify-center p-2.5 sm:p-4 md:p-6 transition-all duration-300 rounded-[28px] sm:rounded-[32px] border-2 border-[#824707]/30 shadow-[0_15px_45px_rgba(42,20,5,0.08)] bg-[#FDFBF7] overflow-hidden cursor-crosshair select-none group ${
            canvasAltarMode === 'gold_glow'
              ? 'shadow-[0_0_40px_rgba(179,130,38,0.2)]'
              : canvasAltarMode === 'dark_shrine'
              ? 'shadow-[0_0_50px_rgba(0,0,0,0.8)]'
              : ''
          }`}
          onMouseMove={handleYantraMouseMove}
          onMouseLeave={handleYantraMouseLeave}
          onClick={handleYantraCanvasClick}
          onTouchMove={(e) => {
            if (e.touches && e.touches[0]) {
              handleYantraMouseMove({
                currentTarget: e.currentTarget,
                clientX: e.touches[0].clientX,
                clientY: e.touches[0].clientY
              } as unknown as React.MouseEvent<HTMLDivElement>);
            }
          }}
          onTouchEnd={handleYantraMouseLeave}
        >
          {/* Sacred Corner Filigree Accents */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#B38226] rounded-tl-lg pointer-events-none z-20" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#B38226] rounded-tr-lg pointer-events-none z-20" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#B38226] rounded-bl-lg pointer-events-none z-20" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#B38226] rounded-br-lg pointer-events-none z-20" />

          {/* Ambient Altar Glow Backdrop */}
          {canvasAltarMode === 'gold_glow' && (
            <div className="absolute inset-0 bg-radial from-[#C5A059]/15 via-transparent to-transparent pointer-events-none z-0" />
          )}

          {/* Render 3D Mahameru, Pure Vector Dissection, Construction Assembly, or Full 2D Sacred Geometry */}
          {displayDimension === '3d_meru' && selectedYantraId === 'sri_yantra' ? (
            <div className="relative w-full h-full flex flex-col items-center justify-center p-2">
              <img
                src="/yantras/sri_yantra_3d_meru.jpg"
                alt="श्री महामेरु 3D विग्रह"
                className="max-w-full max-h-full object-contain rounded-2xl drop-shadow-[0_15px_40px_rgba(0,0,0,0.95)]"
              />
              <div className="absolute bottom-2 px-3.5 py-1.5 rounded-xl bg-[#FAF7F0]/95 backdrop-blur-md border border-[#B38226] text-center shadow-lg pointer-events-none">
                <p className="text-xs font-rozha font-bold text-[#805713]">
                  श्री महामेरु विग्रह (Meru Prishta 3D Altar View)
                </p>
                <p className="text-[10px] font-mono text-[#5C4D3C]">
                  ठोस पंचधातु स्वर्ण विग्रह • पिरामिड नुमा आरोहण
                </p>
              </div>
            </div>
          ) : displayDimension === 'pure_dissection' && selectedYantraId === 'sri_yantra' ? (
            <div className={`relative w-full h-full flex items-center justify-center transition-transform duration-300 ${isZoomed ? 'scale-135' : 'scale-100'}`}>
              {/* Optional faint background watermark of full Yantra for geometric context */}
              {showDissectionWatermark && currentAsset.type === 'svg' && (
                <div
                  className="absolute inset-0 w-full h-full flex items-center justify-center opacity-15 pointer-events-none filter blur-[0.3px]"
                  dangerouslySetInnerHTML={{ __html: currentAsset.content }}
                />
              )}
              {/* Pure Independent Geometric Vector Dissection Element */}
              <div
                className="w-full h-full flex items-center justify-center [&_svg]:w-full [&_svg]:h-full transition-all [&_svg]:filter [&_svg]:contrast-125 [&_svg]:drop-shadow-[0_4px_16px_rgba(42,20,5,0.14)]"
                dangerouslySetInnerHTML={{ __html: singleDissectionSvg }}
              />
            </div>
          ) : isConstructionMode && selectedYantraId === 'sri_yantra' && constructionVectorSvg ? (
            <div className={`relative w-full h-full flex items-center justify-center transition-transform duration-300 ${isZoomed ? 'scale-135' : 'scale-100'}`}>
              {/* In Isolated Construction Mode, render faint background watermark for spatial context */}
              {constructionDisplayMode === 'isolated' && currentAsset.type === 'svg' && (
                <div
                  className="absolute inset-0 w-full h-full flex items-center justify-center opacity-15 pointer-events-none filter blur-[0.4px]"
                  dangerouslySetInnerHTML={{ __html: currentAsset.content }}
                />
              )}
              {/* Pure Vector Step-by-Step Assembly without circular clipping */}
              <div
                className="w-full h-full flex items-center justify-center [&_svg]:w-full [&_svg]:h-full transition-all [&_svg]:filter [&_svg]:contrast-125 [&_svg]:drop-shadow-[0_4px_16px_rgba(42,20,5,0.14)]"
                dangerouslySetInnerHTML={{ __html: constructionVectorSvg }}
              />
            </div>
          ) : (
            <div className={`relative w-full h-full flex items-center justify-center transition-transform duration-300 ${isZoomed ? 'scale-135' : 'scale-100'}`}>
              {/* Main Rendered Asset */}
              {currentAsset.type === 'svg' ? (
                <div
                  className="w-full h-full flex items-center justify-center [&_svg]:w-full [&_svg]:h-full transition-all [&_svg]:filter [&_svg]:contrast-125 [&_svg]:drop-shadow-[0_4px_16px_rgba(42,20,5,0.14)]"
                  dangerouslySetInnerHTML={{ __html: currentAsset.content }}
                />
              ) : (
                <img
                  src={currentAsset.content}
                  alt={currentYantra.nameEnglish}
                  className="max-w-full max-h-full object-contain rounded-2xl drop-shadow-2xl"
                />
              )}
            </div>
          )}

          {/* Dynamic Geometry Illumination & Interactive Crosshairs (2D Mode only) */}
          {displayDimension === '2d_yantra' && !isConstructionMode && (() => {
            const activeIdx = hoveredAvarana ? hoveredAvarana.index : (pinnedAvaranaIndex || null);
            const { rMin, rMax } = activeIdx ? getAvaranaRadiusRange(activeIdx) : { rMin: 0, rMax: 0 };
            const R1 = rMin * 1000;
            const R2 = rMax * 1000;

            return (
              <svg
                className={`absolute inset-0 w-full h-full pointer-events-none z-10 transition-transform duration-300 ${isZoomed ? 'scale-135' : 'scale-100'}`}
                viewBox="0 0 1000 1000"
              >
                {/* Sacred Inscribed Sanskrit Beejaksharas Layer */}
                {showBeejaMantras && selectedYantraId === 'sri_yantra' && (
                  <g className="select-none pointer-events-none">
                    {/* Central Bindu Seed */}
                    <circle cx="500" cy="500" r="14" fill="#8C2300" opacity="0.25" className="animate-pulse" />
                    <text x="500" y="506" textAnchor="middle" fill="#4D0E00" fontSize="16" fontFamily="serif" fontWeight="900">ह्रीं</text>

                    {/* Central Triangle (Kamakala) 3 Kootas */}
                    <text x="500" y="475" textAnchor="middle" fill="#5E1E05" fontSize="10.5" fontFamily="serif" fontWeight="bold">क ए ई ल ह्रीं</text>
                    <text x="458" y="534" textAnchor="middle" fill="#5E1E05" fontSize="9.5" fontFamily="serif" fontWeight="bold">ह स क ह ल ह्रीं</text>
                    <text x="542" y="534" textAnchor="middle" fill="#5E1E05" fontSize="9.5" fontFamily="serif" fontWeight="bold">स क ल ह्रीं</text>

                    {/* 8 Innermost Triangles (Ashtara Vagdevatas) */}
                    {[
                      { angle: 0, beej: 'वं' },
                      { angle: 45, beej: 'शं' },
                      { angle: 90, beej: 'षं' },
                      { angle: 135, beej: 'सं' },
                      { angle: 180, beej: 'हं' },
                      { angle: 225, beej: 'ळं' },
                      { angle: 270, beej: 'क्षं' },
                      { angle: 315, beej: 'श्रीं' },
                    ].map((item, idx) => {
                      const rad = (item.angle - 90) * (Math.PI / 180);
                      const r = 115;
                      const x = 500 + r * Math.cos(rad);
                      const y = 500 + r * Math.sin(rad);
                      return (
                        <text
                          key={`ashtara-${idx}`}
                          x={x}
                          y={y + 4}
                          textAnchor="middle"
                          fill="#3D1203"
                          fontSize="12"
                          fontFamily="serif"
                          fontWeight="bold"
                        >
                          {item.beej}
                        </text>
                      );
                    })}

                    {/* 16 Radial Petals Inscription Letters */}
                    {['अं', 'आं', 'इं', 'ईं', 'उं', 'ऊं', 'ऋं', 'ॠं', 'ऌं', 'ॡं', 'एं', 'ऐं', 'ओं', 'औं', 'अं', 'अः'].map((vowel, idx) => {
                      const angleDeg = (idx * 360) / 16 - 90;
                      const rad = angleDeg * (Math.PI / 180);
                      const r = 415;
                      const x = 500 + r * Math.cos(rad);
                      const y = 500 + r * Math.sin(rad);
                      return (
                        <text
                          key={`petal-${idx}`}
                          x={x}
                          y={y + 4}
                          textAnchor="middle"
                          fill="#3D1203"
                          fontSize="11"
                          fontFamily="serif"
                          fontWeight="bold"
                        >
                          {vowel}
                        </text>
                      );
                    })}
                  </g>
                )}

                {/* Illuminated Sacred Annular Ring / Band */}
                {activeIdx && (
                  <>
                    {R1 === 0 ? (
                      <circle
                        cx="500"
                        cy="500"
                        r={R2}
                        fill="#824707"
                        fillOpacity="0.08"
                        stroke="#824707"
                        strokeWidth="2"
                        strokeDasharray="4 3"
                        className="animate-pulse"
                      />
                    ) : (
                      <path
                        d={`M 500 ${500 - R2} A ${R2} ${R2} 0 1 0 500 ${500 + R2} A ${R2} ${R2} 0 1 0 500 ${500 - R2} Z M 500 ${500 - R1} A ${R1} ${R1} 0 1 1 500 ${500 + R1} A ${R1} ${R1} 0 1 1 500 ${500 - R1} Z`}
                        fillRule="evenodd"
                        fill="#824707"
                        fillOpacity="0.07"
                        stroke="#824707"
                        strokeWidth="2"
                        strokeDasharray="4 3"
                        className="animate-pulse"
                      />
                    )}

                    {/* Inner Boundary Line */}
                    {R1 > 0 && (
                      <circle
                        cx="500"
                        cy="500"
                        r={R1}
                        fill="none"
                        stroke="#824707"
                        strokeWidth="1.8"
                        strokeDasharray="4 4"
                        opacity="0.85"
                      />
                    )}

                    {/* Outer Boundary Line */}
                    <circle
                      cx="500"
                      cy="500"
                      r={R2}
                      fill="none"
                      stroke="#824707"
                      strokeWidth="2.4"
                      strokeDasharray="6 4"
                      opacity="0.9"
                    />
                  </>
                )}

                {/* Interactive High-Contrast Cursor Crosshair & Reticle */}
                {hoveredAvarana && (
                  <g
                    transform={`translate(${hoveredAvarana.relX * 1000}, ${hoveredAvarana.relY * 1000})`}
                    className="transition-transform duration-75"
                  >
                    <circle
                      r="26"
                      fill="none"
                      stroke="#FFD700"
                      strokeWidth="2.5"
                      strokeDasharray="6 4"
                      className="animate-spin-slow drop-shadow-[0_0_10px_#FFD700]"
                    />
                    <circle
                      r="12"
                      fill="#FF9933"
                      fillOpacity="0.25"
                      stroke="#FF9933"
                      strokeWidth="1.5"
                    />
                    <circle
                      r="6"
                      fill="#FFF9F2"
                      stroke="#FFD700"
                      strokeWidth="2.5"
                      className="drop-shadow-[0_0_12px_#FFFFFF]"
                    />
                    <line x1="-45" y1="0" x2="-14" y2="0" stroke="#FFD700" strokeWidth="2.5" />
                    <line x1="14" y1="0" x2="45" y2="0" stroke="#FFD700" strokeWidth="2.5" />
                    <line x1="0" y1="-45" x2="0" y2="-14" stroke="#FFD700" strokeWidth="2.5" />
                    <line x1="0" y1="14" x2="0" y2="45" stroke="#FFD700" strokeWidth="2.5" />
                  </g>
                )}

                {/* Interactive Constituent Power Nodes for Active Avarana */}
                {selectedYantraId === 'sri_yantra' && currentAvaranaCoords.map((coord, idx) => {
                  const isActive = (hoveredConstituentId === coord.id) || (selectedConstituentId === coord.id);
                  return (
                    <g
                      key={`node-${coord.id}-${idx}`}
                      className="pointer-events-auto cursor-pointer select-none"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedConstituentId(selectedConstituentId === coord.id ? null : coord.id);
                      }}
                      onMouseEnter={() => setHoveredConstituentId(coord.id)}
                      onMouseLeave={() => setHoveredConstituentId(null)}
                    >
                      <circle cx={coord.x} cy={coord.y} r="18" fill="transparent" />
                      <circle
                        cx={coord.x}
                        cy={coord.y}
                        r={isActive ? 6 : 4}
                        fill={isActive ? '#FFFFFF' : '#D4AF37'}
                        stroke={isActive ? '#FFD700' : '#14110E'}
                        strokeWidth={isActive ? 2.5 : 1.4}
                        className={`transition-all duration-200 ${
                          isActive
                            ? 'drop-shadow-[0_0_12px_#FFD700]'
                            : 'opacity-70 hover:opacity-100'
                        }`}
                      />
                    </g>
                  );
                })}

                {/* High-Visibility Spotlight Beacon & Floating Callout Card */}
                {selectedYantraId === 'sri_yantra' && activeConstituentDisplay && (() => {
                  const { coord, item, avaranaName, isPinned } = activeConstituentDisplay;
                  const isTop = coord.y >= 450;
                  const pointerY = isTop ? coord.cardY + 68 : coord.cardY;

                  return (
                    <g className="select-none pointer-events-auto">
                      <circle
                        cx={coord.x}
                        cy={coord.y}
                        r="28"
                        fill="none"
                        stroke="#FFD700"
                        strokeWidth="2.5"
                        className="animate-ping"
                        opacity="0.75"
                      />
                      <circle
                        cx={coord.x}
                        cy={coord.y}
                        r="18"
                        fill="#FF9933"
                        fillOpacity="0.25"
                        stroke="#FFE066"
                        strokeWidth="1.6"
                      />
                      <line x1={coord.x - 16} y1={coord.y} x2={coord.x - 7} y2={coord.y} stroke="#FFD700" strokeWidth="2" />
                      <line x1={coord.x + 7} y1={coord.y} x2={coord.x + 16} y2={coord.y} stroke="#FFD700" strokeWidth="2" />
                      <line x1={coord.x} y1={coord.y - 16} x2={coord.x} y2={coord.y - 7} stroke="#FFD700" strokeWidth="2" />
                      <line x1={coord.x} y1={coord.y + 7} x2={coord.x} y2={coord.y + 16} stroke="#FFD700" strokeWidth="2" />
                      <circle
                        cx={coord.x}
                        cy={coord.y}
                        r="6"
                        fill="#FFFFFF"
                        stroke="#FF9933"
                        strokeWidth="2.2"
                        className="drop-shadow-[0_0_12px_#FFFFFF]"
                      />
                      <line
                        x1={coord.x}
                        y1={coord.y}
                        x2={coord.cardX + 110}
                        y2={pointerY}
                        stroke="#FFD700"
                        strokeWidth="1.5"
                        strokeDasharray="3 3"
                        opacity="0.85"
                      />
                      <g
                        transform={`translate(${coord.cardX}, ${coord.cardY})`}
                        className="drop-shadow-[0_8px_24px_rgba(0,0,0,0.95)]"
                      >
                        <rect
                          width="220"
                          height="68"
                          rx="10"
                          ry="10"
                          fill="#FDFBF7"
                          stroke="#B38226"
                          strokeWidth="1.8"
                          fillOpacity="0.98"
                        />
                        <rect
                          x="5"
                          y="5"
                          width="210"
                          height="22"
                          rx="6"
                          fill="#F4EAD8"
                        />
                        <text
                          x="12"
                          y="20"
                          fill="#1E1711"
                          fontSize="11.5"
                          fontFamily="serif"
                          fontWeight="bold"
                        >
                          {item.nameSanskrit}
                        </text>
                        <text
                          x="207"
                          y="20"
                          textAnchor="end"
                          fill="#805713"
                          fontSize="9"
                          fontFamily="monospace"
                          fontWeight="bold"
                        >
                          #{typeof item.id === 'number' ? item.id : item.id}
                        </text>
                        <text
                          x="12"
                          y="40"
                          fill="#D9531E"
                          fontSize="10"
                          fontFamily="serif"
                          fontWeight="bold"
                        >
                          {item.facultyOrNadi}
                        </text>
                        <text
                          x="12"
                          y="55"
                          fill="#5C4D3C"
                          fontSize="8.5"
                          fontFamily="sans-serif"
                          fontWeight="500"
                        >
                          {avaranaName} {isPinned ? '• 🔒 पिन' : '• 👆 क्लिक से पिन'}
                        </text>
                        {isPinned && (
                          <g
                            className="cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedConstituentId(null);
                            }}
                          >
                            <circle cx="203" cy="52" r="7" fill="#F4EAD8" stroke="#B38226" strokeWidth="0.8" />
                            <text x="203" y="55" textAnchor="middle" fill="#805713" fontSize="8" fontWeight="bold">✕</text>
                          </g>
                        )}
                      </g>
                    </g>
                  );
                })()}
              </svg>
            );
          })()}
        </div>
      ) : (
        /* Respectful Canonical Asset Missing / Loading Card */
        <div className="w-full max-w-md aspect-square rounded-3xl border-2 border-dashed border-[#824707]/40 bg-[#FAF7F0] p-6 sm:p-8 flex flex-col items-center justify-center text-center space-y-4 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-[#F0E4D0] border border-[#824707]/30 flex items-center justify-center">
            <Compass className="w-8 h-8 text-[#824707] animate-pulse" />
          </div>

          <div className="space-y-1.5">
            <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#F5EFE4] text-[#8C2300] font-bold border border-[#D1C4B0]">
              {currentYantra.presidingDeity}
            </span>
            <h3 className="text-base sm:text-lg font-serif font-bold text-[#0F0C08]">
              {currentYantra.nameSanskrit}
            </h3>
            <p className="text-xs text-[#542608] font-semibold">
              {currentYantra.nameEnglish}
            </p>
            <p className="text-[11px] text-[#5A4532] max-w-xs mx-auto pt-1 font-mono">
              Yantra artwork unavailable in current view. You may upload a verified SVG or retry loading.
            </p>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <button
              onClick={() => {
                if (typeof window !== 'undefined') window.location.reload();
              }}
              className="px-3.5 py-2 rounded-xl bg-[#EFE7DA] hover:bg-[#E5DAC8] text-[#0F0C08] text-xs font-mono font-bold transition-all border border-[#D1C4B0] cursor-pointer"
            >
              पुनः प्रयास (Retry)
            </button>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2 rounded-xl bg-[#824707] hover:bg-[#6A3905] text-white text-xs font-mono font-bold shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>SVG अपलोड करें</span>
            </button>
          </div>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept=".svg,image/png,image/jpeg,image/webp"
            className="hidden"
          />
        </div>
      )}

      {/* Pure Geometric Vector Dissection HUD */}
      {displayDimension === 'pure_dissection' && selectedYantraId === 'sri_yantra' && (
        <div className="w-full max-w-lg mt-3 p-4 bg-[#FDFBF7] rounded-2xl border border-[#C5A059]/60 shadow-lg space-y-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#805713] uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#B38226]" />
                <span>९ आवरण शुद्ध ज्यामितीय विच्छेदन</span>
              </span>
            </div>

            <button
              onClick={() => setShowDissectionWatermark(!showDissectionWatermark)}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                showDissectionWatermark
                  ? 'bg-[#F4EAD8] text-[#805713] border border-[#C5A059]'
                  : 'bg-[#F5EFE4] text-[#7D6B57] border border-[#DDD1BE]'
              }`}
              title={showDissectionWatermark ? "पृष्ठभूमि यन्त्र छिपाएं" : "पृष्ठभूमि यन्त्र दिखाएं"}
            >
              {showDissectionWatermark ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
              <span>{showDissectionWatermark ? 'यन्त्र पृष्ठभूमि: चालू' : 'यन्त्र पृष्ठभूमि: बंद'}</span>
            </button>
          </div>

          {/* 9 Avarana Vector Selector Buttons (9 to 1: Srishti/Inward) */}
          <div className="grid grid-cols-3 sm:grid-cols-9 gap-1 pt-1">
            {[9, 8, 7, 6, 5, 4, 3, 2, 1].map((avIdx) => {
              const isSelected = selectedDissectionAvarana === avIdx;
              return (
                <button
                  key={avIdx}
                  onClick={() => {
                    setSelectedDissectionAvarana(avIdx);
                    setPinnedAvaranaIndex(avIdx);
                  }}
                  className={`p-1.5 rounded-xl text-center transition-all cursor-pointer flex flex-col items-center justify-center border ${
                    isSelected
                      ? 'bg-linear-to-b from-[#B38226] to-[#D9531E] text-white font-bold shadow-md scale-105 border-[#B38226]'
                      : 'bg-[#FAF7F0] hover:bg-[#F2EAE0] text-[#5C4D3C] border-[#DDD1BE]'
                  }`}
                >
                  <span className="text-xs font-black leading-none">{avIdx}</span>
                  <span className="text-[9px] truncate max-w-full font-serif hidden sm:inline pt-0.5">
                    {avIdx === 9 ? 'बिन्दु' : avIdx === 8 ? 'त्रिकोण' : avIdx === 7 ? 'अष्टार' : avIdx === 6 ? 'अन्तर्दश' : avIdx === 5 ? 'बहिर्दश' : avIdx === 4 ? 'चतुर्दश' : avIdx === 3 ? '८ पद्म' : avIdx === 2 ? '१६ पद्म' : 'भूपुर'}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Selected Avarana Detail Card */}
          {(() => {
            const av = SRI_YANTRA_VECTOR_DISSECTIONS[selectedDissectionAvarana];
            if (!av) return null;
            return (
              <div className="p-3 rounded-xl bg-[#FAF7F0] border border-[#DDD1BE] space-y-1 text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-rozha font-bold text-[#1E1711] text-sm">
                      {av.nameSanskrit}
                    </span>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-[#FDECE5] text-[#D9531E] border border-[#D9531E]/30 font-bold">
                      {av.count} घटक
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#805713] font-bold">
                    आवरण #{av.index}
                  </span>
                </div>
                <p className="text-[11px] text-[#5C4D3C] font-mono">{av.chakraTitle} • {av.nameEnglish}</p>
                <p className="text-[10px] text-[#7D6B57] pt-0.5">
                  <strong className="text-[#805713]">ज्यामितीय संरचना: </strong>
                  {av.geometryType}
                </p>
              </div>
            );
          })()}
        </div>
      )}

      {/* Step-by-Step Construction Slider HUD */}
      {isConstructionMode && selectedYantraId === 'sri_yantra' && (
        <div className="w-full max-w-lg mt-3 p-4 bg-[#FDFBF7] rounded-2xl border border-[#C5A059]/60 shadow-lg space-y-3">
          {/* Controls: Play/Pause, Step Navigation, Direction & Mode Toggles */}
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                  isAutoPlaying
                    ? 'bg-[#D9531E] text-white shadow-md animate-pulse'
                    : 'bg-[#F4EAD8] hover:bg-[#EFE2CB] text-[#805713] border border-[#C5A059]'
                }`}
                title={isAutoPlaying ? "रोकें (Pause Auto-Play)" : "स्वतः निर्माण चालू करें (Auto-Play Assembly)"}
              >
                {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isAutoPlaying ? 'विराम (Pause)' : 'ऑटो-प्ले (Play)'}</span>
              </button>

              <button
                onClick={() => setConstructionStep(prev => Math.max(1, prev - 1))}
                disabled={constructionStep <= 1}
                className="p-1.5 rounded-lg bg-[#F5EFE4] hover:bg-[#EFE7DA] disabled:opacity-30 border border-[#DDD1BE] text-[#1E1711] transition-all cursor-pointer"
                title="पिछला चरण"
              >
                <SkipBack className="w-3.5 h-3.5" />
              </button>

              <span className="font-mono text-xs font-bold text-[#805713] px-1">
                चरण {constructionStep} / 9
              </span>

              <button
                onClick={() => setConstructionStep(prev => Math.min(9, prev + 1))}
                disabled={constructionStep >= 9}
                className="p-1.5 rounded-lg bg-[#F5EFE4] hover:bg-[#EFE7DA] disabled:opacity-30 border border-[#DDD1BE] text-[#1E1711] transition-all cursor-pointer"
                title="अगला चरण"
              >
                <SkipForward className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mode Switches */}
            <div className="flex items-center gap-1.5 text-[11px] font-mono">
              <button
                onClick={() => setConstructionDirection(constructionDirection === 'srishti' ? 'samhara' : 'srishti')}
                className="px-2.5 py-1 rounded-lg bg-[#F5EFE4] hover:bg-[#EFE7DA] border border-[#DDD1BE] text-[#5C4D3C] hover:text-[#1E1711] transition-all cursor-pointer"
                title="निर्माण क्रम बदलें"
              >
                {constructionDirection === 'srishti' ? '🔄 सृष्टि क्रम' : '🔄 संहार क्रम'}
              </button>

              <button
                onClick={() => setConstructionDisplayMode(constructionDisplayMode === 'cumulative' ? 'isolated' : 'cumulative')}
                className="px-2.5 py-1 rounded-lg bg-[#F5EFE4] hover:bg-[#EFE7DA] border border-[#DDD1BE] text-[#5C4D3C] hover:text-[#1E1711] transition-all cursor-pointer"
                title="दिखाने का तरीका बदलें"
              >
                {constructionDisplayMode === 'cumulative' ? '🧱 जुड़ते हुए' : '🔍 केवल एकल चक्र'}
              </button>
            </div>
          </div>

          {/* 9 Step Pills Slider */}
          <div className="grid grid-cols-9 gap-1 pt-1">
            {activeStepsList.map((st) => (
              <button
                key={st.step}
                onClick={() => { setConstructionStep(st.step); setIsAutoPlaying(false); }}
                className={`py-1.5 px-0.5 rounded-lg text-center transition-all cursor-pointer flex flex-col items-center justify-center ${
                  constructionStep === st.step
                    ? 'bg-linear-to-b from-[#B38226] to-[#D9531E] text-white font-bold shadow-md scale-105'
                    : constructionStep > st.step && constructionDisplayMode === 'cumulative'
                    ? 'bg-[#F4EAD8] text-[#805713] border border-[#C5A059]'
                    : 'bg-[#FAF7F0] text-[#7D6B57] hover:text-[#1E1711] border border-transparent'
                }`}
                title={`${st.name} (${st.sub})`}
              >
                <span className="text-[11px] font-bold leading-none">{st.step}</span>
                <span className="text-[8px] truncate max-w-full font-serif hidden sm:inline pt-0.5">{st.name.slice(0, 4)}</span>
              </button>
            ))}
          </div>

          {/* Active Step Shastric Card */}
          <div className="p-2.5 rounded-xl bg-[#FAF7F0] border border-[#DDD1BE] flex items-center justify-between text-xs">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="font-rozha font-bold text-[#1E1711] text-sm">
                  {activeStepData.name}
                </span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-[#FDECE5] text-[#D9531E] border border-[#D9531E]/30 font-bold">
                  {activeStepData.sub}
                </span>
              </div>
              <p className="text-[11px] text-[#5C4D3C] font-sans">{activeStepData.desc}</p>
            </div>

            <div className="text-right shrink-0 pl-3">
              <span className="text-[10px] font-mono text-[#805713] font-bold block">आवरण {activeStepData.avaranaIdx}</span>
              <span className="text-[9px] text-[#8A7965]">दाईं ओर विवरण ➔</span>
            </div>
          </div>
        </div>
      )}

      {/* Clean Bottom Guidance Bar - Unobstructed Canvas */}
      <div className="flex items-center justify-between w-full max-w-lg mt-3 text-xs text-[#7D6B57] px-3.5 py-2.5 bg-[#FDFBF7] rounded-2xl border border-[#DDD1BE] shadow-xs">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse shrink-0" />
          <span>यन्त्र पर कर्सर ले जाएँ — सम्पूर्ण दल व त्रिकोण का विवरण केवल दाईं ओर देखें</span>
        </span>
        {pinnedAvaranaIndex && (
          <button
            onClick={() => setPinnedAvaranaIndex(null)}
            className="text-[#D9531E] hover:text-[#805713] font-mono text-[11px] underline cursor-pointer shrink-0 ml-2 font-bold"
          >
            अनलॉक (Reset)
          </button>
        )}
      </div>
    </div>
  );
}
