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
    <header className="sticky top-0 z-50 bg-[rgba(255,253,245,0.8)] backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
           {/* Logo */}
           <Link href={`/${locale}`} className="flex items-center space-x-2 group">
             <img 
               src="/logo.png" 
               alt="Cube Book Logo" 
               className="w-10 h-10 object-contain"
             />
             <span className="font-space font-black text-xl text-black">
               Cube Book
             </span>
           </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-black font-bold uppercase tracking-widest border-4 border-black bg-white shadow-sm hover:bg-yellow-300/90 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none duration-100
                          ${pathname === link.href ? 'bg-yellow-300' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            {/* Language Switcher */}
            <Link
              href={`/${switchLocale}${pathname.replace(`/${locale}`, '')}`}
              className="px-3 py-1 text-black font-bold uppercase tracking-widest border-4 border-black bg-white shadow-sm hover:bg-yellow-300/90 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none duration-100"
            >
              {switchLocale.toUpperCase()}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden w-10 h-10 border-4 border-black bg-white shadow-sm flex items-center justify-center
                        hover:bg-yellow-300/90 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none duration-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
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
