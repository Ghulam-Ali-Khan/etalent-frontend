import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

// Initialize i18n
i18n
  .use(LanguageDetector) // Automatically detects the user's language
  .use(HttpBackend) // Load translation files from the backend
  .use(initReactI18next) // Bind i18next to React
  .init({
    fallbackLng: 'en', // Default language if user language is not available
    debug: true, // Show debugging information in the console
    interpolation: {
      escapeValue: false, // React already escapes values, no need for extra escaping
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Path to load translation files
    },
  });

export default i18n;
