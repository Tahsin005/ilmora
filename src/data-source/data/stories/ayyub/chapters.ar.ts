import type { StoryChapter } from '../../../types/prophet';

const chapters: StoryChapter[] = [
  {
    id: 'ayyub-ch1',
    title: 'ابتلاء أيوب',
    summary: 'النبي أيوب يفقد ماله وأولاده وصحته لكنه يظل صابراً ثابتاً على إيمانه بالله سنوات طويلة.',
    order: 1,
    paragraphs: [
      {
        id: 'ayyub-ch1-p1',
        text: 'كان أيوب نبياً أنعم الله عليه بمال وفير وأبناء كثيرين وصحة جيدة. ابتلاه الله بأخذ نعمه واحدة تلو الأخرى — هلك ماله ومات أولاده وأصيب جسده بمرض شديد. ورغم فقدانه كل شيء نادى أيوب ربه قائلاً إن الضر مسّه وأنه سبحانه أرحم الراحمين.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 21,
            surahName: { en: 'Al-Anbiya', bn: 'আল-আম্বিয়া', ar: 'الأنبياء' },
            ayahStart: 83,
            ayahEnd: 83,
            translation: {
              en: 'And remember Ayyub, when he called to his Lord, "Indeed, adversity has touched me, and You are the Most Merciful of the merciful."',
              bn: 'এবং স্মরণ কর আইয়ুবকে, যখন সে তার রবকে ডেকে বলেছিল, "আমাকে কষ্ট স্পর্শ করেছে এবং আপনি সর্বশ্রেষ্ঠ দয়ালু।"',
              ar: 'وَأَيُّوبَ إِذْ نَادَىٰ رَبَّهُ أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ'
            }
          }
        ]
      },
      {
        id: 'ayyub-ch1-p2',
        text: 'يروي ابن كثير أن ابتلاء أيوب استمر فترة طويلة جداً — يقول بعض العلماء ثمانية عشر عاماً. خلال هذه المدة هجره أصدقاؤه وتجنبه الناس بسبب مرضه ولم تبق معه إلا زوجته الوفية التي واصلت خدمته. ومع ذلك لم ينطق أيوب بكلمة شكوى ضد الله. أصبح صبره مضرباً للمثل وهو يُذكر كأعظم أمثلة الصبر في تاريخ الأنبياء.',
        phase: 'ibn-kathir',
        references: [
          {
            type: 'quran',
            surah: 38,
            surahName: { en: 'Sad', bn: 'সোয়াদ', ar: 'ص' },
            ayahStart: 41,
            ayahEnd: 41,
            translation: {
              en: 'And remember Our servant Ayyub, when he called to his Lord, "Indeed, Satan has touched me with hardship and torment."',
              bn: 'এবং স্মরণ কর আমার বান্দা আইয়ুবকে, যখন সে তার রবকে ডেকে বলেছিল, "শয়তান আমাকে কষ্ট ও যন্ত্রণা দিয়েছে।"',
              ar: 'وَاذْكُرْ عَبْدَنَا أَيُّوبَ إِذْ نَادَىٰ رَبَّهُ أَنِّي مَسَّنِيَ الشَّيْطَانُ بِنُصْبٍ وَعَذَابٍ'
            }
          }
        ]
      },
      {
        id: 'ayyub-ch1-p3',
        text: 'حاول الشيطان كسر عزيمة أيوب بالوسوسة له ولمن حوله. حاول أن يُيئّس زوجته ودفعها للتساؤل لماذا يبتلي الله عبداً مؤمناً بهذا القدر. لكن أيوب ثبت على موقفه واعتبر بلاءه اختباراً من الله لا عقوبة. أدرك أن الإيمان الحقيقي لا يُثبَت في أوقات الرخاء بل في أوقات الشدة.',
        phase: 'ibn-kathir',
        references: [
          {
            type: 'quran',
            surah: 38,
            surahName: { en: 'Sad', bn: 'সোয়াদ', ar: 'ص' },
            ayahStart: 41,
            ayahEnd: 42,
            translation: {
              en: '"Indeed, Satan has touched me with hardship and torment." Allah said, "Strike the ground with your foot; this is a cool bath and drink."',
              bn: '"শয়তান আমাকে কষ্ট ও যন্ত্রণা দিয়েছে।" আল্লাহ বললেন, "তোমার পা দিয়ে মাটিতে আঘাত কর।"',
              ar: 'أَنِّي مَسَّنِيَ الشَّيْطَانُ بِنُصْبٍ وَعَذَابٍ ارْكُضْ بِرِجْلِكَ ۖ هَٰذَا مُغْتَسَلٌ بَارِدٌ وَشَرَابٌ'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'ayyub-ch2',
    title: 'الشفاء',
    summary: 'يستجيب الله لدعاء أيوب ويأمره بضرب الأرض برجله فتنبع عين ماء معجزة تشفيه تماماً.',
    order: 2,
    paragraphs: [
      {
        id: 'ayyub-ch2-p1',
        text: 'استجاب الله لدعاء أيوب وكشف عنه الضر الذي كان به. أمره أن يركض برجله فلما فعل انفجرت عين ماء بارد. أُمر بالاغتسال منها والشرب. فبرحمة الله وقدرته شُفي أيوب شفاءً تاماً — عادت صحته كما كانت وتجدّد جسده.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 21,
            surahName: { en: 'Al-Anbiya', bn: 'আল-আম্বিয়া', ar: 'الأنبياء' },
            ayahStart: 84,
            ayahEnd: 84,
            translation: {
              en: 'So We responded to him and removed what afflicted him of adversity. And We gave him back his family and the like thereof with them as mercy from Us.',
              bn: 'তখন আমি তার ডাকে সাড়া দিলাম এবং তার কষ্ট দূর করলাম। আমি তাকে তার পরিবার ফিরিয়ে দিলাম।',
              ar: 'فَاسْتَجَبْنَا لَهُ فَكَشَفْنَا مَا بِهِ مِن ضُرٍّ ۖ وَآتَيْنَاهُ أَهْلَهُ وَمِثْلَهُم مَّعَهُمْ رَحْمَةً مِّنْ عِندِنَا وَذِكْرَىٰ لِلْعَابِدِينَ'
            }
          }
        ]
      },
      {
        id: 'ayyub-ch2-p2',
        text: 'في سورة ص يصف الله كيف أمر أيوب بأن يركض برجله فخرجت عين ماء بارد للاغتسال والشرب. هذا الشفاء المعجز كان آية على قدرة الله ورحمته. لم تعد صحة أيوب فحسب بل ردّ الله عليه أهله وأعطاه مثلهم معهم رحمة منه وتذكرة لأولي الألباب.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 38,
            surahName: { en: 'Sad', bn: 'সোয়াদ', ar: 'ص' },
            ayahStart: 42,
            ayahEnd: 44,
            translation: {
              en: '"Strike the ground with your foot; this is a cool bath and drink." And We gave him back his family. Indeed, We found him patient — an excellent servant.',
              bn: '"তোমার পা দিয়ে মাটিতে আঘাত কর।" আমি তাকে তার পরিবার ফিরিয়ে দিলাম। নিশ্চয়ই আমি তাকে ধৈর্যশীল পেয়েছি — কতই না উত্তম বান্দা।',
              ar: 'ارْكُضْ بِرِجْلِكَ ۖ هَٰذَا مُغْتَسَلٌ بَارِدٌ وَشَرَابٌ وَوَهَبْنَا لَهُ أَهْلَهُ وَمِثْلَهُم مَّعَهُمْ رَحْمَةً مِّنَّا وَذِكْرَىٰ لِأُولِي الْأَلْبَابِ'
            }
          }
        ]
      },
      {
        id: 'ayyub-ch2-p3',
        text: 'يوضح ابن كثير أنه بعد شفاء أيوب حلّ الله أيضاً مسألة يمينه المتعلقة بزوجته. أثناء مرضه كان أيوب قد حلف أن يضرب زوجته مائة ضربة لأمر فعلته. ولكي يبرّ بقسمه دون أن يؤذيها أمره الله أن يأخذ ضغثاً من حشيش أو عيدان رقيقة ويضرب بها ضربة واحدة فيحنث بيمينه. وأثنى الله على أيوب بأنه نعم العبد وأنه أوّاب. وتقف هذه القصة أعظم مثال على الصبر في التراث الإسلامي.',
        phase: 'ibn-kathir',
        references: [
          {
            type: 'quran',
            surah: 38,
            surahName: { en: 'Sad', bn: 'সোয়াদ', ar: 'ص' },
            ayahStart: 44,
            ayahEnd: 44,
            translation: {
              en: '"And take in your hand a bunch of grass and strike with it and do not break your oath." Indeed, We found him patient — an excellent servant.',
              bn: '"তোমার হাতে এক মুঠো ঘাস নাও এবং তা দিয়ে আঘাত কর।" নিশ্চয়ই আমি তাকে ধৈর্যশীল পেয়েছি — কতই না উত্তম বান্দা।',
              ar: 'وَخُذْ بِيَدِكَ ضِغْثًا فَاضْرِب بِّهِ وَلَا تَحْنَثْ ۗ إِنَّا وَجَدْنَاهُ صَابِرًا ۚ نِّعْمَ الْعَبْدُ ۖ إِنَّهُ أَوَّابٌ'
            }
          }
        ]
      }
    ]
  }
];

export default chapters;
