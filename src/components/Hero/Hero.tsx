import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { MagneticButton } from '../MagneticButton';
import { HeroScene } from './HeroScene';
import { ThreeBackground } from './ThreeBackground';

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

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 md:pt-32 md:pb-24 flex items-center justify-center overflow-hidden bg-[#05070d]"
    >
      {/* 3D WebGL Canvas Layer */}
      <ThreeBackground />

      {/* Atmospheric Background Gradients */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-40" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ============================================================ */}
          {/* LEFT: MASTER TYPOGRAPHY & INTRO                              */}
          {/* ============================================================ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-center space-y-6 pt-6 lg:pt-0"
          >
            {/* Small Technical Label */}
            <div className="inline-flex items-center gap-2.5">
              <span className="w-6 h-[1.5px] bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
              <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
                CREATIVE TECH PORTFOLIO
              </span>
            </div>

            {/* Dominant Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              I BUILD DIGITAL <br />
              EXPERIENCES WITH <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 text-cyan-glow">
                AI, DESIGN &amp; 3D.
              </span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-lg font-sans">
              I create premium websites, AI-powered experiences, automation systems and high-end visual content for modern businesses.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <MagneticButton
                variant="primary"
                onClick={scrollToWork}
                className="text-xs sm:text-sm uppercase tracking-wider font-semibold py-3.5 px-7"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </MagneticButton>

              <MagneticButton
                variant="secondary"
                onClick={scrollToContact}
                className="text-xs sm:text-sm uppercase tracking-wider py-3.5 px-7 text-slate-300 border-cyan-500/30 hover:border-cyan-400"
              >
                <span>Let's Work Together</span>
              </MagneticButton>
            </div>

            {/* Technical Trust Micro-Tags */}
            <div className="pt-4 flex items-center gap-6 text-xs text-slate-500 font-mono border-t border-white/5">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Available Q3/Q4</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Worldwide Remote</span>
              </div>
            </div>
          </motion.div>

          {/* ============================================================ */}
          {/* RIGHT: 3D INTERACTIVE HERO SCENE WITH REAL PORTRAIT          */}
          {/* ============================================================ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex items-center justify-center relative"
          >
            <HeroScene />
          </motion.div>

        </div>
      </div>

      {/* Bottom subtle edge divider */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
    </section>
  );
};
