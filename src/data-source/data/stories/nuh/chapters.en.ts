import type { StoryChapter } from '../../../types/prophet';

const chapters: StoryChapter[] = [
  {
    id: 'nuh-ch1',
    title: 'The Call of Nuh',
    summary: 'Nuh called his people to worship Allah alone for 950 years, showing immense patience.',
    order: 1,
    paragraphs: [
      {
        id: 'nuh-ch1-p1',
        text: 'Allah sent Prophet Nuh (Noah) to his people who had begun worshipping idols. Nuh called them to worship Allah alone for 950 years, showing immense patience. He warned them day and night, publicly and privately, but most refused to believe.',
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
    title: 'The Great Flood',
    summary: 'When his people persisted in disbelief, Allah commanded Nuh to build the Ark. The great flood destroyed the disbelievers and the believers were saved.',
    order: 2,
    paragraphs: [
      {
        id: 'nuh-ch2-p1',
        text: 'After centuries of calling his people, Nuh prayed to Allah for help. Allah commanded him to build a great ark. When the flood came, water gushed from the earth and poured from the sky. Nuh carried the believers and pairs of every creature aboard. Even his own son refused to board, choosing to climb a mountain instead, and was drowned among the disbelievers.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 11,
            surahName: { en: 'Hud', bn: 'হুদ', ar: 'هود' },
            ayahStart: 40,
            ayahEnd: 44,
            translation: {
              en: '[So it was], until when Our command came and the oven overflowed, We said, "Load upon the ship of each [creature] two mates and your family, except those about whom the word has preceded, and [include] whoever has believed." But none had believed with him, except a few.',
              bn: 'অবশেষে যখন আমার আদেশ এলো এবং চুলা উথলে উঠল, আমি বললাম, "জাহাজে প্রতিটি [প্রাণীর] এক জোড়া এবং তোমার পরিবার — যাদের বিরুদ্ধে পূর্বে সিদ্ধান্ত হয়েছে তারা বাদে — এবং যারা ঈমান এনেছে তাদের তুলে নাও।" কিন্তু অল্প কয়েকজন ছাড়া তার সাথে কেউ ঈমান আনেনি।',
              ar: 'حَتَّىٰ إِذَا جَاءَ أَمْرُنَا وَفَارَ التَّنُّورُ قُلْنَا احْمِلْ فِيهَا مِن كُلٍّ زَوْجَيْنِ اثْنَيْنِ وَأَهْلَكَ إِلَّا مَن سَبَقَ عَلَيْهِ الْقَوْلُ وَمَنْ آمَنَ'
            }
          }
        ]
      }
    ]
  }
];

export default chapters;
