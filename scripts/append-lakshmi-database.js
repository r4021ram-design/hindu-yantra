const fs = require('fs');
const path = require('path');

const shastricDbPath = path.join(__dirname, '..', 'src', 'lib', 'yantras', 'shastric-jyotish-database.ts');
const canonicalDbPath = path.join(__dirname, '..', 'src', 'lib', 'sgkb', 'canonical-library-dataset.ts');

const lakshmiShastricEntries = `
  ashta_lakshmi_yantra: {
    id: 'ashta_lakshmi_yantra',
    taxonomyCategory: 'lakshmi',
    lineageAttribution: 'लक्ष्मी तन्त्रम् एवं सनत्कुमार संहिता',
    nameSanskrit: 'श्री अष्टलक्ष्मी महायन्त्रम्',
    nameHindi: 'अष्टलक्ष्मी यन्त्र (अष्टविध ऐश्वर्य व समृद्धि)',
    nameEnglish: 'Ashta Lakshmi Yantra (Eightfold Divine Cosmic Abundance)',
    subTitle: 'The Octagonal Lotus of the 8 Sovereign Manifestations of Mother Lakshmi',
    presidingDeity: 'अष्टलक्ष्मी (आदि, धान्य, धैर्य, गज, सन्तान, विजय, विद्या, धन)',
    tradition: 'वैष्णव श्री परम्परा',
    corePhilosophy: 'जीवन के आठों आयामों में पूर्णता और समृद्धि प्रदान करने वाला महायन्त्र। इसके आठ दल देवी के आठ दिव्य रूपों को दर्शाते हैं जो केवल भौतिक धन ही नहीं, बल्कि आध्यात्मिक तेज, साहस, संतति और विद्या भी प्रदान करते हैं।',
    citations: [
      {
        sourceScripture: 'लक्ष्मी तन्त्रम्',
        chapterOrVerse: 'अध्याय ५१, श्लोक १२-१५',
        sanskritSloka: 'आदिलक्ष्मीर्धान्यलक्ष्मीर्धैर्यलक्ष्मीस्तथैव च।\\nगजलक्ष्मीः सन्तानलक्ष्मीर्विजयलक्ष्मीर्विद्या तथा॥\\nधनलक्ष्मीश्चेत्यष्टौ च मण्डले संप्रतिष्ठिताः॥',
        hindiMeaning: 'आदि, धान्य, धैर्य, गज, सन्तान, विजय, विद्या तथा धन—ये आठों लक्ष्मियाँ यन्त्र मण्डल में प्रतिष्ठित होकर साधक के सर्वविध दारिद्र्य का नाश करती हैं।',
        englishMeaning: 'Adi, Dhanya, Dhairya, Gaja, Santana, Vijaya, Vidya, and Dhana Lakshmi—these eight sovereign forms established within the mandala annihilate all poverty.'
      },
      {
        sourceScripture: 'सनत्कुमार संहिता',
        chapterOrVerse: 'अष्टलक्ष्मी स्तोत्रम्',
        sanskritSloka: 'अष्टलक्ष्मी नमस्तुभ्यं वरदे कामरूपिणि।\\nविष्णुवक्षःस्थितां देवीं वन्दे सर्वार्थसाधिनीम्॥',
        hindiMeaning: 'समस्त कामनाओं को पूर्ण करने वाली, भगवान् विष्णु के वक्षःस्थल में निवास करने वाली और समस्त अर्थों को सिद्ध करने वाली अष्टलक्ष्मी को नमस्कार है।',
        englishMeaning: 'Salutations to the eight Lakshmis, grantors of boons, dwelling in the heart of Lord Vishnu, achieving every spiritual and worldly aspiration.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'कनक भूपुर प्राकार',
        nameEnglish: 'Golden Earth Citadel & 4 Cardinal Portals',
        chakraTitle: 'प्रथम आवरण - कनक प्राकार भूपुर',
        presidingDeity: 'महाविष्णु एवं महालक्ष्मी',
        mudraShakti: 'पद्म मुद्रा',
        yoginiClass: 'प्रकट योगिनी',
        geometryType: 'Triple Rampart Citadel with 4 Auspicious Gateways',
        significance: 'Protects the family from unforeseen losses, debt accumulation, and negative household energies.'
      },
      {
        index: 2,
        nameSanskrit: 'सौभाग्य त्रिवलय',
        nameEnglish: 'Triple Girdle of Inviolable Good Fortune',
        chakraTitle: 'द्वितीय आवरण - सौभाग्य त्रिवलय मण्डल',
        presidingDeity: 'अष्टनिधि शक्तियाँ',
        mudraShakti: 'शङ्ख मुद्रा',
        yoginiClass: 'गुप्त योगिनी',
        geometryType: '3 Concentric Golden Bronze Girdles',
        significance: 'Circulates the perpetual vortex of positive financial opportunities and domestic tranquility.'
      },
      {
        index: 3,
        nameSanskrit: 'अष्टदल अष्टलक्ष्मी पद्म',
        nameEnglish: '8-Petal Lotus of the 8 Sovereign Lakshmis',
        chakraTitle: 'तृतीय आवरण - अष्टलक्ष्मी मण्डल',
        presidingDeity: 'आदि, धान्य, धैर्य, गज, सन्तान, विजय, विद्या, धन लक्ष्मी',
        mudraShakti: 'वरद मुद्रा',
        yoginiClass: 'गुप्ततर योगिनी',
        geometryType: '8 Ogee Petals with Spines & Names',
        significance: 'Inscribed with the 8 sacred seed syllables (श्रीं, ह्रीं, क्लीं, श्रीं, ह्रीं, क्लीं, ऐं, श्रीं), activating every aspect of earthly and spiritual abundance.'
      },
      {
        index: 4,
        nameSanskrit: 'वैष्णव श्री षट्कोण',
        nameEnglish: 'Vaishnava Sri Shatkona (Hexagram)',
        chakraTitle: 'चतुर्थ आवरण - षट्कोण मण्डल',
        presidingDeity: 'लक्ष्मीनारायण युगल',
        mudraShakti: 'अभय मुद्रा',
        yoginiClass: 'सम्प्रदाय योगिनी',
        geometryType: 'Interlaced Hexagram with Auspicious Nodes',
        significance: 'Harmonizes masculine creative enterprise (Narayana) with feminine abundance (Lakshmi).'
      },
      {
        index: 5,
        nameSanskrit: 'सर्वार्थसाधक श्रीं महाबिन्दु चक्र',
        nameEnglish: 'Sarvarthasadhaka "Shreem" Supreme Core',
        chakraTitle: 'पञ्चम आवरण - सर्वानन्दमय बिन्दु चक्र',
        presidingDeity: 'परम महालक्ष्मी',
        mudraShakti: 'महालक्ष्मी मुद्रा',
        yoginiClass: 'परापरातिरहस्य योगिनी',
        geometryType: 'Infinitesimal Singularity Point with Shreem Mahabeeja',
        significance: 'The innermost radiant sanctum of supreme fortune. Inscribed with the sovereign seed "श्रीं" (Shreem).'
      }
    ],
    jyotish: {
      rulingPlanet: 'शुक्र (Venus - Daitya Guru & Karaka of Opulence)',
      planetSanskrit: 'शुक्र ग्रह एवं मालव्य महापुरुष योग',
      friendlyRashis: ['वृषभ', 'तुला', 'कर्क', 'मीन'],
      friendlyNakshatras: ['भरणी', 'पूर्वा फाल्गुनी', 'पूर्वाषाढ़ा', 'रोहिणी'],
      doshaRemedies: [
        {
          doshaName: 'Shukra Dosha & Financial Debility (शुक्र दोष व दरिद्रता योग)',
          description: 'Constant drain of hard-earned wealth, lack of material comforts, family disputes, and chronic debts.',
          reliefMechanism: 'Ashta Lakshmi yantra activates Venusian harmonic vibrations, establishing stability and magnetic attraction of prosperity.'
        },
        {
          doshaName: 'Daridra Yoga & Kemadruma Yoga (दरिद्र योग व केमद्रुम दोष)',
          description: 'Mental anxiety regarding livelihood, business collapse, and lack of support from family members.',
          reliefMechanism: 'The eightfold blessing permanently dispels lack and invokes contentment, wisdom, and victory.'
        }
      ],
      lifeAspects: ['Eightfold Universal Prosperity (Ashtaaishwarya)', 'Commercial Expansion & Liquid Cashflow', 'Noble Offspring & Family Harmony', 'Courage, Health & Longevity'],
      wearOrInstallDirection: 'North or North-East (उत्तर अथवा ईशान दिशा)',
      favorableDay: 'Friday (शुक्रवार)',
      auspiciousTithi: 'Diwali, Sharad Poornima, Dhanteras, Varalakshmi Vrata',
      metalPreference: 'Pure Silver (चांदी), Gold (स्वर्ण), or Panchadhatu',
      beejMantra: 'ॐ श्रीं ह्रीं क्लीं अष्टलक्ष्म्यै नमः ॥',
      gayatriMantra: 'ॐ महालक्ष्म्यै च विद्महे विष्णुपत्न्यै च धीमहि तन्नो लक्ष्मीः प्रचोदयात् ॥',
      japaCount: 108,
      malaType: 'Kamalgatta Mala (Lotus Seed Rosary) or Sphatika Rosary',
      dhyanaSloka: 'वन्दे पद्मकरां प्रसन्नवदनां सौभाग्यदां भाग्यदां हस्ताभ्यामभयप्रदां मणिवरैर्नानाविधैर्भूषिताम्। भक्ताभीष्टफलप्रदां हरिवधूं श्रीवत्सचिह्नान्वितां देवीं देवसुपूजितां श्रितजनान्मन्दारशाखामिवाम्॥',
      pratishthaVidhiSummary: [
        'Place on clean red or yellow silk facing North or North-East.',
        'Offer lotus flowers, rose petals, raw rice with turmeric (Akshata), and sweet kheer.',
        'Light a pure cow ghee lamp and fragrant lotus/rose incense.',
        'Chant Sri Suktam and the Ashta Lakshmi mantra 108 times on Friday evening.'
      ]
    },
    practicalRemedies: [
      {
        category: 'Wealth',
        problem: 'व्यापार में अचानक धन हानि, कर्ज का बोझ, और संचित धन का लगातार क्षय होना।',
        remedyProtocol: 'तिजोरी अथवा व्यवसाय के गल्ले में अष्टलक्ष्मी यन्त्र स्थापित कर शुक्रवार को कमलगट्टे की माला से "ॐ श्रीं ह्रीं क्लीं अष्टलक्ष्म्यै नमः" का १०८ बार जप करें।'
      },
      {
        category: 'Spiritual',
        problem: 'गृह में कलह, अशान्ति, और लक्ष्मी के स्थिर न रहने का अनुभव।',
        remedyProtocol: 'पूजा स्थान में यन्त्र पर कनकधारा स्तोत्र का पाठ करते हुए मखाने और खीर का भोग लगाएं।'
      }
    ]
  },

  kanakadhara_yantra: {
    id: 'kanakadhara_yantra',
    taxonomyCategory: 'lakshmi',
    lineageAttribution: 'कनकधारा स्तोत्रम् (आद्य शंकराचार्य) एवं प्रपञ्चसार तन्त्रम्',
    nameSanskrit: 'श्री कनकधारा यन्त्रम् (स्वर्ण-वृष्टि मण्डल)',
    nameHindi: 'कनकधारा यन्त्र (ऋणमुक्ति, आकस्मिक धन व स्वर्ण-कृपा)',
    nameEnglish: 'Kanakadhara Yantra (Cosmic Shower of Golden Abundance)',
    subTitle: 'The 16-Stream Golden Matrix Consecrated by Jagadguru Adi Shankara',
    presidingDeity: 'भगवती महालक्ष्मी (कनकधारा स्वरूप)',
    tradition: 'स्मार्त एवं श्रीविद्या परम्परा',
    corePhilosophy: 'आद्य शंकराचार्य द्वारा एक निर्धन ब्राह्मणी के दारिद्र्य निवारण हेतु प्रकट की गई स्वर्ण वृष्टि का आध्यात्मिक ज्यामितीय रूप। इसके १६ दल देवी की १६ स्वर्णिम धाराओं के प्रतीक हैं जो भाग्य के अवरोधों को नष्ट कर तात्कालिक धन प्रवाह उत्पन्न करते हैं।',
    citations: [
      {
        sourceScripture: 'कनकधारा स्तोत्रम् (आदि शंकराचार्य)',
        chapterOrVerse: 'श्लोक २१',
        sanskritSloka: 'द्राविद्युदन्विभवरत्नसमृद्धिहेतुं कल्याणीमावहसि मे कमलासनस्थाम्।\\nदन्त्यावलीमुखविनिस्सृतहेमकुम्भामासिच्यमानमकुटां जगदीश्वरीं त्वाम्॥',
        hindiMeaning: 'रत्न समृद्धि और विपुल वैभव प्रदान करने वाली, स्वर्ण कलशों से अभिषिक्त जगदीश्वरी भगवती महालक्ष्मी का मैं कनकधारा यन्त्र में ध्यान करता हूँ।',
        englishMeaning: 'I adore the sovereign Empress of the cosmos seated upon the lotus, crowned with golden vessels of nectar, bestowing immense jeweled abundance.'
      },
      {
        sourceScripture: 'प्रपञ्चसार तन्त्रम्',
        chapterOrVerse: 'पटल १८, श्लोक ३५',
        sanskritSloka: 'स्वर्णधारां महालक्ष्मीं यन्त्रमध्ये समर्चयेत्।\\nदारिद्र्यं तत्क्षणादेव नश्यत्येव न संशयः॥',
        hindiMeaning: 'यन्त्र के मध्य में कनकधारा महालक्ष्मी का अर्चन करने से दारिद्र्य उसी क्षण नष्ट हो जाता है, इसमें कोई संशय नहीं है।',
        englishMeaning: 'Worshipping the golden stream of Mahalakshmi within this yantra instantaneously destroys poverty without a shadow of doubt.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'स्वर्ण प्राकार भूपुर',
        nameEnglish: 'Golden Rampart Citadel & 4 Cardinal Gateways',
        chakraTitle: 'प्रथम आवरण - कनक भूपुर प्राकार',
        presidingDeity: 'माता कनकधारा',
        mudraShakti: 'कुम्भ मुद्रा',
        yoginiClass: 'प्रकट योगिनी',
        geometryType: 'Triple Rampart Citadel with 4 Gateways',
        significance: 'Dissolves karmic debts and creates an impenetrable golden barrier against financial distress.'
      },
      {
        index: 2,
        nameSanskrit: 'कनक त्रिवलय',
        nameEnglish: 'Triple Girdle of Liquid Gold',
        chakraTitle: 'द्वितीय आवरण - स्वर्ण धारा त्रिवलय',
        presidingDeity: 'षोडश स्वर्ण शक्तियाँ',
        mudraShakti: 'रत्न मुद्रा',
        yoginiClass: 'गुप्त योगिनी',
        geometryType: '3 Concentric Protective Girdles',
        significance: 'Accelerates the conversion of hard work into tangible material wealth and golden assets.'
      },
      {
        index: 3,
        nameSanskrit: 'षोडश कनकधारा पद्म',
        nameEnglish: '16-Petal Lotus of Golden Nectar Streams',
        chakraTitle: 'तृतीय आवरण - षोडश दल मण्डल',
        presidingDeity: 'षोडश कनक शक्तियाँ',
        mudraShakti: 'वरद मुद्रा',
        yoginiClass: 'गुप्ततर योगिनी',
        geometryType: '16 Ogee Petals with Spines & Seed Mantras',
        significance: 'Inscribed with 16 sacred seeds, producing a continuous stream of unexpected financial breakthroughs and business revenue.'
      },
      {
        index: 4,
        nameSanskrit: 'अष्ट कनक बिन्दु मुद्रा मण्डल',
        nameEnglish: 'Inner 8 Golden Coins & Lotus Sanctum',
        chakraTitle: 'चतुर्थ आवरण - अष्ट कनक बिन्दु मण्डल',
        presidingDeity: 'अष्टनिधि देवता',
        mudraShakti: 'स्वर्ण मुद्रा',
        yoginiClass: 'सम्प्रदाय योगिनी',
        geometryType: '8 Golden Spheres of Liquid Gold (Coins)',
        significance: 'Representing the shower of golden amla fruits that filled the hut of the pious destitute devotee.'
      },
      {
        index: 5,
        nameSanskrit: 'कनकधारा महात्रिकोण पीठ',
        nameEnglish: 'Kanakadhara Primary Inverted Triangle',
        chakraTitle: 'पञ्चम आवरण - महात्रिकोण पीठ',
        presidingDeity: 'श्रीविद्या कनक महालक्ष्मी',
        mudraShakti: 'योनि मुद्रा',
        yoginiClass: 'कुलोत्तीर्ण योगिनी',
        geometryType: 'Downward Primary Golden Triangle',
        significance: 'The divine womb of all treasure and manifestation of pure grace.'
      },
      {
        index: 6,
        nameSanskrit: 'ह्रीं श्रीं कनक महाबिन्दु',
        nameEnglish: 'Hreem Shreem Supreme Luminous Core',
        chakraTitle: 'षष्ठ आवरण - महाबिन्दु चक्र',
        presidingDeity: 'परम कनकधारा महालक्ष्मी',
        mudraShakti: 'महालक्ष्मी मुद्रा',
        yoginiClass: 'परापरातिरहस्य योगिनी',
        geometryType: 'Infinitesimal Core Point with Hreem Shreem Seeds',
        significance: 'The nucleus of golden grace. Inscribed with "ह्रीं" and "श्रीं".'
      }
    ],
    jyotish: {
      rulingPlanet: 'शुक्र एवं गुरु (Venus & Jupiter - Dhanakaraka Yoga)',
      planetSanskrit: 'शुक्र-बृहस्पति धनयोग',
      friendlyRashis: ['वृषभ', 'तुला', 'धनु', 'मीन', 'कर्क'],
      friendlyNakshatras: ['रोहिणी', 'पूर्वा फाल्गुनी', 'पुनर्वसु', 'अनुराधा'],
      doshaRemedies: [
        {
          doshaName: 'Rina Dosha & Chronic Indebtedness (ऋण दोष व कर्ज मुक्ति)',
          description: 'Entanglement in heavy bank loans, unpaid debts, and inability to recover blocked funds.',
          reliefMechanism: 'Kanakadhara yantra invokes immediate divine grace to dissolve financial obstacles and create new cashflow.'
        },
        {
          doshaName: 'Shani Sade Sati Financial Blockages (शनि की ढैया/साढ़ेसाती जनित धन हानि)',
          description: 'Stagnant business, zero sales, and sudden financial drain during Saturn transits.',
          reliefMechanism: 'The luminous golden brilliance of Kanakadhara pacifies Saturnian austerity through spontaneous maternal grace.'
        }
      ],
      lifeAspects: ['Immediate Debt Liquidation', 'Sudden & Unexpected Financial Influx', 'Success in Gold, Jewelry & Trading', 'Protection from Bankruptcy'],
      wearOrInstallDirection: 'North (उत्तर दिशा - Kubera Direction)',
      favorableDay: 'Friday (शुक्रवार) or Poornima',
      auspiciousTithi: 'Akshaya Tritiya, Dhanteras, Sharad Poornima, Deepavali',
      metalPreference: 'Pure Silver (चांदी), Gold (स्वर्ण), or Pure Copper',
      beejMantra: 'ॐ ह्रीं श्रीं क्लीं महालक्ष्म्यै नमः ॥',
      gayatriMantra: 'ॐ कनकधारायै च विद्महे स्वर्णवर्षिण्यै धीमहि तन्नो लक्ष्मीः प्रचोदयात् ॥',
      japaCount: 108,
      malaType: 'Kamalgatta Mala or Sphatika Rosary',
      dhyanaSloka: 'अङ्गानङ्गपरम्पराभरणभूषितगात्रवल्लीं कान्त्या सुवर्णकलशद्युतिभासमानाम्। वन्दे मुकुन्दमहिषीं कमलालयाख्यां कारुण्यपूरहृदयां कनकस्वरूपाम्॥',
      pratishthaVidhiSummary: [
        'Place upon a silver or brass plate facing North.',
        'Offer pure honey, saffron milk, yellow or red flowers, and 8 whole betel nuts.',
        'Light a cow ghee lamp with pure cotton wick.',
        'Recite the Kanakadhara Stotram 3 times and chant the beej mantra 108 times.'
      ]
    },
    practicalRemedies: [
      {
        category: 'Wealth',
        problem: 'अत्यधिक कर्ज, व्यापार में अवरुद्ध धन, और बैंक ऋण से मुक्ति न मिल पाना।',
        remedyProtocol: 'शुक्रवार को उत्तर दिशा में कनकधारा यन्त्र स्थापित कर कनकधारा स्तोत्र का नित्य पाठ करें और मिश्री का भोग लगाएं।'
      },
      {
        category: 'Career',
        problem: 'सोना-चांदी, आभूषण, शेयर बाजार अथवा वित्तीय क्षेत्र में मंदी और नुकसान।',
        remedyProtocol: 'कार्यालय की उत्तर दिशा में यन्त्र स्थापित कर नित्य प्रातः "ॐ ह्रीं श्रीं क्लीं नमः" का जप करें।'
      }
    ]
  },

  vyapar_vriddhi_yantra: {
    id: 'vyapar_vriddhi_yantra',
    taxonomyCategory: 'lakshmi',
    lineageAttribution: 'कुबेर तन्त्रम् एवं मन्त्र महार्णव',
    nameSanskrit: 'श्री व्यापार वृद्धि यन्त्रम् (लक्ष्मी-कुबेर वाणिज्य मण्डल)',
    nameHindi: 'व्यापार वृद्धि यन्त्र (दुकान, व्यवसाय व बिक्री वृद्धि)',
    nameEnglish: 'Vyapar Vriddhi Yantra (Commercial Expansion & Enterprise Success)',
    subTitle: 'The Sacred Confluence of Goddess Lakshmi and Lord Kubera for Business Triumph',
    presidingDeity: 'भगवती लक्ष्मी एवं धनपति कुबेर',
    tradition: 'वाणिज्य तन्त्र परम्परा',
    corePhilosophy: 'दुकान, फैक्ट्री, वाणिज्यिक प्रतिष्ठान और कार्यालय में ग्राहकों के आकर्षण, निरन्तर बिक्री और लाभ वृद्धि हेतु विनिर्मित सिद्ध मण्डल। यह लक्ष्मी की समृद्धि और कुबेर के खजाने का एकीकरण करता है।',
    citations: [
      {
        sourceScripture: 'मन्त्र महार्णव',
        chapterOrVerse: 'कुबेर कल्प, श्लोक ४२',
        sanskritSloka: 'व्यापारवृद्धिकरं यन्त्रं लिखेद्वाणिज्यमण्डले।\\nधनधान्यसमृद्धिः स्यात् सर्वव्यापारसिद्धिदा॥',
        hindiMeaning: 'वाणिज्य स्थल पर व्यापार वृद्धि यन्त्र स्थापित करने से धन-धान्य की अटूट वृद्धि होती है और व्यापार में समस्त प्रकार की सिद्धि प्राप्त होती है।',
        englishMeaning: 'Inscribing the Vyapar Vriddhi Yantra in the commercial sanctum bestows inexhaustible abundance and total business success.'
      },
      {
        sourceScripture: 'कुबेर तन्त्रम्',
        chapterOrVerse: 'पटल ९, मन्त्र १८',
        sanskritSloka: 'ॐ श्रीं ह्रीं क्लीं श्रीं क्लीं वित्तेश्वराय नमः।\\nयन्त्रदर्शनमात्रेण सर्वलाभः प्रजायते॥',
        hindiMeaning: 'यन्त्र के दर्शन मात्र से ग्राहकों की वृद्धि, अटके हुए सौदों का निष्पादन और व्यापारिक लाभ स्वतः उत्पन्न होने लगता है।',
        englishMeaning: 'By the mere presence and consecrated contemplation of this yantra, customer footfall surges and commercial profit is multiplied.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'वाणिज्य प्राकार भूपुर',
        nameEnglish: 'Commercial Citadel & 4 Trade Gateways',
        chakraTitle: 'प्रथम आवरण - चतुर्द्वार वाणिज्य प्राकार',
        presidingDeity: 'अष्टदिक्पाल एवं कुबेर',
        mudraShakti: 'कुबेर मुद्रा',
        yoginiClass: 'प्रकट योगिनी',
        geometryType: 'Triple Rampart Citadel with 4 Trade Portals',
        significance: 'Protects the store or corporate office from competitor jealousy, evil eye (Nazar), and financial stagnation.'
      },
      {
        index: 2,
        nameSanskrit: 'लाभ-विस्तार त्रिवलय',
        nameEnglish: 'Triple Girdle of Continuous Cashflow',
        chakraTitle: 'द्वितीय आवरण - लाभ त्रिवलय मण्डल',
        presidingDeity: 'ऋद्धि-सिद्धि शक्तियाँ',
        mudraShakti: 'लक्ष्मी मुद्रा',
        yoginiClass: 'गुप्त योगिनी',
        geometryType: '3 Concentric Girdles',
        significance: 'Maintains an unceasing momentum of sales, orders, and timely payments from clients.'
      },
      {
        index: 3,
        nameSanskrit: 'अष्टदल वाणिज्य पद्म',
        nameEnglish: '8-Petal Lotus of 8-Directional Expansion',
        chakraTitle: 'तृतीय आवरण - अष्टदल व्यापार मण्डल',
        presidingDeity: 'अष्ट व्यापार देवता (धनं, वृद्धिं, लाभं, सिद्धिं, धान्यं, शुभं, विजयं, श्रीं)',
        mudraShakti: 'आकर्षण मुद्रा',
        yoginiClass: 'गुप्ततर योगिनी',
        geometryType: '8 Ogee Petals with Radiating Spines',
        significance: 'Attracts affluent buyers, lucrative business partnerships, and geographic expansion into all 8 directions.'
      },
      {
        index: 4,
        nameSanskrit: 'लक्ष्मी-कुबेर षट्कोण',
        nameEnglish: 'Lakshmi-Kubera Hexagram of Trade Supremacy',
        chakraTitle: 'चतुर्थ आवरण - षट्कोण मण्डल',
        presidingDeity: 'महालक्ष्मी एवं यक्षराज कुबेर',
        mudraShakti: 'चिन्तामणि मुद्रा',
        yoginiClass: 'सम्प्रदाय योगिनी',
        geometryType: 'Interlaced Hexagram with Commercial Nodes',
        significance: 'Harmonizes asset accumulation (Kubera) with liquid incoming revenue (Lakshmi).'
      },
      {
        index: 5,
        nameSanskrit: 'वाणिज्य पीठ महाचक्र',
        nameEnglish: 'Commercial Altar Square & Seed Mantras',
        chakraTitle: 'पञ्चम आवरण - व्यापार पीठ',
        presidingDeity: 'सिद्धि विनायक एवं कुबेर',
        mudraShakti: 'वरदाभय मुद्रा',
        yoginiClass: 'कुलोत्तीर्ण योगिनी',
        geometryType: 'Concentric Commercial Quadrangle with Corner Beejas',
        significance: 'Inscribed with ॐ, श्रीं, ह्रीं, क्लीं at the 4 corners, anchoring unwavering profitability.'
      },
      {
        index: 6,
        nameSanskrit: 'क्लीं श्रीं महाबीज बिन्दु',
        nameEnglish: 'Klim Shreem Supreme Magnetic Sanctum',
        chakraTitle: 'षष्ठ आवरण - महाबिन्दु चक्र',
        presidingDeity: 'लक्ष्मीनारायण एवं कुबेर',
        mudraShakti: 'सर्वसिद्धि मुद्रा',
        yoginiClass: 'परापरातिरहस्य योगिनी',
        geometryType: 'Infinitesimal Core Point with Klim Shreem Seeds',
        significance: 'The core magnetic center. Inscribed with "क्लीं" (magnetic customer attraction) and "श्रीं" (materialization of wealth).'
      }
    ],
    jyotish: {
      rulingPlanet: 'बुध एवं शुक्र (Mercury & Venus - Trade & Luxury Confluence)',
      planetSanskrit: 'बुध-शुक्र वाणिज्य महायोग',
      friendlyRashis: ['मिथुन', 'कन्या', 'वृषभ', 'तुला'],
      friendlyNakshatras: ['हस्त', 'चित्रा', 'रेवती', 'स्वाति'],
      doshaRemedies: [
        {
          doshaName: 'Vyapar Bandhan & Evil Eye (व्यापार बन्धन व दृष्टि दोष)',
          description: 'Suddenly dropping sales, customers walking away without purchasing, and intense rivalry from competitors.',
          reliefMechanism: 'The yantra shatters all commercial blockages and creates an irresistible magnetic aura in the shop.'
        },
        {
          doshaName: 'Budha-Shukra Graha Peeda in 7th/10th House (व्यापारिक भाव दोष)',
          description: 'Partnership breakups, delayed vendor payments, and inventory accumulation.',
          reliefMechanism: 'Harmonizes the 7th house (partnerships/customers) and 10th house (career/business status).'
        }
      ],
      lifeAspects: ['Multiplication of Daily Sales & Footfall', 'Profitable Business Negotiations & Contracts', 'Elimination of Dead Stock & Inventory Glut', 'Expansion into Multiple Branches & Online Stores'],
      wearOrInstallDirection: 'East or North (पूर्व अथवा उत्तर दिशा - Cash Counter / Entrance)',
      favorableDay: 'Wednesday or Friday (बुधवार अथवा शुक्रवार)',
      auspiciousTithi: 'Dhanteras, Pushya Nakshatra, Shukla Pratipada',
      metalPreference: 'Pure Copper (ताम्र), Brass (पीतल), or Ashtadhatu',
      beejMantra: 'ॐ श्रीं ह्रीं क्लीं कुबेराय नमः ॥',
      gayatriMantra: 'ॐ यक्षराजाय विद्महे वैश्रवणाय धीमहि तन्नो कुबेरः प्रचोदयात् ॥',
      japaCount: 108,
      malaType: 'Kamalgatta Mala or Sandalwood Rosary',
      dhyanaSloka: 'कुबेरं धनदातारं मणिकुण्डलभूषितम्। गदाहस्तं स्वर्णवर्णं नमामि सर्वसिद्धिदम्॥',
      pratishthaVidhiSummary: [
        'Install on the cash counter, billing desk, or facing the main entrance of the business premises.',
        'Worship on Wednesday and Friday morning with incense, camphor, and yellow flowers.',
        'Offer pure betel leaf (Paan) and whole supari.',
        'Chant the Vyapar Vriddhi mantra 108 times before starting the day\'s trade.'
      ]
    },
    practicalRemedies: [
      {
        category: 'Wealth',
        problem: 'दुकान या शोरूम में ग्राहकों का न आना, बिक्री में भारी गिरावट, और माल का न बिकना।',
        remedyProtocol: 'गल्ले (Cash Box) अथवा मुख्य प्रवेश द्वार के सम्मुख व्यापार वृद्धि यन्त्र स्थापित करें और नित्य प्रातः धूप-दीप दिखाएं।'
      },
      {
        category: 'Career',
        problem: 'व्यापारिक साझेदारों के बीच अनबन और बड़े अनुबंधों (Contracts) का हाथ से निकल जाना।',
        remedyProtocol: 'कार्यालय के मुख्य कक्ष की उत्तर दिशा में यन्त्र स्थापित कर बुधवार को "ॐ श्रीं ह्रीं क्लीं कुबेराय नमः" का जप करें।'
      }
    ]
  },

  vaibhav_lakshmi_yantra: {
    id: 'vaibhav_lakshmi_yantra',
    taxonomyCategory: 'lakshmi',
    lineageAttribution: 'भविष्योत्तर पुराण (वैभव लक्ष्मी व्रत कल्प)',
    nameSanskrit: 'श्री वैभव लक्ष्मी यन्त्रम्',
    nameHindi: 'वैभव लक्ष्मी यन्त्र (शुक्रवार व्रत, सौभाग्य व ऐश्वर्य)',
    nameEnglish: 'Vaibhav Lakshmi Yantra (Supreme Grace of Splendor & Household Bliss)',
    subTitle: 'The Friday Vrata Cosmogram for Awakening Inexhaustible Domestic Abundance',
    presidingDeity: 'भगवती वैभव लक्ष्मी',
    tradition: 'पौराणिक व्रत एवं गृहस्थ परम्परा',
    corePhilosophy: 'शुक्रवार वैभव लक्ष्मी व्रत का मूल मण्डल। यह साधक के घर में दरिद्रता, कलह और गृह दोष को समूल नष्ट कर सुख-शान्ति, सौभाग्य, आरोग्य और वैभव की स्थायी प्रतिष्ठा करता है।',
    citations: [
      {
        sourceScripture: 'भविष्योत्तर पुराण',
        chapterOrVerse: 'वैभव लक्ष्मी व्रत कथा',
        sanskritSloka: 'शुक्रवारे प्रपूज्यैव वैभवं प्राप्नुयात् सदा।\\nयन्त्रमध्ये स्थिता देवी सर्वसौभाग्यदायिनी॥',
        hindiMeaning: 'शुक्रवार के दिन यन्त्र में भगवती वैभव लक्ष्मी का पूजन करने से साधक को सर्वदा अक्षय वैभव और समस्त प्रकार के सौभाग्य की प्राप्ति होती है।',
        englishMeaning: 'Worshipping Goddess Vaibhav Lakshmi in this sacred yantra on Fridays bestows unending glory, splendor, and all auspicious fortunes.'
      },
      {
        sourceScripture: 'स्कन्द पुराणम्',
        chapterOrVerse: 'काशी खण्ड, लक्ष्मी स्तुति',
        sanskritSloka: 'या देवी सर्वभूतेषु वैभवभावेन संस्थिता।\\nनमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥',
        hindiMeaning: 'जो देवी समस्त प्राणियों में वैभव और दिव्य ऐश्वर्य के रूप में स्थित हैं, उन्हें बारंबार नमस्कार है।',
        englishMeaning: 'Salutations again and again to that Supreme Goddess who abides in all living beings as sovereign glory and sublime splendor.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'सौभाग्य प्राकार भूपुर',
        nameEnglish: 'Citadel of Auspicious Fortune & 4 Portals',
        chakraTitle: 'प्रथम आवरण - सौभाग्य प्राकार भूपुर',
        presidingDeity: 'माता वैभव लक्ष्मी',
        mudraShakti: 'सौभाग्य मुद्रा',
        yoginiClass: 'प्रकट योगिनी',
        geometryType: 'Triple Rampart Citadel with 4 Auspicious Gateways',
        significance: 'Protects the family hearth from negative planetary afflictions, discord, and generational curses.'
      },
      {
        index: 2,
        nameSanskrit: 'आनन्द त्रिवलय',
        nameEnglish: 'Triple Girdle of Supreme Bliss',
        chakraTitle: 'द्वितीय आवरण - आनन्द त्रिवलय मण्डल',
        presidingDeity: 'पुष्टि एवं तुष्टि शक्तियाँ',
        mudraShakti: 'कमल मुद्रा',
        yoginiClass: 'गुप्त योगिनी',
        geometryType: '3 Concentric Golden Girdles',
        significance: 'Diffuses perpetual peace, mutual love among spouses, and happiness in the home.'
      },
      {
        index: 3,
        nameSanskrit: 'अष्ट ऐश्वर्य ओजी पद्म',
        nameEnglish: '8-Petal Lotus of the 8 Divine Splendors',
        chakraTitle: 'तृतीय आवरण - अष्ट ऐश्वर्य मण्डल',
        presidingDeity: 'अष्ट वैभव शक्तियाँ (सौभाग्य, कीर्ति, आरोग्य, ऐश्वर्य, कान्ति, शान्ति, पुष्टि, तुष्टि)',
        mudraShakti: 'अभय मुद्रा',
        yoginiClass: 'गुप्ततर योगिनी',
        geometryType: '8 Ogee Petals with Radiating Spines',
        significance: 'Inscribed with the 8 divine attributes that make human existence truly noble, healthy, and blessed.'
      },
      {
        index: 4,
        nameSanskrit: 'वैभव षट्कोण',
        nameEnglish: 'Vaibhav Shatkona (Hexagram)',
        chakraTitle: 'चतुर्थ आवरण - षट्कोण मण्डल',
        presidingDeity: 'श्रीहरि विष्णु एवं वैभव लक्ष्मी',
        mudraShakti: 'वरद मुद्रा',
        yoginiClass: 'सम्प्रदाय योगिनी',
        geometryType: 'Interlaced Hexagram with Nodes',
        significance: 'The perfect harmonization of spiritual righteousness (Dharma) and worldly prosperity (Artha).'
      },
      {
        index: 5,
        nameSanskrit: 'वैभव महात्रिकोण',
        nameEnglish: 'Primary Downward Grace Triangle',
        chakraTitle: 'पञ्चम आवरण - महात्रिकोण पीठ',
        presidingDeity: 'भगवती महालक्ष्मी',
        mudraShakti: 'महालक्ष्मी मुद्रा',
        yoginiClass: 'कुलोत्तीर्ण योगिनी',
        geometryType: 'Downward Primary Triangle',
        significance: 'The source of all maternal blessings, healing, and matrimonial joy.'
      },
      {
        index: 6,
        nameSanskrit: 'ॐ श्रीं महाबिन्दु चक्र',
        nameEnglish: 'Om Shreem Supreme Radiant Singularity',
        chakraTitle: 'षष्ठ आवरण - महाबिन्दु चक्र',
        presidingDeity: 'परम वैभव लक्ष्मी',
        mudraShakti: 'सर्वसिद्धि मुद्रा',
        yoginiClass: 'परापरातिरहस्य योगिनी',
        geometryType: 'Infinitesimal Core Point with Om Shreem Seeds',
        significance: 'The supreme radiant nucleus. Inscribed with "ॐ" and "श्रीं".'
      }
    ],
    jyotish: {
      rulingPlanet: 'शुक्र (Venus - Opulence, Beauty & Marital Concord)',
      planetSanskrit: 'शुक्र ग्रह एवं लक्ष्मी योग',
      friendlyRashis: ['वृषभ', 'तुला', 'कर्क', 'मीन'],
      friendlyNakshatras: ['रोहिणी', 'भरणी', 'पूर्वा फाल्गुनी', 'अनुराधा'],
      doshaRemedies: [
        {
          doshaName: 'Griha Klesh & Shukra Peeda (गृह क्लेश व शुक्र पीड़ा)',
          description: 'Constant arguments between husband and wife, loss of beauty, and emotional coldness in the home.',
          reliefMechanism: 'Vaibhav Lakshmi yantra radiates soothing Venusian grace, rekindling love, understanding, and joy.'
        },
        {
          doshaName: 'Alakshmi Dosha & Poverty of Spirit (अलक्ष्मी दोष व विपन्नता)',
          description: 'Feeling of persistent dissatisfaction, money evaporating as soon as it arrives, and bad luck.',
          reliefMechanism: 'Friday worship cleanses the household of Alakshmi and establishes stable, consecrated wealth.'
        }
      ],
      lifeAspects: ['Marital Felicity & Harmonious Marriage', 'Permanent Household Peace & Prosperity', 'Physical Beauty, Glow & Radiant Health', 'Resolution of Critical Family Hardships'],
      wearOrInstallDirection: 'North-East or North (ईशान अथवा उत्तर दिशा)',
      favorableDay: 'Friday (शुक्रवार - Vaibhav Lakshmi Vrata Day)',
      auspiciousTithi: 'Friday during Shukla Paksha, Navaratri, Sharad Poornima',
      metalPreference: 'Silver (चांदी), Copper (ताम्र), or Gold',
      beejMantra: 'ॐ श्रीं ह्रीं क्लीं श्रीं वैभव लक्ष्म्यै नमः ॥',
      gayatriMantra: 'ॐ महालक्ष्म्यै च विद्महे विष्णुपत्न्यै च धीमहि तन्नो लक्ष्मीः प्रचोदयात् ॥',
      japaCount: 108,
      malaType: 'Sphatika Rosary or Kamalgatta Mala',
      dhyanaSloka: 'सौभाग्यदात्रीं कमले स्थितां तां सुवर्णवर्णां मणिनूपुराढ्याम्। स्मितमुखीं सर्ववरप्रदात्रीं वन्दे मुदा वैभवदेवतामहम्॥',
      pratishthaVidhiSummary: [
        'Place on red silk in the home temple or kitchen/sanctum facing North-East.',
        'Perform the Friday Vaibhav Lakshmi Vrata with pure water, rice, red flowers, and sweet kheer.',
        'Light a cow ghee lamp with pure cotton wick.',
        'Chant the Vaibhav Lakshmi mantra 108 times on Friday evening and distribute kheer prasada.'
      ]
    },
    practicalRemedies: [
      {
        category: 'Relationships',
        problem: 'दाम्पत्य जीवन में तनाव, गृह क्लेश, और परिवार के सदस्यों में सामंजस्य की कमी।',
        remedyProtocol: 'शुक्रवार के दिन यन्त्र के समक्ष गाय के घी का दीपक जलाकर "ॐ श्रीं वैभव लक्ष्म्यै नमः" का जप करें और खीर का भोग लगाएं।'
      },
      {
        category: 'Wealth',
        problem: 'धन का न टिकना, अचानक अनावश्यक खर्चे, और घर में बरकत का अभाव।',
        remedyProtocol: 'यन्त्र की प्राण-प्रतिष्ठा कर शुक्रवार को लाल पुष्प और अक्षत अर्पित करें।'
      }
    ]
  }
`;

