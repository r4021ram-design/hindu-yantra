export type Language = 'en' | 'hi' | 'gu' | 'sa';

const ENGINE_TITHI_NAMES = {
    en: [
        "Pratipada", "Dwitiya", "Tritiya", "Chaturthi", "Panchami", "Shashthi",
        "Saptami", "Ashtami", "Navami", "Dashami", "Ekadashi", "Dwadashi",
        "Trayodashi", "Chaturdashi", "Purnima",
        "Pratipada", "Dwitiya", "Tritiya", "Chaturthi", "Panchami", "Shashthi",
        "Saptami", "Ashtami", "Navami", "Dashami", "Ekadashi", "Dwadashi",
        "Trayodashi", "Chaturdashi", "Amavasya"
    ],
    hi: [
        "प्रतिपदा", "द्वितीया", "तृतीया", "चतुर्थी", "पंचमी", "षष्ठी",
        "सप्तमी", "अष्टमी", "नवमी", "दशमी", "एकादशी", "द्वादशी",
        "त्रयोदशी", "चतुर्दशी", "पूर्णिमा",
        "प्रतिपदा", "द्वितीया", "तृतीया", "चतुर्थी", "पंचमी", "षष्ठी",
        "सप्तमी", "अष्टमी", "नवमी", "दशमी", "एकादशी", "द्वादशी",
        "त्रयोदशी", "चतुर्दशी", "अमावस्या"
    ],
    gu: [
        "એકમ", "બીજ", "ત્રીજ", "ચોથ", "પાંચમ", "છઠ",
        "સાતમ", "આઠમ", "નોમ", "દશમ", "અગિયારસ", "બારસ",
        "તેરસ", "ચૌદશ", "પૂનમ",
        "એકમ", "બીજ", "ત્રીજ", "ચોથ", "પાંચમ", "છઠ",
        "સાતમ", "આઠમ", "નોમ", "દશમ", "અગિયારસ", "બારસ",
        "તેરસ", "ચૌદશ", "અમાસ"
    ]
};

const ENGINE_NAKSHATRA_NAMES = {
    en: [
        "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra",
        "Punarvasu", "Pushya", "Ashlesha", "Magha", "Purva Phalguni", "Uttara Phalguni",
        "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha", "Jyeshtha", "Mula",
        "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishtha", "Shatabhisha",
        "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"
    ],
    hi: [
        "अश्विनी", "भरणी", "कृत्तिका", "रोहिणी", "मृगशीर्ष", "आर्द्रा",
        "पुनर्वसु", "पुष्य", "अश्लेषा", "मघा", "पूर्वा फाल्गुनी", "उत्तरा फाल्गुनी",
        "हस्त", "चित्रा", "स्वाती", "विशाखा", "अनुराधा", "ज्येष्ठा", "मूल",
        "पूर्वाषाढ़ा", "उत्तराषाढ़ा", "श्रवण", "धनिष्ठा", "शतभिषा",
        "पूर्वा भाद्रपद", "उत्तरा भाद्रपद", "रेवती"
    ],
    gu: [
        "અશ્વિની", "ભરણી", "કૃત્તિકા", "રોહિણી", "મૃગશીર્ષ", "આદ્રા",
        "પુનર્વસુ", "પુષ્ય", "આશ્લેષા", "મઘા", "પૂર્વા ફાલ્ગુની", "ઉત્તરા ફાલ્ગુની",
        "हस्त", "ચિત્રા", "સ્વાતિ", "વિશાખા", "અનુરાધા", "જ્યેષ્ઠા", "મૂળ",
        "પૂર્વાષાઢા", "ઉત્તરાષાઢા", "શ્રવણ", "ધનિષ્ઠા", "શતભિષા",
        "પૂર્વા ભાદ્રપદ", "ઉત્તરા ભાદ્રપદ", "રેવતી"
    ]
};

const ENGINE_YOGA_NAMES = {
    en: [
        "Vishkambha", "Priti", "Ayushmana", "Saubhagya", "Shobhana", "Atiganda",
        "Sukarma", "Dhriti", "Shula", "Ganda", "Vriddhi", "Dhruva", "Vyaghata",
        "Harshana", "Vajra", "Siddhi", "Vyatipata", "Variyana", "Parigha", "Shiva",
        "Siddha", "Sadhya", "Shubha", "Shukla", "Brahma", "Indra", "Vaidhriti"
    ],
    hi: [
        "विष्कम्भ", "प्रीति", "आयुष्मान", "सौभाग्य", "शोभन", "अतिगण्ड",
        "सुकर्मा", "धृति", "शूल", "गण्ड", "वृद्धि", "ध्रुव", "व्याघात",
        "हर्षण", "वज्र", "सिद्धि", "व्यतीपात", "वरीयान", "परिघ", "शिव",
        "सिद्ध", "साध्य", "शुभ", "शुक्ल", "ब्रह्म", "इन्द्र", "वैधृति"
    ],
    gu: [
        "વિષ્કંભ", "પ્રીતિ", "આયુષ્માન", "સૌભાગ્ય", "શોભન", "અતિગંડ",
        "સુકર્મા", "ધૃતિ", "શૂલ", "ગંડ", "વૃદ્ધિ", "ધ્રુવ", "વ્યાઘાત",
        "હર્ષણ", "વજ્ર", "સિદ્ધિ", "વ્યતીપાત", "વરીયાન", "પરિઘ", "શિવ",
        "સિદ્ધ", "સાધ્ય", "શુભ", "શુક્લ", "બ્રહ્મ", "ઇન્દ્ર", "વૈધૃતિ"
    ]
};

const ENGINE_RASHI_NAMES = {
    en: [
        "Mesha", "Vrishabha", "Mithuna", "Karka",
        "Simha", "Kanya", "Tula", "Vrishchika",
        "Dhanu", "Makara", "Kumbha", "Meena"
    ],
    hi: [
        "मेष", "वृषभ", "मिथुन", "कर्क",
        "सिंह", "कन्या", "तुला", "वृश्चिक",
        "धनु", "मकर", "कुंभ", "मीन"
    ],
    gu: [
        "મેષ", "વૃષભ", "મિથુન", "કર્ક",
        "સિંહ", "કન્યા", "તુલા", "વૃશ્ચિક",
        "ધન", "મકર", "કુંભ", "મીન"
    ]
};

const ENGINE_MASA_NAMES = {
    en: [
        "Chaitra", "Vaishakha", "Jyeshtha", "Ashadha", "Shravana", "Bhadrapada",
        "Ashwina", "Kartika", "Margashirsha", "Pausha", "Magha", "Phalguna"
    ],
    hi: [
        "चैत्र", "वैशाख", "ज्येष्ठ", "आषाढ़", "श्रावण", "भाद्रपद",
        "आश्विन", "कार्तिक", "मार्गशीर्ष", "पौष", "माघ", "फाल्गुन"
    ],
    gu: [
        "ચૌત્ર", "વૈશાખ", "જ્યેષ્ઠ", "અષાઢ", "શ્રાવણ", "ભાદરવો",
        "આસો", "કારતક", "માગશર", "પોષ", "મહા", "ફાગણ"
    ]
};

const ENGINE_WEEKDAYS = {
    en: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    hi: ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"],
    gu: ["રવિવાર", "સોમવાર", "મંગળવાર", "બુધવાર", "ગુરુવાર", "શુક્રવાર", "શનિવાર"]
};

const ENGINE_KARANA_NAMES = {
    en: [
        "Bava", "Balava", "Kaulava", "Taitila", "Garaja", "Vanija", "Vishti",
        "Shakuni", "Chatushpada", "Nagava", "Kinstughna"
    ],
    hi: [
        "बव", "बालव", "कौलव", "तैतिल", "गरज", "वणिज", "विष्टि",
        "शकुनि", "चतुष्पद", "नाग", "किंस्तुघ्न"
    ],
    gu: [
        "બવ", "બાલવ", "કૌલવ", "તૈતિલ", "ગરજ", "વણિજ", "વિષ્ટિ",
        "શકુની", "ચતુષ્પદ", "નાગ", "કિંસ્તુઘ્ન"
    ]
};


export interface TranslationSchema {
    appTitle: string;
    subtitle: string;
    listView: string;
    gridView: string;
    time: string;
    quality: string;
    location: string;
    aajKaPanchang: string;
    tithi: string;
    nakshatra: string;
    yoga: string;
    karana: string;
    paksha: string;
    endsAt: string;
    celestialTimings: string;
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
    shubhMuhurat: string;
    inauspicious: string;
    rahuKalam: string;
    yamaganda: string;
    gulikai: string;
    abhijit: string;
    unknown: string;
    upcomingFestivals: string;
    viewCalendar: string;
    backToToday: string;
    monthlyPanchang: string;
    sunSign: string;
    moonSign: string;
    planetarySigns: string;
    festivals: {
        vrat: string;
        festival: string;
    };
    samvat: {
        vikram: string;
        shaka: string;
        samvatsara: string;
    };
    astronomy: string;
    days: string[];
    panchang: {
        advancedPanchang: string;
        detailedTimings: string;
        fiveLimbs: string;
        sunRashi: string;
        moonRashi: string;
        importantTimings: string;
        yogasAndDoshas: string;
        noAuspiciousYogas: string;
        panchak: string;
        bhadra: string;
        endsAt: string;
        fullDay: string;
    };
    home: {
        panchangAdhyaya: string;
        acharyasNote: string;
        upasanaFestivals: string;
        viewMuhurat: string;
        regularObservation: string;
        noMajorFestivals: string;
        performDailyPuja: string;
        digitallyWorship: string;
        festivalToday: string;
        endsAt: string;
        choghadiyaTitle: string;
        purpose: string;
        logic: string;
        benefit: string;
        acharyaNoteTemplate: string;
    };
    month: string;
    ruling: string;
    var: string;
    suryoday: string;
    suryast: string;
    chandroday: string;
    chandrast: string;
    dailyRituals: string;
    morningPuja: string;
    morningPujaDesc: string;
    viewVidhi: string;
    choghadiya: string;
    choghadiyaDesc: string;
    checkTimings: string;
    todaysFestivals: string;
    celebration: string;
    noFestivalsToday: string;
    viewAll: string;
    auspiciousYogas: string;
    warnings: string;
    dailyInsight: string;
    poweredByGemini: string;
    loading: string;
    dashboard: {
        divineTimings: string;
        subtitle: string;
        specialYogas: string;
        lagnaShuddhi: string;
        majorDoshas: string;
        choghadiyaNames: Record<string, string>;
        personalFocus: string;
        taraBalaCalculator: string;
        selectBirthStar: string;
        chooseNakshatra: string;
        dayChoghadiya: string;
        nightChoghadiya: string;
        dayHora: string;
        nightHora: string;
        hora: string;
        activities: string;
        lord: string;
        auspicious: string;
        inauspicious: string;
        horaActivities: Record<string, string>;
        noPanchak: string;
        noBhadra: string;
        planetsVisible: string;
        tara: Record<string, { name: string; desc: string }>;
    };
    remedies: any; // Simplified for now as it's large
    kundli: {
        vargaNames: Record<string, string>;
        [key: string]: any;
    };
    identify: any;
    askPandit: any;
    yearly: any;
    nav: any;
    samaychakra: any;
    puja: any;
    muhurta: any;
    matching: any;
    prashna: any;
    rashiNames: string[];
    shadbala: {
        title: string;
        sthana: string;
        dig: string;
        kala: string;
        chesta: string;
        naisargika: string;
        drik: string;
        required: string;
        total: string;
        status: string;
        percentage: string;
        virupa: string;
        rupas: string;
        description: string;
        analysisDetails: string;
        strong: string;
        moderate: string;
        weak: string;
    };
    swar: {
        title: string;
        breathScience: string;
        nameScience: string;
        activeNostril: string;
        leftNostril: string;
        rightNostril: string;
        bothNostrils: string;
        tattva: string;
        quality: string;
        guidance: string;
        favorable: string;
        unfavorable: string;
        searchName: string;
        enterNamePlaceholder: string;
        findSound: string;
        soundResults: string;
        syllable: string;
        rulingPlanet: string;
        aligned: string;
        reversed: string;
        excellent: string;
        good: string;
        average: string;
        cautious: string;
    };
    yogaIntelligence: {
        title: string;
        lifeAreas: string;
        activeYogas: string;
        activeDoshas: string;
        strength: string;
        intensity: string;
        neutralized: string;
        impact: string;
        logic: string;
        areas: Record<string, string>;
        areaDescs: Record<string, string>;
    };
}

