import type { StoryChapter } from '../../../types/prophet';

const chapters: StoryChapter[] = [
  {
    id: 'yusuf-ch1',
    title: 'رؤيا يوسف',
    summary: 'يرى يوسف الصغير رؤيا عجيبة فيها أحد عشر كوكبًا والشمس والقمر يسجدون له، ويحذّره أبوه يعقوب من إخبار إخوته.',
    order: 1,
    paragraphs: [
      {
        id: 'yusuf-ch1-p1',
        text: 'جاء يوسف الصغير إلى أبيه يعقوب وأخبره برؤيا عجيبة: رأى أحد عشر كوكبًا والشمس والقمر يسجدون له. أدرك يعقوب بحكمته النبوية عظمة هذه الرؤيا. فحذّر ابنه ألّا يقصّها على إخوته لئلّا يكيدوا له بدافع الحسد، فإن الشيطان للإنسان عدوٌّ مبين. وأخبره يعقوب أن الله سيجتبيه ويعلّمه تأويل الأحاديث ويتمّ نعمته عليه وعلى آل يعقوب.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 12,
            surahName: { en: 'Yusuf', bn: 'ইউসুফ', ar: 'يوسف' },
            ayahStart: 4,
            ayahEnd: 6,
            translation: {
              en: 'When Yusuf said to his father, "O my father, indeed I have seen eleven stars and the sun and the moon; I saw them prostrating to me." He said, "O my son, do not relate your vision to your brothers or they will contrive against you a plan. Indeed Satan, to man, is a manifest enemy."',
              bn: 'যখন ইউসুফ তার পিতাকে বলল, "হে আমার পিতা, আমি এগারোটি তারা, সূর্য ও চন্দ্র দেখেছি; তাদের আমাকে সিজদা করতে দেখেছি।" তিনি বললেন, "হে পুত্র, তোমার স্বপ্ন ভাইদের বলো না।"',
              ar: 'إِذْ قَالَ يُوسُفُ لِأَبِيهِ يَا أَبَتِ إِنِّي رَأَيْتُ أَحَدَ عَشَرَ كَوْكَبًا وَالشَّمْسَ وَالْقَمَرَ رَأَيْتُهُمْ لِي سَاجِدِينَ'
            }
          }
        ]
      },
      {
        id: 'yusuf-ch1-p2',
        text: 'لاحظ إخوة يوسف أن أباهم يعقوب يحبّ يوسف وأخاه الأصغر بنيامين أكثر منهم وهم عصبة. قالوا فيما بينهم إن يوسف وأخاه أحبّ إلى أبيهم منهم، وعدّوا ذلك ظلمًا. نما حسدهم وبدأوا يدبّرون المكائد ضد يوسف، زاعمين أن أباهم في ضلال مبين لتفضيله الابنين الأصغرين.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 12,
            surahName: { en: 'Yusuf', bn: 'ইউসুফ', ar: 'يوسف' },
            ayahStart: 7,
            ayahEnd: 8,
            translation: {
              en: 'Certainly were there in Yusuf and his brothers signs for those who ask. When they said, "Yusuf and his brother are more beloved to our father than we, while we are a clan. Indeed, our father is in clear error."',
              bn: 'নিশ্চয়ই ইউসুফ ও তার ভাইদের কাহিনীতে জিজ্ঞাসুদের জন্য নিদর্শন রয়েছে। যখন তারা বলল, "ইউসুফ ও তার ভাই আমাদের পিতার কাছে আমাদের চেয়ে বেশি প্রিয়।"',
              ar: 'لَقَدْ كَانَ فِي يُوسُفَ وَإِخْوَتِهِ آيَاتٌ لِّلسَّائِلِينَ إِذْ قَالُوا لَيُوسُفُ وَأَخُوهُ أَحَبُّ إِلَىٰ أَبِينَا مِنَّا وَنَحْنُ عُصْبَةٌ'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'yusuf-ch2',
    title: 'مكيدة الإخوة',
    summary: 'يتآمر الإخوة على يوسف فيلقونه في البئر ويخدعون أباهم بقميص ملطّخ بدم كاذب. تنقذه قافلة وتبيعه في مصر.',
    order: 2,
    paragraphs: [
      {
        id: 'yusuf-ch2-p1',
        text: 'تشاور الإخوة فيما بينهم بشأن يوسف. اقترح بعضهم قتله أو إلقاءه في أرض بعيدة ليخلو لهم وجه أبيهم. لكن أحدهم اقترح خطة أخفّ وطأة: إلقاء يوسف في غيابة الجبّ ليلتقطه بعض السيّارة ويأخذوه بعيدًا.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 12,
            surahName: { en: 'Yusuf', bn: 'ইউসুফ', ar: 'يوسف' },
            ayahStart: 9,
            ayahEnd: 10,
            translation: {
              en: 'Kill Yusuf or cast him out to another land; the countenance of your father will be only for you. Said a speaker among them, "Do not kill Yusuf but throw him into the bottom of the well; some travelers will pick him up."',
              bn: 'ইউসুফকে হত্যা কর অথবা দূর দেশে ফেলে দাও। তাদের একজন বলল, "ইউসুফকে হত্যা করো না, বরং কূপের তলায় ফেলে দাও।"',
              ar: 'اقْتُلُوا يُوسُفَ أَوِ اطْرَحُوهُ أَرْضًا يَخْلُ لَكُمْ وَجْهُ أَبِيكُمْ ... قَالَ قَائِلٌ مِّنْهُمْ لَا تَقْتُلُوا يُوسُفَ وَأَلْقُوهُ فِي غَيَابَتِ الْجُبِّ'
            }
          }
        ]
      },
      {
        id: 'yusuf-ch2-p2',
        text: 'أخذ الإخوة يوسف وألقوه في غيابة البئر. أوحى الله إلى يوسف أنه سيخبرهم يومًا بفعلتهم هذه وهم لا يشعرون. ثم عادوا إلى أبيهم يعقوب بقميص ملطّخ بدم كاذب مدّعين أن الذئب أكله بينما كانوا يستبقون. لكن يعقوب أدرك خداعهم فقال إن أنفسهم سوّلت لهم أمرًا وإن الصبر الجميل هو ملاذه.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 12,
            surahName: { en: 'Yusuf', bn: 'ইউসুফ', ar: 'يوسف' },
            ayahStart: 15,
            ayahEnd: 18,
            translation: {
              en: 'So when they took him and agreed to put him into the bottom of the well... They came to their father at night, weeping. They said, "A wolf ate him." He said, "Rather, your souls have enticed you to something, so patience is most fitting."',
              bn: 'যখন তারা তাকে কূপের তলায় রাখল... তারা রাতে কাঁদতে কাঁদতে পিতার কাছে এলো। বলল, "নেকড়ে তাকে খেয়ে ফেলেছে।" তিনি বললেন, "সবর করাই শ্রেয়।"',
              ar: 'فَلَمَّا ذَهَبُوا بِهِ وَأَجْمَعُوا أَن يَجْعَلُوهُ فِي غَيَابَتِ الْجُبِّ ... وَجَاءُوا أَبَاهُمْ عِشَاءً يَبْكُونَ'
            }
          }
        ]
      },
      {
        id: 'yusuf-ch2-p3',
        text: 'جاءت قافلة فأرسلوا واردهم إلى البئر. فلما أدلى دلوه وجد يوسف فصاح فرحًا. أسرّوه بضاعة وأخذوه إلى مصر حيث باعوه بثمن بخس — دراهم معدودة. هكذا تكشّف تدبير الله: انتقل يوسف من ظلمة البئر إلى فصل جديد من حياته في أرض مصر.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 12,
            surahName: { en: 'Yusuf', bn: 'ইউসুফ', ar: 'يوسف' },
            ayahStart: 19,
            ayahEnd: 20,
            translation: {
              en: 'And there came a caravan of travelers; then they sent their water drawer, and he let down his bucket. He said, "Good news! Here is a boy." And they concealed him as merchandise. And they sold him for a reduced price — a few dirhams.',
              bn: 'একটি কাফেলা এলো। তাদের পানি সংগ্রাহক বালতি নামাল। বলল, "সুসংবাদ! এ তো একটি ছেলে!" তারা তাকে পণ্য হিসেবে লুকিয়ে রাখল এবং অল্প মূল্যে বিক্রি করল।',
              ar: 'وَجَاءَتْ سَيَّارَةٌ فَأَرْسَلُوا وَارِدَهُمْ فَأَدْلَىٰ دَلْوَهُ ۖ قَالَ يَا بُشْرَىٰ هَٰذَا غُلَامٌ ۚ وَأَسَرُّوهُ بِضَاعَةً'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'yusuf-ch3',
    title: 'الابتلاء في مصر',
    summary: 'يواجه يوسف فتنة إغواء امرأة العزيز ويُسجن رغم براءته، مفضّلًا التقوى على المعصية.',
    order: 3,
    paragraphs: [
      {
        id: 'yusuf-ch3-p1',
        text: 'راودت امرأة العزيز — الوزير المصري الذي اشترى يوسف — يوسفَ عن نفسه. غلّقت الأبواب ودعته إليها. لكن يوسف استعاذ بالله ورفض، قائلًا إنه لن يخون أمانة سيده. وأعلن أن الظالمين لا يفلحون. فتبعته وشقّت قميصه من دُبر، فوجدا سيدها لدى الباب. أثبتت الأدلة براءة يوسف إذ كان قميصه مشقوقًا من الخلف.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 12,
            surahName: { en: 'Yusuf', bn: 'ইউসুফ', ar: 'يوسف' },
            ayahStart: 23,
            ayahEnd: 25,
            translation: {
              en: 'And she, in whose house he was, sought to seduce him. She closed the doors and said, "Come, you." He said, "I seek refuge in Allah. Indeed, wrongdoers will not succeed."',
              bn: 'সেই নারী তাকে ফুসলাতে চাইল। সে দরজা বন্ধ করে বলল, "এদিকে এসো।" ইউসুফ বলল, "আমি আল্লাহর কাছে আশ্রয় চাই। জালেমরা সফল হয় না।"',
              ar: 'وَرَاوَدَتْهُ الَّتِي هُوَ فِي بَيْتِهَا عَن نَّفْسِهِ وَغَلَّقَتِ الْأَبْوَابَ وَقَالَتْ هَيْتَ لَكَ ۚ قَالَ مَعَاذَ اللَّهِ'
            }
          }
        ]
      },
      {
        id: 'yusuf-ch3-p2',
        text: 'رغم ثبوت براءته سُجن يوسف. فضّل السجن على ارتكاب المعصية التي يُدعى إليها. دعا ربه قائلًا إن السجن أحبّ إليه مما يدعونه إليه، وإن لم يصرف عنه كيدهن فقد يصبو إليهن. فاستجاب له ربه وصرف عنه كيدهن إنه هو السميع العليم.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 12,
            surahName: { en: 'Yusuf', bn: 'ইউসুফ', ar: 'يوسف' },
            ayahStart: 33,
            ayahEnd: 35,
            translation: {
              en: 'He said, "My Lord, prison is more to my liking than that to which they invite me." So his Lord responded to him and averted from him their plan. Then it appeared to them that he should be imprisoned for a time.',
              bn: 'সে বলল, "হে আমার রব, তারা আমাকে যেদিকে ডাকছে তার চেয়ে কারাগার আমার কাছে বেশি প্রিয়।" তাঁর রব তার প্রার্থনা কবুল করলেন।',
              ar: 'قَالَ رَبِّ السِّجْنُ أَحَبُّ إِلَيَّ مِمَّا يَدْعُونَنِي إِلَيْهِ ۖ وَإِلَّا تَصْرِفْ عَنِّي كَيْدَهُنَّ أَصْبُ إِلَيْهِنَّ وَأَكُن مِّنَ الْجَاهِلِينَ'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'yusuf-ch4',
    title: 'يوسف يفسّر الأحلام',
    summary: 'في السجن يفسّر يوسف رؤيا رفيقيه. ثم يفسّر رؤيا الملك عن سبع بقرات سمان وسبع عجاف، مما يؤدي إلى إطلاق سراحه.',
    order: 4,
    paragraphs: [
      {
        id: 'yusuf-ch4-p1',
        text: 'في السجن جاءه فتيان برؤياهما. قال أحدهما إنه يرى نفسه يعصر خمرًا، وقال الآخر إنه يرى نفسه يحمل فوق رأسه خبزًا تأكل الطير منه. فسّر لهما يوسف: أحدهما يسقي ربه خمرًا والآخر يُصلب. وقبل التفسير دعاهما إلى عبادة الله وحده معلنًا توحيد الله. وطلب ممن سينجو أن يذكره عند الملك، لكن الشيطان أنساه فلبث يوسف في السجن بضع سنين.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 12,
            surahName: { en: 'Yusuf', bn: 'ইউসুফ', ar: 'يوسف' },
            ayahStart: 36,
            ayahEnd: 42,
            translation: {
              en: 'And there entered the prison with him two young men. One said, "I have seen myself pressing wine." The other said, "I have seen myself carrying bread on my head from which birds were eating." ... As for one of you, he will give drink to his master of wine; but as for the other, he will be crucified.',
              bn: 'তার সাথে কারাগারে দুজন যুবক প্রবেশ করল। একজন বলল, "আমি মদ তৈরি করছি।" অন্যজন বলল, "আমার মাথায় রুটি যা থেকে পাখি খাচ্ছে।"',
              ar: 'وَدَخَلَ مَعَهُ السِّجْنَ فَتَيَانِ ۖ قَالَ أَحَدُهُمَا إِنِّي أَرَانِي أَعْصِرُ خَمْرًا ۖ وَقَالَ الْآخَرُ إِنِّي أَرَانِي أَحْمِلُ فَوْقَ رَأْسِي خُبْزًا تَأْكُلُ الطَّيْرُ مِنْهُ'
            }
          }
        ]
      },
      {
        id: 'yusuf-ch4-p2',
        text: 'بعد سنوات رأى ملك مصر رؤيا: سبع بقرات سمان يأكلهن سبع عجاف وسبع سنبلات خضر وأخر يابسات. عجز حاشيته عن تفسيرها. تذكّر الساقي يوسف في السجن فطلب تفسيره. أوضح يوسف أن مصر ستنعم بسبع سنين من الحصاد الوفير ثم تأتي سبع سنين من القحط الشديد. ونصحهم بادّخار الحبوب في سنوات الرخاء استعدادًا لسنوات الشدة.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 12,
            surahName: { en: 'Yusuf', bn: 'ইউসুফ', ar: 'يوسف' },
            ayahStart: 43,
            ayahEnd: 49,
            translation: {
              en: 'The king said, "I have seen seven fat cows being eaten by seven lean, and seven green spikes and others dry." ... Yusuf said, "You will plant for seven years consecutively; then will come seven difficult years which will consume what you saved."',
              bn: 'রাজা বললেন, "আমি সাতটি মোটা গাভী দেখেছি যাদের সাতটি রোগা গাভী খাচ্ছে।" ... ইউসুফ বলল, "সাত বছর চাষ করবে। এরপর সাতটি কঠিন বছর আসবে।"',
              ar: 'وَقَالَ الْمَلِكُ إِنِّي أَرَىٰ سَبْعَ بَقَرَاتٍ سِمَانٍ يَأْكُلُهُنَّ سَبْعٌ عِجَافٌ وَسَبْعَ سُنبُلَاتٍ خُضْرٍ وَأُخَرَ يَابِسَاتٍ'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'yusuf-ch5',
    title: 'لمّ الشمل والمغفرة',
    summary: 'يصل يوسف إلى السلطة في مصر، يأتي إخوته طلبًا للطعام في المجاعة، فيكشف لهم هويته ويعفو عنهم ويجتمع بأبيه يعقوب.',
    order: 5,
    paragraphs: [
      {
        id: 'yusuf-ch5-p1',
        text: 'أُعجب الملك بحكمة يوسف فولّاه على خزائن مصر. أصبح يوسف أمينًا على الأرض يدبّرها بمهارة وعدل. ولما جاءت سنوات المجاعة قدم إخوة يوسف إلى مصر يطلبون الطعام دون أن يعرفوه. عرفهم يوسف لكنه لم يكشف هويته. زوّدهم بالمؤن وطلب منهم أن يأتوه بأخيهم الأصغر بنيامين في زيارتهم القادمة.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 12,
            surahName: { en: 'Yusuf', bn: 'ইউসুফ', ar: 'يوسف' },
            ayahStart: 54,
            ayahEnd: 60,
            translation: {
              en: 'The king said, "Bring him to me; I will appoint him exclusively for myself." ... The brothers of Yusuf came and entered upon him, and he recognized them; but they did not recognize him.',
              bn: 'রাজা বললেন, "তাকে আমার কাছে নিয়ে এসো।" ... ইউসুফের ভাইয়েরা এসে তার কাছে প্রবেশ করল। সে তাদের চিনল কিন্তু তারা তাকে চিনতে পারল না।',
              ar: 'وَقَالَ الْمَلِكُ ائْتُونِي بِهِ أَسْتَخْلِصْهُ لِنَفْسِي ... وَجَاءَ إِخْوَةُ يُوسُفَ فَدَخَلُوا عَلَيْهِ فَعَرَفَهُمْ وَهُمْ لَهُ مُنكِرُونَ'
            }
          }
        ]
      },
      {
        id: 'yusuf-ch5-p2',
        text: 'لما وقف الإخوة أمام يوسف مجددًا كشف لهم عن هويته قائلًا: أنا يوسف وهذا أخي. أخبرهم أن الله منّ عليهم وأنه من يتقِ ويصبر فإن الله لا يضيع أجر المحسنين. ذُهل الإخوة وخجلوا. عفا عنهم يوسف قائلًا لا تثريب عليكم اليوم. وأرسل قميصه إلى أبيه يعقوب فلما أُلقي على وجهه ارتدّ بصيرًا. واجتمع شمل الأسرة في مصر، وسجد أبواه وإخوته أمامه تحقيقًا للرؤيا التي رآها في طفولته.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 12,
            surahName: { en: 'Yusuf', bn: 'ইউসুফ', ar: 'يوسف' },
            ayahStart: 90,
            ayahEnd: 93,
            translation: {
              en: 'They said, "Are you indeed Yusuf?" He said, "I am Yusuf, and this is my brother. Allah has certainly been gracious to us." ... Go with this, my shirt, and cast it over the face of my father; he will become seeing.',
              bn: 'তারা বলল, "তুমি কি সত্যিই ইউসুফ?" সে বলল, "আমিই ইউসুফ, আর এ আমার ভাই। আল্লাহ আমাদের প্রতি অনুগ্রহ করেছেন।"',
              ar: 'قَالُوا أَإِنَّكَ لَأَنتَ يُوسُفُ ۖ قَالَ أَنَا يُوسُفُ وَهَٰذَا أَخِي ۖ قَدْ مَنَّ اللَّهُ عَلَيْنَا'
            }
          },
          {
            type: 'quran',
            surah: 12,
            surahName: { en: 'Yusuf', bn: 'ইউসুফ', ar: 'يوسف' },
            ayahStart: 99,
            ayahEnd: 100,
            translation: {
              en: 'And when they entered upon Yusuf, he took his parents to himself and said, "Enter Egypt, Allah willing, safe." And he raised his parents upon the throne, and they bowed to him in prostration.',
              bn: 'যখন তারা ইউসুফের কাছে প্রবেশ করল, সে তার পিতামাতাকে কাছে টেনে নিল এবং বলল, "আল্লাহর ইচ্ছায় নিরাপদে মিশরে প্রবেশ করুন।"',
              ar: 'فَلَمَّا دَخَلُوا عَلَىٰ يُوسُفَ آوَىٰ إِلَيْهِ أَبَوَيْهِ وَقَالَ ادْخُلُوا مِصْرَ إِن شَاءَ اللَّهُ آمِنِينَ وَرَفَعَ أَبَوَيْهِ عَلَى الْعَرْشِ وَخَرُّوا لَهُ سُجَّدًا'
            }
          }
        ]
      }
    ]
  }
];

export default chapters;
