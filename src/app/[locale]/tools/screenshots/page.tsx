'use client';

import React, { useRef, useState } from 'react';
import { TabletMockup } from '@/components/ui/TabletMockup';
import { toPng } from 'html-to-image';

const SCREENSHOT_DATA = [
  {
    id: 1,
    img: '/capturas/Screenshot_20260426_132333.png',
    title: { en: 'Organize Your Digital Library', es: 'Organiza tu biblioteca digital' },
    subtitle: { en: 'Total control over your collection with a bold, unique interface.', es: 'Control total de tu colección con un estilo único.' },
    action: { en: 'ORGANIZE', es: 'ORGANIZA' },
    color: 'bg-neo-secondary',
    accent: 'bg-neo-accent',
    layout: 'center',
    bgPattern: 'dots',
    tilt: 'rotate-0',
    decorations: [
      { type: 'star', position: 'top-8 -right-2', color: 'white' },
      { type: 'circle', position: 'top-[45%] -left-4', color: 'bg-white' }
    ]
  },
  {
    id: 2,
    img: '/capturas/Screenshot_20260426_132545.png',
    title: { en: 'Read Without Distractions', es: 'Lectura sin distracciones' },
    subtitle: { en: 'Immersive experience designed for maximum focus on your favorite stories.', es: 'Experiencia inmersiva diseñada para el máximo enfoque.' },
    action: { en: 'READ', es: 'LEE' },
    color: 'bg-neo-accent',
    accent: 'bg-neo-secondary',
    layout: 'left',
    bgPattern: 'grid',
    tilt: 'rotate-1',
    decorations: [
      { type: 'pill', position: 'top-12 -right-6', color: 'bg-white' },
      { type: 'square', position: 'top-[50%] right-2', color: 'bg-neo-secondary' }
    ]
  },
  {
    id: 3,
    img: '/capturas/Screenshot_20260426_132610.png',
    title: { en: 'Listen Anywhere with AI', es: 'Escucha donde sea con IA' },
    subtitle: { en: 'Transform any book into an audiobook with natural Text-to-Speech voices.', es: 'Convierte cualquier libro en audiolibro con voces naturales.' },
    action: { en: 'LISTEN', es: 'ESCUCHA' },
    color: 'bg-neo-muted',
    accent: 'bg-neo-accent',
    layout: 'right',
    bgPattern: 'lines',
    tilt: '-rotate-1',
    decorations: [
      { type: 'triangle', position: 'top-12 -left-4', color: 'white' },
      { type: 'circle', position: 'top-[45%] left-6', color: 'bg-neo-accent' }
    ]
  },
  {
    id: 4,
    img: '/capturas/Screenshot_20260426_132620.png',
    title: { en: 'Master Your Reading Habits', es: 'Domina tus hábitos' },
    subtitle: { en: 'Detailed insights and advanced statistics to help you reach your goals.', es: 'Estadísticas avanzadas para ayudarte a alcanzar tus metas.' },
    action: { en: 'TRACK', es: 'SIGUE' },
    color: 'bg-white',
    accent: 'bg-neo-muted',
    layout: 'center',
    bgPattern: 'solid',
    tilt: 'rotate-0',
    decorations: [
      { type: 'star', position: 'top-10 -left-6', color: 'bg-neo-secondary' },
      { type: 'pill', position: 'top-[50%] -right-8', color: 'bg-neo-muted' }
    ]
  },
  {
    id: 5,
    img: '/capturas/Screenshot_20260426_132632.png',
    title: { en: 'Chat with Your Books', es: 'Chatea con tus libros' },
    subtitle: { en: 'Ask questions, summarize chapters, and analyze text with our powerful AI.', es: 'Haz preguntas, resume y analiza textos con potente IA.' },
    action: { en: 'ANALYZE', es: 'ANALIZA' },
    color: 'bg-neo-accent',
    accent: 'bg-neo-secondary',
    layout: 'left',
    bgPattern: 'dots',
    tilt: '-rotate-1',
    decorations: [
      { type: 'square', position: 'top-8 -right-4', color: 'bg-white' },
      { type: 'triangle', position: 'top-[45%] right-8', color: 'white' }
    ]
  },
  {
    id: 6,
    img: '/capturas/Screenshot_20260426_132716.png',
    title: { en: 'Smart Recommendations', es: 'Recomendaciones' },
    subtitle: { en: 'Discover your next adventure based on your unique reading history and tastes.', es: 'Descubre tu próxima aventura basada en tus gustos únicos.' },
    action: { en: 'DISCOVER', es: 'DESCUBRE' },
    color: 'bg-neo-secondary',
    accent: 'bg-neo-muted',
    layout: 'right',
    bgPattern: 'grid',
    tilt: 'rotate-1',
    decorations: [
      { type: 'circle', position: 'top-10 -left-6', color: 'bg-white' },
      { type: 'star', position: 'top-[50%] left-4', color: 'white' }
    ]
  }
];

