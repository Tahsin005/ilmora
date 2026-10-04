import citiesData from '../data-source/extracted_data/islamic_api/cities_index.json';
import asmaulHusnaData from '../data-source/extracted_data/islamic_api/asmaul_husna/asmaul_husna_multilingual.json';
import duaCategoriesData from '../data-source/extracted_data/islamic_api/dua/categories.json';
import ruqyahInstantCatData from '../data-source/extracted_data/islamic_api/ruqyah/instant_categories.json';
import ruqyahTopicCatData from '../data-source/extracted_data/islamic_api/ruqyah/topic_categories.json';

export interface CityInfo {
  name: string;
  country: string;
  slug: string;
  lat: number;
  lon: number;
}

export interface PrayerTimesData {
  code: number;
  status: string;
  data: {
    times: {
      Fajr: string;
      Sunrise: string;
      Dhuhr: string;
      Asr: string;
      Sunset: string;
      Maghrib: string;
      Isha: string;
      Imsak: string;
      Midnight: string;
      Firstthird: string;
      Lastthird: string;
    };
    date: {
      readable: string;
      timestamp: string;
      hijri: {
        date: string;
        day: string;
        weekday: { en: string; ar: string };
        month: { number: number; en: string; ar: string; days: number };
        year: string;
      };
      gregorian: {
        date: string;
        day: string;
        weekday: { en: string };
        month: { number: number; en: string };
        year: string;
      };
    };
    qibla: {
      direction: { degrees: number; from: string; clockwise: boolean };
      distance: { value: number; unit: string };
    };
    prohibited_times: {
      sunrise: { start: string; end: string };
      noon: { start: string; end: string };
      sunset: { start: string; end: string };
    };
  };
  city_info: CityInfo;
}

export interface AsmaulHusnaItem {
  number: number;
  name: string;
  transliteration: string;
  translation: string;
  meaning: string;
  audio?: string;
}

export interface DuaCategory {
  name: string;
  url: string;
  icon: string;
  meta: string;
}

export interface DuaItem {
  dua_id: number;
  title: string;
  introduction?: string;
  arabic?: string;
  transliteration?: string;
  translation?: string;
  reference?: string;
}

export interface CategoryDuasResponse {
  category: {
    name: string;
    url: string;
  };
  total_duas: number;
  subcategories: Array<{
    id: number;
    title: string;
    duas: DuaItem[];
  }>;
}

export interface NisabData {
  currency: string;
  updated_at: string;
  data: {
    nisab_thresholds: {
      gold: { weight: number; unit_price: number; nisab_amount: number };
      silver: { weight: number; unit_price: number; nisab_amount: number };
    };
    zakat_rate: string;
    notes: string;
  };
}

// Lazy glob loaders
const prayerTimeModules = import.meta.glob('../data-source/extracted_data/islamic_api/prayer_times/*.json');
const duaCategoryModules = import.meta.glob('../data-source/extracted_data/islamic_api/dua/by_category/*.json');
const zakatModules = import.meta.glob('../data-source/extracted_data/islamic_api/zakat_nisab/*.json');
const ruqyahProgramModules = import.meta.glob('../data-source/extracted_data/islamic_api/ruqyah/instant_programs/*.json');
const ruqyahArticleModules = import.meta.glob('../data-source/extracted_data/islamic_api/ruqyah/topic_articles/*.json');

export const getCitiesList = (): CityInfo[] => {
  return (citiesData.cities || []) as CityInfo[];
};

export const getPrayerTimes = async (citySlug: string): Promise<PrayerTimesData | null> => {
  const path = `../data-source/extracted_data/islamic_api/prayer_times/${citySlug}.json`;
  const loader = prayerTimeModules[path];
  if (!loader) return null;
  const mod = (await loader()) as { default: PrayerTimesData };
  return mod.default;
};

export const getAsmaulHusna = (lang: string = 'en'): AsmaulHusnaItem[] => {
  const translations = asmaulHusnaData.translations as Record<string, AsmaulHusnaItem[]>;
  return translations[lang] || translations['en'] || [];
};

export const getDuaCategories = (): DuaCategory[] => {
  return (duaCategoriesData.data || []) as DuaCategory[];
};

export const getDuasByCategory = async (categorySlug: string): Promise<CategoryDuasResponse | null> => {
  const path = `../data-source/extracted_data/islamic_api/dua/by_category/${categorySlug}.json`;
  const loader = duaCategoryModules[path];
  if (!loader) return null;
  const mod = (await loader()) as { default: CategoryDuasResponse };
  return mod.default;
};

export const getZakatNisab = async (currency: string = 'usd'): Promise<NisabData | null> => {
  const path = `../data-source/extracted_data/islamic_api/zakat_nisab/nisab_${currency.toLowerCase()}.json`;
  const loader = zakatModules[path];
  if (!loader) {
    // Fallback to USD
    const fallback = zakatModules['../data-source/extracted_data/islamic_api/zakat_nisab/nisab_usd.json'];
    if (fallback) {
      const mod = (await fallback()) as { default: NisabData };
      return mod.default;
    }
    return null;
  }
  const mod = (await loader()) as { default: NisabData };
  return mod.default;
};

export const getRuqyahInstantCategories = () => {
  return ruqyahInstantCatData.data || [];
};

export const getRuqyahTopicCategories = () => {
  return ruqyahTopicCatData.data || [];
};

export const getRuqyahProgram = async (slug: string) => {
  const path = `../data-source/extracted_data/islamic_api/ruqyah/instant_programs/${slug}.json`;
  const loader = ruqyahProgramModules[path];
  if (!loader) return null;
  const mod = (await loader()) as { default: unknown };
  return mod.default;
};

export const getRuqyahArticle = async (slug: string) => {
  const path = `../data-source/extracted_data/islamic_api/ruqyah/topic_articles/${slug}.json`;
  const loader = ruqyahArticleModules[path];
  if (!loader) return null;
  const mod = (await loader()) as { default: unknown };
  return mod.default;
};
