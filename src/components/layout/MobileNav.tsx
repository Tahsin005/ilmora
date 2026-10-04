import React, { useState } from 'react';
import { NavLink } from 'react-router';
import {
  LayoutDashboard,
  BookOpen,
  ScrollText,
  Users,
  Grid,
  Heart,
  Clock,
  Star,
  Coins,
  Shield,
  Bookmark,
  X,
} from 'lucide-react';
import { useSettings } from '../../hooks/useSettings';

export const MobileNav: React.FC = () => {
  const { language } = useSettings();
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  const MORE_ITEMS = [
    { to: '/prayer-times', label: { en: 'Prayer & Qibla', bn: 'নামাজ ও কিবলা', ar: 'الصلاة والقبلة' }, icon: Clock },
    { to: '/duas', label: { en: 'Duas & Adhkar', bn: 'দোয়া ও জিকির', ar: 'الأدعية والأذكار' }, icon: Heart },
    { to: '/names-of-allah', label: { en: '99 Names', bn: 'আল্লাহর ৯৯ নাম', ar: 'أسماء الله الحسنى' }, icon: Star },
    { to: '/zakat', label: { en: 'Zakat Calculator', bn: 'যাকাত ক্যালকুলেটর', ar: 'حاسبة الزكاة' }, icon: Coins },
    { to: '/ruqyah', label: { en: 'Ruqyah Healing', bn: 'রুকইয়াহ চিকিৎসা', ar: 'الرقية الشرعية' }, icon: Shield },
    { to: '/bookmarks', label: { en: 'Saved Items', bn: 'সংরক্ষিত তালিকা', ar: 'المحفوظات' }, icon: Bookmark },
  ];

  return (
    <>

      {showMoreMenu && (
        <div className="fixed inset-0 z-50 lg:hidden bg-background/80 backdrop-blur-md flex flex-col justify-end animate-in fade-in duration-200">
          <div className="glass-panel border-t border-white/[0.12] rounded-t-3xl p-6 shadow-2xl bg-card/90">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-4">
              <h3 className="font-display font-bold text-foreground text-base tracking-tight">
                All Features & Utilities
              </h3>
              <button
                type="button"
                onClick={() => setShowMoreMenu(false)}
                className="p-1.5 rounded-full bg-white/5 border border-white/10 text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {MORE_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setShowMoreMenu(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-2.5 p-3 rounded-2xl text-xs font-display font-medium transition-all ${isActive
                        ? 'bg-primary/15 text-primary border border-primary/30 shadow-[0_0_15px_hsl(var(--primary)/0.2)]'
                        : 'bg-white/[0.03] text-foreground/80 border border-white/[0.08] hover:bg-white/[0.06]'
                      }`
                    }
                  >
                    <Icon className="w-4 h-4 text-primary shrink-0" />
                    <span className="truncate">{item.label[language] || item.label.en}</span>
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
      )}


      <nav className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-md">
        <div className="glass-card px-3 py-2 rounded-full flex items-center justify-around border border-white/[0.12] shadow-2xl backdrop-blur-2xl bg-background/70">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `group relative flex flex-col items-center justify-center p-2 rounded-2xl transition-all duration-300 ${isActive ? 'text-primary scale-105' : 'text-muted-foreground hover:text-foreground'
              }`
            }
          >
            <LayoutDashboard className="w-5 h-5" />
            <span className="text-[10px] font-display font-medium mt-0.5">Home</span>
          </NavLink>

          <NavLink
            to="/quran"
            className={({ isActive }) =>
              `group relative flex flex-col items-center justify-center p-2 rounded-2xl transition-all duration-300 ${isActive ? 'text-primary scale-105' : 'text-muted-foreground hover:text-foreground'
              }`
            }
          >
            <BookOpen className="w-5 h-5" />
            <span className="text-[10px] font-display font-medium mt-0.5">Quran</span>
          </NavLink>

          <NavLink
            to="/hadith"
            className={({ isActive }) =>
              `group relative flex flex-col items-center justify-center p-2 rounded-2xl transition-all duration-300 ${isActive ? 'text-primary scale-105' : 'text-muted-foreground hover:text-foreground'
              }`
            }
          >
            <ScrollText className="w-5 h-5" />
            <span className="text-[10px] font-display font-medium mt-0.5">Hadith</span>
          </NavLink>

          <NavLink
            to="/prophets"
            className={({ isActive }) =>
              `group relative flex flex-col items-center justify-center p-2 rounded-2xl transition-all duration-300 ${isActive ? 'text-primary scale-105' : 'text-muted-foreground hover:text-foreground'
              }`
            }
          >
            <Users className="w-5 h-5" />
            <span className="text-[10px] font-display font-medium mt-0.5">Prophets</span>
          </NavLink>

          <button
            type="button"
            onClick={() => setShowMoreMenu(true)}
            className="group relative flex flex-col items-center justify-center p-2 rounded-2xl text-muted-foreground hover:text-foreground transition-all duration-300"
          >
            <Grid className="w-5 h-5" />
            <span className="text-[10px] font-display font-medium mt-0.5">More</span>
          </button>
        </div>
      </nav>
    </>
  );
};
