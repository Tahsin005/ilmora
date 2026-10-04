import React, { useState, useEffect } from 'react';
import {
  Clock,
  Compass,
  MapPin,
  Calendar,
  AlertTriangle,
  Moon,
} from 'lucide-react';
import { useSettings } from '../hooks/useSettings';
import {
  getCitiesList,
  getPrayerTimes,
  type PrayerTimesData,
} from '../services/islamicApiService';
import { GlassSelect, type GlassSelectOption } from '../components/common/GlassSelect';

export const PrayerTimesPage: React.FC = () => {
  const { citySlug, setCitySlug } = useSettings();
  const [data, setData] = useState<PrayerTimesData | null>(null);
  const [loading, setLoading] = useState(true);

  const cities = getCitiesList();
  const cityOptions: GlassSelectOption[] = cities.map((c) => ({
    value: c.slug,
    label: c.name,
    sublabel: c.country,
  }));

  useEffect(() => {
    let ignore = false;
    getPrayerTimes(citySlug).then((res) => {
      if (!ignore) {
        setData(res);
        setLoading(false);
      }
    });
    return () => {
      ignore = true;
    };
  }, [citySlug]);

  const times = data?.data?.times;
  const hijri = data?.data?.date?.hijri;
  const qibla = data?.data?.qibla;
  const prohibited = data?.data?.prohibited_times;

  const prayerSchedule = times
    ? [
      { name: 'Fajr', time: times.Fajr, desc: 'Dawn prayer' },
      { name: 'Sunrise', time: times.Sunrise, desc: 'End of Fajr' },
      { name: 'Dhuhr', time: times.Dhuhr, desc: 'Midday prayer' },
      { name: 'Asr', time: times.Asr, desc: 'Afternoon prayer' },
      { name: 'Maghrib', time: times.Maghrib, desc: 'Sunset prayer' },
      { name: 'Isha', time: times.Isha, desc: 'Night prayer' },
    ]
    : [];

  return (
    <div className="space-y-8">

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div>
          <div className="font-display text-[11px] font-medium tracking-[0.15em] text-muted-foreground mb-2">
            ASTRONOMICAL & LITURGICAL CALCULATION
          </div>
          <h1 className="font-display text-[clamp(32px,5vw,56px)] font-bold tracking-tighter leading-tight mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50">
              Prayer Times &{" "}
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary/90 to-primary/40">
              Qibla
            </span>
          </h1>
          <p className="font-body text-[14px] md:text-[15px] leading-[1.7] text-foreground/60 max-w-xl">
            Precise solar prayer schedules, prohibited prayer windows, and Kaaba compass bearing for your location.
          </p>
        </div>


        <div className="flex flex-wrap items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-2xl glass-card text-xs font-display font-medium text-foreground/80">
            <Clock className="w-4 h-4 text-primary" />
            <span>Astronomical Times</span>
          </div>

          <GlassSelect
            value={citySlug}
            onChange={(val) => {
              setLoading(true);
              setCitySlug(val);
            }}
            options={cityOptions}
            icon={<MapPin className="w-4 h-4" />}
            size="md"
            menuClassName="w-64"
          />
        </div>
      </div>

      {loading ? (
        <div className="py-24 text-center font-display text-muted-foreground animate-pulse">Calculating prayer times...</div>
      ) : (
        <div className="space-y-8">

          {hijri && (
            <div className="glass-card p-5 md:p-6 flex flex-wrap items-center justify-between gap-4 border border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[hsl(var(--accent-2)/0.12)] border border-[hsl(var(--accent-2)/0.25)] text-[hsl(var(--accent-2))] flex items-center justify-center shadow-inner">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-foreground">
                    {hijri.day} {hijri.month.en} ({hijri.month.ar}) {hijri.year} AH
                  </h4>
                  <p className="font-body text-xs text-muted-foreground">{data?.data?.date?.readable}</p>
                </div>
              </div>

              {times && (
                <div className="flex items-center gap-3 text-xs font-display">
                  <div className="glass-panel px-4 py-2 rounded-xl flex items-center gap-2">
                    <span className="text-muted-foreground">Imsak (Sahur end):</span>{' '}
                    <span className="text-primary font-bold font-mono text-sm">{times.Imsak}</span>
                  </div>
                  <div className="glass-panel px-4 py-2 rounded-xl flex items-center gap-2">
                    <span className="text-muted-foreground">Iftar (Maghrib):</span>{' '}
                    <span className="text-[hsl(var(--accent-2))] font-bold font-mono text-sm">{times.Maghrib}</span>
                  </div>
                </div>
              )}
            </div>
          )}


          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {prayerSchedule.map((p) => (
              <div
                key={p.name}
                className="glass-card glass-hover glass-shimmer p-5 text-center space-y-1.5 border border-white/10 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.25)]"
              >
                <span className="font-display text-xs font-bold text-muted-foreground  tracking-widest block">
                  {p.name}
                </span>
                <span className="text-3xl font-extrabold font-mono text-foreground block tracking-tight">{p.time}</span>
                <span className="font-body text-[11px] text-muted-foreground block">{p.desc}</span>
              </div>
            ))}
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {qibla && (
              <div className="glass-card p-8 flex flex-col items-center justify-center text-center space-y-6 border border-white/10">
                <div className="flex items-center gap-2.5 text-foreground font-display font-bold text-lg">
                  <Compass className="w-5 h-5 text-primary" /> Qibla Direction
                </div>


                <div className="relative w-52 h-52 rounded-full border-2 border-white/15 bg-white/[0.02] flex items-center justify-center shadow-inner">

                  <span className="absolute top-2.5 font-display text-[11px] font-bold text-muted-foreground">N</span>
                  <span className="absolute bottom-2.5 font-display text-[11px] font-bold text-muted-foreground">S</span>
                  <span className="absolute left-2.5 font-display text-[11px] font-bold text-muted-foreground">W</span>
                  <span className="absolute right-2.5 font-display text-[11px] font-bold text-muted-foreground">E</span>


                  <div
                    className="w-full h-full flex items-center justify-center transition-transform duration-1000 ease-out"
                    style={{ transform: `rotate(${qibla.direction.degrees}deg)` }}
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-0 h-0 border-l-[9px] border-l-transparent border-r-[9px] border-r-transparent border-b-[44px] border-b-primary drop-shadow-[0_0_12px_hsl(var(--primary)/0.6)]"></div>
                      <div className="w-3.5 h-3.5 rounded-full bg-white shadow-md my-[-7px] z-10"></div>
                      <div className="w-0 h-0 border-l-[9px] border-l-transparent border-r-[9px] border-r-transparent border-t-[44px] border-t-white/30"></div>
                    </div>
                  </div>
                </div>

                <div>
                  <span className="text-4xl font-black font-mono text-primary block">
                    {Math.round(qibla.direction.degrees)}°
                  </span>
                  <p className="font-body text-xs text-muted-foreground mt-2">
                    Clockwise from True North • Distance to Kaaba: {qibla.distance.value ? Math.round(qibla.distance.value).toLocaleString() : '0'}{' '}
                    {qibla.distance.unit}
                  </p>
                </div>
              </div>
            )}


            <div className="space-y-6">
              {prohibited && (
                <div className="glass-card p-6 md:p-7 border border-white/10 space-y-4">
                  <div className="flex items-center gap-2.5 text-amber-400 font-display font-bold text-base">
                    <AlertTriangle className="w-5 h-5 shrink-0" /> Prohibited Voluntary Prayer Windows
                  </div>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">
                    The Prophet (ﷺ) forbade voluntary Nafl prayers during sunrise until the sun has risen, at exact solar noon (Zawal), and during sunset until dusk.
                  </p>
                  <div className="space-y-2.5 pt-2 text-xs font-display">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-foreground/80 font-medium">During Sunrise</span>
                      <span className="font-mono text-amber-400 font-bold text-sm">
                        {prohibited.sunrise.start} - {prohibited.sunrise.end}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-foreground/80 font-medium">Solar Noon (Zawal)</span>
                      <span className="font-mono text-amber-400 font-bold text-sm">
                        {prohibited.noon.start} - {prohibited.noon.end}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-foreground/80 font-medium">During Sunset</span>
                      <span className="font-mono text-amber-400 font-bold text-sm">
                        {prohibited.sunset.start} - {prohibited.sunset.end}
                      </span>
                    </div>
                  </div>
                </div>
              )}


              {times && (
                <div className="glass-card p-6 md:p-7 border border-white/10 space-y-4">
                  <div className="flex items-center gap-2.5 text-[hsl(var(--accent-3))] font-display font-bold text-base">
                    <Moon className="w-5 h-5" /> Night Divisions & Tahajjud
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs font-display">
                    <div className="glass-panel p-4 text-center space-y-1">
                      <span className="text-muted-foreground block text-[11px]  tracking-wider font-semibold">Midnight</span>
                      <span className="font-mono text-lg font-bold text-foreground block">{times.Midnight}</span>
                    </div>
                    <div className="glass-panel p-4 text-center space-y-1">
                      <span className="text-muted-foreground block text-[11px]  tracking-wider font-semibold">Last Third (Tahajjud)</span>
                      <span className="font-mono text-lg font-bold text-[hsl(var(--accent-3))] block">{times.Lastthird}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
