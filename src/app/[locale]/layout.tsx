import { TranslationProvider } from '@/contexts/TranslationContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const locales = ['en', 'es', 'pt', 'fr', 'de', 'it', 'ja', 'ko', 'zh', 'ru'];

const titles: Record<string, { title: string; description: string }> = {
  en: { title: 'Cube Book - Read Faster with AI', description: 'Transform your reading experience with Cube Book. AI-powered speech recognition, vocabulary building, and cross-language comparison.' },
  es: { title: 'Cube Book - Lee Más Rápido con IA', description: 'Transforma tu experiencia de lectura con Cube Book. Reconocimiento de voz con IA, construcción de vocabulario y comparación entre idiomas.' },
  pt: { title: 'Cube Book - Leia Mais Rápido com IA', description: 'Transforme sua experiência de leitura com Cube Book. Reconhecimento de voz com IA, construção de vocabulário e comparação entre idiomas.' },
  fr: { title: 'Cube Book - Lisez Plus Vite avec l\'IA', description: 'Transformez votre expérience de lecture avec Cube Book. Reconnaissance vocale IA, construction de vocabulaire et comparaison entre langues.' },
  de: { title: 'Cube Book - Lesen Sie Schneller mit KI', description: 'Transformieren Sie Ihr Leseerlebnis mit Cube Book. KI-Spracherkennung, Vokabelaufbau und sprachübergreifender Vergleich.' },
  it: { title: 'Cube Book - Leggi Più Velocemente con l\'IA', description: 'Trasforma la tua esperienza di lettura con Cube Book. Riconoscimento vocale IA, costruzione del vocabolario e confronto tra lingue.' },
  ja: { title: 'Cube Book - AIでより速く読む', description: 'Cube Bookで読書体験を変える。AI音声認識、語彙構築、言語間比較。' },
  ko: { title: 'Cube Book - AI로 더 빨리 읽기', description: 'Cube Book로 독서 경험을 변화시키세요. AI 음성 인식, 어휘 구축, 언어 간 비교.' },
  zh: { title: 'Cube Book - 用AI读得更快', description: '用Cube Book改变您的阅读体验。AI语音识别、词汇构建、跨语言比较。' },
  ru: { title: 'Cube Book - Читайте быстрее с ИИ', description: 'Преобразуйте свой читательский опыт с Cube Book. Распознавание речи ИИ, построение словаря и сравнение языков.' }
};

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
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const meta = titles[locale] || titles.en;
  return {
    title: meta.title,
    description: meta.description
  };
}