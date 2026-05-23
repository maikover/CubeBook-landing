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
    <div className="relative overflow-hidden w-full bg-halftone">
      
      {/* Decorative Floating Elements */}
      <div className="hidden lg:block absolute top-20 right-10 rotate-12 bg-neo-accent border-4 border-black p-4 shadow-neo-md z-0">
        <svg className="w-12 h-12 stroke-black" viewBox="0 0 24 24" fill="none" strokeWidth="3">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      </div>
      <div className="hidden lg:flex absolute bottom-40 left-10 -rotate-12 bg-neo-secondary border-4 border-black h-24 w-24 rounded-full items-center justify-center shadow-neo-md z-0 text-black font-black text-xl">
        WOW
      </div>

      <section className="relative z-10 pt-24 pb-20 md:pt-32 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="hero">
        
        {/* Asymmetrical Hero Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Sticker Badge */}
            <div className="badge rotate-3 mb-8 hover:rotate-6 transition-all duration-200 shadow-neo-sm">
              NEW RELEASE 🚀
            </div>

            <h1 className="text-display-sm md:text-display text-black mb-8 relative">
              <span className="block mb-2">{t('hero.readFaster')}</span>
              <span className="block bg-neo-accent text-white px-4 border-4 border-black shadow-neo-sm -rotate-2 w-max text-stroke relative z-10">
                 {t('hero.thinkDeeper')}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl font-bold bg-white border-4 border-black p-6 shadow-neo-sm mb-10 max-w-2xl rotate-1">
              {t('tagline')}
              <br />
              {t('subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <a href="https://play.google.com/store/apps/details?id=com.cubebook" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" variant="primary" className="w-full text-lg h-16 pointer-events-none hover:rotate-2 shadow-neo-md text-white border-8 border-black">
                  {t('downloadNow')}
                </Button>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="w-full aspect-square bg-neo-muted border-8 border-black shadow-neo-xl rotate-3 flex flex-col p-8 overflow-hidden hover:rotate-0 transition-transform duration-300">
              {/* Pseudo UI element as decoration inside the hero right side */}
              <div className="w-full flex justify-between border-b-4 border-black pb-4 mb-4">
                 <div className="flex gap-2 leading-none">
                    <div className="w-6 h-6 border-4 border-black rounded-full bg-neo-accent"></div>
                    <div className="w-6 h-6 border-4 border-black rounded-full bg-neo-secondary"></div>
                 </div>
                 <div className="font-space font-black uppercase text-xl text-black">FILE_X.TXT</div>
              </div>
              <div className="flex-1 border-4 border-black bg-white p-4 font-space font-bold uppercase text-2xl leading-none flex flex-col justify-center text-center shadow-neo-invert">
                 THIS IS YOUR BRAIN<br/>ON CUBE BOOK.<br/>
                 <br/>
                 <span className="text-neo-accent text-5xl">⚡</span>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-neo-secondary border-4 border-black px-6 py-4 shadow-neo-sm font-black text-2xl -rotate-6">
              100% FREE!
            </div>
          </div>
        </div>

      </section>
      
      {/* Neo-brutalist Marquee */}
      <div className="w-full border-y-8 border-black bg-neo-accent overflow-hidden py-4 flex rotate-1 -mx-4 left-0 absolute bottom-0 shadow-neo-md" style={{ width: '110vw' }}>
        <div className="animate-[marquee_20s_linear_infinite] whitespace-nowrap flex space-x-12 items-center flex-shrink-0">
          {[...Array(10)].map((_, i) => (
             <span key={i} className="text-white font-black text-4xl uppercase tracking-widest flex items-center gap-8">
               #NEOBRUTALISM <span className="text-black text-5xl">★</span> CUBE BOOK LETS YOU READ FASTER <span className="text-black text-5xl">★</span>
             </span>
          ))}
        </div>
      </div>
      
      {/* Features Section */}
      <section className="bg-neo-bg pt-8 lg:pt-32 pb-24 border-t-8 border-black px-4 sm:px-6 lg:px-8 border-t-8 relative z-20" id="features">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
             <h2 className="text-display-sm md:text-display text-black mb-4 bg-neo-secondary border-4 border-black px-6 py-2 shadow-neo-md rotate-2 inline-block">
               {t('navigation.features')}
             </h2>
          </div>
  
          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-16 md:mb-24 relative z-10">
            {features.map((feature, index) => (
              <div key={index} className="transform transition-transform duration-200" style={{ transform: `rotate(${index % 2 === 0 ? '-2deg' : '2deg'})` }}>
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  className="h-full bg-white transition-all hover:bg-neo-secondary"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Try It Out CTA Component */}
      <section className="py-24 px-4 bg-neo-muted border-t-8 border-black bg-grid relative z-20" id="download">
        <div className="max-w-4xl mx-auto relative">
           
           <div className="absolute -top-12 -left-12 opacity-50 pointer-events-none">
              <svg width="200" height="200" viewBox="0 0 100 100" className="animate-spin-slow">
                 <path d="M50 0L65 35L100 50L65 65L50 100L35 65L0 50L35 35Z" stroke="black" strokeWidth="4" fill="var(--secondary)" />
              </svg>
           </div>

           <div className="bg-white border-8 border-black p-8 md:p-16 shadow-[16px_16px_0px_0px_#000] text-center rotate-1 hover:rotate-0 transition-transform duration-300">
             <h2 className="font-display font-black text-4xl md:text-6xl text-black uppercase mb-8 tracking-tighter">
               {t('getStarted')}
             </h2>
             <p className="font-bold text-xl md:text-2xl text-black mb-10 max-w-xl mx-auto bg-neo-secondary p-4 border-4 border-black -rotate-1 shadow-neo-sm">
               {t('subtitle')}
             </p>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <a href="https://play.google.com/store/apps/details?id=com.cubebook" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                 <Button size="lg" variant="primary" className="w-full text-xl">
                   {t('downloadNow')}
                 </Button>
               </a>
             </div>
           </div>
        </div>
      </section>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 24px)); }
        }
      `}} />
    </div>
  );
}