import type { Lesson } from '../../../types/prophet';

const lessons: Lesson[] = [
  {
    id: 'adam-lesson-1',
    title: {
      en: 'Repentance is Always Accepted',
      bn: 'তওবা সবসময় গৃহীত হয়',
      ar: 'التوبة مقبولة دائماً',
    },
    description: {
      en: 'When Adam and Hawwa made a mistake, they immediately turned to Allah in sincere repentance. Allah forgave them. This teaches us that no matter how big our mistakes, if we sincerely repent, Allah will forgive us.',
      bn: 'আদম ও হাওয়া যখন ভুল করলেন, তারা সাথে সাথে আন্তরিকভাবে আল্লাহর কাছে তওবা করলেন। আল্লাহ তাদের ক্ষমা করে দিলেন। এটি আমাদের শেখায় যে আমাদের ভুল যতই বড় হোক, যদি আমরা আন্তরিকভাবে তওবা করি, আল্লাহ আমাদের ক্ষমা করবেন।',
      ar: 'عندما أخطأ آدم وحواء تابا إلى الله فوراً توبة صادقة فغفر لهما. يعلمنا هذا أنه مهما كبرت أخطاؤنا إذا تبنا بصدق فإن الله يغفر لنا.',
    },
    references: [
      {
        type: 'quran',
        surah: 7,
        surahName: { en: 'Al-A\'raf', bn: 'আল-আরাফ', ar: 'الأعراف' },
        ayahStart: 23,
        translation: {
          en: 'They said, "Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers."',
          bn: 'তারা বলল, "হে আমাদের রব, আমরা নিজেদের উপর জুলুম করেছি। আপনি যদি আমাদের ক্ষমা না করেন এবং আমাদের প্রতি রহম না করেন, তাহলে আমরা অবশ্যই ক্ষতিগ্রস্তদের অন্তর্ভুক্ত হব।"',
          ar: 'قَالَا رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ',
        },
      },
    ],
  },
  {
    id: 'adam-lesson-2',
    title: {
      en: 'Arrogance Leads to Destruction',
      bn: 'অহংকার ধ্বংসের দিকে নিয়ে যায়',
      ar: 'الكبر يؤدي إلى الهلاك',
    },
    description: {
      en: 'Iblis was destroyed not by a lack of worship, but by arrogance. He refused to obey Allah\'s command out of pride. This teaches us that arrogance is one of the most dangerous sins.',
      bn: 'ইবলিস ইবাদতের অভাবে নয়, বরং অহংকারে ধ্বংস হয়েছিল। সে অহংকারবশত আল্লাহর আদেশ অমান্য করেছিল। এটি আমাদের শেখায় যে অহংকার সবচেয়ে বিপজ্জনক পাপের একটি।',
      ar: 'لم يُهلَك إبليس بقلة العبادة بل بالكبر. رفض طاعة أمر الله تكبراً. يعلمنا هذا أن الكبر من أخطر الذنوب.',
    },
    references: [
      {
        type: 'quran',
        surah: 2,
        surahName: { en: 'Al-Baqarah', bn: 'আল-বাকারাহ', ar: 'البقرة' },
        ayahStart: 34,
        translation: {
          en: 'And [mention] when We said to the angels, "Prostrate before Adam"; so they prostrated, except for Iblis. He refused and was arrogant and became of the disbelievers.',
          bn: 'আর যখন আমি ফেরেশতাদের বললাম, "আদমকে সিজদা করো", তখন তারা সিজদা করল, ইবলিস ছাড়া। সে অস্বীকার করল এবং অহংকার করল।',
          ar: 'وَإِذْ قُلْنَا لِلْمَلَائِكَةِ اسْجُدُوا لِآدَمَ فَسَجَدُوا إِلَّا إِبْلِيسَ أَبَىٰ وَاسْتَكْبَرَ وَكَانَ مِنَ الْكَافِرِينَ',
        },
      },
    ],
  },
  {
    id: 'adam-lesson-3',
    title: {
      en: 'Knowledge Elevates Status',
      bn: 'জ্ঞান মর্যাদা বৃদ্ধি করে',
      ar: 'العلم يرفع المنزلة',
    },
    description: {
      en: 'Allah honored Adam by teaching him the names of all things, knowledge the angels did not have. This shows that knowledge is a great blessing from Allah that elevates one\'s status.',
      bn: 'আল্লাহ আদমকে সম্মানিত করেছেন সব কিছুর নাম শিখিয়ে, যে জ্ঞান ফেরেশতাদের ছিল না। এটি দেখায় যে জ্ঞান আল্লাহর পক্ষ থেকে এক মহান নেয়ামত যা মর্যাদা বৃদ্ধি করে।',
      ar: 'كرّم الله آدم بتعليمه أسماء كل شيء وهو علم لم يكن عند الملائكة. يدل هذا على أن العلم نعمة عظيمة من الله ترفع المنزلة.',
    },
    references: [
      {
        type: 'quran',
        surah: 2,
        surahName: { en: 'Al-Baqarah', bn: 'আল-বাকারাহ', ar: 'البقرة' },
        ayahStart: 31,
        ayahEnd: 33,
        translation: {
          en: 'And He taught Adam the names - all of them. Then He showed them to the angels and said, "Inform Me of the names of these, if you are truthful."',
          bn: 'আর তিনি আদমকে সকল নাম শেখালেন। তারপর সেগুলো ফেরেশতাদের সামনে পেশ করলেন এবং বললেন, "তোমরা সত্যবাদী হলে এগুলোর নাম বলো।"',
          ar: 'وَعَلَّمَ آدَمَ الْأَسْمَاءَ كُلَّهَا ثُمَّ عَرَضَهُمْ عَلَى الْمَلَائِكَةِ فَقَالَ أَنبِئُونِي بِأَسْمَاءِ هَٰؤُلَاءِ إِن كُنتُمْ صَادِقِينَ',
        },
      },
    ],
  },
  {
    id: 'adam-lesson-4',
    title: {
      en: 'Beware of Shaytan\'s Deception',
      bn: 'শয়তানের প্রতারণা থেকে সাবধান',
      ar: 'احذروا خداع الشيطان',
    },
    description: {
      en: 'Shaytan deceived Adam and Hawwa through false promises and whispering. He made the forbidden seem attractive. We must always be on guard against his tricks and seek refuge in Allah.',
      bn: 'শয়তান মিথ্যা প্রতিশ্রুতি ও কুমন্ত্রণার মাধ্যমে আদম ও হাওয়াকে প্রতারিত করেছিল। সে নিষিদ্ধ জিনিসকে আকর্ষণীয় করে দেখিয়েছিল। আমাদের সবসময় তার চালবাজি থেকে সতর্ক থাকতে হবে এবং আল্লাহর কাছে আশ্রয় চাইতে হবে।',
      ar: 'خدع الشيطان آدم وحواء بوعود كاذبة ووسوسة. جعل المحرم يبدو جذاباً. يجب أن نحذر دائماً من حيله ونستعيذ بالله.',
    },
    references: [
      {
        type: 'quran',
        surah: 7,
        surahName: { en: 'Al-A\'raf', bn: 'আল-আরাফ', ar: 'الأعراف' },
        ayahStart: 20,
        ayahEnd: 22,
        translation: {
          en: 'Then Satan whispered to them to make apparent to them that which was concealed from them of their private parts.',
          bn: 'অতঃপর শয়তান তাদের কুমন্ত্রণা দিল যাতে তাদের লজ্জাস্থান প্রকাশ করে দেয় যা তাদের থেকে গোপন ছিল।',
          ar: 'فَوَسْوَسَ لَهُمَا الشَّيْطَانُ لِيُبْدِيَ لَهُمَا مَا وُورِيَ عَنْهُمَا مِن سَوْآتِهِمَا',
        },
      },
    ],
  },
];

export default lessons;
