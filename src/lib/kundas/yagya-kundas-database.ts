/**
 * Canonical 10 Sacred Yagya Kundas Shastric Database
 * Based on Kuṇḍamārtaṇḍa (Govinda Daivajna), Śāradātilakam (Patala 3 & 4),
 * and Mantramahodadhi.
 * 
 * Incorporates complete geometric definitions, 3 Mekhala specs,
 * mathematical scaling for Ahuti counts (108 to 1,000,000),
 * presiding deities, samidhas, havisya, and original Sanskrit slokas.
 */

export interface KundaMekhalaSpec {
  tier1White: string;
  tier2Red: string;
  tier3Dark: string;
  kantham: string;
  nabhiLotus: string;
  yoniSpout: string;
}

export interface KundaCitation {
  sourceScripture: string;
  verseRef: string;
  sanskritSloka: string;
  hindiMeaning: string;
  englishMeaning: string;
}

export interface YagyaKundaEntry {
  id: string;
  order: number;
  nameSanskrit: string;
  nameHindi: string;
  nameEnglish: string;
  shapeGeometry: string;
  shapeGeometrySanskrit: string;
  cardinalDirection: string;
  cardinalDirectionSanskrit: string;
  presidingDeity: string;
  presidingDeitySanskrit: string;
  fruitPurpose: string;
  fruitPurposeSanskrit: string;
  suitableYagyas: string[];
  recommendedSamidha: string;
  samidhaTreeSanskrit: string;
  havisyaIngredients: string[];
  mekhalaSpecs: KundaMekhalaSpec;
  shastricCitations: KundaCitation[];
  svgPath: string;
}

export interface KundaCalculationResult {
  ahutiCount: number;
  hastas: number;
  angulas: number;
  widthInches: number;
  widthCm: number;
  lengthInches: number;
  lengthCm: number;
  depthInches: number;
  depthCm: number;
  mekhala1HeightInches: number;
  mekhala2HeightInches: number;
  mekhala3HeightInches: number;
  estimatedBricks: number;
  estimatedGheeKg: number;
  estimatedHavisyaKg: number;
  recommendedPriests: number;
}

