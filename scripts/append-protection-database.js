const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../src/lib/yantras/shastric-jyotish-database.ts');
const sgkbPath = path.join(__dirname, '../src/lib/sgkb/canonical-library-dataset.ts');

// 1. Shastric Database entries
const protectionEntries = `
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
    }
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
    }
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
    }
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
    }
  }
`;

// Read current db
let dbContent = fs.readFileSync(dbPath, 'utf8');

// Check if already inserted
if (!dbContent.includes('durga_bisa_yantra: {')) {
  // Find where SHASTRIC_YANTRA_DATABASE ends:
  // It ends with "};" at the very bottom of the file
  const lastIndex = dbContent.lastIndexOf('};');
  if (lastIndex !== -1) {
    dbContent = dbContent.slice(0, lastIndex) + ',\n' + protectionEntries + '\n};\n';
    fs.writeFileSync(dbPath, dbContent, 'utf8');
    console.log('Appended 4 protection yantras to shastric-jyotish-database.ts!');
  } else {
    console.error('Could not find closing }; in shastric-jyotish-database.ts');
  }
} else {
  console.log('Protection yantras already exist in shastric-jyotish-database.ts');
}

// 2. Append to CANONICAL_SGKB_LIBRARY
const sgkbEntries = `
  {
    id: 'durga_bisa_yantra',
    names: {
      sa: 'श्रीमहादुर्गा बीसा यन्त्रम्',
      iast: 'Durgā Bīsā Yantram',
      hi: 'दुर्गा बीसा यन्त्र',
      en: 'Durga Bisa Yantra (Supreme Protective Armor)',
      gu: 'દુર્ગા બીસા યંત્ર'
    },
    deity: 'Goddess Durga / Jagadamba',
    mantra: 'Om Dum Durgayai Namah / Om Aim Hreem Kleem Chamundayai Vichche',
    geometrySpec: {
      primaryShape: '8 Lotus Petals & Bisa Triangle Matrix (Sum of 20)',
      layersCount: 4,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Total protection from 8 existential fears, victory in disputes, business prosperity, and elimination of evil eye.',
    historicalPeriod: 'c. 10th Century CE (Mantra Mahodadhi / Shakta Pramoda)',
    scripturalCitation: {
      scripture: 'Durga Saptashati',
      verse: 'Chapter 4.17',
      sanskritText: 'दुर्गे स्मृता हरसि भीतिमशेषजन्तोः स्वस्थैः स्मृता मतिमतीव शुभां ददासि...',
      translation: 'When remembered in distress, O Mother Durga, You dispel the fears of every living being.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['kali_yantra', 'pratyangira_yantra']
  },
  {
    id: 'sudarshana_chakra_yantra',
    names: {
      sa: 'श्रीमहासुदर्शन चक्र यन्त्रम्',
      iast: 'Sudarśana Cakra Yantram',
      hi: 'सुदर्शन चक्र यन्त्र',
      en: 'Sudarshana Chakra Yantra (Cosmic Disc of Protection)',
      gu: 'સુદર્શન ચક્ર યંત્ર'
    },
    deity: 'Bhagavan Maha Sudarshana (Vishnu / Narasimha)',
    mantra: 'Om Sahasrara Hum Phat / Om Namo Bhagavate Maha Sudarshanaya Hum Phat Swaha',
    geometrySpec: {
      primaryShape: '24 Fire Flames, 12 Petals, Hexagram & 8-Spoke Wheel',
      layersCount: 5,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Absolute invulnerability, destruction of black magic and curses, victory in litigation, and relief from chronic illness.',
    historicalPeriod: 'c. 6th Century CE (Ahirbudhnya Samhita / Pancharatra)',
    scripturalCitation: {
      scripture: 'Ahirbudhnya Samhita',
      verse: 'Chapter 33.1',
      sanskritText: 'सुदर्शनं महाचक्रं सर्वशत्रुनिवर्हणम् । कोटिसूर्यप्रतीकाशं कालानलसमप्रभम्...',
      translation: 'The great Sudarshana Chakra, radiant like ten million suns, annihilates all enemies and adverse forces.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['panchamukhi_hanuman_yantra', 'pratyangira_yantra']
  },
  {
    id: 'panchamukhi_hanuman_yantra',
    names: {
      sa: 'श्रीपञ्चमुखी हनुमान् यन्त्रम्',
      iast: 'Pañcamukhī Hanumān Yantram',
      hi: 'पंचमुखी हनुमान यन्त्र',
      en: 'Panchamukhi Hanuman Yantra (Five-Faced Guardian Cosmogram)',
      gu: 'પંચમુખી હનુમાન યંત્ર'
    },
    deity: 'Lord Panchamukhi Hanuman (Rudravatara)',
    mantra: 'Om Ham Hanumate Rudratmakaya Hum Phat',
    geometrySpec: {
      primaryShape: '10 Lotus Petals & 5-Pointed Pentagram Matrix',
      layersCount: 4,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Neutralization of Saturn afflictions (Saadhe Saati), banishment of fear and spirits, physical stamina, and willpower.',
    historicalPeriod: 'c. 8th Century CE (Sudarshana Samhita / Agastya Samhita)',
    scripturalCitation: {
      scripture: 'Sudarshana Samhita',
      verse: 'Hanumatkavacham 1.1',
      sanskritText: 'पञ्चवक्त्रं महाभीमं त्रिपञ्चनयनैर्युतम् । बाहुभिर्दशभिर्युक्तं सर्वकामार्थसिद्धिदम्...',
      translation: 'Possessing five divine faces, fifteen eyes, and ten arms, the granter of all desires and spiritual ends.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['sudarshana_chakra_yantra', 'mahamrityunjaya_yantra']
  },
  {
    id: 'pratyangira_yantra',
    names: {
      sa: 'श्रीमहाविपरीत प्रत्यङ्गिरा यन्त्रम्',
      iast: 'Pratyaṅgirā Yantram',
      hi: 'प्रत्यङ्गिरा यन्त्र',
      en: 'Maha Viparita Pratyangira Yantra (Reversal of Malice Cosmogram)',
      gu: 'પ્રત્યંગિરા યંત્ર'
    },
    deity: 'Goddess Maha Viparita Pratyangira (Lion-Faced Aparajita)',
    mantra: 'Om Kshraum Pratyangirayai Namah / Om Hreem Kshraum Pratyangire Hum Phat Swaha',
    geometrySpec: {
      primaryShape: '16 Flames, 16 Petals, 8 Petals, Shatkona & Inverted Yoni',
      layersCount: 6,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Instant reversal of black magic, curses, evil eye, total protection against enemies, and reclaiming spiritual sovereignty.',
    historicalPeriod: 'Vedic / Atharva Veda Parishishta (Pratyangira Kalpa)',
    scripturalCitation: {
      scripture: 'Pratyangira Kalpa',
      verse: 'Patala 1.3',
      sanskritText: 'ॐ अस्य श्रीमहाविपरीतप्रत्यङ्गिरामन्त्रस्य अङ्गिरा ऋषिः... क्षौं बीजम्...',
      translation: 'Of this Sri Maha Viparita Pratyangira mantra, the Seer is Rishi Angirasa and the seed is Kshraum.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['durga_bisa_yantra', 'sudarshana_chakra_yantra', 'kali_yantra']
  },
`;

let sgkbContent = fs.readFileSync(sgkbPath, 'utf8');
if (!sgkbContent.includes('durga_bisa_yantra')) {
  const lastBracket = sgkbContent.lastIndexOf('];');
  if (lastBracket !== -1) {
    sgkbContent = sgkbContent.slice(0, lastBracket) + sgkbEntries + '\n];\n';
    fs.writeFileSync(sgkbPath, sgkbContent, 'utf8');
    console.log('Appended 4 protection yantras to canonical-library-dataset.ts!');
  } else {
    console.error('Could not find closing ]; in canonical-library-dataset.ts');
  }
} else {
  console.log('Protection yantras already exist in canonical-library-dataset.ts');
}
