import React from 'react';

export const HeroAtmosphere: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden" aria-hidden="true">
      {/* 1. Deep Midnight Navy & Dark Background Gradients (70% dark cinematic atmosphere) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] lg:w-[1100px] h-[500px] bg-gradient-to-b from-[#08131d]/40 via-[#050a11]/20 to-transparent rounded-full blur-[140px]" />
      
      {/* 2. Restrained Cyan & Electric Blue Volumetric Light Cones */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[450px] h-[450px] bg-cyan-600/10 rounded-full blur-[130px]" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[140px]" />

      {/* 3. Subtle Cyber Grid (very faint, low opacity) */}
      <div className="absolute inset-0 bg-cyber-grid opacity-15" />

      {/* 4. Peripheral Vignette to anchor the dark mood */}
      <div className="absolute inset-0 bg-radial-vignette opacity-70" />

      {/* 5. Bottom Floor Fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#03070d] via-[#03070d]/80 to-transparent" />
    </div>
  );
};

export default HeroAtmosphere;

