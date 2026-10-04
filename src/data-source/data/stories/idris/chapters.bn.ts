import type { StoryChapter } from '../../../types/prophet';

const chapters: StoryChapter[] = [
  {
    id: 'idris-ch1',
    title: 'সত্যনিষ্ঠ নবী ইদরীস',
    summary: 'ইদরীস ছিলেন একজন সত্যনিষ্ঠ নবী, আল্লাহ তাঁকে উচ্চ মর্যাদায় উন্নীত করেছেন।',
    order: 1,
    paragraphs: [
      {
        id: 'idris-ch1-p1',
        text: 'নবী ইদরীস (আ.) ছিলেন মানবজাতির প্রতি প্রেরিত প্রথম দিকের নবীদের একজন। আল্লাহ তাঁকে কুরআনে সত্যনিষ্ঠ (সিদ্দীক) এবং নবী হিসেবে বর্ণনা করেছেন। তিনি তাঁর ধৈর্য, ইবাদতে নিষ্ঠা এবং জ্ঞান অন্বেষণের জন্য পরিচিত ছিলেন। আল্লাহ তাঁকে উচ্চ মর্যাদায় উন্নীত করেছেন।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 19,
            surahName: { en: 'Maryam', bn: 'মারইয়াম', ar: 'مريم' },
            ayahStart: 56,
            ayahEnd: 57,
            translation: {
              en: 'And mention in the Book, Idris. Indeed, he was a man of truth and a prophet. And We raised him to a high station.',
              bn: 'আর এই কিতাবে ইদরীসের কথা স্মরণ করুন। নিশ্চয়ই তিনি ছিলেন সত্যনিষ্ঠ ও একজন নবী। আর আমি তাঁকে উচ্চ মর্যাদায় উন্নীত করেছি।',
              ar: 'وَاذْكُرْ فِي الْكِتَابِ إِدْرِيسَ ۚ إِنَّهُ كَانَ صِدِّيقًا نَّبِيًّا وَرَفَعْنَاهُ مَكَانًا عَلِيًّا'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'idris-ch2',
    title: 'ধৈর্য ও উচ্চ মর্যাদা',
    summary: 'ইদরীসকে ধৈর্যশীল ও সৎকর্মশীল নবীদের মধ্যে উল্লেখ করা হয়েছে।',
    order: 2,
    paragraphs: [
      {
        id: 'idris-ch2-p1',
        text: 'আল্লাহ ইদরীসকে ইসমাঈল ও যুল-কিফলের পাশাপাশি ধৈর্যের উদাহরণ হিসেবে উল্লেখ করেছেন। তাঁদের সকলকে আল্লাহর রহমতে প্রবেশ করানো হয়েছে কারণ তাঁরা ছিলেন অবিচল ভক্ত ও সৎকর্মশীল।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 21,
            surahName: { en: 'Al-Anbiya', bn: 'আল-আম্বিয়া', ar: 'الأنبياء' },
            ayahStart: 85,
            ayahEnd: 86,
            translation: {
              en: 'And [mention] Ismail and Idris and Dhul-Kifl; all were of the patient. And We admitted them into Our mercy. Indeed, they were of the righteous.',
              bn: 'আর স্মরণ করুন ইসমাঈল, ইদরীস ও যুল-কিফলের কথা; তারা সবাই ছিলেন ধৈর্যশীল। আমি তাদের আমার রহমতে প্রবেশ করিয়েছি। নিশ্চয়ই তারা ছিলেন সৎকর্মশীলদের অন্তর্ভুক্ত।',
              ar: 'وَإِسْمَاعِيلَ وَإِدْرِيسَ وَذَا الْكِفْلِ ۖ كُلٌّ مِّنَ الصَّابِرِينَ وَأَدْخَلْنَاهُمْ فِي رَحْمَتِنَا ۖ إِنَّهُم مِّنَ الصَّالِحِينَ'
            }
          }
        ]
      }
    ]
  }
];

export default chapters;
