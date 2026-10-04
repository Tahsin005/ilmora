import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import {
  Clock,
  BookOpen,
  ScrollText,
  Users,
  Heart,
  Star,
  Coins,
  Shield,
  Compass,
  ArrowRight,
  Sun,
  Flame,
  AlertTriangle,
} from 'lucide-react';
import { useSettings } from '../hooks/useSettings';
import { getPrayerTimes, type PrayerTimesData } from '../services/islamicApiService';
import { getProphetsList } from '../services/contentLoader';

export const DashboardPage: React.FC = () => {
  const { citySlug, language } = useSettings();
  const [prayerData, setPrayerData] = useState<PrayerTimesData | null>(null);
  const [nextPrayer, setNextPrayer] = useState<{ name: string; time: string; timeLeft: string }>({
    name: 'Fajr',
    time: '--:--',
    timeLeft: '',
  });

  const prophets = getProphetsList();

  useEffect(() => {
    let mounted = true;
    getPrayerTimes(citySlug).then((data) => {
      if (mounted) setPrayerData(data);
    });
    return () => {
      mounted = false;
    };
  }, [citySlug]);

  // Compute countdown to next prayer
  useEffect(() => {
    if (!prayerData?.data?.times) return;
    const times = prayerData.data.times;
    const prayerOrder = [
      { name: 'Fajr', time: times.Fajr },
      { name: 'Dhuhr', time: times.Dhuhr },
      { name: 'Asr', time: times.Asr },
      { name: 'Maghrib', time: times.Maghrib },
      { name: 'Isha', time: times.Isha },
    ];

    const interval = setInterval(() => {
      const now = new Date();
      const currentMinutes = now.getHours() * 60 + now.getMinutes();

      let target = prayerOrder[0];
      for (const p of prayerOrder) {
        const [h, m] = p.time.split(':').map(Number);
        const pMinutes = h * 60 + m;
        if (pMinutes > currentMinutes) {
          target = p;
          break;
        }
      }

      const [th, tm] = target.time.split(':').map(Number);
      let diff = th * 60 + tm - currentMinutes;
      if (diff < 0) diff += 24 * 60; // Next day Fajr

      const hours = Math.floor(diff / 60);
      const mins = diff % 60;
      setNextPrayer({
        name: target.name,
        time: target.time,
        timeLeft: `${hours}h ${mins}m`,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [prayerData]);

  const prohibited = prayerData?.data?.prohibited_times;

  const marqueePhrases = [
    'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ',
    'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
    'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ',
    'لَا إِلٰهَ إِلَّا اللَّهُ مُحَمَّدٌ رَسُولُ اللَّهِ',
    'اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ',
    'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ',
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500">

      <section className="relative pt-4 pb-6 overflow-hidden">

        <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden bg-white/[0.02] border-white/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">

            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-display tracking-[0.2em] bg-white/[0.04] text-primary border border-primary/30 shadow-sm">
                <Sun className="w-3.5 h-3.5" /> Bismillahir Rahmanir Raheem
              </div>

              <h2 className="font-display text-[clamp(36px,5.5vw,68px)] font-bold tracking-tighter leading-[1.05]">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50">
                  Nourish Your Soul With{' '}
                </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-3">
                  Divine Wisdom
                </span>
              </h2>

              <p className="font-body text-[15px] md:text-[16px] leading-[1.8] text-muted-foreground max-w-xl">
                A serene, distraction-free sanctuary for the modern believer. Explore the Holy Quran with verse-by-verse audio, 40,000+ canonical hadiths, chronicles of the 25 prophets, and real-time daily spiritual tools.
              </p>


              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/quran"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-display font-semibold hover:bg-primary/90 transition-all shadow-[0_0_20px_hsl(var(--primary)/0.35)]"
                >
                  Explore Quran <ArrowRight size={16} />
                </Link>
                <Link
                  to="/prophets"
                  className="inline-flex items-center gap-2 border border-white/15 text-foreground px-5 py-2.5 rounded-full text-sm font-display font-semibold hover:border-white/30 hover:bg-white/5 transition-all"
                >
                  25 Prophets Timeline
                </Link>
              </div>
            </div>


            <div className="glass-card glass-shimmer rounded-3xl p-6 md:p-8 border-white/10 flex flex-col items-center justify-center text-center shadow-2xl relative">
              <div className="section-label text-muted-foreground mb-1 font-display text-[11px] tracking-[0.15em]">
                Next Obligatory Prayer
              </div>
              <span className="font-display text-3xl font-extrabold text-primary tracking-tight mt-1">
                {nextPrayer.name}
              </span>
              <span className="text-4xl md:text-5xl font-mono font-bold text-foreground mt-1 tracking-tight">
                {nextPrayer.time}
              </span>
              <div className="mt-2.5 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-display font-semibold bg-accent-2/15 text-accent-2 border border-accent-2/30 shadow-sm">
                <Clock className="w-3.5 h-3.5" /> in {nextPrayer.timeLeft || 'calculating...'}
              </div>

              <Link
                to="/prayer-times"
                className="mt-5 inline-flex items-center gap-2 text-xs font-display font-semibold text-primary hover:gap-3 transition-all"
              >
                <span>Full Timetable & Qibla</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>


          {prohibited && (
            <div className="mt-8 pt-5 border-t border-white/[0.06] flex flex-wrap items-center gap-4 text-xs font-display text-muted-foreground">
              <span className="flex items-center gap-1.5 text-accent-2 font-semibold">
                <AlertTriangle className="w-3.5 h-3.5" /> Prohibited Prayer Times:
              </span>
              <span>Sunrise: <strong className="text-foreground">{prohibited.sunrise.start} - {prohibited.sunrise.end}</strong></span>
              <span>•</span>
              <span>Solar Noon (Zawal): <strong className="text-foreground">{prohibited.noon.start} - {prohibited.noon.end}</strong></span>
              <span>•</span>
              <span>Sunset: <strong className="text-foreground">{prohibited.sunset.start} - {prohibited.sunset.end}</strong></span>
            </div>
          )}
        </div>
      </section>


      <section className="w-full overflow-hidden relative py-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-[300%] animate-marquee gap-4 hover:[animation-play-state:paused]">
          {[...marqueePhrases, ...marqueePhrases, ...marqueePhrases].map((phrase, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-8 py-3.5 rounded-full border border-white/10 bg-white/[0.03] text-foreground/80 font-quran text-xl md:text-2xl whitespace-nowrap hover:bg-white/[0.08] hover:border-primary/40 transition-all backdrop-blur-md shadow-lg"
            >
              {phrase}
            </div>
          ))}
        </div>
      </section>


      <section className="space-y-6">
        <div>
          <div className="font-display text-[11px] font-medium tracking-[0.15em] text-muted-foreground mb-1.5">
            Canonical Knowledge
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
            <Flame className="w-6 h-6 text-primary" /> Sacred Foundations
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

          <Link
            to="/quran"
            className="glass-card glass-shimmer glass-hover p-7 rounded-2xl group relative overflow-hidden block hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 text-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 shadow-sm">
              <BookOpen className="w-6 h-6" />
            </div>
            <h4 className="font-display font-bold text-lg text-foreground mb-1.5 group-hover:text-primary transition-colors">
              The Holy Quran
            </h4>
            <p className="font-body text-[14px] leading-[1.7] text-muted-foreground mb-4">
              114 Surahs with side-by-side Arabic, transliteration, English, Bengali & Urdu, and audio recitation.
            </p>
            <div className="flex items-center gap-1.5 text-xs font-display font-semibold text-primary">
              Read Surahs <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>


          <Link
            to="/hadith"
            className="glass-card glass-shimmer glass-hover p-7 rounded-2xl group relative overflow-hidden block hover:border-[hsl(var(--accent-3))]/50 hover:shadow-[0_0_30px_hsl(var(--accent-3)/0.3)]"
          >
            <div className="w-12 h-12 rounded-2xl bg-accent-3/10 border border-accent-3/25 text-accent-3 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 shadow-sm">
              <ScrollText className="w-6 h-6" />
            </div>
            <h4 className="font-display font-bold text-lg text-foreground mb-1.5 group-hover:text-accent-3 transition-colors">
              Hadith Library
            </h4>
            <p className="font-body text-[14px] leading-[1.7] text-muted-foreground mb-4">
              40,465 authentic hadiths across 9 canonical collections including Sahih Bukhari and Muslim.
            </p>
            <div className="flex items-center gap-1.5 text-xs font-display font-semibold text-accent-3">
              Explore Collections <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>


          <Link
            to="/prophets"
            className="glass-card glass-shimmer glass-hover p-7 rounded-2xl group relative overflow-hidden block hover:border-[hsl(var(--accent-2))]/50 hover:shadow-[0_0_30px_hsl(var(--accent-2)/0.3)]"
          >
            <div className="w-12 h-12 rounded-2xl bg-accent-2/10 border border-accent-2/25 text-accent-2 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 shadow-sm">
              <Users className="w-6 h-6" />
            </div>
            <h4 className="font-display font-bold text-lg text-foreground mb-1.5 group-hover:text-accent-2 transition-colors">
              25 Prophets
            </h4>
            <p className="font-body text-[14px] leading-[1.7] text-muted-foreground mb-4">
              Chronological chronicles with Quranic citations, kids stories, moral lessons, and quizzes.
            </p>
            <div className="flex items-center gap-1.5 text-xs font-display font-semibold text-accent-2">
              View Timeline <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>


          <Link
            to="/duas"
            className="glass-card glass-shimmer glass-hover p-7 rounded-2xl group relative overflow-hidden block hover:border-rose-500/50 hover:shadow-[0_0_30px_rgba(244,63,94,0.3)]"
          >
            <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/25 text-rose-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 shadow-sm">
              <Heart className="w-6 h-6" />
            </div>
            <h4 className="font-display font-bold text-lg text-foreground mb-1.5 group-hover:text-rose-400 transition-colors">
              1,001 Duas & Tasbeeh
            </h4>
            <p className="font-body text-[14px] leading-[1.7] text-muted-foreground mb-4">
              Categorized supplications across 44 life areas with an interactive tactile digital Tasbeeh counter.
            </p>
            <div className="flex items-center gap-1.5 text-xs font-display font-semibold text-rose-400">
              Browse Duas <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>


      <section className="space-y-6">
        <div>
          <div className="font-display text-[11px] font-medium tracking-[0.15em] text-muted-foreground mb-1.5">
            Practical Worship
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
            <Clock className="w-6 h-6 text-primary" /> Daily Spiritual Utilities
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            to="/prayer-times"
            className="glass-card glass-shimmer glass-hover p-5 rounded-2xl border-white/10 flex items-center gap-4 group"
          >
            <div className="w-11 h-11 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform duration-300">
              <Compass size={20} />
            </div>
            <div>
              <h5 className="font-display font-bold text-sm text-foreground group-hover:text-primary transition-colors">
                Qibla Compass
              </h5>
              <p className="font-body text-xs text-muted-foreground">Kaaba bearing & distance</p>
            </div>
          </Link>

          <Link
            to="/names-of-allah"
            className="glass-card glass-shimmer glass-hover p-5 rounded-2xl border-white/10 flex items-center gap-4 group hover:border-[hsl(var(--accent-2))]/50 hover:shadow-[0_0_20px_hsl(var(--accent-2)/0.25)]"
          >
            <div className="w-11 h-11 rounded-2xl bg-accent-2/10 border border-accent-2/25 flex items-center justify-center text-accent-2 shrink-0 group-hover:scale-110 transition-transform duration-300">
              <Star size={20} />
            </div>
            <div>
              <h5 className="font-display font-bold text-sm text-foreground group-hover:text-accent-2 transition-colors">
                99 Names of Allah
              </h5>
              <p className="font-body text-xs text-muted-foreground">Meanings & flashcards</p>
            </div>
          </Link>

          <Link
            to="/zakat"
            className="glass-card glass-shimmer glass-hover p-5 rounded-2xl border-white/10 flex items-center gap-4 group hover:border-[hsl(var(--accent-3))]/50 hover:shadow-[0_0_20px_hsl(var(--accent-3)/0.25)]"
          >
            <div className="w-11 h-11 rounded-2xl bg-accent-3/10 border border-accent-3/25 flex items-center justify-center text-accent-3 shrink-0 group-hover:scale-110 transition-transform duration-300">
              <Coins size={20} />
            </div>
            <div>
              <h5 className="font-display font-bold text-sm text-foreground group-hover:text-accent-3 transition-colors">
                Zakat Calculator
              </h5>
              <p className="font-body text-xs text-muted-foreground">Live Nisab thresholds</p>
            </div>
          </Link>

          <Link
            to="/ruqyah"
            className="glass-card glass-shimmer glass-hover p-5 rounded-2xl border-white/10 flex items-center gap-4 group hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.25)]"
          >
            <div className="w-11 h-11 rounded-2xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400 shrink-0 group-hover:scale-110 transition-transform duration-300">
              <Shield size={20} />
            </div>
            <div>
              <h5 className="font-display font-bold text-sm text-foreground group-hover:text-indigo-400 transition-colors">
                Ruqyah Healing
              </h5>
              <p className="font-body text-xs text-muted-foreground">Protection & remedy</p>
            </div>
          </Link>
        </div>
      </section>


      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-display text-[11px] font-medium tracking-[0.15em] text-muted-foreground mb-1.5">
              Historical Chronicles
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
              <Users className="w-6 h-6 text-accent-2" /> The 25 Quranic Prophets (عليهم السلام)
            </h3>
          </div>
          <Link
            to="/prophets"
            className="text-xs font-display font-semibold text-accent-2 hover:gap-2 flex items-center gap-1 transition-all"
          >
            View All 25 <ArrowRight size={14} />
          </Link>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 pt-1 scrollbar-thin">
          {prophets.map((prophet) => (
            <Link
              key={prophet.id}
              to={`/prophets/${prophet.id}`}
              className="glass-card glass-shimmer glass-hover rounded-2xl p-5 min-w-[220px] max-w-[240px] border-white/10 shrink-0 block group hover:border-[hsl(var(--accent-2))]/50 hover:shadow-[0_0_25px_hsl(var(--accent-2)/0.25)]"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono font-bold text-accent-2 bg-accent-2/15 border border-accent-2/30 px-2.5 py-0.5 rounded-full">
                  #{prophet.order}
                </span>
                <span className="font-quran font-bold text-lg text-amber-200">
                  {prophet.name.ar}
                </span>
              </div>
              <h5 className="font-display font-bold text-base text-foreground group-hover:text-accent-2 transition-colors">
                {language === 'bn' ? prophet.name.bn : prophet.name.en}
              </h5>
              <p className="font-body text-xs text-muted-foreground mt-1 line-clamp-1">
                {language === 'bn' ? prophet.title.bn : prophet.title.en}
              </p>
              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-muted-foreground font-display">
                <span>{prophet.quranMentionCount} Quran mentions</span>
                <span className="text-accent-2 font-semibold">Read &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};
