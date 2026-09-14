import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import { ExternalLink, Globe, Layout, Box, Cpu } from 'lucide-react';

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
  const bellaX = useTransform(springX, [-1, 1], [-26, 26]);
  const bellaY = useTransform(springY, [-1, 1], [-18, 18]);

  const aiX = useTransform(springX, [-1, 1], [-20, 20]);
  const aiY = useTransform(springY, [-1, 1], [-24, 24]);

  const threeDX = useTransform(springX, [-1, 1], [22, -22]);
  const threeDY = useTransform(springY, [-1, 1], [-20, 20]);

  const codeX = useTransform(springX, [-1, 1], [24, -24]);
  const codeY = useTransform(springY, [-1, 1], [-16, 16]);

  const reactX = useTransform(springX, [-1, 1], [18, -18]);
  const reactY = useTransform(springY, [-1, 1], [-12, 12]);

  const servicesX = useTransform(springX, [-1, 1], [22, -22]);
  const servicesY = useTransform(springY, [-1, 1], [-12, 12]);

  const sphereX = useTransform(springX, [-1, 1], [-16, 16]);
  const sphereY = useTransform(springY, [-1, 1], [-14, 14]);

  return (
    <div className="absolute inset-0 pointer-events-none z-20 overflow-visible select-none">
      
      {/* ============================================================ */}
      {/* 1. BELLA PROJECT CARD: Independent Glass Card (Left of ME)   */}
      {/* ============================================================ */}
      <motion.div
        style={{ x: isMobile ? 0 : bellaX, y: isMobile ? 0 : bellaY }}
        className="hidden md:block absolute left-2 sm:left-6 lg:left-12 xl:left-20 top-24 sm:top-32 z-20 max-w-[230px] lg:max-w-[250px] pointer-events-auto"
      >
        <div
          data-cursor="project"
          onClick={onViewWork}
          className="rounded-2xl bg-[#060c18]/85 border border-cyan-500/25 shadow-[0_15px_35px_rgba(0,0,0,0.85),0_0_15px_rgba(0,240,255,0.06)] backdrop-blur-xl p-3 transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] group cursor-pointer animate-float-slow"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f0ff] animate-pulse" />
              <span className="font-heading font-bold text-xs text-slate-100 tracking-wide">
                Bella Liveaboard
              </span>
            </div>
            <span className="text-[8px] font-mono text-cyan-300 bg-cyan-500/10 px-1.5 py-0.5 rounded-full border border-cyan-500/25">
              Featured
            </span>
          </div>

          <p className="text-[9px] text-slate-400 mb-2 font-mono">
            Website Redesign &amp; Development
          </p>

          {/* Yacht image */}
          <div className="relative w-full h-22 rounded-xl overflow-hidden mb-2 border border-white/5 group-hover:border-cyan-500/30 transition-colors">
            <img
              src="/assets/bella_showcase.jpg"
              alt="Bella Liveaboard Luxury Yacht"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040813] via-transparent to-transparent" />
            <div className="absolute bottom-1.5 left-2 flex items-center gap-1 text-[9px] font-mono text-cyan-300 bg-black/60 px-2 py-0.5 rounded-md backdrop-blur-md border border-cyan-500/20">
              <span>View Project</span>
              <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* ============================================================ */}
      {/* 2. AI CARD: Upper-Center / Left area behind ME               */}
      {/* ============================================================ */}
      <motion.div
        style={{ x: isMobile ? 0 : aiX, y: isMobile ? 0 : aiY }}
        className="absolute top-4 sm:top-6 left-[18%] sm:left-[24%] lg:left-[28%] z-20 pointer-events-none"
      >
        <div className="relative animate-float">
          <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-gradient-to-br from-cyan-500/25 via-[#060e1c]/90 to-blue-600/25 border border-cyan-400/40 shadow-[0_0_20px_rgba(0,240,255,0.25)] backdrop-blur-md flex flex-col items-center justify-center transform -rotate-6">
            <span className="font-heading text-sm sm:text-base font-black text-cyan-300 tracking-wider">
              AI
            </span>
            <div className="w-2 h-0.5 bg-cyan-400/60 rounded-full mt-0.5" />
          </div>
        </div>
      </motion.div>

      {/* ============================================================ */}
      {/* 3. 3D CARD: Upper-Right area behind ME                       */}
      {/* ============================================================ */}
      <motion.div
        style={{ x: isMobile ? 0 : threeDX, y: isMobile ? 0 : threeDY }}
        className="absolute top-4 sm:top-6 right-[18%] sm:right-[24%] lg:right-[28%] z-20 pointer-events-none"
      >
        <div className="relative animate-float-reverse">
          <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-gradient-to-br from-blue-600/25 via-[#060e1c]/90 to-cyan-500/25 border border-cyan-400/40 shadow-[0_0_20px_rgba(0,240,255,0.2)] backdrop-blur-md flex flex-col items-center justify-center transform rotate-6">
            <span className="font-heading text-sm sm:text-base font-black text-cyan-300 tracking-wider">
              3D
            </span>
            <div className="w-2 h-0.5 bg-cyan-400/60 rounded-full mt-0.5" />
          </div>
        </div>
      </motion.div>

      {/* ============================================================ */}
      {/* 4. CODE PANEL: Upper-Right behind ME                         */}
      {/* ============================================================ */}
      <motion.div
        style={{ x: isMobile ? 0 : codeX, y: isMobile ? 0 : codeY }}
        className="hidden md:block absolute right-2 sm:right-6 lg:right-12 xl:right-20 top-20 sm:top-24 z-20 max-w-[210px] lg:max-w-[240px] pointer-events-auto"
      >
        <div className="rounded-xl bg-[#060d19]/85 border border-cyan-500/20 shadow-[0_15px_35px_rgba(0,0,0,0.85)] backdrop-blur-xl p-3 font-mono text-[9.5px] text-slate-300 animate-float-slow">
          <div className="flex items-center gap-1.5 pb-1.5 mb-1.5 border-b border-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500/70" />
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500/70" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70" />
            <span className="text-[8.5px] text-slate-500 ml-1.5">automation-agent.ts</span>
          </div>
          <div className="space-y-0.5 leading-tight text-[9px]">
            <div>
              <span className="text-cyan-400">const</span>{' '}
              <span className="text-slate-200">engineer</span> = {'{'}
            </div>
            <div className="pl-2.5 text-slate-400">
              ai: <span className="text-emerald-400">true</span>,
            </div>
            <div className="pl-2.5 text-slate-400">
              stack: [<span className="text-cyan-300">'React'</span>, <span className="text-cyan-300">'Three'</span>],
            </div>
            <div className="pl-2.5 text-slate-400">
              autonomous: <span className="text-blue-400">true</span>
            </div>
            <div className="text-cyan-400">{'}'};</div>
          </div>
        </div>
      </motion.div>

      {/* ============================================================ */}
      {/* 5. SERVICES PANEL: Lower-Right behind ME                     */}
      {/* ============================================================ */}
      <motion.div
        style={{ x: isMobile ? 0 : servicesX, y: isMobile ? 0 : servicesY }}
        className="hidden md:block absolute right-2 sm:right-6 lg:right-12 xl:right-20 bottom-24 sm:bottom-32 z-20 max-w-[190px] lg:max-w-[210px] pointer-events-auto"
      >
        <div
          onClick={onViewServices}
          className="rounded-2xl bg-[#060c18]/85 border border-cyan-500/20 shadow-[0_15px_35px_rgba(0,0,0,0.8)] backdrop-blur-xl p-3 space-y-2 hover:border-cyan-400/40 transition-colors duration-300 cursor-pointer animate-float"
        >
          <div className="flex items-center gap-2 text-xs font-heading font-medium text-slate-300">
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span>Web Development</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-heading font-medium text-slate-300">
            <Layout className="w-3.5 h-3.5 text-cyan-400" />
            <span>UI/UX Design</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-heading font-medium text-slate-300">
            <Box className="w-3.5 h-3.5 text-cyan-400" />
            <span>3D Visualization</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-heading font-medium text-slate-300">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>AI &amp; Automation</span>
          </div>
        </div>
      </motion.div>

      {/* ============================================================ */}
      {/* 6. REACT ELEMENT: Lower-Right area                           */}
      {/* ============================================================ */}
      <motion.div
        style={{ x: isMobile ? 0 : reactX, y: isMobile ? 0 : reactY }}
        className="hidden lg:block absolute right-[22%] sm:right-[26%] bottom-16 sm:bottom-20 z-20 pointer-events-none"
      >
        <div className="w-9 h-9 rounded-xl bg-[#060d19]/80 border border-cyan-500/25 shadow-[0_0_12px_rgba(0,240,255,0.15)] backdrop-blur-md flex items-center justify-center animate-float">
          <svg
            viewBox="-11.5 -10.23174 23 20.46348"
            className="w-5 h-5 text-cyan-400"
          >
            <circle cx="0" cy="0" r="2.05" fill="currentColor" />
            <g stroke="currentColor" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
          </svg>
        </div>
      </motion.div>

      {/* ============================================================ */}
      {/* 7. WIREFRAME SPHERE: Lower-Left area behind ME               */}
      {/* ============================================================ */}
      <motion.div
        style={{ x: isMobile ? 0 : sphereX, y: isMobile ? 0 : sphereY }}
        className="hidden lg:block absolute left-8 sm:left-14 lg:left-20 bottom-20 sm:bottom-28 z-20 pointer-events-none"
      >
        <div className="relative w-22 h-22 flex items-center justify-center opacity-30">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full text-cyan-400 animate-spin-slow"
          >
            <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 2" />
            <ellipse cx="50" cy="50" rx="42" ry="20" fill="none" stroke="currentColor" strokeWidth="0.8" />
            <ellipse cx="50" cy="50" rx="42" ry="32" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.6" />
            <ellipse cx="50" cy="50" rx="20" ry="42" fill="none" stroke="currentColor" strokeWidth="0.8" />
            <ellipse cx="50" cy="50" rx="32" ry="42" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.6" />
          </svg>
          <div className="absolute w-4 h-4 rounded-full bg-cyan-400/25 border border-cyan-400/50" />
        </div>
      </motion.div>

    </div>
  );
};

export default FloatingScene;

