import type { QuizQuestion } from '../../../types/prophet';

const quiz: QuizQuestion[] = [
  {
    id: 'adam-q1',
    question: {
      en: 'What was Adam (AS) created from?',
      bn: 'আদম (আ.) কী থেকে সৃষ্টি হয়েছিলেন?',
      ar: 'مم خُلق آدم عليه السلام؟',
    },
    options: [
      { en: 'Light', bn: 'আলো', ar: 'نور' },
      { en: 'Clay', bn: 'মাটি', ar: 'طين' },
      { en: 'Fire', bn: 'আগুন', ar: 'نار' },
      { en: 'Water', bn: 'পানি', ar: 'ماء' },
    ],
    correctIndex: 1,
    explanation: {
      en: 'Allah created Adam from clay (teen). This is mentioned in Quran 15:26: "And We did certainly create man out of clay from an altered black mud."',
      bn: 'আল্লাহ আদমকে মাটি (তীন) থেকে সৃষ্টি করেছেন। কুরআন ১৫:২৬ এ উল্লেখ আছে।',
      ar: 'خلق الله آدم من طين. ذُكر ذلك في سورة الحجر الآية 26: "ولقد خلقنا الإنسان من صلصال من حمإ مسنون"',
    },
  },
  {
    id: 'adam-q2',
    question: {
      en: 'Who refused to prostrate to Adam?',
      bn: 'কে আদমকে সিজদা করতে অস্বীকার করেছিল?',
      ar: 'من رفض السجود لآدم؟',
    },
    options: [
      { en: 'Jibril (Gabriel)', bn: 'জিবরীল', ar: 'جبريل' },
      { en: 'Mikail (Michael)', bn: 'মিকাঈল', ar: 'ميكائيل' },
      { en: 'Iblis (Satan)', bn: 'ইবলিস (শয়তান)', ar: 'إبليس (الشيطان)' },
      { en: 'Israfil', bn: 'ইসরাফীল', ar: 'إسرافيل' },
    ],
    correctIndex: 2,
    explanation: {
      en: 'Iblis (Satan) refused to prostrate to Adam out of arrogance. He said he was better because he was made of fire while Adam was made of clay. [Quran 7:11-12]',
      bn: 'ইবলিস (শয়তান) অহংকারবশত আদমকে সিজদা করতে অস্বীকার করেছিল। [কুরআন ৭:১১-১২]',
      ar: 'رفض إبليس السجود لآدم تكبراً. قال إنه خير منه لأنه خُلق من نار. [القرآن 7:11-12]',
    },
  },
  {
    id: 'adam-q3',
    question: {
      en: 'What did Allah teach Adam that the angels did not know?',
      bn: 'আল্লাহ আদমকে কী শিখিয়েছিলেন যা ফেরেশতারা জানতেন না?',
      ar: 'ما الذي علّمه الله لآدم ولم تعرفه الملائكة؟',
    },
    options: [
      { en: 'How to fly', bn: 'উড়তে শেখা', ar: 'كيف يطير' },
      { en: 'The names of all things', bn: 'সব কিছুর নাম', ar: 'أسماء كل شيء' },
      { en: 'How to build houses', bn: 'ঘর তৈরি করা', ar: 'كيف يبني البيوت' },
      { en: 'How to cook food', bn: 'রান্না করা', ar: 'كيف يطبخ الطعام' },
    ],
    correctIndex: 1,
    explanation: {
      en: 'Allah taught Adam the names of all things. When He asked the angels, they could not answer, but Adam could. This is in Quran 2:31-33.',
      bn: 'আল্লাহ আদমকে সব কিছুর নাম শিখিয়েছিলেন। যখন তিনি ফেরেশতাদের জিজ্ঞেস করলেন, তারা উত্তর দিতে পারেননি, কিন্তু আদম পেরেছিলেন। [কুরআন ২:৩১-৩৩]',
      ar: 'علّم الله آدم أسماء كل شيء. عندما سأل الملائكة لم يستطيعوا الإجابة لكن آدم استطاع. [القرآن 2:31-33]',
    },
  },
  {
    id: 'adam-q4',
    question: {
      en: 'What happened when Adam and Hawwa ate from the forbidden tree?',
      bn: 'যখন আদম ও হাওয়া নিষিদ্ধ গাছ থেকে খেলেন তখন কী হয়েছিল?',
      ar: 'ماذا حدث عندما أكل آدم وحواء من الشجرة المحرمة؟',
    },
    options: [
      { en: 'They became stronger', bn: 'তারা শক্তিশালী হলেন', ar: 'أصبحا أقوى' },
      { en: 'Nothing happened', bn: 'কিছুই হয়নি', ar: 'لم يحدث شيء' },
      { en: 'They felt ashamed and asked for forgiveness', bn: 'তারা লজ্জিত হলেন এবং ক্ষমা চাইলেন', ar: 'شعرا بالخجل وطلبا المغفرة' },
      { en: 'They lived forever', bn: 'তারা চিরকাল বেঁচে থাকলেন', ar: 'عاشا إلى الأبد' },
    ],
    correctIndex: 2,
    explanation: {
      en: 'When they ate from the tree, they felt ashamed and immediately turned to Allah in repentance, saying "Our Lord, we have wronged ourselves." Allah forgave them. [Quran 7:23]',
      bn: 'যখন তারা গাছ থেকে খেলেন, তারা লজ্জিত হলেন এবং সাথে সাথে আল্লাহর কাছে তওবা করলেন। আল্লাহ তাদের ক্ষমা করে দিলেন। [কুরআন ৭:২৩]',
      ar: 'عندما أكلا من الشجرة شعرا بالخجل وتابا إلى الله فوراً قائلين "ربنا ظلمنا أنفسنا". فغفر الله لهما. [القرآن 7:23]',
    },
  },
  {
    id: 'adam-q5',
    question: {
      en: 'Who were the two sons of Adam mentioned in the Quran?',
      bn: 'কুরআনে উল্লেখিত আদমের দুই পুত্র কারা?',
      ar: 'من هما ابنا آدم المذكوران في القرآن؟',
    },
    options: [
      { en: 'Ismail and Ishaq', bn: 'ইসমাঈল ও ইসহাক', ar: 'إسماعيل وإسحاق' },
      { en: 'Habil (Abel) and Qabil (Cain)', bn: 'হাবিল ও কাবিল', ar: 'هابيل وقابيل' },
      { en: 'Musa and Harun', bn: 'মূসা ও হারূন', ar: 'موسى وهارون' },
      { en: 'Dawud and Sulayman', bn: 'দাউদ ও সুলাইমান', ar: 'داود وسليمان' },
    ],
    correctIndex: 1,
    explanation: {
      en: 'The two sons mentioned in Quran 5:27-31 are Habil (Abel) and Qabil (Cain). Qabil killed Habil out of jealousy when his sacrifice was not accepted.',
      bn: 'কুরআন ৫:২৭-৩১ এ উল্লেখিত দুই পুত্র হলেন হাবিল ও কাবিল। কাবিল ঈর্ষাবশত হাবিলকে হত্যা করেছিল।',
      ar: 'الابنان المذكوران في سورة المائدة الآيات 27-31 هما هابيل وقابيل. قتل قابيل هابيل حسداً.',
    },
  },
];

export default quiz;
