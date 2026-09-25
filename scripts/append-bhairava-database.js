const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../src/lib/yantras/shastric-jyotish-database.ts');
const sgkbPath = path.join(__dirname, '../src/lib/sgkb/canonical-library-dataset.ts');

const bhairavaDbEntries = `,

  batuka_bhairava_yantra: {
    id: 'batuka_bhairava_yantra',
    taxonomyCategory: 'shiva',
    lineageAttribution: 'रुद्रयामल तन्त्रम् (बटुक भैरव कल्प) एवं शारदातिलकम्',
    nameSanskrit: 'श्री आपदुद्धारक बटुक भैरव यन्त्रम्',
    nameHindi: 'बटुक भैरव यन्त्र (आपदुद्धारक)',
    nameEnglish: 'Sri Apaduddharaka Batuka Bhairava Yantra (Deliverer from Calamities)',
    subTitle: 'The Swift Tantric Deliverer from Sudden Calamities, Perils, Malefic Spells & Legal Afflictions',
    presidingDeity: 'भगवान् आपदुद्धारक बटुक भैरव',
    tradition: 'शैव-शाक्त कौल आगम एवं बटुक कल्प',
    corePhilosophy: 'समस्त प्रकार की आकस्मिक विपत्तियों (आपद) से तत्काल उद्धार करने वाले भगवान शिव के बाल रूप भैरव। जब मनुष्य सभी ओर से घिर जाता है और कोई मार्ग नहीं सूझता, तब बटुक भैरव का स्मरण ही अभय प्रदान करता है। षट्कोण, अष्टदल और भूपुर से समन्वित यह यन्त्र साधक का वज्र-कवच है।',
    citations: [
      {
        sourceScripture: 'रुद्रयामल तन्त्रम् (बटुक भैरव स्तोत्रम्)',
        chapterOrVerse: 'श्लोक १-२',
        sanskritSloka: 'आपदुद्धारणस्तोत्रं बटुकस्य महात्मनः।\\\\nयस्य स्मरणमात्रेण नश्यन्ति विघ्नराशयः॥\\\\nॐ ह्रीं बटुकाय आपदुद्धारणाय कुरु कुरु बटुकाय ह्रीं ॐ स्वाहा।',
        hindiMeaning: 'महात्मा बटुक भैरव के आपदुद्धारण स्तोत्र के स्मरण मात्र से विघ्नों के विशाल समूह नष्ट हो जाते हैं। ॐ ह्रीं बटुकाय आपदुद्धारणाय कुरु कुरु बटुकाय ह्रीं ॐ स्वाहा।',
        englishMeaning: 'By the mere remembrance of the glorious Batuka Bhairava, mountains of obstacles dissolve into nothingness. Salutations to the redeemer from all perils.'
      },
      {
        sourceScripture: 'शारदातिलकम्',
        chapterOrVerse: 'विंशति पटल, श्लोक ५४-५६',
        sanskritSloka: 'कराकलितदण्डश्च कुक्कुरारूढ एव च।\\\\nत्रिनेत्रो वरदो देवो बटुकाख्यो महाबलः॥',
        hindiMeaning: 'हाथ में दण्ड धारण करने वाले, श्वान (कुत्ते) की सवारी करने वाले, त्रिनेत्रधारी और वरदान देने वाले महाबली बटुक देव का ध्यान करें।',
        englishMeaning: 'We meditate upon the mighty Batuka Bhairava, bearer of the cosmic staff, mounted upon the sacred dog, three-eyed granter of supreme boons.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'रक्षक भैरव भूपुर प्राकार',
        nameEnglish: 'Citadel of Adamantine Security & 4 Gateways',
        chakraTitle: 'भूपुर मण्डल (4 Sacred Portals)',
        presidingDeity: 'इन्द्रादि लोकपाल एवं अष्ट भैरव',
        mudraShakti: 'दण्ड-खड्ग मुद्रा',
        yoginiClass: 'प्रकट रक्षा योगिनी',
        geometryType: 'Concentric Stepped Citadel with 4 Portals',
        significance: 'आकस्मिक विपदाओं, तंत्र बाधाओं और शत्रु षड्यंत्रों को बाहर ही रोक देना।'
      },
      {
        index: 2,
        nameSanskrit: 'अष्टदल भैरव पद्म',
        nameEnglish: '8-Petal Lotus of 8 Bhairava Guardians',
        chakraTitle: 'अष्टदल पद्म (8 Sacred Petals)',
        presidingDeity: 'हेतुराज, त्रिपुरान्तक, अग्निवेत, यमजिह्व, काल, कराल, एकदंष्ट्र, भीम',
        mudraShakti: 'शूल-डमरू मुद्रा',
        yoginiClass: 'गुप्त भैरव योगिनी',
        geometryType: '8 Symmetrical Radial Ogee Lotus Petals with Spines',
        significance: 'आठों दिशाओं से साधक के प्राण, परिवार और मर्यादा की अखण्ड रक्षा।'
      },
      {
        index: 3,
        nameSanskrit: 'आपदुद्धारक षट्कोण चक्र',
        nameEnglish: 'Dynamic Hexagram of Peril-Neutralization',
        chakraTitle: 'षट्कोण मण्डल (Matrix of Apad-Nivarana)',
        presidingDeity: 'शिव-भैरवी सामरस्य',
        mudraShakti: 'वरदाभय मुद्रा',
        yoginiClass: 'रहस्य भैरव शक्ति',
        geometryType: 'Two Interpenetrating Triangles (Shiva-Shakti Equilibrium)',
        significance: 'घोर से घोर संकटों और कानूनी उलझनों का तत्काल समाधान।'
      },
      {
        index: 4,
        nameSanskrit: 'रहस्य अंतर्त्रिकोण',
        nameEnglish: 'Inner Inverted Triangle of Divine Protection',
        chakraTitle: 'त्रिकोण मण्डल (Trikona of Supreme Grace)',
        presidingDeity: 'बटुक शक्ति (ह्रीं, क्लीं, ह्रूं)',
        mudraShakti: 'अभय मुद्रा',
        yoginiClass: 'अतिरहस्य योगिनी',
        geometryType: 'Inverted Golden Triangle Enclosing Beeja Inscriptions',
        significance: 'समस्त भयों का शमन और आत्मिक शक्ति का संचार।'
      },
      {
        index: 5,
        nameSanskrit: 'परम बिन्दु एवं ह्रीं-बं बीज',
        nameEnglish: 'Supreme Golden Singularity & Batuka Seed',
        chakraTitle: 'मध्य बिन्दु (The Cosmic Apex)',
        presidingDeity: 'साक्षात् आपदुद्धारक बटुक भैरव',
        mudraShakti: 'महाभैरव मुद्रा',
        yoginiClass: 'परा संवित् शक्ति',
        geometryType: 'Radiant Golden Fiery Singularity Point',
        significance: 'अखण्ड विजय, अभय पद और मोक्ष।'
      }
    ],
    jyotish: {
      rulingPlanet: 'राहु (Rahu) व शनि (Saturn)',
      planetSanskrit: 'राहु-शनि पीड़ा शामक एवं मारुत-योग',
      friendlyRashis: ['कुम्भ', 'मकर', 'वृश्चिक', 'मेष'],
      friendlyNakshatras: ['आर्द्रा', 'स्वाति', 'शतभिषा', 'अनुराधा'],
      doshaRemedies: [
        {
          doshaName: 'राहु की महादशा, प्रेत-बाधा व आकस्मिक संकट',
          description: 'अचानक भारी नुकसान होना, रात में भय लगना, किसी अज्ञात तांत्रिक प्रयोग का भय रहना।',
          reliefMechanism: 'बटुक भैरव यन्त्र के समक्ष तेल का दीपक जलाकर "ॐ ह्रीं बटुकाय आपदुद्धारणाय कुरु कुरु बटुकाय ह्रीं ॐ स्वाहा" का नित्य जप करने से समस्त बाधाएं भस्म हो जाती हैं।'
        },
        {
          doshaName: 'शनि की साढ़ेसाती व कानूनी मुकदमे',
          description: 'झूठे मुकदमों में फंस जाना, शत्रु द्वारा घेराबंदी, मानसिक तनाव।',
          reliefMechanism: 'रविवार अथवा मंगलवार को काले तिल, उड़द और सरसों का तेल अर्पित कर बटुक भैरव कवच का पाठ करें।'
        }
      ],
      lifeAspects: ['आकस्मिक संकटों से मुक्ति', 'शत्रुओं का स्तम्भन', 'अदालती मामलों में विजय', 'अज्ञात भय का निवारण'],
      wearOrInstallDirection: 'दक्षिण (South) अथवा पूर्व (East)',
      favorableDay: 'रविवार (Sunday) अथवा मंगलवार (Tuesday)',
      auspiciousTithi: 'कालाष्टमी (प्रत्येक मास की कृष्ण अष्टमी) अथवा भैरव जयंती',
      metalPreference: 'ताम्र (Copper), कांसा (Bronze) अथवा पंचधातु',
      beejMantra: 'ॐ ह्रीं बटुकाय आपदुद्धारणाय कुरु कुरु बटुकाय ह्रीं ॐ स्वाहा॥',
      gayatriMantra: 'ॐ बटुकभैरवाय विद्महे आपदुद्धारणाय धीमहि तन्नो भैरवः प्रचोदयात्॥',
      japaCount: 108,
      malaType: 'रुद्राक्ष माला अथवा रक्त चन्दन माला',
      dhyanaSloka: 'ध्यायेन्नित्यं महेशं रजतगिरिनिभं चारुचन्द्रावतंसं रत्नाकल्पोज्ज्वलाङ्गं परशुमृगवराभीतिहस्तं प्रसन्नम्। पद्मासीनं समन्तात् स्तुतममरगणैर्व्याघ्रकृत्तिं वसानं विश्वाद्यं विश्वबीजं निखिलभयहरं पञ्चवक्त्रं त्रिनेत्रम्॥',
      pratishthaVidhiSummary: [
        '१. लाल अथवा काले वस्त्र पर यन्त्र प्रतिष्ठित करें।',
        '२. सरसों के तेल का चौमुखा दीपक प्रज्वलित करें।',
        '३. गुड़, काले चने, अथवा इमरती का नैवेद्य अर्पित करें।',
        '४. बटुक भैरव अष्टोत्तरशतनाम या आपदुद्धारण स्तोत्र का पाठ करें।'
      ]
    },
    practicalRemedies: [
      {
        category: 'Protection',
        problem: 'अचानक आए बड़े संकट, कोर्ट केस या शत्रुओं द्वारा लगातार प्रताड़ित किया जाना।',
        remedyProtocol: 'बटुक भैरव यन्त्र के सामने सरसों के तेल का दीपक जलाकर १०८ बार "ॐ ह्रीं बटुकाय आपदुद्धारणाय कुरु कुरु बटुकाय ह्रीं ॐ स्वाहा" का पाठ करें।'
      },
      {
        category: 'Spiritual',
        problem: 'अज्ञात भय, बुरे स्वप्न, आत्मविश्वास की अत्यधिक कमी।',
        remedyProtocol: 'प्रातःकाल यन्त्र के दर्शन कर ५४ बार मूल मन्त्र का जप करें और कुत्तों को रोटी या दूध दें।'
      }
    ]
  },

  kaal_bhairava_yantra: {
    id: 'kaal_bhairava_yantra',
    taxonomyCategory: 'shiva',
    lineageAttribution: 'ब्रह्मवैवर्त पुराणम्, भैरव तन्त्रम् एवं काशी रहस्यम्',
    nameSanskrit: 'श्रीमहाकालभैरव यन्त्रम् (कालपाश-विमोचन मण्डल)',
    nameHindi: 'काल भैरव यन्त्र (काशी के कोतवाल)',
    nameEnglish: 'Sri Kaal Bhairava Yantra (The Cosmic Sovereign of Time & Dissolution)',
    subTitle: 'The Supreme Guardian of Varanasi, Lord of Time, Annihilator of Fear of Death & Dissolver of Negative Karma',
    presidingDeity: 'भगवान् महाकाल भैरव (काशी क्षेत्रपाल)',
    tradition: 'शैव आगम एवं काशी भैरव परम्परा',
    corePhilosophy: 'काल और मृत्यु के भी अधिष्ठाता भगवान काल भैरव। वे अहंकार का उच्छेदन कर साधक को कालपाश (समय और कर्म के बन्धन) से मुक्त करते हैं। काशी में इनकी अनुमति के बिना यमराज भी दण्ड नहीं दे सकते। यह यन्त्र साधक के समस्त अकाल मृत्यु योग, भयंकर भय और प्रारब्ध के कठोर कष्टों को भस्म कर देता है।',
    citations: [
      {
        sourceScripture: 'कालभैरवाष्टकम् (आदि शङ्कराचार्य)',
        chapterOrVerse: 'श्लोक १',
        sanskritSloka: 'देवराजसेव्यमानपावनाङ्घ्रिपङ्कजं\\\\nव्यालयज्ञसूत्रमिन्दुशेखरं कृपाकरम्।\\\\nनारदादियोगिवृन्दवन्दितं दिगम्बरं\\\\nकाशिकापुराधिनाथकालभैरवं भजे॥',
        hindiMeaning: 'देवताओं के राजा इन्द्र जिनके चरणकमलों की सेवा करते हैं, जो सर्प का यज्ञोपवीत धारण करते हैं, चन्द्रमा जिनके मस्तक पर सुशोभित है, जो परम कृपालु हैं, नारद आदि योगीजन जिनकी वन्दना करते हैं—उन काशी के अधिपति कालभैरव को मैं भजता हूँ।',
        englishMeaning: 'I revere Lord Kaal Bhairava, Sovereign of Kashi, whose sacred lotus feet are served by Indra, adorned with the serpent sacred thread, crested with the crescent moon, granting transcendent compassion.'
      },
      {
        sourceScripture: 'भैरव तन्त्रम्',
        chapterOrVerse: 'पटल ३, श्लोक १२',
        sanskritSloka: 'तीक्ष्णदंष्ट्र महाकाय कल्पान्तदहनोपम।\\\\nभैरवाय नमस्तुभ्यमनुज्ञां दातुमर्हसि॥\\\\nॐ भ्रं कालभैरवाय फट्॥',
        hindiMeaning: 'तीक्ष्ण दाढ़ों वाले, विशालकाय, प्रलयकाल की अग्नि के समान तेजस्वी भगवान भैरव को हमारा नमस्कार है।',
        englishMeaning: 'Salutations to Bhairava of sharp fangs and immense cosmic form, radiant like the fire of cosmic dissolution.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'त्रिशूल युक्त काल भूपुर',
        nameEnglish: 'Citadel with 4 Cardinal Tridents',
        chakraTitle: 'भूपुर मण्डल (Trident-Guarded Fortress)',
        presidingDeity: 'अष्टदिक्पाल एवं क्षेत्रपाल भैरव',
        mudraShakti: 'त्रिशूल-कपाल मुद्रा',
        yoginiClass: 'प्रकट काल योगिनी',
        geometryType: 'Quadrangle Citadel with 4 Stepped Portals & Cardinal Tridents',
        significance: 'आठों दिशाओं से आने वाली यम-यातना और अकाल मृत्यु का पूर्ण निवारण।'
      },
      {
        index: 2,
        nameSanskrit: 'षोडशदल कालचक्र पद्म',
        nameEnglish: '16-Petal Lotus of Cosmic Time Cycles',
        chakraTitle: 'षोडशदल पद्म (16 Kalas of Time)',
        presidingDeity: 'षोडश काल शक्तियाँ',
        mudraShakti: 'कालपाश मुद्रा',
        yoginiClass: 'गुप्त काल योगिनी',
        geometryType: '16 Radial Symmetrical Lotus Petals with Spines',
        significance: 'कर्म-बन्धन और समय के दुष्प्रभावों का नाश।'
      },
      {
        index: 3,
        nameSanskrit: 'अष्टदल अष्टभैरव पद्म',
        nameEnglish: '8-Petal Lotus of the Eight Manifest Bhairavas',
        chakraTitle: 'अष्टदल पद्म (8 Sacred Petals)',
        presidingDeity: 'असिताङ्ग, रुरु, चण्ड, क्रोध, उन्मत्त, कपाली, भीषण, संहार भैरव',
        mudraShakti: 'खड्ग-मुद्गर मुद्रा',
        yoginiClass: 'गुप्ततर भैरव योगिनी',
        geometryType: '8 Symmetrical Petals with Veins',
        significance: 'समस्त प्रकार के भूत, प्रेत, पिशाच और ग्रह-पीड़ा का उच्छेदन।'
      },
      {
        index: 4,
        nameSanskrit: 'अष्टकोण कालपाश भंजक चक्र',
        nameEnglish: 'Octagram Star of Karmic Dissolution',
        chakraTitle: 'अष्टकोण मण्डल (Kaalachakra Star Matrix)',
        presidingDeity: 'महाकाल-कालभैरव सामरस्य',
        mudraShakti: 'डमरू-नाद मुद्रा',
        yoginiClass: 'रहस्य काल योगिनी',
        geometryType: 'Dynamic Double Hexagram (Octagram Star with 8 Rays)',
        significance: 'प्रारब्ध के कठोर पापों और भय का क्षण भर में भंजन।'
      },
      {
        index: 5,
        nameSanskrit: 'प्रलय त्रिकोण एवं भ्रं महाबिन्दु',
        nameEnglish: 'Dissolution Triangle & Bhraam Singularity',
        chakraTitle: 'मध्य बिन्दु (The Absolute Void & Pure Light)',
        presidingDeity: 'परम महाकाल भैरव',
        mudraShakti: 'संहार-मुक्ति मुद्रा',
        yoginiClass: 'परा संवित् शक्ति',
        geometryType: 'Deep Inverted Fire Triangle with Fiery Singularity Point',
        significance: 'अकाल मृत्यु से रक्षा, परम अभय और कैवल्य मुक्ति।'
      }
    ],
    jyotish: {
      rulingPlanet: 'शनि (Saturn), राहु (Rahu) व केतु (Ketu)',
      planetSanskrit: 'शनि-राहु-केतु त्रिकाल दोष नाशक',
      friendlyRashis: ['मकर', 'कुम्भ', 'वृश्चिक', 'मेष'],
      friendlyNakshatras: ['अनुराधा', 'पुष्य', 'मघा', 'मूल'],
      doshaRemedies: [
        {
          doshaName: 'शनि की साढ़ेसाती/ढैय्या व अकाल मृत्यु योग',
          description: 'लगातार गंभीर दुर्घटनाएं होना, असाध्य रोग, व्यापार में भारी विनाश और मानसिक अशांति।',
          reliefMechanism: 'काल भैरव यन्त्र की शनिवार को विधिवत पूजा और कालभैरवाष्टकम् के पाठ से शनि व राहु के समस्त क्रूर प्रभाव शांत हो जाते हैं।'
        },
        {
          doshaName: 'कालसर्प दोष व पितृ दोष',
          description: 'वंश वृद्धि में बाधा, पारिवारिक कलह, जीवन में निरंतर अज्ञात भय बना रहना।',
          reliefMechanism: 'यन्त्र के समक्ष सरसों के तेल का दीपक जलाकर "ॐ भ्रं कालभैरवाय नमः" का जाप करने से कालसर्प दोष निष्प्रभावी हो जाता है।'
        }
      ],
      lifeAspects: ['अकाल मृत्यु से रक्षा', 'शनि-राहु की शांति', 'तांत्रिक उपद्रवों का विनाश', 'आत्मिक निर्भयता'],
      wearOrInstallDirection: 'दक्षिण (South) अथवा पश्चिम (West)',
      favorableDay: 'शनिवार (Saturday) अथवा मंगलवार (Tuesday)',
      auspiciousTithi: 'मार्गशीर्ष कृष्ण अष्टमी (कालभैरव अष्टमी / भैरव जयंती)',
      metalPreference: 'ताम्र (Copper), कांसा (Bronze) अथवा लोहा (Iron)',
      beejMantra: 'ॐ भ्रं कालभैरवाय नमः॥ / ॐ तीक्ष्णदंष्ट्र महाकाय कल्पान्तदहनोपम भैरवाय नमस्तुभ्यम्॥',
      gayatriMantra: 'ॐ कालभैरवाय विद्महे दण्डहस्ताय धीमहि तन्नो भैरवः प्रचोदयात्॥',
      japaCount: 108,
      malaType: 'रुद्राक्ष माला (Rudraksha Rosary)',
      dhyanaSloka: 'तीक्ष्णदंष्ट्र महाकाय कल्पान्तदहनोपम। भैरवाय नमस्तुभ्यमनुज्ञां दातुमर्हसि॥ दिगम्बरं भस्मविभूषिताङ्गं त्रिशूलहस्तं भुजगेन्द्रहारम्। कालस्य कालं भयहारिणं च ध्यायेत् सदा कालमहेशभैरवम्॥',
      pratishthaVidhiSummary: [
        '१. काले अथवा लाल वस्त्र पर काल भैरव यन्त्र स्थापित करें।',
        '२. सरसों के तेल या तिल के तेल का दीपक जलाएं।',
        '३. उड़द के बड़े, इमरती अथवा बेसन के लड्डू का भोग लगाएं।',
        '४. कालभैरवाष्टकम् का पाठ करें और काले श्वान को भोजन दें।'
      ]
    },
    practicalRemedies: [
      {
        category: 'Protection',
        problem: 'गंभीर तान्त्रिक बाधा, शत्रु द्वारा जीवन पर संकट या अकाल मृत्यु का भय।',
        remedyProtocol: 'प्रत्येक शनिवार सायंकाल काल भैरव यन्त्र के सम्मुख सरसों के तेल का दीपक जलाकर १०८ बार "ॐ भ्रं कालभैरवाय नमः" का जप करें।'
      },
      {
        category: 'Spiritual',
        problem: 'मन में अत्यधिक भय, अवसाद, नकारात्मक विचार और अज्ञात चिंताएं।',
        remedyProtocol: 'प्रातःकाल स्नानोपरान्त यन्त्र के बिन्दु पर ध्यान केन्द्रित कर ३ बार कालभैरवाष्टक का पाठ करें।'
      }
    ]
  }
`;

