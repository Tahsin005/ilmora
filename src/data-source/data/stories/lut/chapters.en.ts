import type { StoryChapter } from '../../../types/prophet';

const chapters: StoryChapter[] = [
  {
    id: 'lut-ch1',
    title: 'Lut Warns His People',
    summary: 'Lut was sent to the people of Sodom who committed grievous sins, and he called them to righteousness.',
    order: 1,
    paragraphs: [
      {
        id: 'lut-ch1-p1',
        text: 'Prophet Lut (Lot) was the nephew of Ibrahim and was sent to the people of Sodom. His people indulged in immoral acts unprecedented among creation. Lut called them to fear Allah and abandon their shameful deeds, but they rejected his message and threatened to expel him from their city.',
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
              bn: 'আর স্মরণ করুন লূতের কথা, যখন সে তার জাতিকে বলল, "তোমরা কি এমন অশ্লীলতা করছ যা তোমাদের পূর্বে সৃষ্টিকুলের কেউ করেনি?"',
              ar: 'وَلُوطًا إِذْ قَالَ لِقَوْمِهِ أَتَأْتُونَ الْفَاحِشَةَ مَا سَبَقَكُم بِهَا مِنْ أَحَدٍ مِّنَ الْعَالَمِينَ'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'lut-ch2',
    title: 'The Destruction of Sodom',
    summary: 'Allah sent angels to Lut and destroyed his people\'s cities by turning them upside down and raining stones.',
    order: 2,
    paragraphs: [
      {
        id: 'lut-ch2-p1',
        text: 'Allah sent angels in the form of handsome men to test Lut\'s people and to deliver the punishment. When the people rushed to Lut\'s home with evil intentions, Lut was distressed. The angels revealed their true identity and told Lut to leave with his family at night. At dawn, Allah turned the cities upside down and rained upon them stones of layered hard clay. Lut\'s wife was among those destroyed, as she had been sympathetic to the wrongdoers.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 11,
            surahName: { en: 'Hud', bn: 'হুদ', ar: 'هود' },
            ayahStart: 77,
            ayahEnd: 83,
            translation: {
              en: 'And when Our messengers came to Lot, he was anguished for them and felt for them great discomfort. He said, "This is a trying day."',
              bn: 'আর যখন আমার দূতেরা লূতের কাছে এলো, সে তাদের জন্য চিন্তিত ও বিপন্ন হলো। সে বলল, "এটি একটি কঠিন দিন।"',
              ar: 'وَلَمَّا جَاءَتْ رُسُلُنَا لُوطًا سِيءَ بِهِمْ وَضَاقَ بِهِمْ ذَرْعًا وَقَالَ هَٰذَا يَوْمٌ عَصِيبٌ'
            }
          }
        ]
      }
    ]
  }
];

export default chapters;
