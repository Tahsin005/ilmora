import type { StoryChapter } from '../../../types/prophet';

const chapters: StoryChapter[] = [
  {
    id: 'muhammad-ch1',
    title: 'সর্বশেষ নবী',
    summary: 'মুহাম্মাদ (সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম) আল্লাহর সর্বশেষ রাসূল, সমগ্র মানবজাতির জন্য রহমত হিসেবে প্রেরিত।',
    order: 1,
    paragraphs: [
      {
        id: 'muhammad-ch1-p1',
        text: 'মুহাম্মাদ (সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম) সমগ্র মানবজাতির কাছে প্রেরিত সর্বশেষ রাসূল। আল্লাহ তাঁকে সমগ্র বিশ্বের জন্য রহমত হিসেবে বর্ণনা করেছেন। তাঁর বার্তা কোনো একটি জাতি বা গোত্রের মধ্যে সীমাবদ্ধ ছিল না বরং কিয়ামত পর্যন্ত সমগ্র মানবজাতির জন্য সার্বজনীন।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 21,
            surahName: { en: 'Al-Anbiya', bn: 'আল-আম্বিয়া', ar: 'الأنبياء' },
            ayahStart: 107,
            translation: {
              en: 'And We have not sent you, [O Muhammad], except as a mercy to the worlds.',
              bn: 'আর আমি তোমাকে সমগ্র বিশ্বের জন্য রহমত হিসেবেই প্রেরণ করেছি।',
              ar: 'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ'
            }
          }
        ]
      },
      {
        id: 'muhammad-ch1-p2',
        text: 'মুহাম্মাদ তোমাদের পুরুষদের মধ্যে কারো পিতা নন, বরং তিনি আল্লাহর রাসূল এবং শেষ নবী (খাতামুন নাবিয়্যীন)। তাঁর মাধ্যমে আদম (আ.) থেকে শুরু হওয়া নবুওয়াতের দীর্ঘ ধারাবাহিকতা সম্পূর্ণ ও পরিপূর্ণ হয়েছে।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 33,
            surahName: { en: 'Al-Ahzab', bn: 'আল-আহযাব', ar: 'الأحزاب' },
            ayahStart: 40,
            translation: {
              en: 'Muhammad is not the father of [any] one of your men, but [he is] the Messenger of Allah and last of the prophets. And ever is Allah, of all things, Knowing.',
              bn: 'মুহাম্মাদ তোমাদের পুরুষদের মধ্যে কারো পিতা নন, বরং তিনি আল্লাহর রাসূল এবং শেষ নবী। আল্লাহ সর্ববিষয়ে সর্বজ্ঞ।',
              ar: 'مَّا كَانَ مُحَمَّدٌ أَبَا أَحَدٍ مِّن رِّجَالِكُمْ وَلَٰكِن رَّسُولَ اللَّهِ وَخَاتَمَ النَّبِيِّينَ ۗ وَكَانَ اللَّهُ بِكُلِّ شَيْءٍ عَلِيمًا'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'muhammad-ch2',
    title: 'প্রথম ওহী',
    summary: 'হেরা গুহায় ফেরেশতা জিবরীল কুরআনের প্রথম বাণী নিয়ে মুহাম্মাদের কাছে আসেন।',
    order: 2,
    paragraphs: [
      {
        id: 'muhammad-ch2-p1',
        text: 'হেরা গুহায় ফেরেশতা জিবরীল মুহাম্মাদের কাছে এসে বললেন: "পড়ো! তোমার রবের নামে যিনি সৃষ্টি করেছেন — মানুষকে জমাট রক্ত থেকে সৃষ্টি করেছেন। পড়ো! আর তোমার রব সবচেয়ে দয়ালু।" এগুলোই ছিল কুরআনের সর্বপ্রথম নাযিলকৃত আয়াত, যা মানবজাতির কাছে চূড়ান্ত ঐশী বার্তার সূচনা করেছিল।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 96,
            surahName: { en: 'Al-Alaq', bn: 'আল-আলাক', ar: 'العلق' },
            ayahStart: 1,
            ayahEnd: 5,
            translation: {
              en: 'Read in the name of your Lord who created — created man from a clinging substance. Read, and your Lord is the Most Generous — Who taught by the pen — taught man that which he knew not.',
              bn: 'পড়ো তোমার রবের নামে যিনি সৃষ্টি করেছেন — মানুষকে জমাট রক্ত থেকে সৃষ্টি করেছেন। পড়ো, আর তোমার রব সবচেয়ে দয়ালু — যিনি কলমের সাহায্যে শিক্ষা দিয়েছেন — মানুষকে শিক্ষা দিয়েছেন যা সে জানত না।',
              ar: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ اقْرَأْ وَرَبُّكَ الْأَكْرَمُ الَّذِي عَلَّمَ بِالْقَلَمِ عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ'
            }
          }
        ]
      },
      {
        id: 'muhammad-ch2-p2',
        text: 'ওহী নাযিলের প্রথম দিকে আল্লাহ মুহাম্মাদকে আশ্বস্ত করলেন: "কসম পূর্বাহ্নের উজ্জ্বলতার এবং রাতের যখন তা অন্ধকারে ঢেকে যায়, তোমার রব তোমাকে পরিত্যাগ করেননি এবং তোমার প্রতি অসন্তুষ্টও হননি।" এটি নবীকে প্রশান্তি ও নিশ্চয়তা দিয়েছিল যে আল্লাহ তাঁর সাথে আছেন।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 93,
            surahName: { en: 'Ad-Duha', bn: 'আদ-দুহা', ar: 'الضحى' },
            ayahStart: 1,
            ayahEnd: 3,
            translation: {
              en: 'By the morning brightness, and [by] the night when it covers with darkness, your Lord has not taken leave of you, [O Muhammad], nor has He detested [you].',
              bn: 'কসম পূর্বাহ্নের উজ্জ্বলতার, এবং রাতের যখন তা অন্ধকারে ঢেকে যায়, তোমার রব তোমাকে পরিত্যাগ করেননি এবং তোমার প্রতি অসন্তুষ্টও হননি।',
              ar: 'وَالضُّحَىٰ وَاللَّيْلِ إِذَا سَجَىٰ مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'muhammad-ch3',
    title: 'নির্যাতন ও ধৈর্য',
    summary: 'প্রাথমিক মুসলমানরা কঠিন নির্যাতন সহ্য করেছিলেন, কিন্তু আল্লাহ কষ্টের পর স্বস্তির প্রতিশ্রুতি দিয়েছেন এবং তাঁর রাসূলকে রক্ষা করেছেন।',
    order: 3,
    paragraphs: [
      {
        id: 'muhammad-ch3-p1',
        text: 'প্রাথমিক মুসলমানরা মক্কায় কঠিন নির্যাতনের সম্মুখীন হয়েছিলেন। তাদের নির্যাতন করা হয়েছিল, বয়কট করা হয়েছিল এবং তাদের ঘর থেকে বিতাড়িত করা হয়েছিল। আল্লাহ মুহাম্মাদকে সান্ত্বনা দিলেন: "নিশ্চয়ই কষ্টের সাথে স্বস্তি আছে। নিশ্চয়ই কষ্টের সাথে স্বস্তি আছে।" এই প্রতিশ্রুতি কঠিনতম সময়ে মুমিনদের টিকিয়ে রেখেছিল।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 94,
            surahName: { en: 'Ash-Sharh', bn: 'আশ-শারহ', ar: 'الشرح' },
            ayahStart: 5,
            ayahEnd: 6,
            translation: {
              en: 'For indeed, with hardship [will be] ease. Indeed, with hardship [will be] ease.',
              bn: 'নিশ্চয়ই কষ্টের সাথে স্বস্তি আছে। নিশ্চয়ই কষ্টের সাথে স্বস্তি আছে।',
              ar: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا إِنَّ مَعَ الْعُسْرِ يُسْرًا'
            }
          }
        ]
      },
      {
        id: 'muhammad-ch3-p2',
        text: 'আল্লাহ কঠিনতম পরীক্ষায় মুহাম্মাদকে রক্ষা করেছেন। হিজরতের সময় তিনি যখন আবু বকরের সাথে গুহায় ছিলেন এবং শত্রুরা গুহার মুখে ছিল, তিনি তাঁর সঙ্গীকে বললেন: "দুঃখ করো না; নিশ্চয়ই আল্লাহ আমাদের সাথে আছেন।" আল্লাহ তাঁর উপর প্রশান্তি নাযিল করলেন এবং অদৃশ্য বাহিনী দিয়ে তাঁকে সাহায্য করলেন।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 9,
            surahName: { en: 'At-Tawbah', bn: 'আত-তওবাহ', ar: 'التوبة' },
            ayahStart: 40,
            translation: {
              en: 'If you do not aid the Prophet — Allah has already aided him when those who disbelieved had driven him out [of Makkah] as one of two, when they were in the cave and he said to his companion, "Do not grieve; indeed Allah is with us." And Allah sent down His tranquillity upon him and supported him with angels you did not see.',
              bn: 'যদি তোমরা তাকে (নবীকে) সাহায্য না করো — আল্লাহ তাকে সাহায্য করেছিলেন যখন কাফিররা তাকে বের করে দিয়েছিল, দুজনের একজন হিসেবে, যখন তারা গুহায় ছিলেন এবং তিনি তাঁর সঙ্গীকে বললেন, "দুঃখ করো না; নিশ্চয়ই আল্লাহ আমাদের সাথে আছেন।" আর আল্লাহ তাঁর উপর প্রশান্তি নাযিল করলেন এবং এমন সৈন্যবাহিনী দিয়ে তাঁকে সাহায্য করলেন যা তোমরা দেখোনি।',
              ar: 'إِلَّا تَنصُرُوهُ فَقَدْ نَصَرَهُ اللَّهُ إِذْ أَخْرَجَهُ الَّذِينَ كَفَرُوا ثَانِيَ اثْنَيْنِ إِذْ هُمَا فِي الْغَارِ إِذْ يَقُولُ لِصَاحِبِهِ لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا ۖ فَأَنزَلَ اللَّهُ سَكِينَتَهُ عَلَيْهِ وَأَيَّدَهُ بِجُنُودٍ لَّمْ تَرَوْهَا'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'muhammad-ch4',
    title: 'রাতের যাত্রা (ইসরা ও মিরাজ)',
    summary: 'আল্লাহ মুহাম্মাদকে এক অলৌকিক রাতের যাত্রায় মক্কা থেকে জেরুজালেম এবং তারপর আকাশে নিয়ে গেছেন।',
    order: 4,
    paragraphs: [
      {
        id: 'muhammad-ch4-p1',
        text: 'আল্লাহ মুহাম্মাদকে এক অলৌকিক রাতের যাত্রায় মক্কার মসজিদুল হারাম থেকে জেরুজালেমের মসজিদুল আকসায় নিয়ে গেছেন। ইসরা নামে পরিচিত এই যাত্রা ছিল আল্লাহর ক্ষমতার নিদর্শন এবং তাঁর সর্বশেষ রাসূলের প্রতি বিশেষ সম্মান।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 17,
            surahName: { en: 'Al-Isra', bn: 'আল-ইসরা', ar: 'الإسراء' },
            ayahStart: 1,
            translation: {
              en: 'Exalted is He who took His Servant by night from al-Masjid al-Haram to al-Masjid al-Aqsa, whose surroundings We have blessed, to show him of Our signs. Indeed, He is the Hearing, the Seeing.',
              bn: 'পবিত্র মহান সেই সত্তা যিনি তাঁর বান্দাকে রাতে মসজিদুল হারাম থেকে মসজিদুল আকসায় নিয়ে গেছেন, যার চারপাশকে আমি বরকতময় করেছি, যাতে আমি তাকে আমার কিছু নিদর্শন দেখাই। নিশ্চয়ই তিনি সর্বশ্রোতা, সর্বদ্রষ্টা।',
              ar: 'سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِّنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى الَّذِي بَارَكْنَا حَوْلَهُ لِنُرِيَهُ مِنْ آيَاتِنَا ۚ إِنَّهُ هُوَ السَّمِيعُ الْبَصِيرُ'
            }
          }
        ]
      },
      {
        id: 'muhammad-ch4-p2',
        text: 'জেরুজালেম থেকে মুহাম্মাদ মিরাজে আকাশের স্তরে স্তরে উঠেছিলেন, প্রতিটি স্তরে পূর্ববর্তী নবীদের সাথে সাক্ষাৎ করেছিলেন। এই বরকতময় যাত্রায় পাঁচ ওয়াক্ত সালাত ফরজ করা হয়েছিল। তিনি সর্বোচ্চ স্থানে আল্লাহর নিকটবর্তী হয়েছিলেন, যত নিকটে কোনো সৃষ্টি কখনো পৌঁছায়নি।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 53,
            surahName: { en: 'An-Najm', bn: 'আন-নাজম', ar: 'النجم' },
            ayahStart: 7,
            ayahEnd: 18,
            translation: {
              en: 'While he was in the upper horizon. Then he approached and descended and was at a distance of two bow lengths or nearer. And he revealed to His Servant what he revealed. The heart did not lie [about] what it saw. So will you dispute with him over what he saw? And he certainly saw him in another descent at the Lote Tree of the Utmost Boundary — near it is the Garden of Refuge — when there covered the Lote Tree that which covered [it]. The sight [of the Prophet] did not swerve, nor did it transgress [its limit]. He certainly saw of the greatest signs of his Lord.',
              bn: 'যখন তিনি ঊর্ধ্ব দিগন্তে ছিলেন। তারপর তিনি কাছে এলেন ও ঝুলে পড়লেন। তখন দুই ধনুকের ব্যবধান ছিল বা তার চেয়েও কম। তারপর তিনি তাঁর বান্দার প্রতি যা ওহী করার তা ওহী করলেন। অন্তর যা দেখেছে সে বিষয়ে মিথ্যা বলেনি। তোমরা কি তাঁর সাথে তা নিয়ে বিতর্ক করবে যা তিনি দেখেছেন? তিনি তাকে আরেকবার দেখেছিলেন সিদরাতুল মুনতাহায় — যার কাছে জান্নাতুল মাওয়া — যখন সিদরা গাছকে যা আবৃত করার তা আবৃত করল। তাঁর দৃষ্টি বিচ্যুত হয়নি এবং সীমা অতিক্রম করেনি। তিনি তাঁর রবের মহান নিদর্শনাবলী দেখেছেন।',
              ar: 'وَهُوَ بِالْأُفُقِ الْأَعْلَىٰ ثُمَّ دَنَا فَتَدَلَّىٰ فَكَانَ قَابَ قَوْسَيْنِ أَوْ أَدْنَىٰ فَأَوْحَىٰ إِلَىٰ عَبْدِهِ مَا أَوْحَىٰ مَا كَذَبَ الْفُؤَادُ مَا رَأَىٰ أَفَتُمَارُونَهُ عَلَىٰ مَا يَرَىٰ وَلَقَدْ رَآهُ نَزْلَةً أُخْرَىٰ عِندَ سِدْرَةِ الْمُنتَهَىٰ عِندَهَا جَنَّةُ الْمَأْوَىٰ إِذْ يَغْشَى السِّدْرَةَ مَا يَغْشَىٰ مَا زَاغَ الْبَصَرُ وَمَا طَغَىٰ لَقَدْ رَأَىٰ مِنْ آيَاتِ رَبِّهِ الْكُبْرَىٰ'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'muhammad-ch5',
    title: 'মদীনায় হিজরত',
    summary: 'মুহাম্মাদ মক্কা থেকে মদীনায় হিজরত করেন, যেখানে তিনি প্রথম মুসলিম সমাজ প্রতিষ্ঠা করেন।',
    order: 5,
    paragraphs: [
      {
        id: 'muhammad-ch5-p1',
        text: 'কাফিররা যখন মুহাম্মাদের বিরুদ্ধে ষড়যন্ত্র করল — তাঁকে বন্দী করতে, হত্যা করতে বা বের করে দিতে — আল্লাহ তাঁকে মদীনায় হিজরতের অনুমতি দিলেন। এই হিজরত ইসলামী বর্ষপঞ্জির সূচনা এবং ইসলামের ইতিহাসে একটি নতুন অধ্যায়ের সূত্রপাত করেছিল।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 8,
            surahName: { en: 'Al-Anfal', bn: 'আল-আনফাল', ar: 'الأنفال' },
            ayahStart: 30,
            translation: {
              en: 'And [remember, O Muhammad], when those who disbelieved plotted against you to restrain you or kill you or evict you [from Makkah]. But they plan, and Allah plans. And Allah is the best of planners.',
              bn: 'আর স্মরণ করো, যখন কাফিররা তোমার বিরুদ্ধে ষড়যন্ত্র করেছিল — তোমাকে বন্দী করতে, হত্যা করতে বা বের করে দিতে। তারা ষড়যন্ত্র করে আর আল্লাহও পরিকল্পনা করেন। আল্লাহ সর্বোত্তম পরিকল্পনাকারী।',
              ar: 'وَإِذْ يَمْكُرُ بِكَ الَّذِينَ كَفَرُوا لِيُثْبِتُوكَ أَوْ يَقْتُلُوكَ أَوْ يُخْرِجُوكَ ۚ وَيَمْكُرُونَ وَيَمْكُرُ اللَّهُ ۖ وَاللَّهُ خَيْرُ الْمَاكِرِينَ'
            }
          }
        ]
      },
      {
        id: 'muhammad-ch5-p2',
        text: 'মদীনায় মুহাম্মাদ প্রথম মুসলিম সমাজ প্রতিষ্ঠা করেন। আনসার (মদীনার সাহায্যকারীরা) মুহাজিরদের (মক্কা থেকে হিজরতকারীদের) উন্মুক্ত হৃদয়ে স্বাগত জানিয়েছিলেন, তাদের ঘর ও সম্পদ ভাগ করে নিয়েছিলেন। তাদের ভ্রাতৃত্ব সমগ্র উম্মাহর জন্য আদর্শ হয়ে রয়েছে।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 59,
            surahName: { en: 'Al-Hashr', bn: 'আল-হাশর', ar: 'الحشر' },
            ayahStart: 9,
            translation: {
              en: 'And [also for] those who were settled in the Home [i.e., al-Madinah] and [adopted] the faith before them. They love those who emigrated to them and find not any want in their breasts of what the emigrants were given but give [them] preference over themselves, even though they are in privation. And whoever is protected from the stinginess of his soul — it is those who will be the successful.',
              bn: 'আর যারা মুহাজিরদের আগমনের পূর্বে মদীনায় বসবাস করেছে এবং ঈমান এনেছে, তারা মুহাজিরদের ভালোবাসে এবং তাদের যা দেওয়া হয়েছে তার জন্য নিজেদের অন্তরে কোনো অভাব অনুভব করে না, বরং নিজেদের অভাব থাকা সত্ত্বেও তাদের অগ্রাধিকার দেয়। যাকে মনের কার্পণ্য থেকে রক্ষা করা হয়েছে — তারাই সফলকাম।',
              ar: 'وَالَّذِينَ تَبَوَّءُوا الدَّارَ وَالْإِيمَانَ مِن قَبْلِهِمْ يُحِبُّونَ مَنْ هَاجَرَ إِلَيْهِمْ وَلَا يَجِدُونَ فِي صُدُورِهِمْ حَاجَةً مِّمَّا أُوتُوا وَيُؤْثِرُونَ عَلَىٰ أَنفُسِهِمْ وَلَوْ كَانَ بِهِمْ خَصَاصَةٌ ۚ وَمَن يُوقَ شُحَّ نَفْسِهِ فَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'muhammad-ch6',
    title: 'মক্কা বিজয়',
    summary: 'আল্লাহ মুহাম্মাদকে মক্কার শান্তিপূর্ণ বিজয় দান করলেন এবং মানুষ দলে দলে ইসলামে প্রবেশ করল।',
    order: 6,
    paragraphs: [
      {
        id: 'muhammad-ch6-p1',
        text: 'আল্লাহ মুহাম্মাদকে মক্কা বিজয়ের প্রতিশ্রুতি দিয়েছিলেন। তিনি ১০,০০০ সাহাবীসহ শান্তিপূর্ণভাবে শহরে প্রবেশ করেন এবং সাধারণ ক্ষমা ঘোষণা করে মক্কাবাসীদের ক্ষমা করে দেন। এটি ছিল একটি সুস্পষ্ট বিজয় এবং আল্লাহর অনুগ্রহের নিদর্শন।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 48,
            surahName: { en: 'Al-Fath', bn: 'আল-ফাতহ', ar: 'الفتح' },
            ayahStart: 1,
            ayahEnd: 3,
            translation: {
              en: 'Indeed, We have given you, [O Muhammad], a clear conquest, that Allah may forgive for you what preceded of your sin and what will follow and complete His favor upon you and guide you to a straight path, and [that] Allah may aid you with a mighty victory.',
              bn: 'নিশ্চয়ই আমি তোমাকে একটি সুস্পষ্ট বিজয় দান করেছি, যাতে আল্লাহ তোমার পূর্বের ও পরের সব ত্রুটি ক্ষমা করেন, তোমার প্রতি তাঁর নিয়ামত পূর্ণ করেন এবং তোমাকে সরল পথে পরিচালিত করেন, এবং আল্লাহ তোমাকে এক মহান বিজয়ে সাহায্য করেন।',
              ar: 'إِنَّا فَتَحْنَا لَكَ فَتْحًا مُّبِينًا لِّيَغْفِرَ لَكَ اللَّهُ مَا تَقَدَّمَ مِن ذَنبِكَ وَمَا تَأَخَّرَ وَيُتِمَّ نِعْمَتَهُ عَلَيْكَ وَيَهْدِيَكَ صِرَاطًا مُّسْتَقِيمًا وَيَنصُرَكَ اللَّهُ نَصْرًا عَزِيزًا'
            }
          }
        ]
      },
      {
        id: 'muhammad-ch6-p2',
        text: '"যখন আল্লাহর সাহায্য ও বিজয় আসবে, এবং তুমি মানুষকে দলে দলে আল্লাহর দীনে প্রবেশ করতে দেখবে, তখন তোমার রবের প্রশংসাসহ তাঁর পবিত্রতা ঘোষণা করো এবং তাঁর কাছে ক্ষমা প্রার্থনা করো। নিশ্চয়ই তিনি তওবা কবুলকারী।"',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 110,
            surahName: { en: 'An-Nasr', bn: 'আন-নাসর', ar: 'النصر' },
            ayahStart: 1,
            ayahEnd: 3,
            translation: {
              en: 'When the victory of Allah has come and the conquest, and you see the people entering into the religion of Allah in multitudes, then exalt [Him] with praise of your Lord and ask forgiveness of Him. Indeed, He is ever Accepting of repentance.',
              bn: 'যখন আল্লাহর সাহায্য ও বিজয় আসবে, এবং তুমি মানুষকে দলে দলে আল্লাহর দীনে প্রবেশ করতে দেখবে, তখন তোমার রবের প্রশংসাসহ তাঁর পবিত্রতা ঘোষণা করো এবং তাঁর কাছে ক্ষমা প্রার্থনা করো। নিশ্চয়ই তিনি তওবা কবুলকারী।',
              ar: 'إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ ۚ إِنَّهُ كَانَ تَوَّابًا'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'muhammad-ch7',
    title: 'বিদায় খুতবা ও উত্তরাধিকার',
    summary: 'মুহাম্মাদ তাঁর বিদায় খুতবা দিয়েছিলেন এবং এমন একটি উত্তরাধিকার রেখে গেছেন যা কোটি কোটি মানুষকে পথ দেখাচ্ছে।',
    order: 7,
    paragraphs: [
      {
        id: 'muhammad-ch7-p1',
        text: 'মুহাম্মাদ তাঁর শেষ হজের সময় বিদায় খুতবা দিয়েছিলেন, যেখানে তিনি সাম্য, ন্যায়বিচার এবং দীনের পূর্ণতার উপর জোর দিয়েছিলেন। সেদিন আল্লাহ নাযিল করলেন: "আজ আমি তোমাদের জন্য তোমাদের দীনকে পূর্ণাঙ্গ করলাম এবং তোমাদের প্রতি আমার নিয়ামত সম্পূর্ণ করলাম এবং ইসলামকে তোমাদের দীন হিসেবে মনোনীত করলাম।" এই আয়াত ঐশী হেদায়াতের পূর্ণতা চিহ্নিত করেছিল।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 5,
            surahName: { en: 'Al-Ma\'idah', bn: 'আল-মায়িদাহ', ar: 'المائدة' },
            ayahStart: 3,
            translation: {
              en: 'This day I have perfected for you your religion and completed My favor upon you and have approved for you Islam as religion.',
              bn: 'আজ আমি তোমাদের জন্য তোমাদের দীনকে পূর্ণাঙ্গ করলাম এবং তোমাদের প্রতি আমার নিয়ামত সম্পূর্ণ করলাম এবং ইসলামকে তোমাদের দীন হিসেবে মনোনীত করলাম।',
              ar: 'الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ وَأَتْمَمْتُ عَلَيْكُمْ نِعْمَتِي وَرَضِيتُ لَكُمُ الْإِسْلَامَ دِينًا'
            }
          }
        ]
      },
      {
        id: 'muhammad-ch7-p2',
        text: 'মুহাম্মাদ সমগ্র মানবজাতির হেদায়াত হিসেবে কুরআন ও তাঁর সুন্নাহ রেখে গেছেন। আল্লাহ তাঁর মহান চরিত্রের বর্ণনা দিয়েছেন: "আর নিশ্চয়ই তুমি মহান চরিত্রের উপর অধিষ্ঠিত।" তাঁর বার্তা বিশ্বজুড়ে কোটি কোটি মানুষকে পথ দেখাচ্ছে, যা তাঁর নবুওয়াতের সত্যতা ও আল্লাহর রহমতের প্রমাণ।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 68,
            surahName: { en: 'Al-Qalam', bn: 'আল-কলম', ar: 'القلم' },
            ayahStart: 4,
            translation: {
              en: 'And indeed, you are of a great moral character.',
              bn: 'আর নিশ্চয়ই তুমি মহান চরিত্রের উপর অধিষ্ঠিত।',
              ar: 'وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ'
            }
          }
        ]
      }
    ]
  }
];

export default chapters;
