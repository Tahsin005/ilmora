import type { StoryChapter } from '../../../types/prophet';

const chapters: StoryChapter[] = [
  {
    id: 'ishaq-ch1',
    title: 'البشارة بإسحاق',
    summary: 'بشّر الله إبراهيم وسارة بابنهما إسحاق رغم كبر سنهما.',
    order: 1,
    paragraphs: [
      {
        id: 'ishaq-ch1-p1',
        text: 'لما زار الملائكة إبراهيم في طريقهم إلى قوم لوط بشّروه وزوجته سارة بابن هو إسحاق ومن وراء إسحاق يعقوب. تعجبت سارة لكبر سنها وعقمها لكن الملائكة أخبروها أنه قضاء الله الحكيم.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 11,
            surahName: { en: 'Hud', bn: 'হুদ', ar: 'هود' },
            ayahStart: 71,
            ayahEnd: 73,
            translation: {
              en: 'Then We gave her good tidings of Isaac, and after Isaac, Jacob.',
              bn: 'তারপর আমি তাকে ইসহাকের সুসংবাদ দিলাম।',
              ar: 'فَبَشَّرْنَاهَا بِإِسْحَاقَ وَمِن وَرَاءِ إِسْحَاقَ يَعْقُوبَ'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'ishaq-ch2',
    title: 'نبي مبارك',
    summary: 'بارك الله إسحاق ومن نسله جاء كثير من أنبياء بني إسرائيل.',
    order: 2,
    paragraphs: [
      {
        id: 'ishaq-ch2-p1',
        text: 'بارك الله إسحاق وجعله نبياً صالحاً. ومن نسل إسحاق عبر ابنه يعقوب جاء سلسلة أنبياء بني إسرائيل بمن فيهم يوسف وموسى وداود وسليمان وعيسى.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 37,
            surahName: { en: 'As-Saffat', bn: 'আস-সাফফাত', ar: 'الصافات' },
            ayahStart: 112,
            ayahEnd: 113,
            translation: {
              en: 'And We gave him good tidings of Isaac, a prophet from among the righteous.',
              bn: 'আমি তাকে ইসহাকের সুসংবাদ দিলাম।',
              ar: 'وَبَشَّرْنَاهُ بِإِسْحَاقَ نَبِيًّا مِّنَ الصَّالِحِينَ'
            }
          }
        ]
      }
    ]
  }
];

export default chapters;
