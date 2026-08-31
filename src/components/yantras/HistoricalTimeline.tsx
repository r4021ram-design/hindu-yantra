'use client';

import React from 'react';
import { History, BookOpen, Sparkles, Scale, Cpu } from 'lucide-react';

export interface TimelineEvent {
  period: string;
  title: string;
  description: string;
  sourceText: string;
  category: 'textual' | 'traditional' | 'modern';
}

export default function HistoricalTimeline({ dsl }: { dsl?: any }) {
  const events: TimelineEvent[] = [
    {
      period: 'c. 8th Century CE',
      title: 'Soundarya Lahari Composition',
      description: 'Adi Shankaracharya documents the 43 sub-triangle topological derivation formula of the Shri Yantra.',
      sourceText: 'Soundarya Lahari Verse 11',
      category: 'textual'
    },
    {
      period: 'c. 11th Century CE',
      title: 'Yogini Hridaya Codification',
      description: 'Detailed Tantric manual outlining the 9 Navavarana Avaranas and sacred Beej Mantra associations.',
      sourceText: 'Yogini Hridaya Kaka-mata Patala',
      category: 'textual'
    },
    {
      period: 'c. 16th Century CE',
      title: 'Setubandha Commentary',
      description: 'Bhaskararaya Makhin synthesizes Srividya Sampradaya oral commentary on Srichakra construction.',
      sourceText: 'Setubandha Commentary III.14',
      category: 'traditional'
    },
    {
      period: 'c. 20th-21st Century',
      title: 'Modern Analytical & Computer Reconstructions',
      description: 'Academic mathematical papers analyze centroid intersection error residuals (< 10^-10) and PHI golden ratio alignments.',
      sourceText: 'Computer-Aided Geometry Research',
      category: 'modern'
    }
  ];

  return (
    <div className="bg-[#FFFDF9] border border-[#EADBC8] rounded-[24px] p-6 shadow-sm space-y-6 font-sans">
      <div className="flex items-center gap-3 border-b border-[#EADBC8]/60 pb-4">
        <div className="w-10 h-10 rounded-xl bg-[#F28C28]/10 flex items-center justify-center text-[#F28C28]">
          <History className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg font-outfit font-black text-[#4A2C17]">Historical & Textual Timeline</h3>
          <p className="text-xs text-[#4A2C17]/60">Chronological history of major textual references, traditional lineage developments, and modern research</p>
        </div>
      </div>

      <div className="relative border-l-2 border-[#F28C28]/30 ml-4 space-y-6">
        {events.map((evt, idx) => (
          <div key={idx} className="relative pl-6">
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#FFFDF9] border-2 border-[#F28C28] flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#F28C28]" />
            </div>

            <div className="bg-[#FFF5EB]/60 p-4 rounded-2xl border border-[#EADBC8] space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-outfit font-bold text-xs text-[#F28C28] uppercase tracking-wider">{evt.period}</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  evt.category === 'textual' ? 'bg-[#800020] text-white' : evt.category === 'traditional' ? 'bg-[#F28C28] text-white' : 'bg-[#0284C7] text-white'
                }`}>
                  {evt.category.toUpperCase()}
                </span>
              </div>
              <div className="font-outfit font-bold text-sm text-[#4A2C17]">{evt.title}</div>
              <p className="text-xs text-[#4A2C17]/90">{evt.description}</p>
              <div className="text-[10px] text-[#D8A44C] font-semibold italic">Source: {evt.sourceText}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
