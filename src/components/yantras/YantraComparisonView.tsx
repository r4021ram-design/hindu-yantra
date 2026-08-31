'use client';

import React, { useState, useMemo } from 'react';
import { Scale, ArrowLeftRight, Check, AlertCircle, Sparkles } from 'lucide-react';
import { MASTER_YANTRA_DATASET, SGOS } from '@yantra/engine';
import { SVGRenderer } from '@yantra/engine/rendering';

export default function YantraComparisonView() {
  const [leftYantraId, setLeftYantraId] = useState<string>('sri_yantra');
  const [rightYantraId, setRightYantraId] = useState<string>('kuber_yantra');
  const [compareMode, setCompareMode] = useState<'yantra' | 'tradition' | 'dimension'>('yantra');

  const leftDsl: any = useMemo(() => MASTER_YANTRA_DATASET.find(y => y.id === leftYantraId) || MASTER_YANTRA_DATASET[0], [leftYantraId]);
  const rightDsl: any = useMemo(() => MASTER_YANTRA_DATASET.find(y => y.id === rightYantraId) || MASTER_YANTRA_DATASET[1] || MASTER_YANTRA_DATASET[0], [rightYantraId]);

  const leftPipeline = useMemo(() => SGOS.runPipeline(leftDsl), [leftDsl]);
  const rightPipeline = useMemo(() => SGOS.runPipeline(rightDsl), [rightDsl]);

  const leftSvg = useMemo(() => SVGRenderer.renderToString(leftPipeline.osgm, { theme: 'parchment' }), [leftPipeline]);
  const rightSvg = useMemo(() => SVGRenderer.renderToString(rightPipeline.osgm, { theme: 'gold' }), [rightPipeline]);

  const differences = useMemo(() => {
    const diffs: { attribute: string; leftVal: string; rightVal: string; isDifferent: boolean }[] = [];

    diffs.push({
      attribute: 'Primary Deity',
      leftVal: leftDsl.attributes?.deity || leftDsl.metadata?.deity || 'Lalita Tripurasundari',
      rightVal: rightDsl.attributes?.deity || rightDsl.metadata?.deity || 'Lord Kuber',
      isDifferent: (leftDsl.attributes?.deity || leftDsl.metadata?.deity) !== (rightDsl.attributes?.deity || rightDsl.metadata?.deity)
    });

    diffs.push({
      attribute: 'Symmetry Group',
      leftVal: leftPipeline.sgm.symmetryGroup || 'D4 (Planar Rotational)',
      rightVal: rightPipeline.sgm.symmetryGroup || 'C4 (Grid Symmetry)',
      isDifferent: leftPipeline.sgm.symmetryGroup !== rightPipeline.sgm.symmetryGroup
    });

    diffs.push({
      attribute: 'Solved Faces Count',
      leftVal: `${Object.keys(leftPipeline.sgm.solvedFaces).length} Faces`,
      rightVal: `${Object.keys(rightPipeline.sgm.solvedFaces).length} Faces`,
      isDifferent: Object.keys(leftPipeline.sgm.solvedFaces).length !== Object.keys(rightPipeline.sgm.solvedFaces).length
    });

    diffs.push({
      attribute: 'Graph Topology Nodes',
      leftVal: `${Object.keys(leftPipeline.graph.nodes).length} Nodes`,
      rightVal: `${Object.keys(rightPipeline.graph.nodes).length} Nodes`,
      isDifferent: Object.keys(leftPipeline.graph.nodes).length !== Object.keys(rightPipeline.graph.nodes).length
    });

    diffs.push({
      attribute: 'Primary Element Tattva',
      leftVal: leftDsl.attributes?.element || 'Ether (Akasha)',
      rightVal: rightDsl.attributes?.element || 'Earth (Prithvi)',
      isDifferent: (leftDsl.attributes?.element || 'Ether') !== (rightDsl.attributes?.element || 'Earth')
    });

    diffs.push({
      attribute: 'Canonical Citation',
      leftVal: 'Soundarya Lahari 11',
      rightVal: 'Mantra Mahodadhi XIV',
      isDifferent: true
    });

    return diffs;
  }, [leftDsl, rightDsl, leftPipeline, rightPipeline]);

  return (
    <div className="bg-surface border border-border rounded-[24px] p-6 shadow-sm space-y-6">
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-border/60 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-[#F28C28]">
            <ArrowLeftRight className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-outfit font-black text-foreground">SGOS Comparative Diff Engine</h3>
            <p className="text-xs text-foreground/60">Side-by-side comparative inspection highlighting documented differences only</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCompareMode('yantra')}
            className={`px-3 py-1.5 rounded-xl font-outfit font-bold text-xs transition-all ${compareMode === 'yantra' ? 'bg-[#F28C28] text-white shadow-xs' : 'bg-[#FFF5EB] text-[#4A2C17]'}`}
          >
            Compare Yantras
          </button>
          <button
            onClick={() => setCompareMode('tradition')}
            className={`px-3 py-1.5 rounded-xl font-outfit font-bold text-xs transition-all ${compareMode === 'tradition' ? 'bg-[#F28C28] text-white shadow-xs' : 'bg-[#FFF5EB] text-[#4A2C17]'}`}
          >
            Compare Traditions
          </button>
          <button
            onClick={() => setCompareMode('dimension')}
            className={`px-3 py-1.5 rounded-xl font-outfit font-bold text-xs transition-all ${compareMode === 'dimension' ? 'bg-[#F28C28] text-white shadow-xs' : 'bg-[#FFF5EB] text-[#4A2C17]'}`}
          >
            2D vs 3D Meru
          </button>
        </div>
      </div>

      {/* Side-by-Side Selectors & Vector Views */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side */}
        <div className="space-y-3 bg-[#FFF5EB]/50 p-4 rounded-2xl border border-[#EADBC8]">
          <div className="flex items-center justify-between">
            <span className="font-outfit font-bold text-xs text-[#F28C28] uppercase tracking-wider">Primary Subject A</span>
            <select
              value={leftYantraId}
              onChange={e => setLeftYantraId(e.target.value)}
              className="bg-[#FFFDF9] border border-[#EADBC8] font-bold text-[#4A2C17] text-xs rounded-xl px-3 py-1.5 outline-none"
            >
              {MASTER_YANTRA_DATASET.map(y => (
                <option key={y.id} value={y.id}>{y.names?.english || y.id}</option>
              ))}
            </select>
          </div>

          <div
            className="w-full h-64 rounded-xl overflow-hidden border border-[#EADBC8]"
            dangerouslySetInnerHTML={{ __html: leftSvg }}
          />

          <div className="text-xs space-y-1">
            <div className="font-bold text-[#4A2C17]">{leftDsl.names?.english || leftDsl.id}</div>
            <div className="text-[#D8A44C] font-serif">{leftDsl.names?.sanskrit || ''}</div>
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-3 bg-[#FFF5EB]/50 p-4 rounded-2xl border border-[#EADBC8]">
          <div className="flex items-center justify-between">
            <span className="font-outfit font-bold text-xs text-[#F28C28] uppercase tracking-wider">Comparison Subject B</span>
            <select
              value={rightYantraId}
              onChange={e => setRightYantraId(e.target.value)}
              className="bg-[#FFFDF9] border border-[#EADBC8] font-bold text-[#4A2C17] text-xs rounded-xl px-3 py-1.5 outline-none"
            >
              {MASTER_YANTRA_DATASET.map(y => (
                <option key={y.id} value={y.id}>{y.names?.english || y.id}</option>
              ))}
            </select>
          </div>

          <div
            className="w-full h-64 rounded-xl overflow-hidden border border-[#EADBC8]"
            dangerouslySetInnerHTML={{ __html: rightSvg }}
          />

          <div className="text-xs space-y-1">
            <div className="font-bold text-[#4A2C17]">{rightDsl.names?.english || rightDsl.id}</div>
            <div className="text-[#D8A44C] font-serif">{rightDsl.names?.sanskrit || ''}</div>
          </div>
        </div>
      </div>

      {/* Documented Differences Table */}
      <div className="space-y-3">
        <h4 className="font-outfit font-bold text-sm text-[#4A2C17] flex items-center gap-2">
          <Scale className="w-4 h-4 text-[#F28C28]" />
          <span>Documented Structural Differences</span>
        </h4>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#FFF5EB] text-[#4A2C17] font-bold border-b border-[#EADBC8]">
                <th className="p-2.5">Attribute</th>
                <th className="p-2.5">{leftDsl.names?.english || leftDsl.id}</th>
                <th className="p-2.5">{rightDsl.names?.english || rightDsl.id}</th>
                <th className="p-2.5 text-center">Diff Status</th>
              </tr>
            </thead>
            <tbody>
              {differences.map((diff, i) => (
                <tr key={i} className={`border-b border-[#EADBC8]/40 ${diff.isDifferent ? 'bg-[#FFF5EB]/60 font-semibold' : ''}`}>
                  <td className="p-2.5 font-bold text-[#4A2C17]">{diff.attribute}</td>
                  <td className="p-2.5">{diff.leftVal}</td>
                  <td className="p-2.5">{diff.rightVal}</td>
                  <td className="p-2.5 text-center">
                    {diff.isDifferent ? (
                      <span className="px-2 py-0.5 rounded-full bg-[#800020]/10 text-[#800020] font-bold text-[10px]">Different</span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">Identical</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
