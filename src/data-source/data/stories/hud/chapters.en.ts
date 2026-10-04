import type { StoryChapter } from '../../../types/prophet';

const chapters: StoryChapter[] = [
  {
    id: 'hud-ch1',
    title: 'Hud and the People of Ad',
    summary: 'Hud was sent to the mighty people of Ad who were arrogant and worshipped idols despite their great strength.',
    order: 1,
    paragraphs: [
      {
        id: 'hud-ch1-p1',
        text: 'Prophet Hud was sent to the people of Ad, a powerful nation known for their impressive buildings and great physical strength. They had turned away from Allah and worshipped idols. Hud called them to worship Allah alone and warned them of the consequences of their arrogance, but they mocked him and said, "Who is mightier than us in strength?"',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 11,
            surahName: { en: 'Hud', bn: 'হুদ', ar: 'هود' },
            ayahStart: 50,
            ayahEnd: 52,
            translation: {
              en: 'And to Ad [We sent] their brother Hud. He said, "O my people, worship Allah; you have no deity other than Him. You are not but inventors [of falsehood]."',
              bn: 'আর আদ জাতির কাছে তাদের ভাই হুদকে পাঠালাম। সে বলল, "হে আমার জাতি, তোমরা আল্লাহর ইবাদত করো; তিনি ছাড়া তোমাদের কোনো ইলাহ নেই। তোমরা তো মিথ্যা রচনাকারী ছাড়া আর কিছু নও।"',
              ar: 'وَإِلَىٰ عَادٍ أَخَاهُمْ هُودًا ۚ قَالَ يَا قَوْمِ اعْبُدُوا اللَّهَ مَا لَكُم مِّنْ إِلَٰهٍ غَيْرُهُ ۖ إِنْ أَنتُمْ إِلَّا مُفْتَرُونَ'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'hud-ch2',
    title: 'The Destruction of Ad',
    summary: 'Allah destroyed the people of Ad with a furious wind that lasted seven nights and eight days.',
    order: 2,
    paragraphs: [
      {
        id: 'hud-ch2-p1',
        text: 'When the people of Ad refused to heed Hud\'s warnings, Allah sent upon them a devastating wind. It was a furious, screaming wind that lasted seven nights and eight days, destroying everything in its path. The people of Ad, despite their great strength, were helpless before Allah\'s punishment. Hud and the believers were saved.',
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
              bn: 'আর আদ জাতির কাছে তাদের ভাই হুদকে পাঠালাম। সে বলল, "হে আমার জাতি, তোমরা আল্লাহর ইবাদত করো; তিনি ছাড়া তোমাদের কোনো ইলাহ নেই। তোমরা কি তাকওয়া অবলম্বন করবে না?"',
              ar: 'وَإِلَىٰ عَادٍ أَخَاهُمْ هُودًا ۗ قَالَ يَا قَوْمِ اعْبُدُوا اللَّهَ مَا لَكُم مِّنْ إِلَٰهٍ غَيْرُهُ ۚ أَفَلَا تَتَّقُونَ'
            }
          }
        ]
      }
    ]
  }
];

export default chapters;
