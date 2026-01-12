import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, detectLanguage, getTranslations, translations } from '@/i18n/translations';

type TranslationType = typeof translations.fr;

interface LanguageContextType {
  language: Language;
  t: TranslationType;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');
  const [t, setT] = useState<TranslationType>(translations.fr);

  useEffect(() => {
    const detectedLang = detectLanguage();
    setLanguage(detectedLang);
    setT(getTranslations(detectedLang));
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    setT(getTranslations(lang));
  };

  return (
    <LanguageContext.Provider value={{ language, t, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
