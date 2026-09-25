const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../src/lib/yantras/shastric-jyotish-database.ts');
const sgkbPath = path.join(__dirname, '../src/lib/sgkb/canonical-library-dataset.ts');

const chakrasDbEntries = `,

  muladhara_chakra: {
    id: 'muladhara_chakra',
    taxonomyCategory: 'kundalini_chakras',
    lineageAttribution: 'षट्चक्रनिरूपणम् (स्वामी पूर्णानन्द परमहंस) एवं गोरक्षपद्धति',
    nameSanskrit: 'मूलाधार चक्र यन्त्रम्',
    nameHindi: 'मूलाधार चक्र यन्त्र (आधार पद्म)',
    nameEnglish: 'Muladhara Chakra Yantra (Root Energy Mandala)',
    subTitle: 'The Foundation Cosmogram of Prithvi Tattva, Sleeping Kundalini, and Adamantine Physical Vitality',
    presidingDeity: 'भगवान् बाल-ब्रह्मा एवं डाकिनी शक्ति',
    tradition: 'नाथ योग, शाक्त कौल आगम एवं तान्त्रिक कुण्डलिनी विज्ञान',
    corePhilosophy: 'मेरुदण्ड के मूल (गुद-मेढ्र के मध्य) में सुषुम्ना नाड़ी के प्रवेश द्वार पर स्थित यह आधार पद्म है। इसमें चार रक्तवर्ण दल (वं, शं, षं, सं), अष्टशूल-युक्त पीत चतुष्कोण (पृथ्वी मण्डल), त्रिवलयाकार कामरूप त्रिकोण, स्वयम्भूलिङ्ग तथा साढ़े तीन फेरे लगाकर प्रसुप्त कुण्डलिनी महाशक्ति विराजती हैं। इसका भेदन करने से साधक का ब्रह्मग्रन्थि-मोचन होता है और समस्त शारीरिक व्याधियां एवं अकाल मृत्यु का भय समाप्त हो जाता है।',
    citations: [
      {
        sourceScripture: 'षट्चक्रनिरूपणम्',
        chapterOrVerse: 'श्लोक ४',
        sanskritSloka: 'अधो वक्त्रं पद्मं सुषुम्ना-विवर-मध्यस्थं सुभगं,\\nचतुर्भिः पत्रैश्चापि वकारादिसकारान्तैर्युक्तं परम् ।\\nसुवर्णामैर्भ्राजत्-कुसुम-सदृशैर्द्योतित-वपुः,\\nमूलाधारं नाम प्रथितमवनी-मण्डलमयम् ॥',
        hindiMeaning: 'सुषुम्ना नाड़ी के मुख पर अधोमुख चार दलों वाला मूलाधार पद्म स्थित है। इसके दलों पर स्वर्ण वर्ण के चमकते हुए चार मातृका वर्ण "वं, शं, षं, सं" देदीप्यमान हैं। यह पृथ्वी मण्डल से समन्वित है।',
        englishMeaning: 'Attached to the mouth of Sushumna Nadi lies the four-petaled Muladhara Lotus facing downwards. Its petals shine with golden lustre and bear the four sacred Matrika letters from Va to Sa (Vaṁ, Śaṁ, Ṣaṁ, Saṁ), enclosing the golden Earth Mandala.'
      },
      {
        sourceScripture: 'गोरक्षपद्धति',
        chapterOrVerse: 'प्रथम शतक, श्लोक १२',
        sanskritSloka: 'मूलाधारे त्रिकोणाख्ये इच्छाज्ञानक्रियात्मके।\\nमध्ये तस्य महालिङ्गं स्वयम्भूः सन्निधिः सदा॥',
        hindiMeaning: 'मूलाधार के त्रिकोण में जो इच्छा, ज्ञान और क्रिया शक्तिमय है, उसके मध्य में साक्षात् स्वयम्भू महालिङ्ग सदा प्रतिष्ठित रहते हैं।',
        englishMeaning: 'In the sacred triangle of Muladhara, the unified matrix of Iccha, Jnana, and Kriya Shaktis, stands the self-existent Svayambhu Mahalinga.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'चतुर्दल पद्म (वं, शं, षं, सं)',
        nameEnglish: '4 Crimson Petals with Golden Matrikas',
        chakraTitle: 'चतुर्दल मण्डल (4 Sacred Petals)',
        presidingDeity: 'चतुर्वक्त्र बाल-ब्रह्मा',
        mudraShakti: 'भूमि स्पर्श मुद्रा',
        yoginiClass: 'डाकिनी योगिनी (अस्थि धातु)',
        geometryType: '4 Ogee Crimson Petals with Golden Matrika Syllables',
        significance: 'धर्म, अर्थ, काम और मोक्ष के चार आधारभूत पुरुषार्थों की सुदृढ़ स्थापना।'
      },
      {
        index: 2,
        nameSanskrit: 'अष्टवज्र पीत चतुष्कोण (पृथ्वी मण्डल)',
        nameEnglish: 'Golden Square with 8 Vajras (Earth Mandala)',
        chakraTitle: 'पृथिवी मण्डल (Tattva Mandala)',
        presidingDeity: 'ऐरावत वाहन लम्बोदर बीज लं',
        mudraShakti: 'वज्र मुद्रा',
        yoginiClass: 'स्थिरता दायिनी शक्ति',
        geometryType: 'Yellow Square with 8 Cardinal & Diagonal Vajra Spears',
        significance: 'साधक को भू-तत्त्व की स्थिरता, धैर्य और अनन्त सहनशीलता प्रदान करना।'
      },
      {
        index: 3,
        nameSanskrit: 'कामरूप त्रिकोण, स्वयम्भूलिङ्ग एवं कुण्डलिनी',
        nameEnglish: 'Traipura Triangle, Svayambhu Linga & Kundalini',
        chakraTitle: 'बिन्दु गर्भ (Sacred Core)',
        presidingDeity: 'सुप्त कुण्डलिनी महाशक्ति (३.५ वेष्टन)',
        mudraShakti: 'मूल बन्ध एवं योनि मुद्रा',
        yoginiClass: 'परम तेजोमयी शक्ति',
        geometryType: 'Inverted Golden Triangle enclosing Linga and 3.5 coiled serpent',
        significance: 'ब्रह्मग्रन्थि का भेदन कर प्रसुप्त प्राण-शक्ति को सुषुम्ना में ऊर्ध्वगामी करना।'
      }
    ],
    jyotish: {
      rulingPlanet: 'मङ्गल (Mars) एवं शनि (Saturn)',
      planetSanskrit: 'भौम-शनैश्चर संयुक्त आधार दोष नाशक',
      friendlyRashis: ['मेष', 'वृश्चिक', 'मकर'],
      friendlyNakshatras: ['अश्विनी', 'मृगशिरा', 'अनुराधा', 'धनिष्ठा'],
      doshaRemedies: [
        {
          doshaName: 'अस्थि दुर्बलता, अत्यधिक आलस्य एवं भय ग्रन्थि',
          description: 'शरीर में ऊर्जा का अभाव, हड्डियों की दुर्बलता, निरंतर असुरक्षा व भय बने रहना।',
          reliefMechanism: 'मूलाधार यन्त्र पर ध्यान एवं "लं" बीज के जप से पृथ्वी तत्त्व पुष्ट होता है और जीवन में अटूट आत्मविश्वास उत्पन्न होता है।'
        }
      ],
      lifeAspects: ['शारीरिक स्वास्थ्य एवं बल', 'असुरक्षा व भय से मुक्ति', 'पृथ्वी तत्त्व सन्तुलन', 'कुण्डलिनी जागरण की नींव'],
      wearOrInstallDirection: 'दक्षिण (South) अथवा पूर्व (East)',
      favorableDay: 'मंगलवार (Tuesday) अथवा शनिवार (Saturday)',
      auspiciousTithi: 'चतुर्थी अथवा अमावस्या',
      metalPreference: 'ताम्र (Copper) अथवा कांसा (Bronze)',
      beejMantra: 'ॐ लं मूलाधारवासिन्यै डाकिन्यै नमः॥ / ॐ लं पृथिवीतत्त्वाय नमः॥',
      gayatriMantra: 'ॐ मूलाधाराय विद्महे कुण्डलिन्यै धीमहि तन्नो जीवः प्रचोदयात्॥',
      japaCount: 108,
      malaType: 'लाल चन्दन अथवा रुद्राक्ष माला',
      dhyanaSloka: 'मूलाधारे त्रिकोणाख्ये कुण्डली-परमेश्वरि। ध्यायेत् सुवर्णवर्णाभां कोटिविद्युत्समप्रभाम्॥',
      pratishthaVidhiSummary: [
        '१. लाल आसन पर पूर्वाभिमुख बैठकर मूलाधार चक्र यन्त्र स्थापित करें।',
        '२. गन्ध (चन्दन) और लाल पुष्पों से पूजन करें।',
        '३. मूल बन्ध लगाकर "लं" बीज का १०८ बार नाभि-कण्ठ तक गुंजन करें।',
        '४. खीर (पायस) का नैवेद्य डाकिनी शक्ति को अर्पित करें।'
      ]
    },
    practicalRemedies: [
      {
        category: 'Physical Vitality',
        problem: 'अत्यधिक शारीरिक थकावट, रक्तचाप की विकृति और कार्य करने में मन न लगना।',
        remedyProtocol: 'प्रातःकाल स्नानोपरान्त मूलाधार यन्त्र के पीत चतुष्कोण का त्राटक करते हुए १०८ बार "लं" का जप करें।'
      }
    ]
  },

  svadhishthana_chakra: {
    id: 'svadhishthana_chakra',
    taxonomyCategory: 'kundalini_chakras',
    lineageAttribution: 'षट्चक्रनिरूपणम् (स्वामी पूर्णानन्द परमहंस) एवं गोरक्षपद्धति',
    nameSanskrit: 'स्वाधिष्ठान चक्र यन्त्रम्',
    nameHindi: 'स्वाधिष्ठान चक्र यन्त्र (जल मण्डल)',
    nameEnglish: 'Svadhishthana Chakra Yantra (Sacral Fluid Matrix)',
    subTitle: 'The Pure Ambrosial Matrix of Apas Tattva, Primal Flow, and Sensory Mastery',
    presidingDeity: 'भगवान् श्रीविष्णु एवं राकिणी शक्ति',
    tradition: 'वैष्णव-शाक्त कुण्डलिनी योग एवं सिद्ध परम्परा',
    corePhilosophy: 'मूलाधार के ठीक ऊपर मेढ्र (जननेंद्रिय) के मूल में स्थित यह षड्दल पद्म है। प्रवाल-मूँगे के समान लाल ६ दलों पर "बं, भं, मं, यं, रं, लं" वर्ण देदीप्यमान हैं। इसके केंद्र में पूर्ण शीतल श्वेत अर्धचन्द्र (वरुण मण्डल) है, जिसमें मकर पर सवार "वं" बीज स्थित है। यह काम, क्रोध, लोभ, मोह, मद और मात्सर्य के षड्रिपू को भस्म कर साधक को रस-सिद्धि व काम-विजय प्रदान करता है।',
    citations: [
      {
        sourceScripture: 'षट्चक्रनिरूपणम्',
        chapterOrVerse: 'श्लोक १४ एवं १६',
        sanskritSloka: 'अथाभ्यन्तरं पद्ममन्यत्सुदीप्तं विशुद्धं\\nस्वाधिष्ठानाख्यं विद्रुमप्रभासैः ।\\nषड्भिः पत्रैर्बकारादिसान्तैर्विभातं\\nतस्याङ्के वारुणो बीजं वकारः सितवर्णकः ॥',
        hindiMeaning: 'मूलाधार के ऊपर मेढ्रमूल में स्वाधिष्ठान पद्म स्थित है। यह प्रवाल के समान कान्ति वाले ६ दलों (बं से लं तक) से युक्त है। इसके अंक में वरुण बीज "वं" मकर पर स्थित है।',
        englishMeaning: 'Above the Muladhara at the root of the genitals lies the Svadhishthana lotus of coral radiance with 6 petals (Baṁ to Laṁ). In its lap rests the white Varuna Beeja "Vaṁ" mounted on a Makara.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'षड्दल विद्रुम पद्म (बं, भं, मं, यं, रं, लं)',
        nameEnglish: '6 Coral-Orange Petals with Matrikas',
        chakraTitle: 'षड्दल पद्म (6 Sacred Petals)',
        presidingDeity: 'श्रीहरि विष्णु (शङ्ख-चक्र-गदा-पद्मधारी)',
        mudraShakti: 'वरुण मुद्रा',
        yoginiClass: 'राकिणी शक्ति (मेद धातु)',
        geometryType: '6 Symmetrical Ogee Petals with Devanagari Syllables',
        significance: 'षड्रिपू (काम, क्रोध, मोह आदि) का शोधन एवं कलात्मक प्रतिभा का प्रस्फुटन।'
      },
      {
        index: 2,
        nameSanskrit: 'शशिशकल श्वेत अर्धचन्द्र (जल मण्डल)',
        nameEnglish: 'Luminous White Crescent Moon (Apas Mandala)',
        chakraTitle: 'वरुण मण्डल (Water Element)',
        presidingDeity: 'मकर वाहन वरुण देव (बीज वं)',
        mudraShakti: 'अमृत वर्षिणी मुद्रा',
        yoginiClass: 'जल तत्त्व स्वामिनी',
        geometryType: 'Pure White Crescent with concentric ripples and Makara base',
        significance: 'शरीर के समस्त जलीय अंश, हार्मोन्स व लसिका तन्त्र का अमृतमय संतुलन।'
      }
    ],
    jyotish: {
      rulingPlanet: 'चन्द्र (Moon) एवं बुध (Mercury)',
      planetSanskrit: 'चन्द्र-बुध सौम्य जल तत्त्व शोधक',
      friendlyRashis: ['कर्क', 'वृष', 'कन्या', 'मीन'],
      friendlyNakshatras: ['रोहिणी', 'हस्त', 'श्रवण', 'रेवती'],
      doshaRemedies: [
        {
          doshaName: 'मानसिक चंचलता, काम-विकार एवं हार्मोन्स असंतुलन',
          description: 'भावनाओं पर नियंत्रण न होना, अत्यधिक कामुकता अथवा जननांग संबंधी व्याधियां।',
          reliefMechanism: 'स्वाधिष्ठान यन्त्र के श्वेत अर्धचन्द्र पर ध्यान करते हुए "वं" बीज के जप से मानसिक शांति और पवित्रता प्राप्त होती है।'
        }
      ],
      lifeAspects: ['मानसिक शीतलता', 'रचनात्मकता व कला-सिद्धि', 'हार्मोन्स संतुलन', 'कामोत्तेजना पर नियंत्रण'],
      wearOrInstallDirection: 'उत्तर (North) अथवा पश्चिम (West)',
      favorableDay: 'सोमवार (Monday)',
      auspiciousTithi: 'पूर्णिमा अथवा द्वितीया',
      metalPreference: 'रजत (Silver) अथवा कांसा',
      beejMantra: 'ॐ वं स्वाधिष्ठानाय राकिणी-सहिताय विष्णवे नमः॥ / ॐ वं वरुणाय नमः॥',
      gayatriMantra: 'ॐ स्वाधिष्ठानाय विद्महे वारुणाय धीमहि तन्नः शक्तिः प्रचोदयात्॥',
      japaCount: 108,
      malaType: 'स्फटिक अथवा श्वेत चन्दन माला',
      dhyanaSloka: 'विद्रुमप्रभ-पद्मस्थं षड्दलं चन्द्रमण्डलम्। वकार-बीज-संयुक्तं वन्दे स्वाधिष्ठान-पङ्कजम्॥',
      pratishthaVidhiSummary: [
        '१. श्वेत वस्त्र पर पूर्वाभिमुख बैठकर यन्त्र स्थापित करें।',
        '२. गंगाजल व दूध से यन्त्र का अभिषेक कर श्वेत चन्दन अर्पित करें।',
        '३. "वं" बीज का १०८ बार नाद करते हुए ध्यान करें।'
      ]
    },
    practicalRemedies: [
      {
        category: 'Emotional Balance',
        problem: 'अत्यधिक भावुकता, अवसाद और अनियंत्रित वासना।',
        remedyProtocol: 'सोमवार की रात्रि में स्वाधिष्ठान यन्त्र के अर्धचन्द्र पर १० मिनट त्राटक कर "वं" का जप करें।'
      }
    ]
  },

  manipura_chakra: {
    id: 'manipura_chakra',
    taxonomyCategory: 'kundalini_chakras',
    lineageAttribution: 'षट्चक्रनिरूपणम् (स्वामी पूर्णानन्द परमहंस) एवं गोरक्षपद्धति',
    nameSanskrit: 'मणिपूर चक्र यन्त्रम्',
    nameHindi: 'मणिपूर चक्र यन्त्र (अग्नि मण्डल)',
    nameEnglish: 'Manipura Chakra Yantra (Solar Plexus Fire Center)',
    subTitle: 'The Celestial Gem-City of Agni Tattva, Metabolic Transmutation, and Unyielding Willpower',
    presidingDeity: 'भगवान् वृद्ध-रुद्र एवं लाकिणी शक्ति',
    tradition: 'शैव-शाक्त हठयोग एवं नाथ आगम',
    corePhilosophy: 'नाभिमूल में स्थित यह दशदल पद्म है, जो मेघनील रंग के १० दलों (डं से फं तक) से युक्त है। इसके मध्य में दहकती हुई अग्नि का लाल त्रिकोण मण्डल है, जिसके तीन कोनों पर तीन दिव्य स्वस्तिक अंकित हैं। त्रिकोण के केंद्र में मेष (मेढ़े) पर आरूढ़ अग्नि-बीज "रं" स्थित है। यह जठराग्नि को प्रदीप्त कर साधक के भीतर सूर्य के समान ओज, तेज और संकल्प-शक्ति उत्पन्न करता है।',
    citations: [
      {
        sourceScripture: 'षट्चक्रनिरूपणम्',
        chapterOrVerse: 'श्लोक १९ एवं २०',
        sanskritSloka: 'तदूर्ध्वे नाभौ तु दशदल-युतं मणिपूरं\\nमहामेघ-द्योतं डफ-दल-युतं वर्ण-सुभगम् ।\\nतदन्तस्तैजसं मण्डलं अतिरक्तं त्रिकोणं\\nत्रिभिः स्वस्तिकैश्च समन्ताद् विचित्रम् ॥\\nध्यायेद्वैश्वानर-बीजं रकारं मेष-वाहनम् ॥',
        hindiMeaning: 'नाभिदेश में १० दलों वाला मणिपूर पद्म है, जिस पर "डं" से लेकर "फं" तक वर्ण हैं। इसके भीतर त्रि-स्वस्तिक युक्त अग्नि का रक्त त्रिकोण है, जिसके मध्य में मेष-वाहन अग्निबीज "रं" विराजित है।',
        englishMeaning: 'At the navel is the 10-petaled Manipura lotus (Ḍaṁ to Phaṁ). Inside blazes the crimson triangle of Fire adorned with 3 swastikas, enclosing the ram-mounted Beeja "Raṁ".'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'दशदल नील पद्म (डं से फं)',
        nameEnglish: '10 Dark Blue Petals with Matrikas',
        chakraTitle: 'दशदल पद्म (10 Sacred Petals)',
        presidingDeity: 'भगवान् रुद्र (अभय-वरद हस्त)',
        mudraShakti: 'अग्नि मुद्रा',
        yoginiClass: 'लाकिणी शक्ति (मांस धातु)',
        geometryType: '10 Blue Ogee Petals with Inscribed Golden Matrikas',
        significance: 'आलस्य, प्रमाद, ईर्ष्या व मोह का दहन कर आध्यात्मिक ओज का संचय।'
      },
      {
        index: 2,
        nameSanskrit: 'त्रि-स्वस्तिक रक्त त्रिकोण (अग्नि मण्डल)',
        nameEnglish: 'Crimson Triangle with 3 Swastikas (Fire Mandala)',
        chakraTitle: 'अग्नि मण्डल (Fire Element)',
        presidingDeity: 'मेष वाहन वैश्वानर बीज रं',
        mudraShakti: 'उड्डियान बन्ध एवं अग्निसार',
        yoginiClass: 'तेजस्विनी शक्ति',
        geometryType: 'Fiery Red Upright Triangle with 3 Swastika Corners and Mesha Vahana',
        significance: 'जठराग्नि व प्राण-ऊर्जा की प्रचण्ड ज्वाला से समस्त विषाक्त तत्त्वों का भस्मीकरण।'
      }
    ],
    jyotish: {
      rulingPlanet: 'सूर्य (Sun) एवं मङ्गल (Mars)',
      planetSanskrit: 'सूर्य-भौम प्रचण्ड तेज प्रदायक',
      friendlyRashis: ['सिंह', 'मेष', 'धनु'],
      friendlyNakshatras: ['कृतिका', 'उत्तराफाल्गुनी', 'उत्तराषाढ़ा'],
      doshaRemedies: [
        {
          doshaName: 'पाचन दुर्बलता, मन्द जठराग्नि एवं हीनभावना',
          description: 'उदर रोग, मधुमेह, निर्णय लेने में असमर्थता और जीवन में आत्मबल का अभाव।',
          reliefMechanism: 'मणिपूर यन्त्र के त्रिकोण पर ध्यान और "रं" बीज के जप से सूर्य मण्डल जाग्रत होता है और प्रचण्ड आत्मविश्वास प्राप्त होता है।'
        }
      ],
      lifeAspects: ['दृढ़ इच्छाशक्ति एवं नेतृत्व', 'जठराग्नि व पाचन शुद्धि', 'शत्रु पराजय', 'आन्तरिक ओज व तेज'],
      wearOrInstallDirection: 'पूर्व (East)',
      favorableDay: 'रविवार (Sunday) अथवा मंगलवार (Tuesday)',
      auspiciousTithi: 'सप्तमी अथवा दशमी',
      metalPreference: 'स्वर्ण (Gold), ताम्र (Copper) अथवा पीतल (Brass)',
      beejMantra: 'ॐ रं मणिपूराय लाकिणी-सहिताय रुद्राय नमः॥ / ॐ रं अग्नये नमः॥',
      gayatriMantra: 'ॐ मणिपूराय विद्महे तेजोरूपाय धीमहि तन्नोऽग्निः प्रचोदयात्॥',
      japaCount: 108,
      malaType: 'रुद्राक्ष अथवा रक्त चन्दन माला',
      dhyanaSloka: 'नाभिपद्मे दशदले ज्वलन्तमग्निसन्निभम्। रं-बीज-सहितं ध्यायेद् रुद्रं त्रैलोक्यतारकम्॥',
      pratishthaVidhiSummary: [
        '१. लाल वस्त्र पर मणिपूर चक्र यन्त्र स्थापित कर घृत का अखण्ड दीपक जलाएं।',
        '२. कुंकुम और रक्त पुष्पों से पूजन करें।',
        '३. उड्डियान बन्ध लगाकर "रं" बीज का नाभि पर ध्यान करते हुए जप करें।'
      ]
    },
    practicalRemedies: [
      {
        category: 'Metabolic & Willpower',
        problem: 'पाचन की खराबी, आलस्य और किसी भी कार्य को आरम्भ करने में हिचकिचाहट।',
        remedyProtocol: 'प्रातःकाल सूर्योदय के समय मणिपूर चक्र यन्त्र के केंद्र पर ५ मिनट त्राटक कर १०८ बार "रं" का उच्चारण करें।'
      }
    ]
  },

  anahata_chakra: {
    id: 'anahata_chakra',
    taxonomyCategory: 'kundalini_chakras',
    lineageAttribution: 'षट्चक्रनिरूपणम् (स्वामी पूर्णानन्द परमहंस) एवं गोरक्षपद्धति',
    nameSanskrit: 'अनाहत चक्र यन्त्रम्',
    nameHindi: 'अनाहत चक्र यन्त्र (हृदय मण्डल)',
    nameEnglish: 'Anahata Chakra Yantra (Cosmic Heart Center)',
    subTitle: 'The Unstruck Cosmic Vibrational Portal of Vayu Tattva, Baanalinga, and Vishnu Granthi Liberation',
    presidingDeity: 'भगवान् ईश (पिनाकी शिव) एवं काकिणी शक्ति',
    tradition: 'शैव-वेदान्त एवं शाक्त समयाचार परम्परा',
    corePhilosophy: 'हृदय देश में स्थित यह द्वादशदल पद्म है, जो बन्धूक पुष्प के समान सिन्दूर वर्ण के १२ दलों (कं से ठं तक) से युक्त है। इसके मध्य में धूम्र वर्ण का षट्कोण (दो परस्पर गुम्फित त्रिकोण) है, जो वायु-मण्डल का स्वरूप है। षट्कोण के केंद्र में सुवर्णमय कामरूप त्रिकोण, कोटि सूर्यों के समान चमचमाता बाणलिङ्ग तथा अखण्ड दीपशिखा के समान जलती हंस-ज्योति (जीवात्मा) प्रतिष्ठित है। यहाँ विष्णुग्रन्थि का भेदन होता है और अनहद नाद (ॐ) की ध्वनि सुनाई देती है।',
    citations: [
      {
        sourceScripture: 'षट्चक्रनिरूपणम्',
        chapterOrVerse: 'श्लोक २२ एवं २५',
        sanskritSloka: 'हृदि स्यादनाहत-पद्मं सुदीप्तं\\nकठाद्यैर्दलैर्द्वादशैरन्वितं च ।\\nअतिधूम्र-वर्णेन वायोस्तु लिङ्गे\\nषट्कोणेन युक्तं मनोहारि-दीप्तम् ॥\\nतन्मध्ये बाणलिङ्गं कनक-रुचिमयं सूर्य-कोटि-प्रकाशम् ॥',
        hindiMeaning: 'हृदय देश में १२ दलों वाला अनाहत पद्म है (कं से ठं तक)। इसके मध्य में धूम्र वर्ण का वायु षट्कोण है, जिसमें कोटि सूर्यों के समान बाणलिङ्ग तथा अखण्ड दीपशिखा के समान हंस प्रकाशित है।',
        englishMeaning: 'In the heart space is the 12-petaled Anahata lotus (Kaṁ to Ṭhaṁ) enclosing the smoky hexagonal Air Mandala. Within it blazes the golden Baanalinga and the steady flame of the Hamsa.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'द्वादशदल बन्धूक पद्म (कं से ठं)',
        nameEnglish: '12 Vermilion Petals with Matrikas',
        chakraTitle: 'द्वादशदल पद्म (12 Sacred Petals)',
        presidingDeity: 'भगवान् ईश (कर्पूर-गौर शिव)',
        mudraShakti: 'हृदय मुद्रा',
        yoginiClass: 'काकिणी शक्ति (रक्त धातु)',
        geometryType: '12 Vermilion Red Ogee Petals with Inscribed Matrikas',
        significance: 'संकीर्ण स्वार्थपरता का त्याग कर विश्व-मैत्री व अहैतुक करुणा का उदय।'
      },
      {
        index: 2,
        nameSanskrit: 'धूम्र षट्कोण (वायु मण्डल)',
        nameEnglish: 'Smoky Interlocking Hexagram (Air Mandala)',
        chakraTitle: 'वायु मण्डल (Air Element)',
        presidingDeity: 'कृष्णमृग वाहन पवन बीज यं',
        mudraShakti: 'प्राणायाम कुम्भक',
        yoginiClass: 'प्राण स्वामिनी शक्ति',
        geometryType: 'Smoky Hexagram of Two Intersecting Triangles (Shiva & Shakti)',
        significance: 'प्राण और अपान का समरस मिलन तथा हृदय की असीमित गतिशीलता।'
      },
      {
        index: 3,
        nameSanskrit: 'स्वर्ण बाणलिङ्ग एवं अखण्ड दीपशिखा (हंस)',
        nameEnglish: 'Golden Baanalinga & Unshaken Flame (Hamsa)',
        chakraTitle: 'अनाहत नाद गुहा (Inner Sanctum)',
        presidingDeity: 'जीवात्मा स्वरूप परब्रह्म हंस',
        mudraShakti: 'खेचरी मुद्रा',
        yoginiClass: 'विष्णुग्रन्थि विमोचिनी',
        geometryType: 'Golden Triangle enclosing Baanalinga and eternal glowing Flame',
        significance: 'विष्णुग्रन्थि का भेदन तथा अनाहत नाद (शब्दातीत ब्रह्म) का प्रत्यक्ष श्रवण।'
      }
    ],
    jyotish: {
      rulingPlanet: 'शुक्र (Venus)',
      planetSanskrit: 'शुक्र सौन्दर्य-प्रेम-करुणा प्रदायक',
      friendlyRashis: ['वृष', 'तुला', 'मीन'],
      friendlyNakshatras: ['भरणी', 'पूर्वाफाल्गुनी', 'पूर्वाषाढ़ा'],
      doshaRemedies: [
        {
          doshaName: 'हृदय रोग, रक्तचाप एवं भावनात्मक आघात (Emotional Trauma)',
          description: 'हृदय में भारीपन, अकेलापन, प्रेम में वंचना और सांस लेने में कठिनाई।',
          reliefMechanism: 'अनाहत यन्त्र के बाणलिङ्ग और अखण्ड ज्योति पर ध्यान करते हुए "यं" बीज के जप से हृदय-कवच का निर्माण होता है और असीम शान्ति मिलती है।'
        }
      ],
      lifeAspects: ['अहैतुक प्रेम एवं क्षमाशीलता', 'हृदय व श्वसन स्वास्थ्य', 'विष्णुग्रन्थि भेदन', 'अनाहत नाद का प्रकटीकरण'],
      wearOrInstallDirection: 'ईशान (North-East) अथवा पूर्व (East)',
      favorableDay: 'शुक्रवार (Friday)',
      auspiciousTithi: 'त्रयोदशी अथवा पूर्णिमा',
      metalPreference: 'रजत (Silver) अथवा कांसा',
      beejMantra: 'ॐ यं अनाहताय काकिणी-सहिताय ईशाय नमः॥ / ॐ यं वायवे नमः॥',
      gayatriMantra: 'ॐ अनाहताय विद्महे बाणलिङ्गाय धीमहि तन्नो हंसः प्रचोदयात्॥',
      japaCount: 108,
      malaType: 'स्फटिक अथवा श्वेत चन्दन माला',
      dhyanaSloka: 'हृत्पद्मे द्वादशदले षट्कोणे वायुमण्डले। बाणलिङ्गं समभ्यर्च्य हंसज्योतिः प्रपद्यते॥',
      pratishthaVidhiSummary: [
        '१. श्वेत अथवा गुलाबी वस्त्र पर अनाहत यन्त्र स्थापित करें।',
        '२. चन्दन, श्वेत पुष्प और इत्र से पूजन करें।',
        '३. नाड़ी शोधन प्राणायाम करते हुए हृदय में अखण्ड दीपक की ज्योति का ध्यान करें और "यं" का जप करें।'
      ]
    },
    practicalRemedies: [
      {
        category: 'Heart Healing',
        problem: 'गहरे भावनात्मक दुःख, सम्बन्धों में कटुता और निरंतर अवसाद।',
        remedyProtocol: 'प्रतिदिन सायंकाल अनाहत यन्त्र के केंद्र पर बाणलिङ्ग की ज्योति का स्मरण कर १०८ बार "ॐ यं" का जप करें।'
      }
    ]
  },

  vishuddha_chakra: {
    id: 'vishuddha_chakra',
    taxonomyCategory: 'kundalini_chakras',
    lineageAttribution: 'षट्चक्रनिरूपणम् (स्वामी पूर्णानन्द परमहंस) एवं गोरक्षपद्धति',
    nameSanskrit: 'विशुद्ध चक्र यन्त्रम्',
    nameHindi: 'विशुद्ध चक्र यन्त्र (आकाश मण्डल)',
    nameEnglish: 'Vishuddha Chakra Yantra (Throat Void Matrix)',
    subTitle: 'The Pure Celestial Expansiveness of Akasha Tattva, Vak-Siddhi, and Ambrosial Downpour',
    presidingDeity: 'भगवान् पञ्चमुख सदाशिव एवं शाकिणी शक्ति',
    tradition: 'शैव आगम एवं शाक्त समयाचार परम्परा',
    corePhilosophy: 'कण्ठमूल में स्थित यह षोडशदल पद्म है, जो धूम्र-नील कान्ति वाले १६ दलों (१६ मातृका स्वर: अं से अः तक) से युक्त है। इसके मध्य में पूर्ण चन्द्रमा के समान श्वेत वृत्ताकार आकाश मण्डल है, जिसमें श्वेत ऐरावत हाथी पर आकाश-बीज "हं" प्रतिष्ठित है। यहाँ पञ्चमुख सदाशिव अर्धनारीश्वर रूप में तथा श्वेत वर्णी शाकिणी शक्ति विराजती हैं। यह चक्र वाणी की परम सिद्धि (वाक्-सिद्धि), काल-ज्ञान और हलाहल विष को अमृत में बदलने का सामर्थ्य देता है।',
    citations: [
      {
        sourceScripture: 'षट्चक्रनिरूपणम्',
        chapterOrVerse: 'श्लोक २८ एवं ३१',
        sanskritSloka: 'कण्ठे विशुद्धं कमलाभ-कान्तिं\\nस्वरैश्च षोडश-दलैः समन्तात् ।\\nआकाश-रूपं सित-वृत्त-युक्तं\\nहकार-बीजं गज-पृष्ठ-संस्थम् ॥\\nकविर्भवति सर्वज्ञो नित्य-तृप्तो महामनाः ॥',
        hindiMeaning: 'कण्ठ देश में १६ दलों (अं से अः) वाला विशुद्ध पद्म है। इसमें श्वेत वृत्ताकार आकाश मण्डल है, जहाँ श्वेत हाथी पर बीज "हं" स्थित है। यहाँ ध्यान करने से साधक कवि, त्रिकालज्ञ व नित्य तृप्त हो जाता है।',
        englishMeaning: 'In the throat is the 16-petaled Vishuddha lotus with all 16 vowels. In its center is the white circular Ether Mandala, where the Bija "Haṁ" rides a snow-white elephant, granting poetic genius and omniscience.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'षोडशदल जाम्बूनद पद्म (अं से अः)',
        nameEnglish: '16 Smoky Lilac Petals with 16 Vowels',
        chakraTitle: 'षोडशदल पद्म (16 Sacred Vowels)',
        presidingDeity: 'पञ्चवक्त्र सदाशिव (दशभुज)',
        mudraShakti: 'जालन्धर बन्ध',
        yoginiClass: 'शाकिणी शक्ति (त्वक् धातु)',
        geometryType: '16 Lilac Ogee Petals with Inscribed Sanskrit Vowels',
        significance: 'समस्त नाद-सृष्टि और १६ कलाओं का ज्ञान एवं वाक्-शक्ति की परिपक्वता।'
      },
      {
        index: 2,
        nameSanskrit: 'पूर्णचन्द्र श्वेत वृत्त (आकाश मण्डल)',
        nameEnglish: 'Pure Luminous Circle (Akasha Mandala)',
        chakraTitle: 'आकाश मण्डल (Space Element)',
        presidingDeity: 'श्वेत ऐरावत वाहन आकाश बीज हं',
        mudraShakti: 'खेचरी एवं उन्मनी मुद्रा',
        yoginiClass: 'व्योम स्वामिनी',
        geometryType: 'Pure Silver-White Circle enclosing Inverted Triangle and Nectar Drop',
        significance: 'ललना चक्र से टपकने वाले सोम-अमृत का पान कर कालजयी अमरत्व प्राप्त करना।'
      }
    ],
    jyotish: {
      rulingPlanet: 'बृहस्पति (Jupiter)',
      planetSanskrit: 'गुरु वाक्-पाण्डित्य एवं विशुद्ध ज्ञान प्रदायक',
      friendlyRashis: ['धनु', 'मीन', 'कर्क'],
      friendlyNakshatras: ['पुनर्वसु', 'विशाखा', 'पूर्वाभाद्रपद'],
      doshaRemedies: [
        {
          doshaName: 'वाणी दोष, थायराइड व्याधि एवं अभिव्यक्ति में भय',
          description: 'बोलने में हकलाहट, गले के विकार, सत्य बोलने का साहस न होना और ज्ञान की कुण्ठा।',
          reliefMechanism: 'विशुद्ध चक्र यन्त्र के श्वेत वृत्त पर ध्यान और "हं" बीज के गुंजन से वाणी ओजस्वी होती है और कंठ के समस्त रोग दूर होते हैं।'
        }
      ],
      lifeAspects: ['वाक्-सिद्धि एवं सम्भाषण चातुर्य', 'थायराइड व श्वास शुद्धि', 'अमृत स्राव का धारण', 'आकाश तत्त्व का साक्षात्कार'],
      wearOrInstallDirection: 'ईशान (North-East)',
      favorableDay: 'गुरुवार (Thursday)',
      auspiciousTithi: 'एकादशी अथवा पूर्णिमा',
      metalPreference: 'स्वर्ण (Gold) अथवा कांसा',
      beejMantra: 'ॐ हं विशुद्धाय शाकिणी-सहिताय सदाशिवाय नमः॥ / ॐ हं आकाशाय नमः॥',
      gayatriMantra: 'ॐ विशुद्धाय विद्महे व्योमरूपाय धीमहि तन्नः शिवः प्रचोदयात्॥',
      japaCount: 108,
      malaType: 'रुद्राक्ष अथवा तुलसी माला',
      dhyanaSloka: 'कण्ठपद्मे षोडशारे पूर्णचन्द्र-समप्रभे। हं-बीज-सहितं ध्यायेत् सदाशिवमनन्तकम्॥',
      pratishthaVidhiSummary: [
        '१. पीले अथवा श्वेत रेशमी वस्त्र पर विशुद्ध यन्त्र स्थापित करें।',
        '२. श्वेत चन्दन और सुगंधित धूप से पूजन करें।',
        '३. जालन्धर बन्ध लगाकर उज्जायी प्राणायाम के साथ "हं" बीज का नाद करें।'
      ]
    },
    practicalRemedies: [
      {
        category: 'Communication & Throat',
        problem: 'सार्वजनिक भाषण में भय, कंठ में अवरोध और वाणी का अप्रभावी होना।',
        remedyProtocol: 'प्रातःकाल विशुद्ध चक्र यन्त्र के वृत्त पर त्राटक करते हुए १०८ बार "ॐ हं" का स्पष्ट उच्चारण करें।'
      }
    ]
  },

  ajna_chakra: {
    id: 'ajna_chakra',
    taxonomyCategory: 'kundalini_chakras',
    lineageAttribution: 'षट्चक्रनिरूपणम् (स्वामी पूर्णानन्द परमहंस) एवं गोरक्षपद्धति',
    nameSanskrit: 'आज्ञा चक्र यन्त्रम्',
    nameHindi: 'आज्ञा चक्र यन्त्र (भ्रूमध्य / इतरलिङ्ग)',
    nameEnglish: 'Ajna Chakra Yantra (Third Eye Command Center)',
    subTitle: 'The Eye of Intuition, Lightning-Luminous Itara Linga, and Rudra Granthi Liberation',
    presidingDeity: 'भगवान् शम्भु (परमशिव) एवं षडानना हाकिणी शक्ति',
    tradition: 'शैव सिद्ध, नाथ आगम एवं कैवल्य वेदान्त परम्परा',
    corePhilosophy: 'दोनों भौंहों के मध्य (भ्रूमध्य) में स्थित यह द्विदलि पद्म है। इसके दो दलों पर "हं" (सूर्य/पिंगला) और "क्षं" (चन्द्र/इड़ा) अंकित हैं। इसके भीतर एक योनि त्रिकोण में बिजली की कौंध के समान देदीप्यमान "इतरलिङ्ग" तथा उसके मध्य में अखण्ड दीपक के समान प्रणव ज्योति (ॐ) जल रही है। यहाँ रुद्रग्रन्थि का भेदन होता है, द्वैत का विनाश होता है और साधक "सोऽहम्" के साक्षात्कार से साक्षात् शिव स्वरूप हो जाता है।',
    citations: [
      {
        sourceScripture: 'षट्चक्रनिरूपणम्',
        chapterOrVerse: 'श्लोक ३२ एवं ३४',
        sanskritSloka: 'आज्ञानामामबुजं तद् हिमकर-सदृशं ध्यान-धाम प्रकाशं\\nहक्षाभ्यां वै कलाभ्यां परिलसित-वपुर्नेत्र-योर्मध्य-देशे ।\\nतस्यान्तस्त्रिकोणे तडिदिव विलसद् रूपमत्यन्त-गुह्यं\\nलिङ्गं तच्चेतराख्यं प्रणव-विलसितं दीप-तुल्यं स्वरूपम् ॥',
        hindiMeaning: 'भ्रूमध्य में हिम-शुभ्र आज्ञा पद्म है, जिसके दो दल (हं और क्षं) हैं। इसके त्रिकोण में बिजली के समान इतरलिङ्ग तथा दीपक के समान ॐ प्रणव प्रकाशित है।',
        englishMeaning: 'Between the eyebrows is the moon-white Ajna lotus with two petals (Haṁ and Kṣaṁ). Inside its triangle blazes the lightning-like Itara Linga and the Pranava Om, dissolving all illusion.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'द्विदल हिमकर पद्म (हं एवं क्षं)',
        nameEnglish: '2 Moon-White Petals (Ham and Ksham)',
        chakraTitle: 'द्विदल पद्म (2 Sacred Petals)',
        presidingDeity: 'षडानना हाकिणी शक्ति (मज्जा धातु)',
        mudraShakti: 'शाम्भवी मुद्रा',
        yoginiClass: 'हाकिणी ज्ञान योगिनी',
        geometryType: '2 Pure Moon-White Petals with Golden Inscribed Ha and Ksha',
        significance: 'इड़ा और पिंगला का सुषुम्ना में लय तथा संकल्प-विकल्प का शमन।'
      },
      {
        index: 2,
        nameSanskrit: 'कामरूप त्रिकोण, इतरलिङ्ग एवं प्रणव (ॐ)',
        nameEnglish: 'Inverted Triangle, Itara Linga & Pranava (Om)',
        chakraTitle: 'त्रिवेणी संगम (Inner Eye)',
        presidingDeity: 'परमशिव शम्भु एवं नाद-बिन्दु',
        mudraShakti: 'खेचरी एवं शाम्भवी',
        yoginiClass: 'रुद्रग्रन्थि विमोचिनी',
        geometryType: 'Pure Inverted Triangle enclosing Lightning Linga and Omkara Disc',
        significance: 'रुद्रग्रन्थि का भेदन, दिव्य त्रिकाल दृष्टि का उदय और कैवल्य समाधि का द्वार।'
      }
    ],
    jyotish: {
      rulingPlanet: 'गुरु (Jupiter) एवं केतु (Ketu)',
      planetSanskrit: 'गुरु-केतु मोक्ष व दिव्य दृष्टि कारक',
      friendlyRashis: ['धनु', 'मीन', 'वृश्चिक'],
      friendlyNakshatras: ['पुनर्वसु', 'मघा', 'मूल', 'उत्तराभाद्रपद'],
      doshaRemedies: [
        {
          doshaName: 'मानसिक भ्रम, अनिद्रा, माइग्रेन एवं दृष्टि दोष',
          description: 'सिरदर्द, अत्यधिक भटकाव, ध्यान न लगना और भविष्य की दिशा न सूझना।',
          reliefMechanism: 'आज्ञा चक्र यन्त्र के इतरलिङ्ग और प्रणव पर शाम्भवी मुद्रा से त्राटक करने पर मानसिक शांति और दिव्य अंतर्ज्ञान प्राप्त होता है।'
        }
      ],
      lifeAspects: ['दिव्य दृष्टि एवं अन्तर्ज्ञान (Intuition)', 'रुद्रग्रन्थि भेदन', 'अहंकार का विसर्जन', 'आध्यात्मिक गुरु-कृपा प्राप्ति'],
      wearOrInstallDirection: 'उत्तर (North) अथवा पूर्व (East)',
      favorableDay: 'गुरुवार (Thursday) अथवा सोमवार (Monday)',
      auspiciousTithi: 'पूर्णिमा अथवा एकादशी',
      metalPreference: 'स्वर्ण (Gold) अथवा रजत (Silver)',
      beejMantra: 'ॐ आज्ञाचक्राय हाकिणी-सहिताय इतरलिङ्गाय नमः॥ / ॐ ॐ ॐ॥',
      gayatriMantra: 'ॐ आज्ञाचक्राय विद्महे इतरलिङ्गाय धीमहि तन्नः शिवः प्रचोदयात्॥',
      japaCount: 108,
      malaType: 'रुद्राक्ष अथवा स्फटिक माला',
      dhyanaSloka: 'भ्रूमध्यपद्मे द्विदले तडिदाकारमुत्तमम्। इतरलिङ्गं प्रणवं च ध्यायेत् केवलमुक्तये॥',
      pratishthaVidhiSummary: [
        '१. श्वेत वस्त्र पर आज्ञा चक्र यन्त्र स्थापित कर घृत का दीपक जलाएं।',
        '२. श्वेत पुष्प और चन्दन से पूजन करें।',
        '३. शाम्भवी मुद्रा लगाकर भ्रूमध्य में प्रणव (ॐ) का मानसिक जप करें।'
      ]
    },
    practicalRemedies: [
      {
        category: 'Spiritual Vision & Clarity',
        problem: 'अनिर्णय की स्थिति, भविष्य की चिंता और ध्यान में मन का न टिकना।',
        remedyProtocol: 'प्रतिदिन प्रातः शाम्भवी मुद्रा लगाकर आज्ञा चक्र यन्त्र के "ॐ" पर ५ मिनट त्राटक करें।'
      }
    ]
  },

  sahasrara_chakra: {
    id: 'sahasrara_chakra',
    taxonomyCategory: 'kundalini_chakras',
    lineageAttribution: 'षट्चक्रनिरूपणम् (स्वामी पूर्णानन्द परमहंस) एवं गोरक्षपद्धति',
    nameSanskrit: 'सहस्रार महाचक्र यन्त्रम्',
    nameHindi: 'सहस्रार महाचक्र यन्त्र (ब्रह्मरन्ध्र / महाबिन्दु)',
    nameEnglish: 'Sahasrara Mahacakra Yantra (Crown Center of Liberation)',
    subTitle: 'The Supreme Thousand-Petaled Lotus of Kaivalya Moksha, Shiva-Shakti Samarasya, and Pure Bliss',
    presidingDeity: 'परमशिव एवं पराशक्ति महाकुण्डलिनी',
    tradition: 'कौल, समयाचार, अद्वैत वेदान्त एवं काश्मीर शैवदर्शन',
    corePhilosophy: 'शिर के ब्रह्मरन्ध्र में ऊर्ध्वमुख स्थित यह सहस्रदल महाकमल है, जो समस्त वर्णों (रंगों) की दिव्य किरणों से दीप्त है। इसमें ५० मातृका वर्णों की २० आवृत्तियों से १००० दल बने हैं। इसके केंद्र में पूर्ण चन्द्रबिम्ब है, जिसमें अमृत बरसाने वाली "अमाकला", "निर्वाणकला" तथा समस्त ज्योतियों की परम ज्योति "महाबिन्दु" स्थित है। यहाँ कुण्डलिनी महाशक्ति अपने परम प्रियतम परमशिव के साथ एकाकार होकर साधक को जीवन्मुक्ति एवं परमानन्द प्रदान करती हैं।',
    citations: [
      {
        sourceScripture: 'षट्चक्रनिरूपणम्',
        chapterOrVerse: 'श्लोक ४० एवं ४९',
        sanskritSloka: 'मूर्ध्नो रन्ध्रे सहस्रार-कमलमल-वपुः सर्व-वर्णाभिरामं\\nतन्मध्ये चन्द्रबिम्बे स्फुरित-रुचि-तता साऽमा-कला शोभमाना ।\\nसमास्ते तस्योर्ध्वे परमसुकुमारं निरुपमं\\nमहाशून्यं तत्त्वं तदेव ज्योतिषां ज्योतिः परं निर्वाण-कारणम् ॥',
        hindiMeaning: 'ब्रह्मरन्ध्र में हजार दलों वाला सहस्रार कमल है। इसके मध्य में चन्द्रबिम्ब है, जहाँ अमृतमयी अमाकला तथा महाशून्य स्वरूप निर्वाणकला एवं परम महाबिन्दु प्रकाशित है।',
        englishMeaning: 'In the crown aperture shines the thousand-petaled Sahasrara lotus. In its center is the moon disk with the nectar-raining Ama-Kala, the Great Void, and the Mahabindu—the Light of all Lights.'
      }
    ],
    avaranas: [
      {
        index: 1,
        nameSanskrit: 'सहस्रदल पद्म (५० मातृका × २० आवृत्ति)',
        nameEnglish: 'Thousand-Petaled Radiating Lotus',
        chakraTitle: 'सहस्रदल पद्म (1000 Celestial Petals)',
        presidingDeity: 'परमशिव-पराशक्ति समरसता',
        mudraShakti: 'महावेध एवं शाम्भवी मुद्रा',
        yoginiClass: 'परमामृत योगिनी (ओजस् धातु)',
        geometryType: 'Concentric Radiating Layers of 64, 32, and 16 Golden Petals',
        significance: 'समस्त ब्रह्माण्डीय तरंगों, ज्ञान की शाखाओं और शक्तियों का अखण्ड विस्तार।'
      },
      {
        index: 2,
        nameSanskrit: 'पूर्ण चन्द्रमण्डल एवं षोडश अमृत किरणें',
        nameEnglish: 'Full Moon Disk with 16 Nectar Rays',
        chakraTitle: 'अमृत मण्डल (Ambrosial Sphere)',
        presidingDeity: 'अमाकला एवं निर्वाणकला',
        mudraShakti: 'उन्मनी मुद्रा',
        yoginiClass: 'अमृत वर्षिणी',
        geometryType: 'Luminous Full Moon with 16 Radial Nectar Streams',
        significance: 'सहस्रार से निरंतर बहने वाली अमृत-धारा से रोम-रोम का अभिषेचन।'
      },
      {
        index: 3,
        nameSanskrit: 'परम महाबिन्दु (शिव-शक्ति ऐक्य)',
        nameEnglish: 'Supreme Mahabindu (Non-Dual Void Light)',
        chakraTitle: 'कैवल्य निर्वाण बिन्दु (Maha-Bindu)',
        presidingDeity: 'परमशिव (सच्चिदानन्द स्वरूप)',
        mudraShakti: 'कैवल्य समाधि',
        yoginiClass: 'गुणातीता पराशक्ति',
        geometryType: 'Golden Ring Enclosing Translucent White Void and Supreme Dark Seed',
        significance: 'द्वैत का पूर्ण संहार, आवागमन से मुक्ति और अखण्ड ब्रह्म में नित्य स्थिति।'
      }
    ],
    jyotish: {
      rulingPlanet: 'सर्वग्रह-अतीत (Cosmic Source)',
      planetSanskrit: 'सर्वग्रह स्वामी परब्रह्म',
      friendlyRashis: ['समस्त १२ राशियां'],
      friendlyNakshatras: ['समस्त २७ नक्षत्र'],
      doshaRemedies: [
        {
          doshaName: 'जन्मान्तर कृत प्रारब्ध दोष एवं अविद्या जन्य संताप',
          description: 'समस्त भौतिक व मानसिक दुःखों की मूल जड़ (अविद्या और देहाभिमान)।',
          reliefMechanism: 'सहस्रार महाचक्र के महाबिन्दु पर ध्यान करने से समस्त पूर्वजन्मों के संचित कर्म भस्म हो जाते हैं और कैवल्य निर्वाण सिद्ध होता है।'
        }
      ],
      lifeAspects: ['जीवन्मुक्ति (Moksha)', 'परम आत्म-साक्षात्कार', 'शारीरिक व मानसिक कायाकल्प', 'सर्वज्ञता एवं सर्वव्यापकता'],
      wearOrInstallDirection: 'ब्रह्मस्थान (Center) अथवा ईशान',
      favorableDay: 'सर्वदिन शुभ (विशेषतः गुरु पूर्णिमा अथवा महाशिवरात्रि)',
      auspiciousTithi: 'पूर्णिमा',
      metalPreference: 'स्वर्ण (Gold) अथवा अष्टधातु',
      beejMantra: 'ॐ सोऽहम्॥ / ॐ सच्चिदानन्द परब्रह्मणे नमः॥',
      gayatriMantra: 'ॐ सहस्रारनिलयायै विद्महे परशिवरूपाय धीमहि तन्नो हंसः प्रचोदयात्॥',
      japaCount: 108,
      malaType: 'स्फटिक अथवा अष्टमुखी रुद्राक्ष',
      dhyanaSloka: 'सहस्रदले पद्मे चन्द्रमण्डलमध्यगे। महाबिन्दुस्वरूपं तं ध्यायेत् कैवल्यसिद्धये॥',
      pratishthaVidhiSummary: [
        '१. श्वेत अथवा स्वर्ण वर्ण के वस्त्र पर सहस्रार चक्र यन्त्र स्थापित करें।',
        '२. षोडशोपचार से पूजन कर पंचामृत का अर्पण करें।',
        '३. ब्रह्मरन्ध्र में शीतल अमृत वर्षा का ध्यान करते हुए "सोऽहम्" का मानसिक स्मरण करें।'
      ]
    },
    practicalRemedies: [
      {
        category: 'Spiritual Liberation',
        problem: 'संसार में अशांति, मृत्यु का भय और आत्म-स्वरूप का अज्ञान।',
        remedyProtocol: 'प्रतिदिन रात्रिकाल में सहस्रार चक्र यन्त्र के महाबिन्दु का ध्यान करते हुए १० मिनट मौन होकर "सोऽहम्" का चिंतन करें।'
      }
    ]
  }
`;

