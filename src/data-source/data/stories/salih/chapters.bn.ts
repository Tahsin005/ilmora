import type { StoryChapter } from '../../../types/prophet';

const chapters: StoryChapter[] = [
  {
    id: 'salih-ch1',
    title: 'সালিহ ও সামূদ জাতি',
    summary: 'সালিহকে সামূদ জাতির কাছে পাঠানো হয়েছিল যারা পাহাড় কেটে ঘর তৈরি করত কিন্তু আল্লাহকে প্রত্যাখ্যান করেছিল।',
    order: 1,
    paragraphs: [
      {
        id: 'salih-ch1-p1',
        text: 'নবী সালিহ (আ.)-কে সামূদ জাতির কাছে পাঠানো হয়েছিল, যারা পাহাড় কেটে চমৎকার গৃহ নির্মাণের জন্য পরিচিত ছিল। তাদের উন্নত সভ্যতা সত্ত্বেও তারা মূর্তিপূজা করত। সালিহ তাদের একমাত্র আল্লাহর ইবাদতের দিকে আহ্বান করলেন এবং আল্লাহর পক্ষ থেকে নিদর্শন হিসেবে একটি উটনী অলৌকিকভাবে পাথর থেকে বের হলো।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 7,
            surahName: { en: 'Al-A\'raf', bn: 'আল-আ\'রাফ', ar: 'الأعراف' },
            ayahStart: 73,
            ayahEnd: 74,
            translation: {
              en: 'And to Thamud [We sent] their brother Salih. He said, "O my people, worship Allah; you have no deity other than Him."',
              bn: 'আর সামূদ জাতির কাছে তাদের ভাই সালিহকে পাঠালাম। সে বলল, "হে আমার জাতি, তোমরা আল্লাহর ইবাদত করো; তিনি ছাড়া তোমাদের কোনো ইলাহ নেই।"',
              ar: 'وَإِلَىٰ ثَمُودَ أَخَاهُمْ صَالِحًا ۗ قَالَ يَا قَوْمِ اعْبُدُوا اللَّهَ مَا لَكُم مِّنْ إِلَٰهٍ غَيْرُهُ'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'salih-ch2',
    title: 'উটনী হত্যা ও ধ্বংস',
    summary: 'সামূদের অহংকারীরা উটনীকে হত্যা করল এবং ভয়ানক ভূমিকম্পে ধ্বংস হলো।',
    order: 2,
    paragraphs: [
      {
        id: 'salih-ch2-p1',
        text: 'স্পষ্ট সতর্কবাণী সত্ত্বেও সামূদের অহংকারীরা উটনীকে হত্যা করল এবং সালিহকে চ্যালেঞ্জ জানাল শাস্তি নিয়ে আসতে। সালিহ তাদের বললেন তাদের মাত্র তিন দিন বাকি। তারপর আল্লাহ তাদের উপর ভয়ানক ভূমিকম্প ও বজ্রনাদ পাঠালেন যা তাদের ঘরেই নিথর করে দিল।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 7,
            surahName: { en: 'Al-A\'raf', bn: 'আল-আ\'রাফ', ar: 'الأعراف' },
            ayahStart: 77,
            ayahEnd: 79,
            translation: {
              en: 'So they hamstrung the she-camel and were insolent toward the command of their Lord.',
              bn: 'অতঃপর তারা সেই উটনীকে হত্যা করল এবং তাদের রবের আদেশের বিরুদ্ধে ঔদ্ধত্য প্রকাশ করল।',
              ar: 'فَعَقَرُوا النَّاقَةَ وَعَتَوْا عَنْ أَمْرِ رَبِّهِمْ'
            }
          }
        ]
      }
    ]
  }
];

export default chapters;
