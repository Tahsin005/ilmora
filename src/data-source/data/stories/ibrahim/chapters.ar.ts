import type { StoryChapter } from '../../../types/prophet';

const chapters: StoryChapter[] = [
  {
    id: 'ibrahim-ch1',
    title: 'إبراهيم يحطم الأصنام',
    summary: 'تحدّى إبراهيم عبادة قومه للأصنام وحطّمها ليثبت عجزها.',
    order: 1,
    paragraphs: [
      {
        id: 'ibrahim-ch1-p1',
        text: 'اتخذ الله النبي إبراهيم عليه السلام خليلاً. أدرك منذ صغره بطلان عبادة الأصنام وتحدّى أباه آزر وقومه. فلما ذهبوا إلى عيدهم حطّم إبراهيم جميع الأصنام إلا كبيرها وقال لهم اسألوه.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 21,
            surahName: { en: 'Al-Anbiya', bn: 'আল-আম্বিয়া', ar: 'الأنبياء' },
            ayahStart: 51,
            ayahEnd: 67,
            translation: {
              en: 'And We had certainly given Abraham his sound judgement before, and We were of him well-Knowing.',
              bn: 'আর আমি ইতিপূর্বে ইবরাহীমকে তার সঠিক পথ দিয়েছিলাম।',
              ar: 'وَلَقَدْ آتَيْنَا إِبْرَاهِيمَ رُشْدَهُ مِن قَبْلُ وَكُنَّا بِهِ عَالِمِينَ'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'ibrahim-ch2',
    title: 'ابتلاء النار وبناء الكعبة',
    summary: 'أُلقي إبراهيم في النار فجعلها الله برداً وسلاماً. ثم رفع هو وإسماعيل قواعد الكعبة.',
    order: 2,
    paragraphs: [
      {
        id: 'ibrahim-ch2-p1',
        text: 'قرر قوم إبراهيم إلقاءه في نار عظيمة. لكن الله أمر النار: "يا نار كوني برداً وسلاماً على إبراهيم." فلم تمسّه بأذى. وفي وقت لاحق أمر الله إبراهيم وابنه إسماعيل برفع قواعد الكعبة في مكة، أول بيت وُضع للناس.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 21,
            surahName: { en: 'Al-Anbiya', bn: 'আল-আম্বিয়া', ar: 'الأنبياء' },
            ayahStart: 68,
            ayahEnd: 70,
            translation: {
              en: 'We said, "O fire, be coolness and safety upon Abraham."',
              bn: 'আমি বললাম, "হে আগুন, ইবরাহীমের প্রতি শীতল ও নিরাপদ হয়ে যাও।"',
              ar: 'قُلْنَا يَا نَارُ كُونِي بَرْدًا وَسَلَامًا عَلَىٰ إِبْرَاهِيمَ'
            }
          }
        ]
      }
    ]
  }
];

export default chapters;
