const fs = require('fs');
const path = require('path');

const shastricDbPath = path.join(__dirname, '..', 'src', 'lib', 'yantras', 'shastric-jyotish-database.ts');
const canonicalDbPath = path.join(__dirname, '..', 'src', 'lib', 'sgkb', 'canonical-library-dataset.ts');

const newShastricEntries = `
  vishnu_yantra: {
    id: 'vishnu_yantra',
    taxonomyCategory: 'vishnu_vaishnava',
    lineageAttribution: 'पाञ्चरात्र आगम (जयन्त-संहिता, पारमेश्वर-संहिता), श्रीमद्भागवत महापुराण एवं मन्त्रमहोदधि (विष्णुपटलम्)',
    nameSanskrit: 'श्रीविष्णु यन्त्रम् (श्रीनारायण यन्त्रम्)',
    nameHindi: 'श्री विष्णु यन्त्र (श्रीनारायण महायन्त्र)',
    nameEnglish: 'Sri Vishnu / Narayana Yantra (Cosmic Preserver & Sustainer Matrix)',
    subTitle: 'The Sovereign Cosmogram of Lord Maha Vishnu for Universal Harmony, Karmic Purification, and Dharmic Elevation',
    presidingDeity: 'भगवान् महाविष्णु (श्रीनारायण)',
    tradition: 'पाञ्चरात्र आगम एवं श्रीमद्भागवत परम्परा',
    corePhilosophy: 'विष्णु यन्त्र जगत् के पालनहार, सर्वव्यापक परात्पर ब्रह्म भगवान् महाविष्णु का ज्यामितीय स्वरूप है। "वेवेष्टि व्याप्नोति चराचरं जगत् इति विष्णुः" — जो समस्त चराचर सृष्टि में व्याप्त होकर उसका पोषण और संधारण करते हैं, वही विष्णु हैं। यह यन्त्र द्वादशाक्षर (ॐ नमो भगवते वासुदेवाय) एवं अष्टाक्षर (ॐ नमो नारायणाय) मन्त्रों की अमोघ ऊर्जा से स्पन्दित है। इसके दर्शन व नित्य आराधन से साधक के समस्त पाप, भय, दरिद्रता और ग्रह-दोष तिरोहित हो जाते हैं तथा धर्म, अर्थ, काम और मोक्ष की सहज प्राप्ति होती है।',
    citations: [
      {
        sourceScripture: 'श्रीमद्भागवत महापुराण (Srimad Bhagavatam)',
        chapterOrVerse: 'द्वादश स्कन्ध, अध्याय ११, श्लोक १९-२०',
        sanskritSloka: 'ध्यायेन्नारायणं देवं शङ्खचक्रगदाधरम्।\\nपीताम्बरधरं सौम्यं वनमालाविभूषितम्॥\\nकौस्तुभोद्भासितोरस्कं मकरकुण्डलमण्डितम्।\\nसर्वकामप्रदं देवं सर्वलोकैकनायकम्॥',
        hindiMeaning: 'शङ्ख, चक्र और गदा धारण करने वाले, पीताम्बरधारी, सौम्य स्वरूप, वनमाला से सुशोभित, वक्षःस्थल पर कौस्तुभ मणि की कान्ति से दीप्त, मकराकृत कुण्डलों से मण्डित, समस्त कामनाओं को पूर्ण करने वाले और सम्पूर्ण लोकों के एकमात्र नायक भगवान् श्रीनारायण का ध्यान करना चाहिए।',
        englishMeaning: 'One should meditate upon Lord Narayana, who holds the conch, discus, and mace, draped in radiant yellow silk, serene and adorned with the garland of forest flowers, whose chest is illumined by the Kaustubha gem, graced with crocodile-shaped earrings, the lone sovereign of all the realms who fulfills all noble desires.'
      },
      {
        sourceScripture: 'मन्त्रमहोदधि (Mantra Mahodadhi)',
        chapterOrVerse: 'चतुर्दश तरङ्ग, श्लोक १-३',
        sanskritSloka: 'अथातः संप्रवक्ष्यामि विष्णोर्यन्त्रमनुत्तमम्।\\nद्वादशारं तथाष्टाब्जं षट्कोणं बिन्दुसंयुतम्॥\\nयस्य संस्मरणादेव नरो नारायणो भवेत्॥',
        hindiMeaning: 'अब मैं भगवान् विष्णु के सर्वोत्तम यन्त्र का वर्णन करता हूँ, जो द्वादश दलों, अष्टदल पद्म, षट्कोण और परम पावन बिन्दु से युक्त है। जिसके स्मरण मात्र से मानव नारायण स्वरूप हो जाता है।',
        englishMeaning: 'Now I proclaim the supreme Yantra of Lord Vishnu, adorned with twelve petals, an eight-petal lotus, the sacred hexagram, and the supreme Bindu, by contemplation of which mortal man attains communion with Narayana.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'त्रैलोक्यमोहन भूपुर प्राकार',
        nameEnglish: 'Citadel of Universal Stability & Portals of Refuge',
        chakraTitle: 'भूपुर एवं चार वैकुण्ठ द्वार',
        presidingDeity: 'चतुर्द्वार रक्षक (जय, विजय, चण्ड, प्रचण्ड)',
        mudraShakti: 'शङ्ख मुद्रा (Panchajanya Divine Resonance)',
        yoginiClass: 'वैकुण्ठ द्वारपालिका',
        geometryType: '3 Concentric Stepped Walls with 4 Guarded Portals',
        significance: 'समस्त तामसिक विकारों, दुःस्वप्नों, प्रेत-बाधाओं और कलह से साधक के निवास की अभेद्य सुरक्षा।'
      },
      {
        index: 2,
        nameSanskrit: 'द्वादशदल वासुदेव पद्म',
        nameEnglish: '12-Petal Lotus of the 12 Adityas & Vasudeva Syllables',
        chakraTitle: 'द्वादशाक्षर मण्डल (ॐ नमो भगवते वासुदेवाय)',
        presidingDeity: 'द्वादश व्यूह विष्णु (केशव, नारायण, माधव, गोविन्द, विष्णु, मधुसूदन, त्रिविक्रम, वामन, श्रीधर, हृषीकेश, पद्मनाभ, दामोदर)',
        mudraShakti: 'गदा मुद्रा (Kaumodaki Mace of Sovereignty)',
        yoginiClass: 'द्वादशादित्य शक्ति',
        geometryType: '12 Symmetrical Ogee Petals with Dvadasakshara Inscriptions',
        significance: 'वर्ष के बारह मासों और सूर्य की द्वादश संक्रान्तियों से उत्पन्न काल-दोषों का शमन एवं आयु-वृद्धि।'
      },
      {
        index: 3,
        nameSanskrit: 'अष्टदल नारायण पद्म',
        nameEnglish: '8-Petal Lotus of Ashtakshara Narayana Radiance',
        chakraTitle: 'अष्टाक्षर मण्डल (ॐ नमो नारायणाय)',
        presidingDeity: 'अष्टमूर्ति नारायण एवं अष्टलक्ष्मी',
        mudraShakti: 'पद्म मुद्रा (Padma of Purity & Abundance)',
        yoginiClass: 'अष्टवैष्णवी कला',
        geometryType: '8 Symmetrical Ogee Petals with Ashtakshara Syllables',
        significance: 'आठों प्रकृतियों का शोधन तथा धर्म, विद्या, आरोग्य, संतान, और अखंड सौभाग्य की प्राप्ति।'
      },
      {
        index: 4,
        nameSanskrit: 'वैष्णव षट्कोण व सुदर्शन चक्र',
        nameEnglish: 'Hexagram of Cosmic Harmony & Sudarshana Solar Disc',
        chakraTitle: 'षट्कोण एवं अष्टार चक्र मण्डल',
        presidingDeity: 'भगवान् सुदर्शन एवं अनन्त शेषनाग',
        mudraShakti: 'चक्र मुद्रा (Sudarshana Invincible Wheel)',
        yoginiClass: 'महाज्वाला शक्ति',
        geometryType: 'Interlocking Hexagram with 8 Radiating Sudarshana Spokes',
        significance: 'शत्रुओं के षड्यन्त्र, कुदृष्टि, और तांत्रिक अभिचार का सुदर्शन चक्र द्वारा तात्कालिक संहार।'
      },
      {
        index: 5,
        nameSanskrit: 'परमानन्द नारायण महाबिन्दु',
        nameEnglish: 'Vaikuntha Paramatma Singularity',
        chakraTitle: 'परम वैकुण्ठ महाबिन्दु',
        presidingDeity: 'परब्रह्म वासुदेव एवं महालक्ष्मी',
        mudraShakti: 'अभय-वरद मुद्रा',
        yoginiClass: 'परा संवित् शक्ति',
        geometryType: 'Golden Radiant Bindu with ॐ विष्णवे नमः Core',
        significance: 'जन्म-मरण के बन्धन से मुक्ति, मोक्ष-पद की प्राप्ति तथा परमात्मा में अखण्ड एकात्मता।'
      }
    ],
    jyotish: {
      rulingPlanet: 'Jupiter & Mercury (बृहस्पति - धर्म व सन्तान कारक, एवं बुध - वाक् व बुद्धि कारक)',
      planetSanskrit: 'बृहस्पति (गुरु) एवं बुध (विष्णु-प्रिय)',
      friendlyRashis: ['Dhanu (धनु)', 'Meena (मीन)', 'Mithuna (मिथुन)', 'Kanya (कन्या)'],
      friendlyNakshatras: ['Punarvasu', 'Vishakha', 'Purva Bhadrapada', 'Shravana', 'Rohini'],
      doshaRemedies: [
        {
          doshaName: 'Guru-Chandal Dosha & Weak Jupiter (गुरु-चाण्डाल दोष व निर्बल बृहस्पति)',
          description: 'Obstacles in higher education, delay in marriage, failure in spiritual practice, and lack of divine guidance.',
          reliefMechanism: 'The Vishnu Yantra energizes the sattvic frequencies of Jupiter, nullifying Rahu affliction and restoring dharmic clarity.'
        },
        {
          doshaName: 'Pitra Dosha & Ancestral Karmic Blocks (पितृ दोष व वंश वृद्धि में बाधा)',
          description: 'Recurrent illnesses, disputes among family members, and stagnation in family lineage.',
          reliefMechanism: 'Invokes Bhagavan Narayana as the ultimate redeemer of ancestors (Pitra-Taran), clearing generational spiritual debt.'
        }
      ],
      lifeAspects: [
        'Cosmic Order & Peace (ब्रह्माण्डीय सन्तुलन व शान्ति)',
        'Dharmic Wealth & Prosperity (धर्मसम्मत धन व समृद्धि)',
        'Family Harmony & Lineage Growth (पारिवारिक सौहार्द व वंश रक्षा)',
        'Spiritual Liberation & Moksha (परम मोक्ष व वैकुण्ठ प्राप्ति)'
      ],
      wearOrInstallDirection: 'East (पूर्व) or North-East (ईशान कोण / पूजा स्थल)',
      favorableDay: 'Thursday (गुरुवार), Ekadashi (एकादशी), or Purnima (पूर्णिमा)',
      auspiciousTithi: 'Shukla Paksha Ekadashi (निर्जला, देवशयनी, देवप्रबोधिनी)',
      metalPreference: 'Pure Gold (स्वर्ण), Pure Copper (तांबा), or Consecrated Bronze (कांस्य)',
      beejMantra: 'ॐ नमो भगवते वासुदेवाय ॥ ॐ नमो नारायणाय ॥',
      gayatriMantra: 'ॐ नारायणाय विद्महे वासुदेवाय धीमहि तन्नो विष्णुः प्रचोदयात् ॥',
      japaCount: 108,
      malaType: 'Tulsi Mala (तुलसी माला) or Sphatik Mala',
      dhyanaSloka: 'शान्ताकारं भुजगशयनं पद्मनाभं सुरेशं विश्वाधारं गगनसदृशं मेघवर्णं शुभाङ्गम्। लक्ष्मीकान्तं कमलनयनं योगिभिर्ध्यानगम्यं वन्दे विष्णुं भवभयहरं सर्वलोकैकनाथम्॥',
      pratishthaVidhiSummary: [
        'Purify with Panchamrita (raw milk, curd, honey, ghee, sugar) and sacred Gangajal.',
        'Place on clean yellow silk cloth facing East or North-East.',
        'Offer yellow fragrant flowers (गेंदा/पीत कनेर), Tulsi leaves, and yellow sandalwood paste.',
        'Offer roasted gram and jaggery (चना-गुड़) or yellow sweet rice as naivedya.',
        'Chant the Vishnu Dvadasakshara Mantra 108 times with Tulsi Mala.'
      ]
    },
    practicalRemedies: [
      {
        category: 'Spiritual',
        problem: 'घर में अशांति, मानसिक क्लेश, आर्थिक अनिश्चितता और परिवार के सदस्यों में सामंजस्य की कमी।',
        remedyProtocol: 'ईशान कोण में विष्णु यन्त्र स्थापित कर नित्य तुलसी दल अर्पित करें और "ॐ नमो भगवते वासुदेवाय" का १ माला जप करें।'
      },
      {
        category: 'Astrology',
        problem: 'कुण्डली में बृहस्पति (गुरु) का नीच या अस्त होना, गुरु-चाण्डाल दोष, अथवा पितृ दोष के कारण कार्यों में असफलता।',
        remedyProtocol: 'गुरुवार के दिन यन्त्र पर पीले चन्दन का तिलक लगाएं, पीली मिठाई का भोग लगाएं और विष्णु सहस्त्रनाम का पाठ करें।'
      }
    ]
  },

  narasimha_yantra: {
    id: 'narasimha_yantra',
    taxonomyCategory: 'avatar_yantras',
    lineageAttribution: 'नृसिंह पूर्वतापनीयोपनिषद्, पद्म पुराण (नृसिंह कवचम् - प्रह्लाद प्रोक्तम्), मन्त्रमहोदधि एवं शारदातिलकम्',
    nameSanskrit: 'श्रीनृसिंह कवच यन्त्रम्',
    nameHindi: 'श्रीनृसिंह यन्त्र (नृसिंह कवच यन्त्र)',
    nameEnglish: 'Sri Narasimha Kavacha Yantra (Fierce Invincible Protector Matrix)',
    subTitle: 'The Supreme Wrathful Lion-Man Cosmogram for Instant Obliteration of Enemies, Black Magic, and Existential Peril',
    presidingDeity: 'भगवान् नृसिंह (उग्र नृसिंह एवं लक्ष्मीनृसिंह)',
    tradition: 'नृसिंह तापनीयोपनिषद् एवं पद्म पुराण परम्परा',
    corePhilosophy: 'भगवान् नृसिंह भगवान् विष्णु के सर्वाधिक उग्र, शक्तिमान् एवं त्वरित फलदायक अवतार हैं। खम्भ को फाड़कर भक्त प्रह्लाद की रक्षा करने वाले नृसिंह देव असम्भव को सम्भव करने वाले परात्पर सत्य हैं। नृसिंह यन्त्र समस्त घोर भयों, भूत-प्रेत-पिशाच बाधा, शत्रुकृत मारण-मोहन-उच्चाटन-अभिचार तन्त्र, अकाल मृत्यु, और असाध्य रोगों का तत्काल शमन करता है। इसका षोडश-ज्वाला मण्डल और अष्टदल मन्त्र-पद्म साधक के चारों ओर अभेद्य दिव्य रक्षा-कवच का निर्माण करते हैं, जिसके भीतर कोई भी नकारात्मक शक्ति प्रवेश नहीं कर सकती।',
    citations: [
      {
        sourceScripture: 'नृसिंह पूर्वतापनीयोपनिषद् (Nrisimha Tapaniya Upanishad)',
        chapterOrVerse: 'प्रथम खण्ड, श्लोक ८',
        sanskritSloka: 'उग्रं वीरं महाविष्णुं ज्वलन्तं सर्वतोमुखम्।\\nनृसिंहं भीषणं भद्रं मृत्युर्मृत्युं नमाम्यहम्॥',
        hindiMeaning: 'जो परम उग्र हैं, परम वीर हैं, सर्वव्यापक महाविष्णु हैं, प्रज्वलित अग्नि के समान देदीप्यमान हैं, सब ओर मुख वाले हैं, सिंह-नर रूपी नृसिंह हैं, दुष्टों के लिए भीषण किन्तु भक्तों के लिए परम कल्याणकारी (भद्र) हैं, तथा मृत्यु की भी मृत्यु (काल के भी महाकाल) हैं — उन भगवान् नृसिंह को मैं नमन करता हूँ।',
        englishMeaning: 'I bow down before the supreme Lord Narasimha, who is terrifyingly fierce, heroic, the great all-pervading Vishnu, blazing with cosmic fire, omnidirectional, fearsome to evil yet all-auspicious to the surrendered, the very Death unto death itself.'
      },
      {
        sourceScripture: 'पद्म पुराण (Padma Purana - Narasimha Kavacham)',
        chapterOrVerse: 'प्रह्लाद प्रोक्त नृसिंह कवचम्, श्लोक १-२',
        sanskritSloka: 'नृसिंहकवचं वक्ष्ये प्रह्लादेनोदितं पुरा।\\nसर्वरक्षाकरं पुण्यं सर्वोपद्रवनाशनम्॥\\nसर्वसंपत्करं चैव स्वर्गमोक्षप्रदायकम्॥',
        hindiMeaning: 'पूर्वकाल में भक्त प्रह्लाद द्वारा कहे गए नृसिंह कवच का मैं वर्णन करता हूँ। यह कवच सबकी रक्षा करने वाला, परम पवित्र, समस्त उपद्रवों और संकटों का नाश करने वाला, समस्त सम्पत्तियों को देने वाला तथा स्वर्ग व मोक्ष का प्रदाता है।',
        englishMeaning: 'I shall proclaim the Narasimha Kavacham uttered in ancient times by Prahlada. It bestows all-encompassing protection, is supremely sacred, eradicates all tribulations, confers every fortune, and bestows both heaven and final liberation.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'वज्र भूपुर प्राकार',
        nameEnglish: 'Adamantine Rampart of Invulnerable Defense',
        chakraTitle: 'भूपुर एवं चार अजेय द्वार',
        presidingDeity: 'अष्टदिक्पाल एवं वज्र द्वारपाल',
        mudraShakti: 'वज्र-नख मुद्रा (Diamond Claws of Immunity)',
        yoginiClass: 'वज्र डाकिनी शक्ति',
        geometryType: '3 Heavily Fortified Bronze Concentric Walls with Guarded Gates',
        significance: 'साधक के चारों ओर अभेद्य आध्यात्मिक दुर्ग स्थापित कर तांत्रिक आक्रमणों व दृष्टि दोषों को परावर्तित करना।'
      },
      {
        index: 2,
        nameSanskrit: 'षोडश ज्वाला मण्डल',
        nameEnglish: '16 Cosmic Fire Prongs of Demonic Annihilation',
        chakraTitle: 'षोडश रौद्र अग्निशिखा चक्र',
        presidingDeity: 'षोडश संहारक भैरव एवं ज्वाला नृसिंह शक्तियाँ',
        mudraShakti: 'अग्निज्वाला मुद्रा',
        yoginiClass: 'ज्वाला मालिनी शक्ति',
        geometryType: '16 Blazing Fire Spikes Radiating Solar Flame Energy',
        significance: 'शत्रुकृत तंत्र-मंत्र, अभिचार कर्म, ईर्ष्या और शत्रु के अहंकार का तत्काल दहन करना।'
      },
      {
        index: 3,
        nameSanskrit: 'अष्टदल नृसिंह पद्म',
        nameEnglish: '8-Petal Lotus of the Anushtup Maha Mantra',
        chakraTitle: 'अष्टदल अनुष्टुप् चक्र (उग्रं, वीरं, महाविष्णुं...)',
        presidingDeity: 'अष्ट नृसिंह (उग्र, वीर, महा, ज्वलत्, सर्वतोमुख, नृसिंह, भीषण, भद्र)',
        mudraShakti: 'दंष्ट्रा मुद्रा (Sharp Fangs of Transcendental Might)',
        yoginiClass: 'अष्टनारसिंही शक्ति',
        geometryType: '8 Symmetrical Ogee Petals with Anushtup Mantra Syllables',
        significance: 'आठों दिशाओं से आने वाले अकाल भय, सर्पदंश, दुर्घटना और महामारी से अचूक सुरक्षा।'
      },
      {
        index: 4,
        nameSanskrit: 'उग्र नृसिंह षट्कोण',
        nameEnglish: 'Hexagram of Lion-Claws & Demonic Subjugation',
        chakraTitle: 'उग्र षट्कोण मण्डल (मृत्युर्मृत्युं नमाम्यहम्)',
        presidingDeity: 'भगवान् हिरण्यकशिपु-विदारक नृसिंह',
        mudraShakti: 'विदारण मुद्रा (Tearing through All Illusions)',
        yoginiClass: 'अतिभीषण शक्ति',
        geometryType: 'Interlocking Fiery Hexagram with Inverted Triangle',
        significance: 'हिरण्यकशिपु के समान अजेय प्रतीत होने वाले जीवन के भीषण संकटों और कोर्ट-कचहरी के विवादों का निवारण।'
      },
      {
        index: 5,
        nameSanskrit: 'क्ष्रौं नृसिंह महाबिन्दु',
        nameEnglish: 'Fiery Ruby Singularity of Instant Grace',
        chakraTitle: 'परम उग्र-शान्त महाबिन्दु',
        presidingDeity: 'दिव्य श्री लक्ष्मीनृसिंह (अभय प्रदायक)',
        mudraShakti: 'अभय मुद्रा (Absolute Fearlessness)',
        yoginiClass: 'परा नारसिंही संवित् शक्ति',
        geometryType: 'Blood-Ruby & Gold Radiant Core with Central Seed क्ष्रौं',
        significance: 'भक्त की पुकार पर तत्काल साक्षात्कार, परम अभय, आत्मबल और मोक्ष का साक्षात्कार।'
      }
    ],
    jyotish: {
      rulingPlanet: 'Mars & Ketu / Sun (मङ्गल - साहस व विजय, केतु - गूढ़ व मोक्ष, एवं सूर्य - पराक्रम)',
      planetSanskrit: 'मङ्गल (भौम / अङ्गारक) एवं केतु (ध्वज / मोक्ष कारक)',
      friendlyRashis: ['Mesha (मेष)', 'Vrishchika (वृश्चिक)', 'Simha (सिंह)', 'Dhanu (धनु)'],
      friendlyNakshatras: ['Ardra', 'Magha', 'Moola', 'Chitra', 'Swati'],
      doshaRemedies: [
        {
          doshaName: 'Severe Mangal Dosha & Kuja Affliction (घोर मङ्गल दोष व अङ्गारक योग)',
          description: 'Violent anger, matrimonial discord, blood disorders, accidents, and sudden severe litigation.',
          reliefMechanism: 'Narasimha is the supreme ruler of Mars energy; His yantra transmutes destructive aggression into invincible spiritual courage.'
        },
        {
          doshaName: 'Rahu-Ketu Calamities & Paranormal Distress (राहु-केतु पीड़ा, प्रेत-बाधा व कालसर्प दोष)',
          description: 'Nightmares, unexplained psychological paralysis, fear of darkness, and black magic attacks.',
          reliefMechanism: 'The flaming 16-flame perimeter incinerates all etheric poltergeists, malefic astral entities, and toxic psychic cords.'
        }
      ],
      lifeAspects: [
        'Total Fearlessness & Abhaya (सर्वभय मुक्ति व अभय वरदान)',
        'Defeat of Hidden Enemies (शत्रु पराजय व षड्यन्त्र नाश)',
        'Relief from Chronic Diseases & Poisons (असाध्य रोग व विष बाधा से मुक्ति)',
        'Instant Crisis Resolution (आकस्मिक महाविपत्ति से त्वरित उद्धार)'
      ],
      wearOrInstallDirection: 'South (दक्षिण - यम दिशा रक्षण) or West (पश्चिम / प्रवेश द्वार)',
      favorableDay: 'Tuesday (मंगलवार), Saturday (शनिवार), or Narasimha Jayanti (वैशाख शुक्ल चतुर्दशी)',
      auspiciousTithi: 'Shukla Paksha Chaturdashi, Swati Nakshatra',
      metalPreference: 'Pure Copper (तांबा), Panchadhatu (पंचधातु), or Consecrated Bronze',
      beejMantra: 'ॐ क्ष्रौं नमो भगवते नरसिंहाय ॥ ॐ उग्रं वीरं महाविष्णुं ज्वलन्तं सर्वतोमुखम्। नृसिंहं भीषणं भद्रं मृत्युर्मृत्युं नमाम्यहम् ॥',
      gayatriMantra: 'ॐ वज्रनखाय विद्महे तीक्ष्णदंष्ट्राय धीमहि तन्नो नारसिंहः प्रचोदयात् ॥',
      japaCount: 108,
      malaType: 'Raktachandan Mala (लाल चन्दन माला) or Rudraksha Mala',
      dhyanaSloka: 'सत्यज्ञानसुखस्वरूपममलं क्षीराब्धिमध्यस्थितं योगारूढमतिप्रसन्नवदनं भूषासहस्रोज्ज्वलम्। त्र्यक्षं चक्रपिनाकसाभयवरान् बिभ्राणमर्कच्छविं छत्रीभूतफणीन्द्रमिन्दुधवलं लक्ष्मीनृसिंहं भजे॥',
      pratishthaVidhiSummary: [
        'Purify with Panchamrita, camphor water, and Gangajal on a Tuesday evening or Pradosha time.',
        'Place on red silk cloth facing South or East.',
        'Offer red flowers (गुड़हल/लाल कनेर), red sandalwood paste, and ghee lamp.',
        'Offer jaggery water (पानकम् / गुड़ का शर्बत) and pomegranate (अनार) as naivedya.',
        'Chant the Narasimha Anushtup Mantra 108 times with Red Sandalwood Mala.'
      ]
    },
    practicalRemedies: [
      {
        category: 'Protection',
        problem: 'व्यापार अथवा व्यक्तिगत जीवन में ईर्ष्यालु शत्रुओं, कोर्ट-कचहरी, या तांत्रिक बाधाओं से निरन्तर भय।',
        remedyProtocol: 'घर के मुख्य द्वार या दक्षिण दिशा में नृसिंह यन्त्र स्थापित करें और नित्य सांयकाल सरसों के तेल का दीपक जलाकर "ॐ क्ष्रौं" बीज का जप करें।'
      },
      {
        category: 'Health',
        problem: 'असाध्य रक्त-विकार, उच्च रक्तचाप, बार-बार दुःस्वप्न आना, या भय के कारण अनिद्रा।',
        remedyProtocol: 'यन्त्र के सम्मुख तांबे के लोटे में जल रखकर १०८ बार नृसिंह गायत्री का जप करें और वह जल रोगी को पिलाएं।'
      }
    ]
  },

  varaha_yantra: {
    id: 'varaha_yantra',
    taxonomyCategory: 'avatar_yantras',
    lineageAttribution: 'वराह पुराण, अग्नि पुराण, श्रीमद्भागवत महापुराण (तृतीय स्कन्ध) एवं मन्त्रमहोदधि',
    nameSanskrit: 'श्रीभूवराह यन्त्रम् (यज्ञवराह यन्त्रम्)',
    nameHindi: 'श्री वराह यन्त्र (भू-वराह महायन्त्र)',
    nameEnglish: 'Sri Varaha Yantra (Cosmic Earth Rescuer & Property Matrix)',
    subTitle: 'The Terrestrial Anchor Cosmogram of Lord Yagya Varaha for Land Ownership, Vastu Stability, and Material Grounding',
    presidingDeity: 'भगवान् यज्ञवराह एवं भूदेवी',
    tradition: 'वराह पुराण एवं पाञ्चरात्र आगम परम्परा',
    corePhilosophy: 'भगवान् वराह भगवान् श्रीहरि के तृतीय अवतार हैं, जिन्होंने प्रलय के अगाध जल में डूबी हुई माता पृथ्वी (भूदेवी) को हिरण्याक्ष का वध कर अपने दिव्य दंष्ट्रों (दांतों) पर उठाकर रसातल से बाहर निकाला। वराह यन्त्र भूमि, भवन, अचल सम्पत्ति, कृषि, और खनन से जुड़े कार्यों में पूर्ण सफलता प्रदान करता है। यह पृथ्वी तत्व को स्थिर कर भूमिगत नकारात्मक शक्तियों (शल्य दोष, भू-दोष) का पूर्ण निवारण करता है तथा जीवन में खोई हुई प्रतिष्ठा, धन और पद को पुनर्स्थापित करता है।',
    citations: [
      {
        sourceScripture: 'श्रीमद्भागवत महापुराण (Srimad Bhagavatam)',
        chapterOrVerse: 'तृतीय स्कन्ध, अध्याय १३, श्लोक ३३',
        sanskritSloka: 'जलौघमग्नां सचराचरां महीं विषाणकोट्या सहसोदधार।\\nविराजते तेन वपुर्महाप्रभो यथा गजेन्द्रः सरसीरुहं करे॥',
        hindiMeaning: 'प्रलयकालीन अगाध जलराशि में डूबी हुई चराचर जीवों से युक्त पृथ्वी को महाप्रभु भगवान् वराह ने अपनी तीक्ष्ण दाढ़ के अग्रभाग पर अनायास ही उठा लिया। उस समय उनका दिव्य शरीर ऐसा शोभायमान हो रहा था, जैसे सरोवर से निकले हुए गजराज की सूंड में कमल सुशोभित हो।',
        englishMeaning: 'Plunged into the cosmic deluge along with all moving and unmoving beings, the earth was effortlessly hoisted upon the sharp tip of His divine tusk by the supreme Lord Varaha. His majestic form shone resplendent like a royal tusker emerging from a lake holding a lotus in its trunk.'
      },
      {
        sourceScripture: 'वराह पुराण (Varaha Purana)',
        chapterOrVerse: 'भूवराह स्तोत्रम्, श्लोक १-२',
        sanskritSloka: 'नमस्ते देवदेवेश शङ्खचक्रगदाधर।\\nभूधरोद्धारकरुणापूर्णाय परमात्मने॥\\nयज्ञरूपाय शूराय वराहाय नमो नमः॥',
        hindiMeaning: 'हे देवदेवेश्वर! शङ्ख, चक्र और गदा धारण करने वाले, करुणापूर्वक पृथ्वी का उद्धार करने वाले परमात्मा, यज्ञ स्वरूप, परम शूरवीर भगवान् वराह को बारम्बार नमस्कार है।',
        englishMeaning: 'Salutations unto Thee, O Lord of lords, wielder of conch, discus, and mace, whose heart is filled with boundless compassion in lifting the Earth, embodiment of Yagya, the heroic Varaha, salutations again and again.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'वसुन्धरा भूपुर प्राकार',
        nameEnglish: 'Citadel of Earth Foundation & Territorial Sanctity',
        chakraTitle: 'भूपुर एवं चार आधार द्वार',
        presidingDeity: 'अष्टदिक्पाल एवं दिक्-नाग',
        mudraShakti: 'भूमि मुद्रा (Prithvi Tattva Anchor)',
        yoginiClass: 'भूमातृका शक्ति',
        geometryType: '3 Stepped Concentric Walls with 4 Portals & 8 Earth Anchors',
        significance: 'भूमि पर किए जाने वाले निर्माण को प्राकृतिक आपदाओं, भूकम्प और भूमिगत शल्य दोषों से सुरक्षा।'
      },
      {
        index: 2,
        nameSanskrit: 'द्वादशदल भू-उद्धार पद्म',
        nameEnglish: '12-Petal Lotus of Cosmic Restoration',
        chakraTitle: 'द्वादश दल वराह मन्त्र मण्डल (ॐ नमो भगवते वराहाय स्वाहा)',
        presidingDeity: 'द्वादश वराह शक्तियाँ',
        mudraShakti: 'शङ्ख मुद्रा',
        yoginiClass: 'धरणी शक्ति',
        geometryType: '12 Symmetrical Ogee Petals with Varaha Mantra Syllables',
        significance: 'भूमि या भवन के विवादों, मुकदमों, और अचल सम्पत्ति की बिक्री में आने वाली रुकावटों का निवारण।'
      },
      {
        index: 3,
        nameSanskrit: 'अष्टदल दिक्-स्थिरीकरण पद्म',
        nameEnglish: '8-Petal Lotus of Directional Equilibrium',
        chakraTitle: 'अष्टदल पृथ्वी बीज मण्डल (लं धरां भूः स्थिरा...)',
        presidingDeity: 'अष्ट वसु एवं अष्ट दिक्-गज',
        mudraShakti: 'गदा मुद्रा',
        yoginiClass: 'स्थिरा शक्ति',
        geometryType: '8 Symmetrical Ogee Petals with Prithvi Beejaksharas',
        significance: 'आठों दिशाओं में भूमि की ऊर्जा को सन्तुलित कर भवन में स्थायी समृद्धि और वंश-वृद्धि का वरदान।'
      },
      {
        index: 4,
        nameSanskrit: 'यज्ञवराह चक्र एवं पाञ्चजन्य मण्डल',
        nameEnglish: 'Sacred Boar Matrix & Divine Tusk Axis',
        chakraTitle: 'चतुष्कोण अष्टकोण एवं दंष्ट्रा चक्र',
        presidingDeity: 'भगवान् यज्ञवराह (हिरण्याक्ष-नाशन)',
        mudraShakti: 'दंष्ट्रा मुद्रा (Divine Tusk Lifting Armor)',
        yoginiClass: 'वराह-प्रिया शक्ति',
        geometryType: 'Overlapping Prithvi Squares (Octagram) with 8 Curved Boar Tusks',
        significance: 'डूबे हुए धन, खोए हुए व्यापार, और गिरवी रखी सम्पत्ति को पुनः प्राप्त कराने वाली अमोघ शक्ति।'
      },
      {
        index: 5,
        nameSanskrit: 'भू-वराह महाबिन्दु',
        nameEnglish: 'Central Terrestrial Singularity of Cosmic Rescue',
        chakraTitle: 'परम भू-वराह महाबिन्दु',
        presidingDeity: 'भगवान् वराह एवं माता भूदेवी (अलिंगित स्वरूप)',
        mudraShakti: 'वरद मुद्रा',
        yoginiClass: 'परा वैष्णवी भू-शक्ति',
        geometryType: 'Golden Emerald Radiant Core with Seed ॐ वराहाय ह्रीं भूं',
        significance: 'साधक को अचल सम्पत्ति का स्वामी बनाना तथा जीवन में अडिग आत्मबल और स्थिरता प्रदान करना।'
      }
    ],
    jyotish: {
      rulingPlanet: 'Mars & Saturn / Prithvi Tattva (भूमिपुत्र मङ्गल - भूमि कारक, एवं शनि - अचल सम्पत्ति व निर्माण कारक)',
      planetSanskrit: 'मङ्गल (भौम) एवं शनि (मन्द / स्थिर कारक)',
      friendlyRashis: ['Vrishabha (वृषभ)', 'Kanya (कन्या)', 'Makara (मकर)', 'Mesha (मेष)', 'Vrishchika (वृश्चिक)'],
      friendlyNakshatras: ['Mrigashira', 'Dhanishta', 'Uttara Ashadha', 'Rohini', 'Chitra'],
      doshaRemedies: [
        {
          doshaName: 'Bhoomi & Vastu Shalya Dosha (भूमि दोष, शल्य दोष व अचल सम्पत्ति विवाद)',
          description: 'Constructing on land afflicted by past burials, bones, negative astral imprints, or heavy legal disputes.',
          reliefMechanism: 'Varaha Yantra purifies the subterranean energetic grid, neutralizing all buried negative vibrations (Shalya).'
        },
        {
          doshaName: 'Severe Debt & Lost Property (ऋण भार व पैतृक सम्पत्ति का छिन जाना)',
          description: 'Acute financial insolvency where ancestral lands or properties are caught in litigation or mortgage.',
          reliefMechanism: 'Invokes the divine boar who salvaged the Earth from the cosmic depths, lifting the devotee out of financial collapse.'
        }
      ],
      lifeAspects: [
        'Land & Property Acquisition (भूमि-भवन व अचल सम्पत्ति लाभ)',
        'Resolution of Property Litigation (सम्पत्ति वसीयत व कोर्ट विवादों का हल)',
        'Vastu Grounding & Subterranean Cleansing (भूमि ऊर्जा शुद्धि व स्थिरीकरण)',
        'Restoration of Lost Status & Wealth (खोई हुई प्रतिष्ठा व धन की पुनर्प्राप्ति)'
      ],
      wearOrInstallDirection: 'South-West (नैर्ऋत्य कोण - स्थिरता) or North (उत्तर / पूजा कक्ष)',
      favorableDay: 'Tuesday (मंगलवार), Saturday (शनिवार), or Varaha Dwadashi (माघ शुक्ल द्वादशी)',
      auspiciousTithi: 'Shukla Paksha Dwadashi or Trayodashi',
      metalPreference: 'Pure Copper (तांबा), Lead/Panchadhatu, or Consecrated Bronze',
      beejMantra: 'ॐ नमः श्रीवराहाय धरणीधराय स्वाहा ॥ ॐ ह्रीं भूं वराहाय नमः ॥',
      gayatriMantra: 'ॐ भूवराहाय विद्महे हिरण्याङ्गाय धीमहि तन्नो वराहः प्रचोदयात् ॥',
      japaCount: 108,
      malaType: 'Tulsi Mala (तुलसी माला) or Haldi Mala (हल्दी माला)',
      dhyanaSloka: 'प्रालेयहाराभतनुं वराहं चतुर्भुजं शङ्खगदारिचक्रम्। दधत्करैर्दन्तपुटे धरित्रीं नमामि देवेशमनन्तवीर्यम्॥',
      pratishthaVidhiSummary: [
        'Anoint with pure Gangajal, earth from a sacred river bank or Tulsi root, and sandalwood paste.',
        'Place on clean yellow or green silk cloth facing South-West or North.',
        'Offer Durva grass, yellow flowers, and betel leaves with areca nut.',
        'Offer sweet rice (खीर) or jaggery and coconut as naivedya.',
        'Chant the Varaha Mula Mantra 108 times with Tulsi or Sandalwood Mala.'
      ]
    },
    practicalRemedies: [
      {
        category: 'RealEstate',
        problem: 'मकान या प्लॉट की बिक्री न हो पाना, अथवा जमीन की खरीद-फरोख्त में बार-बार कानूनी या आर्थिक अड़चनें आना।',
        remedyProtocol: 'भू-वराह यन्त्र को नैर्ऋत्य (South-West) कोण में स्थापित करें और मंगलवार को यन्त्र के समक्ष गुड़-चने का भोग लगाकर "ॐ नमः श्रीवराहाय" का जप करें।'
      },
      {
        category: 'Vastu',
        problem: 'घर में अशांति, भूमि में भारीपन महसूस होना, अथवा निर्माण के बाद लगातार आर्थिक नुकसान होना।',
        remedyProtocol: 'भवन के केंद्र (ब्रह्मस्थान) या ईशान कोण में भूमि के नीचे या पूजा वेदी पर वराह यन्त्र प्रतिष्ठित करें।'
      }
    ]
  },

  rama_yantra: {
    id: 'rama_yantra',
    taxonomyCategory: 'avatar_yantras',
    lineageAttribution: 'रामरहस्योपनिषद् (षोडशावरण विधानम्), आनन्द रामायण (यन्त्र पटल), मन्त्रमहोदधि एवं श्रीरामरक्षास्तोत्रम् (बुधकौशिक ऋषि)',
    nameSanskrit: 'श्रीराम यन्त्रम् (श्रीरामरक्षा यन्त्रम्)',
    nameHindi: 'श्री राम यन्त्र (श्रीरामरक्षा महायन्त्र)',
    nameEnglish: 'Sri Rama / Rama Raksha Yantra (Dharmic Victory & Sovereign Armor Matrix)',
    subTitle: 'The Regal Taraka Cosmogram of Maryada Purushottama Sri Rama with the Holy Parivara Avarana',
    presidingDeity: 'मर्यादा पुरुषोत्तम भगवान् श्रीराम (सीता-लक्ष्मण-हनुमान सहित)',
    tradition: 'रामरहस्योपनिषद्, आनन्द रामायण एवं वाल्मीकि रामायण परम्परा',
    corePhilosophy: 'भगवान् श्रीराम सनातन धर्म के प्रत्यक्ष साकार स्वरूप हैं — "रामो विग्रहवान् धर्मः साधुः सत्यपराक्रमः"। राम यन्त्र परब्रह्म के तारक स्वरूप का साक्षात् यन्त्रराज है। "रां" बीज का "र" शब्द समस्त पापों को भस्म करने वाली अग्नि है, "आ" ब्रह्माण्ड की रक्षा करने वाला सूर्य है, और "म" जीव को अमृतत्व व शान्ति प्रदान करने वाला चन्द्रमा है। राम यन्त्र का पूजन साधक को अजेय नैतिक शक्ति, शत्रुओं पर धर्मानुकूल विजय, मानसिक शान्ति, गृहस्थ सुख, और जीवन के अन्त में परम वैकुण्ठ गति प्रदान करता है। इसका अष्टदल पद्म सीता, लक्ष्मण, भरत, शत्रुघ्न और महावीर हनुमान के दिव्य संरक्षण से परिपूर्ण है।',
    citations: [
      {
        sourceScripture: 'वाल्मीकि रामायण (Valmiki Ramayana)',
        chapterOrVerse: 'अरण्य काण्ड, सर्ग ३७, श्लोक १३',
        sanskritSloka: 'रामो विग्रहवान् धर्मः साधुः सत्यपराक्रमः।\\nराजा सर्वस्य लोकस्य देवानामिव वासवः॥',
        hindiMeaning: 'श्रीराम धर्म के साक्षात् विग्रह हैं, परम साधु और सत्य पराक्रमी हैं। वे सम्पूर्ण लोकों के वैसे ही अधिपति हैं, जैसे देवताओं के राजा इन्द्र हैं।',
        englishMeaning: 'Sri Rama is the living embodiment of Dharma, the virtuous sage of unfailing truth and valour, the sovereign monarch of all the worlds, just as Indra is the ruler of the celestials.'
      },
      {
        sourceScripture: 'रामरहस्योपनिषद् (Rama Rahasya Upanishad)',
        chapterOrVerse: 'प्रथम अध्याय, श्लोक ६-८',
        sanskritSloka: 'द्व्यक्षरो राममन्त्रः स्यात् सर्वमन्त्रोत्तमोत्तमः।\\nअग्नीषोमात्मकं बीजं रां रामाय नमः स्मृतम्॥\\nयन्त्रं च रामचन्द्रस्य त्रैलोक्यविजयप्रदम्॥',
        hindiMeaning: 'दो अक्षरों का "राम" मन्त्र समस्त मन्त्रों में सर्वोत्तम है। यह अग्नि और सोम (अमृत) स्वरूप है। "रां रामाय नमः" तारक मन्त्र है और श्रीरामचन्द्र का यह यन्त्र तीनों लोकों में विजय प्रदान करने वाला है।',
        englishMeaning: 'The two-syllable mantra "Rama" is the supreme crest-jewel of all mantras. Combining the fire of Agni and the nectar of Soma, "Ram Ramaya Namaha" is the Taraka redeemer, and this Yantra of Ramachandra bestows triumph across the three worlds.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'अयोध्या महाप्राकार भूपुर',
        nameEnglish: 'Imperial Citadel of Ayodhya & Dharmic Inviolability',
        chakraTitle: 'भूपुर एवं चार धर्म द्वार',
        presidingDeity: 'चार दिशा रक्षक एवं धर्मपाल',
        mudraShakti: 'कोदण्ड मुद्रा (Bow of Unwavering Righteousness)',
        yoginiClass: 'अयोध्या पुरी पालिका',
        geometryType: '3 Regal Stepped Walls with 4 Guarded Portals',
        significance: 'साधक के जीवन और परिवार को मर्यादा, सत्यनिष्ठा और अधर्म के विरुद्ध अभेद्य सुरक्षा देना।'
      },
      {
        index: 2,
        nameSanskrit: 'षोडशदल मर्यादा पद्म',
        nameEnglish: '16-Petal Lotus of Dharmic Virtues & Taraka Syllables',
        chakraTitle: 'षोडशाक्षर मण्डल (हरे राम हरे राम राम राम हरे हरे)',
        presidingDeity: 'षोडश सद्गुण अधिष्ठाता देव',
        mudraShakti: 'बाण मुद्रा (Arrow of Unfailing Truth)',
        yoginiClass: 'षोडश कला शक्ति',
        geometryType: '16 Symmetrical Ogee Petals with 16 Taraka Syllables',
        significance: 'मन के सोलह विकारों का शमन कर सत्य, शौर्य, संयम, दया और विवेक की प्रतिष्ठा।'
      },
      {
        index: 3,
        nameSanskrit: 'अष्टदल राम-परिवार पद्म',
        nameEnglish: '8-Petal Lotus of Sita, Lakshmana, Bharata, Hanuman',
        chakraTitle: 'अष्टदल राम-परिवार चक्र (सीता, लक्ष्मण, भरत, शत्रुघ्न, हनुमान्, सुग्रीव, विभीषण, अङ्गद)',
        presidingDeity: 'माता जानकी, लक्ष्मण, भरत एवं महावीर हनुमान्',
        mudraShakti: 'अञ्जलि मुद्रा (Supreme Surrendered Devotion)',
        yoginiClass: 'अष्टमहापरिवार शक्ति',
        geometryType: '8 Symmetrical Ogee Petals with 8 Parivara Names',
        significance: 'परिवार के सदस्यों में अटूट प्रेम, भ्रातृ-सौहार्द, वफादारी, और विपत्ति में परस्पर सहयोग।'
      },
      {
        index: 4,
        nameSanskrit: 'कोदण्ड धनुर्धर षट्कोण',
        nameEnglish: 'Kodanda Bow Hexagram of Unfailing Righteous Victory',
        chakraTitle: 'षट्कोण एवं कोदण्ड चाप मण्डल (रां रामाय नमः)',
        presidingDeity: 'भगवान् श्रीराम कोदण्ड-पाणि (धनुर्धारी)',
        mudraShakti: 'धनुर्बाण मुद्रा',
        yoginiClass: 'विजय शक्ति',
        geometryType: 'Interlocking Hexagram with 4 Quadrant Kodanda Bow Arcs',
        significance: 'रावण रूपी दुर्जय अहंकार, मानसिक दुर्बलता, और जीवन के शत्रुओं पर पूर्ण विजय।'
      },
      {
        index: 5,
        nameSanskrit: 'रां तारक महाबिन्दु',
        nameEnglish: 'Supreme Taraka Singularity of Maryada Purushottama',
        chakraTitle: 'परम तारक महाबिन्दु',
        presidingDeity: 'परब्रह्म श्रीराम एवं जगज्जननी सीता',
        mudraShakti: 'अभय-ज्ञान मुद्रा',
        yoginiClass: 'परा चिच्छक्ति',
        geometryType: 'Solar Golden Radiant Core with Supreme Taraka Beeja रां',
        significance: 'भवसागर से सहज पार उतारने वाली तारक शक्ति, आत्म-साक्षात्कार, और परम गति।'
      }
    ],
    jyotish: {
      rulingPlanet: 'Sun & Jupiter (सूर्य - राजा व आत्मकारक, एवं गुरु - धर्म, ज्ञान व मर्यादा कारक)',
      planetSanskrit: 'सूर्य (आदित्य / रघुवंश कुलदेवता) एवं बृहस्पति (गुरु)',
      friendlyRashis: ['Simha (सिंह)', 'Dhanu (धनु)', 'Meena (मीन)', 'Mesha (मेष)', 'Karka (कर्क)'],
      friendlyNakshatras: ['Punarvasu', 'Pushya', 'Rohini', 'Hasta', 'Uttara Phalguni'],
      doshaRemedies: [
        {
          doshaName: 'Sun Dosha & Weak Vitality (सूर्य दोष, आत्मबल हीनता व मान-सम्मान हानि)',
          description: 'Lack of self-confidence, humiliation from superiors, government hurdles, and heart/eye ailments.',
          reliefMechanism: 'Sri Rama belongs to the illustrious Solar Dynasty (Suryavamsha); His Yantra elevates solar tejas to its absolute peak.'
        },
        {
          doshaName: 'Family Discord & Sibling Fractures (पारिवारिक कलह व भाइयों में विवाद)',
          description: 'Bitterness among brothers, disrespect towards elders, and unrighteous conduct destroying family legacy.',
          reliefMechanism: 'The Rama Parivara Avarana establishes supreme filial loyalty, mutual sacrifice, and unshakeable domestic peace.'
        }
      ],
      lifeAspects: [
        'Dharmic Victory & High Honor (धर्म विजय, उच्च पद व राज-सम्मान)',
        'Unshakeable Willpower & Integrity (अडिग इच्छाशक्ति व चरित्र बल)',
        'Ideal Domestic Harmony (आदर्श पारिवारिक प्रेम व भ्रातृ-सौहार्द)',
        'Taraka Spiritual Liberation (तारक मन्त्र द्वारा परम मोक्ष)'
      ],
      wearOrInstallDirection: 'East (पूर्व - उदित सूर्य दिशा) or North-East (ईशान कोण)',
      favorableDay: 'Sunday (रविवार), Thursday (गुरुवार), or Rama Navami (चैत्र शुक्ल नवमी)',
      auspiciousTithi: 'Shukla Paksha Navami, Punarvasu Nakshatra',
      metalPreference: 'Pure Gold (स्वर्ण), Pure Copper (तांबा), or Consecrated Bronze',
      beejMantra: 'ॐ रां रामाय नमः ॥ ॐ क्लीं रां रघुनाथाय नमः ॥',
      gayatriMantra: 'ॐ दाशरथाय विद्महे सीतावल्लभाय धीमहि तन्नो रामः प्रचोदयात् ॥',
      japaCount: 108,
      malaType: 'Tulsi Mala (तुलसी माला) or Sandalwood Mala (श्वेत चन्दन माला)',
      dhyanaSloka: 'ध्यायेदाजानुबाहुं धृतशरधनुषं बद्धपद्मासनस्थं पीतं वासो वसानं नवकमलदलस्पर्धिनेत्रं प्रसन्नम्। वामाङ्कारूढसीतामुखकमलमिलल्लोचनं नीरदाभं नानालङ्कारदीप्तं दधतमुरुजटामण्डलं रामचन्द्रम्॥',
      pratishthaVidhiSummary: [
        'Purify with sacred Gangajal, rose water, and pure honey.',
        'Place on clean yellow or saffron silk cloth facing East.',
        'Offer white fragrant flowers (चमेली/मोगरा), yellow marigold, and fragrant sandalwood paste.',
        'Offer sweet fruits, kheer, or panchamrita as naivedya.',
        'Chant the Rama Taraka Mantra 108 times and read the Sri Rama Raksha Stotram.'
      ]
    },
    practicalRemedies: [
      {
        category: 'Family',
        problem: 'परिवार में आपसी अविश्वास, भाइयों में सम्पत्ति या अहंकार का विवाद, और कलह।',
        remedyProtocol: 'घर के पूजा स्थल पर राम यन्त्र स्थापित करें, नित्य रामरक्षा स्तोत्र का पाठ करें और "श्रीराम जय राम जय जय राम" का कीर्तन करें।'
      },
      {
        category: 'Career',
        problem: 'सरकारी नौकरी, प्रशासनिक परीक्षाओं में विफलता, या अधिकारियों के साथ निरन्तर तनाव।',
        remedyProtocol: 'रविवार के दिन पूर्व दिशा में बैठकर यन्त्र के समक्ष तांबे के पात्र में जल चढ़ाएं और नित्य १०८ बार "ॐ रां रामाय नमः" का जप करें।'
      }
    ]
  }
`;

