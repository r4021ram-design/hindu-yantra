// Canonical, authentic vector geometric dissection models for Sri Yantra
// Fully aligned with the master 9-interlocking primary triangles (Soundarya Lahari 11)
// Scale: 1000x1000 viewBox, center (500, 500)

export interface AvaranaDissectionData {
  index: number;
  nameSanskrit: string;
  nameEnglish: string;
  chakraTitle: string;
  geometryType: string;
  count: number;
  svgElement: string;
}

const BHUPURA_PATH_D =
  'M 60 60 L 420.8 60 L 420.8 24.8 L 579.2 24.8 L 579.2 60 L 940 60 L 940 420.8 L 975.2 420.8 L 975.2 579.2 L 940 579.2 L 940 940 L 579.2 940 L 579.2 975.2 L 420.8 975.2 L 420.8 940 L 60 940 L 60 579.2 L 24.8 579.2 L 24.8 420.8 L 60 420.8 Z M 79.8 79.8 L 440.6 79.8 L 440.6 44.6 L 559.4 44.6 L 559.4 79.8 L 920.2 79.8 L 920.2 440.6 L 955.4 440.6 L 955.4 559.4 L 920.2 559.4 L 920.2 920.2 L 559.4 920.2 L 559.4 955.4 L 440.6 955.4 L 440.6 920.2 L 79.8 920.2 L 79.8 559.4 L 44.6 559.4 L 44.6 440.6 L 79.8 440.6 Z M 99.6 99.6 L 460.4 99.6 L 460.4 64.4 L 539.6 64.4 L 539.6 99.6 L 900.4 99.6 L 900.4 460.4 L 935.6 460.4 L 935.6 539.6 L 900.4 539.6 L 900.4 900.4 L 539.6 900.4 L 539.6 935.6 L 460.4 935.6 L 460.4 900.4 L 99.6 900.4 L 99.6 539.6 L 64.4 539.6 L 64.4 460.4 L 99.6 460.4 Z';

const SHODASHA_LOTUS_D =
  'M 436.4 180.26 Q 459.01 128.74, 500 108 Q 540.99 128.74, 563.6 180.26 M 563.6 180.26 Q 604.21 141.31, 650.01 137.84 Q 679.94 172.68, 681.12 228.94 M 681.12 228.94 Q 733.54 208.49, 777.19 222.81 Q 791.51 266.46, 771.06 318.88 M 771.06 318.88 Q 827.32 320.06, 862.16 349.99 Q 858.69 395.79, 819.74 436.4 M 819.74 436.4 Q 871.26 459.01, 892 500 Q 871.26 540.99, 819.74 563.6 M 819.74 563.6 Q 858.69 604.21, 862.16 650.01 Q 827.32 679.94, 771.06 681.12 M 771.06 681.12 Q 791.51 733.54, 777.19 777.19 Q 733.54 791.51, 681.12 771.06 M 681.12 771.06 Q 679.94 827.32, 650.01 862.16 Q 604.21 858.69, 563.6 819.74 M 563.6 819.74 Q 540.99 871.26, 500 892 Q 459.01 871.26, 436.4 819.74 M 436.4 819.74 Q 395.79 858.69, 349.99 862.16 Q 320.06 827.32, 318.88 771.06 M 318.88 771.06 Q 266.46 791.51, 222.81 777.19 Q 208.49 733.54, 228.94 681.12 M 228.94 681.12 Q 172.68 679.94, 137.84 650.01 Q 141.31 604.21, 180.26 563.6 M 180.26 563.6 Q 128.74 540.99, 108 500 Q 128.74 459.01, 180.26 436.4 M 180.26 436.4 Q 141.31 395.79, 137.84 349.99 Q 172.68 320.06, 228.94 318.88 M 228.94 318.88 Q 208.49 266.46, 222.81 222.81 Q 266.46 208.49, 318.88 228.94 M 318.88 228.94 Q 320.06 172.68, 349.99 137.84 Q 395.79 141.31, 436.4 180.26 ';

