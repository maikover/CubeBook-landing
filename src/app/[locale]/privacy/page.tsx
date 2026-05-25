import { Card } from '@/components/ui';

const locales = ['en', 'es', 'pt', 'fr', 'de', 'it', 'ja', 'ko', 'zh', 'ru'];

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const privacyData = (await import(`../../../../locales/${locale}/privacy.json`)).default;

  const t = (key: string): string => {
    return key.split('.').reduce((obj: any, i) => obj?.[i], privacyData) as string || key;
  };

  const sections = [
    'introduction',
    'informationWeCollect',
    'howWeUse',
    'dataSharing',
    'dataSecurity',
    'yourRights',
    'cookies',
    'children',
    'changes',
    'contact'
  ];

  return (
    <main className="min-h-screen bg-background py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card variant="flat" className="mb-8">
          <div className="text-center mb-8">
            <h1 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-4">
              {t('title')}
            </h1>
            <p className="text-muted">{t('lastUpdated')}</p>
          </div>
        </Card>

        <Card variant="flat" className="prose prose-lg max-w-none">
          <div className="space-y-8">
            {sections.map((sectionId) => (
              <section key={sectionId} id={sectionId} className="border-b border-muted/10 pb-8 last:border-0">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  {t(`sections.${sectionId}.title`)}
                </h2>
                <p className="text-muted leading-relaxed">
                  {t(`sections.${sectionId}.content`)}
                </p>
              </section>
            ))}
          </div>
        </Card>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
