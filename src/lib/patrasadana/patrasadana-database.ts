/**
 * Canonical Patrasadana Shastric Database (पात्रसादन विधान)
 * Based on Shatapatha Brahmana (1.1.1.22), Katyayana Shrautasutra (1.3),
 * Paraskara Grihyasutra (1.1-1.2), Ashvalayana Grihyasutra, and Sharadatilakam (Patala 4).
 * 
 * Incorporates complete sacred wood science (Palasha, Khadira, Varana, Shami),
 * exact measurements (Angulas, Hastas, Inches, Cm), inverted (Nyancha) vs upright (Uttana)
 * states, underlying Yantras/Mandalas drawn beneath each vessel (पात्र-पीठ यन्त्र),
 * Vedic mantras, and tradition variants.
 */

export interface PatraDimensions {
  angulas: number;
  hastasOrPradesha: string;
  inches: number;
  cm: number;
  detailsHindi: string;
}

export interface TraditionVariants {
  paraskaraVajaseneyi: string;
  ashvalayanaRigveda: string;
  apastambaKrishnaYajurveda: string;
  tantricSharadaTilakam: string;
}

export interface UnderlyingYantraInfo {
  nameHindi: string;
  nameSanskrit: string;
  shapeGeometryHindi: string;
  dravyaUsedHindi: string;
  beejaMantra: string;
  shastricPurposeHindi: string;
}

export interface PatraEntry {
  id: string;
  order: number;
  nameSanskrit: string;
  nameHindi: string;
  nameEnglish: string;
  pairPartnerId?: string;
  pairNameHindi?: string;
  woodMaterialSanskrit: string;
  woodMaterialHindi: string;
  woodMaterialScientific: string;
  whyThisWoodHindi: string;
  dimensions: PatraDimensions;
  shapeGeometryHindi: string;
  shapeGeometryEnglish: string;
  ritualPurposeHindi: string;
  ritualPurposeEnglish: string;
  underlyingYantra: UnderlyingYantraInfo;
  traditionVariants: TraditionVariants;
  stateNyanchaHindi: string;
  stateUttanaHindi: string;
  samskaraCleansingMethod: string;
  sanskritMantra: string;
  mantraMeaningHindi: string;
  sourceScripture: string;
  verseRef: string;
  svgPath: string;
  altarRow: 1 | 2 | 3;
  altarCol: 1 | 2 | 3 | 4;
}

