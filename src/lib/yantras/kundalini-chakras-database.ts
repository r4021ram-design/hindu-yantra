/**
 * Canonical 7 Kundalini Chakras Shastric Database
 * Based on Ṣaṭ-Cakra-Nirūpaṇa (Swami Purnananda Paramahamsa),
 * Goraksha Paddhati, and Rudrayamala Tantra.
 * 
 * Single authoritative source of truth for the 7 Energy Centers (षट्चक्र + सहस्रार)
 * incorporating 14-parameter Shastric matrices, Devanagari Sanskrit verses,
 * anatomical locations, Tattwa mandalas, Yoginis, Dhatus, Granthis, and Sadhanas.
 */

export interface ChakraTattwaInfo {
  nameSanskrit: string;
  nameEnglish: string;
  shapeSanskrit: string;
  shapeEnglish: string;
  color: string;
  tanmatra: string;
  jnanendriya: string;
  karmendriya: string;
}

export interface ChakraPresidingDeity {
  name: string;
  nameSanskrit: string;
  faces: number;
  color: string;
  attributes: string[];
}

export interface ChakraYoginiShakti {
  name: string;
  nameSanskrit: string;
  faces: number;
  color: string;
  dhatuRuled: string;
  dhatuSanskrit: string;
  attributes: string[];
  foodOrOffering: string;
}

export interface ChakraGranthiInfo {
  name: string;
  nameSanskrit: string;
  spiritualHurdle: string;
  liberationState: string;
}

export interface ChakraShastricVerse {
  sourceScripture: string;
  verseNumber: string;
  sanskritSloka: string;
  transliteration: string;
  hindiMeaning: string;
  englishMeaning: string;
}

export interface ChakraSadhanaProtocol {
  mudraAndBandha: string;
  pranayamaRatio: string;
  dhyanaFocus: string;
  phalaSiddhi: string;
}

export interface KundaliniChakraEntry {
  id: string;
  order: number;
  nameSanskrit: string;
  nameHindi: string;
  nameEnglish: string;
  anatomicalLocation: string;
  anatomicalLocationSanskrit: string;
  spinalLevel: string;
  petalsCount: number;
  petalColor: string;
  petalSyllables: string[];
  tattwa: ChakraTattwaInfo;
  bijaMantra: string;
  bijaVahana: string;
  bijaVahanaSanskrit: string;
  presidingShiva: ChakraPresidingDeity;
  presidingYogini: ChakraYoginiShakti;
  dhatuRuled: string;
  dhatuSanskrit: string;
  granthi: ChakraGranthiInfo | null;
  rulingPlanet: string;
  rulingPlanetSanskrit: string;
  rulingGemstone: string;
  vayuPrana: string;
  primaryGuna: 'Tamas' | 'Rajas' | 'Sattva' | 'Gunatita' | 'Rajas-Sattva';
  svgPath: string;
  shastricVerses: ChakraShastricVerse[];
  sadhanaProtocol: ChakraSadhanaProtocol;
}

