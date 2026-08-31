'use client';

import React, { useState } from 'react';
import {
  ShieldCheck, Lock, Unlock, Edit3, Globe, History, CheckCircle2, AlertTriangle, FileText, Plus, Save, RotateCcw, Award, Layers
} from 'lucide-react';
import { SGKBPublishingEngine, UserRole, ScholarlyContentItem, ContentStatus, ImmutableSnapshot } from '@/lib/sgkb/sgkb-publishing-engine';
import { TranslationMemoryEngine, SupportedLanguage } from '@/lib/sgkb/translation-memory';

import AIAssistedAuthoringPanel from '@/components/sgkb/AIAssistedAuthoringPanel';
import EditorialAnalyticsDashboard from '@/components/sgkb/EditorialAnalyticsDashboard';

export default function SGKBStudioApp() {
  const [userRole, setUserRole] = useState<UserRole>('Editor');
  const [activeTab, setActiveTab] = useState<'authoring' | 'translation' | 'review' | 'ai_tools' | 'analytics' | 'snapshots'>('authoring');

  const [items, setItems] = useState<ScholarlyContentItem[]>([
    {
      id: 'item_1',
      type: 'scripture_excerpt',
      title: 'Soundarya Lahari Verse 11',
      sanskritText: 'चतुर्भिः श्रीकण्ठैः शिवयुवतिभिः पञ्चभिरपि प्रभिन्नाभिः शंभोर्नवभिरपि मूलप्रकृतिभिः...',
      iastText: 'Caturbhiḥ śrīkaṇṭhaiḥ śivayuvatibhiḥ pañcabhirapi...',
      englishTranslation: 'With 4 Shiva triangles and 5 Shakti triangles forming 9 primary Mula-Prakriti roots...',
      hindiTranslation: '४ शिव तथा ५ शक्ति त्रिकोणों के सम्मिश्रण से नव मूलप्रकृति उत्पन्न होती है...',
      gujaratiTranslation: '૪ શિવ અને ૫ શક્તિ ત્રિકોણના મિશ્રણથી ૯ મૂળ પ્રકૃતિઓ ઉત્પન્ન થાય છે...',
      commentary: 'Canonical derivation verse establishing the 43 sub-triangle topological structure of the Shri Yantra.',
      evidenceTier: 'canonical',
      confidenceLevel: 'High',
      isDisputed: false,
      status: 'Published Snapshot',
      version: 1,
      author: 'Pandit S. Sharma',
      lastUpdated: '2026-07-25',
      changeLog: [
        { version: 1, timestamp: '2026-07-24', editor: 'Pandit S. Sharma', summary: 'Initial canonical verse authoring.' }
      ]
    },
    {
      id: 'item_2',
      type: 'geometry_explanation',
      title: 'Bindu Centroid Residual Proof',
      englishTranslation: 'The central singularity point Bindu is calculated with numerical precision < 10^-10.',
      commentary: 'Analytical geometry verification of inner triangle centroid alignment.',
      evidenceTier: 'research',
      confidenceLevel: 'Moderate',
      isDisputed: true,
      disputeRationale: 'Alternative lineage manuals place Bindu 0.05mm offset to represent unmanifest polarity shift.',
      status: 'Draft',
      version: 1,
      author: 'Dr. A. Roy',
      lastUpdated: '2026-07-25',
      changeLog: [
        { version: 1, timestamp: '2026-07-25', editor: 'Dr. A. Roy', summary: 'Drafted disputed analytical research paper.' }
      ]
    }
  ]);

  const [selectedItemId, setSelectedItemId] = useState<string>('item_1');
  const [snapshots, setSnapshots] = useState<ImmutableSnapshot[]>([
    SGKBPublishingEngine.createSnapshot('sri_yantra', items, 'Chief Editor', 'v1.0.0-canonical')
  ]);

  const activeItem = items.find(i => i.id === selectedItemId) || items[0];

  const handleUpdateItem = (field: keyof ScholarlyContentItem, value: any) => {
    if (!SGKBPublishingEngine.hasPermission(userRole, 'draft') && !SGKBPublishingEngine.hasPermission(userRole, 'translate')) {
      alert(`Role ${userRole} lacks permission to edit content.`);
      return;
    }
    setItems(prev => prev.map(item => item.id === selectedItemId ? { ...item, [field]: value } : item));
  };

  const handleStatusTransition = (targetStatus: ContentStatus) => {
    if (!SGKBPublishingEngine.hasPermission(userRole, 'review') && !SGKBPublishingEngine.hasPermission(userRole, 'publish')) {
      alert(`Role ${userRole} lacks permission to transition lifecycle status.`);
      return;
    }
    const updated = SGKBPublishingEngine.transitionStatus(activeItem, targetStatus, userRole, `Status updated by ${userRole}`);
    setItems(prev => prev.map(item => item.id === selectedItemId ? updated : item));
  };

  const handleCreateSnapshot = () => {
    if (!SGKBPublishingEngine.hasPermission(userRole, 'publish')) {
      alert(`Role ${userRole} lacks permission to publish snapshots.`);
      return;
    }
    const newTag = `v1.0.${snapshots.length}-release`;
    const snap = SGKBPublishingEngine.createSnapshot('sri_yantra', items, userRole, newTag);
    setSnapshots(prev => [snap, ...prev]);
    alert(`Published Immutable Snapshot ${snap.snapshotId} successfully! Digital Museum updated.`);
  };

  return (
    <div className="min-h-screen bg-[#FAF4EB] text-[#4A2C17] font-sans pb-12">
      {/* Top Header Banner for Studio */}
      <header className="sticky top-0 z-50 px-6 py-4 bg-linear-to-b from-[#FFFDF9]/95 via-[#FFF9F2]/90 to-[#FFFDF9]/95 backdrop-blur-xl border-b border-[#EADBC8] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-linear-to-tr from-[#1E1E1E] to-[#4A2C17] flex items-center justify-center text-amber-400 shadow-md">
            <Edit3 className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-outfit font-black text-[#4A2C17] leading-tight tracking-wide flex items-center gap-2">
              <span>SGKB Studio & Publishing Platform</span>
              <span className="text-[#F28C28] text-[10px] font-bold px-2.5 py-0.5 bg-[#FFF9F2] border border-[#EADBC8] rounded-full uppercase tracking-widest">Admin Workspace</span>
            </h1>
            <p className="text-xs text-[#4A2C17]/60">Independent authoring, multilingual translation, evidence review, and snapshot publishing system</p>
          </div>
        </div>

        {/* Role Switcher */}
        <div className="flex items-center gap-2 bg-[#FFF5EB] p-2 rounded-2xl border border-[#EADBC8] text-xs font-bold">
          <ShieldCheck className="w-4 h-4 text-[#F28C28]" />
          <span>Role:</span>
          <select
            value={userRole}
            onChange={e => setUserRole(e.target.value as UserRole)}
            className="bg-[#FFFDF9] border border-[#EADBC8] text-[#4A2C17] rounded-xl px-2.5 py-1 outline-none font-bold"
          >
            <option value="Viewer">Viewer (Read-Only)</option>
            <option value="Student">Student</option>
            <option value="Researcher">Researcher</option>
            <option value="Translator">Translator</option>
            <option value="Editor">Editor</option>
            <option value="Publisher">Publisher</option>
            <option value="Administrator">Administrator</option>
          </select>
        </div>
      </header>

      {/* Main Studio Navigation Tabs */}
      <div className="bg-[#FFFDF9] border-b border-[#EADBC8] px-6 py-2 flex items-center gap-2 overflow-x-auto text-xs font-outfit font-bold shadow-xs">
        <button
          onClick={() => setActiveTab('authoring')}
          className={`px-4 py-1.5 rounded-full border transition-all ${activeTab === 'authoring' ? 'bg-[#F28C28] text-white border-[#F28C28]' : 'bg-[#FFF5EB] text-[#4A2C17] border-[#EADBC8]'}`}
        >
          ✍️ Content Authoring Studio
        </button>
        <button
          onClick={() => setActiveTab('translation')}
          className={`px-4 py-1.5 rounded-full border transition-all ${activeTab === 'translation' ? 'bg-[#F28C28] text-white border-[#F28C28]' : 'bg-[#FFF5EB] text-[#4A2C17] border-[#EADBC8]'}`}
        >
          🌐 Multilingual Translation Tracks
        </button>
        <button
          onClick={() => setActiveTab('review')}
          className={`px-4 py-1.5 rounded-full border transition-all ${activeTab === 'review' ? 'bg-[#F28C28] text-white border-[#F28C28]' : 'bg-[#FFF5EB] text-[#4A2C17] border-[#EADBC8]'}`}
        >
          ⚖️ Editorial Review Board
        </button>
        <button
          onClick={() => setActiveTab('ai_tools')}
          className={`px-4 py-1.5 rounded-full border transition-all ${activeTab === 'ai_tools' ? 'bg-[#F28C28] text-white border-[#F28C28]' : 'bg-[#FFF5EB] text-[#4A2C17] border-[#EADBC8]'}`}
        >
          🤖 AI Editorial Tools
        </button>
        <button
          onClick={() => setActiveTab('analytics')}
          className={`px-4 py-1.5 rounded-full border transition-all ${activeTab === 'analytics' ? 'bg-[#F28C28] text-white border-[#F28C28]' : 'bg-[#FFF5EB] text-[#4A2C17] border-[#EADBC8]'}`}
        >
          📊 Analytics Dashboard
        </button>
        <button
          onClick={() => setActiveTab('snapshots')}
          className={`px-4 py-1.5 rounded-full border transition-all ${activeTab === 'snapshots' ? 'bg-[#1E1E1E] text-amber-400 border-[#1E1E1E]' : 'bg-[#FFF5EB] text-[#4A2C17] border-[#EADBC8]'}`}
        >
          📦 Immutable Snapshots
        </button>
      </div>

      {/* Workspace Body */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {activeTab === 'ai_tools' && <AIAssistedAuthoringPanel selectedYantraId={selectedItemId} />}
        {activeTab === 'analytics' && <EditorialAnalyticsDashboard />}

        {/* Tab 1: Authoring Studio */}
        {activeTab === 'authoring' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Content Item Selector */}
            <aside className="lg:col-span-4 bg-[#FFFDF9] border border-[#EADBC8] rounded-[24px] p-4 space-y-3 shadow-xs">
              <div className="flex items-center justify-between border-b border-[#EADBC8]/60 pb-2 text-xs font-outfit font-bold text-[#4A2C17]">
                <span>Knowledge Base Items</span>
                <span className="bg-[#FFF5EB] border border-[#EADBC8] text-[#F28C28] px-2 py-0.5 rounded-full text-[10px]">{items.length}</span>
              </div>

              <div className="space-y-2">
                {items.map(item => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedItemId(item.id)}
                    className={`w-full text-left p-3 rounded-2xl border transition-all ${
                      item.id === selectedItemId ? 'bg-[#FFF5EB] border-[#F28C28] font-bold' : 'bg-[#FFFDF9] border-[#EADBC8] hover:bg-[#FFF5EB]/50'
                    }`}
                  >
                    <div className="text-xs font-outfit text-[#4A2C17]">{item.title}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${
                        item.status === 'Published Snapshot' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {item.status}
                      </span>
                      {item.isDisputed && <span className="bg-rose-100 text-rose-800 px-1.5 py-0.5 rounded-full text-[9px] font-bold">Disputed</span>}
                    </div>
                  </button>
                ))}
              </div>
            </aside>

            {/* Right: Rich Editor */}
            <main className="lg:col-span-8 bg-[#FFFDF9] border border-[#EADBC8] rounded-[24px] p-6 space-y-4 shadow-xs">
              <div className="flex items-center justify-between border-b border-[#EADBC8]/60 pb-3">
                <div className="font-outfit font-bold text-base text-[#4A2C17]">Editing Item: {activeItem.title}</div>
                <div className="text-xs text-[#D8A44C] font-mono font-bold">Version {activeItem.version}</div>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="font-bold text-[#4A2C17]">Title & Heading:</label>
                  <input
                    type="text"
                    value={activeItem.title}
                    onChange={e => handleUpdateItem('title', e.target.value)}
                    className="w-full mt-1 bg-[#FFF5EB] border border-[#EADBC8] rounded-xl px-3 py-2 text-xs font-bold text-[#4A2C17] outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-[#4A2C17]">Evidence Tier:</label>
                    <select
                      value={activeItem.evidenceTier}
                      onChange={e => handleUpdateItem('evidenceTier', e.target.value)}
                      className="w-full mt-1 bg-[#FFF5EB] border border-[#EADBC8] rounded-xl px-3 py-2 text-xs font-bold outline-none"
                    >
                      <option value="canonical">📜 Canonical Scripture</option>
                      <option value="traditional">📿 Traditional Lineage</option>
                      <option value="research">🔬 Research Analytical</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-bold text-[#4A2C17]">Confidence Level:</label>
                    <select
                      value={activeItem.confidenceLevel}
                      onChange={e => handleUpdateItem('confidenceLevel', e.target.value)}
                      className="w-full mt-1 bg-[#FFF5EB] border border-[#EADBC8] rounded-xl px-3 py-2 text-xs font-bold outline-none"
                    >
                      <option value="High">High Confidence</option>
                      <option value="Moderate">Moderate Confidence</option>
                      <option value="Speculative">Speculative</option>
                    </select>
                  </div>
                </div>

                {/* Disputed Evidence Toggle */}
                <div className="bg-[#FFF5EB] p-3 rounded-2xl border border-[#EADBC8] space-y-2">
                  <label className="flex items-center gap-2 font-bold text-xs text-[#4A2C17]">
                    <input
                      type="checkbox"
                      checked={activeItem.isDisputed}
                      onChange={e => handleUpdateItem('isDisputed', e.target.checked)}
                      className="rounded"
                    />
                    <span>Flag as Disputed / Uncertain Evidence</span>
                  </label>
                  {activeItem.isDisputed && (
                    <textarea
                      placeholder="Enter rationale for disputed evidence..."
                      value={activeItem.disputeRationale || ''}
                      onChange={e => handleUpdateItem('disputeRationale', e.target.value)}
                      className="w-full bg-[#FFFDF9] border border-[#EADBC8] rounded-xl p-2 text-xs outline-none"
                    />
                  )}
                </div>

                <div>
                  <label className="font-bold text-[#4A2C17]">Commentary & Notes:</label>
                  <textarea
                    rows={3}
                    value={activeItem.commentary || ''}
                    onChange={e => handleUpdateItem('commentary', e.target.value)}
                    className="w-full mt-1 bg-[#FFF5EB] border border-[#EADBC8] rounded-xl p-3 text-xs outline-none"
                  />
                </div>
              </div>
            </main>
          </div>
        )}

        {/* Tab 2: Multilingual Translation Tracks */}
        {activeTab === 'translation' && (
          <div className="bg-[#FFFDF9] border border-[#EADBC8] rounded-[24px] p-6 space-y-6 shadow-xs">
            <div className="flex items-center justify-between border-b border-[#EADBC8]/60 pb-3">
              <div className="flex items-center gap-2 font-outfit font-black text-base text-[#4A2C17]">
                <Globe className="w-5 h-5 text-[#F28C28]" />
                <span>Multilingual Translation Track Editor ({activeItem.title})</span>
              </div>
            </div>

            {/* Translation Memory Dictionary Info Box */}
            <div className="bg-[#FFF5EB] p-4 rounded-2xl border border-[#EADBC8] text-xs space-y-2">
              <div className="font-outfit font-bold text-[#F28C28]">Canonical Translation Memory Dictionary</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-[11px]">
                {Object.values(TranslationMemoryEngine.getCanonicalDictionary()).map(t => (
                  <div key={t.key} className="bg-[#FFFDF9] p-2 rounded-xl border border-[#EADBC8]">
                    <span className="font-bold text-[#4A2C17]">{t.en}: </span>
                    <span className="text-[#800020] font-serif">{t.sa}</span> ({t.iast})
                  </div>
                ))}
              </div>
            </div>

            {/* Language Track Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
              <div>
                <label className="font-bold text-[#800020]">Sanskrit (Devanagari):</label>
                <textarea
                  rows={2}
                  value={activeItem.sanskritText || ''}
                  onChange={e => handleUpdateItem('sanskritText', e.target.value)}
                  className="w-full mt-1 bg-[#FFF5EB] border border-[#EADBC8] rounded-xl p-2.5 font-serif text-xs outline-none"
                />
              </div>

              <div>
                <label className="font-bold text-[#4A2C17]">IAST Transliteration:</label>
                <textarea
                  rows={2}
                  value={activeItem.iastText || ''}
                  onChange={e => handleUpdateItem('iastText', e.target.value)}
                  className="w-full mt-1 bg-[#FFF5EB] border border-[#EADBC8] rounded-xl p-2.5 font-serif text-xs outline-none"
                />
              </div>

              <div>
                <label className="font-bold text-[#4A2C17]">English Translation:</label>
                <textarea
                  rows={2}
                  value={activeItem.englishTranslation || ''}
                  onChange={e => handleUpdateItem('englishTranslation', e.target.value)}
                  className="w-full mt-1 bg-[#FFF5EB] border border-[#EADBC8] rounded-xl p-2.5 text-xs outline-none"
                />
              </div>

              <div>
                <label className="font-bold text-[#4A2C17]">Hindi Translation (हिन्दी):</label>
                <textarea
                  rows={2}
                  value={activeItem.hindiTranslation || ''}
                  onChange={e => handleUpdateItem('hindiTranslation', e.target.value)}
                  className="w-full mt-1 bg-[#FFF5EB] border border-[#EADBC8] rounded-xl p-2.5 text-xs outline-none"
                />
              </div>

              <div>
                <label className="font-bold text-[#4A2C17]">Gujarati Translation (ગુજરાતી):</label>
                <textarea
                  rows={2}
                  value={activeItem.gujaratiTranslation || ''}
                  onChange={e => handleUpdateItem('gujaratiTranslation', e.target.value)}
                  className="w-full mt-1 bg-[#FFF5EB] border border-[#EADBC8] rounded-xl p-2.5 text-xs outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Editorial Review Board */}
        {activeTab === 'review' && (
          <div className="bg-[#FFFDF9] border border-[#EADBC8] rounded-[24px] p-6 space-y-6 shadow-xs">
            <div className="font-outfit font-black text-base text-[#4A2C17] border-b border-[#EADBC8]/60 pb-3">
              Editorial Review Lifecycle Board ({activeItem.title})
            </div>

            <div className="bg-[#FFF5EB] p-4 rounded-2xl border border-[#EADBC8] space-y-3">
              <div className="text-xs font-bold text-[#4A2C17]">Current Status: <span className="text-[#F28C28]">{activeItem.status}</span></div>

              <div className="flex flex-wrap gap-2 text-xs font-bold">
                {(['Draft', 'Technical Review', 'Editorial Review', 'Scriptural Review', 'Published Snapshot', 'Archived'] as ContentStatus[]).map(status => (
                  <button
                    key={status}
                    onClick={() => handleStatusTransition(status)}
                    className={`px-3 py-1.5 rounded-xl border transition-all ${
                      activeItem.status === status ? 'bg-[#F28C28] text-white border-[#F28C28]' : 'bg-[#FFFDF9] text-[#4A2C17] border-[#EADBC8]'
                    }`}
                  >
                    Transition to {status}
                  </button>
                ))}
              </div>
            </div>

            {/* Change History Audit Log */}
            <div className="space-y-2">
              <div className="font-outfit font-bold text-xs text-[#4A2C17]">Audit Revision History Log</div>
              <div className="space-y-2">
                {activeItem.changeLog.map((log, idx) => (
                  <div key={idx} className="bg-[#FFF5EB]/60 p-3 rounded-xl border border-[#EADBC8] text-xs space-y-1">
                    <div className="flex items-center justify-between text-[11px] text-[#D8A44C] font-bold">
                      <span>Version {log.version} - Editor: {log.editor}</span>
                      <span>{log.timestamp}</span>
                    </div>
                    <div className="text-[#4A2C17]">{log.summary}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Immutable Published Snapshots */}
        {activeTab === 'snapshots' && (
          <div className="bg-[#FFFDF9] border border-[#EADBC8] rounded-[24px] p-6 space-y-6 shadow-xs">
            <div className="flex items-center justify-between border-b border-[#EADBC8]/60 pb-3">
              <div>
                <h3 className="font-outfit font-black text-base text-[#4A2C17]">Immutable Snapshot Publisher</h3>
                <p className="text-xs text-[#4A2C17]/60">Publish immutable knowledge base snapshots for public Digital Museum consumption</p>
              </div>

              <button
                onClick={handleCreateSnapshot}
                className="px-5 py-2.5 rounded-xl bg-[#F28C28] text-white font-bold text-xs flex items-center gap-2 shadow-xs hover:brightness-105"
              >
                <Save className="w-4 h-4" /> Publish New Snapshot
              </button>
            </div>

            <div className="space-y-3">
              {snapshots.map(snap => (
                <div key={snap.snapshotId} className="bg-[#FFF5EB]/60 p-4 rounded-2xl border border-[#EADBC8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <div className="font-outfit font-bold text-sm text-[#4A2C17]">{snap.snapshotId} ({snap.versionTag})</div>
                    <div className="text-xs text-[#4A2C17]/70">Published by: {snap.publisher} on {snap.publishedAt}</div>
                    <div className="text-[10px] font-mono text-[#D8A44C] mt-1">Hash: {snap.deterministicHash}</div>
                  </div>

                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    Active in Museum
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
