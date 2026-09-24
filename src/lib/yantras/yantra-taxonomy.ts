/**
 * Canonical 18-Tier Sacred Yantra Taxonomy & Categorization
 * Single source of truth for grouping, filtering, and lineage-wise organization.
 */

export interface YantraCategoryDefinition {
  id: string;
  order: number;
  folderName: string;
  titleSanskrit: string;
  titleHindi: string;
  titleEnglish: string;
  icon: string;
  description: string;
  lineageNote?: string;
}

export const YANTRA_TAXONOMY_CATEGORIES: Record<string, YantraCategoryDefinition> = {
  supreme_sri_chakra: {
    id: 'supreme_sri_chakra',
    order: 1,
    folderName: '01_SriChakra',
    titleSanskrit: 'श्रीचक्रम् (महामेरु)',
    titleHindi: 'श्री चक्र (यन्त्रराज)',
    titleEnglish: 'Supreme Sri Chakra (Maha Meru)',
    icon: 'Sparkles',
    description: 'The supreme crown of all sacred geometry representing cosmic harmonics and non-dual consciousness.',
    lineageNote: 'Samayachara, Kaula, and Mishra traditions with Kadi and Hadi lineages.'
  },
  dashamahavidya: {
    id: 'dashamahavidya',
    order: 2,
    folderName: '02_Dashamahavidya',
    titleSanskrit: 'दश महाविद्या यन्त्राणि',
    titleHindi: 'दश महाविद्या यन्त्र',
    titleEnglish: 'Dasha Mahavidya Yantras',
    icon: 'Flame',
    description: 'The ten great wisdom goddess cosmograms representing the complete spectrum of supreme cosmic power.',
    lineageNote: 'Lineage-specific variations (Kadimata, Hadimata, Kahadimata). Documented according to lineage citations.'
  },
  ganesha: {
    id: 'ganesha',
    order: 3,
    folderName: '03_Ganesha',
    titleSanskrit: 'गणेश यन्त्राणि',
    titleHindi: 'गणेश यन्त्र',
    titleEnglish: 'Ganesha & Ganapati Yantras',
    icon: 'Compass',
    description: 'Remover of obstacles, primordial sound Aum, and intellect illumination.',
    lineageNote: 'Documented according to Sharada Tilaka and Ganapatya Agamas.'
  },
  lakshmi: {
    id: 'lakshmi',
    order: 4,
    folderName: '04_Lakshmi',
    titleSanskrit: 'लक्ष्मी एवं धन यन्त्राणि',
    titleHindi: 'लक्ष्मी एवं धन-समृद्धि यन्त्र',
    titleEnglish: 'Lakshmi & Wealth Yantras',
    icon: 'Coins',
    description: 'Auspiciousness, abundance, spiritual wealth, and the Ashta-Lakshmi divine forms.',
    lineageNote: 'Sri Sukta, Lakshmi Tantra, and Kubera Agamas.'
  },
  shiva: {
    id: 'shiva',
    order: 5,
    folderName: '05_Shiva',
    titleSanskrit: 'शैव एवं मृत्युञ्जय यन्त्राणि',
    titleHindi: 'शिव एवं महामृत्युंजय यन्त्र',
    titleEnglish: 'Shiva & Shaiva Yantras',
    icon: 'Moon',
    description: 'Supreme consciousness, Mahamrityunjaya longevity, and cosmic dissolution into pure stillness.',
    lineageNote: 'Rudrayamala, Netra Tantra, and Shiva Agamas.'
  },
  devi_shakti: {
    id: 'devi_shakti',
    order: 6,
    folderName: '06_Devi',
    titleSanskrit: 'देवी एवं शक्ति यन्त्राणि',
    titleHindi: 'देवी एवं शक्ति यन्त्र',
    titleEnglish: 'Devi & Sacred Shakti Yantras',
    icon: 'Sun',
    description: 'Universal Mother divine manifestations: Durga, Chandika, Gayatri, and Annapurna.',
    lineageNote: 'Devi Bhagavata, Chandi Kalpa, and Kalika Purana.'
  },
  protection_raksha: {
    id: 'protection_raksha',
    order: 7,
    folderName: '07_Protection',
    titleSanskrit: 'रक्षा एवं कवच यन्त्राणि',
    titleHindi: 'रक्षा एवं संरक्षण यन्त्र',
    titleEnglish: 'Protection & Raksha Yantras',
    icon: 'Shield',
    description: 'Spiritual armor, negative energy barrier, and inner fortitude.',
    lineageNote: 'Documented with specific traditional scripture and lineage rules.'
  },
  navagraha: {
    id: 'navagraha',
    order: 8,
    folderName: '08_Navagraha',
    titleSanskrit: 'नवग्रह यन्त्राणि',
    titleHindi: 'नवग्रह यन्त्र (ज्योतिष)',
    titleEnglish: 'Navagraha Planetary Yantras',
    icon: 'Orbit',
    description: 'The nine celestial planetary rulers for karmic balancing and Vedic astrological harmony.',
    lineageNote: 'Brihat Parashara Hora Shastra, Agni Purana, and Narada Samhita.'
  },
  vastu: {
    id: 'vastu',
    order: 9,
    folderName: '09_Vastu',
    titleSanskrit: 'वास्तु एवं दिक्पाल यन्त्राणि',
    titleHindi: 'वास्तु दोष निवारण एवं दिक्पाल यन्त्र',
    titleEnglish: 'Vastu & Spatial Harmony Yantras',
    icon: 'Home',
    description: 'Vastu Purusha Mandala, 64-Pada, 81-Pada, and spatial energy alignment for living dwellings.',
    lineageNote: 'Brihat Samhita, Manasara, and Mayamata architectural treatises.'
  },
  vishnu_vaishnava: {
    id: 'vishnu_vaishnava',
    order: 10,
    folderName: '10_Vishnu',
    titleSanskrit: 'विष्णु एवं वैष्णव यन्त्राणि',
    titleHindi: 'विष्णु एवं नारायण यन्त्र',
    titleEnglish: 'Vishnu & Vaishnava Yantras',
    icon: 'Disc',
    description: 'The preserver of cosmic cosmic order, Sudarshana Chakra, and Narayana energy.',
    lineageNote: 'Pancharatra Agamas and Vaikhanasa Samhitas.'
  },
  hanuman: {
    id: 'hanuman',
    order: 11,
    folderName: '11_Hanuman',
    titleSanskrit: 'हनुमान् यन्त्राणि',
    titleHindi: 'हनुमान एवं संकटमोचन यन्त्र',
    titleEnglish: 'Hanuman & Anjaneya Yantras',
    icon: 'Zap',
    description: 'Supreme devotion, unyielding courage, protection, and Panchamukhi power.',
    lineageNote: 'Hanumad Vadavanala and Sudarshana Samhita.'
  },
  saraswati_vidya: {
    id: 'saraswati_vidya',
    order: 12,
    folderName: '12_Vidya',
    titleSanskrit: 'सरस्वती एवं विद्या यन्त्राणि',
    titleHindi: 'सरस्वती एवं विद्या-ज्ञान यन्त्र',
    titleEnglish: 'Saraswati & Vidya Knowledge Yantras',
    icon: 'BookOpen',
    description: 'Speech, learning, memory, arts, and highest transcendental wisdom.',
    lineageNote: 'Saraswati Rahasya Upanishad and Mantra Mahodadhi.'
  },
  santana_family: {
    id: 'santana_family',
    order: 13,
    folderName: '13_Marriage_Santana',
    titleSanskrit: 'सन्तान एवं दाम्पत्य यन्त्राणि',
    titleHindi: 'सन्तान एवं वैवाहिक सौहार्द यन्त्र',
    titleEnglish: 'Santana & Family Harmony Yantras',
    icon: 'Heart',
    description: 'Family lineage blessing, matrimonial concord, and Santana Gopala grace.',
    lineageNote: 'Lineage-specific traditional grihastha practices.'
  },
  special_purpose: {
    id: 'special_purpose',
    order: 14,
    folderName: '14_SpecialPurpose',
    titleSanskrit: 'विशिष्ट कार्यसिद्धि यन्त्राणि',
    titleHindi: 'कार्यसिद्धि एवं अभीष्ट यन्त्र',
    titleEnglish: 'Special Purpose & Karya Siddhi Yantras',
    icon: 'Award',
    description: 'Success in righteous undertakings, trade expansion, peace, and spiritual accomplishment.',
    lineageNote: 'Regional and tradition-specific collections catalogued with distinct attribution.'
  },
  avatar_yantras: {
    id: 'avatar_yantras',
    order: 15,
    folderName: '15_AvatarYantras',
    titleSanskrit: 'दशावतार यन्त्राणि',
    titleHindi: 'दशावतार यन्त्र',
    titleEnglish: 'Dashavatara Yantras',
    icon: 'Crown',
    description: 'Sacred geometries of the 10 divine incarnations from Matsya to Kalki.',
    lineageNote: 'Pancharatra and Puranic traditions.'
  },
  magic_square_numerology: {
    id: 'magic_square_numerology',
    order: 16,
    folderName: '16_MagicSquare',
    titleSanskrit: 'अङ्क एवं वर्ग यन्त्राणि (Magic Squares)',
    titleHindi: 'संख्यात्मक एवं जादुई वर्ग यन्त्र',
    titleEnglish: 'Numerological & Magic Square Yantras',
    icon: 'Grid',
    description: 'Harmonic planetary mathematical matrices with invariant horizontal, vertical, and diagonal sums.',
    lineageNote: 'Varahamihira Brihat Samhita and medieval Jyotish mathematical compendiums.'
  }
};
