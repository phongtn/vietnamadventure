import { ui, defaultLanguage, languages } from './ui';

// Get the preferred language from the URL
export function getLanguageFromURL(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) {
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
