import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  title: 'Yantra Studio & Sacred Geometry Digital Museum',
  description: 'Computational Sacred Geometry Platform, 3D Maha Meru WebGL Orbit, 25+ Canonical Yantras, Golden Ratio Audits, and Virtual Altar Upasana Studio.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0A0908] text-[#FFF9F2] min-h-screen selection:bg-[#D4AF37] selection:text-[#0A0908]">
        <LanguageProvider>
          <Navbar />
          <main className="min-h-[calc(100vh-70px)]">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