export const TRANSLATIONS: Record<Language, TranslationSchema> = {
    en: {
        appTitle: "Hindu Panchang",
        subtitle: "Vedic Calendar",
        listView: "List View",
        gridView: "Grid View",
        time: "Time",
        quality: "Quality",
        location: "Mumbai, India",
        aajKaPanchang: "Today's Panchang",
        tithi: "Tithi",
        nakshatra: "Nakshatra",
        yoga: "Yoga",
        karana: "Karana",
        paksha: "Paksha",
        endsAt: "Ends at",
        celestialTimings: "Celestial Timings",
        sunrise: "Sunrise",
        sunset: "Sunset",
        moonrise: "Moonrise",
        moonset: "Moonset",
        shubhMuhurat: "Shubh Muhurat",
        inauspicious: "Inauspicious",
        rahuKalam: "Rahu Kalam",
        yamaganda: "Yamaganda",
        gulikai: "Gulikai",
        abhijit: "Abhijit",
        unknown: "Unknown",
        upcomingFestivals: "Upcoming Festivals",
        viewCalendar: "View Full Calendar",
        backToToday: "Back to Today",
        monthlyPanchang: "Monthly Panchang",
        sunSign: "Sun Sign",
        moonSign: "Moon Sign",
        planetarySigns: "Planetary Signs",
        festivals: {
            vrat: "Vrat",
            festival: "Festival"
        },
        samvat: {
            vikram: "Vikram Samvat",
            shaka: "Shaka Samvat",
            samvatsara: "Samvatsara"
        },
        astronomy: "Astronomy",
        days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        panchang: {
            advancedPanchang: "Advanced Panchang",
            detailedTimings: "Detailed timings & doshas",
            fiveLimbs: "Panch-Ang (Five Limbs)",
            sunRashi: "Sun Rashi",
            moonRashi: "Moon Rashi",
            importantTimings: "Important Timings",
            yogasAndDoshas: "Yogas & Doshas",
            noAuspiciousYogas: "No special auspicious yogas today.",
            panchak: "Panchak",
            bhadra: "Bhadra",
            endsAt: "Ends at",
            fullDay: "Full Day"
        },
        home: {
            panchangAdhyaya: "Panchang Adhyaya",
            acharyasNote: "Acharya's Note",
            upasanaFestivals: "Upasana & Festivals",
            viewMuhurat: "View Muhurat",
            regularObservation: "Regular Observation",
            noMajorFestivals: "No Major Festivals",
            performDailyPuja: "Perform Daily Puja",
            digitallyWorship: "Digitally Worship",
            festivalToday: "Festival Today",
            endsAt: "Ends at:",
            choghadiyaTitle: "Today's Choghadiya",
            purpose: "Purpose",
            logic: "Logic",
            benefit: "Benefit",
            acharyaNoteTemplate: "With the Moon present in {nakshatra}, today carries a stabilizing energy. It is an auspicious time for starting construction or planting seeds, both literal and metaphorical."
        },
        month: "Month",
        ruling: "Ruling",
        var: "Var",
        suryoday: "Sunrise",
        suryast: "Sunset",
        chandroday: "Moonrise",
        chandrast: "Moonset",
        dailyRituals: "Daily Rituals",
        morningPuja: "Morning Puja",
        morningPujaDesc: "Start your day with divine blessings of Lord Ganesha for obstacle removal.",
        viewVidhi: "View Vidhi",
        choghadiya: "Choghadiya",
        choghadiyaDesc: "Find the most auspicious time slots for starting new work today.",
        checkTimings: "Check Timings",
        todaysFestivals: "Today's Festivals",
        celebration: "Celebration",
        noFestivalsToday: "No major festivals today. A good day for inner reflection.",
        viewAll: "View All",
        auspiciousYogas: "Auspicious Yogas",
        warnings: "Warnings",
        dailyInsight: "Daily Insight",
        poweredByGemini: "Powered by Gemini AI",
        loading: "Loading Celestial Data...",
        dashboard: {
            divineTimings: "Divine Timings",
            subtitle: "Muhurat & Choghadiya Dashboard",
            specialYogas: "Special Yogas",
            lagnaShuddhi: "Lagna Shuddhi",
            majorDoshas: "Major Doshas",
            choghadiyaNames: {
                Amrit: "Amrit",
                Shubh: "Shubh",
                Labh: "Labh",
                Chal: "Chal",
                Udveg: "Udveg",
                Rog: "Rog",
                Kal: "Kal"
            },
            personalFocus: "Personal Focus",
            taraBalaCalculator: "Tara Bala Calculator",
            selectBirthStar: "Select Your Birth Star",
            chooseNakshatra: "Choose Nakshatra",
            dayChoghadiya: "Day Choghadiya",
            nightChoghadiya: "Night Choghadiya",
            dayHora: "Day Hora",
            nightHora: "Night Hora",
            hora: "Hora",
            activities: "Best Activities",
            lord: "Lord",
            auspicious: "Auspicious",
            inauspicious: "Inauspicious",
            horaActivities: {
                Sun: "Authority, Government",
                Moon: "Travel, Emotions",
                Mars: "Competition, Surgery",
                Mercury: "Business, Communication",
                Jupiter: "Teaching, Finance",
                Venus: "Marriage, Luxury",
                Saturn: "Land, Discipline"
            },
            noPanchak: "No Panchak (Good)",
            noBhadra: "No Bhadra (Good)",
            planetsVisible: "Planets Visible (Good)",
            tara: {
                janma: { name: "Janma", desc: "Danger to body/mind" },
                sampat: { name: "Sampat", desc: "Wealth and prosperity" },
                vipat: { name: "Vipat", desc: "Danger and losses" },
                kshema: { name: "Kshema", desc: "Well-being and safety" },
                pratyak: { name: "Pratyak", desc: "Obstacles and opposition" },
                sadhana: { name: "Sadhana", desc: "Success and achievement" },
                naidhana: { name: "Naidhana", desc: "Severe danger" },
                mitra: { name: "Mitra", desc: "Friendship and help" },
                paramamitra: { name: "Parama Mitra", desc: "Great friendship" }
            }
        },
        remedies: {
            title: "Available Remedies",
            subtitle: "Discover ancient solutions from Vastu, Ratna Shastra, and Mantra Vidya for peace, health, and prosperity.",
            explore: "Explore",
            shastraPraman: "Shastra Praman",
            benefits: "Benefits",
            vidhi: "Vidhi (Practice)",
            dashboardTitle: "Your Personal Remedy Dashboard",
            specialCrisis: "Special Crisis Remedies",
            direction: "Direction",
            stressIndex: "Stress Index",
            rudrakshaSuggestion: "Rudraksha Suggestion",
            yantraPlacement: "Yantra & Placement",
            mantraMala: "Mantra & Mala",
            analysisReasoning: "Analysis Reasoning",
            safeguardAlert: "Safeguard Alert",
            safeguardDesc: "Gemstone restricted for this positioning.",
            priority: "Priority",
            bead: "Bead",
            countPrefix: "Count: 108 times using",
            malaSuffix: "Mala",
            metals: {
                Copper: "Copper",
                Silver: "Silver",
                Gold: "Gold",
                Brass: "Brass",
                Iron: "Iron",
                "Gold/Brass": "Gold/Brass",
                "Panchdhatu": "Panchdhatu"
            },
            directions: {
                East: "East",
                West: "West",
                North: "North",
                South: "South",
                "North-East": "North-East",
                "North-West": "North-West",
                "South-East": "South-East",
                "South-West": "South-West"
            },
            analyzeEnergies: "Analyze Your Personal Energies",
            analyzeEnergiesDesc: "Analyze your birth chart to understand planetary afflictions and receive precise, safe Vedic remedies tailored to your soul.",
            startAnalysis: "Start My Analysis"
        },
        kundli: {
            soulSystemOnline: "Soul System Online",
            cosmicBlueprint: "Cosmic Blueprint",
            cosmicBlueprintDesc: "Enter your origin coordinates to map your celestial destiny.",
            identitySequence: "Identity Sequence",
            enterFullDesignation: "Enter full designation",
            temporalPoint: "Temporal Point (DOB)",
            chronos: "Chronos (Time)",
            spatialCoordinates: "Spatial Coordinates",
            latitudeForm: "Latitude",
            longitudeForm: "Longitude",
            citySearch: "City Search",
            autoDetect: "Auto-Detect Coordinates",
            autoDetectDesc: "Defaulting to Mumbai (19.07, 72.87). Click \"Auto-Detect\" to locate.",
            rawLongitude: "Raw L.",
            latitudeShara: "Lat/Shara",
            rightAscension: "RA",
            declination: "Decl.",
            lagnaChartDesc: "The Lagna Chart shows the physical body and general destiny.",
            navamsaChartDesc: "The Navamsa Chart reveals the inner strength and marital happiness.",
            geospatialLock: "Geospatial Lock: Mumbai (Default)",
            computingAlignments: "Computing Alignments...",
            initiateLaunchSequence: "Generate Kundli",
            reCalibrate: "Re-calibrate",
            chartId: "Chart ID",
            body: "Body",
            rashi: "Rashi",
            deg: "Deg",
            chronometerSync: "Chronometer Sync",
            initializingSystem: "Initializing System...",
            generateBlueprint: "Generate Blueprint",
            newAnalysis: "New Analysis",
            graha: "Graha",
            longitude: "Longitude",
            nakshatra: "Nakshatra",
            lord: "Lord",
            pada: "Pada",
            status: "Status",
            birthDetails: "Birth Details",
            ayanamsa: "Ayanamsa",
            ascendant: "ASC (Lagna)",
            cosmicInsight: "Cosmic Insight",
            planetaryPositions: "Planetary Positions",
            retrograde: "Retrograde",
            combust: "Combust",
            openChart: "Open Chart",
            matchmaking: "Matchmaking (Gun Milan)",
            lagnaChart: "Lagna Chart (D1)",
            navamsaChart: "Navamsa Chart (D9)",
            chalitChart: "Chalit Chart",
            moonChart: "Moon Chart",
            birthStar: "Birth Star",
            birthRashi: "Birth Rashi",
            tithi: "Birth Tithi",
            gan: "Gan",
            yoni: "Yoni",
            nadi: "Nadi",
            varna: "Varna",
            vimshottariDasha: "Vimshottari Dasha (Life Cycles)",
            mahadasha: "Mahadasha",
            years: "Years",
            start: "Start",
            end: "End",
            current: "Current",
            dashaDesc: "* Predictions are based on the Moon's Nakshatra at birth (Vimshottari System).",
            noYogas: "No major Yogas detected.",
            noYogasDesc: "This doesn't mean a weak chart! Many strengths are subtle.",
            auspiciousYogas: "Auspicious Yogas (Strengths)",
            doshas: "Doshas (Challenges)",
            simple: "Simple",
            scholar: "Scholar",
            all: "ALL",
            conditionTrigger: "Condition Trigger",
            classicalAuthority: "Classical Authority",
            chapter: "Chapter",
            verse: "Verse",
            consultingSages: "Consulting the Sages...",
            noClassicalPredictions: "No classical predictions found to synthesize.",
            classicalSynthesis: "Classical Synthesis",
            holisticAnalysisDesc: "A holistic analysis weaving together the detected rules from BPHS and Phaladeepika.",
            aiSynthesis: "AI Synthesis based on Classical Rules",
            timeAndTiming: "Time & Timing (Gochar)",
            gochar: "Gochar",
            gocharDesc: "Analysis of current planetary periods and transits.",
            currentDashaPeriod: "Current Dasha Period",
            planetaryTransits: "Planetary Transits",
            noDashaEffects: "No specific Dasha effects detected.",
            noMajorTransits: "No major transits detected at this time.",
            predictionsBasedOn: "Predictions based on planetary positions for",
            high: "HIGH",
            medium: "MEDIUM",
            low: "LOW",
            intensityLabel: "INTENSITY",
            trigger: "Trigger",
            tabBasic: "Basic",
            tabCharts: "Charts",
            tabPlanets: "Planets",
            tabClassical: "Classical",
            tabYogas: "Yogas",
            tabDasha: "Dasha",
            tabReport: "Report",
            tabStrength: "Potency",
            tabStrengthDesc: "Planetary and House Strength Analysis",
            planets: {
                Sun: "Sun",
                Moon: "Moon",
                Mars: "Mars",
                Mercury: "Mercury",
                Jupiter: "Jupiter",
                Venus: "Venus",
                Saturn: "Saturn",
                Rahu: "Rahu",
                Ketu: "Ketu",
                Uranus: "Uranus",
                Neptune: "Neptune",
                Pluto: "Pluto",
                Lagna: "Lagna",
                Ascendant: "Ascendant"
            },
            planetAcronyms: {
                Sun: "SU",
                Moon: "MO",
                Mars: "MA",
                Mercury: "ME",
                Jupiter: "JU",
                Venus: "VE",
                Saturn: "SA",
                Rahu: "RA",
                Ketu: "KE",
                Uranus: "UR",
                Neptune: "NE",
                Pluto: "PL"
            },
            vargaNames: {
                D1: "D1 - Rashi",
                D2: "D2 - Hora",
                D3: "D3 - Dreshkana",
                D4: "D4 - Chaturthamsa",
                D7: "D7 - Saptamsha",
                D9: "D9 - Navamsha",
                D10: "D10 - Dashamsha",
                D12: "D12 - Dwadashamsha",
                D16: "D16 - Shodashamsha",
                D20: "D20 - Vimshamsha",
                D24: "D24 - Chaturvimshamsha",
                D27: "D27 - Saptavimshamsha",
                D30: "D30 - Trimshamsha",
                D40: "D40 - Khavedamsha",
                D45: "D45 - Akshavedamsha",
                D60: "D60 - Shashtiamsha"
            },
            categories: {
                ALL: "ALL",
                PLANET_HOUSE: "PLANET HOUSE",
                YOGA: "YOGA",
                CONJUNCTION: "CONJUNCTION",
                DASHA: "DASHA",
                TRANSIT: "TRANSIT"
            }
        },
        yogaIntelligence: {
            title: "Yoga & Dosha Intelligence",
            lifeAreas: "Life Area Evaluation",
            activeYogas: "Active Shastric Yogas",
            activeDoshas: "Active Shastric Doshas",
            strength: "Strength",
            intensity: "Intensity",
            neutralized: "Neutralized",
            impact: "Impact",
            logic: "Logic",
            areas: {
                Career: "Career",
                Wealth: "Wealth",
                Marriage: "Marriage",
                Health: "Health",
                Spiritual: "Spiritual",
                Authority: "Authority"
            },
            areaDescs: {
                Career: "Success in profession and social standing.",
                Wealth: "Financial stability and capital growth.",
                Marriage: "Happiness in partnerships and home life.",
                Health: "Physical vitality and mental resilience.",
                Spiritual: "Deep inner growth and karmic evolution.",
                Authority: "Power, leadership, and executive influence."
            }
        },
        identify: {
            advancedAIVision: "Advanced AI Vision",
            title: "Deity Identifier",
            description: "Upload a photo of any deity, idol, or temple architecture to learn about their significance, history, and associated mantras.",
            captureOrUpload: "Capture or Upload",
            supportsFormats: "Supports JPG, PNG and HEIC",
            analysing: "Analysing Divine Presence...",
            identifyDeity: "Identify Deity",
            confirmed: "Identification Confirmed",
            keySymbol: "Key Symbol",
            tradition: "Tradition",
            mantrasWorship: "Mantras & Worship",
            sacredChant: "Sacred Chant",
            identifyAnother: "Identify another deity"
        },
        askPandit: {
            title: "Ask Pandit Ji",
            subtitle: "AI-powered spiritual guidance",
            placeholder: "Ask any question about today's muhurat...",
            send: "Send",
            thinking: "Pandit Ji is thinking...",
            error: "Sorry, I couldn't process your question. Please try again.",
            suggestions: "Try asking:",
            open: "Ask Pandit",
            close: "Close",
            welcome: "Welcome to Ask Pandit",
            provideDetails: "Please provide your birth details for accurate Prashna Kundli & predictions.",
            yourName: "Your Name",
            enterName: "Enter your name",
            rashi: "Rashi",
            nakshatra: "Nakshatra",
            startChat: "Start Chat",
            meditating: "Pandit Ji is currently meditating (High Traffic). Please try again in a minute.",
            connectionError: "Connection Error: Please check your internet and try again."
        },
        yearly: {
            title: "Panchang Darshan",
            subtitle: "Yearly Tithis & Vrats",
            syncing: "Syncing with Celestial Cycles...",
            compiling: "Compiling {type} Dates for {year}",
            noObservances: "No Observances Found",
            adjustFilters: "Please adjust your filters or check another year",
            date: "Date",
            day: "Day",
            name: "Name",
            month: "Month",
            paksha: "Paksha",
            special: "Special",
            prevYear: "Previous Year",
            nextYear: "Next Year",
            vikramSamvat: "Year (Vikram Samvat)",
            ekadashi: "Ekadashi",
            pradosh: "Pradosh",
            sankashti: "Sankashti",
            purnima: "Purnima",
            amavasya: "Amavasya"
        },
        nav: {
            panchang: "Panchang",
            muhurta: "Muhurta",
            calendar: "Calendar",
            yearly: "Yearly",
            kundli: "Kundli",
            upasana: "Upasana",
            remedies: "Remedies",
            matching: "Matching",
            puja: "Puja",
            samaychakra: "Samay",
            prashnavali: "Prashna",
            swar: "Swar",
            ayurveda: "Ayurveda",
            medical: "Vaidhkiya",
            store: "Vedic Store"
        },
        prashna: {
            title: "Classical Prashna",
            subtitle: "Divine Horary Astrology",
            askQuestion: "Consult the Oracle",
            placeholder: "Enter your question (e.g., Will I get the job?)",
            analyze: "Analyze Question Moment",
            analyzing: "Consulting Cosmic Alignments...",
            prediction: "Divine Prediction",
            timing: "Spiritual Timing",
            yogas: "Significant Tajika Yogas",
            favorable: "Favorable",
            unfavorable: "Unfavorable",
            neutral: "Neutral",
            mixed: "Mixed",
            delayed: "Delayed",
            details: "Detailed Analysis",
            moment: "Question Moment",
            location: "Oracle Point"
        },
        shadbala: {
            title: "Planetary Strength (Shadbala)",
            sthana: "Positional (Sthana)",
            dig: "Directional (Dig)",
            kala: "Temporal (Kala)",
            chesta: "Motional (Chesta)",
            naisargika: "Natural (Naisargika)",
            drik: "Aspectual (Drik)",
            required: "Required",
            total: "Total",
            status: "Status",
            percentage: "Percentage",
            virupa: "Virupa",
            rupas: "Rupas",
            description: "Shadbala calculates a planet's strength across 6 cosmic dimensions defined in classical Shastras.",
            analysisDetails: "Analysis Details",
            strong: "Strong",
            moderate: "Moderate",
            weak: "Weak"
        },
        swar: {
            title: "Swar Shastra",
            breathScience: "Breath Science (Swarodaya)",
            nameScience: "Sound Science (Akshara Swar)",
            activeNostril: "Active Nostril",
            leftNostril: "Left (Ida)",
            rightNostril: "Right (Pingala)",
            bothNostrils: "Both (Sushumna)",
            tattva: "Active Tattva",
            quality: "Flow Quality",
            guidance: "Wisdom Guidance",
            favorable: "Auspicious Activities",
            unfavorable: "Activities to Avoid",
            searchName: "Find Nakshatra by Name",
            enterNamePlaceholder: "Enter first name (e.g., Ramesh)",
            findSound: "Find Cosmic Sound",
            soundResults: "Cosmic Sound Results",
            syllable: "First Syllable",
            rulingPlanet: "Ruling Planet",
            aligned: "Flow Aligned",
            reversed: "Flow Reversed",
            excellent: "Excellent",
            good: "Good",
            average: "Average",
            cautious: "Cautious"
        },
        samaychakra: {
            title: "Samaychakra",
            wheelOfTime: "The Wheel of Time",
            animationSubtitle: "Interactive Sidereal Planetary Animation",
            loadingData: "Loading Ephemeris Data...",
            speed: "Animation Speed",
            minsSec: "Mins/sec",
            hrsSec: "Hrs/sec",
            daysSec: "Days/sec",
            play: "Play",
            pause: "Pause",
            reset: "Reset",
            realTimePanchang: "Real-time Panchang",
            currentAlignment: "Current alignment based on simulated time.",
            planetaryAspects: "Planetary Aspects",
            aspectsDesc: "Watch the movement of the Grahas (Planets) across the Rashis (Zodiacs) and Nakshatras (Constellations). The inner ring represents the 27 Nakshatras, while the outer ring represents the 12 Zodiac signs.",
            vakriIndicator: "Vakri (Retrograde) marked with Red & (v)",
            dailySpeeds: "Daily speeds are scaled",
            siderealOffsets: "Sidereal Lahiri offsets",
            simulatedActiveTime: "Simulated Active Time",
            calculatingCelestial: "Calculating Celestial Alignments...",
            left: "Left"
        },
        puja: {
            virtualMandir: "Virtual Mandir",
            interactivePujaExp: "Interactive Puja Experience",
            digitalDevotion: "Digital Devotion",
            performSacredPuja: "Perform Sacred Puja",
            performSacredPujaDesc: "Choose your puja mode, summon your deity, and offer divine prayers through interactive animations.",
            invoking: "Invoking {deity}...",
            confirmed: "Divine Presence Invoked",
            selectDeity: "Select Deity to Invoke",
            selectPujaType: "Select Puja Type",
            summonYourDeity: "Summon Your Deity",
            enterDeityName: "Enter deity name (e.g., Ganesha, Krishna, Durga)",
            changeDeityOrMode: "Change Deity or Mode",
            myDeities: "My Deities",
            uploadImage: "Upload Image",
            uploadInstruction: "Upload photos of your own idols to perform puja.",
            pujaWord: "Puja",
            panchopachar: "Panchopachar",
            shodashopachar: "Shodashopachar",
            rajopachar: "Rajopachar",
            player: {
                comingSoon: "Mantra data coming soon for this deity.",
                completed: "Puja Completed!",
                blessing: "May Lord {deity} bless you with peace and prosperity.",
                prasad: "Prasad",
                prasadOffered: "Virtual Prasad has been offered.",
                returnToMandir: "Return to Mandir",
                step: "Step",
                of: "of",
                collapse: "Collapse",
                expand: "Expand / Read Full",
                previous: "Previous",
                next: "Next",
                finish: "Finish"
            },
            modes: {
                panchopachar: {
                    subtitle: "5 Offerings",
                    description: "Quick daily devotion",
                    time: "~5 min"
                },
                shodashopachar: {
                    subtitle: "16 Offerings",
                    description: "Traditional complete ritual",
                    time: "~15 min"
                },
                rajopachar: {
                    subtitle: "Royal Honors",
                    description: "Grand ceremonial worship",
                    time: "~30 min"
                }
            },
            offerings: {
                avahan: { name: "Invoke", meaning: "I invoke the divine presence." },
                asana: { name: "Seat", meaning: "I offer a seat to the deity." },
                padya: { name: "Feet Wash", meaning: "I wash the lotus feet of the Lord." },
                arghya: { name: "Water", meaning: "I offer water for cleansing." },
                achamana: { name: "Sip", meaning: "I offer water for sipping." },
                snana: { name: "Bath", meaning: "I offer a ceremonial bath." },
                vastra: { name: "Clothes", meaning: "I offer divine garments." },
                yajnopavita: { name: "Thread", meaning: "I offer the sacred thread." },
                gandha: { name: "Sandal", meaning: "I offer sandalwood paste." },
                kumkum: { name: "Kumkum", meaning: "I offer sacred red powder." },
                pushpa: { name: "Flowers", meaning: "I offer fresh flowers." },
                dhoop: { name: "Incense", meaning: "I offer fragrant incense smoke." },
                deep: { name: "Lamp", meaning: "I show the divine light." },
                naivedya: { name: "Food", meaning: "I offer sacred food." },
                tambula: { name: "Betel", meaning: "I offer betel leaves." },
                karpura: { name: "Camphor", meaning: "I perform camphor aarti." },
                bell: { name: "Bell", meaning: "I ring the bell to invite divinity." },
                namaskara: { name: "Bow", meaning: "I bow down in surrender." },
                abhishek: { name: "Abhishek", meaning: "Grand ceremonial bath with panchamrita." },
                alankara: { name: "Jewelry", meaning: "I adorn the deity with royal ornaments." },
                chhatra: { name: "Umbrella", meaning: "I hold the royal umbrella over the deity." },
                chamar: { name: "Whisk", meaning: "I wave the royal whisk." },
                sangeet: { name: "Music", meaning: "I offer divine singing and music." },
                bhog: { name: "Special Food", meaning: "I offer a royal feast." },
                shayana: { name: "Sleep", meaning: "I prepare the royal bed for rest." }
            },
            toolbar: {
                title: "Offerings",
                completed: "completed"
            }
        },
        muhurta: {
            title: "Muhurta Chintamani",
            subtitle: "Electional Astrology",
            quote: "Actions performed in auspicious moments yield fruit like seeds sown in fertile soil.",
            findBtn: "Find Auspicious Time",
            categories: {
                samskara: {
                    title: "Samskara Muhurtas",
                    subtitle: "Life Sacraments",
                    desc: "Highest precision alignments for karmic milestones like Naming, Feeding, and Initiation."
                },
                vivaha: {
                    title: "Vivaha Muhurtas",
                    subtitle: "Marriage & Alliance",
                    desc: "Advanced compatibility checks ensuring marital stability and long-term harmony."
                },
                vastu: {
                    title: "Vastu & Property",
                    subtitle: "Construction & Entry",
                    desc: "Align with Earth energies for foundation laying, griha pravesh, and property shifting."
                },
                artha: {
                    title: "Artha Muhurtas",
                    subtitle: "Wealth & Career",
                    desc: "Strategic timing for business launch, investments, and financial contracts."
                },
                yatra: {
                    title: "Yatra Muhurtas",
                    subtitle: "Travel & Migration",
                    desc: "Directional safety checks (Disha Shool) for auspicious journeys."
                },
                adhyatmika: {
                    title: "Adhyatmika",
                    subtitle: "Spiritual Initiation",
                    desc: "Sacred timing for Mantra Siddhi, Yajna, and Deity Installation."
                },
                karya: {
                    title: "Karya Muhurtas",
                    subtitle: "Challenging Actions",
                    desc: "Tactical timing for surgery, litigation, and overcoming adversaries."
                }
            },
            finder: {
                back: "Back to Categories",
                type: "Muhurta Type",
                location: "Location",
                startDate: "Start Date",
                endDate: "End Date",
                scanBtn: "Initiate Shastric Scan",
                scanning: "Consulting Classic Texts...",
                resultsTitle: "Shastric Analysis Results",
                evaluated: "Evaluated {n} windows based on B.P.H.S. logic",
                noResults: "No highly auspicious windows found.",
                noResultsDesc: "The stars suggest waiting. Try extending the date range.",
                showAdvanced: "Show Advanced Settings",
                hideAdvanced: "Hide Advanced Settings",
                vivahaSettings: "Vivaha Settings",
                includeKharmas: "Include Kharmas Dates (Emergency)",
                kharmasDesc: "Allow dates during Sun in Sagittarius/Pisces (usually prohibited).",
                noAdvanced: "No advanced settings available for this category yet.",
                regionalPref: "Regional Preference",
                amanta: "Amanta (South/West)",
                purnimanta: "Purnimanta (North)",
                comingSoon: "More advanced settings coming soon.",
                calculate: "Calculate",
                personalize: "Personalize Results",
                personalizeDesc: "Consider birth data for Tara-Bala and Chandra-Bala",
                janmaNakshatra: "Janma Nakshatra",
                janmaRashi: "Janma Rashi",
                shastricAuthority: "Based on principles from Muhurta Chintamani and Kalaprakashika."
            },
            result: {
                title: "Muhurta Results",
                score: "Score",
                pros: "Auspicious Factors",
                cons: "Inauspicious Factors/Cautions",
                moonStatus: "Moon Strength (Chandra-Bala)",
                panchang: "Panchang",
                moon: "Moon",
                lagna: "Ascendant",
                event: "Event",
                dosha: "Doshas",
                personal: "Personal",
                noResults: "No auspicious windows found in this period."
            },
            types: {
                GARBHADHANA: "Garbhadhana (Conception)",
                PUMSAVANA: "Pumsavana",
                SIMANTONNAYANA: "Simantonnayana",
                JATAKARMA: "Jatakarma",
                NAMAKARANA: "Namakarana (Naming)",
                ANNAPRASHANA: "Annaprashana",
                CHUDAKARANA: "Chudakarana (Mundan)",
                KARNAVEDHA: "Karnavedha",
                UPANAYANA: "Upanayana",
                VIDYARAMBHA: "Vidyarambha",
                SAMAVARTANA: "Samavartana",
                VIVAHA: "Vivaha (Marriage)",
                NISCHAYA_TAMBULAM: "Nischaya Tambulam (Engagement)",
                VARA_PREKSHANA: "Vara Prekshana",
                ALLIANCE_FIXING: "Alliance Fixing",
                MARRIAGE_REGISTRATION: "Marriage Registration",
                BHOOMI_PUJAN: "Bhoomi Pujan",
                SHILA_NYASA: "Shila Nyasa (Foundation)",
                GRIHA_ARAMBHA: "Griha Arambha",
                DWARA_PRAVESHA: "Dwara Pravesha",
                GRIHA_PRAVESH: "Griha Pravesh (Entry)",
                VASTU_SHANTI: "Vastu Shanti",
                RENOVATION: "Renovation",
                VYAPARA_ARAMBHA: "Vyapara Arambha (Business)",
                DHANA_NIVESHA: "Dhana Nivesha (Investment)",
                LEKHA_ARAMBHA: "Lekha Arambha (Accounting)",
                CONTRACT_SIGNING: "Contract Signing",
                JOB_JOINING: "Job Joining",
                PROMOTION_ACCEPTANCE: "Promotion Acceptance",
                FIRST_SALARY: "First Salary",
                GOLD_PURCHASE: "Gold Purchase",
                YATRA_ARAMBHA: "Yatra Arambha",
                DISHA_YATRA: "Disha Yatra",
                VIDESHA_YATRA: "Videsha Yatra",
                PILGRIMAGE: "Pilgrimage",
                DEITY_PRATISHTHA: "Deity Pratishtha",
                YAJNA: "Yajna / Homa",
                MANTRA_DIKSHA: "Mantra Diksha",
                GURU_DIKSHA: "Guru Diksha",
                VRATA_ARAMBHA: "Vrata Arambha",
                TEMPLE_OPENING: "Temple Opening",
                SURGERY: "Surgery",
                LITIGATION_FILING: "Litigation Filing",
                DEBT_RECOVERY: "Debt Recovery",
                CONFLICT_INITIATION: "Conflict Initiation",
                EDUCATION_EXAM: "Examination"
            }
        },
        matching: {
            title: "Kundli Matching (Gun Milan)",
            kootaNames: {
                varna: "Varna",
                vashya: "Vashya",
                tara: "Tara",
                yoni: "Yoni",
                grahaMaitri: "Graha Maitri",
                gana: "Gana",
                bhakoot: "Bhakoot",
                nadi: "Nadi"
            },
            subtitle: "Vedic Compatibility Analysis",
            boyDetails: "Boy's Details",
            girlDetails: "Girl's Details",
            name: "Name",
            date: "Date of Birth",
            time: "Time",
            location: "Location",
            matchBtn: "Analyze Compatibility",
            score: "Total Score",
            compatibility: "Compatibility",
            kootas: "Ashta-Koota Breakdown",
            area: "Area",
            obtained: "Obtained",
            max: "Max",
            desc: "Description",
            dosha: "Dosha / Cancellation",
            analysis: "Astrologer's Note",
            compatible: "Compatible Match",
            notCompatible: "Low Compatibility",
            compatibleMsg: "The charts show good compatibility suitable for marriage. The key areas of mental harmony and health (Nadi, Bhakoot) should be prioritized.",
            notCompatibleMsg: "The compatibility score is below the traditional threshold. While Gun Milan is a filter, we recommend a deeper manual analysis of specific Dasha periods and 7th house overlays before proceeding.",
            cancellationMsg: "* Important: Some traditional Doshas were detected but cancelled by stronger planetary positions. This is a positive sign of resilience in the relationship.",
            backToKundli: "Back to Kundli",
            placeOfBirth: "Place of Birth",
            analyzing: "Analyzing...",
            mangalDoshaReport: "Advanced Mangal Dosha (Shastric) Report",
            activeDosha: "Active Dosha",
            cancelledParihar: "Cancelled (Parihar)",
            cancellationFactors: "Cancellation Factors:",
            nonManglik: "Non-Manglik ✓",
            finalRecommendation: "Final Recommendation:",
            cancelled: "Cancelled",
        },
        rashiNames: [
            "Aries", "Taurus", "Gemini", "Cancer",
            "Leo", "Virgo", "Libra", "Scorpio",
            "Sagittarius", "Capricorn", "Aquarius", "Pisces"
        ]
    },
    hi: {
        appTitle: "हिंदू पंचांग",
        subtitle: "वैदिक कैलेंडर",
        listView: "सूची",
        gridView: "ग्रिड",
        time: "समय",
        quality: "गुण",
        location: "मुंबई, भारत",
        aajKaPanchang: "आज का पंचांग",
        tithi: "तिथि",
        nakshatra: "नक्षत्र",
        yoga: "योग",
        karana: "करण",
        paksha: "पक्ष",
        endsAt: "समाप्त",
        celestialTimings: "खगोलीय समय",
        sunrise: "सूर्योदय",
        sunset: "सूर्यास्त",
        moonrise: "चंद्रोदय",
        moonset: "चंद्रास्त",
        shubhMuhurat: "शुभ मुहूर्त",
        inauspicious: "अशुभ समय",
        rahuKalam: "राहु काल",
        yamaganda: "यमगंड",
        gulikai: "गुलिक काल",
        abhijit: "अभिजित",
        unknown: "अज्ञात",
        upcomingFestivals: "आगामी त्यौहार",
        viewCalendar: "पूरा कैलेंडर देखें",
        backToToday: "आज पर वापस जाएं",
        monthlyPanchang: "मासिक पंचांग",
        sunSign: "सूर्य राशि",
        moonSign: "चंद्र राशि",
        planetarySigns: "ग्रह राशियाँ",
        festivals: {
            vrat: "व्रत",
            festival: "त्यौहार"
        },
        samvat: {
            vikram: "विक्रम संवत",
            shaka: "शक संवत",
            samvatsara: "संवत्सर"
        },
        astronomy: "खगोल विज्ञान",
        days: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
        panchang: {
            advancedPanchang: "उन्नत पंचांग",
            detailedTimings: "विस्तृत समय और दोष",
            fiveLimbs: "पंचांग (पांच अंग)",
            sunRashi: "सूर्य राशि",
            moonRashi: "चंद्र राशि",
            importantTimings: "महत्वपूर्ण समय",
            yogasAndDoshas: "योग और दोष",
            noAuspiciousYogas: "आज कोई विशेष शुभ योग नहीं हैं।",
            panchak: "पंचक",
            bhadra: "भद्रा",
            endsAt: "समाप्ति",
            fullDay: "पूरा दिन"
        },
        home: {
            panchangAdhyaya: "पंचांग अध्याय",
            acharyasNote: "आचार्य का नोट",
            upasanaFestivals: "उपासना और त्यौहार",
            viewMuhurat: "मुहूर्त देखें",
            regularObservation: "सामान्य अवलोकन",
            noMajorFestivals: "कोई मुख्य त्यौहार नहीं",
            performDailyPuja: "दैनिक पूजा करें",
            digitallyWorship: "डिजिटल पूजा",
            festivalToday: "आज का त्यौहार",
            endsAt: "समाप्ति:",
            choghadiyaTitle: "आज का चौघड़िया",
            purpose: "उद्देश्य",
            logic: "तर्क",
            benefit: "लाभ",
            acharyaNoteTemplate: "{nakshatra} नक्षत्र में चंद्रमा की उपस्थिति आज स्थिरता और शुभ ऊर्जा ला रही है। यह नए निर्माण या बीजारोपण (शाब्दिक और लाक्षणिक दोनों) के लिए शुभ समय है।"
        },
        month: "मास",
        ruling: "अधिपति",
        var: "वार",
        suryoday: "सूर्योदय",
        suryast: "सूर्यास्त",
        chandroday: "चंद्रोदय",
        chandrast: "चंद्रास्त",
        dailyRituals: "दैनिक पूजा",
        morningPuja: "प्रातः पूजा",
        morningPujaDesc: "गणेश जी के आशीर्वाद से दिन की शुरुआत करें।",
        viewVidhi: "विधि देखें",
        choghadiya: "चौघड़िया",
        choghadiyaDesc: "आज के शुभ मुहूर्त जानें।",
        checkTimings: "समय देखें",
        todaysFestivals: "आज के त्यौहार",
        celebration: "उत्सव",
        noFestivalsToday: "आज कोई विशेष त्यौहार नहीं। आत्म-चिंतन का दिन।",
        viewAll: "सभी देखें",
        auspiciousYogas: "शुभ योग",
        warnings: "चेतावनी",
        dailyInsight: "दैनिक अंतर्दृष्टि",
        poweredByGemini: "जेमिनी AI द्वारा संचालित",
        loading: "खगोलीय डेटा लोड हो रहा है...",
        dashboard: {
            divineTimings: "दिव्य मुहूर्त",
            subtitle: "मुहूर्त और चौघड़िया डैशबोर्ड",
            specialYogas: "विशेष योग",
            lagnaShuddhi: "लग्न शुद्धि",
            majorDoshas: "प्रमुख दोष",
            choghadiyaNames: {
                Amrit: "अमृत",
                Shubh: "शुभ",
                Labh: "लाभ",
                Chal: "चल",
                Udveg: "उद्वेग",
                Rog: "रोग",
                Kal: "काल"
            },
            personalFocus: "व्यक्तिगत फोकस",
            taraBalaCalculator: "तारा बल कैलकुलेटर",
            selectBirthStar: "अपना जन्म नक्षत्र चुनें",
            chooseNakshatra: "नक्षत्र चुनें",
            dayChoghadiya: "दिन का चौघड़िया",
            nightChoghadiya: "रात्रि का चौघड़िया",
            dayHora: "दिन की होरा",
            nightHora: "रात की होरा",
            hora: "होरा",
            activities: "उपयुक्त कार्य",
            lord: "स्वामी",
            auspicious: "शुभ",
            inauspicious: "अशुभ",
            horaActivities: {
                Sun: "अधिकार, सरकारी कार्य",
                Moon: "यात्रा, भावनाएं",
                Mars: "प्रतियोगिता, सर्जरी",
                Mercury: "व्यापार, संचार",
                Jupiter: "शिक्षण, वित्त",
                Venus: "विवाह, विलासिता",
                Saturn: "भूमि, अनुशासन"
            },
            noPanchak: "पंचक नहीं (शुभ)",
            noBhadra: "भद्रा नहीं (शुभ)",
            planetsVisible: "ग्रह दृश्य (शुभ)",
            tara: {
                janma: { name: "जन्म", desc: "शरीर/मन को कष्ट" },
                sampat: { name: "संपत", desc: "धन और समृद्धि" },
                vipat: { name: "विपत", desc: "खतरा और हानि" },
                kshema: { name: "क्षेम", desc: "कल्याण और सुरक्षा" },
                pratyak: { name: "प्रत्यक", desc: "बाधाएं और विरोध" },
                sadhana: { name: "साधन", desc: "सफलता और सिद्धि" },
                naidhana: { name: "नैधन", desc: "गंभीर खतरा" },
                mitra: { name: "मित्र", desc: "मित्रता और सहायता" },
                paramamitra: { name: "परम मित्र", desc: "घनिष्ठ मित्रता" }
            }
        },
        remedies: {
            title: "उपलब्ध उपाय",
            subtitle: "शांति, स्वास्थ्य और समृद्धि के लिए वास्तु, रत्न शास्त्र और मंत्र विद्या से प्राचीन समाधान खोजें।",
            explore: "विवरण देखें",
            shastraPraman: "शास्त्र प्रमाण",
            benefits: "लाभ",
            vidhi: "विधि (अभ्यास)",
            dashboardTitle: "आपका व्यक्तिगत उपचार डैशबोर्ड",
            specialCrisis: "विशेष संकट निवारण",
            direction: "दिशा",
            stressIndex: "तनाव सूचकांक",
            rudrakshaSuggestion: "रुद्राक्ष सुझाव",
            yantraPlacement: "यंत्र और स्थापना",
            mantraMala: "मंत्र और माला",
            analysisReasoning: "विश्लेषण का तर्क",
            safeguardAlert: "सुरक्षा अलर्ट",
            safeguardDesc: "इस स्थिति के लिए रत्न प्रतिबंधित है।",
            priority: "प्राथमिकता",
            bead: "मुखी",
            countPrefix: "जाप: 108 बार",
            malaSuffix: "माला के साथ",
            metals: {
                Copper: "तांबा",
                Silver: "चांदी",
                Gold: "सोना",
                Brass: "पीतल",
                Iron: "लोहा",
                "Gold/Brass": "सोना/पीतल",
                "Panchdhatu": "पंचधातु"
            },
            directions: {
                East: "पूर्व",
                West: "पश्चिम",
                North: "उत्तर",
                South: "दक्षिण",
                "North-East": "उत्तर-पूर्व (ईशान)",
                "North-West": "उत्तर-पश्चिम (वायव्य)",
                "South-East": "दक्षिण-पूर्व (आग्नेय)",
                "South-West": "दक्षिण-पश्चिम (नैरृत्य)"
            },
            analyzeEnergies: "अपनी व्यक्तिगत ऊर्जा का विश्लेषण करें",
            analyzeEnergiesDesc: "अपने ग्रहों के दोषों को समझने और सटीक वैदिक उपचार प्राप्त करने के लिए अपनी जन्म कुंडली का विश्लेषण करें।",
            startAnalysis: "विश्लेषण शुरू करें"
        },
        kundli: {
            soulSystemOnline: "आत्मा प्रणाली सक्रिय",
            cosmicBlueprint: "ब्रह्मांडीय मानचित्र",
            cosmicBlueprintDesc: "जन्म समय के ग्रह स्थिति जानने हेतु विवरण दर्ज करें।",
            identitySequence: "पहचान क्रम",
            enterFullDesignation: "पूरा नाम दर्ज करें",
            temporalPoint: "जन्म तिथि",
            chronos: "जन्म समय",
            spatialCoordinates: "स्थान निर्देशांक",
            latitudeForm: "अक्षांश (Latitude)",
            longitudeForm: "देशांतर (Longitude)",
            citySearch: "शहर खोजें",
            autoDetect: "स्थान स्वतः पहचानें",
            autoDetectDesc: "डिफ़ॉल्ट रूप से मुंबई (19.07, 72.87)। खोजने के लिए 'स्थान स्वतः पहचानें' पर क्लिक करें।",
            rawLongitude: "स्पष्ट रेखांश",
            latitudeShara: "अक्षांश/शर",
            rightAscension: "विषुवांश (RA)",
            declination: "क्रांति (Decl.)",
            lagnaChartDesc: "लग्न कुंडली भौतिक शरीर और सामान्य भाग्य को दर्शाती है।",
            navamsaChartDesc: "नवांश कुंडली आंतरिक शक्ति और वैवाहिक सुख को उजागर करती है।",
            geospatialLock: "भू-स्थान: मुंबई (डिफ़ॉल्ट)",
            computingAlignments: "ग्रह गणना जारी...",
            initiateLaunchSequence: "कुंडली बनाएं",
            reCalibrate: "पुनः सेट करें",
            chartId: "चार्ट ID",
            body: "ग्रह",
            rashi: "राशि",
            deg: "अंश",
            chronometerSync: "समय अंशांकन",
            initializingSystem: "प्रणाली आरंभ...",
            generateBlueprint: "नक्शा बनाएं",
            newAnalysis: "नई गणना",
            graha: "ग्रह",
            longitude: "देशांतर",
            nakshatra: "नक्षत्र",
            lord: "स्वामी",
            pada: "पद",
            status: "स्थिति",
            birthDetails: "जन्म विवरण",
            ayanamsa: "अयनांश",
            ascendant: "लग्न (ASC)",
            cosmicInsight: "ब्रह्मांडीय अंतर्दृष्टि",
            planetaryPositions: "ग्रहों की स्थिति",
            openChart: "पत्री देखें",
            matchmaking: "मिलान (गुण मिलन)",
            retrograde: "वक्री",
            combust: "अस्त",
            lagnaChart: "लग्न कुंडली (D1)",
            navamsaChart: "नवांश कुंडली (D9)",
            chalitChart: "चलित कुंडली",
            moonChart: "चंद्र कुंडली",
            birthStar: "जन्म नक्षत्र",
            birthRashi: "जन्म राशि",
            tithi: "जन्म तिथि",
            gan: "गण",
            yoni: "योनि",
            nadi: "नाड़ी",
            varna: "वर्ण",
            vimshottariDasha: "विंशोत्तरी दशा (जीवन चक्र)",
            mahadasha: "महादशा",
            years: "वर्ष",
            start: "आरंभ",
            end: "समाप्त",
            current: "वर्तमान",
            dashaDesc: "* भविष्यवाणियां जन्म के समय चंद्रमा के नक्षत्र पर आधारित हैं (विंशोत्तरी प्रणाली)।",
            noYogas: "कोई प्रमुख योग नहीं मिला।",
            noYogasDesc: "इसका मतलब यह नहीं है कि कुंडली कमजोर है! कई ताकतें सूक्ष्म होती हैं।",
            auspiciousYogas: "शुभ योग (ताकत)",
            doshas: "दोष (चुनौतियां)",
            simple: "सरल",
            scholar: "विद्वान",
            all: "सभी",
            conditionTrigger: "शर्त ट्रिगर",
            classicalAuthority: "शास्त्रीय प्रमाण",
            chapter: "अध्याय",
            verse: "श्लोक",
            consultingSages: "ऋषियों से परामर्श किया जा रहा है...",
            noClassicalPredictions: "संश्लेषण के लिए कोई शास्त्रीय भविष्यवाणियां नहीं मिलीं।",
            classicalSynthesis: "शास्त्रीय संश्लेषण",
            holisticAnalysisDesc: "BPHS और फलदीपिका के नियमों का एक समग्र विश्लेषण।",
            aiSynthesis: "शास्त्रीय नियमों पर आधारित AI संश्लेषण",
            timeAndTiming: "समय और समय (गोचर)",
            gochar: "गोचर",
            gocharDesc: "वर्तमान ग्रह दशा और गोचर का विश्लेषण।",
            currentDashaPeriod: "वर्तमान महादशा अवधि",
            planetaryTransits: "ग्रहों का गोचर",
            noDashaEffects: "कोई विशिष्ट दशा प्रभाव नहीं मिला।",
            noMajorTransits: "इस समय कोई बड़ा गोचर नहीं मिला।",
            predictionsBasedOn: "ग्रहों की स्थिति के आधार पर भविष्यवाणियां:",
            high: "उच्च",
            medium: "मध्यम",
            low: "निम्न",
            intensityLabel: "तीव्रता",
            trigger: "ट्रिगर",
            tabBasic: "बुनियादी",
            tabCharts: "चार्ट",
            tabPlanets: "ग्रह",
            tabClassical: "शास्त्रीय",
            tabYogas: "योग",
            tabDasha: "दशा",
            tabReport: "रिपोर्ट",
            tabStrength: "शक्ति",
            tabStrengthDesc: "ग्रह और भावों की शक्ति का विश्लेषण",
            planets: {
                Sun: "सूर्य",
                Moon: "चन्द्र",
                Mars: "मंगल",
                Mercury: "बुध",
                Jupiter: "बृहस्पति",
                Venus: "शुक्र",
                Saturn: "शनि",
                Rahu: "राहु",
                Ketu: "केतु",
                Uranus: "अरुण",
                Neptune: "वरुण",
                Pluto: "यम",
                Lagna: "लग्न",
                Ascendant: "लग्न"
            },
            planetAcronyms: {
                Sun: "सू",
                Moon: "चं",
                Mars: "मं",
                Mercury: "बु",
                Jupiter: "बृ",
                Venus: "शु",
                Saturn: "श",
                Rahu: "रा",
                Ketu: "के",
                Uranus: "अ",
                Neptune: "व",
                Pluto: "यम"
            },
            vargaNames: {
                D1: "D1 - राशि (Rashi)",
                D2: "D2 - होरा (Hora)",
                D3: "D3 - द्रेष्काण (Dreshkana)",
                D4: "D4 - चतुर्थांश (Chaturthamsa)",
                D7: "D7 - सप्तमांश (Saptamsha)",
                D9: "D9 - नवांश (Navamsha)",
                D10: "D10 - दशमांश (Dashamsha)",
                D12: "D12 - द्वादशांश (Dwadashamsha)",
                D16: "D16 - षोडशांश (Shodashamsha)",
                D20: "D20 - विंशोन्मांश (Vimshamsha)",
                D24: "D24 - चतुर्विंशति अंश (Chaturvimshamsha)",
                D27: "D27 - सप्तविंशति अंश (Saptavimshamsha)",
                D30: "D30 - त्रिंशांश (Trimshamsha)",
                D40: "D40 - खवेदांश (Khavedamsha)",
                D45: "D45 - अक्षवेदांश (Akshavedamsha)",
                D60: "D60 - षष्ट्यंश (Shashtiamsha)"
            },
            categories: {
                ALL: "सभी",
                PLANET_HOUSE: "ग्रह भाव",
                YOGA: "योग",
                CONJUNCTION: "युति",
                DASHA: "दशा",
                TRANSIT: "गोचर"
            }
        },
        yogaIntelligence: {
            title: "योग और दोष इंटेलिजेंस",
            lifeAreas: "जीवन क्षेत्र मूल्यांकन",
            activeYogas: "सक्रिय शास्त्रीय योग",
            activeDoshas: "सक्रिय शास्त्रीय दोष",
            strength: "बल/शक्ति",
            intensity: "तीव्रता",
            neutralized: "निष्प्रभावी",
            impact: "प्रभाव क्षेत्र",
            logic: "शास्त्रीय तर्क",
            areas: {
                Career: "करियर",
                Wealth: "धन-संपत्ति",
                Marriage: "विवाह",
                Health: "स्वास्थ्य",
                Spiritual: "अध्यात्म",
                Authority: "अधिकार"
            },
            areaDescs: {
                Career: "पेशेवर जीवन और सामाजिक स्थिति में सफलता।",
                Wealth: "वित्तीय स्थिरता और पूंजी में वृद्धि।",
                Marriage: "साझेदारी और गृहस्थ जीवन में सुख।",
                Health: "शारीरिक जीवन शक्ति और मानसिक लचीलापन।",
                Spiritual: "गहरी आंतरिक वृद्धि और कर्म विकास।",
                Authority: "शक्ति, नेतृत्व और कार्यकारी प्रभाव।"
            }
        },
        identify: {
            advancedAIVision: "उन्नत एआई विजन",
            title: "देवता पहचान",
            description: "किसी भी देवता, मूर्ति या मंदिर की तस्वीर अपलोड करें और उनके महत्व, इतिहास और मंत्रों के बारे में जानें।",
            captureOrUpload: "कैप्चर या अपलोड करें",
            supportsFormats: "JPG, PNG और HEIC समर्थित",
            analysing: "दिव्य उपस्थिति का विश्लेषण...",
            identifyDeity: "देवता की पहचान करें",
            confirmed: "पहचान की पुष्टि हुई",
            keySymbol: "मुख्य प्रतीक",
            tradition: "परंपरा",
            mantrasWorship: "मंत्र और पूजा",
            sacredChant: "पावन जाप",
            identifyAnother: "दूसरे देवता की पहचान करें"
        },
        askPandit: {
            title: "पंडित जी से पूछें",
            subtitle: "AI-आधारित आध्यात्मिक मार्गदर्शन",
            placeholder: "आज के मुहूर्त के बारे में कोई सवाल पूछें...",
            send: "भेजें",
            thinking: "पंडित जी सोच रहे हैं...",
            error: "क्षमा करें, आपका प्रश्न संसाधित नहीं हो सका।",
            suggestions: "ये पूछें:",
            open: "पंडित जी से पूछें",
            close: "बंद करें",
            welcome: "पंडित जी से पूछें में आपका स्वागत है",
            provideDetails: "सटीक प्रश्न कुंडली और भविष्यवाणियों के लिए कृपया अपने जन्म विवरण प्रदान करें।",
            yourName: "आपका नाम",
            enterName: "अपना नाम दर्ज करें",
            rashi: "राशि",
            nakshatra: "नक्षत्र",
            startChat: "चैट शुरू करें",
            meditating: "पंडित जी अभी ध्यान में हैं (अधिक भीड़)। कृपया एक मिनट बाद पुनः प्रयास करें।",
            connectionError: "कनेक्शन त्रुटि: कृपया इंटरनेट की जांच करें और पुनः प्रयास करें।"
        },
        yearly: {
            title: "पंचांग दर्शन",
            subtitle: "वार्षिक तिथियां और व्रत",
            syncing: "दिव्य गणना जारी है...",
            compiling: "{type} के लिए {year} तिथियां संकलित की जा रही है",
            noObservances: "कोई व्रत/त्योहार नहीं मिला",
            adjustFilters: "कृपया अपने फ़िल्टर बदलें या दूसरा वर्ष देखें",
            date: "तारीख",
            day: "दिन",
            name: "नाम",
            month: "मास",
            paksha: "पक्ष",
            special: "विशेष",
            prevYear: "पिछला वर्ष",
            nextYear: "अगला वर्ष",
            vikramSamvat: "वर्ष (विक्रम संवत)",
            ekadashi: "एकादशी",
            pradosh: "प्रदोष",
            sankashti: "संकष्टी",
            purnima: "पूर्णिमा",
            amavasya: "अमावस्या"
        },
        nav: {
            panchang: "पंचांग",
            muhurta: "मुहूर्त",
            calendar: "कैलेंडर",
            yearly: "वर्ष",
            kundli: "कुंडली",
            upasana: "उपासना",
            remedies: "उपाय",
            matching: "मिलान",
            puja: "पूजा",
            samaychakra: "समयचक्र",
            prashnavali: "प्रश्नावली",
            swar: "स्वर",
            ayurveda: "आयुर्वेद",
            medical: "वैद्यकीय",
            store: "वैदिक स्टोर"
        },
        prashna: {
            title: "शास्त्रीय प्रश्न",
            subtitle: "दिव्य होरारी ज्योतिष",
            askQuestion: "दिव्य मार्गदर्शन प्राप्त करें",
            placeholder: "अपना प्रश्न दर्ज करें (जैसे: क्या मुझे नौकरी मिलेगी?)",
            analyze: "प्रश्न काल का विश्लेषण करें",
            analyzing: "ब्रह्मांडीय संरेखण की गणना...",
            prediction: "दिव्य भविष्यवाणी",
            timing: "आध्यात्मिक समय",
            yogas: "महत्वपूर्ण ताजिक योग",
            favorable: "अनुकूल",
            unfavorable: "प्रतिकूल",
            neutral: "तटस्थ",
            mixed: "मिश्रित",
            delayed: "विलंबित",
            details: "विस्तृत विश्लेषण",
            moment: "प्रश्न काल",
            location: "प्रश्न स्थान"
        },
        shadbala: {
            title: "ग्रह बल (षडबल)",
            sthana: "स्थान बल",
            dig: "दिग बल",
            kala: "काल बल",
            chesta: "चेष्टा बल",
            naisargika: "नैसर्गिक बल",
            drik: "दृक बल",
            required: "आवश्यक",
            total: "कुल",
            status: "स्थिति",
            percentage: "प्रतिशत",
            virupa: "विरुपा",
            rupas: "रुपास",
            description: "षडबल शास्त्रीय शास्त्रों में परिभाषित 6 ब्रह्मांडीय आयामों में ग्रह की शक्ति की गणना करता है।",
            analysisDetails: "विश्लेषण विवरण",
            strong: "बलिष्ठ",
            moderate: "मध्यम",
            weak: "हीन"
        },
        swar: {
            title: "स्वर शास्त्र",
            breathScience: "स्वरोदय विज्ञान",
            nameScience: "अक्षर स्वर विज्ञान",
            activeNostril: "सक्रिय नासिका",
            leftNostril: "बायाँ (इड़ा)",
            rightNostril: "दायाँ (पिंगला)",
            bothNostrils: "दोनों (सुषुम्ना)",
            tattva: "सक्रिय तत्व",
            quality: "प्रवाह गुणवत्ता",
            guidance: "दिव्य मार्गदर्शन",
            favorable: "शुभ गतिविधियाँ",
            unfavorable: "वर्जित गतिविधियाँ",
            searchName: "नाम से नक्षत्र खोजें",
            enterNamePlaceholder: "पहला नाम दर्ज करें (जैसे, रमेश)",
            findSound: "ब्रह्मांडीय ध्वनि खोजें",
            soundResults: "ध्वनि विश्लेषण परिणाम",
            syllable: "प्रथम अक्षर",
            rulingPlanet: "स्वामी ग्रह",
            aligned: "प्रवाह संरेखित",
            reversed: "प्रवाह विपरीत",
            excellent: "अति उत्तम",
            good: "उत्तम",
            average: "औसत",
            cautious: "सावधान"
        },
        samaychakra: {
            title: "समयचक्र",
            wheelOfTime: "समय का पहिया",
            animationSubtitle: "इंटरैक्टिव साइडरिल ग्रहीय एनीमेशन",
            loadingData: "एफ़ेमेरिस डेटा लोड हो रहा है...",
            speed: "एनीमेशन गति",
            minsSec: "मिनट/सेकंड",
            hrsSec: "घंटे/सेकंड",
            daysSec: "दिन/सेकंड",
            play: "चलाएं",
            pause: "रोकें",
            reset: "रीसेट",
            realTimePanchang: "वास्तविक समय पंचांग",
            currentAlignment: "सिम्युलेटेड समय के आधार पर वर्तमान स्थिति।",
            planetaryAspects: "ग्रहीय दृष्टियां",
            aspectsDesc: "राशियों और नक्षत्रों में ग्रहों की गति देखें। आंतरिक चक्र 27 नक्षत्रों को दर्शाता है, जबकि बाहरी चक्र 12 राशियों को दर्शाता है।",
            vakriIndicator: "वक्री ग्रह लाल घेरे और (v) से चिह्नित हैं",
            dailySpeeds: "दैनिक गति स्केल्ड है",
            siderealOffsets: "लाहिड़ी अयनमंश पर आधारित",
            simulatedActiveTime: "सिम्युलेटेड सक्रिय समय",
            calculatingCelestial: "ग्रहों की स्थिति की गणना की जा रही है...",
            left: "शेष"
        },
        puja: {
            virtualMandir: "वर्चुअल मंदिर",
            interactivePujaExp: "इंटरैक्टिव पूजा अनुभव",
            digitalDevotion: "डिजिटल भक्ति",
            performSacredPuja: "पवित्र पूजा करें",
            performSacredPujaDesc: "अपनी पूजा विधि चुनें, अपने देवता का आह्वान करें, और इंटरैक्टिव एनिमेशन के माध्यम से दिव्य प्रार्थनाएं अर्पित करें।",
            invoking: "{deity} का आह्वान किया जा रहा है...",
            confirmed: "दिव्य उपस्थिति का आह्वान सफल",
            selectDeity: "आह्वान करने के लिए देवता चुनें",
            selectPujaType: "पूजा प्रकार चुनें",
            summonYourDeity: "अपने देवता का आह्वान करें",
            enterDeityName: "देवता का नाम दर्ज करें (जैसे, गणेश, कृष्ण, दुर्गा)",
            changeDeityOrMode: "देवता या मोड बदलें",
            myDeities: "मेरे देवता",
            uploadImage: "फोटो अपलोड करें",
            uploadInstruction: "पूजा करने के लिए अपनी खुद की मूर्तियों की तस्वीरें अपलोड करें।",
            pujaWord: "पूजा",
            panchopachar: "पंचोपचार",
            shodashopachar: "षोडशोपचार",
            rajopachar: "राजोपचार",
            player: {
                comingSoon: "इस देवता के लिए मन्त्र डेटा जल्द आ रहा है।",
                completed: "पूजा संपन्न हुई!",
                blessing: "भगवान {deity} आपको सुख-शांति और समृद्धि प्रदान करें।",
                prasad: "प्रसाद",
                prasadOffered: "वर्चुअल प्रसाद अर्पित कर दिया गया है।",
                returnToMandir: "मंदिर में वापस जाएं",
                step: "चरण",
                of: "/",
                collapse: "छोटा करें",
                expand: "विस्तार करें / पूरा पढ़ें",
                previous: "पिछला",
                next: "अगला",
                finish: "समाप्त"
            },
            modes: {
                panchopachar: {
                    subtitle: "5 उपचार",
                    description: "त्वरित दैनिक भक्ति",
                    time: "~5 मिनट"
                },
                shodashopachar: {
                    subtitle: "16 उपचार",
                    description: "पारंपरिक पूर्ण अनुष्ठान",
                    time: "~15 मिनट"
                },
                rajopachar: {
                    subtitle: "राजसी सम्मान",
                    description: "भव्य समारोह पूजा",
                    time: "~30 मिनट"
                }
            },
            offerings: {
                avahan: { name: "आवाहन", meaning: "मैं दिव्य उपस्थिति का आह्वान करता हूँ।" },
                asana: { name: "आसन", meaning: "मैं देवता को आसन अर्पित करता हूँ।" },
                padya: { name: "पाद्य", meaning: "मैं प्रभु के चरण कमलों को धोता हूँ।" },
                arghya: { name: "अर्घ्य", meaning: "मैं शुद्धि के लिए जल अर्पित करता हूँ।" },
                achamana: { name: "आचमन", meaning: "मैं आचमन के लिए जल अर्पित करता हूँ।" },
                snana: { name: "स्नान", meaning: "मैं पवित्र स्नान कराता हूँ।" },
                vastra: { name: "वस्त्र", meaning: "मैं दिव्य वस्त्र अर्पित करता हूँ।" },
                yajnopavita: { name: "यज्ञोपवीत", meaning: "मैं जनेऊ अर्पित करता हूँ।" },
                gandha: { name: "गंध", meaning: "मैं चंदन का लेप अर्पित करता हूँ।" },
                kumkum: { name: "कुंकुम", meaning: "मैं पवित्र लाल चूर्ण अर्पित करता हूँ।" },
                pushpa: { name: "पुष्प", meaning: "मैं ताजे फूल अर्पित करता हूँ।" },
                dhoop: { name: "धूप", meaning: "मैं सुगंधित धूप अर्पित करता हूँ।" },
                deep: { name: "दीप", meaning: "मैं दिव्य ज्योति दिखाता हूँ।" },
                naivedya: { name: "नैवेद्य", meaning: "मैं पवित्र भोजन अर्पित करता हूँ।" },
                tambula: { name: "ताम्बूल", meaning: "मैं पान अर्पित करता हूँ।" },
                karpura: { name: "कर्पूर", meaning: "मैं कर्पूर आरती करता हूँ।" },
                bell: { name: "घंटी", meaning: "मैं दिव्यता को आमंत्रित करने के लिए घंटी बजाता हूँ।" },
                namaskara: { name: "नमस्कार", meaning: "मैं समर्पण भाव से नमन करता हूँ।" },
                abhishek: { name: "अभिषेक", meaning: "पंचामृत से भव्य शाही स्नान।" },
                alankara: { name: "आभूषण", meaning: "देवता को राजसी आभूषणों से सजाना।" },
                chhatra: { name: "छत्र", meaning: "देवता पर शाही छत्र धारण करना।" },
                chamar: { name: "चामर", meaning: "राजसी चामर सेवा।" },
                sangeet: { name: "भक्ति संगीत", meaning: "दिव्य गायन और संगीत की प्रस्तुति।" },
                bhog: { name: "विशेष भोग", meaning: "शाही दावत का भोग।" },
                shayana: { name: "शयन व्यवस्था", meaning: "आराम के लिए शाही शय्या तैयार करना।" }
            },
            toolbar: {
                title: "उपचार",
                completed: "पूर्ण"
            }
        },
        muhurta: {
            title: "मुहूर्त चिंतामणि",
            subtitle: "वैदिक चुनाव ज्योतिष",
            quote: "शुभ समय में किए गए कार्य उपजाऊ मिट्टी में बोए गए बीज की तरह फल देते हैं।",
            findBtn: "शुभ समय खोजें",
            categories: {
                samskara: { title: "संस्कार मुहूर्त", subtitle: "जीवन संस्कार", desc: "नामकरण, अन्नप्राशन आदि के लिए शुभ समय।" },
                vivaha: { title: "विवाह मुहूर्त", subtitle: "विवाह और संबंध", desc: "वैवाहिक स्थिरता के लिए मिलान और मुहूर्त।" },
                vastu: { title: "वास्तु और संपत्ति", subtitle: "निर्माण और प्रवेश", desc: "गृह एंव भूमि पूजन के लिए शुभ समय।" },
                artha: { title: "अर्थ और करियर", subtitle: "धन और व्यापार", desc: "व्यापार, निवेश और नौकरी के लिए मुहुर्त।" },
                yatra: { title: "यात्रा मुहूर्त", subtitle: "यात्रा और प्रवास", desc: "दिशा शूल और शुभ यात्रा के लिए समय।" },
                adhyatmika: { title: "आध्यात्मिक", subtitle: "दीक्षा और यज्ञ", desc: "मंत्र सि सिद्धि, यज्ञ और मूर्ति प्रतिष्ठा।" },
                karya: { title: "कार्य मुहूर्त", subtitle: "कठिन कार्य", desc: "सर्जरी, कोर्ट-कचहरी और शत्रु विजय।" }
            },
            finder: {
                back: "श्रेणियों पर वापस जाएं",
                type: "मुहूर्त प्रकार",
                location: "स्थान",
                startDate: "आरंभ तिथि",
                endDate: "अंतिम तिथि",
                scanBtn: "शास्त्रीय स्कैन शुरू करें",
                scanning: "शास्त्रीय ग्रंथों का परामर्श...",
                resultsTitle: "शास्त्रीय विश्लेषण परिणाम",
                evaluated: "{n} मुहूर्त विंडोज का मूल्यांकन",
                noResults: "कोई अत्यधिक शुभ समय नहीं मिला।",
                noResultsDesc: "सितारे प्रतीक्षा करने का सुझाव देते हैं। कृपया तारीख बढ़ाएं।",
                showAdvanced: "उन्नत सेटिंग्स दिखाएं",
                hideAdvanced: "उन्नत सेटिंग्स छिपाएं",
                vivahaSettings: "विवाह सेटिंग्स",
                includeKharmas: "खरमास तिथियां शामिल करें (आपातकालीन)",
                kharmasDesc: "धनु/मीन राशि में सूर्य के दौरान तिथियों की अनुमति दें (आमतौर पर निषिद्ध)।",
                noAdvanced: "इस श्रेणी के लिए अभी कोई उन्नत सेटिंग्स उपलब्ध नहीं हैं।",
                regionalPref: "क्षेत्रीय वरीयता",
                amanta: "अमांत (दक्षिण/पश्िचम)",
                purnimanta: "पूर्णिमांत (उत्तर)",
                comingSoon: "अधिक उन्नत सेटिंग्स जल्द आ रही हैं।",
                calculate: "गणना करें",
                personalize: "व्यक्तिगत परिणाम",
                personalizeDesc: "तारा-बल और चंद्र-बल के लिए जन्म विवरण शामिल करें",
                janmaNakshatra: "जन्म नक्षत्र",
                janmaRashi: "जन्म राशि",
                shastricAuthority: "मुहूर्त चिंतामणि और कलाप्रकाशिका के सिद्धांतों पर आधारित।"
            },
            result: {
                title: "मुहूर्त परिणाम",
                score: "अंक",
                pros: "शुभ कारक",
                cons: "अशुभ कारक/सावधानियां",
                moonStatus: "चंद्र बल",
                panchang: "पंचांग",
                moon: "चंद्र",
                lagna: "लग्न",
                event: "विषय",
                dosha: "दोष",
                personal: "व्यक्तिगत",
                noResults: "इस अवधि में कोई शुभ मुहूर्त नहीं मिला।"
            },
            types: {
                GARBHADHANA: "गर्भाधान",
                PUMSAVANA: "पुंसवन",
                SIMANTONNAYANA: "सीमंतोन्नयन",
                JATAKARMA: "जातकर्म",
                NAMAKARANA: "नामकरण",
                ANNAPRASHANA: "अन्नप्राशन",
                CHUDAKARANA: "चूडाकरण (मुंडन)",
                KARNAVEDHA: "कर्णवेध",
                UPANAYANA: "उपनयन",
                VIDYARAMBHA: "विद्यारंभ",
                SAMAVARTANA: "समावर्तन",
                VIVAHA: "विवाह",
                NISCHAYA_TAMBULAM: "सगाई (निश्चय)",
                VARA_PREKSHANA: "वर प्रेक्षण",
                ALLIANCE_FIXING: "संबंध पक्का करना",
                MARRIAGE_REGISTRATION: "विवाह पंजीकरण",
                BHOOMI_PUJAN: "भूमि पूजन",
                SHILA_NYASA: "शिलान्यास",
                GRIHA_ARAMBHA: "गृह आरंभ",
                DWARA_PRAVESHA: "द्वार प्रवेश",
                GRIHA_PRAVESH: "गृह प्रवेश",
                VASTU_SHANTI: "वास्तु शांति",
                RENOVATION: "नवीनीकरण",
                VYAPARA_ARAMBHA: "व्यापार आरंभ",
                DHANA_NIVESHA: "धन निवेश",
                LEKHA_ARAMBHA: "लेखा आरंभ",
                CONTRACT_SIGNING: "अनुबंध हस्ताक्षर",
                JOB_JOINING: "नौकरी जॉइनिंग",
                PROMOTION_ACCEPTANCE: "पदोन्नति स्वीकार",
                FIRST_SALARY: "प्रथम वेतन",
                GOLD_PURCHASE: "स्वर्ण क्रय",
                YATRA_ARAMBHA: "यात्रा आरंभ",
                DISHA_YATRA: "दिशा यात्रा",
                VIDESHA_YATRA: "विदेश यात्रा",
                PILGRIMAGE: "तीर्थ यात्रा",
                DEITY_PRATISHTHA: "मूर्ति प्रतिष्ठा",
                YAJNA: "यज्ञ / होम",
                MANTRA_DIKSHA: "मंत्र दीक्षा",
                GURU_DIKSHA: "गुरु दीक्षा",
                VRATA_ARAMBHA: "व्रत आरंभ",
                TEMPLE_OPENING: "मंदिर उद्घाटन",
                SURGERY: "शल्य चिकित्सा (सर्जरी)",
                LITIGATION_FILING: "मुकदमा दायर",
                DEBT_RECOVERY: "ऋण वसूली",
                CONFLICT_INITIATION: "संघर्ष प्रारंभ",
                EDUCATION_EXAM: "परीक्षा"
            }
        },
        matching: {
            title: "कुंडली मिलान (गुण मिलन)",
            kootaNames: {
                varna: "वर्ण",
                vashya: "वश्य",
                tara: "तारा",
                yoni: "योनि",
                grahaMaitri: "ग्रह मैत्री",
                gana: "गण",
                bhakoot: "भकूट",
                nadi: "नाड़ी"
            },
            subtitle: "वैदिक अनुकूलता विश्लेषण",
            boyDetails: "वर का विवरण",
            girlDetails: "वधू का विवरण",
            name: "नाम",
            date: "जन्म तिथि",
            time: "समय",
            location: "स्थान",
            matchBtn: "मिलान करें",
            score: "कुल अंक",
            compatibility: "अनुकूलता",
            kootas: "अष्टकूट विवरण",
            area: "क्षेत्र",
            obtained: "प्राप्तांक",
            max: "अधिकतम",
            desc: "विवरण",
            dosha: "दोष / परिहार",
            analysis: "ज्योतिषीय नोट",
            compatible: "सुयोग्य मिलान",
            notCompatible: "न्यून अनुकूलता",
            compatibleMsg: "कुंडली में विवाह के लिए अच्छी अनुकूलता है। नाड़ी और भकूट जैसे प्रमुख क्षेत्रों को प्राथमिकता दी जानी चाहिए।",
            notCompatibleMsg: "अनुकूलता अंक पारंपरिक सीमा से कम है। हम साफ़ कहेंगे की आगे बढ़ने से पहले विशिष्ट दशा अवधि और 7वें भाव का गहरा विश्लेषण करवाएं।",
            cancellationMsg: "* महत्वपूर्ण: कुछ पारंपरिक दोष पाए गए लेकिन मजबूत ग्रह स्थितियों द्वारा रद्द कर दिए गए। यह रिश्ते में लचीलेपन का सकारात्मक संकेत है।",
            backToKundli: "कुंडली पर वापस जाएं",
            placeOfBirth: "जन्म स्थान",
            analyzing: "विश्लेषण हो रहा है...",
            mangalDoshaReport: "उन्नत मंगल दोष (शास्त्रीय) रिपोर्ट",
            activeDosha: "सक्रिय दोष",
            cancelledParihar: "रद्द (परिहार)",
            cancellationFactors: "रद्द करने के कारक:",
            nonManglik: "गैर-मांगलिक ✓",
            finalRecommendation: "अंतिम सिफारिश:",
            cancelled: "रद्द",
            doshaPresent: "दोष मौजूद"
        },
        rashiNames: [
            "मेष", "वृषभ", "मिथुन", "कर्क",
            "सिंह", "कन्या", "तुला", "वृश्चिक",
            "धनु", "मकर", "कुंभ", "मीन"
        ]
    },
    gu: {
        appTitle: "હિન્દુ પંચાંગ",
        subtitle: "વૈદિક કેલેન્ડર",
        listView: "યાદી",
        gridView: "ગ્રિડ",
        time: "સમય",
        quality: "ગુણવત્તા",
        location: "મુંબઈ, ભારત",
        aajKaPanchang: "આજનું પંચાંગ",
        tithi: "તિથિ",
        nakshatra: "નક્ષત્ર",
        yoga: "યોગ",
        karana: "કરણ",
        paksha: "પક્ષ",
        endsAt: "સમાપ્ત",
        celestialTimings: "ખગોળીય સમય",
        sunrise: "સૂર્યોદય",
        sunset: "સૂયસ્ત",
        moonrise: "ચંદ્રોદય",
        moonset: "ચંદ્રાસ્ત",
        shubhMuhurat: "શુભ મુહૂર્ત",
        inauspicious: "અશુભ સમય",
        rahuKalam: "રાહુ કાળ",
        yamaganda: "યમગંડ",
        gulikai: "ગુલિક કાળ",
        abhijit: "અભિજિત",
        unknown: "અજ્ઞાત",
        upcomingFestivals: "આગામી તહેવારો",
        viewCalendar: "સંપૂર્ણ કેલેન્ડર જુઓ",
        backToToday: "આજ પર પાછા જાઓ",
        monthlyPanchang: "માસિક પંચાંગ",
        sunSign: "સૂર્ય રાશિ",
        moonSign: "ચંદ્ર રાશિ",
        planetarySigns: "ગ્રહ રાશિઓ",
        festivals: {
            vrat: "વ્રત",
            festival: "તહેવાર"
        },
        samvat: {
            vikram: "વિક્રમ સંવત",
            shaka: "શક સંવત",
            samvatsara: "સંવત્સર"
        },
        astronomy: "ખગોળ વિજ્ઞાન",
        days: ["રવિ", "સોમ", "મંગળ", "બુધ", "ગુરુ", "શુક્ર", "શનિ"],
        panchang: {
            advancedPanchang: "અદ્યતન પંચાંગ",
            detailedTimings: "વિગતવાર સમય અને દોષ",
            fiveLimbs: "પંચાંગ (પાંચ અંગ)",
            sunRashi: "સૂર્ય રાશિ",
            moonRashi: "ચંદ્ર રાશિ",
            importantTimings: "મહત્વપૂર્ણ સમય",
            yogasAndDoshas: "યોગ અને દોષ",
            noAuspiciousYogas: "આજે કોઈ ખાસ શુભ યોગ નથી.",
            panchak: "પંચક",
            bhadra: "ભદ્રા",
            endsAt: "સમાપ્તિ",
            fullDay: "આખો દિવસ"
        },
        home: {
            panchangAdhyaya: "પંચાંગ અધ્યાય",
            acharyasNote: "આચાર્યની નોંધ",
            upasanaFestivals: "ઉપાસના અને તહેવારો",
            viewMuhurat: "મુહૂર્ત જુઓ",
            regularObservation: "સામાન્ય અવલોકન",
            noMajorFestivals: "કોઈ મુખ્ય તહેવાર નથી",
            performDailyPuja: "દૈનિક પૂજા કરો",
            digitallyWorship: "ડિજિટલ પૂજા",
            festivalToday: "આજનો તહેવાર",
            endsAt: "સમાપ્તિ:",
            choghadiyaTitle: "આજનો ચોઘડિયા",
            purpose: "હેતુ",
            logic: "તર્ક",
            benefit: "લાભ",
            acharyaNoteTemplate: "{nakshatra} નક્ષત્રમાં ચંદ્રની હાજરી આજે સ્થિરતા અને શુભ ઉર્જા લાવી રહી છે. આ નવા નિર્માણ અથવા બીજારોપણ (શાબ્દિક અને લાક્ષણિક બંને) માટે શુભ સમય છે."
        },
        month: "મહિનો",
        ruling: "અધિપતિ",
        var: "વાર",
        suryoday: "સૂર્યોદય",
        suryast: "સૂર્યાસ્ત",
        chandroday: "ચંદ્રોદય",
        chandrast: "ચંદ્રાસ્ત",
        dailyRituals: "દૈનિક પૂજા",
        morningPuja: "સવારની પૂજા",
        morningPujaDesc: "ગણેશજીના આશીર્વાદથી દિવસની શરૂઆત કરો।",
        viewVidhi: "વિધિ જુઓ",
        choghadiya: "ચોઘડિયા",
        choghadiyaDesc: "આજના શુભ મુહૂર્ત જાણો.",
        checkTimings: "સમય જુઓ",
        todaysFestivals: "આજના તહેવારો",
        celebration: "ઉત્સવ",
        noFestivalsToday: "આજે કોઈ ખાસ તહેવાર નથી. આત્મ-ચિંતનનો દિવસ.",
        viewAll: "બધા જુઓ",
        auspiciousYogas: "શુભ યોગ",
        warnings: "ચેતવણી",
        dailyInsight: "દૈનિક અંતર્દૃષ્ટિ",
        poweredByGemini: "Gemini AI દ્વારા સંચાલિત",
        loading: "ખગોળીય ડેટા લોડ થઈ રહ્યો છે...",
        dashboard: {
            divineTimings: "દિવ્ય મુહૂર્ત",
            subtitle: "મુહૂર્ત અને ચોઘડિયા ડેશબોર્ડ",
            specialYogas: "વિશેષ યોગ",
            lagnaShuddhi: "લગ્ન શુદ્ધિ",
            majorDoshas: "મુખ્ય દોષ",
            choghadiyaNames: {
                Amrit: "અમૃત",
                Shubh: "શુભ",
                Labh: "લાભ",
                Chal: "ચલ",
                Udveg: "ઉદવેગ",
                Rog: "રોગ",
                Kal: "કાલ"
            },
            personalFocus: "વ્યક્તિગત ફોકસ",
            taraBalaCalculator: "તારા બળ કેલ્ક્યુલેટર",
            selectBirthStar: "તમારું જન્મ નક્ષત્ર પસંદ કરો",
            chooseNakshatra: "નક્ષત્ર પસંદ કરો",
            dayChoghadiya: "દિવસનું ચોઘડિયું",
            nightChoghadiya: "રાત્રિનું ચોઘડિયું",
            dayHora: "દિવસની હોરા",
            nightHora: "રાત્રિની હોરા",
            hora: "હોરા",
            activities: "શ્રેષ્ઠ પ્રવૃત્તિઓ",
            lord: "સ્વામી",
            auspicious: "શુભ",
            inauspicious: "અશુભ",
            horaActivities: {
                Sun: "સત્તા, સરકારી કાર્ય",
                Moon: "મુસાફરી, લાગણીઓ",
                Mars: "સ્પર્ધા, સર્જરી",
                Mercury: "વ્યવસાય, સંચાર",
                Jupiter: "શિક્ષણ, નાણાં",
                Venus: "લગ્ન, લક્ઝરી",
                Saturn: "જમીન, શિસ્ત"
            },
            noPanchak: "પંચક નથી (શુભ)",
            noBhadra: "ભદ્રા નથી (શુભ)",
            planetsVisible: "ગ્રહો દ્રશ્યમાન (શુભ)",
            tara: {
                janma: { name: "જન્મ", desc: "શરીર/મનને કષ્ટ" },
                sampat: { name: "સંપત", desc: "ધન અને સમૃદ્ધિ" },
                vipat: { name: "વિપત", desc: "જોખમ અને નુકસાન" },
                kshema: { name: "ક્ષેમ", desc: "કલ્યાણ અને સલામતી" },
                pratyak: { name: "પ્રત્યક", desc: "અવરોધો અને વિરોધ" },
                sadhana: { name: "સાધન", desc: "સફળતા અને સિદ્ધિ" },
                naidhana: { name: "નૈધન", desc: "ગંભીર જોખમ" },
                mitra: { name: "મિત્ર", desc: "મિત્રતા અને મદદ" },
                paramamitra: { name: "પરમ મિત્ર", desc: "ગાઢ મિત્રતા" }
            }
        },
        remedies: {
            title: "ઉપલબ્ધ ઉપાયો",
            subtitle: "શાંતિ, સ્વાસ્થ્ય અને સમૃદ્ધિ માટે વાસ્તુ, રત્ન શાસ્ત્ર અને મંત્ર વિદ્યાના પ્રાચીન ઉકેલો શોધો.",
            explore: "વધુ જુઓ",
            shastraPraman: "શાસ્ત્ર પ્રમાણ",
            benefits: "લાભ",
            vidhi: "વિધિ (પદ્ધતિ)",
            dashboardTitle: "તમારું વ્યક્તિગત ઉપચાર ડેશબોર્ડ",
            specialCrisis: "વિશેષ સંકટ નિવારણ",
            direction: "દિશા",
            stressIndex: "તણાવ સૂચકાંક",
            rudrakshaSuggestion: "રુદ્રાક્ષ સૂચન",
            yantraPlacement: "યંત્ર અને સ્થાપન",
            mantraMala: "મંત્ર અને માળા",
            analysisReasoning: "વિશ્લેષણનું તર્ક",
            safeguardAlert: "સુરક્ષા એલર્ટ",
            safeguardDesc: "આ સ્થિતિ માટે રત્ન પ્રતિબંધિત છે.",
            priority: "પ્રાથમિકતા",
            bead: "મુખી",
            countPrefix: "જાપ: 108 વાર",
            malaSuffix: "માળા સાથે",
            metals: {
                Copper: "તાંબુ",
                Silver: "ચાંદી",
                Gold: "સોનું",
                Brass: "પીતળ",
                Iron: "લોખંડ",
                "Gold/Brass": "સોનું/પીતળ",
                "Panchdhatu": "પંચધાતુ"
            },
            directions: {
                East: "પૂર્વ",
                West: "પશ્ચિમ",
                North: "ઉત્તર",
                South: "દક્ષિણ",
                "North-East": "ઉત્તર-પૂર્વ (ઈશાન)",
                "North-West": "ઉત્તર-પશ્ચિમ (વાયવ્ય)",
                "South-East": "દક્ષિણ-પૂર્વ (આગ્નેય)",
                "South-West": "દક્ષિણ-પશ્ચિમ (નૈઋત્ય)"
            },
            analyzeEnergies: "તમારી વ્યક્તિગત ઉર્જાનું વિશ્લેષણ કરો",
            analyzeEnergiesDesc: "ગ્રહોના દોષોને સમજવા અને તમારા આત્માને અનુરૂપ ચોક્કસ વૈદિક ઉપાયો મેળવવા માટે તમારી જન્મ કુંડળીનું વિશ્લેષણ કરો.",
            startAnalysis: "મારું વિશ્લેષણ શરૂ કરો"
        },
        kundli: {
            soulSystemOnline: "આત્મા સિસ્ટમ સક્રિય",
            cosmicBlueprint: "બ્રહ્માંડીય નકશો",
            cosmicBlueprintDesc: "જન્મ સમયની ગ્રહ સ્થિતિ જાણવા માટે વિગતો દાખલ કરો.",
            identitySequence: "ઓળખ ક્રમ",
            enterFullDesignation: "પૂરું નામ દાખલ કરો",
            temporalPoint: "જન્મ તારીખ",
            chronos: "જન્મ સમય",
            spatialCoordinates: "સ્થાન નિર્દેશાંકો",
            latitudeForm: "અક્ષાંશ (Latitude)",
            longitudeForm: "રેખાંશ (Longitude)",
            citySearch: "શહેર શોધો",
            autoDetect: "સ્થાન આપમેળે શોધો",
            autoDetectDesc: "મૂળભૂત રીતે મુંબઈ (19.07, 72.87). શોધવા માટે 'સ્થાન આપમેળે શોધો' પર ક્લિક કરો.",
            rawLongitude: "સ્પષ્ટ રેખાંશ",
            latitudeShara: "અક્ષાંશ/શર",
            rightAscension: "વિષુવાંશ (RA)",
            declination: "ક્રાંતિ (Decl.)",
            lagnaChartDesc: "લગ્ન કુંડળી ભૌતિક શરીર અને સામાન્ય ભાગ્ય દર્શાવે છે.",
            navamsaChartDesc: "નવાંશ કુંડળી આંતરિક શક્તિ અને વૈવાહિક સુખ દર્શાવે છે.",
            geospatialLock: "ભૂ-સ્થાન: મુંબઈ (ડિફૉલ્ટ)",
            computingAlignments: "ગ્રહ ગણતરી ચાલુ છે...",
            initiateLaunchSequence: "કુંડળી બનાવો",
            reCalibrate: "ફરીથી સેટ કરો",
            chartId: "ચાર્ટ ID",
            body: "ગ્રહ",
            rashi: "રાશિ",
            deg: "અંશ",
            chronometerSync: "સમય અંશાંકન",
            initializingSystem: "સિસ્ટમ શરૂ...",
            generateBlueprint: "નકશો બનાવો",
            newAnalysis: "નવી ગણતરી",
            graha: "ગ્રહ",
            longitude: "રેખાંશ",
            nakshatra: "નક્ષત્ર",
            lord: "સ્વામી",
            pada: "પદ",
            status: "સ્થિતિ",
            birthDetails: "જન્મ વિગત",
            ayanamsa: "અયનાંશ",
            ascendant: "લગ્ન (ASC)",
            cosmicInsight: "બ્રહ્માંડીય આંતરદૃષ્ટિ",
            planetaryPositions: "ગ્રહોની સ્થિતિ",
            openChart: "પત્રક જુઓ",
            matchmaking: "ગુણ મિલાન",
            retrograde: "વક્રી",
            combust: "અસ્ત",
            lagnaChart: "લગ્ન કુંડળી (D1)",
            navamsaChart: "નવાંશ કુંડળી (D9)",
            chalitChart: "ચલિત કુંડળી",
            moonChart: "ચંદ્ર કુંડળી",
            birthStar: "જન્મ નક્ષત્ર",
            birthRashi: "જન્મ રાશિ",
            tithi: "જન્મ તિથિ",
            gan: "ગણ",
            yoni: "યોનિ",
            nadi: "નાડી",
            varna: "વર્ણ",
            vimshottariDasha: "વિંશોત્તરી દશા (જીવન ચક્ર)",
            mahadasha: "મહાદશા",
            years: "વર્ષ",
            start: "શરૂઆત",
            end: "અંત",
            current: "વર્તમાન",
            dashaDesc: "* આગાહીઓ જન્મ સમયે ચંદ્રના નક્ષત્ર પર આધારિત છે (વિંશોત્તરી પદ્ધતિ).",
            noYogas: "કોઈ મુખ્ય યોગો મળ્યા નથી.",
            noYogasDesc: "આનો અર્થ એ નથી કે કુંડળી નબળી છે! ઘણી શક્તિઓ સૂક્ષ્મ હોય છે.",
            auspiciousYogas: "શુભ યોગો (શક્તિઓ)",
            doshas: "દોષો (પડકારો)",
            simple: "સરળ",
            scholar: "વિદ્વાન",
            all: "બધા",
            conditionTrigger: "શરત ટ્રિગર",
            classicalAuthority: "શાસ્ત્રીય પ્રમાણ",
            chapter: "અધ્યાય",
            verse: "શ્લોક",
            consultingSages: "ઋષિઓ સાથે પરામર્શ કરવામાં આવી રહ્યો છે...",
            noClassicalPredictions: "સંશ્લેષણ માટે કોઈ શાસ્ત્રીય આગાહીઓ મળી નથી.",
            classicalSynthesis: "શાસ્ત્રીય સંશ્લેષણ",
            holisticAnalysisDesc: "BPHS અને ફલદીપિકાના નિયમોનું સર્વગ્રાહી વિશ્લેષણ.",
            aiSynthesis: "શાસ્ત્રીય નિયમો પર આધારિત AI સંશ્લેષણ",
            timeAndTiming: "સમય અને ટાઈમિંગ (ગોચર)",
            gochar: "ગોચર",
            gocharDesc: "વર્તમાન ગ્રહ દશા અને ગોચરનું વિશ્લેષણ.",
            currentDashaPeriod: "વર્તમાન મહાદશા સમયગાળો",
            planetaryTransits: "ગ્રહોનું ગોચર",
            noDashaEffects: "કોઈ વિશિષ્ટ દશા અસરો મળી નથી.",
            noMajorTransits: "આ સમયે કોઈ મોટા ગોચર મળ્યા નથી.",
            predictionsBasedOn: "ગ્રહોની સ્થિતિના આધારે આગાહીઓ:",
            high: "ઉચ્ચ",
            medium: "મધ્યમ",
            low: "નિમ્ન",
            intensityLabel: "તીવ્રતા",
            trigger: "ટ્રિગર",
            tabBasic: "મૂળભૂત",
            tabCharts: "ચાર્ટ",
            tabPlanets: "ગ્રહો",
            tabClassical: "શાસ્ત્રીય",
            tabYogas: "યોગ",
            tabDasha: "દશા",
            tabReport: "રિપોર્ટ",
            tabStrength: "શક્તિ",
            tabStrengthDesc: "ગ્રહ અને ભાવની શક્તિ વિશ્લેષણ",
            planets: {
                Sun: "સૂર્ય",
                Moon: "ચંદ્ર",
                Mars: "મંગળ",
                Mercury: "બુધ",
                Jupiter: "ગુરુ",
                Venus: "શુક્ર",
                Saturn: "શનિ",
                Rahu: "રાહુ",
                Ketu: "કેતુ",
                Uranus: "યુરેનસ",
                Neptune: "નેપ્ચ્યુન",
                Pluto: "પ્લુટો",
                Lagna: "લગ્ન",
                Ascendant: "લગ્ન"
            },
            planetAcronyms: {
                Sun: "સૂ",
                Moon: "ચં",
                Mars: "મં",
                Mercury: "બુ",
                Jupiter: "ગુ",
                Venus: "શુ",
                Saturn: "શ",
                Rahu: "રા",
                Ketu: "કે",
                Uranus: "યુ",
                Neptune: "ને",
                Pluto: "પ્લુટો"
            },
            vargaNames: {
                D1: "D1 - રાશિ (Rashi)",
                D2: "D2 - હોરા (Hora)",
                D3: "D3 - દ્રેષ્કાણ (Dreshkana)",
                D4: "D4 - ચતુર્થાંશ (Chaturthamsa)",
                D7: "D7 - સપ્તમાંશ (Saptamsha)",
                D9: "D9 - નવાંશ (Navamsha)",
                D10: "D10 - દશમાંશ (Dashamsha)",
                D12: "D12 - દ્વાદશાંશ (Dwadashamsha)",
                D16: "D16 - ષોડશાંશ (Shodashamsha)",
                D20: "D20 - વિંશાંશ (Vimshamsha)",
                D24: "D24 - ચતુર્વિંશાંશ (Chaturvimshamsha)",
                D27: "D27 - સપ્તવિંશાંશ (Saptavimshamsha)",
                D30: "D30 - ત્રિંશાંશ (Trimshamsha)",
                D40: "D40 - ખવેદાંશ (Khavedamsha)",
                D45: "D45 - અક્ષવેદાંશ (Akshavedamsha)",
                D60: "D60 - ષષ્ટ્યાંશ (Shashtiamsha)"
            },
            categories: {
                ALL: "બધા",
                PLANET_HOUSE: "ગ્રહ સ્થાન",
                YOGA: "યોગ",
                CONJUNCTION: "યુતિ",
                DASHA: "દશા",
                TRANSIT: "ગોચર"
            }
        },
        yogaIntelligence: {
            title: "યોગ અને દોષ ઇન્ટેલિજન્સ",
            lifeAreas: "જીવન ક્ષેત્ર મૂલ્યાંકન",
            activeYogas: "સક્રિય શાસ્ત્રીય યોગ",
            activeDoshas: "સક્રિય શાસ્ત્રીય દોષ",
            strength: "બળ/શક્તિ",
            intensity: "તીવ્રતા",
            neutralized: "નિષ્પ્રભાવી",
            impact: "પ્રભાવ ક્ષેત્ર",
            logic: "શાસ્ત્રીય તર્ક",
            areas: {
                Career: "કરિયર",
                Wealth: "ધન-સંપત્તિ",
                Marriage: "લગ્ન",
                Health: "સ્વાસ્થ્ય",
                Spiritual: "અધ્યાત્મ",
                Authority: "અધિકાર"
            },
            areaDescs: {
                Career: "વ્યાવસાયિક સફળતા અને સામાજિક સ્તર.",
                Wealth: "નાણાકીય સ્થિરતા અને સંપત્તિમાં વૃદ્ધિ.",
                Marriage: "ભાગીદારી અને સુખી લગ્ન જીવન.",
                Health: "શારીરિક અને માનસિક સુખાકારી.",
                Spiritual: "આંતરિક વિકાસ અને આધ્યાત્મિક ઉન્નતિ.",
                Authority: "સત્તા, નેતૃત્વ અને પ્રભાવ."
            }
        },
        rashiNames: [
            "મેષ", "વૃષભ", "મિથુન", "કર્ક",
            "સિંહ", "કન્યા", "તુલા", "વૃશ્ચિક",
            "ધન", "મકર", "કુંભ", "મીન"
        ],
        identify: {
            advancedAIVision: "એડવાન્સ AI વિઝન",
            title: "દેવતા ઓળખ",
            description: "કોઈપણ દેવતા, મૂર્તિ અથવા મંદિરની તસવીર અપલોડ કરો અને તેમના મહત્વ, ઇતિહાસ અને મંત્રો વિશે જાણો.",
            captureOrUpload: "ફોટો લો અથવા અપલોડ કરો",
            supportsFormats: "JPG, PNG અને HEIC સપોર્ટેડ",
            analysing: "દિવ્ય ઉપસ્થિતિનું વિશ્લેષણ...",
            identifyDeity: "દેવતાની ઓળખ કરો",
            confirmed: "ઓળખની પુષ્ટિ થઈ",
            keySymbol: "મુખ્ય પ્રતીક",
            tradition: "પરંપરા",
            mantrasWorship: "મંત્રો અને પૂજા",
            sacredChant: "પવિત્ર જાપ",
            identifyAnother: "બીજા દેવતાની ઓળખ કરો"
        },
        askPandit: {
            title: "પંડિત જીને પૂછો",
            subtitle: "AI-આધારિત આધ્યાત્મિક માર્ગદર્શન",
            placeholder: "આજના મુહૂર્ત વિશે કોઈ પ્રશ્ન પૂછો...",
            send: "મોકલો",
            thinking: "પંડિત જી વિચારી રહ્યા છે...",
            error: "માફ કરશો, તમારો પ્રશ્ન પ્રક્રિયા થઈ શક્યો નથી.",
            suggestions: "આ પૂછો:",
            open: "પંડિત જીને પૂછો",
            close: "બંધ કરો",
            welcome: "પંડિત જીને પૂછોમાં તમારું સ્વાગત છે",
            provideDetails: "સચોટ પ્રશ્ન કુંડળી અને આગાહીઓ માટે કૃપા કરીને તમારા જન્મની વિગતો આપો.",
            yourName: "તમારું નામ",
            enterName: "તમારું નામ લખો",
            rashi: "રાશિ",
            nakshatra: "નક્ષત્ર",
            startChat: "ચેટ શરૂ કરો",
            meditating: "પંડિત જી અત્યારે ધ્યાનમાં છે. કૃપા કરીને એક મિનિટ પછી ફરી પ્રયાસ કરો.",
            connectionError: "કનેક્શન ભૂલ: કૃપા કરીને ઇન્ટરનેટ તપાસો અને ફરી પ્રયાસ કરો।"
        },
        yearly: {
            title: "પંચાંગ દર્શન",
            subtitle: "વાર્ષિક તિથિઓ અને વ્રત",
            syncing: "દિવ્ય ગણતરી ચાલી રહી છે...",
            compiling: "{year} માટે {type}ની તિથિઓ તૈયાર થઈ રહી છે",
            noObservances: "કોઈ વ્રત/તહેવાર મળ્યા નથી",
            adjustFilters: "કૃપા કરીને ફિલ્ટર બદલો અથવા બીજું વર્ષ તપાસો",
            date: "તારીખ",
            day: "દિવસ",
            name: "નામ",
            month: "માસ",
            paksha: "પક્ષ",
            special: "વિશેષ",
            prevYear: "પાછલું વર્ષ",
            nextYear: "આગલું વર્ષ",
            vikramSamvat: "વર્ષ (વિક્રમ સંવત)",
            ekadashi: "એકાદશી",
            pradosh: "પ્રદોષ",
            sankashti: "સંકષ્ટી",
            purnima: "પૂર્ણિમા",
            amavasya: "અમાવસ્યા"
        },
        nav: {
            panchang: "પંચાંગ",
            muhurta: "મુહૂર્ત",
            calendar: "કેલેન્ડર",
            yearly: "વર્ષ",
            kundli: "કુંડળી",
            upasana: "ઉપાસના",
            remedies: "ઉપાય",
            puja: "પૂજા",
            samaychakra: "સમયચક્ર",
            prashnavali: "પ્રશ્નાવલી",
            swar: "સ્વર",
            ayurveda: "આયુર્વેદ",
            medical: "વૈદ્યકીય",
            store: "વૈદિક સ્ટોર"
        },
        prashna: {
            title: "શાસ્ત્રીય પ્રશ્ન",
            subtitle: "દિવ્ય હોરારી જ્યોતિષ",
            askQuestion: "દિવ્ય માર્ગદર્શન મેળવો",
            placeholder: "તમારો પ્રશ્ન લખો (દા.ત. શું મને નોકરી મળશે?)",
            analyze: "પ્રશ્ન કાલનું વિશ્લેષણ કરો",
            analyzing: "બ્રહ્માંડীয় સંરેખણની ગણતરી...",
            prediction: "દિવ્ય આગાહી",
            timing: "આધ્યાત્મિક સમય",
            yogas: "મહત્વપૂર્ણ તાજિક યોગ",
            favorable: "અનુકૂળ",
            unfavorable: "પ્રતિકૂળ",
            neutral: "તટસ્થ",
            mixed: "મિશ્રિત",
            delayed: "વિલંબિત",
            details: "વિગતવાર વિશ્લેષણ",
            moment: "પ્રશ્ન કાલ",
            location: "પ્રશ્ન સ્થાન"
        },
        shadbala: {
            title: "ગ્રહ બળ (ષડબલ)",
            sthana: "સ્થાન બળ",
            dig: "દિગ બળ",
            kala: "કાલ બળ",
            chesta: "ચેષ્ટા બળ",
            naisargika: "નૈસર્ગિક બળ",
            drik: "દ્રિક બળ",
            required: "જરૂરી",
            total: "કુલ",
            status: "સ્થિતિ",
            percentage: "ટકાવારી",
            virupa: "વિરુપા",
            rupas: "રૂપસ",
            description: "ષડબલ શાસ્ત્રીય ગ્રંથોમાં વ્યાખ્યાયિત 6 બ્રહ્માંડ પરિમાણોમાં ગ્રહની શક્તિની ગણતરી કરે છે.",
            analysisDetails: "વિશ્લેષણ વિગતો",
            strong: "બળવાન",
            moderate: "મધ્યમ",
            weak: "નિર્બળ"
        },
        swar: {
            title: "સ્વર શાસ્ત્ર",
            breathScience: "સ્વરોદય વિજ્ઞાન",
            nameScience: "અક્ષર સ્વર વિજ્ઞાન",
            activeNostril: "સક્રિય નાસિકા",
            leftNostril: "ડાબું (ઈડા)",
            rightNostril: "જમણું (પિંગલા)",
            bothNostrils: "બંને (સુષુમ્ણા)",
            tattva: "સક્રિય તત્વ",
            quality: "પ્રવાહ ગુણવત્તા",
            guidance: "દિવ્ય માર્ગદર્શન",
            favorable: "શુભ પ્રવૃત્તિઓ",
            unfavorable: "વર્જિત પ્રવૃત્તિઓ",
            searchName: "નામ પરથી નક્ષત્ર શોધો",
            enterNamePlaceholder: "પ્રથમ નામ લખો (દા.ત. રમેશ)",
            findSound: "બ્રહ્માંડীয় ધ્વનિ શોધો",
            soundResults: "ધ્વનિ વિશ્લેષણ પરિણામ",
            syllable: "પ્રથમ અક્ષર",
            rulingPlanet: "સ્વામી ગ્રહ",
            aligned: "પ્રવાહ સંરેખિત",
            reversed: "પ્રવાહ વિપરીત",
            excellent: "અતિ ઉત્તમ",
            good: "ઉત્તમ",
            average: "સરેરાશ",
            cautious: "સાવધાન"
        },
        samaychakra: {
            title: "સમયચક્ર",
            wheelOfTime: "સમયનું ચક્ર",
            animationSubtitle: "ઇન્ટરેક્ટિવ સાંકેતિક ગ્રહ એનિમેશન",
            loadingData: "એફેમેરિસ ડેટા લોડ થઈ રહ્યો છે...",
            speed: "એનિમેશન ગતિ",
            minsSec: "મિનિટ/સેકન્ડ",
            hrsSec: "કલાક/સેકન્ડ",
            daysSec: "દિવસ/સેકન્ડ",
            play: "ચલાવો",
            pause: "અટકાવો",
            reset: "રીસેટ",
            realTimePanchang: "રીઅલ-ટાઇમ પંચાંગ",
            currentAlignment: "સિમ્યુલેટેડ સમયના આધારે વર્તમાન સ્થિતિ.",
            planetaryAspects: "ગ્રહ દ્રષ્ટિ",
            aspectsDesc: "રાશિઓ અને નક્ષત્રોમાં ગ્રહોની ગતિ જુઓ. આંતરિક ચક્ર 27 નક્ષત્રો દર્શાવે છે, જ્યારે બહારનું ચક્ર 12 રાશિઓ દર્શાવે છે.",
            vakriIndicator: "વક્રી ગ્રહો લાલ વર્તુળ અને (v) થી ચિહ્નિત છે",
            dailySpeeds: "દૈનિક ગતિ સ્કેલ કરેલી છે",
            siderealOffsets: "લાહિરી અયનમંશ પર આધારિત",
            simulatedActiveTime: "સિમ્યુલેટેડ સક્રિય સમય",
            calculatingCelestial: "ગ્રહોની સ્થિતિની ગણતરી કરવામાં આવી રહી છે...",
            left: "બાકી"
        },
        puja: {
            virtualMandir: "વર્ચ્યુઅલ મંદિર",
            interactivePujaExp: "ઇન્ટરેક્ટિવ પૂજા અનુભવ",
            digitalDevotion: "ડિજિટલ ભક્તિ",
            performSacredPuja: "પવિત્ર પૂજા કરો",
            performSacredPujaDesc: "તમારી પૂજા વિધિ પસંદ કરો, તમારા દેવનું આહ્વાન કરો અને ઇન્ટરેક્ટિવ એનિમેશન દ્વારા દૈવી પ્રાર્થના અર્પણ કરો.",
            invoking: "{deity} નું આહ્વાન કરવામાં આવી રહ્યું છે...",
            confirmed: "દૈવી હાજરીનું આહ્વાન સફળ",
            selectDeity: "આહ્વાન કરવા માટે દેવ પસંદ કરો",
            selectPujaType: "પૂજા પ્રકાર પસંદ કરો",
            summonYourDeity: "તમારા દેવતાનું આહ્વાન કરો",
            enterDeityName: "દેવતાનું નામ દાખલ કરો (દા.ત. ગણેશ, કૃષ્ણ, દુર્ગા)",
            changeDeityOrMode: "દેવતા અથવા મોડ બદલો",
            myDeities: "મારા દેવતાઓ",
            uploadImage: "ફોટો અપલોડ કરો",
            uploadInstruction: "પૂજા કરવા માટે તમારી પોતાની મૂર્તિઓના ફોટા અપલોડ કરો.",
            pujaWord: "પૂજા",
            panchopachar: "પંચોપચાર",
            shodashopachar: "ષોડશોપચાર",
            rajopachar: "રાજૌપચાર",
            player: {
                comingSoon: "આ દેવતા માટે મંત્ર ડેટા જલ્દી આવી રહ્યો છે.",
                completed: "પૂજા સંપન્ન થઈ!",
                blessing: "ભગવાન {deity} તમને સુખ-શાંતિ અને સમૃદ્ધિ આપે.",
                prasad: "પ્રસાદ",
                prasadOffered: "વર્ચ્યુઅલ પ્રસાદ અર્પણ કરવામાં આવ્યો છે.",
                returnToMandir: "મંદિરમાં પાછા ફરો",
                step: "ચરણ",
                of: "/",
                collapse: "નાનું કરો",
                expand: "વિસ્તૃત કરો / પૂરું વાંચો",
                previous: "પાછળ",
                next: "આગળ",
                finish: "સમાપ્ત"
            },
            modes: {
                panchopachar: {
                    subtitle: "5 ઉપચાર",
                    description: "ઝડપી દૈનિક ભક્તિ",
                    time: "~5 મિનિટ"
                },
                shodashopachar: {
                    subtitle: "16 ઉપચાર",
                    description: "પરંપરાગત સંપૂર્ણ વિધિ",
                    time: "~15 મિનિટ"
                },
                rajopachar: {
                    subtitle: "શાહી સન્માન",
                    description: "ભવ્ય પૂજા વિધિ",
                    time: "~30 મિનિટ"
                }
            },
            offerings: {
                avahan: { name: "આવાહન", meaning: "હું દિવ્ય ઉપસ્થિતિનું આહ્વાન કરું છું." },
                asana: { name: "આસન", meaning: "હું દેવતાને આસન અર્પણ કરું છું." },
                padya: { name: "પાદ્ય", meaning: "હું ભગવાનના ચરણ કમળ ધોઉં છું." },
                arghya: { name: "અર્ધ્ય", meaning: "હું શુદ્ધિ માટે જળ અર્પણ કરું છું." },
                achamana: { name: "આચમન", meaning: "હું આચમન માટે જળ અર્પણ કરું છું." },
                snana: { name: "સ્નાન", meaning: "હું પવિત્ર સ્નાન કરાવું છું." },
                vastra: { name: "વસ્ત્ર", meaning: "હું દિવ્ય વસ્ત્રો અર્પણ કરું છું." },
                yajnopavita: { name: "યજ્ઞોપવીત", meaning: "હું જનોઈ અર્પણ કરું છું." },
                gandha: { name: "ગંધ", meaning: "હું ચંદનનો લેપ અર્પણ કરું છું." },
                kumkum: { name: "કુમકુમ", meaning: "હું પવિત્ર લાલ ચૂર્ણ અર્પણ કરું છું." },
                pushpa: { name: "પુષ્પ", meaning: "હું તાજા ફૂલો અર્પણ કરું છું." },
                dhoop: { name: "ધૂપ", meaning: "હું સુગંધિત ધૂપ અર્પણ કરું છું." },
                deep: { name: "દીપ", meaning: "હું દિવ્ય જ્યોત બતાવું છું." },
                naivedya: { name: "નૈવેદ્ય", meaning: "હું પવિત્ર ભોજન અર્પણ કરું છું." },
                tambula: { name: "તામ્બૂલ", meaning: "હું પાન અર્પણ કરું છું." },
                karpura: { name: "કપૂર", meaning: "હું કપૂર આરતી કરું છું." },
                bell: { name: "ઘંટ", meaning: "હું દિવ્યતાને આમંત્રિત કરવા માટે ઘંટ વગાડું છું." },
                namaskara: { name: "નમસ્કાર", meaning: "હું સમર્પણ ભાવથી નમન કરું છું." },
                abhishek: { name: "અભિષેક", meaning: "પંચામૃતથી ભવ્ય શાહી સ્નાન." },
                alankara: { name: "આભૂષણ", meaning: "દેવતાને શાહી આભૂષણોથી સજાવવા." },
                chhatra: { name: "છત્ર", meaning: "દેવતા પર શાહી છત્ર ધારણ કરવું." },
                chamar: { name: "ચામર", meaning: "શાહી ચામર સેવા." },
                sangeet: { name: "ભક્તિ સંગીત", meaning: "દિવ્ય ગાયન અને સંગીતની પ્રસ્તુતિ." },
                bhog: { name: "વિશેષ ભોગ", meaning: "શાહી મિજબાનીનો ભોગ." },
                shayana: { name: "શયન વ્યવસ્થા", meaning: "આરામ માટે શાહી શય્યા તૈયાર કરવી." }
            },
            toolbar: {
                title: "ઉપચાર",
                completed: "પૂર્ણ"
            }
        },
        muhurta: {
            title: "મુહૂર્ત ચિંતામણી",
            subtitle: "વૈદિક ચૂંટણી જ્યોતિષ",
            quote: "શુભ સમયમાં કરવામાં આવેલા કાર્યો ફળદ્રુપ જમીનમાં વાવેલા બીજની જેમ ફળ આપે છે.",
            findBtn: "શુભ સમય શોધો",
            categories: {
                samskara: { title: "સંસ્કાર મુહૂર્ત", subtitle: "જીવન સંસ્કાર", desc: "નામકરણ, અન્નપ્રાશન વગેરે માટે શુભ સમય." },
                vivaha: { title: "વિવાહ મુહૂર્ત", subtitle: "લગ્ન અને સંબંધ", desc: "વૈવાહિક સ્થિરતા માટે મિલાન અને મુહૂર્ત." },
                vastu: { title: "વાસ્તુ અને મિલકત", subtitle: "નિર્માણ અને પ્રવેશ", desc: "ગૃહ અને ભૂમિ પૂજન માટે શુભ સમય." },
                artha: { title: "અર્થ અને કારકિર્દી", subtitle: "ધન અને વેપાર", desc: "વેપાર, રોકાણ અને નોકરી માટે મુહૂર્ત." },
                yatra: { title: "યાત્રા મુહૂર્ત", subtitle: "મુસાફરી અને સ્થળાંતર", desc: "દિશા શૂલ અને શુભ યાત્રા માટેનો સમય." },
                adhyatmika: { title: "આધ્યાત્મિક", subtitle: "દીક્ષા અને યજ્ઞ", desc: "મંત્ર સિદ્ધિ, યજ્ઞ અને મૂર્તિ પ્રતિષ્ઠા." },
                karya: { title: "કાર્ય મુહૂર્ત", subtitle: "કઠિન કાર્યો", desc: "સર્જરી, કોર્ટ-કચેરી અને શત્રુ વિજય." }
            },
            finder: {
                back: "શ્રેણીઓ પર પાછા જાઓ",
                type: "મુહૂર્ત પ્રકાર",
                location: "સ્થાન",
                startDate: "શરૂઆતની તારીખ",
                endDate: "અંતિમ તારીખ",
                scanBtn: "શાસ્ત્રીય સ્કેન શરૂ કરો",
                scanning: "શાસ્ત્રીય ગ્રંથોની સલાહ...",
                resultsTitle: "શાસ્ત્રીય વિશ્લેષણ પરિણામો",
                evaluated: "{n} મુહૂર્ત વિન્ડોનું મૂલ્યાંકન",
                noResults: "કોઈ અત્યંત શુભ સમય મળ્યો નથી.",
                noResultsDesc: "તારાઓ રાહ જોવાનું સૂચન કરે છે. કૃપા કરીને તારીખ લંબાવો.",
                showAdvanced: "અદ્યતન સેટિંગ્સ બતાવો",
                hideAdvanced: "અદ્યતન સેટિંગ્સ છુપાવો",
                vivahaSettings: "વિવાહ સેટિંગ્સ",
                includeKharmas: "ખરમાસ તારીખો શામેલ કરો (કટોકટી)",
                kharmasDesc: "ધન/મીન રાશિમાં સૂર્ય દરમિયાન તારીખોની મંજૂરી આપો (સામાન્ય રીતે પ્રતિબંધિત).",
                noAdvanced: "આ શ્રેણી માટે હજુ સુધી કોઈ અદ્યતન સેટિંગ્સ ઉપલબ્ધ નથી.",
                regionalPref: "પ્રાદેશિક પસંદગી",
                amanta: "અમાંત (દક્ષિણ/પશ્ચિમ)",
                purnimanta: "પૂર્ણિમાંત (ઉત્તર)",
                comingSoon: "વધુ અદ્યતન સેટિંગ્સ ટૂંક સમયમાં આવી રહી છે.",
                calculate: "ગણતરી કરો",
                personalize: "વ્યક્તિગત પરિણામ",
                personalizeDesc: "તારા-બલ અને ચંદ્ર-બલ માટે જન્મ વિગતો શામેલ કરો",
                janmaNakshatra: "જન્મ નક્ષત્ર",
                janmaRashi: "જન્મ રાશિ",
                shastricAuthority: "મુહૂર્ત ચિંતામણી અને કલાપ્રકાશિકાના સિદ્ધાંતો પર આધારિત."
            },
            result: {
                score: "સ્કોર",
                shastricScore: "શાસ્ત્રીય સ્કોર",
                panchang: "પંચાંગ",
                moon: "ચંદ્ર",
                lagna: "લગ્ન",
                event: "વિશેષ",
                dosha: "દોષ",
                pros: "હકારાત્મક પાસાઓ",
                cons: "સાવચેતીઓ",
                moonStatus: "ચંદ્ર સ્થિતિ"
            },
            types: {
                GARBHADHANA: "ગર્ભાધાન",
                PUMSAVANA: "પુંસવન",
                SIMANTONNAYANA: "સીમંતોન્નયન",
                JATAKARMA: "જાતકર્મ",
                NAMAKARANA: "નામકરણ",
                ANNAPRASHANA: "અન્નપ્રાશન",
                CHUDAKARANA: "ચુડાકરણ (મુંડન)",
                KARNAVEDHA: "કર્ણવેધ",
                UPANAYANA: "ઉપનયન",
                VIDYARAMBHA: "વિદ્યારંભ",
                SAMAVARTANA: "સમાવર્તન",
                VIVAHA: "વિવાહ",
                NISCHAYA_TAMBULAM: "સગાઈ (નિશ્ચય)",
                VARA_PREKSHANA: "વર પ્રેક્ષણ",
                ALLIANCE_FIXING: "સંબંધ નક્કી કરવો",
                MARRIAGE_REGISTRATION: "લગ્ન નોંધણી",
                BHOOMI_PUJAN: "ભૂમિ પૂજન",
                SHILA_NYASA: "શિલાન્યાસ",
                GRIHA_ARAMBHA: "ગૃહ આરંભ",
                DWARA_PRAVESHA: "દ્વાર પ્રવેશ",
                GRIHA_PRAVESH: "ગૃહ પ્રવેશ",
                VASTU_SHANTI: "વાસ્તુ શાંતિ",
                RENOVATION: "નવીનીકરણ",
                VYAPARA_ARAMBHA: "વેપાર આરંભ",
                DHANA_NIVESHA: "ધન રોકાણ",
                LEKHA_ARAMBHA: "લેખા આરંભ",
                CONTRACT_SIGNING: "કરાર હસ્તાક્ષર",
                JOB_JOINING: "નોકરી જોઈનિંગ",
                PROMOTION_ACCEPTANCE: "બઢતી સ્વીકાર",
                FIRST_SALARY: "પ્રથમ પગાર",
                GOLD_PURCHASE: "સુવર્ણ ખરીદી",
                YATRA_ARAMBHA: "યાત્રા આરંભ",
                DISHA_YATRA: "દિશા યાત્રા",
                VIDESHA_YATRA: "વિદેશ યાત્રા",
                PILGRIMAGE: "તીર્થ યાત્રા",
                DEITY_PRATISHTHA: "મૂર્તિ પ્રતિષ્ઠા",
                YAJNA: "યજ્ઞ / હોમ",
                MANTRA_DIKSHA: "મંત્ર દીક્ષા",
                GURU_DIKSHA: "ગુરુ દીક્ષા",
                VRATA_ARAMBHA: "વ્રત આરંભ",
                TEMPLE_OPENING: "મંદિર ઉદ્ઘાટન",
                SURGERY: "શસ્ત્રક્રિયા (સર્જરી)",
                LITIGATION_FILING: "કેસ દાખલ કરવો",
                DEBT_RECOVERY: "દેવું વસૂલાત",
                CONFLICT_INITIATION: "સંઘર્ષ પ્રારંભ",
                EDUCATION_EXAM: "પરીક્ષા"
            }
        },
        matching: {
            title: "કુંડળી મિલાન (ગુણ મિલન)",
            kootaNames: {
                varna: "વર્ણ",
                vashya: "વશ્ય",
                tara: "તારા",
                yoni: "યોનિ",
                grahaMaitri: "ગ્રહ મૈત્રી",
                gana: "ગણ",
                bhakoot: "ભકૂટ",
                nadi: "નાડી"
            },
            subtitle: "વૈદિક અનુકૂળતા વિશ્લેષણ",
            boyDetails: "વરની વિગતો",
            girlDetails: "કન્યાની વિગતો",
            name: "નામ",
            date: "જન્મ તારીખ",
            time: "સમય",
            location: "સ્થાન",
            matchBtn: "મિલાન કરો",
            score: "કુલ ગુણ",
            compatibility: "અનુકૂળતા",
            kootas: "અષ્ટકૂટ વિગતો",
            area: "ક્ષેત્ર",
            obtained: "મેળવેલ ગુણ",
            max: "મહત્તમ",
            desc: "વર્ણન",
            dosha: "દોષ / પરિહાર",
            analysis: "જ્યોતિષીય નોંધ",
            compatible: "સુયોગ્ય મિલાન",
            notCompatible: "ન્યૂન અનુકૂળતા",
            compatibleMsg: "કુંડળીમાં લગ્ન માટે સારી અનુકૂળતા છે. નાડી અને ભકૂટ જેવા મુખ્ય ક્ષેત્રોને પ્રાથમિકતા આપવી જોઈએ.",
            notCompatibleMsg: "અનુકૂળતા ગુણ પરંપરાગત સીમા કરતા ઓછા છે. અમે ભલામણ કરીએ છીએ કે આગળ વધતા પહેલા વિશિષ્ટ દશા અવધિ અને 7માં ભાવનું ઊંડું વિશ્લેષણ કરાવો.",
            cancellationMsg: "* મહત્વપૂર્ણ: કેટલાક પરંપરાગત દોષો મળ્યા હતા પરંતુ મજબૂત ગ્રહ સ્થિતિઓ દ્વારા રદ કરવામાં આવ્યા હતા. આ સંબંધમાં સ્થિરતાનો હકારાત્મક સંકેત છે.",
            backToKundli: "કુંડળી પર પાછા જાઓ",
            placeOfBirth: "જન્મ સ્થાન",
            analyzing: "વિશ્લેષણ થઈ રહ્યું છે...",
            mangalDoshaReport: "અદ્યતન મંગળ દોષ (શાસ્ત્રીય) રિપોર્ટ",
            activeDosha: "સક્રિય દોષ",
            cancelledParihar: "રદ (પરિહાર)",
            cancellationFactors: "રદ કરવાના પરિબળો:",
            nonManglik: "બિન-માંગલિક ✓",
            finalRecommendation: "અંતિમ ભલામણ:",
            cancelled: "રદ",
        }
    },
    sa: {} as any
};

