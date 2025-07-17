import AppNavigator from '../src/navigation/AppNavigator';
import { ThemeProvider } from '../src/context/ThemeContext';

export default function Page() {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
}
