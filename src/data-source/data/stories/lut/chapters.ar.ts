import type { StoryChapter } from '../../../types/prophet';

const chapters: StoryChapter[] = [
  {
    id: 'lut-ch1',
    title: 'لوط ينذر قومه',
    summary: 'أُرسل لوط إلى أهل سدوم الذين ارتكبوا الفواحش فدعاهم إلى الصلاح.',
    order: 1,
    paragraphs: [
      {
        id: 'lut-ch1-p1',
        text: 'كان النبي لوط عليه السلام ابن أخي إبراهيم وأُرسل إلى أهل سدوم. كان قومه يرتكبون فاحشة لم يسبقهم بها أحد من العالمين. دعاهم لوط إلى تقوى الله وترك أعمالهم المشينة لكنهم رفضوا رسالته.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 7,
            surahName: { en: 'Al-A\'raf', bn: 'আল-আ\'রাফ', ar: 'الأعراف' },
            ayahStart: 80,
            ayahEnd: 81,
            translation: {
              en: 'And [We had sent] Lot when he said to his people, "Do you commit such immorality as no one has preceded you with from among the worlds?"',
              bn: 'আর স্মরণ করুন লূতের কথা, যখন সে তার জাতিকে বলল, "তোমরা কি এমন অশ্লীলতা করছ যা পূর্বে কেউ করেনি?"',
              ar: 'وَلُوطًا إِذْ قَالَ لِقَوْمِهِ أَتَأْتُونَ الْفَاحِشَةَ مَا سَبَقَكُم بِهَا مِنْ أَحَدٍ مِّنَ الْعَالَمِينَ'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'lut-ch2',
    title: 'هلاك قوم لوط',
    summary: 'أرسل الله الملائكة إلى لوط وأهلك مدن قومه بقلبها وإمطار الحجارة عليها.',
    order: 2,
    paragraphs: [
      {
        id: 'lut-ch2-p1',
        text: 'أرسل الله ملائكة في صورة رجال حسان. فلما هرع القوم إلى بيت لوط بنوايا سيئة حزن لوط حزناً شديداً. فكشف الملائكة عن هويتهم وأمروا لوطاً بالخروج بأهله ليلاً. فلما جاء الصبح جعل الله عالي مدنهم سافلها وأمطر عليهم حجارة من سجيل.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 11,
            surahName: { en: 'Hud', bn: 'হুদ', ar: 'هود' },
            ayahStart: 77,
            ayahEnd: 83,
            translation: {
              en: 'And when Our messengers came to Lot, he was anguished for them and felt for them great discomfort.',
              bn: 'আর যখন আমার দূতেরা লূতের কাছে এলো, সে তাদের জন্য চিন্তিত হলো।',
              ar: 'وَلَمَّا جَاءَتْ رُسُلُنَا لُوطًا سِيءَ بِهِمْ وَضَاقَ بِهِمْ ذَرْعًا'
            }
          }
        ]
      }
    ]
  }
];

export default chapters;