export const KUNDALINI_CHAKRAS_DATABASE: KundaliniChakraEntry[] = [
  // 1. MULADHARA CHAKRA
  {
    id: 'muladhara',
    order: 1,
    nameSanskrit: 'मूलाधार चक्रम्',
    nameHindi: 'मूलाधार चक्र',
    nameEnglish: 'Muladhara Chakra (Root Center)',
    anatomicalLocation: 'Perineum (between anus and genitals) at the base of Sushumna Nadi',
    anatomicalLocationSanskrit: 'गुदमेढ्रान्तराल (कन्दोर्ध्व भाग)',
    spinalLevel: 'Coccygeal / Sacral Plexus',
    petalsCount: 4,
    petalColor: 'Crimson Red (रक्त वर्ण)',
    petalSyllables: ['वं', 'शं', 'षं', 'सं'],
    tattwa: {
      nameSanskrit: 'पृथिवी तत्त्व (भूमि)',
      nameEnglish: 'Earth Element',
      shapeSanskrit: 'पीत चतुष्कोण (अष्टशूल-संयुत)',
      shapeEnglish: 'Yellow Square with 8 Vajra-spears',
      color: '#F2C94C',
      tanmatra: 'Gandha (Smell / गन्ध)',
      jnanendriya: 'Ghrana (Nose / नासिका)',
      karmendriya: 'Guda (Excretory / पायु)'
    },
    bijaMantra: 'लं',
    bijaVahana: 'Seven-trunked Airavata Elephant (Cosmic Stability)',
    bijaVahanaSanskrit: 'सप्तशुण्ड ऐरावत हस्ती',
    presidingShiva: {
      name: 'Brahma / Dviranda Child Shiva',
      nameSanskrit: 'बाल-ब्रह्मा',
      faces: 4,
      color: 'Golden Radiant (स्वर्णप्रभ)',
      attributes: ['Staff (Danda)', 'Rosary (Akshamala)', 'Waterpot (Kamandalu)', 'Abhaya Mudra']
    },
    presidingYogini: {
      name: 'Dakini Shakti',
      nameSanskrit: 'डाकिनी शक्ति',
      faces: 1,
      color: 'Brilliant Crimson with 3 red glowing eyes (रक्तनयना)',
      dhatuRuled: 'Asthi (Bone tissue)',
      dhatuSanskrit: 'अस्थि धातु',
      attributes: ['Skull-cup (Kapala)', 'Spear (Kheta)', 'Sword (Khadga)', 'Shield (Trishula)'],
      foodOrOffering: 'Payasanna (Sweetened rice porridge / पायस)'
    },
    dhatuRuled: 'Bone (Asthi Dhatu)',
    dhatuSanskrit: 'अस्थि',
    granthi: {
      name: 'Brahma Granthi',
      nameSanskrit: 'ब्रह्मग्रन्थि',
      spiritualHurdle: 'Attachment to physical survival, material possessions, bodily identification, and primal fear of death',
      liberationState: 'Transcending physical fragility, gaining unshakeable grounding, overcoming the fear of physical extinction'
    },
    rulingPlanet: 'Mars & Saturn (Mangala / Shani)',
    rulingPlanetSanskrit: 'मङ्गल / शनि',
    rulingGemstone: 'Red Coral / Garnet (प्रवाल / रक्तमणि)',
    vayuPrana: 'Apana Vayu (Downwards and consolidating energy)',
    primaryGuna: 'Tamas',
    svgPath: '/yantras/chakras/muladhara_chakra.svg',
    shastricVerses: [
      {
        sourceScripture: 'Ṣaṭ-Cakra-Nirūpaṇa',
        verseNumber: 'Verse 4',
        sanskritSloka: 'अधो वक्त्रं पद्मं सुषुम्ना-विवर-मध्यस्थं सुभगं,\nचतुर्भिः पत्रैश्चापि वकारादिसकारान्तैर्युक्तं परम् ।\nसुवर्णामैर्भ्राजत्-कुसुम-सदृशैर्द्योतित-वपुः,\nमूलाधारं नाम प्रथितमवनी-मण्डलमयम् ॥',
        transliteration: 'adho vaktraṁ padmaṁ suṣumnā-vivara-madhyasthaṁ subhagaṁ,\ncaturbhiḥ patraiścāpi vakārādisakārāntairyuktaṁ param |\nsuvarṇāmair bhrājat-kusuma-sadṛśair dyotita-vapuḥ,\nmūlādhāraṁ nāma prathitam avanī-maṇḍalamayam ||',
        hindiMeaning: 'सुषुम्ना नाड़ी के मुख पर अधोमुख चार दलों वाला मूलाधार पद्म स्थित है। इसके दलों पर स्वर्ण वर्ण के चमकते हुए चार मातृका वर्ण "वं, शं, षं, सं" देदीप्यमान हैं। यह पृथ्वी मण्डल से समन्वित है।',
        englishMeaning: 'Attached to the mouth of Sushumna Nadi lies the four-petaled Muladhara Lotus facing downwards. Its petals shine with golden lustre and bear the four sacred Matrika letters from Va to Sa (Vaṁ, Śaṁ, Ṣaṁ, Saṁ), enclosing the golden Earth Mandala.'
      },
      {
        sourceScripture: 'Ṣaṭ-Cakra-Nirūpaṇa',
        verseNumber: 'Verse 9',
        sanskritSloka: 'तन्मध्ये तडिदाकारा विजिताद्भुत-विद्युता ।\nत्रिवलयाकारा सा कुण्डलिनी परदेवता ॥\nसुप्ता सर्पसमाकारा कोटि-विद्युत्-समप्रभा ।\nब्रह्मद्वार-मुखं व्याप्य प्रसुप्ता मन्दिरोदरे ॥',
        transliteration: 'tanmadhye taḍidākārā vijitādbhuta-vidyutā |\ntrivalayākārā sā kuṇḍalinī paradevatā ||\nsuptā sarpasamākārā koṭi-vidyut-samaprabhā |\nbrahmadvāra-mukhaṁ vyāpya prasuptā mandirodare ||',
        hindiMeaning: 'उस त्रिकोण के भीतर करोड़ो बिजलियों के समान तेजमयी, साढ़े तीन फेरे लगाकर सोई हुई सर्पाकार कुण्डलिनी महाशक्ति सुषुम्ना के ब्रह्मद्वार मुख को आच्छादित करके स्थित है।',
        englishMeaning: 'Within that Traipura triangle rests the Supreme Devi Kundalini, spiraling in 3.5 coils like a sleeping serpent, luminous as ten million flashes of lightning, covering with Her subtle mouth the entrance to the Brahma Nadi.'
      }
    ],
    sadhanaProtocol: {
      mudraAndBandha: 'Mula Bandha (Perineal contraction) and Ashvini Mudra',
      pranayamaRatio: 'Puraka 4 : Kumbhaka 16 : Rechaka 8 (Apana-Prana unification)',
      dhyanaFocus: 'Focus on the golden yellow square, visualizing Svayambhu Linga wrapped in radiant golden serpentine fire while chanting Lam.',
      phalaSiddhi: 'Conquest of the Earth element, freedom from all physical diseases, mastery of speech, and awakening of creative vitality.'
    }
  },

  // 2. SVADHISHTHANA CHAKRA
  {
    id: 'svadhishthana',
    order: 2,
    nameSanskrit: 'स्वाधिष्ठान चक्रम्',
    nameHindi: 'स्वाधिष्ठान चक्र',
    nameEnglish: 'Svadhishthana Chakra (Sacral Center)',
    anatomicalLocation: 'Spinal column corresponding to the root of the genitals (Lingamula)',
    anatomicalLocationSanskrit: 'मेढ्रमूल (सुषुम्नान्तर्गत स्वाधिष्ठान)',
    spinalLevel: 'Lumbar / Prostatic Plexus (L1–L2)',
    petalsCount: 6,
    petalColor: 'Vermilion / Coral-Orange (विद्रुमप्रभ)',
    petalSyllables: ['बं', 'भं', 'मं', 'यं', 'रं', 'लं'],
    tattwa: {
      nameSanskrit: 'जल / अप् तत्त्व (वरुण मण्डल)',
      nameEnglish: 'Water Element',
      shapeSanskrit: 'शुक्लभ अर्धचन्द्र (शशिशकल)',
      shapeEnglish: 'Luminous White Crescent Moon',
      color: '#80DEEA',
      tanmatra: 'Rasa (Taste / रस)',
      jnanendriya: 'Rasana (Tongue / रसना)',
      karmendriya: 'Upastha (Reproductive / उपस्थ)'
    },
    bijaMantra: 'वं',
    bijaVahana: 'Makara (Legendary amphibious crocodile / Primal unconscious currents)',
    bijaVahanaSanskrit: 'मकर वाहन',
    presidingShiva: {
      name: 'Vishnu (Pervader of Cosmic Harmony)',
      nameSanskrit: 'शङ्ख-चक्र-गदा-पद्मधर श्रीविष्णु',
      faces: 1,
      color: 'Luminous Dark Blue (श्याम वर्ण)',
      attributes: ['Conch (Shankha)', 'Discus (Sudarshana)', 'Mace (Kaumodaki)', 'Lotus (Padma)']
    },
    presidingYogini: {
      name: 'Rakini Shakti',
      nameSanskrit: 'राकिणी शक्ति',
      faces: 1,
      color: 'Deep Blue-Lotus hue (नीलोत्पल-प्रभा), furious eyes, two celestial fangs',
      dhatuRuled: 'Meda (Adipose/Fat tissue and fluid balance)',
      dhatuSanskrit: 'मेद धातु',
      attributes: ['Trident (Trishula)', 'Lotus (Padma)', 'Drum (Damaru)', 'Battle-Axe (Parashu)'],
      foodOrOffering: 'Shuddhodana (Pure consecrated clarified grain / पायसान्न)'
    },
    dhatuRuled: 'Fat / Bodily Fluids (Meda Dhatu)',
    dhatuSanskrit: 'मेद',
    granthi: null,
    rulingPlanet: 'Mercury / Moon (Budha / Chandra)',
    rulingPlanetSanskrit: 'बुध / चन्द्र',
    rulingGemstone: 'Pearl / Moonstone (मुक्ता / चन्द्रकान्तमणि)',
    vayuPrana: 'Vyana Vayu (Pervasive circulation and fluid propulsion)',
    primaryGuna: 'Tamas',
    svgPath: '/yantras/chakras/svadhishthana_chakra.svg',
    shastricVerses: [
      {
        sourceScripture: 'Ṣaṭ-Cakra-Nirūpaṇa',
        verseNumber: 'Verse 14',
        sanskritSloka: 'अथाभ्यन्तरं पद्ममन्यत्सुदीप्तं विशुद्धं\nस्वाधिष्ठानाख्यं विद्रुमप्रभासैः ।\nषड्भिः पत्रैर्बकारादिसान्तैर्विभातं\nवरेण्यं सविन्दु-प्रकाशातिदीप्तम् ॥',
        transliteration: 'athābhyantaraṁ padmam anyat sudīptaṁ viśuddhaṁ\nsvādhiṣṭhānākhyaṁ vidrumaprabhāsaiḥ |\nṣaḍbhiḥ patrair bakārādi-sāntair vibhātaṁ\nvareṇyaṁ sa-vindu-prakāśātidīptam ||',
        hindiMeaning: 'इसके अनन्तर दूसरा पद्म स्वाधिष्ठान नाम से विख्यात है, जो मूलाधार के ऊपर मेढ्रमूल में स्थित है। यह प्रवाल (मूँगे) के समान लाल कान्ति वाले ६ दलों से युक्त है, जिन पर बं, भं, मं, यं, रं, लं वर्ण अंकित हैं।',
        englishMeaning: 'Next within the Sushumna is another luminous lotus called Svadhishthana, located at the root of the genitals. It has six petals shining with the brilliance of vermilion-coral, inscribed with the six letters beginning with Ba and ending with La (Baṁ, Bhaṁ, Maṁ, Yaṁ, Raṁ, Laṁ).'
      },
      {
        sourceScripture: 'Ṣaṭ-Cakra-Nirūpaṇa',
        verseNumber: 'Verse 16',
        sanskritSloka: 'तस्याङ्के वारुणो बीजं वकारः सितवर्णकः ।\nनक्रवाह-समायुक्तः शशाङ्क-शत-शीतलः ॥',
        transliteration: 'tasyāṅke vāruṇo bījaṁ vakāraḥ sitavarṇakaḥ |\nnakravāha-samāyuktaḥ śaśāṅka-śata-śītalaḥ ||',
        hindiMeaning: 'उस अर्धचन्द्र के मध्य में सफेद वर्ण का वरुण बीज "वं" मकर (मगरमच्छ) पर आरूढ़ है, जो सैकड़ों चन्द्रमाओं के समान शीतल एवं सौम्य है।',
        englishMeaning: 'In the lap of that crescent moon rests the Water-Beeja "Vaṁ", white as snow, riding upon a Makara, cool and soothing like a hundred autumn moons.'
      }
    ],
    sadhanaProtocol: {
      mudraAndBandha: 'Vajroli Mudra and Uddiyana preparation',
      pranayamaRatio: 'Puraka 4 : Kumbhaka 12 : Rechaka 8 with Swadhisthana concentration',
      dhyanaFocus: 'Contemplate the pure silver crescent moon floating over calm primordial waters, dissolving all subconscious obsessions.',
      phalaSiddhi: 'Complete conquest of water and sensual delusion, mastery over poetic flow and eloquence, eradication of internal lust and emotional volatility.'
    }
  },

  // 3. MANIPURA CHAKRA
  {
    id: 'manipura',
    order: 3,
    nameSanskrit: 'मणिपूर चक्रम्',
    nameHindi: 'मणिपूर चक्र',
    nameEnglish: 'Manipura Chakra (Solar Plexus Center)',
    anatomicalLocation: 'Spinal column directly behind the Navel (Nabhi-mula)',
    anatomicalLocationSanskrit: 'नाभिमूल (मणिपूर पद्म)',
    spinalLevel: 'Solar Plexus / Celiac Axis (T10–L1)',
    petalsCount: 10,
    petalColor: 'Heavy Raincloud Blue (मेघनील / श्यामरक्त)',
    petalSyllables: ['डं', 'ढं', 'णं', 'तं', 'थं', 'दं', 'धं', 'नं', 'पं', 'फं'],
    tattwa: {
      nameSanskrit: 'वह्नि / अग्नि तत्त्व (तेजस्)',
      nameEnglish: 'Fire Element',
      shapeSanskrit: 'रक्त त्रिकोण (त्रि-स्वस्तिक शोभित)',
      shapeEnglish: 'Red Inverted Triangle Adorned with 3 Swastikas',
      color: '#FF5252',
      tanmatra: 'Rupa (Form / Vision / रूप)',
      jnanendriya: 'Chakshu (Eyes / नेत्र)',
      karmendriya: 'Pada (Feet / पाद - locomotion)'
    },
    bijaMantra: 'रं',
    bijaVahana: 'Fierce Ram (Mesha - dynamic surging vitality and metabolic drive)',
    bijaVahanaSanskrit: 'मेष वाहन',
    presidingShiva: {
      name: 'Rudra (The Transformer and Destroyer of Imperfection)',
      nameSanskrit: 'वृद्ध-रुद्र',
      faces: 1,
      color: 'Vermilion Red covered in sacred ash (सिन्दूर-विभूषित)',
      attributes: ['Trident (Trishula)', 'Fire flame (Agni)', 'Abhaya Mudra', 'Varada Mudra']
    },
    presidingYogini: {
      name: 'Lakini Shakti',
      nameSanskrit: 'लाकिणी शक्ति',
      faces: 3,
      color: 'Dark blue like raincloud, four-armed, red ferocious eyes',
      dhatuRuled: 'Mamsa (Muscle tissue and flesh metabolism)',
      dhatuSanskrit: 'मांस धातु',
      attributes: ['Thunderbolt (Vajra)', 'Arrow of Fire (Shakti)', 'Abhaya Mudra', 'Varada Mudra'],
      foodOrOffering: 'Guda-anna (Jaggery-infused hot sacred rice preparation)'
    },
    dhatuRuled: 'Muscle / Flesh (Mamsa Dhatu)',
    dhatuSanskrit: 'मांस',
    granthi: null,
    rulingPlanet: 'Sun & Mars (Surya / Mangala)',
    rulingPlanetSanskrit: 'सूर्य / मङ्गल',
    rulingGemstone: 'Ruby / Yellow Topaz (माणिक्य / पुखराज)',
    vayuPrana: 'Samana Vayu (Digestion, gastric furnace, energetic equilibrium)',
    primaryGuna: 'Rajas',
    svgPath: '/yantras/chakras/manipura_chakra.svg',
    shastricVerses: [
      {
        sourceScripture: 'Ṣaṭ-Cakra-Nirūpaṇa',
        verseNumber: 'Verse 19',
        sanskritSloka: 'तदूर्ध्वे नाभौ तु दशदल-युतं मणिपूरं\nमहामेघ-द्योतं डफ-दल-युतं वर्ण-सुभगम् ।\nतदन्तस्तैजसं मण्डलं अतिरक्तं त्रिकोणं\nत्रिभिः स्वस्तिकैश्च समन्ताद् विचित्रम् ॥',
        transliteration: 'tad-ūrdhve nābhau tu daśadala-yutaṁ maṇipūraṁ\nmahāmegha-dyotaṁ ḍapha-dala-yutaṁ varṇa-subhagam |\ntadantas taijasaṁ maṇḍalaṁ atiraktaṁ trikoṇaṁ\ntribhiḥ svastikaiśca samantād vicitram ||',
        hindiMeaning: 'स्वाधिष्ठान के ऊपर नाभिदेश में मणिपूर चक्र स्थित है। यह मेघ के समान कान्ति वाले १० दलों से युक्त है, जिन पर "डं" से लेकर "फं" तक १० वर्ण सुशोभित हैं। इसके भीतर अग्नि का अत्यन्त लाल त्रिकोण मण्डल है, जिसकी तीनों भुजाएँ स्वस्तिक चिह्नों से विभूषित हैं।',
        englishMeaning: 'Above it at the navel is the ten-petaled lotus of Manipura, colored like dark storm clouds. On its petals are the letters from Ḍa to Pha (Ḍaṁ to Phaṁ). Within it is the brilliant crimson triangular Mandala of Fire, adorned on its outer corners with three sacred Swastikas.'
      },
      {
        sourceScripture: 'Ṣaṭ-Cakra-Nirūpaṇa',
        verseNumber: 'Verse 20',
        sanskritSloka: 'ध्यायेद्वैश्वानर-बीजं रकारं मेष-वाहनम् ।\nबालार्क-किरण-दीप्तं लाकिण्या सहितं परम् ॥',
        transliteration: 'dhyāyed vaiśvānara-bījaṁ rakāraṁ meṣa-vāhanam |\nbālārka-kiraṇa-dīptaṁ lākiṇyā sahitaṁ param ||',
        hindiMeaning: 'उक्त त्रिकोण के मध्य में बाल-सूर्य के समान चमकने वाले, मेष पर सवार अग्निबीज "रं" का लाकिणी शक्ति के साथ ध्यान करना चाहिए।',
        englishMeaning: 'One should meditate within that triangle on the Fire-Beeja "Raṁ", mounted on a ram, blazing like the rising morning sun, along with the divine Lakini Shakti.'
      }
    ],
    sadhanaProtocol: {
      mudraAndBandha: 'Uddiyana Bandha and Agnisara Kriya',
      pranayamaRatio: 'Bhastrika Pranayama followed by Kumbhaka 16 counts',
      dhyanaFocus: 'Concentrate on the blazing solar gem at the navel, burning all metabolic lethargy, fear, and sluggish digestion into pure brilliance.',
      phalaSiddhi: 'Ability to generate internal heat, power of total transmutation, destruction of physical decay, and unshakeable willpower.'
    }
  },

  // 4. ANAHATA CHAKRA
  {
    id: 'anahata',
    order: 4,
    nameSanskrit: 'अनाहत चक्रम्',
    nameHindi: 'अनाहत चक्र',
    nameEnglish: 'Anahata Chakra (Heart Center)',
    anatomicalLocation: 'Cardiac center of the Sushumna Nadi in the middle of the chest',
    anatomicalLocationSanskrit: 'हृदय देश (सुषुम्ना मध्यवर्ती द्वादशदल पद्म)',
    spinalLevel: 'Cardiac Plexus (T4–T5)',
    petalsCount: 12,
    petalColor: 'Bandhuka Flower Crimson (बन्धूकपुष्प सन्निभ)',
    petalSyllables: ['कं', 'खं', 'गं', 'घं', 'ङं', 'चं', 'छं', 'जं', 'झं', 'ञं', 'टं', 'ठं'],
    tattwa: {
      nameSanskrit: 'वायु तत्त्व (पवन मण्डल)',
      nameEnglish: 'Air Element',
      shapeSanskrit: 'धूम्राकार षट्कोण (द्वि-त्रिकोण परस्पर-गुम्फित)',
      shapeEnglish: 'Smoky Interlocking Hexagram (Shatkona)',
      color: '#90A4AE',
      tanmatra: 'Sparsha (Touch / स्पर्श)',
      jnanendriya: 'Tvak (Skin / त्वक्)',
      karmendriya: 'Pani (Hands / पाणि - giving and receiving)'
    },
    bijaMantra: 'यं',
    bijaVahana: 'Swift Black Antelope (Krishnamriga - weightlessness, agility, sensitivity)',
    bijaVahanaSanskrit: 'कृष्णमृग वाहन',
    presidingShiva: {
      name: 'Isha (Supreme Lord of Unconditional Benevolence)',
      nameSanskrit: 'ईश / पिनाकी शिव',
      faces: 1,
      color: 'Pure White like Camphor (कर्पूर-गौर)',
      attributes: ['Trident (Trishula)', 'Skull staff (Khatvanga)', 'Abhaya Mudra', 'Varada Mudra']
    },
    presidingYogini: {
      name: 'Kakini Shakti',
      nameSanskrit: 'काकिणी शक्ति',
      faces: 1,
      color: 'Lustrous Golden (पीताभा / स्वर्णवर्णा), joyous and compassionate',
      dhatuRuled: 'Rakta (Blood circulation and vitality)',
      dhatuSanskrit: 'रक्त धातु',
      attributes: ['Noose (Pasha)', 'Skull-cup (Kapala)', 'Abhaya Mudra', 'Varada Mudra'],
      foodOrOffering: 'Haridranna (Turmeric-consecrated aromatic rice porridge)'
    },
    dhatuRuled: 'Blood / Cardiovascular (Rakta Dhatu)',
    dhatuSanskrit: 'रक्त',
    granthi: {
      name: 'Vishnu Granthi',
      nameSanskrit: 'विष्णुग्रन्थि',
      spiritualHurdle: 'Attachment to emotional codependency, personal love vs universal compassion, spiritual delusion, and heart ties',
      liberationState: 'Unconditioned divine love (Maitri & Karuna), hearing the unstruck Shabda Brahman (Anahata Nada), universal brotherhood'
    },
    rulingPlanet: 'Venus (Shukra)',
    rulingPlanetSanskrit: 'शुक्र',
    rulingGemstone: 'Emerald / Diamond (मरकत / वज्र)',
    vayuPrana: 'Prana Vayu (Inhalation, heart pulsation, life-force absorption)',
    primaryGuna: 'Rajas-Sattva',
    svgPath: '/yantras/chakras/anahata_chakra.svg',
    shastricVerses: [
      {
        sourceScripture: 'Ṣaṭ-Cakra-Nirūpaṇa',
        verseNumber: 'Verse 22',
        sanskritSloka: 'हृदि स्यादनाहत-पद्मं सुदीप्तं\nकठाद्यैर्दलैर्द्वादशैरन्वितं च ।\nअतिधूम्र-वर्णेन वायोस्तु लिङ्गे\nषट्कोणेन युक्तं मनोहारि-दीप्तम् ॥',
        transliteration: 'hṛdi syād anāhata-padmaṁ sudīptaṁ\nkaṭhādyair dalair dvādaśair anvitaṁ ca |\natidhūmra-varṇena vāyos tu liṅge\nṣaṭkoṇena yuktaṁ manohāri-dīptam ||',
        hindiMeaning: 'हृदय देश में अत्यन्त देदीप्यमान अनाहत पद्म स्थित है। यह "कं" से लेकर "ठं" तक १२ वर्णों से सुशोभित बन्धूक पुष्प के समान कान्ति वाले १२ दलों से युक्त है। इसके मध्य में धूम्र वर्ण का वायु-मण्डल षट्कोण रूप में स्थित है।',
        englishMeaning: 'In the heart space resides the brilliant twelve-petaled Anahata lotus, bearing the 12 sacred Matrika letters from Ka to Ṭha (Kaṁ to Ṭhaṁ). Within it is the smoky-hued hexagonal Mandala of Air, formed of two interlocking triangles.'
      },
      {
        sourceScripture: 'Ṣaṭ-Cakra-Nirūpaṇa',
        verseNumber: 'Verse 25',
        sanskritSloka: 'तन्मध्ये बाणलिङ्गं कनक-रुचिमयं सूर्य-कोटि-प्रकाशं\nतस्योर्ध्वे हंस-रूपं निभृत-पवनकं दीपदग्धप्रदीपम् ।\nज्ञानोत्कृष्टं परेशं भुवन-सुखकरं ध्यायतो मोक्ष-सिद्धिः\nप्राणैः सार्धं प्रयाति प्रवर-मुनि-वरः सर्व-सिद्धैः स पूज्यः ॥',
        transliteration: 'tanmadhye bāṇaliṅgaṁ kanaka-rucimayaṁ sūrya-koṭi-prakāśaṁ\ntasyordhve haṁsa-rūpaṁ nibhṛta-pavanakaṁ dīpadagdha-pradīpam |\njñānotkṛṣṭaṁ pareśaṁ bhuvana-sukhakaraṁ dhyāyato mokṣa-siddhiḥ\nprāṇaiḥ sārdhaṁ prayāti pravara-muni-varaḥ sarva-siddhaiḥ sa pūjyaḥ ||',
        hindiMeaning: 'उस षट्कोण के मध्य में स्वर्ण के समान देदीप्यमान बाणलिङ्ग स्थित है। उसके ऊपर वायुरहित स्थान में रखे दीपक की अविचल शिखा के समान हंस (जीवात्मा) अखण्ड रूप से प्रकाशित है। इसका ध्यान करने वाले को मोक्ष सिद्धि प्राप्त होती है।',
        englishMeaning: 'In the center of that hexagram shines the golden Baanalinga, brilliant like ten million suns. Above it, like the steady, unmoving flame of a lamp in a windless sanctuary, shines the Hamsa (the eternal Self). Meditating on this, the yogi attains instant liberation.'
      }
    ],
    sadhanaProtocol: {
      mudraAndBandha: 'Hridaya Mudra and Jalandhara Bandha',
      pranayamaRatio: 'Nadi Shodhana Pranayama with 1:4:2 rhythm while listening to Anahata Nada',
      dhyanaFocus: 'Meditate on the steady flame inside the golden triangle at the heart, experiencing the unstruck cosmic vibration (Aum/Omkara).',
      phalaSiddhi: 'Attainment of Khechari state, complete control of breath, divine compassion, and spontaneous manifestation of desires.'
    }
  },

  // 5. VISHUDDHA CHAKRA
  {
    id: 'vishuddha',
    order: 5,
    nameSanskrit: 'विशुद्ध चक्रम्',
    nameHindi: 'विशुद्ध चक्र',
    nameEnglish: 'Vishuddha Chakra (Throat Center)',
    anatomicalLocation: 'Throat cavity at the base of the neck (Kantha-mula)',
    anatomicalLocationSanskrit: 'कण्ठमूल (विशुद्ध चक्र)',
    spinalLevel: 'Cervical Plexus / Thyroid Axis (C3–C7)',
    petalsCount: 16,
    petalColor: 'Smoky Lilac / Silver-Purple (धूम्र-नील / स्निग्ध जाम्बूनद)',
    petalSyllables: ['अं', 'आं', 'इं', 'ईं', 'उं', 'ऊं', 'ऋं', 'ॠं', 'ऌं', 'ॡं', 'एं', 'ऐं', 'ओं', 'औं', 'अं', 'अः'],
    tattwa: {
      nameSanskrit: 'आकाश तत्त्व (व्योम मण्डल)',
      nameEnglish: 'Space / Ether Element',
      shapeSanskrit: 'पूर्णचन्द्र मण्डल (शुभ्र वृत्त)',
      shapeEnglish: 'Pure Circular Mandala like the Full Autumn Moon',
      color: '#B39DDB',
      tanmatra: 'Shabda (Sound / शब्द)',
      jnanendriya: 'Shrotra (Ears / कर्ण)',
      karmendriya: 'Vak (Vocal cords / Speech / वाक्)'
    },
    bijaMantra: 'हं',
    bijaVahana: 'Seven-trunked Snow-white Airavata Elephant (Infinite expansiveness of space)',
    bijaVahanaSanskrit: 'शुक्ल ऐरावत गज',
    presidingShiva: {
      name: 'Panchamukhi Sadashiva (Eternal Source of Revelation)',
      nameSanskrit: 'पञ्चमुख सदाशिव',
      faces: 5,
      color: 'Half snow-white and half golden (शम्भु / अर्धनारीश्वर रूप)',
      attributes: ['Trident', 'Battle-Axe', 'Sword', 'Vajra', 'Fire', 'Serpent', 'Bell', 'Noose', 'Abhaya', 'Varada']
    },
    presidingYogini: {
      name: 'Shakini Shakti',
      nameSanskrit: 'शाकिणी शक्ति',
      faces: 5,
      color: 'Pure White (श्वेत वर्णा), radiant with divine knowledge',
      dhatuRuled: 'Tvak (Skin / Sensory boundary and acoustic resonance)',
      dhatuSanskrit: 'त्वक् धातु',
      attributes: ['Bow (Dhanus)', 'Arrow (Bana)', 'Noose (Pasha)', 'Elephant Goad (Ankusha)'],
      foodOrOffering: 'Madhu-payasa (Honey-infused sacred ambrosial offering)'
    },
    dhatuRuled: 'Skin / Integumentary / Acoustic (Tvak Dhatu)',
    dhatuSanskrit: 'त्वक्',
    granthi: null,
    rulingPlanet: 'Jupiter (Brihaspati)',
    rulingPlanetSanskrit: 'बृहस्पति / गुरु',
    rulingGemstone: 'Yellow Sapphire / Blue Lace Agate (पुखराज)',
    vayuPrana: 'Udana Vayu (Ascending breath, speech projection, transcendence)',
    primaryGuna: 'Sattva',
    svgPath: '/yantras/chakras/vishuddha_chakra.svg',
    shastricVerses: [
      {
        sourceScripture: 'Ṣaṭ-Cakra-Nirūpaṇa',
        verseNumber: 'Verse 28',
        sanskritSloka: 'कण्ठे विशुद्धं कमलाभ-कान्तिं\nस्वरैश्च षोडश-दलैः समन्तात् ।\nआकाश-रूपं सित-वृत्त-युक्तं\nहकार-बीजं गज-पृष्ठ-संस्थम् ॥',
        transliteration: 'kaṇṭhe viśuddhaṁ kamalābha-kāntiṁ\nsvaraiśca ṣoḍaśa-dalaiḥ samantāt |\nākāśa-rūpaṁ sita-vṛtta-yuktaṁ\nhakāra-bījaṁ gaja-pṛṣṭha-saṁstham ||',
        hindiMeaning: 'कण्ठ देश में १६ दलों वाला विशुद्ध चक्र स्थित है। इस पर १६ मातृका स्वर (अं से अः तक) अंकित हैं। इसके मध्य में आकाश तत्त्व का शुक्ल वृत्ताकार मण्डल है, जिसमें श्वेत ऐरावत हाथी पर आकाश-बीज "हं" विराजित है।',
        englishMeaning: 'In the throat is the sixteen-petaled Vishuddha Lotus shining with smoky purple radiance. On its petals are inscribed the sixteen Sanskrit vowels from Aṁ to Aḥ. In its center is the circular white Mandala of Ether, where the Bija "Haṁ" sits mounted upon a snow-white elephant.'
      },
      {
        sourceScripture: 'Ṣaṭ-Cakra-Nirūpaṇa',
        verseNumber: 'Verse 31',
        sanskritSloka: 'अत्र ज्ञानेन शान्तेन पश्यन्तः सर्व-वेदिनः ।\nकविर्भवति सर्वज्ञो नित्य-तृप्तो महामनाः ॥',
        transliteration: 'atra jñānena śāntena paśyantaḥ sarva-vedinaḥ |\nkavir bhavati sarvajño nitya-tṛpto mahāmanāḥ ||',
        hindiMeaning: 'इस विशुद्ध चक्र में ध्यान करने वाला साधक शांत ज्ञान से युक्त होकर तीनों कालों का ज्ञाता (त्रिकालज्ञ), अमर काव्यों का प्रणेता, नित्य तृप्त तथा महान् मन वाला हो जाता है।',
        englishMeaning: 'By contemplating this Vishuddha center with purified awareness, the practitioner becomes omniscient, a master poet of transcendental verses, eternally contented, and recognized as a sovereign sage.'
      }
    ],
    sadhanaProtocol: {
      mudraAndBandha: 'Jalandhara Bandha (Throat lock) and Khechari Mudra',
      pranayamaRatio: 'Ujjayi Pranayama with deep silent humming resonant vibration',
      dhyanaFocus: 'Visualize the vast luminous ocean of space within the throat, receiving the nectar dripping from Lalana and Bindu chakras.',
      phalaSiddhi: 'Vak Siddhi (spontaneous truth of whatever is spoken), immunity to cosmic poisons, complete mastery over sound and mantra.'
    }
  },

  // 6. AJNA CHAKRA
  {
    id: 'ajna',
    order: 6,
    nameSanskrit: 'आज्ञा चक्रम्',
    nameHindi: 'आज्ञा चक्र',
    nameEnglish: 'Ajna Chakra (Third Eye / Command Center)',
    anatomicalLocation: 'Mid-eyebrow center (Bhrumadhya) directly inside the cavern of the third ventricle',
    anatomicalLocationSanskrit: 'भ्रूमध्य (सुषुम्ना शीर्ष - आज्ञा चक्र)',
    spinalLevel: 'Cavernous Plexus / Pineal-Pituitary Axis',
    petalsCount: 2,
    petalColor: 'Moon-White / Translucent (हिमकर शुभ्र)',
    petalSyllables: ['हं', 'क्षं'],
    tattwa: {
      nameSanskrit: 'मनस् तत्त्व / महत्तत्त्व (शुद्ध ज्ञान)',
      nameEnglish: 'Mind / Trans-Elemental Cosmic Consciousness',
      shapeSanskrit: 'योनि त्रिकोण (इतरलिङ्ग-संयुक्त)',
      shapeEnglish: 'Pure Inverted Yoni Triangle Enclosing Lightning Itara Linga',
      color: '#FFFFFF',
      tanmatra: 'Ahamkara / Chitta (Pure Cognition / चिन्तन)',
      jnanendriya: 'Manas (Inner Mind / अन्तर्मन)',
      karmendriya: 'Ajnana Nivritti (Direct intuitive command / संकल्प)'
    },
    bijaMantra: 'ॐ',
    bijaVahana: 'Nada-Bindu (Soundless Supreme Resonance / हंस)',
    bijaVahanaSanskrit: 'नाद-बिन्दु',
    presidingShiva: {
      name: 'Shambhu / Paramashiva (The Formless Absolute in Light Form)',
      nameSanskrit: 'परमशिव / शम्भु',
      faces: 1,
      color: 'Blazing Lightning Radiance (तडिदाकार)',
      attributes: ['Jnana Mudra', 'Akshamala', 'Abhaya Mudra', 'Trishula']
    },
    presidingYogini: {
      name: 'Hakini Shakti',
      nameSanskrit: 'हाकिणी शक्ति',
      faces: 6,
      color: 'Pure White (शुभ्राङ्गी), seated on a white lotus, radiating supreme wisdom',
      dhatuRuled: 'Majja (Nervous system, bone marrow, and subtle neuro-transmitters)',
      dhatuSanskrit: 'मज्जा धातु',
      attributes: ['Book (Pustaka)', 'Rosary (Akshamala)', 'Damaru', 'Kapala', 'Jnana Mudra', 'Abhaya Mudra'],
      foodOrOffering: 'Haridranna / Kheer (Golden ambrosial offering)'
    },
    dhatuRuled: 'Nerve Marrow / Neuro-matrix (Majja Dhatu)',
    dhatuSanskrit: 'मज्जा',
    granthi: {
      name: 'Rudra Granthi',
      nameSanskrit: 'रुद्रग्रन्थि',
      spiritualHurdle: 'Attachment to psychic powers (Siddhis), subtle ego, spiritual superiority, and duality between observer and observed',
      liberationState: 'Dissolution of the separate ego, non-dual perception (Advaita), direct vision of the inner guru, entry into Sahasrara'
    },
    rulingPlanet: 'Jupiter & Ketu (Guru / Ketu)',
    rulingPlanetSanskrit: 'गुरु / केतु',
    rulingGemstone: 'Amethyst / Diamond / Lapis Lazuli (वैक्रान्त / हीरक)',
    vayuPrana: 'Prana-Apana Aikya (Supreme unified breath through Sushumna)',
    primaryGuna: 'Sattva',
    svgPath: '/yantras/chakras/ajna_chakra.svg',
    shastricVerses: [
      {
        sourceScripture: 'Ṣaṭ-Cakra-Nirūpaṇa',
        verseNumber: 'Verse 32',
        sanskritSloka: 'आज्ञानामामबुजं तद् हिमकर-सदृशं ध्यान-धाम प्रकाशं\nहक्षाभ्यां वै कलाभ्यां परिलसित-वपुर्नेत्र-योर्मध्य-देशे ।\nतस्यान्तस्त्रिकोणे तडिदिव विलसद् रूपमत्यन्त-गुह्यं\nलिङ्गं तच्चेतराख्यं दुरधिगम-पदं वेद-शास्त्रैर्न दृष्टम् ॥',
        transliteration: 'ājñā-nāmāmbujaṁ tad himakara-sadṛśaṁ dhyāna-dhāma prakāśaṁ\nhakṣābhyāṁ vai kalābhyāṁ parilasita-vapur netrayor madhya-deśe |\ntasyāntas trikoṇe taḍid iva vilasad rūpam atyanta-guhyaṁ\nliṅgaṁ tac cetarākhyaṁ duradhigama-padaṁ veda-śāstrair na dṛṣṭam ||',
        hindiMeaning: 'दोनों नेत्रों के मध्य (भ्रूमध्य) में आज्ञा चक्र नामक पद्म चन्द्रमा के समान शुभ्र कान्ति से जगमगा रहा है। यह "हं" और "क्षं" दो दलों से युक्त है। इसके भीतर एक योनि त्रिकोण में बिजली की कौंध के समान दैदीप्यमान "इतरलिङ्ग" प्रतिष्ठित है।',
        englishMeaning: 'Between the eyebrows is the Ajna lotus, shining like the autumn moon. Its two petals bear the letters Ha and Kṣa (Haṁ and Kṣaṁ). Within its inverted triangle blazes the supreme, deeply secret Itara Linga, flashing like a streak of pure lightning.'
      },
      {
        sourceScripture: 'Ṣaṭ-Cakra-Nirūpaṇa',
        verseNumber: 'Verse 34',
        sanskritSloka: 'तस्यान्तश्चक्र-मध्ये प्रणव-विलसितं दीप-तुल्यं स्वरूपं\nध्यायेन्मौन-व्रती स प्रणव-मय-वपुः सर्व-वेदान्त-वेद्यः ।\nतस्यैतज्ज्ञान-योगाद् भवति विगलिता सर्व-संसार-माया\nसोऽहंभावेन पूर्णो भवति स पुरुषः शङ्करात्मा स्वयं सः ॥',
        transliteration: 'tasyāntaś-cakra-madhye praṇava-vilasitaṁ dīpa-tulyaṁ svarūpaṁ\ndhyāyen mauna-vratī sa praṇavamaya-vapuḥ sarva-vedānta-vedyaḥ |\ntasyaitaj-jñāna-yogād bhavati vigalitā sarva-saṁsāra-māyā\nso\'haṁ-bhāvena pūrṇo bhavati sa puruṣaḥ śaṅkarātmā svayaṁ saḥ ||',
        hindiMeaning: 'उस चक्र के मध्य में प्रणव (ॐ) की ज्योति अखण्ड दीपक के समान जल रही है। जो साधक मौन होकर इसका ध्यान करता है, उसकी समस्त संसार-माया विगलित हो जाती है और वह "सोऽहम्" भाव में स्थित होकर स्वयं साक्षात् शङ्कर रूप हो जाता है।',
        englishMeaning: 'Within the center of that cakra, the Pranava (Om) shines like a steady flame. The silent meditator, contemplating this Om-embodied light, melts away the entirety of worldly Maya and, established in the Soham awareness, becomes Shiva Himself.'
      }
    ],
    sadhanaProtocol: {
      mudraAndBandha: 'Shambhavi Mudra (Eyebrow center gazing) and Khechari Mudra',
      pranayamaRatio: 'Pranava Japa with Kevala Kumbhaka (Spontaneous cessation of breath)',
      dhyanaFocus: 'Fix the mind on the flashing lightning bolt within the third eye until the perception of outer light and darkness merges into pure unbroken void-radiance.',
      phalaSiddhi: 'Rudra Granthi Bhedana, direct clairvoyance and telepathy, freedom from karmic bondage, entry into transcendental Samadhi.'
    }
  },

  // 7. SAHASRARA MAHACAKRA
  {
    id: 'sahasrara',
    order: 7,
    nameSanskrit: 'सहस्रार महाचक्रम्',
    nameHindi: 'सहस्रार महाचक्र',
    nameEnglish: 'Sahasrara Mahacakra (Crown Center / Thousand-Petaled Lotus)',
    anatomicalLocation: 'Crown of the head at the fontanelle (Brahmarandhra / Shikhagranthi)',
    anatomicalLocationSanskrit: 'ब्रह्मरन्ध्र (शिखा स्थान - सहस्रदल पद्म)',
    spinalLevel: 'Cerebral Cortex / Craniosacral Apex',
    petalsCount: 1000,
    petalColor: 'Radiant Rainbow Brilliance / Golden Luminous White (सर्ववर्णमय / सुवर्ण-शुभ्र)',
    petalSyllables: ['अकारादि क्षकारान्त (५० मातृका वर्ण × २० आवृत्ति = १००० दल)'],
    tattwa: {
      nameSanskrit: 'तत्त्वातीत / बिन्दुतत्त्व (कैवल्य परमतत्त्व)',
      nameEnglish: 'Beyond Elements (Supreme Non-Dual Consciousness)',
      shapeSanskrit: 'पूर्ण चन्द्र मण्डल (अमाकला-निर्वाणकला-महाबिन्दु)',
      shapeEnglish: 'Full Moon Disk with Ama-Kala Crescent and Supreme Mahabindu',
      color: '#FFA000',
      tanmatra: 'Parashakti Samarasya (Supreme Transcendence)',
      jnanendriya: 'Sarvajnatva (Omniscience / सर्वज्ञता)',
      karmendriya: 'Sarvakartritva (Omnipotence / सर्वकर्तृत्व)'
    },
    bijaMantra: 'ॐ / सोऽहम्',
    bijaVahana: 'Paramahamsa (Transcendental Bird of Liberation / Nectar Drops)',
    bijaVahanaSanskrit: 'परमहंस / अमृत-धारा',
    presidingShiva: {
      name: 'Parama Shiva (The Supreme Undifferentiated Absolute)',
      nameSanskrit: 'परमशिव',
      faces: 0,
      color: 'Infinite Formless Radiance (शून्य-प्रकाश)',
      attributes: ['Non-dual unity with Para Shakti', 'Sat-Chit-Ananda']
    },
    presidingYogini: {
      name: 'Para Shakti / Mahakundalini in Union',
      nameSanskrit: 'पराशक्ति महाकुण्डलिनी',
      faces: 0,
      color: 'Blissful Golden Nectar (परमामृत-स्वरूपा)',
      dhatuRuled: 'Ojas / Shukra / Paramamrita (Subtle divine essence of life)',
      dhatuSanskrit: 'ओजस् / वीर्य / शुक्लामृत',
      attributes: ['Universal mother of all manifestations', 'Spiritual ecstasy (Ananda)'],
      foodOrOffering: 'Kula-amrita (The continuous nectar flowing from the moon mandala)'
    },
    dhatuRuled: 'Ojas / Subtle Ambrosia (Paramamrita Dhatu)',
    dhatuSanskrit: 'ओजस्',
    granthi: null,
    rulingPlanet: 'All Planets Transcended / Cosmic Sun (ब्रह्माण्ड)',
    rulingPlanetSanskrit: 'सर्वग्रह-अतीत (परब्रह्म)',
    rulingGemstone: 'Chintamani / Diamond (चिन्तामणि)',
    vayuPrana: 'Vyapi (All-pervading cosmic stillness)',
    primaryGuna: 'Gunatita',
    svgPath: '/yantras/chakras/sahasrara_chakra.svg',
    shastricVerses: [
      {
        sourceScripture: 'Ṣaṭ-Cakra-Nirūpaṇa',
        verseNumber: 'Verse 40',
        sanskritSloka: 'मूर्ध्नो रन्ध्रे सहस्रार-कमलमल-वपुः सर्व-वर्णाभिरामं\nपूर्णाङ्क-व्यापि-पत्रैः शशिकर-सदृशैरूर्ध्व-वक्त्रैः सुकान्तम् ।\nतन्मध्ये चन्द्रबिम्बे स्फुरित-रुचि-तता साऽमा-कला शोभमाना\nपीयूष-स्रावि-धारा-धवल-तनु-लसद्-व्योम-रूपा महेशा ॥',
        transliteration: 'mūrdhno randhre sahasrāra-kamalam ala-vapuḥ sarva-varṇābhirāmaṁ\npūrṇāṅka-vyāpi-patraiḥ śaśikara-sadṛśair ūrdhva-vaktraiḥ sukāntam |\ntanmadhye candrabimbe sphurita-ruci-tatā sā\'mā-kalā śobhamānā\npīyūṣa-srāvi-dhārā-dhavala-tanu-lasad-vyoma-rūpā maheśā ||',
        hindiMeaning: 'मूर्धा के ब्रह्मरन्ध्र में हजार दलों वाला सहस्रार कमल ऊपर की ओर मुख किए हुए सुशोभित है। यह सभी वर्णों (रंगों) की दिव्य किरणों से दीप्त है। इसके मध्य में चन्द्रबिम्ब है, जिसमें अमृत की अजस्र धारा बरसाने वाली "अमाकला" प्रकाशित है।',
        englishMeaning: 'In the crown aperture shines the faultless thousand-petaled Sahasrara Lotus facing upwards, enchanting with all celestial colors. In its center is the lustrous full moon disk, within which shines the supreme Ama-Kala, shedding streams of divine ambrosia.'
      },
      {
        sourceScripture: 'Ṣaṭ-Cakra-Nirūpaṇa',
        verseNumber: 'Verse 49',
        sanskritSloka: 'समास्ते तस्योर्ध्वे परमसुकुमारं निरुपमं\nमहाशून्यं तत्त्वं शशिशकल-तुल्यं सुरुचिरम् ।\nयतो वाचो निवर्तन्ते अप्राप्य मनसा सह\nतदेव ज्योतिषां ज्योतिः परं निर्वाण-कारणम् ॥',
        transliteration: 'samāste tasyordhve paramasukumāraṁ nirupamaṁ\nmahāśūnyaṁ tattvaṁ śaśiśakala-tulyaṁ suruciram |\nyato vāco nivartante aprāpya manasā saha\ntad eva jyotiṣāṁ jyotiḥ paraṁ nirvāṇa-kāraṇam ||',
        hindiMeaning: 'उस सहस्रार के उच्चतम भाग में परम सुकोमल, अनुपम, महाशून्य स्वरूप परमतत्त्व विराजमान है, जहाँ से मन और वाणी लौट आते हैं। वह समस्त ज्योतियों की परम ज्योति तथा कैवल्य निर्वाण का मूल कारण है।',
        englishMeaning: 'Above all that resides the incomparably delicate, supreme Great Void (Maha-Shunya), dazzling like the crescent of eternity, from which speech turns back together with the mind. That indeed is the Light of all Lights, the fountain of supreme Nirvana.'
      }
    ],
    sadhanaProtocol: {
      mudraAndBandha: 'Maha Vedha Mudra and Unmani Avastha',
      pranayamaRatio: 'Spontaneous Kevala Kumbhaka (Trans-respiratory stillness)',
      dhyanaFocus: 'Union of Shiva and Shakti at the Brahmarandhra, visualizing the entire body drenched in the white cooling nectar of immortality (Amrita-Varsha).',
      phalaSiddhi: 'Asamprajnata Samadhi, Jivanmukti (liberation while living), transcending the cycle of rebirth, realization of the eternal non-dual Self.'
    }
  }
];

