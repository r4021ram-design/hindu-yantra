'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sparkles, Compass, Flame, Layers, Box, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Digital Museum', icon: Layers },
    { href: '/yantras', label: '3D Yantra Studio', icon: Box },
    { href: '/puja', label: 'Upasana & Puja', icon: Flame },
    { href: '/sgkb-studio', label: 'SGKB Studio', icon: Compass },
  ];

  return (
    <header className="sticky top-0 z-50 museum-glass border-b border-[#2A241E] px-4 lg:px-8 py-3.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl bg-linear-to-br from-[#D4AF37] via-[#FF9933] to-[#800020] p-0.5 shadow-lg group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0A0908] rounded-[14px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#D4AF37] animate-pulse" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif text-lg font-bold text-[#FFF9F2] tracking-wide">YANTRA</span>
              <span className="text-[10px] font-mono uppercase bg-[#D4AF37]/15 text-[#D4AF37] px-2 py-0.5 rounded-full border border-[#D4AF37]/30">Studio</span>
            </div>
            <p className="text-[11px] text-[#A0988A] tracking-wider">Sacred Geometry & Vedic Upasana</p>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 bg-[#141210]/90 p-1.5 rounded-2xl border border-[#2A241E]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-linear-to-r from-[#D4AF37]/20 to-[#FF9933]/20 text-[#D4AF37] border border-[#D4AF37]/40 shadow-sm font-semibold'
                    : 'text-[#C5BDB0] hover:text-[#FFF9F2] hover:bg-[#1E1A16]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#D4AF37]' : 'text-[#8A8070]'}`} />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <Link
            href="/yantras"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-linear-to-r from-[#D4AF37] to-[#FF9933] text-[#0A0908] font-bold text-xs shadow-md hover:brightness-110 transition-all hover:scale-102"
          >
            <span>Launch Studio</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
