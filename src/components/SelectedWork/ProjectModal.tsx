import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { Project } from '../../data/projects';
import { MagneticButton } from '../MagneticButton';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Backdrop blur overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#04060c]/90 backdrop-blur-2xl"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl md:rounded-3xl bg-[#080d19] border border-cyan-500/30 p-6 sm:p-8 md:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.9),0_0_40px_rgba(0,240,255,0.15)] z-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400 hover:bg-cyan-500/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="space-y-3 mb-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
                Featured Case Study
              </span>
              <span className="text-xs font-mono text-slate-400">
                Red Sea Luxury Safaris
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              {project.title}
            </h2>

            <p className="text-base text-cyan-300 font-medium">
              {project.subtitle}
            </p>
          </div>

          {/* Large Visual Preview */}
          <div className="relative rounded-2xl overflow-hidden mb-8 border border-white/15 bg-black/40 shadow-[0_15px_35px_rgba(0,0,0,0.7)]">
            <img
              src={project.mockupDesktop || project.image}
              alt={project.title}
              className="w-full h-auto object-cover max-h-[420px]"
            />
          </div>

          {/* Grid of details: Narrative & Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
            <div className="md:col-span-7 space-y-4">
              <h3 className="text-lg font-heading font-semibold text-white">
                Project Overview &amp; Execution
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.longDescription || project.description}
              </p>

              <div className="pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
                  Core Deliverables
                </h4>
                <div className="space-y-2">
                  {project.deliverables?.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side: Key Metrics & Tags */}
            <div className="md:col-span-5 space-y-6">
              <div className="rounded-xl bg-[#0c1424] border border-cyan-500/15 p-5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                  <Award className="w-4 h-4 text-cyan-400" />
                  <span>Impact Metrics</span>
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {project.metrics?.map((m, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2.5 rounded-lg bg-black/30 border border-white/5">
                      <span className="text-xs text-slate-400">{m.label}</span>
                      <span className="font-heading font-bold text-base text-cyan-300 text-cyan-glow">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                  Disciplines Involved
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-slate-500 font-mono">
              Designed &amp; Built by Momen
            </span>
            <div className="flex items-center gap-3">
              <MagneticButton
                variant="secondary"
                onClick={onClose}
                className="py-2.5 px-5 text-xs text-slate-300"
              >
                Close View
              </MagneticButton>
              <MagneticButton
                variant="primary"
                onClick={() => {
                  onClose();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="py-2.5 px-6 text-xs uppercase tracking-wider"
              >
                <span>Request Similar Project</span>
                <Sparkles className="w-3.5 h-3.5 ml-1.5" />
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
