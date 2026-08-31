import { YantraDSL } from '../types/dsl';

export const MASTER_YANTRA_DATASET: YantraDSL[] = [
  // 1. Shri Yantra
  {
    id: 'sri_yantra',
    version: '1.0.0',
    traditionVariant: 'Srividya (Canonical)',
    names: {
      sanskrit: 'श्री यन्त्र',
      hindi: 'श्री यन्त्र',
      english: 'Shri Yantra (Sri Chakra)',
      alternateNames: ['Sri Chakra', 'Maha Yantra', 'Yantra Raja']
    },
    attributes: {
      deity: 'Goddess Lalita Tripura Sundari',
      planet: 'All Planets (Cosmic Harmony)',
      element: 'Akasha & Pancha Maha Bhootas',
      chakra: 'Sahasrara & Bindu',
      metal: ['Gold', 'Copper', 'Panchadhatu', 'Silver'],
      color: 'Gold / Deep Crimson',
      purpose: ['Ultimate Prosperity', 'Spiritual Liberation (Moksha)', 'Harmony', 'Abundance'],
      benefits: [
        'Bestows material wealth and spiritual illumination',
        'Neutralizes Vastu doshas and negative energetic influences',
        'Enhances meditation focus and intuitive clarity'
      ],
      precautions: ['Maintain cleanliness around the consecrated Yantra', 'Daily offering of light or incense'],
      tags: ['Srividya', 'Supreme Yantra', 'Prosperity', 'Moksha', 'Sacred Geometry']
    },
    geometryRules: {
      bhupura: {
        enabled: true,
        steps: 3,
        gateSizeRatio: 0.18,
        sanskritName: 'भूजपुर (त्रैलोक्यमोहन चक्र)',
        englishName: 'Bhupura Outer Enclosure (Trailokyamohana Chakra)',
        symbolism: 'Physical realm boundary protecting the inner sacred cosmos'
      },
      concentricCircles: [
        {
          id: 'circle_outer',
          radiusRatio: 0.82,
          sanskritName: 'वृत्त',
          englishName: 'Outer Boundary Circle',
          symbolism: 'Cosmic containment circle'
        },
        {
          id: 'circle_middle',
          radiusRatio: 0.65,
          sanskritName: 'मध्य वृत्त',
          englishName: 'Middle Ring',
          symbolism: 'Transition between gross and subtle realms'
        },
        {
          id: 'circle_inner',
          radiusRatio: 0.50,
          sanskritName: 'अन्तर वृत्त',
          englishName: 'Inner Ring',
          symbolism: 'Boundary of central divine triangles'
        }
      ],
      lotusRings: [
        {
          id: 'lotus_16',
          petalCount: 16,
          innerRadiusRatio: 0.65,
          outerRadiusRatio: 0.82,
          shape: 'pointed',
          sanskritName: 'षोडशदल पद्म (सर्वाशापरिपूरक चक्र)',
          englishName: '16-Petal Lotus (Sarvasaparipuraka Chakra)',
          symbolism: 'Fulfilment of all desires and 16 sensory/mental faculties'
        },
        {
          id: 'lotus_8',
          petalCount: 8,
          innerRadiusRatio: 0.50,
          outerRadiusRatio: 0.65,
          shape: 'pointed',
          sanskritName: 'अष्टदल पद्म (सर्वसंक्षोभण चक्र)',
          englishName: '8-Petal Lotus (Sarvasamksobhana Chakra)',
          symbolism: 'Agitation of divine consciousness and manifestation of 8 Siddhis'
        }
      ],
      triangleSets: [
        {
          id: 'shri_interlocking_9',
          direction: 'interlocking',
          count: 9,
          baseRadiusRatio: 0.45,
          apexRadiusRatio: 0.45,
          interlocking: true,
          sanskritName: 'नवयोनि / ४३ कोण (सर्वसिद्धिप्रद एवं सर्वगेह चक्र)',
          englishName: '9 Interlocking Triangles forming 43 Sub-Triangles',
          symbolism: 'Union of 5 Shakti (downward) and 4 Shiva (upward) primordial energies'
        }
      ],
      bindu: {
        radiusRatio: 0.02,
        sanskritName: 'बिन्दु (सर्वआनन्दमय चक्र)',
        englishName: 'Bindu (Sarvanandamaya Chakra)',
        symbolism: 'Cosmic origin, absolute bliss, and singular non-dual consciousness'
      }
    },
    layers: [
      {
        id: 'layer_bhupura',
        nameSanskrit: 'त्रैलोक्यमोहन चक्र',
        nameHindi: 'त्रैलोक्यमोहन चक्र (भूपुर)',
        nameEnglish: 'Trailokyamohana Chakra (Bhupura Outer Gate)',
        meaning: 'Enchanter of the Three Worlds',
        symbolism: 'Physical realm protected by 10 Siddhis, 8 Matrikas, and 10 Mudras',
        scripturalRefIds: ['saundarya_lahari_11']
      },
      {
        id: 'layer_lotus_16',
        nameSanskrit: 'सर्वाशापरिपूरक चक्र',
        nameHindi: 'सर्वाशापरिपूरक चक्र (१६ दल पद्म)',
        nameEnglish: 'Sarvasaparipuraka Chakra (16-Petal Lotus)',
        meaning: 'Fulfiller of All Desires',
        symbolism: '16 divine powers presiding over senses, mind, and elements',
        scripturalRefIds: ['sharada_tilaka_sri']
      },
      {
        id: 'layer_lotus_8',
        nameSanskrit: 'सर्वसंक्षोभण चक्र',
        nameHindi: 'सर्वसंक्षोभण चक्र (८ दल पद्म)',
        nameEnglish: 'Sarvasamksobhana Chakra (8-Petal Lotus)',
        meaning: 'Agitator of All Manifestation',
        symbolism: '8 divine Devis presiding over Speech, Action, and Perception',
        scripturalRefIds: ['kularnava_tantra_5']
      },
      {
        id: 'layer_43_triangles',
        nameSanskrit: 'सर्वसौभाग्यदायक एवं सर्वार्थसाधक चक्र',
        nameHindi: 'सर्वसौभाग्यदायक एवं सर्वार्थसाधक चक्र (४३ त्रिकोण)',
        nameEnglish: '43 Interlocking Sub-Triangles',
        meaning: 'Bestower of All Good Fortune and Accomplisher of All Goals',
        symbolism: 'Radiant geometric web of creation and internal energy channels (Nadis)',
        scripturalRefIds: ['saundarya_lahari_11']
      },
      {
        id: 'layer_bindu',
        nameSanskrit: 'सर्वआनन्दमय चक्र',
        nameHindi: 'सर्वआनन्दमय चक्र (बिन्दु)',
        nameEnglish: 'Sarvanandamaya Chakra (Central Bindu)',
        meaning: 'Filled with Supreme Universal Bliss',
        symbolism: 'Non-dual origin of all vibration (Nada) and light (Bindu)',
        scripturalRefIds: ['saundarya_lahari_1']
      }
    ],
    scripturalReferences: [
      {
        id: 'saundarya_lahari_11',
        sourceText: 'Saundarya Lahari',
        chapterVerse: 'Verse 11',
        school: 'Srividya',
        textSanskrit: 'चतुर्भिः श्रीकण्ठैः शिवयुवतिभिः पञ्चभिरपि प्रभिन्नाभिः शंभोरम्भरुहभवनादिभिरपि।',
        textTransliteration: 'Caturbhih srikanthaih sivayuvatibhih pancabhirapi prabhinnabhih sambhorambharuhabhavanadibhirapi',
        translationEnglish: 'The Sri Chakra is formed by four Shiva triangles facing upward and five Shakti triangles facing downward, creating forty-three triangles.',
        commentary: 'Canonical geometric formula for Shri Yantra construction by Adi Shankaracharya.',
        confidenceScore: 100
      }
    ],
    mantra: {
      beejMantra: 'श्रीम् ह्रीम् क्लीम् ऐम्',
      mainMantra: 'ॐ श्रीं ह्रीं क्लीं त्रिभुवनमहालक्ष्मिै अस्माकं दारिद्र्य नाशय नाशय प्रचुर धन देहि देहि क्लीं ह्रीं श्रीं ॐ',
      sanskrit: 'ॐ श्रीं ह्रीं क्लीं श्री ललिता त्रिपुरसुन्दरी देव्यै नमः',
      transliteration: 'Om Shreem Hreem Kleem Shri Lalita Tripura Sundari Devyai Namah',
      meaningHindi: 'परमेश्वरी ललिता त्रिपुरसुंदरी को कोटि-कोटि नमन, जो संपूर्ण सृष्टि की ऊर्जा एवं सौंदर्य हैं।',
      meaningEnglish: 'Salutations to the Supreme Goddess Lalita Tripura Sundari, the embodiment of cosmic beauty, prosperity, and pure consciousness.',
      audioFrequencyHz: 432,
      japaModes: [108, 1008]
    },
    ritualPlacement: {
      direction: 'North-East',
      metal: ['Gold', 'Copper', 'Panchadhatu'],
      element: 'Akasha',
      planet: 'All Planets',
      deity: 'Shri Lalita Mahatripurasundari',
      chakra: 'Sahasrara',
      dayOfWeek: 'Friday',
      nakshatra: 'Pushya',
      purificationSteps: [
        'Bathe Yantra in Gangajal, raw milk, honey, and curd.',
        'Wipe dry with clean red silk cloth.'
      ],
      pranaPratishthaSteps: [
        'Place Yantra on a raised wooden chowki facing East or North-East.',
        'Chant Panchadashi / Shodashi Mantra while placing vermilion (Kumkum) on Bindu.'
      ],
      dailyWorship: 'Offer fresh red flowers, light a Ghee lamp, and chant the Beej Mantra 108 times.',
      placementLocation: 'Home Pooja Altar or Office Executive Desk facing North-East.'
    },
    research: {
      history: 'Srividya tradition transmitted through Vedic Agamas and Adi Shankaracharya.',
      origin: 'Vedic Agamas, Taittiriya Aranyaka, and Saundarya Lahari.',
      mathematicalAnalysis: 'Exhibits complex Golden Ratio proportions (Phi = 1.618) and 43 precise interlocking non-overlapping triangles.',
      philosophicalMeaning: 'Hologram of creation, progressing from outer physical world (Bhupura) to inner supreme consciousness (Bindu).',
      scientificPerspective: 'Harmonic frequency generator; electro-geometric patterns induce alpha/theta brainwave synchronization.',
      bibliography: ['Saundarya Lahari by Adi Shankaracharya', 'Tantraraja Tantra', 'Mantra Mahodadhi']
    }
  },

  // 2. Maha Meru (3D Pyramidical Shri Yantra)
  {
    id: 'maha_meru',
    version: '1.0.0',
    traditionVariant: 'Maha Meru 3D',
    names: {
      sanskrit: 'महामेरु यन्त्र',
      hindi: 'महामेरु यन्त्र',
      english: 'Maha Meru (3D Pyramidical Sri Yantra)',
      alternateNames: ['Meru Chakra', '3D Shri Yantra']
    },
    attributes: {
      deity: 'Goddess Lalita Tripura Sundari',
      planet: 'Cosmic Energy Alignment',
      element: 'Earth & Ether (Prithvi & Akasha)',
      chakra: 'Sahasrara',
      metal: ['Panchadhatu', 'Crystal (Sphatika)', 'Brass', 'Gold'],
      color: 'Golden Metallic',
      purpose: ['3D Energetic Radiation', 'Vastu Neutralization', 'Ultimate Abundance'],
      benefits: ['Radiates 360-degree pyramidical bio-field', 'Harmonizes whole architectural layout'],
      precautions: ['Do not place on floor directly; keep elevated.'],
      tags: ['3D Yantra', 'Maha Meru', 'Panchadhatu', 'Vastu']
    },
    geometryRules: {
      bhupura: { enabled: true, steps: 3, gateSizeRatio: 0.18, sanskritName: '३डी भूपुर आधार', englishName: '3D Base Bhupura Platform', symbolism: 'Base foundation' },
      lotusRings: [
        { id: 'lotus_16', petalCount: 16, innerRadiusRatio: 0.65, outerRadiusRatio: 0.82, shape: 'pointed', sanskritName: '१६ दल पद्म स्तर', englishName: '16-Petal Tier', symbolism: 'Subtle realm' },
        { id: 'lotus_8', petalCount: 8, innerRadiusRatio: 0.50, outerRadiusRatio: 0.65, shape: 'pointed', sanskritName: '८ दल पद्म स्तर', englishName: '8-Petal Tier', symbolism: 'Causal realm' }
      ],
      concentricCircles: [{ id: 'meru_ring', radiusRatio: 0.82, sanskritName: 'वृत्त मण्डल', englishName: 'Tier Boundary', symbolism: 'Base boundary' }],
      triangleSets: [{ id: 'meru_pyramid_triangles', direction: 'interlocking', count: 9, baseRadiusRatio: 0.45, apexRadiusRatio: 0.45, interlocking: true, sanskritName: 'मेरु शृंग (४३ कोण)', englishName: '3D Pyramid Triangles Peak', symbolism: 'Ascending cosmic mountain' }],
      bindu: { radiusRatio: 0.03, sanskritName: 'मेरु शिखा बिन्दु', englishName: 'Peak Apex Bindu', symbolism: 'Crown apex of Meru mountain' }
    },
    layers: [],
    scripturalReferences: [],
    mantra: { beejMantra: 'ॐ श्रीं ह्रीं श्रीं', mainMantra: 'ॐ श्रीं ह्रीं क्लीं श्रीं महामेरु चक्रवासिन्यै नमः', sanskrit: 'ॐ महामेरु देव्यै नमः', transliteration: 'Om Mahameru Devyai Namah', meaningHindi: 'महामेरु स्वरूपिणी भगवती को नमन।', meaningEnglish: 'Salutations to the Divine Mother occupying the cosmic mountain Maha Meru.', japaModes: [108] },
    ritualPlacement: { direction: 'North-East', metal: ['Panchadhatu', 'Sphatika'], element: 'Ether', planet: 'Cosmic', deity: 'Lalita Tripura Sundari', chakra: 'Sahasrara', dayOfWeek: 'Friday', nakshatra: 'Pushya', purificationSteps: ['Wash with sacred water'], pranaPratishthaSteps: ['Chant mantras during sunrise'], dailyWorship: 'Light Ghee lamp daily.', placementLocation: 'Central shrine facing East or North-East' },
    research: { history: '3D architectural projection of Shri Yantra described in Kamikagama.', origin: 'Tantric Agamas.', mathematicalAnalysis: 'Pyramidical elevation angles follow $\\theta \\approx 51.83^\\circ$ matching Great Pyramid proportions.', philosophicalMeaning: 'Ascension of consciousness from base matter to apex spirit.', scientificPerspective: 'Pyramid shape concentrates bio-electromagnetic energy at 1/3 height from base.', bibliography: ['Kamikagama', 'Saundarya Lahari'] }
  },

  // 3. Kuber Yantra
  {
    id: 'kuber_yantra',
    version: '1.0.0',
    traditionVariant: 'Traditional',
    names: { sanskrit: 'कुबेर यन्त्र', hindi: 'कुबेर यन्त्र', english: 'Kuber Yantra' },
    attributes: { deity: 'Lord Kuber (Treasurer of Devas)', planet: 'Jupiter / Mercury', element: 'Earth', chakra: 'Muladhara', metal: ['Gold', 'Copper', 'Brass'], color: 'Yellow / Gold', purpose: ['Wealth Retention', 'Financial Growth', 'Business Success'], benefits: ['Attracts riches and protects assets'], precautions: ['Keep clean in cash locker or office desk'], tags: ['Wealth', 'Kuber', 'Prosperity'] },
    geometryRules: {
      bhupura: { enabled: true, steps: 1, gateSizeRatio: 0.15, sanskritName: 'भूपुर', englishName: 'Gate', symbolism: 'Locker protection' },
      lotusRings: [],
      concentricCircles: [{ id: 'kuber_circle', radiusRatio: 0.8, sanskritName: 'वृत्त', englishName: 'Circle', symbolism: 'Boundary' }],
      starPolygons: [{ id: 'kuber_magic_square_grid', points: 6, radiusRatio: 0.6, sanskritName: 'कुबेर यन्त्र कोण ग्रिड', englishName: '3x3 Numerical Magic Grid (Sum 72)', symbolism: 'Harmonic wealth energy matrix' }],
      bindu: { radiusRatio: 0.02, sanskritName: 'बिन्दु', englishName: 'Bindu', symbolism: 'Center of fortune' }
    },
    layers: [], scripturalReferences: [],
    mantra: { beejMantra: 'ॐ ह्रीं श्रीं क्रीं श्रीं कुबेराय नमः', mainMantra: 'ॐ यक्षाय कुबेराय वैश्रवणाय धनधान्याधिपतये धनधान्यसमृद्धिं मे देहि दापय स्वाहा', sanskrit: 'ॐ कुबेराय नमः', transliteration: 'Om Yakshaya Kuberaya Vaishravanaya Dhana-Dhanyadhipataye Dhana-Dhanya-Samriddhi Me Dehi Dapaya Swaha', meaningHindi: 'धनाध्यक्ष कुबेर देव हमें धन और समृद्धि प्रदान करें।', meaningEnglish: 'Salutations to Lord Kuber, treasurer of the cosmos, grant us wealth and abundance.', japaModes: [108] },
    ritualPlacement: { direction: 'North', metal: ['Gold', 'Copper'], element: 'Earth', planet: 'Jupiter', deity: 'Lord Kuber', chakra: 'Muladhara', dayOfWeek: 'Thursday', nakshatra: 'Dhanishta', purificationSteps: ['Clean with rose water'], pranaPratishthaSteps: ['Offer yellow flowers'], dailyWorship: 'Chant mantra in front of cash box.', placementLocation: 'North wall of office or home locker' },
    research: { history: 'Mentioned in Vedic Puranas.', origin: 'Vedic Puranas.', mathematicalAnalysis: 'Numerical grid sum equals 72 in all directions.', philosophicalMeaning: 'Material stability.', scientificPerspective: 'Positive psychological anchor for financial discipline.', bibliography: ['Vishnu Purana'] }
  },

  // 4. Mahalakshmi Yantra
  {
    id: 'mahalakshmi_yantra',
    version: '1.0.0',
    traditionVariant: 'Traditional',
    names: { sanskrit: 'महालक्ष्मी यन्त्र', hindi: 'महालक्ष्मी यन्त्र', english: 'Mahalakshmi Yantra' },
    attributes: { deity: 'Goddess Mahalakshmi', planet: 'Venus', element: 'Water', chakra: 'Anahata', metal: ['Silver', 'Gold', 'Copper'], color: 'Pink / Silver', purpose: ['Wealth', 'Fortune', 'Grace'], benefits: ['Attracts 8 forms of Lakshmi (Ashta Lakshmi)'], precautions: ['Avoid non-vegetarian food near shrine'], tags: ['Lakshmi', 'Wealth', 'Grace'] },
    geometryRules: {
      bhupura: { enabled: true, steps: 2, gateSizeRatio: 0.15, sanskritName: 'भूपुर', englishName: 'Gate', symbolism: 'Protection' },
      lotusRings: [{ id: 'lotus_8', petalCount: 8, innerRadiusRatio: 0.5, outerRadiusRatio: 0.75, shape: 'pointed', sanskritName: 'अष्टदल पद्म', englishName: '8-Petal Lotus', symbolism: 'Ashta Lakshmi' }],
      concentricCircles: [{ id: 'c1', radiusRatio: 0.75, sanskritName: 'वृत्त', englishName: 'Circle', symbolism: 'Ring' }],
      starPolygons: [{ id: 'shatkona', points: 6, radiusRatio: 0.45, sanskritName: 'षट्कोण', englishName: 'Shatkona', symbolism: 'Union of Lakshmi & Vishnu' }],
      bindu: { radiusRatio: 0.02, sanskritName: 'बिन्दु', englishName: 'Bindu', symbolism: 'Grace point' }
    },
    layers: [], scripturalReferences: [],
    mantra: { beejMantra: 'ॐ श्रीं ह्रीं श्रीं कमले कमलालये प्रसीद प्रसीद', mainMantra: 'ॐ श्रीं ह्रीं श्रीं महालक्ष्म्यै नमः', sanskrit: 'ॐ महालक्ष्म्यै नमः', transliteration: 'Om Shreem Hreem Shreem Mahalakshmyai Namah', meaningHindi: 'भगवती महालक्ष्मी को प्रणाम।', meaningEnglish: 'Salutations to Goddess Mahalakshmi, bestower of all prosperity.', japaModes: [108] },
    ritualPlacement: { direction: 'East', metal: ['Silver', 'Copper'], element: 'Water', planet: 'Venus', deity: 'Goddess Mahalakshmi', chakra: 'Anahata', dayOfWeek: 'Friday', nakshatra: 'Rohini', purificationSteps: ['Clean with milk'], pranaPratishthaSteps: ['Offer lotus flower'], dailyWorship: 'Light camphor or Ghee lamp.', placementLocation: 'Pooja room facing East' },
    research: { history: 'Puranic Lakshmi Upasana.', origin: 'Lakshmi Tantra.', mathematicalAnalysis: 'Hexagram with 8-petal surrounding concentricity.', philosophicalMeaning: 'Flow of divine abundance.', scientificPerspective: 'Visual coherence inducing serenity.', bibliography: ['Lakshmi Tantra'] }
  },

  // 5. Ganesh Yantra
  {
    id: 'ganesh_yantra',
    version: '1.0.0',
    traditionVariant: 'Traditional',
    names: { sanskrit: 'गणेश यन्त्र', hindi: 'गणेश यन्त्र', english: 'Ganesh Yantra' },
    attributes: { deity: 'Lord Ganesha', planet: 'Ketu / Mercury', element: 'Earth', chakra: 'Muladhara', metal: ['Copper', 'Brass'], color: 'Orange / Red', purpose: ['Obstacle Removal', 'New Beginnings', 'Wisdom'], benefits: ['Removes hurdles in new ventures'], precautions: ['Place at entrance or study table'], tags: ['Ganesh', 'Obstacle Removal', 'Wisdom'] },
    geometryRules: {
      bhupura: { enabled: true, steps: 1, gateSizeRatio: 0.15, sanskritName: 'भूपुर', englishName: 'Gate', symbolism: 'Protection' },
      lotusRings: [{ id: 'lotus_8', petalCount: 8, innerRadiusRatio: 0.55, outerRadiusRatio: 0.75, shape: 'rounded', sanskritName: '८ दल पद्म', englishName: '8-Petal Lotus', symbolism: '8 Siddhis' }],
      concentricCircles: [{ id: 'c1', radiusRatio: 0.75, sanskritName: 'वृत्त', englishName: 'Circle', symbolism: 'Ring' }],
      starPolygons: [{ id: 'shatkona', points: 6, radiusRatio: 0.45, sanskritName: 'षट्कोण', englishName: 'Shatkona', symbolism: 'Shiva-Shakti child Ganesha energy' }],
      bindu: { radiusRatio: 0.02, sanskritName: 'बिन्दु', englishName: 'Bindu', symbolism: 'Aum origin' }
    },
    layers: [], scripturalReferences: [],
    mantra: { beejMantra: 'ॐ गं गणपतये नमः', mainMantra: 'ॐ वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥', sanskrit: 'ॐ श्री गणेशाय नमः', transliteration: 'Om Gam Ganapataye Namah', meaningHindi: 'भगवान श्री गणेश को प्रणाम जो सभी विघ्नों का नाश करते हैं।', meaningEnglish: 'Salutations to Lord Ganesha, remover of all obstacles.', japaModes: [108] },
    ritualPlacement: { direction: 'North-East', metal: ['Copper', 'Brass'], element: 'Earth', planet: 'Ketu', deity: 'Lord Ganesha', chakra: 'Muladhara', dayOfWeek: 'Wednesday', nakshatra: 'Hasta', purificationSteps: ['Wipe with clean water'], pranaPratishthaSteps: ['Offer Durva grass and Modak'], dailyWorship: 'Chant 108 times daily.', placementLocation: 'Main entrance or office desk' },
    research: { history: 'Ganapatya Sampradaya tradition.', origin: 'Ganesha Purana.', mathematicalAnalysis: 'Shatkona with rounded 8 petals.', philosophicalMeaning: 'Root foundation of success.', scientificPerspective: 'Reduces anxiety when beginning new projects.', bibliography: ['Ganesha Purana', 'Mudgala Purana'] }
  },

  // 6. Saraswati Yantra
  { id: 'saraswati_yantra', version: '1.0.0', traditionVariant: 'Traditional', names: { sanskrit: 'सरस्वती यन्त्र', hindi: 'सरस्वती यन्त्र', english: 'Saraswati Yantra' }, attributes: { deity: 'Goddess Saraswati', planet: 'Mercury', element: 'Air', chakra: 'Vishuddha', metal: ['Silver', 'Copper'], color: 'White / Light Blue', purpose: ['Education', 'Memory', 'Arts & Music'], benefits: ['Enhances learning and vocal expression'], precautions: ['Keep near books or instrument'], tags: ['Knowledge', 'Saraswati', 'Education'] }, geometryRules: { bhupura: { enabled: true, steps: 1, gateSizeRatio: 0.15, sanskritName: 'भूपुर', englishName: 'Gate', symbolism: 'Protection' }, lotusRings: [{ id: 'lotus_8', petalCount: 8, innerRadiusRatio: 0.5, outerRadiusRatio: 0.75, shape: 'pointed', sanskritName: '८ दल पद्म', englishName: '8 Petals', symbolism: '8 Arts' }], concentricCircles: [{ id: 'c1', radiusRatio: 0.75, sanskritName: 'वृत्त', englishName: 'Circle', symbolism: 'Ring' }], starPolygons: [{ id: 'shatkona', points: 6, radiusRatio: 0.45, sanskritName: 'षट्कोण', englishName: 'Shatkona', symbolism: 'Intellect' }], bindu: { radiusRatio: 0.02, sanskritName: 'बिन्दु', englishName: 'Bindu', symbolism: 'Knowledge origin' } }, layers: [], scripturalReferences: [], mantra: { beejMantra: 'ॐ ऐं सरस्वतै नमः', mainMantra: 'ॐ ऐं वाग्देव्यै च विद्महे कामराजाय धीमहि। तन्नो देवी प्रचोदयात्॥', sanskrit: 'ॐ ऐं सरस्वतै नमः', transliteration: 'Om Aing Saraswatyai Namah', meaningHindi: 'ज्ञान की देवी सरस्वती को प्रणाम।', meaningEnglish: 'Salutations to Goddess Saraswati, embodiment of wisdom.', japaModes: [108] }, ritualPlacement: { direction: 'East', metal: ['Silver', 'Copper'], element: 'Air', planet: 'Mercury', deity: 'Goddess Saraswati', chakra: 'Vishuddha', dayOfWeek: 'Thursday', nakshatra: 'Shravana', purificationSteps: ['Wipe with clean cloth'], pranaPratishthaSteps: ['Offer white flowers'], dailyWorship: 'Light incense while studying.', placementLocation: 'Study desk or library' }, research: { history: 'Vedic Saraswati tradition.', origin: 'Rigveda.', mathematicalAnalysis: 'Hexagram geometry.', philosophicalMeaning: 'Purity of speech and mind.', scientificPerspective: 'Facilitates cognitive focus.', bibliography: ['Rigveda', 'Saraswati Rahasya Upanishad'] } },

  // 7. Hanuman Yantra
  { id: 'hanuman_yantra', version: '1.0.0', traditionVariant: 'Traditional', names: { sanskrit: 'हनुमान यन्त्र', hindi: 'हनुमान यन्त्र', english: 'Hanuman Yantra' }, attributes: { deity: 'Lord Hanuman', planet: 'Mars', element: 'Fire', chakra: 'Manipura', metal: ['Copper', 'Brass'], color: 'Vermilion / Red', purpose: ['Courage', 'Protection', 'Strength'], benefits: ['Overcomes fear and negative energies'], precautions: ['Maintain strict purity'], tags: ['Protection', 'Hanuman', 'Mars'] }, geometryRules: { bhupura: { enabled: true, steps: 2, gateSizeRatio: 0.15, sanskritName: 'भूपुर', englishName: 'Gate', symbolism: 'Shield' }, lotusRings: [{ id: 'lotus_8', petalCount: 8, innerRadiusRatio: 0.5, outerRadiusRatio: 0.75, shape: 'pointed', sanskritName: '८ दल पद्म', englishName: '8 Petals', symbolism: '8 Chiranjeevi powers' }], concentricCircles: [{ id: 'c1', radiusRatio: 0.75, sanskritName: 'वृत्त', englishName: 'Circle', symbolism: 'Ring' }], triangleSets: [{ id: 'tri_up', direction: 'upward', count: 1, baseRadiusRatio: 0.45, apexRadiusRatio: 0.45, interlocking: false, sanskritName: 'त्रिकोण', englishName: 'Upward Triangle', symbolism: 'Fire energy' }], bindu: { radiusRatio: 0.02, sanskritName: 'बिन्दु', englishName: 'Bindu', symbolism: 'Devotion apex' } }, layers: [], scripturalReferences: [], mantra: { beejMantra: 'ॐ हं हनुमते नमः', mainMantra: 'ॐ हं हनुमते रुद्रात्मकताय हुं फट्', sanskrit: 'ॐ श्री हनुमते नमः', transliteration: 'Om Hum Hanumate Namah', meaningHindi: 'पवनपुत्र हनुमान को नमन।', meaningEnglish: 'Salutations to Lord Hanuman, embodiment of supreme strength and devotion.', japaModes: [108] }, ritualPlacement: { direction: 'South', metal: ['Copper'], element: 'Fire', planet: 'Mars', deity: 'Lord Hanuman', chakra: 'Manipura', dayOfWeek: 'Tuesday', nakshatra: 'Mula', purificationSteps: ['Apply Sindoor dot'], pranaPratishthaSteps: ['Offer jasmine oil and red flowers'], dailyWorship: 'Chant Hanuman Chalisa.', placementLocation: 'South wall or entrance' }, research: { history: 'Ramayana tradition.', origin: 'Ramcharitmanas.', mathematicalAnalysis: 'Triangular pyramidical fire geometry.', philosophicalMeaning: 'Selfless devotion and supreme strength.', scientificPerspective: 'Instills confidence and overcomes phobias.', bibliography: ['Hanuman Chalisa', 'Sundara Kanda'] } },

  // 8. Durga Yantra
  { id: 'durga_yantra', version: '1.0.0', traditionVariant: 'Traditional', names: { sanskrit: 'दुर्गा यन्त्र', hindi: 'दुर्गा यन्त्र', english: 'Durga Yantra' }, attributes: { deity: 'Goddess Durga', planet: 'Rahu', element: 'Fire / Shakti', chakra: 'Manipura', metal: ['Copper', 'Brass', 'Panchadhatu'], color: 'Red', purpose: ['Protection', 'Victory', 'Removal of Negativity'], benefits: ['Shields against black magic and enemies'], precautions: ['Respect purity around shrine'], tags: ['Durga', 'Protection', 'Shakti'] }, geometryRules: { bhupura: { enabled: true, steps: 3, gateSizeRatio: 0.15, sanskritName: 'भूपुर', englishName: 'Gate', symbolism: '3 Fortresses' }, lotusRings: [{ id: 'lotus_8', petalCount: 8, innerRadiusRatio: 0.5, outerRadiusRatio: 0.75, shape: 'pointed', sanskritName: '८ दल पद्म', englishName: '8 Petals', symbolism: 'Navadurga / 8 direction protection' }], concentricCircles: [{ id: 'c1', radiusRatio: 0.75, sanskritName: 'वृत्त', englishName: 'Circle', symbolism: 'Ring' }], starPolygons: [{ id: 'shatkona', points: 6, radiusRatio: 0.45, sanskritName: 'षट्कोण', englishName: 'Shatkona', symbolism: 'Armor of Shakti' }], bindu: { radiusRatio: 0.02, sanskritName: 'बिन्दु', englishName: 'Bindu', symbolism: 'Divine center' } }, layers: [], scripturalReferences: [], mantra: { beejMantra: 'ॐ दुं दुर्गायै नमः', mainMantra: 'ॐ एं ह्रीं क्लीं चामुण्डायै विच्चे', sanskrit: 'ॐ दुं दुर्गायै नमः', transliteration: 'Om Dum Durgayai Namah', meaningHindi: 'भगवती दुर्गा को प्रणाम जो संकटों से रक्षा करती हैं।', meaningEnglish: 'Salutations to Goddess Durga, protector from all afflictions.', japaModes: [108] }, ritualPlacement: { direction: 'North-East', metal: ['Copper', 'Panchadhatu'], element: 'Fire', planet: 'Rahu', deity: 'Goddess Durga', chakra: 'Manipura', dayOfWeek: 'Tuesday', nakshatra: 'Chitra', purificationSteps: ['Wash with water'], pranaPratishthaSteps: ['Offer red hibiscus'], dailyWorship: 'Light lamp with sesame oil.', placementLocation: 'Main altar' }, research: { history: 'Devi Mahatmyam tradition.', origin: 'Markandeya Purana.', mathematicalAnalysis: 'Tri-layer fortress geometry.', philosophicalMeaning: 'Destruction of ego and negativity.', scientificPerspective: 'Provides psychological resilience.', bibliography: ['Devi Mahatmyam'] } },

  // 9. Kali Yantra
  { id: 'kali_yantra', version: '1.0.0', traditionVariant: 'Tantric', names: { sanskrit: 'काली यन्त्र', hindi: 'काली यन्त्र', english: 'Mahakali Yantra' }, attributes: { deity: 'Goddess Mahakali', planet: 'Saturn / Rahu', element: 'Ether / Darkness', chakra: 'Sahasrara', metal: ['Copper', 'Black Iron', 'Silver'], color: 'Black / Dark Crimson', purpose: ['Transformation', 'Ego Dissolution', 'Protection'], benefits: ['Destroys negative karma and fear of death'], precautions: ['Requires strict discipline during worship'], tags: ['Kali', 'Tantra', 'Transformation'] }, geometryRules: { bhupura: { enabled: true, steps: 1, gateSizeRatio: 0.15, sanskritName: 'भूपुर', englishName: 'Gate', symbolism: 'Boundary' }, lotusRings: [{ id: 'lotus_8', petalCount: 8, innerRadiusRatio: 0.5, outerRadiusRatio: 0.75, shape: 'pointed', sanskritName: '८ दल पद्म', englishName: '8 Petals', symbolism: '8 Ashtanayikas' }], concentricCircles: [{ id: 'c1', radiusRatio: 0.75, sanskritName: 'वृत्त', englishName: 'Circle', symbolism: 'Ring' }], triangleSets: [{ id: 'kali_5_triangles', direction: 'downward', count: 5, baseRadiusRatio: 0.45, apexRadiusRatio: 0.45, interlocking: false, sanskritName: '५ अधोमुख त्रिकोण', englishName: '5 Downward Triangles', symbolism: '5 Koshas / 5 Elements involution' }], bindu: { radiusRatio: 0.02, sanskritName: 'बिन्दु', englishName: 'Bindu', symbolism: 'Void of Mahakala' } }, layers: [], scripturalReferences: [], mantra: { beejMantra: 'ॐ क्रीं कालिकायै नमः', mainMantra: 'ॐ क्रीं क्रीं क्रीं हूम् हूम् ह्रीं ह्रीं दक्षिणे कालिके क्रीं क्रीं क्रीं हूम् हूम् ह्रीं ह्रीं स्वाहा', sanskrit: 'ॐ क्रीं कालिकायै नमः', transliteration: 'Om Kreem Kalikayai Namah', meaningHindi: 'महाकाली को प्रणाम जो काल से भी परे हैं।', meaningEnglish: 'Salutations to Goddess Mahakali, transcendent over time and space.', japaModes: [108] }, ritualPlacement: { direction: 'South', metal: ['Copper', 'Silver'], element: 'Ether', planet: 'Saturn', deity: 'Goddess Mahakali', chakra: 'Sahasrara', dayOfWeek: 'Saturday', nakshatra: 'Swati', purificationSteps: ['Purify with sacred ashes'], pranaPratishthaSteps: ['Offer red flowers'], dailyWorship: 'Chant mantra at dusk.', placementLocation: 'Private meditation space' }, research: { history: 'Mahanirvana Tantra tradition.', origin: 'Tantra Agamas.', mathematicalAnalysis: '5 concentric downward triangles.', philosophicalMeaning: 'Return to absolute void.', scientificPerspective: 'Deep psychological shadow integration.', bibliography: ['Mahanirvana Tantra'] } },

  // 10. Baglamukhi Yantra
  { id: 'baglamukhi_yantra', version: '1.0.0', traditionVariant: 'Tantric', names: { sanskrit: 'बगलामुखी यन्त्र', hindi: 'बगलामुखी यन्त्र', english: 'Baglamukhi Yantra' }, attributes: { deity: 'Goddess Baglamukhi (Pitambari)', planet: 'Mars', element: 'Water / Fire', chakra: 'Manipura', metal: ['Brass', 'Gold', 'Copper'], color: 'Yellow', purpose: ['Paralyzing Enemies', 'Litigation Victory', 'Speech Control'], benefits: ['Stops gossip, wins court cases, stills opponents'], precautions: ['Use with pure righteous intent'], tags: ['Baglamukhi', 'Victory', 'Litigation'] }, geometryRules: { bhupura: { enabled: true, steps: 1, gateSizeRatio: 0.15, sanskritName: 'भूपुर', englishName: 'Gate', symbolism: 'Gate' }, lotusRings: [{ id: 'lotus_8', petalCount: 8, innerRadiusRatio: 0.5, outerRadiusRatio: 0.75, shape: 'pointed', sanskritName: '८ दल पद्म', englishName: '8 Petals', symbolism: '8 powers' }], concentricCircles: [{ id: 'c1', radiusRatio: 0.75, sanskritName: 'वृत्त', englishName: 'Circle', symbolism: 'Ring' }], starPolygons: [{ id: 'shatkona', points: 6, radiusRatio: 0.45, sanskritName: 'षट्कोण', englishName: 'Shatkona', symbolism: 'Stambhana power' }], bindu: { radiusRatio: 0.02, sanskritName: 'बिन्दु', englishName: 'Bindu', symbolism: 'Stillness point' } }, layers: [], scripturalReferences: [], mantra: { beejMantra: 'ॐ ह्ल्रीं बगलामुखि सर्वदुष्टानां वाचं मुखं पदं स्तम्भय जिह्वां कीलय बुद्धिं विनाशय ह्ल्रीं ॐ स्वाहा', mainMantra: 'ॐ ह्ल्रीं बगलामुख्यै नमः', sanskrit: 'ॐ ह्ल्रीं बगलामुख्यै नमः', transliteration: 'Om Hleem Bagalamukhyai Namah', meaningHindi: 'शत्रुओं की बुद्धि को स्तम्भित करने वाली देवी बगलामुखी को नमन।', meaningEnglish: 'Salutations to Goddess Baglamukhi who paralyzes negative speech and intentions.', japaModes: [108] }, ritualPlacement: { direction: 'East', metal: ['Brass', 'Gold'], element: 'Water', planet: 'Mars', deity: 'Goddess Baglamukhi', chakra: 'Manipura', dayOfWeek: 'Thursday', nakshatra: 'Pitambari', purificationSteps: ['Offer yellow turmeric paste'], pranaPratishthaSteps: ['Offer yellow cloth and flowers'], dailyWorship: 'Chant with yellow rosary.', placementLocation: 'Pooja room facing East' }, research: { history: 'Mahavidya tradition.', origin: 'Bagalamukhi Rahasya.', mathematicalAnalysis: 'Hexagram stambhana focus.', philosophicalMeaning: 'Control over mind and speech.', scientificPerspective: 'Mental stillness during conflict.', bibliography: ['Sankhyayana Tantra'] } },

  // 11. Mahamrityunjaya Yantra
  { id: 'mahamrityunjaya_yantra', version: '1.0.0', traditionVariant: 'Traditional', names: { sanskrit: 'महामृत्युंजय यन्त्र', hindi: 'महामृत्युंजय यन्त्र', english: 'Mahamrityunjaya Yantra' }, attributes: { deity: 'Lord Shiva (Mrityunjaya)', planet: 'Moon / Saturn', element: 'Water / Ether', chakra: 'Ajna', metal: ['Copper', 'Silver'], color: 'Silver / White', purpose: ['Health', 'Longevity', 'Protection from Accidental Death'], benefits: ['Promotes healing and alleviates chronic ailments'], precautions: ['Clean daily with holy water'], tags: ['Health', 'Shiva', 'Longevity'] }, geometryRules: { bhupura: { enabled: true, steps: 2, gateSizeRatio: 0.15, sanskritName: 'भूपुर', englishName: 'Gate', symbolism: 'Fortress against death' }, lotusRings: [{ id: 'lotus_8', petalCount: 8, innerRadiusRatio: 0.5, outerRadiusRatio: 0.75, shape: 'rounded', sanskritName: '८ दल पद्म', englishName: '8 Petals', symbolism: 'Amrita petals' }], concentricCircles: [{ id: 'c1', radiusRatio: 0.75, sanskritName: 'वृत्त', englishName: 'Circle', symbolism: 'Ring' }], starPolygons: [{ id: 'shatkona', points: 6, radiusRatio: 0.45, sanskritName: 'षट्कोण', englishName: 'Shatkona', symbolism: 'Shiva-Shakti union' }], bindu: { radiusRatio: 0.02, sanskritName: 'बिन्दु', englishName: 'Bindu', symbolism: 'Amrita Bindu' } }, layers: [], scripturalReferences: [], mantra: { beejMantra: 'ॐ हौं जूं सः', mainMantra: 'ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात्॥', sanskrit: 'ॐ त्र्यम्बकं यजामहे...', transliteration: 'Om Tryambakam Yajamahe Sugandhim Pushti-Vardhanam Urvarukamiva Bandhanan Mrityor Mukshiya Mamritat', meaningHindi: 'सुगंधित और पुष्टि को बढ़ाने वाले त्रिनेत्रधारी शिव की हम पूजा करते हैं, जो हमें मृत्यु से मोक्ष प्रदान करें।', meaningEnglish: 'We worship the three-eyed Lord Shiva who nourishes all beings; liberation from death unto immortality.', japaModes: [108, 1008] }, ritualPlacement: { direction: 'North-East', metal: ['Copper', 'Silver'], element: 'Water', planet: 'Moon', deity: 'Lord Shiva', chakra: 'Ajna', dayOfWeek: 'Monday', nakshatra: 'Ardra', purificationSteps: ['Bhasma & Bilva leaf offering'], pranaPratishthaSteps: ['Chant Mahamrityunjaya Mantra 108 times'], dailyWorship: 'Offer Bilva leaves and water.', placementLocation: 'Headboard or Pooja room' }, research: { history: 'Rigvedic Rishi Markandeya tradition.', origin: 'Rigveda 7.59.12.', mathematicalAnalysis: 'Hexagram surrounded by 8-petal lotus.', philosophicalMeaning: 'Transcendence over mortality.', scientificPerspective: 'Reduces cellular stress and promotes vital life force.', bibliography: ['Rigveda', 'Shiva Purana'] } },

  // 12. Dhanvantari Yantra
  { id: 'dhanvantari_yantra', version: '1.0.0', traditionVariant: 'Traditional', names: { sanskrit: 'धन्वन्तरि यन्त्र', hindi: 'धन्वन्तरि यन्त्र', english: 'Dhanvantari Yantra' }, attributes: { deity: 'Lord Dhanvantari (God of Ayurveda)', planet: 'Sun / Moon', element: 'Water / Herbs', chakra: 'Anahata', metal: ['Copper', 'Brass'], color: 'Green / Gold', purpose: ['Healing', 'Ayurveda', 'Vitality'], benefits: ['Accelerates recovery and blesses medical practice'], precautions: ['Keep near medicine altar'], tags: ['Health', 'Healing', 'Ayurveda'] }, geometryRules: { bhupura: { enabled: true, steps: 1, gateSizeRatio: 0.15, sanskritName: 'भूपुर', englishName: 'Gate', symbolism: 'Gate' }, lotusRings: [{ id: 'lotus_8', petalCount: 8, innerRadiusRatio: 0.5, outerRadiusRatio: 0.75, shape: 'leaf', sanskritName: '८ दल अमूर्त पद्म', englishName: '8 Petals', symbolism: '8 Herbal nectars' }], concentricCircles: [{ id: 'c1', radiusRatio: 0.75, sanskritName: 'वृत्त', englishName: 'Circle', symbolism: 'Ring' }], starPolygons: [{ id: 'shatkona', points: 6, radiusRatio: 0.45, sanskritName: 'षट्कोण', englishName: 'Shatkona', symbolism: 'Amrita pot balance' }], bindu: { radiusRatio: 0.02, sanskritName: 'बिन्दु', englishName: 'Bindu', symbolism: 'Amrita pot' } }, layers: [], scripturalReferences: [], mantra: { beejMantra: 'ॐ धं धन्वन्तरये नमः', mainMantra: 'ॐ नमो भगवते वासुदेवाय धन्वन्तरये अम्रुतकलशहस्ताय सर्वरोगविनाशनाय त्रैलोक्यनाथाय श्री महाविष्णवे नमः', sanskrit: 'ॐ धन्वन्तरये नमः', transliteration: 'Om Namo Bhagavate Vasudevaya Dhanvantaraye Amrita-Kalasa-Hastaya Sarva-Roga-Vinasanaya', meaningHindi: 'अमृत कलश धारण करने वाले भगवान धन्वन्तरि को प्रणाम जो सब रोगों का नाश करते हैं।', meaningEnglish: 'Salutations to Lord Dhanvantari holding the pot of nectar, healer of all diseases.', japaModes: [108] }, ritualPlacement: { direction: 'East', metal: ['Copper'], element: 'Water', planet: 'Sun', deity: 'Lord Dhanvantari', chakra: 'Anahata', dayOfWeek: 'Sunday', nakshatra: 'Ashwini', purificationSteps: ['Wash with basil water'], pranaPratishthaSteps: ['Offer Tulsi leaves'], dailyWorship: 'Chant mantra before taking medicine.', placementLocation: 'Ayurvedic clinic or home medicine altar' }, research: { history: 'Churning of Cosmic Ocean (Samudra Manthan).', origin: 'Sushruta Samhita.', mathematicalAnalysis: 'Harmonic healer geometry.', philosophicalMeaning: 'Restoration of physical balance.', scientificPerspective: 'Placebo-enhancing healing mindset.', bibliography: ['Sushruta Samhita', 'Charaka Samhita'] } },

  // 13. Navagraha Yantra
  { id: 'navagraha_yantra', version: '1.0.0', traditionVariant: 'Astrological', names: { sanskrit: 'नवग्रह यन्त्र', hindi: 'नवग्रह यन्त्र', english: 'Navagraha Yantra' }, attributes: { deity: '9 Planetary Deities (Sun to Ketu)', planet: 'All 9 Planets', element: 'Panchabhuta', chakra: 'All Chakras', metal: ['Panchadhatu', 'Copper', 'Brass'], color: 'Multi-color / Metallic', purpose: ['Astrological Balance', 'Graha Shanti', 'Karma Harmonization'], benefits: ['Pacifies malefic planetary transits (Dasha/Gochar)'], precautions: ['Place in clean neutral area'], tags: ['Astrology', 'Navagraha', 'Panchang'] }, geometryRules: { bhupura: { enabled: true, steps: 1, gateSizeRatio: 0.15, sanskritName: 'भूपुर', englishName: 'Gate', symbolism: 'Zodiac boundary' }, lotusRings: [{ id: 'lotus_8', petalCount: 8, innerRadiusRatio: 0.55, outerRadiusRatio: 0.75, shape: 'pointed', sanskritName: '८ दल पद्म', englishName: '8 Outer Planets', symbolism: '8 directional planets' }], concentricCircles: [{ id: 'c1', radiusRatio: 0.75, sanskritName: 'वृत्त', englishName: 'Circle', symbolism: 'Orbital Ring' }], starPolygons: [], bindu: { radiusRatio: 0.04, sanskritName: 'सूर्य बिन्दु (केन्द्र)', englishName: 'Sun Central Bindu', symbolism: 'Surya at center of 9 planets' } }, layers: [], scripturalReferences: [], mantra: { beejMantra: 'ॐ नवग्रहदेवेभ्यो नमः', mainMantra: 'ॐ ब्रह्मा मुरारिस्त्रिपुरांतकारी भानुः शशी भूमिसुतो बुधश्च। गुरुश्च शुक्रः शनिराहुकेतवः सर्वे ग्रहाः शांति करा भवंतु॥', sanskrit: 'ॐ नवग्रह नमः', transliteration: 'Om Brahma Muraristripurantakari Bhanuh Sasi Bhumisuto Budhasca Gurusca Sukrah Sani-Rahu-Ketavah Sarve Grahah Santikara Bhavantu', meaningHindi: 'सभी ९ ग्रह (सूर्य, चन्द्र, मंगल, बुध, गुरु, शुक्र, शनि, राहु, केतु) हमारे जीवन में शांति प्रदान करें।', meaningEnglish: 'May all nine planets bring peace, harmony, and balance into our lives.', japaModes: [108] }, ritualPlacement: { direction: 'East', metal: ['Panchadhatu', 'Copper'], element: 'Akasha', planet: 'All Planets', deity: 'Navagrahas', chakra: 'All Chakras', dayOfWeek: 'Sunday', nakshatra: 'Krittika', purificationSteps: ['Clean with Gangajal'], pranaPratishthaSteps: ['Offer 9 colored grains'], dailyWorship: 'Chant Navagraha Stotram.', placementLocation: 'Center of home or North-East' }, research: { history: 'Jyotish Vedic tradition.', origin: 'Navagraha Stotram by Vyasa.', mathematicalAnalysis: '3x3 planetary matrix grid placement.', philosophicalMeaning: 'Harmonization of karmic cycles.', scientificPerspective: 'Biorhythm alignment with solar/lunar cycles.', bibliography: ['Brihat Parasara Hora Shastra'] } },

  // 14-22: Individual 9 Planet Yantras (Surya, Chandra, Mangal, Budh, Brihaspati, Shukra, Shani, Rahu, Ketu)
  {
    id: 'surya_yantra', version: '1.0.0', traditionVariant: 'Jyotish',
    names: { sanskrit: 'सूर्य यन्त्र', hindi: 'सूर्य यन्त्र', english: 'Surya Yantra (Sun)' },
    attributes: { deity: 'Surya Bhagavan', planet: 'Sun', element: 'Fire', chakra: 'Manipura', metal: ['Copper', 'Gold'], color: 'Ruby / Gold', purpose: ['Leadership', 'Vitality', 'Fame'], benefits: ['Enhances willpower and eye health'], precautions: ['Facing East'], tags: ['Surya', 'Sun', 'Jyotish'] },
    geometryRules: { bhupura: { enabled: true, steps: 1, gateSizeRatio: 0.15, sanskritName: 'भूपुर', englishName: 'Gate', symbolism: 'Solar gate' }, lotusRings: [{ id: 'lotus_12', petalCount: 12, innerRadiusRatio: 0.5, outerRadiusRatio: 0.75, shape: 'pointed', sanskritName: '१२ दल पद्म', englishName: '12 Adityas', symbolism: '12 Solar months' }], concentricCircles: [{ id: 'c1', radiusRatio: 0.75, sanskritName: 'वृत्त', englishName: 'Circle', symbolism: 'Orbit' }], bindu: { radiusRatio: 0.03, sanskritName: 'सूर्य बिन्दु', englishName: 'Sun Center', symbolism: 'Solar core' } }, layers: [], scripturalReferences: [],
    mantra: { beejMantra: 'ॐ घृणिः सूर्याय नमः', mainMantra: 'ॐ ह्रां ह्रीं ह्रौं सः सूर्याय नमः', sanskrit: 'ॐ सूर्याय नमः', transliteration: 'Om Hram Hreem Hroum Sah Suryaya Namah', meaningHindi: 'भगवान सूर्य देव को प्रणाम।', meaningEnglish: 'Salutations to the Sun God, source of cosmic life energy.', japaModes: [108] },
    ritualPlacement: { direction: 'East', metal: ['Copper', 'Gold'], element: 'Fire', planet: 'Sun', deity: 'Surya', chakra: 'Manipura', dayOfWeek: 'Sunday', nakshatra: 'Krittika', purificationSteps: ['Water offering at sunrise'], pranaPratishthaSteps: ['Offer red sandalwood'], dailyWorship: 'Chant at sunrise.', placementLocation: 'East wall' }, research: { history: 'Vedic Solar worship.', origin: 'Aditya Hrudayam.', mathematicalAnalysis: '12-fold radial symmetry.', philosophicalMeaning: 'Soul consciousness.', scientificPerspective: 'Circadian rhythm synchronization.', bibliography: ['Aditya Hrudayam'] }
  },

  {
    id: 'chandra_yantra', version: '1.0.0', traditionVariant: 'Jyotish',
    names: { sanskrit: 'चन्द्र यन्त्र', hindi: 'चन्द्र यन्त्र', english: 'Chandra Yantra (Moon)' },
    attributes: { deity: 'Chandra Deva', planet: 'Moon', element: 'Water', chakra: 'Svadhisthana', metal: ['Silver'], color: 'White / Silver', purpose: ['Mental Peace', 'Emotional Balance'], benefits: ['Calms anxiety and boosts intuition'], precautions: ['Keep clean'], tags: ['Chandra', 'Moon', 'Jyotish'] },
    geometryRules: { bhupura: { enabled: true, steps: 1, gateSizeRatio: 0.15, sanskritName: 'भूपुर', englishName: 'Gate', symbolism: 'Lunar gate' }, lotusRings: [{ id: 'lotus_16', petalCount: 16, innerRadiusRatio: 0.5, outerRadiusRatio: 0.75, shape: 'rounded', sanskritName: '१६ कला पद्म', englishName: '16 Kalas', symbolism: '16 Moon phases' }], concentricCircles: [{ id: 'c1', radiusRatio: 0.75, sanskritName: 'वृत्त', englishName: 'Circle', symbolism: 'Orbit' }], bindu: { radiusRatio: 0.03, sanskritName: 'चन्द्र बिन्दु', englishName: 'Moon Center', symbolism: 'Lunar core' } }, layers: [], scripturalReferences: [],
    mantra: { beejMantra: 'ॐ सों सोमाय नमः', mainMantra: 'ॐ श्रां श्रीं श्रौं सः चंद्रमसे नमः', sanskrit: 'ॐ चन्द्रमसे नमः', transliteration: 'Om Shram Shreem Shroum Sah Chandramase Namah', meaningHindi: 'चंद्र देव को नमन।', meaningEnglish: 'Salutations to Moon God, ruler of mind.', japaModes: [108] },
    ritualPlacement: { direction: 'North-West', metal: ['Silver'], element: 'Water', planet: 'Moon', deity: 'Chandra', chakra: 'Svadhisthana', dayOfWeek: 'Monday', nakshatra: 'Rohini', purificationSteps: ['Wash with milk'], pranaPratishthaSteps: ['Offer white flowers'], dailyWorship: 'Chant at night.', placementLocation: 'North-West wall' }, research: { history: 'Lunar dynasty traditions.', origin: 'Soma Samhita.', mathematicalAnalysis: '16-fold petal ring.', philosophicalMeaning: 'Mind and emotional fluidity.', scientificPerspective: 'Tidal biorhythm harmony.', bibliography: ['Brihat Parasara Hora Shastra'] }
  },

  { id: 'mangal_yantra', version: '1.0.0', traditionVariant: 'Jyotish', names: { sanskrit: 'मंगल यन्त्र', hindi: 'मंगल यन्त्र', english: 'Mangal Yantra (Mars)' }, attributes: { deity: 'Mangal Deva', planet: 'Mars', element: 'Fire', chakra: 'Manipura', metal: ['Copper'], color: 'Red', purpose: ['Energy', 'Property', 'Manglik Dosha Neutralization'], benefits: ['Curbs impulsiveness and brings courage'], precautions: ['Strict cleanliness'], tags: ['Mars', 'Mangal', 'Jyotish'] }, geometryRules: { bhupura: { enabled: true, steps: 1, gateSizeRatio: 0.15, sanskritName: 'भूपुर', englishName: 'Gate', symbolism: 'Gate' }, lotusRings: [{ id: 'l8', petalCount: 8, innerRadiusRatio: 0.5, outerRadiusRatio: 0.75, shape: 'pointed', sanskritName: '८ दल', englishName: '8 Petals', symbolism: 'Energy' }], concentricCircles: [{ id: 'c1', radiusRatio: 0.75, sanskritName: 'वृत्त', englishName: 'Circle', symbolism: 'Ring' }], triangleSets: [{ id: 't1', direction: 'upward', count: 1, baseRadiusRatio: 0.45, apexRadiusRatio: 0.45, interlocking: false, sanskritName: 'त्रिकोण', englishName: 'Triangle', symbolism: 'Fire' }], bindu: { radiusRatio: 0.02, sanskritName: 'बिन्दु', englishName: 'Bindu', symbolism: 'Core' } }, layers: [], scripturalReferences: [], mantra: { beejMantra: 'ॐ अं अंगारकाय नमः', mainMantra: 'ॐ क्रां क्रीं क्रौं सः भौमाय नमः', sanskrit: 'ॐ भौमाय नमः', transliteration: 'Om Bhaumaya Namah', meaningHindi: 'मंगल ग्रह को प्रणाम।', meaningEnglish: 'Salutations to Mars Deva.', japaModes: [108] }, ritualPlacement: { direction: 'South', metal: ['Copper'], element: 'Fire', planet: 'Mars', deity: 'Mangal', chakra: 'Manipura', dayOfWeek: 'Tuesday', nakshatra: 'Chitra', purificationSteps: ['Red sandalwood paste'], pranaPratishthaSteps: ['Red flowers'], dailyWorship: 'Tuesday worship.', placementLocation: 'South' }, research: { history: 'Jyotish.', origin: 'BPHS.', mathematicalAnalysis: 'Triangle vector.', philosophicalMeaning: 'Action.', scientificPerspective: 'Drive.', bibliography: ['BPHS'] } },

  { id: 'budh_yantra', version: '1.0.0', traditionVariant: 'Jyotish', names: { sanskrit: 'बुध यन्त्र', hindi: 'बुध यन्त्र', english: 'Budh Yantra (Mercury)' }, attributes: { deity: 'Budh Deva', planet: 'Mercury', element: 'Earth', chakra: 'Vishuddha', metal: ['Brass', 'Bronze'], color: 'Green', purpose: ['Business', 'Communication', 'Logic'], benefits: ['Sharpen intellect and trade skills'], precautions: ['Keep clean'], tags: ['Mercury', 'Budh', 'Jyotish'] }, geometryRules: { bhupura: { enabled: true, steps: 1, gateSizeRatio: 0.15, sanskritName: 'भूपुर', englishName: 'Gate', symbolism: 'Gate' }, lotusRings: [{ id: 'l8', petalCount: 8, innerRadiusRatio: 0.5, outerRadiusRatio: 0.75, shape: 'rounded', sanskritName: '८ दल', englishName: '8 Petals', symbolism: 'Intellect' }], concentricCircles: [{ id: 'c1', radiusRatio: 0.75, sanskritName: 'वृत्त', englishName: 'Circle', symbolism: 'Ring' }], bindu: { radiusRatio: 0.02, sanskritName: 'बिन्दु', englishName: 'Bindu', symbolism: 'Core' } }, layers: [], scripturalReferences: [], mantra: { beejMantra: 'ॐ बुं बुधाय नमः', mainMantra: 'ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः', sanskrit: 'ॐ बुधाय नमः', transliteration: 'Om Budhaya Namah', meaningHindi: 'बुध देव को नमन।', meaningEnglish: 'Salutations to Mercury.', japaModes: [108] }, ritualPlacement: { direction: 'North', metal: ['Brass'], element: 'Earth', planet: 'Mercury', deity: 'Budh', chakra: 'Vishuddha', dayOfWeek: 'Wednesday', nakshatra: 'Ashlesha', purificationSteps: ['Tulsi water'], pranaPratishthaSteps: ['Green cloth'], dailyWorship: 'Wednesday worship.', placementLocation: 'North' }, research: { history: 'Jyotish.', origin: 'BPHS.', mathematicalAnalysis: 'Grid.', philosophicalMeaning: 'Communication.', scientificPerspective: 'Neural processing.', bibliography: ['BPHS'] } },

  { id: 'brihaspati_yantra', version: '1.0.0', traditionVariant: 'Jyotish', names: { sanskrit: 'बृहस्पति यन्त्र', hindi: 'गुरु यन्त्र', english: 'Brihaspati Yantra (Jupiter)' }, attributes: { deity: 'Guru Brihaspati', planet: 'Jupiter', element: 'Ether', chakra: 'Anahata', metal: ['Gold', 'Brass'], color: 'Yellow', purpose: ['Wisdom', 'Spirituality', 'Children'], benefits: ['Enhances fortune, higher learning, and grace'], precautions: ['Respect teachers'], tags: ['Jupiter', 'Guru', 'Jyotish'] }, geometryRules: { bhupura: { enabled: true, steps: 1, gateSizeRatio: 0.15, sanskritName: 'भूपुर', englishName: 'Gate', symbolism: 'Gate' }, lotusRings: [{ id: 'l16', petalCount: 16, innerRadiusRatio: 0.5, outerRadiusRatio: 0.75, shape: 'pointed', sanskritName: '१६ दल', englishName: '16 Petals', symbolism: 'Wisdom' }], concentricCircles: [{ id: 'c1', radiusRatio: 0.75, sanskritName: 'वृत्त', englishName: 'Circle', symbolism: 'Ring' }], bindu: { radiusRatio: 0.02, sanskritName: 'बिन्दु', englishName: 'Bindu', symbolism: 'Core' } }, layers: [], scripturalReferences: [], mantra: { beejMantra: 'ॐ बृं बृहस्पतये नमः', mainMantra: 'ॐ ग्रां ग्रीं ग्रौं सः गुरुवे नमः', sanskrit: 'ॐ गुरुवे नमः', transliteration: 'Om Gurave Namah', meaningHindi: 'देवगुरु बृहस्पति को प्रणाम।', meaningEnglish: 'Salutations to Guru Brihaspati.', japaModes: [108] }, ritualPlacement: { direction: 'North-East', metal: ['Gold', 'Brass'], element: 'Ether', planet: 'Jupiter', deity: 'Brihaspati', chakra: 'Anahata', dayOfWeek: 'Thursday', nakshatra: 'Punarvasu', purificationSteps: ['Turmeric water'], pranaPratishthaSteps: ['Yellow sweets'], dailyWorship: 'Thursday worship.', placementLocation: 'North-East' }, research: { history: 'Vedic.', origin: 'BPHS.', mathematicalAnalysis: 'Harmonic 16 lotus.', philosophicalMeaning: 'Higher knowledge.', scientificPerspective: 'Expansive consciousness.', bibliography: ['BPHS'] } },

  { id: 'shukra_yantra', version: '1.0.0', traditionVariant: 'Jyotish', names: { sanskrit: 'शुक्र यन्त्र', hindi: 'शुक्र यन्त्र', english: 'Shukra Yantra (Venus)' }, attributes: { deity: 'Shukracharya', planet: 'Venus', element: 'Water', chakra: 'Anahata', metal: ['Silver'], color: 'White', purpose: ['Love', 'Luxury', 'Artistic Talent'], benefits: ['Attracts comfort, relationships, and refinement'], precautions: ['Keep clean'], tags: ['Venus', 'Shukra', 'Jyotish'] }, geometryRules: { bhupura: { enabled: true, steps: 1, gateSizeRatio: 0.15, sanskritName: 'भूपुर', englishName: 'Gate', symbolism: 'Gate' }, lotusRings: [{ id: 'l8', petalCount: 8, innerRadiusRatio: 0.5, outerRadiusRatio: 0.75, shape: 'rounded', sanskritName: '८ दल', englishName: '8 Petals', symbolism: 'Beauty' }], concentricCircles: [{ id: 'c1', radiusRatio: 0.75, sanskritName: 'वृत्त', englishName: 'Circle', symbolism: 'Ring' }], bindu: { radiusRatio: 0.02, sanskritName: 'बिन्दु', englishName: 'Bindu', symbolism: 'Core' } }, layers: [], scripturalReferences: [], mantra: { beejMantra: 'ॐ शुं शुक्राय नमः', mainMantra: 'ॐ द्रां द्रीं द्रौं सः शुक्राय नमः', sanskrit: 'ॐ शुक्राय नमः', transliteration: 'Om Shukraya Namah', meaningHindi: 'शुक्र देव को प्रणाम।', meaningEnglish: 'Salutations to Venus.', japaModes: [108] }, ritualPlacement: { direction: 'South-East', metal: ['Silver'], element: 'Water', planet: 'Venus', deity: 'Shukra', chakra: 'Anahata', dayOfWeek: 'Friday', nakshatra: 'Bharani', purificationSteps: ['White flowers'], pranaPratishthaSteps: ['Camphor'], dailyWorship: 'Friday worship.', placementLocation: 'South-East' }, research: { history: 'Jyotish.', origin: 'BPHS.', mathematicalAnalysis: '8 petal.', philosophicalMeaning: 'Beauty.', scientificPerspective: 'Aesthetic joy.', bibliography: ['BPHS'] } },

  { id: 'shani_yantra', version: '1.0.0', traditionVariant: 'Jyotish', names: { sanskrit: 'शनि यन्त्र', hindi: 'शनि यन्त्र', english: 'Shani Yantra (Saturn)' }, attributes: { deity: 'Lord Shani', planet: 'Saturn', element: 'Air', chakra: 'Ajna', metal: ['Iron', 'Panchadhatu'], color: 'Black / Dark Blue', purpose: ['Discipline', 'Karmic Relief', 'Protection from Sade Sati'], benefits: ['Bestows patience, endurance, and justice'], precautions: ['Must maintain strict honesty'], tags: ['Saturn', 'Shani', 'Jyotish'] }, geometryRules: { bhupura: { enabled: true, steps: 1, gateSizeRatio: 0.15, sanskritName: 'भूपुर', englishName: 'Gate', symbolism: 'Gate' }, lotusRings: [{ id: 'l8', petalCount: 8, innerRadiusRatio: 0.5, outerRadiusRatio: 0.75, shape: 'pointed', sanskritName: '८ दल', englishName: '8 Petals', symbolism: 'Justice' }], concentricCircles: [{ id: 'c1', radiusRatio: 0.75, sanskritName: 'वृत्त', englishName: 'Circle', symbolism: 'Ring' }], bindu: { radiusRatio: 0.02, sanskritName: 'बिन्दु', englishName: 'Bindu', symbolism: 'Core' } }, layers: [], scripturalReferences: [], mantra: { beejMantra: 'ॐ शं शनैश्चराय नमः', mainMantra: 'ॐ प्रां प्रीं प्रौं सः शनैश्चराय नमः', sanskrit: 'ॐ शनैश्चराय नमः', transliteration: 'Om Sham Shanaishcharaya Namah', meaningHindi: 'शनिदेव को नमन।', meaningEnglish: 'Salutations to Lord Shani.', japaModes: [108] }, ritualPlacement: { direction: 'West', metal: ['Iron', 'Panchadhatu'], element: 'Air', planet: 'Saturn', deity: 'Shani', chakra: 'Ajna', dayOfWeek: 'Saturday', nakshatra: 'Pushya', purificationSteps: ['Mustard oil lamp'], pranaPratishthaSteps: ['Black sesame offering'], dailyWorship: 'Saturday worship.', placementLocation: 'West wall' }, research: { history: 'Jyotish.', origin: 'BPHS.', mathematicalAnalysis: 'Grid.', philosophicalMeaning: 'Karmic justice.', scientificPerspective: 'Discipline.', bibliography: ['BPHS'] } },

  { id: 'rahu_yantra', version: '1.0.0', traditionVariant: 'Jyotish', names: { sanskrit: 'राहु यन्त्र', hindi: 'राहु यन्त्र', english: 'Rahu Yantra (North Node)' }, attributes: { deity: 'Rahu Deva', planet: 'Rahu', element: 'Air', chakra: 'Svadhisthana', metal: ['Lead', 'Panchadhatu'], color: 'Smoky Grey', purpose: ['Overcoming Illusions', 'Foreign Success'], benefits: ['Pacifies Rahu Mahadasha'], precautions: ['Cleanliness'], tags: ['Rahu', 'Jyotish'] }, geometryRules: { bhupura: { enabled: true, steps: 1, gateSizeRatio: 0.15, sanskritName: 'भूपुर', englishName: 'Gate', symbolism: 'Gate' }, lotusRings: [{ id: 'l8', petalCount: 8, innerRadiusRatio: 0.5, outerRadiusRatio: 0.75, shape: 'pointed', sanskritName: '८ दल', englishName: '8 Petals', symbolism: 'Shadow' }], concentricCircles: [{ id: 'c1', radiusRatio: 0.75, sanskritName: 'वृत्त', englishName: 'Circle', symbolism: 'Ring' }], bindu: { radiusRatio: 0.02, sanskritName: 'बिन्दु', englishName: 'Bindu', symbolism: 'Core' } }, layers: [], scripturalReferences: [], mantra: { beejMantra: 'ॐ रां राहवे नमः', mainMantra: 'ॐ भ्रां भ्रीं भ्रौं सः राहवे नमः', sanskrit: 'ॐ राहवे नमः', transliteration: 'Om Rahave Namah', meaningHindi: 'राहु ग्रह को प्रणाम।', meaningEnglish: 'Salutations to Rahu.', japaModes: [108] }, ritualPlacement: { direction: 'South-West', metal: ['Panchadhatu'], element: 'Air', planet: 'Rahu', deity: 'Rahu', chakra: 'Svadhisthana', dayOfWeek: 'Saturday', nakshatra: 'Swati', purificationSteps: ['Gangajal'], pranaPratishthaSteps: ['Blue flowers'], dailyWorship: 'Dusk worship.', placementLocation: 'South-West' }, research: { history: 'Jyotish.', origin: 'BPHS.', mathematicalAnalysis: 'Shadow vector.', philosophicalMeaning: 'Desire transcendence.', scientificPerspective: 'Subconscious focus.', bibliography: ['BPHS'] } },

  { id: 'ketu_yantra', version: '1.0.0', traditionVariant: 'Jyotish', names: { sanskrit: 'केतु यन्त्र', hindi: 'केतु यन्त्र', english: 'Ketu Yantra (South Node)' }, attributes: { deity: 'Ketu Deva', planet: 'Ketu', element: 'Fire', chakra: 'Sahasrara', metal: ['Copper', 'Brass'], color: 'Multi-colored / Brown', purpose: ['Moksha', 'Intuition', 'Spiritual Awakening'], benefits: ['Pacifies Ketu afflictions'], precautions: ['Cleanliness'], tags: ['Ketu', 'Jyotish'] }, geometryRules: { bhupura: { enabled: true, steps: 1, gateSizeRatio: 0.15, sanskritName: 'भूपुर', englishName: 'Gate', symbolism: 'Gate' }, lotusRings: [{ id: 'l8', petalCount: 8, innerRadiusRatio: 0.5, outerRadiusRatio: 0.75, shape: 'pointed', sanskritName: '८ दल', englishName: '8 Petals', symbolism: 'Moksha' }], concentricCircles: [{ id: 'c1', radiusRatio: 0.75, sanskritName: 'वृत्त', englishName: 'Circle', symbolism: 'Ring' }], bindu: { radiusRatio: 0.02, sanskritName: 'बिन्दु', englishName: 'Bindu', symbolism: 'Core' } }, layers: [], scripturalReferences: [], mantra: { beejMantra: 'ॐ कें केतवे नमः', mainMantra: 'ॐ स्रां स्रीं स्रौं सः केतवे नमः', sanskrit: 'ॐ केतवे नमः', transliteration: 'Om Ketave Namah', meaningHindi: 'केतु ग्रह को प्रणाम।', meaningEnglish: 'Salutations to Ketu.', japaModes: [108] }, ritualPlacement: { direction: 'North-West', metal: ['Copper'], element: 'Fire', planet: 'Ketu', deity: 'Ketu', chakra: 'Sahasrara', dayOfWeek: 'Tuesday', nakshatra: 'Mula', purificationSteps: ['Clean water'], pranaPratishthaSteps: ['Multi-color flag'], dailyWorship: 'Tuesday worship.', placementLocation: 'North-West' }, research: { history: 'Jyotish.', origin: 'BPHS.', mathematicalAnalysis: 'Flame focus.', philosophicalMeaning: 'Liberation.', scientificPerspective: 'Intuitive insight.', bibliography: ['BPHS'] } },

  // 23. Vastu Yantra
  { id: 'vastu_yantra', version: '1.0.0', traditionVariant: 'Vastu', names: { sanskrit: 'वास्तु दोष निवारण यन्त्र', hindi: 'वास्तु यन्त्र', english: 'Vastu Dosh Nivaran Yantra' }, attributes: { deity: 'Vastu Purusha', planet: 'All Planets', element: 'Panchabhuta', chakra: 'All Chakras', metal: ['Copper', 'Brass', 'Gold'], color: 'Brown / Gold', purpose: ['Architectural Harmony', 'Vastu Dosha Removal'], benefits: ['Balances 5 elements and 8 directions in building'], precautions: ['Buried at foundation or hung at center wall'], tags: ['Vastu', 'Architecture', 'Home'] }, geometryRules: { bhupura: { enabled: true, steps: 3, gateSizeRatio: 0.15, sanskritName: '८ दिशा भूपुर', englishName: '8 Direction Gate', symbolism: '8 directional guardians' }, lotusRings: [{ id: 'l8', petalCount: 8, innerRadiusRatio: 0.5, outerRadiusRatio: 0.75, shape: 'pointed', sanskritName: '८ दल', englishName: '8 Petals', symbolism: '8 cardinal directions' }], concentricCircles: [{ id: 'c1', radiusRatio: 0.75, sanskritName: 'वृत्त', englishName: 'Circle', symbolism: 'Ring' }], bindu: { radiusRatio: 0.03, sanskritName: 'वास्तु पुरुष नाभि बिन्दु', englishName: 'Brahmasthan Center', symbolism: 'Brahmasthan origin' } }, layers: [], scripturalReferences: [], mantra: { beejMantra: 'ॐ वास्तुपुरुषाय नमः', mainMantra: 'ॐ नमः भगवते वास्तुपुरुषाय महाबल पराक्रमाय सर्वगृहाणि अम्रुतम कुरु कुरु स्वाहा', sanskrit: 'ॐ वास्तुपुरुषाय नमः', transliteration: 'Om Namah Bhagavate Vastu-Purushaya Swaha', meaningHindi: 'वास्तु पुरुष देव को प्रणाम।', meaningEnglish: 'Salutations to Vastu Purusha, lord of spatial architecture.', japaModes: [108] }, ritualPlacement: { direction: 'North-East', metal: ['Copper', 'Brass'], element: 'Panchabhuta', planet: 'All', deity: 'Vastu Purusha', chakra: 'All', dayOfWeek: 'Monday', nakshatra: 'Rohini', purificationSteps: ['Gangajal wash'], pranaPratishthaSteps: ['Offer grains and flowers'], dailyWorship: 'Light lamp facing East.', placementLocation: 'Brahmasthan (center) or North-East wall' }, research: { history: 'Vastu Shastra tradition.', origin: 'Mayamatam & Samarangana Sutradhara.', mathematicalAnalysis: 'Vastu Purusha Mandala 81-grid geometry.', philosophicalMeaning: 'Sacred architectural alignment with cosmos.', scientificPerspective: 'Optimizes spatial geometry and lighting energy flow.', bibliography: ['Samarangana Sutradhara', 'Mayamatam'] } },

  // 24. Sudarshana Yantra
  { id: 'sudarshana_yantra', version: '1.0.0', traditionVariant: 'Vaishnava', names: { sanskrit: 'सुदर्शन यन्त्र', hindi: 'सुदर्शन यन्त्र', english: 'Sudarshana Yantra' }, attributes: { deity: 'Lord Sudarshana (Chakra of Vishnu)', planet: 'Sun / Mars', element: 'Fire', chakra: 'Manipura', metal: ['Copper', 'Panchadhatu'], color: 'Gold / Fiery Red', purpose: ['Supreme Protection', 'Destroying Negativity'], benefits: ['Shields against evil eye, dark forces, and fear'], precautions: ['Respect sacredness'], tags: ['Sudarshana', 'Vishnu', 'Protection'] }, geometryRules: { bhupura: { enabled: true, steps: 2, gateSizeRatio: 0.15, sanskritName: 'भूपुर', englishName: 'Gate', symbolism: 'Gate' }, lotusRings: [{ id: 'l16', petalCount: 16, innerRadiusRatio: 0.55, outerRadiusRatio: 0.75, shape: 'pointed', sanskritName: '१६ ज्वाला दल', englishName: '16 Flames', symbolism: '16 weapon spikes' }], concentricCircles: [{ id: 'c1', radiusRatio: 0.75, sanskritName: 'सुदर्शन चक्र मण्डल', englishName: 'Rotating Disc Ring', symbolism: 'Spinning discus' }], starPolygons: [{ id: 'shatkona', points: 6, radiusRatio: 0.45, sanskritName: 'षट्कोण', englishName: 'Shatkona', symbolism: 'Vishnu wheel center' }], bindu: { radiusRatio: 0.02, sanskritName: 'बिन्दु', englishName: 'Bindu', symbolism: 'Narasimha Bindu' } }, layers: [], scripturalReferences: [], mantra: { beejMantra: 'ॐ सुदर्शनाय नमः', mainMantra: 'ॐ सुदर्शन चक्राय विद्महे महाज्वालाय धीमहि। तन्नो चक्रः प्रचोदयात्॥', sanskrit: 'ॐ सुदर्शनाय चक्रराजाय नमः', transliteration: 'Om Sudarshanachakraya Vidmahe Maha-Jvalaya Dheemahi Tanno Chakrah Prachodayat', meaningHindi: 'महाज्वाला स्वरूप सुदर्शन चक्रराज को नमन।', meaningEnglish: 'Salutations to the fiery cosmic disc of Vishnu, Sudarshana Chakra.', japaModes: [108] }, ritualPlacement: { direction: 'East', metal: ['Copper', 'Panchadhatu'], element: 'Fire', planet: 'Sun', deity: 'Sudarshana', chakra: 'Manipura', dayOfWeek: 'Wednesday', nakshatra: 'Swati', purificationSteps: ['Wash with water'], pranaPratishthaSteps: ['Offer Tulsi leaves'], dailyWorship: 'Chant Sudarshana Ashtakam.', placementLocation: 'Main entrance facing East' }, research: { history: 'Vaishnava Agamas.', origin: 'Ahirbudhnya Samhita.', mathematicalAnalysis: 'Rotating 16-flame polygon wheel.', philosophicalMeaning: 'Cutting through ignorance and fear.', scientificPerspective: 'Solar wheel psychological fortitude.', bibliography: ['Ahirbudhnya Samhita'] } },

  // 25. Narasimha Yantra
  { id: 'narasimha_yantra', version: '1.0.0', traditionVariant: 'Vaishnava', names: { sanskrit: 'नृसिंह यन्त्र', hindi: 'नृसिंह यन्त्र', english: 'Narasimha Yantra' }, attributes: { deity: 'Lord Narasimha (Man-Lion Avatar)', planet: 'Mars / Rahu', element: 'Fire', chakra: 'Manipura', metal: ['Copper', 'Brass', 'Panchadhatu'], color: 'Fiery Orange', purpose: ['Fearlessness', 'Protection from Enemies', 'Triumph'], benefits: ['Instantly protects devotees from severe danger'], precautions: ['Worship with pure devotion'], tags: ['Narasimha', 'Protection', 'Victory'] }, geometryRules: { bhupura: { enabled: true, steps: 2, gateSizeRatio: 0.15, sanskritName: 'भूपुर', englishName: 'Gate', symbolism: 'Gate' }, lotusRings: [{ id: 'l8', petalCount: 8, innerRadiusRatio: 0.5, outerRadiusRatio: 0.75, shape: 'pointed', sanskritName: '८ दल', englishName: '8 Petals', symbolism: '8 Lions' }], concentricCircles: [{ id: 'c1', radiusRatio: 0.75, sanskritName: 'वृत्त', englishName: 'Circle', symbolism: 'Ring' }], starPolygons: [{ id: 'shatkona', points: 6, radiusRatio: 0.45, sanskritName: 'षट्कोण', englishName: 'Shatkona', symbolism: 'Narasimha armor' }], bindu: { radiusRatio: 0.02, sanskritName: 'बिन्दु', englishName: 'Bindu', symbolism: 'Apex strength' } }, layers: [], scripturalReferences: [], mantra: { beejMantra: 'ॐ क्ष्रौं नृसिंहाय नमः', mainMantra: 'ॐ उग्रं वीरं महाविष्णुं ज्वलन्तं सर्वतोमुखम्। नृसिंहं भीषणं भद्रं मृत्युमृत्युं नमाम्यहम्॥', sanskrit: 'ॐ उग्रं वीरं महाविष्णुं...', transliteration: 'Om Ugram Veeram Maha-Vishnum Jvalantam Sarvato-Mukham Nrisimham Bheeshanam Bhadram Mrityur-Mrityum Namamyaham', meaningHindi: 'अत्यंत तेजस्वी, निर्भय, मृत्यु के भी मृत्यु भगवान नृसिंह को मैं नमन करता हूँ।', meaningEnglish: 'I bow to the ferocious and heroic Lord Narasimha who destroys death itself and protects his devotees.', japaModes: [108] }, ritualPlacement: { direction: 'North-East', metal: ['Copper', 'Brass'], element: 'Fire', planet: 'Mars', deity: 'Lord Narasimha', chakra: 'Manipura', dayOfWeek: 'Tuesday', nakshatra: 'Swati', purificationSteps: ['Offer red sandalwood and Tulsi'], pranaPratishthaSteps: ['Chant Narasimha Kavacham'], dailyWorship: 'Chant at dusk.', placementLocation: 'Main entrance or altar' }, research: { history: 'Prahlada tradition in Srimad Bhagavatam.', origin: 'Srimad Bhagavatam Canto 7.', mathematicalAnalysis: 'Hexagram with fiery 8-petal surround.', philosophicalMeaning: 'Omnipresence of divine protection in all matter.', scientificPerspective: 'Eliminates existential dread and instills inner courage.', bibliography: ['Srimad Bhagavatam', 'Narasimha Tapani Upanishad'] } }
];

export const GOLDEN_YANTRA_DATASET = MASTER_YANTRA_DATASET;

import { YantraDSLRegistry } from '../dsl/registry';
YantraDSLRegistry.registerAll(MASTER_YANTRA_DATASET);
