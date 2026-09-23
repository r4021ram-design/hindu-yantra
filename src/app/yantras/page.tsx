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
  Search, Download, Copy, Check, Sparkles, Compass, Star, Flame, RotateCcw,
  Upload, Layers, Palette, BookOpen, CheckCircle2, Image as ImageIcon, Trash2
} from 'lucide-react';

interface LoadedAsset {
  type: 'svg' | 'image';
  content: string;
  fileName: string;
}

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
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync with URL query parameter
  useEffect(() => {
    const paramId = searchParams.get('id');
    if (paramId && SHASTRIC_JYOTISH_DATABASE[paramId]) {
      setSelectedYantraId(paramId);
    }
  }, [searchParams]);

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

        {/* Global Action Bar */}
        <div className="flex items-center gap-2 flex-wrap">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept=".svg,image/png,image/jpeg,image/webp"
            className="hidden"
          />

          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-linear-to-r from-[#D4AF37] to-[#FF9933] text-[#0A0908] font-bold text-xs shadow-md hover:brightness-110 transition-all cursor-pointer"
            title="Upload authentic SVG or transparent high-res PNG for this Yantra"
          >
            <Upload className="w-4 h-4" />
            <span>{currentAsset ? 'Replace Yantra Asset' : 'Upload Authentic Yantra'}</span>
          </button>

          {currentAsset && (
            <>
              {currentAsset.type === 'svg' && (
                <button
                  onClick={handleCopySVG}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#1E1A16] hover:bg-[#2A241E] border border-[#D4AF37]/30 text-xs font-semibold text-[#FFF9F2] transition-all cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#D4AF37]" />}
                  <span>{copied ? 'Copied' : 'Copy SVG'}</span>
                </button>
              )}

              {currentAsset.type === 'svg' && (
                <button
                  onClick={handleDownloadSVG}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#1E1A16] hover:bg-[#2A241E] border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37] transition-all cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>SVG</span>
                </button>
              )}

              <button
                onClick={handleDownloadPNG}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#1E1A16] hover:bg-[#2A241E] border border-[#D4AF37]/30 text-xs font-semibold text-[#FFF9F2] transition-all cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-[#FF9933]" />
                <span>3000px PNG</span>
              </button>

              <button
                onClick={handleRemoveAsset}
                className="p-2 rounded-xl bg-red-950/60 hover:bg-red-900 border border-red-500/40 text-red-300 transition-all cursor-pointer"
                title="Remove current asset"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </>
          )}
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
          
          {/* Central Sacred Yantra Canvas */}
          <div
            className="relative rounded-[32px] p-6 lg:p-10 border border-[#D4AF37]/30 flex flex-col items-center justify-center shadow-2xl gold-glow min-h-[520px] transition-colors"
            style={{ background: currentThemeObj.background }}
          >
            {/* Top Badge */}
            <div className="absolute top-4 left-6 flex items-center gap-2">
              <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30">
                {currentYantra.nameEnglish}
              </span>
              <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#FF9933]/15 text-[#FF9933] border border-[#FF9933]/30">
                {currentYantra.presidingDeity}
              </span>
            </div>

            {/* Display Area */}
            {currentAsset ? (
              <div className="w-full max-w-xl aspect-square flex items-center justify-center p-4 transition-all duration-300">
                {currentAsset.type === 'svg' ? (
                  <div
                    className="w-full h-full flex items-center justify-center drop-shadow-2xl [&_svg]:w-full [&_svg]:h-full"
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
                    Galat algorithmic geometry nikaal di gayi hai. Aap apna shuddh aur pramanik Yantra upload karein ya humein SVG provide karein.
                  </p>
                </div>

                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="px-5 py-2.5 rounded-xl bg-linear-to-r from-[#D4AF37] to-[#FF9933] text-[#0A0908] font-bold text-xs shadow-md hover:brightness-110 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Upload className="w-4 h-4" />
                  <span>Upload Authentic {currentYantra.nameEnglish}</span>
                </button>

                <p className="text-[11px] font-mono text-[#8A8070]">
                  Supported Formats: Layered SVG (Recommended) or High-Res Transparent PNG
                </p>
              </div>
            )}

            <p className="text-xs text-[#8A8070] italic text-center mt-4">
              {currentYantra.corePhilosophy}
            </p>
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
                  {(currentYantra.avaranas || []).map(av => (
                    <div
                      key={av.index}
                      className="p-4 rounded-2xl bg-[#1A1612] border border-[#2A241E] hover:border-[#D4AF37]/40 transition-all space-y-2.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold font-mono px-2 py-0.5 rounded-md bg-[#D4AF37]/20 text-[#D4AF37]">
                          आवरण {av.index}
                        </span>
                        <span className="text-[11px] font-mono text-[#FF9933]">{av.presidingDeity}</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#FFF9F2]">{av.nameSanskrit}</h4>
                        <p className="text-xs text-[#D4AF37] font-medium">{av.chakraTitle}</p>
                      </div>
                      <p className="text-xs text-[#C5BDB0] leading-relaxed">{av.significance}</p>
                      <div className="pt-2 border-t border-[#241F1A] flex items-center justify-between text-[10px] font-mono text-[#8A8070]">
                        <span>मुद्रा: {av.mudraShakti}</span>
                        <span>योगिनी: {av.yoginiClass}</span>
                      </div>
                    </div>
                  ))}
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