const ASHTADALA_LOTUS_D =
  'M 402.03 263.49 Q 434.1 205.2, 500 180 Q 565.9 205.2, 597.97 263.49 M 597.97 263.49 Q 661.86 244.95, 726.27 273.73 Q 755.05 338.14, 736.51 402.03 M 736.51 402.03 Q 794.8 434.1, 820 500 Q 794.8 565.9, 736.51 597.97 M 736.51 597.97 Q 755.05 661.86, 726.27 726.27 Q 661.86 755.05, 597.97 736.51 M 597.97 736.51 Q 565.9 794.8, 500 820 Q 434.1 794.8, 402.03 736.51 M 402.03 736.51 Q 338.14 755.05, 273.73 726.27 Q 244.95 661.86, 263.49 597.97 M 263.49 597.97 Q 205.2 565.9, 180 500 Q 205.2 434.1, 263.49 402.03 M 263.49 402.03 Q 244.95 338.14, 273.73 273.73 Q 338.14 244.95, 402.03 263.49 ';

export const SRI_YANTRA_VECTOR_DISSECTIONS: Record<number, AvaranaDissectionData> = {
  1: {
    index: 1,
    nameSanskrit: "त्रैलोक्यमोहन चक्र (भूपुर प्राकार / 3 रेखाएं व 4 द्वार)",
    nameEnglish: "Trailokyamohana Chakra (Bhupura Earth Rampart & 4 Gates)",
    chakraTitle: "भूपुर प्राकार (चतुरस्र)",
    geometryType: "3 Stepped Concentric Squares with 4 Cardinal Portals",
    count: 4,
    svgElement: `<g id="dissection_bhupura">
  <path d="${BHUPURA_PATH_D}" fill="none" stroke="#2A1405" stroke-width="2.8" stroke-linejoin="round" />
</g>`
  },
  2: {
    index: 2,
    nameSanskrit: "सर्वाशापरिपूरक चक्र (षोडशदल पद्म / 16 कमल पंखुड़ियाँ)",
    nameEnglish: "Sarvashaparipuraka Chakra (16-Petal Lotus)",
    chakraTitle: "षोडशदल पद्म चक्र",
    geometryType: "16 Sacred Lotus Petals with Outer Ring",
    count: 16,
    svgElement: `<g id="dissection_shodashadala">
  <circle cx="500" cy="500" r="392" fill="none" stroke="#2A1405" stroke-width="2" stroke-dasharray="4 3" opacity="0.75" />
  <path d="${SHODASHA_LOTUS_D}" fill="rgba(180,83,9,0.12)" stroke="#2A1405" stroke-width="2.6" stroke-linejoin="round" />
  <circle cx="500" cy="500" r="400" fill="none" stroke="#2A1405" stroke-width="2.2" />
</g>`
  },
  3: {
    index: 3,
    nameSanskrit: "सर्वसंक्षोभण चक्र (अष्टदल पद्म / 8 कमल पंखुड़ियाँ)",
    nameEnglish: "Sarvasankshobhana Chakra (8-Petal Lotus)",
    chakraTitle: "अष्टदल पद्म चक्र",
    geometryType: "8 Sacred Lotus Petals with Concentric Boundaries",
    count: 8,
    svgElement: `<g id="dissection_ashtadala">
  <circle cx="500" cy="500" r="320" fill="none" stroke="#2A1405" stroke-width="2" stroke-dasharray="4 3" opacity="0.75" />
  <path d="${ASHTADALA_LOTUS_D}" fill="rgba(217,119,6,0.14)" stroke="#2A1405" stroke-width="2.6" stroke-linejoin="round" />
  <circle cx="500" cy="500" r="326" fill="none" stroke="#2A1405" stroke-width="2.2" />
</g>`
  },
  4: {
    index: 4,
    nameSanskrit: "सर्वसौभाग्यदायक चक्र (चतुर्दशार / 14 त्रिकोण)",
    nameEnglish: "Sarvasaubhagyadayaka Chakra (14 Outer Triangles)",
    chakraTitle: "चतुर्दशार चक्र",
    geometryType: "14 Outer Perimeter Triangles with Enclosing Circle",
    count: 14,
    svgElement: `<g id="dissection_chaturdasharam" stroke="#2A1405" stroke-width="2.8" stroke-linejoin="miter">
  <circle cx="500" cy="500" r="256" fill="none" stroke="#2A1405" stroke-width="2.2" opacity="0.8" />
  <circle cx="500" cy="500" r="250" fill="none" stroke="#2A1405" stroke-width="2.6" />
  <path id="tri_U1" d="M 257.46 560.62 L 742.54 560.62 L 500 250 Z" fill="rgba(180,83,9,0.12)" />
  <path id="tri_D1" d="M 259.14 433.02 L 740.86 433.02 L 500 750 Z" fill="rgba(217,119,6,0.12)" />
</g>`
  },
  5: {
    index: 5,
    nameSanskrit: "सर्वार्थसाधक चक्र (बहिर्दशार / 10 बाहरी त्रिकोण)",
    nameEnglish: "Sarvarthasadhaka Chakra (10 Outer Triangles)",
    chakraTitle: "बहिर्दशार चक्र",
    geometryType: "10 Outer Circuit Interlocking Triangles",
    count: 10,
    svgElement: `<g id="dissection_bahir_dasharam" stroke="#2A1405" stroke-width="2.8" stroke-linejoin="miter">
  <path id="tri_U2" d="M 320.66 619.81 L 679.34 619.81 L 500 320.27 Z" fill="rgba(180,83,9,0.14)" />
  <path id="tri_D2" d="M 327.46 382.81 L 672.54 382.81 L 500 675.09 Z" fill="rgba(217,119,6,0.14)" />
</g>`
  },
  6: {
    index: 6,
    nameSanskrit: "सर्वरक्षाकर चक्र (अन्तर्दशार / 10 भीतरी त्रिकोण)",
    nameEnglish: "Sarvarakshakara Chakra (10 Inner Triangles)",
    chakraTitle: "अन्तर्दशार चक्र",
    geometryType: "10 Inner Circuit Interlocking Triangles",
    count: 10,
    svgElement: `<g id="dissection_antar_dasharam" stroke="#2A1405" stroke-width="2.8" stroke-linejoin="miter">
  <path id="tri_U3" d="M 371.79 675.09 L 628.21 675.09 L 500 433.02 Z" fill="rgba(180,83,9,0.14)" />
  <path id="tri_D3" d="M 351.22 320.27 L 648.78 320.27 L 500 526.65 Z" fill="rgba(217,119,6,0.14)" />
</g>`
  },
  7: {
    index: 7,
    nameSanskrit: "सर्वरोगहर चक्र (अष्टार / 8 त्रिकोण)",
    nameEnglish: "Sarvarogahara Chakra (8 Inner Triangles)",
    chakraTitle: "अष्टकोण चक्र",
    geometryType: "8 Interlocking Circuit Triangles",
    count: 8,
    svgElement: `<g id="dissection_ashtaragon" stroke="#2A1405" stroke-width="2.8" stroke-linejoin="miter">
  <path id="tri_U4" d="M 412.38 526.65 L 587.63 526.65 L 500 382.81 Z" fill="rgba(180,83,9,0.15)" />
  <path id="tri_D4" d="M 415.88 460.77 L 584.13 460.77 L 500 619.81 Z" fill="rgba(217,119,6,0.15)" />
</g>`
  },
  8: {
    index: 8,
    nameSanskrit: "सर्वसिद्धिप्रद चक्र (मूल त्रिकोण / काम-कला)",
    nameEnglish: "Sarvasiddhiprada Chakra (Central Inverted Triangle)",
    chakraTitle: "काम-कला अधोमुख त्रिकोण",
    geometryType: "Downward-Pointing Primordial Triangle",
    count: 1,
    svgElement: `<g id="dissection_trikona" stroke="#2A1405" stroke-width="2.8" stroke-linejoin="miter">
  <path id="tri_D5" d="M 436.53 486.99 L 563.47 486.99 L 500 560.62 Z" fill="rgba(217,119,6,0.18)" />
</g>`
  },
  9: {
    index: 9,
    nameSanskrit: "सर्वानन्दमय चक्र (बिन्दु)",
    nameEnglish: "Sarvanandamaya Chakra (Bindu Point)",
    chakraTitle: "परब्रह्म महाबिन्दु",
    geometryType: "Singularity / Central Radiant Point",
    count: 1,
    svgElement: `<g id="dissection_bindu">
  <circle cx="500" cy="500" r="12" fill="none" stroke="#2A1405" stroke-width="2" opacity="0.8" />
  <circle cx="500" cy="500" r="6.5" fill="url(#binduRadiance)" stroke="#FFFFFF" stroke-width="1.4" />
</g>`
  }
};
