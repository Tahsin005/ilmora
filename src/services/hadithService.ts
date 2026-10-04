import booksData from '../data-source/extracted_data/hadith_api/books.json';

export interface HadithBook {
  id: number;
  bookName: string;
  writerName: string;
  aboutWriter: string | null;
  writerDeath: string;
  bookSlug: string;
  hadiths_count: number;
  chapters_count: number;
}

export interface HadithChapter {
  id: number;
  chapterNumber: number;
  chapterEnglish: string;
  chapterUrdu: string;
  chapterArabic: string;
  bookSlug: string;
}

export interface HadithItem {
  id: number;
  hadithNumber: string;
  englishNarrator: string;
  hadithEnglish: string;
  hadithUrdu: string;
  urduNarrator: string;
  hadithArabic: string;
  headingArabic?: string;
  headingUrdu?: string;
  headingEnglish?: string;
  chapterId: string | number;
  bookSlug: string;
  volume?: string;
  status: string;
}

export interface ChapterHadithsResponse {
  book: string;
  chapterNumber: number;
  total_hadiths: number;
  hadiths: HadithItem[];
}

const chapterListModules = import.meta.glob('../data-source/extracted_data/hadith_api/*/chapters.json');
const hadithChapterModules = import.meta.glob('../data-source/extracted_data/hadith_api/*/by_chapter/*.json');

export const getHadithBooks = (): HadithBook[] => {
  return (booksData.books || []) as HadithBook[];
};

export const getBookChapters = async (bookSlug: string): Promise<HadithChapter[]> => {
  const path = `../data-source/extracted_data/hadith_api/${bookSlug}/chapters.json`;
  const loader = chapterListModules[path];
  if (!loader) return [];
  const mod = (await loader()) as { default: { chapters: HadithChapter[] } };
  return mod.default.chapters || [];
};

export const getChapterHadiths = async (
  bookSlug: string,
  chapterNumber: number
): Promise<ChapterHadithsResponse | null> => {
  const path = `../data-source/extracted_data/hadith_api/${bookSlug}/by_chapter/chapter_${chapterNumber}.json`;
  const loader = hadithChapterModules[path];
  if (!loader) return null;
  const mod = (await loader()) as { default: ChapterHadithsResponse };
  return mod.default;
};
