import type { StoryChapter } from '../../../types/prophet';

const chapters: StoryChapter[] = [
  {
    id: 'nuh-ch1',
    title: 'دعوة نوح',
    summary: 'دعا نوح عليه السلام قومه إلى عبادة الله وحده لمدة ٩٥٠ سنة بصبر عظيم.',
    order: 1,
    paragraphs: [
      {
        id: 'nuh-ch1-p1',
        text: 'أرسل الله النبي نوحاً عليه السلام إلى قومه الذين بدأوا بعبادة الأصنام. دعاهم نوح إلى عبادة الله وحده لمدة ٩٥٠ سنة بصبر عظيم. حذّرهم ليلاً ونهاراً، سراً وعلانية، لكن أكثرهم أبوا أن يؤمنوا.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 29,
            surahName: { en: 'Al-Ankabut', bn: 'আল-আনকাবুত', ar: 'العنكبوت' },
            ayahStart: 14,
            ayahEnd: 14,
            translation: {
              en: 'And We certainly sent Noah to his people, and he remained among them a thousand years minus fifty years.',
              bn: 'আমি নূহকে তার জাতির কাছে পাঠিয়েছিলাম এবং সে তাদের মধ্যে ৯৫০ বছর অবস্থান করেছিল।',
              ar: 'وَلَقَدْ أَرْسَلْنَا نُوحًا إِلَىٰ قَوْمِهِ فَلَبِثَ فِيهِمْ أَلْفَ سَنَةٍ إِلَّا خَمْسِينَ عَامًا'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'nuh-ch2',
    title: 'الطوفان العظيم',
    summary: 'لما أصرّ قومه على الكفر أمر الله نوحاً ببناء السفينة. أهلك الطوفان الكافرين ونجا المؤمنون.',
    order: 2,
    paragraphs: [
      {
        id: 'nuh-ch2-p1',
        text: 'بعد قرون من الدعوة دعا نوح ربه طالباً النصر. فأمره الله ببناء سفينة عظيمة. فلما جاء الطوفان فار الماء من الأرض وانهمر من السماء. حمل نوح المؤمنين وزوجين من كل المخلوقات. حتى ابنه رفض أن يركب واختار أن يأوي إلى جبل فغرق مع الكافرين.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 11,
            surahName: { en: 'Hud', bn: 'হুদ', ar: 'هود' },
            ayahStart: 40,
            ayahEnd: 44,
            translation: {
              en: '[So it was], until when Our command came and the oven overflowed, We said, "Load upon the ship of each [creature] two mates and your family..."',
              bn: 'অবশেষে যখন আমার আদেশ এলো এবং চুলা উথলে উঠল, আমি বললাম, "জাহাজে প্রতিটি প্রাণীর এক জোড়া এবং তোমার পরিবারকে তুলে নাও..."',
              ar: 'حَتَّىٰ إِذَا جَاءَ أَمْرُنَا وَفَارَ التَّنُّورُ قُلْنَا احْمِلْ فِيهَا مِن كُلٍّ زَوْجَيْنِ اثْنَيْنِ وَأَهْلَكَ'
            }
          }
        ]
      }
    ]
  }
];

export default chapters;