// Define Sanskrit translations by deep copying Hindi and overriding key fields
const SANSKRIT_TRANSLATIONS: TranslationSchema = JSON.parse(JSON.stringify(TRANSLATIONS.hi));
SANSKRIT_TRANSLATIONS.appTitle = "पञ्चाङ्गम्";
SANSKRIT_TRANSLATIONS.subtitle = "वैदिक-तिथिपत्रम्";
SANSKRIT_TRANSLATIONS.listView = "सूची-प्रदर्शनम्";
SANSKRIT_TRANSLATIONS.gridView = "कोश-प्रदर्शनम्";
SANSKRIT_TRANSLATIONS.time = "समयः";
SANSKRIT_TRANSLATIONS.quality = "गुणः";
SANSKRIT_TRANSLATIONS.location = "स्थानम्";
SANSKRIT_TRANSLATIONS.aajKaPanchang = "अद्यतनं पञ्चाङ्गम्";
SANSKRIT_TRANSLATIONS.tithi = "तिथिः";
SANSKRIT_TRANSLATIONS.nakshatra = "नक्षत्रम्";
SANSKRIT_TRANSLATIONS.yoga = "योगः";
SANSKRIT_TRANSLATIONS.karana = "करणम्";
SANSKRIT_TRANSLATIONS.paksha = "पक्षः";
SANSKRIT_TRANSLATIONS.endsAt = "समाप्तिसमयः";
SANSKRIT_TRANSLATIONS.celestialTimings = "आकाशीय-समयाः";
SANSKRIT_TRANSLATIONS.sunrise = "सूर्योदयः";
SANSKRIT_TRANSLATIONS.sunset = "सूर्यास्तः";
SANSKRIT_TRANSLATIONS.moonrise = "चन्द्रोदयः";
SANSKRIT_TRANSLATIONS.moonset = "चन्द्रास्तः";
SANSKRIT_TRANSLATIONS.shubhMuhurat = "शुभमुहूर्तः";
SANSKRIT_TRANSLATIONS.inauspicious = "अशुभकालः";
SANSKRIT_TRANSLATIONS.rahuKalam = "राहुकालः";
SANSKRIT_TRANSLATIONS.yamaganda = "यमगण्डकालः";
SANSKRIT_TRANSLATIONS.gulikai = "गुलिककालः";
SANSKRIT_TRANSLATIONS.abhijit = "अभिजित्मुहूर्तः";
SANSKRIT_TRANSLATIONS.upcomingFestivals = "आगामिनः उत्सवाः";
SANSKRIT_TRANSLATIONS.viewCalendar = "पूर्ण-तिथिपत्रम्";
SANSKRIT_TRANSLATIONS.backToToday = "अद्यतन-पञ्चाङ्गम्";
SANSKRIT_TRANSLATIONS.monthlyPanchang = "मासिक-पञ्चाङ्गम्";
SANSKRIT_TRANSLATIONS.sunSign = "सूर्यराशिः";
SANSKRIT_TRANSLATIONS.moonSign = "चन्द्रराशिः";
SANSKRIT_TRANSLATIONS.planetarySigns = "ग्रहस्थितयः";
SANSKRIT_TRANSLATIONS.festivals = {
    vrat: "व्रतम्",
    festival: "उत्सवः"
};
SANSKRIT_TRANSLATIONS.samvat = {
    vikram: "विक्रमसंवत्",
    shaka: "शकसंवत्",
    samvatsara: "संवत्सरः"
};
SANSKRIT_TRANSLATIONS.astronomy = "खगोलशास्त्रम्";
SANSKRIT_TRANSLATIONS.month = "मासः";
SANSKRIT_TRANSLATIONS.ruling = "शासकग्रहः";
SANSKRIT_TRANSLATIONS.var = "वारः";
SANSKRIT_TRANSLATIONS.suryoday = "सूर्योदयः";
SANSKRIT_TRANSLATIONS.suryast = "सूर्यास्तः";
SANSKRIT_TRANSLATIONS.chandroday = "चन्द्रोदयः";
SANSKRIT_TRANSLATIONS.chandrast = "चन्द्रास्तः";
SANSKRIT_TRANSLATIONS.dailyRituals = "नित्यनियमाः";
SANSKRIT_TRANSLATIONS.days = ["रविः", "सोमः", "मङ्गलः", "बुधः", "गुरुः", "शुक्रः", "शनिः"];
SANSKRIT_TRANSLATIONS.panchang = {
    advancedPanchang: "विशिष्ट-पञ्चाङ्गम्",
    detailedTimings: "सविस्तर-काल-दोषाः",
    fiveLimbs: "पञ्च-अङ्गानि",
    sunRashi: "सूर्यराशिः",
    moonRashi: "चन्द्रराशिः",
    importantTimings: "महत्वपूर्णाः समयाः",
    yogasAndDoshas: "योगाः दोषाश्च",
    noAuspiciousYogas: "अद्य कोऽपि विशिष्टः शुभयोगः नास्ति।",
    panchak: "पञ्चकम्",
    bhadra: "भद्रा",
    endsAt: "समाप्तिः",
    fullDay: "पूर्णदिवसः"
};
SANSKRIT_TRANSLATIONS.home = {
    panchangAdhyaya: "पञ्चाङ्गाध्यायः",
    acharyasNote: "आचार्यस्य टिप्पणी",
    upasanaFestivals: "उपासना उत्सवाश्च",
    viewMuhurat: "मुहूर्तावलोकनम्",
    regularObservation: "नित्यकर्म",
    noMajorFestivals: "कोऽपि मुख्योत्सवः नास्ति",
    performDailyPuja: "नित्यपूजाविधिः",
    digitallyWorship: "डिजिटल-उपासना",
    festivalToday: "अद्यतनः उत्सवः",
    endsAt: "समाप्तिः:",
    choghadiyaTitle: "अद्यतनं चौघड़िया",
    purpose: "उद्देश्यम्",
    logic: "तर्कः",
    benefit: "लाभः",
    acharyaNoteTemplate: "चन्द्रे {nakshatra} नक्षत्रे स्थिते, अद्यतनः दिवसः स्थिरऊर्जायुक्तः अस्ति। गृहनिर्माणस्य बीजारोपणस्य च कृते अयं कालः शुभः अस्ति।"
};

