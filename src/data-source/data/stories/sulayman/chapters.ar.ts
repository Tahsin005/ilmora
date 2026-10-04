import type { StoryChapter } from '../../../types/prophet';

const chapters: StoryChapter[] = [
  {
    id: 'sulayman-ch1',
    title: 'مملكة سليمان',
    summary: 'ورث سليمان النبوة والملك من أبيه داود، وسُخّرت له الريح والجن والحيوانات.',
    order: 1,
    paragraphs: [
      {
        id: 'sulayman-ch1-p1',
        text: 'النبي سليمان عليه السلام، ابن داود، ورث النبوة والملك عن أبيه. منحه الله ملكاً عظيماً لم يُعطَ لأحد من قبله ولا من بعده. سُخّرت له الريح تجري بأمره، غدوّها شهر ورواحها شهر.',
        phase: 'quran',
        references: [{ type: 'quran', surah: 34, surahName: { en: 'Saba', bn: 'সাবা', ar: 'سبأ' }, ayahStart: 12, translation: { en: 'And to Solomon [We subjected] the wind - its morning [journey was that of] a month - and its afternoon [journey was that of] a month', bn: 'আর সুলাইমানের অধীন করে দিলাম বাতাসকে, যার সকালের গতি ছিল এক মাসের পথ এবং সন্ধ্যার গতি এক মাসের পথ', ar: 'وَلِسُلَيْمَانَ الرِّيحَ غُدُوُّهَا شَهْرٌ وَرَوَاحُهَا شَهْرٌ' } }],
      },
      {
        id: 'sulayman-ch1-p2',
        text: 'كما سخّر الله الجن لسليمان. كانوا يعملون له — يبنون القصور وينحتون التماثيل ويصنعون الجفان كالجواب والقدور الراسيات. أُمر سليمان بالشكر على هذه النعم، فقليل من عباد الله الشكور.',
        phase: 'quran',
        references: [{ type: 'quran', surah: 34, surahName: { en: 'Saba', bn: 'সাবা', ar: 'سبأ' }, ayahStart: 12, ayahEnd: 13, translation: { en: 'They made for him what he willed of elevated chambers, statues, bowls like reservoirs, and stationary kettles. [We said], "Work, O family of Dawud, in gratitude."', bn: 'তারা তার জন্য তৈরি করত যা সে চাইত — উঁচু প্রাসাদ, মূর্তি, হাউজের মতো পাত্র এবং চুলায় স্থির সুবিশাল ডেগ', ar: 'يَعْمَلُونَ لَهُ مَا يَشَاءُ مِن مَّحَارِيبَ وَتَمَاثِيلَ وَجِفَانٍ كَالْجَوَابِ وَقُدُورٍ رَّاسِيَاتٍ' } }],
      },
    ],
  },
  {
    id: 'sulayman-ch2',
    title: 'قصة النملة',
    summary: 'فهم سليمان لغة الحيوانات وسمع نملة تحذر قومها.',
    order: 2,
    paragraphs: [
      {
        id: 'sulayman-ch2-p1',
        text: 'أُنعم على سليمان بفهم كلام الطير والحيوانات. وفي يوم من الأيام، بينما كان يسير بجيشه العظيم من الجن والإنس والطير — وكلهم منظمون في صفوف — وصلوا إلى وادي النمل. رأت نملة صغيرة الجيش المقترب فنادت قومها: "يا أيها النمل ادخلوا مساكنكم لا يحطمنكم سليمان وجنوده وهم لا يشعرون!"',
        phase: 'quran',
        references: [{ type: 'quran', surah: 27, surahName: { en: 'An-Naml', bn: 'আন-নামল', ar: 'النمل' }, ayahStart: 18, ayahEnd: 19, translation: { en: 'Until, when they came upon the valley of the ants, an ant said, "O ants, enter your dwellings that you not be crushed by Solomon and his soldiers while they perceive not."', bn: 'যখন তারা পিপড়ার উপত্যকায় পৌঁছল, একটি পিপড়া বলল, "হে পিপড়ারা! তোমাদের গৃহে প্রবেশ করো যাতে সুলাইমান ও তার সেনাবাহিনী তোমাদের অজান্তে পিষে না ফেলে।"', ar: 'حَتَّىٰ إِذَا أَتَوْا عَلَىٰ وَادِ النَّمْلِ قَالَتْ نَمْلَةٌ يَا أَيُّهَا النَّمْلُ ادْخُلُوا مَسَاكِنَكُمْ' } }],
      },
      {
        id: 'sulayman-ch2-p2',
        text: 'فتبسم سليمان ضاحكاً من قولها ودعا ربه: "رب أوزعني أن أشكر نعمتك التي أنعمت عليّ وعلى والديّ وأن أعمل صالحاً ترضاه وأدخلني برحمتك في عبادك الصالحين." وهذا يدل على تواضع سليمان رغم ملكه العظيم.',
        phase: 'quran',
        references: [{ type: 'quran', surah: 27, surahName: { en: 'An-Naml', bn: 'আন-নামল', ar: 'النمل' }, ayahStart: 19, translation: { en: 'So [Solomon] smiled, amused at her speech, and said, "My Lord, enable me to be grateful for Your favor..."', bn: 'তখন সুলাইমান তার কথায় হেসে বললেন, "হে আমার রব, আমাকে সামর্থ্য দাও যেন আমি তোমার নেয়ামতের শুকরিয়া আদায় করতে পারি..."', ar: 'فَتَبَسَّمَ ضَاحِكًا مِّن قَوْلِهَا وَقَالَ رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ' } }],
      },
    ],
  },
  {
    id: 'sulayman-ch3',
    title: 'ملكة سبأ (بلقيس)',
    summary: 'دعا سليمان ملكة سبأ إلى الإسلام فأسلمت لله.',
    order: 3,
    paragraphs: [
      {
        id: 'sulayman-ch3-p1',
        text: 'علم سليمان من الهدهد عن مملكة سبأ التي تحكمها ملكة تُدعى بلقيس، وكان قومها يعبدون الشمس من دون الله. أرسل سليمان كتاباً يدعوها إلى الإسلام. فالملكة المعروفة بحكمتها استشارت مستشاريها وقررت إرسال هدية لسليمان لاختباره.',
        phase: 'quran',
        references: [{ type: 'quran', surah: 27, surahName: { en: 'An-Naml', bn: 'আন-নামল', ar: 'النمل' }, ayahStart: 22, ayahEnd: 35 }],
      },
      {
        id: 'sulayman-ch3-p2',
        text: 'رفض سليمان الهدية وأظهر قوته بنقل عرشها إلى قصره قبل وصولها. فلما جاءت بلقيس ورأت المعجزات أدركت الحق. فقالت: "رب إني ظلمت نفسي وأسلمت مع سليمان لله رب العالمين." وإسلامها لله من أعظم قصص الهداية في القرآن.',
        phase: 'quran',
        references: [{ type: 'quran', surah: 27, surahName: { en: 'An-Naml', bn: 'আন-নামল', ar: 'النمل' }, ayahStart: 36, ayahEnd: 44, translation: { en: 'She said, "My Lord, indeed I have wronged myself, and I submit with Solomon to Allah, Lord of the worlds."', bn: 'সে বলল, "হে আমার রব, আমি তো নিজের উপর জুলুম করেছিলাম। আমি সুলাইমানের সাথে আল্লাহর কাছে আত্মসমর্পণ করলাম, যিনি বিশ্বজগতের রব।"', ar: 'قَالَتْ رَبِّ إِنِّي ظَلَمْتُ نَفْسِي وَأَسْلَمْتُ مَعَ سُلَيْمَانَ لِلَّهِ رَبِّ الْعَالَمِينَ' } }],
      },
    ],
  },
];

export default chapters;