export const YAGYA_KUNDAS_DATABASE: YagyaKundaEntry[] = [
  // 1. CHATURASRA KUNDA
  {
    id: 'chaturasra_kunda',
    order: 1,
    nameSanskrit: 'समचतुरस्र कुण्डम्',
    nameHindi: 'चतुरस्र कुण्ड (समचतुर्भुज)',
    nameEnglish: 'Chaturasra Kunda (Square Altar)',
    shapeGeometry: 'Regular Square (1:1 Ratio, 90° Right Angles)',
    shapeGeometrySanskrit: 'समचतुर्भुज (चारों भुजाएं समान)',
    cardinalDirection: 'East or Center (Brahmasthana)',
    cardinalDirectionSanskrit: 'पूर्व अथवा मण्डप मध्य',
    presidingDeity: 'Lord Brahma & Surya Deva',
    presidingDeitySanskrit: 'भगवान् ब्रह्मा एवं सविता (सूर्य)',
    fruitPurpose: 'Attainment of all desires (Sarva-siddhi), peace rites (Shanti), and universal Vedic prosperity',
    fruitPurposeSanskrit: 'सर्वसिद्धि, शान्तिकर्म एवं पौष्टिक अनुष्ठान',
    suitableYagyas: ['गायत्री महायज्ञ', 'दैनिक वैश्वदेव होम', 'शान्ति होम', 'नवग्रह होम', 'आयुष्य होम'],
    recommendedSamidha: 'Palash (Butea monosperma) or Mango (Mangifera indica)',
    samidhaTreeSanskrit: 'पलाश / आम्र समिधा',
    havisyaIngredients: ['शुद्ध गोघृत', 'काले तिल', 'जौ (यव)', 'चावल (अक्षत)', 'गुग्गुल', 'शर्करा'],
    mekhalaSpecs: {
      tier1White: 'विस्तार ४ अंगुल, ऊंचाई ४ अंगुल (श्वेत वर्ण / सत्त्व गुण / ब्रह्मा)',
      tier2Red: 'विस्तार ३ अंगुल, ऊंचाई ३ अंगुल (रक्त वर्ण / रजोगुण / विष्णु)',
      tier3Dark: 'विस्तार २ अंगुल, ऊंचाई २ अंगुल (कृष्ण/नील वर्ण / तमोगुण / शिव)',
      kantham: '१ अंगुल चौड़ा व १ अंगुल गहरा कण्ठ',
      nabhiLotus: 'कुण्ड के तल पर १/४ विस्तार का अष्टदल पद्म',
      yoniSpout: 'पश्चिम दिशा में पीपल के पत्ते सदृश घृत-जल निर्गम प्रणाली (८ अंगुल लम्बी)'
    },
    shastricCitations: [
      {
        sourceScripture: 'कुण्डमार्तण्डः',
        verseRef: 'अध्याय १, श्लोक १२',
        sanskritSloka: 'चतुरस्रं समं कुण्डं सर्वसिद्धिप्रदायकम् ।\nशान्तिके पौष्टिके चैव कुर्वीत यत्नतो बुधः ॥',
        hindiMeaning: 'समचतुरस्र कुण्ड समस्त सिद्धियों को देने वाला है। विद्वान साधक को शान्ति एवं पुष्टि कर्मों में प्रयत्नपूर्वक इसका निर्माण करना चाहिए।',
        englishMeaning: 'The square Kunda bestows all spiritual accomplishments and worldly perfections. The wise practitioner must construct it diligently for peace and nourishing rituals.'
      }
    ],
    svgPath: '/kundas/chaturasra_kunda.svg'
  },

  // 2. YONI KUNDA
  {
    id: 'yoni_kunda',
    order: 2,
    nameSanskrit: 'योनि कुण्डम्',
    nameHindi: 'योनि कुण्ड (अश्वत्थ पत्र सदृश)',
    nameEnglish: 'Yoni Kunda (Peepal Leaf / Womb Altar)',
    shapeGeometry: 'Peepal Leaf / Crescent-Pubic Arch with Pointed Tip',
    shapeGeometrySanskrit: 'अश्वत्थ पत्र (पीपल के पत्ते सदृश भग स्वरूप)',
    cardinalDirection: 'East or Southeast (Agneya)',
    cardinalDirectionSanskrit: 'पूर्व अथवा आग्नेय कोण',
    presidingDeity: 'Goddess Jagadamba, Lalita Tripurasundari & Parvati',
    presidingDeitySanskrit: 'भगवती आद्याशक्ति जगदम्बा',
    fruitPurpose: 'Progeny, lineage continuity, removal of childlessness, feminine vitality, and Shakta tantric grace',
    fruitPurposeSanskrit: 'सन्तान प्राप्ति, कुलवृद्धि, सौभाग्य एवं शाक्त साधना',
    suitableYagyas: ['सन्तान गोपाल यज्ञ', 'पुत्रकामेष्टि यज्ञ', 'दुर्गा सप्तशती होम', 'ललिता सहस्रनाम होम'],
    recommendedSamidha: 'Palash (Butea monosperma) or Durva grass bundles',
    samidhaTreeSanskrit: 'पलाश एवं दूर्वा दल',
    havisyaIngredients: ['शुद्ध गोघृत', 'खीर (पायस)', 'कमलगट्टा', 'सफेद तिल', 'मधु', 'मिश्री'],
    mekhalaSpecs: {
      tier1White: 'अश्वत्थ पत्र बाह्य वलय (४ अंगुल)',
      tier2Red: 'मध्य विद्रुम मेखला (३ अंगुल)',
      tier3Dark: 'आन्तरिक श्याम मेखला (२ अंगुल)',
      kantham: '१ अंगुल गहरा वक्र कण्ठ',
      nabhiLotus: 'केन्द्र में सुवर्ण पद्म-नाभि',
      yoniSpout: 'पश्चिम में अर्धचन्द्राकार जलनिर्गम'
    },
    shastricCitations: [
      {
        sourceScripture: 'शारदातिलकम्',
        verseRef: 'पटल ३, श्लोक १४',
        sanskritSloka: 'योनिभं च भवेत् कुण्डं पुत्रलाभाय कीर्तितम् ।\nअश्वत्थदलवद् रूपं रम्यं कण्ठसमन्वितम् ॥',
        hindiMeaning: 'योनि सदृश कुण्ड पुत्र/सन्तान प्राप्ति के लिए प्रसिद्ध है। यह पीपल के पत्ते के समान सुन्दर तथा कण्ठ-मेखला से समन्वित होना चाहिए।',
        englishMeaning: 'The Yoni-shaped Kunda is renowned for blessing one with progeny and preserving the familial lineage. It is shaped like an auspicious Peepal leaf with graceful contours.'
      }
    ],
    svgPath: '/kundas/yoni_kunda.svg'
  },

  // 3. ARDHA CHANDRA KUNDA
  {
    id: 'ardha_chandra_kunda',
    order: 3,
    nameSanskrit: 'अर्धचन्द्र कुण्डम्',
    nameHindi: 'अर्धचन्द्र कुण्ड (धनुषाकार)',
    nameEnglish: 'Ardha Chandra Kunda (Semi-Circular Bow Altar)',
    shapeGeometry: 'Semi-Circle / Bow Arc (180° Arch and Straight Chord)',
    shapeGeometrySanskrit: 'धनुष सदृश अर्धवृत्त',
    cardinalDirection: 'South (Dakshina)',
    cardinalDirectionSanskrit: 'दक्षिण दिशा',
    presidingDeity: 'Lord Chandra & Varuna Deva',
    presidingDeitySanskrit: 'भगवान् चन्द्रमा एवं वरुण देव',
    fruitPurpose: 'Deep peace, eradication of chronic diseases, mental equilibrium, and domestic harmony',
    fruitPurposeSanskrit: 'रोगमुक्ति, मानसिक शान्ति एवं उपद्रव निवारण',
    suitableYagyas: ['सोम होम', 'चन्द्र ग्रह शान्ति यज्ञ', 'मृत्युंजय होम', 'वरुण यज्ञ'],
    recommendedSamidha: 'Palash (ढाक) or Apamarga (चिरचिटा)',
    samidhaTreeSanskrit: 'पलाश / अपामार्ग समिधा',
    havisyaIngredients: ['शुद्ध गोघृत', 'दूध-चावल की खीर', 'सफेद चन्दन', 'कपूर', 'मिश्री'],
    mekhalaSpecs: {
      tier1White: 'अर्धवृत्ताकार ऊपरी मेखला (४ अंगुल)',
      tier2Red: 'मध्य धनुषाकार मेखला (३ अंगुल)',
      tier3Dark: 'निचली अर्धचन्द्र मेखला (२ अंगुल)',
      kantham: 'ऋजु ज्या के समीप कण्ठ',
      nabhiLotus: 'अर्धवृत्त केन्द्र में अष्टदल नाभि',
      yoniSpout: 'उत्तर-पश्चिम में जलनिर्गम'
    },
    shastricCitations: [
      {
        sourceScripture: 'कुण्डमार्तण्डः',
        verseRef: 'अध्याय १, श्लोक १८',
        sanskritSloka: 'अर्धचन्द्राकृतिं कुण्डं दक्षिणे शान्तिकर्मणि ।\nरोगनिवारणं चैव सर्वोपद्रवनाशनम् ॥',
        hindiMeaning: 'दक्षिण दिशा में अर्धचन्द्राकार कुण्ड शान्तिकर्म के लिए बनाया जाता है। यह समस्त रोगों और उपद्रवों का समूल नाश करता है।',
        englishMeaning: 'In the southern quarter, the semi-circular crescent Kunda is constructed for pacification rites. It eliminates all physical ailments and mental afflictions.'
      }
    ],
    svgPath: '/kundas/ardha_chandra_kunda.svg'
  },

  // 4. TRIKONA KUNDA
  {
    id: 'trikona_kunda',
    order: 4,
    nameSanskrit: 'त्रिकोण कुण्डम्',
    nameHindi: 'त्रिकोण कुण्ड (अग्नि ज्वाला)',
    nameEnglish: 'Trikona Kunda (Triangular Fire Altar)',
    shapeGeometry: 'Equilateral Triangle (3 Equal 60° Angles, Apex Pointing South)',
    shapeGeometrySanskrit: 'समबाहु त्रिकोण (अधोमुखी/दक्षिणमुखी)',
    cardinalDirection: 'Southwest (Nairritya)',
    cardinalDirectionSanskrit: 'नैर्ऋत्य कोण',
    presidingDeity: 'Maha Kali, Lord Narasimha & Goddess Bagalamukhi',
    presidingDeitySanskrit: 'महाकाली, भगवान् नृसिंह एवं पीताम्बरा बगलामुखी',
    fruitPurpose: 'Destruction of adversaries, paralyzing hostile forces (Stambhana), victory, and removing black magic',
    fruitPurposeSanskrit: 'शत्रुशमन, स्तम्भन, अभिचार-नाश एवं तान्त्रिक विजय',
    suitableYagyas: ['बगलामुखी अनुष्ठान', 'नृसिंह रक्षा होम', 'प्रत्यङ्गिरा यज्ञ', 'शत्रु पराजय होम'],
    recommendedSamidha: 'Khadira (Acacia catechu / खैर) or Arka (Calotropis)',
    samidhaTreeSanskrit: 'खदिर (खैर) एवं मदार समिधा',
    havisyaIngredients: ['शुद्ध सरसों का तेल/घी', 'पीली सरसों', 'नीम के पत्ते', 'काली मिर्च', 'गुग्गुल', 'राई'],
    mekhalaSpecs: {
      tier1White: 'त्रिकोणाकार श्वेत मेखला (४ अंगुल)',
      tier2Red: 'त्रिकोणाकार रक्त मेखला (३ अंगुल)',
      tier3Dark: 'त्रिकोणाकार कृष्ण मेखला (२ अंगुल)',
      kantham: '१ अंगुल कण्ठ रेखा',
      nabhiLotus: 'त्रिकोण के मध्य में अग्नि नाभि',
      yoniSpout: 'दक्षिण-पश्चिम में तीक्ष्ण निर्गम'
    },
    shastricCitations: [
      {
        sourceScripture: 'शारदातिलकम्',
        verseRef: 'पटल ३, श्लोक २०',
        sanskritSloka: 'त्रिकोणं दक्षिणाग्रे तु शत्रुनाशाय कल्पयेत् ।\nसमबाहुस्त्रिभिः कोणैर्ज्वाला-रूपं मनोहरम् ॥',
        hindiMeaning: 'शत्रु के विनाश एवं बाधा निवारण हेतु दक्षिण की ओर अग्रभाग वाला समबाहु त्रिकोण कुण्ड निर्मित करना चाहिए।',
        englishMeaning: 'For neutralizing hostile opposition and overcoming obstacles, construct an equilateral triangular Kunda pointing southward like blazing flames.'
      }
    ],
    svgPath: '/kundas/trikona_kunda.svg'
  },

  // 5. VRITTA KUNDA
  {
    id: 'vritta_kunda',
    order: 5,
    nameSanskrit: 'वृत्त कुण्डम्',
    nameHindi: 'वृत्त कुण्ड (मण्डलाकार)',
    nameEnglish: 'Vritta Kunda (Circular Altar)',
    shapeGeometry: 'Perfect Circle (360° Symmetrical Circumference)',
    shapeGeometrySanskrit: 'पूर्ण मण्डलाकार वृत्त',
    cardinalDirection: 'West (Pashchima)',
    cardinalDirectionSanskrit: 'पश्चिम दिशा',
    presidingDeity: 'Vayu Deva, Varuna & Lord Vishnu',
    presidingDeitySanskrit: 'पवन देव, वरुण एवं श्रीहरि विष्णु',
    fruitPurpose: 'Destruction of accumulated sins, public welfare, adequate rainfall, and overcoming epidemics',
    fruitPurposeSanskrit: 'पापनाशन, जनकल्याण, सुवृष्टि एवं सर्वशान्ति',
    suitableYagyas: ['वायु सूक्त होम', 'वरुण यज्ञ', 'पर्जन्य होम (वर्षा हेतु)', 'अकाल निवारण यज्ञ'],
    recommendedSamidha: 'Shami (Prosopis cineraria) or Kusha grass',
    samidhaTreeSanskrit: 'शमी (खेजड़ी) एवं कुश समिधा',
    havisyaIngredients: ['शुद्ध गोघृत', 'जौ', 'काले तिल', 'सुगन्धित नागरमोथा', 'कर्पूर', 'चन्दन'],
    mekhalaSpecs: {
      tier1White: 'पूर्ण वृत्ताकार श्वेत मेखला (४ अंगुल)',
      tier2Red: 'वृत्ताकार रक्त मेखला (३ अंगुल)',
      tier3Dark: 'वृत्ताकार कृष्ण मेखला (२ अंगुल)',
      kantham: '१ अंगुल वृत्त कण्ठ',
      nabhiLotus: 'केन्द्र में अष्टदल कमल नाभि',
      yoniSpout: 'पश्चिम में अश्वत्थ पत्र योनि'
    },
    shastricCitations: [
      {
        sourceScripture: 'कुण्डमार्तण्डः',
        verseRef: 'अध्याय १, श्लोक २४',
        sanskritSloka: 'वृत्तं तु पश्चिमे भागे सर्वपापप्रणाशनम् ।\nवृष्ट्यादिकर्मसिद्धयर्थं सर्वकामफलप्रदम् ॥',
        hindiMeaning: 'पश्चिम दिशा में निर्मित वृत्ताकार कुण्ड समस्त पापों का नाश करता है तथा सुवृष्टि एवं जनकल्याणकारी फलों को सिद्ध करता है।',
        englishMeaning: 'Constructed in the western sector, the circular Kunda incinerates all sins and bestows universal prosperity and timely seasonal rains.'
      }
    ],
    svgPath: '/kundas/vritta_kunda.svg'
  },

  // 6. SHATKONA KUNDA
  {
    id: 'shatkona_kunda',
    order: 6,
    nameSanskrit: 'षट्कोण कुण्डम्',
    nameHindi: 'षट्कोण कुण्ड (षटार चक्र)',
    nameEnglish: 'Shatkona Kunda (Hexagonal Star Altar)',
    shapeGeometry: 'Regular Hexagon / Interlocking 6-Point Star',
    shapeGeometrySanskrit: 'षटार चक्र (दो परस्पर गुम्फित त्रिकोण)',
    cardinalDirection: 'Northwest (Vayavya)',
    cardinalDirectionSanskrit: 'वायव्य कोण',
    presidingDeity: 'Lord Kartikeya (Skanda) & Sudarshana Chakra',
    presidingDeitySanskrit: 'भगवान् कार्तिकेय एवं सुदर्शन चक्र',
    fruitPurpose: 'Attraction, rightful magnetic influence (Vashikarana), crushing hostile army lines, and valor',
    fruitPurposeSanskrit: 'वशीकरण, आकर्षण, शत्रु-स्तम्भन एवं शौर्य वृद्धि',
    suitableYagyas: ['सुदर्शन महायज्ञ', 'कार्तिकेय होम', 'शत्रु सैन्य स्तम्भन यज्ञ', 'आकर्षण होम'],
    recommendedSamidha: 'Apamarga (Achyranthes aspera) or Khadira',
    samidhaTreeSanskrit: 'अपामार्ग एवं खदिर समिधा',
    havisyaIngredients: ['शुद्ध गोघृत', 'लाल चन्दन', 'गुग्गुल', 'जायफल', 'लौंग', 'केसर मिश्रित हविष्य'],
    mekhalaSpecs: {
      tier1White: 'षट्कोणीय श्वेत मेखला (४ अंगुल)',
      tier2Red: 'षट्कोणीय रक्त मेखला (३ अंगुल)',
      tier3Dark: 'षट्कोणीय कृष्ण मेखला (२ अंगुल)',
      kantham: 'षट्कोण कण्ठ रेखा',
      nabhiLotus: 'केन्द्र में षटार पद्म नाभि',
      yoniSpout: 'वायव्य में जलनिर्गम'
    },
    shastricCitations: [
      {
        sourceScripture: 'शारदातिलकम्',
        verseRef: 'पटल ३, श्लोक २८',
        sanskritSloka: 'षट्कोणं वायुदिग्भागे वशीकरणकर्मणि ।\nपरसैन्यविनाशाय कीर्तितं मुनिपुङ्गवैः ॥',
        hindiMeaning: 'वायव्य दिशा में षट्कोण कुण्ड आकर्षण, वशीकरण एवं शत्रु सैन्य के विनाश हेतु ऋषियों द्वारा प्रशंसित है।',
        englishMeaning: 'In the northwestern wind quarter, the hexagonal Kunda is celebrated by sages for magnetic influence and overcoming overwhelming opposition.'
      }
    ],
    svgPath: '/kundas/shatkona_kunda.svg'
  },

  // 7. ASHTAKONA KUNDA
  {
    id: 'ashtakona_kunda',
    order: 7,
    nameSanskrit: 'अष्टकोण कुण्डम्',
    nameHindi: 'अष्टकोण कुण्ड (अष्टभुज)',
    nameEnglish: 'Ashtakona Kunda (Octagonal Altar)',
    shapeGeometry: 'Regular Octagon (8 Equal Sides, 135° Angles)',
    shapeGeometrySanskrit: 'सम-अष्टभुज (आठ समान भुजाएं)',
    cardinalDirection: 'North (Uttara / Kauberya)',
    cardinalDirectionSanskrit: 'उत्तर दिशा (कुबेर स्थान)',
    presidingDeity: 'Lord Dhanvantari & Lord Mahamrityunjaya Shiva',
    presidingDeitySanskrit: 'भगवान् धन्वन्तरि एवं महामृत्युंजय शिव',
    fruitPurpose: 'Longevity, freedom from incurable diseases, rejuvenation (Kayakalpa), and overcoming premature death',
    fruitPurposeSanskrit: 'आरोग्य, दीर्घायु, अकालमृत्यु हरण एवं व्याधि-मुक्ति',
    suitableYagyas: ['महामृत्युंजय महारुद्र यज्ञ', 'धन्वन्तरि आरोग्य होम', 'आयुष्य संवर्धन यज्ञ'],
    recommendedSamidha: 'Shami (खेजड़ी) or Ashvattha (पीपल)',
    samidhaTreeSanskrit: 'शमी एवं अश्वत्थ समिधा',
    havisyaIngredients: ['शुद्ध गोघृत', 'अमृता (गिलोय)', 'दूर्वा', 'काले तिल', 'शतावरी', 'अश्वगंधा', 'मधु'],
    mekhalaSpecs: {
      tier1White: 'अष्टकोणीय श्वेत मेखला (४ अंगुल)',
      tier2Red: 'अष्टकोणीय रक्त मेखला (३ अंगुल)',
      tier3Dark: 'अष्टकोणीय कृष्ण मेखला (२ अंगुल)',
      kantham: 'अष्टभुज कण्ठ',
      nabhiLotus: 'केन्द्र में अष्टकोण नाभि',
      yoniSpout: 'उत्तर दिशा में योनि निर्गम'
    },
    shastricCitations: [
      {
        sourceScripture: 'कुण्डमार्तण्डः',
        verseRef: 'अध्याय १, श्लोक ३२',
        sanskritSloka: 'अष्टकोणं च कौबेर्यां दीर्घायुःकरणं परम् ।\nव्याधिनाशाय विधिवत् कुर्यादारोग्यवर्धनम् ॥',
        hindiMeaning: 'उत्तर दिशा में अष्टकोण कुण्ड दीर्घायु, आरोग्य वर्धन तथा समस्त असाध्य व्याधियों के नाश के लिए विधिपूर्वक बनाना चाहिए।',
        englishMeaning: 'Constructed in the northern Kubera quarter, the octagonal Kunda is the supreme vehicle for longevity, radiant health, and dissolving deadly diseases.'
      }
    ],
    svgPath: '/kundas/ashtakona_kunda.svg'
  },

  // 8. PADMA KUNDA
  {
    id: 'padma_kunda',
    order: 8,
    nameSanskrit: 'पद्म कुण्डम्',
    nameHindi: 'पद्म कुण्ड (अष्टदल कमल)',
    nameEnglish: 'Padma Kunda (Eight-Petaled Lotus Altar)',
    shapeGeometry: 'Eight-Petaled Lotus (Concentric Curving Radiating Petals)',
    shapeGeometrySanskrit: 'अष्टदल कमल सदृश (कर्णिका एवं दल समन्वित)',
    cardinalDirection: 'Northeast (Ishana)',
    cardinalDirectionSanskrit: 'ईशान कोण',
    presidingDeity: 'Goddess Mahalakshmi, Rajarajeshwari & Sri Vidya',
    presidingDeitySanskrit: 'महालक्ष्मी, राजराजेश्वरी एवं त्रिपुरसुन्दरी',
    fruitPurpose: 'Inexhaustible wealth, royal fortune, empire prosperity, supreme auspiciousness, and Sri Vidya siddhi',
    fruitPurposeSanskrit: 'अतुल्य धन-धान्य, साम्राज्य प्राप्ति, ऐश्वर्य एवं श्रीविद्या सिद्धि',
    suitableYagyas: ['श्री सूक्त महायज्ञ', 'कनकधारा होम', 'महालक्ष्मी कोटि होम', 'श्रीविद्या नव आवरण यज्ञ'],
    recommendedSamidha: 'Lotus stems (कमल-काष्ठ) or Audumbara (गूलर)',
    samidhaTreeSanskrit: 'कमल-काष्ठ एवं औदुम्बर समिधा',
    havisyaIngredients: ['शुद्ध गोघृत', 'कमलगट्टा', 'मखाने', 'केसर', 'पलाश पुष्प', 'खीर', 'शर्करा', 'शहद'],
    mekhalaSpecs: {
      tier1White: 'अष्टदल कमल बाह्य मेखला (४ अंगुल)',
      tier2Red: 'मध्य दल मेखला (३ अंगुल)',
      tier3Dark: 'आन्तरिक दल मेखला (२ अंगुल)',
      kantham: 'कर्णिका कण्ठ',
      nabhiLotus: 'केन्द्र में स्वर्ण कमल कर्णिका नाभि',
      yoniSpout: 'ईशान दिशा में कमल-नाल योनि'
    },
    shastricCitations: [
      {
        sourceScripture: 'शारदातिलकम्',
        verseRef: 'पटल ३, श्लोक ३५',
        sanskritSloka: 'पद्मकुण्डं चेशदिग्भागे सर्वसम्पत्प्रदं परम् ।\nअष्टपत्रं सकर्णिकं कुर्यात् सर्वसमृद्धिदम् ॥',
        hindiMeaning: 'ईशान कोण में अष्टदल तथा कर्णिका से युक्त पद्म कुण्ड समस्त प्रकार की सम्पदा और समृद्धि प्रदान करने वाला है।',
        englishMeaning: 'In the northeastern Ishana corner, the lotus Kunda with 8 petals and central pericarp yields boundless wealth, abundance, and imperial majesty.'
      }
    ],
    svgPath: '/kundas/padma_kunda.svg'
  },

  // 9. PANCHAKONA KUNDA
  {
    id: 'panchakona_kunda',
    order: 9,
    nameSanskrit: 'पञ्चकोण कुण्डम्',
    nameHindi: 'पञ्चकोण कुण्ड (पञ्चभुज)',
    nameEnglish: 'Panchakona Kunda (Pentagonal Altar)',
    shapeGeometry: 'Regular Pentagon (5 Equal Sides, 108° Angles)',
    shapeGeometrySanskrit: 'पञ्चभुज (पाँच समान भुजाएं)',
    cardinalDirection: 'Southeast or Special Enclosure',
    cardinalDirectionSanskrit: 'आग्नेय कोण अथवा विशेष वेदी',
    presidingDeity: 'Kshetrapala, Bhairava & Shiva Bhutaganas',
    presidingDeitySanskrit: 'क्षेत्रपाल एवं भैरव देव',
    fruitPurpose: 'Removal of ghostly afflictions (Bhuta-badha), pacifying hatred, resolving internal feuds, and psychic cleansing',
    fruitPurposeSanskrit: 'भूतबाधा निवारण, विद्वेषण शमन एवं पिशाच मोचन',
    suitableYagyas: ['भैरव होम', 'क्षेत्रपाल शान्ति यज्ञ', 'भूतशुद्धि महाहोम', 'विद्वेषण शमन अनुष्ठान'],
    recommendedSamidha: 'Arka (मदार) or Khadira (खैर)',
    samidhaTreeSanskrit: 'अर्क एवं खदिर समिधा',
    havisyaIngredients: ['शुद्ध गोघृत', 'उड़द की दाल', 'काले तिल', 'सरसों', 'गुग्गुल', 'लोबान'],
    mekhalaSpecs: {
      tier1White: 'पञ्चकोणीय श्वेत मेखला (४ अंगुल)',
      tier2Red: 'पञ्चकोणीय रक्त मेखला (३ अंगुल)',
      tier3Dark: 'पञ्चकोणीय कृष्ण मेखला (२ अंगुल)',
      kantham: 'पञ्चभुज कण्ठ रेखा',
      nabhiLotus: 'केन्द्र में पञ्चदल नाभि',
      yoniSpout: 'दक्षिण-पूर्व में जलनिर्गम'
    },
    shastricCitations: [
      {
        sourceScripture: 'कुण्डसिद्धिः',
        verseRef: 'अध्याय २, श्लोक १४',
        sanskritSloka: 'पञ्चकोणं महाकुण्डं भूतबाधानिवारणम् ।\nविद्वेषशमनार्थाय निर्मितं शास्त्रसम्मतम् ॥',
        hindiMeaning: 'पञ्चकोण कुण्ड प्रेत-बाधा निवारण तथा पारस्परिक द्वेष व कलह की शान्ति हेतु शास्त्रसम्मत रूप से निर्मित किया जाता है।',
        englishMeaning: 'The pentagonal Kunda is authorized by scriptures to purge negative spectral entities and dissolve hatred, hostility, and psychic unrest.'
      }
    ],
    svgPath: '/kundas/panchakona_kunda.svg'
  },

  // 10. MAHA KUNDA
  {
    id: 'maha_kunda',
    order: 10,
    nameSanskrit: 'महाकुण्डम् (अतिरुद्र वेदी)',
    nameHindi: 'महाकुण्ड (षोडशहस्त/कोटिहोम महावेदी)',
    nameEnglish: 'Maha Kunda (Grand Multi-Tier Cosmic Altar)',
    shapeGeometry: 'Multi-Tiered Stepped Vedic Pyramidal Citadel with 4 Portals',
    shapeGeometrySanskrit: 'चतुर्हस्त/षोडशहस्त बहु-स्तरीय महावेदी',
    cardinalDirection: 'Center of Grand Yagyashala',
    cardinalDirectionSanskrit: 'प्रधान महायज्ञशाला का मध्य भाग',
    presidingDeity: 'Supreme Vaishvanara Agni & Para Brahman',
    presidingDeitySanskrit: 'साक्षात् वैश्वानर अग्नि एवं अतिरुद्र',
    fruitPurpose: 'Global peace, prosperity of the nation, famine eradication, rain, and liberation for all beings',
    fruitPurposeSanskrit: 'विश्वशान्ति, दुर्भिक्ष नाश, राष्ट्र कल्याण एवं कैवल्य मोक्ष',
    suitableYagyas: ['कोटिचण्डी महायज्ञ', 'अतिरुद्र महामख', 'सहस्रचण्डी महायज्ञ', 'विश्वशान्ति यज्ञ'],
    recommendedSamidha: 'All 9 Planetary Sacred Woods (Navagraha Samidhas)',
    samidhaTreeSanskrit: 'नवग्रह समिधा (अर्क, पलाश, खदिर, अपामार्ग, अश्वत्थ, औदुम्बर, शमी, दूर्वा, कुश)',
    havisyaIngredients: ['शुद्ध गोघृत (प्रचुर मात्रा)', 'पंचामृत', 'अष्टद्रव्य', 'पंचमेवा', 'अखण्ड श्रीफल', 'कपूर', 'कस्तूरी', 'केसर'],
    mekhalaSpecs: {
      tier1White: 'महा-प्राकार श्वेत सोपान (१२ अंगुल)',
      tier2Red: 'मध्य रक्त सोपान (८ अंगुल)',
      tier3Dark: 'आन्तरिक कृष्ण सोपान (४ अंगुल)',
      kantham: 'विशाल पाषाण कण्ठ',
      nabhiLotus: 'केन्द्र में द्वादशदल स्वर्ण कर्णिका नाभि',
      yoniSpout: 'उत्तर एवं पश्चिम में द्वि-योनि जलनिर्गम'
    },
    shastricCitations: [
      {
        sourceScripture: 'शतपथ ब्राह्मणम् एवं कुण्डमार्तण्डः',
        verseRef: 'काण्ड १० / श्लोक ४०',
        sanskritSloka: 'महाकुण्डं चतुर्हस्तं षोडशहस्तमेव वा ।\nअतिरुद्रे कोटिहोमे सर्वलोकसुखावहम् ॥',
        hindiMeaning: 'चार हस्त अथवा सोलह हस्त वाला महाकुण्ड अतिरुद्र और कोटिहोम में सम्पूर्ण लोकों के सुख और कल्याण के लिए बनाया जाता है।',
        englishMeaning: 'The Grand Kunda measuring four or sixteen Hastas is constructed for Atirudra and Koti-homa rituals to bestow supreme auspiciousness upon the entire cosmos.'
      }
    ],
    svgPath: '/kundas/maha_kunda.svg'
  }
];