SANSKRIT_TRANSLATIONS.dashboard = {
    divineTimings: "दिव्यसमयाः",
    subtitle: "मुहूर्तः चौघड़िया-फलकम्",
    specialYogas: "विशिष्टयोगाः",
    lagnaShuddhi: "लग्नशुद्धिः",
    majorDoshas: "मुख्यदोषाः",
    choghadiyaNames: {
        Amrit: "अमृतम्",
        Shubh: "शुभम्",
        Labh: "लाभः",
        Chal: "चलम्",
        Udveg: "उद्वेगः",
        Rog: "रोगः",
        Kal: "कालः"
    },
    personalFocus: "वैयक्तिकं ध्यानम्",
    taraBalaCalculator: "ताराबल-गणकम्",
    selectBirthStar: "जन्मनक्षत्रं चिनुत",
    chooseNakshatra: "नक्षत्रचयनं कुरुत",
    dayChoghadiya: "दिवा-चौघड़िया",
    nightChoghadiya: "रात्रि-चौघड़िया",
    dayHora: "दिवा-होरा",
    nightHora: "रात्रि-होरा",
    hora: "होरा",
    activities: "उत्तमकार्याणि",
    lord: "स्वामी",
    auspicious: "शुभम्",
    inauspicious: "अशुभम्",
    horaActivities: {
        Sun: "अधिकारः, शासकीयकार्याणि",
        Moon: "यात्रा, भावनाः",
        Mars: "स्पर्धा, शस्त्रक्रिया",
        Mercury: "व्यापारः, सम्भाषणम्",
        Jupiter: "अध्यापनम्, वित्तकोशः",
        Venus: "विवाहः, विलासः",
        Saturn: "भूमिः, अनुशासनम्"
    },
    noPanchak: "पञ्चकं नास्ति (शुभम्)",
    noBhadra: "भद्रा नास्ति (शुभम्)",
    planetsVisible: "ग्रहाः दृश्याः (शुभम्)",
    tara: {
        janma: { name: "जन्म", desc: "शरीर-मनसोः कश्टम्" },
        sampat: { name: "सम्पत्", desc: "धनं समृद्धिः च" },
        vipat: { name: "विपत्", desc: "सङ्कटं हानिः च" },
        kshema: { name: "क्षेम", desc: "कल्याणं सुरक्षा च" },
        pratyak: { name: "प्रत्यक्", desc: "विघ्नाः विरोधः च" },
        sadhana: { name: "साधन", desc: "सफलता सिद्धिः च" },
        naidhana: { name: "नैधन", desc: "तीव्रसङ्कटम्" },
        mitra: { name: "मित्र", desc: "मैत्री साहाय्यं च" },
        paramamitra: { name: "परममित्र", desc: "गाढमैत्री" }
    }
};

