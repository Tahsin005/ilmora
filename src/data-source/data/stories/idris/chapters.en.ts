import type { StoryChapter } from '../../../types/prophet';

const chapters: StoryChapter[] = [
  {
    id: 'idris-ch1',
    title: 'The Righteous Prophet Idris',
    summary: 'Idris was a man of truth and a prophet, raised to a high station by Allah.',
    order: 1,
    paragraphs: [
      {
        id: 'idris-ch1-p1',
        text: 'Prophet Idris (Enoch) was among the earliest prophets sent to humanity. Allah describes him in the Quran as a man of truth (siddiq) and a prophet. He was known for his patience, devotion to worship, and his pursuit of knowledge. He is believed to have been the first to write with a pen and the first to sew garments.',
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
    title: 'Patience and High Station',
    summary: 'Idris is mentioned among the patient and righteous prophets favoured by Allah.',
    order: 2,
    paragraphs: [
      {
        id: 'idris-ch2-p1',
        text: 'Allah also mentions Idris alongside Ismail and Dhul-Kifl as examples of patience. All three were admitted into the mercy of Allah because of their steadfast devotion and righteousness. Idris dedicated himself to teaching his people the fundamentals of faith and morality, calling them away from sin and towards the worship of Allah alone.',
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
