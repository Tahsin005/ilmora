import { createContext } from 'react';

export type AppLanguage = 'en' | 'bn' | 'ar';
export type ArabicFontSize = 'normal' | 'large' | 'huge';

export interface SettingsContextType {
  language: AppLanguage;
  setLanguage: (lang: AppLanguage) => void;
  citySlug: string;
  setCitySlug: (city: string) => void;
  arabicFontSize: ArabicFontSize;
  setArabicFontSize: (size: ArabicFontSize) => void;
  showEnglishTranslation: boolean;
  setShowEnglishTranslation: (show: boolean) => void;
  showBengaliTranslation: boolean;
  setShowBengaliTranslation: (show: boolean) => void;
  showUrduTranslation: boolean;
  setShowUrduTranslation: (show: boolean) => void;
}

export const SettingsContext = createContext<SettingsContextType | undefined>(undefined);
