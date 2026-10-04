import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import {
  ArrowLeft,
  BookOpen,
  Sparkles,
  HelpCircle,
  Award,
  CheckCircle2,
  XCircle,
  ExternalLink,
  X,
} from 'lucide-react';
import {
  getProphetById,
  getProphetChapters,
  getProphetKidsChapters,
  getProphetLessons,
  getProphetQuiz,
} from '../services/contentLoader';
import { useSettings } from '../hooks/useSettings';
import type {
  StoryChapter,
  KidsChapter,
  Lesson,
  QuizQuestion,
  QuranReference,
  HadithReference,
  StoryReference,
} from '../data-source/types/prophet';

export const ProphetDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useSettings();

  const prophet = id ? getProphetById(id) : undefined;

  const [activeTab, setActiveTab] = useState<'story' | 'kids' | 'lessons' | 'quiz'>('story');
  const [chapters, setChapters] = useState<StoryChapter[]>([]);
  const [kidsChapters, setKidsChapters] = useState<KidsChapter[]>([]);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [loading, setLoading] = useState(true);

  // Citation modal state
  const [activeCitation, setActiveCitation] = useState<StoryReference | null>(null);

  // Quiz state
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  useEffect(() => {
    if (!id) return;
    let ignore = false;

    Promise.all([
      getProphetChapters(id, language),
      getProphetKidsChapters(id, language),
      getProphetLessons(id),
      getProphetQuiz(id),
    ]).then(([chs, kids, less, quiz]) => {
      if (!ignore) {
        setChapters(chs);
        setKidsChapters(kids);
        setLessons(less);
        setQuizQuestions(quiz);
        setSelectedAnswers({});
        setQuizSubmitted(false);
        setLoading(false);
        setActiveTab((prev) => {
          if (prev === 'kids' && kids.length === 0) return 'story';
          if (prev === 'lessons' && less.length === 0) return 'story';
          if (prev === 'quiz' && quiz.length === 0) return 'story';
          return prev;
        });
      }
    });

    return () => {
      ignore = true;
    };
  }, [id, language]);

  if (!prophet) {
    return (
      <div className="py-24 text-center space-y-4">
        <h3 className="text-xl font-bold text-white">Prophet not found</h3>
        <Link to="/prophets" className="text-emerald-400 font-medium inline-flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" /> Back to all prophets
        </Link>
      </div>
    );
  }

  const name = prophet.name[language] || prophet.name.en;
  const title = prophet.title[language] || prophet.title.en;

  const handleSelectQuizOption = (questionId: string, index: number) => {
    if (quizSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: index }));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        score += 1;
      }
    });
    return score;
  };

  return (
    <div className="space-y-8">

      <Link
        to="/prophets"
        className="inline-flex items-center gap-2 text-xs font-display font-semibold text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" /> Back to 25 Prophets
      </Link>


      <div className="glass-panel p-6 md:p-10 border border-white/10 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-display font-bold bg-[hsl(var(--accent-2)/0.15)] text-[hsl(var(--accent-2))] border border-[hsl(var(--accent-2)/0.25)] px-3.5 py-1 rounded-full">
                Prophet #{prophet.order}
              </span>
              <span className="font-display text-xs text-muted-foreground">
                Mentioned {prophet.quranMentionCount} times in Quran
              </span>
            </div>
            <h1 className="font-display text-[clamp(28px,5vw,52px)] font-bold tracking-tighter text-foreground">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60">
                {name}
              </span>
            </h1>
            <p className="font-display text-base text-primary font-semibold">{title}</p>
          </div>

          <div className="text-right">
            <span className="font-arabic text-4xl md:text-6xl text-[hsl(var(--accent-2))] font-bold block leading-relaxed drop-shadow-md">
              {prophet.name.ar}
            </span>
          </div>
        </div>


        <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-body">
          <div className="glass-card p-3 rounded-xl border border-white/5">
            <span className="font-display  tracking-wider text-[10px] text-muted-foreground font-semibold block mb-1">Era</span>
            <span className="font-display font-semibold text-foreground text-sm">{prophet.era[language] || prophet.era.en}</span>
          </div>
          <div className="glass-card p-3 rounded-xl border border-white/5">
            <span className="font-display  tracking-wider text-[10px] text-muted-foreground font-semibold block mb-1">Nation</span>
            <span className="font-display font-semibold text-foreground text-sm">{prophet.nation[language] || prophet.nation.en}</span>
          </div>
          <div className="glass-card p-3 rounded-xl border border-white/5">
            <span className="font-display  tracking-wider text-[10px] text-muted-foreground font-semibold block mb-1">Spouse</span>
            <span className="font-display font-semibold text-foreground text-sm">{prophet.family.spouse?.join(', ') || 'N/A'}</span>
          </div>
          <div className="glass-card p-3 rounded-xl border border-white/5">
            <span className="font-display  tracking-wider text-[10px] text-muted-foreground font-semibold block mb-1">Children</span>
            <span className="font-display font-semibold text-foreground text-sm truncate block">
              {[...(prophet.family.sons || []), ...(prophet.family.daughters || [])].join(', ') || 'N/A'}
            </span>
          </div>
        </div>
      </div>


      <div className="glass-panel p-1.5 rounded-2xl flex items-center gap-1.5 overflow-x-auto">
        <button
          type="button"
          onClick={() => setActiveTab('story')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-display font-semibold whitespace-nowrap transition-all duration-300 ${activeTab === 'story'
            ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
            : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
            }`}
        >
          <BookOpen className="w-3.5 h-3.5" /> Story Chapters ({chapters.length})
        </button>

        {kidsChapters.length > 0 && (
          <button
            type="button"
            onClick={() => setActiveTab('kids')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-display font-semibold whitespace-nowrap transition-all duration-300 ${activeTab === 'kids'
              ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
              : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
              }`}
          >
            <Sparkles className="w-3.5 h-3.5" /> Kids Mode ({kidsChapters.length})
          </button>
        )}

        {lessons.length > 0 && (
          <button
            type="button"
            onClick={() => setActiveTab('lessons')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-display font-semibold whitespace-nowrap transition-all duration-300 ${activeTab === 'lessons'
              ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
              : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
              }`}
          >
            <Award className="w-3.5 h-3.5" /> Moral Lessons ({lessons.length})
          </button>
        )}

        {quizQuestions.length > 0 && (
          <button
            type="button"
            onClick={() => setActiveTab('quiz')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-display font-semibold whitespace-nowrap transition-all duration-300 ${activeTab === 'quiz'
              ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
              : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
              }`}
          >
            <HelpCircle className="w-3.5 h-3.5" /> Interactive Quiz ({quizQuestions.length})
          </button>
        )}
      </div>


      {activeTab === 'story' && (
        <div className="space-y-6">
          {loading ? (
            <div className="py-20 text-center font-display text-muted-foreground animate-pulse">Loading story chapters...</div>
          ) : chapters.length === 0 ? (
            <div className="glass-panel py-16 text-center text-muted-foreground font-display">Chapters are being transcribed.</div>
          ) : (
            chapters.map((ch) => (
              <article
                key={ch.id}
                className="glass-card p-6 md:p-8 space-y-5 rounded-3xl border border-white/10 hover:border-primary/40 transition-all"
              >
                <div className="border-b border-white/10 pb-4">
                  <span className="font-display text-xs font-bold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                    Chapter {ch.order}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mt-2">{ch.title}</h3>
                  {ch.summary && <p className="font-body text-xs text-muted-foreground mt-1.5 italic">{ch.summary}</p>}
                </div>


                <div className="space-y-5 font-body text-[15px] leading-[1.8] text-foreground/80">
                  {ch.paragraphs.map((p) => (
                    <div key={p.id} className="space-y-2.5">
                      <p>{p.text}</p>

                      {p.references && p.references.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-1.5">
                          {p.references.map((ref, rIdx) => {
                            if ('type' in ref && ref.type === 'quran') {
                              const q = ref as QuranReference;
                              return (
                                <button
                                  type="button"
                                  key={rIdx}
                                  onClick={() => setActiveCitation(ref)}
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-display font-medium bg-primary/10 text-primary border border-primary/25 hover:bg-primary/20 transition-all cursor-pointer shadow-sm"
                                >
                                  <BookOpen className="w-3.5 h-3.5" />
                                  Quran {q.surah}:{q.ayahStart}
                                  {q.ayahEnd ? `-${q.ayahEnd}` : ''} ({q.surahName.en})
                                </button>
                              );
                            }
                            if ('type' in ref && ref.type === 'hadith') {
                              const h = ref as HadithReference;
                              return (
                                <button
                                  type="button"
                                  key={rIdx}
                                  onClick={() => setActiveCitation(ref)}
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-display font-medium bg-[hsl(var(--accent-2)/0.12)] text-[hsl(var(--accent-2))] border border-[hsl(var(--accent-2)/0.25)] hover:bg-[hsl(var(--accent-2)/0.2)] transition-all cursor-pointer shadow-sm"
                                >
                                  Hadith: {h.collection} #{h.hadithNumber}
                                </button>
                              );
                            }
                            return null;
                          })}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </article>
            ))
          )}
        </div>
      )}


      {activeTab === 'kids' && kidsChapters.length > 0 && (
        <div className="space-y-6">
          {kidsChapters.map((kc) => (
            <div
              key={kc.id}
              className="glass-card glass-hover glass-shimmer p-6 md:p-8 border border-[hsl(var(--accent-2)/0.3)] bg-[hsl(var(--accent-2)/0.04)] space-y-4 rounded-3xl"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-[hsl(var(--accent-2)/0.2)] text-[hsl(var(--accent-2))] font-display font-bold text-xs flex items-center justify-center">
                  {kc.order}
                </span>
                <h4 className="font-display text-xl font-bold text-foreground">{kc.title}</h4>
              </div>
              <p className="font-body text-[16px] leading-[1.8] text-foreground/90">{kc.content}</p>
            </div>
          ))}
        </div>
      )}


      {activeTab === 'lessons' && lessons.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {lessons.map((lesson, idx) => (
            <div
              key={lesson.id || idx}
              className="glass-card glass-hover glass-shimmer p-6 space-y-3 rounded-2xl border border-white/10 hover:border-primary/40"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-display font-bold text-base text-foreground">
                  {lesson.title[language] || lesson.title.en}
                </h4>
              </div>
              <p className="font-body text-sm leading-[1.7] text-foreground/70">
                {lesson.description[language] || lesson.description.en}
              </p>
            </div>
          ))}
        </div>
      )}


      {activeTab === 'quiz' && quizQuestions.length > 0 && (
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="space-y-6">
              {quizSubmitted && (
                <div className="glass-panel p-6 border border-primary/30 text-center space-y-2">
                  <h4 className="font-display text-2xl font-extrabold text-foreground">
                    Your Score: <span className="text-primary">{calculateScore()} / {quizQuestions.length}</span>
                  </h4>
                  <p className="font-body text-xs text-muted-foreground">
                    {calculateScore() === quizQuestions.length
                      ? 'SubhanAllah! Perfect score!'
                      : 'Great effort! Review the detailed explanations below.'}
                  </p>
                </div>
              )}

              {quizQuestions.map((q, qIdx) => {
                const questionText = q.question[language] || q.question.en;
                const explanationText = q.explanation[language] || q.explanation.en;
                const selected = selectedAnswers[q.id];

                return (
                  <div
                    key={q.id}
                    className="glass-card p-6 md:p-8 rounded-3xl border border-white/10 space-y-5"
                  >
                    <h5 className="font-display font-bold text-base md:text-lg text-foreground">
                      {qIdx + 1}. {questionText}
                    </h5>

                    <div className="space-y-2.5">
                      {q.options.map((opt, oIdx) => {
                        const optText = opt[language] || opt.en;
                        const isChosen = selected === oIdx;
                        const isCorrect = q.correctIndex === oIdx;

                        let style = 'bg-white/5 border-white/10 text-foreground/80 hover:bg-white/10';
                        if (quizSubmitted) {
                          if (isCorrect) {
                            style = 'bg-primary/20 border-primary text-primary font-bold shadow-md';
                          } else if (isChosen && !isCorrect) {
                            style = 'bg-destructive/20 border-destructive text-destructive';
                          }
                        } else if (isChosen) {
                          style = 'bg-primary/20 border-primary text-primary font-semibold shadow-md';
                        }

                        return (
                          <button
                            type="button"
                            key={oIdx}
                            onClick={() => handleSelectQuizOption(q.id, oIdx)}
                            className={`w-full text-left p-4 rounded-xl border font-display text-sm transition-all flex items-center justify-between cursor-pointer ${style}`}
                          >
                            <span>{optText}</span>
                            {quizSubmitted && isCorrect && <CheckCircle2 className="w-4 h-4 text-primary" />}
                            {quizSubmitted && isChosen && !isCorrect && <XCircle className="w-4 h-4 text-destructive" />}
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10 text-xs font-body text-foreground/80">
                        <span className="font-display font-bold text-primary block mb-1  tracking-wider text-[10px]">Explanation:</span>
                        {explanationText}
                      </div>
                    )}
                  </div>
                );
              })}

              {!quizSubmitted ? (
                <button
                  type="button"
                  onClick={() => setQuizSubmitted(true)}
                  disabled={Object.keys(selectedAnswers).length === 0}
                  className="w-full py-4 rounded-2xl bg-primary hover:bg-primary/90 disabled:opacity-50 text-primary-foreground font-display font-bold text-sm shadow-xl shadow-primary/20 transition-all cursor-pointer"
                >
                  Submit Quiz Answers
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedAnswers({});
                    setQuizSubmitted(false);
                  }}
                  className="w-full py-4 rounded-2xl bg-white/10 hover:bg-white/15 text-foreground font-display font-bold text-sm border border-white/10 transition-all cursor-pointer"
                >
                  Retake Quiz
                </button>
              )}
            </div>
        </div>
      )}


      {activeCitation && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="glass-panel max-w-lg w-full p-6 md:p-8 shadow-2xl space-y-4 border border-white/15 bg-card/95">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="font-display font-bold text-sm text-primary flex items-center gap-2">
                <ExternalLink className="w-4 h-4" /> Scriptural Reference
              </span>
              <button
                type="button"
                onClick={() => setActiveCitation(null)}
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {'type' in activeCitation && activeCitation.type === 'quran' && (
              <div className="space-y-4 font-body">
                <div className="font-display text-xs text-muted-foreground">
                  Surah {(activeCitation as QuranReference).surahName.en} [
                  {(activeCitation as QuranReference).surah}:
                  {(activeCitation as QuranReference).ayahStart}
                  {(activeCitation as QuranReference).ayahEnd ? `-${(activeCitation as QuranReference).ayahEnd}` : ''}
                  ]
                </div>
                {(activeCitation as QuranReference).arabicText && (
                  <p className="font-quran text-xl text-right text-foreground leading-loose">
                    {(activeCitation as QuranReference).arabicText}
                  </p>
                )}
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {(activeCitation as QuranReference).translation.en ||
                    (activeCitation as QuranReference).translation.bn}
                </p>
              </div>
            )}

            {'type' in activeCitation && activeCitation.type === 'hadith' && (
              <div className="space-y-4 font-body">
                <div className="font-display text-xs text-[hsl(var(--accent-2))] font-bold">
                  {(activeCitation as HadithReference).collection} #
                  {(activeCitation as HadithReference).hadithNumber}
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {(activeCitation as HadithReference).text.en ||
                    (activeCitation as HadithReference).text.bn}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
