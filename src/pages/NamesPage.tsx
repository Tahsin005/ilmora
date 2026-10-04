import React, { useState } from 'react';
import { Star, Search, Sparkles, Languages, ChevronRight, ChevronLeft, RotateCw } from 'lucide-react';
import { getAsmaulHusna } from '../services/islamicApiService';
import { GlassSelect, type GlassSelectOption } from '../components/common/GlassSelect';

const LANGUAGE_OPTIONS: GlassSelectOption[] = [
  { value: 'en', label: 'English', sublabel: 'Default' },
  { value: 'bn', label: 'Bengali', sublabel: 'বাংলা' },
  { value: 'ar', label: 'Arabic', sublabel: 'العربية' },
  { value: 'ur', label: 'Urdu', sublabel: 'اردو' },
  { value: 'id', label: 'Indonesian', sublabel: 'Bahasa' },
  { value: 'tr', label: 'Turkish', sublabel: 'Türkçe' },
  { value: 'fr', label: 'French', sublabel: 'Français' },
  { value: 'es', label: 'Spanish', sublabel: 'Español' },
  { value: 'de', label: 'German', sublabel: 'Deutsch' },
];

export const NamesPage: React.FC = () => {
  const [lang, setLang] = useState('en');
  const [searchQuery, setSearchQuery] = useState('');

  // Flashcard mode
  const [flashcardMode, setFlashcardMode] = useState(false);
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const names = getAsmaulHusna(lang);

  const filtered = names.filter((n) => {
    const q = searchQuery.toLowerCase();
    return (
      n.transliteration.toLowerCase().includes(q) ||
      n.translation.toLowerCase().includes(q) ||
      n.name.includes(q) ||
      String(n.number) === q
    );
  });

  const currentFlashcard = names[flashcardIndex];

  return (
    <div className="space-y-8">

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div>
          <div className="font-display text-[11px] font-medium tracking-[0.15em] text-muted-foreground mb-2">
            DIVINE ATTRIBUTES & THEOLOGY
          </div>
          <h1 className="font-display text-[clamp(32px,5vw,56px)] font-bold tracking-tighter leading-tight mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50">
              Asmaul{" "}
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--accent-2))] to-[hsl(var(--accent-2)/0.4)]">
              Husna
            </span>
          </h1>
          <p className="font-body text-[14px] md:text-[15px] leading-[1.7] text-foreground/60 max-w-xl">
            Contemplate the 99 sublime names and divine attributes of Allah (سبحانه وتعالى) across multiple global languages.
          </p>
        </div>


        <div className="flex flex-wrap items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-2xl glass-card text-xs font-display font-medium text-foreground/80">
            <Star className="w-4 h-4 text-[hsl(var(--accent-2))]" />
            <span>99 Divine Attributes</span>
          </div>


          <button
            type="button"
            onClick={() => {
              setFlashcardMode(!flashcardMode);
              setIsFlipped(false);
            }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-display text-xs font-semibold border transition-all cursor-pointer ${flashcardMode
                ? 'bg-[hsl(var(--accent-2))] text-background border-[hsl(var(--accent-2))] shadow-lg shadow-[hsl(var(--accent-2)/0.25)]'
                : 'glass-panel text-foreground border-white/10 hover:bg-white/10'
              }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            {flashcardMode ? 'Exit Flashcards' : 'Memorize Flashcards'}
          </button>


          <GlassSelect
            value={lang}
            onChange={setLang}
            options={LANGUAGE_OPTIONS}
            icon={<Languages className="w-3.5 h-3.5" />}
            size="md"
            menuClassName="w-52"
          />
        </div>
      </div>


      {flashcardMode && currentFlashcard && (
        <div className="max-w-md mx-auto space-y-6 animate-in zoom-in-95 duration-200">
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="w-full h-84 rounded-3xl glass-panel p-8 flex flex-col items-center justify-center text-center cursor-pointer select-none transition-all shadow-2xl border border-[hsl(var(--accent-2)/0.3)] hover:border-[hsl(var(--accent-2)/0.6)] hover:shadow-[0_0_40px_hsl(var(--accent-2)/0.2)]"
          >
            <span className="font-display text-xs font-bold text-[hsl(var(--accent-2))] bg-[hsl(var(--accent-2)/0.12)] border border-[hsl(var(--accent-2)/0.25)] px-4 py-1 rounded-full mb-6">
              Name #{currentFlashcard.number} of 99
            </span>

            {!isFlipped ? (
              <div className="space-y-4">
                <span className="font-quran text-5xl md:text-6xl text-foreground font-bold block leading-relaxed drop-shadow-md">
                  {currentFlashcard.name}
                </span>
                <span className="text-lg font-display font-semibold text-primary block">
                  {currentFlashcard.transliteration}
                </span>
                <span className="font-display text-xs text-muted-foreground flex items-center justify-center gap-1.5 mt-6">
                  <RotateCw className="w-3.5 h-3.5" /> Tap to reveal meaning
                </span>
              </div>
            ) : (
              <div className="space-y-3 font-body">
                <h4 className="font-display text-2xl font-bold text-foreground">{currentFlashcard.translation}</h4>
                <p className="text-sm text-foreground/80 leading-relaxed max-w-xs">
                  {currentFlashcard.meaning}
                </p>
                <span className="font-display text-xs text-muted-foreground flex items-center justify-center gap-1.5 mt-6">
                  <RotateCw className="w-3.5 h-3.5" /> Tap to flip back
                </span>
              </div>
            )}
          </div>


          <div className="flex items-center justify-between px-3">
            <button
              type="button"
              onClick={() => {
                setIsFlipped(false);
                setFlashcardIndex((prev) => (prev > 0 ? prev - 1 : names.length - 1));
              }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl glass-panel text-xs font-display font-semibold text-muted-foreground hover:text-foreground border border-white/10 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </button>

            <span className="font-mono text-xs text-muted-foreground">
              {flashcardIndex + 1} / {names.length}
            </span>

            <button
              type="button"
              onClick={() => {
                setIsFlipped(false);
                setFlashcardIndex((prev) => (prev < names.length - 1 ? prev + 1 : 0));
              }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl glass-panel text-xs font-display font-semibold text-muted-foreground hover:text-foreground border border-white/10 transition-colors cursor-pointer"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}


      {!flashcardMode && (
        <div className="space-y-5">
          <div className="relative">
            <Search className="w-4 h-4 text-muted-foreground absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search 99 names by Arabic, transliteration, English meaning, or number..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl pl-11 pr-4 py-3.5 font-display text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[hsl(var(--accent-2))]/50 focus:ring-1 focus:ring-[hsl(var(--accent-2))]/20 transition-all shadow-inner"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((item) => (
              <div
                key={item.number}
                className="glass-card glass-hover glass-shimmer p-6 flex flex-col justify-between space-y-4 hover:border-[hsl(var(--accent-2))]/40 hover:shadow-[0_0_30px_hsl(var(--accent-2)/0.2)]"
              >
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-xl bg-[hsl(var(--accent-2)/0.12)] border border-[hsl(var(--accent-2)/0.25)] text-[hsl(var(--accent-2))] font-display font-bold text-xs flex items-center justify-center">
                    {item.number}
                  </span>
                  <span className="font-quran text-2xl text-[hsl(var(--accent-2))] font-bold">
                    {item.name}
                  </span>
                </div>

                <div>
                  <h4 className="font-display font-bold text-lg text-foreground">{item.transliteration}</h4>
                  <p className="font-display text-xs text-primary font-semibold mt-0.5">{item.translation}</p>
                  <p className="font-body text-xs text-muted-foreground mt-2 leading-relaxed line-clamp-3">
                    {item.meaning}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
