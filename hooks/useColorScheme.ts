import { useThemeContext } from '../src/context/ThemeContext';

export function useColorScheme() {
  try {
    return useThemeContext().colorScheme;
  } catch {
    // fallback para casos donde no esté el provider
    return 'light';
  }
}
