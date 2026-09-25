const fs = require('fs');
const path = require('path');

const shastricDbPath = path.join(__dirname, '..', 'src', 'lib', 'yantras', 'shastric-jyotish-database.ts');
const canonicalDbPath = path.join(__dirname, '..', 'src', 'lib', 'sgkb', 'canonical-library-dataset.ts');

const shivaShastricEntries = `
  swarna_akarshana_bhairava_yantra: {
    id: 'swarna_akarshana_bhairava_yantra',
    taxonomyCategory: 'shiva',
    lineageAttribution: 'रुद्रयामल तन्त्रम् एवं बटुक भैरव कल्प',
    nameSanskrit: 'श्री स्वर्णाकर्षण भैरव यन्त्रम्',
    nameHindi: 'स्वर्णाकर्षण भैरव यन्त्र (दारिद्र्य दहन व सुवर्ण आकर्षण)',
    nameEnglish: 'Swarna Akarshana Bhairava Yantra (Attractor of Gold & Cosmic Treasures)',
    subTitle: 'The Supreme Rudra Matrix for Dissolving Acute Poverty and Attracting Gold',
    presidingDeity: 'भगवान् स्वर्णाकर्षण भैरव',
    tradition: 'शैव भैरव परम्परा',
    corePhilosophy: 'भगवान् शिव का वह दयालु स्वरूप जो अपने भक्तों के दारिद्र्य का समूल नाश कर उन्हें स्वर्ण, रजत और धन के विपुल भण्डार से परिपूर्ण करता है। इसका षट्कोण और त्रिकोण स्वर्ण आकर्षण ऊर्जा को केन्द्रित करता है।',
    citations: [
      {
        sourceScripture: 'रुद्रयामल तन्त्रम्',
        chapterOrVerse: 'स्वर्णाकर्षण भैरव स्तोत्रम्',
        sanskritSloka: 'ॐ ऐं क्लां क्लीं ह्लूं ह्रां ह्रीं ह्रूं सः।\\nआपदुद्धारणाय अजामलवद्धाय लोकेश्वराय स्वर्णाकर्षणभैरवाय नमः॥',
        hindiMeaning: 'समस्त विपत्तियों का उद्धार करने वाले, अज्ञानान्धकार का नाश करने वाले और लोक के ईश्वर स्वर्णाकर्षण भैरव को नमस्कार है।',
        englishMeaning: 'Salutations to Lord Swarna Akarshana Bhairava, the redeemer from all perils, annihilator of ignorance, drawing perpetual golden abundance.'
      },
      {
        sourceScripture: 'बटुक भैरव कल्प',
        chapterOrVerse: 'पटल १२, श्लोक २०',
        sanskritSloka: 'यन्त्रेऽस्मिन् पूजिते नित्यं सुवर्णवृष्टिरुत्तमा।\\nदारिद्र्योपहता लोकाः प्राप्नुवन्ति परां श्रियम्॥',
        hindiMeaning: 'इस यन्त्र का नित्य पूजन करने से उत्तम स्वर्ण कृपा होती है और दारिद्र्य से पीड़ित मनुष्य परम ऐश्वर्य और धन प्राप्त करता है।',
        englishMeaning: 'By the daily adoration of this yantra, the golden grace of prosperity rains upon the devotee and destitution is replaced with supreme fortune.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'स्वर्ण प्राकार भूपुर',
        nameEnglish: 'Golden Rampart Citadel & 4 Cardinal Portals',
        chakraTitle: 'प्रथम आवरण - कनक भूपुर प्राकार',
        presidingDeity: 'भगवान् भैरव',
        mudraShakti: 'दण्ड मुद्रा',
        yoginiClass: 'प्रकट योगिनी',
        geometryType: 'Triple Rampart Citadel with 4 Gateways',
        significance: 'Impenetrable fortress repelling all psychic poverty, debt vultures, and malicious curses.'
      },
      {
        index: 2,
        nameSanskrit: 'सुवर्ण त्रिवलय',
        nameEnglish: 'Triple Girdle of Inviolable Wealth Guard',
        chakraTitle: 'द्वितीय आवरण - सुवर्ण त्रिवलय मण्डल',
        presidingDeity: 'अष्ट भैरव शक्तियाँ',
        mudraShakti: 'अङ्कुश मुद्रा',
        yoginiClass: 'गुप्त योगिनी',
        geometryType: '3 Concentric Golden Bronze Girdles',
        significance: 'Circulates the flow of high-value business deals, recovered blocked capital, and precious metal assets.'
      },
      {
        index: 3,
        nameSanskrit: 'अष्टदल भैरव पद्म',
        nameEnglish: '8-Petal Lotus of the 8 Bhairava Seeds',
        chakraTitle: 'तृतीय आवरण - अष्टदल मण्डल',
        presidingDeity: 'अष्ट भैरव (असिताङ्ग, रुरु, चण्ड, क्रोध, उन्मत्त, कपाल, भीषण, संहार)',
        mudraShakti: 'खड्ग मुद्रा',
        yoginiClass: 'गुप्ततर योगिनी',
        geometryType: '8 Ogee Petals with Spines & Seed Mantras',
        significance: 'Inscribed with the 8 divine seeds (ऐं, क्लां, क्लीं, ह्लूं, ह्रां, ह्रीं, ह्रूं, सः), shattering acute financial blockages.'
      },
      {
        index: 4,
        nameSanskrit: 'स्वर्णाकर्षण षट्कोण',
        nameEnglish: 'Swarna Akarshana Hexagram of Golden Radiance',
        chakraTitle: 'चतुर्थ आवरण - षट्कोण मण्डल',
        presidingDeity: 'भैरव एवं भैरवी युगल',
        mudraShakti: 'पाश मुद्रा',
        yoginiClass: 'सम्प्रदाय योगिनी',
        geometryType: 'Interlaced Hexagram with Dynamic Apexes',
        significance: 'Combines dynamic solar fire and magnetic lunar attraction, pulling unexpected revenue.'
      },
      {
        index: 5,
        nameSanskrit: 'आपदुद्धारण त्रिकोण पीठ',
        nameEnglish: 'Crisis-Relief Primary Downward Triangle',
        chakraTitle: 'पञ्चम आवरण - महात्रिकोण पीठ',
        presidingDeity: 'आपदुद्धारक भैरव',
        mudraShakti: 'वरदाभय मुद्रा',
        yoginiClass: 'कुलोत्तीर्ण योगिनी',
        geometryType: 'Downward Primary Golden Triangle',
        significance: 'The miraculous center where debts are dissolved and sudden unexpected wealth manifests.'
      },
      {
        index: 6,
        nameSanskrit: 'ऐं क्लीं सुवर्ण महाबिन्दु',
        nameEnglish: 'Aim Kleem Supreme Golden Nucleus',
        chakraTitle: 'षष्ठ आवरण - महाबिन्दु चक्र',
        presidingDeity: 'परम स्वर्णाकर्षण भैरव',
        mudraShakti: 'सुवर्ण मुद्रा',
        yoginiClass: 'परापरातिरहस्य योगिनी',
        geometryType: 'Infinitesimal Singularity Point with Aim Kleem Seeds',
        significance: 'The core luminous vortex. Inscribed with "ऐं" (wisdom) and "क्लीं" (magnetic wealth attraction).'
      }
    ],
    jyotish: {
      rulingPlanet: 'बृहस्पति एवं मङ्गल (Jupiter & Mars - Guru-Mangala Dhana Yoga)',
      planetSanskrit: 'बृहस्पति-भौम धनयोग',
      friendlyRashis: ['धनु', 'मीन', 'मेष', 'वृश्चिक'],
      friendlyNakshatras: ['पुनर्वसु', 'अनुराधा', 'धनिष्ठा', 'मृगशिरा'],
      doshaRemedies: [
        {
          doshaName: 'Kharpa/Daridra Yoga & Debt Slavery (दारिद्र्य योग व ऋण मुक्ति)',
          description: 'Severe generational debts, sudden business collapse, and helplessness in funding crucial family needs.',
          reliefMechanism: 'Swarna Akarshana Bhairava instantly destroys the energetic roots of financial helplessness.'
        },
        {
          doshaName: 'Rahu-Shani Arishta & Property Disputes (राहु-शनि अरिष्ट व भूमि विवाद)',
          description: 'Loss of ancestral gold, legal freezing of family bank accounts, and constant fear of bailiffs.',
          reliefMechanism: 'The fierce golden luminescence dispels astral poverty entities and restores legal ownership of wealth.'
        }
      ],
      lifeAspects: ['Immediate Debt Liquidation', 'Attraction of Gold, Gems & Real Estate', 'Freedom from Poverty & Bankruptcy', 'Total Fearlessness & Royal Dignity'],
      wearOrInstallDirection: 'North or North-East (उत्तर अथवा ईशान दिशा)',
      favorableDay: 'Tuesday, Sunday, or Ashtami Tithi (मङ्गलवार, रविवार, अष्टमी)',
      auspiciousTithi: 'Kala Bhairava Jayanti, Shukla Ashtami, Pushya Nakshatra',
      metalPreference: 'Pure Copper (ताम्र), Gold (स्वर्ण), or Pure Silver',
      beejMantra: 'ॐ ऐं क्लां क्लीं ह्लूं ह्रां ह्रीं ह्रूं सः आपदुद्धारणाय स्वर्णाकर्षणभैरवाय नमः ॥',
      gayatriMantra: 'ॐ स्वर्णाकर्षणभैरवाय विद्महे आपदुद्धारणाय धीमहि तन्नो भैरवः प्रचोदयात् ॥',
      japaCount: 108,
      malaType: 'Rudraksha Mala or Raktachandan Rosary',
      dhyanaSloka: 'मन्दारद्रुममूलभाजि विमले पीठे निषण्णं प्रभुं स्वर्णद्युतिमुज्ज्वलाङ्गमुदितं भक्ताभिलाषप्रदम्। हस्तैर्भक्तजनाभयं च वरदं सुवर्णपात्रं तथा बिभ्राणं वरचक्रचापममलं वन्दे सुवर्णप्रदम्॥',
      pratishthaVidhiSummary: [
        'Place on clean yellow or red silk facing North.',
        'Offer yellow flowers, pure honey, dry fruits, and a jaggery sweetened milk pudding.',
        'Light a fragrant pure cow ghee lamp or pure sesame oil lamp with cotton wick.',
        'Chant the Swarna Akarshana Bhairava mantra 108 times at twilight or midnight.'
      ]
    },
    practicalRemedies: [
      {
        category: 'Wealth',
        problem: 'व्यापार में भयंकर घाटा, बैंक लोन का दबाव, और संपत्ति बिकने की नौबत आना।',
        remedyProtocol: 'उत्तर दिशा में यन्त्र की प्रतिष्ठा कर रविवार या मंगलवार की संध्या को "ॐ ऐं क्लां क्लीं ह्लूं ह्रां ह्रीं ह्रूं सः" का १०८ बार जप करें।'
      },
      {
        category: 'Protection',
        problem: 'शत्रुओं द्वारा संपत्ति पर अवैध कब्जा और आर्थिक प्रगति में षड्यंत्र।',
        remedyProtocol: 'यन्त्र के समक्ष चमेली के तेल का दीपक जलाकर भैरव अष्टक का पाठ करें।'
      }
    ]
  },

  sanjeevani_mahamrityunjaya_yantra: {
    id: 'sanjeevani_mahamrityunjaya_yantra',
    taxonomyCategory: 'shiva',
    lineageAttribution: 'नेत्र तन्त्रम् एवं शिव महापुराण',
    nameSanskrit: 'श्री सञ्जीवनी महामृत्युञ्जय यन्त्रम्',
    nameHindi: 'सञ्जीवनी महामृत्युंजय यन्त्र (अकाल मृत्यु निवारण व अमृत स्वास्थ्य)',
    nameEnglish: 'Sanjeevani Mahamrityunjaya Yantra (Cosmic Nectar of Immortality & Healing)',
    subTitle: 'The 12-Aditya Amrita Matrix for Conquering Chronic Diseases and Untimely Death',
    presidingDeity: 'भगवान् अमृत मृत्युञ्जय (महादेव)',
    tradition: 'शैव अमृत परम्परा',
    corePhilosophy: 'शुक्राचार्य द्वारा सिद्ध सञ्जीवनी विद्या और भगवान् मृत्युञ्जय के अमृत कलश का ज्यामितीय स्वरूप। यह साधक की जीवनी शक्ति (Ojas & Prana) को पुनर्जीवित कर अकाल मृत्यु, असाध्य रोगों और दुर्घटनाओं के भय को नष्ट करता है।',
    citations: [
      {
        sourceScripture: 'नेत्र तन्त्रम् (अमृत मृत्युञ्जय कल्प)',
        chapterOrVerse: 'अध्याय २, श्लोक १५',
        sanskritSloka: 'अमृतेन स्रावयन्तं चन्द्रमण्डलमध्यगम्।\\nमृत्युं जयति येनैव सञ्जीवनीति सा स्मृता॥',
        hindiMeaning: 'चन्द्रमण्डल के मध्य में अमृत की वर्षा करने वाले भगवान् मृत्युञ्जय का जो यन्त्र में ध्यान करता है, वह मृत्यु को जीत लेता है, इसे सञ्जीवनी कहा गया है।',
        englishMeaning: 'Meditating within this yantra upon Lord Mrityunjaya raining celestial nectar from the lunar sphere conquers death; this is known as the Sanjeevani Vidya.'
      },
      {
        sourceScripture: 'ऋग्वेद / यजुर्वेद',
        chapterOrVerse: 'त्र्यम्बक मन्त्र (रुद्राध्याय)',
        sanskritSloka: 'ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्।\\nउर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय माऽमृतात्॥',
        hindiMeaning: 'हम त्रिनेत्रधारी सुगन्धित और पुष्टिदाता भगवान् शिव की उपासना करते हैं; जिस प्रकार खरबूजा पकने पर लता के बन्धन से मुक्त हो जाता है, उसी प्रकार हम मृत्यु से मुक्त हों, अमृत से नहीं।',
        englishMeaning: 'We worship the fragrant Three-Eyed Lord who nourishes all beings; may He liberate us from the bondage of death unto supreme immortality, even as a ripe gourd is severed from its vine.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'अमृत प्राकार भूपुर',
        nameEnglish: 'Citadel of Celestial Nectar & 4 Portals',
        chakraTitle: 'प्रथम आवरण - अमृत प्राकार भूपुर',
        presidingDeity: 'भगवान् महामृत्युञ्जय',
        mudraShakti: 'अमृत मुद्रा',
        yoginiClass: 'प्रकट योगिनी',
        geometryType: 'Triple Rampart Citadel with 4 Portals',
        significance: 'Creates an impenetrable auric shield around the physical body against accidents and toxic pathogens.'
      },
      {
        index: 2,
        nameSanskrit: 'आयुर्वर्धक त्रिवलय',
        nameEnglish: 'Triple Girdle of Supreme Longevity',
        chakraTitle: 'द्वितीय आवरण - आयुर्वर्धक त्रिवलय',
        presidingDeity: 'अमृत संजीवनी शक्तियाँ',
        mudraShakti: 'कुम्भ मुद्रा',
        yoginiClass: 'गुप्त योगिनी',
        geometryType: '3 Concentric Protective Girdles',
        significance: 'Balances the three humors (Vata, Pitta, Kapha) and stabilizes the vital life force.'
      },
      {
        index: 3,
        nameSanskrit: 'द्वादशदल अमृत पद्म',
        nameEnglish: '12-Petal Lotus of 12 Healing Sun-Moons',
        chakraTitle: 'तृतीय आवरण - द्वादशदल मण्डल',
        presidingDeity: 'द्वादशादित्य एवं १२ रुद्र',
        mudraShakti: 'धन्वन्तरि मुद्रा',
        yoginiClass: 'गुप्ततर योगिनी',
        geometryType: '12 Ogee Petals with Spines & Seeds',
        significance: 'Inscribed with the 12 Amrita syllables, diffusing celestial nectar into the 12 vital internal organs.'
      },
      {
        index: 4,
        nameSanskrit: 'अष्टदल अष्टमूर्ति पद्म',
        nameEnglish: 'Inner 8-Petal Lotus of the 8 Shiva Murtis',
        chakraTitle: 'चतुर्थ आवरण - अष्टमूर्ति मण्डल',
        presidingDeity: 'अष्टमूर्ति शिव (शर्व, भव, रुद्र, उग्र, भीम, पशुपति, ईशान, महादेव)',
        mudraShakti: 'ज्ञान मुद्रा',
        yoginiClass: 'सम्प्रदाय योगिनी',
        geometryType: '8 Inner Ogee Petals with Spines',
        significance: 'Heals deep cellular trauma and harmonizes the 5 elements and 3 astral bodies.'
      },
      {
        index: 5,
        nameSanskrit: 'अमृत कलश षट्कोण पीठ',
        nameEnglish: 'Amrita Kalasha Hexagram Sanctum',
        chakraTitle: 'पञ्चम आवरण - षट्कोण मण्डल',
        presidingDeity: 'अमृतेश्वर एवं अमृतलक्ष्मी',
        mudraShakti: 'कलश मुद्रा',
        yoginiClass: 'कुलोत्तीर्ण योगिनी',
        geometryType: 'Interlaced Hexagram with Amrita Pot',
        significance: 'The mystic confluence where the nectar of immortality perpetually overflows into the soul.'
      },
      {
        index: 6,
        nameSanskrit: 'हौं जूं सः संजीवनी बिन्दु',
        nameEnglish: 'Haum Joom Sah Supreme Amrita Singularity',
        chakraTitle: 'षष्ठ आवरण - महाबिन्दु चक्र',
        presidingDeity: 'परम शिव मृत्युञ्जय',
        mudraShakti: 'महामुद्रा',
        yoginiClass: 'परापरातिरहस्य योगिनी',
        geometryType: 'Infinitesimal Core Point with Sanjeevani Beejas',
        significance: 'The supreme life-restoring center. Inscribed with "ॐ" and "हौं जूं सः".'
      }
    ],
    jyotish: {
      rulingPlanet: 'शनि, राहु एवं चन्द्रमा (Saturn, Rahu & Moon - Maraka Graha Pacification)',
      planetSanskrit: 'मारकेश एवं अकाल मृत्यु निवारक योग',
      friendlyRashis: ['कुम्भ', 'मकर', 'कर्क', 'वृश्चिक'],
      friendlyNakshatras: ['आर्द्रा', 'शतभिषा', 'पुष्य', 'अनुराधा'],
      doshaRemedies: [
        {
          doshaName: 'Maraka Dasha & Threat of Untimely Death (मारकेश दशा व अकाल मृत्यु भय)',
          description: 'Critical illness during 2nd and 7th lord dashas, sudden critical accidents, ICU hospitalizations.',
          reliefMechanism: 'Mahamrityunjaya Sanjeevani yantra overrides biological decay by channeling celestial Amrita.'
        },
        {
          doshaName: 'Chronic Incurable Diseases & Low Immunity (असाध्य रोग व रोग-प्रतिरोधक दुर्बलता)',
          description: 'Persistent autoimmune issues, heart ailments, respiratory failure, and psychological panic.',
          reliefMechanism: 'The cool nectar of Haum Joom Sah restores vibrant health and rejuvenates the nervous system.'
        }
      ],
      lifeAspects: ['Total Immunity & Longevity (Ayu Vriddhi)', 'Overcoming Fatal Accidents & Operations', 'Freedom from Unconscious Fear & Death Anxiety', 'Complete Physical & Mental Rejuvenation'],
      wearOrInstallDirection: 'North-East (ईशान कोण - Shiva Direction)',
      favorableDay: 'Monday (सोमवार) or Pradosha Vrata',
      auspiciousTithi: 'Maha Shivaratri, Masa Shivaratri, Trayodashi',
      metalPreference: 'Pure Silver (चांदी), Copper (ताम्र), or Sphatika',
      beejMantra: 'ॐ हौं जूं सः ॐ भूर्भुवः स्वः ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय माऽमृतात् ॐ स्वः भुवः भूः ॐ सः जूं हौं ॐ ॥',
      gayatriMantra: 'ॐ तत्पुरुषाय विद्महे महादेवाय धीमहि तन्नो रुद्रः प्रचोदयात् ॥',
      japaCount: 108,
      malaType: 'Rudraksha Mala (५ मुखी अथवा १ मुखी रुद्राक्ष)',
      dhyanaSloka: 'हस्ताम्भोजयुगस्थरत्नकलशादुद्धृत्य तोयं शिरस्यासिञ्चन्तमुदग्रपूर्णवपुषं चन्द्रार्धचूड़ामणिम्। पद्मासीनमुदारहृदयसुखं त्र्यक्षं चतुर्बाहुकं वन्दे मृत्युहरं महेश्वरममृतानन्दानुभावं प्रभुम्॥',
      pratishthaVidhiSummary: [
        'Place on clean white cloth or silver plate in the North-East sanctum.',
        'Offer pure water (Abhisheka), raw cow milk, white sandalwood, and fresh Bilva leaves.',
        'Light a pure cow ghee lamp and Guggal/camphor incense.',
        'Chant the Mahamrityunjaya Mahamantra 108 times daily facing North-East.'
      ]
    },
    practicalRemedies: [
      {
        category: 'Health',
        problem: 'असाध्य रोग, गंभीर शल्यक्रिया (Surgery) का भय, और अस्पताल के बार-बार चक्कर लगना।',
        remedyProtocol: 'रोगी के कक्ष में ईशान कोण में यन्त्र स्थापित कर तांबे के लोटे में जल रखकर "ॐ हौं जूं सः" का १०८ बार जप करें और वह अभिमंत्रित जल रोगी को पिलाएं।'
      },
      {
        category: 'Spiritual',
        problem: 'अकाल मृत्यु, दुर्घटना का निरन्तर भय और अवसाद।',
        remedyProtocol: 'सोमवार को यन्त्र पर कच्चा दूध और बिल्वपत्र अर्पित कर महामृत्युंजय स्तोत्र का पाठ करें।'
      }
    ]
  },

  sharabheshwara_yantra: {
    id: 'sharabheshwara_yantra',
    taxonomyCategory: 'shiva',
    lineageAttribution: 'शरभ उपनिषद् एवं आकाश भैरव कल्प',
    nameSanskrit: 'श्री शरभेश्वर यन्त्रम् (उग्र-शमन मण्डल)',
    nameHindi: 'शरभेश्वर यन्त्र (असाध्य शत्रु शमन, अभिचार नाश व उग्र रक्षा)',
    nameEnglish: 'Sharabheshwara Yantra (Supreme Pacification of Fierce Cosmic Wrath)',
    subTitle: 'The 16-Spike Celestial Bird-Lion Cosmogram for Shattering All Occult Hostility',
    presidingDeity: 'भगवान् शरभेश्वर (पक्षीराज शिव)',
    tradition: 'शैव उग्र परम्परा',
    corePhilosophy: 'भगवान् नृसिंह के अति-उग्र क्रोध को शांत करने हेतु प्रकट हुए आठ पैरों वाले, दो पंखों वाले पक्षी-सिंह रूपी शरभेश्वर का यन्त्र। यह अनियन्त्रित क्रोध, भयानक शत्रु-आक्रमण, न्यायालय विवाद और अभिचार को तत्काल शांत करता है।',
    citations: [
      {
        sourceScripture: 'शरभ उपनिषद्',
        chapterOrVerse: 'मन्त्र १-३',
        sanskritSloka: 'यो हि शरभरूपेण नृसिंहमुग्रतेजसम्।\\nशमयामास जगतां पालनाय महाद्युतिः॥\\nतस्मै शरभेशाय नमः सर्वविपत्तये॥',
        hindiMeaning: 'जिन्होंने जगत् के कल्याण हेतु शरभ रूप धारण कर उग्रतेजस्वी नृसिंह को शांत किया, उन समस्त विपत्तियों का नाश करने वाले शरभेश्वर को नमस्कार है।',
        englishMeaning: 'Salutations to Lord Sharabheshwara who assumed the transcendental winged Sharabha form to pacify the blazing fury of Narasimha for cosmic preservation.'
      },
      {
        sourceScripture: 'आकाश भैरव कल्प',
        chapterOrVerse: 'पटल ३३, श्लोक १२',
        sanskritSloka: 'खें खं खट् फट् स्वाहा मन्त्रेण यन्त्रं समर्चयेत्।\\nशत्रवो विलयं यान्ति वादी मूको भवेत् क्षणात्॥',
        hindiMeaning: 'खें खं खट् फट् स्वाहा मन्त्र से यन्त्र का अर्चन करने पर शत्रुओं का दमन होता है और न्यायालय में विरोधी मूक हो जाता है।',
        englishMeaning: 'Worshipping this yantra with the fierce syllables causes all hostile enemies to dissolve and opposing adversaries to be silenced instantly.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'उग्र प्राकार भूपुर',
        nameEnglish: 'Fierce Vajra Rampart Citadel & 4 Portals',
        chakraTitle: 'प्रथम आवरण - उग्र प्राकार भूपुर',
        presidingDeity: 'भगवान् शरभेश्वर',
        mudraShakti: 'वज्र मुद्रा',
        yoginiClass: 'प्रकट योगिनी',
        geometryType: 'Triple Rampart Citadel with 4 Gateways',
        significance: 'Total psychic perimeter defense repelling dark occult sorcery and legal attacks.'
      },
      {
        index: 2,
        nameSanskrit: 'षोडश शरभ पक्ष ज्वाला',
        nameEnglish: '16 Radiating Wing-Claw Spikes',
        chakraTitle: 'द्वितीय आवरण - षोडश ज्वाला मण्डल',
        presidingDeity: 'षोडश भैरव शक्तियाँ',
        mudraShakti: 'गरुड़ मुद्रा',
        yoginiClass: 'गुप्त योगिनी',
        geometryType: '16 Radiating Spikes with Diamond Tips',
        significance: 'Slices through negative psychic currents, destructive black magic, and astrological curses.'
      },
      {
        index: 3,
        nameSanskrit: 'अष्टदल भैरव पद्म',
        nameEnglish: '8-Petal Lotus of 8 Divine Preservers',
        chakraTitle: 'तृतीय आवरण - अष्टदल मण्डल',
        presidingDeity: 'अष्ट भैरव एवं शरभ पार्श्वदेवता',
        mudraShakti: 'नख मुद्रा',
        yoginiClass: 'गुप्ततर योगिनी',
        geometryType: '8 Ogee Petals with Spines & Seeds',
        significance: 'Inscribed with fierce seeds (खें, खं, खट्, हुं, फट्, स्वाहा, शं, ह्रीं), neutralizing all hostile energies.'
      },
      {
        index: 4,
        nameSanskrit: 'उग्र शरभ षट्कोण',
        nameEnglish: 'Fierce Sharabha Shatkona',
        chakraTitle: 'चतुर्थ आवरण - षट्कोण मण्डल',
        presidingDeity: 'शरभेश्वर एवं प्रत्यङ्गिरा-शूलिनी',
        mudraShakti: 'शूल मुद्रा',
        yoginiClass: 'सम्प्रदाय योगिनी',
        geometryType: 'Interlaced Hexagram with Nodes',
        significance: 'The dynamic union of Shiva-Sharabha with His two wings (Pratyangira and Shoolini Durga).'
      },
      {
        index: 5,
        nameSanskrit: 'संहार संहारक त्रिकोण',
        nameEnglish: 'Primary Downward Annihilator Triangle',
        chakraTitle: 'पञ्चम आवरण - महात्रिकोण पीठ',
        presidingDeity: 'महा शरभ सालुव',
        mudraShakti: 'संहार मुद्रा',
        yoginiClass: 'कुलोत्तीर्ण योगिनी',
        geometryType: 'Downward Primary Golden Triangle',
        significance: 'The epicenter where all external wrath, planetary malice, and human hostility are absorbed and neutralized.'
      },
      {
        index: 6,
        nameSanskrit: 'खें महाबीज बिन्दु चक्र',
        nameEnglish: 'Khem Mahabeeja Supreme Core Sanctum',
        chakraTitle: 'षष्ठ आवरण - महाबिन्दु चक्र',
        presidingDeity: 'परम शरभेश्वर',
        mudraShakti: 'परममुद्रा',
        yoginiClass: 'परापरातिरहस्य योगिनी',
        geometryType: 'Infinitesimal Core Point with Khem Seed',
        significance: 'The incandescent core of infinite pacifying power. Inscribed with "खें" (Khem).'
      }
    ],
    jyotish: {
      rulingPlanet: 'मङ्गल एवं केतु (Mars & Ketu - Ultimate Shatru Shamana Yoga)',
      planetSanskrit: 'भौम-केतु उग्र दोष निवारक योग',
      friendlyRashis: ['मेष', 'वृश्चिक', 'धनु', 'मकर'],
      friendlyNakshatras: ['मूला', 'ज्येष्ठा', 'आर्द्रा', 'अश्लेषा'],
      doshaRemedies: [
        {
          doshaName: 'Abhichara & Severe Court Battles (अभिचार व असाध्य मुकद्दमा दोष)',
          description: 'Destructive black magic attacks, vindictive enemies attempting bankruptcy, and endless court litigation.',
          reliefMechanism: 'Sharabheshwara is the supreme pacifier; His wings (Pratyangira and Shoolini) nullify all opposing malice.'
        },
        {
          doshaName: 'Krodha Roga & Uncontrollable Rage (क्रोध रोग व मानसिक उन्माद)',
          description: 'Blind uncontrollable anger destroying family ties, violent temper outbursts, and psychological paranoia.',
          reliefMechanism: 'Just as Sharabha calmed Narasimha, this yantra soothes burning astral fire into peaceful stillness.'
        }
      ],
      lifeAspects: ['Total Pacification of Fierce Adversaries', 'Victory in Complex Legal & Property Disputes', 'Protection from Poison, Occult & Sorcery', 'Restoration of Calm, Poise & Sovereignty'],
      wearOrInstallDirection: 'South or South-West (दक्षिण अथवा नैऋत्य दिशा)',
      favorableDay: 'Sunday or Tuesday (रविवार अथवा मङ्गलवार - Pradosha Twilight)',
      auspiciousTithi: 'Krishna Chaturdashi, Amavasya, Pradosha',
      metalPreference: 'Pure Copper (ताम्र), Bronze, or Iron-alloy',
      beejMantra: 'ॐ खें खं खट् हुं फट् स्वाहा ॥ ॐ शं शरभेश्वराय नमः ॥',
      gayatriMantra: 'ॐ पक्षिराजाय विद्महे शरभेश्वराय धीमहि तन्नो शरभः प्रचोदयात् ॥',
      japaCount: 108,
      malaType: 'Rudraksha Mala or Raktachandan Rosary',
      dhyanaSloka: 'चन्द्रार्काग्नित्रिनयनं पक्षाभ्यां चतुराननम्। तीक्ष्णदंष्ट्रं नखाग्रं च शरभं संस्मरेन्नरः॥',
      pratishthaVidhiSummary: [
        'Install with deep solemnity facing South or South-West.',
        'Offer red oleander flowers, mustard oil lamp, and black pepper/sesame offerings.',
        'Chant the Sharabha Kavacha and beej mantra 108 times during Pradosha twilight.',
        'Seek forgiveness for any internal anger and pray for universal peace.'
      ]
    },
    practicalRemedies: [
      {
        category: 'Protection',
        problem: 'अत्यन्त द्वेषी शत्रुओं द्वारा प्राणघातक संकट, असाध्य मुकद्दमे, और तांत्रिक अभिचार।',
        remedyProtocol: 'दक्षिण दिशा में यन्त्र स्थापित कर मंगलवार की संध्या को सरसों के तेल का दीपक जलाएं और "ॐ खें खं खट् फट् स्वाहा" का १०८ बार जप करें।'
      },
      {
        category: 'Spiritual',
        problem: 'अति-उग्र क्रोध, मानसिक उन्माद और परिवार में हिंसक वातावरण।',
        remedyProtocol: 'यन्त्र के समक्ष ध्यान कर शांत चित्त से शरभेश्वर स्तोत्र का पाठ करें।'
      }
    ]
  },

  sadashiva_yantra: {
    id: 'sadashiva_yantra',
    taxonomyCategory: 'shiva',
    lineageAttribution: 'तैत्तिरीय आरण्यक (पञ्चब्रह्म सूक्त) एवं कामिक आगम',
    nameSanskrit: 'श्री सदाशिव पञ्चब्रह्म यन्त्रम्',
    nameHindi: 'सदाशिव यन्त्र (पञ्चब्रह्म, सर्वसिद्धि व मोक्ष)',
    nameEnglish: 'Sadashiva Panchabrahma Yantra (Cosmic Fivefold Form of the Supreme Reality)',
    subTitle: 'The Pentagram Mandala of Sadyojata, Vamadeva, Aghora, Tatpurusha & Ishana',
    presidingDeity: 'परम शिव सदाशिव (पञ्चवक्त्र महादेव)',
    tradition: 'कामिक शैवागम एवं वैदिक परम्परा',
    corePhilosophy: 'सृष्टि, स्थिति, संहार, तिरोभाव और अनुग्रह—इन पांचों दैवीय कृत्यों के अधिष्ठाता भगवान् सदाशिव का महायन्त्र। इसके पांच कोण शिव के पांच मुखों और पांच महाभूतों (भूमि, जल, अग्नि, वायु, आकाश) का पूर्ण संतुलन करते हैं।',
    citations: [
      {
        sourceScripture: 'तैत्तिरीय आरण्यक',
        chapterOrVerse: 'महानारायण उपनिषद्, पञ्चब्रह्म मन्त्राः',
        sanskritSloka: 'ईशानः सर्वविद्यानामीश्वरः सर्वभूतानां ब्रह्माधिपतिर्ब्रह्मणोऽधिपतिर्ब्रह्मा शिवो मे अस्तु सदाशिवोम्॥',
        hindiMeaning: 'जो समस्त विद्याओं के स्वामी, समस्त भूतों के ईश्वर और परब्रह्म के अधिपति हैं, वे कल्याणकारी सदाशिव मुझ पर सर्वदा अनुग्रह करें।',
        englishMeaning: 'Lord Ishana, the ruler of all knowledge and sovereign of all beings, may that benevolent Sadashiva be ever auspicious unto me.'
      },
      {
        sourceScripture: 'कामिक आगम',
        chapterOrVerse: 'क्रियापाद, पटल ४',
        sanskritSloka: 'पञ्चकोणं महायन्त्रं पञ्चवक्त्रं सदाशिवम्।\\nयत्पूजया भवेन्मुक्तिः भुक्तिश्चैव पदे पदे॥',
        hindiMeaning: 'पञ्चकोण रूपी महायन्त्र में पञ्चवक्त्र सदाशिव की पूजा करने से साधक को पद-पद पर भुक्ति (समस्त सुख) और अन्त में मुक्ति प्राप्त होती है।',
        englishMeaning: 'By worshipping Sadashiva with His five divine faces within this pentagram yantra, the seeker attains total worldly enjoyment and ultimate liberation.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'शैव प्राकार भूपुर',
        nameEnglish: 'Shaiva Rampart Citadel & 4 Cardinal Portals',
        chakraTitle: 'प्रथम आवरण - शैव प्राकार भूपुर',
        presidingDeity: 'भगवान् नन्दीश्वर एवं महाकाल',
        mudraShakti: 'नन्दि मुद्रा',
        yoginiClass: 'प्रकट योगिनी',
        geometryType: 'Triple Rampart Citadel with 4 Gateways',
        significance: 'Harmonizes the dwelling with cosmic order, dispelling elemental disturbances and negative spirits.'
      },
      {
        index: 2,
        nameSanskrit: 'शान्ति त्रिवलय',
        nameEnglish: 'Triple Girdle of Supreme Stillness',
        chakraTitle: 'द्वितीय आवरण - शान्ति त्रिवलय मण्डल',
        presidingDeity: 'पञ्चमहाभूत देवता',
        mudraShakti: 'त्रिशूल मुद्रा',
        yoginiClass: 'गुप्त योगिनी',
        geometryType: '3 Concentric Girdles',
        significance: 'Balances the gross elements (Earth, Water, Fire, Air, Ether) in the seeker\'s body and home.'
      },
      {
        index: 3,
        nameSanskrit: 'षोडश शिव कला पद्म',
        nameEnglish: '16-Petal Lotus of 16 Divine Kalas',
        chakraTitle: 'तृतीय आवरण - षोडश कला मण्डल',
        presidingDeity: 'षोडश शिव कलाएँ (शान्ति, विद्या, प्रतिष्ठा, निवृत्ति आदि)',
        mudraShakti: 'डमरू मुद्रा',
        yoginiClass: 'गुप्ततर योगिनी',
        geometryType: '16 Ogee Petals with Spines & Kalas',
        significance: 'Inscribed with the 16 transcendental attributes of consciousness, elevating the soul above Maya.'
      },
      {
        index: 4,
        nameSanskrit: 'पञ्चब्रह्म पञ्चकोण मण्डल',
        nameEnglish: 'Panchabrahma Sacred Pentagram',
        chakraTitle: 'चतुर्थ आवरण - पञ्चकोण मण्डल',
        presidingDeity: 'पञ्चवक्त्र सदाशिव (ईशान, तत्पुरुष, अघोर, वामदेव, सद्योजात)',
        mudraShakti: 'ज्ञानमुद्रा',
        yoginiClass: 'सम्प्रदाय योगिनी',
        geometryType: 'Geometric Star Pentagram with 5 Faces',
        significance: 'The five divine faces orchestrating creation, maintenance, dissolution, concealment, and liberation.'
      },
      {
        index: 5,
        nameSanskrit: 'चिन्मय अद्वैत पीठ',
        nameEnglish: 'Inner Consciousness Altar',
        chakraTitle: 'पञ्चम आवरण - अद्वैत पीठ',
        presidingDeity: 'महादेव एवं मनोन्मनी',
        mudraShakti: 'शिवमुद्रा',
        yoginiClass: 'कुलोत्तीर्ण योगिनी',
        geometryType: 'Inner Consecrated Circle',
        significance: 'The stillness of pure non-dual consciousness where observer and observed unite.'
      },
      {
        index: 6,
        nameSanskrit: 'ॐ नमः शिवाय पञ्चाक्षरी बिन्दु',
        nameEnglish: 'Panchakshari Supreme Core Singularity',
        chakraTitle: 'षष्ठ आवरण - महाबिन्दु चक्र',
        presidingDeity: 'परम शिव सदाशिव',
        mudraShakti: 'समाधि मुद्रा',
        yoginiClass: 'परापरातिरहस्य योगिनी',
        geometryType: 'Infinitesimal Core Point with Om Namah Shivaya',
        significance: 'The ultimate source of all realities. Inscribed with "ॐ" and "नमः शिवाय".'
      }
    ],
    jyotish: {
      rulingPlanet: 'समस्त नवग्रह (Lord of all 9 Planets & Time Itself - Mahakala)',
      planetSanskrit: 'सर्वग्रह शान्तिकारक सदाशिव योग',
      friendlyRashis: ['All 12 Rashis (समस्त १२ राशियाँ)'],
      friendlyNakshatras: ['All 27 Nakshatras (समस्त २७ नक्षत्र)'],
      doshaRemedies: [
        {
          doshaName: 'Kala Sarpa Dosha & Graha Peeda (कालसर्प दोष व नवग्रह पीड़ा)',
          description: 'Severe setbacks in all areas of life, lack of inner peace, persistent anxiety, and unexplainable grief.',
          reliefMechanism: 'Sadashiva is the supreme Lord of Time and Space; His panchakshari vibration neutralizes all planetary afflictions.'
        },
        {
          doshaName: 'Panchamahabhuta Imbalance (पंचमहाभूत असंतुलन व वास्तु दोष)',
          description: 'Severe Vastu defects in home, energetic heaviness, chronic weakness, and restlessness.',
          reliefMechanism: 'The Panchabrahma pentagram aligns the five elemental currents into harmonious perfection.'
        }
      ],
      lifeAspects: ['Universal Peace, Clarity & Serenity', 'Integration of the 5 Elements (Panchabhuta)', 'Liberation from Karmic Cycles (Moksha)', 'Awakening of Kundalini & Spiritual Wisdom'],
      wearOrInstallDirection: 'North-East (ईशान कोण - Ishana Gate)',
      favorableDay: 'Monday (सोमवार), Pradosha, or Shivaratri',
      auspiciousTithi: 'Maha Shivaratri, Shukla Paksha Trayodashi, Poornima',
      metalPreference: 'Panchadhatu (पञ्चधातु), Pure Silver, or Bronze',
      beejMantra: 'ॐ नमः शिवाय ॥ ॐ ह्रीं ह्रौं नमः शिवाय ॥',
      gayatriMantra: 'ॐ तत्पुरुषाय विद्महे महादेवाय धीमहि तन्नो रुद्रः प्रचोदयात् ॥',
      japaCount: 108,
      malaType: 'Rudraksha Mala (१०८ मणियों की रुद्राक्ष माला)',
      dhyanaSloka: 'शुद्धस्फटिकसंकाशं त्रिनेत्रं पञ्चवक्त्रकम्। गङ्गाधरं दशभुजं सर्वाभरणभूषितम्। नीलग्रीवं शशाङ्काङ्कं नागयज्ञोपवीतिनम्। व्याघ्रचर्माम्बरधरं वन्दे देवं सदाशिवम्॥',
      pratishthaVidhiSummary: [
        'Place on clean white or orange silk in the North-East sanctum.',
        'Offer pure water, milk, white flowers, Bilva leaves, and fragrant bhasma (sacred ash).',
        'Light a pure cow ghee lamp and chandan/camphor incense.',
        'Chant the Panchakshari mantra (ॐ नमः शिवाय) 108 times daily in quiet meditation.'
      ]
    },
    practicalRemedies: [
      {
        category: 'Spiritual',
        problem: 'आध्यात्मिक प्रगति का रुक जाना, मानसिक अशान्ति, और कालसर्प दोष की पीड़ा।',
        remedyProtocol: 'ईशान कोण में सदाशिव यन्त्र स्थापित कर नित्य प्रातः भस्म का तिलक लगाएं और "ॐ नमः शिवाय" का १०८ बार जप करें।'
      },
      {
        category: 'Health',
        problem: 'शरीर में पंचतत्वों (अग्नि, वायु, जल आदि) का असंतुलन और स्थायी अस्वस्थता।',
        remedyProtocol: 'यन्त्र के समक्ष ध्यान कर पञ्चब्रह्म मन्त्रों का श्रवण अथवा पाठ करें।'
      }
    ]
  }
`;

