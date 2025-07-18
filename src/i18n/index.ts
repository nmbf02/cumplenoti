import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      settings: {
        title: 'Configuración',
        user: 'Usuario:',
        theme: 'Tema',
        theme_light: 'Claro',
        theme_dark: 'Oscuro',
        theme_system: 'Sistema',
        language: 'Idioma',
        language_es: 'Español',
        language_en: 'Inglés',
        language_system: 'Sistema',
        logout: 'Cerrar Sesión',
        logout_confirm: '¿Estás segura/o que deseas salir?',
        logout_cancel: 'Cancelar',
        logout_exit: 'Salir',
      },
      reminder: {
        title: 'Próximos Cumpleaños',
        group_1: '1 día',
        group_3: '3 días',
        group_7: '7 días',
        empty: 'Sin cumpleaños en este rango',
        date_format: 'DD MMM YYYY',
      },
    },
  },
  en: {
    translation: {
      settings: {
        title: 'Settings',
        user: 'User:',
        theme: 'Theme',
        theme_light: 'Light',
        theme_dark: 'Dark',
        theme_system: 'System',
        language: 'Language',
        language_es: 'Spanish',
        language_en: 'English',
        language_system: 'System',
        logout: 'Log Out',
        logout_confirm: 'Are you sure you want to log out?',
        logout_cancel: 'Cancel',
        logout_exit: 'Log Out',
      },
      reminder: {
        title: 'Upcoming Birthdays',
        group_1: '1 day',
        group_3: '3 days',
        group_7: '7 days',
        empty: 'No birthdays in this range',
        date_format: 'MMM DD, YYYY',
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    fallbackLng: 'es',
    interpolation: { escapeValue: false },
  });

export default i18n;
