import type { StoryChapter } from '../../../types/prophet';

const chapters: StoryChapter[] = [
  {
    id: 'adam-ch1',
    title: 'خلق آدم',
    summary: 'أخبر الله الملائكة أنه سيجعل في الأرض خليفة. خُلق آدم من طين ونُفخ فيه الروح وعُلّم الأسماء كلها.',
    order: 1,
    paragraphs: [
      {
        id: 'adam-ch1-p1',
        text: 'قال الله تعالى للملائكة: "إني جاعل في الأرض خليفة." فسألت الملائكة لماذا يجعل فيها من يفسد ويسفك الدماء وهم يسبحون بحمده ويقدسون له. فقال الله: "إني أعلم ما لا تعلمون." خلق الله آدم من طين ونفخ فيه من روحه وعلّمه الأسماء كلها.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 2,
            surahName: { en: 'Al-Baqarah', bn: 'আল-বাকারা', ar: 'البقرة' },
            ayahStart: 30,
            ayahEnd: 33,
            translation: {
              en: 'And [mention, O Muhammad], when your Lord said to the angels, "Indeed, I will make upon the earth a successive authority."',
              bn: 'আর স্মরণ করুন, যখন আপনার রব ফেরেশতাদের বললেন, "নিশ্চয়ই আমি পৃথিবীতে একজন প্রতিনিধি সৃষ্টি করব।"',
              ar: 'وَإِذْ قَالَ رَبُّكَ لِلْمَلَائِكَةِ إِنِّي جَاعِلٌ فِي الْأَرْضِ خَلِيفَةً'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'adam-ch2',
    title: 'الشجرة المحرمة والهبوط إلى الأرض',
    summary: 'سكن آدم وحواء الجنة. بوسوسة الشيطان أكلا من الشجرة المحرمة. تابا إلى الله فقبل توبتهما وأهبطهما إلى الأرض.',
    order: 2,
    paragraphs: [
      {
        id: 'adam-ch2-p1',
        text: 'أسكن الله آدم وحواء الجنة وأباح لهما الأكل من كل شيء إلا شجرة واحدة. فوسوس لهما الشيطان فأكلا منها فبدت لهما سوآتهما. فنادى آدم وحواء ربهما: "ربنا ظلمنا أنفسنا وإن لم تغفر لنا وترحمنا لنكوننّ من الخاسرين." فتاب الله عليهما وأهبطهما إلى الأرض.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 7,
            surahName: { en: 'Al-A\'raf', bn: 'আল-আ\'রাফ', ar: 'الأعراف' },
            ayahStart: 19,
            ayahEnd: 25,
            translation: {
              en: 'They said, "Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers."',
              bn: 'তারা বলল, "হে আমাদের রব, আমরা নিজেদের উপর জুলুম করেছি। আপনি যদি আমাদের ক্ষমা না করেন এবং আমাদের প্রতি দয়া না করেন, তবে আমরা অবশ্যই ক্ষতিগ্রস্তদের অন্তর্ভুক্ত হব।"',
              ar: 'قَالَا رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ'
            }
          }
        ]
      }
    ]
  }
];

export default chapters;
