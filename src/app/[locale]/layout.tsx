import { TranslationProvider } from '@/contexts/TranslationContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // Load translation messages for the current locale
  const messages = (await import(`../../../locales/${locale}/common.json`)).default;

  return (
    <TranslationProvider messages={messages} locale={locale}>
      <div className="min-h-screen flex flex-col bg-background">
        <Header locale={locale} />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </TranslationProvider>
  );
}

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: locale === 'es' ? 'Cube Book - Lee Más Rápido con IA' : 'Cube Book - Read Faster with AI',
    description: locale === 'es'
      ? 'Transforma tu experiencia de lectura con Cube Book. Reconocimiento de voz con IA, construcción de vocabulario y comparación entre idiomas.'
      : 'Transform your reading experience with Cube Book. AI-powered speech recognition, vocabulary building, and cross-language comparison.'
  };
}
