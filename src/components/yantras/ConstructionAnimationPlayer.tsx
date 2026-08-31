'use client';

import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, RotateCcw, Cpu, Layers, Sparkles } from 'lucide-react';

export interface ConstructionStep {
  stepIndex: number;
  title: string;
  sanskritName: string;
  description: string;
  highlightLayerId: string;
  mathFormula: string;
}

export default function ConstructionAnimationPlayer({ dsl }: { dsl?: any }) {
  const steps: ConstructionStep[] = [
    {
      stepIndex: 1,
      title: 'Central Singularity',
      sanskritName: 'Bindu (बिन्दु)',
      description: 'The non-dimensional zero-point representing Parama Shiva-Shakti unmanifest consciousness at coordinate (500, 500).',
      highlightLayerId: 'bindu',
      mathFormula: 'P_{bindu} = (500, 500), \\text{Area} = 0'
    },
    {
      stepIndex: 2,
      title: 'Primary Trikona',
      sanskritName: 'Inner Triangle (सर्वसिद्धिप्रद चक्र)',
      description: 'Downward-pointing Shakti apex triangle enclosing Bindu. Establishes initial primordial expansion.',
      highlightLayerId: 'central_trikona',
      mathFormula: '\\triangle_{shakti} \\subset P_{bindu}'
    },
    {
      stepIndex: 3,
      title: '9 Interlocking Triangles',
      sanskritName: 'Navakona & 43 Triangles (अष्टार / दशार)',
      description: '4 upward Shiva and 5 downward Shakti primary triangles intersect to solve 43 sub-triangles.',
      highlightLayerId: 'chaturdasharam',
      mathFormula: '4 \\triangle_{shiva} \\cap 5 \\triangle_{shakti} \\Rightarrow 43 \\text{ Sub-triangles}'
    },
    {
      stepIndex: 4,
      title: 'Inner 8 Lotus Petals',
      sanskritName: 'Ashtadala Padma (सर्वसंक्षोभण चक्र)',
      description: '8 symmetrical lotus petals symbolizing the 8 Tattvas (Earth, Water, Fire, Air, Ether, Mind, Intellect, Ego).',
      highlightLayerId: 'ashtaragon',
      mathFormula: 'R_{petals8} = 1.35 \\times R_{triangles}, \\quad \\theta_k = k \\cdot \\frac{2\\pi}{8}'
    },
    {
      stepIndex: 5,
      title: 'Outer 16 Lotus Petals',
      sanskritName: 'Shodashadala Padma (सर्वाशापरिपूरक चक्र)',
      description: '16 lotus petals symbolizing 10 Indriyas (senses), 5 Elements, and Mind.',
      highlightLayerId: 'shodashadala',
      mathFormula: 'R_{petals16} = 1.62 \\times R_{petals8}, \\quad \\theta_m = m \\cdot \\frac{2\\pi}{16}'
    },
    {
      stepIndex: 6,
      title: '3 Concentric Circles',
      sanskritName: 'Trivalaya / Mekhala (त्रिवलय)',
      description: 'Three encircling rings binding the inner lotus structure and separating sacred interior from outer realm.',
      highlightLayerId: 'trivalaya',
      mathFormula: 'r_1 < r_2 < r_3'
    },
    {
      stepIndex: 7,
      title: 'Outer Square Sanctum',
      sanskritName: 'Bhupura 4 Gates (त्रैलोक्यमोहन चक्र)',
      description: '3-tiered outer square boundary with 4 cardinal entrance gates facing East, South, West, North.',
      highlightLayerId: 'bhupura',
      mathFormula: '\\text{Bhupura} = \\text{Boundary}(4 \\text{ Gates}, 3 \\text{ Step-Belts})'
    }
  ];

  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1);

  useEffect(() => {
    let timer: any = null;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentStep(prev => {
          if (prev >= steps.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 2500 / speedMultiplier);
    }
    return () => clearInterval(timer);
  }, [isPlaying, speedMultiplier, steps.length]);

  const activeStepObj = steps[currentStep];

  return (
    <div className="bg-[#FFFDF9] border border-[#EADBC8] rounded-[24px] p-6 shadow-sm space-y-6 font-sans">
      {/* Title Header */}
      <div className="flex items-center justify-between border-b border-[#EADBC8]/60 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#F28C28]/10 flex items-center justify-center text-[#F28C28]">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-outfit font-black text-[#4A2C17]">Construction Sequence Animator</h3>
            <p className="text-xs text-[#4A2C17]/60">Step-by-step animated geometrical derivation from Bindu to Bhupura</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-[#F28C28]">Step {currentStep + 1} of {steps.length}</span>
        </div>
      </div>

      {/* Main Animation Stage Viewport */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left: SVG Construction Animation Canvas */}
        <div className="lg:col-span-6 bg-[#121212] rounded-2xl p-6 flex flex-col items-center justify-center border border-[#2A2A2A] relative min-h-[300px]">
          <svg viewBox="0 0 1000 1000" className="w-full h-64 sm:h-72">
            {/* Step 7: Bhupura */}
            {currentStep >= 6 && (
              <g className="transition-all duration-700 opacity-100">
                <rect x="50" y="50" width="900" height="900" fill="none" stroke="#F28C28" strokeWidth="8" />
                <rect x="80" y="80" width="840" height="840" fill="none" stroke="#D8A44C" strokeWidth="4" />
              </g>
            )}

            {/* Step 6: Trivalaya Circles */}
            {currentStep >= 5 && (
              <g className="transition-all duration-700 opacity-100">
                <circle cx="500" cy="500" r="410" fill="none" stroke="#D8A44C" strokeWidth="3" />
                <circle cx="500" cy="500" r="390" fill="none" stroke="#D8A44C" strokeWidth="2" />
                <circle cx="500" cy="500" r="370" fill="none" stroke="#D8A44C" strokeWidth="2" />
              </g>
            )}

            {/* Step 5: 16 Lotus Petals */}
            {currentStep >= 4 && (
              <g className="transition-all duration-700 opacity-90">
                <circle cx="500" cy="500" r="340" fill="none" stroke="#F28C28" strokeWidth="2" strokeDasharray="6 6" />
                {Array.from({ length: 16 }).map((_, i) => {
                  const angle = (i * 360) / 16;
                  const rad = (angle * Math.PI) / 180;
                  const cx = 500 + 340 * Math.cos(rad);
                  const cy = 500 + 340 * Math.sin(rad);
                  return <circle key={i} cx={cx} cy={cy} r="35" fill="none" stroke="#F28C28" strokeWidth="1.5" opacity="0.6" />;
                })}
              </g>
            )}

            {/* Step 4: 8 Lotus Petals */}
            {currentStep >= 3 && (
              <g className="transition-all duration-700 opacity-90">
                {Array.from({ length: 8 }).map((_, i) => {
                  const angle = (i * 360) / 8;
                  const rad = (angle * Math.PI) / 180;
                  const cx = 500 + 240 * Math.cos(rad);
                  const cy = 500 + 240 * Math.sin(rad);
                  return <circle key={i} cx={cx} cy={cy} r="45" fill="none" stroke="#D8A44C" strokeWidth="2" opacity="0.8" />;
                })}
              </g>
            )}

            {/* Step 3: 9 Interlocking Triangles */}
            {currentStep >= 2 && (
              <g className="transition-all duration-700">
                <polygon points="500,220 280,680 720,680" fill="none" stroke="#F28C28" strokeWidth="3" />
                <polygon points="500,780 260,320 740,320" fill="none" stroke="#F28C28" strokeWidth="3" />
                <polygon points="500,290 330,640 670,640" fill="none" stroke="#D8A44C" strokeWidth="2" />
                <polygon points="500,710 310,380 690,380" fill="none" stroke="#D8A44C" strokeWidth="2" />
              </g>
            )}

            {/* Step 2: Inner Trikona */}
            {currentStep >= 1 && (
              <polygon points="500,620 400,430 600,430" fill="none" stroke="#F59E0B" strokeWidth="4" className="animate-pulse" />
            )}

            {/* Step 1: Bindu */}
            {currentStep >= 0 && (
              <circle cx="500" cy="500" r="10" fill="#F28C28" className="animate-ping" />
            )}
            <circle cx="500" cy="500" r="8" fill="#FFFFFF" />
          </svg>

          <div className="absolute bottom-3 left-4 text-[10px] font-mono text-amber-400">
            Active Layer: <span className="font-bold">{activeStepObj.highlightLayerId}</span>
          </div>
        </div>

        {/* Right: Step Description & Controls */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-[#FFF5EB] p-4 rounded-2xl border border-[#EADBC8] space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-outfit font-bold text-base text-[#4A2C17]">{activeStepObj.title}</span>
              <span className="font-serif font-semibold text-xs text-[#800020]">{activeStepObj.sanskritName}</span>
            </div>
            <p className="text-xs text-[#4A2C17]/90 leading-relaxed">{activeStepObj.description}</p>
            <div className="bg-[#FFFDF9] p-2.5 rounded-xl border border-[#EADBC8] text-[11px] font-mono text-[#F28C28] font-bold">
              {activeStepObj.mathFormula}
            </div>
          </div>

          {/* Animation Controls */}
          <div className="bg-[#FFFDF9] p-4 rounded-2xl border border-[#EADBC8] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
                disabled={currentStep === 0}
                className="p-2 rounded-xl bg-[#FFF5EB] border border-[#EADBC8] text-[#4A2C17] hover:bg-[#FFFDF9] disabled:opacity-40"
              >
                <SkipBack className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-4 py-2 rounded-xl bg-[#F28C28] text-white font-bold text-xs flex items-center gap-2 shadow-xs hover:brightness-105"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                {isPlaying ? 'Pause' : 'Play Sequence'}
              </button>

              <button
                onClick={() => setCurrentStep(prev => Math.min(steps.length - 1, prev + 1))}
                disabled={currentStep === steps.length - 1}
                className="p-2 rounded-xl bg-[#FFF5EB] border border-[#EADBC8] text-[#4A2C17] hover:bg-[#FFFDF9] disabled:opacity-40"
              >
                <SkipForward className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setIsPlaying(false);
                  setCurrentStep(0);
                }}
                className="p-2 rounded-xl bg-[#FFF5EB] border border-[#EADBC8] text-[#4A2C17] hover:bg-[#FFFDF9]"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Speed Multiplier */}
            <div className="flex items-center gap-1 text-xs font-bold text-[#4A2C17]">
              <span>Speed:</span>
              {[0.5, 1, 2].map(speed => (
                <button
                  key={speed}
                  onClick={() => setSpeedMultiplier(speed)}
                  className={`px-2 py-1 rounded-lg border text-[10px] ${
                    speedMultiplier === speed ? 'bg-[#F28C28] text-white border-[#F28C28]' : 'bg-[#FFF5EB] text-[#4A2C17] border-[#EADBC8]'
                  }`}
                >
                  {speed}x
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
