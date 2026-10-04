// This file serves as documentation for the story data structure.
// Actual loading is handled by src/services/contentLoader.ts using dynamic imports.
// Each prophet's data is in src/data/stories/{prophetId}/ with:
//   - chapters.en.ts, chapters.bn.ts, chapters.ar.ts (story chapters per language)
//   - kids.en.ts, kids.bn.ts, kids.ar.ts (simplified kids content per language)
//   - quiz.ts (quiz questions - trilingual)
//   - lessons.ts (lessons/morals - trilingual)

export const PROPHET_IDS = [
  'adam', 'idris', 'nuh', 'hud', 'salih',
  'ibrahim', 'lut', 'ismail', 'ishaq', 'yaqub',
  'yusuf', 'ayyub', 'shuayb', 'musa', 'harun',
  'dhul-kifl', 'dawud', 'sulayman', 'ilyas', 'al-yasa',
  'yunus', 'zakariya', 'yahya', 'isa', 'muhammad',
] as const;
