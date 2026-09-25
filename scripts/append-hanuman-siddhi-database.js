const fs = require('fs');
const path = require('path');

const shastricDbPath = path.join(__dirname, '..', 'src', 'lib', 'yantras', 'shastric-jyotish-database.ts');
const canonicalDbPath = path.join(__dirname, '..', 'src', 'lib', 'sgkb', 'canonical-library-dataset.ts');

const newShastricEntries = `
  hanuman_yantra: {
    id: 'hanuman_yantra',
    taxonomyCategory: 'hanuman',
    lineageAttribution: 'हनुमद्वडवानल स्तोत्रम्, सुदर्शन संहिता, मन्त्रमहोदधि एवं रुद्रयामल तन्त्र',
    nameSanskrit: 'श्रीवीर मारुति हनुमद् यन्त्रम्',
    nameHindi: 'वीर हनुमान यन्त्र (मारुति महायन्त्र)',
    nameEnglish: 'Veer Maruti Hanuman Yantra (Supreme Courage & Invincible Strength Matrix)',
    subTitle: 'The Celestial Rudravatara Cosmogram for Absolute Protection, Eradication of Saturn/Mars Evils, and Fearlessness',
    presidingDeity: 'भगवान् वीर हनुमान (मारुति एवं केसरीनन्दन)',
    tradition: 'रुद्रयामल एवं हनुमद् उपासक आगम परम्परा',
    corePhilosophy: 'हनुमान यन्त्र भगवान् शंकर के एकादश रुद्रावतार, श्रीरामदूत, अञ्जनीपुत्र महावीर हनुमान का ज्यामितीय विग्रह है। "अतुलितबलधामं हेमशैलाभदेहम्... सकलगुणनिधानं वानराणामधीशम्"। यह यन्त्र साधक के भीतर अदम्य आत्मबल, पराक्रम, ब्रह्मचर्य तेज, और निर्भयता का संचार करता है। शनि की साढ़ेसाती, ढैय्या, महादशा, मङ्गल के कुज दोष, प्रेत-बाधा, और मार्ग में आने वाली समस्त आपदाओं को यह यन्त्र तिनके के समान भस्म कर देता है।',
    citations: [
      {
        sourceScripture: 'हनुमद्वडवानल स्तोत्रम् (Hanumad Vadavanala Stotram)',
        chapterOrVerse: 'मूल स्तोत्रम्, श्लोक १-२',
        sanskritSloka: 'ॐ नमो भगवते श्रीमहाहनुमते प्रकटपराक्रमाय\\nसकलदिङ्मण्डलसदाप्रकाशिताय।\\nअतुलितबलवीर्याय वज्रदेहाय महाप्रभवे नमः॥',
        hindiMeaning: 'हे भगवन् श्रीमहाहनुमन्! आप प्रकट पराक्रम वाले हैं, सम्पूर्ण दिशा-मण्डलों में निरन्तर प्रकाशित रहने वाले हैं, अतुलनीय बल और वीर्य के भण्डार हैं, वज्र के समान सुदृढ़ देह वाले हैं — आपको बारम्बार नमस्कार है।',
        englishMeaning: 'Om, salutations unto Lord Sri Maha Hanuman, of manifested supreme valour, eternally illumining all directions of the cosmos, reservoir of incomparable prowess and vital energy, of adamantine diamond-hard body, supreme lord, we bow unto Thee.'
      },
      {
        sourceScripture: 'मन्त्रमहोदधि (Mantra Mahodadhi)',
        chapterOrVerse: 'हनुमत्पटलम्, श्लोक ३-५',
        sanskritSloka: 'अथातः संप्रवक्ष्यामि हनुमद्यन्त्रमुत्तमम्।\\nद्वादशारं तथाष्टाब्जं षट्कोणं बिन्दुसंयुतम्॥\\nयस्य स्मरणमात्रेण भूतप्रेतादयो द्रुताः॥',
        hindiMeaning: 'अब मैं हनुमान जी के उत्तम यन्त्र का वर्णन करता हूँ, जो द्वादश दलों, अष्टदल पद्म, षट्कोण और परम पावन बिन्दु से युक्त है। जिसके स्मरण मात्र से भूत-प्रेत आदि भाग जाते हैं।',
        englishMeaning: 'Now I proclaim the supreme Yantra of Lord Hanuman, composed of twelve petals, an eight-petal lotus, the hexagram, and the sacred Bindu, by whose mere contemplation ghosts, spirits, and evil forces flee instantaneously.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'वज्र भूपुर प्राकार',
        nameEnglish: 'Adamantine Rampart of Invulnerability',
        chakraTitle: 'भूपुर एवं चार वज्र द्वार',
        presidingDeity: 'अष्टदिक्पाल एवं वज्र रक्षक',
        mudraShakti: 'वज्र मुद्रा (Adamantine Shield of Invulnerability)',
        yoginiClass: 'रुद्र डाकिनी शक्ति',
        geometryType: '3 Stepped Concentric Fortified Walls with Guarded Gates',
        significance: 'शत्रुओं, नकारात्मक ऊर्जाओं और बुरी नजर से साधक के घर व कार्यक्षेत्र की अभेद्य किलेबन्दी।'
      },
      {
        index: 2,
        nameSanskrit: 'द्वादशदल मारुति पद्म',
        nameEnglish: '12-Petal Lotus of 12 Sacred Names',
        chakraTitle: 'द्वादश दिव्य नाम मण्डल (हनुमान्, अञ्जनीसुतः, वायुपुत्रः...)',
        presidingDeity: 'द्वादश हनुमद् रूप',
        mudraShakti: 'गदा मुद्रा (Cosmic Mace of Righteous Destruction)',
        yoginiClass: 'द्वादश महाबल शक्ति',
        geometryType: '12 Symmetrical Ogee Petals with 12 Divine Hanuman Names',
        significance: 'जीवन के बारह महीनों में आने वाले संकटों, अकाल भय और दुर्घटनाओं से सम्पूर्ण सुरक्षा।'
      },
      {
        index: 3,
        nameSanskrit: 'अष्टदल हनुमद्बीज पद्म',
        nameEnglish: '8-Petal Lotus of 8 Rudra Beejas',
        chakraTitle: 'अष्टदल बीज मण्डल (ह्रां ह्रीं ह्रूं ह्रैं ह्रौं ह्रः हुं फट्)',
        presidingDeity: 'अष्ट सिद्धियाँ एवं अष्ट भैरव',
        mudraShakti: 'पर्वतोत्पाटन मुद्रा (Leaping with the Dronagiri Mountain)',
        yoginiClass: 'अष्ट रुद्राणी शक्ति',
        geometryType: '8 Symmetrical Ogee Petals with 8 Sacred Beejas',
        significance: 'शनि और मङ्गल के अशुभ प्रभावों को शान्त कर अष्टसिद्धि और नवनिधि का आशीर्वाद।'
      },
      {
        index: 4,
        nameSanskrit: 'वीर षट्कोण व गदा मण्डल',
        nameEnglish: 'Hexagram of Cosmic Heroism & Diamond Mace',
        chakraTitle: 'वीर षट्कोण चक्र (ॐ हं हनुमते रुद्रात्मकाय हुं फट्)',
        presidingDeity: 'भगवान् केसरीनन्दन मारुति',
        mudraShakti: 'दंश-विदारण मुद्रा',
        yoginiClass: 'अग्निशिखा शक्ति',
        geometryType: 'Interlocking Fiery Hexagram with Central Mace Axis',
        significance: 'कठिन से कठिन चुनौतियों, शत्रुओं के षड्यन्त्र और मानसिक दुर्बलता का तत्काल निवारण।'
      },
      {
        index: 5,
        nameSanskrit: 'हं केसरीनन्दन महाबिन्दु',
        nameEnglish: 'Sindoor-Radiant Singularity of Absolute Refuge',
        chakraTitle: 'परम सिन्दूरी महाबिन्दु',
        presidingDeity: 'भगवान् रामभक्त महावीर हनुमान',
        mudraShakti: 'अभय-वरद मुद्रा',
        yoginiClass: 'परा आञ्जनेयी शक्ति',
        geometryType: 'Vermilion Radiant Golden Core with Central Seed हं',
        significance: 'अखण्ड रामभक्ति, अमोघ आत्मविश्वास, शारीरिक बल और परम संकटमोचन।'
      }
    ],
    jyotish: {
      rulingPlanet: 'Mars & Saturn (मङ्गल - शौर्य व पराक्रम, एवं शनि - कर्म, तपस्या व धैर्य)',
      planetSanskrit: 'मङ्गल (भौम) एवं शनि (शनैश्चर / यमानुज)',
      friendlyRashis: ['Mesha (मेष)', 'Vrishchika (वृश्चिक)', 'Makara (मकर)', 'Kumbha (कुम्भ)'],
      friendlyNakshatras: ['Moola', 'Ardra', 'Swati', 'Shravana', 'Purva Bhadrapada'],
      doshaRemedies: [
        {
          doshaName: 'Shani Sade Sati, Dhaiya & Mahadasha (शनि साढ़ेसाती, ढैय्या व महादशा पीड़ा)',
          description: 'Delays in progress, mental agony, physical exhaustion, career collapse, and fear of sudden misfortune.',
          reliefMechanism: 'Lord Hanuman extracted a solemn pledge from Shani Dev never to torment His devotees; His Yantra completely shields against Saturn affliction.'
        },
        {
          doshaName: 'Mangal Dosha & Paranormal Afflictions (मङ्गल दोष, प्रेत-बाधा व दुर्घटना भय)',
          description: 'High temper, blood ailments, frequent injuries, and astral poltergeist interference.',
          reliefMechanism: 'The Yantras vermilion fire core radiates intense prana, neutralizing malevolent spirits and sublimating destructive anger into valor.'
        }
      ],
      lifeAspects: [
        'Supreme Courage & Physical Vitality (अतुलित बल व स्वास्थ्य)',
        'Eradication of Evil Spirits & Black Magic (भूत-प्रेत बाधा व नजर दोष मुक्ति)',
        'Relief from Shani & Mangal Afflictions (शनि व मङ्गल दोष शमन)',
        'Triumph in Legal & Personal Crises (संकट निवारण व विजय)'
      ],
      wearOrInstallDirection: 'South (दक्षिण - यम दिशा रक्षण) or East (पूर्व)',
      favorableDay: 'Tuesday (मंगलवार), Saturday (शनिवार), or Hanuman Jayanti',
      auspiciousTithi: 'Shukla Paksha Purnima, Trayodashi, or Tuesday',
      metalPreference: 'Pure Copper (तांबा), Panchadhatu, or Consecrated Bronze',
      beejMantra: 'ॐ हं हनुमते नमः ॥ ॐ ह्रां ह्रीं ह्रूं ह्रैं ह्रौं ह्रः हुं फट् ॥',
      gayatriMantra: 'ॐ आञ्जनेयाय विद्महे वायुपुत्राय धीमहि तन्नो हनुमान् प्रचोदयात् ॥',
      japaCount: 108,
      malaType: 'Tulsi Mala (तुलसी माला) or Rudraksha Mala',
      dhyanaSloka: 'मनोजवं मारुततुल्यवेगं जितेन्द्रियं बुद्धिमतां वरिष्ठम्। वातात्मजं वानरयूथमुख्यं श्रीरामदूतं शरणं प्रपद्ये॥',
      pratishthaVidhiSummary: [
        'Anoint with pure Gangajal, jasmine oil (चमेली का तेल), and orange sindoor.',
        'Place on red or saffron silk cloth facing South or East.',
        'Offer red marigold flowers, betel leaf with clove (मीठा पान), and bananas.',
        'Offer boondi laddoos or jaggery and roasted gram (चना-गुड़) as naivedya.',
        'Chant the Hanuman Chalisa and the Hanuman Beeja Mantra 108 times.'
      ]
    },
    practicalRemedies: [
      {
        category: 'Protection',
        problem: 'घर में अचानक भय लगना, बार-बार दुर्घटना होना, अथवा अज्ञात तांत्रिक बाधाओं से परिवार का पीड़ित रहना।',
        remedyProtocol: 'घर के मुख्य द्वार या दक्षिण दिशा में हनुमान यन्त्र स्थापित करें, नित्य चमेली के तेल का दीपक जलाएं और हनुमान बाहुक का पाठ करें।'
      },
      {
        category: 'Health',
        problem: 'अत्यधिक आलस्य, नकारात्मक विचार, मानसिक भय, अथवा रक्त-विकार और शारीरिक दुर्बलता।',
        remedyProtocol: 'मंगलवार को यन्त्र के सम्मुख लाल चन्दन या रुद्राक्ष माला से १०८ बार "ॐ हं हनुमते नमः" का जप करें।'
      }
    ]
  },

  sarva_karya_siddhi_yantra: {
    id: 'sarva_karya_siddhi_yantra',
    taxonomyCategory: 'special_purpose',
    lineageAttribution: 'शारदातिलकम्, मन्त्रमहोदधि एवं सिद्धयोग तन्त्र परम्परा',
    nameSanskrit: 'श्रीसर्वकार्यसिद्धि यन्त्रम्',
    nameHindi: 'सर्व कार्यसिद्धि यन्त्र (मनोरथ सिद्धि यन्त्र)',
    nameEnglish: 'Sarva Karya Siddhi Yantra (All-Endeavours Accomplishment Matrix)',
    subTitle: 'The Sovereign Multi-Dimensional Yantra for Triumphant Success in Business, Career, Legal Battles, and Aspirations',
    presidingDeity: 'समस्त कार्यसिद्धि प्रदाता सर्वदेवता मण्डल (गणेश, दुर्गा, कुबेर, विष्णु)',
    tradition: 'आगम एवं तन्त्र साधना परम्परा',
    corePhilosophy: 'सर्व कार्यसिद्धि यन्त्र मानव जीवन के समस्त धार्मिक, आर्थिक, व्यापारिक, व्यावहारिक और आध्यात्मिक पुरुषार्थों की सिद्धि हेतु निर्मित एक परम शक्तिशाली ऊर्जा-मण्डल है। यह यन्त्र नवखण्डात्मक (९ कोष्ठकीय) बीजाक्षरों के गूढ़ संयोजन से युक्त है, जो साधक के संकल्प को ब्रह्माण्डीय शक्तियों के साथ जोड़कर समस्त बाधाओं को दूर करता है। किसी भी नए उद्यम, नौकरी, पदोन्नति, साक्षात्कार, या लम्बे समय से अटके हुए कार्य को निर्विघ्न सम्पन्न कराने में यह अचूक है।',
    citations: [
      {
        sourceScripture: 'शारदातिलकम् (Sharada Tilaka)',
        chapterOrVerse: 'सप्तम पटल, श्लोक २५-२७',
        sanskritSloka: 'सर्वकार्येषु सिद्ध्यर्थं यन्त्रमेतन्मनोहरम्।\\nनवकोष्ठसमं चक्रं सर्वसिद्धिप्रदायकम्॥\\nधारणात्पूजनाच्चापि नरो वाञ्छितमाप्नुयात्॥',
        hindiMeaning: 'समस्त कार्यों में सफलता हेतु यह मनोहर यन्त्र सर्वश्रेष्ठ है। नौ कोष्ठकों वाला यह चक्र सभी सिद्धियों को प्रदान करने वाला है। इसके धारण और पूजन से मनुष्य अपनी समस्त मनोकामनाओं को प्राप्त कर लेता है।',
        englishMeaning: 'For accomplishment in all undertakings, this wondrous Yantra is supreme. This nine-chambered cosmogram bestows all perfections. By consecrated installation and worship of it, man attains all cherished desires.'
      },
      {
        sourceScripture: 'मन्त्रमहोदधि (Mantra Mahodadhi)',
        chapterOrVerse: 'नवम तरङ्ग, श्लोक ४०-४२',
        sanskritSloka: 'ॐ ह्रीं श्रीं क्लीं सर्वकार्यसिद्धिं कुरु कुरु स्वाहा।\\nअनेन मन्त्रराजेन सर्वं सिध्यति नान्यथा॥',
        hindiMeaning: '"ॐ ह्रीं श्रीं क्लीं सर्वकार्यसिद्धिं कुरु कुरु स्वाहा" — इस मन्त्रराज के जप से समस्त कार्य सिद्ध होते हैं, इसमें कोई संशय नहीं है।',
        englishMeaning: 'Om Hreem Shreem Kleem Sarva Karya Siddhim Kuru Kuru Swaha—through this king of mantras, all undertakings achieve absolute fulfillment, without doubt.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'सिद्धि भूपुर प्राकार',
        nameEnglish: 'Citadel of Focused Intent & Unfailing Grounding',
        chakraTitle: 'भूपुर एवं चार सिद्धि द्वार',
        presidingDeity: 'चतुर्द्वार रक्षक देव',
        mudraShakti: 'अङ्कुश मुद्रा (Hooking Success & Golden Opportunities)',
        yoginiClass: 'द्वार सिद्धि शक्ति',
        geometryType: '3 Stepped Concentric Concentrated Bronze Walls with 4 Gates',
        significance: 'साधक के लक्ष्य के चारों ओर एकाग्रता और सकारात्मक ऊर्जा का सुरक्षा कवच निर्मित करना।'
      },
      {
        index: 2,
        nameSanskrit: 'अष्टदल अष्टसिद्धि पद्म',
        nameEnglish: '8-Petal Lotus of 8 Supernatural Perfections',
        chakraTitle: 'अष्टसिद्धि मण्डल (अणिमा, महिमा, गरिमा, लघिमा...)',
        presidingDeity: 'अष्टसिद्धि अधिष्ठात्री देवियाँ',
        mudraShakti: 'वरद मुद्रा (Bestowing Boons of Accomplishment)',
        yoginiClass: 'अष्टसिद्धि योगिनी',
        geometryType: '8 Symmetrical Ogee Petals with Inscribed Ashta Siddhis',
        significance: 'आठों प्रकार की लौकिक व अलौकिक क्षमताओं का जागरण और कार्य में दक्षता।'
      },
      {
        index: 3,
        nameSanskrit: 'मध्य त्रिवलय पीठ',
        nameEnglish: 'Triple Girdle of Energetic Centering',
        chakraTitle: 'त्रिवलय चक्र',
        presidingDeity: 'त्रिपुरा एवं त्रिदेवी',
        mudraShakti: 'पाश मुद्रा',
        yoginiClass: 'त्रिवलय शक्ति',
        geometryType: '3 Concentric Girdles between Lotus and Grid',
        significance: 'इच्छा, ज्ञान, और क्रिया शक्ति का संतुलन स्थापित करना।'
      },
      {
        index: 4,
        nameSanskrit: 'नवखण्डात्मक सर्वसिद्धि चक्र',
        nameEnglish: '9-Chamber Matrix of Cosmic Synthesis',
        chakraTitle: 'नवखण्ड कोष्ठक (ह्रीं, श्रीं, क्लीं / ऐं, ॐ, सौः / गं, दूँ, स्वाहा)',
        presidingDeity: 'नवग्रह एवं नवदुर्गा',
        mudraShakti: 'सर्वसिद्धि मुद्रा',
        yoginiClass: 'नवशक्तिका योगिनी',
        geometryType: 'Sacred 3x3 Grid Inscribed with Potent Seed Syllables',
        significance: 'व्यापारिक, कानूनी, प्रशासनिक और शैक्षणिक रुकावटों का सम्पूर्ण समूल नाश।'
      },
      {
        index: 5,
        nameSanskrit: 'सर्वसिद्धि महाबिन्दु',
        nameEnglish: 'Supreme Singularity of Instant Manifestation',
        chakraTitle: 'परम कार्यसिद्धि महाबिन्दु',
        presidingDeity: 'सकल मनोरथ पूर्णकर्ता परमेश्वर',
        mudraShakti: 'ज्ञान-अभय मुद्रा',
        yoginiClass: 'परा सिद्धि संवित्',
        geometryType: 'Radiant Golden Core with सर्वसिद्धिं कुरु कुरु Inscription',
        significance: 'साधक के शुद्ध संकल्प को वास्तविकता में परिणत करने वाली परा शक्ति।'
      }
    ],
    jyotish: {
      rulingPlanet: 'Sun & Mercury / All Grahas (सर्वग्रह समन्वय - सूर्य, बुध व गुरु)',
      planetSanskrit: 'सर्वग्रह समन्वय (सूर्य, बुध, गुरु व शुक्र)',
      friendlyRashis: ['All 12 Rashis (समस्त १२ राशियाँ)'],
      friendlyNakshatras: ['Pushya', 'Rohini', 'Uttara Phalguni', 'Shravana', 'Revati'],
      doshaRemedies: [
        {
          doshaName: 'Karmic Obstacles & Stalled Progress (भाग्य-अवरोध, कार्य विफलता व निराशा)',
          description: 'Repeated near-misses where endeavours collapse right before completion, causing chronic demoralization.',
          reliefMechanism: 'The Yantra synchronizes the 9 planetary energies, dissolving subtle karmic friction and unlocking forward momentum.'
        },
        {
          doshaName: 'Business Stagnation & Delayed Approvals (व्यापारिक मंदी व सरकारी अनुमति में बाधा)',
          description: 'Tenders being rejected, bureaucratic delays, financial gridlock, and lack of customer patronage.',
          reliefMechanism: 'The Navakhanda matrix activates auspicious synchronicity, opening doors for lucrative ventures and authoritative approval.'
        }
      ],
      lifeAspects: [
        'Total Triumph in Righteous Undertakings (समस्त कार्यों में सफलता)',
        'Business Growth & Commercial Prosperity (व्यापार विस्तार व लाभ)',
        'Career Elevation & Competitive Victory (पदोन्नति व परीक्षाओं में विजय)',
        'Resolution of Entangled Complexities (उलझे हुए मामलों का सहज समाधान)'
      ],
      wearOrInstallDirection: 'North (उत्तर - कुबेर दिशा) or North-East (ईशान कोण)',
      favorableDay: 'Wednesday (बुधवार), Thursday (गुरुवार), or Sunday (रविवार)',
      auspiciousTithi: 'Shukla Paksha Pratipada, Panchami, or Purnima',
      metalPreference: 'Pure Gold (स्वर्ण), Pure Copper (तांबा), or Consecrated Bronze',
      beejMantra: 'ॐ ह्रीं श्रीं क्लीं सर्वकार्यसिद्धिं कुरु कुरु स्वाहा ॥',
      gayatriMantra: 'ॐ सर्वकार्याधिपतये विद्महे सर्वसिद्धिप्रदाय धीमहि तन्नो देवः प्रचोदयात् ॥',
      japaCount: 108,
      malaType: 'Sphatik Mala (स्फटिक माला) or Rudraksha Mala',
      dhyanaSloka: 'सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके। शरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते॥',
      pratishthaVidhiSummary: [
        'Anoint with pure Gangajal, rose water, and fragrant sandalwood paste.',
        'Place on clean yellow or red silk cloth facing North or East.',
        'Offer white or yellow flowers, akshat (unbroken rice), and dhoop-deepa.',
        'Offer sweets or dry fruits and honey as naivedya.',
        'Chant the Sarva Karya Siddhi Mula Mantra 108 times daily.'
      ]
    },
    practicalRemedies: [
      {
        category: 'Career',
        problem: 'नौकरी में पदोन्नति का अटकना, उच्च अधिकारियों से मतभेद, अथवा सरकारी परीक्षाओं में बार-बार असफलता।',
        remedyProtocol: 'कार्यस्थल या अध्ययन कक्ष के उत्तर दिशा में यन्त्र स्थापित कर नित्य स्फटिक माला से १०८ बार "ॐ ह्रीं श्रीं क्लीं सर्वकार्यसिद्धिं कुरु कुरु स्वाहा" का जप करें।'
      },
      {
        category: 'Wealth',
        problem: 'व्यापार में अचानक घाटा, पूंजी का फंस जाना, और नए अनुबन्ध (contracts) प्राप्त करने में कठिनाई।',
        remedyProtocol: 'व्यापारिक प्रतिष्ठान के गल्ले या ईशान कोण में यन्त्र रखकर नित्य प्रातः घी का दीपक प्रज्वलित करें।'
      }
    ]
  },

  santana_gopala_yantra: {
    id: 'santana_gopala_yantra',
    taxonomyCategory: 'santana_family',
    lineageAttribution: 'सन्तानगोपाल स्तोत्रम्, हरिवंश पुराण एवं नारद पाञ्चरात्र परम्परा',
    nameSanskrit: 'श्रीसन्तानगोपाल यन्त्रम्',
    nameHindi: 'सन्तान गोपाल यन्त्र (बालमुकुन्द यन्त्र)',
    nameEnglish: 'Sri Santana Gopala Yantra (Divine Progeny & Lineage Blessing Matrix)',
    subTitle: 'The Nectarous Cosmogram of Child Krishna (Bala Mukunda) for Conception, Safe Pregnancy, and Virtuous Offspring',
    presidingDeity: 'भगवान् बालमुकुन्द श्रीकृष्ण एवं माता यशोदा',
    tradition: 'वैष्णव पाञ्चरात्र एवं पुष्टिमार्गीय बाललीला परम्परा',
    corePhilosophy: 'सन्तान गोपाल यन्त्र भगवान् श्रीकृष्ण के वात्सल्य रस से ओत-प्रोत बाल स्वरूप का साक्षात् प्रतीक है। "देवकीसुतं गोविन्दं वासुदेवं जगत्पतिम्। देहि मे तनयं कृष्ण त्वामहं शरणं गतः॥" यह यन्त्र दम्पति के जैविक व आध्यात्मिक ऊर्जा-क्षेत्रों को परिष्कृत कर गर्भ-दोषों, सन्तान-बाधा, पितृ-दोष, और चिकित्सीय विसंगतियों का शमन करता है। यह गर्भावस्था के दौरान शिशु की पूर्ण रक्षा करता है तथा तेजस्वी, दीर्घायु, गुणवान् और धर्मपरायण सन्तान की प्राप्ति का वरदान देता है।',
    citations: [
      {
        sourceScripture: 'हरिवंश पुराण (Harivamsha Purana)',
        chapterOrVerse: 'विष्णुपर्व, अध्याय ६०, श्लोक ३५-३७',
        sanskritSloka: 'देवकीसुतं गोविन्दं वासुदेवं जगत्पतिम्।\\nदेहि मे तनयं कृष्ण त्वामहं शरणं गतः॥\\nयन्त्रं च बालकृष्णस्य सर्वसन्तानदायकम्॥',
        hindiMeaning: 'हे देवकीनन्दन! हे गोविन्द! हे वासुदेव! हे जगत् के स्वामी! हे श्रीकृष्ण! मुझे सुयोग्य पुत्र/सन्तान प्रदान कीजिए, मैं आपकी शरण में आया हूँ। बालकृष्ण का यह यन्त्र समस्त सन्तान सुख प्रदान करने वाला है।',
        englishMeaning: 'O Son of Devaki! O Govinda! O Vasudeva! O Sovereign Ruler of the Universe! O Lord Krishna! Bestow unto me virtuous progeny, for I have taken ultimate refuge in Thee. This Yantra of infant Krishna bestows every blessing of offspring.'
      },
      {
        sourceScripture: 'सन्तानगोपाल स्तोत्रम् (Santana Gopala Stotram)',
        chapterOrVerse: 'स्तोत्रम्, श्लोक १-२',
        sanskritSloka: 'ॐ क्लीं गोपालवेषधारिणे पुत्रं देहि मे स्वाहा।\\nध्यायेत् बालं मुकुन्दं च नवनीताहारिणं विभुम्॥',
        hindiMeaning: '"ॐ क्लीं गोपालवेषधारिणे पुत्रं देहि मे स्वाहा" — माखन चुराने वाले, बालमुकुन्द भगवान् का ध्यान करना चाहिए, जो समस्त कामनाओं को पूर्ण करने वाले हैं।',
        englishMeaning: 'Om Kleem Gopalaveshadharine Putram Dehi Me Swaha—one should meditate on the divine child Mukunda stealing butter, all-pervading and fulfilling every paternal aspiration.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'वात्सल्य भूपुर प्राकार',
        nameEnglish: 'Citadel of Familial Protection & Biological Sanctity',
        chakraTitle: 'भूपुर एवं चार वात्सल्य द्वार',
        presidingDeity: 'चतुर्द्वार रक्षक देव',
        mudraShakti: 'वेणु मुद्रा (Sacred Flute of Divine Melody)',
        yoginiClass: 'वात्सल्य मातृका',
        geometryType: '3 Stepped Concentric Protective Walls with 4 Gates',
        significance: 'गर्भवती माता और गर्भस्थ शिशु को नकारात्मक ऊर्जाओं, नजर-दोष और असाध्य बाधाओं से बचाना।'
      },
      {
        index: 2,
        nameSanskrit: 'षोडशदल सन्तान मन्त्र पद्म',
        nameEnglish: '16-Petal Lotus of the Santana Gopala Mantra',
        chakraTitle: 'षोडशाक्षर मण्डल (ॐ क्लीं गोपालवेषधारिणे पुत्रं देहि मे स्वाहा)',
        presidingDeity: 'षोडश कला श्रीकृष्ण रूप',
        mudraShakti: 'नवनीत मुद्रा (Lifting the Pot of Pure Butter)',
        yoginiClass: 'षोडश गोपिका शक्ति',
        geometryType: '16 Symmetrical Ogee Petals with Inscribed Santana Mantra Syllables',
        significance: 'दम्पति के शरीर में सप्त धातुओं की शुद्धि तथा गर्भाधान हेतु उर्वरता (fertility) की वृद्धि।'
      },
      {
        index: 3,
        nameSanskrit: 'अष्टदल बालमुकुन्द पद्म',
        nameEnglish: '8-Petal Lotus of 8 Divine Protective Epithets',
        chakraTitle: 'अष्टदल रक्षक मण्डल (दामोदर, माधव, गोविन्द, मुकुन्द...)',
        presidingDeity: 'अष्ट बालमुकुन्द शक्तियाँ',
        mudraShakti: 'कदम्ब-मञ्जरी मुद्रा',
        yoginiClass: 'अष्टसखी शक्ति',
        geometryType: '8 Symmetrical Ogee Petals with 8 Divine Krishna Names',
        significance: 'गर्भपात (miscarriage) के भय का निवारण और शिशु की सुगम व सुरक्षित उत्पत्ति।'
      },
      {
        index: 4,
        nameSanskrit: 'वेणुगोपाल षट्कोण व मुरली मण्डल',
        nameEnglish: 'Venugopala Hexagram & Peacock-Feather Matrix',
        chakraTitle: 'षट्कोण एवं वेणु मण्डल (देवकीसुतं गोविन्दं...)',
        presidingDeity: 'भगवान् वेणुगोपाल',
        mudraShakti: 'मयूरपिच्छ मुद्रा',
        yoginiClass: 'आनन्द संवित् शक्ति',
        geometryType: 'Interlocking Vaishnava Hexagram with Transversal Flute & Peacock Crest',
        significance: 'सन्तान में सद्गुण, मेधा, सौन्दर्य, आज्ञाकारिता और दीर्घायु की प्रतिष्ठा।'
      },
      {
        index: 5,
        nameSanskrit: 'क्लीं बाल गोपाल महाबिन्दु',
        nameEnglish: 'Sacred Kamabeeja Singularity of Divine Inception',
        chakraTitle: 'परम बालमुकुन्द महाबिन्दु',
        presidingDeity: 'परब्रह्म श्री बालकृष्ण',
        mudraShakti: 'वरद-अभय मुद्रा',
        yoginiClass: 'परा प्रेम संवित्',
        geometryType: 'Celestial Cyan & Gold Radiant Core with Central Seed क्लीं',
        significance: 'वंश-परम्परा की अखण्डता, कुल-दीपक की प्राप्ति तथा गृहस्थ जीवन में परम आनन्द।'
      }
    ],
    jyotish: {
      rulingPlanet: 'Jupiter & Venus (बृहस्पति - सन्तान कारक, एवं शुक्र - बीज व उर्वरता कारक)',
      planetSanskrit: 'बृहस्पति (गुरु) एवं शुक्र (भार्गव / वीर्य कारक)',
      friendlyRashis: ['Karka (कर्क)', 'Dhanu (धनु)', 'Meena (मीन)', 'Vrishabha (वृषभ)', 'Tula (तुला)'],
      friendlyNakshatras: ['Rohini', 'Hasta', 'Pushya', 'Anuradha', 'Revati'],
      doshaRemedies: [
        {
          doshaName: 'Santana Badha & Afflicted 5th House (पंचम भाव दोष व सन्तान हीनता)',
          description: 'Afflictions to the 5th house of progeny by Rahu, Ketu, or Saturn, causing conception failure or recurrent miscarriages.',
          reliefMechanism: 'The Santana Gopala Yantra purifies the generative etheric matrix, restoring harmony between maternal and paternal energies.'
        },
        {
          doshaName: 'Pitra Dosha & Sarpa Dosha in Progeny (सर्प दोष व वंश वृद्धि में बाधा)',
          description: 'Ancestral blocks affecting the continuation of the family lineage.',
          reliefMechanism: 'Lord Krishna as the protector of cows and children absolves generational curses, ensuring healthy progeny.'
        }
      ],
      lifeAspects: [
        'Conception & Fertility Blessing (सुगम गर्भाधान व उर्वरता)',
        'Safe Pregnancy & Childbirth (सुरक्षित गर्भावस्था व प्रसव)',
        'Virtuous & Healthy Offspring (तेजस्वी व दीर्घायु सन्तान)',
        'Family Lineage Continuity (वंश-वृद्धि व कुल रक्षा)'
      ],
      wearOrInstallDirection: 'East (पूर्व) or North-East (ईशान कोण / शयन कक्ष)',
      favorableDay: 'Thursday (गुरुवार), Wednesday (बुधवार), or Janmashtami',
      auspiciousTithi: 'Shukla Paksha Ashtami, Panchami, or Poornima',
      metalPreference: 'Pure Silver (चांदी), Pure Brass/Copper, or Consecrated Bronze',
      beejMantra: 'ॐ क्लीं देवकीसुत गोविन्द वासुदेव जगत्पते। देहि मे तनयं कृष्ण त्वामहं शरणं गतः ॥',
      gayatriMantra: 'ॐ गोपालवेषाय विद्महे दामोदराय धीमहि तन्नो कृष्णः प्रचोदयात् ॥',
      japaCount: 108,
      malaType: 'Tulsi Mala (तुलसी माला) or Kamal Gatta Mala',
      dhyanaSloka: 'फुल्लेन्दीवरकान्तिमिन्दुवदनं बर्हावतंसप्रियं श्रीवत्साङ्कमुदारकौस्तुभधरं पीताम्बरं सुन्दरम्। गोपीनां नयनोत्पलार्चिततनुं गोषङ्घमध्यस्थितं गोविन्दं कलवेणुवादनपरं दिव्याङ्गभूषं भजे॥',
      pratishthaVidhiSummary: [
        'Anoint with pure raw cow milk, honey, and sacred Gangajal.',
        'Place on clean yellow silk cloth facing East.',
        'Offer white fragrant flowers, Tulsi leaves, and yellow sandalwood paste.',
        'Offer freshly churned butter with sugar candy (माखन-मिश्री) and yellow fruits as naivedya.',
        'Both husband and wife should sit together and chant the Santana Gopala Mantra 108 times.'
      ]
    },
    practicalRemedies: [
      {
        category: 'Relationships',
        problem: 'विवाह के कई वर्षों बाद भी सन्तान प्राप्ति में बाधा, या बार-बार गर्भपात (miscarriage) का दुःख।',
        remedyProtocol: 'दम्पति अपने शयनकक्ष या पूजा स्थान के ईशान कोण में सन्तान गोपाल यन्त्र स्थापित करें, नित्य माखन-मिश्री का भोग लगाएं और मिलकर १०८ बार मन्त्र जप करें।'
      },
      {
        category: 'Health',
        problem: 'गर्भावस्था के दौरान माता का अस्वस्थ रहना, रक्तचाप या तनाव के कारण गर्भस्थ शिशु के स्वास्थ्य पर संकट।',
        remedyProtocol: 'यन्त्र के सम्मुख तांबे या चांदी के पात्र में जल रखकर सन्तान गोपाल स्तोत्र का पाठ करें और वह अभिमन्त्रित जल गर्भवती माता को पिलाएं।'
      }
    ]
  },

  dhanvantari_yantra: {
    id: 'dhanvantari_yantra',
    taxonomyCategory: 'special_purpose',
    lineageAttribution: 'सुश्रुत संहिता, अग्नि पुराण, श्रीमद्भागवत महापुराण एवं मन्त्रमहोदधि',
    nameSanskrit: 'श्रीधन्वन्तरि आरोग्य यन्त्रम्',
    nameHindi: 'धनवन्तरि यन्त्र (आरोग्य एवं अमृत यन्त्र)',
    nameEnglish: 'Sri Dhanvantari Arogya Yantra (Divine Healer & Longevity Amrita Matrix)',
    subTitle: 'The Celestial Medicine Cosmogram of Lord Dhanvantari for Eradicating Chronic Diseases, Rejuvenation, and Long Life',
    presidingDeity: 'भगवान् धन्वन्तरि (आयुर्वेद के आदि प्रवर्तक एवं अमृत-दाता)',
    tradition: 'आयुर्वेदिक एवं पाञ्चरात्र आगम परम्परा',
    corePhilosophy: 'भगवान् धन्वन्तरि क्षीरसागर मन्थन के समय अपने चतुर्भुज स्वरूप में शङ्ख, चक्र, जलौका (लीच), और अमृत का कलश लेकर अवतरित हुए थे। वे समस्त विश्व के आधि-व्याधि-विनाशक आदि वैद्य हैं। धनवन्तरि यन्त्र शरीर के त्रिदोषों (वात, पित्त, कफ) और सप्त धातुओं को सन्तुलित करता है। यह असाध्य रोगों, शल्य चिकित्सा (ऑपरेशन) के भयों, मानसिक अवसाद, और अकाल मृत्यु की सम्भावनाओं का परिहार कर साधक को निरोगी काया, ओज, तेज, और शतायु जीवन प्रदान करता है।',
    citations: [
      {
        sourceScripture: 'श्रीमद्भागवत महापुराण (Srimad Bhagavatam)',
        chapterOrVerse: 'अष्टम स्कन्ध, अध्याय ८, श्लोक ३४-३५',
        sanskritSloka: 'अथाभ्युदगादुदधेरमृतं कुम्भमुद्वहन्।\\nपीताम्बरधरः श्रीमान् धन्वन्तरिरिति श्रुतः॥\\nआरोग्यप्रदः सर्वव्याधिहर्ता जगद्गुरुः॥',
        hindiMeaning: 'तत्पश्चात् समुद्र से अपने हाथों में अमृत का कलश लिए हुए, पीताम्बरधारी, परम कान्तिमान् भगवान् धन्वन्तरि प्रकट हुए, जो समस्त संसार को आरोग्य प्रदान करने वाले और समस्त व्याधियों का हरण करने वाले हैं।',
        englishMeaning: 'Thereupon emerged from the ocean Lord Dhanvantari, carrying in His hands the urn of celestial nectar, dressed in golden yellow silk, resplendent, the bestower of radiant health and the redeemer of all afflictions across the three worlds.'
      },
      {
        sourceScripture: 'सुश्रुत संहिता (Sushruta Samhita)',
        chapterOrVerse: 'सूत्रस्थानम्, अध्याय १, श्लोक २-३',
        sanskritSloka: 'नमामि धन्वन्तरिमादिदेवं सुरासुरैर्वन्दितपादपद्मम्।\\nलोके जरारुग्भयमृत्युनाशं दातारमीशं विविधौषधीनाम्॥',
        hindiMeaning: 'जिनके चरण-कमलों की वन्दना देव और असुर दोनों करते हैं, जो संसार में वृद्धावस्था, रोग, भय और अकाल मृत्यु का नाश करने वाले हैं, तथा विविध औषधियों के स्वामी हैं — उन आदिदेव भगवान् धन्वन्तरि को मैं नमन करता हूँ।',
        englishMeaning: 'I bow unto Lord Dhanvantari, the primordial deity whose lotus feet are revered by both gods and demons, who eradicates decrepitude, disease, terror, and premature demise, the supreme sovereign dispenser of all medicinal herbs.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'आरोग्य भूपुर प्राकार',
        nameEnglish: 'Citadel of Immunity & Biological Defense',
        chakraTitle: 'भूपुर एवं चार अमृत द्वार',
        presidingDeity: 'अश्विनीकुमार एवं अष्टदिक्पाल',
        mudraShakti: 'अभय-आरोग्य मुद्रा',
        yoginiClass: 'आरोग्य द्वारपालिका',
        geometryType: '3 Concentric Stepped Fortified Walls with Guarded Gates',
        significance: 'संक्रामक रोगों, महामारियों, और विषाक्त वायु-तरंगों से घर और शरीर की सुरक्षा।'
      },
      {
        index: 2,
        nameSanskrit: 'द्वादशदल सूर्य-अमृत पद्म',
        nameEnglish: '12-Petal Lotus of 12 Solar Healing Streams',
        chakraTitle: 'द्वादशाक्षर मण्डल (ॐ नमो भगवते धन्वन्तरये)',
        presidingDeity: 'द्वादश आदित्य एवं अमृत किरण देव',
        mudraShakti: 'शङ्ख मुद्रा (Cleansing Cellular Resonances)',
        yoginiClass: 'द्वादश अमृत कला',
        geometryType: '12 Symmetrical Ogee Petals with Dhanvantari Syllables',
        significance: 'शरीर के बारह प्रधान अंगों और नाड़ियों में सूर्य की जीवनदायिनी प्राण-ऊर्जा का संचार।'
      },
      {
        index: 3,
        nameSanskrit: 'अष्टदल ओषधि पद्म',
        nameEnglish: '8-Petal Lotus of 8 Medicinal Emblems',
        chakraTitle: 'अष्टदल चक्र (अमृताय, शङ्खाय, चक्राय, जलौकाय...)',
        presidingDeity: 'अष्ट दिव्य ओषधि शक्तियाँ',
        mudraShakti: 'जलौका मुद्रा (Extraction of Toxins & Impurities)',
        yoginiClass: 'अष्टभेषज शक्ति',
        geometryType: '8 Symmetrical Ogee Petals with Healing Emblems',
        significance: 'त्रिदोषों (वात, पित्त, कफ) का संतुलन तथा औषधियों के प्रभाव को शतगुणित करना।'
      },
      {
        index: 4,
        nameSanskrit: 'अमृत कलश व सुदर्शन किरण मण्डल',
        nameEnglish: 'Sacred Nectar Urn & Solar Ray Matrix',
        chakraTitle: 'अमृत कुम्भ एवं अष्टकिरण चक्र',
        presidingDeity: 'भगवान् धन्वन्तरि (अमृत कलश हस्त)',
        mudraShakti: 'अमृत-कुम्भ मुद्रा (Holding the Cosmic Nectar)',
        yoginiClass: 'महाअमृता संवित्',
        geometryType: 'Sacred Kalasha Geometric Silhouette with 8 Radiating Healing Beams',
        significance: 'असाध्य व चिरकालिक रोगों (chronic illnesses) से मुक्ति तथा जीवन शक्ति का पुनरुद्धार।'
      },
      {
        index: 5,
        nameSanskrit: 'अमृत संजीवन महाबिन्दु',
        nameEnglish: 'Radiantly Vibrant Core of Invincible Vitality',
        chakraTitle: 'परम आरोग्य महाबिन्दु',
        presidingDeity: 'परम वैद्य भगवान् धन्वन्तरि',
        mudraShakti: 'संजीवनी मुद्रा',
        yoginiClass: 'परा प्राणात्मिका शक्ति',
        geometryType: 'Emerald & Gold Radiant Nectar Core with Seed ॐ धं धन्वन्तरये',
        significance: 'अकाल मृत्यु के भय का समूल नाश, दीर्घायु, ओज, तेज और संपूर्ण स्वास्थ्य लाभ।'
      }
    ],
    jyotish: {
      rulingPlanet: 'Sun & Moon / Jupiter (सूर्य - प्राण व आत्मा, चन्द्र - अमृत व मन, एवं गुरु - जीव कारक)',
      planetSanskrit: 'सूर्य (आरोग्य कारक) एवं चन्द्र (अमृत कारक)',
      friendlyRashis: ['Simha (सिंह)', 'Karka (कर्क)', 'Dhanu (धनु)', 'Meena (मीन)'],
      friendlyNakshatras: ['Ashwini', 'Pushya', 'Rohini', 'Shatabhisha', 'Mrigashira'],
      doshaRemedies: [
        {
          doshaName: 'Chronic Ailments & 6th House Affliction (षष्ठ भाव रोग दोष व असाध्य व्याधि)',
          description: 'Long-standing illnesses that defy diagnosis, heavy recurring medical expenditures, and depleted immunity.',
          reliefMechanism: 'The Yantra emits concentrated healing vibrations that align the physical cellular structure with cosmic prana.'
        },
        {
          doshaName: 'Afflicted Sun & Markesha Fear (सूर्य दोष, प्राण-क्षीणता व अकाल मृत्यु भय)',
          description: 'Heart troubles, eye afflictions, bone calcium depletion, and anxiety surrounding critical surgeries.',
          reliefMechanism: 'Invoke Lord Dhanvantari to bestow divine amrita, infusing the seeker with vital stamina and protecting life essence.'
        }
      ],
      lifeAspects: [
        'Eradication of Chronic Diseases (असाध्य व दीर्घकालिक रोगों का निवारण)',
        'Longevity & Vitality Enhancement (दीर्घायु, ओज व कान्ति वृद्धि)',
        'Success in Medical Treatments & Surgery (औषधि व शल्य चिकित्सा में सफलता)',
        'Purification of Tridoshas & Mental Peace (त्रिदोष सन्तुलन व मानसिक स्वास्थ्य)'
      ],
      wearOrInstallDirection: 'North-East (ईशान कोण / आरोग्य स्थान) or East (पूर्व)',
      favorableDay: 'Sunday (रविवार), Thursday (गुरुवार), or Dhanteras (धनत्रयोदशी)',
      auspiciousTithi: 'Krishna Paksha Trayodashi (Dhanvantari Jayanti) or Shukla Poornima',
      metalPreference: 'Pure Copper (तांबा), Pure Silver (चांदी), or Consecrated Bronze',
      beejMantra: 'ॐ धं धन्वन्तरये नमः ॥ ॐ नमो भगवते धन्वन्तरये अमृतकलशहस्ताय स्वाहा ॥',
      gayatriMantra: 'ॐ वासुदेवाय विद्महे सुधाहस्ताय धीमहि तन्नो धन्वन्तरिः प्रचोदयात् ॥',
      japaCount: 108,
      malaType: 'Tulsi Mala (तुलसी माला) or Sphatik Mala',
      dhyanaSloka: 'शङ्खं चक्रं जलौकां दधदमृतघटं चारुदोर्भिश्चतुर्भिः सूक्ष्माच्छोद्भातिहृद्यं शुकपरिविलसच्छिन्नपद्मासनस्थम्। पीताम्बरं पयोदच्छविकररुचिरं सर्वभूषाभिरामं ध्यायेद्धन्वन्तरिं तं सकलदमनदं वेदसद्माभिरामम्॥',
      pratishthaVidhiSummary: [
        'Anoint with pure Gangajal, cow ghee, and fragrant white sandalwood paste.',
        'Place on clean green or yellow silk cloth facing North-East or East.',
        'Offer Tulsi leaves, neem twigs, white flowers, and dhoop.',
        'Offer pure water in a copper or silver pot, amla (आंवला), and honey as naivedya.',
        'Chant the Dhanvantari Mula Mantra 108 times daily before taking medicines.'
      ]
    },
    practicalRemedies: [
      {
        category: 'Health',
        problem: 'लम्बे समय से किसी असाध्य रोग, जोड़ों के दर्द, पाचन विकार या चर्म रोग से पीड़ित रहना।',
        remedyProtocol: 'ईशान कोण में धनवन्तरि यन्त्र स्थापित करें, यन्त्र के सम्मुख तांबे के लोटे में जल रखकर १०८ बार "ॐ धं धन्वन्तरये नमः" का जप करें और वह जल प्रातः खाली पेट पिएं।'
      },
      {
        category: 'Spiritual',
        problem: 'परिवार में लगातार किसी न किसी सदस्य का बीमार रहना और दवाइयों पर अत्यधिक धन का अपव्यय।',
        remedyProtocol: 'धनतेरस या किसी रविवार को यन्त्र का पंचामृत से अभिषेक करें और नित्य घर में गुग्गल व कपूर की धूप दें।'
      }
    ]
  }
`;

