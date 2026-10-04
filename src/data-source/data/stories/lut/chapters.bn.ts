import type { StoryChapter } from '../../../types/prophet';

const chapters: StoryChapter[] = [
  {
    id: 'lut-ch1',
    title: 'লূত তাঁর জাতিকে সতর্ক করলেন',
    summary: 'লূতকে সদোমের মানুষদের কাছে পাঠানো হয়েছিল যারা জঘন্য পাপে লিপ্ত ছিল।',
    order: 1,
    paragraphs: [
      {
        id: 'lut-ch1-p1',
        text: 'নবী লূত (আ.) ছিলেন ইবরাহীমের ভাতিজা এবং তাঁকে সদোমের মানুষদের কাছে পাঠানো হয়েছিল। তাঁর জাতি সৃষ্টিকুলে অভূতপূর্ব অনৈতিক কাজে লিপ্ত ছিল। লূত তাদের আল্লাহকে ভয় করতে এবং তাদের লজ্জাজনক কাজ পরিত্যাগ করতে আহ্বান করলেন, কিন্তু তারা তাঁর বার্তা প্রত্যাখ্যান করল।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 7,
            surahName: { en: 'Al-A\'raf', bn: 'আল-আ\'রাফ', ar: 'الأعراف' },
            ayahStart: 80,
            ayahEnd: 81,
            translation: {
              en: 'And [We had sent] Lot when he said to his people, "Do you commit such immorality as no one has preceded you with from among the worlds?"',
              bn: 'আর স্মরণ করুন লূতের কথা, যখন সে তার জাতিকে বলল, "তোমরা কি এমন অশ্লীলতা করছ যা তোমাদের পূর্বে সৃষ্টিকুলের কেউ করেনি?"',
              ar: 'وَلُوطًا إِذْ قَالَ لِقَوْمِهِ أَتَأْتُونَ الْفَاحِشَةَ مَا سَبَقَكُم بِهَا مِنْ أَحَدٍ مِّنَ الْعَالَمِينَ'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'lut-ch2',
    title: 'সদোমের ধ্বংস',
    summary: 'আল্লাহ লূতের কাছে ফেরেশতা পাঠালেন এবং তাঁর জাতির শহরগুলো উল্টে দিয়ে পাথর বর্ষণ করে ধ্বংস করলেন।',
    order: 2,
    paragraphs: [
      {
        id: 'lut-ch2-p1',
        text: 'আল্লাহ সুদর্শন পুরুষের রূপে ফেরেশতাদের পাঠালেন। লূতের জাতি মন্দ উদ্দেশ্যে তাঁর বাড়িতে ছুটে এলে লূত চিন্তিত হলেন। ফেরেশতারা তাঁদের পরিচয় প্রকাশ করলেন এবং লূতকে রাতে পরিবার নিয়ে চলে যেতে বললেন। ভোরে আল্লাহ শহরগুলো উল্টে দিলেন এবং পাথর বর্ষণ করলেন।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 11,
            surahName: { en: 'Hud', bn: 'হুদ', ar: 'هود' },
            ayahStart: 77,
            ayahEnd: 83,
            translation: {
              en: 'And when Our messengers came to Lot, he was anguished for them and felt for them great discomfort.',
              bn: 'আর যখন আমার দূতেরা লূতের কাছে এলো, সে তাদের জন্য চিন্তিত ও বিপন্ন হলো।',
              ar: 'وَلَمَّا جَاءَتْ رُسُلُنَا لُوطًا سِيءَ بِهِمْ وَضَاقَ بِهِمْ ذَرْعًا'
            }
          }
        ]
      }
    ]
  }
];

export default chapters;
