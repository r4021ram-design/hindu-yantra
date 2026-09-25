'use client';

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  SHASTRIC_JYOTISH_DATABASE,
  YantraShastricEntry
} from '@/lib/yantras/shastric-jyotish-database';
import { YANTRA_COLOR_THEMES } from '@/lib/yantras/canonical-svg-templates';
import { YANTRA_TAXONOMY_CATEGORIES } from '@/lib/yantras/yantra-taxonomy';
import { SRI_YANTRA_VECTOR_DISSECTIONS } from '@/lib/yantras/sri-yantra-vector-dissections';
import { Sparkles, Layers, Maximize2, Minimize2 } from 'lucide-react';
import {
  getConstituentCanvasCoords,
  getAllConstituentCoords,
} from '@/lib/yantras/sri-yantra-coordinates';

import {
  LoadedAsset,
  HoveredAvaranaInfo,
  normalizeSvg,
  getAvaranaRadiusFraction,
  SRISHTI_STEPS_INFO,
  SAMHARA_STEPS_INFO,
  getYantraTaxonomyCategory
} from '@/components/yantras/types';
import {
  getYantraAsset,
  getYantraCandidatePaths,
  normalizeYantraId
} from '@/lib/yantras/yantra-assets';
import { YantraLibraryDrawer } from '@/components/yantras/YantraLibraryDrawer';
import { YantraAltarStage } from '@/components/yantras/YantraAltarStage';
import { ShastricInspectorHUD } from '@/components/yantras/ShastricInspectorHUD';
import { YantraKnowledgeTabs } from '@/components/yantras/YantraKnowledgeTabs';

