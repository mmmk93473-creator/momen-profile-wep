import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface PortraitLayerProps {
  springX: MotionValue<number>;
  springY: MotionValue<number>;
  isMobile: boolean;
}

export const PortraitLayer: React.FC<PortraitLayerProps> = ({
  springX,
  springY,
  isMobile,
}) => {
  // Portrait remains mostly static in the center: extremely subtle anchored movement
  const portraitX = useTransform(springX, [-1, 1], [-3, 3]);
  const portraitY = useTransform(springY, [-1, 1], [-2, 2]);

  return (
    <div className="relative z-30 w-full max-w-2xl mx-auto flex items-center justify-center select-none pointer-events-none">
      <motion.div
        style={{ x: isMobile ? 0 : portraitX, y: isMobile ? 0 : portraitY }}
        className="relative w-[360px] sm:w-[440px] md:w-[500px] lg:w-[560px] h-[480px] sm:h-[560px] md:h-[620px] lg:h-[660px] flex items-center justify-center overflow-hidden"
      >
        {/* Isolated Real Portrait of Moamen: Soft radial mask eliminates all square edges and isolated artifacts */}
        <div
          className="relative w-full h-full flex items-center justify-center"
          style={{
            WebkitMaskImage: 'radial-gradient(ellipse 48% 68% at 53% 46%, black 45%, transparent 82%)',
            maskImage: 'radial-gradient(ellipse 48% 68% at 53% 46%, black 45%, transparent 82%)',
          }}
        >
          <img
            src="/assets/momen_hero_portrait_master.png"
            alt="MOAMEN — Creative Technologist &amp; AI Developer"
            className="w-[660px] sm:w-[780px] md:w-[860px] lg:w-[940px] max-w-none h-auto object-bottom translate-x-[-11%] sm:translate-x-[-12%] drop-shadow-[0_20px_45px_rgba(0,0,0,0.95)] filter contrast-[1.03] brightness-[1.01] select-none"
            loading="eager"
          />

          {/* Natural silhouette cyan rim light (controlled and subtle, skin tones preserved) */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-500/5 to-transparent mix-blend-screen pointer-events-none" />

          {/* Smooth bottom fade into dark floor */}
          <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#03070d] via-[#03070d]/80 to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </div>
  );
};

export default PortraitLayer;
