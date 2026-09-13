import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code2, Box, Cog, Palette, Layout } from 'lucide-react';

export const CapabilityBar: React.FC = () => {
  const capabilities = [
    { label: 'AI', icon: Cpu, desc: 'Agent Systems & LLM Workflows' },
    { label: 'WEB', icon: Code2, desc: 'High-Performance Web & 3D' },
    { label: '3D', icon: Box, desc: 'Three.js & Spatial Rendering' },
    { label: 'AUTOMATION', icon: Cog, desc: 'Autonomous Business Pipelines' },
    { label: 'CREATIVE', icon: Palette, desc: 'High-Concept Direction & Motion' },
    { label: 'UX/UI', icon: Layout, desc: 'Tactile Conversion Design' },
  ];

  return (
    <section className="relative z-20 border-y border-cyan-500/15 bg-[#070b14]/90 backdrop-blur-xl py-6 md:py-8 overflow-x-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-cyan-500/10 gap-y-4 sm:gap-y-0">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group flex flex-col items-center justify-center p-4 cursor-pointer transition-all duration-300"
              >
                {/* Minimal Cyan Icon */}
                <div className="w-10 h-10 rounded-xl bg-cyan-500/5 border border-cyan-500/15 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:bg-cyan-500/10 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] group-hover:-translate-y-1 transition-all duration-300 mb-2.5">
                  <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Technical Label */}
                <span className="font-heading font-bold text-xs tracking-widest text-slate-300 group-hover:text-cyan-300 transition-colors uppercase">
                  {item.label}
                </span>

                {/* Subtitle desc on hover */}
                <span className="text-[10px] font-mono text-slate-500 group-hover:text-slate-400 text-center transition-colors mt-0.5 max-w-[120px] line-clamp-1">
                  {item.desc}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

