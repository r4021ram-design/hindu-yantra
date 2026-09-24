export interface ShastricConstituent {
  id: number | string;
  nameSanskrit: string;
  nameEnglish: string;
  facultyOrNadi: string;
  significance: string;
  elementOrSound?: string;
}

export interface ShastricAvaranaDetail {
  index: number;
  nameSanskrit: string;
  nameEnglish: string;
  chakraTitle: string;
  presidingDeity: string;
  mudraShakti: string;
  yoginiClass: string;
  geometryType: string;
  significance: string;
  constituentsLabel?: string;
  constituents?: ShastricConstituent[];
}

export interface JyotishRemedyProfile {
  rulingPlanet: string;
  planetSanskrit: string;
  friendlyRashis: string[];
  friendlyNakshatras: string[];
  doshaRemedies: {
    doshaName: string;
    description: string;
    reliefMechanism: string;
  }[];
  lifeAspects: string[];
  wearOrInstallDirection: string;
  favorableDay: string;
  auspiciousTithi: string;
  metalPreference: string;
  beejMantra: string;
  gayatriMantra: string;
  japaCount: number;
  malaType: string;
  dhyanaSloka: string;
  pratishthaVidhiSummary: string[];
}

export interface ShastricCitation {
  sourceScripture: string;
  chapterOrVerse: string;
  sanskritSloka: string;
  hindiMeaning: string;
  englishMeaning: string;
}

export interface YantraShastricEntry {
  id: string;
  nameSanskrit: string;
  nameHindi: string;
  nameEnglish: string;
  subTitle: string;
  presidingDeity: string;
  tradition: string;
  corePhilosophy: string;
  citations: ShastricCitation[];
  avaranas?: ShastricAvaranaDetail[];
  jyotish: JyotishRemedyProfile;
  practicalRemedies: {
    category: 'Wealth' | 'Health' | 'Protection' | 'Relationships' | 'Career' | 'Vastu' | 'Spiritual';
    problem: string;
    remedyProtocol: string;
  }[];
  authenticSvgLayers?: {
    bhupura?: string;
    lotus16?: string;
    lotus8?: string;
    trianglesOuter?: string;
    trianglesInner?: string;
    bindu?: string;
  };
}

