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
    <html lang="hi" className="light">
      <body className="bg-[#F7F3EB] text-[#1E1711] min-h-screen selection:bg-[#B38226] selection:text-[#FFFFFF] antialiased">
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
