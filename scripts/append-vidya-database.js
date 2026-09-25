const fs = require('fs');
const path = require('path');

const shastricDbPath = path.join(__dirname, '..', 'src', 'lib', 'yantras', 'shastric-jyotish-database.ts');
const canonicalDbPath = path.join(__dirname, '..', 'src', 'lib', 'sgkb', 'canonical-library-dataset.ts');

const vidyaShastricEntries = `
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
        sanskritSloka: 'ॐ वाग्देव्यै च विद्महे कामराजाय धीमहि।\\nतन्नो देवी प्रचोदयात्॥',
        hindiMeaning: 'हम वाग्देवी भगवती सरस्वती का ध्यान करते हैं, वे कामराज रूप में हमारी बुद्धि और वाणी को सत्य ज्ञान की ओर प्रेरित करें।',
        englishMeaning: 'We meditate upon Goddess Saraswati, the embodiment of transcendental speech; may the supreme Divine Mother inspire our intellect.'
      },
      {
        sourceScripture: 'मन्त्र महोदधि',
        chapterOrVerse: 'तरङ्ग ७, श्लोक २५',
        sanskritSloka: 'ऐं ह्रीं श्रीं क्लीं सौः वाग्वादिनि वद वद स्वाहा।\\nअष्टपत्रे लिखेन्मन्त्रं षट्कोणे वाग्भवं न्यसेत्॥',
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
        category: 'Education',
        problem: 'विद्यार्थियों में पढ़ाई में मन न लगना, परीक्षा का भय, और याद किया हुआ भूल जाना।',
        remedyProtocol: 'अध्ययन कक्ष के ईशान कोण में सरस्वती यन्त्र स्थापित कर नित्य प्रातः स्फटिक माला से "ॐ ऐं सरस्वत्यै नमः" का १०८ बार जप करें।'
      },
      {
        category: 'Artistic',
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
        sanskritSloka: 'ॐ तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि।\\nधियो यो नः प्रचोदयात्॥',
        hindiMeaning: 'हम उस प्राणस्वरूप, दुःखनाशक, सुखस्वरूप, श्रेष्ठ, तेजस्वी, पापनाशक देवस्वरूप सूर्य का ध्यान करते हैं जो हमारी बुद्धि को सन्मार्ग में प्रेरित करे।',
        englishMeaning: 'We meditate upon that adorable effulgence of the divine Sun, the Creator; may He awaken and illuminate our intellects.'
      },
      {
        sourceScripture: 'अग्नि पुराणम्',
        chapterOrVerse: 'गायत्री कल्प, अध्याय २१६',
        sanskritSloka: 'गायत्रीं संस्मरेन्नित्यं सर्वपापप्रणाशिनीम्।\\nयन्त्रमध्ये स्थितां देवीं सूर्यमण्डलमध्यगाम्॥',
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
        sanskritSloka: 'ॐ नमो भगवते दक्षिणामूर्तये मह्यं मेधां प्रज्ञां प्रयच्छ स्वाहा।\\nचिन्मुद्रालंकृतकरां मौनव्याख्यानतत्पराम्॥',
        hindiMeaning: 'समस्त ज्ञान के अधिष्ठाता भगवान् दक्षिणामूर्ति को नमस्कार है, वे मुझे परम मेधा और प्रज्ञा प्रदान करें। जो चिन्मुद्रा से सुशोभित और मौन व्याख्यान में लीन हैं।',
        englishMeaning: 'Salutations to the Supreme Lord Dakshinamurti; grant me transcendental memory, intellect, and profound wisdom.'
      },
      {
        sourceScripture: 'दक्षिणामूर्ति स्तोत्रम् (आदि शंकराचार्य)',
        chapterOrVerse: 'मंगलाचरण श्लोक १',
        sanskritSloka: 'मौनव्याख्याप्रकटितपरब्रह्मतत्त्वं युवानं वर्षिष्ठांतेवसद्ऋषिगणैरावृतं ब्रह्मनिष्ठैः।\\nआचार्येन्द्रं करकलितचिन्मुद्रमानन्दमूर्तिं स्वात्मारामं मुदितवदनं दक्षिणामूर्तिमीडे॥',
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
        category: 'Intellect',
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
        sanskritSloka: 'ॐ ह्रौं ॐ नमो भगवते हयग्रीवाय विष्णवे मह्यं मेधां प्रज्ञां प्रयच्छ स्वाहा।\\nऋग्यजुःसामरूपायाऽऽदित्यमण्डलमध्यगाय नमः॥',
        hindiMeaning: 'भगवान् हयग्रीव विष्णु को नमस्कार है, जो ऋग्, यजुः और साम रूप हैं तथा सूर्यमण्डल के मध्य में स्थित हैं, वे मुझे मेधा और प्रज्ञा प्रदान करें।',
        englishMeaning: 'Salutations to Lord Hayagriva, the cosmic embodiment of the Vedas; enthroned within the solar orb, bless me with supreme wisdom.'
      },
      {
        sourceScripture: 'श्री वेदान्त देशिक (हयग्रीव स्तोत्रम्)',
        chapterOrVerse: 'श्लोक १',
        sanskritSloka: 'ज्ञानानन्दमयं देवं निर्मलस्फटिकाकृतिम्।\\nआधारं सर्वविद्यानां हयग्रीवमुपास्महे॥',
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
        category: 'Competitive',
        problem: 'प्रतियोगी परीक्षाओं, साक्षात्कारों (Interviews) और न्यायिक वाद-विवाद में सफलता का अभाव।',
        remedyProtocol: 'यन्त्र के समक्ष सफेद पुष्प अर्पित कर ११ बार हयग्रीव स्तोत्र अथवा "ॐ ह्रौं नमः" का १०८ बार जप करें।'
      },
      {
        category: 'Wisdom',
        problem: 'शास्त्रों, वेदों और उच्च वैज्ञानिक अनुसंधानों में गूढ़ रहस्यों को समझने में बाधा।',
        remedyProtocol: 'अध्ययन से पूर्व हयग्रीव यन्त्र पर स्फटिक अथवा तुलसी अर्पित कर ध्यान करें।'
      }
    ]
  }
`;

