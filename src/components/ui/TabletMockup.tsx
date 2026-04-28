import React from 'react';

interface TabletMockupProps {
  imageSrc: string;
  alt: string;
  className?: string;
  accentColor?: string;
}

export const TabletMockup: React.FC<TabletMockupProps> = ({ 
  imageSrc, 
  alt, 
  className = '',
  accentColor = 'bg-neo-accent'
}) => {
  return (
    <div className={`relative mx-auto w-full max-w-[85%] aspect-[9/16] bg-white border-[10px] border-black rounded-[2rem] overflow-hidden p-3 ${className}`}>
      {/* Tablet Camera / Sensors (Neo-brutalist style) */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        <div className="w-2 h-2 bg-black rounded-full opacity-30"></div>
        <div className="w-2 h-2 bg-black rounded-full"></div>
      </div>
      
      {/* Screen Frame */}
      <div className="w-full h-full border-[4px] border-black rounded-[1.2rem] overflow-hidden relative bg-neo-bg">
        <img 
          src={imageSrc} 
          alt={alt} 
          className="w-full h-full object-cover object-top"
        />
        {/* Subtle neo-brutalist shine */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none"></div>
      </div>

      {/* Side Buttons (Neo-brutalist blocks) */}
      <div className={`absolute top-24 -right-[12px] w-[8px] h-16 ${accentColor} border-y-4 border-r-4 border-black rounded-r-md shadow-neo-sm`}></div>
      <div className="absolute top-44 -right-[12px] w-[8px] h-24 bg-black border-y-4 border-r-4 border-black rounded-r-md"></div>
    </div>
  );
};