const bhairavaSgkbEntries = `  {
    id: 'batuka_bhairava_yantra',
    names: {
      sa: 'श्री आपदुद्धारक बटुक भैरव यन्त्रम्',
      iast: 'Śrī Āpaduddhāraka Baṭuka Bhairava Yantram',
      hi: 'बटुक भैरव यन्त्र',
      en: 'Sri Apaduddharaka Batuka Bhairava Yantra (Deliverer from Calamities)',
      gu: 'બટુક ભૈરવ યંત્ર'
    },
    deity: 'Lord Batuka Bhairava (Apaduddharaka Form)',
    mantra: 'Om Hreem Batukaya Apaduddharanaya Kuru Kuru Batukaya Hreem Om Swaha',
    geometrySpec: {
      primaryShape: '8-Petal Bhairava Lotus, Hexagram of Peril-Neutralization, Inverted Protection Triangle, Golden Bindu',
      layersCount: 5,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Instant deliverance from acute perils, legal troubles, sudden mishaps, black magic, and fear.',
    historicalPeriod: 'Tantric / Rudrayamala Tantra & Sharadatilakam',
    scripturalCitation: {
      scripture: 'Rudrayamala Tantra (Batuka Kalpa)',
      verse: 'Verses 1-2',
      sanskritText: 'आपदुद्धारणस्तोत्रं बटुकस्य महात्मनः। यस्य स्मरणमात्रेण नश्यन्ति विघ्नराशयः॥',
      translation: 'By the mere remembrance of glorious Batuka Bhairava, colossal mountains of obstacles and perils dissolve.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['kaal_bhairava_yantra', 'swarna_akarshana_bhairava_yantra', 'sharabheshwara_yantra', 'mahamrityunjaya_yantra']
  },
  {
    id: 'kaal_bhairava_yantra',
    names: {
      sa: 'श्रीमहाकालभैरव यन्त्रम्',
      iast: 'Śrīmahākālabhairava Yantram',
      hi: 'काल भैरव यन्त्र',
      en: 'Sri Kaal Bhairava Yantra (Lord of Time & Dissolution)',
      gu: 'કાળ ભૈરવ યંત્ર'
    },
    deity: 'Lord Kaal Bhairava (Sovereign of Kashi & Lord of Time)',
    mantra: 'Om Bhram Kaalabhairavaya Namaha',
    geometrySpec: {
      primaryShape: 'Citadel with 4 Tridents, 16-Petal Kaalachakra Lotus, 8-Petal Ashta Bhairava Lotus, Octagram Star, Dissolution Triangle',
      layersCount: 5,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Protection from premature demise, neutralizing Saturn and Rahu doshas, fearlessness, and destroying adverse astral forces.',
    historicalPeriod: 'Puranic-Tantric / Brahmavaivarta Purana & Kaalbhairavashtakam',
    scripturalCitation: {
      scripture: 'Kaalbhairavashtakam by Adi Shankaracharya',
      verse: 'Verse 1',
      sanskritText: 'देवराजसेव्यमानपावनाङ्घ्रिपङ्कजं व्यालयज्ञसूत्रमिन्दुशेखरं कृपाकरम्। काशिकापुराधिनाथकालभैरवं भजे॥',
      translation: 'I adore Lord Kaal Bhairava, ruler of Kashi, whose sacred lotus feet are served by the King of Gods, dispelling fear of Time.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['batuka_bhairava_yantra', 'swarna_akarshana_bhairava_yantra', 'mahamrityunjaya_yantra', 'pratyangira_yantra']
  }
`;

