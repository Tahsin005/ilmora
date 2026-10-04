import type { StoryChapter } from '../../../types/prophet';

const chapters: StoryChapter[] = [
  {
    id: 'salih-ch1',
    title: 'صالح وقوم ثمود',
    summary: 'أُرسل صالح إلى قوم ثمود الذين كانوا ينحتون من الجبال بيوتاً لكنهم رفضوا عبادة الله.',
    order: 1,
    paragraphs: [
      {
        id: 'salih-ch1-p1',
        text: 'أُرسل النبي صالح عليه السلام إلى قوم ثمود الذين عُرفوا بنحت البيوت من الجبال. رغم حضارتهم المتقدمة عبدوا الأصنام. دعاهم صالح إلى عبادة الله وحده وجاءتهم آية من ربهم: ناقة خرجت من صخرة معجزةً لهم.',
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
              bn: 'আর সামূদ জাতির কাছে তাদের ভাই সালিহকে পাঠালাম। সে বলল, "হে আমার জাতি, তোমরা আল্লাহর ইবাদত করো।"',
              ar: 'وَإِلَىٰ ثَمُودَ أَخَاهُمْ صَالِحًا ۗ قَالَ يَا قَوْمِ اعْبُدُوا اللَّهَ مَا لَكُم مِّنْ إِلَٰهٍ غَيْرُهُ'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'salih-ch2',
    title: 'عقر الناقة والهلاك',
    summary: 'عقر المستكبرون من ثمود الناقة فأهلكهم الله بالرجفة.',
    order: 2,
    paragraphs: [
      {
        id: 'salih-ch2-p1',
        text: 'رغم التحذير الواضح عقر المستكبرون من ثمود الناقة وتحدّوا صالحاً أن يأتيهم بالعذاب. فأخبرهم أن أمامهم ثلاثة أيام فقط. ثم أرسل الله عليهم رجفة عظيمة وصيحة مدمرة فأصبحوا في ديارهم جاثمين.',
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
