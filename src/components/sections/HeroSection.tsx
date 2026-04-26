'use client';

import { Button, FeatureCard } from '@/components/ui';
import { MicIcon, TranslateIcon, BookOpenIcon, SparklesIcon } from '@/components/ui/icons';
import { useTranslation } from '@/contexts/TranslationContext';

export default function HeroSection() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <MicIcon />,
      title: t('features.speechRecognition.title'),
      description: t('features.speechRecognition.description')
    },
    {
      icon: <TranslateIcon />,
      title: t('features.languageComparison.title'),
      description: t('features.languageComparison.description')
    },
    {
      icon: <BookOpenIcon />,
      title: t('features.vocabularyBuilder.title'),
      description: t('features.vocabularyBuilder.description')
    },
    {
      icon: <SparklesIcon />,
      title: t('features.aiSummaries.title'),
      description: t('features.aiSummaries.description')
    }
  ];

  return (
    <section className="py-20 md:py-32" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Content */}
        <div className="text-center mb-16 md:mb-24">
          <h1 className="font-display text-5xl md:text-7xl font-extrabold text-foreground tracking-tight mb-6">
            {t('tagline')}
          </h1>
          <p className="text-xl md:text-2xl text-muted max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-24">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto text-center" id="download">
          <div className="bg-background rounded-card p-8 md:p-12 neumorphic">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('getStarted')}
            </h2>
            <p className="text-muted mb-8 max-w-lg mx-auto">
              {t('subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto">
                {t('downloadNow')}
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                {t('learnMore')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
