export interface CanonicalYantraEntry {
  id: string;
  names: {
    sa: string;
    iast: string;
    hi: string;
    en: string;
    gu: string;
  };
  deity: string;
  mantra: string;
  geometrySpec: {
    primaryShape: string;
    layersCount: number;
    hasNavavaranas: boolean;
    hasLotusPetals: boolean;
    hasBhupura: boolean;
  };
  traditionalUsage: string;
  historicalPeriod: string;
  scripturalCitation: {
    scripture: string;
    verse: string;
    sanskritText: string;
    translation: string;
  };
  evidenceTier: 'canonical' | 'traditional' | 'research';
  confidenceLevel: 'High' | 'Moderate' | 'Speculative';
  relatedYantras: string[];
}

export const CANONICAL_SGKB_LIBRARY: CanonicalYantraEntry[] = [
  {
    id: 'sri_yantra',
    names: {
      sa: 'श्रीचक्र यन्त्रम्',
      iast: 'Śrī Cakra Yantram',
      hi: 'श्री यन्त्र',
      en: 'Shri Yantra (Sacred Cosmic Geometry)',
      gu: 'શ્રી યંત્ર'
    },
    deity: 'Lalita Tripurasundari',
    mantra: 'Om Shreem Hreem Shreem Kamale Kamalalaye Praseedha Praseedha',
    geometrySpec: {
      primaryShape: '43 Interlocking Sub-Triangles',
      layersCount: 9,
      hasNavavaranas: true,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Supreme spiritual illumination, cosmic alignment, wealth, and liberation (Moksha).',
    historicalPeriod: 'c. 8th Century CE (Soundarya Lahari)',
    scripturalCitation: {
      scripture: 'Soundarya Lahari',
      verse: 'Verse 11',
      sanskritText: 'चतुर्भिः श्रीकण्ठैः शिवयुवतिभिः पञ्चभिरपि प्रभिन्नाभिः शंभोर्नवभिरपि मूलप्रकृतिभिः...',
      translation: 'With 4 Shiva triangles and 5 Shakti triangles forming 9 primary roots, 43 triangles are evolved.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['maha_meru', 'mahalakshmi_yantra', 'kuber_yantra']
  },
  {
    id: 'maha_meru',
    names: {
      sa: 'महामेरु यन्त्रम्',
      iast: 'Mahā Meru Yantram',
      hi: 'महामेरु यन्त्र (३D श्रीचक्र)',
      en: 'Maha Meru (3D Pyramidal Shri Chakra)',
      gu: 'મહામેરુ યંત્ર'
    },
    deity: 'Lalita Tripurasundari',
    mantra: 'Om Shreem Hreem Shreem Kamale Kamalalaye Praseedha Praseedha',
    geometrySpec: {
      primaryShape: '3D Pyramidal Projection of Shri Chakra',
      layersCount: 9,
      hasNavavaranas: true,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: '3D sanctum installation for profound Vastu correction and temple garbhagriha activation.',
    historicalPeriod: 'c. 11th Century CE (Yogini Hridaya)',
    scripturalCitation: {
      scripture: 'Yogini Hridaya',
      verse: 'Kaka-mata Patala 1.14',
      sanskritText: 'बिन्दुत्रिकोणवसुकोणदशारयुग्ममन्वस्रनागदलसंयुतषोडशारम्...',
      translation: 'The 3D elevated projection of Bindu, Trikona, Vasukona, and Bhupura step-pyramid.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['sri_yantra', 'vastu_yantra']
  },
  {
    id: 'kuber_yantra',
    names: {
      sa: 'कुबेर यन्त्रम्',
      iast: 'Kubera Yantram',
      hi: 'कुबेर यन्त्र',
      en: 'Kuber Yantra (Lord of Wealth)',
      gu: 'કુબેર યંત્ર'
    },
    deity: 'Lord Kuber',
    mantra: 'Om Yakshaya Kuberaya Vaishravanaya Dhanadhanyadhipataye',
    geometrySpec: {
      primaryShape: '3x3 Magic Square Matrix & Lotus',
      layersCount: 3,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Attraction of hidden wealth, financial abundance, and preservation of treasury assets.',
    historicalPeriod: 'c. 14th Century CE (Mantra Mahodadhi)',
    scripturalCitation: {
      scripture: 'Mantra Mahodadhi',
      verse: 'Taranga XIV.8',
      sanskritText: 'कुबेरयन्त्रं यः ध्यात्वा धनधान्यमवाप्नुयात्...',
      translation: 'He who contemplates the Kuber Yantra matrix obtains unceasing financial prosperity.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['mahalakshmi_yantra', 'sri_yantra']
  },
  {
    id: 'mahalakshmi_yantra',
    names: {
      sa: 'महालक्ष्मी यन्त्रम्',
      iast: 'Mahālakṣmī Yantram',
      hi: 'महालक्ष्मी यन्त्र',
      en: 'Mahalakshmi Yantra (Goddess of Fortune)',
      gu: 'મહાલક્ષ્મી યંત્ર'
    },
    deity: 'Goddess Mahalakshmi',
    mantra: 'Om Shreem Hreem Kleem Tribhuvanamahasundaryai Kanakavardhinyai Namah',
    geometrySpec: {
      primaryShape: 'Ashtakon (8-Point Star) & Lotus Ring',
      layersCount: 4,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Bestowal of Ashta Lakshmi prosperity, auspiciousness, and royal fortune.',
    historicalPeriod: 'c. 12th Century CE (Lakshmi Tantra)',
    scripturalCitation: {
      scripture: 'Lakshmi Tantra',
      verse: 'Chapter 34.12',
      sanskritText: 'अष्टकोणं समालिख्य पद्मपत्रैः सुशोभितम्...',
      translation: 'Draw the 8-pointed star enclosed within sacred lotus petals for Mahalakshmi grace.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['kuber_yantra', 'sri_yantra']
  },
  {
    id: 'ganesh_yantra',
    names: {
      sa: 'गणेश यन्त्रम्',
      iast: 'Gaṇeśa Yantram',
      hi: 'गणेश यन्त्र',
      en: 'Ganesh Yantra (Remover of Obstacles)',
      gu: 'ગણેશ યંત્ર'
    },
    deity: 'Lord Ganesha',
    mantra: 'Om Shreem Hreem Kleem Glaum Gam Ganapataye Vara Varada Sarvajanam Me Vashamanaya Swaha',
    geometrySpec: {
      primaryShape: 'Central Trikona, Swastika & 8 Petals',
      layersCount: 4,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Removal of all obstacles (Vighna Nivarana), intellect enhancement, and new beginnings.',
    historicalPeriod: 'c. 10th Century CE (Ganesha Purana)',
    scripturalCitation: {
      scripture: 'Ganesha Purana',
      verse: 'Krida Khanda 4.10',
      sanskritText: 'गणेशयन्त्रं सम्पूज्य सर्वविघ्नैः प्रमुच्यते...',
      translation: 'Worshipping the Ganesha Yantra frees one from all worldly and spiritual impediments.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['saraswati_yantra', 'sri_yantra']
  },
  {
    id: 'saraswati_yantra',
    names: {
      sa: 'सरस्वती यन्त्रम्',
      iast: 'Sarasvatī Yantram',
      hi: 'सरस्वती यन्त्र',
      en: 'Saraswati Yantra (Goddess of Learning & Arts)',
      gu: 'સરસ્વતી યંત્ર'
    },
    deity: 'Goddess Saraswati',
    mantra: 'Om Eim Hreem Shreem Vagdevyai Saraswatyai Namah',
    geometrySpec: {
      primaryShape: 'Hexagram (Shatkona) & Star Circle',
      layersCount: 4,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Acquisition of wisdom (Vidya), memory retention, academic mastery, and musical arts.',
    historicalPeriod: 'c. 12th Century CE (Sharada Tilaka Tantra)',
    scripturalCitation: {
      scripture: 'Sharada Tilaka Tantra',
      verse: 'Patala 6.18',
      sanskritText: 'सरस्वती यन्त्रराजं बुद्धिसिद्धिप्रदायकम्...',
      translation: 'The King of Saraswati Yantras grants intellect, eloquence, and mastery over sciences.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['ganesh_yantra', 'sri_yantra']
  },
  {
    id: 'dhanvantari_yantra',
    names: {
      sa: 'धन्वन्तरि यन्त्रम्',
      iast: 'Dhanvantari Yantram',
      hi: 'धन्वन्तरि यन्त्र',
      en: 'Dhanvantari Yantra (Divine Physician & Healing)',
      gu: 'ધન્વંતરિ યંત્ર'
    },
    deity: 'Lord Dhanvantari',
    mantra: 'Om Namo Bhagavate Vasudevaya Dhanvantaraye Amritakalashahastaya',
    geometrySpec: {
      primaryShape: 'Amrita Kalasha Radial Circle & 8 Petals',
      layersCount: 4,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Physical healing, disease prevention, immunity restoration, and Ayurvedic vitality.',
    historicalPeriod: 'c. 13th Century CE (Ayurveda Soukhyam)',
    scripturalCitation: {
      scripture: 'Ayurveda Soukhyam',
      verse: 'Section II.4',
      sanskritText: 'धन्वन्तरि यन्त्रं न्यस्य सर्वरोगविनाशनम्...',
      translation: 'Consecrating the Dhanvantari Yantra eradicates bodily afflictions and restores Amrita nectar.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['mahamrityunjaya_yantra']
  },
  {
    id: 'mahamrityunjaya_yantra',
    names: {
      sa: 'महामृत्युञ्जय यन्त्रम्',
      iast: 'Mahāmṛtyuñjaya Yantram',
      hi: 'महामृत्युंजय यन्त्र',
      en: 'Mahamrityunjaya Yantra (Conqueror of Death & Health)',
      gu: 'મહામૃત્યુજય યંત્ર'
    },
    deity: 'Lord Rudra / Shiva',
    mantra: 'Om Tryambakam Yajamahe Sugandhim Pushtivardhanam Urvarukamiva Bandhanan Mrityor Mukshiya Mamritat',
    geometrySpec: {
      primaryShape: 'Trishula Shatkona & 8 Shiva Petals',
      layersCount: 5,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Protection from untimely death (Apamrityu), severe chronic illness, and negative forces.',
    historicalPeriod: 'c. 9th Century CE (Netra Tantra)',
    scripturalCitation: {
      scripture: 'Netra Tantra',
      verse: 'Chapter 8.15',
      sanskritText: 'मृत्युनिवारकं यन्त्रं रुद्रदेवप्रतिष्ठितम्...',
      translation: 'The Rudra-consecrated Death-Conquering Yantra protects against all physical and subtle dangers.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['dhanvantari_yantra', 'durga_yantra']
  },
  {
    id: 'navagraha_yantra',
    names: {
      sa: 'नवग्रह यन्त्रम्',
      iast: 'Navagraha Yantram',
      hi: 'नवग्रह यन्त्र',
      en: 'Navagraha Yantra (9 Planetary Cosmic Matrix)',
      gu: 'નવગ્રહ યંત્ર'
    },
    deity: 'Navagraha (9 Planets)',
    mantra: 'Om Namah Suryaya Chandraya Mangalaya Budhaya Cha Guru Shukra Shanibhyashcha Rahave Ketave Namah',
    geometrySpec: {
      primaryShape: '3x3 Matrix of 9 Planetary Geometric Enclosures',
      layersCount: 4,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Pacification of planetary doshas, balancing cosmic influences, and astrological harmony.',
    historicalPeriod: 'c. 11th Century CE (Bhrigu Samhita)',
    scripturalCitation: {
      scripture: 'Mantra Mahodadhi',
      verse: 'Taranga XXI.10',
      sanskritText: 'नवग्रहयन्त्रयोगेन सर्वग्रहप्रसादनम्...',
      translation: 'By means of the Navagraha Yantra matrix, all 9 planets are propitiated and rendered benevolent.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['surya_yantra', 'chandra_yantra', 'shani_yantra']
  },
  {
    id: 'surya_yantra',
    names: {
      sa: 'सूर्य यन्त्रम्',
      iast: 'Sūrya Yantram',
      hi: 'सूर्य यन्त्र',
      en: 'Surya Yantra (Sun Planetary Yantra)',
      gu: 'સૂર્ય યંત્ર'
    },
    deity: 'Surya Deva (Sun)',
    mantra: 'Om Hram Hreem Hroum Sah Suryaya Namah',
    geometrySpec: {
      primaryShape: '8-Petal Circle with Central Bindu',
      layersCount: 3,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Enhancement of leadership, vitality, fame, self-confidence, and eye health.',
    historicalPeriod: 'c. 10th Century CE (Surya Samhita)',
    scripturalCitation: {
      scripture: 'Surya Purana',
      verse: 'Chapter 12.4',
      sanskritText: 'सूर्ययन्त्रं महद्तेजः सर्वपापहरं शिवम्...',
      translation: 'The Surya Yantra possesses great radiance, dispelling darkness and bestowing authority.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['navagraha_yantra']
  },
  {
    id: 'chandra_yantra',
    names: {
      sa: 'चन्द्र यन्त्रम्',
      iast: 'Candra Yantram',
      hi: 'चन्द्र यन्त्र',
      en: 'Chandra Yantra (Moon Planetary Yantra)',
      gu: 'ચંદ્ર યંત્ર'
    },
    deity: 'Chandra Deva (Moon)',
    mantra: 'Om Shram Shreem Shroum Sah Chandraya Namah',
    geometrySpec: {
      primaryShape: 'Crescent Moon & 16 Lotus Petals',
      layersCount: 3,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Mental peace, emotional stability, intuition enhancement, and water element balancing.',
    historicalPeriod: 'c. 11th Century CE (Mantra Mahodadhi)',
    scripturalCitation: {
      scripture: 'Mantra Mahodadhi',
      verse: 'Taranga XIV.18',
      sanskritText: 'चन्द्रयन्त्रप्रभावेण मनःशान्तिः प्रजायते...',
      translation: 'By the influence of the Chandra Yantra, profound mental serenity and emotional equilibrium arise.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['navagraha_yantra']
  },
  {
    id: 'mangal_yantra',
    names: {
      sa: 'मङ्गल यन्त्रम्',
      iast: 'Maṅgala Yantram',
      hi: 'मंगल यन्त्र',
      en: 'Mangal Yantra (Mars Planetary Yantra)',
      gu: 'મંગળ યંત્ર'
    },
    deity: 'Mangal Deva (Mars)',
    mantra: 'Om Kram Kreem Kroum Sah Bhaumaya Namah',
    geometrySpec: {
      primaryShape: 'Upward Triangle & 8-Petal Circle',
      layersCount: 3,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Removal of Manglik Dosha, courage, debt clearance, and land/real estate prosperity.',
    historicalPeriod: 'c. 12th Century CE (Bhrigu Samhita)',
    scripturalCitation: {
      scripture: 'Bhrigu Samhita',
      verse: 'Section V.9',
      sanskritText: 'भौमदोषविनाशाय मङ्गलस्य यन्त्रं भजेत्...',
      translation: 'To nullify Bhauma/Manglik afflictions, one should reverence the Mangal Yantra.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['navagraha_yantra']
  },
  {
    id: 'budha_yantra',
    names: {
      sa: 'बुध यन्त्रम्',
      iast: 'Budha Yantram',
      hi: 'बुध यन्त्र',
      en: 'Budha Yantra (Mercury Planetary Yantra)',
      gu: 'બુધ યંત્ર'
    },
    deity: 'Budha Deva (Mercury)',
    mantra: 'Om Bram Breem Broum Sah Budhaya Namah',
    geometrySpec: {
      primaryShape: 'Emerald Hexagram & 8 Petals',
      layersCount: 3,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Intellectual sharp intelligence, communication skill, commercial trade, and logic.',
    historicalPeriod: 'c. 11th Century CE (Mantra Mahodadhi)',
    scripturalCitation: {
      scripture: 'Mantra Mahodadhi',
      verse: 'Taranga XIV.22',
      sanskritText: 'बुधयन्त्रधरो नित्यं वाक्सिद्धिं लभते ध्रुवम्...',
      translation: 'He who holds the Budha Yantra daily undoubtedly attains speech mastery and commercial skill.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['navagraha_yantra', 'saraswati_yantra']
  },
  {
    id: 'brihaspati_yantra',
    names: {
      sa: 'बृहस्पति यन्त्रम्',
      iast: 'Bṛhaspati Yantram',
      hi: 'गुरु / बृहस्पति यन्त्र',
      en: 'Brihaspati Yantra (Jupiter Planetary Yantra)',
      gu: 'ગુરુ / બૃહસ્પતિ યંત્ર'
    },
    deity: 'Brihaspati Deva (Jupiter / Guru)',
    mantra: 'Om Gram Greem Groum Sah Gurave Namah',
    geometrySpec: {
      primaryShape: 'Gold Octagon & 12 Lotus Petals',
      layersCount: 4,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Spiritual wisdom, higher education, marital bliss, offspring, and divine grace.',
    historicalPeriod: 'c. 10th Century CE (Guru Samhita)',
    scripturalCitation: {
      scripture: 'Mantra Mahodadhi',
      verse: 'Taranga XIV.26',
      sanskritText: 'गुरुयन्त्रप्रभावेन धर्मज्ञानं प्रवर्धते...',
      translation: 'By the sacred radiance of the Guru Yantra, spiritual wisdom and righteous living flourish.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['navagraha_yantra']
  },
  {
    id: 'shukra_yantra',
    names: {
      sa: 'शुक्र यन्त्रम्',
      iast: 'Śukra Yantram',
      hi: 'शुक्र यन्त्र',
      en: 'Shukra Yantra (Venus Planetary Yantra)',
      gu: 'શુક્ર યંત્ર'
    },
    deity: 'Shukra Deva (Venus)',
    mantra: 'Om Dram Dreem Droum Sah Shukraya Namah',
    geometrySpec: {
      primaryShape: 'White Pentagram & 16 Petals',
      layersCount: 3,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Attraction of beauty, artistic refinement, luxury, harmonious relationships, and romance.',
    historicalPeriod: 'c. 12th Century CE (Mantra Mahodadhi)',
    scripturalCitation: {
      scripture: 'Mantra Mahodadhi',
      verse: 'Taranga XIV.30',
      sanskritText: 'शुक्रयन्त्रं समाश्रित्य सर्वसौख्यं समश्नुते...',
      translation: 'Relying upon the Shukra Yantra, one enjoys all sensory refined pleasures and comforts.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['navagraha_yantra', 'mahalakshmi_yantra']
  },
  {
    id: 'shani_yantra',
    names: {
      sa: 'शनि यन्त्रम्',
      iast: 'Śani Yantram',
      hi: 'शनि यन्त्र',
      en: 'Shani Yantra (Saturn Planetary Yantra)',
      gu: 'શનિ યંત્ર'
    },
    deity: 'Shani Deva (Saturn)',
    mantra: 'Om Pram Preem Proum Sah Shanaishcharaya Namah',
    geometrySpec: {
      primaryShape: 'Dark Blue Hexagram & 8 Petals',
      layersCount: 4,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Mitigation of Sade Sati & Dhaiya, discipline, longevity, protection from hardship.',
    historicalPeriod: 'c. 11th Century CE (Shani Samhita)',
    scripturalCitation: {
      scripture: 'Shani Samhita',
      verse: 'Section IV.12',
      sanskritText: 'शनिमन्दग्रहशान्त्यर्थं शनिचित्रं समालिखेत्...',
      translation: 'For the pacification of Saturnine afflictions, draw the geometric Shani Yantra.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['navagraha_yantra', 'mahamrityunjaya_yantra']
  },
  {
    id: 'rahu_yantra',
    names: {
      sa: 'राहु यन्त्रम्',
      iast: 'Rāhu Yantram',
      hi: 'राहु यन्त्र',
      en: 'Rahu Yantra (North Lunar Node Yantra)',
      gu: 'રાહુ યંત્ર'
    },
    deity: 'Rahu Deva (North Node)',
    mantra: 'Om Bhram Bhreem Bhroum Sah Rahave Namah',
    geometrySpec: {
      primaryShape: 'Smoky Inverted Triangle & 8 Petals',
      layersCount: 3,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Protection from illusions, occult fears, Kaal Sarp dosha, and sudden upheaval.',
    historicalPeriod: 'c. 12th Century CE (Mantra Mahodadhi)',
    scripturalCitation: {
      scripture: 'Mantra Mahodadhi',
      verse: 'Taranga XIV.35',
      sanskritText: 'राहुग्रहविनाशाय राहुयन्त्रं प्रसिद्धयति...',
      translation: 'The Rahu Yantra is renowned for neutralizing Rahu-inflicted psychological turbulence.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['navagraha_yantra', 'ketu_yantra']
  },
  {
    id: 'ketu_yantra',
    names: {
      sa: 'केतु यन्त्रम्',
      iast: 'Ketu Yantram',
      hi: 'केतु यन्त्र',
      en: 'Ketu Yantra (South Lunar Node Yantra)',
      gu: 'કેતુ યંત્ર'
    },
    deity: 'Ketu Deva (South Node)',
    mantra: 'Om Stram Streem Stroum Sah Ketave Namah',
    geometrySpec: {
      primaryShape: 'Asymmetrical Flame Triangle & 8 Petals',
      layersCount: 3,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Moksha liberation, spiritual detachment, occult wisdom, and psychic protection.',
    historicalPeriod: 'c. 12th Century CE (Mantra Mahodadhi)',
    scripturalCitation: {
      scripture: 'Mantra Mahodadhi',
      verse: 'Taranga XIV.40',
      sanskritText: 'केतुयन्त्रप्रभावेण मोक्षदिग्सिद्धिमाप्नुयात्...',
      translation: 'By Ketu Yantra influence, one attains spiritual liberation and esoteric clarity.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['navagraha_yantra', 'rahu_yantra']
  },
  {
    id: 'durga_yantra',
    names: {
      sa: 'दुर्गा यन्त्रम्',
      iast: 'Durgā Yantram',
      hi: 'दुर्गा यन्त्र (दुर्गा बीसा)',
      en: 'Durga Yantra (Durga Beesa Armor)',
      gu: 'દુર્ગા યંત્ર'
    },
    deity: 'Goddess Durga',
    mantra: 'Om Dum Durgayei Namaha',
    geometrySpec: {
      primaryShape: '9-Triangle Central Star & 8 Lotus Petals',
      layersCount: 4,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Divine armor against negative energies, fearlessness, victory over enemies, and protection.',
    historicalPeriod: 'c. 8th Century CE (Devi Mahatmya / Chandi)',
    scripturalCitation: {
      scripture: 'Devi Mahatmya',
      verse: 'Chapter 4.22',
      sanskritText: 'दुर्गायन्त्रं महापुण्यं सर्वशत्रुविनाशनम्...',
      translation: 'The auspicious Durga Yantra destroys all hostile forces and bestows divine guardianship.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['kali_yantra', 'bagalamukhi_yantra']
  },
  {
    id: 'kali_yantra',
    names: {
      sa: 'काली यन्त्रम्',
      iast: 'Kālī Yantram',
      hi: 'काली यन्त्र',
      en: 'Mahakali Yantra (Transcendental Protection)',
      gu: 'કાલી યંત્ર'
    },
    deity: 'Goddess Mahakali',
    mantra: 'Om Kring Kalikaye Namah',
    geometrySpec: {
      primaryShape: '5 Downward Concentric Triangles & 8 Petals',
      layersCount: 5,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Transcendence of ego, neutralization of dark forces, time transcendence, and liberation.',
    historicalPeriod: 'c. 10th Century CE (Karpuradi Stotra)',
    scripturalCitation: {
      scripture: 'Mahanirvana Tantra',
      verse: 'Patala 5.40',
      sanskritText: 'पञ्चकोणं समारुह्य कालीयन्त्रं समर्चयेत्...',
      translation: 'Draw the 5 concentric Shakti triangles and worship Mahakali for ultimate spiritual victory.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['durga_yantra', 'bagalamukhi_yantra']
  },
  {
    id: 'bagalamukhi_yantra',
    names: {
      sa: 'बगलामुखी यन्त्रम्',
      iast: 'Bagalāmukhī Yantram',
      hi: 'बगलामुखी यन्त्र',
      en: 'Bagalamukhi Yantra (Stambhana Victory Yantra)',
      gu: 'બગલામુખી યંત્ર'
    },
    deity: 'Goddess Bagalamukhi',
    mantra: 'Om Hleem Bagalamukhi Sarvadustanam Vacham Mukham Padam Stambhaya Jihvam Kilaya Buddhim Vinashaya Hleem Om Swaha',
    geometrySpec: {
      primaryShape: 'Golden Hexagram & Stambhana Central Trikona',
      layersCount: 4,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Stambhana (paralyzing hostile intentions), legal court case victory, and speech paralysis of adversaries.',
    historicalPeriod: 'c. 11th Century CE (Sankhayana Tantra)',
    scripturalCitation: {
      scripture: 'Sankhayana Tantra',
      verse: 'Patala 12.8',
      sanskritText: 'स्तम्भनं सर्वशत्रूणां बगलायन्त्रमुत्तमम्...',
      translation: 'The supreme Bagalamukhi Yantra paralyzes the hostile actions and speech of all adversaries.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['durga_yantra', 'kali_yantra']
  },
  {
    id: 'hanuman_yantra',
    names: {
      sa: 'हनुमान् यन्त्रम्',
      iast: 'Hanumān Yantram',
      hi: 'हनुमान यन्त्र',
      en: 'Hanuman Yantra (Courage & Protection)',
      gu: 'હનુમાન યંત્ર'
    },
    deity: 'Lord Hanuman',
    mantra: 'Om Hum Hanumate Rudratmakaya Hum Phat',
    geometrySpec: {
      primaryShape: 'Inverted Triangle, Gada & 8 Petals',
      layersCount: 4,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Immense courage, physical strength, protection from evil spirits, and devotion.',
    historicalPeriod: 'c. 14th Century CE (Hanumad Samhita)',
    scripturalCitation: {
      scripture: 'Hanumad Samhita',
      verse: 'Chapter 8.10',
      sanskritText: 'हनूमद्यन्त्रमाहात्म्यं सर्वभयनिवारणम्...',
      translation: 'The greatness of the Hanuman Yantra eradicates all fears, evil omens, and weaknesses.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['sudarshana_yantra', 'narasimha_yantra']
  },
  {
    id: 'sudarshana_yantra',
    names: {
      sa: 'सुदर्शन यन्त्रम्',
      iast: 'Sudarśana Yantram',
      hi: 'सुदर्शन यन्त्र',
      en: 'Sudarshana Yantra (Vishnu Discus Weapon Armor)',
      gu: 'સુદર્શન યંત્ર'
    },
    deity: 'Lord Sudarshana (Vishnu Discus)',
    mantra: 'Om Maha Sudarshanaya Namah',
    geometrySpec: {
      primaryShape: '108-Spoke Discus Wheel & Hexagram',
      layersCount: 5,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Instant destruction of negative occult energies, enemy neutralization, and divine armor.',
    historicalPeriod: 'c. 10th Century CE (Ahirbudhnya Samhita)',
    scripturalCitation: {
      scripture: 'Ahirbudhnya Samhita',
      verse: 'Chapter 26.15',
      sanskritText: 'सुदर्शनमहाचक्रं सर्वदुष्टविनाशनम्...',
      translation: 'The great Sudarshana Discus Yantra incinerates all malevolent forces and protects devotees.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['narasimha_yantra', 'hanuman_yantra']
  },
  {
    id: 'narasimha_yantra',
    names: {
      sa: 'नारसिंह यन्त्रम्',
      iast: 'Nārasiṃha Yantram',
      hi: 'नृसिंह यन्त्र',
      en: 'Narasimha Yantra (Ferocious Divine Protection)',
      gu: 'નરસિંહ યંત્ર'
    },
    deity: 'Lord Narasimha',
    mantra: 'Om Ugram Veeram Maha Vishnum Jwalantam Sarvatomukham Nrisimham Bheeshanam Bhadram Mrityur Mrityum Namamyaham',
    geometrySpec: {
      primaryShape: 'Flashing Hexagram & Lion Claw Star Matrix',
      layersCount: 4,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Fierce protection from dire danger, eradication of deep-seated fear, and instant rescue.',
    historicalPeriod: 'c. 9th Century CE (Nrisimha Tapaniya Upanishad)',
    scripturalCitation: {
      scripture: 'Nrisimha Tapaniya Upanishad',
      verse: 'Section I.8',
      sanskritText: 'नारसिंहं परं यन्त्रं सर्वदोषनिवारणम्...',
      translation: 'The supreme Narasimha Yantra dispels all cosmic blemishes and fierce perils.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['sudarshana_yantra', 'hanuman_yantra']
  },
  {
    id: 'vastu_yantra',
    names: {
      sa: 'वास्तुपुरुष यन्त्रम्',
      iast: 'Vāstupuruṣa Yantram',
      hi: 'वास्तु यन्त्र',
      en: 'Vastu Yantra (Architectural Cosmic Grid)',
      gu: 'વાસ્તુ યંત્ર'
    },
    deity: 'Vastu Purusha',
    mantra: 'Om Vastupurushaya Namah',
    geometrySpec: {
      primaryShape: '9x9 Paramasayika Grid Matrix (81 Squares)',
      layersCount: 4,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Harmonization of architectural space, correction of Vastu dosha in homes and buildings.',
    historicalPeriod: 'c. 6th Century CE (Brihat Samhita / Mayamatam)',
    scripturalCitation: {
      scripture: 'Mayamatam',
      verse: 'Chapter 7.12',
      sanskritText: 'एकाशीतिपदं न्यस्य वास्तुपुरुषमर्चयेत्...',
      translation: 'Consecrate the 81-square Grid Matrix and worship Vastu Purusha for spatial harmony.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['sri_yantra', 'maha_meru']
  },
  {
    id: 'tara_yantra',
    names: {
      sa: 'श्रीमदुग्रतारा यन्त्रम्',
      iast: 'Tārā Yantram',
      hi: 'तारा यन्त्र',
      en: 'Tara Yantra (Deliverance from Perils)',
      gu: 'તારા યંત્ર'
    },
    deity: 'Goddess Ugra Tara',
    mantra: 'Om Hreem Streem Hum Phat',
    geometrySpec: {
      primaryShape: 'Inverted Shakti Triangle & 8 Petals',
      layersCount: 4,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Deliverance from acute financial, spiritual, and physical crises; granting of sublime wisdom and speech eloquence.',
    historicalPeriod: 'c. 10th Century CE (Brihannila Tantra / Tara Rahasya)',
    scripturalCitation: {
      scripture: 'Brihannila Tantra',
      verse: 'Patala 6.12',
      sanskritText: 'तारेति तारयत्येषा संसारात्तारिणी स्मृता...',
      translation: 'She is revered as Tara because she delivers beings across the ocean of worldly suffering.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['kali_yantra', 'matangi_yantra']
  },
  {
    id: 'tripura_sundari_yantra',
    names: {
      sa: 'श्रीत्रिपुरसुन्दरी यन्त्रम्',
      iast: 'Tripurasundarī Yantram',
      hi: 'त्रिपुरसुन्दरी (षोडशी) यन्त्र',
      en: 'Tripura Sundari Yantra (Sovereign of Beauty)',
      gu: 'ત્રિપુરા સુંદરી યંત્ર'
    },
    deity: 'Lalita Tripura Sundari (Shodashi)',
    mantra: 'Om Aim Hreem Shreem Tripurasundaryai Namah',
    geometrySpec: {
      primaryShape: '16 Petals, 8 Petals & Mula Trikona',
      layersCount: 5,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Cosmic harmony, spiritual illumination, supreme aesthetic beauty, and Sri Vidya realization.',
    historicalPeriod: 'c. 9th Century CE (Tantraraja Tantra)',
    scripturalCitation: {
      scripture: 'Tantraraja Tantra',
      verse: 'Patala 16.5',
      sanskritText: 'षोडशारं महाचक्रं त्रैलोक्यविजयावहम्...',
      translation: 'The 16-petal supreme mandala of Tripura Sundari brings triumph across the three realms.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['sri_yantra', 'kamala_yantra']
  },
  {
    id: 'bhuvaneshvari_yantra',
    names: {
      sa: 'श्रीभुवनेश्वरी यन्त्रम्',
      iast: 'Bhuvanēśvarī Yantram',
      hi: 'भुवनेश्वरी यन्त्र',
      en: 'Bhuvaneshvari Yantra (Cosmic Space Queen)',
      gu: 'ભુવનેશ્વરી યંત્ર'
    },
    deity: 'Goddess Bhuvaneshvari',
    mantra: 'Om Hreem Bhuvaneshvaryai Namah',
    geometrySpec: {
      primaryShape: 'Cosmic Hexagram & 8 Petals',
      layersCount: 4,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Universal protection, sovereignty over living dwellings, mental peace, and prosperity.',
    historicalPeriod: 'c. 10th Century CE (Sharada Tilaka)',
    scripturalCitation: {
      scripture: 'Sharada Tilaka',
      verse: 'Patala 9.2',
      sanskritText: 'ह्रींकारगर्भां भुवनेश्वरीं तां ध्यायेत् समस्ताभयदां प्रपन्नाम्...',
      translation: 'Meditate upon Bhuvaneshvari who holds the cosmic sound Hreem and protects all worlds.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['tripura_sundari_yantra', 'kamala_yantra']
  },
  {
    id: 'bhairavi_yantra',
    names: {
      sa: 'श्रीत्रिपुरभैरवी यन्त्रम्',
      iast: 'Tripurabhairavī Yantram',
      hi: 'त्रिपुर भैरवी यन्त्र',
      en: 'Tripura Bhairavi Yantra (Fire of Consciousness)',
      gu: 'ત્રિપુરા ભૈરવી યંત્ર'
    },
    deity: 'Goddess Tripura Bhairavi',
    mantra: 'Om Hsraim Hskleem Hsraum Tripurabhairavyai Namah',
    geometrySpec: {
      primaryShape: 'Radiant Hexagram & Inner Trikona',
      layersCount: 4,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Awakening of spiritual fire (Kundalini), mastery over fears and destruction of base passions.',
    historicalPeriod: 'c. 11th Century CE (Bhairavi Tantra)',
    scripturalCitation: {
      scripture: 'Bhairavi Tantra',
      verse: 'Patala 1.10',
      sanskritText: 'ह्स्रैं ह्स्क्लीं ह्स्रौंः भैरवी देवि सर्वशत्रुविमर्दिनी...',
      translation: 'Tripura Bhairavi crushes all internal vices and external hostile forces through pure divine fire.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['kali_yantra', 'chhinnamasta_yantra']
  },
  {
    id: 'chhinnamasta_yantra',
    names: {
      sa: 'प्रचण्डचण्डिका यन्त्रम्',
      iast: 'Chinnamastā Yantram',
      hi: 'छिन्नमस्ता यन्त्र',
      en: 'Chhinnamasta Yantra (Pranic Transcendence)',
      gu: 'છિન્નમસ્તા યંત્ર'
    },
    deity: 'Goddess Chhinnamasta',
    mantra: 'Om Shreem Hreem Kleem Aim Vajra Vairochaniye Hum Hum Phat Swaha',
    geometrySpec: {
      primaryShape: 'Hexagram & Inverted Pranic Yoni Triangle',
      layersCount: 4,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Transmutation of sensual desires into spiritual brilliance (Ojas), fearlessness, and mastery over breath.',
    historicalPeriod: 'c. 12th Century CE (Tantrasara / Shakta Agamas)',
    scripturalCitation: {
      scripture: 'Tantrasara',
      verse: 'Section 4.14',
      sanskritText: 'प्रत्यालीढपदां सदैव दधतीं छिन्नं शिरः कर्त्तृकां...',
      translation: 'Chhinnamasta severs the ego and nourishes her devotees with the pure nectar of cosmic awareness.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['kali_yantra', 'bhairavi_yantra']
  },
  {
    id: 'dhumavati_yantra',
    names: {
      sa: 'श्रीधूमावती यन्त्रम्',
      iast: 'Dhūmāvatī Yantram',
      hi: 'धूमावती यन्त्र',
      en: 'Dhumavati Yantra (Goddess of the Primal Void)',
      gu: 'ધૂમાવતી યંત્ર'
    },
    deity: 'Goddess Dhumavati',
    mantra: 'Om Dhoom Dhoom Dhumavatyai Phat Swaha',
    geometrySpec: {
      primaryShape: 'Void Hexagram, Inverted Triangle & 8 Petals',
      layersCount: 4,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Eradication of poverty, chronic debt, severe afflictions, and realization of deep ascetic peace.',
    historicalPeriod: 'c. 13th Century CE (Dhumavati Tantra)',
    scripturalCitation: {
      scripture: 'Dhumavati Tantra',
      verse: 'Taranga 1.4',
      sanskritText: 'धूं धूं धूमावत्यै स्वाहा मन्त्रेण सर्वदारिद्र्यनाशनम्...',
      translation: 'Worship of Dhumavati dissolves all poverty and suffering into the peaceful cosmic void.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['kali_yantra', 'bagalamukhi_yantra']
  },
  {
    id: 'matangi_yantra',
    names: {
      sa: 'श्रीराजमातङ्गी यन्त्रम्',
      iast: 'Mātaṅgī Yantram',
      hi: 'मातङ्गी यन्त्र',
      en: 'Matangi Yantra (Tantric Saraswati)',
      gu: 'માતંગી યંત્ર'
    },
    deity: 'Goddess Raja Matangi',
    mantra: 'Om Hreem Aim Bhagavati Matangishvari Shreem Swaha',
    geometrySpec: {
      primaryShape: '16 Petals, 8 Petals & Saraswati Hexagram',
      layersCount: 5,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Mastery over musical instruments, fine arts, poetic speech, memory, and magnetic eloquence.',
    historicalPeriod: 'c. 11th Century CE (Matangi Tantra)',
    scripturalCitation: {
      scripture: 'Matangi Tantra',
      verse: 'Patala 3.6',
      sanskritText: 'श्यामलां शुकहस्तां च वीणावादनतत्पराम्...',
      translation: 'Goddess Matangi, playing the celestial Veena, bestows supernatural eloquence and artistic genius.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['tara_yantra', 'tripura_sundari_yantra']
  },
  {
    id: 'kamala_yantra',
    names: {
      sa: 'श्रीमहाकमला यन्त्रम्',
      iast: 'Kamalā Yantram',
      hi: 'कमला यन्त्र',
      en: 'Kamala Yantra (Tantric Mahalakshmi)',
      gu: 'કમલા યંત્ર'
    },
    deity: 'Goddess Kamalatmika',
    mantra: 'Om Shreem Hreem Shreem Kamale Kamalalaye Praseedha Praseedha Shreem Hreem Shreem Om Mahalakshmyai Namah',
    geometrySpec: {
      primaryShape: '16 Petals, 8 Petals & Golden Hexagram',
      layersCount: 5,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Permanent material wealth, sovereign authority, fertile abundance, and supreme happiness.',
    historicalPeriod: 'c. 12th Century CE (Kamala Kalpa / Vishvasara Tantra)',
    scripturalCitation: {
      scripture: 'Kamala Kalpa',
      verse: 'Section 1.8',
      sanskritText: 'कान्त्या काञ्चनसन्निभां हिमगिरिप्रख्यैश्चतुर्भिर्गजैः...',
      translation: 'Radiant as burnished gold, bathed by four celestial elephants, Kamala confers limitless auspiciousness.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['mahalakshmi_yantra', 'tripura_sundari_yantra']
  },

  {
    id: 'durga_bisa_yantra',
    names: {
      sa: 'श्रीमहादुर्गा बीसा यन्त्रम्',
      iast: 'Durgā Bīsā Yantram',
      hi: 'दुर्गा बीसा यन्त्र',
      en: 'Durga Bisa Yantra (Supreme Protective Armor)',
      gu: 'દુર્ગા બીસા યંત્ર'
    },
    deity: 'Goddess Durga / Jagadamba',
    mantra: 'Om Dum Durgayai Namah / Om Aim Hreem Kleem Chamundayai Vichche',
    geometrySpec: {
      primaryShape: '8 Lotus Petals & Bisa Triangle Matrix (Sum of 20)',
      layersCount: 4,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Total protection from 8 existential fears, victory in disputes, business prosperity, and elimination of evil eye.',
    historicalPeriod: 'c. 10th Century CE (Mantra Mahodadhi / Shakta Pramoda)',
    scripturalCitation: {
      scripture: 'Durga Saptashati',
      verse: 'Chapter 4.17',
      sanskritText: 'दुर्गे स्मृता हरसि भीतिमशेषजन्तोः स्वस्थैः स्मृता मतिमतीव शुभां ददासि...',
      translation: 'When remembered in distress, O Mother Durga, You dispel the fears of every living being.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['kali_yantra', 'pratyangira_yantra']
  },
  {
    id: 'sudarshana_chakra_yantra',
    names: {
      sa: 'श्रीमहासुदर्शन चक्र यन्त्रम्',
      iast: 'Sudarśana Cakra Yantram',
      hi: 'सुदर्शन चक्र यन्त्र',
      en: 'Sudarshana Chakra Yantra (Cosmic Disc of Protection)',
      gu: 'સુદર્શન ચક્ર યંત્ર'
    },
    deity: 'Bhagavan Maha Sudarshana (Vishnu / Narasimha)',
    mantra: 'Om Sahasrara Hum Phat / Om Namo Bhagavate Maha Sudarshanaya Hum Phat Swaha',
    geometrySpec: {
      primaryShape: '24 Fire Flames, 12 Petals, Hexagram & 8-Spoke Wheel',
      layersCount: 5,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Absolute invulnerability, destruction of black magic and curses, victory in litigation, and relief from chronic illness.',
    historicalPeriod: 'c. 6th Century CE (Ahirbudhnya Samhita / Pancharatra)',
    scripturalCitation: {
      scripture: 'Ahirbudhnya Samhita',
      verse: 'Chapter 33.1',
      sanskritText: 'सुदर्शनं महाचक्रं सर्वशत्रुनिवर्हणम् । कोटिसूर्यप्रतीकाशं कालानलसमप्रभम्...',
      translation: 'The great Sudarshana Chakra, radiant like ten million suns, annihilates all enemies and adverse forces.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['panchamukhi_hanuman_yantra', 'pratyangira_yantra']
  },
  {
    id: 'panchamukhi_hanuman_yantra',
    names: {
      sa: 'श्रीपञ्चमुखी हनुमान् यन्त्रम्',
      iast: 'Pañcamukhī Hanumān Yantram',
      hi: 'पंचमुखी हनुमान यन्त्र',
      en: 'Panchamukhi Hanuman Yantra (Five-Faced Guardian Cosmogram)',
      gu: 'પંચમુખી હનુમાન યંત્ર'
    },
    deity: 'Lord Panchamukhi Hanuman (Rudravatara)',
    mantra: 'Om Ham Hanumate Rudratmakaya Hum Phat',
    geometrySpec: {
      primaryShape: '10 Lotus Petals & 5-Pointed Pentagram Matrix',
      layersCount: 4,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Neutralization of Saturn afflictions (Saadhe Saati), banishment of fear and spirits, physical stamina, and willpower.',
    historicalPeriod: 'c. 8th Century CE (Sudarshana Samhita / Agastya Samhita)',
    scripturalCitation: {
      scripture: 'Sudarshana Samhita',
      verse: 'Hanumatkavacham 1.1',
      sanskritText: 'पञ्चवक्त्रं महाभीमं त्रिपञ्चनयनैर्युतम् । बाहुभिर्दशभिर्युक्तं सर्वकामार्थसिद्धिदम्...',
      translation: 'Possessing five divine faces, fifteen eyes, and ten arms, the granter of all desires and spiritual ends.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['sudarshana_chakra_yantra', 'mahamrityunjaya_yantra']
  },
  {
    id: 'pratyangira_yantra',
    names: {
      sa: 'श्रीमहाविपरीत प्रत्यङ्गिरा यन्त्रम्',
      iast: 'Pratyaṅgirā Yantram',
      hi: 'प्रत्यङ्गिरा यन्त्र',
      en: 'Maha Viparita Pratyangira Yantra (Reversal of Malice Cosmogram)',
      gu: 'પ્રત્યંગિરા યંત્ર'
    },
    deity: 'Goddess Maha Viparita Pratyangira (Lion-Faced Aparajita)',
    mantra: 'Om Kshraum Pratyangirayai Namah / Om Hreem Kshraum Pratyangire Hum Phat Swaha',
    geometrySpec: {
      primaryShape: '16 Flames, 16 Petals, 8 Petals, Shatkona & Inverted Yoni',
      layersCount: 6,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Instant reversal of black magic, curses, evil eye, total protection against enemies, and reclaiming spiritual sovereignty.',
    historicalPeriod: 'Vedic / Atharva Veda Parishishta (Pratyangira Kalpa)',
    scripturalCitation: {
      scripture: 'Pratyangira Kalpa',
      verse: 'Patala 1.3',
      sanskritText: 'ॐ अस्य श्रीमहाविपरीतप्रत्यङ्गिरामन्त्रस्य अङ्गिरा ऋषिः... क्षौं बीजम्...',
      translation: 'Of this Sri Maha Viparita Pratyangira mantra, the Seer is Rishi Angirasa and the seed is Kshraum.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['durga_bisa_yantra', 'sudarshana_chakra_yantra', 'kali_yantra']
  },
  {
    id: 'saraswati_yantra',
    names: {
      sa: 'श्री सरस्वती यन्त्रम्',
      iast: 'Saraswatī Yantram',
      hi: 'सरस्वती यन्त्र',
      en: 'Saraswati Yantra (Goddess of Learning & Eloquence)',
      gu: 'સરસ્વતી યંત્ર'
    },
    deity: 'Goddess Saraswati (Sharada)',
    mantra: 'Om Aim Saraswatyai Namah',
    geometrySpec: {
      primaryShape: 'Hexagram, 8-Petal Ogee Lotus & Central Aim Bindu',
      layersCount: 5,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Awakening transcendent intellect, photographic memory, eloquence, literature, and mastery of all arts and music.',
    historicalPeriod: 'Vedic / Saraswati Rahasya Upanishad & Mantra Mahodadhi',
    scripturalCitation: {
      scripture: 'Saraswati Rahasya Upanishad',
      verse: 'Mantra 1-2',
      sanskritText: 'ॐ वाग्देव्यै च विद्महे कामराजाय धीमहि। तन्नो देवी प्रचोदयात्॥',
      translation: 'We meditate upon Goddess Saraswati, the embodiment of transcendental speech; may She illuminate our intellect.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['gayatri_yantra', 'medha_dakshinamurti_yantra', 'hayagriva_yantra']
  },
  {
    id: 'gayatri_yantra',
    names: {
      sa: 'श्री गायत्री यन्त्रम्',
      iast: 'Gāyatrī Yantram',
      hi: 'गायत्री यन्त्र',
      en: 'Gayatri Yantra (24 Syllables Solar Illumination)',
      gu: 'ગાયત્રી યંત્ર'
    },
    deity: 'Goddess Vedamata Gayatri (Savitur)',
    mantra: 'Om Bhur Bhuvah Svah Tat Savitur Varenyam Bhargo Devasya Dheemahi Dhiyo Yo Nah Prachodayat',
    geometrySpec: {
      primaryShape: '24-Petal Lotus, 8-Petal Lotus, Solar Shatkona & Pranava Core',
      layersCount: 6,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Self-realization, purification of accumulated karma, enhancement of vital prana, solar harmony, and intellectual illumination.',
    historicalPeriod: 'c. Rigvedic Period (Rigveda 3.62.10 & Agni Puranam)',
    scripturalCitation: {
      scripture: 'Rigveda',
      verse: 'Mandala 3, Sukta 62, Verse 10',
      sanskritText: 'ॐ तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि। धियो यो नः प्रचोदयात्॥',
      translation: 'We meditate upon that adorable effulgence of the divine Sun, the Creator; may He awaken and illuminate our intellects.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['surya_yantra', 'saraswati_yantra', 'sri_yantra']
  },
  {
    id: 'medha_dakshinamurti_yantra',
    names: {
      sa: 'श्री मेधा दक्षिणामूर्ति यन्त्रम्',
      iast: 'Medhā Dakṣiṇāmūrti Yantram',
      hi: 'मेधा दक्षिणामूर्ति यन्त्र',
      en: 'Medha Dakshinamurti Yantra (Supreme Preceptor of Intellect)',
      gu: 'મેધા દક્ષિણામૂર્તિ યંત્ર'
    },
    deity: 'Lord Dakshinamurti (Adi Guru Shiva)',
    mantra: 'Om Hsaum Om Namo Bhagavate Dakshinamurtaye Mahyam Medham Prajnam Prayachha Swaha',
    geometrySpec: {
      primaryShape: '16 Kalas Petals, 8 Petals, Inverted Triangle of Silence & Hsaum Core',
      layersCount: 6,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Acquiring photographic memory, mastery of philosophy and higher sciences, guru grace, and overcoming intellectual stagnation.',
    historicalPeriod: 'Upanishadic / Dakshinamurti Upanishad & Sharada Tilaka',
    scripturalCitation: {
      scripture: 'Dakshinamurti Upanishad',
      verse: 'Mantra 1-3',
      sanskritText: 'ॐ नमो भगवते दक्षिणामूर्तये मह्यं मेधां प्रज्ञां प्रयच्छ स्वाहा...',
      translation: 'Salutations to the Supreme Lord Dakshinamurti; grant me transcendental memory, intellect, and profound wisdom.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['saraswati_yantra', 'hayagriva_yantra', 'mahamrityunjaya_yantra']
  },
  {
    id: 'hayagriva_yantra',
    names: {
      sa: 'श्री हयग्रीव यन्त्रम्',
      iast: 'Hayagrīva Yantram',
      hi: 'हयग्रीव यन्त्र',
      en: 'Hayagriva Yantra (Lord of Transcendental Wisdom & Vedic Mastery)',
      gu: 'હયગ્રીવ યંત્ર'
    },
    deity: 'Lord Hayagriva (Vishnu Wisdom Incarnation)',
    mantra: 'Om Hraum Om Namo Bhagavate Hayagrivaya Swaha',
    geometrySpec: {
      primaryShape: '12-Aditya Petals, 8 Petals, Vaishnava Shatkona & Hraum Bindu',
      layersCount: 6,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Triumph in debates, competitive examinations, legal argument, analytical reasoning, and uncovering the deep secrets of the Vedas.',
    historicalPeriod: 'Pancharatra / Hayagriva Upanishad',
    scripturalCitation: {
      scripture: 'Hayagriva Upanishad',
      verse: 'Mantra 1-2',
      sanskritText: 'ॐ ह्रौं ॐ नमो भगवते हयग्रीवाय विष्णवे मह्यं मेधां प्रज्ञां प्रयच्छ स्वाहा...',
      translation: 'Salutations to Lord Hayagriva, the cosmic embodiment of the Vedas; enthroned within the solar orb, bless me with supreme wisdom.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['saraswati_yantra', 'medha_dakshinamurti_yantra', 'sudarshana_chakra_yantra']
  },
  {
    id: 'ashta_lakshmi_yantra',
    names: {
      sa: 'श्री अष्टलक्ष्मी महायन्त्रम्',
      iast: 'Aṣṭa Lakṣmī Yantram',
      hi: 'अष्टलक्ष्मी यन्त्र',
      en: 'Ashta Lakshmi Yantra (Eightfold Divine Abundance)',
      gu: 'અષ્ટલક્ષ્મી યંત્ર'
    },
    deity: 'Ashta Lakshmi (8 Sovereign Forms of Mahalakshmi)',
    mantra: 'Om Shreem Hreem Kleem Ashta Lakshmyai Namah',
    geometrySpec: {
      primaryShape: '8-Petal Ogee Lotus, Vaishnava Shatkona & Shreem Singularity',
      layersCount: 5,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Attainment of the 8 forms of wealth: primeval grace, food grains, courage, royalty, progeny, victory, knowledge, and gold.',
    historicalPeriod: 'Pancharatra / Lakshmi Tantram & Sanatkumara Samhita',
    scripturalCitation: {
      scripture: 'Lakshmi Tantram',
      verse: 'Patala 51, Verses 12-15',
      sanskritText: 'आदिलक्ष्मीर्धान्यलक्ष्मीर्धैर्यलक्ष्मीस्तथैव च... धनलक्ष्मीश्चेत्यष्टौ च मण्डले संप्रतिष्ठिताः॥',
      translation: 'Adi, Dhanya, Dhairya, Gaja, Santana, Vijaya, Vidya, and Dhana Lakshmi established within the sacred mandala.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['mahalakshmi_yantra', 'kanakadhara_yantra', 'kuber_yantra']
  },
  {
    id: 'kanakadhara_yantra',
    names: {
      sa: 'श्री कनकधारा यन्त्रम्',
      iast: 'Kanakadhārā Yantram',
      hi: 'कनकधारा यन्त्र',
      en: 'Kanakadhara Yantra (Golden Shower of Wealth)',
      gu: 'કનકધારા યંત્ર'
    },
    deity: 'Goddess Mahalakshmi (Kanakadhara)',
    mantra: 'Om Hreem Shreem Kleem Mahalakshmyai Namah',
    geometrySpec: {
      primaryShape: '16-Petal Lotus, 8 Golden Coins, Primary Triangle & Hreem Shreem Core',
      layersCount: 6,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Instant liquidation of severe debts, unexpected financial windfall, relief from Saturnian financial hardships, and commercial breakthroughs.',
    historicalPeriod: 'c. 8th Century CE (Jagadguru Adi Shankaracharya Kanakadhara Stotram)',
    scripturalCitation: {
      scripture: 'Kanakadhara Stotram',
      verse: 'Verse 21',
      sanskritText: 'द्राविद्युदन्विभवरत्नसमृद्धिहेतुं कल्याणीमावहसि मे कमलासनस्थाम्...',
      translation: 'I adore the sovereign Empress of the cosmos seated upon the lotus, crowning the seeker with immense jeweled abundance.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['ashta_lakshmi_yantra', 'sri_yantra', 'kuber_yantra']
  },
  {
    id: 'vyapar_vriddhi_yantra',
    names: {
      sa: 'श्री व्यापार वृद्धि यन्त्रम्',
      iast: 'Vyāpāra Vṛddhi Yantram',
      hi: 'व्यापार वृद्धि यन्त्र',
      en: 'Vyapar Vriddhi Yantra (Enterprise & Commercial Expansion)',
      gu: 'વ્યાપાર વૃદ્ધિ યંત્ર'
    },
    deity: 'Goddess Mahalakshmi & Lord Kubera (Yugala)',
    mantra: 'Om Shreem Hreem Kleem Kuberaya Namah',
    geometrySpec: {
      primaryShape: '8-Petal Trade Lotus, Shatkona, Altar Square & Klim Shreem Core',
      layersCount: 6,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Multiplication of retail sales, commercial footfall, removal of business jealousy and stagnant inventory, and lucrative enterprise expansion.',
    historicalPeriod: 'Tantric / Mantra Maharnava & Kubera Tantram',
    scripturalCitation: {
      scripture: 'Mantra Maharnava',
      verse: 'Kubera Kalpa 42',
      sanskritText: 'व्यापारवृद्धिकरं यन्त्रं लिखेद्वाणिज्यमण्डले। धनधान्यसमृद्धिः स्यात् सर्वव्यापारसिद्धिदा॥',
      translation: 'Inscribing the Vyapar Vriddhi Yantra in the commercial sanctum bestows inexhaustible abundance and total business success.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['kuber_yantra', 'ashta_lakshmi_yantra', 'ganesh_yantra']
  },
  {
    id: 'vaibhav_lakshmi_yantra',
    names: {
      sa: 'श्री वैभव लक्ष्मी यन्त्रम्',
      iast: 'Vaibhava Lakṣmī Yantram',
      hi: 'वैभव लक्ष्मी यन्त्र',
      en: 'Vaibhav Lakshmi Yantra (Household Harmony & Glory)',
      gu: 'વૈભવ લક્ષ્મી યંત્ર'
    },
    deity: 'Goddess Vaibhav Lakshmi',
    mantra: 'Om Shreem Hreem Kleem Shreem Vaibhava Lakshmyai Namah',
    geometrySpec: {
      primaryShape: '8-Petal Lotus of Splendors, Shatkona, Triangle & Om Shreem Core',
      layersCount: 6,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Friday Vrata worship, marital concord, permanent removal of domestic strife, radiant health, and peaceful household prosperity.',
    historicalPeriod: 'Puranic / Bhavishyottara Purana',
    scripturalCitation: {
      scripture: 'Bhavishyottara Purana',
      verse: 'Vaibhav Lakshmi Vrata Kalpa',
      sanskritText: 'शुक्रवारे प्रपूज्यैव वैभवं प्राप्नुयात् सदा। यन्त्रमध्ये स्थिता देवी सर्वसौभाग्यदायिनी॥',
      translation: 'Worshipping Goddess Vaibhav Lakshmi in this sacred yantra on Fridays bestows unending glory, splendor, and all auspicious fortunes.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['ashta_lakshmi_yantra', 'mahalakshmi_yantra', 'santana_gopala_yantra']
  },
  {
    id: 'swarna_akarshana_bhairava_yantra',
    names: {
      sa: 'श्री स्वर्णाकर्षण भैरव यन्त्रम्',
      iast: 'Svarṇākarṣaṇa Bhairava Yantram',
      hi: 'स्वर्णाकर्षण भैरव यन्त्र',
      en: 'Swarna Akarshana Bhairava Yantra (Attractor of Gold & Cosmic Treasures)',
      gu: 'સ્વર્ણાકર્ષણ ભૈરવ યંત્ર'
    },
    deity: 'Lord Swarna Akarshana Bhairava',
    mantra: 'Om Aim Klaam Kleem Hloom Hraam Hreem Hroom Sah Apaduddharanaya Swarna Akarshana Bhairavaya Namah',
    geometrySpec: {
      primaryShape: '8-Petal Lotus, Gold Shatkona, Crisis-Relief Triangle & Aim Kleem Core',
      layersCount: 6,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Total dissolution of acute poverty, liquidation of crushing debts, attraction of gold, and royal fearlessness.',
    historicalPeriod: 'Tantric / Rudrayamala Tantram & Batuka Bhairava Kalpa',
    scripturalCitation: {
      scripture: 'Rudrayamala Tantram',
      verse: 'Swarna Akarshana Bhairava Stotram',
      sanskritText: 'ॐ ऐं क्लां क्लीं ह्लूं ह्रां ह्रीं ह्रूं सः। आपदुद्धारणाय अजामलवद्धाय लोकेश्वराय स्वर्णाकर्षणभैरवाय नमः॥',
      translation: 'Salutations to Lord Swarna Akarshana Bhairava, the redeemer from all perils, drawing perpetual golden abundance.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['kuber_yantra', 'ashta_lakshmi_yantra', 'kanakadhara_yantra']
  },
  {
    id: 'sanjeevani_mahamrityunjaya_yantra',
    names: {
      sa: 'श्री सञ्जीवनी महामृत्युञ्जय यन्त्रम्',
      iast: 'Sañjīvanī Mahāmṛtyuñjaya Yantram',
      hi: 'सञ्जीवनी महामृत्युंजय यन्त्र',
      en: 'Sanjeevani Mahamrityunjaya Yantra (Cosmic Nectar of Immortality)',
      gu: 'સંજીવની મહામૃત્યુંજય યંત્ર'
    },
    deity: 'Lord Amrita Mahamrityunjaya',
    mantra: 'Om Haum Joom Sah Om Bhur Bhuvah Svah Tryambakam Yajamahe Sugandhim Pushtivardhanam Urvarukamiva Bandhanan Mrityor Mukshiya Mamritat',
    geometrySpec: {
      primaryShape: '12-Aditya Petals, 8-Petal Lotus, Amrita Kalasha Hexagram & Haum Joom Sah Core',
      layersCount: 6,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Averting untimely accidental death (Akaala Mrityu), recovery from fatal diseases, boosting immunity, and conquering fear.',
    historicalPeriod: 'c. Vedic & Agamic / Netra Tantram & Rudradhyaya',
    scripturalCitation: {
      scripture: 'Netra Tantram',
      verse: 'Patala 2, Verse 15',
      sanskritText: 'अमृतेन स्रावयन्तं चन्द्रमण्डलमध्यगम्। मृत्युं जयति येनैव सञ्जीवनीति सा स्मृता॥',
      translation: 'Meditating within this yantra upon Lord Mrityunjaya raining celestial nectar from the lunar sphere conquers death.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['mahamrityunjaya_yantra', 'sharabheshwara_yantra', 'sadashiva_yantra']
  },
  {
    id: 'sharabheshwara_yantra',
    names: {
      sa: 'श्री शरभेश्वर यन्त्रम्',
      iast: 'Śarabheśvara Yantram',
      hi: 'शरभेश्वर यन्त्र',
      en: 'Sharabheshwara Yantra (Pacification of Fierce Cosmic Wrath)',
      gu: 'શરભેશ્વર યંત્ર'
    },
    deity: 'Lord Sharabheshwara (Winged Lion-Bird Avatar of Shiva)',
    mantra: 'Om Khem Kham Khatt Hum Phat Swaha / Om Sham Sharabheshwaraya Namah',
    geometrySpec: {
      primaryShape: '16 Radiant Spikes, 8-Petal Lotus, Shatkona & Fierce Khem Core',
      layersCount: 6,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Total pacification of fierce adversaries, victory in complex legal disputes, neutralising dark sorcery, and calming violent wrath.',
    historicalPeriod: 'Upanishadic & Tantric / Sharabha Upanishad & Akasha Bhairava Kalpa',
    scripturalCitation: {
      scripture: 'Sharabha Upanishad',
      verse: 'Mantra 1-3',
      sanskritText: 'यो हि शरभरूपेण नृसिंहमुग्रतेजसम्। शमयामास जगतां पालनाय महाद्युतिः॥',
      translation: 'Salutations to Lord Sharabheshwara who assumed the winged Sharabha form to pacify the blazing fury of Narasimha.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['pratyangira_yantra', 'sudarshana_chakra_yantra', 'durga_bisa_yantra']
  },
  {
    id: 'sadashiva_yantra',
    names: {
      sa: 'श्री सदाशिव पञ्चब्रह्म यन्त्रम्',
      iast: 'Sadāśiva Pañcabrahma Yantram',
      hi: 'सदाशिव यन्त्र',
      en: 'Sadashiva Panchabrahma Yantra (Cosmic Fivefold Form of Shiva)',
      gu: 'સદાશિવ યંત્ર'
    },
    deity: 'Lord Sadashiva (Five-Faced Mahadeva)',
    mantra: 'Om Namah Shivaya',
    geometrySpec: {
      primaryShape: '16 Kalas Petals, Sacred Pentagram Star, Inner Altar & Panchakshari Core',
      layersCount: 6,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Universal peace, balancing the 5 gross elements (Panchabhuta), resolving Kala Sarpa dosha, and attainment of ultimate liberation (Moksha).',
    historicalPeriod: 'Vedic & Agamic / Taittiriya Aranyaka & Kamika Agama',
    scripturalCitation: {
      scripture: 'Taittiriya Aranyaka',
      verse: 'Mahanarayana Upanishad (Panchabrahma Mantras)',
      sanskritText: 'ईशानः सर्वविद्यानामीश्वरः सर्वभूतानां ब्रह्माधिपतिर्ब्रह्मणोऽधिपतिर्ब्रह्मा शिवो मे अस्तु सदाशिवोम्॥',
      translation: 'Lord Ishana, the ruler of all knowledge and sovereign of all beings, may that benevolent Sadashiva be ever auspicious unto me.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['sanjeevani_mahamrityunjaya_yantra', 'sri_yantra', 'vastu_yantra']
  },

  {
    id: 'maha_ganapati_yantra',
    names: {
      sa: 'श्री महागणपति यन्त्रम्',
      iast: 'Mahāganapati Yantram',
      hi: 'महागणपति यन्त्र',
      en: 'Maha Ganapati Yantra (Supreme Sovereign of Siddhi & Wealth)',
      gu: 'મહાગણપતિ યંત્ર'
    },
    deity: 'Lord Maha Ganapati with Vallabha Devi',
    mantra: 'Om Shreem Hreem Kleem Glaum Gam Ganapataye Vara Varada Sarvajanam Me Vashamanaya Swaha',
    geometrySpec: {
      primaryShape: '16 Kalas Lotus, Ashta-Vinayaka Lotus, Shatkona Hexagram, Central Triangle & Bindu',
      layersCount: 6,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Removal of all planetary and karmic obstacles, unprecedented business expansion, wisdom, intellect, and all-round spiritual and material mastery.',
    historicalPeriod: 'Agamic & Tantric / Sharada Tilakam & Mantra Mahodadhi',
    scripturalCitation: {
      scripture: 'Sharada Tilakam',
      verse: 'Patala 13, Verses 1-3',
      sanskritText: 'हस्तीन्द्राननमिन्दुचूड़मरुणच्छायं त्रिनेत्रं रसादाश्लिष्टं प्रियया सपद्मकरया स्वाङ्कस्थया संततम्॥',
      translation: 'We meditate on Lord Maha Ganapati, radiant like the rising crimson sun, three-eyed, holding His consort Vallabha, adorned with weapons and the urn of nectar.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['sri_yantra', 'kanakadhara_yantra', 'ashta_lakshmi_yantra', 'ganesh_yantra']
  },
  {
    id: 'sankata_nashana_ganesha_yantra',
    names: {
      sa: 'श्री संकटनाशन गणेश यन्त्रम्',
      iast: 'Saṅkaṭanāśana Gaṇeśa Yantram',
      hi: 'संकटनाशन गणेश यन्त्र',
      en: 'Sankata Nashana Ganesha Yantra (Deliverance from All Calamities)',
      gu: 'સંકટનાશન ગણેશ યંત્ર'
    },
    deity: 'Lord Sankata Nashana Ganesha (12 Names of Ganesha)',
    mantra: 'Om Gam Ganapataye Namaha / Om Sankatanashanaya Namaha',
    geometrySpec: {
      primaryShape: '12 Divine Names Lotus, 8 Direction Shield Lotus, Solar Ray Radiance, Inverted Triangle & Bindu',
      layersCount: 5,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Instant relief from suffocating debts, severe court/legal battles, chronic planetary curses (Sade Sati, Rahu-Ketu), and critical misfortunes.',
    historicalPeriod: 'Puranic / Narada Purana (Sankata Nashana Ganesha Stotram)',
    scripturalCitation: {
      scripture: 'Narada Purana',
      verse: 'Sankata Nashana Ganesha Stotra, Verses 1-3',
      sanskritText: 'प्रणम्य शिरसा देवं गौरीपुत्रं विनायकम्। भक्तावासं स्मरेन्नित्यमायुःकामार्थसिद्धये॥',
      translation: 'Bowing with revered head to Lord Vinayaka, let the devotee contemplate Him constantly for longevity, purpose, and total liberation from calamities.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['maha_ganapati_yantra', 'durga_bisa_yantra', 'sanjeevani_mahamrityunjaya_yantra', 'ganesh_yantra']
  },
  {
    id: 'ucchishta_ganapati_yantra',
    names: {
      sa: 'श्री उच्छिष्ट गणपति यन्त्रम्',
      iast: 'Ucchiṣṭa Gaṇapati Yantram',
      hi: 'उच्छिष्ट गणपति यन्त्र',
      en: 'Ucchishta Ganapati Yantra (Rapid Manifestation & Adversity Annihilation)',
      gu: 'ઉચ્છિષ્ટ ગણપતિ યંત્ર'
    },
    deity: 'Lord Ucchishta Ganapati with Nila Saraswati',
    mantra: 'Om Hastipishachilikhe Swaha / Om Gam Goom Ucchishtaganapataye Namaha',
    geometrySpec: {
      primaryShape: '8 Tantric Petals Lotus, Hexagram, Guhya Triangle with Hastipishachi Inscription & Core Bindu',
      layersCount: 5,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Swift accomplishment of impossible tasks, destruction of hidden enemy conspiracies, victory in legal battles, and immediate eradication of chronic penury.',
    historicalPeriod: 'Tantric / Rudrayamala Tantra & Meru Tantra',
    scripturalCitation: {
      scripture: 'Rudrayamala Tantra',
      verse: 'Ucchishta Ganapati Kalpa, Patala 18',
      sanskritText: 'चतुर्भुजं रक्ततनुं त्रिनेत्रं पाशाङ्कुशौ मोदकपात्रदन्तौ। कराम्बुजैर्धारयन्तं गणेशं ध्यायेत्प्रसन्नं सकलार्थसिद्धये॥',
      translation: 'Meditation on the crimson four-armed Lord Ucchishta Ganapati holding noose, goad, sweets, and broken tusk yields instantaneous fulfillment of all hidden aims.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['maha_ganapati_yantra', 'bagalamukhi_yantra', 'pratyangira_yantra', 'swarna_akarshana_bhairava_yantra']
  },
  {
    id: 'haridra_ganesha_yantra',
    names: {
      sa: 'श्री हरिद्रा गणेश यन्त्रम्',
      iast: 'Haridrā Gaṇeśa Yantram',
      hi: 'हरिद्रा गणेश यन्त्र',
      en: 'Haridra Ganesha Yantra (Turmeric Lord of Auspiciousness & Stambhana)',
      gu: 'હરિદ્રા ગણેશ યંત્ર'
    },
    deity: 'Lord Haridra Ganapati (Golden Yellow Turmeric Form)',
    mantra: 'Om Hoom Gam Glaum Haridraganapataye Vara Varada Sarvajanahridayam Stambhaya Stambhaya Swaha',
    geometrySpec: {
      primaryShape: '8-Petal Golden Lotus, Shatkona Hexagram, Stambhana Square Altar & Radiant Turmeric Bindu',
      layersCount: 5,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Dispelling delays in marriage, blessing with stable wealth and gold, stambhana of hostile speech/envy, and strengthening favorable Jupiter (Guru) influences.',
    historicalPeriod: 'Agamic / Mantra Mahodadhi & Dakshinamurti Samhita',
    scripturalCitation: {
      scripture: 'Mantra Mahodadhi',
      verse: 'Taranga 2, Verses 35-38',
      sanskritText: 'हरिद्राभं चतुर्बाहुं पाशाङ्कुशधरं वरम्। मोदकं दन्तयुक्तं च पीतवस्त्रविभूषितम्॥',
      translation: 'Meditating on the golden-turmeric hued, four-armed Lord Haridra Ganapati adorned with radiant yellow garments, the seeker attains all auspicious fruits.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['maha_ganapati_yantra', 'brihaspati_yantra', 'vaibhav_lakshmi_yantra', 'saraswati_yantra']
  },

  {
    id: 'vastu_dosha_nivarana_yantra',
    names: {
      sa: 'श्री वास्तुदोषनिवारण यन्त्रम्',
      iast: 'Vāstudōṣanivāraṇa Yantram',
      hi: 'वास्तु दोष निवारण यन्त्र',
      en: 'Vastu Dosha Nivarana Yantra (Cosmic Directional Harmonizer)',
      gu: 'વાસ્તુ દોષ નિવારણ યંત્ર'
    },
    deity: 'Lord Vastu Purusha and the 45 Celestial Mandala Devas',
    mantra: 'Om Vastoshpate Pratijanihyasman Svaavesho Anameevo Bhava Nah Swaha',
    geometrySpec: {
      primaryShape: '8-Petal Directional Lotus, 9-Pada Vastu Purusha Mandala Grid, Concentric Citadel & Brahma Sthana Bindu',
      layersCount: 5,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Neutralizing structural architectural flaws, directional imbalances, geopathic stress, and restoring universal harmony without demolition.',
    historicalPeriod: 'Puranic & Architectural / Vishvakarma Prakasha & Samarangana Sutradhara',
    scripturalCitation: {
      scripture: 'Vishvakarma Prakasha',
      verse: 'Chapter 1, Verses 3-5',
      sanskritText: 'वास्तोष्पते प्रतिजानीह्यस्मान् त्स्वावेशो अनमीवो भवा नः। यत् त्वेमहे प्रति तन्नो जुषस्व शं नो भव द्विपदे शं चतुष्पदे॥',
      translation: 'O Lord of Dwellings! Recognize and be gracious unto us. Grant us refuge devoid of ailments. Bestow blessings on our kin and cattle.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['dikpala_ashtadigbandhana_yantra', 'bhoomi_kurma_yantra', 'matsya_yantra', 'sri_yantra']
  },
  {
    id: 'dikpala_ashtadigbandhana_yantra',
    names: {
      sa: 'श्री दिक्पाल अष्टदिग्बन्धन यन्त्रम्',
      iast: 'Dikpāla Aṣṭadigbandhana Yantram',
      hi: 'दिक्पाल अष्टदिग्बन्धन यन्त्र',
      en: 'Dikpala Ashtadigbandhana Yantra (Shield of the 8 Directional Regents)',
      gu: 'દિક્પાલ અષ્ટદિગ્બંધન યંત્ર'
    },
    deity: 'The Eight Celestial Regents (Indra, Agni, Yama, Nirriti, Varuna, Vayu, Kubera, Ishana)',
    mantra: 'Om Indraya Namaha Om Agnaye Namaha ... Om Digbandhanaya Swaha',
    geometrySpec: {
      primaryShape: '8-Petal Regents Lotus, 8-Pointed Star (Octagram), 8 Radial Tridents & Central Protection Core',
      layersCount: 5,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Fortifying the perimeter of properties against negative external forces, road hits (Vithi Shula), cross-boundary curses, burglary, and envy.',
    historicalPeriod: 'Puranic & Tantric / Agni Purana & Narada Purana',
    scripturalCitation: {
      scripture: 'Agni Purana',
      verse: 'Chapter 51, Verses 1-4',
      sanskritText: 'पूर्वे चेन्द्रस्तथा वह्निर्दक्षिणे यम एव च। नैर्ऋत्यां निरृतिः पश्चाद्वरुणो मारुतो दिशि॥',
      translation: 'In the East resides Indra, in South-East Agni, South Yama, South-West Nirriti, West Varuna, North-West Vayu, North Kubera, North-East Ishana. Stationed thus, they protect the cosmos.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['vastu_dosha_nivarana_yantra', 'sudarshana_chakra_yantra', 'durga_bisa_yantra', 'pratyangira_yantra']
  },
  {
    id: 'bhoomi_kurma_yantra',
    names: {
      sa: 'श्री भूमिकूर्म यन्त्रम्',
      iast: 'Bhūmi Kūrma Yantram',
      hi: 'भूमि कूर्म यन्त्र',
      en: 'Bhoomi Kurma Yantra (Cosmic Foundation & Land Consecration Mandalam)',
      gu: 'ભૂમિ કૂર્મ યંત્ર'
    },
    deity: 'Lord Kurma (Cosmic Tortoise Avatar) and Goddess Bhoomi Devi',
    mantra: 'Om Hreem Koormaya Namaha / Om Dharanidharaya Namaha / Om Lam Prithivyai Namaha',
    geometrySpec: {
      primaryShape: '8-Petal Terrestrial Lotus, Hexagonal Kurma Carapace Shield, Prithvi Square & Golden Core Bindu',
      layersCount: 5,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Bhoomi Poojan rites, foundation stone laying, nullifying subsoil impurities (Shalya Dosha), resolving land litigation, and guaranteeing seismic & structural durability.',
    historicalPeriod: 'Agamic & Architectural / Mayamatam & Varahi Tantra',
    scripturalCitation: {
      scripture: 'Mayamatam',
      verse: 'Chapter 12, Verses 15-18',
      sanskritText: 'कूर्माकारेण संस्थाप्य धारिणीं धरणीं पराम्। यत्र कूर्मासनं सम्यक् तत्र वास्तोः सुखं भवेत्॥',
      translation: 'Establishing the supreme earth in the likeness of the cosmic tortoise, wherever the Kurma seat is consecrated, everlasting joy prevails in that dwelling.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['vastu_dosha_nivarana_yantra', 'matsya_yantra', 'brihaspati_yantra', 'shani_yantra']
  },
  {
    id: 'matsya_yantra',
    names: {
      sa: 'श्री मत्स्य यन्त्रम्',
      iast: 'Matsya Yantram',
      hi: 'मत्स्य यन्त्र',
      en: 'Matsya Yantra (Sacred Water-Element & North-East Vastu Cleanser)',
      gu: 'મત્સ્ય યંત્ર'
    },
    deity: 'Lord Matsya Avatar (Veda-Rescuing Golden Fish)',
    mantra: 'Om Matsyaya Namaha / Om Kleem Matsyaroopaya Namaha',
    geometrySpec: {
      primaryShape: '12-Petal Aquatic Lotus, Interlocking Twin Fish Spirals, Inner Sanctuary & Amrita Blue Bindu',
      layersCount: 5,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Rectifying heavy afflictions in the North-East (Ishana), purifying faulty water sources, alleviating mental depression, and promoting fluid wealth.',
    historicalPeriod: 'Puranic / Matsya Purana & Vishvakarma Vastu Shastra',
    scripturalCitation: {
      scripture: 'Matsya Purana',
      verse: 'Chapter 1, Verses 10-13',
      sanskritText: 'शृङ्गिणं काञ्चनं दिव्यं महामत्स्यस्वरूपिणम्। वेदानां रक्षणार्थाय नौकारूपधरो हरिः॥',
      translation: 'Radiant as gold with celestial horn, Lord Hari assumed the form of the Great Fish to rescue the Vedas. By His contemplation, all Vastu blemishes dissolve.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['vastu_dosha_nivarana_yantra', 'chandra_yantra', 'saraswati_yantra', 'bhoomi_kurma_yantra']
  },

  {
    id: 'vishnu_yantra',
    names: {
      sa: 'श्रीविष्णु यन्त्रम्',
      iast: 'Śrīviṣṇu Yantram',
      hi: 'श्री विष्णु यन्त्र',
      en: 'Sri Vishnu / Narayana Yantra (Universal Preserver Matrix)',
      gu: 'શ્રી વિષ્ણુ યંત્ર'
    },
    deity: 'Lord Maha Vishnu / Narayana',
    mantra: 'Om Namo Bhagavate Vasudevaya / Om Namo Narayanaya',
    geometrySpec: {
      primaryShape: '12-Petal Dvadasakshara Lotus, 8-Petal Ashtakshara Lotus, Vaishnava Hexagram, 8-Spoke Sudarshana Wheel & Gold Bindu',
      layersCount: 5,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Universal cosmic harmony, neutralizing Pitra and Guru doshas, dharmic prosperity, and attainment of Vaikuntha.',
    historicalPeriod: 'Puranic / Pancharatra Agamas & Srimad Bhagavatam',
    scripturalCitation: {
      scripture: 'Srimad Bhagavatam',
      verse: 'Canto 12, Chapter 11, Verses 19-20',
      sanskritText: 'ध्यायेन्नारायणं देवं शङ्खचक्रगदाधरम्। पीताम्बरधरं सौम्यं वनमालाविभूषितम्॥',
      translation: 'One should meditate upon Lord Narayana holding conch, discus, and mace, dressed in golden silk, the lone sovereign fulfilling all noble desires.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['sudarshana_chakra_yantra', 'ashta_lakshmi_yantra', 'rama_yantra', 'narasimha_yantra']
  },
  {
    id: 'varaha_yantra',
    names: {
      sa: 'श्रीभूवराह यन्त्रम्',
      iast: 'Śrībhūvarāha Yantram',
      hi: 'श्री वराह यन्त्र',
      en: 'Sri Varaha Yantra (Sacred Earth Rescuer & Property Matrix)',
      gu: 'શ્રી વરાહ યંત્ર'
    },
    deity: 'Lord Yagya Varaha & Goddess Bhudevi',
    mantra: 'Om Namah Shri Varahaya Dharanidharaya Swaha / Om Hreem Bhoom Varahaya Namaha',
    geometrySpec: {
      primaryShape: '12-Petal Lotus, 8-Petal Prithvi Lotus, Prithvi Octagram with 8 Divine Boar Tusk Curves & Central Bindu',
      layersCount: 5,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Land and property acquisition, clearing Vastu Shalya doshas, victory in property disputes, and recovering lost status.',
    historicalPeriod: 'Puranic / Varaha Purana & Srimad Bhagavatam',
    scripturalCitation: {
      scripture: 'Srimad Bhagavatam',
      verse: 'Canto 3, Chapter 13, Verse 33',
      sanskritText: 'जलौघमग्नां सचराचरां महीं विषाणकोट्या सहसोदधार। विराजते तेन वपुर्महाप्रभो यथा गजेन्द्रः सरसीरुहं करे॥',
      translation: 'Submerged in the cosmic deluge, the Earth was effortlessly hoisted upon His divine tusk by Lord Varaha, resplendent like a royal tusker holding a lotus.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['vastu_dosha_nivarana_yantra', 'bhoomi_kurma_yantra', 'matsya_yantra', 'vishnu_yantra']
  },
  {
    id: 'rama_yantra',
    names: {
      sa: 'श्रीराम यन्त्रम्',
      iast: 'Śrīrāma Yantram',
      hi: 'श्री राम यन्त्र',
      en: 'Sri Rama / Rama Raksha Yantra (Dharmic Victory & Sovereign Armor Matrix)',
      gu: 'શ્રી રામ યંત્ર'
    },
    deity: 'Maryada Purushottama Lord Sri Rama (with Sita, Lakshmana, Hanuman)',
    mantra: 'Om Ram Ramaya Namaha / Hare Rama Hare Rama Rama Rama Hare Hare',
    geometrySpec: {
      primaryShape: '16-Petal Taraka Lotus, 8-Petal Rama-Parivara Lotus, Kodanda Bow Hexagram, Victory Triangle & Taraka Beeja Ram Bindu',
      layersCount: 5,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Righteous triumph over adversity, supreme domestic peace, moral fortitude, neutralizing Sun dosha, and Taraka liberation.',
    historicalPeriod: 'Vedic-Upanishadic / Rama Rahasya Upanishad & Valmiki Ramayana',
    scripturalCitation: {
      scripture: 'Valmiki Ramayana',
      verse: 'Aranya Kanda, Sarga 37, Verse 13',
      sanskritText: 'रामो विग्रहवान् धर्मः साधुः सत्यपराक्रमः। राजा सर्वस्य लोकस्य देवानामिव वासवः॥',
      translation: 'Sri Rama is the living embodiment of Dharma, virtuous, of unfailing truth and valour, the sovereign monarch of all the worlds.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['vishnu_yantra', 'panchamukhi_hanuman_yantra', 'surya_yantra', 'sudarshana_chakra_yantra']
  },

  {
    id: 'hanuman_yantra',
    names: {
      sa: 'श्रीवीर मारुति हनुमद् यन्त्रम्',
      iast: 'Śrīvīra Māruti Hanumad Yantram',
      hi: 'वीर हनुमान यन्त्र',
      en: 'Veer Maruti Hanuman Yantra (Supreme Courage & Invincible Strength Matrix)',
      gu: 'વીર હનુમાન યંત્ર'
    },
    deity: 'Lord Veer Maruti Hanuman (Rudravatara)',
    mantra: 'Om Hum Hanumate Namaha / Om Hraam Hreem Hroom Hraim Hraum Hrah Hum Phat',
    geometrySpec: {
      primaryShape: '12-Petal Lotus, 8-Petal Rudra Beeja Lotus, Veer Shatkona with Central Gada Axis & Sindoor Bindu',
      layersCount: 5,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Eradication of evil spirits, relief from Shani Sade Sati and Mangal dosha, fearlessness, and victory in crises.',
    historicalPeriod: 'Puranic-Tantric / Hanumad Vadavanala Stotram & Sudarshana Samhita',
    scripturalCitation: {
      scripture: 'Hanumad Vadavanala Stotram',
      verse: 'Verses 1-2',
      sanskritText: 'ॐ नमो भगवते श्रीमहाहनुमते प्रकटपराक्रमाय सकलदिङ्मण्डलसदाप्रकाशिताय।',
      translation: 'Salutations to Lord Maha Hanuman, of manifested prowess, illumining all directions, of adamantine body and boundless valour.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['panchamukhi_hanuman_yantra', 'rama_yantra', 'sudarshana_chakra_yantra', 'shani_yantra']
  },
  {
    id: 'sarva_karya_siddhi_yantra',
    names: {
      sa: 'श्रीसर्वकार्यसिद्धि यन्त्रम्',
      iast: 'Śrīsarvakāryasiddhi Yantram',
      hi: 'सर्व कार्यसिद्धि यन्त्र',
      en: 'Sarva Karya Siddhi Yantra (All-Endeavours Accomplishment Matrix)',
      gu: 'સર્વ કાર્યસિદ્ધિ યંત્ર'
    },
    deity: 'Presiding Multi-Deity Cosmic Assembly (Ganesha, Durga, Kubera, Vishnu)',
    mantra: 'Om Hreem Shreem Kleem Sarva Karya Siddhim Kuru Kuru Swaha',
    geometrySpec: {
      primaryShape: '8-Petal Ashta Siddhi Lotus, Triple Girdle, Navakhanda 3x3 Seed Grid & Central Gold Bindu',
      layersCount: 5,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Triumphant success in business, exams, job promotions, legal matters, and unblocking stalled life objectives.',
    historicalPeriod: 'Tantric / Sharada Tilaka & Mantra Mahodadhi',
    scripturalCitation: {
      scripture: 'Sharada Tilaka',
      verse: 'Patala 7, Verses 25-27',
      sanskritText: 'सर्वकार्येषु सिद्ध्यर्थं यन्त्रमेतन्मनोहरम्। नवकोष्ठसमं चक्रं सर्वसिद्धिप्रदायकम्॥',
      translation: 'For accomplishment in all undertakings, this wondrous nine-chambered cosmogram bestows all perfections and cherished desires.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['vyapar_vriddhi_yantra', 'ganesh_yantra', 'kuber_yantra', 'sri_yantra']
  },
  {
    id: 'santana_gopala_yantra',
    names: {
      sa: 'श्रीसन्तानगोपाल यन्त्रम्',
      iast: 'Śrīsantānagopāla Yantram',
      hi: 'सन्तान गोपाल यन्त्र',
      en: 'Sri Santana Gopala Yantra (Divine Progeny & Lineage Blessing Matrix)',
      gu: 'સંતાન ગોપાલ યંત્ર'
    },
    deity: 'Lord Bala Mukunda Krishna & Mother Yashoda',
    mantra: 'Om Kleem Devakisuta Govinda Vasudeva Jagatpate Dehi Me Tanayam Krishna Twamaham Sharanam Gatah',
    geometrySpec: {
      primaryShape: '16-Petal Santana Lotus, 8-Petal Lotus, Venugopala Shatkona with Flute & Peacock Motif, Kleem Bindu',
      layersCount: 5,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Fertility blessing, eliminating conception blocks, pregnancy protection, safe delivery, and virtuous offspring.',
    historicalPeriod: 'Puranic / Harivamsha Purana & Santana Gopala Stotram',
    scripturalCitation: {
      scripture: 'Harivamsha Purana',
      verse: 'Vishnuparva, Chapter 60, Verses 35-37',
      sanskritText: 'देवकीसुतं गोविन्दं वासुदेवं जगत्पतिम्। देहि मे तनयं कृष्ण त्वामहं शरणं गतः॥',
      translation: 'O Son of Devaki, Govinda, Vasudeva, Lord of the Universe, bestow unto me virtuous progeny, for I take refuge in Thee.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['vishnu_yantra', 'ashta_lakshmi_yantra', 'brihaspati_yantra', 'shukra_yantra']
  },
  {
    id: 'dhanvantari_yantra',
    names: {
      sa: 'श्रीधन्वन्तरि आरोग्य यन्त्रम्',
      iast: 'Śrīdhanvantari Ārogya Yantram',
      hi: 'धनवन्तरि यन्त्र',
      en: 'Sri Dhanvantari Arogya Yantra (Divine Healer & Longevity Amrita Matrix)',
      gu: 'ધનવંતરિ યંત્ર'
    },
    deity: 'Lord Dhanvantari (Primordial Physician of Ayurveda)',
    mantra: 'Om Dham Dhanvantaraye Namaha / Om Namo Bhagavate Dhanvantaraye Amrita Kalasha Hastaya Swaha',
    geometrySpec: {
      primaryShape: '12-Petal Sun Lotus, 8-Petal Oshadhi Lotus, Amrita Kalasha Silhouetted Matrix with 8 Rays, Emerald Bindu',
      layersCount: 5,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Curing chronic and stubborn ailments, balancing the Tridoshas, long life, vitality, and successful surgery.',
    historicalPeriod: 'Puranic-Ayurvedic / Sushruta Samhita & Srimad Bhagavatam',
    scripturalCitation: {
      scripture: 'Sushruta Samhita',
      verse: 'Sutrasthanam, Chapter 1, Verses 2-3',
      sanskritText: 'नमामि धन्वन्तरिमादिदेवं सुरासुरैर्वन्दितपादपद्मम्। लोके जरारुग्भयमृत्युनाशं दातारमीशं विविधौषधीनाम्॥',
      translation: 'I bow unto Lord Dhanvantari, revered by gods and demons, who eradicates decrepitude, disease, terror, and premature demise.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['sanjeevani_mahamrityunjaya_yantra', 'surya_yantra', 'sudarshana_chakra_yantra', 'vishnu_yantra']
  },
  {
    id: 'chandika_yantra',
    names: {
      sa: 'श्रीमहाचण्डिका यन्त्रम्',
      iast: 'Śrīmahācaṇḍikā Yantram',
      hi: 'महाचण्डिका यन्त्र',
      en: 'Maha Chandika Yantra (Navarna Saptashati Matrix)',
      gu: 'મહાચંડિકા યંત્ર'
    },
    deity: 'Goddess Maha Chandika (Eighteen-Armed Mahalakshmi Form)',
    mantra: 'Om Aim Hreem Kleem Chamundayai Vicche',
    geometrySpec: {
      primaryShape: '16-Petal Prakriti Lotus, 8-Petal Matrika Lotus, Inverted Fire Triangle, Radiant Navarna Bindu',
      layersCount: 5,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Annihilating inveterate foes, clearing fierce black magic or astral oppression, establishing invincible courage.',
    historicalPeriod: 'c. 6th-8th Century CE (Markandeya Purana / Devi Mahatmya)',
    scripturalCitation: {
      scripture: 'Devi Mahatmya (Pradhanika Rahasyam)',
      verse: 'Verses 4-6',
      sanskritText: 'सर्वस्याद्या महालक्ष्मीस्त्रिगुणा परमेश्वरी। लक्ष्यालक्ष्यस्वरूपा सा व्याप्य कृत्स्नं व्यवस्थिता॥',
      translation: 'Primordial above all is Maha Lakshmi (Maha Chandika), the Supreme Empress of threefold nature, permeating the entire cosmos.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['durga_yantra', 'kali_yantra', 'pratyangira_yantra', 'bagalamukhi_yantra']
  },
  {
    id: 'annapurna_yantra',
    names: {
      sa: 'श्रीमहान्नपूर्णा यन्त्रम्',
      iast: 'Śrīmahānnapūrṇā Yantram',
      hi: 'अन्नपूर्णा यन्त्र',
      en: 'Sri Annapurna Yantra (Cosmic Matrix of Perpetual Nourishment)',
      gu: 'અન્નપૂર્ણા યંત્ર'
    },
    deity: 'Goddess Annapurna (Empress of Kashi & Divine Sustainer)',
    mantra: 'Om Hreem Shreem Kleem Namo Bhagavatyai Maheshwaryai Annapurnayai Swaha',
    geometrySpec: {
      primaryShape: '8-Petal Ashtatattwa Lotus, Hexagram of Rasas, Inverted Ladle-and-Bowl Triangle, Golden Bindu',
      layersCount: 5,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Ensuring perpetual food grain abundance, prosperity in catering/hospitality, domestic peace and health.',
    historicalPeriod: 'Puranic / Atharvavedic Annapurna Upanishad',
    scripturalCitation: {
      scripture: 'Annapurna Stotram by Adi Shankaracharya',
      verse: 'Verse 1',
      sanskritText: 'नित्यानन्दकरी वराभयकरी सौन्दर्यरत्नाकरी निर्धूताखिलघोरपावनकरी प्रत्यक्षमाहेश्वरी। भिक्षां देहि कृपावलम्बनकरी मातान्नपूर्णेश्वरी॥',
      translation: 'O Eternal Giver of Joy, ocean of beauty, manifest Maheshwari of Kashi—grant us the alms of nourishing grace.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['kanakadhara_yantra', 'lakshmi_yantra', 'kamala_yantra', 'vastu_yantra']
  },
  {
    id: 'lalita_parameshvari_yantra',
    names: {
      sa: 'श्रीललिता परमेश्वरी कामकला यन्त्रम्',
      iast: 'Śrīlalitā Parameśvarī Kāmakalā Yantram',
      hi: 'ललिता परमेश्वरी कामकला यन्त्र',
      en: 'Sri Lalita Parameshvari Kamakala Yantra (Matrix of Transcendental Consciousness)',
      gu: 'લલિતા પરમેશ્વરી કામકલા યંત્ર'
    },
    deity: 'Goddess Lalita Mahatripurasundari (Rajarajeshwari)',
    mantra: 'Om Aim Hreem Shreem Lalita Mahatripurasundaryai Namaha',
    geometrySpec: {
      primaryShape: '16-Petal Shodasha Nitya Lotus, 8-Petal Ananga Lotus, Kamakala Inverted Triangle with Sugarcane Bow & 5 Arrows, Bindu',
      layersCount: 5,
      hasNavavaranas: true,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Supreme Sri Vidya realization, unitive consciousness, boundless joy, conjugal bliss, and sovereign spiritual mastery.',
    historicalPeriod: 'Vedic-Tantric / Brahmanda Purana & Kamakalavilasa',
    scripturalCitation: {
      scripture: 'Brahmanda Purana (Lalita Sahasranama)',
      verse: 'Verses 1-2',
      sanskritText: 'श्रीमाता श्रीमहाराज्ञी श्रीमत्सिंहासनेश्वरी। चिदग्निकुण्डसम्भूता देवकार्यसमुद्यता॥',
      translation: 'Salutations to the Primordial Mother, the Supreme Empress of the Sovereign Throne, arisen from the fire altar of Pure Consciousness.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['sri_yantra', 'tripura_sundari_yantra', 'bhuvaneshvari_yantra', 'kamala_yantra']
  }

,
  {
    id: 'batuka_bhairava_yantra',
    names: {
      sa: 'श्री आपदुद्धारक बटुक भैरव यन्त्रम्',
      iast: 'Śrī Āpaduddhāraka Baṭuka Bhairava Yantram',
      hi: 'बटुक भैरव यन्त्र',
      en: 'Sri Apaduddharaka Batuka Bhairava Yantra (Deliverer from Calamities)',
      gu: 'બટુક ભૈરવ યંત્ર'
    },
    deity: 'Lord Batuka Bhairava (Apaduddharaka Form)',
    mantra: 'Om Hreem Batukaya Apaduddharanaya Kuru Kuru Batukaya Hreem Om Swaha',
    geometrySpec: {
      primaryShape: '8-Petal Bhairava Lotus, Hexagram of Peril-Neutralization, Inverted Protection Triangle, Golden Bindu',
      layersCount: 5,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Instant deliverance from acute perils, legal troubles, sudden mishaps, black magic, and fear.',
    historicalPeriod: 'Tantric / Rudrayamala Tantra & Sharadatilakam',
    scripturalCitation: {
      scripture: 'Rudrayamala Tantra (Batuka Kalpa)',
      verse: 'Verses 1-2',
      sanskritText: 'आपदुद्धारणस्तोत्रं बटुकस्य महात्मनः। यस्य स्मरणमात्रेण नश्यन्ति विघ्नराशयः॥',
      translation: 'By the mere remembrance of glorious Batuka Bhairava, colossal mountains of obstacles and perils dissolve.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['kaal_bhairava_yantra', 'swarna_akarshana_bhairava_yantra', 'sharabheshwara_yantra', 'mahamrityunjaya_yantra']
  },
  {
    id: 'kaal_bhairava_yantra',
    names: {
      sa: 'श्रीमहाकालभैरव यन्त्रम्',
      iast: 'Śrīmahākālabhairava Yantram',
      hi: 'काल भैरव यन्त्र',
      en: 'Sri Kaal Bhairava Yantra (Lord of Time & Dissolution)',
      gu: 'કાળ ભૈરવ યંત્ર'
    },
    deity: 'Lord Kaal Bhairava (Sovereign of Kashi & Lord of Time)',
    mantra: 'Om Bhram Kaalabhairavaya Namaha',
    geometrySpec: {
      primaryShape: 'Citadel with 4 Tridents, 16-Petal Kaalachakra Lotus, 8-Petal Ashta Bhairava Lotus, Octagram Star, Dissolution Triangle',
      layersCount: 5,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Protection from premature demise, neutralizing Saturn and Rahu doshas, fearlessness, and destroying adverse astral forces.',
    historicalPeriod: 'Puranic-Tantric / Brahmavaivarta Purana & Kaalbhairavashtakam',
    scripturalCitation: {
      scripture: 'Kaalbhairavashtakam by Adi Shankaracharya',
      verse: 'Verse 1',
      sanskritText: 'देवराजसेव्यमानपावनाङ्घ्रिपङ्कजं व्यालयज्ञसूत्रमिन्दुशेखरं कृपाकरम्। काशिकापुराधिनाथकालभैरवं भजे॥',
      translation: 'I adore Lord Kaal Bhairava, ruler of Kashi, whose sacred lotus feet are served by the King of Gods, dispelling fear of Time.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['batuka_bhairava_yantra', 'swarna_akarshana_bhairava_yantra', 'mahamrityunjaya_yantra', 'pratyangira_yantra']
  },

  {
    id: 'muladhara_chakra',
    names: {
      sa: 'मूलाधार चक्र यन्त्रम्',
      iast: 'Mūlādhāra Cakra Yantram',
      hi: 'मूलाधार चक्र',
      en: 'Muladhara Chakra Yantra (Root Center)',
      gu: 'મૂલાધાર ચક્ર'
    },
    deity: 'Brahma & Dakini Shakti',
    mantra: 'Om Lam Muladharavasinyai Dakinyai Namah',
    geometrySpec: {
      primaryShape: 'Yellow Square with 8 Vajras in 4 Crimson Petals',
      layersCount: 4,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Physical grounding, survival fear removal, bone vitality, and awakening Kundalini.',
    historicalPeriod: 'c. 10th Century CE (Goraksha Paddhati & Sat-Chakra-Nirupana)',
    scripturalCitation: {
      scripture: 'Sat-Chakra-Nirupana',
      verse: 'Verse 4',
      sanskritText: 'अधो वक्त्रं पद्मं सुषुम्ना-विवर-मध्यस्थं सुभगं चतुर्भिः पत्रैश्चापि वकारादिसकारान्तैर्युक्तं परम्...',
      translation: 'At the mouth of Sushumna lies the 4-petaled Muladhara lotus with syllables Vam to Sam and the yellow Earth square.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['svadhishthana_chakra', 'sri_yantra', 'ganesh_yantra']
  },
  {
    id: 'svadhishthana_chakra',
    names: {
      sa: 'स्वाधिष्ठान चक्र यन्त्रम्',
      iast: 'Svādhiṣṭhāna Cakra Yantram',
      hi: 'स्वाधिष्ठान चक्र',
      en: 'Svadhishthana Chakra Yantra (Sacral Center)',
      gu: 'સ્વાધિષ્ઠાન ચક્ર'
    },
    deity: 'Vishnu & Rakini Shakti',
    mantra: 'Om Vam Svadhishthanaya Rakini-sahitaya Vishnave Namah',
    geometrySpec: {
      primaryShape: 'White Crescent Moon in 6 Coral-Orange Petals',
      layersCount: 3,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: false
    },
    traditionalUsage: 'Emotional fluidity, sexual mastery, poetic inspiration, and hormonal balance.',
    historicalPeriod: 'c. 10th Century CE (Sat-Chakra-Nirupana)',
    scripturalCitation: {
      scripture: 'Sat-Chakra-Nirupana',
      verse: 'Verse 14',
      sanskritText: 'स्वाधिष्ठानाख्यं विद्रुमप्रभासैः षड्भिः पत्रैर्बकारादिसान्तैर्विभातं...',
      translation: 'The 6-petaled Svadhishthana lotus of coral luster with syllables Bam to Lam and the water crescent.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['muladhara_chakra', 'manipura_chakra', 'chandra_yantra']
  },
  {
    id: 'manipura_chakra',
    names: {
      sa: 'मणिपूर चक्र यन्त्रम्',
      iast: 'Maṇipūra Cakra Yantram',
      hi: 'मणिपूर चक्र',
      en: 'Manipura Chakra Yantra (Solar Plexus Center)',
      gu: 'મણિપૂર ચક્ર'
    },
    deity: 'Rudra & Lakini Shakti',
    mantra: 'Om Ram Manipuraya Lakini-sahitaya Rudraya Namah',
    geometrySpec: {
      primaryShape: 'Red Triangle with 3 Swastikas in 10 Dark Blue Petals',
      layersCount: 3,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: false
    },
    traditionalUsage: 'Metabolic fire, willpower, leadership, destroying physical lethargy and fear.',
    historicalPeriod: 'c. 10th Century CE (Sat-Chakra-Nirupana)',
    scripturalCitation: {
      scripture: 'Sat-Chakra-Nirupana',
      verse: 'Verse 19',
      sanskritText: 'नाभौ तु दशदल-युतं मणिपूरं महामेघ-द्योतं डफ-दल-युतं वर्ण-सुभगम्...',
      translation: 'At the navel is 10-petaled Manipura with dark blue petals and fiery triangle adorned with 3 swastikas.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['svadhishthana_chakra', 'anahata_chakra', 'surya_yantra']
  },
  {
    id: 'anahata_chakra',
    names: {
      sa: 'अनाहत चक्र यन्त्रम्',
      iast: 'Anāhata Cakra Yantram',
      hi: 'अनाहत चक्र',
      en: 'Anahata Chakra Yantra (Heart Center)',
      gu: 'અનાહત ચક્ર'
    },
    deity: 'Isha & Kakini Shakti',
    mantra: 'Om Yam Anahataya Kakini-sahitaya Ishaya Namah',
    geometrySpec: {
      primaryShape: 'Smoky Hexagram with Golden Baanalinga in 12 Petals',
      layersCount: 4,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: false
    },
    traditionalUsage: 'Unconditional love, hearing the unstruck Om sound, piercing Vishnu Granthi.',
    historicalPeriod: 'c. 10th Century CE (Sat-Chakra-Nirupana)',
    scripturalCitation: {
      scripture: 'Sat-Chakra-Nirupana',
      verse: 'Verse 22',
      sanskritText: 'हृदि स्यादनाहत-पद्मं सुदीप्तं कठाद्यैर्दलैर्द्वादशैरन्वितं च...',
      translation: 'In the heart resides the 12-petaled Anahata lotus with smoky hexagram and golden Baanalinga.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['manipura_chakra', 'vishuddha_chakra', 'shiva_yantra']
  },
  {
    id: 'vishuddha_chakra',
    names: {
      sa: 'विशुद्ध चक्र यन्त्रम्',
      iast: 'Viśuddha Cakra Yantram',
      hi: 'विशुद्ध चक्र',
      en: 'Vishuddha Chakra Yantra (Throat Center)',
      gu: 'વિશુદ્ધ ચક્ર'
    },
    deity: 'Panchamukha Sadashiva & Shakini Shakti',
    mantra: 'Om Ham Vishuddhaya Shakini-sahitaya Sadashivaya Namah',
    geometrySpec: {
      primaryShape: 'Pure White Circular Mandala in 16 Lilac Petals',
      layersCount: 3,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: false
    },
    traditionalUsage: 'Vak-Siddhi, poetic eloquence, thyroid health, and swallowing cosmic poisons.',
    historicalPeriod: 'c. 10th Century CE (Sat-Chakra-Nirupana)',
    scripturalCitation: {
      scripture: 'Sat-Chakra-Nirupana',
      verse: 'Verse 28',
      sanskritText: 'कण्ठे विशुद्धं कमलाभ-कान्तिं स्वरैश्च षोडश-दलैः समन्तात्...',
      translation: 'In the throat is the 16-petaled Vishuddha lotus with 16 Sanskrit vowels and circular white space mandala.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['anahata_chakra', 'ajna_chakra', 'saraswati_yantra']
  },
  {
    id: 'ajna_chakra',
    names: {
      sa: 'आज्ञा चक्र यन्त्रम्',
      iast: 'Ājñā Cakra Yantram',
      hi: 'आज्ञा चक्र',
      en: 'Ajna Chakra Yantra (Third Eye Center)',
      gu: 'આજ્ઞા ચક્ર'
    },
    deity: 'Shambhu & Hakini Shakti',
    mantra: 'Om Om Om Ajnachakraya Namah',
    geometrySpec: {
      primaryShape: 'Inverted Yoni Triangle with Itara Linga in 2 White Petals',
      layersCount: 3,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: false
    },
    traditionalUsage: 'Intuition, clairvoyance, piercing Rudra Granthi, non-dual perception.',
    historicalPeriod: 'c. 10th Century CE (Sat-Chakra-Nirupana)',
    scripturalCitation: {
      scripture: 'Sat-Chakra-Nirupana',
      verse: 'Verse 32',
      sanskritText: 'आज्ञानामामबुजं तद् हिमकर-सदृशं ध्यान-धाम प्रकाशं हक्षाभ्यां वै कलाभ्याम्...',
      translation: 'Between eyebrows is the 2-petaled Ajna lotus (Ham & Ksham) with lightning Itara Linga and Om.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['vishuddha_chakra', 'sahasrara_chakra', 'sri_yantra']
  },
  {
    id: 'sahasrara_chakra',
    names: {
      sa: 'सहस्रार महाचक्र यन्त्रम्',
      iast: 'Sahasrāra Mahācakra Yantram',
      hi: 'सहस्रार महाचक्र',
      en: 'Sahasrara Mahacakra Yantra (Crown Center)',
      gu: 'સહસ્રાર ચક્ર'
    },
    deity: 'Parama Shiva & Para Shakti',
    mantra: 'Om Soham Sachchidananda Parabrahmane Namah',
    geometrySpec: {
      primaryShape: '1000 Petals with Full Moon Disk, Ama-Kala & Mahabindu',
      layersCount: 5,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: false
    },
    traditionalUsage: 'Kaivalya Mukti, liberation while living, Shiva-Shakti union, and supreme bliss.',
    historicalPeriod: 'c. 10th Century CE (Sat-Chakra-Nirupana)',
    scripturalCitation: {
      scripture: 'Sat-Chakra-Nirupana',
      verse: 'Verse 40',
      sanskritText: 'मूर्ध्नो रन्ध्रे सहस्रार-कमलमल-वपुः सर्व-वर्णाभिरामं तन्मध्ये चन्द्रबिम्बे...',
      translation: 'In the crown fontanelle is the 1000-petaled lotus with full moon disk and the supreme Void Mahabindu.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['sri_yantra', 'ajna_chakra']
  },

];
