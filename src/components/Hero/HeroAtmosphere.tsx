import React from 'react';

export const HeroAtmosphere: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden select-none" aria-hidden="true">
      {/* 1. Deep Midnight Navy & Cyan Aura centered behind Moamen's head/shoulders */}
      <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[600px] sm:w-[750px] lg:w-[900px] h-[450px] bg-gradient-to-b from-cyan-600/12 via-[#07111c]/30 to-transparent rounded-full blur-[120px]" />
      
      {/* 2. Restrained Electric Blue Accent behind left and right tech cards */}
      <div className="absolute top-[25%] left-[20%] w-[380px] h-[380px] bg-cyan-500/8 rounded-full blur-[110px]" />
      <div className="absolute top-[30%] right-[20%] w-[380px] h-[380px] bg-blue-500/8 rounded-full blur-[110px]" />

      {/* 3. Subtle Cyber Grid (very faint, low opacity) */}
      <div className="absolute inset-0 bg-cyber-grid opacity-15" />

      {/* 4. Subtle Bezier Light Trails (cyan glowing sweeps behind Moamen) */}
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M -100 320 C 350 260, 600 480, 1150 280 C 1450 180, 1750 380, 2100 300"
          fill="none"
          stroke="url(#trail-gradient-1)"
          strokeWidth="1.2"
        />
        <path
          d="M -50 480 C 400 520, 750 220, 1250 420 C 1600 520, 1850 320, 2150 400"
          fill="none"
          stroke="url(#trail-gradient-2)"
          strokeWidth="0.9"
        />
        <defs>
          <linearGradient id="trail-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0" />
            <stop offset="35%" stopColor="#00f0ff" stopOpacity="0.4" />
            <stop offset="65%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00f0ff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="trail-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#00f0ff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* 5. Smooth bottom transition to dark floor */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#030509] via-[#030509]/80 to-transparent" />
    </div>
  );
};

export default HeroAtmosphere;
