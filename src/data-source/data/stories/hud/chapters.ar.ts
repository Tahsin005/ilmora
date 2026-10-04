import type { StoryChapter } from '../../../types/prophet';

const chapters: StoryChapter[] = [
  {
    id: 'hud-ch1',
    title: 'هود وقوم عاد',
    summary: 'أُرسل هود إلى قوم عاد الأقوياء الذين كانوا مستكبرين ويعبدون الأصنام.',
    order: 1,
    paragraphs: [
      {
        id: 'hud-ch1-p1',
        text: 'أُرسل النبي هود عليه السلام إلى قوم عاد الذين عُرفوا ببنيانهم العظيم وقوتهم الجسدية. أعرضوا عن الله وعبدوا الأصنام. دعاهم هود إلى عبادة الله وحده وحذّرهم من عاقبة استكبارهم.',
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
    title: 'هلاك قوم عاد',
    summary: 'أهلك الله قوم عاد بريح صرصر عاتية استمرت سبع ليالٍ وثمانية أيام.',
    order: 2,
    paragraphs: [
      {
        id: 'hud-ch2-p1',
        text: 'لما رفض قوم عاد تحذيرات هود أرسل الله عليهم ريحاً عاتية. ريح صرصر استمرت سبع ليالٍ وثمانية أيام دمرت كل شيء في طريقها. قوم عاد رغم قوتهم العظيمة كانوا عاجزين أمام عذاب الله. نجا هود والمؤمنون.',
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
              bn: 'আর আদ জাতির কাছে তাদের ভাই হুদকে পাঠালাম। সে বলল, "হে আমার জাতি, তোমরা আল্লাহর ইবাদত করো; তিনি ছাড়া তোমাদের কোনো ইলাহ নেই।"',
              ar: 'وَإِلَىٰ عَادٍ أَخَاهُمْ هُودًا ۗ قَالَ يَا قَوْمِ اعْبُدُوا اللَّهَ مَا لَكُم مِّنْ إِلَٰهٍ غَيْرُهُ ۚ أَفَلَا تَتَّقُونَ'
            }
          }
        ]
      }
    ]
  }
];

export default chapters;
