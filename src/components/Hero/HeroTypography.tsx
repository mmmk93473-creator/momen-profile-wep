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
  return (
    <div className="relative z-50 w-full flex flex-col items-center select-none -mt-10 sm:-mt-14 md:-mt-18 lg:-mt-20 mb-2">
      
      {/* ============================================================ */}
      {/* 1. PRIMARY HEADLINE: Real HTML text, rendered EXACTLY ONCE    */}
      {/* ============================================================ */}
      <motion.div
        initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 text-center"
      >
        <h1 className="font-heading font-black italic tracking-tighter text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[76px] uppercase leading-none drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)] sm:whitespace-nowrap">
          I BUILD DIGITAL EXPERIENCES
        </h1>
      </motion.div>

      {/* ============================================================ */}
      {/* 2. SUBTITLE: Real HTML text, rendered EXACTLY ONCE           */}
      {/* ============================================================ */}
      <div className="relative max-w-4xl mx-auto px-6 flex flex-col items-center text-center space-y-3 sm:space-y-4 pt-3 sm:pt-4">
        
        {/* Subtitle with subtle neon cyan accent lines */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center justify-center gap-3 sm:gap-4 w-full"
        >
          <span className="h-px w-8 sm:w-16 md:w-20 bg-gradient-to-r from-transparent to-cyan-400/80 shadow-[0_0_8px_#00f0ff]" />
          <div className="font-heading font-semibold tracking-[0.22em] text-cyan-300 text-xs sm:text-sm md:text-base lg:text-lg uppercase">
            WITH AI, DESIGN &amp; 3D.
          </div>
          <span className="h-px w-8 sm:w-16 md:w-20 bg-gradient-to-l from-transparent to-cyan-400/80 shadow-[0_0_8px_#00f0ff]" />
        </motion.div>

        {/* Supporting description */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-slate-300/90 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl font-sans drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
        >
          I create premium websites, AI-powered experiences, automation systems and high-end visual content for modern businesses.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 pt-1"
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
          className="pt-1 flex items-center justify-center gap-6 text-[11px] text-slate-400 font-mono"
        >
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_5px_#34d399] animate-pulse" />
            <span>Available for Projects</span>
          </div>
          <span className="text-slate-600">•</span>
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
