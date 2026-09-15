import React from 'react';
import { motion, MotionValue } from 'framer-motion';

export type FloatingIconType = 'ai' | '3d' | 'react' | 'code' | 'blender';

interface FloatingIconProps {
  type: FloatingIconType;
  className?: string;
  x?: MotionValue<number> | number;
  y?: MotionValue<number> | number;
  animationClass?: string;
}

export const FloatingIcon: React.FC<FloatingIconProps> = ({
  type,
  className = '',
  x,
  y,
  animationClass = 'animate-float',
}) => {
  const renderContent = () => {
    switch (type) {
      case 'ai':
        return (
          <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-[#07111f]/90 to-blue-600/20 border border-cyan-400/40 shadow-[0_0_20px_rgba(0,240,255,0.22)] backdrop-blur-md flex flex-col items-center justify-center transform -rotate-6 group-hover:scale-105 transition-transform">
            <span className="font-heading text-xs sm:text-sm font-black text-cyan-300 tracking-wider">
              AI
            </span>
            <div className="w-2.5 h-0.5 bg-cyan-400/60 rounded-full mt-0.5" />
          </div>
        );

      case '3d':
        return (
          <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-gradient-to-br from-blue-600/20 via-[#07111f]/90 to-cyan-500/20 border border-cyan-400/40 shadow-[0_0_20px_rgba(0,240,255,0.2)] backdrop-blur-md flex flex-col items-center justify-center transform rotate-6 group-hover:scale-105 transition-transform">
            <span className="font-heading text-xs sm:text-sm font-black text-cyan-300 tracking-wider">
              3D
            </span>
            <div className="w-2.5 h-0.5 bg-cyan-400/60 rounded-full mt-0.5" />
          </div>
        );

      case 'react':
        return (
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#07111f]/90 border border-cyan-400/35 shadow-[0_0_15px_rgba(0,240,255,0.2)] backdrop-blur-md flex items-center justify-center group-hover:scale-105 transition-transform">
            <svg
              viewBox="-11.5 -10.23174 23 20.46348"
              className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 animate-spin-slow"
              aria-label="React"
            >
              <circle cx="0" cy="0" r="2.05" fill="currentColor" />
              <g stroke="currentColor" strokeWidth="1" fill="none">
                <ellipse rx="11" ry="4.2" />
                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
              </g>
            </svg>
          </div>
        );

      case 'code':
        return (
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#07111f]/90 border border-cyan-400/35 shadow-[0_0_15px_rgba(0,240,255,0.2)] backdrop-blur-md flex items-center justify-center group-hover:scale-105 transition-transform">
            <span className="font-mono text-xs sm:text-sm font-bold text-cyan-300 tracking-tight">
              &lt;/&gt;
            </span>
          </div>
        );

      case 'blender':
        return (
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#07111f]/90 border border-cyan-400/35 shadow-[0_0_15px_rgba(0,240,255,0.2)] backdrop-blur-md flex items-center justify-center group-hover:scale-105 transition-transform">
            {/* 3D coordinate tripod */}
            <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 3v9m0 0l7 4m-7-4l-7 4" />
              <circle cx="12" cy="12" r="1.5" fill="currentColor" />
            </svg>
          </div>
        );
    }
  };

  return (
    <motion.div
      style={{ x, y }}
      className={`pointer-events-none select-none ${className}`}
    >
      <div className={`group cursor-default ${animationClass}`}>
        {renderContent()}
      </div>
    </motion.div>
  );
};

export default FloatingIcon;

