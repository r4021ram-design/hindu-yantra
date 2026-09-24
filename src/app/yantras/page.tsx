'use client';

import React, { useState, useMemo, useRef, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  SHASTRIC_JYOTISH_DATABASE,
  YantraShastricEntry
} from '@/lib/yantras/shastric-jyotish-database';
import {
  YANTRA_COLOR_THEMES
} from '@/lib/yantras/canonical-svg-templates';
import {
  SRI_YANTRA_VECTOR_DISSECTIONS,
  AvaranaDissectionData
} from '@/lib/yantras/sri-yantra-vector-dissections';
import {
  Search, Download, Copy, Check, Sparkles, Compass, Star, Flame, RotateCcw,
  Upload, Layers, Palette, BookOpen, CheckCircle2, Image as ImageIcon, Trash2,
  Play, Pause, SkipBack, SkipForward, Eye, EyeOff, Target,
  ChevronLeft, ChevronRight, Maximize2, Minimize2
} from 'lucide-react';
import {
  getConstituentCanvasCoords,
  getAllConstituentCoords,
} from '@/lib/yantras/sri-yantra-coordinates';

interface LoadedAsset {
  type: 'svg' | 'image';
  content: string;
  fileName: string;
}

// Helper to ensure SVG has proper viewBox for responsive scaling
function normalizeSvg(raw: string): string {
  if (!raw.includes('<svg')) return raw;
  if (!raw.includes('viewBox') && raw.includes('width=') && raw.includes('height=')) {
    const widthMatch = raw.match(/width=["']?(\d+)/);
    const heightMatch = raw.match(/height=["']?(\d+)/);
    if (widthMatch && heightMatch) {
      const w = widthMatch[1];
      const h = heightMatch[1];
      return raw.replace(/<svg\b/, `<svg viewBox="0 0 ${w} ${h}" `);
    }
  }
  return raw;
}

export interface HoveredAvaranaInfo {
  index: number;
  nameSanskrit: string;
  nameEnglish: string;
  chakraTitle: string;
  presidingDeity: string;
  yoginiClass: string;
  mudraShakti: string;
  geometryType: string;
  significance: string;
  spotTitle: string;
  relX: number;
  relY: number;
  pixelX: number;
  pixelY: number;
  radiusFraction: number;
}

export function getAvaranaRadiusFraction(index: number): number {
  switch (index) {
    case 9: return 0.030;
    case 8: return 0.075;
    case 7: return 0.135;
    case 6: return 0.185;
    case 5: return 0.225;
    case 4: return 0.256;
    case 3: return 0.326;
    case 2: return 0.395;
    case 1:
    default: return 0.485;
  }
}

export function getAvaranaRadiusRange(index: number): { rMin: number; rMax: number } {
  switch (index) {
    case 9: return { rMin: 0, rMax: 0.030 };       // 9: Bindu (Central Point)
    case 8: return { rMin: 0.030, rMax: 0.075 };   // 8: Kamakhya Triangle
    case 7: return { rMin: 0.075, rMax: 0.135 };   // 7: 8 Inner Triangles (Ashtara)
    case 6: return { rMin: 0.135, rMax: 0.185 };   // 6: 10 Inner Triangles (Antardashara)
    case 5: return { rMin: 0.185, rMax: 0.225 };   // 5: 10 Outer Triangles (Bahirdashara)
    case 4: return { rMin: 0.225, rMax: 0.256 };   // 4: 14 Triangles (Chaturdashara)
    case 3: return { rMin: 0.256, rMax: 0.326 };   // 3: 8 Petals (Ashtadala)
    case 2: return { rMin: 0.326, rMax: 0.395 };   // 2: 16 Petals (Shodashadala)
    case 1:
    default: return { rMin: 0.395, rMax: 0.495 };  // 1: Bhupura Citadel & 4 Gates
  }
}

export const SRISHTI_STEPS_INFO = [
  { step: 1, avaranaIdx: 9, name: 'महाबिन्दु', sub: 'सर्वआनन्दमय चक्र', rMin: 0.000, rMax: 0.030, desc: 'आदि पराशक्ति का अद्वैत उद्गम व महाबिन्दु' },
  { step: 2, avaranaIdx: 8, name: 'मूल त्रिकोण', sub: 'सर्वसिद्धिप्रद चक्र', rMin: 0.030, rMax: 0.075, desc: 'कामकला (इच्छा, ज्ञान, क्रिया त्रिपुटी)' },
  { step: 3, avaranaIdx: 7, name: 'अष्टकोण (८ त्रिकोण)', sub: 'सर्वरोगहर चक्र', rMin: 0.075, rMax: 0.135, desc: '८ वशिनी आदि रहस्य वाग्देवताएँ' },
  { step: 4, avaranaIdx: 6, name: 'अन्तर्दशार (१० त्रिकोण)', sub: 'सर्वरक्षाकर चक्र', rMin: 0.135, rMax: 0.185, desc: '१० अंतः पावक अग्नियाँ व निगूढ़ योगिनी' },
  { step: 5, avaranaIdx: 5, name: 'बहिर्दशार (१० त्रिकोण)', sub: 'सर्वार्थसाधक चक्र', rMin: 0.185, rMax: 0.225, desc: '१० प्राण (प्राण, अपान, व्यान...) व कुलयोगिनी' },
  { step: 6, avaranaIdx: 4, name: 'चतुर्दशार (१४ त्रिकोण)', sub: 'सर्वसौभाग्यदायक चक्र', rMin: 0.225, rMax: 0.256, desc: '१४ प्रधान नाड़ियाँ (सुषुम्णा, इड़ा...) व सम्प्रदाय योगिनी' },
  { step: 7, avaranaIdx: 3, name: 'अष्टदल कमल (८ पंखुड़ियाँ)', sub: 'सर्वसंक्षोभण चक्र', rMin: 0.256, rMax: 0.326, desc: '८ अनंग शक्तियाँ व गुप्ततर योगिनी' },
  { step: 8, avaranaIdx: 2, name: 'षोडशदल कमल (१६ पंखुड़ियाँ)', sub: 'सर्वाशापरिपूरक चक्र', rMin: 0.326, rMax: 0.395, desc: '१६ कामाकर्षिणी शक्तियाँ व गुप्त योगिनी' },
  { step: 9, avaranaIdx: 1, name: 'भूपुर (३ रेखाएँ व ४ द्वार)', sub: 'त्रैलोक्यमोहन चक्र', rMin: 0.395, rMax: 0.500, desc: '१० सिद्धियाँ + ८ मातृकाएँ + ४ द्वार (प्रकट योगिनी)' },
];

export const SAMHARA_STEPS_INFO = [
  { step: 1, avaranaIdx: 1, name: 'भूपुर (३ रेखाएँ व ४ द्वार)', sub: 'त्रैलोक्यमोहन चक्र', rMin: 0.395, rMax: 0.500, desc: '१० सिद्धियाँ + ८ मातृकाएँ + ४ द्वार (प्रकट योगिनी)' },
  { step: 2, avaranaIdx: 2, name: 'षोडशदल कमल (१६ पंखुड़ियाँ)', sub: 'सर्वाशापरिपूरक चक्र', rMin: 0.326, rMax: 0.395, desc: '१६ कामाकर्षिणी शक्तियाँ व गुप्त योगिनी' },
  { step: 3, avaranaIdx: 3, name: 'अष्टदल कमल (८ पंखुड़ियाँ)', sub: 'सर्वसंक्षोभण चक्र', rMin: 0.256, rMax: 0.326, desc: '८ अनंग शक्तियाँ व गुप्ततर योगिनी' },
  { step: 4, avaranaIdx: 4, name: 'चतुर्दशार (१४ त्रिकोण)', sub: 'सर्वसौभाग्यदायक चक्र', rMin: 0.225, rMax: 0.256, desc: '१४ प्रधान नाड़ियाँ (सुषुम्णा, इड़ा...) व सम्प्रदाय योगिनी' },
  { step: 5, avaranaIdx: 5, name: 'बहिर्दशार (१० त्रिकोण)', sub: 'सर्वार्थसाधक चक्र', rMin: 0.185, rMax: 0.225, desc: '१० प्राण (प्राण, अपान, व्यान...) व कुलयोगिनी' },
  { step: 6, avaranaIdx: 6, name: 'अन्तर्दशार (१० त्रिकोण)', sub: 'सर्वरक्षाकर चक्र', rMin: 0.135, rMax: 0.185, desc: '१० अंतः पावक अग्नियाँ व निगूढ़ योगिनी' },
  { step: 7, avaranaIdx: 7, name: 'अष्टकोण (८ त्रिकोण)', sub: 'सर्वरोगहर चक्र', rMin: 0.075, rMax: 0.135, desc: '८ वशिनी आदि रहस्य वाग्देवताएँ' },
  { step: 8, avaranaIdx: 8, name: 'मूल त्रिकोण', sub: 'सर्वसिद्धिप्रद चक्र', rMin: 0.035, rMax: 0.085, desc: 'कामकला (इच्छा, ज्ञान, क्रिया त्रिपुटी)' },
  { step: 9, avaranaIdx: 9, name: 'महाबिन्दु', sub: 'सर्वआनन्दमय चक्र', rMin: 0.000, rMax: 0.038, desc: 'आदि पराशक्ति का अद्वैत उद्गम व महाबिन्दु' },
];

function YantraExplorerInner() {
  const searchParams = useSearchParams();
  const initialId = searchParams.get('id') || 'sri_yantra';

  const [selectedYantraId, setSelectedYantraId] = useState<string>(initialId);
  const [selectedTheme, setSelectedTheme] = useState<string>('vedic_sandalwood');
  const [activeTab, setActiveTab] = useState<'geometry' | 'shastric' | 'jyotish' | 'upasana'>('geometry');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [japaCount, setJapaCount] = useState<number>(0);
  const [assetsMap, setAssetsMap] = useState<Record<string, LoadedAsset>>({});
  const [hoveredAvarana, setHoveredAvarana] = useState<HoveredAvaranaInfo | null>(null);
  const [pinnedAvaranaIndex, setPinnedAvaranaIndex] = useState<number | null>(null);
  const [metalFinish] = useState<'pure_gold' | 'antique_copper' | 'kumkum_vermilion' | 'obsidian_gold'>('pure_gold');
  const [displayDimension, setDisplayDimension] = useState<'2d_yantra' | '3d_meru' | 'pure_dissection'>('2d_yantra');
  const [selectedDissectionAvarana, setSelectedDissectionAvarana] = useState<number>(9);
  const [showDissectionWatermark, setShowDissectionWatermark] = useState<boolean>(true);
  const [showBeejaMantras] = useState<boolean>(false);
  const [canvasAltarMode] = useState<'gold_glow' | 'transparent' | 'temple_white' | 'dark_shrine'>('gold_glow');
  const [selectedConstituentId, setSelectedConstituentId] = useState<string | number | null>(null);
  const [hoveredConstituentId, setHoveredConstituentId] = useState<string | number | null>(null);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Layout expansion and collapsible sidebar states
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isCanvasExpanded, setIsCanvasExpanded] = useState<boolean>(false);

  // Step-by-Step Construction Slider states
  const [isConstructionMode, setIsConstructionMode] = useState<boolean>(false);
  const [constructionStep, setConstructionStep] = useState<number>(1); // 1 to 9
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

  // Sync with URL query parameter
  useEffect(() => {
    const paramId = searchParams.get('id');
    if (paramId && SHASTRIC_JYOTISH_DATABASE[paramId]) {
      setSelectedYantraId(paramId);
    }
  }, [searchParams]);

  // Try checking if a file exists in public/yantras on mount or selection
  useEffect(() => {
    if (!assetsMap[selectedYantraId]) {
      const candidates = [
        `/yantras/${selectedYantraId}.svg`,
        `/yantras/${selectedYantraId.replace('_', '')}.svg`,
        selectedYantraId === 'sri_yantra' ? '/yantras/Shriyantra.svg' : null,
        selectedYantraId === 'sri_yantra' ? '/yantras/shriyantra.svg' : null,
        selectedYantraId === 'sri_yantra' ? '/yantras/SriYantra.svg' : null,
      ].filter(Boolean) as string[];

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

  // Current Asset for selected Yantra
  const currentAsset = assetsMap[selectedYantraId] || null;

  // Available Yantras list
  const availableYantras = useMemo(() => {
    return Object.values(SHASTRIC_JYOTISH_DATABASE);
  }, []);

  const filteredYantras = useMemo(() => {
    if (!searchQuery) return availableYantras;
    const q = searchQuery.toLowerCase();
    return availableYantras.filter(
      y =>
        y.id.toLowerCase().includes(q) ||
        y.nameSanskrit.toLowerCase().includes(q) ||
        y.nameHindi.toLowerCase().includes(q) ||
        y.nameEnglish.toLowerCase().includes(q) ||
        y.presidingDeity.toLowerCase().includes(q)
    );
  }, [availableYantras, searchQuery]);

  // File Upload Handler (Stores asset specifically for current yantra)
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

  // Remove current asset
  const handleRemoveAsset = () => {
    setAssetsMap(prev => {
      const copy = { ...prev };
      delete copy[selectedYantraId];
      return copy;
    });
  };

  // Download SVG
  const handleDownloadSVG = () => {
    if (!currentAsset || currentAsset.type !== 'svg') return;
    const blob = new Blob([currentAsset.content], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${currentYantra.id}_authentic.svg`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Download High-Res PNG
  const handleDownloadPNG = () => {
    if (!currentAsset) return;

    if (currentAsset.type === 'image') {
      const a = document.createElement('a');
      a.href = currentAsset.content;
      a.download = `${currentYantra.id}_authentic.png`;
      a.click();
      return;
    }

    const svgBlob = new Blob([currentAsset.content], { type: 'image/svg+xml;charset=utf-8' });
    const URLObject = window.URL || window.webkitURL || window;
    const blobURL = URLObject.createObjectURL(svgBlob);
    const image = new Image();

    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 3000;
      canvas.height = 3000;
      const context = canvas.getContext('2d');
      if (context) {
        context.fillStyle = YANTRA_COLOR_THEMES[selectedTheme]?.background || '#0A0806';
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        const png = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.download = `${currentYantra.id}_3000px.png`;
        a.href = png;
        a.click();
      }
      URLObject.revokeObjectURL(blobURL);
    };
    image.src = blobURL;
  };

  // Copy SVG to clipboard
  const handleCopySVG = async () => {
    if (!currentAsset || currentAsset.type !== 'svg') return;
    try {
      await navigator.clipboard.writeText(currentAsset.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error(e);
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

  // Active Avarana for side inspector display (hovered takes precedence, then pure dissection, then construction, then pinned, default to 9/1)
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

  // Sacred geometric coordinates for all constituent shaktis of current active avarana
  const currentAvaranaCoords = useMemo(() => {
    if (selectedYantraId !== 'sri_yantra' || !currentAvaranaFullDetail?.constituents) return [];
    return getAllConstituentCoords(
      currentAvaranaFullDetail.index,
      currentAvaranaFullDetail.constituents
    );
  }, [selectedYantraId, currentAvaranaFullDetail]);

  // Spotlighted constituent detail for pinpoint highlight on Sri Yantra canvas
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

  // Pure Vector Assembly SVG for Step-by-Step Construction (Zero circular clipping)
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
            <span>{isSidebarOpen ? '◀ यन्त्र सूची छुपाएं' : '☰ यन्त्र सूची (25+)'}</span>
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
        
        {/* Left Side: Yantra Catalog Sidebar (Collapsible) */}
        {isSidebarOpen && (
          <aside className="lg:col-span-3 bg-[#FDFBF7] border-2 border-[#D1C4B0] rounded-3xl p-5 space-y-4 h-[calc(100vh-140px)] overflow-y-auto no-scrollbar shadow-[0_4px_18px_rgba(42,20,5,0.06)] sticky top-24 z-30">
            <div className="flex items-center justify-between pb-2 border-b border-[#D1C4B0]">
              <div className="space-y-0.5">
                <h2 className="text-xs font-mono font-bold text-[#0F0C08] uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#824707]" />
                  <span>Sacred Yantra Library</span>
                </h2>
                <p className="text-[11px] text-[#3D2C1C] font-semibold">Authentic Shastric Registry</p>
              </div>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="p-1.5 rounded-lg bg-[#F5EFE4] hover:bg-[#EFE5D5] text-[#0F0C08] transition-all cursor-pointer"
                title="यन्त्र सूची छुपाएं"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>

            <div className="relative">
              <Search className="absolute left-3.5 top-3 w-3.5 h-3.5 text-[#5A4532]" />
              <input
                type="text"
                placeholder="Search Yantra or Deity..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full bg-[#F5EFE4] border border-[#D1C4B0] focus:border-[#824707] rounded-xl pl-9 pr-3 py-2 text-xs text-[#0F0C08] placeholder-[#5A4532] focus:outline-none transition-all font-medium"
              />
            </div>

            <div className="space-y-2 pt-1">
              {filteredYantras.map(y => {
                const isSelected = y.id === selectedYantraId;
                const hasAsset = Boolean(assetsMap[y.id]);

                return (
                  <button
                    key={y.id}
                    onClick={() => setSelectedYantraId(y.id)}
                    className={`w-full text-left p-3 rounded-2xl border transition-all cursor-pointer flex flex-col gap-1 ${
                      isSelected
                        ? 'bg-[#F0E4D0] border-[#824707] text-[#0F0C08] shadow-xs ring-1 ring-[#824707]/40'
                        : 'bg-[#FAF7F0] border-[#E8DFC8] hover:bg-[#F2EAE0] text-[#0F0C08]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-serif font-bold ${isSelected ? 'text-[#8C2300]' : 'text-[#0F0C08]'}`}>
                        {y.nameSanskrit}
                      </span>
                      <div className="flex items-center gap-1">
                        {hasAsset && (
                          <span className="w-2 h-2 rounded-full bg-emerald-600" title="Authentic Asset Loaded" />
                        )}
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#824707]" />}
                      </div>
                    </div>
                    <span className="text-[11px] text-[#2E2218] truncate font-semibold">{y.nameEnglish}</span>
                    <span className="text-[10px] font-mono text-[#8C2300] font-bold">{y.presidingDeity}</span>
                  </button>
                );
              })}
            </div>
          </aside>
        )}

        {/* Center / Right: Yantra Display & Multidimensional Knowledge Base */}
        <main className={`${isSidebarOpen ? 'lg:col-span-9' : 'lg:col-span-12'} space-y-6 transition-all duration-300`}>
          
          {/* Main Workspace: Sacred Yantra Canvas + Dedicated Side Shastric HUD */}
          <div className={`grid grid-cols-1 ${isCanvasExpanded ? 'xl:grid-cols-1' : 'xl:grid-cols-12'} gap-6 items-start`}>
            
            {/* Left Column: Sacred Yantra Canvas Stage */}
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
                  className={`relative w-full ${isCanvasExpanded ? 'max-w-4xl min-h-[620px] lg:min-h-[820px]' : 'max-w-2xl xl:max-w-3xl min-h-[520px] sm:min-h-[620px] lg:min-h-[720px]'} aspect-square flex items-center justify-center p-3 sm:p-6 transition-all duration-300 rounded-[32px] border-2 border-[#824707]/30 shadow-[0_15px_45px_rgba(42,20,5,0.08)] bg-[#FDFBF7] overflow-hidden cursor-crosshair select-none group ${
                    canvasAltarMode === 'gold_glow'
                      ? 'shadow-[0_0_40px_rgba(179,130,38,0.2)]'
                      : canvasAltarMode === 'dark_shrine'
                      ? 'shadow-[0_0_50px_rgba(0,0,0,0.8)]'
                      : ''
                  }`}
                  onMouseMove={handleYantraMouseMove}
                  onMouseLeave={handleYantraMouseLeave}
                  onClick={handleYantraCanvasClick}
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
                      {/* Main Rendered Asset (Pure Vector with no white box, no corner mantras, no bottom text) */}
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
                            {/* Outer spinning targeting circle */}
                            <circle
                              r="26"
                              fill="none"
                              stroke="#FFD700"
                              strokeWidth="2.5"
                              strokeDasharray="6 4"
                              className="animate-spin-slow drop-shadow-[0_0_10px_#FFD700]"
                            />
                            {/* Inner glowing pulse aura */}
                            <circle
                              r="12"
                              fill="#FF9933"
                              fillOpacity="0.25"
                              stroke="#FF9933"
                              strokeWidth="1.5"
                            />
                            {/* Center bright dot that never gets hidden */}
                            <circle
                              r="6"
                              fill="#FFF9F2"
                              stroke="#FFD700"
                              strokeWidth="2.5"
                              className="drop-shadow-[0_0_12px_#FFFFFF]"
                            />
                            {/* Extended high-visibility crosshair rays */}
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
                              {/* Extended Touch/Click Area */}
                              <circle cx={coord.x} cy={coord.y} r="18" fill="transparent" />

                              {/* Subtle Golden Node Dot */}
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
                              {/* 1. Pulsing Radiant Wave Beacons */}
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

                              {/* 2. Precision Crosshair Reticle Spikes */}
                              <line x1={coord.x - 16} y1={coord.y} x2={coord.x - 7} y2={coord.y} stroke="#FFD700" strokeWidth="2" />
                              <line x1={coord.x + 7} y1={coord.y} x2={coord.x + 16} y2={coord.y} stroke="#FFD700" strokeWidth="2" />
                              <line x1={coord.x} y1={coord.y - 16} x2={coord.x} y2={coord.y - 7} stroke="#FFD700" strokeWidth="2" />
                              <line x1={coord.x} y1={coord.y + 7} x2={coord.x} y2={coord.y + 16} stroke="#FFD700" strokeWidth="2" />

                              {/* 3. Core Radiant Jewel */}
                              <circle
                                cx={coord.x}
                                cy={coord.y}
                                r="6"
                                fill="#FFFFFF"
                                stroke="#FF9933"
                                strokeWidth="2.2"
                                className="drop-shadow-[0_0_12px_#FFFFFF]"
                              />

                              {/* 4. Connecting Guideline to Floating Card */}
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

                              {/* 5. Floating Sacred Badge Card */}
                              <g
                                transform={`translate(${coord.cardX}, ${coord.cardY})`}
                                className="drop-shadow-[0_8px_24px_rgba(0,0,0,0.95)]"
                              >
                                {/* Card Background */}
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

                                {/* Header Pill */}
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

                                {/* Faculty / Nadi Role */}
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

                                {/* Avarana Context / Significance */}
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

                                {/* Close / Dismiss button */}
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
                /* Respectful Awaiting Asset Placeholder */
                <div className="w-full max-w-lg aspect-square rounded-3xl border-2 border-dashed border-[#D4AF37]/40 bg-[#141210]/60 p-8 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center">
                    <Compass className="w-8 h-8 text-[#D4AF37] animate-pulse" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg font-serif font-bold text-[#FFF9F2]">
                      {currentYantra.nameSanskrit}
                    </h3>
                    <p className="text-xs text-[#D4AF37] font-mono">
                      Awaiting Authentic Shastric Asset (.SVG / .PNG)
                    </p>
                    <p className="text-xs text-[#A0988A] max-w-sm pt-1">
                      गलत procedural geometry हटा दी गई है। आप अपना प्रामाणिक SVG/PNG अपलोड कर सकते हैं।
                    </p>
                  </div>

                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    accept=".svg,image/png,image/jpeg,image/webp"
                    className="hidden"
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="px-5 py-2.5 rounded-xl bg-linear-to-r from-[#B38226] to-[#D9531E] text-white font-bold text-xs shadow-md hover:brightness-105 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Upload className="w-4 h-4" />
                    <span>Upload Authentic {currentYantra.nameEnglish}</span>
                  </button>
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
                      const avData = SRI_YANTRA_VECTOR_DISSECTIONS[avIdx];
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

            {/* Right Column: Dedicated Live Shastric Avarana Inspector HUD Panel */}
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
                        {activeDisplayAvarana.yoginiClass.split('(')[0]}
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
                      <span className="text-[#8C2300] font-bold">{currentYantra.jyotish.malaType.split('(')[0]}</span>
                    </div>
                    <p className="text-xs font-serif font-bold text-[#0F0C08] break-words">
                      {currentYantra.jyotish.beejMantra.slice(0, 75)}...
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

          </div>

          {/* Multidimensional Knowledge Tabs: Shastric, Astrological & Upasana */}
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
