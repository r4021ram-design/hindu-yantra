export interface AvaranaCalloutItem {
  id: number;
  sanskritName: string;
  englishName: string;
  associatedPranaOrSiddhi: string;
  functionOrMeaning: string;
  side: 'left' | 'right';
  targetYPercentage: number;
}

export interface AvaranaCalloutGroup {
  avaranaIndex: number;
  avaranaNameSanskrit: string;
  avaranaNameEnglish: string;
  chakraCategory: string;
  primaryDeity: string;
  totalSubTrianglesOrPetals: number;
  callouts: AvaranaCalloutItem[];
}

export class SGOSAvaranaCalloutEngine {
  private static avaranaGroups: Map<number, AvaranaCalloutGroup> = new Map();
  private static isInitialized = false;

  private static initIfNeeded(): void {
    if (this.isInitialized) return;

    // 1st Avarana: Trailokyamohana Chakra (Bhupura - 3 Lines & 8 Siddhis)
    this.avaranaGroups.set(1, {
      avaranaIndex: 1,
      avaranaNameSanskrit: 'त्रैलोक्यमोहन चक्र',
      avaranaNameEnglish: 'Trailokyamohana Chakra (Bhupura)',
      chakraCategory: 'Outer Quadrangular Enclosure',
      primaryDeity: 'Tripura / Anima Siddhi',
      totalSubTrianglesOrPetals: 3,
      callouts: [
        { id: 1, sanskritName: 'अणिमा सिद्धि', englishName: 'Anima Siddhi', associatedPranaOrSiddhi: 'Attenuating to Atomic Scale', functionOrMeaning: 'Subtlety of Consciousness', side: 'left', targetYPercentage: 15 },
        { id: 2, sanskritName: 'लघिमा सिद्धि', englishName: 'Laghima Siddhi', associatedPranaOrSiddhi: 'Levitation & Weightlessness', functionOrMeaning: 'Freedom from Inertia', side: 'left', targetYPercentage: 35 },
        { id: 3, sanskritName: 'महिमा सिद्धि', englishName: 'Mahima Siddhi', associatedPranaOrSiddhi: 'Cosmic Expansion', functionOrMeaning: 'Omnipresence', side: 'left', targetYPercentage: 55 },
        { id: 4, sanskritName: 'ईशित्व सिद्धि', englishName: 'Ishitva Siddhi', associatedPranaOrSiddhi: 'Divine Command', functionOrMeaning: 'Mastery over Creation', side: 'left', targetYPercentage: 75 },
        { id: 5, sanskritName: 'वशित्व सिद्धि', englishName: 'Vashitva Siddhi', associatedPranaOrSiddhi: 'Universal Attraction', functionOrMeaning: 'Harmony of Elements', side: 'right', targetYPercentage: 15 },
        { id: 6, sanskritName: 'प्राकाम्य सिद्धि', englishName: 'Prakamya Siddhi', associatedPranaOrSiddhi: 'Fulfillment of Will', functionOrMeaning: 'Unobstructed Desire', side: 'right', targetYPercentage: 35 },
        { id: 7, sanskritName: 'भुक्ति सिद्धि', englishName: 'Bhukti Siddhi', associatedPranaOrSiddhi: 'Cosmic Enjoyment', functionOrMeaning: 'Pure Experience', side: 'right', targetYPercentage: 55 },
        { id: 8, sanskritName: 'इच्छा सिद्धि', englishName: 'Ichha Siddhi', associatedPranaOrSiddhi: 'Sovereign Volition', functionOrMeaning: 'Pure Intent', side: 'right', targetYPercentage: 75 }
      ]
    });

    // 2nd Avarana: Sarvasaparipuraka Chakra (16-Petal Lotus)
    this.avaranaGroups.set(2, {
      avaranaIndex: 2,
      avaranaNameSanskrit: 'सर्वाशापूरक चक्र',
      avaranaNameEnglish: 'Sarvasaparipuraka Chakra (16-Petal Lotus)',
      chakraCategory: 'Outer Lotus Ring',
      primaryDeity: 'Tripureshi / Kamakarshini',
      totalSubTrianglesOrPetals: 16,
      callouts: [
        { id: 1, sanskritName: 'कामाकर्षिणी', englishName: 'Kamakarshini', associatedPranaOrSiddhi: 'Attraction of Desire', functionOrMeaning: 'Vedic Will', side: 'left', targetYPercentage: 20 },
        { id: 2, sanskritName: 'बुद्ध्याकर्षिणी', englishName: 'Buddhyakarshini', associatedPranaOrSiddhi: 'Attraction of Intellect', functionOrMeaning: 'Discerning Mind', side: 'left', targetYPercentage: 40 },
        { id: 3, sanskritName: 'अहंकाराकर्षिणी', englishName: 'Ahamkarakarshini', associatedPranaOrSiddhi: 'Attraction of Ego', functionOrMeaning: 'Self-Identity', side: 'left', targetYPercentage: 60 },
        { id: 4, sanskritName: 'शब्दाकर्षिणी', englishName: 'Shabdakarshini', associatedPranaOrSiddhi: 'Attraction of Sound', functionOrMeaning: 'Auditory Perception', side: 'left', targetYPercentage: 80 },
        { id: 5, sanskritName: 'स्पर्शाकर्षिणी', englishName: 'Sparshakarshini', associatedPranaOrSiddhi: 'Attraction of Touch', functionOrMeaning: 'Tactile Perception', side: 'right', targetYPercentage: 20 },
        { id: 6, sanskritName: 'रूपाकर्षिणी', englishName: 'Rupakarshini', associatedPranaOrSiddhi: 'Attraction of Form', functionOrMeaning: 'Visual Perception', side: 'right', targetYPercentage: 40 },
        { id: 7, sanskritName: 'रसाकर्षिणी', englishName: 'Rasakarshini', associatedPranaOrSiddhi: 'Attraction of Taste', functionOrMeaning: 'Gustatory Sense', side: 'right', targetYPercentage: 60 },
        { id: 8, sanskritName: 'गन्धाकर्षिणी', englishName: 'Gandhakarshini', associatedPranaOrSiddhi: 'Attraction of Smell', functionOrMeaning: 'Olfactory Sense', side: 'right', targetYPercentage: 80 }
      ]
    });

    // 3rd Avarana: Sarvasamkshobhana Chakra (8-Petal Lotus)
    this.avaranaGroups.set(3, {
      avaranaIndex: 3,
      avaranaNameSanskrit: 'सर्वसंक्षोभण चक्र',
      avaranaNameEnglish: 'Sarvasamkshobhana Chakra (8-Petal Lotus)',
      chakraCategory: 'Inner Lotus Ring',
      primaryDeity: 'Tripurasundari / Anangakusuma',
      totalSubTrianglesOrPetals: 8,
      callouts: [
        { id: 1, sanskritName: 'अनंगकुसुमा', englishName: 'Anangakusuma', associatedPranaOrSiddhi: 'Flower of Speech', functionOrMeaning: 'Expression', side: 'left', targetYPercentage: 25 },
        { id: 2, sanskritName: 'अनंगमेखला', englishName: 'Anangamekbala', associatedPranaOrSiddhi: 'Belt of Action', functionOrMeaning: 'Dynamism', side: 'left', targetYPercentage: 55 },
        { id: 3, sanskritName: 'अनंगमदना', englishName: 'Anangamadana', associatedPranaOrSiddhi: 'Exhilaration of Mind', functionOrMeaning: 'Bliss', side: 'left', targetYPercentage: 75 },
        { id: 4, sanskritName: 'अनंगमदनातुरा', englishName: 'Anangamadanatura', associatedPranaOrSiddhi: 'Intensity of Devotion', functionOrMeaning: 'Focus', side: 'right', targetYPercentage: 25 },
        { id: 5, sanskritName: 'अनंगरेखा', englishName: 'Anangarekha', associatedPranaOrSiddhi: 'Line of Clarity', functionOrMeaning: 'Discernment', side: 'right', targetYPercentage: 55 },
        { id: 6, sanskritName: 'अनंगवेगिनी', englishName: 'Anangavegini', associatedPranaOrSiddhi: 'Velocity of Thought', functionOrMeaning: 'Intuition', side: 'right', targetYPercentage: 75 }
      ]
    });

    // 4th Avarana: Sarvasaubhagyadayaka Chakra (14 Triangles)
    this.avaranaGroups.set(4, {
      avaranaIndex: 4,
      avaranaNameSanskrit: 'सर्वसौभाग्यदायक चक्र',
      avaranaNameEnglish: 'Sarvasaubhagyadayaka Chakra (14 Triangles)',
      chakraCategory: 'Chaturdasharam Outer Triangles',
      primaryDeity: 'Tripuravasini / Sarvasamkshobhini',
      totalSubTrianglesOrPetals: 14,
      callouts: [
        { id: 1, sanskritName: 'सर्वसंक्षोभिणी', englishName: 'Sarvasamkshobhini', associatedPranaOrSiddhi: 'Agitator of All', functionOrMeaning: 'Primary Kinetic Impulse', side: 'left', targetYPercentage: 20 },
        { id: 2, sanskritName: 'सर्वविद्राविणी', englishName: 'Sarvavidravini', associatedPranaOrSiddhi: 'Liquefier of Dualities', functionOrMeaning: 'Dissolution of Ego', side: 'left', targetYPercentage: 50 },
        { id: 3, sanskritName: 'सर्वाकर्षिणी', englishName: 'Sarvakarshini', associatedPranaOrSiddhi: 'Attractor of All', functionOrMeaning: 'Gravitational Pull', side: 'left', targetYPercentage: 80 },
        { id: 4, sanskritName: 'सर्वआह्लादिनी', englishName: 'Sarvaahladini', associatedPranaOrSiddhi: 'Delighter of All', functionOrMeaning: 'Ananda Resonance', side: 'right', targetYPercentage: 20 },
        { id: 5, sanskritName: 'सर्वसंमोहिनी', englishName: 'Sarvasammohini', associatedPranaOrSiddhi: 'Enchanter of All', functionOrMeaning: 'Cosmic Illusion', side: 'right', targetYPercentage: 50 },
        { id: 6, sanskritName: 'सर्वस्तम्भिनी', englishName: 'Sarvastambhini', associatedPranaOrSiddhi: 'Stiller of All', functionOrMeaning: 'Equilibrium', side: 'right', targetYPercentage: 80 }
      ]
    });

    // 5th Avarana: Sarvarthasadhaka Chakra (10 Outer Triangles & Ten Pranas) - Matching Image 1
    this.avaranaGroups.set(5, {
      avaranaIndex: 5,
      avaranaNameSanskrit: 'सर्वार्थसाधक चक्र',
      avaranaNameEnglish: 'Sarvarthasadhaka Chakra (10 Outer Triangles & Ten Pranas)',
      chakraCategory: 'Bahir Dasharam Triangles',
      primaryDeity: 'Tripurashri / Sarvasiddhiprada',
      totalSubTrianglesOrPetals: 10,
      callouts: [
        { id: 1, sanskritName: 'सर्वदुःखविमोचिनी', englishName: 'Sarvadukhavimochini', associatedPranaOrSiddhi: 'Devadatta Prana', functionOrMeaning: 'Belching / Release of Tension', side: 'left', targetYPercentage: 18 },
        { id: 2, sanskritName: 'सर्वमृत्युप्रशमनी', englishName: 'Sarvamrtyuprasamani', associatedPranaOrSiddhi: 'Kurma Prana', functionOrMeaning: 'Blinking / Ocular Reflex', side: 'left', targetYPercentage: 34 },
        { id: 3, sanskritName: 'सर्वविघ्ननिवारिणी', englishName: 'Sarvavighnanivarini', associatedPranaOrSiddhi: 'Krikala Prana', functionOrMeaning: 'Sneezing / Airway Defense', side: 'left', targetYPercentage: 50 },
        { id: 4, sanskritName: 'सर्वांगसुन्दरी', englishName: 'Sarvaangasundari', associatedPranaOrSiddhi: 'Naga Prana', functionOrMeaning: 'Yawning / Oxygen Balance', side: 'left', targetYPercentage: 66 },
        { id: 5, sanskritName: 'सर्वसौभाग्यदायिनी', englishName: 'Sarvasaubhagyadayini', associatedPranaOrSiddhi: 'Dhananjaya Prana', functionOrMeaning: 'Decomposition / Body Integrity', side: 'left', targetYPercentage: 82 },
        { id: 6, sanskritName: 'सर्वकामप्रदा', englishName: 'Sarvakamaprada', associatedPranaOrSiddhi: 'Samana Prana', functionOrMeaning: 'Digestion / Assimilation', side: 'right', targetYPercentage: 18 },
        { id: 7, sanskritName: 'सर्वमंगलकारिणी', englishName: 'Sarvamangalakarini', associatedPranaOrSiddhi: 'Vyana Prana', functionOrMeaning: 'Sleep / Circulation', side: 'right', targetYPercentage: 34 },
        { id: 8, sanskritName: 'सर्वप्रियंकरी', englishName: 'Sarvapriyankari', associatedPranaOrSiddhi: 'Udana Prana', functionOrMeaning: 'Muscles / Speech Ascent', side: 'right', targetYPercentage: 50 },
        { id: 9, sanskritName: 'सर्वसम्पत्प्रदा', englishName: 'Sarvasampatprada', associatedPranaOrSiddhi: 'Apana Prana', functionOrMeaning: 'Excretion / Elimination', side: 'right', targetYPercentage: 66 },
        { id: 10, sanskritName: 'सर्वसिद्धिप्रदा', englishName: 'Sarvasiddhiprada', associatedPranaOrSiddhi: 'Prana Vayu', functionOrMeaning: 'Respiration / Vital Breath', side: 'right', targetYPercentage: 82 }
      ]
    });

    // 6th Avarana: Sarvarakshakara Chakra (10 Inner Triangles)
    this.avaranaGroups.set(6, {
      avaranaIndex: 6,
      avaranaNameSanskrit: 'सर्वरक्षाकर चक्र',
      avaranaNameEnglish: 'Sarvarakshakara Chakra (10 Inner Triangles)',
      chakraCategory: 'Antar Dasharam Triangles',
      primaryDeity: 'Tripulamalini / Sarvajna',
      totalSubTrianglesOrPetals: 10,
      callouts: [
        { id: 1, sanskritName: 'सर्वज्ञा', englishName: 'Sarvajna', associatedPranaOrSiddhi: 'Omniscience', functionOrMeaning: 'Total Knowledge', side: 'left', targetYPercentage: 25 },
        { id: 2, sanskritName: 'सर्वशक्ता', englishName: 'Sarvashakta', associatedPranaOrSiddhi: 'Omnipotence', functionOrMeaning: 'Unbounded Energy', side: 'left', targetYPercentage: 50 },
        { id: 3, sanskritName: 'सर्वैश्वर्यप्रदायिनी', englishName: 'Sarvaishwaryapradayini', associatedPranaOrSiddhi: 'Sovereignty', functionOrMeaning: 'Cosmic Wealth', side: 'left', targetYPercentage: 75 },
        { id: 4, sanskritName: 'सर्वज्ञानमयी', englishName: 'Sarvajnanamayi', associatedPranaOrSiddhi: 'Wisdom Essence', functionOrMeaning: 'Pure Cognition', side: 'right', targetYPercentage: 25 },
        { id: 5, sanskritName: 'सर्वव्याधिविनाशिनी', englishName: 'Sarvavyadhivinashini', associatedPranaOrSiddhi: 'Destroyer of Ills', functionOrMeaning: 'Total Healing', side: 'right', targetYPercentage: 50 },
        { id: 6, sanskritName: 'सर्वाधारस्वरूपा', englishName: 'Sarvadharaswarupa', associatedPranaOrSiddhi: 'Universal Substratum', functionOrMeaning: 'Foundation', side: 'right', targetYPercentage: 75 }
      ]
    });

    // 7th Avarana: Sarvarogahara Chakra (8 Triangles)
    this.avaranaGroups.set(7, {
      avaranaIndex: 7,
      avaranaNameSanskrit: 'सर्वरोगहर चक्र',
      avaranaNameEnglish: 'Sarvarogahara Chakra (8 Triangles)',
      chakraCategory: 'Ashtaragon Triangles',
      primaryDeity: 'Tripurasiddha / Vashini Vagdevatis',
      totalSubTrianglesOrPetals: 8,
      callouts: [
        { id: 1, sanskritName: 'वशिनी वाग्देवी', englishName: 'Vashini Vagdevi', associatedPranaOrSiddhi: 'Control of Sound', functionOrMeaning: 'Speech Power', side: 'left', targetYPercentage: 30 },
        { id: 2, sanskritName: 'कामेश्वरी वाग्देवी', englishName: 'Kameshwari Vagdevi', associatedPranaOrSiddhi: 'Desire Speech', functionOrMeaning: 'Harmonic Intent', side: 'left', targetYPercentage: 70 },
        { id: 3, sanskritName: 'मोदिनी वाग्देवी', englishName: 'Modini Vagdevi', associatedPranaOrSiddhi: 'Delight Speech', functionOrMeaning: 'Exuberance', side: 'right', targetYPercentage: 30 },
        { id: 4, sanskritName: 'विमला वाग्देवी', englishName: 'Vimala Vagdevi', associatedPranaOrSiddhi: 'Pure Speech', functionOrMeaning: 'Clarity', side: 'right', targetYPercentage: 70 }
      ]
    });

    // 8th Avarana: Sarvasiddhiprada Chakra (Central Triangle)
    this.avaranaGroups.set(8, {
      avaranaIndex: 8,
      avaranaNameSanskrit: 'सर्वसिद्धिप्रद चक्र',
      avaranaNameEnglish: 'Sarvasiddhiprada Chakra (Kamakala Triangle)',
      chakraCategory: 'Innermost Triangle',
      primaryDeity: 'Tripuramba / Kameshwari-Vajreshwari-Bhagamalini',
      totalSubTrianglesOrPetals: 1,
      callouts: [
        { id: 1, sanskritName: 'कामेश्वरी', englishName: 'Kameshwari', associatedPranaOrSiddhi: 'Creative Will', functionOrMeaning: 'Right Corner Vertex', side: 'left', targetYPercentage: 40 },
        { id: 2, sanskritName: 'वज्रेश्वरी', englishName: 'Vajreshwari', associatedPranaOrSiddhi: 'Adamantine Energy', functionOrMeaning: 'Left Corner Vertex', side: 'right', targetYPercentage: 40 },
        { id: 3, sanskritName: 'भगमालिनी', englishName: 'Bhagamalini', associatedPranaOrSiddhi: 'Solar Radiance', functionOrMeaning: 'Apex Vertex', side: 'left', targetYPercentage: 60 }
      ]
    });

    // 9th Avarana: Sarvanandamaya Chakra (Central Bindu)
    this.avaranaGroups.set(9, {
      avaranaIndex: 9,
      avaranaNameSanskrit: 'सर्वआनन्दमय चक्र',
      avaranaNameEnglish: 'Sarvanandamaya Chakra (Central Bindu)',
      chakraCategory: 'Origin Point',
      primaryDeity: 'Maha Tripurasundari / Lalita Kameshwari',
      totalSubTrianglesOrPetals: 1,
      callouts: [
        { id: 1, sanskritName: 'महात्रिपुरसुन्दरी', englishName: 'Maha Tripurasundari', associatedPranaOrSiddhi: 'Pure Consciousness', functionOrMeaning: 'Geometric & Spiritual Center (500,500)', side: 'right', targetYPercentage: 50 }
      ]
    });

    this.isInitialized = true;
  }

  public static getAvaranaGroup(avaranaIndex: number): AvaranaCalloutGroup {
    this.initIfNeeded();
    return this.avaranaGroups.get(avaranaIndex) || this.avaranaGroups.get(5)!;
  }
}
