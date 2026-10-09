const persianAlphabetData = [
  {
    id: "alef_madda",
    letter: "آ",
    name: "Alef Ba Kolah",
    pronunciation: "Ah",
    examples: [
        { word: "آب", transliteration: "Aab", meaning: "Water" },
        { word: "آسمان", transliteration: "Aseman", meaning: "Sky" }
    ],
    quiz: {
        question: "What does 'آب' mean?",
        options: ["Fire", "Water", "Earth", "Air"],
        correctAnswerIndex: 1
    }
  },
  {
    id: "be",
    letter: "ب",
    name: "Be",
    pronunciation: "B",
    examples: [
        { word: "برادر", transliteration: "Baradar", meaning: "Brother" },
        { word: "باران", transliteration: "Baran", meaning: "Rain" }
    ],
    quiz: {
        question: "Which letter makes the 'B' sound?",
        options: ["پ", "ت", "ب", "آ"],
        correctAnswerIndex: 2
    }
  },
  {
    id: "pe",
    letter: "پ",
    name: "Pe",
    pronunciation: "P",
    examples: [
        { word: "پدر", transliteration: "Pedar", meaning: "Father" },
        { word: "پسر", transliteration: "Pesar", meaning: "Boy/Son" }
    ],
    quiz: {
        question: "What does 'پدر' mean?",
        options: ["Mother", "Sister", "Brother", "Father"],
        correctAnswerIndex: 3
    }
  },
  {
    id: "te",
    letter: "ت",
    name: "Te",
    pronunciation: "T",
    examples: [
        { word: "تو", transliteration: "To", meaning: "You" },
        { word: "تابستان", transliteration: "Tabestan", meaning: "Summer" }
    ],
    quiz: {
        question: "Which of these words means 'Summer'?",
        options: ["پدر", "تابستان", "آسمان", "باران"],
        correctAnswerIndex: 1
    }
  }
];

// In the future, this is where she can easily add the rest of the letters following the same format!
