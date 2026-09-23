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
        significance: 'भौतिक जगत की सीमाओं को पार कर अध्यात्म के अंतर्जगत में प्रवेश का द्वार। यह अणिमा, लघिमा आदि अष्ट सिद्धियों और ब्राह्मी आदि अष्ट मातृकाओं का अधिष्ठान है।'
      },
      {
        index: 2,
        nameSanskrit: 'सर्वाशापरिपूरक चक्र',
        nameEnglish: 'Sarvashaparipuraka Chakra (Fulfiller of All Desires)',
        chakraTitle: 'षोडशदल पद्म (16-Petal Outer Lotus)',
        presidingDeity: 'त्रिपुरेशी देवी',
        mudraShakti: 'सर्वविद्राविणी मुद्रा',
        yoginiClass: 'गुप्त योगिनी (16 Nitya Shaktis)',
        geometryType: '16 Symmetrical Radial Petals',
        significance: 'काम, बुद्धि, अहंकार, शब्द, स्पर्श, रूप, रस, गंध, चित्त, धैर्य, स्मृति, नाम, बीज, आत्मा, अमृत और शरीर के आकर्षण की १६ कलाओं की शुद्धि और तृप्ति।'
      },
      {
        index: 3,
        nameSanskrit: 'सर्वसंक्षोभण चक्र',
        nameEnglish: 'Sarvasankshobhana Chakra (The Agitator of All)',
        chakraTitle: 'अष्टदल पद्म (8-Petal Inner Lotus)',
        presidingDeity: 'त्रिपुरसुन्दरी देवी',
        mudraShakti: 'सर्वाकर्षिणी मुद्रा',
        yoginiClass: 'गुप्ततर योगिनी (8 Ananga Shaktis)',
        geometryType: '8 Symmetrical Sacred Petals',
        significance: 'अनंगकुसुमा आदि आठ शक्तियों का निवास। मन, वाणी और कर्म के सूक्ष्म विक्षेपों का शमन कर एकाग्रता और आत्मबल की जागृति।'
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
        significance: 'मानव देह की १४ प्रमुख नाड़ियों (इड़ा, पिंगला, सुषुम्णा आदि) का शोधन। जीवन में सौभाग्य, प्रतिष्ठा और दैवीय आकर्षण की प्राप्ति।'
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
        significance: 'दश प्राणों (प्राण, अपान, समान, व्यान, उदान, नाग, कूर्म, कृकल, देवदत्त, धनंजय) का संतुलन। समस्त पुरुषार्थ (धर्म, अर्थ, काम, मोक्ष) की सिद्धि।'
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
        significance: 'जठराग्नि व प्राणिक ऊर्जा का शोधन। आधिभौतिक, आधिदैविक व आध्यात्मिक तीनों तापों तथा समस्त नकारात्मक ऊर्जाओं से अभेद्य सुरक्षा।'
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
        significance: 'वशिनि आदि आठ वाग्देवियों का अधिष्ठान। शारीरिक, मानसिक रोगों व वाणी दोषों का समूल नाश तथा प्रखर ज्ञान-बोध की प्राप्ति।'
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
        significance: 'इच्छा, ज्ञान और क्रिया शक्ति का त्रिपुट। सृष्टि, स्थिति और संहार की अधिष्ठात्री शक्तियों का मिलन केन्द्र।'
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
        significance: 'शिव-शक्ति का अव्यक्त सामरस्य। कैवल्य, पूर्ण अहंता, और अद्वैतानन्द की पराकाष्ठा।'
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
