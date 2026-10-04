import type { StoryChapter } from '../../../types/prophet';

const chapters: StoryChapter[] = [
  {
    id: 'ismail-ch1',
    title: 'الذبح العظيم',
    summary: 'أُمر إبراهيم في المنام بذبح ابنه إسماعيل فاستسلما لأمر الله.',
    order: 1,
    paragraphs: [
      {
        id: 'ismail-ch1-p1',
        text: 'رأى النبي إبراهيم في المنام أنه يذبح ابنه إسماعيل. فلما أخبره أظهر إسماعيل الصغير إيماناً عظيماً وقال: "يا أبتِ افعل ما تؤمر ستجدني إن شاء الله من الصابرين." فلما أسلما وتلّه للجبين ناداه الله وفداه بذبح عظيم.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 37,
            surahName: { en: 'As-Saffat', bn: 'আস-সাফফাত', ar: 'الصافات' },
            ayahStart: 100,
            ayahEnd: 111,
            translation: {
              en: 'He said, "O my father, do as you are commanded. You will find me, if Allah wills, of the patient."',
              bn: 'সে বলল, "হে আমার পিতা, আপনাকে যা আদেশ করা হয়েছে তা করুন।"',
              ar: 'قَالَ يَا أَبَتِ افْعَلْ مَا تُؤْمَرُ ۖ سَتَجِدُنِي إِن شَاءَ اللَّهُ مِنَ الصَّابِرِينَ'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'ismail-ch2',
    title: 'بناء الكعبة',
    summary: 'ساعد إسماعيل أباه إبراهيم في رفع قواعد الكعبة في مكة.',
    order: 2,
    paragraphs: [
      {
        id: 'ismail-ch2-p1',
        text: 'بعد استقرارهم في وادي مكة القاحل بارك الله إسماعيل وأمه هاجر بماء زمزم. ثم عاد إبراهيم ورفع مع ابنه قواعد الكعبة داعيَين الله أن يتقبل منهما.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 2,
            surahName: { en: 'Al-Baqarah', bn: 'আল-বাকারা', ar: 'البقرة' },
            ayahStart: 125,
            ayahEnd: 127,
            translation: {
              en: 'And [mention] when Abraham was raising the foundations of the House and [with him] Ishmael.',
              bn: 'আর স্মরণ করুন, যখন ইবরাহীম ও ইসমাঈল কাবার ভিত্তি উঠাচ্ছিলেন।',
              ar: 'وَإِذْ يَرْفَعُ إِبْرَاهِيمُ الْقَوَاعِدَ مِنَ الْبَيْتِ وَإِسْمَاعِيلُ'
            }
          }
        ]
      }
    ]
  }
];

export default chapters;
