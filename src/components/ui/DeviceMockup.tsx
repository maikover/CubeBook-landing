import React from 'react';

interface DeviceMockupProps {
  imageSrc: string;
  alt: string;
  className?: string;
}

export const DeviceMockup: React.FC<DeviceMockupProps> = ({ imageSrc, alt, className = '' }) => {
  return (
    <div className={`relative mx-auto w-full max-w-[320px] md:max-w-[360px] aspect-[9/19.5] bg-white border-[8px] border-black rounded-[3rem] shadow-neo-xl overflow-hidden p-2 group transition-transform duration-300 hover:-translate-y-2 hover:rotate-1 ${className}`}>
      {/* Neo-brutalist Camera Hole / Island */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20 shadow-neo-sm border-2 border-neo-bg flex items-center justify-center">
        <div className="w-3 h-3 bg-white rounded-full ml-12 opacity-50"></div>
      </div>
      
      {/* Screen Frame */}
      <div className="w-full h-full border-4 border-black rounded-[2.5rem] overflow-hidden relative bg-neo-bg">
        <img 
          src={imageSrc} 
          alt={alt} 
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
        />
        {/* Anti-glare neo-brutalist reflection (optional) */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-transparent via-white/10 to-white/30 pointer-events-none mix-blend-overlay"></div>
      </div>

      {/* Physical Buttons Mockup (Neo-brutalist style blocks) */}
      <div className="absolute top-32 -left-[14px] w-[6px] h-12 bg-neo-accent border-y-4 border-l-4 border-black rounded-l-md"></div>
      <div className="absolute top-48 -left-[14px] w-[6px] h-20 bg-neo-secondary border-y-4 border-l-4 border-black rounded-l-md"></div>
      <div className="absolute top-40 -right-[14px] w-[6px] h-16 bg-neo-muted border-y-4 border-r-4 border-black rounded-r-md"></div>
    </div>
  );
};
