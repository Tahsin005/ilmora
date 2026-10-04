import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Clock, Bookmark } from 'lucide-react';
import { Link } from 'react-router';
import { useSettings } from '../../hooks/useSettings';
import { useBookmarks } from '../../hooks/useBookmarks';
import { getCitiesList, getPrayerTimes, type PrayerTimesData } from '../../services/islamicApiService';
import { GlassSelect, type GlassSelectOption } from '../common/GlassSelect';

export const Header: React.FC = () => {
  const { citySlug, setCitySlug, language } = useSettings();
  const { bookmarks } = useBookmarks();
  const [prayerData, setPrayerData] = useState<PrayerTimesData | null>(null);
  const cities = getCitiesList();

  const cityOptions: GlassSelectOption[] = cities.map((c) => ({
    value: c.slug,
    label: c.name,
    sublabel: c.country,
  }));

  useEffect(() => {
    let mounted = true;
    getPrayerTimes(citySlug).then((data) => {
      if (mounted) setPrayerData(data);
    });
    return () => {
      mounted = false;
    };
  }, [citySlug]);

  const hijri = prayerData?.data?.date?.hijri;

  return (
    <header className="sticky top-0 z-30 w-full rounded-none border-0 border-b border-white/[0.08] px-4 md:px-8 py-3.5 flex items-center justify-between gap-4 backdrop-blur-2xl bg-background/60 shadow-[0_4px_20px_rgba(0,0,0,0.25)]">

      <div className="flex items-center gap-2">
        <GlassSelect
          value={citySlug}
          onChange={setCitySlug}
          options={cityOptions}
          icon={<MapPin className="w-3.5 h-3.5" />}
          size="sm"
          menuClassName="w-64"
        />
      </div>


      <div className="flex items-center gap-3">
        {hijri && (
          <div className="hidden sm:flex items-center gap-2 text-xs text-accent-2 bg-accent-2/10 border border-accent-2/25 px-4 py-1.5 rounded-full font-display font-medium shadow-sm">
            <Calendar className="w-3.5 h-3.5" />
            <span>
              {hijri.day} {language === 'ar' ? hijri.month.ar : hijri.month.en} {hijri.year} AH
            </span>
          </div>
        )}

        {prayerData?.data?.times && (
          <Link
            to="/prayer-times"
            className="flex items-center gap-2 text-xs text-primary bg-primary/10 border border-primary/25 px-4 py-1.5 rounded-full font-display font-medium hover:bg-primary/20 hover:border-primary/40 transition-all shadow-sm"
          >
            <Clock className="w-3.5 h-3.5 text-primary" />
            <span>
              Fajr {prayerData.data.times.Fajr} • Maghrib {prayerData.data.times.Maghrib}
            </span>
          </Link>
        )}

        <Link
          to="/bookmarks"
          className="relative p-2.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-muted-foreground hover:text-foreground hover:bg-white/[0.08] hover:border-white/[0.2] transition-all shadow-sm"
          title="Saved Items"
        >
          <Bookmark className="w-4 h-4" />
          {bookmarks.length > 0 && (
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full shadow-[0_0_6px_hsl(var(--primary))]"></span>
          )}
        </Link>
      </div>
    </header>
  );
};
