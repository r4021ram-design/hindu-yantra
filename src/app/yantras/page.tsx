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
  Play, Pause, SkipBack, SkipForward, Eye, EyeOff
} from 'lucide-react';

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
  const [selectedTheme, setSelectedTheme] = useState<string>('traditional_shastric');
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
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
    <div className="min-h-screen bg-[#0A0908] text-[#FFF9F2] font-sans pb-20 space-y-8">
      {/* Top Banner */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 p-6 rounded-[28px] bg-[#141210] border border-[#D4AF37]/30 shadow-xl gold-glow">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sacred Shastric Yantra Platform</span>
            <span>•</span>
            <span className="text-[#FF9933]">{currentYantra.tradition}</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-serif font-black text-[#FFF9F2] flex items-center gap-3">
            <span>{currentYantra.nameSanskrit}</span>
            <span className="text-sm font-sans font-medium text-[#C5BDB0]">({currentYantra.nameEnglish})</span>
          </h1>
          <p className="text-xs text-[#A0988A] max-w-2xl">{currentYantra.subTitle}</p>
        </div>

        {/* Canonical Shastric Badge */}
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 rounded-xl bg-[#1A1612] border border-[#D4AF37]/30 text-xs font-mono text-[#D4AF37] flex items-center gap-2 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>शास्त्रीय प्रामाणिक स्वरूप</span>
          </div>
        </div>
      </div>

      {/* Main Studio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Yantra Catalog Sidebar */}
        <aside className="lg:col-span-3 bg-[#141210] border border-[#2A241E] rounded-3xl p-5 space-y-4 h-[calc(100vh-140px)] overflow-y-auto no-scrollbar shadow-lg">
          <div className="space-y-1">
            <h2 className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>Sacred Yantra Library</span>
            </h2>
            <p className="text-[11px] text-[#8A8070]">Authentic Shastric Yantra Registry</p>
          </div>

          <div className="relative">
            <Search className="absolute left-3.5 top-3 w-3.5 h-3.5 text-[#8A8070]" />
            <input
              type="text"
              placeholder="Search Yantra or Deity..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-[#1A1612] border border-[#2A241E] focus:border-[#D4AF37] rounded-xl pl-9 pr-3 py-2 text-xs text-[#FFF9F2] placeholder-[#666055] focus:outline-none transition-all"
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
                      ? 'bg-linear-to-r from-[#D4AF37]/20 via-[#FF9933]/10 to-transparent border-[#D4AF37] shadow-md'
                      : 'bg-[#181512] border-[#241F1A] hover:bg-[#201C18] hover:border-[#D4AF37]/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-serif font-bold ${isSelected ? 'text-[#FF9933]' : 'text-[#FFF9F2]'}`}>
                      {y.nameSanskrit}
                    </span>
                    <div className="flex items-center gap-1">
                      {hasAsset && (
                        <span className="w-2 h-2 rounded-full bg-emerald-500" title="Authentic Asset Loaded" />
                      )}
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />}
                    </div>
                  </div>
                  <span className="text-[11px] text-[#A0988A] truncate">{y.nameEnglish}</span>
                  <span className="text-[10px] font-mono text-[#D4AF37]/80">{y.presidingDeity}</span>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Center / Right: Yantra Display & Multidimensional Knowledge Base */}
        <main className="lg:col-span-9 space-y-6">
          
          {/* Main 2-Column Workspace: Sacred Yantra Canvas (Left 7 Cols) + Dedicated Side Shastric HUD (Right 5 Cols) */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
            
            {/* Left Column: Sacred Yantra Canvas Stage */}
            <div
              className="xl:col-span-7 relative rounded-[32px] p-5 sm:p-7 border border-[#D4AF37]/30 flex flex-col items-center justify-center shadow-2xl gold-glow transition-colors"
              style={{ background: currentThemeObj.background }}
            >
              {/* Top Meta Bar & Altar Enhancement Toolbar */}
              <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30">
                    {currentYantra.nameEnglish}
                  </span>
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#FF9933]/15 text-[#FF9933] border border-[#FF9933]/30">
                    {currentYantra.presidingDeity}
                  </span>
                </div>

                {/* 2D/3D Switcher, Construction Mode & Zoom */}
                <div className="flex items-center gap-2 flex-wrap">
                  {/* 2D vs 3D Dimension Switcher (Sri Yantra specific) */}
                  {selectedYantraId === 'sri_yantra' && (
                    <div className="flex items-center gap-1 bg-[#1A1612] p-1 rounded-xl border border-[#3A3228] text-xs font-mono">
                      <button
                        onClick={() => { setDisplayDimension('2d_yantra'); setIsConstructionMode(false); }}
                        className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                          displayDimension === '2d_yantra' && !isConstructionMode
                            ? 'bg-linear-to-r from-[#D4AF37] to-[#FF9933] text-[#0A0908] shadow-md'
                            : 'text-[#C5BDB0] hover:text-[#FFF9F2]'
                        }`}
                      >
                        📐 2D यन्त्र
                      </button>
                      <button
                        onClick={() => { setDisplayDimension('3d_meru'); setIsConstructionMode(false); }}
                        className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                          displayDimension === '3d_meru' && !isConstructionMode
                            ? 'bg-linear-to-r from-[#D4AF37] to-[#FF9933] text-[#0A0908] shadow-md'
                            : 'text-[#C5BDB0] hover:text-[#FFF9F2]'
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
                            ? 'bg-linear-to-r from-amber-400 to-yellow-500 text-[#0A0908] shadow-md'
                            : 'text-[#FFD700] hover:bg-[#2A241E]'
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
                            ? 'bg-linear-to-r from-amber-400 to-yellow-500 text-[#0A0908] shadow-md'
                            : 'text-[#FFD700] hover:bg-[#2A241E]'
                        }`}
                        title="शुद्ध ज्यामितीय विच्छेदन (Pure Geometric Vector Dissection)"
                      >
                        🔬 शुद्ध घटक विच्छेदन
                      </button>
                    </div>
                  )}

                  {/* Zoom Control */}
                  <div className="flex items-center bg-[#1A1612] p-1 rounded-xl border border-[#3A3228] text-xs font-mono">
                    <button
                      onClick={() => setIsZoomed(!isZoomed)}
                      className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer font-bold ${
                        isZoomed
                          ? 'bg-[#FF9933] text-[#0A0908] shadow'
                          : 'text-[#C5BDB0] hover:text-[#FF9933]'
                      }`}
                      title={isZoomed ? "Reset Zoom" : "Zoom into Center Triangles & Bindu"}
                    >
                      {isZoomed ? '🔍 1x' : '🔍 +ज़ूम'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Display Area with Consecrated Sacred Frame */}
              {currentAsset ? (
                <div
                  className={`relative w-full max-w-lg aspect-square flex items-center justify-center p-3 sm:p-5 transition-all duration-300 rounded-[28px] border-2 border-[#D4AF37]/70 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(212,175,55,0.25)] bg-[#100D0A] overflow-hidden cursor-crosshair select-none group ${
                    canvasAltarMode === 'gold_glow'
                      ? 'shadow-[0_0_50px_rgba(212,175,55,0.35)]'
                      : canvasAltarMode === 'dark_shrine'
                      ? 'shadow-[0_0_50px_rgba(0,0,0,0.95)]'
                      : ''
                  }`}
                  onMouseMove={handleYantraMouseMove}
                  onMouseLeave={handleYantraMouseLeave}
                  onClick={handleYantraCanvasClick}
                >
                  {/* Sacred Corner Filigree Accents */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37] rounded-tl-lg pointer-events-none z-20" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37] rounded-tr-lg pointer-events-none z-20" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37] rounded-bl-lg pointer-events-none z-20" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37] rounded-br-lg pointer-events-none z-20" />

                  {/* Ambient Altar Glow Backdrop */}
                  {canvasAltarMode === 'gold_glow' && (
                    <div className="absolute inset-0 bg-radial from-[#D4AF37]/20 via-transparent to-transparent pointer-events-none z-0" />
                  )}

                  {/* Render 3D Mahameru, Pure Vector Dissection, Construction Assembly, or Full 2D Sacred Geometry */}
                  {displayDimension === '3d_meru' && selectedYantraId === 'sri_yantra' ? (
                    <div className="relative w-full h-full flex flex-col items-center justify-center p-2">
                      <img
                        src="/yantras/sri_yantra_3d_meru.jpg"
                        alt="श्री महामेरु 3D विग्रह"
                        className="max-w-full max-h-full object-contain rounded-2xl drop-shadow-[0_15px_40px_rgba(0,0,0,0.95)]"
                      />
                      <div className="absolute bottom-2 px-3.5 py-1.5 rounded-xl bg-[#0A0908]/90 backdrop-blur-md border border-[#FFD700]/60 text-center shadow-lg pointer-events-none">
                        <p className="text-xs font-serif font-black text-[#FFD700]">
                          श्री महामेरु विग्रह (Meru Prishta 3D Altar View)
                        </p>
                        <p className="text-[10px] font-mono text-[#E0D8CC]">
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
                        className="w-full h-full flex items-center justify-center drop-shadow-2xl [&_svg]:w-full [&_svg]:h-full transition-all [&_svg]:filter [&_svg]:drop-shadow-[0_0_25px_rgba(255,215,0,0.6)]"
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
                        className="w-full h-full flex items-center justify-center drop-shadow-2xl [&_svg]:w-full [&_svg]:h-full transition-all [&_svg]:filter [&_svg]:drop-shadow-[0_0_25px_rgba(255,215,0,0.5)] [&_svg]:contrast-115 [&_svg]:brightness-105"
                        dangerouslySetInnerHTML={{ __html: constructionVectorSvg }}
                      />
                    </div>
                  ) : (
                    <div className={`relative w-full h-full flex items-center justify-center transition-transform duration-300 ${isZoomed ? 'scale-135' : 'scale-100'}`}>
                      {/* Main Rendered Asset (Pure Vector with no white box, no corner mantras, no bottom text) */}
                      {currentAsset.type === 'svg' ? (
                        <div
                          className="w-full h-full flex items-center justify-center drop-shadow-2xl [&_svg]:w-full [&_svg]:h-full transition-all [&_svg]:filter [&_svg]:drop-shadow-[0_0_25px_rgba(255,215,0,0.5)] [&_svg]:contrast-115 [&_svg]:brightness-105"
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
                          <g className="select-none pointer-events-none drop-shadow-[0_0_5px_rgba(0,0,0,0.95)]">

                            {/* Central Bindu Seed */}
                            <circle cx="500" cy="500" r="14" fill="#FFD700" opacity="0.35" className="animate-pulse" />
                            <text x="500" y="506" textAnchor="middle" fill="#FFF9F2" fontSize="15" fontFamily="serif" fontWeight="900" className="drop-shadow-[0_0_8px_#FFD700]">ह्रीं</text>

                            {/* Central Triangle (Kamakala) 3 Kootas */}
                            <text x="500" y="475" textAnchor="middle" fill="#FFD700" fontSize="9.5" fontFamily="serif" fontWeight="bold">क ए ई ल ह्रीं</text>
                            <text x="458" y="534" textAnchor="middle" fill="#FFD700" fontSize="8.5" fontFamily="serif" fontWeight="bold">ह स क ह ल ह्रीं</text>
                            <text x="542" y="534" textAnchor="middle" fill="#FFD700" fontSize="8.5" fontFamily="serif" fontWeight="bold">स क ल ह्रीं</text>

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
                                  fill="#FFF9F2"
                                  fontSize="11"
                                  fontFamily="serif"
                                  fontWeight="bold"
                                  className="drop-shadow-[0_0_6px_rgba(255,215,0,0.85)]"
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
                                  fill="#FFD700"
                                  fontSize="10"
                                  fontFamily="serif"
                                  fontWeight="bold"
                                  opacity="0.95"
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
                                fill="#FFD700"
                                fillOpacity="0.08"
                                stroke="#FFD700"
                                strokeWidth="1.6"
                                strokeDasharray="3 3"
                                className="animate-pulse"
                              />
                            ) : (
                              <path
                                d={`M 500 ${500 - R2} A ${R2} ${R2} 0 1 0 500 ${500 + R2} A ${R2} ${R2} 0 1 0 500 ${500 - R2} Z M 500 ${500 - R1} A ${R1} ${R1} 0 1 1 500 ${500 + R1} A ${R1} ${R1} 0 1 1 500 ${500 - R1} Z`}
                                fillRule="evenodd"
                                fill="#FFD700"
                                fillOpacity="0.06"
                                stroke="#FFD700"
                                strokeWidth="1.5"
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
                                stroke="#FFD700"
                                strokeWidth="1.5"
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
                              stroke="#FFD700"
                              strokeWidth="2"
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
                    className="px-5 py-2.5 rounded-xl bg-linear-to-r from-[#D4AF37] to-[#FF9933] text-[#0A0908] font-bold text-xs shadow-md hover:brightness-110 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Upload className="w-4 h-4" />
                    <span>Upload Authentic {currentYantra.nameEnglish}</span>
                  </button>
                </div>
              )}
              {/* Pure Geometric Vector Dissection HUD */}
              {displayDimension === 'pure_dissection' && selectedYantraId === 'sri_yantra' && (
                <div className="w-full max-w-lg mt-3 p-4 bg-[#141210] rounded-2xl border border-[#D4AF37]/50 shadow-xl space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#FFD700] uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>९ आवरण शुद्ध ज्यामितीय विच्छेदन</span>
                      </span>
                    </div>

                    <button
                      onClick={() => setShowDissectionWatermark(!showDissectionWatermark)}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                        showDissectionWatermark
                          ? 'bg-[#2A241E] text-[#FFD700] border border-[#D4AF37]/40'
                          : 'bg-[#1A1612] text-[#8A8070] border border-[#2A241E]'
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
                              ? 'bg-linear-to-b from-[#FFD700] to-[#FF9933] text-[#0A0908] font-bold shadow-md scale-105 border-yellow-300'
                              : 'bg-[#1A1612] hover:bg-[#2A241E] text-[#C5BDB0] border-[#3A3228]/50'
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
                      <div className="p-3 rounded-xl bg-[#0D0B09] border border-[#3A3228] space-y-1 text-xs">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="font-serif font-black text-[#FFD700] text-sm">
                              {av.nameSanskrit}
                            </span>
                            <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                              {av.count} घटक
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-[#D4AF37]">
                            आवरण #{av.index}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#E0D8CC] font-mono">{av.chakraTitle} • {av.nameEnglish}</p>
                        <p className="text-[10px] text-[#A0988A] pt-0.5">
                          <strong className="text-[#FFD700]">ज्यामितीय संरचना: </strong>
                          {av.geometryType}
                        </p>
                      </div>
                    );
                  })()}
                </div>
              )}

              {/* Step-by-Step Construction Slider HUD */}
              {isConstructionMode && selectedYantraId === 'sri_yantra' && (
                <div className="w-full max-w-lg mt-3 p-4 bg-[#141210] rounded-2xl border border-[#D4AF37]/50 shadow-xl space-y-3">
                  {/* Controls: Play/Pause, Step Navigation, Direction & Mode Toggles */}
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                          isAutoPlaying
                            ? 'bg-amber-500 text-[#0A0908] shadow-md animate-pulse'
                            : 'bg-[#1E1A16] hover:bg-[#2A241E] text-[#FFD700] border border-[#D4AF37]/30'
                        }`}
                        title={isAutoPlaying ? "रोकें (Pause Auto-Play)" : "स्वतः निर्माण चालू करें (Auto-Play Assembly)"}
                      >
                        {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                        <span>{isAutoPlaying ? 'विराम (Pause)' : 'ऑटो-प्ले (Play)'}</span>
                      </button>

                      <button
                        onClick={() => setConstructionStep(prev => Math.max(1, prev - 1))}
                        disabled={constructionStep <= 1}
                        className="p-1.5 rounded-lg bg-[#1E1A16] hover:bg-[#2A241E] disabled:opacity-30 border border-[#2A241E] text-[#FFF9F2] transition-all cursor-pointer"
                        title="पिछला चरण"
                      >
                        <SkipBack className="w-3.5 h-3.5" />
                      </button>

                      <span className="font-mono text-xs font-bold text-[#FFD700] px-1">
                        चरण {constructionStep} / 9
                      </span>

                      <button
                        onClick={() => setConstructionStep(prev => Math.min(9, prev + 1))}
                        disabled={constructionStep >= 9}
                        className="p-1.5 rounded-lg bg-[#1E1A16] hover:bg-[#2A241E] disabled:opacity-30 border border-[#2A241E] text-[#FFF9F2] transition-all cursor-pointer"
                        title="अगला चरण"
                      >
                        <SkipForward className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Mode Switches */}
                    <div className="flex items-center gap-1.5 text-[11px] font-mono">
                      <button
                        onClick={() => setConstructionDirection(constructionDirection === 'srishti' ? 'samhara' : 'srishti')}
                        className="px-2.5 py-1 rounded-lg bg-[#1E1A16] hover:bg-[#2A241E] border border-[#D4AF37]/30 text-[#C5BDB0] hover:text-[#FFF9F2] transition-all cursor-pointer"
                        title="निर्माण क्रम बदलें"
                      >
                        {constructionDirection === 'srishti' ? '🔄 सृष्टि क्रम' : '🔄 संहार क्रम'}
                      </button>

                      <button
                        onClick={() => setConstructionDisplayMode(constructionDisplayMode === 'cumulative' ? 'isolated' : 'cumulative')}
                        className="px-2.5 py-1 rounded-lg bg-[#1E1A16] hover:bg-[#2A241E] border border-[#D4AF37]/30 text-[#C5BDB0] hover:text-[#FFF9F2] transition-all cursor-pointer"
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
                            ? 'bg-linear-to-b from-[#FFD700] to-[#FF9933] text-[#0A0908] font-bold shadow-md scale-105'
                            : constructionStep > st.step && constructionDisplayMode === 'cumulative'
                            ? 'bg-[#2A241E] text-[#D4AF37] border border-[#D4AF37]/30'
                            : 'bg-[#1A1612] text-[#8A8070] hover:text-[#C5BDB0] border border-transparent'
                        }`}
                        title={`${st.name} (${st.sub})`}
                      >
                        <span className="text-[11px] font-bold leading-none">{st.step}</span>
                        <span className="text-[8px] truncate max-w-full font-serif hidden sm:inline pt-0.5">{st.name.slice(0, 4)}</span>
                      </button>
                    ))}
                  </div>

                  {/* Active Step Shastric Card */}
                  <div className="p-2.5 rounded-xl bg-[#0D0B09] border border-[#3A3228] flex items-center justify-between text-xs">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-serif font-black text-[#FFD700] text-sm">
                          {activeStepData.name}
                        </span>
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-[#FF9933]/15 text-[#FF9933] border border-[#FF9933]/30">
                          {activeStepData.sub}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#A0988A]">{activeStepData.desc}</p>
                    </div>

                    <div className="text-right shrink-0 pl-3">
                      <span className="text-[10px] font-mono text-[#D4AF37] block">आवरण {activeStepData.avaranaIdx}</span>
                      <span className="text-[9px] text-[#7A7060]">दाईं ओर विवरण ➔</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Clean Bottom Guidance Bar - Unobstructed Canvas */}
              <div className="flex items-center justify-between w-full max-w-lg mt-3 text-xs text-[#A0988A] px-3.5 py-2.5 bg-[#141210]/80 rounded-2xl border border-[#2A241E] shadow-md">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span>यन्त्र पर कर्सर ले जाएँ — सम्पूर्ण दल व त्रिकोण का विवरण केवल दाईं ओर देखें</span>
                </span>
                {pinnedAvaranaIndex && (
                  <button
                    onClick={() => setPinnedAvaranaIndex(null)}
                    className="text-[#FF9933] hover:text-[#FFD700] font-mono text-[11px] underline cursor-pointer shrink-0 ml-2"
                  >
                    अनलॉक (Reset)
                  </button>
                )}
              </div>
            </div>

            {/* Right Column: Dedicated Live Shastric Avarana Inspector HUD Panel */}
            <div className="xl:col-span-5 bg-[#141210] border-2 border-[#D4AF37]/50 rounded-[32px] p-5 sm:p-6 shadow-2xl gold-glow space-y-4">
              
              {/* Header with Live Status & Pin Toggle */}
              <div className="flex items-center justify-between border-b border-[#2A241E] pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-xs text-[#D4AF37]">
                    🕉️
                  </div>
                  <div>
                    <h3 className="text-xs font-mono font-bold text-[#FFD700] uppercase tracking-wider">
                      नवावरण शास्त्रीय विश्लेषक
                    </h3>
                    <p className="text-[10px] text-[#8A8070]">Live Shastric Geometry & Deity HUD</p>
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="flex items-center gap-1.5">
                  {pinnedAvaranaIndex ? (
                    <button
                      onClick={() => setPinnedAvaranaIndex(null)}
                      className="px-2.5 py-1 rounded-full bg-[#FF9933]/20 border border-[#FF9933]/50 text-[#FF9933] text-[10px] font-mono font-bold flex items-center gap-1 hover:bg-[#FF9933]/30 transition-all cursor-pointer"
                      title="Click to unlock live tracking"
                    >
                      <span>📌 आवरण {pinnedAvaranaIndex} लॉक</span>
                      <RotateCcw className="w-2.5 h-2.5" />
                    </button>
                  ) : hoveredAvarana ? (
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[10px] font-mono font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      <span>लाइव ट्रैकिंग</span>
                    </span>
                  ) : (
                    <span className="px-2.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-mono">
                      ✨ केन्द्र बिन्दु
                    </span>
                  )}
                </div>
              </div>

              {/* Quick Avarana Strip Selector (1 to N) */}
              {currentYantra.avaranas && currentYantra.avaranas.length > 0 && (
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#8A8070]">
                    <span>आवरण चयन (Quick Selector):</span>
                    <span>{currentYantra.avaranas.length} आवरण</span>
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
                              ? 'bg-linear-to-r from-[#D4AF37] to-[#FF9933] text-[#0A0908] shadow-md ring-1 ring-white/40 scale-105'
                              : 'bg-[#1A1612] hover:bg-[#241F1A] text-[#C5BDB0] border border-[#241F1A]'
                          }`}
                        >
                          <span>{av.index}</span>
                          <span className="text-[9px] truncate max-w-[50px] opacity-80">{av.nameSanskrit.slice(0, 4)}..</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Active Avarana Detail Card */}
              {activeDisplayAvarana && (
                <div className="rounded-2xl bg-[#0D0B09]/80 border border-[#D4AF37]/40 p-4 space-y-3.5">
                  
                  {/* Title & Placement */}
                  <div className="space-y-1 border-b border-[#241F1A] pb-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40 font-bold">
                        आवरण {activeDisplayAvarana.index} of {(currentYantra.avaranas || []).length}
                      </span>
                      <span className="text-[10px] font-mono text-[#FF9933] font-bold truncate">
                        {activeDisplayAvarana.nameEnglish}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-serif font-black text-[#FFD700] pt-1">
                      {activeDisplayAvarana.nameSanskrit}
                    </h4>

                    <p className="text-[11px] font-mono text-[#E0D8CC] flex items-center gap-1">
                      <span className="text-[#FF9933]">📍 स्थान:</span>
                      <span className="font-semibold">{activeDisplayAvarana.spotTitle || activeDisplayAvarana.chakraTitle}</span>
                    </p>
                  </div>

                  {/* 2x2 Key Attributes Grid */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {/* Presiding Deity */}
                    <div className="p-2.5 rounded-xl bg-[#141210] border border-[#2A241E] space-y-0.5">
                      <span className="text-[10px] font-mono text-[#8A8070] flex items-center gap-1">
                        <span>👑</span>
                        <span>अधिष्ठात्री देवी:</span>
                      </span>
                      <p className="text-xs font-serif font-bold text-[#FFF9F2] truncate">
                        {activeDisplayAvarana.presidingDeity}
                      </p>
                    </div>

                    {/* Yogini Class */}
                    <div className="p-2.5 rounded-xl bg-[#141210] border border-[#2A241E] space-y-0.5">
                      <span className="text-[10px] font-mono text-[#8A8070] flex items-center gap-1">
                        <span>🧘‍♀️</span>
                        <span>योगिनी सम्प्रदाय:</span>
                      </span>
                      <p className="text-xs font-mono font-semibold text-[#D4AF37] truncate">
                        {activeDisplayAvarana.yoginiClass.split('(')[0]}
                      </p>
                    </div>

                    {/* Mudra Shakti */}
                    <div className="p-2.5 rounded-xl bg-[#141210] border border-[#2A241E] space-y-0.5">
                      <span className="text-[10px] font-mono text-[#8A8070] flex items-center gap-1">
                        <span>✋</span>
                        <span>मुद्रा शक्ति:</span>
                      </span>
                      <p className="text-xs font-serif font-semibold text-[#FF9933] truncate">
                        {activeDisplayAvarana.mudraShakti}
                      </p>
                    </div>

                    {/* Sacred Geometry */}
                    <div className="p-2.5 rounded-xl bg-[#141210] border border-[#2A241E] space-y-0.5">
                      <span className="text-[10px] font-mono text-[#8A8070] flex items-center gap-1">
                        <span>📐</span>
                        <span>पवित्र ज्यामिति:</span>
                      </span>
                      <p className="text-xs font-mono text-[#C5BDB0] truncate">
                        {activeDisplayAvarana.geometryType}
                      </p>
                    </div>
                  </div>

                  {/* Significance & Spiritual Phala */}
                  <div className="p-3 rounded-xl bg-linear-to-br from-[#1E1A16] to-[#141210] border border-[#D4AF37]/30 space-y-1">
                    <p className="text-[10px] font-mono text-[#D4AF37] font-bold flex items-center gap-1">
                      <span>📜 शास्त्रीय माहात्म्य व फल:</span>
                    </p>
                    <p className="text-xs text-[#E0D8CC] leading-relaxed italic">
                      "{activeDisplayAvarana.significance}"
                    </p>
                  </div>

                  {/* Detailed Constituents: All Petals & Triangles ("mujhe sabhi trikon and sabhi dal vagaire ki info bhi chaiye") */}
                  {currentAvaranaFullDetail?.constituents && currentAvaranaFullDetail.constituents.length > 0 && (
                    <div className="p-3.5 rounded-2xl bg-[#090807] border-2 border-[#D4AF37]/50 space-y-2.5 shadow-inner">
                      <div className="flex items-center justify-between border-b border-[#241F1A] pb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm">🌸</span>
                          <div>
                            <h5 className="text-xs font-serif font-black text-[#FFD700]">
                              {currentAvaranaFullDetail.constituentsLabel || `सकल दल एवं त्रिकोण (${currentAvaranaFullDetail.constituents.length} देवियाँ)`}
                            </h5>
                            <p className="text-[10px] text-[#A0988A]">प्रत्येक दल व त्रिकोण की अधिष्ठात्री शक्ति एवं फल</p>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#FF9933]/20 text-[#FF9933] border border-[#FF9933]/30 font-bold shrink-0">
                          {currentAvaranaFullDetail.constituents.length} शक्तियाँ
                        </span>
                      </div>

                      {/* Interactive Scrollable Grid of All Petals / Triangles */}
                      <div className="max-h-[300px] overflow-y-auto pr-1 space-y-1.5">
                        {currentAvaranaFullDetail.constituents.map((item, idx) => {
                          const isSelected = selectedConstituentId === item.id;
                          return (
                            <div
                              key={item.id}
                              onClick={() => setSelectedConstituentId(isSelected ? null : item.id)}
                              className={`p-2 rounded-xl border transition-all cursor-pointer text-left ${
                                isSelected
                                  ? 'bg-[#1C1610] border-[#FFD700] ring-1 ring-[#FFD700]/60 shadow-md'
                                  : 'bg-[#120F0C] hover:bg-[#181410] border-[#221C16]'
                              }`}
                            >
                              <div className="flex items-center justify-between gap-1.5">
                                <div className="flex items-center gap-2">
                                  <span className="w-5 h-5 rounded-md bg-[#241F1A] border border-[#3A3228] text-[10px] font-mono text-[#D4AF37] flex items-center justify-center font-bold shrink-0">
                                    {typeof item.id === 'number' ? item.id : idx + 1}
                                  </span>
                                  <span className="text-xs font-serif font-bold text-[#FFF9F2]">
                                    {item.nameSanskrit}
                                  </span>
                                </div>
                                <span className="text-[10px] font-mono text-[#FF9933] bg-[#FF9933]/10 px-2 py-0.5 rounded-md border border-[#FF9933]/25 truncate max-w-[150px]">
                                  {item.facultyOrNadi}
                                </span>
                              </div>

                              <p className="text-[11px] text-[#C5BDB0] pt-1 pl-7 leading-relaxed">
                                {item.significance}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Mantra & Interactive Japa Integration */}
                  <div className="p-3 rounded-xl bg-[#100D0A] border border-[#241F1A] space-y-2">
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="text-[#8A8070]">संबद्ध मन्त्र स्पन्दन:</span>
                      <span className="text-[#D4AF37]">{currentYantra.jyotish.malaType.split('(')[0]}</span>
                    </div>
                    <p className="text-xs font-serif font-bold text-[#FFD700] break-words">
                      {currentYantra.jyotish.beejMantra.slice(0, 75)}...
                    </p>
                    <div className="flex items-center justify-between pt-1">
                      <button
                        onClick={() => setJapaCount(c => c + 1)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-linear-to-r from-[#D4AF37] to-[#FF9933] text-[#0A0908] font-bold text-xs shadow hover:brightness-110 transition-all cursor-pointer"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>+१ जाप समर्पित करें ({japaCount})</span>
                      </button>
                      {japaCount > 0 && (
                        <button
                          onClick={() => setJapaCount(0)}
                          className="text-[10px] font-mono text-[#8A8070] hover:text-red-400 cursor-pointer"
                        >
                          रीसेट
                        </button>
                      )}
                    </div>
                  </div>

                </div>
              )}

              {/* Philosophical Footnote */}
              <p className="text-[11px] text-[#8A8070] italic text-center pt-1">
                {currentYantra.corePhilosophy}
              </p>
            </div>

          </div>

          {/* Multidimensional Knowledge Tabs: Shastric, Astrological & Upasana */}
          <div className="bg-[#141210] border border-[#2A241E] rounded-3xl p-6 lg:p-8 space-y-6 shadow-xl">
            {/* Tabs Header */}
            <div className="flex items-center gap-2 border-b border-[#2A241E] pb-4 flex-wrap">
              <button
                onClick={() => setActiveTab('geometry')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === 'geometry'
                    ? 'bg-[#D4AF37] text-[#0A0908] shadow-md'
                    : 'text-[#C5BDB0] hover:text-[#FFF9F2] hover:bg-[#1E1A16]'
                }`}
              >
                <Compass className="w-4 h-4" />
                <span>९ आवरण व ज्यामिति (9 Avaranas)</span>
              </button>

              <button
                onClick={() => setActiveTab('shastric')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === 'shastric'
                    ? 'bg-[#D4AF37] text-[#0A0908] shadow-md'
                    : 'text-[#C5BDB0] hover:text-[#FFF9F2] hover:bg-[#1E1A16]'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>शास्त्रीय प्रमाण व स्तोत्र (Scriptural Citations)</span>
              </button>

              <button
                onClick={() => setActiveTab('jyotish')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === 'jyotish'
                    ? 'bg-[#D4AF37] text-[#0A0908] shadow-md'
                    : 'text-[#C5BDB0] hover:text-[#FFF9F2] hover:bg-[#1E1A16]'
                }`}
              >
                <Star className="w-4 h-4" />
                <span>ज्योतिष, ग्रह दोष व उपाय (Astrological Remedies)</span>
              </button>

              <button
                onClick={() => setActiveTab('upasana')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === 'upasana'
                    ? 'bg-[#D4AF37] text-[#0A0908] shadow-md'
                    : 'text-[#C5BDB0] hover:text-[#FFF9F2] hover:bg-[#1E1A16]'
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
                  <h3 className="text-lg font-serif font-bold text-[#FFF9F2] flex items-center gap-2">
                    <span className="text-[#D4AF37]">नवावरण रहस्य:</span>
                    <span>{currentYantra.nameSanskrit} के आवरण व ज्यामितीय विन्यास</span>
                  </h3>
                  <p className="text-xs text-[#A0988A] leading-relaxed">
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
                            ? 'bg-linear-to-br from-[#D4AF37]/25 via-[#1E1A16] to-[#141210] border-[#D4AF37] ring-2 ring-[#D4AF37]/60 shadow-[0_0_25px_rgba(212,175,55,0.3)] scale-[1.02]'
                            : 'bg-[#1A1612] border-[#2A241E] hover:border-[#D4AF37]/40'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-bold font-mono px-2 py-0.5 rounded-md bg-[#D4AF37]/20 text-[#D4AF37]">
                              आवरण {av.index}
                            </span>
                            {isHovered && (
                              <span className="text-[10px] font-mono text-[#FF9933] font-semibold animate-pulse">
                                ● सक्रिय कर्सर स्थान
                              </span>
                            )}
                          </div>
                          <span className="text-[11px] font-mono text-[#FF9933] font-bold">{av.presidingDeity}</span>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-[#FFF9F2]">{av.nameSanskrit}</h4>
                          <p className="text-xs text-[#D4AF37] font-medium">{av.chakraTitle}</p>
                        </div>
                        <p className="text-xs text-[#C5BDB0] leading-relaxed">{av.significance}</p>
                        <div className="pt-2 border-t border-[#241F1A] flex items-center justify-between text-[10px] font-mono text-[#8A8070]">
                          <span>मुद्रा: <strong className="text-[#E0D8CC]">{av.mudraShakti}</strong></span>
                          <span>योगिनी: <strong className="text-[#E0D8CC]">{av.yoginiClass}</strong></span>
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
                  <h3 className="text-lg font-serif font-bold text-[#FFF9F2] flex items-center gap-2">
                    <span className="text-[#D4AF37]">प्रमाणिक ग्रन्थ साक्ष्य:</span>
                    <span>शास्त्रीय स्तोत्र व तन्त्र संहिताएं</span>
                  </h3>
                  <p className="text-xs text-[#A0988A]">
                    हमारे प्राचीन आचार्यों और ऋषियों द्वारा विरचित मूल ग्रन्थों से अक्षुण्ण श्लोक एवं उनका गूढ़ार्थ।
                  </p>
                </div>

                <div className="space-y-4">
                  {currentYantra.citations.map((cite, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-[#1A1612] border border-[#2A241E] space-y-4"
                    >
                      <div className="flex items-center justify-between border-b border-[#2A241E] pb-3">
                        <span className="text-xs font-mono font-bold text-[#FF9933]">
                          {cite.sourceScripture}
                        </span>
                        <span className="text-xs font-mono text-[#8A8070]">{cite.chapterOrVerse}</span>
                      </div>

                      <div className="p-4 rounded-xl bg-[#0F0D0A] border border-[#2A241E] text-center font-serif text-sm lg:text-base text-[#D4AF37] leading-relaxed whitespace-pre-line">
                        {cite.sanskritSloka}
                      </div>

                      <div className="space-y-2 text-xs leading-relaxed">
                        <p className="text-[#FFF9F2]">
                          <strong className="text-[#FF9933]">हिन्दी भावार्थ:</strong> {cite.hindiMeaning}
                        </p>
                        <p className="text-[#A0988A]">
                          <strong className="text-[#D4AF37]">English Translation:</strong> {cite.englishMeaning}
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
                  <h3 className="text-lg font-serif font-bold text-[#FFF9F2] flex items-center gap-2">
                    <span className="text-[#D4AF37]">ज्योतिषीय फलश्रुति:</span>
                    <span>ग्रह शांति, दोष निवारण व जीवनोपयोगी अनुभूत उपाय</span>
                  </h3>
                  <p className="text-xs text-[#A0988A]">
                    वैदिक ज्योतिष के अनुसार ग्रहीय प्रतिकूलता को अनुकूलता में परिवर्तित करने का दिव्य साधन।
                  </p>
                </div>

                {/* Key Jyotish Metas */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#1A1612] border border-[#2A241E]">
                    <span className="text-[10px] font-mono text-[#8A8070] uppercase">Ruling Planet (स्वामी ग्रह)</span>
                    <p className="font-bold text-[#FF9933] mt-0.5">{currentYantra.jyotish.rulingPlanet}</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#1A1612] border border-[#2A241E]">
                    <span className="text-[10px] font-mono text-[#8A8070] uppercase">Favorable Day (शुभ वार)</span>
                    <p className="font-bold text-[#D4AF37] mt-0.5">{currentYantra.jyotish.favorableDay}</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#1A1612] border border-[#2A241E]">
                    <span className="text-[10px] font-mono text-[#8A8070] uppercase">Direction (शुभ दिशा)</span>
                    <p className="font-bold text-[#FFF9F2] mt-0.5">{currentYantra.jyotish.wearOrInstallDirection}</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#1A1612] border border-[#2A241E]">
                    <span className="text-[10px] font-mono text-[#8A8070] uppercase">Metal (शुभ धातु)</span>
                    <p className="font-bold text-[#D4AF37] mt-0.5">{currentYantra.jyotish.metalPreference}</p>
                  </div>
                </div>

                {/* Specific Dosha Remedies */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-wider">
                    प्रमुख कुण्डली दोष निवारण (Specific Astrological Remedies)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentYantra.jyotish.doshaRemedies.map((dr, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-[#1A1612] border border-[#2A241E] space-y-2"
                      >
                        <h5 className="text-sm font-bold text-[#FF9933]">{dr.doshaName}</h5>
                        <p className="text-xs text-[#C5BDB0]">{dr.description}</p>
                        <div className="p-2.5 rounded-xl bg-[#120F0D] border border-[#241F1A] text-xs text-[#D4AF37]">
                          <strong>उपाय प्रक्रिया:</strong> {dr.reliefMechanism}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Practical Life Problem Remedies */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-wider">
                    व्यावहारिक समस्या व समाधान (Practical Life Solutions)
                  </h4>
                  <div className="space-y-3">
                    {currentYantra.practicalRemedies.map((pr, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-[#1A1612] border border-[#2A241E] flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs"
                      >
                        <div className="space-y-1 max-w-xl">
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-[#FF9933]/20 text-[#FF9933]">
                            {pr.category}
                          </span>
                          <p className="text-[#FFF9F2] font-semibold">{pr.problem}</p>
                        </div>
                        <div className="p-3 rounded-xl bg-[#0F0D0A] border border-[#241F1A] text-[#D4AF37] md:max-w-md">
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
                  <h3 className="text-lg font-serif font-bold text-[#FFF9F2] flex items-center gap-2">
                    <span className="text-[#D4AF37]">उपासना व प्राण-प्रतिष्ठा:</span>
                    <span>विधि, जप अनुष्ठान व नित्य पूजा विधान</span>
                  </h3>
                  <p className="text-xs text-[#A0988A]">
                    यन्त्र केवल धातु या चित्र नहीं, जाग्रत देव विग्रह है। शुद्ध विधि से की गई प्रतिष्ठा शत-प्रतिशत फलदायी होती है।
                  </p>
                </div>

                {/* Beej Mantra & Gayatri Display */}
                <div className="p-6 rounded-2xl bg-[#1A1612] border border-[#D4AF37]/30 space-y-4">
                  <div>
                    <span className="text-xs font-mono text-[#8A8070] uppercase">मूल बीज मन्त्र (Core Beej Mantra)</span>
                    <p className="text-base lg:text-lg font-serif font-bold text-[#FF9933] mt-1 tracking-wide leading-relaxed">
                      {currentYantra.jyotish.beejMantra}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#241F1A]">
                    <span className="text-xs font-mono text-[#8A8070] uppercase">गायत्री मन्त्र (Gayatri Mantra)</span>
                    <p className="text-sm font-serif font-bold text-[#D4AF37] mt-1">
                      {currentYantra.jyotish.gayatriMantra}
                    </p>
                  </div>
                </div>

                {/* Interactive 108 Japa Counter */}
                <div className="p-6 rounded-2xl bg-linear-to-r from-[#1E1712] via-[#141210] to-[#0A0908] border border-[#FF9933]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold text-[#FF9933] uppercase">Mantra Japa Counter (१०८ माला गणना)</span>
                    <h4 className="text-xl font-serif font-bold text-[#FFF9F2]">दैनिक मंत्र साधना</h4>
                    <p className="text-xs text-[#A0988A]">माला: {currentYantra.jyotish.malaType}</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <span className="text-4xl font-mono font-black text-[#D4AF37]">{japaCount}</span>
                      <span className="text-xs text-[#8A8070] block">/ 108</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setJapaCount(prev => (prev < 108 ? prev + 1 : 108))}
                        className="px-5 py-3 rounded-2xl bg-linear-to-r from-[#D4AF37] to-[#FF9933] text-[#0A0908] font-bold text-sm shadow-lg hover:brightness-110 cursor-pointer transition-all"
                      >
                        + 1 जप
                      </button>
                      <button
                        onClick={() => setJapaCount(0)}
                        className="p-3 rounded-2xl bg-[#1E1A16] hover:bg-[#2A241E] border border-[#D4AF37]/30 text-[#A0988A] hover:text-[#FFF9F2] cursor-pointer"
                        title="Reset Counter"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Prana Pratishtha Step-by-Step */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-wider">
                    प्रतिष्ठा व नित्य पूजा के ५ चरण (Sthapana Vidhi Steps)
                  </h4>
                  <div className="space-y-2">
                    {currentYantra.jyotish.pratishthaVidhiSummary.map((step, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-[#1A1612] border border-[#241F1A] text-xs text-[#FFF9F2] flex items-center gap-3"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
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
    <Suspense fallback={<div className="min-h-screen bg-[#0A0908] flex items-center justify-center text-[#D4AF37]">लोड हो रहा है...</div>}>
      <YantraExplorerInner />
    </Suspense>
  );
}
