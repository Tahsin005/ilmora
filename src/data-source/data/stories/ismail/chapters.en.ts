import type { StoryChapter } from '../../../types/prophet';

const chapters: StoryChapter[] = [
  {
    id: 'ismail-ch1',
    title: 'The Great Sacrifice',
    summary: 'Ibrahim was commanded in a dream to sacrifice his son Ismail, and both submitted to Allah\'s will.',
    order: 1,
    paragraphs: [
      {
        id: 'ismail-ch1-p1',
        text: 'Prophet Ibrahim saw in a dream that he was sacrificing his son Ismail. In Islam, the dreams of prophets are a form of revelation. When Ibrahim told his son about the dream, young Ismail showed remarkable faith and said, "O my father, do as you are commanded. You will find me, if Allah wills, of the patient." When both had submitted to Allah\'s will and Ibrahim laid Ismail down, Allah called out to him and ransomed Ismail with a great sacrifice.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 37,
            surahName: { en: 'As-Saffat', bn: 'আস-সাফফাত', ar: 'الصافات' },
            ayahStart: 100,
            ayahEnd: 111,
            translation: {
              en: 'And when he reached with him [the age of] exertion, he said, "O my son, indeed I have seen in a dream that I [must] sacrifice you, so see what you think." He said, "O my father, do as you are commanded. You will find me, if Allah wills, of the patient."',
              bn: 'যখন সে তার সাথে কাজ করার বয়সে পৌঁছল, সে বলল, "হে আমার পুত্র, আমি স্বপ্নে দেখেছি যে আমি তোমাকে জবাই করছি, তুমি কী মনে কর?" সে বলল, "হে আমার পিতা, আপনাকে যা আদেশ করা হয়েছে তা করুন। ইনশাআল্লাহ আপনি আমাকে ধৈর্যশীলদের মধ্যে পাবেন।"',
              ar: 'فَلَمَّا بَلَغَ مَعَهُ السَّعْيَ قَالَ يَا بُنَيَّ إِنِّي أَرَىٰ فِي الْمَنَامِ أَنِّي أَذْبَحُكَ فَانظُرْ مَاذَا تَرَىٰ ۚ قَالَ يَا أَبَتِ افْعَلْ مَا تُؤْمَرُ ۖ سَتَجِدُنِي إِن شَاءَ اللَّهُ مِنَ الصَّابِرِينَ'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'ismail-ch2',
    title: 'Building the Kaaba',
    summary: 'Ismail helped his father Ibrahim raise the foundations of the Kaaba in Makkah.',
    order: 2,
    paragraphs: [
      {
        id: 'ismail-ch2-p1',
        text: 'After settling in the barren valley of Makkah, Allah blessed Ismail and his mother Hajar with the miraculous spring of Zamzam. Later, Ibrahim returned and together father and son raised the foundations of the Kaaba, praying to Allah to accept their effort and to make their descendants a Muslim nation devoted to Him.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 2,
            surahName: { en: 'Al-Baqarah', bn: 'আল-বাকারা', ar: 'البقرة' },
            ayahStart: 125,
            ayahEnd: 127,
            translation: {
              en: 'And [mention] when Abraham was raising the foundations of the House and [with him] Ishmael, [saying], "Our Lord, accept [this] from us. Indeed You are the Hearing, the Knowing."',
              bn: 'আর স্মরণ করুন, যখন ইবরাহীম ও ইসমাঈল কাবার ভিত্তি উঠাচ্ছিলেন, [বলছিলেন], "হে আমাদের রব, আমাদের থেকে কবুল করুন। নিশ্চয়ই আপনি সর্বশ্রোতা, সর্বজ্ঞ।"',
              ar: 'وَإِذْ يَرْفَعُ إِبْرَاهِيمُ الْقَوَاعِدَ مِنَ الْبَيْتِ وَإِسْمَاعِيلُ رَبَّنَا تَقَبَّلْ مِنَّا ۖ إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ'
            }
          }
        ]
      }
    ]
  }
];

export default chapters;
