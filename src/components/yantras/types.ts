import { YantraShastricEntry } from '@/lib/yantras/shastric-jyotish-database';
import { YANTRA_TAXONOMY_CATEGORIES } from '@/lib/yantras/yantra-taxonomy';

export interface LoadedAsset {
  type: 'svg' | 'image';
  content: string;
  fileName: string;
}

export interface HoveredAvaranaInfo {
  index: number;
  nameSanskrit: string;
  nameEnglish: string;
  chakraTitle: string;
  presidingDeity: string;
  yoginiClass: string;
  mudraShakti: string;
  geometryType: string;
  significance: string;
  spotTitle: string;
  relX: number;
  relY: number;
  pixelX: number;
  pixelY: number;
  radiusFraction: number;
}

// Helper to ensure SVG has proper viewBox for responsive scaling
export function normalizeSvg(raw: string): string {
  if (!raw.includes('<svg')) return raw;
  if (!raw.includes('viewBox') && raw.includes('width=') && raw.includes('height=')) {
    const widthMatch = raw.match(/width=["']?(\d+)/);
    const heightMatch = raw.match(/height=["']?(\d+)/);
    if (widthMatch && heightMatch) {
      const w = widthMatch[1];
      const h = heightMatch[1];
      return raw.replace(/<svg\b/, `<svg viewBox="0 0 ${w} ${h}" `);
    }
  }
  return raw;
}

export function getAvaranaRadiusFraction(index: number): number {
  switch (index) {
    case 9: return 0.030;
    case 8: return 0.075;
    case 7: return 0.135;
    case 6: return 0.185;
    case 5: return 0.225;
    case 4: return 0.256;
    case 3: return 0.326;
    case 2: return 0.395;
    case 1:
    default: return 0.485;
  }
}

export function getAvaranaRadiusRange(index: number): { rMin: number; rMax: number } {
  switch (index) {
    case 9: return { rMin: 0, rMax: 0.030 };       // 9: Bindu (Central Point)
    case 8: return { rMin: 0.030, rMax: 0.075 };   // 8: Kamakhya Triangle
    case 7: return { rMin: 0.075, rMax: 0.135 };   // 7: 8 Inner Triangles (Ashtara)
    case 6: return { rMin: 0.135, rMax: 0.185 };   // 6: 10 Inner Triangles (Antardashara)
    case 5: return { rMin: 0.185, rMax: 0.225 };   // 5: 10 Outer Triangles (Bahirdashara)
    case 4: return { rMin: 0.225, rMax: 0.256 };   // 4: 14 Triangles (Chaturdashara)
    case 3: return { rMin: 0.256, rMax: 0.326 };   // 3: 8 Petals (Ashtadala)
    case 2: return { rMin: 0.326, rMax: 0.395 };   // 2: 16 Petals (Shodashadala)
    case 1:
    default: return { rMin: 0.395, rMax: 0.495 };  // 1: Bhupura Citadel & 4 Gates
  }
}

export const SRISHTI_STEPS_INFO = [
  { step: 1, avaranaIdx: 9, name: 'महाबिन्दु', sub: 'सर्वआनन्दमय चक्र', rMin: 0.000, rMax: 0.030, desc: 'आदि पराशक्ति का अद्वैत उद्गम व महाबिन्दु' },
  { step: 2, avaranaIdx: 8, name: 'मूल त्रिकोण', sub: 'सर्वसिद्धिप्रद चक्र', rMin: 0.030, rMax: 0.075, desc: 'कामकला (इच्छा, ज्ञान, क्रिया त्रिपुटी)' },
  { step: 3, avaranaIdx: 7, name: 'अष्टकोण (८ त्रिकोण)', sub: 'सर्वरोगहर चक्र', rMin: 0.075, rMax: 0.135, desc: '८ वशिनी आदि रहस्य वाग्देवताएँ' },
  { step: 4, avaranaIdx: 6, name: 'अन्तर्दशार (१० त्रिकोण)', sub: 'सर्वरक्षाकर चक्र', rMin: 0.135, rMax: 0.185, desc: '१० अंतः पावक अग्नियाँ व निगूढ़ योगिनी' },
  { step: 5, avaranaIdx: 5, name: 'बहिर्दशार (१० त्रिकोण)', sub: 'सर्वार्थसाधक चक्र', rMin: 0.185, rMax: 0.225, desc: '१० प्राण (प्राण, अपान, व्यान...) व कुलयोगिनी' },
  { step: 6, avaranaIdx: 4, name: 'चतुर्दशार (१४ त्रिकोण)', sub: 'सर्वसौभाग्यदायक चक्र', rMin: 0.225, rMax: 0.256, desc: '१४ प्रधान नाड़ियाँ (सुषुम्णा, इड़ा...) व सम्प्रदाय योगिनी' },
  { step: 7, avaranaIdx: 3, name: 'अष्टदल कमल (८ पंखुड़ियाँ)', sub: 'सर्वसंक्षोभण चक्र', rMin: 0.256, rMax: 0.326, desc: '८ अनंग शक्तियाँ व गुप्ततर योगिनी' },
  { step: 8, avaranaIdx: 2, name: 'षोडशदल कमल (१६ पंखुड़ियाँ)', sub: 'सर्वाशापरिपूरक चक्र', rMin: 0.326, rMax: 0.395, desc: '१६ कामाकर्षिणी शक्तियाँ व गुप्त योगिनी' },
  { step: 9, avaranaIdx: 1, name: 'भूपुर (३ रेखाएँ व ४ द्वार)', sub: 'त्रैलोक्यमोहन चक्र', rMin: 0.395, rMax: 0.500, desc: '१० सिद्धियाँ + ८ मातृकाएँ + ४ द्वार (प्रकट योगिनी)' },
];

export const SAMHARA_STEPS_INFO = [
  { step: 1, avaranaIdx: 1, name: 'भूपुर (३ रेखाएँ व ४ द्वार)', sub: 'त्रैलोक्यमोहन चक्र', rMin: 0.395, rMax: 0.500, desc: '१० सिद्धियाँ + ८ मातृकाएँ + ४ द्वार (प्रकट योगिनी)' },
  { step: 2, avaranaIdx: 2, name: 'षोडशदल कमल (१६ पंखुड़ियाँ)', sub: 'सर्वाशापरिपूरक चक्र', rMin: 0.326, rMax: 0.395, desc: '१६ कामाकर्षिणी शक्तियाँ व गुप्त योगिनी' },
  { step: 3, avaranaIdx: 3, name: 'अष्टदल कमल (८ पंखुड़ियाँ)', sub: 'सर्वसंक्षोभण चक्र', rMin: 0.256, rMax: 0.326, desc: '८ अनंग शक्तियाँ व गुप्ततर योगिनी' },
  { step: 4, avaranaIdx: 4, name: 'चतुर्दशार (१४ त्रिकोण)', sub: 'सर्वसौभाग्यदायक चक्र', rMin: 0.225, rMax: 0.256, desc: '१४ प्रधान नाड़ियाँ (सुषुम्णा, इड़ा...) व सम्प्रदाय योगिनी' },
  { step: 5, avaranaIdx: 5, name: 'बहिर्दशार (१० त्रिकोण)', sub: 'सर्वार्थसाधक चक्र', rMin: 0.185, rMax: 0.225, desc: '१० प्राण (प्राण, अपान, व्यान...) व कुलयोगिनी' },
  { step: 6, avaranaIdx: 6, name: 'अन्तर्दशार (१० त्रिकोण)', sub: 'सर्वरक्षाकर चक्र', rMin: 0.135, rMax: 0.185, desc: '१० अंतः पावक अग्नियाँ व निगूढ़ योगिनी' },
  { step: 7, avaranaIdx: 7, name: 'अष्टकोण (८ त्रिकोण)', sub: 'सर्वरोगहर चक्र', rMin: 0.075, rMax: 0.135, desc: '८ वशिनी आदि रहस्य वाग्देवताएँ' },
  { step: 8, avaranaIdx: 8, name: 'मूल त्रिकोण', sub: 'सर्वसिद्धिप्रद चक्र', rMin: 0.035, rMax: 0.085, desc: 'कामकला (इच्छा, ज्ञान, क्रिया त्रिपुटी)' },
  { step: 9, avaranaIdx: 9, name: 'महाबिन्दु', sub: 'सर्वआनन्दमय चक्र', rMin: 0.000, rMax: 0.038, desc: 'आदि पराशक्ति का अद्वैत उद्गम व महाबिन्दु' },
];

export function getYantraTaxonomyCategory(y: YantraShastricEntry): string {
  if (y.taxonomyCategory && YANTRA_TAXONOMY_CATEGORIES[y.taxonomyCategory]) {
    return y.taxonomyCategory;
  }
  if (y.id === 'sri_yantra') return 'supreme_sri_chakra';
  if ([
    'kali_yantra', 'tara_yantra', 'tripura_sundari_yantra', 'bhuvaneshvari_yantra',
    'bhairavi_yantra', 'chhinnamasta_yantra', 'dhumavati_yantra', 'bagalamukhi_yantra',
    'matangi_yantra', 'kamala_yantra'
  ].includes(y.id)) {
    return 'dashamahavidya';
  }
  if ([
    'surya_yantra', 'chandra_yantra', 'mangala_yantra', 'mangal_yantra',
    'budha_yantra', 'guru_yantra', 'brihaspati_yantra', 'shukra_yantra',
    'shani_yantra', 'rahu_yantra', 'ketu_yantra', 'navagraha_yantra'
  ].includes(y.id)) {
    return 'navagraha';
  }
  if (y.id.includes('ganesh') || y.id.includes('ganapati')) return 'ganesha';
  if (y.id.includes('kuber') || y.id.includes('lakshmi')) return 'lakshmi';
  if (y.id.includes('shiva') || y.id.includes('mrityunjaya') || y.id.includes('rudra')) return 'shiva';
  if (y.id.includes('vastu')) return 'vastu';
  if (
    y.id.includes('durga') ||
    y.id.includes('bisa') ||
    y.id.includes('raksha') ||
    y.id.includes('sudarshana') ||
    y.id.includes('hanuman') ||
    y.id.includes('pratyangira')
  ) {
    return 'protection_raksha';
  }
  if (y.id.includes('surya') || y.id.includes('graha')) return 'navagraha';
  return 'supreme_sri_chakra';
}