/**
 * Mathematical Calculation of Kunda dimensions based on Ahuti Count
 * Rules from Kundamartanda:
 * - Up to 100 ahutis: 1 Vitasti (12 angulas = 9 inches)
 * - 1,000 ahutis: 1 Aratni / 1 Hasta (24 angulas = 18 inches)
 * - 10,000 ahutis: 1 Hasta (24 angulas = 1.5 ft)
 * - 50,000 ahutis: 2 Hastas (48 angulas = 3.0 ft)
 * - 100,000 ahutis (Laksha): 4 Hastas (96 angulas = 6.0 ft)
 * - 1,000,000 ahutis (Koti): 8 Hastas (192 angulas = 12.0 ft)
 */
export function calculateKundaDimensions(ahutiCount: number, kundaId: string = 'chaturasra_kunda'): KundaCalculationResult {
  let hastas = 1;
  if (ahutiCount <= 100) {
    hastas = 0.5;
  } else if (ahutiCount <= 1000) {
    hastas = 1;
  } else if (ahutiCount <= 10000) {
    hastas = 1;
  } else if (ahutiCount <= 50000) {
    hastas = 2;
  } else if (ahutiCount <= 100000) {
    hastas = 4;
  } else {
    hastas = 8;
  }

  // 1 Hasta = 24 Angulas ~ 18 inches ~ 45.72 cm
  const angulas = hastas * 24;
  const inches = hastas * 18;
  const cm = Number((inches * 2.54).toFixed(1));

  // Depth (Khata) is strictly equal to the side length per Samakhata rule
  const depthInches = inches;
  const depthCm = cm;

  // Mekhala dimensions (Upper 4 angulas, Middle 3, Lower 2 scaled)
  const scale = hastas >= 1 ? hastas : 1;
  const m1Inches = Number((scale * 3.0).toFixed(1));
  const m2Inches = Number((scale * 2.25).toFixed(1));
  const m3Inches = Number((scale * 1.5).toFixed(1));

  // Material and priest estimations
  const estimatedBricks = Math.round(angulas * angulas * 0.18 + 50);
  const estimatedGheeKg = Number((ahutiCount * 0.008).toFixed(1)); // ~8 grams ghee per ahuti
  const estimatedHavisyaKg = Number((ahutiCount * 0.012).toFixed(1)); // ~12 grams havisya per ahuti
  const recommendedPriests = ahutiCount >= 100000 ? 11 : ahutiCount >= 10000 ? 5 : ahutiCount >= 1000 ? 3 : 1;

  return {
    ahutiCount,
    hastas,
    angulas,
    widthInches: inches,
    widthCm: cm,
    lengthInches: inches,
    lengthCm: cm,
    depthInches,
    depthCm,
    mekhala1HeightInches: m1Inches,
    mekhala2HeightInches: m2Inches,
    mekhala3HeightInches: m3Inches,
    estimatedBricks,
    estimatedGheeKg,
    estimatedHavisyaKg,
    recommendedPriests
  };
}

export function getKundaById(id: string): YagyaKundaEntry | undefined {
  const clean = id.trim().toLowerCase().replace(/_kunda$/, '');
  return YAGYA_KUNDAS_DATABASE.find(k => k.id === clean || k.id === `${clean}_kunda`);
}

export function getAllKundas(): YagyaKundaEntry[] {
  return [...YAGYA_KUNDAS_DATABASE].sort((a, b) => a.order - b.order);
}
