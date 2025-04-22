import { ui, defaultLanguage, languages } from './ui';

// Get the preferred language from the URL
export function getLanguageFromURL(url: URL) {
  const [, lang] = url.pathname.split('/');
  // Check if the language code is one of our supported languages
  if (Object.keys(languages).includes(lang)) {
    return lang;
  }
  return defaultLanguage;
}

// Get translation function for the current language
export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLanguage]) {
    return ui[lang][key] || ui[defaultLanguage][key];
  }
}

// Generate URL for a different language
export function getLocalizedURL(url: URL, lang: string) {
  const currentLang = getLanguageFromURL(url);
  const pathname = url.pathname;

  // If we're on the homepage
  if (pathname === '/' || pathname === `/${currentLang}/`) {
    return `/${lang}/`;
  }

  // If we already have a language prefix
  if (pathname.startsWith(`/${currentLang}/`)) {
    return pathname.replace(`/${currentLang}/`, `/${lang}/`);
  }

  // If we don't have a language prefix yet
  return `/${lang}${pathname}`;
}

// Get all available language alternatives for the current URL
export function getLanguageAlternatives(url: URL) {
  return Object.keys(languages).map(lang => ({
    lang,
    label: languages[lang as keyof typeof languages],
    href: getLocalizedURL(url, lang),
    current: getLanguageFromURL(url) === lang
  }));
}

// Format a date according to the language
export function formatDate(date: Date, lang: string) {
  return new Intl.DateTimeFormat(lang === 'en' ? 'en-US' : lang === 'fr' ? 'fr-FR' : 'es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

// Helper function to ensure all internal links have the correct language prefix
export function localizeLink(path: string, lang: string): string {
  // If the path already has a language prefix, don't modify it
  if (/^\/[a-z]{2}\//.test(path)) {
    return path;
  }

  // If the path is just a slash, return the language home
  if (path === '/') {
    return `/${lang}/`;
  }

  // Otherwise, add the language prefix
  return `/${lang}${path.startsWith('/') ? path : `/${path}`}`;
}
