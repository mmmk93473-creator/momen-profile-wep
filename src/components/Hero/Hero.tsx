import React, { useEffect, useState } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';
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
  const springX = useSpring(mouseX, { stiffness: 75, damping: 26 });
  const springY = useSpring(mouseY, { stiffness: 75, damping: 26 });

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
      className="relative min-h-screen pt-24 pb-20 md:pt-28 md:pb-24 flex flex-col items-center justify-between overflow-hidden bg-[#03070d]"
    >
      {/* ============================================================ */}
      {/* LAYER 0: DARK BACKGROUND BASE (#03070D)                      */}
      {/* ============================================================ */}
      <div className="absolute inset-0 bg-[#03070d] -z-20 pointer-events-none" />

      {/* ============================================================ */}
      {/* LAYER 1: PARTICLE DRIFT CANVAS BACKGROUND                    */}
      {/* ============================================================ */}
      <ParticleDrift
        className="absolute inset-0 h-full w-full pointer-events-none -z-10"
        mode="dark"
        speed={0.55}
        density={0.9}
        opacity={0.45}
      />

      {/* ============================================================ */}
      {/* LAYER 2: HERO ATMOSPHERE (Deep navy gradients, subtle glow)  */}
      {/* ============================================================ */}
      <HeroAtmosphere />

      {/* ============================================================ */}
      {/* LAYER 3 & 4: INDEPENDENT FLOATING SCENE (Cards, Panels, 3D)  */}
      {/* ============================================================ */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-center">
        <FloatingScene
          springX={springX}
          springY={springY}
          isMobile={isMobile}
          onViewWork={scrollToWork}
          onViewServices={scrollToServices}
        />

        {/* ============================================================ */}
        {/* LAYER 5: MOAMEN'S AUTHENTIC REAL PORTRAIT (CENTERED & STABLE) */}
        {/* ============================================================ */}
        <PortraitLayer
          springX={springX}
          springY={springY}
          isMobile={isMobile}
        />
      </div>

      {/* ============================================================ */}
      {/* LAYER 6: FOREGROUND TYPOGRAPHY (Moving Marquee + Secondary)   */}
      {/* ============================================================ */}
      <HeroTypography
        onViewWork={scrollToWork}
        onStartProject={handleStartProject}
      />

      {/* Subtle edge divider */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
    </section>
  );
};

export default Hero;
