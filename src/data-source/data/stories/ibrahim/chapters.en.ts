import type { StoryChapter } from '../../../types/prophet';

const chapters: StoryChapter[] = [
  {
    id: 'ibrahim-ch1',
    title: 'Ibrahim Breaks the Idols',
    summary: 'Ibrahim questioned his people\'s worship of idols and smashed them to prove their powerlessness.',
    order: 1,
    paragraphs: [
      {
        id: 'ibrahim-ch1-p1',
        text: 'Prophet Ibrahim (Abraham) was chosen by Allah as a close friend (Khalilullah). From a young age, he recognized the falsehood of idol worship. He challenged his father Azar and his people, asking why they worshipped statues that could neither hear nor see nor benefit them. When his people left for a festival, Ibrahim smashed all the idols except the largest one, then challenged them to ask it what happened.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 21,
            surahName: { en: 'Al-Anbiya', bn: 'আল-আম্বিয়া', ar: 'الأنبياء' },
            ayahStart: 51,
            ayahEnd: 67,
            translation: {
              en: 'And We had certainly given Abraham his sound judgement before, and We were of him well-Knowing. When he said to his father and his people, "What are these statues to which you are devoted?"',
              bn: 'আর আমি ইতিপূর্বে ইবরাহীমকে তার সঠিক পথ দিয়েছিলাম এবং আমি তার সম্পর্কে সম্যক অবগত ছিলাম। যখন সে তার পিতা ও তার জাতিকে বলল, "এই মূর্তিগুলো কী যেগুলোর পূজায় তোমরা নিমগ্ন?"',
              ar: 'وَلَقَدْ آتَيْنَا إِبْرَاهِيمَ رُشْدَهُ مِن قَبْلُ وَكُنَّا بِهِ عَالِمِينَ إِذْ قَالَ لِأَبِيهِ وَقَوْمِهِ مَا هَٰذِهِ التَّمَاثِيلُ الَّتِي أَنتُمْ لَهَا عَاكِفُونَ'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'ibrahim-ch2',
    title: 'The Trial of Fire and Building the Kaaba',
    summary: 'Ibrahim was thrown into a fire that Allah made cool and safe. Later, he and Ismail built the Kaaba in Makkah.',
    order: 2,
    paragraphs: [
      {
        id: 'ibrahim-ch2-p1',
        text: 'The people of Ibrahim decided to punish him by throwing him into a massive fire. But Allah commanded the fire, "O fire, be coolness and safety upon Ibrahim." The fire did not harm him at all. Later in his life, Allah commanded Ibrahim and his son Ismail to raise the foundations of the Kaaba in Makkah, the first house of worship established for mankind.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 21,
            surahName: { en: 'Al-Anbiya', bn: 'আল-আম্বিয়া', ar: 'الأنبياء' },
            ayahStart: 68,
            ayahEnd: 70,
            translation: {
              en: 'They said, "Burn him and support your gods — if you are to act." We said, "O fire, be coolness and safety upon Abraham." And they intended for him harm, but We made them the greatest losers.',
              bn: 'তারা বলল, "একে পুড়িয়ে দাও এবং তোমাদের উপাস্যদের সাহায্য করো — যদি তোমরা কিছু করতে চাও।" আমি বললাম, "হে আগুন, ইবরাহীমের প্রতি শীতল ও নিরাপদ হয়ে যাও।"',
              ar: 'قَالُوا حَرِّقُوهُ وَانصُرُوا آلِهَتَكُمْ إِن كُنتُمْ فَاعِلِينَ قُلْنَا يَا نَارُ كُونِي بَرْدًا وَسَلَامًا عَلَىٰ إِبْرَاهِيمَ'
            }
          },
          {
            type: 'quran',
            surah: 2,
            surahName: { en: 'Al-Baqarah', bn: 'আল-বাকারা', ar: 'البقرة' },
            ayahStart: 125,
            ayahEnd: 127,
            translation: {
              en: 'And [mention] when We made the House a place of return for the people and [a place of] security... And [mention] when Abraham was raising the foundations of the House and [with him] Ishmael.',
              bn: 'আর স্মরণ করুন, যখন আমি কাবাকে মানুষের জন্য সমাবেশস্থল ও নিরাপদ আশ্রয় বানিয়েছিলাম... এবং যখন ইবরাহীম ও ইসমাঈল কাবার ভিত্তি উঠাচ্ছিলেন।',
              ar: 'وَإِذْ جَعَلْنَا الْبَيْتَ مَثَابَةً لِّلنَّاسِ وَأَمْنًا... وَإِذْ يَرْفَعُ إِبْرَاهِيمُ الْقَوَاعِدَ مِنَ الْبَيْتِ وَإِسْمَاعِيلُ'
            }
          }
        ]
      }
    ]
  }
];

export default chapters;
