'use client';

import { createContext, useContext, ReactNode } from 'react';

type Translations = Record<string, string | Record<string, any>>;

interface TranslationContextType {
  t: (key: string) => string;
  locale: string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children, messages, locale }: { children: ReactNode; messages: Translations; locale: string }) {
  const t = (key: string): string => {
    return key.split('.').reduce((obj: any, segment) => obj?.[segment], messages) as string || key;
  };

  return (
    <TranslationContext.Provider value={{ t, locale }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}
