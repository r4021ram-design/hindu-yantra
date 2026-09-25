const fs = require('fs');
const path = require('path');

const dbPath = path.resolve(__dirname, '../src/lib/yantras/shastric-jyotish-database.ts');
let content = fs.readFileSync(dbPath, 'utf8');

const navagrahaEntries = `
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
        sanskritSloka: 'आदित्यं सर्वभूतानां पूजयेत् सर्वकामदम्।\\nसर्वशत्रुविनाशाय सर्वशान्तिप्रदायकम्॥',
        hindiMeaning: 'समस्त प्राणियों के कल्याणकर्ता, मनोवांछित फल देने वाले तथा समस्त शत्रुओं का नाश करने वाले भगवान सूर्य का यन्त्र में अर्चन करें।',
        englishMeaning: 'Worship Lord Aditya, the soul of all beings and grantor of all boons, destroying all adversaries and diffusing supreme solar tranquility.'
      },
      {
        sourceScripture: 'बृहत् पराशर होरा शास्त्रम्',
        chapterOrVerse: 'ग्रह शान्ति प्रकरण',
        sanskritSloka: 'ॐ ह्रां ह्रीं ह्रौं सः सूर्याय नमः।\\nषट् एकाष्ट सप्तपञ्चत्रि द्वि नव चतुर मण्डलम्॥',
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
        sanskritSloka: 'नवो नवो भवति जायमानोऽह्नां केतुरुषसामेत्यग्रम्।\\nभागं देवेभ्यो वि दधात्यायन्प्र चन्द्रमास्तिरते दीर्घमायुः॥',
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
        sanskritSloka: 'धरणीगर्भसम्भूतं विद्युत्कान्तिसमप्रभम्।\\nकुमारं शक्तिहस्तं च मङ्गलं प्रणमाम्यहम्॥',
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
        sanskritSloka: 'प्रियङ्गुकलिकाश्यामं रूपेणाप्रतिमं बुधम्।\\nसौम्यं सौम्यगुणोपेतं तं बुधं प्रणमाम्यहम्॥',
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
        sanskritSloka: 'यस्तस्तम्भ सहसा विज्मो अन्तान्बृहस्पतिस्त्रिषधस्थो रवेण।\\nतं प्रत्नमृषयः सं दिदेयुः पुरो विप्रा दधिरे मन्द्रजिह्वम्॥',
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
        sanskritSloka: 'हिमकुन्दमृणालाभं दैत्यानां परमं गुरुम्।\\nसर्वशास्त्रप्रवक्तारं भार्गवं प्रणमाम्यहम्॥',
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
        sanskritSloka: 'नीलाञ्जनसमाभासं रविपुत्रं यमाग्रजम्।\\nछायामार्तण्डसम्भूतं तं नमामि शनैश्चरम्॥',
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
        sanskritSloka: 'अर्धकायं महावीर्यं चन्द्रादित्यविमर्दनम्।\\nसिंहिकागर्भसम्भूतं तं राहुं प्रणमाम्यहम्॥',
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
        sanskritSloka: 'पलाशपुष्पसंकाशं तारकाग्रहमस्तकम्।\\nरौद्रं रौद्रात्मकं घोरं तं केतुं प्रणमाम्यहम्॥',
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
        sanskritSloka: 'ब्रह्मा मुरारिस्त्रिपुरान्तकारी भानुः शशी भूमिसुतो बुधश्च।\\nगुरुश्च शुक्रः शनिराहुकेतवः सर्वे ग्रहाः शान्तिकरा भवन्तु॥',
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
`;

const lastClosingBraceIndex = content.lastIndexOf('};');
if (lastClosingBraceIndex === -1) {
  console.error("Could not find closing brace of SHASTRIC_JYOTISH_DATABASE");
  process.exit(1);
}

const updatedContent = content.slice(0, lastClosingBraceIndex) + navagrahaEntries + content.slice(lastClosingBraceIndex);
fs.writeFileSync(dbPath, updatedContent, 'utf8');
console.log("Successfully inserted all 10 Navagraha entries into shastric-jyotish-database.ts!");