SANSKRIT_TRANSLATIONS.remedies = {
    title: "उपलब्ध-उपायाः",
    subtitle: "शान्ति-स्वास्थ्य-समृद्धिभ्यः वास्तु-रत्न-मन्त्राणां प्राचीनवैदिकमार्गाः।",
    explore: "विवरणं पश्यन्तु",
    shastraPraman: "शास्त्रप्रमाणम्",
    benefits: "लाभाः",
    vidhi: "विधिः (पद्धतिः)",
    dashboardTitle: "भवतः वैयक्तिक-उपाय-फलकम्",
    specialCrisis: "विशिष्ट-संकट-निवारणम्",
    direction: "दिशा",
    stressIndex: "तनाव-सूचकाङ्कः",
    rudrakshaSuggestion: "रुद्राक्ष-परामर्शः",
    yantraPlacement: "यन्त्रं स्थापनं च",
    mantraMala: "मन्त्रः माला च",
    analysisReasoning: "विश्लेषणतर्कः",
    safeguardAlert: "सुरक्षा-सङ्केतः",
    safeguardDesc: "अस्यां स्थितौ रत्नं वर्जितम्।",
    priority: "प्राथमिकता",
    bead: "मुखी",
    countPrefix: "जपः: १०८ वारं",
    malaSuffix: "मालया सह",
    metals: {
        Copper: "ताम्रम्",
        Silver: "रजतम्",
        Gold: "सुवर्णम्",
        Brass: "पित्तलम्",
        Iron: "लोहम्",
        "Gold/Brass": "सुवर्णम्/पित्तलम्",
        "Panchdhatu": "पञ्चधातुः"
    },
    directions: {
        East: "पूर्वः",
        West: "पश्चिमः",
        North: "उत्तरः",
        South: "दक्षिणः",
        "North-East": "ईशानः (उत्तर-पूर्वः)",
        "North-West": "वायव्यः (उत्तर-पश्चिमः)",
        "South-East": "आग्नेयः (दक्षिण-पूर्वः)",
        "South-West": "नैऋत्यः (दक्षिण-पश्चिमः)"
    },
    analyzeEnergies: "ऊर्जा-विश्लेषणं कुरुत",
    analyzeEnergiesDesc: "ग्रहदोषनिवारणाय स्वजन्मपत्रिकायाः सूक्ष्मावलोकनं कारयन्तु।",
    startAnalysis: "विश्लेषणं प्रारभताम्"
};

