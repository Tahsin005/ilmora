import type { StoryChapter } from '../../../types/prophet';

const chapters: StoryChapter[] = [
  {
    id: 'idris-ch1',
    title: 'النبي الصدّيق إدريس',
    summary: 'كان إدريس صدّيقاً نبياً رفعه الله مكاناً علياً.',
    order: 1,
    paragraphs: [
      {
        id: 'idris-ch1-p1',
        text: 'كان النبي إدريس عليه السلام من أوائل الأنبياء المرسلين إلى البشرية. وصفه الله في القرآن بأنه صدّيق ونبي. عُرف بصبره وتفانيه في العبادة وسعيه في طلب العلم. رفعه الله مكاناً علياً تكريماً له.',
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
    title: 'الصبر والمكانة العالية',
    summary: 'ذُكر إدريس مع الأنبياء الصابرين الصالحين الذين أدخلهم الله في رحمته.',
    order: 2,
    paragraphs: [
      {
        id: 'idris-ch2-p1',
        text: 'ذكر الله إدريس مع إسماعيل وذي الكفل كأمثلة على الصبر. أُدخلوا جميعاً في رحمة الله لثباتهم في العبادة وصلاحهم.',
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
