import React, { useState } from 'react';
import {
  Heart,
  Search,
  ChevronRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  Bookmark,
  Check,
  X,
} from 'lucide-react';
import {
  getDuaCategories,
  getDuasByCategory,
  type DuaCategory,
  type CategoryDuasResponse,
  type DuaItem,
} from '../services/islamicApiService';
import { useBookmarks } from '../hooks/useBookmarks';

export const DuasPage: React.FC = () => {
  const { isBookmarked, addBookmark, removeBookmark } = useBookmarks();

  const categories = getDuaCategories();
  const [selectedCategory, setSelectedCategory] = useState<DuaCategory | null>(null);
  const [categoryData, setCategoryData] = useState<CategoryDuasResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Tasbeeh state
  const [showTasbeeh, setShowTasbeeh] = useState(false);
  const [tasbeehCount, setTasbeehCount] = useState(0);
  const [tasbeehTarget, setTasbeehTarget] = useState(33);
  const [tasbeehPhrase, setTasbeehPhrase] = useState('SubhanAllah (سُبْحَانَ اللَّهِ)');

  const handleSelectCategory = async (cat: DuaCategory) => {
    setSelectedCategory(cat);
    setLoading(true);
    try {
      const res = await getDuasByCategory(cat.url);
      setCategoryData(res);
    } finally {
      setLoading(false);
    }
  };

  const handleTasbeehTap = () => {
    setTasbeehCount((prev) => {
      const next = prev + 1;
      // Vibration haptics on supported mobile browsers
      if ('vibrate' in navigator) {
        if (next % tasbeehTarget === 0) {
          navigator.vibrate([100, 50, 100]);
        } else {
          navigator.vibrate(40);
        }
      }
      return next;
    });
  };

  const filteredCategories = categories.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div>
          <div className="font-display text-[11px] font-medium tracking-[0.15em] text-muted-foreground mb-2">
            PROPHETIC SUPPLICATIONS & ADHKAR
          </div>
          <h1 className="font-display text-[clamp(32px,5vw,56px)] font-bold tracking-tighter leading-tight mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50">
              1,001 Duas &{" "}
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--accent-3))] to-[hsl(var(--accent-3)/0.4)]">
              Adhkar
            </span>
          </h1>
          <p className="font-body text-[14px] md:text-[15px] leading-[1.7] text-foreground/60 max-w-xl">
            Authentic Quranic and prophetic invocations organized across 44 life domains with Arabic Matn and translations.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-2xl glass-card text-xs font-display font-medium text-foreground/80">
            <Heart className="w-4 h-4 text-[hsl(var(--accent-3))]" />
            <span>44 Life Categories</span>
          </div>

          <button
            type="button"
            onClick={() => setShowTasbeeh(true)}
            className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-primary text-primary-foreground font-display font-semibold text-xs shadow-xl shadow-primary/25 hover:bg-primary/90 transition-all cursor-pointer w-fit"
          >
            <Sparkles className="w-4 h-4" /> Open Digital Tasbeeh
          </button>
        </div>
      </div>


      {selectedCategory && (
        <button
          type="button"
          onClick={() => {
            setSelectedCategory(null);
            setCategoryData(null);
          }}
          className="text-xs font-display font-semibold text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Back to 44 Categories
        </button>
      )}


      {!selectedCategory && (
        <div className="space-y-5">
          <div className="relative">
            <Search className="w-4 h-4 text-muted-foreground absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search categories (e.g., Morning, Sleep, Protection, Forgiveness, Anxiety)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl pl-11 pr-4 py-3.5 font-display text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[hsl(var(--accent-3))]/50 focus:ring-1 focus:ring-[hsl(var(--accent-3))]/20 transition-all shadow-inner"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCategories.map((cat) => (
              <button
                type="button"
                key={cat.url}
                onClick={() => handleSelectCategory(cat)}
                className="glass-card glass-hover glass-shimmer p-5 text-left flex items-center justify-between group cursor-pointer hover:border-[hsl(var(--accent-3))]/50 hover:shadow-[0_0_30px_hsl(var(--accent-3)/0.25)]"
              >
                <div>
                  <h4 className="font-display font-bold text-base text-foreground group-hover:text-[hsl(var(--accent-3))] transition-colors">
                    {cat.name}
                  </h4>
                  <p className="font-body text-xs text-muted-foreground mt-0.5">{cat.meta}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-[hsl(var(--accent-3))] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </button>
            ))}
          </div>
        </div>
      )}


      {selectedCategory && (
        <div className="space-y-6">
          <div className="glass-panel p-6 border border-white/10">
            <h3 className="font-display text-2xl font-bold text-foreground">{selectedCategory.name}</h3>
            <p className="font-body text-xs text-muted-foreground mt-1">
              {categoryData?.total_duas || 0} Duas across {categoryData?.subcategories?.length || 0} subcategories
            </p>
          </div>

          {loading ? (
            <div className="py-24 text-center font-display text-muted-foreground animate-pulse">Loading supplications...</div>
          ) : !categoryData?.subcategories || categoryData.subcategories.length === 0 ? (
            <div className="glass-panel py-16 text-center text-muted-foreground font-display">No duas found in this category.</div>
          ) : (
            categoryData.subcategories.map((subcat) => (
              <div key={subcat.id} className="space-y-4">
                <h4 className="font-display text-base font-bold text-primary border-b border-white/10 pb-2">
                  {subcat.title}
                </h4>

                <div className="space-y-4">
                  {subcat.duas.map((dua: DuaItem) => {
                    const bookmarkId = `dua_${dua.dua_id}`;
                    const saved = isBookmarked(bookmarkId);

                    return (
                      <div
                        key={dua.dua_id}
                        className="glass-card p-6 md:p-7 space-y-4 border border-white/10 hover:border-primary/40 transition-all rounded-3xl"
                      >
                        <div className="flex items-center justify-between text-xs text-muted-foreground border-b border-white/5 pb-3">
                          <h5 className="font-display font-bold text-foreground text-sm">{dua.title}</h5>
                          <button
                            type="button"
                            onClick={() => {
                              if (saved) {
                                removeBookmark(bookmarkId);
                              } else {
                                addBookmark({
                                  id: bookmarkId,
                                  type: 'dua',
                                  title: dua.title,
                                  arabicText: dua.arabic,
                                  translation: dua.translation || dua.introduction,
                                  link: '/duas',
                                });
                              }
                            }}
                            className={`p-2 rounded-xl transition-all cursor-pointer ${saved
                                ? 'text-amber-400 bg-amber-500/15 border border-amber-500/30'
                                : 'text-muted-foreground hover:text-foreground hover:bg-white/10'
                              }`}
                            title="Save Dua"
                          >
                            {saved ? <Check className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                          </button>
                        </div>

                        {dua.introduction && (
                          <p className="font-body text-xs text-muted-foreground italic">{dua.introduction}</p>
                        )}

                        {dua.arabic && (
                          <div className="text-right py-2">
                            <p className="font-quran text-2xl md:text-3xl text-foreground leading-loose">
                              {dua.arabic}
                            </p>
                          </div>
                        )}

                        {dua.transliteration && (
                          <p className="text-xs text-primary/80 italic font-mono">
                            {dua.transliteration}
                          </p>
                        )}

                        {dua.translation && (
                          <p className="text-sm font-body text-foreground/85 leading-relaxed pt-2 border-t border-white/5">
                            {dua.translation}
                          </p>
                        )}

                        {dua.reference && (
                          <div className="pt-2 text-[11px] text-muted-foreground/70 font-mono">
                            Source: {dua.reference}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>
      )}


      {showTasbeeh && (
        <div className="fixed inset-0 z-50 bg-background/85 backdrop-blur-xl flex flex-col items-center justify-center p-4 animate-in fade-in duration-200 select-none">
          <div className="glass-panel w-full max-w-md p-6 md:p-8 shadow-2xl flex flex-col items-center space-y-6 relative border border-white/15 bg-card/95">
            <button
              type="button"
              onClick={() => setShowTasbeeh(false)}
              className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-1">
              <span className="font-display text-xs tracking-widest text-primary font-bold">
                Digital Tasbeeh
              </span>
              <h3 className="font-display text-xl font-bold text-foreground">{tasbeehPhrase}</h3>
            </div>


            <div className="flex flex-wrap gap-2 justify-center">
              {[
                'SubhanAllah (سُبْحَانَ اللَّهِ)',
                'Alhamdulillah (الْحَمْدُ لِلَّهِ)',
                'Allahu Akbar (اللَّهُ أَكْبَرُ)',
                'Astaghfirullah (أَسْتَغْفِرُ اللَّهَ)',
                'La ilaha illallah (لَا إِلٰهَ إِلَّا اللَّهُ)',
              ].map((phrase) => (
                <button
                  type="button"
                  key={phrase}
                  onClick={() => {
                    setTasbeehPhrase(phrase);
                    setTasbeehCount(0);
                  }}
                  className={`text-xs font-display px-3 py-1.5 rounded-full border transition-all cursor-pointer ${tasbeehPhrase === phrase
                      ? 'bg-primary/20 text-primary border-primary/40 font-bold shadow-sm'
                      : 'bg-white/5 text-muted-foreground border-white/10 hover:text-foreground'
                    }`}
                >
                  {phrase.split(' ')[0]}
                </button>
              ))}
            </div>


            <button
              type="button"
              onClick={handleTasbeehTap}
              className="w-48 h-48 rounded-full bg-gradient-to-tr from-primary via-emerald-400 to-teal-300 p-1 shadow-2xl shadow-primary/30 active:scale-95 transition-transform cursor-pointer focus:outline-none"
            >
              <div className="w-full h-full rounded-full bg-card flex flex-col items-center justify-center space-y-1">
                <span className="text-5xl font-mono font-black text-foreground">{tasbeehCount}</span>
                <span className="text-xs text-muted-foreground font-display">Target: {tasbeehTarget}</span>
              </div>
            </button>


            <div className="w-full flex items-center justify-between text-xs font-display text-muted-foreground pt-3 border-t border-white/10">
              <div className="flex items-center gap-1.5">
                <span>Target:</span>
                {[33, 100, 1000].map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setTasbeehTarget(t)}
                    className={`px-2.5 py-1 rounded-lg font-mono text-xs transition-all cursor-pointer ${tasbeehTarget === t ? 'bg-primary text-primary-foreground font-bold shadow-sm' : 'bg-white/5 text-muted-foreground hover:text-foreground'
                      }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setTasbeehCount(0)}
                className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
