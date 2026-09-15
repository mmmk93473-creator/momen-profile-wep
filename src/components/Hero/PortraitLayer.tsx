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
  // Portrait remains firmly anchored with subtle micro-parallax [2-3px]
  const portraitX = useTransform(springX, [-1, 1], [-3, 3]);
  const portraitY = useTransform(springY, [-1, 1], [-2, 2]);

  return (
    <div className="relative z-40 w-full max-w-5xl mx-auto flex items-center justify-center select-none pointer-events-none">
      <motion.div
        style={{ x: isMobile ? 0 : portraitX, y: isMobile ? 0 : portraitY }}
        className="relative w-[360px] sm:w-[500px] md:w-[620px] lg:w-[720px] xl:w-[800px] flex items-end justify-center"
      >
        {/* Real Transparent Portrait of Moamen: High presence, perfectly centered */}
        <div className="relative w-full flex items-end justify-center">
          <img
            src="/assets/moamen_portrait_transparent.png"
            alt="Moamen — Creative Technologist &amp; AI Developer"
            className="w-full h-auto object-contain object-bottom drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)] filter contrast-[1.05] brightness-[1.02] select-none"
            loading="eager"
          />

          {/* Smooth bottom fade into dark background base */}
          <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#030509] via-[#030509]/80 to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </div>
  );
};

export default PortraitLayer;
