import type { StoryChapter } from '../../../types/prophet';

const chapters: StoryChapter[] = [
  {
    id: 'hud-ch1',
    title: 'হুদ ও আদ জাতি',
    summary: 'হুদকে শক্তিশালী আদ জাতির কাছে পাঠানো হয়েছিল যারা অহংকারী ছিল এবং মূর্তিপূজা করত।',
    order: 1,
    paragraphs: [
      {
        id: 'hud-ch1-p1',
        text: 'নবী হুদ (আ.)-কে আদ জাতির কাছে পাঠানো হয়েছিল, যারা তাদের চমৎকার স্থাপত্য এবং শারীরিক শক্তির জন্য পরিচিত ছিল। তারা আল্লাহ থেকে মুখ ফিরিয়ে নিয়ে মূর্তিপূজা করত। হুদ তাদের একমাত্র আল্লাহর ইবাদতের দিকে আহ্বান করলেন এবং তাদের অহংকারের পরিণতি সম্পর্কে সতর্ক করলেন।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 11,
            surahName: { en: 'Hud', bn: 'হুদ', ar: 'هود' },
            ayahStart: 50,
            ayahEnd: 52,
            translation: {
              en: 'And to Ad [We sent] their brother Hud. He said, "O my people, worship Allah; you have no deity other than Him."',
              bn: 'আর আদ জাতির কাছে তাদের ভাই হুদকে পাঠালাম। সে বলল, "হে আমার জাতি, তোমরা আল্লাহর ইবাদত করো; তিনি ছাড়া তোমাদের কোনো ইলাহ নেই।"',
              ar: 'وَإِلَىٰ عَادٍ أَخَاهُمْ هُودًا ۚ قَالَ يَا قَوْمِ اعْبُدُوا اللَّهَ مَا لَكُم مِّنْ إِلَٰهٍ غَيْرُهُ'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'hud-ch2',
    title: 'আদ জাতির ধ্বংস',
    summary: 'আল্লাহ আদ জাতিকে সাত রাত আট দিন ধরে প্রচণ্ড ঝড়ো বাতাস দিয়ে ধ্বংস করলেন।',
    order: 2,
    paragraphs: [
      {
        id: 'hud-ch2-p1',
        text: 'আদ জাতি যখন হুদের সতর্কবাণী উপেক্ষা করল, আল্লাহ তাদের উপর ভয়ানক ঝড়ো বাতাস পাঠালেন। সেই প্রচণ্ড বাতাস সাত রাত আট দিন ধরে চলল এবং সবকিছু ধ্বংস করে দিল। আদ জাতি তাদের বিপুল শক্তি সত্ত্বেও আল্লাহর শাস্তির সামনে অসহায় ছিল।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 7,
            surahName: { en: 'Al-A\'raf', bn: 'আল-আ\'রাফ', ar: 'الأعراف' },
            ayahStart: 65,
            ayahEnd: 72,
            translation: {
              en: 'And to Ad [We sent] their brother Hud. He said, "O my people, worship Allah; you have no deity other than Him. Then will you not fear Him?"',
              bn: 'আর আদ জাতির কাছে তাদের ভাই হুদকে পাঠালাম। সে বলল, "হে আমার জাতি, তোমরা আল্লাহর ইবাদত করো; তিনি ছাড়া তোমাদের কোনো ইলাহ নেই। তোমরা কি তাকওয়া অবলম্বন করবে না?"',
              ar: 'وَإِلَىٰ عَادٍ أَخَاهُمْ هُودًا ۗ قَالَ يَا قَوْمِ اعْبُدُوا اللَّهَ مَا لَكُم مِّنْ إِلَٰهٍ غَيْرُهُ ۚ أَفَلَا تَتَّقُونَ'
            }
          }
        ]
      }
    ]
  }
];

export default chapters;
