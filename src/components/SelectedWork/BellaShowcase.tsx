import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface BellaShowcaseProps {
  onOpenModal: () => void;
}

export const BellaShowcase: React.FC<BellaShowcaseProps> = ({ onOpenModal }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="relative w-full perspective-1000 py-4">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onOpenModal}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        data-cursor="project"
        className="relative w-full rounded-2xl md:rounded-3xl bg-[#090f1d]/90 border border-cyan-500/25 p-3 sm:p-5 md:p-6 shadow-[0_25px_60px_rgba(0,0,0,0.85)] group cursor-pointer overflow-hidden transition-shadow duration-500 hover:shadow-[0_30px_80px_rgba(0,240,255,0.2)]"
      >
        {/* Ambient Top Glow Line */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

        {/* Dynamic Sheen following mouse */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Main Mockup Image Container */}
        <div className="relative w-full aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden bg-[#04060b] border border-white/10">
          <img
            src="/assets/bella_device_mockup.jpg"
            alt="Bella Liveaboard Luxury Red Sea Yacht Website Mockup"
            className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />

          {/* Cinematic Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070d]/80 via-transparent to-black/20 pointer-events-none" />

          {/* Interactive Floating Badge on Hover */}
          <div className="absolute bottom-4 right-4 bg-[#05070d]/90 backdrop-blur-md border border-cyan-400/40 px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-mono text-cyan-300 shadow-[0_4px_15px_rgba(0,0,0,0.6)] transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <span>Explore Case Study</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </div>

          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[11px] font-mono text-slate-300 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Featured Production Case Study</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
