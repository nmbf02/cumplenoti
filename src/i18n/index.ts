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
