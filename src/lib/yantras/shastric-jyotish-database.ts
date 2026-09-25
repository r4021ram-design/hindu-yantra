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
  taxonomyCategory?: string;
  lineageAttribution?: string;
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
    taxonomyCategory: 'supreme_sri_chakra',
    lineageAttribution: 'श्रीविद्या साम्बव तंत्र (कादि व हादि मत — सौन्दर्यलहरी एवं तन्त्रराज तन्त्र)',
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
    taxonomyCategory: 'lakshmi',
    lineageAttribution: 'यक्ष तन्त्र एवं मन्त्र महोदधि परम्परा',
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
    taxonomyCategory: 'lakshmi',
    lineageAttribution: 'ऋग्वेदोक्त श्रीसूक्त एवं लक्ष्मी तंत्र आगम',
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
    taxonomyCategory: 'ganesha',
    lineageAttribution: 'शारदा तिलक एवं गाणपत्य आगम परम्परा',
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
    taxonomyCategory: 'shiva',
    lineageAttribution: 'रुद्रयामल, नेत्र तन्त्र एवं मार्कण्डेय पुराण परम्परा',
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
    taxonomyCategory: 'vastu',
    lineageAttribution: 'बृहत्संहिता एवं मयमतम् वास्तुशास्त्र आगम',
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
  },

  kali_yantra: {
    id: 'kali_yantra',
    taxonomyCategory: 'dashamahavidya',
    lineageAttribution: 'काली कुल आगम — महानिर्वाण तन्त्र एवं कालिका पुराण',
    nameSanskrit: 'श्री महाकाली यन्त्रम्',
    nameHindi: 'काली यन्त्र (प्रथम महाविद्या)',
    nameEnglish: 'Mahakali Yantra (Transcendence of Time & Evil)',
    subTitle: 'The Primordial Matrix of Cosmic Dissolution, Fearlessness & Moksha',
    presidingDeity: 'भगवती आद्यकाली (दक्षिणा काली)',
    tradition: 'काली कुल शाक्त परम्परा',
    corePhilosophy: 'काल और समय का अतिक्रमण। इसके ५ अधोमुख सम्बद्ध त्रिकोण (पंचकोण) पंचमहाभूतों और पंचकोशों के संहार व परम शिव में लय के प्रतीक हैं।',
    citations: [
      {
        sourceScripture: 'महानिर्वाण तन्त्रम्',
        chapterOrVerse: 'पञ्चम पटल, श्लोक ४०-४२',
        sanskritSloka: 'पञ्चकोणं समारुह्य कालीयन्त्रं समर्चयेत्।\nत्रिकोणं त्रिवलयं पद्ममष्टपत्रं सुपूजितम्॥',
        hindiMeaning: 'पाँच अधोमुख त्रिकोणों से युक्त, त्रिवलय और अष्टदल कमल से परिवेष्टित पवित्र काली यन्त्र का जो साधक अर्चन करता है, वह जन्म-मरण के भय से मुक्त हो जाता है।',
        englishMeaning: 'Worship the sacred Kali Yantra inscribed with five downward triangles, encircled by three girdles, an eight-petal lotus, and the sacred earth citadel for absolute spiritual victory.'
      },
      {
        sourceScripture: 'कर्पूरादि स्तोत्रम्',
        chapterOrVerse: 'श्लोक १',
        sanskritSloka: 'क्रीं क्रीं क्रीं हूं हूं ह्रीं ह्रीं दक्षिणे कालिके।\nक्रीं क्रीं क्रीं हूं हूं ह्रीं ह्रीं स्वाहा॥',
        hindiMeaning: 'हे दक्षिणा कालिके! एकाक्षरी महाबीज क्रीं, हूं और ह्रीं से युक्त आपका स्वरूप समस्त तामसिक क्लेशों को दग्ध करने वाला है।',
        englishMeaning: 'Salutations to Dakshina Kalika, adorned with the mystic monosyllables Kring, Hoom, and Hreem, incinerating all negative astral afflictions.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'काल भूपुर प्राकार',
        nameEnglish: 'Earth Citadel of Time & 4 Portals',
        chakraTitle: 'भूपुर एवं काल द्वार (Outer Earth Rampart)',
        presidingDeity: 'आद्या काली',
        mudraShakti: 'खड्ग-मुण्ड मुद्रा (Severance of Ego)',
        yoginiClass: 'प्रकट भैरवी वर्ग',
        geometryType: '4 Cardinal Gateways with Concentric Ramparts',
        significance: 'समस्त बाहरी तामसिक तरंगों, भूत-प्रेत व शत्रु बाधाओं का द्वार पर ही शमन। पृथ्वी तत्व की सुदृढ़ सुरक्षा।'
      },
      {
        index: 2,
        nameSanskrit: 'त्रिवलय मण्डल',
        nameEnglish: 'Three Rings of Cosmic Cycles',
        chakraTitle: 'त्रिवलय (Creation, Preservation, Dissolution)',
        presidingDeity: 'त्रिगुणातीत शक्ति',
        mudraShakti: 'त्रिशूल मुद्रा',
        yoginiClass: 'काल योगिनी',
        geometryType: 'Concentric Boundary Circles',
        significance: 'सत्त्व, रज और तम तीनों गुणों का सम्यक संतुलन।'
      },
      {
        index: 3,
        nameSanskrit: 'अष्टदल श्मशान पद्म',
        nameEnglish: 'Ashta-Dala Lotus of 8 Divine Shaktis',
        chakraTitle: 'अष्टदल पद्म (8 Sacred Petals)',
        presidingDeity: 'अष्ट भैरवी (ब्राह्मी, माहेश्वरी, कौमारी, वैष्णवी, वाराही, माहेन्द्री, चामुण्डा, चण्डिका)',
        mudraShakti: 'अभय-वरद मुद्रा',
        yoginiClass: 'अष्टमातृका शक्ति',
        geometryType: '8 Symmetrical Radial Lotus Petals with Central Spines',
        significance: 'आठों दिशाओं के भय का नाश और अष्ट सिद्धियों का प्रकटीकरण।'
      },
      {
        index: 4,
        nameSanskrit: 'पञ्चकोण शक्ति चक्र',
        nameEnglish: 'Five Concentric Inverted Shakti Triangles',
        chakraTitle: 'पञ्चकोण (5 Inverted Triangles of Dissolution)',
        presidingDeity: 'पञ्चतत्व विमर्शिनी महाकाली',
        mudraShakti: 'योनि मुद्रा',
        yoginiClass: 'अतिरहस्य योगिनी',
        geometryType: '5 Concentric Downward-Facing Triangles',
        significance: 'अन्नमय, प्राणमय, मनोमय, विज्ञानमय और आनन्दमय—इन पाँचों कोशों के बन्धन काटकर आत्म-साक्षात्कार कराना।'
      },
      {
        index: 5,
        nameSanskrit: 'महाबिन्दु एवं क्रीं बीज',
        nameEnglish: 'Supreme Singularity & Kring Seed',
        chakraTitle: 'केन्द्रीय बिन्दु एवं क्रीं महाबीज',
        presidingDeity: 'आदि पराशक्ति दक्षिणा काली',
        mudraShakti: 'महामुद्रा',
        yoginiClass: 'कैवल्य पराशक्ति',
        geometryType: 'Infinitesimal Central Singularity Point',
        significance: 'सृष्टि का आद्य स्रोत। साधक को समय और मृत्यु से परे अमरत्व प्रदान करने वाला बिन्दु।'
      }
    ],
    jyotish: {
      rulingPlanet: 'शनि (Saturn) व राहु (Rahu)',
      planetSanskrit: 'शनि-राहु महादोष निवारण',
      friendlyRashis: ['मकर', 'कुम्भ', 'वृश्चिक', 'मेष'],
      friendlyNakshatras: ['आर्द्रा', 'स्वाति', 'शतभिषा', 'भरणी'],
      doshaRemedies: [
        {
          doshaName: 'शनि की साढ़ेसाती व राहु की महादशा',
          description: 'अकारण शत्रुता, व्यापार में आकस्मिक पतन, नसों व जोड़ों में असहनीय पीड़ा, डिप्रेशन।',
          reliefMechanism: 'काली यन्त्र के समक्ष तिल के तेल का दीपक जलाकर महाकाली के मन्त्र का जाप करने से शनि-राहु का कुप्रभाव समाप्त होता है।'
        }
      ],
      lifeAspects: ['अकाल मृत्यु से रक्षा', 'शत्रु-स्तम्भन', 'अध्यात्म में तीव्र प्रगति', 'अज्ञात भय का नाश'],
      wearOrInstallDirection: 'दक्षिण (South) अथवा उत्तर-पूर्व (North-East)',
      favorableDay: 'शनिवार (Saturday) अथवा मंगलवार (Tuesday)',
      auspiciousTithi: 'अमावस्या, कालरात्रि, नरक चतुर्दशी',
      metalPreference: 'लोहा (Iron), तांबा (Copper) अथवा अष्टधातु',
      beejMantra: 'ॐ क्रीं कालिकायै नमः॥ / ॐ क्रीं क्रीं क्रीं दक्षिणे कालिके क्रीं क्रीं क्रीं स्वाहा॥',
      gayatriMantra: 'ॐ कालिकायै च विद्महे श्मशानवासिन्यै धीमहि तन्नो घोरा प्रचोदयात्॥',
      japaCount: 108,
      malaType: 'रुद्राक्ष माला अथवा काली हकीक माला',
      dhyanaSloka: 'शवारूढां महाभीमां घोरदंष्ट्रां हसन्मुखीम्। चतुर्भुजां खड्गमुण्डवराभयकरां भजे॥',
      pratishthaVidhiSummary: [
        '१. काले या लाल आसन पर यन्त्र की प्रतिष्ठा करें।',
        '२. गुड़हल के लाल पुष्प और कस्तूरी-चन्दन से अर्चन करें।',
        '३. कपूर से आरती कर १०८ बार क्रीं मन्त्र का जप करें।'
      ]
    },
    practicalRemedies: [
      {
        category: 'Protection',
        problem: 'विरोधी पक्ष द्वारा बार-बार कानूनी मुकदमों और मानसिक दबाव से प्रताड़ित होना।',
        remedyProtocol: 'प्रतिदिन संध्या समय काली यन्त्र के समक्ष सरसों के तेल का दीपक प्रज्वलित कर १०८ बार ॐ क्रीं कालिकायै नमः का जप करें।'
      }
    ]
  },

  tara_yantra: {
    id: 'tara_yantra',
    taxonomyCategory: 'dashamahavidya',
    lineageAttribution: 'तारा कुल आगम — तारा रहस्य एवं बृहन्नील तन्त्र',
    nameSanskrit: 'श्रीमदुग्रतारा यन्त्रम्',
    nameHindi: 'तारा यन्त्र (द्वितीय महाविद्या)',
    nameEnglish: 'Tara Yantra (The Cosmic Deliverer from All Perils)',
    subTitle: 'The Goddess of Supreme Deliverance, Transcendental Wisdom & Speech',
    presidingDeity: 'उग्रतारा / नीलसरस्वती / एकजटा',
    tradition: 'तारा कुल आगम परम्परा',
    corePhilosophy: 'भवसागर के महासंकटों से उबारने वाली शक्ति। अधोमुख त्रिकोण और अष्टदल कमल का यह विन्यास बुद्धि को अगाध मेधा और ज्ञान प्रदान करता है।',
    citations: [
      {
        sourceScripture: 'बृहन्नील तन्त्रम्',
        chapterOrVerse: 'षष्ठ पटल',
        sanskritSloka: 'तारेति तारयत्येषा संसारात्तारिणी स्मृता।\nअज्ञानध्वान्तदीपाभा मोक्षदा सर्वमङ्गला॥',
        hindiMeaning: 'संसार के जन्म-मरण रूपी महासागर से तारने के कारण इन्हें तारिणी या तारा कहा जाता है। यह अज्ञान के अंधकार में दीपक समान प्रकाशमान हैं।',
        englishMeaning: 'She is called Tara because she effortlessly delivers seekers from the turbulent ocean of cosmic delusion, granting wisdom and liberation.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'तारक भूपुर प्राकार',
        nameEnglish: 'Citadel of Deliverance & 4 Gateways',
        chakraTitle: 'भूपुर एवं चार तारक द्वार',
        presidingDeity: 'भगवती उग्रतारा',
        mudraShakti: 'तारक मुद्रा',
        yoginiClass: 'प्रकट योगिनी',
        geometryType: '4 Cardinal Gateways with Concentric Ramparts',
        significance: 'समस्त आर्थिक संकटों और संकटमय परिस्थितियों से तुरंत मुक्ति।'
      },
      {
        index: 2,
        nameSanskrit: 'अष्टदल नीलसरस्वती पद्म',
        nameEnglish: '8-Petal Lotus of 8 Taras',
        chakraTitle: 'अष्टदल पद्म (Tara, Ugra, Mahogra, Vajra, Kali, Saraswati, Kameshvari, Chamunda)',
        presidingDeity: 'अष्ट तारा देवियाँ',
        mudraShakti: 'खड्ग-नीलोत्पल मुद्रा',
        yoginiClass: 'गुप्त योगिनी',
        geometryType: '8 Symmetrical Radial Lotus Petals with Spines',
        significance: 'वाणी में आकर्षण, वाक्-सिद्धि और जटिल विद्याओं में निपुणता।'
      },
      {
        index: 3,
        nameSanskrit: 'तारिणी त्रिकोण मण्डल',
        nameEnglish: 'Sacred Inverted Tara Shakti Triangle',
        chakraTitle: 'अधोमुख त्रिकोण (Downward Triangle of Transcendent Wisdom)',
        presidingDeity: 'एकजटा शक्ति',
        mudraShakti: 'कर्त्री मुद्रा',
        yoginiClass: 'रहस्य योगिनी',
        geometryType: 'Equilateral Inverted Triangle',
        significance: 'प्रज्ञा और मेधा का चरम जागरण। कठिन से कठिन परीक्षा व शास्त्रार्थ में विजय।'
      },
      {
        index: 4,
        nameSanskrit: 'केन्द्रीय बिन्दु एवं स्त्रीं बीज',
        nameEnglish: 'Supreme Nucleus & Streem Seed',
        chakraTitle: 'मध्य बिन्दु एवं "स्त्रीं" बीज',
        presidingDeity: 'परम तारिणी उग्रतारा',
        mudraShakti: 'मोक्ष मुद्रा',
        yoginiClass: 'परा संवित् शक्ति',
        geometryType: 'Infinitesimal Central Singularity Point',
        significance: 'परम ज्ञान का अक्षय स्रोत।'
      }
    ],
    jyotish: {
      rulingPlanet: 'बृहस्पति (Jupiter) व राहु',
      planetSanskrit: 'गुरु-राहु शांति व विद्या-सिद्धि',
      friendlyRashis: ['धनु', 'मीन', 'मिथुन', 'कन्या'],
      friendlyNakshatras: ['पुनर्वसु', 'विशाखा', 'पूर्वाभाद्रपद'],
      doshaRemedies: [
        {
          doshaName: 'गुरु चांडाल योग व ज्ञान में अवरोध',
          description: 'शिक्षा में एकाग्रता न बनना, निर्णय लेने में भ्रम, वाणी में दोष।',
          reliefMechanism: 'तारा यन्त्र के समक्ष ॐ ह्रीं स्त्रीं हुं फट् का नित्य जाप बुद्धि को कुशाग्र करता है।'
        }
      ],
      lifeAspects: ['उच्च विद्या व शोध', 'आर्थिक दरिद्रता से मुक्ति', 'वाक्पटुता', 'शत्रु स्तम्भन'],
      wearOrInstallDirection: 'उत्तर (North) अथवा पूर्व (East)',
      favorableDay: 'गुरुवार (Thursday)',
      auspiciousTithi: 'शुक्ल पक्ष अष्टमी, चैत्र शुक्ल नवमी (तारा जयंती)',
      metalPreference: 'चांदी (Silver) अथवा अष्टधातु',
      beejMantra: 'ॐ ह्रीं स्त्रीं हुं फट्॥',
      gayatriMantra: 'ॐ तारिण्यै च विद्महे महोग्रायै धीमहि तन्नो देवी प्रचोदयात्॥',
      japaCount: 108,
      malaType: 'नीले स्फटिक या रुद्राक्ष माला',
      dhyanaSloka: 'प्रत्यालीढपदां घोरां मुण्डमालाविभूषिताम्। खर्व्वां लम्बोदरीं भीमां व्याघ्रचर्मावृतां कटौ॥',
      pratishthaVidhiSummary: [
        '१. नीले वस्त्र पर यन्त्र स्थापित करें।',
        '२. नीले अपराजिता पुष्प अर्पित करें।',
        '३. तारा कवच का पाठ करें।'
      ]
    },
    practicalRemedies: [
      {
        category: 'Spiritual',
        problem: 'साधना में भटकाव और जीवन में दिशाहीनता का अनुभव होना।',
        remedyProtocol: 'प्रातःकाल पूर्व दिशा की ओर मुख कर तारा यन्त्र के समक्ष ॐ ह्रीं स्त्रीं हुं फट् का १०८ बार जाप करें।'
      }
    ]
  },

  tripura_sundari_yantra: {
    id: 'tripura_sundari_yantra',
    taxonomyCategory: 'dashamahavidya',
    lineageAttribution: 'श्रीकुल कादि मत — तन्त्रराज तन्त्र एवं नित्याषोडशिकार्णव',
    nameSanskrit: 'श्रीत्रिपुरसुन्दरी (षोडशी) यन्त्रम्',
    nameHindi: 'त्रिपुरसुन्दरी यन्त्र (तृतीय महाविद्या)',
    nameEnglish: 'Tripura Sundari Yantra (The 16-Rayed Empress of Divine Beauty)',
    subTitle: 'The Supreme Sovereign of Beauty, Auspiciousness & Sri-Vidya',
    presidingDeity: 'ललिता त्रिपुरसुन्दरी (षोडशी राजराजेश्वरी)',
    tradition: 'श्रीकुल कादि व हादि परम्परा',
    corePhilosophy: '१६ कलाओं से परिपूर्ण ब्रह्म-चेतना का साक्षात् विग्रह। यह षोडशदल, अष्टदल और मूल त्रिकोण के संयोग से त्रैलोक्य का परम ऐश्वर्य प्रदान करता है।',
    citations: [
      {
        sourceScripture: 'तन्त्रराज तन्त्रम्',
        chapterOrVerse: 'षोडश पटल',
        sanskritSloka: 'षोडशारं महाचक्रं त्रैलोक्यविजयावहम्।\nबिन्दुत्रिकोणसंयुक्तं सौन्दर्यस्याकरं परम्॥',
        hindiMeaning: 'षोडशदल, अष्टदल, त्रिकोण और बिन्दु से युक्त त्रिपुरसुन्दरी का यह महाचक्र त्रैलोक्य में विजय और परम सौन्दर्य-ऐश्वर्य का भंडार है।',
        englishMeaning: 'Enclosing the sixteen petals, eight petals, central triangle, and bindu, this supreme mandala of Tripura Sundari bestows mastery over all worlds and unceasing elegance.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'त्रैलोक्य संक्षोभण भूपुर',
        nameEnglish: 'Citadel of Three Worlds & 4 Portals',
        chakraTitle: 'भूपुर (Outer 3-Lined Rampart)',
        presidingDeity: 'त्रिपुरा देवी',
        mudraShakti: 'संक्षोभिणी मुद्रा',
        yoginiClass: 'प्रकट योगिनी',
        geometryType: 'Concentric Citadel with 4 Cardinal Gateways',
        significance: 'समस्त सांसारिक विकर्षणों से साधक की रक्षा।'
      },
      {
        index: 2,
        nameSanskrit: 'षोडशदल चन्द्रकला पद्म',
        nameEnglish: '16-Petal Lotus of 16 Desires & Moon Kalas',
        chakraTitle: 'षोडशदल पद्म (16 Divine Petals)',
        presidingDeity: 'षोडश नित्या देवियाँ',
        mudraShakti: 'विद्राविणी मुद्रा',
        yoginiClass: 'गुप्त योगिनी',
        geometryType: '16 Symmetrical Radial Lotus Petals with Spines',
        significance: 'षोडश कलाओं का जागरण और चित्त की पूर्ण तृप्ति।'
      },
      {
        index: 3,
        nameSanskrit: 'अष्टदल अनङ्ग पद्म',
        nameEnglish: '8-Petal Lotus of Inner Bliss',
        chakraTitle: 'अष्टदल पद्म (8 Sacred Petals)',
        presidingDeity: 'अष्ट अनङ्ग कुसुम आदि शक्तियाँ',
        mudraShakti: 'आकर्षणी मुद्रा',
        yoginiClass: 'गुप्ततर योगिनी',
        geometryType: '8 Symmetrical Radial Lotus Petals',
        significance: 'इन्द्रियों का दिव्यीकरण व सात्विक आकर्षण।'
      },
      {
        index: 4,
        nameSanskrit: 'कामकला मूल त्रिकोण',
        nameEnglish: 'Sacred Root Triangle of Desire, Knowledge, Action',
        chakraTitle: 'मूल त्रिकोण (Inverted Triangle with Kamakala Triad)',
        presidingDeity: 'कामेrawari, वज्रेश्वरी, भगमालिनी',
        mudraShakti: 'योनि मुद्रा',
        yoginiClass: 'अतिरहस्य योगिनी',
        geometryType: 'Inverted Prime Triangle with 3 Peripheral Bindus',
        significance: 'प्रकाश, विमर्श और सामरस्य का मिलन।'
      },
      {
        index: 5,
        nameSanskrit: 'महाबिन्दु एवं ह्रीं-श्रीं बीज',
        nameEnglish: 'Supreme Singularity & Panchadashi Nucleus',
        chakraTitle: 'केन्द्रीय बिन्दु एवं कामकला बीज',
        presidingDeity: 'महात्रिपुरसुन्दरी पराभट्टारिका',
        mudraShakti: 'सर्वखेचरी मुद्रा',
        yoginiClass: 'परा परातिरहस्य शक्ति',
        geometryType: 'Central Singularity Point',
        significance: 'अखण्ड आनन्द और मोक्ष की पराकाष्ठा।'
      }
    ],
    jyotish: {
      rulingPlanet: 'बुध (Mercury) व शुक्र (Venus)',
      planetSanskrit: 'बुध-शुक्र राजयोग कारक',
      friendlyRashis: ['वृषभ', 'तुला', 'मिथुन', 'कन्या'],
      friendlyNakshatras: ['रोहिणी', 'चित्रा', 'रेवती'],
      doshaRemedies: [
        {
          doshaName: 'शुक्र व बुध की निर्बलता',
          description: 'वैवाहिक जीवन में आकर्षण का अभाव, त्वचा रोग, बौद्धिक मन्दता।',
          reliefMechanism: 'षोडशी यन्त्र की पूजा से रूप, लावण्य, बुद्धि और आकर्षण में अभूतपूर्व वृद्धि होती है।'
        }
      ],
      lifeAspects: ['अखण्ड सौभाग्य', 'राजकीय सम्मान', 'सौन्दर्य व व्यक्तित्व निखार', 'आध्यात्मिक पूर्णता'],
      wearOrInstallDirection: 'उत्तर-पूर्व (North-East)',
      favorableDay: 'शुक्रवार (Friday)',
      auspiciousTithi: 'पूर्णिमा, ललिता पंचमी',
      metalPreference: 'स्वर्ण (Gold), चांदी (Silver) अथवा ताम्र',
      beejMantra: 'ॐ ऐं ह्रीं श्रीं त्रिपुरसुन्दर्यै नमः॥ / क ए ई ल ह्रीं ह स क ह ल ह्रीं स क ल ह्रीं॥',
      gayatriMantra: 'ॐ त्रिपुरादेव्यै विद्महे कामेश्वर्यै धीमहि तन्नः क्लिन्ने प्रचोदयात्॥',
      japaCount: 108,
      malaType: 'स्फटिक माला अथवा कमलगट्टे की माला',
      dhyanaSloka: 'बालार्कमण्डलाभासां चतुर्बाहुं त्रिलोचनाम्। पाशाङ्कुशशरांचापं धारयन्तीं शिवां भजे॥',
      pratishthaVidhiSummary: [
        '१. लाल वस्त्र पर स्थापित कर कुंकुम से अर्चन करें।',
        '२. कनकधारा व ललिता सहस्रनाम का पाठ करें।'
      ]
    },
    practicalRemedies: [
      {
        category: 'Relationships',
        problem: 'दाम्पत्य जीवन में प्रेम की कमी और लगातार कलह।',
        remedyProtocol: 'बेडरूम के उत्तर-पूर्व कोने में त्रिपुरसुन्दरी यन्त्र स्थापित कर शुक्रवार को इत्र अर्पित करें।'
      }
    ]
  },

  bhuvaneshvari_yantra: {
    id: 'bhuvaneshvari_yantra',
    taxonomyCategory: 'dashamahavidya',
    lineageAttribution: 'शारदा तिलक एवं मन्त्र महोदधि परम्परा',
    nameSanskrit: 'श्रीभुवनेश्वरी यन्त्रम्',
    nameHindi: 'भुवनेश्वरी यन्त्र (चतुर्थ महाविद्या)',
    nameEnglish: 'Bhuvaneshvari Yantra (Cosmic Space & World Mother)',
    subTitle: 'The Universal Queen of Infinite Space, Manifest Creation & Maya',
    presidingDeity: 'माता भुवनेश्वरी (संसार साम्राज्ञी)',
    tradition: 'शाक्त आगम व भुवनेश्वरी कल्प',
    corePhilosophy: 'अनंत आकाश और चौदह भुवनों की स्वामिनी। षट्कोण और अष्टदल का यह समन्वय सृष्टि के समस्त तत्वों में संतुलन और ऐश्वर्य का संचार करता है।',
    citations: [
      {
        sourceScripture: 'शारदा तिलकम्',
        chapterOrVerse: 'नवम पटल, श्लोक १-३',
        sanskritSloka: 'ह्रींकारगर्भां भुवनेश्वरीं तां ध्यायेत् समस्ताभयदां प्रपन्नाम्।\nषट्कोणपद्मासनसंस्थितां च त्रैलोक्यरक्षाविधिसंविधात्रीम्॥',
        hindiMeaning: 'ह्रींकार रूपी बीज को धारण करने वाली, षट्कोण और अष्टदल कमल पर विराजमान, त्रैलोक्य की रक्षा करने वाली भगवती भुवनेश्वरी का ध्यान करें।',
        englishMeaning: 'Meditate upon Mother Bhuvaneshvari, who embodies the primal Hreem syllable, seated upon the hexagram and lotus, presiding over universal space and abundance.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'भुवन भूपुर प्राकार',
        nameEnglish: 'Citadel of the 14 Lokas & 4 Gateways',
        chakraTitle: 'भूपुर एवं चार दिशा द्वार',
        presidingDeity: 'भुवनेश्वरी शक्ति',
        mudraShakti: 'वरदाङ्कुश मुद्रा',
        yoginiClass: 'प्रकट योगिनी',
        geometryType: 'Concentric Citadel with 4 Gateways',
        significance: 'स्थान, गृह और भूमि में सुख-समृद्धि का वास।'
      },
      {
        index: 2,
        nameSanskrit: 'अष्टदल भुवन पद्म',
        nameEnglish: '8-Petal Lotus of Manifest Nature',
        chakraTitle: 'अष्टदल पद्म (8 Sacred Petals)',
        presidingDeity: 'अष्ट प्रकृति शक्तियाँ',
        mudraShakti: 'पाश-अभय मुद्रा',
        yoginiClass: 'कुल योगिनी',
        geometryType: '8 Symmetrical Radial Lotus Petals with Spines',
        significance: 'आठों दिशाओं से मान-सम्मान और अनुकूल परिस्थितियों का निर्माण।'
      },
      {
        index: 3,
        nameSanskrit: 'ब्रह्माण्डीय षट्कोण चक्र',
        nameEnglish: 'Macrocosmic Space Hexagram',
        chakraTitle: 'षट्कोण मण्डल (Twin Intersecting Triangles)',
        presidingDeity: 'शिव-शक्ति सामरस्य',
        mudraShakti: 'योनि-लिंग मुद्रा',
        yoginiClass: 'निगूढ़ योगिनी',
        geometryType: 'Hexagram (Two Intersecting Triangles)',
        significance: 'आकाश तत्व का विस्तार तथा सभी प्रकार के बंधनों से मुक्ति।'
      },
      {
        index: 4,
        nameSanskrit: 'हृत्पद्म केन्द्र एवं ह्रीं बीज',
        nameEnglish: 'Cosmic Heart Singularity & Hreem Seed',
        chakraTitle: 'केन्द्रीय बिन्दु एवं एकाक्षरी ह्रीं बीज',
        presidingDeity: 'परमेश्वरी भुवनेश्वरी',
        mudraShakti: 'महामुद्रा',
        yoginiClass: 'परा शक्ति',
        geometryType: 'Central Singularity Point',
        significance: 'माया पर विजय और अखंड सत्ता का सुख।'
      }
    ],
    jyotish: {
      rulingPlanet: 'चन्द्रमा (Moon)',
      planetSanskrit: 'चन्द्र ग्रह (मन व मानसिक शांति)',
      friendlyRashis: ['कर्क', 'वृषभ', 'तुला'],
      friendlyNakshatras: ['रोहिणी', 'हस्त', 'श्रवण'],
      doshaRemedies: [
        {
          doshaName: 'चन्द्रमा की दुर्बलता व केमद्रुम योग',
          description: 'अत्यधिक मानसिक चंचलता, डिप्रेशन, माता के स्वास्थ्य में गिरावट, धनहानि।',
          reliefMechanism: 'भुवनेश्वरी यन्त्र के पूजन से चन्द्रमा की शीतलता और मानसिक स्थिरता प्राप्त होती है।'
        }
      ],
      lifeAspects: ['भूमि-भवन सुख', 'मानसिक शांति', 'सम्मोहन व जनप्रियता', 'राजकीय अनुग्रह'],
      wearOrInstallDirection: 'उत्तर-पश्चिम (North-West) अथवा पूर्व',
      favorableDay: 'सोमवार (Monday)',
      auspiciousTithi: 'शुक्ल पक्ष तृतीया, भुवनेश्वरी जयंती',
      metalPreference: 'चांदी (Silver) अथवा पीतल',
      beejMantra: 'ॐ ह्रीं भुवनेश्वर्यै नमः॥',
      gayatriMantra: 'ॐ नारायण्यै विद्महे भुवनेश्वर्यै धीमहि तन्नो देवी प्रचोदयात्॥',
      japaCount: 108,
      malaType: 'मोती माला अथवा स्फटिक माला',
      dhyanaSloka: 'उद्यद्दिनद्युतिमिन्दुकिरीटां तुङ्गकुचां नयनत्रययुक्ताम्। स्मेरमुखीं वरदाङ्कुशपाशाभीतिकरां प्रभजे भुवनेशीम्॥',
      pratishthaVidhiSummary: [
        '१. श्वेत या पीले वस्त्र पर स्थापित करें।',
        '२. सफेद चन्दन व चावल अर्पित करें।'
      ]
    },
    practicalRemedies: [
      {
        category: 'Health',
        problem: 'अत्यधिक मानसिक तनाव, घबराहट और अनिद्रा।',
        remedyProtocol: 'सोमवार की रात्रि में भुवनेश्वरी यन्त्र को देखकर ॐ ह्रीं नमः का ५४ बार ध्यानपूर्वक जाप करें।'
      }
    ]
  },

  bhairavi_yantra: {
    id: 'bhairavi_yantra',
    taxonomyCategory: 'dashamahavidya',
    lineageAttribution: 'भैरवी तन्त्र एवं रुद्रयामल आगम',
    nameSanskrit: 'श्रीत्रिपुरभैरवी यन्त्रम्',
    nameHindi: 'भैरवी यन्त्र (पञ्चम महाविद्या)',
    nameEnglish: 'Bhairavi Yantra (The Radiant Fire of Consciousness)',
    subTitle: 'The Fierce Light of Spiritual Transformation, Kundalini Awakening & Protection',
    presidingDeity: 'भगवती त्रिपुरभैरवी',
    tradition: 'रुद्रयामल शाक्त परम्परा',
    corePhilosophy: 'चेतना की प्रचण्ड चिदग्नि। षट्कोण और अन्तः त्रिकोण का यह विन्यास साधक के भीतर सोई कुण्डलिनी अग्नि को प्रज्वलित कर समस्त वासनाओं को भस्म करता है।',
    citations: [
      {
        sourceScripture: 'भैरवी तन्त्रम्',
        chapterOrVerse: 'प्रथम पटल',
        sanskritSloka: 'ह्स्रैं ह्स्क्लीं ह्स्रौंः भैरवी देवि सर्वशत्रुविमर्दिनी।\nचिदग्निस्वरूपिणी नित्यं कुण्डलिनीप्रबोधिनी॥',
        hindiMeaning: 'ह्स्रैं ह्स्क्लीं ह्स्रौंः स्वरूप वाली त्रिपुरभैरवी समस्त आन्तरिक व बाह्य शत्रुओं का नाश करने वाली और कुण्डलिनी को जगाने वाली चिदग्नि हैं।',
        englishMeaning: 'Tripura Bhairavi embodies the scorching fire of pure awareness, awakening the coiled serpent Kundalini and incinerating all obstacles to supreme liberation.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'तेजस भूपुर प्राकार',
        nameEnglish: 'Fiery Rampart & 4 Gateways',
        chakraTitle: 'भूपुर (Outer Citadel)',
        presidingDeity: 'त्रिपुरभैरवी',
        mudraShakti: 'अभय-माला मुद्रा',
        yoginiClass: 'प्रकट भैरवी',
        geometryType: '4 Cardinal Gateways with Concentric Ramparts',
        significance: 'आध्यात्मिक ऊर्जा की रक्षा और तामसिक बाधाओं का तत्काल दहन।'
      },
      {
        index: 2,
        nameSanskrit: 'अष्टदल चिदग्नि पद्म',
        nameEnglish: '8-Petal Lotus of Divine Fire',
        chakraTitle: 'अष्टदल पद्म (8 Sacred Petals)',
        presidingDeity: 'अष्ट भैरवी शक्तियाँ',
        mudraShakti: 'चिन्मुद्रा',
        yoginiClass: 'अग्नि योगिनी',
        geometryType: '8 Symmetrical Radial Lotus Petals with Spines',
        significance: 'काम, क्रोध, लोभ, मोह आदि षड्रिपुओं का दहन।'
      },
      {
        index: 3,
        nameSanskrit: 'षट्कोण एवं अन्तःत्रिकोण',
        nameEnglish: 'Hexagram & Inner Inverted Triangle',
        chakraTitle: 'षट्कोण व शक्ति त्रिकोण (Kundalini Flame Matrix)',
        presidingDeity: 'रुद्र-भैरवी सामरस्य',
        mudraShakti: 'धनुर्बाण मुद्रा',
        yoginiClass: 'रहस्य भैरवी',
        geometryType: 'Hexagram with Inner Inverted Triangle',
        significance: 'मूलाधार से सहस्रार तक ऊर्जा का ऊर्ध्वगमन।'
      },
      {
        index: 4,
        nameSanskrit: 'केन्द्रीय बिन्दु एवं ह्स्रैं बीज',
        nameEnglish: 'Central Radiant Singularity & Hsraim Seed',
        chakraTitle: 'मध्य बिन्दु एवं चिदग्नि बीज',
        presidingDeity: 'पराभैरवी',
        mudraShakti: 'महाभैरवी मुद्रा',
        yoginiClass: 'परम चिदग्नि शक्ति',
        geometryType: 'Infinitesimal Central Singularity Point',
        significance: 'आत्म-साक्षात्कार और परम तेज।'
      }
    ],
    jyotish: {
      rulingPlanet: 'मंगल (Mars) व लग्न बल',
      planetSanskrit: 'मंगल ग्रह व आत्मतेज',
      friendlyRashis: ['मेष', 'वृश्चिक', 'धनु', 'सिंह'],
      friendlyNakshatras: ['मृगशिरा', 'चित्रा', 'धनिष्ठा'],
      doshaRemedies: [
        {
          doshaName: 'मांगलिक दोष व रक्त विकार',
          description: 'अत्यधिक क्रोध, रक्त विकार, विवाह में अत्यधिक विलम्ब, साहस की कमी।',
          reliefMechanism: 'भैरवी यन्त्र के पूजन से मंगल दोष शांत होकर पराक्रम और ओजस में परिवर्तित होता है।'
        }
      ],
      lifeAspects: ['शत्रु-विजय', 'कुण्डलिनी जागरण', 'अदम्य साहस', 'दुर्घटनाओं से रक्षा'],
      wearOrInstallDirection: 'दक्षिण (South) अथवा पूर्व (East)',
      favorableDay: 'मंगलवार (Tuesday)',
      auspiciousTithi: 'कृष्ण पक्ष अष्टमी, भैरवी जयंती',
      metalPreference: 'ताम्र (Copper) अथवा रक्त चन्दन पट्ट',
      beejMantra: 'ॐ ह्स्रैं ह्स्क्लीं ह्स्रौंः त्रिपुरभैरव्यै नमः॥',
      gayatriMantra: 'ॐ त्रिपुरभैरव्यै विद्महे भैरवीदेव्यै धीमहि तन्नो देवी प्रचोदयात्॥',
      japaCount: 108,
      malaType: 'लाल चन्दन माला अथवा रुद्राक्ष माला',
      dhyanaSloka: 'उद्यद्भानुसहस्रकान्तिमरुणक्षौमां शिरोमालिनीं रक्तालिप्तपयोधरां जपवटीं विद्यामभीतिं वरम्। धारयन्तीं त्रिनेत्रां भजे॥',
      pratishthaVidhiSummary: [
        '१. लाल वस्त्र पर स्थापित करें।',
        '२. सिन्दूर व रक्त पुष्प से अर्चन करें।'
      ]
    },
    practicalRemedies: [
      {
        category: 'Protection',
        problem: 'मन में अज्ञात भय, घबराहट और आत्मविश्वास की भारी कमी।',
        remedyProtocol: 'प्रतिदिन प्रातः भैरवी यन्त्र के समक्ष ॐ ह्स्रैं ह्स्क्लीं ह्स्रौंः का २७ बार जाप कर जल आचमन करें।'
      }
    ]
  },

  chhinnamasta_yantra: {
    id: 'chhinnamasta_yantra',
    taxonomyCategory: 'dashamahavidya',
    lineageAttribution: 'छिन्नमस्ता कल्प एवं शक्ति संगम तन्त्र',
    nameSanskrit: 'प्रचण्डचण्डिका (छिन्नमस्ता) यन्त्रम्',
    nameHindi: 'छिन्नमस्ता यन्त्र (षष्ठ महाविद्या)',
    nameEnglish: 'Chhinnamasta Yantra (The Transcendental Matrix of Ego-Sacrifice)',
    subTitle: 'The Fierce Energy of Self-Transcendence, Pranic Mastery & Cosmic Electricity',
    presidingDeity: 'प्रचण्ड चण्डिका (छिन्नमस्ता)',
    tradition: 'वीरभाव शाक्त आगम',
    corePhilosophy: 'अहंकार और वासना का पूर्ण उत्सर्ग। अपना ही शीश काटकर अपनी ही सहचरी शक्तियों को रक्त-पान कराना—यह जीव के पूर्ण समर्पण और आत्म-साक्षात्कार का प्रतीक है।',
    citations: [
      {
        sourceScripture: 'तन्त्रसारः',
        chapterOrVerse: 'छिन्नमस्ता प्रकरण',
        sanskritSloka: 'प्रत्यालीढपदां सदैव दधतीं छिन्नं शिरः कर्त्तृकां\nदिग्वस्त्रां स्वकबन्धशोणितसुधाधारां पिबन्तीं मुदा।\nडाकिनीवर्णिनीयुक्तां प्रचण्डचण्डिकां भजे॥',
        hindiMeaning: 'अपना ही कटा शीश और खड्ग धारण करने वाली, अपने ही कबंध से प्रवाहित अमृतमयी रक्तधारा का पान कराने वाली डाकिनी-वर्णिनी से युक्त प्रचण्डचण्डिका की हम वन्दना करते हैं।',
        englishMeaning: 'We revere the fierce Chhinnamasta, who decapitates her own ego, offering the immortal nectar of her awareness to feed her attendants, shattering all cosmic illusions.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'वज्र भूपुर प्राकार',
        nameEnglish: 'Adamantine Citadel & 4 Gates',
        chakraTitle: 'भूपुर (The Vajra Shield)',
        presidingDeity: 'प्रचण्डचण्डिका',
        mudraShakti: 'कर्त्री मुद्रा',
        yoginiClass: 'प्रकट वज्र योगिनी',
        geometryType: '4 Cardinal Gateways with Concentric Ramparts',
        significance: 'आकस्मिक विपत्तियों और घोर तंत्र बाधाओं का तत्काल ध्वंस।'
      },
      {
        index: 2,
        nameSanskrit: 'अष्टदल डाकिनी पद्म',
        nameEnglish: '8-Petal Lotus of Pranic Shaktis',
        chakraTitle: 'अष्टदल पद्म (8 Sacred Petals)',
        presidingDeity: 'डाकिनी, वर्णिनी एवं अष्टशक्तियाँ',
        mudraShakti: 'कपाल मुद्रा',
        yoginiClass: 'डाकिनी शक्ति वर्ग',
        geometryType: '8 Symmetrical Radial Lotus Petals with Spines',
        significance: 'कुण्डलिनी की तीन प्रमुख नाड़ियों (इड़ा, पिंगला, सुषुम्णा) का शोधन।'
      },
      {
        index: 3,
        nameSanskrit: 'षट्कोण व योनिरूप त्रिकोण',
        nameEnglish: 'Dynamic Hexagram & Inverted Triangle',
        chakraTitle: 'षट्कोण व अधोमुख त्रिकोण (Pranic Matrix)',
        presidingDeity: 'महाविद्येश्वर-छिन्नमस्ता सामरस्य',
        mudraShakti: 'योनि मुद्रा',
        yoginiClass: 'अतिरहस्य योगिनी',
        geometryType: 'Hexagram with Concentric Inner Inverted Triangle',
        significance: 'काम-वासना का ओजस में रूपान्तरण।'
      },
      {
        index: 4,
        nameSanskrit: 'केन्द्रीय बिन्दु एवं हूं-क्लीं-ऐं बीज',
        nameEnglish: 'Supreme Singularity & Vajra-Vairochani Seed',
        chakraTitle: 'मध्य बिन्दु एवं वज्र-वैरोचनीय बीज',
        presidingDeity: 'परा प्रचण्ड चण्डिका',
        mudraShakti: 'वज्र मुद्रा',
        yoginiClass: 'परा संवित् शक्ति',
        geometryType: 'Infinitesimal Central Singularity Point',
        significance: 'अहंकार की आत्यंतिक आहुति और ब्रह्म-निर्वाण।'
      }
    ],
    jyotish: {
      rulingPlanet: 'राहु (Rahu) व सुषुम्णा नाड़ी',
      planetSanskrit: 'राहु ग्रह व नाड़ी शोधन',
      friendlyRashis: ['कुम्भ', 'वृश्चिक', 'मिथुन'],
      friendlyNakshatras: ['आर्द्रा', 'स्वाति', 'शतभिषा'],
      doshaRemedies: [
        {
          doshaName: 'राहु की घोर पीड़ा व तंत्र बाधा',
          description: 'अकस्मात भारी आर्थिक नुकसान, अज्ञात भय, भ्रम, भूत-प्रेत या नजर दोष।',
          reliefMechanism: 'छिन्नमस्ता यन्त्र के नित्य दर्शन व मन्त्र से राहु का विष अमृत में बदल जाता है।'
        }
      ],
      lifeAspects: ['शत्रुओं पर पूर्ण विजय', 'प्राणशक्ति का जागरण', 'कामोत्तेजना पर नियंत्रण', 'मस्तिष्क की तीक्ष्णता'],
      wearOrInstallDirection: 'पूर्व (East) अथवा उत्तर (North)',
      favorableDay: 'मंगलवार (Tuesday) अथवा शनिवार',
      auspiciousTithi: 'वैशाख शुक्ल चतुर्दशी (छिन्नमस्ता जयंती)',
      metalPreference: 'ताम्र (Copper) अथवा अष्टधातु',
      beejMantra: 'ॐ श्रीं ह्रीं क्लीं ऐं वज्र वैरोचनीये हूं हूं फट् स्वाहा॥',
      gayatriMantra: 'ॐ वैरोचन्यायै विद्महे छिन्नमस्तायै धीमहि तन्नो देवी प्रचोदयात्॥',
      japaCount: 108,
      malaType: 'रुद्राक्ष माला अथवा रक्त चन्दन माला',
      dhyanaSloka: 'प्रत्येकपादकमले विलसद्दिगम्बरीं मुण्डमालाविभूषिताम्। खड्गकपालधारिणीं नमामि छिन्नमस्तिकाम्॥',
      pratishthaVidhiSummary: [
        '१. लाल वस्त्र पर यन्त्र प्रतिष्ठित करें।',
        '२. सिन्दूर और लाल कनेर के पुष्प चढ़ाएं।'
      ]
    },
    practicalRemedies: [
      {
        category: 'Spiritual',
        problem: 'मन में अत्यधिक भटकाव, काम-वासना के कारण ऊर्जा का क्षय।',
        remedyProtocol: 'प्रतिदिन प्रातः छिन्नमस्ता यन्त्र पर ध्यान केन्द्रित कर एकाग्र चित्त से ॐ हूं फट् का जप करें।'
      }
    ]
  },

  dhumavati_yantra: {
    id: 'dhumavati_yantra',
    taxonomyCategory: 'dashamahavidya',
    lineageAttribution: 'धूमावती तन्त्र एवं मन्त्र महोदधि',
    nameSanskrit: 'श्रीधूमावती यन्त्रम्',
    nameHindi: 'धूमावती यन्त्र (सप्तम महाविद्या)',
    nameEnglish: 'Dhumavati Yantra (The Matrix of Primal Void & Liberation)',
    subTitle: 'The Primordial Goddess of Absolute Void, Renunciation & Destruction of Poverty',
    presidingDeity: 'भगवती धूमावती (ज्येष्ठा / अलक्ष्मी-नाशिनी)',
    tradition: 'शाक्त आगम व संन्यास परम्परा',
    corePhilosophy: 'सृष्टि से पूर्व और प्रलय के पश्चात का आदि शून्य। यह यन्त्र साधक के समस्त संतापों, दरिद्रता, भूख और अभावों को अपने शून्य में विलीन कर परम शांति प्रदान करता है।',
    citations: [
      {
        sourceScripture: 'धूमावती तन्त्रम्',
        chapterOrVerse: 'प्रथम पटल',
        sanskritSloka: 'धूं धूं धूमावत्यै स्वाहा मन्त्रेण सर्वदारिद्र्यनाशनम्।\nशत्रूणां स्तम्भनं चैव मोक्षदं च न संशयः॥',
        hindiMeaning: 'धूं धूं धूमावत्यै स्वाहा इस मन्त्र से समस्त दरिद्रता का नाश, शत्रुओं का स्तम्भन और मोक्ष की प्राप्ति होती है, इसमें कोई संशय नहीं है।',
        englishMeaning: 'Through the Dhumavati Yantra and its seed Dhoom, all acute poverty, suffering, and sorrow are consumed in the cosmic void, leaving pure stillness.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'शून्यता भूपुर प्राकार',
        nameEnglish: 'Citadel of Void & Renunciation',
        chakraTitle: 'भूपुर एवं चार द्वार',
        presidingDeity: 'भगवती धूमावती',
        mudraShakti: 'शूर्प मुद्रा (Winnowing Basket Seal)',
        yoginiClass: 'प्रकट योगिनी',
        geometryType: '4 Cardinal Gateways with Concentric Ramparts',
        significance: 'समस्त दरिद्रता और दुर्भाग्य को घर से बाहर निष्कासित करना।'
      },
      {
        index: 2,
        nameSanskrit: 'अष्टदल विसर्जन पद्म',
        nameEnglish: '8-Petal Lotus of Transmutation',
        chakraTitle: 'अष्टदल पद्म (8 Sacred Petals)',
        presidingDeity: 'अष्ट संहारक शक्तियाँ',
        mudraShakti: 'अभय मुद्रा',
        yoginiClass: 'शून्य योगिनी',
        geometryType: '8 Symmetrical Radial Lotus Petals with Spines',
        significance: 'समस्त प्रकार के कर्जों, रोगों और अभावों का विसर्जन।'
      },
      {
        index: 3,
        nameSanskrit: 'शून्य षट्कोण व त्रिकोण',
        nameEnglish: 'Hexagram of Transmutation & Inner Triangle',
        chakraTitle: 'षट्कोण मण्डल (Matrix of the Primal Void)',
        presidingDeity: 'महाकाल-विहीना शक्ति',
        mudraShakti: 'वरद मुद्रा',
        yoginiClass: 'रहस्य योगिनी',
        geometryType: 'Hexagram with Inner Inverted Triangle',
        significance: 'अभाव को परम वैराग्य और आत्म-शान्ति में बदलना।'
      },
      {
        index: 4,
        nameSanskrit: 'केन्द्रीय बिन्दु एवं धूं बीज',
        nameEnglish: 'Central Void Singularity & Dhoom Seed',
        chakraTitle: 'मध्य बिन्दु एवं "धूं" महाबीज',
        presidingDeity: 'परम धूमावती',
        mudraShakti: 'कैवल्य मुद्रा',
        yoginiClass: 'परम शून्यता शक्ति',
        geometryType: 'Infinitesimal Central Singularity Point',
        significance: 'समस्त दुःखों का आत्यंतिक अंत।'
      }
    ],
    jyotish: {
      rulingPlanet: 'केतु (Ketu) व शनि (Saturn)',
      planetSanskrit: 'केतु ग्रह व दारिद्र्य मुक्ति',
      friendlyRashis: ['मकर', 'कुम्भ', 'वृश्चिक'],
      friendlyNakshatras: ['मूल', 'मघा', 'अश्विनी'],
      doshaRemedies: [
        {
          doshaName: 'केतु जनित अलक्ष्मी दोष व असाध्य रोग',
          description: 'लंबे समय से चला आ रहा कर्ज, पुराना जीर्ण रोग, घर में लगातार उदासी और कलह।',
          reliefMechanism: 'धूमावती यन्त्र के समक्ष काले तिल और राई अर्पित करने से भारी से भारी दरिद्रता कटती है।'
        }
      ],
      lifeAspects: ['दारिद्र्य निवारण', 'ऋण-मुक्ति', 'कठिन रोगों से रक्षा', 'अकेलेपन व अवसाद का शमन'],
      wearOrInstallDirection: 'पश्चिम (West) अथवा दक्षिण-पश्चिम',
      favorableDay: 'शनिवार (Saturday)',
      auspiciousTithi: 'ज्येष्ठ शुक्ल अष्टमी (धूमावती जयंती)',
      metalPreference: 'लोहा (Iron) अथवा ताम्र',
      beejMantra: 'ॐ धूं धूं धूमावत्यै फट् स्वाहा॥',
      gayatriMantra: 'ॐ धूमावत्यै विद्महे संहारिण्यै धीमहि तन्नो धूमा प्रचोदयात्॥',
      japaCount: 108,
      malaType: 'रुद्राक्ष माला अथवा धतूरे के बीज की माला',
      dhyanaSloka: 'विवर्णा चञ्चला रुष्टा दीर्घा च मलिनाम्बरा। विमुक्तकुन्तला रूक्षा विधवा विरलद्विजा॥ काकध्वजरथारूढा विलम्बितपयोधरा। शूर्पहस्ता रूक्षाक्षी ध्यायेत्तां धूमिनीं पराम्॥',
      pratishthaVidhiSummary: [
        '१. काले या भूरे वस्त्र पर यन्त्र स्थापित करें।',
        '२. काले तिल और बताशे का भोग लगाएं।'
      ]
    },
    practicalRemedies: [
      {
        category: 'Wealth',
        problem: 'अत्यधिक कर्जे के जाल में फंस जाना और व्यापार पूरी तरह ठप होना।',
        remedyProtocol: 'प्रत्येक शनिवार को धूमावती यन्त्र के समक्ष सरसों के तेल का दीपक जलाकर १०८ बार ॐ धूं धूमावत्यै फट् स्वाहा का जप करें।'
      }
    ]
  },

  bagalamukhi_yantra: {
    id: 'bagalamukhi_yantra',
    taxonomyCategory: 'dashamahavidya',
    lineageAttribution: 'सांख्यायन तन्त्र एवं मन्त्र महोदधि परम्परा',
    nameSanskrit: 'श्रीबगलामुखी (पीताम्बरी) यन्त्रम्',
    nameHindi: 'बगलामुखी यन्त्र (अष्टम महाविद्या)',
    nameEnglish: 'Bagalamukhi Yantra (The Golden Paralyzer of Adverse Forces)',
    subTitle: 'The Supreme Stambhana Power of Victory in Court Cases, Enemy Immobilization & Speech Command',
    presidingDeity: 'भगवती पीताम्बरी बगलामुखी',
    tradition: 'सांख्यायन तन्त्र व पीताम्बरी विद्या',
    corePhilosophy: 'सृष्टि की गति और शत्रु की मति को स्तम्भित (स्थिर) करने वाली शक्ति। यह यन्त्र विरोधियों की वाक् और बुद्धि को कीलित कर साधक को अजेय विजय प्रदान करता है।',
    citations: [
      {
        sourceScripture: 'सांख्यायन तन्त्रम्',
        chapterOrVerse: 'द्वादश पटल, श्लोक ८-१०',
        sanskritSloka: 'स्तम्भनं सर्वशत्रूणां बगलायन्त्रमुत्तमम्।\nवाचं मुखं पदं स्तम्भ्य जिह्वां कीलयते क्षणात्॥',
        hindiMeaning: 'समस्त शत्रुओं को स्तम्भित करने वाला बगलामुखी यन्त्र सर्वश्रेष्ठ है। यह विरोधी की वाणी, मुख, पैर और बुद्धि को एक क्षण में कीलित कर देता है।',
        englishMeaning: 'The supreme Bagalamukhi Yantra instantly immobilizes the speech, mind, and hostile actions of adversaries, granting righteous victory.'
      },
      {
        sourceScripture: 'मन्त्र महोदधिः',
        chapterOrVerse: 'दशम तरङ्ग',
        sanskritSloka: 'ॐ ह्लीं बगलामुखि सर्वदुष्टानां वाचं मुखं पदं स्तम्भय।\nजिह्वां कीलय बुद्धिं विनाशय ह्लीं ॐ स्वाहा॥',
        hindiMeaning: 'हे भगवती बगलामुखी! सभी दुष्टों की वाणी, मुख और पैर को रोकें, जिह्वा को कीलित करें और कुबुद्धि का नाश करें।',
        englishMeaning: 'O Goddess Bagalamukhi, paralyze the vicious intentions and speech of all who act maliciously, dissolving adverse stratagems.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'पीताम्बरी स्तम्भन भूपुर',
        nameEnglish: 'Golden Rampart of Invincible Defense',
        chakraTitle: 'भूपुर एवं चार स्वर्ण द्वार',
        presidingDeity: 'भगवती पीताम्बरी',
        mudraShakti: 'गदा मुद्रा',
        yoginiClass: 'प्रकट स्तम्भन योगिनी',
        geometryType: 'Concentric Golden Citadel with 4 Gateways',
        significance: 'शत्रु के समस्त आक्रमणों और षड्यंत्रों को बाहर ही रोक देना।'
      },
      {
        index: 2,
        nameSanskrit: 'अष्टदल पीत पद्म',
        nameEnglish: '8-Petal Lotus of 8 Directions Victory',
        chakraTitle: 'अष्टदल पद्म (8 Sacred Petals)',
        presidingDeity: 'अष्ट स्तम्भन शक्तियाँ',
        mudraShakti: 'मुद्गर मुद्रा',
        yoginiClass: 'गुप्त योगिनी',
        geometryType: '8 Symmetrical Radial Lotus Petals with Spines',
        significance: 'आठों दिशाओं के मुकदमों, वाद-विवाद और विवादों में विजय।'
      },
      {
        index: 3,
        nameSanskrit: 'स्तम्भन षट्कोण एवं त्रिकोण',
        nameEnglish: 'Stambhana Hexagram & Inverted Triangle',
        chakraTitle: 'षट्कोण व अधोमुख त्रिकोण (Matrix of Paralyzing Force)',
        presidingDeity: 'महारुद्र-बगलामुखी सामरस्य',
        mudraShakti: 'जिह्वा-कीलन मुद्रा',
        yoginiClass: 'रहस्य योगिनी',
        geometryType: 'Hexagram with Concentric Inner Inverted Triangle',
        significance: 'शत्रु की बुद्धि और वाणी को पूर्णतः निष्प्रभावी करना।'
      },
      {
        index: 4,
        nameSanskrit: 'केन्द्रीय बिन्दु एवं ह्लीं बीज',
        nameEnglish: 'Central Golden Singularity & Hleem Seed',
        chakraTitle: 'मध्य बिन्दु एवं एकाक्षरी "ह्लीं" बीज',
        presidingDeity: 'परम पीताम्बरी बगलामुखी',
        mudraShakti: 'महास्तम्भन मुद्रा',
        yoginiClass: 'परा संवित् शक्ति',
        geometryType: 'Infinitesimal Central Singularity Point',
        significance: 'अखण्ड विजय और वाक्-सिद्धि का केन्द्र।'
      }
    ],
    jyotish: {
      rulingPlanet: 'मंगल (Mars) व बृहस्पति (Jupiter)',
      planetSanskrit: 'मंगल-गुरु विजय योग',
      friendlyRashis: ['मेष', 'धनु', 'वृश्चिक', 'सिंह'],
      friendlyNakshatras: ['मृगशिरा', 'पुनर्वसु', 'चित्रा'],
      doshaRemedies: [
        {
          doshaName: 'शत्रु बाधा व कानूनी मुकदमे',
          description: 'झूठे अदालती केस, सरकारी छापे, उच्चाटन, विरोधियों द्वारा छवि खराब करना।',
          reliefMechanism: 'पीले आसन पर बैठकर हल्दी की माला से बगलामुखी मंत्र का जाप करने से विरोधी स्वतः शांत हो जाते हैं।'
        }
      ],
      lifeAspects: ['अदालती मुकदमों में जीत', 'शत्रु-दमन', 'प्रतियोगी परीक्षाओं में विजय', 'वाक-सिद्धि'],
      wearOrInstallDirection: 'उत्तर (North) अथवा पूर्व (East)',
      favorableDay: 'गुरुवार (Thursday)',
      auspiciousTithi: 'वैशाख शुक्ल अष्टमी (बगलामुखी जयंती)',
      metalPreference: 'पीतल (Brass), स्वर्ण (Gold) अथवा ताम्र',
      beejMantra: 'ॐ ह्लीं बगलामुखि सर्वदुष्टानां वाचं मुखं पदं स्तम्भय जिह्वां कीलय बुद्धिं विनाशय ह्लीं ॐ स्वाहा॥',
      gayatriMantra: 'ॐ बगलामुख्यै च विद्महे स्तम्भिन्यै धीमहि तन्नो देवी प्रचोदयात्॥',
      japaCount: 108,
      malaType: 'हल्दी की माला (Curcuma Rosary)',
      dhyanaSloka: 'मध्येसुधाब्धि मणिमण्डप रत्नवेद्यां सिंहासनोपरिगतां परिपीतवर्णाम्। पीताम्बराभरणमाल्यविभूषिताङ्गीं देवीं नमामि धृतमुद्गरवैरिजिव्हाम्॥',
      pratishthaVidhiSummary: [
        '१. पीले वस्त्र पर यन्त्र प्रतिष्ठित करें।',
        '२. पीले कनेर या गेंदे के फूल और हल्दी-चन्दन से पूजन करें।',
        '३. बेसन के लड्डू का भोग लगाएं।'
      ]
    },
    practicalRemedies: [
      {
        category: 'Protection',
        problem: 'कोर्ट-कचहरी में अनुचित रूप से फंसाया जाना और विरोधी का हावी होना।',
        remedyProtocol: 'गुरुवार की रात्रि में बगलामुखी यन्त्र के सामने पीले आसन पर बैठकर हल्दी की माला से १०८ बार बगलामुखी मन्त्र का जाप करें।'
      }
    ]
  },

  matangi_yantra: {
    id: 'matangi_yantra',
    taxonomyCategory: 'dashamahavidya',
    lineageAttribution: 'मातङ्गी तन्त्र एवं श्रीविद्यार्णव तन्त्रम्',
    nameSanskrit: 'श्रीराजमातङ्गी यन्त्रम्',
    nameHindi: 'मातङ्गी यन्त्र (नवम महाविद्या)',
    nameEnglish: 'Matangi Yantra (Tantric Saraswati of Music, Speech & Arts)',
    subTitle: 'The Goddess of Supernatural Eloquence, Classical Arts, Music & Intellectual Dominance',
    presidingDeity: 'भगवती राजमातङ्गी (श्यामला / मन्त्रिणी)',
    tradition: 'श्रीकुल मन्त्रिणी परम्परा',
    corePhilosophy: 'समस्त ६४ कलाओं, संगीत, साहित्य और वैखरी वाणी की अधिष्ठात्री। यह यन्त्र षोडशदल, अष्टदल और षट्कोण के माध्यम से साधक को अगाध बुद्धि, वाक्पटुता और सम्मोहन प्रदान करता है।',
    citations: [
      {
        sourceScripture: 'मातङ्गी तन्त्रम्',
        chapterOrVerse: 'तृतीय पटल',
        sanskritSloka: 'श्यामलां शुकहस्तां च वीणावादनतत्पराम्।\nमातङ्गीं पूजयेद् यन्त्रे सर्वविद्याप्रदायिनीम्॥',
        hindiMeaning: 'श्यामल वर्ण वाली, हाथ में तोता लिए हुए और वीणा वादन में तत्पर सर्वविद्या प्रदायिनी भगवती मातङ्गी का यन्त्र में अर्चन करें।',
        englishMeaning: 'We worship the emerald-hued Matangi holding the veena and parrot, who bestows effortless command over speech, fine arts, music, and scriptural lore.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'वाग्भव भूपुर प्राकार',
        nameEnglish: 'Citadel of Supreme Eloquence & 4 Gates',
        chakraTitle: 'भूपुर एवं चार दिशा द्वार',
        presidingDeity: 'राजमातङ्गी',
        mudraShakti: 'वीणा मुद्रा',
        yoginiClass: 'प्रकट योगिनी',
        geometryType: 'Concentric Citadel with 4 Gateways',
        significance: 'कला, संगीत व साहित्य के क्षेत्र में प्रसिद्धि।'
      },
      {
        index: 2,
        nameSanskrit: 'षोडशदल कला पद्म',
        nameEnglish: '16-Petal Lotus of 64 Fine Arts',
        chakraTitle: 'षोडशदल पद्म (16 Sacred Petals)',
        presidingDeity: 'षोडश कला देवियाँ',
        mudraShakti: 'पुस्तक मुद्रा',
        yoginiClass: 'गुप्त योगिनी',
        geometryType: '16 Symmetrical Radial Lotus Petals with Spines',
        significance: 'गायन, वादन, लेखन और अभिनय में निपुणता।'
      },
      {
        index: 3,
        nameSanskrit: 'अष्टदल मेधा पद्म',
        nameEnglish: '8-Petal Lotus of Intellect',
        chakraTitle: 'अष्टदल पद्म (8 Sacred Petals)',
        presidingDeity: 'अष्ट वाग्देवताएँ',
        mudraShakti: 'अङ्कुश मुद्रा',
        yoginiClass: 'गुप्ततर योगिनी',
        geometryType: '8 Symmetrical Radial Lotus Petals with Spines',
        significance: 'प्रखर स्मरण शक्ति और त्वरित बुद्धि।'
      },
      {
        index: 4,
        nameSanskrit: 'षट्कोण व अन्तर्त्रिकोण',
        nameEnglish: 'Hexagram & Inner Inverted Triangle',
        chakraTitle: 'षट्कोण व ज्ञान त्रिकोण (Matrix of Intellect)',
        presidingDeity: 'मतंग-मातङ्गी सामरस्य',
        mudraShakti: 'शुक मुद्रा',
        yoginiClass: 'रहस्य योगिनी',
        geometryType: 'Hexagram with Concentric Inner Triangle',
        significance: 'गूढ़ शास्त्रों के अर्थ का स्वतः स्फुरण।'
      },
      {
        index: 5,
        nameSanskrit: 'केन्द्रीय बिन्दु एवं ऐं-ह्रीं बीज',
        nameEnglish: 'Central Singularity & Aim-Hreem Seed',
        chakraTitle: 'मध्य बिन्दु एवं सारस्वत बीज',
        presidingDeity: 'परमेश्वरी राजमातङ्गी',
        mudraShakti: 'महावाक् मुद्रा',
        yoginiClass: 'परा संवित् शक्ति',
        geometryType: 'Infinitesimal Central Singularity Point',
        significance: 'वाक्-सिद्धि का परम केन्द्र।'
      }
    ],
    jyotish: {
      rulingPlanet: 'सूर्य (Sun) व बुध (Mercury)',
      planetSanskrit: 'बुधादित्य योग कारक',
      friendlyRashis: ['मिथुन', 'कन्या', 'सिंह'],
      friendlyNakshatras: ['हस्त', 'रेवती', 'उत्तरा फाल्गुनी'],
      doshaRemedies: [
        {
          doshaName: 'बुध का वक्री होना व हकलाहट',
          description: 'बोलने में झिझक, संगीत या परीक्षा में विफलता, वाणी में कड़वाहट।',
          reliefMechanism: 'मातङ्गी यन्त्र के दर्शन व मन्त्र से वाणी में अमृत और सम्मोहन का संचार होता है।'
        }
      ],
      lifeAspects: ['संगीत व कला में सिद्धि', 'सार्वजनिक भाषण में सम्मोहन', 'आकर्षण', 'उच्च शिक्षा में सफलता'],
      wearOrInstallDirection: 'पूर्व (East) अथवा उत्तर-पूर्व',
      favorableDay: 'बुधवार (Wednesday)',
      auspiciousTithi: 'वैशाख शुक्ल तृतीया (मातङ्गी जयंती)',
      metalPreference: 'कांसा (Bronze) अथवा चांदी',
      beejMantra: 'ॐ ह्रीं ऐं भगवति मातङ्गीश्वरि श्रीं स्वाहा॥ / ॐ क्रीं हूं मातङ्ग्यै फट् स्वाहा॥',
      gayatriMantra: 'ॐ मातङ्ग्यै च विद्महे उच्छिष्टचाण्डालिन्यै धीमहि तन्नो देवी प्रचोदयात्॥',
      japaCount: 108,
      malaType: 'स्फटिक माला अथवा चन्दन माला',
      dhyanaSloka: 'श्यामाङ्गीं शशिकशेखरां त्रिनयनां रत्नसिंहासनस्थितां वेदैर्बाहुभिरङ्कुशं च दधतीं पाशं तथा खेटकम्। वीणां वादयन्तीं मातङ्गीं भजे॥',
      pratishthaVidhiSummary: [
        '१. हरे वस्त्र पर यन्त्र प्रतिष्ठित करें।',
        '२. मीठे फल और अनार का भोग लगाएं।'
      ]
    },
    practicalRemedies: [
      {
        category: 'Career',
        problem: 'कलाकार, वक्ता या विद्यार्थी का प्रदर्शन में बार-बार नर्वस होना।',
        remedyProtocol: 'प्रतिदिन सुबह मातङ्गी यन्त्र को देखकर ॐ ऐं मातङ्ग्यै नमः का ५४ बार उच्चारण करें।'
      }
    ]
  },

  kamala_yantra: {
    id: 'kamala_yantra',
    taxonomyCategory: 'dashamahavidya',
    lineageAttribution: 'कमला कल्प एवं विश्वसार तन्त्र',
    nameSanskrit: 'श्रीमहाकमला (कमलात्मिका) यन्त्रम्',
    nameHindi: 'कमला यन्त्र (दशम महाविद्या)',
    nameEnglish: 'Kamala Yantra (The Golden Lotus Tantric Lakshmi)',
    subTitle: 'The Supreme Tantric Goddess of Material Splendor, Sovereign Fortune & Absolute Abundance',
    presidingDeity: 'भगवती कमलात्मिका (सुवर्ण कान्ति महालक्ष्मी)',
    tradition: 'शाक्त कमला कल्प व श्रीविद्या',
    corePhilosophy: 'दशमहाविद्याओं की अंतिम परिणति। संहार, वैराग्य और स्तम्भन की तपस्या के पश्चात जब साधक पूर्ण आत्म-शान्ति प्राप्त करता है, तब भगवती कमला अखण्ड स्वर्णिम ऐश्वर्य और आनन्द के रूप में प्रकट होती हैं।',
    citations: [
      {
        sourceScripture: 'कमला कल्पः',
        chapterOrVerse: 'प्रथम पटल',
        sanskritSloka: 'कान्त्या काञ्चनसन्निभां हिमगिरिप्रख्यैश्चतुर्भिर्गजैः।\nहस्ताग्रस्थितरत्नकुम्भसलिलैरासिच्यमानां मुदा॥\nबिभ्राणां वरमब्जयुग्ममभयं हस्तैः किरीटोज्ज्वलां।\nकमलां तामहं भजे सर्वसम्पत्प्रदायिनीम्॥',
        hindiMeaning: 'सुवर्ण के समान कान्ति वाली, चार श्वेत गजों द्वारा सुवर्ण कलशों से अभिषिक्त होने वाली, दोनों हाथों में कमल और वर-अभय मुद्रा धारण करने वाली सर्वसम्पत्ति प्रदायिनी कमला की मैं वन्दना करता हूँ।',
        englishMeaning: 'We venerate Mother Kamala, radiant like burnished gold, bathed by four great celestial elephants, bestowing auspicious boons and supreme sovereign prosperity.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'कनक भूपुर प्राकार',
        nameEnglish: 'Golden Citadel of Sovereign Abundance',
        chakraTitle: 'भूपुर एवं चार कनक द्वार',
        presidingDeity: 'भगवती कमलात्मिका',
        mudraShakti: 'कमल-वरद मुद्रा',
        yoginiClass: 'प्रकट योगिनी',
        geometryType: 'Concentric Golden Citadel with 4 Gateways',
        significance: 'दरिद्रता का समूल विनाश और स्थायी लक्ष्मी का वास।'
      },
      {
        index: 2,
        nameSanskrit: 'षोडशदल ऐश्वर्य पद्म',
        nameEnglish: '16-Petal Lotus of 16 Sovereign Kalas',
        chakraTitle: 'षोडशदल पद्म (16 Sacred Petals)',
        presidingDeity: 'षोडश लक्ष्मी शक्तियाँ',
        mudraShakti: 'अभय-कमल मुद्रा',
        yoginiClass: 'गुप्त योगिनी',
        geometryType: '16 Symmetrical Radial Lotus Petals with Spines',
        significance: 'सोलह प्रकार के भौतिक व आध्यात्मिक ऐश्वर्य की प्राप्ति।'
      },
      {
        index: 3,
        nameSanskrit: 'अष्टदल अष्टलक्ष्मी पद्म',
        nameEnglish: '8-Petal Lotus of Ashta-Lakshmi',
        chakraTitle: 'अष्टदल पद्म (8 Sacred Petals)',
        presidingDeity: 'अष्टलक्ष्मी (आदि, धान्य, धैर्य, गज, सन्तान, विजय, विद्या, धन)',
        mudraShakti: 'रत्नकुम्भ मुद्रा',
        yoginiClass: 'गुप्ततर योगिनी',
        geometryType: '8 Symmetrical Radial Lotus Petals with Spines',
        significance: 'जीवन के आठों आयामों में पूर्ण सम्पन्नता।'
      },
      {
        index: 4,
        nameSanskrit: 'वैष्णव षट्कोण चक्र',
        nameEnglish: 'Vaishnava Hexagram of Cosmic Equilibrium',
        chakraTitle: 'षट्कोण मण्डल (Twin Intersecting Triangles)',
        presidingDeity: 'विष्णु-कमला सामरस्य',
        mudraShakti: 'शंख-चक्र मुद्रा',
        yoginiClass: 'रहस्य योगिनी',
        geometryType: 'Hexagram (Two Interpenetrating Triangles)',
        significance: 'जल और अग्नि, पुरुष और प्रकृति का संतुलन।'
      },
      {
        index: 5,
        nameSanskrit: 'महाबिन्दु एवं श्रीं बीज',
        nameEnglish: 'Supreme Singularity & Prime Shreem Seed',
        chakraTitle: 'मध्य बिन्दु एवं एकाक्षरी "श्रीं" बीज',
        presidingDeity: 'परम कमलात्मिका',
        mudraShakti: 'महालक्ष्मी मुद्रा',
        yoginiClass: 'परा संवित् शक्ति',
        geometryType: 'Infinitesimal Central Singularity Point',
        significance: 'समस्त ब्रह्माण्ड की सम्प्रभुता और अद्वैत आनन्द।'
      }
    ],
    jyotish: {
      rulingPlanet: 'शुक्र (Venus) व चन्द्रमा (Moon)',
      planetSanskrit: 'शुक्र ग्रह व लक्ष्मी योग',
      friendlyRashis: ['वृषभ', 'तुला', 'कर्क', 'मीन'],
      friendlyNakshatras: ['भरणी', 'पूर्वा फाल्गुनी', 'पूर्वाषाढ़ा', 'रोहिणी'],
      doshaRemedies: [
        {
          doshaName: 'शुक्र दोष व दरिद्रता योग',
          description: 'कठिन परिश्रम के बाद भी धन का अभाव, कर्ज, घर में सुख-साधनों की कमी।',
          reliefMechanism: 'कमला यन्त्र के समक्ष कमल का पुष्प चढ़ाकर श्रीं बीज का जाप करने से अक्षय लक्ष्मी की प्राप्ति होती है।'
        }
      ],
      lifeAspects: ['अक्षय धन-धान्य', 'व्यापारिक साम्राज्य', 'वैवाहिक सुख', 'गृह शान्ति व सौन्दर्य'],
      wearOrInstallDirection: 'उत्तर (North) अथवा उत्तर-पूर्व',
      favorableDay: 'शुक्रवार (Friday)',
      auspiciousTithi: 'दीपावली, शरद पूर्णिमा, कमला जयंती',
      metalPreference: 'स्वर्ण (Gold), चांदी (Silver) अथवा कांसा',
      beejMantra: 'ॐ श्रीं ह्रीं श्रीं कमले कमलालये प्रसीद प्रसीद श्रीं ह्रीं श्रीं ॐ महालक्ष्म्यै नमः॥',
      gayatriMantra: 'ॐ महालक्ष्म्यै च विद्महे विष्णुपत्न्यै च धीमहि तन्नो लक्ष्मीः प्रचोदयात्॥',
      japaCount: 108,
      malaType: 'कमलगट्टे की माला (Lotus Seed Rosary)',
      dhyanaSloka: 'कान्त्या काञ्चनसन्निभां हिमगिरिप्रख्यैश्चतुर्भिर्गजैर्हस्ताग्रस्थितरत्नकुम्भसलिलैरासिच्यमानां मुदा। बिभ्राणां वरमब्जयुग्ममभयं हस्तैः किरीटोज्ज्वलां क्षौमाबद्धनितम्बबिम्बललितां वन्देऽरविन्दस्थिताम्॥',
      pratishthaVidhiSummary: [
        '१. लाल या गुलाबी रेशमी वस्त्र पर यन्त्र प्रतिष्ठित करें।',
        '२. कमल के पुष्प या कमलगट्टे अर्पित करें।',
        '३. कनकधारा स्तोत्र का पाठ करें।'
      ]
    },
    practicalRemedies: [
      {
        category: 'Wealth',
        problem: 'व्यापार में घाटा और संचित धन का लगातार नष्ट होना।',
        remedyProtocol: 'तिजोरी अथवा व्यापार के गल्ले में कमला यन्त्र स्थापित कर शुक्रवार को धूप-दीप दिखाएं।'
      }
    ]
  },

  surya_yantra: {
    id: 'surya_yantra',
    taxonomyCategory: 'navagraha',
    lineageAttribution: 'आदित्य हृदय स्तोत्र एवं बृहत् पराशर होरा शास्त्र',
    nameSanskrit: 'श्री सूर्य यन्त्रम् (आदित्य मण्डल)',
    nameHindi: 'सूर्य यन्त्र (आरोग्य, तेज व राजयोग)',
    nameEnglish: 'Surya Yantra (Solar Majesty & Vitality - Sum 15)',
    subTitle: 'The 3x3 Magic Square Matrix of the Sun King (Sum 15)',
    presidingDeity: 'भगवान सूर्य नारायण (सविता)',
    tradition: 'सौर वैदिक परम्परा',
    corePhilosophy: 'समस्त चराचर जगत की आत्मा और जीवनी शक्ति (प्राण)। इसका ३x३ जादुई वर्ग प्रत्येक दिशा से १५ का योग बनाता है, जो पन्द्रह तिथियों और सूर्य की जीवनदायिनी किरणों का परिचायक है।',
    citations: [
      {
        sourceScripture: 'वाल्मीकि रामायण (आदित्य हृदय स्तोत्रम्)',
        chapterOrVerse: 'युद्धकाण्ड, सर्ग १०५, श्लोक १५',
        sanskritSloka: 'आदित्यं सर्वभूतानां पूजयेत् सर्वकामदम्।\nसर्वशत्रुविनाशाय सर्वशान्तिप्रदायकम्॥',
        hindiMeaning: 'समस्त प्राणियों के कल्याणकर्ता, मनोवांछित फल देने वाले तथा समस्त शत्रुओं का नाश करने वाले भगवान सूर्य का यन्त्र में अर्चन करें।',
        englishMeaning: 'Worship Lord Aditya, the soul of all beings and grantor of all boons, destroying all adversaries and diffusing supreme solar tranquility.'
      },
      {
        sourceScripture: 'बृहत् पराशर होरा शास्त्रम्',
        chapterOrVerse: 'ग्रह शान्ति प्रकरण',
        sanskritSloka: 'ॐ ह्रां ह्रीं ह्रौं सः सूर्याय नमः।\nषट् एकाष्ट सप्तपञ्चत्रि द्वि नव चतुर मण्डलम्॥',
        hindiMeaning: 'सूर्य के जादुई वर्ग में ६, १, ८; ७, ५, ३; २, ९, ४ संख्याओं का विन्यास साधक को आरोग्य और राजसम्मान देता है।',
        englishMeaning: 'Inscribing the magic configuration 6-1-8, 7-5-3, 2-9-4 brings royal favor, vitality, and freedom from debility.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'तेजोमय भूपुर प्राकार',
        nameEnglish: 'Solar Citadel & 4 Cardinal Gateways',
        chakraTitle: 'भूपुर एवं चार सौर द्वार',
        presidingDeity: 'भगवान सूर्य नारायण',
        mudraShakti: 'पद्म मुद्रा',
        yoginiClass: 'प्रकट सौर शक्ति',
        geometryType: '4 Cardinal Gateways with Concentric Ramparts',
        significance: 'आंखों के रोग, हृदय रोग और आत्मविश्वास की कमी का निवारण।'
      },
      {
        index: 2,
        nameSanskrit: 'अष्टदल सौर पद्म',
        nameEnglish: '8-Petal Lotus of Solar Rays',
        chakraTitle: 'अष्टदल पद्म (8 Petals of Prana)',
        presidingDeity: 'अष्ट आदित्य (मित्र, रवि, सूर्य, भानु, खग, पूषा, हिरण्यगर्भ, मरीचि)',
        mudraShakti: 'किरण मुद्रा',
        yoginiClass: 'प्रभा योगिनी',
        geometryType: '8 Symmetrical Radial Lotus Petals with Spines',
        significance: 'शरीर में रोग-प्रतिरोधक क्षमता (Immunity) और तेज का संचार।'
      },
      {
        index: 3,
        nameSanskrit: 'सूर्य संख्यात्मक जादुई वर्ग',
        nameEnglish: '3x3 Mathematical Solar Magic Square (Sum 15)',
        chakraTitle: '३x३ सूर्य महाचक्र (Row/Col/Diag Sum = 15)',
        presidingDeity: 'द्वादशादित्य मण्डल',
        mudraShakti: 'मार्तण्ड मुद्रा',
        yoginiClass: 'रहस्य सौर शक्ति',
        geometryType: '3x3 Magic Grid [6,1,8 / 7,5,3 / 2,9,4]',
        significance: 'संख्यात्मक ऊर्जा का परम संतुलन। पिता से लाभ, प्रशासनिक सफलता व मान-सम्मान।'
      },
      {
        index: 4,
        nameSanskrit: 'केन्द्रीय सौर बिन्दु व ह्रां बीज',
        nameEnglish: 'Solar Singularity & Hraam Seed',
        chakraTitle: 'मध्य बिन्दु एवं एकाक्षरी सौर बीज',
        presidingDeity: 'सविता परब्रह्म स्वरूप',
        mudraShakti: 'सूर्याभिषेक मुद्रा',
        yoginiClass: 'परम चिदग्नि शक्ति',
        geometryType: 'Central Singularity Point',
        significance: 'अखण्ड जीवन-शक्ति और मोक्ष का द्वार।'
      }
    ],
    jyotish: {
      rulingPlanet: 'सूर्य (Sun)',
      planetSanskrit: 'सूर्य ग्रह (आत्मा, पिता व राज्य कृपा)',
      friendlyRashis: ['सिंह (Leo)', 'मेष (Aries)', 'धनु (Sagittarius)'],
      friendlyNakshatras: ['कृतिका', 'उत्तरा फाल्गुनी', 'उत्तराषाढ़ा'],
      doshaRemedies: [
        {
          doshaName: 'सूर्य नीचत्व व पितृ दोष',
          description: 'सरकारी कार्यों में रुकावट, पिता से मतभेद, नेत्र विकार, हड्डियों की कमजोरी।',
          reliefMechanism: 'ताम्र सूर्य यन्त्र के सम्मुख रविवार को जलार्घ्य देकर आदित्य हृदय स्तोत्र का पाठ करें।'
        }
      ],
      lifeAspects: ['सरकारी नौकरी व पदोन्नति', 'आरोग्य व दीर्घायु', 'नेतृत्व क्षमता', 'सम्मान व प्रतिष्ठा'],
      wearOrInstallDirection: 'पूर्व दिशा (East)',
      favorableDay: 'रविवार (Sunday)',
      auspiciousTithi: 'शुक्ल पक्ष सप्तमी, मकर संक्रांति',
      metalPreference: 'तांबा (Copper) अथवा स्वर्ण',
      beejMantra: 'ॐ ह्रां ह्रीं ह्रौं सः सूर्याय नमः॥',
      gayatriMantra: 'ॐ भास्कराय विद्महे महाद्युतिकराय धीमहि तन्नो आदित्यः प्रचोदयात्॥',
      japaCount: 108,
      malaType: 'लाल चन्दन माला अथवा रुद्राक्ष माला',
      dhyanaSloka: 'पद्मासनः पद्मकरो द्विबाहुः पद्मद्युतिः सप्ततुरङ्गवाहनः। दिवाकरो लोकगुरुः किरीटी मयि प्रसादं विदधातु देवः॥',
      pratishthaVidhiSummary: [
        '१. तांबे के पात्र में लाल चन्दन व कुंकुम से यन्त्र स्थापित करें।',
        '२. लाल कनेर या गुड़हल के पुष्प अर्पित करें।',
        '३. गायत्री मन्त्र व सूर्य मन्त्र का १०८ बार जाप करें।'
      ]
    },
    practicalRemedies: [
      {
        category: 'Career',
        problem: 'सरकारी कार्यों में बार-बार बाधा आना और उच्चाधिकारियों से सहयोग न मिलना।',
        remedyProtocol: 'कार्यस्थल के पूर्व दिशा में सूर्य यन्त्र स्थापित कर प्रतिदिन प्रातः ताम्बे के लोटे से सूर्य को जल दें।'
      }
    ]
  },

  chandra_yantra: {
    id: 'chandra_yantra',
    taxonomyCategory: 'navagraha',
    lineageAttribution: 'ऋग्वेद चन्द्रमण्डल सूक्त एवं नारद संहिता',
    nameSanskrit: 'श्री चन्द्र यन्त्रम् (सोम मण्डल)',
    nameHindi: 'चन्द्र यन्त्र (मानसिक शान्ति व सौम्यता)',
    nameEnglish: 'Chandra Yantra (Lunar Equilibrium & Intuition - Sum 18)',
    subTitle: 'The 3x3 Magic Square Matrix of the Moon God (Sum 18)',
    presidingDeity: 'भगवान सोम (चन्द्रदेव)',
    tradition: 'वैदिक सोम परम्परा',
    corePhilosophy: 'मन और जल तत्व का नियन्त्रण। इसका ३x३ जादुई वर्ग प्रत्येक दिशा से १८ का योग बनाता है, जो चन्द्रमा की शीतलता और अंतःचेतना की स्थिरता का प्रतीक है।',
    citations: [
      {
        sourceScripture: 'ऋग्वेद',
        chapterOrVerse: 'मण्डल १०, सूक्त ८५, ऋचा १९',
        sanskritSloka: 'नवो नवो भवति जायमानोऽह्नां केतुरुषसामेत्यग्रम्।\nभागं देवेभ्यो वि दधात्यायन्प्र चन्द्रमास्तिरते दीर्घमायुः॥',
        hindiMeaning: 'प्रतिदिन नूतन रूप धारण करने वाले, दिनों और उषाकाल के ध्वज स्वरूप चन्द्रमा देवताओं को अमृत प्रदान करते हुए दीर्घायु देते हैं।',
        englishMeaning: 'Born anew each day as the harbinger of dawns, the Moon dispenses nectar to the cosmic deities and bestows enduring vitality.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'शीतल भूपुर प्राकार',
        nameEnglish: 'Lunar Citadel of Calm & 4 Portals',
        chakraTitle: 'भूपुर एवं चार सोम द्वार',
        presidingDeity: 'भगवान चन्द्रदेव',
        mudraShakti: 'अमृत मुद्रा',
        yoginiClass: 'प्रकट सोम शक्ति',
        geometryType: '4 Cardinal Gateways with Concentric Ramparts',
        significance: 'मानसिक विक्षोभ, अवसाद और कलह से सुरक्षा।'
      },
      {
        index: 2,
        nameSanskrit: 'अष्टदल अमृत पद्म',
        nameEnglish: '8-Petal Lotus of Lunar Nectars',
        chakraTitle: 'अष्टदल पद्म (8 Petals of Pure Stillness)',
        presidingDeity: 'अष्ट सोम कलाएँ',
        mudraShakti: 'चन्द्रकला मुद्रा',
        yoginiClass: 'अमृत योगिनी',
        geometryType: '8 Symmetrical Radial Lotus Petals with Spines',
        significance: 'कल्पना शक्ति, कलात्मकता और मातृ-सुख की अभिवृद्धि।'
      },
      {
        index: 3,
        nameSanskrit: 'चन्द्र जादुई वर्ग ग्रिड',
        nameEnglish: '3x3 Mathematical Lunar Magic Square (Sum 18)',
        chakraTitle: '३x३ चन्द्र महाचक्र (Row/Col/Diag Sum = 18)',
        presidingDeity: 'सोम नारायण',
        mudraShakti: 'शंख मुद्रा',
        yoginiClass: 'रहस्य सोम शक्ति',
        geometryType: '3x3 Magic Grid [7,2,9 / 8,6,4 / 3,10,5]',
        significance: 'मन के उतार-चढ़ाव का नियमन और वित्तीय स्थिरता।'
      },
      {
        index: 4,
        nameSanskrit: 'केन्द्रीय सोम बिन्दु व श्रां बीज',
        nameEnglish: 'Lunar Singularity & Shraam Seed',
        chakraTitle: 'मध्य बिन्दु एवं एकाक्षरी चन्द्र बीज',
        presidingDeity: 'अमृतमय चन्द्रदेव',
        mudraShakti: 'शान्ति मुद्रा',
        yoginiClass: 'परम आनन्द शक्ति',
        geometryType: 'Central Singularity Point',
        significance: 'प्रज्ञा और आत्म-शान्ति की पूर्णता।'
      }
    ],
    jyotish: {
      rulingPlanet: 'चन्द्रमा (Moon)',
      planetSanskrit: 'चन्द्र ग्रह (मन, माता व सौम्यता)',
      friendlyRashis: ['कर्क (Cancer)', 'वृषभ (Taurus)'],
      friendlyNakshatras: ['रोहिणी', 'हस्त', 'श्रवण'],
      doshaRemedies: [
        {
          doshaName: 'चन्द्र ग्रहण दोष व मानसिक अवसाद',
          description: 'अनिद्रा, घबराहट, माता का अस्वस्थ रहना, अत्यधिक भावनात्मक उतार-चढ़ाव।',
          reliefMechanism: 'चांदी के चन्द्र यन्त्र पर कच्चे दूध से अभिषेक कर सफेद चन्दन का तिलक लगाएं।'
        }
      ],
      lifeAspects: ['मानसिक शान्ति', 'मातृ-सुख', 'सहज आकर्षण व लोक-प्रियता', 'जल यात्रा व व्यापार'],
      wearOrInstallDirection: 'उत्तर-पश्चिम (North-West) दिशा',
      favorableDay: 'सोमवार (Monday)',
      auspiciousTithi: 'पूर्णिमा, शुक्ल पक्ष द्वितीया',
      metalPreference: 'चांदी (Silver)',
      beejMantra: 'ॐ श्रां श्रीं श्रौं सः चन्द्रमसे नमः॥',
      gayatriMantra: 'ॐ शीतांशवे विद्महे अमृतमयाय धीमहि तन्नो सोमः प्रचोदयात्॥',
      japaCount: 108,
      malaType: 'मोती माला (Pearl) अथवा स्फटिक माला',
      dhyanaSloka: 'श्वेताम्बरः श्वेतविभूषणश्च श्वेतद्युतिर्दण्डधरो द्विबाहुः। चन्द्रोऽमृतात्मा वरदो निशाकरः क्षपापतिर्मे विदधातु शान्तिम्॥',
      pratishthaVidhiSummary: [
        '१. श्वेत वस्त्र पर चांदी के यन्त्र को स्थापित करें।',
        '२. श्वेत पुष्प (मोगरा या चमेली) और अक्षत चढ़ाएं।',
        '३. चन्द्र मन्त्र का १०८ बार जाप करें।'
      ]
    },
    practicalRemedies: [
      {
        category: 'Health',
        problem: 'लगातार सिरदर्द, अत्यधिक चिंता और अनिद्रा का रोग।',
        remedyProtocol: 'सोमवार को चन्द्र यन्त्र के सामने बैठकर खीर का भोग लगाएं और ॐ सों सोमाय नमः का जाप करें।'
      }
    ]
  },

  mangala_yantra: {
    id: 'mangala_yantra',
    taxonomyCategory: 'navagraha',
    lineageAttribution: 'स्कन्द पुराण एवं पराशर होरा शास्त्र',
    nameSanskrit: 'श्री भौम (मंगल) यन्त्रम्',
    nameHindi: 'मंगल यन्त्र (साहस, भूमि व पराक्रम)',
    nameEnglish: 'Mangala Yantra (Martian Fortitude & Land Prowess - Sum 21)',
    subTitle: 'The 3x3 Magic Square Matrix of Mars (Sum 21)',
    presidingDeity: 'भगवान भौम (अंगारक / मंगल)',
    tradition: 'वैदिक भौम परम्परा',
    corePhilosophy: 'अग्नि तत्व और शारीरिक ऊर्जा का मूल स्रोत। इसका ३x३ जादुई वर्ग प्रत्येक दिशा से २१ का योग बनाता है, जो २१ पीढ़ियों के भूमि-दोष और रक्त-विकारों को शांत करता है।',
    citations: [
      {
        sourceScripture: 'स्कन्द पुराणम्',
        chapterOrVerse: 'अंगारक माहात्म्यम्',
        sanskritSloka: 'धरणीगर्भसम्भूतं विद्युत्कान्तिसमप्रभम्।\nकुमारं शक्तिहस्तं च मङ्गलं प्रणमाम्यहम्॥',
        hindiMeaning: 'पृथ्वी के गर्भ से उत्पन्न, विद्युत की कान्ति समान तेजस्वी, हाथ में शक्ति अस्त्र धारण करने वाले कुमार मंगल देव को मैं प्रणाम करता हूँ।',
        englishMeaning: 'Born of Mother Earth, radiant like flashing lightning, holding the divine lance, we salute the auspicious Lord Mangala.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'लौह भूपुर प्राकार',
        nameEnglish: 'Martian Rampart of Valour & 4 Portals',
        chakraTitle: 'भूपुर एवं चार मंगल द्वार',
        presidingDeity: 'भगवान अंगारक',
        mudraShakti: 'शक्ति मुद्रा',
        yoginiClass: 'प्रकट भौम शक्ति',
        geometryType: '4 Cardinal Gateways with Concentric Ramparts',
        significance: 'दुर्घटनाओं, अग्नि-भय और शत्रुओं से अचूक रक्षा।'
      },
      {
        index: 2,
        nameSanskrit: 'अष्टदल रक्त पद्म',
        nameEnglish: '8-Petal Lotus of Courage',
        chakraTitle: 'अष्टदल पद्म (8 Petals of Vitality)',
        presidingDeity: 'अष्ट भैरव व कार्तिकेय शक्तियाँ',
        mudraShakti: 'गदा मुद्रा',
        yoginiClass: 'वीर योगिनी',
        geometryType: '8 Symmetrical Radial Lotus Petals with Spines',
        significance: 'रक्त शुद्धि, साहस और मांसपेशियों में अदम्य शक्ति।'
      },
      {
        index: 3,
        nameSanskrit: 'मंगल जादुई वर्ग ग्रिड',
        nameEnglish: '3x3 Mathematical Mars Magic Square (Sum 21)',
        chakraTitle: '३x३ मंगल महाचक्र (Row/Col/Diag Sum = 21)',
        presidingDeity: 'भूमिपुत्र मंगल',
        mudraShakti: 'खड्ग मुद्रा',
        yoginiClass: 'रहस्य भौम शक्ति',
        geometryType: '3x3 Magic Grid [8,3,10 / 9,7,5 / 4,11,6]',
        significance: 'भूमि-भवन निर्माण, संपत्ति विवादों में विजय और मांगलिक दोष शांति।'
      },
      {
        index: 4,
        nameSanskrit: 'केन्द्रीय भौम बिन्दु व क्रां बीज',
        nameEnglish: 'Martian Singularity & Kraam Seed',
        chakraTitle: 'मध्य बिन्दु एवं एकाक्षरी मंगल बीज',
        presidingDeity: 'परम तेजस्वी मंगल देव',
        mudraShakti: 'वरद मुद्रा',
        yoginiClass: 'परम तेज शक्ति',
        geometryType: 'Central Singularity Point',
        significance: 'अजेय विजय और पौरुष की जागृति।'
      }
    ],
    jyotish: {
      rulingPlanet: 'मंगल (Mars)',
      planetSanskrit: 'मंगल ग्रह (पराक्रम, भाई व भूमि)',
      friendlyRashis: ['मेष (Aries)', 'वृश्चिक (Scorpio)', 'धनु (Sagittarius)'],
      friendlyNakshatras: ['मृगशिरा', 'चित्रा', 'धनिष्ठा'],
      doshaRemedies: [
        {
          doshaName: 'मांगलिक दोष व रक्त विकार',
          description: 'विवाह में अत्यधिक विलम्ब, पति-पत्नी में उग्र विवाद, भूमि विवाद, शल्य चिकित्सा (सर्जरी) का योग।',
          reliefMechanism: 'ताम्र मंगल यन्त्र पर लाल चन्दन का लेप कर मंगलवार को ऋणमोचक मंगल स्तोत्र का पाठ करें।'
        }
      ],
      lifeAspects: ['भूमि व अचल संपत्ति', 'पुलिस व सेना में विजय', 'खेलकूद व पराक्रम', 'कर्ज मुक्ति'],
      wearOrInstallDirection: 'दक्षिण (South) दिशा',
      favorableDay: 'मंगलवार (Tuesday)',
      auspiciousTithi: 'शुक्ल पक्ष चतुर्थी, भौम प्रदोष',
      metalPreference: 'तांबा (Copper) अथवा पीतल',
      beejMantra: 'ॐ क्रां क्रीं क्रौं सः भौमाय नमः॥',
      gayatriMantra: 'ॐ अंगारकाय विद्महे शक्तिहस्ताय धीमहि तन्नो भौमः प्रचोदयात्॥',
      japaCount: 108,
      malaType: 'रक्त चन्दन माला अथवा मूँगा माला',
      dhyanaSloka: 'रक्ताम्बरो रक्तवपुः किरीटी चतुर्मुखो मेषगदो गदाभृत्। धरासुतः शक्तिधरो द्विबाहुर्मङ्गलदाता मम शं करोतु॥',
      pratishthaVidhiSummary: [
        '१. लाल वस्त्र पर ताम्र यन्त्र स्थापित करें।',
        '२. सिन्दूर व मसूर की दाल अर्पित करें।',
        '३. गुड़ का भोग लगाकर १०८ बार मंगल मन्त्र जपें।'
      ]
    },
    practicalRemedies: [
      {
        category: 'Relationships',
        problem: 'कुंडली में मांगलिक दोष के कारण वैवाहिक संबंधों में अत्यधिक तनाव।',
        remedyProtocol: 'घर के दक्षिण कोने में मंगल यन्त्र स्थापित कर नित्य ॐ भौमाय नमः बोलकर लाल पुष्प चढ़ाएं।'
      }
    ]
  },

  budha_yantra: {
    id: 'budha_yantra',
    taxonomyCategory: 'navagraha',
    lineageAttribution: 'अथर्ववेद एवं मन्त्र महोदधि',
    nameSanskrit: 'श्री बुध यन्त्रम् (सौम्य मण्डल)',
    nameHindi: 'बुध यन्त्र (बुद्धि, वाणिज्य व वाक्-चातुर्य)',
    nameEnglish: 'Budha Yantra (Mercurial Intellect & Commerce - Sum 24)',
    subTitle: 'The 3x3 Magic Square Matrix of Mercury (Sum 24)',
    presidingDeity: 'भगवान बुध (चन्द्रपुत्र)',
    tradition: 'वैदिक बुध परम्परा',
    corePhilosophy: 'वाणी, बुद्धि और व्यापारिक चातुर्य का केन्द्र। इसका ३x३ जादुई वर्ग प्रत्येक दिशा से २४ का योग बनाता है, जो चौबीस अक्षरों वाले गायत्री मन्त्र और बुद्धि की सर्वांगीण प्रखरता का द्योतक है।',
    citations: [
      {
        sourceScripture: 'मन्त्र महोदधिः',
        chapterOrVerse: 'तरङ्ग १९',
        sanskritSloka: 'प्रियङ्गुकलिकाश्यामं रूपेणाप्रतिमं बुधम्।\nसौम्यं सौम्यगुणोपेतं तं बुधं प्रणमाम्यहम्॥',
        hindiMeaning: 'प्रियंगु पुष्प की कली के समान श्यामल वर्ण वाले, अनुपम रूपवान, सौम्य और समस्त श्रेष्ठ गुणों से युक्त बुध देव को मैं प्रणाम करता हूँ।',
        englishMeaning: 'Salutations to Lord Budha, radiant like a tender green bud, matchless in grace, tranquil and endowed with supreme intellect.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'हरित भूपुर प्राकार',
        nameEnglish: 'Emerald Citadel & 4 Cardinal Portals',
        chakraTitle: 'भूपुर एवं चार सौम्य द्वार',
        presidingDeity: 'भगवान बुधदेव',
        mudraShakti: 'लेखनी मुद्रा',
        yoginiClass: 'प्रकट सौम्य शक्ति',
        geometryType: '4 Cardinal Gateways with Concentric Ramparts',
        significance: 'व्यापारिक घाटे और बौद्धिक संशय से रक्षा।'
      },
      {
        index: 2,
        nameSanskrit: 'अष्टदल प्रज्ञा पद्म',
        nameEnglish: '8-Petal Lotus of Discernment',
        chakraTitle: 'अष्टदल पद्म (8 Petals of Commerce & Intellect)',
        presidingDeity: 'अष्ट मेधा शक्तियाँ',
        mudraShakti: 'पुस्तक मुद्रा',
        yoginiClass: 'बुद्धि योगिनी',
        geometryType: '8 Symmetrical Radial Lotus Petals with Spines',
        significance: 'गणितीय क्षमता, वाक्पटुता और तार्किक विश्लेषण की तीव्रता।'
      },
      {
        index: 3,
        nameSanskrit: 'बुध जादुई वर्ग ग्रिड',
        nameEnglish: '3x3 Mathematical Mercury Magic Square (Sum 24)',
        chakraTitle: '३x३ बुध महाचक्र (Row/Col/Diag Sum = 24)',
        presidingDeity: 'सौम्य बुध नारायण',
        mudraShakti: 'ज्ञान मुद्रा',
        yoginiClass: 'रहस्य सौम्य शक्ति',
        geometryType: '3x3 Magic Grid [9,4,11 / 10,8,6 / 5,12,7]',
        significance: 'शेयर बाजार, व्यापार, लेखन व संचार तंत्र में अभूतपूर्व सफलता।'
      },
      {
        index: 4,
        nameSanskrit: 'केन्द्रीय सौम्य बिन्दु व ब्रां बीज',
        nameEnglish: 'Mercurial Singularity & Braam Seed',
        chakraTitle: 'मध्य बिन्दु एवं एकाक्षरी बुध बीज',
        presidingDeity: 'परम मेधावी बुधदेव',
        mudraShakti: 'अभय-वाणी मुद्रा',
        yoginiClass: 'परम प्रज्ञा शक्ति',
        geometryType: 'Central Singularity Point',
        significance: 'अखण्ड वाक्-सिद्धि और एकाग्रता।'
      }
    ],
    jyotish: {
      rulingPlanet: 'बुध (Mercury)',
      planetSanskrit: 'बुध ग्रह (बुद्धि, वाणी, व्यापार व मामा)',
      friendlyRashis: ['मिथुन (Gemini)', 'कन्या (Virgo)'],
      friendlyNakshatras: ['आश्लेषा', 'ज्येष्ठा', 'रेवती'],
      doshaRemedies: [
        {
          doshaName: 'बुध नीचत्व व वाणी दोष',
          description: 'हकलाना, नर्वस सिस्टम की दुर्बलता, व्यापार में बार-बार लेन-देन में धोखा, परीक्षा में भूल जाना।',
          reliefMechanism: 'कांस्य बुध यन्त्र पर दूर्वा चढ़ाकर बुधवार को बुध अष्टोत्तरशतनामावली का पाठ करें।'
        }
      ],
      lifeAspects: ['व्यापार में भारी मुनाफा', 'परीक्षा व प्रतियोगिता में सफलता', 'सटीक निर्णय क्षमता', 'संचार कौशल'],
      wearOrInstallDirection: 'उत्तर (North) दिशा',
      favorableDay: 'बुधवार (Wednesday)',
      auspiciousTithi: 'शुक्ल पक्ष तृतीया, बुधवार',
      metalPreference: 'कांसा (Bronze) अथवा चांदी',
      beejMantra: 'ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः॥',
      gayatriMantra: 'ॐ सौम्यरूपाय विद्महे वाणेशाय धीमहि तन्नो सौम्यः प्रचोदयात्॥',
      japaCount: 108,
      malaType: 'तुलसी माला अथवा पन्ना-युक्त माला',
      dhyanaSloka: 'पीताम्बरः पीतवपुः किरीटी चतुर्भुजो दण्डधरो गदाभृत्। चर्मासिहस्तः सुमुखो द्विबाहुर्बुधः सदा मे शुभदो भवत्विति॥',
      pratishthaVidhiSummary: [
        '१. हरे वस्त्र पर यन्त्र प्रतिष्ठित करें।',
        '२. हरी मूंग की दाल और दूर्वा दल अर्पित करें।',
        '३. बुध गायत्री मन्त्र का १०८ बार जाप करें।'
      ]
    },
    practicalRemedies: [
      {
        category: 'Career',
        problem: 'दुकान या ऑफिस में ग्राहकों की कमी और बातचीत में प्रभावहीनता।',
        remedyProtocol: 'व्यापारिक गल्ले या टेबल पर बुध यन्त्र रखकर नित्य प्रातः हरी इलायची का भोग लगाएं।'
      }
    ]
  },

  guru_yantra: {
    id: 'guru_yantra',
    taxonomyCategory: 'navagraha',
    lineageAttribution: 'ऋग्वेद बृहस्पति सूक्त एवं बृहत्संहिता',
    nameSanskrit: 'श्री बृहस्पति (गुरु) यन्त्रम्',
    nameHindi: 'गुरु यन्त्र (ज्ञान, धर्म व अखण्ड सौभाग्य)',
    nameEnglish: 'Guru Yantra (Jovian Wisdom & Sovereign Fortune - Sum 27)',
    subTitle: 'The 3x3 Magic Square Matrix of Jupiter (Sum 27)',
    presidingDeity: 'देवाचार्य बृहस्पति (गुरुदेव)',
    tradition: 'वैदिक बृहस्पति परम्परा',
    corePhilosophy: 'समस्त ब्रह्माण्ड का ज्ञान, धर्म, और आध्यात्मिक विस्तार। इसका ३x३ जादुई वर्ग प्रत्येक दिशा से २७ का योग बनाता है, जो सत्ताईस नक्षत्रों के कल्याणकारी आशीर्वाद का परिचायक है।',
    citations: [
      {
        sourceScripture: 'ऋग्वेद (बृहस्पति सूक्तम्)',
        chapterOrVerse: 'मण्डल ४, सूक्त ५०, ऋचा १',
        sanskritSloka: 'यस्तस्तम्भ सहसा विज्मो अन्तान्बृहस्पतिस्त्रिषधस्थो रवेण।\nतं प्रत्नमृषयः सं दिदेयुः पुरो विप्रा दधिरे मन्द्रजिह्वम्॥',
        hindiMeaning: 'जिन्होंने अपने बल से पृथ्वी के सिरों को थाम रखा है, जो तीनों लोकों में गुंजायमान हैं, उन प्राचीन देवगुरु बृहस्पति को हम वन्दन करते हैं।',
        englishMeaning: 'He who sustained the cosmic bounds by His might, the ancient teacher of gods, we venerate the illustrious Brihaspati.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'कनक भूपुर प्राकार',
        nameEnglish: 'Golden Rampart of Divine Grace & 4 Portals',
        chakraTitle: 'भूपुर एवं चार देवगुरु द्वार',
        presidingDeity: 'भगवान देवगुरु बृहस्पति',
        mudraShakti: 'वरद मुद्रा',
        yoginiClass: 'प्रकट गुरु शक्ति',
        geometryType: '4 Cardinal Gateways with Concentric Ramparts',
        significance: 'दुर्भाग्य, निर्धनता और धर्मभ्रष्टता से संरक्षण।'
      },
      {
        index: 2,
        nameSanskrit: 'अष्टदल ब्रह्मविद्या पद्म',
        nameEnglish: '8-Petal Lotus of Transcendental Wisdom',
        chakraTitle: 'अष्टदल पद्म (8 Petals of Spiritual Truth)',
        presidingDeity: 'अष्ट महर्षि शक्तियाँ',
        mudraShakti: 'चिन्मुद्रा',
        yoginiClass: 'ब्रह्म योगिनी',
        geometryType: '8 Symmetrical Radial Lotus Petals with Spines',
        significance: 'वेदांत ज्ञान, गुरु कृपा, और उच्च आध्यात्मिक पद की प्राप्ति।'
      },
      {
        index: 3,
        nameSanskrit: 'बृहस्पति जादुई वर्ग ग्रिड',
        nameEnglish: '3x3 Mathematical Jupiter Magic Square (Sum 27)',
        chakraTitle: '३x३ गुरु महाचक्र (Row/Col/Diag Sum = 27)',
        presidingDeity: 'देवाचार्य बृहस्पति',
        mudraShakti: 'दण्ड-कमण्डलु मुद्रा',
        yoginiClass: 'रहस्य गुरु शक्ति',
        geometryType: '3x3 Magic Grid [10,5,12 / 11,9,7 / 6,13,8]',
        significance: 'सन्तान प्राप्ति, उच्च पदवी, धन-सम्पदा व समाज में सर्वोच्च आदर।'
      },
      {
        index: 4,
        nameSanskrit: 'केन्द्रीय गुरु बिन्दु व ग्रां बीज',
        nameEnglish: 'Jovian Singularity & Graam Seed',
        chakraTitle: 'मध्य बिन्दु एवं एकाक्षरी गुरु बीज',
        presidingDeity: 'परमब्रह्म गुरुदेव',
        mudraShakti: 'अभय-ज्ञान मुद्रा',
        yoginiClass: 'परम कैवल्य शक्ति',
        geometryType: 'Central Singularity Point',
        significance: 'ईश्वरीय साक्षात्कार और आत्मानंद।'
      }
    ],
    jyotish: {
      rulingPlanet: 'बृहस्पति (Jupiter)',
      planetSanskrit: 'गुरु ग्रह (ज्ञान, सन्तान, भाग्य व धर्म)',
      friendlyRashis: ['धनु (Sagittarius)', 'मीन (Pisces)', 'कर्क (Cancer)'],
      friendlyNakshatras: ['पुनर्वसु', 'विशाखा', 'पूर्वाभाद्रपद'],
      doshaRemedies: [
        {
          doshaName: 'गुरु चांडाल दोष व भाग्यहीनता',
          description: 'लगातार बनते काम रुकना, विवाह में भारी अड़चनें, सन्तान सुख में कमी, लीवर व पेट के रोग।',
          reliefMechanism: 'पीतल या स्वर्ण गुरु यन्त्र पर चने की दाल और हल्दी चढ़ाकर गुरुवार को गुरु कवच पढ़ें।'
        }
      ],
      lifeAspects: ['योग्य सन्तान की प्राप्ति', 'प्रशासनिक व न्यायिक सेवा', 'विशाल धन-सम्पत्ति', 'अध्यात्म व तीर्थ लाभ'],
      wearOrInstallDirection: 'उत्तर-पूर्व (ईशान कोण / North-East)',
      favorableDay: 'गुरुवार (Thursday)',
      auspiciousTithi: 'शुक्ल पक्ष एकादशी, गुरु पुष्य योग',
      metalPreference: 'पीतल (Brass), स्वर्ण (Gold) अथवा अष्टधातु',
      beejMantra: 'ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः॥',
      gayatriMantra: 'ॐ गुरुदेवाय विद्महे परब्रह्मणे धीमहि तन्नो गुरुः प्रचोदयात्॥',
      japaCount: 108,
      malaType: 'हल्दी की माला अथवा पीले स्फटिक की माला',
      dhyanaSloka: 'दण्डाक्षमालावरदं कमण्डलुधरं गुरुम्। पीताम्बरधरं सौम्यं ध्यायेद् देवगुरुं सदा॥',
      pratishthaVidhiSummary: [
        '१. पीले वस्त्र पर यन्त्र प्रतिष्ठित करें।',
        '२. पीले कनेर या गेंदे के पुष्प और केसर-चन्दन से तिलक करें।',
        '३. बेसन के लड्डू या पीले फल का भोग लगाएं।'
      ]
    },
    practicalRemedies: [
      {
        category: 'Spiritual',
        problem: 'अध्ययन में मन न लगना, परीक्षा में विफलता और सन्तान प्राप्ति में बाधा।',
        remedyProtocol: 'घर के पूजा स्थल में ईशान कोण में गुरु यन्त्र स्थापित कर गुरुवार को ॐ बृं बृहस्पतये नमः का १०८ बार जाप करें।'
      }
    ]
  },

  shukra_yantra: {
    id: 'shukra_yantra',
    taxonomyCategory: 'navagraha',
    lineageAttribution: 'शुक्र नीति एवं भृगु संहिता',
    nameSanskrit: 'श्री शुक्र यन्त्रम् (भार्गव मण्डल)',
    nameHindi: 'शुक्र यन्त्र (ऐश्वर्य, कला व दांपत्य सुख)',
    nameEnglish: 'Shukra Yantra (Venusian Elegance & Luxury - Sum 30)',
    subTitle: 'The 3x3 Magic Square Matrix of Venus (Sum 30)',
    presidingDeity: 'दैत्याचार्य शुक्र (भार्गव)',
    tradition: 'वैदिक भार्गव परम्परा',
    corePhilosophy: 'सौन्दर्य, विलासिता, प्रेम और संजीवनी विद्या की शक्ति। इसका ३x३ जादुई वर्ग प्रत्येक दिशा से ३० का योग बनाता है, जो तीस मुहूर्तों और सांसारिक भोगों के साथ मोक्ष का संतुलन है।',
    citations: [
      {
        sourceScripture: 'भृगु संहिता',
        chapterOrVerse: 'शुक्र स्तोत्रम्',
        sanskritSloka: 'हिमकुन्दमृणालाभं दैत्यानां परमं गुरुम्।\nसर्वशास्त्रप्रवक्तारं भार्गवं प्रणमाम्यहम्॥',
        hindiMeaning: 'बर्फ, कुन्द पुष्प और कमल के रेशे के समान श्वेत कान्ति वाले, दैत्यों के परम गुरु और समस्त शास्त्रों के ज्ञाता भार्गव शुक्र को मैं नमन करता हूँ।',
        englishMeaning: 'Radiant like the white lotus and jasmine flower, preceptor of sciences, we revere the lustrous sage Shukra.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'कनक-श्वेत भूपुर प्राकार',
        nameEnglish: 'Parchment-Silver Citadel of Grace & 4 Gates',
        chakraTitle: 'भूपुर एवं चार भार्गव द्वार',
        presidingDeity: 'दैत्यगुरु शुक्राचार्य',
        mudraShakti: 'वरद-कमल मुद्रा',
        yoginiClass: 'प्रकट भार्गव शक्ति',
        geometryType: '4 Cardinal Gateways with Concentric Ramparts',
        significance: 'दरिद्रता, दांपत्य कलह और शारीरिक दुर्बलता से रक्षा।'
      },
      {
        index: 2,
        nameSanskrit: 'अष्टदल सौन्दर्य पद्म',
        nameEnglish: '8-Petal Lotus of Auspicious Charms',
        chakraTitle: 'अष्टदल पद्म (8 Petals of Love & Beauty)',
        presidingDeity: 'अष्ट लक्ष्मी-शुक्र शक्तियाँ',
        mudraShakti: 'रस मुद्रा',
        yoginiClass: 'काम योगिनी',
        geometryType: '8 Symmetrical Radial Lotus Petals with Spines',
        significance: 'आकर्षण, कला, संगीत और वैवाहिक जीवन में प्रगाढ़ प्रेम।'
      },
      {
        index: 3,
        nameSanskrit: 'शुक्र जादुई वर्ग ग्रिड',
        nameEnglish: '3x3 Mathematical Venus Magic Square (Sum 30)',
        chakraTitle: '३x३ शुक्र महाचक्र (Row/Col/Diag Sum = 30)',
        presidingDeity: 'भार्गव शुक्र नारायण',
        mudraShakti: 'संजीवनी मुद्रा',
        yoginiClass: 'रहस्य शुक्र शक्ति',
        geometryType: '3x3 Magic Grid [11,6,13 / 12,10,8 / 7,14,9]',
        significance: 'विलासिता, वाहन सुख, आधुनिक गैजेट्स और अटूट धन संपदा।'
      },
      {
        index: 4,
        nameSanskrit: 'केन्द्रीय शुक्र बिन्दु व द्रां बीज',
        nameEnglish: 'Venusian Singularity & Draam Seed',
        chakraTitle: 'मध्य बिन्दु एवं एकाक्षरी शुक्र बीज',
        presidingDeity: 'परम तेजस्वी भार्गव देव',
        mudraShakti: 'महालक्ष्मी मुद्रा',
        yoginiClass: 'परम ऐश्वर्य शक्ति',
        geometryType: 'Central Singularity Point',
        significance: 'संजीवनी ऊर्जा और अमृतमय सौन्दर्य।'
      }
    ],
    jyotish: {
      rulingPlanet: 'शुक्र (Venus)',
      planetSanskrit: 'शुक्र ग्रह (भोग, पत्नी, सौन्दर्य व वाहन)',
      friendlyRashis: ['वृषभ (Taurus)', 'तुला (Libra)', 'मीन (Pisces)'],
      friendlyNakshatras: ['भरणी', 'पूर्वा फाल्गुनी', 'पूर्वाषाढ़ा'],
      doshaRemedies: [
        {
          doshaName: 'शुक्र नीचत्व व वैवाहिक क्लेश',
          description: 'पति-पत्नी में निरन्तर विवाद, शुक्र वीर्य दोष, सुख-सुविधाओं का अभाव, त्वचा संबंधी रोग।',
          reliefMechanism: 'चांदी के शुक्र यन्त्र पर श्वेत चन्दन और इत्र लगाकर शुक्रवार को लक्ष्मी सूक्त पढ़ें।'
        }
      ],
      lifeAspects: ['दांपत्य सुख', 'लग्जरी वाहन व घर', 'फिल्म, फैशन व संगीत में सफलता', 'अखण्ड सौंदर्य'],
      wearOrInstallDirection: 'दक्षिण-पूर्व (आग्नेय कोण / South-East)',
      favorableDay: 'शुक्रवार (Friday)',
      auspiciousTithi: 'शुक्ल पक्ष त्रयोदशी, शरद पूर्णिमा',
      metalPreference: 'चांदी (Silver) अथवा श्वेत धातु',
      beejMantra: 'ॐ द्रां द्रीं द्रौं सः शुक्राय नमः॥',
      gayatriMantra: 'ॐ भृगुपुत्राय विद्महे दिव्यदेहाय धीमहि तन्नो शुक्रः प्रचोदयात्॥',
      japaCount: 108,
      malaType: 'स्फटिक माला अथवा सफेद चन्दन माला',
      dhyanaSloka: 'श्वेताम्बरः श्वेतवपुः किरीटी चतुर्भुजः संयतचित्तवृत्तिः। भृगुप्रियः सर्वकलाप्रदाता शुक्रो मयि श्रेयस्करो भवत्विति॥',
      pratishthaVidhiSummary: [
        '१. सफेद रेशमी वस्त्र पर चांदी का यन्त्र स्थापित करें।',
        '२. सफेद पुष्प और गुलाब का इत्र अर्पित करें।',
        '३. सफेद मिष्ठान (मिश्री या खीर) का भोग लगाएं।'
      ]
    },
    practicalRemedies: [
      {
        category: 'Wealth',
        problem: 'घर में पैसा रुकता न हो और दांपत्य जीवन में कटुता बनी रहे।',
        remedyProtocol: 'बेडरूम के आग्नेय कोण में शुक्र यन्त्र लगाकर शुक्रवार को ॐ शुं शुक्राय नमः का जप करें।'
      }
    ]
  },

  shani_yantra: {
    id: 'shani_yantra',
    taxonomyCategory: 'navagraha',
    lineageAttribution: 'स्कन्द पुराण (काशी खण्ड) एवं शनि चालीसा / शनि उपनिषद्',
    nameSanskrit: 'श्री शनैश्चर यन्त्रम्',
    nameHindi: 'शनि यन्त्र (साढ़ेसाती व ढैय्या शान्ति)',
    nameEnglish: 'Shani Yantra (Saturnian Justice & Karma Balancing - Sum 33)',
    subTitle: 'The 3x3 Magic Square Matrix of Saturn (Sum 33)',
    presidingDeity: 'भगवान शनैश्चर (छायापुत्र / कर्मफलदाता)',
    tradition: 'वैदिक सौर-शनि परम्परा',
    corePhilosophy: 'कर्म का विधान, तपस्या, न्याय और अनुशासन। इसका ३x३ जादुई वर्ग प्रत्येक दिशा से ३३ का योग बनाता है, जो तैंतीस कोटि देवताओं और सत्य के सर्वोच्च अनुशासन का प्रतीक है।',
    citations: [
      {
        sourceScripture: 'स्कन्द पुराणम् (काशी खण्ड)',
        chapterOrVerse: 'शनैश्चर स्तोत्रम्',
        sanskritSloka: 'नीलाञ्जनसमाभासं रविपुत्रं यमाग्रजम्।\nछायामार्तण्डसम्भूतं तं नमामि शनैश्चरम्॥',
        hindiMeaning: 'नीले काजल के समान कान्ति वाले, सूर्य के पुत्र, यमराज के ज्येष्ठ भ्राता और छाया-सूर्य से उत्पन्न भगवान शनैश्चर को मैं नमन करता हूँ।',
        englishMeaning: 'Resplendent like dark blue collyrium, son of the Sun, elder brother of Yama, born of Chhaya, we bow to the dispenser of cosmic justice.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'अभेद्य काल भूपुर प्राकार',
        nameEnglish: 'Iron Rampart of Karmic Protection & 4 Portals',
        chakraTitle: 'भूपुर एवं चार शनि द्वार',
        presidingDeity: 'भगवान शनैश्चर',
        mudraShakti: 'दण्ड मुद्रा',
        yoginiClass: 'प्रकट काल शक्ति',
        geometryType: '4 Cardinal Gateways with Concentric Ramparts',
        significance: 'कंगाली, जेल योग, अकाल संकट और असाध्य रोगों से रक्षा।'
      },
      {
        index: 2,
        nameSanskrit: 'अष्टदल न्याय पद्म',
        nameEnglish: '8-Petal Lotus of Righteous Karma',
        chakraTitle: 'अष्टदल पद्म (8 Petals of Discipline)',
        presidingDeity: 'अष्ट भैरव व यम शक्तियाँ',
        mudraShakti: 'चाप-बाण मुद्रा',
        yoginiClass: 'न्याय योगिनी',
        geometryType: '8 Symmetrical Radial Lotus Petals with Spines',
        significance: 'क्रोध, आलस्य, प्रमाद का नाश और कर्तव्य परायणता।'
      },
      {
        index: 3,
        nameSanskrit: 'शनि जादुई वर्ग ग्रिड',
        nameEnglish: '3x3 Mathematical Saturn Magic Square (Sum 33)',
        chakraTitle: '३x३ शनि महाचक्र (Row/Col/Diag Sum = 33)',
        presidingDeity: 'कर्मफलदाता शनि देव',
        mudraShakti: 'वरद मुद्रा',
        yoginiClass: 'रहस्य काल शक्ति',
        geometryType: '3x3 Magic Grid [12,7,14 / 13,11,9 / 8,15,10]',
        significance: 'साढ़ेसाती, ढैय्या और मारक ग्रह दशा का अमृत में रूपान्तरण।'
      },
      {
        index: 4,
        nameSanskrit: 'केन्द्रीय शनि बिन्दु व प्रां बीज',
        nameEnglish: 'Saturnian Singularity & Praam Seed',
        chakraTitle: 'मध्य बिन्दु एवं एकाक्षरी शनि बीज',
        presidingDeity: 'परम न्यायाधीश शनि देव',
        mudraShakti: 'अभय-मुद्रा',
        yoginiClass: 'परम वैराग्य शक्ति',
        geometryType: 'Central Singularity Point',
        significance: 'सर्वोच्च वैराग्य, मोक्ष और आध्यात्मिक स्थिरता।'
      }
    ],
    jyotish: {
      rulingPlanet: 'शनि (Saturn)',
      planetSanskrit: 'शनि ग्रह (कर्म, आयु, न्याय व सेवक)',
      friendlyRashis: ['मकर (Capricorn)', 'कुम्भ (Aquarius)', 'तुला (Libra)'],
      friendlyNakshatras: ['पुष्य', 'अनुराधा', 'उत्तराभाद्रपद'],
      doshaRemedies: [
        {
          doshaName: 'शनि की साढ़ेसाती, ढैय्या व महादशा',
          description: 'आर्थिक बर्बादी, पैरों व नसों में भीषण दर्द, झूठे आरोप, बार-बार नौकरी छूटना।',
          reliefMechanism: 'लोहे या काले पत्थर के शनि यन्त्र के सामने सरसों के तेल का दीपक जलाकर शनि चालीसा पढ़ें।'
        }
      ],
      lifeAspects: ['मुकदमों में न्याय', 'दीर्घायु व आरोग्यता', 'व्यापारिक स्थायित्व', 'लोहा, तेल व खनिज में लाभ'],
      wearOrInstallDirection: 'पश्चिम (West) दिशा',
      favorableDay: 'शनिवार (Saturday)',
      auspiciousTithi: 'शनिचरी अमावस्या, कृष्ण पक्ष चतुर्दशी',
      metalPreference: 'लोहा (Iron), तांबा अथवा पंचधातु',
      beejMantra: 'ॐ प्रां प्रीं प्रौं सः शनैश्चराय नमः॥',
      gayatriMantra: 'ॐ सूर्यपुत्राय विद्महे छायापुत्राय धीमहि तन्नो मन्दः प्रचोदयात्॥',
      japaCount: 108,
      malaType: 'रुद्राक्ष माला अथवा नीले हकीक की माला',
      dhyanaSloka: 'नीलाम्बरो नीलवपुः किरीटी गृध्रस्थितस्त्रासकरो धनुष्मान्। चतुर्भुजः सूर्यसुतः प्रशान्तः सदास्तु मह्यं वरदः शनीशः॥',
      pratishthaVidhiSummary: [
        '१. काले या नीले वस्त्र पर यन्त्र प्रतिष्ठित करें।',
        '२. काले तिल, नीले अपराजिता के फूल और सरसों का तेल चढ़ाएं।',
        '३. दशरथ कृत शनि स्तोत्र का पाठ करें।'
      ]
    },
    practicalRemedies: [
      {
        category: 'Protection',
        problem: 'शनि की साढ़ेसाती के कारण मानसिक अवसाद और अत्यधिक आर्थिक तंगी।',
        remedyProtocol: 'शनिवार की शाम पीपल के वृक्ष के नीचे शनि यन्त्र रखकर सरसों के तेल का चौमुखा दीपक जलाएं।'
      }
    ]
  },

  rahu_yantra: {
    id: 'rahu_yantra',
    taxonomyCategory: 'navagraha',
    lineageAttribution: 'अथर्ववेद एवं मन्त्र महोदधि',
    nameSanskrit: 'श्री राहु यन्त्रम्',
    nameHindi: 'राहु यन्त्र (कालसर्प दोष व आकस्मिक संकट निवारण)',
    nameEnglish: 'Rahu Yantra (Cosmic Dragon Head Shield - Sum 36)',
    subTitle: 'The 3x3 Magic Square Matrix of Rahu (Sum 36)',
    presidingDeity: 'भगवान राहु (असुरेश्वर)',
    tradition: 'वैदिक राहु परम्परा',
    corePhilosophy: 'माया, भ्रम, और सांसारिक महत्वाकांक्षा का नियमन। इसका ३x३ जादुई वर्ग प्रत्येक दिशा से ३६ का योग बनाता है, जो छत्तीस प्रकार के गुप्त संकटों का निवारण करता है।',
    citations: [
      {
        sourceScripture: 'मन्त्र महोदधिः',
        chapterOrVerse: 'तरङ्ग २०',
        sanskritSloka: 'अर्धकायं महावीर्यं चन्द्रादित्यविमर्दनम्।\nसिंहिकागर्भसम्भूतं तं राहुं प्रणमाम्यहम्॥',
        hindiMeaning: 'आधे शरीर वाले, महान पराक्रमी, सूर्य और चन्द्रमा को विमर्दित (ग्रहण लगाने) करने वाले, सिंहिका के पुत्र राहु देव को मैं नमन करता हूँ।',
        englishMeaning: 'Half-bodied, immensely potent, eclipsing the Sun and Moon, born of Simhika, we bow to Lord Rahu.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'धूम्र भूपुर प्राकार',
        nameEnglish: 'Smoky Citadel & 4 Directional Portals',
        chakraTitle: 'भूपुर एवं चार राहु द्वार',
        presidingDeity: 'भगवान राहुदेव',
        mudraShakti: 'खेटक मुद्रा',
        yoginiClass: 'प्रकट माया शक्ति',
        geometryType: '4 Cardinal Gateways with Concentric Ramparts',
        significance: 'आकस्मिक दुर्घटना, जहर, तंत्र-मंत्र व ऊपरी बाधाओं से रक्षा।'
      },
      {
        index: 2,
        nameSanskrit: 'अष्टदल संहार पद्म',
        nameEnglish: '8-Petal Lotus of Illusion Dispelling',
        chakraTitle: 'अष्टदल पद्म (8 Petals of Maya Piercing)',
        presidingDeity: 'अष्ट सर्प शक्तियाँ (अनन्त, वासुकि, तक्षक आदि)',
        mudraShakti: 'सर्प मुद्रा',
        yoginiClass: 'नाग योगिनी',
        geometryType: '8 Symmetrical Radial Lotus Petals with Spines',
        significance: 'कालसर्प दोष का शमन और बुद्धि से भ्रम का निवारण।'
      },
      {
        index: 3,
        nameSanskrit: 'राहु जादुई वर्ग ग्रिड',
        nameEnglish: '3x3 Mathematical Rahu Magic Square (Sum 36)',
        chakraTitle: '३x३ राहु महाचक्र (Row/Col/Diag Sum = 36)',
        presidingDeity: 'छायाग्रह राहु नारायण',
        mudraShakti: 'असि मुद्रा',
        yoginiClass: 'रहस्य माया शक्ति',
        geometryType: '3x3 Magic Grid [13,8,15 / 14,12,10 / 9,16,11]',
        significance: 'विदेश यात्रा, राजनीति में अभूतपूर्व सफलता और गुप्त धन लाभ।'
      },
      {
        index: 4,
        nameSanskrit: 'केन्द्रीय राहु बिन्दु व भ्रां बीज',
        nameEnglish: 'Rahu Singularity & Bhraam Seed',
        chakraTitle: 'मध्य बिन्दु एवं एकाक्षरी राहु बीज',
        presidingDeity: 'परम मायावी राहुदेव',
        mudraShakti: 'अभय मुद्रा',
        yoginiClass: 'परम संवित् शक्ति',
        geometryType: 'Central Singularity Point',
        significance: 'अखण्ड विजय और अज्ञात भयों से मुक्ति।'
      }
    ],
    jyotish: {
      rulingPlanet: 'राहु (North Node)',
      planetSanskrit: 'राहु छायाग्रह (भ्रम, राजनीति, विदेश व रहस्य)',
      friendlyRashis: ['कुम्भ (Aquarius)', 'वृषभ (Taurus)', 'मिथुन (Gemini)'],
      friendlyNakshatras: ['आर्द्रा', 'स्वाति', 'शतभिषा'],
      doshaRemedies: [
        {
          doshaName: 'कालसर्प दोष व राहु की महादशा',
          description: 'सपने में सर्प दिखना, बनते काम अंतिम क्षण में बिगड़ना, नशा व जुए की लत, मानसिक बेचैनी।',
          reliefMechanism: 'सीसे (Lead) या अष्टधातु के राहु यन्त्र पर नीले पुष्प चढ़ाकर कालसर्प शान्ति मन्त्र जपें।'
        }
      ],
      lifeAspects: ['राजनीति में अप्रत्याशित विजय', 'विदेशी व्यापार', 'अचानक लॉटरी व सट्टे में लाभ', 'षड्यंत्रों से बचाव'],
      wearOrInstallDirection: 'दक्षिण-पश्चिम (नैऋत्य कोण / South-West)',
      favorableDay: 'शनिवार (Saturday) अथवा बुधवार',
      auspiciousTithi: 'अमावस्या, राहु काल में पूजन',
      metalPreference: 'सीसा (Lead) अथवा अष्टधातु',
      beejMantra: 'ॐ भ्रां भ्रीं भ्रौं सः राहवे नमः॥',
      gayatriMantra: 'ॐ शिरोरूपाय विद्महे अमृतेशाय धीमहि तन्नो राहुः प्रचोदयात्॥',
      japaCount: 108,
      malaType: 'गोमेद माला अथवा रुद्राक्ष माला',
      dhyanaSloka: 'नीलाम्बरो नीलवपुः किरीटी करालवक्त्रः खलु सिंहवाहनः। चर्मासिहस्तो वरदश्च राहुः सदास्तु मह्यं भयनाशकारी॥',
      pratishthaVidhiSummary: [
        '१. नीले वस्त्र पर यन्त्र प्रतिष्ठित करें।',
        '२. काले उड़द, सरसों और नीले फूल चढ़ाएं।',
        '३. राहु कवच का पाठ करें।'
      ]
    },
    practicalRemedies: [
      {
        category: 'Protection',
        problem: 'कुंडली में पूर्ण कालसर्प दोष होने से जीवन में हर मोड़ पर संघर्ष।',
        remedyProtocol: 'घर के नैऋत्य कोण में राहु यन्त्र स्थापित कर नित्य ॐ रां राहवे नमः का जप करें।'
      }
    ]
  },

  ketu_yantra: {
    id: 'ketu_yantra',
    taxonomyCategory: 'navagraha',
    lineageAttribution: 'अग्नि पुराण एवं बृहत् पराशर',
    nameSanskrit: 'श्री केतु यन्त्रम्',
    nameHindi: 'केतु यन्त्र (मोक्ष, पराविद्या व विष-निवारण)',
    nameEnglish: 'Ketu Yantra (Cosmic Dragon Tail & Moksha Conduit - Sum 39)',
    subTitle: 'The 3x3 Magic Square Matrix of Ketu (Sum 39)',
    presidingDeity: 'भगवान केतु (ध्वज / मोक्षकारक)',
    tradition: 'वैदिक केतु परम्परा',
    corePhilosophy: 'मोक्ष, वैराग्य, और गूढ़ अंतर्दृष्टि का दाता। इसका ३x३ जादुई वर्ग प्रत्येक दिशा से ३९ का योग बनाता है, जो सम्पूर्ण माया के बंधनों को काटकर आत्म-ज्ञान की ओर ले जाता है।',
    citations: [
      {
        sourceScripture: 'अग्नि पुराणम्',
        chapterOrVerse: 'नवग्रह स्तोत्रम्',
        sanskritSloka: 'पलाशपुष्पसंकाशं तारकाग्रहमस्तकम्।\nरौद्रं रौद्रात्मकं घोरं तं केतुं प्रणमाम्यहम्॥',
        hindiMeaning: 'पलाश के फूल के समान कान्ति वाले, तारा नक्षत्रों के मस्तक रूप, रुद्र स्वरूप और घोर पराक्रमी केतु देव को मैं प्रणाम करता हूँ।',
        englishMeaning: 'Resembling the blazing flame-red palash blossom, crown of the stellar nodes, fierce and endowed with Rudra energy, we salute Ketu.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'ध्वज भूपुर प्राकार',
        nameEnglish: 'Citadel of Ascetic Stillness & 4 Portals',
        chakraTitle: 'भूपुर एवं चार मोक्ष द्वार',
        presidingDeity: 'भगवान केतुदेव',
        mudraShakti: 'ध्वज मुद्रा',
        yoginiClass: 'प्रकट मोक्ष शक्ति',
        geometryType: '4 Cardinal Gateways with Concentric Ramparts',
        significance: 'अज्ञात विषैले जीवों के भय, गुप्त रोगों और मानसिक भटकाव से रक्षा।'
      },
      {
        index: 2,
        nameSanskrit: 'अष्टदल कैवल्य पद्म',
        nameEnglish: '8-Petal Lotus of Enlightenment',
        chakraTitle: 'अष्टदल पद्म (8 Petals of Spiritual Wisdom)',
        presidingDeity: 'अष्ट रुद्र शक्तियाँ',
        mudraShakti: 'गदा मुद्रा',
        yoginiClass: 'कैवल्य योगिनी',
        geometryType: '8 Symmetrical Radial Lotus Petals with Spines',
        significance: 'कुंडलिनी जागरण, तन्त्र-मंत्र की सिद्धि और सूक्ष्म दृष्टि।'
      },
      {
        index: 3,
        nameSanskrit: 'केतु जादुई वर्ग ग्रिड',
        nameEnglish: '3x3 Mathematical Ketu Magic Square (Sum 39)',
        chakraTitle: '३x३ केतु महाचक्र (Row/Col/Diag Sum = 39)',
        presidingDeity: 'मोक्षकारक केतु देव',
        mudraShakti: 'वरद मुद्रा',
        yoginiClass: 'रहस्य मोक्ष शक्ति',
        geometryType: '3x3 Magic Grid [14,9,16 / 15,13,11 / 10,17,12]',
        significance: 'आयुर्वेद, ज्योतिष, गणित और आध्यात्मिक साधना में परम सिद्धि।'
      },
      {
        index: 4,
        nameSanskrit: 'केन्द्रीय केतु बिन्दु व स्रां बीज',
        nameEnglish: 'Ketu Singularity & Sraam Seed',
        chakraTitle: 'मध्य बिन्दु एवं एकाक्षरी केतु बीज',
        presidingDeity: 'परम मोक्षदाता केतुदेव',
        mudraShakti: 'ज्ञान मुद्रा',
        yoginiClass: 'परम निर्वाण शक्ति',
        geometryType: 'Central Singularity Point',
        significance: 'मोक्ष और समाधि का चरम साक्षात्कार।'
      }
    ],
    jyotish: {
      rulingPlanet: 'केतु (South Node)',
      planetSanskrit: 'केतु छायाग्रह (मोक्ष, वैराग्य, गुप्त विद्या व ननिहाल)',
      friendlyRashis: ['वृश्चिक (Scorpio)', 'धनु (Sagittarius)', 'मीन (Pisces)'],
      friendlyNakshatras: ['अश्विनी', 'मघा', 'मूल'],
      doshaRemedies: [
        {
          doshaName: 'केतु की महादशा व त्वचा-नसों के विकार',
          description: 'शरीर में अज्ञात दर्द, त्वचा पर सफेद दाग, अचानक दुर्घटना, काम-धंधे से विरक्ति।',
          reliefMechanism: 'पंचधातु के केतु यन्त्र के सामने बैठकर काले-सफेद तिल मिलाकर तिल के तेल का दीपक जलाएं।'
        }
      ],
      lifeAspects: ['आध्यात्मिक ज्ञान व मोक्ष', 'गूढ़ विज्ञान (ज्योतिष, तन्त्र, योग)', 'शत्रु नाश', 'विषैले जीवों से रक्षा'],
      wearOrInstallDirection: 'उत्तर-पश्चिम (North-West) दिशा',
      favorableDay: 'मंगलवार (Tuesday) अथवा शनिवार',
      auspiciousTithi: 'शुक्ल पक्ष चतुर्दशी',
      metalPreference: 'अष्टधातु अथवा पंचधातु',
      beejMantra: 'ॐ स्रां स्रीं स्रौं सः केतवे नमः॥',
      gayatriMantra: 'ॐ चित्रवर्णाय विद्महे सरूपाय धीमहि तन्नो केतुः प्रचोदयात्॥',
      japaCount: 108,
      malaType: 'लहसुनिया माला (Cat Eye) अथवा रुद्राक्ष माला',
      dhyanaSloka: 'धूम्राभिधो धूम्रवपुः किरीटी गदाधरो गृध्ररथो द्विबाहुः। पशून्विनाशयन् स खलु केतुः प्रसन्नचित्तो वरदो ममास्तु॥',
      pratishthaVidhiSummary: [
        '१. दोरंगे (काले-सफेद) वस्त्र पर यन्त्र स्थापित करें।',
        '२. दोरंगे तिल और सफेद चन्दन चढ़ाएं।',
        '३. केतु कवच का पाठ करें।'
      ]
    },
    practicalRemedies: [
      {
        category: 'Spiritual',
        problem: 'ध्यान में मन न लगना और लगातार अज्ञात बेचैनी होना।',
        remedyProtocol: 'केतु यन्त्र के सम्मुख ॐ कें केतवे नमः का जप कर शनिवार को आवारा कुत्तों को रोटी खिलाएं।'
      }
    ]
  },

  navagraha_yantra: {
    id: 'navagraha_yantra',
    taxonomyCategory: 'navagraha',
    lineageAttribution: 'नारद संहिता एवं नवग्रह स्तोत्र (वेदव्यास)',
    nameSanskrit: 'श्री नवग्रह शान्ति मण्डल यन्त्रम्',
    nameHindi: 'नवग्रह यन्त्र (समस्त ग्रह शान्ति)',
    nameEnglish: 'Navagraha Shanti Yantra (All-Planetary Harmony Mandala)',
    subTitle: 'The Supreme Harmonizer of All 9 Cosmic Grahas and Destiny Karmas',
    presidingDeity: 'नवग्रह देवतागण (सूर्य, सोम, मंगल, बुध, गुरु, शुक्र, शनि, राहु, केतु)',
    tradition: 'समस्त वैदिक ज्योतिष आगम',
    corePhilosophy: 'ब्रह्माण्ड के समस्त ९ ग्रहों का एकीकार। केन्द्र में सूर्य और आठों दिशाओं में अन्य ग्रह स्थित होकर मानव जीवन के सभी चक्रों, प्रारब्ध कर्मों और ग्रह दोषों को शांत कर समग्र समृद्धि प्रदान करते हैं।',
    citations: [
      {
        sourceScripture: 'वेदव्यास विरचित नवग्रह स्तोत्रम्',
        chapterOrVerse: 'फलश्रुति',
        sanskritSloka: 'ब्रह्मा मुरारिस्त्रिपुरान्तकारी भानुः शशी भूमिसुतो बुधश्च।\nगुरुश्च शुक्रः शनिराहुकेतवः सर्वे ग्रहाः शान्तिकरा भवन्तु॥',
        hindiMeaning: 'ब्रह्मा, विष्णु और शिव के साथ-साथ सूर्य, चन्द्र, मंगल, बुध, बृहस्पति, शुक्र, शनि, राहु और केतु—ये सभी नवग्रह मेरे जीवन में परम शान्ति प्रदान करें।',
        englishMeaning: 'May Brahma, Vishnu, Shiva, along with the Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, and Ketu grant all-pervading peace and harmony.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'नवग्रह समरसता भूपुर प्राकार',
        nameEnglish: 'Universal Planetary Citadel & 4 Cardinal Portals',
        chakraTitle: 'भूपुर एवं चार दिशा द्वार',
        presidingDeity: 'समस्त नवग्रह देवतागण',
        mudraShakti: 'अभय-वरद महामुद्रा',
        yoginiClass: 'प्रकट नवग्रह शक्ति',
        geometryType: '4 Cardinal Gateways with Concentric Ramparts',
        significance: 'समस्त ग्रहों के कुप्रभावों, ग्रहण दोषों और विपरीत गोचरों से सम्पूर्ण सुरक्षा।'
      },
      {
        index: 2,
        nameSanskrit: 'द्वादश राशि कमल मण्डल',
        nameEnglish: '12-Petal Zodiac Lotus of 12 Rashis',
        chakraTitle: 'द्वादशदल पद्म (12 Solar Signs / Rashis)',
        presidingDeity: 'द्वादश राशि अधिपति',
        mudraShakti: 'राशि मुद्रा',
        yoginiClass: 'राशि योगिनी',
        geometryType: '12 Symmetrical Radial Lotus Petals with Spines',
        significance: 'बारहों राशियों के जातकों के भाग्य, स्वास्थ्य और कर्म में सामंजस्य।'
      },
      {
        index: 3,
        nameSanskrit: 'अष्टदिक्पाल शान्ति पद्म',
        nameEnglish: '8-Petal Lotus of 8 Cosmic Directions',
        chakraTitle: 'अष्टदल पद्म (8 Cardinal Guardians)',
        presidingDeity: 'अष्टदिक्पाल (इन्द्र, अग्नि, यम, निर्ऋति, वरुण, वायु, कुबेर, ईशान)',
        mudraShakti: 'दिक्पाल मुद्रा',
        yoginiClass: 'दिक्पाल योगिनी',
        geometryType: '8 Symmetrical Radial Lotus Petals with Spines',
        significance: 'आठों दिशाओं से आने वाली ऊर्जा तरंगों का सात्विक स्थिरीकरण।'
      },
      {
        index: 4,
        nameSanskrit: 'नवग्रह अष्टदिशा मण्डल कक्ष',
        nameEnglish: '9 Planetary Shrine Sanctums (Surya + 8 Planets)',
        chakraTitle: 'नवग्रह अधिष्ठान कक्ष (Surya Central + 8 Directional Shrines)',
        presidingDeity: 'नवग्रह अधिदेवता व प्रत्यधिदेवता',
        mudraShakti: 'नवग्रह मुद्रा',
        yoginiClass: 'रहस्य नवग्रह शक्ति',
        geometryType: '9 Planetary Sanctum Nodes with Directional Rays',
        significance: 'कुण्डली के समस्त ग्रहों का एक साथ शुभ प्रभाव में रूपान्तरण।'
      },
      {
        index: 5,
        nameSanskrit: 'केन्द्रीय सौर पराबिन्दु',
        nameEnglish: 'Central Solar Singularity & Primordial Om',
        chakraTitle: 'मध्य बिन्दु एवं अखण्ड ओंकार',
        presidingDeity: 'भगवान सूर्यनारायण (समस्त ग्रहों के चक्रवर्ती सम्राट)',
        mudraShakti: 'महाशांति मुद्रा',
        yoginiClass: 'परा संवित् शक्ति',
        geometryType: 'Central Singularity Point',
        significance: 'अखण्ड शान्ति, राजयोग और सर्वग्रह बाधा निवारण।'
      }
    ],
    jyotish: {
      rulingPlanet: 'समस्त ९ ग्रह (All 9 Planetary Deities)',
      planetSanskrit: 'सम्पूर्ण नवग्रह मण्डल',
      friendlyRashis: ['समस्त १२ राशियां (All 12 Signs)'],
      friendlyNakshatras: ['समस्त २७ नक्षत्र (All 27 Nakshatras)'],
      doshaRemedies: [
        {
          doshaName: 'समस्त ग्रह दोष व दशा सन्धि',
          description: 'कुंडली में जब एक साथ कई ग्रह पीड़ित हों (जैसे शनि की साढ़ेसाती + राहु महादशा + मंगल दोष)।',
          reliefMechanism: 'नवग्रह यन्त्र की नित्य पंचोपचार पूजा कर नवग्रह स्तोत्र का पाठ करने से सभी ग्रहों की पीड़ा शांत होती है।'
        }
      ],
      lifeAspects: ['समस्त प्रकार के संकटों का निवारण', 'पारिवारिक सुख व समृद्धि', 'व्यापार व करियर में उन्नति', 'आध्यात्मिक शांति'],
      wearOrInstallDirection: 'पूर्व (East) अथवा ईशान कोण (North-East)',
      favorableDay: 'रविवार (Sunday) अथवा कोई भी शुभ नक्षत्र',
      auspiciousTithi: 'सर्वार्थ सिद्धि योग, रवि पुष्य, अमृत सिद्धि',
      metalPreference: 'अष्टधातु (Eight-Metal Alloy) अथवा ताम्र',
      beejMantra: 'ॐ ब्रह्मा मुरारिस्त्रिपुरान्तकारी भानुः शशी भूमिसुतो बुधश्च। गुरुश्च शुक्रः शनिराहुकेतवः सर्वे ग्रहाः शान्तिकरा भवन्तु॥',
      gayatriMantra: 'ॐ नवग्रहाय विद्महे शान्तिकराय धीमहि तन्नो ग्रहाः प्रचोदयात्॥',
      japaCount: 108,
      malaType: 'रुद्राक्ष माला अथवा नवग्रह रत्न माला',
      dhyanaSloka: 'नमः सूर्याय सोमाय मङ्गलाय बुधाय च। गुरुशुक्रशनिभ्यश्च राहवे केतवे नमः॥',
      pratishthaVidhiSummary: [
        '१. लाल या पीले रेशमी वस्त्र पर यन्त्र प्रतिष्ठित करें।',
        '२. नवग्रह के नौ धान्य (गेहूं, चावल, मसूर, मूंग, चना, सफेद तिल, उड़द, तिल, कुलथी) अर्पित करें।',
        '३. नवग्रह स्तोत्र का ११ बार पाठ करें।'
      ]
    },
    practicalRemedies: [
      {
        category: 'Spiritual',
        problem: 'जब कुंडली में समझ न आए कि कौन सा ग्रह कष्ट दे रहा है और जीवन में हर काम अटक रहा हो।',
        remedyProtocol: 'घर के पूजा स्थल में नवग्रह यन्त्र स्थापित कर प्रतिदिन सुबह गाय के घी का दीपक जलाकर नवग्रह स्तोत्र का पाठ करें।'
      }
    ]
  },

  durga_bisa_yantra: {
    id: 'durga_bisa_yantra',
    taxonomyCategory: 'protection_raksha',
    lineageAttribution: 'Shakta Tradition / Chandi Kalpa (Mantra Mahodadhi, Shakta Pramoda)',
    nameSanskrit: 'श्रीमहादुर्गा बीसा यन्त्रम्',
    nameHindi: 'दुर्गा बीसा यन्त्र',
    nameEnglish: 'Durga Bisa Yantra (Supreme Protective Armor)',
    subTitle: 'अष्टदल पद्म, बीसा त्रिकोण मण्डल एवं नवार्ण महाबीज कवच',
    presidingDeity: 'भगवती दुर्गा / चण्डिका (Supreme Mother Jagadamba)',
    tradition: 'शाक्त परम्परा (Shakta Tradition)',
    corePhilosophy: 'The Durga Bisa Yantra is the quintessential sacred shield of Goddess Durga, encoding the cosmic victory of Divine Light over the demonic forces of Mahishasura. The term "Bisa" denotes the mystical number 20, symbolizing the complete 20 divine weapons and protective attributes of the Goddess. Its sacred geometry neutralizes all 8 types of catastrophic existential fears (Ashta-Bhaya: theft, malice, fire, wild predators, malevolent occult forces, chronic diseases, planetary afflictions, and premature death).',
    citations: [
      {
        sourceScripture: 'दुर्गासप्तशती / देवी माहात्म्यम्',
        chapterOrVerse: 'अध्याय ४, श्लोक १७',
        sanskritSloka: 'दुर्गे स्मृता हरसि भीतिमशेषजन्तोः स्वस्थैः स्मृता मतिमतीव शुभां ददासि । दारिद्र्यदुःखभयहारिणि का त्वदन्या सर्वोपकारकरणाय सदार्द्रचित्ता ॥',
        hindiMeaning: 'हे माँ दुर्गे! स्मरण करने पर आप सब प्राणियों के भय को हर लेती हैं और स्वस्थ चित्त पुरुषों द्वारा चिन्तन करने पर उन्हें परम कल्याणमयी बुद्धि प्रदान करती हैं। दरिद्रता, दुःख और भय को हरने वाली आपके सिवा दूसरी कौन है जिसका चित्त सबका उपकार करने के लिए सदा दया से द्रवित रहता हो।',
        englishMeaning: 'When remembered in distress, O Mother Durga, You dispel the fears of every living being; when contemplated by the serene, You bestow an intellect full of auspicious virtue. O Dispeller of poverty, suffering, and fear, who else but You has a heart perpetually overflowing with compassion to help all beings!'
      },
      {
        sourceScripture: 'मन्त्र महोदधि',
        chapterOrVerse: 'तरङ्ग १०, श्लोक ५-८',
        sanskritSloka: 'बीसा यन्त्रं प्रवक्ष्यामि सर्वशत्रुनिवारणम् । त्रिकोणे मध्यसंस्थे च नवार्णाक्षरसंयुतम् ॥',
        hindiMeaning: 'समस्त शत्रुओं व भयों का निवारण करने वाले बीसा यन्त्र का वर्णन करते हैं, जिसके मध्य में त्रिकोण व अष्टदल में नवार्ण मन्त्र के दिव्य अक्षरों का न्यास होता है।',
        englishMeaning: 'I expound the Bisa Yantra which eliminates all enemies and fears, containing the sacred triangle in the center and the holy syllables of the Navarna mantra inscribed upon the lotus petals.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'त्रैलोक्यमोहन भूपुर',
        nameEnglish: 'Trailokyamohana Bhupura (Earth Citadel)',
        chakraTitle: 'प्रथम आवरण - भूपुर प्राकार',
        presidingDeity: 'अष्टदिक्पाल एवं अष्टवसु',
        mudraShakti: 'सर्वसंक्षोभिणी मुद्रा',
        yoginiClass: 'प्रकट योगिनी',
        geometryType: 'Three-Tier Stepped Square with 4 Portals',
        significance: 'Protects the spiritual sanctuary from all negative terrestrial energies, planetary disturbances, and malicious intrusion.'
      },
      {
        index: 2,
        nameSanskrit: 'अष्टदल पद्मावरण',
        nameEnglish: 'Ashtadala Lotus Mandala (8 Ogee Petals)',
        chakraTitle: 'द्वितीय आवरण - नवार्ण अष्टदल',
        presidingDeity: 'अष्टमातृका (ब्राह्मी, माहेश्वरी, कौमारी, वैष्णवी, वाराही, नारसिंही, ऐन्द्री, चामुण्डा)',
        mudraShakti: 'सर्वविद्राविणी मुद्रा',
        yoginiClass: 'गुप्त योगिनी',
        geometryType: '8 Canonical Ogee Lotus Petals with Spines',
        significance: 'Consecrated with the 8 divine syllables of Navarna mantra (ऐं, ह्रीं, क्लीं, चा, मुं, डा, यै, विच्चे), destroying the 8 cardinal vices.'
      },
      {
        index: 3,
        nameSanskrit: 'अधोमुख बीसा त्रिकोण मण्डल',
        nameEnglish: 'Bisa Triangle Matrix (Sum of 20)',
        chakraTitle: 'तृतीय आवरण - बीसा यन्त्र मण्डल',
        presidingDeity: 'महादुर्गा शक्ति एवं त्रिदेवी (महासरस्वती, महालक्ष्मी, महाकाली)',
        mudraShakti: 'सर्वाकर्षिणी मुद्रा',
        yoginiClass: 'गुप्ततर योगिनी',
        geometryType: '9-Chamber Sacred Inverted Triangle Grid',
        significance: 'Houses the authentic numerical configuration summing to 20 horizontally, vertically, and diagonally, embodying the 20 divine armors.'
      },
      {
        index: 4,
        nameSanskrit: 'महादुर्गा दुं बिन्दु चक्र',
        nameEnglish: 'Maha Durga Bindu Sanctum',
        chakraTitle: 'चतुर्थ आवरण - परब्रह्म बिन्दु',
        presidingDeity: 'भगवती महादुर्गा जगदम्बा',
        mudraShakti: 'सर्ववशंकरी मुद्रा',
        yoginiClass: 'परापरातिरहस्य योगिनी',
        geometryType: 'Sacred Parama Bindu with Dum Beeja',
        significance: 'The supreme focal point of invincible Shakti consciousness. Concentrated with the primordial seed syllable "दुं" (Dum).'
      }
    ],
    jyotish: {
      rulingPlanet: 'राहु, केतु एवं मङ्गल (Rahu, Ketu & Mars)',
      planetSanskrit: 'छायाग्रहौ राहु-केतू भौमश्च',
      friendlyRashis: ['Aries', 'Scorpio', 'Leo', 'Cancer'],
      friendlyNakshatras: ['Krittika', 'Magha', 'Ardra', 'Mula'],
      doshaRemedies: [
        {
          doshaName: 'Kaal Sarp & Rahu Affliction (कालसर्प व राहु दोष)',
          description: 'Mitigates sudden obstacles, fears, nightmares, and negative psychic vulnerability caused by Rahu/Ketu nodes.',
          reliefMechanism: 'Mother Durgas divine armor burns through astral shadows and grants unwavering mental stability.'
        },
        {
          doshaName: 'Nazar & Evil Eye (दृष्टि दोष व शत्रु बाधा)',
          description: 'Protects home, family, and enterprise from malevolent jealousy, curses, and evil eye.',
          reliefMechanism: 'The 20-sum protective geometry reflects malicious thought-forms away from the native.'
        }
      ],
      lifeAspects: ['Complete Protection', 'Fearlessness', 'Victory in Legal Battles', 'Business Prosperity', 'Removal of Black Magic'],
      wearOrInstallDirection: 'North or East (उत्तर अथवा पूर्व दिशा)',
      favorableDay: 'Tuesday or Friday (मङ्गलवार अथवा शुक्रवार, विशेषतः अष्टमी व नवमी)',
      auspiciousTithi: 'Shukla Ashtami, Navami, and all 9 nights of Navaratri',
      metalPreference: 'Pure Copper (शुद्ध ताम्र) or Ashtadhatu (अष्टधातु)',
      beejMantra: 'ॐ दुं दुर्गायै नमः ॥',
      gayatriMantra: 'ॐ कात्यायन्यै विद्महे कन्याकुमार्यै धीमहि तन्नो दुर्गा प्रचोदयात् ॥',
      japaCount: 108,
      malaType: 'Lal Chandan (Red Sandalwood) or Rudraksha Mala',
      dhyanaSloka: 'विद्युद्दामसमप्रभां मृगपतिस्कन्धस्थितां भीषणां कन्याभिः करवालखेटविलसद्धस्ताभिरासेविताम् । हस्तैश्चक्रगदासिखेटविशिखांश्चापं गुणं तर्जनीं विभ्राणामनलात्मिकां शशिधरां दुर्गां त्रिनेत्रां भजे ॥',
      pratishthaVidhiSummary: [
        'Place the Yantra on a clean red silk cloth facing East or North on a Tuesday or Shukla Ashtami.',
        'Purify with sacred Ganga water, Panchamrit, and offer red hibiscus (Gudhal) flowers and vermilion (Kumkum).',
        'Light a cow ghee lamp and fragrant Guggal/Camphor incense.',
        'Chant the Navarna mantra (ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे) 108 times, invoking Mother Durgas eternal protection.'
      ]
    },
    practicalRemedies: [
      {
        category: 'Protection',
        problem: 'जब व्यापार में निरंतर घाटा, नजर दोष, और अकारण शत्रु भय से प्रगति रुक रही हो।',
        remedyProtocol: 'मंगलवार या शुक्ल पक्ष की अष्टमी को दुर्गा बीसा यन्त्र को उत्तर या पूर्व दिशा में लाल रेशमी वस्त्र पर स्थापित करें। प्रतिदिन गाय के घी का दीपक जलाकर "ॐ दुं दुर्गायै नमः" का १०८ बार जप करें।'
      },
      {
        category: 'Spiritual',
        problem: 'अकस्मात् भय, मानसिक अशान्ति व बुरे स्वप्नों से मुक्ति हेतु।',
        remedyProtocol: 'यन्त्र के समक्ष नवार्ण मन्त्र "ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे" का एक माला नित्य जप करें और लाल चन्दन का तिलक लगाएं।'
      }
    ]
  },

  sudarshana_chakra_yantra: {
    id: 'sudarshana_chakra_yantra',
    taxonomyCategory: 'protection_raksha',
    lineageAttribution: 'Vaishnava Pancharatra Agama (Ahirbudhnya Samhita, Sudarshana Shatakam)',
    nameSanskrit: 'श्रीमहासुदर्शन चक्र यन्त्रम्',
    nameHindi: 'सुदर्शन चक्र यन्त्र',
    nameEnglish: 'Sudarshana Chakra Yantra (Cosmic Disc of Protection)',
    subTitle: 'अग्निशिखा मण्डल, द्वादशदल पद्म, वैष्णव षट्कोण एवं सहस्रार चक्र',
    presidingDeity: 'भगवान् महाविष्णु / सुदर्शन चक्र रूपी नरसिंह (Lord Sudarshana)',
    tradition: 'वैष्णव पाञ्चरात्र परम्परा (Vaishnava Pancharatra)',
    corePhilosophy: 'The Sudarshana Chakra Yantra represents the terrifyingly luminous, invincible disc weapon of Bhagavan Maha Vishnu. "Su" signifies auspicious cosmic vision and "Darshana" denotes supreme divine perception. It embodies the cosmic time-wheel (Kala Chakra), the supreme purifying solar fire, and the ultimate weapon of defense that cuts through all psychic hostility, black magic (Abhichara), untreatable diseases, and existential dread.',
    citations: [
      {
        sourceScripture: 'अहिर्बुध्न्य संहिता (Ahirbudhnya Samhita)',
        chapterOrVerse: 'अध्याय ३३, श्लोक १-२',
        sanskritSloka: 'सुदर्शनं महाचक्रं सर्वशत्रुनिवर्हणम् । कोटिसूर्यप्रतीकाशं कालानलसमप्रभम् ॥ सर्वदुष्टप्रशमनं सर्वसर्पविषारिहम् । तस्य स्मरणमात्रेण सर्वपापैः प्रमुच्यते ॥',
        hindiMeaning: 'करोड़ों सूर्यों के समान तेजस्वी एवं प्रलयकालीन कालानल के सदृश दीप्तिमान महासुदर्शन चक्र समस्त शत्रुओं और दुष्ट शक्तियों का संहार करने वाला है। इसके स्मरण मात्र से जीव सभी पापों, विषैले प्रभावों और भय से तत्काल मुक्त हो जाता है।',
        englishMeaning: 'The great Sudarshana Chakra, effulgent like ten million blazing suns and radiant as the apocalyptic cosmic fire, annihilates all adversaries and evil forces. Merely by contemplating this sacred disc, one is instantaneously liberated from all sins, toxins, and fear.'
      },
      {
        sourceScripture: 'सुदर्शन शतकम् (वेदान्तदेशिक / कूरनारायण)',
        chapterOrVerse: 'श्लोक १',
        sanskritSloka: 'श्रीमत्पञ्चायुधेशः प्रदिशतु कुशलं कोटिसूर्यप्रकाशः सुग्रीवस्याभयदो रणभुवि दनुजाञ्जीवहीनांश्चकार । विष्णोर्हस्ते विभातीत्यतुलितमहिमा दैत्यदर्पप्रहर्ता चक्रः पायात्त्रिलोकीमखिलभयहरः सर्वदा सर्वतो नः ॥',
        hindiMeaning: 'करोड़ों सूर्यों के समान प्रकाशवान, भगवान् विष्णु के हाथों में सुशोभित, दैत्यों के दर्प को नष्ट करने वाला और तीनों लोकों के समस्त भयों को हरने वाला सुदर्शन चक्र सर्वदा सब प्रकार से हमारी रक्षा करे।',
        englishMeaning: 'May the glorious Lord of the five divine weapons, radiant as ten million suns, shining in the hand of Lord Vishnu, destroyer of demonic pride and dispeller of all fear in the three worlds, protect us at all times and from all quarters.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'वैष्णव प्राकार भूपुर',
        nameEnglish: 'Vaishnava Prakara Bhupura (Earth Enclosure)',
        chakraTitle: 'प्रथम आवरण - चतुर्द्वार भूपुर',
        presidingDeity: 'चतुरायुध (शङ्ख, चक्र, गदा, पद्म)',
        mudraShakti: 'वैष्णवी मुद्रा',
        yoginiClass: 'प्रकट योगिनी',
        geometryType: 'Three-Tier Stepped Square with 4 Gateways',
        significance: 'Fortified rampart guarded by Lord Vishnus four cardinal weapons, keeping negative spirits and discord outside.'
      },
      {
        index: 2,
        nameSanskrit: 'सहस्रार अग्निशिखा मण्डल',
        nameEnglish: 'Sahasradhara Fire Ring (24 Flames)',
        chakraTitle: 'द्वितीय आवरण - सौर ज्वाला मण्डल',
        presidingDeity: 'कालाग्नि रुद्र एवं द्वादशादित्य',
        mudraShakti: 'विद्युन्मुद्रा',
        yoginiClass: 'गुप्त योगिनी',
        geometryType: '24 Outer Dynamic Flame Rays',
        significance: 'Radiates cosmic solar heat that vaporizes dark occult vibrations, evil eye, and chronic energetic parasites.'
      },
      {
        index: 3,
        nameSanskrit: 'द्वादशदल कमलावरण',
        nameEnglish: 'Dwadashadala Lotus (12 Ogee Petals)',
        chakraTitle: 'तृतीय आवरण - द्वादशाक्षर मन्त्र पद्म',
        presidingDeity: 'द्वादश व्यूह विष्णु (केशव से दामोदर तक)',
        mudraShakti: 'पद्म मुद्रा',
        yoginiClass: 'गुप्ततर योगिनी',
        geometryType: '12 Ogee Petals with Longitudinal Spines',
        significance: 'Inscribed with the 12 sacred syllables of the Sudarshana Mahamantra (ॐ न मो भ ग व ते सु द र्श ना य).'
      },
      {
        index: 4,
        nameSanskrit: 'वैष्णव षट्कोण मण्डल',
        nameEnglish: 'Vaishnava Hexagram Matrix',
        chakraTitle: 'चतुर्थ आवरण - षट्कोण मण्डल',
        presidingDeity: 'महाविष्णु एवं श्री नरसिंह',
        mudraShakti: 'गरुड़ मुद्रा',
        yoginiClass: 'सम्प्रदाय योगिनी',
        geometryType: 'Two Interlocking Equilateral Triangles',
        significance: 'Embodying the union of Purusha and Prakriti, inscribed with Vishnu seed syllables (ॐ, क्लीं, कृष्णाय, गोविन्दाय, हुं, फट्).'
      },
      {
        index: 5,
        nameSanskrit: 'अष्टार चक्र एवं सहस्रार बिन्दु',
        nameEnglish: 'Sudarshana Whirling Disc & Core Bindu',
        chakraTitle: 'पञ्चम आवरण - सहस्रार महाबिन्दु',
        presidingDeity: 'भगवान् महासुदर्शन',
        mudraShakti: 'चक्र मुद्रा',
        yoginiClass: 'परातिरहस्य योगिनी',
        geometryType: '8-Spoke Dynamic Disc with Central Bindu',
        significance: 'The core whirling wheel of cosmic time and invincible weapon power inscribed with "सहस्रार हुं फट्".'
      }
    ],
    jyotish: {
      rulingPlanet: 'सूर्य एवं मङ्गल (Sun & Mars)',
      planetSanskrit: 'सूर्यो भौमश्च',
      friendlyRashis: ['Leo', 'Aries', 'Scorpio', 'Sagittarius'],
      friendlyNakshatras: ['Krittika', 'Uttara Phalguni', 'Uttara Ashadha', 'Chitra'],
      doshaRemedies: [
        {
          doshaName: 'Surya & Manglik Dosha (सूर्य व मङ्गल दोष)',
          description: 'Counters aggressive vitality depletion, heart ailments, blood disorders, and discord caused by combust planets.',
          reliefMechanism: 'Sudarshanas solar purifying rays restore righteous vigor and harmonize planetary heat.'
        },
        {
          doshaName: 'Abhichara & Poisonous Enmity (शत्रु कृत अभिचार व विष दोष)',
          description: 'Neutralizes black magic, court litigation, and toxic psychic sabotage.',
          reliefMechanism: 'The flaming disc cuts through malevolent energetic ties and turns hostility into dust.'
        }
      ],
      lifeAspects: ['Total Invulnerability', 'Victory over Adversaries', 'Relief from Chronic Illness', 'Destruction of Black Magic'],
      wearOrInstallDirection: 'East (पूर्व दिशा)',
      favorableDay: 'Wednesday, Sunday, or Ekadashi (बुधवार, रविवार, एकादशी)',
      auspiciousTithi: 'Shukla Ekadashi, Purnima, and Solar festivals',
      metalPreference: 'Pure Copper (शुद्ध ताम्र) or Gold-plated Bronze',
      beejMantra: 'ॐ सहस्रार हुं फट् ॥',
      gayatriMantra: 'ॐ सुदर्शनाय विद्महे महाज्वालाय धीमहि तन्नश्चक्रः प्रचोदयात् ॥',
      japaCount: 108,
      malaType: 'Tulsi or White Sandalwood Mala',
      dhyanaSloka: 'शङ्खं चक्रं च चापं परशुमसिमिषुं शूलपाशाङ्कुशाग्नीन् बिभ्राणं दोर्भिरुग्रैः पृथुतरजठरं भीषदंष्ट्रं त्रिनेत्रम् । ज्वालाकेशं त्रिनेत्रं ज्वलदनलसमं सर्वशत्रुप्रमथिं वन्दे चक्राधिराजं नतजनशरणं पातु मां चक्रपाणिः ॥',
      pratishthaVidhiSummary: [
        'Install on a clean yellow or white silk altar facing East.',
        'Perform Abhishekam with pure water, milk, and Tulsi leaves.',
        'Offer yellow flowers, sandalwood paste, and light a ghee lamp with camphor.',
        'Chant the Maha Sudarshana mantra (ॐ नमो भगवते महासुदर्शनाय हुं फट्) 108 times.'
      ]
    },
    practicalRemedies: [
      {
        category: 'Protection',
        problem: 'असाध्य रोग, तंत्र-बाधा, गुप्त शत्रु उपद्रव एवं न्यायालयी विवादों में फंसे होने पर।',
        remedyProtocol: 'बुधवार या एकादशी के दिन सुदर्शन चक्र यन्त्र को पूर्व दिशा में स्थापित करें। तुलसी पत्र व पीले पुष्प अर्पित कर "ॐ सहस्रार हुं फट्" का १०८ बार जप करें।'
      },
      {
        category: 'Health',
        problem: 'दीर्घकालिक शारीरिक व्याधियों व प्राणिक ऊर्जा के ह्रास की स्थिति में।',
        remedyProtocol: 'प्रातः सूर्योदय के समय यन्त्र के समक्ष बैठकर महासुदर्शन अष्टकम् या सुदर्शन शतकम् का श्रद्धापूर्वक पाठ करें।'
      }
    ]
  },

  panchamukhi_hanuman_yantra: {
    id: 'panchamukhi_hanuman_yantra',
    taxonomyCategory: 'protection_raksha',
    lineageAttribution: 'Sudarshana Samhita / Agastya Samhita (Panchamukhi Hanuman Kavacham)',
    nameSanskrit: 'श्रीपञ्चमुखी हनुमान् यन्त्रम्',
    nameHindi: 'पंचमुखी हनुमान यन्त्र',
    nameEnglish: 'Panchamukhi Hanuman Yantra (Five-Faced Guardian Cosmogram)',
    subTitle: 'दशदल पद्म, पञ्चकोण मण्डल, पञ्चमुख कवच एवं रुद्रावतार महाबीज',
    presidingDeity: 'श्रीपञ्चमुखी हनुमान् (Five-Faced Sri Hanuman - Rudravatara)',
    tradition: 'वैष्णव-शैव समन्वित मारुति परम्परा (Maruti Upasana)',
    corePhilosophy: 'The Panchamukhi Hanuman Yantra embodies the supreme multidirectional defensive manifestation assumed by Lord Hanuman to extinguish the five lamps of Ahiravana simultaneously. Each of the five faces guards a specific cardinal dimension and neutralizes distinct spiritual and physical threats: East (Vanara) eliminates sins and grants purity; South (Narasimha) eradicates fear of spirits and planetary evils; West (Garuda) destroys poisons and negative sorcery; North (Varaha) bestows material prosperity and repels black magic; Zenith (Hayagriva) grants transcendental knowledge and speech mastery.',
    citations: [
      {
        sourceScripture: 'सुदर्शन संहिता / पञ्चमुख हनुमत्कवचम्',
        chapterOrVerse: 'कवच प्रस्तावना, श्लोक १-२',
        sanskritSloka: 'पञ्चवक्त्रं महाभीमं त्रिपञ्चनयनैर्युतम् । बाहुभिर्दशभिर्युक्तं सर्वकामार्थसिद्धिदम् ॥ पूर्वं तु वानरं वक्त्रं कोटिसूर्यसमप्रभम् । दक्षिणं नारसिंहं तु महाभीषणमद्भुतम् ॥',
        hindiMeaning: 'पाँच मुखों, पंद्रह नेत्रों और दस विशाल भुजाओं से युक्त, समस्त कामनाओं और अर्थ-सिद्धि को देने वाले भगवान् पंचमुखी हनुमान् जी का ध्यान करें। जिनका पूर्व मुख वानर रूपी है जो करोड़ों सूर्यों के समान तेजस्वी है, और दक्षिण मुख अति भयंकर अद्भुत नृसिंह रूपी है।',
        englishMeaning: 'Meditate upon Lord Panchamukhi Hanuman, possessing five divine faces, fifteen eyes, and ten mighty arms, the granter of all desires and spiritual ends. His eastern face is that of the sacred Vanara blazing like ten million suns, and His southern face is the fiercely awe-inspiring form of Lord Narasimha.'
      },
      {
        sourceScripture: 'अगस्त्य संहिता',
        chapterOrVerse: 'हनुमत्कल्प, श्लोक १५',
        sanskritSloka: 'पश्चिमं गारुडं वक्त्रं वक्रतुण्डं महाबलम् । उत्तरं सौकरं वक्त्रं कृष्णं दीप्तं नभःसमम् । ऊर्ध्वं हयाननं घोरं दानवान्तकरं परम् ॥',
        hindiMeaning: 'पश्चिम मुख महाबली गरुड़ का है जो सर्पविष विनाशक है, उत्तर मुख वराह का है जो दीप्तिमान कृष्ण वर्ण है, और ऊर्ध्व मुख हयग्रीव का है जो दैत्यों का संहार करने वाला और विद्या का दाता है।',
        englishMeaning: 'The western face is that of mighty Garuda dispelling all poisons; the northern face is that of radiant Varaha the Boar; and the upward face is that of Hayagriva the Horse, destroyer of demons and bestower of supreme wisdom.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'अभेद्य वज्र भूपुर',
        nameEnglish: 'Vajra Bhupura (Stepped Citadel)',
        chakraTitle: 'प्रथम आवरण - वज्र प्राकार',
        presidingDeity: 'अष्ट दिक्पाल एवं एकादश रुद्र',
        mudraShakti: 'वज्र मुद्रा',
        yoginiClass: 'प्रकट योगिनी',
        geometryType: 'Three-Tier Stepped Square with 4 Portals',
        significance: 'Protects the native from all malefic astral disturbances, negative entities, and nightmares.'
      },
      {
        index: 2,
        nameSanskrit: 'दशदल कमलावरण',
        nameEnglish: 'Dashadala Lotus (10 Ogee Petals)',
        chakraTitle: 'द्वितीय आवरण - दशाक्षर मन्त्र मण्डल',
        presidingDeity: 'दश दिशापाल एवं मारुति शक्तियाँ',
        mudraShakti: 'अभय मुद्रा',
        yoginiClass: 'गुप्त योगिनी',
        geometryType: '10 Ogee Lotus Petals with Spines',
        significance: 'Consecrated with the 10-syllable protective mantra (ॐ ह्रां ह्रीं ह्रूं ह्रैं ह्रौं ह्रः हुं फट् स्वाहा).'
      },
      {
        index: 3,
        nameSanskrit: 'पञ्चमुख मण्डल (पञ्चकोण)',
        nameEnglish: 'Pancha-Mukha Pentagram Matrix',
        chakraTitle: 'तृतीय आवरण - पञ्चमुख मण्डल',
        presidingDeity: 'पञ्चमुख (वानर, नृसिंह, गरुड़, वराह, हयग्रीव)',
        mudraShakti: 'गदा मुद्रा',
        yoginiClass: 'गुप्ततर योगिनी',
        geometryType: 'Interlocking 5-Pointed Star and Pentagon',
        significance: 'Houses the 5 divine faces: वानर (ह्रां), नृसिंह (ह्रीं), गरुड़ (ह्रूं), वराह (ह्रैं), हयग्रीव (ह्रौं).'
      },
      {
        index: 4,
        nameSanskrit: 'रुद्रावतार हनुमद्-बिन्दु',
        nameEnglish: 'Rudravatara Hanuman Bindu Peetha',
        chakraTitle: 'चतुर्थ आवरण - मारुति महाबिन्दु',
        presidingDeity: 'श्रीरामदूत पवनपुत्र हनुमान्',
        mudraShakti: 'महामुद्रा',
        yoginiClass: 'परापरातिरहस्य योगिनी',
        geometryType: 'Central Radiant Gold Core with Bindu',
        significance: 'Houses the core seed "ॐ हं हनुमते रुद्रात्मकाय", awakening boundless courage, physical vigor, and devotion.'
      }
    ],
    jyotish: {
      rulingPlanet: 'मङ्गल एवं शनि (Mars & Saturn)',
      planetSanskrit: 'भौमः शनिश्च',
      friendlyRashis: ['Aries', 'Scorpio', 'Capricorn', 'Aquarius'],
      friendlyNakshatras: ['Mrigashirsha', 'Chitra', 'Dhanishta', 'Anuradha'],
      doshaRemedies: [
        {
          doshaName: 'Shani Saadhe Saati & Dhaiya (शनि साढ़ेसाती व ढैय्या)',
          description: 'Mitigates the severe trials, delays, and karmic pressure of Saturn by Lord Hanumans grace.',
          reliefMechanism: 'Lord Hanuman is the singular authority whose devotees Saturn pledged never to harm.'
        },
        {
          doshaName: 'Pretha Badha & Phobias (भूत-प्रेत बाधा व भय दोष)',
          description: 'Eradicates psychic disturbances, nocturnal terror, depression, and loss of confidence.',
          reliefMechanism: 'The fierce combination of Narasimha and Garuda faces completely incinerates parasitic entities.'
        }
      ],
      lifeAspects: ['Invincible Willpower', 'Physical Stamina', 'Freedom from Phobias', 'Relief from Shani Afflictions', 'Spiritual Purity'],
      wearOrInstallDirection: 'South or South-West (दक्षिण अथवा नैऋत्य दिशा)',
      favorableDay: 'Tuesday or Saturday (मङ्गलवार अथवा शनिवार)',
      auspiciousTithi: 'Hanuman Jayanti, Chaitra Purnima, and Shukla Chaturdashi',
      metalPreference: 'Pure Copper (शुद्ध ताम्र) or Panchadhatu (पञ्चधातु)',
      beejMantra: 'ॐ हं हनुमते रुद्रात्मकाय हुं फट् ॥',
      gayatriMantra: 'ॐ आञ्जनेयाय विद्महे वायुपुत्राय धीमहि तन्नो हनुमत् प्रचोदयात् ॥',
      japaCount: 108,
      malaType: 'Rudraksha or Red Coral (Munga) Mala',
      dhyanaSloka: 'वन्दे वानरनारसिंहखगराट्क्रोडाश्ववक्त्रान्वितं दिव्यालङ्करणं त्रिपञ्चनयनं देदीप्यमानं रुचा । हस्ताब्जैरसिखेटपुस्तकसुधाकुम्भाङ्कुशादीन् वरान् खट्वाङ्गं हलमुद्गरं च दधतं भक्तेष्टदं मारुतिम् ॥',
      pratishthaVidhiSummary: [
        'Place on a clean altar facing South or East on a Tuesday morning.',
        'Anoint with Sindoor (vermilion) mixed with jasmine (Chameli) oil.',
        'Offer red flowers, Tulsi leaves, and boondi/jaggery-gram Prasadam.',
        'Chant the Panchamukhi Hanuman Kavacham or Beej mantra 108 times.'
      ]
    },
    practicalRemedies: [
      {
        category: 'Protection',
        problem: 'शनि साढ़ेसाती, ढैय्या, अज्ञात भय एवं नकारात्मक प्रेत बाधा से ग्रसित होने पर।',
        remedyProtocol: 'मंगलवार या शनिवार को दक्षिण या पूर्व दिशा में यन्त्र स्थापित कर चमेली के तेल व सिन्दूर का तिलक करें। "ॐ हं हनुमते रुद्रात्मकाय हुं फट्" का १०८ बार जप कर गुड़-चने का भोग लगाएं।'
      },
      {
        category: 'Career',
        problem: 'आत्मविश्वास की कमी, कार्य में बार-बार असफलता एवं भय के कारण निर्णय न ले पाने पर।',
        remedyProtocol: 'पंचमुखी हनुमान कवच का प्रतिदिन प्रातःकाल यन्त्र के समक्ष पाठ करें और लाल चन्दन या मूंगा माला धारण करें।'
      }
    ]
  },

  pratyangira_yantra: {
    id: 'pratyangira_yantra',
    taxonomyCategory: 'protection_raksha',
    lineageAttribution: 'Atharvaveda Parishishta / Pratyangira Kalpa (Meru Tantra, Shankhayana Tantra)',
    nameSanskrit: 'श्रीमहाविपरीत प्रत्यङ्गिरा यन्त्रम्',
    nameHindi: 'प्रत्यङ्गिरा यन्त्र',
    nameEnglish: 'Maha Viparita Pratyangira Yantra (Reversal of Malice Cosmogram)',
    subTitle: 'अग्निशिखा, षोडशदल, अष्टदल, शरभ-षट्कोण एवं क्षौं महाबीज',
    presidingDeity: 'महाविपरीत प्रत्यङ्गिरा देवी / अपराजिता (Lion-Faced Goddess Pratyangira)',
    tradition: 'शाक्त एवं आथर्वण परम्परा (Atharvaveda & Shakta)',
    corePhilosophy: 'The Pratyangira Yantra (Maha Viparita Pratyangira) is the supreme esoteric cosmogram of the lion-headed Goddess born from the third eye of Lord Shiva-Sharabha to pacify the apocalyptic fury of Lord Narasimha. "Prati-Angirasa" signifies the reverse transmission of all negative sorcery, curses, evil eyes, and psychic hostility back to their source of origin. It is the ultimate weapon of defensive invulnerability, eradicating Krityas (occult attacks), legal harassment, and psychic entrapment.',
    citations: [
      {
        sourceScripture: 'प्रत्यङ्गिरा कल्प (अथर्ववेद परिशिष्ट)',
        chapterOrVerse: 'पटल १, श्लोक ३-४',
        sanskritSloka: 'ॐ अस्य श्रीमहाविपरीतप्रत्यङ्गिरामन्त्रस्य अङ्गिरा ऋषिः, अनुष्टुप् छन्दः, श्रीमहाविपरीतप्रत्यङ्गिरा देवता, क्षौं बीजम्, ह्रीं शक्तिः, क्लीं कीलकम्, सर्वशत्रुविनाशार्थे जपे विनियोगः ॥',
        hindiMeaning: 'इस महाविपरीत प्रत्यङ्गिरा मन्त्र के अङ्गिरा ऋषि हैं, अनुष्टुप् छन्द है, स्वयं महाविपरीत प्रत्यङ्गिरा देवी इष्टदेवता हैं, "क्षौं" बीज है, "ह्रीं" शक्ति है, "क्लीं" कीलक है तथा समस्त शत्रुओं, अभिचार कर्मों और विघ्नों के समूल नाश हेतु इसका प्रयोग किया जाता है।',
        englishMeaning: 'Of this Sri Maha Viparita Pratyangira mantra, the Seer is Rishi Angirasa, the meter is Anushtup, the presiding deity is Sri Maha Viparita Pratyangira, the seed syllable is "Kshraum", the Shakti is "Hreem", the pin is "Kleem", and its recitation is dedicated to the total reversal and annihilation of all hostile malice and sorcery.'
      },
      {
        sourceScripture: 'मेरु तन्त्र (Meru Tantra)',
        chapterOrVerse: 'प्रकाश ३२, श्लोक ९',
        sanskritSloka: 'सिंहवक्त्रां महारौद्रीं चन्द्रार्धकृतशेखराम् । चतुर्भुजां त्रिनेत्रां च कपालशूलधारिणीम् ॥ प्रत्यङ्गिरां महादेवीं सर्वोपद्रवनाशिनीम् । भजेऽहं सर्वशत्रूणां संहारकरणक्षमाम् ॥',
        hindiMeaning: 'सिंह मुख वाली, अति भयंकर, अर्धचन्द्र को मस्तक पर धारण करने वाली, चार भुजाओं और तीन नेत्रों वाली, हाथ में कपाल व त्रिशूल धारण करने वाली तथा समस्त उपद्रवों व शत्रुओं का संहार करने में समर्थ महादेवी प्रत्यङ्गिरा का मैं भजन करता हूँ।',
        englishMeaning: 'I adore Goddess Pratyangira, lion-faced, supremely formidable, adorned with the crescent moon on Her crest, four-armed and three-eyed, bearing a skull-cup and trident, capable of completely destroying all adversities and hostile forces.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'अभेद्य वज्र भूपुर',
        nameEnglish: 'Fortified Vajra Bhupura (Citadel)',
        chakraTitle: 'प्रथम आवरण - चतुर्द्वार भूपुर',
        presidingDeity: 'दश भैरव एवं क्षेत्रपाल',
        mudraShakti: 'शूल मुद्रा',
        yoginiClass: 'प्रकट योगिनी',
        geometryType: 'Three-Tier Stepped Square with 4 Gates',
        significance: 'Impenetrable defensive wall sealing off all hostile spiritual interventions and occult breaches.'
      },
      {
        index: 2,
        nameSanskrit: 'षोडश अग्निशिखा मण्डल',
        nameEnglish: '16 Blazing Fire Rays (Agni Shikha)',
        chakraTitle: 'द्वितीय आवरण - संहार ज्वाला मण्डल',
        presidingDeity: 'षोडश अग्निदेवता',
        mudraShakti: 'अग्नि मुद्रा',
        yoginiClass: 'गुप्त योगिनी',
        geometryType: '16 Outer Fierce Flame Tongues',
        significance: '16 tongues of transcendent fire incinerating all incoming curses and malefic thought-forms.'
      },
      {
        index: 3,
        nameSanskrit: 'षोडशदल कमलावरण',
        nameEnglish: 'Shodashadala Lotus (16 Ogee Petals)',
        chakraTitle: 'तृतीय आवरण - स्वर शक्ति मण्डल',
        presidingDeity: 'षोडश नित्या / कला शक्तियाँ',
        mudraShakti: 'खेट मुद्रा',
        yoginiClass: 'गुप्ततर योगिनी',
        geometryType: '16 Ogee Petals with Spines',
        significance: 'Inscribed with the 16 vowels (अं to अः), creating a phonetic vortex that purifies the 16 sensory faculties.'
      },
      {
        index: 4,
        nameSanskrit: 'अष्टदल कमलावरण',
        nameEnglish: 'Ashtadala Inner Petals (8 Ogee Petals)',
        chakraTitle: 'चतुर्थ आवरण - अष्टभैरव मण्डल',
        presidingDeity: 'अष्टभैरव (असिताङ्ग, रुरु, चण्ड, क्रोध, उन्मत्त, कपाल, भीषण, संहार)',
        mudraShakti: 'डमरू मुद्रा',
        yoginiClass: 'सम्प्रदाय योगिनी',
        geometryType: '8 Inner Ogee Petals with Spines',
        significance: 'Guarded by the 8 terrifying forms of Lord Bhairava, crushing external malice.'
      },
      {
        index: 5,
        nameSanskrit: 'शरभ-प्रत्यङ्गिरा षट्कोण',
        nameEnglish: 'Sharabha-Pratyangira Shatkona',
        chakraTitle: 'पञ्चम आवरण - षट्कोण मण्डल',
        presidingDeity: 'भगवान् शरभेश्वर एवं देवी प्रत्यङ्गिरा',
        mudraShakti: 'नरसिंह मुद्रा',
        yoginiClass: 'कुलोत्तीर्ण योगिनी',
        geometryType: 'Interlocking Triangles with Sacred Beejas',
        significance: 'Embodying the supreme union of Shiva-Sharabha and Shakti-Pratyangira, inscribed with ॐ, ह्रीं, क्लीं, हुं, फट्, स्वाहा.'
      },
      {
        index: 6,
        nameSanskrit: 'अपराजिता क्षौं बिन्दु चक्र',
        nameEnglish: 'Aparajita Kshraum Core Sanctum',
        chakraTitle: 'षष्ठ आवरण - महाविपरीत बिन्दु चक्र',
        presidingDeity: 'श्रीमहाविपरीत प्रत्यङ्गिरा देवी',
        mudraShakti: 'योनि मुद्रा',
        yoginiClass: 'परापरातिरहस्य योगिनी',
        geometryType: 'Downward Primary Yoni Triangle with Kshraum Core',
        significance: 'The supreme vortex of reversal. Inscribed with the fierce seed "क्षौं" (Kshraum), sending all negative attacks back to their originator.'
      }
    ],
    jyotish: {
      rulingPlanet: 'मङ्गल एवं राहु (Mars & Rahu - Counter-Abhichara Power)',
      planetSanskrit: 'भौमः सव्यभिचार-राहुश्च',
      friendlyRashis: ['Scorpio', 'Aries', 'Capricorn', 'Aquarius'],
      friendlyNakshatras: ['Mula', 'Jyeshtha', 'Ardra', 'Ashlesha'],
      doshaRemedies: [
        {
          doshaName: 'Abhichara & Kritya Dosha (अभिचार व कृत्या दोष)',
          description: 'Destroys extreme black magic, occult attacks, and unexplainable family ruin.',
          reliefMechanism: 'Maha Viparita Pratyangira reverses negative psychic currents back upon the attacker.'
        },
        {
          doshaName: 'Pitru Shrapa & Drashti Dosha (पितृ शाप व तीव्र दृष्टि दोष)',
          description: 'Cleanses dark ancestral karmic blockages, persistent court entanglements, and acute jealousy.',
          reliefMechanism: 'The fierce ruby radiance of Kshraum burns away all astral poisons.'
        }
      ],
      lifeAspects: ['Reversal of Negative Sorcery', 'Absolute Spiritual Sovereignty', 'Instant Fearlessness', 'Protection of Home & Progeny'],
      wearOrInstallDirection: 'South (दक्षिण दिशा)',
      favorableDay: 'Tuesday, Friday, or Amavasya midnight (मङ्गलवार, शुक्रवार, अमावस्या)',
      auspiciousTithi: 'Amavasya, Krishna Chaturdashi, Navaratri',
      metalPreference: 'Pure Copper (शुद्ध ताम्र) or Iron-reinforced Bronze',
      beejMantra: 'ॐ क्षौं प्रत्यङ्गिरायै नमः ॥',
      gayatriMantra: 'ॐ अपराजितायै विद्महे प्रत्यङ्गिरायै धीमहि तन्नो देवी प्रचोदयात् ॥',
      japaCount: 108,
      malaType: 'Rudraksha or Raktachandan (Red Sandalwood) Mala',
      dhyanaSloka: 'भुजैरनेकैरुपशोभिताङ्गीं शशाङ्ककोटिप्रतिमप्रभावाम् । विद्युल्लसत्पिंगलकेशपाशां प्रत्यङ्गिरां सिंहमुखीं नमामि ॥',
      pratishthaVidhiSummary: [
        'Install with supreme reverence in the South direction or a secluded private shrine.',
        'Worship with red or dark blue flowers, black sesame, and pure mustard oil / ghee lamp.',
        'Offer pomegranate or sweet kheer and jaggery.',
        'Chant the Pratyangira mantra (ॐ ह्रीं क्षौं प्रत्यङ्गिरे हुं फट् स्वाहा) 108 times with fearless devotion.'
      ]
    },
    practicalRemedies: [
      {
        category: 'Protection',
        problem: 'गंभीर कृत्या दोष, तीव्र अभिचार (काला जादू), शत्रु जनित विनाशकारी संकट व पारिवारिक संकट में।',
        remedyProtocol: 'मंगलवार, शुक्रवार या अमावस्या की रात्रि में दक्षिण दिशा में यन्त्र को स्थापित कर शुद्ध सरसों के तेल का दीपक जलाएं और "ॐ क्षौं प्रत्यङ्गिरायै नमः" अथवा "ॐ ह्रीं क्षौं प्रत्यङ्गिरे हुं फट् स्वाहा" का १०८ बार निर्भय मन से जप करें।'
      },
      {
        category: 'Spiritual',
        problem: 'गृह में भारी नकारात्मक ऊर्जा, क्लेश और अनिष्टकारी शक्तियों के प्रवेश का अनुभव होने पर।',
        remedyProtocol: 'यन्त्र के समक्ष काले तिल और कर्पूर की आहुति देकर मां प्रत्यङ्गिरा से आत्म-रक्षा और शत्रु-शमन की प्रार्थना करें।'
      }
    ]
  },

  saraswati_yantra: {
    id: 'saraswati_yantra',
    taxonomyCategory: 'saraswati_vidya',
    lineageAttribution: 'सरस्वती रहस्य उपनिषद् एवं मन्त्र महोदधि',
    nameSanskrit: 'श्री सरस्वती यन्त्रम् (वाग्देवी मण्डल)',
    nameHindi: 'सरस्वती यन्त्र (विद्या, बुद्धि, वाणी व संगीत)',
    nameEnglish: 'Saraswati Yantra (Goddess of Learning & Supreme Eloquence)',
    subTitle: 'The Hexagram & Octagonal Lotus of Cosmic Speech (Vagbhava Mandala)',
    presidingDeity: 'देवी सरस्वती (शारदा)',
    tradition: 'सारस्वत वैदिक परम्परा',
    corePhilosophy: 'ब्रह्म की वाक् शक्ति और समस्त ज्ञान, विद्या, साहित्य और कलाओं का मूल स्रोत। इसका षट्कोण बुद्धि और अन्तःप्रज्ञा के सामंजस्य को और अष्टदल वाणी के आठ सूक्ष्म रूपों को जाग्रत करता है।',
    citations: [
      {
        sourceScripture: 'सरस्वती रहस्य उपनिषद्',
        chapterOrVerse: 'मन्त्र १-२',
        sanskritSloka: 'ॐ वाग्देव्यै च विद्महे कामराजाय धीमहि।\nतन्नो देवी प्रचोदयात्॥',
        hindiMeaning: 'हम वाग्देवी भगवती सरस्वती का ध्यान करते हैं, वे कामराज रूप में हमारी बुद्धि और वाणी को सत्य ज्ञान की ओर प्रेरित करें।',
        englishMeaning: 'We meditate upon Goddess Saraswati, the embodiment of transcendental speech; may the supreme Divine Mother inspire our intellect.'
      },
      {
        sourceScripture: 'मन्त्र महोदधि',
        chapterOrVerse: 'तरङ्ग ७, श्लोक २५',
        sanskritSloka: 'ऐं ह्रीं श्रीं क्लीं सौः वाग्वादिनि वद वद स्वाहा।\nअष्टपत्रे लिखेन्मन्त्रं षट्कोणे वाग्भवं न्यसेत्॥',
        hindiMeaning: 'अष्टदल में वाग्वादिनी मन्त्र तथा षट्कोण के मध्य में ऐं बीज की प्रतिष्ठा करने से साधक को सर्वविद्या और वाक्-सिद्धि प्राप्त होती है।',
        englishMeaning: 'Inscribing the Vagvadini mantra on the eight petals and the Vagbhava seed "Aim" within the hexagram endows the aspirant with universal knowledge and eloquence.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'वाक् भूपुर प्राकार',
        nameEnglish: 'Citadel of Articulate Speech & 4 Gateways',
        chakraTitle: 'प्रथम आवरण - त्रैलोक्य मोहन भूपुर',
        presidingDeity: 'वाग्देवी शारदा',
        mudraShakti: 'वीणा मुद्रा',
        yoginiClass: 'प्रकट योगिनी',
        geometryType: '4 Cardinal Gateways with Triple Ramparts',
        significance: 'Protects the sensory intellect from delusions and removes worldly distractions from the study sanctum.'
      },
      {
        index: 2,
        nameSanskrit: 'वेदत्रयी त्रिवलय',
        nameEnglish: 'Triple Girdle of the Three Vedas',
        chakraTitle: 'द्वितीय आवरण - वेद त्रयी मण्डल',
        presidingDeity: 'ऋक्, यजुः, साम वेद शक्तियाँ',
        mudraShakti: 'पुस्तक मुद्रा',
        yoginiClass: 'गुप्त योगिनी',
        geometryType: 'Concentric Protective Triple Circles',
        significance: 'Harmonizes rhythmic speech, sacred melody, and philosophical inquiry within the student.'
      },
      {
        index: 3,
        nameSanskrit: 'अष्टदल वाग्देवी पद्म',
        nameEnglish: '8-Petal Lotus of the Eight Eloquent Energies',
        chakraTitle: 'तृतीय आवरण - अष्ट वाग्देवी मण्डल',
        presidingDeity: 'अष्ट वाग्देवी (वशी, कामी, मोहिनी, विमला, अरुणा, जयिनी, सर्वेश्वरी, कौलिनी)',
        mudraShakti: 'अक्षमाला मुद्रा',
        yoginiClass: 'गुप्ततर योगिनी',
        geometryType: '8 Ogee Petals with Radiating Spines',
        significance: 'Inscribed with the 8 seed syllables (ऐं, ह्रीं, श्रीं, क्लीं, सौः, ऐं, क्लीं, सौः), activating flawless eloquence, poetic flair, and retention.'
      },
      {
        index: 4,
        nameSanskrit: 'वैदिक मेधा षट्कोण',
        nameEnglish: 'Vedic Shatkona of Intellect & Intuition',
        chakraTitle: 'चतुर्थ आवरण - षट्कोण मण्डल',
        presidingDeity: 'बुद्धि एवं प्रज्ञा',
        mudraShakti: 'चिन्मुद्रा',
        yoginiClass: 'सम्प्रदाय योगिनी',
        geometryType: 'Interlocking Triangles with Seeds',
        significance: 'Interlacing triangles representing the synthesis of conscious intellectual logic and subconscious creative inspiration.'
      },
      {
        index: 5,
        nameSanskrit: 'वाग्भव ऐं महाबिन्दु चक्र',
        nameEnglish: 'Vagbhava "Aim" Supreme Core Sanctum',
        chakraTitle: 'पञ्चम आवरण - सर्वानन्दमय बिन्दु चक्र',
        presidingDeity: 'भगवती महासरस्वती',
        mudraShakti: 'वरदाभय मुद्रा',
        yoginiClass: 'परापरातिरहस्य योगिनी',
        geometryType: 'Central Singularity Point with Vagbhava Seed',
        significance: 'The primordial font of all words and cosmic revelation. Inscribed with the supreme monosyllable "ऐं" (Aim).'
      }
    ],
    jyotish: {
      rulingPlanet: 'बुध एवं गुरु (Mercury & Jupiter - Vidya & Buddhi Karakas)',
      planetSanskrit: 'बुध-बृहस्पति वाक्-प्रज्ञा योग',
      friendlyRashis: ['मिथुन', 'कन्या', 'धनु', 'मीन'],
      friendlyNakshatras: ['रोहिणी', 'हस्त', 'श्रवण', 'पुनर्वसु'],
      doshaRemedies: [
        {
          doshaName: 'Budha Dosha & Stuttering (बुध दोष व वाणी दुर्बलता)',
          description: 'Difficulty in speech, memory lapses during exams, stage fright, and lack of mental focus.',
          reliefMechanism: 'The vibrating resonance of the Aim seed purifies the Vishuddha (throat) and Ajna chakras.'
        },
        {
          doshaName: 'Guru Chandal Dosha & Academic Stagnation (विद्या व्यवधान दोष)',
          description: 'Repeated obstacles in higher education, argumentative cynicism, and loss of respect for teachers.',
          reliefMechanism: 'Saraswati Yantra invokes divine wisdom, calming rebellious intellect into disciplined scholarship.'
        }
      ],
      lifeAspects: ['Academic Excellence & Exam Success', 'Photographic Memory & Recall', 'Musical & Performing Arts Mastery', 'Eloquent Public Speaking'],
      wearOrInstallDirection: 'North-East (ईशान कोण)',
      favorableDay: 'Wednesday or Thursday (बुधवार अथवा गुरुवार)',
      auspiciousTithi: 'Vasant Panchami, Shukla Panchami, Sharadiya Navaratri Saraswati Puja',
      metalPreference: 'Pure Silver (चांदी), Bronze, or Pure Copper',
      beejMantra: 'ॐ ऐं सरस्वत्यै नमः ॥',
      gayatriMantra: 'ॐ वाग्देव्यै च विद्महे कामराजाय धीमहि तन्नो देवी प्रचोदयात् ॥',
      japaCount: 108,
      malaType: 'Sphatika (Clear Quartz) or White Sandalwood Rosary',
      dhyanaSloka: 'या कुन्देन्दुतुषारहारधवला या शुभ्रवस्त्रावृता या वीणावरदण्डमण्डितकरा या श्वेतपद्मासना। या ब्रह्माच्युतशंकरप्रभृतिभिर्देवैः सदा वन्दिता सा मां पातु सरस्वती भगवती निःशेषजाड्यापहा॥',
      pratishthaVidhiSummary: [
        'Place on clean white silk in the North-East quadrant of the study or library.',
        'Offer white lotus, jasmine flowers, and pure mishri (sugar candy) or white kheer.',
        'Light a fragrant pure cow ghee lamp and white chandan incense.',
        'Chant the Saraswati Gayatri and Vagbhava mantra (ॐ ऐं सरस्वत्यै नमः) 108 times daily before studying.'
      ]
    },
    practicalRemedies: [
      {
        category: 'Career',
        problem: 'विद्यार्थियों में पढ़ाई में मन न लगना, परीक्षा का भय, और याद किया हुआ भूल जाना।',
        remedyProtocol: 'अध्ययन कक्ष के ईशान कोण में सरस्वती यन्त्र स्थापित कर नित्य प्रातः स्फटिक माला से "ॐ ऐं सरस्वत्यै नमः" का १०८ बार जप करें।'
      },
      {
        category: 'Spiritual',
        problem: 'संगीतज्ञों, वक्ताओं, अधिवक्ताओं और लेखकों के लिए रचनात्मक अवरोध और वाक्-दोष।',
        remedyProtocol: 'कार्यस्थल पर सरस्वती यन्त्र की प्राण-प्रतिष्ठा कर सफेद चन्दन का तिलक लगाएं और वाणी-सिद्धि की प्रार्थना करें।'
      }
    ]
  },

  gayatri_yantra: {
    id: 'gayatri_yantra',
    taxonomyCategory: 'saraswati_vidya',
    lineageAttribution: 'ऋग्वेद, अग्नि पुराण एवं देवी भागवत महापुराण',
    nameSanskrit: 'श्री गायत्री यन्त्रम् (सविता-मण्डलम्)',
    nameHindi: 'गायत्री यन्त्र (वेदमूर्ति, ब्रह्मतेज व आत्मशुद्धि)',
    nameEnglish: 'Gayatri Yantra (Mother of the Vedas & 24 Syllable Solar Matrix)',
    subTitle: 'The 24-Petal Solar Cosmogram of Divine Illumination',
    presidingDeity: 'देवी वेदमाता गायत्री (सविता)',
    tradition: 'वैदिक ब्रह्म परम्परा',
    corePhilosophy: 'समस्त वेदों की जननी गायत्री का यन्त्र चेतना के २४ दिव्य गुणों को जाग्रत करता है। इसके २४ दल २४ अक्षरों और सूर्य के २४ ऊर्जा स्पंदनों के प्रतीक हैं जो अज्ञान रूपी अन्धकार को नष्ट कर ब्रह्मतेज प्रदान करते हैं।',
    citations: [
      {
        sourceScripture: 'ऋग्वेद',
        chapterOrVerse: 'मण्डल ३, सूक्त ६२, मन्त्र १०',
        sanskritSloka: 'ॐ तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि।\nधियो यो नः प्रचोदयात्॥',
        hindiMeaning: 'हम उस प्राणस्वरूप, दुःखनाशक, सुखस्वरूप, श्रेष्ठ, तेजस्वी, पापनाशक देवस्वरूप सूर्य का ध्यान करते हैं जो हमारी बुद्धि को सन्मार्ग में प्रेरित करे।',
        englishMeaning: 'We meditate upon that adorable effulgence of the divine Sun, the Creator; may He awaken and illuminate our intellects.'
      },
      {
        sourceScripture: 'अग्नि पुराणम्',
        chapterOrVerse: 'गायत्री कल्प, अध्याय २१६',
        sanskritSloka: 'गायत्रीं संस्मरेन्नित्यं सर्वपापप्रणाशिनीम्।\nयन्त्रमध्ये स्थितां देवीं सूर्यमण्डलमध्यगाम्॥',
        hindiMeaning: 'समस्त पापों का नाश करने वाली भगवती गायत्री का सूर्यमण्डल के मध्य में स्थित यन्त्र में नित्य ध्यान और अर्चन करना चाहिए।',
        englishMeaning: 'Constantly remember Goddess Gayatri who annihilates all accumulated karmic sins, enthroned at the very heart of the solar sphere within this sacred yantra.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'सौर प्राकार भूपुर',
        nameEnglish: 'Solar Citadel & 4 Cardinal Gateways',
        chakraTitle: 'प्रथम आवरण - सौर भूपुर प्राकार',
        presidingDeity: 'भगवान् सविता',
        mudraShakti: 'पद्म मुद्रा',
        yoginiClass: 'प्रकट सौर शक्ति',
        geometryType: 'Triple Rampart Citadel with 4 Solar Gateways',
        significance: 'Aligns the subtle physical body with the cardinal directions and shields the home from negative solar afflictions.'
      },
      {
        index: 2,
        nameSanskrit: 'व्याहृति त्रिवलय',
        nameEnglish: 'Triple Girdle of the Mahavyahritis',
        chakraTitle: 'द्वितीय आवरण - भूर्भुवः स्वः मण्डल',
        presidingDeity: 'भूः, भुवः, स्वः व्याहृति शक्तियाँ',
        mudraShakti: 'सूर्य मुद्रा',
        yoginiClass: 'गुप्त शक्ति',
        geometryType: '3 Concentric Golden Girdles',
        significance: 'Balances the terrestrial, atmospheric, and celestial planes of consciousness within the practitioner.'
      },
      {
        index: 3,
        nameSanskrit: 'चतुर्विंशति दल पद्म',
        nameEnglish: '24-Petal Lotus of Gayatri Aksharas',
        chakraTitle: 'तृतीय आवरण - चतुर्विंशति शक्ति मण्डल',
        presidingDeity: '२४ गायत्री शक्तियाँ (ब्राह्मी, वैष्णवी, शाम्भवी आदि)',
        mudraShakti: 'ज्ञान मुद्रा',
        yoginiClass: 'गुप्ततर योगिनी',
        geometryType: '24 Ogee Petals with Spines',
        significance: 'Inscribed with the 24 divine syllables of the Gayatri Mantra (तत्, स, वि, तुर्, व, रे, ण्यं, भर्, गो, दे, व, स्य, धी, म, हि, धि, यो, यो, नः, प्र, चो, द, यात्, ॐ).'
      },
      {
        index: 4,
        nameSanskrit: 'अष्टदल वसु पद्म',
        nameEnglish: 'Inner 8-Petal Lotus of the Ashta Vasus',
        chakraTitle: 'चतुर्थ आवरण - अष्टवसु मण्डल',
        presidingDeity: 'अष्ट वसु एवं अष्ट सिद्धियाँ',
        mudraShakti: 'अङ्कुश मुद्रा',
        yoginiClass: 'सम्प्रदाय योगिनी',
        geometryType: '8 Inner Ogee Petals with Spines',
        significance: 'Radiates the 8 supreme spiritual treasures and mental tranquility into the seeker.'
      },
      {
        index: 5,
        nameSanskrit: 'सविता षट्कोण मण्डल',
        nameEnglish: 'Savita Solar Shatkona',
        chakraTitle: 'पञ्चम आवरण - षट्कोण मण्डल',
        presidingDeity: 'सूर्य नारायण एवं गायत्री',
        mudraShakti: 'पाश मुद्रा',
        yoginiClass: 'कुलोत्तीर्ण योगिनी',
        geometryType: 'Interlaced Solar Hexagram',
        significance: 'The mystic union of the divine solar fire and pure consciousness, generating perpetual vital energy.'
      },
      {
        index: 6,
        nameSanskrit: 'परब्रह्म ॐ बिन्दु चक्र',
        nameEnglish: 'Parabrahma Pranava "Om" Core',
        chakraTitle: 'षष्ठ आवरण - महाबिन्दु चक्र',
        presidingDeity: 'परब्रह्म परमात्मा',
        mudraShakti: 'महानारायण मुद्रा',
        yoginiClass: 'परापरातिरहस्य योगिनी',
        geometryType: 'Central Singularity Point with Pranava Om & Vyahriti',
        significance: 'The ultimate luminous singularity of divine light. Inscribed with "ॐ" and "भूर्भुवः स्वः".'
      }
    ],
    jyotish: {
      rulingPlanet: 'सूर्य (Sun - Soul/Atma Karaka & Cosmic Father)',
      planetSanskrit: 'भगवान् सूर्य एवं ब्रह्मतेज',
      friendlyRashis: ['सिंह', 'मेष', 'धनु'],
      friendlyNakshatras: ['कृत्तिका', 'उत्तरा फाल्गुनी', 'उत्तराषाढ़ा'],
      doshaRemedies: [
        {
          doshaName: 'Surya Dosha & Loss of Confidence (सूर्य दोष व आत्मबल हीनता)',
          description: 'Depression, constant conflicts with authorities and father, eye/heart ailments, and chronic lethargy.',
          reliefMechanism: 'The Gayatri Yantra draws pure solar prana directly into the Manipura and Sahasrara chakras.'
        },
        {
          doshaName: 'Pitru Dosha & Grahan Dosha (पितृ दोष व सूर्य ग्रहण दोष)',
          description: 'Ancestral blockages, unexplained family setbacks, and loss of social reputation.',
          reliefMechanism: 'Daily Gayatri worship neutralizes generational karmic clouds with the cleansing fire of Savitur.'
        }
      ],
      lifeAspects: ['Spiritual Illumination & Self-Realization', 'Radiant Vitality, Ojas & Longevity', 'Freedom from All Accumulated Sins', 'Mental Serenity & Clarity of Purpose'],
      wearOrInstallDirection: 'East (पूर्व दिशा - Sunrise Alignment)',
      favorableDay: 'Sunday or Brahma Muhurta daily (रविवार अथवा प्रातः ब्रह्ममुहूर्त)',
      auspiciousTithi: 'Gayatri Jayanti, Poornima, Ravi Pushya Yoga',
      metalPreference: 'Pure Copper (ताम्र), Gold, or Bronze',
      beejMantra: 'ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात् ॥',
      gayatriMantra: 'ॐ वेदमूर्त्यै च विद्महे सर्वशक्त्यै च धीमहि तन्नो गायत्री प्रचोदयात् ॥',
      japaCount: 108,
      malaType: 'Tulsi Rosary or Raktachandan (Red Sandalwood) Rosary',
      dhyanaSloka: 'मुक्ताविद्रुमहेमनीलधवलच्छायैर्मुखैस्त्रीक्षणैर्युक्तामिन्दुनिबद्धरत्नमुकुटां तत्त्वार्थवर्णात्मिकाम्। गायत्रीं वरदाभयाङ्कुशकशाः शुभ्रं कपालं गदां शङ्खं चक्रमथारविन्दयुगलं हस्तैर्वहन्तीं भजे॥',
      pratishthaVidhiSummary: [
        'Install on clean copper plate facing East in the morning sunlight.',
        'Offer pure water (Arghya), red flowers, and vermilion.',
        'Light a pure cow ghee lamp and camphor.',
        'Chant the Gayatri Mahamantra 108 times facing East at dawn.'
      ]
    },
    practicalRemedies: [
      {
        category: 'Spiritual',
        problem: 'मानसिक अशान्ति, पाप-बोध, और आंतरिक आत्मबल की कमी।',
        remedyProtocol: 'प्रातः सूर्योदय के समय पूर्व दिशा में जल का अर्घ्य देकर यन्त्र के समक्ष गायत्री मन्त्र का १०८ बार जप करें।'
      },
      {
        category: 'Health',
        problem: 'आलस्य, नेत्र विकार, और लगातार गिरता हुआ स्वास्थ्य।',
        remedyProtocol: 'गायत्री यन्त्र पर तांबे के पात्र में रखा जल अर्पित करें और उसे अभिमंत्रित कर ग्रहण करें।'
      }
    ]
  },

  medha_dakshinamurti_yantra: {
    id: 'medha_dakshinamurti_yantra',
    taxonomyCategory: 'saraswati_vidya',
    lineageAttribution: 'दक्षिणामूर्ति उपनिषद् एवं शारदा तिलक तन्त्रम्',
    nameSanskrit: 'श्री मेधा दक्षिणामूर्ति यन्त्रम्',
    nameHindi: 'मेधा दक्षिणामूर्ति यन्त्र (परम गुरु, मेधा व प्रज्ञा)',
    nameEnglish: 'Medha Dakshinamurti Yantra (Supreme Cosmic Preceptor & Intellect Illuminator)',
    subTitle: 'The 16-Kala Mandala of Primordial Wisdom & Spiritual Memory',
    presidingDeity: 'भगवान् दक्षिणामूर्ति (आदि गुरु शिव)',
    tradition: 'अद्वैत शैव परम्परा',
    corePhilosophy: 'मौन व्याख्यान के माध्यम से ब्रह्मज्ञान देने वाले परम गुरु दक्षिणामूर्ति का यन्त्र साधक की सुषुप्त मेधा शक्ति को जाग्रत करता है। इसके १६ दल ज्ञान की १६ कलाओं और त्रिकोण परम अद्वैत बोध का प्रतीक है।',
    citations: [
      {
        sourceScripture: 'दक्षिणामूर्ति उपनिषद्',
        chapterOrVerse: 'मन्त्र १-३',
        sanskritSloka: 'ॐ नमो भगवते दक्षिणामूर्तये मह्यं मेधां प्रज्ञां प्रयच्छ स्वाहा।\nचिन्मुद्रालंकृतकरां मौनव्याख्यानतत्पराम्॥',
        hindiMeaning: 'समस्त ज्ञान के अधिष्ठाता भगवान् दक्षिणामूर्ति को नमस्कार है, वे मुझे परम मेधा और प्रज्ञा प्रदान करें। जो चिन्मुद्रा से सुशोभित और मौन व्याख्यान में लीन हैं।',
        englishMeaning: 'Salutations to the Supreme Lord Dakshinamurti; grant me transcendental memory, intellect, and profound wisdom.'
      },
      {
        sourceScripture: 'दक्षिणामूर्ति स्तोत्रम् (आदि शंकराचार्य)',
        chapterOrVerse: 'मंगलाचरण श्लोक १',
        sanskritSloka: 'मौनव्याख्याप्रकटितपरब्रह्मतत्त्वं युवानं वर्षिष्ठांतेवसद्ऋषिगणैरावृतं ब्रह्मनिष्ठैः।\nआचार्येन्द्रं करकलितचिन्मुद्रमानन्दमूर्तिं स्वात्मारामं मुदितवदनं दक्षिणामूर्तिमीडे॥',
        hindiMeaning: 'मौन व्याख्या से परब्रह्म तत्त्व को प्रकट करने वाले, ब्रह्मनिष्ठ वृद्ध ऋषियों से घिरे हुए, चिन्मुद्राधारी आनन्दमूर्ति दक्षिणामूर्ति को मैं प्रणाम करता हूँ।',
        englishMeaning: 'I adore the primordial Guru Dakshinamurti, who reveals the supreme Brahman through eloquent silence, holding the Chinmudra of unity.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'गुरु पीठ भूपुर प्राकार',
        nameEnglish: 'Sanctum Citadel & 4 Cosmic Portals',
        chakraTitle: 'प्रथम आवरण - गुरु पीठ प्राकार',
        presidingDeity: 'भगवान् दक्षिणामूर्ति',
        mudraShakti: 'चिन्मुद्रा',
        yoginiClass: 'प्रकट योगिनी',
        geometryType: 'Triple Rampart Citadel with 4 Portals',
        significance: 'Anchors the seeker in unwavering mental stillness and shields from distracting worldly currents.'
      },
      {
        index: 2,
        nameSanskrit: 'प्रज्ञा त्रिवलय',
        nameEnglish: 'Triple Girdle of Supreme Intuition',
        chakraTitle: 'द्वितीय आवरण - प्रज्ञा त्रिवलय मण्डल',
        presidingDeity: 'मेधा, धारणा, स्मृति शक्तियाँ',
        mudraShakti: 'ज्ञान मुद्रा',
        yoginiClass: 'गुप्त योगिनी',
        geometryType: '3 Concentric Girdles',
        significance: 'Harmonizes perception, deep retention, and instantaneous cognitive recall.'
      },
      {
        index: 3,
        nameSanskrit: 'षोडश ज्ञान कला पद्म',
        nameEnglish: '16-Petal Lotus of Cognitive Kalas',
        chakraTitle: 'तृतीय आवरण - षोडश कला मण्डल',
        presidingDeity: 'षोडश कला शक्तियाँ (मेधा, प्रज्ञा, धी, धारणा आदि)',
        mudraShakti: 'पुस्तक मुद्रा',
        yoginiClass: 'गुप्ततर योगिनी',
        geometryType: '16 Ogee Petals with Radiating Spines',
        significance: 'Inscribed with the 16 attributes of enlightened cognition (मेधा, प्रज्ञा, धी, धारणा, स्मृति, मति, शान्ति, विद्या, तुष्टि, पुष्टि, सत्य, ऋत, ज्योति, अमृत, बोध, कैवल्य).'
      },
      {
        index: 4,
        nameSanskrit: 'अष्ट गुरु मण्डल पद्म',
        nameEnglish: 'Inner 8-Petal Lotus of the 8 Sage Disciples',
        chakraTitle: 'चतुर्थ आवरण - अष्ट ऋषि मण्डल',
        presidingDeity: 'सनक, सनन्दन, सनातन, सनत्कुमार आदि अष्ट मुनि',
        mudraShakti: 'अभय मुद्रा',
        yoginiClass: 'सम्प्रदाय योगिनी',
        geometryType: '8 Inner Ogee Petals with Spines',
        significance: 'Transfers the direct blessings of the lineage of primordial Rishis into the mind of the aspirant.'
      },
      {
        index: 5,
        nameSanskrit: 'मौनव्याख्यान त्रिकोण',
        nameEnglish: 'Triangle of Primordial Silence',
        chakraTitle: 'पञ्चम आवरण - अद्वैत त्रिकोण पीठ',
        presidingDeity: 'सदाशिव दक्षिणामूर्ति',
        mudraShakti: 'समाधि मुद्रा',
        yoginiClass: 'कुलोत्तीर्ण योगिनी',
        geometryType: 'Downward Primary Inverted Triangle',
        significance: 'The transcendent silence where all dualities dissolve into pure self-luminous Awareness.'
      },
      {
        index: 6,
        nameSanskrit: 'ह्सौं मेधा महाबिन्दु',
        nameEnglish: 'Hsaum Medha Supreme Bindu Core',
        chakraTitle: 'षष्ठ आवरण - महामेधा बिन्दु चक्र',
        presidingDeity: 'परम शिव दक्षिणामूर्ति',
        mudraShakti: 'शिवमुद्रा',
        yoginiClass: 'परापरातिरहस्य योगिनी',
        geometryType: 'Infinitesimal Singularity with Hsaum Beeja',
        significance: 'The core seat of photographic intellect and instant comprehension. Inscribed with "ॐ" and "ह्सौं" (Hsaum).'
      }
    ],
    jyotish: {
      rulingPlanet: 'बृहस्पति (Jupiter - Devaguru & Karaka of Wisdom)',
      planetSanskrit: 'देवगुरु बृहस्पति एवं शिव-ज्ञान योग',
      friendlyRashis: ['धनु', 'मीन', 'कर्क'],
      friendlyNakshatras: ['पुनर्वसु', 'विशाखा', 'पूर्वाभाद्रपद'],
      doshaRemedies: [
        {
          doshaName: 'Guru Dosha & Impaired Intellect (गुरु दोष व मेधा दुर्बलता)',
          description: 'Lack of concentration, academic failures, loss of wisdom, and disrespect from mentors.',
          reliefMechanism: 'Dakshinamurti yantra restores divine grace of the Preceptor, resolving all Guru afflictions.'
        },
        {
          doshaName: 'Shani-Rahu Aspect on 5th House (पञ्चम भाव पीड़ा दोष)',
          description: 'Severe intellectual confusion, inability to clear competitive examinations, and spiritual skepticism.',
          reliefMechanism: 'The cool moonlight of Lord Dakshinamurti dissolves mental darkness and sharpens deductive reasoning.'
        }
      ],
      lifeAspects: ['Photographic Memory & Grasping Power', 'Mastery in Philosophy, Shastras & Research', 'Finding Authentic Spiritual Guru', 'Calm & Fearless Clarity in Crisis'],
      wearOrInstallDirection: 'North or North-East (उत्तर अथवा ईशान दिशा)',
      favorableDay: 'Thursday (गुरुवार)',
      auspiciousTithi: 'Guru Poornima, Shukla Trayodashi, Pradosha',
      metalPreference: 'Bronze (कांसा), Silver, or Ashtadhatu',
      beejMantra: 'ॐ ह्सौं ॐ नमो भगवते दक्षिणामूर्तये मह्यं मेधां प्रज्ञां प्रयच्छ स्वाहा ॥',
      gayatriMantra: 'ॐ दक्षिणामूर्तये विद्महे ध्यानस्थाय धीमहि तन्नो धीशः प्रचोदयात् ॥',
      japaCount: 108,
      malaType: '5-Mukhi Rudraksha Mala or Yellow Turmeric Rosary',
      dhyanaSloka: 'वटविटपिसमीपे भूमिभागे निषण्णं सकलमुनिजनानां ज्ञानदातारमारात्। नतमनुजसुरेन्द्रं ज्ञानमुद्राकराब्जं नमितसकललोकं दक्षिणामूर्तिमीडे॥',
      pratishthaVidhiSummary: [
        'Install facing North or North-East in a serene sanctuary or meditation room.',
        'Offer yellow flowers, yellow sandalwood paste, and roasted chickpeas with jaggery.',
        'Light a pure cow ghee lamp and fragrant dhoop.',
        'Chant the Medha Dakshinamurti mantra 108 times on a Rudraksha mala on Thursdays.'
      ]
    },
    practicalRemedies: [
      {
        category: 'Career',
        problem: 'जटिल विषयों को समझने में कठिनाई, स्मृति लोप और मानसिक जड़ता।',
        remedyProtocol: 'अध्ययन से पूर्व यन्त्र के दर्शन कर "ॐ ह्सौं" का २१ बार जप करें, इससे धारणा शक्ति में तीव्र वृद्धि होती है।'
      },
      {
        category: 'Spiritual',
        problem: 'सद्गुरु का सान्निध्य प्राप्त न होना और साधना में प्रगति का रुक जाना।',
        remedyProtocol: 'गुरुवार को यन्त्र पर पीला चन्दन अर्पित कर मौन होकर १० मिनट ध्यान करें।'
      }
    ]
  },

  hayagriva_yantra: {
    id: 'hayagriva_yantra',
    taxonomyCategory: 'saraswati_vidya',
    lineageAttribution: 'हयग्रीव उपनिषद् एवं पाञ्चरात्र आगम',
    nameSanskrit: 'श्री हयग्रीव यन्त्रम् (वेद-रक्षक मण्डल)',
    nameHindi: 'हयग्रीव यन्त्र (बुद्धि, वेद-ज्ञान व वाक्-विजय)',
    nameEnglish: 'Hayagriva Yantra (Lord of Transcendental Wisdom & Vedic Mastery)',
    subTitle: 'The 12-Aditya Vaishnava Hexagram for Intellectual Supremacy',
    presidingDeity: 'भगवान् हयग्रीव (विष्णु अवतार)',
    tradition: 'पाञ्चरात्र वैष्णव परम्परा',
    corePhilosophy: 'मधु और कैटभ नामक असुरों से वेदों का उद्धार करने वाले भगवान् हयग्रीव विशुद्ध ज्ञान के स्वरूप हैं। इनका यन्त्र बौद्धिक पराक्रम, तर्क शक्ति और वेदों के गूढ़ रहस्यों को प्रकट करने वाला है।',
    citations: [
      {
        sourceScripture: 'हयग्रीव उपनिषद्',
        chapterOrVerse: 'मन्त्र १-२',
        sanskritSloka: 'ॐ ह्रौं ॐ नमो भगवते हयग्रीवाय विष्णवे मह्यं मेधां प्रज्ञां प्रयच्छ स्वाहा।\nऋग्यजुःसामरूपायाऽऽदित्यमण्डलमध्यगाय नमः॥',
        hindiMeaning: 'भगवान् हयग्रीव विष्णु को नमस्कार है, जो ऋग्, यजुः और साम रूप हैं तथा सूर्यमण्डल के मध्य में स्थित हैं, वे मुझे मेधा और प्रज्ञा प्रदान करें।',
        englishMeaning: 'Salutations to Lord Hayagriva, the cosmic embodiment of the Vedas; enthroned within the solar orb, bless me with supreme wisdom.'
      },
      {
        sourceScripture: 'श्री वेदान्त देशिक (हयग्रीव स्तोत्रम्)',
        chapterOrVerse: 'श्लोक १',
        sanskritSloka: 'ज्ञानानन्दमयं देवं निर्मलस्फटिकाकृतिम्।\nआधारं सर्वविद्यानां हयग्रीवमुपास्महे॥',
        hindiMeaning: 'जो ज्ञान और आनन्द के स्वरूप हैं, निर्मल स्फटिक के समान जिनकी कान्ति है और जो समस्त विद्याओं के आधार हैं, उन भगवान् हयग्रीव की हम उपासना करते हैं।',
        englishMeaning: 'We worship Lord Hayagriva, the embodiment of wisdom and supreme bliss, having the pristine brilliance of a pure crystal, the foundation of all arts and sciences.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'वैष्णव प्राकार भूपुर',
        nameEnglish: 'Vaishnava Citadel & 4 Cardinal Portals',
        chakraTitle: 'प्रथम आवरण - वैष्णव भूपुर प्राकार',
        presidingDeity: 'भगवान् हयग्रीव',
        mudraShakti: 'शङ्ख मुद्रा',
        yoginiClass: 'प्रकट योगिनी',
        geometryType: 'Triple Rampart Citadel with 4 Portals',
        significance: 'Protects the intellect from deceptive arguments and negative thought intrusions.'
      },
      {
        index: 2,
        nameSanskrit: 'सुदर्शन रक्षा त्रिवलय',
        nameEnglish: 'Triple Girdle of Sudarshana Radiance',
        chakraTitle: 'द्वितीय आवरण - त्रिवलय मण्डल',
        presidingDeity: 'सुदर्शन एवं पाञ्चजन्य शक्तियाँ',
        mudraShakti: 'चक्र मुद्रा',
        yoginiClass: 'गुप्त योगिनी',
        geometryType: '3 Concentric Golden Girdles',
        significance: 'Fortifies the aura with unconquerable spiritual defense against malice and ignorance.'
      },
      {
        index: 3,
        nameSanskrit: 'द्वादशदल आदित्य पद्म',
        nameEnglish: '12-Petal Lotus of the 12 Vedic Adityas',
        chakraTitle: 'तृतीय आवरण - द्वादश आदित्य मण्डल',
        presidingDeity: 'द्वादशादित्य एवं १२ वेद शाखाएँ',
        mudraShakti: 'गदा मुद्रा',
        yoginiClass: 'गुप्ततर योगिनी',
        geometryType: '12 Ogee Petals with Radiating Spines',
        significance: 'Inscribed with the 12 sacred Vedic seed syllables (ह्रौं, ऐं, क्लीं, सौः, ह्रीं, श्रीं, ह्रौं, ऐं, क्लीं, सौः, ह्रीं, श्रीं), diffusing all darkness of the mind.'
      },
      {
        index: 4,
        nameSanskrit: 'अष्टदल सिद्धि पद्म',
        nameEnglish: 'Inner 8-Petal Lotus of the 8 Siddhis',
        chakraTitle: 'चतुर्थ आवरण - अष्ट सिद्धि मण्डल',
        presidingDeity: 'अष्ट महासिद्धियाँ',
        mudraShakti: 'पद्म मुद्रा',
        yoginiClass: 'सम्प्रदाय योगिनी',
        geometryType: '8 Inner Ogee Petals with Spines',
        significance: 'Bestows scholarly eloquence, intellectual invincibility, and intuitive scientific insight.'
      },
      {
        index: 5,
        nameSanskrit: 'वैष्णव षड्गुण षट्कोण',
        nameEnglish: 'Vaishnava Shatkona of the 6 Divine Virtues',
        chakraTitle: 'पञ्चम आवरण - षट्कोण मण्डल',
        presidingDeity: 'षड्गुण परिपूर्ण हयग्रीव',
        mudraShakti: 'ज्ञानमुद्रा',
        yoginiClass: 'कुलोत्तीर्ण योगिनी',
        geometryType: 'Interlaced Vaishnava Hexagram',
        significance: 'Represents the perfect equilibrium of Jnana (wisdom), Vairagya (dispassion), Aishwarya (sovereignty), Bala (potency), Virya (valor), and Tejas (radiance).'
      },
      {
        index: 6,
        nameSanskrit: 'ह्रौं महाबीज बिन्दु मण्डल',
        nameEnglish: 'Hraum Mahabeeja Crystal Sanctum',
        chakraTitle: 'षष्ठ आवरण - महाबिन्दु चक्र',
        presidingDeity: 'परम पुरुष हयग्रीव',
        mudraShakti: 'योगमुद्रा',
        yoginiClass: 'परापरातिरहस्य योगिनी',
        geometryType: 'Infinitesimal Singularity with Hraum Seed',
        significance: 'The supreme effulgent crystal center. Inscribed with "ॐ" and the supreme seed "ह्रौं" (Hraum).'
      }
    ],
    jyotish: {
      rulingPlanet: 'बृहस्पति एवं बुध (Jupiter & Mercury - Vidya-Bala)',
      planetSanskrit: 'गुरु-बुध सारस्वत महायोग',
      friendlyRashis: ['मीन', 'धनु', 'मिथुन', 'कन्या'],
      friendlyNakshatras: ['श्रवण', 'हस्त', 'रेवती'],
      doshaRemedies: [
        {
          doshaName: 'Shravana Badhirya & Loss of Focus (स्मृति लोप व ध्यान अभाव)',
          description: 'Inability to comprehend complex subjects, speech hesitance, and memory blockages in debates.',
          reliefMechanism: 'Lord Hayagriva, the rescuer of the Vedas, unblocks intellectual dormancy and awakens profound memory.'
        },
        {
          doshaName: 'Debate Failure & Lack of Logical Persuasion (तर्क हीनता दोष)',
          description: 'Repeated failures in competitive interviews, public presentations, and analytical examinations.',
          reliefMechanism: 'The brilliant crystal illumination of Hraum bestows triumphant articulacy and peerless reasoning.'
        }
      ],
      lifeAspects: ['Triumph in Debates & Competitive Interviews', 'Mastery in Sciences, Medicine, Law & Shastras', 'Immense Power of Retention & Spoken Wit', 'Removal of Ignorance & Intellectual Sloth'],
      wearOrInstallDirection: 'North or East (उत्तर अथवा पूर्व दिशा)',
      favorableDay: 'Thursday or Wednesday (गुरुवार अथवा बुधवार)',
      auspiciousTithi: 'Hayagriva Jayanti (Shravana Poornima), Ekadashi',
      metalPreference: 'Sphatika (Clear Quartz), Silver, or Copper',
      beejMantra: 'ॐ ह्रौं ॐ नमो भगवते हयग्रीवाय स्वाहा ॥',
      gayatriMantra: 'ॐ वागीश्वराय विद्महे हयग्रीवाय धीमहि तन्नो हंसः प्रचोदयात् ॥',
      japaCount: 108,
      malaType: 'Tulsi Rosary or Sphatika Rosary',
      dhyanaSloka: 'शङ्खचक्रमहामुद्रापुस्तकाढ्यं चतुर्भुजम्। सम्पूर्णचन्द्रसंकाशं हयग्रीवमुपास्महे॥',
      pratishthaVidhiSummary: [
        'Install on a clean copper or silver platform facing North or East.',
        'Offer white flowers (jasmine or white lotus), cardamoms, and pure cow milk or white kheer.',
        'Light a pure cow ghee lamp and fragrant tulsi dhoop.',
        'Chant the Hayagriva Stotram and beej mantra 108 times on a Tulsi mala.'
      ]
    },
    practicalRemedies: [
      {
        category: 'Career',
        problem: 'प्रतियोगी परीक्षाओं, साक्षात्कारों (Interviews) और न्यायिक वाद-विवाद में सफलता का अभाव।',
        remedyProtocol: 'यन्त्र के समक्ष सफेद पुष्प अर्पित कर ११ बार हयग्रीव स्तोत्र अथवा "ॐ ह्रौं नमः" का १०८ बार जप करें।'
      },
      {
        category: 'Spiritual',
        problem: 'शास्त्रों, वेदों और उच्च वैज्ञानिक अनुसंधानों में गूढ़ रहस्यों को समझने में बाधा।',
        remedyProtocol: 'अध्ययन से पूर्व हयग्रीव यन्त्र पर स्फटिक अथवा तुलसी अर्पित कर ध्यान करें।'
      }
    ]
  }

};
