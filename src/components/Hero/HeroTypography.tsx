import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { MagneticButton } from '../MagneticButton';

interface HeroTypographyProps {
  onViewWork: () => void;
  onStartProject: () => void;
}

export const HeroTypography: React.FC<HeroTypographyProps> = ({
  onViewWork,
  onStartProject,
}) => {
  const marqueeText = 'I BUILD DIGITAL EXPERIENCES';

  return (
    <div className="relative z-40 w-full flex flex-col items-center select-none -mt-24 sm:-mt-32 md:-mt-40 lg:-mt-44 mb-6">
      
      {/* ============================================================ */}
      {/* 1. HORIZONTAL MOVING MARQUEE (Right → Left, Seamless Loop)   */}
      {/* Positioned across Moamen's lower chest / torso               */}
      {/* ============================================================ */}
      <div className="relative w-full overflow-hidden py-3 pointer-events-none">
        
        {/* Subtle horizontal cyan lens flare accent line */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent shadow-[0_0_10px_#00f0ff] pointer-events-none z-10" />

        {/* --- LAYER A: SOLID NORMAL MARQUEE (Dimmed over Moamen's body via mask) --- */}
        <div className="marquee-solid-mask overflow-hidden py-2 select-none">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-12">
            {[...Array(6)].map((_, i) => (
              <div key={`solid-${i}`} className="flex items-center gap-12 shrink-0">
                <span className="font-heading font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-white to-cyan-200 text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase drop-shadow-[0_0_22px_rgba(0,240,255,0.4)]">
                  {marqueeText}
                </span>
                <span className="text-cyan-400/50 text-2xl sm:text-3xl">✦</span>
              </div>
            ))}
          </div>
        </div>

        {/* --- LAYER B: TRANSLUCENT OVER-BODY MARQUEE (Revealed ONLY over Moamen's body) --- */}
        <div className="absolute inset-0 marquee-body-reveal overflow-hidden py-2 select-none pointer-events-none z-50">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-12">
            {[...Array(6)].map((_, i) => (
              <div key={`translucent-${i}`} className="flex items-center gap-12 shrink-0">
                <span className="font-heading font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white/30 via-cyan-100/40 to-white/30 text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase mix-blend-screen drop-shadow-[0_0_6px_rgba(0,240,255,0.15)]">
                  {marqueeText}
                </span>
                <span className="text-cyan-300/25 text-2xl sm:text-3xl">✦</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ============================================================ */}
      {/* 2. SECONDARY HEADLINE & ACTION CTAs                          */}
      {/* ============================================================ */}
      <div className="relative z-40 max-w-4xl mx-auto px-6 flex flex-col items-center text-center space-y-4 pt-2">
        
        {/* Secondary text with thin cyan accent lines */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center justify-center gap-3 sm:gap-4 w-full"
        >
          <span className="h-px w-8 sm:w-16 md:w-20 bg-gradient-to-r from-transparent to-cyan-500/70 shadow-[0_0_6px_#00f0ff]" />
          <h2 className="font-heading font-medium tracking-[0.25em] text-cyan-300 text-xs sm:text-sm md:text-base uppercase">
            WITH AI, DESIGN &amp; 3D.
          </h2>
          <span className="h-px w-8 sm:w-16 md:w-20 bg-gradient-to-l from-transparent to-cyan-500/70 shadow-[0_0_6px_#00f0ff]" />
        </motion.div>

        {/* Supporting description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl font-sans"
        >
          I create premium websites, AI-powered experiences, automation systems and high-end visual content for modern businesses.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          <MagneticButton
            variant="primary"
            onClick={onViewWork}
            className="text-xs sm:text-sm uppercase tracking-wider font-semibold py-3 px-6 !rounded-full shadow-[0_0_20px_rgba(0,240,255,0.3)]"
          >
            <span>View My Work</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </MagneticButton>

          <MagneticButton
            variant="secondary"
            onClick={onStartProject}
            className="text-xs sm:text-sm uppercase tracking-wider py-3 px-6 !rounded-full text-slate-200 border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]"
          >
            <span>Let's Work Together</span>
          </MagneticButton>
        </motion.div>

        {/* Technical Trust Micro-Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="pt-2 flex items-center justify-center gap-6 text-[11px] text-slate-500 font-mono"
        >
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_5px_#34d399] animate-pulse" />
            <span>Available for Projects</span>
          </div>
          <span className="text-slate-700">•</span>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_5px_#00f0ff]" />
            <span>Worldwide Remote</span>
          </div>
        </motion.div>

      </div>

    </div>
  );
};

export default HeroTypography;