const newCanonicalEntries = `
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
  }
`;

// 1. Append to shastric-jyotish-database.ts
let shastricContent = fs.readFileSync(shastricDbPath, 'utf8');
const shastricCloseIdx = shastricContent.lastIndexOf('};');
if (shastricCloseIdx === -1) {
  console.error('Could not find closing }; in shastric-jyotish-database.ts');
  process.exit(1);
}

const beforeClose = shastricContent.substring(0, shastricCloseIdx).trimEnd();
const separator = beforeClose.endsWith(',') ? '\n' : ',\n';
const updatedShastric = beforeClose + separator + newShastricEntries + '\n};\n';
fs.writeFileSync(shastricDbPath, updatedShastric, 'utf8');
console.log('[SUCCESS] Appended 4 Task 12 Yantras to shastric-jyotish-database.ts');

// 2. Append to canonical-library-dataset.ts
let canonicalContent = fs.readFileSync(canonicalDbPath, 'utf8');
const canonicalCloseIdx = canonicalContent.lastIndexOf('];');
if (canonicalCloseIdx === -1) {
  console.error('Could not find closing ]; in canonical-library-dataset.ts');
  process.exit(1);
}

const canonicalBeforeClose = canonicalContent.substring(0, canonicalCloseIdx).trimEnd();
const canonicalSeparator = canonicalBeforeClose.endsWith(',') ? '\n' : ',\n';
const updatedCanonical = canonicalBeforeClose + canonicalSeparator + newCanonicalEntries + '\n];\n';
fs.writeFileSync(canonicalDbPath, updatedCanonical, 'utf8');
console.log('[SUCCESS] Appended 4 Task 12 Yantras to canonical-library-dataset.ts');
