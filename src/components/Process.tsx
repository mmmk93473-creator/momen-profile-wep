import React from 'react';
import { motion } from 'framer-motion';
import { processSteps } from '../data/process';

export const Process: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 bg-[#04060c] overflow-hidden border-t border-cyan-500/10">
      {/* Background glow and subtle cyber grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-600/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
            <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
              WORKFLOW &amp; EXECUTION
            </span>
            <span className="w-5 h-[1.5px] bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            THE PROCESS
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            A battle-tested 4-phase methodology designed to eliminate uncertainty and deliver flawless, high-converting digital products.
          </p>
        </div>

        {/* 4-Step Process Grid / Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              className="group relative rounded-2xl bg-[#080d19]/80 border border-cyan-500/15 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-cyan-400/50 hover:bg-[#080d19] hover:shadow-[0_15px_40px_rgba(0,240,255,0.12)]"
            >
              {/* Step indicator header */}
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                  <span className="font-heading font-black text-3xl text-slate-600 group-hover:text-cyan-400 transition-colors duration-300">
                    {step.step}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-cyan-500/30 group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_#00f0ff] transition-all" />
                </div>

                <h3 className="font-heading font-bold text-xl text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs font-mono text-cyan-400/80 mb-3">
                  {step.subtitle}
                </p>

                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Deliverables */}
              <div className="pt-4 border-t border-white/5 space-y-1.5">
                {step.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
                    <span className="text-cyan-400 text-[10px]">›</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
