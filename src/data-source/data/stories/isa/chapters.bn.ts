import type { StoryChapter } from '../../../types/prophet';

const chapters: StoryChapter[] = [
  {
    id: 'isa-ch1',
    title: 'মারইয়ামের প্রতি সুসংবাদ',
    summary: 'আল্লাহ মারইয়ামকে বিশ্বের নারীদের উপর মনোনীত করেছেন এবং তাঁকে এক সম্মানিত পুত্র আল-মাসীহ ঈসার সুসংবাদ দিয়েছেন।',
    order: 1,
    paragraphs: [
      {
        id: 'isa-ch1-p1',
        text: 'আল্লাহ মারইয়ামকে মনোনীত করেছেন, তাঁকে পবিত্র করেছেন এবং বিশ্বের সকল নারীর উপর তাঁকে মনোনীত করেছেন। ফেরেশতারা তাঁকে আল-মাসীহ ঈসা নামক এক পুত্রের সুসংবাদ দিয়েছিলেন, যিনি দুনিয়া ও আখিরাতে সম্মানিত এবং আল্লাহর নৈকট্যপ্রাপ্তদের অন্তর্ভুক্ত।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 3,
            surahName: { en: 'Al-Imran', bn: 'আলে-ইমরান', ar: 'آل عمران' },
            ayahStart: 42,
            ayahEnd: 45,
            translation: {
              en: 'And [mention] when the angels said, "O Maryam, indeed Allah has chosen you and purified you and chosen you above the women of the worlds." ... [mention] when the angels said, "O Maryam, indeed Allah gives you good tidings of a word from Him, whose name will be the Messiah, Isa, the son of Maryam — distinguished in this world and the Hereafter and among those brought near [to Allah]."',
              bn: 'আর যখন ফেরেশতারা বলল, "হে মারইয়াম, নিশ্চয়ই আল্লাহ তোমাকে মনোনীত করেছেন, তোমাকে পবিত্র করেছেন এবং বিশ্বের নারীদের উপর তোমাকে মনোনীত করেছেন।" ... যখন ফেরেশতারা বলল, "হে মারইয়াম, আল্লাহ তোমাকে তাঁর পক্ষ থেকে একটি কালিমার সুসংবাদ দিচ্ছেন, যার নাম হবে মাসীহ ঈসা ইবনে মারইয়াম, দুনিয়া ও আখিরাতে সম্মানিত এবং নৈকট্যপ্রাপ্তদের অন্তর্ভুক্ত।"',
              ar: 'وَإِذْ قَالَتِ الْمَلَائِكَةُ يَا مَرْيَمُ إِنَّ اللَّهَ اصْطَفَاكِ وَطَهَّرَكِ وَاصْطَفَاكِ عَلَىٰ نِسَاءِ الْعَالَمِينَ ... إِذْ قَالَتِ الْمَلَائِكَةُ يَا مَرْيَمُ إِنَّ اللَّهَ يُبَشِّرُكِ بِكَلِمَةٍ مِّنْهُ اسْمُهُ الْمَسِيحُ عِيسَى ابْنُ مَرْيَمَ وَجِيهًا فِي الدُّنْيَا وَالْآخِرَةِ وَمِنَ الْمُقَرَّبِينَ'
            }
          }
        ]
      },
      {
        id: 'isa-ch1-p2',
        text: 'মারইয়াম জিজ্ঞেস করলেন কীভাবে তাঁর সন্তান হবে যখন কোনো পুরুষ তাঁকে স্পর্শ করেনি। আল্লাহ বললেন: "এভাবেই আল্লাহ যা ইচ্ছা সৃষ্টি করেন। তিনি যখন কোনো বিষয়ের সিদ্ধান্ত নেন, তখন শুধু বলেন \'হও\' আর তা হয়ে যায়।"',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 3,
            surahName: { en: 'Al-Imran', bn: 'আলে-ইমরান', ar: 'آل عمران' },
            ayahStart: 47,
            translation: {
              en: 'She said, "My Lord, how will I have a child when no man has touched me?" [The angel] said, "Such is Allah; He creates what He wills. When He decrees a matter, He only says to it, \'Be,\' and it is."',
              bn: 'সে বলল, "হে আমার রব, কীভাবে আমার সন্তান হবে যখন কোনো মানুষ আমাকে স্পর্শ করেনি?" তিনি বললেন, "এভাবেই আল্লাহ যা ইচ্ছা সৃষ্টি করেন। তিনি যখন কোনো বিষয়ের সিদ্ধান্ত নেন, তখন শুধু বলেন \'হও\' আর তা হয়ে যায়।"',
              ar: 'قَالَتْ رَبِّ أَنَّىٰ يَكُونُ لِي وَلَدٌ وَلَمْ يَمْسَسْنِي بَشَرٌ ۖ قَالَ كَذَٰلِكِ اللَّهُ يَخْلُقُ مَا يَشَاءُ ۚ إِذَا قَضَىٰ أَمْرًا فَإِنَّمَا يَقُولُ لَهُ كُن فَيَكُونُ'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'isa-ch2',
    title: 'অলৌকিক জন্ম',
    summary: 'মারইয়াম একটি দূরবর্তী স্থানে গিয়ে ঈসাকে জন্ম দিলেন এবং শিশু ঈসা দোলনা থেকে কথা বললেন।',
    order: 2,
    paragraphs: [
      {
        id: 'isa-ch2-p1',
        text: 'মারইয়াম একটি দূরবর্তী স্থানে চলে গেলেন। প্রসব বেদনা তাঁকে একটি খেজুর গাছের কাণ্ডের কাছে নিয়ে গেল। তাঁকে বলা হলো গাছের কাণ্ড নাড়াতে যাতে তাজা পাকা খেজুর পড়ে এবং আল্লাহ তাঁর নিচ দিয়ে প্রবাহিত ঝর্ণা থেকে পান করতে বলা হলো।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 19,
            surahName: { en: 'Maryam', bn: 'মারইয়াম', ar: 'مريم' },
            ayahStart: 22,
            ayahEnd: 26,
            translation: {
              en: 'So she conceived him, and she withdrew with him to a remote place. And the pains of childbirth drove her to the trunk of a palm tree. She said, "Oh, I wish I had died before this..." [A voice] called her from below her, "Do not grieve... And shake toward you the trunk of the palm tree; it will drop upon you ripe, fresh dates. So eat and drink and be contented."',
              bn: 'অতঃপর সে তাকে গর্ভে ধারণ করল এবং তাকে নিয়ে এক দূরবর্তী স্থানে চলে গেল। প্রসব বেদনা তাকে একটি খেজুর গাছের কাণ্ডের কাছে নিয়ে গেল। সে বলল, "হায়, এর আগেই যদি আমি মরে যেতাম..." নিচ থেকে তাকে ডেকে বলা হলো, "দুঃখ করো না... খেজুর গাছের কাণ্ড তোমার দিকে নাড়াও, তা থেকে তাজা পাকা খেজুর তোমার উপর পড়বে। সুতরাং খাও, পান করো এবং চোখ জুড়াও।"',
              ar: 'فَحَمَلَتْهُ فَانتَبَذَتْ بِهِ مَكَانًا قَصِيًّا فَأَجَاءَهَا الْمَخَاضُ إِلَىٰ جِذْعِ النَّخْلَةِ قَالَتْ يَا لَيْتَنِي مِتُّ قَبْلَ هَٰذَا... فَنَادَاهَا مِن تَحْتِهَا أَلَّا تَحْزَنِي... وَهُزِّي إِلَيْكِ بِجِذْعِ النَّخْلَةِ تُسَاقِطْ عَلَيْكِ رُطَبًا جَنِيًّا فَكُلِي وَاشْرَبِي وَقَرِّي عَيْنًا'
            }
          }
        ]
      },
      {
        id: 'isa-ch2-p2',
        text: 'মারইয়াম যখন শিশুকে নিয়ে তাঁর সম্প্রদায়ের কাছে আসলেন, তারা তাঁকে অভিযুক্ত করল। কিন্তু শিশু ঈসা দোলনা থেকে কথা বললেন: "নিশ্চয়ই আমি আল্লাহর বান্দা। তিনি আমাকে কিতাব দিয়েছেন এবং আমাকে নবী করেছেন। আমি যেখানেই থাকি তিনি আমাকে বরকতময় করেছেন।"',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 19,
            surahName: { en: 'Maryam', bn: 'মারইয়াম', ar: 'مريم' },
            ayahStart: 27,
            ayahEnd: 33,
            translation: {
              en: 'Then she brought him to her people, carrying him. They said, "O Maryam, you have certainly done a thing unprecedented..." So she pointed to him. They said, "How can we speak to one who is in the cradle a child?" [Isa] said, "Indeed, I am the servant of Allah. He has given me the Scripture and made me a prophet. And He has made me blessed wherever I am and has enjoined upon me prayer and zakah as long as I remain alive."',
              bn: 'তারপর সে তাকে নিয়ে তার সম্প্রদায়ের কাছে এলো। তারা বলল, "হে মারইয়াম, তুমি তো এক অদ্ভুত কাজ করেছ..." সে তার দিকে ইশারা করল। তারা বলল, "দোলনায় শিশুর সাথে আমরা কীভাবে কথা বলব?" [ঈসা] বলল, "নিশ্চয়ই আমি আল্লাহর বান্দা। তিনি আমাকে কিতাব দিয়েছেন এবং আমাকে নবী করেছেন। আমি যেখানেই থাকি তিনি আমাকে বরকতময় করেছেন এবং যতদিন বেঁচে থাকি সালাত ও যাকাত আদায় করতে বলেছেন।"',
              ar: 'فَأَتَتْ بِهِ قَوْمَهَا تَحْمِلُهُ ۖ قَالُوا يَا مَرْيَمُ لَقَدْ جِئْتِ شَيْئًا فَرِيًّا... فَأَشَارَتْ إِلَيْهِ ۖ قَالُوا كَيْفَ نُكَلِّمُ مَن كَانَ فِي الْمَهْدِ صَبِيًّا قَالَ إِنِّي عَبْدُ اللَّهِ آتَانِيَ الْكِتَابَ وَجَعَلَنِي نَبِيًّا وَجَعَلَنِي مُبَارَكًا أَيْنَ مَا كُنتُ وَأَوْصَانِي بِالصَّلَاةِ وَالزَّكَاةِ مَا دُمْتُ حَيًّا'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'isa-ch3',
    title: 'ঈসার মুজিযাসমূহ',
    summary: 'আল্লাহ ঈসাকে অসাধারণ মুজিযা দিয়েছিলেন — মাটির পাখিতে প্রাণ দান, অন্ধ ও কুষ্ঠরোগী নিরাময় এবং মৃতকে জীবিত করা — সবই আল্লাহর অনুমতিতে।',
    order: 3,
    paragraphs: [
      {
        id: 'isa-ch3-p1',
        text: 'আল্লাহ ঈসাকে মুজিযা দিয়ে সাহায্য করেছিলেন: তিনি মাটি দিয়ে পাখির আকৃতি তৈরি করতেন এবং তাতে ফুঁ দিতেন, আর তা আল্লাহর অনুমতিতে জীবন্ত পাখি হয়ে যেত। তিনি জন্মান্ধ ও কুষ্ঠরোগীকে সুস্থ করতেন এবং আল্লাহর অনুমতিতে মৃতকে জীবিত করতেন। এই নিদর্শনগুলো দেওয়া হয়েছিল যাতে বনী ইসরাঈল ঈমান আনে।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 3,
            surahName: { en: 'Al-Imran', bn: 'আলে-ইমরান', ar: 'آل عمران' },
            ayahStart: 49,
            translation: {
              en: 'And [make him] a messenger to the Children of Israel, [who will say], "Indeed I have come to you with a sign from your Lord in that I design for you from clay [that which is] like the form of a bird, then I breathe into it and it becomes a bird by permission of Allah. And I cure the blind and the leper, and I give life to the dead — by permission of Allah."',
              bn: 'এবং তাকে বনী ইসরাঈলের কাছে রাসূল হিসেবে পাঠাবেন, [যিনি বলবেন,] "আমি তোমাদের কাছে তোমাদের রবের পক্ষ থেকে নিদর্শন নিয়ে এসেছি — আমি তোমাদের জন্য মাটি দিয়ে পাখির আকৃতি তৈরি করি, তারপর তাতে ফুঁ দিই, আর তা আল্লাহর অনুমতিতে পাখি হয়ে যায়। আমি জন্মান্ধ ও কুষ্ঠরোগীকে সুস্থ করি এবং আল্লাহর অনুমতিতে মৃতকে জীবিত করি।"',
              ar: 'وَرَسُولًا إِلَىٰ بَنِي إِسْرَائِيلَ أَنِّي قَدْ جِئْتُكُم بِآيَةٍ مِّن رَّبِّكُمْ ۖ أَنِّي أَخْلُقُ لَكُم مِّنَ الطِّينِ كَهَيْئَةِ الطَّيْرِ فَأَنفُخُ فِيهِ فَيَكُونُ طَيْرًا بِإِذْنِ اللَّهِ ۖ وَأُبْرِئُ الْأَكْمَهَ وَالْأَبْرَصَ وَأُحْيِي الْمَوْتَىٰ بِإِذْنِ اللَّهِ'
            }
          },
          {
            type: 'quran',
            surah: 5,
            surahName: { en: 'Al-Ma\'idah', bn: 'আল-মায়িদাহ', ar: 'المائدة' },
            ayahStart: 110,
            translation: {
              en: '[The Day] when Allah will say, "O Isa, Son of Maryam, remember My favor upon you and upon your mother when I supported you with the Pure Spirit and you spoke to the people in the cradle and in maturity; and when I taught you writing and wisdom and the Torah and the Gospel; and when you designed from clay what was like the form of a bird with My permission, then you breathed into it, and it became a bird with My permission; and you healed the blind and the leper with My permission; and when you brought forth the dead with My permission."',
              bn: 'যেদিন আল্লাহ বলবেন, "হে ঈসা ইবনে মারইয়াম, তোমার ও তোমার মায়ের প্রতি আমার অনুগ্রহ স্মরণ করো, যখন আমি তোমাকে পবিত্র আত্মা দিয়ে সাহায্য করেছিলাম এবং তুমি মানুষের সাথে দোলনায় ও পরিণত বয়সে কথা বলেছিলে; আমি তোমাকে লেখা, হিকমাত, তাওরাত ও ইঞ্জীল শিক্ষা দিয়েছিলাম; তুমি আমার অনুমতিতে মাটি দিয়ে পাখির আকৃতি বানাতে, তাতে ফুঁ দিতে আর তা আমার অনুমতিতে পাখি হয়ে যেত; তুমি আমার অনুমতিতে জন্মান্ধ ও কুষ্ঠরোগীকে সুস্থ করতে এবং আমার অনুমতিতে মৃতকে জীবিত করতে।"',
              ar: 'إِذْ قَالَ اللَّهُ يَا عِيسَى ابْنَ مَرْيَمَ اذْكُرْ نِعْمَتِي عَلَيْكَ وَعَلَىٰ وَالِدَتِكَ إِذْ أَيَّدتُّكَ بِرُوحِ الْقُدُسِ تُكَلِّمُ النَّاسَ فِي الْمَهْدِ وَكَهْلًا ۖ وَإِذْ عَلَّمْتُكَ الْكِتَابَ وَالْحِكْمَةَ وَالتَّوْرَاةَ وَالْإِنجِيلَ ۖ وَإِذْ تَخْلُقُ مِنَ الطِّينِ كَهَيْئَةِ الطَّيْرِ بِإِذْنِي فَتَنفُخُ فِيهَا فَتَكُونُ طَيْرًا بِإِذْنِي ۖ وَتُبْرِئُ الْأَكْمَهَ وَالْأَبْرَصَ بِإِذْنِي ۖ وَإِذْ تُخْرِجُ الْمَوْتَىٰ بِإِذْنِي'
            }
          }
        ]
      },
      {
        id: 'isa-ch3-p2',
        text: 'ঈসা বনী ইসরাঈলকে বললেন: "নিশ্চয়ই আল্লাহ আমার রব এবং তোমাদের রব, সুতরাং তাঁর ইবাদত করো। এটাই সরল পথ।" তিনি তাদেরকে বিশুদ্ধ তাওহীদ ও একমাত্র আল্লাহর আনুগত্যের দিকে আহ্বান করেছিলেন।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 3,
            surahName: { en: 'Al-Imran', bn: 'আলে-ইমরান', ar: 'آل عمران' },
            ayahStart: 51,
            translation: {
              en: '"Indeed, Allah is my Lord and your Lord, so worship Him. That is a straight path."',
              bn: '"নিশ্চয়ই আল্লাহ আমার রব এবং তোমাদের রব, সুতরাং তাঁর ইবাদত করো। এটাই সরল পথ।"',
              ar: 'إِنَّ اللَّهَ رَبِّي وَرَبُّكُمْ فَاعْبُدُوهُ ۗ هَٰذَا صِرَاطٌ مُّسْتَقِيمٌ'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'isa-ch4',
    title: 'আসমানী খাবারের মাইদা (আল-মায়িদাহ)',
    summary: 'হাওয়ারীরা ঈসাকে আকাশ থেকে খাবারের মাইদা আনতে বলেছিলেন এবং আল্লাহ তা একটি নিদর্শন ও সতর্কতা হিসেবে পাঠিয়েছিলেন।',
    order: 4,
    paragraphs: [
      {
        id: 'isa-ch4-p1',
        text: 'ঈসার হাওয়ারীরা তাঁকে আকাশ থেকে একটি খাবারের মাইদা আনার জন্য আল্লাহর কাছে দোয়া করতে বলেছিলেন। ঈসা আল্লাহর কাছে দোয়া করলেন এবং একটি খাবারের মাইদা তাদের জন্য নিদর্শন ও রিযিক হিসেবে নাযিল হলো।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 5,
            surahName: { en: 'Al-Ma\'idah', bn: 'আল-মায়িদাহ', ar: 'المائدة' },
            ayahStart: 112,
            ayahEnd: 115,
            translation: {
              en: '[And remember] when the disciples said, "O Isa, Son of Maryam, can your Lord send down to us a table [spread with food] from the heaven?" [Isa] said, "Fear Allah, if you should be believers." They said, "We wish to eat from it and let our hearts be reassured..." Said Isa, the son of Maryam, "O Allah, our Lord, send down to us a table [spread with food] from the heaven to be for us a festival for the first of us and the last of us and a sign from You. And provide for us, and You are the best of providers." Allah said, "Indeed, I will send it down to you."',
              bn: 'যখন হাওয়ারীরা বলল, "হে ঈসা ইবনে মারইয়াম, তোমার রব কি আমাদের জন্য আকাশ থেকে খাবারের মাইদা পাঠাতে পারবেন?" ঈসা বলল, "আল্লাহকে ভয় করো, যদি তোমরা মুমিন হও।" তারা বলল, "আমরা তা থেকে খেতে চাই এবং আমাদের অন্তর প্রশান্ত হোক..." ঈসা ইবনে মারইয়াম বলল, "হে আল্লাহ, আমাদের রব, আমাদের জন্য আকাশ থেকে একটি খাবারের মাইদা পাঠাও, যা আমাদের প্রথম ও শেষ সকলের জন্য উৎসব হবে এবং তোমার পক্ষ থেকে নিদর্শন হবে। আমাদের রিযিক দাও, তুমি সর্বোত্তম রিযিকদাতা।" আল্লাহ বললেন, "নিশ্চয়ই আমি তা তোমাদের কাছে পাঠাব।"',
              ar: 'إِذْ قَالَ الْحَوَارِيُّونَ يَا عِيسَى ابْنَ مَرْيَمَ هَلْ يَسْتَطِيعُ رَبُّكَ أَن يُنَزِّلَ عَلَيْنَا مَائِدَةً مِّنَ السَّمَاءِ ۖ قَالَ اتَّقُوا اللَّهَ إِن كُنتُم مُّؤْمِنِينَ قَالُوا نُرِيدُ أَن نَّأْكُلَ مِنْهَا وَتَطْمَئِنَّ قُلُوبُنَا... قَالَ عِيسَى ابْنُ مَرْيَمَ اللَّهُمَّ رَبَّنَا أَنزِلْ عَلَيْنَا مَائِدَةً مِّنَ السَّمَاءِ تَكُونُ لَنَا عِيدًا لِّأَوَّلِنَا وَآخِرِنَا وَآيَةً مِّنكَ ۖ وَارْزُقْنَا وَأَنتَ خَيْرُ الرَّازِقِينَ قَالَ اللَّهُ إِنِّي مُنَزِّلُهَا عَلَيْكُمْ'
            }
          }
        ]
      },
      {
        id: 'isa-ch4-p2',
        text: 'আল্লাহ সতর্ক করলেন যে এই স্পষ্ট নিদর্শনের পরও যে কুফরী করবে, তাকে এমন শাস্তি দেওয়া হবে যা বিশ্বজগতের আর কাউকে দেওয়া হয়নি। এটি ছিল হাওয়ারীদের জন্য একটি চূড়ান্ত পরীক্ষা।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 5,
            surahName: { en: 'Al-Ma\'idah', bn: 'আল-মায়িদাহ', ar: 'المائدة' },
            ayahStart: 115,
            translation: {
              en: 'Allah said, "Indeed, I will send it down to you, but whoever disbelieves afterwards from among you — then indeed will I punish him with a punishment by which I have not punished anyone among the worlds."',
              bn: 'আল্লাহ বললেন, "নিশ্চয়ই আমি তা তোমাদের কাছে পাঠাব, কিন্তু এরপর তোমাদের মধ্যে যে কুফরী করবে, আমি তাকে এমন শাস্তি দেব যা বিশ্বজগতের আর কাউকে দেইনি।"',
              ar: 'قَالَ اللَّهُ إِنِّي مُنَزِّلُهَا عَلَيْكُمْ ۖ فَمَن يَكْفُرْ بَعْدُ مِنكُمْ فَإِنِّي أُعَذِّبُهُ عَذَابًا لَّا أُعَذِّبُهُ أَحَدًا مِّنَ الْعَالَمِينَ'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'isa-ch5',
    title: 'ঈসার ঊর্ধ্বারোহণ',
    summary: 'আল্লাহ ঈসাকে ষড়যন্ত্রকারীদের হাত থেকে রক্ষা করে নিজের কাছে তুলে নিয়েছেন এবং কিয়ামতের আগে তিনি ফিরে আসবেন।',
    order: 5,
    paragraphs: [
      {
        id: 'isa-ch5-p1',
        text: 'কাফিররা যখন ঈসাকে হত্যার ষড়যন্ত্র করল, আল্লাহ তাঁকে নিজের কাছে তুলে নিলেন। কুরআন স্পষ্টভাবে বলেছে: "তারা তাঁকে হত্যা করেনি এবং তাঁকে ক্রুশবিদ্ধও করেনি; বরং তাদের কাছে সদৃশ করা হয়েছিল।" আল্লাহ পরাক্রমশালী, প্রজ্ঞাময়।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 4,
            surahName: { en: 'An-Nisa', bn: 'আন-নিসা', ar: 'النساء' },
            ayahStart: 157,
            ayahEnd: 158,
            translation: {
              en: 'And [for] their saying, "Indeed, we have killed the Messiah, Isa, the son of Maryam, the messenger of Allah." And they did not kill him, nor did they crucify him; but [another] was made to resemble him to them. And indeed, those who differ over it are in doubt about it. They have no knowledge of it except the following of assumption. And they did not kill him, for certain. Rather, Allah raised him to Himself. And ever is Allah Exalted in Might and Wise.',
              bn: 'আর তাদের এই বলার কারণে যে, "আমরা আল্লাহর রাসূল মারইয়ামের পুত্র মাসীহ ঈসাকে হত্যা করেছি।" অথচ তারা তাকে হত্যা করেনি এবং তাকে ক্রুশবিদ্ধও করেনি; বরং তাদের কাছে সদৃশ করা হয়েছিল। যারা এ বিষয়ে মতভেদ করেছে তারা সন্দেহের মধ্যে রয়েছে। ধারণার অনুসরণ ছাড়া এ বিষয়ে তাদের কোনো জ্ঞান নেই। তারা তাকে নিশ্চিতভাবে হত্যা করেনি। বরং আল্লাহ তাকে নিজের কাছে তুলে নিয়েছেন। আল্লাহ পরাক্রমশালী, প্রজ্ঞাময়।',
              ar: 'وَقَوْلِهِمْ إِنَّا قَتَلْنَا الْمَسِيحَ عِيسَى ابْنَ مَرْيَمَ رَسُولَ اللَّهِ وَمَا قَتَلُوهُ وَمَا صَلَبُوهُ وَلَٰكِن شُبِّهَ لَهُمْ ۚ وَإِنَّ الَّذِينَ اخْتَلَفُوا فِيهِ لَفِي شَكٍّ مِّنْهُ ۚ مَا لَهُم بِهِ مِنْ عِلْمٍ إِلَّا اتِّبَاعَ الظَّنِّ ۚ وَمَا قَتَلُوهُ يَقِينًا بَل رَّفَعَهُ اللَّهُ إِلَيْهِ ۚ وَكَانَ اللَّهُ عَزِيزًا حَكِيمًا'
            }
          }
        ]
      },
      {
        id: 'isa-ch5-p2',
        text: 'কিয়ামতের আগে ঈসা ফিরে আসবেন। তিনি কিয়ামতের একটি নিদর্শন। আহলে কিতাবের সকলেই তাঁর মৃত্যুর আগে তাঁকে বিশ্বাস করবে এবং কিয়ামতের দিন তিনি তাদের উপর সাক্ষী হবেন।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 43,
            surahName: { en: 'Az-Zukhruf', bn: 'আয-যুখরুফ', ar: 'الزخرف' },
            ayahStart: 61,
            translation: {
              en: 'And indeed, Isa will be [a sign for] knowledge of the Hour, so be not in doubt of it, and follow Me. This is a straight path.',
              bn: 'আর নিশ্চয়ই সে (ঈসা) কিয়ামতের জ্ঞান (নিদর্শন)। সুতরাং এতে সন্দেহ করো না এবং আমাকে অনুসরণ করো। এটাই সরল পথ।',
              ar: 'وَإِنَّهُ لَعِلْمٌ لِّلسَّاعَةِ فَلَا تَمْتَرُنَّ بِهَا وَاتَّبِعُونِ ۚ هَٰذَا صِرَاطٌ مُّسْتَقِيمٌ'
            }
          },
          {
            type: 'quran',
            surah: 4,
            surahName: { en: 'An-Nisa', bn: 'আন-নিসা', ar: 'النساء' },
            ayahStart: 159,
            translation: {
              en: 'And there is none from the People of the Scripture but that he will surely believe in Isa before his death. And on the Day of Resurrection he will be against them a witness.',
              bn: 'আহলে কিতাবদের মধ্যে প্রত্যেকেই তার মৃত্যুর আগে অবশ্যই তাকে (ঈসাকে) বিশ্বাস করবে। আর কিয়ামতের দিন সে তাদের বিরুদ্ধে সাক্ষী হবে।',
              ar: 'وَإِن مِّنْ أَهْلِ الْكِتَابِ إِلَّا لَيُؤْمِنَنَّ بِهِ قَبْلَ مَوْتِهِ ۖ وَيَوْمَ الْقِيَامَةِ يَكُونُ عَلَيْهِمْ شَهِيدًا'
            }
          }
        ]
      }
    ]
  }
];

export default chapters;
