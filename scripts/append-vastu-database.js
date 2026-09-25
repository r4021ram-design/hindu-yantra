const fs = require('fs');
const path = require('path');

const shastricDbPath = path.join(__dirname, '..', 'src', 'lib', 'yantras', 'shastric-jyotish-database.ts');
const canonicalDbPath = path.join(__dirname, '..', 'src', 'lib', 'sgkb', 'canonical-library-dataset.ts');

const newShastricEntries = `
  vastu_dosha_nivarana_yantra: {
    id: 'vastu_dosha_nivarana_yantra',
    taxonomyCategory: 'vastu',
    lineageAttribution: 'विश्वकर्म प्रकाश एवं समराङ्गण सूत्रधार वास्तु परम्परा',
    nameSanskrit: 'श्री वास्तुदोषनिवारण यन्त्रम्',
    nameHindi: 'वास्तु दोष निवारण यन्त्र',
    nameEnglish: 'Vastu Dosha Nivarana Yantra (Cosmic Harmonizer of Directional Energies)',
    subTitle: 'The Supreme Grid Mandalam of Vastu Purusha for Neutralizing Severe Architectural & Spatial Afflictions',
    presidingDeity: 'भगवान वास्तु पुरुष (सकल वास्तु मण्डलाधिपति)',
    tradition: 'विश्वकर्म प्रकाश, मयमतम् व मत्स्य पुराण',
    corePhilosophy: 'पंचमहाभूतों (पृथ्वी, जल, अग्नि, वायु, आकाश) और अष्टदिशाओं का सामंजस्य। भवन में बिना किसी तोड़-फोड़ के वास्तु दोषों का आध्यात्मिक ऊर्जा द्वारा परिहार।',
    citations: [
      {
        sourceScripture: 'विश्वकर्म प्रकाश (Vishvakarma Prakasha)',
        chapterOrVerse: 'अध्याय १, श्लोक ३-५',
        sanskritSloka: 'वास्तोष्पते प्रतिजानीह्यस्मान् त्स्वावेशो अनमीवो भवा नः।\\nयत् त्वेमहे प्रति तन्नो जुषस्व शं नो भव द्विपदे शं चतुष्पदे॥',
        hindiMeaning: 'हे वास्तुदेव! आप हमारे भवन के स्वामी हैं, हमारे प्रति कृपालु हों। हमारे घर को सभी प्रकार के रोगों, भयों और दोषों से मुक्त कर दें। हमारी सभी प्रार्थनाओं को स्वीकार कर समस्त परिजनों व पशुओं का कल्याण करें।',
        englishMeaning: 'O Lord of the Dwellings (Vastoshpati)! Recognize and be gracious unto us. Grant us a refuge devoid of afflictions and diseases. Whatsoever we seek from Thee, kindly bestow; bring auspicious blessing to two-footed and four-footed beings.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'त्रैलोक्य रक्षक भूपुर प्राकार',
        nameEnglish: 'Earth Rampart of Spatial Integrity',
        chakraTitle: 'भूपुर एवं चार दिशा द्वार',
        presidingDeity: 'चतुर्द्वार रक्षक देव',
        mudraShakti: 'अङ्कुश मुद्रा',
        yoginiClass: 'वास्तु द्वार शक्ति',
        geometryType: '3 Stepped Concentric Walls with 4 Guarded Portals',
        significance: 'भवन के चारों ओर अदृश्य सुरक्षा आवरण स्थापित करना, जिससे बाहरी नकारात्मक तरंगें भीतर प्रवेश न कर सकें।'
      },
      {
        index: 2,
        nameSanskrit: 'अष्टदल दिशा मण्डल',
        nameEnglish: '8-Petal Lotus of Directional Equilibrium',
        chakraTitle: 'अष्टदिशा अधिष्ठान चक्र (Ishana to Uttara)',
        presidingDeity: 'अष्टदिक्पाल (ईशान, इन्द्र, अग्नि, यम, निरृति, वरुण, वायु, कुबेर)',
        mudraShakti: 'पाश-वरद मुद्रा',
        yoginiClass: 'अष्टदिक् मातृका',
        geometryType: '8 Symmetrical Ogee Lotus Petals Inscribed with Directions & Elements',
        significance: 'आठों दिशाओं के ऊर्जा असंतुलन (जैसे गलत दिशा में शौचालय, रसोई, मुख्य द्वार) को पुनः सन्तुलित करना।'
      },
      {
        index: 3,
        nameSanskrit: 'वास्तु पुरुष मण्डल पीठ',
        nameEnglish: 'Vastu Purusha Mandala Grid',
        chakraTitle: 'नव पद एवं वास्तु पुरुष चक्र (9 Sacred Padas)',
        presidingDeity: 'वास्तु पुरुष एवं एकादशी रुद्र',
        mudraShakti: 'अभय मुद्रा',
        yoginiClass: 'पञ्चमहाभूत शक्ति',
        geometryType: 'Sacred Grid with Central Brahma Sthana',
        significance: 'भवन के केंद्र (ब्रह्मस्थान) और पञ्चमहाभूतों (आकाश, वायु, अग्नि, जल, पृथ्वी) की स्वाभाविक प्राण-ऊर्जा को जागृत करना।'
      },
      {
        index: 4,
        nameSanskrit: 'ब्रह्म महाबिन्दु',
        nameEnglish: 'Cosmic Core of Absolute Stillness',
        chakraTitle: 'परम ब्रह्मस्थान बिन्दु',
        presidingDeity: 'स्वयंभू ब्रह्म',
        mudraShakti: 'ज्ञान मुद्रा',
        yoginiClass: 'अमृता शक्ति',
        geometryType: 'Central Radiant Golden Bindu',
        significance: 'समस्त वास्तु का मूल केंद्र, जहाँ से शान्ति, स्वास्थ्य, स्थिरता और समृद्धि का अखंड प्रवाह निःसृत होता है।'
      }
    ],
    jyotish: {
      rulingPlanet: 'All Nine Planets & Panchamahabhuta (सर्वग्रह व पंचतत्व)',
      planetSanskrit: 'वास्तु पुरुष (समस्त ग्रहाधिष्ठान)',
      friendlyRashis: ['All 12 Rashis (समस्त १२ राशियां)'],
      friendlyNakshatras: ['All 27 Nakshatras (समस्त २७ नक्षत्र)'],
      doshaRemedies: [
        {
          doshaName: 'Structural Vastu Defects (ईशान, नैर्ऋत्य, आग्नेय, वायव्य वास्तु दोष)',
          description: 'Toilet in North-East, kitchen in North, bedroom in South-East, underground water in South-West causing persistent financial leakages and chronic illnesses.',
          reliefMechanism: 'The Yantra radiates high-frequency sacred geometric vibrations that neutralize energetic distortions without requiring architectural demolition.'
        },
        {
          doshaName: 'Geopathic Stress & Sick Building Syndrome (भू-ऊर्जा विक्षोभ)',
          description: 'Heavy atmospheric feeling inside the house, frequent quarrels among family members, lack of restful sleep, and depression.',
          reliefMechanism: 'Realigns the terrestrial electromagnetic grid and restores cosmic prana within the dwelling.'
        }
      ],
      lifeAspects: ['Universal Vastu Rectification (समस्त वास्तु दोष शमन)', 'Domestic Peace & Harmony (गृह क्लेश निवारण)', 'Health, Vitality & Long Life (स्वास्थ्य व दीर्घायु)', 'Financial Stability & Abundance (स्थिर लक्ष्मी व समृद्धि)'],
      wearOrInstallDirection: 'North-East (ईशान कोण) or Central Living Space / Main Entrance',
      favorableDay: 'Tuesday (मंगलवार), Thursday (गुरुवार), or Sunday (रविवार)',
      auspiciousTithi: 'Shukla Paksha Panchami, Dashami, or Poornima',
      metalPreference: 'Ashtadhatu (अष्टधातु), Pure Copper, or Consecrated Bronze',
      beejMantra: 'ॐ वास्तोष्पते प्रतिजानीह्यस्मान् स्वावेशो अनमीवो भवा नः स्वाहा ॥ ॐ वास्तुपुरुषाय नमः ॥',
      gayatriMantra: 'ॐ वास्तुपुरुषाय विद्महे भूमिपुत्राय धीमहि तन्नो वास्तुः प्रचोदयात् ॥',
      japaCount: 108,
      malaType: 'Rudraksha Mala or Sandalwood Mala',
      dhyanaSloka: 'वास्तुपुरुषं महाकायं शयानं च महीतले। ईशानानन्यस्तशिरो नैर्ऋत्यां पदयुग्मकम्। समस्तदेवतावासं प्रणमामि कृपानिधिम्॥',
      pratishthaVidhiSummary: [
        'Clean the East or North-East wall and anoint with sacred Gangajal and sandalwood.',
        'Place the Yantra on a sanctified yellow silk cloth or fix it flat at eye-level on the wall.',
        'Offer white flowers, turmeric root, akshata (unbroken rice), and light a pure cow ghee lamp.',
        'Recite the Vastu Purusha Mantra 108 times and sprinkle sanctified water in all 8 corners.'
      ]
    },
    practicalRemedies: [
      {
        category: 'Vastu',
        problem: 'घर में गलत दिशा में बने कमरे, सीढ़ियाँ या शौचालय होने से निरन्तर धन हानि और रोग।',
        remedyProtocol: 'ईशान कोण या मुख्य हॉल में वास्तु दोष निवारण यन्त्र स्थापित कर नित्य घी का दीपक जलाएं और वास्तु गायत्री का जप करें।'
      },
      {
        category: 'Health',
        problem: 'घर के सदस्यों का लगातार बीमार रहना और इलाज कराने पर भी रोग का ठीक न होना।',
        remedyProtocol: 'घर के केंद्र (ब्रह्मस्थान) या मुख्य द्वार के ऊपर यन्त्र लगाकर गंगाजल छिड़कें।'
      }
    ]
  },

  dikpala_ashtadigbandhana_yantra: {
    id: 'dikpala_ashtadigbandhana_yantra',
    taxonomyCategory: 'vastu',
    lineageAttribution: 'अग्नि पुराण एवं नारद पुराण दिग्बन्धन परम्परा',
    nameSanskrit: 'श्री दिक्पाल अष्टदिग्बन्धन यन्त्रम्',
    nameHindi: 'दिक्पाल अष्टदिग्बन्धन यन्त्र',
    nameEnglish: 'Dikpala Ashtadigbandhana Yantra (Shield of the Eight Directional Guardians)',
    subTitle: 'The Impenetrable Fortress Mandalam of the 8 Celestial Regents for Total Perimeter Protection',
    presidingDeity: 'अष्टदिक्पाल (इन्द्र, अग्नि, यम, निरृति, वरुण, वायु, कुबेर, ईशान)',
    tradition: 'अग्नि पुराण, मन्त्रमहोदधि व तन्त्रराज तन्त्र',
    corePhilosophy: 'आठों दिशाओं के दिव्य रक्षकों द्वारा घर, व्यापार स्थल, आश्रम व शरीर की अभेद्य किलाबन्दी (दिग्बन्धन)। किसी भी कोण से आने वाली नकारात्मक, प्रेत, तांत्रिक या प्राकृतिक विपत्ति का प्रवेश सर्वथा निषिद्ध।',
    citations: [
      {
        sourceScripture: 'अग्नि पुराण (Agni Purana)',
        chapterOrVerse: 'अध्याय ५१, श्लोक १-४',
        sanskritSloka: 'पूर्वे चेन्द्रस्तथा वह्निर्दक्षिणे यम एव च।\\nनैर्ऋत्यां निरृतिः पश्चाद्वरुणो मारुतो दिशि॥\\nउत्तरे च धनदः स्यादीशाने शङ्करः स्मृतः।\\nएतैर्दिक्षु स्थिता देवाः पालयन्ति जगत्त्रयम्॥',
        hindiMeaning: 'पूर्व में इन्द्र, आग्नेय में अग्नि, दक्षिण में यम, नैर्ऋत्य में निरृति, पश्चिम में वरुण, वायव्य में वायु, उत्तर में कुबेर तथा ईशान में शंकर विराजमान हैं। ये आठों देवता अपनी-अपनी दिशा में स्थित रहकर तीनों लोकों की रक्षा करते हैं।',
        englishMeaning: 'In the East resides Indra, in the South-East Agni, in the South Yama, in the South-West Nirriti, in the West Varuna, in the North-West Vayu, in the North Kubera, and in the North-East Ishana. Stationed in their quarters, these divinities protect the universe.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'अष्टवज्र भूपुर प्राकार',
        nameEnglish: 'Octagonal Vajra Earth Bastion',
        chakraTitle: 'भूपुर एवं दिशा द्वार (4 Portals & Vajra Ramparts)',
        presidingDeity: 'अष्टदिक्पाल द्वारपाल',
        mudraShakti: 'वज्र मुद्रा (Adamantine Resistance)',
        yoginiClass: 'दिग्बन्धन शक्ति',
        geometryType: 'Concentric Citadel Walls Reinforced with Directional Spikes',
        significance: 'आठों दिशाओं की सीमा रेखा को अभेद्य बनाकर अदृश्य शत्रु-आक्रमण, प्रेत बाधा व अभिचार का प्रवेश रोकना।'
      },
      {
        index: 2,
        nameSanskrit: 'अष्टदल दिक्पाल पद्म',
        nameEnglish: '8-Petal Lotus of the Directional Regents',
        chakraTitle: 'अष्टदिक्पाल मण्डल ( लां, रां, टां, क्षां, वां, यां, सां, हां )',
        presidingDeity: 'इन्द्र (लां), अग्नि (रां), यम (टां), निरृति (क्षां), वरुण (वां), वायु (यां), कुबेर (सां), ईशान (हां)',
        mudraShakti: 'अष्टायुध मुद्रा (8 Celestial Weapons)',
        yoginiClass: 'दिशारक्षा मातृका',
        geometryType: '8 Symmetrical Ogee Petals with Seed Mantras',
        significance: 'प्रत्येक दिशा के स्वामी के बीज मन्त्र द्वारा सम्बन्धित दिशा की ऊर्जा का शोधन व प्रकटीकरण।'
      },
      {
        index: 3,
        nameSanskrit: 'अष्टकोण अष्टदिग्बन्धन कवच',
        nameEnglish: 'Octagram of Celestial Fortification',
        chakraTitle: 'अष्टकोण अस्त्र चक्र (8-Pointed Star of Protection)',
        presidingDeity: 'सुदर्शन व त्रिशूल अधिष्ठाता',
        mudraShakti: 'दण्ड मुद्रा',
        yoginiClass: 'अस्त्र शक्ति',
        geometryType: 'Interlocking 8-Pointed Regular Star (Octagram)',
        significance: 'समस्त दिशाओं से आने वाले वास्तु वेध, मार्ग वेध, शूल वेध और नकारात्मक दृष्टि का तत्काल परावर्तन।'
      },
      {
        index: 4,
        nameSanskrit: 'दिग्बन्धन महाबिन्दु',
        nameEnglish: 'Bindu of Sovereign Dominion',
        chakraTitle: 'परम रक्षा बिन्दु',
        presidingDeity: 'भगवान सदाशिव',
        mudraShakti: 'अभय मुद्रा',
        yoginiClass: 'परा रक्षा शक्ति',
        geometryType: 'Central Radiant Golden Shield with Inscribed रक्ष Core',
        significance: 'भवन के केंद्र में अखण्ड शान्ति, अभय और परमात्मा के संरक्षण का साक्षात् जागरण।'
      }
    ],
    jyotish: {
      rulingPlanet: 'All Planetary Directions (अष्टदिशा ग्रह अधिपति)',
      planetSanskrit: 'अष्टदिक्पाल ग्रह मण्डल (Sun, Venus, Mars, Rahu, Saturn, Moon, Mercury, Jupiter)',
      friendlyRashis: ['All 12 Rashis (समस्त १२ राशियां)'],
      friendlyNakshatras: ['All 27 Nakshatras (समस्त २७ नक्षत्र)'],
      doshaRemedies: [
        {
          doshaName: 'Directional Negative Currents & Nazar/Buri Nazar (दिशा वेध व पराई बुरी दृष्टि)',
          description: 'Shula Vedha (T-junction hits), sharp road intersections pointing towards the front gate, graveyard or transformer proximity causing constant accidents.',
          reliefMechanism: 'The 8 Dikpala weapons deflect harmful directional energy flows and enclose the property in an adamantine envelope.'
        },
        {
          doshaName: 'Fear of Thieves, Lawsuits & Unseen Hostilities (चोरी, भय व शत्रु संकट)',
          description: 'Anxiety in dwelling, nighttime dread, vulnerability to burglary or sudden attacks from rivals.',
          reliefMechanism: 'Invokes the warrior vigilance of Indra, Yama, and Agni to guard all entry points perpetual day and night.'
        }
      ],
      lifeAspects: ['Impenetrable Boundary Shield (अभंग्य सीमारक्षा)', 'Neutralization of Road Hits & Vastu Vedha (मार्गवेध व वास्तु वेध निवारण)', 'Peace of Mind & Freedom from Fear (निर्भयता व मानसिक शान्ति)', 'Deflection of Black Magic & Envy (अभिचार व कुदृष्टि शमन)'],
      wearOrInstallDirection: 'Main Entrance (मुख्य द्वार) or Central Protective Axis',
      favorableDay: 'Tuesday (मंगलवार), Saturday (शनिवार), or Amavasya / Poornima',
      auspiciousTithi: 'Shukla Ashtami or Chaturdashi',
      metalPreference: 'Panchadhatu (पञ्चधातु), Pure Copper, or Consecrated Bronze',
      beejMantra: 'ॐ इन्द्राय नमः ॐ अग्नये नमः ॐ यमाय नमः ॐ निरृतये नमः ॐ वरुणाय नमः ॐ वायवे नमः ॐ कुबेराय नमः ॐ ईशानाय नमः ॥ ॐ दिग्बन्धनाय स्वाहा ॥',
      gayatriMantra: 'ॐ दिग्पालेभ्यो विद्महे लोकपालेभ्यो धीमहि तन्नो रक्षः प्रचोदयात् ॥',
      japaCount: 108,
      malaType: 'Rudraksha Mala or Raktachandan Mala',
      dhyanaSloka: 'ऐरावतारूढमिन्द्रं शक्तिहस्तं च पावकम्। महिषस्थं यमं क्रूरं खड्गहस्तं च निरृतिम्। नक्रस्थं वरुणं पाशं मृगस्थं पवनं तथा। नरवाहनगं सोमं वृषभारूढमीश्वरम्। ध्यायेदष्टौ दिक्पतींश्च सर्वविघ्नविनाशनान्॥',
      pratishthaVidhiSummary: [
        'Perform Digbandhana ritual facing East during morning sandhya.',
        'Anoint the perimeter or the Yantra with mustard oil, sindoor, and sacred holy ash (bhasma).',
        'Offer yellow mustard seeds (पीली सरसों), red flowers, and cloves (लौंग).',
        'Chant the 8 Dikpala mantras while throwing unbroken rice (akshata) in all 8 cardinal and intercardinal directions.'
      ]
    },
    practicalRemedies: [
      {
        category: 'Protection',
        problem: 'घर के सामने टी-पॉइंट (T-Junction), वीथी शूल या श्मशान होने से भयानक अशांति और दुर्घटनाएं।',
        remedyProtocol: 'मुख्य द्वार के ऊपर बाहर की ओर दिक्पाल अष्टदिग्बन्धन यन्त्र लगाएं और मंगलवार को सिन्दूर अर्पित करें।'
      },
      {
        category: 'Vastu',
        problem: 'प्लॉट या मकान का कटा हुआ कोना (कट-आउट या विस्तार) होने से दिशात्मक असंतुलन।',
        remedyProtocol: 'कटे हुए कोने की दीवार पर यह यन्त्र स्थापित कर आठों दिशाओं में पीली सरसों छिड़कें।'
      }
    ]
  },

  bhoomi_kurma_yantra: {
    id: 'bhoomi_kurma_yantra',
    taxonomyCategory: 'vastu',
    lineageAttribution: 'वाराही तन्त्र एवं मयमतम् भूमि लक्षण परम्परा',
    nameSanskrit: 'श्री भूमिकूर्म यन्त्रम्',
    nameHindi: 'भूमि कूर्म यन्त्र',
    nameEnglish: 'Bhoomi Kurma Yantra (Cosmic Foundation & Land Consecration Mandalam)',
    subTitle: 'The Foundation Yantra of Lord Kurma for Structural Stability, Land Consecration, and Foundation Stone Rites',
    presidingDeity: 'भगवान कूर्म अवतार एवं भूदेवी (वसुन्धरा)',
    tradition: 'वाराही तन्त्र, मयमतम् व काश्यप संहिता',
    corePhilosophy: 'कूर्म रूपी भगवान विष्णु सम्पूर्ण चराचर पृथ्वी और मेरु पर्वत के आधार हैं। गृह-निर्माण, शिलान्यास एवं भूमि-पूजन के समय इसे स्थापित करने से भूमि में व्याप्त शल्य-दोष, हड्डियों, कोयलों का दोष समाप्त होता है और भवन शताब्दियों तक स्थिर रहता है।',
    citations: [
      {
        sourceScripture: 'मयमतम् (Mayamatam - भूमि लक्षण)',
        chapterOrVerse: 'अध्याय १२, श्लोक १५-१८',
        sanskritSloka: 'कूर्माकारेण संस्थाप्य धारिणीं धरणीं पराम्।\\nयत्र कूर्मासनं सम्यक् तत्र वास्तोः सुखं भवेत्॥\\nन कम्पते गृहं तस्य न च शल्यकृतं भयम्।\\nचिरकालं स्थिरा भूत्वा धनधान्यविवर्धिनी॥',
        hindiMeaning: 'कूर्म के आकार में परम धारिणी पृथ्वी का अधिष्ठान कर जहाँ कूर्म यन्त्र की विधिपूर्वक प्रतिष्ठा की जाती है, वहाँ के वास्तु में सदा सुख रहता है। वह भवन कभी डोलता नहीं, न वहाँ कोई शल्य दोष का भय रहता है; वह चिरकाल तक स्थिर रहकर धन-धान्य की वृद्धि करता है।',
        englishMeaning: 'Establishing the supreme earth in the likeness of the cosmic tortoise, wherever the Kurma seat is consecrated, everlasting joy prevails in that dwelling. The mansion shakes not, nor is it haunted by skeletal or mineral defects; remaining steadfast for ages, it multiplies wealth and grain.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'धरा भूपुर प्राकार',
        nameEnglish: 'Prithvi Earth Fortress',
        chakraTitle: 'भूपुर एवं भूमि-द्वार (3 Concentric Layers & Portals)',
        presidingDeity: 'भूदेवी एवं अष्टनाग',
        mudraShakti: 'भूमि मुद्रा',
        yoginiClass: 'वसुन्धरा मातृका',
        geometryType: '3 Stepped Walls with 4 Auspicious Entrances',
        significance: 'भूखण्ड की ऊर्जा को बाहरी भू-दोषों और नकारात्मक भू-गर्भीय हलचलों से सुरक्षित करना।'
      },
      {
        index: 2,
        nameSanskrit: 'अष्टदल वसुन्धरा पद्म',
        nameEnglish: '8-Petal Lotus of Terrestrial Stability',
        chakraTitle: 'अष्ट वसुन्धरा मण्डल (लं, धरां, भूः, स्थिरा, अचला, क्षिति, वसुधा, धरा)',
        presidingDeity: 'अष्ट भूमि शक्तियाँ',
        mudraShakti: 'कूर्म मुद्रा (Divine Grounding)',
        yoginiClass: 'धरा शक्ति वर्ग',
        geometryType: '8 Symmetrical Ogee Petals with Earth Seed Syllables',
        significance: 'भूमि में उर्वरा शक्ति, स्थिरता और निर्माण कार्य में आने वाली वित्तीय व कानूनी बाधाओं का शमन।'
      },
      {
        index: 3,
        nameSanskrit: 'कूर्म पृष्ठ षट्कोण मण्डल',
        nameEnglish: 'Hexagonal Shield of Cosmic Carapace',
        chakraTitle: 'कूर्म कवच पीठ (Hexagonal Carapace Plates)',
        presidingDeity: 'भगवान कूर्मराज',
        mudraShakti: 'शङ्ख-चक्र मुद्रा',
        yoginiClass: 'वैष्णवी शक्ति',
        geometryType: 'Interlocking Hexagonal Plates of the Cosmic Tortoise Shell',
        significance: 'पृथ्वी के भार को धारण करने वाली अदम्य शक्ति का संचार, जिससे भवन चिरस्थायी व भूकम्प-प्रतिरोधी बने।'
      },
      {
        index: 4,
        nameSanskrit: 'पृथ्वी तत्व चतुष्कोण एवं महाबिन्दु',
        nameEnglish: 'Prithvi Square & Golden Core',
        chakraTitle: 'पीतवर्ण पृथ्वी चतुष्कोण व महाबिन्दु',
        presidingDeity: 'भगवान श्री कूर्म एवं भूदेवी',
        mudraShakti: 'अमृतासन मुद्रा',
        yoginiClass: 'कैवल्य धरा शक्ति',
        geometryType: 'Earth Element Quadrangle with Bija लं and Core Bindu',
        significance: 'भूमि का परम स्थायित्व, गृहस्वामियों को सुख-शान्ति और स्थिर वंशवृद्धि का वरदान।'
      }
    ],
    jyotish: {
      rulingPlanet: 'Saturn & Earth Element (शनि एवं पृथ्वी तत्व - स्थायित्व कारक)',
      planetSanskrit: 'शनि (स्थिरता) व मंगल (भूमि कारक भौम)',
      friendlyRashis: ['Vrishabha (वृषभ)', 'Kanya (कन्या)', 'Makara (मकर)', 'Vrishchika (वृश्चिक)'],
      friendlyNakshatras: ['Rohini', 'Uttara Phalguni', 'Uttara Ashadha', 'Uttara Bhadrapada', 'Dhanishta'],
      doshaRemedies: [
        {
          doshaName: 'Shalya Dosha & Impure Land Faults (शल्य दोष, श्मशान भूमि व दबे हुए अवशेष)',
          description: 'Land having buried bones, ashes, ancient iron nails, or cursed history leading to accidents during excavation and failure to complete construction.',
          reliefMechanism: 'Lord Kurma purifies the subterranean strata, dissolving all residual toxic memories and curses of the land.'
        },
        {
          doshaName: 'Construction Stoppages & Land Litigation (गृह निर्माण में रुकावट व भूमि विवाद)',
          description: 'Repeated financial halts after laying foundation, disputes over plot borders, or sudden building permit cancellations.',
          reliefMechanism: 'Anchors the energetic foundation with primordial terrestrial gravitational stability.'
        }
      ],
      lifeAspects: ['Pristine Foundation Consecration (शिलान्यास व नींव पूजन)', 'Land Dispute Resolution (भूमि विवाद मुक्ति)', 'Structural Longevity & Stability (भवन का चिरस्थायी स्थायित्व)', 'Purification of Subsoil Impurities (शल्य दोष निवारण)'],
      wearOrInstallDirection: 'South-West (नैर्ऋत्य कोण - Heavy Earth Element) or Foundation Stone Pit',
      favorableDay: 'Saturday (शनिवार), Friday (शुक्रवार), or Rohini/Uttarabhadrapada Nakshatra',
      auspiciousTithi: 'Shukla Paksha Pratipada, Panchami, or Akshaya Tritiya',
      metalPreference: 'Pure Copper (ताम्र), Panchadhatu, or Pure Silver',
      beejMantra: 'ॐ ह्रीं कूर्माय नमः ॥ ॐ धरणीधराय नमः ॥ ॐ लं पृथिव्यै नमः ॥',
      gayatriMantra: 'ॐ कश्यपाय विद्महे महाकूर्माय धीमहि तन्नो कूर्मः प्रचोदयात् ॥',
      japaCount: 108,
      malaType: 'Tulsi Mala (तुलसी माला) or Sandalwood Mala',
      dhyanaSloka: 'मज्जन्महीमण्डलगण्डशैलमुल्लासयन्तं कमठस्वरूपम्। पातालमूलस्थितविश्वपाशं वन्दे हरिं कूर्मतनुं शरण्यम्॥',
      pratishthaVidhiSummary: [
        'Used during Bhoomi Poojan, Shila-Nyas (laying foundation stone), or Griha Pravesh.',
        'Place the Yantra in a sanctified copper vessel alongside 5 gems (pancharatna) and silver snake/cowrie.',
        'Anoint with pure milk, Gangajal, turmeric, and kumkum.',
        'Bury in the South-West (Nairritya) corner of the foundation pit or place in the home temple on copper plate.'
      ]
    },
    practicalRemedies: [
      {
        category: 'Vastu',
        problem: 'नया मकान बनाते समय बार-बार रुकावट आना, बजट खत्म होना या विवाद खड़ा होना।',
        remedyProtocol: 'नींव खोदते समय नैर्ऋत्य कोण में भूमिकूर्म यन्त्र स्थापित कर "ॐ ह्रीं कूर्माय नमः" का जप करें।'
      },
      {
        category: 'Wealth',
        problem: 'रियल एस्टेट या जमीन-जायदाद के सौदों में घाटा या जमीन न बिक पाना।',
        remedyProtocol: 'पूजा स्थल में यन्त्र पर हल्दी और लाल पुष्प अर्पित कर नित्य भूमि गायत्री का पाठ करें।'
      }
    ]
  },

  matsya_yantra: {
    id: 'matsya_yantra',
    taxonomyCategory: 'vastu',
    lineageAttribution: 'मत्स्य पुराण एवं विश्वकर्म वास्तुशास्त्र जल-तत्व परम्परा',
    nameSanskrit: 'श्री मत्स्य यन्त्रम्',
    nameHindi: 'मत्स्य यन्त्र',
    nameEnglish: 'Matsya Yantra (Sacred Water-Element & North-East Vastu Cleanser)',
    subTitle: 'The Primordial Avatar Mandalam for Rectifying Water Defects, North-East Afflictions, and Negative Vibrations',
    presidingDeity: 'भगवान मत्स्य अवतार (वेदोद्धारक श्रीहरि)',
    tradition: 'मत्स्य पुराण, पद्म पुराण व सात्वत तन्त्र',
    corePhilosophy: 'प्रलयकाल में वेदों की रक्षा करने वाले भगवान मत्स्य जल-तत्व और ज्ञान के परम रक्षक हैं। ईशान (North-East) दिशा जल-तत्व की दिशा है; इस दिशा में यदि भारी निर्माण, सेप्टिक टैंक या दोष हो, तो मत्स्य यन्त्र जल-तत्व को अमृतमय बनाकर स्वास्थ्य और लक्ष्मी का प्रवाह पुनर्जीवित करता है।',
    citations: [
      {
        sourceScripture: 'मत्स्य पुराण (Matsya Purana)',
        chapterOrVerse: 'अध्याय १, श्लोक १०-१३',
        sanskritSloka: 'शृङ्गिणं काञ्चनं दिव्यं महामत्स्यस्वरूपिणम्।\\nवेदानां रक्षणार्थाय नौकारूपधरो हरिः॥\\nतस्य स्मरणमात्रेण सर्ववास्तुप्रशाम्यति।\\nआपदः प्रलयं यान्ति वर्धते च परा श्रिया॥',
        hindiMeaning: 'सोने के समान कान्तिमान्, दिव्य शृंगधारी, महामत्स्य रूपी भगवान श्रीहरि ने वेदों की रक्षा हेतु नौकारूप धारण किया था। उनके स्मरण मात्र से समस्त वास्तु दोष शान्त हो जाते हैं, आपत्तियाँ नष्ट हो जाती हैं और परम लक्ष्मी की वृद्धि होती है।',
        englishMeaning: 'Radiant as molten gold, adorned with a celestial horn, the supreme Lord Hari assumed the form of the Great Fish to rescue the Vedas like a cosmic boat. By mere contemplation of Him, all spatial and Vastu blemishes dissolve, catastrophes are nullified, and divine fortune multiplies.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'अमृत सागर भूपुर प्राकार',
        nameEnglish: 'Oceanic Rampart of Purification',
        chakraTitle: 'भूपुर एवं चार अमृत द्वार',
        presidingDeity: 'वरुण एवं सागर देवता',
        mudraShakti: 'मत्स्य मुद्रा (Cleansing All Pollutions)',
        yoginiClass: 'जल मातृका',
        geometryType: '3 Concentric Bhupura Walls with Cardinal Portals',
        significance: 'घर या प्रतिष्ठान में आने वाली नकारात्मक तरंगों, नजर दोष और विषैली मानसिक ऊर्जा का जलवत प्रक्षालन।'
      },
      {
        index: 2,
        nameSanskrit: 'द्वादशदल अमृत पद्म',
        nameEnglish: '12-Petal Lotus of Aquatic Harmony',
        chakraTitle: 'द्वादश रस मण्डल (12 Petals of Life Nectar)',
        presidingDeity: 'द्वादश मत्स्य शक्तियाँ',
        mudraShakti: 'वर-पाश मुद्रा',
        yoginiClass: 'अमृता कला',
        geometryType: '12 Symmetrical Ogee Petals with Aquatic Seed Syllables',
        significance: 'जल-तत्व से जुड़े दोषों (जैसे दूषित जल, बोरवेल का गलत स्थान) से उत्पन्न असाध्य रोगों का शमन।'
      },
      {
        index: 3,
        nameSanskrit: 'मत्स्य युगल आवर्त चक्र',
        nameEnglish: 'Sacred Twin Interlocking Fish Spiral',
        chakraTitle: 'मत्स्य युगल चक्र (Twin Fish Vortices)',
        presidingDeity: 'श्री मत्स्यावतार एवं वेदलक्ष्मी',
        mudraShakti: 'शङ्ख-चक्र-गदा-पद्म मुद्रा',
        yoginiClass: 'वैष्णवी शक्ति',
        geometryType: 'Intertwined Twin Fish Currents (Dynamic Water Vortex)',
        significance: 'ईशान कोण की अवरुद्ध प्राण-ऊर्जा को चक्राकार गति देकर निरन्तर आर्थिक प्रगति और सौहार्द का प्रवाह बनाए रखना।'
      },
      {
        index: 4,
        nameSanskrit: 'अमृत सिन्धु महाबिन्दु',
        nameEnglish: 'Oceanic Bindu of Infinite Bliss',
        chakraTitle: 'परम मत्स्य महाबिन्दु',
        presidingDeity: 'भगवान वेदोद्धारक मत्स्य',
        mudraShakti: 'ज्ञान मुद्रा',
        yoginiClass: 'परा वैष्णवी शक्ति',
        geometryType: 'Central Radiant Oceanic Blue & Gold Core with Seed क्लीं',
        significance: 'समस्त ज्ञान, विवेक, स्मरण शक्ति और अखंड ऐश्वर्य का दिव्य स्त्रोत।'
      }
    ],
    jyotish: {
      rulingPlanet: 'Moon & Neptune/Varuna (चन्द्रमा एवं जल तत्व)',
      planetSanskrit: 'चन्द्र (मन व जल कारक) एवं वरुण (जलपति)',
      friendlyRashis: ['Karka (कर्क)', 'Vrishchika (वृश्चिक)', 'Meena (मीन)', 'Vrishabha (वृषभ)'],
      friendlyNakshatras: ['Rohini', 'Pushya', 'Ashlesha', 'Anuradha', 'Revati'],
      doshaRemedies: [
        {
          doshaName: 'North-East (Ishana) Vastu Faults (ईशान कोण में भारी निर्माण, रसोई या सेप्टिक टैंक)',
          description: 'A heavily burdened North-East corner generates acute neurological distress, business failure, stagnation in progeny growth, and constant medical bills.',
          reliefMechanism: 'The Matsya Yantra cleanses the North-East etheric matrix, restoring the buoyant flow of celestial water and divine knowledge.'
        },
        {
          doshaName: 'Chandra Dosha & Water Imbalance (चन्द्र दोष, डिप्रेशन व जलीय रोग)',
          description: 'Severe mood swings, chronic mental gloom, insomnia, and water-borne ailments.',
          reliefMechanism: 'Soothes an afflicted Moon and clears geopathic dampness and stagnant stagnant subtle energies.'
        }
      ],
      lifeAspects: ['North-East Vastu Cleansing (ईशान कोण दोष निवारण)', 'Mental Peace & Emotional Equilibrium (मानसिक शान्ति व शीतलता)', 'Abundant Progeny & Wisdom (संतान सुख व मेधा)', 'Fluid Financial Inflow (निरन्तर धन प्रवाह)'],
      wearOrInstallDirection: 'North-East (ईशान कोण), North (उत्तर), or near Water Storage/Aquarium',
      favorableDay: 'Monday (सोमवार), Thursday (गुरुवार), or Poornima (पूर्णिमा)',
      auspiciousTithi: 'Shukla Paksha Pratipada, Trayodashi, or Poornima',
      metalPreference: 'Pure Silver (चांदी), Copper, or Consecrated Bronze',
      beejMantra: 'ॐ मत्स्याय नमः ॥ ॐ क्लीं मत्स्यरूपाय नमः ॥',
      gayatriMantra: 'ॐ महामत्स्याय विद्महे महाजलचराय धीमहि तन्नो मत्स्यः प्रचोदयात् ॥',
      japaCount: 108,
      malaType: 'Sphatik Mala (स्फटिक माला) or Pearl / Tulsi Mala',
      dhyanaSloka: 'कालिन्दीजलसंकाशं चतुर्बाहुं जनार्दनम्। शङ्खचक्रगदापद्मधारिणं मत्स्यरूपिणम्। वेदशास्त्रप्रवक्तारं नमामि करुणामयम्॥',
      pratishthaVidhiSummary: [
        'Anoint with pure raw milk, Gangajal, and white sandalwood paste.',
        'Place on silver or clean white silk facing North or East.',
        'Offer white fragrant flowers (चमेली/मोगरा), sugar candy (मिश्री), and clean drinking water.',
        'Chant the Matsya Mula Mantra 108 times and keep a clean water vessel or bowl near it.'
      ]
    },
    practicalRemedies: [
      {
        category: 'Vastu',
        problem: 'ईशान कोण (North-East) कट होना या वहां भारी निर्माण, सीढ़ियां या कचरा होने से वंश-वृद्धि व बुद्धि में बाधा।',
        remedyProtocol: 'ईशान कोण की दीवार पर मत्स्य यन्त्र स्थापित करें और नित्य स्फटिक माला से "ॐ मत्स्याय नमः" का जप करें।'
      },
      {
        category: 'Health',
        problem: 'घर में मानसिक तनाव, अनिद्रा और परिवार के सदस्यों का अवसाद (डिप्रेशन) में रहना।',
        remedyProtocol: 'उत्तर या ईशान दिशा में यन्त्र रखकर उसके पास तांबे के पात्र में जल रखें और नित्य प्रातः वह जल पौधों में डालें।'
      }
    ]
  }
`;

