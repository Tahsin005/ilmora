import type { StoryChapter } from '../../../types/prophet';

const chapters: StoryChapter[] = [
  { id: 'yunus-ch1', title: 'ইউনুস ও তাঁর সম্প্রদায়', order: 1,
    summary: 'নবী ইউনুসকে নিনেভায় পাঠানো হয়। প্রত্যাখ্যাত হয়ে তিনি চলে যান, কিন্তু তাঁর সম্প্রদায় তওবা করে রক্ষা পায়।',
    paragraphs: [
      { id: 'yunus-ch1-p1',
        text: 'নবী ইউনুস (আ.) কে আল্লাহ নিনেভার মূর্তিপূজক অধিবাসীদের কাছে পাঠিয়েছিলেন। তিনি তাদের তওবার দিকে আহ্বান করেন, কিন্তু তারা প্রত্যাখ্যান করে। হতাশ হয়ে ইউনুস আল্লাহর অনুমতি ছাড়াই চলে যান।',
        phase: 'quran',
        references: [{
          type: 'quran', surah: 37,
          surahName: { en: 'As-Saffat', bn: 'আস-সাফফাত', ar: 'الصافات' },
          ayahStart: 139, ayahEnd: 142,
          translation: {
            en: 'And indeed, Yunus was among the messengers. When he ran away to the laden ship. He drew lots and was among the losers. Then the fish swallowed him, while he was blameworthy.',
            bn: 'নিশ্চয়ই ইউনুস ছিলেন রাসূলদের একজন। যখন তিনি পালিয়ে বোঝাই জাহাজে গেলেন। লটারিতে পরাজিত হলেন। মাছ তাঁকে গিলে ফেলল।',
            ar: 'وَإِنَّ يُونُسَ لَمِنَ الْمُرْسَلِينَ إِذْ أَبَقَ إِلَى الْفُلْكِ الْمَشْحُونِ فَسَاهَمَ فَكَانَ مِنَ الْمُدْحَضِينَ فَالْتَقَمَهُ الْحُوتُ وَهُوَ مُلِيمٌ'
          }
        }]
      },
      { id: 'yunus-ch1-p2',
        text: 'ইউনুস চলে যাওয়ার পর নিনেভার অধিবাসীরা শাস্তির লক্ষণ দেখে আন্তরিকভাবে তওবা করল। আল্লাহ তাদের তওবা কবুল করে শাস্তি উঠিয়ে নিলেন। কুরআনে তারাই একমাত্র সম্প্রদায় যাদের সম্মিলিত তওবা তাদের রক্ষা করেছিল।',
        phase: 'quran',
        references: [{
          type: 'quran', surah: 10,
          surahName: { en: 'Yunus', bn: 'ইউনুস', ar: 'يونس' },
          ayahStart: 98,
          translation: {
            en: 'Was there any city that believed so its faith benefited it except the people of Yunus? When they believed, We removed from them the punishment of disgrace.',
            bn: 'ইউনুসের সম্প্রদায় ছাড়া কোনো জনপদ কি ঈমান এনে উপকৃত হয়েছে? তারা ঈমান আনলে আমি অপমানকর শাস্তি দূর করলাম।',
            ar: 'فَلَوْلَا كَانَتْ قَرْيَةٌ آمَنَتْ فَنَفَعَهَا إِيمَانُهَا إِلَّا قَوْمَ يُونُسَ لَمَّا آمَنُوا كَشَفْنَا عَنْهُمْ عَذَابَ الْخِزْيِ فِي الْحَيَاةِ الدُّنْيَا وَمَتَّعْنَاهُمْ إِلَىٰ حِينٍ'
          }
        }]
      }
    ]
  },
  { id: 'yunus-ch2', title: 'তিমি মাছের পেটে', order: 2,
    summary: 'ইউনুসকে বিশাল মাছ গিলে ফেলল এবং তিনি আল্লাহর কাছে তওবা করলেন।',
    paragraphs: [
      { id: 'yunus-ch2-p1',
        text: 'ইউনুস একটি বোঝাই জাহাজে উঠলেন। ঝড় আঘাত হানলে লটারি করা হলো এবং তাঁকে সমুদ্রে নিক্ষেপ করা হলো। আল্লাহর নির্দেশে একটি বিশাল মাছ তাঁকে গিলে ফেলল।',
        phase: 'quran',
        references: [{
          type: 'quran', surah: 37,
          surahName: { en: 'As-Saffat', bn: 'আস-সাফফাত', ar: 'الصافات' },
          ayahStart: 140, ayahEnd: 142,
          translation: {
            en: 'He drew lots and was among the losers. Then the fish swallowed him, while he was blameworthy.',
            bn: 'লটারিতে তিনি পরাজিত হলেন। মাছ তাঁকে গিলে ফেলল, আর তিনি ছিলেন নিন্দিত।',
            ar: 'فَسَاهَمَ فَكَانَ مِنَ الْمُدْحَضِينَ فَالْتَقَمَهُ الْحُوتُ وَهُوَ مُلِيمٌ'
          }
        }]
      },
      { id: 'yunus-ch2-p2',
        text: 'মাছের পেটের অন্ধকারে ইউনুস ডাকলেন: "তুমি ছাড়া কোনো ইলাহ নেই; তুমি পবিত্র মহান। নিশ্চয়ই আমি জালিমদের অন্তর্ভুক্ত ছিলাম।" এই দোয়া সকল মুমিনের জন্য তওবার আদর্শ।',
        phase: 'quran',
        references: [{
          type: 'quran', surah: 21,
          surahName: { en: 'Al-Anbiya', bn: 'আল-আম্বিয়া', ar: 'الأنبياء' },
          ayahStart: 87,
          translation: {
            en: 'And the man of the fish called out in the darknesses, "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers."',
            bn: 'মাছওয়ালা অন্ধকার থেকে ডাকলেন: "তুমি ছাড়া কোনো ইলাহ নেই; তুমি পবিত্র মহান। আমি জালিমদের অন্তর্ভুক্ত ছিলাম।"',
            ar: 'وَذَا النُّونِ إِذ ذَّهَبَ مُغَاضِبًا فَنَادَىٰ فِي الظُّلُمَاتِ أَن لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ'
          }
        }]
      }
    ]
  },
  { id: 'yunus-ch3', title: 'মুক্তি ও প্রত্যাবর্তন', order: 3,
    summary: 'আল্লাহ ইউনুসের দোয়া কবুল করে তাঁকে উদ্ধার করলেন এবং তাঁর ঈমানদার সম্প্রদায়ের কাছে ফিরিয়ে পাঠালেন।',
    paragraphs: [
      { id: 'yunus-ch3-p1',
        text: 'আল্লাহ ইউনুসের দোয়া কবুল করলেন। মাছ তাঁকে অসুস্থ অবস্থায় তীরে নিক্ষেপ করল। আল্লাহ তাঁর উপর লাউ গাছ উদ্গত করলেন যা ছায়া ও পুষ্টি দিয়ে তাঁকে সুস্থ করে তুলল।',
        phase: 'quran',
        references: [{
          type: 'quran', surah: 37,
          surahName: { en: 'As-Saffat', bn: 'আস-সাফফাত', ar: 'الصافات' },
          ayahStart: 143, ayahEnd: 146,
          translation: {
            en: 'Had he not exalted Allah, he would have remained in its belly until Resurrection. We threw him onto the shore while ill. We caused a gourd vine to grow over him.',
            bn: 'তিনি তাসবীহকারী না হলে পুনরুত্থান পর্যন্ত পেটেই থাকতেন। আমি তাঁকে অসুস্থ অবস্থায় তীরে নিক্ষেপ করলাম। তাঁর উপর লাউ গাছ উদ্গত করলাম।',
            ar: 'فَلَوْلَا أَنَّهُ كَانَ مِنَ الْمُسَبِّحِينَ لَلَبِثَ فِي بَطْنِهِ إِلَىٰ يَوْمِ يُبْعَثُونَ فَنَبَذْنَاهُ بِالْعَرَاءِ وَهُوَ سَقِيمٌ وَأَنبَتْنَا عَلَيْهِ شَجَرَةً مِّن يَقْطِينٍ'
          }
        }]
      },
      { id: 'yunus-ch3-p2',
        text: 'আল্লাহ ইউনুসকে তাঁর সম্প্রদায়ের কাছে পাঠালেন — লক্ষাধিক লোক — এবং তারা সবাই ঈমান আনল। আল্লাহ সতর্ক করেন: "মাছওয়ালার মতো হয়ো না।" এই কাহিনী ধৈর্য, তওবা ও তাওয়াক্কুলের শিক্ষা দেয়।',
        phase: 'quran',
        references: [{
          type: 'quran', surah: 37,
          surahName: { en: 'As-Saffat', bn: 'আস-সাফফাত', ar: 'الصافات' },
          ayahStart: 147, ayahEnd: 148,
          translation: {
            en: 'And they believed, so We gave them enjoyment for a time.',
            bn: 'তারা ঈমান আনল, তাই আমি তাদের কিছুকাল ভোগ করতে দিলাম।',
            ar: 'فَآمَنُوا فَمَتَّعْنَاهُمْ إِلَىٰ حِينٍ'
          }
        }, {
          type: 'quran', surah: 68,
          surahName: { en: 'Al-Qalam', bn: 'আল-কলম', ar: 'القلم' },
          ayahStart: 48, ayahEnd: 50,
          translation: {
            en: 'Be patient for your Lord\'s decision, and be not like the companion of the fish. His Lord chose him and made him of the righteous.',
            bn: 'তোমার রবের ফয়সালার জন্য ধৈর্য ধরো, মাছওয়ালার মতো হয়ো না। তার রব তাকে মনোনীত করে সৎকর্মশীলদের অন্তর্ভুক্ত করলেন।',
            ar: 'فَاصْبِرْ لِحُكْمِ رَبِّكَ وَلَا تَكُن كَصَاحِبِ الْحُوتِ إِذْ نَادَىٰ وَهُوَ مَكْظُومٌ فَاجْتَبَاهُ رَبُّهُ فَجَعَلَهُ مِنَ الصَّالِحِينَ'
          }
        }]
      }
    ]
  }
];

export default chapters;