// 1. Update shastric-jyotish-database.ts
let dbContent = fs.readFileSync(dbPath, 'utf8');
if (!dbContent.includes('batuka_bhairava_yantra: {')) {
  const lastIndex = dbContent.lastIndexOf('};');
  if (lastIndex !== -1) {
    dbContent = dbContent.slice(0, lastIndex) + bhairavaDbEntries + '\n};\n';
    fs.writeFileSync(dbPath, dbContent, 'utf8');
    console.log('Appended 2 bhairava yantras to shastric-jyotish-database.ts');
  } else {
    console.error('Could not find closing }; in shastric-jyotish-database.ts');
  }
} else {
  console.log('batuka_bhairava_yantra already exists in shastric-jyotish-database.ts');
}

// 2. Update canonical-library-dataset.ts
let sgkbContent = fs.readFileSync(sgkbPath, 'utf8');
if (!sgkbContent.includes("id: 'batuka_bhairava_yantra'")) {
  const lastBracketIndex = sgkbContent.lastIndexOf('];');
  if (lastBracketIndex !== -1) {
    sgkbContent = sgkbContent.slice(0, lastBracketIndex) + ',\n' + bhairavaSgkbEntries + '\n];\n';
    fs.writeFileSync(sgkbPath, sgkbContent, 'utf8');
    console.log('Appended 2 bhairava yantras to canonical-library-dataset.ts');
  } else {
    console.error('Could not find closing ]; in canonical-library-dataset.ts');
  }
} else {
  console.log('batuka_bhairava_yantra already exists in canonical-library-dataset.ts');
}
