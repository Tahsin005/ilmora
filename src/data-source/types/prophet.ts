export interface LocalizedString {
  en: string;
  bn: string;
  ar: string;
}

export interface ProphetFamily {
  spouse?: string[];
  sons?: string[];
  daughters?: string[];
  father?: string;
  mother?: string;
  relatedProphets?: string[];
}

export interface ProphetMeta {
  id: string;
  order: number;
  name: LocalizedString;
  title: LocalizedString;
  era: LocalizedString;
  nation: LocalizedString;
  family: ProphetFamily;
  keyEvents: LocalizedString[];
  miracles: LocalizedString[];
  quranMentionCount: number;
  chapterCount: number;
}

export interface QuranReference {
  type: 'quran';
  surah: number;
  surahName: LocalizedString;
  ayahStart: number;
  ayahEnd?: number;
  arabicText?: string;
  translation: {
    en?: string;
    bn?: string;
    ar?: string;
  };
}

export interface HadithReference {
  type: 'hadith';
  collection: string;
  hadithNumber: string | number;
  narrator?: string;
  text: {
    en?: string;
    bn?: string;
    ar?: string;
  };
  grade?: string;
}

export type StoryReference = QuranReference | HadithReference | Record<string, unknown>;

export interface StoryParagraph {
  id: string;
  text: string;
  phase?: string;
  references?: StoryReference[];
}

export interface StoryChapter {
  id: string;
  title: string;
  summary: string;
  order: number;
  paragraphs: StoryParagraph[];
}

export interface KidsChapter {
  id: string;
  title: string;
  content: string;
  order: number;
}

export interface Lesson {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  references?: StoryReference[];
}

export type QuizOption = LocalizedString;

export interface QuizQuestion {
  id: string;
  question: LocalizedString;
  options: QuizOption[];
  correctIndex: number;
  explanation: LocalizedString;
}
