import { prophetsMeta } from '../data-source/data/prophets-meta';
import type { ProphetMeta, StoryChapter, KidsChapter, Lesson, QuizQuestion } from '../data-source/types/prophet';

const chapterModules = import.meta.glob('../data-source/data/stories/*/chapters.*.ts');
const kidsModules = import.meta.glob('../data-source/data/stories/*/kids.*.ts');
const lessonModules = import.meta.glob('../data-source/data/stories/*/lessons.ts');
const quizModules = import.meta.glob('../data-source/data/stories/*/quiz.ts');

export const getProphetsList = (): ProphetMeta[] => {
  return prophetsMeta;
};

export const getProphetById = (id: string): ProphetMeta | undefined => {
  return prophetsMeta.find((p) => p.id === id);
};

export const getProphetChapters = async (
  prophetId: string,
  lang: 'en' | 'bn' | 'ar' = 'en'
): Promise<StoryChapter[]> => {
  const path = `../data-source/data/stories/${prophetId}/chapters.${lang}.ts`;
  const loader = chapterModules[path];
  if (!loader) {
    // Fallback to English if requested language is not present
    if (lang !== 'en') {
      return getProphetChapters(prophetId, 'en');
    }
    return [];
  }
  const mod = (await loader()) as { default?: StoryChapter[] };
  return mod.default || [];
};

export const getProphetKidsChapters = async (
  prophetId: string,
  lang: 'en' | 'bn' | 'ar' = 'en'
): Promise<KidsChapter[]> => {
  const path = `../data-source/data/stories/${prophetId}/kids.${lang}.ts`;
  const loader = kidsModules[path];
  if (!loader) {
    if (lang !== 'en') {
      return getProphetKidsChapters(prophetId, 'en');
    }
    return [];
  }
  const mod = (await loader()) as { default?: KidsChapter[] };
  return mod.default || [];
};

export const getProphetLessons = async (prophetId: string): Promise<Lesson[]> => {
  const path = `../data-source/data/stories/${prophetId}/lessons.ts`;
  const loader = lessonModules[path];
  if (!loader) return [];
  const mod = (await loader()) as { default?: Lesson[] };
  return mod.default || [];
};

export const getProphetQuiz = async (prophetId: string): Promise<QuizQuestion[]> => {
  const path = `../data-source/data/stories/${prophetId}/quiz.ts`;
  const loader = quizModules[path];
  if (!loader) return [];
  const mod = (await loader()) as { default?: QuizQuestion[] };
  return mod.default || [];
};
