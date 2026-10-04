import type { StoryChapter } from '../../../types/prophet';

const chapters: StoryChapter[] = [
  {
    id: 'ayyub-ch1',
    title: 'The Trial of Ayyub',
    summary: 'Prophet Ayyub loses his wealth, children, and health, yet remains patient and steadfast in his faith in Allah for many years.',
    order: 1,
    paragraphs: [
      {
        id: 'ayyub-ch1-p1',
        text: 'Ayyub was a prophet blessed with great wealth, many children, and good health. Allah tested him by taking away all his blessings one by one — his wealth was destroyed, his children perished, and his body was afflicted with a severe illness. Despite losing everything, Ayyub called upon his Lord, saying that harm had touched him and that Allah is the Most Merciful of the merciful.',
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
        text: 'Ibn Kathir relates that Ayyub\'s trial lasted for a very long period — some scholars say eighteen years. During this time, his friends abandoned him, people avoided him due to his illness, and he was left with only his faithful wife who continued to serve him. Yet Ayyub never uttered a word of complaint against Allah. His patience became legendary, and he is remembered as one of the greatest examples of sabr (patience) in the history of the prophets.',
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
        text: 'Shaytan tried to break Ayyub\'s resolve by whispering to him and to those around him. He attempted to make Ayyub\'s wife despair and urged her to question why Allah would afflict a faithful servant so severely. But Ayyub remained firm, attributing his affliction to a test from Allah, not as a punishment. He understood that true faith is proven not in times of ease but in times of hardship.',
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
              bn: '"শয়তান আমাকে কষ্ট ও যন্ত্রণা দিয়েছে।" আল্লাহ বললেন, "তোমার পা দিয়ে মাটিতে আঘাত কর; এটি শীতল গোসলের ও পানীয়ের পানি।"',
              ar: 'أَنِّي مَسَّنِيَ الشَّيْطَانُ بِنُصْبٍ وَعَذَابٍ ارْكُضْ بِرِجْلِكَ ۖ هَٰذَا مُغْتَسَلٌ بَارِدٌ وَشَرَابٌ'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'ayyub-ch2',
    title: 'The Healing',
    summary: 'Allah answers Ayyub\'s supplication, commands him to strike the ground with his foot, and a miraculous spring emerges that heals him completely.',
    order: 2,
    paragraphs: [
      {
        id: 'ayyub-ch2-p1',
        text: 'Allah answered the prayer of Ayyub and removed the distress that was upon him. He commanded Ayyub to strike the ground with his foot, and when he did, a spring of cool water gushed forth. He was told to bathe in it and drink from it. By the mercy and power of Allah, Ayyub was completely healed — his health was restored to its former state, and his body was renewed.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 21,
            surahName: { en: 'Al-Anbiya', bn: 'আল-আম্বিয়া', ar: 'الأنبياء' },
            ayahStart: 84,
            ayahEnd: 84,
            translation: {
              en: 'So We responded to him and removed what afflicted him of adversity. And We gave him back his family and the like thereof with them as mercy from Us and a reminder for the worshippers of Allah.',
              bn: 'তখন আমি তার ডাকে সাড়া দিলাম এবং তার কষ্ট দূর করলাম। আমি তাকে তার পরিবার ফিরিয়ে দিলাম এবং তাদের সাথে অনুরূপ আরও দিলাম — আমার পক্ষ থেকে রহমত ও ইবাদতকারীদের জন্য উপদেশ হিসেবে।',
              ar: 'فَاسْتَجَبْنَا لَهُ فَكَشَفْنَا مَا بِهِ مِن ضُرٍّ ۖ وَآتَيْنَاهُ أَهْلَهُ وَمِثْلَهُم مَّعَهُمْ رَحْمَةً مِّنْ عِندِنَا وَذِكْرَىٰ لِلْعَابِدِينَ'
            }
          }
        ]
      },
      {
        id: 'ayyub-ch2-p2',
        text: 'In Surah Sad, Allah describes how He commanded Ayyub to strike the ground with his foot, producing a spring of cool water for bathing and drinking. This miraculous healing was a sign of Allah\'s power and mercy. Not only was Ayyub\'s health restored, but Allah also returned his family to him and doubled what he had before, as a mercy from Allah and a reminder to all those who worship Him sincerely.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 38,
            surahName: { en: 'Sad', bn: 'সোয়াদ', ar: 'ص' },
            ayahStart: 42,
            ayahEnd: 44,
            translation: {
              en: '"Strike the ground with your foot; this is a cool bath and drink." And We gave him back his family and the like thereof with them as mercy from Us and a reminder for those of understanding. "And take in your hand a bunch of grass and strike with it and do not break your oath." Indeed, We found him patient — an excellent servant. Indeed, he was one repeatedly turning back to Allah.',
              bn: '"তোমার পা দিয়ে মাটিতে আঘাত কর; এটি শীতল গোসলের ও পানীয়ের পানি।" আমি তাকে তার পরিবার ফিরিয়ে দিলাম। "তোমার হাতে এক মুঠো ঘাস নাও এবং তা দিয়ে আঘাত কর।" নিশ্চয়ই আমি তাকে ধৈর্যশীল পেয়েছি — কতই না উত্তম বান্দা।',
              ar: 'ارْكُضْ بِرِجْلِكَ ۖ هَٰذَا مُغْتَسَلٌ بَارِدٌ وَشَرَابٌ وَوَهَبْنَا لَهُ أَهْلَهُ وَمِثْلَهُم مَّعَهُمْ رَحْمَةً مِّنَّا وَذِكْرَىٰ لِأُولِي الْأَلْبَابِ'
            }
          }
        ]
      },
      {
        id: 'ayyub-ch2-p3',
        text: 'Ibn Kathir explains that after Ayyub\'s healing, Allah also resolved the matter of his oath regarding his wife. During his illness, Ayyub had sworn to strike his wife a hundred times for something she had done. To fulfill the oath without causing harm, Allah instructed him to take a bundle of thin grass or sticks and strike once, thus satisfying the oath. Allah praised Ayyub as an excellent servant who was always turning back to Him in repentance. This story stands as the greatest example of patience in Islamic tradition.',
        phase: 'ibn-kathir',
        references: [
          {
            type: 'quran',
            surah: 38,
            surahName: { en: 'Sad', bn: 'সোয়াদ', ar: 'ص' },
            ayahStart: 44,
            ayahEnd: 44,
            translation: {
              en: '"And take in your hand a bunch of grass and strike with it and do not break your oath." Indeed, We found him patient — an excellent servant. Indeed, he was one repeatedly turning back to Allah.',
              bn: '"তোমার হাতে এক মুঠো ঘাস নাও এবং তা দিয়ে আঘাত কর এবং তোমার শপথ ভঙ্গ করো না।" নিশ্চয়ই আমি তাকে ধৈর্যশীল পেয়েছি — কতই না উত্তম বান্দা।',
              ar: 'وَخُذْ بِيَدِكَ ضِغْثًا فَاضْرِب بِّهِ وَلَا تَحْنَثْ ۗ إِنَّا وَجَدْنَاهُ صَابِرًا ۚ نِّعْمَ الْعَبْدُ ۖ إِنَّهُ أَوَّابٌ'
            }
          }
        ]
      }
    ]
  }
];

export default chapters;
