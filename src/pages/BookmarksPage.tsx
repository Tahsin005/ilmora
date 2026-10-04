import React, { useState } from 'react';
import { Link } from 'react-router';
import { Bookmark, Trash2, ExternalLink, BookOpen, ScrollText, Heart, Users, Sparkles } from 'lucide-react';
import { type BookmarkedItem } from '../context/bookmarks-context';
import { useBookmarks } from '../hooks/useBookmarks';

export const BookmarksPage: React.FC = () => {
  const { bookmarks, removeBookmark } = useBookmarks();
  const [filterType, setFilterType] = useState<string>('all');

  const filtered = bookmarks.filter((b) => {
    if (filterType === 'all') return true;
    return b.type === filterType;
  });

  const getBadgeStyle = (type: BookmarkedItem['type']) => {
    switch (type) {
      case 'quran':
        return {
          icon: <BookOpen className="w-3.5 h-3.5 text-primary" />,
          className: 'text-primary border-primary/30 bg-primary/10',
          label: 'Quran',
        };
      case 'hadith':
        return {
          icon: <ScrollText className="w-3.5 h-3.5 text-[hsl(var(--accent-2))]" />,
          className: 'text-[hsl(var(--accent-2))] border-[hsl(var(--accent-2)/0.3)] bg-[hsl(var(--accent-2)/0.1)]',
          label: 'Hadith',
        };
      case 'dua':
        return {
          icon: <Heart className="w-3.5 h-3.5 text-[hsl(var(--accent-3))]" />,
          className: 'text-[hsl(var(--accent-3))] border-[hsl(var(--accent-3)/0.3)] bg-[hsl(var(--accent-3)/0.1)]',
          label: 'Dua',
        };
      case 'prophet':
        return {
          icon: <Users className="w-3.5 h-3.5 text-amber-400" />,
          className: 'text-amber-400 border-amber-400/30 bg-amber-400/10',
          label: 'Prophet',
        };
      default:
        return {
          icon: <Bookmark className="w-3.5 h-3.5 text-primary" />,
          className: 'text-primary border-primary/30 bg-primary/10',
          label: type,
        };
    }
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
        <div>
          <div className="font-display text-[11px] font-medium tracking-[0.15em] text-muted-foreground mb-3 flex items-center gap-2">
            <Bookmark className="w-3.5 h-3.5 text-primary" />
            PERSONAL COLLECTION
          </div>
          <h1 className="font-display text-[clamp(32px,5vw,56px)] font-bold tracking-tighter mb-4 leading-none">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50">
              Saved{" "}
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary/80 to-primary/40">
              Bookmarks
            </span>
          </h1>
          <p className="font-body text-[14px] md:text-[15px] leading-[1.7] text-foreground/60 max-w-xl">
            Quickly access your saved Quranic verses, authentic prophetic hadiths, and daily supplications in one floating library.
          </p>
        </div>


        <div className="glass-panel p-1 rounded-2xl flex flex-wrap gap-1 border border-white/10 w-fit">
          {['all', 'quran', 'hadith', 'dua'].map((t) => (
            <button
              type="button"
              key={t}
              onClick={() => setFilterType(t)}
              className={`px-4 py-2 rounded-xl font-display text-xs font-semibold tracking-wider transition-all duration-300 ${filterType === t
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                  : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>


      {filtered.length === 0 ? (
        <div className="glass-panel rounded-3xl p-12 text-center space-y-5 border border-white/10 relative overflow-hidden">
          <div className="w-16 h-16 rounded-2xl bg-white/5 text-muted-foreground border border-white/10 flex items-center justify-center mx-auto">
            <Bookmark className="w-8 h-8 opacity-40 text-primary" />
          </div>
          <h3 className="font-display text-xl font-bold text-foreground">No saved bookmarks yet</h3>
          <p className="font-body text-xs md:text-sm text-foreground/60 max-w-md mx-auto leading-relaxed">
            Browse through the Quran, Hadith library, or Duas and tap the bookmark icon on any item to save it for immediate access.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <Link
              to="/quran"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-xs font-display font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              <BookOpen className="w-4 h-4" /> Explore Quran
            </Link>
            <Link
              to="/hadith"
              className="inline-flex items-center gap-2 border border-border/70 text-foreground px-5 py-2.5 rounded-full text-xs font-display font-semibold hover:border-primary/60 hover:text-primary transition-colors"
            >
              <ScrollText className="w-4 h-4" /> Explore Hadith
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((item) => {
            const badge = getBadgeStyle(item.type);
            return (
              <div
                key={item.id}
                className="glass-card glass-hover glass-shimmer rounded-2xl p-6 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-5 group transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_24px_hsl(var(--primary)/0.2)]"
              >
                <div className="space-y-3 flex-1 min-w-0">
                  <div className="flex items-center gap-2.5">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-display font-bold tracking-wider border ${badge.className}`}>
                      {badge.icon}
                      {badge.label}
                    </span>
                    <span className="text-white/20">•</span>
                    <h3 className="font-display font-bold text-foreground text-sm truncate">{item.title}</h3>
                  </div>

                  {item.arabicText && (
                    <p className="font-quran text-xl md:text-2xl text-primary text-right leading-loose">
                      {item.arabicText}
                    </p>
                  )}

                  {item.translation && (
                    <p className="font-body text-xs md:text-sm text-foreground/70 line-clamp-2 leading-relaxed">
                      {item.translation}
                    </p>
                  )}
                </div>


                <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                  <Link
                    to={item.link}
                    className="p-2.5 rounded-xl bg-white/5 text-foreground/80 hover:text-primary hover:bg-white/10 border border-white/10 transition-all duration-300"
                    title="View Item"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => removeBookmark(item.id)}
                    className="p-2.5 rounded-xl bg-destructive/10 text-destructive hover:bg-destructive/20 border border-destructive/20 transition-all duration-300"
                    title="Remove Bookmark"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}


      <div className="glass-panel p-4 rounded-2xl border border-white/10 flex items-center justify-between gap-4 text-xs font-display text-muted-foreground">
        <span className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-primary shrink-0" />
          Bookmarks are stored persistently in your local device cache.
        </span>
        <span className="font-mono text-primary font-bold">{bookmarks.length} Total</span>
      </div>
    </div>
  );
};

export default BookmarksPage;
