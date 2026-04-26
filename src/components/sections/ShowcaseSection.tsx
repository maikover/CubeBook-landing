'use client';

import { DeviceMockup } from '@/components/ui/DeviceMockup';
import { useTranslation } from '@/contexts/TranslationContext'; // You might need to add these strings or hardcode for now

export default function ShowcaseSection() {
  const { t } = useTranslation();

  const features = [
    {
      id: 'library',
      title: t('showcase.library.title'),
      description: t('showcase.library.description'),
      imageSrc: '/images/screenshots/Screenshot_20260426_132333.png',
      badge: t('showcase.library.badge'),
      color: 'bg-neo-accent',
      rotation: 'rotate-1'
    },
    {
      id: 'ai-chat',
      title: t('showcase.aiGuru.title'),
      description: t('showcase.aiGuru.description'),
      imageSrc: '/images/screenshots/Screenshot_20260426_132716.png',
      badge: t('showcase.aiGuru.badge'),
      color: 'bg-neo-secondary',
      rotation: '-rotate-2'
    },
    {
      id: 'stats',
      title: t('showcase.stats.title'),
      description: t('showcase.stats.description'),
      imageSrc: '/images/screenshots/Screenshot_20260426_132610.png',
      badge: t('showcase.stats.badge'),
      color: 'bg-neo-muted',
      rotation: 'rotate-2'
    }
  ];

  return (
    <section className="bg-neo-bg py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-t-8 border-black relative z-20 overflow-hidden" id="showcase">
      {/* Background texture */}
      <div className="absolute inset-0 bg-halftone opacity-50 mix-blend-multiply pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24 relative">
           <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[10rem] font-black text-black opacity-5 pointer-events-none whitespace-nowrap">
              {t('showcase.preview')}
           </div>
           <h2 className="text-display-sm md:text-display text-black mb-6 inline-block bg-white border-8 border-black px-8 py-4 shadow-neo-xl -rotate-1">
             {t('showcase.title').split(' ')[0]} <span className="text-neo-accent">{t('showcase.title').split(' ').slice(1).join(' ')}</span>
           </h2>
           <p className="text-xl md:text-2xl font-bold bg-neo-secondary border-4 border-black inline-block p-4 shadow-neo-sm rotate-1 mt-4 max-w-2xl">
             {t('showcase.subtitle')}
           </p>
        </div>

        {/* Feature Rows */}
        <div className="space-y-32">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={feature.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>
                
                {/* Image Side - Mockup */}
                <div className="w-full lg:w-1/2 flex justify-center perspective-1000 relative">
                  {/* Decorative blobs behind phone */}
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] ${feature.color} border-8 border-black rounded-full mix-blend-multiply opacity-80 blur-sm pointer-events-none -z-10`}></div>
                  <div className="absolute -bottom-10 -right-10 bg-white border-4 border-black px-4 py-2 font-black text-xl shadow-neo-md rotate-[15deg] z-30">
                    {feature.badge}
                  </div>
                  
                  <DeviceMockup 
                    imageSrc={feature.imageSrc} 
                    alt={`Screenshot of ${feature.title}`}
                    className={feature.rotation}
                  />
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-1/2 flex flex-col items-start">
                  <div className={`font-black text-8xl text-black opacity-20 -mb-10 ml-4 ${isEven ? 'rotate-[-5deg]' : 'rotate-[5deg]'}`}>
                    0{index + 1}
                  </div>
                  <div className="bg-white border-8 border-black p-8 md:p-12 shadow-[12px_12px_0_0_#000] relative">
                    {/* Pin decorative */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-neo-accent border-4 border-black flex items-center justify-center shadow-neo-sm z-10">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>

                    <h3 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tighter mb-6 text-black relative z-10">
                      {feature.title}
                    </h3>
                    <p className="font-bold text-lg md:text-xl leading-relaxed text-black z-10 relative">
                      {feature.description}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
