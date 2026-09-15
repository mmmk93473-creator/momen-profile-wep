import React, { useEffect, useState } from 'react';
import { useMotionValue, useSpring, useScroll, useTransform, motion } from 'framer-motion';
import { ParticleDrift } from '../ui/particle-drift';
import { HeroAtmosphere } from './HeroAtmosphere';
import { FloatingScene } from './FloatingScene';
import { PortraitLayer } from './PortraitLayer';
import { HeroTypography } from './HeroTypography';

interface HeroProps {
  onStartProject?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Mouse position normalized (-1 ... 1)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for high-end cinematic feel
  const springX = useSpring(mouseX, { stiffness: 70, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 70, damping: 25 });

  // Scroll parallax
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 700], [1, 0.35]);
  const heroContentY = useTransform(scrollY, [0, 700], [0, 80]);

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

  const scrollToServices = () => {
    const el = document.getElementById('services');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleStartProject = () => {
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
      className="relative min-h-screen pt-24 pb-16 md:pt-28 md:pb-20 flex flex-col items-center justify-between overflow-hidden bg-[#030509]"
    >
      {/* ============================================================ */}
      {/* LAYER 0: DARK BACKGROUND BASE (#030509)                      */}
      {/* ============================================================ */}
      <div className="absolute inset-0 bg-[#030509] -z-20 pointer-events-none" />

      {/* ============================================================ */}
      {/* LAYER 1: PARTICLE DRIFT CANVAS BACKGROUND                    */}
      {/* ============================================================ */}
      <ParticleDrift
        className="absolute inset-0 h-full w-full pointer-events-none -z-10"
        mode="dark"
        speed={0.5}
        density={0.85}
        opacity={0.4}
      />

      {/* ============================================================ */}
      {/* LAYER 2: HERO ATMOSPHERE (Deep navy gradients, subtle glow)  */}
      {/* ============================================================ */}
      <HeroAtmosphere />

      {/* ============================================================ */}
      {/* MAIN HERO CONTENT (Parallax scroll container)                */}
      {/* ============================================================ */}
      <motion.div
        style={{ opacity: heroOpacity, y: heroContentY }}
        className="relative w-full flex flex-col items-center justify-between flex-1"
      >
        {/* ============================================================ */}
        {/* LAYERS 3 & 4: INDEPENDENT FLOATING SCENE + MOAMEN PORTRAIT    */}
        {/* Floating Scene is BEHIND Moamen, Portrait is IN FRONT        */}
        {/* ============================================================ */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-center pt-2 sm:pt-4">
          {/* Layer 3: Floating Technology Cards & Icons (z-30, BEHIND) */}
          <FloatingScene
            springX={springX}
            springY={springY}
            isMobile={isMobile}
            onViewWork={scrollToWork}
            onViewServices={scrollToServices}
          />

          {/* Layer 4: Real Centered Portrait of Moamen (z-40, IN FRONT) */}
          <PortraitLayer
            springX={springX}
            springY={springY}
            isMobile={isMobile}
          />
        </div>

        {/* ============================================================ */}
        {/* LAYER 5: FOREGROUND TYPOGRAPHY (Rendered EXACTLY ONCE, z-50)  */}
        {/* ============================================================ */}
        <HeroTypography
          onViewWork={scrollToWork}
          onStartProject={handleStartProject}
        />
      </motion.div>

      {/* Subtle bottom edge divider */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
