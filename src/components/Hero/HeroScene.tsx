import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export const HeroScene: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Mouse coordinates mapped to -1 ... 1
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for high-end cinematic feel
  const springX = useSpring(mouseX, { stiffness: 80, damping: 24 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 24 });

  // Parallax transforms
  const sceneX = useTransform(springX, [-1, 1], [-12, 12]);
  const sceneY = useTransform(springY, [-1, 1], [-8, 8]);
  const glowX = useTransform(springX, [-1, 1], [-20, 20]);
  const glowY = useTransform(springY, [-1, 1], [-15, 15]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const scrollToWork = () => {
    const el = document.getElementById('work');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center select-none overflow-visible pt-4 sm:pt-6">
      
      {/* ============================================================ */}
      {/* LAYER 1: ATMOSPHERIC CYAN & ELECTRIC BLUE VOLUMETRIC GLOW   */}
      {/* ============================================================ */}
      <motion.div
        style={{ x: isMobile ? 0 : glowX, y: isMobile ? 0 : glowY }}
        className="absolute w-[450px] sm:w-[650px] lg:w-[850px] h-[350px] sm:h-[500px] lg:h-[600px] rounded-full bg-gradient-to-tr from-cyan-500/25 via-blue-600/18 to-transparent blur-[140px] pointer-events-none -z-10"
      />
      <div className="absolute top-1/4 w-[320px] md:w-[500px] h-[320px] md:h-[500px] rounded-full bg-cyan-400/15 blur-[120px] pointer-events-none -z-10" />

      {/* ============================================================ */}
      {/* LAYER 2 & 3: MASTER COMPOSITION WITH REAL MOAMEN PORTRAIT   */}
      {/* ============================================================ */}
      <motion.div
        style={{ x: isMobile ? 0 : sceneX, y: isMobile ? 0 : sceneY }}
        className="relative z-30 w-full flex items-center justify-center"
      >
        <div className="relative w-full aspect-[16/9] max-w-[1060px] flex items-center justify-center">
          
          {/* Authentic Real Portrait & Holographic Ecosystem Scene */}
          <img
            src="/assets/moamen_hero_master_scene.png"
            alt="MOAMEN — Creative Technologist &amp; AI Developer"
            className="w-full h-full object-contain object-center drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)] filter contrast-[1.03] brightness-[1.02] select-none pointer-events-none"
            loading="eager"
          />

          {/* Interactive Clickable Hotspot: Bella Liveaboard Project Card */}
          <div
            className="absolute left-[8%] top-[18%] w-[26%] h-[40%] rounded-2xl cursor-pointer group z-40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.25)]"
            onClick={scrollToWork}
            title="View Bella Liveaboard Project"
            role="button"
            tabIndex={0}
            aria-label="View Bella Liveaboard Project"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                scrollToWork();
              }
            }}
          >
            {/* Subtle interactive hover highlight */}
            <div className="absolute inset-0 rounded-2xl border border-cyan-400/0 group-hover:border-cyan-400/40 group-hover:bg-cyan-500/5 backdrop-blur-[2px] transition-all duration-300" />
            <div className="absolute bottom-3 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5 text-[11px] font-mono text-cyan-300 bg-black/80 px-2.5 py-1 rounded-full border border-cyan-400/40 shadow-lg">
              <span>Explore Case</span>
              <ExternalLink className="w-3 h-3 text-cyan-400" />
            </div>
          </div>

          {/* Interactive Clickable Hotspot: Services Area */}
          <div
            className="absolute right-[10%] top-[42%] w-[22%] h-[32%] rounded-2xl cursor-pointer group z-40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]"
            onClick={() => {
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }}
            title="View Services"
            role="button"
            tabIndex={0}
            aria-label="View Services"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <div className="absolute inset-0 rounded-2xl border border-cyan-400/0 group-hover:border-cyan-400/40 group-hover:bg-cyan-500/5 transition-all duration-300" />
          </div>

          {/* Cinematic Light Highlights */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-400/8 to-transparent mix-blend-screen pointer-events-none" />

          {/* Smooth bottom fade into dark floor */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#03060d] via-[#03060d]/80 to-transparent pointer-events-none" />
        </div>
      </motion.div>

    </div>
  );
};
