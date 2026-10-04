import type { StoryChapter } from '../../../types/prophet';

const chapters: StoryChapter[] = [
  {
    id: 'ilyas-ch1',
    title: 'إلياس وعبادة البعل',
    summary: 'أُرسل النبي إلياس إلى قوم كانوا يعبدون صنماً يُدعى البعل، يدعوهم إلى العودة إلى الله.',
    order: 1,
    paragraphs: [
      {
        id: 'ilyas-ch1-p1',
        text: 'أُرسل النبي إلياس عليه السلام إلى قوم كانوا يعبدون صنماً يُسمّى البعل. فقال لهم: "ألا تتقون؟ أتدعون بعلاً وتذرون أحسن الخالقين؟" ذكّر إلياس قومه بأن الله وحده ربهم ورب آبائهم الأولين، لكنهم أصروا على عبادة الأصنام وأعرضوا عن الحق.',
        phase: 'quran',
        references: [{
          type: 'quran',
          surah: 37,
          surahName: { en: 'As-Saffat', bn: 'আস-সাফফাত', ar: 'الصافات' },
          ayahStart: 123,
          ayahEnd: 126,
          translation: {
            en: 'And indeed, Ilyas was among the messengers. When he said to his people, "Will you not fear Allah? Do you call upon Ba\'l and leave the Best of creators — Allah, your Lord and the Lord of your first forefathers?"',
            bn: 'আর নিশ্চয়ই ইলিয়াস ছিলেন রাসূলদের একজন। যখন তিনি তাঁর সম্প্রদায়কে বললেন, "তোমরা কি আল্লাহকে ভয় করবে না? তোমরা কি বা\'লকে ডাকবে এবং সর্বশ্রেষ্ঠ স্রষ্টাকে ত্যাগ করবে — আল্লাহ, তোমাদের রব এবং তোমাদের পূর্বপুরুষদের রব?"',
            ar: 'وَإِنَّ إِلْيَاسَ لَمِنَ الْمُرْسَلِينَ إِذْ قَالَ لِقَوْمِهِ أَلَا تَتَّقُونَ أَتَدْعُونَ بَعْلًا وَتَذَرُونَ أَحْسَنَ الْخَالِقِينَ اللَّهَ رَبَّكُمْ وَرَبَّ آبَائِكُمُ الْأَوَّلِينَ'
          }
        }],
      },
    ],
  },
  {
    id: 'ilyas-ch2',
    title: 'إرث إلياس',
    summary: 'كذّبه قومه لكن الله أكرمه بالسلام وعدّه من عباده المؤمنين.',
    order: 2,
    paragraphs: [
      {
        id: 'ilyas-ch2-p1',
        text: 'كذّبه قومه إلا قليلاً من المؤمنين. قال الله تعالى: "سلام على إل ياسين. إنا كذلك نجزي المحسنين. إنه من عبادنا المؤمنين." رغم تكذيب قومه له، أكرم الله إلياس بتحية السلام وأثبت مكانته بين الذين يُجزون على إحسانهم.',
        phase: 'quran',
        references: [{
          type: 'quran',
          surah: 37,
          surahName: { en: 'As-Saffat', bn: 'আস-সাফফাত', ar: 'الصافات' },
          ayahStart: 127,
          ayahEnd: 132,
          translation: {
            en: 'But they denied him, so indeed, they will be brought [for punishment], except the chosen servants of Allah. And We left for him [favorable mention] among later generations: "Peace be upon Ilyas." Indeed, We thus reward the doers of good. Indeed, he was of Our believing servants.',
            bn: 'কিন্তু তারা তাঁকে অস্বীকার করল, তাই তাদের অবশ্যই উপস্থিত করা হবে [শাস্তির জন্য], আল্লাহর মনোনীত বান্দারা ব্যতীত। আমি পরবর্তীদের মধ্যে তাঁর সুনাম রেখে দিলাম: "ইলিয়াসের প্রতি শান্তি।" নিশ্চয়ই আমি এভাবে সৎকর্মশীলদের পুরস্কৃত করি। নিশ্চয়ই তিনি ছিলেন আমার মুমিন বান্দাদের অন্তর্ভুক্ত।',
            ar: 'فَكَذَّبُوهُ فَإِنَّهُمْ لَمُحْضَرُونَ إِلَّا عِبَادَ اللَّهِ الْمُخْلَصِينَ وَتَرَكْنَا عَلَيْهِ فِي الْآخِرِينَ سَلَامٌ عَلَىٰ إِلْ يَاسِينَ إِنَّا كَذَٰلِكَ نَجْزِي الْمُحْسِنِينَ إِنَّهُ مِنْ عِبَادِنَا الْمُؤْمِنِينَ'
          }
        }],
      },
      {
        id: 'ilyas-ch2-p2',
        text: 'كما ذُكر إلياس ضمن الذين هداهم الله. في سورة الأنعام يذكره الله مع أنبياء آخرين أُوتوا الهداية، مؤكداً أنه من الصالحين الذين اصطفاهم الله وهداهم إلى الصراط المستقيم.',
        phase: 'quran',
        references: [{
          type: 'quran',
          surah: 6,
          surahName: { en: "Al-An'am", bn: 'আল-আনআম', ar: 'الأنعام' },
          ayahStart: 85,
          translation: {
            en: 'And Zakariya and Yahya and Isa and Ilyas — and all were of the righteous.',
            bn: 'আর যাকারিয়া, ইয়াহইয়া, ঈসা ও ইলিয়াস — তারা সকলেই ছিল সৎকর্মশীলদের অন্তর্ভুক্ত।',
            ar: 'وَزَكَرِيَّا وَيَحْيَىٰ وَعِيسَىٰ وَإِلْيَاسَ ۖ كُلٌّ مِّنَ الصَّالِحِينَ'
          }
        }],
      },
    ],
  },
];

export default chapters;
