import surahsData from '../data-source/extracted_data/alquran_v2/surahs_list.json';
import juzData from '../data-source/extracted_data/quran_v1_semarketir/juz.json';

export interface SurahMeta {
  id: number;
  name: string;
  transliteration: string;
  translation: string;
  type: 'meccan' | 'medinan';
  total_verses: number;
}

export interface Verse {
  id: number;
  arabic: string;
  transliteration: string;
  translation_en: string;
  translation_bn?: string;
  translation_ur?: string;
}

export interface SurahDetail extends SurahMeta {
  verses: Verse[];
}

export interface JuzEntry {
  index: string;
  start: {
    index: string;
    verse: string;
    name: string;
  };
  end: {
    index: string;
    verse: string;
    name: string;
  };
}

const surahModules = import.meta.glob('../data-source/extracted_data/alquran_v2/by_surah/*.json');

export const getSurahsList = (): SurahMeta[] => {
  return (surahsData.surahs || []) as SurahMeta[];
};

export const getJuzList = (): JuzEntry[] => {
  return juzData as unknown as JuzEntry[];
};

export const getSurahDetail = async (id: number): Promise<SurahDetail | null> => {
  const prefix = String(id).padStart(3, '0');
  const pathKey = Object.keys(surahModules).find((key) => key.includes(`/${prefix}_`));
  if (!pathKey) return null;

  const loader = surahModules[pathKey];
  const mod = (await loader()) as { default: SurahDetail };
  return mod.default;
};

// Returns public CDN high-quality audio recitation (Mishary Rashid Alafasy)
export const getVerseAudioUrl = (surah: number, ayah: number): string => {
  const s = String(surah).padStart(3, '0');
  const a = String(ayah).padStart(3, '0');
  return `https://everyayah.com/data/Alafasy_128kbps/${s}${a}.mp3`;
};
