import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'es'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if pathname already includes a locale
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}`) || pathname === `/${locale}`
  );

  // Get locale from cookie if available
  const localeCookie = request.cookies.get('NEXT_LOCALE')?.value;
  const acceptLanguage = request.headers.get('accept-language') || '';

  // Determine the preferred locale
  let locale = localeCookie;
  if (!locale || !locales.includes(locale as 'en' | 'es')) {
    locale = detectPreferredLocale(acceptLanguage);
  }

  // If pathname doesn't have locale, redirect to locale-prefixed URL
  if (!pathnameHasLocale && pathname !== '/favicon.ico') {
    const localePath = `/${locale}${pathname}`;
    const url = request.nextUrl.clone();
    url.pathname = localePath;

    const response = NextResponse.redirect(url);

    // Set cookie to remember the user's language preference
    response.cookies.set('NEXT_LOCALE', locale, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
      sameSite: 'lax'
    });

    return response;
  }

  // If the pathname has a valid locale, ensure cookie is set
  if (pathnameHasLocale) {
    const pathLocale = locales.find(loc => pathname.startsWith(`/${loc}`));
    if (pathLocale) {
      const response = NextResponse.next();
      response.cookies.set('NEXT_LOCALE', pathLocale, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/',
        sameSite: 'lax'
      });
      return response;
    }
  }

  return NextResponse.next();
}

function detectPreferredLocale(acceptLanguage: string): string {
  if (!acceptLanguage) return defaultLocale;

  const languages = acceptLanguage
    .split(',')
    .map(lang => {
      const [code, q] = lang.trim().split(';');
      return {
        code: code.toLowerCase().split('-')[0],
        quality: q ? parseFloat(q.replace('q=', '')) : 1.0
      };
    })
    .sort((a, b) => b.quality - a.quality);

  for (const lang of languages) {
    if (locales.includes(lang.code as 'en' | 'es')) {
      return lang.code;
    }
  }

  return defaultLocale;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|gif|webp|ico)$|_next|images).*)']
};

