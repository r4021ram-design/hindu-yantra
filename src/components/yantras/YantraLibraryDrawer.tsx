'use client';

import React from 'react';
import {
  Layers, List, FolderTree, ChevronLeft, Search, Filter,
  CheckCircle2, ChevronDown, ChevronUp
} from 'lucide-react';
import { YantraShastricEntry } from '@/lib/yantras/shastric-jyotish-database';
import { YANTRA_TAXONOMY_CATEGORIES, YantraCategoryDefinition } from '@/lib/yantras/yantra-taxonomy';
import { LoadedAsset, getYantraTaxonomyCategory } from './types';

export interface YantraLibraryDrawerProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
  sidebarViewMode: 'flat' | 'grouped';
  setSidebarViewMode: (mode: 'flat' | 'grouped') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedTaxonomyCategory: string;
  setSelectedTaxonomyCategory: (catId: string) => void;
  selectedYantraId: string;
  setSelectedYantraId: (id: string) => void;
  assetsMap: Record<string, LoadedAsset>;
  availableYantras: YantraShastricEntry[];
  filteredYantras: YantraShastricEntry[];
  activeTaxonomyCategories: YantraCategoryDefinition[];
  categoryStats: Record<string, number>;
  groupedYantras: { category: YantraCategoryDefinition; yantras: YantraShastricEntry[] }[];
  collapsedCategories: Record<string, boolean>;
  toggleCategoryCollapse: (catId: string) => void;
}

