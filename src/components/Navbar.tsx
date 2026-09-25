'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sparkles, Compass, Flame, Layers, Box, ChevronRight, Zap } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/yantras', label: 'Yantra Darshan', icon: Compass },
    { href: '/chakras', label: 'षट्चक्र साधना', icon: Zap },
    { href: '/kundas', label: 'यज्ञ कुण्ड', icon: Flame },
    { href: '/patrasadana', label: 'पात्रसादन वेदी', icon: Layers },
    { href: '/puja', label: 'Upasana & Puja', icon: Sparkles },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#DDD1BE] px-4 lg:px-8 py-3 shadow-[0_2px_14px_rgba(140,90,32,0.06)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/yantras" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl bg-linear-to-br from-[#B38226] via-[#D9531E] to-[#8B1A24] p-0.5 shadow-md group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#FDFBF7] rounded-[14px] flex items-center justify-center border border-[#E8D9BF]">
              <Sparkles className="w-5 h-5 text-[#B38226] animate-pulse" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-cinzel text-lg font-black text-[#1E1711] tracking-wider">YANTRA</span>
              <span className="text-[10px] font-mono uppercase bg-[#F4EAD8] text-[#805713] px-2 py-0.5 rounded-full border border-[#C5A059]/40 font-bold">DARSHAN</span>
            </div>
            <p className="text-[11px] text-[#7D6B57] tracking-wide font-medium">Sacred Geometry & Vedic Upasana</p>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-2 bg-[#F5EFE4] p-1.5 rounded-2xl border border-[#DDD1BE]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href === '/yantras' && pathname === '/');
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs transition-all ${
                  isActive
                    ? 'bg-[#FDFBF7] text-[#805713] border border-[#C5A059] shadow-sm font-bold'
                    : 'text-[#5C4D3C] hover:text-[#1E1711] hover:bg-[#EFE7DA] font-medium'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#B38226]' : 'text-[#8A7965]'}`} />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <Link
            href="/yantras"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-linear-to-r from-[#B38226] via-[#D9531E] to-[#B38226] text-white font-bold text-xs shadow-md hover:brightness-105 transition-all hover:scale-102"
          >
            <span>यन्त्र दर्शन</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
