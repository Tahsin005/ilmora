import React, { useState, useEffect } from 'react';
import { SettingsContext, type AppLanguage, type ArabicFontSize } from './settings-context';

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<AppLanguage>(() => {
    return (localStorage.getItem('ilmora_lang') as AppLanguage) || 'en';
  });

  const [citySlug, setCitySlug] = useState<string>(() => {
    return localStorage.getItem('ilmora_city') || 'makkah';
  });

  const [arabicFontSize, setArabicFontSize] = useState<ArabicFontSize>(() => {
    return (localStorage.getItem('ilmora_arabic_size') as ArabicFontSize) || 'large';
  });

  const [showEnglishTranslation, setShowEnglishTranslation] = useState<boolean>(true);
  const [showBengaliTranslation, setShowBengaliTranslation] = useState<boolean>(true);
  const [showUrduTranslation, setShowUrduTranslation] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('ilmora_lang', language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    localStorage.setItem('ilmora_city', citySlug);
  }, [citySlug]);

  useEffect(() => {
    localStorage.setItem('ilmora_arabic_size', arabicFontSize);
  }, [arabicFontSize]);

  return (
    <SettingsContext.Provider
      value={{
        language,
        setLanguage,
        citySlug,
        setCitySlug,
        arabicFontSize,
        setArabicFontSize,
        showEnglishTranslation,
        setShowEnglishTranslation,
        showBengaliTranslation,
        setShowBengaliTranslation,
        showUrduTranslation,
        setShowUrduTranslation,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
