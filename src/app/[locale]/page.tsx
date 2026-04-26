import HeroSection from '@/components/sections/HeroSection';
import ShowcaseSection from '@/components/sections/ShowcaseSection';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ShowcaseSection />
    </div>
  );
}

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const commonData = (await import(`../../../locales/${locale}/common.json`)).default;

  return {
    title: commonData.meta?.title || '',
    description: commonData.meta?.description || ''
  };
}
