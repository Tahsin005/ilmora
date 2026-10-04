import type { StoryChapter } from '../../../types/prophet';

const chapters: StoryChapter[] = [
  {
    id: 'al-yasa-ch1',
    title: 'The Chosen Prophet Al-Yasa',
    summary: 'Al-Yasa succeeded Ilyas and is mentioned among those favoured by Allah above the nations.',
    order: 1,
    paragraphs: [
      {
        id: 'al-yasa-ch1-p1',
        text: 'Al-Yasa (Elisha) succeeded Prophet Ilyas (Elijah) and continued his mission of calling the people of Israel back to the worship of Allah alone. He is mentioned in the Quran among those whom Allah guided and favoured above the nations. Allah included him in the noble lineage of prophets descended from Ibrahim, affirming his high status among the righteous.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 6,
            surahName: { en: 'Al-An\'am', bn: 'আল-আনআম', ar: 'الأنعام' },
            ayahStart: 86,
            translation: {
              en: 'And Ismail and Al-Yasa and Yunus and Lut — and all [of them] We preferred over the worlds.',
              bn: 'আর ইসমাঈল, আল-ইয়াসা, ইউনুস ও লূত — তাদের প্রত্যেককে আমি বিশ্ববাসীর উপর শ্রেষ্ঠত্ব দিয়েছি।',
              ar: 'وَإِسْمَاعِيلَ وَالْيَسَعَ وَيُونُسَ وَلُوطًا ۚ وَكُلًّا فَضَّلْنَا عَلَى الْعَالَمِينَ'
            }
          }
        ]
      },
      {
        id: 'al-yasa-ch1-p2',
        text: 'Al-Yasa is also mentioned in the Quran alongside Ismail and Dhul-Kifl as being among the best of people. Allah commends them and instructs the Prophet Muhammad to remember them, highlighting their excellence, patience, and devotion to the path of Allah. Al-Yasa carried forward the prophetic tradition with steadfastness and righteousness.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 38,
            surahName: { en: 'Sad', bn: 'সোয়াদ', ar: 'ص' },
            ayahStart: 48,
            translation: {
              en: 'And remember Ismail and Al-Yasa and Dhul-Kifl, and all are among the outstanding.',
              bn: 'আর স্মরণ করুন ইসমাঈল, আল-ইয়াসা ও যুল-কিফলকে; তারা সবাই ছিলেন সর্বোত্তমদের অন্তর্ভুক্ত।',
              ar: 'وَاذْكُرْ إِسْمَاعِيلَ وَالْيَسَعَ وَذَا الْكِفْلِ ۖ وَكُلٌّ مِّنَ الْأَخْيَارِ'
            }
          }
        ]
      }
    ]
  }
];

export default chapters;
