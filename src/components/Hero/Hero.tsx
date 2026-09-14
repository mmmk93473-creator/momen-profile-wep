import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { MagneticButton } from '../MagneticButton';
import { HeroScene } from './HeroScene';
import { ParticleDrift } from '../ui/particle-drift';

interface HeroProps {
  onStartProject?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject }) => {
  const scrollToWork = () => {
    const el = document.getElementById('work');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    if (onStartProject) {
      onStartProject();
    } else {
      const el = document.getElementById('contact');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const marqueeText = 'I BUILD DIGITAL EXPERIENCES';

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-20 md:pt-28 md:pb-28 flex flex-col items-center justify-between overflow-hidden bg-[#03060d]"
    >
      {/* ============================================================ */}
      {/* LAYER 0: PRIMARY PARTICLE DRIFT CANVAS BACKGROUND            */}
      {/* ============================================================ */}
      <ParticleDrift
        className="absolute inset-0 h-full w-full pointer-events-none z-0"
        mode="dark"
        speed={0.6}
        density={1.1}
        opacity={0.65}
      />

      {/* ============================================================ */}
      {/* LAYER 1: ATMOSPHERIC LIGHTING & DIGITAL TERRAIN FLARES       */}
      {/* ============================================================ */}
      {/* Deep midnight navy radial atmosphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] md:w-[1100px] h-[500px] bg-gradient-to-b from-cyan-600/15 via-blue-900/10 to-transparent rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Subtle cyber grid */}
      <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-25 z-0" />

      {/* Dark digital craggy terrain silhouette on left & right flanks (as seen in reference) */}
      <div className="absolute bottom-0 left-0 w-64 md:w-96 h-48 bg-gradient-to-tr from-[#020409] via-[#050914]/80 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 right-0 w-64 md:w-96 h-48 bg-gradient-to-tl from-[#020409] via-[#050914]/80 to-transparent pointer-events-none z-10" />

      {/* ============================================================ */}
      {/* CENTER STAGE: MOAMEN'S PORTRAIT & FLOATING HOLOGRAPHIC SCENE */}
      {/* ============================================================ */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center">
        <HeroScene />
      </div>

      {/* ============================================================ */}
      {/* LAYER 4: HORIZONTAL MOVING TEXT & BODY CROSSING TRANSPARENCY */}
      {/* Positioned across the lower chest / torso area                */}
      {/* ============================================================ */}
      <div className="relative z-40 w-full overflow-hidden -mt-28 sm:-mt-36 md:-mt-44 lg:-mt-52 mb-6">
        
        {/* Horizontal cyan anamorphic lens flare lines */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent shadow-[0_0_15px_#00f0ff] pointer-events-none z-10" />
        <div className="absolute top-1/2 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-white/80 to-transparent blur-[1px] pointer-events-none z-10" />

        {/* --- LAYER 4A: SOLID GLOWING MARQUEE (Masked to dim over body) --- */}
        <div className="marquee-solid-mask overflow-hidden py-4 select-none">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-12">
            {[...Array(6)].map((_, i) => (
              <div key={`solid-${i}`} className="flex items-center gap-12 shrink-0">
                <span className="font-heading font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-cyan-300 text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase drop-shadow-[0_0_35px_rgba(0,240,255,0.7)]">
                  {marqueeText}
                </span>
                <span className="text-cyan-400/60 text-3xl sm:text-4xl">✦</span>
              </div>
            ))}
          </div>
        </div>

        {/* --- LAYER 4B: TRANSLUCENT OVER-BODY MARQUEE (Revealed ONLY over Moamen's body) --- */}
        <div className="absolute inset-0 marquee-body-reveal overflow-hidden py-4 select-none pointer-events-none z-50">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-12">
            {[...Array(6)].map((_, i) => (
              <div key={`translucent-${i}`} className="flex items-center gap-12 shrink-0">
                <span className="font-heading font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-200/35 via-white/45 to-cyan-200/35 text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase mix-blend-screen drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">
                  {marqueeText}
                </span>
                <span className="text-cyan-300/30 text-3xl sm:text-4xl">✦</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ============================================================ */}
      {/* LAYER 5: SECONDARY TAGLINE, DESCRIPTION & ACTION CTAs       */}
      {/* ============================================================ */}
      <div className="relative z-40 max-w-4xl mx-auto px-6 flex flex-col items-center text-center space-y-5">
        
        {/* Secondary Headline with cyan accent lines (as seen in reference) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="inline-flex items-center justify-center gap-4 w-full"
        >
          <span className="h-px w-8 sm:w-16 md:w-24 bg-gradient-to-r from-transparent to-cyan-400 shadow-[0_0_8px_#00f0ff]" />
          <h2 className="font-heading font-medium tracking-[0.25em] text-cyan-300 text-sm sm:text-base md:text-lg uppercase text-cyan-glow">
            WITH AI, DESIGN &amp; 3D.
          </h2>
          <span className="h-px w-8 sm:w-16 md:w-24 bg-gradient-to-l from-transparent to-cyan-400 shadow-[0_0_8px_#00f0ff]" />
        </motion.div>

        {/* Supporting description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl font-sans"
        >
          I create premium websites, AI-powered experiences, automation systems and high-end visual content for modern businesses.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          <MagneticButton
            variant="primary"
            onClick={scrollToWork}
            className="text-xs sm:text-sm uppercase tracking-wider font-semibold py-3 px-6 !rounded-full shadow-[0_0_25px_rgba(0,240,255,0.4)]"
          >
            <span>View My Work</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </MagneticButton>

          <MagneticButton
            variant="secondary"
            onClick={scrollToContact}
            className="text-xs sm:text-sm uppercase tracking-wider py-3 px-6 !rounded-full text-slate-200 border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,240,255,0.25)]"
          >
            <span>Let's Work Together</span>
          </MagneticButton>
        </motion.div>

        {/* Technical Trust Micro-Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-3 flex items-center justify-center gap-6 text-[11px] text-slate-500 font-mono"
        >
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399] animate-pulse" />
            <span>Available for Projects</span>
          </div>
          <span className="text-slate-700">•</span>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f0ff]" />
            <span>Worldwide Remote</span>
          </div>
        </motion.div>

      </div>

      {/* Bottom subtle edge divider */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent" />
    </section>
  );
};
