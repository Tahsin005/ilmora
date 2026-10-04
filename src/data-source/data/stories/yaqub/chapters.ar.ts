import type { StoryChapter } from '../../../types/prophet';

const chapters: StoryChapter[] = [
  {
    id: 'yaqub-ch1',
    title: 'أبو الأسباط الاثني عشر',
    summary: 'يسمع يعقوب من ابنه يوسف رؤيا أحد عشر كوكبًا والشمس والقمر ساجدين له، وينصحه بإخفائها عن إخوته.',
    order: 1,
    paragraphs: [
      {
        id: 'yaqub-ch1-p1',
        text: 'جاء يوسف الصغير إلى أبيه يعقوب وأخبره برؤيا عجيبة: رأى أحد عشر كوكبًا والشمس والقمر ساجدين له. وكان يعقوب نبيًا حكيمًا، فأدرك فورًا دلالة هذه الرؤيا. كانت تشير إلى أن الله سيُنعم على يوسف نعمة عظيمة ويرفعه فوق إخوته.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 12,
            surahName: { en: 'Yusuf', bn: 'ইউসুফ', ar: 'يوسف' },
            ayahStart: 4,
            ayahEnd: 4,
            translation: {
              en: 'When Yusuf said to his father, "O my father, indeed I have seen eleven stars and the sun and the moon; I saw them prostrating to me."',
              bn: 'যখন ইউসুফ তার পিতাকে বলল, "হে আমার পিতা, আমি স্বপ্নে এগারোটি তারা, সূর্য ও চন্দ্র দেখেছি; আমি তাদের আমাকে সিজদা করতে দেখেছি।"',
              ar: 'إِذْ قَالَ يُوسُفُ لِأَبِيهِ يَا أَبَتِ إِنِّي رَأَيْتُ أَحَدَ عَشَرَ كَوْكَبًا وَالشَّمْسَ وَالْقَمَرَ رَأَيْتُهُمْ لِي سَاجِدِينَ'
            }
          }
        ]
      },
      {
        id: 'yaqub-ch1-p2',
        text: 'خشي يعقوب من حسد إخوة يوسف، فنصح ابنه بحكمة ألّا يقصّ رؤياه عليهم. كان يعلم أن الشيطان قد يوقد الحسد في قلوبهم ويدفعهم إلى التآمر على يوسف. أخبر يعقوبُ يوسفَ أن الله سيجتبيه ويعلّمه تأويل الأحاديث ويُتمّ نعمته عليه وعلى آل يعقوب كما أتمّها من قبل على أبويه إبراهيم وإسحاق.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 12,
            surahName: { en: 'Yusuf', bn: 'ইউসুফ', ar: 'يوسف' },
            ayahStart: 5,
            ayahEnd: 6,
            translation: {
              en: 'He said, "O my son, do not relate your vision to your brothers or they will contrive against you a plan. Indeed Satan, to man, is a manifest enemy. And thus will your Lord choose you and teach you the interpretation of narratives and complete His favor upon you and upon the family of Yaqub."',
              bn: 'তিনি বললেন, "হে আমার পুত্র, তোমার স্বপ্নের কথা তোমার ভাইদের বলো না, তা হলে তারা তোমার বিরুদ্ধে ষড়যন্ত্র করবে। নিশ্চয়ই শয়তান মানুষের প্রকাশ্য শত্রু।"',
              ar: 'قَالَ يَا بُنَيَّ لَا تَقْصُصْ رُؤْيَاكَ عَلَىٰ إِخْوَتِكَ فَيَكِيدُوا لَكَ كَيْدًا ۖ إِنَّ الشَّيْطَانَ لِلْإِنسَانِ عَدُوٌّ مُّبِينٌ'
            }
          }
        ]
      },
      {
        id: 'yaqub-ch1-p3',
        text: 'ذكر علماء التفسير أن يعقوب هو ابن إسحاق وحفيد إبراهيم عليهم السلام. وكان يُعرف أيضًا بإسرائيل، ومن أبنائه الاثني عشر انحدرت أسباط بني إسرائيل. ورث يعقوب الحكمة النبوية من أبيه وجدّه، وتميّزت حياته بالإيمان العميق والصبر والتوكل على الله في كل ابتلاء.',
        phase: 'ibn-kathir',
        references: [
          {
            type: 'quran',
            surah: 19,
            surahName: { en: 'Maryam', bn: 'মারইয়াম', ar: 'مريم' },
            ayahStart: 49,
            ayahEnd: 49,
            translation: {
              en: 'So when he had left them and those they worshipped other than Allah, We gave him Isaac and Jacob, and each of them We made a prophet.',
              bn: 'যখন সে তাদের ও আল্লাহ ব্যতীত তারা যাদের ইবাদত করত তাদের থেকে আলাদা হয়ে গেল, আমি তাকে ইসহাক ও ইয়াকুব দান করলাম এবং প্রত্যেককে নবী করলাম।',
              ar: 'فَلَمَّا اعْتَزَلَهُمْ وَمَا يَعْبُدُونَ مِن دُونِ اللَّهِ وَهَبْنَا لَهُ إِسْحَاقَ وَيَعْقُوبَ ۖ وَكُلًّا جَعَلْنَا نَبِيًّا'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'yaqub-ch2',
    title: 'الحزن على يوسف',
    summary: 'يتحمّل يعقوب فراق يوسف بالصبر والتوكل على الله، يبكي حتى يفقد بصره، لكنه لا يفقد الأمل في رحمة الله.',
    order: 2,
    paragraphs: [
      {
        id: 'yaqub-ch2-p1',
        text: 'لما عاد أبناء يعقوب بدون يوسف ثم بدون بنيامين، تولّى عنهم حزينًا. قال إنما يشكو بثّه وحزنه إلى الله. ابيضّت عيناه من الحزن وهو كظيم. لم يكن حزن يعقوب يأسًا، بل كان ألم أبٍ محبٍّ يثق بتدبير الله.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 12,
            surahName: { en: 'Yusuf', bn: 'ইউসুফ', ar: 'يوسف' },
            ayahStart: 84,
            ayahEnd: 86,
            translation: {
              en: 'And he turned away from them and said, "Oh, my sorrow over Yusuf," and his eyes became white from grief, for he was a suppressor of sorrow. He said, "I only complain of my suffering and my grief to Allah."',
              bn: 'এবং সে তাদের থেকে মুখ ফিরিয়ে নিল এবং বলল, "হায় ইউসুফের জন্য আমার দুঃখ।" তার চোখ দুটি দুঃখে সাদা হয়ে গেল। সে বলল, "আমি আমার কষ্ট ও দুঃখের অভিযোগ কেবল আল্লাহর কাছেই করি।"',
              ar: 'وَتَوَلَّىٰ عَنْهُمْ وَقَالَ يَا أَسَفَىٰ عَلَىٰ يُوسُفَ وَابْيَضَّتْ عَيْنَاهُ مِنَ الْحُزْنِ فَهُوَ كَظِيمٌ'
            }
          }
        ]
      },
      {
        id: 'yaqub-ch2-p2',
        text: 'رغم حزنه الشديد لم يفقد يعقوب الأمل في رحمة الله قط. أمر أبناءه بالذهاب والتحسّس من يوسف وأخيه، وقال لهم: لا تيأسوا من روح الله، إنه لا ييأس من روح الله إلا القوم الكافرون. هذا يدلّ على إيمان يعقوب الراسخ حتى في أحلك الأوقات.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 12,
            surahName: { en: 'Yusuf', bn: 'ইউসুফ', ar: 'يوسف' },
            ayahStart: 87,
            ayahEnd: 87,
            translation: {
              en: 'O my sons, go and find out about Yusuf and his brother and despair not of relief from Allah. Indeed, no one despairs of relief from Allah except the disbelieving people.',
              bn: 'হে আমার পুত্রগণ, যাও এবং ইউসুফ ও তার ভাইয়ের খোঁজ কর। আল্লাহর রহমত থেকে নিরাশ হয়ো না। নিশ্চয়ই কাফের সম্প্রদায় ছাড়া কেউ আল্লাহর রহমত থেকে নিরাশ হয় না।',
              ar: 'يَا بَنِيَّ اذْهَبُوا فَتَحَسَّسُوا مِن يُوسُفَ وَأَخِيهِ وَلَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ ۖ إِنَّهُ لَا يَيْأَسُ مِن رَّوْحِ اللَّهِ إِلَّا الْقَوْمُ الْكَافِرُونَ'
            }
          }
        ]
      },
      {
        id: 'yaqub-ch2-p3',
        text: 'يروي ابن كثير أن حزن يعقوب استمر سنوات طويلة، قال بعض العلماء إنها بلغت أربعين سنة. طوال تلك المدة حافظ على صلاته وصبره وتوكله على الله. كان بكاؤه شديدًا حتى قيل إنه من أكثر الناس بكاءً في التاريخ. ومع ذلك كان حزنه صبرًا جميلًا — حزنٌ يُشكى إلى الله وحده، دون شكوى للناس أو فقدان للإيمان.',
        phase: 'ibn-kathir',
        references: [
          {
            type: 'quran',
            surah: 12,
            surahName: { en: 'Yusuf', bn: 'ইউসুফ', ar: 'يوسف' },
            ayahStart: 83,
            ayahEnd: 83,
            translation: {
              en: 'He said, "Rather, your souls have enticed you to something, so patience is most fitting. Perhaps Allah will bring them to me all together. Indeed, it is He who is the Knowing, the Wise."',
              bn: 'সে বলল, "বরং তোমাদের মন তোমাদের একটি কাজ সুশোভিত করেছে। সুতরাং সবর করাই শ্রেয়। হয়তো আল্লাহ তাদের সকলকে আমার কাছে নিয়ে আসবেন।"',
              ar: 'قَالَ بَلْ سَوَّلَتْ لَكُمْ أَنفُسُكُمْ أَمْرًا ۖ فَصَبْرٌ جَمِيلٌ ۖ عَسَى اللَّهُ أَن يَأْتِيَنِي بِهِمْ جَمِيعًا'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'yaqub-ch3',
    title: 'لمّ الشمل والشفاء',
    summary: 'يُعاد بصر يعقوب بمعجزة حين يُلقى قميص يوسف على وجهه، ويجتمع شمل الأسرة في مصر.',
    order: 3,
    paragraphs: [
      {
        id: 'yaqub-ch3-p1',
        text: 'لما كشف يوسف عن هويته لإخوته في مصر، أعطاهم قميصه وأمرهم بإلقائه على وجه أبيه فيرتدّ بصيرًا، وطلب منهم أن يأتوه بأهلهم أجمعين. هذا القميص المبارك من الله سيكون سببًا لشفاء عمى يعقوب الذي أصابه من سنوات الحزن.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 12,
            surahName: { en: 'Yusuf', bn: 'ইউসুফ', ar: 'يوسف' },
            ayahStart: 93,
            ayahEnd: 93,
            translation: {
              en: 'Go with this, my shirt, and cast it over the face of my father; he will become seeing. And bring me your family, all together.',
              bn: 'তোমরা আমার এই জামা নিয়ে যাও এবং আমার পিতার মুখের উপর রাখ, তিনি দৃষ্টিশক্তি ফিরে পাবেন। আর তোমাদের পরিবারের সকলকে আমার কাছে নিয়ে এসো।',
              ar: 'اذْهَبُوا بِقَمِيصِي هَٰذَا فَأَلْقُوهُ عَلَىٰ وَجْهِ أَبِي يَأْتِ بَصِيرًا وَأْتُونِي بِأَهْلِكُمْ أَجْمَعِينَ'
            }
          }
        ]
      },
      {
        id: 'yaqub-ch3-p2',
        text: 'لما فصلت العير من مصر قال أبوهم يعقوب لمن حوله إنه يجد ريح يوسف، فظنّوه لا يزال في حزنه القديم. فلما جاء البشير ألقى القميص على وجهه فارتدّ بصيرًا. قال يعقوب لأبنائه: ألم أقل لكم إني أعلم من الله ما لا تعلمون؟',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 12,
            surahName: { en: 'Yusuf', bn: 'ইউসুফ', ar: 'يوسف' },
            ayahStart: 94,
            ayahEnd: 96,
            translation: {
              en: 'And when the caravan departed, their father said, "Indeed, I find the smell of Yusuf, if only you did not think me weakened in mind." ... And when the bearer of good tidings arrived, he cast it over his face, and he returned to seeing. He said, "Did I not tell you that I know from Allah that which you do not know?"',
              bn: 'যখন কাফেলা রওনা হলো, তাদের পিতা বললেন, "আমি ইউসুফের গন্ধ পাচ্ছি।" ... যখন সুসংবাদবাহক এলো এবং জামাটি তার মুখে রাখল, তখন তার দৃষ্টি ফিরে এলো। তিনি বললেন, "আমি কি তোমাদের বলিনি যে আমি আল্লাহর পক্ষ থেকে জানি যা তোমরা জানো না?"',
              ar: 'وَلَمَّا فَصَلَتِ الْعِيرُ قَالَ أَبُوهُمْ إِنِّي لَأَجِدُ رِيحَ يُوسُفَ ... فَلَمَّا أَن جَاءَ الْبَشِيرُ أَلْقَاهُ عَلَىٰ وَجْهِهِ فَارْتَدَّ بَصِيرًا'
            }
          }
        ]
      },
      {
        id: 'yaqub-ch3-p3',
        text: 'طلب الإخوة من أبيهم أن يستغفر لهم ذنوبهم التي ارتكبوها في حق يوسف. ويعقوب الرحيم الصفوح وعدهم بأن يستغفر لهم ربّه، إنه هو الغفور الرحيم. هذه اللحظة من المصالحة حققت نبوءة رؤيا يوسف في طفولته وأظهرت تدبير الله المحكم عبر عقود من الابتلاء والصبر.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 12,
            surahName: { en: 'Yusuf', bn: 'ইউসুফ', ar: 'يوسف' },
            ayahStart: 97,
            ayahEnd: 98,
            translation: {
              en: 'They said, "O our father, ask for us forgiveness of our sins; indeed, we have been sinners." He said, "I will ask forgiveness for you from my Lord. Indeed, it is He who is the Forgiving, the Merciful."',
              bn: 'তারা বলল, "হে আমাদের পিতা, আমাদের পাপের জন্য ক্ষমা প্রার্থনা করুন। নিশ্চয়ই আমরা অপরাধী ছিলাম।" তিনি বললেন, "আমি আমার রবের কাছে তোমাদের জন্য ক্ষমা চাইব। নিশ্চয়ই তিনি ক্ষমাশীল, পরম দয়ালু।"',
              ar: 'قَالُوا يَا أَبَانَا اسْتَغْفِرْ لَنَا ذُنُوبَنَا إِنَّا كُنَّا خَاطِئِينَ قَالَ سَوْفَ أَسْتَغْفِرُ لَكُمْ رَبِّي ۖ إِنَّهُ هُوَ الْغَفُورُ الرَّحِيمُ'
            }
          }
        ]
      }
    ]
  }
];

export default chapters;
