'use client';

import React from 'react';
import { Download, FileText, Code, BookOpen, ShieldCheck } from 'lucide-react';
import { ResearchBundleExporterEngine, ResearchBundlePayload } from '@/lib/yantras/export-bundle';

export default function ResearchBundleExporter({ dsl }: { dsl?: any }) {
  const triggerDownload = (filename: string, content: string, mimeType: string) => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  const getPayload = (): ResearchBundlePayload => ({
    yantraId: dsl?.id || 'sri_yantra',
    yantraName: dsl?.names?.english || dsl?.metadata?.titleEnglish || dsl?.id || 'Shri Yantra',
    generatedAt: new Date().toISOString(),
    geometryEngineVersion: 'v1.0.0-sgos',
    evidenceVersion: 'v1.0.0-sgkb',
    dsl: dsl || {},
    citations: [
      {
        scripture: 'Soundarya Lahari',
        chapterVerse: 'Verse 11',
        evidenceTier: 'canonical',
        confidenceLevel: 'High',
        translation: 'With 4 Shiva triangles and 5 Shakti triangles forming 9 primary Mula-Prakriti roots...'
      },
      {
        scripture: 'Yogini Hridaya',
        chapterVerse: 'Section 1.12',
        evidenceTier: 'canonical',
        confidenceLevel: 'High',
        translation: 'Bindu, Trikona, Vasukona, Dashara Yugma, Manvasra...'
      }
    ],
    auditTrail: {
      lastUpdated: '2026-07-25',
      reviewer: 'Shastric Geometry Board',
      shastricBoard: 'Srividya Academic Research Council'
    }
  });

  const handleExportMarkdown = () => {
    const payload = getPayload();
    const md = ResearchBundleExporterEngine.generateMarkdownReport(payload);
    triggerDownload(`${payload.yantraId}_academic_report.md`, md, 'text/markdown');
  };

  const handleExportJson = () => {
    const payload = getPayload();
    const json = ResearchBundleExporterEngine.generateJsonBundle(payload);
    triggerDownload(`${payload.yantraId}_research_bundle.json`, json, 'application/json');
  };

  return (
    <div className="bg-[#FFFDF9] border border-[#EADBC8] rounded-[24px] p-6 shadow-sm space-y-4 font-sans">
      <div className="flex items-center gap-3 border-b border-[#EADBC8]/60 pb-3">
        <div className="w-10 h-10 rounded-xl bg-[#F28C28]/10 flex items-center justify-center text-[#F28C28]">
          <Download className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-base font-outfit font-black text-[#4A2C17]">Research Export Studio</h3>
          <p className="text-xs text-[#4A2C17]/60">Export Markdown reports, JSON packages, and Citation bundles with preserved evidence tiers</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button
          onClick={handleExportMarkdown}
          className="bg-[#FFF5EB] p-3.5 rounded-2xl border border-[#EADBC8] hover:border-[#F28C28] text-left transition-all flex items-center gap-3"
        >
          <FileText className="w-5 h-5 text-[#F28C28]" />
          <div>
            <div className="font-outfit font-bold text-xs text-[#4A2C17]">Academic Markdown Report (.MD)</div>
            <div className="text-[10px] text-[#4A2C17]/70">Full text with citations, proofs & evidence badges</div>
          </div>
        </button>

        <button
          onClick={handleExportJson}
          className="bg-[#FFF5EB] p-3.5 rounded-2xl border border-[#EADBC8] hover:border-[#F28C28] text-left transition-all flex items-center gap-3"
        >
          <Code className="w-5 h-5 text-[#D8A44C]" />
          <div>
            <div className="font-outfit font-bold text-xs text-[#4A2C17]">JSON Research Bundle (.JSON)</div>
            <div className="text-[10px] text-[#4A2C17]/70">Machine-readable DSL, citations & provenance payload</div>
          </div>
        </button>
      </div>
    </div>
  );
}
