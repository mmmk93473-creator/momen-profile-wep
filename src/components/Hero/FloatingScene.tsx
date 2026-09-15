import React from 'react';
import { MotionValue, useTransform } from 'framer-motion';
import { FloatingIcon } from './FloatingIcon';
import { BellaCard, CodePanel, ServicesPanel, WireframeSphere } from './FloatingCard';

interface FloatingSceneProps {
  springX: MotionValue<number>;
  springY: MotionValue<number>;
  isMobile: boolean;
  onViewWork: () => void;
  onViewServices: () => void;
}

export const FloatingScene: React.FC<FloatingSceneProps> = ({
  springX,
  springY,
  isMobile,
  onViewWork,
  onViewServices,
}) => {
  // Independent parallax depth transforms for each element
  // Cards depth: 14 - 24px
  const bellaX = useTransform(springX, [-1, 1], [-22, 22]);
  const bellaY = useTransform(springY, [-1, 1], [-15, 15]);

  const codeX = useTransform(springX, [-1, 1], [22, -22]);
  const codeY = useTransform(springY, [-1, 1], [-15, 15]);

  const servicesX = useTransform(springX, [-1, 1], [20, -20]);
  const servicesY = useTransform(springY, [-1, 1], [-12, 12]);

  // Icons depth: 10 - 18px
  const aiX = useTransform(springX, [-1, 1], [-16, 16]);
  const aiY = useTransform(springY, [-1, 1], [-18, 18]);

  const threeDX = useTransform(springX, [-1, 1], [16, -16]);
  const threeDY = useTransform(springY, [-1, 1], [-18, 18]);

  const reactX = useTransform(springX, [-1, 1], [15, -15]);
  const reactY = useTransform(springY, [-1, 1], [-10, 10]);

  const blenderX = useTransform(springX, [-1, 1], [12, -12]);
  const blenderY = useTransform(springY, [-1, 1], [-10, 10]);

  // Sphere depth: 12 - 16px
  const sphereX = useTransform(springX, [-1, 1], [-14, 14]);
  const sphereY = useTransform(springY, [-1, 1], [-10, 10]);

  return (
    <div className="absolute inset-0 pointer-events-none z-30 overflow-visible select-none">
      
      {/* ============================================================ */}
      {/* 1. AI FLOATING ICON: Upper-Left (above Moamen's shoulder)     */}
      {/* ============================================================ */}
      <FloatingIcon
        type="ai"
        x={isMobile ? 0 : aiX}
        y={isMobile ? 0 : aiY}
        className="absolute top-2 sm:top-4 left-[14%] sm:left-[20%] lg:left-[25%] z-30"
        animationClass="animate-float"
      />

      {/* ============================================================ */}
      {/* 2. 3D FLOATING ICON: Upper-Right (above Moamen's shoulder)    */}
      {/* ============================================================ */}
      <FloatingIcon
        type="3d"
        x={isMobile ? 0 : threeDX}
        y={isMobile ? 0 : threeDY}
        className="absolute top-2 sm:top-4 right-[14%] sm:right-[20%] lg:right-[25%] z-30"
        animationClass="animate-float-reverse"
      />

      {/* ============================================================ */}
      {/* 3. BELLA LIVEABOARD CARD: Middle-Left (passing behind shoulder)*/}
      {/* ============================================================ */}
      <BellaCard
        x={isMobile ? 0 : bellaX}
        y={isMobile ? 0 : bellaY}
        onViewWork={onViewWork}
        className="hidden md:block absolute left-2 sm:left-4 lg:left-8 xl:left-14 top-14 sm:top-18 z-30"
      />

      {/* ============================================================ */}
      {/* 4. CODE FLOATING PANEL: Middle-Right (passing behind shoulder)*/}
      {/* ============================================================ */}
      <CodePanel
        x={isMobile ? 0 : codeX}
        y={isMobile ? 0 : codeY}
        className="hidden md:block absolute right-2 sm:right-4 lg:right-8 xl:right-14 top-12 sm:top-16 z-30"
      />

      {/* ============================================================ */}
      {/* 5. WIREFRAME SPHERE: Lower-Left area                        */}
      {/* ============================================================ */}
      <WireframeSphere
        x={isMobile ? 0 : sphereX}
        y={isMobile ? 0 : sphereY}
        className="hidden lg:block absolute left-4 sm:left-10 lg:left-16 bottom-16 sm:bottom-20 z-30"
      />

      {/* ============================================================ */}
      {/* 6. REACT FLOATING ICON: Mid-Right area                      */}
      {/* ============================================================ */}
      <FloatingIcon
        type="react"
        x={isMobile ? 0 : reactX}
        y={isMobile ? 0 : reactY}
        className="hidden lg:block absolute right-[22%] sm:right-[26%] bottom-24 sm:bottom-28 z-30"
        animationClass="animate-float"
      />

      {/* ============================================================ */}
      {/* 7. BLENDER / 3D COORDINATE ICON: Lower-Right area           */}
      {/* ============================================================ */}
      <FloatingIcon
        type="blender"
        x={isMobile ? 0 : blenderX}
        y={isMobile ? 0 : blenderY}
        className="hidden lg:block absolute right-[18%] sm:right-[21%] bottom-10 sm:bottom-14 z-30"
        animationClass="animate-float-reverse"
      />

      {/* ============================================================ */}
      {/* 8. SERVICES FLOATING PANEL: Lower-Right area                */}
      {/* ============================================================ */}
      <ServicesPanel
        x={isMobile ? 0 : servicesX}
        y={isMobile ? 0 : servicesY}
        onViewServices={onViewServices}
        className="hidden md:block absolute right-2 sm:right-4 lg:right-8 xl:right-14 bottom-16 sm:bottom-20 z-30"
      />

    </div>
  );
};

export default FloatingScene;
