'use client';

import * as React from 'react';
import { Language } from '@/types';
import { idDictionary, Dictionary } from '@/lib/dictionaries/id';
import { enDictionary } from '@/lib/dictionaries/en';

interface LanguageContextType {
  language: Language;
  dict: Dictionary;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = React.createContext<LanguageContextType>({
  language: 'id',
  dict: idDictionary,
  setLanguage: () => {},
  toggleLanguage: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = React.useState<Language>('id');

  React.useEffect(() => {
    const saved = localStorage.getItem('tm_lang') as Language | null;
    if (saved && (saved === 'id' || saved === 'en')) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = React.useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('tm_lang', lang);
  }, []);

  const toggleLanguage = React.useCallback(() => {
    setLanguageState((prev) => {
      const next = prev === 'id' ? 'en' : 'id';
      localStorage.setItem('tm_lang', next);
      return next;
    });
  }, []);

  const dict = language === 'en' ? enDictionary : idDictionary;

  return (
    <LanguageContext.Provider
      value={{ language, dict, setLanguage, toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return React.useContext(LanguageContext);
}