SANSKRIT_TRANSLATIONS.kundli = {
    soulSystemOnline: "आत्मतन्त्रं सक्रियम्",
    cosmicBlueprint: "ब्रह्माण्डीय-मानचित्रम्",
    cosmicBlueprintDesc: "जन्मविवरणं लिखत्वा स्वकीयां ग्रहस्थितिं जनयन्तु।",
    identitySequence: "नाम",
    enterFullDesignation: "पूर्णं नाम लिखतु",
    temporalPoint: "जन्मतिथिः",
    chronos: "जन्मसमयः",
    spatialCoordinates: "जन्मस्थानम्",
    latitudeForm: "अक्षांशः",
    longitudeForm: "रेखांशः",
    citySearch: "नगर-मञ्जूषा",
    autoDetect: "स्थानं सूचयतु",
    autoDetectDesc: "स्थानं स्वयमेव अन्विष्यताम्।",
    rawLongitude: "स्पष्टरेखांशः",
    latitudeShara: "अक्षांशः/शरः",
    rightAscension: "विषुवांशः (RA)",
    declination: "क्रान्तिः (Decl.)",
    lagnaChartDesc: "लग्नकुण्डली शरीरस्य सामान्यभाग्यस्य च दर्शनं कारयति।",
    navamsaChartDesc: "नवमांशकुण्डली आन्तरिकबलं दाम्पत्यसौख्यं च दर्शयति।",
    geospatialLock: "भूस्थान-कीलकम्",
    computingAlignments: "ग्रहगणना प्रचलति...",
    initiateLaunchSequence: "कुण्डलीं जनयतु",
    reCalibrate: "पुनर्गणना",
    chartId: "कुण्डली-सङ्ख्या",
    body: "ग्रहः",
    rashi: "राशिः",
    deg: "अंशाः",
    chronometerSync: "समय-सामञ्जस्यम्",
    initializingSystem: "तन्त्रप्रारम्भः...",
    generateBlueprint: "कुण्डलीं पश्यन्तु",
    newAnalysis: "नवीनविश्लेषणम्",
    graha: "ग्रहः",
    longitude: "रेखांशः",
    nakshatra: "नक्षत्रम्",
    lord: "स्वामी",
    pada: "चरणम्",
    status: "स्थितिः",
    birthDetails: "जन्मविवरणम्",
    ayanamsa: "अयनांशः",
    ascendant: "लग्नम् (ASC)",
    cosmicInsight: "ब्रह्माण्डीयदर्शनम्",
    planetaryPositions: "ग्रहस्थितयः",
    retrograde: "वक्री",
    combust: "अस्तः",
    openChart: "कुण्डलीम् उद्घाटयतु",
    matchmaking: "गुणमेलनम्",
    lagnaChart: "लग्नकुण्डली (D1)",
    navamsaChart: "नवमांशकुण्डली (D9)",
    chalitChart: "चलितकुण्डली",
    moonChart: "चन्द्रकुण्डली",
    birthStar: "जन्मनक्षत्रम्",
    birthRashi: "जन्मराशिः",
    tithi: "जन्मतिथिः",
    gan: "गणः",
    yoni: "योनिः",
    nadi: "नाडी",
    varna: "वर्णः",
    vimshottariDasha: "विंशोत्तरीदशा (जीवनचक्रम्)",
    mahadasha: "महादशा",
    years: "वर्षाणि",
    start: "प्रारम्भः",
    end: "समाप्तिः",
    current: "वर्त्तमानः",
    dashaDesc: "* फलकथनानि जन्मनक्षत्रस्य विंशोत्तरीदशापद्धत्या आधृतानि सन्ति।",
    noYogas: "कोऽपि मुख्ययोगः न लब्धः।",
    noYogasDesc: "इदं कुण्डल्याः दौर्बल्यं न सूचयति।",
    auspiciousYogas: "शुभयोगाः (बलानि)",
    doshas: "दोषाः (अन्तरायाः)",
    simple: "सरलः",
    scholar: "विद्वान्",
    all: "सर्वम्",
    conditionTrigger: "नियम-ट्रिगर",
    classicalAuthority: "शास्त्रीयप्रमाणम्",
    chapter: "अध्यायः",
    verse: "श्लोकः",
    consultingSages: "ऋषिदर्शनं प्रचलति...",
    noClassicalPredictions: "शास्त्रीयफलादेशः न लब्धः।",
    classicalSynthesis: "शास्त्रीयसंश्लेषणम्",
    holisticAnalysisDesc: "पाराशर्य-फलदीपिका-सिद्धान्तानां विश्लेषणम्।",
    aiSynthesis: "कृत्रिममेधया शास्त्रीयसंश्लेषणम्",
    timeAndTiming: "गोचरकालः",
    gochar: "गोचरः",
    gocharDesc: "वर्त्तमानगोचरदशानां विश्लेषणम्।",
    currentDashaPeriod: "वर्त्तमानमहादशा",
    planetaryTransits: "ग्रहगोचरः",
    noDashaEffects: "कोऽपि विशिष्टदशाप्रभावः नास्ति।",
    noMajorTransits: "अस्मिन् समये कोऽपि मुख्यगोचरः नास्ति।",
    predictionsBasedOn: "ग्रहस्थिति-आधारितफलादेशः:",
    high: "उच्चः",
    medium: "मध्यमः",
    low: "निम्नः",
    intensityLabel: "तीव्रता",
    trigger: "ट्रिगर",
    tabBasic: "मूलभूतम्",
    tabCharts: "कुण्डल्यः",
    tabPlanets: "ग्रहाः",
    tabClassical: "शास्त्रीयम्",
    tabYogas: "योगाः",
    tabDasha: "दशा",
    tabReport: "वृत्तान्तः",
    tabStrength: "बलम्",
    tabStrengthDesc: "ग्रह-भावबल-विश्लेषणम्",
    vargaNames: {
        D1: "D1 - लग्नकुण्डली (Rashi)",
        D2: "D2 - होरा (Hora)",
        D3: "D3 - द्रेष्काणः (Dreshkana)",
        D4: "D4 - चतुर्थांशः (Chaturthamsa)",
        D7: "D7 - सप्तमांशः (Saptamsha)",
        D9: "D9 - नवमांशः (Navamsha)",
        D10: "D10 - दशमांशः (Dashamsha)",
        D12: "D12 - द्वादशांशः (Dwadashamsha)",
        D16: "D16 - षोडशांशः (Shodashamsha)",
        D20: "D20 - विंशांशः (Vimshamsha)",
        D24: "D24 - चतुर्विंशांशः (Chaturvimshamsha)",
        D27: "D27 - सप्तविंशांशः (Saptavimshamsha)",
        D30: "D30 - त्रिंशांशः (Trimshamsha)",
        D40: "D40 - खवेदांशः (Khavedamsha)",
        D45: "D45 - अक्षवेदांशः (Akshavedamsha)",
        D60: "D60 - षष्ट्यंशः (Shashtiamsha)"
    }
};