export const SHASTRIC_JYOTISH_DATABASE: Record<string, YantraShastricEntry> = {
  sri_yantra: {
    id: 'sri_yantra',
    nameSanskrit: 'श्रीचक्र यन्त्रम् (महामेरु)',
    nameHindi: 'श्री यन्त्र (यन्त्रराज)',
    nameEnglish: 'Shri Yantra (Sri Chakra)',
    subTitle: 'The Supreme Empress of All Sacred Geometry & Cosmic Harmonics',
    presidingDeity: 'ललिता महा त्रिपुरसुन्दरी (राजराजेश्वरी पराभट्टारिका)',
    tradition: 'श्रीविद्या साम्बव तंत्र (कादि व हादि मत)',
    corePhilosophy: 'ब्रह्माण्ड (Macrocosm) और पिण्ड (Microcosm) के तादात्म्य का प्रतीक। यह परब्रह्म और पराशक्ति के शाश्वत स्पन्दन और अद्वैत संगम का साक्षात् ज्यामितीय विग्रह है।',
    citations: [
      {
        sourceScripture: 'सौन्दर्यलहरी (आदि शंकराचार्य)',
        chapterOrVerse: 'श्लोक ११',
        sanskritSloka: 'चतुर्भिः श्रीकण्ठैः शिवयुवतिभिः पञ्चभिरपि\nप्रभिन्नाभिः शंभोर्नवभिरपि मूलप्रकृतिभिः।\nचतुश्चत्वारिंशद्वसुदलकलाश्रत्रिवलय-\nत्रिरेखाभिः सार्धं तव शरणकोणाः परिणताः॥',
        hindiMeaning: 'हे भगवती! शिव के चार और आपके पाँच मूल त्रिकोणों के परस्पर भेद से कुल नौ मूल प्रकृतियों द्वारा ४३ त्रिकोण, ८ दल कमल, १६ दल कमल, तीन वृत्त और तीन रेखाओं वाला भूपुर मिलकर आपका पवित्र श्रीचक्र स्वरूप बनता है।',
        englishMeaning: 'By the 4 upward Shiva triangles and 5 downward Shakti triangles, interpenetrating through 9 primary roots, arise the 43 sub-triangles, 8-petal lotus, 16-petal lotus, 3 concentric circles, and 3-lined Bhupura quadrangle.'
      },
      {
        sourceScripture: 'कामकलाविलास (पुण्यानन्दनाथ)',
        chapterOrVerse: 'सूत्र २२-२६',
        sanskritSloka: 'बिन्दुत्रिकोणमष्टारं दशारद्वयमेव च।\nचतुर्दशारं चक्राणि नवैतानि भवन्ति हि॥',
        hindiMeaning: 'बिन्दु, त्रिकोण, अष्टार, दो दशार (बहिर्दशार व अन्तर्दशार), चतुर्दशार, अष्टदल, षोडशदल और भूपुर — ये नव चक्र (नवावरण) श्रीचक्र के शाश्वत अंग हैं।',
        englishMeaning: 'Bindu, Central Triangle, Eight-fold star, Twin Ten-triangles, Fourteen-fold circuit, Eight petals, Sixteen petals, and Bhupura constitute the nine sacred enclosures.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'त्रैलोक्यमोहन चक्र',
        nameEnglish: 'Trailokyamohana Chakra (The Enchanter of 3 Worlds)',
        chakraTitle: 'भूपुर (3 Concentric Earth Squares & 4 Portals)',
        presidingDeity: 'त्रिपुरा देवी',
        mudraShakti: 'सर्वसंक्षोभिणी मुद्रा',
        yoginiClass: 'प्रकट योगिनी (10 Siddhis, 8 Matrikas, 10 Mudras)',
        geometryType: '3-Lined Quadrangle with 4 Cardinal Portals',
        significance: 'भौतिक जगत की सीमाओं को पार कर अध्यात्म के अंतर्जगत में प्रवेश का द्वार। यह अणिमा, लघिमा आदि सिद्धियों और ब्राह्मी आदि अष्ट मातृकाओं का अधिष्ठान है।',
        constituentsLabel: 'भूपुर की १० सिद्धियाँ एवं ८ मातृकाएँ',
        constituents: [
          { id: '1.1', nameSanskrit: 'अणिमा सिद्धि', nameEnglish: 'Anima Siddhi', facultyOrNadi: 'अणुवत सूक्ष्मता', significance: 'चेतना को परमाणु समान सूक्ष्म कर प्रकृति के गूढ़ रहस्यों में प्रवेश करने की सामर्थ्य।' },
          { id: '1.2', nameSanskrit: 'लघिमा सिद्धि', nameEnglish: 'Laghima Siddhi', facultyOrNadi: 'भारहीनता / हल्कापन', significance: 'शरीर व मन के समस्त विकारों व गुरुत्व को त्याग कर चेतना को पंख समान हल्का करना।' },
          { id: '1.3', nameSanskrit: 'महिमा सिद्धि', nameEnglish: 'Mahima Siddhi', facultyOrNadi: 'विराट विस्तार', significance: 'चेतना का ब्रह्माण्डीय विस्तार, जिससे साधक समस्त सृष्टि में आत्म-तत्व का दर्शन करता है।' },
          { id: '1.4', nameSanskrit: 'ईशित्व सिद्धि', nameEnglish: 'Ishitwa Siddhi', facultyOrNadi: 'दैवीय प्रभुता', significance: 'पंचमहाभूतों एवं प्रकृति के नियमों पर पूर्ण संतुलन व संचालन की दैवीय शक्ति।' },
          { id: '1.5', nameSanskrit: 'वशित्व सिद्धि', nameEnglish: 'Vashitwa Siddhi', facultyOrNadi: 'सर्व-वशीकरण', significance: 'समस्त प्राणियों व परिस्थितियों को सकारात्मक रूप से धर्मानुकूल करने की शक्ति।' },
          { id: '1.6', nameSanskrit: 'प्राकाम्य सिद्धि', nameEnglish: 'Prakamya Siddhi', facultyOrNadi: 'संकल्प सिद्धि', significance: 'मन की समस्त सात्विक इच्छाओं का तत्काल फलीभूत होना।' },
          { id: '1.7', nameSanskrit: 'भुक्ति सिद्धि', nameEnglish: 'Bhukti Siddhi', facultyOrNadi: 'अनासक्त उपभोग', significance: 'भौतिक व आत्मिक ऐश्वर्य का बिना किसी आसक्ति या बंधन के परम उपभोग।' },
          { id: '1.8', nameSanskrit: 'इच्छा सिद्धि', nameEnglish: 'Ichha Siddhi', facultyOrNadi: 'इच्छा सामर्थ्य', significance: 'ईश्वरीय संकल्प से एकाकार होकर शुभ व कल्याणकारी संकल्पों की पूर्णता।' },
          { id: '1.9', nameSanskrit: 'प्राप्ति सिद्धि', nameEnglish: 'Prapti Siddhi', facultyOrNadi: 'सर्व-प्राप्ति', significance: 'सम्पूर्ण ब्रह्माण्ड में किसी भी दुर्लभ ज्ञान अथवा वस्तु को सुलभ प्राप्त करना।' },
          { id: '1.10', nameSanskrit: 'सर्वकाम सिद्धि', nameEnglish: 'Sarvakama Siddhi', facultyOrNadi: 'मनोरथ पूर्णता', significance: 'जीवन के समस्त धर्म, अर्थ, काम और मोक्ष के लक्ष्यों की पूर्ण सिद्धि।' },
          { id: '1.11', nameSanskrit: 'ब्राह्मी मातृका', nameEnglish: 'Brahmi Matrika', facultyOrNadi: 'सृजन शक्ति', significance: 'काम व अविद्या का शमन कर रचनात्मक ज्ञान व ब्रह्म-चेतना का विकास।' },
          { id: '1.12', nameSanskrit: 'माहेश्वरी मातृका', nameEnglish: 'Maheshwari Matrika', facultyOrNadi: 'संहार शक्ति', significance: 'क्रोध, ईर्ष्या व तामसिक वृत्तियों का संहार कर शान्ति की स्थापना।' },
          { id: '1.13', nameSanskrit: 'कौमारी मातृका', nameEnglish: 'Kaumari Matrika', facultyOrNadi: 'बाल्य तेज व पराक्रम', significance: 'लोभ का विनाश और जीवन में अदम्य साहस, संयम व शौर्य की जागृति।' },
          { id: '1.14', nameSanskrit: 'वैष्णवी मातृका', nameEnglish: 'Vaishnavi Matrika', facultyOrNadi: 'पालन व संरक्षण', significance: 'मोह का नाश तथा समस्त संबंधों व साधना का दिव्य संरक्षण।' },
          { id: '1.15', nameSanskrit: 'वाराही मातृका', nameEnglish: 'Varahi Matrika', facultyOrNadi: 'अहंकार दमन', significance: 'मद व दम्भ का समूल नाश तथा पूर्वजों व पितृ ऊर्जा का शोधन।' },
          { id: '1.16', nameSanskrit: 'माहेन्द्री मातृका', nameEnglish: 'Mahendri Matrika', facultyOrNadi: 'राजसी ऐश्वर्य', significance: 'मात्सर्य (जलन) का निवारण तथा अखंड वैभव, नेतृत्व व स्थिरता।' },
          { id: '1.17', nameSanskrit: 'चामुण्डा मातृका', nameEnglish: 'Chamunda Matrika', facultyOrNadi: 'असुर विनाश', significance: 'जन्म-जन्मांतर के पापकर्मों व नकारात्मक तांत्रिक बाधाओं का विध्वंस।' },
          { id: '1.18', nameSanskrit: 'महालक्ष्मी मातृका', nameEnglish: 'Mahalakshmi Matrika', facultyOrNadi: 'मोक्ष व समृद्धि', significance: 'पापों का क्षय, अष्टलक्ष्मी की कृपा तथा अंतिम मोक्ष पद की प्राप्ति।' }
        ]
      },
      {
        index: 2,
        nameSanskrit: 'सर्वाशापरिपूरक चक्र',
        nameEnglish: 'Sarvashaparipuraka Chakra (Fulfiller of All Desires)',
        chakraTitle: 'षोडशदल पद्म (16 Radial Lotus Petals)',
        presidingDeity: 'त्रिपुरेशी देवी',
        mudraShakti: 'सर्वविद्राविणी मुद्रा',
        yoginiClass: 'गुप्त योगिनी (16 Nitya/Kala Shaktis)',
        geometryType: '16 Symmetrical Radial Petals',
        significance: 'काम, बुद्धि, अहंकार, शब्द, स्पर्श, रूप, रस, गंध, चित्त, धैर्य, स्मृति, नाम, बीज, आत्मा, अमृत और शरीर के आकर्षण की १६ कलाओं की शुद्धि और तृप्ति।',
        constituentsLabel: 'षोडशदल की १६ पंखुड़ियाँ (16 Petal Shaktis)',
        constituents: [
          { id: 1, nameSanskrit: 'कामाकर्षिणी', nameEnglish: 'Kamakarshini', facultyOrNadi: 'कामना एवं संकल्प शक्ति', significance: 'साधक की समस्त इच्छाओं को निष्काम भाव में बदलकर संकल्प सिद्धि प्रदान करती है।' },
          { id: 2, nameSanskrit: 'बुद्ध्याकर्षिणी', nameEnglish: 'Buddhyakarshini', facultyOrNadi: 'बुद्धि व प्रज्ञा तत्व', significance: 'तीक्ष्ण मेधा, निर्णय क्षमता और विवेक ज्ञान की अगाध वृद्धि करती है।' },
          { id: 3, nameSanskrit: 'अहङ्काराकर्षिणी', nameEnglish: 'Ahankarakarshini', facultyOrNadi: 'अहंकार शोधन', significance: 'क्षुद्र अहंकार व दम्भ को नष्ट कर दिव्य आत्म-गौरव में रूपांतरित करती है।' },
          { id: 4, nameSanskrit: 'शब्दाकर्षिणी', nameEnglish: 'Shabdakarshini', facultyOrNadi: 'नाद ब्रह्म व श्रवण', significance: 'वाक् सिद्धि, कर्ण शक्ति एवं ब्रह्माण्डीय अनहद नाद के श्रवण का सामर्थ्य देती है।' },
          { id: 5, nameSanskrit: 'स्पर्शाकर्षिणी', nameEnglish: 'Sparshakarshini', facultyOrNadi: 'प्राणिक स्पर्श व त्वचा', significance: 'प्राण शक्ति को जागृत कर स्पर्श मात्र से आरोग्य व कल्याण की सामर्थ्य देती है।' },
          { id: 6, nameSanskrit: 'रूपाकर्षिणी', nameEnglish: 'Rupakarshini', facultyOrNadi: 'नेत्र तेज व दिव्य रूप', significance: 'दिव्य दृष्टि, सम्मोहन, आभामंडल का विस्तार एवं भगवती के ज्योतिर्मय रूप का दर्शन।' },
          { id: 7, nameSanskrit: 'रसाकर्षिणी', nameEnglish: 'Rasakarshini', facultyOrNadi: 'रसना व सोमरस', significance: 'जिह्वा की शुद्धि, अमृत स्वाद तथा जीवन में रस-आनंद की अखंड धारा।' },
          { id: 8, nameSanskrit: 'गन्धाकर्षिणी', nameEnglish: 'Gandhakarshini', facultyOrNadi: 'पृथ्वी तत्व व सुगन्ध', significance: 'मूलाधार चक्र की शुद्धि एवं अंतःचेतना में दिव्य पारिजात गन्ध की अनुभूति।' },
          { id: 9, nameSanskrit: 'चित्ताकर्षिणी', nameEnglish: 'Chittakarshini', facultyOrNadi: 'चित्त व एकाग्रता', significance: 'चित्त की चंचलता, भटकाव और विक्षेपों का शमन कर गहरी ध्यानस्थ समाधि।' },
          { id: 10, nameSanskrit: 'धैर्याकर्षिणी', nameEnglish: 'Dheiryakarshini', facultyOrNadi: 'धैर्य व आत्म-स्थिरता', significance: 'कठिनतम संकटों में भी पर्वत समान अडिग धैर्य, संतुलन व शांति।' },
          { id: 11, nameSanskrit: 'स्मृत्याकर्षिणी', nameEnglish: 'Smrityakarshini', facultyOrNadi: 'स्मृति व मेधा शक्ति', significance: 'वेद-शास्त्रों के ज्ञान, पूर्व संस्कारों एवं गुरु आज्ञा की अचूक स्मृति।' },
          { id: 12, nameSanskrit: 'नामाकर्षिणी', nameEnglish: 'Namakarshini', facultyOrNadi: 'नाम जप व कीर्ति', significance: 'भगवन्नाम की अजपा साधना तथा साधक को शुभ यश, प्रतिष्ठा व अमरत्व।' },
          { id: 13, nameSanskrit: 'बीजाकर्षिणी', nameEnglish: 'Bijakarshini', facultyOrNadi: 'मूल बीज व मंत्र सामर्थ्य', significance: 'बीज मंत्रों को चैतन्य कर इच्छित सृजन व आध्यात्मिक संकल्प की सिद्धि।' },
          { id: 14, nameSanskrit: 'आत्माकर्षिणी', nameEnglish: 'Atmakarshini', facultyOrNadi: 'जीवात्मा आकर्षण', significance: 'जीवात्मा को माया के पाश से खींचकर सीधे परमात्मा की शरण में प्रतिष्ठित करना।' },
          { id: 15, nameSanskrit: 'अमृताकर्षिणी', nameEnglish: 'Amritakarshini', facultyOrNadi: 'अमृत स्राव व अमरत्व', significance: 'सहस्त्रार चक्र से दिव्य अमृत का निरंतर स्राव एवं देह का कायाकल्प।' },
          { id: 16, nameSanskrit: 'शरीराकर्षिणी', nameEnglish: 'Sharirakarshini', facultyOrNadi: 'काया शुद्धि व कांति', significance: 'शारीरिक रोगों का निवारण, ओजस्वी कांति एवं दिव्य स्वस्थ शरीर की प्राप्ति।' }
        ]
      },
      {
        index: 3,
        nameSanskrit: 'सर्वसंक्षोभण चक्र',
        nameEnglish: 'Sarvasankshobhana Chakra (The Agitator of All)',
        chakraTitle: 'अष्टदल पद्म (8 Radial Sacred Petals)',
        presidingDeity: 'त्रिपुरसुन्दरी देवी',
        mudraShakti: 'सर्वाकर्षिणी मुद्रा',
        yoginiClass: 'गुप्ततर योगिनी (8 Ananga Shaktis)',
        geometryType: '8 Symmetrical Sacred Petals',
        significance: 'अनंगकुसुमा आदि आठ शक्तियों का निवास। मन, वाणी और कर्म के सूक्ष्म विक्षेपों का शमन कर एकाग्रता और आत्मबल की जागृति।',
        constituentsLabel: 'अष्टदल की ८ पंखुड़ियाँ (8 Petal Shaktis)',
        constituents: [
          { id: 1, nameSanskrit: 'अनङ्गकुसुमा', nameEnglish: 'Ananga Kusuma', facultyOrNadi: 'हृदय का दिव्य पुष्प', significance: 'साधक के हृदय में सूक्ष्म आध्यात्मिक प्रेम व भक्ति के कमल का प्रस्फुटन।' },
          { id: 2, nameSanskrit: 'अनङ्गमेखला', nameEnglish: 'Ananga Mekhala', facultyOrNadi: 'प्राणिक संतुलन सूत्र', significance: 'प्राण और अपान को दिव्य मेखला (कटिसूत्र) समान अनुशासन में बांधना।' },
          { id: 3, nameSanskrit: 'अनङ्गशासना', nameEnglish: 'Ananga Shasana', facultyOrNadi: 'इन्द्रिय शासन', significance: 'मन, बुद्धि और दसों इंद्रियों पर अखंड आत्म-नियंत्रण व संप्रभुता।' },
          { id: 4, nameSanskrit: 'अनङ्गशरभा (रेखा)', nameEnglish: 'Ananga Rekha', facultyOrNadi: 'ऊर्ध्वमुखी चेतना', significance: 'साधक की चेतना को मूलाधार से आज्ञा चक्र तक सीधी ज्योति रेखा में उठाना।' },
          { id: 5, nameSanskrit: 'अनङ्गबाणा', nameEnglish: 'Ananga Bana', facultyOrNadi: 'एकाग्रता का बाण', significance: 'चित्त की एकाग्रता को लक्ष्य पर अचूक बाण समान केंद्रित कर देना।' },
          { id: 6, nameSanskrit: 'अनङ्गविह्वला', nameEnglish: 'Ananga Vihwala', facultyOrNadi: 'पराभक्ति उल्लास', significance: 'ईश्वरीय साक्षात्कार के आनन्द में चित्त का परम समर्पण व भक्ति रस।' },
          { id: 7, nameSanskrit: 'अनङ्गकाशिनी (मदना)', nameEnglish: 'Ananga Madana', facultyOrNadi: 'आत्म-दीप्ति व सौन्दर्य', significance: 'आंतरिक चेतना का ऐसा दिव्य तेज जो साधक के चेहरे पर स्वाभाविक तेज बन खिलता है।' },
          { id: 8, nameSanskrit: 'अनङ्गमालिनी', nameEnglish: 'Ananga Malini', facultyOrNadi: 'नाड़ी सुगन्ध माला', significance: 'समस्त नाड़ियों में शांति, आनंद और माधुर्य की अखंड माला का संचार।' }
        ]
      },
      {
        index: 4,
        nameSanskrit: 'सर्वसौभाग्यदायक चक्र',
        nameEnglish: 'Sarvasaubhagyadayaka Chakra (Bestower of All Auspicious Fortune)',
        chakraTitle: 'चतुर्दशार (14 Outer Triangles)',
        presidingDeity: 'त्रिपुरवासिनी देवी',
        mudraShakti: 'सर्ववश्यकरी मुद्रा',
        yoginiClass: 'सम्प्रदाय योगिनी (14 Principal Nadis)',
        geometryType: '14 Interlocking Circuit Triangles',
        significance: 'मानव देह की १४ प्रमुख नाड़ियों (इड़ा, पिंगला, सुषुम्णा आदि) का शोधन। जीवन में सौभाग्य, प्रतिष्ठा और दैवीय आकर्षण की प्राप्ति।',
        constituentsLabel: '१४ बाह्य त्रिकोण (14 Outer Triangles & Nadis)',
        constituents: [
          { id: 1, nameSanskrit: 'सर्वसंक्षोभिणी', nameEnglish: 'Sarvasamkshobhini', facultyOrNadi: 'अलम्बुषा नाड़ी', significance: 'अज्ञान, जड़ता व तमस का संक्षोभ कर साधक में तीव्र ज्ञान की पिपासा जगाती है।' },
          { id: 2, nameSanskrit: 'सर्वरञ्जिनी', nameEnglish: 'Sarvaranjini', facultyOrNadi: 'कुहू नाड़ी', significance: 'चित्त को दिव्य भगवद-रस और भक्ति से अनुरंजित व प्रफुल्लित करती है।' },
          { id: 3, nameSanskrit: 'सर्वविद्राविणी', nameEnglish: 'Sarvavidravini', facultyOrNadi: 'विश्वोदरा नाड़ी', significance: 'मन के समस्त संशयों, भ्रमों और भयों को बर्फ समान पिघला देती है।' },
          { id: 4, nameSanskrit: 'सर्वाह्लादिनी', nameEnglish: 'Sarvahlhadini', facultyOrNadi: 'वारणा नाड़ी', significance: 'हृदय में अखंड आध्यात्मिक उल्लास, शांति व आह्लाद की वर्षा करती है।' },
          { id: 5, nameSanskrit: 'सर्वमोहिनी', nameEnglish: 'Sarvamohini', facultyOrNadi: 'हस्तिजिह्वा नाड़ी', significance: 'संसार के मिथ्या आकर्षणों को तोड़कर परम सत्य के प्रति सम्मोहन उत्पन्न करती है।' },
          { id: 6, nameSanskrit: 'सर्वस्तम्भिनी', nameEnglish: 'Sarvastambhini', facultyOrNadi: 'यशोवती नाड़ी', significance: 'काम, क्रोध, मद आदि आंतरिक शत्रुओं और बाहरी विघ्नों को स्तम्भित (रोक) देती है।' },
          { id: 7, nameSanskrit: 'सर्वजृम्भिणी', nameEnglish: 'Sarvajrimbhini', facultyOrNadi: 'पयस्विनी नाड़ी', significance: 'संकीर्ण विचारों का अंत कर विशाल ब्रह्माण्डीय विवेक का विस्तार करती है।' },
          { id: 8, nameSanskrit: 'सर्ववशंकरी', nameEnglish: 'Sarvavashankari', facultyOrNadi: 'गांधारी नाड़ी', significance: 'प्रकृति के तत्वों, जनमानस व परिस्थितियों को साधक के अनुकूल बनाती है।' },
          { id: 9, nameSanskrit: 'सर्वरञ्जनी', nameEnglish: 'Sarvaranjani', facultyOrNadi: 'पूषा नाड़ी', significance: 'साधक के हृदय कमल को हर परिस्थिति में सदा प्रफुल्लित व आनंदमग्न रखती है।' },
          { id: 10, nameSanskrit: 'सर्वोन्मादिनी', nameEnglish: 'Sarvonmadini', facultyOrNadi: 'शंखिनी नाड़ी', significance: 'सांसारिक चिंताओं से मुक्त कर ब्रह्मानन्द का दिव्य उन्माद प्रदान करती है।' },
          { id: 11, nameSanskrit: 'सर्वार्थसाधिका', nameEnglish: 'Sarvarthasadhika', facultyOrNadi: 'सरस्वती नाड़ी', significance: 'धर्म, अर्थ, काम और मोक्ष—चारों पुरुषार्थों की सुलभ सिद्धि कराती है।' },
          { id: 12, nameSanskrit: 'सर्वसम्पत्तिपूरिणी', nameEnglish: 'Sarvasampattipurini', facultyOrNadi: 'इड़ा नाड़ी', significance: 'आध्यात्मिक शांति, ज्ञान तथा भौतिक समृद्धि व यश की परिपूर्णता करती है।' },
          { id: 13, nameSanskrit: 'सर्वमन्त्रमयी', nameEnglish: 'Sarvamantramayi', facultyOrNadi: 'पिंगला नाड़ी', significance: 'समस्त वेदों, आगमों और महामंत्रों के बीजों को साधक के कंठ में चैतन्य करती है।' },
          { id: 14, nameSanskrit: 'सर्वद्वन्द्वक्षयंकरी', nameEnglish: 'Sarvadvandvakshayankari', facultyOrNadi: 'सुषुम्णा नाड़ी', significance: 'सुख-दुःख, मान-अपमान, राग-द्वेष आदि द्वन्द्वों का समूल नाश कर अद्वैत में प्रतिष्ठित करती है।' }
        ]
      },
      {
        index: 5,
        nameSanskrit: 'सर्वार्थसाधक चक्र',
        nameEnglish: 'Sarvarthasadhaka Chakra (Achiever of All Cosmic Purposes)',
        chakraTitle: 'बहिर्दशार (10 Outer Middle Triangles)',
        presidingDeity: 'त्रिपुरश्री देवी',
        mudraShakti: 'सर्वोन्मादिनी मुद्रा',
        yoginiClass: 'कुलोत्तीर्ण योगिनी (10 Pranas)',
        geometryType: '10 Outer Point Triangles',
        significance: 'दश प्राणों (प्राण, अपान, समान, व्यान, उदान, नाग, कूर्म, कृकल, देवदत्त, धनंजय) का संतुलन। समस्त पुरुषार्थ (धर्म, अर्थ, काम, मोक्ष) की सिद्धि।',
        constituentsLabel: '१० मध्यम त्रिकोण (10 Outer Middle Triangles & Pranas)',
        constituents: [
          { id: 1, nameSanskrit: 'सर्वसिद्धिप्रदा', nameEnglish: 'Sarvasiddhiprada', facultyOrNadi: 'प्राण वायु', significance: 'साधक के जीवन में समस्त आत्मिक व लौकिक सिद्धियों को अनायास सिद्ध करती है।' },
          { id: 2, nameSanskrit: 'सर्वसम्पत्प्रदा', nameEnglish: 'Sarvasampatprada', facultyOrNadi: 'अपान वायु', significance: 'आंतरिक संतोष रूपी परम धन एवं बाह्य सुख-समृद्धि की प्रचुरता देती है।' },
          { id: 3, nameSanskrit: 'सर्वप्रियंकरी', nameEnglish: 'Sarvapriyankari', facultyOrNadi: 'समान वायु', significance: 'साधक को संपूर्ण समाज, प्रकृति और ईश्वरीय शक्तियों में सर्वप्रिय बनाती है।' },
          { id: 4, nameSanskrit: 'सर्वमङ्गलकारिणी', nameEnglish: 'Sarvamangalakarini', facultyOrNadi: 'व्यान वायु', significance: 'जीवन के समस्त अमंगलों, वास्तुदोषों व अनिष्टों को समाप्त कर मंगलमय बनाती है।' },
          { id: 5, nameSanskrit: 'सर्वकामप्रदा', nameEnglish: 'Sarvakamaprada', facultyOrNadi: 'उदान वायु', significance: 'साधक के सभी सात्विक संकल्पों व मनोरथों को सत्य स्वरूप में परिणत करती है।' },
          { id: 6, nameSanskrit: 'सर्वदुःखविमोचिनी', nameEnglish: 'Sarvadukhavimochini', facultyOrNadi: 'नाग वायु', significance: 'जन्म-मरण चक्र, शारीरिक पीड़ाओं व मानसिक क्लेशों से मुक्ति दिलाती है।' },
          { id: 7, nameSanskrit: 'सर्वमृत्युप्रशमनी', nameEnglish: 'Sarvamrityuprashamani', facultyOrNadi: 'कूर्म वायु', significance: 'अकाल मृत्यु के भय का शमन कर साधक को सुदीर्घ व तेजस्वी आयु देती है।' },
          { id: 8, nameSanskrit: 'सर्वविघ्नविनाशिनी', nameEnglish: 'Sarvavighnavinashini', facultyOrNadi: 'कृकल वायु', significance: 'कर्म, व्यवसाय व साधना के मार्ग में आने वाले समस्त अवरोधों का नाश करती है।' },
          { id: 9, nameSanskrit: 'सर्वाङ्गसुन्दरी', nameEnglish: 'Sarvangasundari', facultyOrNadi: 'देवदत्त वायु', significance: 'काया के प्रत्येक अंग में दिव्य लावण्य, कांति, ऊर्जा व आरोग्य भरती है।' },
          { id: 10, nameSanskrit: 'सर्वसौभाग्यदायिनी', nameEnglish: 'Sarvasaubhagyadayini', facultyOrNadi: 'धनंजय वायु', significance: 'अखंड सौभाग्य, संतान सुख, वंश वृद्धि और कुल-प्रतिष्ठा का वरदान देती है।' }
        ]
      },
      {
        index: 6,
        nameSanskrit: 'सर्वरक्षाकर चक्र',
        nameEnglish: 'Sarvarakshakara Chakra (Protector of All Dimensions)',
        chakraTitle: 'अन्तर्दशार (10 Inner Middle Triangles)',
        presidingDeity: 'त्रिपुरमालिनी देवी',
        mudraShakti: 'सर्वमहाङ्कुशा मुद्रा',
        yoginiClass: 'निगर्भ योगिनी (10 Agnis)',
        geometryType: '10 Inner Point Triangles',
        significance: 'जठराग्नि व प्राणिक ऊर्जा का शोधन। आधिभौतिक, आधिदैविक व आध्यात्मिक तीनों तापों तथा समस्त नकारात्मक ऊर्जाओं से अभेद्य सुरक्षा।',
        constituentsLabel: '१० आंतरिक त्रिकोण (10 Inner Middle Triangles & Agnis)',
        constituents: [
          { id: 1, nameSanskrit: 'सर्वज्ञा', nameEnglish: 'Sarvajna', facultyOrNadi: 'रेचक अग्नि', significance: 'भूत, भविष्य व वर्तमान का सत्य ज्ञान कराकर अज्ञान का अंधकार मिटाती है।' },
          { id: 2, nameSanskrit: 'सर्वशक्ता', nameEnglish: 'Sarvashakta', facultyOrNadi: 'पाचक अग्नि', significance: 'असीमित ऊर्जा, पाचन सामर्थ्य व अमोघ कार्यक्षमता प्रदान करती है।' },
          { id: 3, nameSanskrit: 'सर्वैश्वर्यप्रदा', nameEnglish: 'Sarvaishvaryaprada', facultyOrNadi: 'शोषक अग्नि', significance: 'साधक को अष्ट सिद्धियों सहित ईश्वरीय ऐश्वर्य और राजयोग प्रदान करती है।' },
          { id: 4, nameSanskrit: 'सर्वज्ञानमयी', nameEnglish: 'Sarvajnanamayi', facultyOrNadi: 'दाहक अग्नि', significance: 'विशुद्ध वेदान्त ज्ञान, ब्रह्म-बोध एवं प्रज्ञा चक्षु को उन्मीलित करती है।' },
          { id: 5, nameSanskrit: 'सर्वव्याधिविनाशिनी', nameEnglish: 'Sarvavyadhivinashini', facultyOrNadi: 'प्लवक अग्नि', significance: 'समस्त असाध्य रोगों, त्रिदोष विकारों और मानसिक व्यथाओं का नाश करती है।' },
          { id: 6, nameSanskrit: 'सर्वाधारस्वरूपा', nameEnglish: 'Sarvadharasvarupa', facultyOrNadi: 'क्षामक अग्नि', significance: 'साधक के जीवन व कुंडलिनी जागरण की मूल आधारशिला बनकर पोषण करती है।' },
          { id: 7, nameSanskrit: 'सर्वपापहरा', nameEnglish: 'Sarvapapahara', facultyOrNadi: 'उद्गारक अग्नि', significance: 'जन्म-जन्मांतर के संचित पापों, प्रारब्ध दोषों और कुसंस्कारों का दहन करती है।' },
          { id: 8, nameSanskrit: 'सर्वानन्दमयी', nameEnglish: 'Sarvanandamayi', facultyOrNadi: 'क्षोभक अग्नि', significance: 'दुःखों का संहार कर अंतरात्मा में नित्य परमानन्द एवं शांति की अनुभूति कराती है।' },
          { id: 9, nameSanskrit: 'सर्वरक्षास्वरूपिणी', nameEnglish: 'Sarvarakshasvarupini', facultyOrNadi: 'जृम्भक अग्नि', significance: 'समस्त दिशाओं, ग्रहों, तंत्र-मंत्र बाधाओं व बुरी नजर से अभेद्य रक्षा कवच बनती है।' },
          { id: 10, nameSanskrit: 'सर्वेप्सितफलप्रदा', nameEnglish: 'Sarvepsitaphalaprada', facultyOrNadi: 'मोहक अग्नि', significance: 'साधक द्वारा अभीष्ट व प्रार्थना किए गए फलों को तत्काल सिद्ध करती है।' }
        ]
      },
      {
        index: 7,
        nameSanskrit: 'सर्वरोगहर चक्र',
        nameEnglish: 'Sarvarogahara Chakra (The Eradicator of All Afflictions)',
        chakraTitle: 'अष्टार (8 Innermost Triangles)',
        presidingDeity: 'त्रिपुरासिद्धा देवी',
        mudraShakti: 'सर्वखेचरी मुद्रा',
        yoginiClass: 'रहस्य योगिनी (Vagdevatas - 8 Primordial Sounds)',
        geometryType: '8 Inner Circuit Triangles',
        significance: 'वशिनि आदि आठ वाग्देवियों का अधिष्ठान। शारीरिक, मानसिक रोगों व वाणी दोषों का समूल नाश तथा प्रखर ज्ञान-बोध की प्राप्ति।',
        constituentsLabel: '८ अंतरतम त्रिकोण (8 Inner Triangles & Vagdevatas)',
        constituents: [
          { id: 1, nameSanskrit: 'वशिनी वाग्देवी', nameEnglish: 'Vashini Vagdevi', facultyOrNadi: "'क' वर्ग अधिष्ठात्री", significance: 'शीतोष्ण, सुख-दुःख आदि द्वन्द्वों पर विजय दिलाती है तथा वाणी में सम्मोहन भरती है।' },
          { id: 2, nameSanskrit: 'कामेश्वरी वाग्देवी', nameEnglish: 'Kameshvari Vagdevi', facultyOrNadi: "'च' वर्ग अधिष्ठात्री", significance: 'राग-द्वेष, ईर्ष्या का शमन कर हृदय में ईश्वरीय प्रेम व सरसता जगाती है।' },
          { id: 3, nameSanskrit: 'मोदिनी वाग्देवी', nameEnglish: 'Modini Vagdevi', facultyOrNadi: "'ट' वर्ग अधिष्ठात्री", significance: 'काम-क्रोधादि षड्रिपुओं का शमन कर साधक को नित्य प्रसन्नचित्त रखती है।' },
          { id: 4, nameSanskrit: 'विमला वाग्देवी', nameEnglish: 'Vimala Vagdevi', facultyOrNadi: "'त' वर्ग अधिष्ठात्री", significance: 'लोभ-मोह का नाश कर चित्त को दर्पण समान पूर्ण निर्मल व पवित्र बनाती है।' },
          { id: 5, nameSanskrit: 'अरुणा वाग्देवी', nameEnglish: 'Aruna Vagdevi', facultyOrNadi: "'प' वर्ग अधिष्ठात्री", significance: 'मद-मात्सर्य का दहन कर साधक के भीतर ज्ञान का नूतन अरुणोदय करती है।' },
          { id: 6, nameSanskrit: 'जयिनी वाग्देवी', nameEnglish: 'Jayini Vagdevi', facultyOrNadi: "'य' वर्ग अधिष्ठात्री", significance: 'जन्म-मरण चक्र, भय और अवसाद पर विजय दिलाकर विजयिनी चेतना जगाती है।' },
          { id: 7, nameSanskrit: 'सर्वेश्वरी वाग्देवी', nameEnglish: 'Sarveshvari Vagdevi', facultyOrNadi: "'श' वर्ग अधिष्ठात्री", significance: 'समस्त दोषों, अशुद्धियों व तामसिक विकारों से साधक को सर्वथा मुक्त करती है।' },
          { id: 8, nameSanskrit: 'कौलिनी वाग्देवी', nameEnglish: 'Kaulini Vagdevi', facultyOrNadi: "'ह-क्ष' वर्ग अधिष्ठात्री", significance: 'अविद्या का नाश कर मूलाधार से सहस्त्रार तक कुंडलिनी शक्ति का परम ऐक्य कराती है।' }
        ]
      },
      {
        index: 8,
        nameSanskrit: 'सर्वसिद्धिप्रद चक्र',
        nameEnglish: 'Sarvasiddhiprada Chakra (Bestower of Ultimate Siddhis)',
        chakraTitle: 'केन्द्रीय कामाख्या त्रिकोण (Central Primary Triangle)',
        presidingDeity: 'त्रिपुराम्बा देवी',
        mudraShakti: 'सर्वबीजा मुद्रा',
        yoginiClass: 'अतिरहस्य योगिनी (Kameshvari, Vajreshvari, Bhagamalini)',
        geometryType: 'Inverted Prime Triangle (Yoni / Kamakala)',
        significance: 'इच्छा, ज्ञान और क्रिया शक्ति का त्रिपुट। सृष्टि, स्थिति और संहार की अधिष्ठात्री शक्तियों का मिलन केन्द्र।',
        constituentsLabel: 'मूल त्रिकोण के ३ कोण (3 Prime Angles & Goddesses)',
        constituents: [
          { id: 1, nameSanskrit: 'कामेश्वरी', nameEnglish: 'Kameshvari (South Angle)', facultyOrNadi: 'इच्छा शक्ति • सत्व गुण', significance: 'दक्षिण कोण अधिष्ठात्री। जाग्रत अवस्था, रुद्र ग्रन्थि भेदन एवं समस्त सृष्टि की मूल इच्छा शक्ति।' },
          { id: 2, nameSanskrit: 'वज्रेश्वरी', nameEnglish: 'Vajreshvari (North Angle)', facultyOrNadi: 'ज्ञान शक्ति • रज गुण', significance: 'उत्तर कोण अधिष्ठात्री। स्वप्न अवस्था, विष्णु ग्रन्थि भेदन एवं प्रकाश स्वरूप ज्ञान शक्ति।' },
          { id: 3, nameSanskrit: 'भगमालिनी', nameEnglish: 'Bhagamalini (West Angle)', facultyOrNadi: 'क्रिया शक्ति • तम गुण', significance: 'पश्चिम कोण अधिष्ठात्री। सुषुप्ति अवस्था, ब्रह्म ग्रन्थि भेदन एवं समस्त क्रिया व सामर्थ्य की देवी।' }
        ]
      },
      {
        index: 9,
        nameSanskrit: 'सर्वानन्दमय चक्र',
        nameEnglish: 'Sarvanandamaya Chakra (The Ocean of Supreme Bliss)',
        chakraTitle: 'केन्द्रीय बिन्दु (Bindu - Point of Singularity)',
        presidingDeity: 'महा त्रिपुरसुन्दरी (कामेश्वर-कामेश्वरी अद्वैत)',
        mudraShakti: 'सर्वत्रिखण्डा मुद्रा',
        yoginiClass: 'परावररहस्य योगिनी',
        geometryType: 'Infinitesimal Singularity Point',
        significance: 'शिव-शक्ति का अव्यक्त सामरस्य। कैवल्य, पूर्ण अहंता, और अद्वैतानन्द की पराकाष्ठा।',
        constituentsLabel: 'केन्द्रीय महाबिन्दु (The Absolute Singularity)',
        constituents: [
          { id: 1, nameSanskrit: 'ललिता महा त्रिपुरसुन्दरी', nameEnglish: 'Lalita Maha Tripurasundari', facultyOrNadi: 'तुरीयातीत सामरस्य', significance: 'शिव-शक्ति का नित्य अद्वैत, कामेश्वर-कामेश्वरी का अविभाज्य एकाकार स्वरूप, ब्रह्माण्ड का उद्गम व महाप्रलय लय-स्थान।' }
        ]
      }
    ],
    jyotish: {
      rulingPlanet: 'समस्त नवग्रह (विशेषतः शुक्र व सूर्य)',
      planetSanskrit: 'नवग्रह सामंजस्य व शुक्र-सूर्य प्रभा',
      friendlyRashis: ['वृषभ (Taurus)', 'तुला (Libra)', 'कर्क (Cancer)', 'सिंह (Leo)', 'मीन (Pisces)'],
      friendlyNakshatras: ['रोहिणी', 'चित्रा', 'उत्तरा फाल्गुनी', 'पूर्वाषाढ़ा', 'रेवती'],
      doshaRemedies: [
        {
          doshaName: 'शुक्र दोष व दारिद्र्य योग निवारण',
          description: 'कुंडली में शुक्र का नीचस्थ होना, अस्त होना या दरिद्र योग का प्रभाव जिससे ऐश्वर्य और सुख-समृद्धि बाधित होती है।',
          reliefMechanism: 'श्रीचक्र की प्रतिदिन कुंकुमार्चना करने से शुक्र के मालव्य योग जैसी अनुकूलता उत्पन्न होती है और दरिद्रता का नाश होता है।'
        },
        {
          doshaName: 'कालसर्प व पितृ दोष शांति',
          description: 'राहु-केतु अक्ष द्वारा निर्मित कालसर्प योग तथा नवमेश पीड़ित होने से पितृ बाधा।',
          reliefMechanism: 'श्रीविद्या के पंचदशी महामंत्र के साथ श्रीयन्त्र की प्राण-प्रतिष्ठा से राहु-केतु की क्रूर किरणों का सौम्यीकरण होता है।'
        },
        {
          doshaName: 'वास्तु दोष व गृह क्लेश',
          description: 'घर या कार्यस्थल में ईशान कोण या ब्रह्मस्थान का दूषित होना।',
          reliefMechanism: 'ईशान कोण (North-East) में पारद या अष्टधातु श्रीयन्त्र की स्थापना से संपूर्ण भवन का ऊर्जा मंडल (Aura) 100% सकारात्मक हो जाता है।'
        }
      ],
      lifeAspects: ['अतुल्य धन व स्थायी लक्ष्मी', 'व्यापारिक वृद्धि व ऋणमुक्ति', 'आध्यात्मिक मोक्ष व समाधि', 'गृह-शांति व आकर्षण शक्ति'],
      wearOrInstallDirection: 'ईशान कोण (North-East) अथवा पूर्व दिशा (East), दृष्टि उत्तराभिमुख या पूर्वाभिमुख',
      favorableDay: 'शुक्रवार (Friday), पूर्णिमा, अथवा रवि-पुष्य नक्षत्र',
      auspiciousTithi: 'शुक्ल पक्ष द्वितीया, पंचमी, अष्टमी, पूर्णिमा अथवा नवरात्रि',
      metalPreference: 'स्वर्ण (Gold), रजत (Silver), ताम्र (Copper), अष्टधातु, अथवा स्फटिक (Quartz Crystal)',
      beejMantra: 'ॐ श्रीं ह्रीं क्लीं ग्लौं सौः ॐ ह्रीं श्रीं क ए ई ल ह्रीं ह स क ह ल ह्रीं स क ल ह्रीं सौः ऐं ग्लौं ह्रीं श्रीं',
      gayatriMantra: 'ॐ महादेव्यै च विद्महे दुर्गायै च धीमहि तन्नो देवी प्रचोदयात्॥',
      japaCount: 108,
      malaType: 'कमलगट्टे की माला (Lotus Seed) अथवा स्फटिक माला (Quartz Crystal)',
      dhyanaSloka: 'अरुणां करुणातरङ्गिताक्षीं धृतपाशाङ्कुशपुष्पबाणचापाम्। अणिमादिभिरावृतां मयूखैरहमित्येव विभावये भवानीम्॥',
      pratishthaVidhiSummary: [
        '१. गंगाजल, पंचामृत (दूध, दही, घी, शहद, शर्करा) से श्रीयन्त्र का अभिषेक करें।',
        '२. कल्पोक्त विधि से लाल वस्त्र पर अक्षत की अष्टदल पीठिका बनाकर श्रीयन्त्र स्थापित करें।',
        '३. गंध, कुंकुम, अक्षत, रक्त-पुष्प (गुड़हल/कमल), धूप, दीप व नैवेद्य (खीर/मिश्री) समर्पित करें।',
        '४. श्रीसूक्त अथवा ललिता सहस्रनाम के १०८ नामों से रक्त चन्दन/कुंकुम द्वारा अर्चन करें।',
        '५. नैवेद्य उपरांत आरती और महामंत्र का १०८ बार कमलगट्टे की माला से जाप करें।'
      ]
    },
    practicalRemedies: [
      {
        category: 'Wealth',
        problem: 'अत्यधिक परिश्रम के बाद भी धन संचय न होना, बार-बार घाटा और ऋण की समस्या।',
        remedyProtocol: 'प्रत्येक शुक्रवार को श्रीयन्त्र के समक्ष गाय के शुद्ध घी का दीपक जलाकर कनकधारा स्तोत्र का पाठ करें तथा ॐ श्रीं श्रियै नमः का १०८ बार जाप करें।'
      },
      {
        category: 'Career',
        problem: 'व्यापार में ग्राहकी कम होना, सरकारी कार्यों में अड़चन व पदोन्नति में रुकावट।',
        remedyProtocol: 'व्यापार स्थल की तिजोरी या उत्तर-पूर्व काउंटर पर तांबे या अष्टधातु का श्रीयन्त्र स्थापित करें और प्रतिदिन धूप-दीप दिखाएं।'
      },
      {
        category: 'Health',
        problem: 'अनिद्रा, मानसिक तनाव, अज्ञात भय तथा पारिवारिक सदस्यों का लगातार अस्वस्थ रहना।',
        remedyProtocol: 'पूजा स्थान में स्फटिक श्रीयन्त्र स्थापित कर उसके जल का आचमन करें। ललिता त्रिशती का श्रवण मानसिक शांति प्रदान करता है।'
      },
      {
        category: 'Vastu',
        problem: 'भवन में ईशान कोण कटा होना या शौचालय बना होने से उत्पन्न गंभीर वास्तुदोष।',
        remedyProtocol: 'ईशान कोण में कांस्य या पीतल की थाली में गंगाजल के ऊपर श्रीयन्त्र को स्थापित करें। प्रतिदिन जल परिवर्तित करें।'
      }
    ]
  },

  kuber_yantra: {
    id: 'kuber_yantra',
    nameSanskrit: 'श्री कुबेर यन्त्रम् (धनपति यन्त्र)',
    nameHindi: 'कुबेर यन्त्र (यक्षराज यन्त्र)',
    nameEnglish: 'Kuber Yantra (Sacred Wealth Matrix)',
    subTitle: 'The 3x3 Magic Square Yantra of the Treasurer of the Gods (Sum 72)',
    presidingDeity: 'यक्षराज कुबेर (धन-धान्याधिपति)',
    tradition: 'वैदिक अथर्ववेद व यक्ष तन्त्र',
    corePhilosophy: 'ब्रह्माण्डीय ऊर्जा का संख्यात्मक सन्तुलन। इसका ३x३ का संख्यात्मक ग्रिड प्रत्येक दिशा (क्षैतिज, लम्बवत्, विकर्ण) से ७२ का योग बनाता है, जो पृथ्वी तत्व और स्थिर धन का द्योतक है।',
    citations: [
      {
        sourceScripture: 'विष्णुधर्मोत्तर पुराण',
        chapterOrVerse: 'तृतीय खण्ड, कुबेर पूजा प्रकरण',
        sanskritSloka: 'कुबेराय नमस्तुभ्यं निधिपद्माधिपाय च।\nभवन् मे सुप्रसन्नस्त्वं धनधान्यादि सम्पदाम्॥',
        hindiMeaning: 'हे निधिपति कुबेर! आपको नमस्कार है। आप मुझ पर प्रसन्न होकर मुझे अक्षय धन, धान्य और स्थिर समृद्धि प्रदान करें।',
        englishMeaning: 'Salutations to Lord Kuber, master of the divine treasures (Nidhis). Grace me with inexhaustible wealth, prosperity, and abundance.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'ऐश्वर्य भूपुर प्राकार',
        nameEnglish: 'Bhupura Quadrangle (4 Wealth Gateways)',
        chakraTitle: 'भूपुर एवं दिक्पाल द्वार (Outer Earth Rampart)',
        presidingDeity: 'यक्षराज कुबेर (धनपति)',
        mudraShakti: 'धनदा मुद्रा (Bestower of Wealth)',
        yoginiClass: 'यक्ष-किन्नर वर्ग',
        geometryType: '4 Cardinal Gateways with Concentric Ramparts',
        significance: 'समस्त चारों दिशाओं से धन और भौतिक ऐश्वर्य के आगमन का प्रवेश द्वार। यह दरिद्रता और अपव्यय को रोकता है।'
      },
      {
        index: 2,
        nameSanskrit: 'अष्टनिधि कमल चक्र',
        nameEnglish: 'Ashtanidhi Mandala (8 Divine Treasures)',
        chakraTitle: 'अष्टदल पद्म (8 Sacred Petals of Divine Treasure)',
        presidingDeity: 'अष्टनिधि देवता (पद्म, महापद्म, शंख, मकर, कच्छप, मुकुन्द, कुन्द, नील)',
        mudraShakti: 'निधि मुद्रा (Treasury Seal)',
        yoginiClass: 'गुह्यक योगिनी',
        geometryType: '8 Symmetrical Radial Petals',
        significance: 'कुबेर की आठ अलौकिक निधियों का जागरण, जो व्यापार, कृषि, धातु, रत्न और अचल संपत्ति की सतत वृद्धि करती हैं।'
      },
      {
        index: 3,
        nameSanskrit: '७२ योग महायन्त्र ग्रिड',
        nameEnglish: 'Sacred 3x3 Magic Square (Constant Sum 72)',
        chakraTitle: 'संख्यात्मक नवकोष्ठक ग्रिड (Cosmic Matrix)',
        presidingDeity: 'नव-यक्षेश्वर (Nine Lords of Wealth)',
        mudraShakti: 'अक्षय मुद्रा (Inexhaustible Treasury)',
        yoginiClass: 'संख्या-मातृका वर्ग',
        geometryType: '3x3 Numerical Magic Grid (20-27-25 / 25-24-23 / 27-21-24)',
        significance: 'प्रत्येक पंक्ति, स्तम्भ और विकर्ण का योग ७२ बनता है, जो पृथ्वी तत्व (Mercury-Earth) के चुंबकीय संतुलन और अकूत धन-आकर्षण का रहस्य है।'
      },
      {
        index: 4,
        nameSanskrit: 'केन्द्रीय कुबेर बिन्दु',
        nameEnglish: 'Kubera Singularity Bindu',
        chakraTitle: 'मध्य बिन्दु एवं बीज मण्डल',
        presidingDeity: 'वैश्रवण कुबेर (कामेश्वर सखा)',
        mudraShakti: 'सर्वसम्पत्प्रदा मुद्रा',
        yoginiClass: 'परमगुह्यक शक्ति',
        geometryType: 'Central Singularity Point',
        significance: 'शिव-सखा कुबेर का निवास स्थल। जहाँ साधक के जन्म-जन्मान्तर की दरिद्रता का नाश होकर अखण्ड ऐश्वर्य की प्रतिष्ठा होती है।'
      }
    ],
    jyotish: {
      rulingPlanet: 'बुध (Mercury) व गुरु (Jupiter)',
      planetSanskrit: 'बुध ग्रह (वाणिज्य व कोषाध्यक्ष कारक)',
      friendlyRashis: ['मिथुन (Gemini)', 'कन्या (Virgo)', 'धनु (Sagittarius)', 'मीन (Pisces)', 'वृषभ (Taurus)'],
      friendlyNakshatras: ['अश्लेषा', 'ज्येष्ठा', 'रेवती', 'पुनर्वसु'],
      doshaRemedies: [
        {
          doshaName: 'बुध व गुरु का अशुभ प्रभाव',
          description: 'व्यापारिक निर्णय गलत होना, नकदी (Cash Crunch) की भारी कमी, जमा पूँजी का व्यर्थ व्यय।',
          reliefMechanism: 'कुबेर यन्त्र के ३x३ ग्रिड की उत्तर दिशा में स्थापना से बुध के व्यापारिक योग सक्रिय होते हैं।'
        }
      ],
      lifeAspects: ['आकस्मिक धन लाभ', 'व्यापारिक कैश-फ्लो', 'स्थिर सम्पत्ति व आभूषण वृद्धि', 'ऋणमुक्ति'],
      wearOrInstallDirection: 'उत्तर दिशा (North) — यह कुबेर की अपनी दिशा है।',
      favorableDay: 'बुधवार (Wednesday) अथवा त्रयोदशी / धनतेरस',
      auspiciousTithi: 'शुक्ल पक्ष त्रयोदशी, धनतेरस, अथवा अक्षय तृतीया',
      metalPreference: 'स्वर्ण, पीतल (Brass), अथवा अष्टधातु',
      beejMantra: 'ॐ यक्षाय कुबेराय वैश्रवणाय धनधान्याधिपतये धनधान्यसमृद्धिं मे देहि दापय स्वाहा॥',
      gayatriMantra: 'ॐ वैश्रवणाय विद्महे यक्षराजाय धीमहि तन्नो कुबेरः प्रचोदयात्॥',
      japaCount: 108,
      malaType: 'कमलगट्टा माला अथवा रुद्राक्ष माला',
      dhyanaSloka: 'मनुजवाह्यविमानवरस्थितं गरुडरत्ननिभं निधिनायकम्। शिवसखं मुकुटादिविभूषितं वरगदाभयकुम्भकरं भजे॥',
      pratishthaVidhiSummary: [
        '१. उत्तर दिशा में चौकी पर पीला वस्त्र बिछाएं।',
        '२. कुबेर यन्त्र को पंचामृत से स्नान कराकर पीले चन्दन व अक्षत से पूजें।',
        '३. पीले कनेर या गेंदे के पुष्प तथा सूखे मेवे का भोग लगाएं।',
        '४. कुबेर मंत्र का १०८ बार जाप करें।'
      ]
    },
    practicalRemedies: [
      {
        category: 'Wealth',
        problem: 'दुकान या व्यापार में बिक्री ठप हो जाना, उधार दिया गया पैसा वापस न आना।',
        remedyProtocol: 'दुकान के गल्ले या उत्तर दिशा की दीवार पर कुबेर यन्त्र स्थापित करें और नित्य प्रातः ॐ कुबेराय नमः का ११ बार जप करें।'
      }
    ]
  },

  mahalakshmi_yantra: {
    id: 'mahalakshmi_yantra',
    nameSanskrit: 'श्रीमहालक्ष्मी यन्त्रम्',
    nameHindi: 'महालक्ष्मी यन्त्र',
    nameEnglish: 'Maha Lakshmi Yantra',
    subTitle: 'Sacred Conduit for Perpetual Grace, Auspiciousness & Abundance',
    presidingDeity: 'माता महालक्ष्मी (विष्णुप्रिया)',
    tradition: 'वैदिक श्रीसूक्त परम्परा',
    corePhilosophy: 'अष्टलक्ष्मी की सामूहिक कृपा का केन्द्रबिन्दु। यह अष्टकमल और षट्कोण (हेक्साग्राम) के संयोग से जल व अग्नि के समन्वय का प्रतीक है।',
    citations: [
      {
        sourceScripture: 'ऋग्वैदिक श्रीसूक्तम्',
        chapterOrVerse: 'ऋचा १',
        sanskritSloka: 'हिरण्यवर्णां हरिणीं सुवर्णरजतस्रजाम्।\nचन्द्रां हिरण्मयीं लक्ष्मीं जातवेदो म आवह॥',
        hindiMeaning: 'हे अग्निदेव! सुवर्ण के समान कान्ति वाली, सुवर्ण और चांदी के हार पहनने वाली, चन्द्रमा के समान शीतल और प्रकाशित महालक्ष्मी का मेरे लिए आह्वान करें।',
        englishMeaning: 'O Agni, invoke for me Goddess Lakshmi of golden hue, adorned with gold and silver garlands, radiant like the moon, the very embodiment of prosperity.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'सौभाग्य भूपुर प्राकार',
        nameEnglish: 'Bhupura Earth Citadel of Sri',
        chakraTitle: 'भूपुर एवं कनक द्वार (Golden Outer Enclosure)',
        presidingDeity: 'माता महालक्ष्मी (श्रीमती)',
        mudraShakti: 'वरद मुद्रा (Granting Auspicious Boons)',
        yoginiClass: 'ब्राह्म्यादि अष्टमातृका',
        geometryType: 'Concentric Citadel with 4 Auspicious Entrances',
        significance: 'समस्त अमंगल, दरिद्रता और दुर्भाग्य को घर के बाहर रोककर अष्ट ऐश्वर्य को आकर्षित करने वाला दिव्य घेरा।'
      },
      {
        index: 2,
        nameSanskrit: 'अष्टलक्ष्मी कमल चक्र',
        nameEnglish: 'Ashta-Lakshmi 8-Petal Lotus',
        chakraTitle: 'अष्टदल पद्म (8 Sacred Petals of Divine Abundance)',
        presidingDeity: 'अष्टलक्ष्मी (आदि, धान्य, धैर्य, गज, सन्तान, विजय, विद्या, धन)',
        mudraShakti: 'अभय-कमल मुद्रा',
        yoginiClass: 'कमल योगिनी (Lotus Shaktis)',
        geometryType: '8 Symmetrical Radial Lotus Petals',
        significance: 'जीवन के आठों आयामों (ज्ञान, धैर्य, संतान, विजय, अन्न, स्वास्थ्य, संपत्ति, आध्यात्मिक सिद्धि) का सामूहिक जागरण।'
      },
      {
        index: 3,
        nameSanskrit: 'वैष्णव षट्कोण चक्र',
        nameEnglish: 'Vaishnava Hexagram (Union of Water & Fire)',
        chakraTitle: 'षट्कोण मण्डल (Twin Intersecting Triangles)',
        presidingDeity: 'नारायण-लक्ष्मी सामरस्य',
        mudraShakti: 'शंख-चक्र मुद्रा',
        yoginiClass: 'वैष्णवी शक्ति',
        geometryType: 'Hexagram (Two Inverted Interpenetrating Equilateral Triangles)',
        significance: 'पुरुष (विष्णु) और प्रकृति (लक्ष्मी) का अविनाशी योग। घर में स्थायी धन, व्यापारिक स्थिरता और पारिवारिक शांति की स्थापना।'
      },
      {
        index: 4,
        nameSanskrit: 'श्रीमहालक्ष्मी बिन्दु मण्डल',
        nameEnglish: 'Prime Sri Singularity & Beej',
        chakraTitle: 'केन्द्रीय बिन्दु एवं श्रीं बीज',
        presidingDeity: 'कमलवासिनी महालक्ष्मी (पद्मासना)',
        mudraShakti: 'महालक्ष्मी मुद्रा',
        yoginiClass: 'परा शक्ति',
        geometryType: 'Central Singularity Point',
        significance: 'एकाक्षरी महालक्ष्मी बीज "श्रीं" का शाश्वत स्रोत। जहां साधक को सम्पूर्ण त्रैलोक्य का ऐश्वर्य और पराशांति प्राप्त होती है।'
      }
    ],
    jyotish: {
      rulingPlanet: 'शुक्र (Venus)',
      planetSanskrit: 'शुक्र ग्रह (सौंदर्य, भोग व ऐश्वर्य)',
      friendlyRashis: ['वृषभ (Taurus)', 'तुला (Libra)', 'कर्क (Cancer)', 'मीन (Pisces)'],
      friendlyNakshatras: ['भरणी', 'पूर्वा फाल्गुनी', 'पूर्वाषाढ़ा'],
      doshaRemedies: [
        {
          doshaName: 'शुक्र नीचत्व व विवाह में बाधा',
          description: 'कुंडली में शुक्र का छठे, आठवें या बारहवें भाव में पीड़ित होना जिससे दांपत्य में क्लेश और आर्थिक तंगी रहे।',
          reliefMechanism: 'महालक्ष्मी यन्त्र की शुक्रवार को खीर के भोग से उपासना करने पर शुक्र दोष समाप्त होता है।'
        }
      ],
      lifeAspects: ['वैवाहिक सुख', 'सौंदर्य व कला में सिद्धि', 'अखंड सौभाग्य', 'गृह लक्ष्मी का वास'],
      wearOrInstallDirection: 'उत्तर-पूर्व (North-East) या पूर्व (East)',
      favorableDay: 'शुक्रवार (Friday)',
      auspiciousTithi: 'दीपावली, शरद पूर्णिमा, वररलक्ष्मी व्रत',
      metalPreference: 'चांदी (Silver) अथवा तांबा (Copper)',
      beejMantra: 'ॐ श्रीं ह्रीं श्रीं कमले कमलालये प्रसीद प्रसीद श्रीं ह्रीं श्रीं ॐ महालक्ष्म्यै नमः॥',
      gayatriMantra: 'ॐ महालक्ष्म्यै च विद्महे विष्णुपत्न्यै च धीमहि तन्नो लक्ष्मीः प्रचोदयात्॥',
      japaCount: 108,
      malaType: 'कमलगट्टे की माला',
      dhyanaSloka: 'वन्दे पद्मकरां प्रसन्नवदनां सौभाग्यदां भाग्यदां हस्ताभ्यामभयप्रदां मणिकणैर्नानाविधैर्भूषिताम्।',
      pratishthaVidhiSummary: [
        '१. लाल आसन पर यन्त्र को स्थापित करें।',
        '२. इत्र (गुलाब) और कमलगट्टे से अर्चन करें।',
        '३. श्रीसूक्त का १६ बार पाठ करें।'
      ]
    },
    practicalRemedies: [
      {
        category: 'Wealth',
        problem: 'परिवार में लगातार आर्थिक तनाव और बरकत का अभाव।',
        remedyProtocol: 'घर के मंदिर में महालक्ष्मी यन्त्र के सामने शाम को गाय के घी का दीपक जलाएं और कनकधारा स्तोत्र पढ़ें।'
      }
    ]
  },

  ganesh_yantra: {
    id: 'ganesh_yantra',
    nameSanskrit: 'श्री गणेश यन्त्रम् (विघ्नहर्ता यन्त्र)',
    nameHindi: 'गणेश यन्त्र',
    nameEnglish: 'Ganesh Yantra',
    subTitle: 'The Remover of Obstacles and Master of Intellect & Beginnings',
    presidingDeity: 'भगवान गणेश (गणपति / विघ्नराज)',
    tradition: 'गाणपत्य परम्परा व अथर्वशीर्ष',
    corePhilosophy: 'मूलाधार चक्र का अधिष्ठान। चतुर्दल कमल और स्वस्तिक के समन्वय से यह संपूर्ण ब्रह्माण्ड के गुरुत्वाकर्षण और स्थायित्व का स्रोत है।',
    citations: [
      {
        sourceScripture: 'गणपति अथर्वशीर्ष',
        chapterOrVerse: 'उपनिषद्',
        sanskritSloka: 'त्वं मूलाधारस्थितोऽसि नित्यम्।\nत्वं शक्तित्रयात्मकः।\nत्वां योगिनो ध्यायन्ति नित्यम्॥',
        hindiMeaning: 'हे गणेश! आप मूलाधार चक्र में नित्य स्थित हैं। आप इच्छा, ज्ञान और क्रिया—तीनों शक्तियों के स्वरूप हैं। योगी आपका नित्य ध्यान करते हैं।',
        englishMeaning: 'You perpetually reside in the Muladhara root chakra. You embody the three primal energies (will, knowledge, action). Yogis meditate upon you continuously.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'मूलाधार भूपुर प्राकार',
        nameEnglish: 'Muladhara Earth Citadel',
        chakraTitle: 'भूपुर एवं विघ्नहर्ता द्वार (4 Cardinal Gates)',
        presidingDeity: 'भगवान विघ्नराज गणेश',
        mudraShakti: 'अङ्कुश मुद्रा (Divine Restraint & Control)',
        yoginiClass: 'मूलाधार शक्ति वर्ग',
        geometryType: '4 Cardinal Gateways with Concentric Ramparts',
        significance: 'समस्त बाहरी विघ्नों, बुरी दृष्टि और नकारात्मक बाधाओं का द्वार पर ही शमन। पृथ्वी तत्व की स्थिरता।'
      },
      {
        index: 2,
        nameSanskrit: 'अष्टविनायक कमल चक्र',
        nameEnglish: 'Ashta-Vinayaka 8-Petal Lotus',
        chakraTitle: 'अष्टदल पद्म (8 Sacred Petals of Wisdom & Intellect)',
        presidingDeity: 'अष्टविनायक (मयूरेश्वर, सिद्धिटेक, बल्लालेश्वर, वरदविनायक, चिंतामणि, गिरिजात्मज, विघ्नेश्वर, महागणपति)',
        mudraShakti: 'पाश मुद्रा (Attraction of Wisdom)',
        yoginiClass: 'ब्राह्मी आदि अष्टशक्तियाँ',
        geometryType: '8 Symmetrical Radial Lotus Petals',
        significance: 'आठों दिशाओं से ऋद्धि-सिद्धि का जागरण तथा बुद्धि और विवेक में प्रखरता।'
      },
      {
        index: 3,
        nameSanskrit: 'गाणपत्य षट्कोण चक्र',
        nameEnglish: 'Ganesh Hexagram (Union of Shiva-Shakti)',
        chakraTitle: 'षट्कोण मण्डल (Intersecting Triangles)',
        presidingDeity: 'गणपति-वल्लभा सामरस्य',
        mudraShakti: 'दन्त मुद्रा (One-Tusk Sacred Seal)',
        yoginiClass: 'ऋद्धि-सिद्धि शक्ति',
        geometryType: 'Hexagram (Two Intersecting Triangles)',
        significance: 'शिव (ऊर्ध्वमुख त्रिकोण) और शक्ति (अधोमुख त्रिकोण) का ऐक्य। समस्त संकल्पों और पुरुषार्थ की अविलंब सिद्धि।'
      },
      {
        index: 4,
        nameSanskrit: 'त्रिकोण पीठिका',
        nameEnglish: 'Sacred Inner Triangle',
        chakraTitle: 'अन्तर्त्रिकोण (The Seat of Desire, Knowledge, Action)',
        presidingDeity: 'माता ऋद्धि व माता सिद्धि',
        mudraShakti: 'मोदक मुद्रा (The Sweetness of Supreme Wisdom)',
        yoginiClass: 'बुद्धि-मेधा शक्ति',
        geometryType: 'Inverted Prime Triangle',
        significance: 'इच्छा, ज्ञान और क्रिया शक्ति की त्रिवेणी। साधक के सभी संशयों का नाश।'
      },
      {
        index: 5,
        nameSanskrit: 'महागणेश बिन्दु व स्वास्तिक',
        nameEnglish: 'Central Ganesha Singularity & Swastika',
        chakraTitle: 'केन्द्रीय बिन्दु एवं "गं" बीज मण्डल',
        presidingDeity: 'महागणपति (परब्रह्म स्वरूप)',
        mudraShakti: 'अभय-वरद मुद्रा',
        yoginiClass: 'परा संवित् शक्ति',
        geometryType: 'Infinitesimal Central Singularity Point',
        significance: 'अखण्ड ओंकार का मूल। जहाँ सभी कार्य निर्विघ्न संपन्न होकर शाश्वत विजय और आनंद प्रदान करते हैं।'
      }
    ],
    jyotish: {
      rulingPlanet: 'केतु (Ketu) व बुध (Mercury)',
      planetSanskrit: 'केतु ग्रह (मोक्ष व विघ्न निवारण)',
      friendlyRashis: ['मेष', 'मिथुन', 'कन्या', 'धनु', 'मकर'],
      friendlyNakshatras: ['अश्विनी', 'मघा', 'मूल'],
      doshaRemedies: [
        {
          doshaName: 'केतु पीड़ा व अज्ञात भय',
          description: 'कार्य बनते-बनते अंतिम क्षण में बिगड़ जाना, मानसिक भ्रम, नसों की दुर्बलता।',
          reliefMechanism: 'गणेश यन्त्र पर दूर्वा चढ़ाकर अथर्वशीर्ष का पाठ करने से केतु के कुप्रभाव अमृत में बदल जाते हैं।'
        }
      ],
      lifeAspects: ['नए उद्यम में सफलता', 'शिक्षा व एकाग्रता', 'विघ्नों का सर्वनाश', 'बुद्धि व वाकपटुता'],
      wearOrInstallDirection: 'मुख्य द्वार के ऊपर (गृह प्रवेश) अथवा पूजा घर में पूर्व दिशा',
      favorableDay: 'बुधवार (Wednesday) अथवा संकष्टी चतुर्थी',
      auspiciousTithi: 'गणेश चतुर्थी, शुक्ल पक्ष चतुर्थी',
      metalPreference: 'ताम्र (Copper) अथवा पीतल (Brass)',
      beejMantra: 'ॐ गं गणपतये नमः॥ / ॐ वक्रतुण्डाय हुम्॥',
      gayatriMantra: 'ॐ एकदन्ताय विद्महे वक्रतुण्डाय धीमहि तन्नो दन्तिः प्रचोदयात्॥',
      japaCount: 108,
      malaType: 'लाल चन्दन माला अथवा रुद्राक्ष माला',
      dhyanaSloka: 'एकदन्तं शूर्पकर्णं गजवक्त्रं महोदरम्। पाशाङ्कुशधरं देवं ध्यायेत् सिद्धिप्रदायकम्॥',
      pratishthaVidhiSummary: [
        '१. सिन्दूर और लाल पुष्प से यन्त्र का पूजन करें।',
        '२. २१ दूर्वा दल अर्पित करें।',
        '३. मोदक या गुड़-चने का भोग लगाएं।',
        '४. गणपति अथर्वशीर्ष का ११ बार पाठ करें।'
      ]
    },
    practicalRemedies: [
      {
        category: 'Career',
        problem: 'नई दुकान, नया घर या नया प्रोजेक्ट शुरू करने में बार-बार अड़चनें आना।',
        remedyProtocol: 'प्रतिष्ठान के मुख्य द्वार पर भीतर की ओर गणेश यन्त्र लगाएं और प्रतिदिन ॐ गं गणपतये नमः बोलकर काम शुरू करें।'
      }
    ]
  },

  mahamrityunjaya_yantra: {
    id: 'mahamrityunjaya_yantra',
    nameSanskrit: 'महामृत्युंजय यन्त्रम् (संजीवनी यन्त्र)',
    nameHindi: 'महामृत्युंजय यन्त्र',
    nameEnglish: 'Maha Mrityunjaya Yantra',
    subTitle: 'The Great Life-Sustaining & Health Restorative Shield',
    presidingDeity: 'भगवान त्र्यम्बक शिव (महाकाल मृत्युंजय)',
    tradition: 'ऋग्वैदिक व यजुर्वेदिक रुद्र परम्परा',
    corePhilosophy: 'काल और मृत्यु पर विजय। अष्टदल और षट्कोण का यह विन्यास देह की संजीवनी ऊर्जा को जागृत कर अकाल मृत्यु से रक्षा करता है।',
    citations: [
      {
        sourceScripture: 'ऋग्वेद',
        chapterOrVerse: 'मण्डल ७, सूक्त ५९, ऋचा १२',
        sanskritSloka: 'त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्।\nउर्वारुकमिव बन्धनान्मृ त्योर्मुक्षीय मामृतात्॥',
        hindiMeaning: 'हम त्रिनेत्रधारी सुगन्धित और पुष्टि बढ़ाने वाले भगवान शिव की पूजा करते हैं। जैसे पका हुआ खरबूजा बेल से स्वतः मुक्त हो जाता है, वैसे ही हम मृत्यु के पाश से मुक्त हों, किन्तु अमृत से विमुख न हों।',
        englishMeaning: 'We venerate the Three-Eyed Lord Shiva, fragrant and nourisher of all. As a ripe gourd is effortlessly liberated from its vine, may we be released from mortality, never from immortality.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'अभेद्य रक्षा भूपुर',
        nameEnglish: 'Invincible Rampart of Protection',
        chakraTitle: 'भूपुर एवं चार शिव द्वार',
        presidingDeity: 'भगवान मृत्युंजय शिव',
        mudraShakti: 'अभय-मुद्रा (Fearlessness Over Mortality)',
        yoginiClass: 'रुद्र-गण शक्ति',
        geometryType: '4 Cardinal Gateways with Concentric Ramparts',
        significance: 'अकाल मृत्यु, महामारी, दुर्घटना व भयानक अनिष्टों से अभेद्य सुरक्षा कवच।'
      },
      {
        index: 2,
        nameSanskrit: 'द्वात्रिंशत् दल कमल चक्र',
        nameEnglish: '32-Petal Sanjeevani Lotus',
        chakraTitle: 'द्वात्रिंशत् दल संजीवनी पद्म (32 Petals)',
        presidingDeity: 'द्वात्रिंशत् अमृत कलाएँ',
        mudraShakti: 'अमृत-वर्षिणी मुद्रा',
        yoginiClass: 'संजीवनी योगिनी',
        geometryType: '32 Symmetrical Radial Petals',
        significance: 'मानव देह के ३२ प्रमुख मर्म स्थानों का शोधन। विष, व्याधि और जीर्ण रोगों का शमन।'
      },
      {
        index: 3,
        nameSanskrit: 'षोडश दल अमृत पद्म',
        nameEnglish: '16-Petal Nectar Lotus',
        chakraTitle: 'षोडश दल कमल (16 Lunar Nectars)',
        presidingDeity: 'षोडश चन्द्रकला शिव',
        mudraShakti: 'चन्द्रकला मुद्रा',
        yoginiClass: 'अमृत-प्रभा योगिनी',
        geometryType: '16 Symmetrical Lotus Petals',
        significance: 'चन्द्रमा की १६ अमृतमयी कलाओं का संचार। जीवनी शक्ति (Ojas) और रोग-प्रतिरोधक क्षमता (Immunity) की अभूतपूर्व वृद्धि।'
      },
      {
        index: 4,
        nameSanskrit: 'अष्टदल महाशिव पद्म',
        nameEnglish: 'Ashta-Murti Shiva 8-Petal Lotus',
        chakraTitle: 'अष्टदल पद्म (8 Petals of Cosmic Shiva)',
        presidingDeity: 'अष्टमूर्ति शिव (भव, शर्व, ईशान, पशुपति, उग्र, रुद्र, भीम, महादेव)',
        mudraShakti: 'त्रिशूल मुद्रा',
        yoginiClass: 'रुद्राणी शक्ति',
        geometryType: '8 Symmetrical Radial Petals',
        significance: 'आठों दिशाओं के स्वामियों और पंचमहाभूत+सूर्य+चन्द्र+आत्मा के दोषों का निवारण।'
      },
      {
        index: 5,
        nameSanskrit: 'कालजयी षट्कोण चक्र',
        nameEnglish: 'Hexagram of Immortality (Time Transcended)',
        chakraTitle: 'षट्कोण मण्डल (Intersecting Triangles of Eternity)',
        presidingDeity: 'सदाशिव-महागौरी सामरस्य',
        mudraShakti: 'मृग-मुद्रा',
        yoginiClass: 'चिदग्नि शक्ति',
        geometryType: 'Hexagram (Two Intersecting Triangles)',
        significance: 'काल और समय के बंधनों का अतिक्रमण। मृत्यु के भय से मुक्ति और दीर्घायु की प्राप्ति।'
      },
      {
        index: 6,
        nameSanskrit: 'केन्द्रीय त्र्यम्बक बिन्दु',
        nameEnglish: 'Central Immortal Tryambaka Singularity',
        chakraTitle: 'केन्द्रीय बिन्दु एवं संजीवनी "हौं जूं सः" बीज',
        presidingDeity: 'भगवान त्र्यम्बकेश्वर (अमृतलिंग)',
        mudraShakti: 'महामृत्युंजय मुद्रा',
        yoginiClass: 'परम कैवल्य शक्ति',
        geometryType: 'Infinitesimal Central Singularity Point',
        significance: 'अमृत का अक्षय महाकुंभ। जहां जीव का शिव में विलय होकर मोक्ष और पूर्ण आरोग्य प्राप्त होता है।'
      }
    ],
    jyotish: {
      rulingPlanet: 'शनि (Saturn), राहु व मारक भाव अधिपति',
      planetSanskrit: 'शनि-राहु शांति व आयु रक्षा',
      friendlyRashis: ['मकर (Capricorn)', 'कुम्भ (Aquarius)', 'वृश्चिक (Scorpio)'],
      friendlyNakshatras: ['आर्द्रा', 'अनुराधा', 'शतभिषा'],
      doshaRemedies: [
        {
          doshaName: 'मारक ग्रह दशा व गंभीर रोग',
          description: 'कुंडली में दूसरे या सातवें मारक भाव की दशा, गंभीर लाइलाज बीमारियाँ, दुर्घटना का भय।',
          reliefMechanism: 'ताम्र महामृत्युंजय यन्त्र के अभिमंत्रित जल का सेवन व अभिषेक करने से प्राण शक्ति पुनः सुदृढ़ होती है।'
        }
      ],
      lifeAspects: ['अकाल मृत्यु से अभय', 'दीर्घायु व आरोग्यता', 'भय व अवसाद से मुक्ति', 'भूत-प्रेत बाधा निवारण'],
      wearOrInstallDirection: 'उत्तर दिशा (North) अथवा पूर्व दिशा (East)',
      favorableDay: 'सोमवार (Monday), मासिक शिवरात्रि, अथवा महाशिवरात्रि',
      auspiciousTithi: 'कृष्ण पक्ष चतुर्दशी, सोमवार, त्रयोदशी',
      metalPreference: 'ताम्र (Copper) अथवा पंचधातु',
      beejMantra: 'ॐ हौं जूं सः ॐ भूर्भुवः स्वः ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् उर्वारुकमिव बन्धनान्मृत्यौर्मुक्षीय मामृतात् ॐ स्वः भुवः भूः ॐ सः जूं हौं ॐ॥',
      gayatriMantra: 'ॐ तत्पुरुषाय विद्महे महादेवाय धीमहि तन्नो रुद्रः प्रचोदयात्॥',
      japaCount: 108,
      malaType: 'रुद्राक्ष माला (Rudraksha)',
      dhyanaSloka: 'चन्द्रार्काग्निविलोचनं स्मितमुखं पद्मद्वयान्तःस्थितं मुद्रारत्नकुलेशमभयवरदं शम्भुं नमामि प्रभुम्।',
      pratishthaVidhiSummary: [
        '१. यन्त्र का कच्चे दूध व गंगाजल से रुद्राभिषेक करें।',
        '२. भस्म, श्वेत चन्दन और बिल्वपत्र अर्पित करें।',
        '३. महामृत्युंजय मंत्र का १०८ बार जाप करें।'
      ]
    },
    practicalRemedies: [
      {
        category: 'Health',
        problem: 'परिवार का कोई सदस्य लंबे समय से आईसीयू या गंभीर बीमारी से ग्रसित हो।',
        remedyProtocol: 'रोगी के सिरहाने महामृत्युंजय यन्त्र स्थापित करें और प्रतिदिन महामृत्युंजय मंत्र का संपुटित पाठ करें।'
      }
    ]
  },

  vastu_yantra: {
    id: 'vastu_yantra',
    nameSanskrit: 'श्री वास्तु दोष निवारण यन्त्रम्',
    nameHindi: 'वास्तु यन्त्र',
    nameEnglish: 'Vastu Dosh Nivarana Yantra',
    subTitle: 'The Universal Architectural Energy Harmonizer',
    presidingDeity: 'वास्तु पुरुष (भूमण्डल अधिष्ठाता)',
    tradition: 'मयमतम् व समराङ्गण सूत्रधार',
    corePhilosophy: 'पंचमहाभूतों (पृथ्वी, जल, अग्नि, वायु, आकाश) का संतुलन। भवन निर्माण के दोषों को बिना किसी तोड़-फोड़ के निष्प्रभावी करना।',
    citations: [
      {
        sourceScripture: 'मत्स्य पुराण',
        chapterOrVerse: 'वास्तु प्रकरण',
        sanskritSloka: 'नमस्ते वास्तु पुरुषाय भूशय्याभिरत प्रभो।\nमद्गृहं धनधान्यादि समृद्धं कुरु सर्वदा॥',
        hindiMeaning: 'हे भूमि पर शयन करने वाले वास्तु पुरुष! आपको नमस्कार है। आप कृपा करके मेरे घर को धन, धान्य और समस्त सुख-समृद्धि से परिपूर्ण करें।',
        englishMeaning: 'Salutations to you, O Vastu Purusha, who reclines upon the Earth. Bless our dwelling with perpetual wealth, food grains, and holistic prosperity.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'दिक्पाल भूपुर प्राकार',
        nameEnglish: '16-Bastion Earth Rampart of Spatial Balance',
        chakraTitle: 'षोडश कोष्ठक भूपुर (Outer Spatial Perimeter)',
        presidingDeity: 'अष्टदिक्पाल (इन्द्र, अग्नि, यम, निर्ऋति, वरुण, वायु, कुबेर, ईशान)',
        mudraShakti: 'वास्तु-रक्षा मुद्रा',
        yoginiClass: 'दिक्पाल शक्ति',
        geometryType: 'Outer 16-Segmented Rampart with 4 Directional Gates',
        significance: 'आठों दिशाओं और उनके उप-कोणों के वास्तु दोषों का निष्प्रभावीकरण। भवन के चुंबकीय क्षेत्र का सात्विक स्थिरीकरण।'
      },
      {
        index: 2,
        nameSanskrit: 'पंचमहाभूत मण्डल',
        nameEnglish: 'Five Cosmic Elements Harmonizer',
        chakraTitle: 'पंचमहाभूत चक्र (Earth, Water, Fire, Air, Space)',
        presidingDeity: 'पंचभूत अधिष्ठाता देव',
        mudraShakti: 'पंचतत्व मुद्रा',
        yoginiClass: 'तत्व-योगिनी',
        geometryType: 'Concentric Elemental Rings and Triangles',
        significance: 'ईशान में जल, आग्नेय में अग्नि, नैऋत्य में पृथ्वी, वायव्य में वायु और मध्य में आकाश तत्व का सम्यक संतुलन।'
      },
      {
        index: 3,
        nameSanskrit: 'अष्टकमल वास्तु पीठ',
        nameEnglish: '8-Petal Vastu Mandala',
        chakraTitle: 'अष्टदल पद्म (8 Petals of Holistic Harmony)',
        presidingDeity: 'वास्तु शक्ति व कुलदेवता',
        mudraShakti: 'शान्ति-पुष्टि मुद्रा',
        yoginiClass: 'क्षेत्रपाल शक्ति',
        geometryType: '8 Symmetrical Radial Lotus Petals',
        significance: 'भवन के निवासियों के स्वास्थ्य, पारिवारिक सौहार्द्र, और सुख-शांति की अभिवृद्धि।'
      },
      {
        index: 4,
        nameSanskrit: 'ब्रह्मस्थान केन्द्र नाभि',
        nameEnglish: 'Brahmasthan Nucleus of Vastu Purusha',
        chakraTitle: 'मध्य बिन्दु एवं ब्रह्मस्थान नाभि',
        presidingDeity: 'भगवान वास्तु पुरुष (भूमण्डल शयन)',
        mudraShakti: 'अभय-वरद वास्तु मुद्रा',
        yoginiClass: 'परमब्रह्म शक्ति',
        geometryType: 'Central Singularity Point',
        significance: 'सम्पूर्ण भवन का ऊर्जा-हृदय। यहाँ वास्तु पुरुष का साक्षात् आशीर्वाद प्रवाहित होकर दरिद्रता, गृह-क्लेश और आकस्मिक संकटों का शमन करता है।'
      }
    ],
    jyotish: {
      rulingPlanet: 'समस्त दश दिशाएं व नवग्रह',
      planetSanskrit: 'दिक्पाल व वास्तु अधिपति',
      friendlyRashis: ['सभी १२ राशियां'],
      friendlyNakshatras: ['सभी २७ नक्षत्र'],
      doshaRemedies: [
        {
          doshaName: 'भवन के दिशा दोष (Vastu Faults)',
          description: 'आग्नेय कोण में पानी, ईशान में शौचालय, नैऋत्य में मुख्य द्वार या ब्रह्मस्थान में भारी निर्माण।',
          reliefMechanism: 'वास्तु यन्त्र का ऊर्जा चक्र दूषित चुंबकीय तरंगों को निष्प्रभावी कर सात्विक ऊर्जा का प्रवाह करता है।'
        }
      ],
      lifeAspects: ['गृह क्लेश से मुक्ति', 'व्यापारिक स्थल की सुरक्षा', 'पारिवारिक सौहार्द्र', 'अशांति व अकाल दुर्घटना निवारण'],
      wearOrInstallDirection: 'ईशान कोण (North-East) या बैठक कक्ष (Living Room) की पूर्व दीवार पर',
      favorableDay: 'मंगलवार या शनिवार',
      auspiciousTithi: 'गृह प्रवेश, वास्तु शांति, अथवा शुक्ल पक्ष पंचमी',
      metalPreference: 'ताम्र (Copper) अथवा पीतल (Brass)',
      beejMantra: 'ॐ वास्तुपुरुषाय नमः॥ / ॐ आं ह्रीं क्रौं नमः॥',
      gayatriMantra: 'ॐ वास्तुपुरुषाय विद्महे भूमिपुत्राय धीमहि तन्नो वास्तुः प्रचोदयात्॥',
      japaCount: 108,
      malaType: 'रुद्राक्ष माला अथवा तुलसी माला',
      dhyanaSloka: 'वास्तुपुरुष नमस्तेऽस्तु भूशय्याभिरत प्रभो। अनुग्रहं कुरु मयि गृहं समृद्धं कुरु सर्वदा॥',
      pratishthaVidhiSummary: [
        '१. यन्त्र को गंगाजल व गोमूत्र से पवित्र करें।',
        '२. पीले चन्दन व अक्षत से तिलक करें।',
        '३. वास्तु पुरुष मंत्र का १०८ बार जाप करें।'
      ]
    },
    practicalRemedies: [
      {
        category: 'Vastu',
        problem: 'बिना तोड़-फोड़ के घर के बड़े वास्तुदोषों को शांत करना।',
        remedyProtocol: 'घर के ब्रह्मस्थान या मुख्य हॉल की पूर्व दीवार पर लाल वस्त्र पर स्थापित करें।'
      }
    ]
  }
};