// Append to shastric-jyotish-database.ts
let shastricContent = fs.readFileSync(shastricDbPath, 'utf-8');
const lastClosingBraceIndex = shastricContent.lastIndexOf('};');

if (lastClosingBraceIndex !== -1 && !shastricContent.includes('swarna_akarshana_bhairava_yantra:')) {
  const updatedShastric = shastricContent.slice(0, lastClosingBraceIndex) + shivaShastricEntries + '\n};\n';
  fs.writeFileSync(shastricDbPath, updatedShastric, 'utf-8');
  console.log('Appended 4 Shiva Yantras to shastric-jyotish-database.ts');
} else {
  console.log('Shiva Yantras already exist or closing brace not found in shastric-jyotish-database.ts');
}

// Append to canonical-library-dataset.ts
const shivaCanonicalEntries = `  {
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
  }
`;

let canonicalContent = fs.readFileSync(canonicalDbPath, 'utf-8');
const lastClosingBracketIndex = canonicalContent.lastIndexOf('];');

if (lastClosingBracketIndex !== -1 && !canonicalContent.includes("id: 'swarna_akarshana_bhairava_yantra'")) {
  const updatedCanonical = canonicalContent.slice(0, lastClosingBracketIndex) + shivaCanonicalEntries + '\n];\n';
  fs.writeFileSync(canonicalDbPath, updatedCanonical, 'utf-8');
  console.log('Appended 4 Shiva Yantras to canonical-library-dataset.ts');
} else {
  console.log('Shiva Yantras already exist or closing bracket not found in canonical-library-dataset.ts');
}
