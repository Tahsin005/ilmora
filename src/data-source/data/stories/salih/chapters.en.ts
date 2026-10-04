import type { StoryChapter } from '../../../types/prophet';

const chapters: StoryChapter[] = [
  {
    id: 'salih-ch1',
    title: 'Salih and the People of Thamud',
    summary: 'Salih was sent to the people of Thamud who carved homes from mountains but rejected Allah.',
    order: 1,
    paragraphs: [
      {
        id: 'salih-ch1-p1',
        text: 'Prophet Salih was sent to the people of Thamud, who were known for carving impressive homes out of mountains. Despite their advanced civilization, they worshipped idols. Salih called them to worship Allah alone and as a sign from Allah, a she-camel was miraculously brought forth from a rock. The people were warned not to harm her.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 7,
            surahName: { en: 'Al-A\'raf', bn: 'আল-আ\'রাফ', ar: 'الأعراف' },
            ayahStart: 73,
            ayahEnd: 74,
            translation: {
              en: 'And to Thamud [We sent] their brother Salih. He said, "O my people, worship Allah; you have no deity other than Him. There has come to you clear evidence from your Lord. This is the she-camel of Allah [sent] to you as a sign."',
              bn: 'আর সামূদ জাতির কাছে তাদের ভাই সালিহকে পাঠালাম। সে বলল, "হে আমার জাতি, তোমরা আল্লাহর ইবাদত করো; তিনি ছাড়া তোমাদের কোনো ইলাহ নেই। তোমাদের রবের কাছ থেকে তোমাদের জন্য স্পষ্ট প্রমাণ এসেছে। এটি আল্লাহর উটনী, তোমাদের জন্য নিদর্শন।"',
              ar: 'وَإِلَىٰ ثَمُودَ أَخَاهُمْ صَالِحًا ۗ قَالَ يَا قَوْمِ اعْبُدُوا اللَّهَ مَا لَكُم مِّنْ إِلَٰهٍ غَيْرُهُ ۖ قَدْ جَاءَتْكُم بَيِّنَةٌ مِّن رَّبِّكُمْ ۖ هَٰذِهِ نَاقَةُ اللَّهِ لَكُمْ آيَةً'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'salih-ch2',
    title: 'The Hamstringing of the She-Camel',
    summary: 'The arrogant ones among Thamud killed the she-camel and were destroyed by a terrible earthquake.',
    order: 2,
    paragraphs: [
      {
        id: 'salih-ch2-p1',
        text: 'Despite the clear warning, the arrogant among Thamud hamstrung the she-camel and defiantly challenged Salih to bring the punishment he had warned them about. Salih told them they had only three days left. Then Allah sent a mighty blast upon them — a terrible earthquake and thunderous cry — that left them lifeless in their homes. Salih turned away from them, grieving.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 7,
            surahName: { en: 'Al-A\'raf', bn: 'আল-আ\'রাফ', ar: 'الأعراف' },
            ayahStart: 77,
            ayahEnd: 79,
            translation: {
              en: 'So they hamstrung the she-camel and were insolent toward the command of their Lord and said, "O Salih, bring us what you promise us, if you should be of the messengers." So the earthquake seized them, and they became within their home [corpses] fallen prone.',
              bn: 'অতঃপর তারা সেই উটনীকে হত্যা করল এবং তাদের রবের আদেশের বিরুদ্ধে ঔদ্ধত্য প্রকাশ করল এবং বলল, "হে সালিহ, তুমি যদি রাসূলদের একজন হও তবে তুমি আমাদের যে শাস্তির কথা বলছ তা নিয়ে আসো।" তখন ভূমিকম্প তাদের পাকড়াও করল এবং তারা তাদের ঘরেই উপুড় হয়ে মৃত পড়ে রইল।',
              ar: 'فَعَقَرُوا النَّاقَةَ وَعَتَوْا عَنْ أَمْرِ رَبِّهِمْ وَقَالُوا يَا صَالِحُ ائْتِنَا بِمَا تَعِدُنَا إِن كُنتَ مِنَ الْمُرْسَلِينَ فَأَخَذَتْهُمُ الرَّجْفَةُ فَأَصْبَحُوا فِي دَارِهِمْ جَاثِمِينَ'
            }
          }
        ]
      }
    ]
  }
];

export default chapters;