/**
 * Helper to fetch a chakra by its canonical ID or alias
 */
export function getChakraById(id: string): KundaliniChakraEntry | undefined {
  const cleanId = id.trim().toLowerCase().replace(/_chakra$/, '');
  return KUNDALINI_CHAKRAS_DATABASE.find(c => c.id === cleanId || c.id === `${cleanId}_chakra`);
}

/**
 * Helper to retrieve all chakras in ascending order (Muladhara to Sahasrara)
 */
export function getAllChakras(): KundaliniChakraEntry[] {
  return [...KUNDALINI_CHAKRAS_DATABASE].sort((a, b) => a.order - b.order);
}

/**
 * Granthis (Knots) Summary Matrix
 */
export const SHASTRI_GRANTHIS_METADATA = [
  {
    name: 'Brahma Granthi',
    nameSanskrit: 'ब्रह्मग्रन्थि',
    location: 'Muladhara & Svadhishthana (Physical Realm / Bhuloka)',
    obstacle: 'Primal survival fears, bodily delusion, physical hoarding, sensual trap',
    breakthroughSign: 'Dissolution of material anxiety, sensory transcendence, deep vitality'
  },
  {
    name: 'Vishnu Granthi',
    nameSanskrit: 'विष्णुग्रन्थि',
    location: 'Manipura & Anahata (Astral/Emotional Realm / Bhuvarloka)',
    obstacle: 'Emotional attachments, desire for control and recognition, subtle spiritual pride',
    breakthroughSign: 'Hearing Anahata sounds, unbroken universal compassion, egoless love'
  },
  {
    name: 'Rudra Granthi',
    nameSanskrit: 'रुद्रग्रन्थि',
    location: 'Vishuddha & Ajna (Causal/Mental Realm / Svarloka)',
    obstacle: 'Psychic attachments, intoxication with visions, attachment to occult Siddhis',
    breakthroughSign: 'Complete ego death, non-dual illumination, entry into Sahasrara'
  }
];

/**
 * 14-Parameter Shastric Summary Reference Table
 */
export const KUNDALINI_COMPARATIVE_MATRIX = KUNDALINI_CHAKRAS_DATABASE.map(c => ({
  order: c.order,
  name: c.nameHindi,
  sanskrit: c.nameSanskrit,
  petals: c.petalsCount,
  tattwa: c.tattwa.nameSanskrit,
  bija: c.bijaMantra,
  vahana: c.bijaVahanaSanskrit,
  shiva: c.presidingShiva.nameSanskrit,
  yogini: c.presidingYogini.nameSanskrit,
  dhatu: c.dhatuSanskrit,
  granthi: c.granthi ? c.granthi.nameSanskrit : '—',
  planet: c.rulingPlanetSanskrit
}));