export const PATRASADANA_DATABASE: PatraEntry[] = [
  // 1. PRANITA PATRA
  {
    id: 'pranita_patra',
    order: 1,
    nameSanskrit: 'प्रणीता पात्रम्',
    nameHindi: 'प्रणीता पात्र (ब्रह्मवारि कलश)',
    nameEnglish: 'Pranita Patra (Sacred Brahma Water Vessel)',
    pairPartnerId: 'prokshani_patra',
    pairNameHindi: 'प्रणीता-प्रोक्षणी युगल',
    woodMaterialSanskrit: 'वारण काष्ठम् / विशुद्ध ताम्रम्',
    woodMaterialHindi: 'वारण (वरुण वृक्ष) काष्ठ अथवा शुद्ध तांबा',
    woodMaterialScientific: 'Crataeva nurvala',
    whyThisWoodHindi: 'वारण वृक्ष का अर्थ है "निवारण करने वाला"। यह समस्त यज्ञीय विघ्नों, असुरों और अमङ्गलों का निवारण करता है। जल के देवता वरुण से साक्षात् सम्बद्ध है।',
    dimensions: {
      angulas: 8,
      hastasOrPradesha: '८ अंगुल लम्बाई × ४ अंगुल चौड़ाई × ३ अंगुल गहराई',
      inches: 6,
      cm: 15.2,
      detailsHindi: 'आयताकार (८×४ अंगुल), गहराई ३ अंगुल, समतल पेंदा और चार समकोण'
    },
    shapeGeometryHindi: 'चतुरस्र (आयताकार) उथला जलपात्र',
    shapeGeometryEnglish: 'Rectangular Chaturasra flat-bottomed vessel with four corners',
    ritualPurposeHindi: 'इसमें पवित्र जल भरकर दो दर्भ-पवित्रियों द्वारा ब्रह्म-रूप में प्रतिष्ठा की जाती है। यह यज्ञ की सम्पूर्ण अवधि में उत्तर दिशा में रहकर यज्ञ-रक्षा करता है।',
    ritualPurposeEnglish: 'Filled with consecrated water representing Brahma/Varuna to protect the entire sacrificial arena from adverse forces.',
    underlyingYantra: {
      nameHindi: 'वारुण अष्टदल पद्म मण्डल',
      nameSanskrit: 'वारुणं पद्ममण्डलम्',
      shapeGeometryHindi: 'चतुरस्र भूपुर के भीतर पूर्ण वृत्त एवं अष्टदल कमल',
      dravyaUsedHindi: 'श्वेत चन्दन एवं अक्षत चूर्ण',
      beejaMantra: 'वं',
      shastricPurposeHindi: 'अमृत-तत्व का आवाहन, जल-शुद्धि एवं यज्ञ की विघ्नों से रक्षा'
    },
    traditionVariants: {
      paraskaraVajaseneyi: 'उत्तर दिशा में पूर्वाग्र कुशों पर स्थापन, अक्षत व दर्भ से आच्छादन।',
      ashvalayanaRigveda: 'ब्रह्मा के सम्मुख प्रतिष्ठा, आचमन व प्रोक्षण जल का मूल स्रोत।',
      apastambaKrishnaYajurveda: 'प्रणीता प्रणयन मन्त्रों द्वारा यज्ञशाला की तीन बार परिक्रमा।',
      tantricSharadaTilakam: 'ईशान कोण में विशेषार्घ्य के समीप स्थापन, वरुण गायत्री से अभिमन्त्रण।'
    },
    stateNyanchaHindi: 'प्रारम्भ में अधोमुख (औंधा) ताकि रज-कण न पड़ें।',
    stateUttanaHindi: 'प्रोक्षण उपरान्त ऊर्ध्वमुख (सीधा) कर पवित्र जल एवं कुश-पवित्री स्थापित की जाती हैं।',
    samskaraCleansingMethod: 'प्रोक्षणी जल से सिञ्चन, कुश के अग्रभाग से भीतरी भाग का सम्मार्जन।',
    sanskritMantra: 'ॐ आपो देवीरमृता ऋतावृधोऽपो देवीरभिशस्त्यपाक्षीः ।\nप्रणीताभ्यो नमः ॥',
    mantraMeaningHindi: 'हे दिव्य अमृतमयी आपः (जल देवियों)! सत्य और धर्म का संवर्धन करने वाली आप इस यज्ञ को पवित्र करें। प्रणीता पात्र को नमस्कार।',
    sourceScripture: 'शतपथ ब्राह्मणम् एवं कात्यायन श्रौतसूत्रम्',
    verseRef: 'शतपथ १.१.२ / कात्यायन १.३.१४',
    svgPath: '/patrasadana/pranita_patra.svg',
    altarRow: 1,
    altarCol: 1
  },

  // 2. PROKSHANI PATRA
  {
    id: 'prokshani_patra',
    order: 2,
    nameSanskrit: 'प्रोक्षणी पात्रम्',
    nameHindi: 'प्रोक्षणी पात्र (पवित्रीकरण जल पात्र)',
    nameEnglish: 'Prokshani Patra (Consecration Sprinkling Vessel)',
    pairPartnerId: 'pranita_patra',
    pairNameHindi: 'प्रणीता-प्रोक्षणी युगल',
    woodMaterialSanskrit: 'वारण काष्ठम् / विशुद्ध कांस्यम्',
    woodMaterialHindi: 'वारण काष्ठ, कांस्य अथवा ताम्र',
    woodMaterialScientific: 'Crataeva nurvala / Bell Metal',
    whyThisWoodHindi: 'जल शोधन और प्रोक्षण हेतु वारण काष्ठ अथवा कांस्य की ध्वनि-तरंगें नकारात्मक ऊर्जा को निष्कासित करती हैं।',
    dimensions: {
      angulas: 8,
      hastasOrPradesha: '८ अंगुल लम्बाई × ४ अंगुल चौड़ाई (गोस्तनाकार मुख)',
      inches: 6,
      cm: 15.2,
      detailsHindi: 'ढालू अग्रभाग (गोस्तनाकार शुण्डिका), २ कुश-पवित्री धारण योग्य'
    },
    shapeGeometryHindi: 'गोस्तनाकार / मयूरास्य (गाय के थन या मयूर मुख सदृश ढालू निर्गम मुख)',
    shapeGeometryEnglish: 'Elongated vessel with a pouring spout shaped like a cow udder / peacock beak',
    ritualPurposeHindi: 'हविष्य सामग्री, समिधा, कुण्ड, वेदी और दिशाओं पर जल छिड़ककर (प्रोक्षण) उन्हें देव-योग्य पवित्र बनाना।',
    ritualPurposeEnglish: 'Used for holding consecrated water and asperging all sacrificial offerings, firewood, and boundaries.',
    underlyingYantra: {
      nameHindi: 'षट्कोण वारुण मण्डल',
      nameSanskrit: 'वारुणं षट्कोणमण्डलम्',
      shapeGeometryHindi: 'वृत्त के भीतर दो परस्पर-वेधी त्रिकोण (षट्कोण चक्र)',
      dravyaUsedHindi: 'श्वेत चन्दन, कपूर एवं गङ्गाजल',
      beejaMantra: 'वं',
      shastricPurposeHindi: 'प्रोक्षण जल में आपो-दैवी एवं पवित्रीकरण शक्तियों का संचरण'
    },
    traditionVariants: {
      paraskaraVajaseneyi: 'प्रणीता के ठीक पूर्व में स्थापन, सवितृ मन्त्र से प्रोक्षण।',
      ashvalayanaRigveda: 'कुश-पवित्रक द्वारा त्रिवार प्रोक्षण जल ग्रहण।',
      apastambaKrishnaYajurveda: 'प्रोक्षणी-आसादन मन्त्र के साथ अध्वर्यु द्वारा स्पर्श।',
      tantricSharadaTilakam: 'अस्त्र मन्त्र (फट्) द्वारा शोधन और अमृत-बीज (वं) से अभिमन्त्रण।'
    },
    stateNyanchaHindi: 'प्रारम्भ में न्यञ्च् (औंधा)।',
    stateUttanaHindi: 'उत्तान कर प्रणीता से जल ग्रहण कर दो अखंडित दर्भ-पवित्री रखी जाती हैं।',
    samskaraCleansingMethod: 'कुश-मूल से बाह्य और कुश-अग्र से आन्तरिक शोधन।',
    sanskritMantra: 'ॐ देवस्य त्वा सवितुः प्रसवेऽश्विनोर्बाहुभ्यां पूष्णो हस्ताभ्याम् ।\nप्रोक्षणीभ्यो नमः ॥',
    mantraMeaningHindi: 'भगवान् सविता की प्रेरणा से, अश्विनीकुमारों की भुजाओं से और पूषा के हाथों से मैं इस प्रोक्षणी का ग्रहण व प्रोक्षण करता हूँ।',
    sourceScripture: 'पारस्कर गृह्यसूत्रम्',
    verseRef: 'काण्ड १, कण्डिका १',
    svgPath: '/patrasadana/prokshani_patra.svg',
    altarRow: 1,
    altarCol: 2
  },

  // 3. AJYASTHALI
  {
    id: 'ajyasthali',
    order: 3,
    nameSanskrit: 'आज्यस्थाली',
    nameHindi: 'आज्यस्थाली (कांस्य घृत कलश)',
    nameEnglish: 'Ajyasthali (Bronze Ghee Chalice)',
    pairPartnerId: 'charusthali',
    pairNameHindi: 'आज्यस्थाली-चरुस्थाली युगल',
    woodMaterialSanskrit: 'विशुद्ध कांस्यम् (Bell Metal) / ताम्रम्',
    woodMaterialHindi: 'शुद्ध कांसा (कांस्य) अथवा तांबा',
    woodMaterialScientific: 'Cu-Sn Bronze Alloy (78% Copper, 22% Tin)',
    whyThisWoodHindi: 'शास्त्रों में घृत तपाने और रखने हेतु कांसा सर्वश्रेष्ठ कहा गया है। लौह, सीसा अथवा एल्युमिनियम अग्निहोत्र में सर्वथा त्याज्य और दूषित माने गए हैं।',
    dimensions: {
      angulas: 8,
      hastasOrPradesha: 'व्यास ६-८ अंगुल, क्षमता ५०० ग्राम से ५ कि.ग्रा.',
      inches: 6,
      cm: 15.2,
      detailsHindi: 'विस्तृत गोल मुख (जिससे स्रुवा सुगमता से प्रवेश करे), सुदृढ़ पाद-पीठ'
    },
    shapeGeometryHindi: 'कुम्भाकार विस्तृत मुख वाला गोलाकार पात्र',
    shapeGeometryEnglish: 'Spherical urn with a wide flared mouth allowing effortless ladle entry',
    ritualPurposeHindi: 'हवन हेतु गोघृत को अग्नि के उत्तर में तपाना, उल्मुक (अग्नि-शलाका) घुमाकर शोधन करना और पवित्रियों से उत्पवन करना।',
    ritualPurposeEnglish: 'Heating pure cow ghee north of the fire, purifying with a burning torch (Ulmuka) and straining with Kusha pavatris.',
    underlyingYantra: {
      nameHindi: 'सौम्य सूर्य-चन्द्र मण्डल',
      nameSanskrit: 'सौम्यं सूर्यमण्डलम्',
      shapeGeometryHindi: 'द्वादशार सूर्य चक्र एवं अष्टकोण पीठ',
      dravyaUsedHindi: 'हरिद्रा (हल्दी), केशर एवं चन्दन',
      beejaMantra: 'ह्रीं / सौः',
      shastricPurposeHindi: 'घृत में सूर्य-रश्मि एवं चन्द्र-अमृत का आवाहन, स्निग्धता व पुष्टि'
    },
    traditionVariants: {
      paraskaraVajaseneyi: 'अग्नि के उत्तर भाग में अंगारों पर तपाकर दो पवित्रियों से त्रिवार उत्पवन।',
      ashvalayanaRigveda: 'सवितृ मन्त्र से घृत का उत्पवन और संस्रव प्राशन हेतु आधार।',
      apastambaKrishnaYajurveda: 'आज्य-ग्रहण के समय चार अथवा आठ बार स्रुवा से घृत भरने का नियम।',
      tantricSharadaTilakam: 'मूल मन्त्र और धेनु-मुद्रा द्वारा घृत को दिव्य अमृतीकरण करना।'
    },
    stateNyanchaHindi: 'न्यञ्च् (औंधा) रूप में वेदी पर आस्तरण।',
    stateUttanaHindi: 'उत्तान कर शुद्ध गोघृत भरकर अग्नि-सान्निध्य में स्थापन।',
    samskaraCleansingMethod: 'अग्नि पर प्रतपन, उल्मुक प्रदक्षिणा, दर्भ-उत्पवन।',
    sanskritMantra: 'ॐ मही द्यौः पृथिवी च न इमं यज्ञं मिमिक्षताम् ।\nपिप्रतां नो भरीमभिः ॥ आज्यस्थाल्यै नमः ॥',
    mantraMeaningHindi: 'महान् द्युलोक और पृथ्वी देवी हमारे इस यज्ञ को घृत और पोषण से सिञ्चित करें। आज्यस्थाली को नमस्कार।',
    sourceScripture: 'कात्यायन श्रौतसूत्रम्',
    verseRef: 'अध्याय १, कण्डिका ३',
    svgPath: '/patrasadana/ajyasthali.svg',
    altarRow: 1,
    altarCol: 3
  },

  // 4. CHARUSTHALI
  {
    id: 'charusthali',
    order: 4,
    nameSanskrit: 'चरुस्थाली',
    nameHindi: 'चरुस्थाली (हविष्य पक्वान्न पात्र)',
    nameEnglish: 'Charusthali (Cooked Havisya Pot)',
    pairPartnerId: 'ajyasthali',
    pairNameHindi: 'आज्यस्थाली-चरुस्थाली युगल',
    woodMaterialSanskrit: 'कांस्यम् / सुघटित पवित्र मृत्तिका (Clay)',
    woodMaterialHindi: 'कांसा अथवा शुद्ध कुम्हार की पकी मिट्टी',
    woodMaterialScientific: 'Sacred Terracotta / Bell Metal',
    whyThisWoodHindi: 'पायस (खीर) अथवा चरु पकाने हेतु मृत्तिका अथवा कांसा अग्नि की ऊष्मा को समान रूप से प्रसारित कर हविष्य को सुपाच्य और सुगन्धित बनाता है।',
    dimensions: {
      angulas: 8,
      hastasOrPradesha: 'क्षमता १ से २ लीटर',
      inches: 6,
      cm: 15.2,
      detailsHindi: 'गोल उदर, संकुचित कण्ठ, चौड़ा किनारा'
    },
    shapeGeometryHindi: 'परम्परागत गोलाकार हांडी/कलश',
    shapeGeometryEnglish: 'Traditional spherical cooking handi/pot with flared lip',
    ritualPurposeHindi: 'दूध, चावल, जौ और शर्करा युक्त चरु पकाना और देवताओं को अर्पित करने हेतु आहुति रूप में रखना।',
    ritualPurposeEnglish: 'Cooking and holding the sacred boiled grain offering (Charu/Payasam) for principal oblations.',
    underlyingYantra: {
      nameHindi: 'पार्थिव चतुरस्र भूपुर मण्डल',
      nameSanskrit: 'पार्थिवं चतुरस्रमण्डलम्',
      shapeGeometryHindi: 'चतुर्द्वार युक्त स्वर्ण चतुरस्र भूपुर एवं अष्टदल',
      dravyaUsedHindi: 'अष्टगन्ध एवं अक्षत',
      beejaMantra: 'लं',
      shastricPurposeHindi: 'पृथ्वी माता के समस्त अन्न, ओषधि एवं पोषण तत्वों का हविष्य में समावेश'
    },
    traditionVariants: {
      paraskaraVajaseneyi: 'गार्हपत्य अथवा कुण्ड के अंगारों पर चरु पकाना, घृत का अभिघार।',
      ashvalayanaRigveda: 'चरु के अवदान (भाग) निकालकर स्रुवा द्वारा समर्पण।',
      apastambaKrishnaYajurveda: 'मेक्षण (काष्ठ दण्ड) द्वारा चरु का मन्थन और प्रच्छादन।',
      tantricSharadaTilakam: 'नैवेद्य रूप में चरु का तान्त्रिक आहुति विधान।'
    },
    stateNyanchaHindi: 'न्यञ्च् (औंधा) रखना।',
    stateUttanaHindi: 'उत्तान कर पवित्र हविष्य पकाना व धारण करना।',
    samskaraCleansingMethod: 'जल से प्रक्षालन, अग्नि पर प्रतपन, चरु निर्माण।',
    sanskritMantra: 'ॐ अन्नपतेऽन्नस्य नो देह्यनमीवस्य शुष्मिणः ।\nप्र प्र दातारं तारिष ऊर्जं नो धेहि द्विपदे चतुष्पदे ॥ चरुस्थाल्यै नमः ॥',
    mantraMeaningHindi: 'हे अन्नपति परमेश्वर! हमें रोगरहित, बलवर्धक अन्न प्रदान करें। अन्नदाता की रक्षा करें और हमारे सभी प्राणियों को पुष्टि दें।',
    sourceScripture: 'पारस्कर गृह्यसूत्रम्',
    verseRef: 'काण्ड १, कण्डिका १',
    svgPath: '/patrasadana/charusthali.svg',
    altarRow: 1,
    altarCol: 4
  },

  // 5. SRUK
  {
    id: 'sruk',
    order: 5,
    nameSanskrit: 'स्रुक् (जुहू)',
    nameHindi: 'पलाश स्रुक् (महाहवणी)',
    nameEnglish: 'Sruk (The Grand Offering Ladle)',
    pairPartnerId: 'sruva',
    pairNameHindi: 'स्रुक्-स्रुवा युगल',
    woodMaterialSanskrit: 'पलाश काष्ठम् (Butea monosperma) / वैणवम्',
    woodMaterialHindi: 'पलाश (ढाक) काष्ठ अथवा बांस',
    woodMaterialScientific: 'Butea monosperma',
    whyThisWoodHindi: '"पलाशो वा अर्कः" - पलाश को वेदों में ब्रह्मवृक्ष कहा गया है। पलाश काष्ठ से दी गई आहुति ब्रह्मतेज, ओज और आत्मबल में अभूतपूर्व वृद्धि करती है।',
    dimensions: {
      angulas: 24,
      hastasOrPradesha: '१ बाहु / १ हस्त (२४ अंगुल • १८ इंच • ४५.७ सेमी)',
      inches: 18,
      cm: 45.7,
      detailsHindi: 'दण्ड १८ अंगुल, पुष्कर बिल ६×४ अंगुल, गहराई १.५ अंगुल, हस्तिमुख शुण्डिका'
    },
    shapeGeometryHindi: 'हस्तिमुख / शुण्डिकाकार (हाथी की सूण्ड अथवा हंस-चंचु सदृश निर्गम छिद्र)',
    shapeGeometryEnglish: 'Long handle with an elephant-trunk shaped pouring spout and deep ghee cavity',
    ritualPurposeHindi: 'वसोर्धारा, आज्यभाग, प्रधान देवता आहुति, एवं पूर्णाहुति का सर्वप्रमुख पात्र।',
    ritualPurposeEnglish: 'Principal ladle for offering the perpetual stream of ghee (Vasordhara) and the final supreme oblation (Purnahuti).',
    underlyingYantra: {
      nameHindi: 'अग्नि त्रिकोण यन्त्र',
      nameSanskrit: 'आग्नेयं त्रिकोणयन्त्रम्',
      shapeGeometryHindi: 'ऊर्ध्वमुखी अग्नि त्रिकोण, मध्य में स्वस्तिक एवं त्रिबिन्दु',
      dravyaUsedHindi: 'रक्त चन्दन, रोली एवं कुङ्कुम',
      beejaMantra: 'रं',
      shastricPurposeHindi: 'हव्यवाहन अग्नि की सप्त जिह्वाओं एवं वसोर्धारा का आधार स्थापन'
    },
    traditionVariants: {
      paraskaraVajaseneyi: 'स्रुवा से घृत भरकर स्रुक् में डालना और स्रुक् से वसोर्धारा प्रवाहित करना।',
      ashvalayanaRigveda: 'जुहू के रूप में ऋचाओं के साथ आहुति समर्पण।',
      apastambaKrishnaYajurveda: 'जुहू, उपभृत् और ध्रुवा के रूप में त्रिविध स्रुक् विन्यास।',
      tantricSharadaTilakam: 'स्रुक् को प्रकृति (योषा) और स्रुवा को पुरुष (वृषा) मानकर सम्मिश्रण।'
    },
    stateNyanchaHindi: 'न्यञ्च् (औंधा) रखना।',
    stateUttanaHindi: 'सम्माज्जन के पश्चात् उत्तान करना।',
    samskaraCleansingMethod: 'अग्नि पर प्रतपन, कुश-अग्र से भीतरी और कुश-मूल से बाह्य सम्मार्जन।',
    sanskritMantra: 'ॐ जुहूरसि घृताची नाम्ना प्रियेण नाम्ना प्रियं सद आसीद ॥\nस्रुचे नमः ॥',
    mantraMeaningHindi: 'हे स्रुक्! तुम घृताची नाम वाली जुहू हो। अपने प्रिय नाम से हमारे इस प्रिय यज्ञीय स्थान पर प्रतिष्ठित होओ।',
    sourceScripture: 'शतपथ ब्राह्मणम् एवं तैत्तिरीय संहिता',
    verseRef: 'शतपथ १.३.२ / तैत्तिरीय १.१.४',
    svgPath: '/patrasadana/sruk.svg',
    altarRow: 2,
    altarCol: 1
  },

  // 6. SRUVA
  {
    id: 'sruva',
    order: 6,
    nameSanskrit: 'स्रुवा',
    nameHindi: 'खदिर स्रुवा (नित्य आहुति साधन)',
    nameEnglish: 'Sruva (Sacred Oblation Spoon)',
    pairPartnerId: 'sruk',
    pairNameHindi: 'स्रुक्-स्रुवा युगल',
    woodMaterialSanskrit: 'खदिर काष्ठम् (Acacia catechu)',
    woodMaterialHindi: 'खदिर (खैर) काष्ठ',
    woodMaterialScientific: 'Acacia catechu',
    whyThisWoodHindi: '"खदिरो वै वीर्यम्" - खदिर अत्यन्त कठोर, अग्नि-सहिष्णु और मङ्गल/इन्द्र का तेज समाहित करने वाला काष्ठ है। नित्य सहस्रों आहुतियों की तीव्र ज्वाला में भी यह नहीं जलता।',
    dimensions: {
      angulas: 24,
      hastasOrPradesha: '१ अरत्नि / १ हस्त (२४ अंगुल • १८ इंच • ४५.७ सेमी)',
      inches: 18,
      cm: 45.7,
      detailsHindi: 'गोल कटोरा (पुष्कर) व्यास २ अंगुल, गहराई १ अंगुल, दण्ड सुडौल व मुकुट युक्त'
    },
    shapeGeometryHindi: 'पूर्ण वृत्ताकार कटोरा (पुष्कर) और मुकुटयुक्त दण्ड',
    shapeGeometryEnglish: 'Circular hemispherical cup with a slender handle crowned with a ritual finial',
    ritualPurposeHindi: 'आज्यस्थाली से घृत लेकर कुण्ड में नित्य आहुतियां (१०८, १००८, १००००) देने का सर्वप्रधान साधन।',
    ritualPurposeEnglish: 'The indispensable spoon for taking sanctified ghee and executing thousands of continuous oblations.',
    underlyingYantra: {
      nameHindi: 'अग्नि-सोम मण्डल',
      nameSanskrit: 'अग्नीषोमीयमण्डलम्',
      shapeGeometryHindi: 'त्रिकोण एवं पूर्ण चन्द्र वृत्त का संगम',
      dravyaUsedHindi: 'रक्त चन्दन एवं कुङ्कुम',
      beejaMantra: 'रं',
      shastricPurposeHindi: 'आहुति देते समय प्राण (अग्नि) और अपान (सोम) का संतुलन'
    },
    traditionVariants: {
      paraskaraVajaseneyi: 'दक्षिण हस्त में स्रुवा ग्रहण कर मन्त्र के अन्त में "स्वाहा" के साथ आहुति।',
      ashvalayanaRigveda: 'स्रुवा के अग्रभाग से मन्त्रोच्चार पूर्वक आहुति सिञ्चन।',
      apastambaKrishnaYajurveda: 'स्रुवा द्वारा आज्यस्थाली से चार बार आहुति ग्रहण नियम।',
      tantricSharadaTilakam: 'स्रुवा को दिव्य शिव-शक्ति का प्रतीक मानकर न्यास।'
    },
    stateNyanchaHindi: 'न्यञ्च् (औंधा) रखना।',
    stateUttanaHindi: 'उत्तान कर घृत आहुति हेतु सज्ज करना।',
    samskaraCleansingMethod: 'अग्नि पर प्रतपन, कुश द्वारा सम्मार्जन, प्रोक्षण।',
    sanskritMantra: 'ॐ उपभृदसि घृताची नाम्ना प्रियेण नाम्ना प्रियं सद आसीद ॥\nस्रुवाय नमः ॥',
    mantraMeaningHindi: 'हे स्रुवा! तुम उपभृत् नाम वाली घृताची हो। अपने प्रिय नाम से इस पवित्र यज्ञ मण्डल में विराजमान होओ।',
    sourceScripture: 'शतपथ ब्राह्मणम्',
    verseRef: 'काण्ड १, प्रपाठक ३, ब्राह्मण २',
    svgPath: '/patrasadana/sruva.svg',
    altarRow: 2,
    altarCol: 2
  },

  // 7. SPHYA
  {
    id: 'sphya',
    order: 7,
    nameSanskrit: 'स्फ्यः',
    nameHindi: 'खदिर स्फ्य (काष्ठ खड्ग)',
    nameEnglish: 'Sphya (Sacred Wooden Sword)',
    pairPartnerId: 'upavesha',
    pairNameHindi: 'स्फ्य-उपवेष युगल',
    woodMaterialSanskrit: 'खदिर काष्ठम् (Acacia catechu)',
    woodMaterialHindi: 'खदिर (खैर) काष्ठ',
    woodMaterialScientific: 'Acacia catechu',
    whyThisWoodHindi: 'स्फ्य को "इन्द्र का वज्र" कहा गया है। खदिर काष्ठ की तीक्ष्णता और दृढ़ता भूमि से आसुरी शक्तियों के उच्छेदन हेतु अनिवार्य है।',
    dimensions: {
      angulas: 12,
      hastasOrPradesha: '१ प्रादेश / १ वितस्ति (१२ अंगुल • ९ इंच • २२.८ सेमी)',
      inches: 9,
      cm: 22.8,
      detailsHindi: 'चौड़ाई २ अंगुल, मोटाई ०.५ अंगुल, एक धार वाली काष्ठ की तलवार'
    },
    shapeGeometryHindi: 'असिकार (एक धार वाली तलवार और नुकीली नोक)',
    shapeGeometryEnglish: 'Sword-shaped single-edged wooden blade with pointed tip and hilt guard',
    ritualPurposeHindi: 'पञ्चभूसंस्कार में कुण्ड के तल पर ६ रेखाएं खींचना (उल्लेखन) और दर्भ का पवित्र-च्छेदन करना।',
    ritualPurposeEnglish: 'Drawing the six sacred lines (Ullekhana) in the Kunda bottom and ceremonially severing Darbha grass.',
    underlyingYantra: {
      nameHindi: 'वायव्य वज्र मण्डल',
      nameSanskrit: 'वायव्यं वज्रमण्डलम्',
      shapeGeometryHindi: 'षटार वज्र चक्र एवं अष्टदल',
      dravyaUsedHindi: 'सिन्दूर, रक्त चन्दन एवं भस्म',
      beejaMantra: 'यं',
      shastricPurposeHindi: 'इन्द्र-वज्र शक्ति का आवाहन, आसुरी विघ्नों का उच्छेदन'
    },
    traditionVariants: {
      paraskaraVajaseneyi: 'प्राची ३ और उदीची ३ रेखाओं का उल्लेखन, धूलि का उद्धरण।',
      ashvalayanaRigveda: 'स्फ्य द्वारा वेदी निर्माण और परिस्तरण कुश का छेदन।',
      apastambaKrishnaYajurveda: 'स्तम्बयजुः हरण और वेदी की सीमाओं का चिन्हांकन।',
      tantricSharadaTilakam: 'अस्त्र मन्त्र द्वारा कुण्ड का दिग्बन्धन और रेखा न्यास।'
    },
    stateNyanchaHindi: 'न्यञ्च् (औंधा) रखना।',
    stateUttanaHindi: 'उत्तान कर उल्लेखन कर्म सम्पादित करना।',
    samskaraCleansingMethod: 'अग्नि पर प्रतपन, कुश से पोंछना, प्रोक्षण जल से शोधन।',
    sanskritMantra: 'ॐ इन्द्रस्य वज्रोऽसि वार्त्रघ्नः स्तनयित्नुमान् ।\nस्फ्याय नमः ॥',
    mantraMeaningHindi: 'हे स्फ्य! तुम वृत्रासुर का नाश करने वाले मेघ-गर्जन युक्त साक्षात् इन्द्र के वज्र हो।',
    sourceScripture: 'पारस्कर गृह्यसूत्रम् एवं कात्यायन श्रौतसूत्रम्',
    verseRef: 'पारस्कर १.१ / कात्यायन १.३',
    svgPath: '/patrasadana/sphya.svg',
    altarRow: 2,
    altarCol: 3
  },

  // 8. UPAVESHA
  {
    id: 'upavesha',
    order: 8,
    nameSanskrit: 'उपवेषः (धृष्टिः)',
    nameHindi: 'उपवेष / धृष्टि (अग्नि चालन दण्ड)',
    nameEnglish: 'Upavesha / Dhrishti (Fire-Stirring Staff)',
    pairPartnerId: 'sphya',
    pairNameHindi: 'स्फ्य-उपवेष युगल',
    woodMaterialSanskrit: 'पलाश काष्ठम् / शमी (Prosopis cineraria)',
    woodMaterialHindi: 'पलाश अथवा शमी काष्ठ',
    woodMaterialScientific: 'Butea monosperma / Prosopis cineraria',
    whyThisWoodHindi: 'अंगारों और जलती समिधाओं के स्पर्श में रहने के कारण पलाश व शमी काष्ठ अग्नि से मैत्री भाव रखते हैं और शीघ्र भस्म नहीं होते।',
    dimensions: {
      angulas: 24,
      hastasOrPradesha: '१ बाहु / १ हस्त (२४ अंगुल • १८ इंच • ४५.७ सेमी)',
      inches: 18,
      cm: 45.7,
      detailsHindi: 'अग्रभाग चपटा (फावड़े या अंगुली सदृश), सुदृढ़ मूठ'
    },
    shapeGeometryHindi: 'चपटा हस्त्याकार अग्रभाग युक्त काष्ठ दण्ड',
    shapeGeometryEnglish: 'Wooden staff with a flattened spade/paddle-shaped tip for arranging embers',
    ritualPurposeHindi: 'कुण्ड के भीतर जलते अंगारों और समिधाओं को बिना हाथ लगाए सुरक्षित रूप से व्यवस्थित करना।',
    ritualPurposeEnglish: 'Arranging glowing embers and firewood within the fire pit without physical contact.',
    underlyingYantra: {
      nameHindi: 'आग्नेय शिखा मण्डल',
      nameSanskrit: 'आग्नेयपीठम्',
      shapeGeometryHindi: 'त्रिकोणाकार अग्नि ज्वाला पीठ',
      dravyaUsedHindi: 'रक्त चन्दन',
      beejaMantra: 'रं',
      shastricPurposeHindi: 'अंगार प्रदीपन एवं काष्ठ-सञ्चालन में अग्नि-तेज की रक्षा'
    },
    traditionVariants: {
      paraskaraVajaseneyi: 'अग्नि प्रदीपन के समय अंगारों को मध्य में संचित करना।',
      ashvalayanaRigveda: 'धृष्टि द्वारा अग्नि का समूहन।',
      apastambaKrishnaYajurveda: 'कपालों के नीचे अंगार बिछाने हेतु प्रयोग।',
      tantricSharadaTilakam: 'अग्नि के तेज को प्रदीप्त करने हेतु काष्ठ व्यवस्था।'
    },
    stateNyanchaHindi: 'न्यञ्च् रखना।',
    stateUttanaHindi: 'उत्तान कर अग्नि-सेवा में प्रयुक्त करना।',
    samskaraCleansingMethod: 'प्रोक्षणी जल से सिञ्चन, अग्नि में तपाना।',
    sanskritMantra: 'ॐ उपवेषोऽसि धृष्टिरसि ब्रह्मणा त्वा सन्दधामि ॥\nउपवेषाय नमः ॥',
    mantraMeaningHindi: 'हे काष्ठ दण्ड! तुम उपवेष और धृष्टि हो। मैं ब्रह्मतेज द्वारा तुम्हें संयुक्त करता हूँ।',
    sourceScripture: 'शतपथ ब्राह्मणम्',
    verseRef: 'काण्ड १, प्रपाठक २, ब्राह्मण १',
    svgPath: '/patrasadana/upavesha.svg',
    altarRow: 2,
    altarCol: 4
  },

  // 9. IDHMA BUNDLE
  {
    id: 'idhma_bundle',
    order: 9,
    nameSanskrit: 'इध्मप्रव्रश्चनम्',
    nameHindi: 'इध्म (२१ समिधा बन्धन)',
    nameEnglish: 'Idhma (The 21 Samidhas Bundle)',
    pairPartnerId: 'barhi_prastara',
    pairNameHindi: 'इध्म-बर्हि युगल',
    woodMaterialSanskrit: 'पलाश / खदिर / शमी समिधा',
    woodMaterialHindi: 'पलाश, खदिर अथवा शमी की पवित्र समिधाएं',
    woodMaterialScientific: 'Sacred Twigs Bundle',
    whyThisWoodHindi: 'कीट-रहित, सीधे, १ प्रादेश प्रमाण वाले पवित्र वृक्षों की समिधाएं अग्नि में न्यूनतम धूम्र और अधिकतम प्राण-ऊर्जा उत्पन्न करती हैं।',
    dimensions: {
      angulas: 12,
      hastasOrPradesha: '१ प्रादेश (१०-१२ इंच • २४-३० सेमी)',
      inches: 12,
      cm: 30.5,
      detailsHindi: '२१ समिधाएं, कुश-रज्जु से त्रिगुण बंधी हुईं'
    },
    shapeGeometryHindi: 'बेलनाकार समिधाओं का कसा हुआ बंडल',
    shapeGeometryEnglish: 'Cylindrical tight bundle of 21 sticks tied with three-ply Kusha rope',
    ritualPurposeHindi: '१ आधान, ३ परिधि, २ प्रदीपन और १५ सामिधेनी मन्त्रों के साथ अग्नि में आहुति प्रदान करना।',
    ritualPurposeEnglish: 'Constitutes fuel for kindling (1), borders (3), lighting (2), and 15 Samidheni verses.',
    underlyingYantra: {
      nameHindi: 'अष्टकोण स्वस्तिक पीठ',
      nameSanskrit: 'स्वस्तिकमण्डलम्',
      shapeGeometryHindi: 'अष्टकोण वृत्त के भीतर सुदर्शन स्वस्तिक',
      dravyaUsedHindi: 'कुङ्कुम, हरिद्रा एवं अक्षत',
      beejaMantra: 'ॐ',
      shastricPurposeHindi: '२१ समिधाओं में २१ छन्दों एवं देवताओं का आधार स्थापन'
    },
    traditionVariants: {
      paraskaraVajaseneyi: 'कुश रस्सी खोलकर मन्त्रानुसार समिधाओं का कुण्ड में समर्पण।',
      ashvalayanaRigveda: 'सामिधेनी मन्त्रों के साथ एक-एक समिधा का आधान।',
      apastambaKrishnaYajurveda: 'इध्म-सन्नहन रज्जु का विधिपूर्वक मोचन।',
      tantricSharadaTilakam: 'अग्नि के १० संस्कारों में समिधा स्थापन।'
    },
    stateNyanchaHindi: 'वेदी के दक्षिण-पश्चिम भाग में स्थापित।',
    stateUttanaHindi: 'बन्धन खोलकर अग्नि में समर्पण योग्य करना।',
    samskaraCleansingMethod: 'प्रोक्षणी जल से सिञ्चन, दर्भ से प्रोक्षण।',
    sanskritMantra: 'ॐ इध्ममसि स्वाहा । जातवेदसे नमः ॥',
    mantraMeaningHindi: 'हे समिधा बंडल! तुम इध्म हो। सर्वज्ञ जातवेदा अग्निदेव के निमित्त यह स्वाहा रूप है।',
    sourceScripture: 'शतपथ ब्राह्मणम् एवं कात्यायन श्रौतसूत्रम्',
    verseRef: 'शतपथ १.३.५ / कात्यायन १.३.२८',
    svgPath: '/patrasadana/idhma_bundle.svg',
    altarRow: 3,
    altarCol: 1
  },

  // 10. BARHI & PRASTARA
  {
    id: 'barhi_prastara',
    order: 10,
    nameSanskrit: 'बर्हिः एवं प्रस्तरः',
    nameHindi: 'बर्हि एवं प्रस्तर (कुश संहति व यजमान स्तम्भ)',
    nameEnglish: 'Barhi & Prastara (Altar Kusha & Sacrificer Sheaf)',
    pairPartnerId: 'idhma_bundle',
    pairNameHindi: 'इध्म-बर्हि युगल',
    woodMaterialSanskrit: 'विशुद्ध दर्भः (Desmostachya bipinnata)',
    woodMaterialHindi: 'भाद्रपद अमावस्या को गृहीत अखण्डित कुश',
    woodMaterialScientific: 'Desmostachya bipinnata',
    whyThisWoodHindi: 'कुश में सर्वाधिक विद्युत-चुम्बकीय ऊर्जा ग्रहण करने और नकारात्मक विकिरणों को अवशोषित करने की क्षमता होती है।',
    dimensions: {
      angulas: 24,
      hastasOrPradesha: '१ हस्त (१८ इंच • ४५.७ सेमी)',
      inches: 18,
      cm: 45.7,
      detailsHindi: 'बर्हि = वेदी आस्तरण कुश; प्रस्तर = १ मुट्ठी कुश-गुच्छ'
    },
    shapeGeometryHindi: 'पंखाकार आस्तृत कुश और सुगठित यजमान गुच्छ',
    shapeGeometryEnglish: 'Fan of altar-covering Kusha blades and tightly bound royal sacrificer sheaf',
    ritualPurposeHindi: 'कुण्ड के चारों ओर परिस्तरण (आसन) बिछाना; प्रस्तर यजमान का साक्षात् प्रतीक होता है जिसे सूक्तवाक में अर्पित किया जाता है।',
    ritualPurposeEnglish: 'Encircling the altar with sacred grass; Prastara represents the sacrificer himself.',
    underlyingYantra: {
      nameHindi: 'ब्रह्म पद्म मण्डल',
      nameSanskrit: 'ब्राह्मं पद्ममण्डलम्',
      shapeGeometryHindi: 'द्वादशदल महाकमल एवं बिन्दु',
      dravyaUsedHindi: 'श्वेत चन्दन एवं अक्षत',
      beejaMantra: 'हं',
      shastricPurposeHindi: 'यजमान के आध्यात्मिक देह और देवताओं के आसन की प्रतिष्ठा'
    },
    traditionVariants: {
      paraskaraVajaseneyi: 'पूर्वाग्र और उत्तराग्र कुशों का परिस्तरण।',
      ashvalayanaRigveda: 'प्रस्तर को वेदी के मध्य में यजमान-रूप से प्रतिष्ठा।',
      apastambaKrishnaYajurveda: 'बर्हिषः सम्भरण एवं प्रस्तर सूक्तवाक विसर्जन।',
      tantricSharadaTilakam: 'कुशास्तरण पर आसन शुद्धि एवं मन्त्र न्यास।'
    },
    stateNyanchaHindi: 'वेदी पर आच्छादित।',
    stateUttanaHindi: 'देवताओं के बैठने हेतु कोमल ऊर्णाम्रदस् रूप में प्रतिष्ठित।',
    samskaraCleansingMethod: 'प्रोक्षणी जल से सिञ्चन, अक्षत वर्षण।',
    sanskritMantra: 'ॐ बर्हिषे नमः । ऊर्णाम्रदसं त्वा स्तृणामि स्वासस्थां देवेभ्यः ॥\nप्रस्तरोऽसि यजमानो वै प्रस्तरः ॥',
    mantraMeaningHindi: 'हे दर्भ! मैं तुम्हें ऊन के समान कोमल बनाकर देवताओं के उत्तम आसन हेतु बिछाता हूँ। प्रस्तर यजमान का साक्षात् स्वरूप है।',
    sourceScripture: 'शतपथ ब्राह्मणम् एवं तैत्तिरीय संहिता',
    verseRef: 'शतपथ १.३.१ / तैत्तिरीय १.१.२',
    svgPath: '/patrasadana/barhi_prastara.svg',
    altarRow: 3,
    altarCol: 2
  },

  // 11. PARIDHI TRAYA
  {
    id: 'paridhi_traya',
    order: 11,
    nameSanskrit: 'परिधि त्रयम्',
    nameHindi: 'परिधि त्रय (कुण्ड सीमा काष्ठ)',
    nameEnglish: 'Paridhi Traya (The Three Protective Boundaries)',
    woodMaterialSanskrit: 'पलाश / शमी / औदुम्बर काष्ठम्',
    woodMaterialHindi: 'पलाश, शमी अथवा गूलर काष्ठ',
    woodMaterialScientific: 'Butea monosperma / Prosopis cineraria',
    whyThisWoodHindi: 'परिधियां कुण्ड की तीन दिशाओं (पश्चिम, दक्षिण, उत्तर) में स्थित होकर गन्धर्व विश्वावसु और तीनों लोकों की रक्षा करती हैं।',
    dimensions: {
      angulas: 24,
      hastasOrPradesha: '१ बाहु (२४ अंगुल • १८ इंच • ४५.७ सेमी) प्रति काष्ठ',
      inches: 18,
      cm: 45.7,
      detailsHindi: 'मध्यम (स्थूल/मोटी), दक्षिण (मध्यम), उत्तर (सूक्ष्म/पतली)'
    },
    shapeGeometryHindi: 'तीन भिन्न मोटाई वाली गोलाकार काष्ठ शलाकाएं',
    shapeGeometryEnglish: 'Three cylindrical sticks of graduated thickness forming boundaries on West, South, and North',
    ritualPurposeHindi: 'कुण्ड में अग्नि को सीमाओं में आबद्ध रखना तथा आधिभौतिक, आधिदैविक व आध्यात्मिक तापों से रक्षा करना।',
    ritualPurposeEnglish: 'Confines fire to its cosmic boundaries and shields the sacrificer from all afflictions.',
    underlyingYantra: {
      nameHindi: 'त्रैलोक्य रक्षा मण्डल',
      nameSanskrit: 'त्रैलोक्यरक्षामण्डलम्',
      shapeGeometryHindi: 'त्रि-रेखा परिधि चक्र (भूः, भुवः, स्वः सीमा)',
      dravyaUsedHindi: 'चन्दन एवं कुङ्कुम',
      beejaMantra: 'फट्',
      shastricPurposeHindi: 'कुण्ड की तीनों दिशाओं में त्रिविध तापों से अभेद्य सुरक्षा कवच'
    },
    traditionVariants: {
      paraskaraVajaseneyi: 'पश्चिम में मध्यम परिधि, दक्षिण में दक्षिण परिधि, उत्तर में उत्तर परिधि।',
      ashvalayanaRigveda: 'परिधि स्थापन के पश्चात् दो अग्नि-प्रदीपन समिधाएं रखना।',
      apastambaKrishnaYajurveda: 'गन्धर्व विश्वावसु मन्त्र द्वारा परिधियों का स्पर्श।',
      tantricSharadaTilakam: 'त्रिकोण कुण्ड में तीनों मेखलाओं पर परिधि चिन्तन।'
    },
    stateNyanchaHindi: 'वेदी के तीसरे स्तर पर संचित।',
    stateUttanaHindi: 'कुण्ड के तीन किनारों पर विधिपूर्वक स्थापन।',
    samskaraCleansingMethod: 'प्रोक्षणी जल से सिञ्चन, दर्भ से शोधन।',
    sanskritMantra: 'ॐ गन्धर्वोऽसि विश्वावसुः परिधिरसि यजमानस्य परिधिर्यज्ञस्य पातु ॥\nपरिधिभ्यो नमः ॥',
    mantraMeaningHindi: 'हे परिधि! तुम विश्वावसु गन्धर्व हो। तुम यजमान और यज्ञ की परिधि बनकर सर्वतः रक्षा करो।',
    sourceScripture: 'शतपथ ब्राह्मणम्',
    verseRef: 'काण्ड १, प्रपाठक ३, ब्राह्मण ४',
    svgPath: '/patrasadana/paridhi_traya.svg',
    altarRow: 3,
    altarCol: 3
  },

  // 12. SANSRAVA & UTENSILS
  {
    id: 'sansrava_patra',
    order: 12,
    nameSanskrit: 'संस्रवपात्रम् एवं शूर्पम्',
    nameHindi: 'संस्रवपात्र व शूर्प (घृत मार्जन व छाज)',
    nameEnglish: 'Sansrava Patra & Shurpa (Ghee Drops & Grain Winnow)',
    woodMaterialSanskrit: 'कांस्यम् / वेणु (Bamboo)',
    woodMaterialHindi: 'कांसा (संस्रव पात्र) एवं बांस (शूर्प/छाज)',
    woodMaterialScientific: 'Bronze / Bambusa',
    whyThisWoodHindi: 'बांस का शूर्प धान्य शोधन हेतु पवित्र माना गया है। संस्रव पात्र आहुति से टपके घृत को भूमि पर गिरने से बचाकर यजमान के मस्तक मार्जन हेतु सुरक्षित रखता है।',
    dimensions: {
      angulas: 6,
      hastasOrPradesha: 'पात्र व्यास ६ अंगुल; शूर्प १ प्रादेश',
      inches: 6,
      cm: 15.2,
      detailsHindi: 'उथला कांस्य कटोरा एवं वेणु निर्मित पवित्र छाज'
    },
    shapeGeometryHindi: 'लघु कांस्य कटोरा एवं पंखाकार बांस का छाज',
    shapeGeometryEnglish: 'Small bronze receptacle for stray ghee drops alongside bamboo grain-cleaning winnow',
    ritualPurposeHindi: 'संस्रव घृत का संचय, यजमान द्वारा मार्जन-प्राशन, तथा हविष्य धान्य का पावन शोधन।',
    ritualPurposeEnglish: 'Collecting consecrated residual ghee drops for sacrificer blessings and winnowing grains.',
    underlyingYantra: {
      nameHindi: 'सौम्य चन्द्र मण्डल',
      nameSanskrit: 'सौम्यं चन्द्रमण्डलम्',
      shapeGeometryHindi: 'पूर्ण चन्द्र मण्डल एवं अर्धचन्द्र',
      dravyaUsedHindi: 'श्वेत चन्दन एवं कपूर',
      beejaMantra: 'सोमं',
      shastricPurposeHindi: 'अवशिष्ट घृत में दिव्य अमृत अंश का संचय'
    },
    traditionVariants: {
      paraskaraVajaseneyi: 'संस्रव प्राशन एवं मस्तक पर मार्जन विधान।',
      ashvalayanaRigveda: 'शूर्प द्वारा पुरोडाश धान्य का निष्पावन।',
      apastambaKrishnaYajurveda: 'संस्रव होम एवं स्विष्टकृत् आहुति समन्वय।',
      tantricSharadaTilakam: 'शान्ति कलश मार्जन मन्त्रों के साथ प्रोक्षण।'
    },
    stateNyanchaHindi: 'वेदी पर औंधा रखना।',
    stateUttanaHindi: 'उत्तान कर संस्रव बिन्दु ग्रहण करना।',
    samskaraCleansingMethod: 'जल प्रक्षालन, प्रोक्षण।',
    sanskritMantra: 'ॐ संस्रवभागेभ्यो नमः । शूर्पाय नमः ॥',
    mantraMeaningHindi: 'पवित्र संस्रव घृत भागों और धान्य-शोधक शूर्प को नमस्कार।',
    sourceScripture: 'कात्यायन श्रौतसूत्रम्',
    verseRef: 'अध्याय २, कण्डिका १',
    svgPath: '/patrasadana/patrasadana_altar_board.svg',
    altarRow: 3,
    altarCol: 4
  }
];

export function getAllPatras(): PatraEntry[] {
  return [...PATRASADANA_DATABASE].sort((a, b) => a.order - b.order);
}

export function getPatraById(id: string): PatraEntry | undefined {
  const clean = id.trim().toLowerCase();
  return PATRASADANA_DATABASE.find(p => p.id === clean || p.id.replace(/_patra$/, '') === clean);
}

export function getPatrasByRow(row: 1 | 2 | 3): PatraEntry[] {
  return PATRASADANA_DATABASE.filter(p => p.altarRow === row).sort((a, b) => a.altarCol - b.altarCol);
}