function YantraExplorerInner() {
  const searchParams = useSearchParams();
  const initialId = searchParams.get('id') || 'sri_yantra';

  const [selectedYantraId, setSelectedYantraId] = useState<string>(initialId);
  const [selectedTaxonomyCategory, setSelectedTaxonomyCategory] = useState<string>('all');
  const [sidebarViewMode, setSidebarViewMode] = useState<'flat' | 'grouped'>('flat');
  const [collapsedCategories, setCollapsedCategories] = useState<Record<string, boolean>>({});

  const toggleCategoryCollapse = (catId: string) => {
    setCollapsedCategories(prev => ({
      ...prev,
      [catId]: !prev[catId]
    }));
  };

  const [selectedTheme] = useState<string>('vedic_sandalwood');
  const [activeTab, setActiveTab] = useState<'geometry' | 'shastric' | 'jyotish' | 'upasana'>('geometry');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [japaCount, setJapaCount] = useState<number>(0);
  const [assetsMap, setAssetsMap] = useState<Record<string, LoadedAsset>>({});
  const [hoveredAvarana, setHoveredAvarana] = useState<HoveredAvaranaInfo | null>(null);
  const [pinnedAvaranaIndex, setPinnedAvaranaIndex] = useState<number | null>(null);
  const [displayDimension, setDisplayDimension] = useState<'2d_yantra' | '3d_meru' | 'pure_dissection'>('2d_yantra');
  const [selectedDissectionAvarana, setSelectedDissectionAvarana] = useState<number>(9);
  const [showDissectionWatermark, setShowDissectionWatermark] = useState<boolean>(true);
  const [showBeejaMantras] = useState<boolean>(false);
  const [canvasAltarMode] = useState<'gold_glow' | 'transparent' | 'temple_white' | 'dark_shrine'>('gold_glow');
  const [selectedConstituentId, setSelectedConstituentId] = useState<string | number | null>(null);
  const [hoveredConstituentId, setHoveredConstituentId] = useState<string | number | null>(null);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  // Layout expansion and collapsible sidebar states
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [isCanvasExpanded, setIsCanvasExpanded] = useState<boolean>(false);

  // Step-by-Step Construction Slider states
  const [isConstructionMode, setIsConstructionMode] = useState<boolean>(false);
  const [constructionStep, setConstructionStep] = useState<number>(1);
  const [constructionDirection, setConstructionDirection] = useState<'srishti' | 'samhara'>('srishti');
  const [constructionDisplayMode, setConstructionDisplayMode] = useState<'cumulative' | 'isolated'>('cumulative');
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);

  // Auto-play timer for construction assembly
  useEffect(() => {
    if (!isAutoPlaying || !isConstructionMode) return;
    const timer = setInterval(() => {
      setConstructionStep(prev => (prev >= 9 ? 1 : prev + 1));
    }, 2400);
    return () => clearInterval(timer);
  }, [isAutoPlaying, isConstructionMode]);

  // Sync with URL query parameter using canonical aliases
  useEffect(() => {
    const rawParam = searchParams.get('id');
    if (rawParam) {
      const normalized = normalizeYantraId(rawParam);
      if (SHASTRIC_JYOTISH_DATABASE[normalized]) {
        setSelectedYantraId(normalized);
      }
    }
  }, [searchParams]);

  // Check and load asset for selected yantra from canonical registry
  useEffect(() => {
    if (!assetsMap[selectedYantraId]) {
      const candidates = getYantraCandidatePaths(selectedYantraId);

      const tryLoad = async () => {
        for (const candidate of candidates) {
          try {
            const res = await fetch(candidate);
            if (res.ok) {
              const text = await res.text();
              if (text && text.includes('<svg')) {
                setAssetsMap(prev => ({
                  ...prev,
                  [selectedYantraId]: {
                    type: 'svg',
                    content: normalizeSvg(text),
                    fileName: candidate.split('/').pop() || 'yantra.svg'
                  }
                }));
                return;
              }
            }
          } catch {
            // continue next candidate
          }
        }

        // Fallback check for .png file in public folder
        const pngCandidates = [
          `/yantras/${selectedYantraId}.png`,
          selectedYantraId === 'sri_yantra' ? '/yantras/Shriyantra.png' : null,
        ].filter(Boolean) as string[];

        for (const pngPath of pngCandidates) {
          try {
            const pngRes = await fetch(pngPath, { method: 'HEAD' });
            if (pngRes.ok) {
              setAssetsMap(prev => ({
                ...prev,
                [selectedYantraId]: {
                  type: 'image',
                  content: pngPath,
                  fileName: pngPath.split('/').pop() || 'yantra.png'
                }
              }));
              return;
            }
          } catch {
            // continue
          }
        }
      };

      tryLoad();
    }
  }, [selectedYantraId, assetsMap]);

  // Current Yantra Profile
  const currentYantra: YantraShastricEntry = useMemo(() => {
    return SHASTRIC_JYOTISH_DATABASE[selectedYantraId] || SHASTRIC_JYOTISH_DATABASE['sri_yantra'];
  }, [selectedYantraId]);

  const currentAsset = assetsMap[selectedYantraId] || null;

  const availableYantras = useMemo(() => {
    return Object.values(SHASTRIC_JYOTISH_DATABASE);
  }, []);

  const categoryStats = useMemo(() => {
    const counts: Record<string, number> = { all: availableYantras.length };
    availableYantras.forEach(y => {
      const cat = getYantraTaxonomyCategory(y);
      counts[cat] = (counts[cat] || 0) + 1;
    });
    return counts;
  }, [availableYantras]);

  const activeTaxonomyCategories = useMemo(() => {
    const list = Object.values(YANTRA_TAXONOMY_CATEGORIES).filter(cat => (categoryStats[cat.id] || 0) > 0);
    return list.sort((a, b) => a.order - b.order);
  }, [categoryStats]);

  const filteredYantras = useMemo(() => {
    let list = availableYantras;
    if (selectedTaxonomyCategory !== 'all') {
      list = list.filter(y => getYantraTaxonomyCategory(y) === selectedTaxonomyCategory);
    }
    if (!searchQuery || !searchQuery.trim()) return list;
    const q = searchQuery.toLowerCase().trim();
    return list.filter(
      y =>
        y.id.toLowerCase().includes(q) ||
        y.nameSanskrit.toLowerCase().includes(q) ||
        y.nameHindi.toLowerCase().includes(q) ||
        y.nameEnglish.toLowerCase().includes(q) ||
        y.presidingDeity.toLowerCase().includes(q) ||
        (getYantraAsset(y.id)?.aliases?.some(alias => alias.toLowerCase().includes(q)) ?? false)
    );
  }, [availableYantras, selectedTaxonomyCategory, searchQuery]);

  const groupedYantras = useMemo(() => {
    const groups: { category: typeof YANTRA_TAXONOMY_CATEGORIES[string]; yantras: YantraShastricEntry[] }[] = [];
    activeTaxonomyCategories.forEach(cat => {
      const catYantras = filteredYantras.filter(y => getYantraTaxonomyCategory(y) === cat.id);
      if (catYantras.length > 0) {
        groups.push({ category: cat, yantras: catYantras });
      }
    });
    return groups;
  }, [activeTaxonomyCategories, filteredYantras]);

  // File Upload Handler
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    if (file.type === 'image/svg+xml' || file.name.endsWith('.svg')) {
      reader.onload = event => {
        const content = event.target?.result as string;
        setAssetsMap(prev => ({
          ...prev,
          [selectedYantraId]: {
            type: 'svg',
            content,
            fileName: file.name
          }
        }));
      };
      reader.readAsText(file);
    } else {
      reader.onload = event => {
        const content = event.target?.result as string;
        setAssetsMap(prev => ({
          ...prev,
          [selectedYantraId]: {
            type: 'image',
            content,
            fileName: file.name
          }
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Mouse & Touch coordinate inspector over the Yantra canvas
  const handleYantraMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pixelX = e.clientX - rect.left;
    const pixelY = e.clientY - rect.top;
    const relX = Math.max(0, Math.min(1, pixelX / rect.width));
    const relY = Math.max(0, Math.min(1, pixelY / rect.height));
    const dx = relX - 0.5;
    const dy = relY - 0.5;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const angleDeg = ((Math.atan2(dy, dx) * 180 / Math.PI) + 360) % 360;

    if (currentYantra.avaranas && currentYantra.avaranas.length > 0) {
      if (selectedYantraId === 'sri_yantra') {
        let avaranaIdx = 1;
        let spot = 'भूपुर (3 Concentric Earth Squares & 4 Portals)';
        let radiusFrac = 0.485;

        if (dist <= 0.030) {
          avaranaIdx = 9;
          spot = 'केन्द्रीय महाबिन्दु (Cosmic Singularity / Parama Bindu)';
          radiusFrac = 0.030;
        } else if (dist <= 0.075) {
          avaranaIdx = 8;
          spot = 'केन्द्रीय अधोमुख त्रिकोण (Central Primary Yoni Triangle)';
          radiusFrac = 0.075;
        } else if (dist <= 0.135) {
          avaranaIdx = 7;
          spot = 'अष्टार चक्र (8 Innermost Triangles - Ashtakona)';
          radiusFrac = 0.135;
        } else if (dist <= 0.185) {
          avaranaIdx = 6;
          spot = 'अन्तर्दशार चक्र (10 Inner Middle Triangles)';
          radiusFrac = 0.185;
        } else if (dist <= 0.225) {
          avaranaIdx = 5;
          spot = 'बहिर्दशार चक्र (10 Outer Middle Triangles)';
          radiusFrac = 0.225;
        } else if (dist <= 0.256) {
          avaranaIdx = 4;
          spot = 'चतुर्दशार चक्र (14 Outer Triangles)';
          radiusFrac = 0.256;
        } else if (dist <= 0.326) {
          avaranaIdx = 3;
          spot = 'अष्टदल पद्म (8-Petal Inner Lotus)';
          radiusFrac = 0.326;
        } else if (dist <= 0.395) {
          avaranaIdx = 2;
          spot = 'षोडशदल पद्म (16-Petal Outer Lotus)';
          radiusFrac = 0.395;
        } else {
          avaranaIdx = 1;
          let gate = 'भूपुर प्राकार (Earth Rampart)';
          if (angleDeg >= 315 || angleDeg < 45) gate = 'पूर्व द्वार (Eastern Portal / ऐश्वर्य द्वार)';
          else if (angleDeg >= 45 && angleDeg < 135) gate = 'दक्षिण द्वार (Southern Portal / यम-संयम द्वार)';
          else if (angleDeg >= 135 && angleDeg < 225) gate = 'पश्चिम द्वार (Western Portal / वरुण-जल द्वार)';
          else if (angleDeg >= 225 && angleDeg < 315) gate = 'उत्तर द्वार (Northern Portal / कुबेर-धन द्वार)';
          spot = gate;
          radiusFrac = 0.485;
        }

        const avaranaData = currentYantra.avaranas.find(a => a.index === avaranaIdx);
        if (avaranaData) {
          setHoveredAvarana({
            index: avaranaIdx,
            nameSanskrit: avaranaData.nameSanskrit,
            nameEnglish: avaranaData.nameEnglish,
            chakraTitle: avaranaData.chakraTitle,
            presidingDeity: avaranaData.presidingDeity,
            yoginiClass: avaranaData.yoginiClass,
            mudraShakti: avaranaData.mudraShakti,
            geometryType: avaranaData.geometryType,
            significance: avaranaData.significance,
            spotTitle: spot,
            relX,
            relY,
            pixelX,
            pixelY,
            radiusFraction: radiusFrac,
          });
        }
      } else {
        const n = currentYantra.avaranas.length;
        const clampedDist = Math.min(dist, 0.48);
        const index = Math.max(1, Math.min(n, Math.floor((1 - (clampedDist / 0.48)) * n) + 1));
        const av = currentYantra.avaranas.find(a => a.index === index) || currentYantra.avaranas[0];
        setHoveredAvarana({
          index: av.index,
          nameSanskrit: av.nameSanskrit,
          nameEnglish: av.nameEnglish,
          chakraTitle: av.chakraTitle,
          presidingDeity: av.presidingDeity,
          yoginiClass: av.yoginiClass,
          mudraShakti: av.mudraShakti,
          geometryType: av.geometryType,
          significance: av.significance,
          spotTitle: av.chakraTitle,
          relX,
          relY,
          pixelX,
          pixelY,
          radiusFraction: getAvaranaRadiusFraction(av.index),
        });
      }
    }
  };

  const handleYantraMouseLeave = () => {
    setHoveredAvarana(null);
  };

  const handleYantraCanvasClick = () => {
    if (hoveredAvarana) {
      if (pinnedAvaranaIndex === hoveredAvarana.index) {
        setPinnedAvaranaIndex(null);
      } else {
        setPinnedAvaranaIndex(hoveredAvarana.index);
      }
    }
  };

  // Active Avarana for side inspector display
  const activeDisplayAvarana = useMemo(() => {
    if (hoveredAvarana && !isConstructionMode && displayDimension !== 'pure_dissection') return hoveredAvarana;
    const avaranas = currentYantra.avaranas || [];
    if (avaranas.length === 0) return null;
    let targetIdx: number;
    if (displayDimension === 'pure_dissection' && selectedYantraId === 'sri_yantra') {
      targetIdx = selectedDissectionAvarana;
    } else if (isConstructionMode && selectedYantraId === 'sri_yantra') {
      targetIdx = constructionDirection === 'srishti' ? (10 - constructionStep) : constructionStep;
    } else {
      targetIdx = pinnedAvaranaIndex ?? (selectedYantraId === 'sri_yantra' ? 9 : 1);
    }
    const found = avaranas.find(a => a.index === targetIdx) || avaranas[0];
    return {
      index: found.index,
      nameSanskrit: found.nameSanskrit,
      nameEnglish: found.nameEnglish,
      chakraTitle: found.chakraTitle,
      presidingDeity: found.presidingDeity,
      yoginiClass: found.yoginiClass,
      mudraShakti: found.mudraShakti,
      geometryType: found.geometryType,
      significance: found.significance,
      spotTitle: found.chakraTitle,
      relX: 0.5,
      relY: 0.5,
      pixelX: 0,
      pixelY: 0,
      radiusFraction: getAvaranaRadiusFraction(found.index),
    };
  }, [hoveredAvarana, pinnedAvaranaIndex, currentYantra, selectedYantraId, isConstructionMode, constructionStep, constructionDirection, displayDimension, selectedDissectionAvarana]);

  // Deep Full Avarana detail with all individual constituent petals/triangles
  const currentAvaranaFullDetail = useMemo(() => {
    const avs = currentYantra.avaranas || [];
    if (avs.length === 0) return null;
    const targetIdx = activeDisplayAvarana?.index ?? (selectedYantraId === 'sri_yantra' ? 9 : 1);
    return avs.find(a => a.index === targetIdx) || avs[0] || null;
  }, [currentYantra, activeDisplayAvarana, selectedYantraId]);

  // Sacred geometric coordinates for all constituent shaktis
  const currentAvaranaCoords = useMemo(() => {
    if (selectedYantraId !== 'sri_yantra' || !currentAvaranaFullDetail?.constituents) return [];
    return getAllConstituentCoords(
      currentAvaranaFullDetail.index,
      currentAvaranaFullDetail.constituents
    );
  }, [selectedYantraId, currentAvaranaFullDetail]);

  // Spotlighted constituent detail
  const activeConstituentDisplay = useMemo(() => {
    if (selectedYantraId !== 'sri_yantra' || !currentAvaranaFullDetail?.constituents) return null;
    const targetId = hoveredConstituentId ?? selectedConstituentId;
    if (targetId === null) return null;
    const idx = currentAvaranaFullDetail.constituents.findIndex(c => c.id === targetId);
    if (idx === -1) return null;
    const item = currentAvaranaFullDetail.constituents[idx];
    const coord = getConstituentCanvasCoords(
      currentAvaranaFullDetail.index,
      item.id,
      idx,
      currentAvaranaFullDetail.constituents.length
    );
    return {
      item,
      index: idx,
      total: currentAvaranaFullDetail.constituents.length,
      avaranaIndex: currentAvaranaFullDetail.index,
      avaranaName: currentAvaranaFullDetail.nameSanskrit,
      coord,
      isPinned: selectedConstituentId === item.id,
    };
  }, [selectedYantraId, currentAvaranaFullDetail, hoveredConstituentId, selectedConstituentId]);

  const activeStepsList = constructionDirection === 'srishti' ? SRISHTI_STEPS_INFO : SAMHARA_STEPS_INFO;
  const activeStepData = activeStepsList[constructionStep - 1] || activeStepsList[0];

  // Pure Vector Assembly SVG for Step-by-Step Construction
  const constructionVectorSvg = useMemo(() => {
    if (!isConstructionMode || selectedYantraId !== 'sri_yantra') return null;
    const targetAvaranaIdx = constructionDirection === 'srishti' ? (10 - constructionStep) : constructionStep;

    let indicesToRender: number[] = [];
    if (constructionDisplayMode === 'isolated') {
      indicesToRender = [targetAvaranaIdx];
    } else {
      if (constructionDirection === 'srishti') {
        for (let i = 9; i >= targetAvaranaIdx; i--) {
          indicesToRender.push(i);
        }
      } else {
        for (let i = 1; i <= targetAvaranaIdx; i++) {
          indicesToRender.push(i);
        }
      }
    }

    const elements = indicesToRender
      .map(idx => SRI_YANTRA_VECTOR_DISSECTIONS[idx]?.svgElement || '')
      .join('\n');

    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%">
      <defs>
        <linearGradient id="sriGoldMain" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFE066" />
          <stop offset="35%" stop-color="#D4AF37" />
          <stop offset="70%" stop-color="#B8860B" />
          <stop offset="100%" stop-color="#8B6508" />
        </linearGradient>
        <linearGradient id="sriGoldAccent" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFF2A3" />
          <stop offset="50%" stop-color="#E5C158" />
          <stop offset="100%" stop-color="#C59B27" />
        </linearGradient>
        <radialGradient id="binduRadiance" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="30%" stop-color="#FFE875" />
          <stop offset="70%" stop-color="#FFD700" />
          <stop offset="100%" stop-color="#D4AF37" />
        </radialGradient>
      </defs>
      ${elements}
    </svg>`;
  }, [isConstructionMode, selectedYantraId, constructionDirection, constructionStep, constructionDisplayMode]);

  // Pure Isolated Vector Dissection SVG for the selected Avarana
  const singleDissectionSvg = useMemo(() => {
    const data = SRI_YANTRA_VECTOR_DISSECTIONS[selectedDissectionAvarana];
    if (!data) return '';
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%">
      <defs>
        <linearGradient id="sriGoldMain" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFE066" />
          <stop offset="35%" stop-color="#D4AF37" />
          <stop offset="70%" stop-color="#B8860B" />
          <stop offset="100%" stop-color="#8B6508" />
        </linearGradient>
        <linearGradient id="sriGoldAccent" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFF2A3" />
          <stop offset="50%" stop-color="#E5C158" />
          <stop offset="100%" stop-color="#C59B27" />
        </linearGradient>
        <radialGradient id="binduRadiance" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="30%" stop-color="#FFE875" />
          <stop offset="70%" stop-color="#FFD700" />
          <stop offset="100%" stop-color="#D4AF37" />
        </radialGradient>
      </defs>
      ${data.svgElement}
    </svg>`;
  }, [selectedDissectionAvarana]);

  const currentThemeObj = YANTRA_COLOR_THEMES[selectedTheme] || YANTRA_COLOR_THEMES.traditional_shastric;

  return (
    <div className="min-h-screen bg-[#F7F3EB] text-[#0F0C08] font-sans pb-20 space-y-8">
      {/* Top Banner */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 p-6 rounded-[28px] bg-[#FDFBF7] border-2 border-[#D1C4B0] shadow-[0_4px_20px_rgba(42,20,5,0.06)]">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono text-[#5C3A0E] uppercase tracking-wider font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#824707]" />
            <span>Sacred Shastric Yantra Platform</span>
            <span>•</span>
            <span className="text-[#8C2300] font-bold">{currentYantra.tradition}</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-rozha font-bold text-[#0F0C08] flex items-center gap-3">
            <span>{currentYantra.nameSanskrit}</span>
            <span className="text-sm font-cinzel font-bold text-[#3D2C1C]">({currentYantra.nameEnglish})</span>
          </h1>
          <p className="text-xs text-[#2E2218] max-w-2xl font-semibold">{currentYantra.subTitle}</p>
        </div>

        {/* Action Controls & Shastric Badge */}
        <div className="flex items-center gap-2.5 flex-wrap">
          {/* Library Toggle Button */}
          <button
            onClick={() => setIsSidebarOpen(prev => !prev)}
            className={`px-3.5 py-2 rounded-xl border text-xs font-mono font-bold flex items-center gap-2 cursor-pointer transition-all shadow-xs ${
              isSidebarOpen
                ? 'bg-[#824707] text-white border-[#824707]'
                : 'bg-[#F5EFE4] hover:bg-[#EFE5D5] text-[#0F0C08] border-[#824707]/40'
            }`}
            title={isSidebarOpen ? "यन्त्र सूची छुपाएं (Hide Library)" : "यन्त्र सूची खोलें (Open Registry)"}
          >
            <Layers className="w-4 h-4 text-[#824707] shrink-0" />
            <span>{isSidebarOpen ? '◀ यन्त्र सूची छुपाएं' : '☰ यन्त्र सूची (45+)'}</span>
          </button>

          {/* Full Canvas Altar Toggle Button */}
          <button
            onClick={() => setIsCanvasExpanded(prev => !prev)}
            className={`px-3.5 py-2 rounded-xl border text-xs font-mono font-bold flex items-center gap-2 cursor-pointer transition-all shadow-xs ${
              isCanvasExpanded
                ? 'bg-[#8C2300] text-white border-[#8C2300]'
                : 'bg-[#F5EFE4] hover:bg-[#EFE5D5] text-[#0F0C08] border-[#824707]/40'
            }`}
            title={isCanvasExpanded ? "सामान्य दृश्य (Standard Layout)" : "पूर्ण वेदी विस्तार (Full Altar Space)"}
          >
            {isCanvasExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4 text-[#824707]" />}
            <span>{isCanvasExpanded ? 'सामान्य वेदी' : '⛶ पूर्ण वेदी'}</span>
          </button>

          {/* Canonical Shastric Badge */}
          <div className="px-3.5 py-2 rounded-xl bg-[#F5EFE4] border border-[#824707]/30 text-xs font-mono text-[#0F0C08] font-bold flex items-center gap-2 shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
            <span>शास्त्रीय प्रामाणिक</span>
          </div>
        </div>
      </div>

      {/* Main Studio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Side: Yantra Catalog Sidebar (18-Tier Taxonomy) */}
        <YantraLibraryDrawer
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          sidebarViewMode={sidebarViewMode}
          setSidebarViewMode={setSidebarViewMode}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedTaxonomyCategory={selectedTaxonomyCategory}
          setSelectedTaxonomyCategory={setSelectedTaxonomyCategory}
          selectedYantraId={selectedYantraId}
          setSelectedYantraId={setSelectedYantraId}
          assetsMap={assetsMap}
          availableYantras={availableYantras}
          filteredYantras={filteredYantras}
          activeTaxonomyCategories={activeTaxonomyCategories}
          categoryStats={categoryStats}
          groupedYantras={groupedYantras}
          collapsedCategories={collapsedCategories}
          toggleCategoryCollapse={toggleCategoryCollapse}
        />

        {/* Center / Right: Yantra Display & Multidimensional Knowledge Base */}
        <main className={`${isSidebarOpen ? 'lg:col-span-9' : 'lg:col-span-12'} space-y-6 transition-all duration-300`}>
          {/* Main Workspace: Sacred Yantra Canvas + Dedicated Side Shastric HUD */}
          <div className={`grid grid-cols-1 ${isCanvasExpanded ? 'xl:grid-cols-1' : 'xl:grid-cols-12'} gap-6 items-start`}>
            {/* Left Column: Sacred Yantra Canvas Stage */}
            <YantraAltarStage
              isCanvasExpanded={isCanvasExpanded}
              setIsCanvasExpanded={setIsCanvasExpanded}
              isSidebarOpen={isSidebarOpen}
              currentYantra={currentYantra}
              selectedYantraId={selectedYantraId}
              currentThemeObj={currentThemeObj}
              displayDimension={displayDimension}
              setDisplayDimension={setDisplayDimension}
              isConstructionMode={isConstructionMode}
              setIsConstructionMode={setIsConstructionMode}
              isZoomed={isZoomed}
              setIsZoomed={setIsZoomed}
              currentAsset={currentAsset}
              canvasAltarMode={canvasAltarMode}
              handleYantraMouseMove={handleYantraMouseMove}
              handleYantraMouseLeave={handleYantraMouseLeave}
              handleYantraCanvasClick={handleYantraCanvasClick}
              handleFileUpload={handleFileUpload}
              showDissectionWatermark={showDissectionWatermark}
              setShowDissectionWatermark={setShowDissectionWatermark}
              singleDissectionSvg={singleDissectionSvg}
              constructionDisplayMode={constructionDisplayMode}
              setConstructionDisplayMode={setConstructionDisplayMode}
              constructionVectorSvg={constructionVectorSvg}
              hoveredAvarana={hoveredAvarana}
              pinnedAvaranaIndex={pinnedAvaranaIndex}
              setPinnedAvaranaIndex={setPinnedAvaranaIndex}
              showBeejaMantras={showBeejaMantras}
              currentAvaranaCoords={currentAvaranaCoords}
              hoveredConstituentId={hoveredConstituentId}
              setHoveredConstituentId={setHoveredConstituentId}
              selectedConstituentId={selectedConstituentId}
              setSelectedConstituentId={setSelectedConstituentId}
              activeConstituentDisplay={activeConstituentDisplay}
              selectedDissectionAvarana={selectedDissectionAvarana}
              setSelectedDissectionAvarana={setSelectedDissectionAvarana}
              isAutoPlaying={isAutoPlaying}
              setIsAutoPlaying={setIsAutoPlaying}
              constructionStep={constructionStep}
              setConstructionStep={setConstructionStep}
              constructionDirection={constructionDirection}
              setConstructionDirection={setConstructionDirection}
              activeStepsList={activeStepsList}
              activeStepData={activeStepData}
            />

            {/* Right Column: Dedicated Live Shastric Avarana Inspector HUD Panel */}
            <ShastricInspectorHUD
              isCanvasExpanded={isCanvasExpanded}
              isSidebarOpen={isSidebarOpen}
              pinnedAvaranaIndex={pinnedAvaranaIndex}
              setPinnedAvaranaIndex={setPinnedAvaranaIndex}
              hoveredAvarana={hoveredAvarana}
              currentYantra={currentYantra}
              activeDisplayAvarana={activeDisplayAvarana}
              setSelectedDissectionAvarana={setSelectedDissectionAvarana}
              currentAvaranaFullDetail={currentAvaranaFullDetail}
              selectedConstituentId={selectedConstituentId}
              setSelectedConstituentId={setSelectedConstituentId}
              hoveredConstituentId={hoveredConstituentId}
              setHoveredConstituentId={setHoveredConstituentId}
              japaCount={japaCount}
              setJapaCount={setJapaCount}
            />
          </div>

          {/* Multidimensional Knowledge Tabs: Shastric, Astrological & Upasana */}
          <YantraKnowledgeTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            currentYantra={currentYantra}
            hoveredAvarana={hoveredAvarana}
            pinnedAvaranaIndex={pinnedAvaranaIndex}
            setPinnedAvaranaIndex={setPinnedAvaranaIndex}
            japaCount={japaCount}
            setJapaCount={setJapaCount}
          />
        </main>
      </div>
    </div>
  );
}

export default function YantraDigitalMuseumPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F7F3EB] flex items-center justify-center text-[#B38226]">लोड हो रहा है...</div>}>
      <YantraExplorerInner />
    </Suspense>
  );
}