// Append to shastric-jyotish-database.ts
let shastricContent = fs.readFileSync(shastricDbPath, 'utf-8');
const lastClosingBraceIndex = shastricContent.lastIndexOf('};');

if (lastClosingBraceIndex !== -1 && !shastricContent.includes('saraswati_yantra:')) {
  const updatedShastric = shastricContent.slice(0, lastClosingBraceIndex) + vidyaShastricEntries + '\n};\n';
  fs.writeFileSync(shastricDbPath, updatedShastric, 'utf-8');
  console.log('Appended 4 Vidya Yantras to shastric-jyotish-database.ts');
} else {
  console.log('Vidya Yantras already exist or closing brace not found in shastric-jyotish-database.ts');
}

// Append to canonical-library-dataset.ts
const vidyaCanonicalEntries = `  {
    id: 'saraswati_yantra',
    names: {
      sa: 'श्री सरस्वती यन्त्रम्',
      iast: 'Saraswatī Yantram',
      hi: 'सरस्वती यन्त्र',
      en: 'Saraswati Yantra (Goddess of Learning & Eloquence)',
      gu: 'સરસ્વતી યંત્ર'
    },
    deity: 'Goddess Saraswati (Sharada)',
    mantra: 'Om Aim Saraswatyai Namah',
    geometrySpec: {
      primaryShape: 'Hexagram, 8-Petal Ogee Lotus & Central Aim Bindu',
      layersCount: 5,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Awakening transcendent intellect, photographic memory, eloquence, literature, and mastery of all arts and music.',
    historicalPeriod: 'Vedic / Saraswati Rahasya Upanishad & Mantra Mahodadhi',
    scripturalCitation: {
      scripture: 'Saraswati Rahasya Upanishad',
      verse: 'Mantra 1-2',
      sanskritText: 'ॐ वाग्देव्यै च विद्महे कामराजाय धीमहि। तन्नो देवी प्रचोदयात्॥',
      translation: 'We meditate upon Goddess Saraswati, the embodiment of transcendental speech; may She illuminate our intellect.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['gayatri_yantra', 'medha_dakshinamurti_yantra', 'hayagriva_yantra']
  },
  {
    id: 'gayatri_yantra',
    names: {
      sa: 'श्री गायत्री यन्त्रम्',
      iast: 'Gāyatrī Yantram',
      hi: 'गायत्री यन्त्र',
      en: 'Gayatri Yantra (24 Syllables Solar Illumination)',
      gu: 'ગાયત્રી યંત્ર'
    },
    deity: 'Goddess Vedamata Gayatri (Savitur)',
    mantra: 'Om Bhur Bhuvah Svah Tat Savitur Varenyam Bhargo Devasya Dheemahi Dhiyo Yo Nah Prachodayat',
    geometrySpec: {
      primaryShape: '24-Petal Lotus, 8-Petal Lotus, Solar Shatkona & Pranava Core',
      layersCount: 6,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Self-realization, purification of accumulated karma, enhancement of vital prana, solar harmony, and intellectual illumination.',
    historicalPeriod: 'c. Rigvedic Period (Rigveda 3.62.10 & Agni Puranam)',
    scripturalCitation: {
      scripture: 'Rigveda',
      verse: 'Mandala 3, Sukta 62, Verse 10',
      sanskritText: 'ॐ तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि। धियो यो नः प्रचोदयात्॥',
      translation: 'We meditate upon that adorable effulgence of the divine Sun, the Creator; may He awaken and illuminate our intellects.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['surya_yantra', 'saraswati_yantra', 'sri_yantra']
  },
  {
    id: 'medha_dakshinamurti_yantra',
    names: {
      sa: 'श्री मेधा दक्षिणामूर्ति यन्त्रम्',
      iast: 'Medhā Dakṣiṇāmūrti Yantram',
      hi: 'मेधा दक्षिणामूर्ति यन्त्र',
      en: 'Medha Dakshinamurti Yantra (Supreme Preceptor of Intellect)',
      gu: 'મેધા દક્ષિણામૂર્તિ યંત્ર'
    },
    deity: 'Lord Dakshinamurti (Adi Guru Shiva)',
    mantra: 'Om Hsaum Om Namo Bhagavate Dakshinamurtaye Mahyam Medham Prajnam Prayachha Swaha',
    geometrySpec: {
      primaryShape: '16 Kalas Petals, 8 Petals, Inverted Triangle of Silence & Hsaum Core',
      layersCount: 6,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Acquiring photographic memory, mastery of philosophy and higher sciences, guru grace, and overcoming intellectual stagnation.',
    historicalPeriod: 'Upanishadic / Dakshinamurti Upanishad & Sharada Tilaka',
    scripturalCitation: {
      scripture: 'Dakshinamurti Upanishad',
      verse: 'Mantra 1-3',
      sanskritText: 'ॐ नमो भगवते दक्षिणामूर्तये मह्यं मेधां प्रज्ञां प्रयच्छ स्वाहा...',
      translation: 'Salutations to the Supreme Lord Dakshinamurti; grant me transcendental memory, intellect, and profound wisdom.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['saraswati_yantra', 'hayagriva_yantra', 'mahamrityunjaya_yantra']
  },
  {
    id: 'hayagriva_yantra',
    names: {
      sa: 'श्री हयग्रीव यन्त्रम्',
      iast: 'Hayagrīva Yantram',
      hi: 'हयग्रीव यन्त्र',
      en: 'Hayagriva Yantra (Lord of Transcendental Wisdom & Vedic Mastery)',
      gu: 'હયગ્રીવ યંત્ર'
    },
    deity: 'Lord Hayagriva (Vishnu Wisdom Incarnation)',
    mantra: 'Om Hraum Om Namo Bhagavate Hayagrivaya Swaha',
    geometrySpec: {
      primaryShape: '12-Aditya Petals, 8 Petals, Vaishnava Shatkona & Hraum Bindu',
      layersCount: 6,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Triumph in debates, competitive examinations, legal argument, analytical reasoning, and uncovering the deep secrets of the Vedas.',
    historicalPeriod: 'Pancharatra / Hayagriva Upanishad',
    scripturalCitation: {
      scripture: 'Hayagriva Upanishad',
      verse: 'Mantra 1-2',
      sanskritText: 'ॐ ह्रौं ॐ नमो भगवते हयग्रीवाय विष्णवे मह्यं मेधां प्रज्ञां प्रयच्छ स्वाहा...',
      translation: 'Salutations to Lord Hayagriva, the cosmic embodiment of the Vedas; enthroned within the solar orb, bless me with supreme wisdom.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['saraswati_yantra', 'medha_dakshinamurti_yantra', 'sudarshana_chakra_yantra']
  },
`;

let canonicalContent = fs.readFileSync(canonicalDbPath, 'utf-8');
const lastClosingBracketIndex = canonicalContent.lastIndexOf('];');

if (lastClosingBracketIndex !== -1 && !canonicalContent.includes('saraswati_yantra')) {
  const updatedCanonical = canonicalContent.slice(0, lastClosingBracketIndex) + vidyaCanonicalEntries + '\n];\n';
  fs.writeFileSync(canonicalDbPath, updatedCanonical, 'utf-8');
  console.log('Appended 4 Vidya Yantras to canonical-library-dataset.ts');
} else {
  console.log('Vidya Yantras already exist or closing bracket not found in canonical-library-dataset.ts');
}