const newCanonicalEntries = `
  {
    id: 'vishnu_yantra',
    names: {
      sa: 'श्रीविष्णु यन्त्रम्',
      iast: 'Śrīviṣṇu Yantram',
      hi: 'श्री विष्णु यन्त्र',
      en: 'Sri Vishnu / Narayana Yantra (Universal Preserver Matrix)',
      gu: 'શ્રી વિષ્ણુ યંત્ર'
    },
    deity: 'Lord Maha Vishnu / Narayana',
    mantra: 'Om Namo Bhagavate Vasudevaya / Om Namo Narayanaya',
    geometrySpec: {
      primaryShape: '12-Petal Dvadasakshara Lotus, 8-Petal Ashtakshara Lotus, Vaishnava Hexagram, 8-Spoke Sudarshana Wheel & Gold Bindu',
      layersCount: 5,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Universal cosmic harmony, neutralizing Pitra and Guru doshas, dharmic prosperity, and attainment of Vaikuntha.',
    historicalPeriod: 'Puranic / Pancharatra Agamas & Srimad Bhagavatam',
    scripturalCitation: {
      scripture: 'Srimad Bhagavatam',
      verse: 'Canto 12, Chapter 11, Verses 19-20',
      sanskritText: 'ध्यायेन्नारायणं देवं शङ्खचक्रगदाधरम्। पीताम्बरधरं सौम्यं वनमालाविभूषितम्॥',
      translation: 'One should meditate upon Lord Narayana holding conch, discus, and mace, dressed in golden silk, the lone sovereign fulfilling all noble desires.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['sudarshana_chakra_yantra', 'ashta_lakshmi_yantra', 'rama_yantra', 'narasimha_yantra']
  },
  {
    id: 'varaha_yantra',
    names: {
      sa: 'श्रीभूवराह यन्त्रम्',
      iast: 'Śrībhūvarāha Yantram',
      hi: 'श्री वराह यन्त्र',
      en: 'Sri Varaha Yantra (Sacred Earth Rescuer & Property Matrix)',
      gu: 'શ્રી વરાહ યંત્ર'
    },
    deity: 'Lord Yagya Varaha & Goddess Bhudevi',
    mantra: 'Om Namah Shri Varahaya Dharanidharaya Swaha / Om Hreem Bhoom Varahaya Namaha',
    geometrySpec: {
      primaryShape: '12-Petal Lotus, 8-Petal Prithvi Lotus, Prithvi Octagram with 8 Divine Boar Tusk Curves & Central Bindu',
      layersCount: 5,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Land and property acquisition, clearing Vastu Shalya doshas, victory in property disputes, and recovering lost status.',
    historicalPeriod: 'Puranic / Varaha Purana & Srimad Bhagavatam',
    scripturalCitation: {
      scripture: 'Srimad Bhagavatam',
      verse: 'Canto 3, Chapter 13, Verse 33',
      sanskritText: 'जलौघमग्नां सचराचरां महीं विषाणकोट्या सहसोदधार। विराजते तेन वपुर्महाप्रभो यथा गजेन्द्रः सरसीरुहं करे॥',
      translation: 'Submerged in the cosmic deluge, the Earth was effortlessly hoisted upon His divine tusk by Lord Varaha, resplendent like a royal tusker holding a lotus.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['vastu_dosha_nivarana_yantra', 'bhoomi_kurma_yantra', 'matsya_yantra', 'vishnu_yantra']
  },
  {
    id: 'rama_yantra',
    names: {
      sa: 'श्रीराम यन्त्रम्',
      iast: 'Śrīrāma Yantram',
      hi: 'श्री राम यन्त्र',
      en: 'Sri Rama / Rama Raksha Yantra (Dharmic Victory & Sovereign Armor Matrix)',
      gu: 'શ્રી રામ યંત્ર'
    },
    deity: 'Maryada Purushottama Lord Sri Rama (with Sita, Lakshmana, Hanuman)',
    mantra: 'Om Ram Ramaya Namaha / Hare Rama Hare Rama Rama Rama Hare Hare',
    geometrySpec: {
      primaryShape: '16-Petal Taraka Lotus, 8-Petal Rama-Parivara Lotus, Kodanda Bow Hexagram, Victory Triangle & Taraka Beeja Ram Bindu',
      layersCount: 5,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Righteous triumph over adversity, supreme domestic peace, moral fortitude, neutralizing Sun dosha, and Taraka liberation.',
    historicalPeriod: 'Vedic-Upanishadic / Rama Rahasya Upanishad & Valmiki Ramayana',
    scripturalCitation: {
      scripture: 'Valmiki Ramayana',
      verse: 'Aranya Kanda, Sarga 37, Verse 13',
      sanskritText: 'रामो विग्रहवान् धर्मः साधुः सत्यपराक्रमः। राजा सर्वस्य लोकस्य देवानामिव वासवः॥',
      translation: 'Sri Rama is the living embodiment of Dharma, virtuous, of unfailing truth and valour, the sovereign monarch of all the worlds.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['vishnu_yantra', 'panchamukhi_hanuman_yantra', 'surya_yantra', 'sudarshana_chakra_yantra']
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
console.log('[SUCCESS] Appended 4 Vishnu & Avatar Yantras to shastric-jyotish-database.ts');

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
console.log('[SUCCESS] Appended 3 new entries to canonical-library-dataset.ts');
