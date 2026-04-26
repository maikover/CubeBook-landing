'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from '@/contexts/TranslationContext';

export default function Header({ locale }: { locale: string }) {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { href: `/${locale}#features`, label: t('navigation.features') },
    { href: `/${locale}#download`, label: t('navigation.download') },
    { href: `/${locale}/privacy`, label: t('navigation.privacy') },
    { href: `/${locale}/terms`, label: t('navigation.terms') }
  ];

  const switchLocale = locale === 'en' ? 'es' : 'en';

  return (
    <header className="sticky top-0 z-50 bg-neo-bg border-b-8 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
           {/* Logo */}
           <Link href={`/${locale}`} className="flex items-center space-x-3 bg-neo-secondary border-4 border-black px-4 py-2 shadow-neo-sm hover:-translate-y-1 hover:shadow-neo-md active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-200 -rotate-1 hover:rotate-1">
             <img 
               src="/logo.png" 
               alt="Cube Book Logo" 
               className="w-10 h-10 object-contain drop-shadow-[2px_2px_0_rgba(0,0,0,1)]"
             />
             <span className="font-space font-black text-2xl uppercase tracking-tighter text-black">
               Cube Book
             </span>
           </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-space font-black text-sm lg:text-base uppercase tracking-widest px-4 py-2 border-4 transition-all duration-100 active:translate-x-1 active:translate-y-1 active:shadow-none
                          ${pathname === link.href 
                            ? 'border-black bg-neo-accent text-white shadow-neo-sm rotate-2' 
                            : 'border-transparent text-black hover:border-black hover:bg-neo-muted hover:shadow-neo-sm hover:-translate-y-1'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            {/* Language Switcher */}
            <Link
              href={`/${switchLocale}${pathname.replace(`/${locale}`, '')}`}
              className="px-4 py-2 text-black font-black uppercase tracking-widest border-4 border-black bg-white shadow-neo-sm hover:bg-neo-muted hover:-translate-y-1 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-100 rotate-1"
            >
              {switchLocale.toUpperCase()}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden w-12 h-12 border-4 border-black bg-neo-accent shadow-neo-sm flex items-center justify-center
                        hover:-translate-y-1 hover:shadow-neo-md active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-100 text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