export function YantraLibraryDrawer({
  isSidebarOpen,
  setIsSidebarOpen,
  sidebarViewMode,
  setSidebarViewMode,
  searchQuery,
  setSearchQuery,
  selectedTaxonomyCategory,
  setSelectedTaxonomyCategory,
  selectedYantraId,
  setSelectedYantraId,
  assetsMap,
  availableYantras,
  filteredYantras,
  activeTaxonomyCategories,
  categoryStats,
  groupedYantras,
  collapsedCategories,
  toggleCategoryCollapse
}: YantraLibraryDrawerProps) {
  if (!isSidebarOpen) return null;

  return (
    <aside className="lg:col-span-3 bg-[#FDFBF7] border-2 border-[#D1C4B0] rounded-3xl p-4 sm:p-5 space-y-3.5 h-[calc(100vh-140px)] overflow-y-auto no-scrollbar shadow-[0_4px_18px_rgba(42,20,5,0.06)] sticky top-24 z-30">
      {/* Header with Title and Mode Switcher */}
      <div className="flex items-center justify-between pb-2 border-b border-[#D1C4B0]">
        <div className="space-y-0.5">
          <h2 className="text-xs font-mono font-bold text-[#0F0C08] uppercase tracking-wider flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#824707]" />
            <span>Sacred Yantra Library</span>
          </h2>
          <p className="text-[11px] text-[#3D2C1C] font-semibold">18-Tier Shastric Registry</p>
        </div>
        <div className="flex items-center gap-1.5">
          {/* View Mode Toggle: Flat List vs Grouped Accordion */}
          <div className="flex items-center bg-[#F0E6D6] p-0.5 rounded-lg border border-[#D1C4B0]">
            <button
              onClick={() => setSidebarViewMode('flat')}
              className={`p-1 rounded-md text-[10px] font-mono transition-all cursor-pointer ${
                sidebarViewMode === 'flat'
                  ? 'bg-[#824707] text-white shadow-xs'
                  : 'text-[#5A4532] hover:bg-[#EAE0CE]'
              }`}
              title="सरल सूची दृश्य (Flat List)"
            >
              <List className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setSidebarViewMode('grouped')}
              className={`p-1 rounded-md text-[10px] font-mono transition-all cursor-pointer ${
                sidebarViewMode === 'grouped'
                  ? 'bg-[#824707] text-white shadow-xs'
                  : 'text-[#5A4532] hover:bg-[#EAE0CE]'
              }`}
              title="श्रेणीबद्ध एकॉर्डियन दृश्य (Grouped Taxonomy)"
            >
              <FolderTree className="w-3.5 h-3.5" />
            </button>
          </div>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="p-1.5 rounded-lg bg-[#F5EFE4] hover:bg-[#EFE5D5] text-[#0F0C08] transition-all cursor-pointer"
            title="यन्त्र सूची छुपाएं"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Search Input */}
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

      {/* 18-Tier Taxonomy Filter Chips */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-[11px] font-mono font-bold text-[#5A4532]">
          <span className="flex items-center gap-1">
            <Filter className="w-3 h-3 text-[#824707]" />
            <span>पवित्र वर्गीकरण (Taxonomy)</span>
          </span>
          <span className="text-[10px] bg-[#EFE7D8] px-2 py-0.5 rounded-full text-[#0F0C08] font-semibold">
            {filteredYantras.length} / {availableYantras.length}
          </span>
        </div>

        {/* Horizontal Scrollable/Wrap Filter Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
          {/* All Chip */}
          <button
            onClick={() => setSelectedTaxonomyCategory('all')}
            className={`px-2.5 py-1 rounded-xl text-[11px] font-medium transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              selectedTaxonomyCategory === 'all'
                ? 'bg-[#824707] text-white font-bold shadow-xs'
                : 'bg-[#F5EFE4] hover:bg-[#EFE5D5] text-[#3D2C1C] border border-[#D1C4B0]'
            }`}
          >
            <span>सभी (All)</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
              selectedTaxonomyCategory === 'all' ? 'bg-[#542608] text-white' : 'bg-[#E5DBCB] text-[#5A4532]'
            }`}>
              {availableYantras.length}
            </span>
          </button>

          {/* Category Chips */}
          {activeTaxonomyCategories.map(cat => {
            const isCatSelected = selectedTaxonomyCategory === cat.id;
            const count = categoryStats[cat.id] || 0;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedTaxonomyCategory(isCatSelected ? 'all' : cat.id)}
                className={`px-2.5 py-1 rounded-xl text-[11px] font-medium transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  isCatSelected
                    ? 'bg-[#824707] text-white font-bold shadow-xs'
                    : 'bg-[#F5EFE4] hover:bg-[#EFE5D5] text-[#3D2C1C] border border-[#D1C4B0]'
                }`}
              >
                <span>{cat.titleHindi}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isCatSelected ? 'bg-[#542608] text-white' : 'bg-[#E5DBCB] text-[#5A4532]'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Yantra List Section: Either Flat List or Grouped Accordion */}
      <div className="space-y-2 pt-1">
        {sidebarViewMode === 'flat' ? (
          // Flat List of Yantras
          filteredYantras.map(y => {
            const isSelected = y.id === selectedYantraId;
            const hasAsset = Boolean(assetsMap[y.id]);
            const catKey = getYantraTaxonomyCategory(y);
            const catMeta = YANTRA_TAXONOMY_CATEGORIES[catKey];

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
                <div className="flex items-center justify-between mt-0.5">
                  <span className="text-[10px] font-mono text-[#8C2300] font-bold">{y.presidingDeity}</span>
                  {catMeta && (
                    <span className="text-[9.5px] px-2 py-0.2 rounded-full bg-[#EAE0CF] text-[#542608] border border-[#C5B49D]/50 font-medium">
                      {catMeta.titleHindi}
                    </span>
                  )}
                </div>
              </button>
            );
          })
        ) : (
          // Grouped Accordion by Taxonomy Category
          groupedYantras.map(({ category, yantras }) => {
            const isCollapsed = Boolean(collapsedCategories[category.id]);

            return (
              <div key={category.id} className="rounded-2xl border border-[#D5C7B2] bg-[#FAF6EE] overflow-hidden shadow-2xs">
                {/* Accordion Category Header */}
                <button
                  onClick={() => toggleCategoryCollapse(category.id)}
                  className="w-full px-3.5 py-2.5 flex items-center justify-between bg-[#F4EDE0] hover:bg-[#ECE2D2] transition-all cursor-pointer text-left"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-serif font-bold text-[#0F0C08]">
                      {category.titleSanskrit}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#824707] text-white font-bold">
                      {yantras.length}
                    </span>
                  </div>
                  {isCollapsed ? (
                    <ChevronDown className="w-4 h-4 text-[#5A4532]" />
                  ) : (
                    <ChevronUp className="w-4 h-4 text-[#5A4532]" />
                  )}
                </button>

                {/* Accordion Content */}
                {!isCollapsed && (
                  <div className="p-2 space-y-1.5">
                    {yantras.map(y => {
                      const isSelected = y.id === selectedYantraId;
                      const hasAsset = Boolean(assetsMap[y.id]);

                      return (
                        <button
                          key={y.id}
                          onClick={() => setSelectedYantraId(y.id)}
                          className={`w-full text-left p-2.5 rounded-xl border transition-all cursor-pointer flex flex-col gap-0.5 ${
                            isSelected
                              ? 'bg-[#F0E4D0] border-[#824707] text-[#0F0C08] ring-1 ring-[#824707]/30'
                              : 'bg-[#FCFAF5] border-[#E8DFC8] hover:bg-[#F2EAE0] text-[#0F0C08]'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className={`text-[11.5px] font-serif font-bold ${isSelected ? 'text-[#8C2300]' : 'text-[#0F0C08]'}`}>
                              {y.nameSanskrit}
                            </span>
                            <div className="flex items-center gap-1">
                              {hasAsset && (
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" title="Asset Loaded" />
                              )}
                              {isSelected && <CheckCircle2 className="w-3 h-3 text-[#824707]" />}
                            </div>
                          </div>
                          <span className="text-[10.5px] text-[#2E2218] truncate font-medium">{y.nameEnglish}</span>
                          <span className="text-[9.5px] font-mono text-[#8C2300] font-semibold">{y.presidingDeity}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })
        )}

        {filteredYantras.length === 0 && (
          <div className="text-center py-8 text-[#5A4532] text-xs">
            <p className="font-semibold">कोई यन्त्र नहीं मिला</p>
            <p className="text-[11px] mt-1 text-[#8C2300]">कृपया खोज शब्द अथवा श्रेणी बदलें</p>
          </div>
        )}
      </div>
    </aside>
  );
}
