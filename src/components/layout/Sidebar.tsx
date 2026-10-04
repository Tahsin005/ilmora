import React from 'react';
import { NavLink } from 'react-router';
import {
  LayoutDashboard,
  BookOpen,
  ScrollText,
  Users,
  Heart,
  Clock,
  Star,
  Coins,
  Shield,
  Bookmark,
  Languages,
} from 'lucide-react';
import { type AppLanguage } from '../../context/settings-context';
import { useSettings } from '../../hooks/useSettings';

const NAV_ITEMS = [
  { to: '/', label: { en: 'Dashboard', bn: 'ড্যাশবোর্ড', ar: 'الرئيسية' }, icon: LayoutDashboard },
  { to: '/quran', label: { en: 'Holy Quran', bn: 'পবিত্র কুরআন', ar: 'القرآن الكريم' }, icon: BookOpen },
  { to: '/hadith', label: { en: 'Hadith Library', bn: 'হাদিস সংকলন', ar: 'مكتبة الحديث' }, icon: ScrollText },
  { to: '/prophets', label: { en: '25 Prophets', bn: '২৫ জন নবী', ar: 'قصص الأنبياء' }, icon: Users },
  { to: '/prayer-times', label: { en: 'Prayer & Qibla', bn: 'নামাজ ও কিবলা', ar: 'الصلاة والقبلة' }, icon: Clock },
  { to: '/duas', label: { en: 'Duas & Adhkar', bn: 'দোয়া ও জিকির', ar: 'الأدعية والأذكার' }, icon: Heart },
  { to: '/names-of-allah', label: { en: '99 Names', bn: 'আল্লাহর ৯৯ নাম', ar: 'أسماء الله الحسنى' }, icon: Star },
  { to: '/zakat', label: { en: 'Zakat Calculator', bn: 'যাকাত ক্যালকুলেটর', ar: 'حاسبة الزكاة' }, icon: Coins },
  { to: '/ruqyah', label: { en: 'Ruqyah Healing', bn: 'রুকইয়াহ চিকিৎসা', ar: 'الرقية الشرعية' }, icon: Shield },
  { to: '/bookmarks', label: { en: 'Saved Items', bn: 'সংরক্ষিত তালিকা', ar: 'المحفوظات' }, icon: Bookmark },
];

export const Sidebar: React.FC = () => {
  const { language, setLanguage } = useSettings();

  const handleLangToggle = (lang: AppLanguage) => {
    setLanguage(lang);
  };

  return (
    <aside className="hidden lg:flex flex-col w-64 bg-background/60 border-r border-white/[0.08] p-4 h-screen sticky top-0 backdrop-blur-2xl justify-between select-none z-30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.5)]">
      <div>

        <div className="flex items-center gap-3 px-3 py-4 mb-3 border-b border-white/[0.06]">
          <div className="w-11 h-11 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center shadow-[0_0_20px_hsl(var(--primary)/0.25)] text-primary font-bold text-2xl hover:-translate-y-1 transition-transform duration-300">
            إ
          </div>
          <div>
            <h1 className="font-display font-bold text-xl tracking-tight text-foreground flex items-center gap-1.5">
              Ilmora <span className="text-[10px] font-bold tracking-widest px-2 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/30">علم</span>
            </h1>
            <p className="text-[11px] font-body text-muted-foreground">Knowledge & Spiritual Light</p>
          </div>
        </div>


        <div className="px-3 mb-2 font-display text-[10px] font-bold tracking-[0.15em] text-muted-foreground/70">
          Navigation
        </div>


        <nav className="space-y-1 overflow-y-auto max-h-[calc(100vh-230px)] pr-1 scrollbar-thin">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-display font-medium transition-all duration-300 relative group ${isActive
                    ? 'bg-white/[0.08] text-foreground border border-white/[0.14] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_4px_12px_rgba(0,0,0,0.3)]'
                    : 'text-muted-foreground hover:text-foreground hover:bg-white/[0.04] hover:-translate-y-0.5'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon className={`w-4 h-4 shrink-0 transition-colors ${isActive ? 'text-primary' : 'group-hover:text-primary'}`} />
                    <span className="truncate">{item.label[language] || item.label.en}</span>
                    {isActive && (
                      <div className="absolute right-3 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>


      <div className="pt-3 border-t border-white/[0.06] space-y-2.5">
        <div className="flex items-center justify-between px-2 text-xs text-muted-foreground font-display">
          <span className="flex items-center gap-1.5 font-medium">
            <Languages className="w-3.5 h-3.5 text-primary" /> Language
          </span>
          <div className="flex bg-white/[0.04] rounded-xl p-0.5 border border-white/[0.08]">
            {(['en', 'bn', 'ar'] as AppLanguage[]).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => handleLangToggle(l)}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all duration-300 ${language === l
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                  }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};
