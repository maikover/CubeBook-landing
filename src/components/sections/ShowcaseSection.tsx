'use client';

import { DeviceMockup } from '@/components/ui/DeviceMockup';
import { useTranslation } from '@/contexts/TranslationContext'; // You might need to add these strings or hardcode for now

export default function ShowcaseSection() {
  const { t } = useTranslation();

  const features = [
    {
      id: 'library',
      title: 'YOUR LIBRARY, UNCHAINED',
      description: 'Organize your entire reading universe. With our ultra-visual bookshelf, tracking what you read, what you finished, and what you want to read is as satisfying as turning a physical page.',
      imageSrc: '/images/screenshots/Screenshot_20260426_132333.png',
      badge: 'BEAUTIFUL UI',
      color: 'bg-neo-accent',
      rotation: 'rotate-1'
    },
    {
      id: 'ai-chat',
      title: 'YOUR PERSONAL AI GURU',
      description: 'Stuck in a reading rut? Our AI analyzes your reading history and suggests books that perfectly match your vibe. It even answers questions about the plot, characters, and deeply hidden themes.',
      imageSrc: '/images/screenshots/Screenshot_20260426_132716.png', // Assuming 132716 is the chat
      badge: 'SMART AI',
      color: 'bg-neo-secondary',
      rotation: '-rotate-2'
    },
    {
      id: 'stats',
      title: 'FLEX YOUR STATS',
      description: 'Numbers that make you proud. Track your reading streaks, daily minutes, and completion percentages in an absolutely gorgeous, no-nonsense dashboard.',
      imageSrc: '/images/screenshots/Screenshot_20260426_132610.png', // Assuming 132610 is stats
      badge: 'DATA NERD',
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
              APP PREVIEW
           </div>
           <h2 className="text-display-sm md:text-display text-black mb-6 inline-block bg-white border-8 border-black px-8 py-4 shadow-neo-xl -rotate-1">
             INSIDE <span className="text-neo-accent">CUBE BOOK</span>
           </h2>
           <p className="text-xl md:text-2xl font-bold bg-neo-secondary border-4 border-black inline-block p-4 shadow-neo-sm rotate-1 mt-4 max-w-2xl">
             Warning: Our interface is highly addictive.
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
