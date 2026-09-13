import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projects, Project } from '../../data/projects';
import { BellaShowcase } from './BellaShowcase';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { MagneticButton } from '../MagneticButton';

export const SelectedWork: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredProject = projects[0]; // Bella Liveaboard

  const handleOpenBella = () => {
    setSelectedProject(featuredProject);
    setIsModalOpen(true);
  };

  return (
    <section id="work" className="relative py-24 md:py-32 bg-[#05070d] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* ============================================================ */}
        {/* SECTION HEADER & PRIMARY FEATURED: BELLA LIVEABOARD           */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          
          {/* Left Column: Case Study Narrative (as seen in IMAGE 2) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 space-y-6"
          >
            {/* Technical Subheading */}
            <div className="inline-flex items-center gap-2">
              <span className="w-5 h-[1.5px] bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
              <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
                SELECTED WORK
              </span>
            </div>

            {/* Title & Subtitle */}
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                {featuredProject.title}
              </h2>
              <p className="text-base sm:text-lg text-slate-300 font-medium mt-2">
                {featuredProject.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {featuredProject.description}
            </p>

            {/* Tags (as seen in IMAGE 2) */}
            <div className="flex flex-wrap gap-2 pt-1">
              {featuredProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-[#0b1322] border border-cyan-500/20 text-slate-300 hover:border-cyan-400/50 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Button: VIEW PROJECT -> */}
            <div className="pt-2">
              <MagneticButton
                variant="secondary"
                onClick={handleOpenBella}
                className="text-xs uppercase tracking-wider py-3 px-6 !rounded-full text-white border-cyan-500/40 hover:border-cyan-400"
              >
                <span>View Project</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </MagneticButton>
            </div>
          </motion.div>

          {/* Center Column: Bella Device Presentation (3D Tilt Mockup) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <BellaShowcase onOpenModal={handleOpenBella} />
          </motion.div>

          {/* Right Column: More Projects / Coming Soon Card (as seen in IMAGE 2) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2 h-full flex items-center"
          >
            <ProjectCard isPlaceholder={true} />
          </motion.div>

        </div>

      </div>

      {/* Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
