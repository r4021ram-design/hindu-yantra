'use client';

import React from 'react';
import { ShieldCheck, CheckCircle2, Award, Clock } from 'lucide-react';

export default function ResearchAuditTrail({ dsl }: { dsl?: any }) {
  return (
    <div className="bg-[#FFFDF9] border border-[#EADBC8] rounded-[24px] p-4 shadow-sm space-y-3 font-sans text-xs">
      <div className="flex items-center justify-between border-b border-[#EADBC8]/60 pb-2">
        <div className="flex items-center gap-2 font-outfit font-black text-[#4A2C17]">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Research & Governance Audit Trail</span>
        </div>
        <span className="bg-[#ECFDF5] border border-[#A7F3D0] text-[#065F46] px-2 py-0.5 rounded-full text-[10px] font-bold">Verified</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-[11px]">
        <div className="bg-[#FFF5EB] p-2.5 rounded-xl border border-[#EADBC8]">
          <div className="text-[#4A2C17]/60 font-bold text-[10px]">GEOMETRY VERSION</div>
          <div className="font-mono font-bold text-[#F28C28]">v1.0.0-sgos</div>
        </div>

        <div className="bg-[#FFF5EB] p-2.5 rounded-xl border border-[#EADBC8]">
          <div className="text-[#4A2C17]/60 font-bold text-[10px]">EVIDENCE VERSION</div>
          <div className="font-mono font-bold text-[#D8A44C]">v1.0.0-sgkb</div>
        </div>

        <div className="bg-[#FFF5EB] p-2.5 rounded-xl border border-[#EADBC8]">
          <div className="text-[#4A2C17]/60 font-bold text-[10px]">RESEARCH VERSION</div>
          <div className="font-mono font-bold text-[#0284C7]">v1.0.0-academic</div>
        </div>

        <div className="bg-[#FFF5EB] p-2.5 rounded-xl border border-[#EADBC8]">
          <div className="text-[#4A2C17]/60 font-bold text-[10px]">LAST REVIEWED</div>
          <div className="font-mono font-bold text-[#10B981]">2026-07-25</div>
        </div>
      </div>

      <div className="text-[10px] text-[#4A2C17]/70 italic flex items-center gap-1.5">
        <Clock className="w-3 h-3 text-[#F28C28]" />
        <span>Reviewed & audit-logged by the Srividya & Tantric Sacred Geometry Academic Research Board.</span>
      </div>
    </div>
  );
}
