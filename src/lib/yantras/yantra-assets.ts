/**
 * Canonical SVG Asset Registry & Resolution Service
 * Single authoritative source of truth for all Yantra SVG assets.
 * 
 * NOTE: The visual geometry of all SVG assets is verified and immutable.
 * This registry standardizes lookup, aliases, candidate resolution, and graceful fallbacks.
 */

export interface YantraAsset {
  id: string;
  svgPath: string;
  category: string;
  aliases?: string[];
  fallbackPaths?: string[];
}

export const YANTRA_ASSET_REGISTRY: Record<string, YantraAsset> = {
  // 01. Supreme Sri Chakra
  sri_yantra: {
    id: 'sri_yantra',
    svgPath: '/yantras/01_SriChakra/sri_yantra.svg',
    category: 'supreme_sri_chakra',
    aliases: ['SriYantra', 'Shriyantra', 'shriyantra', 'sri-chakra', 'meru_yantra', 'maha_meru'],
    fallbackPaths: [
      '/yantras/sri_yantra.svg',
      '/yantras/SriYantra.svg',
      '/yantras/Shriyantra.svg'
    ]
  },

  // 02. Dasha Mahavidya
  kali_yantra: {
    id: 'kali_yantra',
    svgPath: '/yantras/02_Dashamahavidya/kali_yantra.svg',
    category: 'dashamahavidya',
    aliases: ['mahakali_yantra', 'kali'],
    fallbackPaths: ['/yantras/kali_yantra.svg']
  },
  tara_yantra: {
    id: 'tara_yantra',
    svgPath: '/yantras/02_Dashamahavidya/tara_yantra.svg',
    category: 'dashamahavidya',
    aliases: ['mahatara_yantra', 'tara'],
    fallbackPaths: ['/yantras/tara_yantra.svg']
  },
  tripura_sundari_yantra: {
    id: 'tripura_sundari_yantra',
    svgPath: '/yantras/02_Dashamahavidya/tripura_sundari_yantra.svg',
    category: 'dashamahavidya',
    aliases: ['shodashi_yantra', 'lalita_yantra', 'tripurasundari'],
    fallbackPaths: ['/yantras/tripura_sundari_yantra.svg']
  },
  bhuvaneshvari_yantra: {
    id: 'bhuvaneshvari_yantra',
    svgPath: '/yantras/02_Dashamahavidya/bhuvaneshvari_yantra.svg',
    category: 'dashamahavidya',
    aliases: ['bhuvaneshwari_yantra', 'bhuvaneshwari'],
    fallbackPaths: ['/yantras/bhuvaneshvari_yantra.svg']
  },
  bhairavi_yantra: {
    id: 'bhairavi_yantra',
    svgPath: '/yantras/02_Dashamahavidya/bhairavi_yantra.svg',
    category: 'dashamahavidya',
    aliases: ['tripura_bhairavi_yantra', 'bhairavi'],
    fallbackPaths: ['/yantras/bhairavi_yantra.svg']
  },
  chhinnamasta_yantra: {
    id: 'chhinnamasta_yantra',
    svgPath: '/yantras/02_Dashamahavidya/chhinnamasta_yantra.svg',
    category: 'dashamahavidya',
    aliases: ['chinnamasta_yantra', 'prachanda_chandika'],
    fallbackPaths: ['/yantras/chhinnamasta_yantra.svg']
  },
  dhumavati_yantra: {
    id: 'dhumavati_yantra',
    svgPath: '/yantras/02_Dashamahavidya/dhumavati_yantra.svg',
    category: 'dashamahavidya',
    aliases: ['dhumavati'],
    fallbackPaths: ['/yantras/dhumavati_yantra.svg']
  },
  bagalamukhi_yantra: {
    id: 'bagalamukhi_yantra',
    svgPath: '/yantras/02_Dashamahavidya/bagalamukhi_yantra.svg',
    category: 'dashamahavidya',
    aliases: ['bagala_yantra', 'pitambara_yantra', 'baglamukhi_yantra'],
    fallbackPaths: ['/yantras/bagalamukhi_yantra.svg']
  },
  matangi_yantra: {
    id: 'matangi_yantra',
    svgPath: '/yantras/02_Dashamahavidya/matangi_yantra.svg',
    category: 'dashamahavidya',
    aliases: ['raja_matangi_yantra', 'matangi'],
    fallbackPaths: ['/yantras/matangi_yantra.svg']
  },
  kamala_yantra: {
    id: 'kamala_yantra',
    svgPath: '/yantras/02_Dashamahavidya/kamala_yantra.svg',
    category: 'dashamahavidya',
    aliases: ['kamalatmika_yantra', 'kamala'],
    fallbackPaths: ['/yantras/kamala_yantra.svg']
  },

  // 03. Ganesha & Ganapati
  ganesh_yantra: {
    id: 'ganesh_yantra',
    svgPath: '/yantras/03_Ganesha/ganesh_yantra.svg',
    category: 'ganesha',
    aliases: ['ganesha_yantra', 'vighnaharta_yantra'],
    fallbackPaths: ['/yantras/ganesh_yantra.svg']
  },
  maha_ganapati_yantra: {
    id: 'maha_ganapati_yantra',
    svgPath: '/yantras/03_Ganesha/maha_ganapati_yantra.svg',
    category: 'ganesha',
    aliases: ['mahaganapati_yantra', 'mahaganapati'],
    fallbackPaths: ['/yantras/maha_ganapati_yantra.svg']
  },
  sankata_nashana_ganesha_yantra: {
    id: 'sankata_nashana_ganesha_yantra',
    svgPath: '/yantras/03_Ganesha/sankata_nashana_ganesha_yantra.svg',
    category: 'ganesha',
    aliases: ['sankata_nashana_yantra', 'sankatanashana_ganesha'],
    fallbackPaths: ['/yantras/sankata_nashana_ganesha_yantra.svg']
  },
  ucchishta_ganapati_yantra: {
    id: 'ucchishta_ganapati_yantra',
    svgPath: '/yantras/03_Ganesha/ucchishta_ganapati_yantra.svg',
    category: 'ganesha',
    aliases: ['ucchishta_ganesh_yantra', 'ucchishta_ganapati'],
    fallbackPaths: ['/yantras/ucchishta_ganapati_yantra.svg']
  },
  haridra_ganesha_yantra: {
    id: 'haridra_ganesha_yantra',
    svgPath: '/yantras/03_Ganesha/haridra_ganesha_yantra.svg',
    category: 'ganesha',
    aliases: ['haridra_ganapati_yantra', 'haridra_ganesha'],
    fallbackPaths: ['/yantras/haridra_ganesha_yantra.svg']
  },

  // 04. Lakshmi & Wealth
  mahalakshmi_yantra: {
    id: 'mahalakshmi_yantra',
    svgPath: '/yantras/04_Lakshmi/mahalakshmi_yantra.svg',
    category: 'lakshmi',
    aliases: ['lakshmi_yantra', 'laxmi_yantra'],
    fallbackPaths: ['/yantras/mahalakshmi_yantra.svg']
  },
  ashta_lakshmi_yantra: {
    id: 'ashta_lakshmi_yantra',
    svgPath: '/yantras/04_Lakshmi/ashta_lakshmi_yantra.svg',
    category: 'lakshmi',
    aliases: ['ashtalakshmi_yantra', 'ashta_laxmi_yantra'],
    fallbackPaths: ['/yantras/ashta_lakshmi_yantra.svg']
  },
  kanakadhara_yantra: {
    id: 'kanakadhara_yantra',
    svgPath: '/yantras/04_Lakshmi/kanakadhara_yantra.svg',
    category: 'lakshmi',
    aliases: ['swarna_dhara_yantra', 'kanakdhara_yantra'],
    fallbackPaths: ['/yantras/kanakadhara_yantra.svg']
  },
  vyapar_vriddhi_yantra: {
    id: 'vyapar_vriddhi_yantra',
    svgPath: '/yantras/04_Lakshmi/vyapar_vriddhi_yantra.svg',
    category: 'lakshmi',
    aliases: ['vyaparvriddhi_yantra', 'business_growth_yantra'],
    fallbackPaths: ['/yantras/vyapar_vriddhi_yantra.svg']
  },
  vaibhav_lakshmi_yantra: {
    id: 'vaibhav_lakshmi_yantra',
    svgPath: '/yantras/04_Lakshmi/vaibhav_lakshmi_yantra.svg',
    category: 'lakshmi',
    aliases: ['vaibhav_laxmi_yantra', 'vaibhavlakshmi_yantra'],
    fallbackPaths: ['/yantras/vaibhav_lakshmi_yantra.svg']
  },
  kuber_yantra: {
    id: 'kuber_yantra',
    svgPath: '/yantras/04_Lakshmi/kuber_yantra.svg',
    category: 'lakshmi',
    aliases: ['kubera_yantra', 'dhana_kuber_yantra'],
    fallbackPaths: ['/yantras/kuber_yantra.svg', '/yantras/16_MagicSquare/kuber_yantra.svg']
  },

  // 05. Shiva & Bhairava
  mahamrityunjaya_yantra: {
    id: 'mahamrityunjaya_yantra',
    svgPath: '/yantras/05_Shiva/mahamrityunjaya_yantra.svg',
    category: 'shiva',
    aliases: ['mrityunjaya_yantra', 'mrityunjay_yantra'],
    fallbackPaths: ['/yantras/mahamrityunjaya_yantra.svg']
  },
  swarna_akarshana_bhairava_yantra: {
    id: 'swarna_akarshana_bhairava_yantra',
    svgPath: '/yantras/05_Shiva/swarna_akarshana_bhairava_yantra.svg',
    category: 'shiva',
    aliases: ['swarna_akarshan_bhairav_yantra', 'swarnakarshana_bhairava'],
    fallbackPaths: ['/yantras/swarna_akarshana_bhairava_yantra.svg']
  },
  sanjeevani_mahamrityunjaya_yantra: {
    id: 'sanjeevani_mahamrityunjaya_yantra',
    svgPath: '/yantras/05_Shiva/sanjeevani_mahamrityunjaya_yantra.svg',
    category: 'shiva',
    aliases: ['sanjeevani_mrityunjaya_yantra', 'sanjeevani_yantra'],
    fallbackPaths: ['/yantras/sanjeevani_mahamrityunjaya_yantra.svg']
  },
  sharabheshwara_yantra: {
    id: 'sharabheshwara_yantra',
    svgPath: '/yantras/05_Shiva/sharabheshwara_yantra.svg',
    category: 'shiva',
    aliases: ['sharabha_yantra', 'sharabheshwar_yantra'],
    fallbackPaths: ['/yantras/sharabheshwara_yantra.svg']
  },
  sadashiva_yantra: {
    id: 'sadashiva_yantra',
    svgPath: '/yantras/05_Shiva/sadashiva_yantra.svg',
    category: 'shiva',
    aliases: ['panchabrahma_sadashiva_yantra', 'sadashiva_panchabrahma'],
    fallbackPaths: ['/yantras/sadashiva_yantra.svg']
  },

  // 07. Protection & Raksha
  durga_bisa_yantra: {
    id: 'durga_bisa_yantra',
    svgPath: '/yantras/07_Protection/durga_bisa_yantra.svg',
    category: 'protection_raksha',
    aliases: ['durga_beesa_yantra', 'durgabisa_yantra'],
    fallbackPaths: ['/yantras/durga_bisa_yantra.svg']
  },
  sudarshana_chakra_yantra: {
    id: 'sudarshana_chakra_yantra',
    svgPath: '/yantras/07_Protection/sudarshana_chakra_yantra.svg',
    category: 'protection_raksha',
    aliases: ['sudarshan_chakra_yantra', 'sudarshana_yantra'],
    fallbackPaths: ['/yantras/sudarshana_chakra_yantra.svg']
  },
  panchamukhi_hanuman_yantra: {
    id: 'panchamukhi_hanuman_yantra',
    svgPath: '/yantras/07_Protection/panchamukhi_hanuman_yantra.svg',
    category: 'protection_raksha',
    aliases: ['hanuman_yantra', 'panchamukha_hanuman'],
    fallbackPaths: ['/yantras/panchamukhi_hanuman_yantra.svg']
  },
  pratyangira_yantra: {
    id: 'pratyangira_yantra',
    svgPath: '/yantras/07_Protection/pratyangira_yantra.svg',
    category: 'protection_raksha',
    aliases: ['maha_pratyangira_yantra', 'pratyangira'],
    fallbackPaths: ['/yantras/pratyangira_yantra.svg']
  },

  // 08. Navagraha & Magic Square
  surya_yantra: {
    id: 'surya_yantra',
    svgPath: '/yantras/08_Navagraha/surya_yantra.svg',
    category: 'navagraha',
    aliases: ['sun_yantra', 'surya_graha_yantra'],
    fallbackPaths: ['/yantras/surya_yantra.svg', '/yantras/16_MagicSquare/surya_yantra.svg']
  },
  chandra_yantra: {
    id: 'chandra_yantra',
    svgPath: '/yantras/08_Navagraha/chandra_yantra.svg',
    category: 'navagraha',
    aliases: ['moon_yantra', 'chandra_graha_yantra'],
    fallbackPaths: ['/yantras/chandra_yantra.svg', '/yantras/16_MagicSquare/chandra_yantra.svg']
  },
  mangala_yantra: {
    id: 'mangala_yantra',
    svgPath: '/yantras/08_Navagraha/mangala_yantra.svg',
    category: 'navagraha',
    aliases: ['mangal_yantra', 'mars_yantra', 'kuja_yantra'],
    fallbackPaths: ['/yantras/mangala_yantra.svg', '/yantras/mangal_yantra.svg', '/yantras/16_MagicSquare/mangala_yantra.svg']
  },
  budha_yantra: {
    id: 'budha_yantra',
    svgPath: '/yantras/08_Navagraha/budha_yantra.svg',
    category: 'navagraha',
    aliases: ['mercury_yantra', 'budh_yantra'],
    fallbackPaths: ['/yantras/budha_yantra.svg', '/yantras/16_MagicSquare/budha_yantra.svg']
  },
  guru_yantra: {
    id: 'guru_yantra',
    svgPath: '/yantras/08_Navagraha/guru_yantra.svg',
    category: 'navagraha',
    aliases: ['brihaspati_yantra', 'jupiter_yantra'],
    fallbackPaths: ['/yantras/guru_yantra.svg', '/yantras/brihaspati_yantra.svg', '/yantras/16_MagicSquare/guru_yantra.svg']
  },
  shukra_yantra: {
    id: 'shukra_yantra',
    svgPath: '/yantras/08_Navagraha/shukra_yantra.svg',
    category: 'navagraha',
    aliases: ['venus_yantra', 'shukracharya_yantra'],
    fallbackPaths: ['/yantras/shukra_yantra.svg', '/yantras/16_MagicSquare/shukra_yantra.svg']
  },
  shani_yantra: {
    id: 'shani_yantra',
    svgPath: '/yantras/08_Navagraha/shani_yantra.svg',
    category: 'navagraha',
    aliases: ['saturn_yantra', 'shanaishchara_yantra'],
    fallbackPaths: ['/yantras/shani_yantra.svg', '/yantras/16_MagicSquare/shani_yantra.svg']
  },
  rahu_yantra: {
    id: 'rahu_yantra',
    svgPath: '/yantras/08_Navagraha/rahu_yantra.svg',
    category: 'navagraha',
    aliases: ['rahu_graha_yantra'],
    fallbackPaths: ['/yantras/rahu_yantra.svg', '/yantras/16_MagicSquare/rahu_yantra.svg']
  },
  ketu_yantra: {
    id: 'ketu_yantra',
    svgPath: '/yantras/08_Navagraha/ketu_yantra.svg',
    category: 'navagraha',
    aliases: ['ketu_graha_yantra'],
    fallbackPaths: ['/yantras/ketu_yantra.svg', '/yantras/16_MagicSquare/ketu_yantra.svg']
  },
  navagraha_yantra: {
    id: 'navagraha_yantra',
    svgPath: '/yantras/08_Navagraha/navagraha_yantra.svg',
    category: 'navagraha',
    aliases: ['navagraha_mandala_yantra', 'nine_planets_yantra'],
    fallbackPaths: ['/yantras/navagraha_yantra.svg']
  },

  // 09. Vastu & Harmony
  vastu_dosha_nivarana_yantra: {
    id: 'vastu_dosha_nivarana_yantra',
    svgPath: '/yantras/09_Vastu/vastu_dosha_nivarana_yantra.svg',
    category: 'vastu',
    aliases: ['vastu_yantra', 'vastu_purusha_yantra', 'vastu_dosh_nashak_yantra'],
    fallbackPaths: [
      '/yantras/vastu_dosha_nivarana_yantra.svg',
      '/yantras/09_Vastu/vastu_yantra.svg',
      '/yantras/vastu_yantra.svg'
    ]
  },
  vastu_yantra: {
    id: 'vastu_yantra',
    svgPath: '/yantras/09_Vastu/vastu_yantra.svg',
    category: 'vastu',
    aliases: ['vastu_dosha_nivarana_yantra', 'vastu_purusha_yantra'],
    fallbackPaths: [
      '/yantras/vastu_yantra.svg',
      '/yantras/09_Vastu/vastu_dosha_nivarana_yantra.svg',
      '/yantras/vastu_dosha_nivarana_yantra.svg'
    ]
  },
  dikpala_ashtadigbandhana_yantra: {
    id: 'dikpala_ashtadigbandhana_yantra',
    svgPath: '/yantras/09_Vastu/dikpala_ashtadigbandhana_yantra.svg',
    category: 'vastu',
    aliases: ['dikpala_yantra', 'ashtadigbandhana_yantra'],
    fallbackPaths: ['/yantras/dikpala_ashtadigbandhana_yantra.svg']
  },
  bhoomi_kurma_yantra: {
    id: 'bhoomi_kurma_yantra',
    svgPath: '/yantras/09_Vastu/bhoomi_kurma_yantra.svg',
    category: 'vastu',
    aliases: ['kurma_yantra', 'bhoomi_yantra', 'shilanyas_yantra'],
    fallbackPaths: ['/yantras/bhoomi_kurma_yantra.svg']
  },
  matsya_yantra: {
    id: 'matsya_yantra',
    svgPath: '/yantras/09_Vastu/matsya_yantra.svg',
    category: 'vastu',
    aliases: ['matsyavatar_yantra', 'matsya_purusha_yantra'],
    fallbackPaths: ['/yantras/matsya_yantra.svg']
  },

  // 12. Vidya & Saraswati
  saraswati_yantra: {
    id: 'saraswati_yantra',
    svgPath: '/yantras/12_Vidya/saraswati_yantra.svg',
    category: 'saraswati_vidya',
    aliases: ['vidya_saraswati_yantra', 'sarasvati_yantra'],
    fallbackPaths: ['/yantras/saraswati_yantra.svg']
  },
  gayatri_yantra: {
    id: 'gayatri_yantra',
    svgPath: '/yantras/12_Vidya/gayatri_yantra.svg',
    category: 'saraswati_vidya',
    aliases: ['vedamata_gayatri_yantra', 'gayatri'],
    fallbackPaths: ['/yantras/gayatri_yantra.svg']
  },
  medha_dakshinamurti_yantra: {
    id: 'medha_dakshinamurti_yantra',
    svgPath: '/yantras/12_Vidya/medha_dakshinamurti_yantra.svg',
    category: 'saraswati_vidya',
    aliases: ['dakshinamurti_yantra', 'medha_dakshinamurthy'],
    fallbackPaths: ['/yantras/medha_dakshinamurti_yantra.svg']
  },
  hayagriva_yantra: {
    id: 'hayagriva_yantra',
    svgPath: '/yantras/12_Vidya/hayagriva_yantra.svg',
    category: 'saraswati_vidya',
    aliases: ['hayagreeva_yantra', 'lord_hayagriva'],
    fallbackPaths: ['/yantras/hayagriva_yantra.svg']
  }
};