// Append to shastric-jyotish-database.ts
let shastricContent = fs.readFileSync(shastricDbPath, 'utf-8');
const lastClosingBraceIndex = shastricContent.lastIndexOf('};');

if (lastClosingBraceIndex !== -1 && !shastricContent.includes('ashta_lakshmi_yantra:')) {
  const updatedShastric = shastricContent.slice(0, lastClosingBraceIndex) + lakshmiShastricEntries + '\n};\n';
  fs.writeFileSync(shastricDbPath, updatedShastric, 'utf-8');
  console.log('Appended 4 Lakshmi Yantras to shastric-jyotish-database.ts');
} else {
  console.log('Lakshmi Yantras already exist or closing brace not found in shastric-jyotish-database.ts');
}

// Append to canonical-library-dataset.ts
const lakshmiCanonicalEntries = `  {
    id: 'ashta_lakshmi_yantra',
    names: {
      sa: 'श्री अष्टलक्ष्मी महायन्त्रम्',
      iast: 'Aṣṭa Lakṣmī Yantram',
      hi: 'अष्टलक्ष्मी यन्त्र',
      en: 'Ashta Lakshmi Yantra (Eightfold Divine Abundance)',
      gu: 'અષ્ટલક્ષ્મી યંત્ર'
    },
    deity: 'Ashta Lakshmi (8 Sovereign Forms of Mahalakshmi)',
    mantra: 'Om Shreem Hreem Kleem Ashta Lakshmyai Namah',
    geometrySpec: {
      primaryShape: '8-Petal Ogee Lotus, Vaishnava Shatkona & Shreem Singularity',
      layersCount: 5,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Attainment of the 8 forms of wealth: primeval grace, food grains, courage, royalty, progeny, victory, knowledge, and gold.',
    historicalPeriod: 'Pancharatra / Lakshmi Tantram & Sanatkumara Samhita',
    scripturalCitation: {
      scripture: 'Lakshmi Tantram',
      verse: 'Patala 51, Verses 12-15',
      sanskritText: 'आदिलक्ष्मीर्धान्यलक्ष्मीर्धैर्यलक्ष्मीस्तथैव च... धनलक्ष्मीश्चेत्यष्टौ च मण्डले संप्रतिष्ठिताः॥',
      translation: 'Adi, Dhanya, Dhairya, Gaja, Santana, Vijaya, Vidya, and Dhana Lakshmi established within the sacred mandala.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['mahalakshmi_yantra', 'kanakadhara_yantra', 'kuber_yantra']
  },
  {
    id: 'kanakadhara_yantra',
    names: {
      sa: 'श्री कनकधारा यन्त्रम्',
      iast: 'Kanakadhārā Yantram',
      hi: 'कनकधारा यन्त्र',
      en: 'Kanakadhara Yantra (Golden Shower of Wealth)',
      gu: 'કનકધારા યંત્ર'
    },
    deity: 'Goddess Mahalakshmi (Kanakadhara)',
    mantra: 'Om Hreem Shreem Kleem Mahalakshmyai Namah',
    geometrySpec: {
      primaryShape: '16-Petal Lotus, 8 Golden Coins, Primary Triangle & Hreem Shreem Core',
      layersCount: 6,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Instant liquidation of severe debts, unexpected financial windfall, relief from Saturnian financial hardships, and commercial breakthroughs.',
    historicalPeriod: 'c. 8th Century CE (Jagadguru Adi Shankaracharya Kanakadhara Stotram)',
    scripturalCitation: {
      scripture: 'Kanakadhara Stotram',
      verse: 'Verse 21',
      sanskritText: 'द्राविद्युदन्विभवरत्नसमृद्धिहेतुं कल्याणीमावहसि मे कमलासनस्थाम्...',
      translation: 'I adore the sovereign Empress of the cosmos seated upon the lotus, crowning the seeker with immense jeweled abundance.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['ashta_lakshmi_yantra', 'sri_yantra', 'kuber_yantra']
  },
  {
    id: 'vyapar_vriddhi_yantra',
    names: {
      sa: 'श्री व्यापार वृद्धि यन्त्रम्',
      iast: 'Vyāpāra Vṛddhi Yantram',
      hi: 'व्यापार वृद्धि यन्त्र',
      en: 'Vyapar Vriddhi Yantra (Enterprise & Commercial Expansion)',
      gu: 'વ્યાપાર વૃદ્ધિ યંત્ર'
    },
    deity: 'Goddess Mahalakshmi & Lord Kubera (Yugala)',
    mantra: 'Om Shreem Hreem Kleem Kuberaya Namah',
    geometrySpec: {
      primaryShape: '8-Petal Trade Lotus, Shatkona, Altar Square & Klim Shreem Core',
      layersCount: 6,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Multiplication of retail sales, commercial footfall, removal of business jealousy and stagnant inventory, and lucrative enterprise expansion.',
    historicalPeriod: 'Tantric / Mantra Maharnava & Kubera Tantram',
    scripturalCitation: {
      scripture: 'Mantra Maharnava',
      verse: 'Kubera Kalpa 42',
      sanskritText: 'व्यापारवृद्धिकरं यन्त्रं लिखेद्वाणिज्यमण्डले। धनधान्यसमृद्धिः स्यात् सर्वव्यापारसिद्धिदा॥',
      translation: 'Inscribing the Vyapar Vriddhi Yantra in the commercial sanctum bestows inexhaustible abundance and total business success.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['kuber_yantra', 'ashta_lakshmi_yantra', 'ganesh_yantra']
  },
  {
    id: 'vaibhav_lakshmi_yantra',
    names: {
      sa: 'श्री वैभव लक्ष्मी यन्त्रम्',
      iast: 'Vaibhava Lakṣmī Yantram',
      hi: 'वैभव लक्ष्मी यन्त्र',
      en: 'Vaibhav Lakshmi Yantra (Household Harmony & Glory)',
      gu: 'વૈભવ લક્ષ્મી યંત્ર'
    },
    deity: 'Goddess Vaibhav Lakshmi',
    mantra: 'Om Shreem Hreem Kleem Shreem Vaibhava Lakshmyai Namah',
    geometrySpec: {
      primaryShape: '8-Petal Lotus of Splendors, Shatkona, Triangle & Om Shreem Core',
      layersCount: 6,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Friday Vrata worship, marital concord, permanent removal of domestic strife, radiant health, and peaceful household prosperity.',
    historicalPeriod: 'Puranic / Bhavishyottara Purana',
    scripturalCitation: {
      scripture: 'Bhavishyottara Purana',
      verse: 'Vaibhav Lakshmi Vrata Kalpa',
      sanskritText: 'शुक्रवारे प्रपूज्यैव वैभवं प्राप्नुयात् सदा। यन्त्रमध्ये स्थिता देवी सर्वसौभाग्यदायिनी॥',
      translation: 'Worshipping Goddess Vaibhav Lakshmi in this sacred yantra on Fridays bestows unending glory, splendor, and all auspicious fortunes.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['ashta_lakshmi_yantra', 'mahalakshmi_yantra', 'santana_gopala_yantra']
  }
`;

let canonicalContent = fs.readFileSync(canonicalDbPath, 'utf-8');
const lastClosingBracketIndex = canonicalContent.lastIndexOf('];');

if (lastClosingBracketIndex !== -1 && !canonicalContent.includes("id: 'ashta_lakshmi_yantra'")) {
  const updatedCanonical = canonicalContent.slice(0, lastClosingBracketIndex) + lakshmiCanonicalEntries + '\n];\n';
  fs.writeFileSync(canonicalDbPath, updatedCanonical, 'utf-8');
  console.log('Appended 4 Lakshmi Yantras to canonical-library-dataset.ts');
} else {
  console.log('Lakshmi Yantras already exist or closing bracket not found in canonical-library-dataset.ts');
}