SANSKRIT_TRANSLATIONS.swar = {
    title: "स्वरोदय-विज्ञानम्",
    breathScience: "स्वरोदय-ज्ञानम् (इडा/पिङ्गला)",
    nameScience: "अक्षर-स्वर-विज्ञानम्",
    activeNostril: "सक्रिय-नासारन्ध्रम्",
    leftNostril: "वामम् (इडा)",
    rightNostril: "दक्षिणम् (पिङ्गला)",
    bothNostrils: "उभयम् (सुषुम्णा)",
    tattva: "सक्रिय-तत्त्वम्",
    quality: "प्रवाह-गुणः",
    guidance: "ज्ञान-मार्गदर्शनम्",
    favorable: "शुभ-कार्याणि",
    unfavorable: "वर्जित-कार्याणि",
    searchName: "नाम्ना नक्षत्र-अन्वेषणम्",
    enterNamePlaceholder: "नाम लिखतु (यथा रमेशः)",
    findSound: "ब्रह्माण्डीय-ध्वनि-अन्वेषणम्",
    soundResults: "ध्वनि-विश्लेषण-परिणामः",
    syllable: "प्रथम-वर्णः",
    rulingPlanet: "स्वामी ग्रहः",
    aligned: "प्रवाह-संरेखितः",
    reversed: "प्रवाह-विपरीततः",
    excellent: "अतिउत्तमम्",
    good: "उत्तमम्",
    average: "सामान्यम्",
    cautious: "सावधानम्"
};

