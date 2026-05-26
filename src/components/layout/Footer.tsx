'use client';

import Link from 'next/link';
import { useTranslation } from '@/contexts/TranslationContext';
import { usePathname } from 'next/navigation';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
];

export default function Footer() {
  const { t } = useTranslation();
  const pathname = usePathname();

  const currentLocale = pathname.split('/')[1] || 'en';

  const getLocalizedPath = (locale: string) => {
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/') || '/';
  };

  return (
    <footer className="bg-neo-secondary border-t-8 border-black pt-16 pb-8 relative overflow-hidden z-30">
      <div className="absolute top-0 w-full h-8 bg-grid opacity-20 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-4 space-y-6">
              <div className="flex items-center space-x-3 bg-white border-4 border-black px-4 py-2 w-max shadow-neo-sm rotate-1">
              <img 
                src="/logo.png" 
                alt="Cube Book Logo" 
                className="w-12 h-12 object-contain drop-shadow-[2px_2px_0_rgba(0,0,0,1)]"
              />
              <span className="font-space font-black text-3xl uppercase tracking-tighter text-black">
                {t('appName') || 'Cube Book'}
              </span>
            </div>
            <p className="font-space font-bold text-black text-xl max-w-xs bg-white border-4 border-black p-4 shadow-neo-sm -rotate-1">
              {t('footer.description')}
            </p>
          </div>

          {/* Languages */}
          <div className="md:col-span-4 space-y-6">
            <h3 className="font-space font-black text-3xl uppercase tracking-tighter text-black bg-white border-4 border-black px-3 py-1 inline-block shadow-neo-sm">
              🌐 Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <Link
                  key={lang.code}
                  href={getLocalizedPath(lang.code)}
                  className={`inline-flex items-center gap-1 font-black uppercase tracking-widest border-4 border-black px-3 py-1.5 shadow-neo-sm hover:bg-neo-accent hover:text-white hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-100 text-sm ${
                    currentLocale === lang.code 
                      ? 'bg-neo-accent text-white' 
                      : 'bg-white text-black'
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.code.toUpperCase()}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Legal & Contact */}
          <div className="md:col-span-4 flex flex-col gap-8">
            <div className="space-y-4">
              <h3 className="font-space font-black text-2xl uppercase tracking-tighter text-black bg-white border-4 border-black px-3 py-1 inline-block -rotate-1 shadow-neo-sm">
                {t('footer.legal')}
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/privacy"
                    className="inline-block text-black font-black uppercase tracking-widest border-4 border-black bg-white px-4 py-2 shadow-neo-sm hover:bg-neo-accent hover:text-white hover:-translate-y-1 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-100 text-sm"
                  >
                    {t('footer.privacy')} ↗
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="inline-block text-black font-black uppercase tracking-widest border-4 border-black bg-white px-4 py-2 shadow-neo-sm hover:bg-neo-accent hover:text-white hover:-translate-y-1 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-100 text-sm"
                  >
                    {t('footer.terms')} ↗
                  </Link>
                </li>
                <li>
                  <a
                    href={`/${currentLocale}/sitemap.xml`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-black font-black uppercase tracking-widest border-4 border-black bg-white px-4 py-2 shadow-neo-sm hover:bg-neo-accent hover:text-white hover:-translate-y-1 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-100 text-sm"
                  >
                    Sitemap ↗
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-space font-black text-2xl uppercase tracking-tighter text-black bg-white border-4 border-black px-3 py-1 inline-block rotate-1 shadow-neo-sm">
                {t('footer.contact')}
              </h3>
              <a 
                href="mailto:contacto@arcaico.com.co" 
                className="inline-block text-black font-black uppercase tracking-widest border-4 border-black bg-white shadow-neo-sm hover:bg-neo-muted hover:-translate-y-1 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-100 py-2 px-4 rotate-1 text-sm"
              >
                ✉️ contacto@arcaico.com.co
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t-8 border-black flex flex-col md:flex-row justify-between items-center gap-4 text-black font-black uppercase tracking-widest text-lg md:text-xl">
          <p className="bg-white border-4 border-black px-4 py-2 shadow-neo-sm -rotate-1">
            © 2026 Cube Book
          </p>
          <p className="bg-white border-4 border-black px-4 py-2 shadow-neo-sm rotate-1">
            {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}