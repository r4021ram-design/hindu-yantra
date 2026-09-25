const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '../src/lib/yantras/shastric-jyotish-database.ts');
let text = fs.readFileSync(file, 'utf8');

const r1 = `    },\n    practicalRemedies: [
      {
        category: 'Protection',
        problem: 'जब व्यापार में निरंतर घाटा, नजर दोष, और अकारण शत्रु भय से प्रगति रुक रही हो।',
        remedyProtocol: 'मंगलवार या शुक्ल पक्ष की अष्टमी को दुर्गा बीसा यन्त्र को उत्तर या पूर्व दिशा में लाल रेशमी वस्त्र पर स्थापित करें। प्रतिदिन गाय के घी का दीपक जलाकर "ॐ दुं दुर्गायै नमः" का १०८ बार जप करें।'
      },
      {
        category: 'Spiritual',
        problem: 'अकस्मात् भय, मानसिक अशान्ति व बुरे स्वप्नों से मुक्ति हेतु।',
        remedyProtocol: 'यन्त्र के समक्ष नवार्ण मन्त्र "ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे" का एक माला नित्य जप करें और लाल चन्दन का तिलक लगाएं।'
      }
    ]\n  },`;

const r2 = `    },\n    practicalRemedies: [
      {
        category: 'Protection',
        problem: 'असाध्य रोग, तंत्र-बाधा, गुप्त शत्रु उपद्रव एवं न्यायालयी विवादों में फंसे होने पर।',
        remedyProtocol: 'बुधवार या एकादशी के दिन सुदर्शन चक्र यन्त्र को पूर्व दिशा में स्थापित करें। तुलसी पत्र व पीले पुष्प अर्पित कर "ॐ सहस्रार हुं फट्" का १०८ बार जप करें।'
      },
      {
        category: 'Health',
        problem: 'दीर्घकालिक शारीरिक व्याधियों व प्राणिक ऊर्जा के ह्रास की स्थिति में।',
        remedyProtocol: 'प्रातः सूर्योदय के समय यन्त्र के समक्ष बैठकर महासुदर्शन अष्टकम् या सुदर्शन शतकम् का श्रद्धापूर्वक पाठ करें।'
      }
    ]\n  },`;

const r3 = `    },\n    practicalRemedies: [
      {
        category: 'Protection',
        problem: 'शनि साढ़ेसाती, ढैय्या, अज्ञात भय एवं नकारात्मक प्रेत बाधा से ग्रसित होने पर।',
        remedyProtocol: 'मंगलवार या शनिवार को दक्षिण या पूर्व दिशा में यन्त्र स्थापित कर चमेली के तेल व सिन्दूर का तिलक करें। "ॐ हं हनुमते रुद्रात्मकाय हुं फट्" का १०८ बार जप कर गुड़-चने का भोग लगाएं।'
      },
      {
        category: 'Career',
        problem: 'आत्मविश्वास की कमी, कार्य में बार-बार असफलता एवं भय के कारण निर्णय न ले पाने पर।',
        remedyProtocol: 'पंचमुखी हनुमान कवच का प्रतिदिन प्रातःकाल यन्त्र के समक्ष पाठ करें और लाल चन्दन या मूंगा माला धारण करें।'
      }
    ]\n  },`;

const r4 = `    },\n    practicalRemedies: [
      {
        category: 'Protection',
        problem: 'गंभीर कृत्या दोष, तीव्र अभिचार (काला जादू), शत्रु जनित विनाशकारी संकट व पारिवारिक संकट में।',
        remedyProtocol: 'मंगलवार, शुक्रवार या अमावस्या की रात्रि में दक्षिण दिशा में यन्त्र को स्थापित कर शुद्ध सरसों के तेल का दीपक जलाएं और "ॐ क्षौं प्रत्यङ्गिरायै नमः" अथवा "ॐ ह्रीं क्षौं प्रत्यङ्गिरे हुं फट् स्वाहा" का १०८ बार निर्भय मन से जप करें।'
      },
      {
        category: 'Spiritual',
        problem: 'गृह में भारी नकारात्मक ऊर्जा, क्लेश और अनिष्टकारी शक्तियों के प्रवेश का अनुभव होने पर।',
        remedyProtocol: 'यन्त्र के समक्ष काले तिल और कर्पूर की आहुति देकर मां प्रत्यङ्गिरा से आत्म-रक्षा और शत्रु-शमन की प्रार्थना करें।'
      }
    ]\n  }\n};`;

// In durga_bisa_yantra: replace the closing of jyotish
const marker1 = `        'Chant the Navarna mantra (ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे) 108 times, invoking Mother Durgas eternal protection.'\n      ]\n    }\n  },`;
const marker2 = `        'Chant the Maha Sudarshana mantra (ॐ नमो भगवते महासुदर्शनाय हुं फट्) 108 times.'\n      ]\n    }\n  },`;
const marker3 = `        'Chant the Panchamukhi Hanuman Kavacham or Beej mantra 108 times.'\n      ]\n    }\n  },`;
const marker4 = `        'Chant the Pratyangira mantra (ॐ ह्रीं क्षौं प्रत्यङ्गिरे हुं फट् स्वाहा) 108 times with fearless devotion.'\n      ]\n    }\n  }\n\n};`;

if (text.includes(marker1)) {
  text = text.replace(marker1, `        'Chant the Navarna mantra (ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे) 108 times, invoking Mother Durgas eternal protection.'\n      ]\n${r1}`);
  console.log('Replaced marker 1');
} else {
  console.log('Marker 1 not found');
}

if (text.includes(marker2)) {
  text = text.replace(marker2, `        'Chant the Maha Sudarshana mantra (ॐ नमो भगवते महासुदर्शनाय हुं फट्) 108 times.'\n      ]\n${r2}`);
  console.log('Replaced marker 2');
} else {
  console.log('Marker 2 not found');
}

if (text.includes(marker3)) {
  text = text.replace(marker3, `        'Chant the Panchamukhi Hanuman Kavacham or Beej mantra 108 times.'\n      ]\n${r3}`);
  console.log('Replaced marker 3');
} else {
  console.log('Marker 3 not found');
}

if (text.includes(marker4)) {
  text = text.replace(marker4, `        'Chant the Pratyangira mantra (ॐ ह्रीं क्षौं प्रत्यङ्गिरे हुं फट् स्वाहा) 108 times with fearless devotion.'\n      ]\n${r4}`);
  console.log('Replaced marker 4');
} else {
  console.log('Marker 4 not found');
}

fs.writeFileSync(file, text, 'utf8');
console.log('Successfully updated practical remedies!');
