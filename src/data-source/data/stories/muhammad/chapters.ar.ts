import type { StoryChapter } from '../../../types/prophet';

const chapters: StoryChapter[] = [
  {
    id: 'muhammad-ch1',
    title: 'خاتم النبيين',
    summary: 'محمد صلى الله عليه وسلم هو خاتم الرسل، أُرسل رحمةً للعالمين.',
    order: 1,
    paragraphs: [
      {
        id: 'muhammad-ch1-p1',
        text: 'محمد صلى الله عليه وسلم هو آخر الرسل المبعوثين إلى البشرية جمعاء. وصفه الله بأنه رحمة للعالمين. لم تكن رسالته مقتصرة على أمة أو قبيلة بل كانت رسالة عالمية شاملة لجميع البشر إلى يوم القيامة.',
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
        text: 'ما كان محمد أبا أحد من رجال الأمة، ولكنه رسول الله وخاتم النبيين. به اكتملت سلسلة النبوة الطويلة التي بدأت بآدم عليه السلام.',
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
    title: 'الوحي الأول',
    summary: 'في غار حراء جاء جبريل بأول آيات القرآن إلى محمد صلى الله عليه وسلم.',
    order: 2,
    paragraphs: [
      {
        id: 'muhammad-ch2-p1',
        text: 'في غار حراء جاء الملك جبريل إلى محمد وقال: "اقرأ باسم ربك الذي خلق، خلق الإنسان من علق، اقرأ وربك الأكرم." كانت هذه أول آيات القرآن نزولاً، إيذاناً ببداية الرسالة الإلهية الأخيرة للبشرية.',
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
        text: 'طمأن الله محمداً في بداية الوحي: "والضحى والليل إذا سجى، ما ودّعك ربك وما قلى." منحت هذه الآيات النبي السكينة واليقين بأن الله معه.',
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
    title: 'الاضطهاد والصبر',
    summary: 'تحمّل المسلمون الأوائل اضطهاداً شديداً، لكن الله وعد بيسر بعد العسر وحمى رسوله.',
    order: 3,
    paragraphs: [
      {
        id: 'muhammad-ch3-p1',
        text: 'واجه المسلمون الأوائل اضطهاداً شديداً في مكة. عُذّبوا وقوطعوا وأُخرجوا من ديارهم. فآنس الله محمداً: "فإن مع العسر يسراً، إن مع العسر يسراً." هذا الوعد ثبّت المؤمنين في أحلك المحن.',
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
        text: 'حمى الله محمداً في أشد المحن. عندما كان في الغار مع أبي بكر أثناء الهجرة والأعداء عند مدخل الغار، قال لصاحبه: "لا تحزن إن الله معنا." فأنزل الله سكينته عليه وأيّده بجنود لم يروها.',
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
    title: 'الإسراء والمعراج',
    summary: 'أسرى الله بمحمد ليلاً من مكة إلى بيت المقدس ثم عرج به إلى السماوات.',
    order: 4,
    paragraphs: [
      {
        id: 'muhammad-ch4-p1',
        text: 'أسرى الله بمحمد ليلاً من المسجد الحرام بمكة إلى المسجد الأقصى ببيت المقدس في رحلة معجزة. هذه الرحلة المعروفة بالإسراء كانت آية من آيات قدرة الله وتكريماً لخاتم رسله.',
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
        text: 'من بيت المقدس عرج محمد عبر السماوات في المعراج، فالتقى الأنبياء السابقين في كل مستوى. وفُرضت الصلوات الخمس في هذه الرحلة المباركة. ودنا من الله في أعلى مكان، أقرب مما بلغه أي مخلوق.',
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
    title: 'الهجرة إلى المدينة',
    summary: 'هاجر محمد من مكة إلى المدينة حيث أسس أول مجتمع إسلامي.',
    order: 5,
    paragraphs: [
      {
        id: 'muhammad-ch5-p1',
        text: 'لما تآمر الكافرون على محمد — ليحبسوه أو يقتلوه أو يخرجوه — أذن الله له بالهجرة إلى المدينة. كانت هذه الهجرة بداية التقويم الإسلامي وفصلاً جديداً في تاريخ الإسلام.',
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
        text: 'في المدينة أسس محمد أول مجتمع إسلامي. استقبل الأنصار (أهل المدينة) المهاجرين (القادمين من مكة) بقلوب مفتوحة، وتقاسموا معهم بيوتهم وأموالهم. أصبحت أخوّتهم نموذجاً للأمة بأسرها.',
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
    title: 'فتح مكة',
    summary: 'منح الله محمداً فتح مكة السلمي، ودخل الناس في دين الله أفواجاً.',
    order: 6,
    paragraphs: [
      {
        id: 'muhammad-ch6-p1',
        text: 'وعد الله محمداً بفتح مكة. فدخلها سلمياً مع عشرة آلاف من أصحابه وعفا عن أهل مكة معلناً عفواً عاماً. كان ذلك فتحاً مبيناً وعلامة على فضل الله.',
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
        text: '"إذا جاء نصر الله والفتح، ورأيت الناس يدخلون في دين الله أفواجاً، فسبّح بحمد ربك واستغفره، إنه كان تواباً."',
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
    title: 'خطبة الوداع والإرث',
    summary: 'ألقى محمد خطبة الوداع وترك إرثاً يهتدي به المليارات حول العالم.',
    order: 7,
    paragraphs: [
      {
        id: 'muhammad-ch7-p1',
        text: 'ألقى محمد خطبة الوداع في حجة الوداع مؤكداً على المساواة والعدل واكتمال الدين. في ذلك اليوم أنزل الله: "اليوم أكملت لكم دينكم وأتممت عليكم نعمتي ورضيت لكم الإسلام ديناً." هذه الآية كانت إيذاناً باكتمال الهداية الإلهية.',
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
        text: 'ترك محمد القرآن وسنته هداية للبشرية جمعاء. وصف الله خُلُقه الكريم: "وإنك لعلى خلق عظيم." رسالته تواصل هداية المليارات حول العالم، شاهدةً على صدق نبوّته ورحمة الله.',
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
