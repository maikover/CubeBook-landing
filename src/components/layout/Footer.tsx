'use client';

import Link from 'next/link';
import { useTranslation } from '@/contexts/TranslationContext';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-white border-t-4 border-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
              <div className="flex items-center space-x-2">
              <img 
                src="/logo.png" 
                alt="Cube Book Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="font-space font-black text-xl text-black">
                {t('appName')}
              </span>
            </div>
            <p className="font-space font-bold text-black text-sm max-w-xs">
              {t('footer.description')}
            </p>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-space font-black text-2xl uppercase tracking-tighter">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-black font-bold uppercase tracking-widest border-4 border-black bg-white shadow-sm hover:bg-yellow-300/90 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none duration-100"
                >
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-black font-bold uppercase tracking-widest border-4 border-black bg-white shadow-sm hover:bg-yellow-300/90 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none duration-100"
                >
                  {t('footer.terms')}
                </Link>
              </li>
            </ul>
          </div>

           {/* Contact */}
           <div className="space-y-4">
             <h3 className="font-space font-black text-2xl uppercase tracking-tighter">Contact</h3>
             <ul className="space-y-2">
               <li>
                 <a href="mailto:contacto@arcaico.com.co" className="text-black font-bold uppercase tracking-widest border-4 border-black bg-white shadow-sm hover:bg-yellow-300/90 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none duration-100 block py-2 px-4">
                   contacto@arcaico.com.co
                 </a>
               </li>
             </ul>
           </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t-4 border-black text-center text-black font-bold uppercase tracking-widest">
          <p>
            © 2026 Cube Book. {t('footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
}
