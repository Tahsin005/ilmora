import type { StoryChapter } from '../../../types/prophet';

const chapters: StoryChapter[] = [
  {
    id: 'al-yasa-ch1',
    title: 'النبي المختار اليسع',
    summary: 'خلف اليسع إلياس وذُكر في القرآن من الذين فضّلهم الله على العالمين.',
    order: 1,
    paragraphs: [
      {
        id: 'al-yasa-ch1-p1',
        text: 'اليسع عليه السلام خلف النبي إلياس عليه السلام واستمر في دعوة بني إسرائيل إلى عبادة الله وحده. ذكره الله في القرآن الكريم ضمن الأنبياء الذين هداهم وفضّلهم على العالمين. أدرجه الله في سلسلة الأنبياء الكرام من ذرية إبراهيم، مؤكداً مكانته العالية بين الصالحين.',
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
        text: 'كما ذُكر اليسع في القرآن مع إسماعيل وذي الكفل باعتبارهم من الأخيار. أثنى الله عليهم وأمر النبي محمداً صلى الله عليه وسلم بذكرهم، مما يبرز تميّزهم وصبرهم وإخلاصهم في سبيل الله. حمل اليسع رسالة النبوة بثبات وصلاح.',
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
