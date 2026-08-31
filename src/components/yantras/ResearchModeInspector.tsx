'use client';

import React, { useState, useMemo } from 'react';
import { Cpu, Terminal, ShieldCheck, Database, Layers, Code, Hash, Activity } from 'lucide-react';
import { SGOS } from '@yantra/engine/sdk';
import { SGOSVerification } from '@yantra/engine/verification';

interface ResearchModeInspectorProps {
  dsl: any;
}

export default function ResearchModeInspector({ dsl }: ResearchModeInspectorProps) {
  const [activeInspectorTab, setActiveInspectorTab] = useState<'osgm' | 'dsl' | 'ast' | 'graph' | 'solver' | 'verification'>('osgm');

  const pipeline = useMemo(() => SGOS.runPipeline(dsl), [dsl]);
  const verification = useMemo(() => SGOSVerification.verifyGeometry(dsl), [dsl]);

  return (
    <div className="bg-[#1E1E1E] text-[#D4D4D4] rounded-[24px] p-6 shadow-2xl space-y-6 font-mono text-xs border border-[#333333]">
      {/* Read-only Security Banner */}
      <div className="flex items-center justify-between border-b border-[#333333] pb-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#007ACC]/20 border border-[#007ACC]/50 flex items-center justify-center text-[#38BDF8]">
            <Terminal className="w-5 h-5" />
          </div>
          <div>
            <div className="font-bold text-sm text-[#F3F3F3] flex items-center gap-2">
              <span>SGOS Scientific Research Mode</span>
              <span className="bg-amber-500/20 text-amber-400 border border-amber-500/40 text-[10px] px-2 py-0.5 rounded-full font-sans uppercase font-bold">Read-Only Inspector</span>
            </div>
            <div className="text-[11px] text-[#888888] font-sans">Deterministic Kernel AST, Graph, Solver & OSGM Diagnostics</div>
          </div>
        </div>

        <div className="text-right font-sans text-[11px]">
          <div className="text-[#888888]">Hash: <span className="text-amber-400 font-mono">{pipeline.osgm.provenance.deterministicHash.substring(0, 16)}...</span></div>
          <div className="text-[#888888]">Total Time: <span className="text-emerald-400 font-mono">{pipeline.benchmark.totalPipelineTimeMs} ms</span></div>
        </div>
      </div>

      {/* Tab Switcher */}
      <div className="flex items-center gap-2 border-b border-[#333333] pb-2 overflow-x-auto font-sans font-bold text-xs">
        <button
          onClick={() => setActiveInspectorTab('osgm')}
          className={`px-3 py-1.5 rounded-lg transition-all ${activeInspectorTab === 'osgm' ? 'bg-[#007ACC] text-white' : 'text-[#888888] hover:bg-[#2A2A2A]'}`}
        >
          OSGM Diagnostics
        </button>
        <button
          onClick={() => setActiveInspectorTab('verification')}
          className={`px-3 py-1.5 rounded-lg transition-all ${activeInspectorTab === 'verification' ? 'bg-[#007ACC] text-white' : 'text-[#888888] hover:bg-[#2A2A2A]'}`}
        >
          8-Stage Verification
        </button>
        <button
          onClick={() => setActiveInspectorTab('dsl')}
          className={`px-3 py-1.5 rounded-lg transition-all ${activeInspectorTab === 'dsl' ? 'bg-[#007ACC] text-white' : 'text-[#888888] hover:bg-[#2A2A2A]'}`}
        >
          DSL JSON Schema
        </button>
        <button
          onClick={() => setActiveInspectorTab('graph')}
          className={`px-3 py-1.5 rounded-lg transition-all ${activeInspectorTab === 'graph' ? 'bg-[#007ACC] text-white' : 'text-[#888888] hover:bg-[#2A2A2A]'}`}
        >
          Topology Graph
        </button>
        <button
          onClick={() => setActiveInspectorTab('solver')}
          className={`px-3 py-1.5 rounded-lg transition-all ${activeInspectorTab === 'solver' ? 'bg-[#007ACC] text-white' : 'text-[#888888] hover:bg-[#2A2A2A]'}`}
        >
          Solver Convergence
        </button>
      </div>

      {/* Inspector Panel Viewport */}
      <div className="bg-[#121212] p-4 rounded-xl border border-[#2A2A2A] overflow-x-auto max-h-96">
        {activeInspectorTab === 'osgm' && (
          <div className="space-y-4 font-sans">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              <div className="bg-[#1E1E1E] p-3 rounded-lg border border-[#333333]">
                <div className="text-[#888888] text-[10px] uppercase font-bold">Solved Faces</div>
                <div className="text-lg font-mono font-bold text-amber-400">{Object.keys(pipeline.sgm.solvedFaces).length}</div>
              </div>
              <div className="bg-[#1E1E1E] p-3 rounded-lg border border-[#333333]">
                <div className="text-[#888888] text-[10px] uppercase font-bold">Spatial Bounds</div>
                <div className="text-xs font-mono text-[#D4D4D4] mt-1">{pipeline.osgm.spatialBounds.maxX - pipeline.osgm.spatialBounds.minX} x {pipeline.osgm.spatialBounds.maxY - pipeline.osgm.spatialBounds.minY}</div>
              </div>
              <div className="bg-[#1E1E1E] p-3 rounded-lg border border-[#333333]">
                <div className="text-[#888888] text-[10px] uppercase font-bold">Zero-Area Faces Removed</div>
                <div className="text-lg font-mono font-bold text-emerald-400">{pipeline.osgm.optimizationReport.zeroAreaFacesRemoved}</div>
              </div>
              <div className="bg-[#1E1E1E] p-3 rounded-lg border border-[#333333]">
                <div className="text-[#888888] text-[10px] uppercase font-bold">Optimizer Version</div>
                <div className="text-xs font-mono text-[#38BDF8] mt-1">{pipeline.osgm.provenance.optimizerVersion}</div>
              </div>
            </div>

            <pre className="font-mono text-[11px] text-[#CE9178] bg-[#000000] p-3 rounded-lg border border-[#222222] overflow-x-auto">
{JSON.stringify({
  dslId: pipeline.sgm.dslId,
  spatialBounds: pipeline.osgm.spatialBounds,
  benchmarkMetrics: pipeline.benchmark,
  optimizationReport: pipeline.osgm.optimizationReport
}, null, 2)}
            </pre>
          </div>
        )}

        {activeInspectorTab === 'verification' && (
          <div className="space-y-3 font-sans">
            <div className="flex items-center justify-between bg-[#1E1E1E] p-3 rounded-lg border border-[#333333]">
              <span className="font-bold">8-Stage Conformance Suite Status:</span>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${verification.isVerified ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-rose-500/20 text-rose-400'}`}>
                {verification.isVerified ? '✓ 100% VERIFIED' : 'FAILED'} ({verification.passedChecksCount}/{verification.totalChecksCount} checks)
              </span>
            </div>

            <div className="space-y-2">
              {verification.checks.map((check: any, idx: number) => (
                <div key={idx} className="flex items-center justify-between bg-[#181818] p-2.5 rounded-lg border border-[#262626] text-xs">
                  <div>
                    <div className="font-bold text-[#F3F3F3]">{check.name}</div>
                    <div className="text-[11px] text-[#888888]">{check.description}</div>
                  </div>
                  <span className={`font-mono font-bold text-xs ${check.passed ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {check.passed ? 'PASS' : 'FAIL'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeInspectorTab === 'dsl' && (
          <pre className="font-mono text-[11px] text-[#9CDCFE] bg-[#000000] p-3 rounded-lg border border-[#222222] overflow-x-auto">
{JSON.stringify(dsl, null, 2)}
          </pre>
        )}

        {activeInspectorTab === 'graph' && (
          <div className="space-y-2 font-mono text-[11px]">
            <div className="text-[#888888] font-sans font-bold">Topology Graph Nodes ({Object.keys(pipeline.graph.nodes).length}):</div>
            <pre className="text-[#DCDCAA] bg-[#000000] p-3 rounded-lg border border-[#222222] overflow-x-auto">
{JSON.stringify(Object.keys(pipeline.graph.nodes).slice(0, 15), null, 2)}
            </pre>
          </div>
        )}

        {activeInspectorTab === 'solver' && (
          <div className="space-y-3 font-sans text-xs">
            <div className="bg-[#1E1E1E] p-3 rounded-lg border border-[#333333] space-y-1 font-mono">
              <div>Iterations Count: <span className="text-amber-400">{pipeline.sgm.solverReport.iterationStats.iterationsCount}</span></div>
              <div>Final Residual Error: <span className="text-emerald-400">{pipeline.sgm.solverReport.iterationStats.finalResidualError}</span></div>
              <div>Analytical Solutions Count: <span className="text-[#38BDF8]">{pipeline.sgm.solverReport.analyticalSolutionsCount}</span></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
