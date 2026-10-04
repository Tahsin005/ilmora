import type { StoryChapter } from '../../../types/prophet';

const chapters: StoryChapter[] = [
  {
    id: 'adam-ch-01',
    title: 'আদম (আ.)-এর সৃষ্টি',
    summary: 'আল্লাহ ফেরেশতাদের জানান যে তিনি পৃথিবীতে একজন প্রতিনিধি (খলিফা) সৃষ্টি করবেন। আদমকে মাটি থেকে তৈরি করা হয়, তাঁর মধ্যে রূহ ফুঁকে দেওয়া হয় এবং তাঁকে সকল বস্তুর নাম শিক্ষা দেওয়া হয়।',
    order: 1,
    paragraphs: [
      {
        id: 'adam-ch01-p01',
        text: 'আদম (আ.)-কে সৃষ্টি করার পূর্বে আল্লাহ তাআলা ফেরেশতাদের তাঁর ঐশী পরিকল্পনা সম্পর্কে অবহিত করেন। তিনি বলেন, "নিশ্চয়ই আমি পৃথিবীতে একজন প্রতিনিধি (খলিফা) সৃষ্টি করতে যাচ্ছি।" ফেরেশতারা আপত্তি নয়, বরং উদ্বেগবশত জিজ্ঞাসা করলেন কেন তিনি এমন কাউকে সেখানে রাখবেন যে বিশৃঙ্খলা সৃষ্টি করবে এবং রক্তপাত করবে, যেখানে তারা তাঁর প্রশংসা ও পবিত্রতা ঘোষণা করে। আল্লাহ পরম প্রজ্ঞায় জবাব দিলেন: "নিশ্চয়ই আমি জানি যা তোমরা জানো না।"',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 2,
            surahName: { en: 'Al-Baqarah', bn: 'আল-বাকারা', ar: 'البقرة' },
            ayahStart: 30,
            arabicText: 'وَإِذْ قَالَ رَبُّكَ لِلْمَلَائِكَةِ إِنِّي جَاعِلٌ فِي الْأَرْضِ خَلِيفَةً',
            translation: {
              en: 'And [mention, O Muhammad], when your Lord said to the angels, "Indeed, I will make upon the earth a successive authority."',
              bn: 'আর স্মরণ করুন, যখন আপনার রব ফেরেশতাদের বললেন, "নিশ্চয়ই আমি পৃথিবীতে একজন প্রতিনিধি সৃষ্টি করব।"',
              ar: 'وَإِذْ قَالَ رَبُّكَ لِلْمَلَائِكَةِ إِنِّي جَاعِلٌ فِي الْأَرْضِ خَلِيفَةً',
            },
          },
        ],
      },
      {
        id: 'adam-ch01-p02',
        text: 'আল্লাহ তাআলা আদম (আ.)-কে মাটি থেকে সৃষ্টি করেন। কুরআনে এই প্রক্রিয়া বিভিন্ন ধাপে বর্ণিত হয়েছে: প্রথমে ধূলি (তুরাব), যা পানির সাথে মিশিয়ে কাদামাটি (তীন) করা হয়। এই কাদা পুরানো হয়ে পচা কালো কাদায় (হামা\' মাসনুন) পরিণত হয়। অবশেষে তা শুকনো ঠনঠনে মাটিতে (সালসাল কাল-ফাখখার) রূপ নেয়।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 15,
            surahName: { en: 'Al-Hijr', bn: 'আল-হিজর', ar: 'الحجر' },
            ayahStart: 26,
            ayahEnd: 27,
            arabicText: 'وَلَقَدْ خَلَقْنَا الْإِنسَانَ مِن صَلْصَالٍ مِّنْ حَمَإٍ مَّسْنُونٍ',
            translation: {
              en: 'And We did certainly create man out of clay from an altered black mud.',
              bn: 'আর অবশ্যই আমি মানুষকে সৃষ্টি করেছি শুকনো ঠনঠনে মাটি থেকে, যা ছিল পচা কালো কাদা।',
              ar: 'وَلَقَدْ خَلَقْنَا الْإِنسَانَ مِن صَلْصَالٍ مِّنْ حَمَإٍ مَّسْنُونٍ',
            },
          },
          {
            type: 'quran',
            surah: 38,
            surahName: { en: 'Sad', bn: 'সোয়াদ', ar: 'ص' },
            ayahStart: 71,
            ayahEnd: 72,
            translation: {
              en: '[So mention] when your Lord said to the angels, "Indeed, I am going to create a human being from clay."',
              bn: 'যখন আপনার রব ফেরেশতাদের বললেন, "নিশ্চয়ই আমি মাটি থেকে একটি মানুষ সৃষ্টি করব।"',
              ar: 'إِذْ قَالَ رَبُّكَ لِلْمَلَائِكَةِ إِنِّي خَالِقٌ بَشَرًا مِّن طِينٍ',
            },
          },
        ],
      },
      {
        id: 'adam-ch01-p03',
        text: 'আল্লাহ যখন আদমের দেহ পূর্ণাঙ্গ করলেন, তখন তাঁর মধ্যে নিজের রূহ থেকে ফুঁকে দিলেন। এই মুহূর্তেই একটি মাটির শরীর একজন জীবন্ত, সচেতন সত্তায় — প্রথম মানুষে — পরিণত হলো। এরপর আল্লাহ আদমকে এক অনন্য মর্যাদা দিলেন: তিনি তাঁকে সকল বস্তুর নাম শিক্ষা দিলেন। এই জ্ঞান ফেরেশতাদের দেওয়া হয়নি। আল্লাহ যখন ফেরেশতাদের সেই বস্তুগুলোর নাম বলতে বললেন, তারা তাদের অক্ষমতা স্বীকার করে বলল, "আপনি পবিত্র; আপনি আমাদের যা শিখিয়েছেন তা ছাড়া আমাদের কোনো জ্ঞান নেই।" তারপর আদমকে জিজ্ঞাসা করা হলো এবং তিনি সবগুলোর নাম বলে দিলেন।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 15,
            surahName: { en: 'Al-Hijr', bn: 'আল-হিজর', ar: 'الحجر' },
            ayahStart: 28,
            ayahEnd: 29,
            translation: {
              en: 'So when I have proportioned him and breathed into him of My [created] soul, then fall down to him in prostration.',
              bn: 'অতঃপর যখন আমি তাকে পূর্ণাঙ্গ করব এবং তাতে আমার রূহ ফুঁকে দেব, তখন তোমরা তার সামনে সিজদায় পড়ে যাবে।',
              ar: 'فَإِذَا سَوَّيْتُهُ وَنَفَخْتُ فِيهِ مِن رُّوحِي فَقَعُوا لَهُ سَاجِدِينَ',
            },
          },
          {
            type: 'quran',
            surah: 2,
            surahName: { en: 'Al-Baqarah', bn: 'আল-বাকারা', ar: 'البقرة' },
            ayahStart: 31,
            ayahEnd: 33,
            translation: {
              en: 'And He taught Adam the names — all of them.',
              bn: 'আর তিনি আদমকে সকল নাম শিক্ষা দিলেন।',
              ar: 'وَعَلَّمَ آدَمَ الْأَسْمَاءَ كُلَّهَا',
            },
          },
        ],
      },
      {
        id: 'adam-ch01-p04',
        text: 'ইবনে কাসীর বর্ণনা করেন যে আল্লাহ আদমকে নিজ হাতে সৃষ্টি করেছেন — এই সম্মান অন্য কোনো সৃষ্টিকে দেওয়া হয়নি। ইবনে কাসীরের ভাষ্য অনুসারে, আল্লাহ বিভিন্ন ফেরেশতাকে পাঠিয়েছিলেন পৃথিবীর বিভিন্ন অংশ থেকে মাটি সংগ্রহ করতে — লাল, সাদা, কালো এবং এর মধ্যবর্তী সব রং — এজন্যই আদমের সন্তানরা তাদের বর্ণ ও বৈশিষ্ট্যে বৈচিত্র্যময়।',
        phase: 'ibn-kathir',
        references: [
          {
            type: 'ibn-kathir',
            book: 'Qasas al-Anbiya (Stories of the Prophets)',
            chapter: 'The Story of Adam, upon him be peace',
            section: 'The Creation of Adam',
            summary: {
              en: 'Ibn Kathir explains that Allah created Adam with His own Hands, and that clay was gathered from all parts of the earth.',
              bn: 'ইবনে কাসীর ব্যাখ্যা করেন যে আল্লাহ নিজ হাতে আদমকে সৃষ্টি করেছেন এবং পৃথিবীর বিভিন্ন অংশ থেকে মাটি সংগ্রহ করা হয়েছিল।',
              ar: 'يوضح ابن كثير أن الله خلق آدم بيديه، وأن التراب جُمع من أجزاء مختلفة من الأرض.',
            },
          },
        ],
      },
      {
        id: 'adam-ch01-p05',
        text: 'রাসূলুল্লাহ (সা.) আদম (আ.)-এর সৃষ্টি সম্পর্কে হাদীসে বর্ণনা করেছেন যে, আদমকে ষাট হাত লম্বা করে সৃষ্টি করা হয়েছিল এবং তারপর থেকে মানুষের উচ্চতা ক্রমাগত হ্রাস পাচ্ছে। তিনি আরও বলেছেন যে আল্লাহ আদমকে শুক্রবারে সৃষ্টি করেছেন, যা ইসলামে এই দিনটির গুরুত্ব তুলে ধরে।',
        phase: 'hadith',
        references: [
          {
            type: 'hadith',
            collection: 'Sahih al-Bukhari',
            hadithNumber: '3326',
            narrator: 'Abu Hurayrah',
            text: {
              en: 'The Prophet (peace be upon him) said: "Allah created Adam, making him 60 cubits tall..."',
              bn: 'নবী (সা.) বলেছেন: "আল্লাহ আদমকে সৃষ্টি করেছেন, তাকে ষাট হাত লম্বা করেছেন..."',
              ar: 'قال النبي ﷺ: "خلق الله آدم وطوله ستون ذراعًا..."',
            },
            grade: 'sahih',
          },
          {
            type: 'hadith',
            collection: 'Sahih Muslim',
            hadithNumber: '2789',
            narrator: 'Abu Hurayrah',
            text: {
              en: 'The Prophet (peace be upon him) said: "The best day on which the sun has risen is Friday. On it Adam was created..."',
              bn: 'নবী (সা.) বলেছেন: "সূর্য যে দিনগুলোতে উদিত হয় তার মধ্যে সর্বোত্তম দিন হলো শুক্রবার। এই দিনে আদমকে সৃষ্টি করা হয়েছে..."',
              ar: 'قال النبي ﷺ: "خير يوم طلعت عليه الشمس يوم الجمعة، فيه خُلق آدم..."',
            },
            grade: 'sahih',
          },
        ],
      },
    ],
  },
  {
    id: 'adam-ch-02',
    title: 'ফেরেশতাদের সিজদা, ইবলিসের অস্বীকার',
    summary: 'আল্লাহ ফেরেশতাদের আদমকে সিজদা করার আদেশ দেন। সকল ফেরেশতা মেনে নেন, কিন্তু ইবলিস অহংকারবশত অস্বীকার করে।',
    order: 2,
    paragraphs: [
      {
        id: 'adam-ch02-p01',
        text: 'আদম (আ.)-কে সৃষ্টি করার পর এবং তাঁর মধ্যে রূহ ফুঁকে দেওয়ার পর আল্লাহ ফেরেশতাদের আদমকে সিজদা করার আদেশ দিলেন। এই সিজদা ইবাদতের সিজদা ছিল না — কারণ ইবাদত একমাত্র আল্লাহরই প্রাপ্য — বরং এটি ছিল সম্মান ও মর্যাদার সিজদা। সকল ফেরেশতা তৎক্ষণাৎ আদমের সামনে সিজদায় পড়ে গেলেন।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 2,
            surahName: { en: 'Al-Baqarah', bn: 'আল-বাকারা', ar: 'البقرة' },
            ayahStart: 34,
            arabicText: 'وَإِذْ قُلْنَا لِلْمَلَائِكَةِ اسْجُدُوا لِآدَمَ فَسَجَدُوا إِلَّا إِبْلِيسَ أَبَىٰ وَاسْتَكْبَرَ وَكَانَ مِنَ الْكَافِرِينَ',
            translation: {
              en: 'And [mention] when We said to the angels, "Prostrate before Adam"; so they prostrated, except for Iblis.',
              bn: 'আর যখন আমি ফেরেশতাদের বললাম, "আদমকে সিজদা করো," তখন তারা সিজদা করল, ইবলিস ছাড়া। সে অস্বীকার করল এবং অহংকার করল।',
              ar: 'وَإِذْ قُلْنَا لِلْمَلَائِكَةِ اسْجُدُوا لِآدَمَ فَسَجَدُوا إِلَّا إِبْلِيسَ أَبَىٰ وَاسْتَكْبَرَ وَكَانَ مِنَ الْكَافِرِينَ',
            },
          },
        ],
      },
      {
        id: 'adam-ch02-p02',
        text: 'কিন্তু ইবলিস সিজদা করতে অস্বীকার করল। আল্লাহ যখন তাকে জিজ্ঞাসা করলেন কেন সে অবাধ্য হলো, ইবলিস তার পাপের মূল কারণ প্রকাশ করল: অহংকার। সে বলল, "আমি তার চেয়ে উত্তম। তুমি আমাকে আগুন থেকে সৃষ্টি করেছ আর তাকে সৃষ্টি করেছ মাটি থেকে।"',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 7,
            surahName: { en: 'Al-A\'raf', bn: 'আল-আ\'রাফ', ar: 'الأعراف' },
            ayahStart: 11,
            ayahEnd: 12,
            translation: {
              en: '[Satan] said, "I am better than him. You created me from fire and created him from clay."',
              bn: '[ইবলিস] বলল, "আমি তার চেয়ে উত্তম। তুমি আমাকে আগুন থেকে সৃষ্টি করেছ আর তাকে সৃষ্টি করেছ মাটি থেকে।"',
              ar: 'قَالَ أَنَا خَيْرٌ مِّنْهُ خَلَقْتَنِي مِن نَّارٍ وَخَلَقْتَهُ مِن طِينٍ',
            },
          },
        ],
      },
      {
        id: 'adam-ch02-p03',
        text: 'এরপর আল্লাহ ইবলিসকে তার সম্মানের স্থান থেকে বিতাড়িত করলেন এবং কিয়ামত পর্যন্ত তার উপর অভিশাপ দিলেন। সূরা আল-হিজরে বিস্তারিত এই কথোপকথন রয়েছে যেখানে ইবলিস অবকাশ চায় এবং আল্লাহ তাকে সেই অবকাশ দেন।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 15,
            surahName: { en: 'Al-Hijr', bn: 'আল-হিজর', ar: 'الحجر' },
            ayahStart: 30,
            ayahEnd: 38,
            translation: {
              en: 'So the angels prostrated — all of them entirely, except Iblis; he refused to be with those who prostrated.',
              bn: 'অতঃপর ফেরেশতারা সকলেই সিজদা করল, ইবলিস ছাড়া; সে সিজদাকারীদের সাথে থাকতে অস্বীকার করল।',
              ar: 'فَسَجَدَ الْمَلَائِكَةُ كُلُّهُمْ أَجْمَعُونَ إِلَّا إِبْلِيسَ أَبَىٰ أَن يَكُونَ مَعَ السَّاجِدِينَ',
            },
          },
        ],
      },
      {
        id: 'adam-ch02-p04',
        text: 'কুরআন ইবলিসের প্রকৃতিও স্পষ্ট করে। সে ফেরেশতাদের মাঝে থাকলেও আসলে ফেরেশতা ছিল না। সূরা আল-কাহফে স্পষ্ট বলা হয়েছে যে ইবলিস ছিল জিনদের অন্তর্ভুক্ত এবং সে তার রবের আদেশ অমান্য করল।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 18,
            surahName: { en: 'Al-Kahf', bn: 'আল-কাহফ', ar: 'الكهف' },
            ayahStart: 50,
            arabicText: 'إِلَّا إِبْلِيسَ كَانَ مِنَ الْجِنِّ فَفَسَقَ عَنْ أَمْرِ رَبِّهِ',
            translation: {
              en: '...except Iblis. He was of the jinn and departed from the command of his Lord.',
              bn: '...ইবলিস ছাড়া। সে ছিল জিনদের অন্তর্ভুক্ত, অতঃপর সে তার রবের আদেশ অমান্য করল।',
              ar: 'إِلَّا إِبْلِيسَ كَانَ مِنَ الْجِنِّ فَفَسَقَ عَنْ أَمْرِ رَبِّهِ',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'adam-ch-03',
    title: 'জান্নাতে বসবাস',
    summary: 'আদম (আ.)-কে জান্নাতে স্থান দেওয়া হয় এবং হাওয়াকে তাঁর সঙ্গী হিসেবে সৃষ্টি করা হয়। একটি নিষিদ্ধ গাছ ছাড়া সবকিছু তাঁদের জন্য অনুমোদিত।',
    order: 3,
    paragraphs: [
      {
        id: 'adam-ch03-p01',
        text: 'আদম (আ.)-এর সম্মানিত সৃষ্টির পর আল্লাহ তাঁকে জান্নাতে বসবাসের অনুমতি দিলেন। আল্লাহ বললেন, "হে আদম, তুমি ও তোমার স্ত্রী জান্নাতে বসবাস করো এবং সেখান থেকে যেখানে ইচ্ছা স্বাচ্ছন্দ্যে খাও। কিন্তু এই গাছের কাছে যেও না, তাহলে তোমরা জালিমদের অন্তর্ভুক্ত হবে।"',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 2,
            surahName: { en: 'Al-Baqarah', bn: 'আল-বাকারা', ar: 'البقرة' },
            ayahStart: 35,
            arabicText: 'وَقُلْنَا يَا آدَمُ اسْكُنْ أَنتَ وَزَوْجُكَ الْجَنَّةَ وَكُلَا مِنْهَا رَغَدًا حَيْثُ شِئْتُمَا وَلَا تَقْرَبَا هَٰذِهِ الشَّجَرَةَ فَتَكُونَا مِنَ الظَّالِمِينَ',
            translation: {
              en: 'And We said, "O Adam, dwell, you and your wife, in Paradise and eat therefrom in [ease and] abundance from wherever you will. But do not approach this tree, lest you be among the wrongdoers."',
              bn: 'এবং আমি বললাম, "হে আদম, তুমি ও তোমার স্ত্রী জান্নাতে বসবাস করো এবং সেখান থেকে যেখানে ইচ্ছা স্বাচ্ছন্দ্যে খাও। কিন্তু এই গাছের কাছে যেও না, তাহলে তোমরা জালিমদের অন্তর্ভুক্ত হবে।"',
              ar: 'وَقُلْنَا يَا آدَمُ اسْكُنْ أَنتَ وَزَوْجُكَ الْجَنَّةَ وَكُلَا مِنْهَا رَغَدًا حَيْثُ شِئْتُمَا وَلَا تَقْرَبَا هَٰذِهِ الشَّجَرَةَ فَتَكُونَا مِنَ الظَّالِمِينَ',
            },
          },
        ],
      },
      {
        id: 'adam-ch03-p02',
        text: 'আল্লাহ আদমকে শয়তানের প্রতারণা থেকে সতর্ক করেছিলেন এবং জান্নাতের আরাম সম্পর্কে জানিয়েছিলেন। সূরা ত্বা-হায় আল্লাহ বললেন যে সেখানে ক্ষুধা, তৃষ্ণা, বস্ত্রহীনতা বা রোদের কষ্ট নেই।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 7,
            surahName: { en: 'Al-A\'raf', bn: 'আল-আ\'রাফ', ar: 'الأعراف' },
            ayahStart: 19,
            translation: {
              en: 'And "O Adam, dwell, you and your wife, in Paradise and eat from wherever you will but do not approach this tree."',
              bn: 'আর "হে আদম, তুমি ও তোমার স্ত্রী জান্নাতে বসবাস করো এবং যেখান থেকে ইচ্ছা খাও, কিন্তু এই গাছের কাছে যেও না।"',
              ar: 'وَيَا آدَمُ اسْكُنْ أَنتَ وَزَوْجُكَ الْجَنَّةَ فَكُلَا مِنْ حَيْثُ شِئْتُمَا وَلَا تَقْرَبَا هَٰذِهِ الشَّجَرَةَ',
            },
          },
        ],
      },
      {
        id: 'adam-ch03-p03',
        text: 'হাওয়ার সৃষ্টি সম্পর্কে কুরআনে বলা হয়েছে যে আল্লাহ আদম থেকে তাঁর সঙ্গী সৃষ্টি করেছেন। ইবনে কাসীর ব্যাখ্যা করেন যে আদম ঘুমন্ত অবস্থায় তাঁর পাঁজরের হাড় থেকে হাওয়াকে সৃষ্টি করা হয়েছিল। রাসূলুল্লাহ (সা.) বলেছেন: "নারীদের প্রতি সদয় আচরণ করো, কারণ নারীকে পাঁজরের হাড় থেকে সৃষ্টি করা হয়েছে।"',
        phase: 'ibn-kathir',
        references: [
          {
            type: 'quran',
            surah: 4,
            surahName: { en: 'An-Nisa', bn: 'আন-নিসা', ar: 'النساء' },
            ayahStart: 1,
            translation: {
              en: 'O mankind, fear your Lord, who created you from one soul and created from it its mate.',
              bn: 'হে মানুষ, তোমাদের রবকে ভয় করো, যিনি তোমাদের সৃষ্টি করেছেন একটি প্রাণ থেকে এবং তা থেকে তার জোড়া সৃষ্টি করেছেন।',
              ar: 'يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمُ الَّذِي خَلَقَكُم مِّن نَّفْسٍ وَاحِدَةٍ وَخَلَقَ مِنْهَا زَوْجَهَا',
            },
          },
          {
            type: 'hadith',
            collection: 'Sahih al-Bukhari',
            hadithNumber: '3331',
            narrator: 'Abu Hurayrah',
            text: {
              en: 'The Prophet (peace be upon him) said: "Treat women kindly, for woman was created from a rib."',
              bn: 'নবী (সা.) বলেছেন: "নারীদের প্রতি সদয় আচরণ করো, কারণ নারীকে পাঁজরের হাড় থেকে সৃষ্টি করা হয়েছে।"',
              ar: 'قال النبي ﷺ: "استوصوا بالنساء خيرًا، فإن المرأة خُلقت من ضلع."',
            },
            grade: 'sahih',
          },
        ],
      },
    ],
  },
  {
    id: 'adam-ch-04',
    title: 'নিষিদ্ধ বৃক্ষ ও পতন',
    summary: 'ইবলিস আদম ও হাওয়াকে কুমন্ত্রণা দিয়ে নিষিদ্ধ গাছের ফল খেতে প্রলুব্ধ করে। তাঁরা খাওয়ার পর তাঁদের লজ্জাস্থান প্রকাশ হয়ে পড়ে।',
    order: 4,
    paragraphs: [
      {
        id: 'adam-ch04-p01',
        text: 'শয়তান আদম ও হাওয়ার বিরুদ্ধে তার প্রতারণার অভিযান শুরু করল। সে তাদের কাছে কুমন্ত্রণা দিল এবং মিথ্যা শপথ করে বলল যে সে তাদের শুভাকাঙ্ক্ষী।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 7,
            surahName: { en: 'Al-A\'raf', bn: 'আল-আ\'রাফ', ar: 'الأعراف' },
            ayahStart: 20,
            ayahEnd: 22,
            translation: {
              en: 'But Satan whispered to them to make apparent to them that which was concealed from them of their private parts.',
              bn: 'কিন্তু শয়তান তাদের কাছে কুমন্ত্রণা দিল যাতে তাদের লজ্জাস্থান প্রকাশ করে দেয়।',
              ar: 'فَوَسْوَسَ لَهُمَا الشَّيْطَانُ لِيُبْدِيَ لَهُمَا مَا وُورِيَ عَنْهُمَا مِن سَوْآتِهِمَا',
            },
          },
        ],
      },
      {
        id: 'adam-ch04-p02',
        text: 'সূরা ত্বা-হায় শয়তানের কৌশল আরও বিস্তারিত বর্ণিত হয়েছে। সে বলেছিল: "হে আদম, আমি কি তোমাকে অমরত্বের গাছ ও অক্ষয় রাজত্বের সন্ধান দেব?" আদম ও হাওয়া উভয়ে সেই গাছ থেকে খেলেন এবং তাঁদের লজ্জাস্থান প্রকাশ হয়ে পড়ল। তবে কুরআন উল্লেখ করেছে যে এটি ছিল একটি পদস্খলন, ইচ্ছাকৃত বিদ্রোহ নয়।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 20,
            surahName: { en: 'Ta-Ha', bn: 'তা-হা', ar: 'طه' },
            ayahStart: 120,
            ayahEnd: 121,
            translation: {
              en: 'Then Satan whispered to him; he said, "O Adam, shall I direct you to the tree of eternity and possession that will not deteriorate?"',
              bn: 'অতঃপর শয়তান তাকে কুমন্ত্রণা দিল; সে বলল, "হে আদম, আমি কি তোমাকে অমরত্বের গাছ ও অক্ষয় রাজত্বের সন্ধান দেব?"',
              ar: 'فَوَسْوَسَ إِلَيْهِ الشَّيْطَانُ قَالَ يَا آدَمُ هَلْ أَدُلُّكَ عَلَىٰ شَجَرَةِ الْخُلْدِ وَمُلْكٍ لَّا يَبْلَىٰ',
            },
          },
        ],
      },
      {
        id: 'adam-ch04-p03',
        text: 'ইবনে কাসীর নিষিদ্ধ গাছের পরিচয় সম্পর্কে আলোচনা করেন। পণ্ডিতদের মধ্যে মতভেদ রয়েছে — কেউ বলেন এটি আঙুর গাছ, কেউ বলেন গম, কেউ বলেন ডুমুর গাছ। তবে ইবনে কাসীর জোর দেন যে গাছের পরিচয় মুখ্য নয়; মুখ্য হলো আনুগত্যের শিক্ষা। কুরআনও বলে: "আর আমি ইতিপূর্বে আদম থেকে অঙ্গীকার নিয়েছিলাম, কিন্তু সে ভুলে গিয়েছিল; আর আমি তার মধ্যে দৃঢ় সংকল্প পাইনি।"',
        phase: 'ibn-kathir',
        references: [
          {
            type: 'quran',
            surah: 20,
            surahName: { en: 'Ta-Ha', bn: 'তা-হা', ar: 'طه' },
            ayahStart: 115,
            translation: {
              en: 'And We had already taken a covenant from Adam before, but he forgot; and We found not in him determination.',
              bn: 'আর আমি ইতিপূর্বে আদম থেকে অঙ্গীকার নিয়েছিলাম, কিন্তু সে ভুলে গিয়েছিল; আর আমি তার মধ্যে দৃঢ় সংকল্প পাইনি।',
              ar: 'وَلَقَدْ عَهِدْنَا إِلَىٰ آدَمَ مِن قَبْلُ فَنَسِيَ وَلَمْ نَجِدْ لَهُ عَزْمًا',
            },
          },
          {
            type: 'ibn-kathir',
            book: 'Qasas al-Anbiya (Stories of the Prophets)',
            chapter: 'The Story of Adam, upon him be peace',
            section: 'Adam Eats from the Tree',
            summary: {
              en: 'Ibn Kathir discusses scholarly opinions on the forbidden tree and emphasises Adam ate out of forgetfulness.',
              bn: 'ইবনে কাসীর নিষিদ্ধ গাছের পরিচয় সম্পর্কে পণ্ডিতদের মতামত আলোচনা করেন এবং জোর দেন যে আদম ভুলবশত খেয়েছিলেন।',
              ar: 'يناقش ابن كثير آراء العلماء حول الشجرة المحرمة ويؤكد أن آدم أكل نسياناً.',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'adam-ch-05',
    title: 'পৃথিবীতে অবতরণ ও তাওবা',
    summary: 'আদম ও হাওয়া আন্তরিকভাবে তাওবা করেন। আল্লাহ তাঁদের তাওবা কবুল করেন এবং তাঁদের পৃথিবীতে পাঠান।',
    order: 5,
    paragraphs: [
      {
        id: 'adam-ch05-p01',
        text: 'ভুলের পরপরই আদম ও হাওয়া আন্তরিকভাবে আল্লাহর কাছে তাওবা করলেন: "হে আমাদের রব, আমরা নিজেদের উপর জুলুম করেছি। আপনি যদি আমাদের ক্ষমা না করেন এবং আমাদের প্রতি দয়া না করেন, তবে আমরা অবশ্যই ক্ষতিগ্রস্তদের অন্তর্ভুক্ত হব।"',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 7,
            surahName: { en: 'Al-A\'raf', bn: 'আল-আ\'রাফ', ar: 'الأعراف' },
            ayahStart: 23,
            ayahEnd: 24,
            arabicText: 'قَالَا رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ',
            translation: {
              en: 'They said, "Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers."',
              bn: 'তারা বলল, "হে আমাদের রব, আমরা নিজেদের উপর জুলুম করেছি। আপনি যদি আমাদের ক্ষমা না করেন এবং আমাদের প্রতি দয়া না করেন, তবে আমরা অবশ্যই ক্ষতিগ্রস্তদের অন্তর্ভুক্ত হব।"',
              ar: 'قَالَا رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ',
            },
          },
        ],
      },
      {
        id: 'adam-ch05-p02',
        text: 'আল্লাহ আদমের তাওবা কবুল করলেন এবং তাদের পৃথিবীতে পাঠালেন। তিনি বললেন: "তোমরা সবাই নেমে যাও। অতঃপর আমার পক্ষ থেকে হেদায়াত আসলে যে আমার হেদায়াত অনুসরণ করবে তাদের কোনো ভয় নেই।"',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 2,
            surahName: { en: 'Al-Baqarah', bn: 'আল-বাকারা', ar: 'البقرة' },
            ayahStart: 37,
            ayahEnd: 38,
            translation: {
              en: 'Then Adam received from his Lord [some] words, and He accepted his repentance. We said, "Go down from it, all of you..."',
              bn: 'অতঃপর আদম তার রবের কাছ থেকে কিছু বাণী পেলেন, ফলে আল্লাহ তার তাওবা কবুল করলেন। আমি বললাম, "তোমরা সবাই নেমে যাও..."',
              ar: 'فَتَلَقَّىٰ آدَمُ مِن رَّبِّهِ كَلِمَاتٍ فَتَابَ عَلَيْهِ ۚ قُلْنَا اهْبِطُوا مِنْهَا جَمِيعًا',
            },
          },
          {
            type: 'quran',
            surah: 20,
            surahName: { en: 'Ta-Ha', bn: 'তা-হা', ar: 'طه' },
            ayahStart: 122,
            ayahEnd: 123,
            translation: {
              en: 'Then his Lord chose him and turned to him in forgiveness and guided [him].',
              bn: 'অতঃপর তার রব তাকে মনোনীত করলেন, তার তাওবা কবুল করলেন এবং তাকে পথ দেখালেন।',
              ar: 'ثُمَّ اجْتَبَاهُ رَبُّهُ فَتَابَ عَلَيْهِ وَهَدَىٰ',
            },
          },
        ],
      },
      {
        id: 'adam-ch05-p03',
        text: 'ইবনে কাসীর বর্ণনা করেন যে আদম ও হাওয়া পৃথিবীর বিভিন্ন স্থানে অবতরণ করেন। কিছু বর্ণনা অনুসারে তারা আরাফাতের ময়দানে পুনরায় মিলিত হন। এই অবতরণ শুধু শাস্তি ছিল না — এটি ছিল পৃথিবীতে খলিফা স্থাপনের আল্লাহর মূল পরিকল্পনার বাস্তবায়ন।',
        phase: 'ibn-kathir',
        references: [
          {
            type: 'ibn-kathir',
            book: 'Qasas al-Anbiya (Stories of the Prophets)',
            chapter: 'The Story of Adam, upon him be peace',
            section: 'The Descent of Adam and Hawwa to Earth',
            summary: {
              en: 'Ibn Kathir cites various narrations about the locations where Adam and Hawwa descended to earth.',
              bn: 'ইবনে কাসীর আদম ও হাওয়ার পৃথিবীতে অবতরণের স্থান সম্পর্কে বিভিন্ন বর্ণনা উদ্ধৃত করেন।',
              ar: 'يذكر ابن كثير روايات مختلفة حول أماكن هبوط آدم وحواء إلى الأرض.',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'adam-ch-06',
    title: 'হাবিল ও কাবিল',
    summary: 'আদমের দুই পুত্রের কাহিনী: হাবিল আন্তরিক কোরবানি পেশ করেন, আর কাবিলের কোরবানি প্রত্যাখ্যাত হয়। ঈর্ষায় কাবিল প্রথম হত্যাকাণ্ড ঘটায়।',
    order: 6,
    paragraphs: [
      {
        id: 'adam-ch06-p01',
        text: 'আল্লাহ সূরা আল-মায়িদাহতে আদমের দুই পুত্রের কাহিনী বর্ণনা করেছেন। দুই ভাই আল্লাহর উদ্দেশ্যে কোরবানি পেশ করল। হাবিলের কোরবানি কবুল হলো কিন্তু কাবিলেরটি হলো না। কুরআন বলে: "আল্লাহ শুধু মুত্তাকীদের থেকেই কবুল করেন।"',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 5,
            surahName: { en: 'Al-Ma\'idah', bn: 'আল-মায়িদাহ', ar: 'المائدة' },
            ayahStart: 27,
            ayahEnd: 31,
            translation: {
              en: 'And recite to them the story of Adam\'s two sons, in truth, when they both offered a sacrifice [to Allah]...',
              bn: 'আর তাদের কাছে আদমের দুই পুত্রের সত্য ঘটনা বর্ণনা করুন, যখন তারা উভয়ে কোরবানি পেশ করল...',
              ar: 'وَاتْلُ عَلَيْهِمْ نَبَأَ ابْنَيْ آدَمَ بِالْحَقِّ إِذْ قَرَّبَا قُرْبَانًا',
            },
          },
        ],
      },
      {
        id: 'adam-ch06-p02',
        text: 'কাবিল হত্যার হুমকি দিলে হাবিল বললেন: "তুমি যদি আমাকে হত্যা করতে আমার দিকে হাত বাড়াও — আমি তোমাকে হত্যা করতে তোমার দিকে হাত বাড়াব না। নিশ্চয়ই আমি বিশ্বজগতের রব আল্লাহকে ভয় করি।" কিন্তু কাবিল তার ভাইকে হত্যা করল। আল্লাহ একটি কাক পাঠালেন যে মাটি খুঁড়ে দেখাল কীভাবে মৃতদেহ দাফন করতে হয়।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 5,
            surahName: { en: 'Al-Ma\'idah', bn: 'আল-মায়িদাহ', ar: 'المائدة' },
            ayahStart: 28,
            ayahEnd: 31,
            translation: {
              en: '"If you should raise your hand against me to kill me — I shall not raise my hand against you to kill you..."',
              bn: '"তুমি যদি আমাকে হত্যা করতে আমার দিকে হাত বাড়াও — আমি তোমাকে হত্যা করতে তোমার দিকে হাত বাড়াব না..."',
              ar: 'لَئِن بَسَطتَ إِلَيَّ يَدَكَ لِتَقْتُلَنِي مَا أَنَا بِبَاسِطٍ يَدِيَ إِلَيْكَ لِأَقْتُلَكَ',
            },
          },
        ],
      },
      {
        id: 'adam-ch06-p03',
        text: 'রাসূলুল্লাহ (সা.) বলেছেন: "কোনো প্রাণকে অন্যায়ভাবে হত্যা করা হলে তার রক্তের একটি অংশ আদমের প্রথম পুত্রের উপর বর্তায়, কারণ সেই প্রথম হত্যার প্রচলন শুরু করেছিল।" ইবনে কাসীর এই বিরোধের পটভূমিও ব্যাখ্যা করেন — যমজ-বিবাহ প্রথা সংক্রান্ত মতবিরোধ এবং হাবিলের মৃত্যুর পর শীস (শেথ)-এর জন্ম।',
        phase: 'hadith',
        references: [
          {
            type: 'hadith',
            collection: 'Sahih al-Bukhari',
            hadithNumber: '3335',
            narrator: 'Abdullah ibn Mas\'ud',
            text: {
              en: 'The Prophet (peace be upon him) said: "No soul is killed unjustly except that a share of its blood falls upon the first son of Adam."',
              bn: 'নবী (সা.) বলেছেন: "কোনো প্রাণকে অন্যায়ভাবে হত্যা করা হলে তার রক্তের একটি অংশ আদমের প্রথম পুত্রের উপর বর্তায়।"',
              ar: 'قال النبي ﷺ: "لا تُقتل نفس ظلمًا إلا كان على ابن آدم الأول كفل من دمها."',
            },
            grade: 'sahih',
          },
          {
            type: 'ibn-kathir',
            book: 'Qasas al-Anbiya (Stories of the Prophets)',
            chapter: 'The Story of Adam, upon him be peace',
            section: 'The Story of Habil and Qabil',
            summary: {
              en: 'Ibn Kathir explains the background of the dispute and the birth of Shith (Seth) after Habil\'s death.',
              bn: 'ইবনে কাসীর বিরোধের পটভূমি এবং হাবিলের মৃত্যুর পর শীস (শেথ)-এর জন্মের কথা বর্ণনা করেন।',
              ar: 'يشرح ابن كثير خلفية النزاع وولادة شيث بعد وفاة هابيل.',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'adam-ch-07',
    title: 'আদম (আ.)-এর মৃত্যু',
    summary: 'আদম (আ.) প্রায় ৯৬০ বছর বেঁচে থাকেন এবং মৃত্যুবরণ করেন। ফেরেশতারা তাঁকে গোসল দেন ও দাফন করেন, মানবজাতির জন্য জানাযার রীতি প্রতিষ্ঠা করেন।',
    order: 7,
    paragraphs: [
      {
        id: 'adam-ch07-p01',
        text: 'আদম (আ.) পৃথিবীতে দীর্ঘ জীবন কাটান, প্রথম নবী ও মানবজাতির পিতা হিসেবে তাঁর দায়িত্ব পালন করেন। ইবনে কাসীর তাঁর নবুওয়াত নিশ্চিত করেন এবং বলেন যে তিনি ওহী পেয়েছিলেন এবং তাঁর ক্রমবর্ধমান পরিবারকে পরিচালনা করেছিলেন।',
        phase: 'ibn-kathir',
        references: [
          {
            type: 'ibn-kathir',
            book: 'Qasas al-Anbiya (Stories of the Prophets)',
            chapter: 'The Story of Adam, upon him be peace',
            section: 'The Life and Prophethood of Adam on Earth',
            summary: {
              en: 'Ibn Kathir confirms Adam as a prophet who received revelation and guided his family.',
              bn: 'ইবনে কাসীর আদমকে একজন নবী হিসেবে নিশ্চিত করেন যিনি ওহী পেয়েছিলেন এবং তাঁর পরিবারকে পরিচালনা করেছিলেন।',
              ar: 'يؤكد ابن كثير أن آدم كان نبياً تلقى الوحي وأرشد أسرته.',
            },
          },
        ],
      },
      {
        id: 'adam-ch07-p02',
        text: 'আদমকে ১,০০০ বছরের আয়ু দেওয়া হয়েছিল কিন্তু তিনি ৪০ বছর দাউদকে দিয়ে দিয়েছিলেন। মৃত্যুর সময় আদম ভুলে গিয়ে বলেছিলেন যে তাঁর আরও ৪০ বছর বাকি আছে। নবী (সা.) বলেছেন: "আদম অস্বীকার করলেন, তাই তাঁর বংশধররা অস্বীকার করে; আদম ভুলে গিয়েছিলেন, তাই তাঁর বংশধররা ভুলে যায়।"',
        phase: 'hadith',
        references: [
          {
            type: 'hadith',
            collection: 'Jami at-Tirmidhi',
            hadithNumber: '3076',
            narrator: 'Abu Hurayrah',
            text: {
              en: 'The Prophet (peace be upon him) said: "...Adam gave forty years of his lifespan to Dawud..."',
              bn: 'নবী (সা.) বলেছেন: "...আদম তাঁর আয়ু থেকে ৪০ বছর দাউদকে দিলেন..."',
              ar: 'قال النبي ﷺ: "...فوهب آدم لداود أربعين سنة من عمره..."',
            },
            grade: 'hasan',
          },
        ],
      },
      {
        id: 'adam-ch07-p03',
        text: 'আদম (আ.) মৃত্যুবরণ করলে ফেরেশতারা তাঁকে গোসল দিলেন, কাফন পরালেন, কবর খুঁড়লেন এবং দাফন করলেন। তারপর তাঁর সন্তানদের বললেন: "এটাই তোমাদের মৃতদের জন্য তোমাদের রীতি।" ইসরা ও মিরাজের রাতে রাসূলুল্লাহ (সা.) প্রথম আসমানে আদম (আ.)-এর সাথে সাক্ষাৎ করেন। আদম তাঁকে বলেছিলেন, "স্বাগতম, হে পুণ্যবান পুত্র ও পুণ্যবান নবী।"',
        phase: 'ibn-kathir',
        references: [
          {
            type: 'ibn-kathir',
            book: 'Qasas al-Anbiya (Stories of the Prophets)',
            chapter: 'The Story of Adam, upon him be peace',
            section: 'The Death of Adam',
            summary: {
              en: 'Ibn Kathir narrates that the angels washed, shrouded, and buried Adam, establishing funeral rites.',
              bn: 'ইবনে কাসীর বর্ণনা করেন যে ফেরেশতারা আদমকে গোসল দিলেন, কাফন পরালেন এবং দাফন করলেন, জানাযার রীতি প্রতিষ্ঠা করলেন।',
              ar: 'يروي ابن كثير أن الملائكة غسلت آدم وكفنته ودفنته فأسست شعائر الجنازة.',
            },
          },
          {
            type: 'hadith',
            collection: 'Sahih al-Bukhari',
            hadithNumber: '3207',
            narrator: 'Malik ibn Sa\'sa\'ah',
            text: {
              en: 'The Prophet (peace be upon him) said: "...Then we ascended to the first heaven... I saw Adam..."',
              bn: 'নবী (সা.) বলেছেন: "...তারপর আমরা প্রথম আসমানে উঠলাম... আমি আদমকে দেখলাম..."',
              ar: 'قال النبي ﷺ: "...ثم عُرج بنا إلى السماء الأولى... فإذا أنا بآدم..."',
            },
            grade: 'sahih',
          },
        ],
      },
    ],
  },
];

export default chapters;