// Aliases lookup map for O(1) canonical resolution
const ALIAS_LOOKUP: Record<string, string> = {};
Object.entries(YANTRA_ASSET_REGISTRY).forEach(([canonicalId, asset]) => {
  ALIAS_LOOKUP[canonicalId.toLowerCase()] = canonicalId;
  asset.aliases?.forEach(alias => {
    ALIAS_LOOKUP[alias.toLowerCase()] = canonicalId;
  });
});

/**
 * Normalizes an arbitrary Yantra ID or alias to its registered canonical ID.
 */
export function normalizeYantraId(rawId: string): string {
  if (!rawId) return 'sri_yantra';
  const clean = rawId.trim().toLowerCase();
  return ALIAS_LOOKUP[clean] || rawId.trim();
}

/**
 * Retrieves the canonical YantraAsset record by ID or alias.
 */
export function getYantraAsset(id: string): YantraAsset | null {
  const canonicalId = normalizeYantraId(id);
  return YANTRA_ASSET_REGISTRY[canonicalId] || null;
}

/**
 * Computes an ordered list of candidate SVG file paths for a given Yantra ID.
 * Follows strict priority:
 * 1. Canonical subfolder path (e.g. /yantras/02_Dashamahavidya/kali_yantra.svg)
 * 2. Explicit registered fallbacks
 * 3. Root fallback (/yantras/${id}.svg)
 */
export function getYantraCandidatePaths(id: string): string[] {
  const asset = getYantraAsset(id);
  const cleanId = id.trim();
  const candidates: string[] = [];

  if (asset) {
    if (asset.svgPath) candidates.push(asset.svgPath);
    if (asset.fallbackPaths) {
      asset.fallbackPaths.forEach(p => {
        if (!candidates.includes(p)) candidates.push(p);
      });
    }
  }

  // General safety fallbacks
  const rootDirect = `/yantras/${cleanId}.svg`;
  if (!candidates.includes(rootDirect)) {
    candidates.push(rootDirect);
  }

  return candidates;
}

/**
 * Checks whether an asset is explicitly registered in the registry.
 */
export function isAssetRegistered(id: string): boolean {
  const canonicalId = normalizeYantraId(id);
  return Boolean(YANTRA_ASSET_REGISTRY[canonicalId]);
}

/**
 * Returns all registered YantraAsset entries as an array.
 */
export function getAllRegisteredAssets(): YantraAsset[] {
  return Object.values(YANTRA_ASSET_REGISTRY);
}
