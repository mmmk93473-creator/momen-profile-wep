import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ArrowUpRight } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'philosophy' | 'stack' | 'experience'>('philosophy');

  const stats = [
    { label: 'Specialized Disciplines', value: '05+' },
    { label: 'Creative Tech Projects', value: '100%' },
    { label: 'Performance Standards', value: '60fps' },
    { label: 'Client Collaboration', value: 'Global' },
  ];

  const techStack = [
    { category: 'AI & Intelligence', skills: ['LLM Orchestration', 'Autonomous Agents', 'Custom RAG Pipelines', 'Computer Vision'] },
    { category: '3D & Web Graphics', skills: ['Three.js', 'WebGL', 'Blender Modeling', 'GLSL Shaders', 'Spatial UI'] },
    { category: 'Modern Frontend', skills: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Next.js'] },
    { category: 'Automation & Backend', skills: ['API Integration', 'Cloud Webhooks', 'Node.js', 'Process Automation'] },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#04060b] overflow-hidden border-t border-cyan-500/10">
      {/* Subtle background ambient lights */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
            <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
              ABOUT ME
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            I'M MOMEN
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl font-mono">
            // Creative Technologist, 3D Web Designer &amp; Automation Engineer
          </p>
        </div>

        {/* Asymmetrical High-End Studio Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Authentic Studio Portrait Composition (Distinct from Hero) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#080e1b] border border-cyan-500/25 p-3 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.85)] group">
              {/* Studio photo frame */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/5] bg-black">
                <img
                  src="/assets/momen_studio_showcase.png"
                  alt="Momen in Creative Tech Studio"
                  className="w-full h-full object-cover object-center filter contrast-[1.04] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080e1b] via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Micro-Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#060a14]/90 backdrop-blur-md border border-cyan-400/30 p-3 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
                    <span className="text-xs font-mono text-slate-200">Creative Tech Workstation</span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400">Cairo • Worldwide</span>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-cyan-400 pointer-events-none" />
              <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-cyan-400 pointer-events-none" />
            </div>

            {/* Quick Metrics Bar below image */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              {stats.slice(0, 2).map((s, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#090f1e] border border-cyan-500/15">
                  <div className="font-heading font-bold text-xl text-cyan-300 text-cyan-glow">{s.value}</div>
                  <div className="text-[11px] font-mono text-slate-400 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Narrative, Interactive Tabs, Capabilities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Interactive Tab Switcher */}
            <div className="flex items-center gap-2 p-1.5 rounded-full bg-[#0a1122] border border-cyan-500/20 max-w-md">
              <button
                type="button"
                onClick={() => setActiveTab('philosophy')}
                className={`flex-1 py-2 px-3 text-xs font-mono uppercase tracking-wider rounded-full transition-all duration-300 ${
                  activeTab === 'philosophy'
                    ? 'bg-cyan-500 text-black font-semibold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Philosophy
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('stack')}
                className={`flex-1 py-2 px-3 text-xs font-mono uppercase tracking-wider rounded-full transition-all duration-300 ${
                  activeTab === 'stack'
                    ? 'bg-cyan-500 text-black font-semibold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Tech Matrix
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('experience')}
                className={`flex-1 py-2 px-3 text-xs font-mono uppercase tracking-wider rounded-full transition-all duration-300 ${
                  activeTab === 'experience'
                    ? 'bg-cyan-500 text-black font-semibold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Approach
              </button>
            </div>

            {/* Tab 1: Philosophy Content */}
            {activeTab === 'philosophy' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-5"
              >
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white leading-snug">
                  Merging high-art direction with advanced software engineering.
                </h3>
                <p className="text-slate-300 text-base leading-relaxed">
                  I operate at the intersection of <span className="text-cyan-300 font-medium">Artificial Intelligence</span>, <span className="text-cyan-300 font-medium">Interactive 3D Web</span>, and <span className="text-cyan-300 font-medium">Autonomous Systems</span>. Rather than treating code and aesthetics as separate disciplines, I synthesize them into immersive digital products that leave permanent impressions.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Every product I engineer is measured by two uncompromising metrics: Does it function with zero friction? And does it captivate the user from the very first frame?
                </p>

                {/* Interactive Terminal Snippet */}
                <div className="rounded-xl bg-[#070c17] border border-cyan-500/20 p-4 font-mono text-xs text-slate-300 shadow-inner">
                  <div className="flex items-center gap-2 pb-2 mb-2 border-b border-white/5 text-slate-500 text-[10px]">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>momen@station:~$ profile --skills</span>
                  </div>
                  <div className="space-y-1 text-slate-400">
                    <p className="text-emerald-400">✓ AI-native architecture loaded</p>
                    <p className="text-cyan-300">✓ Three.js / WebGL 60fps rendering pipeline verified</p>
                    <p className="text-blue-400">✓ End-to-end webhook &amp; workflow automation active</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tab 2: Tech Matrix */}
            {activeTab === 'stack' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {techStack.map((group, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#080e1c] border border-cyan-500/15 space-y-2">
                    <h4 className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
                      {group.category}
                    </h4>
                    <ul className="space-y-1 text-xs text-slate-300 font-sans">
                      {group.skills.map((skill, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-cyan-400" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Tab 3: Approach */}
            {activeTab === 'experience' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <div className="p-4 rounded-xl bg-[#080e1c] border border-cyan-500/15">
                  <h4 className="text-sm font-heading font-semibold text-white mb-1">
                    01. Zero Cookie-Cutter Templates
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Every project is architected from absolute scratch to suit your unique positioning and conversion goals.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#080e1c] border border-cyan-500/15">
                  <h4 className="text-sm font-heading font-semibold text-white mb-1">
                    02. Production-Grade Speed
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Heavy visuals never compromise performance. 3D elements and animations are strictly GPU-accelerated and throttled for maximum smoothness.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#080e1c] border border-cyan-500/15">
                  <h4 className="text-sm font-heading font-semibold text-white mb-1">
                    03. Business Conversion Focus
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Eye-candy exists to drive business outcomes: higher user retention, stronger brand authority, and measurable revenue lift.
                  </p>
                </div>
              </motion.div>
            )}

            {/* CTA row */}
            <div className="pt-2 flex items-center gap-4">
              <MagneticButton
                variant="primary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="py-3 px-6 text-xs uppercase tracking-wider"
              >
                <span>Discuss Collaboration</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </MagneticButton>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
