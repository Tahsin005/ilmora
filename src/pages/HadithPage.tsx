import React, { useState } from 'react';
import {
  ScrollText,
  Book,
  ChevronRight,
  Bookmark,
  Check,
  Search,
  ArrowLeft,
} from 'lucide-react';
import {
  getHadithBooks,
  getBookChapters,
  getChapterHadiths,
  type HadithBook,
  type HadithChapter,
  type HadithItem,
} from '../services/hadithService';
import { useBookmarks } from '../hooks/useBookmarks';

export const HadithPage: React.FC = () => {
  const { isBookmarked, addBookmark, removeBookmark } = useBookmarks();

  const books = getHadithBooks();
  const [selectedBook, setSelectedBook] = useState<HadithBook | null>(null);
  const [chapters, setChapters] = useState<HadithChapter[]>([]);
  const [selectedChapter, setSelectedChapter] = useState<HadithChapter | null>(null);
  const [hadiths, setHadiths] = useState<HadithItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSelectBook = async (book: HadithBook) => {
    setSelectedBook(book);
    setSelectedChapter(null);
    setHadiths([]);
    setLoading(true);
    try {
      const chs = await getBookChapters(book.bookSlug);
      setChapters(chs);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectChapter = async (ch: HadithChapter) => {
    setSelectedChapter(ch);
    setLoading(true);
    try {
      const res = await getChapterHadiths(ch.bookSlug, ch.chapterNumber);
      setHadiths(res?.hadiths || []);
    } finally {
      setLoading(false);
    }
  };

  const filteredChapters = chapters.filter((c) =>
    c.chapterEnglish.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.chapterArabic.includes(searchQuery)
  );

  return (
    <div className="space-y-8">

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div>
          <div className="font-display text-[11px] font-medium tracking-[0.15em] text-muted-foreground mb-2">
            CANONICAL TRADITIONS
          </div>
          <h1 className="font-display text-[clamp(32px,5vw,56px)] font-bold tracking-tighter leading-tight mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50">
              Hadith{" "}
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--accent-2))] to-[hsl(var(--accent-2)/0.4)]">
              Library
            </span>
          </h1>
          <p className="font-body text-[14px] md:text-[15px] leading-[1.7] text-foreground/60 max-w-xl">
            Explore 40,465 authentic traditions of the Messenger of Allah (ﷺ) across 9 canonical collections and 410 thematic chapters.
          </p>
        </div>


        <div className="flex items-center gap-3">
          <div className="glass-card px-4 py-2.5 rounded-2xl flex items-center gap-2.5 text-xs font-display font-medium text-foreground/80">
            <ScrollText className="w-4 h-4 text-[hsl(var(--accent-2))]" />
            <span>9 Canonical Books • 40,465 Hadiths</span>
          </div>
        </div>
      </div>


      {selectedBook && (
        <div className="glass-panel p-3 px-4 flex items-center gap-3 text-xs font-display text-muted-foreground">
          <button
            type="button"
            onClick={() => {
              setSelectedBook(null);
              setSelectedChapter(null);
              setHadiths([]);
            }}
            className="hover:text-foreground flex items-center gap-1.5 font-semibold transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> All Collections
          </button>
          <span>/</span>
          <span
            onClick={() => setSelectedChapter(null)}
            className={`cursor-pointer transition-colors ${!selectedChapter ? 'text-[hsl(var(--accent-2))] font-bold' : 'hover:text-foreground'
              }`}
          >
            {selectedBook.bookName}
          </span>
          {selectedChapter && (
            <>
              <span>/</span>
              <span className="text-foreground font-semibold truncate max-w-xs md:max-w-md">
                Ch {selectedChapter.chapterNumber}: {selectedChapter.chapterEnglish}
              </span>
            </>
          )}
        </div>
      )}


      {!selectedBook && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {books.map((book) => (
            <button
              type="button"
              key={book.id}
              onClick={() => handleSelectBook(book)}
              className="glass-card glass-hover glass-shimmer p-6 text-left flex flex-col justify-between group cursor-pointer hover:border-[hsl(var(--accent-2))]/50 hover:shadow-[0_0_30px_hsl(var(--accent-2)/0.25)]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[hsl(var(--accent-2))] group-hover:bg-[hsl(var(--accent-2))] group-hover:text-background transition-all duration-300 shadow-inner">
                    <Book className="w-6 h-6" />
                  </div>
                  <span className="font-display text-xs font-bold text-[hsl(var(--accent-2))] bg-[hsl(var(--accent-2)/0.12)] border border-[hsl(var(--accent-2)/0.25)] px-3 py-1 rounded-full">
                    {book.hadiths_count > 0 ? `${book.hadiths_count.toLocaleString()} Hadiths` : 'Index'}
                  </span>
                </div>
                <h4 className="font-display font-bold text-lg text-foreground group-hover:text-[hsl(var(--accent-2))] transition-colors">
                  {book.bookName}
                </h4>
                <p className="font-body text-xs text-muted-foreground mt-1">Author: {book.writerName}</p>
                <p className="font-body text-[11px] text-muted-foreground/60">Passed away: {book.writerDeath}</p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs font-display font-semibold text-[hsl(var(--accent-2))]">
                <span>{book.chapters_count} Chapters</span>
                <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Browse Chapters <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </button>
          ))}
        </div>
      )}


      {selectedBook && !selectedChapter && (
        <div className="space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-muted-foreground absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder={`Search ${selectedBook.bookName} chapters...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl pl-11 pr-4 py-3.5 font-display text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[hsl(var(--accent-2))]/50 focus:ring-1 focus:ring-[hsl(var(--accent-2))]/20 transition-all shadow-inner"
            />
          </div>

          {loading ? (
            <div className="py-20 text-center font-display text-muted-foreground animate-pulse">
              Loading collection chapters...
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {filteredChapters.map((ch) => (
                <button
                  type="button"
                  key={ch.id}
                  onClick={() => handleSelectChapter(ch)}
                  className="glass-card glass-hover glass-shimmer p-4 text-left flex items-center justify-between group cursor-pointer hover:border-[hsl(var(--accent-2))]/40"
                >
                  <div className="flex items-center gap-3.5 min-w-0 pr-3">
                    <span className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 text-[hsl(var(--accent-2))] font-display font-bold text-xs flex items-center justify-center shrink-0">
                      {ch.chapterNumber}
                    </span>
                    <div className="min-w-0">
                      <h5 className="font-display font-semibold text-sm text-foreground group-hover:text-[hsl(var(--accent-2))] transition-colors truncate">
                        {ch.chapterEnglish}
                      </h5>
                      <p className="text-xs text-muted-foreground font-arabic text-right truncate">
                        {ch.chapterArabic}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-[hsl(var(--accent-2))] shrink-0 group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}


      {selectedChapter && (
        <div className="space-y-6">
          {loading ? (
            <div className="py-20 text-center font-display text-muted-foreground animate-pulse">
              Loading authentic Hadiths...
            </div>
          ) : hadiths.length === 0 ? (
            <div className="glass-panel py-16 text-center text-muted-foreground font-display">
              No hadith texts found in this specific chapter index.
            </div>
          ) : (
            hadiths.map((hadith) => {
              const bookmarkId = `hadith_${hadith.bookSlug}_${hadith.hadithNumber}`;
              const saved = isBookmarked(bookmarkId);

              return (
                <div
                  key={hadith.id}
                  className="glass-card p-6 md:p-8 space-y-5 border border-white/10 hover:border-[hsl(var(--accent-2))]/40 transition-all rounded-3xl"
                >

                  <div className="flex items-center justify-between text-xs text-muted-foreground border-b border-white/5 pb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="font-display bg-[hsl(var(--accent-2)/0.12)] text-[hsl(var(--accent-2))] border border-[hsl(var(--accent-2)/0.25)] px-3 py-1 rounded-full font-bold">
                        Hadith #{hadith.hadithNumber}
                      </span>
                      {hadith.status && (
                        <span className="bg-primary/15 text-primary px-2.5 py-0.5 rounded-full text-[11px] font-display font-semibold border border-primary/25">
                          {hadith.status}
                        </span>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        if (saved) {
                          removeBookmark(bookmarkId);
                        } else {
                          addBookmark({
                            id: bookmarkId,
                            type: 'hadith',
                            title: `${selectedBook?.bookName} #${hadith.hadithNumber}`,
                            subtitle: hadith.englishNarrator,
                            arabicText: hadith.hadithArabic,
                            translation: hadith.hadithEnglish,
                            link: `/hadith`,
                          });
                        }
                      }}
                      className={`p-2 rounded-xl transition-all cursor-pointer ${saved
                          ? 'text-amber-400 bg-amber-500/15 border border-amber-500/30'
                          : 'text-muted-foreground hover:text-foreground hover:bg-white/10'
                        }`}
                      title="Bookmark Hadith"
                    >
                      {saved ? <Check className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                    </button>
                  </div>


                  {hadith.englishNarrator && (
                    <p className="text-xs font-display font-medium text-foreground/70 italic">
                      {hadith.englishNarrator}
                    </p>
                  )}


                  <div className="text-right py-2">
                    <p className="font-arabic text-xl md:text-2xl text-foreground leading-loose">
                      {hadith.hadithArabic}
                    </p>
                  </div>


                  {hadith.hadithEnglish && (
                    <div className="pt-3 border-t border-white/5 font-body">
                      <p className="text-sm md:text-[15px] text-foreground/90 leading-relaxed">
                        {hadith.hadithEnglish}
                      </p>
                    </div>
                  )}


                  {hadith.hadithUrdu && (
                    <div className="pt-2 text-right">
                      <p className="font-arabic text-sm text-foreground/70">
                        {hadith.hadithUrdu}
                      </p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};
