import React, { useState } from 'react';
import {
  Search,
  BookOpen,
  Volume2,
  Bookmark,
  Check,
  ChevronRight,
  Layers,
  X,
  Type,
} from 'lucide-react';
import {
  getSurahsList,
  getJuzList,
  getSurahDetail,
  getVerseAudioUrl,
  type SurahDetail,
} from '../services/quranService';
import { useSettings } from '../hooks/useSettings';
import { useBookmarks } from '../hooks/useBookmarks';

export const QuranPage: React.FC = () => {
  const { arabicFontSize, setArabicFontSize } = useSettings();
  const { isBookmarked, addBookmark, removeBookmark } = useBookmarks();

  const [activeTab, setActiveTab] = useState<'surahs' | 'juz'>('surahs');
  const [searchQuery, setSearchQuery] = useState('');
  const surahs = getSurahsList();
  const juzList = getJuzList();
  const [selectedSurah, setSelectedSurah] = useState<SurahDetail | null>(null);
  const [loadingSurah, setLoadingSurah] = useState(false);
  const [activeAudioAyah, setActiveAudioAyah] = useState<number | null>(null);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);

  // Translation display toggles
  const [showEn, setShowEn] = useState(true);
  const [showBn, setShowBn] = useState(true);
  const [showUr, setShowUr] = useState(false);

  const handleOpenSurah = async (id: number) => {
    setLoadingSurah(true);
    try {
      const detail = await getSurahDetail(id);
      setSelectedSurah(detail);
    } finally {
      setLoadingSurah(false);
    }
  };

  const handlePlayAudio = (surah: number, ayah: number) => {
    if (audioElement) {
      audioElement.pause();
    }
    if (activeAudioAyah === ayah) {
      setActiveAudioAyah(null);
      return;
    }
    const url = getVerseAudioUrl(surah, ayah);
    const audio = new Audio(url);
    audio.play();
    audio.onended = () => setActiveAudioAyah(null);
    audio.onerror = () => setActiveAudioAyah(null);
    setAudioElement(audio);
    setActiveAudioAyah(ayah);
  };

  const filteredSurahs = surahs.filter((s) => {
    const q = searchQuery.toLowerCase();
    return (
      s.transliteration.toLowerCase().includes(q) ||
      s.translation.toLowerCase().includes(q) ||
      s.name.includes(q) ||
      String(s.id).includes(q)
    );
  });

  const getFontSizeClass = () => {
    switch (arabicFontSize) {
      case 'huge':
        return 'text-3xl md:text-4xl';
      case 'large':
        return 'text-2xl md:text-3xl';
      default:
        return 'text-xl md:text-2xl';
    }
  };

  return (
    <div className="space-y-8">

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div>
          <div className="font-display text-[11px] font-medium tracking-[0.15em] text-muted-foreground mb-2">
            DIVINE REVELATION
          </div>
          <h1 className="font-display text-[clamp(32px,5vw,56px)] font-bold tracking-tighter leading-tight mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50">
              The Holy{" "}
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary/90 to-primary/40">
              Quran
            </span>
          </h1>
          <p className="font-body text-[14px] md:text-[15px] leading-[1.7] text-foreground/60 max-w-xl">
            Read, listen to verse-by-verse recitation by Sheikh Mishary Alafasy, and contemplate the divine words across 114 Surahs and 30 Juz.
          </p>
        </div>


        <div className="flex flex-wrap items-center gap-3">
          <div className="glass-panel p-1 rounded-2xl flex items-center gap-1">
            <button
              type="button"
              onClick={() => setActiveTab('surahs')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-display font-semibold transition-all duration-300 ${activeTab === 'surahs'
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                }`}
            >
              <BookOpen className="w-3.5 h-3.5" /> Surahs (114)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('juz')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-display font-semibold transition-all duration-300 ${activeTab === 'juz'
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                }`}
            >
              <Layers className="w-3.5 h-3.5" /> Juz (30)
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-2xl glass-card text-xs font-display font-medium text-foreground/70">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>6,236 Verses</span>
          </div>
        </div>
      </div>


      {activeTab === 'surahs' && (
        <div className="relative">
          <Search className="w-4 h-4 text-muted-foreground absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search Surah by transliteration (e.g. Al-Fatihah, Ya-Sin), English meaning, or number..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-11 pr-4 py-3.5 font-display text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all shadow-inner"
          />
        </div>
      )}


      {activeTab === 'surahs' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSurahs.map((surah) => (
            <button
              type="button"
              key={surah.id}
              disabled={loadingSurah}
              onClick={() => handleOpenSurah(surah.id)}
              className="glass-card glass-hover glass-shimmer p-5 text-left flex items-center justify-between group cursor-pointer disabled:opacity-50 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.25)]"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center font-display font-bold text-sm text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 shadow-inner">
                  {surah.id}
                </div>
                <div>
                  <h4 className="font-display font-semibold text-[16px] text-foreground group-hover:text-primary transition-colors">
                    {surah.transliteration}
                  </h4>
                  <p className="font-body text-xs text-muted-foreground">{surah.translation}</p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="font-display text-[10px]  tracking-wider font-semibold px-2 py-0.5 rounded-full bg-white/5 text-muted-foreground border border-white/10">
                      {surah.type}
                    </span>
                    <span className="text-[10px] text-muted-foreground/60">•</span>
                    <span className="font-display text-[11px] text-muted-foreground">
                      {surah.total_verses} Verses
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span className="font-quran text-2xl text-primary/90 font-bold block mb-1">
                  {surah.name}
                </span>
                <ChevronRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-1 inline-block transition-all" />
              </div>
            </button>
          ))}
        </div>
      )}


      {activeTab === 'juz' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {juzList.map((j) => (
            <div
              key={j.index}
              className="glass-card glass-hover glass-shimmer p-5 flex flex-col justify-between hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.25)]"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-display text-xs font-bold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                    Juz {j.index} of 30
                  </span>
                </div>
                <div className="space-y-2 text-xs font-body">
                  <div className="text-foreground/80">
                    <span className="text-muted-foreground">Starts:</span>{' '}
                    <span className="text-foreground font-semibold font-display">{j.start.name}</span>{' '}
                    <span className="text-muted-foreground font-mono">({j.start.verse.replace('_', ' ')})</span>
                  </div>
                  <div className="text-foreground/80">
                    <span className="text-muted-foreground">Ends:</span>{' '}
                    <span className="text-foreground font-semibold font-display">{j.end.name}</span>{' '}
                    <span className="text-muted-foreground font-mono">({j.end.verse.replace('_', ' ')})</span>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleOpenSurah(Number(j.start.index))}
                className="mt-4 pt-3 border-t border-white/10 text-xs font-display font-semibold text-primary hover:text-primary/80 flex items-center justify-between group"
              >
                <span>Read Starting Surah</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      )}


      {selectedSurah && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-xl flex flex-col items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-300">
          <div className="glass-panel w-full max-w-4xl h-[92vh] flex flex-col shadow-2xl overflow-hidden border border-white/10 bg-card/90">

            <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 text-primary flex items-center justify-center font-display font-bold text-base shadow-inner">
                  {selectedSurah.id}
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg md:text-xl text-foreground flex items-center gap-2">
                    {selectedSurah.transliteration} •{' '}
                    <span className="font-quran text-primary text-xl">{selectedSurah.name}</span>
                  </h3>
                  <p className="font-body text-xs text-muted-foreground">
                    {selectedSurah.translation} • {selectedSurah.type.toUpperCase()} •{' '}
                    {selectedSurah.total_verses} Verses
                  </p>
                </div>
              </div>


              <div className="flex items-center gap-3">

                <div className="hidden sm:flex items-center gap-1 bg-white/5 rounded-xl p-1 text-xs border border-white/10">
                  <Type className="w-3.5 h-3.5 text-muted-foreground ml-1.5 mr-1" />
                  <button
                    type="button"
                    onClick={() => setArabicFontSize('normal')}
                    className={`px-2.5 py-1 rounded-lg font-display text-xs transition-all ${arabicFontSize === 'normal'
                      ? 'bg-primary text-primary-foreground font-semibold shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                      }`}
                  >
                    A
                  </button>
                  <button
                    type="button"
                    onClick={() => setArabicFontSize('large')}
                    className={`px-2.5 py-1 rounded-lg font-display text-xs transition-all ${arabicFontSize === 'large'
                      ? 'bg-primary text-primary-foreground font-bold shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                      }`}
                  >
                    A+
                  </button>
                  <button
                    type="button"
                    onClick={() => setArabicFontSize('huge')}
                    className={`px-2.5 py-1 rounded-lg font-display text-xs transition-all ${arabicFontSize === 'huge'
                      ? 'bg-primary text-primary-foreground font-black shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                      }`}
                  >
                    A++
                  </button>
                </div>


                <button
                  type="button"
                  onClick={() => {
                    if (audioElement) audioElement.pause();
                    setSelectedSurah(null);
                  }}
                  className="p-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-white/10 border border-transparent hover:border-white/10 transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>


            <div className="px-6 py-3 bg-secondary/30 border-b border-white/5 flex items-center justify-between text-xs text-muted-foreground">
              <span className="font-display font-medium  tracking-wider text-[11px]">Translations:</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowEn(!showEn)}
                  className={`px-3 py-1.5 rounded-full border text-xs font-display font-medium transition-all ${showEn
                    ? 'bg-primary/15 text-primary border-primary/30 shadow-sm'
                    : 'bg-white/5 text-muted-foreground border-white/10 hover:text-foreground'
                    }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setShowBn(!showBn)}
                  className={`px-3 py-1.5 rounded-full border text-xs font-display font-medium transition-all ${showBn
                    ? 'bg-primary/15 text-primary border-primary/30 shadow-sm'
                    : 'bg-white/5 text-muted-foreground border-white/10 hover:text-foreground'
                    }`}
                >
                  Bengali (বাংলা)
                </button>
                <button
                  type="button"
                  onClick={() => setShowUr(!showUr)}
                  className={`px-3 py-1.5 rounded-full border text-xs font-display font-medium transition-all ${showUr
                    ? 'bg-primary/15 text-primary border-primary/30 shadow-sm'
                    : 'bg-white/5 text-muted-foreground border-white/10 hover:text-foreground'
                    }`}
                >
                  Urdu (اردو)
                </button>
              </div>
            </div>


            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">

              {selectedSurah.id !== 9 && (
                <div className="text-center py-6 border-b border-white/10">
                  <p className="font-quran text-2xl md:text-3xl text-primary font-bold">
                    بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
                  </p>
                  <p className="font-body text-xs text-muted-foreground mt-2">
                    In the name of Allah, the Entirely Merciful, the Especially Merciful
                  </p>
                </div>
              )}


              {selectedSurah.verses.map((verse) => {
                const bookmarkId = `quran_${selectedSurah.id}_${verse.id}`;
                const saved = isBookmarked(bookmarkId);

                return (
                  <div
                    key={verse.id}
                    className="glass-card p-6 space-y-4 border border-white/10 hover:border-primary/40 transition-all rounded-2xl"
                  >

                    <div className="flex items-center justify-between text-xs text-muted-foreground border-b border-white/5 pb-3">
                      <span className="font-display bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full font-bold">
                        {selectedSurah.id}:{verse.id}
                      </span>

                      <div className="flex items-center gap-2">

                        <button
                          type="button"
                          onClick={() => handlePlayAudio(selectedSurah.id, verse.id)}
                          className={`p-2 rounded-xl transition-all cursor-pointer ${activeAudioAyah === verse.id
                            ? 'bg-primary text-primary-foreground animate-pulse shadow-md shadow-primary/30'
                            : 'text-muted-foreground hover:text-foreground hover:bg-white/10'
                            }`}
                          title="Listen to Verse Recitation"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>


                        <button
                          type="button"
                          onClick={() => {
                            if (saved) {
                              removeBookmark(bookmarkId);
                            } else {
                              addBookmark({
                                id: bookmarkId,
                                type: 'quran',
                                title: `${selectedSurah.transliteration} (${selectedSurah.id}:${verse.id})`,
                                arabicText: verse.arabic,
                                translation: verse.translation_en,
                                link: `/quran`,
                              });
                            }
                          }}
                          className={`p-2 rounded-xl transition-all cursor-pointer ${saved
                            ? 'text-amber-400 bg-amber-500/15 border border-amber-500/30'
                            : 'text-muted-foreground hover:text-foreground hover:bg-white/10'
                            }`}
                          title="Bookmark Verse"
                        >
                          {saved ? <Check className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>


                    <div className="text-right py-2">
                      <p className={`font-quran ${getFontSizeClass()} text-foreground leading-loose`}>
                        {verse.arabic}
                      </p>
                    </div>


                    <p className="text-xs text-primary/80 italic font-mono">
                      {verse.transliteration}
                    </p>


                    <div className="space-y-2.5 pt-3 border-t border-white/5 text-sm font-body">
                      {showEn && verse.translation_en && (
                        <p className="text-foreground/90 leading-relaxed">
                          <span className="text-[11px]  text-muted-foreground font-bold mr-2 font-display">EN:</span>
                          {verse.translation_en}
                        </p>
                      )}
                      {showBn && verse.translation_bn && (
                        <p className="text-foreground/80 leading-relaxed font-bengali">
                          <span className="text-[11px]  text-muted-foreground font-bold mr-2 font-display">BN:</span>
                          {verse.translation_bn}
                        </p>
                      )}
                      {showUr && verse.translation_ur && (
                        <p className="text-foreground/80 leading-relaxed text-right font-arabic">
                          {verse.translation_ur}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
