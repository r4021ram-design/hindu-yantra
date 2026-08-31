import {
    Flame, Droplet, Flower2, Wind, Music, Heart,
    Sparkles, Armchair, GlassWater, Shirt, Link as LinkIcon,
    UtensilsCrossed, Leaf, Sun, Crown, Umbrella, Castle, Bell
} from 'lucide-react';

export interface Offering {
    id: string;
    name: string;
    nameHi: string;
    sanskrit: string;
    mantra: string;
    meaning: string;
    icon: React.ComponentType<{ className?: string }>;
    type: 'persistent' | 'transient';
    layer?: 'base' | 'vastra' | 'alankara' | 'pushpa' | 'kumkum';
    animation: string;
    alignment?: { x: number, y: number };
}

export const PUJA_OFFERINGS: Offering[] = [
    // --- Level 1: Panchopachara (5 Essentials) ---
    // (These are core, also included in higher levels)
    {
        id: 'gandha',
        name: 'Sandal',
        nameHi: 'गंध',
        sanskrit: 'Gandham',
        mantra: 'Om Gandham Samarpayami',
        meaning: 'I offer sandalwood paste and scents.',
        icon: Droplet,
        type: 'persistent',
        layer: 'kumkum',
        animation: 'dot',
        alignment: { x: 0, y: -50 } // Forehead
    },
    {
        id: 'pushpa',
        name: 'Flowers',
        nameHi: 'पुष्प',
        sanskrit: 'Pushpam',
        mantra: 'Om Pushpam Samarpayami',
        meaning: 'I offer fresh blossoms at your feet.',
        icon: Flower2,
        type: 'persistent',
        layer: 'pushpa',
        animation: 'petals',
        alignment: { x: 0, y: 120 } // Feet
    },
    {
        id: 'dhoop',
        name: 'Incense',
        nameHi: 'धूप',
        sanskrit: 'Dhoopam',
        mantra: 'Om Dhoopam Aghrapayami',
        meaning: 'I offer fragrant incense smoke.',
        icon: Wind,
        type: 'transient',
        animation: 'smoke',
        alignment: { x: -60, y: 80 } // Left side holder
    },
    {
        id: 'deep',
        name: 'Lamp',
        nameHi: 'दीप',
        sanskrit: 'Deepam',
        mantra: 'Om Deepam Darshayami',
        meaning: 'I show the divine light.',
        icon: Flame,
        type: 'transient',
        animation: 'flame',
        alignment: { x: 60, y: 80 } // Right side holder
    },
    {
        id: 'naivedya',
        name: 'Food',
        nameHi: 'नैवेद्य',
        sanskrit: 'Naivedyam',
        mantra: 'Om Naivedyam Nivedayami',
        meaning: 'I offer sacred food offerings.',
        icon: UtensilsCrossed,
        type: 'transient',
        animation: 'fade-in-out',
        alignment: { x: 0, y: 150 } // On the pedestal
    },

    // --- Level 2: Shodashopachara (16 Steps) ---
    // (Includes the above 5 plus these)
    {
        id: 'avahan',
        name: 'Invoke',
        nameHi: 'आवाहन',
        sanskrit: 'Avahanam',
        mantra: 'Om Avahayami Sthapayami',
        meaning: 'I invoke the divine presence into the idol.',
        icon: Sparkles,
        type: 'transient',
        animation: 'sparkle',
        alignment: { x: 0, y: 0 }
    },
    {
        id: 'asana',
        name: 'Seat',
        nameHi: 'आसन',
        sanskrit: 'Asanam',
        mantra: 'Om Asanam Samarpayami',
        meaning: 'I offer a comfortable seat to the deity.',
        icon: Armchair,
        type: 'transient',
        animation: 'glow',
        alignment: { x: 0, y: 80 }
    },
    {
        id: 'padya',
        name: 'Feet Wash',
        nameHi: 'पाद्य',
        sanskrit: 'Padyam',
        mantra: 'Om Padyam Samarpayami',
        meaning: 'I wash the lotus feet of the Lord.',
        icon: Droplet,
        type: 'transient',
        animation: 'water-pour',
        alignment: { x: 0, y: 140 } // Focus on feet
    },
    {
        id: 'arghya',
        name: 'Water',
        nameHi: 'अर्घ्य',
        sanskrit: 'Arghyam',
        mantra: 'Om Arghyam Samarpayami',
        meaning: 'I offer water for hand cleansing.',
        icon: GlassWater,
        type: 'transient',
        animation: 'water-hand',
        alignment: { x: 0, y: 40 } // Focus on hands/middle
    },
    {
        id: 'achamana',
        name: 'Sip',
        nameHi: 'आचमन',
        sanskrit: 'Achamaniyam',
        mantra: 'Om Achamaniyam Samarpayami',
        meaning: 'I offer water for sipping.',
        icon: Droplet,
        type: 'transient',
        animation: 'water-mouth',
        alignment: { x: 0, y: -20 } // Focus on face
    },
    {
        id: 'snana',
        name: 'Bath',
        nameHi: 'स्नान',
        sanskrit: 'Snanam',
        mantra: 'Om Snanam Samarpayami',
        meaning: 'I perform a ceremonial holy bath.',
        icon: Droplet,
        type: 'transient',
        animation: 'water-shower',
        alignment: { x: 0, y: -80 } // From above
    },
    {
        id: 'vastra',
        name: 'Clothes',
        nameHi: 'वस्त्र',
        sanskrit: 'Vastram',
        mantra: 'Om Vastram Samarpayami',
        meaning: 'I offer divine garments.',
        icon: Shirt,
        type: 'persistent',
        layer: 'vastra',
        animation: 'fade-in',
        alignment: { x: 0, y: 50 }
    },
    {
        id: 'yajnopavita',
        name: 'Thread',
        nameHi: 'यज्ञोपवीत',
        sanskrit: 'Yajnopavitam',
        mantra: 'Om Yajnopavitam Samarpayami',
        meaning: 'I offer the sacred thread.',
        icon: LinkIcon,
        type: 'persistent',
        layer: 'vastra',
        animation: 'fade-in',
        alignment: { x: 0, y: 50 }
    },
    {
        id: 'tambula',
        name: 'Betel',
        nameHi: 'ताम्बूल',
        sanskrit: 'Tambulam',
        mantra: 'Om Tambulam Samarpayami',
        meaning: 'I offer traditional betel leaves.',
        icon: Leaf,
        type: 'transient',
        animation: 'fade-in-out',
        alignment: { x: 20, y: 150 }
    },
    {
        id: 'karpura',
        name: 'Aarti',
        nameHi: 'आरती',
        sanskrit: 'Aarati',
        mantra: 'Om Karpura Gauram Karunavataram...',
        meaning: 'I perform the Grand Aarti with light.',
        icon: Sun,
        type: 'transient',
        animation: 'aarti',
        alignment: { x: 0, y: 100 }
    },
    {
        id: 'namaskara',
        name: 'Bow',
        nameHi: 'नमस्कार',
        sanskrit: 'Pradakshina Namaskaram',
        mantra: 'Yani Kani Cha Papani Janmantara...',
        meaning: 'I circumambulate and bow in surrender.',
        icon: Heart,
        type: 'transient',
        animation: 'glow',
        alignment: { x: 0, y: 0 }
    },

    // --- Level 3: Rajopachara (Royal Honors) ---
    // (Additional steps for Grand Ceremonial)
    {
        id: 'abhishek',
        name: 'Abhishek',
        nameHi: 'अभिषेक',
        sanskrit: 'Abhishekam',
        mantra: 'Panchamrita Snanam Samarpayami',
        meaning: 'Grand bathing with Panchamrita.',
        icon: Droplet,
        type: 'transient',
        animation: 'water-shower-grand',
        alignment: { x: 0, y: -100 }
    },
    {
        id: 'alankara',
        name: 'Jewelry',
        nameHi: 'आभूषण',
        sanskrit: 'Alankaram',
        mantra: 'Nana Vidha Alankaran Samarpayami',
        meaning: 'Adorning with royal jewelry and perfumes.',
        icon: Crown,
        type: 'persistent',
        layer: 'alankara',
        animation: 'shine',
        alignment: { x: 0, y: 0 }
    },
    {
        id: 'chhatra',
        name: 'Umbrella',
        nameHi: 'छत्र',
        sanskrit: 'Chhatram',
        mantra: 'Om Chhatram Dharayami',
        meaning: 'I hold the Royal Umbrella over the Deity.',
        icon: Umbrella,
        type: 'persistent',
        layer: 'base', // Or custom royal layer
        animation: 'umbrella',
        alignment: { x: 0, y: -180 }
    },
    {
        id: 'chamar',
        name: 'Whisk',
        nameHi: 'चामर',
        sanskrit: 'Chamaram',
        mantra: 'Om Chamaram Vijayami',
        meaning: 'I wave the Royal Whisk.',
        icon: Wind,
        type: 'transient',
        animation: 'chamar',
        alignment: { x: 140, y: 0 }
    },
    {
        id: 'sangeet',
        name: 'Music',
        nameHi: 'भक्ति संगीत',
        sanskrit: 'Bhakti Sangeetam',
        mantra: 'Geetam Vadyam Cha Nrityam...',
        meaning: 'I offer divine singing and music.',
        icon: Music,
        type: 'transient',
        animation: 'notes',
        alignment: { x: -140, y: 150 }
    },
    {
        id: 'bhog',
        name: 'Special Food',
        nameHi: 'विशेष भोग',
        sanskrit: 'Vishesh Naivedyam',
        mantra: 'Nana Parimal Dravya Yukta Bhogama...',
        meaning: 'I offer a royal feast.',
        icon: UtensilsCrossed,
        type: 'transient',
        animation: 'fade-in-out',
        alignment: { x: 0, y: 150 }
    },
    {
        id: 'shayana',
        name: 'Sleep',
        nameHi: 'शयन व्यवस्था',
        sanskrit: 'Shayanam',
        mantra: 'Sukha Shayanam Kalpayami',
        meaning: 'I prepare the royal bed for rest.',
        icon: Castle, // Or custom icon
        type: 'transient',
        animation: 'fade-in-out',
        alignment: { x: 0, y: 100 }
    },
];

export const getOfferingsByMode = (mode: string) => {
    switch (mode) {
        case 'panchopachar':
            return PUJA_OFFERINGS.filter(o => ['gandha', 'pushpa', 'dhoop', 'deep', 'naivedya'].includes(o.id));
        case 'shodashopachar':
            // 16 Standard Steps
            const shodasIds = [
                'avahan', 'asana', 'padya', 'arghya', 'achamana',
                'snana', 'vastra', 'yajnopavita', 'gandha', 'pushpa',
                'dhoop', 'deep', 'naivedya', 'tambula', 'karpura', 'namaskara'
            ];
            return PUJA_OFFERINGS.filter(o => shodasIds.includes(o.id));
        case 'rajopachar':
            // Everything!
            return PUJA_OFFERINGS;
        default:
            return PUJA_OFFERINGS;
    }
};
