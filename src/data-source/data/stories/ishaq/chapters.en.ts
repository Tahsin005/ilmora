import type { StoryChapter } from '../../../types/prophet';

const chapters: StoryChapter[] = [
  {
    id: 'ishaq-ch1',
    title: 'The Glad Tidings of Ishaq',
    summary: 'Allah gave Ibrahim and Sarah the glad tidings of a son, Ishaq, despite their old age.',
    order: 1,
    paragraphs: [
      {
        id: 'ishaq-ch1-p1',
        text: 'When the angels visited Ibrahim on their way to the people of Lut, they gave him and his wife Sarah the glad tidings of a son, Ishaq, and after Ishaq, a grandson Yaqub. Sarah was astonished, as she was old and barren, but the angels said this was the decree of Allah, the All-Wise.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 11,
            surahName: { en: 'Hud', bn: 'হুদ', ar: 'هود' },
            ayahStart: 71,
            ayahEnd: 73,
            translation: {
              en: 'And his wife was standing, and she smiled. Then We gave her good tidings of Isaac, and after Isaac, Jacob. She said, "Woe to me! Shall I give birth while I am an old woman and this, my husband, is an old man? Indeed, this is an amazing thing!"',
              bn: 'আর তার স্ত্রী দাঁড়িয়ে ছিল, সে হাসল। তারপর আমি তাকে ইসহাকের এবং ইসহাকের পরে ইয়াকুবের সুসংবাদ দিলাম। সে বলল, "হায়, আমি কি সন্তান জন্ম দেব যখন আমি বৃদ্ধা এবং আমার স্বামীও বৃদ্ধ? এটি তো আশ্চর্য ব্যাপার!"',
              ar: 'وَامْرَأَتُهُ قَائِمَةٌ فَضَحِكَتْ فَبَشَّرْنَاهَا بِإِسْحَاقَ وَمِن وَرَاءِ إِسْحَاقَ يَعْقُوبَ'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'ishaq-ch2',
    title: 'A Blessed Prophet',
    summary: 'Ishaq was blessed by Allah and from his lineage came many prophets of Bani Israel.',
    order: 2,
    paragraphs: [
      {
        id: 'ishaq-ch2-p1',
        text: 'Allah blessed Ishaq and made him a prophet and a righteous man. From the lineage of Ishaq through his son Yaqub came the entire line of prophets of Bani Israel (the Children of Israel), including Yusuf, Musa, Dawud, Sulayman, and Isa. Allah describes the blessing upon Ibrahim\'s family as enduring across generations.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 37,
            surahName: { en: 'As-Saffat', bn: 'আস-সাফফাত', ar: 'الصافات' },
            ayahStart: 112,
            ayahEnd: 113,
            translation: {
              en: 'And We gave him good tidings of Isaac, a prophet from among the righteous. And We blessed him and Isaac. But among their descendants is the doer of good and the clearly unjust to himself.',
              bn: 'আমি তাকে ইসহাকের সুসংবাদ দিলাম, যিনি সৎকর্মশীলদের মধ্যে একজন নবী। আমি তাকে ও ইসহাককে বরকত দিলাম। তাদের বংশধরদের মধ্যে সৎকর্মশীলও আছে এবং নিজের প্রতি স্পষ্ট জুলুমকারীও আছে।',
              ar: 'وَبَشَّرْنَاهُ بِإِسْحَاقَ نَبِيًّا مِّنَ الصَّالِحِينَ وَبَارَكْنَا عَلَيْهِ وَعَلَىٰ إِسْحَاقَ ۚ وَمِن ذُرِّيَّتِهِمَا مُحْسِنٌ وَظَالِمٌ لِّنَفْسِهِ مُبِينٌ'
            }
          }
        ]
      }
    ]
  }
];

export default chapters;
