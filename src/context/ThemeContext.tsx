import React, { createContext, ReactNode, useContext, useState } from 'react';
import { Appearance } from 'react-native';

export type ThemeType = 'light' | 'dark' | 'system';
export type LanguageType = 'es' | 'en' | 'system';

interface ThemeContextProps {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  colorScheme: 'light' | 'dark';
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>('system');
  const [language, setLanguage] = useState<LanguageType>('system');

  // Detecta el color scheme del sistema
  const systemColorScheme = Appearance.getColorScheme() || 'light';
  const colorScheme = theme === 'system' ? systemColorScheme : theme;

  return (
    <ThemeContext.Provider value={{ theme, setTheme, colorScheme, language, setLanguage }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useThemeContext must be used within a ThemeProvider');
  return context;
} 