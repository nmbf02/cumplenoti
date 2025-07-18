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
      contactDetail: {
        birthday: 'Cumpleaños',
        relation: 'Relación',
        edit: 'Editar',
        delete: 'Eliminar',
        delete_title: 'Eliminar contacto',
        delete_confirm: '¿Seguro que deseas eliminar a {{name}}?',
        delete_success: '{{name}} ha sido eliminado',
        edit_title: 'Editar contacto',
        edit_not_implemented: 'Función aún no implementada',
      },
      contactList: {
        title: 'Tus Contactos',
        relation: {
          Amiga: 'Amiga',
          Hermano: 'Hermano',
          Compañera: 'Compañera',
        },
        birthday: 'Cumpleaños',
      },
      home: {
        greeting: 'Hola, {{name}} 👋',
        subtitle: 'Estos son los próximos cumpleaños:',
        empty: 'Aún no hay cumpleaños próximos',
        add: '+ Agregar Contacto',
      },
      addContact: {
        title: 'Agregar Contacto',
        name: 'Nombre',
        name_placeholder: 'Nombre del contacto',
        date: 'Fecha de cumpleaños',
        date_placeholder: 'Selecciona la fecha',
        relation: 'Relación',
        relation_placeholder: 'Amigo, familia, etc.',
        save: 'Guardar Contacto',
        saved_title: 'Contacto guardado',
        saved_message: '{{name}} fue agregado con éxito',
        error_name: 'El nombre es obligatorio',
        error_date: 'La fecha de cumpleaños es obligatoria',
        error_relation: 'Indica la relación con esta persona',
        confirm: 'Confirmar',
        cancel: 'Cancelar',
      },
      drawer: {
        home: 'Inicio',
        contacts: 'Contactos',
        reminders: 'Recordatorios',
        settings: 'Configuración',
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
      contactDetail: {
        birthday: 'Birthday',
        relation: 'Relation',
        edit: 'Edit',
        delete: 'Delete',
        delete_title: 'Delete contact',
        delete_confirm: 'Are you sure you want to delete {{name}}?',
        delete_success: '{{name}} has been deleted',
        edit_title: 'Edit contact',
        edit_not_implemented: 'Function not implemented yet',
      },
      contactList: {
        title: 'Your Contacts',
        relation: {
          Amiga: 'Friend',
          Hermano: 'Brother',
          Compañera: 'Colleague',
        },
        birthday: 'Birthday',
      },
      home: {
        greeting: 'Hi, {{name}} 👋',
        subtitle: 'These are the upcoming birthdays:',
        empty: 'No upcoming birthdays yet',
        add: '+ Add Contact',
      },
      addContact: {
        title: 'Add Contact',
        name: 'Name',
        name_placeholder: 'Contact name',
        date: 'Birthday',
        date_placeholder: 'Select date',
        relation: 'Relation',
        relation_placeholder: 'Friend, family, etc.',
        save: 'Save Contact',
        saved_title: 'Contact saved',
        saved_message: '{{name}} was added successfully',
        error_name: 'Name is required',
        error_date: 'Birthday is required',
        error_relation: 'Please specify the relation',
        confirm: 'Confirm',
        cancel: 'Cancel',
      },
      drawer: {
        home: 'Home',
        contacts: 'Contacts',
        reminders: 'Reminders',
        settings: 'Settings',
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
