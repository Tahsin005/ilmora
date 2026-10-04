import type { StoryChapter } from '../../../types/prophet';

const chapters: StoryChapter[] = [
  {
    id: 'dhul-kifl-ch1',
    title: 'The Patient Prophet',
    summary: 'Dhul-Kifl is praised in the Quran for his patience and righteousness among the prophets.',
    order: 1,
    paragraphs: [
      {
        id: 'dhul-kifl-ch1-p1',
        text: 'Dhul-Kifl is mentioned twice in the Quran alongside other righteous prophets. He is praised for his patience and righteousness. Allah mentions him together with Ismail and Idris, saying they were all among the patient ones, and He admitted them into His mercy, for they were among the righteous.',
        phase: 'quran',
        references: [{
          type: 'quran',
          surah: 21,
          surahName: { en: 'Al-Anbiya', bn: 'আল-আম্বিয়া', ar: 'الأنبياء' },
          ayahStart: 85,
          ayahEnd: 86,
          translation: {
            en: 'And [mention] Ismail and Idris and Dhul-Kifl; all were of the patient. And We admitted them into Our mercy. Indeed, they were of the righteous.',
            bn: 'আর ইসমাইল, ইদরীস ও যুল-কিফলের কথা স্মরণ করো; তারা সকলেই ছিল ধৈর্যশীলদের অন্তর্ভুক্ত। আমি তাদেরকে আমার রহমতে প্রবেশ করিয়েছিলাম। নিশ্চয়ই তারা ছিল সৎকর্মশীলদের অন্তর্ভুক্ত।',
            ar: 'وَإِسْمَاعِيلَ وَإِدْرِيسَ وَذَا الْكِفْلِ ۖ كُلٌّ مِّنَ الصَّابِرِينَ وَأَدْخَلْنَاهُمْ فِي رَحْمَتِنَا ۖ إِنَّهُم مِّنَ الصَّالِحِينَ'
          }
        }],
      },
      {
        id: 'dhul-kifl-ch1-p2',
        text: 'He is also mentioned alongside Ismail and Ilyas as one of the best of creation. Allah reminds the believers to remember these prophets, each of whom was among the outstanding, and commands that their example of patience and devotion be followed.',
        phase: 'quran',
        references: [{
          type: 'quran',
          surah: 38,
          surahName: { en: 'Sad', bn: 'সোয়াদ', ar: 'ص' },
          ayahStart: 48,
          translation: {
            en: 'And remember Ismail, Ilyas, and Dhul-Kifl; all are among the outstanding.',
            bn: 'আর স্মরণ করো ইসমাইল, ইলিয়াস ও যুল-কিফলের কথা; তারা প্রত্যেকেই ছিল শ্রেষ্ঠদের অন্তর্ভুক্ত।',
            ar: 'وَاذْكُرْ إِسْمَاعِيلَ وَالْيَسَعَ وَذَا الْكِفْلِ ۖ وَكُلٌّ مِّنَ الْأَخْيَارِ'
          }
        }],
      },
    ],
  },
];

export default chapters;
