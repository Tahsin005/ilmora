import React, { useState } from 'react';
import { Link } from 'react-router';
import { Users, Search, Sparkles, BookOpen, ChevronRight } from 'lucide-react';
import { getProphetsList } from '../services/contentLoader';
import { useSettings } from '../hooks/useSettings';

export const ProphetsPage: React.FC = () => {
  const { language } = useSettings();
  const [searchQuery, setSearchQuery] = useState('');
  const prophets = getProphetsList();

  const filtered = prophets.filter((p) => {
    const q = searchQuery.toLowerCase();
    return (
      p.name.en.toLowerCase().includes(q) ||
      p.name.bn.toLowerCase().includes(q) ||
      p.name.ar.includes(q) ||
      p.title.en.toLowerCase().includes(q) ||
      String(p.order) === q
    );
  });

  return (
    <div className="space-y-8">

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div>
          <div className="font-display text-[11px] font-medium  tracking-[0.15em] text-muted-foreground mb-2">
            PROPHETIC BIOGRAPHIES
          </div>
          <h1 className="font-display text-[clamp(32px,5vw,56px)] font-bold tracking-tighter leading-tight mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50">
              Stories of the{" "}
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--accent-2))] to-[hsl(var(--accent-2)/0.4)]">
              25 Prophets
            </span>
          </h1>
          <p className="font-body text-[14px] md:text-[15px] leading-[1.7] text-foreground/60 max-w-xl">
            Chronological lives, miracles, family lineage, and divine missions of the Messengers of Allah (عليهم السلام) from Adam to Muhammad.
          </p>
        </div>


        <div className="flex items-center gap-3">
          <div className="glass-card px-4 py-2.5 rounded-2xl flex items-center gap-2.5 text-xs font-display font-medium text-foreground/80">
            <Users className="w-4 h-4 text-[hsl(var(--accent-2))]" />
            <span>25 Messengers • Quran & Hadith Citations</span>
          </div>
        </div>
      </div>


      <div className="relative">
        <Search className="w-4 h-4 text-muted-foreground absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type="text"
          placeholder="Search prophets by English, Bengali, Arabic name, era, or nation..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-2xl pl-11 pr-4 py-3.5 font-display text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[hsl(var(--accent-2))]/50 focus:ring-1 focus:ring-[hsl(var(--accent-2))]/20 transition-all shadow-inner"
        />
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((prophet) => {
          const name = prophet.name[language] || prophet.name.en;
          const title = prophet.title[language] || prophet.title.en;
          const era = prophet.era[language] || prophet.era.en;
          const nation = prophet.nation[language] || prophet.nation.en;

          return (
            <Link
              key={prophet.id}
              to={`/prophets/${prophet.id}`}
              className="glass-card glass-hover glass-shimmer p-6 flex flex-col justify-between group hover:border-[hsl(var(--accent-2))]/50 hover:shadow-[0_0_30px_hsl(var(--accent-2)/0.25)]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-xl bg-[hsl(var(--accent-2)/0.12)] border border-[hsl(var(--accent-2)/0.25)] text-[hsl(var(--accent-2))] font-display font-bold text-xs flex items-center justify-center">
                    #{prophet.order}
                  </span>
                  <span className="font-arabic font-bold text-xl text-[hsl(var(--accent-2))]">
                    {prophet.name.ar}
                  </span>
                </div>

                <h4 className="font-display font-bold text-lg text-foreground group-hover:text-[hsl(var(--accent-2))] transition-colors">
                  {name}
                </h4>
                <p className="font-display text-xs text-primary font-semibold mt-0.5">{title}</p>

                <div className="mt-4 space-y-1.5 text-xs font-body text-muted-foreground border-t border-white/10 pt-3">
                  <div>
                    <span className="text-muted-foreground/60 font-medium">Era:</span>{' '}
                    <span className="text-foreground/80">{era}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground/60 font-medium">Nation:</span>{' '}
                    <span className="text-foreground/80">{nation}</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs font-display text-muted-foreground">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-muted-foreground/60" />
                    {prophet.quranMentionCount} Ayahs
                  </span>
                  {prophet.miracles.length > 0 && (
                    <span className="flex items-center gap-1.5 text-[hsl(var(--accent-2))] font-medium">
                      <Sparkles className="w-3.5 h-3.5" />
                      {prophet.miracles.length} Miracles
                    </span>
                  )}
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-[hsl(var(--accent-2))] group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
