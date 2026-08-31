'use client';

import React, { useState } from 'react';
import { BookOpen, Search, Filter, ShieldCheck, Info, Sparkles, CheckCircle2, Award, ExternalLink } from 'lucide-react';

export interface CitationItem {
  id: string;
  scripture: string;
  chapterVerse: string;
  sanskrit: string;
  translation: string;
  commentary: string;
  associatedLayerId: string;
  evidenceTier: 'canonical' | 'traditional' | 'research';
  confidenceLevel: 'High' | 'Moderate' | 'Speculative';
  yantraId: string;
}

export default function CitationExplorer({ dsl }: { dsl?: any }) {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTier, setSelectedTier] = useState<string>('all');
  const [selectedConfidence, setSelectedConfidence] = useState<string>('all');

  const citations: CitationItem[] = [
    {
      id: 'cit_1',
      scripture: 'Soundarya Lahari',
      chapterVerse: 'Verse 11',
      sanskrit: 'चतुर्भिः श्रीकण्ठैः शिवयुवतिभिः पञ्चभिरपि प्रभिन्नाभिः शंभोर्नवभिरपि मूलप्रकृतिभिः। त्रयश्चत्वारिंशद्वसुदलकलास्रत्रिवलयत्रिरेखाभिः सार्धं तव शरणकोणाः परिणताः॥',
      translation: 'With 4 Shiva triangles and 5 Shakti triangles forming 9 primary Mula-Prakriti roots, together with 8 petals, 16 petals, 3 circles, and 3 Bhupura lines, your 43 triangles are evolved.',
      commentary: 'Canonical mathematical foundation for Shri Yantra construction defining the exact 43 sub-triangle topological count.',
      associatedLayerId: 'central_trikona',
      evidenceTier: 'canonical',
      confidenceLevel: 'High',
      yantraId: 'sri_yantra'
    },
    {
      id: 'cit_2',
      scripture: 'Yogini Hridaya',
      chapterVerse: 'Kaka-mata Patala 1, Verses 12-16',
      sanskrit: 'बिन्दुत्रिकोणवसुकोणदशारयुग्ममन्वस्रनागदलसंयुतषोडशारम्। वृत्तत्रयं च चतुरस्रयुगं च यन्त्रं श्रीचक्रमेतदुदितं परदेवतायाः॥',
      translation: 'Bindu, Trikona, Vasukona (8 triangles), Dashara Yugma (two 10-triangle rings), Manvasra (14 triangles), Nagadala (8 petals), Shodashara (16 petals), 3 circles, and Bhupura square.',
      commentary: 'Explains the 9 Navavarana chakras from innermost Bindu singularity to outermost Bhupura enclosure.',
      associatedLayerId: 'chaturdasharam',
      evidenceTier: 'canonical',
      confidenceLevel: 'High',
      yantraId: 'sri_yantra'
    },
    {
      id: 'cit_3',
      scripture: 'Gandharva Tantra',
      chapterVerse: 'Chapter VI, Verses 8-10',
      sanskrit: 'त्रिकोणं बिन्दुसहितं सर्वानन्दमयं परम्। पूजयेत्तत्र देवेशि सर्वसिद्धिप्रदायकम्॥',
      translation: 'Worship the Central Bindu enclosed within the primary Trikona, which grants all spiritual perfections (Sarva Siddhi).',
      commentary: 'Direct citation specifying the geometrical constraint enforcing Bindu point placement at the exact centroid of the inner triangle.',
      associatedLayerId: 'bindu',
      evidenceTier: 'canonical',
      confidenceLevel: 'High',
      yantraId: 'sri_yantra'
    },
    {
      id: 'cit_4',
      scripture: 'Nityotsava (Srividya Manual)',
      chapterVerse: 'Section III.4',
      sanskrit: 'दक्षिणोत्तरभागेषु वास्तुयन्त्रं विन्यस्य...',
      translation: 'Position the Vastu Yantra facing East or North on a consecrated copper plate.',
      commentary: 'Traditional Srividya Sampradaya oral ritual manual describing Vastu directional orientation.',
      associatedLayerId: 'bhupura',
      evidenceTier: 'traditional',
      confidenceLevel: 'Moderate',
      yantraId: 'sri_yantra'
    },
    {
      id: 'cit_5',
      scripture: 'Mantra Mahodadhi',
      chapterVerse: 'Taranga XIV, Verses 12-15',
      sanskrit: 'यन्त्रं नवग्रहाणां च सूर्यस्यातिप्रियं सदा...',
      translation: 'The Surya Yantra with 8-fold radial petals grants vitality and removes solar afflictions.',
      commentary: 'Canonical citation linking Surya Yantra geometry to Navagraha planetary propitiation.',
      associatedLayerId: 'surya_petals',
      evidenceTier: 'canonical',
      confidenceLevel: 'High',
      yantraId: 'surya_yantra'
    },
    {
      id: 'cit_6',
      scripture: 'Modern PHI Golden Proportion Study',
      chapterVerse: 'Research Paper 2024.1',
      sanskrit: 'N/A (Modern Analytical Hypothesis)',
      translation: 'The ratio of inner 8-petal circle radius to outer 16-petal circle radius converges to PHI = 1.6180339...',
      commentary: 'Analytical hypothesis suggesting modern golden ratio aesthetic alignment in Srividya geometry.',
      associatedLayerId: 'ashtaragon',
      evidenceTier: 'research',
      confidenceLevel: 'Speculative',
      yantraId: 'sri_yantra'
    }
  ];

  const filteredCitations = citations.filter(c => {
    const matchesSearch =
      c.scripture.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.translation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.sanskrit.includes(searchQuery);
    const matchesTier = selectedTier === 'all' || c.evidenceTier === selectedTier;
    const matchesConf = selectedConfidence === 'all' || c.confidenceLevel === selectedConfidence;

    return matchesSearch && matchesTier && matchesConf;
  });

  return (
    <div className="bg-[#FFFDF9] border border-[#EADBC8] rounded-[24px] p-6 shadow-sm space-y-6 font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#EADBC8]/60 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#F28C28]/10 flex items-center justify-center text-[#F28C28]">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-outfit font-black text-[#4A2C17]">Interactive Citation Explorer</h3>
            <p className="text-xs text-[#4A2C17]/60">Searchable repository of original Sanskrit verses, translations, and evidence confidence levels</p>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center gap-2 text-xs font-bold w-full md:w-auto">
          <div className="relative w-full md:w-48">
            <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-[#D8A44C]" />
            <input
              type="text"
              placeholder="Search Verses, Scriptures..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-[#FFFDF9] border border-[#EADBC8] focus:border-[#F28C28] rounded-xl pl-8 pr-3 py-1.5 text-xs text-[#4A2C17] outline-none"
            />
          </div>

          <select
            value={selectedTier}
            onChange={e => setSelectedTier(e.target.value)}
            className="bg-[#FFFDF9] border border-[#EADBC8] text-[#4A2C17] rounded-xl px-2.5 py-1.5 outline-none"
          >
            <option value="all">All Tiers</option>
            <option value="canonical">📜 Canonical</option>
            <option value="traditional">📿 Traditional</option>
            <option value="research">🔬 Research</option>
          </select>

          <select
            value={selectedConfidence}
            onChange={e => setSelectedConfidence(e.target.value)}
            className="bg-[#FFFDF9] border border-[#EADBC8] text-[#4A2C17] rounded-xl px-2.5 py-1.5 outline-none"
          >
            <option value="all">All Confidence</option>
            <option value="High">High Confidence</option>
            <option value="Moderate">Moderate</option>
            <option value="Speculative">Speculative</option>
          </select>
        </div>
      </div>

      {/* Citation Cards List */}
      <div className="space-y-4">
        {filteredCitations.map(item => (
          <div key={item.id} className="bg-[#FFF5EB]/60 p-4 rounded-2xl border border-[#EADBC8] space-y-2 hover:border-[#D8A44C] transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#EADBC8]/50 pb-2">
              <div className="flex items-center gap-2">
                <span className="font-outfit font-bold text-sm text-[#4A2C17]">{item.scripture}</span>
                <span className="text-xs text-[#F28C28] font-bold">({item.chapterVerse})</span>
              </div>

              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                  item.evidenceTier === 'canonical' ? 'bg-[#800020] text-white' : item.evidenceTier === 'traditional' ? 'bg-[#F28C28] text-white' : 'bg-[#0284C7] text-white'
                }`}>
                  {item.evidenceTier === 'canonical' ? '📜 Canonical' : item.evidenceTier === 'traditional' ? '📿 Traditional' : '🔬 Research'}
                </span>

                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  item.confidenceLevel === 'High' ? 'bg-emerald-100 text-emerald-800' : item.confidenceLevel === 'Moderate' ? 'bg-amber-100 text-amber-800' : 'bg-purple-100 text-purple-800'
                }`}>
                  Confidence: {item.confidenceLevel}
                </span>
              </div>
            </div>

            {item.sanskrit !== 'N/A (Modern Analytical Hypothesis)' && (
              <div className="font-serif text-sm text-[#800020] font-semibold bg-[#FFFDF9] p-3 rounded-xl border border-[#EADBC8]/60 leading-relaxed">
                {item.sanskrit}
              </div>
            )}

            <div className="text-xs text-[#4A2C17] font-serif italic">
              "<span className="font-semibold">{item.translation}</span>"
            </div>

            <div className="text-[11px] text-[#4A2C17]/80 font-sans pt-1 flex items-start gap-2">
              <Info className="w-3.5 h-3.5 text-[#F28C28] shrink-0 mt-0.5" />
              <span><span className="font-bold">Commentary:</span> {item.commentary}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
