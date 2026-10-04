import type { StoryChapter } from '../../../types/prophet';

const chapters: StoryChapter[] = [
  {
    id: 'ishaq-ch1',
    title: 'ইসহাকের সুসংবাদ',
    summary: 'আল্লাহ ইবরাহীম ও সারাহকে বৃদ্ধ বয়সে পুত্র ইসহাকের সুসংবাদ দিলেন।',
    order: 1,
    paragraphs: [
      {
        id: 'ishaq-ch1-p1',
        text: 'ফেরেশতারা লূতের জাতির কাছে যাওয়ার পথে ইবরাহীমের কাছে আসলে তাঁকে ও তাঁর স্ত্রী সারাহকে পুত্র ইসহাকের এবং ইসহাকের পরে পৌত্র ইয়াকুবের সুসংবাদ দিলেন। সারাহ বিস্মিত হলেন কারণ তিনি বৃদ্ধা ও বন্ধ্যা ছিলেন, কিন্তু ফেরেশতারা বললেন এটি আল্লাহর ফয়সালা।',
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
              bn: 'তারপর আমি তাকে ইসহাকের এবং ইসহাকের পরে ইয়াকুবের সুসংবাদ দিলাম।',
              ar: 'فَبَشَّرْنَاهَا بِإِسْحَاقَ وَمِن وَرَاءِ إِسْحَاقَ يَعْقُوبَ'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'ishaq-ch2',
    title: 'একজন বরকতময় নবী',
    summary: 'ইসহাককে আল্লাহ বরকত দিয়েছিলেন এবং তাঁর বংশ থেকে বনী ইসরাঈলের অনেক নবী এসেছিলেন।',
    order: 2,
    paragraphs: [
      {
        id: 'ishaq-ch2-p1',
        text: 'আল্লাহ ইসহাককে বরকত দিলেন এবং তাঁকে নবী ও সৎকর্মশীল করলেন। ইসহাকের বংশ থেকে তাঁর পুত্র ইয়াকুবের মাধ্যমে বনী ইসরাঈলের সকল নবী এসেছিলেন, যার মধ্যে ইউসুফ, মূসা, দাউদ, সুলায়মান ও ঈসা রয়েছেন।',
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
              bn: 'আমি তাকে ইসহাকের সুসংবাদ দিলাম, যিনি সৎকর্মশীলদের মধ্যে একজন নবী।',
              ar: 'وَبَشَّرْنَاهُ بِإِسْحَاقَ نَبِيًّا مِّنَ الصَّالِحِينَ'
            }
          }
        ]
      }
    ]
  }
];

export default chapters;
