const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../src/lib/yantras/shastric-jyotish-database.ts');
const sgkbPath = path.join(__dirname, '../src/lib/sgkb/canonical-library-dataset.ts');

const deviDbEntries = `,

  durga_yantra: {
    id: 'durga_yantra',
    taxonomyCategory: 'devi_shakti',
    lineageAttribution: 'शाक्त आगम एवं मार्कण्डेय पुराण (दुर्गा सप्तशती / देवी माहात्म्य)',
    nameSanskrit: 'श्रीमहादुर्गा यन्त्रम् (दुर्गा बीसा यन्त्र)',
    nameHindi: 'महादुर्गा यन्त्र (दुर्गा बीसा)',
    nameEnglish: 'Maha Durga Yantra (The Invincible Fortress of Durga Beesa)',
    subTitle: 'The Supreme Shaktic Shield for Overcoming Catastrophes, Eliminating Hostile Forces & Fearlessness',
    presidingDeity: 'भगवती महादुर्गा (महिषासुरमर्दिनी / नवदुर्गा)',
    tradition: 'शाक्त आगम व दुर्गा सप्तशती परम्परा',
    corePhilosophy: 'दुर्गम दैत्यों और समस्त सांसारिक कष्टों से तारने वाली आदिशक्ति। नौ त्रिकोणों का रहस्यमयी अंतर्ग्रंथन साधक के समस्त आंतरिक षडरिपुओं और बाह्य संकटों का समूल नाश कर अभय कवच प्रदान करता है।',
    citations: [
      {
        sourceScripture: 'मार्कण्डेय पुराण (देवी माहात्म्य)',
        chapterOrVerse: 'अध्याय ४, श्लोक २४',
        sanskritSloka: 'दुर्गे स्मृता हरसि भीतिमशेषजन्तोः\\\\nस्वस्थैः स्मृता मतिमतीव शुभां ददासि।\\\\nदारिद्र्यदुःखभयहारिणी का त्वदन्या\\\\nसर्वोपकारकरणाय सदार्द्रचित्ता॥',
        hindiMeaning: 'हे दुर्गे! आप स्मरण करने पर सब प्राणियों का भय हर लेती हैं और स्वस्थ पुरुषों द्वारा चिंतन करने पर परम कल्याणमयी बुद्धि प्रदान करती हैं। दरिद्रता, दुःख और भय का नाश करने वाली आपके सिवा अन्य कौन है जिसका चित्त सबका उपकार करने के लिए सदा दयार्द्र रहता हो?',
        englishMeaning: 'O Durga, when remembered you dispel fear from every creature, and when meditated upon in serenity you bestow noble wisdom. Who other than you, whose heart is ever overflowing with compassion, can eradicate sorrow, poverty, and dread?'
      },
      {
        sourceScripture: 'देवी माहात्म्य (दुर्गा सप्तशती)',
        chapterOrVerse: 'अध्याय १२, श्लोक १०',
        sanskritSloka: 'सर्वाबाधाप्रशमनं त्रैलोक्यस्याखिलेश्वरि।\\\\nएवमेव त्वया कार्यमस्मद्वैरिविनाशनम्॥',
        hindiMeaning: 'हे अखिलेश्वरी! आप तीनों लोकों की समस्त बाधाओं को शांत करें और हमारे शत्रुओं का संहार करें।',
        englishMeaning: 'O Sovereign Mother of the Three Worlds, appease all afflictions and extinguish all hostile obstacles that assail us.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'त्रैलोक्य रक्षक भूपुर प्राकार',
        nameEnglish: 'Citadel of Universal Protection & 4 Gateways',
        chakraTitle: 'भूपुर मण्डल (4 Sacred Gateways)',
        presidingDeity: 'इन्द्रादि लोकपाल एवं अष्ट भैरव',
        mudraShakti: 'अभय-खड्ग मुद्रा',
        yoginiClass: 'प्रकट योगिनी वर्ग',
        geometryType: 'Concentric Quadrangle with T-Shaped Portals',
        significance: 'समस्त बाह्य नकारात्मक ऊर्जा, नजर दोष और तांत्रिक आक्रमणों का तत्काल निवारण।'
      },
      {
        index: 2,
        nameSanskrit: 'अष्टदल अष्टमातृका पद्म',
        nameEnglish: '8-Petal Lotus of the Ashta-Matrikas',
        chakraTitle: 'अष्टदल पद्म (8 Sacred Petals)',
        presidingDeity: 'ब्राह्मी, माहेश्वरी, कौमारी, वैष्णवी, वाराही, नारसिंही, ऐन्द्री, चामुण्डा',
        mudraShakti: 'त्रिशूल-पाश मुद्रा',
        yoginiClass: 'गुप्त योगिनी वर्ग',
        geometryType: '8 Symmetrical Radial Ogee Lotus Petals',
        significance: 'आठों दिशाओं से साधक के प्राण, परिवार और मर्यादा की अखण्ड रक्षा।'
      },
      {
        index: 3,
        nameSanskrit: 'नवकोण दुर्गा बीसा चक्र',
        nameEnglish: '9-Triangle Interlocking Matrix (Durga Beesa Star)',
        chakraTitle: 'नवकोण मण्डल (9 Interlocking Forcefields)',
        presidingDeity: 'नवदुर्गा (शैलपुत्री से सिद्धिदात्री पर्यन्त)',
        mudraShakti: 'धनुर्बाण चक्र मुद्रा',
        yoginiClass: 'गुप्ततर योगिनी वर्ग',
        geometryType: '9 Interlaced Dynamic Triangles Generating 20 Sacred Sub-Spaces',
        significance: 'अष्टपाशों का भंजन तथा व्यापार, कार्य और मुकदमों में बीसा यन्त्र द्वारा अचूक सिद्धि।'
      },
      {
        index: 4,
        nameSanskrit: 'त्रिशक्ति अंतर्त्रिकोण',
        nameEnglish: 'Inner Triangle of the Three Primordial Goddesses',
        chakraTitle: 'त्रिकोण मण्डल (Trikona of Tridevi)',
        presidingDeity: 'महाकाली (तमस), महालक्ष्मी (रजस), महासरस्वती (सत्व)',
        mudraShakti: 'वरदाभय मुद्रा',
        yoginiClass: 'संप्रदाय योगिनी वर्ग',
        geometryType: 'Inverted Central Golden Triangle',
        significance: 'त्रिगुणों का संतुलन और संपूर्ण सृष्टि की रक्षा सामर्थ्य।'
      },
      {
        index: 5,
        nameSanskrit: 'परम बिन्दु एवं दुं बीज',
        nameEnglish: 'Supreme Singularity & Dum Beeja',
        chakraTitle: 'मध्य बिन्दु (The Cosmic Nexus)',
        presidingDeity: 'परा महादुर्गा',
        mudraShakti: 'महाशक्ति मुद्रा',
        yoginiClass: 'परा संवित् शक्ति',
        geometryType: 'Golden Central Singularity Point',
        significance: 'सच्चिदानंदमय अभेद्य आत्म-रक्षा और मोक्ष।'
      }
    ],
    jyotish: {
      rulingPlanet: 'राहु (Rahu) व मंगल (Mars)',
      planetSanskrit: 'राहु-भौम दोष नाशक एवं पराक्रम योग',
      friendlyRashis: ['मेष', 'वृश्चिक', 'सिंह', 'कुम्भ'],
      friendlyNakshatras: ['आर्द्रा', 'स्वाति', 'शतभिषा', 'मृगशिरा'],
      doshaRemedies: [
        {
          doshaName: 'राहु जनित भय, कालसर्प दोष व भूत-प्रेत बाधा',
          description: 'अकारण अज्ञात भय, रात में भयानक स्वप्न आना, व्यापार में अचानक बाधाएं और नजर लगना।',
          reliefMechanism: 'दुर्गा यन्त्र की नित्य सिन्दूर और धूप से पूजा करने पर राहु के समस्त अनिष्ट प्रभाव नष्ट हो जाते हैं।'
        },
        {
          doshaName: 'मंगल जनित अंगारक दोष व शत्रु षड्यंत्र',
          description: 'शत्रुओं द्वारा परेशान किया जाना, बार-बार चोट लगना या कानूनी मुकदमों का तनाव।',
          reliefMechanism: 'मंगलवार और अष्टमी तिथि को यन्त्र के समक्ष दुर्गा सप्तशती के अर्गला व कीलक का पाठ अचूक रक्षा करता है।'
        }
      ],
      lifeAspects: ['शत्रु-दमन', 'सर्वविघ्न निवारण', 'आत्मविश्वास व साहस', 'आकस्मिक संकटों से रक्षा'],
      wearOrInstallDirection: 'पूर्व (East) अथवा उत्तर (North)',
      favorableDay: 'मंगलवार (Tuesday) अथवा शुक्रवार (Friday)',
      auspiciousTithi: 'शुक्ल अष्टमी, नवमी, अथवा गुप्त/शारदीय/वासन्तीय नवरात्रि',
      metalPreference: 'स्वर्ण (Gold), रजत (Silver), ताम्र (Copper) अथवा अष्टधातु',
      beejMantra: 'ॐ दुं दुर्गायै नमः॥ / ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे॥',
      gayatriMantra: 'ॐ कात्यायन्यै विद्महे कन्याकुमार्यै धीमहि तन्नो दुर्गिः प्रचोदयात्॥',
      japaCount: 108,
      malaType: 'रुद्राक्ष माला अथवा रक्त चन्दन माला',
      dhyanaSloka: 'विद्युद्दामसमप्रभां मृगपतिस्कन्धस्थितां भीषणां कन्याभिः करवालखेटविलसद्धस्ताभिरासेविताम्। हस्तैश्चक्रगदासिखेटविशिखांश्चापं गुणं तर्जनीं बिभ्राणामनलात्मिकां शशिधरां दुर्गां त्रिनेत्रां भजे॥',
      pratishthaVidhiSummary: [
        '१. लाल वस्त्र बिछाकर ताम्र अथवा भोजपत्र पर निर्मित दुर्गा यन्त्र स्थापित करें।',
        '२. कुमकुम, रक्तचन्दन और लाल गुड़हल के पुष्प अर्पित करें।',
        '३. गूगल अथवा लोबान की धूप देकर शुद्ध घी का दीप प्रज्वलित करें।',
        '४. "ॐ दुं दुर्गायै नमः" मन्त्र की न्यूनतम ५ माला जप करें और सिद्ध कुंजिका स्तोत्र का पाठ करें।'
      ]
    },
    practicalRemedies: [
      {
        category: 'Protection',
        problem: 'अज्ञात शत्रुओं का षड्यंत्र, निरंतर नकारात्मक शक्तियों का आभास या नजर दोष।',
        remedyProtocol: 'दुर्गा बीसा यन्त्र को घर के मुख्य द्वार के भीतरी भाग या पूजा स्थान में पूर्व दिशा की ओर स्थापित कर नित्य लाल पुष्प और धूप अर्पित करें।'
      },
      {
        category: 'Spiritual',
        problem: 'मन में निरंतर भय, संशय, आत्मविश्वास की कमी और निर्णय लेने में असमर्थता।',
        remedyProtocol: 'प्रतिदिन प्रातः यन्त्र के मध्य बिन्दु पर ध्यान केन्द्रित कर ९ बार "ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे" और १०८ बार "ॐ दुं दुर्गायै नमः" का जप करें।'
      }
    ]
  },

  chandika_yantra: {
    id: 'chandika_yantra',
    taxonomyCategory: 'devi_shakti',
    lineageAttribution: 'शाक्त कौल परम्परा, डामर तन्त्र एवं दुर्गा सप्तशती नवाक्षरी रहस्य',
    nameSanskrit: 'श्रीमहाचण्डिका यन्त्रम् (सप्तशती नवाक्षर मण्डल)',
    nameHindi: 'महाचण्डिका यन्त्र',
    nameEnglish: 'Maha Chandika Yantra (The Cosmic Sovereign Matrix of Chandi Saptashati)',
    subTitle: 'The Primordial Tantric Wrath of Transcendental Justice, Annihilation of Evil & Navarna Activation',
    presidingDeity: 'भगवती महाचण्डिका (अष्टादशभुजा महालक्ष्मी स्वरूपिणी)',
    tradition: 'कौल शाक्त एवं चण्डीविधान परम्परा',
    corePhilosophy: 'ब्रह्माण्डीय न्याय और परम शौर्य की पराशक्ति। जब देवता भी असुरों के संहार में असमर्थ हो जाते हैं, तब समस्त देवों के सम्मिलित तेज से महाचण्डिका का प्राकट्य होता है। यह यन्त्र नकारात्मकता को क्षण मात्र में भस्म कर साधक को अपराजेय सामर्थ्य प्रदान करता है।',
    citations: [
      {
        sourceScripture: 'दुर्गा सप्तशती (प्राधानिक रहस्यम्)',
        chapterOrVerse: 'श्लोक ४-६',
        sanskritSloka: 'सर्वस्याद्या महालक्ष्मीस्त्रिगुणा परमेश्वरी।\\\\nलक्ष्यालक्ष्यस्वरूपा सा व्याप्य कृत्स्नं व्यवस्थिता॥\\\\nमातुलुङ्गं गदां खेटं पानपात्रं च बिभ्रती।\\\\nनागं लिङ्गं च योनिं च बिभ्रती नृप मूर्धनि॥',
        hindiMeaning: 'सबकी आदिभूता त्रिगुणामयी परमेश्वरी महालक्ष्मी (महाचण्डिका) ही हैं। वे ही दृश्य और अदृश्य समस्त विश्व को व्याप्त करके स्थित हैं।',
        englishMeaning: 'Primordial above all is Maha Lakshmi (Maha Chandika), the Supreme Empress endowed with the three Gunas, permeating all manifest and unmanifest reality with supreme sovereignty.'
      },
      {
        sourceScripture: 'रुद्रयामल तन्त्रम्',
        chapterOrVerse: 'चण्डी प्रकरण',
        sanskritSloka: 'चण्डिका पूजिता येन स पूज्यो भुवनत्रये।\\\\nतस्य गेहे वसेल्लक्ष्मीः स्तम्भ्यन्ते सर्वशत्रवः॥',
        hindiMeaning: 'जिस साधक ने विधिपूर्वक भगवती चण्डिका की यन्त्र में पूजा की है, वह तीनों लोकों में पूजनीय हो जाता है; उसके घर में स्थायी लक्ष्मी का वास होता है और समस्त शत्रु स्तम्भित हो जाते हैं।',
        englishMeaning: 'One who worships Chandika through her sacred yantra becomes revered across the three worlds; abiding prosperity dwells in their home and all hostile adversaries are subdued.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'क्रोध भैरव भूपुर प्राकार',
        nameEnglish: 'Citadel of Righteous Wrath & Fortification',
        chakraTitle: 'भूपुर एवं चार द्वार',
        presidingDeity: 'असिताङ्ग, रुरु, चण्ड, क्रोध, उन्मत्त, कपाली, भीषण, संहार भैरव',
        mudraShakti: 'खड्ग-मुद्गर मुद्रा',
        yoginiClass: 'प्रकट चण्डी योगिनी',
        geometryType: 'Quadrangle Citadel with 4 Stepped Gateways',
        significance: 'आठों दिशाओं से किसी भी दुष्ट विचार या तांत्रिक प्रयोग को प्रवेश करने से रोकना।'
      },
      {
        index: 2,
        nameSanskrit: 'षोडशदल प्रकृति पद्म',
        nameEnglish: '16-Petal Lotus of Macrocosmic Power',
        chakraTitle: 'षोडशदल पद्म (16 Sacred Petals)',
        presidingDeity: 'षोडश नित्या एवं षोडश कला शक्तियाँ',
        mudraShakti: 'शूल-डमरू मुद्रा',
        yoginiClass: 'गुप्त योगिनी वर्ग',
        geometryType: '16 Radial Symmetrical Lotus Petals with Spines',
        significance: 'मनुष्य की १६ कलाओं और इन्द्रियों को अदम्य आत्मबल में रूपान्तरित करना।'
      },
      {
        index: 3,
        nameSanskrit: 'अष्टदल मातृका पद्म',
        nameEnglish: '8-Petal Lotus of Primal Shaktis',
        chakraTitle: 'अष्टदल पद्म (8 Petals of the Mothers)',
        presidingDeity: 'अष्ट मातृका गण (ब्राह्म्यादि)',
        mudraShakti: 'अङ्कुश-पाश मुद्रा',
        yoginiClass: 'गुप्ततर योगिनी वर्ग',
        geometryType: '8 Symmetrical Petals with Golden Veins',
        significance: 'अष्टविध भय (मृत्यु, रोग, अग्नि, जल, सर्प, चोर, शत्रु, भूत) का समूल विनाश।'
      },
      {
        index: 4,
        nameSanskrit: 'त्रिमुण्ड त्रिकोण नवाक्षर चक्र',
        nameEnglish: 'Tri-Shakti Inverted Triangle with Navarna Matrix',
        chakraTitle: 'त्रिकोण मण्डल (Tri-Angular Fire Matrix)',
        presidingDeity: 'महाकाली, महालक्ष्मी, महासरस्वती सामरस्य',
        mudraShakti: 'योनि-त्रिशूल मुद्रा',
        yoginiClass: 'रहस्य योगिनी वर्ग',
        geometryType: 'Concentric Inverted Equilateral Triangle with Navarna Inscriptions',
        significance: 'नवाक्षर मन्त्र "ऐं ह्रीं क्लीं चामुण्डायै विच्चे" की चैतन्य ऊर्जा का जागरण।'
      },
      {
        index: 5,
        nameSanskrit: 'महाबिन्दु एवं ह्लीं-क्लीं बीज',
        nameEnglish: 'Absolute Singularity & Transcendent Chandi Seat',
        chakraTitle: 'मध्य बिन्दु (The Cosmic Apex)',
        presidingDeity: 'परम महाचण्डिका',
        mudraShakti: 'चण्डी-संहार मुद्रा',
        yoginiClass: 'परा संवित् शक्ति',
        geometryType: 'Radiant Fiery Singularity Point',
        significance: 'परब्रह्म स्वरूपा चण्डिका का साक्षात सान्निध्य और अभय पद।'
      }
    ],
    jyotish: {
      rulingPlanet: 'मंगल (Mars) व केतु (Ketu)',
      planetSanskrit: 'मंगल-केतु आग्नेय योग शामक',
      friendlyRashis: ['वृश्चिक', 'मेष', 'धनु', 'सिंह'],
      friendlyNakshatras: ['चित्रा', 'धनिष्ठा', 'मूल', 'मघा'],
      doshaRemedies: [
        {
          doshaName: 'अंगारक दोष, रक्त विकार व शत्रु भय',
          description: 'भूमि-सम्पत्ति को लेकर गंभीर विवाद, विरोधियों द्वारा हानि पहुँचाने की आशंका, रक्त संबंधी विकार।',
          reliefMechanism: 'चण्डिका यन्त्र पर लाल चन्दन व अष्टगंध लगाकर नवाक्षर मन्त्र का जप करने से शत्रु की बुद्धि स्वतः परास्त होती है।'
        }
      ],
      lifeAspects: ['अपराजेय विजय', 'कोर्ट-कचहरी व भूमि विवाद में विजय', 'शत्रुओं का स्तम्भन', 'अखण्ड साहस'],
      wearOrInstallDirection: 'दक्षिण (South) अथवा पूर्व (East)',
      favorableDay: 'मंगलवार (Tuesday) अथवा अष्टमी/चतुर्दशी',
      auspiciousTithi: 'नवरात्रि की महाअष्टमी अथवा महानवमी',
      metalPreference: 'ताम्र (Copper), कांसा (Bronze) अथवा पंचधातु',
      beejMantra: 'ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे॥',
      gayatriMantra: 'ॐ चण्डिकायै विद्महे महिषासुरमर्दिन्यै धीमहि तन्नो देवी प्रचोदयात्॥',
      japaCount: 108,
      malaType: 'रुद्राक्ष माला अथवा रक्त चन्दन माला',
      dhyanaSloka: 'ॐ अक्षस्रक्परशुं गदेषुकुलिशं पद्मं धनुष्कुण्डिकां दण्डं शक्तिमसिं च चर्म जलजं घण्टां सुराभाजनम्। शूलं पाशसुदर्शने च दधतीं हस्तैः प्रसन्नाननां सेवे सैरिभमर्दिनीमिह महालक्ष्मीं सरोजस्थिताम्॥',
      pratishthaVidhiSummary: [
        '१. लाल वस्त्र पर ताम्र चण्डिका यन्त्र की स्थापना करें।',
        '२. सिन्दूर, लाल कनेर के पुष्प और अनार के दाने अर्पित करें।',
        '३. गूगल की धूप देकर सरसों के तेल या तिल के तेल का दीपक जलाएं।',
        '४. नवाक्षर मन्त्र "ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे" का १०८ बार जप करें।'
      ]
    },
    practicalRemedies: [
      {
        category: 'Protection',
        problem: 'व्यापारिक ईर्ष्या, तीव्र शत्रुता और परिवार पर लगातार आने वाले अज्ञात संकट।',
        remedyProtocol: 'चण्डिका यन्त्र को मंगलवार की संध्या लाल वस्त्र पर स्थापित करें, लोबान की धूप दें और ११ बार दुर्गा कवच का पाठ करें।'
      },
      {
        category: 'Spiritual',
        problem: 'साधना में बाधा, एकाग्रता का भंग होना तथा भय व भ्रम का निवारण।',
        remedyProtocol: 'प्रातःकाल स्नानोपरान्त यन्त्र के बिन्दु पर त्राटक करते हुए १०८ बार नवाक्षर मन्त्र का स्पष्ट उच्चारण करें।'
      }
    ]
  },

  annapurna_yantra: {
    id: 'annapurna_yantra',
    taxonomyCategory: 'devi_shakti',
    lineageAttribution: 'अन्नपूर्णा उपनिषद् (अथर्ववेद), काशी-रहस्य एवं रुद्रयामल तन्त्र',
    nameSanskrit: 'श्रीमहान्नपूर्णा यन्त्रम् (अन्नब्रह्म-रसविद्या मण्डल)',
    nameHindi: 'अन्नपूर्णा यन्त्र',
    nameEnglish: 'Sri Annapurna Yantra (Cosmic Matrix of Perpetual Nourishment & Prosperity)',
    subTitle: 'The Celestial Mother of Food Abundance, Agrarian Prosperity, Hospitality & Never-Empty Storehouse',
    presidingDeity: 'भगवती अन्नपूर्णा (काशी विश्वनाथ-वल्लभा / अन्नब्रह्ममयी)',
    tradition: 'काशी शाक्त परम्परा एवं वैदिक अन्नविद्या',
    corePhilosophy: 'अन्न ही परब्रह्म है ("अन्नं वै ब्रह्म")। भगवान शिव को भी भिक्षा प्रदान करने वाली माता अन्नपूर्णा समस्त चराचर जगत के पोषण की अधिष्ठात्री हैं। यह यन्त्र घर, भोजनालय और प्रतिष्ठान में कभी अन्न, धन और प्रेम की कमी नहीं होने देता।',
    citations: [
      {
        sourceScripture: 'अन्नपूर्णा स्तोत्रम् (आदि शङ्कराचार्य)',
        chapterOrVerse: 'श्लोक १ व ११',
        sanskritSloka: 'नित्यानन्दकरी वराभयकरी सौन्दर्यरत्नाकरी\\\\nनिर्धूताखिलघोरपावनकरी प्रत्यक्षमाहेश्वरी।\\\\nप्रालेयाचलवंशपावनकरी काशीपुराधीश्वरी\\\\nभिक्षां देहि कृपावलम्बनकरी मातान्नपूर्णेश्वरी॥',
        hindiMeaning: 'नित्यानन्द देने वाली, वर और अभय देने वाली, सौन्दर्य रूपी रत्नों की खान, साक्षात माहेश्वरी, हिमालय के कुल को पवित्र करने वाली, काशी की अधीश्वरी, हे माता अन्नपूर्णेश्वरी! मुझे कृपापूर्वक भिक्षा प्रदान करो।',
        englishMeaning: 'O Eternal Giver of Joy, bestower of boons and fearlessness, ocean of beauty, sovereign Goddess of Kashi, Mother Annapurna—grant us the sacred alms of physical nourishment and transcendental wisdom.'
      },
      {
        sourceScripture: 'अन्नपूर्णा उपनिषद् (अथर्ववेद)',
        chapterOrVerse: 'प्रथम खण्ड',
        sanskritSloka: 'ॐ ह्रीं श्रीं क्लीं नमो भगवति माहेश्वरि अन्नपूर्णे स्वाहा।\\\\nअनेन मन्त्रेण यन्त्रे पूजिता साक्षात् सर्वसम्पत्प्रदा भवेत्॥',
        hindiMeaning: 'इस महामन्त्र द्वारा यन्त्र में पूजित भगवती अन्नपूर्णा साधक को समस्त भौतिक सम्पदा, धान्य और आत्म-तृप्ति प्रदान करती हैं।',
        englishMeaning: 'Worshipped with this sacred mantra in her consecrated yantra, Mother Annapurna bestows unbroken prosperity, grain abundance, and divine fulfillment.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'अन्नब्रह्म भूपुर प्राकार',
        nameEnglish: 'Citadel of Golden Granary & Hospitality',
        chakraTitle: 'भूपुर एवं चार कनक द्वार',
        presidingDeity: 'अष्ट वसु एवं कुबेरादि दिक्पाल',
        mudraShakti: 'दर्वी-पात्र मुद्रा (Golden Ladle & Bowl)',
        yoginiClass: 'प्रकट धान्य योगिनी',
        geometryType: 'Golden Concentric Citadel with 4 Symmetrical Portals',
        significance: 'घर और रसोई में अन्न के अपव्यय और दरिद्रता का प्रवेश रोकना।'
      },
      {
        index: 2,
        nameSanskrit: 'अष्टदल अष्टरस पद्म',
        nameEnglish: '8-Petal Lotus of the Eightfold Sustenance',
        chakraTitle: 'अष्टदल पद्म (8 Sacred Petals)',
        presidingDeity: 'आदि अन्नपूर्णा, रसपूर्णा, धान्यपूर्णा, क्षीरपूर्णा, मधुपूर्णा, जलपूर्णा, फलपूर्णा, अमृतपूर्णा',
        mudraShakti: 'अमृतकुम्भ मुद्रा',
        yoginiClass: 'गुप्त पोषण योगिनी',
        geometryType: '8 Symmetrical Radial Lotus Petals with Spines',
        significance: 'समस्त प्रकार के भोज्य पदार्थों में दिव्य स्वाद, पुष्टि और आरोग्य का संचार।'
      },
      {
        index: 3,
        nameSanskrit: 'रसविद्या षट्कोण चक्र',
        nameEnglish: 'Hexagram of Elemental Nutrition & Equilibrium',
        chakraTitle: 'षट्कोण मण्डल (Matrix of Physical Satiety)',
        presidingDeity: 'शिव-अन्नपूर्णा सामरस्य',
        mudraShakti: 'भिक्षा मुद्रा',
        yoginiClass: 'रहस्य योगिनी वर्ग',
        geometryType: 'Two Interpenetrating Triangles (Agni & Soma Balance)',
        significance: 'पाचन अग्नि और अमृत तत्व का सामंजस्य, जिससे शरीर निरोगी और ओजस्वी बने।'
      },
      {
        index: 4,
        nameSanskrit: 'सुवर्ण कलश अंतर्त्रिकोण',
        nameEnglish: 'Inner Inverted Triangle of Amrita Vessel',
        chakraTitle: 'कामधेनु त्रिकोण (Inverted Golden Triangle)',
        presidingDeity: 'महा अन्नपूर्णा',
        mudraShakti: 'वरदाभय मुद्रा',
        yoginiClass: 'अतिरहस्य योगिनी वर्ग',
        geometryType: 'Inverted Golden Triangle Enclosing Amrita Bowl Iconography',
        significance: 'अक्षय अन्न भण्डार का आशीर्वाद—पात्र कभी खाली न रहना।'
      },
      {
        index: 5,
        nameSanskrit: 'अमृत महाबिन्दु एवं ह्रीं-श्रीं बीज',
        nameEnglish: 'Central Singularity of Perpetual Nourishment',
        chakraTitle: 'मध्य बिन्दु (The Nectar Singularity)',
        presidingDeity: 'परमेश्वरी अन्नपूर्णा',
        mudraShakti: 'पूर्णानन्द मुद्रा',
        yoginiClass: 'परा संवित् शक्ति',
        geometryType: 'Radiant Golden Central Singularity Point',
        significance: 'आत्मा की पूर्ण तृप्ति और कैवल्य मोक्ष।'
      }
    ],
    jyotish: {
      rulingPlanet: 'चन्द्रमा (Moon) व शुक्र (Venus)',
      planetSanskrit: 'चन्द्र-शुक्र पोषण व अन्नपूर्णा योग',
      friendlyRashis: ['कर्क', 'वृषभ', 'तुला', 'मीन'],
      friendlyNakshatras: ['रोहिणी', 'हस्त', 'श्रवण', 'पुनर्वसु'],
      doshaRemedies: [
        {
          doshaName: 'चन्द्रमा का क्षीण होना, अन्न दोष व गृह कलह',
          description: 'रसोई में भोजन का स्वाद न आना, परिवार के सदस्यों का एक साथ भोजन न करना, अन्न का अत्यधिक अपव्यय और मानसिक तनाव।',
          reliefMechanism: 'रसोईघर के आग्नेय अथवा उत्तर-पूर्व कोण में अन्नपूर्णा यन्त्र स्थापित कर नित्य प्रथम रोटी या भोग समर्पित करने से घर में अक्षुण्ण बरकत रहती है।'
        }
      ],
      lifeAspects: ['अक्षय अन्न भण्डार', 'होटल, रेस्तरां व कैटरिंग में सफलता', 'परिवार में प्रेम व सौहार्द', 'शारीरिक पुष्टि व आरोग्य'],
      wearOrInstallDirection: 'उत्तर (North) अथवा उत्तर-पूर्व (रसोईघर में)',
      favorableDay: 'शुक्रवार (Friday) अथवा सोमवार (Monday)',
      auspiciousTithi: 'मार्गशीर्ष पूर्णिमा (अन्नपूर्णा जयंती) अथवा अक्षय तृतीया',
      metalPreference: 'रजत (Silver), पीतल (Brass) अथवा ताम्र',
      beejMantra: 'ॐ ह्रीं श्रीं क्लीं नमो भगवति माहेश्वरि अन्नपूर्णे स्वाहा॥',
      gayatriMantra: 'ॐ भगवत्यै च विद्महे माहेश्वर्यै धीमहि तन्नोऽन्नपूर्णा प्रचोदयात्॥',
      japaCount: 108,
      malaType: 'स्फटिक माला अथवा कमल गट्टे की माला',
      dhyanaSloka: 'तप्तकाञ्चनसंकाशां त्रिनेत्रां शशिशेखराम्। विकसितारविन्दस्थां वरदाभयहस्तकाम्। दर्वीपात्रं च बिभ्राणां रत्नसिंहासनस्थिताम्। ध्यायेदन्नप्रदां देवीं काश्यामीश्वरवल्लभाम्॥',
      pratishthaVidhiSummary: [
        '१. रसोईघर के शुद्ध स्थान अथवा पूजाघर में पीले/सफेद वस्त्र पर यन्त्र स्थापित करें।',
        '२. कच्चे दूध व गंगाजल से अभिषेक कर चावल, चन्दन और पीले पुष्प चढ़ाएं।',
        '३. मिश्री, खीर अथवा ताजे फल का नैवेद्य अर्पित करें।',
        '४. "ॐ ह्रीं श्रीं क्लीं नमो भगवति माहेश्वरि अन्नपूर्णे स्वाहा" का १०८ बार जप करें।'
      ]
    },
    practicalRemedies: [
      {
        category: 'Wealth',
        problem: 'कमाने के बावजूद घर में बरकत न रहना, रसोई और अनाज भण्डार में लगातार नुकसान होना।',
        remedyProtocol: 'अन्नपूर्णा यन्त्र को चांदी या तांबे के पत्र पर किचन के ईशान कोण में लगाएं और प्रतिदिन भोजन बनाने के बाद पहला भोग यन्त्र के सम्मुख रखें।'
      },
      {
        category: 'Health',
        problem: 'पाचन तंत्र की खराबी, बच्चों का ठीक से भोजन न करना या खान-पान संबंधी अरुचि।',
        remedyProtocol: 'यन्त्र के सम्मुख रखे जल को १०८ बार अन्नपूर्णा मन्त्र से अभिमंत्रित कर रोगी या बालक को पिलाएं।'
      }
    ]
  },

  lalita_parameshvari_yantra: {
    id: 'lalita_parameshvari_yantra',
    taxonomyCategory: 'devi_shakti',
    lineageAttribution: 'ब्रह्माण्ड पुराण (ललिता सहस्रनाम / त्रिशती), कामकलाविलास एवं षोडशी कल्प',
    nameSanskrit: 'श्रीललिता परमेश्वरी कामकला यन्त्रम्',
    nameHindi: 'ललिता परमेश्वरी कामकला यन्त्र',
    nameEnglish: 'Sri Lalita Parameshvari Kamakala Yantra (The Supreme Matrix of Transcendental Beauty & Consciousness)',
    subTitle: 'The Sovereign Empress of Sri Chakra, Kamakala Synthesis, Supreme Bliss & Divine Transcendence',
    presidingDeity: 'भगवती ललिता महात्रिपुरसुन्दरी (राजराजेश्वरी / कामेश्वरी)',
    tradition: 'श्रीविद्या साम्बव एवं कादि परम्परा',
    corePhilosophy: 'समस्त ब्रह्माण्ड की अधिष्ठात्री राजराजेश्वरी। चिदग्नि कुण्ड से प्रादुर्भूत, भगवान कामेश्वर के साथ सामरस्य भाव में स्थित परा संवित्। कामकला (मुख, स्तनद्वय और योनि) का स्वरूप ही सृष्टि, स्थिति और लय का मूल रहस्य है। यह यन्त्र साधक को मोक्ष और ऐश्वर्य दोनों एक साथ प्रदान करता है।',
    citations: [
      {
        sourceScripture: 'ब्रह्माण्ड पुराण (ललिता सहस्रनाम)',
        chapterOrVerse: 'पूर्वपीठिका, श्लोक १-२',
        sanskritSloka: 'श्रीमाता श्रीमहाराज्ञी श्रीमत्सिंहासनेश्वरी।\\\\nचिदग्निकुण्डसम्भूता देवकार्यसमुद्यता॥\\\\nउद्यद्भानुसहस्राभा चतुर्बाहुसमन्विता।\\\\nरागस्वरूपपाशाढ्या क्रोधाकाराङ्कुशोज्ज्वला॥',
        hindiMeaning: 'परम माता, चक्रवर्ती साम्राज्ञी, मणिसिंहासन पर विराजने वाली, चिद्रूपी अग्नि कुण्ड से प्रकट हुई और देवकार्य को सिद्ध करने में तत्पर; सहस्र उदित सूर्यों के समान कान्ति वाली, पाश, अंकुश, इक्षु-धनुष और पुष्प-बाण धारण करने वाली परा भगवती ललिता की हम शरण ग्रहण करते हैं।',
        englishMeaning: 'Salutations to Sri Mata, the Supreme Empress of the Sovereign Throne, arisen from the altar of the Fire of Consciousness to fulfill the cosmic divine mission, radiant like ten thousand suns.'
      },
      {
        sourceScripture: 'कामकलाविलासः (पुण्यानन्दनाथ)',
        chapterOrVerse: 'कारिका १-३',
        sanskritSloka: 'सकलभुवनोदयास्थितिसंहारनिमित्तभूतायाः।\\\\nकामकलायाः रूपं विलाससारं परां वन्दे॥',
        hindiMeaning: 'समस्त भुवनों की उत्पत्ति, स्थिति और संहार की मूल कारणभूता, विलास की साररूपा परा कामकला भगवती ललिता की मैं वन्दना करता हूँ।',
        englishMeaning: 'I adore the supreme Kamakala, the transcendent essence whose blissful play constitutes the origin, maintenance, and dissolution of all manifested universes.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'त्रैलोक्यमोहन भूपुर प्राकार',
        nameEnglish: 'Citadel of Universal Enchantment & Harmony',
        chakraTitle: 'त्रैलोक्यमोहन चक्र (3 Concentric Ramparts)',
        presidingDeity: 'अणिमादि अष्ट सिद्धियाँ, द्राविण्यादि मुद्राएँ',
        mudraShakti: 'सर्वसंक्षोभिणी मुद्रा',
        yoginiClass: 'प्रकट योगिनी वर्ग',
        geometryType: 'Three Concentric Ramparts with 4 Royal Gateways',
        significance: 'इन्द्रियों का पूर्ण संयम और सम्पूर्ण जगत में सर्वप्रियता।'
      },
      {
        index: 2,
        nameSanskrit: 'सर्वाशापरिपूरक षोडशदल पद्म',
        nameEnglish: '16-Petal Lotus of All-Desire Fulfillment',
        chakraTitle: 'सर्वाशापरिपूरक चक्र (16 Sacred Petals)',
        presidingDeity: 'कामाकर्षण्यादि षोडश नित्या देवियाँ',
        mudraShakti: 'सर्वविद्राविणी मुद्रा',
        yoginiClass: 'गुप्त योगिनी वर्ग',
        geometryType: '16 Radial Symmetrical Lotus Petals with Spines',
        significance: 'साधक की समस्त सात्विक व भौतिक कामनाओं की पूर्ण सिद्धि।'
      },
      {
        index: 3,
        nameSanskrit: 'सर्वसंक्षोभण अष्टदल पद्म',
        nameEnglish: '8-Petal Lotus of Spiritual Allurement',
        chakraTitle: 'सर्वसंक्षोभण चक्र (8 Sacred Petals)',
        presidingDeity: 'अनङ्गकुसुमादि अष्ट अनङ्ग शक्तियाँ',
        mudraShakti: 'सर्वाकर्षणी मुद्रा',
        yoginiClass: 'गुप्ततर योगिनी वर्ग',
        geometryType: '8 Symmetrical Petals with Golden Filaments',
        significance: 'मन और चेतना का दिव्य सौन्दर्य में एकाकार होना।'
      },
      {
        index: 4,
        nameSanskrit: 'कामकला अंतर्त्रिकोण एवं पञ्चबाण',
        nameEnglish: 'Kamakala Inverted Triangle with Floral Arrows',
        chakraTitle: 'कामकला त्रिकोण (The Transcendent Yoni Matrix)',
        presidingDeity: 'कामेश्वर-कामेश्वरी सामरस्य',
        mudraShakti: 'सर्वोन्मादिनी व सर्वमहाङ्कुश मुद्रा',
        yoginiClass: 'रहस्य योगिनी वर्ग',
        geometryType: 'Inverted Golden Triangle Adorned with Sugarcane Bow & 5 Flower Arrows',
        significance: 'राग, द्वेष, अहंकार का दिव्य आनन्द में विसर्जन।'
      },
      {
        index: 5,
        nameSanskrit: 'सर्वानन्दमय परम बैन्दव चक्र',
        nameEnglish: 'Supreme Singularity of Absolute Consciousness & Bliss',
        chakraTitle: 'सर्वानन्दमय चक्र (Central Bindu)',
        presidingDeity: 'महात्रिपुरसुन्दरी राजराजेश्वरी',
        mudraShakti: 'सर्वबीज व सर्वत्रिखण्डा मुद्रा',
        yoginiClass: 'परा संवित् शक्ति',
        geometryType: 'Infinitesimal Golden Singularity Point of Divine Union',
        significance: 'अखण्ड सच्चिदानन्द, जीव-ब्रह्म ऐक्य और परम कैवल्य।'
      }
    ],
    jyotish: {
      rulingPlanet: 'बृहस्पति (Jupiter) व शुक्र (Venus)',
      planetSanskrit: 'गुरु-शुक्र राजराजेश्वरी योग',
      friendlyRashis: ['धनु', 'मीन', 'वृषभ', 'तुला', 'कर्क'],
      friendlyNakshatras: ['रोहिणी', 'पुनर्वसु', 'चित्रा', 'उत्तराषाढ़ा'],
      doshaRemedies: [
        {
          doshaName: 'गुरु-राहु चाण्डाल दोष, वैवाहिक तनाव व आत्म-हीनता',
          description: 'दाम्पत्य जीवन में आकर्षण की कमी, लगातार मानसिक असंतोष, आध्यात्मिक मार्ग में गतिरोध।',
          reliefMechanism: 'ललिता यन्त्र के दर्शन और ललिता त्रिशती के पाठ से कामेश्वर-कामेश्वरी की कृपा से अखण्ड सौभाग्य व शान्ति प्राप्त होती है।'
        }
      ],
      lifeAspects: ['सौन्दर्य व आकर्षण', 'अखण्ड सौभाग्य व दाम्पत्य सुख', 'आध्यात्मिक जागृति', 'सम्पूर्ण ब्रह्माण्डीय कृपा'],
      wearOrInstallDirection: 'उत्तर-पूर्व (North-East) अथवा उत्तर (North)',
      favorableDay: 'शुक्रवार (Friday) अथवा पूर्णिमा',
      auspiciousTithi: 'माघ पूर्णिमा (ललिता जयंती) अथवा शरद पूर्णिमा',
      metalPreference: 'स्वर्ण (Gold), स्फटिक (Crystal) अथवा रजत (Silver)',
      beejMantra: 'ॐ ऐं ह्रीं श्रीं ललिता महात्रिपुरसुन्दर्यै नमः॥ (क-ए-ई-ल-ह्रीं ह-स-क-ह-ल-ह्रीं स-क-ल-ह्रीं)',
      gayatriMantra: 'ॐ त्रिपुरादेव्यै च विद्महे कामेश्वर्यै धीमहि तन्नो क्लिन्ने प्रचोदयात्॥',
      japaCount: 108,
      malaType: 'स्फटिक माला अथवा कमल गट्टे की माला',
      dhyanaSloka: 'सिन्दूरारुणविग्रहां त्रिनयनां माणिक्यमौलिस्फुरत्ताराताराधिपशेखरां स्मितमुखीमापीनपीनस्तनीम्। पाणिभ्यामलिपूर्णरत्नचषकं रक्तोत्पलं बिभ्रतीं सौम्यां रत्नघटस्थरक्तचरणां ध्यायेत्परामम्बिकाम्॥',
      pratishthaVidhiSummary: [
        '१. श्वेत अथवा लाल रेशमी वस्त्र पर श्रीललिता यन्त्र प्रतिष्ठित करें।',
        '२. कुमकुम, रक्तचन्दन और सुगंधित लाल गुलाब के पुष्प अर्पित करें।',
        '३. पंचामृत और सुगंधित कर्पूर धूप अर्पित करें।',
        '४. ललिता सहस्रनाम अथवा ललिता त्रिशती का भक्तिभाव से पाठ करें।'
      ]
    },
    practicalRemedies: [
      {
        category: 'Relationships',
        problem: 'दाम्पत्य जीवन में अकारण कटुता, आकर्षण की समाप्ति और आपसी तालमेल का अभाव।',
        remedyProtocol: 'शयनकक्ष अथवा पूजाघर में ललिता परमेश्वरी यन्त्र स्थापित करें और शुक्रवार को सुवासिनी स्त्री को लाल वस्त्र या सुहाग सामग्री भेंट करें।'
      },
      {
        category: 'Spiritual',
        problem: 'कुण्डलिनी जागरण और श्रीविद्या उपासना में उच्चतर अनुभूति की अभीप्सा।',
        remedyProtocol: 'पूर्णिमा की रात्रि में ललिता यन्त्र के मध्य कामकला बिन्दु पर ध्यान एकाग्र करते हुए पंचदशी मन्त्र का १५ माला जप करें।'
      }
    ]
  }
`;