// Read current db content
let dbContent = fs.readFileSync(dbPath, 'utf8');

// Insert chakras before the last `};`
if (!dbContent.includes('muladhara_chakra:')) {
  const lastIndex = dbContent.lastIndexOf('};');
  if (lastIndex !== -1) {
    dbContent = dbContent.slice(0, lastIndex) + chakrasDbEntries + '\n};' + dbContent.slice(lastIndex + 2);
    fs.writeFileSync(dbPath, dbContent, 'utf8');
    console.log('✓ Successfully appended 7 Kundalini Chakras to shastric-jyotish-database.ts');
  } else {
    console.error('Could not find closing }; in shastric-jyotish-database.ts');
  }
} else {
  console.log('Chakras already present in shastric-jyotish-database.ts');
}

// Now let's append to canonical-library-dataset.ts
const sgkbEntries = `
  {
    id: 'muladhara_chakra',
    names: {
      sa: 'मूलाधार चक्र यन्त्रम्',
      iast: 'Mūlādhāra Cakra Yantram',
      hi: 'मूलाधार चक्र',
      en: 'Muladhara Chakra Yantra (Root Center)',
      gu: 'મૂલાધાર ચક્ર'
    },
    deity: 'Brahma & Dakini Shakti',
    mantra: 'Om Lam Muladharavasinyai Dakinyai Namah',
    geometrySpec: {
      primaryShape: 'Yellow Square with 8 Vajras in 4 Crimson Petals',
      layersCount: 4,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: true
    },
    traditionalUsage: 'Physical grounding, survival fear removal, bone vitality, and awakening Kundalini.',
    historicalPeriod: 'c. 10th Century CE (Goraksha Paddhati & Sat-Chakra-Nirupana)',
    scripturalCitation: {
      scripture: 'Sat-Chakra-Nirupana',
      verse: 'Verse 4',
      sanskritText: 'अधो वक्त्रं पद्मं सुषुम्ना-विवर-मध्यस्थं सुभगं चतुर्भिः पत्रैश्चापि वकारादिसकारान्तैर्युक्तं परम्...',
      translation: 'At the mouth of Sushumna lies the 4-petaled Muladhara lotus with syllables Vam to Sam and the yellow Earth square.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['svadhishthana_chakra', 'sri_yantra', 'ganesh_yantra']
  },
  {
    id: 'svadhishthana_chakra',
    names: {
      sa: 'स्वाधिष्ठान चक्र यन्त्रम्',
      iast: 'Svādhiṣṭhāna Cakra Yantram',
      hi: 'स्वाधिष्ठान चक्र',
      en: 'Svadhishthana Chakra Yantra (Sacral Center)',
      gu: 'સ્વાધિષ્ઠાન ચક્ર'
    },
    deity: 'Vishnu & Rakini Shakti',
    mantra: 'Om Vam Svadhishthanaya Rakini-sahitaya Vishnave Namah',
    geometrySpec: {
      primaryShape: 'White Crescent Moon in 6 Coral-Orange Petals',
      layersCount: 3,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: false
    },
    traditionalUsage: 'Emotional fluidity, sexual mastery, poetic inspiration, and hormonal balance.',
    historicalPeriod: 'c. 10th Century CE (Sat-Chakra-Nirupana)',
    scripturalCitation: {
      scripture: 'Sat-Chakra-Nirupana',
      verse: 'Verse 14',
      sanskritText: 'स्वाधिष्ठानाख्यं विद्रुमप्रभासैः षड्भिः पत्रैर्बकारादिसान्तैर्विभातं...',
      translation: 'The 6-petaled Svadhishthana lotus of coral luster with syllables Bam to Lam and the water crescent.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['muladhara_chakra', 'manipura_chakra', 'chandra_yantra']
  },
  {
    id: 'manipura_chakra',
    names: {
      sa: 'मणिपूर चक्र यन्त्रम्',
      iast: 'Maṇipūra Cakra Yantram',
      hi: 'मणिपूर चक्र',
      en: 'Manipura Chakra Yantra (Solar Plexus Center)',
      gu: 'મણિપૂર ચક્ર'
    },
    deity: 'Rudra & Lakini Shakti',
    mantra: 'Om Ram Manipuraya Lakini-sahitaya Rudraya Namah',
    geometrySpec: {
      primaryShape: 'Red Triangle with 3 Swastikas in 10 Dark Blue Petals',
      layersCount: 3,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: false
    },
    traditionalUsage: 'Metabolic fire, willpower, leadership, destroying physical lethargy and fear.',
    historicalPeriod: 'c. 10th Century CE (Sat-Chakra-Nirupana)',
    scripturalCitation: {
      scripture: 'Sat-Chakra-Nirupana',
      verse: 'Verse 19',
      sanskritText: 'नाभौ तु दशदल-युतं मणिपूरं महामेघ-द्योतं डफ-दल-युतं वर्ण-सुभगम्...',
      translation: 'At the navel is 10-petaled Manipura with dark blue petals and fiery triangle adorned with 3 swastikas.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['svadhishthana_chakra', 'anahata_chakra', 'surya_yantra']
  },
  {
    id: 'anahata_chakra',
    names: {
      sa: 'अनाहत चक्र यन्त्रम्',
      iast: 'Anāhata Cakra Yantram',
      hi: 'अनाहत चक्र',
      en: 'Anahata Chakra Yantra (Heart Center)',
      gu: 'અનાહત ચક્ર'
    },
    deity: 'Isha & Kakini Shakti',
    mantra: 'Om Yam Anahataya Kakini-sahitaya Ishaya Namah',
    geometrySpec: {
      primaryShape: 'Smoky Hexagram with Golden Baanalinga in 12 Petals',
      layersCount: 4,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: false
    },
    traditionalUsage: 'Unconditional love, hearing the unstruck Om sound, piercing Vishnu Granthi.',
    historicalPeriod: 'c. 10th Century CE (Sat-Chakra-Nirupana)',
    scripturalCitation: {
      scripture: 'Sat-Chakra-Nirupana',
      verse: 'Verse 22',
      sanskritText: 'हृदि स्यादनाहत-पद्मं सुदीप्तं कठाद्यैर्दलैर्द्वादशैरन्वितं च...',
      translation: 'In the heart resides the 12-petaled Anahata lotus with smoky hexagram and golden Baanalinga.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['manipura_chakra', 'vishuddha_chakra', 'shiva_yantra']
  },
  {
    id: 'vishuddha_chakra',
    names: {
      sa: 'विशुद्ध चक्र यन्त्रम्',
      iast: 'Viśuddha Cakra Yantram',
      hi: 'विशुद्ध चक्र',
      en: 'Vishuddha Chakra Yantra (Throat Center)',
      gu: 'વિશુદ્ધ ચક્ર'
    },
    deity: 'Panchamukha Sadashiva & Shakini Shakti',
    mantra: 'Om Ham Vishuddhaya Shakini-sahitaya Sadashivaya Namah',
    geometrySpec: {
      primaryShape: 'Pure White Circular Mandala in 16 Lilac Petals',
      layersCount: 3,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: false
    },
    traditionalUsage: 'Vak-Siddhi, poetic eloquence, thyroid health, and swallowing cosmic poisons.',
    historicalPeriod: 'c. 10th Century CE (Sat-Chakra-Nirupana)',
    scripturalCitation: {
      scripture: 'Sat-Chakra-Nirupana',
      verse: 'Verse 28',
      sanskritText: 'कण्ठे विशुद्धं कमलाभ-कान्तिं स्वरैश्च षोडश-दलैः समन्तात्...',
      translation: 'In the throat is the 16-petaled Vishuddha lotus with 16 Sanskrit vowels and circular white space mandala.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['anahata_chakra', 'ajna_chakra', 'saraswati_yantra']
  },
  {
    id: 'ajna_chakra',
    names: {
      sa: 'आज्ञा चक्र यन्त्रम्',
      iast: 'Ājñā Cakra Yantram',
      hi: 'आज्ञा चक्र',
      en: 'Ajna Chakra Yantra (Third Eye Center)',
      gu: 'આજ્ઞા ચક્ર'
    },
    deity: 'Shambhu & Hakini Shakti',
    mantra: 'Om Om Om Ajnachakraya Namah',
    geometrySpec: {
      primaryShape: 'Inverted Yoni Triangle with Itara Linga in 2 White Petals',
      layersCount: 3,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: false
    },
    traditionalUsage: 'Intuition, clairvoyance, piercing Rudra Granthi, non-dual perception.',
    historicalPeriod: 'c. 10th Century CE (Sat-Chakra-Nirupana)',
    scripturalCitation: {
      scripture: 'Sat-Chakra-Nirupana',
      verse: 'Verse 32',
      sanskritText: 'आज्ञानामामबुजं तद् हिमकर-सदृशं ध्यान-धाम प्रकाशं हक्षाभ्यां वै कलाभ्याम्...',
      translation: 'Between eyebrows is the 2-petaled Ajna lotus (Ham & Ksham) with lightning Itara Linga and Om.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['vishuddha_chakra', 'sahasrara_chakra', 'sri_yantra']
  },
  {
    id: 'sahasrara_chakra',
    names: {
      sa: 'सहस्रार महाचक्र यन्त्रम्',
      iast: 'Sahasrāra Mahācakra Yantram',
      hi: 'सहस्रार महाचक्र',
      en: 'Sahasrara Mahacakra Yantra (Crown Center)',
      gu: 'સહસ્રાર ચક્ર'
    },
    deity: 'Parama Shiva & Para Shakti',
    mantra: 'Om Soham Sachchidananda Parabrahmane Namah',
    geometrySpec: {
      primaryShape: '1000 Petals with Full Moon Disk, Ama-Kala & Mahabindu',
      layersCount: 5,
      hasNavavaranas: false,
      hasLotusPetals: true,
      hasBhupura: false
    },
    traditionalUsage: 'Kaivalya Mukti, liberation while living, Shiva-Shakti union, and supreme bliss.',
    historicalPeriod: 'c. 10th Century CE (Sat-Chakra-Nirupana)',
    scripturalCitation: {
      scripture: 'Sat-Chakra-Nirupana',
      verse: 'Verse 40',
      sanskritText: 'मूर्ध्नो रन्ध्रे सहस्रार-कमलमल-वपुः सर्व-वर्णाभिरामं तन्मध्ये चन्द्रबिम्बे...',
      translation: 'In the crown fontanelle is the 1000-petaled lotus with full moon disk and the supreme Void Mahabindu.'
    },
    evidenceTier: 'canonical',
    confidenceLevel: 'High',
    relatedYantras: ['sri_yantra', 'ajna_chakra']
  },
`;

let sgkbContent = fs.readFileSync(sgkbPath, 'utf8');
if (!sgkbContent.includes('muladhara_chakra')) {
  const lastBracket = sgkbContent.lastIndexOf('];');
  if (lastBracket !== -1) {
    sgkbContent = sgkbContent.slice(0, lastBracket) + sgkbEntries + '\n];' + sgkbContent.slice(lastBracket + 2);
    fs.writeFileSync(sgkbPath, sgkbContent, 'utf8');
    console.log('✓ Successfully appended 7 Kundalini Chakras to canonical-library-dataset.ts');
  }
} else {
  console.log('Chakras already present in canonical-library-dataset.ts');
}
