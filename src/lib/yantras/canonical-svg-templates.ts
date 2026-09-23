export interface ColorThemeDefinition {
  id: string;
  name: string;
  sanskritName: string;
  background: string;
  primaryColor: string;
  accentColor: string;
  goldAccent: string;
  textColor: string;
  cardBg: string;
  borderStroke: string;
}

export const YANTRA_COLOR_THEMES: Record<string, ColorThemeDefinition> = {
  traditional_shastric: {
    id: 'traditional_shastric',
    name: 'Traditional Shastric (शास्त्रीय नववर्ण)',
    sanskritName: 'पारम्परिक शास्त्रीय वर्ण',
    background: '#0F0B08',
    primaryColor: '#D97706',
    accentColor: '#DC2626',
    goldAccent: '#FFD700',
    textColor: '#FFF9F2',
    cardBg: '#141210',
    borderStroke: '#D4AF37'
  },
  temple_gold: {
    id: 'temple_gold',
    name: 'Vedic Temple Gold (स्वर्ण प्रभा)',
    sanskritName: 'स्वर्ण प्रभा मन्दिर कला',
    background: '#0A0806',
    primaryColor: '#D4AF37',
    accentColor: '#FF9933',
    goldAccent: '#FFDF00',
    textColor: '#FFF9F2',
    cardBg: '#141210',
    borderStroke: '#D4AF37'
  },
  panchadhatu_copper: {
    id: 'panchadhatu_copper',
    name: 'Panchadhatu Copper (ताम्र व कुंकुम)',
    sanskritName: 'ताम्र कुंकुमार्चन वर्ण',
    background: '#140A07',
    primaryColor: '#B87333',
    accentColor: '#800020',
    goldAccent: '#F59E0B',
    textColor: '#FFF4EB',
    cardBg: '#18100C',
    borderStroke: '#C86D3B'
  },
  sacred_bw: {
    id: 'sacred_bw',
    name: 'Pure Sacred Line Art (श्वेत-श्याम रेखाचित्र)',
    sanskritName: 'शुद्ध रेखाचित्र (मुद्रण व ध्यान हेतु)',
    background: '#FFFFFF',
    primaryColor: '#111111',
    accentColor: '#333333',
    goldAccent: '#000000',
    textColor: '#111111',
    cardBg: '#F8F8F8',
    borderStroke: '#111111'
  }
};