export default function ScreenshotGenerator() {
  const [lang, setLang] = useState<'en' | 'es'>('es');
  const [device, setDevice] = useState<'phone' | 'tablet'>('tablet');
  const canvasRefs = useRef<(HTMLDivElement | null)[]>([]);

  React.useEffect(() => {
    console.log('CubeBook Screenshot Generator v2.2 Loaded');
  }, []);

  const getDimensions = () => {
    // Both are 9:16 as requested, only the mockup changes
    return { width: 1080, height: 1920, aspect: 'aspect-[9/16]', previewWidth: '360px', previewHeight: '640px' };
  };

  const downloadScreenshot = async (index: number) => {
    const node = canvasRefs.current[index];
    if (node) {
      // By using pixelRatio: 3 on a 360x640 container, we get exactly 1080x1920
      // without breaking Flexbox layout during the capture process.
      const dataUrl = await toPng(node, {
        pixelRatio: 3,
      });
      const link = document.createElement('a');
      link.download = `cubebook-${device}-${lang}-${index + 1}.png`;
      link.href = dataUrl;
      link.click();
    }
  };

  const downloadAll = async () => {
    for (let i = 0; i < SCREENSHOT_DATA.length; i++) {
      await downloadScreenshot(i);
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  };

  const dims = getDimensions();

  return (
    <div className="min-h-screen bg-neo-bg p-8 font-space">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8">
          <div>
            <h1 className="text-5xl font-black mb-2 uppercase tracking-tight flex items-center gap-4 flex-wrap">
              Screenshot Generator
              <span className="text-xs bg-red-500 text-white px-2 py-1 rounded">V2.4 FIXED EXPORT</span>
            </h1>
            <p className="text-xl font-bold opacity-70">
              Generate Play Store Screenshots for Phone & Tablet
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6">
            <div className="flex border-4 border-black rounded-none overflow-hidden shadow-neo-sm">
              <button 
                onClick={() => setDevice('phone')}
                className={`px-6 py-2 font-black uppercase transition-colors ${device === 'phone' ? 'bg-neo-secondary' : 'bg-white hover:bg-neo-bg'}`}
              >
                Celular (9:16)
              </button>
              <button 
                onClick={() => setDevice('tablet')}
                className={`px-6 py-2 font-black uppercase border-l-4 border-black transition-colors ${device === 'tablet' ? 'bg-neo-secondary' : 'bg-white hover:bg-neo-bg'}`}
              >
                Tablet 7" (9:16)
              </button>
            </div>

            <div className="flex border-4 border-black rounded-none overflow-hidden shadow-neo-sm">
              <button 
                onClick={() => setLang('es')}
                className={`px-6 py-2 font-black uppercase transition-colors ${lang === 'es' ? 'bg-neo-accent text-white' : 'bg-white hover:bg-neo-bg'}`}
              >
                Español
              </button>
              <button 
                onClick={() => setLang('en')}
                className={`px-6 py-2 font-black uppercase border-l-4 border-black transition-colors ${lang === 'en' ? 'bg-neo-accent text-white' : 'bg-white hover:bg-neo-bg'}`}
              >
                English
              </button>
            </div>
            
            <button 
              onClick={downloadAll}
              className="bg-black text-white px-8 py-2 border-4 border-black font-black uppercase shadow-neo-sm hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              Download All
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {SCREENSHOT_DATA.map((data, idx) => {
            
            // Dynamic background patterns
            let bgStyle = {};
            if (data.bgPattern === 'dots') {
              bgStyle = { backgroundImage: 'radial-gradient(black 2px, transparent 0)', backgroundSize: '30px 30px', opacity: 0.15 };
            } else if (data.bgPattern === 'grid') {
              bgStyle = { backgroundImage: 'linear-gradient(black 2px, transparent 2px), linear-gradient(90deg, black 2px, transparent 2px)', backgroundSize: '40px 40px', opacity: 0.1 };
            } else if (data.bgPattern === 'lines') {
              bgStyle = { backgroundImage: 'repeating-linear-gradient(45deg, black, black 2px, transparent 2px, transparent 20px)', opacity: 0.05 };
            }

            // Layout alignments
            const isLeft = data.layout === 'left';
            const isRight = data.layout === 'right';
            const textAlignment = isLeft ? 'text-left items-start' : isRight ? 'text-right items-end' : 'text-center items-center';

            return (
            <div key={data.id} className="flex flex-col gap-4">
              <div 
                ref={el => canvasRefs.current[idx] = el}
                className={`relative ${data.color} border-4 border-black overflow-hidden flex flex-col items-center`}
                style={{ width: dims.previewWidth, height: dims.previewHeight }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 pointer-events-none" style={bgStyle}></div>
                
                {/* Decorations */}
                {data.decorations?.map((dec, i) => (
                  <div key={i} className={`absolute ${dec.position} z-0 pointer-events-none`}>
                    {dec.type === 'circle' && <div className={`w-12 h-12 rounded-full border-4 border-black ${dec.color} shadow-neo-sm`}></div>}
                    {dec.type === 'pill' && <div className={`w-16 h-8 rounded-full border-4 border-black ${dec.color} shadow-neo-sm rotate-12`}></div>}
                    {dec.type === 'square' && <div className={`w-10 h-10 border-4 border-black ${dec.color} shadow-neo-sm -rotate-12`}></div>}
                    {dec.type === 'star' && (
                      <svg viewBox="0 0 100 100" className="w-14 h-14 overflow-visible drop-shadow-[3px_3px_0_rgba(0,0,0,1)]">
                        <polygon points="50,5 60,40 95,50 60,60 50,95 40,60 5,50 40,40" fill={dec.color.replace('bg-', '') === 'white' ? 'white' : 'currentColor'} stroke="black" strokeWidth="6" strokeLinejoin="miter" className={dec.color.startsWith('bg-') ? dec.color.replace('bg-', 'text-') : ''} />
                      </svg>
                    )}
                    {dec.type === 'triangle' && (
                      <svg viewBox="0 0 100 100" className="w-12 h-12 overflow-visible drop-shadow-[3px_3px_0_rgba(0,0,0,1)] rotate-12">
                        <polygon points="50,10 90,90 10,90" fill={dec.color.replace('bg-', '') === 'white' ? 'white' : 'currentColor'} stroke="black" strokeWidth="6" strokeLinejoin="miter" className={dec.color.startsWith('bg-') ? dec.color.replace('bg-', 'text-') : ''} />
                      </svg>
                    )}
                  </div>
                ))}
                
                {/* Action Badge */}
                <div className={`mt-10 mb-2 z-30 w-full px-6 flex ${isLeft ? 'justify-start' : isRight ? 'justify-end' : 'justify-center'}`}>

                  <span className={`px-4 py-2 border-4 border-black font-black text-sm shadow-neo-sm ${data.accent} uppercase`}>
                    {data.action[lang]}
                  </span>
                </div>

                {/* Text Section */}
                <div className={`relative z-10 px-6 mb-6 w-full flex flex-col ${textAlignment}`}>
                  <h2 className={`${device === 'phone' ? 'text-2xl' : 'text-3xl'} font-black uppercase leading-tight mb-4 text-white`} style={{ textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 4px 4px 0 #000' }}>
                    {data.title[lang]}
                  </h2>
                  <div className={`w-16 h-2 bg-black mb-4 ${data.accent} border-2 border-black`}></div>
                  <p className={`${device === 'phone' ? 'text-[15px]' : 'text-lg'} font-bold leading-snug px-2 text-black`}>
                    {data.subtitle[lang]}
                  </p>
                </div>

                {/* Mockup Section */}
                <div className="relative flex-1 w-full flex items-start justify-center px-4 overflow-visible z-20">
                  <div className={`w-full max-w-[280px] transition-transform ${data.tilt} ${device === 'phone' ? 'translate-y-2 scale-100' : 'translate-y-4 scale-110'}`}>
                    {device === 'phone' ? (
                      // Removed shadow-neo-xl to respect "no le hagas el efecto sombre al mockup"
                      <div className="relative mx-auto bg-black p-2 rounded-[2.5rem] border-4 border-black">
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-20 border-2 border-white/20"></div>
                        <img 
                          src={data.img} 
                          alt={data.title[lang]} 
                          className="w-full h-auto border-2 border-black rounded-[2.2rem]"
                        />
                      </div>
                    ) : (
                      // Added className="shadow-none" to override tablet mockup shadow
                      <TabletMockup 
                        imageSrc={data.img} 
                        alt={data.title[lang]} 
                        accentColor={data.accent}
                        className="shadow-none"
                      />
                    )}
                  </div>
                </div>

                {/* Branding Footer */}
                <div className="mt-auto mb-6 w-full flex justify-center items-center gap-3 z-30">
                  <div className="w-10 h-10 bg-black flex items-center justify-center border-4 border-white shadow-neo-sm">
                    <span className="text-white font-black text-sm">CB</span>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="bg-black text-white px-3 py-0.5 font-black text-[12px] uppercase tracking-tighter">
                      CubeBook
                    </span>
                    <span className="text-black font-black text-[10px] uppercase tracking-widest ml-1">
                      Reader App
                    </span>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => downloadScreenshot(idx)}
                className="w-full bg-white border-4 border-black py-2 font-black uppercase shadow-neo-sm hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                Download PNG
              </button>
            </div>
          );
          })}
        </div>
      </div>
    </div>
  );
}