// Update shastric-jyotish-database.ts
let dbContent = fs.readFileSync(dbPath, 'utf8');
if (!dbContent.includes('durga_yantra: {')) {
  const lastIndex = dbContent.lastIndexOf('};');
  if (lastIndex !== -1) {
    dbContent = dbContent.slice(0, lastIndex) + deviDbEntries + '\n};\n';
    fs.writeFileSync(dbPath, dbContent, 'utf8');
    console.log('Appended 4 devi yantras to shastric-jyotish-database.ts with escaped newlines');
  } else {
    console.error('Could not find closing }; in shastric-jyotish-database.ts');
  }
} else {
  console.log('durga_yantra already exists in shastric-jyotish-database.ts');
}

// Fix missing comma in canonical-library-dataset.ts if needed
let sgkbContent = fs.readFileSync(sgkbPath, 'utf8');
if (sgkbContent.includes('relatedYantras: [\'sanjeevani_mahamrityunjaya_yantra\', \'surya_yantra\', \'sudarshana_chakra_yantra\', \'vishnu_yantra\']\n  }\n\n  {\n    id: \'chandika_yantra\'')) {
  sgkbContent = sgkbContent.replace(
    'relatedYantras: [\'sanjeevani_mahamrityunjaya_yantra\', \'surya_yantra\', \'sudarshana_chakra_yantra\', \'vishnu_yantra\']\n  }\n\n  {\n    id: \'chandika_yantra\'',
    'relatedYantras: [\'sanjeevani_mahamrityunjaya_yantra\', \'surya_yantra\', \'sudarshana_chakra_yantra\', \'vishnu_yantra\']\n  },\n  {\n    id: \'chandika_yantra\''
  );
  fs.writeFileSync(sgkbPath, sgkbContent, 'utf8');
  console.log('Fixed comma in canonical-library-dataset.ts');
}
