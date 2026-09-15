import React from 'react';
import { motion, MotionValue } from 'framer-motion';
import { ExternalLink, Globe, Layout, Box, Cpu } from 'lucide-react';

interface BellaCardProps {
  x?: MotionValue<number> | number;
  y?: MotionValue<number> | number;
  onViewWork: () => void;
  className?: string;
}

export const BellaCard: React.FC<BellaCardProps> = ({
  x,
  y,
  onViewWork,
  className = '',
}) => {
  return (
    <motion.div
      style={{ x, y }}
      className={`pointer-events-auto select-none ${className}`}
    >
      <div
        data-cursor="project"
        onClick={onViewWork}
        className="rounded-2xl bg-[#060d1b]/90 border border-cyan-500/25 shadow-[0_15px_35px_rgba(0,0,0,0.85),0_0_20px_rgba(0,240,255,0.08)] backdrop-blur-xl p-3 transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(0,240,255,0.18)] group cursor-pointer animate-float-slow max-w-[220px] lg:max-w-[240px]"
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

        {/* Yacht Preview Image */}
        <div className="relative w-full h-20 rounded-xl overflow-hidden mb-1.5 border border-white/5 group-hover:border-cyan-500/30 transition-colors">
          <img
            src="/assets/bella_showcase.jpg"
            alt="Bella Liveaboard Luxury Yacht"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040813] via-transparent to-transparent" />
          <div className="absolute bottom-1.5 left-2 flex items-center gap-1 text-[8.5px] font-mono text-cyan-300 bg-black/70 px-2 py-0.5 rounded-md backdrop-blur-md border border-cyan-500/20">
            <span>View Project</span>
            <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface CodePanelProps {
  x?: MotionValue<number> | number;
  y?: MotionValue<number> | number;
  className?: string;
}

export const CodePanel: React.FC<CodePanelProps> = ({
  x,
  y,
  className = '',
}) => {
  return (
    <motion.div
      style={{ x, y }}
      className={`pointer-events-auto select-none ${className}`}
    >
      <div className="rounded-xl bg-[#060e1c]/90 border border-cyan-500/20 shadow-[0_15px_35px_rgba(0,0,0,0.85),0_0_15px_rgba(0,240,255,0.06)] backdrop-blur-xl p-3 font-mono text-[9px] text-slate-300 animate-float-slow max-w-[200px] lg:max-w-[225px]">
        <div className="flex items-center gap-1.5 pb-1.5 mb-1.5 border-b border-white/5">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500/70" />
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500/70" />
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70" />
          <span className="text-[8px] text-slate-500 ml-1.5">automation-agent.ts</span>
        </div>
        <div className="space-y-0.5 leading-tight text-[8.5px]">
          <div>
            <span className="text-cyan-400">const</span>{' '}
            <span className="text-slate-200">developer</span> = {'{'}
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
  );
};

interface ServicesPanelProps {
  x?: MotionValue<number> | number;
  y?: MotionValue<number> | number;
  onViewServices: () => void;
  className?: string;
}

export const ServicesPanel: React.FC<ServicesPanelProps> = ({
  x,
  y,
  onViewServices,
  className = '',
}) => {
  return (
    <motion.div
      style={{ x, y }}
      className={`pointer-events-auto select-none ${className}`}
    >
      <div
        onClick={onViewServices}
        className="rounded-2xl bg-[#060d1b]/90 border border-cyan-500/20 shadow-[0_15px_35px_rgba(0,0,0,0.8)] backdrop-blur-xl p-3 space-y-2 hover:border-cyan-400/40 transition-colors duration-300 cursor-pointer animate-float max-w-[185px] lg:max-w-[200px]"
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
  );
};

interface WireframeSphereProps {
  x?: MotionValue<number> | number;
  y?: MotionValue<number> | number;
  className?: string;
}

export const WireframeSphere: React.FC<WireframeSphereProps> = ({
  x,
  y,
  className = '',
}) => {
  return (
    <motion.div
      style={{ x, y }}
      className={`pointer-events-none select-none ${className}`}
    >
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center opacity-30">
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
        <div className="absolute w-3.5 h-3.5 rounded-full bg-cyan-400/25 border border-cyan-400/50" />
      </div>
    </motion.div>
  );
};

