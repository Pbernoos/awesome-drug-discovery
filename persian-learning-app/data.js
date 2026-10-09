const persianAlphabetData = [
  {
    id: "alef",
    letter: "ا / آ",
    name: "Alef",
    pronunciation: "A / Ah",
    examples: [
        { word: "آب", transliteration: "Aab", meaning: "Water" },
        { word: "اسب", transliteration: "Asb", meaning: "Horse" }
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
  },
  {
    id: "se",
    letter: "ث",
    name: "Se",
    pronunciation: "S",
    examples: [
        { word: "ثانیه", transliteration: "Saniyeh", meaning: "Second (time)" },
        { word: "ثابت", transliteration: "Sabet", meaning: "Constant/Fixed" }
    ],
    quiz: {
        question: "Which letter is 'Se' (ث)?",
        options: ["ت", "ب", "ث", "پ"],
        correctAnswerIndex: 2
    }
  },
  {
    id: "jim",
    letter: "ج",
    name: "Jim",
    pronunciation: "J",
    examples: [
        { word: "جان", transliteration: "Jaan", meaning: "Life/Soul" },
        { word: "جنگل", transliteration: "Jangal", meaning: "Forest" }
    ],
    quiz: {
        question: "What does 'جنگل' (Jangal) mean?",
        options: ["Ocean", "Desert", "Forest", "Mountain"],
        correctAnswerIndex: 2
    }
  },
  {
    id: "che",
    letter: "چ",
    name: "Che",
    pronunciation: "Ch",
    examples: [
        { word: "چشم", transliteration: "Cheshm", meaning: "Eye" },
        { word: "چای", transliteration: "Chaay", meaning: "Tea" }
    ],
    quiz: {
        question: "Which word means 'Tea'?",
        options: ["چای", "آب", "شیر", "قهوه"],
        correctAnswerIndex: 0
    }
  },
  {
    id: "he_jimi",
    letter: "ح",
    name: "He (Jimi)",
    pronunciation: "H",
    examples: [
        { word: "حوله", transliteration: "Holeh", meaning: "Towel" },
        { word: "حرف", transliteration: "Harf", meaning: "Word/Letter" }
    ],
    quiz: {
        question: "Which letter makes the 'H' sound like in 'حوله'?",
        options: ["خ", "ح", "ج", "چ"],
        correctAnswerIndex: 1
    }
  },
  {
    id: "khe",
    letter: "خ",
    name: "Khe",
    pronunciation: "Kh",
    examples: [
        { word: "خانه", transliteration: "Khaneh", meaning: "House" },
        { word: "خوب", transliteration: "Khoob", meaning: "Good" }
    ],
    quiz: {
        question: "What does 'خانه' (Khaneh) mean?",
        options: ["Car", "School", "House", "Tree"],
        correctAnswerIndex: 2
    }
  },
  {
    id: "dal",
    letter: "د",
    name: "Dal",
    pronunciation: "D",
    examples: [
        { word: "درخت", transliteration: "Derakht", meaning: "Tree" },
        { word: "دست", transliteration: "Dast", meaning: "Hand" }
    ],
    quiz: {
        question: "What does 'دست' (Dast) mean?",
        options: ["Foot", "Hand", "Eye", "Head"],
        correctAnswerIndex: 1
    }
  },
  {
    id: "zal",
    letter: "ذ",
    name: "Zal",
    pronunciation: "Z",
    examples: [
        { word: "ذرت", transliteration: "Zorrat", meaning: "Corn" },
        { word: "ذهن", transliteration: "Zehn", meaning: "Mind" }
    ],
    quiz: {
        question: "Which of these words means 'Corn'?",
        options: ["ذهن", "ذرت", "دست", "جان"],
        correctAnswerIndex: 1
    }
  },
  {
    id: "re",
    letter: "ر",
    name: "Re",
    pronunciation: "R",
    examples: [
        { word: "روز", transliteration: "Rooz", meaning: "Day" },
        { word: "رفت", transliteration: "Raft", meaning: "Went" }
    ],
    quiz: {
        question: "What does 'روز' (Rooz) mean?",
        options: ["Night", "Day", "Week", "Month"],
        correctAnswerIndex: 1
    }
  },
  {
    id: "ze",
    letter: "ز",
    name: "Ze",
    pronunciation: "Z",
    examples: [
        { word: "زن", transliteration: "Zan", meaning: "Woman" },
        { word: "زمین", transliteration: "Zamin", meaning: "Earth/Ground" }
    ],
    quiz: {
        question: "Which word means 'Woman'?",
        options: ["مرد", "پسر", "دختر", "زن"],
        correctAnswerIndex: 3
    }
  },
  {
    id: "zhe",
    letter: "ژ",
    name: "Zhe",
    pronunciation: "Zh",
    examples: [
        { word: "ژاکت", transliteration: "Zhaket", meaning: "Jacket" },
        { word: "ژاله", transliteration: "Zhaleh", meaning: "Dew" }
    ],
    quiz: {
        question: "Which letter is 'Zhe' (ژ)?",
        options: ["ز", "ر", "ژ", "د"],
        correctAnswerIndex: 2
    }
  },
  {
    id: "sin",
    letter: "س",
    name: "Sin",
    pronunciation: "S",
    examples: [
        { word: "سیب", transliteration: "Sib", meaning: "Apple" },
        { word: "سفید", transliteration: "Sefid", meaning: "White" }
    ],
    quiz: {
        question: "What does 'سیب' (Sib) mean?",
        options: ["Orange", "Banana", "Apple", "Grape"],
        correctAnswerIndex: 2
    }
  },
  {
    id: "shin",
    letter: "ش",
    name: "Shin",
    pronunciation: "Sh",
    examples: [
        { word: "شب", transliteration: "Shab", meaning: "Night" },
        { word: "شیر", transliteration: "Shir", meaning: "Milk/Lion" }
    ],
    quiz: {
        question: "What does 'شب' (Shab) mean?",
        options: ["Day", "Night", "Morning", "Evening"],
        correctAnswerIndex: 1
    }
  },
  {
    id: "sad",
    letter: "ص",
    name: "Sad",
    pronunciation: "S",
    examples: [
        { word: "صبح", transliteration: "Sobh", meaning: "Morning" },
        { word: "صدا", transliteration: "Seda", meaning: "Voice/Sound" }
    ],
    quiz: {
        question: "Which word means 'Morning'?",
        options: ["روز", "شب", "صبح", "عصر"],
        correctAnswerIndex: 2
    }
  },
  {
    id: "zad",
    letter: "ض",
    name: "Zad",
    pronunciation: "Z",
    examples: [
        { word: "ضعیف", transliteration: "Zaeef", meaning: "Weak" },
        { word: "ضخیم", transliteration: "Zakhim", meaning: "Thick" }
    ],
    quiz: {
        question: "What does 'ضعیف' (Zaeef) mean?",
        options: ["Strong", "Fast", "Weak", "Slow"],
        correctAnswerIndex: 2
    }
  },
  {
    id: "ta",
    letter: "ط",
    name: "Ta",
    pronunciation: "T",
    examples: [
        { word: "طبیعت", transliteration: "Tabiat", meaning: "Nature" },
        { word: "طول", transliteration: "Tool", meaning: "Length" }
    ],
    quiz: {
        question: "What does 'طبیعت' (Tabiat) mean?",
        options: ["City", "Nature", "Animal", "Plant"],
        correctAnswerIndex: 1
    }
  },
  {
    id: "za",
    letter: "ظ",
    name: "Za",
    pronunciation: "Z",
    examples: [
        { word: "ظرف", transliteration: "Zarf", meaning: "Dish/Container" },
        { word: "ظاهر", transliteration: "Zaher", meaning: "Appearance" }
    ],
    quiz: {
        question: "Which letter is 'Za' (ظ)?",
        options: ["ط", "ظ", "ض", "ص"],
        correctAnswerIndex: 1
    }
  },
  {
    id: "ayn",
    letter: "ع",
    name: "Ayn",
    pronunciation: "A / E / O",
    examples: [
        { word: "عشق", transliteration: "Eshgh", meaning: "Love" },
        { word: "عکس", transliteration: "Aks", meaning: "Picture/Photo" }
    ],
    quiz: {
        question: "What does 'عشق' (Eshgh) mean?",
        options: ["Hate", "Love", "Friendship", "Anger"],
        correctAnswerIndex: 1
    }
  },
  {
    id: "ghayn",
    letter: "غ",
    name: "Ghayn",
    pronunciation: "Gh",
    examples: [
        { word: "غذا", transliteration: "Ghaza", meaning: "Food" },
        { word: "غم", transliteration: "Gham", meaning: "Sorrow" }
    ],
    quiz: {
        question: "Which word means 'Food'?",
        options: ["آب", "غذا", "نان", "گوشت"],
        correctAnswerIndex: 1
    }
  },
  {
    id: "fe",
    letter: "ف",
    name: "Fe",
    pronunciation: "F",
    examples: [
        { word: "فردا", transliteration: "Farda", meaning: "Tomorrow" },
        { word: "فکر", transliteration: "Fekr", meaning: "Thought" }
    ],
    quiz: {
        question: "What does 'فردا' (Farda) mean?",
        options: ["Today", "Yesterday", "Tomorrow", "Now"],
        correctAnswerIndex: 2
    }
  },
  {
    id: "ghaf",
    letter: "ق",
    name: "Ghaf",
    pronunciation: "Gh / Q",
    examples: [
        { word: "قرمز", transliteration: "Ghermez", meaning: "Red" },
        { word: "قلب", transliteration: "Ghalb", meaning: "Heart" }
    ],
    quiz: {
        question: "What does 'قرمز' (Ghermez) mean?",
        options: ["Blue", "Green", "Red", "Yellow"],
        correctAnswerIndex: 2
    }
  },
  {
    id: "kaf",
    letter: "ک",
    name: "Kaf",
    pronunciation: "K",
    examples: [
        { word: "کتاب", transliteration: "Ketab", meaning: "Book" },
        { word: "کار", transliteration: "Kar", meaning: "Work" }
    ],
    quiz: {
        question: "Which word means 'Book'?",
        options: ["کتاب", "قلم", "دفتر", "کاغذ"],
        correctAnswerIndex: 0
    }
  },
  {
    id: "gaf",
    letter: "گ",
    name: "Gaf",
    pronunciation: "G",
    examples: [
        { word: "گل", transliteration: "Gol", meaning: "Flower" },
        { word: "گربه", transliteration: "Gorbeh", meaning: "Cat" }
    ],
    quiz: {
        question: "What does 'گربه' (Gorbeh) mean?",
        options: ["Dog", "Bird", "Cat", "Fish"],
        correctAnswerIndex: 2
    }
  },
  {
    id: "lam",
    letter: "ل",
    name: "Lam",
    pronunciation: "L",
    examples: [
        { word: "لباس", transliteration: "Lebas", meaning: "Clothes" },
        { word: "لب", transliteration: "Lab", meaning: "Lip" }
    ],
    quiz: {
        question: "What does 'لباس' (Lebas) mean?",
        options: ["Shoe", "Hat", "Clothes", "Shirt"],
        correctAnswerIndex: 2
    }
  },
  {
    id: "mim",
    letter: "م",
    name: "Mim",
    pronunciation: "M",
    examples: [
        { word: "مادر", transliteration: "Madar", meaning: "Mother" },
        { word: "ماه", transliteration: "Mah", meaning: "Moon/Month" }
    ],
    quiz: {
        question: "Which word means 'Mother'?",
        options: ["پدر", "برادر", "خواهر", "مادر"],
        correctAnswerIndex: 3
    }
  },
  {
    id: "nun",
    letter: "ن",
    name: "Nun",
    pronunciation: "N",
    examples: [
        { word: "نان", transliteration: "Naan", meaning: "Bread" },
        { word: "نام", transliteration: "Naam", meaning: "Name" }
    ],
    quiz: {
        question: "What does 'نان' (Naan) mean?",
        options: ["Water", "Meat", "Bread", "Cheese"],
        correctAnswerIndex: 2
    }
  },
  {
    id: "vav",
    letter: "و",
    name: "Vav",
    pronunciation: "V / U / O",
    examples: [
        { word: "ورزش", transliteration: "Varzesh", meaning: "Sport/Exercise" },
        { word: "وزن", transliteration: "Vazn", meaning: "Weight" }
    ],
    quiz: {
        question: "Which letter is 'Vav' (و)?",
        options: ["ن", "و", "ه", "ی"],
        correctAnswerIndex: 1
    }
  },
  {
    id: "he_do_cheshm",
    letter: "ه",
    name: "He (Do cheshm)",
    pronunciation: "H / E / A",
    examples: [
        { word: "هوا", transliteration: "Hava", meaning: "Weather/Air" },
        { word: "هفته", transliteration: "Hafteh", meaning: "Week" }
    ],
    quiz: {
        question: "What does 'هفته' (Hafteh) mean?",
        options: ["Day", "Month", "Year", "Week"],
        correctAnswerIndex: 3
    }
  },
  {
    id: "ye",
    letter: "ی",
    name: "Ye",
    pronunciation: "Y / I",
    examples: [
        { word: "یخ", transliteration: "Yakh", meaning: "Ice" },
        { word: "یک", transliteration: "Yek", meaning: "One" }
    ],
    quiz: {
        question: "What does 'یک' (Yek) mean?",
        options: ["Two", "Three", "One", "Four"],
        correctAnswerIndex: 2
    }
  }
];
