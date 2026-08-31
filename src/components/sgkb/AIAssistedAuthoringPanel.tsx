'use client';

import React, { useState } from 'react';
import { Cpu, CheckCircle2, XCircle, AlertTriangle, Download, Info, ShieldCheck, Sparkles, BookOpen, Globe } from 'lucide-react';
import { AIAuthoringAssistantEngine, AISuggestion, AISuggestionCategory } from '@/lib/sgkb/ai-authoring-assistant';
import { ContentIntelligenceLinterEngine, ContentIssue } from '@/lib/sgkb/content-intelligence';
import { KnowledgeGraphEngine } from '@/lib/sgkb/knowledge-graph';
import { CANONICAL_SGKB_LIBRARY } from '@/lib/sgkb/canonical-library-dataset';

export default function AIAssistedAuthoringPanel({ selectedYantraId = 'sri_yantra' }: { selectedYantraId?: string }) {
  const [activeSubTab, setActiveSubTab] = useState<'suggestions' | 'linter' | 'graph'>('suggestions');

  const [suggestions, setSuggestions] = useState<AISuggestion[]>([
    AIAuthoringAssistantEngine.generateSuggestion('citation', selectedYantraId, 'Suggest citation for Soundarya Lahari', true),
    AIAuthoringAssistantEngine.generateSuggestion('translation', selectedYantraId, 'Transliteration for Shri Yantra', true),
    AIAuthoringAssistantEngine.generateSuggestion('citation', selectedYantraId, 'Speculative golden ratio citation', false)
  ]);

  const [linterIssues, setLinterIssues] = useState<ContentIssue[]>(
    ContentIntelligenceLinterEngine.lintDataset(CANONICAL_SGKB_LIBRARY)
  );

  const handleProcessReview = (id: string, action: 'Approved' | 'Rejected') => {
    setSuggestions(prev => prev.map(s => {
      if (s.id === id) {
        return AIAuthoringAssistantEngine.processHumanReview(s, action, 'Chief Editor');
      }
      return s;
    }));
  };

  const handleExportGraph = (format: 'jsonld' | 'rdf' | 'graphml') => {
    const graph = KnowledgeGraphEngine.buildVersionedGraph(CANONICAL_SGKB_LIBRARY, 'v1.0.0');
    let content = '';
    let ext = 'json';
    let mime = 'application/json';

    if (format === 'jsonld') {
      content = KnowledgeGraphEngine.exportJsonLd(graph);
      ext = 'jsonld';
    } else if (format === 'rdf') {
      content = KnowledgeGraphEngine.exportRdfXml(graph);
      ext = 'rdf';
      mime = 'application/xml';
    } else if (format === 'graphml') {
      content = KnowledgeGraphEngine.exportGraphML(graph);
      ext = 'graphml';
      mime = 'application/xml';
    }

    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sgkb_knowledge_graph_v1.0.0.${ext}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-[#FFFDF9] border border-[#EADBC8] rounded-[24px] p-6 shadow-sm space-y-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#EADBC8]/60 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#F28C28]/10 flex items-center justify-center text-[#F28C28]">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-outfit font-black text-[#4A2C17]">AI-Assisted Editorial Tools & Content Intelligence</h3>
            <p className="text-xs text-[#4A2C17]/60">Human-gated AI copilot, automated linter rules engine, and versioned Knowledge Graph exporter</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-bold font-outfit">
          <button
            onClick={() => setActiveSubTab('suggestions')}
            className={`px-3 py-1.5 rounded-xl border transition-all ${
              activeSubTab === 'suggestions' ? 'bg-[#F28C28] text-white border-[#F28C28]' : 'bg-[#FFF5EB] text-[#4A2C17] border-[#EADBC8]'
            }`}
          >
            🤖 AI Suggestions ({suggestions.filter(s => s.provenance.reviewStatus === 'Pending').length} Pending)
          </button>
          <button
            onClick={() => setActiveSubTab('linter')}
            className={`px-3 py-1.5 rounded-xl border transition-all ${
              activeSubTab === 'linter' ? 'bg-[#F28C28] text-white border-[#F28C28]' : 'bg-[#FFF5EB] text-[#4A2C17] border-[#EADBC8]'
            }`}
          >
            🔍 Content Linter ({linterIssues.length} Issues)
          </button>
          <button
            onClick={() => setActiveSubTab('graph')}
            className={`px-3 py-1.5 rounded-xl border transition-all ${
              activeSubTab === 'graph' ? 'bg-[#1E1E1E] text-amber-400 border-[#1E1E1E]' : 'bg-[#FFF5EB] text-[#4A2C17] border-[#EADBC8]'
            }`}
          >
            🕸️ Knowledge Graph
          </button>
        </div>
      </div>

      {/* Subtab 1: AI Suggestions */}
      {activeSubTab === 'suggestions' && (
        <div className="space-y-4">
          {suggestions.map(item => (
            <div key={item.id} className="bg-[#FFF5EB]/60 p-4 rounded-2xl border border-[#EADBC8] space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#EADBC8]/50 pb-2">
                <div className="flex items-center gap-2">
                  <span className="font-outfit font-bold text-xs text-[#F28C28] uppercase tracking-wider">[{item.category}]</span>
                  <span className="font-outfit font-bold text-sm text-[#4A2C17]">Target: {item.targetYantraId}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                    item.provenance.reviewStatus === 'Pending' ? 'bg-amber-100 text-amber-800' : item.provenance.reviewStatus === 'Approved' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                  }`}>
                    Review Gate: {item.provenance.reviewStatus}
                  </span>
                </div>
              </div>

              {/* 3-Way Metric UI Display */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] font-sans">
                <div className="bg-[#FFFDF9] p-2.5 rounded-xl border border-[#EADBC8]">
                  <span className="font-bold text-[#4A2C17]">AI Confidence: </span>
                  <span className="font-mono font-bold text-[#F28C28]">{Math.round(item.aiConfidenceScore * 100)}%</span>
                </div>

                <div className="bg-[#FFFDF9] p-2.5 rounded-xl border border-[#EADBC8]">
                  <span className="font-bold text-[#4A2C17]">Verification Status: </span>
                  <span className="font-bold text-emerald-700">{item.editorialVerificationStatus}</span>
                </div>

                <div className="bg-[#FFFDF9] p-2.5 rounded-xl border border-[#EADBC8]">
                  <span className="font-bold text-[#4A2C17]">Evidence Availability: </span>
                  <span className={`font-bold ${item.evidenceAvailability.includes('No') ? 'text-rose-700 font-mono' : 'text-emerald-700'}`}>
                    {item.evidenceAvailability}
                  </span>
                </div>
              </div>

              <div className="bg-[#FFFDF9] p-3 rounded-xl border border-[#EADBC8] text-xs font-serif text-[#4A2C17]">
                {item.suggestedContent}
              </div>

              {/* Provenance Metadata */}
              <div className="text-[10px] text-[#4A2C17]/70 font-mono flex items-center justify-between border-t border-[#EADBC8]/40 pt-2">
                <span>Model: {item.provenance.generatedByModel} ({item.provenance.modelVersion})</span>
                <span>Prompt: {item.provenance.promptVersion}</span>
              </div>

              {/* One-Click Human Review Action Buttons */}
              {item.provenance.reviewStatus === 'Pending' && (
                <div className="flex items-center justify-end gap-2 pt-1">
                  <button
                    onClick={() => handleProcessReview(item.id, 'Rejected')}
                    className="px-4 py-1.5 rounded-xl bg-rose-600 text-white font-bold text-xs shadow-xs hover:bg-rose-700"
                  >
                    Reject Suggestion
                  </button>
                  <button
                    onClick={() => handleProcessReview(item.id, 'Approved')}
                    className="px-4 py-1.5 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-xs hover:bg-emerald-700"
                  >
                    Approve Suggestion
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Subtab 2: Content Linter */}
      {activeSubTab === 'linter' && (
        <div className="space-y-3 text-xs">
          <div className="bg-[#FFF5EB] p-3 rounded-xl border border-[#EADBC8] text-[#4A2C17] font-bold">
            Configurable Rules Engine Status: {linterIssues.length === 0 ? 'Clean (Zero Linter Issues)' : `${linterIssues.length} Audit Warnings`}
          </div>

          <div className="space-y-2">
            {linterIssues.map((issue, idx) => (
              <div key={idx} className="bg-[#FFFDF9] p-3 rounded-xl border border-[#EADBC8] flex items-center justify-between">
                <div>
                  <span className="font-bold text-[#F28C28]">[{issue.ruleId}] </span>
                  <span>{issue.message}</span>
                </div>
                <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full text-[10px] font-bold">
                  {issue.severity.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Subtab 3: Knowledge Graph */}
      {activeSubTab === 'graph' && (
        <div className="space-y-4 text-xs font-sans">
          <div className="bg-[#FFF5EB] p-4 rounded-2xl border border-[#EADBC8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <div className="font-outfit font-bold text-sm text-[#4A2C17]">Knowledge Graph Multi-Format Exporter</div>
              <p className="text-xs text-[#4A2C17]/70">Export versioned node-edge graph networks to academic formats (JSON-LD, RDF/XML, GraphML)</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleExportGraph('jsonld')}
                className="bg-[#FFFDF9] border border-[#EADBC8] px-3 py-1.5 rounded-xl font-bold hover:border-[#F28C28]"
              >
                JSON-LD
              </button>
              <button
                onClick={() => handleExportGraph('rdf')}
                className="bg-[#FFFDF9] border border-[#EADBC8] px-3 py-1.5 rounded-xl font-bold hover:border-[#F28C28]"
              >
                RDF/XML
              </button>
              <button
                onClick={() => handleExportGraph('graphml')}
                className="bg-[#1E1E1E] text-amber-400 border border-[#1E1E1E] px-3 py-1.5 rounded-xl font-bold"
              >
                GraphML (Gephi)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
