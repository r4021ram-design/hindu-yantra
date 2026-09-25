const fs = require('fs');
const path = require('path');

const shastricDbPath = path.join(__dirname, '..', 'src', 'lib', 'yantras', 'shastric-jyotish-database.ts');
const canonicalDbPath = path.join(__dirname, '..', 'src', 'lib', 'sgkb', 'canonical-library-dataset.ts');

const newShastricEntries = `
  maha_ganapati_yantra: {
    id: 'maha_ganapati_yantra',
    taxonomyCategory: 'ganesha',
    lineageAttribution: 'शारदातिलकम् एवं मन्त्रमहोदधि गाणपत्य परम्परा',
    nameSanskrit: 'श्री महागणपति यन्त्रम्',
    nameHindi: 'महागणपति यन्त्र',
    nameEnglish: 'Maha Ganapati Yantra (Supreme Sovereign of Siddhi & Wealth)',
    subTitle: 'The Master Yantra of the Ganapatya Tradition for Inexhaustible Abundance and Obstacle Annihilation',
    presidingDeity: 'भगवान महागणपति (सिद्धि-बुद्धि सहित वल्लभेश)',
    tradition: 'शारदातिलकम्, गाणपत्य तन्त्र व मन्त्रमहोदधि',
    corePhilosophy: 'समस्त ब्रह्माण्डीय विघ्नों का समूल उच्छेदन, ऋद्धि-सिद्धि का नित्य वास और अभीष्ट मनोरथों की निर्बाध सिद्धि।',
    citations: [
      {
        sourceScripture: 'शारदातिलकम् (Sharada Tilakam)',
        chapterOrVerse: 'पटल १३, श्लोक १-३',
        sanskritSloka: 'हस्तीन्द्राननमिन्दुचूड़मरुणच्छायं त्रिनेत्रं रसादाश्लिष्टं प्रियया सपद्मकरया स्वाङ्कस्थया संततम्।\\nबीजापूरगदाधनुस्त्रिशिखयुक्चक्राब्जपाशोत्पलव्रीह्यग्रस्वविषाणरत्नकलशप्रद्योतकल्पद्रुमम्॥',
        hindiMeaning: 'जो बालसूर्य के समान रक्तवर्णी, त्रिनेत्रधारी, अपने अंक में प्रियतमा वल्लभा शक्ति को लिए हुए तथा समस्त आयुधों व अमृतकलश से युक्त हैं, उन महागणपति का हम ध्यान करते हैं।',
        englishMeaning: 'We meditate on Lord Maha Ganapati, radiant like the rising crimson sun, three-eyed, holding His consort Vallabha, adorned with tusk, mace, discus, lotus, noose, sugarcane bow, and the golden urn of divine nectar.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'मूलाधार भूपुर प्राकार',
        nameEnglish: 'Earth Rampart of Stability',
        chakraTitle: 'त्रैलोक्यमोहन भूपुर (3 Tiers & 4 Portals)',
        presidingDeity: 'अष्टदिक्पाल एवं विघ्नविनायक',
        mudraShakti: 'अङ्कुश मुद्रा (Divine Restraint)',
        yoginiClass: 'मूलाधार अधिष्ठात्री शक्तियाँ',
        geometryType: '3 Concentric Earth Citadel Walls with 4 Guarded Portals',
        significance: 'समस्त बाह्य विघ्नों, दुर्भाग्य और नकारात्मक ऊर्जाओं को प्रवेश द्वार पर ही रोक कर अभेद्य सुरक्षा प्रदान करना।'
      },
      {
        index: 2,
        nameSanskrit: 'षोडशदल पद्म आवरण',
        nameEnglish: '16-Petal Lotus of Complete Manifestation',
        chakraTitle: 'षोडश शक्ति मण्डल (16 Kalas & Shaktis)',
        presidingDeity: 'षोडश गणपति शक्तियाँ (ऋद्धि, बुद्धि, कान्ति, आदि)',
        mudraShakti: 'पाश मुद्रा (Attraction of Divine Virtues)',
        yoginiClass: 'षोडश नित्या व गणपति कला',
        geometryType: '16 Symmetrical Radial Ogee Lotus Petals',
        significance: 'सोलह कलाओं, १६ महासिद्धियों और जीवन के समस्त अभीष्ट मनोरथों की परिपूर्ण सिद्धि।'
      },
      {
        index: 3,
        nameSanskrit: 'अष्टदल पद्म आवरण',
        nameEnglish: '8-Petal Lotus of Ashta-Vinayaka',
        chakraTitle: 'अष्टविनायक मण्डल (8 Primal Forms of Ganesha)',
        presidingDeity: 'अष्टविनायक (मयूरेश्वर, सिद्धिटेक, बल्लालेश्वर, वरदविनायक, चिंतामणि, गिरिजात्मज, विघ्नेश्वर, महागणपति)',
        mudraShakti: 'अभय-वरद मुद्रा',
        yoginiClass: 'अष्टमातृका शक्ति',
        geometryType: '8 Symmetrical Radial Ogee Lotus Petals with Bija Mantras',
        significance: 'अष्टसिद्धियों और नवनिधियों का जागरण, आठों दिशाओं से आने वाली विपत्तियों का शमन।'
      },
      {
        index: 4,
        nameSanskrit: 'षट्कोण एवं बिन्दु पीठ',
        nameEnglish: 'Hexagram & Central Maha Bindu',
        chakraTitle: 'शिव-शक्ति सामरस्य एवं महागणपति बिन्दु',
        presidingDeity: 'परब्रह्म महागणपति',
        mudraShakti: 'बीजापूर मुद्रा (Fruit of Universal Abundance)',
        yoginiClass: 'कैवल्य शक्ति',
        geometryType: 'Interlocking Equilateral Triangles with Central Golden Bindu',
        significance: 'समस्त सृष्टि का आदि बीज, ज्ञान, ऐश्वर्य और परा-चेतना का परम साक्षात्कार।'
      }
    ],
    jyotishRemedies: {
      rulingPlanet: 'Mercury & Ketu (बुध एवं केतु)',
      planetSanskrit: 'बुध (Budha) - वाणी व बुद्धि, केतु (Ketu) - मोक्ष व विघ्न निवारण',
      friendlyRashis: ['Mithuna (मिथुन)', 'Kanya (कन्या)', 'Dhanu (धनु)', 'Meena (मीन)'],
      friendlyNakshatras: ['Ashlesha', 'Jyeshtha', 'Revati', 'Moola', 'Ashwini'],
      doshaRemedies: [
        {
          doshaName: 'Ketu Peeda & Unforeseen Roadblocks (केतु पीड़ा व आकस्मिक संकट)',
          description: 'Repeated failures at the verge of success, unexplained delays, financial losses, and mysterious anxiety.',
          reliefMechanism: 'Maha Ganapati is the supreme ruler of Ketu. His worship transmutes Ketu obstruction into sudden spiritual and material breakthroughs.'
        },
        {
          doshaName: 'Budha Dosha & Business Stagnation (बुध दोष व व्यापारिक मन्दी)',
          description: 'Impaired decision-making, communication breakdowns, loss in trade, and speech hesitation.',
          reliefMechanism: 'Strengthens intellect (Buddhi), sharpens memory, and blesses transactions with auspicious profits.'
        }
      ],
      lifeAspects: ['Total Removal of Obstacles (सर्वविघ्न निवारण)', 'Business Expansion & Wealth (व्यापार वृद्धि व ऋद्धि-सिद्धि)', 'Academic & Intellectual Mastery (बुद्धि व विवेक)', 'Auspicious New Beginnings (शुभ आरम्भ)'],
      wearOrInstallDirection: 'North or North-East (उत्तर अथवा ईशान कोण)',
      favorableDay: 'Wednesday (बुधवार) or Vinayaka Chaturthi / Sankashti',
      auspiciousTithi: 'Shukla Paksha Chaturthi (विनायक चतुर्थी)',
      metalPreference: 'Ashtadhatu (अष्टधातु), Pure Copper, or Consecrated Bronze',
      beejMantra: 'ॐ श्रीं ह्रीं क्लीं ग्लौं गं गणपतये वर वरद सर्वजनं मे वशमानय स्वाहा ॥',
      gayatriMantra: 'ॐ एकदन्ताय विद्महे वक्रतुण्डाय धीमहि तन्नो दन्ती प्रचोदयात् ॥',
      japaCount: 108,
      malaType: 'Red Sandalwood (रक्तचन्दन माला) or Rudraksha Mala',
      dhyanaSloka: 'उद्यद्दिनेश्वररुचिं निजहस्तपद्मैः पाशाङ्कुशाभयवराञ्छिरसा दधानम्। दानाम्बुसिक्तकपोलं कपिलाक्षमिन्दुचूडं नमामि वरदं गणनायकेशम्॥',
      pratishthaVidhiSummary: [
        'Place the Yantra facing East or North on yellow or red sanctified silk.',
        'Offer pure water, Modak, Durva grass blades (२१ दूर्वा दल), red hibiscus, and sindoor.',
        'Light a cow ghee lamp with sesame oil lamp and fragrant guggulu incense.',
        'Chant the Maha Ganapati Mula Mantra 108 times daily in early morning.'
      ]
    },
    practicalRemedies: [
      {
        category: 'Wealth',
        problem: 'व्यापार में घाटा, बार-बार रुकावटें और धन का न टिकना।',
        remedyProtocol: 'तिजोरी अथवा पूजा स्थल में महागणपति यन्त्र स्थापित करें, २१ दूर्वा अर्पित कर "ग्लौं गं गणपतये नमः" का नित्य जप करें।'
      },
      {
        category: 'Career',
        problem: 'नौकरी या व्यवसाय में बार-बार अंतिम चरण पर असफलता मिलना।',
        remedyProtocol: 'उत्तर दिशा में यन्त्र रखकर बुधवार के दिन सिन्दूर तिलक लगाएं और विघ्नहर्ता अष्टक का पाठ करें।'
      }
    ]
  },

  sankata_nashana_ganesha_yantra: {
    id: 'sankata_nashana_ganesha_yantra',
    taxonomyCategory: 'ganesha',
    lineageAttribution: 'नारद पुराणोक्त संकटनाशन गणपति परम्परा',
    nameSanskrit: 'श्री संकटनाशन गणेश यन्त्रम्',
    nameHindi: 'संकटनाशन गणेश यन्त्र',
    nameEnglish: 'Sankata Nashana Ganesha Yantra (Deliverance from All Calamities)',
    subTitle: 'The Sacred 12-Name Mandalic Shield for Rapid Annihilation of Severe Debts, Court Battles, and Adversity',
    presidingDeity: 'संकटनाशन गणेश (द्वादश नामात्मक विघ्नराज)',
    tradition: 'नारद पुराण (संकटनाशन गणेश स्तोत्र)',
    corePhilosophy: 'अष्टदिशाओं एवं द्वादश राशियों से आने वाले समस्त घोर संकट, ऋण, बाधा, कारागार भय व अरिष्टों का त्वरित शमन।',
    citations: [
      {
        sourceScripture: 'नारद पुराण (संकटनाशन गणेश स्तोत्र)',
        chapterOrVerse: 'श्लोक १-३',
        sanskritSloka: 'प्रणम्य शिरसा देवं गौरीपुत्रं विनायकम्।\\nभक्तावासं स्मरेन्नित्यमायुःकामार्थसिद्धये॥\\nप्रथमं वक्रतुण्डं च एकदन्तं द्वितीयकम्। तृतीयं कृष्णपिङ्गाक्षं गजवक्त्रं चतुर्थकम्॥',
        hindiMeaning: 'गौरीपुत्र भगवान विनायक को शिर झुकाकर नमन करते हुए दीर्घायु, अर्थ और समस्त कामनाओं की सिद्धि हेतु नित्य स्मरण करें। प्रथम वक्रतुण्ड, द्वितीय एकदन्त, तृतीय कृष्णपिङ्गाक्ष और चतुर्थ गजवक्त्र हैं।',
        englishMeaning: 'Bowing with revered head to Lord Vinayaka, the son of Gauri, let the devotee contemplate Him constantly for longevity, purpose, and attainment of all desires. The twelve names demolish all sorrows.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'संकट निवारण भूपुर प्राकार',
        nameEnglish: 'Calamity-Dissolving Citadel',
        chakraTitle: 'भूपुर एवं चार दिशा द्वार',
        presidingDeity: 'भगवान विघ्नराज',
        mudraShakti: 'अङ्कुश मुद्रा',
        yoginiClass: 'रक्षा शक्तियाँ',
        geometryType: '3 Stepped Walls with 4 Auspicious Entrances',
        significance: 'आकस्मिक दुर्घटनाओं, अदालती संकट और शत्रु बाधा को घर की परिधि से बाहर ही निष्प्रभावी करना।'
      },
      {
        index: 2,
        nameSanskrit: 'द्वादशदल संकटनाशन नामावली मण्डल',
        nameEnglish: '12-Petal Lotus of Divine Names',
        chakraTitle: 'द्वादश नाम मण्डल (Vakratunda to Gajānana)',
        presidingDeity: 'द्वादश गणेश (वक्रतुण्ड, एकदन्त, कृष्णपिङ्गाक्ष, गजवक्त्र, लम्बोदर, विकट, विघ्नराज, धूम्रवर्ण, भालचन्द्र, विनायक, गणपति, गजानन)',
        mudraShakti: 'दण्ड मुद्रा (Sovereign Authority)',
        yoginiClass: 'द्वादश आदित्य शक्ति',
        geometryType: '12 Symmetrical Ogee Petals Inscribed with the 12 Names',
        significance: 'बारहों महीनों और जीवन के बारह भावों में आने वाले सभी दुःखों, ऋणों और असाध्य संकटों का समूल नाश।'
      },
      {
        index: 3,
        nameSanskrit: 'अष्टदल सर्वसिद्धि मण्डल',
        nameEnglish: '8-Petal All-Attainment Lotus',
        chakraTitle: 'अष्टदिशा विघ्नशमन चक्र',
        presidingDeity: 'अष्टसिद्धि दायक विनायक',
        mudraShakti: 'वरद मुद्रा',
        yoginiClass: 'अष्टमातृका',
        geometryType: '8 Symmetrical Radial Petals with Seed Mantras',
        significance: 'आठों दिशाओं से सुरक्षा कवच का निर्माण तथा सौभाग्य व ऐश्वर्य की पुनर्स्थापना।'
      },
      {
        index: 4,
        nameSanskrit: 'द्वादश सूर्य किरण एवं बिन्दु',
        nameEnglish: 'Solar Radiance & Vighnaharta Bindu',
        chakraTitle: 'अधोमुख त्रिकोण व महाबिन्दु',
        presidingDeity: 'श्री विघ्नहर्ता गणेश',
        mudraShakti: 'मोदक मुद्रा',
        yoginiClass: 'सूर्य-शक्ति',
        geometryType: '12 Radiating Rays, Central Triangle and Golden Core',
        significance: 'घोर अन्धकार और संकट में ज्ञान व विजय का सूर्यवत् प्रकाश प्रज्वलित करना।'
      }
    ],
    jyotish: {
      rulingPlanet: 'All Nine Planets (सर्वग्रह शान्ति - विशेषतः शनि, राहु व केतु)',
      planetSanskrit: 'सर्वग्रह विघ्नशमन कारक (Universal Planetary Shield)',
      friendlyRashis: ['Mesha (मेष)', 'Vrishabha (वृषभ)', 'Mithuna (मिथुन)', 'Karka (कर्क)', 'Simha (सिंह)', 'Kanya (कन्या)', 'Tula (तुला)', 'Vrishchika (वृश्चिक)', 'Dhanu (धनु)', 'Makara (मकर)', 'Kumbha (कुम्भ)', 'Meena (मीन)'],
      friendlyNakshatras: ['All 27 Nakshatras (समस्त २७ नक्षत्र)'],
      doshaRemedies: [
        {
          doshaName: 'Rina Dosha & Heavy Indebtedness (ऋण दोष व भारी कर्ज)',
          description: 'Suffocating financial debt, trapped capital, delayed payments, and loss of honor.',
          reliefMechanism: 'The twelve sacred names dissolve the karmic knots that bind a native to chronic debt, reopening streams of lawful wealth.'
        },
        {
          doshaName: 'Sade Sati & Planetary Catastrophes (साढ़ेसाती व ग्रह अरिष्ट)',
          description: 'Simultaneous domestic, physical, legal, and financial crises triggered by Saturn or Rahu transits.',
          reliefMechanism: 'Ganesha is invoked prior to all remedies; His grace calms fierce planetary wrath instantly.'
        }
      ],
      lifeAspects: ['Immediate Deliverance from Calamities (संकट मुक्ति)', 'Debt Resolution (ऋण मोचन)', 'Legal & Court Relief (न्यायालय विजय)', 'Domestic Tranquility (पारिवारिक शान्ति)'],
      wearOrInstallDirection: 'East or North-East (पूर्व अथवा ईशान दिशा)',
      favorableDay: 'Tuesday (मंगलवार - अंगारक चतुर्थी) or Wednesday (बुधवार)',
      auspiciousTithi: 'Sankashti Chaturthi (संकष्टी चतुर्थी)',
      metalPreference: 'Copper (ताम्र पत्र), Silver, or Consecrated Bronze',
      beejMantra: 'ॐ गं गणपतये नमः ॥ ॐ संकटनाशनाय नमः ॥',
      gayatriMantra: 'ॐ लंबोदराय विद्महे महोदराय धीमहि तन्नो दन्ती प्रचोदयात् ॥',
      japaCount: 108,
      malaType: 'Sandalwood (चन्दन) or Lotus Seed Mala (कमलगट्टा)',
      dhyanaSloka: 'द्विरदवदनमीशं शङ्खचक्रासिपाशान् सृणिपरशुवराभीतान्यभीष्टप्रदं तम्। कनककलशयुक्तं मौलिरत्नैश्च दीप्तं प्रणतभयहरं त्वां संकटनाशं नमामि॥',
      pratishthaVidhiSummary: [
        'Bathe with Ganga water and install on a clean copper plate or red cloth.',
        'Offer red flowers, raw turmeric, sindoor, and jaggery (गुड़).',
        'Recite the Sankata Nashana Stotra 3 times followed by 108 japa of the Mula Mantra.',
        'Feed sweet laddus or modaks to cows or seekers on Sankashti Chaturthi.'
      ]
    },
    practicalRemedies: [
      {
        category: 'Protection',
        problem: 'चारों ओर से अचानक घोर संकट, अदालती मुकदमा या अनिष्ट का भय।',
        remedyProtocol: 'घर के पूजा स्थल में पूर्व दिशा में यन्त्र स्थापित कर नित्य संकटनाशन गणेश स्तोत्र का ३ बार पाठ करें।'
      },
      {
        category: 'Wealth',
        problem: 'कर्ज के चक्रव्यूह में फंसना और आमदनी के रास्ते बन्द हो जाना।',
        remedyProtocol: 'मंगलवार या चतुर्थी के दिन यन्त्र के समक्ष गुड़ और दूर्वा अर्पित कर ऋणहर्ता गणेश मन्त्र का जप करें।'
      }
    ]
  },

  ucchishta_ganapati_yantra: {
    id: 'ucchishta_ganapati_yantra',
    taxonomyCategory: 'ganesha',
    lineageAttribution: 'रुद्रयामल एवं उच्छिष्ट गणपति आगम तन्त्र',
    nameSanskrit: 'श्री उच्छिष्ट गणपति यन्त्रम्',
    nameHindi: 'उच्छिष्ट गणपति यन्त्र',
    nameEnglish: 'Ucchishta Ganapati Yantra (Rapid Fulfilment & Obstacle Annihilation)',
    subTitle: 'The Esoteric Tantric Mandalam for Swift Manifestation, Removal of Extreme Adversity, and Court Victories',
    presidingDeity: 'उच्छिष्ट गणपति (नीलसरस्वती युक्त)',
    tradition: 'रुद्रयामल, मेरुतन्त्र व उच्छिष्ट गाणपत्य आगम',
    corePhilosophy: 'शीघ्र फलदायी तान्त्रिक गणपति। समस्त विघ्नों का तत्काल उच्चाटन, शत्रुस्तम्भन, गुप्त कार्यसिद्धि, वशीकरण एवं दरिद्रता नाश।',
    citations: [
      {
        sourceScripture: 'रुद्रयामल तन्त्र (उच्छिष्ट गणपति कल्प)',
        chapterOrVerse: 'पटल १८, श्लोक ४-७',
        sanskritSloka: 'चतुर्भुजं रक्ततनुं त्रिनेत्रं पाशाङ्कुशौ मोदकपात्रदन्तौ।\\nकराम्बुजैर्धारयन्तं गणेशं ध्यायेत्प्रसन्नं सकलार्थसिद्धये॥',
        hindiMeaning: 'चार भुजाओं वाले, रक्तवर्ण शरीर, त्रिनेत्रधारी, अपने करकमलों में पाश, अंकुश, मोदकपात्र और दन्त धारण करने वाले प्रसन्नचित्त उच्छिष्ट गणपति का समस्त मनोरथों की शीघ्र सिद्धि हेतु ध्यान करें।',
        englishMeaning: 'Meditation upon the four-armed, crimson-bodied, three-eyed Lord Ucchishta Ganapati holding noose, goad, vessel of sweets, and broken tusk bestows instantaneous fulfillment of all hidden and difficult endeavors.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'तान्त्रिक भूपुर प्राकार',
        nameEnglish: 'Tantric Citadel of Protection',
        chakraTitle: 'भूपुर एवं द्वार मण्डल',
        presidingDeity: 'भैरव विनायक',
        mudraShakti: 'खेट मुद्रा',
        yoginiClass: 'तान्त्रिक रक्षा शक्तियाँ',
        geometryType: '3 Concentric Bhupura Walls with Cardinal Gates',
        significance: 'शत्रुओं की तांत्रिक क्रियाओं, मारण-मोहन-उच्चाटन के दुष्प्रभावों का तत्काल परावर्तन।'
      },
      {
        index: 2,
        nameSanskrit: 'अष्टदल तान्त्रिक पद्म',
        nameEnglish: '8-Petal Tantric Lotus of Hastipishachi',
        chakraTitle: 'गुह्य शक्ति मण्डल (Guhya Shaktis)',
        presidingDeity: 'अष्ट उच्छिष्ट शक्तियाँ (नीलसरस्वती, विघ्नेश्वरी, आदि)',
        mudraShakti: 'पाशाङ्कुश मुद्रा',
        yoginiClass: 'गुह्य विद्या वर्ग',
        geometryType: '8 Symmetrical Ogee Petals with Tantric Seed Syllables',
        significance: 'आठों दिशाओं के अवरोधों का त्वरित भेदन एवं असम्भव कार्यों को सम्भव बनाना।'
      },
      {
        index: 3,
        nameSanskrit: 'उच्छिष्ट षट्कोण पीठ',
        nameEnglish: 'Hexagram of Swift Action',
        chakraTitle: 'षट्कोण सामरस्य चक्र',
        presidingDeity: 'उच्छिष्ट गणपति व शक्ति',
        mudraShakti: 'सर्ववशीकरण मुद्रा',
        yoginiClass: 'योगिनी मण्डल',
        geometryType: 'Interlocking Equilateral Triangles',
        significance: 'अग्नि और जल, इच्छा और क्रिया का तीव्र एकत्रीकरण जिससे कार्यों में विलम्ब समाप्त होता है।'
      },
      {
        index: 4,
        nameSanskrit: 'हस्तिपिशाचि त्रिकोण एवं महाबिन्दु',
        nameEnglish: 'Central Guhya Triangle & Bindu',
        chakraTitle: 'अधोमुख त्रिकोण व गुह्य महाबिन्दु',
        presidingDeity: 'भगवान उच्छिष्ट गणपति',
        mudraShakti: 'खेचरी मुद्रा',
        yoginiClass: 'परा शक्ति',
        geometryType: 'Central Triangle Inscribed with Hastipishachi Mantra & Core Bindu',
        significance: 'तात्कालिक अभीष्ट मनोरथ सिद्धि, शत्रु-पराजय और दारिद्र्य का समूल विनाश।'
      }
    ],
    jyotishRemedies: {
      rulingPlanet: 'Rahu & Mars (राहु एवं मंगल - उग्र ग्रह शान्ति)',
      planetSanskrit: 'राहु-भौम युति व अंगारक दोष शमन',
      friendlyRashis: ['Mesha (मेष)', 'Vrishchika (वृश्चिक)', 'Kumbha (कुम्भ)', 'Makara (मकर)'],
      friendlyNakshatras: ['Ardra', 'Swati', 'Shatabhisha', 'Chitra', 'Dhanishta'],
      doshaRemedies: [
        {
          doshaName: 'Angaraka Dosha & Hostile Litigation (अंगारक दोष व शत्रु षड्यन्त्र)',
          description: 'Hostile court cases, government penalties, betrayal by associates, and venomous opposition.',
          reliefMechanism: 'Ucchishta Ganapati subdues hostile forces swiftly, granting the seeker victory and total protection.'
        },
        {
          doshaName: 'Severe Unexplained Delays in Crucial Tasks (असाध्य कार्य अवरोध)',
          description: 'High-stakes projects or acquisitions failing repeatedly despite best efforts due to unseen negative forces.',
          reliefMechanism: 'Annihilates the subtle energetic obstacles immediately through His fierce fiery grace.'
        }
      ],
      lifeAspects: ['Instant Work Fulfilment (शीघ्र कार्यसिद्धि)', 'Victory over Hostility (शत्रु विजय)', 'Relief from Black Magic & Curses (अभिचार निवारण)', 'Magnetism & Influence (सर्वजन आकर्षण)'],
      wearOrInstallDirection: 'South or South-East (दक्षिण अथवा आग्नेय कोण)',
      favorableDay: 'Tuesday (मंगलवार) or Amavasya / Chaturthi',
      auspiciousTithi: 'Krishna Paksha Chaturthi',
      metalPreference: 'Copper (ताम्र), Panchadhatu, or Consecrated Bronze',
      beejMantra: 'ॐ हस्तिपिशाचिलिखे स्वाहा ॥ ॐ गं गूं उच्छिष्टगणपतये नमः ॥',
      gayatriMantra: 'ॐ हस्तिमुखाय विद्महे उच्छिष्टाय धीमहि तन्नो गणेशः प्रचोदयात् ॥',
      japaCount: 108,
      malaType: 'Red Coral (मूंगा माला) or Rudraksha Mala',
      dhyanaSloka: 'नीलकुञ्जरसंकाशं रक्तवस्त्रविभूषणम्। दन्तहस्तं त्रिनेत्रं च पाशाङ्कुशधरं परम्। वल्लभासहितं देवं भक्ताभीष्टफलप्रदम्। उच्छिष्टगणपं वन्दे सर्वसिद्धिप्रदायकम्॥',
      pratishthaVidhiSummary: [
        'Requires pure mental focus and strict cleanliness (शुचि भाव).',
        'Place on clean copper plate facing South or East.',
        'Offer pomegranate seeds, honey, jaggery, red flowers, and sindoor.',
        'Chant the sacred Hastipishachi mantra 108 times during Pradosha or Sandhya.'
      ]
    },
    practicalRemedies: [
      {
        category: 'Career',
        problem: 'सरकारी या कानूनी कार्यों में लगातार अकारण अड़चनें और काम का अटकना।',
        remedyProtocol: 'यन्त्र के समक्ष मंगलवार के दिन लाल पुष्प व गुड़ अर्पित कर १०८ बार "ॐ हस्तिपिशाचिलिखे स्वाहा" का जप करें।'
      },
      {
        category: 'Protection',
        problem: 'गुप्त शत्रुओं द्वारा व्यापार या कार्यक्षेत्र में लगातार षड्यन्त्र रचना।',
        remedyProtocol: 'यन्त्र को दक्षिण दिशा में स्थापित कर सिन्दूर तिलक लगाएं और नित्य सांध्यकाल में दीप प्रज्वलित करें।'
      }
    ]
  },

  haridra_ganesha_yantra: {
    id: 'haridra_ganesha_yantra',
    taxonomyCategory: 'ganesha',
    lineageAttribution: 'मन्त्रमहोदधि एवं पञ्चमी कल्प परम्परा',
    nameSanskrit: 'श्री हरिद्रा गणेश यन्त्रम्',
    nameHindi: 'हरिद्रा गणेश यन्त्र',
    nameEnglish: 'Haridra Ganesha Yantra (Turmeric Lord of Auspiciousness & Stambhana)',
    subTitle: 'The Golden Peetambara Mandalam for Magnetizing Fortune, Silencing Hostility, and Stambhana of Misfortune',
    presidingDeity: 'भगवान हरिद्रा गणपति (पीताम्बर पीतगन्ध)',
    tradition: 'मन्त्रमहोदधि, दक्षिणामूर्ति संहिता',
    corePhilosophy: 'हल्दी (हरिद्रा) के रूप में पूजित पीताम्बर गणपति। सर्वजन स्तम्भन, राजसम्मान, शत्रु की वाणी एवं कुदृष्टि का स्तम्भन, स्थिर लक्ष्मी व आरोग्य।',
    citations: [
      {
        sourceScripture: 'मन्त्रमहोदधि (Mantra Mahodadhi)',
        chapterOrVerse: 'तरङ्ग २, श्लोक ३५-३८',
        sanskritSloka: 'हरिद्राभं चतुर्बाहुं पाशाङ्कुशधरं वरम्।\\nमोदकं दन्तयुक्तं च पीतवस्त्रविभूषितम्॥\\nध्यात्वा हरिद्रागणपं सर्वकामप्रदं शुभम्। मन्त्री जपेन्मनुं सम्यक् सर्वसिद्धिप्रदायकम्॥',
        hindiMeaning: 'हल्दी के समान पीतवर्ण, चतुर्भुज, पाश, अंकुश, मोदक और दन्त धारण किए हुए, पीत वस्त्रों से सुशोभित समस्त कामनाओं को पूर्ण करने वाले हरिद्रा गणपति का ध्यान कर मन्त्र का जप करना चाहिए।',
        englishMeaning: 'Meditating on the golden-turmeric hued, four-armed Lord Haridra Ganapati, holding noose, goad, sweet, and tusk, adorned with radiant yellow garments, the aspirant attains all auspicious fruits and mastery over adversity.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'पीताम्बर भूपुर प्राकार',
        nameEnglish: 'Golden Citadel of Stability',
        chakraTitle: 'हरिद्रा भूपुर एवं चतुर्द्वार',
        presidingDeity: 'पीतवर्ण विघ्नहर्ता',
        mudraShakti: 'स्तम्भन मुद्रा (Immobilizing Negative Influences)',
        yoginiClass: 'पीताम्बरा शक्ति',
        geometryType: '3 Concentric Walls with 4 Guarded Portals',
        significance: 'घर और व्यापार में रोग, दरिद्रता तथा शत्रुओं के दुष्प्रभावों का प्रवेश स्तम्भित करना।'
      },
      {
        index: 2,
        nameSanskrit: 'अष्टदल पीत पद्म मण्डल',
        nameEnglish: '8-Petal Golden Lotus of Prosperity',
        chakraTitle: 'अष्टदल स्तम्भन व सौभाग्य चक्र',
        presidingDeity: 'अष्ट मंगल गणपति शक्तियाँ',
        mudraShakti: 'वर-पाश मुद्रा',
        yoginiClass: 'माङ्गल्य शक्ति',
        geometryType: '8 Symmetrical Ogee Petals with Stambhana Beejaksharas',
        significance: 'आठों दिशाओं से सौभाग्य, मंगलकारी समाचार, धन-समृद्धि एवं विवाह में आ रही रुकावटों का निवारण।'
      },
      {
        index: 3,
        nameSanskrit: 'हरिद्रा षट्कोण व चतुष्कोण पीठ',
        nameEnglish: 'Hexagram & Quadrangle Altar',
        chakraTitle: 'स्तम्भन पीठ (Square Altar of Grounding)',
        presidingDeity: 'हरिद्रा विघ्नराज',
        mudraShakti: 'अङ्कुश मुद्रा',
        yoginiClass: 'स्थिर लक्ष्मी शक्ति',
        geometryType: 'Interlocking Equilateral Triangles with Inscribed Square',
        significance: 'चंचल लक्ष्मी को स्थिर करना, व्यापार में लाभ का स्थायित्व और विरोधी वचनों का स्तम्भन।'
      },
      {
        index: 4,
        nameSanskrit: 'हरिद्रा महाबिन्दु',
        nameEnglish: 'Golden Turmeric Bindu of Supreme Auspiciousness',
        chakraTitle: 'सूर्य-पीत महाबिन्दु',
        presidingDeity: 'परमब्रह्म हरिद्रा गणेश',
        mudraShakti: 'मोदक-दन्त मुद्रा',
        yoginiClass: 'कैवल्य सौभाग्य शक्ति',
        geometryType: 'Central Radiant Golden Core with Seed Syllables हुं and ग्लौं',
        significance: 'समस्त शुभ कार्यों का निर्विघ्न सम्पन्न होना और यश, कीर्ति व तेज की नित्य वृद्धि।'
      }
    ],
    jyotishRemedies: {
      rulingPlanet: 'Jupiter (बृहस्पति / गुरु) - ज्ञान, सुवर्ण व वैवाहिक सौभाग्य',
      planetSanskrit: 'बृहस्पति (Guru) - धर्म, ज्ञान व स्थिर सौभाग्य कारक',
      friendlyRashis: ['Dhanu (धनु)', 'Meena (मीन)', 'Karka (कर्क)', 'Simha (सिंह)'],
      friendlyNakshatras: ['Punarvasu', 'Vishakha', 'Purva Bhadrapada', 'Rohini', 'Pushya'],
      doshaRemedies: [
        {
          doshaName: 'Guru Chandal Dosha & Weak Jupiter (गुरु चाण्डाल दोष व गुरु मन्दता)',
          description: 'Stagnant fortunes, delay in marriage, disrespect in society, and loss of ancestral property.',
          reliefMechanism: 'Haridra Ganesha radiates the pure divine golden vibration of Jupiter, strengthening the guru-tattva and purifying spiritual intellect.'
        },
        {
          doshaName: 'Evil Eye & Hostile Speech (शत्रु वाणी व कुदृष्टि दोष)',
          description: 'Envy from rivals, malicious gossip destroying relationships, and business setbacks caused by ill will.',
          reliefMechanism: 'The Stambhana power of Haridra immobilizes opposing speech and transforms malicious intent into harmlessness.'
        }
      ],
      lifeAspects: ['Marriage Harmonization & Delay Removal (विवाह बाधा निवारण)', 'Steady Wealth & Protection from Loss (स्थिर लक्ष्मी)', 'Stambhana of Malicious Speech (शत्रु वाणी स्तम्भन)', 'Gold & Asset Accumulation (स्वर्ण व सम्पत्ति वृद्धि)'],
      wearOrInstallDirection: 'North-East or North (ईशान अथवा उत्तर दिशा)',
      favorableDay: 'Thursday (गुरुवार) or Shukla Paksha Chaturthi',
      auspiciousTithi: 'Shukla Chaturthi or Akshaya Tritiya',
      metalPreference: 'Pure Brass (पीतल), Gold, or Consecrated Bronze',
      beejMantra: 'ॐ हुं गं ग्लौं हरिद्रागणपतये वरवरद सर्वजनहृदयं स्तम्भय स्तम्भय स्वाहा ॥',
      gayatriMantra: 'ॐ हरिद्रारूपाय विद्महे वक्रतुण्डाय धीमहि तन्नो दन्ती प्रचोदयात् ॥',
      japaCount: 108,
      malaType: 'Turmeric Bulb Mala (हल्दी की गांठों की माला) or Yellow Sandalwood',
      dhyanaSloka: 'पाशाङ्कुशौ मोदकमेकदन्तं करैर्दधानं कनकप्रभं तम्। पीताम्बरं पीतविलेपनं च हरिद्ररूपं शरणं प्रपद्ये॥',
      pratishthaVidhiSummary: [
        'Anoint the Yantra with pure turmeric paste (हरिद्रा चूर्ण) and Ganga water.',
        'Place on clean yellow silk cloth facing East or North.',
        'Offer yellow flowers (गेंदु/कनेर), turmeric root, and besan laddoos.',
        'Chant with a Turmeric bead mala (हल्दी माला) 108 times every Thursday morning.'
      ]
    },
    practicalRemedies: [
      {
        category: 'Relationships',
        problem: 'विवाह में लगातार विलम्ब, सुयोग्य वर/कन्या न मिलना या पारिवारिक कलह।',
        remedyProtocol: 'ईशान कोण में हरिद्रा गणेश यन्त्र स्थापित करें, हल्दी की माला से "ॐ हुं गं ग्लौं हरिद्रागणपतये स्वाहा" का १०८ बार जप करें।'
      },
      {
        category: 'Wealth',
        problem: 'पैसा आता तो है लेकिन टिकता नहीं, स्थिर बचत का न हो पाना।',
        remedyProtocol: 'गुरुवार को यन्त्र के समक्ष पीला पुष्प और हल्दी की गांठ अर्पित कर तिजोरी या पूजा स्थल में रखें।'
      },
      {
        category: 'Vastu',
        problem: 'ईशान कोण में वास्तु दोष होने से घर में रोग, तनाव और उन्नति में रुकावट।',
        remedyProtocol: 'ईशान कोण की दीवार पर यन्त्र स्थापित करें और नित्य प्रातः घी का दीपक जलाएं।'
      }
    ]
  }
`;

const newCanonicalEntries = `
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
  }
`;

// 1. Append to shastric-jyotish-database.ts
let shastricContent = fs.readFileSync(shastricDbPath, 'utf8');
const shastricCloseIdx = shastricContent.lastIndexOf('};');
if (shastricCloseIdx === -1) {
  console.error('Could not find closing }; in shastric-jyotish-database.ts');
  process.exit(1);
}

// Ensure the preceding entry has a comma
const beforeClose = shastricContent.substring(0, shastricCloseIdx).trimEnd();
const separator = beforeClose.endsWith(',') ? '\n' : ',\n';
const updatedShastric = beforeClose + separator + newShastricEntries + '\n};\n';
fs.writeFileSync(shastricDbPath, updatedShastric, 'utf8');
console.log('[SUCCESS] Appended 4 Ganesha Yantras to shastric-jyotish-database.ts');

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
console.log('[SUCCESS] Appended 4 Ganesha Yantras to canonical-library-dataset.ts');