SANSKRIT_TRANSLATIONS.puja = {
    virtualMandir: "आभासी-मन्दिरम्",
    interactivePujaExp: "परस्पर-क्रियात्मक-पूजा-अनुभवः",
    digitalDevotion: "डिजिटल-भक्तिः",
    performSacredPuja: "पवित्र-पूजां कुरुत",
    performSacredPujaDesc: "पूजाविधिं चित्वा देवम् आवाह्य भक्तिभावेन पूजयन्तु।",
    invoking: "{deity} देवस्य आवाहनं प्रचलति...",
    confirmed: "आवाहनं सफलम्",
    selectDeity: "आवाहनाय देवं चिनुत",
    selectPujaType: "पूजाप्रकारं चिनुत",
    summonYourDeity: "स्वदेवस्य आवाहनं कुरुत",
    enterDeityName: "देवस्य नाम लिखतु (यथा गणेशः, कृष्णः, दुर्गा)",
    changeDeityOrMode: "देवं विधिं वा परिवर्तयतु",
    myDeities: "मम देवाः",
    uploadImage: "चित्रं प्रेषयतु",
    uploadInstruction: "स्वकीयानां देवप्रतिमानां चित्राणि प्रेषयित्वा पूजयन्तु।",
    pujaWord: "पूजा",
    panchopachar: "पञ्चोपचार-पूजा",
    shodashopachar: "षोडशोपचार-पूजा",
    rajopachar: "राजोपचार-पूजा",
    player: {
        comingSoon: "मन्त्रदत्तकः शीघ्रमेव आगमिष्यति।",
        completed: "पूजा सम्पन्ना!",
        blessing: "मङ्गलम्! {deity} देवः भवतः कल्याणं करोतु।",
        prasad: "प्रसादः",
        prasadOffered: "प्रसादः निवेदितः।",
        returnToMandir: "मन्दिरं प्रति गच्छतु",
        step: "सोपानम्",
        of: "तः",
        collapse: "सङ्कुचतु",
        expand: "विस्तारयतु / पूर्णं पठतु",
        previous: "पूर्वे",
        next: "अग्रे",
        finish: "समापयतु"
    },
    modes: {
        panchopachar: {
            subtitle: "५ उपचाराः",
            description: "नित्यपूजाविधिः",
            time: "~५ निमेषाः"
        },
        shodashopachar: {
            subtitle: "१६ उपचाराः",
            description: "परम्परागतः पूर्णविधिः",
            time: "~१५ निमेषाः"
        },
        rajopachar: {
            subtitle: "राजोपचाराः",
            description: "भव्योपचारपूजनम्",
            time: "~३० निमेषाः"
        }
    },
    offerings: {
        avahan: { name: "आवाहनम्", meaning: "देवम् आवाहयामि।" },
        asana: { name: "आसनम्", meaning: "आसनं समर्पयामि।" },
        padya: { name: "पाद्यम्", meaning: "पाद्यं समर्पयामि।" },
        arghya: { name: "अर्घ्यम्", meaning: "अर्घ्यं समर्पयामि।" },
        achamana: { name: "आचमनीयम्", meaning: "आचमनीयं समर्पयामि।" },
        snana: { name: "स्नानम्", meaning: "स्नानं समर्पयामि।" },
        vastra: { name: "वस्त्रम्", meaning: "वस्त्रं समर्पयामि।" },
        yajnopavita: { name: "यज्ञोपवीतम्", meaning: "यज्ञोपवीतं समर्पयामि।" },
        gandha: { name: "गन्धः", meaning: "चन्दनं समर्पयामि।" },
        kumkum: { name: "कुङ्कुमम्", meaning: "कुङ्कुमं समर्पयामि।" },
        pushpa: { name: "पुष्पम्", meaning: "पुष्पाणि समर्पयामि।" },
        dhoop: { name: "धूपः", meaning: "धूपं आघ्रापयामि।" },
        deep: { name: "दीपः", meaning: "दीपं दर्शयामि।" },
        naivedya: { name: "नैवेद्यम्", meaning: "नैवेद्यं निवेदयामि।" },
        tambula: { name: "ताम्बूलम्", meaning: "ताम्बूलं समर्पयामि।" },
        karpura: { name: "कर्पूर-आरतिः", meaning: "कर्पूरनीराजनं समर्पयामि।" },
        bell: { name: "घण्टानादः", meaning: "देवताप्रीत्यर्थं घण्टानादं करोमि।" },
        namaskara: { name: "नमस्कारः", meaning: "साष्टाङ्गं नमस्करोमि।" },
        abhishek: { name: "अभिषेकः", meaning: "पञ्चामृताभिषेकं करोमि।" },
        alankara: { name: "अलङ्कारः", meaning: "आभूषणानि समर्पयामि।" },
        chhatra: { name: "छत्रम्", meaning: "छत्रं समर्पयामि।" },
        chamar: { name: "चामरम्", meaning: "चामरवीजनं करोमि।" },
        sangeet: { name: "भक्तिसङ्गीतम्", meaning: "सङ्गीतसेवा समर्पयामि।" },
        bhog: { name: "राजभोगः", meaning: "मधुरनैवेद्यं समर्पयामि।" },
        shayana: { name: "शयनम्", meaning: "सुखशयनं कल्पयामि।" }
    },
    toolbar: {
        title: "सामग्री-मञ्जूषा",
        completed: "सम्पन्नम्"
    }
};

SANSKRIT_TRANSLATIONS.nav = {
    panchang: "पञ्चाङ्गम्",
    muhurta: "मुहूर्तः",
    calendar: "तिथिपत्रम्",
    yearly: "वार्षिकम्",
    kundli: "कुण्डली",
    upasana: "उपासना",
    remedies: "उपाय-संग्रहः",
    matching: "गुणमेलनम्",
    puja: "पूजा",
    samaychakra: "समयचक्रम्",
    prashnavali: "प्रश्नावली",
    swar: "स्वरशास्त्रम्",
    ayurveda: "आयुर्वेदम्",
    medical: "वैद्यकीयम्",
    store: "वैदिक-आपणः"
};

TRANSLATIONS.sa = SANSKRIT_TRANSLATIONS;

export const TITHI_NAMES: any = {
    ...ENGINE_TITHI_NAMES,
    sa: [
        "प्रतिपदा", "द्वितीया", "तृतीया", "चतुर्थी", "पञ्चमी", "षष्ठी",
        "सप्तमी", "अष्टमी", "नवमी", "दशमी", "एकादशी", "द्वादशी",
        "त्रयोदशी", "चतुर्दशी", "पूर्णिमा",
        "प्रतिपदा", "द्वितीया", "तृतीया", "चतुर्थी", "पञ्चमी", "षष्ठी",
        "सप्तमी", "अष्टमी", "नवमी", "दशमी", "एकादशी", "द्वादशी",
        "त्रयोदशी", "चतुर्दशी", "अमावस्या"
    ]
};
export const NAKSHATRA_NAMES: any = {
    ...ENGINE_NAKSHATRA_NAMES,
    sa: [
        "अश्विनी", "भरणी", "कृत्तिका", "रोहिणी", "मृगशीर्षः", "आर्द्रा",
        "पुनर्वसुः", "पुष्यः", "आश्लेषा", "मघा", "पूर्वाफाल्गुनी", "उत्तराफाल्गुनी",
        "हस्तः", "चित्रा", "स्वाती", "विशाखा", "अनुराधा", "ज्येष्ठा", "मूलम्",
        "पूर्वाषाढा", "उत्तराषाढा", "श्रवणः", "धनिष्ठा", "शतभिषा",
        "पूर्वाभाद्रपदः", "उत्तराभाद्रपदः", "रेवती"
    ]
};
export const YOGA_NAMES: any = {
    ...ENGINE_YOGA_NAMES,
    sa: [
        "विष्कम्भः", "प्रीतिः", "आयुष्मान्", "सौभाग्यः", "शोभनः", "अतिगण्डः",
        "सुकर्मा", "धृतिः", "शूलः", "गण्डः", "वृद्धिः", "ध्रुवः", "व्याघातः",
        "हर्षणः", "वज्रः", "सिद्धिः", "व्यतीपातः", "वरीयान्", "परिघः", "शिवः",
        "सिद्धः", "साध्यः", "शुभः", "शुक्लः", "ब्रह्म", "इन्द्रः", "वैधृतिः"
    ]
};
export const MASA_NAMES: any = {
    ...ENGINE_MASA_NAMES,
    sa: [
        "चैत्रः", "वैशाखः", "ज्येष्ठः", "आषाढः", "श्रावणः", "भाद्रपदः",
        "आश्विनः", "कार्तिकः", "मार्गशीर्षः", "पौषः", "माघः", "फाल्गुनः"
    ]
};
export const RASHI_NAMES: any = {
    ...ENGINE_RASHI_NAMES,
    sa: [
        "मेषः", "वृषभः", "मिथुनः", "कर्कः",
        "सिंहः", "कन्या", "तुला", "वृश्चिकः",
        "धनुः", "मकरः", "कुम्भः", "मीनः"
    ]
};
export const KARANA_NAMES: any = {
    ...ENGINE_KARANA_NAMES,
    sa: [
        "बवः", "बालवः", "कौलवः", "तैतिलः", "गरजः", "वणिजः", "विष्टिः",
        "शकुनिः", "चतुष्पात्", "नागः", "किंस्तुघ्नः"
    ]
};

export const PAKSHA_NAMES: any = {
    en: { Shukla: "Shukla", Krishna: "Krishna" },
    hi: { Shukla: "शुक्ल", Krishna: "कृष्ण" },
    gu: { Shukla: "સુદ", Krishna: "વદ" },
    sa: { Shukla: "शुक्लः", Krishna: "कृष्णः" }
};

export const WEEKDAYS: any = { ...ENGINE_WEEKDAYS, sa: ENGINE_WEEKDAYS.hi };

export const SAMVATSARA_NAMES: any = {
    en: { Vishvavasu: "Vishvavasu" },
    hi: { Vishvavasu: "विश्वावसु" },
    gu: { Vishvavasu: "વિશ્વાવસુ" },
    sa: { Vishvavasu: "विश्वावसुः" }
};