const newCanonicalEntries = `
  {
    id: 'vastu_dosha_nivarana_yantra',
    names: {
      sa: 'श्री वास्तुदोषनिवारण यन्त्रम्',
      iast: 'Vāstudōṣanivāraṇa Yantram',
      hi: 'वास्तु दोष निवारण यन्त्र',
      en: 'Vastu Dosha Nivarana Yantra (Cosmic Directional Harmonizer)',
      gu: 'વાસ્તુ દોષ નિવારણ યંત્ર'
    },
    deity: 'Lord Vastu Purusha and the 45 Celestial Mandala Devas',
    mantra: 'Om Vastoshpate Pratijanihyasman Svaavesho Anameevo Bhava Nah Swaha',
    geometrySpec: {
      primaryShape: '8-Petal Directional Lotus, 9-Pada Vastu Purusha Mandala Grid, Concentric Citadel & Brahma Sthana Bindu',
      layersCount: 5,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Neutralizing structural architectural flaws, directional imbalances, geopathic stress, and restoring universal harmony without demolition.',
    historicalPeriod: 'Puranic & Architectural / Vishvakarma Prakasha & Samarangana Sutradhara',
    scripturalCitation: {
      scripture: 'Vishvakarma Prakasha',
      verse: 'Chapter 1, Verses 3-5',
      sanskritText: 'वास्तोष्पते प्रतिजानीह्यस्मान् त्स्वावेशो अनमीवो भवा नः। यत् त्वेमहे प्रति तन्नो जुषस्व शं नो भव द्विपदे शं चतुष्पदे॥',
      translation: 'O Lord of Dwellings! Recognize and be gracious unto us. Grant us refuge devoid of ailments. Bestow blessings on our kin and cattle.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['dikpala_ashtadigbandhana_yantra', 'bhoomi_kurma_yantra', 'matsya_yantra', 'sri_yantra']
  },
  {
    id: 'dikpala_ashtadigbandhana_yantra',
    names: {
      sa: 'श्री दिक्पाल अष्टदिग्बन्धन यन्त्रम्',
      iast: 'Dikpāla Aṣṭadigbandhana Yantram',
      hi: 'दिक्पाल अष्टदिग्बन्धन यन्त्र',
      en: 'Dikpala Ashtadigbandhana Yantra (Shield of the 8 Directional Regents)',
      gu: 'દિક્પાલ અષ્ટદિગ્બંધન યંત્ર'
    },
    deity: 'The Eight Celestial Regents (Indra, Agni, Yama, Nirriti, Varuna, Vayu, Kubera, Ishana)',
    mantra: 'Om Indraya Namaha Om Agnaye Namaha ... Om Digbandhanaya Swaha',
    geometrySpec: {
      primaryShape: '8-Petal Regents Lotus, 8-Pointed Star (Octagram), 8 Radial Tridents & Central Protection Core',
      layersCount: 5,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Fortifying the perimeter of properties against negative external forces, road hits (Vithi Shula), cross-boundary curses, burglary, and envy.',
    historicalPeriod: 'Puranic & Tantric / Agni Purana & Narada Purana',
    scripturalCitation: {
      scripture: 'Agni Purana',
      verse: 'Chapter 51, Verses 1-4',
      sanskritText: 'पूर्वे चेन्द्रस्तथा वह्निर्दक्षिणे यम एव च। नैर्ऋत्यां निरृतिः पश्चाद्वरुणो मारुतो दिशि॥',
      translation: 'In the East resides Indra, in South-East Agni, South Yama, South-West Nirriti, West Varuna, North-West Vayu, North Kubera, North-East Ishana. Stationed thus, they protect the cosmos.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['vastu_dosha_nivarana_yantra', 'sudarshana_chakra_yantra', 'durga_bisa_yantra', 'pratyangira_yantra']
  },
  {
    id: 'bhoomi_kurma_yantra',
    names: {
      sa: 'श्री भूमिकूर्म यन्त्रम्',
      iast: 'Bhūmi Kūrma Yantram',
      hi: 'भूमि कूर्म यन्त्र',
      en: 'Bhoomi Kurma Yantra (Cosmic Foundation & Land Consecration Mandalam)',
      gu: 'ભૂમિ કૂર્મ યંત્ર'
    },
    deity: 'Lord Kurma (Cosmic Tortoise Avatar) and Goddess Bhoomi Devi',
    mantra: 'Om Hreem Koormaya Namaha / Om Dharanidharaya Namaha / Om Lam Prithivyai Namaha',
    geometrySpec: {
      primaryShape: '8-Petal Terrestrial Lotus, Hexagonal Kurma Carapace Shield, Prithvi Square & Golden Core Bindu',
      layersCount: 5,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Bhoomi Poojan rites, foundation stone laying, nullifying subsoil impurities (Shalya Dosha), resolving land litigation, and guaranteeing seismic & structural durability.',
    historicalPeriod: 'Agamic & Architectural / Mayamatam & Varahi Tantra',
    scripturalCitation: {
      scripture: 'Mayamatam',
      verse: 'Chapter 12, Verses 15-18',
      sanskritText: 'कूर्माकारेण संस्थाप्य धारिणीं धरणीं पराम्। यत्र कूर्मासनं सम्यक् तत्र वास्तोः सुखं भवेत्॥',
      translation: 'Establishing the supreme earth in the likeness of the cosmic tortoise, wherever the Kurma seat is consecrated, everlasting joy prevails in that dwelling.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['vastu_dosha_nivarana_yantra', 'matsya_yantra', 'brihaspati_yantra', 'shani_yantra']
  },
  {
    id: 'matsya_yantra',
    names: {
      sa: 'श्री मत्स्य यन्त्रम्',
      iast: 'Matsya Yantram',
      hi: 'मत्स्य यन्त्र',
      en: 'Matsya Yantra (Sacred Water-Element & North-East Vastu Cleanser)',
      gu: 'મત્સ્ય યંત્ર'
    },
    deity: 'Lord Matsya Avatar (Veda-Rescuing Golden Fish)',
    mantra: 'Om Matsyaya Namaha / Om Kleem Matsyaroopaya Namaha',
    geometrySpec: {
      primaryShape: '12-Petal Aquatic Lotus, Interlocking Twin Fish Spirals, Inner Sanctuary & Amrita Blue Bindu',
      layersCount: 5,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Rectifying heavy afflictions in the North-East (Ishana), purifying faulty water sources, alleviating mental depression, and promoting fluid wealth.',
    historicalPeriod: 'Puranic / Matsya Purana & Vishvakarma Vastu Shastra',
    scripturalCitation: {
      scripture: 'Matsya Purana',
      verse: 'Chapter 1, Verses 10-13',
      sanskritText: 'शृङ्गिणं काञ्चनं दिव्यं महामत्स्यस्वरूपिणम्। वेदानां रक्षणार्थाय नौकारूपधरो हरिः॥',
      translation: 'Radiant as gold with celestial horn, Lord Hari assumed the form of the Great Fish to rescue the Vedas. By His contemplation, all Vastu blemishes dissolve.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['vastu_dosha_nivarana_yantra', 'chandra_yantra', 'saraswati_yantra', 'bhoomi_kurma_yantra']
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
console.log('[SUCCESS] Appended 4 Vastu Yantras to shastric-jyotish-database.ts');

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
console.log('[SUCCESS] Appended 4 Vastu Yantras to canonical-library-dataset.ts');
