import type { StoryChapter } from '../../../types/prophet';

const chapters: StoryChapter[] = [
  {
    id: 'ismail-ch1',
    title: 'মহান কুরবানি',
    summary: 'ইবরাহীমকে স্বপ্নে তাঁর পুত্র ইসমাঈলকে কুরবানি করার আদেশ দেওয়া হলো এবং দুজনেই আল্লাহর ইচ্ছায় আত্মসমর্পণ করলেন।',
    order: 1,
    paragraphs: [
      {
        id: 'ismail-ch1-p1',
        text: 'নবী ইবরাহীম স্বপ্নে দেখলেন যে তিনি তাঁর পুত্র ইসমাঈলকে কুরবানি করছেন। যখন তিনি ইসমাঈলকে জানালেন, অল্প বয়সী ইসমাঈল অসাধারণ ঈমানের পরিচয় দিয়ে বললেন, "হে আমার পিতা, আপনাকে যা আদেশ করা হয়েছে তা করুন। ইনশাআল্লাহ আপনি আমাকে ধৈর্যশীলদের মধ্যে পাবেন।" আল্লাহ একটি মহান কুরবানি দিয়ে ইসমাঈলকে মুক্ত করলেন।',
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
              bn: 'সে বলল, "হে আমার পিতা, আপনাকে যা আদেশ করা হয়েছে তা করুন। ইনশাআল্লাহ আপনি আমাকে ধৈর্যশীলদের মধ্যে পাবেন।"',
              ar: 'قَالَ يَا أَبَتِ افْعَلْ مَا تُؤْمَرُ ۖ سَتَجِدُنِي إِن شَاءَ اللَّهُ مِنَ الصَّابِرِينَ'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'ismail-ch2',
    title: 'কাবা নির্মাণ',
    summary: 'ইসমাঈল তাঁর পিতা ইবরাহীমের সাথে মক্কায় কাবার ভিত্তি নির্মাণ করলেন।',
    order: 2,
    paragraphs: [
      {
        id: 'ismail-ch2-p1',
        text: 'মক্কার শুষ্ক উপত্যকায় বসতি স্থাপনের পর আল্লাহ ইসমাঈল ও তাঁর মা হাজেরাকে যমযমের অলৌকিক ঝরনা দিয়ে আশীর্বাদ করলেন। পরে ইবরাহীম ফিরে এলেন এবং পিতা-পুত্র মিলে কাবার ভিত্তি উঠালেন, আল্লাহর কাছে দোয়া করলেন তাদের প্রচেষ্টা কবুল করতে।',
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
