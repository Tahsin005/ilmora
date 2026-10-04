import React, { useState } from 'react';
import { Shield, Sparkles, BookOpen, ChevronRight, ArrowLeft, HeartPulse, CheckCircle2 } from 'lucide-react';
import {
  getRuqyahProgram,
  getRuqyahArticle,
} from '../services/islamicApiService';

interface ProgramItem {
  title?: string;
  arabic?: string;
  transliteration?: string;
  translation?: string;
  instruction?: string;
}

interface ProgramResponse {
  data?: ProgramItem[];
}

interface ArticleSection {
  heading?: string;
  body?: string;
  text?: string;
}

interface ArticleResponse {
  content?: string;
  sections?: ArticleSection[];
  data?: unknown;
}

export const RuqyahPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'programs' | 'guides'>('programs');
  const [selectedProgram, setSelectedProgram] = useState<{ title: string; data: ProgramResponse } | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<{ title: string; data: ArticleResponse } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleOpenProgram = async (slug: string, title: string) => {
    setLoading(true);
    try {
      const res = await getRuqyahProgram(slug);
      setSelectedProgram({ title, data: res as ProgramResponse });
    } finally {
      setLoading(false);
    }
  };

  const handleOpenArticle = async (slug: string, title: string) => {
    setLoading(true);
    try {
      const res = await getRuqyahArticle(slug);
      setSelectedArticle({ title, data: res as ArticleResponse });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
        <div>
          <div className="font-display text-[11px] font-medium tracking-[0.15em] text-muted-foreground mb-3 flex items-center gap-2">
            <HeartPulse className="w-3.5 h-3.5 text-primary" />
            SPIRITUAL MEDICINE & REVELATION
          </div>
          <h1 className="font-display text-[clamp(32px,5vw,56px)] font-bold tracking-tighter mb-4 leading-none">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50">
              Ruqyah{" "}
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary/80 to-primary/40">
              Spiritual Healing
            </span>
          </h1>
          <p className="font-body text-[14px] md:text-[15px] leading-[1.7] text-foreground/60 max-w-xl">
            Authentic Quranic and prophetic recitations and Islamic educational guides for divine protection, peace of heart, and spiritual cure.
          </p>
        </div>


        <div className="glass-panel p-1 rounded-2xl flex items-center gap-1 border border-white/10 w-fit">
          <button
            type="button"
            onClick={() => {
              setActiveTab('programs');
              setSelectedArticle(null);
            }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-display text-xs font-semibold tracking-wider transition-all duration-300 ${activeTab === 'programs'
              ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
              : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
              }`}
          >
            <Sparkles className="w-3.5 h-3.5" /> Ruqyah Programs
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab('guides');
              setSelectedProgram(null);
            }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-display text-xs font-semibold tracking-wider transition-all duration-300 ${activeTab === 'guides'
              ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
              : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
              }`}
          >
            <BookOpen className="w-3.5 h-3.5" /> 13 Educational Guides
          </button>
        </div>
      </div>


      {(selectedProgram || selectedArticle) && (
        <button
          type="button"
          onClick={() => {
            setSelectedProgram(null);
            setSelectedArticle(null);
          }}
          className="font-display text-[13px] tracking-wide font-medium inline-flex items-center gap-2.5 bg-white/5 text-foreground/80 px-4 py-2 rounded-full border border-white/10 hover:bg-white/10 hover:text-primary transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4" /> Back to all {activeTab === 'programs' ? 'programs' : 'guides'}
        </button>
      )}


      {loading && (
        <div className="py-24 text-center font-display text-muted-foreground animate-pulse">
          Loading spiritual healing content...
        </div>
      )}


      {!loading && activeTab === 'programs' && !selectedProgram && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Brief Ruqyah (From Quran)', slug: 'brief-ruqya_from-quran', desc: 'Short emergency recitation (Al-Fatiha, Ayat al-Kursi, Al-Ikhlas, Al-Falaq, An-Nas).' },
            { title: 'Brief Ruqyah (From Sunnah)', slug: 'brief-ruqya_from-sunnah', desc: 'Authentic prophetic duas and physical gestures for health and relief.' },
            { title: 'Medium Ruqyah (From Quran)', slug: 'a-medium-ruqya_from-quran', desc: 'Comprehensive protection verses from across the Holy Quran.' },
            { title: 'Medium Ruqyah (From Sunnah)', slug: 'a-medium-ruqya_from-sunnah', desc: 'Extensive supplications narrated in Sahih Bukhari and Muslim.' },
            { title: 'Long Ruqyah (From Quran)', slug: 'a-long-ruqya_from-quran', desc: 'Exhaustive full-length Quranic healing program.' },
            { title: 'Long Ruqyah (From Sunnah)', slug: 'a-long-ruqya_from-sunnah', desc: 'Complete compendium of Sunnah invocations against ailments.' },
          ].map((prog) => (
            <button
              type="button"
              key={prog.slug}
              onClick={() => handleOpenProgram(prog.slug, prog.title)}
              className="glass-card glass-hover glass-shimmer p-7 rounded-2xl text-left border border-white/10 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.25)] flex flex-col justify-between group transition-all duration-500 cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 border border-primary/20 group-hover:scale-110 group-hover:border-primary/40 transition-all duration-300">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                  {prog.title}
                </h3>
                <p className="font-body text-xs text-foreground/60 mt-2.5 leading-relaxed">{prog.desc}</p>
              </div>
              <span className="mt-6 pt-4 border-t border-white/10 font-display text-xs text-primary font-semibold flex items-center gap-1.5 group-hover:translate-x-1.5 transition-transform duration-300">
                Start Recitation &rarr;
              </span>
            </button>
          ))}
        </div>
      )}


      {!loading && selectedProgram && (
        <div className="glass-panel rounded-3xl p-6 md:p-10 border border-white/10 space-y-8 shadow-2xl relative overflow-hidden">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center border border-primary/20">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display text-[10px] font-bold  tracking-widest text-primary">Prescribed Program</div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">{selectedProgram.title}</h2>
            </div>
          </div>

          <div className="space-y-6">
            {Array.isArray(selectedProgram.data?.data) ? (
              selectedProgram.data.data.map((item: ProgramItem, idx: number) => (
                <div key={idx} className="glass-card p-6 md:p-7 rounded-2xl border border-white/10 space-y-4 hover:border-primary/30 transition-all">
                  {item.title && (
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary font-mono text-xs flex items-center justify-center font-bold">
                        {idx + 1}
                      </span>
                      <h3 className="font-display font-bold text-foreground text-base">{item.title}</h3>
                    </div>
                  )}
                  {item.arabic && (
                    <p className="font-quran text-2xl md:text-3xl text-right text-primary leading-[2.2] tracking-wide py-2">
                      {item.arabic}
                    </p>
                  )}
                  {item.transliteration && (
                    <p className="text-xs text-[hsl(var(--accent-2))] font-mono italic opacity-90">{item.transliteration}</p>
                  )}
                  {item.translation && (
                    <p className="font-body text-sm text-foreground/80 pt-3 border-t border-white/10 leading-relaxed">
                      {item.translation}
                    </p>
                  )}
                  {item.instruction && (
                    <div className="font-display text-xs text-primary/90 bg-primary/10 p-3 rounded-xl border border-primary/20 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
                      <span><strong>Instruction:</strong> {item.instruction}</span>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p className="font-body text-muted-foreground">Complete recitation verses available in program database.</p>
            )}
          </div>
        </div>
      )}


      {!loading && activeTab === 'guides' && !selectedArticle && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Introduction to Ruqyah', slug: 'introduction-to-ruqyah', desc: 'Rules, conditions, and principles of Islamic faith healing.' },
            { title: 'Evil Eye & Envy (Ayn & Hasad)', slug: 'evil-eye-and-envy', desc: 'Symptoms, prevention, and prescribed cures from the Prophet.' },
            { title: 'Protection From Jinn', slug: 'protect-yourself-from-jinn', desc: 'Fortifying the home, morning/evening dhikr, and Islamic boundaries.' },
            { title: 'Black Magic (Sihr) & Its Cures', slug: 'black-magic-sihr', desc: 'Identification and undoing of spells according to the Sunnah.' },
            { title: '7-Day Detoxification Program', slug: '7-day-detoxification-program', desc: 'Holistic prophetic spiritual diet and water regimen.' },
            { title: 'Types of Hijamah (Cupping)', slug: 'types-of-hijamah-bloodletting', desc: 'Prophetic physical therapy and its sunnah days.' },
            { title: 'About the Qualified Raqi', slug: 'about-raqi', desc: 'How to distinguish legitimate Islamic healers from charlatans.' },
            { title: 'The Ruqyah Bath Against Sihr', slug: 'the-ruqyah-bath-against-sihr', desc: 'Preparation of Sidr leaves and Quranic water.' },
            { title: 'Waswasah (Whisperings)', slug: 'waswasah-whisperings', desc: 'Overcoming obsessive doubts in prayer and faith.' },
          ].map((art) => (
            <button
              type="button"
              key={art.slug}
              onClick={() => handleOpenArticle(art.slug, art.title)}
              className="glass-card glass-hover glass-shimmer p-7 rounded-2xl text-left border border-white/10 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.25)] flex flex-col justify-between group transition-all duration-500 cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 text-foreground/80 flex items-center justify-center mb-5 border border-white/10 group-hover:scale-110 group-hover:border-primary/40 group-hover:text-primary transition-all duration-300">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                  {art.title}
                </h3>
                <p className="font-body text-xs text-foreground/60 mt-2.5 leading-relaxed">{art.desc}</p>
              </div>
              <span className="mt-6 pt-4 border-t border-white/10 font-display text-xs text-primary font-semibold flex items-center gap-1.5 group-hover:translate-x-1.5 transition-transform duration-300">
                Read Guide <ChevronRight className="w-4 h-4" />
              </span>
            </button>
          ))}
        </div>
      )}


      {!loading && selectedArticle && (
        <div className="glass-panel rounded-3xl p-6 md:p-10 border border-white/10 space-y-8 shadow-2xl relative overflow-hidden">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center border border-primary/20">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display text-[10px] font-bold  tracking-widest text-primary">Islamic Reference Guide</div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">{selectedArticle.title}</h2>
            </div>
          </div>

          <div className="space-y-6 font-body text-sm leading-relaxed text-foreground/80">
            {selectedArticle.data?.content ? (
              <div
                className="prose prose-invert max-w-none text-foreground/80 leading-relaxed space-y-4 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground [&_p]:leading-[1.8] [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5"
                dangerouslySetInnerHTML={{ __html: selectedArticle.data.content }}
              />
            ) : selectedArticle.data?.sections ? (
              selectedArticle.data.sections.map((sec: ArticleSection, idx: number) => (
                <div key={idx} className="glass-card p-6 rounded-2xl border border-white/10 space-y-2">
                  <h3 className="font-display font-bold text-lg text-foreground">{sec.heading}</h3>
                  <p className="font-body text-foreground/70 leading-relaxed">{sec.body || sec.text}</p>
                </div>
              ))
            ) : (
              <p className="font-body text-muted-foreground">
                {JSON.stringify(selectedArticle.data?.data || selectedArticle.data, null, 2)}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RuqyahPage;
